import { g as Ce, a as Se, u as _e, Z as Si, _ as _i, $ as Hn, a0 as Ft, h as Dt, j as c, s as Y, d as se, e as Re, a1 as Lo, m as fe, a2 as Ar, b as ie, P as ot, B as Tn, c as ue, I as je, W, a3 as lo, M as ao, X as Rt, a4 as Zt, a5 as Ri, f as Vo, a6 as ji, a7 as Mo, i as Ee, a8 as Pr, a9 as sn, U as Mi, aa as $i, T as k, ab as Ho, ac as Ai, ad as Ir, ae as co, af as Pi, ag as Bo, ah as Ii, R as Qt, o as q, ai as ke, G as C, aj as Fi, ak as zi, al as Pn, am as In, D as ki, w as zt, an as Ti, ao as Di, C as dt, F as Yn, ap as Oi, n as Ei, q as Ni, x as Li, y as Vi, aq as Hi, A as Bi, z as Wo, E as Wi, __tla as __tla_0 } from "./useData-B9ZrPGFV.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as ln, __tla as __tla_2 } from "./Checkbox-C1s5DkiE.js";
import { S as Ve, __tla as __tla_3 } from "./Stack-BXcGSMV_.js";
import { T as Fr, a as Dn, __tla as __tla_4 } from "./ToggleButtonGroup-Du_vpcqa.js";
import { M as We, __tla as __tla_5 } from "./MenuItem-CBPgh-ig.js";
import { C as zr, __tla as __tla_6 } from "./Close-BaVCh89c.js";
import { B as an, __tla as __tla_7 } from "./Button-B-tNf451.js";
import { F as pt, __tla as __tla_8 } from "./FormControlLabel-CnJhmOqm.js";
import { S as _t, __tla as __tla_9 } from "./Switch-sFS5B12S.js";
import { S as Gi, __tla as __tla_10 } from "./Slider-Bri4S_1w.js";
import { D as Ui, a as qi, b as Yi, __tla as __tla_11 } from "./DialogTitle-DKPM9osg.js";
import { u as Ji, __tla as __tla_12 } from "./useOidValue-Dudms15G.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Bo6-_dj-.js";
import { __tla as __tla_14 } from "./listItemTextClasses-B9pgY4io.js";
let jo;
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
  function Ki(e) {
    return Ce("MuiCollapse", e);
  }
  Se("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Xi = (e) => {
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
    return Re(o, Ki, n);
  }, Zi = Y("div", {
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
  }))), Qi = Y("div", {
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
  }), es = Y("div", {
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
  }), uo = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: i, className: s, collapsedSize: l = "0px", component: a, easing: u, in: d, onEnter: f, onEntered: g, onEntering: p, onExit: h, onExited: m, onExiting: x, orientation: b = "vertical", style: S, timeout: R = Si.standard, TransitionComponent: j = _i, ...$ } = o, P = {
      ...o,
      orientation: b,
      collapsedSize: l
    }, z = Xi(P), v = Hn(), _ = Ft(), w = y.useRef(null), M = y.useRef(), D = typeof l == "number" ? `${l}px` : l, A = b === "horizontal", T = A ? "width" : "height", L = y.useRef(null), B = Dt(n, L), O = (N) => (le) => {
      if (N) {
        const oe = L.current;
        le === void 0 ? N(oe) : N(oe, le);
      }
    }, K = () => w.current ? w.current[A ? "clientWidth" : "clientHeight"] : 0, X = O((N, le) => {
      w.current && A && (w.current.style.position = "absolute"), N.style[T] = D, f && f(N, le);
    }), ge = O((N, le) => {
      const oe = K();
      w.current && A && (w.current.style.position = "");
      const { duration: Fe, easing: Ne } = Lo({
        style: S,
        timeout: R,
        easing: u
      }, {
        mode: "enter"
      });
      if (R === "auto") {
        const $e = v.transitions.getAutoHeightDuration(oe);
        N.style.transitionDuration = `${$e}ms`, M.current = $e;
      } else N.style.transitionDuration = typeof Fe == "string" ? Fe : `${Fe}ms`;
      N.style[T] = `${oe}px`, N.style.transitionTimingFunction = Ne, p && p(N, le);
    }), de = O((N, le) => {
      N.style[T] = "auto", g && g(N, le);
    }), re = O((N) => {
      N.style[T] = `${K()}px`, h && h(N);
    }), be = O(m), G = O((N) => {
      const le = K(), { duration: oe, easing: Fe } = Lo({
        style: S,
        timeout: R,
        easing: u
      }, {
        mode: "exit"
      });
      if (R === "auto") {
        const Ne = v.transitions.getAutoHeightDuration(le);
        N.style.transitionDuration = `${Ne}ms`, M.current = Ne;
      } else N.style.transitionDuration = typeof oe == "string" ? oe : `${oe}ms`;
      N.style[T] = D, N.style.transitionTimingFunction = Fe, x && x(N);
    }), Me = (N) => {
      R === "auto" && _.start(M.current || 0, N), r && r(L.current, N);
    };
    return c.jsx(j, {
      in: d,
      onEnter: X,
      onEntered: de,
      onEntering: ge,
      onExit: re,
      onExited: be,
      onExiting: G,
      addEndListener: Me,
      nodeRef: L,
      timeout: R === "auto" ? null : R,
      ...$,
      children: (N, { ownerState: le, ...oe }) => c.jsx(Zi, {
        as: a,
        className: se(z.root, s, {
          entered: z.entered,
          exited: !d && D === "0px" && z.hidden
        }[N]),
        style: {
          [A ? "minWidth" : "minHeight"]: D,
          ...S
        },
        ref: B,
        ownerState: {
          ...P,
          state: N
        },
        ...oe,
        children: c.jsx(Qi, {
          ownerState: {
            ...P,
            state: N
          },
          className: z.wrapper,
          ref: w,
          children: c.jsx(es, {
            ownerState: {
              ...P,
              state: N
            },
            className: z.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  uo && (uo.muiSupportAuto = true);
  const kr = y.createContext({});
  function ts(e) {
    return Ce("MuiAccordion", e);
  }
  const mn = Se("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), ns = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: i } = e;
    return Re({
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
    }, ts, t);
  }, os = Y(ot, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${mn.region}`]: t.region
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
      [`&.${mn.expanded}`]: {
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
      [`&.${mn.disabled}`]: {
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
          [`&.${mn.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), rs = Y("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), yn = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: i, defaultExpanded: s = false, disabled: l = false, disableGutters: a = false, expanded: u, onChange: d, square: f = false, slots: g = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: m, ...x } = o, [b, S] = Ar({
      controlled: u,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), R = y.useCallback((K) => {
      S(!b), d && d(K, !b);
    }, [
      b,
      d,
      S
    ]), [j, ...$] = y.Children.toArray(r), P = y.useMemo(() => ({
      expanded: b,
      disabled: l,
      disableGutters: a,
      toggle: R
    }), [
      b,
      l,
      a,
      R
    ]), z = {
      ...o,
      square: f,
      disabled: l,
      disableGutters: a,
      expanded: b
    }, v = ns(z), _ = {
      transition: h,
      ...g
    }, w = {
      transition: m,
      ...p
    }, M = {
      slots: _,
      slotProps: w
    }, [D, A] = ie("root", {
      elementType: os,
      externalForwardedProps: {
        ...M,
        ...x
      },
      className: se(v.root, i),
      shouldForwardComponentProp: true,
      ownerState: z,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [T, L] = ie("heading", {
      elementType: rs,
      externalForwardedProps: M,
      className: v.heading,
      ownerState: z
    }), [B, O] = ie("transition", {
      elementType: uo,
      externalForwardedProps: M,
      ownerState: z
    });
    return c.jsxs(D, {
      ...A,
      children: [
        c.jsx(T, {
          ...L,
          children: c.jsx(kr.Provider, {
            value: P,
            children: j
          })
        }),
        c.jsx(B, {
          in: b,
          timeout: "auto",
          ...O,
          children: c.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: v.region,
            children: $
          })
        })
      ]
    });
  });
  function is(e) {
    return Ce("MuiAccordionDetails", e);
  }
  Se("MuiAccordionDetails", [
    "root"
  ]);
  const ss = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ]
    }, is, t);
  }, ls = Y("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), vn = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...i } = o, s = o, l = ss(s);
    return c.jsx(ls, {
      className: se(l.root, r),
      ref: n,
      ownerState: s,
      ...i
    });
  });
  function as(e) {
    return Ce("MuiAccordionSummary", e);
  }
  const kt = Se("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), cs = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return Re({
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
    }, as, t);
  }, us = Y(Tn, {
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
      [`&.${kt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${kt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${kt.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${kt.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), ds = Y("span", {
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
          [`&.${kt.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), ps = Y("span", {
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
    [`&.${kt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), xn = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: i, expandIcon: s, focusVisibleClassName: l, onClick: a, slots: u, slotProps: d, ...f } = o, { disabled: g = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(kr), x = (w) => {
      m && m(w), a && a(w);
    }, b = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: p
    }, S = cs(b), R = {
      slots: u,
      slotProps: d
    }, [j, $] = ie("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(S.root, i),
      elementType: us,
      externalForwardedProps: {
        ...R,
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
        onClick: (M) => {
          var _a2;
          (_a2 = w.onClick) == null ? void 0 : _a2.call(w, M), x(M);
        }
      })
    }), [P, z] = ie("content", {
      className: S.content,
      elementType: ds,
      externalForwardedProps: R,
      ownerState: b
    }), [v, _] = ie("expandIconWrapper", {
      className: S.expandIconWrapper,
      elementType: ps,
      externalForwardedProps: R,
      ownerState: b
    });
    return c.jsxs(j, {
      ...$,
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
  function fs(e) {
    return Ce("MuiAlert", e);
  }
  const Go = Se("MuiAlert", [
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
  ]), gs = ue(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), hs = ue(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), ms = ue(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), ys = ue(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), vs = ue(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), xs = (e) => {
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
    return Re(i, fs, r);
  }, bs = Y(ot, {
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
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? lo : ao, n = e.palette.mode === "light" ? ao : lo;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Rt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${Go.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Rt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${Go.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Rt([
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
  })), ws = Y("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), Cs = Y("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), Ss = Y("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), Uo = {
    success: c.jsx(gs, {
      fontSize: "inherit"
    }),
    warning: c.jsx(hs, {
      fontSize: "inherit"
    }),
    error: c.jsx(ms, {
      fontSize: "inherit"
    }),
    info: c.jsx(ys, {
      fontSize: "inherit"
    })
  }, _s = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: i, className: s, closeText: l = "Close", color: a, components: u = {}, componentsProps: d = {}, icon: f, iconMapping: g = Uo, onClose: p, role: h = "alert", severity: m = "success", slotProps: x = {}, slots: b = {}, variant: S = "standard", ...R } = o, j = {
      ...o,
      color: a,
      severity: m,
      variant: S,
      colorSeverity: a || m
    }, $ = xs(j), P = {
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
      className: se($.root, s),
      elementType: bs,
      externalForwardedProps: {
        ...P,
        ...R
      },
      ownerState: j,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [_, w] = ie("icon", {
      className: $.icon,
      elementType: ws,
      externalForwardedProps: P,
      ownerState: j
    }), [M, D] = ie("message", {
      className: $.message,
      elementType: Cs,
      externalForwardedProps: P,
      ownerState: j
    }), [A, T] = ie("action", {
      className: $.action,
      elementType: Ss,
      externalForwardedProps: P,
      ownerState: j
    }), [L, B] = ie("closeButton", {
      elementType: je,
      externalForwardedProps: P,
      ownerState: j
    }), [O, K] = ie("closeIcon", {
      elementType: vs,
      externalForwardedProps: P,
      ownerState: j
    });
    return c.jsxs(z, {
      ...v,
      children: [
        f !== false ? c.jsx(_, {
          ...w,
          children: f || g[m] || Uo[m]
        }) : null,
        c.jsx(M, {
          ...D,
          children: i
        }),
        r != null ? c.jsx(A, {
          ...T,
          children: r
        }) : null,
        r == null && p ? c.jsx(A, {
          ...T,
          children: c.jsx(L, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...B,
            children: c.jsx(O, {
              fontSize: "small",
              ...K
            })
          })
        }) : null
      ]
    });
  });
  var Ue = "top", et = "bottom", tt = "right", qe = "left", $o = "auto", pn = [
    Ue,
    et,
    tt,
    qe
  ], Ot = "start", cn = "end", Rs = "clippingParents", Tr = "viewport", Ht = "popper", js = "reference", qo = pn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Ot,
      t + "-" + cn
    ]);
  }, []), Dr = [].concat(pn, [
    $o
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Ot,
      t + "-" + cn
    ]);
  }, []), Ms = "beforeRead", $s = "read", As = "afterRead", Ps = "beforeMain", Is = "main", Fs = "afterMain", zs = "beforeWrite", ks = "write", Ts = "afterWrite", Ds = [
    Ms,
    $s,
    As,
    Ps,
    Is,
    Fs,
    zs,
    ks,
    Ts
  ];
  function ct(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Ke(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Mt(e) {
    var t = Ke(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Qe(e) {
    var t = Ke(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Ao(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ke(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Os(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
      !Qe(i) || !ct(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
        var l = r[s];
        l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
      }));
    });
  }
  function Es(e) {
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
        !Qe(r) || !ct(r) || (Object.assign(r.style, l), Object.keys(i).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Ns = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Os,
    effect: Es,
    requires: [
      "computeStyles"
    ]
  };
  function at(e) {
    return e.split("-")[0];
  }
  var jt = Math.max, On = Math.min, Et = Math.round;
  function po() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Or() {
    return !/^((?!chrome|android).)*safari/i.test(po());
  }
  function Nt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, i = 1;
    t && Qe(e) && (r = e.offsetWidth > 0 && Et(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Et(o.height) / e.offsetHeight || 1);
    var s = Mt(e) ? Ke(e) : window, l = s.visualViewport, a = !Or() && n, u = (o.left + (a && l ? l.offsetLeft : 0)) / r, d = (o.top + (a && l ? l.offsetTop : 0)) / i, f = o.width / r, g = o.height / i;
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
  function Po(e) {
    var t = Nt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Er(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Ao(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function mt(e) {
    return Ke(e).getComputedStyle(e);
  }
  function Ls(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(ct(e)) >= 0;
  }
  function Ct(e) {
    return ((Mt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Bn(e) {
    return ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ao(e) ? e.host : null) || Ct(e);
  }
  function Yo(e) {
    return !Qe(e) || mt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Vs(e) {
    var t = /firefox/i.test(po()), n = /Trident/i.test(po());
    if (n && Qe(e)) {
      var o = mt(e);
      if (o.position === "fixed") return null;
    }
    var r = Bn(e);
    for (Ao(r) && (r = r.host); Qe(r) && [
      "html",
      "body"
    ].indexOf(ct(r)) < 0; ) {
      var i = mt(r);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function fn(e) {
    for (var t = Ke(e), n = Yo(e); n && Ls(n) && mt(n).position === "static"; ) n = Yo(n);
    return n && (ct(n) === "html" || ct(n) === "body" && mt(n).position === "static") ? t : n || Vs(e) || t;
  }
  function Io(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function en(e, t, n) {
    return jt(e, On(t, n));
  }
  function Hs(e, t, n) {
    var o = en(e, t, n);
    return o > n ? n : o;
  }
  function Nr() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Lr(e) {
    return Object.assign({}, Nr(), e);
  }
  function Vr(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Bs = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Lr(typeof t != "number" ? t : Vr(t, pn));
  };
  function Ws(e) {
    var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = at(n.placement), a = Io(l), u = [
      qe,
      tt
    ].indexOf(l) >= 0, d = u ? "height" : "width";
    if (!(!i || !s)) {
      var f = Bs(r.padding, n), g = Po(i), p = a === "y" ? Ue : qe, h = a === "y" ? et : tt, m = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], x = s[a] - n.rects.reference[a], b = fn(i), S = b ? a === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, R = m / 2 - x / 2, j = f[p], $ = S - g[d] - f[h], P = S / 2 - g[d] / 2 + R, z = en(j, P, $), v = a;
      n.modifiersData[o] = (t = {}, t[v] = z, t.centerOffset = z - P, t);
    }
  }
  function Gs(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Er(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Us = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Ws,
    effect: Gs,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Lt(e) {
    return e.split("-")[1];
  }
  var qs = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Ys(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Et(n * r) / r || 0,
      y: Et(o * r) / r || 0
    };
  }
  function Jo(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = s.x, p = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, x = typeof d == "function" ? d({
      x: p,
      y: m
    }) : {
      x: p,
      y: m
    };
    p = x.x, m = x.y;
    var b = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), R = qe, j = Ue, $ = window;
    if (u) {
      var P = fn(n), z = "clientHeight", v = "clientWidth";
      if (P === Ke(n) && (P = Ct(n), mt(P).position !== "static" && l === "absolute" && (z = "scrollHeight", v = "scrollWidth")), P = P, r === Ue || (r === qe || r === tt) && i === cn) {
        j = et;
        var _ = f && P === $ && $.visualViewport ? $.visualViewport.height : P[z];
        m -= _ - o.height, m *= a ? 1 : -1;
      }
      if (r === qe || (r === Ue || r === et) && i === cn) {
        R = tt;
        var w = f && P === $ && $.visualViewport ? $.visualViewport.width : P[v];
        p -= w - o.width, p *= a ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: l
    }, u && qs), D = d === true ? Ys({
      x: p,
      y: m
    }, Ke(n)) : {
      x: p,
      y: m
    };
    if (p = D.x, m = D.y, a) {
      var A;
      return Object.assign({}, M, (A = {}, A[j] = S ? "0" : "", A[R] = b ? "0" : "", A.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", A));
    }
    return Object.assign({}, M, (t = {}, t[j] = S ? m + "px" : "", t[R] = b ? p + "px" : "", t.transform = "", t));
  }
  function Js(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, u = {
      placement: at(t.placement),
      variation: Lt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Jo(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jo(Object.assign({}, u, {
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
    fn: Js,
    data: {}
  };
  var bn = {
    passive: true
  };
  function Xs(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? true : r, s = o.resize, l = s === void 0 ? true : s, a = Ke(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function(d) {
      d.addEventListener("scroll", n.update, bn);
    }), l && a.addEventListener("resize", n.update, bn), function() {
      i && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, bn);
      }), l && a.removeEventListener("resize", n.update, bn);
    };
  }
  const Zs = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Xs,
    data: {}
  };
  var Qs = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Fn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Qs[t];
    });
  }
  var el = {
    start: "end",
    end: "start"
  };
  function Ko(e) {
    return e.replace(/start|end/g, function(t) {
      return el[t];
    });
  }
  function Fo(e) {
    var t = Ke(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function zo(e) {
    return Nt(Ct(e)).left + Fo(e).scrollLeft;
  }
  function tl(e, t) {
    var n = Ke(e), o = Ct(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
    if (r) {
      i = r.width, s = r.height;
      var u = Or();
      (u || !u && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l + zo(e),
      y: a
    };
  }
  function nl(e) {
    var t, n = Ct(e), o = Fo(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = jt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = jt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + zo(e), a = -o.scrollTop;
    return mt(r || n).direction === "rtl" && (l += jt(n.clientWidth, r ? r.clientWidth : 0) - i), {
      width: i,
      height: s,
      x: l,
      y: a
    };
  }
  function ko(e) {
    var t = mt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function Hr(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Qe(e) && ko(e) ? e : Hr(Bn(e));
  }
  function tn(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Hr(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ke(o), s = r ? [
      i
    ].concat(i.visualViewport || [], ko(o) ? o : []) : o, l = t.concat(s);
    return r ? l : l.concat(tn(Bn(s)));
  }
  function fo(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function ol(e, t) {
    var n = Nt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function Xo(e, t, n) {
    return t === Tr ? fo(tl(e, n)) : Mt(t) ? ol(t, n) : fo(nl(Ct(e)));
  }
  function rl(e) {
    var t = tn(Bn(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(mt(e).position) >= 0, o = n && Qe(e) ? fn(e) : e;
    return Mt(o) ? t.filter(function(r) {
      return Mt(r) && Er(r, o) && ct(r) !== "body";
    }) : [];
  }
  function il(e, t, n, o) {
    var r = t === "clippingParents" ? rl(e) : [].concat(t), i = [].concat(r, [
      n
    ]), s = i[0], l = i.reduce(function(a, u) {
      var d = Xo(e, u, o);
      return a.top = jt(d.top, a.top), a.right = On(d.right, a.right), a.bottom = On(d.bottom, a.bottom), a.left = jt(d.left, a.left), a;
    }, Xo(e, s, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function Br(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? at(o) : null, i = o ? Lt(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case Ue:
        a = {
          x: s,
          y: t.y - n.height
        };
        break;
      case et:
        a = {
          x: s,
          y: t.y + t.height
        };
        break;
      case tt:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case qe:
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
    var u = r ? Io(r) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (i) {
        case Ot:
          a[u] = a[u] - (t[d] / 2 - n[d] / 2);
          break;
        case cn:
          a[u] = a[u] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return a;
  }
  function un(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? Rs : l, u = n.rootBoundary, d = u === void 0 ? Tr : u, f = n.elementContext, g = f === void 0 ? Ht : f, p = n.altBoundary, h = p === void 0 ? false : p, m = n.padding, x = m === void 0 ? 0 : m, b = Lr(typeof x != "number" ? x : Vr(x, pn)), S = g === Ht ? js : Ht, R = e.rects.popper, j = e.elements[h ? S : g], $ = il(Mt(j) ? j : j.contextElement || Ct(e.elements.popper), a, d, s), P = Nt(e.elements.reference), z = Br({
      reference: P,
      element: R,
      placement: r
    }), v = fo(Object.assign({}, R, z)), _ = g === Ht ? v : P, w = {
      top: $.top - _.top + b.top,
      bottom: _.bottom - $.bottom + b.bottom,
      left: $.left - _.left + b.left,
      right: _.right - $.right + b.right
    }, M = e.modifiersData.offset;
    if (g === Ht && M) {
      var D = M[r];
      Object.keys(w).forEach(function(A) {
        var T = [
          tt,
          et
        ].indexOf(A) >= 0 ? 1 : -1, L = [
          Ue,
          et
        ].indexOf(A) >= 0 ? "y" : "x";
        w[A] += D[L] * T;
      });
    }
    return w;
  }
  function sl(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? Dr : a, d = Lt(o), f = d ? l ? qo : qo.filter(function(h) {
      return Lt(h) === d;
    }) : pn, g = f.filter(function(h) {
      return u.indexOf(h) >= 0;
    });
    g.length === 0 && (g = f);
    var p = g.reduce(function(h, m) {
      return h[m] = un(e, {
        placement: m,
        boundary: r,
        rootBoundary: i,
        padding: s
      })[at(m)], h;
    }, {});
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  function ll(e) {
    if (at(e) === $o) return [];
    var t = Fn(e);
    return [
      Ko(e),
      t,
      Ko(t)
    ];
  }
  function al(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, m = n.allowedAutoPlacements, x = t.options.placement, b = at(x), S = b === x, R = a || (S || !h ? [
        Fn(x)
      ] : ll(x)), j = [
        x
      ].concat(R).reduce(function(G, Me) {
        return G.concat(at(Me) === $o ? sl(t, {
          placement: Me,
          boundary: d,
          rootBoundary: f,
          padding: u,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : Me);
      }, []), $ = t.rects.reference, P = t.rects.popper, z = /* @__PURE__ */ new Map(), v = true, _ = j[0], w = 0; w < j.length; w++) {
        var M = j[w], D = at(M), A = Lt(M) === Ot, T = [
          Ue,
          et
        ].indexOf(D) >= 0, L = T ? "width" : "height", B = un(t, {
          placement: M,
          boundary: d,
          rootBoundary: f,
          altBoundary: g,
          padding: u
        }), O = T ? A ? tt : qe : A ? et : Ue;
        $[L] > P[L] && (O = Fn(O));
        var K = Fn(O), X = [];
        if (i && X.push(B[D] <= 0), l && X.push(B[O] <= 0, B[K] <= 0), X.every(function(G) {
          return G;
        })) {
          _ = M, v = false;
          break;
        }
        z.set(M, X);
      }
      if (v) for (var ge = h ? 3 : 1, de = function(Me) {
        var N = j.find(function(le) {
          var oe = z.get(le);
          if (oe) return oe.slice(0, Me).every(function(Fe) {
            return Fe;
          });
        });
        if (N) return _ = N, "break";
      }, re = ge; re > 0; re--) {
        var be = de(re);
        if (be === "break") break;
      }
      t.placement !== _ && (t.modifiersData[o]._skip = true, t.placement = _, t.reset = true);
    }
  }
  const cl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: al,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Zo(e, t, n) {
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
  function Qo(e) {
    return [
      Ue,
      tt,
      et,
      qe
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function ul(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = un(t, {
      elementContext: "reference"
    }), l = un(t, {
      altBoundary: true
    }), a = Zo(s, o), u = Zo(l, r, i), d = Qo(a), f = Qo(u);
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
  const dl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: ul
  };
  function pl(e, t, n) {
    var o = at(e), r = [
      qe,
      Ue
    ].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * r, [
      qe,
      tt
    ].indexOf(o) >= 0 ? {
      x: l,
      y: s
    } : {
      x: s,
      y: l
    };
  }
  function fl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [
      0,
      0
    ] : r, s = Dr.reduce(function(d, f) {
      return d[f] = pl(f, t.rects, i), d;
    }, {}), l = s[t.placement], a = l.x, u = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
  }
  const gl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: fl
  };
  function hl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Br({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const ml = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: hl,
    data: {}
  };
  function yl(e) {
    return e === "x" ? "y" : "x";
  }
  function vl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, g = n.tether, p = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, x = un(t, {
      boundary: a,
      rootBoundary: u,
      padding: f,
      altBoundary: d
    }), b = at(t.placement), S = Lt(t.placement), R = !S, j = Io(b), $ = yl(j), P = t.modifiersData.popperOffsets, z = t.rects.reference, v = t.rects.popper, _ = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, w = typeof _ == "number" ? {
      mainAxis: _,
      altAxis: _
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, _), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
      x: 0,
      y: 0
    };
    if (P) {
      if (i) {
        var A, T = j === "y" ? Ue : qe, L = j === "y" ? et : tt, B = j === "y" ? "height" : "width", O = P[j], K = O + x[T], X = O - x[L], ge = p ? -v[B] / 2 : 0, de = S === Ot ? z[B] : v[B], re = S === Ot ? -v[B] : -z[B], be = t.elements.arrow, G = p && be ? Po(be) : {
          width: 0,
          height: 0
        }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nr(), N = Me[T], le = Me[L], oe = en(0, z[B], G[B]), Fe = R ? z[B] / 2 - ge - oe - N - w.mainAxis : de - oe - N - w.mainAxis, Ne = R ? -z[B] / 2 + ge + oe + le + w.mainAxis : re + oe + le + w.mainAxis, $e = t.elements.arrow && fn(t.elements.arrow), ae = $e ? j === "y" ? $e.clientTop || 0 : $e.clientLeft || 0 : 0, ze = (A = M == null ? void 0 : M[j]) != null ? A : 0, Ae = O + Fe - ze - ae, yt = O + Ne - ze, it = en(p ? On(K, Ae) : K, O, p ? jt(X, yt) : X);
        P[j] = it, D[j] = it - O;
      }
      if (l) {
        var st, St = j === "x" ? Ue : qe, Le = j === "x" ? et : tt, Ye = P[$], lt = $ === "y" ? "height" : "width", I = Ye + x[St], F = Ye - x[Le], U = [
          Ue,
          qe
        ].indexOf(b) !== -1, E = (st = M == null ? void 0 : M[$]) != null ? st : 0, Pe = U ? I : Ye - z[lt] - v[lt] - E + w.altAxis, ve = U ? Ye + z[lt] + v[lt] - E - w.altAxis : F, ne = p && U ? Hs(Pe, Ye, ve) : en(p ? Pe : I, Ye, p ? ve : F);
        P[$] = ne, D[$] = ne - Ye;
      }
      t.modifiersData[o] = D;
    }
  }
  const xl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: vl,
    requiresIfExists: [
      "offset"
    ]
  };
  function bl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function wl(e) {
    return e === Ke(e) || !Qe(e) ? Fo(e) : bl(e);
  }
  function Cl(e) {
    var t = e.getBoundingClientRect(), n = Et(t.width) / e.offsetWidth || 1, o = Et(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function Sl(e, t, n) {
    n === void 0 && (n = false);
    var o = Qe(t), r = Qe(t) && Cl(t), i = Ct(t), s = Nt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((ct(t) !== "body" || ko(i)) && (l = wl(t)), Qe(t) ? (a = Nt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = zo(i))), {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function _l(e) {
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
    var t = _l(e);
    return Ds.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function jl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Ml(e) {
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
  var er = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function tr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function $l(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? er : r;
    return function(l, a, u) {
      u === void 0 && (u = i);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, er, i),
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
            reference: Mt(l) ? tn(l) : l.contextElement ? tn(l.contextElement) : [],
            popper: tn(a)
          };
          var R = Rl(Ml([].concat(o, d.options.modifiers)));
          return d.orderedModifiers = R.filter(function(j) {
            return j.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!g) {
            var b = d.elements, S = b.reference, R = b.popper;
            if (tr(S, R)) {
              d.rects = {
                reference: Sl(S, fn(R), d.options.strategy === "fixed"),
                popper: Po(R)
              }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(w) {
                return d.modifiersData[w.name] = Object.assign({}, w.data);
              });
              for (var j = 0; j < d.orderedModifiers.length; j++) {
                if (d.reset === true) {
                  d.reset = false, j = -1;
                  continue;
                }
                var $ = d.orderedModifiers[j], P = $.fn, z = $.options, v = z === void 0 ? {} : z, _ = $.name;
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
        update: jl(function() {
          return new Promise(function(x) {
            p.forceUpdate(), x(d);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!tr(l, a)) return p;
      p.setOptions(u).then(function(x) {
        !g && u.onFirstUpdate && u.onFirstUpdate(x);
      });
      function h() {
        d.orderedModifiers.forEach(function(x) {
          var b = x.name, S = x.options, R = S === void 0 ? {} : S, j = x.effect;
          if (typeof j == "function") {
            var $ = j({
              state: d,
              name: b,
              instance: p,
              options: R
            }), P = function() {
            };
            f.push($ || P);
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
  var Al = [
    Zs,
    ml,
    Ks,
    Ns,
    gl,
    cl,
    xl,
    Us,
    dl
  ], Pl = $l({
    defaultModifiers: Al
  });
  function Il(e) {
    return Ce("MuiPopper", e);
  }
  Se("MuiPopper", [
    "root"
  ]);
  function Fl(e, t) {
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
  function go(e) {
    return typeof e == "function" ? e() : e;
  }
  function zl(e) {
    return e.nodeType !== void 0;
  }
  const kl = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ]
    }, Il, t);
  }, Tl = {}, Dl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: i, disablePortal: s, modifiers: l, open: a, placement: u, popperOptions: d, popperRef: f, slotProps: g = {}, slots: p = {}, TransitionProps: h, ownerState: m, ...x } = t, b = y.useRef(null), S = Dt(b, n), R = y.useRef(null), j = Dt(R, f), $ = y.useRef(j);
    Vo(() => {
      $.current = j;
    }, [
      j
    ]), y.useImperativeHandle(f, () => R.current, []);
    const P = Fl(u, i), [z, v] = y.useState(P), [_, w] = y.useState(go(o));
    y.useEffect(() => {
      R.current && R.current.forceUpdate();
    }), y.useEffect(() => {
      o && w(go(o));
    }, [
      o
    ]), Vo(() => {
      if (!_ || !a) return;
      const L = (K) => {
        v(K.placement);
      };
      let B = [
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
          fn: ({ state: K }) => {
            L(K);
          }
        }
      ];
      l != null && (B = B.concat(l)), d && d.modifiers != null && (B = B.concat(d.modifiers));
      const O = Pl(_, b.current, {
        placement: P,
        ...d,
        modifiers: B
      });
      return $.current(O), () => {
        O.destroy(), $.current(null);
      };
    }, [
      _,
      s,
      l,
      a,
      d,
      P
    ]);
    const M = {
      placement: z
    };
    h !== null && (M.TransitionProps = h);
    const D = kl(t), A = p.root ?? "div", T = ji({
      elementType: A,
      externalSlotProps: g.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: S
      },
      ownerState: t,
      className: D.root
    });
    return c.jsx(A, {
      ...T,
      children: typeof r == "function" ? r(M) : r
    });
  }), Ol = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: u, open: d, placement: f = "bottom", popperOptions: g = Tl, popperRef: p, style: h, transition: m = false, slotProps: x = {}, slots: b = {}, ...S } = t, [R, j] = y.useState(true), $ = () => {
      j(false);
    }, P = () => {
      j(true);
    };
    if (!a && !d && (!m || R)) return null;
    let z;
    if (i) z = i;
    else if (o) {
      const w = go(o);
      z = w && zl(w) ? Zt(w).body : Zt(null).body;
    }
    const v = !d && a && (!m || R) ? "none" : void 0, _ = m ? {
      in: d,
      onEnter: $,
      onExited: P
    } : void 0;
    return c.jsx(Ri, {
      disablePortal: l,
      container: z,
      children: c.jsx(Dl, {
        anchorEl: o,
        direction: s,
        disablePortal: l,
        modifiers: u,
        ref: n,
        open: m ? !R : d,
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
  }), El = Y(Ol, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Wr = y.forwardRef(function(t, n) {
    const o = Mo(), r = _e({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: s, components: l, componentsProps: a, container: u, disablePortal: d, keepMounted: f, modifiers: g, open: p, placement: h, popperOptions: m, popperRef: x, transition: b, slots: S, slotProps: R, ...j } = r, $ = (S == null ? void 0 : S.root) ?? (l == null ? void 0 : l.Root), P = {
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
      ...j
    };
    return c.jsx(El, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: $
      },
      slotProps: R ?? a,
      ...P,
      ref: n
    });
  }), Nl = ue(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Ll(e) {
    return Ce("MuiChip", e);
  }
  const Z = Se("MuiChip", [
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
  ]), Vl = (e) => {
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
    return Re(u, Ll, t);
  }, Hl = Y("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: i, onDelete: s, size: l, variant: a } = n;
      return [
        {
          [`& .${Z.avatar}`]: t.avatar
        },
        {
          [`& .${Z.avatar}`]: t[`avatar${W(l)}`]
        },
        {
          [`& .${Z.avatar}`]: t[`avatarColor${W(o)}`]
        },
        {
          [`& .${Z.icon}`]: t.icon
        },
        {
          [`& .${Z.icon}`]: t[`icon${W(l)}`]
        },
        {
          [`& .${Z.icon}`]: t[`iconColor${W(r)}`]
        },
        {
          [`& .${Z.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${Z.deleteIcon}`]: t[`deleteIcon${W(l)}`]
        },
        {
          [`& .${Z.deleteIcon}`]: t[`deleteIconColor${W(o)}`]
        },
        {
          [`& .${Z.deleteIcon}`]: t[`deleteIcon${W(a)}Color${W(o)}`]
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
      [`&.${Z.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${Z.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${Z.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${Z.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${Z.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${Z.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${Z.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Ee(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ee(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${Z.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${Z.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(Rt([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${Z.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Ee(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${Z.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${Z.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${Z.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ee(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Rt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${Z.focusVisible}`]: {
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ee(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${Z.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ee(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Rt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${Z.focusVisible}`]: {
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
            [`&.${Z.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${Z.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${Z.avatar}`]: {
              marginLeft: 4
            },
            [`& .${Z.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${Z.icon}`]: {
              marginLeft: 4
            },
            [`& .${Z.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${Z.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${Z.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(Rt()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Ee(e.palette[n].main, 0.7)}`,
            [`&.${Z.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ee(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${Z.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ee(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${Z.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Ee(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Bl = Y("span", {
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
  function nr(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const zn = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: i, clickable: s, color: l = "default", component: a, deleteIcon: u, disabled: d = false, icon: f, label: g, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: x, size: b = "medium", variant: S = "filled", tabIndex: R, skipFocusWhenDisabled: j = false, ...$ } = o, P = y.useRef(null), z = Dt(P, n), v = (X) => {
      X.stopPropagation(), h && h(X);
    }, _ = (X) => {
      X.currentTarget === X.target && nr(X) && X.preventDefault(), m && m(X);
    }, w = (X) => {
      X.currentTarget === X.target && h && nr(X) && h(X), x && x(X);
    }, M = s !== false && p ? true : s, D = M || h ? Tn : a || "div", A = {
      ...o,
      component: D,
      disabled: d,
      size: b,
      color: l,
      iconColor: y.isValidElement(f) && f.props.color || l,
      onDelete: !!h,
      clickable: M,
      variant: S
    }, T = Vl(A), L = D === Tn ? {
      component: a || "div",
      focusVisibleClassName: T.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let B = null;
    h && (B = u && y.isValidElement(u) ? y.cloneElement(u, {
      className: se(u.props.className, T.deleteIcon),
      onClick: v
    }) : c.jsx(Nl, {
      className: se(T.deleteIcon),
      onClick: v
    }));
    let O = null;
    r && y.isValidElement(r) && (O = y.cloneElement(r, {
      className: se(T.avatar, r.props.className)
    }));
    let K = null;
    return f && y.isValidElement(f) && (K = y.cloneElement(f, {
      className: se(T.icon, f.props.className)
    })), c.jsxs(Hl, {
      as: D,
      className: se(T.root, i),
      disabled: M && d ? true : void 0,
      onClick: p,
      onKeyDown: _,
      onKeyUp: w,
      ref: z,
      tabIndex: j && d ? -1 : R,
      ownerState: A,
      ...L,
      ...$,
      children: [
        O || K,
        c.jsx(Bl, {
          className: se(T.label),
          ownerState: A,
          children: g
        }),
        B
      ]
    });
  });
  function Wl(e) {
    return Ce("MuiCard", e);
  }
  Se("MuiCard", [
    "root"
  ]);
  const Gl = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ]
    }, Wl, t);
  }, Ul = Y(ot, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), ql = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: i = false, ...s } = o, l = {
      ...o,
      raised: i
    }, a = Gl(l);
    return c.jsx(Ul, {
      className: se(a.root, r),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...s
    });
  });
  function or(e) {
    return e.substring(2).toLowerCase();
  }
  function Yl(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Jl(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: i = "onTouchEnd" } = e, s = y.useRef(false), l = y.useRef(null), a = y.useRef(false), u = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const d = Dt(Pr(t), l), f = sn((h) => {
      const m = u.current;
      u.current = false;
      const x = Zt(l.current);
      if (!a.current || !l.current || "clientX" in h && Yl(h, x)) return;
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
        const h = or(i), m = Zt(l.current), x = () => {
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
        const h = or(o), m = Zt(l.current);
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
    return Ce("MuiDialogActions", e);
  }
  Se("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const Xl = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Re({
      root: [
        "root",
        !n && "spacing"
      ]
    }, Kl, t);
  }, Zl = Y("div", {
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
  }), Ql = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: i = false, ...s } = o, l = {
      ...o,
      disableSpacing: i
    }, a = Xl(l);
    return c.jsx(Zl, {
      className: se(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  });
  function ea(e) {
    return Ce("MuiInputAdornment", e);
  }
  const rr = Se("MuiInputAdornment", [
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
  var ir;
  const ta = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${W(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, na = (e) => {
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
    return Re(l, ea, t);
  }, oa = Y("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: ta
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
          [`&.${rr.positionStart}&:not(.${rr.hiddenLabel})`]: {
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
  }))), ho = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: i, component: s = "div", disablePointerEvents: l = false, disableTypography: a = false, position: u, variant: d, ...f } = o, g = Mi() || {};
    let p = d;
    d && g.variant, g && !p && (p = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: u,
      variant: p
    }, m = na(h);
    return c.jsx($i.Provider, {
      value: null,
      children: c.jsx(oa, {
        as: s,
        ownerState: h,
        className: se(m.root, i),
        ref: n,
        ...f,
        children: typeof r == "string" && !a ? c.jsx(k, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(y.Fragment, {
          children: [
            u === "start" ? ir || (ir = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), ra = ue(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), ia = ue(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function sa(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: i } = e, s = Ft();
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
    const l = sn((b, S) => {
      o == null ? void 0 : o(b, S);
    }), a = sn((b) => {
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
      const R = b.onBlur;
      R == null ? void 0 : R(S), f();
    }, p = (b) => (S) => {
      const R = b.onFocus;
      R == null ? void 0 : R(S), d();
    }, h = (b) => (S) => {
      const R = b.onMouseEnter;
      R == null ? void 0 : R(S), d();
    }, m = (b) => (S) => {
      const R = b.onMouseLeave;
      R == null ? void 0 : R(S), f();
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
          ...Ho(e),
          ...Ho(b)
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
  function la(e) {
    return Ce("MuiSnackbarContent", e);
  }
  Se("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const aa = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, la, t);
  }, ca = Y(ot, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Ai(e.palette.background.default, t);
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
  })), ua = Y("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), da = Y("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), pa = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: i, message: s, role: l = "alert", ...a } = o, u = o, d = aa(u);
    return c.jsxs(ca, {
      role: l,
      square: true,
      elevation: 6,
      className: se(d.root, i),
      ownerState: u,
      ref: n,
      ...a,
      children: [
        c.jsx(ua, {
          className: d.message,
          ownerState: u,
          children: s
        }),
        r ? c.jsx(da, {
          className: d.action,
          ownerState: u,
          children: r
        }) : null
      ]
    });
  });
  function fa(e) {
    return Ce("MuiSnackbar", e);
  }
  Se("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const ga = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${W(n.vertical)}${W(n.horizontal)}`
      ]
    };
    return Re(o, fa, t);
  }, ha = Y("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${W(n.anchorOrigin.vertical)}${W(n.anchorOrigin.horizontal)}`]
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
  }))), ma = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiSnackbar"
    }), r = Hn(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: u = null, children: d, className: f, ClickAwayListenerProps: g, ContentProps: p, disableWindowBlurListener: h = false, message: m, onBlur: x, onClose: b, onFocus: S, onMouseEnter: R, onMouseLeave: j, open: $, resumeHideDuration: P, slots: z = {}, slotProps: v = {}, TransitionComponent: _, transitionDuration: w = i, TransitionProps: { onEnter: M, onExited: D, ...A } = {}, ...T } = o, L = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: u,
      disableWindowBlurListener: h,
      TransitionComponent: _,
      transitionDuration: w
    }, B = ga(L), { getRootProps: O, onClickAway: K } = sa({
      ...L
    }), [X, ge] = y.useState(true), de = (ze) => {
      ge(true), D && D(ze);
    }, re = (ze, Ae) => {
      ge(false), M && M(ze, Ae);
    }, be = {
      slots: {
        transition: _,
        ...z
      },
      slotProps: {
        content: p,
        clickAwayListener: g,
        transition: A,
        ...v
      }
    }, [G, Me] = ie("root", {
      ref: n,
      className: [
        B.root,
        f
      ],
      elementType: ha,
      getSlotProps: O,
      externalForwardedProps: {
        ...be,
        ...T
      },
      ownerState: L
    }), [N, { ownerState: le, ...oe }] = ie("clickAwayListener", {
      elementType: Jl,
      externalForwardedProps: be,
      getSlotProps: (ze) => ({
        onClickAway: (...Ae) => {
          var _a2;
          (_a2 = ze.onClickAway) == null ? void 0 : _a2.call(ze, ...Ae), K(...Ae);
        }
      }),
      ownerState: L
    }), [Fe, Ne] = ie("content", {
      elementType: pa,
      shouldForwardComponentProp: true,
      externalForwardedProps: be,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: L
    }), [$e, ae] = ie("transition", {
      elementType: Ir,
      externalForwardedProps: be,
      getSlotProps: (ze) => ({
        onEnter: (...Ae) => {
          var _a2;
          (_a2 = ze.onEnter) == null ? void 0 : _a2.call(ze, ...Ae), re(...Ae);
        },
        onExited: (...Ae) => {
          var _a2;
          (_a2 = ze.onExited) == null ? void 0 : _a2.call(ze, ...Ae), de(...Ae);
        }
      }),
      additionalProps: {
        appear: true,
        in: $,
        timeout: w,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: L
    });
    return !$ && X ? null : c.jsx(N, {
      ...oe,
      ...z.clickAwayListener && {
        ownerState: le
      },
      children: c.jsx(G, {
        ...Me,
        children: c.jsx($e, {
          ...ae,
          children: d || c.jsx(Fe, {
            ...Ne
          })
        })
      })
    });
  });
  function ya(e) {
    return Ce("MuiTooltip", e);
  }
  const we = Se("MuiTooltip", [
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
  function va(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const xa = (e) => {
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
    return Re(s, ya, t);
  }, ba = Y(Wr, {
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
          [`&[data-popper-placement*="bottom"] .${we.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${we.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${we.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${we.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${we.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${we.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${we.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${we.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), wa = Y("div", {
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
  })(fe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ee(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${we.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${we.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${we.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${we.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${va(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${we.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${we.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${we.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${we.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${we.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${we.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${we.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${we.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${we.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${we.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Ca = Y("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(fe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Ee(e.palette.grey[700], 0.9),
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
  let wn = false;
  const sr = new Pi();
  let Bt = {
    x: 0,
    y: 0
  };
  function Cn(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Ge = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: i, classes: s, components: l = {}, componentsProps: a = {}, describeChild: u = false, disableFocusListener: d = false, disableHoverListener: f = false, disableInteractive: g = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: x = 700, followCursor: b = false, id: S, leaveDelay: R = 0, leaveTouchDelay: j = 1500, onClose: $, onOpen: P, open: z, placement: v = "bottom", PopperComponent: _, PopperProps: w = {}, slotProps: M = {}, slots: D = {}, title: A, TransitionComponent: T, TransitionProps: L, ...B } = o, O = y.isValidElement(i) ? i : c.jsx("span", {
      children: i
    }), K = Hn(), X = Mo(), [ge, de] = y.useState(), [re, be] = y.useState(null), G = y.useRef(false), Me = g || b, N = Ft(), le = Ft(), oe = Ft(), Fe = Ft(), [Ne, $e] = Ar({
      controlled: z,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let ae = Ne;
    const ze = co(S), Ae = y.useRef(), yt = sn(() => {
      Ae.current !== void 0 && (document.body.style.WebkitUserSelect = Ae.current, Ae.current = void 0), Fe.clear();
    });
    y.useEffect(() => yt, [
      yt
    ]);
    const it = (J) => {
      sr.clear(), wn = true, $e(true), P && !ae && P(J);
    }, st = sn((J) => {
      sr.start(800 + R, () => {
        wn = false;
      }), $e(false), $ && ae && $(J), N.start(K.transitions.duration.shortest, () => {
        G.current = false;
      });
    }), St = (J) => {
      G.current && J.type !== "touchstart" || (ge && ge.removeAttribute("title"), le.clear(), oe.clear(), h || wn && m ? le.start(wn ? m : h, () => {
        it(J);
      }) : it(J));
    }, Le = (J) => {
      le.clear(), oe.start(R, () => {
        st(J);
      });
    }, [, Ye] = y.useState(false), lt = (J) => {
      Bo(J.target) || (Ye(false), Le(J));
    }, I = (J) => {
      ge || de(J.currentTarget), Bo(J.target) && (Ye(true), St(J));
    }, F = (J) => {
      G.current = true;
      const vt = O.props;
      vt.onTouchStart && vt.onTouchStart(J);
    }, U = (J) => {
      F(J), oe.clear(), N.clear(), yt(), Ae.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Fe.start(x, () => {
        document.body.style.WebkitUserSelect = Ae.current, St(J);
      });
    }, E = (J) => {
      O.props.onTouchEnd && O.props.onTouchEnd(J), yt(), oe.start(j, () => {
        st(J);
      });
    };
    y.useEffect(() => {
      if (!ae) return;
      function J(vt) {
        vt.key === "Escape" && st(vt);
      }
      return document.addEventListener("keydown", J), () => {
        document.removeEventListener("keydown", J);
      };
    }, [
      st,
      ae
    ]);
    const Pe = Dt(Pr(O), de, n);
    !A && A !== 0 && (ae = false);
    const ve = y.useRef(), ne = (J) => {
      const vt = O.props;
      vt.onMouseMove && vt.onMouseMove(J), Bt = {
        x: J.clientX,
        y: J.clientY
      }, ve.current && ve.current.update();
    }, pe = {}, xe = typeof A == "string";
    u ? (pe.title = !ae && xe && !f ? A : null, pe["aria-describedby"] = ae ? ze : null) : (pe["aria-label"] = xe ? A : null, pe["aria-labelledby"] = ae && !xe ? ze : null);
    const he = {
      ...pe,
      ...B,
      ...O.props,
      className: se(B.className, O.props.className),
      onTouchStart: F,
      ref: Pe,
      ...b ? {
        onMouseMove: ne
      } : {}
    }, Te = {};
    p || (he.onTouchStart = U, he.onTouchEnd = E), f || (he.onMouseOver = Cn(St, he.onMouseOver), he.onMouseLeave = Cn(Le, he.onMouseLeave), Me || (Te.onMouseOver = St, Te.onMouseLeave = Le)), d || (he.onFocus = Cn(I, he.onFocus), he.onBlur = Cn(lt, he.onBlur), Me || (Te.onFocus = I, Te.onBlur = lt));
    const ut = {
      ...o,
      isRtl: X,
      arrow: r,
      disableInteractive: Me,
      placement: v,
      PopperComponentProp: _,
      touch: G.current
    }, Vt = typeof M.popper == "function" ? M.popper(ut) : M.popper, fi = y.useMemo(() => {
      var _a2, _b;
      let J = [
        {
          name: "arrow",
          enabled: !!re,
          options: {
            element: re,
            padding: 4
          }
        }
      ];
      return ((_a2 = w.popperOptions) == null ? void 0 : _a2.modifiers) && (J = J.concat(w.popperOptions.modifiers)), ((_b = Vt == null ? void 0 : Vt.popperOptions) == null ? void 0 : _b.modifiers) && (J = J.concat(Vt.popperOptions.modifiers)), {
        ...w.popperOptions,
        ...Vt == null ? void 0 : Vt.popperOptions,
        modifiers: J
      };
    }, [
      re,
      w.popperOptions,
      Vt == null ? void 0 : Vt.popperOptions
    ]), qn = xa(ut), gi = typeof M.transition == "function" ? M.transition(ut) : M.transition, hn = {
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
          ...w,
          ...Vt ?? a.popper
        },
        tooltip: M.tooltip ?? a.tooltip,
        transition: {
          ...L,
          ...gi ?? a.transition
        }
      }
    }, [hi, mi] = ie("popper", {
      elementType: ba,
      externalForwardedProps: hn,
      ownerState: ut,
      className: se(qn.popper, w == null ? void 0 : w.className)
    }), [yi, vi] = ie("transition", {
      elementType: Ir,
      externalForwardedProps: hn,
      ownerState: ut
    }), [xi, bi] = ie("tooltip", {
      elementType: wa,
      className: qn.tooltip,
      externalForwardedProps: hn,
      ownerState: ut
    }), [wi, Ci] = ie("arrow", {
      elementType: Ca,
      className: qn.arrow,
      externalForwardedProps: hn,
      ownerState: ut,
      ref: be
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(O, he),
        c.jsx(hi, {
          as: _ ?? Wr,
          placement: v,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: Bt.y,
              left: Bt.x,
              right: Bt.x,
              bottom: Bt.y,
              width: 0,
              height: 0
            })
          } : ge,
          popperRef: ve,
          open: ge ? ae : false,
          id: ze,
          transition: true,
          ...Te,
          ...mi,
          popperOptions: fi,
          children: ({ TransitionProps: J }) => c.jsx(yi, {
            timeout: K.transitions.duration.shorter,
            ...J,
            ...vi,
            children: c.jsxs(xi, {
              ...bi,
              children: [
                A,
                r ? c.jsx(wi, {
                  ...Ci
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Gr = y.createContext();
  function Sa(e) {
    return Ce("MuiTable", e);
  }
  Se("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const _a = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return Re({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, Sa, t);
  }, Ra = Y("table", {
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
  }))), lr = "table", ja = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTable"
    }), { className: r, component: i = lr, padding: s = "normal", size: l = "medium", stickyHeader: a = false, ...u } = o, d = {
      ...o,
      component: i,
      padding: s,
      size: l,
      stickyHeader: a
    }, f = _a(d), g = y.useMemo(() => ({
      padding: s,
      size: l,
      stickyHeader: a
    }), [
      s,
      l,
      a
    ]);
    return c.jsx(Gr.Provider, {
      value: g,
      children: c.jsx(Ra, {
        as: i,
        role: i === lr ? null : "table",
        ref: n,
        className: se(f.root, r),
        ownerState: d,
        ...u
      })
    });
  }), Wn = y.createContext();
  function Ma(e) {
    return Ce("MuiTableBody", e);
  }
  Se("MuiTableBody", [
    "root"
  ]);
  const $a = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ]
    }, Ma, t);
  }, Aa = Y("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), Pa = {
    variant: "body"
  }, ar = "tbody", Ia = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: i = ar, ...s } = o, l = {
      ...o,
      component: i
    }, a = $a(l);
    return c.jsx(Wn.Provider, {
      value: Pa,
      children: c.jsx(Aa, {
        className: se(a.root, r),
        as: i,
        ref: n,
        role: i === ar ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Fa(e) {
    return Ce("MuiTableCell", e);
  }
  const za = Se("MuiTableCell", [
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
  ]), ka = (e) => {
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
    return Re(l, Fa, t);
  }, Ta = Y("td", {
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
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? ao(Ee(e.palette.divider, 1), 0.88) : lo(Ee(e.palette.divider, 1), 0.68)}`,
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
          [`&.${za.paddingCheckbox}`]: {
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
  }))), nt = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: i, component: s, padding: l, scope: a, size: u, sortDirection: d, variant: f, ...g } = o, p = y.useContext(Gr), h = y.useContext(Wn), m = h && h.variant === "head";
    let x;
    s ? x = s : x = m ? "th" : "td";
    let b = a;
    x === "td" ? b = void 0 : !b && m && (b = "col");
    const S = f || h && h.variant, R = {
      ...o,
      align: r,
      component: x,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: u || (p && p.size ? p.size : "medium"),
      sortDirection: d,
      stickyHeader: S === "head" && p && p.stickyHeader,
      variant: S
    }, j = ka(R);
    let $ = null;
    return d && ($ = d === "asc" ? "ascending" : "descending"), c.jsx(Ta, {
      as: x,
      ref: n,
      className: se(j.root, i),
      "aria-sort": $,
      scope: b,
      ownerState: R,
      ...g
    });
  });
  function Da(e) {
    return Ce("MuiTableContainer", e);
  }
  Se("MuiTableContainer", [
    "root"
  ]);
  const Oa = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ]
    }, Da, t);
  }, Ea = Y("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Na = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: i = "div", ...s } = o, l = {
      ...o,
      component: i
    }, a = Oa(l);
    return c.jsx(Ea, {
      ref: n,
      as: i,
      className: se(a.root, r),
      ownerState: l,
      ...s
    });
  });
  function La(e) {
    return Ce("MuiTableHead", e);
  }
  Se("MuiTableHead", [
    "root"
  ]);
  const Va = (e) => {
    const { classes: t } = e;
    return Re({
      root: [
        "root"
      ]
    }, La, t);
  }, Ha = Y("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Ba = {
    variant: "head"
  }, cr = "thead", Wa = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: i = cr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Va(l);
    return c.jsx(Wn.Provider, {
      value: Ba,
      children: c.jsx(Ha, {
        as: i,
        className: se(a.root, r),
        ref: n,
        role: i === cr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Ga(e) {
    return Ce("MuiToolbar", e);
  }
  Se("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Ua = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return Re({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Ga, t);
  }, qa = Y("div", {
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
  }))), Ur = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: i = "div", disableGutters: s = false, variant: l = "regular", ...a } = o, u = {
      ...o,
      component: i,
      disableGutters: s,
      variant: l
    }, d = Ua(u);
    return c.jsx(qa, {
      as: i,
      className: se(d.root, r),
      ref: n,
      ownerState: u,
      ...a
    });
  }), Ya = ue(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Ja = ue(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Ka = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: i = false, getItemAriaLabel: s, nextIconButtonProps: l, onPageChange: a, page: u, rowsPerPage: d, showFirstButton: f, showLastButton: g, slots: p = {}, slotProps: h = {}, ...m } = t, x = Mo(), b = (de) => {
      a(de, 0);
    }, S = (de) => {
      a(de, u - 1);
    }, R = (de) => {
      a(de, u + 1);
    }, j = (de) => {
      a(de, Math.max(0, Math.ceil(r / d) - 1));
    }, $ = p.firstButton ?? je, P = p.lastButton ?? je, z = p.nextButton ?? je, v = p.previousButton ?? je, _ = p.firstButtonIcon ?? ra, w = p.lastButtonIcon ?? ia, M = p.nextButtonIcon ?? Ja, D = p.previousButtonIcon ?? Ya, A = x ? P : $, T = x ? z : v, L = x ? v : z, B = x ? $ : P, O = x ? h.lastButton : h.firstButton, K = x ? h.nextButton : h.previousButton, X = x ? h.previousButton : h.nextButton, ge = x ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        f && c.jsx(A, {
          onClick: b,
          disabled: i || u === 0,
          "aria-label": s("first", u),
          title: s("first", u),
          ...O,
          children: x ? c.jsx(w, {
            ...h.lastButtonIcon
          }) : c.jsx(_, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(T, {
          onClick: S,
          disabled: i || u === 0,
          color: "inherit",
          "aria-label": s("previous", u),
          title: s("previous", u),
          ...K ?? o,
          children: x ? c.jsx(M, {
            ...h.nextButtonIcon
          }) : c.jsx(D, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(L, {
          onClick: R,
          disabled: i || (r !== -1 ? u >= Math.ceil(r / d) - 1 : false),
          color: "inherit",
          "aria-label": s("next", u),
          title: s("next", u),
          ...X ?? l,
          children: x ? c.jsx(D, {
            ...h.previousButtonIcon
          }) : c.jsx(M, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(B, {
          onClick: j,
          disabled: i || u >= Math.ceil(r / d) - 1,
          "aria-label": s("last", u),
          title: s("last", u),
          ...ge,
          children: x ? c.jsx(_, {
            ...h.firstButtonIcon
          }) : c.jsx(w, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Xa(e) {
    return Ce("MuiTablePagination", e);
  }
  const nn = Se("MuiTablePagination", [
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
  const Za = Y(nt, {
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
  }))), Qa = Y(Ur, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${nn.actions}`]: t.actions,
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
    [`& .${nn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), ec = Y("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), tc = Y("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), nc = Y(Qt, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${nn.selectIcon}`]: t.selectIcon,
      [`& .${nn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${nn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), oc = Y(We, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), rc = Y("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function ic({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function sc(e) {
    return `Go to ${e} page`;
  }
  const lc = (e) => {
    const { classes: t } = e;
    return Re({
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
    }, Xa, t);
  }, ac = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = Ka, backIconButtonProps: i, colSpan: s, component: l = nt, count: a, disabled: u = false, getItemAriaLabel: d = sc, labelDisplayedRows: f = ic, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: m, page: x, rowsPerPage: b, rowsPerPageOptions: S = [
      10,
      25,
      50,
      100
    ], SelectProps: R = {}, showFirstButton: j = false, showLastButton: $ = false, slotProps: P = {}, slots: z = {}, ...v } = o, _ = o, w = lc(_), M = (P == null ? void 0 : P.select) ?? R, D = M.native ? "option" : oc;
    let A;
    (l === nt || l === "td") && (A = s || 1e3);
    const T = co(M.id), L = co(M.labelId), B = () => a === -1 ? (x + 1) * b : b === -1 ? a : Math.min(a, (x + 1) * b), O = {
      slots: z,
      slotProps: P
    }, [K, X] = ie("root", {
      ref: n,
      className: w.root,
      elementType: Za,
      externalForwardedProps: {
        ...O,
        component: l,
        ...v
      },
      ownerState: _,
      additionalProps: {
        colSpan: A
      }
    }), [ge, de] = ie("toolbar", {
      className: w.toolbar,
      elementType: Qa,
      externalForwardedProps: O,
      ownerState: _
    }), [re, be] = ie("spacer", {
      className: w.spacer,
      elementType: ec,
      externalForwardedProps: O,
      ownerState: _
    }), [G, Me] = ie("selectLabel", {
      className: w.selectLabel,
      elementType: tc,
      externalForwardedProps: O,
      ownerState: _,
      additionalProps: {
        id: L
      }
    }), [N, le] = ie("select", {
      className: w.select,
      elementType: nc,
      externalForwardedProps: O,
      ownerState: _
    }), [oe, Fe] = ie("menuItem", {
      className: w.menuItem,
      elementType: D,
      externalForwardedProps: O,
      ownerState: _
    }), [Ne, $e] = ie("displayedRows", {
      className: w.displayedRows,
      elementType: rc,
      externalForwardedProps: O,
      ownerState: _
    });
    return c.jsx(K, {
      ...X,
      children: c.jsxs(ge, {
        ...de,
        children: [
          c.jsx(re, {
            ...be
          }),
          S.length > 1 && c.jsx(G, {
            ...Me,
            children: g
          }),
          S.length > 1 && c.jsx(N, {
            variant: "standard",
            ...!M.variant && {
              input: ur || (ur = c.jsx(Ii, {}))
            },
            value: b,
            onChange: m,
            id: T,
            labelId: L,
            ...M,
            classes: {
              ...M.classes,
              root: se(w.input, w.selectRoot, (M.classes || {}).root),
              select: se(w.select, (M.classes || {}).select),
              icon: se(w.selectIcon, (M.classes || {}).icon)
            },
            disabled: u,
            ...le,
            children: S.map((ae) => y.createElement(oe, {
              ...Fe,
              key: ae.label ? ae.label : ae,
              value: ae.value ? ae.value : ae
            }, ae.label ? ae.label : ae))
          }),
          c.jsx(Ne, {
            ...$e,
            children: f({
              from: a === 0 ? 0 : x * b + 1,
              to: B(),
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
            showFirstButton: j,
            showLastButton: $,
            slotProps: P.actions,
            slots: z.actions,
            getItemAriaLabel: d,
            disabled: u
          })
        ]
      })
    });
  });
  function cc(e) {
    return Ce("MuiTableRow", e);
  }
  const dr = Se("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), uc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: i } = e;
    return Re({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        i && "footer"
      ]
    }, cc, t);
  }, dc = Y("tr", {
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
    [`&.${dr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${dr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ee(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ee(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), pr = "tr", At = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: i = pr, hover: s = false, selected: l = false, ...a } = o, u = y.useContext(Wn), d = {
      ...o,
      component: i,
      hover: s,
      selected: l,
      head: u && u.variant === "head",
      footer: u && u.variant === "footer"
    }, f = uc(d);
    return c.jsx(dc, {
      as: i,
      ref: n,
      className: se(f.root, r),
      role: i === pr ? null : "row",
      ownerState: d,
      ...a
    });
  }), pc = ue(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function fc(e) {
    return Ce("MuiTableSortLabel", e);
  }
  const Jn = Se("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), gc = (e) => {
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
    return Re(r, fc, t);
  }, hc = Y(Tn, {
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
      [`& .${Jn.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${Jn.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${Jn.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), mc = Y("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${W(n.direction)}`]
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
  }))), yc = y.forwardRef(function(t, n) {
    const o = _e({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: i, className: s, direction: l = "asc", hideSortIcon: a = false, IconComponent: u = pc, slots: d = {}, slotProps: f = {}, ...g } = o, p = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: u
    }, h = gc(p), m = {
      slots: d,
      slotProps: f
    }, [x, b] = ie("root", {
      elementType: hc,
      externalForwardedProps: m,
      ownerState: p,
      className: se(h.root, s),
      ref: n
    }), [S, R] = ie("icon", {
      elementType: mc,
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
          ...R
        })
      ]
    });
  }), qr = ue(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Yr = ue(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Jr = ue(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), mo = ue(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), vc = ue(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Sn = ue(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), fr = ue(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), gr = ue(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), xc = ue(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), bc = ue(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), Kt = ue(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Kr = ue(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), wc = ue(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Cc = ue(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Sc = ue(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), on = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, hr = "b64:";
  function Xr(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(hr) ? atob(e.slice(hr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function _c({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: i, loading: s }) {
    const [l, a] = y.useState(""), [u, d] = y.useState(null), [f, g] = y.useState(null), p = y.useRef(0), h = !l, m = y.useMemo(() => {
      if (!l) return e;
      const w = l.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(w) || M.headerName.toLowerCase().includes(w));
    }, [
      e,
      l
    ]), x = y.useMemo(() => e.filter((w) => w.visible).length, [
      e
    ]), b = y.useCallback((w, M) => {
      w.stopPropagation(), r(e.map((D) => D.path === M ? {
        ...D,
        visible: !D.visible
      } : D));
    }, [
      e,
      r
    ]), S = y.useCallback((w) => {
      r(e.map((M) => ({
        ...M,
        visible: w
      })));
    }, [
      e,
      r
    ]), R = y.useCallback((w, M) => {
      w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", M), d(M);
    }, []), j = y.useCallback((w, M) => {
      w.preventDefault(), p.current += 1, M !== u && g(M);
    }, [
      u
    ]), $ = y.useCallback((w) => {
      w.preventDefault(), p.current -= 1, p.current <= 0 && (p.current = 0, g(null));
    }, []), P = y.useCallback((w) => {
      w.preventDefault(), w.dataTransfer.dropEffect = "move";
    }, []), z = y.useCallback((w, M) => {
      w.preventDefault(), p.current = 0, g(null), d(null);
      const D = w.dataTransfer.getData("text/plain");
      if (!D || D === M) return;
      const A = [
        ...e
      ], T = A.findIndex((O) => O.path === D), L = A.findIndex((O) => O.path === M);
      if (T === -1 || L === -1) return;
      const [B] = A.splice(T, 1);
      A.splice(L, 0, B), r(A);
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
    return c.jsxs(q, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(Ur, {
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
                  startAdornment: c.jsx(ho, {
                    position: "start",
                    children: c.jsx(Kr, {
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
            c.jsx(Ge, {
              title: C.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(je, {
                  size: "small",
                  onClick: i,
                  disabled: s,
                  children: c.jsx(bc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Ge, {
              title: C.t("json_table_show_all"),
              children: c.jsx(je, {
                size: "small",
                onClick: () => S(true),
                children: c.jsx(Cc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ge, {
              title: C.t("json_table_hide_all"),
              children: c.jsx(je, {
                size: "small",
                onClick: () => S(false),
                children: c.jsx(Sc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ge, {
              title: C.t("json_table_reset_all"),
              children: c.jsx(je, {
                size: "small",
                onClick: _,
                children: c.jsx(Kt, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(q, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: m.length === 0 ? c.jsx(q, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(k, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? C.t("json_table_no_columns") : C.t("json_table_no_search_results")
            })
          }) : m.map((w) => {
            const M = t.find((T) => T.path === w.path), D = n === w.path, A = (M == null ? void 0 : M.type) || "string";
            return c.jsx(ql, {
              onClick: () => o(w.path),
              draggable: h,
              onDragStart: h ? (T) => R(T, w.path) : void 0,
              onDragEnter: h ? (T) => j(T, w.path) : void 0,
              onDragLeave: h ? $ : void 0,
              onDragOver: h ? P : void 0,
              onDrop: h ? (T) => z(T, w.path) : void 0,
              onDragEnd: h ? v : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: h ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: D ? "primary.main" : "divider",
                backgroundColor: D ? "action.selected" : "background.paper",
                opacity: u === w.path ? 0.4 : w.visible ? 1 : 0.55,
                borderTop: f === w.path ? "3px solid" : void 0,
                borderTopColor: f === w.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: D ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(q, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  h && c.jsx(vc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  c.jsx(ln, {
                    checked: w.visible,
                    onClick: (T) => b(T, w.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  c.jsxs(q, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(k, {
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
                      w.headerName && w.headerName !== w.path && c.jsx(k, {
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
                  c.jsx(zn, {
                    label: A,
                    size: "small",
                    sx: {
                      backgroundColor: on[A] || on.string,
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
        e.length > 0 && c.jsx(q, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(k, {
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
  function Kn({ value: e, onChange: t, label: n }) {
    const o = Hn(), [r, i] = y.useState(null), s = y.useRef(null), [l, a] = y.useState(null), u = !!r;
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
    ]), c.jsxs(q, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        c.jsxs(q, {
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
            c.jsx(k, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            c.jsx(q, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && c.jsx(je, {
              size: "small",
              onClick: (d) => {
                d.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(mo, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(Fi, {
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
          children: c.jsx(q, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(zi, {
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
  function Xt(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function Zr(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: i = false } = t;
    let s = e.toFixed(n);
    if (i) {
      const [l, a] = s.split("."), u = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${u}.${a}` : u;
    }
    return `${o}${s}${r}`;
  }
  const Rc = [
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
  function To(e, t) {
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
  function Qr(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let o;
      if (typeof e == "string") {
        const a = To(e, n);
        if (!a) return Xt(e);
        o = new Date(a);
      } else if (typeof e == "number") o = new Date(e >= 1e12 ? e : e * 1e3);
      else if (e instanceof Date) o = e;
      else return Xt(e);
      if (isNaN(o.getTime())) return Xt(e);
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
      return Xt(e);
    }
  }
  function yo(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Xt(e);
  }
  function ei(e, t) {
    let n = t.stringTrim ? e.trim() : e;
    if (t.stringRegex) try {
      const i = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), s = n.match(i);
      s && (n = s[t.stringRegexGroup ?? 0] ?? n);
    } catch {
    }
    t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (i) => i.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
    const o = t.stringPrefix ?? "", r = t.stringSuffix ?? "";
    return o || r ? `${o}${n}${r}` : n;
  }
  function me(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function jc(e, t) {
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
  function Mc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+me(e)) && t !== null) throw NaN;
    if (Number.isNaN(+me(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function $c(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Ac(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function Pc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function Ic(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function Fc(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let i = ht(r ? e[0] : n, o);
    for (let s = r; s < e.length; s++) i = ht(await t(i, e[s]), o);
    return i;
  }
  const En = {
    filter: $c,
    some: Ac,
    every: Pc,
    map: Ic,
    reduce: Fc
  }, te = /* @__PURE__ */ Symbol.for("json_logic_sync"), He = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Ze = /* @__PURE__ */ Symbol.for("json_logic_original"), mr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function $t(e) {
    return typeof e == "function" ? e[te] === true : Array.isArray(e) ? e.every($t) : !(e && e.asyncMethod && !e.method);
  }
  function ti(e, t = true) {
    return e[te] = t, e;
  }
  function dn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const Xn = /* @__PURE__ */ new WeakMap();
  function yr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (Xn.has(e) || Xn.set(e, zc(e)), Xn.get(e));
  }
  function zc(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function kc(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), $t(t[r]) || (o.asyncDetected = true), n += ($t(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][He] < "u" ? n += t[r][He] : n += ye(t[r], o));
    return {
      [He]: n
    };
  }
  function Tc(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Nn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Nn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Nn(r, t, n);
    }
    return true;
  }
  function vo(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => vo(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return $t(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][te] == "function" && t.methods[o][te](e, {
        engine: t
      })) : vo(r, t) : false;
    }
    return true;
  }
  function ye(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: i = [], engine: s } = t;
    function l(d, f = false) {
      return Tc(d, f) ? JSON.stringify(d) : (i.push(d), `values[${i.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let d = "";
      for (let f = 0; f < e.length; f++) f > 0 && (d += ","), d += ye(e[f], t);
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
      if (!t.engine.disableInline && s.methods[f] && Nn(e, s, t)) return vo(e, s) ? l((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(s.run(e))})`) : (r.push(s.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let g = e[f];
      if ((!g || typeof g != "object") && !s.methods[f].lazy && (g = [
        g
      ]), s.methods[f] && s.methods[f].compile) {
        let m = s.methods[f].compile(g, t);
        if (m[He] && (m = m[He]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let p = s.methods[f].optimizeUnary ? "" : "coerceArray";
      !p && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : p && Array.isArray(g) && (p = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof s.methods[f] == "function") {
        a = !$t(s.methods[f]);
        const m = h[yr(s.methods[f]) - 1] || h[2];
        return u(`engine.methods["${f}"](${p}(` + ye(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[f] && s.methods[f].asyncMethod);
        const m = yr(a ? s.methods[f].asyncMethod : s.methods[f].method);
        let x = h[m - 1] || h[2];
        return a && typeof s.methods[f][te] == "function" && s.methods[f][te](g, {
          engine: s
        }) && (a = false, x = x.replace("engine", "engine.fallback")), s.methods[f] && !s.methods[f].lazy ? u(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(${p}(` + ye(g, t) + ")" + x + ")") : (n.push(g), u(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + x + ")"));
      }
    }
    return l(e);
  }
  function Ln(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: kc
    }, t));
    const n = ye(e, t);
    return Dc(e, n, t);
  }
  function Dc(e, t, n) {
    const { engine: o, methods: r, notTraversed: i, processing: s = [], values: l } = n, a = [];
    s.forEach((d, f) => {
      t = t.replace(`__%%%${f}%%%__`, d);
    });
    const u = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(u)(l, r, i, En, o, a, dn, me, jc, Mc, ht), {
      [te]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Oc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Tt = Oc(), Wt = /* @__PURE__ */ new Map();
  function It(e) {
    if (Wt.has(e)) return Wt.get(e);
    Wt.size > 2048 && Wt.clear();
    const t = Ec(e);
    return Wt.set(e, t), t;
  }
  function Ec(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const l = e[s];
      l === n ? e[s + 1] === t || e[s + 1] === o ? (i += e[s + 1], s++) : e[s + 1] === n ? (i += n, s++) : i += n : l === t ? (r.push(i), i = "") : i += l;
    }
    return r.length !== e.length && r.push(i), r;
  }
  const xo = {
    get: {
      [te]: true,
      method: ([e, t, n], o, r, i) => {
        const s = n === void 0 ? null : n, l = It(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return s;
        return i.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const i = It(o);
          return Tt ? `((${ye(r, t)})${i.map((s) => `?.[${ye(s, t)}]`).join("")} ?? ${ye(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((s, l) => `(${s}||0)[${JSON.stringify(l)}]`, `(${ye(r, t)}||0)`)}, ${ye(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Ze]: true,
      [te]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let i = 0;
        for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
        const s = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = It(String(e));
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
          const r = It(n);
          if (!Tt) {
            const s = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${ye(o, t)})))`;
            return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
          }
          const i = `(context${r.map((s) => `?.[${JSON.stringify(s)}]`).join("")} ?? ${ye(o, t)})`;
          return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [te]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = It(String(e[o]));
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
      [te]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = xo.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = xo.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [He]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Nc = {
    ...xo
  }, ee = {
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
  function Be(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Be(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][te] == "function" ? t.methods[o][te](r, n) : t.methods[o][te] : typeof t.methods[o][te] == "function" ? t.methods[o][te](r, n) : t.methods[o][te] && Be(r, t, n);
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
  const Gt = kn("every", true), Q = {
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
      if (e.length === 0) throw ee;
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
      if (e.length === 0) throw ee;
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
      if (e.length < 2) throw ee;
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
      if (!e.length || typeof e[0] != "number") throw ee;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ee;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw ee;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ee;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: ti((e) => e, true),
      [te]: () => true
    },
    if: {
      [Ze]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
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
      [te]: (e, t) => Be(e, t.engine, t),
      deterministic: (e, t) => Ie(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
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
    "<": xt("<", (e, t) => e < t),
    "<=": xt("<=", (e, t) => e <= t),
    ">": xt(">", (e, t) => e > t),
    ">=": xt(">=", (e, t) => e >= t),
    "==": xt("==", (e, t) => e == t),
    "===": xt("===", (e, t) => e === t),
    "!=": xt("!=", (e, t) => e != t),
    "!==": xt("!==", (e, t) => e !== t),
    or: {
      [te]: (e, t) => Be(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = ce(e[i], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
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
      [te]: (e, t) => Be(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
        let r;
        for (let i = 0; i < e.length; i++) if (r = ce(e[i], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Ie(e, t.engine, t),
      compile: (e, t) => Tt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = ye(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${ye(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [te]: (e, t) => Be(e, t.engine, t),
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
            [He]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [He]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [He]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[He].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[He].includes("await") && (n[He] = n[He].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [te]: (e, t) => Be(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = ce(e[i], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
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
        if (!e) throw ee;
        const r = ce(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw ee;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw ee;
        const r = await ce(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw ee;
      },
      deterministic: (e, t) => Ie(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => Q.val.method(e, t, n, o, mr) !== mr,
      deterministic: false
    },
    val: {
      [Ze]: true,
      [te]: true,
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
          return Tt ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Be(e, t.engine, t) && Ie(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Tt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (Tt ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: kn("map"),
    some: {
      ...kn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
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
      [te]: Gt[te],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
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
        return Gt.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${Gt.compile([
        {
          [He]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: Gt.deterministic,
      lazy: Gt.lazy
    },
    none: {
      [te]: (e, t) => Be(e, t.engine, t),
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
    filter: kn("filter", true),
    reduce: {
      deterministic: (e, t) => Ie(e[0], t.engine, t) && Ie(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw ee;
        const { async: n } = t;
        let [o, r, i] = e;
        o = ye(o, t), typeof i < "u" && (i = ye(i, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = Ln(r, s);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!$t(r) || o.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${i}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
        let [r, i, s] = e;
        s = ht(ce(s, o, t, n), o.options.maxDepth), r = ce(r, o, t, n) || [];
        let l = (a, u) => ht(o.run(i, {
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
          l = (u, d) => ht(a({
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
      [te]: (e, t) => Be(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ee;
        let [r, i, s] = e;
        return s = ht(await o.run(s, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], En.reduce(r, (l, a) => o.run(i, {
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
      [Ze]: true,
      [te]: true,
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
      [te]: (e, t) => Be(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${Ln(e[o], {
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
      [te]: (e, t) => Be(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        throw ee;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${ye(e[r], t)}`), o), []).join(",")} })`;
        throw ee;
      },
      asyncMethod: async (e, t, n, o) => await En.reduce(Object.keys(e), async (i, s) => {
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
  function xt(e, t) {
    const n = {
      [He]: e
    }, o = e.length === 3;
    return {
      method: (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw ee;
        if (r.length === 2) {
          const u = ce(r[0], l, i, s), d = ce(r[1], l, i, s);
          if (o || (typeof u == "string" || u === null) && (typeof d == "string" || d === null)) return t(u, d);
          if (Number.isNaN(+me(u))) throw NaN;
          if (Number.isNaN(+me(d)) && u !== null) throw NaN;
          return t(+u, +d);
        }
        let a = ce(r[0], l, i, s);
        for (let u = 1; u < r.length; u++) {
          const d = ce(r[u], l, i, s);
          if ((o || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
          if (Number.isNaN(+me(d)) && a !== null) throw NaN;
          if (u === 1 && Number.isNaN(+me(a))) throw NaN;
          if (!t(+a, +d)) return false;
          a = d;
        }
        return true;
      },
      asyncMethod: async (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw ee;
        if (r.length === 2) {
          const u = await ce(r[0], l, i, s), d = await ce(r[1], l, i, s);
          if (o || (typeof u == "string" || u === null) && (typeof d == "string" || d === null)) return t(u, d);
          if (Number.isNaN(+me(u))) throw NaN;
          if (Number.isNaN(+me(d)) && u !== null) throw NaN;
          return t(+u, +d);
        }
        let a = await ce(r[0], l, i, s);
        for (let u = 1; u < r.length; u++) {
          const d = await ce(r[u], l, i, s);
          if ((o || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
          if (Number.isNaN(+me(d)) && a !== null) throw NaN;
          if (u === 1 && Number.isNaN(+me(a))) throw NaN;
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
      [Ze]: true,
      [te]: (r, i) => Be(r, i.engine, i),
      deterministic: (r, i) => Ie(r, i.engine, i),
      lazy: true
    };
  }
  function kn(e, t = false) {
    return {
      deterministic: (n, o) => Ie(n[0], o.engine, o) && Ie(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Ze]: true,
      [te]: (n, o) => Be(n, o.engine, o),
      method: (n, o, r, i) => {
        if (!Array.isArray(n)) throw ee;
        let [s, l] = n;
        return s = ce(s, i, o, r) || [], s[e]((a, u) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const d = ce(l, i, a, [
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
        if (!Array.isArray(n)) throw ee;
        let [s, l] = n;
        return s = await i.run(s, o, {
          above: r
        }) || [], En[e](s, async (a, u) => {
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
        if (!Array.isArray(n)) throw ee;
        const { async: r } = o, [i, s] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = Ln(s, l), u = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, d = t ? o.compile`engine.truthy` : o.compile``;
        return r && !$t(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${d}(${a}(i, x, ${u})))`) : o.compile`(${i} || [])[${e}]((i, x, z) => ${d}(${a}(i, x, ${u})))`;
      },
      lazy: true
    };
  }
  Q.every = Q.all;
  Q["?:"] = Q.if;
  Object.keys(Q).forEach((e) => {
    typeof Q[e] == "function" && (Q[e][te] = true), Q[e].deterministic = typeof Q[e].deterministic > "u" ? true : Q[e].deterministic;
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
  function gn(e, t) {
    if (Array.isArray(e)) return me(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + ye(e, t);
    if (typeof e == "string") return "+" + me(+e);
    const n = ye(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + me(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? me(NaN) : `(+precoerceNumber(${n}))`;
  }
  Q["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => gn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${ye(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  Q["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw ee;
      return `precoerceNumber(${e.map((n) => gn(n, t)).join(" % ")})`;
    }
    return `assertSize(${ye(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  Q.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  Q["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ee;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => gn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${ye(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  Q["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ee;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = gn(n, t);
        return o && r === "+0" && me(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${ye(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  Q["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => gn(n, t)).join(" * ")})` : `(${ye(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  Q["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  Q.not = Q["!"];
  Q["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  Q.none.deterministic = Q.some.deterministic;
  Q.throw.deterministic = (e, t) => t.insideTry && Ie(e, t.engine, t);
  Q["+"].optimizeUnary = Q["-"].optimizeUnary = Q["!"].optimizeUnary = Q["!!"].optimizeUnary = Q.cat.optimizeUnary = Q.throw.optimizeUnary = true;
  const Lc = {
    ...Q,
    ...Nc
  }, Vc = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Hc(e, t, n, o) {
    const r = t.methods[n], i = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, u) => i(l, a, u || o, t);
    }
    let s = e[n];
    if ((!s || typeof s != "object") && !r.optimizeUnary && (s = [
      s
    ]), Array.isArray(s) && s.length === 1 && r.optimizeUnary && !Array.isArray(s[0]) && (s = s[0]), Array.isArray(s)) {
      const l = s.map((a) => Oe(a, t, o));
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
      const l = Oe(s, t, o);
      if (r.optimizeUnary) {
        const a = (u) => !u || typeof u[l] > "u" || typeof u[l] == "function" && !t.allowFunctions ? null : u[l];
        if (typeof l == "function") return (u, d) => i(l(u, d), u, d || o, t);
        if ((n === "var" || n === "val") && t.methods[n][Ze]) {
          if (!l && n !== "val") return (u) => u === null || typeof u > "u" || typeof u == "function" && !t.allowFunctions ? null : u;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const u = It(String(l));
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
      return typeof l == "function" ? (a, u) => i(dn(l(a, u)), a, u || o, t) : (a, u) => i(dn(l), a, u || o, t);
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
  function Bc(e, t, n) {
    if (e.val && t.methods.val[Ze] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[Ze] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, i] = e.if || e["?:"], s = Oe(o, t, n), l = Oe(r, t, n), a = Oe(i, t, n);
      return typeof s == "function" && typeof l == "function" && typeof a == "function" ? (u, d) => t.truthy(s(u, d)) ? l(u, d) : a(u, d) : typeof s == "function" && typeof l == "function" ? (u, d) => t.truthy(s(u, d)) ? l(u, d) : a : typeof s == "function" && typeof a == "function" ? (u, d) => t.truthy(s(u, d)) ? l : a(u, d) : typeof s == "function" ? (u, d) => t.truthy(s(u, d)) ? l : a : t.truthy(s) ? l : a;
    }
    if (e.filter && t.methods.filter[Ze] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, i = Oe(r, t, n);
      if (typeof i != "function") return t.truthy(i) ? Oe(o, t, n) : [];
    }
    for (const o in vr) if (e[o] && Array.isArray(e[o]) && t.methods[o][Ze]) {
      const r = vr[o], i = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+me(l))) throw NaN;
        if (Number.isNaN(+me(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [s, l] = e[o], a = Oe(s, t, n), u = Oe(l, t, n);
        return typeof a == "function" && typeof u == "function" ? (d, f) => i(a(d, f), u(d, f)) : typeof a == "function" ? (d, f) => i(a(d, f), u) : typeof u == "function" ? (d, f) => i(a, u(d, f)) : i(a, u);
      }
      if (e[o].length === 3) {
        const [s, l, a] = e[o], u = Oe(s, t, n), d = Oe(l, t, n), f = Oe(a, t, n);
        let g;
        return typeof u == "function" && typeof d == "function" && typeof f == "function" ? (p, h) => i(u(p, h), g = d(p, h)) && i(g, f(p, h)) : typeof u == "function" && typeof d == "function" ? (p, h) => i(u(p, h), g = d(p, h)) && i(g, f) : typeof u == "function" && typeof f == "function" ? (p, h) => i(u(p, h), d) && i(d, f(p, h)) : typeof d == "function" && typeof f == "function" ? (p, h) => i(u, g = d(p, h)) && i(g, f(p, h)) : typeof u == "function" ? (p, h) => i(u(p, h), d) && i(d, f) : typeof d == "function" ? (p, h) => i(u, g = d(p, h)) && i(g, f) : typeof f == "function" ? (p, h) => i(u, d) && i(d, f(p, h)) : i(u, d) && i(d, f);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, i] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const s = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (i = i || 0, s && l) return Oe({
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
        if (i = typeof i > "u" ? 1 : i, s && l) return Oe({
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
  function Oe(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => Oe(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, i) => o.map((s) => typeof s == "function" ? s(r, i) : s);
    }
    if (e && typeof e == "object") {
      const o = Bc(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), i = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, i)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Nn(e, t, {
        engine: t
      });
      if (i in t.methods) {
        const a = Hc(e, t, i, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: i
      };
    }
    return e;
  }
  class Wc {
    constructor(t = Lc, n = {
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
      if ((r === "var" || r === "val") && this.methods[r][Ze]) {
        const l = !s || typeof s != "object" ? s : this.run(s, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !s || typeof s != "object" ? [
          s
        ] : dn(this.run(s, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], u = a ? s : !s || typeof s != "object" ? [
          s
        ] : dn(this.run(s, n, {
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
      }, Object.assign(n, Vc({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = ti(n);
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
        this.optimizedMap.set(t, Oe(t, this, r)), this.missesSinceSeen++;
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
      const { above: o = [], top: r = true } = n, i = Ln(t, {
        engine: this,
        above: o
      });
      return r === false && i.deterministic ? i() : i;
    }
  }
  function Je(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const Gn = new Wc();
  Gn.addMethod("contains", ([e, t]) => Je(e).includes(Je(t)), {
    deterministic: true
  });
  Gn.addMethod("startsWith", ([e, t]) => Je(e).startsWith(Je(t)), {
    deterministic: true
  });
  Gn.addMethod("endsWith", ([e, t]) => Je(e).endsWith(Je(t)), {
    deterministic: true
  });
  function Ut() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const bo = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Gc = {
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
  }, Uc = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], qc = {
    var: "value"
  };
  function Yc(e, t, n = "string") {
    const o = Number(t), r = n === "number", i = n === "date", s = qc;
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
  const Jc = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function Kc(e, t = "string") {
    const n = e.conditions.filter((r) => bo.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && Jc.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => Yc(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function ft(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function Zn(e) {
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
        operand: Je(o[1])
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
        operand: Je(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "neq",
        operand: Je(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "contains",
        operand: Je(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "starts_with",
        operand: Je(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
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
          if (Array.isArray(o) && ft(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && ft(o[0])) return {
            operator: "not_contains",
            operand: Je(o[1])
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
  function Xc(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: Ut(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => Zn(r)).filter((r) => r !== null).map((r) => ({
          id: Ut(),
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
        const o = n.map((r) => Zn(r)).filter((r) => r !== null).map((r) => ({
          id: Ut(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = Zn(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: Ut(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: Ut(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const Zc = 200, qt = /* @__PURE__ */ new Map();
  function Qc(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = qt.get(n);
      return o || (o = Gn.build(e), qt.size >= Zc && qt.delete(qt.keys().next().value), qt.set(n, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const eu = {
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
  function tu({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Xc(e)), i = Gc[t] ?? Uc, s = y.useCallback((g) => {
      r(g), n(Kc(g, t));
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
    return c.jsxs(Ve, {
      spacing: 1,
      children: [
        f && c.jsxs(q, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Fr, {
              value: o.mode,
              exclusive: true,
              onChange: d,
              size: "small",
              "aria-label": C.t("json_table_condition_mode_label"),
              children: [
                c.jsx(Dn, {
                  value: "and",
                  "aria-label": C.t("json_table_condition_mode_all"),
                  children: C.t("json_table_condition_mode_all")
                }),
                c.jsx(Dn, {
                  value: "or",
                  "aria-label": C.t("json_table_condition_mode_any"),
                  children: C.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(k, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? C.t("json_table_condition_mode_hint_and") : C.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, p) => {
          const h = !bo.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(q, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(Pn, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(In, {
                    children: C.t("json_table_condition_operator")
                  }),
                  c.jsx(Qt, {
                    label: C.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (x) => {
                      const b = x.target.value, S = bo.has(b) ? "" : g.operand;
                      l(p, {
                        operator: b,
                        operand: S
                      });
                    },
                    children: i.map((x) => c.jsx(We, {
                      value: x,
                      children: C.t(eu[x])
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
              f && c.jsx(Ge, {
                title: C.t("json_table_condition_remove"),
                children: c.jsx(je, {
                  size: "small",
                  onClick: () => a(p),
                  "aria-label": C.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(zr, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? p);
        }),
        c.jsx(an, {
          startIcon: c.jsx(qr, {}),
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
  function nu({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r2, _s2, _t2, _u2, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
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
        ].forEach((D) => {
          delete _[D];
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
    ]), S = e.format !== void 0, R = y.useCallback(() => {
      const { format: v, ..._ } = e;
      n(_);
    }, [
      e,
      n
    ]), j = (((_a2 = e.cellStyle) == null ? void 0 : _a2.length) ?? 0) > 0 || e.cellStyleMode !== void 0, $ = y.useCallback(() => {
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
    return c.jsxs(q, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(q, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(zn, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: on[s] || on.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(k, {
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
        c.jsxs(Ve, {
          spacing: 1,
          children: [
            c.jsxs(yn, {
              expanded: o.basic,
              onChange: () => i("basic"),
              disableGutters: true,
              children: [
                c.jsx(xn, {
                  expandIcon: c.jsx(Sn, {}),
                  children: c.jsxs(q, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(k, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: C.t("json_table_section_basic")
                      }),
                      c.jsx(Ge, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !x,
                            onClick: (v) => {
                              v.stopPropagation(), b();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(Kt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(vn, {
                  children: c.jsxs(Ve, {
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
                      c.jsxs(Pn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(In, {
                            children: C.t("json_table_align")
                          }),
                          c.jsxs(Qt, {
                            label: C.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (v) => n({
                              ...e,
                              align: v.target.value
                            }),
                            children: [
                              c.jsx(We, {
                                value: "left",
                                children: C.t("json_table_align_left")
                              }),
                              c.jsx(We, {
                                value: "center",
                                children: C.t("json_table_align_center")
                              }),
                              c.jsx(We, {
                                value: "right",
                                children: C.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(pt, {
                        control: c.jsx(_t, {
                          checked: e.visible,
                          onChange: (v) => n({
                            ...e,
                            visible: v.target.checked
                          })
                        }),
                        label: c.jsx(k, {
                          variant: "body2",
                          children: C.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(yn, {
              expanded: o.formatting,
              onChange: () => i("formatting"),
              disableGutters: true,
              children: [
                c.jsx(xn, {
                  expandIcon: c.jsx(Sn, {}),
                  children: c.jsxs(q, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(k, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: C.t("json_table_section_formatting")
                      }),
                      c.jsx(Ge, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !S,
                            onClick: (v) => {
                              v.stopPropagation(), R();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(Kt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(vn, {
                  children: c.jsxs(Ve, {
                    spacing: 2,
                    children: [
                      (s === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_number_format")
                          }),
                          c.jsxs(q, {
                            children: [
                              c.jsxs(k, {
                                variant: "caption",
                                color: "text.secondary",
                                gutterBottom: true,
                                children: [
                                  C.t("json_table_number_decimals"),
                                  ":",
                                  " ",
                                  ((_c2 = e.format) == null ? void 0 : _c2.numberDecimals) ?? 2
                                ]
                              }),
                              c.jsx(Gi, {
                                value: ((_d2 = e.format) == null ? void 0 : _d2.numberDecimals) ?? 2,
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
                            value: ((_e2 = e.format) == null ? void 0 : _e2.numberPrefix) || "",
                            onChange: (v) => l({
                              type: "number",
                              numberPrefix: v.target.value
                            }),
                            size: "small",
                            placeholder: "$, \u20AC, \xA3"
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_number_suffix"),
                            value: ((_f = e.format) == null ? void 0 : _f.numberSuffix) || "",
                            onChange: (v) => l({
                              type: "number",
                              numberSuffix: v.target.value
                            }),
                            size: "small",
                            placeholder: "%, kg, \xB0C"
                          }),
                          c.jsx(pt, {
                            control: c.jsx(_t, {
                              checked: ((_g = e.format) == null ? void 0 : _g.numberThousandsSeparator) || false,
                              onChange: (v) => l({
                                type: "number",
                                numberThousandsSeparator: v.target.checked
                              }),
                              size: "small"
                            }),
                            label: c.jsx(k, {
                              variant: "body2",
                              children: C.t("json_table_number_thousands")
                            })
                          }),
                          c.jsxs(ot, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              c.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsxs(k, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  p,
                                  " \u2192",
                                  " ",
                                  Zr(p, {
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
                      (s === "date" || ((_l2 = e.format) == null ? void 0 : _l2.type) === "date") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(k, {
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
                          c.jsxs(Pn, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              c.jsx(In, {
                                children: C.t("json_table_date_output_format")
                              }),
                              c.jsx(Qt, {
                                label: C.t("json_table_date_output_format"),
                                value: ((_m = e.format) == null ? void 0 : _m.dateFormat) || "yyyy-MM-dd",
                                onChange: (v) => l({
                                  type: "date",
                                  dateFormat: v.target.value,
                                  dateInputFormat: t == null ? void 0 : t.dateFormat
                                }),
                                children: Rc.map((v) => c.jsx(We, {
                                  value: v.value,
                                  children: v.label
                                }, v.value))
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
                              c.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsx(k, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: Qr(/* @__PURE__ */ new Date(), ((_n2 = e.format) == null ? void 0 : _n2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_o2 = e.format) == null ? void 0 : _o2.type) === "boolean") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_boolean_format")
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_boolean_true"),
                            value: ((_p = e.format) == null ? void 0 : _p.booleanTrue) || "",
                            onChange: (v) => l({
                              type: "boolean",
                              booleanTrue: v.target.value
                            }),
                            size: "small",
                            placeholder: "Yes, On, \u2713, Active"
                          }),
                          c.jsx(ke, {
                            label: C.t("json_table_boolean_false"),
                            value: ((_q = e.format) == null ? void 0 : _q.booleanFalse) || "",
                            onChange: (v) => l({
                              type: "boolean",
                              booleanFalse: v.target.value
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
                              c.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsxs(Ve, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                  mt: 0.5
                                },
                                children: [
                                  c.jsxs(k, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      yo(true, (_r2 = e.format) == null ? void 0 : _r2.booleanTrue, (_s2 = e.format) == null ? void 0 : _s2.booleanFalse)
                                    ]
                                  }),
                                  c.jsxs(k, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      yo(false, (_t2 = e.format) == null ? void 0 : _t2.booleanTrue, (_u2 = e.format) == null ? void 0 : _u2.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "string" || ((_v = e.format) == null ? void 0 : _v.type) === "string") && c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_string_format")
                          }),
                          c.jsxs(Pn, {
                            size: "small",
                            fullWidth: true,
                            children: [
                              c.jsx(In, {
                                children: C.t("json_table_string_case")
                              }),
                              c.jsxs(Qt, {
                                label: C.t("json_table_string_case"),
                                value: ((_w = e.format) == null ? void 0 : _w.stringCase) ?? "none",
                                onChange: (v) => l({
                                  type: "string",
                                  stringCase: v.target.value
                                }),
                                children: [
                                  c.jsx(We, {
                                    value: "none",
                                    children: C.t("json_table_string_case_none")
                                  }),
                                  c.jsx(We, {
                                    value: "upper",
                                    children: C.t("json_table_string_case_upper")
                                  }),
                                  c.jsx(We, {
                                    value: "lower",
                                    children: C.t("json_table_string_case_lower")
                                  }),
                                  c.jsx(We, {
                                    value: "title",
                                    children: C.t("json_table_string_case_title")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsxs(Ve, {
                            direction: "row",
                            spacing: 1,
                            children: [
                              c.jsx(ke, {
                                label: C.t("json_table_string_prefix"),
                                value: ((_x = e.format) == null ? void 0 : _x.stringPrefix) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringPrefix: v.target.value || void 0
                                }),
                                size: "small",
                                fullWidth: true
                              }),
                              c.jsx(ke, {
                                label: C.t("json_table_string_suffix"),
                                value: ((_y = e.format) == null ? void 0 : _y.stringSuffix) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringSuffix: v.target.value || void 0
                                }),
                                size: "small",
                                fullWidth: true
                              })
                            ]
                          }),
                          c.jsx(pt, {
                            control: c.jsx(_t, {
                              size: "small",
                              checked: !!((_z = e.format) == null ? void 0 : _z.stringTrim),
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
                            value: ((_A = e.format) == null ? void 0 : _A.stringMaxLength) ?? "",
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
                            value: ((_B = e.format) == null ? void 0 : _B.stringRegex) ?? "",
                            onChange: (v) => l({
                              type: "string",
                              stringRegex: v.target.value || void 0
                            }),
                            size: "small",
                            fullWidth: true,
                            placeholder: "e.g. (\\d+)"
                          }),
                          ((_C = e.format) == null ? void 0 : _C.stringRegex) && c.jsxs(Ve, {
                            direction: "row",
                            spacing: 1,
                            children: [
                              c.jsx(ke, {
                                label: C.t("json_table_string_regex_group"),
                                type: "number",
                                value: ((_D = e.format) == null ? void 0 : _D.stringRegexGroup) ?? 0,
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
                                value: ((_E = e.format) == null ? void 0 : _E.stringRegexFlags) ?? "",
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
                          c.jsx(ki, {}),
                          c.jsxs(Ve, {
                            direction: "row",
                            spacing: 1,
                            flexWrap: "wrap",
                            children: [
                              c.jsx(pt, {
                                control: c.jsx(_t, {
                                  size: "small",
                                  checked: ((_F = e.format) == null ? void 0 : _F.stringFontWeight) === "bold",
                                  onChange: (v) => l({
                                    type: "string",
                                    stringFontWeight: v.target.checked ? "bold" : "normal"
                                  })
                                }),
                                label: c.jsx(k, {
                                  variant: "body2",
                                  fontWeight: "bold",
                                  children: C.t("json_table_string_font_weight")
                                })
                              }),
                              c.jsx(pt, {
                                control: c.jsx(_t, {
                                  size: "small",
                                  checked: ((_G = e.format) == null ? void 0 : _G.stringFontStyle) === "italic",
                                  onChange: (v) => l({
                                    type: "string",
                                    stringFontStyle: v.target.checked ? "italic" : "normal"
                                  })
                                }),
                                label: c.jsx(k, {
                                  variant: "body2",
                                  fontStyle: "italic",
                                  children: C.t("json_table_string_font_style")
                                })
                              })
                            ]
                          }),
                          c.jsxs(Ve, {
                            direction: "row",
                            spacing: 1,
                            children: [
                              c.jsx(ke, {
                                label: C.t("json_table_string_font_size"),
                                type: "number",
                                value: ((_H = e.format) == null ? void 0 : _H.stringFontSize) ?? "",
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
                              c.jsx(Kn, {
                                label: C.t("json_table_string_text_color"),
                                value: ((_I = e.format) == null ? void 0 : _I.stringTextColor) ?? "",
                                onChange: (v) => l({
                                  type: "string",
                                  stringTextColor: v || void 0
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
                              c.jsx(k, {
                                variant: "caption",
                                color: "text.secondary",
                                children: C.t("json_table_preview")
                              }),
                              c.jsx(k, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace",
                                  fontWeight: (_J = e.format) == null ? void 0 : _J.stringFontWeight,
                                  fontStyle: (_K = e.format) == null ? void 0 : _K.stringFontStyle,
                                  ...((_L = e.format) == null ? void 0 : _L.stringFontSize) && {
                                    fontSize: `${e.format.stringFontSize}px`
                                  },
                                  ...((_M = e.format) == null ? void 0 : _M.stringTextColor) && {
                                    color: e.format.stringTextColor
                                  }
                                },
                                children: ei("Hello World", e.format ?? {
                                  type: "string"
                                })
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && s !== "string" && !e.format && c.jsx(k, {
                        variant: "body2",
                        color: "text.secondary",
                        children: C.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(yn, {
              expanded: o.styling,
              onChange: () => i("styling"),
              disableGutters: true,
              children: [
                c.jsx(xn, {
                  expandIcon: c.jsx(Sn, {}),
                  children: c.jsxs(q, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(q, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsx(k, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: C.t("json_table_section_styling")
                          }),
                          (((_N = e.cellStyle) == null ? void 0 : _N.length) ?? 0) > 0 && c.jsx(zn, {
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
                      c.jsx(Ge, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !j,
                            onClick: (v) => {
                              v.stopPropagation(), $();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(Kt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(vn, {
                  children: c.jsxs(Ve, {
                    spacing: 1.5,
                    children: [
                      (((_O = e.cellStyle) == null ? void 0 : _O.length) ?? 0) >= 1 && c.jsxs(q, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsxs(Fr, {
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
                              c.jsx(Dn, {
                                value: "first-match",
                                "aria-label": C.t("json_table_cell_style_mode_first"),
                                children: C.t("json_table_cell_style_mode_first")
                              }),
                              c.jsx(Dn, {
                                value: "all-match",
                                "aria-label": C.t("json_table_cell_style_mode_all"),
                                children: C.t("json_table_cell_style_mode_all")
                              })
                            ]
                          }),
                          c.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            children: (e.cellStyleMode ?? "first-match") === "first-match" ? C.t("json_table_cell_style_mode_hint_first") : C.t("json_table_cell_style_mode_hint_all")
                          })
                        ]
                      }),
                      (e.cellStyle || []).length === 0 && c.jsxs(q, {
                        sx: {
                          textAlign: "center",
                          py: 2,
                          px: 1,
                          color: "text.secondary"
                        },
                        children: [
                          c.jsx(k, {
                            variant: "body2",
                            sx: {
                              fontWeight: 500,
                              mb: 0.5
                            },
                            children: C.t("json_table_no_style_rules")
                          }),
                          c.jsx(k, {
                            variant: "caption",
                            children: C.t("json_table_no_style_rules_hint")
                          })
                        ]
                      }),
                      (e.cellStyle || []).map((v, _) => {
                        const w = (e.cellStyle || []).length, M = v.backgroundColor ? zt(v.backgroundColor) : void 0, D = v.textColor ? zt(v.textColor) : void 0;
                        return c.jsx(ot, {
                          variant: "outlined",
                          sx: {
                            p: 1.5
                          },
                          children: c.jsxs(Ve, {
                            spacing: 1.5,
                            children: [
                              c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center"
                                },
                                children: [
                                  c.jsx(q, {
                                    sx: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.5
                                    },
                                    children: c.jsxs(k, {
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
                                  c.jsxs(q, {
                                    sx: {
                                      display: "flex",
                                      gap: 0.5
                                    },
                                    children: [
                                      c.jsx(Ge, {
                                        title: C.t("json_table_rule_move_up"),
                                        children: c.jsx("span", {
                                          children: c.jsx(je, {
                                            size: "small",
                                            onClick: () => f(_),
                                            disabled: _ === 0,
                                            "aria-label": C.t("json_table_rule_move_up"),
                                            children: c.jsx(Jr, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      c.jsx(Ge, {
                                        title: C.t("json_table_rule_move_down"),
                                        children: c.jsx("span", {
                                          children: c.jsx(je, {
                                            size: "small",
                                            onClick: () => g(_),
                                            disabled: _ >= w - 1,
                                            "aria-label": C.t("json_table_rule_move_down"),
                                            children: c.jsx(Yr, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      c.jsx(Ge, {
                                        title: C.t("json_table_delete_rule"),
                                        children: c.jsx(je, {
                                          size: "small",
                                          onClick: () => u(_),
                                          color: "error",
                                          "aria-label": C.t("json_table_delete_rule"),
                                          children: c.jsx(Ti, {
                                            fontSize: "small"
                                          })
                                        })
                                      })
                                    ]
                                  })
                                ]
                              }),
                              c.jsx(tu, {
                                logic: v.logic,
                                columnType: s,
                                onChange: (A) => a(_, {
                                  logic: A
                                })
                              }, v.id ?? _),
                              c.jsxs(Ve, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "flex-start",
                                children: [
                                  c.jsx(Kn, {
                                    label: C.t("json_table_bg_color"),
                                    value: v.backgroundColor || "",
                                    onChange: (A) => a(_, {
                                      backgroundColor: A
                                    })
                                  }),
                                  c.jsx(Kn, {
                                    label: C.t("json_table_text_color"),
                                    value: v.textColor || "",
                                    onChange: (A) => a(_, {
                                      textColor: A
                                    })
                                  })
                                ]
                              }),
                              c.jsxs(Ve, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  c.jsx(pt, {
                                    control: c.jsx(ln, {
                                      checked: v.fontWeight === "bold",
                                      onChange: (A) => a(_, {
                                        fontWeight: A.target.checked ? "bold" : "normal"
                                      }),
                                      icon: c.jsx(fr, {
                                        sx: {
                                          opacity: 0.3
                                        }
                                      }),
                                      checkedIcon: c.jsx(fr, {
                                        color: "primary"
                                      }),
                                      size: "small"
                                    }),
                                    label: c.jsx(k, {
                                      variant: "caption",
                                      children: C.t("json_table_bold")
                                    })
                                  }),
                                  c.jsx(pt, {
                                    control: c.jsx(ln, {
                                      checked: v.fontStyle === "italic",
                                      onChange: (A) => a(_, {
                                        fontStyle: A.target.checked ? "italic" : "normal"
                                      }),
                                      icon: c.jsx(gr, {
                                        sx: {
                                          opacity: 0.3
                                        }
                                      }),
                                      checkedIcon: c.jsx(gr, {
                                        color: "primary"
                                      }),
                                      size: "small"
                                    }),
                                    label: c.jsx(k, {
                                      variant: "caption",
                                      children: C.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (v.backgroundColor || v.textColor || v.fontWeight === "bold" || v.fontStyle === "italic") && c.jsx(ot, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  ...v.backgroundColor ? M ? {
                                    background: M
                                  } : {
                                    backgroundColor: v.backgroundColor
                                  } : {},
                                  fontWeight: v.fontWeight || "normal",
                                  fontStyle: v.fontStyle || "normal"
                                },
                                children: c.jsx(k, {
                                  variant: "body2",
                                  sx: {
                                    ...v.textColor ? D ? {
                                      background: D,
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
                      (((_P = e.cellStyle) == null ? void 0 : _P.length) ?? 0) >= 2 && c.jsx(k, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          px: 0.5
                        },
                        children: (e.cellStyleMode ?? "first-match") === "first-match" ? C.t("json_table_rules_priority_hint") : C.t("json_table_rules_all_match_hint")
                      }),
                      c.jsx(an, {
                        startIcon: c.jsx(qr, {}),
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
            c.jsxs(yn, {
              expanded: o.advanced,
              onChange: () => i("advanced"),
              disableGutters: true,
              children: [
                c.jsx(xn, {
                  expandIcon: c.jsx(Sn, {}),
                  children: c.jsxs(q, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(k, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: C.t("json_table_section_advanced")
                      }),
                      c.jsx(Ge, {
                        title: C.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !P,
                            onClick: (v) => {
                              v.stopPropagation(), z();
                            },
                            "aria-label": C.t("json_table_section_reset"),
                            children: c.jsx(Kt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(vn, {
                  children: c.jsxs(Ve, {
                    spacing: 2,
                    children: [
                      c.jsx(pt, {
                        control: c.jsx(_t, {
                          checked: e.sortable ?? true,
                          onChange: (v) => n({
                            ...e,
                            sortable: v.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(k, {
                          variant: "body2",
                          children: C.t("json_table_sortable")
                        })
                      }),
                      c.jsx(pt, {
                        control: c.jsx(_t, {
                          checked: e.filterable ?? false,
                          onChange: (v) => n({
                            ...e,
                            filterable: v.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(k, {
                          variant: "body2",
                          children: C.t("json_table_filterable")
                        })
                      }),
                      t && c.jsxs(ot, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(k, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: C.t("json_table_analysis_info")
                          }),
                          c.jsxs(Ve, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_type_label")
                                  }),
                                  c.jsx(zn, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: on[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_confidence")
                                  }),
                                  c.jsxs(k, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_nulls")
                                  }),
                                  c.jsxs(k, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      h > 0 && ` (${Math.round(t.nullCount / h * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_distinct")
                                  }),
                                  c.jsx(k, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_range")
                                  }),
                                  c.jsxs(k, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && c.jsxs(q, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(k, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: C.t("json_table_date_input_format")
                                  }),
                                  c.jsx(k, {
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
  const ou = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, ru = /^\d{4}-\d{2}-\d{2}$/, iu = /^(\d{2})\.(\d{2})\.(\d{4})$/, su = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, lu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, au = /^(\d{2})\/(\d{2})\/(\d{4})$/, cu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, uu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function _n(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function Qn(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Rn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const du = [
    {
      regex: ou,
      format: "ISO-8601"
    },
    {
      regex: ru,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return _n(n, t);
      }
    },
    {
      regex: lu,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return _n(t, n) && Rn(o, r, i);
      }
    },
    {
      regex: su,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return _n(t, n) && Rn(o, r);
      }
    },
    {
      regex: iu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return _n(t, n);
      }
    },
    {
      regex: uu,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return Qn(t, n) && Rn(o, r, i);
      }
    },
    {
      regex: cu,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Qn(t, n) && Rn(o, r);
      }
    },
    {
      regex: au,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Qn(t, n);
      }
    }
  ];
  function pu(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of du) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function fu(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function gu(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = fu(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = pu(e);
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
  function hu(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function mu(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function yu(e) {
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
  function xr(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function vu(e, t) {
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
  function xu(e, t, n = 100, o = 0.8) {
    t.length;
    const r = /* @__PURE__ */ new Map();
    for (const i of e) r.set(i, yu(i));
    for (const i of t) for (const s of e) {
      const l = r.get(s), a = i[s], u = gu(a);
      if (xr(l.typeCounts, u.type), u.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, u.dateFormat && xr(l.dateFormatCounts, u.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const d = a.length;
        (l.strLenMin === void 0 || d < l.strLenMin) && (l.strLenMin = d), (l.strLenMax === void 0 || d > l.strLenMax) && (l.strLenMax = d);
      }
      if (u.dateFormat) {
        const d = vu(a, u.dateFormat);
        d !== null && ((l.dateMin === void 0 || d < l.dateMin) && (l.dateMin = d), (l.dateMax === void 0 || d > l.dateMax) && (l.dateMax = d));
      }
    }
    return e.map((i) => {
      const s = r.get(i);
      let l = hu(s.typeCounts);
      l === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (l = "string");
      const a = l === "date" ? mu(s.dateFormatCounts) : void 0, u = l === "date" ? s.typeCounts.date || 0 : s.typeCounts[l] || 0, d = s.nonNullCount > 0 ? Math.round(u / s.nonNullCount * 100) / 100 : 0, f = {
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
  function Vn(e, t, n, o, r, i, s, l) {
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
        Vn(e[a], u, n, o, r, i + 1, s, l);
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
        Vn(e[u], d, n, o, r, i + 1, s, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function bu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const u of Object.keys(s)) Vn(s[u], u, l, n, a, 1, t, o);
      else Vn(s, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const i = wu([
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
  function wu(e) {
    return e.sort((t, n) => {
      const o = br(t), r = br(n), i = Math.min(o.length, r.length);
      for (let s = 0; s < i; s++) {
        const l = o[s], a = r[s], u = wr(l), d = wr(a);
        if (u !== null && d !== null) {
          if (u !== d) return u - d;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function br(e) {
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
  function wr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Cu = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function ni(e, t) {
    const n = performance.now(), o = {
      ...Cu,
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
    const r = bu(e, o.maxDepth), i = xu(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), s = r.paths.length * r.rows.length, l = i.reduce((d, f) => d + f.nullCount, 0), a = s > 0 ? Math.round(l / s * 1e3) / 10 : 0, u = Math.round((performance.now() - n) * 100) / 100;
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
  function Su(e, t) {
    return y.useMemo(() => ni(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function _u({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: i, socket: s }) {
    const [l, a] = y.useState(n), [u, d] = y.useState(null), [f, g] = y.useState([]), [p, h] = y.useState(false), [m, x] = y.useState(false), b = y.useRef(false), S = y.useRef(() => Promise.resolve()), R = y.useRef(n), j = y.useMemo(() => JSON.stringify(n), [
      n
    ]), $ = y.useMemo(() => JSON.stringify(l) !== j, [
      l,
      j
    ]);
    y.useEffect(() => {
      e && (a(n), R.current = n, d(n.length > 0 ? n[0].path : null), b.current = false);
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !b.current && (b.current = true, S.current());
    }, [
      e
    ]);
    const P = y.useCallback(async () => {
      h(true);
      try {
        const A = i.oid;
        if (!A) return;
        const T = await s.getState(A);
        if ((T == null ? void 0 : T.val) === null || (T == null ? void 0 : T.val) === void 0) return;
        let L;
        const B = T.val;
        if (typeof B == "string") try {
          const G = JSON.parse(B);
          L = Array.isArray(G) ? G : [
            G
          ];
        } catch {
          return;
        }
        else if (Array.isArray(B)) L = B;
        else if (typeof B == "object" && B !== null) L = [
          B
        ];
        else return;
        const O = i.tableMaxDepth || 10, K = ni(L, {
          maxDepth: O
        });
        g(K.columns);
        const X = new Map(R.current.map((G) => [
          G.path,
          G
        ])), ge = new Set(K.columns.map((G) => G.path)), de = R.current.filter((G) => ge.has(G.path)), re = K.columns.filter((G) => !X.has(G.path)).map((G) => ({
          path: G.path,
          visible: true,
          headerName: G.path.split(".").pop() || G.path
        })), be = [
          ...de,
          ...re
        ];
        a(be), R.current = be, d((G) => G === null && be.length > 0 ? be[0].path : G);
      } catch {
      } finally {
        h(false);
      }
    }, [
      i,
      s
    ]);
    y.useEffect(() => {
      S.current = P;
    }, [
      P
    ]), y.useEffect(() => {
      R.current = l;
    }, [
      l
    ]);
    const z = y.useCallback((A) => {
      a((T) => T.map((L) => L.path === A.path ? A : L));
    }, []), v = y.useCallback((A) => {
      a(A);
    }, []), _ = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), w = y.useCallback((A, T) => {
      if (T === "backdropClick" && $) {
        x(true);
        return;
      }
      t();
    }, [
      $,
      t
    ]), M = y.useMemo(() => u ? l.find((A) => A.path === u) : null, [
      u,
      l
    ]), D = y.useMemo(() => u ? f.find((A) => A.path === u) : void 0, [
      u,
      f
    ]);
    return c.jsxs(Di, {
      theme: r,
      children: [
        c.jsxs(Ui, {
          open: e,
          onClose: w,
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
            c.jsx(qi, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: c.jsxs(q, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(k, {
                    variant: "h6",
                    children: C.t("json_table_column_editor_title")
                  }),
                  c.jsx(je, {
                    onClick: () => w(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: c.jsx(zr, {})
                  })
                ]
              })
            }),
            c.jsxs(Yi, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                overflow: "hidden"
              },
              children: [
                c.jsx(q, {
                  sx: {
                    width: "40%",
                    minWidth: 280,
                    borderRight: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: c.jsx(_c, {
                    columns: l,
                    discoveredColumns: f,
                    selectedPath: u,
                    onSelect: d,
                    onChange: v,
                    onRefresh: P,
                    loading: p
                  })
                }),
                c.jsx(q, {
                  sx: {
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: M ? c.jsx(nu, {
                    column: M,
                    discoveredColumn: D,
                    onChange: z
                  }) : c.jsx(q, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%"
                    },
                    children: c.jsx(k, {
                      variant: "body2",
                      color: "text.secondary",
                      children: l.length > 0 ? C.t("json_table_select_column") : C.t("json_table_no_columns")
                    })
                  })
                })
              ]
            }),
            c.jsxs(Ql, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(an, {
                  onClick: () => w(),
                  children: C.t("cancel")
                }),
                c.jsx(an, {
                  variant: "contained",
                  onClick: _,
                  disabled: !$,
                  children: C.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(ma, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => x(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(_s, {
            severity: "warning",
            onClose: () => x(false),
            children: C.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Ru(e, t, n, o) {
    const r = e.name || "columnConfig", i = o.context.theme, [s, l] = y.useState(false), a = y.useMemo(() => Xr(t[r]), [
      t,
      r
    ]), u = a.filter((h) => h.visible).length, d = a.length, f = a.some((h) => h.format), g = a.some((h) => h.cellStyle && h.cellStyle.length > 0), p = y.useCallback((h) => {
      const m = JSON.stringify(h), b = `b64:${btoa(unescape(encodeURIComponent(m)))}`;
      n({
        [r]: b
      });
    }, [
      r,
      n
    ]);
    return c.jsxs(q, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(an, {
          variant: "outlined",
          startIcon: c.jsx(wc, {}),
          onClick: () => l(true),
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          children: C.t("json_table_configure_columns")
        }),
        d > 0 && c.jsxs(k, {
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
        c.jsx(_u, {
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
  const ju = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(dt, {
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
      component: () => c.jsx(dt, {
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
      component: () => c.jsx(dt, {
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
      component: () => c.jsx(dt, {
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
      component: () => c.jsx(dt, {
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
      component: () => c.jsx(dt, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Yn, {
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
      component: (e, t, n, o) => c.jsx(Yn, {
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
      component: () => c.jsx(dt, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Yn, {
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
      component: () => c.jsx(dt, {
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
      component: () => c.jsx(dt, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Ru
    }
  ];
  function bt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xe(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: bt(n, o[e])
      }));
    };
  }
  function Un(e) {
    return e instanceof Function;
  }
  function Mu(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function $u(e, t) {
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
  function Au(e, t, n, o) {
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
      ], (s, l, a, u) => ({
        table: s,
        column: l,
        row: a,
        cell: u,
        getValue: u.getValue,
        renderValue: u.renderValue
      }), H(e.options, "debugCells"))
    };
    return e._features.forEach((s) => {
      s.createCell == null || s.createCell(i, n, t, e);
    }, {}), i;
  }
  function Pu(e, t, n, o) {
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
  const De = "debugHeaders";
  function Cr(e, t, n) {
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
  const Iu = {
    createTable: (e) => {
      e.getHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var i, s;
        const l = (i = o == null ? void 0 : o.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? i : [], a = (s = r == null ? void 0 : r.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? s : [], u = n.filter((f) => !(o != null && o.includes(f.id)) && !(r != null && r.includes(f.id)));
        return jn(t, [
          ...l,
          ...u,
          ...a
        ], e);
      }, H(e.options, De)), e.getCenterHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), jn(t, n, e, "center")), H(e.options, De)), e.getLeftHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return jn(t, i, e, "left");
      }, H(e.options, De)), e.getRightHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return jn(t, i, e, "right");
      }, H(e.options, De)), e.getFooterGroups = V(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, De)), e.getLeftFooterGroups = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, De)), e.getCenterFooterGroups = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, De)), e.getRightFooterGroups = V(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, De)), e.getFlatHeaders = V(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, De)), e.getLeftFlatHeaders = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, De)), e.getCenterFlatHeaders = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, De)), e.getRightFlatHeaders = V(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, De)), e.getCenterLeafHeaders = V(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, De)), e.getLeftLeafHeaders = V(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, De)), e.getRightLeafHeaders = V(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, De)), e.getLeafHeaders = V(() => [
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
      }, H(e.options, De));
    }
  };
  function jn(e, t, n, o) {
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
        let R, j = false;
        if (S && x.column.parent ? R = x.column.parent : (R = x.column, j = true), b && (b == null ? void 0 : b.column) === R) b.subHeaders.push(x);
        else {
          const $ = Cr(n, R, {
            id: [
              o,
              p,
              R.id,
              x == null ? void 0 : x.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((P) => P.column === R).length}` : void 0,
            depth: p,
            index: m.length
          });
          $.subHeaders.push(x), m.push($);
        }
        h.headers.push(x), x.headerGroup = h;
      }), a.push(h), p > 0 && u(m, p - 1);
    }, d = t.map((g, p) => Cr(n, g, {
      depth: s,
      index: p
    }));
    u(d, s - 1), a.reverse();
    const f = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, x = 0, b = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (b = [], f(h.subHeaders).forEach((R) => {
        let { colSpan: j, rowSpan: $ } = R;
        m += j, b.push($);
      })) : m = 1;
      const S = Math.min(...b);
      return x = x + S, h.colSpan = m, h.rowSpan = x, {
        colSpan: m,
        rowSpan: x
      };
    });
    return f((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
  }
  const Do = (e, t, n, o, r, i, s) => {
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
      getLeafRows: () => $u(l.subRows, (a) => a.subRows),
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
      getAllCells: V(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((u) => Au(e, l, u, u.id)), H(e.options, "debugRows")),
      _getAllCellsByColumnId: V(() => [
        l.getAllCells()
      ], (a) => a.reduce((u, d) => (u[d.column.id] = d, u), {}), H(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const u = e._features[a];
      u == null || u.createRow == null || u.createRow(l, e);
    }
    return l;
  }, Fu = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, oi = (e, t, n) => {
    var o, r;
    const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
  };
  oi.autoRemove = (e) => rt(e);
  const ri = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  ri.autoRemove = (e) => rt(e);
  const ii = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  ii.autoRemove = (e) => rt(e);
  const si = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  si.autoRemove = (e) => rt(e);
  const li = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  li.autoRemove = (e) => rt(e) || !(e != null && e.length);
  const ai = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  ai.autoRemove = (e) => rt(e) || !(e != null && e.length);
  const ci = (e, t, n) => e.getValue(t) === n;
  ci.autoRemove = (e) => rt(e);
  const ui = (e, t, n) => e.getValue(t) == n;
  ui.autoRemove = (e) => rt(e);
  const Oo = (e, t, n) => {
    let [o, r] = n;
    const i = e.getValue(t);
    return i >= o && i <= r;
  };
  Oo.resolveFilterValue = (e) => {
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
  Oo.autoRemove = (e) => rt(e) || rt(e[0]) && rt(e[1]);
  const gt = {
    includesString: oi,
    includesStringSensitive: ri,
    equalsString: ii,
    arrIncludes: si,
    arrIncludesAll: li,
    arrIncludesSome: ai,
    equals: ci,
    weakEquals: ui,
    inNumberRange: Oo
  };
  function rt(e) {
    return e == null || e === "";
  }
  const zu = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Xe("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
        return typeof o == "string" ? gt.includesString : typeof o == "number" ? gt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? gt.equals : Array.isArray(o) ? gt.arrIncludes : gt.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return Un(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : gt[e.columnDef.filterFn];
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
          const r = e.getFilterFn(), i = o == null ? void 0 : o.find((d) => d.id === e.id), s = bt(n, i ? i.value : void 0);
          if (Sr(r, s, e)) {
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
          return (i = bt(t, r)) == null ? void 0 : i.filter((s) => {
            const l = n.find((a) => a.id === s.id);
            if (l) {
              const a = l.getFilterFn();
              if (Sr(a, s.value, l)) return false;
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
  function Sr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const ku = (e, t, n) => n.reduce((o, r) => {
    const i = r.getValue(e);
    return o + (typeof i == "number" ? i : 0);
  }, 0), Tu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o > i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Du = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o < i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Ou = (e, t, n) => {
    let o, r;
    return n.forEach((i) => {
      const s = i.getValue(e);
      s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
    }), [
      o,
      r
    ];
  }, Eu = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let i = r.getValue(e);
      i != null && (i = +i) >= i && (++n, o += i);
    }), n) return o / n;
  }, Nu = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!Mu(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, Lu = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Vu = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Hu = (e, t) => t.length, eo = {
    sum: ku,
    min: Tu,
    max: Du,
    extent: Ou,
    mean: Eu,
    median: Nu,
    unique: Lu,
    uniqueCount: Vu,
    count: Hu
  }, Bu = {
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
      onGroupingChange: Xe("grouping", e),
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
        if (typeof o == "number") return eo.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return eo.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return Un(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : eo[e.columnDef.aggregationFn];
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
  function Wu(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((i) => !t.includes(i.id));
    return n === "remove" ? o : [
      ...t.map((i) => e.find((s) => s.id === i)).filter(Boolean),
      ...o
    ];
  }
  const Gu = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Xe("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = V((n) => [
        rn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), H(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = rn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = rn(t, n);
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
            const a = s.shift(), u = l.findIndex((d) => d.id === a);
            u > -1 && i.push(l.splice(u, 1)[0]);
          }
          i = [
            ...i,
            ...l
          ];
        }
        return Wu(i, n, o);
      }, H(e.options, "debugTable"));
    }
  }, to = () => ({
    left: [],
    right: []
  }), Uu = {
    getInitialState: (e) => ({
      columnPinning: to(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Xe("columnPinning", e)
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
        return e.setColumnPinning(t ? to() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : to());
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
  function qu(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Mn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, no = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Yu = {
    getDefaultColumnDef: () => Mn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: no(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Xe("columnSizing", e),
      onColumnSizingInfoChange: Xe("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, o, r;
        const i = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Mn.minSize, (o = i ?? e.columnDef.size) != null ? o : Mn.size), (r = e.columnDef.maxSize) != null ? r : Mn.maxSize);
      }, e.getStart = V((n) => [
        n,
        rn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), H(t.options, "debugColumns")), e.getAfter = V((n) => [
        n,
        rn(t, n),
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
          if (!o || !r || (i.persist == null || i.persist(), oo(i) && i.touches && i.touches.length > 1)) return;
          const s = e.getSize(), l = e ? e.getLeafHeaders().map((b) => [
            b.column.id,
            b.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = oo(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, d = (b, S) => {
            typeof S == "number" && (t.setColumnSizingInfo((R) => {
              var j, $;
              const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, z = (S - ((j = R == null ? void 0 : R.startOffset) != null ? j : 0)) * P, v = Math.max(z / (($ = R == null ? void 0 : R.startSize) != null ? $ : 0), -0.999999);
              return R.columnSizingStart.forEach((_) => {
                let [w, M] = _;
                u[w] = Math.round(Math.max(M + M * v, 0) * 100) / 100;
              }), {
                ...R,
                deltaOffset: z,
                deltaPercentage: v
              };
            }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((R) => ({
              ...R,
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
          }, p = qu(n), h = {
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
          }, x = Ju() ? {
            passive: false
          } : false;
          oo(i) ? (p == null ? void 0 : p.addEventListener("touchmove", m.moveHandler, x), p == null ? void 0 : p.addEventListener("touchend", m.upHandler, x)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, x), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, x)), t.setColumnSizingInfo((b) => ({
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
        e.setColumnSizingInfo(t ? no() : (n = e.initialState.columnSizingInfo) != null ? n : no());
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
  let $n = null;
  function Ju() {
    if (typeof $n == "boolean") return $n;
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
    return $n = e, $n;
  }
  function oo(e) {
    return e.type === "touchstart";
  }
  const Ku = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Xe("columnVisibility", e)
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
  function rn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const Xu = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Zu = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Xe("globalFilter", e),
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
        return Un(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : gt[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, Qu = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Xe("expanded", e),
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
  }, wo = 0, Co = 10, ro = () => ({
    pageIndex: wo,
    pageSize: Co
  }), ed = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...ro(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Xe("pagination", e)
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
        const r = (i) => bt(o, i);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? ro() : (r = e.initialState.pagination) != null ? r : ro());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let i = bt(o, r.pageIndex);
          const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return i = Math.max(0, Math.min(i, s)), {
            ...r,
            pageIndex: i
          };
        });
      }, e.resetPageIndex = (o) => {
        var r, i;
        e.setPageIndex(o ? wo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : wo);
      }, e.resetPageSize = (o) => {
        var r, i;
        e.setPageSize(o ? Co : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Co);
      }, e.setPageSize = (o) => {
        e.setPagination((r) => {
          const i = Math.max(1, bt(o, r.pageSize)), s = r.pageSize * r.pageIndex, l = Math.floor(s / i);
          return {
            ...r,
            pageIndex: l,
            pageSize: i
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var i;
        let s = bt(o, (i = e.options.pageCount) != null ? i : -1);
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
  }, io = () => ({
    top: [],
    bottom: []
  }), td = {
    getInitialState: (e) => ({
      rowPinning: io(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Xe("rowPinning", e)
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
        return e.setRowPinning(t ? io() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : io());
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
  }, nd = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Xe("rowSelection", e),
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
          So(r, i.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? so(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getFilteredSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? so(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getGroupedSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? so(e, n) : {
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
          return So(l, e.id, n, (s = o == null ? void 0 : o.selectChildren) != null ? s : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Eo(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return _o(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return _o(e, n) === "all";
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
  }, So = (e, t, n, o, r) => {
    var i;
    const s = r.getRow(t, true);
    n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = true)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => So(e, l.id, n, o, r));
  };
  function so(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, i = function(s, l) {
      return s.map((a) => {
        var u;
        const d = Eo(a, n);
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
  function Eo(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function _o(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, i = false;
    return e.subRows.forEach((s) => {
      if (!(i && !r) && (s.getCanSelect() && (Eo(s, t) ? i = true : r = false), s.subRows && s.subRows.length)) {
        const l = _o(s, t);
        l === "all" ? i = true : (l === "some" && (i = true), r = false);
      }
    }), r ? "all" : i ? "some" : false;
  }
  const Ro = /([0-9]+)/gm, od = (e, t, n) => di(wt(e.getValue(n)).toLowerCase(), wt(t.getValue(n)).toLowerCase()), rd = (e, t, n) => di(wt(e.getValue(n)), wt(t.getValue(n))), id = (e, t, n) => No(wt(e.getValue(n)).toLowerCase(), wt(t.getValue(n)).toLowerCase()), sd = (e, t, n) => No(wt(e.getValue(n)), wt(t.getValue(n))), ld = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, ad = (e, t, n) => No(e.getValue(n), t.getValue(n));
  function No(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function wt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function di(e, t) {
    const n = e.split(Ro).filter(Boolean), o = t.split(Ro).filter(Boolean);
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
  const Yt = {
    alphanumeric: od,
    alphanumericCaseSensitive: rd,
    text: id,
    textCaseSensitive: sd,
    datetime: ld,
    basic: ad
  }, cd = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Xe("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let o = false;
        for (const r of n) {
          const i = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(i) === "[object Date]") return Yt.datetime;
          if (typeof i == "string" && (o = true, i.split(Ro).length > 1)) return Yt.alphanumeric;
        }
        return o ? Yt.text : Yt.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return Un(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : Yt[e.columnDef.sortingFn];
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
  }, ud = [
    Iu,
    Ku,
    Gu,
    Uu,
    Fu,
    zu,
    Xu,
    Zu,
    cd,
    Bu,
    Qu,
    ed,
    td,
    nd,
    Yu
  ];
  function dd(e) {
    var t, n;
    const o = [
      ...ud,
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
        const p = bt(g, r.options);
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
            var m, x;
            return (m = (x = h.renderValue()) == null || x.toString == null ? void 0 : x.toString()) != null ? m : null;
          },
          ...r._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, H(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: V(() => [
        r._getColumnDefs()
      ], (g) => {
        const p = function(h, m, x) {
          return x === void 0 && (x = 0), h.map((b) => {
            const S = Pu(r, b, x, m), R = b;
            return S.columns = R.columns ? p(R.columns, S, x + 1) : [], S;
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
  function pd() {
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
        for (let u = 0; u < r.length; u++) {
          const d = Do(e, e._getRowId(r[u], u, s), r[u], u, i, void 0, s == null ? void 0 : s.id);
          if (n.flatRows.push(d), n.rowsById[d.id] = d, l.push(d), e.options.getSubRows) {
            var a;
            d.originalSubRows = e.options.getSubRows(r[u], u), (a = d.originalSubRows) != null && a.length && (d.subRows = o(d.originalSubRows, i + 1, d));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, H(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function fd(e) {
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
  function gd(e, t, n) {
    return n.options.filterFromLeafRows ? hd(e, t, n) : md(e, t, n);
  }
  function hd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, u) {
      u === void 0 && (u = 0);
      const d = [];
      for (let g = 0; g < a.length; g++) {
        var f;
        let p = a[g];
        const h = Do(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
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
  function md(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, u) {
      u === void 0 && (u = 0);
      const d = [];
      for (let g = 0; g < a.length; g++) {
        let p = a[g];
        if (t(p)) {
          var f;
          if ((f = p.subRows) != null && f.length && u < s) {
            const m = Do(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
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
  function yd() {
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
      return gd(t.rows, f, e);
    }, H(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function vd(e) {
    return (t) => V(() => [
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
      } : f = fd({
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
  function xd() {
    return (e) => V(() => [
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
              const R = d.getValue(h.id), j = f.getValue(h.id), $ = R === void 0, P = j === void 0;
              if ($ || P) {
                if (x === "first") return $ ? -1 : 1;
                if (x === "last") return $ ? 1 : -1;
                S = $ && P ? 0 : $ ? x : -x;
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
    }, H(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function Jt(e, t) {
    return e ? bd(e) ? y.createElement(e, t) : e : null;
  }
  function bd(e) {
    return wd(e) || typeof e == "function" || Cd(e);
  }
  function wd(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function Cd(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Sd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: dd(t)
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
  function Pt(e, t, n) {
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
        const h = Math.round((Date.now() - d) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, x = m / 16, b = (S, R) => {
          for (S = String(S); S.length < R; ) S = " " + S;
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
  function _r(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const _d = (e, t) => Math.abs(e - t) < 1.01, Rd = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, Rr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, jd = (e) => e, Md = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, $d = (e, t) => {
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
    if (r(Rr(n)), !o.ResizeObserver) return () => {
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
        r(Rr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return i.observe(n, {
      box: "border-box"
    }), () => {
      i.unobserve(n);
    };
  }, jr = {
    passive: true
  }, Mr = typeof window > "u" ? true : "onscrollend" in window, Ad = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const i = e.options.useScrollendEvent && Mr ? () => {
    } : Rd(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), s = (d) => () => {
      const { horizontal: f, isRtl: g } = e.options;
      r = f ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(r, d);
    }, l = s(true), a = s(false);
    n.addEventListener("scroll", l, jr);
    const u = e.options.useScrollendEvent && Mr;
    return u && n.addEventListener("scrollend", a, jr), () => {
      n.removeEventListener("scroll", l), u && n.removeEventListener("scrollend", a);
    };
  }, Pd = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Id = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, i;
    const s = e + t;
    (i = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || i.call(r, {
      [o.options.horizontal ? "left" : "top"]: s,
      behavior: n
    });
  };
  class Fd {
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
          getItemKey: jd,
          rangeExtractor: Md,
          onChange: () => {
          },
          measureElement: Pd,
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
      }, this.maybeNotify = Pt(() => (this.calculateRange(), [
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
      }, this.getMeasurementOptions = Pt(() => [
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
      }), this.getMeasurements = Pt(() => [
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
            const j = f[m], $ = j !== void 0 ? d[j] : void 0;
            x = $ ? $.end + this.options.gap : o + r;
          } else {
            const j = this.options.lanes === 1 ? d[g - 1] : this.getFurthestMeasurement(d, g);
            x = j ? j.end + this.options.gap : o + r, m = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const b = a.get(p), S = typeof b == "number" ? b : this.options.estimateSize(g), R = x + S;
          d[g] = {
            index: g,
            start: x,
            size: S,
            end: R,
            key: p,
            lane: m
          }, f[m] = g;
        }
        return this.measurementsCache = d, d;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Pt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, i) => this.range = n.length > 0 && o > 0 ? zd({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: i
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Pt(() => {
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
      }, this.getVirtualItems = Pt(() => [
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
        if (o.length !== 0) return _r(o[pi(0, o.length - 1, (r) => _r(o[r]).start, n)]);
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
              _d(m[0], h) || a(g);
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
  const pi = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, i = n(r);
      if (i < o) e = r + 1;
      else if (i > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function zd({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, i = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let s = pi(0, r, i, n), l = s;
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
  const $r = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function kd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (i, s) => {
        var l;
        e && s ? Oi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, i, s);
      }
    }, [r] = y.useState(() => new Fd(o));
    return r.setOptions(o), $r(() => r._didMount(), []), $r(() => r._willUpdate()), r;
  }
  function Td(e) {
    return kd({
      observeElementRect: $d,
      observeElementOffset: Ad,
      scrollToFn: Id,
      ...e
    });
  }
  const Dd = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Od = {
    compact: 36,
    standard: 56,
    comfortable: 68
  };
  function Ed(e) {
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
  function An(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e12 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = To(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  const Nd = () => {
    var _a2, _b, _c2;
    const e = y.useContext(Ei), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = Ni("oid"), i = Ji("oid"), s = t == null ? void 0 : t.type, l = s === "string" || s === "mixed" || s === "json", a = y.useMemo(() => {
      if (i == null) return [];
      let I;
      if (typeof i == "string") try {
        I = JSON.parse(i);
      } catch {
        return [];
      }
      else I = i;
      return Array.isArray(I) ? I : typeof I == "object" && I !== null ? [
        I
      ] : [];
    }, [
      i
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: d, rows: f } = Su(a, u), g = y.useMemo(() => Xr(n.data.columnConfig), [
      n.data.columnConfig
    ]), p = n.data.tableDensity || "standard", h = Number(n.data.tableRowHeight) || Dd[p] || 52, m = Number(n.data.tableHeaderHeight) || Od[p] || 56, x = y.useCallback((I, F) => {
      var _a3, _b2;
      let U = I != null ? typeof I == "object" ? JSON.stringify(I) : String(I) : "";
      if (F.format) switch (F.format.type) {
        case "number":
          (typeof I == "number" || typeof I == "string" && !isNaN(Number(I))) && (U = Zr(Number(I), {
            decimals: F.format.numberDecimals,
            prefix: F.format.numberPrefix,
            suffix: F.format.numberSuffix,
            thousands: F.format.numberThousandsSeparator
          }));
          break;
        case "date":
          U = Qr(I, F.format.dateFormat, F.format.dateInputFormat);
          break;
        case "boolean":
          U = yo(I, F.format.booleanTrue, F.format.booleanFalse);
          break;
        case "string":
          U = ei(U, F.format);
          break;
      }
      const E = !F.cellStyleMode || F.cellStyleMode === "first-match", Pe = ((_a3 = F.format) == null ? void 0 : _a3.type) === "date" ? To(I, F.format.dateInputFormat) : I, ve = {}, ne = {};
      if (F.cellStyle && F.cellStyle.length > 0) {
        for (const pe of F.cellStyle) if (pe.logic && Qc(pe.logic, Pe)) {
          if (pe.backgroundColor && !("background" in ve) && !("backgroundColor" in ve)) {
            const xe = zt(pe.backgroundColor);
            xe ? ve.background = xe : ve.backgroundColor = pe.backgroundColor;
          }
          if (pe.textColor && !("color" in ne) && !("background" in ne)) {
            const xe = zt(pe.textColor);
            xe ? (ne.background = xe, ne.backgroundClip = "text", ne.WebkitBackgroundClip = "text", ne.color = "transparent") : ne.color = pe.textColor;
          }
          if (pe.fontWeight && !ne.fontWeight && (ne.fontWeight = pe.fontWeight), pe.fontStyle && !ne.fontStyle && (ne.fontStyle = pe.fontStyle), E) break;
        }
      }
      return ((_b2 = F.format) == null ? void 0 : _b2.type) === "string" && (F.format.stringFontWeight === "bold" && !ne.fontWeight && (ne.fontWeight = "bold"), F.format.stringFontStyle === "italic" && !ne.fontStyle && (ne.fontStyle = "italic"), F.format.stringFontSize && !ne.fontSize && (ne.fontSize = `${F.format.stringFontSize}px`), F.format.stringTextColor && !("color" in ne) && !("background" in ne) && (ne.color = F.format.stringTextColor)), {
        displayValue: U,
        textSx: ne,
        bgSx: ve
      };
    }, []), b = y.useMemo(() => f.map((I, F) => ({
      __id: F,
      ...I
    })), [
      f
    ]), S = y.useMemo(() => {
      const I = new Map(d.map((E) => [
        E.path,
        E.dateFormat
      ])), F = n.data.tableRowSelection === true ? {
        id: "__select__",
        size: 48,
        enableResizing: false,
        enableSorting: false,
        enableColumnFilter: false,
        header: ({ table: E }) => c.jsx(ln, {
          size: "small",
          indeterminate: E.getIsSomePageRowsSelected(),
          checked: E.getIsAllPageRowsSelected(),
          onChange: E.getToggleAllPageRowsSelectedHandler(),
          "aria-label": "Select all rows"
        }),
        cell: ({ row: E }) => c.jsx(ln, {
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
      let U;
      return g.length > 0 ? U = g.filter((E) => E.visible).map((E) => {
        var _a3, _b2;
        const Pe = ((_a3 = E.format) == null ? void 0 : _a3.dateInputFormat) ?? I.get(E.path), ve = ((_b2 = E.format) == null ? void 0 : _b2.type) === "date", ne = (xe, he, Te) => An(xe.getValue(Te), Pe) - An(he.getValue(Te), Pe);
        return {
          id: E.path,
          size: E.width ?? 150,
          accessorFn: (xe) => xe[E.path],
          header: E.headerName || E.path,
          enableSorting: E.sortable ?? n.data.tableSorting !== false,
          enableColumnFilter: E.filterable ?? n.data.tableFiltering === true,
          ...ve && {
            sortingFn: ne
          },
          cell: ({ getValue: xe }) => {
            const he = xe(), { displayValue: Te, textSx: ut } = x(he, E);
            return c.jsx(k, {
              variant: "body2",
              component: "span",
              noWrap: true,
              title: Te,
              sx: {
                width: "100%",
                display: "block",
                lineHeight: "inherit",
                ...ut
              },
              children: Te
            });
          },
          meta: {
            align: E.align || "left",
            width: E.width,
            getCellSx: (xe) => {
              const { bgSx: he } = x(xe, E);
              return he;
            }
          }
        };
      }) : U = d.map((E) => {
        const Pe = E.type === "date" && E.dateFormat, ve = E.dateFormat, ne = (xe, he, Te) => An(xe.getValue(Te), ve) - An(he.getValue(Te), ve);
        return {
          id: E.path,
          size: 150,
          accessorFn: (xe) => xe[E.path],
          header: E.path.split(".").pop() || E.path,
          enableSorting: n.data.tableSorting !== false,
          enableColumnFilter: n.data.tableFiltering === true,
          ...Pe && {
            sortingFn: ne
          },
          cell: ({ getValue: xe }) => {
            const he = xe(), Te = he != null ? typeof he == "object" ? JSON.stringify(he) : String(he) : "";
            return c.jsx(k, {
              variant: "body2",
              component: "span",
              noWrap: true,
              title: Te,
              sx: {
                width: "100%",
                display: "block",
                lineHeight: "inherit"
              },
              children: Te
            });
          },
          meta: {
            align: "left"
          }
        };
      }), F ? [
        F,
        ...U
      ] : U;
    }, [
      g,
      d,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection,
      x
    ]), [R, j] = y.useState([]), [$, P] = y.useState([]), [z, v] = y.useState(""), [_, w] = y.useState({}), [M, D] = y.useState(() => {
      if (n.data.tableAutoSize !== false) return {};
      const I = `jtc_col_sizes_${o}`;
      try {
        const U = localStorage.getItem(I);
        if (U) return JSON.parse(U);
      } catch {
      }
      const F = {};
      return g.forEach((U) => {
        U.width && (F[U.path] = U.width);
      }), n.data.tableRowSelection === true && (F.__select__ = 48), F;
    });
    y.useEffect(() => {
      n.data.tableAutoSize === false && localStorage.setItem(`jtc_col_sizes_${o}`, JSON.stringify(M));
    }, [
      M,
      o,
      n.data.tableAutoSize
    ]);
    const A = y.useMemo(() => Number(n.data.tablePageSize) || 25, [
      n.data.tablePageSize
    ]), [T, L] = y.useState({
      pageIndex: 0,
      pageSize: A
    });
    y.useEffect(() => {
      L((I) => I.pageSize === A ? I : {
        pageIndex: 0,
        pageSize: A
      });
    }, [
      A
    ]);
    const B = y.useMemo(() => n.data.tablePagination === false ? {
      pageIndex: 0,
      pageSize: Math.max(b.length, 1)
    } : T, [
      n.data.tablePagination,
      b.length,
      T
    ]), O = y.useMemo(() => Ed(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), K = Sd({
      data: b,
      columns: S,
      getCoreRowModel: pd(),
      getSortedRowModel: xd(),
      getFilteredRowModel: yd(),
      getPaginationRowModel: vd(),
      enableMultiSort: false,
      globalFilterFn: "includesString",
      columnResizeMode: "onChange",
      enableColumnResizing: n.data.tableAutoSize === false,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3
      },
      state: {
        sorting: R,
        columnFilters: $,
        globalFilter: z,
        pagination: B,
        rowSelection: _,
        columnSizing: M
      },
      onSortingChange: j,
      onColumnFiltersChange: P,
      onGlobalFilterChange: v,
      onPaginationChange: n.data.tablePagination !== false ? L : void 0,
      onRowSelectionChange: w,
      onColumnSizingChange: D,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), X = y.useRef(null), [ge, de] = y.useState(null), re = y.useRef(null), be = y.useCallback((I, F) => {
      re.current = I, de(F);
    }, []), G = y.useCallback(() => {
      de(null);
    }, []), Me = y.useMemo(() => {
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
    ]), N = n.data.tableHeaderBgColor, le = n.data.tableHeaderTextColor, oe = n.data.tableHeaderFontSize, Fe = y.useMemo(() => {
      const I = N ? zt(N) : null;
      return {
        height: m,
        whiteSpace: "nowrap",
        ...!I && !N && {
          backgroundColor: "background.paper"
        },
        ...I && {
          background: I
        },
        ...!I && N && {
          backgroundColor: N
        },
        ...le && {
          color: le
        },
        ...oe && {
          fontSize: `${oe}px`
        }
      };
    }, [
      m,
      N,
      le,
      oe
    ]), Ne = y.useMemo(() => ({
      ...n.data.tableCellFontSize && {
        fontSize: `${n.data.tableCellFontSize}px`
      },
      overflow: "hidden",
      height: h,
      maxHeight: h,
      padding: "0 8px"
    }), [
      n.data.tableCellFontSize,
      h
    ]), $e = n.data.tableStripedColor, ae = $e ? zt($e) : null, ze = y.useCallback((I) => {
      if (!(!$e || I % 2 === 0)) return {
        background: ae || $e,
        ...ae ? {} : {
          backgroundColor: $e
        }
      };
    }, [
      $e,
      ae
    ]), Ae = re.current ? R.find((I) => {
      var _a3;
      return I.id === ((_a3 = re.current) == null ? void 0 : _a3.id);
    }) : void 0, yt = re.current ? (_a2 = $.find((I) => {
      var _a3;
      return I.id === ((_a3 = re.current) == null ? void 0 : _a3.id);
    })) == null ? void 0 : _a2.value : void 0, it = K.getRowModel().rows, st = Td({
      count: it.length,
      getScrollElement: () => X.current,
      estimateSize: () => h,
      overscan: 10
    }), Le = n.data.tablePagination === false && it.length > 50 ? st.getVirtualItems() : null, Ye = Le && Le.length > 0 ? Le[0].start : 0, lt = Le && Le.length > 0 ? st.getTotalSize() - (Le[Le.length - 1].end ?? 0) : 0;
    return c.jsxs(Li, {
      isValidType: l,
      data: r,
      oidValue: i,
      children: [
        c.jsx(Vi, {
          data: r,
          widget: n
        }),
        l && S.length > 0 ? c.jsxs(q, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(q, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(ke, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: z,
                onChange: (I) => v(I.target.value),
                placeholder: C.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(ho, {
                      position: "start",
                      children: c.jsx(Kr, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            c.jsx(Na, {
              ref: X,
              sx: {
                flex: 1,
                overflow: "auto"
              },
              children: c.jsxs(ja, {
                size: p === "compact" ? "small" : "medium",
                sx: Me,
                stickyHeader: true,
                children: [
                  c.jsxs(Wa, {
                    children: [
                      K.getHeaderGroups().map((I) => c.jsx(At, {
                        sx: {
                          height: m,
                          "&:hover .resize-handle": {
                            opacity: 1
                          }
                        },
                        children: I.headers.map((F) => {
                          const U = F.column.getCanSort(), E = F.column.getIsSorted(), Pe = F.column.columnDef.meta, ve = F.column.id === "__select__", ne = n.data.tableAutoSize === false;
                          return c.jsx(nt, {
                            align: (Pe == null ? void 0 : Pe.align) || "left",
                            padding: ve ? "checkbox" : "normal",
                            sx: {
                              ...Fe,
                              ...ne && {
                                width: F.column.getSize()
                              },
                              minWidth: ve ? 48 : 40,
                              userSelect: "none",
                              overflow: "hidden"
                            },
                            children: c.jsxs(q, {
                              sx: {
                                position: "relative",
                                height: "100%"
                              },
                              children: [
                                ve ? Jt(F.column.columnDef.header, F.getContext()) : c.jsxs(q, {
                                  sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: (Pe == null ? void 0 : Pe.align) === "right" ? "flex-end" : (Pe == null ? void 0 : Pe.align) === "center" ? "center" : "space-between"
                                  },
                                  children: [
                                    U ? c.jsx(yc, {
                                      active: E !== false,
                                      direction: E === "desc" ? "desc" : "asc",
                                      onClick: F.column.getToggleSortingHandler(),
                                      children: c.jsx(k, {
                                        variant: "body2",
                                        component: "span",
                                        fontWeight: "medium",
                                        noWrap: true,
                                        children: Jt(F.column.columnDef.header, F.getContext())
                                      })
                                    }) : c.jsx(k, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      children: Jt(F.column.columnDef.header, F.getContext())
                                    }),
                                    n.data.tableColumnMenu !== false && c.jsx(Ge, {
                                      title: C.t("json_table_column_menu"),
                                      children: c.jsx(je, {
                                        size: "small",
                                        "aria-label": C.t("json_table_column_menu"),
                                        onClick: (pe) => {
                                          pe.stopPropagation(), be(F.column, pe.currentTarget);
                                        },
                                        sx: {
                                          ml: 0.5,
                                          opacity: 0.6
                                        },
                                        children: c.jsx(xc, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  ]
                                }),
                                ne && F.column.getCanResize() && c.jsx(q, {
                                  className: "resize-handle",
                                  onMouseDown: F.getResizeHandler(),
                                  onTouchStart: F.getResizeHandler(),
                                  onClick: (pe) => pe.stopPropagation(),
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
                                    opacity: F.column.getIsResizing() ? 1 : 0,
                                    bgcolor: F.column.getIsResizing() ? "primary.main" : "divider",
                                    transition: "opacity 0.15s",
                                    "&:hover": {
                                      opacity: 1,
                                      bgcolor: "primary.light"
                                    }
                                  }
                                })
                              ]
                            })
                          }, F.id);
                        })
                      }, I.id)),
                      n.data.tableFiltering === true && c.jsx(At, {
                        children: (_b = K.getHeaderGroups()[0]) == null ? void 0 : _b.headers.map((I) => {
                          if (I.column.id === "__select__") return c.jsx(nt, {
                            padding: "checkbox",
                            sx: {
                              py: 0.5,
                              px: 0.5
                            }
                          }, I.id);
                          if (!I.column.getCanFilter()) return c.jsx(nt, {
                            sx: {
                              py: 0.5,
                              px: 0.5
                            }
                          }, I.id);
                          const F = I.column.getFilterValue() ?? "";
                          return c.jsx(nt, {
                            sx: {
                              py: 0.5,
                              px: 0.5,
                              verticalAlign: "bottom"
                            },
                            children: c.jsx(ke, {
                              size: "small",
                              variant: "standard",
                              fullWidth: true,
                              value: F,
                              onChange: (U) => I.column.setFilterValue(U.target.value || void 0),
                              placeholder: C.t("json_table_filter_placeholder"),
                              slotProps: {
                                input: {
                                  endAdornment: F ? c.jsx(ho, {
                                    position: "end",
                                    children: c.jsx(Ge, {
                                      title: C.t("json_table_filter_clear"),
                                      children: c.jsx(je, {
                                        size: "small",
                                        onClick: () => I.column.setFilterValue(void 0),
                                        "aria-label": C.t("json_table_filter_clear"),
                                        children: c.jsx(mo, {
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
                  c.jsx(Ia, {
                    children: Le ? c.jsxs(c.Fragment, {
                      children: [
                        Ye > 0 && c.jsx(At, {
                          children: c.jsx(nt, {
                            colSpan: S.length,
                            sx: {
                              height: Ye,
                              p: 0,
                              border: "none"
                            }
                          })
                        }),
                        Le.map((I) => {
                          const F = it[I.index], U = I.index;
                          return c.jsx(At, {
                            sx: {
                              height: h,
                              ...ze(U)
                            },
                            children: F.getVisibleCells().map((E) => {
                              var _a3, _b2;
                              const Pe = E.column.id === "__select__", ve = !Pe && ((_a3 = E.column.columnDef.meta) == null ? void 0 : _a3.getCellSx) ? E.column.columnDef.meta.getCellSx(E.getValue()) : {};
                              return c.jsx(nt, {
                                align: ((_b2 = E.column.columnDef.meta) == null ? void 0 : _b2.align) || "left",
                                padding: Pe ? "checkbox" : "normal",
                                sx: {
                                  ...Ne,
                                  ...ve
                                },
                                children: Jt(E.column.columnDef.cell, E.getContext())
                              }, E.id);
                            })
                          }, F.id);
                        }),
                        lt > 0 && c.jsx(At, {
                          children: c.jsx(nt, {
                            colSpan: S.length,
                            sx: {
                              height: lt,
                              p: 0,
                              border: "none"
                            }
                          })
                        })
                      ]
                    }) : it.map((I, F) => c.jsx(At, {
                      sx: {
                        height: h,
                        ...ze(F)
                      },
                      children: I.getVisibleCells().map((U) => {
                        var _a3, _b2;
                        const E = U.column.id === "__select__", Pe = !E && ((_a3 = U.column.columnDef.meta) == null ? void 0 : _a3.getCellSx) ? U.column.columnDef.meta.getCellSx(U.getValue()) : {};
                        return c.jsx(nt, {
                          align: ((_b2 = U.column.columnDef.meta) == null ? void 0 : _b2.align) || "left",
                          padding: E ? "checkbox" : "normal",
                          sx: {
                            ...Ne,
                            ...Pe
                          },
                          children: Jt(U.column.columnDef.cell, U.getContext())
                        }, U.id);
                      })
                    }, I.id))
                  })
                ]
              })
            }),
            n.data.tablePagination !== false && c.jsx(ac, {
              component: "div",
              count: K.getFilteredRowModel().rows.length,
              page: T.pageIndex,
              rowsPerPage: T.pageSize,
              rowsPerPageOptions: O,
              onPageChange: (I, F) => L((U) => ({
                ...U,
                pageIndex: F
              })),
              onRowsPerPageChange: (I) => L({
                pageIndex: 0,
                pageSize: parseInt(I.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(k, {
                variant: "body2",
                component: "span",
                children: C.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: I, to: F, count: U }) => c.jsx(k, {
                variant: "body2",
                component: "span",
                children: `${I}\u2013${F} / ${U}`
              })
            }),
            c.jsxs(Hi, {
              anchorEl: ge,
              open: !!ge,
              onClose: G,
              children: [
                c.jsxs(We, {
                  onClick: () => {
                    re.current && j([
                      {
                        id: re.current.id,
                        desc: false
                      }
                    ]), G();
                  },
                  children: [
                    c.jsx(Jr, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(k, {
                      variant: "body2",
                      children: C.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(We, {
                  onClick: () => {
                    re.current && j([
                      {
                        id: re.current.id,
                        desc: true
                      }
                    ]), G();
                  },
                  children: [
                    c.jsx(Yr, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(k, {
                      variant: "body2",
                      children: C.t("json_table_sort_desc")
                    })
                  ]
                }),
                Ae && c.jsx(We, {
                  onClick: () => {
                    j([]), G();
                  },
                  children: c.jsx(k, {
                    variant: "body2",
                    children: C.t("json_table_sort_clear")
                  })
                }),
                n.data.tableFiltering === true && ((_c2 = re.current) == null ? void 0 : _c2.getCanFilter()) === true && yt && c.jsxs(We, {
                  onClick: () => {
                    var _a3;
                    (_a3 = re.current) == null ? void 0 : _a3.setFilterValue(void 0), G();
                  },
                  children: [
                    c.jsx(mo, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(k, {
                      variant: "body2",
                      children: C.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            })
          ]
        }) : c.jsx(q, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: c.jsx(k, {
            variant: "body2",
            color: "text.secondary",
            children: l ? C.t("json_table_no_data") : C.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Ld = [
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
  jo = class extends C {
    static createObjectFields() {
      const t = Bi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (i, s, l, a) => {
          if (!s.oid) {
            for (const u of Ld) delete s[u];
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
              ...Wo()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...jo.createObjectFields(),
              ...ju()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Wo({
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
      return jo.getWidgetInfo();
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
      return Wi(this.wrapContent(c.jsx(Nd, {})), n);
    }
  };
});
export {
  __tla,
  jo as default
};
