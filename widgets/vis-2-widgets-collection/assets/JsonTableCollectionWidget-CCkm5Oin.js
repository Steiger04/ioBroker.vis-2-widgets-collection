import { g as _e, a as we, u as ve, Z as Qs, _ as Zs, $ as In, a0 as Kt, h as Zt, j as a, s as Q, d as le, e as xe, a1 as hr, m as me, a2 as fs, b as fe, P as nt, B as oo, c as ae, I as Se, W as G, a3 as Po, M as Fo, X as Et, a4 as bn, a5 as ei, f as mr, a6 as ti, a7 as Xo, i as ke, a8 as gs, a9 as jn, T as I, r as ni, U as oi, aa as ri, L as si, ab as yr, ac as ii, ad as hs, ae as zo, af as li, ag as br, ah as ai, R as ft, o as N, ai as Me, G as b, aj as Ct, ak as St, al as ci, am as ui, D as To, w as Ot, an as di, ao as pi, C as Je, F as xt, ap as fi, aq as gi, n as hi, q as mi, K as Nn, x as yi, y as bi, A as vi, z as vr, E as xi, __tla as __tla_0 } from "./useData-CoMv8b7s.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Rn, __tla as __tla_2 } from "./Checkbox-CjPg9dWs.js";
import { D as Qo, a as Zo, b as er, __tla as __tla_3 } from "./DialogTitle-CJWtNrVp.js";
import { B as it, __tla as __tla_4 } from "./Button-BOWf2z70.js";
import { S as _i, __tla as __tla_5 } from "./Slider-DgHpn0IP.js";
import { F as Nt, __tla as __tla_6 } from "./FormControlLabel-BAm8tbJK.js";
import { S as vn, __tla as __tla_7 } from "./Switch-hq_W31Xv.js";
import { g as wi, M as ie, __tla as __tla_8 } from "./MenuItem-BadMCyai.js";
import { S as Le, __tla as __tla_9 } from "./Stack-CzOOYs5P.js";
import { T as ms, a as ro, __tla as __tla_10 } from "./ToggleButtonGroup-DG2CiFmV.js";
import { C as so, __tla as __tla_11 } from "./Close-CQt1dGJP.js";
import { u as Ci, __tla as __tla_12 } from "./useOidValue-DpZZMIU2.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Dz75iFvF.js";
import { __tla as __tla_14 } from "./listItemTextClasses-CJ06hn_z.js";
let Ko;
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
  function Si(e) {
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
  const ji = (e) => {
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
    return xe(o, Si, n);
  }, Ri = Q("div", {
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
  })(me(({ theme: e }) => ({
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
  }))), Mi = Q("div", {
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
  }), $i = Q("div", {
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
  }), Do = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: s, className: i, collapsedSize: l = "0px", component: c, easing: d, in: u, onEnter: g, onEntered: f, onEntering: p, onExit: h, onExited: m, onExiting: x, orientation: v = "vertical", style: _, timeout: C = Qs.standard, TransitionComponent: j = Zs, ...R } = o, w = {
      ...o,
      orientation: v,
      collapsedSize: l
    }, M = ji(w), z = In(), D = Kt(), A = y.useRef(null), P = y.useRef(), V = typeof l == "number" ? `${l}px` : l, k = v === "horizontal", B = k ? "width" : "height", q = y.useRef(null), U = Zt(n, q), E = (O) => (de) => {
      if (O) {
        const ne = q.current;
        de === void 0 ? O(ne) : O(ne, de);
      }
    }, S = () => A.current ? A.current[k ? "clientWidth" : "clientHeight"] : 0, F = E((O, de) => {
      A.current && k && (A.current.style.position = "absolute"), O.style[B] = V, g && g(O, de);
    }), J = E((O, de) => {
      const ne = S();
      A.current && k && (A.current.style.position = "");
      const { duration: ee, easing: Oe } = hr({
        style: _,
        timeout: C,
        easing: d
      }, {
        mode: "enter"
      });
      if (C === "auto") {
        const Pe = z.transitions.getAutoHeightDuration(ne);
        O.style.transitionDuration = `${Pe}ms`, P.current = Pe;
      } else O.style.transitionDuration = typeof ee == "string" ? ee : `${ee}ms`;
      O.style[B] = `${ne}px`, O.style.transitionTimingFunction = Oe, p && p(O, de);
    }), W = E((O, de) => {
      O.style[B] = "auto", f && f(O, de);
    }), K = E((O) => {
      O.style[B] = `${S()}px`, h && h(O);
    }), X = E(m), ce = E((O) => {
      const de = S(), { duration: ne, easing: ee } = hr({
        style: _,
        timeout: C,
        easing: d
      }, {
        mode: "exit"
      });
      if (C === "auto") {
        const Oe = z.transitions.getAutoHeightDuration(de);
        O.style.transitionDuration = `${Oe}ms`, P.current = Oe;
      } else O.style.transitionDuration = typeof ne == "string" ? ne : `${ne}ms`;
      O.style[B] = V, O.style.transitionTimingFunction = ee, x && x(O);
    }), ue = (O) => {
      C === "auto" && D.start(P.current || 0, O), r && r(q.current, O);
    };
    return a.jsx(j, {
      in: u,
      onEnter: F,
      onEntered: W,
      onEntering: J,
      onExit: K,
      onExited: X,
      onExiting: ce,
      addEndListener: ue,
      nodeRef: q,
      timeout: C === "auto" ? null : C,
      ...R,
      children: (O, { ownerState: de, ...ne }) => a.jsx(Ri, {
        as: c,
        className: le(M.root, i, {
          entered: M.entered,
          exited: !u && V === "0px" && M.hidden
        }[O]),
        style: {
          [k ? "minWidth" : "minHeight"]: V,
          ..._
        },
        ref: U,
        ownerState: {
          ...w,
          state: O
        },
        ...ne,
        children: a.jsx(Mi, {
          ownerState: {
            ...w,
            state: O
          },
          className: M.wrapper,
          ref: A,
          children: a.jsx($i, {
            ownerState: {
              ...w,
              state: O
            },
            className: M.wrapperInner,
            children: s
          })
        })
      })
    });
  });
  Do && (Do.muiSupportAuto = true);
  const ys = y.createContext({});
  function Ai(e) {
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
  ]), Ii = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: s } = e;
    return xe({
      root: [
        "root",
        !n && "rounded",
        o && "expanded",
        r && "disabled",
        !s && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, Ai, t);
  }, Pi = Q(nt, {
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
  })(me(({ theme: e }) => {
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
  }), me(({ theme: e }) => ({
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
  }))), Fi = Q("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Hn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: s, defaultExpanded: i = false, disabled: l = false, disableGutters: c = false, expanded: d, onChange: u, square: g = false, slots: f = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: m, ...x } = o, [v, _] = fs({
      controlled: d,
      default: i,
      name: "Accordion",
      state: "expanded"
    }), C = y.useCallback((S) => {
      _(!v), u && u(S, !v);
    }, [
      v,
      u,
      _
    ]), [j, ...R] = y.Children.toArray(r), w = y.useMemo(() => ({
      expanded: v,
      disabled: l,
      disableGutters: c,
      toggle: C
    }), [
      v,
      l,
      c,
      C
    ]), M = {
      ...o,
      square: g,
      disabled: l,
      disableGutters: c,
      expanded: v
    }, z = Ii(M), D = {
      transition: h,
      ...f
    }, A = {
      transition: m,
      ...p
    }, P = {
      slots: D,
      slotProps: A
    }, [V, k] = fe("root", {
      elementType: Pi,
      externalForwardedProps: {
        ...P,
        ...x
      },
      className: le(z.root, s),
      shouldForwardComponentProp: true,
      ownerState: M,
      ref: n,
      additionalProps: {
        square: g
      }
    }), [B, q] = fe("heading", {
      elementType: Fi,
      externalForwardedProps: P,
      className: z.heading,
      ownerState: M
    }), [U, E] = fe("transition", {
      elementType: Do,
      externalForwardedProps: P,
      ownerState: M
    });
    return a.jsxs(V, {
      ...k,
      children: [
        a.jsx(B, {
          ...q,
          children: a.jsx(ys.Provider, {
            value: w,
            children: j
          })
        }),
        a.jsx(U, {
          in: v,
          timeout: "auto",
          ...E,
          children: a.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: z.region,
            children: R
          })
        })
      ]
    });
  });
  function zi(e) {
    return _e("MuiAccordionDetails", e);
  }
  we("MuiAccordionDetails", [
    "root"
  ]);
  const Ti = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, zi, t);
  }, Di = Q("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(me(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), Vn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...s } = o, i = o, l = Ti(i);
    return a.jsx(Di, {
      className: le(l.root, r),
      ref: n,
      ownerState: i,
      ...s
    });
  });
  function ki(e) {
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
  ]), Ei = (e) => {
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
    }, ki, t);
  }, Oi = Q(oo, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(me(({ theme: e }) => {
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
  })), Ni = Q("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(me(({ theme: e }) => ({
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
  }))), Li = Q("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(me(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${Xt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Bn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: s, expandIcon: i, focusVisibleClassName: l, onClick: c, slots: d, slotProps: u, ...g } = o, { disabled: f = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(ys), x = (A) => {
      m && m(A), c && c(A);
    }, v = {
      ...o,
      expanded: h,
      disabled: f,
      disableGutters: p
    }, _ = Ei(v), C = {
      slots: d,
      slotProps: u
    }, [j, R] = fe("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: le(_.root, s),
      elementType: Oi,
      externalForwardedProps: {
        ...C,
        ...g
      },
      ownerState: v,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: f,
        "aria-expanded": h,
        focusVisibleClassName: le(_.focusVisible, l)
      },
      getSlotProps: (A) => ({
        ...A,
        onClick: (P) => {
          var _a2;
          (_a2 = A.onClick) == null ? void 0 : _a2.call(A, P), x(P);
        }
      })
    }), [w, M] = fe("content", {
      className: _.content,
      elementType: Ni,
      externalForwardedProps: C,
      ownerState: v
    }), [z, D] = fe("expandIconWrapper", {
      className: _.expandIconWrapper,
      elementType: Li,
      externalForwardedProps: C,
      ownerState: v
    });
    return a.jsxs(j, {
      ...R,
      children: [
        a.jsx(w, {
          ...M,
          children: r
        }),
        i && a.jsx(z, {
          ...D,
          children: i
        })
      ]
    });
  });
  function Hi(e) {
    return _e("MuiAlert", e);
  }
  const xr = we("MuiAlert", [
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
  ]), Vi = ae(a.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), Bi = ae(a.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Wi = ae(a.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), Gi = ae(a.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), Ui = ae(a.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), qi = (e) => {
    const { variant: t, color: n, severity: o, classes: r } = e, s = {
      root: [
        "root",
        `color${G(n || o)}`,
        `${t}${G(n || o)}`,
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
    return xe(s, Hi, r);
  }, Yi = Q(nt, {
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
  })(me(({ theme: e }) => {
    const t = e.palette.mode === "light" ? Po : Fo, n = e.palette.mode === "light" ? Fo : Po;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Et([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${xr.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Et([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${xr.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Et([
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
  })), Ji = Q("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), Ki = Q("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), Xi = Q("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), _r = {
    success: a.jsx(Vi, {
      fontSize: "inherit"
    }),
    warning: a.jsx(Bi, {
      fontSize: "inherit"
    }),
    error: a.jsx(Wi, {
      fontSize: "inherit"
    }),
    info: a.jsx(Gi, {
      fontSize: "inherit"
    })
  }, Zn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: s, className: i, closeText: l = "Close", color: c, components: d = {}, componentsProps: u = {}, icon: g, iconMapping: f = _r, onClose: p, role: h = "alert", severity: m = "success", slotProps: x = {}, slots: v = {}, variant: _ = "standard", ...C } = o, j = {
      ...o,
      color: c,
      severity: m,
      variant: _,
      colorSeverity: c || m
    }, R = qi(j), w = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...v
      },
      slotProps: {
        ...u,
        ...x
      }
    }, [M, z] = fe("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: le(R.root, i),
      elementType: Yi,
      externalForwardedProps: {
        ...w,
        ...C
      },
      ownerState: j,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [D, A] = fe("icon", {
      className: R.icon,
      elementType: Ji,
      externalForwardedProps: w,
      ownerState: j
    }), [P, V] = fe("message", {
      className: R.message,
      elementType: Ki,
      externalForwardedProps: w,
      ownerState: j
    }), [k, B] = fe("action", {
      className: R.action,
      elementType: Xi,
      externalForwardedProps: w,
      ownerState: j
    }), [q, U] = fe("closeButton", {
      elementType: Se,
      externalForwardedProps: w,
      ownerState: j
    }), [E, S] = fe("closeIcon", {
      elementType: Ui,
      externalForwardedProps: w,
      ownerState: j
    });
    return a.jsxs(M, {
      ...z,
      children: [
        g !== false ? a.jsx(D, {
          ...A,
          children: g || f[m] || _r[m]
        }) : null,
        a.jsx(P, {
          ...V,
          children: s
        }),
        r != null ? a.jsx(k, {
          ...B,
          children: r
        }) : null,
        r == null && p ? a.jsx(k, {
          ...B,
          children: a.jsx(q, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...U,
            children: a.jsx(E, {
              fontSize: "small",
              ...S
            })
          })
        }) : null
      ]
    });
  });
  var Be = "top", Qe = "bottom", Ze = "right", We = "left", tr = "auto", Pn = [
    Be,
    Qe,
    Ze,
    We
  ], en = "start", Mn = "end", Qi = "clippingParents", bs = "viewport", cn = "popper", Zi = "reference", wr = Pn.reduce(function(e, t) {
    return e.concat([
      t + "-" + en,
      t + "-" + Mn
    ]);
  }, []), vs = [].concat(Pn, [
    tr
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + en,
      t + "-" + Mn
    ]);
  }, []), el = "beforeRead", tl = "read", nl = "afterRead", ol = "beforeMain", rl = "main", sl = "afterMain", il = "beforeWrite", ll = "write", al = "afterWrite", cl = [
    el,
    tl,
    nl,
    ol,
    rl,
    sl,
    il,
    ll,
    al
  ];
  function at(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Ue(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Ht(e) {
    var t = Ue(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Xe(e) {
    var t = Ue(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function nr(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ue(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function ul(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
      !Xe(s) || !at(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
        var l = r[i];
        l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? "" : l);
      }));
    });
  }
  function dl(e) {
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
        var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = i.reduce(function(c, d) {
          return c[d] = "", c;
        }, {});
        !Xe(r) || !at(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(c) {
          r.removeAttribute(c);
        }));
      });
    };
  }
  const pl = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: ul,
    effect: dl,
    requires: [
      "computeStyles"
    ]
  };
  function lt(e) {
    return e.split("-")[0];
  }
  var Lt = Math.max, io = Math.min, tn = Math.round;
  function ko() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function xs() {
    return !/^((?!chrome|android).)*safari/i.test(ko());
  }
  function nn(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, s = 1;
    t && Xe(e) && (r = e.offsetWidth > 0 && tn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && tn(o.height) / e.offsetHeight || 1);
    var i = Ht(e) ? Ue(e) : window, l = i.visualViewport, c = !xs() && n, d = (o.left + (c && l ? l.offsetLeft : 0)) / r, u = (o.top + (c && l ? l.offsetTop : 0)) / s, g = o.width / r, f = o.height / s;
    return {
      width: g,
      height: f,
      top: u,
      right: d + g,
      bottom: u + f,
      left: d,
      x: d,
      y: u
    };
  }
  function or(e) {
    var t = nn(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function _s(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && nr(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function ht(e) {
    return Ue(e).getComputedStyle(e);
  }
  function fl(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(at(e)) >= 0;
  }
  function $t(e) {
    return ((Ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function po(e) {
    return at(e) === "html" ? e : e.assignedSlot || e.parentNode || (nr(e) ? e.host : null) || $t(e);
  }
  function Cr(e) {
    return !Xe(e) || ht(e).position === "fixed" ? null : e.offsetParent;
  }
  function gl(e) {
    var t = /firefox/i.test(ko()), n = /Trident/i.test(ko());
    if (n && Xe(e)) {
      var o = ht(e);
      if (o.position === "fixed") return null;
    }
    var r = po(e);
    for (nr(r) && (r = r.host); Xe(r) && [
      "html",
      "body"
    ].indexOf(at(r)) < 0; ) {
      var s = ht(r);
      if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function Fn(e) {
    for (var t = Ue(e), n = Cr(e); n && fl(n) && ht(n).position === "static"; ) n = Cr(n);
    return n && (at(n) === "html" || at(n) === "body" && ht(n).position === "static") ? t : n || gl(e) || t;
  }
  function rr(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function xn(e, t, n) {
    return Lt(e, io(t, n));
  }
  function hl(e, t, n) {
    var o = xn(e, t, n);
    return o > n ? n : o;
  }
  function ws() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Cs(e) {
    return Object.assign({}, ws(), e);
  }
  function Ss(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var ml = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Cs(typeof t != "number" ? t : Ss(t, Pn));
  };
  function yl(e) {
    var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = lt(n.placement), c = rr(l), d = [
      We,
      Ze
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!s || !i)) {
      var g = ml(r.padding, n), f = or(s), p = c === "y" ? Be : We, h = c === "y" ? Qe : Ze, m = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], x = i[c] - n.rects.reference[c], v = Fn(s), _ = v ? c === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, C = m / 2 - x / 2, j = g[p], R = _ - f[u] - g[h], w = _ / 2 - f[u] / 2 + C, M = xn(j, w, R), z = c;
      n.modifiersData[o] = (t = {}, t[z] = M, t.centerOffset = M - w, t);
    }
  }
  function bl(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || _s(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const vl = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: yl,
    effect: bl,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function on(e) {
    return e.split("-")[1];
  }
  var xl = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function _l(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: tn(n * r) / r || 0,
      y: tn(o * r) / r || 0
    };
  }
  function Sr(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, l = e.position, c = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, g = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, h = i.y, m = h === void 0 ? 0 : h, x = typeof u == "function" ? u({
      x: p,
      y: m
    }) : {
      x: p,
      y: m
    };
    p = x.x, m = x.y;
    var v = i.hasOwnProperty("x"), _ = i.hasOwnProperty("y"), C = We, j = Be, R = window;
    if (d) {
      var w = Fn(n), M = "clientHeight", z = "clientWidth";
      if (w === Ue(n) && (w = $t(n), ht(w).position !== "static" && l === "absolute" && (M = "scrollHeight", z = "scrollWidth")), w = w, r === Be || (r === We || r === Ze) && s === Mn) {
        j = Qe;
        var D = g && w === R && R.visualViewport ? R.visualViewport.height : w[M];
        m -= D - o.height, m *= c ? 1 : -1;
      }
      if (r === We || (r === Be || r === Qe) && s === Mn) {
        C = Ze;
        var A = g && w === R && R.visualViewport ? R.visualViewport.width : w[z];
        p -= A - o.width, p *= c ? 1 : -1;
      }
    }
    var P = Object.assign({
      position: l
    }, d && xl), V = u === true ? _l({
      x: p,
      y: m
    }, Ue(n)) : {
      x: p,
      y: m
    };
    if (p = V.x, m = V.y, c) {
      var k;
      return Object.assign({}, P, (k = {}, k[j] = _ ? "0" : "", k[C] = v ? "0" : "", k.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", k));
    }
    return Object.assign({}, P, (t = {}, t[j] = _ ? m + "px" : "", t[C] = v ? p + "px" : "", t.transform = "", t));
  }
  function wl(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, s = n.adaptive, i = s === void 0 ? true : s, l = n.roundOffsets, c = l === void 0 ? true : l, d = {
      placement: lt(t.placement),
      variation: on(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Sr(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: i,
      roundOffsets: c
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Sr(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: c
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Cl = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: wl,
    data: {}
  };
  var Wn = {
    passive: true
  };
  function Sl(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? true : r, i = o.resize, l = i === void 0 ? true : i, c = Ue(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Wn);
    }), l && c.addEventListener("resize", n.update, Wn), function() {
      s && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Wn);
      }), l && c.removeEventListener("resize", n.update, Wn);
    };
  }
  const jl = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Sl,
    data: {}
  };
  var Rl = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function eo(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Rl[t];
    });
  }
  var Ml = {
    start: "end",
    end: "start"
  };
  function jr(e) {
    return e.replace(/start|end/g, function(t) {
      return Ml[t];
    });
  }
  function sr(e) {
    var t = Ue(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function ir(e) {
    return nn($t(e)).left + sr(e).scrollLeft;
  }
  function $l(e, t) {
    var n = Ue(e), o = $t(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, l = 0, c = 0;
    if (r) {
      s = r.width, i = r.height;
      var d = xs();
      (d || !d && t === "fixed") && (l = r.offsetLeft, c = r.offsetTop);
    }
    return {
      width: s,
      height: i,
      x: l + ir(e),
      y: c
    };
  }
  function Al(e) {
    var t, n = $t(e), o = sr(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Lt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Lt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + ir(e), c = -o.scrollTop;
    return ht(r || n).direction === "rtl" && (l += Lt(n.clientWidth, r ? r.clientWidth : 0) - s), {
      width: s,
      height: i,
      x: l,
      y: c
    };
  }
  function lr(e) {
    var t = ht(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function js(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(at(e)) >= 0 ? e.ownerDocument.body : Xe(e) && lr(e) ? e : js(po(e));
  }
  function _n(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = js(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ue(o), i = r ? [
      s
    ].concat(s.visualViewport || [], lr(o) ? o : []) : o, l = t.concat(i);
    return r ? l : l.concat(_n(po(i)));
  }
  function Eo(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Il(e, t) {
    var n = nn(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function Rr(e, t, n) {
    return t === bs ? Eo($l(e, n)) : Ht(t) ? Il(t, n) : Eo(Al($t(e)));
  }
  function Pl(e) {
    var t = _n(po(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(ht(e).position) >= 0, o = n && Xe(e) ? Fn(e) : e;
    return Ht(o) ? t.filter(function(r) {
      return Ht(r) && _s(r, o) && at(r) !== "body";
    }) : [];
  }
  function Fl(e, t, n, o) {
    var r = t === "clippingParents" ? Pl(e) : [].concat(t), s = [].concat(r, [
      n
    ]), i = s[0], l = s.reduce(function(c, d) {
      var u = Rr(e, d, o);
      return c.top = Lt(u.top, c.top), c.right = io(u.right, c.right), c.bottom = io(u.bottom, c.bottom), c.left = Lt(u.left, c.left), c;
    }, Rr(e, i, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function Rs(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? lt(o) : null, s = o ? on(o) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
    switch (r) {
      case Be:
        c = {
          x: i,
          y: t.y - n.height
        };
        break;
      case Qe:
        c = {
          x: i,
          y: t.y + t.height
        };
        break;
      case Ze:
        c = {
          x: t.x + t.width,
          y: l
        };
        break;
      case We:
        c = {
          x: t.x - n.width,
          y: l
        };
        break;
      default:
        c = {
          x: t.x,
          y: t.y
        };
    }
    var d = r ? rr(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (s) {
        case en:
          c[d] = c[d] - (t[u] / 2 - n[u] / 2);
          break;
        case Mn:
          c[d] = c[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return c;
  }
  function $n(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, c = l === void 0 ? Qi : l, d = n.rootBoundary, u = d === void 0 ? bs : d, g = n.elementContext, f = g === void 0 ? cn : g, p = n.altBoundary, h = p === void 0 ? false : p, m = n.padding, x = m === void 0 ? 0 : m, v = Cs(typeof x != "number" ? x : Ss(x, Pn)), _ = f === cn ? Zi : cn, C = e.rects.popper, j = e.elements[h ? _ : f], R = Fl(Ht(j) ? j : j.contextElement || $t(e.elements.popper), c, u, i), w = nn(e.elements.reference), M = Rs({
      reference: w,
      element: C,
      placement: r
    }), z = Eo(Object.assign({}, C, M)), D = f === cn ? z : w, A = {
      top: R.top - D.top + v.top,
      bottom: D.bottom - R.bottom + v.bottom,
      left: R.left - D.left + v.left,
      right: D.right - R.right + v.right
    }, P = e.modifiersData.offset;
    if (f === cn && P) {
      var V = P[r];
      Object.keys(A).forEach(function(k) {
        var B = [
          Ze,
          Qe
        ].indexOf(k) >= 0 ? 1 : -1, q = [
          Be,
          Qe
        ].indexOf(k) >= 0 ? "y" : "x";
        A[k] += V[q] * B;
      });
    }
    return A;
  }
  function zl(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, d = c === void 0 ? vs : c, u = on(o), g = u ? l ? wr : wr.filter(function(h) {
      return on(h) === u;
    }) : Pn, f = g.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    f.length === 0 && (f = g);
    var p = f.reduce(function(h, m) {
      return h[m] = $n(e, {
        placement: m,
        boundary: r,
        rootBoundary: s,
        padding: i
      })[lt(m)], h;
    }, {});
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  function Tl(e) {
    if (lt(e) === tr) return [];
    var t = eo(e);
    return [
      jr(e),
      t,
      jr(t)
    ];
  }
  function Dl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, s = r === void 0 ? true : r, i = n.altAxis, l = i === void 0 ? true : i, c = n.fallbackPlacements, d = n.padding, u = n.boundary, g = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, m = n.allowedAutoPlacements, x = t.options.placement, v = lt(x), _ = v === x, C = c || (_ || !h ? [
        eo(x)
      ] : Tl(x)), j = [
        x
      ].concat(C).reduce(function(ce, ue) {
        return ce.concat(lt(ue) === tr ? zl(t, {
          placement: ue,
          boundary: u,
          rootBoundary: g,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ue);
      }, []), R = t.rects.reference, w = t.rects.popper, M = /* @__PURE__ */ new Map(), z = true, D = j[0], A = 0; A < j.length; A++) {
        var P = j[A], V = lt(P), k = on(P) === en, B = [
          Be,
          Qe
        ].indexOf(V) >= 0, q = B ? "width" : "height", U = $n(t, {
          placement: P,
          boundary: u,
          rootBoundary: g,
          altBoundary: f,
          padding: d
        }), E = B ? k ? Ze : We : k ? Qe : Be;
        R[q] > w[q] && (E = eo(E));
        var S = eo(E), F = [];
        if (s && F.push(U[V] <= 0), l && F.push(U[E] <= 0, U[S] <= 0), F.every(function(ce) {
          return ce;
        })) {
          D = P, z = false;
          break;
        }
        M.set(P, F);
      }
      if (z) for (var J = h ? 3 : 1, W = function(ue) {
        var O = j.find(function(de) {
          var ne = M.get(de);
          if (ne) return ne.slice(0, ue).every(function(ee) {
            return ee;
          });
        });
        if (O) return D = O, "break";
      }, K = J; K > 0; K--) {
        var X = W(K);
        if (X === "break") break;
      }
      t.placement !== D && (t.modifiersData[o]._skip = true, t.placement = D, t.reset = true);
    }
  }
  const kl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Dl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Mr(e, t, n) {
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
  function $r(e) {
    return [
      Be,
      Ze,
      Qe,
      We
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function El(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = $n(t, {
      elementContext: "reference"
    }), l = $n(t, {
      altBoundary: true
    }), c = Mr(i, o), d = Mr(l, r, s), u = $r(c), g = $r(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: c,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: g
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": g
    });
  }
  const Ol = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: El
  };
  function Nl(e, t, n) {
    var o = lt(e), r = [
      We,
      Be
    ].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, i = s[0], l = s[1];
    return i = i || 0, l = (l || 0) * r, [
      We,
      Ze
    ].indexOf(o) >= 0 ? {
      x: l,
      y: i
    } : {
      x: i,
      y: l
    };
  }
  function Ll(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [
      0,
      0
    ] : r, i = vs.reduce(function(u, g) {
      return u[g] = Nl(g, t.rects, s), u;
    }, {}), l = i[t.placement], c = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = i;
  }
  const Hl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: Ll
  };
  function Vl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Rs({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const Bl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: Vl,
    data: {}
  };
  function Wl(e) {
    return e === "x" ? "y" : "x";
  }
  function Gl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? true : r, i = n.altAxis, l = i === void 0 ? false : i, c = n.boundary, d = n.rootBoundary, u = n.altBoundary, g = n.padding, f = n.tether, p = f === void 0 ? true : f, h = n.tetherOffset, m = h === void 0 ? 0 : h, x = $n(t, {
      boundary: c,
      rootBoundary: d,
      padding: g,
      altBoundary: u
    }), v = lt(t.placement), _ = on(t.placement), C = !_, j = rr(v), R = Wl(j), w = t.modifiersData.popperOffsets, M = t.rects.reference, z = t.rects.popper, D = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, A = typeof D == "number" ? {
      mainAxis: D,
      altAxis: D
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, D), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
      x: 0,
      y: 0
    };
    if (w) {
      if (s) {
        var k, B = j === "y" ? Be : We, q = j === "y" ? Qe : Ze, U = j === "y" ? "height" : "width", E = w[j], S = E + x[B], F = E - x[q], J = p ? -z[U] / 2 : 0, W = _ === en ? M[U] : z[U], K = _ === en ? -z[U] : -M[U], X = t.elements.arrow, ce = p && X ? or(X) : {
          width: 0,
          height: 0
        }, ue = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ws(), O = ue[B], de = ue[q], ne = xn(0, M[U], ce[U]), ee = C ? M[U] / 2 - J - ne - O - A.mainAxis : W - ne - O - A.mainAxis, Oe = C ? -M[U] / 2 + J + ne + de + A.mainAxis : K + ne + de + A.mainAxis, Pe = t.elements.arrow && Fn(t.elements.arrow), he = Pe ? j === "y" ? Pe.clientTop || 0 : Pe.clientLeft || 0 : 0, Ae = (k = P == null ? void 0 : P[j]) != null ? k : 0, je = E + ee - Ae - he, mt = E + Oe - Ae, At = xn(p ? io(S, je) : S, E, p ? Lt(F, mt) : F);
        w[j] = At, V[j] = At - E;
      }
      if (l) {
        var ct, yt = j === "x" ? Be : We, It = j === "x" ? Qe : Ze, Fe = w[R], He = R === "y" ? "height" : "width", Ye = Fe + x[yt], Pt = Fe - x[It], bt = [
          Be,
          We
        ].indexOf(v) !== -1, Ft = (ct = P == null ? void 0 : P[R]) != null ? ct : 0, vt = bt ? Ye : Fe - M[He] - z[He] - Ft + A.altAxis, ut = bt ? Fe + M[He] + z[He] - Ft - A.altAxis : Pt, Bt = p && bt ? hl(vt, Fe, ut) : xn(p ? vt : Ye, Fe, p ? ut : Pt);
        w[R] = Bt, V[R] = Bt - Fe;
      }
      t.modifiersData[o] = V;
    }
  }
  const Ul = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: Gl,
    requiresIfExists: [
      "offset"
    ]
  };
  function ql(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Yl(e) {
    return e === Ue(e) || !Xe(e) ? sr(e) : ql(e);
  }
  function Jl(e) {
    var t = e.getBoundingClientRect(), n = tn(t.width) / e.offsetWidth || 1, o = tn(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function Kl(e, t, n) {
    n === void 0 && (n = false);
    var o = Xe(t), r = Xe(t) && Jl(t), s = $t(t), i = nn(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, c = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((at(t) !== "body" || lr(s)) && (l = Yl(t)), Xe(t) ? (c = nn(t, true), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = ir(s))), {
      x: i.left + l.scrollLeft - c.x,
      y: i.top + l.scrollTop - c.y,
      width: i.width,
      height: i.height
    };
  }
  function Xl(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(s) {
      t.set(s.name, s);
    });
    function r(s) {
      n.add(s.name);
      var i = [].concat(s.requires || [], s.requiresIfExists || []);
      i.forEach(function(l) {
        if (!n.has(l)) {
          var c = t.get(l);
          c && r(c);
        }
      }), o.push(s);
    }
    return e.forEach(function(s) {
      n.has(s.name) || r(s);
    }), o;
  }
  function Ql(e) {
    var t = Xl(e);
    return cl.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Zl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function ea(e) {
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
  var Ar = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ir() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function ta(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Ar : r;
    return function(l, c, d) {
      d === void 0 && (d = s);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ar, s),
        modifiersData: {},
        elements: {
          reference: l,
          popper: c
        },
        attributes: {},
        styles: {}
      }, g = [], f = false, p = {
        state: u,
        setOptions: function(v) {
          var _ = typeof v == "function" ? v(u.options) : v;
          m(), u.options = Object.assign({}, s, u.options, _), u.scrollParents = {
            reference: Ht(l) ? _n(l) : l.contextElement ? _n(l.contextElement) : [],
            popper: _n(c)
          };
          var C = Ql(ea([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = C.filter(function(j) {
            return j.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!f) {
            var v = u.elements, _ = v.reference, C = v.popper;
            if (Ir(_, C)) {
              u.rects = {
                reference: Kl(_, Fn(C), u.options.strategy === "fixed"),
                popper: or(C)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
                return u.modifiersData[A.name] = Object.assign({}, A.data);
              });
              for (var j = 0; j < u.orderedModifiers.length; j++) {
                if (u.reset === true) {
                  u.reset = false, j = -1;
                  continue;
                }
                var R = u.orderedModifiers[j], w = R.fn, M = R.options, z = M === void 0 ? {} : M, D = R.name;
                typeof w == "function" && (u = w({
                  state: u,
                  options: z,
                  name: D,
                  instance: p
                }) || u);
              }
            }
          }
        },
        update: Zl(function() {
          return new Promise(function(x) {
            p.forceUpdate(), x(u);
          });
        }),
        destroy: function() {
          m(), f = true;
        }
      };
      if (!Ir(l, c)) return p;
      p.setOptions(d).then(function(x) {
        !f && d.onFirstUpdate && d.onFirstUpdate(x);
      });
      function h() {
        u.orderedModifiers.forEach(function(x) {
          var v = x.name, _ = x.options, C = _ === void 0 ? {} : _, j = x.effect;
          if (typeof j == "function") {
            var R = j({
              state: u,
              name: v,
              instance: p,
              options: C
            }), w = function() {
            };
            g.push(R || w);
          }
        });
      }
      function m() {
        g.forEach(function(x) {
          return x();
        }), g = [];
      }
      return p;
    };
  }
  var na = [
    jl,
    Bl,
    Cl,
    pl,
    Hl,
    kl,
    Ul,
    vl,
    Ol
  ], oa = ta({
    defaultModifiers: na
  });
  function ra(e) {
    return _e("MuiPopper", e);
  }
  we("MuiPopper", [
    "root"
  ]);
  function sa(e, t) {
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
  function Oo(e) {
    return typeof e == "function" ? e() : e;
  }
  function ia(e) {
    return e.nodeType !== void 0;
  }
  const la = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, ra, t);
  }, aa = {}, ca = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: s, disablePortal: i, modifiers: l, open: c, placement: d, popperOptions: u, popperRef: g, slotProps: f = {}, slots: p = {}, TransitionProps: h, ownerState: m, ...x } = t, v = y.useRef(null), _ = Zt(v, n), C = y.useRef(null), j = Zt(C, g), R = y.useRef(j);
    mr(() => {
      R.current = j;
    }, [
      j
    ]), y.useImperativeHandle(g, () => C.current, []);
    const w = sa(d, s), [M, z] = y.useState(w), [D, A] = y.useState(Oo(o));
    y.useEffect(() => {
      C.current && C.current.forceUpdate();
    }), y.useEffect(() => {
      o && A(Oo(o));
    }, [
      o
    ]), mr(() => {
      if (!D || !c) return;
      const q = (S) => {
        z(S.placement);
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
            q(S);
          }
        }
      ];
      l != null && (U = U.concat(l)), u && u.modifiers != null && (U = U.concat(u.modifiers));
      const E = oa(D, v.current, {
        placement: w,
        ...u,
        modifiers: U
      });
      return R.current(E), () => {
        E.destroy(), R.current(null);
      };
    }, [
      D,
      i,
      l,
      c,
      u,
      w
    ]);
    const P = {
      placement: M
    };
    h !== null && (P.TransitionProps = h);
    const V = la(t), k = p.root ?? "div", B = ti({
      elementType: k,
      externalSlotProps: f.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: _
      },
      ownerState: t,
      className: V.root
    });
    return a.jsx(k, {
      ...B,
      children: typeof r == "function" ? r(P) : r
    });
  }), ua = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: s, direction: i = "ltr", disablePortal: l = false, keepMounted: c = false, modifiers: d, open: u, placement: g = "bottom", popperOptions: f = aa, popperRef: p, style: h, transition: m = false, slotProps: x = {}, slots: v = {}, ..._ } = t, [C, j] = y.useState(true), R = () => {
      j(false);
    }, w = () => {
      j(true);
    };
    if (!c && !u && (!m || C)) return null;
    let M;
    if (s) M = s;
    else if (o) {
      const A = Oo(o);
      M = A && ia(A) ? bn(A).body : bn(null).body;
    }
    const z = !u && c && (!m || C) ? "none" : void 0, D = m ? {
      in: u,
      onEnter: R,
      onExited: w
    } : void 0;
    return a.jsx(ei, {
      disablePortal: l,
      container: M,
      children: a.jsx(ca, {
        anchorEl: o,
        direction: i,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !C : u,
        placement: g,
        popperOptions: f,
        popperRef: p,
        slotProps: x,
        slots: v,
        ..._,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: z,
          ...h
        },
        TransitionProps: D,
        children: r
      })
    });
  }), da = Q(ua, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Ms = y.forwardRef(function(t, n) {
    const o = Xo(), r = ve({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: s, component: i, components: l, componentsProps: c, container: d, disablePortal: u, keepMounted: g, modifiers: f, open: p, placement: h, popperOptions: m, popperRef: x, transition: v, slots: _, slotProps: C, ...j } = r, R = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root), w = {
      anchorEl: s,
      container: d,
      disablePortal: u,
      keepMounted: g,
      modifiers: f,
      open: p,
      placement: h,
      popperOptions: m,
      popperRef: x,
      transition: v,
      ...j
    };
    return a.jsx(da, {
      as: i,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: R
      },
      slotProps: C ?? c,
      ...w,
      ref: n
    });
  }), pa = ae(a.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function fa(e) {
    return _e("MuiChip", e);
  }
  const te = we("MuiChip", [
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
  ]), ga = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: s, onDelete: i, clickable: l, variant: c } = e, d = {
      root: [
        "root",
        c,
        n && "disabled",
        `size${G(o)}`,
        `color${G(r)}`,
        l && "clickable",
        l && `clickableColor${G(r)}`,
        i && "deletable",
        i && `deletableColor${G(r)}`,
        `${c}${G(r)}`
      ],
      label: [
        "label",
        `label${G(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${G(o)}`,
        `avatarColor${G(r)}`
      ],
      icon: [
        "icon",
        `icon${G(o)}`,
        `iconColor${G(s)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${G(o)}`,
        `deleteIconColor${G(r)}`,
        `deleteIcon${G(c)}Color${G(r)}`
      ]
    };
    return xe(d, fa, t);
  }, ha = Q("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: s, onDelete: i, size: l, variant: c } = n;
      return [
        {
          [`& .${te.avatar}`]: t.avatar
        },
        {
          [`& .${te.avatar}`]: t[`avatar${G(l)}`]
        },
        {
          [`& .${te.avatar}`]: t[`avatarColor${G(o)}`]
        },
        {
          [`& .${te.icon}`]: t.icon
        },
        {
          [`& .${te.icon}`]: t[`icon${G(l)}`]
        },
        {
          [`& .${te.icon}`]: t[`iconColor${G(r)}`]
        },
        {
          [`& .${te.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${te.deleteIcon}`]: t[`deleteIcon${G(l)}`]
        },
        {
          [`& .${te.deleteIcon}`]: t[`deleteIconColor${G(o)}`]
        },
        {
          [`& .${te.deleteIcon}`]: t[`deleteIcon${G(c)}Color${G(o)}`]
        },
        t.root,
        t[`size${G(l)}`],
        t[`color${G(o)}`],
        s && t.clickable,
        s && o !== "default" && t[`clickableColor${G(o)})`],
        i && t.deletable,
        i && o !== "default" && t[`deletableColor${G(o)}`],
        t[c],
        t[`${c}${G(o)}`]
      ];
    }
  })(me(({ theme: e }) => {
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
      [`&.${te.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${te.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${te.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${te.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${te.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${te.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${te.deleteIcon}`]: {
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
            [`& .${te.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${te.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(Et([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${te.deleteIcon}`]: {
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
            [`& .${te.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${te.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${te.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ke(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Et([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${te.focusVisible}`]: {
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
            [`&.${te.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ke(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Et([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${te.focusVisible}`]: {
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
            [`&.${te.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${te.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${te.avatar}`]: {
              marginLeft: 4
            },
            [`& .${te.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${te.icon}`]: {
              marginLeft: 4
            },
            [`& .${te.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${te.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${te.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(Et()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ke(e.palette[n].main, 0.7)}`,
            [`&.${te.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ke(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${te.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ke(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${te.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ke(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), ma = Q("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${G(o)}`]
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
  function Pr(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const Rt = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: s, clickable: i, color: l = "default", component: c, deleteIcon: d, disabled: u = false, icon: g, label: f, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: x, size: v = "medium", variant: _ = "filled", tabIndex: C, skipFocusWhenDisabled: j = false, ...R } = o, w = y.useRef(null), M = Zt(w, n), z = (F) => {
      F.stopPropagation(), h && h(F);
    }, D = (F) => {
      F.currentTarget === F.target && Pr(F) && F.preventDefault(), m && m(F);
    }, A = (F) => {
      F.currentTarget === F.target && h && Pr(F) && h(F), x && x(F);
    }, P = i !== false && p ? true : i, V = P || h ? oo : c || "div", k = {
      ...o,
      component: V,
      disabled: u,
      size: v,
      color: l,
      iconColor: y.isValidElement(g) && g.props.color || l,
      onDelete: !!h,
      clickable: P,
      variant: _
    }, B = ga(k), q = V === oo ? {
      component: c || "div",
      focusVisibleClassName: B.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let U = null;
    h && (U = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: le(d.props.className, B.deleteIcon),
      onClick: z
    }) : a.jsx(pa, {
      className: le(B.deleteIcon),
      onClick: z
    }));
    let E = null;
    r && y.isValidElement(r) && (E = y.cloneElement(r, {
      className: le(B.avatar, r.props.className)
    }));
    let S = null;
    return g && y.isValidElement(g) && (S = y.cloneElement(g, {
      className: le(B.icon, g.props.className)
    })), a.jsxs(ha, {
      as: V,
      className: le(B.root, s),
      disabled: P && u ? true : void 0,
      onClick: p,
      onKeyDown: D,
      onKeyUp: A,
      ref: M,
      tabIndex: j && u ? -1 : C,
      ownerState: k,
      ...q,
      ...R,
      children: [
        E || S,
        a.jsx(ma, {
          className: le(B.label),
          ownerState: k,
          children: f
        }),
        U
      ]
    });
  });
  function ya(e) {
    return _e("MuiCard", e);
  }
  we("MuiCard", [
    "root"
  ]);
  const ba = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, ya, t);
  }, va = Q(nt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), xa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: s = false, ...i } = o, l = {
      ...o,
      raised: s
    }, c = ba(l);
    return a.jsx(va, {
      className: le(c.root, r),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function Fr(e) {
    return e.substring(2).toLowerCase();
  }
  function _a(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function wa(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), c = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      c.current = true;
    }, 0), () => {
      c.current = false;
    }), []);
    const u = Zt(gs(t), l), g = jn((h) => {
      const m = d.current;
      d.current = false;
      const x = bn(l.current);
      if (!c.current || !l.current || "clientX" in h && _a(h, x)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let v;
      h.composedPath ? v = h.composedPath().includes(l.current) : v = !x.documentElement.contains(h.target) || l.current.contains(h.target), !v && (n || !m) && r(h);
    }), f = (h) => (m) => {
      d.current = true;
      const x = t.props[h];
      x && x(m);
    }, p = {
      ref: u
    };
    return s !== false && (p[s] = f(s)), y.useEffect(() => {
      if (s !== false) {
        const h = Fr(s), m = bn(l.current), x = () => {
          i.current = true;
        };
        return m.addEventListener(h, g), m.addEventListener("touchmove", x), () => {
          m.removeEventListener(h, g), m.removeEventListener("touchmove", x);
        };
      }
    }, [
      g,
      s
    ]), o !== false && (p[o] = f(o)), y.useEffect(() => {
      if (o !== false) {
        const h = Fr(o), m = bn(l.current);
        return m.addEventListener(h, g), () => {
          m.removeEventListener(h, g);
        };
      }
    }, [
      g,
      o
    ]), y.cloneElement(t, p);
  }
  function Ca(e) {
    return _e("MuiDialogActions", e);
  }
  we("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const Sa = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return xe({
      root: [
        "root",
        !n && "spacing"
      ]
    }, Ca, t);
  }, ja = Q("div", {
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
  }), ar = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: s = false, ...i } = o, l = {
      ...o,
      disableSpacing: s
    }, c = Sa(l);
    return a.jsx(ja, {
      className: le(c.root, r),
      ownerState: l,
      ref: n,
      ...i
    });
  });
  function Ra(e) {
    return _e("MuiDialogContentText", e);
  }
  we("MuiDialogContentText", [
    "root"
  ]);
  const Ma = (e) => {
    const { classes: t } = e, o = xe({
      root: [
        "root"
      ]
    }, Ra, t);
    return {
      ...t,
      ...o
    };
  }, $a = Q(I, {
    shouldForwardProp: (e) => ni(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Aa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiDialogContentText"
    }), { children: r, className: s, ...i } = o, l = Ma(i);
    return a.jsx($a, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: i,
      className: le(l.root, s),
      ...o,
      classes: l
    });
  });
  function Ia(e) {
    return _e("MuiInputAdornment", e);
  }
  const zr = we("MuiInputAdornment", [
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
  var Tr;
  const Pa = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${G(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, Fa = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: s, variant: i } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${G(r)}`,
        i,
        o && "hiddenLabel",
        s && `size${G(s)}`
      ]
    };
    return xe(l, Ia, t);
  }, za = Q("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Pa
  })(me(({ theme: e }) => ({
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
          [`&.${zr.positionStart}&:not(.${zr.hiddenLabel})`]: {
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
  }))), No = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: c = false, position: d, variant: u, ...g } = o, f = oi() || {};
    let p = u;
    u && f.variant, f && !p && (p = f.variant);
    const h = {
      ...o,
      hiddenLabel: f.hiddenLabel,
      size: f.size,
      disablePointerEvents: l,
      position: d,
      variant: p
    }, m = Fa(h);
    return a.jsx(ri.Provider, {
      value: null,
      children: a.jsx(za, {
        as: i,
        ownerState: h,
        className: le(m.root, s),
        ref: n,
        ...g,
        children: typeof r == "string" && !c ? a.jsx(I, {
          color: "textSecondary",
          children: r
        }) : a.jsxs(y.Fragment, {
          children: [
            d === "start" ? Tr || (Tr = a.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), Ta = (e) => {
    const { alignItems: t, classes: n } = e;
    return xe({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, wi, n);
  }, Da = Q("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(me(({ theme: e }) => ({
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
  }))), _t = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiListItemIcon"
    }), { className: r, ...s } = o, i = y.useContext(si), l = {
      ...o,
      alignItems: i.alignItems
    }, c = Ta(l);
    return a.jsx(Da, {
      className: le(c.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  }), ka = ae(a.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Ea = ae(a.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Oa(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: s } = e, i = Kt();
    y.useEffect(() => {
      if (!r) return;
      function v(_) {
        _.defaultPrevented || _.key === "Escape" && (o == null ? void 0 : o(_, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", v), () => {
        document.removeEventListener("keydown", v);
      };
    }, [
      r,
      o
    ]);
    const l = jn((v, _) => {
      o == null ? void 0 : o(v, _);
    }), c = jn((v) => {
      !o || v == null || i.start(v, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (r && c(t), i.clear), [
      r,
      t,
      c,
      i
    ]);
    const d = (v) => {
      o == null ? void 0 : o(v, "clickaway");
    }, u = i.clear, g = y.useCallback(() => {
      t != null && c(s ?? t * 0.5);
    }, [
      t,
      s,
      c
    ]), f = (v) => (_) => {
      const C = v.onBlur;
      C == null ? void 0 : C(_), g();
    }, p = (v) => (_) => {
      const C = v.onFocus;
      C == null ? void 0 : C(_), u();
    }, h = (v) => (_) => {
      const C = v.onMouseEnter;
      C == null ? void 0 : C(_), u();
    }, m = (v) => (_) => {
      const C = v.onMouseLeave;
      C == null ? void 0 : C(_), g();
    };
    return y.useEffect(() => {
      if (!n && r) return window.addEventListener("focus", g), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", g), window.removeEventListener("blur", u);
      };
    }, [
      n,
      r,
      g,
      u
    ]), {
      getRootProps: (v = {}) => {
        const _ = {
          ...yr(e),
          ...yr(v)
        };
        return {
          role: "presentation",
          ...v,
          ..._,
          onBlur: f(_),
          onFocus: p(_),
          onMouseEnter: h(_),
          onMouseLeave: m(_)
        };
      },
      onClickAway: d
    };
  }
  function Na(e) {
    return _e("MuiSnackbarContent", e);
  }
  we("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const La = (e) => {
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
    }, Na, t);
  }, Ha = Q(nt, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(me(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = ii(e.palette.background.default, t);
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
  })), Va = Q("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), Ba = Q("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Wa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: s, message: i, role: l = "alert", ...c } = o, d = o, u = La(d);
    return a.jsxs(Ha, {
      role: l,
      square: true,
      elevation: 6,
      className: le(u.root, s),
      ownerState: d,
      ref: n,
      ...c,
      children: [
        a.jsx(Va, {
          className: u.message,
          ownerState: d,
          children: i
        }),
        r ? a.jsx(Ba, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function Ga(e) {
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
  const Ua = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${G(n.vertical)}${G(n.horizontal)}`
      ]
    };
    return xe(o, Ga, t);
  }, qa = Q("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${G(n.anchorOrigin.vertical)}${G(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(me(({ theme: e }) => ({
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
  }))), Ya = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiSnackbar"
    }), r = In(), s = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: c } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: g, ClickAwayListenerProps: f, ContentProps: p, disableWindowBlurListener: h = false, message: m, onBlur: x, onClose: v, onFocus: _, onMouseEnter: C, onMouseLeave: j, open: R, resumeHideDuration: w, slots: M = {}, slotProps: z = {}, TransitionComponent: D, transitionDuration: A = s, TransitionProps: { onEnter: P, onExited: V, ...k } = {}, ...B } = o, q = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: c
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: D,
      transitionDuration: A
    }, U = Ua(q), { getRootProps: E, onClickAway: S } = Oa({
      ...q
    }), [F, J] = y.useState(true), W = (Ae) => {
      J(true), V && V(Ae);
    }, K = (Ae, je) => {
      J(false), P && P(Ae, je);
    }, X = {
      slots: {
        transition: D,
        ...M
      },
      slotProps: {
        content: p,
        clickAwayListener: f,
        transition: k,
        ...z
      }
    }, [ce, ue] = fe("root", {
      ref: n,
      className: [
        U.root,
        g
      ],
      elementType: qa,
      getSlotProps: E,
      externalForwardedProps: {
        ...X,
        ...B
      },
      ownerState: q
    }), [O, { ownerState: de, ...ne }] = fe("clickAwayListener", {
      elementType: wa,
      externalForwardedProps: X,
      getSlotProps: (Ae) => ({
        onClickAway: (...je) => {
          var _a2;
          (_a2 = Ae.onClickAway) == null ? void 0 : _a2.call(Ae, ...je), S(...je);
        }
      }),
      ownerState: q
    }), [ee, Oe] = fe("content", {
      elementType: Wa,
      shouldForwardComponentProp: true,
      externalForwardedProps: X,
      additionalProps: {
        message: m,
        action: i
      },
      ownerState: q
    }), [Pe, he] = fe("transition", {
      elementType: hs,
      externalForwardedProps: X,
      getSlotProps: (Ae) => ({
        onEnter: (...je) => {
          var _a2;
          (_a2 = Ae.onEnter) == null ? void 0 : _a2.call(Ae, ...je), K(...je);
        },
        onExited: (...je) => {
          var _a2;
          (_a2 = Ae.onExited) == null ? void 0 : _a2.call(Ae, ...je), W(...je);
        }
      }),
      additionalProps: {
        appear: true,
        in: R,
        timeout: A,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: q
    });
    return !R && F ? null : a.jsx(O, {
      ...ne,
      ...M.clickAwayListener && {
        ownerState: de
      },
      children: a.jsx(ce, {
        ...ue,
        children: a.jsx(Pe, {
          ...he,
          children: u || a.jsx(ee, {
            ...Oe
          })
        })
      })
    });
  });
  function Ja(e) {
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
  function Ka(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Xa = (e) => {
    const { classes: t, disableInteractive: n, arrow: o, touch: r, placement: s } = e, i = {
      popper: [
        "popper",
        !n && "popperInteractive",
        o && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        o && "tooltipArrow",
        r && "touch",
        `tooltipPlacement${G(s.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return xe(i, Ja, t);
  }, Qa = Q(Ms, {
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
  })(me(({ theme: e }) => ({
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
  }))), Za = Q("div", {
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
  })(me(({ theme: e }) => ({
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
          lineHeight: `${Ka(16 / 14)}em`,
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
  }))), ec = Q("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(me(({ theme: e }) => ({
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
  let Gn = false;
  const Dr = new li();
  let un = {
    x: 0,
    y: 0
  };
  function Un(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Ee = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: s, classes: i, components: l = {}, componentsProps: c = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: g = false, disableInteractive: f = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: x = 700, followCursor: v = false, id: _, leaveDelay: C = 0, leaveTouchDelay: j = 1500, onClose: R, onOpen: w, open: M, placement: z = "bottom", PopperComponent: D, PopperProps: A = {}, slotProps: P = {}, slots: V = {}, title: k, TransitionComponent: B, TransitionProps: q, ...U } = o, E = y.isValidElement(s) ? s : a.jsx("span", {
      children: s
    }), S = In(), F = Xo(), [J, W] = y.useState(), [K, X] = y.useState(null), ce = y.useRef(false), ue = f || v, O = Kt(), de = Kt(), ne = Kt(), ee = Kt(), [Oe, Pe] = fs({
      controlled: M,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let he = Oe;
    const Ae = zo(_), je = y.useRef(), mt = jn(() => {
      je.current !== void 0 && (document.body.style.WebkitUserSelect = je.current, je.current = void 0), ee.clear();
    });
    y.useEffect(() => mt, [
      mt
    ]);
    const At = (Z) => {
      Dr.clear(), Gn = true, Pe(true), w && !he && w(Z);
    }, ct = jn((Z) => {
      Dr.start(800 + C, () => {
        Gn = false;
      }), Pe(false), R && he && R(Z), O.start(S.transitions.duration.shortest, () => {
        ce.current = false;
      });
    }), yt = (Z) => {
      ce.current && Z.type !== "touchstart" || (J && J.removeAttribute("title"), de.clear(), ne.clear(), h || Gn && m ? de.start(Gn ? m : h, () => {
        At(Z);
      }) : At(Z));
    }, It = (Z) => {
      de.clear(), ne.start(C, () => {
        ct(Z);
      });
    }, [, Fe] = y.useState(false), He = (Z) => {
      br(Z.target) || (Fe(false), It(Z));
    }, Ye = (Z) => {
      J || W(Z.currentTarget), br(Z.target) && (Fe(true), yt(Z));
    }, Pt = (Z) => {
      ce.current = true;
      const $ = E.props;
      $.onTouchStart && $.onTouchStart(Z);
    }, bt = (Z) => {
      Pt(Z), ne.clear(), O.clear(), mt(), je.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ee.start(x, () => {
        document.body.style.WebkitUserSelect = je.current, yt(Z);
      });
    }, Ft = (Z) => {
      E.props.onTouchEnd && E.props.onTouchEnd(Z), mt(), ne.start(j, () => {
        ct(Z);
      });
    };
    y.useEffect(() => {
      if (!he) return;
      function Z($) {
        $.key === "Escape" && ct($);
      }
      return document.addEventListener("keydown", Z), () => {
        document.removeEventListener("keydown", Z);
      };
    }, [
      ct,
      he
    ]);
    const vt = Zt(gs(E), W, n);
    !k && k !== 0 && (he = false);
    const ut = y.useRef(), Bt = (Z) => {
      const $ = E.props;
      $.onMouseMove && $.onMouseMove(Z), un = {
        x: Z.clientX,
        y: Z.clientY
      }, ut.current && ut.current.update();
    }, zt = {}, sn = typeof k == "string";
    d ? (zt.title = !he && sn && !g ? k : null, zt["aria-describedby"] = he ? Ae : null) : (zt["aria-label"] = sn ? k : null, zt["aria-labelledby"] = he && !sn ? Ae : null);
    const ze = {
      ...zt,
      ...U,
      ...E.props,
      className: le(U.className, E.props.className),
      onTouchStart: Pt,
      ref: vt,
      ...v ? {
        onMouseMove: Bt
      } : {}
    }, ot = {};
    p || (ze.onTouchStart = bt, ze.onTouchEnd = Ft), g || (ze.onMouseOver = Un(yt, ze.onMouseOver), ze.onMouseLeave = Un(It, ze.onMouseLeave), ue || (ot.onMouseOver = yt, ot.onMouseLeave = It)), u || (ze.onFocus = Un(Ye, ze.onFocus), ze.onBlur = Un(He, ze.onBlur), ue || (ot.onFocus = Ye, ot.onBlur = He));
    const rt = {
      ...o,
      isRtl: F,
      arrow: r,
      disableInteractive: ue,
      placement: z,
      PopperComponentProp: D,
      touch: ce.current
    }, st = typeof P.popper == "function" ? P.popper(rt) : P.popper, Wt = y.useMemo(() => {
      var _a2, _b;
      let Z = [
        {
          name: "arrow",
          enabled: !!K,
          options: {
            element: K,
            padding: 4
          }
        }
      ];
      return ((_a2 = A.popperOptions) == null ? void 0 : _a2.modifiers) && (Z = Z.concat(A.popperOptions.modifiers)), ((_b = st == null ? void 0 : st.popperOptions) == null ? void 0 : _b.modifiers) && (Z = Z.concat(st.popperOptions.modifiers)), {
        ...A.popperOptions,
        ...st == null ? void 0 : st.popperOptions,
        modifiers: Z
      };
    }, [
      K,
      A.popperOptions,
      st == null ? void 0 : st.popperOptions
    ]), Gt = Xa(rt), Tn = typeof P.transition == "function" ? P.transition(rt) : P.transition, Tt = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? B,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...V
      },
      slotProps: {
        arrow: P.arrow ?? c.arrow,
        popper: {
          ...A,
          ...st ?? c.popper
        },
        tooltip: P.tooltip ?? c.tooltip,
        transition: {
          ...q,
          ...Tn ?? c.transition
        }
      }
    }, [Ut, Dn] = fe("popper", {
      elementType: Qa,
      externalForwardedProps: Tt,
      ownerState: rt,
      className: le(Gt.popper, A == null ? void 0 : A.className)
    }), [mo, gr] = fe("transition", {
      elementType: hs,
      externalForwardedProps: Tt,
      ownerState: rt
    }), [Dt, yo] = fe("tooltip", {
      elementType: Za,
      className: Gt.tooltip,
      externalForwardedProps: Tt,
      ownerState: rt
    }), [kn, En] = fe("arrow", {
      elementType: ec,
      className: Gt.arrow,
      externalForwardedProps: Tt,
      ownerState: rt,
      ref: X
    });
    return a.jsxs(y.Fragment, {
      children: [
        y.cloneElement(E, ze),
        a.jsx(Ut, {
          as: D ?? Ms,
          placement: z,
          anchorEl: v ? {
            getBoundingClientRect: () => ({
              top: un.y,
              left: un.x,
              right: un.x,
              bottom: un.y,
              width: 0,
              height: 0
            })
          } : J,
          popperRef: ut,
          open: J ? he : false,
          id: Ae,
          transition: true,
          ...ot,
          ...Dn,
          popperOptions: Wt,
          children: ({ TransitionProps: Z }) => a.jsx(mo, {
            timeout: S.transitions.duration.shorter,
            ...Z,
            ...gr,
            children: a.jsxs(Dt, {
              ...yo,
              children: [
                k,
                r ? a.jsx(kn, {
                  ...En
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), $s = y.createContext();
  function tc(e) {
    return _e("MuiTable", e);
  }
  we("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const nc = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return xe({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, tc, t);
  }, oc = Q("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(me(({ theme: e }) => ({
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
  }))), kr = "table", rc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTable"
    }), { className: r, component: s = kr, padding: i = "normal", size: l = "medium", stickyHeader: c = false, ...d } = o, u = {
      ...o,
      component: s,
      padding: i,
      size: l,
      stickyHeader: c
    }, g = nc(u), f = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: c
    }), [
      i,
      l,
      c
    ]);
    return a.jsx($s.Provider, {
      value: f,
      children: a.jsx(oc, {
        as: s,
        role: s === kr ? null : "table",
        ref: n,
        className: le(g.root, r),
        ownerState: u,
        ...d
      })
    });
  }), fo = y.createContext();
  function sc(e) {
    return _e("MuiTableBody", e);
  }
  we("MuiTableBody", [
    "root"
  ]);
  const ic = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, sc, t);
  }, lc = Q("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), ac = {
    variant: "body"
  }, Er = "tbody", cc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: s = Er, ...i } = o, l = {
      ...o,
      component: s
    }, c = ic(l);
    return a.jsx(fo.Provider, {
      value: ac,
      children: a.jsx(lc, {
        className: le(c.root, r),
        as: s,
        ref: n,
        role: s === Er ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function uc(e) {
    return _e("MuiTableCell", e);
  }
  const dc = we("MuiTableCell", [
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
  ]), pc = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: s, stickyHeader: i } = e, l = {
      root: [
        "root",
        n,
        i && "stickyHeader",
        o !== "inherit" && `align${G(o)}`,
        r !== "normal" && `padding${G(r)}`,
        `size${G(s)}`
      ]
    };
    return xe(l, uc, t);
  }, fc = Q("td", {
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
  })(me(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Fo(ke(e.palette.divider, 1), 0.88) : Po(ke(e.palette.divider, 1), 0.68)}`,
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
          [`&.${dc.paddingCheckbox}`]: {
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
  }))), et = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: s, component: i, padding: l, scope: c, size: d, sortDirection: u, variant: g, ...f } = o, p = y.useContext($s), h = y.useContext(fo), m = h && h.variant === "head";
    let x;
    i ? x = i : x = m ? "th" : "td";
    let v = c;
    x === "td" ? v = void 0 : !v && m && (v = "col");
    const _ = g || h && h.variant, C = {
      ...o,
      align: r,
      component: x,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: d || (p && p.size ? p.size : "medium"),
      sortDirection: u,
      stickyHeader: _ === "head" && p && p.stickyHeader,
      variant: _
    }, j = pc(C);
    let R = null;
    return u && (R = u === "asc" ? "ascending" : "descending"), a.jsx(fc, {
      as: x,
      ref: n,
      className: le(j.root, s),
      "aria-sort": R,
      scope: v,
      ownerState: C,
      ...f
    });
  });
  function gc(e) {
    return _e("MuiTableContainer", e);
  }
  we("MuiTableContainer", [
    "root"
  ]);
  const hc = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, gc, t);
  }, mc = Q("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), yc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: s = "div", ...i } = o, l = {
      ...o,
      component: s
    }, c = hc(l);
    return a.jsx(mc, {
      ref: n,
      as: s,
      className: le(c.root, r),
      ownerState: l,
      ...i
    });
  });
  function bc(e) {
    return _e("MuiTableHead", e);
  }
  we("MuiTableHead", [
    "root"
  ]);
  const vc = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, bc, t);
  }, xc = Q("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), _c = {
    variant: "head"
  }, Or = "thead", wc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: s = Or, ...i } = o, l = {
      ...o,
      component: s
    }, c = vc(l);
    return a.jsx(fo.Provider, {
      value: _c,
      children: a.jsx(xc, {
        as: s,
        className: le(c.root, r),
        ref: n,
        role: s === Or ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Cc(e) {
    return _e("MuiToolbar", e);
  }
  we("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Sc = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return xe({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Cc, t);
  }, jc = Q("div", {
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
  })(me(({ theme: e }) => ({
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
  }))), As = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: s = "div", disableGutters: i = false, variant: l = "regular", ...c } = o, d = {
      ...o,
      component: s,
      disableGutters: i,
      variant: l
    }, u = Sc(d);
    return a.jsx(jc, {
      as: s,
      className: le(u.root, r),
      ref: n,
      ownerState: d,
      ...c
    });
  }), Rc = ae(a.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Mc = ae(a.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), $c = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: c, page: d, rowsPerPage: u, showFirstButton: g, showLastButton: f, slots: p = {}, slotProps: h = {}, ...m } = t, x = Xo(), v = (W) => {
      c(W, 0);
    }, _ = (W) => {
      c(W, d - 1);
    }, C = (W) => {
      c(W, d + 1);
    }, j = (W) => {
      c(W, Math.max(0, Math.ceil(r / u) - 1));
    }, R = p.firstButton ?? Se, w = p.lastButton ?? Se, M = p.nextButton ?? Se, z = p.previousButton ?? Se, D = p.firstButtonIcon ?? ka, A = p.lastButtonIcon ?? Ea, P = p.nextButtonIcon ?? Mc, V = p.previousButtonIcon ?? Rc, k = x ? w : R, B = x ? M : z, q = x ? z : M, U = x ? R : w, E = x ? h.lastButton : h.firstButton, S = x ? h.nextButton : h.previousButton, F = x ? h.previousButton : h.nextButton, J = x ? h.firstButton : h.lastButton;
    return a.jsxs("div", {
      ref: n,
      ...m,
      children: [
        g && a.jsx(k, {
          onClick: v,
          disabled: s || d === 0,
          "aria-label": i("first", d),
          title: i("first", d),
          ...E,
          children: x ? a.jsx(A, {
            ...h.lastButtonIcon
          }) : a.jsx(D, {
            ...h.firstButtonIcon
          })
        }),
        a.jsx(B, {
          onClick: _,
          disabled: s || d === 0,
          color: "inherit",
          "aria-label": i("previous", d),
          title: i("previous", d),
          ...S ?? o,
          children: x ? a.jsx(P, {
            ...h.nextButtonIcon
          }) : a.jsx(V, {
            ...h.previousButtonIcon
          })
        }),
        a.jsx(q, {
          onClick: C,
          disabled: s || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": i("next", d),
          title: i("next", d),
          ...F ?? l,
          children: x ? a.jsx(V, {
            ...h.previousButtonIcon
          }) : a.jsx(P, {
            ...h.nextButtonIcon
          })
        }),
        f && a.jsx(U, {
          onClick: j,
          disabled: s || d >= Math.ceil(r / u) - 1,
          "aria-label": i("last", d),
          title: i("last", d),
          ...J,
          children: x ? a.jsx(D, {
            ...h.firstButtonIcon
          }) : a.jsx(A, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Ac(e) {
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
  var Nr;
  const Ic = Q(et, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(me(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), Pc = Q(As, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${wn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(me(({ theme: e }) => ({
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
  }))), Fc = Q("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), zc = Q("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(me(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), Tc = Q(ft, {
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
  }), Dc = Q(ie, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), kc = Q("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(me(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function Ec({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function Oc(e) {
    return `Go to ${e} page`;
  }
  const Nc = (e) => {
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
    }, Ac, t);
  }, Lc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = $c, backIconButtonProps: s, colSpan: i, component: l = et, count: c, disabled: d = false, getItemAriaLabel: u = Oc, labelDisplayedRows: g = Ec, labelRowsPerPage: f = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: m, page: x, rowsPerPage: v, rowsPerPageOptions: _ = [
      10,
      25,
      50,
      100
    ], SelectProps: C = {}, showFirstButton: j = false, showLastButton: R = false, slotProps: w = {}, slots: M = {}, ...z } = o, D = o, A = Nc(D), P = (w == null ? void 0 : w.select) ?? C, V = P.native ? "option" : Dc;
    let k;
    (l === et || l === "td") && (k = i || 1e3);
    const B = zo(P.id), q = zo(P.labelId), U = () => c === -1 ? (x + 1) * v : v === -1 ? c : Math.min(c, (x + 1) * v), E = {
      slots: M,
      slotProps: w
    }, [S, F] = fe("root", {
      ref: n,
      className: A.root,
      elementType: Ic,
      externalForwardedProps: {
        ...E,
        component: l,
        ...z
      },
      ownerState: D,
      additionalProps: {
        colSpan: k
      }
    }), [J, W] = fe("toolbar", {
      className: A.toolbar,
      elementType: Pc,
      externalForwardedProps: E,
      ownerState: D
    }), [K, X] = fe("spacer", {
      className: A.spacer,
      elementType: Fc,
      externalForwardedProps: E,
      ownerState: D
    }), [ce, ue] = fe("selectLabel", {
      className: A.selectLabel,
      elementType: zc,
      externalForwardedProps: E,
      ownerState: D,
      additionalProps: {
        id: q
      }
    }), [O, de] = fe("select", {
      className: A.select,
      elementType: Tc,
      externalForwardedProps: E,
      ownerState: D
    }), [ne, ee] = fe("menuItem", {
      className: A.menuItem,
      elementType: V,
      externalForwardedProps: E,
      ownerState: D
    }), [Oe, Pe] = fe("displayedRows", {
      className: A.displayedRows,
      elementType: kc,
      externalForwardedProps: E,
      ownerState: D
    });
    return a.jsx(S, {
      ...F,
      children: a.jsxs(J, {
        ...W,
        children: [
          a.jsx(K, {
            ...X
          }),
          _.length > 1 && a.jsx(ce, {
            ...ue,
            children: f
          }),
          _.length > 1 && a.jsx(O, {
            variant: "standard",
            ...!P.variant && {
              input: Nr || (Nr = a.jsx(ai, {}))
            },
            value: v,
            onChange: m,
            id: B,
            labelId: q,
            ...P,
            classes: {
              ...P.classes,
              root: le(A.input, A.selectRoot, (P.classes || {}).root),
              select: le(A.select, (P.classes || {}).select),
              icon: le(A.selectIcon, (P.classes || {}).icon)
            },
            disabled: d,
            ...de,
            children: _.map((he) => y.createElement(ne, {
              ...ee,
              key: he.label ? he.label : he,
              value: he.value ? he.value : he
            }, he.label ? he.label : he))
          }),
          a.jsx(Oe, {
            ...Pe,
            children: g({
              from: c === 0 ? 0 : x * v + 1,
              to: U(),
              count: c === -1 ? -1 : c,
              page: x
            })
          }),
          a.jsx(r, {
            className: A.actions,
            backIconButtonProps: s,
            count: c,
            nextIconButtonProps: p,
            onPageChange: h,
            page: x,
            rowsPerPage: v,
            showFirstButton: j,
            showLastButton: R,
            slotProps: w.actions,
            slots: M.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function Hc(e) {
    return _e("MuiTableRow", e);
  }
  const Lr = we("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), Vc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: s } = e;
    return xe({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        s && "footer"
      ]
    }, Hc, t);
  }, Bc = Q("tr", {
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
  })(me(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${Lr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${Lr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ke(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Hr = "tr", qt = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: s = Hr, hover: i = false, selected: l = false, ...c } = o, d = y.useContext(fo), u = {
      ...o,
      component: s,
      hover: i,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, g = Vc(u);
    return a.jsx(Bc, {
      as: s,
      ref: n,
      className: le(g.root, r),
      role: s === Hr ? null : "row",
      ownerState: u,
      ...c
    });
  }), Wc = ae(a.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function Gc(e) {
    return _e("MuiTableSortLabel", e);
  }
  const vo = we("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), Uc = (e) => {
    const { classes: t, direction: n, active: o } = e, r = {
      root: [
        "root",
        o && "active",
        `direction${G(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${G(n)}`
      ]
    };
    return xe(r, Gc, t);
  }, qc = Q(oo, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(me(({ theme: e }) => ({
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
      [`& .${vo.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${vo.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${vo.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), Yc = Q("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${G(n.direction)}`]
      ];
    }
  })(me(({ theme: e }) => ({
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
  }))), Jc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: s, className: i, direction: l = "asc", hideSortIcon: c = false, IconComponent: d = Wc, slots: u = {}, slotProps: g = {}, ...f } = o, p = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: c,
      IconComponent: d
    }, h = Uc(p), m = {
      slots: u,
      slotProps: g
    }, [x, v] = fe("root", {
      elementType: qc,
      externalForwardedProps: m,
      ownerState: p,
      className: le(h.root, i),
      ref: n
    }), [_, C] = fe("icon", {
      elementType: Yc,
      externalForwardedProps: m,
      ownerState: p,
      className: h.icon
    });
    return a.jsxs(x, {
      disableRipple: true,
      component: "span",
      ...v,
      ...f,
      children: [
        s,
        c && !r ? null : a.jsx(_, {
          as: d,
          ...C
        })
      ]
    });
  }), Is = ae(a.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Ps = ae(a.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Fs = ae(a.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), Kc = ae(a.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), Vr = ae(a.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), cr = ae(a.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), Xc = ae(a.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Qc = ae(a.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), qn = ae(a.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Zc = ae(a.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), Br = ae(a.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Wr = ae(a.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), eu = ae(a.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), xo = ae(a.jsx("path", {
    fillRule: "evenodd",
    d: "M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3"
  }), "PushPin"), tu = ae(a.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), yn = ae(a.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), zs = ae(a.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), nu = ae(a.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), ou = ae(a.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Ts = ae(a.jsx("path", {
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
  }, Gr = "b64:";
  function ru(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function su(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  function Ds(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(Gr) ? su(e.slice(Gr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function iu({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: s, loading: i }) {
    const [l, c] = y.useState(""), [d, u] = y.useState(null), [g, f] = y.useState(null), [p, h] = y.useState(false), m = y.useRef(0), x = y.useRef(/* @__PURE__ */ new Map()), v = !l, _ = y.useMemo(() => {
      if (!l) return e;
      const S = l.toLowerCase();
      return e.filter((F) => F.path.toLowerCase().includes(S) || F.headerName.toLowerCase().includes(S));
    }, [
      e,
      l
    ]), C = y.useMemo(() => e.filter((S) => S.visible).length, [
      e
    ]), j = y.useCallback((S) => {
      r(e.map((F) => F.path === S ? {
        ...F,
        visible: !F.visible
      } : F));
    }, [
      e,
      r
    ]), R = y.useCallback((S, F) => {
      S.stopPropagation(), j(F);
    }, [
      j
    ]), w = y.useCallback((S) => (F) => {
      F ? x.current.set(S, F) : x.current.delete(S);
    }, []), M = y.useCallback((S) => {
      r(e.map((F) => ({
        ...F,
        visible: S
      })));
    }, [
      e,
      r
    ]), z = y.useCallback((S, F) => {
      S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", F), u(F);
    }, []), D = y.useCallback((S, F) => {
      S.preventDefault(), m.current += 1, F !== d && f(F);
    }, [
      d
    ]), A = y.useCallback((S) => {
      S.preventDefault(), m.current -= 1, m.current <= 0 && (m.current = 0, f(null));
    }, []), P = y.useCallback((S) => {
      S.preventDefault(), S.dataTransfer.dropEffect = "move";
    }, []), V = y.useCallback((S, F) => {
      S.preventDefault(), m.current = 0, f(null), u(null);
      const J = S.dataTransfer.getData("text/plain");
      if (!J || J === F) return;
      const W = [
        ...e
      ], K = W.findIndex((O) => O.path === J), X = W.findIndex((O) => O.path === F);
      if (K === -1 || X === -1) return;
      const [ce] = W.splice(K, 1), ue = K < X ? X - 1 : X;
      W.splice(ue, 0, ce), r(W);
    }, [
      e,
      r
    ]), k = y.useCallback(() => {
      m.current = 0, u(null), f(null);
    }, []), B = y.useCallback(() => {
      r(e.map((S) => ({
        path: S.path,
        visible: true,
        headerName: S.path.split(".").pop() || S.path
      }))), h(false);
    }, [
      e,
      r
    ]), q = y.useCallback(() => {
      h(true);
    }, []), U = y.useCallback(() => {
      h(false);
    }, []), E = y.useCallback((S, F, J) => {
      var _a2, _b;
      switch (S.key) {
        case "Enter":
        case " ":
          S.preventDefault(), o(F.path);
          break;
        case "ArrowDown":
          if (S.preventDefault(), J < _.length - 1) {
            const W = _[J + 1].path;
            o(W), (_a2 = x.current.get(W)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (S.preventDefault(), J > 0) {
            const W = _[J - 1].path;
            o(W), (_b = x.current.get(W)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          S.preventDefault(), j(F.path);
          break;
      }
    }, [
      _,
      o,
      j
    ]);
    return a.jsxs(N, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        a.jsxs(As, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            a.jsx(Me, {
              size: "small",
              placeholder: b.t("json_table_search_columns"),
              value: l,
              onChange: (S) => c(S.target.value),
              slotProps: {
                input: {
                  startAdornment: a.jsx(No, {
                    position: "start",
                    children: a.jsx(zs, {
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
            a.jsx(Ee, {
              title: b.t("json_table_refresh_columns"),
              children: a.jsx("span", {
                children: a.jsx(Se, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": b.t("json_table_refresh_columns"),
                  children: a.jsx(tu, {
                    fontSize: "small"
                  })
                })
              })
            }),
            a.jsx(Ee, {
              title: b.t("json_table_show_all"),
              children: a.jsx(Se, {
                size: "small",
                onClick: () => M(true),
                "aria-label": b.t("json_table_show_all"),
                children: a.jsx(ou, {
                  fontSize: "small"
                })
              })
            }),
            a.jsx(Ee, {
              title: b.t("json_table_hide_all"),
              children: a.jsx(Se, {
                size: "small",
                onClick: () => M(false),
                "aria-label": b.t("json_table_hide_all"),
                children: a.jsx(Ts, {
                  fontSize: "small"
                })
              })
            }),
            a.jsx(Ee, {
              title: b.t("json_table_reset_all"),
              children: a.jsx(Se, {
                size: "small",
                onClick: q,
                "aria-label": b.t("json_table_reset_all"),
                children: a.jsx(yn, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        a.jsx(N, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: _.length === 0 ? a.jsx(N, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: a.jsx(I, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? b.t("json_table_no_columns") : b.t("json_table_no_search_results")
            })
          }) : _.map((S, F) => {
            const J = t.find((X) => X.path === S.path), W = n === S.path, K = (J == null ? void 0 : J.type) || "string";
            return a.jsx(xa, {
              ref: w(S.path),
              "data-column-path": S.path,
              onClick: () => o(S.path),
              onKeyDown: (X) => E(X, S, F),
              draggable: v,
              onDragStart: v ? (X) => z(X, S.path) : void 0,
              onDragEnter: v ? (X) => D(X, S.path) : void 0,
              onDragLeave: v ? A : void 0,
              onDragOver: v ? P : void 0,
              onDrop: v ? (X) => V(X, S.path) : void 0,
              onDragEnd: v ? k : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": W,
              "aria-label": `${S.headerName || S.path}, ${K}, ${S.visible ? b.t("json_table_visible") : b.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: v ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: W ? "primary.main" : "divider",
                backgroundColor: W ? "action.selected" : "background.paper",
                opacity: d === S.path ? 0.4 : S.visible ? 1 : 0.55,
                borderTop: g === S.path ? "3px solid" : void 0,
                borderTopColor: g === S.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: W ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: a.jsxs(N, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  v && a.jsx(Xc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  a.jsx(Rn, {
                    checked: S.visible,
                    onClick: (X) => R(X, S.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${b.t("json_table_visible")}: ${S.headerName || S.path}`
                    }
                  }),
                  a.jsxs(N, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      a.jsx(I, {
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
                      S.headerName && S.headerName !== S.path && a.jsx(I, {
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
                  a.jsx(Rt, {
                    label: K,
                    size: "small",
                    sx: {
                      backgroundColor: Cn[K] || Cn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${b.t("json_table_type")}: ${K}`
                  })
                ]
              })
            }, S.path);
          })
        }),
        e.length > 0 && a.jsx(N, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: a.jsxs(I, {
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
        a.jsxs(Qo, {
          open: p,
          onClose: U,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            a.jsx(Zo, {
              id: "reset-dialog-title",
              children: b.t("json_table_reset_all")
            }),
            a.jsx(er, {
              children: a.jsx(Aa, {
                id: "reset-dialog-description",
                children: b.t("json_table_reset_confirm_message")
              })
            }),
            a.jsxs(ar, {
              children: [
                a.jsx(it, {
                  onClick: U,
                  color: "primary",
                  children: b.t("cancel")
                }),
                a.jsx(it, {
                  onClick: B,
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
  function to(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const lu = 0, au = 20, Ur = 2;
  function cu(e) {
    if (e == null) return Ur;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(lu, Math.min(au, Math.floor(t))) : Ur;
  }
  function ks(e, t = {}) {
    const { prefix: n = "", suffix: o = "", thousands: r = false } = t, s = cu(t.decimals);
    let i = e.toFixed(s);
    if (r) {
      const [l, c] = i.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = c !== void 0 ? `${d}.${c}` : d;
    }
    return `${n}${i}${o}`;
  }
  const uu = [
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
  function Es(e, t) {
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
  function Os(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let o;
      if (typeof e == "string") {
        const c = e.trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(c)) {
          const [d, u, g] = c.split("-").map(Number);
          o = new Date(d, u - 1, g);
        } else o = new Date(c);
      } else if (typeof e == "number") o = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) o = e;
      else return to(e);
      if (isNaN(o.getTime())) return to(e);
      const r = t || "yyyy-MM-dd", s = (c, d = 2) => String(c).padStart(d, "0"), i = {
        yyyy: String(o.getFullYear()),
        MM: s(o.getMonth() + 1),
        dd: s(o.getDate()),
        HH: s(o.getHours()),
        mm: s(o.getMinutes()),
        ss: s(o.getSeconds()),
        SSS: s(o.getMilliseconds(), 3)
      };
      if (r === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(r)) return o.toISOString();
      let l = r;
      for (const [c, d] of Object.entries(i).sort((u, g) => g[0].length - u[0].length)) l = l.replaceAll(c, d);
      return l;
    } catch {
      return to(e);
    }
  }
  function Lo(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : to(e);
  }
  function Ns(e, t) {
    let n = t.stringTrim ? e.trim() : e;
    if (t.stringRegex && t.stringRegex.length <= 200) try {
      const i = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), l = n.match(i);
      l && (n = l[t.stringRegexGroup ?? 0] ?? n);
    } catch {
    }
    t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (s) => s.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
    const o = t.stringPrefix ?? "", r = t.stringSuffix ?? "";
    return o || r ? `${o}${n}${r}` : n;
  }
  function du({ format: e, onChange: t, discoveredColumn: n }) {
    const o = y.useMemo(() => {
      if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
        const r = typeof n.max == "number" ? n.max : 0;
        return n.min + (r - n.min) * 0.75;
      }
      return 1234.567;
    }, [
      n
    ]);
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_number_format")
        }),
        a.jsxs(N, {
          children: [
            a.jsxs(I, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                b.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            a.jsx(_i, {
              value: e.numberDecimals ?? 2,
              onChange: (r, s) => t({
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
        a.jsx(Me, {
          label: b.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (r) => t({
            type: "number",
            numberPrefix: r.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        a.jsx(Me, {
          label: b.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (r) => t({
            type: "number",
            numberSuffix: r.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        a.jsx(Nt, {
          control: a.jsx(vn, {
            checked: e.numberThousandsSeparator || false,
            onChange: (r) => t({
              type: "number",
              numberThousandsSeparator: r.target.checked
            }),
            size: "small"
          }),
          label: a.jsx(I, {
            variant: "body2",
            children: b.t("json_table_number_thousands")
          })
        }),
        a.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            a.jsxs(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                o,
                " \u2192",
                " ",
                ks(o, {
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
  function pu({ format: e, detectedFormat: t, onChange: n }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_date_format")
        }),
        t && a.jsx(Me, {
          label: b.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: b.t("json_table_date_detected_hint")
        }),
        a.jsxs(Ct, {
          fullWidth: true,
          size: "small",
          children: [
            a.jsx(St, {
              children: b.t("json_table_date_output_format")
            }),
            a.jsx(ft, {
              label: b.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (o) => n({
                type: "date",
                dateFormat: o.target.value,
                dateInputFormat: t
              }),
              children: uu.map((o) => a.jsx(ie, {
                value: o.value,
                children: o.label
              }, o.value))
            })
          ]
        }),
        a.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            a.jsx(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: Os(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function fu({ format: e, onChange: t }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_boolean_format")
        }),
        a.jsx(Me, {
          label: b.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        a.jsx(Me, {
          label: b.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        a.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            a.jsxs(Le, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                a.jsxs(I, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Lo(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                a.jsxs(I, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Lo(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Ho({ value: e, onChange: t, label: n }) {
    const o = In(), [r, s] = y.useState(null), i = y.useRef(null), [l, c] = y.useState(null), d = !!r;
    return y.useEffect(() => {
      if (!d || !l) return;
      const u = new ResizeObserver(() => {
        var _a2;
        (_a2 = i.current) == null ? void 0 : _a2.updatePosition();
      });
      return u.observe(l), () => {
        u.disconnect();
      };
    }, [
      d,
      l
    ]), a.jsxs(N, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        a.jsxs(N, {
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
            s(u.currentTarget);
          },
          children: [
            a.jsx(I, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            a.jsx(N, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && a.jsx(Se, {
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: a.jsx(cr, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        a.jsx(ci, {
          action: i,
          open: d,
          anchorEl: r,
          onClose: () => s(null),
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
          children: a.jsx(N, {
            ref: c,
            sx: {
              borderRadius: "6px"
            },
            children: a.jsx(ui, {
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
  function gu({ format: e, onChange: t }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_string_format")
        }),
        a.jsxs(Ct, {
          size: "small",
          fullWidth: true,
          children: [
            a.jsx(St, {
              children: b.t("json_table_string_case")
            }),
            a.jsxs(ft, {
              label: b.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                a.jsx(ie, {
                  value: "none",
                  children: b.t("json_table_string_case_none")
                }),
                a.jsx(ie, {
                  value: "upper",
                  children: b.t("json_table_string_case_upper")
                }),
                a.jsx(ie, {
                  value: "lower",
                  children: b.t("json_table_string_case_lower")
                }),
                a.jsx(ie, {
                  value: "title",
                  children: b.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        a.jsxs(Le, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(Me, {
              label: b.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            a.jsx(Me, {
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
        a.jsx(Nt, {
          control: a.jsx(vn, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: b.t("json_table_string_trim")
        }),
        a.jsx(Me, {
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
        a.jsx(Me, {
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
        e.stringRegex && a.jsxs(Le, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(Me, {
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
            a.jsx(Me, {
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
        a.jsx(To, {}),
        a.jsxs(Le, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            a.jsx(Nt, {
              control: a.jsx(vn, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: a.jsx(I, {
                variant: "body2",
                fontWeight: "bold",
                children: b.t("json_table_string_font_weight")
              })
            }),
            a.jsx(Nt, {
              control: a.jsx(vn, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: a.jsx(I, {
                variant: "body2",
                fontStyle: "italic",
                children: b.t("json_table_string_font_style")
              })
            })
          ]
        }),
        a.jsxs(Le, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(Me, {
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
            a.jsx(Ho, {
              label: b.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        a.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            a.jsx(I, {
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
              children: Ns("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function ye(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function hu(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function gt(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        gt(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          gt(r, t - 1);
        }
      }
    }
    return e;
  }
  function mu(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+ye(e)) && t !== null) throw NaN;
    if (Number.isNaN(+ye(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function yu(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function bu(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function vu(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function xu(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function _u(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let s = gt(r ? e[0] : n, o);
    for (let i = r; i < e.length; i++) s = gt(await t(s, e[i]), o);
    return s;
  }
  const lo = {
    filter: yu,
    some: bu,
    every: vu,
    map: xu,
    reduce: _u
  }, se = /* @__PURE__ */ Symbol.for("json_logic_sync"), Ne = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Ke = /* @__PURE__ */ Symbol.for("json_logic_original"), qr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Vt(e) {
    return typeof e == "function" ? e[se] === true : Array.isArray(e) ? e.every(Vt) : !(e && e.asyncMethod && !e.method);
  }
  function Ls(e, t = true) {
    return e[se] = t, e;
  }
  function An(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const _o = /* @__PURE__ */ new WeakMap();
  function Yr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (_o.has(e) || _o.set(e, wu(e)), _o.get(e));
  }
  function wu(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Cu(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), Vt(t[r]) || (o.asyncDetected = true), n += (Vt(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][Ne] < "u" ? n += t[r][Ne] : n += be(t[r], o));
    return {
      [Ne]: n
    };
  }
  function Su(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function ao(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => ao(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && ao(r, t, n);
    }
    return true;
  }
  function Vo(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => Vo(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return Vt(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][se] == "function" && t.methods[o][se](e, {
        engine: t
      })) : Vo(r, t) : false;
    }
    return true;
  }
  function be(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: s = [], engine: i } = t;
    function l(u, g = false) {
      return Su(u, g) ? JSON.stringify(u) : (s.push(u), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let g = 0; g < e.length; g++) g > 0 && (u += ","), u += be(e[g], t);
      return "[" + u + "]";
    }
    let c = false;
    function d(u) {
      return t.asyncDetected = t.asyncDetected || c, o && c ? `await ${u}` : u;
    }
    if (e && typeof e == "object") {
      const u = Object.keys(e), g = u[0];
      if (!g) return l(e);
      if (!i.methods[g] || u.length > 1) {
        if (i.isData(e, g)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: g
        };
      }
      if (!t.engine.disableInline && i.methods[g] && ao(e, i, t)) return Vo(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (r.push(i.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let f = e[g];
      if ((!f || typeof f != "object") && !i.methods[g].lazy && (f = [
        f
      ]), i.methods[g] && i.methods[g].compile) {
        let m = i.methods[g].compile(f, t);
        if (m[Ne] && (m = m[Ne]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let p = i.methods[g].optimizeUnary ? "" : "coerceArray";
      !p && Array.isArray(f) && f.length === 1 && !Array.isArray(f[0]) ? f = f[0] : p && Array.isArray(f) && (p = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[g] == "function") {
        c = !Vt(i.methods[g]);
        const m = h[Yr(i.methods[g]) - 1] || h[2];
        return d(`engine.methods["${g}"](${p}(` + be(f, t) + ")" + m + ")");
      } else {
        c = !!(o && i.methods[g] && i.methods[g].asyncMethod);
        const m = Yr(c ? i.methods[g].asyncMethod : i.methods[g].method);
        let x = h[m - 1] || h[2];
        return c && typeof i.methods[g][se] == "function" && i.methods[g][se](f, {
          engine: i
        }) && (c = false, x = x.replace("engine", "engine.fallback")), i.methods[g] && !i.methods[g].lazy ? d(`engine.methods["${g}"]${c ? ".asyncMethod" : ".method"}(${p}(` + be(f, t) + ")" + x + ")") : (n.push(f), d(`engine.methods["${g}"]${c ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + x + ")"));
      }
    }
    return l(e);
  }
  function co(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Cu
    }, t));
    const n = be(e, t);
    return ju(e, n, t);
  }
  function ju(e, t, n) {
    const { engine: o, methods: r, notTraversed: s, processing: i = [], values: l } = n, c = [];
    i.forEach((u, g) => {
      t = t.replace(`__%%%${g}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, r, s, lo, o, c, An, ye, hu, mu, gt), {
      [se]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Ru = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Qt = Ru(), dn = /* @__PURE__ */ new Map();
  function Jt(e) {
    if (dn.has(e)) return dn.get(e);
    dn.size > 2048 && dn.clear();
    const t = Mu(e);
    return dn.set(e, t), t;
  }
  function Mu(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === o ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (r.push(s), s = "") : s += l;
    }
    return r.length !== e.length && r.push(s), r;
  }
  const Bo = {
    get: {
      [se]: true,
      method: ([e, t, n], o, r, s) => {
        const i = n === void 0 ? null : n, l = Jt(String(t));
        for (let c = 0; c < l.length; c++) if (e == null || (e = e[l[c]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const s = Jt(o);
          return Qt ? `((${be(r, t)})${s.map((i) => `?.[${be(i, t)}]`).join("")} ?? ${be(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${be(r, t)}||0)`)}, ${be(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Ke]: true,
      [se]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Jt(String(e));
        for (let c = 0; c < l.length; c++) if (t == null || (t = t[l[c]], t === void 0)) return i;
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
          const r = Jt(n);
          if (!Qt) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, c) => `(${l}||0)[${JSON.stringify(c)}]`, "(context||0)")}, ${be(o, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${r.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${be(o, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [se]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Jt(String(e[o]));
          let s = t, i = true;
          for (let l = 0; l < r.length; l++) {
            if (!s) {
              i = false;
              break;
            }
            if (s = s[r[l]], s === void 0) {
              i = false;
              break;
            }
          }
          i || n.push(e[o]);
        }
        return n;
      },
      compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false,
      deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0)
    },
    missing_some: {
      [se]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = Bo.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = Bo.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [Ne]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, $u = {
    ...Bo
  }, re = {
    type: "Invalid Arguments"
  };
  function Re(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Re(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Re(r, t, n);
    }
    return true;
  }
  function Ve(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Ve(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][se] == "function" ? t.methods[o][se](r, n) : t.methods[o][se] : typeof t.methods[o][se] == "function" ? t.methods[o][se](r, n) : t.methods[o][se] && Ve(r, t, n);
    }
    return true;
  }
  function ge(e, t, n, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const r = t.optimizedMap.get(e);
      return typeof r == "function" ? r(n, o) : r;
    }
    return t.run(e, n, {
      above: o
    });
  }
  const pn = no("every", true), oe = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ye(+e);
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ye(-e);
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
      method: Ls((e) => e, true),
      [se]: () => true
    },
    if: {
      [Ke]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        if (e.length === 1) return ge(e[0], o, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = ge(s, o, t, n);
          if (o.truthy(l)) return ge(i, o, t, n);
        }
        return ge(r, o, t, n);
      },
      [se]: (e, t) => Ve(e, t.engine, t),
      deterministic: (e, t) => Re(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        if (e.length === 1) return o.run(e[0], t, {
          above: n
        });
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = await o.run(s, t, {
            above: n
          });
          if (o.truthy(l)) return o.run(i, t, {
            above: n
          });
        }
        return o.run(r, t, {
          above: n
        });
      },
      lazy: true
    },
    "<": wt("<", (e, t) => e < t),
    "<=": wt("<=", (e, t) => e <= t),
    ">": wt(">", (e, t) => e > t),
    ">=": wt(">=", (e, t) => e >= t),
    "==": wt("==", (e, t) => e == t),
    "===": wt("===", (e, t) => e === t),
    "!=": wt("!=", (e, t) => e != t),
    "!==": wt("!==", (e, t) => e !== t),
    or: {
      [se]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = ge(e[s], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = await o.run(e[s], t, {
          above: n
        }), o.truthy(r)) return r;
        return r;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
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
      [se]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        let r;
        for (let s = 0; s < e.length; s++) if (r = ge(e[s], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        let r;
        for (let s = 0; s < e.length; s++) if (r = await o.run(e[s], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
      compile: (e, t) => Qt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = be(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${be(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [se]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? r = ge(e[i], o, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : r = ge(e[i], o, t, n), r;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      asyncMethod: async (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? r = await o.run(e[i], {
            type: s.type || s.error || s.message || s.constructor.name
          }, {
            above: [
              null,
              t,
              n
            ]
          }) : r = await o.run(e[i], t, {
            above: n
          }), r;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      deterministic: (e, t) => Re(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && Re(e, t.engine, {
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
            [Ne]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [Ne]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [Ne]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[Ne].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[Ne].includes("await") && (n[Ne] = n[Ne].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [se]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = ge(e[s], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = await o.run(e[s], t, {
          above: n
        }), !o.truthy(r)) return r;
        return r;
      },
      lazy: true,
      deterministic: (e, t) => Re(e, t.engine, t),
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
        if (!e) throw re;
        const r = ge(e, o, t, n), s = Array.isArray(e) ? r[0] : r;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw re;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw re;
        const r = await ge(e, o, t, n), s = Array.isArray(e) ? r[0] : r;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw re;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => oe.val.method(e, t, n, o, qr) !== qr,
      deterministic: false
    },
    val: {
      [Ke]: true,
      [se]: true,
      method: (e, t, n, o, r = null) => {
        if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
          if (r && !(t && e in t)) return r;
          if (t == null) return null;
          const l = t[e];
          return typeof l > "u" ? null : l;
        }
        let s = t, i = 0;
        if (Array.isArray(e[0]) && e[0].length === 1) {
          i++;
          const l = +Math.abs(e[0][0]);
          let c = 0;
          for (let d = 0; d < l; d++) s = n[c++], d === n.length - 1 && Array.isArray(s) && (n = s, s = s[0], c = 1);
        }
        for (let l = i; l < e.length; l++) {
          if (r && !(s && e[l] in s)) return r;
          if (s == null) return null;
          s = s[e[l]];
        }
        return typeof s > "u" || typeof s == "function" && !o.allowFunctions ? r : s;
      },
      optimizeUnary: true,
      deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
      compile: (e, t) => {
        function n(o) {
          let r;
          return Qt ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Ve(e, t.engine, t) && Re(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Qt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (Qt ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: no("map"),
    some: {
      ...no("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        let [r, s] = e;
        r = ge(r, o, t, n) || [];
        for (let i = 0; i < r.length; i++) if (o.truthy(ge(s, o, r[i], [
          r,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [se]: pn[se],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        const r = ge(e[0], o, t, n) || [];
        if (Array.isArray(r) && r.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < r.length; i++) if (!o.truthy(ge(s, o, r[i], [
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
        return pn.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${pn.compile([
        {
          [Ne]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: pn.deterministic,
      lazy: pn.lazy
    },
    none: {
      [se]: (e, t) => Ve(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !oe.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await oe.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = oe.some.compile(e, t);
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
    filter: no("filter", true),
    reduce: {
      deterministic: (e, t) => Re(e[0], t.engine, t) && Re(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw re;
        const { async: n } = t;
        let [o, r, s] = e;
        o = be(o, t), typeof s < "u" && (s = be(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = co(r, i);
        const l = r.aboveDetected ? "[null, context, above]" : "null", c = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!Vt(r) || o.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${o} || []).reduce((a,b) => ${c}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${c}(${s}))` : `(${o} || []).reduce((a,b) => ${c}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        let [r, s, i] = e;
        i = gt(ge(i, o, t, n), o.options.maxDepth), r = ge(r, o, t, n) || [];
        let l = (c, d) => gt(o.run(s, {
          accumulator: c,
          current: d
        }, {
          above: [
            r,
            t,
            n
          ]
        }), o.options.maxDepth);
        if (o.optimizedMap.has(s) && typeof o.optimizedMap.get(s) == "function") {
          const c = o.optimizedMap.get(s);
          l = (d, u) => gt(c({
            accumulator: d,
            current: u
          }, [
            r,
            t,
            n
          ]), o.options.maxDepth);
        }
        return typeof i > "u" ? r.reduce(l) : r.reduce(l, i);
      },
      [se]: (e, t) => Ve(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw re;
        let [r, s, i] = e;
        return i = gt(await o.run(i, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], lo.reduce(r, (l, c) => o.run(s, {
          accumulator: l,
          current: c
        }, {
          above: [
            r,
            t,
            n
          ]
        }), i, o.options.maxDepth);
      },
      lazy: true
    },
    "!": (e, t, n, o) => Array.isArray(e) ? !o.truthy(e[0]) : !o.truthy(e),
    "!!": (e, t, n, o) => !!(Array.isArray(e) ? o.truthy(e[0]) : o.truthy(e)),
    cat: {
      [Ke]: true,
      [se]: true,
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
      [se]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let r = o.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) r = o.run(e[s], r, {
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
        for (let s = 1; s < e.length; s++) r = await o.run(e[s], r, {
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
        for (let o = 1; o < e.length; o++) n = t.compile`${co(e[o], {
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
        return Re(n, t.engine, t) && Re(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [se]: (e, t) => Ve(Object.values(e[Object.keys(e)[0]]), t.engine, t),
      method: (e, t, n, o) => Object.keys(e).reduce((s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: o.run(l, t, {
            above: n
          })
        }), s;
      }, {}),
      deterministic: (e, t) => {
        if (e && typeof e == "object") return Object.values(e).every((n) => Re(n, t.engine, t));
        throw re;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${be(e[r], t)}`), o), []).join(",")} })`;
        throw re;
      },
      asyncMethod: async (e, t, n, o) => await lo.reduce(Object.keys(e), async (s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: await o.run(l, t, {
            above: n
          })
        }), s;
      }, {}, 1 / 0)
    }
  };
  function wt(e, t) {
    const n = {
      [Ne]: e
    }, o = e.length === 3;
    return {
      method: (r, s, i, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw re;
        if (r.length === 2) {
          const d = ge(r[0], l, s, i), u = ge(r[1], l, s, i);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+ye(d))) throw NaN;
          if (Number.isNaN(+ye(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let c = ge(r[0], l, s, i);
        for (let d = 1; d < r.length; d++) {
          const u = ge(r[d], l, s, i);
          if ((o || (typeof u == "string" || u === null) && (typeof c == "string" || c === null)) && !t(c, u)) return false;
          if (Number.isNaN(+ye(u)) && c !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ye(c))) throw NaN;
          if (!t(+c, +u)) return false;
          c = u;
        }
        return true;
      },
      asyncMethod: async (r, s, i, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw re;
        if (r.length === 2) {
          const d = await ge(r[0], l, s, i), u = await ge(r[1], l, s, i);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+ye(d))) throw NaN;
          if (Number.isNaN(+ye(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let c = await ge(r[0], l, s, i);
        for (let d = 1; d < r.length; d++) {
          const u = await ge(r[d], l, s, i);
          if ((o || (typeof u == "string" || u === null) && (typeof c == "string" || c === null)) && !t(c, u)) return false;
          if (Number.isNaN(+ye(u)) && c !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ye(c))) throw NaN;
          if (!t(+c, +u)) return false;
          c = u;
        }
        return true;
      },
      compile: (r, s) => {
        if (!Array.isArray(r) || r.length < 2) return false;
        if (r.length === 2) return s.compile`((prev = ${r[0]}) ${n} compareCheck(${r[1]}, prev, ${o}))`;
        let i = s.compile`((prev = ${r[0]}) ${n} (prev = compareCheck(${r[1]}, prev, ${o})))`;
        for (let l = 2; l < r.length; l++) i = s.compile`(${i} && prev ${n} (prev = compareCheck(${r[l]}, prev, ${o})))`;
        return i;
      },
      [Ke]: true,
      [se]: (r, s) => Ve(r, s.engine, s),
      deterministic: (r, s) => Re(r, s.engine, s),
      lazy: true
    };
  }
  function no(e, t = false) {
    return {
      deterministic: (n, o) => Re(n[0], o.engine, o) && Re(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Ke]: true,
      [se]: (n, o) => Ve(n, o.engine, o),
      method: (n, o, r, s) => {
        if (!Array.isArray(n)) throw re;
        let [i, l] = n;
        return i = ge(i, s, o, r) || [], i[e]((c, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = ge(l, s, c, [
            {
              iterator: i,
              index: d
            },
            o,
            r
          ]);
          return t ? s.truthy(u) : u;
        });
      },
      asyncMethod: async (n, o, r, s) => {
        if (!Array.isArray(n)) throw re;
        let [i, l] = n;
        return i = await s.run(i, o, {
          above: r
        }) || [], lo[e](i, async (c, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = await s.run(l, c, {
            above: [
              {
                iterator: i,
                index: d
              },
              o,
              r
            ]
          });
          return t ? s.truthy(u) : u;
        });
      },
      compile: (n, o) => {
        if (!Array.isArray(n)) throw re;
        const { async: r } = o, [s, i] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, c = co(i, l), d = c.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, u = t ? o.compile`engine.truthy` : o.compile``;
        return r && !Vt(c) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${u}(${c}(i, x, ${d})))`) : o.compile`(${s} || [])[${e}]((i, x, z) => ${u}(${c}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  oe.every = oe.all;
  oe["?:"] = oe.if;
  Object.keys(oe).forEach((e) => {
    typeof oe[e] == "function" && (oe[e][se] = true), oe[e].deterministic = typeof oe[e].deterministic > "u" ? true : oe[e].deterministic;
  });
  oe.if.compile = function(e, t) {
    if (!Array.isArray(e) || e.length < 3) return false;
    e = [
      ...e
    ], e.length % 2 !== 1 && e.push(null);
    const n = e.pop();
    let o = t.compile``;
    for (; e.length; ) {
      const r = e.shift(), s = e.shift();
      o = t.compile`${o} engine.truthy(${r}) ? ${s} : `;
    }
    return t.compile`(${o} ${n})`;
  };
  function zn(e, t) {
    if (Array.isArray(e)) return ye(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + be(e, t);
    if (typeof e == "string") return "+" + ye(+e);
    const n = be(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + ye(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? ye(NaN) : `(+precoerceNumber(${n}))`;
  }
  oe["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => zn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${be(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  oe["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw re;
      return `precoerceNumber(${e.map((n) => zn(n, t)).join(" % ")})`;
    }
    return `assertSize(${be(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  oe.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  oe["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw re;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => zn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${be(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  oe["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw re;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = zn(n, t);
        return o && r === "+0" && ye(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${be(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  oe["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => zn(n, t)).join(" * ")})` : `(${be(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  oe["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  oe.not = oe["!"];
  oe["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  oe.none.deterministic = oe.some.deterministic;
  oe.throw.deterministic = (e, t) => t.insideTry && Re(e, t.engine, t);
  oe["+"].optimizeUnary = oe["-"].optimizeUnary = oe["!"].optimizeUnary = oe["!!"].optimizeUnary = oe.cat.optimizeUnary = oe.throw.optimizeUnary = true;
  const Au = {
    ...oe,
    ...$u
  }, Iu = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Pu(e, t, n, o) {
    const r = t.methods[n], s = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (c, d) => s(l, c, d || o, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !r.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && r.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((c) => De(c, t, o));
      if (l.every((c) => typeof c != "function")) return (c, d) => s(l, c, d || o, t);
      if (l.length === 1) {
        const c = l[0];
        return (d, u) => s([
          c(d, u)
        ], d, u || o, t);
      }
      if (l.length === 2) {
        const [c, d] = l;
        return typeof c == "function" && typeof d == "function" ? (u, g) => s([
          c(u, g),
          d(u, g)
        ], u, g || o, t) : typeof c == "function" ? (u, g) => s([
          c(u, g),
          d
        ], u, g || o, t) : (u, g) => s([
          c,
          d(u, g)
        ], u, g || o, t);
      }
      return (c, d) => {
        const u = l.map((g) => typeof g == "function" ? g(c, d) : g);
        return s(u, c, d || o, t);
      };
    } else {
      const l = De(i, t, o);
      if (r.optimizeUnary) {
        const c = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => s(l(d, u), d, u || o, t);
        if ((n === "var" || n === "val") && t.methods[n][Ke]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return c;
          if (n === "var" && !l.startsWith("../")) {
            const d = Jt(String(l));
            let u;
            if (d.length === 2) {
              const [g, f] = d;
              return (p) => (typeof (u = p && p[g] && p[g][f]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
            if (d.length === 3) {
              const [g, f, p] = d;
              return (h) => (typeof (u = h && h[g] && h[g][f] && h[g][f][p]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
          }
        }
        return (d, u) => s(l, d, u || o, t);
      }
      return typeof l == "function" ? (c, d) => s(An(l(c, d)), c, d || o, t) : (c, d) => s(An(l), c, d || o, t);
    }
  }
  const Jr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function Fu(e, t, n) {
    if (e.val && t.methods.val[Ke] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
      let o;
      if (e.val.length === 1) {
        const r = e.val[0];
        return (s) => (typeof (o = s && s[r]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
      if (e.val.length === 2) {
        const [r, s] = e.val;
        return (i) => (typeof (o = i && i[r] && i[r][s]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
      if (e.val.length === 3) {
        const [r, s, i] = e.val;
        return (l) => (typeof (o = l && l[r] && l[r][s] && l[r][s][i]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
    }
    if ((e.if || e["?:"]) && t.methods.if[Ke] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, s] = e.if || e["?:"], i = De(o, t, n), l = De(r, t, n), c = De(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof c == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : c(d, u) : typeof i == "function" && typeof l == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : c : typeof i == "function" && typeof c == "function" ? (d, u) => t.truthy(i(d, u)) ? l : c(d, u) : typeof i == "function" ? (d, u) => t.truthy(i(d, u)) ? l : c : t.truthy(i) ? l : c;
    }
    if (e.filter && t.methods.filter[Ke] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, s = De(r, t, n);
      if (typeof s != "function") return t.truthy(s) ? De(o, t, n) : [];
    }
    for (const o in Jr) if (e[o] && Array.isArray(e[o]) && t.methods[o][Ke]) {
      const r = Jr[o], s = o.length === 3 ? r : function(l, c) {
        if ((typeof l == "string" || l === null) && (typeof c == "string" || c === null)) return r(l, c);
        if (Number.isNaN(+ye(l))) throw NaN;
        if (Number.isNaN(+ye(c)) && l !== null) throw NaN;
        return r(+l, +c);
      };
      if (e[o].length === 2) {
        const [i, l] = e[o], c = De(i, t, n), d = De(l, t, n);
        return typeof c == "function" && typeof d == "function" ? (u, g) => s(c(u, g), d(u, g)) : typeof c == "function" ? (u, g) => s(c(u, g), d) : typeof d == "function" ? (u, g) => s(c, d(u, g)) : s(c, d);
      }
      if (e[o].length === 3) {
        const [i, l, c] = e[o], d = De(i, t, n), u = De(l, t, n), g = De(c, t, n);
        let f;
        return typeof d == "function" && typeof u == "function" && typeof g == "function" ? (p, h) => s(d(p, h), f = u(p, h)) && s(f, g(p, h)) : typeof d == "function" && typeof u == "function" ? (p, h) => s(d(p, h), f = u(p, h)) && s(f, g) : typeof d == "function" && typeof g == "function" ? (p, h) => s(d(p, h), u) && s(u, g(p, h)) : typeof u == "function" && typeof g == "function" ? (p, h) => s(d, f = u(p, h)) && s(f, g(p, h)) : typeof d == "function" ? (p, h) => s(d(p, h), u) && s(u, g) : typeof u == "function" ? (p, h) => s(d, f = u(p, h)) && s(f, g) : typeof g == "function" ? (p, h) => s(d, u) && s(u, g(p, h)) : s(d, u) && s(u, g);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, s] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const i = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (s = s || 0, i && l) return De({
          "+": [
            {
              "+": o
            },
            s
          ]
        }, t, n);
      }
      if (r["*"] && r["*"].length === 2 && (r["*"][0] || 0).var && (r["*"][1] || 0).var) {
        const i = r["*"][0].var === "accumulator" || r["*"][1].var === "accumulator", l = r["*"][0].var === "current" || r["*"][1].var === "current";
        if (s = typeof s > "u" ? 1 : s, i && l) return De({
          "*": [
            {
              "*": o
            },
            s
          ]
        }, t, n);
      }
    }
  }
  function De(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => De(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, s) => o.map((i) => typeof i == "function" ? i(r, s) : i);
    }
    if (e && typeof e == "object") {
      const o = Fu(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), s = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && ao(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const c = Pu(e, t, s, n);
        return l ? c() : c;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class zu {
    constructor(t = Au, n = {
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
    _parse(t, n, o, r, s) {
      const i = t[r];
      if (this.isData(t, r)) return t;
      if (!this.methods[r] || s > 1) throw {
        type: "Unknown Operator",
        key: r
      };
      if ((r === "var" || r === "val") && this.methods[r][Ke]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : An(this.run(i, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: c } = this.methods[r], d = c ? i : !i || typeof i != "object" ? [
          i
        ] : An(this.run(i, n, {
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
      }, Object.assign(n, Iu({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = Ls(n);
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
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, r) : s;
      } else {
        this.optimizedMap.set(t, De(t, this, r)), this.missesSinceSeen++;
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, r) : s;
      }
      if (Array.isArray(t)) {
        const s = new Array(t.length);
        for (let i = 0; i < t.length; i++) s[i] = this.run(t[i], n, {
          above: r
        });
        return s;
      }
      if (t && typeof t == "object") {
        const s = Object.keys(t);
        if (s.length > 0) {
          const i = s[0];
          return this._parse(t, n, r, i, s.length);
        }
      }
      return t;
    }
    build(t, n = {}) {
      const { above: o = [], top: r = true } = n, s = co(t, {
        engine: this,
        above: o
      });
      return r === false && s.deterministic ? s() : s;
    }
  }
  function Ge(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const go = new zu();
  go.addMethod("contains", ([e, t]) => Ge(e).includes(Ge(t)), {
    deterministic: true
  });
  go.addMethod("startsWith", ([e, t]) => Ge(e).startsWith(Ge(t)), {
    deterministic: true
  });
  go.addMethod("endsWith", ([e, t]) => Ge(e).endsWith(Ge(t)), {
    deterministic: true
  });
  function fn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Wo = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Tu = {
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
  }, Du = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], ku = {
    var: "value"
  };
  function Eu(e, t, n = "string") {
    const o = Number(t), r = n === "number", s = n === "date", i = ku;
    switch (e) {
      case "eq":
        return {
          "==": [
            i,
            r ? o : t
          ]
        };
      case "neq":
        return {
          "!=": [
            i,
            r ? o : t
          ]
        };
      case "gt":
        return {
          ">": [
            i,
            s ? t : o
          ]
        };
      case "gte":
        return {
          ">=": [
            i,
            s ? t : o
          ]
        };
      case "lt":
        return {
          "<": [
            i,
            s ? t : o
          ]
        };
      case "lte":
        return {
          "<=": [
            i,
            s ? t : o
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
  const Ou = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function Nu(e, t = "string") {
    const n = e.conditions.filter((r) => Wo.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && Ou.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => Eu(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function dt(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function wo(e) {
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
      if (Array.isArray(o) && o.length === 2 && dt(o[0])) return {
        operator: n,
        operand: Ge(o[1])
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
        operand: Ge(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "neq",
        operand: Ge(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "contains",
        operand: Ge(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "starts_with",
        operand: Ge(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "ends_with",
        operand: Ge(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const o = n["!!"];
          if (Array.isArray(o) && dt(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && dt(o[0])) return {
            operator: "not_contains",
            operand: Ge(o[1])
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
  function Kr(e) {
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
        const o = n.map((r) => wo(r)).filter((r) => r !== null).map((r) => ({
          id: fn(),
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
        const o = n.map((r) => wo(r)).filter((r) => r !== null).map((r) => ({
          id: fn(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = wo(e);
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
  const Lu = 200, gn = /* @__PURE__ */ new Map();
  function Hu(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = gn.get(n);
      if (!o) {
        if (o = go.build(e), gn.size >= Lu) {
          const r = gn.keys().next().value;
          r && gn.delete(r);
        }
        gn.set(n, o);
      }
      return !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const Vu = {
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
  function Bu({ label: e, value: t, onChange: n, inputType: o }) {
    const [r, s] = y.useState(t);
    y.useEffect(() => {
      s(t);
    }, [
      t
    ]);
    const i = y.useCallback(() => {
      r !== t && n(r);
    }, [
      r,
      t,
      n
    ]);
    return a.jsx(Me, {
      label: e,
      value: r,
      onChange: (l) => s(l.target.value),
      onBlur: i,
      size: "small",
      type: o,
      sx: {
        flex: 1,
        ...o === "date" && {
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
      InputLabelProps: o === "date" || o === "number" ? {
        shrink: true
      } : void 0,
      slotProps: o === "number" ? {
        htmlInput: {
          step: "any"
        }
      } : o === "date" ? {
        htmlInput: {
          placeholder: "YYYY-MM-DD"
        }
      } : void 0
    });
  }
  function Wu({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Kr(e));
    y.useEffect(() => {
      r(Kr(e));
    }, [
      e
    ]);
    const s = Tu[t] ?? Du, i = y.useCallback((f) => {
      r(f), n(Nu(f, t));
    }, [
      n,
      t
    ]), l = y.useCallback((f, p) => {
      const h = o.conditions.map((m, x) => x === f ? {
        ...m,
        ...p
      } : m);
      i({
        ...o,
        conditions: h
      });
    }, [
      o,
      i
    ]), c = y.useCallback((f) => {
      const p = o.conditions.filter((h, m) => m !== f);
      i({
        ...o,
        conditions: p
      });
    }, [
      o,
      i
    ]), d = y.useCallback(() => {
      const f = s[0] ?? "eq";
      i({
        ...o,
        conditions: [
          ...o.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: f,
            operand: ""
          }
        ]
      });
    }, [
      o,
      i,
      s
    ]), u = y.useCallback((f, p) => {
      p !== null && i({
        ...o,
        mode: p
      });
    }, [
      o,
      i
    ]), g = o.conditions.length > 1;
    return a.jsxs(Le, {
      spacing: 1,
      children: [
        g && a.jsxs(N, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            a.jsxs(ms, {
              value: o.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": b.t("json_table_condition_mode_label"),
              children: [
                a.jsx(ro, {
                  value: "and",
                  "aria-label": b.t("json_table_condition_mode_all"),
                  children: b.t("json_table_condition_mode_all")
                }),
                a.jsx(ro, {
                  value: "or",
                  "aria-label": b.t("json_table_condition_mode_any"),
                  children: b.t("json_table_condition_mode_any")
                })
              ]
            }),
            a.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? b.t("json_table_condition_mode_hint_and") : b.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((f, p) => {
          const h = !Wo.has(f.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return a.jsxs(N, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              a.jsxs(Ct, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  a.jsx(St, {
                    children: b.t("json_table_condition_operator")
                  }),
                  a.jsx(ft, {
                    label: b.t("json_table_condition_operator"),
                    value: f.operator,
                    onChange: (x) => {
                      const v = x.target.value, _ = Wo.has(v) ? "" : f.operand;
                      l(p, {
                        operator: v,
                        operand: _
                      });
                    },
                    children: s.map((x) => a.jsx(ie, {
                      value: x,
                      children: b.t(Vu[x])
                    }, x))
                  })
                ]
              }),
              h && a.jsx(Bu, {
                label: b.t("json_table_condition_value"),
                value: f.operand ?? "",
                onChange: (x) => l(p, {
                  operand: x
                }),
                inputType: m
              }),
              g && a.jsx(Ee, {
                title: b.t("json_table_condition_remove"),
                children: a.jsx(Se, {
                  size: "small",
                  onClick: () => c(p),
                  "aria-label": b.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: a.jsx(so, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, f.id ?? p);
        }),
        a.jsx(it, {
          startIcon: a.jsx(Is, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": b.t("json_table_condition_add"),
          children: g ? b.t("json_table_condition_add") : b.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function Gu({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
    const s = y.useCallback((u, g) => {
      const f = [
        ...e || []
      ];
      f[u] = {
        ...f[u],
        ...g
      }, o(f);
    }, [
      e,
      o
    ]), i = y.useCallback((u) => {
      const g = [
        ...e || []
      ];
      g.splice(u, 1), o(g);
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
    ]), c = y.useCallback((u) => {
      if (u === 0) return;
      const g = [
        ...e || []
      ];
      [g[u - 1], g[u]] = [
        g[u],
        g[u - 1]
      ], o(g);
    }, [
      e,
      o
    ]), d = y.useCallback((u) => {
      const g = e || [];
      if (u >= g.length - 1) return;
      const f = [
        ...g
      ];
      [f[u], f[u + 1]] = [
        f[u + 1],
        f[u]
      ], o(f);
    }, [
      e,
      o
    ]);
    return a.jsxs(Le, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && a.jsxs(N, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            a.jsxs(ms, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, g) => {
                g && r(g);
              },
              "aria-label": b.t("json_table_cell_style_mode_label"),
              children: [
                a.jsx(ro, {
                  value: "first-match",
                  "aria-label": b.t("json_table_cell_style_mode_first"),
                  children: b.t("json_table_cell_style_mode_first")
                }),
                a.jsx(ro, {
                  value: "all-match",
                  "aria-label": b.t("json_table_cell_style_mode_all"),
                  children: b.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            a.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? b.t("json_table_cell_style_mode_hint_first") : b.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && a.jsxs(N, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            a.jsx(I, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: b.t("json_table_no_style_rules")
            }),
            a.jsx(I, {
              variant: "caption",
              children: b.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, g) => {
          const f = (e || []).length, p = u.backgroundColor ? Ot(u.backgroundColor) : void 0, h = u.textColor ? Ot(u.textColor) : void 0;
          return a.jsx(nt, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: a.jsxs(Le, {
              spacing: 1.5,
              children: [
                a.jsxs(N, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    a.jsx(N, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: a.jsxs(I, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          b.t("json_table_rule"),
                          " ",
                          g + 1
                        ]
                      })
                    }),
                    a.jsxs(N, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        a.jsx(Ee, {
                          title: b.t("json_table_rule_move_up"),
                          children: a.jsx("span", {
                            children: a.jsx(Se, {
                              size: "small",
                              onClick: () => c(g),
                              disabled: g === 0,
                              "aria-label": b.t("json_table_rule_move_up"),
                              children: a.jsx(Fs, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        a.jsx(Ee, {
                          title: b.t("json_table_rule_move_down"),
                          children: a.jsx("span", {
                            children: a.jsx(Se, {
                              size: "small",
                              onClick: () => d(g),
                              disabled: g >= f - 1,
                              "aria-label": b.t("json_table_rule_move_down"),
                              children: a.jsx(Ps, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        a.jsx(Ee, {
                          title: b.t("json_table_delete_rule"),
                          children: a.jsx(Se, {
                            size: "small",
                            onClick: () => i(g),
                            color: "error",
                            "aria-label": b.t("json_table_delete_rule"),
                            children: a.jsx(di, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                a.jsx(Wu, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (m) => s(g, {
                    logic: m
                  })
                }, u.id ?? g),
                a.jsxs(Le, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    a.jsx(Ho, {
                      label: b.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => s(g, {
                        backgroundColor: m
                      })
                    }),
                    a.jsx(Ho, {
                      label: b.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (m) => s(g, {
                        textColor: m
                      })
                    })
                  ]
                }),
                a.jsxs(Le, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    a.jsx(Nt, {
                      control: a.jsx(Rn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => s(g, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: a.jsx(Br, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: a.jsx(Br, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: a.jsx(I, {
                        variant: "caption",
                        children: b.t("json_table_bold")
                      })
                    }),
                    a.jsx(Nt, {
                      control: a.jsx(Rn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => s(g, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: a.jsx(Wr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: a.jsx(Wr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: a.jsx(I, {
                        variant: "caption",
                        children: b.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (u.backgroundColor || u.textColor || u.fontWeight === "bold" || u.fontStyle === "italic") && a.jsx(nt, {
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
                  children: a.jsx(I, {
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
          }, u.id ?? g);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && a.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? b.t("json_table_rules_priority_hint") : b.t("json_table_rules_all_match_hint")
        }),
        a.jsx(it, {
          startIcon: a.jsx(Is, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: b.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function Uu({ globalSorting: e, globalFiltering: t }) {
    return a.jsxs(N, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        a.jsx(I, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: b.t("json_table_global_status")
        }),
        a.jsxs(N, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            a.jsx(Rt, {
              size: "small",
              icon: e ? a.jsx(Vr, {}) : a.jsx(so, {}),
              label: `${b.t("json_table_sorting")}: ${e ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            a.jsx(Rt, {
              size: "small",
              icon: t ? a.jsx(Vr, {}) : a.jsx(so, {}),
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
  function rn(e) {
    switch (e) {
      case "number":
      case "date":
        return {
          sortable: true,
          filterable: true,
          hiding: true,
          pinning: true
        };
      case "string":
        return {
          sortable: true,
          filterable: true,
          hiding: true,
          pinning: true
        };
      case "boolean":
        return {
          sortable: false,
          filterable: true,
          hiding: true,
          pinning: true
        };
      case "array":
      case "object":
        return {
          sortable: false,
          filterable: false,
          hiding: true,
          pinning: true
        };
      default:
        return {
          sortable: true,
          filterable: true,
          hiding: true,
          pinning: true
        };
    }
  }
  function qu(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : rn(t).sortable && n !== false;
  }
  function Yu(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : rn(t).filterable && n === true;
  }
  function Ju(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : rn(t).hiding && n !== false;
  }
  function Ku(e, t, n) {
    return e.enablePinning !== void 0 && e.enablePinning !== "auto" ? e.enablePinning : rn(t).pinning && n === true;
  }
  function Xr(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = Es(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  function Qr(e) {
    return (t, n, o) => Xr(t.getValue(o), e) - Xr(n.getValue(o), e);
  }
  function Xu(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: o, renderConfiguredCell: r, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, c = new Map(n.map((f) => [
      f.path,
      f.dateFormat
    ])), d = new Map(n.map((f) => [
      f.path,
      f.type
    ])), u = o.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      enablePinning: false,
      header: ({ table: f }) => i(f),
      cell: ({ row: f }) => l(f),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let g;
    return t.length > 0 ? g = t.filter((f) => f.visible).map((f) => {
      var _a2, _b;
      const p = ((_a2 = f.format) == null ? void 0 : _a2.dateInputFormat) ?? c.get(f.path), h = ((_b = f.format) == null ? void 0 : _b.type) === "date", m = d.get(f.path) || "string";
      return {
        id: f.path,
        size: f.width ?? 150,
        accessorFn: (v) => (v == null ? void 0 : v[f.path]) ?? null,
        header: f.headerName || f.path,
        enableSorting: qu(f, m, o.tableSorting),
        enableColumnFilter: Yu(f, m, o.tableFiltering),
        enableHiding: Ju(f, m, o.tableHiding),
        enablePinning: Ku(f, m, o.tablePinning),
        ...h && {
          sortingFn: Qr(p)
        },
        cell: ({ getValue: v }) => r(v(), f),
        meta: {
          align: f.align || "left",
          width: f.width,
          columnType: m
        }
      };
    }) : g = n.map((f) => {
      const p = f.type === "date" && f.dateFormat, h = f.dateFormat, m = rn(f.type);
      return {
        id: f.path,
        size: 150,
        accessorFn: (v) => v[f.path],
        header: f.path.split(".").pop() || f.path,
        enableSorting: m.sortable && o.tableSorting,
        enableColumnFilter: m.filterable && o.tableFiltering,
        enableHiding: m.hiding && o.tableHiding,
        enablePinning: m.pinning && o.tablePinning,
        ...p && {
          sortingFn: Qr(h)
        },
        cell: ({ getValue: v }) => s(v()),
        meta: {
          align: "left",
          columnType: f.type
        }
      };
    }), u ? [
      u,
      ...g
    ] : g;
  }
  function Zr({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: o = "string", featureType: r = "sortable" }) {
    const s = t === "auto" || t === void 0, i = rn(o), l = r === "sortable" ? i.sortable : i.filterable;
    let c, d;
    t === "auto" || t === void 0 ? (c = l && e, d = "json_table_source_auto") : (c = t, d = "json_table_source_override");
    const u = t !== void 0 && t !== "auto", g = (p, h) => p.replace(/\{(\w+)\}/g, (m, x) => x in h ? h[x] : m);
    let f;
    return t === "auto" || t === void 0 ? f = g(b.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? b.t("json_table_status_on") : b.t("json_table_status_off"),
      type: o
    }) : f = g(b.t("json_table_override_tooltip"), {
      feature: n
    }), a.jsx(Ee, {
      title: f,
      arrow: true,
      children: a.jsxs(N, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          a.jsx(Rt, {
            size: "small",
            label: a.jsx(N, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: c ? b.t("json_table_status_on") : b.t("json_table_status_off")
            }),
            color: c ? "success" : "default",
            variant: u ? "filled" : "outlined",
            sx: {
              height: 20,
              fontSize: "0.65rem",
              "& .MuiChip-label": {
                px: 0.75
              }
            }
          }),
          a.jsxs(I, {
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
              s && a.jsx(Kc, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              u && a.jsx(Qc, {
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
  function Qu({ column: e, discoveredColumn: t, onChange: n, globalSorting: o = true, globalFiltering: r = false }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((w) => {
      i((M) => ({
        ...M,
        [w]: !M[w]
      }));
    }, []), c = (t == null ? void 0 : t.type) || "string", d = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, M) => w + M, 0) : 0, [
      t
    ]), u = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), g = y.useMemo(() => e.headerName !== u || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      u
    ]), f = y.useCallback(() => {
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
      const { format: w, ...M } = e;
      n(M);
    }, [
      e,
      n
    ]), m = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), x = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: M, ...z } = e;
      n(z);
    }, [
      e,
      n
    ]), v = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), _ = y.useCallback(() => {
      const { sortable: w, filterable: M, ...z } = e;
      n({
        ...z,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), C = y.useCallback((w) => {
      var _a3, _b2;
      const M = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const z = (_b2 = e.format) == null ? void 0 : _b2.type;
        z === "number" ? (delete M.numberDecimals, delete M.numberPrefix, delete M.numberSuffix, delete M.numberThousandsSeparator) : z === "date" ? (delete M.dateFormat, delete M.dateInputFormat) : z === "boolean" ? (delete M.booleanTrue, delete M.booleanFalse) : z === "string" && [
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
          delete M[A];
        });
      }
      n({
        ...e,
        format: {
          ...M,
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
    ]), R = y.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return a.jsxs(N, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        a.jsxs(N, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            a.jsx(Rt, {
              label: c,
              size: "small",
              sx: {
                backgroundColor: Cn[c] || Cn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            a.jsx(I, {
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
        a.jsxs(Le, {
          spacing: 1,
          children: [
            a.jsxs(Hn, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                a.jsx(Bn, {
                  expandIcon: a.jsx(qn, {}),
                  children: a.jsxs(N, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_basic")
                      }),
                      a.jsx(Ee, {
                        title: b.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(Se, {
                            size: "small",
                            disabled: !g,
                            onClick: (w) => {
                              w.stopPropagation(), f();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: a.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Vn, {
                  children: a.jsxs(Le, {
                    spacing: 2,
                    children: [
                      a.jsx(Me, {
                        label: b.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      a.jsx(Me, {
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
                      a.jsxs(Ct, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          a.jsx(St, {
                            children: b.t("json_table_align")
                          }),
                          a.jsxs(ft, {
                            label: b.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              a.jsx(ie, {
                                value: "left",
                                children: b.t("json_table_align_left")
                              }),
                              a.jsx(ie, {
                                value: "center",
                                children: b.t("json_table_align_center")
                              }),
                              a.jsx(ie, {
                                value: "right",
                                children: b.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      a.jsx(Nt, {
                        control: a.jsx(vn, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: a.jsx(I, {
                          variant: "body2",
                          children: b.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            a.jsxs(Hn, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                a.jsx(Bn, {
                  expandIcon: a.jsx(qn, {}),
                  children: a.jsxs(N, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_formatting")
                      }),
                      a.jsx(Ee, {
                        title: b.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(Se, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: a.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Vn, {
                  children: a.jsxs(Le, {
                    spacing: 2,
                    children: [
                      a.jsxs(Ct, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          a.jsx(St, {
                            children: b.t("json_table_format_type")
                          }),
                          a.jsxs(ft, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: b.t("json_table_format_type"),
                            onChange: (w) => {
                              const M = w.target.value;
                              M === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : C({
                                type: M
                              });
                            },
                            children: [
                              a.jsxs(ie, {
                                value: "auto",
                                children: [
                                  b.t("json_table_format_type_auto"),
                                  ` (${c})`
                                ]
                              }),
                              a.jsx(ie, {
                                value: "string",
                                children: b.t("json_table_format_type_string")
                              }),
                              a.jsx(ie, {
                                value: "number",
                                children: b.t("json_table_format_type_number")
                              }),
                              a.jsx(ie, {
                                value: "date",
                                children: b.t("json_table_format_type_date")
                              }),
                              a.jsx(ie, {
                                value: "boolean",
                                children: b.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (c === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && a.jsx(du, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: C,
                        discoveredColumn: t
                      }),
                      (c === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && a.jsx(pu, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: C
                      }),
                      (c === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && a.jsx(fu, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: C
                      }),
                      (c === "string" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "string") && a.jsx(gu, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: C
                      }),
                      c !== "number" && c !== "date" && c !== "boolean" && c !== "string" && !e.format && a.jsx(I, {
                        variant: "body2",
                        color: "text.secondary",
                        children: b.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            a.jsxs(Hn, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                a.jsx(Bn, {
                  expandIcon: a.jsx(qn, {}),
                  children: a.jsxs(N, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsxs(N, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          a.jsx(I, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: b.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && a.jsx(Rt, {
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
                      a.jsx(Ee, {
                        title: b.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(Se, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), x();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: a.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Vn, {
                  children: a.jsx(Gu, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: c,
                    onStyleChange: j,
                    onModeChange: R
                  })
                })
              ]
            }),
            a.jsxs(Hn, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                a.jsx(Bn, {
                  expandIcon: a.jsx(qn, {}),
                  children: a.jsxs(N, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_advanced")
                      }),
                      a.jsx(Ee, {
                        title: b.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(Se, {
                            size: "small",
                            disabled: !v,
                            onClick: (w) => {
                              w.stopPropagation(), _();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: a.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Vn, {
                  children: a.jsxs(Le, {
                    spacing: 2,
                    children: [
                      a.jsx(Uu, {
                        globalSorting: o,
                        globalFiltering: r
                      }),
                      a.jsxs(N, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          a.jsxs(Ct, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              a.jsx(St, {
                                children: b.t("json_table_sortable")
                              }),
                              a.jsxs(ft, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: b.t("json_table_sortable"),
                                onChange: (w) => n({
                                  ...e,
                                  sortable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  a.jsx(ie, {
                                    value: "auto",
                                    children: a.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  a.jsx(ie, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  a.jsx(ie, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          a.jsx(Zr, {
                            globalEnabled: o,
                            columnOverride: e.sortable,
                            featureLabel: b.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      a.jsxs(N, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          a.jsxs(Ct, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              a.jsx(St, {
                                children: b.t("json_table_filterable")
                              }),
                              a.jsxs(ft, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: b.t("json_table_filterable"),
                                onChange: (w) => n({
                                  ...e,
                                  filterable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  a.jsx(ie, {
                                    value: "auto",
                                    children: a.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  a.jsx(ie, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  a.jsx(ie, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          a.jsx(Zr, {
                            globalEnabled: r,
                            columnOverride: e.filterable,
                            featureLabel: b.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && a.jsxs(nt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          a.jsx(I, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: b.t("json_table_analysis_info")
                          }),
                          a.jsxs(Le, {
                            spacing: 0.5,
                            children: [
                              a.jsxs(N, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_type_label")
                                  }),
                                  a.jsx(Rt, {
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
                              a.jsxs(N, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_confidence")
                                  }),
                                  a.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              a.jsxs(N, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_nulls")
                                  }),
                                  a.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      d > 0 && ` (${Math.round(t.nullCount / d * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              a.jsxs(N, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_distinct")
                                  }),
                                  a.jsx(I, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && a.jsxs(N, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_range")
                                  }),
                                  a.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && a.jsxs(N, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_date_input_format")
                                  }),
                                  a.jsx(I, {
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
  const Zu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, ed = /^\d{4}-\d{2}-\d{2}$/, td = /^(\d{2})\.(\d{2})\.(\d{4})$/, nd = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, od = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, rd = /^(\d{2})\/(\d{2})\/(\d{4})$/, sd = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, id = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Yn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function Co(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Jn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const ld = [
    {
      regex: Zu,
      format: "ISO-8601"
    },
    {
      regex: ed,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Yn(n, t);
      }
    },
    {
      regex: od,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Yn(t, n) && Jn(o, r, s);
      }
    },
    {
      regex: nd,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Yn(t, n) && Jn(o, r);
      }
    },
    {
      regex: td,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Yn(t, n);
      }
    },
    {
      regex: id,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Co(t, n) && Jn(o, r, s);
      }
    },
    {
      regex: sd,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Co(t, n) && Jn(o, r);
      }
    },
    {
      regex: rd,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Co(t, n);
      }
    }
  ];
  function ad(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of ld) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function cd(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function ud(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = cd(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = ad(e);
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
  function dd(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function pd(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function fd(e) {
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
  function es(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function gd(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], s = o[2], i = o[3], l = o[4] || "00", c = o[5] || "00", d = o[6] || "00";
        return `${i}-${s}-${r}T${l}:${c}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], s = o[2], i = o[3], l = o[4] || "00", c = o[5] || "00", d = o[6] || "00";
        return `${i}-${r}-${s}T${l}:${c}:${d}`;
      }
    }
    return null;
  }
  function hd(e, t, n = 100, o = 0.8) {
    const r = /* @__PURE__ */ new Map();
    for (const s of e) r.set(s, fd(s));
    for (const s of t) for (const i of e) {
      const l = r.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const c = s[i], d = ud(c);
      if (es(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && es(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(c), typeof c == "number" && Number.isFinite(c) && ((l.numMin === void 0 || c < l.numMin) && (l.numMin = c), (l.numMax === void 0 || c > l.numMax) && (l.numMax = c)), typeof c == "string") {
        const u = c.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = gd(c, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((s) => {
      const i = r.get(s);
      let l = dd(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < o && (l = "string");
      const c = l === "date" ? pd(i.dateFormatCounts) : void 0, d = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, u = i.nonNullCount > 0 ? Math.round(d / i.nonNullCount * 100) / 100 : 0, g = {
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
      return c && (g.dateFormat = c), l === "number" && (i.numMin !== void 0 && (g.min = i.numMin), i.numMax !== void 0 && (g.max = i.numMax)), l === "date" && (i.dateMin !== void 0 && (g.min = i.dateMin), i.dateMax !== void 0 && (g.max = i.dateMax)), (l === "string" || l === "mixed") && (i.strLenMin !== void 0 && (g.stringLengthMin = i.strLenMin), i.strLenMax !== void 0 && (g.stringLengthMax = i.strLenMax)), g;
    });
  }
  function uo(e, t, n, o, r, s, i, l) {
    if (s > l.maxDepth && (l.maxDepth = s), s > i) {
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
      for (let c = 0; c < e.length; c++) {
        c > l.maxArrayIndex && (l.maxArrayIndex = c);
        const d = `${t}[${c}]`;
        uo(e[c], d, n, o, r, s + 1, i, l);
      }
      return;
    }
    if (e !== null && typeof e == "object") {
      if (r.has(e)) {
        n[t] = "[Circular]", o.add(t);
        return;
      }
      r.add(e);
      const c = Object.keys(e);
      if (c.length === 0) {
        n[t] = null, o.add(t);
        return;
      }
      for (const d of c) {
        const u = t ? `${t}.${d}` : d;
        uo(e[d], u, n, o, r, s + 1, i, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function md(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const i of e) {
      const l = {}, c = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const d of Object.keys(i)) uo(i[d], d, l, n, c, 1, t, o);
      else uo(i, "_value", l, n, c, 0, t, o);
      r.push(l);
    }
    const s = yd([
      ...n
    ]);
    for (const i of r) for (const l of s) l in i || (i[l] = null);
    return {
      paths: s,
      rows: r,
      maxDepth: o.maxDepth,
      maxArrayIndex: o.maxArrayIndex
    };
  }
  function yd(e) {
    return e.sort((t, n) => {
      const o = ts(t), r = ts(n), s = Math.min(o.length, r.length);
      for (let i = 0; i < s; i++) {
        const l = o[i], c = r[i], d = ns(l), u = ns(c);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== c) return l < c ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function ts(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], r = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (r) {
        r[1] && n.push(r[1]);
        const s = r[2].match(/\[\d+\]/g);
        s && n.push(...s);
      } else n.push(t);
      return n;
    });
  }
  function ns(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const bd = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Hs(e, t) {
    const n = performance.now(), o = {
      ...bd,
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
    const r = md(e, o.maxDepth), s = hd(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), i = r.paths.length * r.rows.length, l = s.reduce((u, g) => u + g.nullCount, 0), c = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: s,
      rows: r.rows,
      meta: {
        rowCount: r.rows.length,
        columnCount: s.length,
        maxDepth: r.maxDepth,
        maxArrayIndex: r.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: l,
        nullPercentage: c,
        analysisTimeMs: d
      }
    };
  }
  function vd(e, t) {
    return y.useMemo(() => Hs(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function xd({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: s, socket: i }) {
    const [l, c] = y.useState(n), [d, u] = y.useState(null), [g, f] = y.useState([]), [p, h] = y.useState(false), [m, x] = y.useState(false), [v, _] = y.useState(null), [C, j] = y.useState(null), R = y.useRef(false), w = y.useRef(() => Promise.resolve()), M = y.useRef(n), z = y.useMemo(() => JSON.stringify(n), [
      n
    ]), D = y.useMemo(() => JSON.stringify(l) !== z, [
      l,
      z
    ]);
    y.useEffect(() => {
      e && (c(n), M.current = n, u(n.length > 0 ? n[0].path : null), R.current = false, j(null), _(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !R.current && (R.current = true, w.current());
    }, [
      e
    ]);
    const A = y.useCallback(async () => {
      h(true), j(null), _(null);
      try {
        const S = s.oid;
        if (!S) return;
        const F = await i.getState(S);
        if ((F == null ? void 0 : F.val) === null || (F == null ? void 0 : F.val) === void 0) return;
        let J;
        const W = F.val;
        if (typeof W == "string") try {
          const ee = JSON.parse(W);
          J = Array.isArray(ee) ? ee : [
            ee
          ];
        } catch {
          return;
        }
        else if (Array.isArray(W)) J = W;
        else if (typeof W == "object" && W !== null) J = [
          W
        ];
        else return;
        const K = s.tableMaxDepth || 10, X = Hs(J, {
          maxDepth: K
        });
        if (X.meta.maxDepth > K) {
          const ee = b.t("json_table_depth_warning").replace("{{actual}}", String(X.meta.maxDepth)).replace("{{configured}}", String(K));
          _(ee);
        }
        f(X.columns);
        const ce = new Map(M.current.map((ee) => [
          ee.path,
          ee
        ])), ue = new Set(X.columns.map((ee) => ee.path)), O = M.current.filter((ee) => ue.has(ee.path)), de = X.columns.filter((ee) => !ce.has(ee.path)).map((ee) => ({
          path: ee.path,
          visible: true,
          headerName: ee.path.split(".").pop() || ee.path,
          sortable: "auto",
          filterable: "auto"
        })), ne = [
          ...O,
          ...de
        ];
        c(ne), M.current = ne, u((ee) => ee === null && ne.length > 0 ? ne[0].path : ee);
      } catch (S) {
        const F = S instanceof Error ? S.message : "Failed to discover columns";
        j(F);
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
      M.current = l;
    }, [
      l
    ]);
    const P = y.useCallback((S) => {
      c((F) => F.map((J) => J.path === S.path ? S : J));
    }, []), V = y.useCallback((S) => {
      c(S);
    }, []), k = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), B = y.useCallback((S, F) => {
      if (F === "backdropClick" && D) {
        x(true);
        return;
      }
      t();
    }, [
      D,
      t
    ]), q = y.useMemo(() => d ? l.find((S) => S.path === d) : null, [
      d,
      l
    ]), U = y.useMemo(() => d ? g.find((S) => S.path === d) : void 0, [
      d,
      g
    ]), E = y.useMemo(() => "json-table-column-editor-title", []);
    return a.jsxs(pi, {
      theme: r,
      children: [
        a.jsxs(Qo, {
          open: e,
          onClose: B,
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
            a.jsx(Zo, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: E,
              children: a.jsxs(N, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  a.jsx(I, {
                    variant: "h6",
                    children: b.t("json_table_column_editor_title")
                  }),
                  a.jsx(Se, {
                    onClick: () => B(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": b.t("close"),
                    children: a.jsx(so, {})
                  })
                ]
              })
            }),
            a.jsxs(er, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                v && a.jsx(Zn, {
                  severity: "warning",
                  onClose: () => _(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: v
                }),
                C && a.jsx(Zn, {
                  severity: "error",
                  onClose: () => j(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: C
                }),
                a.jsxs(N, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    a.jsx(N, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: a.jsx(iu, {
                        columns: l,
                        discoveredColumns: g,
                        selectedPath: d,
                        onSelect: u,
                        onChange: V,
                        onRefresh: A,
                        loading: p
                      })
                    }),
                    a.jsx(N, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: q ? a.jsx(Qu, {
                        column: q,
                        discoveredColumn: U,
                        onChange: P,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : a.jsx(N, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: a.jsx(I, {
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
            a.jsxs(ar, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                a.jsx(it, {
                  onClick: () => B(),
                  children: b.t("cancel")
                }),
                a.jsx(it, {
                  variant: "contained",
                  onClick: k,
                  disabled: !D,
                  children: b.t("save")
                })
              ]
            })
          ]
        }),
        a.jsx(Ya, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => x(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: a.jsx(Zn, {
            severity: "warning",
            onClose: () => x(false),
            children: b.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function _d(e, t, n, o) {
    const r = e.name || "columnConfig", s = o.context.theme, [i, l] = y.useState(false), c = y.useMemo(() => Ds(t[r]), [
      t,
      r
    ]), d = c.filter((x) => x.visible).length, u = c.length, g = c.some((x) => x.format), f = c.some((x) => x.cellStyle && x.cellStyle.length > 0), p = y.useCallback((x) => {
      const v = JSON.stringify(x), _ = `b64:${ru(v)}`;
      n({
        [r]: _
      });
    }, [
      r,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), m = y.useCallback(() => {
      l(false);
    }, []);
    return a.jsxs(N, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        a.jsx(it, {
          variant: "outlined",
          startIcon: a.jsx(nu, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": b.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: b.t("json_table_configure_columns")
        }),
        u > 0 && a.jsxs(I, {
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
            g && ` \xB7 ${b.t("json_table_has_formatting")}`,
            f && ` \xB7 ${b.t("json_table_has_styling")}`
          ]
        }),
        a.jsx(xd, {
          open: i,
          onClose: m,
          columns: c,
          onSave: p,
          theme: s,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const wd = () => [
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Je, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: _d
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Je, {
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
      default: true
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
      name: "tablePinning",
      type: "checkbox",
      label: "json_table_pinning",
      default: false,
      tooltip: "json_table_pinning_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Je, {
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
      component: () => a.jsx(Je, {
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
      component: () => a.jsx(Je, {
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
      component: () => a.jsx(Je, {
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
      component: () => a.jsx(Je, {
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
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: () => a.jsx(Je, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: () => a.jsx(Je, {})
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
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: () => a.jsx(Je, {
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
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: () => a.jsx(Je, {})
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
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: () => a.jsx(Je, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "evenRowColor",
      label: "json_table_even_row_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => a.jsx(xt, {
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
      component: (e, t, n, o) => a.jsx(xt, {
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
    }
  ];
  function jt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function qe(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: jt(n, o[e])
      }));
    };
  }
  function ho(e) {
    return e instanceof Function;
  }
  function Cd(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Sd(e, t) {
    const n = [], o = (r) => {
      r.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && o(i);
      });
    };
    return o(e), n;
  }
  function L(e, t, n) {
    let o = [], r;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== o.length || l.some((u, g) => o[g] !== u))) return r;
      o = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), r = t(...l), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
        const u = Math.round((Date.now() - i) * 100) / 100, g = Math.round((Date.now() - d) * 100) / 100, f = g / 16, p = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${p(g, 5)} /${p(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return r;
    };
  }
  function H(e, t, n, o) {
    return {
      debug: () => {
        var r;
        return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
      },
      key: false,
      onChange: o
    };
  }
  function jd(e, t, n, o) {
    const r = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(o),
      renderValue: r,
      getContext: L(() => [
        e,
        n,
        t,
        s
      ], (i, l, c, d) => ({
        table: i,
        column: l,
        row: c,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), H(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function Rd(e, t, n, o) {
    var r, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, c = l.accessorKey;
    let d = (r = (s = l.id) != null ? s : c ? typeof String.prototype.replaceAll == "function" ? c.replaceAll(".", "_") : c.replace(/\./g, "_") : void 0) != null ? r : typeof l.header == "string" ? l.header : void 0, u;
    if (l.accessorFn ? u = l.accessorFn : c && (c.includes(".") ? u = (f) => {
      let p = f;
      for (const m of c.split(".")) {
        var h;
        p = (h = p) == null ? void 0 : h[m];
      }
      return p;
    } : u = (f) => f[l.accessorKey]), !d) throw new Error();
    let g = {
      id: `${String(d)}`,
      accessorFn: u,
      parent: o,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: L(() => [
        true
      ], () => {
        var f;
        return [
          g,
          ...(f = g.columns) == null ? void 0 : f.flatMap((p) => p.getFlatColumns())
        ];
      }, H(e.options, "debugColumns")),
      getLeafColumns: L(() => [
        e._getOrderColumnsFn()
      ], (f) => {
        var p;
        if ((p = g.columns) != null && p.length) {
          let h = g.columns.flatMap((m) => m.getLeafColumns());
          return f(h);
        }
        return [
          g
        ];
      }, H(e.options, "debugColumns"))
    };
    for (const f of e._features) f.createColumn == null || f.createColumn(g, e);
    return g;
  }
  const Te = "debugHeaders";
  function os(e, t, n) {
    var o;
    let s = {
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
        const i = [], l = (c) => {
          c.subHeaders && c.subHeaders.length && c.subHeaders.map(l), i.push(c);
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
  const Md = {
    createTable: (e) => {
      e.getHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var s, i;
        const l = (s = o == null ? void 0 : o.map((g) => n.find((f) => f.id === g)).filter(Boolean)) != null ? s : [], c = (i = r == null ? void 0 : r.map((g) => n.find((f) => f.id === g)).filter(Boolean)) != null ? i : [], d = n.filter((g) => !(o != null && o.includes(g.id)) && !(r != null && r.includes(g.id)));
        return Kn(t, [
          ...l,
          ...d,
          ...c
        ], e);
      }, H(e.options, Te)), e.getCenterHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((s) => !(o != null && o.includes(s.id)) && !(r != null && r.includes(s.id))), Kn(t, n, e, "center")), H(e.options, Te)), e.getLeftHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const s = (r = o == null ? void 0 : o.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? r : [];
        return Kn(t, s, e, "left");
      }, H(e.options, Te)), e.getRightHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const s = (r = o == null ? void 0 : o.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? r : [];
        return Kn(t, s, e, "right");
      }, H(e.options, Te)), e.getFooterGroups = L(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Te)), e.getLeftFooterGroups = L(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Te)), e.getCenterFooterGroups = L(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Te)), e.getRightFooterGroups = L(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Te)), e.getFlatHeaders = L(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Te)), e.getLeftFlatHeaders = L(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Te)), e.getCenterFlatHeaders = L(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Te)), e.getRightFlatHeaders = L(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Te)), e.getCenterLeafHeaders = L(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Te)), e.getLeftLeafHeaders = L(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Te)), e.getRightLeafHeaders = L(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Te)), e.getLeafHeaders = L(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, o) => {
        var r, s, i, l, c, d;
        return [
          ...(r = (s = t[0]) == null ? void 0 : s.headers) != null ? r : [],
          ...(i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : [],
          ...(c = (d = o[0]) == null ? void 0 : d.headers) != null ? c : []
        ].map((u) => u.getLeafHeaders()).flat();
      }, H(e.options, Te));
    }
  };
  function Kn(e, t, n, o) {
    var r, s;
    let i = 0;
    const l = function(f, p) {
      p === void 0 && (p = 1), i = Math.max(i, p), f.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, p + 1);
      }, 0);
    };
    l(e);
    let c = [];
    const d = (f, p) => {
      const h = {
        depth: p,
        id: [
          o,
          `${p}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      f.forEach((x) => {
        const v = [
          ...m
        ].reverse()[0], _ = x.column.depth === h.depth;
        let C, j = false;
        if (_ && x.column.parent ? C = x.column.parent : (C = x.column, j = true), v && (v == null ? void 0 : v.column) === C) v.subHeaders.push(x);
        else {
          const R = os(n, C, {
            id: [
              o,
              p,
              C.id,
              x == null ? void 0 : x.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((w) => w.column === C).length}` : void 0,
            depth: p,
            index: m.length
          });
          R.subHeaders.push(x), m.push(R);
        }
        h.headers.push(x), x.headerGroup = h;
      }), c.push(h), p > 0 && d(m, p - 1);
    }, u = t.map((f, p) => os(n, f, {
      depth: i,
      index: p
    }));
    d(u, i - 1), c.reverse();
    const g = (f) => f.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, x = 0, v = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (v = [], g(h.subHeaders).forEach((C) => {
        let { colSpan: j, rowSpan: R } = C;
        m += j, v.push(R);
      })) : m = 1;
      const _ = Math.min(...v);
      return x = x + _, h.colSpan = m, h.rowSpan = x, {
        colSpan: m,
        rowSpan: x
      };
    });
    return g((r = (s = c[0]) == null ? void 0 : s.headers) != null ? r : []), c;
  }
  const ur = (e, t, n, o, r, s, i) => {
    let l = {
      id: t,
      index: o,
      original: n,
      depth: r,
      parentId: i,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (c) => {
        if (l._valuesCache.hasOwnProperty(c)) return l._valuesCache[c];
        const d = e.getColumn(c);
        if (d != null && d.accessorFn) return l._valuesCache[c] = d.accessorFn(l.original, o), l._valuesCache[c];
      },
      getUniqueValues: (c) => {
        if (l._uniqueValuesCache.hasOwnProperty(c)) return l._uniqueValuesCache[c];
        const d = e.getColumn(c);
        if (d != null && d.accessorFn) return d.columnDef.getUniqueValues ? (l._uniqueValuesCache[c] = d.columnDef.getUniqueValues(l.original, o), l._uniqueValuesCache[c]) : (l._uniqueValuesCache[c] = [
          l.getValue(c)
        ], l._uniqueValuesCache[c]);
      },
      renderValue: (c) => {
        var d;
        return (d = l.getValue(c)) != null ? d : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Sd(l.subRows, (c) => c.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let c = [], d = l;
        for (; ; ) {
          const u = d.getParentRow();
          if (!u) break;
          c.push(u), d = u;
        }
        return c.reverse();
      },
      getAllCells: L(() => [
        e.getAllLeafColumns()
      ], (c) => c.map((d) => jd(e, l, d, d.id)), H(e.options, "debugRows")),
      _getAllCellsByColumnId: L(() => [
        l.getAllCells()
      ], (c) => c.reduce((d, u) => (d[u.column.id] = u, d), {}), H(e.options, "debugRows"))
    };
    for (let c = 0; c < e._features.length; c++) {
      const d = e._features[c];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, $d = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, Vs = (e, t, n) => {
    var o, r;
    const s = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(s));
  };
  Vs.autoRemove = (e) => tt(e);
  const Bs = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  Bs.autoRemove = (e) => tt(e);
  const Ws = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  Ws.autoRemove = (e) => tt(e);
  const Gs = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  Gs.autoRemove = (e) => tt(e);
  const Us = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  Us.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const qs = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  qs.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const Ys = (e, t, n) => e.getValue(t) === n;
  Ys.autoRemove = (e) => tt(e);
  const Js = (e, t, n) => e.getValue(t) == n;
  Js.autoRemove = (e) => tt(e);
  const dr = (e, t, n) => {
    let [o, r] = n;
    const s = e.getValue(t);
    return s >= o && s <= r;
  };
  dr.resolveFilterValue = (e) => {
    let [t, n] = e, o = typeof t != "number" ? parseFloat(t) : t, r = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(o) ? -1 / 0 : o, i = n === null || Number.isNaN(r) ? 1 / 0 : r;
    if (s > i) {
      const l = s;
      s = i, i = l;
    }
    return [
      s,
      i
    ];
  };
  dr.autoRemove = (e) => tt(e) || tt(e[0]) && tt(e[1]);
  const pt = {
    includesString: Vs,
    includesStringSensitive: Bs,
    equalsString: Ws,
    arrIncludes: Gs,
    arrIncludesAll: Us,
    arrIncludesSome: qs,
    equals: Ys,
    weakEquals: Js,
    inNumberRange: dr
  };
  function tt(e) {
    return e == null || e === "";
  }
  const Ad = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: qe("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
        return typeof o == "string" ? pt.includesString : typeof o == "number" ? pt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? pt.equals : Array.isArray(o) ? pt.arrIncludes : pt.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return ho(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : pt[e.columnDef.filterFn];
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
          const r = e.getFilterFn(), s = o == null ? void 0 : o.find((u) => u.id === e.id), i = jt(n, s ? s.value : void 0);
          if (rs(r, i, e)) {
            var l;
            return (l = o == null ? void 0 : o.filter((u) => u.id !== e.id)) != null ? l : [];
          }
          const c = {
            id: e.id,
            value: i
          };
          if (s) {
            var d;
            return (d = o == null ? void 0 : o.map((u) => u.id === e.id ? c : u)) != null ? d : [];
          }
          return o != null && o.length ? [
            ...o,
            c
          ] : [
            c
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
          var s;
          return (s = jt(t, r)) == null ? void 0 : s.filter((i) => {
            const l = n.find((c) => c.id === i.id);
            if (l) {
              const c = l.getFilterFn();
              if (rs(c, i.value, l)) return false;
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
  function rs(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Id = (e, t, n) => n.reduce((o, r) => {
    const s = r.getValue(e);
    return o + (typeof s == "number" ? s : 0);
  }, 0), Pd = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const s = r.getValue(e);
      s != null && (o > s || o === void 0 && s >= s) && (o = s);
    }), o;
  }, Fd = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const s = r.getValue(e);
      s != null && (o < s || o === void 0 && s >= s) && (o = s);
    }), o;
  }, zd = (e, t, n) => {
    let o, r;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (o === void 0 ? i >= i && (o = r = i) : (o > i && (o = i), r < i && (r = i)));
    }), [
      o,
      r
    ];
  }, Td = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let s = r.getValue(e);
      s != null && (s = +s) >= s && (++n, o += s);
    }), n) return o / n;
  }, Dd = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!Cd(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, kd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ed = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Od = (e, t) => t.length, So = {
    sum: Id,
    min: Pd,
    max: Fd,
    extent: zd,
    mean: Td,
    median: Dd,
    unique: kd,
    uniqueCount: Ed,
    count: Od
  }, Nd = {
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
      onGroupingChange: qe("grouping", e),
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
        if (typeof o == "number") return So.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return So.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return ho(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : So[e.columnDef.aggregationFn];
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
  function Ld(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? o : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...o
    ];
  }
  const Hd = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: qe("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = L((n) => [
        Sn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), H(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = Sn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = Sn(t, n);
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
        let s = [];
        if (!(t != null && t.length)) s = r;
        else {
          const i = [
            ...t
          ], l = [
            ...r
          ];
          for (; l.length && i.length; ) {
            const c = i.shift(), d = l.findIndex((u) => u.id === c);
            d > -1 && s.push(l.splice(d, 1)[0]);
          }
          s = [
            ...s,
            ...l
          ];
        }
        return Ld(s, n, o);
      }, H(e.options, "debugTable"));
    }
  }, jo = () => ({
    left: [],
    right: []
  }), Vd = {
    getInitialState: (e) => ({
      columnPinning: jo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: qe("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
        t.setColumnPinning((r) => {
          var s, i;
          if (n === "right") {
            var l, c;
            return {
              left: ((l = r == null ? void 0 : r.left) != null ? l : []).filter((g) => !(o != null && o.includes(g))),
              right: [
                ...((c = r == null ? void 0 : r.right) != null ? c : []).filter((g) => !(o != null && o.includes(g))),
                ...o
              ]
            };
          }
          if (n === "left") {
            var d, u;
            return {
              left: [
                ...((d = r == null ? void 0 : r.left) != null ? d : []).filter((g) => !(o != null && o.includes(g))),
                ...o
              ],
              right: ((u = r == null ? void 0 : r.right) != null ? u : []).filter((g) => !(o != null && o.includes(g)))
            };
          }
          return {
            left: ((s = r == null ? void 0 : r.left) != null ? s : []).filter((g) => !(o != null && o.includes(g))),
            right: ((i = r == null ? void 0 : r.right) != null ? i : []).filter((g) => !(o != null && o.includes(g)))
          };
        });
      }, e.getCanPin = () => e.getLeafColumns().some((o) => {
        var r, s, i;
        return ((r = o.columnDef.enablePinning) != null ? r : true) && ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? s : true);
      }), e.getIsPinned = () => {
        const n = e.getLeafColumns().map((l) => l.id), { left: o, right: r } = t.getState().columnPinning, s = n.some((l) => o == null ? void 0 : o.includes(l)), i = n.some((l) => r == null ? void 0 : r.includes(l));
        return s ? "left" : i ? "right" : false;
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
        const s = [
          ...o ?? [],
          ...r ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, H(t.options, "debugRows")), e.getLeftVisibleCells = L(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), H(t.options, "debugRows")), e.getRightVisibleCells = L(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), H(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, o;
        return e.setColumnPinning(t ? jo() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : jo());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const o = e.getState().columnPinning;
        if (!t) {
          var r, s;
          return !!((r = o.left) != null && r.length || (s = o.right) != null && s.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e.getLeftLeafColumns = L(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), H(e.options, "debugColumns")), e.getRightLeafColumns = L(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), H(e.options, "debugColumns")), e.getCenterLeafColumns = L(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o) => {
        const r = [
          ...n ?? [],
          ...o ?? []
        ];
        return t.filter((s) => !r.includes(s.id));
      }, H(e.options, "debugColumns"));
    }
  };
  function Bd(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Xn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, Ro = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Wd = {
    getDefaultColumnDef: () => Xn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: Ro(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: qe("columnSizing", e),
      onColumnSizingInfoChange: qe("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, o, r;
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Xn.minSize, (o = s ?? e.columnDef.size) != null ? o : Xn.size), (r = e.columnDef.maxSize) != null ? r : Xn.maxSize);
      }, e.getStart = L((n) => [
        n,
        Sn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, s) => r + s.getSize(), 0), H(t.options, "debugColumns")), e.getAfter = L((n) => [
        n,
        Sn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, s) => r + s.getSize(), 0), H(t.options, "debugColumns")), e.resetSize = () => {
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
            var s;
            n += (s = r.column.getSize()) != null ? s : 0;
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
        return (s) => {
          if (!o || !r || (s.persist == null || s.persist(), Mo(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((v) => [
            v.column.id,
            v.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], c = Mo(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, u = (v, _) => {
            typeof _ == "number" && (t.setColumnSizingInfo((C) => {
              var j, R;
              const w = t.options.columnResizeDirection === "rtl" ? -1 : 1, M = (_ - ((j = C == null ? void 0 : C.startOffset) != null ? j : 0)) * w, z = Math.max(M / ((R = C == null ? void 0 : C.startSize) != null ? R : 0), -0.999999);
              return C.columnSizingStart.forEach((D) => {
                let [A, P] = D;
                d[A] = Math.round(Math.max(P + P * z, 0) * 100) / 100;
              }), {
                ...C,
                deltaOffset: M,
                deltaPercentage: z
              };
            }), (t.options.columnResizeMode === "onChange" || v === "end") && t.setColumnSizing((C) => ({
              ...C,
              ...d
            })));
          }, g = (v) => u("move", v), f = (v) => {
            u("end", v), t.setColumnSizingInfo((_) => ({
              ..._,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, p = Bd(n), h = {
            moveHandler: (v) => g(v.clientX),
            upHandler: (v) => {
              p == null ? void 0 : p.removeEventListener("mousemove", h.moveHandler), p == null ? void 0 : p.removeEventListener("mouseup", h.upHandler), f(v.clientX);
            }
          }, m = {
            moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), g(v.touches[0].clientX), false),
            upHandler: (v) => {
              var _;
              p == null ? void 0 : p.removeEventListener("touchmove", m.moveHandler), p == null ? void 0 : p.removeEventListener("touchend", m.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), f((_ = v.touches[0]) == null ? void 0 : _.clientX);
            }
          }, x = Gd() ? {
            passive: false
          } : false;
          Mo(s) ? (p == null ? void 0 : p.addEventListener("touchmove", m.moveHandler, x), p == null ? void 0 : p.addEventListener("touchend", m.upHandler, x)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, x), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, x)), t.setColumnSizingInfo((v) => ({
            ...v,
            startOffset: c,
            startSize: i,
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
        e.setColumnSizingInfo(t ? Ro() : (n = e.initialState.columnSizingInfo) != null ? n : Ro());
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
  let Qn = null;
  function Gd() {
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
  function Mo(e) {
    return e.type === "touchstart";
  }
  const Ud = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: qe("columnVisibility", e)
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
        return (n = r.length ? r.some((s) => s.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : true;
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
      ], (n) => n.filter((o) => o.column.getIsVisible()), H(t.options, "debugRows")), e.getVisibleCells = L(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, o, r) => [
        ...n,
        ...o,
        ...r
      ], H(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, o) => L(() => [
        o(),
        o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")
      ], (r) => r.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), H(e.options, "debugColumns"));
      e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
        var o;
        e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
      }, e.toggleAllColumnsVisible = (n) => {
        var o;
        n = (o = n) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, s) => ({
          ...r,
          [s.id]: n || !(s.getCanHide != null && s.getCanHide())
        }), {}));
      }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var o;
        e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
      };
    }
  };
  function Sn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const qd = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Yd = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: qe("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const o = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
        return typeof o == "string" || typeof o == "number";
      }
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, o, r, s;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((o = t.options.enableGlobalFilter) != null ? o : true) && ((r = t.options.enableFilters) != null ? r : true) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => pt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return ho(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : pt[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, Jd = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: qe("expanded", e),
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
        var r, s;
        e.setExpanded(o ? {} : (r = (s = e.initialState) == null ? void 0 : s.expanded) != null ? r : {});
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
        return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
          const i = s.split(".");
          o = Math.max(o, i.length);
        }), o;
      }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
    },
    createRow: (e, t) => {
      e.toggleExpanded = (n) => {
        t.setExpanded((o) => {
          var r;
          const s = o === true ? true : !!(o != null && o[e.id]);
          let i = {};
          if (o === true ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
            i[l] = true;
          }) : i = o, n = (r = n) != null ? r : !s, !s && n) return {
            ...i,
            [e.id]: true
          };
          if (s && !n) {
            const { [e.id]: l, ...c } = i;
            return c;
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
  }, Go = 0, Uo = 10, $o = () => ({
    pageIndex: Go,
    pageSize: Uo
  }), Kd = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...$o(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: qe("pagination", e)
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
        const r = (s) => jt(o, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? $o() : (r = e.initialState.pagination) != null ? r : $o());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let s = jt(o, r.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...r,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (o) => {
        var r, s;
        e.setPageIndex(o ? Go : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? r : Go);
      }, e.resetPageSize = (o) => {
        var r, s;
        e.setPageSize(o ? Uo : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? r : Uo);
      }, e.setPageSize = (o) => {
        e.setPagination((r) => {
          const s = Math.max(1, jt(o, r.pageSize)), i = r.pageSize * r.pageIndex, l = Math.floor(i / s);
          return {
            ...r,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var s;
        let i = jt(o, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...r,
          pageCount: i
        };
      }), e.getPageOptions = L(() => [
        e.getPageCount()
      ], (o) => {
        let r = [];
        return o && o > 0 && (r = [
          ...new Array(o)
        ].fill(null).map((s, i) => i)), r;
      }, H(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
  }, Ao = () => ({
    top: [],
    bottom: []
  }), Xd = {
    getInitialState: (e) => ({
      rowPinning: Ao(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: qe("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, o, r) => {
        const s = o ? e.getLeafRows().map((c) => {
          let { id: d } = c;
          return d;
        }) : [], i = r ? e.getParentRows().map((c) => {
          let { id: d } = c;
          return d;
        }) : [], l = /* @__PURE__ */ new Set([
          ...i,
          e.id,
          ...s
        ]);
        t.setRowPinning((c) => {
          var d, u;
          if (n === "bottom") {
            var g, f;
            return {
              top: ((g = c == null ? void 0 : c.top) != null ? g : []).filter((m) => !(l != null && l.has(m))),
              bottom: [
                ...((f = c == null ? void 0 : c.bottom) != null ? f : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var p, h;
            return {
              top: [
                ...((p = c == null ? void 0 : c.top) != null ? p : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ],
              bottom: ((h = c == null ? void 0 : c.bottom) != null ? h : []).filter((m) => !(l != null && l.has(m)))
            };
          }
          return {
            top: ((d = c == null ? void 0 : c.top) != null ? d : []).filter((m) => !(l != null && l.has(m))),
            bottom: ((u = c == null ? void 0 : c.bottom) != null ? u : []).filter((m) => !(l != null && l.has(m)))
          };
        });
      }, e.getCanPin = () => {
        var n;
        const { enableRowPinning: o, enablePinning: r } = t.options;
        return typeof o == "function" ? o(e) : (n = o ?? r) != null ? n : true;
      }, e.getIsPinned = () => {
        const n = [
          e.id
        ], { top: o, bottom: r } = t.getState().rowPinning, s = n.some((l) => o == null ? void 0 : o.includes(l)), i = n.some((l) => r == null ? void 0 : r.includes(l));
        return s ? "top" : i ? "bottom" : false;
      }, e.getPinnedIndex = () => {
        var n, o;
        const r = e.getIsPinned();
        if (!r) return -1;
        const s = (n = r === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((i) => {
          let { id: l } = i;
          return l;
        });
        return (o = s == null ? void 0 : s.indexOf(e.id)) != null ? o : -1;
      };
    },
    createTable: (e) => {
      e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
        var n, o;
        return e.setRowPinning(t ? Ao() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : Ao());
      }, e.getIsSomeRowsPinned = (t) => {
        var n;
        const o = e.getState().rowPinning;
        if (!t) {
          var r, s;
          return !!((r = o.top) != null && r.length || (s = o.bottom) != null && s.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e._getPinnedRows = (t, n, o) => {
        var r;
        return ((r = e.options.keepPinnedRows) == null || r ? (n ?? []).map((i) => {
          const l = e.getRow(i, true);
          return l.getIsAllParentsExpanded() ? l : null;
        }) : (n ?? []).map((i) => t.find((l) => l.id === i))).filter(Boolean).map((i) => ({
          ...i,
          position: o
        }));
      }, e.getTopRows = L(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), H(e.options, "debugRows")), e.getBottomRows = L(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), H(e.options, "debugRows")), e.getCenterRows = L(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, o) => {
        const r = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...o ?? []
        ]);
        return t.filter((s) => !r.has(s.id));
      }, H(e.options, "debugRows"));
    }
  }, Qd = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: qe("rowSelection", e),
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
          return t ? r.forEach((s) => {
            s.getCanSelect() && (o[s.id] = true);
          }) : r.forEach((s) => {
            delete o[s.id];
          }), o;
        });
      }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
        const o = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), r = {
          ...n
        };
        return e.getRowModel().rows.forEach((s) => {
          qo(r, s.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = L(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? Io(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getFilteredSelectedRowModel = L(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? Io(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getGroupedSelectedRowModel = L(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? Io(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
        t.setRowSelection((s) => {
          var i;
          if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n) return s;
          const l = {
            ...s
          };
          return qo(l, e.id, n, (i = o == null ? void 0 : o.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return pr(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Yo(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Yo(e, n) === "all";
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
  }, qo = (e, t, n, o, r) => {
    var s;
    const i = r.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], o && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => qo(e, l.id, n, o, r));
  };
  function Io(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, s = function(i, l) {
      return i.map((c) => {
        var d;
        const u = pr(c, n);
        if (u && (o.push(c), r[c.id] = c), (d = c.subRows) != null && d.length && (c = {
          ...c,
          subRows: s(c.subRows)
        }), u) return c;
      }).filter(Boolean);
    };
    return {
      rows: s(t.rows),
      flatRows: o,
      rowsById: r
    };
  }
  function pr(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Yo(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !r) && (i.getCanSelect() && (pr(i, t) ? s = true : r = false), i.subRows && i.subRows.length)) {
        const l = Yo(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), r = false);
      }
    }), r ? "all" : s ? "some" : false;
  }
  const Jo = /([0-9]+)/gm, Zd = (e, t, n) => Ks(Mt(e.getValue(n)).toLowerCase(), Mt(t.getValue(n)).toLowerCase()), ep = (e, t, n) => Ks(Mt(e.getValue(n)), Mt(t.getValue(n))), tp = (e, t, n) => fr(Mt(e.getValue(n)).toLowerCase(), Mt(t.getValue(n)).toLowerCase()), np = (e, t, n) => fr(Mt(e.getValue(n)), Mt(t.getValue(n))), op = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, rp = (e, t, n) => fr(e.getValue(n), t.getValue(n));
  function fr(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function Mt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Ks(e, t) {
    const n = e.split(Jo).filter(Boolean), o = t.split(Jo).filter(Boolean);
    for (; n.length && o.length; ) {
      const r = n.shift(), s = o.shift(), i = parseInt(r, 10), l = parseInt(s, 10), c = [
        i,
        l
      ].sort();
      if (isNaN(c[0])) {
        if (r > s) return 1;
        if (s > r) return -1;
        continue;
      }
      if (isNaN(c[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
    return n.length - o.length;
  }
  const hn = {
    alphanumeric: Zd,
    alphanumericCaseSensitive: ep,
    text: tp,
    textCaseSensitive: np,
    datetime: op,
    basic: rp
  }, sp = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: qe("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let o = false;
        for (const r of n) {
          const s = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return hn.datetime;
          if (typeof s == "string" && (o = true, s.split(Jo).length > 1)) return hn.alphanumeric;
        }
        return o ? hn.text : hn.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return ho(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : hn[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, o) => {
        const r = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((p) => p.id === e.id), c = i == null ? void 0 : i.findIndex((p) => p.id === e.id);
          let d = [], u, g = s ? n : r === "desc";
          if (i != null && i.length && e.getCanMultiSort() && o ? l ? u = "toggle" : u = "add" : i != null && i.length && c !== i.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (s || r || (u = "remove")), u === "add") {
            var f;
            d = [
              ...i,
              {
                id: e.id,
                desc: g
              }
            ], d.splice(0, d.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
          } else u === "toggle" ? d = i.map((p) => p.id === e.id ? {
            ...p,
            desc: g
          } : p) : u === "remove" ? d = i.filter((p) => p.id !== e.id) : d = [
            {
              id: e.id,
              desc: g
            }
          ];
          return d;
        });
      }, e.getFirstSortDir = () => {
        var n, o;
        return ((n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
      }, e.getNextSortingOrder = (n) => {
        var o, r;
        const s = e.getFirstSortDir(), i = e.getIsSorted();
        return i ? i !== s && ((o = t.options.enableSortingRemoval) == null || o) && (!(n && (r = t.options.enableMultiRemove) != null) || r) ? false : i === "desc" ? "asc" : "desc" : s;
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
  }, ip = [
    Md,
    Ud,
    Hd,
    Vd,
    $d,
    Ad,
    qd,
    Yd,
    sp,
    Nd,
    Jd,
    Kd,
    Xd,
    Qd,
    Wd
  ];
  function lp(e) {
    var t, n;
    const o = [
      ...ip,
      ...(t = e._features) != null ? t : []
    ];
    let r = {
      _features: o
    };
    const s = r._features.reduce((f, p) => Object.assign(f, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)), {}), i = (f) => r.options.mergeOptions ? r.options.mergeOptions(s, f) : {
      ...s,
      ...f
    };
    let c = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    r._features.forEach((f) => {
      var p;
      c = (p = f.getInitialState == null ? void 0 : f.getInitialState(c)) != null ? p : c;
    });
    const d = [];
    let u = false;
    const g = {
      _features: o,
      options: {
        ...s,
        ...e
      },
      initialState: c,
      _queue: (f) => {
        d.push(f), u || (u = true, Promise.resolve().then(() => {
          for (; d.length; ) d.shift()();
          u = false;
        }).catch((p) => setTimeout(() => {
          throw p;
        })));
      },
      reset: () => {
        r.setState(r.initialState);
      },
      setOptions: (f) => {
        const p = jt(f, r.options);
        r.options = i(p);
      },
      getState: () => r.options.state,
      setState: (f) => {
        r.options.onStateChange == null || r.options.onStateChange(f);
      },
      _getRowId: (f, p, h) => {
        var m;
        return (m = r.options.getRowId == null ? void 0 : r.options.getRowId(f, p, h)) != null ? m : `${h ? [
          h.id,
          p
        ].join(".") : p}`;
      },
      getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
      getRowModel: () => r.getPaginationRowModel(),
      getRow: (f, p) => {
        let h = (p ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[f];
        if (!h && (h = r.getCoreRowModel().rowsById[f], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: L(() => [
        r.options.defaultColumn
      ], (f) => {
        var p;
        return f = (p = f) != null ? p : {}, {
          header: (h) => {
            const m = h.header.column.columnDef;
            return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
          },
          cell: (h) => {
            var m, x;
            return (m = (x = h.renderValue()) == null || x.toString == null ? void 0 : x.toString()) != null ? m : null;
          },
          ...r._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...f
        };
      }, H(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: L(() => [
        r._getColumnDefs()
      ], (f) => {
        const p = function(h, m, x) {
          return x === void 0 && (x = 0), h.map((v) => {
            const _ = Rd(r, v, x, m), C = v;
            return _.columns = C.columns ? p(C.columns, _, x + 1) : [], _;
          });
        };
        return p(f);
      }, H(e, "debugColumns")),
      getAllFlatColumns: L(() => [
        r.getAllColumns()
      ], (f) => f.flatMap((p) => p.getFlatColumns()), H(e, "debugColumns")),
      _getAllFlatColumnsById: L(() => [
        r.getAllFlatColumns()
      ], (f) => f.reduce((p, h) => (p[h.id] = h, p), {}), H(e, "debugColumns")),
      getAllLeafColumns: L(() => [
        r.getAllColumns(),
        r._getOrderColumnsFn()
      ], (f, p) => {
        let h = f.flatMap((m) => m.getLeafColumns());
        return p(h);
      }, H(e, "debugColumns")),
      getColumn: (f) => r._getAllFlatColumnsById()[f]
    };
    Object.assign(r, g);
    for (let f = 0; f < r._features.length; f++) {
      const p = r._features[f];
      p == null || p.createTable == null || p.createTable(r);
    }
    return r;
  }
  function ap() {
    return (e) => L(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, o = function(r, s, i) {
        s === void 0 && (s = 0);
        const l = [];
        for (let d = 0; d < r.length; d++) {
          const u = ur(e, e._getRowId(r[d], d, i), r[d], d, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var c;
            u.originalSubRows = e.options.getSubRows(r[d], d), (c = u.originalSubRows) != null && c.length && (u.subRows = o(u.originalSubRows, s + 1, u));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, H(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function cp(e) {
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
  function up(e, t, n) {
    return n.options.filterFromLeafRows ? dp(e, t, n) : pp(e, t, n);
  }
  function dp(e, t, n) {
    var o;
    const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(c, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let f = 0; f < c.length; f++) {
        var g;
        let p = c[f];
        const h = ur(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (h.columnFilters = p.columnFilters, (g = p.subRows) != null && g.length && d < i) {
          if (h.subRows = l(p.subRows, d + 1), p = h, t(p) && !h.subRows.length) {
            u.push(p), s[p.id] = p, r.push(p);
            continue;
          }
          if (t(p) || h.subRows.length) {
            u.push(p), s[p.id] = p, r.push(p);
            continue;
          }
        } else p = h, t(p) && (u.push(p), s[p.id] = p, r.push(p));
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: r,
      rowsById: s
    };
  }
  function pp(e, t, n) {
    var o;
    const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(c, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let f = 0; f < c.length; f++) {
        let p = c[f];
        if (t(p)) {
          var g;
          if ((g = p.subRows) != null && g.length && d < i) {
            const m = ur(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
            m.subRows = l(p.subRows, d + 1), p = m;
          }
          u.push(p), r.push(p), s[p.id] = p;
        }
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: r,
      rowsById: s
    };
  }
  function fp() {
    return (e) => L(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, o) => {
      if (!t.rows.length || !(n != null && n.length) && !o) {
        for (let f = 0; f < t.flatRows.length; f++) t.flatRows[f].columnFilters = {}, t.flatRows[f].columnFiltersMeta = {};
        return t;
      }
      const r = [], s = [];
      (n ?? []).forEach((f) => {
        var p;
        const h = e.getColumn(f.id);
        if (!h) return;
        const m = h.getFilterFn();
        m && r.push({
          id: f.id,
          filterFn: m,
          resolvedValue: (p = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(f.value)) != null ? p : f.value
        });
      });
      const i = (n ?? []).map((f) => f.id), l = e.getGlobalFilterFn(), c = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
      o && l && c.length && (i.push("__global__"), c.forEach((f) => {
        var p;
        s.push({
          id: f.id,
          filterFn: l,
          resolvedValue: (p = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(o)) != null ? p : o
        });
      }));
      let d, u;
      for (let f = 0; f < t.flatRows.length; f++) {
        const p = t.flatRows[f];
        if (p.columnFilters = {}, r.length) for (let h = 0; h < r.length; h++) {
          d = r[h];
          const m = d.id;
          p.columnFilters[m] = d.filterFn(p, m, d.resolvedValue, (x) => {
            p.columnFiltersMeta[m] = x;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            u = s[h];
            const m = u.id;
            if (u.filterFn(p, m, u.resolvedValue, (x) => {
              p.columnFiltersMeta[m] = x;
            })) {
              p.columnFilters.__global__ = true;
              break;
            }
          }
          p.columnFilters.__global__ !== true && (p.columnFilters.__global__ = false);
        }
      }
      const g = (f) => {
        for (let p = 0; p < i.length; p++) if (f.columnFilters[i[p]] === false) return false;
        return true;
      };
      return up(t.rows, g, e);
    }, H(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function gp(e) {
    return (t) => L(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, o) => {
      if (!o.rows.length) return o;
      const { pageSize: r, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: c } = o;
      const d = r * s, u = d + r;
      i = i.slice(d, u);
      let g;
      t.options.paginateExpandedRows ? g = {
        rows: i,
        flatRows: l,
        rowsById: c
      } : g = cp({
        rows: i,
        flatRows: l,
        rowsById: c
      }), g.flatRows = [];
      const f = (p) => {
        g.flatRows.push(p), p.subRows.length && p.subRows.forEach(f);
      };
      return g.rows.forEach(f), g;
    }, H(t.options, "debugTable"));
  }
  function hp() {
    return (e) => L(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const o = e.getState().sorting, r = [], s = o.filter((c) => {
        var d;
        return (d = e.getColumn(c.id)) == null ? void 0 : d.getCanSort();
      }), i = {};
      s.forEach((c) => {
        const d = e.getColumn(c.id);
        d && (i[c.id] = {
          sortUndefined: d.columnDef.sortUndefined,
          invertSorting: d.columnDef.invertSorting,
          sortingFn: d.getSortingFn()
        });
      });
      const l = (c) => {
        const d = c.map((u) => ({
          ...u
        }));
        return d.sort((u, g) => {
          for (let p = 0; p < s.length; p += 1) {
            var f;
            const h = s[p], m = i[h.id], x = m.sortUndefined, v = (f = h == null ? void 0 : h.desc) != null ? f : false;
            let _ = 0;
            if (x) {
              const C = u.getValue(h.id), j = g.getValue(h.id), R = C === void 0, w = j === void 0;
              if (R || w) {
                if (x === "first") return R ? -1 : 1;
                if (x === "last") return R ? 1 : -1;
                _ = R && w ? 0 : R ? x : -x;
              }
            }
            if (_ === 0 && (_ = m.sortingFn(u, g, h.id)), _ !== 0) return v && (_ *= -1), m.invertSorting && (_ *= -1), _;
          }
          return u.index - g.index;
        }), d.forEach((u) => {
          var g;
          r.push(u), (g = u.subRows) != null && g.length && (u.subRows = l(u.subRows));
        }), d;
      };
      return {
        rows: l(n.rows),
        flatRows: r,
        rowsById: n.rowsById
      };
    }, H(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function mn(e, t) {
    return e ? mp(e) ? y.createElement(e, t) : e : null;
  }
  function mp(e) {
    return yp(e) || typeof e == "function" || bp(e);
  }
  function yp(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function bp(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function vp(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: lp(t)
    })), [o, r] = y.useState(() => n.current.initialState);
    return n.current.setOptions((s) => ({
      ...s,
      ...e,
      state: {
        ...o,
        ...e.state
      },
      onStateChange: (i) => {
        r(i), e.onStateChange == null || e.onStateChange(i);
      }
    })), n.current;
  }
  function Yt(e, t, n) {
    let o = n.initialDeps ?? [], r, s = true;
    function i() {
      var l, c, d;
      let u;
      n.key && ((l = n.debug) != null && l.call(n)) && (u = Date.now());
      const g = e();
      if (!(g.length !== o.length || g.some((h, m) => o[m] !== h))) return r;
      o = g;
      let p;
      if (n.key && ((c = n.debug) != null && c.call(n)) && (p = Date.now()), r = t(...g), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, x = m / 16, v = (_, C) => {
          for (_ = String(_); _.length < C; ) _ = " " + _;
          return _;
        };
        console.info(`%c\u23F1 ${v(m, 5)} /${v(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * x, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(r), s = false, r;
    }
    return i.updateDeps = (l) => {
      o = l;
    }, i;
  }
  function ss(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const xp = (e, t) => Math.abs(e - t) < 1.01, _p = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, is = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, wp = (e) => e, Cp = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, Sp = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    const r = (i) => {
      const { width: l, height: c } = i;
      t({
        width: Math.round(l),
        height: Math.round(c)
      });
    };
    if (r(is(n)), !o.ResizeObserver) return () => {
    };
    const s = new o.ResizeObserver((i) => {
      const l = () => {
        const c = i[0];
        if (c == null ? void 0 : c.borderBoxSize) {
          const d = c.borderBoxSize[0];
          if (d) {
            r({
              width: d.inlineSize,
              height: d.blockSize
            });
            return;
          }
        }
        r(is(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, ls = {
    passive: true
  }, as = typeof window > "u" ? true : "onscrollend" in window, jp = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const s = e.options.useScrollendEvent && as ? () => {
    } : _p(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), i = (u) => () => {
      const { horizontal: g, isRtl: f } = e.options;
      r = g ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, s(), t(r, u);
    }, l = i(true), c = i(false);
    n.addEventListener("scroll", l, ls);
    const d = e.options.useScrollendEvent && as;
    return d && n.addEventListener("scrollend", c, ls), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", c);
    };
  }, Rp = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Mp = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, s;
    const i = e + t;
    (s = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || s.call(r, {
      [o.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class $p {
    constructor(t) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
        let n = null;
        const o = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((r) => {
          r.forEach((s) => {
            const i = () => {
              this._measureElement(s.target, s);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
          });
        }));
        return {
          disconnect: () => {
            var r;
            (r = o()) == null || r.disconnect(), n = null;
          },
          observe: (r) => {
            var s;
            return (s = o()) == null ? void 0 : s.observe(r, {
              box: "border-box"
            });
          },
          unobserve: (r) => {
            var s;
            return (s = o()) == null ? void 0 : s.unobserve(r);
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
          getItemKey: wp,
          rangeExtractor: Cp,
          onChange: () => {
          },
          measureElement: Rp,
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
      }, this.maybeNotify = Yt(() => (this.calculateRange(), [
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
          })), this.unsubs.push(this.options.observeElementOffset(this, (r, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = s, this.maybeNotify();
          })), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, o) => {
        const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        for (let i = o - 1; i >= 0; i--) {
          const l = n[i];
          if (r.has(l.lane)) continue;
          const c = s.get(l.lane);
          if (c == null || l.end > c.end ? s.set(l.lane, l) : l.end < c.end && r.set(l.lane, true), r.size === this.options.lanes) break;
        }
        return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = Yt(() => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ], (n, o, r, s, i, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: o,
        scrollMargin: r,
        getItemKey: s,
        enabled: i,
        lanes: l
      }), {
        key: false
      }), this.getMeasurements = Yt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: o, scrollMargin: r, getItemKey: s, enabled: i, lanes: l }, c) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const f of this.laneAssignments.keys()) f >= n && this.laneAssignments.delete(f);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const u = this.measurementsCache.slice(0, d), g = new Array(l).fill(void 0);
        for (let f = 0; f < d; f++) {
          const p = u[f];
          p && (g[p.lane] = f);
        }
        for (let f = d; f < n; f++) {
          const p = s(f), h = this.laneAssignments.get(f);
          let m, x;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const j = g[m], R = j !== void 0 ? u[j] : void 0;
            x = R ? R.end + this.options.gap : o + r;
          } else {
            const j = this.options.lanes === 1 ? u[f - 1] : this.getFurthestMeasurement(u, f);
            x = j ? j.end + this.options.gap : o + r, m = j ? j.lane : f % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(f, m);
          }
          const v = c.get(p), _ = typeof v == "number" ? v : this.options.estimateSize(f), C = x + _;
          u[f] = {
            index: f,
            start: x,
            size: _,
            end: C,
            key: p,
            lane: m
          }, g[m] = f;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Yt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, s) => this.range = n.length > 0 && o > 0 ? Ap({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Yt(() => {
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
      }, (n, o, r, s, i) => s === null || i === null ? [] : n({
        startIndex: s,
        endIndex: i,
        overscan: o,
        count: r
      }), {
        key: false,
        debug: () => this.options.debug
      }), this.indexFromElement = (n) => {
        const o = this.options.indexAttribute, r = n.getAttribute(o);
        return r ? parseInt(r, 10) : (console.warn(`Missing attribute name '${o}={index}' on measured element.`), -1);
      }, this._measureElement = (n, o) => {
        const r = this.indexFromElement(n), s = this.measurementsCache[r];
        if (!s) return;
        const i = s.key, l = this.elementsCache.get(i);
        l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(i, n)), n.isConnected && this.resizeItem(r, this.options.measureElement(n, o, this));
      }, this.resizeItem = (n, o) => {
        const r = this.measurementsCache[n];
        if (!r) return;
        const s = this.itemSizeCache.get(r.key) ?? r.size, i = o - s;
        i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, i, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += i,
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
      }, this.getVirtualItems = Yt(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, o) => {
        const r = [];
        for (let s = 0, i = n.length; s < i; s++) {
          const l = n[s], c = o[l];
          r.push(c);
        }
        return r;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const o = this.getMeasurements();
        if (o.length !== 0) return ss(o[Xs(0, o.length - 1, (r) => ss(o[r]).start, n)]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          const n = this.scrollElement.document.documentElement;
          return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getOffsetForAlignment = (n, o, r = 0) => {
        if (!this.scrollElement) return 0;
        const s = this.getSize(), i = this.getScrollOffset();
        o === "auto" && (o = n >= i + s ? "end" : "start"), o === "center" ? n += (r - s) / 2 : o === "end" && (n -= s);
        const l = this.getMaxScrollOffset();
        return Math.max(Math.min(l, n), 0);
      }, this.getOffsetForIndex = (n, o = "auto") => {
        n = Math.max(0, Math.min(n, this.options.count - 1));
        const r = this.measurementsCache[n];
        if (!r) return;
        const s = this.getSize(), i = this.getScrollOffset();
        if (o === "auto") if (r.end >= i + s - this.options.scrollPaddingEnd) o = "end";
        else if (r.start <= i + this.options.scrollPaddingStart) o = "start";
        else return [
          i,
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
        let s = 0;
        const i = 10, l = (d) => {
          if (!this.targetWindow) return;
          const u = this.getOffsetForIndex(n, d);
          if (!u) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [g, f] = u;
          this._scrollToOffset(g, {
            adjustments: void 0,
            behavior: r
          }), this.targetWindow.requestAnimationFrame(() => {
            const p = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, f);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              xp(m[0], h) || c(f);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(p) : p();
          });
        }, c = (d) => {
          this.targetWindow && this.currentScrollToIndex === n && (s++, s < i ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(`Failed to scroll to index ${n} after ${i} attempts.`));
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
          const s = Array(this.options.lanes).fill(null);
          let i = o.length - 1;
          for (; i >= 0 && s.some((l) => l === null); ) {
            const l = o[i];
            s[l.lane] === null && (s[l.lane] = l.end), i--;
          }
          r = Math.max(...s.filter((l) => l !== null));
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
  const Xs = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, s = n(r);
      if (s < o) e = r + 1;
      else if (s > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Ap({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, s = (c) => e[c].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let i = Xs(0, r, s, n), l = i;
    if (o === 1) for (; l < r && e[l].end < n + t; ) l++;
    else if (o > 1) {
      const c = Array(o).fill(0);
      for (; l < r && c.some((u) => u < n + t); ) {
        const u = e[l];
        c[u.lane] = u.end, l++;
      }
      const d = Array(o).fill(n + t);
      for (; i >= 0 && d.some((u) => u >= n); ) {
        const u = e[i];
        d[u.lane] = u.start, i--;
      }
      i = Math.max(0, i - i % o), l = Math.min(r, l + (o - 1 - l % o));
    }
    return {
      startIndex: i,
      endIndex: l
    };
  }
  const cs = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Ip({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? fi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [r] = y.useState(() => new $p(o));
    return r.setOptions(o), cs(() => r._didMount(), []), cs(() => r._willUpdate()), r;
  }
  function Pp(e) {
    return Ip({
      observeElementRect: Sp,
      observeElementOffset: jp,
      scrollToFn: Mp,
      ...e
    });
  }
  function Fp(e, t) {
    var _a2, _b;
    let n = false, o = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (o = ks(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          o = Os(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          o = Lo(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          o = Ns(String(o), t.format);
          break;
      }
    } catch {
    }
    if (!t) return {
      displayValue: o,
      textSx: {},
      bgSx: {}
    };
    const r = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? Es(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const c of t.cellStyle) if (c.logic && Hu(c.logic, s)) {
        if (c.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const d = Ot(c.backgroundColor);
          d ? i.background = d : i.backgroundColor = c.backgroundColor;
        }
        if (c.textColor && !("color" in l) && !("background" in l)) {
          const d = Ot(c.textColor);
          d ? (l.background = d, l.backgroundClip = "text", l.WebkitBackgroundClip = "text", l.color = "transparent") : l.color = c.textColor;
        }
        if (c.fontWeight && !l.fontWeight && (l.fontWeight = c.fontWeight), c.fontStyle && !l.fontStyle && (l.fontStyle = c.fontStyle), r) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !l.fontWeight && (l.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !l.fontStyle && (l.fontStyle = "italic"), t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in l) && !("background" in l) && (l.color = t.format.stringTextColor)), {
      displayValue: o,
      textSx: l,
      bgSx: i,
      isTruncated: n
    };
  }
  function us({ value: e, config: t }) {
    const { displayValue: n, textSx: o, bgSx: r, isTruncated: s } = y.useMemo(() => Fp(e, t), [
      e,
      t
    ]);
    return a.jsxs(N, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        ...r
      },
      children: [
        a.jsx(I, {
          variant: "body2",
          component: "span",
          noWrap: true,
          title: n,
          sx: {
            flex: 1,
            minWidth: 0,
            lineHeight: "inherit",
            ...o
          },
          children: n
        }),
        s && a.jsx(Rt, {
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
  function ds(e) {
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
  function zp(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: o, tableRowSelection: r, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: c, tableSorting: d, tableQuickFilter: u, gridRowsLength: g } = e, f = y.useRef([]), p = y.useRef([]), h = y.useRef(""), m = y.useRef(d), x = y.useRef(c), v = y.useRef(u), [_, C] = y.useState([]);
    y.useEffect(() => {
      d ? !m.current && f.current.length > 0 && C(f.current) : C((K) => (K.length > 0 && (f.current = K), [])), m.current = d;
    }, [
      d
    ]);
    const [j, R] = y.useState([]);
    y.useEffect(() => {
      c ? !x.current && p.current.length > 0 && R(p.current) : R((K) => (K.length > 0 && (p.current = K), [])), x.current = c;
    }, [
      c
    ]);
    const [w, M] = y.useState("");
    y.useEffect(() => {
      u ? !v.current && h.current && M(h.current) : M((K) => (K && (h.current = K), "")), v.current = u;
    }, [
      u
    ]);
    const [z, D] = y.useState({}), [A, P] = y.useState(() => {
      if (o) return {};
      const K = `jtc_col_sizes_${t}`;
      try {
        const ce = localStorage.getItem(K);
        if (ce) return JSON.parse(ce);
      } catch {
      }
      const X = {};
      return n.forEach((ce) => {
        ce.width && (X[ce.path] = ce.width);
      }), r === true && (X.__select__ = 48), X;
    });
    y.useEffect(() => {
      if (!o) try {
        localStorage.setItem(`jtc_col_sizes_${t}`, JSON.stringify(A));
      } catch {
      }
    }, [
      A,
      t,
      o
    ]);
    const V = y.useMemo(() => Number(s) || 25, [
      s
    ]), [k, B] = y.useState({
      pageIndex: 0,
      pageSize: V
    });
    y.useEffect(() => {
      B((K) => K.pageSize === V ? K : {
        pageIndex: 0,
        pageSize: V
      });
    }, [
      V
    ]);
    const q = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(g, 1)
    } : k, [
      l,
      g,
      k
    ]), U = y.useMemo(() => ds(i), [
      i
    ]), [E, S] = y.useState({}), [F, J] = y.useState({
      left: [],
      right: []
    }), W = y.useCallback(() => {
      S({});
    }, []);
    return {
      sorting: _,
      columnFilters: j,
      globalFilter: w,
      rowSelection: z,
      columnSizing: A,
      pagination: k,
      effectivePagination: q,
      columnVisibility: E,
      columnPinning: F,
      setSorting: C,
      setColumnFilters: R,
      setGlobalFilter: M,
      setRowSelection: D,
      setColumnSizing: P,
      setPagination: B,
      setColumnVisibility: S,
      setColumnPinning: J,
      pageSizeOptions: U,
      parsePageSizeOptions: ds,
      showAllColumns: W
    };
  }
  const Tp = [
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
  ], Dp = [
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
  ], kp = [
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
  ], Ep = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    }
  ];
  function Op(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function Np({ open: e, onClose: t, onApply: n, currentValue: o, columnId: r, columnType: s }) {
    const i = y.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), l = y.useMemo(() => {
      switch (i) {
        case "number":
          return Dp;
        case "date":
          return kp;
        case "boolean":
          return Ep;
        default:
          return Tp;
      }
    }, [
      i
    ]), c = y.useMemo(() => {
      const v = Op(i);
      if (o == null) return {
        operator: v,
        value: ""
      };
      if (typeof o == "object" && o !== null && "operator" in o) {
        const _ = o;
        return l.some((j) => j.value === _.operator) ? _ : {
          operator: v,
          value: _.value
        };
      }
      return typeof o == "string" || typeof o == "number" ? {
        operator: v,
        value: o
      } : {
        operator: v,
        value: JSON.stringify(o)
      };
    }, [
      o,
      i,
      l
    ]), [d, u] = y.useState(c.operator), [g, f] = y.useState(String(c.value));
    y.useEffect(() => {
      u(c.operator), f(String(c.value));
    }, [
      c,
      e
    ]);
    const p = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(d), h = () => {
      const v = g.trim();
      if (p && v === "") n(void 0);
      else {
        const _ = i === "number" ? Number(v) : v;
        n({
          operator: d,
          value: _
        });
      }
    }, m = () => {
      n(void 0);
    }, x = r.split(".").pop() || r;
    return a.jsxs(Qo, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      children: [
        a.jsx(Zo, {
          children: b.t("json_table_filter_for_column").replace("{column}", x)
        }),
        a.jsx(er, {
          children: a.jsxs(N, {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1
            },
            children: [
              a.jsxs(Ct, {
                fullWidth: true,
                children: [
                  a.jsx(St, {
                    children: b.t("json_table_filter_operator")
                  }),
                  a.jsx(ft, {
                    value: d,
                    label: b.t("json_table_filter_operator"),
                    onChange: (v) => u(v.target.value),
                    children: l.map((v) => a.jsx(ie, {
                      value: v.value,
                      children: b.t(v.label)
                    }, v.value))
                  })
                ]
              }),
              p && a.jsx(Me, {
                label: b.t("json_table_filter_value"),
                value: g,
                onChange: (v) => f(v.target.value),
                type: i === "number" ? "number" : "text",
                fullWidth: true,
                autoFocus: true
              }),
              !p && a.jsx(I, {
                variant: "body2",
                color: "text.secondary",
                children: b.t("json_table_filter_no_value_needed")
              })
            ]
          })
        }),
        a.jsxs(ar, {
          children: [
            a.jsx(it, {
              onClick: m,
              children: b.t("json_table_filter_clear")
            }),
            a.jsx(it, {
              onClick: t,
              children: b.t("cancel")
            }),
            a.jsx(it, {
              variant: "contained",
              onClick: h,
              children: b.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function Lp({ anchorEl: e, open: t, onClose: n, activeColumn: o, isSorted: r, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: c, onShowAllColumns: d, hasHiddenColumns: u }) {
    var _a2, _b, _c2, _d2, _e2, _f, _g, _h;
    const [g, f] = y.useState(false), p = ((_a2 = o == null ? void 0 : o.getCanSort) == null ? void 0 : _a2.call(o)) === true, h = s && ((_b = o == null ? void 0 : o.getCanFilter) == null ? void 0 : _b.call(o)) === true, m = ((_c2 = o == null ? void 0 : o.getCanHide) == null ? void 0 : _c2.call(o)) === true, x = ((_d2 = o == null ? void 0 : o.getCanPin) == null ? void 0 : _d2.call(o)) === true, v = ((_e2 = o == null ? void 0 : o.getIsPinned) == null ? void 0 : _e2.call(o)) ?? false, _ = i != null;
    if (!(p || h || m || x)) return null;
    const j = () => {
      o && l([
        {
          id: o.id,
          desc: false
        }
      ]), n();
    }, R = () => {
      o && l([
        {
          id: o.id,
          desc: true
        }
      ]), n();
    }, w = () => {
      o && c(o.id), n();
    }, M = () => {
      f(true);
    }, z = () => {
      f(false);
    }, D = (U) => {
      o == null ? void 0 : o.setFilterValue(U), f(false), n();
    }, A = () => {
      o == null ? void 0 : o.setFilterValue(void 0), n();
    }, P = () => {
      var _a3;
      (_a3 = o == null ? void 0 : o.toggleVisibility) == null ? void 0 : _a3.call(o, false), n();
    }, V = () => {
      d == null ? void 0 : d(), n();
    }, k = () => {
      var _a3;
      (_a3 = o == null ? void 0 : o.pin) == null ? void 0 : _a3.call(o, "left"), n();
    }, B = () => {
      var _a3;
      (_a3 = o == null ? void 0 : o.pin) == null ? void 0 : _a3.call(o, "right"), n();
    }, q = () => {
      var _a3;
      (_a3 = o == null ? void 0 : o.pin) == null ? void 0 : _a3.call(o, false), n();
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs(gi, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            p && a.jsxs(a.Fragment, {
              children: [
                a.jsxs(ie, {
                  onClick: j,
                  children: [
                    a.jsx(_t, {
                      children: a.jsx(Fs, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_sort_asc")
                    })
                  ]
                }),
                a.jsxs(ie, {
                  onClick: R,
                  children: [
                    a.jsx(_t, {
                      children: a.jsx(Ps, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_sort_desc")
                    })
                  ]
                }),
                r && a.jsx(ie, {
                  onClick: w,
                  children: a.jsx(I, {
                    variant: "body2",
                    children: b.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            p && h && a.jsx(To, {}),
            h && a.jsxs(a.Fragment, {
              children: [
                a.jsxs(ie, {
                  onClick: M,
                  children: [
                    a.jsx(_t, {
                      children: a.jsx(Zc, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_set_filter")
                    })
                  ]
                }),
                _ && a.jsxs(ie, {
                  onClick: A,
                  children: [
                    a.jsx(_t, {
                      children: a.jsx(cr, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (p || h) && (m || x) && a.jsx(To, {}),
            m && a.jsxs(ie, {
              onClick: P,
              children: [
                a.jsx(_t, {
                  children: a.jsx(Ts, {
                    fontSize: "small"
                  })
                }),
                a.jsx(I, {
                  variant: "body2",
                  children: b.t("json_table_hide_column")
                })
              ]
            }),
            u && d && a.jsx(ie, {
              onClick: V,
              children: a.jsx(I, {
                variant: "body2",
                children: b.t("json_table_show_all_columns")
              })
            }),
            x && a.jsx(a.Fragment, {
              children: v ? a.jsxs(ie, {
                onClick: q,
                children: [
                  a.jsx(_t, {
                    children: a.jsx(xo, {
                      fontSize: "small"
                    })
                  }),
                  a.jsx(I, {
                    variant: "body2",
                    children: b.t("json_table_unpin")
                  })
                ]
              }) : a.jsxs(a.Fragment, {
                children: [
                  a.jsxs(ie, {
                    onClick: k,
                    children: [
                      a.jsx(_t, {
                        children: a.jsx(xo, {
                          fontSize: "small",
                          sx: {
                            transform: "rotate(-45deg)"
                          }
                        })
                      }),
                      a.jsx(I, {
                        variant: "body2",
                        children: b.t("json_table_pin_left")
                      })
                    ]
                  }),
                  a.jsxs(ie, {
                    onClick: B,
                    children: [
                      a.jsx(_t, {
                        children: a.jsx(xo, {
                          fontSize: "small",
                          sx: {
                            transform: "rotate(45deg)"
                          }
                        })
                      }),
                      a.jsx(I, {
                        variant: "body2",
                        children: b.t("json_table_pin_right")
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        h && o && g && a.jsx(Np, {
          open: g,
          onClose: z,
          onApply: D,
          currentValue: (_f = o.getFilterValue) == null ? void 0 : _f.call(o),
          columnId: o.id,
          columnType: (_h = (_g = o.columnDef) == null ? void 0 : _g.meta) == null ? void 0 : _h.columnType
        })
      ]
    });
  }
  function kt(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function ps(e) {
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
        const [, s, i, l, c = "0", d = "0", u = "0"] = n, g = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(c, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(g.getTime()) ? null : g.getTime();
      }
      const o = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (o) {
        const [, s, i, l, c = "0", d = "0", u = "0"] = o, g = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(c, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(g.getTime()) ? null : g.getTime();
      }
      if (/^-?\d+$/.test(t)) {
        const s = parseInt(t, 10), i = s >= 1e11 ? s : s * 1e3, l = new Date(i);
        return isNaN(l.getTime()) ? null : i;
      }
      const r = new Date(t);
      return isNaN(r.getTime()) ? null : r.getTime();
    }
    return null;
  }
  function Hp(e, t, n) {
    if (e == null) return t === "isEmpty";
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    const o = kt(e), r = kt(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const d = ps(e), u = ps(n);
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
        return o.includes(r);
      case "startsWith":
        return o.startsWith(r);
      case "endsWith":
        return o.endsWith(r);
      case "equals":
        return l ? s === i : o === r;
      case "notEquals":
        return l ? s !== i : o !== r;
      case "greaterThan":
        return l ? s > i : o > r;
      case "greaterThanOrEqual":
        return l ? s >= i : o >= r;
      case "lessThan":
        return l ? s < i : o < r;
      case "lessThanOrEqual":
        return l ? s <= i : o <= r;
      default:
        return true;
    }
  }
  const Vp = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const r = e.getValue(t);
      return r == null ? false : kt(r).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const r = e.getValue(t);
      if (r == null) return false;
      const s = Number(r);
      return isNaN(s) ? kt(r).includes(kt(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const r = n, s = e.getValue(t);
      return Hp(s, r.operator, r.value);
    }
    const o = e.getValue(t);
    return o == null ? false : kt(o).includes(kt(n));
  }, Bp = {
    advanced: Vp
  };
  function Wp(e) {
    return typeof e == "object" && e !== null && "operator" in e && "value" in e && typeof e.operator == "string";
  }
  function Gp(e) {
    if (e == null) return {
      displayValue: "",
      isAdvanced: false
    };
    if (Wp(e)) {
      const t = e.operator.replace(/([A-Z])/g, " $1").trim(), n = String(e.value).length > 10 ? `${String(e.value).substring(0, 10)}...` : String(e.value);
      return {
        displayValue: `[${t}: ${n}]`,
        isAdvanced: true
      };
    }
    if (typeof e == "object") try {
      return {
        displayValue: JSON.stringify(e),
        isAdvanced: false
      };
    } catch {
      return {
        displayValue: "[Object]",
        isAdvanced: false
      };
    }
    return typeof e == "string" ? {
      displayValue: e,
      isAdvanced: false
    } : {
      displayValue: String(e),
      isAdvanced: false
    };
  }
  const Up = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, qp = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, Yp = (e) => {
    const { children: t, value: n, ...o } = e;
    return a.jsx(ie, {
      ...o,
      value: n,
      children: a.jsx(I, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, Jp = () => {
    var _a2;
    const e = y.useContext(hi), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = mi("oid"), s = Ci("oid"), i = In(), l = t == null ? void 0 : t.type, c = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (s == null) return [];
      let $;
      if (typeof s == "string") try {
        $ = JSON.parse(s);
      } catch {
        return [];
      }
      else $ = s;
      return Array.isArray($) ? $ : typeof $ == "object" && $ !== null ? [
        $
      ] : [];
    }, [
      s
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: g, rows: f, meta: p } = vd(d, u), h = y.useMemo(() => {
      const $ = n.data.tableMaxDepth || 10;
      return p.maxDepth > $ ? {
        actual: p.maxDepth,
        configured: $
      } : null;
    }, [
      p.maxDepth,
      n.data.tableMaxDepth
    ]), m = y.useMemo(() => Ds(n.data.columnConfig), [
      n.data.columnConfig
    ]), x = n.data.tableDensity || "standard", v = Number(n.data.tableRowHeight) || Up[x] || 52, _ = Number(n.data.tableHeaderHeight) || qp[x] || 56, C = y.useMemo(() => f.map(($, T) => ({
      __id: T,
      ...$
    })), [
      f
    ]), j = y.useMemo(() => Xu({
      columnConfig: m,
      analysisColumns: g,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: n.data.tableFiltering === true,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false,
        tablePinning: n.data.tablePinning === true
      },
      renderConfiguredCell: ($, T) => a.jsx(us, {
        value: $,
        config: T
      }),
      renderAutoDetectedCell: ($) => a.jsx(us, {
        value: $
      }),
      renderSelectionHeader: ($) => a.jsx(Rn, {
        size: "small",
        indeterminate: $.getIsSomePageRowsSelected(),
        checked: $.getIsAllPageRowsSelected(),
        onChange: $.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: ($) => a.jsx(Rn, {
        size: "small",
        checked: $.getIsSelected(),
        onChange: $.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      m,
      g,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection,
      n.data.tableHiding,
      n.data.tablePinning
    ]), R = n.data.tableAutoSize === true, { sorting: w, columnFilters: M, globalFilter: z, rowSelection: D, columnSizing: A, pagination: P, effectivePagination: V, columnVisibility: k, columnPinning: B, setSorting: q, setColumnFilters: U, setGlobalFilter: E, setRowSelection: S, setColumnSizing: F, setPagination: J, setColumnVisibility: W, setColumnPinning: K, pageSizeOptions: X, showAllColumns: ce } = zp({
      widgetId: o,
      columnConfig: m,
      tableAutoSize: R,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: n.data.tableFiltering === true,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: C.length
    }), ue = vp({
      data: C,
      columns: j,
      getCoreRowModel: ap(),
      getSortedRowModel: hp(),
      getFilteredRowModel: fp(),
      getPaginationRowModel: gp(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: "includesString",
      filterFns: Bp,
      columnResizeMode: "onChange",
      enableColumnResizing: !R,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: w,
        columnFilters: M,
        globalFilter: z,
        pagination: V,
        rowSelection: D,
        columnSizing: A,
        columnVisibility: k,
        columnPinning: B
      },
      onSortingChange: q,
      onColumnFiltersChange: U,
      onGlobalFilterChange: E,
      onPaginationChange: n.data.tablePagination !== false ? J : void 0,
      onRowSelectionChange: S,
      onColumnSizingChange: F,
      onColumnVisibilityChange: W,
      onColumnPinningChange: K,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), O = y.useRef(null), de = y.useRef(null), [ne, ee] = y.useState({}), [Oe, Pe] = y.useState(null), he = y.useRef(null), [Ae, je] = y.useState(void 0), [mt, At] = y.useState(void 0), ct = y.useCallback(($, T) => {
      var _a3;
      he.current = $;
      const Y = $.id, pe = w.find((Ie) => Ie.id === Y), $e = (_a3 = M.find((Ie) => Ie.id === Y)) == null ? void 0 : _a3.value;
      je(pe), At($e), Pe(T);
    }, [
      w,
      M
    ]), yt = y.useCallback(() => {
      Pe(null);
    }, []);
    y.useEffect(() => {
      if (!R) return;
      const $ = de.current;
      if (!$) return;
      const T = new ResizeObserver(() => {
        const Y = $.querySelector("tr[data-row-index]");
        if (!Y) return;
        const pe = Y.querySelectorAll("td"), $e = ue.getHeaderGroups()[0];
        if (!$e || pe.length !== $e.headers.length) return;
        const Ie = {};
        $e.headers.forEach((ln, bo) => {
          const an = pe[bo];
          an && (Ie[ln.id] = an.getBoundingClientRect().width);
        }), ee(Ie);
      });
      return T.observe($), () => T.disconnect();
    }, [
      R,
      ue
    ]);
    const It = y.useMemo(() => {
      const $ = {
        tableLayout: R ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) $["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const T = n.data.horizontalCellBorderWidth ?? 1, Y = Nn(n.data.horizontalCellBorderColor);
        $["& .MuiTableCell-root"] = {
          ...$["& .MuiTableCell-root"],
          borderBottom: `${T}px solid`,
          borderBottomColor: Y || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const T = n.data.verticalCellBorderWidth ?? 1, Y = Nn(n.data.verticalCellBorderColor);
        $["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${T}px solid`,
          borderRightColor: Y || "divider"
        };
      }
      return $;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      R
    ]), Fe = n.data.tableHeaderBgColor, He = n.data.tableHeaderTextColor, Ye = n.data.tableHeaderFontSize, Pt = y.useMemo(() => ({
      height: _,
      whiteSpace: "nowrap",
      ...He && {
        color: He
      },
      ...Ye && {
        fontSize: `${Ye}px`
      }
    }), [
      _,
      He,
      Ye
    ]), bt = y.useMemo(() => ({
      ...He && {
        color: He
      },
      ...Ye && {
        fontSize: `${Ye}px`
      }
    }), [
      He,
      Ye
    ]), Ft = n.data.noCard === true, vt = n.data.headerBorderWidth ?? 0, ut = Nn(n.data.headerBorderColor), Bt = y.useMemo(() => {
      const $ = n.data.tableHeaderElevation ?? 6, T = Ft ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: $ > 0 ? i.shadows[$] : "none"
      };
      vt > 0 && (T["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${vt}px`,
        backgroundColor: ut || i.palette.divider,
        pointerEvents: "none"
      });
      const Y = Fe ? Ot(Fe) : null;
      return Y ? {
        ...T,
        background: Y
      } : Fe ? {
        ...T,
        backgroundColor: Fe
      } : T;
    }, [
      Ft,
      Fe,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      vt,
      ut
    ]), zt = y.useMemo(() => {
      const $ = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, T = n.data.borderWidth, Y = n.data.borderStyle || "solid", pe = Nn(n.data.borderColor), $e = n.data.borderRadius;
      return T && T > 0 && ($.border = `${T}px ${Y}`, $.borderColor = pe || "divider"), $e && ($.borderRadius = $e), $;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), sn = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), ze = y.useCallback(($) => R ? ne[$.id] ?? "auto" : $.getSize(), [
      R,
      ne
    ]), ot = y.useCallback(($) => {
      if (n.data.tablePinning !== true) return {};
      const T = $.getIsPinned();
      if (!T) return {};
      const Y = 1, pe = i.palette.background.paper;
      return T === "left" ? {
        position: "sticky",
        left: $.getStart("left"),
        zIndex: Y,
        backgroundColor: pe
      } : T === "right" ? {
        position: "sticky",
        right: $.getAfter("right"),
        zIndex: Y,
        backgroundColor: pe
      } : {};
    }, [
      n.data.tablePinning,
      i.palette.background.paper
    ]), rt = y.useMemo(() => ({
      ...n.data.tableCellFontSize && {
        fontSize: `${n.data.tableCellFontSize}px`
      },
      overflow: "hidden",
      height: v,
      maxHeight: v,
      padding: "0 8px",
      verticalAlign: "middle"
    }), [
      n.data.tableCellFontSize,
      v
    ]), st = n.data.evenRowColor || null, Wt = n.data.oddRowColor || null, Gt = st ? Ot(st) : null, Tn = Wt ? Ot(Wt) : null, Tt = y.useCallback(($) => {
      const T = $ % 2 === 0, Y = T ? st : Wt, pe = T ? Gt : Tn;
      if (Y) return pe ? {
        background: pe
      } : {
        backgroundColor: Y
      };
    }, [
      st,
      Wt,
      Gt,
      Tn
    ]), Ut = ue.getRowModel().rows, Dn = Pp({
      count: Ut.length,
      getScrollElement: () => O.current,
      estimateSize: () => v,
      overscan: 25,
      scrollPaddingStart: v
    }), mo = n.data.tableVirtualizeThreshold ?? 50, Dt = n.data.tablePagination === false && Ut.length > mo ? Dn.getVirtualItems() : null, yo = Dt == null ? void 0 : Dt[0], kn = Dt == null ? void 0 : Dt[Dt.length - 1], En = (yo == null ? void 0 : yo.start) ?? 0, Z = kn ? Dn.getTotalSize() - (kn.end ?? 0) : 0;
    return a.jsxs(yi, {
      isValidType: c,
      data: r,
      oidValue: s,
      children: [
        a.jsx(bi, {
          data: r,
          widget: n
        }),
        c && j.length > 0 ? a.jsxs(N, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && a.jsx(N, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: a.jsx(Me, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: z,
                onChange: ($) => E($.target.value),
                placeholder: b.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: a.jsx(No, {
                      position: "start",
                      children: a.jsx(zs, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && a.jsx(Zn, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: a.jsx(I, {
                variant: "body2",
                children: b.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            a.jsx(N, {
              sx: zt,
              children: a.jsx(yc, {
                ref: O,
                sx: sn,
                children: a.jsxs(rc, {
                  size: x === "compact" ? "small" : "medium",
                  sx: It,
                  children: [
                    a.jsxs(wc, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...Bt,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: [
                        ue.getHeaderGroups().map(($) => a.jsx(qt, {
                          children: $.headers.map((T) => {
                            const Y = T.column.getCanSort(), pe = T.column.getIsSorted(), $e = T.column.columnDef.meta, Ie = T.column.id === "__select__", ln = !R, bo = ot(T.column), an = T.column.getIsPinned();
                            return a.jsxs(et, {
                              component: "th",
                              colSpan: T.colSpan,
                              align: ($e == null ? void 0 : $e.align) || "left",
                              padding: Ie ? "checkbox" : "normal",
                              sx: {
                                width: ze(T),
                                minWidth: Ie ? 48 : 40,
                                position: an ? "sticky" : "relative",
                                zIndex: an ? 2 : void 0,
                                ...Pt,
                                ...bo
                              },
                              children: [
                                Ie ? mn(T.column.columnDef.header, T.getContext()) : a.jsxs(N, {
                                  sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: ($e == null ? void 0 : $e.align) === "right" ? "flex-end" : ($e == null ? void 0 : $e.align) === "center" ? "center" : "space-between",
                                    width: "100%"
                                  },
                                  children: [
                                    Y ? a.jsx(Jc, {
                                      active: pe !== false,
                                      direction: pe === "desc" ? "desc" : "asc",
                                      onClick: T.column.getToggleSortingHandler(),
                                      children: a.jsx(I, {
                                        variant: "body2",
                                        component: "span",
                                        fontWeight: "medium",
                                        noWrap: true,
                                        sx: bt,
                                        children: mn(T.column.columnDef.header, T.getContext())
                                      })
                                    }) : a.jsx(I, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: bt,
                                      children: mn(T.column.columnDef.header, T.getContext())
                                    }),
                                    n.data.tableColumnMenu !== false && (T.column.getCanSort() || n.data.tableFiltering === true && T.column.getCanFilter()) && a.jsx(Ee, {
                                      title: b.t("json_table_column_menu"),
                                      children: a.jsx(Se, {
                                        size: "small",
                                        "aria-label": b.t("json_table_column_menu"),
                                        onClick: (On) => {
                                          On.stopPropagation(), ct(T.column, On.currentTarget);
                                        },
                                        sx: {
                                          ml: 0.5,
                                          opacity: 0.6
                                        },
                                        children: a.jsx(eu, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  ]
                                }),
                                ln && T.column.getCanResize() && a.jsx(N, {
                                  className: "resize-handle",
                                  onMouseDown: T.getResizeHandler(),
                                  onTouchStart: T.getResizeHandler(),
                                  onClick: (On) => On.stopPropagation(),
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
                                    opacity: T.column.getIsResizing() ? 1 : 0,
                                    bgcolor: T.column.getIsResizing() ? "primary.main" : "divider",
                                    transition: "opacity 0.15s",
                                    "&:hover": {
                                      opacity: 1,
                                      bgcolor: "primary.light"
                                    }
                                  }
                                })
                              ]
                            }, T.id);
                          })
                        }, $.id)),
                        n.data.tableFiltering === true && a.jsx(qt, {
                          children: (_a2 = ue.getHeaderGroups()[0]) == null ? void 0 : _a2.headers.map(($) => {
                            const T = ot($.column), Y = $.column.getIsPinned();
                            if ($.column.id === "__select__") return a.jsx(et, {
                              component: "th",
                              colSpan: $.colSpan,
                              padding: "checkbox",
                              sx: {
                                width: ze($),
                                py: 0.5,
                                px: 0.5,
                                position: Y ? "sticky" : void 0,
                                zIndex: Y ? 2 : void 0,
                                ...T
                              }
                            }, $.id);
                            if (!$.column.getCanFilter()) return a.jsx(et, {
                              component: "th",
                              colSpan: $.colSpan,
                              sx: {
                                width: ze($),
                                py: 0.5,
                                px: 0.5,
                                position: Y ? "sticky" : void 0,
                                zIndex: Y ? 2 : void 0,
                                ...T
                              }
                            }, $.id);
                            const pe = $.column.getFilterValue(), { displayValue: $e, isAdvanced: Ie } = Gp(pe);
                            return a.jsx(et, {
                              component: "th",
                              colSpan: $.colSpan,
                              sx: {
                                width: ze($),
                                py: 0.5,
                                px: 0.5,
                                position: Y ? "sticky" : void 0,
                                zIndex: Y ? 2 : void 0,
                                ...T
                              },
                              children: a.jsx(Ee, {
                                title: Ie ? b.t("json_table_filter_advanced_active") : "",
                                placement: "top",
                                children: a.jsx(Me, {
                                  size: "small",
                                  variant: "standard",
                                  fullWidth: true,
                                  value: $e,
                                  onChange: (ln) => {
                                    Ie || $.column.setFilterValue(ln.target.value || void 0);
                                  },
                                  placeholder: b.t("json_table_filter_placeholder"),
                                  disabled: Ie,
                                  slotProps: {
                                    input: {
                                      endAdornment: pe != null && pe !== "" ? a.jsx(No, {
                                        position: "end",
                                        children: a.jsx(Ee, {
                                          title: Ie ? b.t("json_table_filter_clear_advanced") : b.t("json_table_filter_clear"),
                                          children: a.jsx(Se, {
                                            size: "small",
                                            onClick: () => $.column.setFilterValue(void 0),
                                            "aria-label": b.t("json_table_filter_clear"),
                                            children: a.jsx(cr, {
                                              fontSize: "inherit"
                                            })
                                          })
                                        })
                                      }) : void 0
                                    }
                                  }
                                })
                              })
                            }, $.id);
                          })
                        })
                      ]
                    }),
                    a.jsx(cc, {
                      ref: de,
                      children: Dt ? a.jsxs(a.Fragment, {
                        children: [
                          En > 0 && a.jsx(qt, {
                            children: a.jsx(et, {
                              colSpan: j.length,
                              sx: {
                                height: En,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          Dt.map(($) => {
                            const T = Ut[$.index], Y = $.index;
                            return a.jsx(qt, {
                              "data-row-index": Y,
                              sx: {
                                height: v,
                                ...Tt(Y)
                              },
                              children: T.getVisibleCells().map((pe) => {
                                var _a3;
                                const $e = pe.column.id === "__select__", Ie = ot(pe.column);
                                return a.jsx(et, {
                                  align: ((_a3 = pe.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                                  padding: $e ? "checkbox" : "normal",
                                  sx: {
                                    ...rt,
                                    ...Ie
                                  },
                                  children: mn(pe.column.columnDef.cell, pe.getContext())
                                }, pe.id);
                              })
                            }, T.id);
                          }),
                          Z > 0 && a.jsx(qt, {
                            children: a.jsx(et, {
                              colSpan: j.length,
                              sx: {
                                height: Z,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Ut.map(($, T) => a.jsx(qt, {
                        "data-row-index": T,
                        sx: {
                          height: v,
                          ...Tt(T)
                        },
                        children: $.getVisibleCells().map((Y) => {
                          var _a3;
                          const pe = Y.column.id === "__select__", $e = ot(Y.column);
                          return a.jsx(et, {
                            align: ((_a3 = Y.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                            padding: pe ? "checkbox" : "normal",
                            sx: {
                              ...rt,
                              ...$e
                            },
                            children: mn(Y.column.columnDef.cell, Y.getContext())
                          }, Y.id);
                        })
                      }, $.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && a.jsx(Lc, {
              component: "div",
              count: ue.getFilteredRowModel().rows.length,
              page: P.pageIndex,
              rowsPerPage: P.pageSize,
              rowsPerPageOptions: X,
              onPageChange: ($, T) => J((Y) => ({
                ...Y,
                pageIndex: T
              })),
              onRowsPerPageChange: ($) => J({
                pageIndex: 0,
                pageSize: parseInt($.target.value, 10)
              }),
              labelRowsPerPage: a.jsx(I, {
                variant: "body2",
                component: "span",
                children: b.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: $, to: T, count: Y }) => a.jsx(I, {
                variant: "body2",
                component: "span",
                children: `${$}\u2013${T} / ${Y}`
              }),
              slots: {
                menuItem: Yp
              },
              slotProps: {
                select: {
                  renderValue: ($) => a.jsx(I, {
                    variant: "body2",
                    component: "span",
                    children: String($)
                  })
                }
              }
            }),
            a.jsx(Lp, {
              anchorEl: Oe,
              open: !!Oe,
              onClose: yt,
              activeColumn: he.current,
              isSorted: Ae !== void 0,
              tableFiltering: n.data.tableFiltering === true,
              activeColumnFilter: mt,
              onSetSorting: q,
              onClearSorting: ($) => q((T) => T.filter((Y) => Y.id !== $)),
              onShowAllColumns: ce,
              hasHiddenColumns: Object.keys(k).some(($) => k[$] === false)
            })
          ]
        }) : a.jsx(N, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: a.jsx(I, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? b.t("json_table_no_oid") : c ? m.length > 0 && j.length === 0 ? b.t("json_table_all_columns_hidden") : b.t("json_table_no_data") : b.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Kp = [
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
  Ko = class extends b {
    static createObjectFields() {
      const t = vi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (s, i, l, c) => {
          if (!i.oid) {
            for (const d of Kp) delete i[d];
            r || l(i);
          }
          r && await r(s, i, l, c);
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
              ...vr()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Ko.createObjectFields(),
              ...wd()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...vr({
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
      return Ko.getWidgetInfo();
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
      return xi(this.wrapContent(a.jsx(Jp, {})), n);
    }
  };
});
export {
  __tla,
  Ko as default
};
