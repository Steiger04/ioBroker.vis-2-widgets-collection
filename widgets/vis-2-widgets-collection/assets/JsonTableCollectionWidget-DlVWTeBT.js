import { g as me, a as ye, u as ve, Z as Ai, _ as Pi, $ as Cn, a0 as Vt, h as Wt, j as c, s as U, d as oe, e as be, a1 as qo, m as de, a2 as Hr, b as ne, P as ot, B as Un, c as le, I as we, W as B, a3 as ho, M as mo, X as It, a4 as an, a5 as Ii, f as Yo, a6 as Fi, a7 as ko, i as Te, a8 as Br, a9 as gn, U as zi, aa as Ti, T as I, ab as Jo, ac as ki, ad as Wr, ae as yo, af as Di, ag as Xo, ah as Ei, R as Gt, o as W, ai as Ae, G as x, aj as hn, ak as mn, al as Oi, am as Ni, D as Li, w as Ut, an as Vi, ao as Hi, C as Je, F as Pt, ap as Bi, n as Wi, q as Gi, K as $n, x as Ui, y as qi, aq as Yi, A as Ji, z as Ko, E as Xi, __tla as __tla_0 } from "./useData-CoMv8b7s.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as yn, __tla as __tla_2 } from "./Checkbox-CjPg9dWs.js";
import { S as Ki, __tla as __tla_3 } from "./Slider-DgHpn0IP.js";
import { F as mt, __tla as __tla_4 } from "./FormControlLabel-BAm8tbJK.js";
import { S as Ft, __tla as __tla_5 } from "./Switch-hq_W31Xv.js";
import { M as _e, __tla as __tla_6 } from "./MenuItem-CzBojcp8.js";
import { S as De, __tla as __tla_7 } from "./Stack-CzOOYs5P.js";
import { T as Gr, a as qn, __tla as __tla_8 } from "./ToggleButtonGroup-DG2CiFmV.js";
import { C as Ur, __tla as __tla_9 } from "./Close-CQt1dGJP.js";
import { B as vn, __tla as __tla_10 } from "./Button-BOWf2z70.js";
import { D as Qi, a as Zi, b as es, __tla as __tla_11 } from "./DialogTitle-CJWtNrVp.js";
import { u as ts, __tla as __tla_12 } from "./useOidValue-DFyPWDrl.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Dz75iFvF.js";
import { __tla as __tla_14 } from "./listItemTextClasses-CJ06hn_z.js";
let To;
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
  function ns(e) {
    return me("MuiCollapse", e);
  }
  ye("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const os = (e) => {
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
    return be(o, ns, n);
  }, rs = U("div", {
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
  })(de(({ theme: e }) => ({
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
  }))), is = U("div", {
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
  }), ss = U("div", {
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
  }), vo = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: i, className: s, collapsedSize: l = "0px", component: a, easing: d, in: u, onEnter: p, onEntered: g, onEntering: f, onExit: h, onExited: m, onExiting: v, orientation: b = "vertical", style: C, timeout: S = Ai.standard, TransitionComponent: w = Pi, ...j } = o, R = {
      ...o,
      orientation: b,
      collapsedSize: l
    }, A = os(R), k = Cn(), z = Vt(), _ = y.useRef(null), M = y.useRef(), D = typeof l == "number" ? `${l}px` : l, P = b === "horizontal", N = P ? "width" : "height", O = y.useRef(null), L = Wt(n, O), T = (F) => (se) => {
      if (F) {
        const te = O.current;
        se === void 0 ? F(te) : F(te, se);
      }
    }, G = () => _.current ? _.current[P ? "clientWidth" : "clientHeight"] : 0, Y = T((F, se) => {
      _.current && P && (_.current.style.position = "absolute"), F.style[N] = D, p && p(F, se);
    }), ie = T((F, se) => {
      const te = G();
      _.current && P && (_.current.style.position = "");
      const { duration: $e, easing: Ee } = qo({
        style: C,
        timeout: S,
        easing: d
      }, {
        mode: "enter"
      });
      if (S === "auto") {
        const je = k.transitions.getAutoHeightDuration(te);
        F.style.transitionDuration = `${je}ms`, M.current = je;
      } else F.style.transitionDuration = typeof $e == "string" ? $e : `${$e}ms`;
      F.style[N] = `${te}px`, F.style.transitionTimingFunction = Ee, f && f(F, se);
    }), ae = T((F, se) => {
      F.style[N] = "auto", g && g(F, se);
    }), Se = T((F) => {
      F.style[N] = `${G()}px`, h && h(F);
    }), Ce = T(m), ge = T((F) => {
      const se = G(), { duration: te, easing: $e } = qo({
        style: C,
        timeout: S,
        easing: d
      }, {
        mode: "exit"
      });
      if (S === "auto") {
        const Ee = k.transitions.getAutoHeightDuration(se);
        F.style.transitionDuration = `${Ee}ms`, M.current = Ee;
      } else F.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
      F.style[N] = D, F.style.transitionTimingFunction = $e, v && v(F);
    }), ee = (F) => {
      S === "auto" && z.start(M.current || 0, F), r && r(O.current, F);
    };
    return c.jsx(w, {
      in: u,
      onEnter: Y,
      onEntered: ae,
      onEntering: ie,
      onExit: Se,
      onExited: Ce,
      onExiting: ge,
      addEndListener: ee,
      nodeRef: O,
      timeout: S === "auto" ? null : S,
      ...j,
      children: (F, { ownerState: se, ...te }) => c.jsx(rs, {
        as: a,
        className: oe(A.root, s, {
          entered: A.entered,
          exited: !u && D === "0px" && A.hidden
        }[F]),
        style: {
          [P ? "minWidth" : "minHeight"]: D,
          ...C
        },
        ref: L,
        ownerState: {
          ...R,
          state: F
        },
        ...te,
        children: c.jsx(is, {
          ownerState: {
            ...R,
            state: F
          },
          className: A.wrapper,
          ref: _,
          children: c.jsx(ss, {
            ownerState: {
              ...R,
              state: F
            },
            className: A.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  vo && (vo.muiSupportAuto = true);
  const qr = y.createContext({});
  function ls(e) {
    return me("MuiAccordion", e);
  }
  const An = ye("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), as = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: i } = e;
    return be({
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
    }, ls, t);
  }, cs = U(ot, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${An.region}`]: t.region
        },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters
      ];
    }
  })(de(({ theme: e }) => {
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
      [`&.${An.expanded}`]: {
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
      [`&.${An.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), de(({ theme: e }) => ({
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
          [`&.${An.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), us = U("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Pn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: i, defaultExpanded: s = false, disabled: l = false, disableGutters: a = false, expanded: d, onChange: u, square: p = false, slots: g = {}, slotProps: f = {}, TransitionComponent: h, TransitionProps: m, ...v } = o, [b, C] = Hr({
      controlled: d,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), S = y.useCallback((G) => {
      C(!b), u && u(G, !b);
    }, [
      b,
      u,
      C
    ]), [w, ...j] = y.Children.toArray(r), R = y.useMemo(() => ({
      expanded: b,
      disabled: l,
      disableGutters: a,
      toggle: S
    }), [
      b,
      l,
      a,
      S
    ]), A = {
      ...o,
      square: p,
      disabled: l,
      disableGutters: a,
      expanded: b
    }, k = as(A), z = {
      transition: h,
      ...g
    }, _ = {
      transition: m,
      ...f
    }, M = {
      slots: z,
      slotProps: _
    }, [D, P] = ne("root", {
      elementType: cs,
      externalForwardedProps: {
        ...M,
        ...v
      },
      className: oe(k.root, i),
      shouldForwardComponentProp: true,
      ownerState: A,
      ref: n,
      additionalProps: {
        square: p
      }
    }), [N, O] = ne("heading", {
      elementType: us,
      externalForwardedProps: M,
      className: k.heading,
      ownerState: A
    }), [L, T] = ne("transition", {
      elementType: vo,
      externalForwardedProps: M,
      ownerState: A
    });
    return c.jsxs(D, {
      ...P,
      children: [
        c.jsx(N, {
          ...O,
          children: c.jsx(qr.Provider, {
            value: R,
            children: w
          })
        }),
        c.jsx(L, {
          in: b,
          timeout: "auto",
          ...T,
          children: c.jsx("div", {
            "aria-labelledby": w.props.id,
            id: w.props["aria-controls"],
            role: "region",
            className: k.region,
            children: j
          })
        })
      ]
    });
  });
  function ds(e) {
    return me("MuiAccordionDetails", e);
  }
  ye("MuiAccordionDetails", [
    "root"
  ]);
  const ps = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, ds, t);
  }, fs = U("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(de(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), In = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...i } = o, s = o, l = ps(s);
    return c.jsx(fs, {
      className: oe(l.root, r),
      ref: n,
      ownerState: s,
      ...i
    });
  });
  function gs(e) {
    return me("MuiAccordionSummary", e);
  }
  const Ht = ye("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), hs = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return be({
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
    }, gs, t);
  }, ms = U(Un, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(de(({ theme: e }) => {
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
      [`&.${Ht.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Ht.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Ht.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Ht.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), ys = U("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(de(({ theme: e }) => ({
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
          [`&.${Ht.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), vs = U("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(de(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${Ht.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Fn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: i, expandIcon: s, focusVisibleClassName: l, onClick: a, slots: d, slotProps: u, ...p } = o, { disabled: g = false, disableGutters: f, expanded: h, toggle: m } = y.useContext(qr), v = (_) => {
      m && m(_), a && a(_);
    }, b = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: f
    }, C = hs(b), S = {
      slots: d,
      slotProps: u
    }, [w, j] = ne("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: oe(C.root, i),
      elementType: ms,
      externalForwardedProps: {
        ...S,
        ...p
      },
      ownerState: b,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: oe(C.focusVisible, l)
      },
      getSlotProps: (_) => ({
        ..._,
        onClick: (M) => {
          var _a2;
          (_a2 = _.onClick) == null ? void 0 : _a2.call(_, M), v(M);
        }
      })
    }), [R, A] = ne("content", {
      className: C.content,
      elementType: ys,
      externalForwardedProps: S,
      ownerState: b
    }), [k, z] = ne("expandIconWrapper", {
      className: C.expandIconWrapper,
      elementType: vs,
      externalForwardedProps: S,
      ownerState: b
    });
    return c.jsxs(w, {
      ...j,
      children: [
        c.jsx(R, {
          ...A,
          children: r
        }),
        s && c.jsx(k, {
          ...z,
          children: s
        })
      ]
    });
  });
  function bs(e) {
    return me("MuiAlert", e);
  }
  const Qo = ye("MuiAlert", [
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
  ]), xs = le(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), ws = le(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Cs = le(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), _s = le(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), Ss = le(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), js = (e) => {
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
    return be(i, bs, r);
  }, Rs = U(ot, {
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
  })(de(({ theme: e }) => {
    const t = e.palette.mode === "light" ? ho : mo, n = e.palette.mode === "light" ? mo : ho;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(It([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${Qo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(It([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${Qo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(It([
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
  })), Ms = U("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), $s = U("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), As = U("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), Zo = {
    success: c.jsx(xs, {
      fontSize: "inherit"
    }),
    warning: c.jsx(ws, {
      fontSize: "inherit"
    }),
    error: c.jsx(Cs, {
      fontSize: "inherit"
    }),
    info: c.jsx(_s, {
      fontSize: "inherit"
    })
  }, er = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: i, className: s, closeText: l = "Close", color: a, components: d = {}, componentsProps: u = {}, icon: p, iconMapping: g = Zo, onClose: f, role: h = "alert", severity: m = "success", slotProps: v = {}, slots: b = {}, variant: C = "standard", ...S } = o, w = {
      ...o,
      color: a,
      severity: m,
      variant: C,
      colorSeverity: a || m
    }, j = js(w), R = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...b
      },
      slotProps: {
        ...u,
        ...v
      }
    }, [A, k] = ne("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: oe(j.root, s),
      elementType: Rs,
      externalForwardedProps: {
        ...R,
        ...S
      },
      ownerState: w,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [z, _] = ne("icon", {
      className: j.icon,
      elementType: Ms,
      externalForwardedProps: R,
      ownerState: w
    }), [M, D] = ne("message", {
      className: j.message,
      elementType: $s,
      externalForwardedProps: R,
      ownerState: w
    }), [P, N] = ne("action", {
      className: j.action,
      elementType: As,
      externalForwardedProps: R,
      ownerState: w
    }), [O, L] = ne("closeButton", {
      elementType: we,
      externalForwardedProps: R,
      ownerState: w
    }), [T, G] = ne("closeIcon", {
      elementType: Ss,
      externalForwardedProps: R,
      ownerState: w
    });
    return c.jsxs(A, {
      ...k,
      children: [
        p !== false ? c.jsx(z, {
          ..._,
          children: p || g[m] || Zo[m]
        }) : null,
        c.jsx(M, {
          ...D,
          children: i
        }),
        r != null ? c.jsx(P, {
          ...N,
          children: r
        }) : null,
        r == null && f ? c.jsx(P, {
          ...N,
          children: c.jsx(O, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: f,
            ...L,
            children: c.jsx(T, {
              fontSize: "small",
              ...G
            })
          })
        }) : null
      ]
    });
  });
  var Le = "top", Qe = "bottom", Ze = "right", Ve = "left", Do = "auto", _n = [
    Le,
    Qe,
    Ze,
    Ve
  ], qt = "start", bn = "end", Ps = "clippingParents", Yr = "viewport", Qt = "popper", Is = "reference", tr = _n.reduce(function(e, t) {
    return e.concat([
      t + "-" + qt,
      t + "-" + bn
    ]);
  }, []), Jr = [].concat(_n, [
    Do
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + qt,
      t + "-" + bn
    ]);
  }, []), Fs = "beforeRead", zs = "read", Ts = "afterRead", ks = "beforeMain", Ds = "main", Es = "afterMain", Os = "beforeWrite", Ns = "write", Ls = "afterWrite", Vs = [
    Fs,
    zs,
    Ts,
    ks,
    Ds,
    Es,
    Os,
    Ns,
    Ls
  ];
  function ct(e) {
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
  function Tt(e) {
    var t = Ue(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Ke(e) {
    var t = Ue(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Eo(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ue(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Hs(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
      !Ke(i) || !ct(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
        var l = r[s];
        l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
      }));
    });
  }
  function Bs(e) {
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
        !Ke(r) || !ct(r) || (Object.assign(r.style, l), Object.keys(i).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Ws = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Hs,
    effect: Bs,
    requires: [
      "computeStyles"
    ]
  };
  function at(e) {
    return e.split("-")[0];
  }
  var zt = Math.max, Yn = Math.min, Yt = Math.round;
  function bo() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Xr() {
    return !/^((?!chrome|android).)*safari/i.test(bo());
  }
  function Jt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, i = 1;
    t && Ke(e) && (r = e.offsetWidth > 0 && Yt(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Yt(o.height) / e.offsetHeight || 1);
    var s = Tt(e) ? Ue(e) : window, l = s.visualViewport, a = !Xr() && n, d = (o.left + (a && l ? l.offsetLeft : 0)) / r, u = (o.top + (a && l ? l.offsetTop : 0)) / i, p = o.width / r, g = o.height / i;
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
  function Oo(e) {
    var t = Jt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Kr(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Eo(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function yt(e) {
    return Ue(e).getComputedStyle(e);
  }
  function Gs(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(ct(e)) >= 0;
  }
  function St(e) {
    return ((Tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Zn(e) {
    return ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (Eo(e) ? e.host : null) || St(e);
  }
  function nr(e) {
    return !Ke(e) || yt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Us(e) {
    var t = /firefox/i.test(bo()), n = /Trident/i.test(bo());
    if (n && Ke(e)) {
      var o = yt(e);
      if (o.position === "fixed") return null;
    }
    var r = Zn(e);
    for (Eo(r) && (r = r.host); Ke(r) && [
      "html",
      "body"
    ].indexOf(ct(r)) < 0; ) {
      var i = yt(r);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function Sn(e) {
    for (var t = Ue(e), n = nr(e); n && Gs(n) && yt(n).position === "static"; ) n = nr(n);
    return n && (ct(n) === "html" || ct(n) === "body" && yt(n).position === "static") ? t : n || Us(e) || t;
  }
  function No(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function cn(e, t, n) {
    return zt(e, Yn(t, n));
  }
  function qs(e, t, n) {
    var o = cn(e, t, n);
    return o > n ? n : o;
  }
  function Qr() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Zr(e) {
    return Object.assign({}, Qr(), e);
  }
  function ei(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Ys = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Zr(typeof t != "number" ? t : ei(t, _n));
  };
  function Js(e) {
    var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = at(n.placement), a = No(l), d = [
      Ve,
      Ze
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!i || !s)) {
      var p = Ys(r.padding, n), g = Oo(i), f = a === "y" ? Le : Ve, h = a === "y" ? Qe : Ze, m = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], v = s[a] - n.rects.reference[a], b = Sn(i), C = b ? a === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, S = m / 2 - v / 2, w = p[f], j = C - g[u] - p[h], R = C / 2 - g[u] / 2 + S, A = cn(w, R, j), k = a;
      n.modifiersData[o] = (t = {}, t[k] = A, t.centerOffset = A - R, t);
    }
  }
  function Xs(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Kr(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Ks = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Js,
    effect: Xs,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Xt(e) {
    return e.split("-")[1];
  }
  var Qs = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Zs(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Yt(n * r) / r || 0,
      y: Yt(o * r) / r || 0
    };
  }
  function or(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, p = e.isFixed, g = s.x, f = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = v.x, m = v.y;
    var b = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), S = Ve, w = Le, j = window;
    if (d) {
      var R = Sn(n), A = "clientHeight", k = "clientWidth";
      if (R === Ue(n) && (R = St(n), yt(R).position !== "static" && l === "absolute" && (A = "scrollHeight", k = "scrollWidth")), R = R, r === Le || (r === Ve || r === Ze) && i === bn) {
        w = Qe;
        var z = p && R === j && j.visualViewport ? j.visualViewport.height : R[A];
        m -= z - o.height, m *= a ? 1 : -1;
      }
      if (r === Ve || (r === Le || r === Qe) && i === bn) {
        S = Ze;
        var _ = p && R === j && j.visualViewport ? j.visualViewport.width : R[k];
        f -= _ - o.width, f *= a ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: l
    }, d && Qs), D = u === true ? Zs({
      x: f,
      y: m
    }, Ue(n)) : {
      x: f,
      y: m
    };
    if (f = D.x, m = D.y, a) {
      var P;
      return Object.assign({}, M, (P = {}, P[w] = C ? "0" : "", P[S] = b ? "0" : "", P.transform = (j.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", P));
    }
    return Object.assign({}, M, (t = {}, t[w] = C ? m + "px" : "", t[S] = b ? f + "px" : "", t.transform = "", t));
  }
  function el(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: at(t.placement),
      variation: Xt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, or(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, or(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const tl = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: el,
    data: {}
  };
  var zn = {
    passive: true
  };
  function nl(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? true : r, s = o.resize, l = s === void 0 ? true : s, a = Ue(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, zn);
    }), l && a.addEventListener("resize", n.update, zn), function() {
      i && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, zn);
      }), l && a.removeEventListener("resize", n.update, zn);
    };
  }
  const ol = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: nl,
    data: {}
  };
  var rl = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Hn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return rl[t];
    });
  }
  var il = {
    start: "end",
    end: "start"
  };
  function rr(e) {
    return e.replace(/start|end/g, function(t) {
      return il[t];
    });
  }
  function Lo(e) {
    var t = Ue(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Vo(e) {
    return Jt(St(e)).left + Lo(e).scrollLeft;
  }
  function sl(e, t) {
    var n = Ue(e), o = St(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
    if (r) {
      i = r.width, s = r.height;
      var d = Xr();
      (d || !d && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l + Vo(e),
      y: a
    };
  }
  function ll(e) {
    var t, n = St(e), o = Lo(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = zt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = zt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Vo(e), a = -o.scrollTop;
    return yt(r || n).direction === "rtl" && (l += zt(n.clientWidth, r ? r.clientWidth : 0) - i), {
      width: i,
      height: s,
      x: l,
      y: a
    };
  }
  function Ho(e) {
    var t = yt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function ti(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Ke(e) && Ho(e) ? e : ti(Zn(e));
  }
  function un(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = ti(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ue(o), s = r ? [
      i
    ].concat(i.visualViewport || [], Ho(o) ? o : []) : o, l = t.concat(s);
    return r ? l : l.concat(un(Zn(s)));
  }
  function xo(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function al(e, t) {
    var n = Jt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function ir(e, t, n) {
    return t === Yr ? xo(sl(e, n)) : Tt(t) ? al(t, n) : xo(ll(St(e)));
  }
  function cl(e) {
    var t = un(Zn(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(yt(e).position) >= 0, o = n && Ke(e) ? Sn(e) : e;
    return Tt(o) ? t.filter(function(r) {
      return Tt(r) && Kr(r, o) && ct(r) !== "body";
    }) : [];
  }
  function ul(e, t, n, o) {
    var r = t === "clippingParents" ? cl(e) : [].concat(t), i = [].concat(r, [
      n
    ]), s = i[0], l = i.reduce(function(a, d) {
      var u = ir(e, d, o);
      return a.top = zt(u.top, a.top), a.right = Yn(u.right, a.right), a.bottom = Yn(u.bottom, a.bottom), a.left = zt(u.left, a.left), a;
    }, ir(e, s, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function ni(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? at(o) : null, i = o ? Xt(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case Le:
        a = {
          x: s,
          y: t.y - n.height
        };
        break;
      case Qe:
        a = {
          x: s,
          y: t.y + t.height
        };
        break;
      case Ze:
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
    var d = r ? No(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (i) {
        case qt:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case bn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function xn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? Ps : l, d = n.rootBoundary, u = d === void 0 ? Yr : d, p = n.elementContext, g = p === void 0 ? Qt : p, f = n.altBoundary, h = f === void 0 ? false : f, m = n.padding, v = m === void 0 ? 0 : m, b = Zr(typeof v != "number" ? v : ei(v, _n)), C = g === Qt ? Is : Qt, S = e.rects.popper, w = e.elements[h ? C : g], j = ul(Tt(w) ? w : w.contextElement || St(e.elements.popper), a, u, s), R = Jt(e.elements.reference), A = ni({
      reference: R,
      element: S,
      placement: r
    }), k = xo(Object.assign({}, S, A)), z = g === Qt ? k : R, _ = {
      top: j.top - z.top + b.top,
      bottom: z.bottom - j.bottom + b.bottom,
      left: j.left - z.left + b.left,
      right: z.right - j.right + b.right
    }, M = e.modifiersData.offset;
    if (g === Qt && M) {
      var D = M[r];
      Object.keys(_).forEach(function(P) {
        var N = [
          Ze,
          Qe
        ].indexOf(P) >= 0 ? 1 : -1, O = [
          Le,
          Qe
        ].indexOf(P) >= 0 ? "y" : "x";
        _[P] += D[O] * N;
      });
    }
    return _;
  }
  function dl(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? Jr : a, u = Xt(o), p = u ? l ? tr : tr.filter(function(h) {
      return Xt(h) === u;
    }) : _n, g = p.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = p);
    var f = g.reduce(function(h, m) {
      return h[m] = xn(e, {
        placement: m,
        boundary: r,
        rootBoundary: i,
        padding: s
      })[at(m)], h;
    }, {});
    return Object.keys(f).sort(function(h, m) {
      return f[h] - f[m];
    });
  }
  function pl(e) {
    if (at(e) === Do) return [];
    var t = Hn(e);
    return [
      rr(e),
      t,
      rr(t)
    ];
  }
  function fl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, d = n.padding, u = n.boundary, p = n.rootBoundary, g = n.altBoundary, f = n.flipVariations, h = f === void 0 ? true : f, m = n.allowedAutoPlacements, v = t.options.placement, b = at(v), C = b === v, S = a || (C || !h ? [
        Hn(v)
      ] : pl(v)), w = [
        v
      ].concat(S).reduce(function(ge, ee) {
        return ge.concat(at(ee) === Do ? dl(t, {
          placement: ee,
          boundary: u,
          rootBoundary: p,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ee);
      }, []), j = t.rects.reference, R = t.rects.popper, A = /* @__PURE__ */ new Map(), k = true, z = w[0], _ = 0; _ < w.length; _++) {
        var M = w[_], D = at(M), P = Xt(M) === qt, N = [
          Le,
          Qe
        ].indexOf(D) >= 0, O = N ? "width" : "height", L = xn(t, {
          placement: M,
          boundary: u,
          rootBoundary: p,
          altBoundary: g,
          padding: d
        }), T = N ? P ? Ze : Ve : P ? Qe : Le;
        j[O] > R[O] && (T = Hn(T));
        var G = Hn(T), Y = [];
        if (i && Y.push(L[D] <= 0), l && Y.push(L[T] <= 0, L[G] <= 0), Y.every(function(ge) {
          return ge;
        })) {
          z = M, k = false;
          break;
        }
        A.set(M, Y);
      }
      if (k) for (var ie = h ? 3 : 1, ae = function(ee) {
        var F = w.find(function(se) {
          var te = A.get(se);
          if (te) return te.slice(0, ee).every(function($e) {
            return $e;
          });
        });
        if (F) return z = F, "break";
      }, Se = ie; Se > 0; Se--) {
        var Ce = ae(Se);
        if (Ce === "break") break;
      }
      t.placement !== z && (t.modifiersData[o]._skip = true, t.placement = z, t.reset = true);
    }
  }
  const gl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: fl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function sr(e, t, n) {
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
  function lr(e) {
    return [
      Le,
      Ze,
      Qe,
      Ve
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function hl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = xn(t, {
      elementContext: "reference"
    }), l = xn(t, {
      altBoundary: true
    }), a = sr(s, o), d = sr(l, r, i), u = lr(a), p = lr(d);
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
  const ml = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: hl
  };
  function yl(e, t, n) {
    var o = at(e), r = [
      Ve,
      Le
    ].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * r, [
      Ve,
      Ze
    ].indexOf(o) >= 0 ? {
      x: l,
      y: s
    } : {
      x: s,
      y: l
    };
  }
  function vl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [
      0,
      0
    ] : r, s = Jr.reduce(function(u, p) {
      return u[p] = yl(p, t.rects, i), u;
    }, {}), l = s[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const bl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: vl
  };
  function xl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = ni({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const wl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: xl,
    data: {}
  };
  function Cl(e) {
    return e === "x" ? "y" : "x";
  }
  function _l(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, p = n.padding, g = n.tether, f = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = xn(t, {
      boundary: a,
      rootBoundary: d,
      padding: p,
      altBoundary: u
    }), b = at(t.placement), C = Xt(t.placement), S = !C, w = No(b), j = Cl(w), R = t.modifiersData.popperOffsets, A = t.rects.reference, k = t.rects.popper, z = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, _ = typeof z == "number" ? {
      mainAxis: z,
      altAxis: z
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, z), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
      x: 0,
      y: 0
    };
    if (R) {
      if (i) {
        var P, N = w === "y" ? Le : Ve, O = w === "y" ? Qe : Ze, L = w === "y" ? "height" : "width", T = R[w], G = T + v[N], Y = T - v[O], ie = f ? -k[L] / 2 : 0, ae = C === qt ? A[L] : k[L], Se = C === qt ? -k[L] : -A[L], Ce = t.elements.arrow, ge = f && Ce ? Oo(Ce) : {
          width: 0,
          height: 0
        }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Qr(), F = ee[N], se = ee[O], te = cn(0, A[L], ge[L]), $e = S ? A[L] / 2 - ie - te - F - _.mainAxis : ae - te - F - _.mainAxis, Ee = S ? -A[L] / 2 + ie + te + se + _.mainAxis : Se + te + se + _.mainAxis, je = t.elements.arrow && Sn(t.elements.arrow), ce = je ? w === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, xe = (P = M == null ? void 0 : M[w]) != null ? P : 0, ue = T + $e - xe - ce, He = T + Ee - xe, jt = cn(f ? Yn(G, ue) : G, T, f ? zt(Y, He) : Y);
        R[w] = jt, D[w] = jt - T;
      }
      if (l) {
        var rt, ut = w === "x" ? Le : Ve, dt = w === "x" ? Qe : Ze, Be = R[j], pt = j === "y" ? "height" : "width", Rt = Be + v[ut], Mt = Be - v[dt], it = [
          Le,
          Ve
        ].indexOf(b) !== -1, $t = (rt = M == null ? void 0 : M[j]) != null ? rt : 0, et = it ? Rt : Be - A[pt] - k[pt] - $t + _.altAxis, st = it ? Be + A[pt] + k[pt] - $t - _.altAxis : Mt, At = f && it ? qs(et, Be, st) : cn(f ? et : Rt, Be, f ? st : Mt);
        R[j] = At, D[j] = At - Be;
      }
      t.modifiersData[o] = D;
    }
  }
  const Sl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: _l,
    requiresIfExists: [
      "offset"
    ]
  };
  function jl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Rl(e) {
    return e === Ue(e) || !Ke(e) ? Lo(e) : jl(e);
  }
  function Ml(e) {
    var t = e.getBoundingClientRect(), n = Yt(t.width) / e.offsetWidth || 1, o = Yt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function $l(e, t, n) {
    n === void 0 && (n = false);
    var o = Ke(t), r = Ke(t) && Ml(t), i = St(t), s = Jt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((ct(t) !== "body" || Ho(i)) && (l = Rl(t)), Ke(t) ? (a = Jt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Vo(i))), {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function Al(e) {
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
  function Pl(e) {
    var t = Al(e);
    return Vs.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Il(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Fl(e) {
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
  var ar = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function cr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function zl(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? ar : r;
    return function(l, a, d) {
      d === void 0 && (d = i);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ar, i),
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
            reference: Tt(l) ? un(l) : l.contextElement ? un(l.contextElement) : [],
            popper: un(a)
          };
          var S = Pl(Fl([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = S.filter(function(w) {
            return w.enabled;
          }), h(), f.update();
        },
        forceUpdate: function() {
          if (!g) {
            var b = u.elements, C = b.reference, S = b.popper;
            if (cr(C, S)) {
              u.rects = {
                reference: $l(C, Sn(S), u.options.strategy === "fixed"),
                popper: Oo(S)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(_) {
                return u.modifiersData[_.name] = Object.assign({}, _.data);
              });
              for (var w = 0; w < u.orderedModifiers.length; w++) {
                if (u.reset === true) {
                  u.reset = false, w = -1;
                  continue;
                }
                var j = u.orderedModifiers[w], R = j.fn, A = j.options, k = A === void 0 ? {} : A, z = j.name;
                typeof R == "function" && (u = R({
                  state: u,
                  options: k,
                  name: z,
                  instance: f
                }) || u);
              }
            }
          }
        },
        update: Il(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!cr(l, a)) return f;
      f.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        u.orderedModifiers.forEach(function(v) {
          var b = v.name, C = v.options, S = C === void 0 ? {} : C, w = v.effect;
          if (typeof w == "function") {
            var j = w({
              state: u,
              name: b,
              instance: f,
              options: S
            }), R = function() {
            };
            p.push(j || R);
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
  var Tl = [
    ol,
    wl,
    tl,
    Ws,
    bl,
    gl,
    Sl,
    Ks,
    ml
  ], kl = zl({
    defaultModifiers: Tl
  });
  function Dl(e) {
    return me("MuiPopper", e);
  }
  ye("MuiPopper", [
    "root"
  ]);
  function El(e, t) {
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
  function wo(e) {
    return typeof e == "function" ? e() : e;
  }
  function Ol(e) {
    return e.nodeType !== void 0;
  }
  const Nl = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Dl, t);
  }, Ll = {}, Vl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: i, disablePortal: s, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: p, slotProps: g = {}, slots: f = {}, TransitionProps: h, ownerState: m, ...v } = t, b = y.useRef(null), C = Wt(b, n), S = y.useRef(null), w = Wt(S, p), j = y.useRef(w);
    Yo(() => {
      j.current = w;
    }, [
      w
    ]), y.useImperativeHandle(p, () => S.current, []);
    const R = El(d, i), [A, k] = y.useState(R), [z, _] = y.useState(wo(o));
    y.useEffect(() => {
      S.current && S.current.forceUpdate();
    }), y.useEffect(() => {
      o && _(wo(o));
    }, [
      o
    ]), Yo(() => {
      if (!z || !a) return;
      const O = (G) => {
        k(G.placement);
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
          fn: ({ state: G }) => {
            O(G);
          }
        }
      ];
      l != null && (L = L.concat(l)), u && u.modifiers != null && (L = L.concat(u.modifiers));
      const T = kl(z, b.current, {
        placement: R,
        ...u,
        modifiers: L
      });
      return j.current(T), () => {
        T.destroy(), j.current(null);
      };
    }, [
      z,
      s,
      l,
      a,
      u,
      R
    ]);
    const M = {
      placement: A
    };
    h !== null && (M.TransitionProps = h);
    const D = Nl(t), P = f.root ?? "div", N = Fi({
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
    return c.jsx(P, {
      ...N,
      children: typeof r == "function" ? r(M) : r
    });
  }), Hl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: p = "bottom", popperOptions: g = Ll, popperRef: f, style: h, transition: m = false, slotProps: v = {}, slots: b = {}, ...C } = t, [S, w] = y.useState(true), j = () => {
      w(false);
    }, R = () => {
      w(true);
    };
    if (!a && !u && (!m || S)) return null;
    let A;
    if (i) A = i;
    else if (o) {
      const _ = wo(o);
      A = _ && Ol(_) ? an(_).body : an(null).body;
    }
    const k = !u && a && (!m || S) ? "none" : void 0, z = m ? {
      in: u,
      onEnter: j,
      onExited: R
    } : void 0;
    return c.jsx(Ii, {
      disablePortal: l,
      container: A,
      children: c.jsx(Vl, {
        anchorEl: o,
        direction: s,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !S : u,
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
          display: k,
          ...h
        },
        TransitionProps: z,
        children: r
      })
    });
  }), Bl = U(Hl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), oi = y.forwardRef(function(t, n) {
    const o = ko(), r = ve({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: s, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: p, modifiers: g, open: f, placement: h, popperOptions: m, popperRef: v, transition: b, slots: C, slotProps: S, ...w } = r, j = (C == null ? void 0 : C.root) ?? (l == null ? void 0 : l.Root), R = {
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
    return c.jsx(Bl, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: j
      },
      slotProps: S ?? a,
      ...R,
      ref: n
    });
  }), Wl = le(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Gl(e) {
    return me("MuiChip", e);
  }
  const J = ye("MuiChip", [
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
  ]), Ul = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: i, onDelete: s, clickable: l, variant: a } = e, d = {
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
    return be(d, Gl, t);
  }, ql = U("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: i, onDelete: s, size: l, variant: a } = n;
      return [
        {
          [`& .${J.avatar}`]: t.avatar
        },
        {
          [`& .${J.avatar}`]: t[`avatar${B(l)}`]
        },
        {
          [`& .${J.avatar}`]: t[`avatarColor${B(o)}`]
        },
        {
          [`& .${J.icon}`]: t.icon
        },
        {
          [`& .${J.icon}`]: t[`icon${B(l)}`]
        },
        {
          [`& .${J.icon}`]: t[`iconColor${B(r)}`]
        },
        {
          [`& .${J.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${J.deleteIcon}`]: t[`deleteIcon${B(l)}`]
        },
        {
          [`& .${J.deleteIcon}`]: t[`deleteIconColor${B(o)}`]
        },
        {
          [`& .${J.deleteIcon}`]: t[`deleteIcon${B(a)}Color${B(o)}`]
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
  })(de(({ theme: e }) => {
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
      [`&.${J.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${J.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${J.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${J.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${J.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${J.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${J.deleteIcon}`]: {
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
            [`& .${J.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${J.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(It([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${J.deleteIcon}`]: {
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
            [`& .${J.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${J.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${J.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(It([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${J.focusVisible}`]: {
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
            [`&.${J.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(It([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${J.focusVisible}`]: {
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
            [`&.${J.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${J.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${J.avatar}`]: {
              marginLeft: 4
            },
            [`& .${J.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${J.icon}`]: {
              marginLeft: 4
            },
            [`& .${J.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${J.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${J.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(It()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Te(e.palette[n].main, 0.7)}`,
            [`&.${J.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Te(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${J.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Te(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${J.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Te(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Yl = U("span", {
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
  function ur(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const Bn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: i, clickable: s, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: p, label: g, onClick: f, onDelete: h, onKeyDown: m, onKeyUp: v, size: b = "medium", variant: C = "filled", tabIndex: S, skipFocusWhenDisabled: w = false, ...j } = o, R = y.useRef(null), A = Wt(R, n), k = (Y) => {
      Y.stopPropagation(), h && h(Y);
    }, z = (Y) => {
      Y.currentTarget === Y.target && ur(Y) && Y.preventDefault(), m && m(Y);
    }, _ = (Y) => {
      Y.currentTarget === Y.target && h && ur(Y) && h(Y), v && v(Y);
    }, M = s !== false && f ? true : s, D = M || h ? Un : a || "div", P = {
      ...o,
      component: D,
      disabled: u,
      size: b,
      color: l,
      iconColor: y.isValidElement(p) && p.props.color || l,
      onDelete: !!h,
      clickable: M,
      variant: C
    }, N = Ul(P), O = D === Un ? {
      component: a || "div",
      focusVisibleClassName: N.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let L = null;
    h && (L = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: oe(d.props.className, N.deleteIcon),
      onClick: k
    }) : c.jsx(Wl, {
      className: oe(N.deleteIcon),
      onClick: k
    }));
    let T = null;
    r && y.isValidElement(r) && (T = y.cloneElement(r, {
      className: oe(N.avatar, r.props.className)
    }));
    let G = null;
    return p && y.isValidElement(p) && (G = y.cloneElement(p, {
      className: oe(N.icon, p.props.className)
    })), c.jsxs(ql, {
      as: D,
      className: oe(N.root, i),
      disabled: M && u ? true : void 0,
      onClick: f,
      onKeyDown: z,
      onKeyUp: _,
      ref: A,
      tabIndex: w && u ? -1 : S,
      ownerState: P,
      ...O,
      ...j,
      children: [
        T || G,
        c.jsx(Yl, {
          className: oe(N.label),
          ownerState: P,
          children: g
        }),
        L
      ]
    });
  });
  function Jl(e) {
    return me("MuiCard", e);
  }
  ye("MuiCard", [
    "root"
  ]);
  const Xl = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Jl, t);
  }, Kl = U(ot, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Ql = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: i = false, ...s } = o, l = {
      ...o,
      raised: i
    }, a = Xl(l);
    return c.jsx(Kl, {
      className: oe(a.root, r),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...s
    });
  });
  function dr(e) {
    return e.substring(2).toLowerCase();
  }
  function Zl(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function ea(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: i = "onTouchEnd" } = e, s = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = Wt(Br(t), l), p = gn((h) => {
      const m = d.current;
      d.current = false;
      const v = an(l.current);
      if (!a.current || !l.current || "clientX" in h && Zl(h, v)) return;
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
        const h = dr(i), m = an(l.current), v = () => {
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
        const h = dr(o), m = an(l.current);
        return m.addEventListener(h, p), () => {
          m.removeEventListener(h, p);
        };
      }
    }, [
      p,
      o
    ]), y.cloneElement(t, f);
  }
  function ta(e) {
    return me("MuiDialogActions", e);
  }
  ye("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const na = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return be({
      root: [
        "root",
        !n && "spacing"
      ]
    }, ta, t);
  }, oa = U("div", {
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
  }), ra = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: i = false, ...s } = o, l = {
      ...o,
      disableSpacing: i
    }, a = na(l);
    return c.jsx(oa, {
      className: oe(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  });
  function ia(e) {
    return me("MuiInputAdornment", e);
  }
  const pr = ye("MuiInputAdornment", [
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
  var fr;
  const sa = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${B(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, la = (e) => {
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
    return be(l, ia, t);
  }, aa = U("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: sa
  })(de(({ theme: e }) => ({
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
          [`&.${pr.positionStart}&:not(.${pr.hiddenLabel})`]: {
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
  }))), Co = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: i, component: s = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...p } = o, g = zi() || {};
    let f = u;
    u && g.variant, g && !f && (f = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: f
    }, m = la(h);
    return c.jsx(Ti.Provider, {
      value: null,
      children: c.jsx(aa, {
        as: s,
        ownerState: h,
        className: oe(m.root, i),
        ref: n,
        ...p,
        children: typeof r == "string" && !a ? c.jsx(I, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(y.Fragment, {
          children: [
            d === "start" ? fr || (fr = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), ca = le(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), ua = le(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function da(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: i } = e, s = Vt();
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
    const l = gn((b, C) => {
      o == null ? void 0 : o(b, C);
    }), a = gn((b) => {
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
      const S = b.onBlur;
      S == null ? void 0 : S(C), p();
    }, f = (b) => (C) => {
      const S = b.onFocus;
      S == null ? void 0 : S(C), u();
    }, h = (b) => (C) => {
      const S = b.onMouseEnter;
      S == null ? void 0 : S(C), u();
    }, m = (b) => (C) => {
      const S = b.onMouseLeave;
      S == null ? void 0 : S(C), p();
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
          ...Jo(e),
          ...Jo(b)
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
  function pa(e) {
    return me("MuiSnackbarContent", e);
  }
  ye("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const fa = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, pa, t);
  }, ga = U(ot, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(de(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = ki(e.palette.background.default, t);
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
  })), ha = U("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), ma = U("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), ya = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: i, message: s, role: l = "alert", ...a } = o, d = o, u = fa(d);
    return c.jsxs(ga, {
      role: l,
      square: true,
      elevation: 6,
      className: oe(u.root, i),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(ha, {
          className: u.message,
          ownerState: d,
          children: s
        }),
        r ? c.jsx(ma, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function va(e) {
    return me("MuiSnackbar", e);
  }
  ye("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const ba = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${B(n.vertical)}${B(n.horizontal)}`
      ]
    };
    return be(o, va, t);
  }, xa = U("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${B(n.anchorOrigin.vertical)}${B(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(de(({ theme: e }) => ({
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
  }))), wa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiSnackbar"
    }), r = Cn(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: p, ClickAwayListenerProps: g, ContentProps: f, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: b, onFocus: C, onMouseEnter: S, onMouseLeave: w, open: j, resumeHideDuration: R, slots: A = {}, slotProps: k = {}, TransitionComponent: z, transitionDuration: _ = i, TransitionProps: { onEnter: M, onExited: D, ...P } = {}, ...N } = o, O = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: z,
      transitionDuration: _
    }, L = ba(O), { getRootProps: T, onClickAway: G } = da({
      ...O
    }), [Y, ie] = y.useState(true), ae = (xe) => {
      ie(true), D && D(xe);
    }, Se = (xe, ue) => {
      ie(false), M && M(xe, ue);
    }, Ce = {
      slots: {
        transition: z,
        ...A
      },
      slotProps: {
        content: f,
        clickAwayListener: g,
        transition: P,
        ...k
      }
    }, [ge, ee] = ne("root", {
      ref: n,
      className: [
        L.root,
        p
      ],
      elementType: xa,
      getSlotProps: T,
      externalForwardedProps: {
        ...Ce,
        ...N
      },
      ownerState: O
    }), [F, { ownerState: se, ...te }] = ne("clickAwayListener", {
      elementType: ea,
      externalForwardedProps: Ce,
      getSlotProps: (xe) => ({
        onClickAway: (...ue) => {
          var _a2;
          (_a2 = xe.onClickAway) == null ? void 0 : _a2.call(xe, ...ue), G(...ue);
        }
      }),
      ownerState: O
    }), [$e, Ee] = ne("content", {
      elementType: ya,
      shouldForwardComponentProp: true,
      externalForwardedProps: Ce,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: O
    }), [je, ce] = ne("transition", {
      elementType: Wr,
      externalForwardedProps: Ce,
      getSlotProps: (xe) => ({
        onEnter: (...ue) => {
          var _a2;
          (_a2 = xe.onEnter) == null ? void 0 : _a2.call(xe, ...ue), Se(...ue);
        },
        onExited: (...ue) => {
          var _a2;
          (_a2 = xe.onExited) == null ? void 0 : _a2.call(xe, ...ue), ae(...ue);
        }
      }),
      additionalProps: {
        appear: true,
        in: j,
        timeout: _,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: O
    });
    return !j && Y ? null : c.jsx(F, {
      ...te,
      ...A.clickAwayListener && {
        ownerState: se
      },
      children: c.jsx(ge, {
        ...ee,
        children: c.jsx(je, {
          ...ce,
          children: u || c.jsx($e, {
            ...Ee
          })
        })
      })
    });
  });
  function Ca(e) {
    return me("MuiTooltip", e);
  }
  const he = ye("MuiTooltip", [
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
  function _a(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Sa = (e) => {
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
    return be(s, Ca, t);
  }, ja = U(oi, {
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
  })(de(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${he.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${he.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${he.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${he.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${he.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${he.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${he.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${he.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Ra = U("div", {
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
  })(de(({ theme: e }) => ({
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
    [`.${he.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${he.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${he.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${he.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${_a(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${he.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${he.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${he.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${he.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${he.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${he.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${he.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${he.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${he.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${he.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Ma = U("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(de(({ theme: e }) => ({
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
  let Tn = false;
  const gr = new Di();
  let Zt = {
    x: 0,
    y: 0
  };
  function kn(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Ne = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: i, classes: s, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: p = false, disableInteractive: g = false, disableTouchListener: f = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: b = false, id: C, leaveDelay: S = 0, leaveTouchDelay: w = 1500, onClose: j, onOpen: R, open: A, placement: k = "bottom", PopperComponent: z, PopperProps: _ = {}, slotProps: M = {}, slots: D = {}, title: P, TransitionComponent: N, TransitionProps: O, ...L } = o, T = y.isValidElement(i) ? i : c.jsx("span", {
      children: i
    }), G = Cn(), Y = ko(), [ie, ae] = y.useState(), [Se, Ce] = y.useState(null), ge = y.useRef(false), ee = g || b, F = Vt(), se = Vt(), te = Vt(), $e = Vt(), [Ee, je] = Hr({
      controlled: A,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let ce = Ee;
    const xe = yo(C), ue = y.useRef(), He = gn(() => {
      ue.current !== void 0 && (document.body.style.WebkitUserSelect = ue.current, ue.current = void 0), $e.clear();
    });
    y.useEffect(() => He, [
      He
    ]);
    const jt = (q) => {
      gr.clear(), Tn = true, je(true), R && !ce && R(q);
    }, rt = gn((q) => {
      gr.start(800 + S, () => {
        Tn = false;
      }), je(false), j && ce && j(q), F.start(G.transitions.duration.shortest, () => {
        ge.current = false;
      });
    }), ut = (q) => {
      ge.current && q.type !== "touchstart" || (ie && ie.removeAttribute("title"), se.clear(), te.clear(), h || Tn && m ? se.start(Tn ? m : h, () => {
        jt(q);
      }) : jt(q));
    }, dt = (q) => {
      se.clear(), te.start(S, () => {
        rt(q);
      });
    }, [, Be] = y.useState(false), pt = (q) => {
      Xo(q.target) || (Be(false), dt(q));
    }, Rt = (q) => {
      ie || ae(q.currentTarget), Xo(q.target) && (Be(true), ut(q));
    }, Mt = (q) => {
      ge.current = true;
      const xt = T.props;
      xt.onTouchStart && xt.onTouchStart(q);
    }, it = (q) => {
      Mt(q), te.clear(), F.clear(), He(), ue.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", $e.start(v, () => {
        document.body.style.WebkitUserSelect = ue.current, ut(q);
      });
    }, $t = (q) => {
      T.props.onTouchEnd && T.props.onTouchEnd(q), He(), te.start(w, () => {
        rt(q);
      });
    };
    y.useEffect(() => {
      if (!ce) return;
      function q(xt) {
        xt.key === "Escape" && rt(xt);
      }
      return document.addEventListener("keydown", q), () => {
        document.removeEventListener("keydown", q);
      };
    }, [
      rt,
      ce
    ]);
    const et = Wt(Br(T), ae, n);
    !P && P !== 0 && (ce = false);
    const st = y.useRef(), At = (q) => {
      const xt = T.props;
      xt.onMouseMove && xt.onMouseMove(q), Zt = {
        x: q.clientX,
        y: q.clientY
      }, st.current && st.current.update();
    }, lt = {}, Dt = typeof P == "string";
    d ? (lt.title = !ce && Dt && !p ? P : null, lt["aria-describedby"] = ce ? xe : null) : (lt["aria-label"] = Dt ? P : null, lt["aria-labelledby"] = ce && !Dt ? xe : null);
    const We = {
      ...lt,
      ...L,
      ...T.props,
      className: oe(L.className, T.props.className),
      onTouchStart: Mt,
      ref: et,
      ...b ? {
        onMouseMove: At
      } : {}
    }, Et = {};
    f || (We.onTouchStart = it, We.onTouchEnd = $t), p || (We.onMouseOver = kn(ut, We.onMouseOver), We.onMouseLeave = kn(dt, We.onMouseLeave), ee || (Et.onMouseOver = ut, Et.onMouseLeave = dt)), u || (We.onFocus = kn(Rt, We.onFocus), We.onBlur = kn(pt, We.onBlur), ee || (Et.onFocus = Rt, Et.onBlur = pt));
    const Pe = {
      ...o,
      isRtl: Y,
      arrow: r,
      disableInteractive: ee,
      placement: k,
      PopperComponentProp: z,
      touch: ge.current
    }, vt = typeof M.popper == "function" ? M.popper(Pe) : M.popper, Rn = y.useMemo(() => {
      var _a2, _b;
      let q = [
        {
          name: "arrow",
          enabled: !!Se,
          options: {
            element: Se,
            padding: 4
          }
        }
      ];
      return ((_a2 = _.popperOptions) == null ? void 0 : _a2.modifiers) && (q = q.concat(_.popperOptions.modifiers)), ((_b = vt == null ? void 0 : vt.popperOptions) == null ? void 0 : _b.modifiers) && (q = q.concat(vt.popperOptions.modifiers)), {
        ..._.popperOptions,
        ...vt == null ? void 0 : vt.popperOptions,
        modifiers: q
      };
    }, [
      Se,
      _.popperOptions,
      vt == null ? void 0 : vt.popperOptions
    ]), $ = Sa(Pe), E = typeof M.transition == "function" ? M.transition(Pe) : M.transition, X = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? N,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...D
      },
      slotProps: {
        arrow: M.arrow ?? a.arrow,
        popper: {
          ..._,
          ...vt ?? a.popper
        },
        tooltip: M.tooltip ?? a.tooltip,
        transition: {
          ...O,
          ...E ?? a.transition
        }
      }
    }, [Re, Ie] = ne("popper", {
      elementType: ja,
      externalForwardedProps: X,
      ownerState: Pe,
      className: oe($.popper, _ == null ? void 0 : _.className)
    }), [Ye, Kt] = ne("transition", {
      elementType: Wr,
      externalForwardedProps: X,
      ownerState: Pe
    }), [bt, Mn] = ne("tooltip", {
      elementType: Ra,
      className: $.tooltip,
      externalForwardedProps: X,
      ownerState: Pe
    }), [Mi, $i] = ne("arrow", {
      elementType: Ma,
      className: $.arrow,
      externalForwardedProps: X,
      ownerState: Pe,
      ref: Ce
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(T, We),
        c.jsx(Re, {
          as: z ?? oi,
          placement: k,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: Zt.y,
              left: Zt.x,
              right: Zt.x,
              bottom: Zt.y,
              width: 0,
              height: 0
            })
          } : ie,
          popperRef: st,
          open: ie ? ce : false,
          id: xe,
          transition: true,
          ...Et,
          ...Ie,
          popperOptions: Rn,
          children: ({ TransitionProps: q }) => c.jsx(Ye, {
            timeout: G.transitions.duration.shorter,
            ...q,
            ...Kt,
            children: c.jsxs(bt, {
              ...Mn,
              children: [
                P,
                r ? c.jsx(Mi, {
                  ...$i
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), ri = y.createContext();
  function $a(e) {
    return me("MuiTable", e);
  }
  ye("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const Aa = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return be({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, $a, t);
  }, Pa = U("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(de(({ theme: e }) => ({
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
  }))), hr = "table", Ia = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTable"
    }), { className: r, component: i = hr, padding: s = "normal", size: l = "medium", stickyHeader: a = false, ...d } = o, u = {
      ...o,
      component: i,
      padding: s,
      size: l,
      stickyHeader: a
    }, p = Aa(u), g = y.useMemo(() => ({
      padding: s,
      size: l,
      stickyHeader: a
    }), [
      s,
      l,
      a
    ]);
    return c.jsx(ri.Provider, {
      value: g,
      children: c.jsx(Pa, {
        as: i,
        role: i === hr ? null : "table",
        ref: n,
        className: oe(p.root, r),
        ownerState: u,
        ...d
      })
    });
  }), eo = y.createContext();
  function Fa(e) {
    return me("MuiTableBody", e);
  }
  ye("MuiTableBody", [
    "root"
  ]);
  const za = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Fa, t);
  }, Ta = U("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), ka = {
    variant: "body"
  }, mr = "tbody", Da = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: i = mr, ...s } = o, l = {
      ...o,
      component: i
    }, a = za(l);
    return c.jsx(eo.Provider, {
      value: ka,
      children: c.jsx(Ta, {
        className: oe(a.root, r),
        as: i,
        ref: n,
        role: i === mr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Ea(e) {
    return me("MuiTableCell", e);
  }
  const Oa = ye("MuiTableCell", [
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
  ]), Na = (e) => {
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
    return be(l, Ea, t);
  }, La = U("td", {
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
  })(de(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? mo(Te(e.palette.divider, 1), 0.88) : ho(Te(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Oa.paddingCheckbox}`]: {
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
    const o = ve({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: i, component: s, padding: l, scope: a, size: d, sortDirection: u, variant: p, ...g } = o, f = y.useContext(ri), h = y.useContext(eo), m = h && h.variant === "head";
    let v;
    s ? v = s : v = m ? "th" : "td";
    let b = a;
    v === "td" ? b = void 0 : !b && m && (b = "col");
    const C = p || h && h.variant, S = {
      ...o,
      align: r,
      component: v,
      padding: l || (f && f.padding ? f.padding : "normal"),
      size: d || (f && f.size ? f.size : "medium"),
      sortDirection: u,
      stickyHeader: C === "head" && f && f.stickyHeader,
      variant: C
    }, w = Na(S);
    let j = null;
    return u && (j = u === "asc" ? "ascending" : "descending"), c.jsx(La, {
      as: v,
      ref: n,
      className: oe(w.root, i),
      "aria-sort": j,
      scope: b,
      ownerState: S,
      ...g
    });
  });
  function Va(e) {
    return me("MuiTableContainer", e);
  }
  ye("MuiTableContainer", [
    "root"
  ]);
  const Ha = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Va, t);
  }, Ba = U("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Wa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: i = "div", ...s } = o, l = {
      ...o,
      component: i
    }, a = Ha(l);
    return c.jsx(Ba, {
      ref: n,
      as: i,
      className: oe(a.root, r),
      ownerState: l,
      ...s
    });
  });
  function Ga(e) {
    return me("MuiTableHead", e);
  }
  ye("MuiTableHead", [
    "root"
  ]);
  const Ua = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Ga, t);
  }, qa = U("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Ya = {
    variant: "head"
  }, yr = "thead", Ja = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: i = yr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Ua(l);
    return c.jsx(eo.Provider, {
      value: Ya,
      children: c.jsx(qa, {
        as: i,
        className: oe(a.root, r),
        ref: n,
        role: i === yr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Xa(e) {
    return me("MuiToolbar", e);
  }
  ye("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Ka = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return be({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Xa, t);
  }, Qa = U("div", {
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
  })(de(({ theme: e }) => ({
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
  }))), ii = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: i = "div", disableGutters: s = false, variant: l = "regular", ...a } = o, d = {
      ...o,
      component: i,
      disableGutters: s,
      variant: l
    }, u = Ka(d);
    return c.jsx(Qa, {
      as: i,
      className: oe(u.root, r),
      ref: n,
      ownerState: d,
      ...a
    });
  }), Za = le(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), ec = le(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), tc = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: i = false, getItemAriaLabel: s, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: p, showLastButton: g, slots: f = {}, slotProps: h = {}, ...m } = t, v = ko(), b = (ae) => {
      a(ae, 0);
    }, C = (ae) => {
      a(ae, d - 1);
    }, S = (ae) => {
      a(ae, d + 1);
    }, w = (ae) => {
      a(ae, Math.max(0, Math.ceil(r / u) - 1));
    }, j = f.firstButton ?? we, R = f.lastButton ?? we, A = f.nextButton ?? we, k = f.previousButton ?? we, z = f.firstButtonIcon ?? ca, _ = f.lastButtonIcon ?? ua, M = f.nextButtonIcon ?? ec, D = f.previousButtonIcon ?? Za, P = v ? R : j, N = v ? A : k, O = v ? k : A, L = v ? j : R, T = v ? h.lastButton : h.firstButton, G = v ? h.nextButton : h.previousButton, Y = v ? h.previousButton : h.nextButton, ie = v ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        p && c.jsx(P, {
          onClick: b,
          disabled: i || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...T,
          children: v ? c.jsx(_, {
            ...h.lastButtonIcon
          }) : c.jsx(z, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(N, {
          onClick: C,
          disabled: i || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...G ?? o,
          children: v ? c.jsx(M, {
            ...h.nextButtonIcon
          }) : c.jsx(D, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(O, {
          onClick: S,
          disabled: i || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": s("next", d),
          title: s("next", d),
          ...Y ?? l,
          children: v ? c.jsx(D, {
            ...h.previousButtonIcon
          }) : c.jsx(M, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(L, {
          onClick: w,
          disabled: i || d >= Math.ceil(r / u) - 1,
          "aria-label": s("last", d),
          title: s("last", d),
          ...ie,
          children: v ? c.jsx(z, {
            ...h.firstButtonIcon
          }) : c.jsx(_, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function nc(e) {
    return me("MuiTablePagination", e);
  }
  const dn = ye("MuiTablePagination", [
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
  var vr;
  const oc = U(tt, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(de(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), rc = U(ii, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${dn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(de(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${dn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), ic = U("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), sc = U("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(de(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), lc = U(Gt, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${dn.selectIcon}`]: t.selectIcon,
      [`& .${dn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${dn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), ac = U(_e, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), cc = U("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(de(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function uc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function dc(e) {
    return `Go to ${e} page`;
  }
  const pc = (e) => {
    const { classes: t } = e;
    return be({
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
    }, nc, t);
  }, fc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = tc, backIconButtonProps: i, colSpan: s, component: l = tt, count: a, disabled: d = false, getItemAriaLabel: u = dc, labelDisplayedRows: p = uc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: f, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: b, rowsPerPageOptions: C = [
      10,
      25,
      50,
      100
    ], SelectProps: S = {}, showFirstButton: w = false, showLastButton: j = false, slotProps: R = {}, slots: A = {}, ...k } = o, z = o, _ = pc(z), M = (R == null ? void 0 : R.select) ?? S, D = M.native ? "option" : ac;
    let P;
    (l === tt || l === "td") && (P = s || 1e3);
    const N = yo(M.id), O = yo(M.labelId), L = () => a === -1 ? (v + 1) * b : b === -1 ? a : Math.min(a, (v + 1) * b), T = {
      slots: A,
      slotProps: R
    }, [G, Y] = ne("root", {
      ref: n,
      className: _.root,
      elementType: oc,
      externalForwardedProps: {
        ...T,
        component: l,
        ...k
      },
      ownerState: z,
      additionalProps: {
        colSpan: P
      }
    }), [ie, ae] = ne("toolbar", {
      className: _.toolbar,
      elementType: rc,
      externalForwardedProps: T,
      ownerState: z
    }), [Se, Ce] = ne("spacer", {
      className: _.spacer,
      elementType: ic,
      externalForwardedProps: T,
      ownerState: z
    }), [ge, ee] = ne("selectLabel", {
      className: _.selectLabel,
      elementType: sc,
      externalForwardedProps: T,
      ownerState: z,
      additionalProps: {
        id: O
      }
    }), [F, se] = ne("select", {
      className: _.select,
      elementType: lc,
      externalForwardedProps: T,
      ownerState: z
    }), [te, $e] = ne("menuItem", {
      className: _.menuItem,
      elementType: D,
      externalForwardedProps: T,
      ownerState: z
    }), [Ee, je] = ne("displayedRows", {
      className: _.displayedRows,
      elementType: cc,
      externalForwardedProps: T,
      ownerState: z
    });
    return c.jsx(G, {
      ...Y,
      children: c.jsxs(ie, {
        ...ae,
        children: [
          c.jsx(Se, {
            ...Ce
          }),
          C.length > 1 && c.jsx(ge, {
            ...ee,
            children: g
          }),
          C.length > 1 && c.jsx(F, {
            variant: "standard",
            ...!M.variant && {
              input: vr || (vr = c.jsx(Ei, {}))
            },
            value: b,
            onChange: m,
            id: N,
            labelId: O,
            ...M,
            classes: {
              ...M.classes,
              root: oe(_.input, _.selectRoot, (M.classes || {}).root),
              select: oe(_.select, (M.classes || {}).select),
              icon: oe(_.selectIcon, (M.classes || {}).icon)
            },
            disabled: d,
            ...se,
            children: C.map((ce) => y.createElement(te, {
              ...$e,
              key: ce.label ? ce.label : ce,
              value: ce.value ? ce.value : ce
            }, ce.label ? ce.label : ce))
          }),
          c.jsx(Ee, {
            ...je,
            children: p({
              from: a === 0 ? 0 : v * b + 1,
              to: L(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          c.jsx(r, {
            className: _.actions,
            backIconButtonProps: i,
            count: a,
            nextIconButtonProps: f,
            onPageChange: h,
            page: v,
            rowsPerPage: b,
            showFirstButton: w,
            showLastButton: j,
            slotProps: R.actions,
            slots: A.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function gc(e) {
    return me("MuiTableRow", e);
  }
  const br = ye("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), hc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: i } = e;
    return be({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        i && "footer"
      ]
    }, gc, t);
  }, mc = U("tr", {
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
  })(de(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${br.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${br.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Te(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Te(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), xr = "tr", Ot = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: i = xr, hover: s = false, selected: l = false, ...a } = o, d = y.useContext(eo), u = {
      ...o,
      component: i,
      hover: s,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, p = hc(u);
    return c.jsx(mc, {
      as: i,
      ref: n,
      className: oe(p.root, r),
      role: i === xr ? null : "row",
      ownerState: u,
      ...a
    });
  }), yc = le(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function vc(e) {
    return me("MuiTableSortLabel", e);
  }
  const oo = ye("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), bc = (e) => {
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
    return be(r, vc, t);
  }, xc = U(Un, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(de(({ theme: e }) => ({
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
      [`& .${oo.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${oo.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${oo.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), wc = U("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${B(n.direction)}`]
      ];
    }
  })(de(({ theme: e }) => ({
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
  }))), Cc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: i, className: s, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = yc, slots: u = {}, slotProps: p = {}, ...g } = o, f = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = bc(f), m = {
      slots: u,
      slotProps: p
    }, [v, b] = ne("root", {
      elementType: xc,
      externalForwardedProps: m,
      ownerState: f,
      className: oe(h.root, s),
      ref: n
    }), [C, S] = ne("icon", {
      elementType: wc,
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
          ...S
        })
      ]
    });
  }), si = le(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), li = le(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), ai = le(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), _o = le(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), _c = le(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Dn = le(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), wr = le(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Cr = le(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), Sc = le(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), jc = le(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), ln = le(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), ci = le(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Rc = le(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Mc = le(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), $c = le(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), pn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, _r = "b64:";
  function Ac(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function Pc(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  function ui(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(_r) ? Pc(e.slice(_r.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Ic({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: i, loading: s }) {
    const [l, a] = y.useState(""), [d, u] = y.useState(null), [p, g] = y.useState(null), f = y.useRef(0), h = !l, m = y.useMemo(() => {
      if (!l) return e;
      const _ = l.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(_) || M.headerName.toLowerCase().includes(_));
    }, [
      e,
      l
    ]), v = y.useMemo(() => e.filter((_) => _.visible).length, [
      e
    ]), b = y.useCallback((_, M) => {
      _.stopPropagation(), r(e.map((D) => D.path === M ? {
        ...D,
        visible: !D.visible
      } : D));
    }, [
      e,
      r
    ]), C = y.useCallback((_) => {
      r(e.map((M) => ({
        ...M,
        visible: _
      })));
    }, [
      e,
      r
    ]), S = y.useCallback((_, M) => {
      _.dataTransfer.effectAllowed = "move", _.dataTransfer.setData("text/plain", M), u(M);
    }, []), w = y.useCallback((_, M) => {
      _.preventDefault(), f.current += 1, M !== d && g(M);
    }, [
      d
    ]), j = y.useCallback((_) => {
      _.preventDefault(), f.current -= 1, f.current <= 0 && (f.current = 0, g(null));
    }, []), R = y.useCallback((_) => {
      _.preventDefault(), _.dataTransfer.dropEffect = "move";
    }, []), A = y.useCallback((_, M) => {
      _.preventDefault(), f.current = 0, g(null), u(null);
      const D = _.dataTransfer.getData("text/plain");
      if (!D || D === M) return;
      const P = [
        ...e
      ], N = P.findIndex((T) => T.path === D), O = P.findIndex((T) => T.path === M);
      if (N === -1 || O === -1) return;
      const [L] = P.splice(N, 1);
      P.splice(O, 0, L), r(P);
    }, [
      e,
      r
    ]), k = y.useCallback(() => {
      f.current = 0, u(null), g(null);
    }, []), z = y.useCallback(() => {
      r(e.map((_) => ({
        path: _.path,
        visible: true,
        headerName: _.path.split(".").pop() || _.path
      })));
    }, [
      e,
      r
    ]);
    return c.jsxs(W, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(ii, {
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
              onChange: (_) => a(_.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(Co, {
                    position: "start",
                    children: c.jsx(ci, {
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
            c.jsx(Ne, {
              title: x.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(we, {
                  size: "small",
                  onClick: i,
                  disabled: s,
                  children: c.jsx(jc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Ne, {
              title: x.t("json_table_show_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: () => C(true),
                children: c.jsx(Mc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ne, {
              title: x.t("json_table_hide_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: () => C(false),
                children: c.jsx($c, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ne, {
              title: x.t("json_table_reset_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: z,
                children: c.jsx(ln, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(W, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: m.length === 0 ? c.jsx(W, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(I, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? x.t("json_table_no_columns") : x.t("json_table_no_search_results")
            })
          }) : m.map((_) => {
            const M = t.find((N) => N.path === _.path), D = n === _.path, P = (M == null ? void 0 : M.type) || "string";
            return c.jsx(Ql, {
              onClick: () => o(_.path),
              draggable: h,
              onDragStart: h ? (N) => S(N, _.path) : void 0,
              onDragEnter: h ? (N) => w(N, _.path) : void 0,
              onDragLeave: h ? j : void 0,
              onDragOver: h ? R : void 0,
              onDrop: h ? (N) => A(N, _.path) : void 0,
              onDragEnd: h ? k : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: h ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: D ? "primary.main" : "divider",
                backgroundColor: D ? "action.selected" : "background.paper",
                opacity: d === _.path ? 0.4 : _.visible ? 1 : 0.55,
                borderTop: p === _.path ? "3px solid" : void 0,
                borderTopColor: p === _.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: D ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(W, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  h && c.jsx(_c, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  c.jsx(yn, {
                    checked: _.visible,
                    onClick: (N) => b(N, _.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  c.jsxs(W, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(I, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: _.path,
                        children: _.headerName || _.path
                      }),
                      _.headerName && _.headerName !== _.path && c.jsx(I, {
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
                        title: _.path,
                        children: _.path
                      })
                    ]
                  }),
                  c.jsx(Bn, {
                    label: P,
                    size: "small",
                    sx: {
                      backgroundColor: pn[P] || pn.string,
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
            }, _.path);
          })
        }),
        e.length > 0 && c.jsx(W, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(I, {
            variant: "caption",
            color: "text.secondary",
            children: [
              v,
              " / ",
              e.length,
              " ",
              x.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function Wn(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function di(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: i = false } = t;
    let s = e.toFixed(n);
    if (i) {
      const [l, a] = s.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${o}${s}${r}`;
  }
  const Fc = [
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
  function pi(e, t) {
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
  function fi(e, t, n) {
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
      else return Wn(e);
      if (isNaN(o.getTime())) return Wn(e);
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
      return Wn(e);
    }
  }
  function So(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Wn(e);
  }
  function gi(e, t) {
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
  function zc({ format: e, onChange: t, discoveredColumn: n }) {
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
        c.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: x.t("json_table_number_format")
        }),
        c.jsxs(W, {
          children: [
            c.jsxs(I, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                x.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(Ki, {
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
          control: c.jsx(Ft, {
            checked: e.numberThousandsSeparator || false,
            onChange: (r) => t({
              type: "number",
              numberThousandsSeparator: r.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(I, {
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
            c.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsxs(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                o,
                " \u2192",
                " ",
                di(o, {
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
  function Tc({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(I, {
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
        c.jsxs(hn, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(mn, {
              children: x.t("json_table_date_output_format")
            }),
            c.jsx(Gt, {
              label: x.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (o) => n({
                type: "date",
                dateFormat: o.target.value,
                dateInputFormat: t
              }),
              children: Fc.map((o) => c.jsx(_e, {
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
            c.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsx(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: fi(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function kc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(I, {
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
            c.jsx(I, {
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
                c.jsxs(I, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    So(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(I, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    So(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function jo({ value: e, onChange: t, label: n }) {
    const o = Cn(), [r, i] = y.useState(null), s = y.useRef(null), [l, a] = y.useState(null), d = !!r;
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
    ]), c.jsxs(W, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        c.jsxs(W, {
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
            c.jsx(I, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            c.jsx(W, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && c.jsx(we, {
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(_o, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(Oi, {
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
          children: c.jsx(W, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(Ni, {
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
  function Dc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: x.t("json_table_string_format")
        }),
        c.jsxs(hn, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(mn, {
              children: x.t("json_table_string_case")
            }),
            c.jsxs(Gt, {
              label: x.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(_e, {
                  value: "none",
                  children: x.t("json_table_string_case_none")
                }),
                c.jsx(_e, {
                  value: "upper",
                  children: x.t("json_table_string_case_upper")
                }),
                c.jsx(_e, {
                  value: "lower",
                  children: x.t("json_table_string_case_lower")
                }),
                c.jsx(_e, {
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
          control: c.jsx(Ft, {
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
        c.jsx(Li, {}),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(mt, {
              control: c.jsx(Ft, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(I, {
                variant: "body2",
                fontWeight: "bold",
                children: x.t("json_table_string_font_weight")
              })
            }),
            c.jsx(mt, {
              control: c.jsx(Ft, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(I, {
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
            c.jsx(jo, {
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
            c.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsx(I, {
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
              children: gi("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function pe(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Ec(e, t) {
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
  function Oc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+pe(e)) && t !== null) throw NaN;
    if (Number.isNaN(+pe(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Nc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Lc(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function Vc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function Hc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function Bc(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let i = ht(r ? e[0] : n, o);
    for (let s = r; s < e.length; s++) i = ht(await t(i, e[s]), o);
    return i;
  }
  const Jn = {
    filter: Nc,
    some: Lc,
    every: Vc,
    map: Hc,
    reduce: Bc
  }, Z = /* @__PURE__ */ Symbol.for("json_logic_sync"), ke = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Xe = /* @__PURE__ */ Symbol.for("json_logic_original"), Sr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function kt(e) {
    return typeof e == "function" ? e[Z] === true : Array.isArray(e) ? e.every(kt) : !(e && e.asyncMethod && !e.method);
  }
  function hi(e, t = true) {
    return e[Z] = t, e;
  }
  function wn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const ro = /* @__PURE__ */ new WeakMap();
  function jr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (ro.has(e) || ro.set(e, Wc(e)), ro.get(e));
  }
  function Wc(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Gc(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), kt(t[r]) || (o.asyncDetected = true), n += (kt(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][ke] < "u" ? n += t[r][ke] : n += fe(t[r], o));
    return {
      [ke]: n
    };
  }
  function Uc(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Xn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Xn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Xn(r, t, n);
    }
    return true;
  }
  function Ro(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => Ro(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return kt(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][Z] == "function" && t.methods[o][Z](e, {
        engine: t
      })) : Ro(r, t) : false;
    }
    return true;
  }
  function fe(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: i = [], engine: s } = t;
    function l(u, p = false) {
      return Uc(u, p) ? JSON.stringify(u) : (i.push(u), `values[${i.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let p = 0; p < e.length; p++) p > 0 && (u += ","), u += fe(e[p], t);
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
      if (!t.engine.disableInline && s.methods[p] && Xn(e, s, t)) return Ro(e, s) ? l((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(s.run(e))})`) : (r.push(s.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let g = e[p];
      if ((!g || typeof g != "object") && !s.methods[p].lazy && (g = [
        g
      ]), s.methods[p] && s.methods[p].compile) {
        let m = s.methods[p].compile(g, t);
        if (m[ke] && (m = m[ke]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let f = s.methods[p].optimizeUnary ? "" : "coerceArray";
      !f && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : f && Array.isArray(g) && (f = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof s.methods[p] == "function") {
        a = !kt(s.methods[p]);
        const m = h[jr(s.methods[p]) - 1] || h[2];
        return d(`engine.methods["${p}"](${f}(` + fe(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[p] && s.methods[p].asyncMethod);
        const m = jr(a ? s.methods[p].asyncMethod : s.methods[p].method);
        let v = h[m - 1] || h[2];
        return a && typeof s.methods[p][Z] == "function" && s.methods[p][Z](g, {
          engine: s
        }) && (a = false, v = v.replace("engine", "engine.fallback")), s.methods[p] && !s.methods[p].lazy ? d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${f}(` + fe(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function Kn(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Gc
    }, t));
    const n = fe(e, t);
    return qc(e, n, t);
  }
  function qc(e, t, n) {
    const { engine: o, methods: r, notTraversed: i, processing: s = [], values: l } = n, a = [];
    s.forEach((u, p) => {
      t = t.replace(`__%%%${p}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, r, i, Jn, o, a, wn, pe, Ec, Oc, ht), {
      [Z]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Yc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Bt = Yc(), en = /* @__PURE__ */ new Map();
  function Lt(e) {
    if (en.has(e)) return en.get(e);
    en.size > 2048 && en.clear();
    const t = Jc(e);
    return en.set(e, t), t;
  }
  function Jc(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const l = e[s];
      l === n ? e[s + 1] === t || e[s + 1] === o ? (i += e[s + 1], s++) : e[s + 1] === n ? (i += n, s++) : i += n : l === t ? (r.push(i), i = "") : i += l;
    }
    return r.length !== e.length && r.push(i), r;
  }
  const Mo = {
    get: {
      [Z]: true,
      method: ([e, t, n], o, r, i) => {
        const s = n === void 0 ? null : n, l = Lt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return s;
        return i.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const i = Lt(o);
          return Bt ? `((${fe(r, t)})${i.map((s) => `?.[${fe(s, t)}]`).join("")} ?? ${fe(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((s, l) => `(${s}||0)[${JSON.stringify(l)}]`, `(${fe(r, t)}||0)`)}, ${fe(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Xe]: true,
      [Z]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let i = 0;
        for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
        const s = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Lt(String(e));
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
          const r = Lt(n);
          if (!Bt) {
            const s = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${fe(o, t)})))`;
            return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
          }
          const i = `(context${r.map((s) => `?.[${JSON.stringify(s)}]`).join("")} ?? ${fe(o, t)})`;
          return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [Z]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Lt(String(e[o]));
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
      [Z]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = Mo.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = Mo.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [ke]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Xc = {
    ...Mo
  }, Q = {
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
      return t.methods[o].lazy ? typeof t.methods[o][Z] == "function" ? t.methods[o][Z](r, n) : t.methods[o][Z] : typeof t.methods[o][Z] == "function" ? t.methods[o][Z](r, n) : t.methods[o][Z] && Oe(r, t, n);
    }
    return true;
  }
  function re(e, t, n, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const r = t.optimizedMap.get(e);
      return typeof r == "function" ? r(n, o) : r;
    }
    return t.run(e, n, {
      above: o
    });
  }
  const tn = Gn("every", true), K = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return pe(+e);
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
      if (e.length === 0) throw Q;
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return pe(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw Q;
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
      if (e.length < 2) throw Q;
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
      if (!e.length || typeof e[0] != "number") throw Q;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw Q;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw Q;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw Q;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: hi((e) => e, true),
      [Z]: () => true
    },
    if: {
      [Xe]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        if (e.length === 1) return re(e[0], o, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const i = e.shift(), s = e.shift(), l = re(i, o, t, n);
          if (o.truthy(l)) return re(s, o, t, n);
        }
        return re(r, o, t, n);
      },
      [Z]: (e, t) => Oe(e, t.engine, t),
      deterministic: (e, t) => Me(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
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
    "<": wt("<", (e, t) => e < t),
    "<=": wt("<=", (e, t) => e <= t),
    ">": wt(">", (e, t) => e > t),
    ">=": wt(">=", (e, t) => e >= t),
    "==": wt("==", (e, t) => e == t),
    "===": wt("===", (e, t) => e === t),
    "!=": wt("!=", (e, t) => e != t),
    "!==": wt("!==", (e, t) => e !== t),
    or: {
      [Z]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = re(e[i], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
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
      [Z]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        let r;
        for (let i = 0; i < e.length; i++) if (r = re(e[i], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      compile: (e, t) => Bt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = fe(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${fe(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [Z]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, i;
        for (let s = 0; s < e.length; s++) try {
          return i ? r = re(e[s], o, {
            type: i.type || i.error || i.message || i.constructor.name
          }, [
            null,
            t,
            n
          ]) : r = re(e[s], o, t, n), r;
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
            [ke]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [ke]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [ke]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[ke].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[ke].includes("await") && (n[ke] = n[ke].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [Z]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = re(e[i], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
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
        if (!e) throw Q;
        const r = re(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw Q;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw Q;
        const r = await re(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw Q;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => K.val.method(e, t, n, o, Sr) !== Sr,
      deterministic: false
    },
    val: {
      [Xe]: true,
      [Z]: true,
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
          return Bt ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Oe(e, t.engine, t) && Me(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Bt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (Bt ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: Gn("map"),
    some: {
      ...Gn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        let [r, i] = e;
        r = re(r, o, t, n) || [];
        for (let s = 0; s < r.length; s++) if (o.truthy(re(i, o, r[s], [
          r,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [Z]: tn[Z],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        const r = re(e[0], o, t, n) || [];
        if (Array.isArray(r) && r.length === 0) return false;
        const i = e[1];
        for (let s = 0; s < r.length; s++) if (!o.truthy(re(i, o, r[s], [
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
          [ke]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: tn.deterministic,
      lazy: tn.lazy
    },
    none: {
      [Z]: (e, t) => Oe(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !K.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await K.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = K.some.compile(e, t);
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
    filter: Gn("filter", true),
    reduce: {
      deterministic: (e, t) => Me(e[0], t.engine, t) && Me(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw Q;
        const { async: n } = t;
        let [o, r, i] = e;
        o = fe(o, t), typeof i < "u" && (i = fe(i, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = Kn(r, s);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!kt(r) || o.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${i}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        let [r, i, s] = e;
        s = ht(re(s, o, t, n), o.options.maxDepth), r = re(r, o, t, n) || [];
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
      [Z]: (e, t) => Oe(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw Q;
        let [r, i, s] = e;
        return s = ht(await o.run(s, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], Jn.reduce(r, (l, a) => o.run(i, {
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
      [Xe]: true,
      [Z]: true,
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
      [Z]: (e, t) => Oe(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${Kn(e[o], {
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
      [Z]: (e, t) => Oe(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        throw Q;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${fe(e[r], t)}`), o), []).join(",")} })`;
        throw Q;
      },
      asyncMethod: async (e, t, n, o) => await Jn.reduce(Object.keys(e), async (i, s) => {
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
  function wt(e, t) {
    const n = {
      [ke]: e
    }, o = e.length === 3;
    return {
      method: (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw Q;
        if (r.length === 2) {
          const d = re(r[0], l, i, s), u = re(r[1], l, i, s);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+pe(d))) throw NaN;
          if (Number.isNaN(+pe(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = re(r[0], l, i, s);
        for (let d = 1; d < r.length; d++) {
          const u = re(r[d], l, i, s);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+pe(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+pe(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      asyncMethod: async (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw Q;
        if (r.length === 2) {
          const d = await re(r[0], l, i, s), u = await re(r[1], l, i, s);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+pe(d))) throw NaN;
          if (Number.isNaN(+pe(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = await re(r[0], l, i, s);
        for (let d = 1; d < r.length; d++) {
          const u = await re(r[d], l, i, s);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+pe(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+pe(a))) throw NaN;
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
      [Xe]: true,
      [Z]: (r, i) => Oe(r, i.engine, i),
      deterministic: (r, i) => Me(r, i.engine, i),
      lazy: true
    };
  }
  function Gn(e, t = false) {
    return {
      deterministic: (n, o) => Me(n[0], o.engine, o) && Me(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Xe]: true,
      [Z]: (n, o) => Oe(n, o.engine, o),
      method: (n, o, r, i) => {
        if (!Array.isArray(n)) throw Q;
        let [s, l] = n;
        return s = re(s, i, o, r) || [], s[e]((a, d) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const u = re(l, i, a, [
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
        if (!Array.isArray(n)) throw Q;
        let [s, l] = n;
        return s = await i.run(s, o, {
          above: r
        }) || [], Jn[e](s, async (a, d) => {
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
        if (!Array.isArray(n)) throw Q;
        const { async: r } = o, [i, s] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = Kn(s, l), d = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, u = t ? o.compile`engine.truthy` : o.compile``;
        return r && !kt(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : o.compile`(${i} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  K.every = K.all;
  K["?:"] = K.if;
  Object.keys(K).forEach((e) => {
    typeof K[e] == "function" && (K[e][Z] = true), K[e].deterministic = typeof K[e].deterministic > "u" ? true : K[e].deterministic;
  });
  K.if.compile = function(e, t) {
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
    if (Array.isArray(e)) return pe(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + fe(e, t);
    if (typeof e == "string") return "+" + pe(+e);
    const n = fe(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + pe(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? pe(NaN) : `(+precoerceNumber(${n}))`;
  }
  K["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => jn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${fe(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  K["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw Q;
      return `precoerceNumber(${e.map((n) => jn(n, t)).join(" % ")})`;
    }
    return `assertSize(${fe(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  K.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  K["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw Q;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => jn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${fe(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  K["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw Q;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = jn(n, t);
        return o && r === "+0" && pe(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${fe(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  K["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => jn(n, t)).join(" * ")})` : `(${fe(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  K["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  K.not = K["!"];
  K["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  K.none.deterministic = K.some.deterministic;
  K.throw.deterministic = (e, t) => t.insideTry && Me(e, t.engine, t);
  K["+"].optimizeUnary = K["-"].optimizeUnary = K["!"].optimizeUnary = K["!!"].optimizeUnary = K.cat.optimizeUnary = K.throw.optimizeUnary = true;
  const Kc = {
    ...K,
    ...Xc
  }, Qc = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Zc(e, t, n, o) {
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
        if ((n === "var" || n === "val") && t.methods[n][Xe]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Lt(String(l));
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
      return typeof l == "function" ? (a, d) => i(wn(l(a, d)), a, d || o, t) : (a, d) => i(wn(l), a, d || o, t);
    }
  }
  const Rr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function eu(e, t, n) {
    if (e.val && t.methods.val[Xe] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[Xe] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, i] = e.if || e["?:"], s = ze(o, t, n), l = ze(r, t, n), a = ze(i, t, n);
      return typeof s == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(s(d, u)) ? l(d, u) : a(d, u) : typeof s == "function" && typeof l == "function" ? (d, u) => t.truthy(s(d, u)) ? l(d, u) : a : typeof s == "function" && typeof a == "function" ? (d, u) => t.truthy(s(d, u)) ? l : a(d, u) : typeof s == "function" ? (d, u) => t.truthy(s(d, u)) ? l : a : t.truthy(s) ? l : a;
    }
    if (e.filter && t.methods.filter[Xe] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, i = ze(r, t, n);
      if (typeof i != "function") return t.truthy(i) ? ze(o, t, n) : [];
    }
    for (const o in Rr) if (e[o] && Array.isArray(e[o]) && t.methods[o][Xe]) {
      const r = Rr[o], i = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+pe(l))) throw NaN;
        if (Number.isNaN(+pe(a)) && l !== null) throw NaN;
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
      const o = eu(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), i = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, i)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Xn(e, t, {
        engine: t
      });
      if (i in t.methods) {
        const a = Zc(e, t, i, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: i
      };
    }
    return e;
  }
  class tu {
    constructor(t = Kc, n = {
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
      if ((r === "var" || r === "val") && this.methods[r][Xe]) {
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
        const { method: l, lazy: a } = this.methods[r], d = a ? s : !s || typeof s != "object" ? [
          s
        ] : wn(this.run(s, n, {
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
      }, Object.assign(n, Qc({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = hi(n);
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
      const { above: o = [], top: r = true } = n, i = Kn(t, {
        engine: this,
        above: o
      });
      return r === false && i.deterministic ? i() : i;
    }
  }
  function Ge(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const to = new tu();
  to.addMethod("contains", ([e, t]) => Ge(e).includes(Ge(t)), {
    deterministic: true
  });
  to.addMethod("startsWith", ([e, t]) => Ge(e).startsWith(Ge(t)), {
    deterministic: true
  });
  to.addMethod("endsWith", ([e, t]) => Ge(e).endsWith(Ge(t)), {
    deterministic: true
  });
  function nn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const $o = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), nu = {
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
  }, ou = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], ru = {
    var: "value"
  };
  function iu(e, t, n = "string") {
    const o = Number(t), r = n === "number", i = n === "date", s = ru;
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
  const su = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function lu(e, t = "string") {
    const n = e.conditions.filter((r) => $o.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && su.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => iu(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function ft(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function io(e) {
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
        operand: Ge(o[1])
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
        operand: Ge(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "neq",
        operand: Ge(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "contains",
        operand: Ge(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "starts_with",
        operand: Ge(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
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
          if (Array.isArray(o) && ft(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && ft(o[0])) return {
            operator: "not_contains",
            operand: Ge(o[1])
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
  function Mr(e) {
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
        const o = n.map((r) => io(r)).filter((r) => r !== null).map((r) => ({
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
        const o = n.map((r) => io(r)).filter((r) => r !== null).map((r) => ({
          id: nn(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = io(e);
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
  const au = 200, on = /* @__PURE__ */ new Map();
  function cu(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = on.get(n);
      return o || (o = to.build(e), on.size >= au && on.delete(on.keys().next().value), on.set(n, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const uu = {
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
  function du({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Mr(e));
    y.useEffect(() => {
      r(Mr(e));
    }, [
      e
    ]);
    const i = nu[t] ?? ou, s = y.useCallback((g) => {
      r(g), n(lu(g, t));
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
        p && c.jsxs(W, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Gr, {
              value: o.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": x.t("json_table_condition_mode_label"),
              children: [
                c.jsx(qn, {
                  value: "and",
                  "aria-label": x.t("json_table_condition_mode_all"),
                  children: x.t("json_table_condition_mode_all")
                }),
                c.jsx(qn, {
                  value: "or",
                  "aria-label": x.t("json_table_condition_mode_any"),
                  children: x.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? x.t("json_table_condition_mode_hint_and") : x.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, f) => {
          const h = !$o.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(W, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(hn, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(mn, {
                    children: x.t("json_table_condition_operator")
                  }),
                  c.jsx(Gt, {
                    label: x.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const b = v.target.value, C = $o.has(b) ? "" : g.operand;
                      l(f, {
                        operator: b,
                        operand: C
                      });
                    },
                    children: i.map((v) => c.jsx(_e, {
                      value: v,
                      children: x.t(uu[v])
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
                children: c.jsx(we, {
                  size: "small",
                  onClick: () => a(f),
                  "aria-label": x.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(Ur, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? f);
        }),
        c.jsx(vn, {
          startIcon: c.jsx(si, {}),
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
  function pu({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
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
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(W, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Gr, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, p) => {
                p && r(p);
              },
              "aria-label": x.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(qn, {
                  value: "first-match",
                  "aria-label": x.t("json_table_cell_style_mode_first"),
                  children: x.t("json_table_cell_style_mode_first")
                }),
                c.jsx(qn, {
                  value: "all-match",
                  "aria-label": x.t("json_table_cell_style_mode_all"),
                  children: x.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? x.t("json_table_cell_style_mode_hint_first") : x.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && c.jsxs(W, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            c.jsx(I, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: x.t("json_table_no_style_rules")
            }),
            c.jsx(I, {
              variant: "caption",
              children: x.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, p) => {
          const g = (e || []).length, f = u.backgroundColor ? Ut(u.backgroundColor) : void 0, h = u.textColor ? Ut(u.textColor) : void 0;
          return c.jsx(ot, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(De, {
              spacing: 1.5,
              children: [
                c.jsxs(W, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(W, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: c.jsxs(I, {
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
                    c.jsxs(W, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(Ne, {
                          title: x.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(we, {
                              size: "small",
                              onClick: () => a(p),
                              disabled: p === 0,
                              "aria-label": x.t("json_table_rule_move_up"),
                              children: c.jsx(ai, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ne, {
                          title: x.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(we, {
                              size: "small",
                              onClick: () => d(p),
                              disabled: p >= g - 1,
                              "aria-label": x.t("json_table_rule_move_down"),
                              children: c.jsx(li, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ne, {
                          title: x.t("json_table_delete_rule"),
                          children: c.jsx(we, {
                            size: "small",
                            onClick: () => s(p),
                            color: "error",
                            "aria-label": x.t("json_table_delete_rule"),
                            children: c.jsx(Vi, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(du, {
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
                    c.jsx(jo, {
                      label: x.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => i(p, {
                        backgroundColor: m
                      })
                    }),
                    c.jsx(jo, {
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
                      control: c.jsx(yn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => i(p, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx(wr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(wr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(I, {
                        variant: "caption",
                        children: x.t("json_table_bold")
                      })
                    }),
                    c.jsx(mt, {
                      control: c.jsx(yn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => i(p, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(Cr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Cr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(I, {
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
                  children: c.jsx(I, {
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
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? x.t("json_table_rules_priority_hint") : x.t("json_table_rules_all_match_hint")
        }),
        c.jsx(vn, {
          startIcon: c.jsx(si, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: x.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function fu({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b, _c2, _d2, _e2, _f, _g;
    const [o, r] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), i = y.useCallback((w) => {
      r((j) => ({
        ...j,
        [w]: !j[w]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", l = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, j) => w + j, 0) : 0, [
      t
    ]), a = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), d = e.headerName !== a || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, u = y.useCallback(() => {
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
    ]), p = e.format !== void 0, g = y.useCallback(() => {
      const { format: w, ...j } = e;
      n(j);
    }, [
      e,
      n
    ]), f = (((_a2 = e.cellStyle) == null ? void 0 : _a2.length) ?? 0) > 0 || e.cellStyleMode !== void 0, h = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: j, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), m = e.sortable !== void 0 || e.filterable !== void 0, v = y.useCallback(() => {
      const { sortable: w, filterable: j, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), b = y.useCallback((w) => {
      var _a3, _b2;
      const j = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const R = (_b2 = e.format) == null ? void 0 : _b2.type;
        R === "number" ? (delete j.numberDecimals, delete j.numberPrefix, delete j.numberSuffix, delete j.numberThousandsSeparator) : R === "date" ? (delete j.dateFormat, delete j.dateInputFormat) : R === "boolean" ? (delete j.booleanTrue, delete j.booleanFalse) : R === "string" && [
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
        ].forEach((k) => {
          delete j[k];
        });
      }
      n({
        ...e,
        format: {
          ...j,
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
    ]), S = y.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return c.jsxs(W, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(W, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(Bn, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: pn[s] || pn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(I, {
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
            c.jsxs(Pn, {
              expanded: o.basic,
              onChange: () => i("basic"),
              disableGutters: true,
              children: [
                c.jsx(Fn, {
                  expandIcon: c.jsx(Dn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: x.t("json_table_section_basic")
                      }),
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !d,
                            onClick: (w) => {
                              w.stopPropagation(), u();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(ln, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(In, {
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
                      c.jsxs(hn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(mn, {
                            children: x.t("json_table_align")
                          }),
                          c.jsxs(Gt, {
                            label: x.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              c.jsx(_e, {
                                value: "left",
                                children: x.t("json_table_align_left")
                              }),
                              c.jsx(_e, {
                                value: "center",
                                children: x.t("json_table_align_center")
                              }),
                              c.jsx(_e, {
                                value: "right",
                                children: x.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(mt, {
                        control: c.jsx(Ft, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: c.jsx(I, {
                          variant: "body2",
                          children: x.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Pn, {
              expanded: o.formatting,
              onChange: () => i("formatting"),
              disableGutters: true,
              children: [
                c.jsx(Fn, {
                  expandIcon: c.jsx(Dn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: x.t("json_table_section_formatting")
                      }),
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(ln, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(In, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsxs(hn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(mn, {
                            children: x.t("json_table_format_type")
                          }),
                          c.jsxs(Gt, {
                            value: ((_b = e.format) == null ? void 0 : _b.type) || "auto",
                            label: x.t("json_table_format_type"),
                            onChange: (w) => {
                              const j = w.target.value;
                              j === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : b({
                                type: j
                              });
                            },
                            children: [
                              c.jsxs(_e, {
                                value: "auto",
                                children: [
                                  x.t("json_table_format_type_auto"),
                                  ` (${s})`
                                ]
                              }),
                              c.jsx(_e, {
                                value: "string",
                                children: x.t("json_table_format_type_string")
                              }),
                              c.jsx(_e, {
                                value: "number",
                                children: x.t("json_table_format_type_number")
                              }),
                              c.jsx(_e, {
                                value: "date",
                                children: x.t("json_table_format_type_date")
                              }),
                              c.jsx(_e, {
                                value: "boolean",
                                children: x.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "number" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "number") && c.jsx(zc, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: b,
                        discoveredColumn: t
                      }),
                      (s === "date" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "date") && c.jsx(Tc, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: b
                      }),
                      (s === "boolean" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "boolean") && c.jsx(kc, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: b
                      }),
                      (s === "string" || ((_f = e.format) == null ? void 0 : _f.type) === "string") && c.jsx(Dc, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: b
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && s !== "string" && !e.format && c.jsx(I, {
                        variant: "body2",
                        color: "text.secondary",
                        children: x.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Pn, {
              expanded: o.styling,
              onChange: () => i("styling"),
              disableGutters: true,
              children: [
                c.jsx(Fn, {
                  expandIcon: c.jsx(Dn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(W, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsx(I, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: x.t("json_table_section_styling")
                          }),
                          (((_g = e.cellStyle) == null ? void 0 : _g.length) ?? 0) > 0 && c.jsx(Bn, {
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
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(ln, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(In, {
                  children: c.jsx(pu, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: s,
                    onStyleChange: C,
                    onModeChange: S
                  })
                })
              ]
            }),
            c.jsxs(Pn, {
              expanded: o.advanced,
              onChange: () => i("advanced"),
              disableGutters: true,
              children: [
                c.jsx(Fn, {
                  expandIcon: c.jsx(Dn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: x.t("json_table_section_advanced")
                      }),
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(ln, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(In, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(mt, {
                        control: c.jsx(Ft, {
                          checked: e.sortable ?? true,
                          onChange: (w) => n({
                            ...e,
                            sortable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(I, {
                          variant: "body2",
                          children: x.t("json_table_sortable")
                        })
                      }),
                      c.jsx(mt, {
                        control: c.jsx(Ft, {
                          checked: e.filterable ?? false,
                          onChange: (w) => n({
                            ...e,
                            filterable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(I, {
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
                          c.jsx(I, {
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
                              c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_type_label")
                                  }),
                                  c.jsx(Bn, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: pn[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_confidence")
                                  }),
                                  c.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_nulls")
                                  }),
                                  c.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      l > 0 && ` (${Math.round(t.nullCount / l * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_distinct")
                                  }),
                                  c.jsx(I, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_range")
                                  }),
                                  c.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_date_input_format")
                                  }),
                                  c.jsx(I, {
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
  const gu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, hu = /^\d{4}-\d{2}-\d{2}$/, mu = /^(\d{2})\.(\d{2})\.(\d{4})$/, yu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, vu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, bu = /^(\d{2})\/(\d{2})\/(\d{4})$/, xu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, wu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function En(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function so(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function On(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Cu = [
    {
      regex: gu,
      format: "ISO-8601"
    },
    {
      regex: hu,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return En(n, t);
      }
    },
    {
      regex: vu,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return En(t, n) && On(o, r, i);
      }
    },
    {
      regex: yu,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return En(t, n) && On(o, r);
      }
    },
    {
      regex: mu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return En(t, n);
      }
    },
    {
      regex: wu,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return so(t, n) && On(o, r, i);
      }
    },
    {
      regex: xu,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return so(t, n) && On(o, r);
      }
    },
    {
      regex: bu,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return so(t, n);
      }
    }
  ];
  function _u(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Cu) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Su(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function ju(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Su(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = _u(e);
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
  function Ru(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Mu(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function $u(e) {
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
  function $r(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Au(e, t) {
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
  function Pu(e, t, n = 100, o = 0.8) {
    const r = /* @__PURE__ */ new Map();
    for (const i of e) r.set(i, $u(i));
    for (const i of t) for (const s of e) {
      const l = r.get(s), a = i[s], d = ju(a);
      if ($r(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && $r(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = Au(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((i) => {
      const s = r.get(i);
      let l = Ru(s.typeCounts);
      l === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (l = "string");
      const a = l === "date" ? Mu(s.dateFormatCounts) : void 0, d = l === "date" ? s.typeCounts.date || 0 : s.typeCounts[l] || 0, u = s.nonNullCount > 0 ? Math.round(d / s.nonNullCount * 100) / 100 : 0, p = {
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
  function Qn(e, t, n, o, r, i, s, l) {
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
        Qn(e[a], d, n, o, r, i + 1, s, l);
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
        Qn(e[d], u, n, o, r, i + 1, s, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Iu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const d of Object.keys(s)) Qn(s[d], d, l, n, a, 1, t, o);
      else Qn(s, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const i = Fu([
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
  function Fu(e) {
    return e.sort((t, n) => {
      const o = Ar(t), r = Ar(n), i = Math.min(o.length, r.length);
      for (let s = 0; s < i; s++) {
        const l = o[s], a = r[s], d = Pr(l), u = Pr(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function Ar(e) {
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
  function Pr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const zu = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function mi(e, t) {
    const n = performance.now(), o = {
      ...zu,
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
    const r = Iu(e, o.maxDepth), i = Pu(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), s = r.paths.length * r.rows.length, l = i.reduce((u, p) => u + p.nullCount, 0), a = s > 0 ? Math.round(l / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
  function Tu(e, t) {
    return y.useMemo(() => mi(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function ku({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: i, socket: s }) {
    const [l, a] = y.useState(n), [d, u] = y.useState(null), [p, g] = y.useState([]), [f, h] = y.useState(false), [m, v] = y.useState(false), [b, C] = y.useState(null), S = y.useRef(false), w = y.useRef(() => Promise.resolve()), j = y.useRef(n), R = y.useMemo(() => JSON.stringify(n), [
      n
    ]), A = y.useMemo(() => JSON.stringify(l) !== R, [
      l,
      R
    ]);
    y.useEffect(() => {
      e && (a(n), j.current = n, u(n.length > 0 ? n[0].path : null), S.current = false, C(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !S.current && (S.current = true, w.current());
    }, [
      e
    ]);
    const k = y.useCallback(async () => {
      h(true), C(null);
      try {
        const O = i.oid;
        if (!O) return;
        const L = await s.getState(O);
        if ((L == null ? void 0 : L.val) === null || (L == null ? void 0 : L.val) === void 0) return;
        let T;
        const G = L.val;
        if (typeof G == "string") try {
          const F = JSON.parse(G);
          T = Array.isArray(F) ? F : [
            F
          ];
        } catch {
          return;
        }
        else if (Array.isArray(G)) T = G;
        else if (typeof G == "object" && G !== null) T = [
          G
        ];
        else return;
        const Y = i.tableMaxDepth || 10, ie = mi(T, {
          maxDepth: Y
        });
        g(ie.columns);
        const ae = new Map(j.current.map((F) => [
          F.path,
          F
        ])), Se = new Set(ie.columns.map((F) => F.path)), Ce = j.current.filter((F) => Se.has(F.path)), ge = ie.columns.filter((F) => !ae.has(F.path)).map((F) => ({
          path: F.path,
          visible: true,
          headerName: F.path.split(".").pop() || F.path
        })), ee = [
          ...Ce,
          ...ge
        ];
        a(ee), j.current = ee, u((F) => F === null && ee.length > 0 ? ee[0].path : F);
      } catch (O) {
        const L = O instanceof Error ? O.message : "Failed to discover columns";
        C(L);
      } finally {
        h(false);
      }
    }, [
      i,
      s
    ]);
    y.useEffect(() => {
      w.current = k;
    }, [
      k
    ]), y.useEffect(() => {
      j.current = l;
    }, [
      l
    ]);
    const z = y.useCallback((O) => {
      a((L) => L.map((T) => T.path === O.path ? O : T));
    }, []), _ = y.useCallback((O) => {
      a(O);
    }, []), M = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), D = y.useCallback((O, L) => {
      if (L === "backdropClick" && A) {
        v(true);
        return;
      }
      t();
    }, [
      A,
      t
    ]), P = y.useMemo(() => d ? l.find((O) => O.path === d) : null, [
      d,
      l
    ]), N = y.useMemo(() => d ? p.find((O) => O.path === d) : void 0, [
      d,
      p
    ]);
    return c.jsxs(Hi, {
      theme: r,
      children: [
        c.jsxs(Qi, {
          open: e,
          onClose: D,
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
            c.jsx(Zi, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: c.jsxs(W, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(I, {
                    variant: "h6",
                    children: x.t("json_table_column_editor_title")
                  }),
                  c.jsx(we, {
                    onClick: () => D(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: c.jsx(Ur, {})
                  })
                ]
              })
            }),
            c.jsxs(es, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                b && c.jsx(er, {
                  severity: "error",
                  onClose: () => C(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: b
                }),
                c.jsxs(W, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    c.jsx(W, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: c.jsx(Ic, {
                        columns: l,
                        discoveredColumns: p,
                        selectedPath: d,
                        onSelect: u,
                        onChange: _,
                        onRefresh: k,
                        loading: f
                      })
                    }),
                    c.jsx(W, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: P ? c.jsx(fu, {
                        column: P,
                        discoveredColumn: N,
                        onChange: z
                      }) : c.jsx(W, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(I, {
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
            c.jsxs(ra, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(vn, {
                  onClick: () => D(),
                  children: x.t("cancel")
                }),
                c.jsx(vn, {
                  variant: "contained",
                  onClick: M,
                  disabled: !A,
                  children: x.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(wa, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(er, {
            severity: "warning",
            onClose: () => v(false),
            children: x.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Du(e, t, n, o) {
    const r = e.name || "columnConfig", i = o.context.theme, [s, l] = y.useState(false), a = y.useMemo(() => ui(t[r]), [
      t,
      r
    ]), d = a.filter((h) => h.visible).length, u = a.length, p = a.some((h) => h.format), g = a.some((h) => h.cellStyle && h.cellStyle.length > 0), f = y.useCallback((h) => {
      const m = JSON.stringify(h), v = `b64:${Ac(m)}`;
      n({
        [r]: v
      });
    }, [
      r,
      n
    ]);
    return c.jsxs(W, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(vn, {
          variant: "outlined",
          startIcon: c.jsx(Rc, {}),
          onClick: () => l(true),
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          children: x.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: "block"
          },
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
        c.jsx(ku, {
          open: s,
          onClose: () => l(false),
          columns: a,
          onSave: f,
          theme: i,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const Eu = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
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
      component: () => c.jsx(Je, {
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
      component: () => c.jsx(Je, {
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
      component: () => c.jsx(Je, {
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
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: () => c.jsx(Je, {
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
      component: () => c.jsx(Je, {
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
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: () => c.jsx(Je, {})
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
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: () => c.jsx(Je, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: () => c.jsx(Je, {})
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
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: () => c.jsx(Je, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Pt, {
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
      component: () => c.jsx(Je, {
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
      component: () => c.jsx(Je, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Du
    }
  ];
  function Ct(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function qe(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: Ct(n, o[e])
      }));
    };
  }
  function no(e) {
    return e instanceof Function;
  }
  function Ou(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Nu(e, t) {
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
  function Lu(e, t, n, o) {
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
      ], (s, l, a, d) => ({
        table: s,
        column: l,
        row: a,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), H(e.options, "debugCells"))
    };
    return e._features.forEach((s) => {
      s.createCell == null || s.createCell(i, n, t, e);
    }, {}), i;
  }
  function Vu(e, t, n, o) {
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
      getFlatColumns: V(() => [
        true
      ], () => {
        var g;
        return [
          p,
          ...(g = p.columns) == null ? void 0 : g.flatMap((f) => f.getFlatColumns())
        ];
      }, H(e.options, "debugColumns")),
      getLeafColumns: V(() => [
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
      }, H(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(p, e);
    return p;
  }
  const Fe = "debugHeaders";
  function Ir(e, t, n) {
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
  const Hu = {
    createTable: (e) => {
      e.getHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var i, s;
        const l = (i = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (s = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], d = n.filter((p) => !(o != null && o.includes(p.id)) && !(r != null && r.includes(p.id)));
        return Nn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, H(e.options, Fe)), e.getCenterHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), Nn(t, n, e, "center")), H(e.options, Fe)), e.getLeftHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return Nn(t, i, e, "left");
      }, H(e.options, Fe)), e.getRightHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return Nn(t, i, e, "right");
      }, H(e.options, Fe)), e.getFooterGroups = V(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Fe)), e.getLeftFooterGroups = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Fe)), e.getCenterFooterGroups = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Fe)), e.getRightFooterGroups = V(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Fe)), e.getFlatHeaders = V(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Fe)), e.getLeftFlatHeaders = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Fe)), e.getCenterFlatHeaders = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Fe)), e.getRightFlatHeaders = V(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Fe)), e.getCenterLeafHeaders = V(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Fe)), e.getLeftLeafHeaders = V(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Fe)), e.getRightLeafHeaders = V(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Fe)), e.getLeafHeaders = V(() => [
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
      }, H(e.options, Fe));
    }
  };
  function Nn(e, t, n, o) {
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
        let S, w = false;
        if (C && v.column.parent ? S = v.column.parent : (S = v.column, w = true), b && (b == null ? void 0 : b.column) === S) b.subHeaders.push(v);
        else {
          const j = Ir(n, S, {
            id: [
              o,
              f,
              S.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: w,
            placeholderId: w ? `${m.filter((R) => R.column === S).length}` : void 0,
            depth: f,
            index: m.length
          });
          j.subHeaders.push(v), m.push(j);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), f > 0 && d(m, f - 1);
    }, u = t.map((g, f) => Ir(n, g, {
      depth: s,
      index: f
    }));
    d(u, s - 1), a.reverse();
    const p = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, b = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (b = [], p(h.subHeaders).forEach((S) => {
        let { colSpan: w, rowSpan: j } = S;
        m += w, b.push(j);
      })) : m = 1;
      const C = Math.min(...b);
      return v = v + C, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return p((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
  }
  const Bo = (e, t, n, o, r, i, s) => {
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
      getLeafRows: () => Nu(l.subRows, (a) => a.subRows),
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
      getAllCells: V(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => Lu(e, l, d, d.id)), H(e.options, "debugRows")),
      _getAllCellsByColumnId: V(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), H(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, Bu = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, yi = (e, t, n) => {
    var o, r;
    const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
  };
  yi.autoRemove = (e) => nt(e);
  const vi = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  vi.autoRemove = (e) => nt(e);
  const bi = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  bi.autoRemove = (e) => nt(e);
  const xi = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  xi.autoRemove = (e) => nt(e);
  const wi = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  wi.autoRemove = (e) => nt(e) || !(e != null && e.length);
  const Ci = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  Ci.autoRemove = (e) => nt(e) || !(e != null && e.length);
  const _i = (e, t, n) => e.getValue(t) === n;
  _i.autoRemove = (e) => nt(e);
  const Si = (e, t, n) => e.getValue(t) == n;
  Si.autoRemove = (e) => nt(e);
  const Wo = (e, t, n) => {
    let [o, r] = n;
    const i = e.getValue(t);
    return i >= o && i <= r;
  };
  Wo.resolveFilterValue = (e) => {
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
  Wo.autoRemove = (e) => nt(e) || nt(e[0]) && nt(e[1]);
  const gt = {
    includesString: yi,
    includesStringSensitive: vi,
    equalsString: bi,
    arrIncludes: xi,
    arrIncludesAll: wi,
    arrIncludesSome: Ci,
    equals: _i,
    weakEquals: Si,
    inNumberRange: Wo
  };
  function nt(e) {
    return e == null || e === "";
  }
  const Wu = {
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
        return typeof o == "string" ? gt.includesString : typeof o == "number" ? gt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? gt.equals : Array.isArray(o) ? gt.arrIncludes : gt.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return no(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : gt[e.columnDef.filterFn];
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
          const r = e.getFilterFn(), i = o == null ? void 0 : o.find((u) => u.id === e.id), s = Ct(n, i ? i.value : void 0);
          if (Fr(r, s, e)) {
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
          return (i = Ct(t, r)) == null ? void 0 : i.filter((s) => {
            const l = n.find((a) => a.id === s.id);
            if (l) {
              const a = l.getFilterFn();
              if (Fr(a, s.value, l)) return false;
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
  function Fr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Gu = (e, t, n) => n.reduce((o, r) => {
    const i = r.getValue(e);
    return o + (typeof i == "number" ? i : 0);
  }, 0), Uu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o > i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, qu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o < i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Yu = (e, t, n) => {
    let o, r;
    return n.forEach((i) => {
      const s = i.getValue(e);
      s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
    }), [
      o,
      r
    ];
  }, Ju = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let i = r.getValue(e);
      i != null && (i = +i) >= i && (++n, o += i);
    }), n) return o / n;
  }, Xu = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!Ou(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, Ku = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Qu = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Zu = (e, t) => t.length, lo = {
    sum: Gu,
    min: Uu,
    max: qu,
    extent: Yu,
    mean: Ju,
    median: Xu,
    unique: Ku,
    uniqueCount: Qu,
    count: Zu
  }, ed = {
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
        if (typeof o == "number") return lo.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return lo.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return no(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : lo[e.columnDef.aggregationFn];
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
  function td(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((i) => !t.includes(i.id));
    return n === "remove" ? o : [
      ...t.map((i) => e.find((s) => s.id === i)).filter(Boolean),
      ...o
    ];
  }
  const nd = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: qe("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = V((n) => [
        fn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), H(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = fn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = fn(t, n);
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
            const a = s.shift(), d = l.findIndex((u) => u.id === a);
            d > -1 && i.push(l.splice(d, 1)[0]);
          }
          i = [
            ...i,
            ...l
          ];
        }
        return td(i, n, o);
      }, H(e.options, "debugTable"));
    }
  }, ao = () => ({
    left: [],
    right: []
  }), od = {
    getInitialState: (e) => ({
      columnPinning: ao(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: qe("columnPinning", e)
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
        return e.setColumnPinning(t ? ao() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : ao());
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
  function rd(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Ln = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, co = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), id = {
    getDefaultColumnDef: () => Ln,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: co(),
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
        const i = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Ln.minSize, (o = i ?? e.columnDef.size) != null ? o : Ln.size), (r = e.columnDef.maxSize) != null ? r : Ln.maxSize);
      }, e.getStart = V((n) => [
        n,
        fn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), H(t.options, "debugColumns")), e.getAfter = V((n) => [
        n,
        fn(t, n),
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
          if (!o || !r || (i.persist == null || i.persist(), uo(i) && i.touches && i.touches.length > 1)) return;
          const s = e.getSize(), l = e ? e.getLeafHeaders().map((b) => [
            b.column.id,
            b.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = uo(i) ? Math.round(i.touches[0].clientX) : i.clientX, d = {}, u = (b, C) => {
            typeof C == "number" && (t.setColumnSizingInfo((S) => {
              var w, j;
              const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, A = (C - ((w = S == null ? void 0 : S.startOffset) != null ? w : 0)) * R, k = Math.max(A / ((j = S == null ? void 0 : S.startSize) != null ? j : 0), -0.999999);
              return S.columnSizingStart.forEach((z) => {
                let [_, M] = z;
                d[_] = Math.round(Math.max(M + M * k, 0) * 100) / 100;
              }), {
                ...S,
                deltaOffset: A,
                deltaPercentage: k
              };
            }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((S) => ({
              ...S,
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
          }, f = rd(n), h = {
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
          }, v = sd() ? {
            passive: false
          } : false;
          uo(i) ? (f == null ? void 0 : f.addEventListener("touchmove", m.moveHandler, v), f == null ? void 0 : f.addEventListener("touchend", m.upHandler, v)) : (f == null ? void 0 : f.addEventListener("mousemove", h.moveHandler, v), f == null ? void 0 : f.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((b) => ({
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
        e.setColumnSizingInfo(t ? co() : (n = e.initialState.columnSizingInfo) != null ? n : co());
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
  let Vn = null;
  function sd() {
    if (typeof Vn == "boolean") return Vn;
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
    return Vn = e, Vn;
  }
  function uo(e) {
    return e.type === "touchstart";
  }
  const ld = {
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
  function fn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const ad = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, cd = {
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
        var n, o, r, i;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((o = t.options.enableGlobalFilter) != null ? o : true) && ((r = t.options.enableFilters) != null ? r : true) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => gt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return no(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : gt[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, ud = {
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
  }, Ao = 0, Po = 10, po = () => ({
    pageIndex: Ao,
    pageSize: Po
  }), dd = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...po(),
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
        const r = (i) => Ct(o, i);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? po() : (r = e.initialState.pagination) != null ? r : po());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let i = Ct(o, r.pageIndex);
          const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return i = Math.max(0, Math.min(i, s)), {
            ...r,
            pageIndex: i
          };
        });
      }, e.resetPageIndex = (o) => {
        var r, i;
        e.setPageIndex(o ? Ao : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : Ao);
      }, e.resetPageSize = (o) => {
        var r, i;
        e.setPageSize(o ? Po : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Po);
      }, e.setPageSize = (o) => {
        e.setPagination((r) => {
          const i = Math.max(1, Ct(o, r.pageSize)), s = r.pageSize * r.pageIndex, l = Math.floor(s / i);
          return {
            ...r,
            pageIndex: l,
            pageSize: i
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var i;
        let s = Ct(o, (i = e.options.pageCount) != null ? i : -1);
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
  }, fo = () => ({
    top: [],
    bottom: []
  }), pd = {
    getInitialState: (e) => ({
      rowPinning: fo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: qe("rowPinning", e)
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
        return e.setRowPinning(t ? fo() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : fo());
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
  }, fd = {
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
          Io(r, i.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? go(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getFilteredSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? go(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getGroupedSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? go(e, n) : {
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
          return Io(l, e.id, n, (s = o == null ? void 0 : o.selectChildren) != null ? s : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Go(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Fo(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Fo(e, n) === "all";
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
  }, Io = (e, t, n, o, r) => {
    var i;
    const s = r.getRow(t, true);
    n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = true)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => Io(e, l.id, n, o, r));
  };
  function go(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, i = function(s, l) {
      return s.map((a) => {
        var d;
        const u = Go(a, n);
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
  function Go(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Fo(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, i = false;
    return e.subRows.forEach((s) => {
      if (!(i && !r) && (s.getCanSelect() && (Go(s, t) ? i = true : r = false), s.subRows && s.subRows.length)) {
        const l = Fo(s, t);
        l === "all" ? i = true : (l === "some" && (i = true), r = false);
      }
    }), r ? "all" : i ? "some" : false;
  }
  const zo = /([0-9]+)/gm, gd = (e, t, n) => ji(_t(e.getValue(n)).toLowerCase(), _t(t.getValue(n)).toLowerCase()), hd = (e, t, n) => ji(_t(e.getValue(n)), _t(t.getValue(n))), md = (e, t, n) => Uo(_t(e.getValue(n)).toLowerCase(), _t(t.getValue(n)).toLowerCase()), yd = (e, t, n) => Uo(_t(e.getValue(n)), _t(t.getValue(n))), vd = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, bd = (e, t, n) => Uo(e.getValue(n), t.getValue(n));
  function Uo(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function _t(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function ji(e, t) {
    const n = e.split(zo).filter(Boolean), o = t.split(zo).filter(Boolean);
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
    alphanumeric: gd,
    alphanumericCaseSensitive: hd,
    text: md,
    textCaseSensitive: yd,
    datetime: vd,
    basic: bd
  }, xd = {
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
          const i = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(i) === "[object Date]") return rn.datetime;
          if (typeof i == "string" && (o = true, i.split(zo).length > 1)) return rn.alphanumeric;
        }
        return o ? rn.text : rn.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return no(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : rn[e.columnDef.sortingFn];
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
  }, wd = [
    Hu,
    ld,
    nd,
    od,
    Bu,
    Wu,
    ad,
    cd,
    xd,
    ed,
    ud,
    dd,
    pd,
    fd,
    id
  ];
  function Cd(e) {
    var t, n;
    const o = [
      ...wd,
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
        const f = Ct(g, r.options);
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
      _getDefaultColumnDef: V(() => [
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
      }, H(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: V(() => [
        r._getColumnDefs()
      ], (g) => {
        const f = function(h, m, v) {
          return v === void 0 && (v = 0), h.map((b) => {
            const C = Vu(r, b, v, m), S = b;
            return C.columns = S.columns ? f(S.columns, C, v + 1) : [], C;
          });
        };
        return f(g);
      }, H(e, "debugColumns")),
      getAllFlatColumns: V(() => [
        r.getAllColumns()
      ], (g) => g.flatMap((f) => f.getFlatColumns()), H(e, "debugColumns")),
      _getAllFlatColumnsById: V(() => [
        r.getAllFlatColumns()
      ], (g) => g.reduce((f, h) => (f[h.id] = h, f), {}), H(e, "debugColumns")),
      getAllLeafColumns: V(() => [
        r.getAllColumns(),
        r._getOrderColumnsFn()
      ], (g, f) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return f(h);
      }, H(e, "debugColumns")),
      getColumn: (g) => r._getAllFlatColumnsById()[g]
    };
    Object.assign(r, p);
    for (let g = 0; g < r._features.length; g++) {
      const f = r._features[g];
      f == null || f.createTable == null || f.createTable(r);
    }
    return r;
  }
  function _d() {
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
        for (let d = 0; d < r.length; d++) {
          const u = Bo(e, e._getRowId(r[d], d, s), r[d], d, i, void 0, s == null ? void 0 : s.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var a;
            u.originalSubRows = e.options.getSubRows(r[d], d), (a = u.originalSubRows) != null && a.length && (u.subRows = o(u.originalSubRows, i + 1, u));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, H(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function Sd(e) {
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
  function jd(e, t, n) {
    return n.options.filterFromLeafRows ? Rd(e, t, n) : Md(e, t, n);
  }
  function Rd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var p;
        let f = a[g];
        const h = Bo(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
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
  function Md(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let f = a[g];
        if (t(f)) {
          var p;
          if ((p = f.subRows) != null && p.length && d < s) {
            const m = Bo(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
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
  function $d() {
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
      return jd(t.rows, p, e);
    }, H(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function Ad(e) {
    return (t) => V(() => [
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
      } : p = Sd({
        rows: s,
        flatRows: l,
        rowsById: a
      }), p.flatRows = [];
      const g = (f) => {
        p.flatRows.push(f), f.subRows.length && f.subRows.forEach(g);
      };
      return p.rows.forEach(g), p;
    }, H(t.options, "debugTable"));
  }
  function Pd() {
    return (e) => V(() => [
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
              const S = u.getValue(h.id), w = p.getValue(h.id), j = S === void 0, R = w === void 0;
              if (j || R) {
                if (v === "first") return j ? -1 : 1;
                if (v === "last") return j ? 1 : -1;
                C = j && R ? 0 : j ? v : -v;
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
    }, H(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function sn(e, t) {
    return e ? Id(e) ? y.createElement(e, t) : e : null;
  }
  function Id(e) {
    return Fd(e) || typeof e == "function" || zd(e);
  }
  function Fd(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function zd(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Td(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: Cd(t)
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
  function Nt(e, t, n) {
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
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, v = m / 16, b = (C, S) => {
          for (C = String(C); C.length < S; ) C = " " + C;
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
  function zr(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const kd = (e, t) => Math.abs(e - t) < 1.01, Dd = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, Tr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Ed = (e) => e, Od = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, Nd = (e, t) => {
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
    if (r(Tr(n)), !o.ResizeObserver) return () => {
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
        r(Tr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return i.observe(n, {
      box: "border-box"
    }), () => {
      i.unobserve(n);
    };
  }, kr = {
    passive: true
  }, Dr = typeof window > "u" ? true : "onscrollend" in window, Ld = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const i = e.options.useScrollendEvent && Dr ? () => {
    } : Dd(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), s = (u) => () => {
      const { horizontal: p, isRtl: g } = e.options;
      r = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(r, u);
    }, l = s(true), a = s(false);
    n.addEventListener("scroll", l, kr);
    const d = e.options.useScrollendEvent && Dr;
    return d && n.addEventListener("scrollend", a, kr), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, Vd = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Hd = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, i;
    const s = e + t;
    (i = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || i.call(r, {
      [o.options.horizontal ? "left" : "top"]: s,
      behavior: n
    });
  };
  class Bd {
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
          getItemKey: Ed,
          rangeExtractor: Od,
          onChange: () => {
          },
          measureElement: Vd,
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
      }, this.maybeNotify = Nt(() => (this.calculateRange(), [
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
      }, this.getMeasurementOptions = Nt(() => [
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
      }), this.getMeasurements = Nt(() => [
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
            const w = p[m], j = w !== void 0 ? u[w] : void 0;
            v = j ? j.end + this.options.gap : o + r;
          } else {
            const w = this.options.lanes === 1 ? u[g - 1] : this.getFurthestMeasurement(u, g);
            v = w ? w.end + this.options.gap : o + r, m = w ? w.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const b = a.get(f), C = typeof b == "number" ? b : this.options.estimateSize(g), S = v + C;
          u[g] = {
            index: g,
            start: v,
            size: C,
            end: S,
            key: f,
            lane: m
          }, p[m] = g;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Nt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, i) => this.range = n.length > 0 && o > 0 ? Wd({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: i
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Nt(() => {
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
      }, this.getVirtualItems = Nt(() => [
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
        if (o.length !== 0) return zr(o[Ri(0, o.length - 1, (r) => zr(o[r]).start, n)]);
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
              kd(m[0], h) || a(g);
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
  const Ri = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, i = n(r);
      if (i < o) e = r + 1;
      else if (i > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Wd({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, i = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let s = Ri(0, r, i, n), l = s;
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
  const Er = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Gd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (i, s) => {
        var l;
        e && s ? Bi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, i, s);
      }
    }, [r] = y.useState(() => new Bd(o));
    return r.setOptions(o), Er(() => r._didMount(), []), Er(() => r._willUpdate()), r;
  }
  function Ud(e) {
    return Gd({
      observeElementRect: Nd,
      observeElementOffset: Ld,
      scrollToFn: Hd,
      ...e
    });
  }
  function qd(e, t) {
    var _a2, _b;
    let n = e != null ? typeof e == "object" ? JSON.stringify(e) : String(e) : "";
    if (t == null ? void 0 : t.format) switch (t.format.type) {
      case "number":
        (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (n = di(Number(e), {
          decimals: t.format.numberDecimals,
          prefix: t.format.numberPrefix,
          suffix: t.format.numberSuffix,
          thousands: t.format.numberThousandsSeparator
        }));
        break;
      case "date":
        n = fi(e, t.format.dateFormat, t.format.dateInputFormat);
        break;
      case "boolean":
        n = So(e, t.format.booleanTrue, t.format.booleanFalse);
        break;
      case "string":
        n = gi(n, t.format);
        break;
    }
    if (!t) return {
      displayValue: n,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", r = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? pi(e, t.format.dateInputFormat) : e, i = {}, s = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const l of t.cellStyle) if (l.logic && cu(l.logic, r)) {
        if (l.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const a = Ut(l.backgroundColor);
          a ? i.background = a : i.backgroundColor = l.backgroundColor;
        }
        if (l.textColor && !("color" in s) && !("background" in s)) {
          const a = Ut(l.textColor);
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
  function Or({ value: e, config: t }) {
    const { displayValue: n, textSx: o, bgSx: r } = y.useMemo(() => qd(e, t), [
      e,
      t
    ]);
    return c.jsx(W, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        ...r
      },
      children: c.jsx(I, {
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
  function Nr(e) {
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
  function Yd(e) {
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
    const [C, S] = y.useState({}), [w, j] = y.useState(() => {
      if (o) return {};
      const M = `jtc_col_sizes_${t}`;
      try {
        const P = localStorage.getItem(M);
        if (P) return JSON.parse(P);
      } catch {
      }
      const D = {};
      return n.forEach((P) => {
        P.width && (D[P.path] = P.width);
      }), r === true && (D.__select__ = 48), D;
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
    ]), [A, k] = y.useState({
      pageIndex: 0,
      pageSize: R
    });
    y.useEffect(() => {
      k((M) => M.pageSize === R ? M : {
        pageIndex: 0,
        pageSize: R
      });
    }, [
      R
    ]);
    const z = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(p, 1)
    } : A, [
      l,
      p,
      A
    ]), _ = y.useMemo(() => Nr(s), [
      s
    ]);
    return {
      sorting: g,
      columnFilters: h,
      globalFilter: v,
      rowSelection: C,
      columnSizing: w,
      pagination: A,
      effectivePagination: z,
      setSorting: f,
      setColumnFilters: m,
      setGlobalFilter: b,
      setRowSelection: S,
      setColumnSizing: j,
      setPagination: k,
      pageSizeOptions: _,
      parsePageSizeOptions: Nr
    };
  }
  function Lr(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = pi(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  function Vr(e) {
    return (t, n, o) => Lr(t.getValue(o), e) - Lr(n.getValue(o), e);
  }
  function Jd(e) {
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
          sortingFn: Vr(g)
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
          sortingFn: Vr(f)
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
  const Xd = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Kd = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, Qd = (e) => {
    const { children: t, value: n, ...o } = e;
    return c.jsx(_e, {
      ...o,
      value: n,
      children: c.jsx(I, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, Zd = () => {
    var _a2, _b;
    const e = y.useContext(Wi), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = Gi("oid"), i = ts("oid"), s = Cn(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (i == null) return [];
      let $;
      if (typeof i == "string") try {
        $ = JSON.parse(i);
      } catch {
        return [];
      }
      else $ = i;
      return Array.isArray($) ? $ : typeof $ == "object" && $ !== null ? [
        $
      ] : [];
    }, [
      i
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: p, rows: g } = Tu(d, u), f = y.useMemo(() => ui(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = n.data.tableDensity || "standard", m = Number(n.data.tableRowHeight) || Xd[h] || 52, v = Number(n.data.tableHeaderHeight) || Kd[h] || 56, b = y.useMemo(() => g.map(($, E) => ({
      __id: E,
      ...$
    })), [
      g
    ]), C = y.useMemo(() => Jd({
      columnConfig: f,
      analysisColumns: p,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: n.data.tableFiltering === true,
        tableRowSelection: n.data.tableRowSelection === true
      },
      renderConfiguredCell: ($, E) => c.jsx(Or, {
        value: $,
        config: E
      }),
      renderAutoDetectedCell: ($) => c.jsx(Or, {
        value: $
      }),
      renderSelectionHeader: ($) => c.jsx(yn, {
        size: "small",
        indeterminate: $.getIsSomePageRowsSelected(),
        checked: $.getIsAllPageRowsSelected(),
        onChange: $.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: ($) => c.jsx(yn, {
        size: "small",
        checked: $.getIsSelected(),
        onChange: $.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      f,
      p,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection
    ]), S = n.data.tableAutoSize === true, { sorting: w, columnFilters: j, globalFilter: R, rowSelection: A, columnSizing: k, pagination: z, effectivePagination: _, setSorting: M, setColumnFilters: D, setGlobalFilter: P, setRowSelection: N, setColumnSizing: O, setPagination: L, pageSizeOptions: T } = Yd({
      widgetId: o,
      columnConfig: f,
      tableAutoSize: S,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: n.data.tableFiltering === true,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: b.length
    }), G = Td({
      data: b,
      columns: C,
      getCoreRowModel: _d(),
      getSortedRowModel: Pd(),
      getFilteredRowModel: $d(),
      getPaginationRowModel: Ad(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: "includesString",
      columnResizeMode: "onChange",
      enableColumnResizing: !S,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3
      },
      state: {
        sorting: w,
        columnFilters: j,
        globalFilter: R,
        pagination: _,
        rowSelection: A,
        columnSizing: k
      },
      onSortingChange: M,
      onColumnFiltersChange: D,
      onGlobalFilterChange: P,
      onPaginationChange: n.data.tablePagination !== false ? L : void 0,
      onRowSelectionChange: N,
      onColumnSizingChange: O,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), Y = y.useRef(null), ie = y.useRef(null), [ae, Se] = y.useState({}), [Ce, ge] = y.useState(null), ee = y.useRef(null), [F, se] = y.useState(void 0), [te, $e] = y.useState(void 0), Ee = y.useCallback(($, E) => {
      var _a3;
      ee.current = $;
      const X = $.id, Re = w.find((Ye) => Ye.id === X), Ie = (_a3 = j.find((Ye) => Ye.id === X)) == null ? void 0 : _a3.value;
      se(Re), $e(Ie), ge(E);
    }, [
      w,
      j
    ]), je = y.useCallback(() => {
      ge(null);
    }, []);
    y.useEffect(() => {
      if (!S) return;
      const $ = ie.current;
      if (!$) return;
      const E = new ResizeObserver(() => {
        const X = $.querySelector("tr[data-row-index]");
        if (!X) return;
        const Re = X.querySelectorAll("td"), Ie = G.getHeaderGroups()[0];
        if (!Ie || Re.length !== Ie.headers.length) return;
        const Ye = {};
        Ie.headers.forEach((Kt, bt) => {
          const Mn = Re[bt];
          Mn && (Ye[Kt.id] = Mn.getBoundingClientRect().width);
        }), Se(Ye);
      });
      return E.observe($), () => E.disconnect();
    }, [
      S,
      G
    ]);
    const ce = y.useMemo(() => {
      const $ = {
        tableLayout: S ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) $["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const E = n.data.horizontalCellBorderWidth ?? 1, X = $n(n.data.horizontalCellBorderColor);
        $["& .MuiTableCell-root"] = {
          ...$["& .MuiTableCell-root"],
          borderBottom: `${E}px solid`,
          borderBottomColor: X || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const E = n.data.verticalCellBorderWidth ?? 1, X = $n(n.data.verticalCellBorderColor);
        $["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${E}px solid`,
          borderRightColor: X || "divider"
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
      S
    ]), xe = n.data.tableHeaderBgColor, ue = n.data.tableHeaderTextColor, He = n.data.tableHeaderFontSize, jt = y.useMemo(() => ({
      height: v,
      whiteSpace: "nowrap",
      ...ue && {
        color: ue
      },
      ...He && {
        fontSize: `${He}px`
      }
    }), [
      v,
      ue,
      He
    ]), rt = y.useMemo(() => ({
      ...ue && {
        color: ue
      },
      ...He && {
        fontSize: `${He}px`
      }
    }), [
      ue,
      He
    ]), ut = n.data.noCard === true, dt = n.data.headerBorderWidth ?? 0, Be = $n(n.data.headerBorderColor), pt = y.useMemo(() => {
      const $ = n.data.tableHeaderElevation ?? 6, E = ut ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: $ > 0 ? s.shadows[$] : "none"
      };
      dt > 0 && (E["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${dt}px`,
        backgroundColor: Be || s.palette.divider,
        pointerEvents: "none"
      });
      const X = xe ? Ut(xe) : null;
      return X ? {
        ...E,
        background: X
      } : xe ? {
        ...E,
        backgroundColor: xe
      } : E;
    }, [
      ut,
      xe,
      s.shadows,
      s.palette.divider,
      n.data.tableHeaderElevation,
      dt,
      Be
    ]), Rt = y.useMemo(() => {
      const $ = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, E = n.data.borderWidth, X = n.data.borderStyle || "solid", Re = $n(n.data.borderColor), Ie = n.data.borderRadius;
      return E && E > 0 && ($.border = `${E}px ${X}`, $.borderColor = Re || "divider"), Ie && ($.borderRadius = Ie), $;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Mt = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), it = y.useCallback(($) => S ? ae[$.id] ?? "auto" : $.getSize(), [
      S,
      ae
    ]), $t = y.useMemo(() => ({
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
    ]), et = n.data.tableStripedColor, st = et ? Ut(et) : null, At = y.useCallback(($) => {
      if (!(!et || $ % 2 === 0)) return {
        background: st || et,
        ...st ? {} : {
          backgroundColor: et
        }
      };
    }, [
      et,
      st
    ]), lt = G.getRowModel().rows, Dt = Ud({
      count: lt.length,
      getScrollElement: () => Y.current,
      estimateSize: () => m,
      overscan: 10
    }), We = n.data.tableVirtualizeThreshold ?? 50, Pe = n.data.tablePagination === false && lt.length > We ? Dt.getVirtualItems() : null, vt = Pe && Pe.length > 0 ? Pe[0].start : 0, Rn = Pe && Pe.length > 0 ? Dt.getTotalSize() - (Pe[Pe.length - 1].end ?? 0) : 0;
    return c.jsxs(Ui, {
      isValidType: a,
      data: r,
      oidValue: i,
      children: [
        c.jsx(qi, {
          data: r,
          widget: n
        }),
        a && C.length > 0 ? c.jsxs(W, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(W, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(Ae, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: R,
                onChange: ($) => P($.target.value),
                placeholder: x.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(Co, {
                      position: "start",
                      children: c.jsx(ci, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            c.jsx(W, {
              sx: Rt,
              children: c.jsx(Wa, {
                ref: Y,
                sx: Mt,
                children: c.jsxs(Ia, {
                  size: h === "compact" ? "small" : "medium",
                  sx: ce,
                  children: [
                    c.jsxs(Ja, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...pt,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: [
                        G.getHeaderGroups().map(($) => c.jsx(Ot, {
                          children: $.headers.map((E) => {
                            const X = E.column.getCanSort(), Re = E.column.getIsSorted(), Ie = E.column.columnDef.meta, Ye = E.column.id === "__select__", Kt = !S;
                            return c.jsxs(tt, {
                              component: "th",
                              colSpan: E.colSpan,
                              align: (Ie == null ? void 0 : Ie.align) || "left",
                              padding: Ye ? "checkbox" : "normal",
                              sx: {
                                width: it(E),
                                minWidth: Ye ? 48 : 40,
                                position: "relative",
                                ...jt
                              },
                              children: [
                                Ye ? sn(E.column.columnDef.header, E.getContext()) : c.jsxs(W, {
                                  sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: (Ie == null ? void 0 : Ie.align) === "right" ? "flex-end" : (Ie == null ? void 0 : Ie.align) === "center" ? "center" : "space-between",
                                    width: "100%"
                                  },
                                  children: [
                                    X ? c.jsx(Cc, {
                                      active: Re !== false,
                                      direction: Re === "desc" ? "desc" : "asc",
                                      onClick: E.column.getToggleSortingHandler(),
                                      children: c.jsx(I, {
                                        variant: "body2",
                                        component: "span",
                                        fontWeight: "medium",
                                        noWrap: true,
                                        sx: rt,
                                        children: sn(E.column.columnDef.header, E.getContext())
                                      })
                                    }) : c.jsx(I, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: rt,
                                      children: sn(E.column.columnDef.header, E.getContext())
                                    }),
                                    n.data.tableColumnMenu !== false && c.jsx(Ne, {
                                      title: x.t("json_table_column_menu"),
                                      children: c.jsx(we, {
                                        size: "small",
                                        "aria-label": x.t("json_table_column_menu"),
                                        onClick: (bt) => {
                                          bt.stopPropagation(), Ee(E.column, bt.currentTarget);
                                        },
                                        sx: {
                                          ml: 0.5,
                                          opacity: 0.6
                                        },
                                        children: c.jsx(Sc, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  ]
                                }),
                                Kt && E.column.getCanResize() && c.jsx(W, {
                                  className: "resize-handle",
                                  onMouseDown: E.getResizeHandler(),
                                  onTouchStart: E.getResizeHandler(),
                                  onClick: (bt) => bt.stopPropagation(),
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
                                    opacity: E.column.getIsResizing() ? 1 : 0,
                                    bgcolor: E.column.getIsResizing() ? "primary.main" : "divider",
                                    transition: "opacity 0.15s",
                                    "&:hover": {
                                      opacity: 1,
                                      bgcolor: "primary.light"
                                    }
                                  }
                                })
                              ]
                            }, E.id);
                          })
                        }, $.id)),
                        n.data.tableFiltering === true && c.jsx(Ot, {
                          children: (_a2 = G.getHeaderGroups()[0]) == null ? void 0 : _a2.headers.map(($) => {
                            if ($.column.id === "__select__") return c.jsx(tt, {
                              component: "th",
                              colSpan: $.colSpan,
                              padding: "checkbox",
                              sx: {
                                width: it($),
                                py: 0.5,
                                px: 0.5
                              }
                            }, $.id);
                            if (!$.column.getCanFilter()) return c.jsx(tt, {
                              component: "th",
                              colSpan: $.colSpan,
                              sx: {
                                width: it($),
                                py: 0.5,
                                px: 0.5
                              }
                            }, $.id);
                            const E = $.column.getFilterValue() ?? "";
                            return c.jsx(tt, {
                              component: "th",
                              colSpan: $.colSpan,
                              sx: {
                                width: it($),
                                py: 0.5,
                                px: 0.5
                              },
                              children: c.jsx(Ae, {
                                size: "small",
                                variant: "standard",
                                fullWidth: true,
                                value: E,
                                onChange: (X) => $.column.setFilterValue(X.target.value || void 0),
                                placeholder: x.t("json_table_filter_placeholder"),
                                slotProps: {
                                  input: {
                                    endAdornment: E ? c.jsx(Co, {
                                      position: "end",
                                      children: c.jsx(Ne, {
                                        title: x.t("json_table_filter_clear"),
                                        children: c.jsx(we, {
                                          size: "small",
                                          onClick: () => $.column.setFilterValue(void 0),
                                          "aria-label": x.t("json_table_filter_clear"),
                                          children: c.jsx(_o, {
                                            fontSize: "inherit"
                                          })
                                        })
                                      })
                                    }) : void 0
                                  }
                                }
                              })
                            }, $.id);
                          })
                        })
                      ]
                    }),
                    c.jsx(Da, {
                      ref: ie,
                      children: Pe ? c.jsxs(c.Fragment, {
                        children: [
                          vt > 0 && c.jsx(Ot, {
                            children: c.jsx(tt, {
                              colSpan: C.length,
                              sx: {
                                height: vt,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          Pe.map(($) => {
                            const E = lt[$.index], X = $.index;
                            return c.jsx(Ot, {
                              "data-row-index": X,
                              sx: {
                                height: m,
                                ...At(X)
                              },
                              children: E.getVisibleCells().map((Re) => {
                                var _a3;
                                const Ie = Re.column.id === "__select__";
                                return c.jsx(tt, {
                                  align: ((_a3 = Re.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                                  padding: Ie ? "checkbox" : "normal",
                                  sx: $t,
                                  children: sn(Re.column.columnDef.cell, Re.getContext())
                                }, Re.id);
                              })
                            }, E.id);
                          }),
                          Rn > 0 && c.jsx(Ot, {
                            children: c.jsx(tt, {
                              colSpan: C.length,
                              sx: {
                                height: Rn,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : lt.map(($, E) => c.jsx(Ot, {
                        "data-row-index": E,
                        sx: {
                          height: m,
                          ...At(E)
                        },
                        children: $.getVisibleCells().map((X) => {
                          var _a3;
                          const Re = X.column.id === "__select__";
                          return c.jsx(tt, {
                            align: ((_a3 = X.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                            padding: Re ? "checkbox" : "normal",
                            sx: $t,
                            children: sn(X.column.columnDef.cell, X.getContext())
                          }, X.id);
                        })
                      }, $.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && c.jsx(fc, {
              component: "div",
              count: G.getFilteredRowModel().rows.length,
              page: z.pageIndex,
              rowsPerPage: z.pageSize,
              rowsPerPageOptions: T,
              onPageChange: ($, E) => L((X) => ({
                ...X,
                pageIndex: E
              })),
              onRowsPerPageChange: ($) => L({
                pageIndex: 0,
                pageSize: parseInt($.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(I, {
                variant: "body2",
                component: "span",
                children: x.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: $, to: E, count: X }) => c.jsx(I, {
                variant: "body2",
                component: "span",
                children: `${$}\u2013${E} / ${X}`
              }),
              slots: {
                menuItem: Qd
              },
              slotProps: {
                select: {
                  renderValue: ($) => c.jsx(I, {
                    variant: "body2",
                    component: "span",
                    children: String($)
                  })
                }
              }
            }),
            c.jsxs(Yi, {
              anchorEl: Ce,
              open: !!Ce,
              onClose: je,
              children: [
                c.jsxs(_e, {
                  onClick: () => {
                    ee.current && M([
                      {
                        id: ee.current.id,
                        desc: false
                      }
                    ]), je();
                  },
                  children: [
                    c.jsx(ai, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(I, {
                      variant: "body2",
                      children: x.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(_e, {
                  onClick: () => {
                    ee.current && M([
                      {
                        id: ee.current.id,
                        desc: true
                      }
                    ]), je();
                  },
                  children: [
                    c.jsx(li, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(I, {
                      variant: "body2",
                      children: x.t("json_table_sort_desc")
                    })
                  ]
                }),
                F && c.jsx(_e, {
                  onClick: () => {
                    M([]), je();
                  },
                  children: c.jsx(I, {
                    variant: "body2",
                    children: x.t("json_table_sort_clear")
                  })
                }),
                n.data.tableFiltering === true && ((_b = ee.current) == null ? void 0 : _b.getCanFilter()) === true && te && c.jsxs(_e, {
                  onClick: () => {
                    var _a3;
                    (_a3 = ee.current) == null ? void 0 : _a3.setFilterValue(void 0), je();
                  },
                  children: [
                    c.jsx(_o, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(I, {
                      variant: "body2",
                      children: x.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            })
          ]
        }) : c.jsx(W, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: c.jsx(I, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? x.t("json_table_no_oid") : a ? f.length > 0 && C.length === 0 ? x.t("json_table_all_columns_hidden") : x.t("json_table_no_data") : x.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, ep = [
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
  To = class extends x {
    static createObjectFields() {
      const t = Ji([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (i, s, l, a) => {
          if (!s.oid) {
            for (const d of ep) delete s[d];
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
              ...Ko()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...To.createObjectFields(),
              ...Eu()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Ko({
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
      return To.getWidgetInfo();
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
      return Xi(this.wrapContent(c.jsx(Zd, {})), n);
    }
  };
});
export {
  __tla,
  To as default
};
