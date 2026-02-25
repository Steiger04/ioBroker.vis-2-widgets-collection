import { g as be, a as we, u as Ce, Z as ji, _ as Ri, $ as Cn, a0 as Ht, h as qt, j as c, s as q, d as se, e as Se, a1 as Jo, m as pe, a2 as Lr, b as ie, P as at, B as Gn, c as ce, I as Me, W, a3 as vo, M as xo, X as Tt, a4 as un, a5 as Mi, f as Xo, a6 as $i, a7 as Oo, i as Oe, a8 as Vr, a9 as mn, U as Ai, aa as Pi, T, ab as Ko, ac as Ii, ad as Hr, ae as bo, af as Fi, ag as Qo, ah as zi, R as Bt, o as U, ai as ke, G as C, aj as ki, ak as Ti, al as ln, am as an, D as Di, w as Wt, an as Oi, ao as Ei, C as ht, F as ro, ap as Ni, n as Li, q as Vi, x as Hi, y as Bi, aq as Wi, A as Gi, z as Zo, E as Ui, __tla as __tla_0 } from "./useData-B9ZrPGFV.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as yn, __tla as __tla_2 } from "./Checkbox-C1s5DkiE.js";
import { S as Ne, __tla as __tla_3 } from "./Stack-BXcGSMV_.js";
import { T as Br, a as Un, __tla as __tla_4 } from "./ToggleButtonGroup-Du_vpcqa.js";
import { M as Ie, __tla as __tla_5 } from "./MenuItem-CBPgh-ig.js";
import { C as Wr, __tla as __tla_6 } from "./Close-BaVCh89c.js";
import { B as vn, __tla as __tla_7 } from "./Button-B-tNf451.js";
import { F as mt, __tla as __tla_8 } from "./FormControlLabel-CnJhmOqm.js";
import { S as kt, __tla as __tla_9 } from "./Switch-sFS5B12S.js";
import { S as qi, __tla as __tla_10 } from "./Slider-Bri4S_1w.js";
import { D as Yi, a as Ji, b as Xi, __tla as __tla_11 } from "./DialogTitle-DKPM9osg.js";
import { u as Ki, __tla as __tla_12 } from "./useOidValue-Dudms15G.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Bo6-_dj-.js";
import { __tla as __tla_14 } from "./listItemTextClasses-B9pgY4io.js";
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
  function Qi(e) {
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
  const Zi = (e) => {
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
    return Se(o, Qi, n);
  }, es = q("div", {
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
  }))), ts = q("div", {
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
  }), ns = q("div", {
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
  }), wo = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: i, className: s, collapsedSize: l = "0px", component: a, easing: u, in: d, onEnter: f, onEntered: g, onEntering: p, onExit: h, onExited: m, onExiting: x, orientation: b = "vertical", style: S, timeout: j = ji.standard, TransitionComponent: R = Ri, ...M } = o, P = {
      ...o,
      orientation: b,
      collapsedSize: l
    }, z = Zi(P), v = Cn(), _ = Ht(), w = y.useRef(null), $ = y.useRef(), O = typeof l == "number" ? `${l}px` : l, F = b === "horizontal", L = F ? "width" : "height", E = y.useRef(null), N = qt(n, E), D = (k) => (te) => {
      if (k) {
        const re = E.current;
        te === void 0 ? k(re) : k(re, te);
      }
    }, J = () => w.current ? w.current[F ? "clientWidth" : "clientHeight"] : 0, K = D((k, te) => {
      w.current && F && (w.current.style.position = "absolute"), k.style[L] = O, f && f(k, te);
    }), oe = D((k, te) => {
      const re = J();
      w.current && F && (w.current.style.position = "");
      const { duration: ze, easing: Ve } = Jo({
        style: S,
        timeout: j,
        easing: u
      }, {
        mode: "enter"
      });
      if (j === "auto") {
        const Ee = v.transitions.getAutoHeightDuration(re);
        k.style.transitionDuration = `${Ee}ms`, $.current = Ee;
      } else k.style.transitionDuration = typeof ze == "string" ? ze : `${ze}ms`;
      k.style[L] = `${re}px`, k.style.transitionTimingFunction = Ve, p && p(k, te);
    }), ue = D((k, te) => {
      k.style[L] = "auto", g && g(k, te);
    }), $e = D((k) => {
      k.style[L] = `${J()}px`, h && h(k);
    }), Ae = D(m), _e = D((k) => {
      const te = J(), { duration: re, easing: ze } = Jo({
        style: S,
        timeout: j,
        easing: u
      }, {
        mode: "exit"
      });
      if (j === "auto") {
        const Ve = v.transitions.getAutoHeightDuration(te);
        k.style.transitionDuration = `${Ve}ms`, $.current = Ve;
      } else k.style.transitionDuration = typeof re == "string" ? re : `${re}ms`;
      k.style[L] = O, k.style.transitionTimingFunction = ze, x && x(k);
    }), ae = (k) => {
      j === "auto" && _.start($.current || 0, k), r && r(E.current, k);
    };
    return c.jsx(R, {
      in: d,
      onEnter: K,
      onEntered: ue,
      onEntering: oe,
      onExit: $e,
      onExited: Ae,
      onExiting: _e,
      addEndListener: ae,
      nodeRef: E,
      timeout: j === "auto" ? null : j,
      ...M,
      children: (k, { ownerState: te, ...re }) => c.jsx(es, {
        as: a,
        className: se(z.root, s, {
          entered: z.entered,
          exited: !d && O === "0px" && z.hidden
        }[k]),
        style: {
          [F ? "minWidth" : "minHeight"]: O,
          ...S
        },
        ref: N,
        ownerState: {
          ...P,
          state: k
        },
        ...re,
        children: c.jsx(ts, {
          ownerState: {
            ...P,
            state: k
          },
          className: z.wrapper,
          ref: w,
          children: c.jsx(ns, {
            ownerState: {
              ...P,
              state: k
            },
            className: z.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  wo && (wo.muiSupportAuto = true);
  const Gr = y.createContext({});
  function os(e) {
    return be("MuiAccordion", e);
  }
  const Mn = we("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), rs = (e) => {
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
    }, os, t);
  }, is = q(at, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Mn.region}`]: t.region
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
      [`&.${Mn.expanded}`]: {
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
      [`&.${Mn.disabled}`]: {
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
          [`&.${Mn.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), ss = q("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), $n = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: i, defaultExpanded: s = false, disabled: l = false, disableGutters: a = false, expanded: u, onChange: d, square: f = false, slots: g = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: m, ...x } = o, [b, S] = Lr({
      controlled: u,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), j = y.useCallback((J) => {
      S(!b), d && d(J, !b);
    }, [
      b,
      d,
      S
    ]), [R, ...M] = y.Children.toArray(r), P = y.useMemo(() => ({
      expanded: b,
      disabled: l,
      disableGutters: a,
      toggle: j
    }), [
      b,
      l,
      a,
      j
    ]), z = {
      ...o,
      square: f,
      disabled: l,
      disableGutters: a,
      expanded: b
    }, v = rs(z), _ = {
      transition: h,
      ...g
    }, w = {
      transition: m,
      ...p
    }, $ = {
      slots: _,
      slotProps: w
    }, [O, F] = ie("root", {
      elementType: is,
      externalForwardedProps: {
        ...$,
        ...x
      },
      className: se(v.root, i),
      shouldForwardComponentProp: true,
      ownerState: z,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [L, E] = ie("heading", {
      elementType: ss,
      externalForwardedProps: $,
      className: v.heading,
      ownerState: z
    }), [N, D] = ie("transition", {
      elementType: wo,
      externalForwardedProps: $,
      ownerState: z
    });
    return c.jsxs(O, {
      ...F,
      children: [
        c.jsx(L, {
          ...E,
          children: c.jsx(Gr.Provider, {
            value: P,
            children: R
          })
        }),
        c.jsx(N, {
          in: b,
          timeout: "auto",
          ...D,
          children: c.jsx("div", {
            "aria-labelledby": R.props.id,
            id: R.props["aria-controls"],
            role: "region",
            className: v.region,
            children: M
          })
        })
      ]
    });
  });
  function ls(e) {
    return be("MuiAccordionDetails", e);
  }
  we("MuiAccordionDetails", [
    "root"
  ]);
  const as = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, ls, t);
  }, cs = q("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), An = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...i } = o, s = o, l = as(s);
    return c.jsx(cs, {
      className: se(l.root, r),
      ref: n,
      ownerState: s,
      ...i
    });
  });
  function us(e) {
    return be("MuiAccordionSummary", e);
  }
  const Gt = we("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), ds = (e) => {
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
    }, us, t);
  }, ps = q(Gn, {
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
      [`&.${Gt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Gt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Gt.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Gt.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), fs = q("span", {
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
          [`&.${Gt.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), gs = q("span", {
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
    [`&.${Gt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Pn = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: i, expandIcon: s, focusVisibleClassName: l, onClick: a, slots: u, slotProps: d, ...f } = o, { disabled: g = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(Gr), x = (w) => {
      m && m(w), a && a(w);
    }, b = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: p
    }, S = ds(b), j = {
      slots: u,
      slotProps: d
    }, [R, M] = ie("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(S.root, i),
      elementType: ps,
      externalForwardedProps: {
        ...j,
        ...f
      },
      ownerState: b,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: se(S.focusVisible, l)
      },
      getSlotProps: (w) => ({
        ...w,
        onClick: ($) => {
          var _a2;
          (_a2 = w.onClick) == null ? void 0 : _a2.call(w, $), x($);
        }
      })
    }), [P, z] = ie("content", {
      className: S.content,
      elementType: fs,
      externalForwardedProps: j,
      ownerState: b
    }), [v, _] = ie("expandIconWrapper", {
      className: S.expandIconWrapper,
      elementType: gs,
      externalForwardedProps: j,
      ownerState: b
    });
    return c.jsxs(R, {
      ...M,
      children: [
        c.jsx(P, {
          ...z,
          children: r
        }),
        s && c.jsx(v, {
          ..._,
          children: s
        })
      ]
    });
  });
  function hs(e) {
    return be("MuiAlert", e);
  }
  const er = we("MuiAlert", [
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
  ]), ms = ce(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), ys = ce(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), vs = ce(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), xs = ce(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), bs = ce(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), ws = (e) => {
    const { variant: t, color: n, severity: o, classes: r } = e, i = {
      root: [
        "root",
        `color${W(n || o)}`,
        `${t}${W(n || o)}`,
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
    return Se(i, hs, r);
  }, Cs = q(at, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${W(n.color || n.severity)}`]
      ];
    }
  })(pe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? vo : xo, n = e.palette.mode === "light" ? xo : vo;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Tt([
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
        ...Object.entries(e.palette).filter(Tt([
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
        ...Object.entries(e.palette).filter(Tt([
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
  })), Ss = q("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), _s = q("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), js = q("div", {
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
    success: c.jsx(ms, {
      fontSize: "inherit"
    }),
    warning: c.jsx(ys, {
      fontSize: "inherit"
    }),
    error: c.jsx(vs, {
      fontSize: "inherit"
    }),
    info: c.jsx(xs, {
      fontSize: "inherit"
    })
  }, nr = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: i, className: s, closeText: l = "Close", color: a, components: u = {}, componentsProps: d = {}, icon: f, iconMapping: g = tr, onClose: p, role: h = "alert", severity: m = "success", slotProps: x = {}, slots: b = {}, variant: S = "standard", ...j } = o, R = {
      ...o,
      color: a,
      severity: m,
      variant: S,
      colorSeverity: a || m
    }, M = ws(R), P = {
      slots: {
        closeButton: u.CloseButton,
        closeIcon: u.CloseIcon,
        ...b
      },
      slotProps: {
        ...d,
        ...x
      }
    }, [z, v] = ie("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(M.root, s),
      elementType: Cs,
      externalForwardedProps: {
        ...P,
        ...j
      },
      ownerState: R,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [_, w] = ie("icon", {
      className: M.icon,
      elementType: Ss,
      externalForwardedProps: P,
      ownerState: R
    }), [$, O] = ie("message", {
      className: M.message,
      elementType: _s,
      externalForwardedProps: P,
      ownerState: R
    }), [F, L] = ie("action", {
      className: M.action,
      elementType: js,
      externalForwardedProps: P,
      ownerState: R
    }), [E, N] = ie("closeButton", {
      elementType: Me,
      externalForwardedProps: P,
      ownerState: R
    }), [D, J] = ie("closeIcon", {
      elementType: bs,
      externalForwardedProps: P,
      ownerState: R
    });
    return c.jsxs(z, {
      ...v,
      children: [
        f !== false ? c.jsx(_, {
          ...w,
          children: f || g[m] || tr[m]
        }) : null,
        c.jsx($, {
          ...O,
          children: i
        }),
        r != null ? c.jsx(F, {
          ...L,
          children: r
        }) : null,
        r == null && p ? c.jsx(F, {
          ...L,
          children: c.jsx(E, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...N,
            children: c.jsx(D, {
              fontSize: "small",
              ...J
            })
          })
        }) : null
      ]
    });
  });
  var Ge = "top", rt = "bottom", it = "right", Ue = "left", Eo = "auto", Sn = [
    Ge,
    rt,
    it,
    Ue
  ], Yt = "start", xn = "end", Rs = "clippingParents", Ur = "viewport", Qt = "popper", Ms = "reference", or = Sn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Yt,
      t + "-" + xn
    ]);
  }, []), qr = [].concat(Sn, [
    Eo
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Yt,
      t + "-" + xn
    ]);
  }, []), $s = "beforeRead", As = "read", Ps = "afterRead", Is = "beforeMain", Fs = "main", zs = "afterMain", ks = "beforeWrite", Ts = "write", Ds = "afterWrite", Os = [
    $s,
    As,
    Ps,
    Is,
    Fs,
    zs,
    ks,
    Ts,
    Ds
  ];
  function ft(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Xe(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Ot(e) {
    var t = Xe(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function ot(e) {
    var t = Xe(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function No(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Xe(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Es(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
      !ot(i) || !ft(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
        var l = r[s];
        l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
      }));
    });
  }
  function Ns(e) {
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
        var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = s.reduce(function(a, u) {
          return a[u] = "", a;
        }, {});
        !ot(r) || !ft(r) || (Object.assign(r.style, l), Object.keys(i).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Ls = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Es,
    effect: Ns,
    requires: [
      "computeStyles"
    ]
  };
  function pt(e) {
    return e.split("-")[0];
  }
  var Dt = Math.max, qn = Math.min, Jt = Math.round;
  function Co() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Yr() {
    return !/^((?!chrome|android).)*safari/i.test(Co());
  }
  function Xt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, i = 1;
    t && ot(e) && (r = e.offsetWidth > 0 && Jt(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Jt(o.height) / e.offsetHeight || 1);
    var s = Ot(e) ? Xe(e) : window, l = s.visualViewport, a = !Yr() && n, u = (o.left + (a && l ? l.offsetLeft : 0)) / r, d = (o.top + (a && l ? l.offsetTop : 0)) / i, f = o.width / r, g = o.height / i;
    return {
      width: f,
      height: g,
      top: d,
      right: u + f,
      bottom: d + g,
      left: u,
      x: u,
      y: d
    };
  }
  function Lo(e) {
    var t = Xt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Jr(e, t) {
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
  function bt(e) {
    return Xe(e).getComputedStyle(e);
  }
  function Vs(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(ft(e)) >= 0;
  }
  function Pt(e) {
    return ((Ot(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Qn(e) {
    return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (No(e) ? e.host : null) || Pt(e);
  }
  function rr(e) {
    return !ot(e) || bt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Hs(e) {
    var t = /firefox/i.test(Co()), n = /Trident/i.test(Co());
    if (n && ot(e)) {
      var o = bt(e);
      if (o.position === "fixed") return null;
    }
    var r = Qn(e);
    for (No(r) && (r = r.host); ot(r) && [
      "html",
      "body"
    ].indexOf(ft(r)) < 0; ) {
      var i = bt(r);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function _n(e) {
    for (var t = Xe(e), n = rr(e); n && Vs(n) && bt(n).position === "static"; ) n = rr(n);
    return n && (ft(n) === "html" || ft(n) === "body" && bt(n).position === "static") ? t : n || Hs(e) || t;
  }
  function Vo(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function dn(e, t, n) {
    return Dt(e, qn(t, n));
  }
  function Bs(e, t, n) {
    var o = dn(e, t, n);
    return o > n ? n : o;
  }
  function Xr() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Kr(e) {
    return Object.assign({}, Xr(), e);
  }
  function Qr(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Ws = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Kr(typeof t != "number" ? t : Qr(t, Sn));
  };
  function Gs(e) {
    var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = pt(n.placement), a = Vo(l), u = [
      Ue,
      it
    ].indexOf(l) >= 0, d = u ? "height" : "width";
    if (!(!i || !s)) {
      var f = Ws(r.padding, n), g = Lo(i), p = a === "y" ? Ge : Ue, h = a === "y" ? rt : it, m = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], x = s[a] - n.rects.reference[a], b = _n(i), S = b ? a === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, j = m / 2 - x / 2, R = f[p], M = S - g[d] - f[h], P = S / 2 - g[d] / 2 + j, z = dn(R, P, M), v = a;
      n.modifiersData[o] = (t = {}, t[v] = z, t.centerOffset = z - P, t);
    }
  }
  function Us(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Jr(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const qs = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Gs,
    effect: Us,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Kt(e) {
    return e.split("-")[1];
  }
  var Ys = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Js(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Jt(n * r) / r || 0,
      y: Jt(o * r) / r || 0
    };
  }
  function ir(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = s.x, p = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, x = typeof d == "function" ? d({
      x: p,
      y: m
    }) : {
      x: p,
      y: m
    };
    p = x.x, m = x.y;
    var b = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), j = Ue, R = Ge, M = window;
    if (u) {
      var P = _n(n), z = "clientHeight", v = "clientWidth";
      if (P === Xe(n) && (P = Pt(n), bt(P).position !== "static" && l === "absolute" && (z = "scrollHeight", v = "scrollWidth")), P = P, r === Ge || (r === Ue || r === it) && i === xn) {
        R = rt;
        var _ = f && P === M && M.visualViewport ? M.visualViewport.height : P[z];
        m -= _ - o.height, m *= a ? 1 : -1;
      }
      if (r === Ue || (r === Ge || r === rt) && i === xn) {
        j = it;
        var w = f && P === M && M.visualViewport ? M.visualViewport.width : P[v];
        p -= w - o.width, p *= a ? 1 : -1;
      }
    }
    var $ = Object.assign({
      position: l
    }, u && Ys), O = d === true ? Js({
      x: p,
      y: m
    }, Xe(n)) : {
      x: p,
      y: m
    };
    if (p = O.x, m = O.y, a) {
      var F;
      return Object.assign({}, $, (F = {}, F[R] = S ? "0" : "", F[j] = b ? "0" : "", F.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", F));
    }
    return Object.assign({}, $, (t = {}, t[R] = S ? m + "px" : "", t[j] = b ? p + "px" : "", t.transform = "", t));
  }
  function Xs(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, u = {
      placement: pt(t.placement),
      variation: Kt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ir(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ir(Object.assign({}, u, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Ks = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Xs,
    data: {}
  };
  var In = {
    passive: true
  };
  function Qs(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? true : r, s = o.resize, l = s === void 0 ? true : s, a = Xe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function(d) {
      d.addEventListener("scroll", n.update, In);
    }), l && a.addEventListener("resize", n.update, In), function() {
      i && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, In);
      }), l && a.removeEventListener("resize", n.update, In);
    };
  }
  const Zs = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Qs,
    data: {}
  };
  var el = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Vn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return el[t];
    });
  }
  var tl = {
    start: "end",
    end: "start"
  };
  function sr(e) {
    return e.replace(/start|end/g, function(t) {
      return tl[t];
    });
  }
  function Ho(e) {
    var t = Xe(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Bo(e) {
    return Xt(Pt(e)).left + Ho(e).scrollLeft;
  }
  function nl(e, t) {
    var n = Xe(e), o = Pt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
    if (r) {
      i = r.width, s = r.height;
      var u = Yr();
      (u || !u && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l + Bo(e),
      y: a
    };
  }
  function ol(e) {
    var t, n = Pt(e), o = Ho(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Dt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Dt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Bo(e), a = -o.scrollTop;
    return bt(r || n).direction === "rtl" && (l += Dt(n.clientWidth, r ? r.clientWidth : 0) - i), {
      width: i,
      height: s,
      x: l,
      y: a
    };
  }
  function Wo(e) {
    var t = bt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function Zr(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : ot(e) && Wo(e) ? e : Zr(Qn(e));
  }
  function pn(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Zr(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Xe(o), s = r ? [
      i
    ].concat(i.visualViewport || [], Wo(o) ? o : []) : o, l = t.concat(s);
    return r ? l : l.concat(pn(Qn(s)));
  }
  function So(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function rl(e, t) {
    var n = Xt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function lr(e, t, n) {
    return t === Ur ? So(nl(e, n)) : Ot(t) ? rl(t, n) : So(ol(Pt(e)));
  }
  function il(e) {
    var t = pn(Qn(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(bt(e).position) >= 0, o = n && ot(e) ? _n(e) : e;
    return Ot(o) ? t.filter(function(r) {
      return Ot(r) && Jr(r, o) && ft(r) !== "body";
    }) : [];
  }
  function sl(e, t, n, o) {
    var r = t === "clippingParents" ? il(e) : [].concat(t), i = [].concat(r, [
      n
    ]), s = i[0], l = i.reduce(function(a, u) {
      var d = lr(e, u, o);
      return a.top = Dt(d.top, a.top), a.right = qn(d.right, a.right), a.bottom = qn(d.bottom, a.bottom), a.left = Dt(d.left, a.left), a;
    }, lr(e, s, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function ei(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? pt(o) : null, i = o ? Kt(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case Ge:
        a = {
          x: s,
          y: t.y - n.height
        };
        break;
      case rt:
        a = {
          x: s,
          y: t.y + t.height
        };
        break;
      case it:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case Ue:
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
    var u = r ? Vo(r) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (i) {
        case Yt:
          a[u] = a[u] - (t[d] / 2 - n[d] / 2);
          break;
        case xn:
          a[u] = a[u] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return a;
  }
  function bn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? Rs : l, u = n.rootBoundary, d = u === void 0 ? Ur : u, f = n.elementContext, g = f === void 0 ? Qt : f, p = n.altBoundary, h = p === void 0 ? false : p, m = n.padding, x = m === void 0 ? 0 : m, b = Kr(typeof x != "number" ? x : Qr(x, Sn)), S = g === Qt ? Ms : Qt, j = e.rects.popper, R = e.elements[h ? S : g], M = sl(Ot(R) ? R : R.contextElement || Pt(e.elements.popper), a, d, s), P = Xt(e.elements.reference), z = ei({
      reference: P,
      element: j,
      placement: r
    }), v = So(Object.assign({}, j, z)), _ = g === Qt ? v : P, w = {
      top: M.top - _.top + b.top,
      bottom: _.bottom - M.bottom + b.bottom,
      left: M.left - _.left + b.left,
      right: _.right - M.right + b.right
    }, $ = e.modifiersData.offset;
    if (g === Qt && $) {
      var O = $[r];
      Object.keys(w).forEach(function(F) {
        var L = [
          it,
          rt
        ].indexOf(F) >= 0 ? 1 : -1, E = [
          Ge,
          rt
        ].indexOf(F) >= 0 ? "y" : "x";
        w[F] += O[E] * L;
      });
    }
    return w;
  }
  function ll(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? qr : a, d = Kt(o), f = d ? l ? or : or.filter(function(h) {
      return Kt(h) === d;
    }) : Sn, g = f.filter(function(h) {
      return u.indexOf(h) >= 0;
    });
    g.length === 0 && (g = f);
    var p = g.reduce(function(h, m) {
      return h[m] = bn(e, {
        placement: m,
        boundary: r,
        rootBoundary: i,
        padding: s
      })[pt(m)], h;
    }, {});
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  function al(e) {
    if (pt(e) === Eo) return [];
    var t = Vn(e);
    return [
      sr(e),
      t,
      sr(t)
    ];
  }
  function cl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, m = n.allowedAutoPlacements, x = t.options.placement, b = pt(x), S = b === x, j = a || (S || !h ? [
        Vn(x)
      ] : al(x)), R = [
        x
      ].concat(j).reduce(function(_e, ae) {
        return _e.concat(pt(ae) === Eo ? ll(t, {
          placement: ae,
          boundary: d,
          rootBoundary: f,
          padding: u,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ae);
      }, []), M = t.rects.reference, P = t.rects.popper, z = /* @__PURE__ */ new Map(), v = true, _ = R[0], w = 0; w < R.length; w++) {
        var $ = R[w], O = pt($), F = Kt($) === Yt, L = [
          Ge,
          rt
        ].indexOf(O) >= 0, E = L ? "width" : "height", N = bn(t, {
          placement: $,
          boundary: d,
          rootBoundary: f,
          altBoundary: g,
          padding: u
        }), D = L ? F ? it : Ue : F ? rt : Ge;
        M[E] > P[E] && (D = Vn(D));
        var J = Vn(D), K = [];
        if (i && K.push(N[O] <= 0), l && K.push(N[D] <= 0, N[J] <= 0), K.every(function(_e) {
          return _e;
        })) {
          _ = $, v = false;
          break;
        }
        z.set($, K);
      }
      if (v) for (var oe = h ? 3 : 1, ue = function(ae) {
        var k = R.find(function(te) {
          var re = z.get(te);
          if (re) return re.slice(0, ae).every(function(ze) {
            return ze;
          });
        });
        if (k) return _ = k, "break";
      }, $e = oe; $e > 0; $e--) {
        var Ae = ue($e);
        if (Ae === "break") break;
      }
      t.placement !== _ && (t.modifiersData[o]._skip = true, t.placement = _, t.reset = true);
    }
  }
  const ul = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: cl,
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
      Ge,
      it,
      rt,
      Ue
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function dl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = bn(t, {
      elementContext: "reference"
    }), l = bn(t, {
      altBoundary: true
    }), a = ar(s, o), u = ar(l, r, i), d = cr(a), f = cr(u);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: u,
      isReferenceHidden: d,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": f
    });
  }
  const pl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: dl
  };
  function fl(e, t, n) {
    var o = pt(e), r = [
      Ue,
      Ge
    ].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * r, [
      Ue,
      it
    ].indexOf(o) >= 0 ? {
      x: l,
      y: s
    } : {
      x: s,
      y: l
    };
  }
  function gl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [
      0,
      0
    ] : r, s = qr.reduce(function(d, f) {
      return d[f] = fl(f, t.rects, i), d;
    }, {}), l = s[t.placement], a = l.x, u = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
  }
  const hl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: gl
  };
  function ml(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = ei({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const yl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: ml,
    data: {}
  };
  function vl(e) {
    return e === "x" ? "y" : "x";
  }
  function xl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, g = n.tether, p = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, x = bn(t, {
      boundary: a,
      rootBoundary: u,
      padding: f,
      altBoundary: d
    }), b = pt(t.placement), S = Kt(t.placement), j = !S, R = Vo(b), M = vl(R), P = t.modifiersData.popperOffsets, z = t.rects.reference, v = t.rects.popper, _ = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, w = typeof _ == "number" ? {
      mainAxis: _,
      altAxis: _
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, _), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
      x: 0,
      y: 0
    };
    if (P) {
      if (i) {
        var F, L = R === "y" ? Ge : Ue, E = R === "y" ? rt : it, N = R === "y" ? "height" : "width", D = P[R], J = D + x[L], K = D - x[E], oe = p ? -v[N] / 2 : 0, ue = S === Yt ? z[N] : v[N], $e = S === Yt ? -v[N] : -z[N], Ae = t.elements.arrow, _e = p && Ae ? Lo(Ae) : {
          width: 0,
          height: 0
        }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xr(), k = ae[L], te = ae[E], re = dn(0, z[N], _e[N]), ze = j ? z[N] / 2 - oe - re - k - w.mainAxis : ue - re - k - w.mainAxis, Ve = j ? -z[N] / 2 + oe + re + te + w.mainAxis : $e + re + te + w.mainAxis, Ee = t.elements.arrow && _n(t.elements.arrow), de = Ee ? R === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, je = (F = $ == null ? void 0 : $[R]) != null ? F : 0, Pe = D + ze - je - de, Qe = D + Ve - je, Ze = dn(p ? qn(J, Pe) : J, D, p ? Dt(K, Qe) : K);
        P[R] = Ze, O[R] = Ze - D;
      }
      if (l) {
        var He, wt = R === "x" ? Ge : Ue, Ct = R === "x" ? rt : it, qe = P[M], gt = M === "y" ? "height" : "width", ut = qe + x[wt], St = qe - x[Ct], et = [
          Ge,
          Ue
        ].indexOf(b) !== -1, _t = (He = $ == null ? void 0 : $[M]) != null ? He : 0, It = et ? ut : qe - z[gt] - v[gt] - _t + w.altAxis, st = et ? qe + z[gt] + v[gt] - _t - w.altAxis : St, Ft = p && et ? Bs(It, qe, st) : dn(p ? It : ut, qe, p ? st : St);
        P[M] = Ft, O[M] = Ft - qe;
      }
      t.modifiersData[o] = O;
    }
  }
  const bl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: xl,
    requiresIfExists: [
      "offset"
    ]
  };
  function wl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Cl(e) {
    return e === Xe(e) || !ot(e) ? Ho(e) : wl(e);
  }
  function Sl(e) {
    var t = e.getBoundingClientRect(), n = Jt(t.width) / e.offsetWidth || 1, o = Jt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function _l(e, t, n) {
    n === void 0 && (n = false);
    var o = ot(t), r = ot(t) && Sl(t), i = Pt(t), s = Xt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((ft(t) !== "body" || Wo(i)) && (l = Cl(t)), ot(t) ? (a = Xt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Bo(i))), {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function jl(e) {
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
  function Rl(e) {
    var t = jl(e);
    return Os.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Ml(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function $l(e) {
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
  function Al(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? ur : r;
    return function(l, a, u) {
      u === void 0 && (u = i);
      var d = {
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
      }, f = [], g = false, p = {
        state: d,
        setOptions: function(b) {
          var S = typeof b == "function" ? b(d.options) : b;
          m(), d.options = Object.assign({}, i, d.options, S), d.scrollParents = {
            reference: Ot(l) ? pn(l) : l.contextElement ? pn(l.contextElement) : [],
            popper: pn(a)
          };
          var j = Rl($l([].concat(o, d.options.modifiers)));
          return d.orderedModifiers = j.filter(function(R) {
            return R.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!g) {
            var b = d.elements, S = b.reference, j = b.popper;
            if (dr(S, j)) {
              d.rects = {
                reference: _l(S, _n(j), d.options.strategy === "fixed"),
                popper: Lo(j)
              }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(w) {
                return d.modifiersData[w.name] = Object.assign({}, w.data);
              });
              for (var R = 0; R < d.orderedModifiers.length; R++) {
                if (d.reset === true) {
                  d.reset = false, R = -1;
                  continue;
                }
                var M = d.orderedModifiers[R], P = M.fn, z = M.options, v = z === void 0 ? {} : z, _ = M.name;
                typeof P == "function" && (d = P({
                  state: d,
                  options: v,
                  name: _,
                  instance: p
                }) || d);
              }
            }
          }
        },
        update: Ml(function() {
          return new Promise(function(x) {
            p.forceUpdate(), x(d);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!dr(l, a)) return p;
      p.setOptions(u).then(function(x) {
        !g && u.onFirstUpdate && u.onFirstUpdate(x);
      });
      function h() {
        d.orderedModifiers.forEach(function(x) {
          var b = x.name, S = x.options, j = S === void 0 ? {} : S, R = x.effect;
          if (typeof R == "function") {
            var M = R({
              state: d,
              name: b,
              instance: p,
              options: j
            }), P = function() {
            };
            f.push(M || P);
          }
        });
      }
      function m() {
        f.forEach(function(x) {
          return x();
        }), f = [];
      }
      return p;
    };
  }
  var Pl = [
    Zs,
    yl,
    Ks,
    Ls,
    hl,
    ul,
    bl,
    qs,
    pl
  ], Il = Al({
    defaultModifiers: Pl
  });
  function Fl(e) {
    return be("MuiPopper", e);
  }
  we("MuiPopper", [
    "root"
  ]);
  function zl(e, t) {
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
  function kl(e) {
    return e.nodeType !== void 0;
  }
  const Tl = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Fl, t);
  }, Dl = {}, Ol = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: i, disablePortal: s, modifiers: l, open: a, placement: u, popperOptions: d, popperRef: f, slotProps: g = {}, slots: p = {}, TransitionProps: h, ownerState: m, ...x } = t, b = y.useRef(null), S = qt(b, n), j = y.useRef(null), R = qt(j, f), M = y.useRef(R);
    Xo(() => {
      M.current = R;
    }, [
      R
    ]), y.useImperativeHandle(f, () => j.current, []);
    const P = zl(u, i), [z, v] = y.useState(P), [_, w] = y.useState(_o(o));
    y.useEffect(() => {
      j.current && j.current.forceUpdate();
    }), y.useEffect(() => {
      o && w(_o(o));
    }, [
      o
    ]), Xo(() => {
      if (!_ || !a) return;
      const E = (J) => {
        v(J.placement);
      };
      let N = [
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
          fn: ({ state: J }) => {
            E(J);
          }
        }
      ];
      l != null && (N = N.concat(l)), d && d.modifiers != null && (N = N.concat(d.modifiers));
      const D = Il(_, b.current, {
        placement: P,
        ...d,
        modifiers: N
      });
      return M.current(D), () => {
        D.destroy(), M.current(null);
      };
    }, [
      _,
      s,
      l,
      a,
      d,
      P
    ]);
    const $ = {
      placement: z
    };
    h !== null && ($.TransitionProps = h);
    const O = Tl(t), F = p.root ?? "div", L = $i({
      elementType: F,
      externalSlotProps: g.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: S
      },
      ownerState: t,
      className: O.root
    });
    return c.jsx(F, {
      ...L,
      children: typeof r == "function" ? r($) : r
    });
  }), El = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: u, open: d, placement: f = "bottom", popperOptions: g = Dl, popperRef: p, style: h, transition: m = false, slotProps: x = {}, slots: b = {}, ...S } = t, [j, R] = y.useState(true), M = () => {
      R(false);
    }, P = () => {
      R(true);
    };
    if (!a && !d && (!m || j)) return null;
    let z;
    if (i) z = i;
    else if (o) {
      const w = _o(o);
      z = w && kl(w) ? un(w).body : un(null).body;
    }
    const v = !d && a && (!m || j) ? "none" : void 0, _ = m ? {
      in: d,
      onEnter: M,
      onExited: P
    } : void 0;
    return c.jsx(Mi, {
      disablePortal: l,
      container: z,
      children: c.jsx(Ol, {
        anchorEl: o,
        direction: s,
        disablePortal: l,
        modifiers: u,
        ref: n,
        open: m ? !j : d,
        placement: f,
        popperOptions: g,
        popperRef: p,
        slotProps: x,
        slots: b,
        ...S,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: v,
          ...h
        },
        TransitionProps: _,
        children: r
      })
    });
  }), Nl = q(El, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), ti = y.forwardRef(function(t, n) {
    const o = Oo(), r = Ce({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: s, components: l, componentsProps: a, container: u, disablePortal: d, keepMounted: f, modifiers: g, open: p, placement: h, popperOptions: m, popperRef: x, transition: b, slots: S, slotProps: j, ...R } = r, M = (S == null ? void 0 : S.root) ?? (l == null ? void 0 : l.Root), P = {
      anchorEl: i,
      container: u,
      disablePortal: d,
      keepMounted: f,
      modifiers: g,
      open: p,
      placement: h,
      popperOptions: m,
      popperRef: x,
      transition: b,
      ...R
    };
    return c.jsx(Nl, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: M
      },
      slotProps: j ?? a,
      ...P,
      ref: n
    });
  }), Ll = ce(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Vl(e) {
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
  ]), Hl = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: i, onDelete: s, clickable: l, variant: a } = e, u = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${W(o)}`,
        `color${W(r)}`,
        l && "clickable",
        l && `clickableColor${W(r)}`,
        s && "deletable",
        s && `deletableColor${W(r)}`,
        `${a}${W(r)}`
      ],
      label: [
        "label",
        `label${W(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${W(o)}`,
        `avatarColor${W(r)}`
      ],
      icon: [
        "icon",
        `icon${W(o)}`,
        `iconColor${W(i)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${W(o)}`,
        `deleteIconColor${W(r)}`,
        `deleteIcon${W(a)}Color${W(r)}`
      ]
    };
    return Se(u, Vl, t);
  }, Bl = q("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: i, onDelete: s, size: l, variant: a } = n;
      return [
        {
          [`& .${X.avatar}`]: t.avatar
        },
        {
          [`& .${X.avatar}`]: t[`avatar${W(l)}`]
        },
        {
          [`& .${X.avatar}`]: t[`avatarColor${W(o)}`]
        },
        {
          [`& .${X.icon}`]: t.icon
        },
        {
          [`& .${X.icon}`]: t[`icon${W(l)}`]
        },
        {
          [`& .${X.icon}`]: t[`iconColor${W(r)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIcon${W(l)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIconColor${W(o)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIcon${W(a)}Color${W(o)}`]
        },
        t.root,
        t[`size${W(l)}`],
        t[`color${W(o)}`],
        i && t.clickable,
        i && o !== "default" && t[`clickableColor${W(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${W(o)}`],
        t[a],
        t[`${a}${W(o)}`]
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
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Oe(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Oe(e.palette.text.primary, 0.4)
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
        ...Object.entries(e.palette).filter(Tt([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${X.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Oe(e.palette[n].contrastText, 0.7),
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Oe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Tt([
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Oe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Oe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Tt([
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
        ...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Oe(e.palette[n].main, 0.7)}`,
            [`&.${X.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Oe(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Oe(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${X.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Oe(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Wl = q("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${W(o)}`]
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
  const Hn = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: i, clickable: s, color: l = "default", component: a, deleteIcon: u, disabled: d = false, icon: f, label: g, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: x, size: b = "medium", variant: S = "filled", tabIndex: j, skipFocusWhenDisabled: R = false, ...M } = o, P = y.useRef(null), z = qt(P, n), v = (K) => {
      K.stopPropagation(), h && h(K);
    }, _ = (K) => {
      K.currentTarget === K.target && pr(K) && K.preventDefault(), m && m(K);
    }, w = (K) => {
      K.currentTarget === K.target && h && pr(K) && h(K), x && x(K);
    }, $ = s !== false && p ? true : s, O = $ || h ? Gn : a || "div", F = {
      ...o,
      component: O,
      disabled: d,
      size: b,
      color: l,
      iconColor: y.isValidElement(f) && f.props.color || l,
      onDelete: !!h,
      clickable: $,
      variant: S
    }, L = Hl(F), E = O === Gn ? {
      component: a || "div",
      focusVisibleClassName: L.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let N = null;
    h && (N = u && y.isValidElement(u) ? y.cloneElement(u, {
      className: se(u.props.className, L.deleteIcon),
      onClick: v
    }) : c.jsx(Ll, {
      className: se(L.deleteIcon),
      onClick: v
    }));
    let D = null;
    r && y.isValidElement(r) && (D = y.cloneElement(r, {
      className: se(L.avatar, r.props.className)
    }));
    let J = null;
    return f && y.isValidElement(f) && (J = y.cloneElement(f, {
      className: se(L.icon, f.props.className)
    })), c.jsxs(Bl, {
      as: O,
      className: se(L.root, i),
      disabled: $ && d ? true : void 0,
      onClick: p,
      onKeyDown: _,
      onKeyUp: w,
      ref: z,
      tabIndex: R && d ? -1 : j,
      ownerState: F,
      ...E,
      ...M,
      children: [
        D || J,
        c.jsx(Wl, {
          className: se(L.label),
          ownerState: F,
          children: g
        }),
        N
      ]
    });
  });
  function Gl(e) {
    return be("MuiCard", e);
  }
  we("MuiCard", [
    "root"
  ]);
  const Ul = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Gl, t);
  }, ql = q(at, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Yl = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: i = false, ...s } = o, l = {
      ...o,
      raised: i
    }, a = Ul(l);
    return c.jsx(ql, {
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
  function Jl(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Xl(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: i = "onTouchEnd" } = e, s = y.useRef(false), l = y.useRef(null), a = y.useRef(false), u = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const d = qt(Vr(t), l), f = mn((h) => {
      const m = u.current;
      u.current = false;
      const x = un(l.current);
      if (!a.current || !l.current || "clientX" in h && Jl(h, x)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let b;
      h.composedPath ? b = h.composedPath().includes(l.current) : b = !x.documentElement.contains(h.target) || l.current.contains(h.target), !b && (n || !m) && r(h);
    }), g = (h) => (m) => {
      u.current = true;
      const x = t.props[h];
      x && x(m);
    }, p = {
      ref: d
    };
    return i !== false && (p[i] = g(i)), y.useEffect(() => {
      if (i !== false) {
        const h = fr(i), m = un(l.current), x = () => {
          s.current = true;
        };
        return m.addEventListener(h, f), m.addEventListener("touchmove", x), () => {
          m.removeEventListener(h, f), m.removeEventListener("touchmove", x);
        };
      }
    }, [
      f,
      i
    ]), o !== false && (p[o] = g(o)), y.useEffect(() => {
      if (o !== false) {
        const h = fr(o), m = un(l.current);
        return m.addEventListener(h, f), () => {
          m.removeEventListener(h, f);
        };
      }
    }, [
      f,
      o
    ]), y.cloneElement(t, p);
  }
  function Kl(e) {
    return be("MuiDialogActions", e);
  }
  we("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const Ql = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Se({
      root: [
        "root",
        !n && "spacing"
      ]
    }, Kl, t);
  }, Zl = q("div", {
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
  }), ea = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: i = false, ...s } = o, l = {
      ...o,
      disableSpacing: i
    }, a = Ql(l);
    return c.jsx(Zl, {
      className: se(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  });
  function ta(e) {
    return be("MuiInputAdornment", e);
  }
  const gr = we("MuiInputAdornment", [
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
  const na = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${W(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, oa = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: i, variant: s } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${W(r)}`,
        s,
        o && "hiddenLabel",
        i && `size${W(i)}`
      ]
    };
    return Se(l, ta, t);
  }, ra = q("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: na
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
  }))), jo = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: i, component: s = "div", disablePointerEvents: l = false, disableTypography: a = false, position: u, variant: d, ...f } = o, g = Ai() || {};
    let p = d;
    d && g.variant, g && !p && (p = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: u,
      variant: p
    }, m = oa(h);
    return c.jsx(Pi.Provider, {
      value: null,
      children: c.jsx(ra, {
        as: s,
        ownerState: h,
        className: se(m.root, i),
        ref: n,
        ...f,
        children: typeof r == "string" && !a ? c.jsx(T, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(y.Fragment, {
          children: [
            u === "start" ? hr || (hr = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), ia = ce(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), sa = ce(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function la(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: i } = e, s = Ht();
    y.useEffect(() => {
      if (!r) return;
      function b(S) {
        S.defaultPrevented || S.key === "Escape" && (o == null ? void 0 : o(S, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", b), () => {
        document.removeEventListener("keydown", b);
      };
    }, [
      r,
      o
    ]);
    const l = mn((b, S) => {
      o == null ? void 0 : o(b, S);
    }), a = mn((b) => {
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
    const u = (b) => {
      o == null ? void 0 : o(b, "clickaway");
    }, d = s.clear, f = y.useCallback(() => {
      t != null && a(i ?? t * 0.5);
    }, [
      t,
      i,
      a
    ]), g = (b) => (S) => {
      const j = b.onBlur;
      j == null ? void 0 : j(S), f();
    }, p = (b) => (S) => {
      const j = b.onFocus;
      j == null ? void 0 : j(S), d();
    }, h = (b) => (S) => {
      const j = b.onMouseEnter;
      j == null ? void 0 : j(S), d();
    }, m = (b) => (S) => {
      const j = b.onMouseLeave;
      j == null ? void 0 : j(S), f();
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
      getRootProps: (b = {}) => {
        const S = {
          ...Ko(e),
          ...Ko(b)
        };
        return {
          role: "presentation",
          ...b,
          ...S,
          onBlur: g(S),
          onFocus: p(S),
          onMouseEnter: h(S),
          onMouseLeave: m(S)
        };
      },
      onClickAway: u
    };
  }
  function aa(e) {
    return be("MuiSnackbarContent", e);
  }
  we("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const ca = (e) => {
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
    }, aa, t);
  }, ua = q(at, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Ii(e.palette.background.default, t);
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
  })), da = q("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), pa = q("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), fa = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: i, message: s, role: l = "alert", ...a } = o, u = o, d = ca(u);
    return c.jsxs(ua, {
      role: l,
      square: true,
      elevation: 6,
      className: se(d.root, i),
      ownerState: u,
      ref: n,
      ...a,
      children: [
        c.jsx(da, {
          className: d.message,
          ownerState: u,
          children: s
        }),
        r ? c.jsx(pa, {
          className: d.action,
          ownerState: u,
          children: r
        }) : null
      ]
    });
  });
  function ga(e) {
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
  const ha = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${W(n.vertical)}${W(n.horizontal)}`
      ]
    };
    return Se(o, ga, t);
  }, ma = q("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${W(n.anchorOrigin.vertical)}${W(n.anchorOrigin.horizontal)}`]
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
  }))), ya = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiSnackbar"
    }), r = Cn(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: u = null, children: d, className: f, ClickAwayListenerProps: g, ContentProps: p, disableWindowBlurListener: h = false, message: m, onBlur: x, onClose: b, onFocus: S, onMouseEnter: j, onMouseLeave: R, open: M, resumeHideDuration: P, slots: z = {}, slotProps: v = {}, TransitionComponent: _, transitionDuration: w = i, TransitionProps: { onEnter: $, onExited: O, ...F } = {}, ...L } = o, E = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: u,
      disableWindowBlurListener: h,
      TransitionComponent: _,
      transitionDuration: w
    }, N = ha(E), { getRootProps: D, onClickAway: J } = la({
      ...E
    }), [K, oe] = y.useState(true), ue = (je) => {
      oe(true), O && O(je);
    }, $e = (je, Pe) => {
      oe(false), $ && $(je, Pe);
    }, Ae = {
      slots: {
        transition: _,
        ...z
      },
      slotProps: {
        content: p,
        clickAwayListener: g,
        transition: F,
        ...v
      }
    }, [_e, ae] = ie("root", {
      ref: n,
      className: [
        N.root,
        f
      ],
      elementType: ma,
      getSlotProps: D,
      externalForwardedProps: {
        ...Ae,
        ...L
      },
      ownerState: E
    }), [k, { ownerState: te, ...re }] = ie("clickAwayListener", {
      elementType: Xl,
      externalForwardedProps: Ae,
      getSlotProps: (je) => ({
        onClickAway: (...Pe) => {
          var _a2;
          (_a2 = je.onClickAway) == null ? void 0 : _a2.call(je, ...Pe), J(...Pe);
        }
      }),
      ownerState: E
    }), [ze, Ve] = ie("content", {
      elementType: fa,
      shouldForwardComponentProp: true,
      externalForwardedProps: Ae,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: E
    }), [Ee, de] = ie("transition", {
      elementType: Hr,
      externalForwardedProps: Ae,
      getSlotProps: (je) => ({
        onEnter: (...Pe) => {
          var _a2;
          (_a2 = je.onEnter) == null ? void 0 : _a2.call(je, ...Pe), $e(...Pe);
        },
        onExited: (...Pe) => {
          var _a2;
          (_a2 = je.onExited) == null ? void 0 : _a2.call(je, ...Pe), ue(...Pe);
        }
      }),
      additionalProps: {
        appear: true,
        in: M,
        timeout: w,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: E
    });
    return !M && K ? null : c.jsx(k, {
      ...re,
      ...z.clickAwayListener && {
        ownerState: te
      },
      children: c.jsx(_e, {
        ...ae,
        children: c.jsx(Ee, {
          ...de,
          children: d || c.jsx(ze, {
            ...Ve
          })
        })
      })
    });
  });
  function va(e) {
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
  function xa(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const ba = (e) => {
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
        `tooltipPlacement${W(i.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return Se(s, va, t);
  }, wa = q(ti, {
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
  }))), Ca = q("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${W(n.placement.split("-")[0])}`]
      ];
    }
  })(pe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Oe(e.palette.grey[700], 0.92),
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
          lineHeight: `${xa(16 / 14)}em`,
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
  }))), Sa = q("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(pe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Oe(e.palette.grey[700], 0.9),
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
  let Fn = false;
  const mr = new Fi();
  let Zt = {
    x: 0,
    y: 0
  };
  function zn(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const We = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: i, classes: s, components: l = {}, componentsProps: a = {}, describeChild: u = false, disableFocusListener: d = false, disableHoverListener: f = false, disableInteractive: g = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: x = 700, followCursor: b = false, id: S, leaveDelay: j = 0, leaveTouchDelay: R = 1500, onClose: M, onOpen: P, open: z, placement: v = "bottom", PopperComponent: _, PopperProps: w = {}, slotProps: $ = {}, slots: O = {}, title: F, TransitionComponent: L, TransitionProps: E, ...N } = o, D = y.isValidElement(i) ? i : c.jsx("span", {
      children: i
    }), J = Cn(), K = Oo(), [oe, ue] = y.useState(), [$e, Ae] = y.useState(null), _e = y.useRef(false), ae = g || b, k = Ht(), te = Ht(), re = Ht(), ze = Ht(), [Ve, Ee] = Lr({
      controlled: z,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let de = Ve;
    const je = bo(S), Pe = y.useRef(), Qe = mn(() => {
      Pe.current !== void 0 && (document.body.style.WebkitUserSelect = Pe.current, Pe.current = void 0), ze.clear();
    });
    y.useEffect(() => Qe, [
      Qe
    ]);
    const Ze = (Y) => {
      mr.clear(), Fn = true, Ee(true), P && !de && P(Y);
    }, He = mn((Y) => {
      mr.start(800 + j, () => {
        Fn = false;
      }), Ee(false), M && de && M(Y), k.start(J.transitions.duration.shortest, () => {
        _e.current = false;
      });
    }), wt = (Y) => {
      _e.current && Y.type !== "touchstart" || (oe && oe.removeAttribute("title"), te.clear(), re.clear(), h || Fn && m ? te.start(Fn ? m : h, () => {
        Ze(Y);
      }) : Ze(Y));
    }, Ct = (Y) => {
      te.clear(), re.start(j, () => {
        He(Y);
      });
    }, [, qe] = y.useState(false), gt = (Y) => {
      Qo(Y.target) || (qe(false), Ct(Y));
    }, ut = (Y) => {
      oe || ue(Y.currentTarget), Qo(Y.target) && (qe(true), wt(Y));
    }, St = (Y) => {
      _e.current = true;
      const Rt = D.props;
      Rt.onTouchStart && Rt.onTouchStart(Y);
    }, et = (Y) => {
      St(Y), re.clear(), k.clear(), Qe(), Pe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ze.start(x, () => {
        document.body.style.WebkitUserSelect = Pe.current, wt(Y);
      });
    }, _t = (Y) => {
      D.props.onTouchEnd && D.props.onTouchEnd(Y), Qe(), re.start(R, () => {
        He(Y);
      });
    };
    y.useEffect(() => {
      if (!de) return;
      function Y(Rt) {
        Rt.key === "Escape" && He(Rt);
      }
      return document.addEventListener("keydown", Y), () => {
        document.removeEventListener("keydown", Y);
      };
    }, [
      He,
      de
    ]);
    const It = qt(Vr(D), ue, n);
    !F && F !== 0 && (de = false);
    const st = y.useRef(), Ft = (Y) => {
      const Rt = D.props;
      Rt.onMouseMove && Rt.onMouseMove(Y), Zt = {
        x: Y.clientX,
        y: Y.clientY
      }, st.current && st.current.update();
    }, zt = {}, Rn = typeof F == "string";
    u ? (zt.title = !de && Rn && !f ? F : null, zt["aria-describedby"] = de ? je : null) : (zt["aria-label"] = Rn ? F : null, zt["aria-labelledby"] = de && !Rn ? je : null);
    const Re = {
      ...zt,
      ...N,
      ...D.props,
      className: se(N.className, D.props.className),
      onTouchStart: St,
      ref: It,
      ...b ? {
        onMouseMove: Ft
      } : {}
    }, jt = {};
    p || (Re.onTouchStart = et, Re.onTouchEnd = _t), f || (Re.onMouseOver = zn(wt, Re.onMouseOver), Re.onMouseLeave = zn(Ct, Re.onMouseLeave), ae || (jt.onMouseOver = wt, jt.onMouseLeave = Ct)), d || (Re.onFocus = zn(ut, Re.onFocus), Re.onBlur = zn(gt, Re.onBlur), ae || (jt.onFocus = ut, jt.onBlur = gt));
    const dt = {
      ...o,
      isRtl: K,
      arrow: r,
      disableInteractive: ae,
      placement: v,
      PopperComponentProp: _,
      touch: _e.current
    }, A = typeof $.popper == "function" ? $.popper(dt) : $.popper, I = y.useMemo(() => {
      var _a2, _b;
      let Y = [
        {
          name: "arrow",
          enabled: !!$e,
          options: {
            element: $e,
            padding: 4
          }
        }
      ];
      return ((_a2 = w.popperOptions) == null ? void 0 : _a2.modifiers) && (Y = Y.concat(w.popperOptions.modifiers)), ((_b = A == null ? void 0 : A.popperOptions) == null ? void 0 : _b.modifiers) && (Y = Y.concat(A.popperOptions.modifiers)), {
        ...w.popperOptions,
        ...A == null ? void 0 : A.popperOptions,
        modifiers: Y
      };
    }, [
      $e,
      w.popperOptions,
      A == null ? void 0 : A.popperOptions
    ]), G = ba(dt), V = typeof $.transition == "function" ? $.transition(dt) : $.transition, he = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? L,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...O
      },
      slotProps: {
        arrow: $.arrow ?? a.arrow,
        popper: {
          ...w,
          ...A ?? a.popper
        },
        tooltip: $.tooltip ?? a.tooltip,
        transition: {
          ...E,
          ...V ?? a.transition
        }
      }
    }, [me, ne] = ie("popper", {
      elementType: wa,
      externalForwardedProps: he,
      ownerState: dt,
      className: se(G.popper, w == null ? void 0 : w.className)
    }), [ye, ve] = ie("transition", {
      elementType: Hr,
      externalForwardedProps: he,
      ownerState: dt
    }), [tt, Ye] = ie("tooltip", {
      elementType: Ca,
      className: G.tooltip,
      externalForwardedProps: he,
      ownerState: dt
    }), [no, oo] = ie("arrow", {
      elementType: Sa,
      className: G.arrow,
      externalForwardedProps: he,
      ownerState: dt,
      ref: Ae
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(D, Re),
        c.jsx(me, {
          as: _ ?? ti,
          placement: v,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: Zt.y,
              left: Zt.x,
              right: Zt.x,
              bottom: Zt.y,
              width: 0,
              height: 0
            })
          } : oe,
          popperRef: st,
          open: oe ? de : false,
          id: je,
          transition: true,
          ...jt,
          ...ne,
          popperOptions: I,
          children: ({ TransitionProps: Y }) => c.jsx(ye, {
            timeout: J.transitions.duration.shorter,
            ...Y,
            ...ve,
            children: c.jsxs(tt, {
              ...Ye,
              children: [
                F,
                r ? c.jsx(no, {
                  ...oo
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), ni = y.createContext();
  function _a(e) {
    return be("MuiTable", e);
  }
  we("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const ja = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return Se({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, _a, t);
  }, Ra = q("table", {
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
  }))), yr = "table", Ma = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTable"
    }), { className: r, component: i = yr, padding: s = "normal", size: l = "medium", stickyHeader: a = false, ...u } = o, d = {
      ...o,
      component: i,
      padding: s,
      size: l,
      stickyHeader: a
    }, f = ja(d), g = y.useMemo(() => ({
      padding: s,
      size: l,
      stickyHeader: a
    }), [
      s,
      l,
      a
    ]);
    return c.jsx(ni.Provider, {
      value: g,
      children: c.jsx(Ra, {
        as: i,
        role: i === yr ? null : "table",
        ref: n,
        className: se(f.root, r),
        ownerState: d,
        ...u
      })
    });
  }), Zn = y.createContext();
  function $a(e) {
    return be("MuiTableBody", e);
  }
  we("MuiTableBody", [
    "root"
  ]);
  const Aa = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, $a, t);
  }, Pa = q("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), Ia = {
    variant: "body"
  }, vr = "tbody", Fa = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: i = vr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Aa(l);
    return c.jsx(Zn.Provider, {
      value: Ia,
      children: c.jsx(Pa, {
        className: se(a.root, r),
        as: i,
        ref: n,
        role: i === vr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function za(e) {
    return be("MuiTableCell", e);
  }
  const ka = we("MuiTableCell", [
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
  ]), Ta = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: i, stickyHeader: s } = e, l = {
      root: [
        "root",
        n,
        s && "stickyHeader",
        o !== "inherit" && `align${W(o)}`,
        r !== "normal" && `padding${W(r)}`,
        `size${W(i)}`
      ]
    };
    return Se(l, za, t);
  }, Da = q("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${W(n.size)}`],
        n.padding !== "normal" && t[`padding${W(n.padding)}`],
        n.align !== "inherit" && t[`align${W(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? xo(Oe(e.palette.divider, 1), 0.88) : vo(Oe(e.palette.divider, 1), 0.68)}`,
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
          [`&.${ka.paddingCheckbox}`]: {
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
  }))), lt = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: i, component: s, padding: l, scope: a, size: u, sortDirection: d, variant: f, ...g } = o, p = y.useContext(ni), h = y.useContext(Zn), m = h && h.variant === "head";
    let x;
    s ? x = s : x = m ? "th" : "td";
    let b = a;
    x === "td" ? b = void 0 : !b && m && (b = "col");
    const S = f || h && h.variant, j = {
      ...o,
      align: r,
      component: x,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: u || (p && p.size ? p.size : "medium"),
      sortDirection: d,
      stickyHeader: S === "head" && p && p.stickyHeader,
      variant: S
    }, R = Ta(j);
    let M = null;
    return d && (M = d === "asc" ? "ascending" : "descending"), c.jsx(Da, {
      as: x,
      ref: n,
      className: se(R.root, i),
      "aria-sort": M,
      scope: b,
      ownerState: j,
      ...g
    });
  });
  function Oa(e) {
    return be("MuiTableContainer", e);
  }
  we("MuiTableContainer", [
    "root"
  ]);
  const Ea = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Oa, t);
  }, Na = q("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), La = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: i = "div", ...s } = o, l = {
      ...o,
      component: i
    }, a = Ea(l);
    return c.jsx(Na, {
      ref: n,
      as: i,
      className: se(a.root, r),
      ownerState: l,
      ...s
    });
  });
  function Va(e) {
    return be("MuiTableHead", e);
  }
  we("MuiTableHead", [
    "root"
  ]);
  const Ha = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Va, t);
  }, Ba = q("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Wa = {
    variant: "head"
  }, xr = "thead", Ga = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: i = xr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Ha(l);
    return c.jsx(Zn.Provider, {
      value: Wa,
      children: c.jsx(Ba, {
        as: i,
        className: se(a.root, r),
        ref: n,
        role: i === xr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Ua(e) {
    return be("MuiToolbar", e);
  }
  we("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const qa = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return Se({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Ua, t);
  }, Ya = q("div", {
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
  }))), oi = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: i = "div", disableGutters: s = false, variant: l = "regular", ...a } = o, u = {
      ...o,
      component: i,
      disableGutters: s,
      variant: l
    }, d = qa(u);
    return c.jsx(Ya, {
      as: i,
      className: se(d.root, r),
      ref: n,
      ownerState: u,
      ...a
    });
  }), Ja = ce(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Xa = ce(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Ka = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: i = false, getItemAriaLabel: s, nextIconButtonProps: l, onPageChange: a, page: u, rowsPerPage: d, showFirstButton: f, showLastButton: g, slots: p = {}, slotProps: h = {}, ...m } = t, x = Oo(), b = (ue) => {
      a(ue, 0);
    }, S = (ue) => {
      a(ue, u - 1);
    }, j = (ue) => {
      a(ue, u + 1);
    }, R = (ue) => {
      a(ue, Math.max(0, Math.ceil(r / d) - 1));
    }, M = p.firstButton ?? Me, P = p.lastButton ?? Me, z = p.nextButton ?? Me, v = p.previousButton ?? Me, _ = p.firstButtonIcon ?? ia, w = p.lastButtonIcon ?? sa, $ = p.nextButtonIcon ?? Xa, O = p.previousButtonIcon ?? Ja, F = x ? P : M, L = x ? z : v, E = x ? v : z, N = x ? M : P, D = x ? h.lastButton : h.firstButton, J = x ? h.nextButton : h.previousButton, K = x ? h.previousButton : h.nextButton, oe = x ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        f && c.jsx(F, {
          onClick: b,
          disabled: i || u === 0,
          "aria-label": s("first", u),
          title: s("first", u),
          ...D,
          children: x ? c.jsx(w, {
            ...h.lastButtonIcon
          }) : c.jsx(_, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(L, {
          onClick: S,
          disabled: i || u === 0,
          color: "inherit",
          "aria-label": s("previous", u),
          title: s("previous", u),
          ...J ?? o,
          children: x ? c.jsx($, {
            ...h.nextButtonIcon
          }) : c.jsx(O, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(E, {
          onClick: j,
          disabled: i || (r !== -1 ? u >= Math.ceil(r / d) - 1 : false),
          color: "inherit",
          "aria-label": s("next", u),
          title: s("next", u),
          ...K ?? l,
          children: x ? c.jsx(O, {
            ...h.previousButtonIcon
          }) : c.jsx($, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(N, {
          onClick: R,
          disabled: i || u >= Math.ceil(r / d) - 1,
          "aria-label": s("last", u),
          title: s("last", u),
          ...oe,
          children: x ? c.jsx(_, {
            ...h.firstButtonIcon
          }) : c.jsx(w, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Qa(e) {
    return be("MuiTablePagination", e);
  }
  const fn = we("MuiTablePagination", [
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
  var br;
  const Za = q(lt, {
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
  }))), ec = q(oi, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${fn.actions}`]: t.actions,
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
    [`& .${fn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), tc = q("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), nc = q("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), oc = q(Bt, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${fn.selectIcon}`]: t.selectIcon,
      [`& .${fn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${fn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), rc = q(Ie, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), ic = q("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function sc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function lc(e) {
    return `Go to ${e} page`;
  }
  const ac = (e) => {
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
    }, Qa, t);
  }, cc = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = Ka, backIconButtonProps: i, colSpan: s, component: l = lt, count: a, disabled: u = false, getItemAriaLabel: d = lc, labelDisplayedRows: f = sc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: m, page: x, rowsPerPage: b, rowsPerPageOptions: S = [
      10,
      25,
      50,
      100
    ], SelectProps: j = {}, showFirstButton: R = false, showLastButton: M = false, slotProps: P = {}, slots: z = {}, ...v } = o, _ = o, w = ac(_), $ = (P == null ? void 0 : P.select) ?? j, O = $.native ? "option" : rc;
    let F;
    (l === lt || l === "td") && (F = s || 1e3);
    const L = bo($.id), E = bo($.labelId), N = () => a === -1 ? (x + 1) * b : b === -1 ? a : Math.min(a, (x + 1) * b), D = {
      slots: z,
      slotProps: P
    }, [J, K] = ie("root", {
      ref: n,
      className: w.root,
      elementType: Za,
      externalForwardedProps: {
        ...D,
        component: l,
        ...v
      },
      ownerState: _,
      additionalProps: {
        colSpan: F
      }
    }), [oe, ue] = ie("toolbar", {
      className: w.toolbar,
      elementType: ec,
      externalForwardedProps: D,
      ownerState: _
    }), [$e, Ae] = ie("spacer", {
      className: w.spacer,
      elementType: tc,
      externalForwardedProps: D,
      ownerState: _
    }), [_e, ae] = ie("selectLabel", {
      className: w.selectLabel,
      elementType: nc,
      externalForwardedProps: D,
      ownerState: _,
      additionalProps: {
        id: E
      }
    }), [k, te] = ie("select", {
      className: w.select,
      elementType: oc,
      externalForwardedProps: D,
      ownerState: _
    }), [re, ze] = ie("menuItem", {
      className: w.menuItem,
      elementType: O,
      externalForwardedProps: D,
      ownerState: _
    }), [Ve, Ee] = ie("displayedRows", {
      className: w.displayedRows,
      elementType: ic,
      externalForwardedProps: D,
      ownerState: _
    });
    return c.jsx(J, {
      ...K,
      children: c.jsxs(oe, {
        ...ue,
        children: [
          c.jsx($e, {
            ...Ae
          }),
          S.length > 1 && c.jsx(_e, {
            ...ae,
            children: g
          }),
          S.length > 1 && c.jsx(k, {
            variant: "standard",
            ...!$.variant && {
              input: br || (br = c.jsx(zi, {}))
            },
            value: b,
            onChange: m,
            id: L,
            labelId: E,
            ...$,
            classes: {
              ...$.classes,
              root: se(w.input, w.selectRoot, ($.classes || {}).root),
              select: se(w.select, ($.classes || {}).select),
              icon: se(w.selectIcon, ($.classes || {}).icon)
            },
            disabled: u,
            ...te,
            children: S.map((de) => y.createElement(re, {
              ...ze,
              key: de.label ? de.label : de,
              value: de.value ? de.value : de
            }, de.label ? de.label : de))
          }),
          c.jsx(Ve, {
            ...Ee,
            children: f({
              from: a === 0 ? 0 : x * b + 1,
              to: N(),
              count: a === -1 ? -1 : a,
              page: x
            })
          }),
          c.jsx(r, {
            className: w.actions,
            backIconButtonProps: i,
            count: a,
            nextIconButtonProps: p,
            onPageChange: h,
            page: x,
            rowsPerPage: b,
            showFirstButton: R,
            showLastButton: M,
            slotProps: P.actions,
            slots: z.actions,
            getItemAriaLabel: d,
            disabled: u
          })
        ]
      })
    });
  });
  function uc(e) {
    return be("MuiTableRow", e);
  }
  const wr = we("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), dc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: i } = e;
    return Se({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        i && "footer"
      ]
    }, uc, t);
  }, pc = q("tr", {
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
    [`&.${wr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${wr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Oe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Cr = "tr", Nt = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: i = Cr, hover: s = false, selected: l = false, ...a } = o, u = y.useContext(Zn), d = {
      ...o,
      component: i,
      hover: s,
      selected: l,
      head: u && u.variant === "head",
      footer: u && u.variant === "footer"
    }, f = dc(d);
    return c.jsx(pc, {
      as: i,
      ref: n,
      className: se(f.root, r),
      role: i === Cr ? null : "row",
      ownerState: d,
      ...a
    });
  }), fc = ce(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function gc(e) {
    return be("MuiTableSortLabel", e);
  }
  const io = we("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), hc = (e) => {
    const { classes: t, direction: n, active: o } = e, r = {
      root: [
        "root",
        o && "active",
        `direction${W(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${W(n)}`
      ]
    };
    return Se(r, gc, t);
  }, mc = q(Gn, {
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
  }))), yc = q("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${W(n.direction)}`]
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
  }))), vc = y.forwardRef(function(t, n) {
    const o = Ce({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: i, className: s, direction: l = "asc", hideSortIcon: a = false, IconComponent: u = fc, slots: d = {}, slotProps: f = {}, ...g } = o, p = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: u
    }, h = hc(p), m = {
      slots: d,
      slotProps: f
    }, [x, b] = ie("root", {
      elementType: mc,
      externalForwardedProps: m,
      ownerState: p,
      className: se(h.root, s),
      ref: n
    }), [S, j] = ie("icon", {
      elementType: yc,
      externalForwardedProps: m,
      ownerState: p,
      className: h.icon
    });
    return c.jsxs(x, {
      disableRipple: true,
      component: "span",
      ...b,
      ...g,
      children: [
        i,
        a && !r ? null : c.jsx(S, {
          as: u,
          ...j
        })
      ]
    });
  }), ri = ce(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), ii = ce(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), si = ce(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), Ro = ce(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), xc = ce(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), kn = ce(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Sr = ce(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), _r = ce(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), bc = ce(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), wc = ce(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), cn = ce(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), li = ce(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Cc = ce(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Sc = ce(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), _c = ce(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), gn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function jc(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function Rc(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  const jr = "b64:";
  function ai(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(jr) ? Rc(e.slice(jr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Mc({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: i, loading: s }) {
    const [l, a] = y.useState(""), [u, d] = y.useState(null), [f, g] = y.useState(null), p = y.useRef(0), h = !l, m = y.useMemo(() => {
      if (!l) return e;
      const w = l.toLowerCase();
      return e.filter(($) => $.path.toLowerCase().includes(w) || $.headerName.toLowerCase().includes(w));
    }, [
      e,
      l
    ]), x = y.useMemo(() => e.filter((w) => w.visible).length, [
      e
    ]), b = y.useCallback((w, $) => {
      w.stopPropagation(), r(e.map((O) => O.path === $ ? {
        ...O,
        visible: !O.visible
      } : O));
    }, [
      e,
      r
    ]), S = y.useCallback((w) => {
      r(e.map(($) => ({
        ...$,
        visible: w
      })));
    }, [
      e,
      r
    ]), j = y.useCallback((w, $) => {
      w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", $), d($);
    }, []), R = y.useCallback((w, $) => {
      w.preventDefault(), p.current += 1, $ !== u && g($);
    }, [
      u
    ]), M = y.useCallback((w) => {
      w.preventDefault(), p.current -= 1, p.current <= 0 && (p.current = 0, g(null));
    }, []), P = y.useCallback((w) => {
      w.preventDefault(), w.dataTransfer.dropEffect = "move";
    }, []), z = y.useCallback((w, $) => {
      w.preventDefault(), p.current = 0, g(null), d(null);
      const O = w.dataTransfer.getData("text/plain");
      if (!O || O === $) return;
      const F = [
        ...e
      ], L = F.findIndex((D) => D.path === O), E = F.findIndex((D) => D.path === $);
      if (L === -1 || E === -1) return;
      const [N] = F.splice(L, 1);
      F.splice(E, 0, N), r(F);
    }, [
      e,
      r
    ]), v = y.useCallback(() => {
      p.current = 0, d(null), g(null);
    }, []), _ = y.useCallback(() => {
      r(e.map((w) => ({
        path: w.path,
        visible: true,
        headerName: w.path.split(".").pop() || w.path
      })));
    }, [
      e,
      r
    ]);
    return c.jsxs(U, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(oi, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            c.jsx(ke, {
              size: "small",
              placeholder: C.t("json_table_search_columns"),
              value: l,
              onChange: (w) => a(w.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(jo, {
                    position: "start",
                    children: c.jsx(li, {
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
            c.jsx(We, {
              title: C.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(Me, {
                  size: "small",
                  onClick: i,
                  disabled: s,
                  children: c.jsx(wc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(We, {
              title: C.t("json_table_show_all"),
              children: c.jsx(Me, {
                size: "small",
                onClick: () => S(true),
                children: c.jsx(Sc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(We, {
              title: C.t("json_table_hide_all"),
              children: c.jsx(Me, {
                size: "small",
                onClick: () => S(false),
                children: c.jsx(_c, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(We, {
              title: C.t("json_table_reset_all"),
              children: c.jsx(Me, {
                size: "small",
                onClick: _,
                children: c.jsx(cn, {
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
          children: m.length === 0 ? c.jsx(U, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(T, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? C.t("json_table_no_columns") : C.t("json_table_no_search_results")
            })
          }) : m.map((w) => {
            const $ = t.find((L) => L.path === w.path), O = n === w.path, F = ($ == null ? void 0 : $.type) || "string";
            return c.jsx(Yl, {
              onClick: () => o(w.path),
              draggable: h,
              onDragStart: h ? (L) => j(L, w.path) : void 0,
              onDragEnter: h ? (L) => R(L, w.path) : void 0,
              onDragLeave: h ? M : void 0,
              onDragOver: h ? P : void 0,
              onDrop: h ? (L) => z(L, w.path) : void 0,
              onDragEnd: h ? v : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: h ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: O ? "primary.main" : "divider",
                backgroundColor: O ? "action.selected" : "background.paper",
                opacity: u === w.path ? 0.4 : w.visible ? 1 : 0.55,
                borderTop: f === w.path ? "3px solid" : void 0,
                borderTopColor: f === w.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: O ? "action.selected" : "action.hover"
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
                  h && c.jsx(xc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  c.jsx(yn, {
                    checked: w.visible,
                    onClick: (L) => b(L, w.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  c.jsxs(U, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(T, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: w.path,
                        children: w.headerName || w.path
                      }),
                      w.headerName && w.headerName !== w.path && c.jsx(T, {
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
                        title: w.path,
                        children: w.path
                      })
                    ]
                  }),
                  c.jsx(Hn, {
                    label: F,
                    size: "small",
                    sx: {
                      backgroundColor: gn[F] || gn.string,
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
            }, w.path);
          })
        }),
        e.length > 0 && c.jsx(U, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(T, {
            variant: "caption",
            color: "text.secondary",
            children: [
              x,
              " / ",
              e.length,
              " ",
              C.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function so({ value: e, onChange: t, label: n }) {
    const o = Cn(), [r, i] = y.useState(null), s = y.useRef(null), [l, a] = y.useState(null), u = !!r;
    return y.useEffect(() => {
      if (!u || !l) return;
      const d = new ResizeObserver(() => {
        var _a2;
        (_a2 = s.current) == null ? void 0 : _a2.updatePosition();
      });
      return d.observe(l), () => {
        d.disconnect();
      };
    }, [
      u,
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
          onClick: (d) => {
            i(d.currentTarget);
          },
          children: [
            c.jsx(T, {
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
            e && c.jsx(Me, {
              size: "small",
              onClick: (d) => {
                d.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(Ro, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(ki, {
          action: s,
          open: u,
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
            children: c.jsx(Ti, {
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
  function Bn(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function ci(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: i = false } = t;
    let s = e.toFixed(n);
    if (i) {
      const [l, a] = s.split("."), u = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${u}.${a}` : u;
    }
    return `${o}${s}${r}`;
  }
  const $c = [
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
  function ui(e, t) {
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
  function di(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let o;
      if (typeof e == "string") {
        const a = e.trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
          const [u, d, f] = a.split("-").map(Number);
          o = new Date(u, d - 1, f);
        } else o = new Date(a);
      } else if (typeof e == "number") o = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) o = e;
      else return Bn(e);
      if (isNaN(o.getTime())) return Bn(e);
      const r = t || "yyyy-MM-dd", i = (a, u = 2) => String(a).padStart(u, "0"), s = {
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
      for (const [a, u] of Object.entries(s).sort((d, f) => f[0].length - d[0].length)) l = l.replaceAll(a, u);
      return l;
    } catch {
      return Bn(e);
    }
  }
  function Mo(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Bn(e);
  }
  function pi(e, t) {
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
  function fe(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Ac(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function xt(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        xt(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          xt(r, t - 1);
        }
      }
    }
    return e;
  }
  function Pc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+fe(e)) && t !== null) throw NaN;
    if (Number.isNaN(+fe(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Ic(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Fc(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function zc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function kc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function Tc(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let i = xt(r ? e[0] : n, o);
    for (let s = r; s < e.length; s++) i = xt(await t(i, e[s]), o);
    return i;
  }
  const Yn = {
    filter: Ic,
    some: Fc,
    every: zc,
    map: kc,
    reduce: Tc
  }, ee = /* @__PURE__ */ Symbol.for("json_logic_sync"), Le = /* @__PURE__ */ Symbol.for("json_logic_compiled"), nt = /* @__PURE__ */ Symbol.for("json_logic_original"), Rr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Et(e) {
    return typeof e == "function" ? e[ee] === true : Array.isArray(e) ? e.every(Et) : !(e && e.asyncMethod && !e.method);
  }
  function fi(e, t = true) {
    return e[ee] = t, e;
  }
  function wn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const lo = /* @__PURE__ */ new WeakMap();
  function Mr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (lo.has(e) || lo.set(e, Dc(e)), lo.get(e));
  }
  function Dc(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Oc(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), Et(t[r]) || (o.asyncDetected = true), n += (Et(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][Le] < "u" ? n += t[r][Le] : n += ge(t[r], o));
    return {
      [Le]: n
    };
  }
  function Ec(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Jn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Jn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Jn(r, t, n);
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
      return Et(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][ee] == "function" && t.methods[o][ee](e, {
        engine: t
      })) : $o(r, t) : false;
    }
    return true;
  }
  function ge(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: i = [], engine: s } = t;
    function l(d, f = false) {
      return Ec(d, f) ? JSON.stringify(d) : (i.push(d), `values[${i.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let d = "";
      for (let f = 0; f < e.length; f++) f > 0 && (d += ","), d += ge(e[f], t);
      return "[" + d + "]";
    }
    let a = false;
    function u(d) {
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
      if (!t.engine.disableInline && s.methods[f] && Jn(e, s, t)) return $o(e, s) ? l((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(s.run(e))})`) : (r.push(s.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
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
        a = !Et(s.methods[f]);
        const m = h[Mr(s.methods[f]) - 1] || h[2];
        return u(`engine.methods["${f}"](${p}(` + ge(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[f] && s.methods[f].asyncMethod);
        const m = Mr(a ? s.methods[f].asyncMethod : s.methods[f].method);
        let x = h[m - 1] || h[2];
        return a && typeof s.methods[f][ee] == "function" && s.methods[f][ee](g, {
          engine: s
        }) && (a = false, x = x.replace("engine", "engine.fallback")), s.methods[f] && !s.methods[f].lazy ? u(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(${p}(` + ge(g, t) + ")" + x + ")") : (n.push(g), u(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + x + ")"));
      }
    }
    return l(e);
  }
  function Xn(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Oc
    }, t));
    const n = ge(e, t);
    return Nc(e, n, t);
  }
  function Nc(e, t, n) {
    const { engine: o, methods: r, notTraversed: i, processing: s = [], values: l } = n, a = [];
    s.forEach((d, f) => {
      t = t.replace(`__%%%${f}%%%__`, d);
    });
    const u = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(u)(l, r, i, Yn, o, a, wn, fe, Ac, Pc, xt), {
      [ee]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Lc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Ut = Lc(), en = /* @__PURE__ */ new Map();
  function Vt(e) {
    if (en.has(e)) return en.get(e);
    en.size > 2048 && en.clear();
    const t = Vc(e);
    return en.set(e, t), t;
  }
  function Vc(e, t = ".", n = "\\", o = "/") {
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
      [ee]: true,
      method: ([e, t, n], o, r, i) => {
        const s = n === void 0 ? null : n, l = Vt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return s;
        return i.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const i = Vt(o);
          return Ut ? `((${ge(r, t)})${i.map((s) => `?.[${ge(s, t)}]`).join("")} ?? ${ge(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((s, l) => `(${s}||0)[${JSON.stringify(l)}]`, `(${ge(r, t)}||0)`)}, ${ge(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [nt]: true,
      [ee]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let i = 0;
        for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
        const s = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Vt(String(e));
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
          const r = Vt(n);
          if (!Ut) {
            const s = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${ge(o, t)})))`;
            return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
          }
          const i = `(context${r.map((s) => `?.[${JSON.stringify(s)}]`).join("")} ?? ${ge(o, t)})`;
          return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [ee]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Vt(String(e[o]));
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
      [ee]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = Ao.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = Ao.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [Le]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Hc = {
    ...Ao
  }, Z = {
    type: "Invalid Arguments"
  };
  function Fe(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Fe(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Fe(r, t, n);
    }
    return true;
  }
  function Be(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Be(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][ee] == "function" ? t.methods[o][ee](r, n) : t.methods[o][ee] : typeof t.methods[o][ee] == "function" ? t.methods[o][ee](r, n) : t.methods[o][ee] && Be(r, t, n);
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
  const tn = Wn("every", true), Q = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return fe(+e);
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
      if (e.length === 0) throw Z;
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return fe(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw Z;
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
      if (e.length < 2) throw Z;
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
      if (!e.length || typeof e[0] != "number") throw Z;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw Z;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw Z;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw Z;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: fi((e) => e, true),
      [ee]: () => true
    },
    if: {
      [nt]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
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
      [ee]: (e, t) => Be(e, t.engine, t),
      deterministic: (e, t) => Fe(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
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
    "<": Mt("<", (e, t) => e < t),
    "<=": Mt("<=", (e, t) => e <= t),
    ">": Mt(">", (e, t) => e > t),
    ">=": Mt(">=", (e, t) => e >= t),
    "==": Mt("==", (e, t) => e == t),
    "===": Mt("===", (e, t) => e === t),
    "!=": Mt("!=", (e, t) => e != t),
    "!==": Mt("!==", (e, t) => e !== t),
    or: {
      [ee]: (e, t) => Be(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = le(e[i], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), o.truthy(r)) return r;
        return r;
      },
      deterministic: (e, t) => Fe(e, t.engine, t),
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
      [ee]: (e, t) => Be(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        let r;
        for (let i = 0; i < e.length; i++) if (r = le(e[i], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Fe(e, t.engine, t),
      compile: (e, t) => Ut ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = ge(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${ge(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [ee]: (e, t) => Be(e, t.engine, t),
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
      deterministic: (e, t) => Fe(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && Fe(e, t.engine, {
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
      [ee]: (e, t) => Be(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = le(e[i], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), !o.truthy(r)) return r;
        return r;
      },
      lazy: true,
      deterministic: (e, t) => Fe(e, t.engine, t),
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
        if (!e) throw Z;
        const r = le(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw Z;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw Z;
        const r = await le(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw Z;
      },
      deterministic: (e, t) => Fe(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => Q.val.method(e, t, n, o, Rr) !== Rr,
      deterministic: false
    },
    val: {
      [nt]: true,
      [ee]: true,
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
          for (let u = 0; u < l; u++) i = n[a++], u === n.length - 1 && Array.isArray(i) && (n = i, i = i[0], a = 1);
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
          return Ut ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Be(e, t.engine, t) && Fe(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Ut ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (Ut ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: Wn("map"),
    some: {
      ...Wn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
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
      [ee]: tn[ee],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
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
        return tn.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${tn.compile([
        {
          [Le]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: tn.deterministic,
      lazy: tn.lazy
    },
    none: {
      [ee]: (e, t) => Be(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !Q.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await Q.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = Q.some.compile(e, t);
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
    filter: Wn("filter", true),
    reduce: {
      deterministic: (e, t) => Fe(e[0], t.engine, t) && Fe(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw Z;
        const { async: n } = t;
        let [o, r, i] = e;
        o = ge(o, t), typeof i < "u" && (i = ge(i, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = Xn(r, s);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!Et(r) || o.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${i}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        let [r, i, s] = e;
        s = xt(le(s, o, t, n), o.options.maxDepth), r = le(r, o, t, n) || [];
        let l = (a, u) => xt(o.run(i, {
          accumulator: a,
          current: u
        }, {
          above: [
            r,
            t,
            n
          ]
        }), o.options.maxDepth);
        if (o.optimizedMap.has(i) && typeof o.optimizedMap.get(i) == "function") {
          const a = o.optimizedMap.get(i);
          l = (u, d) => xt(a({
            accumulator: u,
            current: d
          }, [
            r,
            t,
            n
          ]), o.options.maxDepth);
        }
        return typeof s > "u" ? r.reduce(l) : r.reduce(l, s);
      },
      [ee]: (e, t) => Be(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Z;
        let [r, i, s] = e;
        return s = xt(await o.run(s, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], Yn.reduce(r, (l, a) => o.run(i, {
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
      [nt]: true,
      [ee]: true,
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
      [ee]: (e, t) => Be(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${Xn(e[o], {
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
        return Fe(n, t.engine, t) && Fe(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [ee]: (e, t) => Be(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        if (e && typeof e == "object") return Object.values(e).every((n) => Fe(n, t.engine, t));
        throw Z;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${ge(e[r], t)}`), o), []).join(",")} })`;
        throw Z;
      },
      asyncMethod: async (e, t, n, o) => await Yn.reduce(Object.keys(e), async (i, s) => {
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
  function Mt(e, t) {
    const n = {
      [Le]: e
    }, o = e.length === 3;
    return {
      method: (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw Z;
        if (r.length === 2) {
          const u = le(r[0], l, i, s), d = le(r[1], l, i, s);
          if (o || (typeof u == "string" || u === null) && (typeof d == "string" || d === null)) return t(u, d);
          if (Number.isNaN(+fe(u))) throw NaN;
          if (Number.isNaN(+fe(d)) && u !== null) throw NaN;
          return t(+u, +d);
        }
        let a = le(r[0], l, i, s);
        for (let u = 1; u < r.length; u++) {
          const d = le(r[u], l, i, s);
          if ((o || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
          if (Number.isNaN(+fe(d)) && a !== null) throw NaN;
          if (u === 1 && Number.isNaN(+fe(a))) throw NaN;
          if (!t(+a, +d)) return false;
          a = d;
        }
        return true;
      },
      asyncMethod: async (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw Z;
        if (r.length === 2) {
          const u = await le(r[0], l, i, s), d = await le(r[1], l, i, s);
          if (o || (typeof u == "string" || u === null) && (typeof d == "string" || d === null)) return t(u, d);
          if (Number.isNaN(+fe(u))) throw NaN;
          if (Number.isNaN(+fe(d)) && u !== null) throw NaN;
          return t(+u, +d);
        }
        let a = await le(r[0], l, i, s);
        for (let u = 1; u < r.length; u++) {
          const d = await le(r[u], l, i, s);
          if ((o || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
          if (Number.isNaN(+fe(d)) && a !== null) throw NaN;
          if (u === 1 && Number.isNaN(+fe(a))) throw NaN;
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
      [nt]: true,
      [ee]: (r, i) => Be(r, i.engine, i),
      deterministic: (r, i) => Fe(r, i.engine, i),
      lazy: true
    };
  }
  function Wn(e, t = false) {
    return {
      deterministic: (n, o) => Fe(n[0], o.engine, o) && Fe(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [nt]: true,
      [ee]: (n, o) => Be(n, o.engine, o),
      method: (n, o, r, i) => {
        if (!Array.isArray(n)) throw Z;
        let [s, l] = n;
        return s = le(s, i, o, r) || [], s[e]((a, u) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const d = le(l, i, a, [
            {
              iterator: s,
              index: u
            },
            o,
            r
          ]);
          return t ? i.truthy(d) : d;
        });
      },
      asyncMethod: async (n, o, r, i) => {
        if (!Array.isArray(n)) throw Z;
        let [s, l] = n;
        return s = await i.run(s, o, {
          above: r
        }) || [], Yn[e](s, async (a, u) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const d = await i.run(l, a, {
            above: [
              {
                iterator: s,
                index: u
              },
              o,
              r
            ]
          });
          return t ? i.truthy(d) : d;
        });
      },
      compile: (n, o) => {
        if (!Array.isArray(n)) throw Z;
        const { async: r } = o, [i, s] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = Xn(s, l), u = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, d = t ? o.compile`engine.truthy` : o.compile``;
        return r && !Et(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${d}(${a}(i, x, ${u})))`) : o.compile`(${i} || [])[${e}]((i, x, z) => ${d}(${a}(i, x, ${u})))`;
      },
      lazy: true
    };
  }
  Q.every = Q.all;
  Q["?:"] = Q.if;
  Object.keys(Q).forEach((e) => {
    typeof Q[e] == "function" && (Q[e][ee] = true), Q[e].deterministic = typeof Q[e].deterministic > "u" ? true : Q[e].deterministic;
  });
  Q.if.compile = function(e, t) {
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
  function jn(e, t) {
    if (Array.isArray(e)) return fe(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + ge(e, t);
    if (typeof e == "string") return "+" + fe(+e);
    const n = ge(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + fe(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? fe(NaN) : `(+precoerceNumber(${n}))`;
  }
  Q["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => jn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${ge(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  Q["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw Z;
      return `precoerceNumber(${e.map((n) => jn(n, t)).join(" % ")})`;
    }
    return `assertSize(${ge(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  Q.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  Q["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw Z;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => jn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${ge(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  Q["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw Z;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = jn(n, t);
        return o && r === "+0" && fe(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${ge(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  Q["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => jn(n, t)).join(" * ")})` : `(${ge(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  Q["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  Q.not = Q["!"];
  Q["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  Q.none.deterministic = Q.some.deterministic;
  Q.throw.deterministic = (e, t) => t.insideTry && Fe(e, t.engine, t);
  Q["+"].optimizeUnary = Q["-"].optimizeUnary = Q["!"].optimizeUnary = Q["!!"].optimizeUnary = Q.cat.optimizeUnary = Q.throw.optimizeUnary = true;
  const Bc = {
    ...Q,
    ...Hc
  }, Wc = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Gc(e, t, n, o) {
    const r = t.methods[n], i = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, u) => i(l, a, u || o, t);
    }
    let s = e[n];
    if ((!s || typeof s != "object") && !r.optimizeUnary && (s = [
      s
    ]), Array.isArray(s) && s.length === 1 && r.optimizeUnary && !Array.isArray(s[0]) && (s = s[0]), Array.isArray(s)) {
      const l = s.map((a) => De(a, t, o));
      if (l.every((a) => typeof a != "function")) return (a, u) => i(l, a, u || o, t);
      if (l.length === 1) {
        const a = l[0];
        return (u, d) => i([
          a(u, d)
        ], u, d || o, t);
      }
      if (l.length === 2) {
        const [a, u] = l;
        return typeof a == "function" && typeof u == "function" ? (d, f) => i([
          a(d, f),
          u(d, f)
        ], d, f || o, t) : typeof a == "function" ? (d, f) => i([
          a(d, f),
          u
        ], d, f || o, t) : (d, f) => i([
          a,
          u(d, f)
        ], d, f || o, t);
      }
      return (a, u) => {
        const d = l.map((f) => typeof f == "function" ? f(a, u) : f);
        return i(d, a, u || o, t);
      };
    } else {
      const l = De(s, t, o);
      if (r.optimizeUnary) {
        const a = (u) => !u || typeof u[l] > "u" || typeof u[l] == "function" && !t.allowFunctions ? null : u[l];
        if (typeof l == "function") return (u, d) => i(l(u, d), u, d || o, t);
        if ((n === "var" || n === "val") && t.methods[n][nt]) {
          if (!l && n !== "val") return (u) => u === null || typeof u > "u" || typeof u == "function" && !t.allowFunctions ? null : u;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const u = Vt(String(l));
            let d;
            if (u.length === 2) {
              const [f, g] = u;
              return (p) => (typeof (d = p && p[f] && p[f][g]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
            if (u.length === 3) {
              const [f, g, p] = u;
              return (h) => (typeof (d = h && h[f] && h[f][g] && h[f][g][p]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
          }
        }
        return (u, d) => i(l, u, d || o, t);
      }
      return typeof l == "function" ? (a, u) => i(wn(l(a, u)), a, u || o, t) : (a, u) => i(wn(l), a, u || o, t);
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
  function Uc(e, t, n) {
    if (e.val && t.methods.val[nt] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[nt] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, i] = e.if || e["?:"], s = De(o, t, n), l = De(r, t, n), a = De(i, t, n);
      return typeof s == "function" && typeof l == "function" && typeof a == "function" ? (u, d) => t.truthy(s(u, d)) ? l(u, d) : a(u, d) : typeof s == "function" && typeof l == "function" ? (u, d) => t.truthy(s(u, d)) ? l(u, d) : a : typeof s == "function" && typeof a == "function" ? (u, d) => t.truthy(s(u, d)) ? l : a(u, d) : typeof s == "function" ? (u, d) => t.truthy(s(u, d)) ? l : a : t.truthy(s) ? l : a;
    }
    if (e.filter && t.methods.filter[nt] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, i = De(r, t, n);
      if (typeof i != "function") return t.truthy(i) ? De(o, t, n) : [];
    }
    for (const o in $r) if (e[o] && Array.isArray(e[o]) && t.methods[o][nt]) {
      const r = $r[o], i = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+fe(l))) throw NaN;
        if (Number.isNaN(+fe(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [s, l] = e[o], a = De(s, t, n), u = De(l, t, n);
        return typeof a == "function" && typeof u == "function" ? (d, f) => i(a(d, f), u(d, f)) : typeof a == "function" ? (d, f) => i(a(d, f), u) : typeof u == "function" ? (d, f) => i(a, u(d, f)) : i(a, u);
      }
      if (e[o].length === 3) {
        const [s, l, a] = e[o], u = De(s, t, n), d = De(l, t, n), f = De(a, t, n);
        let g;
        return typeof u == "function" && typeof d == "function" && typeof f == "function" ? (p, h) => i(u(p, h), g = d(p, h)) && i(g, f(p, h)) : typeof u == "function" && typeof d == "function" ? (p, h) => i(u(p, h), g = d(p, h)) && i(g, f) : typeof u == "function" && typeof f == "function" ? (p, h) => i(u(p, h), d) && i(d, f(p, h)) : typeof d == "function" && typeof f == "function" ? (p, h) => i(u, g = d(p, h)) && i(g, f(p, h)) : typeof u == "function" ? (p, h) => i(u(p, h), d) && i(d, f) : typeof d == "function" ? (p, h) => i(u, g = d(p, h)) && i(g, f) : typeof f == "function" ? (p, h) => i(u, d) && i(d, f(p, h)) : i(u, d) && i(d, f);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, i] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const s = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (i = i || 0, s && l) return De({
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
        if (i = typeof i > "u" ? 1 : i, s && l) return De({
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
  function De(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => De(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, i) => o.map((s) => typeof s == "function" ? s(r, i) : s);
    }
    if (e && typeof e == "object") {
      const o = Uc(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), i = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, i)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Jn(e, t, {
        engine: t
      });
      if (i in t.methods) {
        const a = Gc(e, t, i, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: i
      };
    }
    return e;
  }
  class qc {
    constructor(t = Bc, n = {
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
      if ((r === "var" || r === "val") && this.methods[r][nt]) {
        const l = !s || typeof s != "object" ? s : this.run(s, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !s || typeof s != "object" ? [
          s
        ] : wn(this.run(s, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], u = a ? s : !s || typeof s != "object" ? [
          s
        ] : wn(this.run(s, n, {
          above: o
        }));
        return l(u, n, o, this);
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
      }, Object.assign(n, Wc({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = fi(n);
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
        this.optimizedMap.set(t, De(t, this, r)), this.missesSinceSeen++;
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
      const { above: o = [], top: r = true } = n, i = Xn(t, {
        engine: this,
        above: o
      });
      return r === false && i.deterministic ? i() : i;
    }
  }
  function Je(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const eo = new qc();
  eo.addMethod("contains", ([e, t]) => Je(e).includes(Je(t)), {
    deterministic: true
  });
  eo.addMethod("startsWith", ([e, t]) => Je(e).startsWith(Je(t)), {
    deterministic: true
  });
  eo.addMethod("endsWith", ([e, t]) => Je(e).endsWith(Je(t)), {
    deterministic: true
  });
  function nn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Po = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Yc = {
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
  }, Jc = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], Xc = {
    var: "value"
  };
  function Kc(e, t, n = "string") {
    const o = Number(t), r = n === "number", i = n === "date", s = Xc;
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
  const Qc = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function Zc(e, t = "string") {
    const n = e.conditions.filter((r) => Po.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && Qc.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => Kc(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function yt(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function ao(e) {
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
      if (Array.isArray(o) && o.length === 2 && yt(o[0])) return {
        operator: n,
        operand: Je(o[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && yt(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: Je(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && yt(t[0])) return {
        operator: "neq",
        operand: Je(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && yt(t[0])) return {
        operator: "contains",
        operand: Je(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && yt(t[0])) return {
        operator: "starts_with",
        operand: Je(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && yt(t[0])) return {
        operator: "ends_with",
        operand: Je(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const o = n["!!"];
          if (Array.isArray(o) && yt(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && yt(o[0])) return {
            operator: "not_contains",
            operand: Je(o[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && yt(t[0])) return {
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
          id: nn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => ao(r)).filter((r) => r !== null).map((r) => ({
          id: nn(),
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
        const o = n.map((r) => ao(r)).filter((r) => r !== null).map((r) => ({
          id: nn(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = ao(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: nn(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: nn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const eu = 200, on = /* @__PURE__ */ new Map();
  function tu(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = on.get(n);
      return o || (o = eo.build(e), on.size >= eu && on.delete(on.keys().next().value), on.set(n, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const nu = {
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
  function ou({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Ar(e));
    y.useEffect(() => {
      r(Ar(e));
    }, [
      e
    ]);
    const i = Yc[t] ?? Jc, s = y.useCallback((g) => {
      r(g), n(Zc(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, p) => {
      const h = o.conditions.map((m, x) => x === g ? {
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
    ]), u = y.useCallback(() => {
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
    return c.jsxs(Ne, {
      spacing: 1,
      children: [
        f && c.jsxs(U, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Br, {
              value: o.mode,
              exclusive: true,
              onChange: d,
              size: "small",
              "aria-label": C.t("json_table_condition_mode_label"),
              children: [
                c.jsx(Un, {
                  value: "and",
                  "aria-label": C.t("json_table_condition_mode_all"),
                  children: C.t("json_table_condition_mode_all")
                }),
                c.jsx(Un, {
                  value: "or",
                  "aria-label": C.t("json_table_condition_mode_any"),
                  children: C.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? C.t("json_table_condition_mode_hint_and") : C.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, p) => {
          const h = !Po.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(U, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(ln, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(an, {
                    children: C.t("json_table_condition_operator")
                  }),
                  c.jsx(Bt, {
                    label: C.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (x) => {
                      const b = x.target.value, S = Po.has(b) ? "" : g.operand;
                      l(p, {
                        operator: b,
                        operand: S
                      });
                    },
                    children: i.map((x) => c.jsx(Ie, {
                      value: x,
                      children: C.t(nu[x])
                    }, x))
                  })
                ]
              }),
              h && c.jsx(ke, {
                label: C.t("json_table_condition_value"),
                value: g.operand,
                onChange: (x) => l(p, {
                  operand: x.target.value
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
              f && c.jsx(We, {
                title: C.t("json_table_condition_remove"),
                children: c.jsx(Me, {
                  size: "small",
                  onClick: () => a(p),
                  "aria-label": C.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(Wr, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? p);
        }),
        c.jsx(vn, {
          startIcon: c.jsx(ri, {}),
          onClick: u,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": C.t("json_table_condition_add"),
          children: f ? C.t("json_table_condition_add") : C.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function ru({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b, _c2, _d2, _e, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r2, _s2, _t, _u2, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q;
    const [o, r] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), i = y.useCallback((v) => {
      r((_) => ({
        ..._,
        [v]: !_[v]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", l = y.useCallback((v) => {
      var _a3, _b2;
      const _ = {
        ...e.format
      };
      if (v.type && v.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const w = (_b2 = e.format) == null ? void 0 : _b2.type;
        w === "number" ? (delete _.numberDecimals, delete _.numberPrefix, delete _.numberSuffix, delete _.numberThousandsSeparator) : w === "date" ? (delete _.dateFormat, delete _.dateInputFormat) : w === "boolean" ? (delete _.booleanTrue, delete _.booleanFalse) : w === "string" && [
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
        ].forEach((O) => {
          delete _[O];
        });
      }
      n({
        ...e,
        format: {
          ..._,
          ...v
        }
      });
    }, [
      e,
      n
    ]), a = y.useCallback((v, _) => {
      const w = [
        ...e.cellStyle || []
      ];
      w[v] = {
        ...w[v],
        ..._
      }, n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), u = y.useCallback((v) => {
      const _ = [
        ...e.cellStyle || []
      ];
      _.splice(v, 1), n({
        ...e,
        cellStyle: _
      });
    }, [
      e,
      n
    ]), d = y.useCallback(() => {
      const v = {
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
          v
        ]
      });
    }, [
      e,
      n
    ]), f = y.useCallback((v) => {
      if (v === 0) return;
      const _ = [
        ...e.cellStyle || []
      ];
      [_[v - 1], _[v]] = [
        _[v],
        _[v - 1]
      ], n({
        ...e,
        cellStyle: _
      });
    }, [
      e,
      n
    ]), g = y.useCallback((v) => {
      const _ = e.cellStyle || [];
      if (v >= _.length - 1) return;
      const w = [
        ..._
      ];
      [w[v], w[v + 1]] = [
        w[v + 1],
        w[v]
      ], n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), p = y.useMemo(() => {
      if ((t == null ? void 0 : t.min) !== void 0 && typeof t.min == "number") {
        const v = typeof t.max == "number" ? t.max : 0;
        return t.min + (v - t.min) * 0.75;
      }
      return 1234.567;
    }, [
      t
    ]), h = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((v, _) => v + _, 0) : 0, [
      t
    ]), m = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), x = e.headerName !== m || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, b = y.useCallback(() => {
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
    ]), S = e.format !== void 0, j = y.useCallback(() => {
      const { format: v, ..._ } = e;
      n(_);
    }, [
      e,
      n
    ]), R = (((_a2 = e.cellStyle) == null ? void 0 : _a2.length) ?? 0) > 0 || e.cellStyleMode !== void 0, M = y.useCallback(() => {
      const { cellStyle: v, cellStyleMode: _, ...w } = e;
      n(w);
    }, [
      e,
      n
    ]), P = e.sortable !== void 0 || e.filterable !== void 0, z = y.useCallback(() => {
      const { sortable: v, filterable: _, ...w } = e;
      n(w);
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
            c.jsx(Hn, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: gn[s] || gn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(T, {
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
        c.jsxs(Ne, {
          spacing: 1,
          children: [
            c.jsxs($n, {
              expanded: o.basic,
              onChange: () => i("basic"),
              disableGutters: true,
              children: [
                c.jsx(Pn, {
                  expandIcon: c.jsx(kn, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(T, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: C.t("json_table_section_basic")
                      }),
                      c.jsx(We, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Me, {
                            size: "small",
                            disabled: !x,
                            onClick: (v) => {
                              v.stopPropagation(), b();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(cn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(An, {
                  children: c.jsxs(Ne, {
                    spacing: 2,
                    children: [
                      c.jsx(ke, {
                        label: C.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (v) => n({
                          ...e,
                          headerName: v.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx(ke, {
                        label: C.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (v) => n({
                          ...e,
                          width: v.target.value ? parseInt(v.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: C.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      c.jsxs(ln, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(an, {
                            children: C.t("json_table_align")
                          }),
                          c.jsxs(Bt, {
                            label: C.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (v) => n({
                              ...e,
                              align: v.target.value
                            }),
                            children: [
                              c.jsx(Ie, {
                                value: "left",
                                children: C.t("json_table_align_left")
                              }),
                              c.jsx(Ie, {
                                value: "center",
                                children: C.t("json_table_align_center")
                              }),
                              c.jsx(Ie, {
                                value: "right",
                                children: C.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(mt, {
                        control: c.jsx(kt, {
                          checked: e.visible,
                          onChange: (v) => n({
                            ...e,
                            visible: v.target.checked
                          })
                        }),
                        label: c.jsx(T, {
                          variant: "body2",
                          children: C.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs($n, {
              expanded: o.formatting,
              onChange: () => i("formatting"),
              disableGutters: true,
              children: [
                c.jsx(Pn, {
                  expandIcon: c.jsx(kn, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(T, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: C.t("json_table_section_formatting")
                      }),
                      c.jsx(We, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Me, {
                            size: "small",
                            disabled: !S,
                            onClick: (v) => {
                              v.stopPropagation(), j();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(cn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(An, {
                  children: c.jsxs(Ne, {
                    spacing: 2,
                    children: [
                      c.jsxs(ln, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(an, {
                            children: C.t("json_table_format_type")
                          }),
                          c.jsxs(Bt, {
                            value: ((_b = e.format) == null ? void 0 : _b.type) || "auto",
                            label: C.t("json_table_format_type"),
                            onChange: (v) => {
                              const _ = v.target.value;
                              _ === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : l({
                                type: _
                              });
                            },
                            children: [
                              c.jsxs(Ie, {
                                value: "auto",
                                children: [
                                  C.t("json_table_format_type_auto"),
                                  ` (${s})`
                                ]
                              }),
                              c.jsx(Ie, {
                                value: "string",
                                children: C.t("json_table_format_type_string")
                              }),
                              c.jsx(Ie, {
                                value: "number",
                                children: C.t("json_table_format_type_number")
                              }),
                              c.jsx(Ie, {
                                value: "date",
                                children: C.t("json_table_format_type_date")
                              }),
                              c.jsx(Ie, {
                                value: "boolean",
                                children: C.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "number" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "number") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(T, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_number_format")
                          }),
                          c.jsxs(U, {
                            children: [
                              c.jsxs(T, {
                                variant: "caption",
                                color: "text.secondary",
                                gutterBottom: true,
                                children: [
                                  C.t("json_table_number_decimals"),
                                  ":",
                                  " ",
                                  ((_d2 = e.format) == null ? void 0 : _d2.numberDecimals) ?? 2
                                ]
                              }),
                              c.jsx(qi, {
                                value: ((_e = e.format) == null ? void 0 : _e.numberDecimals) ?? 2,
                                onChange: (v, _) => l({
                                  type: "number",
                                  numberDecimals: _
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
                          c.jsx(ke, {
                            label: C.t("json_table_number_prefix"),
                            value: ((_f = e.format) == null ? void 0 : _f.numberPrefix) || "",
                            onChange: (v) => l({
                              type: "number",
                              numberPrefix: v.target.value
                            }),
                            size: "small",
                            placeholder: "$, \u20AC, \xA3"
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_number_suffix"),
                            value: ((_g = e.format) == null ? void 0 : _g.numberSuffix) || "",
                            onChange: (v) => l({
                              type: "number",
                              numberSuffix: v.target.value
                            }),
                            size: "small",
                            placeholder: "%, kg, \xB0C"
                          }),
                          c.jsx(mt, {
                            control: c.jsx(kt, {
                              checked: ((_h = e.format) == null ? void 0 : _h.numberThousandsSeparator) || false,
                              onChange: (v) => l({
                                type: "number",
                                numberThousandsSeparator: v.target.checked
                              }),
                              size: "small"
                            }),
                            label: c.jsx(T, {
                              variant: "body2",
                              children: C.t("json_table_number_thousands")
                            })
                          }),
                          c.jsxs(at, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              c.jsx(T, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsxs(T, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  p,
                                  " \u2192",
                                  " ",
                                  ci(p, {
                                    decimals: (_i2 = e.format) == null ? void 0 : _i2.numberDecimals,
                                    prefix: (_j = e.format) == null ? void 0 : _j.numberPrefix,
                                    suffix: (_k = e.format) == null ? void 0 : _k.numberSuffix,
                                    thousands: (_l2 = e.format) == null ? void 0 : _l2.numberThousandsSeparator
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "date" || ((_m = e.format) == null ? void 0 : _m.type) === "date") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(T, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_date_format")
                          }),
                          (t == null ? void 0 : t.dateFormat) && c.jsx(ke, {
                            label: C.t("json_table_date_input_format"),
                            value: t.dateFormat,
                            disabled: true,
                            size: "small",
                            helperText: C.t("json_table_date_detected_hint")
                          }),
                          c.jsxs(ln, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              c.jsx(an, {
                                children: C.t("json_table_date_output_format")
                              }),
                              c.jsx(Bt, {
                                label: C.t("json_table_date_output_format"),
                                value: ((_n2 = e.format) == null ? void 0 : _n2.dateFormat) || "yyyy-MM-dd",
                                onChange: (v) => l({
                                  type: "date",
                                  dateFormat: v.target.value,
                                  dateInputFormat: t == null ? void 0 : t.dateFormat
                                }),
                                children: $c.map((v) => c.jsx(Ie, {
                                  value: v.value,
                                  children: v.label
                                }, v.value))
                              })
                            ]
                          }),
                          c.jsxs(at, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              c.jsx(T, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsx(T, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: di(/* @__PURE__ */ new Date(), ((_o2 = e.format) == null ? void 0 : _o2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_p = e.format) == null ? void 0 : _p.type) === "boolean") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(T, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_boolean_format")
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_boolean_true"),
                            value: ((_q = e.format) == null ? void 0 : _q.booleanTrue) || "",
                            onChange: (v) => l({
                              type: "boolean",
                              booleanTrue: v.target.value
                            }),
                            size: "small",
                            placeholder: "Yes, On, \u2713, Active"
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_boolean_false"),
                            value: ((_r2 = e.format) == null ? void 0 : _r2.booleanFalse) || "",
                            onChange: (v) => l({
                              type: "boolean",
                              booleanFalse: v.target.value
                            }),
                            size: "small",
                            placeholder: "No, Off, \u2717, Inactive"
                          }),
                          c.jsxs(at, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              c.jsx(T, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsxs(Ne, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                  mt: 0.5
                                },
                                children: [
                                  c.jsxs(T, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      Mo(true, (_s2 = e.format) == null ? void 0 : _s2.booleanTrue, (_t = e.format) == null ? void 0 : _t.booleanFalse)
                                    ]
                                  }),
                                  c.jsxs(T, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      Mo(false, (_u2 = e.format) == null ? void 0 : _u2.booleanTrue, (_v = e.format) == null ? void 0 : _v.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "string" || ((_w = e.format) == null ? void 0 : _w.type) === "string") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(T, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_string_format")
                          }),
                          c.jsxs(ln, {
                            size: "small",
                            fullWidth: true,
                            children: [
                              c.jsx(an, {
                                children: C.t("json_table_string_case")
                              }),
                              c.jsxs(Bt, {
                                label: C.t("json_table_string_case"),
                                value: ((_x = e.format) == null ? void 0 : _x.stringCase) ?? "none",
                                onChange: (v) => l({
                                  type: "string",
                                  stringCase: v.target.value
                                }),
                                children: [
                                  c.jsx(Ie, {
                                    value: "none",
                                    children: C.t("json_table_string_case_none")
                                  }),
                                  c.jsx(Ie, {
                                    value: "upper",
                                    children: C.t("json_table_string_case_upper")
                                  }),
                                  c.jsx(Ie, {
                                    value: "lower",
                                    children: C.t("json_table_string_case_lower")
                                  }),
                                  c.jsx(Ie, {
                                    value: "title",
                                    children: C.t("json_table_string_case_title")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsxs(Ne, {
                            direction: "row",
                            spacing: 1,
                            children: [
                              c.jsx(ke, {
                                label: C.t("json_table_string_prefix"),
                                value: ((_y = e.format) == null ? void 0 : _y.stringPrefix) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringPrefix: v.target.value || void 0
                                }),
                                size: "small",
                                fullWidth: true
                              }),
                              c.jsx(ke, {
                                label: C.t("json_table_string_suffix"),
                                value: ((_z = e.format) == null ? void 0 : _z.stringSuffix) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringSuffix: v.target.value || void 0
                                }),
                                size: "small",
                                fullWidth: true
                              })
                            ]
                          }),
                          c.jsx(mt, {
                            control: c.jsx(kt, {
                              size: "small",
                              checked: !!((_A = e.format) == null ? void 0 : _A.stringTrim),
                              onChange: (v) => l({
                                type: "string",
                                stringTrim: v.target.checked
                              })
                            }),
                            label: C.t("json_table_string_trim")
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_string_max_length"),
                            type: "number",
                            value: ((_B = e.format) == null ? void 0 : _B.stringMaxLength) ?? "",
                            onChange: (v) => l({
                              type: "string",
                              stringMaxLength: v.target.value ? parseInt(v.target.value, 10) : void 0
                            }),
                            size: "small",
                            fullWidth: true,
                            slotProps: {
                              htmlInput: {
                                min: 1
                              }
                            }
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_string_regex"),
                            value: ((_C = e.format) == null ? void 0 : _C.stringRegex) ?? "",
                            onChange: (v) => l({
                              type: "string",
                              stringRegex: v.target.value || void 0
                            }),
                            size: "small",
                            fullWidth: true,
                            placeholder: "e.g. (\\d+)"
                          }),
                          ((_D = e.format) == null ? void 0 : _D.stringRegex) && c.jsxs(Ne, {
                            direction: "row",
                            spacing: 1,
                            children: [
                              c.jsx(ke, {
                                label: C.t("json_table_string_regex_group"),
                                type: "number",
                                value: ((_E = e.format) == null ? void 0 : _E.stringRegexGroup) ?? 0,
                                onChange: (v) => l({
                                  type: "string",
                                  stringRegexGroup: parseInt(v.target.value, 10) || 0
                                }),
                                size: "small",
                                fullWidth: true,
                                slotProps: {
                                  htmlInput: {
                                    min: 0
                                  }
                                }
                              }),
                              c.jsx(ke, {
                                label: C.t("json_table_string_regex_flags"),
                                value: ((_F = e.format) == null ? void 0 : _F.stringRegexFlags) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringRegexFlags: v.target.value || void 0
                                }),
                                size: "small",
                                fullWidth: true,
                                placeholder: "i, g, m \u2026"
                              })
                            ]
                          }),
                          c.jsx(Di, {}),
                          c.jsxs(Ne, {
                            direction: "row",
                            spacing: 1,
                            flexWrap: "wrap",
                            children: [
                              c.jsx(mt, {
                                control: c.jsx(kt, {
                                  size: "small",
                                  checked: ((_G = e.format) == null ? void 0 : _G.stringFontWeight) === "bold",
                                  onChange: (v) => l({
                                    type: "string",
                                    stringFontWeight: v.target.checked ? "bold" : "normal"
                                  })
                                }),
                                label: c.jsx(T, {
                                  variant: "body2",
                                  fontWeight: "bold",
                                  children: C.t("json_table_string_font_weight")
                                })
                              }),
                              c.jsx(mt, {
                                control: c.jsx(kt, {
                                  size: "small",
                                  checked: ((_H = e.format) == null ? void 0 : _H.stringFontStyle) === "italic",
                                  onChange: (v) => l({
                                    type: "string",
                                    stringFontStyle: v.target.checked ? "italic" : "normal"
                                  })
                                }),
                                label: c.jsx(T, {
                                  variant: "body2",
                                  fontStyle: "italic",
                                  children: C.t("json_table_string_font_style")
                                })
                              })
                            ]
                          }),
                          c.jsxs(Ne, {
                            direction: "row",
                            spacing: 1,
                            children: [
                              c.jsx(ke, {
                                label: C.t("json_table_string_font_size"),
                                type: "number",
                                value: ((_I = e.format) == null ? void 0 : _I.stringFontSize) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringFontSize: v.target.value ? parseInt(v.target.value, 10) : void 0
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
                              c.jsx(so, {
                                label: C.t("json_table_string_text_color"),
                                value: ((_J = e.format) == null ? void 0 : _J.stringTextColor) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringTextColor: v || void 0
                                })
                              })
                            ]
                          }),
                          c.jsxs(at, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              c.jsx(T, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsx(T, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace",
                                  fontWeight: (_K = e.format) == null ? void 0 : _K.stringFontWeight,
                                  fontStyle: (_L = e.format) == null ? void 0 : _L.stringFontStyle,
                                  ...((_M = e.format) == null ? void 0 : _M.stringFontSize) && {
                                    fontSize: `${e.format.stringFontSize}px`
                                  },
                                  ...((_N = e.format) == null ? void 0 : _N.stringTextColor) && {
                                    color: e.format.stringTextColor
                                  }
                                },
                                children: pi("Hello World", e.format ?? {
                                  type: "string"
                                })
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && s !== "string" && !e.format && c.jsx(T, {
                        variant: "body2",
                        color: "text.secondary",
                        children: C.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs($n, {
              expanded: o.styling,
              onChange: () => i("styling"),
              disableGutters: true,
              children: [
                c.jsx(Pn, {
                  expandIcon: c.jsx(kn, {}),
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
                          c.jsx(T, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_section_styling")
                          }),
                          (((_O = e.cellStyle) == null ? void 0 : _O.length) ?? 0) > 0 && c.jsx(Hn, {
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
                      c.jsx(We, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Me, {
                            size: "small",
                            disabled: !R,
                            onClick: (v) => {
                              v.stopPropagation(), M();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(cn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(An, {
                  children: c.jsxs(Ne, {
                    spacing: 1.5,
                    children: [
                      (((_P = e.cellStyle) == null ? void 0 : _P.length) ?? 0) >= 1 && c.jsxs(U, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsxs(Br, {
                            value: e.cellStyleMode ?? "first-match",
                            exclusive: true,
                            size: "small",
                            onChange: (v, _) => {
                              _ && n({
                                ...e,
                                cellStyleMode: _
                              });
                            },
                            "aria-label": C.t("json_table_cell_style_mode_label"),
                            children: [
                              c.jsx(Un, {
                                value: "first-match",
                                "aria-label": C.t("json_table_cell_style_mode_first"),
                                children: C.t("json_table_cell_style_mode_first")
                              }),
                              c.jsx(Un, {
                                value: "all-match",
                                "aria-label": C.t("json_table_cell_style_mode_all"),
                                children: C.t("json_table_cell_style_mode_all")
                              })
                            ]
                          }),
                          c.jsx(T, {
                            variant: "caption",
                            color: "text.secondary",
                            children: (e.cellStyleMode ?? "first-match") === "first-match" ? C.t("json_table_cell_style_mode_hint_first") : C.t("json_table_cell_style_mode_hint_all")
                          })
                        ]
                      }),
                      (e.cellStyle || []).length === 0 && c.jsxs(U, {
                        sx: {
                          textAlign: "center",
                          py: 2,
                          px: 1,
                          color: "text.secondary"
                        },
                        children: [
                          c.jsx(T, {
                            variant: "body2",
                            sx: {
                              fontWeight: 500,
                              mb: 0.5
                            },
                            children: C.t("json_table_no_style_rules")
                          }),
                          c.jsx(T, {
                            variant: "caption",
                            children: C.t("json_table_no_style_rules_hint")
                          })
                        ]
                      }),
                      (e.cellStyle || []).map((v, _) => {
                        const w = (e.cellStyle || []).length, $ = v.backgroundColor ? Wt(v.backgroundColor) : void 0, O = v.textColor ? Wt(v.textColor) : void 0;
                        return c.jsx(at, {
                          variant: "outlined",
                          sx: {
                            p: 1.5
                          },
                          children: c.jsxs(Ne, {
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
                                    children: c.jsxs(T, {
                                      variant: "caption",
                                      sx: {
                                        fontWeight: 600,
                                        color: "text.secondary"
                                      },
                                      children: [
                                        C.t("json_table_rule"),
                                        " ",
                                        _ + 1
                                      ]
                                    })
                                  }),
                                  c.jsxs(U, {
                                    sx: {
                                      display: "flex",
                                      gap: 0.5
                                    },
                                    children: [
                                      c.jsx(We, {
                                        title: C.t("json_table_rule_move_up"),
                                        children: c.jsx("span", {
                                          children: c.jsx(Me, {
                                            size: "small",
                                            onClick: () => f(_),
                                            disabled: _ === 0,
                                            "aria-label": C.t("json_table_rule_move_up"),
                                            children: c.jsx(si, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      c.jsx(We, {
                                        title: C.t("json_table_rule_move_down"),
                                        children: c.jsx("span", {
                                          children: c.jsx(Me, {
                                            size: "small",
                                            onClick: () => g(_),
                                            disabled: _ >= w - 1,
                                            "aria-label": C.t("json_table_rule_move_down"),
                                            children: c.jsx(ii, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      c.jsx(We, {
                                        title: C.t("json_table_delete_rule"),
                                        children: c.jsx(Me, {
                                          size: "small",
                                          onClick: () => u(_),
                                          color: "error",
                                          "aria-label": C.t("json_table_delete_rule"),
                                          children: c.jsx(Oi, {
                                            fontSize: "small"
                                          })
                                        })
                                      })
                                    ]
                                  })
                                ]
                              }),
                              c.jsx(ou, {
                                logic: v.logic,
                                columnType: s,
                                onChange: (F) => a(_, {
                                  logic: F
                                })
                              }, v.id ?? _),
                              c.jsxs(Ne, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "flex-start",
                                children: [
                                  c.jsx(so, {
                                    label: C.t("json_table_bg_color"),
                                    value: v.backgroundColor || "",
                                    onChange: (F) => a(_, {
                                      backgroundColor: F
                                    })
                                  }),
                                  c.jsx(so, {
                                    label: C.t("json_table_text_color"),
                                    value: v.textColor || "",
                                    onChange: (F) => a(_, {
                                      textColor: F
                                    })
                                  })
                                ]
                              }),
                              c.jsxs(Ne, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  c.jsx(mt, {
                                    control: c.jsx(yn, {
                                      checked: v.fontWeight === "bold",
                                      onChange: (F) => a(_, {
                                        fontWeight: F.target.checked ? "bold" : "normal"
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
                                    label: c.jsx(T, {
                                      variant: "caption",
                                      children: C.t("json_table_bold")
                                    })
                                  }),
                                  c.jsx(mt, {
                                    control: c.jsx(yn, {
                                      checked: v.fontStyle === "italic",
                                      onChange: (F) => a(_, {
                                        fontStyle: F.target.checked ? "italic" : "normal"
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
                                    label: c.jsx(T, {
                                      variant: "caption",
                                      children: C.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (v.backgroundColor || v.textColor || v.fontWeight === "bold" || v.fontStyle === "italic") && c.jsx(at, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  ...v.backgroundColor ? $ ? {
                                    background: $
                                  } : {
                                    backgroundColor: v.backgroundColor
                                  } : {},
                                  fontWeight: v.fontWeight || "normal",
                                  fontStyle: v.fontStyle || "normal"
                                },
                                children: c.jsx(T, {
                                  variant: "body2",
                                  sx: {
                                    ...v.textColor ? O ? {
                                      background: O,
                                      backgroundClip: "text",
                                      WebkitBackgroundClip: "text",
                                      color: "transparent"
                                    } : {
                                      color: v.textColor
                                    } : {
                                      color: "inherit"
                                    }
                                  },
                                  children: C.t("json_table_sample_value")
                                })
                              })
                            ]
                          })
                        }, v.id ?? _);
                      }),
                      (((_Q = e.cellStyle) == null ? void 0 : _Q.length) ?? 0) >= 2 && c.jsx(T, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          px: 0.5
                        },
                        children: (e.cellStyleMode ?? "first-match") === "first-match" ? C.t("json_table_rules_priority_hint") : C.t("json_table_rules_all_match_hint")
                      }),
                      c.jsx(vn, {
                        startIcon: c.jsx(ri, {}),
                        onClick: d,
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                        children: C.t("json_table_add_style_rule")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs($n, {
              expanded: o.advanced,
              onChange: () => i("advanced"),
              disableGutters: true,
              children: [
                c.jsx(Pn, {
                  expandIcon: c.jsx(kn, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(T, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: C.t("json_table_section_advanced")
                      }),
                      c.jsx(We, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Me, {
                            size: "small",
                            disabled: !P,
                            onClick: (v) => {
                              v.stopPropagation(), z();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(cn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(An, {
                  children: c.jsxs(Ne, {
                    spacing: 2,
                    children: [
                      c.jsx(mt, {
                        control: c.jsx(kt, {
                          checked: e.sortable ?? true,
                          onChange: (v) => n({
                            ...e,
                            sortable: v.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(T, {
                          variant: "body2",
                          children: C.t("json_table_sortable")
                        })
                      }),
                      c.jsx(mt, {
                        control: c.jsx(kt, {
                          checked: e.filterable ?? false,
                          onChange: (v) => n({
                            ...e,
                            filterable: v.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(T, {
                          variant: "body2",
                          children: C.t("json_table_filterable")
                        })
                      }),
                      t && c.jsxs(at, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(T, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: C.t("json_table_analysis_info")
                          }),
                          c.jsxs(Ne, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_type_label")
                                  }),
                                  c.jsx(Hn, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: gn[t.type],
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
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_confidence")
                                  }),
                                  c.jsxs(T, {
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
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_nulls")
                                  }),
                                  c.jsxs(T, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      h > 0 && ` (${Math.round(t.nullCount / h * 100)}%)`
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
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_distinct")
                                  }),
                                  c.jsx(T, {
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
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_range")
                                  }),
                                  c.jsxs(T, {
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
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_date_input_format")
                                  }),
                                  c.jsx(T, {
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
  const iu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, su = /^\d{4}-\d{2}-\d{2}$/, lu = /^(\d{2})\.(\d{2})\.(\d{4})$/, au = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, cu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, uu = /^(\d{2})\/(\d{2})\/(\d{4})$/, du = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, pu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Tn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function co(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Dn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const fu = [
    {
      regex: iu,
      format: "ISO-8601"
    },
    {
      regex: su,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Tn(n, t);
      }
    },
    {
      regex: cu,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return Tn(t, n) && Dn(o, r, i);
      }
    },
    {
      regex: au,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Tn(t, n) && Dn(o, r);
      }
    },
    {
      regex: lu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Tn(t, n);
      }
    },
    {
      regex: pu,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return co(t, n) && Dn(o, r, i);
      }
    },
    {
      regex: du,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return co(t, n) && Dn(o, r);
      }
    },
    {
      regex: uu,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return co(t, n);
      }
    }
  ];
  function gu(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of fu) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function hu(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function mu(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = hu(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = gu(e);
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
  function yu(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function vu(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function xu(e) {
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
  function bu(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], i = o[2], s = o[3], l = o[4] || "00", a = o[5] || "00", u = o[6] || "00";
        return `${s}-${i}-${r}T${l}:${a}:${u}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], i = o[2], s = o[3], l = o[4] || "00", a = o[5] || "00", u = o[6] || "00";
        return `${s}-${r}-${i}T${l}:${a}:${u}`;
      }
    }
    return null;
  }
  function wu(e, t, n = 100, o = 0.8) {
    t.length;
    const r = /* @__PURE__ */ new Map();
    for (const i of e) r.set(i, xu(i));
    for (const i of t) for (const s of e) {
      const l = r.get(s), a = i[s], u = mu(a);
      if (Pr(l.typeCounts, u.type), u.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, u.dateFormat && Pr(l.dateFormatCounts, u.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const d = a.length;
        (l.strLenMin === void 0 || d < l.strLenMin) && (l.strLenMin = d), (l.strLenMax === void 0 || d > l.strLenMax) && (l.strLenMax = d);
      }
      if (u.dateFormat) {
        const d = bu(a, u.dateFormat);
        d !== null && ((l.dateMin === void 0 || d < l.dateMin) && (l.dateMin = d), (l.dateMax === void 0 || d > l.dateMax) && (l.dateMax = d));
      }
    }
    return e.map((i) => {
      const s = r.get(i);
      let l = yu(s.typeCounts);
      l === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (l = "string");
      const a = l === "date" ? vu(s.dateFormatCounts) : void 0, u = l === "date" ? s.typeCounts.date || 0 : s.typeCounts[l] || 0, d = s.nonNullCount > 0 ? Math.round(u / s.nonNullCount * 100) / 100 : 0, f = {
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
  function Kn(e, t, n, o, r, i, s, l) {
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
        const u = `${t}[${a}]`;
        Kn(e[a], u, n, o, r, i + 1, s, l);
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
      for (const u of a) {
        const d = t ? `${t}.${u}` : u;
        Kn(e[u], d, n, o, r, i + 1, s, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Cu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const u of Object.keys(s)) Kn(s[u], u, l, n, a, 1, t, o);
      else Kn(s, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const i = Su([
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
  function Su(e) {
    return e.sort((t, n) => {
      const o = Ir(t), r = Ir(n), i = Math.min(o.length, r.length);
      for (let s = 0; s < i; s++) {
        const l = o[s], a = r[s], u = Fr(l), d = Fr(a);
        if (u !== null && d !== null) {
          if (u !== d) return u - d;
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
  const _u = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function gi(e, t) {
    const n = performance.now(), o = {
      ..._u,
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
    const r = Cu(e, o.maxDepth), i = wu(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), s = r.paths.length * r.rows.length, l = i.reduce((d, f) => d + f.nullCount, 0), a = s > 0 ? Math.round(l / s * 1e3) / 10 : 0, u = Math.round((performance.now() - n) * 100) / 100;
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
        analysisTimeMs: u
      }
    };
  }
  function ju(e, t) {
    return y.useMemo(() => gi(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Ru({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: i, socket: s }) {
    const [l, a] = y.useState(n), [u, d] = y.useState(null), [f, g] = y.useState([]), [p, h] = y.useState(false), [m, x] = y.useState(false), [b, S] = y.useState(null), j = y.useRef(false), R = y.useRef(() => Promise.resolve()), M = y.useRef(n), P = y.useMemo(() => JSON.stringify(n), [
      n
    ]), z = y.useMemo(() => JSON.stringify(l) !== P, [
      l,
      P
    ]);
    y.useEffect(() => {
      e && (a(n), M.current = n, d(n.length > 0 ? n[0].path : null), j.current = false, S(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !j.current && (j.current = true, R.current());
    }, [
      e
    ]);
    const v = y.useCallback(async () => {
      h(true), S(null);
      try {
        const E = i.oid;
        if (!E) return;
        const N = await s.getState(E);
        if ((N == null ? void 0 : N.val) === null || (N == null ? void 0 : N.val) === void 0) return;
        let D;
        const J = N.val;
        if (typeof J == "string") try {
          const k = JSON.parse(J);
          D = Array.isArray(k) ? k : [
            k
          ];
        } catch {
          return;
        }
        else if (Array.isArray(J)) D = J;
        else if (typeof J == "object" && J !== null) D = [
          J
        ];
        else return;
        const K = i.tableMaxDepth || 10, oe = gi(D, {
          maxDepth: K
        });
        g(oe.columns);
        const ue = new Map(M.current.map((k) => [
          k.path,
          k
        ])), $e = new Set(oe.columns.map((k) => k.path)), Ae = M.current.filter((k) => $e.has(k.path)), _e = oe.columns.filter((k) => !ue.has(k.path)).map((k) => ({
          path: k.path,
          visible: true,
          headerName: k.path.split(".").pop() || k.path
        })), ae = [
          ...Ae,
          ..._e
        ];
        a(ae), M.current = ae, d((k) => k === null && ae.length > 0 ? ae[0].path : k);
      } catch (E) {
        const N = E instanceof Error ? E.message : "Failed to discover columns";
        S(N);
      } finally {
        h(false);
      }
    }, [
      i,
      s
    ]);
    y.useEffect(() => {
      R.current = v;
    }, [
      v
    ]), y.useEffect(() => {
      M.current = l;
    }, [
      l
    ]);
    const _ = y.useCallback((E) => {
      a((N) => N.map((D) => D.path === E.path ? E : D));
    }, []), w = y.useCallback((E) => {
      a(E);
    }, []), $ = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), O = y.useCallback((E, N) => {
      if (N === "backdropClick" && z) {
        x(true);
        return;
      }
      t();
    }, [
      z,
      t
    ]), F = y.useMemo(() => u ? l.find((E) => E.path === u) : null, [
      u,
      l
    ]), L = y.useMemo(() => u ? f.find((E) => E.path === u) : void 0, [
      u,
      f
    ]);
    return c.jsxs(Ei, {
      theme: r,
      children: [
        c.jsxs(Yi, {
          open: e,
          onClose: O,
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
            c.jsx(Ji, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: c.jsxs(U, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(T, {
                    variant: "h6",
                    children: C.t("json_table_column_editor_title")
                  }),
                  c.jsx(Me, {
                    onClick: () => O(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: c.jsx(Wr, {})
                  })
                ]
              })
            }),
            c.jsxs(Xi, {
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
                  onClose: () => S(null),
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
                      children: c.jsx(Mc, {
                        columns: l,
                        discoveredColumns: f,
                        selectedPath: u,
                        onSelect: d,
                        onChange: w,
                        onRefresh: v,
                        loading: p
                      })
                    }),
                    c.jsx(U, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: F ? c.jsx(ru, {
                        column: F,
                        discoveredColumn: L,
                        onChange: _
                      }) : c.jsx(U, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(T, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? C.t("json_table_select_column") : C.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            c.jsxs(ea, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(vn, {
                  onClick: () => O(),
                  children: C.t("cancel")
                }),
                c.jsx(vn, {
                  variant: "contained",
                  onClick: $,
                  disabled: !z,
                  children: C.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(ya, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => x(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(nr, {
            severity: "warning",
            onClose: () => x(false),
            children: C.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Mu(e, t, n, o) {
    const r = e.name || "columnConfig", i = o.context.theme, [s, l] = y.useState(false), a = y.useMemo(() => ai(t[r]), [
      t,
      r
    ]), u = a.filter((h) => h.visible).length, d = a.length, f = a.some((h) => h.format), g = a.some((h) => h.cellStyle && h.cellStyle.length > 0), p = y.useCallback((h) => {
      const m = JSON.stringify(h), x = `b64:${jc(m)}`;
      n({
        [r]: x
      });
    }, [
      r,
      n
    ]);
    return c.jsxs(U, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(vn, {
          variant: "outlined",
          startIcon: c.jsx(Cc, {}),
          onClick: () => l(true),
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          children: C.t("json_table_configure_columns")
        }),
        d > 0 && c.jsxs(T, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: "block"
          },
          children: [
            u,
            " / ",
            d,
            " ",
            C.t("json_table_columns_visible"),
            f && ` \xB7 ${C.t("json_table_has_formatting")}`,
            g && ` \xB7 ${C.t("json_table_has_styling")}`
          ]
        }),
        c.jsx(Ru, {
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
  const $u = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(ht, {
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
      label: "",
      type: "custom",
      component: () => c.jsx(ht, {
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
      component: () => c.jsx(ht, {
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
      component: () => c.jsx(ht, {
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
      component: () => c.jsx(ht, {
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
      component: () => c.jsx(ht, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(ro, {
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
      component: (e, t, n, o) => c.jsx(ro, {
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
      component: () => c.jsx(ht, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(ro, {
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
      component: () => c.jsx(ht, {
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
      component: () => c.jsx(ht, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Mu
    }
  ];
  function $t(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ke(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: $t(n, o[e])
      }));
    };
  }
  function to(e) {
    return e instanceof Function;
  }
  function Au(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Pu(e, t) {
    const n = [], o = (r) => {
      r.forEach((i) => {
        n.push(i);
        const s = t(i);
        s != null && s.length && o(s);
      });
    };
    return o(e), n;
  }
  function H(e, t, n) {
    let o = [], r;
    return (i) => {
      let s;
      n.key && n.debug && (s = Date.now());
      const l = e(i);
      if (!(l.length !== o.length || l.some((d, f) => o[f] !== d))) return r;
      o = l;
      let u;
      if (n.key && n.debug && (u = Date.now()), r = t(...l), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
        const d = Math.round((Date.now() - s) * 100) / 100, f = Math.round((Date.now() - u) * 100) / 100, g = f / 16, p = (h, m) => {
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
  function B(e, t, n, o) {
    return {
      debug: () => {
        var r;
        return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
      },
      key: false,
      onChange: o
    };
  }
  function Iu(e, t, n, o) {
    const r = () => {
      var s;
      return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
    }, i = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(o),
      renderValue: r,
      getContext: H(() => [
        e,
        n,
        t,
        i
      ], (s, l, a, u) => ({
        table: s,
        column: l,
        row: a,
        cell: u,
        getValue: u.getValue,
        renderValue: u.renderValue
      }), B(e.options, "debugCells"))
    };
    return e._features.forEach((s) => {
      s.createCell == null || s.createCell(i, n, t, e);
    }, {}), i;
  }
  function Fu(e, t, n, o) {
    var r, i;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let u = (r = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? r : typeof l.header == "string" ? l.header : void 0, d;
    if (l.accessorFn ? d = l.accessorFn : a && (a.includes(".") ? d = (g) => {
      let p = g;
      for (const m of a.split(".")) {
        var h;
        p = (h = p) == null ? void 0 : h[m];
      }
      return p;
    } : d = (g) => g[l.accessorKey]), !u) throw new Error();
    let f = {
      id: `${String(u)}`,
      accessorFn: d,
      parent: o,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: H(() => [
        true
      ], () => {
        var g;
        return [
          f,
          ...(g = f.columns) == null ? void 0 : g.flatMap((p) => p.getFlatColumns())
        ];
      }, B(e.options, "debugColumns")),
      getLeafColumns: H(() => [
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
      }, B(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(f, e);
    return f;
  }
  const Te = "debugHeaders";
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
  const zu = {
    createTable: (e) => {
      e.getHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var i, s;
        const l = (i = o == null ? void 0 : o.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? i : [], a = (s = r == null ? void 0 : r.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? s : [], u = n.filter((f) => !(o != null && o.includes(f.id)) && !(r != null && r.includes(f.id)));
        return On(t, [
          ...l,
          ...u,
          ...a
        ], e);
      }, B(e.options, Te)), e.getCenterHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), On(t, n, e, "center")), B(e.options, Te)), e.getLeftHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return On(t, i, e, "left");
      }, B(e.options, Te)), e.getRightHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return On(t, i, e, "right");
      }, B(e.options, Te)), e.getFooterGroups = H(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Te)), e.getLeftFooterGroups = H(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Te)), e.getCenterFooterGroups = H(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Te)), e.getRightFooterGroups = H(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Te)), e.getFlatHeaders = H(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Te)), e.getLeftFlatHeaders = H(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Te)), e.getCenterFlatHeaders = H(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Te)), e.getRightFlatHeaders = H(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Te)), e.getCenterLeafHeaders = H(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), B(e.options, Te)), e.getLeftLeafHeaders = H(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), B(e.options, Te)), e.getRightLeafHeaders = H(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), B(e.options, Te)), e.getLeafHeaders = H(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, o) => {
        var r, i, s, l, a, u;
        return [
          ...(r = (i = t[0]) == null ? void 0 : i.headers) != null ? r : [],
          ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [],
          ...(a = (u = o[0]) == null ? void 0 : u.headers) != null ? a : []
        ].map((d) => d.getLeafHeaders()).flat();
      }, B(e.options, Te));
    }
  };
  function On(e, t, n, o) {
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
    const u = (g, p) => {
      const h = {
        depth: p,
        id: [
          o,
          `${p}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      g.forEach((x) => {
        const b = [
          ...m
        ].reverse()[0], S = x.column.depth === h.depth;
        let j, R = false;
        if (S && x.column.parent ? j = x.column.parent : (j = x.column, R = true), b && (b == null ? void 0 : b.column) === j) b.subHeaders.push(x);
        else {
          const M = zr(n, j, {
            id: [
              o,
              p,
              j.id,
              x == null ? void 0 : x.id
            ].filter(Boolean).join("_"),
            isPlaceholder: R,
            placeholderId: R ? `${m.filter((P) => P.column === j).length}` : void 0,
            depth: p,
            index: m.length
          });
          M.subHeaders.push(x), m.push(M);
        }
        h.headers.push(x), x.headerGroup = h;
      }), a.push(h), p > 0 && u(m, p - 1);
    }, d = t.map((g, p) => zr(n, g, {
      depth: s,
      index: p
    }));
    u(d, s - 1), a.reverse();
    const f = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, x = 0, b = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (b = [], f(h.subHeaders).forEach((j) => {
        let { colSpan: R, rowSpan: M } = j;
        m += R, b.push(M);
      })) : m = 1;
      const S = Math.min(...b);
      return x = x + S, h.colSpan = m, h.rowSpan = x, {
        colSpan: m,
        rowSpan: x
      };
    });
    return f((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
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
        const u = e.getColumn(a);
        if (u != null && u.accessorFn) return l._valuesCache[a] = u.accessorFn(l.original, o), l._valuesCache[a];
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a)) return l._uniqueValuesCache[a];
        const u = e.getColumn(a);
        if (u != null && u.accessorFn) return u.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = u.columnDef.getUniqueValues(l.original, o), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [
          l.getValue(a)
        ], l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var u;
        return (u = l.getValue(a)) != null ? u : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Pu(l.subRows, (a) => a.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let a = [], u = l;
        for (; ; ) {
          const d = u.getParentRow();
          if (!d) break;
          a.push(d), u = d;
        }
        return a.reverse();
      },
      getAllCells: H(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((u) => Iu(e, l, u, u.id)), B(e.options, "debugRows")),
      _getAllCellsByColumnId: H(() => [
        l.getAllCells()
      ], (a) => a.reduce((u, d) => (u[d.column.id] = d, u), {}), B(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const u = e._features[a];
      u == null || u.createRow == null || u.createRow(l, e);
    }
    return l;
  }, ku = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, hi = (e, t, n) => {
    var o, r;
    const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
  };
  hi.autoRemove = (e) => ct(e);
  const mi = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  mi.autoRemove = (e) => ct(e);
  const yi = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  yi.autoRemove = (e) => ct(e);
  const vi = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  vi.autoRemove = (e) => ct(e);
  const xi = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  xi.autoRemove = (e) => ct(e) || !(e != null && e.length);
  const bi = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  bi.autoRemove = (e) => ct(e) || !(e != null && e.length);
  const wi = (e, t, n) => e.getValue(t) === n;
  wi.autoRemove = (e) => ct(e);
  const Ci = (e, t, n) => e.getValue(t) == n;
  Ci.autoRemove = (e) => ct(e);
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
  Uo.autoRemove = (e) => ct(e) || ct(e[0]) && ct(e[1]);
  const vt = {
    includesString: hi,
    includesStringSensitive: mi,
    equalsString: yi,
    arrIncludes: vi,
    arrIncludesAll: xi,
    arrIncludesSome: bi,
    equals: wi,
    weakEquals: Ci,
    inNumberRange: Uo
  };
  function ct(e) {
    return e == null || e === "";
  }
  const Tu = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Ke("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
        return typeof o == "string" ? vt.includesString : typeof o == "number" ? vt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? vt.equals : Array.isArray(o) ? vt.arrIncludes : vt.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return to(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : vt[e.columnDef.filterFn];
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
          const r = e.getFilterFn(), i = o == null ? void 0 : o.find((d) => d.id === e.id), s = $t(n, i ? i.value : void 0);
          if (kr(r, s, e)) {
            var l;
            return (l = o == null ? void 0 : o.filter((d) => d.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: s
          };
          if (i) {
            var u;
            return (u = o == null ? void 0 : o.map((d) => d.id === e.id ? a : d)) != null ? u : [];
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
          return (i = $t(t, r)) == null ? void 0 : i.filter((s) => {
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
  const Du = (e, t, n) => n.reduce((o, r) => {
    const i = r.getValue(e);
    return o + (typeof i == "number" ? i : 0);
  }, 0), Ou = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o > i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Eu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o < i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Nu = (e, t, n) => {
    let o, r;
    return n.forEach((i) => {
      const s = i.getValue(e);
      s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
    }), [
      o,
      r
    ];
  }, Lu = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let i = r.getValue(e);
      i != null && (i = +i) >= i && (++n, o += i);
    }), n) return o / n;
  }, Vu = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!Au(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, Hu = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Bu = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Wu = (e, t) => t.length, uo = {
    sum: Du,
    min: Ou,
    max: Eu,
    extent: Nu,
    mean: Lu,
    median: Vu,
    unique: Hu,
    uniqueCount: Bu,
    count: Wu
  }, Gu = {
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
      onGroupingChange: Ke("grouping", e),
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
        if (typeof o == "number") return uo.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return uo.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return to(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : uo[e.columnDef.aggregationFn];
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
  function Uu(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((i) => !t.includes(i.id));
    return n === "remove" ? o : [
      ...t.map((i) => e.find((s) => s.id === i)).filter(Boolean),
      ...o
    ];
  }
  const qu = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ke("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = H((n) => [
        hn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), B(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = hn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = hn(t, n);
        return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = H(() => [
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
            const a = s.shift(), u = l.findIndex((d) => d.id === a);
            u > -1 && i.push(l.splice(u, 1)[0]);
          }
          i = [
            ...i,
            ...l
          ];
        }
        return Uu(i, n, o);
      }, B(e.options, "debugTable"));
    }
  }, po = () => ({
    left: [],
    right: []
  }), Yu = {
    getInitialState: (e) => ({
      columnPinning: po(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ke("columnPinning", e)
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
            var u, d;
            return {
              left: [
                ...((u = r == null ? void 0 : r.left) != null ? u : []).filter((f) => !(o != null && o.includes(f))),
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
      e.getCenterVisibleCells = H(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, o, r) => {
        const i = [
          ...o ?? [],
          ...r ?? []
        ];
        return n.filter((s) => !i.includes(s.column.id));
      }, B(t.options, "debugRows")), e.getLeftVisibleCells = H(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
        ...i,
        position: "left"
      })), B(t.options, "debugRows")), e.getRightVisibleCells = H(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
        ...i,
        position: "right"
      })), B(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, o;
        return e.setColumnPinning(t ? po() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : po());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const o = e.getState().columnPinning;
        if (!t) {
          var r, i;
          return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e.getLeftLeafColumns = H(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), B(e.options, "debugColumns")), e.getRightLeafColumns = H(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), B(e.options, "debugColumns")), e.getCenterLeafColumns = H(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o) => {
        const r = [
          ...n ?? [],
          ...o ?? []
        ];
        return t.filter((i) => !r.includes(i.id));
      }, B(e.options, "debugColumns"));
    }
  };
  function Ju(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const En = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, fo = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Xu = {
    getDefaultColumnDef: () => En,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: fo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Ke("columnSizing", e),
      onColumnSizingInfoChange: Ke("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, o, r;
        const i = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : En.minSize, (o = i ?? e.columnDef.size) != null ? o : En.size), (r = e.columnDef.maxSize) != null ? r : En.maxSize);
      }, e.getStart = H((n) => [
        n,
        hn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), B(t.options, "debugColumns")), e.getAfter = H((n) => [
        n,
        hn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, i) => r + i.getSize(), 0), B(t.options, "debugColumns")), e.resetSize = () => {
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
          if (!o || !r || (i.persist == null || i.persist(), go(i) && i.touches && i.touches.length > 1)) return;
          const s = e.getSize(), l = e ? e.getLeafHeaders().map((b) => [
            b.column.id,
            b.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = go(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, d = (b, S) => {
            typeof S == "number" && (t.setColumnSizingInfo((j) => {
              var R, M;
              const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, z = (S - ((R = j == null ? void 0 : j.startOffset) != null ? R : 0)) * P, v = Math.max(z / ((M = j == null ? void 0 : j.startSize) != null ? M : 0), -0.999999);
              return j.columnSizingStart.forEach((_) => {
                let [w, $] = _;
                u[w] = Math.round(Math.max($ + $ * v, 0) * 100) / 100;
              }), {
                ...j,
                deltaOffset: z,
                deltaPercentage: v
              };
            }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((j) => ({
              ...j,
              ...u
            })));
          }, f = (b) => d("move", b), g = (b) => {
            d("end", b), t.setColumnSizingInfo((S) => ({
              ...S,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, p = Ju(n), h = {
            moveHandler: (b) => f(b.clientX),
            upHandler: (b) => {
              p == null ? void 0 : p.removeEventListener("mousemove", h.moveHandler), p == null ? void 0 : p.removeEventListener("mouseup", h.upHandler), g(b.clientX);
            }
          }, m = {
            moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), f(b.touches[0].clientX), false),
            upHandler: (b) => {
              var S;
              p == null ? void 0 : p.removeEventListener("touchmove", m.moveHandler), p == null ? void 0 : p.removeEventListener("touchend", m.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), g((S = b.touches[0]) == null ? void 0 : S.clientX);
            }
          }, x = Ku() ? {
            passive: false
          } : false;
          go(i) ? (p == null ? void 0 : p.addEventListener("touchmove", m.moveHandler, x), p == null ? void 0 : p.addEventListener("touchend", m.upHandler, x)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, x), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, x)), t.setColumnSizingInfo((b) => ({
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
        e.setColumnSizingInfo(t ? fo() : (n = e.initialState.columnSizingInfo) != null ? n : fo());
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
  let Nn = null;
  function Ku() {
    if (typeof Nn == "boolean") return Nn;
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
    return Nn = e, Nn;
  }
  function go(e) {
    return e.type === "touchstart";
  }
  const Qu = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Ke("columnVisibility", e)
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
      e._getAllVisibleCells = H(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((o) => o.column.getIsVisible()), B(t.options, "debugRows")), e.getVisibleCells = H(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, o, r) => [
        ...n,
        ...o,
        ...r
      ], B(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, o) => H(() => [
        o(),
        o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")
      ], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), B(e.options, "debugColumns"));
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
  function hn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const Zu = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, ed = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ke("globalFilter", e),
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
      e.getGlobalAutoFilterFn = () => vt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return to(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : vt[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, td = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Ke("expanded", e),
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
  }, Io = 0, Fo = 10, ho = () => ({
    pageIndex: Io,
    pageSize: Fo
  }), nd = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...ho(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Ke("pagination", e)
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
        const r = (i) => $t(o, i);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? ho() : (r = e.initialState.pagination) != null ? r : ho());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let i = $t(o, r.pageIndex);
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
          const i = Math.max(1, $t(o, r.pageSize)), s = r.pageSize * r.pageIndex, l = Math.floor(s / i);
          return {
            ...r,
            pageIndex: l,
            pageSize: i
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var i;
        let s = $t(o, (i = e.options.pageCount) != null ? i : -1);
        return typeof s == "number" && (s = Math.max(-1, s)), {
          ...r,
          pageCount: s
        };
      }), e.getPageOptions = H(() => [
        e.getPageCount()
      ], (o) => {
        let r = [];
        return o && o > 0 && (r = [
          ...new Array(o)
        ].fill(null).map((i, s) => s)), r;
      }, B(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
  }, mo = () => ({
    top: [],
    bottom: []
  }), od = {
    getInitialState: (e) => ({
      rowPinning: mo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ke("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, o, r) => {
        const i = o ? e.getLeafRows().map((a) => {
          let { id: u } = a;
          return u;
        }) : [], s = r ? e.getParentRows().map((a) => {
          let { id: u } = a;
          return u;
        }) : [], l = /* @__PURE__ */ new Set([
          ...s,
          e.id,
          ...i
        ]);
        t.setRowPinning((a) => {
          var u, d;
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
            top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((m) => !(l != null && l.has(m))),
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
        return e.setRowPinning(t ? mo() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : mo());
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
      }, e.getTopRows = H(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), B(e.options, "debugRows")), e.getBottomRows = H(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), B(e.options, "debugRows")), e.getCenterRows = H(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, o) => {
        const r = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...o ?? []
        ]);
        return t.filter((i) => !r.has(i.id));
      }, B(e.options, "debugRows"));
    }
  }, rd = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Ke("rowSelection", e),
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
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = H(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? yo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, B(e.options, "debugTable")), e.getFilteredSelectedRowModel = H(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? yo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, B(e.options, "debugTable")), e.getGroupedSelectedRowModel = H(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? yo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, B(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
  function yo(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, i = function(s, l) {
      return s.map((a) => {
        var u;
        const d = qo(a, n);
        if (d && (o.push(a), r[a.id] = a), (u = a.subRows) != null && u.length && (a = {
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
  const To = /([0-9]+)/gm, id = (e, t, n) => Si(At(e.getValue(n)).toLowerCase(), At(t.getValue(n)).toLowerCase()), sd = (e, t, n) => Si(At(e.getValue(n)), At(t.getValue(n))), ld = (e, t, n) => Yo(At(e.getValue(n)).toLowerCase(), At(t.getValue(n)).toLowerCase()), ad = (e, t, n) => Yo(At(e.getValue(n)), At(t.getValue(n))), cd = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, ud = (e, t, n) => Yo(e.getValue(n), t.getValue(n));
  function Yo(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function At(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Si(e, t) {
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
  const rn = {
    alphanumeric: id,
    alphanumericCaseSensitive: sd,
    text: ld,
    textCaseSensitive: ad,
    datetime: cd,
    basic: ud
  }, dd = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Ke("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let o = false;
        for (const r of n) {
          const i = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(i) === "[object Date]") return rn.datetime;
          if (typeof i == "string" && (o = true, i.split(To).length > 1)) return rn.alphanumeric;
        }
        return o ? rn.text : rn.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return to(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : rn[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, o) => {
        const r = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
        t.setSorting((s) => {
          const l = s == null ? void 0 : s.find((p) => p.id === e.id), a = s == null ? void 0 : s.findIndex((p) => p.id === e.id);
          let u = [], d, f = i ? n : r === "desc";
          if (s != null && s.length && e.getCanMultiSort() && o ? l ? d = "toggle" : d = "add" : s != null && s.length && a !== s.length - 1 ? d = "replace" : l ? d = "toggle" : d = "replace", d === "toggle" && (i || r || (d = "remove")), d === "add") {
            var g;
            u = [
              ...s,
              {
                id: e.id,
                desc: f
              }
            ], u.splice(0, u.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else d === "toggle" ? u = s.map((p) => p.id === e.id ? {
            ...p,
            desc: f
          } : p) : d === "remove" ? u = s.filter((p) => p.id !== e.id) : u = [
            {
              id: e.id,
              desc: f
            }
          ];
          return u;
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
  }, pd = [
    zu,
    Qu,
    qu,
    Yu,
    ku,
    Tu,
    Zu,
    ed,
    dd,
    Gu,
    td,
    nd,
    od,
    rd,
    Xu
  ];
  function fd(e) {
    var t, n;
    const o = [
      ...pd,
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
    const u = [];
    let d = false;
    const f = {
      _features: o,
      options: {
        ...i,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        u.push(g), d || (d = true, Promise.resolve().then(() => {
          for (; u.length; ) u.shift()();
          d = false;
        }).catch((p) => setTimeout(() => {
          throw p;
        })));
      },
      reset: () => {
        r.setState(r.initialState);
      },
      setOptions: (g) => {
        const p = $t(g, r.options);
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
      _getDefaultColumnDef: H(() => [
        r.options.defaultColumn
      ], (g) => {
        var p;
        return g = (p = g) != null ? p : {}, {
          header: (h) => {
            const m = h.header.column.columnDef;
            return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
          },
          cell: (h) => {
            var m, x;
            return (m = (x = h.renderValue()) == null || x.toString == null ? void 0 : x.toString()) != null ? m : null;
          },
          ...r._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, B(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: H(() => [
        r._getColumnDefs()
      ], (g) => {
        const p = function(h, m, x) {
          return x === void 0 && (x = 0), h.map((b) => {
            const S = Fu(r, b, x, m), j = b;
            return S.columns = j.columns ? p(j.columns, S, x + 1) : [], S;
          });
        };
        return p(g);
      }, B(e, "debugColumns")),
      getAllFlatColumns: H(() => [
        r.getAllColumns()
      ], (g) => g.flatMap((p) => p.getFlatColumns()), B(e, "debugColumns")),
      _getAllFlatColumnsById: H(() => [
        r.getAllFlatColumns()
      ], (g) => g.reduce((p, h) => (p[h.id] = h, p), {}), B(e, "debugColumns")),
      getAllLeafColumns: H(() => [
        r.getAllColumns(),
        r._getOrderColumnsFn()
      ], (g, p) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return p(h);
      }, B(e, "debugColumns")),
      getColumn: (g) => r._getAllFlatColumnsById()[g]
    };
    Object.assign(r, f);
    for (let g = 0; g < r._features.length; g++) {
      const p = r._features[g];
      p == null || p.createTable == null || p.createTable(r);
    }
    return r;
  }
  function gd() {
    return (e) => H(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, o = function(r, i, s) {
        i === void 0 && (i = 0);
        const l = [];
        for (let u = 0; u < r.length; u++) {
          const d = Go(e, e._getRowId(r[u], u, s), r[u], u, i, void 0, s == null ? void 0 : s.id);
          if (n.flatRows.push(d), n.rowsById[d.id] = d, l.push(d), e.options.getSubRows) {
            var a;
            d.originalSubRows = e.options.getSubRows(r[u], u), (a = d.originalSubRows) != null && a.length && (d.subRows = o(d.originalSubRows, i + 1, d));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, B(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function hd(e) {
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
  function md(e, t, n) {
    return n.options.filterFromLeafRows ? yd(e, t, n) : vd(e, t, n);
  }
  function yd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, u) {
      u === void 0 && (u = 0);
      const d = [];
      for (let g = 0; g < a.length; g++) {
        var f;
        let p = a[g];
        const h = Go(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (h.columnFilters = p.columnFilters, (f = p.subRows) != null && f.length && u < s) {
          if (h.subRows = l(p.subRows, u + 1), p = h, t(p) && !h.subRows.length) {
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
  function vd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, u) {
      u === void 0 && (u = 0);
      const d = [];
      for (let g = 0; g < a.length; g++) {
        let p = a[g];
        if (t(p)) {
          var f;
          if ((f = p.subRows) != null && f.length && u < s) {
            const m = Go(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
            m.subRows = l(p.subRows, u + 1), p = m;
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
  function xd() {
    return (e) => H(() => [
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
      let u, d;
      for (let g = 0; g < t.flatRows.length; g++) {
        const p = t.flatRows[g];
        if (p.columnFilters = {}, r.length) for (let h = 0; h < r.length; h++) {
          u = r[h];
          const m = u.id;
          p.columnFilters[m] = u.filterFn(p, m, u.resolvedValue, (x) => {
            p.columnFiltersMeta[m] = x;
          });
        }
        if (i.length) {
          for (let h = 0; h < i.length; h++) {
            d = i[h];
            const m = d.id;
            if (d.filterFn(p, m, d.resolvedValue, (x) => {
              p.columnFiltersMeta[m] = x;
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
      return md(t.rows, f, e);
    }, B(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function bd(e) {
    return (t) => H(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, o) => {
      if (!o.rows.length) return o;
      const { pageSize: r, pageIndex: i } = n;
      let { rows: s, flatRows: l, rowsById: a } = o;
      const u = r * i, d = u + r;
      s = s.slice(u, d);
      let f;
      t.options.paginateExpandedRows ? f = {
        rows: s,
        flatRows: l,
        rowsById: a
      } : f = hd({
        rows: s,
        flatRows: l,
        rowsById: a
      }), f.flatRows = [];
      const g = (p) => {
        f.flatRows.push(p), p.subRows.length && p.subRows.forEach(g);
      };
      return f.rows.forEach(g), f;
    }, B(t.options, "debugTable"));
  }
  function wd() {
    return (e) => H(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const o = e.getState().sorting, r = [], i = o.filter((a) => {
        var u;
        return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
      }), s = {};
      i.forEach((a) => {
        const u = e.getColumn(a.id);
        u && (s[a.id] = {
          sortUndefined: u.columnDef.sortUndefined,
          invertSorting: u.columnDef.invertSorting,
          sortingFn: u.getSortingFn()
        });
      });
      const l = (a) => {
        const u = a.map((d) => ({
          ...d
        }));
        return u.sort((d, f) => {
          for (let p = 0; p < i.length; p += 1) {
            var g;
            const h = i[p], m = s[h.id], x = m.sortUndefined, b = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let S = 0;
            if (x) {
              const j = d.getValue(h.id), R = f.getValue(h.id), M = j === void 0, P = R === void 0;
              if (M || P) {
                if (x === "first") return M ? -1 : 1;
                if (x === "last") return M ? 1 : -1;
                S = M && P ? 0 : M ? x : -x;
              }
            }
            if (S === 0 && (S = m.sortingFn(d, f, h.id)), S !== 0) return b && (S *= -1), m.invertSorting && (S *= -1), S;
          }
          return d.index - f.index;
        }), u.forEach((d) => {
          var f;
          r.push(d), (f = d.subRows) != null && f.length && (d.subRows = l(d.subRows));
        }), u;
      };
      return {
        rows: l(n.rows),
        flatRows: r,
        rowsById: n.rowsById
      };
    }, B(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function sn(e, t) {
    return e ? Cd(e) ? y.createElement(e, t) : e : null;
  }
  function Cd(e) {
    return Sd(e) || typeof e == "function" || _d(e);
  }
  function Sd(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function _d(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function jd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: fd(t)
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
  function Lt(e, t, n) {
    let o = n.initialDeps ?? [], r, i = true;
    function s() {
      var l, a, u;
      let d;
      n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now());
      const f = e();
      if (!(f.length !== o.length || f.some((h, m) => o[m] !== h))) return r;
      o = f;
      let p;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (p = Date.now()), r = t(...f), n.key && ((u = n.debug) != null && u.call(n))) {
        const h = Math.round((Date.now() - d) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, x = m / 16, b = (S, j) => {
          for (S = String(S); S.length < j; ) S = " " + S;
          return S;
        };
        console.info(`%c\u23F1 ${b(m, 5)} /${b(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * x, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
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
  const Rd = (e, t) => Math.abs(e - t) < 1.01, Md = (e, t, n) => {
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
  }, $d = (e) => e, Ad = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, Pd = (e, t) => {
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
          const u = a.borderBoxSize[0];
          if (u) {
            r({
              width: u.inlineSize,
              height: u.blockSize
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
  }, Or = {
    passive: true
  }, Er = typeof window > "u" ? true : "onscrollend" in window, Id = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const i = e.options.useScrollendEvent && Er ? () => {
    } : Md(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), s = (d) => () => {
      const { horizontal: f, isRtl: g } = e.options;
      r = f ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(r, d);
    }, l = s(true), a = s(false);
    n.addEventListener("scroll", l, Or);
    const u = e.options.useScrollendEvent && Er;
    return u && n.addEventListener("scrollend", a, Or), () => {
      n.removeEventListener("scroll", l), u && n.removeEventListener("scrollend", a);
    };
  }, Fd = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, zd = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, i;
    const s = e + t;
    (i = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || i.call(r, {
      [o.options.horizontal ? "left" : "top"]: s,
      behavior: n
    });
  };
  class kd {
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
          getItemKey: $d,
          rangeExtractor: Ad,
          onChange: () => {
          },
          measureElement: Fd,
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
      }, this.maybeNotify = Lt(() => (this.calculateRange(), [
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
      }, this.getMeasurementOptions = Lt(() => [
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
      }), this.getMeasurements = Lt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: o, scrollMargin: r, getItemKey: i, enabled: s, lanes: l }, a) => {
        if (!s) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const u = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const d = this.measurementsCache.slice(0, u), f = new Array(l).fill(void 0);
        for (let g = 0; g < u; g++) {
          const p = d[g];
          p && (f[p.lane] = g);
        }
        for (let g = u; g < n; g++) {
          const p = i(g), h = this.laneAssignments.get(g);
          let m, x;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const R = f[m], M = R !== void 0 ? d[R] : void 0;
            x = M ? M.end + this.options.gap : o + r;
          } else {
            const R = this.options.lanes === 1 ? d[g - 1] : this.getFurthestMeasurement(d, g);
            x = R ? R.end + this.options.gap : o + r, m = R ? R.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const b = a.get(p), S = typeof b == "number" ? b : this.options.estimateSize(g), j = x + S;
          d[g] = {
            index: g,
            start: x,
            size: S,
            end: j,
            key: p,
            lane: m
          }, f[m] = g;
        }
        return this.measurementsCache = d, d;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Lt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, i) => this.range = n.length > 0 && o > 0 ? Td({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: i
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Lt(() => {
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
      }, this.getVirtualItems = Lt(() => [
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
        if (o.length !== 0) return Tr(o[_i(0, o.length - 1, (r) => Tr(o[r]).start, n)]);
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
        const s = 10, l = (u) => {
          if (!this.targetWindow) return;
          const d = this.getOffsetForIndex(n, u);
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
              Rd(m[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(p) : p();
          });
        }, a = (u) => {
          this.targetWindow && this.currentScrollToIndex === n && (i++, i < s ? this.targetWindow.requestAnimationFrame(() => l(u)) : console.warn(`Failed to scroll to index ${n} after ${s} attempts.`));
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
  const _i = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, i = n(r);
      if (i < o) e = r + 1;
      else if (i > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Td({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, i = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let s = _i(0, r, i, n), l = s;
    if (o === 1) for (; l < r && e[l].end < n + t; ) l++;
    else if (o > 1) {
      const a = Array(o).fill(0);
      for (; l < r && a.some((d) => d < n + t); ) {
        const d = e[l];
        a[d.lane] = d.end, l++;
      }
      const u = Array(o).fill(n + t);
      for (; s >= 0 && u.some((d) => d >= n); ) {
        const d = e[s];
        u[d.lane] = d.start, s--;
      }
      s = Math.max(0, s - s % o), l = Math.min(r, l + (o - 1 - l % o));
    }
    return {
      startIndex: s,
      endIndex: l
    };
  }
  const Nr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Dd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (i, s) => {
        var l;
        e && s ? Ni.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, i, s);
      }
    }, [r] = y.useState(() => new kd(o));
    return r.setOptions(o), Nr(() => r._didMount(), []), Nr(() => r._willUpdate()), r;
  }
  function Od(e) {
    return Dd({
      observeElementRect: Pd,
      observeElementOffset: Id,
      scrollToFn: zd,
      ...e
    });
  }
  const Ed = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Nd = {
    compact: 36,
    standard: 56,
    comfortable: 68
  };
  function Ld(e) {
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
  function Ln(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = ui(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  const Vd = () => {
    var _a2, _b;
    const e = y.useContext(Li), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = Vi("oid"), i = Ki("oid"), s = Cn(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", u = y.useMemo(() => {
      if (i == null) return [];
      let A;
      if (typeof i == "string") try {
        A = JSON.parse(i);
      } catch {
        return [];
      }
      else A = i;
      return Array.isArray(A) ? A : typeof A == "object" && A !== null ? [
        A
      ] : [];
    }, [
      i
    ]), d = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: f, rows: g } = ju(u, d), p = y.useMemo(() => ai(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = n.data.tableDensity || "standard", m = Number(n.data.tableRowHeight) || Ed[h] || 52, x = Number(n.data.tableHeaderHeight) || Nd[h] || 56, b = y.useCallback((A, I) => {
      var _a3, _b2;
      let G = A != null ? typeof A == "object" ? JSON.stringify(A) : String(A) : "";
      if (I.format) switch (I.format.type) {
        case "number":
          (typeof A == "number" || typeof A == "string" && !isNaN(Number(A))) && (G = ci(Number(A), {
            decimals: I.format.numberDecimals,
            prefix: I.format.numberPrefix,
            suffix: I.format.numberSuffix,
            thousands: I.format.numberThousandsSeparator
          }));
          break;
        case "date":
          G = di(A, I.format.dateFormat, I.format.dateInputFormat);
          break;
        case "boolean":
          G = Mo(A, I.format.booleanTrue, I.format.booleanFalse);
          break;
        case "string":
          G = pi(G, I.format);
          break;
      }
      const V = !I.cellStyleMode || I.cellStyleMode === "first-match", he = ((_a3 = I.format) == null ? void 0 : _a3.type) === "date" ? ui(A, I.format.dateInputFormat) : A, me = {}, ne = {};
      if (I.cellStyle && I.cellStyle.length > 0) {
        for (const ye of I.cellStyle) if (ye.logic && tu(ye.logic, he)) {
          if (ye.backgroundColor && !("background" in me) && !("backgroundColor" in me)) {
            const ve = Wt(ye.backgroundColor);
            ve ? me.background = ve : me.backgroundColor = ye.backgroundColor;
          }
          if (ye.textColor && !("color" in ne) && !("background" in ne)) {
            const ve = Wt(ye.textColor);
            ve ? (ne.background = ve, ne.backgroundClip = "text", ne.WebkitBackgroundClip = "text", ne.color = "transparent") : ne.color = ye.textColor;
          }
          if (ye.fontWeight && !ne.fontWeight && (ne.fontWeight = ye.fontWeight), ye.fontStyle && !ne.fontStyle && (ne.fontStyle = ye.fontStyle), V) break;
        }
      }
      return ((_b2 = I.format) == null ? void 0 : _b2.type) === "string" && (I.format.stringFontWeight === "bold" && !ne.fontWeight && (ne.fontWeight = "bold"), I.format.stringFontStyle === "italic" && !ne.fontStyle && (ne.fontStyle = "italic"), I.format.stringFontSize && !ne.fontSize && (ne.fontSize = `${I.format.stringFontSize}px`), I.format.stringTextColor && !("color" in ne) && !("background" in ne) && (ne.color = I.format.stringTextColor)), {
        displayValue: G,
        textSx: ne,
        bgSx: me
      };
    }, []), S = y.useMemo(() => g.map((A, I) => ({
      __id: I,
      ...A
    })), [
      g
    ]), j = y.useMemo(() => {
      const A = new Map(f.map((V) => [
        V.path,
        V.dateFormat
      ])), I = n.data.tableRowSelection === true ? {
        id: "__select__",
        size: 48,
        enableResizing: false,
        enableSorting: false,
        enableColumnFilter: false,
        header: ({ table: V }) => c.jsx(yn, {
          size: "small",
          indeterminate: V.getIsSomePageRowsSelected(),
          checked: V.getIsAllPageRowsSelected(),
          onChange: V.getToggleAllPageRowsSelectedHandler(),
          "aria-label": "Select all rows"
        }),
        cell: ({ row: V }) => c.jsx(yn, {
          size: "small",
          checked: V.getIsSelected(),
          onChange: V.getToggleSelectedHandler(),
          "aria-label": "Select row"
        }),
        meta: {
          align: "center",
          width: 48
        }
      } : null;
      let G;
      return p.length > 0 ? G = p.filter((V) => V.visible).map((V) => {
        var _a3, _b2;
        const he = ((_a3 = V.format) == null ? void 0 : _a3.dateInputFormat) ?? A.get(V.path), me = ((_b2 = V.format) == null ? void 0 : _b2.type) === "date", ne = (ve, tt, Ye) => Ln(ve.getValue(Ye), he) - Ln(tt.getValue(Ye), he);
        return {
          id: V.path,
          size: V.width ?? 150,
          accessorFn: (ve) => ve[V.path],
          header: V.headerName || V.path,
          enableSorting: V.sortable ?? n.data.tableSorting !== false,
          enableColumnFilter: V.filterable ?? n.data.tableFiltering === true,
          ...me && {
            sortingFn: ne
          },
          cell: ({ getValue: ve }) => {
            const tt = ve(), { displayValue: Ye, textSx: no, bgSx: oo } = b(tt, V);
            return c.jsx(U, {
              sx: {
                width: "100%",
                height: "100%",
                display: "block",
                ...oo
              },
              children: c.jsx(T, {
                variant: "body2",
                component: "span",
                noWrap: true,
                title: Ye,
                sx: {
                  width: "100%",
                  display: "block",
                  lineHeight: "inherit",
                  ...no
                },
                children: Ye
              })
            });
          },
          meta: {
            align: V.align || "left",
            width: V.width
          }
        };
      }) : G = f.map((V) => {
        const he = V.type === "date" && V.dateFormat, me = V.dateFormat, ne = (ve, tt, Ye) => Ln(ve.getValue(Ye), me) - Ln(tt.getValue(Ye), me);
        return {
          id: V.path,
          size: 150,
          accessorFn: (ve) => ve[V.path],
          header: V.path.split(".").pop() || V.path,
          enableSorting: n.data.tableSorting !== false,
          enableColumnFilter: n.data.tableFiltering === true,
          ...he && {
            sortingFn: ne
          },
          cell: ({ getValue: ve }) => {
            const tt = ve(), Ye = tt != null ? typeof tt == "object" ? JSON.stringify(tt) : String(tt) : "";
            return c.jsx(T, {
              variant: "body2",
              component: "span",
              noWrap: true,
              title: Ye,
              sx: {
                width: "100%",
                display: "block",
                lineHeight: "inherit"
              },
              children: Ye
            });
          },
          meta: {
            align: "left"
          }
        };
      }), I ? [
        I,
        ...G
      ] : G;
    }, [
      p,
      f,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection,
      b
    ]), R = n.data.tableAutoSize === true, [M, P] = y.useState([]), [z, v] = y.useState([]), [_, w] = y.useState(""), [$, O] = y.useState({}), [F, L] = y.useState(() => {
      if (R) return {};
      const A = `jtc_col_sizes_${o}`;
      try {
        const G = localStorage.getItem(A);
        if (G) return JSON.parse(G);
      } catch {
      }
      const I = {};
      return p.forEach((G) => {
        G.width && (I[G.path] = G.width);
      }), n.data.tableRowSelection === true && (I.__select__ = 48), I;
    });
    y.useEffect(() => {
      if (!R) try {
        localStorage.setItem(`jtc_col_sizes_${o}`, JSON.stringify(F));
      } catch {
      }
    }, [
      F,
      o,
      R
    ]), y.useEffect(() => {
      n.data.tableQuickFilter || w("");
    }, [
      n.data.tableQuickFilter,
      w
    ]), y.useEffect(() => {
      n.data.tableFiltering || v([]);
    }, [
      n.data.tableFiltering,
      v
    ]), y.useEffect(() => {
      n.data.tableSorting || P([]);
    }, [
      n.data.tableSorting,
      P
    ]);
    const E = y.useMemo(() => Number(n.data.tablePageSize) || 25, [
      n.data.tablePageSize
    ]), [N, D] = y.useState({
      pageIndex: 0,
      pageSize: E
    });
    y.useEffect(() => {
      D((A) => A.pageSize === E ? A : {
        pageIndex: 0,
        pageSize: E
      });
    }, [
      E
    ]);
    const J = y.useMemo(() => n.data.tablePagination === false ? {
      pageIndex: 0,
      pageSize: Math.max(S.length, 1)
    } : N, [
      n.data.tablePagination,
      S.length,
      N
    ]), K = y.useMemo(() => Ld(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), oe = jd({
      data: S,
      columns: j,
      getCoreRowModel: gd(),
      getSortedRowModel: wd(),
      getFilteredRowModel: xd(),
      getPaginationRowModel: bd(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: "includesString",
      columnResizeMode: "onChange",
      enableColumnResizing: !R,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3
      },
      state: {
        sorting: M,
        columnFilters: z,
        globalFilter: _,
        pagination: J,
        rowSelection: $,
        columnSizing: F
      },
      onSortingChange: P,
      onColumnFiltersChange: v,
      onGlobalFilterChange: w,
      onPaginationChange: n.data.tablePagination !== false ? D : void 0,
      onRowSelectionChange: O,
      onColumnSizingChange: L,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), ue = y.useRef(null), $e = y.useRef(null), [Ae, _e] = y.useState({}), [ae, k] = y.useState(null), te = y.useRef(null), [re, ze] = y.useState(void 0), [Ve, Ee] = y.useState(void 0), de = y.useCallback((A, I) => {
      var _a3;
      te.current = A;
      const G = A.id, V = M.find((me) => me.id === G), he = (_a3 = z.find((me) => me.id === G)) == null ? void 0 : _a3.value;
      ze(V), Ee(he), k(I);
    }, [
      M,
      z
    ]), je = y.useCallback(() => {
      k(null);
    }, []);
    y.useEffect(() => {
      if (!R) return;
      const A = $e.current;
      if (!A) return;
      const I = new ResizeObserver(() => {
        const G = A.querySelector("tr[data-row-index]");
        if (!G) return;
        const V = G.querySelectorAll("td"), he = oe.getHeaderGroups()[0];
        if (!he || V.length !== he.headers.length) return;
        const me = {};
        he.headers.forEach((ne, ye) => {
          const ve = V[ye];
          ve && (me[ne.id] = ve.getBoundingClientRect().width);
        }), _e(me);
      });
      return I.observe(A), () => I.disconnect();
    }, [
      R,
      oe
    ]);
    const Pe = y.useMemo(() => {
      const A = {
        tableLayout: R ? "auto" : "fixed",
        width: "100%"
      };
      return n.data.tableShowRowBorders === false && (A["& .MuiTableCell-root"] = {
        borderBottom: "none"
      }), n.data.tableShowCellBorders === true && (A["& .MuiTableCell-root"] = {
        ...A["& .MuiTableCell-root"],
        borderRight: "1px solid",
        borderRightColor: "divider"
      }), A;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      R
    ]), Qe = n.data.tableHeaderBgColor, Ze = n.data.tableHeaderTextColor, He = n.data.tableHeaderFontSize, wt = y.useMemo(() => ({
      height: x,
      whiteSpace: "nowrap",
      ...Ze && {
        color: Ze
      },
      ...He && {
        fontSize: `${He}px`
      }
    }), [
      x,
      Ze,
      He
    ]), Ct = y.useMemo(() => ({
      ...Ze && {
        color: Ze
      },
      ...He && {
        fontSize: `${He}px`
      }
    }), [
      Ze,
      He
    ]), qe = n.data.noCard === true, gt = y.useMemo(() => {
      const A = n.data.tableHeaderElevation ?? 6, I = qe ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: A > 0 ? s.shadows[A] : "none"
      }, G = Qe ? Wt(Qe) : null;
      return G ? {
        ...I,
        background: G
      } : Qe ? {
        ...I,
        backgroundColor: Qe
      } : I;
    }, [
      qe,
      Qe,
      s.shadows,
      n.data.tableHeaderElevation
    ]), ut = y.useCallback((A) => R ? Ae[A.id] ?? "auto" : A.getSize(), [
      R,
      Ae
    ]), St = y.useMemo(() => ({
      ...n.data.tableCellFontSize && {
        fontSize: `${n.data.tableCellFontSize}px`
      },
      overflow: "hidden",
      height: m,
      maxHeight: m,
      padding: "0 8px"
    }), [
      n.data.tableCellFontSize,
      m
    ]), et = n.data.tableStripedColor, _t = et ? Wt(et) : null, It = y.useCallback((A) => {
      if (!(!et || A % 2 === 0)) return {
        background: _t || et,
        ..._t ? {} : {
          backgroundColor: et
        }
      };
    }, [
      et,
      _t
    ]), st = oe.getRowModel().rows, Ft = Od({
      count: st.length,
      getScrollElement: () => ue.current,
      estimateSize: () => m,
      overscan: 10
    }), zt = n.data.tableVirtualizeThreshold ?? 50, Re = n.data.tablePagination === false && st.length > zt ? Ft.getVirtualItems() : null, jt = Re && Re.length > 0 ? Re[0].start : 0, dt = Re && Re.length > 0 ? Ft.getTotalSize() - (Re[Re.length - 1].end ?? 0) : 0;
    return c.jsxs(Hi, {
      isValidType: a,
      data: r,
      oidValue: i,
      children: [
        c.jsx(Bi, {
          data: r,
          widget: n
        }),
        a && j.length > 0 ? c.jsxs(U, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(U, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(ke, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: _,
                onChange: (A) => w(A.target.value),
                placeholder: C.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(jo, {
                      position: "start",
                      children: c.jsx(li, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            c.jsx(La, {
              ref: ue,
              sx: {
                flex: 1,
                overflow: "auto"
              },
              children: c.jsxs(Ma, {
                size: h === "compact" ? "small" : "medium",
                sx: Pe,
                children: [
                  c.jsxs(Ga, {
                    sx: {
                      position: "sticky",
                      top: 0,
                      zIndex: 2,
                      ...gt,
                      "& .resize-handle": {
                        opacity: 0
                      },
                      "&:hover .resize-handle": {
                        opacity: 1
                      }
                    },
                    children: [
                      oe.getHeaderGroups().map((A) => c.jsx(Nt, {
                        children: A.headers.map((I) => {
                          const G = I.column.getCanSort(), V = I.column.getIsSorted(), he = I.column.columnDef.meta, me = I.column.id === "__select__", ne = !R;
                          return c.jsxs(lt, {
                            component: "th",
                            colSpan: I.colSpan,
                            align: (he == null ? void 0 : he.align) || "left",
                            padding: me ? "checkbox" : "normal",
                            sx: {
                              width: ut(I),
                              minWidth: me ? 48 : 40,
                              position: "relative",
                              ...wt
                            },
                            children: [
                              me ? sn(I.column.columnDef.header, I.getContext()) : c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (he == null ? void 0 : he.align) === "right" ? "flex-end" : (he == null ? void 0 : he.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  G ? c.jsx(vc, {
                                    active: V !== false,
                                    direction: V === "desc" ? "desc" : "asc",
                                    onClick: I.column.getToggleSortingHandler(),
                                    children: c.jsx(T, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: Ct,
                                      children: sn(I.column.columnDef.header, I.getContext())
                                    })
                                  }) : c.jsx(T, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: Ct,
                                    children: sn(I.column.columnDef.header, I.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && c.jsx(We, {
                                    title: C.t("json_table_column_menu"),
                                    children: c.jsx(Me, {
                                      size: "small",
                                      "aria-label": C.t("json_table_column_menu"),
                                      onClick: (ye) => {
                                        ye.stopPropagation(), de(I.column, ye.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: c.jsx(bc, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              ne && I.column.getCanResize() && c.jsx(U, {
                                className: "resize-handle",
                                onMouseDown: I.getResizeHandler(),
                                onTouchStart: I.getResizeHandler(),
                                onClick: (ye) => ye.stopPropagation(),
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
                      }, A.id)),
                      n.data.tableFiltering === true && c.jsx(Nt, {
                        children: (_a2 = oe.getHeaderGroups()[0]) == null ? void 0 : _a2.headers.map((A) => {
                          if (A.column.id === "__select__") return c.jsx(lt, {
                            component: "th",
                            colSpan: A.colSpan,
                            padding: "checkbox",
                            sx: {
                              width: ut(A),
                              py: 0.5,
                              px: 0.5
                            }
                          }, A.id);
                          if (!A.column.getCanFilter()) return c.jsx(lt, {
                            component: "th",
                            colSpan: A.colSpan,
                            sx: {
                              width: ut(A),
                              py: 0.5,
                              px: 0.5
                            }
                          }, A.id);
                          const I = A.column.getFilterValue() ?? "";
                          return c.jsx(lt, {
                            component: "th",
                            colSpan: A.colSpan,
                            sx: {
                              width: ut(A),
                              py: 0.5,
                              px: 0.5
                            },
                            children: c.jsx(ke, {
                              size: "small",
                              variant: "standard",
                              fullWidth: true,
                              value: I,
                              onChange: (G) => A.column.setFilterValue(G.target.value || void 0),
                              placeholder: C.t("json_table_filter_placeholder"),
                              slotProps: {
                                input: {
                                  endAdornment: I ? c.jsx(jo, {
                                    position: "end",
                                    children: c.jsx(We, {
                                      title: C.t("json_table_filter_clear"),
                                      children: c.jsx(Me, {
                                        size: "small",
                                        onClick: () => A.column.setFilterValue(void 0),
                                        "aria-label": C.t("json_table_filter_clear"),
                                        children: c.jsx(Ro, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  }) : void 0
                                }
                              }
                            })
                          }, A.id);
                        })
                      })
                    ]
                  }),
                  c.jsx(Fa, {
                    ref: $e,
                    children: Re ? c.jsxs(c.Fragment, {
                      children: [
                        jt > 0 && c.jsx(Nt, {
                          children: c.jsx(lt, {
                            colSpan: j.length,
                            sx: {
                              height: jt,
                              p: 0,
                              border: "none"
                            }
                          })
                        }),
                        Re.map((A) => {
                          const I = st[A.index], G = A.index;
                          return c.jsx(Nt, {
                            "data-row-index": G,
                            sx: {
                              height: m,
                              ...It(G)
                            },
                            children: I.getVisibleCells().map((V) => {
                              var _a3;
                              const he = V.column.id === "__select__";
                              return c.jsx(lt, {
                                align: ((_a3 = V.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                                padding: he ? "checkbox" : "normal",
                                sx: St,
                                children: sn(V.column.columnDef.cell, V.getContext())
                              }, V.id);
                            })
                          }, I.id);
                        }),
                        dt > 0 && c.jsx(Nt, {
                          children: c.jsx(lt, {
                            colSpan: j.length,
                            sx: {
                              height: dt,
                              p: 0,
                              border: "none"
                            }
                          })
                        })
                      ]
                    }) : st.map((A, I) => c.jsx(Nt, {
                      "data-row-index": I,
                      sx: {
                        height: m,
                        ...It(I)
                      },
                      children: A.getVisibleCells().map((G) => {
                        var _a3;
                        const V = G.column.id === "__select__";
                        return c.jsx(lt, {
                          align: ((_a3 = G.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                          padding: V ? "checkbox" : "normal",
                          sx: St,
                          children: sn(G.column.columnDef.cell, G.getContext())
                        }, G.id);
                      })
                    }, A.id))
                  })
                ]
              })
            }),
            n.data.tablePagination !== false && c.jsx(cc, {
              component: "div",
              count: oe.getFilteredRowModel().rows.length,
              page: N.pageIndex,
              rowsPerPage: N.pageSize,
              rowsPerPageOptions: K,
              onPageChange: (A, I) => D((G) => ({
                ...G,
                pageIndex: I
              })),
              onRowsPerPageChange: (A) => D({
                pageIndex: 0,
                pageSize: parseInt(A.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(T, {
                variant: "body2",
                component: "span",
                children: C.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: A, to: I, count: G }) => c.jsx(T, {
                variant: "body2",
                component: "span",
                children: `${A}\u2013${I} / ${G}`
              }),
              slotProps: {
                select: {
                  renderValue: (A) => c.jsxs(T, {
                    variant: "body2",
                    component: "span",
                    children: [
                      "Pups",
                      String(A)
                    ]
                  })
                },
                menuItem: {
                  sx: {
                    typography: "body2"
                  }
                }
              }
            }),
            c.jsxs(Wi, {
              anchorEl: ae,
              open: !!ae,
              onClose: je,
              children: [
                c.jsxs(Ie, {
                  onClick: () => {
                    te.current && P([
                      {
                        id: te.current.id,
                        desc: false
                      }
                    ]), je();
                  },
                  children: [
                    c.jsx(si, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: C.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(Ie, {
                  onClick: () => {
                    te.current && P([
                      {
                        id: te.current.id,
                        desc: true
                      }
                    ]), je();
                  },
                  children: [
                    c.jsx(ii, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: C.t("json_table_sort_desc")
                    })
                  ]
                }),
                re && c.jsx(Ie, {
                  onClick: () => {
                    P([]), je();
                  },
                  children: c.jsx(T, {
                    variant: "body2",
                    children: C.t("json_table_sort_clear")
                  })
                }),
                n.data.tableFiltering === true && ((_b = te.current) == null ? void 0 : _b.getCanFilter()) === true && Ve && c.jsxs(Ie, {
                  onClick: () => {
                    var _a3;
                    (_a3 = te.current) == null ? void 0 : _a3.setFilterValue(void 0), je();
                  },
                  children: [
                    c.jsx(Ro, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: C.t("json_table_filter_clear")
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
          children: c.jsx(T, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? C.t("json_table_no_oid") : a ? p.length > 0 && j.length === 0 ? C.t("json_table_all_columns_hidden") : C.t("json_table_no_data") : C.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Hd = [
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
  Do = class extends C {
    static createObjectFields() {
      const t = Gi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (i, s, l, a) => {
          if (!s.oid) {
            for (const u of Hd) delete s[u];
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
              ...$u()
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
      return Ui(this.wrapContent(c.jsx(Vd, {})), n);
    }
  };
});
export {
  __tla,
  Do as default
};
