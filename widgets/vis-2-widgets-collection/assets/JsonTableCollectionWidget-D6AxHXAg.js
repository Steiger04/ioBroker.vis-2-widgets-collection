import { g as be, a as we, u as Ce, Z as bi, _ as wi, $ as Nn, a0 as $t, h as Ft, j as u, s as U, d as re, e as Se, a1 as Eo, m as pe, a2 as Mr, b as oe, P as ot, B as In, c as ue, I as je, W as B, a3 as oo, M as ro, X as bt, a4 as Xt, a5 as Ci, f as No, a6 as Si, a7 as Ro, i as De, a8 as $r, a9 as nn, U as _i, aa as Ri, T as k, ab as Lo, ac as ji, ad as Ar, ae as io, af as Mi, ag as Vo, ah as $i, R as Fn, o as Y, ai as et, G as S, aj as Ai, ak as Pi, al as so, am as lo, w as At, an as Ii, ao as Fi, C as at, F as Gn, ap as ki, n as zi, q as Di, x as Ti, y as Oi, aq as Ei, A as Ni, z as Ho, E as Li, __tla as __tla_0 } from "./useData-B9ZrPGFV.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as on, __tla as __tla_2 } from "./Checkbox-C1s5DkiE.js";
import { S as Ze, __tla as __tla_3 } from "./Stack-BXcGSMV_.js";
import { T as Pr, a as kn, __tla as __tla_4 } from "./ToggleButtonGroup-Du_vpcqa.js";
import { M as rt, __tla as __tla_5 } from "./MenuItem-CBPgh-ig.js";
import { C as Ir, __tla as __tla_6 } from "./Close-BaVCh89c.js";
import { B as rn, __tla as __tla_7 } from "./Button-B-tNf451.js";
import { F as _t, __tla as __tla_8 } from "./FormControlLabel-CnJhmOqm.js";
import { S as fn, __tla as __tla_9 } from "./Switch-sFS5B12S.js";
import { S as Vi, __tla as __tla_10 } from "./Slider-Bri4S_1w.js";
import { D as Hi, a as Bi, b as Wi, __tla as __tla_11 } from "./DialogTitle-DKPM9osg.js";
import { u as Gi, __tla as __tla_12 } from "./useOidValue-Dudms15G.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Bo6-_dj-.js";
import { __tla as __tla_14 } from "./listItemTextClasses-B9pgY4io.js";
let _o;
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
  function Ui(e) {
    return be("MuiCollapse", e);
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
  const qi = (e) => {
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
    return Se(o, Ui, n);
  }, Yi = U("div", {
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
  })(pe(({ theme: e }) => ({
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
  }))), Ji = U("div", {
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
  }), Xi = U("div", {
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
  }), ao = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: i, className: s, collapsedSize: l = "0px", component: a, easing: c, in: d, onEnter: f, onEntered: g, onEntering: p, onExit: h, onExited: m, onExiting: v, orientation: x = "vertical", style: C, timeout: _ = bi.standard, TransitionComponent: j = wi, ...$ } = o, A = {
      ...o,
      orientation: x,
      collapsedSize: l
    }, F = qi(A), w = Nn(), R = $t(), b = y.useRef(null), M = y.useRef(), D = typeof l == "number" ? `${l}px` : l, P = x === "horizontal", T = P ? "width" : "height", N = y.useRef(null), L = Ft(n, N), O = (W) => (se) => {
      if (W) {
        const Q = N.current;
        se === void 0 ? W(Q) : W(Q, se);
      }
    }, Z = () => b.current ? b.current[P ? "clientWidth" : "clientHeight"] : 0, G = O((W, se) => {
      b.current && P && (b.current.style.position = "absolute"), W.style[T] = D, f && f(W, se);
    }), ye = O((W, se) => {
      const Q = Z();
      b.current && P && (b.current.style.position = "");
      const { duration: Me, easing: Te } = Eo({
        style: C,
        timeout: _,
        easing: c
      }, {
        mode: "enter"
      });
      if (_ === "auto") {
        const Oe = w.transitions.getAutoHeightDuration(Q);
        W.style.transitionDuration = `${Oe}ms`, M.current = Oe;
      } else W.style.transitionDuration = typeof Me == "string" ? Me : `${Me}ms`;
      W.style[T] = `${Q}px`, W.style.transitionTimingFunction = Te, p && p(W, se);
    }), ie = O((W, se) => {
      W.style[T] = "auto", g && g(W, se);
    }), Ae = O((W) => {
      W.style[T] = `${Z()}px`, h && h(W);
    }), ae = O(m), q = O((W) => {
      const se = Z(), { duration: Q, easing: Me } = Eo({
        style: C,
        timeout: _,
        easing: c
      }, {
        mode: "exit"
      });
      if (_ === "auto") {
        const Te = w.transitions.getAutoHeightDuration(se);
        W.style.transitionDuration = `${Te}ms`, M.current = Te;
      } else W.style.transitionDuration = typeof Q == "string" ? Q : `${Q}ms`;
      W.style[T] = D, W.style.transitionTimingFunction = Me, v && v(W);
    }), ve = (W) => {
      _ === "auto" && R.start(M.current || 0, W), r && r(N.current, W);
    };
    return u.jsx(j, {
      in: d,
      onEnter: G,
      onEntered: ie,
      onEntering: ye,
      onExit: Ae,
      onExited: ae,
      onExiting: q,
      addEndListener: ve,
      nodeRef: N,
      timeout: _ === "auto" ? null : _,
      ...$,
      children: (W, { ownerState: se, ...Q }) => u.jsx(Yi, {
        as: a,
        className: re(F.root, s, {
          entered: F.entered,
          exited: !d && D === "0px" && F.hidden
        }[W]),
        style: {
          [P ? "minWidth" : "minHeight"]: D,
          ...C
        },
        ref: L,
        ownerState: {
          ...A,
          state: W
        },
        ...Q,
        children: u.jsx(Ji, {
          ownerState: {
            ...A,
            state: W
          },
          className: F.wrapper,
          ref: b,
          children: u.jsx(Xi, {
            ownerState: {
              ...A,
              state: W
            },
            className: F.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  ao && (ao.muiSupportAuto = true);
  const Fr = y.createContext({});
  function Ki(e) {
    return be("MuiAccordion", e);
  }
  const gn = we("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), Zi = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: i } = e;
    return Se({
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
    }, Ki, t);
  }, Qi = U(ot, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${gn.region}`]: t.region
        },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters
      ];
    }
  })(pe(({ theme: e }) => {
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
      [`&.${gn.expanded}`]: {
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
      [`&.${gn.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), pe(({ theme: e }) => ({
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
          [`&.${gn.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), es = U("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), hn = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: i, defaultExpanded: s = false, disabled: l = false, disableGutters: a = false, expanded: c, onChange: d, square: f = false, slots: g = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: m, ...v } = o, [x, C] = Mr({
      controlled: c,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), _ = y.useCallback((Z) => {
      C(!x), d && d(Z, !x);
    }, [
      x,
      d,
      C
    ]), [j, ...$] = y.Children.toArray(r), A = y.useMemo(() => ({
      expanded: x,
      disabled: l,
      disableGutters: a,
      toggle: _
    }), [
      x,
      l,
      a,
      _
    ]), F = {
      ...o,
      square: f,
      disabled: l,
      disableGutters: a,
      expanded: x
    }, w = Zi(F), R = {
      transition: h,
      ...g
    }, b = {
      transition: m,
      ...p
    }, M = {
      slots: R,
      slotProps: b
    }, [D, P] = oe("root", {
      elementType: Qi,
      externalForwardedProps: {
        ...M,
        ...v
      },
      className: re(w.root, i),
      shouldForwardComponentProp: true,
      ownerState: F,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [T, N] = oe("heading", {
      elementType: es,
      externalForwardedProps: M,
      className: w.heading,
      ownerState: F
    }), [L, O] = oe("transition", {
      elementType: ao,
      externalForwardedProps: M,
      ownerState: F
    });
    return u.jsxs(D, {
      ...P,
      children: [
        u.jsx(T, {
          ...N,
          children: u.jsx(Fr.Provider, {
            value: A,
            children: j
          })
        }),
        u.jsx(L, {
          in: x,
          timeout: "auto",
          ...O,
          children: u.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: w.region,
            children: $
          })
        })
      ]
    });
  });
  function ts(e) {
    return be("MuiAccordionDetails", e);
  }
  we("MuiAccordionDetails", [
    "root"
  ]);
  const ns = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, ts, t);
  }, os = U("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), mn = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...i } = o, s = o, l = ns(s);
    return u.jsx(os, {
      className: re(l.root, r),
      ref: n,
      ownerState: s,
      ...i
    });
  });
  function rs(e) {
    return be("MuiAccordionSummary", e);
  }
  const Pt = we("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), is = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return Se({
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
    }, rs, t);
  }, ss = U(In, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => {
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
      [`&.${Pt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Pt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Pt.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Pt.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), ls = U("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(pe(({ theme: e }) => ({
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
          [`&.${Pt.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), as = U("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(pe(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${Pt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), yn = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: i, expandIcon: s, focusVisibleClassName: l, onClick: a, slots: c, slotProps: d, ...f } = o, { disabled: g = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(Fr), v = (b) => {
      m && m(b), a && a(b);
    }, x = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: p
    }, C = is(x), _ = {
      slots: c,
      slotProps: d
    }, [j, $] = oe("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: re(C.root, i),
      elementType: ss,
      externalForwardedProps: {
        ..._,
        ...f
      },
      ownerState: x,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: re(C.focusVisible, l)
      },
      getSlotProps: (b) => ({
        ...b,
        onClick: (M) => {
          var _a2;
          (_a2 = b.onClick) == null ? void 0 : _a2.call(b, M), v(M);
        }
      })
    }), [A, F] = oe("content", {
      className: C.content,
      elementType: ls,
      externalForwardedProps: _,
      ownerState: x
    }), [w, R] = oe("expandIconWrapper", {
      className: C.expandIconWrapper,
      elementType: as,
      externalForwardedProps: _,
      ownerState: x
    });
    return u.jsxs(j, {
      ...$,
      children: [
        u.jsx(A, {
          ...F,
          children: r
        }),
        s && u.jsx(w, {
          ...R,
          children: s
        })
      ]
    });
  });
  function cs(e) {
    return be("MuiAlert", e);
  }
  const Bo = we("MuiAlert", [
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
  ]), us = ue(u.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), ds = ue(u.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), ps = ue(u.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), fs = ue(u.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), gs = ue(u.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), hs = (e) => {
    const { variant: t, color: n, severity: o, classes: r } = e, i = {
      root: [
        "root",
        `color${B(n || o)}`,
        `${t}${B(n || o)}`,
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
    return Se(i, cs, r);
  }, ms = U(ot, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${B(n.color || n.severity)}`]
      ];
    }
  })(pe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? oo : ro, n = e.palette.mode === "light" ? ro : oo;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(bt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${Bo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(bt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${Bo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(bt([
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
  })), ys = U("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), vs = U("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), xs = U("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), Wo = {
    success: u.jsx(us, {
      fontSize: "inherit"
    }),
    warning: u.jsx(ds, {
      fontSize: "inherit"
    }),
    error: u.jsx(ps, {
      fontSize: "inherit"
    }),
    info: u.jsx(fs, {
      fontSize: "inherit"
    })
  }, bs = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: i, className: s, closeText: l = "Close", color: a, components: c = {}, componentsProps: d = {}, icon: f, iconMapping: g = Wo, onClose: p, role: h = "alert", severity: m = "success", slotProps: v = {}, slots: x = {}, variant: C = "standard", ..._ } = o, j = {
      ...o,
      color: a,
      severity: m,
      variant: C,
      colorSeverity: a || m
    }, $ = hs(j), A = {
      slots: {
        closeButton: c.CloseButton,
        closeIcon: c.CloseIcon,
        ...x
      },
      slotProps: {
        ...d,
        ...v
      }
    }, [F, w] = oe("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: re($.root, s),
      elementType: ms,
      externalForwardedProps: {
        ...A,
        ..._
      },
      ownerState: j,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [R, b] = oe("icon", {
      className: $.icon,
      elementType: ys,
      externalForwardedProps: A,
      ownerState: j
    }), [M, D] = oe("message", {
      className: $.message,
      elementType: vs,
      externalForwardedProps: A,
      ownerState: j
    }), [P, T] = oe("action", {
      className: $.action,
      elementType: xs,
      externalForwardedProps: A,
      ownerState: j
    }), [N, L] = oe("closeButton", {
      elementType: je,
      externalForwardedProps: A,
      ownerState: j
    }), [O, Z] = oe("closeIcon", {
      elementType: gs,
      externalForwardedProps: A,
      ownerState: j
    });
    return u.jsxs(F, {
      ...w,
      children: [
        f !== false ? u.jsx(R, {
          ...b,
          children: f || g[m] || Wo[m]
        }) : null,
        u.jsx(M, {
          ...D,
          children: i
        }),
        r != null ? u.jsx(P, {
          ...T,
          children: r
        }) : null,
        r == null && p ? u.jsx(P, {
          ...T,
          children: u.jsx(N, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...L,
            children: u.jsx(O, {
              fontSize: "small",
              ...Z
            })
          })
        }) : null
      ]
    });
  });
  var Be = "top", Je = "bottom", Xe = "right", We = "left", jo = "auto", cn = [
    Be,
    Je,
    Xe,
    We
  ], kt = "start", sn = "end", ws = "clippingParents", kr = "viewport", Lt = "popper", Cs = "reference", Go = cn.reduce(function(e, t) {
    return e.concat([
      t + "-" + kt,
      t + "-" + sn
    ]);
  }, []), zr = [].concat(cn, [
    jo
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + kt,
      t + "-" + sn
    ]);
  }, []), Ss = "beforeRead", _s = "read", Rs = "afterRead", js = "beforeMain", Ms = "main", $s = "afterMain", As = "beforeWrite", Ps = "write", Is = "afterWrite", Fs = [
    Ss,
    _s,
    Rs,
    js,
    Ms,
    $s,
    As,
    Ps,
    Is
  ];
  function st(e) {
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
  function Ct(e) {
    var t = Ge(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Ye(e) {
    var t = Ge(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Mo(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ge(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function ks(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
      !Ye(i) || !st(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
        var l = r[s];
        l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
      }));
    });
  }
  function zs(e) {
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
        var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = s.reduce(function(a, c) {
          return a[c] = "", a;
        }, {});
        !Ye(r) || !st(r) || (Object.assign(r.style, l), Object.keys(i).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Ds = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: ks,
    effect: zs,
    requires: [
      "computeStyles"
    ]
  };
  function it(e) {
    return e.split("-")[0];
  }
  var wt = Math.max, zn = Math.min, zt = Math.round;
  function co() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Dr() {
    return !/^((?!chrome|android).)*safari/i.test(co());
  }
  function Dt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, i = 1;
    t && Ye(e) && (r = e.offsetWidth > 0 && zt(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && zt(o.height) / e.offsetHeight || 1);
    var s = Ct(e) ? Ge(e) : window, l = s.visualViewport, a = !Dr() && n, c = (o.left + (a && l ? l.offsetLeft : 0)) / r, d = (o.top + (a && l ? l.offsetTop : 0)) / i, f = o.width / r, g = o.height / i;
    return {
      width: f,
      height: g,
      top: d,
      right: c + f,
      bottom: d + g,
      left: c,
      x: c,
      y: d
    };
  }
  function $o(e) {
    var t = Dt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Tr(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Mo(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function pt(e) {
    return Ge(e).getComputedStyle(e);
  }
  function Ts(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(st(e)) >= 0;
  }
  function yt(e) {
    return ((Ct(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Ln(e) {
    return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (Mo(e) ? e.host : null) || yt(e);
  }
  function Uo(e) {
    return !Ye(e) || pt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Os(e) {
    var t = /firefox/i.test(co()), n = /Trident/i.test(co());
    if (n && Ye(e)) {
      var o = pt(e);
      if (o.position === "fixed") return null;
    }
    var r = Ln(e);
    for (Mo(r) && (r = r.host); Ye(r) && [
      "html",
      "body"
    ].indexOf(st(r)) < 0; ) {
      var i = pt(r);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function un(e) {
    for (var t = Ge(e), n = Uo(e); n && Ts(n) && pt(n).position === "static"; ) n = Uo(n);
    return n && (st(n) === "html" || st(n) === "body" && pt(n).position === "static") ? t : n || Os(e) || t;
  }
  function Ao(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function Kt(e, t, n) {
    return wt(e, zn(t, n));
  }
  function Es(e, t, n) {
    var o = Kt(e, t, n);
    return o > n ? n : o;
  }
  function Or() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Er(e) {
    return Object.assign({}, Or(), e);
  }
  function Nr(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Ns = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Er(typeof t != "number" ? t : Nr(t, cn));
  };
  function Ls(e) {
    var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = it(n.placement), a = Ao(l), c = [
      We,
      Xe
    ].indexOf(l) >= 0, d = c ? "height" : "width";
    if (!(!i || !s)) {
      var f = Ns(r.padding, n), g = $o(i), p = a === "y" ? Be : We, h = a === "y" ? Je : Xe, m = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], v = s[a] - n.rects.reference[a], x = un(i), C = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, _ = m / 2 - v / 2, j = f[p], $ = C - g[d] - f[h], A = C / 2 - g[d] / 2 + _, F = Kt(j, A, $), w = a;
      n.modifiersData[o] = (t = {}, t[w] = F, t.centerOffset = F - A, t);
    }
  }
  function Vs(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Tr(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Hs = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Ls,
    effect: Vs,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Tt(e) {
    return e.split("-")[1];
  }
  var Bs = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Ws(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: zt(n * r) / r || 0,
      y: zt(o * r) / r || 0
    };
  }
  function qo(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = s.x, p = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, v = typeof d == "function" ? d({
      x: p,
      y: m
    }) : {
      x: p,
      y: m
    };
    p = v.x, m = v.y;
    var x = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), _ = We, j = Be, $ = window;
    if (c) {
      var A = un(n), F = "clientHeight", w = "clientWidth";
      if (A === Ge(n) && (A = yt(n), pt(A).position !== "static" && l === "absolute" && (F = "scrollHeight", w = "scrollWidth")), A = A, r === Be || (r === We || r === Xe) && i === sn) {
        j = Je;
        var R = f && A === $ && $.visualViewport ? $.visualViewport.height : A[F];
        m -= R - o.height, m *= a ? 1 : -1;
      }
      if (r === We || (r === Be || r === Je) && i === sn) {
        _ = Xe;
        var b = f && A === $ && $.visualViewport ? $.visualViewport.width : A[w];
        p -= b - o.width, p *= a ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: l
    }, c && Bs), D = d === true ? Ws({
      x: p,
      y: m
    }, Ge(n)) : {
      x: p,
      y: m
    };
    if (p = D.x, m = D.y, a) {
      var P;
      return Object.assign({}, M, (P = {}, P[j] = C ? "0" : "", P[_] = x ? "0" : "", P.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", P));
    }
    return Object.assign({}, M, (t = {}, t[j] = C ? m + "px" : "", t[_] = x ? p + "px" : "", t.transform = "", t));
  }
  function Gs(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, c = {
      placement: it(t.placement),
      variation: Tt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qo(Object.assign({}, c, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qo(Object.assign({}, c, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Us = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Gs,
    data: {}
  };
  var vn = {
    passive: true
  };
  function qs(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? true : r, s = o.resize, l = s === void 0 ? true : s, a = Ge(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && c.forEach(function(d) {
      d.addEventListener("scroll", n.update, vn);
    }), l && a.addEventListener("resize", n.update, vn), function() {
      i && c.forEach(function(d) {
        d.removeEventListener("scroll", n.update, vn);
      }), l && a.removeEventListener("resize", n.update, vn);
    };
  }
  const Ys = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: qs,
    data: {}
  };
  var Js = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function $n(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Js[t];
    });
  }
  var Xs = {
    start: "end",
    end: "start"
  };
  function Yo(e) {
    return e.replace(/start|end/g, function(t) {
      return Xs[t];
    });
  }
  function Po(e) {
    var t = Ge(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Io(e) {
    return Dt(yt(e)).left + Po(e).scrollLeft;
  }
  function Ks(e, t) {
    var n = Ge(e), o = yt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
    if (r) {
      i = r.width, s = r.height;
      var c = Dr();
      (c || !c && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l + Io(e),
      y: a
    };
  }
  function Zs(e) {
    var t, n = yt(e), o = Po(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = wt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = wt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Io(e), a = -o.scrollTop;
    return pt(r || n).direction === "rtl" && (l += wt(n.clientWidth, r ? r.clientWidth : 0) - i), {
      width: i,
      height: s,
      x: l,
      y: a
    };
  }
  function Fo(e) {
    var t = pt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function Lr(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Fo(e) ? e : Lr(Ln(e));
  }
  function Zt(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Lr(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ge(o), s = r ? [
      i
    ].concat(i.visualViewport || [], Fo(o) ? o : []) : o, l = t.concat(s);
    return r ? l : l.concat(Zt(Ln(s)));
  }
  function uo(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Qs(e, t) {
    var n = Dt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function Jo(e, t, n) {
    return t === kr ? uo(Ks(e, n)) : Ct(t) ? Qs(t, n) : uo(Zs(yt(e)));
  }
  function el(e) {
    var t = Zt(Ln(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(pt(e).position) >= 0, o = n && Ye(e) ? un(e) : e;
    return Ct(o) ? t.filter(function(r) {
      return Ct(r) && Tr(r, o) && st(r) !== "body";
    }) : [];
  }
  function tl(e, t, n, o) {
    var r = t === "clippingParents" ? el(e) : [].concat(t), i = [].concat(r, [
      n
    ]), s = i[0], l = i.reduce(function(a, c) {
      var d = Jo(e, c, o);
      return a.top = wt(d.top, a.top), a.right = zn(d.right, a.right), a.bottom = zn(d.bottom, a.bottom), a.left = wt(d.left, a.left), a;
    }, Jo(e, s, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function Vr(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? it(o) : null, i = o ? Tt(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case Be:
        a = {
          x: s,
          y: t.y - n.height
        };
        break;
      case Je:
        a = {
          x: s,
          y: t.y + t.height
        };
        break;
      case Xe:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case We:
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
    var c = r ? Ao(r) : null;
    if (c != null) {
      var d = c === "y" ? "height" : "width";
      switch (i) {
        case kt:
          a[c] = a[c] - (t[d] / 2 - n[d] / 2);
          break;
        case sn:
          a[c] = a[c] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return a;
  }
  function ln(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? ws : l, c = n.rootBoundary, d = c === void 0 ? kr : c, f = n.elementContext, g = f === void 0 ? Lt : f, p = n.altBoundary, h = p === void 0 ? false : p, m = n.padding, v = m === void 0 ? 0 : m, x = Er(typeof v != "number" ? v : Nr(v, cn)), C = g === Lt ? Cs : Lt, _ = e.rects.popper, j = e.elements[h ? C : g], $ = tl(Ct(j) ? j : j.contextElement || yt(e.elements.popper), a, d, s), A = Dt(e.elements.reference), F = Vr({
      reference: A,
      element: _,
      placement: r
    }), w = uo(Object.assign({}, _, F)), R = g === Lt ? w : A, b = {
      top: $.top - R.top + x.top,
      bottom: R.bottom - $.bottom + x.bottom,
      left: $.left - R.left + x.left,
      right: R.right - $.right + x.right
    }, M = e.modifiersData.offset;
    if (g === Lt && M) {
      var D = M[r];
      Object.keys(b).forEach(function(P) {
        var T = [
          Xe,
          Je
        ].indexOf(P) >= 0 ? 1 : -1, N = [
          Be,
          Je
        ].indexOf(P) >= 0 ? "y" : "x";
        b[P] += D[N] * T;
      });
    }
    return b;
  }
  function nl(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? zr : a, d = Tt(o), f = d ? l ? Go : Go.filter(function(h) {
      return Tt(h) === d;
    }) : cn, g = f.filter(function(h) {
      return c.indexOf(h) >= 0;
    });
    g.length === 0 && (g = f);
    var p = g.reduce(function(h, m) {
      return h[m] = ln(e, {
        placement: m,
        boundary: r,
        rootBoundary: i,
        padding: s
      })[it(m)], h;
    }, {});
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  function ol(e) {
    if (it(e) === jo) return [];
    var t = $n(e);
    return [
      Yo(e),
      t,
      Yo(t)
    ];
  }
  function rl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, c = n.padding, d = n.boundary, f = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, m = n.allowedAutoPlacements, v = t.options.placement, x = it(v), C = x === v, _ = a || (C || !h ? [
        $n(v)
      ] : ol(v)), j = [
        v
      ].concat(_).reduce(function(q, ve) {
        return q.concat(it(ve) === jo ? nl(t, {
          placement: ve,
          boundary: d,
          rootBoundary: f,
          padding: c,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ve);
      }, []), $ = t.rects.reference, A = t.rects.popper, F = /* @__PURE__ */ new Map(), w = true, R = j[0], b = 0; b < j.length; b++) {
        var M = j[b], D = it(M), P = Tt(M) === kt, T = [
          Be,
          Je
        ].indexOf(D) >= 0, N = T ? "width" : "height", L = ln(t, {
          placement: M,
          boundary: d,
          rootBoundary: f,
          altBoundary: g,
          padding: c
        }), O = T ? P ? Xe : We : P ? Je : Be;
        $[N] > A[N] && (O = $n(O));
        var Z = $n(O), G = [];
        if (i && G.push(L[D] <= 0), l && G.push(L[O] <= 0, L[Z] <= 0), G.every(function(q) {
          return q;
        })) {
          R = M, w = false;
          break;
        }
        F.set(M, G);
      }
      if (w) for (var ye = h ? 3 : 1, ie = function(ve) {
        var W = j.find(function(se) {
          var Q = F.get(se);
          if (Q) return Q.slice(0, ve).every(function(Me) {
            return Me;
          });
        });
        if (W) return R = W, "break";
      }, Ae = ye; Ae > 0; Ae--) {
        var ae = ie(Ae);
        if (ae === "break") break;
      }
      t.placement !== R && (t.modifiersData[o]._skip = true, t.placement = R, t.reset = true);
    }
  }
  const il = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: rl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Xo(e, t, n) {
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
  function Ko(e) {
    return [
      Be,
      Xe,
      Je,
      We
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function sl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = ln(t, {
      elementContext: "reference"
    }), l = ln(t, {
      altBoundary: true
    }), a = Xo(s, o), c = Xo(l, r, i), d = Ko(a), f = Ko(c);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: c,
      isReferenceHidden: d,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": f
    });
  }
  const ll = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: sl
  };
  function al(e, t, n) {
    var o = it(e), r = [
      We,
      Be
    ].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * r, [
      We,
      Xe
    ].indexOf(o) >= 0 ? {
      x: l,
      y: s
    } : {
      x: s,
      y: l
    };
  }
  function cl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [
      0,
      0
    ] : r, s = zr.reduce(function(d, f) {
      return d[f] = al(f, t.rects, i), d;
    }, {}), l = s[t.placement], a = l.x, c = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
  }
  const ul = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: cl
  };
  function dl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Vr({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const pl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: dl,
    data: {}
  };
  function fl(e) {
    return e === "x" ? "y" : "x";
  }
  function gl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, c = n.rootBoundary, d = n.altBoundary, f = n.padding, g = n.tether, p = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = ln(t, {
      boundary: a,
      rootBoundary: c,
      padding: f,
      altBoundary: d
    }), x = it(t.placement), C = Tt(t.placement), _ = !C, j = Ao(x), $ = fl(j), A = t.modifiersData.popperOffsets, F = t.rects.reference, w = t.rects.popper, R = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, b = typeof R == "number" ? {
      mainAxis: R,
      altAxis: R
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, R), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
      x: 0,
      y: 0
    };
    if (A) {
      if (i) {
        var P, T = j === "y" ? Be : We, N = j === "y" ? Je : Xe, L = j === "y" ? "height" : "width", O = A[j], Z = O + v[T], G = O - v[N], ye = p ? -w[L] / 2 : 0, ie = C === kt ? F[L] : w[L], Ae = C === kt ? -w[L] : -F[L], ae = t.elements.arrow, q = p && ae ? $o(ae) : {
          width: 0,
          height: 0
        }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Or(), W = ve[T], se = ve[N], Q = Kt(0, F[L], q[L]), Me = _ ? F[L] / 2 - ye - Q - W - b.mainAxis : ie - Q - W - b.mainAxis, Te = _ ? -F[L] / 2 + ye + Q + se + b.mainAxis : Ae + Q + se + b.mainAxis, Oe = t.elements.arrow && un(t.elements.arrow), de = Oe ? j === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, $e = (P = M == null ? void 0 : M[j]) != null ? P : 0, _e = O + Me - $e - de, vt = O + Te - $e, Ee = Kt(p ? zn(Z, _e) : Z, O, p ? wt(G, vt) : G);
        A[j] = Ee, D[j] = Ee - O;
      }
      if (l) {
        var nt, lt = j === "x" ? Be : We, I = j === "x" ? Je : Xe, z = A[$], K = $ === "y" ? "height" : "width", E = z + v[lt], fe = z - v[I], Re = [
          Be,
          We
        ].indexOf(x) !== -1, ge = (nt = M == null ? void 0 : M[$]) != null ? nt : 0, Pe = Re ? E : z - F[K] - w[K] - ge + b.altAxis, ce = Re ? z + F[K] + w[K] - ge - b.altAxis : fe, Ne = p && Re ? Es(Pe, z, ce) : Kt(p ? Pe : E, z, p ? ce : fe);
        A[$] = Ne, D[$] = Ne - z;
      }
      t.modifiersData[o] = D;
    }
  }
  const hl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: gl,
    requiresIfExists: [
      "offset"
    ]
  };
  function ml(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function yl(e) {
    return e === Ge(e) || !Ye(e) ? Po(e) : ml(e);
  }
  function vl(e) {
    var t = e.getBoundingClientRect(), n = zt(t.width) / e.offsetWidth || 1, o = zt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function xl(e, t, n) {
    n === void 0 && (n = false);
    var o = Ye(t), r = Ye(t) && vl(t), i = yt(t), s = Dt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((st(t) !== "body" || Fo(i)) && (l = yl(t)), Ye(t) ? (a = Dt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Io(i))), {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function bl(e) {
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
  function wl(e) {
    var t = bl(e);
    return Fs.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Cl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Sl(e) {
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
  var Zo = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Qo() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function _l(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? Zo : r;
    return function(l, a, c) {
      c === void 0 && (c = i);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Zo, i),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, f = [], g = false, p = {
        state: d,
        setOptions: function(x) {
          var C = typeof x == "function" ? x(d.options) : x;
          m(), d.options = Object.assign({}, i, d.options, C), d.scrollParents = {
            reference: Ct(l) ? Zt(l) : l.contextElement ? Zt(l.contextElement) : [],
            popper: Zt(a)
          };
          var _ = wl(Sl([].concat(o, d.options.modifiers)));
          return d.orderedModifiers = _.filter(function(j) {
            return j.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!g) {
            var x = d.elements, C = x.reference, _ = x.popper;
            if (Qo(C, _)) {
              d.rects = {
                reference: xl(C, un(_), d.options.strategy === "fixed"),
                popper: $o(_)
              }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
                return d.modifiersData[b.name] = Object.assign({}, b.data);
              });
              for (var j = 0; j < d.orderedModifiers.length; j++) {
                if (d.reset === true) {
                  d.reset = false, j = -1;
                  continue;
                }
                var $ = d.orderedModifiers[j], A = $.fn, F = $.options, w = F === void 0 ? {} : F, R = $.name;
                typeof A == "function" && (d = A({
                  state: d,
                  options: w,
                  name: R,
                  instance: p
                }) || d);
              }
            }
          }
        },
        update: Cl(function() {
          return new Promise(function(v) {
            p.forceUpdate(), v(d);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!Qo(l, a)) return p;
      p.setOptions(c).then(function(v) {
        !g && c.onFirstUpdate && c.onFirstUpdate(v);
      });
      function h() {
        d.orderedModifiers.forEach(function(v) {
          var x = v.name, C = v.options, _ = C === void 0 ? {} : C, j = v.effect;
          if (typeof j == "function") {
            var $ = j({
              state: d,
              name: x,
              instance: p,
              options: _
            }), A = function() {
            };
            f.push($ || A);
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
  var Rl = [
    Ys,
    pl,
    Us,
    Ds,
    ul,
    il,
    hl,
    Hs,
    ll
  ], jl = _l({
    defaultModifiers: Rl
  });
  function Ml(e) {
    return be("MuiPopper", e);
  }
  we("MuiPopper", [
    "root"
  ]);
  function $l(e, t) {
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
  function po(e) {
    return typeof e == "function" ? e() : e;
  }
  function Al(e) {
    return e.nodeType !== void 0;
  }
  const Pl = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Ml, t);
  }, Il = {}, Fl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: i, disablePortal: s, modifiers: l, open: a, placement: c, popperOptions: d, popperRef: f, slotProps: g = {}, slots: p = {}, TransitionProps: h, ownerState: m, ...v } = t, x = y.useRef(null), C = Ft(x, n), _ = y.useRef(null), j = Ft(_, f), $ = y.useRef(j);
    No(() => {
      $.current = j;
    }, [
      j
    ]), y.useImperativeHandle(f, () => _.current, []);
    const A = $l(c, i), [F, w] = y.useState(A), [R, b] = y.useState(po(o));
    y.useEffect(() => {
      _.current && _.current.forceUpdate();
    }), y.useEffect(() => {
      o && b(po(o));
    }, [
      o
    ]), No(() => {
      if (!R || !a) return;
      const N = (Z) => {
        w(Z.placement);
      };
      let L = [
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
          fn: ({ state: Z }) => {
            N(Z);
          }
        }
      ];
      l != null && (L = L.concat(l)), d && d.modifiers != null && (L = L.concat(d.modifiers));
      const O = jl(R, x.current, {
        placement: A,
        ...d,
        modifiers: L
      });
      return $.current(O), () => {
        O.destroy(), $.current(null);
      };
    }, [
      R,
      s,
      l,
      a,
      d,
      A
    ]);
    const M = {
      placement: F
    };
    h !== null && (M.TransitionProps = h);
    const D = Pl(t), P = p.root ?? "div", T = Si({
      elementType: P,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: C
      },
      ownerState: t,
      className: D.root
    });
    return u.jsx(P, {
      ...T,
      children: typeof r == "function" ? r(M) : r
    });
  }), kl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: c, open: d, placement: f = "bottom", popperOptions: g = Il, popperRef: p, style: h, transition: m = false, slotProps: v = {}, slots: x = {}, ...C } = t, [_, j] = y.useState(true), $ = () => {
      j(false);
    }, A = () => {
      j(true);
    };
    if (!a && !d && (!m || _)) return null;
    let F;
    if (i) F = i;
    else if (o) {
      const b = po(o);
      F = b && Al(b) ? Xt(b).body : Xt(null).body;
    }
    const w = !d && a && (!m || _) ? "none" : void 0, R = m ? {
      in: d,
      onEnter: $,
      onExited: A
    } : void 0;
    return u.jsx(Ci, {
      disablePortal: l,
      container: F,
      children: u.jsx(Fl, {
        anchorEl: o,
        direction: s,
        disablePortal: l,
        modifiers: c,
        ref: n,
        open: m ? !_ : d,
        placement: f,
        popperOptions: g,
        popperRef: p,
        slotProps: v,
        slots: x,
        ...C,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: w,
          ...h
        },
        TransitionProps: R,
        children: r
      })
    });
  }), zl = U(kl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Hr = y.forwardRef(function(t, n) {
    const o = Ro(), r = Ce({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: s, components: l, componentsProps: a, container: c, disablePortal: d, keepMounted: f, modifiers: g, open: p, placement: h, popperOptions: m, popperRef: v, transition: x, slots: C, slotProps: _, ...j } = r, $ = (C == null ? void 0 : C.root) ?? (l == null ? void 0 : l.Root), A = {
      anchorEl: i,
      container: c,
      disablePortal: d,
      keepMounted: f,
      modifiers: g,
      open: p,
      placement: h,
      popperOptions: m,
      popperRef: v,
      transition: x,
      ...j
    };
    return u.jsx(zl, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: $
      },
      slotProps: _ ?? a,
      ...A,
      ref: n
    });
  }), Dl = ue(u.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Tl(e) {
    return be("MuiChip", e);
  }
  const X = we("MuiChip", [
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
  ]), Ol = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: i, onDelete: s, clickable: l, variant: a } = e, c = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${B(o)}`,
        `color${B(r)}`,
        l && "clickable",
        l && `clickableColor${B(r)}`,
        s && "deletable",
        s && `deletableColor${B(r)}`,
        `${a}${B(r)}`
      ],
      label: [
        "label",
        `label${B(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${B(o)}`,
        `avatarColor${B(r)}`
      ],
      icon: [
        "icon",
        `icon${B(o)}`,
        `iconColor${B(i)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${B(o)}`,
        `deleteIconColor${B(r)}`,
        `deleteIcon${B(a)}Color${B(r)}`
      ]
    };
    return Se(c, Tl, t);
  }, El = U("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: i, onDelete: s, size: l, variant: a } = n;
      return [
        {
          [`& .${X.avatar}`]: t.avatar
        },
        {
          [`& .${X.avatar}`]: t[`avatar${B(l)}`]
        },
        {
          [`& .${X.avatar}`]: t[`avatarColor${B(o)}`]
        },
        {
          [`& .${X.icon}`]: t.icon
        },
        {
          [`& .${X.icon}`]: t[`icon${B(l)}`]
        },
        {
          [`& .${X.icon}`]: t[`iconColor${B(r)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIcon${B(l)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIconColor${B(o)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIcon${B(a)}Color${B(o)}`]
        },
        t.root,
        t[`size${B(l)}`],
        t[`color${B(o)}`],
        i && t.clickable,
        i && o !== "default" && t[`clickableColor${B(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${B(o)}`],
        t[a],
        t[`${a}${B(o)}`]
      ];
    }
  })(pe(({ theme: e }) => {
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
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : De(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : De(e.palette.text.primary, 0.4)
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
        ...Object.entries(e.palette).filter(bt([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${X.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : De(e.palette[n].contrastText, 0.7),
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(bt([
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(bt([
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
        ...Object.entries(e.palette).filter(bt()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : De(e.palette[n].main, 0.7)}`,
            [`&.${X.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : De(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${X.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : De(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Nl = U("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${B(o)}`]
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
  function er(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const An = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: i, clickable: s, color: l = "default", component: a, deleteIcon: c, disabled: d = false, icon: f, label: g, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: v, size: x = "medium", variant: C = "filled", tabIndex: _, skipFocusWhenDisabled: j = false, ...$ } = o, A = y.useRef(null), F = Ft(A, n), w = (G) => {
      G.stopPropagation(), h && h(G);
    }, R = (G) => {
      G.currentTarget === G.target && er(G) && G.preventDefault(), m && m(G);
    }, b = (G) => {
      G.currentTarget === G.target && h && er(G) && h(G), v && v(G);
    }, M = s !== false && p ? true : s, D = M || h ? In : a || "div", P = {
      ...o,
      component: D,
      disabled: d,
      size: x,
      color: l,
      iconColor: y.isValidElement(f) && f.props.color || l,
      onDelete: !!h,
      clickable: M,
      variant: C
    }, T = Ol(P), N = D === In ? {
      component: a || "div",
      focusVisibleClassName: T.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let L = null;
    h && (L = c && y.isValidElement(c) ? y.cloneElement(c, {
      className: re(c.props.className, T.deleteIcon),
      onClick: w
    }) : u.jsx(Dl, {
      className: re(T.deleteIcon),
      onClick: w
    }));
    let O = null;
    r && y.isValidElement(r) && (O = y.cloneElement(r, {
      className: re(T.avatar, r.props.className)
    }));
    let Z = null;
    return f && y.isValidElement(f) && (Z = y.cloneElement(f, {
      className: re(T.icon, f.props.className)
    })), u.jsxs(El, {
      as: D,
      className: re(T.root, i),
      disabled: M && d ? true : void 0,
      onClick: p,
      onKeyDown: R,
      onKeyUp: b,
      ref: F,
      tabIndex: j && d ? -1 : _,
      ownerState: P,
      ...N,
      ...$,
      children: [
        O || Z,
        u.jsx(Nl, {
          className: re(T.label),
          ownerState: P,
          children: g
        }),
        L
      ]
    });
  });
  function Ll(e) {
    return be("MuiCard", e);
  }
  we("MuiCard", [
    "root"
  ]);
  const Vl = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Ll, t);
  }, Hl = U(ot, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Bl = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: i = false, ...s } = o, l = {
      ...o,
      raised: i
    }, a = Vl(l);
    return u.jsx(Hl, {
      className: re(a.root, r),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...s
    });
  });
  function tr(e) {
    return e.substring(2).toLowerCase();
  }
  function Wl(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Gl(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: i = "onTouchEnd" } = e, s = y.useRef(false), l = y.useRef(null), a = y.useRef(false), c = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const d = Ft($r(t), l), f = nn((h) => {
      const m = c.current;
      c.current = false;
      const v = Xt(l.current);
      if (!a.current || !l.current || "clientX" in h && Wl(h, v)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !v.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !m) && r(h);
    }), g = (h) => (m) => {
      c.current = true;
      const v = t.props[h];
      v && v(m);
    }, p = {
      ref: d
    };
    return i !== false && (p[i] = g(i)), y.useEffect(() => {
      if (i !== false) {
        const h = tr(i), m = Xt(l.current), v = () => {
          s.current = true;
        };
        return m.addEventListener(h, f), m.addEventListener("touchmove", v), () => {
          m.removeEventListener(h, f), m.removeEventListener("touchmove", v);
        };
      }
    }, [
      f,
      i
    ]), o !== false && (p[o] = g(o)), y.useEffect(() => {
      if (o !== false) {
        const h = tr(o), m = Xt(l.current);
        return m.addEventListener(h, f), () => {
          m.removeEventListener(h, f);
        };
      }
    }, [
      f,
      o
    ]), y.cloneElement(t, p);
  }
  function Ul(e) {
    return be("MuiDialogActions", e);
  }
  we("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const ql = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Se({
      root: [
        "root",
        !n && "spacing"
      ]
    }, Ul, t);
  }, Yl = U("div", {
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
  }), Jl = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: i = false, ...s } = o, l = {
      ...o,
      disableSpacing: i
    }, a = ql(l);
    return u.jsx(Yl, {
      className: re(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  });
  function Xl(e) {
    return be("MuiInputAdornment", e);
  }
  const nr = we("MuiInputAdornment", [
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
  var or;
  const Kl = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${B(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, Zl = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: i, variant: s } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${B(r)}`,
        s,
        o && "hiddenLabel",
        i && `size${B(i)}`
      ]
    };
    return Se(l, Xl, t);
  }, Ql = U("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Kl
  })(pe(({ theme: e }) => ({
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
          [`&.${nr.positionStart}&:not(.${nr.hiddenLabel})`]: {
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
  }))), fo = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: i, component: s = "div", disablePointerEvents: l = false, disableTypography: a = false, position: c, variant: d, ...f } = o, g = _i() || {};
    let p = d;
    d && g.variant, g && !p && (p = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: c,
      variant: p
    }, m = Zl(h);
    return u.jsx(Ri.Provider, {
      value: null,
      children: u.jsx(Ql, {
        as: s,
        ownerState: h,
        className: re(m.root, i),
        ref: n,
        ...f,
        children: typeof r == "string" && !a ? u.jsx(k, {
          color: "textSecondary",
          children: r
        }) : u.jsxs(y.Fragment, {
          children: [
            c === "start" ? or || (or = u.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), ea = ue(u.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), ta = ue(u.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function na(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: i } = e, s = $t();
    y.useEffect(() => {
      if (!r) return;
      function x(C) {
        C.defaultPrevented || C.key === "Escape" && (o == null ? void 0 : o(C, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      r,
      o
    ]);
    const l = nn((x, C) => {
      o == null ? void 0 : o(x, C);
    }), a = nn((x) => {
      !o || x == null || s.start(x, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (r && a(t), s.clear), [
      r,
      t,
      a,
      s
    ]);
    const c = (x) => {
      o == null ? void 0 : o(x, "clickaway");
    }, d = s.clear, f = y.useCallback(() => {
      t != null && a(i ?? t * 0.5);
    }, [
      t,
      i,
      a
    ]), g = (x) => (C) => {
      const _ = x.onBlur;
      _ == null ? void 0 : _(C), f();
    }, p = (x) => (C) => {
      const _ = x.onFocus;
      _ == null ? void 0 : _(C), d();
    }, h = (x) => (C) => {
      const _ = x.onMouseEnter;
      _ == null ? void 0 : _(C), d();
    }, m = (x) => (C) => {
      const _ = x.onMouseLeave;
      _ == null ? void 0 : _(C), f();
    };
    return y.useEffect(() => {
      if (!n && r) return window.addEventListener("focus", f), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", d);
      };
    }, [
      n,
      r,
      f,
      d
    ]), {
      getRootProps: (x = {}) => {
        const C = {
          ...Lo(e),
          ...Lo(x)
        };
        return {
          role: "presentation",
          ...x,
          ...C,
          onBlur: g(C),
          onFocus: p(C),
          onMouseEnter: h(C),
          onMouseLeave: m(C)
        };
      },
      onClickAway: c
    };
  }
  function oa(e) {
    return be("MuiSnackbarContent", e);
  }
  we("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const ra = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, oa, t);
  }, ia = U(ot, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = ji(e.palette.background.default, t);
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
  })), sa = U("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), la = U("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), aa = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: i, message: s, role: l = "alert", ...a } = o, c = o, d = ra(c);
    return u.jsxs(ia, {
      role: l,
      square: true,
      elevation: 6,
      className: re(d.root, i),
      ownerState: c,
      ref: n,
      ...a,
      children: [
        u.jsx(sa, {
          className: d.message,
          ownerState: c,
          children: s
        }),
        r ? u.jsx(la, {
          className: d.action,
          ownerState: c,
          children: r
        }) : null
      ]
    });
  });
  function ca(e) {
    return be("MuiSnackbar", e);
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
  const ua = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${B(n.vertical)}${B(n.horizontal)}`
      ]
    };
    return Se(o, ca, t);
  }, da = U("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${B(n.anchorOrigin.vertical)}${B(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(pe(({ theme: e }) => ({
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
  }))), pa = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiSnackbar"
    }), r = Nn(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: c = null, children: d, className: f, ClickAwayListenerProps: g, ContentProps: p, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: x, onFocus: C, onMouseEnter: _, onMouseLeave: j, open: $, resumeHideDuration: A, slots: F = {}, slotProps: w = {}, TransitionComponent: R, transitionDuration: b = i, TransitionProps: { onEnter: M, onExited: D, ...P } = {}, ...T } = o, N = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: c,
      disableWindowBlurListener: h,
      TransitionComponent: R,
      transitionDuration: b
    }, L = ua(N), { getRootProps: O, onClickAway: Z } = na({
      ...N
    }), [G, ye] = y.useState(true), ie = ($e) => {
      ye(true), D && D($e);
    }, Ae = ($e, _e) => {
      ye(false), M && M($e, _e);
    }, ae = {
      slots: {
        transition: R,
        ...F
      },
      slotProps: {
        content: p,
        clickAwayListener: g,
        transition: P,
        ...w
      }
    }, [q, ve] = oe("root", {
      ref: n,
      className: [
        L.root,
        f
      ],
      elementType: da,
      getSlotProps: O,
      externalForwardedProps: {
        ...ae,
        ...T
      },
      ownerState: N
    }), [W, { ownerState: se, ...Q }] = oe("clickAwayListener", {
      elementType: Gl,
      externalForwardedProps: ae,
      getSlotProps: ($e) => ({
        onClickAway: (..._e) => {
          var _a2;
          (_a2 = $e.onClickAway) == null ? void 0 : _a2.call($e, ..._e), Z(..._e);
        }
      }),
      ownerState: N
    }), [Me, Te] = oe("content", {
      elementType: aa,
      shouldForwardComponentProp: true,
      externalForwardedProps: ae,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: N
    }), [Oe, de] = oe("transition", {
      elementType: Ar,
      externalForwardedProps: ae,
      getSlotProps: ($e) => ({
        onEnter: (..._e) => {
          var _a2;
          (_a2 = $e.onEnter) == null ? void 0 : _a2.call($e, ..._e), Ae(..._e);
        },
        onExited: (..._e) => {
          var _a2;
          (_a2 = $e.onExited) == null ? void 0 : _a2.call($e, ..._e), ie(..._e);
        }
      }),
      additionalProps: {
        appear: true,
        in: $,
        timeout: b,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: N
    });
    return !$ && G ? null : u.jsx(W, {
      ...Q,
      ...F.clickAwayListener && {
        ownerState: se
      },
      children: u.jsx(q, {
        ...ve,
        children: u.jsx(Oe, {
          ...de,
          children: d || u.jsx(Me, {
            ...Te
          })
        })
      })
    });
  });
  function fa(e) {
    return be("MuiTooltip", e);
  }
  const xe = we("MuiTooltip", [
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
  function ga(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const ha = (e) => {
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
        `tooltipPlacement${B(i.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return Se(s, fa, t);
  }, ma = U(Hr, {
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
  })(pe(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${xe.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${xe.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${xe.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${xe.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${xe.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${xe.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${xe.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${xe.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), ya = U("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${B(n.placement.split("-")[0])}`]
      ];
    }
  })(pe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : De(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${xe.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${xe.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${xe.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${xe.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${ga(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${xe.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${xe.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${xe.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${xe.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${xe.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${xe.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${xe.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${xe.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${xe.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${xe.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), va = U("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(pe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : De(e.palette.grey[700], 0.9),
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
  let xn = false;
  const rr = new Mi();
  let Vt = {
    x: 0,
    y: 0
  };
  function bn(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const He = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: i, classes: s, components: l = {}, componentsProps: a = {}, describeChild: c = false, disableFocusListener: d = false, disableHoverListener: f = false, disableInteractive: g = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: x = false, id: C, leaveDelay: _ = 0, leaveTouchDelay: j = 1500, onClose: $, onOpen: A, open: F, placement: w = "bottom", PopperComponent: R, PopperProps: b = {}, slotProps: M = {}, slots: D = {}, title: P, TransitionComponent: T, TransitionProps: N, ...L } = o, O = y.isValidElement(i) ? i : u.jsx("span", {
      children: i
    }), Z = Nn(), G = Ro(), [ye, ie] = y.useState(), [Ae, ae] = y.useState(null), q = y.useRef(false), ve = g || x, W = $t(), se = $t(), Q = $t(), Me = $t(), [Te, Oe] = Mr({
      controlled: F,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let de = Te;
    const $e = io(C), _e = y.useRef(), vt = nn(() => {
      _e.current !== void 0 && (document.body.style.WebkitUserSelect = _e.current, _e.current = void 0), Me.clear();
    });
    y.useEffect(() => vt, [
      vt
    ]);
    const Ee = (J) => {
      rr.clear(), xn = true, Oe(true), A && !de && A(J);
    }, nt = nn((J) => {
      rr.start(800 + _, () => {
        xn = false;
      }), Oe(false), $ && de && $(J), W.start(Z.transitions.duration.shortest, () => {
        q.current = false;
      });
    }), lt = (J) => {
      q.current && J.type !== "touchstart" || (ye && ye.removeAttribute("title"), se.clear(), Q.clear(), h || xn && m ? se.start(xn ? m : h, () => {
        Ee(J);
      }) : Ee(J));
    }, I = (J) => {
      se.clear(), Q.start(_, () => {
        nt(J);
      });
    }, [, z] = y.useState(false), K = (J) => {
      Vo(J.target) || (z(false), I(J));
    }, E = (J) => {
      ye || ie(J.currentTarget), Vo(J.target) && (z(true), lt(J));
    }, fe = (J) => {
      q.current = true;
      const ft = O.props;
      ft.onTouchStart && ft.onTouchStart(J);
    }, Re = (J) => {
      fe(J), Q.clear(), W.clear(), vt(), _e.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Me.start(v, () => {
        document.body.style.WebkitUserSelect = _e.current, lt(J);
      });
    }, ge = (J) => {
      O.props.onTouchEnd && O.props.onTouchEnd(J), vt(), Q.start(j, () => {
        nt(J);
      });
    };
    y.useEffect(() => {
      if (!de) return;
      function J(ft) {
        ft.key === "Escape" && nt(ft);
      }
      return document.addEventListener("keydown", J), () => {
        document.removeEventListener("keydown", J);
      };
    }, [
      nt,
      de
    ]);
    const Pe = Ft($r(O), ie, n);
    !P && P !== 0 && (de = false);
    const ce = y.useRef(), Ne = (J) => {
      const ft = O.props;
      ft.onMouseMove && ft.onMouseMove(J), Vt = {
        x: J.clientX,
        y: J.clientY
      }, ce.current && ce.current.update();
    }, Fe = {}, Ot = typeof P == "string";
    c ? (Fe.title = !de && Ot && !f ? P : null, Fe["aria-describedby"] = de ? $e : null) : (Fe["aria-label"] = Ot ? P : null, Fe["aria-labelledby"] = de && !Ot ? $e : null);
    const Ke = {
      ...Fe,
      ...L,
      ...O.props,
      className: re(L.className, O.props.className),
      onTouchStart: fe,
      ref: Pe,
      ...x ? {
        onMouseMove: Ne
      } : {}
    }, Et = {};
    p || (Ke.onTouchStart = Re, Ke.onTouchEnd = ge), f || (Ke.onMouseOver = bn(lt, Ke.onMouseOver), Ke.onMouseLeave = bn(I, Ke.onMouseLeave), ve || (Et.onMouseOver = lt, Et.onMouseLeave = I)), d || (Ke.onFocus = bn(E, Ke.onFocus), Ke.onBlur = bn(K, Ke.onBlur), ve || (Et.onFocus = E, Et.onBlur = K));
    const xt = {
      ...o,
      isRtl: G,
      arrow: r,
      disableInteractive: ve,
      placement: w,
      PopperComponentProp: R,
      touch: q.current
    }, Nt = typeof M.popper == "function" ? M.popper(xt) : M.popper, ui = y.useMemo(() => {
      var _a2, _b;
      let J = [
        {
          name: "arrow",
          enabled: !!Ae,
          options: {
            element: Ae,
            padding: 4
          }
        }
      ];
      return ((_a2 = b.popperOptions) == null ? void 0 : _a2.modifiers) && (J = J.concat(b.popperOptions.modifiers)), ((_b = Nt == null ? void 0 : Nt.popperOptions) == null ? void 0 : _b.modifiers) && (J = J.concat(Nt.popperOptions.modifiers)), {
        ...b.popperOptions,
        ...Nt == null ? void 0 : Nt.popperOptions,
        modifiers: J
      };
    }, [
      Ae,
      b.popperOptions,
      Nt == null ? void 0 : Nt.popperOptions
    ]), Wn = ha(xt), di = typeof M.transition == "function" ? M.transition(xt) : M.transition, pn = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? T,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...D
      },
      slotProps: {
        arrow: M.arrow ?? a.arrow,
        popper: {
          ...b,
          ...Nt ?? a.popper
        },
        tooltip: M.tooltip ?? a.tooltip,
        transition: {
          ...N,
          ...di ?? a.transition
        }
      }
    }, [pi, fi] = oe("popper", {
      elementType: ma,
      externalForwardedProps: pn,
      ownerState: xt,
      className: re(Wn.popper, b == null ? void 0 : b.className)
    }), [gi, hi] = oe("transition", {
      elementType: Ar,
      externalForwardedProps: pn,
      ownerState: xt
    }), [mi, yi] = oe("tooltip", {
      elementType: ya,
      className: Wn.tooltip,
      externalForwardedProps: pn,
      ownerState: xt
    }), [vi, xi] = oe("arrow", {
      elementType: va,
      className: Wn.arrow,
      externalForwardedProps: pn,
      ownerState: xt,
      ref: ae
    });
    return u.jsxs(y.Fragment, {
      children: [
        y.cloneElement(O, Ke),
        u.jsx(pi, {
          as: R ?? Hr,
          placement: w,
          anchorEl: x ? {
            getBoundingClientRect: () => ({
              top: Vt.y,
              left: Vt.x,
              right: Vt.x,
              bottom: Vt.y,
              width: 0,
              height: 0
            })
          } : ye,
          popperRef: ce,
          open: ye ? de : false,
          id: $e,
          transition: true,
          ...Et,
          ...fi,
          popperOptions: ui,
          children: ({ TransitionProps: J }) => u.jsx(gi, {
            timeout: Z.transitions.duration.shorter,
            ...J,
            ...hi,
            children: u.jsxs(mi, {
              ...yi,
              children: [
                P,
                r ? u.jsx(vi, {
                  ...xi
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Br = y.createContext();
  function xa(e) {
    return be("MuiTable", e);
  }
  we("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const ba = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return Se({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, xa, t);
  }, wa = U("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(pe(({ theme: e }) => ({
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
  }))), ir = "table", Ca = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTable"
    }), { className: r, component: i = ir, padding: s = "normal", size: l = "medium", stickyHeader: a = false, ...c } = o, d = {
      ...o,
      component: i,
      padding: s,
      size: l,
      stickyHeader: a
    }, f = ba(d), g = y.useMemo(() => ({
      padding: s,
      size: l,
      stickyHeader: a
    }), [
      s,
      l,
      a
    ]);
    return u.jsx(Br.Provider, {
      value: g,
      children: u.jsx(wa, {
        as: i,
        role: i === ir ? null : "table",
        ref: n,
        className: re(f.root, r),
        ownerState: d,
        ...c
      })
    });
  }), Vn = y.createContext();
  function Sa(e) {
    return be("MuiTableBody", e);
  }
  we("MuiTableBody", [
    "root"
  ]);
  const _a = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Sa, t);
  }, Ra = U("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), ja = {
    variant: "body"
  }, sr = "tbody", Ma = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: i = sr, ...s } = o, l = {
      ...o,
      component: i
    }, a = _a(l);
    return u.jsx(Vn.Provider, {
      value: ja,
      children: u.jsx(Ra, {
        className: re(a.root, r),
        as: i,
        ref: n,
        role: i === sr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function $a(e) {
    return be("MuiTableCell", e);
  }
  const Aa = we("MuiTableCell", [
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
  ]), Pa = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: i, stickyHeader: s } = e, l = {
      root: [
        "root",
        n,
        s && "stickyHeader",
        o !== "inherit" && `align${B(o)}`,
        r !== "normal" && `padding${B(r)}`,
        `size${B(i)}`
      ]
    };
    return Se(l, $a, t);
  }, Ia = U("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${B(n.size)}`],
        n.padding !== "normal" && t[`padding${B(n.padding)}`],
        n.align !== "inherit" && t[`align${B(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? ro(De(e.palette.divider, 1), 0.88) : oo(De(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Aa.paddingCheckbox}`]: {
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
  }))), Qe = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: i, component: s, padding: l, scope: a, size: c, sortDirection: d, variant: f, ...g } = o, p = y.useContext(Br), h = y.useContext(Vn), m = h && h.variant === "head";
    let v;
    s ? v = s : v = m ? "th" : "td";
    let x = a;
    v === "td" ? x = void 0 : !x && m && (x = "col");
    const C = f || h && h.variant, _ = {
      ...o,
      align: r,
      component: v,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: c || (p && p.size ? p.size : "medium"),
      sortDirection: d,
      stickyHeader: C === "head" && p && p.stickyHeader,
      variant: C
    }, j = Pa(_);
    let $ = null;
    return d && ($ = d === "asc" ? "ascending" : "descending"), u.jsx(Ia, {
      as: v,
      ref: n,
      className: re(j.root, i),
      "aria-sort": $,
      scope: x,
      ownerState: _,
      ...g
    });
  });
  function Fa(e) {
    return be("MuiTableContainer", e);
  }
  we("MuiTableContainer", [
    "root"
  ]);
  const ka = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Fa, t);
  }, za = U("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Da = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: i = "div", ...s } = o, l = {
      ...o,
      component: i
    }, a = ka(l);
    return u.jsx(za, {
      ref: n,
      as: i,
      className: re(a.root, r),
      ownerState: l,
      ...s
    });
  });
  function Ta(e) {
    return be("MuiTableHead", e);
  }
  we("MuiTableHead", [
    "root"
  ]);
  const Oa = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Ta, t);
  }, Ea = U("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Na = {
    variant: "head"
  }, lr = "thead", La = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: i = lr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Oa(l);
    return u.jsx(Vn.Provider, {
      value: Na,
      children: u.jsx(Ea, {
        as: i,
        className: re(a.root, r),
        ref: n,
        role: i === lr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Va(e) {
    return be("MuiToolbar", e);
  }
  we("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Ha = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return Se({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Va, t);
  }, Ba = U("div", {
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
  })(pe(({ theme: e }) => ({
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
  }))), Wr = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: i = "div", disableGutters: s = false, variant: l = "regular", ...a } = o, c = {
      ...o,
      component: i,
      disableGutters: s,
      variant: l
    }, d = Ha(c);
    return u.jsx(Ba, {
      as: i,
      className: re(d.root, r),
      ref: n,
      ownerState: c,
      ...a
    });
  }), Wa = ue(u.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Ga = ue(u.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Ua = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: i = false, getItemAriaLabel: s, nextIconButtonProps: l, onPageChange: a, page: c, rowsPerPage: d, showFirstButton: f, showLastButton: g, slots: p = {}, slotProps: h = {}, ...m } = t, v = Ro(), x = (ie) => {
      a(ie, 0);
    }, C = (ie) => {
      a(ie, c - 1);
    }, _ = (ie) => {
      a(ie, c + 1);
    }, j = (ie) => {
      a(ie, Math.max(0, Math.ceil(r / d) - 1));
    }, $ = p.firstButton ?? je, A = p.lastButton ?? je, F = p.nextButton ?? je, w = p.previousButton ?? je, R = p.firstButtonIcon ?? ea, b = p.lastButtonIcon ?? ta, M = p.nextButtonIcon ?? Ga, D = p.previousButtonIcon ?? Wa, P = v ? A : $, T = v ? F : w, N = v ? w : F, L = v ? $ : A, O = v ? h.lastButton : h.firstButton, Z = v ? h.nextButton : h.previousButton, G = v ? h.previousButton : h.nextButton, ye = v ? h.firstButton : h.lastButton;
    return u.jsxs("div", {
      ref: n,
      ...m,
      children: [
        f && u.jsx(P, {
          onClick: x,
          disabled: i || c === 0,
          "aria-label": s("first", c),
          title: s("first", c),
          ...O,
          children: v ? u.jsx(b, {
            ...h.lastButtonIcon
          }) : u.jsx(R, {
            ...h.firstButtonIcon
          })
        }),
        u.jsx(T, {
          onClick: C,
          disabled: i || c === 0,
          color: "inherit",
          "aria-label": s("previous", c),
          title: s("previous", c),
          ...Z ?? o,
          children: v ? u.jsx(M, {
            ...h.nextButtonIcon
          }) : u.jsx(D, {
            ...h.previousButtonIcon
          })
        }),
        u.jsx(N, {
          onClick: _,
          disabled: i || (r !== -1 ? c >= Math.ceil(r / d) - 1 : false),
          color: "inherit",
          "aria-label": s("next", c),
          title: s("next", c),
          ...G ?? l,
          children: v ? u.jsx(D, {
            ...h.previousButtonIcon
          }) : u.jsx(M, {
            ...h.nextButtonIcon
          })
        }),
        g && u.jsx(L, {
          onClick: j,
          disabled: i || c >= Math.ceil(r / d) - 1,
          "aria-label": s("last", c),
          title: s("last", c),
          ...ye,
          children: v ? u.jsx(R, {
            ...h.firstButtonIcon
          }) : u.jsx(b, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function qa(e) {
    return be("MuiTablePagination", e);
  }
  const Qt = we("MuiTablePagination", [
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
  var ar;
  const Ya = U(Qe, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), Ja = U(Wr, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${Qt.actions}`]: t.actions,
      ...t.toolbar
    })
  })(pe(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${Qt.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), Xa = U("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), Ka = U("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), Za = U(Fn, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${Qt.selectIcon}`]: t.selectIcon,
      [`& .${Qt.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${Qt.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), Qa = U(rt, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), ec = U("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function tc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function nc(e) {
    return `Go to ${e} page`;
  }
  const oc = (e) => {
    const { classes: t } = e;
    return Se({
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
    }, qa, t);
  }, rc = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = Ua, backIconButtonProps: i, colSpan: s, component: l = Qe, count: a, disabled: c = false, getItemAriaLabel: d = nc, labelDisplayedRows: f = tc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: x, rowsPerPageOptions: C = [
      10,
      25,
      50,
      100
    ], SelectProps: _ = {}, showFirstButton: j = false, showLastButton: $ = false, slotProps: A = {}, slots: F = {}, ...w } = o, R = o, b = oc(R), M = (A == null ? void 0 : A.select) ?? _, D = M.native ? "option" : Qa;
    let P;
    (l === Qe || l === "td") && (P = s || 1e3);
    const T = io(M.id), N = io(M.labelId), L = () => a === -1 ? (v + 1) * x : x === -1 ? a : Math.min(a, (v + 1) * x), O = {
      slots: F,
      slotProps: A
    }, [Z, G] = oe("root", {
      ref: n,
      className: b.root,
      elementType: Ya,
      externalForwardedProps: {
        ...O,
        component: l,
        ...w
      },
      ownerState: R,
      additionalProps: {
        colSpan: P
      }
    }), [ye, ie] = oe("toolbar", {
      className: b.toolbar,
      elementType: Ja,
      externalForwardedProps: O,
      ownerState: R
    }), [Ae, ae] = oe("spacer", {
      className: b.spacer,
      elementType: Xa,
      externalForwardedProps: O,
      ownerState: R
    }), [q, ve] = oe("selectLabel", {
      className: b.selectLabel,
      elementType: Ka,
      externalForwardedProps: O,
      ownerState: R,
      additionalProps: {
        id: N
      }
    }), [W, se] = oe("select", {
      className: b.select,
      elementType: Za,
      externalForwardedProps: O,
      ownerState: R
    }), [Q, Me] = oe("menuItem", {
      className: b.menuItem,
      elementType: D,
      externalForwardedProps: O,
      ownerState: R
    }), [Te, Oe] = oe("displayedRows", {
      className: b.displayedRows,
      elementType: ec,
      externalForwardedProps: O,
      ownerState: R
    });
    return u.jsx(Z, {
      ...G,
      children: u.jsxs(ye, {
        ...ie,
        children: [
          u.jsx(Ae, {
            ...ae
          }),
          C.length > 1 && u.jsx(q, {
            ...ve,
            children: g
          }),
          C.length > 1 && u.jsx(W, {
            variant: "standard",
            ...!M.variant && {
              input: ar || (ar = u.jsx($i, {}))
            },
            value: x,
            onChange: m,
            id: T,
            labelId: N,
            ...M,
            classes: {
              ...M.classes,
              root: re(b.input, b.selectRoot, (M.classes || {}).root),
              select: re(b.select, (M.classes || {}).select),
              icon: re(b.selectIcon, (M.classes || {}).icon)
            },
            disabled: c,
            ...se,
            children: C.map((de) => y.createElement(Q, {
              ...Me,
              key: de.label ? de.label : de,
              value: de.value ? de.value : de
            }, de.label ? de.label : de))
          }),
          u.jsx(Te, {
            ...Oe,
            children: f({
              from: a === 0 ? 0 : v * x + 1,
              to: L(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          u.jsx(r, {
            className: b.actions,
            backIconButtonProps: i,
            count: a,
            nextIconButtonProps: p,
            onPageChange: h,
            page: v,
            rowsPerPage: x,
            showFirstButton: j,
            showLastButton: $,
            slotProps: A.actions,
            slots: F.actions,
            getItemAriaLabel: d,
            disabled: c
          })
        ]
      })
    });
  });
  function ic(e) {
    return be("MuiTableRow", e);
  }
  const cr = we("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), sc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: i } = e;
    return Se({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        i && "footer"
      ]
    }, ic, t);
  }, lc = U("tr", {
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
  })(pe(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${cr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${cr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), ur = "tr", Rt = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: i = ur, hover: s = false, selected: l = false, ...a } = o, c = y.useContext(Vn), d = {
      ...o,
      component: i,
      hover: s,
      selected: l,
      head: c && c.variant === "head",
      footer: c && c.variant === "footer"
    }, f = sc(d);
    return u.jsx(lc, {
      as: i,
      ref: n,
      className: re(f.root, r),
      role: i === ur ? null : "row",
      ownerState: d,
      ...a
    });
  }), ac = ue(u.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function cc(e) {
    return be("MuiTableSortLabel", e);
  }
  const Un = we("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), uc = (e) => {
    const { classes: t, direction: n, active: o } = e, r = {
      root: [
        "root",
        o && "active",
        `direction${B(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${B(n)}`
      ]
    };
    return Se(r, cc, t);
  }, dc = U(In, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(pe(({ theme: e }) => ({
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
      [`& .${Un.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${Un.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${Un.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), pc = U("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${B(n.direction)}`]
      ];
    }
  })(pe(({ theme: e }) => ({
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
  }))), fc = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: i, className: s, direction: l = "asc", hideSortIcon: a = false, IconComponent: c = ac, slots: d = {}, slotProps: f = {}, ...g } = o, p = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: c
    }, h = uc(p), m = {
      slots: d,
      slotProps: f
    }, [v, x] = oe("root", {
      elementType: dc,
      externalForwardedProps: m,
      ownerState: p,
      className: re(h.root, s),
      ref: n
    }), [C, _] = oe("icon", {
      elementType: pc,
      externalForwardedProps: m,
      ownerState: p,
      className: h.icon
    });
    return u.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...x,
      ...g,
      children: [
        i,
        a && !r ? null : u.jsx(C, {
          as: c,
          ..._
        })
      ]
    });
  }), Gr = ue(u.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Ur = ue(u.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), qr = ue(u.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), go = ue(u.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), gc = ue(u.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), wn = ue(u.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), dr = ue(u.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), pr = ue(u.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), hc = ue(u.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), mc = ue(u.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), Yt = ue(u.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Yr = ue(u.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), yc = ue(u.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), vc = ue(u.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), xc = ue(u.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), en = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function Jr(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function bc({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: i, loading: s }) {
    const [l, a] = y.useState(""), [c, d] = y.useState(null), [f, g] = y.useState(null), p = y.useRef(0), h = !l, m = y.useMemo(() => {
      if (!l) return e;
      const b = l.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(b) || M.headerName.toLowerCase().includes(b));
    }, [
      e,
      l
    ]), v = y.useMemo(() => e.filter((b) => b.visible).length, [
      e
    ]), x = y.useCallback((b, M) => {
      b.stopPropagation(), r(e.map((D) => D.path === M ? {
        ...D,
        visible: !D.visible
      } : D));
    }, [
      e,
      r
    ]), C = y.useCallback((b) => {
      r(e.map((M) => ({
        ...M,
        visible: b
      })));
    }, [
      e,
      r
    ]), _ = y.useCallback((b, M) => {
      b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", M), d(M);
    }, []), j = y.useCallback((b, M) => {
      b.preventDefault(), p.current += 1, M !== c && g(M);
    }, [
      c
    ]), $ = y.useCallback((b) => {
      b.preventDefault(), p.current -= 1, p.current <= 0 && (p.current = 0, g(null));
    }, []), A = y.useCallback((b) => {
      b.preventDefault(), b.dataTransfer.dropEffect = "move";
    }, []), F = y.useCallback((b, M) => {
      b.preventDefault(), p.current = 0, g(null), d(null);
      const D = b.dataTransfer.getData("text/plain");
      if (!D || D === M) return;
      const P = [
        ...e
      ], T = P.findIndex((O) => O.path === D), N = P.findIndex((O) => O.path === M);
      if (T === -1 || N === -1) return;
      const [L] = P.splice(T, 1);
      P.splice(N, 0, L), r(P);
    }, [
      e,
      r
    ]), w = y.useCallback(() => {
      p.current = 0, d(null), g(null);
    }, []), R = y.useCallback(() => {
      r(e.map((b) => ({
        path: b.path,
        visible: true,
        headerName: b.path.split(".").pop() || b.path
      })));
    }, [
      e,
      r
    ]);
    return u.jsxs(Y, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        u.jsxs(Wr, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            u.jsx(et, {
              size: "small",
              placeholder: S.t("json_table_search_columns"),
              value: l,
              onChange: (b) => a(b.target.value),
              slotProps: {
                input: {
                  startAdornment: u.jsx(fo, {
                    position: "start",
                    children: u.jsx(Yr, {
                      fontSize: "small"
                    })
                  })
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            u.jsx(He, {
              title: S.t("json_table_refresh_columns"),
              children: u.jsx("span", {
                children: u.jsx(je, {
                  size: "small",
                  onClick: i,
                  disabled: s,
                  children: u.jsx(mc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            u.jsx(He, {
              title: S.t("json_table_show_all"),
              children: u.jsx(je, {
                size: "small",
                onClick: () => C(true),
                children: u.jsx(vc, {
                  fontSize: "small"
                })
              })
            }),
            u.jsx(He, {
              title: S.t("json_table_hide_all"),
              children: u.jsx(je, {
                size: "small",
                onClick: () => C(false),
                children: u.jsx(xc, {
                  fontSize: "small"
                })
              })
            }),
            u.jsx(He, {
              title: S.t("json_table_reset_all"),
              children: u.jsx(je, {
                size: "small",
                onClick: R,
                children: u.jsx(Yt, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        u.jsx(Y, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: m.length === 0 ? u.jsx(Y, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: u.jsx(k, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? S.t("json_table_no_columns") : S.t("json_table_no_search_results")
            })
          }) : m.map((b) => {
            const M = t.find((T) => T.path === b.path), D = n === b.path, P = (M == null ? void 0 : M.type) || "string";
            return u.jsx(Bl, {
              onClick: () => o(b.path),
              draggable: h,
              onDragStart: h ? (T) => _(T, b.path) : void 0,
              onDragEnter: h ? (T) => j(T, b.path) : void 0,
              onDragLeave: h ? $ : void 0,
              onDragOver: h ? A : void 0,
              onDrop: h ? (T) => F(T, b.path) : void 0,
              onDragEnd: h ? w : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: h ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: D ? "primary.main" : "divider",
                backgroundColor: D ? "action.selected" : "background.paper",
                opacity: c === b.path ? 0.4 : b.visible ? 1 : 0.55,
                borderTop: f === b.path ? "3px solid" : void 0,
                borderTopColor: f === b.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: D ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: u.jsxs(Y, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  h && u.jsx(gc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  u.jsx(on, {
                    checked: b.visible,
                    onClick: (T) => x(T, b.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  u.jsxs(Y, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      u.jsx(k, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: b.path,
                        children: b.headerName || b.path
                      }),
                      b.headerName && b.headerName !== b.path && u.jsx(k, {
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
                        title: b.path,
                        children: b.path
                      })
                    ]
                  }),
                  u.jsx(An, {
                    label: P,
                    size: "small",
                    sx: {
                      backgroundColor: en[P] || en.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    }
                  })
                ]
              })
            }, b.path);
          })
        }),
        e.length > 0 && u.jsx(Y, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: u.jsxs(k, {
            variant: "caption",
            color: "text.secondary",
            children: [
              v,
              " / ",
              e.length,
              " ",
              S.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function fr({ value: e, onChange: t, label: n }) {
    const o = Nn(), [r, i] = y.useState(null), s = y.useRef(null), [l, a] = y.useState(null), c = !!r;
    return y.useEffect(() => {
      if (!c || !l) return;
      const d = new ResizeObserver(() => {
        var _a2;
        (_a2 = s.current) == null ? void 0 : _a2.updatePosition();
      });
      return d.observe(l), () => {
        d.disconnect();
      };
    }, [
      c,
      l
    ]), u.jsxs(Y, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        u.jsxs(Y, {
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
          onClick: (d) => {
            i(d.currentTarget);
          },
          children: [
            u.jsx(k, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            u.jsx(Y, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && u.jsx(je, {
              size: "small",
              onClick: (d) => {
                d.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: u.jsx(go, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        u.jsx(Ai, {
          action: s,
          open: c,
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
          children: u.jsx(Y, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: u.jsx(Pi, {
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
  function Jt(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function Xr(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: i = false } = t;
    let s = e.toFixed(n);
    if (i) {
      const [l, a] = s.split("."), c = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${c}.${a}` : c;
    }
    return `${o}${s}${r}`;
  }
  const wc = [
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
  function ko(e, t) {
    if (e == null) return "";
    if (typeof e == "number") {
      const r = new Date(e >= 1e12 ? e : e * 1e3);
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
  function Kr(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let o;
      if (typeof e == "string") {
        const a = ko(e, n);
        if (!a) return Jt(e);
        o = new Date(a);
      } else if (typeof e == "number") o = new Date(e >= 1e12 ? e : e * 1e3);
      else if (e instanceof Date) o = e;
      else return Jt(e);
      if (isNaN(o.getTime())) return Jt(e);
      const r = t || "yyyy-MM-dd", i = (a, c = 2) => String(a).padStart(c, "0"), s = {
        yyyy: String(o.getFullYear()),
        MM: i(o.getMonth() + 1),
        dd: i(o.getDate()),
        HH: i(o.getHours()),
        mm: i(o.getMinutes()),
        ss: i(o.getSeconds()),
        SSS: i(o.getMilliseconds(), 3)
      };
      if (r.includes("xxx")) return o.toISOString();
      let l = r;
      for (const [a, c] of Object.entries(s).sort((d, f) => f[0].length - d[0].length)) l = l.replaceAll(a, c);
      return l;
    } catch {
      return Jt(e);
    }
  }
  function ho(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Jt(e);
  }
  function he(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Cc(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function dt(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        dt(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          dt(r, t - 1);
        }
      }
    }
    return e;
  }
  function Sc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+he(e)) && t !== null) throw NaN;
    if (Number.isNaN(+he(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function _c(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Rc(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function jc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function Mc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function $c(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let i = dt(r ? e[0] : n, o);
    for (let s = r; s < e.length; s++) i = dt(await t(i, e[s]), o);
    return i;
  }
  const Dn = {
    filter: _c,
    some: Rc,
    every: jc,
    map: Mc,
    reduce: $c
  }, ne = /* @__PURE__ */ Symbol.for("json_logic_sync"), Le = /* @__PURE__ */ Symbol.for("json_logic_compiled"), qe = /* @__PURE__ */ Symbol.for("json_logic_original"), gr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function St(e) {
    return typeof e == "function" ? e[ne] === true : Array.isArray(e) ? e.every(St) : !(e && e.asyncMethod && !e.method);
  }
  function Zr(e, t = true) {
    return e[ne] = t, e;
  }
  function an(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const qn = /* @__PURE__ */ new WeakMap();
  function hr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (qn.has(e) || qn.set(e, Ac(e)), qn.get(e));
  }
  function Ac(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Pc(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), St(t[r]) || (o.asyncDetected = true), n += (St(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][Le] < "u" ? n += t[r][Le] : n += me(t[r], o));
    return {
      [Le]: n
    };
  }
  function Ic(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Tn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Tn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Tn(r, t, n);
    }
    return true;
  }
  function mo(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => mo(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return St(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][ne] == "function" && t.methods[o][ne](e, {
        engine: t
      })) : mo(r, t) : false;
    }
    return true;
  }
  function me(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: i = [], engine: s } = t;
    function l(d, f = false) {
      return Ic(d, f) ? JSON.stringify(d) : (i.push(d), `values[${i.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let d = "";
      for (let f = 0; f < e.length; f++) f > 0 && (d += ","), d += me(e[f], t);
      return "[" + d + "]";
    }
    let a = false;
    function c(d) {
      return t.asyncDetected = t.asyncDetected || a, o && a ? `await ${d}` : d;
    }
    if (e && typeof e == "object") {
      const d = Object.keys(e), f = d[0];
      if (!f) return l(e);
      if (!s.methods[f] || d.length > 1) {
        if (s.isData(e, f)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: f
        };
      }
      if (!t.engine.disableInline && s.methods[f] && Tn(e, s, t)) return mo(e, s) ? l((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(s.run(e))})`) : (r.push(s.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let g = e[f];
      if ((!g || typeof g != "object") && !s.methods[f].lazy && (g = [
        g
      ]), s.methods[f] && s.methods[f].compile) {
        let m = s.methods[f].compile(g, t);
        if (m[Le] && (m = m[Le]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let p = s.methods[f].optimizeUnary ? "" : "coerceArray";
      !p && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : p && Array.isArray(g) && (p = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof s.methods[f] == "function") {
        a = !St(s.methods[f]);
        const m = h[hr(s.methods[f]) - 1] || h[2];
        return c(`engine.methods["${f}"](${p}(` + me(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[f] && s.methods[f].asyncMethod);
        const m = hr(a ? s.methods[f].asyncMethod : s.methods[f].method);
        let v = h[m - 1] || h[2];
        return a && typeof s.methods[f][ne] == "function" && s.methods[f][ne](g, {
          engine: s
        }) && (a = false, v = v.replace("engine", "engine.fallback")), s.methods[f] && !s.methods[f].lazy ? c(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(${p}(` + me(g, t) + ")" + v + ")") : (n.push(g), c(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function On(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Pc
    }, t));
    const n = me(e, t);
    return Fc(e, n, t);
  }
  function Fc(e, t, n) {
    const { engine: o, methods: r, notTraversed: i, processing: s = [], values: l } = n, a = [];
    s.forEach((d, f) => {
      t = t.replace(`__%%%${f}%%%__`, d);
    });
    const c = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(c)(l, r, i, Dn, o, a, an, he, Cc, Sc, dt), {
      [ne]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const kc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, It = kc(), Ht = /* @__PURE__ */ new Map();
  function Mt(e) {
    if (Ht.has(e)) return Ht.get(e);
    Ht.size > 2048 && Ht.clear();
    const t = zc(e);
    return Ht.set(e, t), t;
  }
  function zc(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const l = e[s];
      l === n ? e[s + 1] === t || e[s + 1] === o ? (i += e[s + 1], s++) : e[s + 1] === n ? (i += n, s++) : i += n : l === t ? (r.push(i), i = "") : i += l;
    }
    return r.length !== e.length && r.push(i), r;
  }
  const yo = {
    get: {
      [ne]: true,
      method: ([e, t, n], o, r, i) => {
        const s = n === void 0 ? null : n, l = Mt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return s;
        return i.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const i = Mt(o);
          return It ? `((${me(r, t)})${i.map((s) => `?.[${me(s, t)}]`).join("")} ?? ${me(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((s, l) => `(${s}||0)[${JSON.stringify(l)}]`, `(${me(r, t)}||0)`)}, ${me(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [qe]: true,
      [ne]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let i = 0;
        for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
        const s = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Mt(String(e));
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
          const r = Mt(n);
          if (!It) {
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
      [ne]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Mt(String(e[o]));
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
      [ne]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = yo.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = yo.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [Le]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Dc = {
    ...yo
  }, te = {
    type: "Invalid Arguments"
  };
  function Ie(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Ie(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Ie(r, t, n);
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
      return t.methods[o].lazy ? typeof t.methods[o][ne] == "function" ? t.methods[o][ne](r, n) : t.methods[o][ne] : typeof t.methods[o][ne] == "function" ? t.methods[o][ne](r, n) : t.methods[o][ne] && Ve(r, t, n);
    }
    return true;
  }
  function le(e, t, n, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const r = t.optimizedMap.get(e);
      return typeof r == "function" ? r(n, o) : r;
    }
    return t.run(e, n, {
      above: o
    });
  }
  const Bt = Pn("every", true), ee = {
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
      if (e.length === 0) throw te;
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
      if (e.length === 0) throw te;
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
      if (e.length < 2) throw te;
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
      if (!e.length || typeof e[0] != "number") throw te;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw te;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw te;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw te;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: Zr((e) => e, true),
      [ne]: () => true
    },
    if: {
      [qe]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        if (e.length === 1) return le(e[0], o, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const i = e.shift(), s = e.shift(), l = le(i, o, t, n);
          if (o.truthy(l)) return le(s, o, t, n);
        }
        return le(r, o, t, n);
      },
      [ne]: (e, t) => Ve(e, t.engine, t),
      deterministic: (e, t) => Ie(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
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
    "<": gt("<", (e, t) => e < t),
    "<=": gt("<=", (e, t) => e <= t),
    ">": gt(">", (e, t) => e > t),
    ">=": gt(">=", (e, t) => e >= t),
    "==": gt("==", (e, t) => e == t),
    "===": gt("===", (e, t) => e === t),
    "!=": gt("!=", (e, t) => e != t),
    "!==": gt("!==", (e, t) => e !== t),
    or: {
      [ne]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = le(e[i], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), o.truthy(r)) return r;
        return r;
      },
      deterministic: (e, t) => Ie(e, t.engine, t),
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
      [ne]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        let r;
        for (let i = 0; i < e.length; i++) if (r = le(e[i], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Ie(e, t.engine, t),
      compile: (e, t) => It ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = me(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${me(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [ne]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, i;
        for (let s = 0; s < e.length; s++) try {
          return i ? r = le(e[s], o, {
            type: i.type || i.error || i.message || i.constructor.name
          }, [
            null,
            t,
            n
          ]) : r = le(e[s], o, t, n), r;
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
      deterministic: (e, t) => Ie(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && Ie(e, t.engine, {
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
            [Le]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [Le]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [Le]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[Le].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[Le].includes("await") && (n[Le] = n[Le].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [ne]: (e, t) => Ve(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = le(e[i], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), !o.truthy(r)) return r;
        return r;
      },
      lazy: true,
      deterministic: (e, t) => Ie(e, t.engine, t),
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
        if (!e) throw te;
        const r = le(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw te;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw te;
        const r = await le(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw te;
      },
      deterministic: (e, t) => Ie(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => ee.val.method(e, t, n, o, gr) !== gr,
      deterministic: false
    },
    val: {
      [qe]: true,
      [ne]: true,
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
          for (let c = 0; c < l; c++) i = n[a++], c === n.length - 1 && Array.isArray(i) && (n = i, i = i[0], a = 1);
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
          return It ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Ve(e, t.engine, t) && Ie(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(It ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (It ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: Pn("map"),
    some: {
      ...Pn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        let [r, i] = e;
        r = le(r, o, t, n) || [];
        for (let s = 0; s < r.length; s++) if (o.truthy(le(i, o, r[s], [
          r,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [ne]: Bt[ne],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        const r = le(e[0], o, t, n) || [];
        if (Array.isArray(r) && r.length === 0) return false;
        const i = e[1];
        for (let s = 0; s < r.length; s++) if (!o.truthy(le(i, o, r[s], [
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
        return Bt.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${Bt.compile([
        {
          [Le]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: Bt.deterministic,
      lazy: Bt.lazy
    },
    none: {
      [ne]: (e, t) => Ve(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !ee.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await ee.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = ee.some.compile(e, t);
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
    filter: Pn("filter", true),
    reduce: {
      deterministic: (e, t) => Ie(e[0], t.engine, t) && Ie(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw te;
        const { async: n } = t;
        let [o, r, i] = e;
        o = me(o, t), typeof i < "u" && (i = me(i, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = On(r, s);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!St(r) || o.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${i}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        let [r, i, s] = e;
        s = dt(le(s, o, t, n), o.options.maxDepth), r = le(r, o, t, n) || [];
        let l = (a, c) => dt(o.run(i, {
          accumulator: a,
          current: c
        }, {
          above: [
            r,
            t,
            n
          ]
        }), o.options.maxDepth);
        if (o.optimizedMap.has(i) && typeof o.optimizedMap.get(i) == "function") {
          const a = o.optimizedMap.get(i);
          l = (c, d) => dt(a({
            accumulator: c,
            current: d
          }, [
            r,
            t,
            n
          ]), o.options.maxDepth);
        }
        return typeof s > "u" ? r.reduce(l) : r.reduce(l, s);
      },
      [ne]: (e, t) => Ve(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw te;
        let [r, i, s] = e;
        return s = dt(await o.run(s, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], Dn.reduce(r, (l, a) => o.run(i, {
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
      [qe]: true,
      [ne]: true,
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
      [ne]: (e, t) => Ve(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${On(e[o], {
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
        return Ie(n, t.engine, t) && Ie(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [ne]: (e, t) => Ve(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        if (e && typeof e == "object") return Object.values(e).every((n) => Ie(n, t.engine, t));
        throw te;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${me(e[r], t)}`), o), []).join(",")} })`;
        throw te;
      },
      asyncMethod: async (e, t, n, o) => await Dn.reduce(Object.keys(e), async (i, s) => {
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
  function gt(e, t) {
    const n = {
      [Le]: e
    }, o = e.length === 3;
    return {
      method: (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw te;
        if (r.length === 2) {
          const c = le(r[0], l, i, s), d = le(r[1], l, i, s);
          if (o || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
          if (Number.isNaN(+he(c))) throw NaN;
          if (Number.isNaN(+he(d)) && c !== null) throw NaN;
          return t(+c, +d);
        }
        let a = le(r[0], l, i, s);
        for (let c = 1; c < r.length; c++) {
          const d = le(r[c], l, i, s);
          if ((o || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
          if (Number.isNaN(+he(d)) && a !== null) throw NaN;
          if (c === 1 && Number.isNaN(+he(a))) throw NaN;
          if (!t(+a, +d)) return false;
          a = d;
        }
        return true;
      },
      asyncMethod: async (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw te;
        if (r.length === 2) {
          const c = await le(r[0], l, i, s), d = await le(r[1], l, i, s);
          if (o || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
          if (Number.isNaN(+he(c))) throw NaN;
          if (Number.isNaN(+he(d)) && c !== null) throw NaN;
          return t(+c, +d);
        }
        let a = await le(r[0], l, i, s);
        for (let c = 1; c < r.length; c++) {
          const d = await le(r[c], l, i, s);
          if ((o || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
          if (Number.isNaN(+he(d)) && a !== null) throw NaN;
          if (c === 1 && Number.isNaN(+he(a))) throw NaN;
          if (!t(+a, +d)) return false;
          a = d;
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
      [qe]: true,
      [ne]: (r, i) => Ve(r, i.engine, i),
      deterministic: (r, i) => Ie(r, i.engine, i),
      lazy: true
    };
  }
  function Pn(e, t = false) {
    return {
      deterministic: (n, o) => Ie(n[0], o.engine, o) && Ie(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [qe]: true,
      [ne]: (n, o) => Ve(n, o.engine, o),
      method: (n, o, r, i) => {
        if (!Array.isArray(n)) throw te;
        let [s, l] = n;
        return s = le(s, i, o, r) || [], s[e]((a, c) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const d = le(l, i, a, [
            {
              iterator: s,
              index: c
            },
            o,
            r
          ]);
          return t ? i.truthy(d) : d;
        });
      },
      asyncMethod: async (n, o, r, i) => {
        if (!Array.isArray(n)) throw te;
        let [s, l] = n;
        return s = await i.run(s, o, {
          above: r
        }) || [], Dn[e](s, async (a, c) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const d = await i.run(l, a, {
            above: [
              {
                iterator: s,
                index: c
              },
              o,
              r
            ]
          });
          return t ? i.truthy(d) : d;
        });
      },
      compile: (n, o) => {
        if (!Array.isArray(n)) throw te;
        const { async: r } = o, [i, s] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = On(s, l), c = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, d = t ? o.compile`engine.truthy` : o.compile``;
        return r && !St(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${d}(${a}(i, x, ${c})))`) : o.compile`(${i} || [])[${e}]((i, x, z) => ${d}(${a}(i, x, ${c})))`;
      },
      lazy: true
    };
  }
  ee.every = ee.all;
  ee["?:"] = ee.if;
  Object.keys(ee).forEach((e) => {
    typeof ee[e] == "function" && (ee[e][ne] = true), ee[e].deterministic = typeof ee[e].deterministic > "u" ? true : ee[e].deterministic;
  });
  ee.if.compile = function(e, t) {
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
  function dn(e, t) {
    if (Array.isArray(e)) return he(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + me(e, t);
    if (typeof e == "string") return "+" + he(+e);
    const n = me(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + he(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? he(NaN) : `(+precoerceNumber(${n}))`;
  }
  ee["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => dn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${me(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  ee["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw te;
      return `precoerceNumber(${e.map((n) => dn(n, t)).join(" % ")})`;
    }
    return `assertSize(${me(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  ee.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  ee["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw te;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => dn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${me(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  ee["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw te;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = dn(n, t);
        return o && r === "+0" && he(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${me(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  ee["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => dn(n, t)).join(" * ")})` : `(${me(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  ee["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  ee.not = ee["!"];
  ee["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  ee.none.deterministic = ee.some.deterministic;
  ee.throw.deterministic = (e, t) => t.insideTry && Ie(e, t.engine, t);
  ee["+"].optimizeUnary = ee["-"].optimizeUnary = ee["!"].optimizeUnary = ee["!!"].optimizeUnary = ee.cat.optimizeUnary = ee.throw.optimizeUnary = true;
  const Tc = {
    ...ee,
    ...Dc
  }, Oc = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Ec(e, t, n, o) {
    const r = t.methods[n], i = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, c) => i(l, a, c || o, t);
    }
    let s = e[n];
    if ((!s || typeof s != "object") && !r.optimizeUnary && (s = [
      s
    ]), Array.isArray(s) && s.length === 1 && r.optimizeUnary && !Array.isArray(s[0]) && (s = s[0]), Array.isArray(s)) {
      const l = s.map((a) => ze(a, t, o));
      if (l.every((a) => typeof a != "function")) return (a, c) => i(l, a, c || o, t);
      if (l.length === 1) {
        const a = l[0];
        return (c, d) => i([
          a(c, d)
        ], c, d || o, t);
      }
      if (l.length === 2) {
        const [a, c] = l;
        return typeof a == "function" && typeof c == "function" ? (d, f) => i([
          a(d, f),
          c(d, f)
        ], d, f || o, t) : typeof a == "function" ? (d, f) => i([
          a(d, f),
          c
        ], d, f || o, t) : (d, f) => i([
          a,
          c(d, f)
        ], d, f || o, t);
      }
      return (a, c) => {
        const d = l.map((f) => typeof f == "function" ? f(a, c) : f);
        return i(d, a, c || o, t);
      };
    } else {
      const l = ze(s, t, o);
      if (r.optimizeUnary) {
        const a = (c) => !c || typeof c[l] > "u" || typeof c[l] == "function" && !t.allowFunctions ? null : c[l];
        if (typeof l == "function") return (c, d) => i(l(c, d), c, d || o, t);
        if ((n === "var" || n === "val") && t.methods[n][qe]) {
          if (!l && n !== "val") return (c) => c === null || typeof c > "u" || typeof c == "function" && !t.allowFunctions ? null : c;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const c = Mt(String(l));
            let d;
            if (c.length === 2) {
              const [f, g] = c;
              return (p) => (typeof (d = p && p[f] && p[f][g]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
            if (c.length === 3) {
              const [f, g, p] = c;
              return (h) => (typeof (d = h && h[f] && h[f][g] && h[f][g][p]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
          }
        }
        return (c, d) => i(l, c, d || o, t);
      }
      return typeof l == "function" ? (a, c) => i(an(l(a, c)), a, c || o, t) : (a, c) => i(an(l), a, c || o, t);
    }
  }
  const mr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function Nc(e, t, n) {
    if (e.val && t.methods.val[qe] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[qe] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, i] = e.if || e["?:"], s = ze(o, t, n), l = ze(r, t, n), a = ze(i, t, n);
      return typeof s == "function" && typeof l == "function" && typeof a == "function" ? (c, d) => t.truthy(s(c, d)) ? l(c, d) : a(c, d) : typeof s == "function" && typeof l == "function" ? (c, d) => t.truthy(s(c, d)) ? l(c, d) : a : typeof s == "function" && typeof a == "function" ? (c, d) => t.truthy(s(c, d)) ? l : a(c, d) : typeof s == "function" ? (c, d) => t.truthy(s(c, d)) ? l : a : t.truthy(s) ? l : a;
    }
    if (e.filter && t.methods.filter[qe] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, i = ze(r, t, n);
      if (typeof i != "function") return t.truthy(i) ? ze(o, t, n) : [];
    }
    for (const o in mr) if (e[o] && Array.isArray(e[o]) && t.methods[o][qe]) {
      const r = mr[o], i = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+he(l))) throw NaN;
        if (Number.isNaN(+he(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [s, l] = e[o], a = ze(s, t, n), c = ze(l, t, n);
        return typeof a == "function" && typeof c == "function" ? (d, f) => i(a(d, f), c(d, f)) : typeof a == "function" ? (d, f) => i(a(d, f), c) : typeof c == "function" ? (d, f) => i(a, c(d, f)) : i(a, c);
      }
      if (e[o].length === 3) {
        const [s, l, a] = e[o], c = ze(s, t, n), d = ze(l, t, n), f = ze(a, t, n);
        let g;
        return typeof c == "function" && typeof d == "function" && typeof f == "function" ? (p, h) => i(c(p, h), g = d(p, h)) && i(g, f(p, h)) : typeof c == "function" && typeof d == "function" ? (p, h) => i(c(p, h), g = d(p, h)) && i(g, f) : typeof c == "function" && typeof f == "function" ? (p, h) => i(c(p, h), d) && i(d, f(p, h)) : typeof d == "function" && typeof f == "function" ? (p, h) => i(c, g = d(p, h)) && i(g, f(p, h)) : typeof c == "function" ? (p, h) => i(c(p, h), d) && i(d, f) : typeof d == "function" ? (p, h) => i(c, g = d(p, h)) && i(g, f) : typeof f == "function" ? (p, h) => i(c, d) && i(d, f(p, h)) : i(c, d) && i(d, f);
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
      const o = Nc(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), i = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, i)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Tn(e, t, {
        engine: t
      });
      if (i in t.methods) {
        const a = Ec(e, t, i, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: i
      };
    }
    return e;
  }
  class Lc {
    constructor(t = Tc, n = {
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
      if ((r === "var" || r === "val") && this.methods[r][qe]) {
        const l = !s || typeof s != "object" ? s : this.run(s, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !s || typeof s != "object" ? [
          s
        ] : an(this.run(s, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], c = a ? s : !s || typeof s != "object" ? [
          s
        ] : an(this.run(s, n, {
          above: o
        }));
        return l(c, n, o, this);
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
      }, Object.assign(n, Oc({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = Zr(n);
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
      const { above: o = [], top: r = true } = n, i = On(t, {
        engine: this,
        above: o
      });
      return r === false && i.deterministic ? i() : i;
    }
  }
  const Hn = new Lc();
  Hn.addMethod("contains", ([e, t]) => String(e ?? "").includes(String(t ?? "")), {
    deterministic: true
  });
  Hn.addMethod("startsWith", ([e, t]) => String(e ?? "").startsWith(String(t ?? "")), {
    deterministic: true
  });
  Hn.addMethod("endsWith", ([e, t]) => String(e ?? "").endsWith(String(t ?? "")), {
    deterministic: true
  });
  function Wt() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const vo = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Vc = {
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
  }, Hc = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], Bc = {
    var: "value"
  };
  function Wc(e, t, n = "string") {
    const o = Number(t), r = n === "number", i = n === "date", s = Bc;
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
  const Gc = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function Uc(e, t = "string") {
    const n = e.conditions.filter((r) => vo.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && Gc.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => Wc(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function ct(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function Yn(e) {
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
      if (Array.isArray(o) && o.length === 2 && ct(o[0])) return {
        operator: n,
        operand: String(o[1] ?? "")
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && ct(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: String(t[1] ?? "")
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && ct(t[0])) return {
        operator: "neq",
        operand: String(t[1] ?? "")
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && ct(t[0])) return {
        operator: "contains",
        operand: String(t[1] ?? "")
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && ct(t[0])) return {
        operator: "starts_with",
        operand: String(t[1] ?? "")
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && ct(t[0])) return {
        operator: "ends_with",
        operand: String(t[1] ?? "")
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const o = n["!!"];
          if (Array.isArray(o) && ct(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && ct(o[0])) return {
            operator: "not_contains",
            operand: String(o[1] ?? "")
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && ct(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function qc(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: Wt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => Yn(r)).filter((r) => r !== null).map((r) => ({
          id: Wt(),
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
        const o = n.map((r) => Yn(r)).filter((r) => r !== null).map((r) => ({
          id: Wt(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = Yn(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: Wt(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: Wt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const Yc = 200, Gt = /* @__PURE__ */ new Map();
  function Jc(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = Gt.get(n);
      return o || (o = Hn.build(e), Gt.size >= Yc && Gt.delete(Gt.keys().next().value), Gt.set(n, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const Xc = {
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
  function Kc({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => qc(e)), i = Vc[t] ?? Hc, s = y.useCallback((g) => {
      r(g), n(Uc(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, p) => {
      const h = o.conditions.map((m, v) => v === g ? {
        ...m,
        ...p
      } : m);
      s({
        ...o,
        conditions: h
      });
    }, [
      o,
      s
    ]), a = y.useCallback((g) => {
      const p = o.conditions.filter((h, m) => m !== g);
      s({
        ...o,
        conditions: p
      });
    }, [
      o,
      s
    ]), c = y.useCallback(() => {
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
    ]), d = y.useCallback((g, p) => {
      p !== null && s({
        ...o,
        mode: p
      });
    }, [
      o,
      s
    ]), f = o.conditions.length > 1;
    return u.jsxs(Ze, {
      spacing: 1,
      children: [
        f && u.jsxs(Y, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            u.jsxs(Pr, {
              value: o.mode,
              exclusive: true,
              onChange: d,
              size: "small",
              "aria-label": S.t("json_table_condition_mode_label"),
              children: [
                u.jsx(kn, {
                  value: "and",
                  "aria-label": S.t("json_table_condition_mode_all"),
                  children: S.t("json_table_condition_mode_all")
                }),
                u.jsx(kn, {
                  value: "or",
                  "aria-label": S.t("json_table_condition_mode_any"),
                  children: S.t("json_table_condition_mode_any")
                })
              ]
            }),
            u.jsx(k, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? S.t("json_table_condition_mode_hint_and") : S.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, p) => {
          const h = !vo.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return u.jsxs(Y, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              u.jsxs(so, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  u.jsx(lo, {
                    children: S.t("json_table_condition_operator")
                  }),
                  u.jsx(Fn, {
                    label: S.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const x = v.target.value, C = vo.has(x) ? "" : g.operand;
                      l(p, {
                        operator: x,
                        operand: C
                      });
                    },
                    children: i.map((v) => u.jsx(rt, {
                      value: v,
                      children: S.t(Xc[v])
                    }, v))
                  })
                ]
              }),
              h && u.jsx(et, {
                label: S.t("json_table_condition_value"),
                value: g.operand,
                onChange: (v) => l(p, {
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
              f && u.jsx(He, {
                title: S.t("json_table_condition_remove"),
                children: u.jsx(je, {
                  size: "small",
                  onClick: () => a(p),
                  "aria-label": S.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: u.jsx(Ir, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? p);
        }),
        u.jsx(rn, {
          startIcon: u.jsx(Gr, {}),
          onClick: c,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": S.t("json_table_condition_add"),
          children: f ? S.t("json_table_condition_add") : S.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function Zc({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b, _c2, _d2, _e, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r2, _s2, _t2, _u2, _v, _w, _x;
    const [o, r] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), i = y.useCallback((w) => {
      r((R) => ({
        ...R,
        [w]: !R[w]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", l = y.useCallback((w) => {
      var _a3, _b2;
      const R = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const b = (_b2 = e.format) == null ? void 0 : _b2.type;
        b === "number" ? (delete R.numberDecimals, delete R.numberPrefix, delete R.numberSuffix, delete R.numberThousandsSeparator) : b === "date" ? (delete R.dateFormat, delete R.dateInputFormat) : b === "boolean" && (delete R.booleanTrue, delete R.booleanFalse);
      }
      n({
        ...e,
        format: {
          ...R,
          ...w
        }
      });
    }, [
      e,
      n
    ]), a = y.useCallback((w, R) => {
      const b = [
        ...e.cellStyle || []
      ];
      b[w] = {
        ...b[w],
        ...R
      }, n({
        ...e,
        cellStyle: b
      });
    }, [
      e,
      n
    ]), c = y.useCallback((w) => {
      const R = [
        ...e.cellStyle || []
      ];
      R.splice(w, 1), n({
        ...e,
        cellStyle: R
      });
    }, [
      e,
      n
    ]), d = y.useCallback(() => {
      const w = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      n({
        ...e,
        cellStyle: [
          ...e.cellStyle || [],
          w
        ]
      });
    }, [
      e,
      n
    ]), f = y.useCallback((w) => {
      if (w === 0) return;
      const R = [
        ...e.cellStyle || []
      ];
      [R[w - 1], R[w]] = [
        R[w],
        R[w - 1]
      ], n({
        ...e,
        cellStyle: R
      });
    }, [
      e,
      n
    ]), g = y.useCallback((w) => {
      const R = e.cellStyle || [];
      if (w >= R.length - 1) return;
      const b = [
        ...R
      ];
      [b[w], b[w + 1]] = [
        b[w + 1],
        b[w]
      ], n({
        ...e,
        cellStyle: b
      });
    }, [
      e,
      n
    ]), p = y.useMemo(() => {
      if ((t == null ? void 0 : t.min) !== void 0 && typeof t.min == "number") {
        const w = typeof t.max == "number" ? t.max : 0;
        return t.min + (w - t.min) * 0.75;
      }
      return 1234.567;
    }, [
      t
    ]), h = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, R) => w + R, 0) : 0, [
      t
    ]), m = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), v = e.headerName !== m || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, x = y.useCallback(() => {
      n({
        ...e,
        headerName: m,
        width: void 0,
        align: void 0,
        visible: true
      });
    }, [
      e,
      n,
      m
    ]), C = e.format !== void 0, _ = y.useCallback(() => {
      const { format: w, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), j = (((_a2 = e.cellStyle) == null ? void 0 : _a2.length) ?? 0) > 0 || e.cellStyleMode !== void 0, $ = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: R, ...b } = e;
      n(b);
    }, [
      e,
      n
    ]), A = e.sortable !== void 0 || e.filterable !== void 0, F = y.useCallback(() => {
      const { sortable: w, filterable: R, ...b } = e;
      n(b);
    }, [
      e,
      n
    ]);
    return u.jsxs(Y, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        u.jsxs(Y, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            u.jsx(An, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: en[s] || en.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            u.jsx(k, {
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
        u.jsxs(Ze, {
          spacing: 1,
          children: [
            u.jsxs(hn, {
              expanded: o.basic,
              onChange: () => i("basic"),
              disableGutters: true,
              children: [
                u.jsx(yn, {
                  expandIcon: u.jsx(wn, {}),
                  children: u.jsxs(Y, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsx(k, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: S.t("json_table_section_basic")
                      }),
                      u.jsx(He, {
                        title: S.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(je, {
                            size: "small",
                            disabled: !v,
                            onClick: (w) => {
                              w.stopPropagation(), x();
                            },
                            "aria-label": S.t("json_table_section_reset"),
                            children: u.jsx(Yt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(mn, {
                  children: u.jsxs(Ze, {
                    spacing: 2,
                    children: [
                      u.jsx(et, {
                        label: S.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      u.jsx(et, {
                        label: S.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (w) => n({
                          ...e,
                          width: w.target.value ? parseInt(w.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: S.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      u.jsxs(so, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          u.jsx(lo, {
                            children: S.t("json_table_align")
                          }),
                          u.jsxs(Fn, {
                            label: S.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              u.jsx(rt, {
                                value: "left",
                                children: S.t("json_table_align_left")
                              }),
                              u.jsx(rt, {
                                value: "center",
                                children: S.t("json_table_align_center")
                              }),
                              u.jsx(rt, {
                                value: "right",
                                children: S.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      u.jsx(_t, {
                        control: u.jsx(fn, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: u.jsx(k, {
                          variant: "body2",
                          children: S.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            u.jsxs(hn, {
              expanded: o.formatting,
              onChange: () => i("formatting"),
              disableGutters: true,
              children: [
                u.jsx(yn, {
                  expandIcon: u.jsx(wn, {}),
                  children: u.jsxs(Y, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsx(k, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: S.t("json_table_section_formatting")
                      }),
                      u.jsx(He, {
                        title: S.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(je, {
                            size: "small",
                            disabled: !C,
                            onClick: (w) => {
                              w.stopPropagation(), _();
                            },
                            "aria-label": S.t("json_table_section_reset"),
                            children: u.jsx(Yt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(mn, {
                  children: u.jsxs(Ze, {
                    spacing: 2,
                    children: [
                      (s === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: S.t("json_table_number_format")
                          }),
                          u.jsxs(Y, {
                            children: [
                              u.jsxs(k, {
                                variant: "caption",
                                color: "text.secondary",
                                gutterBottom: true,
                                children: [
                                  S.t("json_table_number_decimals"),
                                  ":",
                                  " ",
                                  ((_c2 = e.format) == null ? void 0 : _c2.numberDecimals) ?? 2
                                ]
                              }),
                              u.jsx(Vi, {
                                value: ((_d2 = e.format) == null ? void 0 : _d2.numberDecimals) ?? 2,
                                onChange: (w, R) => l({
                                  type: "number",
                                  numberDecimals: R
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
                          u.jsx(et, {
                            label: S.t("json_table_number_prefix"),
                            value: ((_e = e.format) == null ? void 0 : _e.numberPrefix) || "",
                            onChange: (w) => l({
                              type: "number",
                              numberPrefix: w.target.value
                            }),
                            size: "small",
                            placeholder: "$, \u20AC, \xA3"
                          }),
                          u.jsx(et, {
                            label: S.t("json_table_number_suffix"),
                            value: ((_f = e.format) == null ? void 0 : _f.numberSuffix) || "",
                            onChange: (w) => l({
                              type: "number",
                              numberSuffix: w.target.value
                            }),
                            size: "small",
                            placeholder: "%, kg, \xB0C"
                          }),
                          u.jsx(_t, {
                            control: u.jsx(fn, {
                              checked: ((_g = e.format) == null ? void 0 : _g.numberThousandsSeparator) || false,
                              onChange: (w) => l({
                                type: "number",
                                numberThousandsSeparator: w.target.checked
                              }),
                              size: "small"
                            }),
                            label: u.jsx(k, {
                              variant: "body2",
                              children: S.t("json_table_number_thousands")
                            })
                          }),
                          u.jsxs(ot, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              u.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: S.t("json_table_preview")
                              }),
                              u.jsxs(k, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  p,
                                  " \u2192",
                                  " ",
                                  Xr(p, {
                                    decimals: (_h = e.format) == null ? void 0 : _h.numberDecimals,
                                    prefix: (_i2 = e.format) == null ? void 0 : _i2.numberPrefix,
                                    suffix: (_j = e.format) == null ? void 0 : _j.numberSuffix,
                                    thousands: (_k = e.format) == null ? void 0 : _k.numberThousandsSeparator
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "date" || ((_l2 = e.format) == null ? void 0 : _l2.type) === "date") && u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: S.t("json_table_date_format")
                          }),
                          (t == null ? void 0 : t.dateFormat) && u.jsx(et, {
                            label: S.t("json_table_date_input_format"),
                            value: t.dateFormat,
                            disabled: true,
                            size: "small",
                            helperText: S.t("json_table_date_detected_hint")
                          }),
                          u.jsxs(so, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              u.jsx(lo, {
                                children: S.t("json_table_date_output_format")
                              }),
                              u.jsx(Fn, {
                                label: S.t("json_table_date_output_format"),
                                value: ((_m = e.format) == null ? void 0 : _m.dateFormat) || "yyyy-MM-dd",
                                onChange: (w) => l({
                                  type: "date",
                                  dateFormat: w.target.value,
                                  dateInputFormat: t == null ? void 0 : t.dateFormat
                                }),
                                children: wc.map((w) => u.jsx(rt, {
                                  value: w.value,
                                  children: w.label
                                }, w.value))
                              })
                            ]
                          }),
                          u.jsxs(ot, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              u.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: S.t("json_table_preview")
                              }),
                              u.jsx(k, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: Kr(/* @__PURE__ */ new Date(), ((_n2 = e.format) == null ? void 0 : _n2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_o2 = e.format) == null ? void 0 : _o2.type) === "boolean") && u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: S.t("json_table_boolean_format")
                          }),
                          u.jsx(et, {
                            label: S.t("json_table_boolean_true"),
                            value: ((_p = e.format) == null ? void 0 : _p.booleanTrue) || "",
                            onChange: (w) => l({
                              type: "boolean",
                              booleanTrue: w.target.value
                            }),
                            size: "small",
                            placeholder: "Yes, On, \u2713, Active"
                          }),
                          u.jsx(et, {
                            label: S.t("json_table_boolean_false"),
                            value: ((_q = e.format) == null ? void 0 : _q.booleanFalse) || "",
                            onChange: (w) => l({
                              type: "boolean",
                              booleanFalse: w.target.value
                            }),
                            size: "small",
                            placeholder: "No, Off, \u2717, Inactive"
                          }),
                          u.jsxs(ot, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              u.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: S.t("json_table_preview")
                              }),
                              u.jsxs(Ze, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                  mt: 0.5
                                },
                                children: [
                                  u.jsxs(k, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      ho(true, (_r2 = e.format) == null ? void 0 : _r2.booleanTrue, (_s2 = e.format) == null ? void 0 : _s2.booleanFalse)
                                    ]
                                  }),
                                  u.jsxs(k, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      ho(false, (_t2 = e.format) == null ? void 0 : _t2.booleanTrue, (_u2 = e.format) == null ? void 0 : _u2.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && !e.format && u.jsx(k, {
                        variant: "body2",
                        color: "text.secondary",
                        children: S.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            u.jsxs(hn, {
              expanded: o.styling,
              onChange: () => i("styling"),
              disableGutters: true,
              children: [
                u.jsx(yn, {
                  expandIcon: u.jsx(wn, {}),
                  children: u.jsxs(Y, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsxs(Y, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          u.jsx(k, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: S.t("json_table_section_styling")
                          }),
                          (((_v = e.cellStyle) == null ? void 0 : _v.length) ?? 0) > 0 && u.jsx(An, {
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
                      u.jsx(He, {
                        title: S.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(je, {
                            size: "small",
                            disabled: !j,
                            onClick: (w) => {
                              w.stopPropagation(), $();
                            },
                            "aria-label": S.t("json_table_section_reset"),
                            children: u.jsx(Yt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(mn, {
                  children: u.jsxs(Ze, {
                    spacing: 1.5,
                    children: [
                      (((_w = e.cellStyle) == null ? void 0 : _w.length) ?? 0) >= 1 && u.jsxs(Y, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          u.jsxs(Pr, {
                            value: e.cellStyleMode ?? "first-match",
                            exclusive: true,
                            size: "small",
                            onChange: (w, R) => {
                              R && n({
                                ...e,
                                cellStyleMode: R
                              });
                            },
                            "aria-label": S.t("json_table_cell_style_mode_label"),
                            children: [
                              u.jsx(kn, {
                                value: "first-match",
                                "aria-label": S.t("json_table_cell_style_mode_first"),
                                children: S.t("json_table_cell_style_mode_first")
                              }),
                              u.jsx(kn, {
                                value: "all-match",
                                "aria-label": S.t("json_table_cell_style_mode_all"),
                                children: S.t("json_table_cell_style_mode_all")
                              })
                            ]
                          }),
                          u.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            children: (e.cellStyleMode ?? "first-match") === "first-match" ? S.t("json_table_cell_style_mode_hint_first") : S.t("json_table_cell_style_mode_hint_all")
                          })
                        ]
                      }),
                      (e.cellStyle || []).length === 0 && u.jsxs(Y, {
                        sx: {
                          textAlign: "center",
                          py: 2,
                          px: 1,
                          color: "text.secondary"
                        },
                        children: [
                          u.jsx(k, {
                            variant: "body2",
                            sx: {
                              fontWeight: 500,
                              mb: 0.5
                            },
                            children: S.t("json_table_no_style_rules")
                          }),
                          u.jsx(k, {
                            variant: "caption",
                            children: S.t("json_table_no_style_rules_hint")
                          })
                        ]
                      }),
                      (e.cellStyle || []).map((w, R) => {
                        const b = (e.cellStyle || []).length, M = w.backgroundColor ? At(w.backgroundColor) : void 0, D = w.textColor ? At(w.textColor) : void 0;
                        return u.jsx(ot, {
                          variant: "outlined",
                          sx: {
                            p: 1.5
                          },
                          children: u.jsxs(Ze, {
                            spacing: 1.5,
                            children: [
                              u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center"
                                },
                                children: [
                                  u.jsx(Y, {
                                    sx: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.5
                                    },
                                    children: u.jsxs(k, {
                                      variant: "caption",
                                      sx: {
                                        fontWeight: 600,
                                        color: "text.secondary"
                                      },
                                      children: [
                                        S.t("json_table_rule"),
                                        " ",
                                        R + 1
                                      ]
                                    })
                                  }),
                                  u.jsxs(Y, {
                                    sx: {
                                      display: "flex",
                                      gap: 0.5
                                    },
                                    children: [
                                      u.jsx(He, {
                                        title: S.t("json_table_rule_move_up"),
                                        children: u.jsx("span", {
                                          children: u.jsx(je, {
                                            size: "small",
                                            onClick: () => f(R),
                                            disabled: R === 0,
                                            "aria-label": S.t("json_table_rule_move_up"),
                                            children: u.jsx(qr, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      u.jsx(He, {
                                        title: S.t("json_table_rule_move_down"),
                                        children: u.jsx("span", {
                                          children: u.jsx(je, {
                                            size: "small",
                                            onClick: () => g(R),
                                            disabled: R >= b - 1,
                                            "aria-label": S.t("json_table_rule_move_down"),
                                            children: u.jsx(Ur, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      u.jsx(He, {
                                        title: S.t("json_table_delete_rule"),
                                        children: u.jsx(je, {
                                          size: "small",
                                          onClick: () => c(R),
                                          color: "error",
                                          "aria-label": S.t("json_table_delete_rule"),
                                          children: u.jsx(Ii, {
                                            fontSize: "small"
                                          })
                                        })
                                      })
                                    ]
                                  })
                                ]
                              }),
                              u.jsx(Kc, {
                                logic: w.logic,
                                columnType: s,
                                onChange: (P) => a(R, {
                                  logic: P
                                })
                              }, w.id ?? R),
                              u.jsxs(Ze, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "flex-start",
                                children: [
                                  u.jsx(fr, {
                                    label: S.t("json_table_bg_color"),
                                    value: w.backgroundColor || "",
                                    onChange: (P) => a(R, {
                                      backgroundColor: P
                                    })
                                  }),
                                  u.jsx(fr, {
                                    label: S.t("json_table_text_color"),
                                    value: w.textColor || "",
                                    onChange: (P) => a(R, {
                                      textColor: P
                                    })
                                  })
                                ]
                              }),
                              u.jsxs(Ze, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  u.jsx(_t, {
                                    control: u.jsx(on, {
                                      checked: w.fontWeight === "bold",
                                      onChange: (P) => a(R, {
                                        fontWeight: P.target.checked ? "bold" : "normal"
                                      }),
                                      icon: u.jsx(dr, {
                                        sx: {
                                          opacity: 0.3
                                        }
                                      }),
                                      checkedIcon: u.jsx(dr, {
                                        color: "primary"
                                      }),
                                      size: "small"
                                    }),
                                    label: u.jsx(k, {
                                      variant: "caption",
                                      children: S.t("json_table_bold")
                                    })
                                  }),
                                  u.jsx(_t, {
                                    control: u.jsx(on, {
                                      checked: w.fontStyle === "italic",
                                      onChange: (P) => a(R, {
                                        fontStyle: P.target.checked ? "italic" : "normal"
                                      }),
                                      icon: u.jsx(pr, {
                                        sx: {
                                          opacity: 0.3
                                        }
                                      }),
                                      checkedIcon: u.jsx(pr, {
                                        color: "primary"
                                      }),
                                      size: "small"
                                    }),
                                    label: u.jsx(k, {
                                      variant: "caption",
                                      children: S.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (w.backgroundColor || w.textColor || w.fontWeight === "bold" || w.fontStyle === "italic") && u.jsx(ot, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  ...w.backgroundColor ? M ? {
                                    background: M
                                  } : {
                                    backgroundColor: w.backgroundColor
                                  } : {},
                                  fontWeight: w.fontWeight || "normal",
                                  fontStyle: w.fontStyle || "normal"
                                },
                                children: u.jsx(k, {
                                  variant: "body2",
                                  sx: {
                                    ...w.textColor ? D ? {
                                      background: D,
                                      backgroundClip: "text",
                                      WebkitBackgroundClip: "text",
                                      color: "transparent"
                                    } : {
                                      color: w.textColor
                                    } : {
                                      color: "inherit"
                                    }
                                  },
                                  children: S.t("json_table_sample_value")
                                })
                              })
                            ]
                          })
                        }, w.id ?? R);
                      }),
                      (((_x = e.cellStyle) == null ? void 0 : _x.length) ?? 0) >= 2 && u.jsx(k, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          px: 0.5
                        },
                        children: (e.cellStyleMode ?? "first-match") === "first-match" ? S.t("json_table_rules_priority_hint") : S.t("json_table_rules_all_match_hint")
                      }),
                      u.jsx(rn, {
                        startIcon: u.jsx(Gr, {}),
                        onClick: d,
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                        children: S.t("json_table_add_style_rule")
                      })
                    ]
                  })
                })
              ]
            }),
            u.jsxs(hn, {
              expanded: o.advanced,
              onChange: () => i("advanced"),
              disableGutters: true,
              children: [
                u.jsx(yn, {
                  expandIcon: u.jsx(wn, {}),
                  children: u.jsxs(Y, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsx(k, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: S.t("json_table_section_advanced")
                      }),
                      u.jsx(He, {
                        title: S.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(je, {
                            size: "small",
                            disabled: !A,
                            onClick: (w) => {
                              w.stopPropagation(), F();
                            },
                            "aria-label": S.t("json_table_section_reset"),
                            children: u.jsx(Yt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(mn, {
                  children: u.jsxs(Ze, {
                    spacing: 2,
                    children: [
                      u.jsx(_t, {
                        control: u.jsx(fn, {
                          checked: e.sortable ?? true,
                          onChange: (w) => n({
                            ...e,
                            sortable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: u.jsx(k, {
                          variant: "body2",
                          children: S.t("json_table_sortable")
                        })
                      }),
                      u.jsx(_t, {
                        control: u.jsx(fn, {
                          checked: e.filterable ?? false,
                          onChange: (w) => n({
                            ...e,
                            filterable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: u.jsx(k, {
                          variant: "body2",
                          children: S.t("json_table_filterable")
                        })
                      }),
                      t && u.jsxs(ot, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          u.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: S.t("json_table_analysis_info")
                          }),
                          u.jsxs(Ze, {
                            spacing: 0.5,
                            children: [
                              u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: S.t("json_table_type_label")
                                  }),
                                  u.jsx(An, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: en[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: S.t("json_table_confidence")
                                  }),
                                  u.jsxs(k, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: S.t("json_table_nulls")
                                  }),
                                  u.jsxs(k, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      h > 0 && ` (${Math.round(t.nullCount / h * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: S.t("json_table_distinct")
                                  }),
                                  u.jsx(k, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: S.t("json_table_range")
                                  }),
                                  u.jsxs(k, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && u.jsxs(Y, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: S.t("json_table_date_input_format")
                                  }),
                                  u.jsx(k, {
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
  const Qc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, eu = /^\d{4}-\d{2}-\d{2}$/, tu = /^(\d{2})\.(\d{2})\.(\d{4})$/, nu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, ou = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, ru = /^(\d{2})\/(\d{2})\/(\d{4})$/, iu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, su = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Cn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function Jn(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Sn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const lu = [
    {
      regex: Qc,
      format: "ISO-8601"
    },
    {
      regex: eu,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Cn(n, t);
      }
    },
    {
      regex: ou,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return Cn(t, n) && Sn(o, r, i);
      }
    },
    {
      regex: nu,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Cn(t, n) && Sn(o, r);
      }
    },
    {
      regex: tu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Cn(t, n);
      }
    },
    {
      regex: su,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return Jn(t, n) && Sn(o, r, i);
      }
    },
    {
      regex: iu,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Jn(t, n) && Sn(o, r);
      }
    },
    {
      regex: ru,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Jn(t, n);
      }
    }
  ];
  function au(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of lu) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function cu(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function uu(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = cu(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = au(e);
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
  function du(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function pu(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function fu(e) {
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
  function yr(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function gu(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], i = o[2], s = o[3], l = o[4] || "00", a = o[5] || "00", c = o[6] || "00";
        return `${s}-${i}-${r}T${l}:${a}:${c}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], i = o[2], s = o[3], l = o[4] || "00", a = o[5] || "00", c = o[6] || "00";
        return `${s}-${r}-${i}T${l}:${a}:${c}`;
      }
    }
    return null;
  }
  function hu(e, t, n = 100, o = 0.8) {
    t.length;
    const r = /* @__PURE__ */ new Map();
    for (const i of e) r.set(i, fu(i));
    for (const i of t) for (const s of e) {
      const l = r.get(s), a = i[s], c = uu(a);
      if (yr(l.typeCounts, c.type), c.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, c.dateFormat && yr(l.dateFormatCounts, c.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const d = a.length;
        (l.strLenMin === void 0 || d < l.strLenMin) && (l.strLenMin = d), (l.strLenMax === void 0 || d > l.strLenMax) && (l.strLenMax = d);
      }
      if (c.dateFormat) {
        const d = gu(a, c.dateFormat);
        d !== null && ((l.dateMin === void 0 || d < l.dateMin) && (l.dateMin = d), (l.dateMax === void 0 || d > l.dateMax) && (l.dateMax = d));
      }
    }
    return e.map((i) => {
      const s = r.get(i);
      let l = du(s.typeCounts);
      l === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (l = "string");
      const a = l === "date" ? pu(s.dateFormatCounts) : void 0, c = l === "date" ? s.typeCounts.date || 0 : s.typeCounts[l] || 0, d = s.nonNullCount > 0 ? Math.round(c / s.nonNullCount * 100) / 100 : 0, f = {
        path: i,
        type: l,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: d
      };
      return a && (f.dateFormat = a), l === "number" && (s.numMin !== void 0 && (f.min = s.numMin), s.numMax !== void 0 && (f.max = s.numMax)), l === "date" && (s.dateMin !== void 0 && (f.min = s.dateMin), s.dateMax !== void 0 && (f.max = s.dateMax)), (l === "string" || l === "mixed") && (s.strLenMin !== void 0 && (f.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (f.stringLengthMax = s.strLenMax)), f;
    });
  }
  function En(e, t, n, o, r, i, s, l) {
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
        const c = `${t}[${a}]`;
        En(e[a], c, n, o, r, i + 1, s, l);
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
      for (const c of a) {
        const d = t ? `${t}.${c}` : c;
        En(e[c], d, n, o, r, i + 1, s, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function mu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const c of Object.keys(s)) En(s[c], c, l, n, a, 1, t, o);
      else En(s, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const i = yu([
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
  function yu(e) {
    return e.sort((t, n) => {
      const o = vr(t), r = vr(n), i = Math.min(o.length, r.length);
      for (let s = 0; s < i; s++) {
        const l = o[s], a = r[s], c = xr(l), d = xr(a);
        if (c !== null && d !== null) {
          if (c !== d) return c - d;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function vr(e) {
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
  function xr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const vu = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Qr(e, t) {
    const n = performance.now(), o = {
      ...vu,
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
    const r = mu(e, o.maxDepth), i = hu(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), s = r.paths.length * r.rows.length, l = i.reduce((d, f) => d + f.nullCount, 0), a = s > 0 ? Math.round(l / s * 1e3) / 10 : 0, c = Math.round((performance.now() - n) * 100) / 100;
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
        analysisTimeMs: c
      }
    };
  }
  function xu(e, t) {
    return y.useMemo(() => Qr(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function bu({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: i, socket: s }) {
    const [l, a] = y.useState(n), [c, d] = y.useState(null), [f, g] = y.useState([]), [p, h] = y.useState(false), [m, v] = y.useState(false), x = y.useRef(false), C = y.useRef(() => Promise.resolve()), _ = y.useRef(n), j = y.useMemo(() => JSON.stringify(n), [
      n
    ]), $ = y.useMemo(() => JSON.stringify(l) !== j, [
      l,
      j
    ]);
    y.useEffect(() => {
      e && (a(n), _.current = n, d(n.length > 0 ? n[0].path : null), x.current = false);
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !x.current && (x.current = true, C.current());
    }, [
      e
    ]);
    const A = y.useCallback(async () => {
      h(true);
      try {
        const P = i.oid;
        if (!P) return;
        const T = await s.getState(P);
        if ((T == null ? void 0 : T.val) === null || (T == null ? void 0 : T.val) === void 0) return;
        let N;
        const L = T.val;
        if (typeof L == "string") try {
          const q = JSON.parse(L);
          N = Array.isArray(q) ? q : [
            q
          ];
        } catch {
          return;
        }
        else if (Array.isArray(L)) N = L;
        else if (typeof L == "object" && L !== null) N = [
          L
        ];
        else return;
        const O = i.tableMaxDepth || 10, Z = Qr(N, {
          maxDepth: O
        });
        g(Z.columns);
        const G = new Map(_.current.map((q) => [
          q.path,
          q
        ])), ye = new Set(Z.columns.map((q) => q.path)), ie = _.current.filter((q) => ye.has(q.path)), Ae = Z.columns.filter((q) => !G.has(q.path)).map((q) => ({
          path: q.path,
          visible: true,
          headerName: q.path.split(".").pop() || q.path
        })), ae = [
          ...ie,
          ...Ae
        ];
        a(ae), _.current = ae, d((q) => q === null && ae.length > 0 ? ae[0].path : q);
      } catch {
      } finally {
        h(false);
      }
    }, [
      i,
      s
    ]);
    y.useEffect(() => {
      C.current = A;
    }, [
      A
    ]), y.useEffect(() => {
      _.current = l;
    }, [
      l
    ]);
    const F = y.useCallback((P) => {
      a((T) => T.map((N) => N.path === P.path ? P : N));
    }, []), w = y.useCallback((P) => {
      a(P);
    }, []), R = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), b = y.useCallback((P, T) => {
      if (T === "backdropClick" && $) {
        v(true);
        return;
      }
      t();
    }, [
      $,
      t
    ]), M = y.useMemo(() => c ? l.find((P) => P.path === c) : null, [
      c,
      l
    ]), D = y.useMemo(() => c ? f.find((P) => P.path === c) : void 0, [
      c,
      f
    ]);
    return u.jsxs(Fi, {
      theme: r,
      children: [
        u.jsxs(Hi, {
          open: e,
          onClose: b,
          maxWidth: "lg",
          fullWidth: true,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            u.jsx(Bi, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: u.jsxs(Y, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  u.jsx(k, {
                    variant: "h6",
                    children: S.t("json_table_column_editor_title")
                  }),
                  u.jsx(je, {
                    onClick: () => b(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: u.jsx(Ir, {})
                  })
                ]
              })
            }),
            u.jsxs(Wi, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                overflow: "hidden"
              },
              children: [
                u.jsx(Y, {
                  sx: {
                    width: "40%",
                    minWidth: 280,
                    borderRight: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: u.jsx(bc, {
                    columns: l,
                    discoveredColumns: f,
                    selectedPath: c,
                    onSelect: d,
                    onChange: w,
                    onRefresh: A,
                    loading: p
                  })
                }),
                u.jsx(Y, {
                  sx: {
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: M ? u.jsx(Zc, {
                    column: M,
                    discoveredColumn: D,
                    onChange: F
                  }) : u.jsx(Y, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%"
                    },
                    children: u.jsx(k, {
                      variant: "body2",
                      color: "text.secondary",
                      children: l.length > 0 ? S.t("json_table_select_column") : S.t("json_table_no_columns")
                    })
                  })
                })
              ]
            }),
            u.jsxs(Jl, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                u.jsx(rn, {
                  onClick: () => b(),
                  children: S.t("cancel")
                }),
                u.jsx(rn, {
                  variant: "contained",
                  onClick: R,
                  disabled: !$,
                  children: S.t("save")
                })
              ]
            })
          ]
        }),
        u.jsx(pa, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: u.jsx(bs, {
            severity: "warning",
            onClose: () => v(false),
            children: S.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function wu(e, t, n, o) {
    const r = e.name || "columnConfig", i = o.context.theme, [s, l] = y.useState(false), a = y.useMemo(() => Jr(t[r]), [
      t,
      r
    ]), c = a.filter((h) => h.visible).length, d = a.length, f = a.some((h) => h.format), g = a.some((h) => h.cellStyle && h.cellStyle.length > 0), p = y.useCallback((h) => {
      n({
        [r]: JSON.stringify(h)
      });
    }, [
      r,
      n
    ]);
    return u.jsxs(Y, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        u.jsx(rn, {
          variant: "outlined",
          startIcon: u.jsx(yc, {}),
          onClick: () => l(true),
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          children: S.t("json_table_configure_columns")
        }),
        d > 0 && u.jsxs(k, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: "block"
          },
          children: [
            c,
            " / ",
            d,
            " ",
            S.t("json_table_columns_visible"),
            f && ` \xB7 ${S.t("json_table_has_formatting")}`,
            g && ` \xB7 ${S.t("json_table_has_styling")}`
          ]
        }),
        u.jsx(bu, {
          open: s,
          onClose: () => l(false),
          columns: a,
          onSave: p,
          theme: i,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const Cu = () => [
    {
      label: "",
      type: "custom",
      component: () => u.jsx(at, {
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
      label: "",
      type: "custom",
      component: () => u.jsx(at, {
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
      label: "",
      type: "custom",
      component: () => u.jsx(at, {
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
      component: () => u.jsx(at, {
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
      component: () => u.jsx(at, {
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
      name: "tableShowRowBorders",
      type: "checkbox",
      label: "json_table_show_row_borders",
      default: true
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(at, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => u.jsx(Gn, {
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
      component: (e, t, n, o) => u.jsx(Gn, {
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
      component: () => u.jsx(at, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => u.jsx(Gn, {
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
      component: () => u.jsx(at, {
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
      component: () => u.jsx(at, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: wu
    }
  ];
  function ht(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ue(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: ht(n, o[e])
      }));
    };
  }
  function Bn(e) {
    return e instanceof Function;
  }
  function Su(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function _u(e, t) {
    const n = [], o = (r) => {
      r.forEach((i) => {
        n.push(i);
        const s = t(i);
        s != null && s.length && o(s);
      });
    };
    return o(e), n;
  }
  function V(e, t, n) {
    let o = [], r;
    return (i) => {
      let s;
      n.key && n.debug && (s = Date.now());
      const l = e(i);
      if (!(l.length !== o.length || l.some((d, f) => o[f] !== d))) return r;
      o = l;
      let c;
      if (n.key && n.debug && (c = Date.now()), r = t(...l), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
        const d = Math.round((Date.now() - s) * 100) / 100, f = Math.round((Date.now() - c) * 100) / 100, g = f / 16, p = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${p(f, 5)} /${p(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
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
  function Ru(e, t, n, o) {
    const r = () => {
      var s;
      return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
    }, i = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(o),
      renderValue: r,
      getContext: V(() => [
        e,
        n,
        t,
        i
      ], (s, l, a, c) => ({
        table: s,
        column: l,
        row: a,
        cell: c,
        getValue: c.getValue,
        renderValue: c.renderValue
      }), H(e.options, "debugCells"))
    };
    return e._features.forEach((s) => {
      s.createCell == null || s.createCell(i, n, t, e);
    }, {}), i;
  }
  function ju(e, t, n, o) {
    var r, i;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let c = (r = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? r : typeof l.header == "string" ? l.header : void 0, d;
    if (l.accessorFn ? d = l.accessorFn : a && (a.includes(".") ? d = (g) => {
      let p = g;
      for (const m of a.split(".")) {
        var h;
        p = (h = p) == null ? void 0 : h[m];
      }
      return p;
    } : d = (g) => g[l.accessorKey]), !c) throw new Error();
    let f = {
      id: `${String(c)}`,
      accessorFn: d,
      parent: o,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: V(() => [
        true
      ], () => {
        var g;
        return [
          f,
          ...(g = f.columns) == null ? void 0 : g.flatMap((p) => p.getFlatColumns())
        ];
      }, H(e.options, "debugColumns")),
      getLeafColumns: V(() => [
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
      }, H(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(f, e);
    return f;
  }
  const ke = "debugHeaders";
  function br(e, t, n) {
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
  const Mu = {
    createTable: (e) => {
      e.getHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var i, s;
        const l = (i = o == null ? void 0 : o.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? i : [], a = (s = r == null ? void 0 : r.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? s : [], c = n.filter((f) => !(o != null && o.includes(f.id)) && !(r != null && r.includes(f.id)));
        return _n(t, [
          ...l,
          ...c,
          ...a
        ], e);
      }, H(e.options, ke)), e.getCenterHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), _n(t, n, e, "center")), H(e.options, ke)), e.getLeftHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return _n(t, i, e, "left");
      }, H(e.options, ke)), e.getRightHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return _n(t, i, e, "right");
      }, H(e.options, ke)), e.getFooterGroups = V(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, ke)), e.getLeftFooterGroups = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, ke)), e.getCenterFooterGroups = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, ke)), e.getRightFooterGroups = V(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, ke)), e.getFlatHeaders = V(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, ke)), e.getLeftFlatHeaders = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, ke)), e.getCenterFlatHeaders = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, ke)), e.getRightFlatHeaders = V(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, ke)), e.getCenterLeafHeaders = V(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, ke)), e.getLeftLeafHeaders = V(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, ke)), e.getRightLeafHeaders = V(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, ke)), e.getLeafHeaders = V(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, o) => {
        var r, i, s, l, a, c;
        return [
          ...(r = (i = t[0]) == null ? void 0 : i.headers) != null ? r : [],
          ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [],
          ...(a = (c = o[0]) == null ? void 0 : c.headers) != null ? a : []
        ].map((d) => d.getLeafHeaders()).flat();
      }, H(e.options, ke));
    }
  };
  function _n(e, t, n, o) {
    var r, i;
    let s = 0;
    const l = function(g, p) {
      p === void 0 && (p = 1), s = Math.max(s, p), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, p + 1);
      }, 0);
    };
    l(e);
    let a = [];
    const c = (g, p) => {
      const h = {
        depth: p,
        id: [
          o,
          `${p}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      g.forEach((v) => {
        const x = [
          ...m
        ].reverse()[0], C = v.column.depth === h.depth;
        let _, j = false;
        if (C && v.column.parent ? _ = v.column.parent : (_ = v.column, j = true), x && (x == null ? void 0 : x.column) === _) x.subHeaders.push(v);
        else {
          const $ = br(n, _, {
            id: [
              o,
              p,
              _.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((A) => A.column === _).length}` : void 0,
            depth: p,
            index: m.length
          });
          $.subHeaders.push(v), m.push($);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), p > 0 && c(m, p - 1);
    }, d = t.map((g, p) => br(n, g, {
      depth: s,
      index: p
    }));
    c(d, s - 1), a.reverse();
    const f = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], f(h.subHeaders).forEach((_) => {
        let { colSpan: j, rowSpan: $ } = _;
        m += j, x.push($);
      })) : m = 1;
      const C = Math.min(...x);
      return v = v + C, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return f((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
  }
  const zo = (e, t, n, o, r, i, s) => {
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
        const c = e.getColumn(a);
        if (c != null && c.accessorFn) return l._valuesCache[a] = c.accessorFn(l.original, o), l._valuesCache[a];
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a)) return l._uniqueValuesCache[a];
        const c = e.getColumn(a);
        if (c != null && c.accessorFn) return c.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = c.columnDef.getUniqueValues(l.original, o), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [
          l.getValue(a)
        ], l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var c;
        return (c = l.getValue(a)) != null ? c : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => _u(l.subRows, (a) => a.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let a = [], c = l;
        for (; ; ) {
          const d = c.getParentRow();
          if (!d) break;
          a.push(d), c = d;
        }
        return a.reverse();
      },
      getAllCells: V(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((c) => Ru(e, l, c, c.id)), H(e.options, "debugRows")),
      _getAllCellsByColumnId: V(() => [
        l.getAllCells()
      ], (a) => a.reduce((c, d) => (c[d.column.id] = d, c), {}), H(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const c = e._features[a];
      c == null || c.createRow == null || c.createRow(l, e);
    }
    return l;
  }, $u = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, ei = (e, t, n) => {
    var o, r;
    const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
  };
  ei.autoRemove = (e) => tt(e);
  const ti = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  ti.autoRemove = (e) => tt(e);
  const ni = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  ni.autoRemove = (e) => tt(e);
  const oi = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  oi.autoRemove = (e) => tt(e);
  const ri = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  ri.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const ii = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  ii.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const si = (e, t, n) => e.getValue(t) === n;
  si.autoRemove = (e) => tt(e);
  const li = (e, t, n) => e.getValue(t) == n;
  li.autoRemove = (e) => tt(e);
  const Do = (e, t, n) => {
    let [o, r] = n;
    const i = e.getValue(t);
    return i >= o && i <= r;
  };
  Do.resolveFilterValue = (e) => {
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
  Do.autoRemove = (e) => tt(e) || tt(e[0]) && tt(e[1]);
  const ut = {
    includesString: ei,
    includesStringSensitive: ti,
    equalsString: ni,
    arrIncludes: oi,
    arrIncludesAll: ri,
    arrIncludesSome: ii,
    equals: si,
    weakEquals: li,
    inNumberRange: Do
  };
  function tt(e) {
    return e == null || e === "";
  }
  const Au = {
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
        return typeof o == "string" ? ut.includesString : typeof o == "number" ? ut.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? ut.equals : Array.isArray(o) ? ut.arrIncludes : ut.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return Bn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : ut[e.columnDef.filterFn];
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
          const r = e.getFilterFn(), i = o == null ? void 0 : o.find((d) => d.id === e.id), s = ht(n, i ? i.value : void 0);
          if (wr(r, s, e)) {
            var l;
            return (l = o == null ? void 0 : o.filter((d) => d.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: s
          };
          if (i) {
            var c;
            return (c = o == null ? void 0 : o.map((d) => d.id === e.id ? a : d)) != null ? c : [];
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
          return (i = ht(t, r)) == null ? void 0 : i.filter((s) => {
            const l = n.find((a) => a.id === s.id);
            if (l) {
              const a = l.getFilterFn();
              if (wr(a, s.value, l)) return false;
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
  function wr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Pu = (e, t, n) => n.reduce((o, r) => {
    const i = r.getValue(e);
    return o + (typeof i == "number" ? i : 0);
  }, 0), Iu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o > i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Fu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o < i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, ku = (e, t, n) => {
    let o, r;
    return n.forEach((i) => {
      const s = i.getValue(e);
      s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
    }), [
      o,
      r
    ];
  }, zu = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let i = r.getValue(e);
      i != null && (i = +i) >= i && (++n, o += i);
    }), n) return o / n;
  }, Du = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!Su(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, Tu = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ou = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Eu = (e, t) => t.length, Xn = {
    sum: Pu,
    min: Iu,
    max: Fu,
    extent: ku,
    mean: zu,
    median: Du,
    unique: Tu,
    uniqueCount: Ou,
    count: Eu
  }, Nu = {
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
        if (typeof o == "number") return Xn.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return Xn.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return Bn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : Xn[e.columnDef.aggregationFn];
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
  function Lu(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((i) => !t.includes(i.id));
    return n === "remove" ? o : [
      ...t.map((i) => e.find((s) => s.id === i)).filter(Boolean),
      ...o
    ];
  }
  const Vu = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ue("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = V((n) => [
        tn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), H(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = tn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = tn(t, n);
        return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = V(() => [
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
            const a = s.shift(), c = l.findIndex((d) => d.id === a);
            c > -1 && i.push(l.splice(c, 1)[0]);
          }
          i = [
            ...i,
            ...l
          ];
        }
        return Lu(i, n, o);
      }, H(e.options, "debugTable"));
    }
  }, Kn = () => ({
    left: [],
    right: []
  }), Hu = {
    getInitialState: (e) => ({
      columnPinning: Kn(),
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
              left: ((l = r == null ? void 0 : r.left) != null ? l : []).filter((f) => !(o != null && o.includes(f))),
              right: [
                ...((a = r == null ? void 0 : r.right) != null ? a : []).filter((f) => !(o != null && o.includes(f))),
                ...o
              ]
            };
          }
          if (n === "left") {
            var c, d;
            return {
              left: [
                ...((c = r == null ? void 0 : r.left) != null ? c : []).filter((f) => !(o != null && o.includes(f))),
                ...o
              ],
              right: ((d = r == null ? void 0 : r.right) != null ? d : []).filter((f) => !(o != null && o.includes(f)))
            };
          }
          return {
            left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((f) => !(o != null && o.includes(f))),
            right: ((s = r == null ? void 0 : r.right) != null ? s : []).filter((f) => !(o != null && o.includes(f)))
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
      e.getCenterVisibleCells = V(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, o, r) => {
        const i = [
          ...o ?? [],
          ...r ?? []
        ];
        return n.filter((s) => !i.includes(s.column.id));
      }, H(t.options, "debugRows")), e.getLeftVisibleCells = V(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
        ...i,
        position: "left"
      })), H(t.options, "debugRows")), e.getRightVisibleCells = V(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
        ...i,
        position: "right"
      })), H(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, o;
        return e.setColumnPinning(t ? Kn() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : Kn());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const o = e.getState().columnPinning;
        if (!t) {
          var r, i;
          return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e.getLeftLeafColumns = V(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), H(e.options, "debugColumns")), e.getRightLeafColumns = V(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), H(e.options, "debugColumns")), e.getCenterLeafColumns = V(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o) => {
        const r = [
          ...n ?? [],
          ...o ?? []
        ];
        return t.filter((i) => !r.includes(i.id));
      }, H(e.options, "debugColumns"));
    }
  };
  function Bu(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Rn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, Zn = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Wu = {
    getDefaultColumnDef: () => Rn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: Zn(),
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
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Rn.minSize, (o = i ?? e.columnDef.size) != null ? o : Rn.size), (r = e.columnDef.maxSize) != null ? r : Rn.maxSize);
      }, e.getStart = V((n) => [
        n,
        tn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), H(t.options, "debugColumns")), e.getAfter = V((n) => [
        n,
        tn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, i) => r + i.getSize(), 0), H(t.options, "debugColumns")), e.resetSize = () => {
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
          if (!o || !r || (i.persist == null || i.persist(), Qn(i) && i.touches && i.touches.length > 1)) return;
          const s = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = Qn(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, d = (x, C) => {
            typeof C == "number" && (t.setColumnSizingInfo((_) => {
              var j, $;
              const A = t.options.columnResizeDirection === "rtl" ? -1 : 1, F = (C - ((j = _ == null ? void 0 : _.startOffset) != null ? j : 0)) * A, w = Math.max(F / (($ = _ == null ? void 0 : _.startSize) != null ? $ : 0), -0.999999);
              return _.columnSizingStart.forEach((R) => {
                let [b, M] = R;
                c[b] = Math.round(Math.max(M + M * w, 0) * 100) / 100;
              }), {
                ..._,
                deltaOffset: F,
                deltaPercentage: w
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((_) => ({
              ..._,
              ...c
            })));
          }, f = (x) => d("move", x), g = (x) => {
            d("end", x), t.setColumnSizingInfo((C) => ({
              ...C,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, p = Bu(n), h = {
            moveHandler: (x) => f(x.clientX),
            upHandler: (x) => {
              p == null ? void 0 : p.removeEventListener("mousemove", h.moveHandler), p == null ? void 0 : p.removeEventListener("mouseup", h.upHandler), g(x.clientX);
            }
          }, m = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), f(x.touches[0].clientX), false),
            upHandler: (x) => {
              var C;
              p == null ? void 0 : p.removeEventListener("touchmove", m.moveHandler), p == null ? void 0 : p.removeEventListener("touchend", m.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((C = x.touches[0]) == null ? void 0 : C.clientX);
            }
          }, v = Gu() ? {
            passive: false
          } : false;
          Qn(i) ? (p == null ? void 0 : p.addEventListener("touchmove", m.moveHandler, v), p == null ? void 0 : p.addEventListener("touchend", m.upHandler, v)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, v), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((x) => ({
            ...x,
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
        e.setColumnSizingInfo(t ? Zn() : (n = e.initialState.columnSizingInfo) != null ? n : Zn());
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
  let jn = null;
  function Gu() {
    if (typeof jn == "boolean") return jn;
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
    return jn = e, jn;
  }
  function Qn(e) {
    return e.type === "touchstart";
  }
  const Uu = {
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
      e._getAllVisibleCells = V(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((o) => o.column.getIsVisible()), H(t.options, "debugRows")), e.getVisibleCells = V(() => [
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
      const t = (n, o) => V(() => [
        o(),
        o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")
      ], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), H(e.options, "debugColumns"));
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
  function tn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const qu = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Yu = {
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
      e.getGlobalAutoFilterFn = () => ut.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return Bn(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : ut[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, Ju = {
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
  }, xo = 0, bo = 10, eo = () => ({
    pageIndex: xo,
    pageSize: bo
  }), Xu = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...eo(),
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
        const r = (i) => ht(o, i);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? eo() : (r = e.initialState.pagination) != null ? r : eo());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let i = ht(o, r.pageIndex);
          const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return i = Math.max(0, Math.min(i, s)), {
            ...r,
            pageIndex: i
          };
        });
      }, e.resetPageIndex = (o) => {
        var r, i;
        e.setPageIndex(o ? xo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : xo);
      }, e.resetPageSize = (o) => {
        var r, i;
        e.setPageSize(o ? bo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : bo);
      }, e.setPageSize = (o) => {
        e.setPagination((r) => {
          const i = Math.max(1, ht(o, r.pageSize)), s = r.pageSize * r.pageIndex, l = Math.floor(s / i);
          return {
            ...r,
            pageIndex: l,
            pageSize: i
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var i;
        let s = ht(o, (i = e.options.pageCount) != null ? i : -1);
        return typeof s == "number" && (s = Math.max(-1, s)), {
          ...r,
          pageCount: s
        };
      }), e.getPageOptions = V(() => [
        e.getPageCount()
      ], (o) => {
        let r = [];
        return o && o > 0 && (r = [
          ...new Array(o)
        ].fill(null).map((i, s) => s)), r;
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
  }, to = () => ({
    top: [],
    bottom: []
  }), Ku = {
    getInitialState: (e) => ({
      rowPinning: to(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ue("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, o, r) => {
        const i = o ? e.getLeafRows().map((a) => {
          let { id: c } = a;
          return c;
        }) : [], s = r ? e.getParentRows().map((a) => {
          let { id: c } = a;
          return c;
        }) : [], l = /* @__PURE__ */ new Set([
          ...s,
          e.id,
          ...i
        ]);
        t.setRowPinning((a) => {
          var c, d;
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
            top: ((c = a == null ? void 0 : a.top) != null ? c : []).filter((m) => !(l != null && l.has(m))),
            bottom: ((d = a == null ? void 0 : a.bottom) != null ? d : []).filter((m) => !(l != null && l.has(m)))
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
        return e.setRowPinning(t ? to() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : to());
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
      }, e.getTopRows = V(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), H(e.options, "debugRows")), e.getBottomRows = V(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), H(e.options, "debugRows")), e.getCenterRows = V(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, o) => {
        const r = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...o ?? []
        ]);
        return t.filter((i) => !r.has(i.id));
      }, H(e.options, "debugRows"));
    }
  }, Zu = {
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
          wo(r, i.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? no(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getFilteredSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? no(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getGroupedSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? no(e, n) : {
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
        t.setRowSelection((i) => {
          var s;
          if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n) return i;
          const l = {
            ...i
          };
          return wo(l, e.id, n, (s = o == null ? void 0 : o.selectChildren) != null ? s : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return To(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Co(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Co(e, n) === "all";
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
  }, wo = (e, t, n, o, r) => {
    var i;
    const s = r.getRow(t, true);
    n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = true)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => wo(e, l.id, n, o, r));
  };
  function no(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, i = function(s, l) {
      return s.map((a) => {
        var c;
        const d = To(a, n);
        if (d && (o.push(a), r[a.id] = a), (c = a.subRows) != null && c.length && (a = {
          ...a,
          subRows: i(a.subRows)
        }), d) return a;
      }).filter(Boolean);
    };
    return {
      rows: i(t.rows),
      flatRows: o,
      rowsById: r
    };
  }
  function To(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Co(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, i = false;
    return e.subRows.forEach((s) => {
      if (!(i && !r) && (s.getCanSelect() && (To(s, t) ? i = true : r = false), s.subRows && s.subRows.length)) {
        const l = Co(s, t);
        l === "all" ? i = true : (l === "some" && (i = true), r = false);
      }
    }), r ? "all" : i ? "some" : false;
  }
  const So = /([0-9]+)/gm, Qu = (e, t, n) => ai(mt(e.getValue(n)).toLowerCase(), mt(t.getValue(n)).toLowerCase()), ed = (e, t, n) => ai(mt(e.getValue(n)), mt(t.getValue(n))), td = (e, t, n) => Oo(mt(e.getValue(n)).toLowerCase(), mt(t.getValue(n)).toLowerCase()), nd = (e, t, n) => Oo(mt(e.getValue(n)), mt(t.getValue(n))), od = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, rd = (e, t, n) => Oo(e.getValue(n), t.getValue(n));
  function Oo(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function mt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function ai(e, t) {
    const n = e.split(So).filter(Boolean), o = t.split(So).filter(Boolean);
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
  const Ut = {
    alphanumeric: Qu,
    alphanumericCaseSensitive: ed,
    text: td,
    textCaseSensitive: nd,
    datetime: od,
    basic: rd
  }, id = {
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
          if (Object.prototype.toString.call(i) === "[object Date]") return Ut.datetime;
          if (typeof i == "string" && (o = true, i.split(So).length > 1)) return Ut.alphanumeric;
        }
        return o ? Ut.text : Ut.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return Bn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : Ut[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, o) => {
        const r = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
        t.setSorting((s) => {
          const l = s == null ? void 0 : s.find((p) => p.id === e.id), a = s == null ? void 0 : s.findIndex((p) => p.id === e.id);
          let c = [], d, f = i ? n : r === "desc";
          if (s != null && s.length && e.getCanMultiSort() && o ? l ? d = "toggle" : d = "add" : s != null && s.length && a !== s.length - 1 ? d = "replace" : l ? d = "toggle" : d = "replace", d === "toggle" && (i || r || (d = "remove")), d === "add") {
            var g;
            c = [
              ...s,
              {
                id: e.id,
                desc: f
              }
            ], c.splice(0, c.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else d === "toggle" ? c = s.map((p) => p.id === e.id ? {
            ...p,
            desc: f
          } : p) : d === "remove" ? c = s.filter((p) => p.id !== e.id) : c = [
            {
              id: e.id,
              desc: f
            }
          ];
          return c;
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
  }, sd = [
    Mu,
    Uu,
    Vu,
    Hu,
    $u,
    Au,
    qu,
    Yu,
    id,
    Nu,
    Ju,
    Xu,
    Ku,
    Zu,
    Wu
  ];
  function ld(e) {
    var t, n;
    const o = [
      ...sd,
      ...(t = e._features) != null ? t : []
    ];
    let r = {
      _features: o
    };
    const i = r._features.reduce((g, p) => Object.assign(g, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)), {}), s = (g) => r.options.mergeOptions ? r.options.mergeOptions(i, g) : {
      ...i,
      ...g
    };
    let a = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    r._features.forEach((g) => {
      var p;
      a = (p = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? p : a;
    });
    const c = [];
    let d = false;
    const f = {
      _features: o,
      options: {
        ...i,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        c.push(g), d || (d = true, Promise.resolve().then(() => {
          for (; c.length; ) c.shift()();
          d = false;
        }).catch((p) => setTimeout(() => {
          throw p;
        })));
      },
      reset: () => {
        r.setState(r.initialState);
      },
      setOptions: (g) => {
        const p = ht(g, r.options);
        r.options = s(p);
      },
      getState: () => r.options.state,
      setState: (g) => {
        r.options.onStateChange == null || r.options.onStateChange(g);
      },
      _getRowId: (g, p, h) => {
        var m;
        return (m = r.options.getRowId == null ? void 0 : r.options.getRowId(g, p, h)) != null ? m : `${h ? [
          h.id,
          p
        ].join(".") : p}`;
      },
      getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
      getRowModel: () => r.getPaginationRowModel(),
      getRow: (g, p) => {
        let h = (p ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[g];
        if (!h && (h = r.getCoreRowModel().rowsById[g], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: V(() => [
        r.options.defaultColumn
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
          ...r._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, H(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: V(() => [
        r._getColumnDefs()
      ], (g) => {
        const p = function(h, m, v) {
          return v === void 0 && (v = 0), h.map((x) => {
            const C = ju(r, x, v, m), _ = x;
            return C.columns = _.columns ? p(_.columns, C, v + 1) : [], C;
          });
        };
        return p(g);
      }, H(e, "debugColumns")),
      getAllFlatColumns: V(() => [
        r.getAllColumns()
      ], (g) => g.flatMap((p) => p.getFlatColumns()), H(e, "debugColumns")),
      _getAllFlatColumnsById: V(() => [
        r.getAllFlatColumns()
      ], (g) => g.reduce((p, h) => (p[h.id] = h, p), {}), H(e, "debugColumns")),
      getAllLeafColumns: V(() => [
        r.getAllColumns(),
        r._getOrderColumnsFn()
      ], (g, p) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return p(h);
      }, H(e, "debugColumns")),
      getColumn: (g) => r._getAllFlatColumnsById()[g]
    };
    Object.assign(r, f);
    for (let g = 0; g < r._features.length; g++) {
      const p = r._features[g];
      p == null || p.createTable == null || p.createTable(r);
    }
    return r;
  }
  function ad() {
    return (e) => V(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, o = function(r, i, s) {
        i === void 0 && (i = 0);
        const l = [];
        for (let c = 0; c < r.length; c++) {
          const d = zo(e, e._getRowId(r[c], c, s), r[c], c, i, void 0, s == null ? void 0 : s.id);
          if (n.flatRows.push(d), n.rowsById[d.id] = d, l.push(d), e.options.getSubRows) {
            var a;
            d.originalSubRows = e.options.getSubRows(r[c], c), (a = d.originalSubRows) != null && a.length && (d.subRows = o(d.originalSubRows, i + 1, d));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, H(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function cd(e) {
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
  function ud(e, t, n) {
    return n.options.filterFromLeafRows ? dd(e, t, n) : pd(e, t, n);
  }
  function dd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, c) {
      c === void 0 && (c = 0);
      const d = [];
      for (let g = 0; g < a.length; g++) {
        var f;
        let p = a[g];
        const h = zo(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (h.columnFilters = p.columnFilters, (f = p.subRows) != null && f.length && c < s) {
          if (h.subRows = l(p.subRows, c + 1), p = h, t(p) && !h.subRows.length) {
            d.push(p), i[p.id] = p, r.push(p);
            continue;
          }
          if (t(p) || h.subRows.length) {
            d.push(p), i[p.id] = p, r.push(p);
            continue;
          }
        } else p = h, t(p) && (d.push(p), i[p.id] = p, r.push(p));
      }
      return d;
    };
    return {
      rows: l(e),
      flatRows: r,
      rowsById: i
    };
  }
  function pd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, c) {
      c === void 0 && (c = 0);
      const d = [];
      for (let g = 0; g < a.length; g++) {
        let p = a[g];
        if (t(p)) {
          var f;
          if ((f = p.subRows) != null && f.length && c < s) {
            const m = zo(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
            m.subRows = l(p.subRows, c + 1), p = m;
          }
          d.push(p), r.push(p), i[p.id] = p;
        }
      }
      return d;
    };
    return {
      rows: l(e),
      flatRows: r,
      rowsById: i
    };
  }
  function fd() {
    return (e) => V(() => [
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
        var p;
        const h = e.getColumn(g.id);
        if (!h) return;
        const m = h.getFilterFn();
        m && r.push({
          id: g.id,
          filterFn: m,
          resolvedValue: (p = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(g.value)) != null ? p : g.value
        });
      });
      const s = (n ?? []).map((g) => g.id), l = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
      o && l && a.length && (s.push("__global__"), a.forEach((g) => {
        var p;
        i.push({
          id: g.id,
          filterFn: l,
          resolvedValue: (p = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(o)) != null ? p : o
        });
      }));
      let c, d;
      for (let g = 0; g < t.flatRows.length; g++) {
        const p = t.flatRows[g];
        if (p.columnFilters = {}, r.length) for (let h = 0; h < r.length; h++) {
          c = r[h];
          const m = c.id;
          p.columnFilters[m] = c.filterFn(p, m, c.resolvedValue, (v) => {
            p.columnFiltersMeta[m] = v;
          });
        }
        if (i.length) {
          for (let h = 0; h < i.length; h++) {
            d = i[h];
            const m = d.id;
            if (d.filterFn(p, m, d.resolvedValue, (v) => {
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
        for (let p = 0; p < s.length; p++) if (g.columnFilters[s[p]] === false) return false;
        return true;
      };
      return ud(t.rows, f, e);
    }, H(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function gd(e) {
    return (t) => V(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, o) => {
      if (!o.rows.length) return o;
      const { pageSize: r, pageIndex: i } = n;
      let { rows: s, flatRows: l, rowsById: a } = o;
      const c = r * i, d = c + r;
      s = s.slice(c, d);
      let f;
      t.options.paginateExpandedRows ? f = {
        rows: s,
        flatRows: l,
        rowsById: a
      } : f = cd({
        rows: s,
        flatRows: l,
        rowsById: a
      }), f.flatRows = [];
      const g = (p) => {
        f.flatRows.push(p), p.subRows.length && p.subRows.forEach(g);
      };
      return f.rows.forEach(g), f;
    }, H(t.options, "debugTable"));
  }
  function hd() {
    return (e) => V(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const o = e.getState().sorting, r = [], i = o.filter((a) => {
        var c;
        return (c = e.getColumn(a.id)) == null ? void 0 : c.getCanSort();
      }), s = {};
      i.forEach((a) => {
        const c = e.getColumn(a.id);
        c && (s[a.id] = {
          sortUndefined: c.columnDef.sortUndefined,
          invertSorting: c.columnDef.invertSorting,
          sortingFn: c.getSortingFn()
        });
      });
      const l = (a) => {
        const c = a.map((d) => ({
          ...d
        }));
        return c.sort((d, f) => {
          for (let p = 0; p < i.length; p += 1) {
            var g;
            const h = i[p], m = s[h.id], v = m.sortUndefined, x = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let C = 0;
            if (v) {
              const _ = d.getValue(h.id), j = f.getValue(h.id), $ = _ === void 0, A = j === void 0;
              if ($ || A) {
                if (v === "first") return $ ? -1 : 1;
                if (v === "last") return $ ? 1 : -1;
                C = $ && A ? 0 : $ ? v : -v;
              }
            }
            if (C === 0 && (C = m.sortingFn(d, f, h.id)), C !== 0) return x && (C *= -1), m.invertSorting && (C *= -1), C;
          }
          return d.index - f.index;
        }), c.forEach((d) => {
          var f;
          r.push(d), (f = d.subRows) != null && f.length && (d.subRows = l(d.subRows));
        }), c;
      };
      return {
        rows: l(n.rows),
        flatRows: r,
        rowsById: n.rowsById
      };
    }, H(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function qt(e, t) {
    return e ? md(e) ? y.createElement(e, t) : e : null;
  }
  function md(e) {
    return yd(e) || typeof e == "function" || vd(e);
  }
  function yd(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function vd(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function xd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: ld(t)
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
  function jt(e, t, n) {
    let o = n.initialDeps ?? [], r, i = true;
    function s() {
      var l, a, c;
      let d;
      n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now());
      const f = e();
      if (!(f.length !== o.length || f.some((h, m) => o[m] !== h))) return r;
      o = f;
      let p;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (p = Date.now()), r = t(...f), n.key && ((c = n.debug) != null && c.call(n))) {
        const h = Math.round((Date.now() - d) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, v = m / 16, x = (C, _) => {
          for (C = String(C); C.length < _; ) C = " " + C;
          return C;
        };
        console.info(`%c\u23F1 ${x(m, 5)} /${x(h, 5)} ms`, `
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
  function Cr(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const bd = (e, t) => Math.abs(e - t) < 1.01, wd = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, Sr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Cd = (e) => e, Sd = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, _d = (e, t) => {
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
    if (r(Sr(n)), !o.ResizeObserver) return () => {
    };
    const i = new o.ResizeObserver((s) => {
      const l = () => {
        const a = s[0];
        if (a == null ? void 0 : a.borderBoxSize) {
          const c = a.borderBoxSize[0];
          if (c) {
            r({
              width: c.inlineSize,
              height: c.blockSize
            });
            return;
          }
        }
        r(Sr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return i.observe(n, {
      box: "border-box"
    }), () => {
      i.unobserve(n);
    };
  }, _r = {
    passive: true
  }, Rr = typeof window > "u" ? true : "onscrollend" in window, Rd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const i = e.options.useScrollendEvent && Rr ? () => {
    } : wd(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), s = (d) => () => {
      const { horizontal: f, isRtl: g } = e.options;
      r = f ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(r, d);
    }, l = s(true), a = s(false);
    n.addEventListener("scroll", l, _r);
    const c = e.options.useScrollendEvent && Rr;
    return c && n.addEventListener("scrollend", a, _r), () => {
      n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", a);
    };
  }, jd = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Md = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, i;
    const s = e + t;
    (i = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || i.call(r, {
      [o.options.horizontal ? "left" : "top"]: s,
      behavior: n
    });
  };
  class $d {
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
          getItemKey: Cd,
          rangeExtractor: Sd,
          onChange: () => {
          },
          measureElement: jd,
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
      }, this.maybeNotify = jt(() => (this.calculateRange(), [
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
      }, this.getMeasurementOptions = jt(() => [
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
      }), this.getMeasurements = jt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: o, scrollMargin: r, getItemKey: i, enabled: s, lanes: l }, a) => {
        if (!s) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const d = this.measurementsCache.slice(0, c), f = new Array(l).fill(void 0);
        for (let g = 0; g < c; g++) {
          const p = d[g];
          p && (f[p.lane] = g);
        }
        for (let g = c; g < n; g++) {
          const p = i(g), h = this.laneAssignments.get(g);
          let m, v;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const j = f[m], $ = j !== void 0 ? d[j] : void 0;
            v = $ ? $.end + this.options.gap : o + r;
          } else {
            const j = this.options.lanes === 1 ? d[g - 1] : this.getFurthestMeasurement(d, g);
            v = j ? j.end + this.options.gap : o + r, m = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const x = a.get(p), C = typeof x == "number" ? x : this.options.estimateSize(g), _ = v + C;
          d[g] = {
            index: g,
            start: v,
            size: C,
            end: _,
            key: p,
            lane: m
          }, f[m] = g;
        }
        return this.measurementsCache = d, d;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = jt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, i) => this.range = n.length > 0 && o > 0 ? Ad({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: i
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = jt(() => {
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
      }, this.getVirtualItems = jt(() => [
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
        if (o.length !== 0) return Cr(o[ci(0, o.length - 1, (r) => Cr(o[r]).start, n)]);
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
        const s = 10, l = (c) => {
          if (!this.targetWindow) return;
          const d = this.getOffsetForIndex(n, c);
          if (!d) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [f, g] = d;
          this._scrollToOffset(f, {
            adjustments: void 0,
            behavior: r
          }), this.targetWindow.requestAnimationFrame(() => {
            const p = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, g);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              bd(m[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(p) : p();
          });
        }, a = (c) => {
          this.targetWindow && this.currentScrollToIndex === n && (i++, i < s ? this.targetWindow.requestAnimationFrame(() => l(c)) : console.warn(`Failed to scroll to index ${n} after ${s} attempts.`));
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
  const ci = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, i = n(r);
      if (i < o) e = r + 1;
      else if (i > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Ad({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, i = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let s = ci(0, r, i, n), l = s;
    if (o === 1) for (; l < r && e[l].end < n + t; ) l++;
    else if (o > 1) {
      const a = Array(o).fill(0);
      for (; l < r && a.some((d) => d < n + t); ) {
        const d = e[l];
        a[d.lane] = d.end, l++;
      }
      const c = Array(o).fill(n + t);
      for (; s >= 0 && c.some((d) => d >= n); ) {
        const d = e[s];
        c[d.lane] = d.start, s--;
      }
      s = Math.max(0, s - s % o), l = Math.min(r, l + (o - 1 - l % o));
    }
    return {
      startIndex: s,
      endIndex: l
    };
  }
  const jr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Pd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (i, s) => {
        var l;
        e && s ? ki.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, i, s);
      }
    }, [r] = y.useState(() => new $d(o));
    return r.setOptions(o), jr(() => r._didMount(), []), jr(() => r._willUpdate()), r;
  }
  function Id(e) {
    return Pd({
      observeElementRect: _d,
      observeElementOffset: Rd,
      scrollToFn: Md,
      ...e
    });
  }
  const Fd = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, kd = {
    compact: 36,
    standard: 56,
    comfortable: 68
  };
  function zd(e) {
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
  function Mn(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e12 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = ko(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  const Dd = () => {
    var _a2, _b, _c2;
    const e = y.useContext(zi), { widget: { data: { oidObject: t } }, widget: n } = e, { data: o } = Di("oid"), r = Gi("oid"), i = t == null ? void 0 : t.type, s = i === "string" || i === "mixed" || i === "json", l = y.useMemo(() => {
      if (r == null) return [];
      let I;
      if (typeof r == "string") try {
        I = JSON.parse(r);
      } catch {
        return [];
      }
      else I = r;
      return Array.isArray(I) ? I : typeof I == "object" && I !== null ? [
        I
      ] : [];
    }, [
      r
    ]), a = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: c, rows: d } = xu(l, a), f = y.useMemo(() => Jr(n.data.columnConfig), [
      n.data.columnConfig
    ]), g = n.data.tableDensity || "standard", p = Number(n.data.tableRowHeight) || Fd[g] || 52, h = Number(n.data.tableHeaderHeight) || kd[g] || 56, m = y.useCallback((I, z) => {
      var _a3;
      let K = I != null ? String(I) : "";
      if (z.format) switch (z.format.type) {
        case "number":
          (typeof I == "number" || typeof I == "string" && !isNaN(Number(I))) && (K = Xr(Number(I), {
            decimals: z.format.numberDecimals,
            prefix: z.format.numberPrefix,
            suffix: z.format.numberSuffix,
            thousands: z.format.numberThousandsSeparator
          }));
          break;
        case "date":
          K = Kr(I, z.format.dateFormat, z.format.dateInputFormat);
          break;
        case "boolean":
          K = ho(I, z.format.booleanTrue, z.format.booleanFalse);
          break;
      }
      const E = !z.cellStyleMode || z.cellStyleMode === "first-match", fe = ((_a3 = z.format) == null ? void 0 : _a3.type) === "date" ? ko(I, z.format.dateInputFormat) : I, Re = {}, ge = {};
      if (z.cellStyle && z.cellStyle.length > 0) {
        for (const Pe of z.cellStyle) if (Pe.logic && Jc(Pe.logic, fe)) {
          if (Pe.backgroundColor && !("background" in Re) && !("backgroundColor" in Re)) {
            const ce = At(Pe.backgroundColor);
            ce ? Re.background = ce : Re.backgroundColor = Pe.backgroundColor;
          }
          if (Pe.textColor && !("color" in ge) && !("background" in ge)) {
            const ce = At(Pe.textColor);
            ce ? (ge.background = ce, ge.backgroundClip = "text", ge.WebkitBackgroundClip = "text", ge.color = "transparent") : ge.color = Pe.textColor;
          }
          if (Pe.fontWeight && !ge.fontWeight && (ge.fontWeight = Pe.fontWeight), Pe.fontStyle && !ge.fontStyle && (ge.fontStyle = Pe.fontStyle), E) break;
        }
      }
      return {
        displayValue: K,
        textSx: ge,
        bgSx: Re
      };
    }, []), v = y.useMemo(() => d.map((I, z) => ({
      __id: z,
      ...I
    })), [
      d
    ]), x = y.useMemo(() => {
      const I = new Map(c.map((E) => [
        E.path,
        E.dateFormat
      ])), z = n.data.tableRowSelection === true ? {
        id: "__select__",
        enableSorting: false,
        enableColumnFilter: false,
        header: ({ table: E }) => u.jsx(on, {
          size: "small",
          indeterminate: E.getIsSomePageRowsSelected(),
          checked: E.getIsAllPageRowsSelected(),
          onChange: E.getToggleAllPageRowsSelectedHandler(),
          "aria-label": "Select all rows"
        }),
        cell: ({ row: E }) => u.jsx(on, {
          size: "small",
          checked: E.getIsSelected(),
          onChange: E.getToggleSelectedHandler(),
          "aria-label": "Select row"
        }),
        meta: {
          align: "center",
          width: 48
        }
      } : null;
      let K;
      return f.length > 0 ? K = f.filter((E) => E.visible).map((E) => {
        var _a3, _b2;
        const fe = ((_a3 = E.format) == null ? void 0 : _a3.dateInputFormat) ?? I.get(E.path), Re = ((_b2 = E.format) == null ? void 0 : _b2.type) === "date", ge = (ce, Ne, Fe) => Mn(ce.getValue(Fe), fe) - Mn(Ne.getValue(Fe), fe);
        return {
          id: E.path,
          accessorFn: (ce) => ce[E.path],
          header: E.headerName || E.path,
          enableSorting: E.sortable ?? n.data.tableSorting !== false,
          enableColumnFilter: E.filterable ?? n.data.tableFiltering === true,
          ...Re && {
            sortingFn: ge
          },
          cell: ({ getValue: ce }) => {
            const Ne = ce(), { displayValue: Fe, textSx: Ot } = m(Ne, E);
            return u.jsx(k, {
              variant: "body2",
              component: "span",
              noWrap: true,
              title: Fe,
              sx: {
                width: "100%",
                display: "block",
                lineHeight: "inherit",
                ...Ot
              },
              children: Fe
            });
          },
          meta: {
            align: E.align || "left",
            width: E.width,
            getCellSx: (ce) => {
              const { bgSx: Ne } = m(ce, E);
              return Ne;
            }
          }
        };
      }) : K = c.map((E) => {
        const fe = E.type === "date" && E.dateFormat, Re = E.dateFormat, ge = (ce, Ne, Fe) => Mn(ce.getValue(Fe), Re) - Mn(Ne.getValue(Fe), Re);
        return {
          id: E.path,
          accessorFn: (ce) => ce[E.path],
          header: E.path.split(".").pop() || E.path,
          enableSorting: n.data.tableSorting !== false,
          enableColumnFilter: n.data.tableFiltering === true,
          ...fe && {
            sortingFn: ge
          },
          cell: ({ getValue: ce }) => {
            const Ne = ce(), Fe = Ne != null ? String(Ne) : "";
            return u.jsx(k, {
              variant: "body2",
              component: "span",
              noWrap: true,
              title: Fe,
              sx: {
                width: "100%",
                display: "block",
                lineHeight: "inherit"
              },
              children: Fe
            });
          },
          meta: {
            align: "left"
          }
        };
      }), z ? [
        z,
        ...K
      ] : K;
    }, [
      f,
      c,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection,
      m
    ]), [C, _] = y.useState([]), [j, $] = y.useState([]), [A, F] = y.useState(""), [w, R] = y.useState({}), b = y.useMemo(() => Number(n.data.tablePageSize) || 25, [
      n.data.tablePageSize
    ]), [M, D] = y.useState({
      pageIndex: 0,
      pageSize: b
    });
    y.useEffect(() => {
      D((I) => I.pageSize === b ? I : {
        pageIndex: 0,
        pageSize: b
      });
    }, [
      b
    ]);
    const P = y.useMemo(() => n.data.tablePagination === false ? {
      pageIndex: 0,
      pageSize: Math.max(v.length, 1)
    } : M, [
      n.data.tablePagination,
      v.length,
      M
    ]), T = y.useMemo(() => zd(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), N = xd({
      data: v,
      columns: x,
      getCoreRowModel: ad(),
      getSortedRowModel: hd(),
      getFilteredRowModel: fd(),
      getPaginationRowModel: gd(),
      enableMultiSort: false,
      globalFilterFn: "includesString",
      state: {
        sorting: C,
        columnFilters: j,
        globalFilter: A,
        pagination: P,
        rowSelection: w
      },
      onSortingChange: _,
      onColumnFiltersChange: $,
      onGlobalFilterChange: F,
      onPaginationChange: n.data.tablePagination !== false ? D : void 0,
      onRowSelectionChange: R,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), L = y.useRef(null), [O, Z] = y.useState(null), G = y.useRef(null), ye = y.useCallback((I, z) => {
      G.current = I, Z(z);
    }, []), ie = y.useCallback(() => {
      Z(null);
    }, []), Ae = y.useMemo(() => {
      const I = {
        tableLayout: n.data.tableAutoSize === false ? "fixed" : "auto",
        width: "100%"
      };
      return n.data.tableShowRowBorders === false && (I["& .MuiTableCell-root"] = {
        borderBottom: "none"
      }), n.data.tableShowCellBorders === true && (I["& .MuiTableCell-root"] = {
        ...I["& .MuiTableCell-root"],
        borderRight: "1px solid",
        borderRightColor: "divider"
      }), I;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.tableAutoSize
    ]), ae = n.data.tableHeaderBgColor, q = n.data.tableHeaderTextColor, ve = n.data.tableHeaderFontSize, W = y.useMemo(() => {
      const I = ae ? At(ae) : null;
      return {
        height: h,
        whiteSpace: "nowrap",
        ...I && {
          background: I
        },
        ...!I && ae && {
          backgroundColor: ae
        },
        ...q && {
          color: q
        },
        ...ve && {
          fontSize: `${ve}px`
        }
      };
    }, [
      h,
      ae,
      q,
      ve
    ]), se = y.useMemo(() => ({
      ...n.data.tableCellFontSize && {
        fontSize: `${n.data.tableCellFontSize}px`
      },
      overflow: "hidden",
      height: p,
      maxHeight: p,
      padding: "0 8px"
    }), [
      n.data.tableCellFontSize,
      p
    ]), Q = n.data.tableStripedColor, Me = Q ? At(Q) : null, Te = y.useCallback((I) => {
      if (!(!Q || I % 2 === 0)) return {
        background: Me || Q,
        ...Me ? {} : {
          backgroundColor: Q
        }
      };
    }, [
      Q,
      Me
    ]), Oe = G.current ? C.find((I) => {
      var _a3;
      return I.id === ((_a3 = G.current) == null ? void 0 : _a3.id);
    }) : void 0, de = G.current ? (_a2 = j.find((I) => {
      var _a3;
      return I.id === ((_a3 = G.current) == null ? void 0 : _a3.id);
    })) == null ? void 0 : _a2.value : void 0, $e = N.getRowModel().rows, _e = Id({
      count: $e.length,
      getScrollElement: () => L.current,
      estimateSize: () => p,
      overscan: 10
    }), Ee = n.data.tablePagination === false && $e.length > 50 ? _e.getVirtualItems() : null, nt = Ee && Ee.length > 0 ? Ee[0].start : 0, lt = Ee && Ee.length > 0 ? _e.getTotalSize() - (Ee[Ee.length - 1].end ?? 0) : 0;
    return u.jsxs(Ti, {
      isValidType: s,
      data: o,
      oidValue: r,
      children: [
        u.jsx(Oi, {
          data: o,
          widget: n
        }),
        s && x.length > 0 ? u.jsxs(Y, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            n.data.tableQuickFilter === true && u.jsx(Y, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: u.jsx(et, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: A,
                onChange: (I) => F(I.target.value),
                placeholder: S.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: u.jsx(fo, {
                      position: "start",
                      children: u.jsx(Yr, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            u.jsx(Da, {
              ref: L,
              sx: {
                flex: 1,
                overflow: "auto"
              },
              children: u.jsxs(Ca, {
                size: g === "compact" ? "small" : "medium",
                sx: Ae,
                stickyHeader: true,
                children: [
                  u.jsxs(La, {
                    children: [
                      N.getHeaderGroups().map((I) => u.jsx(Rt, {
                        sx: {
                          height: h
                        },
                        children: I.headers.map((z) => {
                          const K = z.column.getCanSort(), E = z.column.getIsSorted(), fe = z.column.columnDef.meta, Re = z.column.id === "__select__";
                          return u.jsx(Qe, {
                            align: (fe == null ? void 0 : fe.align) || "left",
                            padding: Re ? "checkbox" : "normal",
                            sx: {
                              ...W,
                              ...(fe == null ? void 0 : fe.width) && {
                                width: fe.width,
                                minWidth: fe.width
                              },
                              userSelect: "none"
                            },
                            children: Re ? qt(z.column.columnDef.header, z.getContext()) : u.jsxs(Y, {
                              sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: (fe == null ? void 0 : fe.align) === "right" ? "flex-end" : (fe == null ? void 0 : fe.align) === "center" ? "center" : "space-between"
                              },
                              children: [
                                K ? u.jsx(fc, {
                                  active: E !== false,
                                  direction: E === "desc" ? "desc" : "asc",
                                  onClick: z.column.getToggleSortingHandler(),
                                  children: u.jsx(k, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    children: qt(z.column.columnDef.header, z.getContext())
                                  })
                                }) : u.jsx(k, {
                                  variant: "body2",
                                  component: "span",
                                  fontWeight: "medium",
                                  noWrap: true,
                                  children: qt(z.column.columnDef.header, z.getContext())
                                }),
                                n.data.tableColumnMenu !== false && u.jsx(He, {
                                  title: S.t("json_table_column_menu"),
                                  children: u.jsx(je, {
                                    size: "small",
                                    "aria-label": S.t("json_table_column_menu"),
                                    onClick: (ge) => {
                                      ge.stopPropagation(), ye(z.column, ge.currentTarget);
                                    },
                                    sx: {
                                      ml: 0.5,
                                      opacity: 0.6
                                    },
                                    children: u.jsx(hc, {
                                      fontSize: "inherit"
                                    })
                                  })
                                })
                              ]
                            })
                          }, z.id);
                        })
                      }, I.id)),
                      n.data.tableFiltering === true && u.jsx(Rt, {
                        children: (_b = N.getHeaderGroups()[0]) == null ? void 0 : _b.headers.map((I) => {
                          if (I.column.id === "__select__") return u.jsx(Qe, {
                            padding: "checkbox",
                            sx: {
                              py: 0.5,
                              px: 0.5
                            }
                          }, I.id);
                          if (!I.column.getCanFilter()) return u.jsx(Qe, {
                            sx: {
                              py: 0.5,
                              px: 0.5
                            }
                          }, I.id);
                          const z = I.column.getFilterValue() ?? "";
                          return u.jsx(Qe, {
                            sx: {
                              py: 0.5,
                              px: 0.5,
                              verticalAlign: "bottom"
                            },
                            children: u.jsx(et, {
                              size: "small",
                              variant: "standard",
                              fullWidth: true,
                              value: z,
                              onChange: (K) => I.column.setFilterValue(K.target.value || void 0),
                              placeholder: S.t("json_table_filter_placeholder"),
                              slotProps: {
                                input: {
                                  endAdornment: z ? u.jsx(fo, {
                                    position: "end",
                                    children: u.jsx(He, {
                                      title: S.t("json_table_filter_clear"),
                                      children: u.jsx(je, {
                                        size: "small",
                                        onClick: () => I.column.setFilterValue(void 0),
                                        "aria-label": S.t("json_table_filter_clear"),
                                        children: u.jsx(go, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  }) : void 0
                                }
                              }
                            })
                          }, I.id);
                        })
                      })
                    ]
                  }),
                  u.jsx(Ma, {
                    children: Ee ? u.jsxs(u.Fragment, {
                      children: [
                        nt > 0 && u.jsx(Rt, {
                          children: u.jsx(Qe, {
                            colSpan: x.length,
                            sx: {
                              height: nt,
                              p: 0,
                              border: "none"
                            }
                          })
                        }),
                        Ee.map((I) => {
                          const z = $e[I.index], K = I.index;
                          return u.jsx(Rt, {
                            sx: {
                              height: p,
                              ...Te(K)
                            },
                            children: z.getVisibleCells().map((E) => {
                              var _a3, _b2;
                              const fe = E.column.id === "__select__", Re = !fe && ((_a3 = E.column.columnDef.meta) == null ? void 0 : _a3.getCellSx) ? E.column.columnDef.meta.getCellSx(E.getValue()) : {};
                              return u.jsx(Qe, {
                                align: ((_b2 = E.column.columnDef.meta) == null ? void 0 : _b2.align) || "left",
                                padding: fe ? "checkbox" : "normal",
                                sx: {
                                  ...se,
                                  ...Re
                                },
                                children: qt(E.column.columnDef.cell, E.getContext())
                              }, E.id);
                            })
                          }, z.id);
                        }),
                        lt > 0 && u.jsx(Rt, {
                          children: u.jsx(Qe, {
                            colSpan: x.length,
                            sx: {
                              height: lt,
                              p: 0,
                              border: "none"
                            }
                          })
                        })
                      ]
                    }) : $e.map((I, z) => u.jsx(Rt, {
                      sx: {
                        height: p,
                        ...Te(z)
                      },
                      children: I.getVisibleCells().map((K) => {
                        var _a3, _b2;
                        const E = K.column.id === "__select__", fe = !E && ((_a3 = K.column.columnDef.meta) == null ? void 0 : _a3.getCellSx) ? K.column.columnDef.meta.getCellSx(K.getValue()) : {};
                        return u.jsx(Qe, {
                          align: ((_b2 = K.column.columnDef.meta) == null ? void 0 : _b2.align) || "left",
                          padding: E ? "checkbox" : "normal",
                          sx: {
                            ...se,
                            ...fe
                          },
                          children: qt(K.column.columnDef.cell, K.getContext())
                        }, K.id);
                      })
                    }, I.id))
                  })
                ]
              })
            }),
            n.data.tablePagination !== false && u.jsx(rc, {
              component: "div",
              count: N.getFilteredRowModel().rows.length,
              page: M.pageIndex,
              rowsPerPage: M.pageSize,
              rowsPerPageOptions: T,
              onPageChange: (I, z) => D((K) => ({
                ...K,
                pageIndex: z
              })),
              onRowsPerPageChange: (I) => D({
                pageIndex: 0,
                pageSize: parseInt(I.target.value, 10)
              }),
              labelRowsPerPage: u.jsx(k, {
                variant: "body2",
                component: "span",
                children: S.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: I, to: z, count: K }) => u.jsx(k, {
                variant: "body2",
                component: "span",
                children: `${I}\u2013${z} / ${K}`
              })
            }),
            u.jsxs(Ei, {
              anchorEl: O,
              open: !!O,
              onClose: ie,
              children: [
                u.jsxs(rt, {
                  onClick: () => {
                    G.current && _([
                      {
                        id: G.current.id,
                        desc: false
                      }
                    ]), ie();
                  },
                  children: [
                    u.jsx(qr, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    u.jsx(k, {
                      variant: "body2",
                      children: S.t("json_table_sort_asc")
                    })
                  ]
                }),
                u.jsxs(rt, {
                  onClick: () => {
                    G.current && _([
                      {
                        id: G.current.id,
                        desc: true
                      }
                    ]), ie();
                  },
                  children: [
                    u.jsx(Ur, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    u.jsx(k, {
                      variant: "body2",
                      children: S.t("json_table_sort_desc")
                    })
                  ]
                }),
                Oe && u.jsx(rt, {
                  onClick: () => {
                    _([]), ie();
                  },
                  children: u.jsx(k, {
                    variant: "body2",
                    children: S.t("json_table_sort_clear")
                  })
                }),
                n.data.tableFiltering === true && ((_c2 = G.current) == null ? void 0 : _c2.getCanFilter()) === true && de && u.jsxs(rt, {
                  onClick: () => {
                    var _a3;
                    (_a3 = G.current) == null ? void 0 : _a3.setFilterValue(void 0), ie();
                  },
                  children: [
                    u.jsx(go, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    u.jsx(k, {
                      variant: "body2",
                      children: S.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            })
          ]
        }) : u.jsx(Y, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: u.jsx(k, {
            variant: "body2",
            color: "text.secondary",
            children: s ? S.t("json_table_no_data") : S.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Td = [
    "columnConfig",
    "tableDensity",
    "tableRowHeight",
    "tableHeaderHeight",
    "tableAutoSize",
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
  _o = class extends S {
    static createObjectFields() {
      const t = Ni([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (i, s, l, a) => {
          if (!s.oid) {
            for (const c of Td) delete s[c];
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
              ...Ho()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ..._o.createObjectFields(),
              ...Cu()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Ho({
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
      return _o.getWidgetInfo();
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
      return Li(this.wrapContent(u.jsx(Dd, {})), n);
    }
  };
});
export {
  __tla,
  _o as default
};
