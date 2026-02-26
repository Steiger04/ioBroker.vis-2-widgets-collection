import { g as me, a as ye, u as ve, Z as $i, _ as Ai, $ as vn, a0 as Et, h as Lt, j as c, s as U, d as oe, e as xe, a1 as Ho, m as de, a2 as Er, b as ne, P as nt, B as Ln, c as le, I as we, W as B, a3 as co, M as uo, X as $t, a4 as on, a5 as Pi, f as Bo, a6 as Ii, a7 as Po, i as ze, a8 as Or, a9 as un, U as Fi, aa as zi, T as P, ab as Wo, ac as ki, ad as Nr, ae as po, af as Ti, ag as Go, ah as Di, R as Vt, o as G, ai as Ae, G as b, aj as dn, ak as pn, al as Ei, am as Oi, D as Ni, w as Ht, an as Li, ao as Vi, C as ut, F as Kn, ap as Hi, n as Bi, q as Wi, x as Gi, y as Ui, aq as qi, A as Yi, z as Uo, E as Ji, __tla as __tla_0 } from "./useData-CoMv8b7s.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as fn, __tla as __tla_2 } from "./Checkbox-CjPg9dWs.js";
import { S as Xi, __tla as __tla_3 } from "./Slider-DgHpn0IP.js";
import { F as gt, __tla as __tla_4 } from "./FormControlLabel-BAm8tbJK.js";
import { S as At, __tla as __tla_5 } from "./Switch-hq_W31Xv.js";
import { M as _e, __tla as __tla_6 } from "./MenuItem-CzBojcp8.js";
import { S as Ee, __tla as __tla_7 } from "./Stack-CzOOYs5P.js";
import { T as Lr, a as Vn, __tla as __tla_8 } from "./ToggleButtonGroup-DG2CiFmV.js";
import { C as Vr, __tla as __tla_9 } from "./Close-CQt1dGJP.js";
import { B as gn, __tla as __tla_10 } from "./Button-BOWf2z70.js";
import { D as Ki, a as Qi, b as Zi, __tla as __tla_11 } from "./DialogTitle-CJWtNrVp.js";
import { u as es, __tla as __tla_12 } from "./useOidValue-DFyPWDrl.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Dz75iFvF.js";
import { __tla as __tla_14 } from "./listItemTextClasses-CJ06hn_z.js";
let Ao;
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
  function ts(e) {
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
  const ns = (e) => {
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
    return xe(o, ts, n);
  }, os = U("div", {
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
  }))), rs = U("div", {
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
  }), is = U("div", {
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
  }), fo = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: i, className: s, collapsedSize: l = "0px", component: a, easing: d, in: u, onEnter: p, onEntered: g, onEntering: f, onExit: h, onExited: m, onExiting: v, orientation: x = "vertical", style: _, timeout: S = $i.standard, TransitionComponent: w = Ai, ...j } = o, R = {
      ...o,
      orientation: x,
      collapsedSize: l
    }, A = ns(R), D = vn(), F = Et(), C = y.useRef(null), M = y.useRef(), k = typeof l == "number" ? `${l}px` : l, T = x === "horizontal", N = T ? "width" : "height", O = y.useRef(null), L = Lt(n, O), z = (I) => (se) => {
      if (I) {
        const te = O.current;
        se === void 0 ? I(te) : I(te, se);
      }
    }, W = () => C.current ? C.current[T ? "clientWidth" : "clientHeight"] : 0, Y = z((I, se) => {
      C.current && T && (C.current.style.position = "absolute"), I.style[N] = k, p && p(I, se);
    }), ie = z((I, se) => {
      const te = W();
      C.current && T && (C.current.style.position = "");
      const { duration: $e, easing: Oe } = Ho({
        style: _,
        timeout: S,
        easing: d
      }, {
        mode: "enter"
      });
      if (S === "auto") {
        const je = D.transitions.getAutoHeightDuration(te);
        I.style.transitionDuration = `${je}ms`, M.current = je;
      } else I.style.transitionDuration = typeof $e == "string" ? $e : `${$e}ms`;
      I.style[N] = `${te}px`, I.style.transitionTimingFunction = Oe, f && f(I, se);
    }), ae = z((I, se) => {
      I.style[N] = "auto", g && g(I, se);
    }), Se = z((I) => {
      I.style[N] = `${W()}px`, h && h(I);
    }), Ce = z(m), ge = z((I) => {
      const se = W(), { duration: te, easing: $e } = Ho({
        style: _,
        timeout: S,
        easing: d
      }, {
        mode: "exit"
      });
      if (S === "auto") {
        const Oe = D.transitions.getAutoHeightDuration(se);
        I.style.transitionDuration = `${Oe}ms`, M.current = Oe;
      } else I.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
      I.style[N] = k, I.style.transitionTimingFunction = $e, v && v(I);
    }), ee = (I) => {
      S === "auto" && F.start(M.current || 0, I), r && r(O.current, I);
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
      children: (I, { ownerState: se, ...te }) => c.jsx(os, {
        as: a,
        className: oe(A.root, s, {
          entered: A.entered,
          exited: !u && k === "0px" && A.hidden
        }[I]),
        style: {
          [T ? "minWidth" : "minHeight"]: k,
          ..._
        },
        ref: L,
        ownerState: {
          ...R,
          state: I
        },
        ...te,
        children: c.jsx(rs, {
          ownerState: {
            ...R,
            state: I
          },
          className: A.wrapper,
          ref: C,
          children: c.jsx(is, {
            ownerState: {
              ...R,
              state: I
            },
            className: A.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  fo && (fo.muiSupportAuto = true);
  const Hr = y.createContext({});
  function ss(e) {
    return me("MuiAccordion", e);
  }
  const _n = ye("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), ls = (e) => {
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
    }, ss, t);
  }, as = U(nt, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${_n.region}`]: t.region
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
      [`&.${_n.expanded}`]: {
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
      [`&.${_n.disabled}`]: {
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
          [`&.${_n.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), cs = U("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Sn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: i, defaultExpanded: s = false, disabled: l = false, disableGutters: a = false, expanded: d, onChange: u, square: p = false, slots: g = {}, slotProps: f = {}, TransitionComponent: h, TransitionProps: m, ...v } = o, [x, _] = Er({
      controlled: d,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), S = y.useCallback((W) => {
      _(!x), u && u(W, !x);
    }, [
      x,
      u,
      _
    ]), [w, ...j] = y.Children.toArray(r), R = y.useMemo(() => ({
      expanded: x,
      disabled: l,
      disableGutters: a,
      toggle: S
    }), [
      x,
      l,
      a,
      S
    ]), A = {
      ...o,
      square: p,
      disabled: l,
      disableGutters: a,
      expanded: x
    }, D = ls(A), F = {
      transition: h,
      ...g
    }, C = {
      transition: m,
      ...f
    }, M = {
      slots: F,
      slotProps: C
    }, [k, T] = ne("root", {
      elementType: as,
      externalForwardedProps: {
        ...M,
        ...v
      },
      className: oe(D.root, i),
      shouldForwardComponentProp: true,
      ownerState: A,
      ref: n,
      additionalProps: {
        square: p
      }
    }), [N, O] = ne("heading", {
      elementType: cs,
      externalForwardedProps: M,
      className: D.heading,
      ownerState: A
    }), [L, z] = ne("transition", {
      elementType: fo,
      externalForwardedProps: M,
      ownerState: A
    });
    return c.jsxs(k, {
      ...T,
      children: [
        c.jsx(N, {
          ...O,
          children: c.jsx(Hr.Provider, {
            value: R,
            children: w
          })
        }),
        c.jsx(L, {
          in: x,
          timeout: "auto",
          ...z,
          children: c.jsx("div", {
            "aria-labelledby": w.props.id,
            id: w.props["aria-controls"],
            role: "region",
            className: D.region,
            children: j
          })
        })
      ]
    });
  });
  function us(e) {
    return me("MuiAccordionDetails", e);
  }
  ye("MuiAccordionDetails", [
    "root"
  ]);
  const ds = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, us, t);
  }, ps = U("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(de(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), jn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...i } = o, s = o, l = ds(s);
    return c.jsx(ps, {
      className: oe(l.root, r),
      ref: n,
      ownerState: s,
      ...i
    });
  });
  function fs(e) {
    return me("MuiAccordionSummary", e);
  }
  const Ot = ye("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), gs = (e) => {
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
    }, fs, t);
  }, hs = U(Ln, {
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
      [`&.${Ot.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Ot.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Ot.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Ot.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), ms = U("span", {
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
          [`&.${Ot.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), ys = U("span", {
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
    [`&.${Ot.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Rn = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: i, expandIcon: s, focusVisibleClassName: l, onClick: a, slots: d, slotProps: u, ...p } = o, { disabled: g = false, disableGutters: f, expanded: h, toggle: m } = y.useContext(Hr), v = (C) => {
      m && m(C), a && a(C);
    }, x = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: f
    }, _ = gs(x), S = {
      slots: d,
      slotProps: u
    }, [w, j] = ne("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: oe(_.root, i),
      elementType: hs,
      externalForwardedProps: {
        ...S,
        ...p
      },
      ownerState: x,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: oe(_.focusVisible, l)
      },
      getSlotProps: (C) => ({
        ...C,
        onClick: (M) => {
          var _a2;
          (_a2 = C.onClick) == null ? void 0 : _a2.call(C, M), v(M);
        }
      })
    }), [R, A] = ne("content", {
      className: _.content,
      elementType: ms,
      externalForwardedProps: S,
      ownerState: x
    }), [D, F] = ne("expandIconWrapper", {
      className: _.expandIconWrapper,
      elementType: ys,
      externalForwardedProps: S,
      ownerState: x
    });
    return c.jsxs(w, {
      ...j,
      children: [
        c.jsx(R, {
          ...A,
          children: r
        }),
        s && c.jsx(D, {
          ...F,
          children: s
        })
      ]
    });
  });
  function vs(e) {
    return me("MuiAlert", e);
  }
  const qo = ye("MuiAlert", [
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
  }), "SuccessOutlined"), bs = le(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), ws = le(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), Cs = le(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), _s = le(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Ss = (e) => {
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
    return xe(i, vs, r);
  }, js = U(nt, {
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
    const t = e.palette.mode === "light" ? co : uo, n = e.palette.mode === "light" ? uo : co;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter($t([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${qo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter($t([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${qo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter($t([
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
  })), Rs = U("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), Ms = U("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), $s = U("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), Yo = {
    success: c.jsx(xs, {
      fontSize: "inherit"
    }),
    warning: c.jsx(bs, {
      fontSize: "inherit"
    }),
    error: c.jsx(ws, {
      fontSize: "inherit"
    }),
    info: c.jsx(Cs, {
      fontSize: "inherit"
    })
  }, Jo = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: i, className: s, closeText: l = "Close", color: a, components: d = {}, componentsProps: u = {}, icon: p, iconMapping: g = Yo, onClose: f, role: h = "alert", severity: m = "success", slotProps: v = {}, slots: x = {}, variant: _ = "standard", ...S } = o, w = {
      ...o,
      color: a,
      severity: m,
      variant: _,
      colorSeverity: a || m
    }, j = Ss(w), R = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...x
      },
      slotProps: {
        ...u,
        ...v
      }
    }, [A, D] = ne("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: oe(j.root, s),
      elementType: js,
      externalForwardedProps: {
        ...R,
        ...S
      },
      ownerState: w,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [F, C] = ne("icon", {
      className: j.icon,
      elementType: Rs,
      externalForwardedProps: R,
      ownerState: w
    }), [M, k] = ne("message", {
      className: j.message,
      elementType: Ms,
      externalForwardedProps: R,
      ownerState: w
    }), [T, N] = ne("action", {
      className: j.action,
      elementType: $s,
      externalForwardedProps: R,
      ownerState: w
    }), [O, L] = ne("closeButton", {
      elementType: we,
      externalForwardedProps: R,
      ownerState: w
    }), [z, W] = ne("closeIcon", {
      elementType: _s,
      externalForwardedProps: R,
      ownerState: w
    });
    return c.jsxs(A, {
      ...D,
      children: [
        p !== false ? c.jsx(F, {
          ...C,
          children: p || g[m] || Yo[m]
        }) : null,
        c.jsx(M, {
          ...k,
          children: i
        }),
        r != null ? c.jsx(T, {
          ...N,
          children: r
        }) : null,
        r == null && f ? c.jsx(T, {
          ...N,
          children: c.jsx(O, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: f,
            ...L,
            children: c.jsx(z, {
              fontSize: "small",
              ...W
            })
          })
        }) : null
      ]
    });
  });
  var He = "top", Qe = "bottom", Ze = "right", Be = "left", Io = "auto", xn = [
    He,
    Qe,
    Ze,
    Be
  ], Bt = "start", hn = "end", As = "clippingParents", Br = "viewport", Yt = "popper", Ps = "reference", Xo = xn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Bt,
      t + "-" + hn
    ]);
  }, []), Wr = [].concat(xn, [
    Io
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Bt,
      t + "-" + hn
    ]);
  }, []), Is = "beforeRead", Fs = "read", zs = "afterRead", ks = "beforeMain", Ts = "main", Ds = "afterMain", Es = "beforeWrite", Os = "write", Ns = "afterWrite", Ls = [
    Is,
    Fs,
    zs,
    ks,
    Ts,
    Ds,
    Es,
    Os,
    Ns
  ];
  function st(e) {
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
  function It(e) {
    var t = Ue(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Ke(e) {
    var t = Ue(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Fo(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ue(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Vs(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
      !Ke(i) || !st(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
        var l = r[s];
        l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
      }));
    });
  }
  function Hs(e) {
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
        !Ke(r) || !st(r) || (Object.assign(r.style, l), Object.keys(i).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Bs = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Vs,
    effect: Hs,
    requires: [
      "computeStyles"
    ]
  };
  function it(e) {
    return e.split("-")[0];
  }
  var Pt = Math.max, Hn = Math.min, Wt = Math.round;
  function go() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Gr() {
    return !/^((?!chrome|android).)*safari/i.test(go());
  }
  function Gt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, i = 1;
    t && Ke(e) && (r = e.offsetWidth > 0 && Wt(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Wt(o.height) / e.offsetHeight || 1);
    var s = It(e) ? Ue(e) : window, l = s.visualViewport, a = !Gr() && n, d = (o.left + (a && l ? l.offsetLeft : 0)) / r, u = (o.top + (a && l ? l.offsetTop : 0)) / i, p = o.width / r, g = o.height / i;
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
  function zo(e) {
    var t = Gt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Ur(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Fo(n)) {
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
  function Ws(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(st(e)) >= 0;
  }
  function St(e) {
    return ((It(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function qn(e) {
    return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fo(e) ? e.host : null) || St(e);
  }
  function Ko(e) {
    return !Ke(e) || ht(e).position === "fixed" ? null : e.offsetParent;
  }
  function Gs(e) {
    var t = /firefox/i.test(go()), n = /Trident/i.test(go());
    if (n && Ke(e)) {
      var o = ht(e);
      if (o.position === "fixed") return null;
    }
    var r = qn(e);
    for (Fo(r) && (r = r.host); Ke(r) && [
      "html",
      "body"
    ].indexOf(st(r)) < 0; ) {
      var i = ht(r);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function bn(e) {
    for (var t = Ue(e), n = Ko(e); n && Ws(n) && ht(n).position === "static"; ) n = Ko(n);
    return n && (st(n) === "html" || st(n) === "body" && ht(n).position === "static") ? t : n || Gs(e) || t;
  }
  function ko(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function rn(e, t, n) {
    return Pt(e, Hn(t, n));
  }
  function Us(e, t, n) {
    var o = rn(e, t, n);
    return o > n ? n : o;
  }
  function qr() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Yr(e) {
    return Object.assign({}, qr(), e);
  }
  function Jr(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var qs = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Yr(typeof t != "number" ? t : Jr(t, xn));
  };
  function Ys(e) {
    var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = it(n.placement), a = ko(l), d = [
      Be,
      Ze
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!i || !s)) {
      var p = qs(r.padding, n), g = zo(i), f = a === "y" ? He : Be, h = a === "y" ? Qe : Ze, m = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], v = s[a] - n.rects.reference[a], x = bn(i), _ = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, S = m / 2 - v / 2, w = p[f], j = _ - g[u] - p[h], R = _ / 2 - g[u] / 2 + S, A = rn(w, R, j), D = a;
      n.modifiersData[o] = (t = {}, t[D] = A, t.centerOffset = A - R, t);
    }
  }
  function Js(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ur(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Xs = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Ys,
    effect: Js,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Ut(e) {
    return e.split("-")[1];
  }
  var Ks = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Qs(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Wt(n * r) / r || 0,
      y: Wt(o * r) / r || 0
    };
  }
  function Qo(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, p = e.isFixed, g = s.x, f = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = v.x, m = v.y;
    var x = s.hasOwnProperty("x"), _ = s.hasOwnProperty("y"), S = Be, w = He, j = window;
    if (d) {
      var R = bn(n), A = "clientHeight", D = "clientWidth";
      if (R === Ue(n) && (R = St(n), ht(R).position !== "static" && l === "absolute" && (A = "scrollHeight", D = "scrollWidth")), R = R, r === He || (r === Be || r === Ze) && i === hn) {
        w = Qe;
        var F = p && R === j && j.visualViewport ? j.visualViewport.height : R[A];
        m -= F - o.height, m *= a ? 1 : -1;
      }
      if (r === Be || (r === He || r === Qe) && i === hn) {
        S = Ze;
        var C = p && R === j && j.visualViewport ? j.visualViewport.width : R[D];
        f -= C - o.width, f *= a ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: l
    }, d && Ks), k = u === true ? Qs({
      x: f,
      y: m
    }, Ue(n)) : {
      x: f,
      y: m
    };
    if (f = k.x, m = k.y, a) {
      var T;
      return Object.assign({}, M, (T = {}, T[w] = _ ? "0" : "", T[S] = x ? "0" : "", T.transform = (j.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T));
    }
    return Object.assign({}, M, (t = {}, t[w] = _ ? m + "px" : "", t[S] = x ? f + "px" : "", t.transform = "", t));
  }
  function Zs(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: it(t.placement),
      variation: Ut(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qo(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qo(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const el = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Zs,
    data: {}
  };
  var Mn = {
    passive: true
  };
  function tl(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? true : r, s = o.resize, l = s === void 0 ? true : s, a = Ue(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Mn);
    }), l && a.addEventListener("resize", n.update, Mn), function() {
      i && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Mn);
      }), l && a.removeEventListener("resize", n.update, Mn);
    };
  }
  const nl = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: tl,
    data: {}
  };
  var ol = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Dn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return ol[t];
    });
  }
  var rl = {
    start: "end",
    end: "start"
  };
  function Zo(e) {
    return e.replace(/start|end/g, function(t) {
      return rl[t];
    });
  }
  function To(e) {
    var t = Ue(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Do(e) {
    return Gt(St(e)).left + To(e).scrollLeft;
  }
  function il(e, t) {
    var n = Ue(e), o = St(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
    if (r) {
      i = r.width, s = r.height;
      var d = Gr();
      (d || !d && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l + Do(e),
      y: a
    };
  }
  function sl(e) {
    var t, n = St(e), o = To(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Pt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Pt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Do(e), a = -o.scrollTop;
    return ht(r || n).direction === "rtl" && (l += Pt(n.clientWidth, r ? r.clientWidth : 0) - i), {
      width: i,
      height: s,
      x: l,
      y: a
    };
  }
  function Eo(e) {
    var t = ht(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function Xr(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ke(e) && Eo(e) ? e : Xr(qn(e));
  }
  function sn(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Xr(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ue(o), s = r ? [
      i
    ].concat(i.visualViewport || [], Eo(o) ? o : []) : o, l = t.concat(s);
    return r ? l : l.concat(sn(qn(s)));
  }
  function ho(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function ll(e, t) {
    var n = Gt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function er(e, t, n) {
    return t === Br ? ho(il(e, n)) : It(t) ? ll(t, n) : ho(sl(St(e)));
  }
  function al(e) {
    var t = sn(qn(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(ht(e).position) >= 0, o = n && Ke(e) ? bn(e) : e;
    return It(o) ? t.filter(function(r) {
      return It(r) && Ur(r, o) && st(r) !== "body";
    }) : [];
  }
  function cl(e, t, n, o) {
    var r = t === "clippingParents" ? al(e) : [].concat(t), i = [].concat(r, [
      n
    ]), s = i[0], l = i.reduce(function(a, d) {
      var u = er(e, d, o);
      return a.top = Pt(u.top, a.top), a.right = Hn(u.right, a.right), a.bottom = Hn(u.bottom, a.bottom), a.left = Pt(u.left, a.left), a;
    }, er(e, s, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function Kr(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? it(o) : null, i = o ? Ut(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case He:
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
      case Be:
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
    var d = r ? ko(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (i) {
        case Bt:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case hn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function mn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? As : l, d = n.rootBoundary, u = d === void 0 ? Br : d, p = n.elementContext, g = p === void 0 ? Yt : p, f = n.altBoundary, h = f === void 0 ? false : f, m = n.padding, v = m === void 0 ? 0 : m, x = Yr(typeof v != "number" ? v : Jr(v, xn)), _ = g === Yt ? Ps : Yt, S = e.rects.popper, w = e.elements[h ? _ : g], j = cl(It(w) ? w : w.contextElement || St(e.elements.popper), a, u, s), R = Gt(e.elements.reference), A = Kr({
      reference: R,
      element: S,
      placement: r
    }), D = ho(Object.assign({}, S, A)), F = g === Yt ? D : R, C = {
      top: j.top - F.top + x.top,
      bottom: F.bottom - j.bottom + x.bottom,
      left: j.left - F.left + x.left,
      right: F.right - j.right + x.right
    }, M = e.modifiersData.offset;
    if (g === Yt && M) {
      var k = M[r];
      Object.keys(C).forEach(function(T) {
        var N = [
          Ze,
          Qe
        ].indexOf(T) >= 0 ? 1 : -1, O = [
          He,
          Qe
        ].indexOf(T) >= 0 ? "y" : "x";
        C[T] += k[O] * N;
      });
    }
    return C;
  }
  function ul(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? Wr : a, u = Ut(o), p = u ? l ? Xo : Xo.filter(function(h) {
      return Ut(h) === u;
    }) : xn, g = p.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = p);
    var f = g.reduce(function(h, m) {
      return h[m] = mn(e, {
        placement: m,
        boundary: r,
        rootBoundary: i,
        padding: s
      })[it(m)], h;
    }, {});
    return Object.keys(f).sort(function(h, m) {
      return f[h] - f[m];
    });
  }
  function dl(e) {
    if (it(e) === Io) return [];
    var t = Dn(e);
    return [
      Zo(e),
      t,
      Zo(t)
    ];
  }
  function pl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, d = n.padding, u = n.boundary, p = n.rootBoundary, g = n.altBoundary, f = n.flipVariations, h = f === void 0 ? true : f, m = n.allowedAutoPlacements, v = t.options.placement, x = it(v), _ = x === v, S = a || (_ || !h ? [
        Dn(v)
      ] : dl(v)), w = [
        v
      ].concat(S).reduce(function(ge, ee) {
        return ge.concat(it(ee) === Io ? ul(t, {
          placement: ee,
          boundary: u,
          rootBoundary: p,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ee);
      }, []), j = t.rects.reference, R = t.rects.popper, A = /* @__PURE__ */ new Map(), D = true, F = w[0], C = 0; C < w.length; C++) {
        var M = w[C], k = it(M), T = Ut(M) === Bt, N = [
          He,
          Qe
        ].indexOf(k) >= 0, O = N ? "width" : "height", L = mn(t, {
          placement: M,
          boundary: u,
          rootBoundary: p,
          altBoundary: g,
          padding: d
        }), z = N ? T ? Ze : Be : T ? Qe : He;
        j[O] > R[O] && (z = Dn(z));
        var W = Dn(z), Y = [];
        if (i && Y.push(L[k] <= 0), l && Y.push(L[z] <= 0, L[W] <= 0), Y.every(function(ge) {
          return ge;
        })) {
          F = M, D = false;
          break;
        }
        A.set(M, Y);
      }
      if (D) for (var ie = h ? 3 : 1, ae = function(ee) {
        var I = w.find(function(se) {
          var te = A.get(se);
          if (te) return te.slice(0, ee).every(function($e) {
            return $e;
          });
        });
        if (I) return F = I, "break";
      }, Se = ie; Se > 0; Se--) {
        var Ce = ae(Se);
        if (Ce === "break") break;
      }
      t.placement !== F && (t.modifiersData[o]._skip = true, t.placement = F, t.reset = true);
    }
  }
  const fl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: pl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function tr(e, t, n) {
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
  function nr(e) {
    return [
      He,
      Ze,
      Qe,
      Be
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function gl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = mn(t, {
      elementContext: "reference"
    }), l = mn(t, {
      altBoundary: true
    }), a = tr(s, o), d = tr(l, r, i), u = nr(a), p = nr(d);
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
  const hl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: gl
  };
  function ml(e, t, n) {
    var o = it(e), r = [
      Be,
      He
    ].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * r, [
      Be,
      Ze
    ].indexOf(o) >= 0 ? {
      x: l,
      y: s
    } : {
      x: s,
      y: l
    };
  }
  function yl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [
      0,
      0
    ] : r, s = Wr.reduce(function(u, p) {
      return u[p] = ml(p, t.rects, i), u;
    }, {}), l = s[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const vl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: yl
  };
  function xl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Kr({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const bl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: xl,
    data: {}
  };
  function wl(e) {
    return e === "x" ? "y" : "x";
  }
  function Cl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, p = n.padding, g = n.tether, f = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = mn(t, {
      boundary: a,
      rootBoundary: d,
      padding: p,
      altBoundary: u
    }), x = it(t.placement), _ = Ut(t.placement), S = !_, w = ko(x), j = wl(w), R = t.modifiersData.popperOffsets, A = t.rects.reference, D = t.rects.popper, F = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, C = typeof F == "number" ? {
      mainAxis: F,
      altAxis: F
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, F), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, k = {
      x: 0,
      y: 0
    };
    if (R) {
      if (i) {
        var T, N = w === "y" ? He : Be, O = w === "y" ? Qe : Ze, L = w === "y" ? "height" : "width", z = R[w], W = z + v[N], Y = z - v[O], ie = f ? -D[L] / 2 : 0, ae = _ === Bt ? A[L] : D[L], Se = _ === Bt ? -D[L] : -A[L], Ce = t.elements.arrow, ge = f && Ce ? zo(Ce) : {
          width: 0,
          height: 0
        }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : qr(), I = ee[N], se = ee[O], te = rn(0, A[L], ge[L]), $e = S ? A[L] / 2 - ie - te - I - C.mainAxis : ae - te - I - C.mainAxis, Oe = S ? -A[L] / 2 + ie + te + se + C.mainAxis : Se + te + se + C.mainAxis, je = t.elements.arrow && bn(t.elements.arrow), ce = je ? w === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, be = (T = M == null ? void 0 : M[w]) != null ? T : 0, ue = z + $e - be - ce, We = z + Oe - be, jt = rn(f ? Hn(W, ue) : W, z, f ? Pt(Y, We) : Y);
        R[w] = jt, k[w] = jt - z;
      }
      if (l) {
        var ot, lt = w === "x" ? He : Be, Rt = w === "x" ? Qe : Ze, ke = R[j], rt = j === "y" ? "height" : "width", Ye = ke + v[lt], at = ke - v[Rt], mt = [
          He,
          Be
        ].indexOf(x) !== -1, ct = (ot = M == null ? void 0 : M[j]) != null ? ot : 0, Mt = mt ? Ye : ke - A[rt] - D[rt] - ct + C.altAxis, yt = mt ? ke + A[rt] + D[rt] - ct - C.altAxis : at, qt = f && mt ? Us(Mt, ke, yt) : rn(f ? Mt : Ye, ke, f ? yt : at);
        R[j] = qt, k[j] = qt - ke;
      }
      t.modifiersData[o] = k;
    }
  }
  const _l = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: Cl,
    requiresIfExists: [
      "offset"
    ]
  };
  function Sl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function jl(e) {
    return e === Ue(e) || !Ke(e) ? To(e) : Sl(e);
  }
  function Rl(e) {
    var t = e.getBoundingClientRect(), n = Wt(t.width) / e.offsetWidth || 1, o = Wt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function Ml(e, t, n) {
    n === void 0 && (n = false);
    var o = Ke(t), r = Ke(t) && Rl(t), i = St(t), s = Gt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((st(t) !== "body" || Eo(i)) && (l = jl(t)), Ke(t) ? (a = Gt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Do(i))), {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function $l(e) {
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
  function Al(e) {
    var t = $l(e);
    return Ls.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Pl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Il(e) {
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
  var or = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function rr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Fl(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? or : r;
    return function(l, a, d) {
      d === void 0 && (d = i);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, or, i),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, p = [], g = false, f = {
        state: u,
        setOptions: function(x) {
          var _ = typeof x == "function" ? x(u.options) : x;
          m(), u.options = Object.assign({}, i, u.options, _), u.scrollParents = {
            reference: It(l) ? sn(l) : l.contextElement ? sn(l.contextElement) : [],
            popper: sn(a)
          };
          var S = Al(Il([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = S.filter(function(w) {
            return w.enabled;
          }), h(), f.update();
        },
        forceUpdate: function() {
          if (!g) {
            var x = u.elements, _ = x.reference, S = x.popper;
            if (rr(_, S)) {
              u.rects = {
                reference: Ml(_, bn(S), u.options.strategy === "fixed"),
                popper: zo(S)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(C) {
                return u.modifiersData[C.name] = Object.assign({}, C.data);
              });
              for (var w = 0; w < u.orderedModifiers.length; w++) {
                if (u.reset === true) {
                  u.reset = false, w = -1;
                  continue;
                }
                var j = u.orderedModifiers[w], R = j.fn, A = j.options, D = A === void 0 ? {} : A, F = j.name;
                typeof R == "function" && (u = R({
                  state: u,
                  options: D,
                  name: F,
                  instance: f
                }) || u);
              }
            }
          }
        },
        update: Pl(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!rr(l, a)) return f;
      f.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        u.orderedModifiers.forEach(function(v) {
          var x = v.name, _ = v.options, S = _ === void 0 ? {} : _, w = v.effect;
          if (typeof w == "function") {
            var j = w({
              state: u,
              name: x,
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
  var zl = [
    nl,
    bl,
    el,
    Bs,
    vl,
    fl,
    _l,
    Xs,
    hl
  ], kl = Fl({
    defaultModifiers: zl
  });
  function Tl(e) {
    return me("MuiPopper", e);
  }
  ye("MuiPopper", [
    "root"
  ]);
  function Dl(e, t) {
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
  function mo(e) {
    return typeof e == "function" ? e() : e;
  }
  function El(e) {
    return e.nodeType !== void 0;
  }
  const Ol = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Tl, t);
  }, Nl = {}, Ll = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: i, disablePortal: s, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: p, slotProps: g = {}, slots: f = {}, TransitionProps: h, ownerState: m, ...v } = t, x = y.useRef(null), _ = Lt(x, n), S = y.useRef(null), w = Lt(S, p), j = y.useRef(w);
    Bo(() => {
      j.current = w;
    }, [
      w
    ]), y.useImperativeHandle(p, () => S.current, []);
    const R = Dl(d, i), [A, D] = y.useState(R), [F, C] = y.useState(mo(o));
    y.useEffect(() => {
      S.current && S.current.forceUpdate();
    }), y.useEffect(() => {
      o && C(mo(o));
    }, [
      o
    ]), Bo(() => {
      if (!F || !a) return;
      const O = (W) => {
        D(W.placement);
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
          fn: ({ state: W }) => {
            O(W);
          }
        }
      ];
      l != null && (L = L.concat(l)), u && u.modifiers != null && (L = L.concat(u.modifiers));
      const z = kl(F, x.current, {
        placement: R,
        ...u,
        modifiers: L
      });
      return j.current(z), () => {
        z.destroy(), j.current(null);
      };
    }, [
      F,
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
    const k = Ol(t), T = f.root ?? "div", N = Ii({
      elementType: T,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: _
      },
      ownerState: t,
      className: k.root
    });
    return c.jsx(T, {
      ...N,
      children: typeof r == "function" ? r(M) : r
    });
  }), Vl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: p = "bottom", popperOptions: g = Nl, popperRef: f, style: h, transition: m = false, slotProps: v = {}, slots: x = {}, ..._ } = t, [S, w] = y.useState(true), j = () => {
      w(false);
    }, R = () => {
      w(true);
    };
    if (!a && !u && (!m || S)) return null;
    let A;
    if (i) A = i;
    else if (o) {
      const C = mo(o);
      A = C && El(C) ? on(C).body : on(null).body;
    }
    const D = !u && a && (!m || S) ? "none" : void 0, F = m ? {
      in: u,
      onEnter: j,
      onExited: R
    } : void 0;
    return c.jsx(Pi, {
      disablePortal: l,
      container: A,
      children: c.jsx(Ll, {
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
        slots: x,
        ..._,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: D,
          ...h
        },
        TransitionProps: F,
        children: r
      })
    });
  }), Hl = U(Vl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Qr = y.forwardRef(function(t, n) {
    const o = Po(), r = ve({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: s, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: p, modifiers: g, open: f, placement: h, popperOptions: m, popperRef: v, transition: x, slots: _, slotProps: S, ...w } = r, j = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root), R = {
      anchorEl: i,
      container: d,
      disablePortal: u,
      keepMounted: p,
      modifiers: g,
      open: f,
      placement: h,
      popperOptions: m,
      popperRef: v,
      transition: x,
      ...w
    };
    return c.jsx(Hl, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: j
      },
      slotProps: S ?? a,
      ...R,
      ref: n
    });
  }), Bl = le(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Wl(e) {
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
  ]), Gl = (e) => {
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
    return xe(d, Wl, t);
  }, Ul = U("div", {
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
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : ze(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : ze(e.palette.text.primary, 0.4)
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
        ...Object.entries(e.palette).filter($t([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${J.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : ze(e.palette[n].contrastText, 0.7),
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ze(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter($t([
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ze(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${J.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ze(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter($t([
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
        ...Object.entries(e.palette).filter($t()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ze(e.palette[n].main, 0.7)}`,
            [`&.${J.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ze(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${J.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ze(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${J.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ze(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), ql = U("span", {
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
  function ir(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const En = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: i, clickable: s, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: p, label: g, onClick: f, onDelete: h, onKeyDown: m, onKeyUp: v, size: x = "medium", variant: _ = "filled", tabIndex: S, skipFocusWhenDisabled: w = false, ...j } = o, R = y.useRef(null), A = Lt(R, n), D = (Y) => {
      Y.stopPropagation(), h && h(Y);
    }, F = (Y) => {
      Y.currentTarget === Y.target && ir(Y) && Y.preventDefault(), m && m(Y);
    }, C = (Y) => {
      Y.currentTarget === Y.target && h && ir(Y) && h(Y), v && v(Y);
    }, M = s !== false && f ? true : s, k = M || h ? Ln : a || "div", T = {
      ...o,
      component: k,
      disabled: u,
      size: x,
      color: l,
      iconColor: y.isValidElement(p) && p.props.color || l,
      onDelete: !!h,
      clickable: M,
      variant: _
    }, N = Gl(T), O = k === Ln ? {
      component: a || "div",
      focusVisibleClassName: N.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let L = null;
    h && (L = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: oe(d.props.className, N.deleteIcon),
      onClick: D
    }) : c.jsx(Bl, {
      className: oe(N.deleteIcon),
      onClick: D
    }));
    let z = null;
    r && y.isValidElement(r) && (z = y.cloneElement(r, {
      className: oe(N.avatar, r.props.className)
    }));
    let W = null;
    return p && y.isValidElement(p) && (W = y.cloneElement(p, {
      className: oe(N.icon, p.props.className)
    })), c.jsxs(Ul, {
      as: k,
      className: oe(N.root, i),
      disabled: M && u ? true : void 0,
      onClick: f,
      onKeyDown: F,
      onKeyUp: C,
      ref: A,
      tabIndex: w && u ? -1 : S,
      ownerState: T,
      ...O,
      ...j,
      children: [
        z || W,
        c.jsx(ql, {
          className: oe(N.label),
          ownerState: T,
          children: g
        }),
        L
      ]
    });
  });
  function Yl(e) {
    return me("MuiCard", e);
  }
  ye("MuiCard", [
    "root"
  ]);
  const Jl = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Yl, t);
  }, Xl = U(nt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Kl = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: i = false, ...s } = o, l = {
      ...o,
      raised: i
    }, a = Jl(l);
    return c.jsx(Xl, {
      className: oe(a.root, r),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...s
    });
  });
  function sr(e) {
    return e.substring(2).toLowerCase();
  }
  function Ql(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Zl(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: i = "onTouchEnd" } = e, s = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = Lt(Or(t), l), p = un((h) => {
      const m = d.current;
      d.current = false;
      const v = on(l.current);
      if (!a.current || !l.current || "clientX" in h && Ql(h, v)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !v.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !m) && r(h);
    }), g = (h) => (m) => {
      d.current = true;
      const v = t.props[h];
      v && v(m);
    }, f = {
      ref: u
    };
    return i !== false && (f[i] = g(i)), y.useEffect(() => {
      if (i !== false) {
        const h = sr(i), m = on(l.current), v = () => {
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
        const h = sr(o), m = on(l.current);
        return m.addEventListener(h, p), () => {
          m.removeEventListener(h, p);
        };
      }
    }, [
      p,
      o
    ]), y.cloneElement(t, f);
  }
  function ea(e) {
    return me("MuiDialogActions", e);
  }
  ye("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const ta = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return xe({
      root: [
        "root",
        !n && "spacing"
      ]
    }, ea, t);
  }, na = U("div", {
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
  }), oa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: i = false, ...s } = o, l = {
      ...o,
      disableSpacing: i
    }, a = ta(l);
    return c.jsx(na, {
      className: oe(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  });
  function ra(e) {
    return me("MuiInputAdornment", e);
  }
  const lr = ye("MuiInputAdornment", [
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
  var ar;
  const ia = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${B(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, sa = (e) => {
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
    return xe(l, ra, t);
  }, la = U("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: ia
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
          [`&.${lr.positionStart}&:not(.${lr.hiddenLabel})`]: {
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
  }))), yo = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: i, component: s = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...p } = o, g = Fi() || {};
    let f = u;
    u && g.variant, g && !f && (f = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: f
    }, m = sa(h);
    return c.jsx(zi.Provider, {
      value: null,
      children: c.jsx(la, {
        as: s,
        ownerState: h,
        className: oe(m.root, i),
        ref: n,
        ...p,
        children: typeof r == "string" && !a ? c.jsx(P, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(y.Fragment, {
          children: [
            d === "start" ? ar || (ar = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), aa = le(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), ca = le(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function ua(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: i } = e, s = Et();
    y.useEffect(() => {
      if (!r) return;
      function x(_) {
        _.defaultPrevented || _.key === "Escape" && (o == null ? void 0 : o(_, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      r,
      o
    ]);
    const l = un((x, _) => {
      o == null ? void 0 : o(x, _);
    }), a = un((x) => {
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
    const d = (x) => {
      o == null ? void 0 : o(x, "clickaway");
    }, u = s.clear, p = y.useCallback(() => {
      t != null && a(i ?? t * 0.5);
    }, [
      t,
      i,
      a
    ]), g = (x) => (_) => {
      const S = x.onBlur;
      S == null ? void 0 : S(_), p();
    }, f = (x) => (_) => {
      const S = x.onFocus;
      S == null ? void 0 : S(_), u();
    }, h = (x) => (_) => {
      const S = x.onMouseEnter;
      S == null ? void 0 : S(_), u();
    }, m = (x) => (_) => {
      const S = x.onMouseLeave;
      S == null ? void 0 : S(_), p();
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
      getRootProps: (x = {}) => {
        const _ = {
          ...Wo(e),
          ...Wo(x)
        };
        return {
          role: "presentation",
          ...x,
          ..._,
          onBlur: g(_),
          onFocus: f(_),
          onMouseEnter: h(_),
          onMouseLeave: m(_)
        };
      },
      onClickAway: d
    };
  }
  function da(e) {
    return me("MuiSnackbarContent", e);
  }
  ye("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const pa = (e) => {
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
    }, da, t);
  }, fa = U(nt, {
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
  })), ga = U("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), ha = U("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), ma = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: i, message: s, role: l = "alert", ...a } = o, d = o, u = pa(d);
    return c.jsxs(fa, {
      role: l,
      square: true,
      elevation: 6,
      className: oe(u.root, i),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(ga, {
          className: u.message,
          ownerState: d,
          children: s
        }),
        r ? c.jsx(ha, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function ya(e) {
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
  const va = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${B(n.vertical)}${B(n.horizontal)}`
      ]
    };
    return xe(o, ya, t);
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
  }))), ba = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiSnackbar"
    }), r = vn(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: p, ClickAwayListenerProps: g, ContentProps: f, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: x, onFocus: _, onMouseEnter: S, onMouseLeave: w, open: j, resumeHideDuration: R, slots: A = {}, slotProps: D = {}, TransitionComponent: F, transitionDuration: C = i, TransitionProps: { onEnter: M, onExited: k, ...T } = {}, ...N } = o, O = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: F,
      transitionDuration: C
    }, L = va(O), { getRootProps: z, onClickAway: W } = ua({
      ...O
    }), [Y, ie] = y.useState(true), ae = (be) => {
      ie(true), k && k(be);
    }, Se = (be, ue) => {
      ie(false), M && M(be, ue);
    }, Ce = {
      slots: {
        transition: F,
        ...A
      },
      slotProps: {
        content: f,
        clickAwayListener: g,
        transition: T,
        ...D
      }
    }, [ge, ee] = ne("root", {
      ref: n,
      className: [
        L.root,
        p
      ],
      elementType: xa,
      getSlotProps: z,
      externalForwardedProps: {
        ...Ce,
        ...N
      },
      ownerState: O
    }), [I, { ownerState: se, ...te }] = ne("clickAwayListener", {
      elementType: Zl,
      externalForwardedProps: Ce,
      getSlotProps: (be) => ({
        onClickAway: (...ue) => {
          var _a2;
          (_a2 = be.onClickAway) == null ? void 0 : _a2.call(be, ...ue), W(...ue);
        }
      }),
      ownerState: O
    }), [$e, Oe] = ne("content", {
      elementType: ma,
      shouldForwardComponentProp: true,
      externalForwardedProps: Ce,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: O
    }), [je, ce] = ne("transition", {
      elementType: Nr,
      externalForwardedProps: Ce,
      getSlotProps: (be) => ({
        onEnter: (...ue) => {
          var _a2;
          (_a2 = be.onEnter) == null ? void 0 : _a2.call(be, ...ue), Se(...ue);
        },
        onExited: (...ue) => {
          var _a2;
          (_a2 = be.onExited) == null ? void 0 : _a2.call(be, ...ue), ae(...ue);
        }
      }),
      additionalProps: {
        appear: true,
        in: j,
        timeout: C,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: O
    });
    return !j && Y ? null : c.jsx(I, {
      ...te,
      ...A.clickAwayListener && {
        ownerState: se
      },
      children: c.jsx(ge, {
        ...ee,
        children: c.jsx(je, {
          ...ce,
          children: u || c.jsx($e, {
            ...Oe
          })
        })
      })
    });
  });
  function wa(e) {
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
  function Ca(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const _a = (e) => {
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
    return xe(s, wa, t);
  }, Sa = U(Qr, {
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
  }))), ja = U("div", {
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
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : ze(e.palette.grey[700], 0.92),
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
          lineHeight: `${Ca(16 / 14)}em`,
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
  }))), Ra = U("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(de(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : ze(e.palette.grey[700], 0.9),
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
  let $n = false;
  const cr = new Ti();
  let Jt = {
    x: 0,
    y: 0
  };
  function An(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Ve = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: i, classes: s, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: p = false, disableInteractive: g = false, disableTouchListener: f = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: x = false, id: _, leaveDelay: S = 0, leaveTouchDelay: w = 1500, onClose: j, onOpen: R, open: A, placement: D = "bottom", PopperComponent: F, PopperProps: C = {}, slotProps: M = {}, slots: k = {}, title: T, TransitionComponent: N, TransitionProps: O, ...L } = o, z = y.isValidElement(i) ? i : c.jsx("span", {
      children: i
    }), W = vn(), Y = Po(), [ie, ae] = y.useState(), [Se, Ce] = y.useState(null), ge = y.useRef(false), ee = g || x, I = Et(), se = Et(), te = Et(), $e = Et(), [Oe, je] = Er({
      controlled: A,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let ce = Oe;
    const be = po(_), ue = y.useRef(), We = un(() => {
      ue.current !== void 0 && (document.body.style.WebkitUserSelect = ue.current, ue.current = void 0), $e.clear();
    });
    y.useEffect(() => We, [
      We
    ]);
    const jt = (q) => {
      cr.clear(), $n = true, je(true), R && !ce && R(q);
    }, ot = un((q) => {
      cr.start(800 + S, () => {
        $n = false;
      }), je(false), j && ce && j(q), I.start(W.transitions.duration.shortest, () => {
        ge.current = false;
      });
    }), lt = (q) => {
      ge.current && q.type !== "touchstart" || (ie && ie.removeAttribute("title"), se.clear(), te.clear(), h || $n && m ? se.start($n ? m : h, () => {
        jt(q);
      }) : jt(q));
    }, Rt = (q) => {
      se.clear(), te.start(S, () => {
        ot(q);
      });
    }, [, ke] = y.useState(false), rt = (q) => {
      Go(q.target) || (ke(false), Rt(q));
    }, Ye = (q) => {
      ie || ae(q.currentTarget), Go(q.target) && (ke(true), lt(q));
    }, at = (q) => {
      ge.current = true;
      const bt = z.props;
      bt.onTouchStart && bt.onTouchStart(q);
    }, mt = (q) => {
      at(q), te.clear(), I.clear(), We(), ue.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", $e.start(v, () => {
        document.body.style.WebkitUserSelect = ue.current, lt(q);
      });
    }, ct = (q) => {
      z.props.onTouchEnd && z.props.onTouchEnd(q), We(), te.start(w, () => {
        ot(q);
      });
    };
    y.useEffect(() => {
      if (!ce) return;
      function q(bt) {
        bt.key === "Escape" && ot(bt);
      }
      return document.addEventListener("keydown", q), () => {
        document.removeEventListener("keydown", q);
      };
    }, [
      ot,
      ce
    ]);
    const Mt = Lt(Or(z), ae, n);
    !T && T !== 0 && (ce = false);
    const yt = y.useRef(), qt = (q) => {
      const bt = z.props;
      bt.onMouseMove && bt.onMouseMove(q), Jt = {
        x: q.clientX,
        y: q.clientY
      }, yt.current && yt.current.update();
    }, Te = {}, zt = typeof T == "string";
    d ? (Te.title = !ce && zt && !p ? T : null, Te["aria-describedby"] = ce ? be : null) : (Te["aria-label"] = zt ? T : null, Te["aria-labelledby"] = ce && !zt ? be : null);
    const Ne = {
      ...Te,
      ...L,
      ...z.props,
      className: oe(L.className, z.props.className),
      onTouchStart: at,
      ref: Mt,
      ...x ? {
        onMouseMove: qt
      } : {}
    }, $ = {};
    f || (Ne.onTouchStart = mt, Ne.onTouchEnd = ct), p || (Ne.onMouseOver = An(lt, Ne.onMouseOver), Ne.onMouseLeave = An(Rt, Ne.onMouseLeave), ee || ($.onMouseOver = lt, $.onMouseLeave = Rt)), u || (Ne.onFocus = An(Ye, Ne.onFocus), Ne.onBlur = An(rt, Ne.onBlur), ee || ($.onFocus = Ye, $.onBlur = rt));
    const E = {
      ...o,
      isRtl: Y,
      arrow: r,
      disableInteractive: ee,
      placement: D,
      PopperComponentProp: F,
      touch: ge.current
    }, Z = typeof M.popper == "function" ? M.popper(E) : M.popper, Re = y.useMemo(() => {
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
      return ((_a2 = C.popperOptions) == null ? void 0 : _a2.modifiers) && (q = q.concat(C.popperOptions.modifiers)), ((_b = Z == null ? void 0 : Z.popperOptions) == null ? void 0 : _b.modifiers) && (q = q.concat(Z.popperOptions.modifiers)), {
        ...C.popperOptions,
        ...Z == null ? void 0 : Z.popperOptions,
        modifiers: q
      };
    }, [
      Se,
      C.popperOptions,
      Z == null ? void 0 : Z.popperOptions
    ]), Pe = _a(E), Je = typeof M.transition == "function" ? M.transition(E) : M.transition, vt = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? N,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...k
      },
      slotProps: {
        arrow: M.arrow ?? a.arrow,
        popper: {
          ...C,
          ...Z ?? a.popper
        },
        tooltip: M.tooltip ?? a.tooltip,
        transition: {
          ...O,
          ...Je ?? a.transition
        }
      }
    }, [xt, Cn] = ne("popper", {
      elementType: Sa,
      externalForwardedProps: vt,
      ownerState: E,
      className: oe(Pe.popper, C == null ? void 0 : C.className)
    }), [Ci, _i] = ne("transition", {
      elementType: Nr,
      externalForwardedProps: vt,
      ownerState: E
    }), [Si, ji] = ne("tooltip", {
      elementType: ja,
      className: Pe.tooltip,
      externalForwardedProps: vt,
      ownerState: E
    }), [Ri, Mi] = ne("arrow", {
      elementType: Ra,
      className: Pe.arrow,
      externalForwardedProps: vt,
      ownerState: E,
      ref: Ce
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(z, Ne),
        c.jsx(xt, {
          as: F ?? Qr,
          placement: D,
          anchorEl: x ? {
            getBoundingClientRect: () => ({
              top: Jt.y,
              left: Jt.x,
              right: Jt.x,
              bottom: Jt.y,
              width: 0,
              height: 0
            })
          } : ie,
          popperRef: yt,
          open: ie ? ce : false,
          id: be,
          transition: true,
          ...$,
          ...Cn,
          popperOptions: Re,
          children: ({ TransitionProps: q }) => c.jsx(Ci, {
            timeout: W.transitions.duration.shorter,
            ...q,
            ..._i,
            children: c.jsxs(Si, {
              ...ji,
              children: [
                T,
                r ? c.jsx(Ri, {
                  ...Mi
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Zr = y.createContext();
  function Ma(e) {
    return me("MuiTable", e);
  }
  ye("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const $a = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return xe({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, Ma, t);
  }, Aa = U("table", {
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
  }))), ur = "table", Pa = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTable"
    }), { className: r, component: i = ur, padding: s = "normal", size: l = "medium", stickyHeader: a = false, ...d } = o, u = {
      ...o,
      component: i,
      padding: s,
      size: l,
      stickyHeader: a
    }, p = $a(u), g = y.useMemo(() => ({
      padding: s,
      size: l,
      stickyHeader: a
    }), [
      s,
      l,
      a
    ]);
    return c.jsx(Zr.Provider, {
      value: g,
      children: c.jsx(Aa, {
        as: i,
        role: i === ur ? null : "table",
        ref: n,
        className: oe(p.root, r),
        ownerState: u,
        ...d
      })
    });
  }), Yn = y.createContext();
  function Ia(e) {
    return me("MuiTableBody", e);
  }
  ye("MuiTableBody", [
    "root"
  ]);
  const Fa = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Ia, t);
  }, za = U("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), ka = {
    variant: "body"
  }, dr = "tbody", Ta = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: i = dr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Fa(l);
    return c.jsx(Yn.Provider, {
      value: ka,
      children: c.jsx(za, {
        className: oe(a.root, r),
        as: i,
        ref: n,
        role: i === dr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Da(e) {
    return me("MuiTableCell", e);
  }
  const Ea = ye("MuiTableCell", [
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
  ]), Oa = (e) => {
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
    return xe(l, Da, t);
  }, Na = U("td", {
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
    ${e.palette.mode === "light" ? uo(ze(e.palette.divider, 1), 0.88) : co(ze(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Ea.paddingCheckbox}`]: {
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
    }), { align: r = "inherit", className: i, component: s, padding: l, scope: a, size: d, sortDirection: u, variant: p, ...g } = o, f = y.useContext(Zr), h = y.useContext(Yn), m = h && h.variant === "head";
    let v;
    s ? v = s : v = m ? "th" : "td";
    let x = a;
    v === "td" ? x = void 0 : !x && m && (x = "col");
    const _ = p || h && h.variant, S = {
      ...o,
      align: r,
      component: v,
      padding: l || (f && f.padding ? f.padding : "normal"),
      size: d || (f && f.size ? f.size : "medium"),
      sortDirection: u,
      stickyHeader: _ === "head" && f && f.stickyHeader,
      variant: _
    }, w = Oa(S);
    let j = null;
    return u && (j = u === "asc" ? "ascending" : "descending"), c.jsx(Na, {
      as: v,
      ref: n,
      className: oe(w.root, i),
      "aria-sort": j,
      scope: x,
      ownerState: S,
      ...g
    });
  });
  function La(e) {
    return me("MuiTableContainer", e);
  }
  ye("MuiTableContainer", [
    "root"
  ]);
  const Va = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, La, t);
  }, Ha = U("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Ba = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: i = "div", ...s } = o, l = {
      ...o,
      component: i
    }, a = Va(l);
    return c.jsx(Ha, {
      ref: n,
      as: i,
      className: oe(a.root, r),
      ownerState: l,
      ...s
    });
  });
  function Wa(e) {
    return me("MuiTableHead", e);
  }
  ye("MuiTableHead", [
    "root"
  ]);
  const Ga = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Wa, t);
  }, Ua = U("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), qa = {
    variant: "head"
  }, pr = "thead", Ya = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: i = pr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Ga(l);
    return c.jsx(Yn.Provider, {
      value: qa,
      children: c.jsx(Ua, {
        as: i,
        className: oe(a.root, r),
        ref: n,
        role: i === pr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Ja(e) {
    return me("MuiToolbar", e);
  }
  ye("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Xa = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return xe({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Ja, t);
  }, Ka = U("div", {
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
  }))), ei = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: i = "div", disableGutters: s = false, variant: l = "regular", ...a } = o, d = {
      ...o,
      component: i,
      disableGutters: s,
      variant: l
    }, u = Xa(d);
    return c.jsx(Ka, {
      as: i,
      className: oe(u.root, r),
      ref: n,
      ownerState: d,
      ...a
    });
  }), Qa = le(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Za = le(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), ec = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: i = false, getItemAriaLabel: s, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: p, showLastButton: g, slots: f = {}, slotProps: h = {}, ...m } = t, v = Po(), x = (ae) => {
      a(ae, 0);
    }, _ = (ae) => {
      a(ae, d - 1);
    }, S = (ae) => {
      a(ae, d + 1);
    }, w = (ae) => {
      a(ae, Math.max(0, Math.ceil(r / u) - 1));
    }, j = f.firstButton ?? we, R = f.lastButton ?? we, A = f.nextButton ?? we, D = f.previousButton ?? we, F = f.firstButtonIcon ?? aa, C = f.lastButtonIcon ?? ca, M = f.nextButtonIcon ?? Za, k = f.previousButtonIcon ?? Qa, T = v ? R : j, N = v ? A : D, O = v ? D : A, L = v ? j : R, z = v ? h.lastButton : h.firstButton, W = v ? h.nextButton : h.previousButton, Y = v ? h.previousButton : h.nextButton, ie = v ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        p && c.jsx(T, {
          onClick: x,
          disabled: i || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...z,
          children: v ? c.jsx(C, {
            ...h.lastButtonIcon
          }) : c.jsx(F, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(N, {
          onClick: _,
          disabled: i || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...W ?? o,
          children: v ? c.jsx(M, {
            ...h.nextButtonIcon
          }) : c.jsx(k, {
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
          children: v ? c.jsx(k, {
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
          children: v ? c.jsx(F, {
            ...h.firstButtonIcon
          }) : c.jsx(C, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function tc(e) {
    return me("MuiTablePagination", e);
  }
  const ln = ye("MuiTablePagination", [
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
  var fr;
  const nc = U(et, {
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
  }))), oc = U(ei, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${ln.actions}`]: t.actions,
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
    [`& .${ln.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), rc = U("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), ic = U("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(de(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), sc = U(Vt, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${ln.selectIcon}`]: t.selectIcon,
      [`& .${ln.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${ln.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), lc = U(_e, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), ac = U("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(de(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function cc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function uc(e) {
    return `Go to ${e} page`;
  }
  const dc = (e) => {
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
    }, tc, t);
  }, pc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = ec, backIconButtonProps: i, colSpan: s, component: l = et, count: a, disabled: d = false, getItemAriaLabel: u = uc, labelDisplayedRows: p = cc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: f, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: x, rowsPerPageOptions: _ = [
      10,
      25,
      50,
      100
    ], SelectProps: S = {}, showFirstButton: w = false, showLastButton: j = false, slotProps: R = {}, slots: A = {}, ...D } = o, F = o, C = dc(F), M = (R == null ? void 0 : R.select) ?? S, k = M.native ? "option" : lc;
    let T;
    (l === et || l === "td") && (T = s || 1e3);
    const N = po(M.id), O = po(M.labelId), L = () => a === -1 ? (v + 1) * x : x === -1 ? a : Math.min(a, (v + 1) * x), z = {
      slots: A,
      slotProps: R
    }, [W, Y] = ne("root", {
      ref: n,
      className: C.root,
      elementType: nc,
      externalForwardedProps: {
        ...z,
        component: l,
        ...D
      },
      ownerState: F,
      additionalProps: {
        colSpan: T
      }
    }), [ie, ae] = ne("toolbar", {
      className: C.toolbar,
      elementType: oc,
      externalForwardedProps: z,
      ownerState: F
    }), [Se, Ce] = ne("spacer", {
      className: C.spacer,
      elementType: rc,
      externalForwardedProps: z,
      ownerState: F
    }), [ge, ee] = ne("selectLabel", {
      className: C.selectLabel,
      elementType: ic,
      externalForwardedProps: z,
      ownerState: F,
      additionalProps: {
        id: O
      }
    }), [I, se] = ne("select", {
      className: C.select,
      elementType: sc,
      externalForwardedProps: z,
      ownerState: F
    }), [te, $e] = ne("menuItem", {
      className: C.menuItem,
      elementType: k,
      externalForwardedProps: z,
      ownerState: F
    }), [Oe, je] = ne("displayedRows", {
      className: C.displayedRows,
      elementType: ac,
      externalForwardedProps: z,
      ownerState: F
    });
    return c.jsx(W, {
      ...Y,
      children: c.jsxs(ie, {
        ...ae,
        children: [
          c.jsx(Se, {
            ...Ce
          }),
          _.length > 1 && c.jsx(ge, {
            ...ee,
            children: g
          }),
          _.length > 1 && c.jsx(I, {
            variant: "standard",
            ...!M.variant && {
              input: fr || (fr = c.jsx(Di, {}))
            },
            value: x,
            onChange: m,
            id: N,
            labelId: O,
            ...M,
            classes: {
              ...M.classes,
              root: oe(C.input, C.selectRoot, (M.classes || {}).root),
              select: oe(C.select, (M.classes || {}).select),
              icon: oe(C.selectIcon, (M.classes || {}).icon)
            },
            disabled: d,
            ...se,
            children: _.map((ce) => y.createElement(te, {
              ...$e,
              key: ce.label ? ce.label : ce,
              value: ce.value ? ce.value : ce
            }, ce.label ? ce.label : ce))
          }),
          c.jsx(Oe, {
            ...je,
            children: p({
              from: a === 0 ? 0 : v * x + 1,
              to: L(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          c.jsx(r, {
            className: C.actions,
            backIconButtonProps: i,
            count: a,
            nextIconButtonProps: f,
            onPageChange: h,
            page: v,
            rowsPerPage: x,
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
  function fc(e) {
    return me("MuiTableRow", e);
  }
  const gr = ye("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), gc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: i } = e;
    return xe({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        i && "footer"
      ]
    }, fc, t);
  }, hc = U("tr", {
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
    [`&.${gr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${gr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ze(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ze(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), hr = "tr", kt = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: i = hr, hover: s = false, selected: l = false, ...a } = o, d = y.useContext(Yn), u = {
      ...o,
      component: i,
      hover: s,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, p = gc(u);
    return c.jsx(hc, {
      as: i,
      ref: n,
      className: oe(p.root, r),
      role: i === hr ? null : "row",
      ownerState: u,
      ...a
    });
  }), mc = le(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function yc(e) {
    return me("MuiTableSortLabel", e);
  }
  const Qn = ye("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), vc = (e) => {
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
    return xe(r, yc, t);
  }, xc = U(Ln, {
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
      [`& .${Qn.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${Qn.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${Qn.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), bc = U("span", {
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
  }))), wc = y.forwardRef(function(t, n) {
    const o = ve({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: i, className: s, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = mc, slots: u = {}, slotProps: p = {}, ...g } = o, f = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = vc(f), m = {
      slots: u,
      slotProps: p
    }, [v, x] = ne("root", {
      elementType: xc,
      externalForwardedProps: m,
      ownerState: f,
      className: oe(h.root, s),
      ref: n
    }), [_, S] = ne("icon", {
      elementType: bc,
      externalForwardedProps: m,
      ownerState: f,
      className: h.icon
    });
    return c.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...x,
      ...g,
      children: [
        i,
        a && !r ? null : c.jsx(_, {
          as: d,
          ...S
        })
      ]
    });
  }), ti = le(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), ni = le(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), oi = le(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), vo = le(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), Cc = le(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Pn = le(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), mr = le(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), yr = le(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), _c = le(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), Sc = le(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), nn = le(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), ri = le(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), jc = le(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Rc = le(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Mc = le(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), an = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function $c(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function Ac(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  const vr = "b64:";
  function ii(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(vr) ? Ac(e.slice(vr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Pc({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: i, loading: s }) {
    const [l, a] = y.useState(""), [d, u] = y.useState(null), [p, g] = y.useState(null), f = y.useRef(0), h = !l, m = y.useMemo(() => {
      if (!l) return e;
      const C = l.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(C) || M.headerName.toLowerCase().includes(C));
    }, [
      e,
      l
    ]), v = y.useMemo(() => e.filter((C) => C.visible).length, [
      e
    ]), x = y.useCallback((C, M) => {
      C.stopPropagation(), r(e.map((k) => k.path === M ? {
        ...k,
        visible: !k.visible
      } : k));
    }, [
      e,
      r
    ]), _ = y.useCallback((C) => {
      r(e.map((M) => ({
        ...M,
        visible: C
      })));
    }, [
      e,
      r
    ]), S = y.useCallback((C, M) => {
      C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", M), u(M);
    }, []), w = y.useCallback((C, M) => {
      C.preventDefault(), f.current += 1, M !== d && g(M);
    }, [
      d
    ]), j = y.useCallback((C) => {
      C.preventDefault(), f.current -= 1, f.current <= 0 && (f.current = 0, g(null));
    }, []), R = y.useCallback((C) => {
      C.preventDefault(), C.dataTransfer.dropEffect = "move";
    }, []), A = y.useCallback((C, M) => {
      C.preventDefault(), f.current = 0, g(null), u(null);
      const k = C.dataTransfer.getData("text/plain");
      if (!k || k === M) return;
      const T = [
        ...e
      ], N = T.findIndex((z) => z.path === k), O = T.findIndex((z) => z.path === M);
      if (N === -1 || O === -1) return;
      const [L] = T.splice(N, 1);
      T.splice(O, 0, L), r(T);
    }, [
      e,
      r
    ]), D = y.useCallback(() => {
      f.current = 0, u(null), g(null);
    }, []), F = y.useCallback(() => {
      r(e.map((C) => ({
        path: C.path,
        visible: true,
        headerName: C.path.split(".").pop() || C.path
      })));
    }, [
      e,
      r
    ]);
    return c.jsxs(G, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(ei, {
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
              placeholder: b.t("json_table_search_columns"),
              value: l,
              onChange: (C) => a(C.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(yo, {
                    position: "start",
                    children: c.jsx(ri, {
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
            c.jsx(Ve, {
              title: b.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(we, {
                  size: "small",
                  onClick: i,
                  disabled: s,
                  children: c.jsx(Sc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Ve, {
              title: b.t("json_table_show_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: () => _(true),
                children: c.jsx(Rc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ve, {
              title: b.t("json_table_hide_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: () => _(false),
                children: c.jsx(Mc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ve, {
              title: b.t("json_table_reset_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: F,
                children: c.jsx(nn, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(G, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: m.length === 0 ? c.jsx(G, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(P, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? b.t("json_table_no_columns") : b.t("json_table_no_search_results")
            })
          }) : m.map((C) => {
            const M = t.find((N) => N.path === C.path), k = n === C.path, T = (M == null ? void 0 : M.type) || "string";
            return c.jsx(Kl, {
              onClick: () => o(C.path),
              draggable: h,
              onDragStart: h ? (N) => S(N, C.path) : void 0,
              onDragEnter: h ? (N) => w(N, C.path) : void 0,
              onDragLeave: h ? j : void 0,
              onDragOver: h ? R : void 0,
              onDrop: h ? (N) => A(N, C.path) : void 0,
              onDragEnd: h ? D : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: h ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: k ? "primary.main" : "divider",
                backgroundColor: k ? "action.selected" : "background.paper",
                opacity: d === C.path ? 0.4 : C.visible ? 1 : 0.55,
                borderTop: p === C.path ? "3px solid" : void 0,
                borderTopColor: p === C.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: k ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(G, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  h && c.jsx(Cc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  c.jsx(fn, {
                    checked: C.visible,
                    onClick: (N) => x(N, C.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  c.jsxs(G, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(P, {
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
                      C.headerName && C.headerName !== C.path && c.jsx(P, {
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
                  c.jsx(En, {
                    label: T,
                    size: "small",
                    sx: {
                      backgroundColor: an[T] || an.string,
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
            }, C.path);
          })
        }),
        e.length > 0 && c.jsx(G, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(P, {
            variant: "caption",
            color: "text.secondary",
            children: [
              v,
              " / ",
              e.length,
              " ",
              b.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function On(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function si(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: i = false } = t;
    let s = e.toFixed(n);
    if (i) {
      const [l, a] = s.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${o}${s}${r}`;
  }
  const Ic = [
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
  function li(e, t) {
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
  function ai(e, t, n) {
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
      else return On(e);
      if (isNaN(o.getTime())) return On(e);
      const r = t || "yyyy-MM-dd", i = (a, d = 2) => String(a).padStart(d, "0"), s = {
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
      for (const [a, d] of Object.entries(s).sort((u, p) => p[0].length - u[0].length)) l = l.replaceAll(a, d);
      return l;
    } catch {
      return On(e);
    }
  }
  function xo(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : On(e);
  }
  function ci(e, t) {
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
  function Fc({ format: e, onChange: t, discoveredColumn: n }) {
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
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_number_format")
        }),
        c.jsxs(G, {
          children: [
            c.jsxs(P, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                b.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(Xi, {
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
          label: b.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (r) => t({
            type: "number",
            numberPrefix: r.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        c.jsx(Ae, {
          label: b.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (r) => t({
            type: "number",
            numberSuffix: r.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        c.jsx(gt, {
          control: c.jsx(At, {
            checked: e.numberThousandsSeparator || false,
            onChange: (r) => t({
              type: "number",
              numberThousandsSeparator: r.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(P, {
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
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(P, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                o,
                " \u2192",
                " ",
                si(o, {
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
  function zc({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_date_format")
        }),
        t && c.jsx(Ae, {
          label: b.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: b.t("json_table_date_detected_hint")
        }),
        c.jsxs(dn, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(pn, {
              children: b.t("json_table_date_output_format")
            }),
            c.jsx(Vt, {
              label: b.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (o) => n({
                type: "date",
                dateFormat: o.target.value,
                dateInputFormat: t
              }),
              children: Ic.map((o) => c.jsx(_e, {
                value: o.value,
                children: o.label
              }, o.value))
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
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(P, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: ai(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function kc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_boolean_format")
        }),
        c.jsx(Ae, {
          label: b.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        c.jsx(Ae, {
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
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(Ee, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                c.jsxs(P, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    xo(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(P, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    xo(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function bo({ value: e, onChange: t, label: n }) {
    const o = vn(), [r, i] = y.useState(null), s = y.useRef(null), [l, a] = y.useState(null), d = !!r;
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
    ]), c.jsxs(G, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        c.jsxs(G, {
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
            c.jsx(P, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            c.jsx(G, {
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
              children: c.jsx(vo, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(Ei, {
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
          children: c.jsx(G, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(Oi, {
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
  function Tc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_string_format")
        }),
        c.jsxs(dn, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(pn, {
              children: b.t("json_table_string_case")
            }),
            c.jsxs(Vt, {
              label: b.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(_e, {
                  value: "none",
                  children: b.t("json_table_string_case_none")
                }),
                c.jsx(_e, {
                  value: "upper",
                  children: b.t("json_table_string_case_upper")
                }),
                c.jsx(_e, {
                  value: "lower",
                  children: b.t("json_table_string_case_lower")
                }),
                c.jsx(_e, {
                  value: "title",
                  children: b.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        c.jsxs(Ee, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Ae, {
              label: b.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            c.jsx(Ae, {
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
        c.jsx(gt, {
          control: c.jsx(At, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: b.t("json_table_string_trim")
        }),
        c.jsx(Ae, {
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
        c.jsx(Ae, {
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
        e.stringRegex && c.jsxs(Ee, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Ae, {
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
            c.jsx(Ae, {
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
        c.jsx(Ni, {}),
        c.jsxs(Ee, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(gt, {
              control: c.jsx(At, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(P, {
                variant: "body2",
                fontWeight: "bold",
                children: b.t("json_table_string_font_weight")
              })
            }),
            c.jsx(gt, {
              control: c.jsx(At, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(P, {
                variant: "body2",
                fontStyle: "italic",
                children: b.t("json_table_string_font_style")
              })
            })
          ]
        }),
        c.jsxs(Ee, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Ae, {
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
            c.jsx(bo, {
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
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(P, {
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
              children: ci("Hello World", e ?? {
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
  function Dc(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function ft(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        ft(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          ft(r, t - 1);
        }
      }
    }
    return e;
  }
  function Ec(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+pe(e)) && t !== null) throw NaN;
    if (Number.isNaN(+pe(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Oc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Nc(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function Lc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function Vc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function Hc(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let i = ft(r ? e[0] : n, o);
    for (let s = r; s < e.length; s++) i = ft(await t(i, e[s]), o);
    return i;
  }
  const Bn = {
    filter: Oc,
    some: Nc,
    every: Lc,
    map: Vc,
    reduce: Hc
  }, Q = /* @__PURE__ */ Symbol.for("json_logic_sync"), De = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Xe = /* @__PURE__ */ Symbol.for("json_logic_original"), xr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Ft(e) {
    return typeof e == "function" ? e[Q] === true : Array.isArray(e) ? e.every(Ft) : !(e && e.asyncMethod && !e.method);
  }
  function ui(e, t = true) {
    return e[Q] = t, e;
  }
  function yn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const Zn = /* @__PURE__ */ new WeakMap();
  function br(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (Zn.has(e) || Zn.set(e, Bc(e)), Zn.get(e));
  }
  function Bc(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Wc(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), Ft(t[r]) || (o.asyncDetected = true), n += (Ft(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][De] < "u" ? n += t[r][De] : n += fe(t[r], o));
    return {
      [De]: n
    };
  }
  function Gc(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Wn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Wn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Wn(r, t, n);
    }
    return true;
  }
  function wo(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => wo(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return Ft(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][Q] == "function" && t.methods[o][Q](e, {
        engine: t
      })) : wo(r, t) : false;
    }
    return true;
  }
  function fe(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: i = [], engine: s } = t;
    function l(u, p = false) {
      return Gc(u, p) ? JSON.stringify(u) : (i.push(u), `values[${i.length - 1}]`);
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
      if (!t.engine.disableInline && s.methods[p] && Wn(e, s, t)) return wo(e, s) ? l((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(s.run(e))})`) : (r.push(s.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let g = e[p];
      if ((!g || typeof g != "object") && !s.methods[p].lazy && (g = [
        g
      ]), s.methods[p] && s.methods[p].compile) {
        let m = s.methods[p].compile(g, t);
        if (m[De] && (m = m[De]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let f = s.methods[p].optimizeUnary ? "" : "coerceArray";
      !f && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : f && Array.isArray(g) && (f = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof s.methods[p] == "function") {
        a = !Ft(s.methods[p]);
        const m = h[br(s.methods[p]) - 1] || h[2];
        return d(`engine.methods["${p}"](${f}(` + fe(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[p] && s.methods[p].asyncMethod);
        const m = br(a ? s.methods[p].asyncMethod : s.methods[p].method);
        let v = h[m - 1] || h[2];
        return a && typeof s.methods[p][Q] == "function" && s.methods[p][Q](g, {
          engine: s
        }) && (a = false, v = v.replace("engine", "engine.fallback")), s.methods[p] && !s.methods[p].lazy ? d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${f}(` + fe(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function Gn(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Wc
    }, t));
    const n = fe(e, t);
    return Uc(e, n, t);
  }
  function Uc(e, t, n) {
    const { engine: o, methods: r, notTraversed: i, processing: s = [], values: l } = n, a = [];
    s.forEach((u, p) => {
      t = t.replace(`__%%%${p}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, r, i, Bn, o, a, yn, pe, Dc, Ec, ft), {
      [Q]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const qc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Nt = qc(), Xt = /* @__PURE__ */ new Map();
  function Dt(e) {
    if (Xt.has(e)) return Xt.get(e);
    Xt.size > 2048 && Xt.clear();
    const t = Yc(e);
    return Xt.set(e, t), t;
  }
  function Yc(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const l = e[s];
      l === n ? e[s + 1] === t || e[s + 1] === o ? (i += e[s + 1], s++) : e[s + 1] === n ? (i += n, s++) : i += n : l === t ? (r.push(i), i = "") : i += l;
    }
    return r.length !== e.length && r.push(i), r;
  }
  const Co = {
    get: {
      [Q]: true,
      method: ([e, t, n], o, r, i) => {
        const s = n === void 0 ? null : n, l = Dt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return s;
        return i.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const i = Dt(o);
          return Nt ? `((${fe(r, t)})${i.map((s) => `?.[${fe(s, t)}]`).join("")} ?? ${fe(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((s, l) => `(${s}||0)[${JSON.stringify(l)}]`, `(${fe(r, t)}||0)`)}, ${fe(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Xe]: true,
      [Q]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let i = 0;
        for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
        const s = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Dt(String(e));
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
          const r = Dt(n);
          if (!Nt) {
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
      [Q]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Dt(String(e[o]));
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
      [Q]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = Co.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = Co.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [De]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Jc = {
    ...Co
  }, K = {
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
  function Le(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Le(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][Q] == "function" ? t.methods[o][Q](r, n) : t.methods[o][Q] : typeof t.methods[o][Q] == "function" ? t.methods[o][Q](r, n) : t.methods[o][Q] && Le(r, t, n);
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
  const Kt = Nn("every", true), X = {
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
      if (e.length === 0) throw K;
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
      if (e.length === 0) throw K;
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
      if (e.length < 2) throw K;
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
      if (!e.length || typeof e[0] != "number") throw K;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw K;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw K;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw K;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: ui((e) => e, true),
      [Q]: () => true
    },
    if: {
      [Xe]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
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
      [Q]: (e, t) => Le(e, t.engine, t),
      deterministic: (e, t) => Me(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
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
      [Q]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = re(e[i], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
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
      [Q]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
        let r;
        for (let i = 0; i < e.length; i++) if (r = re(e[i], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      compile: (e, t) => Nt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = fe(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${fe(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [Q]: (e, t) => Le(e, t.engine, t),
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
            [De]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [De]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [De]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[De].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[De].includes("await") && (n[De] = n[De].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [Q]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = re(e[i], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
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
        if (!e) throw K;
        const r = re(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw K;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw K;
        const r = await re(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw K;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => X.val.method(e, t, n, o, xr) !== xr,
      deterministic: false
    },
    val: {
      [Xe]: true,
      [Q]: true,
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
          return Nt ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Le(e, t.engine, t) && Me(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Nt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (Nt ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: Nn("map"),
    some: {
      ...Nn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
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
      [Q]: Kt[Q],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
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
        return Kt.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${Kt.compile([
        {
          [De]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: Kt.deterministic,
      lazy: Kt.lazy
    },
    none: {
      [Q]: (e, t) => Le(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !X.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await X.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = X.some.compile(e, t);
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
    filter: Nn("filter", true),
    reduce: {
      deterministic: (e, t) => Me(e[0], t.engine, t) && Me(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw K;
        const { async: n } = t;
        let [o, r, i] = e;
        o = fe(o, t), typeof i < "u" && (i = fe(i, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = Gn(r, s);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!Ft(r) || o.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${i}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
        let [r, i, s] = e;
        s = ft(re(s, o, t, n), o.options.maxDepth), r = re(r, o, t, n) || [];
        let l = (a, d) => ft(o.run(i, {
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
          l = (d, u) => ft(a({
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
      [Q]: (e, t) => Le(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw K;
        let [r, i, s] = e;
        return s = ft(await o.run(s, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], Bn.reduce(r, (l, a) => o.run(i, {
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
      [Q]: true,
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
      [Q]: (e, t) => Le(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${Gn(e[o], {
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
      [Q]: (e, t) => Le(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        throw K;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${fe(e[r], t)}`), o), []).join(",")} })`;
        throw K;
      },
      asyncMethod: async (e, t, n, o) => await Bn.reduce(Object.keys(e), async (i, s) => {
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
      [De]: e
    }, o = e.length === 3;
    return {
      method: (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw K;
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
        if (!Array.isArray(r) || r.length <= 1) throw K;
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
      [Q]: (r, i) => Le(r, i.engine, i),
      deterministic: (r, i) => Me(r, i.engine, i),
      lazy: true
    };
  }
  function Nn(e, t = false) {
    return {
      deterministic: (n, o) => Me(n[0], o.engine, o) && Me(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Xe]: true,
      [Q]: (n, o) => Le(n, o.engine, o),
      method: (n, o, r, i) => {
        if (!Array.isArray(n)) throw K;
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
        if (!Array.isArray(n)) throw K;
        let [s, l] = n;
        return s = await i.run(s, o, {
          above: r
        }) || [], Bn[e](s, async (a, d) => {
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
        if (!Array.isArray(n)) throw K;
        const { async: r } = o, [i, s] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = Gn(s, l), d = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, u = t ? o.compile`engine.truthy` : o.compile``;
        return r && !Ft(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : o.compile`(${i} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  X.every = X.all;
  X["?:"] = X.if;
  Object.keys(X).forEach((e) => {
    typeof X[e] == "function" && (X[e][Q] = true), X[e].deterministic = typeof X[e].deterministic > "u" ? true : X[e].deterministic;
  });
  X.if.compile = function(e, t) {
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
  function wn(e, t) {
    if (Array.isArray(e)) return pe(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + fe(e, t);
    if (typeof e == "string") return "+" + pe(+e);
    const n = fe(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + pe(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? pe(NaN) : `(+precoerceNumber(${n}))`;
  }
  X["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => wn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${fe(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  X["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw K;
      return `precoerceNumber(${e.map((n) => wn(n, t)).join(" % ")})`;
    }
    return `assertSize(${fe(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  X.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  X["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw K;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => wn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${fe(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  X["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw K;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = wn(n, t);
        return o && r === "+0" && pe(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${fe(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  X["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => wn(n, t)).join(" * ")})` : `(${fe(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  X["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  X.not = X["!"];
  X["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  X.none.deterministic = X.some.deterministic;
  X.throw.deterministic = (e, t) => t.insideTry && Me(e, t.engine, t);
  X["+"].optimizeUnary = X["-"].optimizeUnary = X["!"].optimizeUnary = X["!!"].optimizeUnary = X.cat.optimizeUnary = X.throw.optimizeUnary = true;
  const Xc = {
    ...X,
    ...Jc
  }, Kc = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Qc(e, t, n, o) {
    const r = t.methods[n], i = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, d) => i(l, a, d || o, t);
    }
    let s = e[n];
    if ((!s || typeof s != "object") && !r.optimizeUnary && (s = [
      s
    ]), Array.isArray(s) && s.length === 1 && r.optimizeUnary && !Array.isArray(s[0]) && (s = s[0]), Array.isArray(s)) {
      const l = s.map((a) => Fe(a, t, o));
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
      const l = Fe(s, t, o);
      if (r.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => i(l(d, u), d, u || o, t);
        if ((n === "var" || n === "val") && t.methods[n][Xe]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Dt(String(l));
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
      return typeof l == "function" ? (a, d) => i(yn(l(a, d)), a, d || o, t) : (a, d) => i(yn(l), a, d || o, t);
    }
  }
  const wr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function Zc(e, t, n) {
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
      const [o, r, i] = e.if || e["?:"], s = Fe(o, t, n), l = Fe(r, t, n), a = Fe(i, t, n);
      return typeof s == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(s(d, u)) ? l(d, u) : a(d, u) : typeof s == "function" && typeof l == "function" ? (d, u) => t.truthy(s(d, u)) ? l(d, u) : a : typeof s == "function" && typeof a == "function" ? (d, u) => t.truthy(s(d, u)) ? l : a(d, u) : typeof s == "function" ? (d, u) => t.truthy(s(d, u)) ? l : a : t.truthy(s) ? l : a;
    }
    if (e.filter && t.methods.filter[Xe] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, i = Fe(r, t, n);
      if (typeof i != "function") return t.truthy(i) ? Fe(o, t, n) : [];
    }
    for (const o in wr) if (e[o] && Array.isArray(e[o]) && t.methods[o][Xe]) {
      const r = wr[o], i = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+pe(l))) throw NaN;
        if (Number.isNaN(+pe(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [s, l] = e[o], a = Fe(s, t, n), d = Fe(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (u, p) => i(a(u, p), d(u, p)) : typeof a == "function" ? (u, p) => i(a(u, p), d) : typeof d == "function" ? (u, p) => i(a, d(u, p)) : i(a, d);
      }
      if (e[o].length === 3) {
        const [s, l, a] = e[o], d = Fe(s, t, n), u = Fe(l, t, n), p = Fe(a, t, n);
        let g;
        return typeof d == "function" && typeof u == "function" && typeof p == "function" ? (f, h) => i(d(f, h), g = u(f, h)) && i(g, p(f, h)) : typeof d == "function" && typeof u == "function" ? (f, h) => i(d(f, h), g = u(f, h)) && i(g, p) : typeof d == "function" && typeof p == "function" ? (f, h) => i(d(f, h), u) && i(u, p(f, h)) : typeof u == "function" && typeof p == "function" ? (f, h) => i(d, g = u(f, h)) && i(g, p(f, h)) : typeof d == "function" ? (f, h) => i(d(f, h), u) && i(u, p) : typeof u == "function" ? (f, h) => i(d, g = u(f, h)) && i(g, p) : typeof p == "function" ? (f, h) => i(d, u) && i(u, p(f, h)) : i(d, u) && i(u, p);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, i] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const s = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (i = i || 0, s && l) return Fe({
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
        if (i = typeof i > "u" ? 1 : i, s && l) return Fe({
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
  function Fe(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => Fe(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, i) => o.map((s) => typeof s == "function" ? s(r, i) : s);
    }
    if (e && typeof e == "object") {
      const o = Zc(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), i = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, i)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Wn(e, t, {
        engine: t
      });
      if (i in t.methods) {
        const a = Qc(e, t, i, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: i
      };
    }
    return e;
  }
  class eu {
    constructor(t = Xc, n = {
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
        ] : yn(this.run(s, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], d = a ? s : !s || typeof s != "object" ? [
          s
        ] : yn(this.run(s, n, {
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
      }, Object.assign(n, Kc({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = ui(n);
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
        this.optimizedMap.set(t, Fe(t, this, r)), this.missesSinceSeen++;
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
      const { above: o = [], top: r = true } = n, i = Gn(t, {
        engine: this,
        above: o
      });
      return r === false && i.deterministic ? i() : i;
    }
  }
  function Ge(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const Jn = new eu();
  Jn.addMethod("contains", ([e, t]) => Ge(e).includes(Ge(t)), {
    deterministic: true
  });
  Jn.addMethod("startsWith", ([e, t]) => Ge(e).startsWith(Ge(t)), {
    deterministic: true
  });
  Jn.addMethod("endsWith", ([e, t]) => Ge(e).endsWith(Ge(t)), {
    deterministic: true
  });
  function Qt() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const _o = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), tu = {
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
  }, nu = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], ou = {
    var: "value"
  };
  function ru(e, t, n = "string") {
    const o = Number(t), r = n === "number", i = n === "date", s = ou;
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
  const iu = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function su(e, t = "string") {
    const n = e.conditions.filter((r) => _o.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && iu.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => ru(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function dt(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function eo(e) {
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
  function Cr(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: Qt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => eo(r)).filter((r) => r !== null).map((r) => ({
          id: Qt(),
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
        const o = n.map((r) => eo(r)).filter((r) => r !== null).map((r) => ({
          id: Qt(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = eo(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: Qt(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: Qt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const lu = 200, Zt = /* @__PURE__ */ new Map();
  function au(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = Zt.get(n);
      return o || (o = Jn.build(e), Zt.size >= lu && Zt.delete(Zt.keys().next().value), Zt.set(n, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const cu = {
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
  function uu({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Cr(e));
    y.useEffect(() => {
      r(Cr(e));
    }, [
      e
    ]);
    const i = tu[t] ?? nu, s = y.useCallback((g) => {
      r(g), n(su(g, t));
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
    return c.jsxs(Ee, {
      spacing: 1,
      children: [
        p && c.jsxs(G, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Lr, {
              value: o.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": b.t("json_table_condition_mode_label"),
              children: [
                c.jsx(Vn, {
                  value: "and",
                  "aria-label": b.t("json_table_condition_mode_all"),
                  children: b.t("json_table_condition_mode_all")
                }),
                c.jsx(Vn, {
                  value: "or",
                  "aria-label": b.t("json_table_condition_mode_any"),
                  children: b.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? b.t("json_table_condition_mode_hint_and") : b.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, f) => {
          const h = !_o.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(G, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(dn, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(pn, {
                    children: b.t("json_table_condition_operator")
                  }),
                  c.jsx(Vt, {
                    label: b.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const x = v.target.value, _ = _o.has(x) ? "" : g.operand;
                      l(f, {
                        operator: x,
                        operand: _
                      });
                    },
                    children: i.map((v) => c.jsx(_e, {
                      value: v,
                      children: b.t(cu[v])
                    }, v))
                  })
                ]
              }),
              h && c.jsx(Ae, {
                label: b.t("json_table_condition_value"),
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
              p && c.jsx(Ve, {
                title: b.t("json_table_condition_remove"),
                children: c.jsx(we, {
                  size: "small",
                  onClick: () => a(f),
                  "aria-label": b.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(Vr, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? f);
        }),
        c.jsx(gn, {
          startIcon: c.jsx(ti, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": b.t("json_table_condition_add"),
          children: p ? b.t("json_table_condition_add") : b.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function du({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
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
    return c.jsxs(Ee, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(G, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Lr, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, p) => {
                p && r(p);
              },
              "aria-label": b.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(Vn, {
                  value: "first-match",
                  "aria-label": b.t("json_table_cell_style_mode_first"),
                  children: b.t("json_table_cell_style_mode_first")
                }),
                c.jsx(Vn, {
                  value: "all-match",
                  "aria-label": b.t("json_table_cell_style_mode_all"),
                  children: b.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? b.t("json_table_cell_style_mode_hint_first") : b.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && c.jsxs(G, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            c.jsx(P, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: b.t("json_table_no_style_rules")
            }),
            c.jsx(P, {
              variant: "caption",
              children: b.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, p) => {
          const g = (e || []).length, f = u.backgroundColor ? Ht(u.backgroundColor) : void 0, h = u.textColor ? Ht(u.textColor) : void 0;
          return c.jsx(nt, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(Ee, {
              spacing: 1.5,
              children: [
                c.jsxs(G, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(G, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: c.jsxs(P, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          b.t("json_table_rule"),
                          " ",
                          p + 1
                        ]
                      })
                    }),
                    c.jsxs(G, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(Ve, {
                          title: b.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(we, {
                              size: "small",
                              onClick: () => a(p),
                              disabled: p === 0,
                              "aria-label": b.t("json_table_rule_move_up"),
                              children: c.jsx(oi, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ve, {
                          title: b.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(we, {
                              size: "small",
                              onClick: () => d(p),
                              disabled: p >= g - 1,
                              "aria-label": b.t("json_table_rule_move_down"),
                              children: c.jsx(ni, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ve, {
                          title: b.t("json_table_delete_rule"),
                          children: c.jsx(we, {
                            size: "small",
                            onClick: () => s(p),
                            color: "error",
                            "aria-label": b.t("json_table_delete_rule"),
                            children: c.jsx(Li, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(uu, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (m) => i(p, {
                    logic: m
                  })
                }, u.id ?? p),
                c.jsxs(Ee, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    c.jsx(bo, {
                      label: b.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => i(p, {
                        backgroundColor: m
                      })
                    }),
                    c.jsx(bo, {
                      label: b.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (m) => i(p, {
                        textColor: m
                      })
                    })
                  ]
                }),
                c.jsxs(Ee, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    c.jsx(gt, {
                      control: c.jsx(fn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => i(p, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx(mr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(mr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(P, {
                        variant: "caption",
                        children: b.t("json_table_bold")
                      })
                    }),
                    c.jsx(gt, {
                      control: c.jsx(fn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => i(p, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(yr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(yr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(P, {
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
                    ...u.backgroundColor ? f ? {
                      background: f
                    } : {
                      backgroundColor: u.backgroundColor
                    } : {},
                    fontWeight: u.fontWeight || "normal",
                    fontStyle: u.fontStyle || "normal"
                  },
                  children: c.jsx(P, {
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
          }, u.id ?? p);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? b.t("json_table_rules_priority_hint") : b.t("json_table_rules_all_match_hint")
        }),
        c.jsx(gn, {
          startIcon: c.jsx(ti, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: b.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function pu({ column: e, discoveredColumn: t, onChange: n }) {
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
    ]), x = y.useCallback((w) => {
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
        ].forEach((D) => {
          delete j[D];
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
    ]), _ = y.useCallback((w) => {
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
    return c.jsxs(G, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(G, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(En, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: an[s] || an.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(P, {
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
        c.jsxs(Ee, {
          spacing: 1,
          children: [
            c.jsxs(Sn, {
              expanded: o.basic,
              onChange: () => i("basic"),
              disableGutters: true,
              children: [
                c.jsx(Rn, {
                  expandIcon: c.jsx(Pn, {}),
                  children: c.jsxs(G, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(P, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_basic")
                      }),
                      c.jsx(Ve, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !d,
                            onClick: (w) => {
                              w.stopPropagation(), u();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(nn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(jn, {
                  children: c.jsxs(Ee, {
                    spacing: 2,
                    children: [
                      c.jsx(Ae, {
                        label: b.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx(Ae, {
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
                      c.jsxs(dn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(pn, {
                            children: b.t("json_table_align")
                          }),
                          c.jsxs(Vt, {
                            label: b.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              c.jsx(_e, {
                                value: "left",
                                children: b.t("json_table_align_left")
                              }),
                              c.jsx(_e, {
                                value: "center",
                                children: b.t("json_table_align_center")
                              }),
                              c.jsx(_e, {
                                value: "right",
                                children: b.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(gt, {
                        control: c.jsx(At, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: c.jsx(P, {
                          variant: "body2",
                          children: b.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Sn, {
              expanded: o.formatting,
              onChange: () => i("formatting"),
              disableGutters: true,
              children: [
                c.jsx(Rn, {
                  expandIcon: c.jsx(Pn, {}),
                  children: c.jsxs(G, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(P, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_formatting")
                      }),
                      c.jsx(Ve, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(nn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(jn, {
                  children: c.jsxs(Ee, {
                    spacing: 2,
                    children: [
                      c.jsxs(dn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(pn, {
                            children: b.t("json_table_format_type")
                          }),
                          c.jsxs(Vt, {
                            value: ((_b = e.format) == null ? void 0 : _b.type) || "auto",
                            label: b.t("json_table_format_type"),
                            onChange: (w) => {
                              const j = w.target.value;
                              j === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : x({
                                type: j
                              });
                            },
                            children: [
                              c.jsxs(_e, {
                                value: "auto",
                                children: [
                                  b.t("json_table_format_type_auto"),
                                  ` (${s})`
                                ]
                              }),
                              c.jsx(_e, {
                                value: "string",
                                children: b.t("json_table_format_type_string")
                              }),
                              c.jsx(_e, {
                                value: "number",
                                children: b.t("json_table_format_type_number")
                              }),
                              c.jsx(_e, {
                                value: "date",
                                children: b.t("json_table_format_type_date")
                              }),
                              c.jsx(_e, {
                                value: "boolean",
                                children: b.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "number" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "number") && c.jsx(Fc, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: x,
                        discoveredColumn: t
                      }),
                      (s === "date" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "date") && c.jsx(zc, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: x
                      }),
                      (s === "boolean" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "boolean") && c.jsx(kc, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: x
                      }),
                      (s === "string" || ((_f = e.format) == null ? void 0 : _f.type) === "string") && c.jsx(Tc, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: x
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && s !== "string" && !e.format && c.jsx(P, {
                        variant: "body2",
                        color: "text.secondary",
                        children: b.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Sn, {
              expanded: o.styling,
              onChange: () => i("styling"),
              disableGutters: true,
              children: [
                c.jsx(Rn, {
                  expandIcon: c.jsx(Pn, {}),
                  children: c.jsxs(G, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(G, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsx(P, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: b.t("json_table_section_styling")
                          }),
                          (((_g = e.cellStyle) == null ? void 0 : _g.length) ?? 0) > 0 && c.jsx(En, {
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
                      c.jsx(Ve, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(nn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(jn, {
                  children: c.jsx(du, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: s,
                    onStyleChange: _,
                    onModeChange: S
                  })
                })
              ]
            }),
            c.jsxs(Sn, {
              expanded: o.advanced,
              onChange: () => i("advanced"),
              disableGutters: true,
              children: [
                c.jsx(Rn, {
                  expandIcon: c.jsx(Pn, {}),
                  children: c.jsxs(G, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(P, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_advanced")
                      }),
                      c.jsx(Ve, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(nn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(jn, {
                  children: c.jsxs(Ee, {
                    spacing: 2,
                    children: [
                      c.jsx(gt, {
                        control: c.jsx(At, {
                          checked: e.sortable ?? true,
                          onChange: (w) => n({
                            ...e,
                            sortable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(P, {
                          variant: "body2",
                          children: b.t("json_table_sortable")
                        })
                      }),
                      c.jsx(gt, {
                        control: c.jsx(At, {
                          checked: e.filterable ?? false,
                          onChange: (w) => n({
                            ...e,
                            filterable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(P, {
                          variant: "body2",
                          children: b.t("json_table_filterable")
                        })
                      }),
                      t && c.jsxs(nt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(P, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: b.t("json_table_analysis_info")
                          }),
                          c.jsxs(Ee, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_type_label")
                                  }),
                                  c.jsx(En, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: an[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_confidence")
                                  }),
                                  c.jsxs(P, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_nulls")
                                  }),
                                  c.jsxs(P, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      l > 0 && ` (${Math.round(t.nullCount / l * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_distinct")
                                  }),
                                  c.jsx(P, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_range")
                                  }),
                                  c.jsxs(P, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_date_input_format")
                                  }),
                                  c.jsx(P, {
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
  const fu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, gu = /^\d{4}-\d{2}-\d{2}$/, hu = /^(\d{2})\.(\d{2})\.(\d{4})$/, mu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, yu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, vu = /^(\d{2})\/(\d{2})\/(\d{4})$/, xu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, bu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function In(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function to(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Fn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const wu = [
    {
      regex: fu,
      format: "ISO-8601"
    },
    {
      regex: gu,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return In(n, t);
      }
    },
    {
      regex: yu,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return In(t, n) && Fn(o, r, i);
      }
    },
    {
      regex: mu,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return In(t, n) && Fn(o, r);
      }
    },
    {
      regex: hu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return In(t, n);
      }
    },
    {
      regex: bu,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return to(t, n) && Fn(o, r, i);
      }
    },
    {
      regex: xu,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return to(t, n) && Fn(o, r);
      }
    },
    {
      regex: vu,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return to(t, n);
      }
    }
  ];
  function Cu(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of wu) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function _u(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Su(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = _u(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = Cu(e);
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
  function ju(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Ru(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function Mu(e) {
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
  function _r(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function $u(e, t) {
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
  function Au(e, t, n = 100, o = 0.8) {
    const r = /* @__PURE__ */ new Map();
    for (const i of e) r.set(i, Mu(i));
    for (const i of t) for (const s of e) {
      const l = r.get(s), a = i[s], d = Su(a);
      if (_r(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && _r(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = $u(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((i) => {
      const s = r.get(i);
      let l = ju(s.typeCounts);
      l === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (l = "string");
      const a = l === "date" ? Ru(s.dateFormatCounts) : void 0, d = l === "date" ? s.typeCounts.date || 0 : s.typeCounts[l] || 0, u = s.nonNullCount > 0 ? Math.round(d / s.nonNullCount * 100) / 100 : 0, p = {
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
  function Un(e, t, n, o, r, i, s, l) {
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
        Un(e[a], d, n, o, r, i + 1, s, l);
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
        Un(e[d], u, n, o, r, i + 1, s, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Pu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const d of Object.keys(s)) Un(s[d], d, l, n, a, 1, t, o);
      else Un(s, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const i = Iu([
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
  function Iu(e) {
    return e.sort((t, n) => {
      const o = Sr(t), r = Sr(n), i = Math.min(o.length, r.length);
      for (let s = 0; s < i; s++) {
        const l = o[s], a = r[s], d = jr(l), u = jr(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function Sr(e) {
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
  function jr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Fu = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function di(e, t) {
    const n = performance.now(), o = {
      ...Fu,
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
    const r = Pu(e, o.maxDepth), i = Au(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), s = r.paths.length * r.rows.length, l = i.reduce((u, p) => u + p.nullCount, 0), a = s > 0 ? Math.round(l / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
  function zu(e, t) {
    return y.useMemo(() => di(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function ku({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: i, socket: s }) {
    const [l, a] = y.useState(n), [d, u] = y.useState(null), [p, g] = y.useState([]), [f, h] = y.useState(false), [m, v] = y.useState(false), [x, _] = y.useState(null), S = y.useRef(false), w = y.useRef(() => Promise.resolve()), j = y.useRef(n), R = y.useMemo(() => JSON.stringify(n), [
      n
    ]), A = y.useMemo(() => JSON.stringify(l) !== R, [
      l,
      R
    ]);
    y.useEffect(() => {
      e && (a(n), j.current = n, u(n.length > 0 ? n[0].path : null), S.current = false, _(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !S.current && (S.current = true, w.current());
    }, [
      e
    ]);
    const D = y.useCallback(async () => {
      h(true), _(null);
      try {
        const O = i.oid;
        if (!O) return;
        const L = await s.getState(O);
        if ((L == null ? void 0 : L.val) === null || (L == null ? void 0 : L.val) === void 0) return;
        let z;
        const W = L.val;
        if (typeof W == "string") try {
          const I = JSON.parse(W);
          z = Array.isArray(I) ? I : [
            I
          ];
        } catch {
          return;
        }
        else if (Array.isArray(W)) z = W;
        else if (typeof W == "object" && W !== null) z = [
          W
        ];
        else return;
        const Y = i.tableMaxDepth || 10, ie = di(z, {
          maxDepth: Y
        });
        g(ie.columns);
        const ae = new Map(j.current.map((I) => [
          I.path,
          I
        ])), Se = new Set(ie.columns.map((I) => I.path)), Ce = j.current.filter((I) => Se.has(I.path)), ge = ie.columns.filter((I) => !ae.has(I.path)).map((I) => ({
          path: I.path,
          visible: true,
          headerName: I.path.split(".").pop() || I.path
        })), ee = [
          ...Ce,
          ...ge
        ];
        a(ee), j.current = ee, u((I) => I === null && ee.length > 0 ? ee[0].path : I);
      } catch (O) {
        const L = O instanceof Error ? O.message : "Failed to discover columns";
        _(L);
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
      j.current = l;
    }, [
      l
    ]);
    const F = y.useCallback((O) => {
      a((L) => L.map((z) => z.path === O.path ? O : z));
    }, []), C = y.useCallback((O) => {
      a(O);
    }, []), M = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), k = y.useCallback((O, L) => {
      if (L === "backdropClick" && A) {
        v(true);
        return;
      }
      t();
    }, [
      A,
      t
    ]), T = y.useMemo(() => d ? l.find((O) => O.path === d) : null, [
      d,
      l
    ]), N = y.useMemo(() => d ? p.find((O) => O.path === d) : void 0, [
      d,
      p
    ]);
    return c.jsxs(Vi, {
      theme: r,
      children: [
        c.jsxs(Ki, {
          open: e,
          onClose: k,
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
            c.jsx(Qi, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: c.jsxs(G, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(P, {
                    variant: "h6",
                    children: b.t("json_table_column_editor_title")
                  }),
                  c.jsx(we, {
                    onClick: () => k(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: c.jsx(Vr, {})
                  })
                ]
              })
            }),
            c.jsxs(Zi, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && c.jsx(Jo, {
                  severity: "error",
                  onClose: () => _(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                c.jsxs(G, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    c.jsx(G, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: c.jsx(Pc, {
                        columns: l,
                        discoveredColumns: p,
                        selectedPath: d,
                        onSelect: u,
                        onChange: C,
                        onRefresh: D,
                        loading: f
                      })
                    }),
                    c.jsx(G, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: T ? c.jsx(pu, {
                        column: T,
                        discoveredColumn: N,
                        onChange: F
                      }) : c.jsx(G, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(P, {
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
            c.jsxs(oa, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(gn, {
                  onClick: () => k(),
                  children: b.t("cancel")
                }),
                c.jsx(gn, {
                  variant: "contained",
                  onClick: M,
                  disabled: !A,
                  children: b.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(ba, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(Jo, {
            severity: "warning",
            onClose: () => v(false),
            children: b.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Tu(e, t, n, o) {
    const r = e.name || "columnConfig", i = o.context.theme, [s, l] = y.useState(false), a = y.useMemo(() => ii(t[r]), [
      t,
      r
    ]), d = a.filter((h) => h.visible).length, u = a.length, p = a.some((h) => h.format), g = a.some((h) => h.cellStyle && h.cellStyle.length > 0), f = y.useCallback((h) => {
      const m = JSON.stringify(h), v = `b64:${$c(m)}`;
      n({
        [r]: v
      });
    }, [
      r,
      n
    ]);
    return c.jsxs(G, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(gn, {
          variant: "outlined",
          startIcon: c.jsx(jc, {}),
          onClick: () => l(true),
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          children: b.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(P, {
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
            b.t("json_table_columns_visible"),
            p && ` \xB7 ${b.t("json_table_has_formatting")}`,
            g && ` \xB7 ${b.t("json_table_has_styling")}`
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
  const Du = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(ut, {
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
      component: () => c.jsx(ut, {
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
      component: () => c.jsx(ut, {
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
      component: () => c.jsx(ut, {
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
      component: () => c.jsx(ut, {
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
      component: () => c.jsx(ut, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Kn, {
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
      component: (e, t, n, o) => c.jsx(Kn, {
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
      component: () => c.jsx(ut, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Kn, {
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
      component: () => c.jsx(ut, {
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
      component: () => c.jsx(ut, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Tu
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
  function Xn(e) {
    return e instanceof Function;
  }
  function Eu(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Ou(e, t) {
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
  function Nu(e, t, n, o) {
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
  function Lu(e, t, n, o) {
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
  const Ie = "debugHeaders";
  function Rr(e, t, n) {
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
  const Vu = {
    createTable: (e) => {
      e.getHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var i, s;
        const l = (i = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (s = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], d = n.filter((p) => !(o != null && o.includes(p.id)) && !(r != null && r.includes(p.id)));
        return zn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, H(e.options, Ie)), e.getCenterHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), zn(t, n, e, "center")), H(e.options, Ie)), e.getLeftHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return zn(t, i, e, "left");
      }, H(e.options, Ie)), e.getRightHeaderGroups = V(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return zn(t, i, e, "right");
      }, H(e.options, Ie)), e.getFooterGroups = V(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Ie)), e.getLeftFooterGroups = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Ie)), e.getCenterFooterGroups = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Ie)), e.getRightFooterGroups = V(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), H(e.options, Ie)), e.getFlatHeaders = V(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Ie)), e.getLeftFlatHeaders = V(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Ie)), e.getCenterFlatHeaders = V(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Ie)), e.getRightFlatHeaders = V(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), H(e.options, Ie)), e.getCenterLeafHeaders = V(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Ie)), e.getLeftLeafHeaders = V(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Ie)), e.getRightLeafHeaders = V(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), H(e.options, Ie)), e.getLeafHeaders = V(() => [
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
      }, H(e.options, Ie));
    }
  };
  function zn(e, t, n, o) {
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
        const x = [
          ...m
        ].reverse()[0], _ = v.column.depth === h.depth;
        let S, w = false;
        if (_ && v.column.parent ? S = v.column.parent : (S = v.column, w = true), x && (x == null ? void 0 : x.column) === S) x.subHeaders.push(v);
        else {
          const j = Rr(n, S, {
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
    }, u = t.map((g, f) => Rr(n, g, {
      depth: s,
      index: f
    }));
    d(u, s - 1), a.reverse();
    const p = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], p(h.subHeaders).forEach((S) => {
        let { colSpan: w, rowSpan: j } = S;
        m += w, x.push(j);
      })) : m = 1;
      const _ = Math.min(...x);
      return v = v + _, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return p((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
  }
  const Oo = (e, t, n, o, r, i, s) => {
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
      getLeafRows: () => Ou(l.subRows, (a) => a.subRows),
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
      ], (a) => a.map((d) => Nu(e, l, d, d.id)), H(e.options, "debugRows")),
      _getAllCellsByColumnId: V(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), H(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, Hu = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, pi = (e, t, n) => {
    var o, r;
    const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
  };
  pi.autoRemove = (e) => tt(e);
  const fi = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  fi.autoRemove = (e) => tt(e);
  const gi = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  gi.autoRemove = (e) => tt(e);
  const hi = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  hi.autoRemove = (e) => tt(e);
  const mi = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  mi.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const yi = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  yi.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const vi = (e, t, n) => e.getValue(t) === n;
  vi.autoRemove = (e) => tt(e);
  const xi = (e, t, n) => e.getValue(t) == n;
  xi.autoRemove = (e) => tt(e);
  const No = (e, t, n) => {
    let [o, r] = n;
    const i = e.getValue(t);
    return i >= o && i <= r;
  };
  No.resolveFilterValue = (e) => {
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
  No.autoRemove = (e) => tt(e) || tt(e[0]) && tt(e[1]);
  const pt = {
    includesString: pi,
    includesStringSensitive: fi,
    equalsString: gi,
    arrIncludes: hi,
    arrIncludesAll: mi,
    arrIncludesSome: yi,
    equals: vi,
    weakEquals: xi,
    inNumberRange: No
  };
  function tt(e) {
    return e == null || e === "";
  }
  const Bu = {
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
        return Xn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : pt[e.columnDef.filterFn];
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
          if (Mr(r, s, e)) {
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
              if (Mr(a, s.value, l)) return false;
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
  function Mr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Wu = (e, t, n) => n.reduce((o, r) => {
    const i = r.getValue(e);
    return o + (typeof i == "number" ? i : 0);
  }, 0), Gu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o > i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Uu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o < i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, qu = (e, t, n) => {
    let o, r;
    return n.forEach((i) => {
      const s = i.getValue(e);
      s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
    }), [
      o,
      r
    ];
  }, Yu = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let i = r.getValue(e);
      i != null && (i = +i) >= i && (++n, o += i);
    }), n) return o / n;
  }, Ju = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!Eu(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, Xu = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ku = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Qu = (e, t) => t.length, no = {
    sum: Wu,
    min: Gu,
    max: Uu,
    extent: qu,
    mean: Yu,
    median: Ju,
    unique: Xu,
    uniqueCount: Ku,
    count: Qu
  }, Zu = {
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
        if (typeof o == "number") return no.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return no.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return Xn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : no[e.columnDef.aggregationFn];
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
  function ed(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((i) => !t.includes(i.id));
    return n === "remove" ? o : [
      ...t.map((i) => e.find((s) => s.id === i)).filter(Boolean),
      ...o
    ];
  }
  const td = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: qe("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = V((n) => [
        cn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), H(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = cn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = cn(t, n);
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
        return ed(i, n, o);
      }, H(e.options, "debugTable"));
    }
  }, oo = () => ({
    left: [],
    right: []
  }), nd = {
    getInitialState: (e) => ({
      columnPinning: oo(),
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
        return e.setColumnPinning(t ? oo() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : oo());
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
  function od(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const kn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, ro = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), rd = {
    getDefaultColumnDef: () => kn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: ro(),
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
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : kn.minSize, (o = i ?? e.columnDef.size) != null ? o : kn.size), (r = e.columnDef.maxSize) != null ? r : kn.maxSize);
      }, e.getStart = V((n) => [
        n,
        cn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), H(t.options, "debugColumns")), e.getAfter = V((n) => [
        n,
        cn(t, n),
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
          if (!o || !r || (i.persist == null || i.persist(), io(i) && i.touches && i.touches.length > 1)) return;
          const s = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = io(i) ? Math.round(i.touches[0].clientX) : i.clientX, d = {}, u = (x, _) => {
            typeof _ == "number" && (t.setColumnSizingInfo((S) => {
              var w, j;
              const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, A = (_ - ((w = S == null ? void 0 : S.startOffset) != null ? w : 0)) * R, D = Math.max(A / ((j = S == null ? void 0 : S.startSize) != null ? j : 0), -0.999999);
              return S.columnSizingStart.forEach((F) => {
                let [C, M] = F;
                d[C] = Math.round(Math.max(M + M * D, 0) * 100) / 100;
              }), {
                ...S,
                deltaOffset: A,
                deltaPercentage: D
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((S) => ({
              ...S,
              ...d
            })));
          }, p = (x) => u("move", x), g = (x) => {
            u("end", x), t.setColumnSizingInfo((_) => ({
              ..._,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, f = od(n), h = {
            moveHandler: (x) => p(x.clientX),
            upHandler: (x) => {
              f == null ? void 0 : f.removeEventListener("mousemove", h.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", h.upHandler), g(x.clientX);
            }
          }, m = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), p(x.touches[0].clientX), false),
            upHandler: (x) => {
              var _;
              f == null ? void 0 : f.removeEventListener("touchmove", m.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", m.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((_ = x.touches[0]) == null ? void 0 : _.clientX);
            }
          }, v = id() ? {
            passive: false
          } : false;
          io(i) ? (f == null ? void 0 : f.addEventListener("touchmove", m.moveHandler, v), f == null ? void 0 : f.addEventListener("touchend", m.upHandler, v)) : (f == null ? void 0 : f.addEventListener("mousemove", h.moveHandler, v), f == null ? void 0 : f.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((x) => ({
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
        e.setColumnSizingInfo(t ? ro() : (n = e.initialState.columnSizingInfo) != null ? n : ro());
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
  let Tn = null;
  function id() {
    if (typeof Tn == "boolean") return Tn;
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
    return Tn = e, Tn;
  }
  function io(e) {
    return e.type === "touchstart";
  }
  const sd = {
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
  function cn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const ld = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, ad = {
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
      e.getGlobalAutoFilterFn = () => pt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return Xn(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : pt[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, cd = {
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
  }, So = 0, jo = 10, so = () => ({
    pageIndex: So,
    pageSize: jo
  }), ud = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...so(),
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
        e.setPagination(o ? so() : (r = e.initialState.pagination) != null ? r : so());
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
        e.setPageIndex(o ? So : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : So);
      }, e.resetPageSize = (o) => {
        var r, i;
        e.setPageSize(o ? jo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : jo);
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
  }, lo = () => ({
    top: [],
    bottom: []
  }), dd = {
    getInitialState: (e) => ({
      rowPinning: lo(),
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
        return e.setRowPinning(t ? lo() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : lo());
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
  }, pd = {
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
          Ro(r, i.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? ao(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getFilteredSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? ao(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, H(e.options, "debugTable")), e.getGroupedSelectedRowModel = V(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? ao(e, n) : {
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
          return Ro(l, e.id, n, (s = o == null ? void 0 : o.selectChildren) != null ? s : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Lo(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Mo(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Mo(e, n) === "all";
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
  }, Ro = (e, t, n, o, r) => {
    var i;
    const s = r.getRow(t, true);
    n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = true)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => Ro(e, l.id, n, o, r));
  };
  function ao(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, i = function(s, l) {
      return s.map((a) => {
        var d;
        const u = Lo(a, n);
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
  function Lo(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Mo(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, i = false;
    return e.subRows.forEach((s) => {
      if (!(i && !r) && (s.getCanSelect() && (Lo(s, t) ? i = true : r = false), s.subRows && s.subRows.length)) {
        const l = Mo(s, t);
        l === "all" ? i = true : (l === "some" && (i = true), r = false);
      }
    }), r ? "all" : i ? "some" : false;
  }
  const $o = /([0-9]+)/gm, fd = (e, t, n) => bi(_t(e.getValue(n)).toLowerCase(), _t(t.getValue(n)).toLowerCase()), gd = (e, t, n) => bi(_t(e.getValue(n)), _t(t.getValue(n))), hd = (e, t, n) => Vo(_t(e.getValue(n)).toLowerCase(), _t(t.getValue(n)).toLowerCase()), md = (e, t, n) => Vo(_t(e.getValue(n)), _t(t.getValue(n))), yd = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, vd = (e, t, n) => Vo(e.getValue(n), t.getValue(n));
  function Vo(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function _t(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function bi(e, t) {
    const n = e.split($o).filter(Boolean), o = t.split($o).filter(Boolean);
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
  const en = {
    alphanumeric: fd,
    alphanumericCaseSensitive: gd,
    text: hd,
    textCaseSensitive: md,
    datetime: yd,
    basic: vd
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
          if (Object.prototype.toString.call(i) === "[object Date]") return en.datetime;
          if (typeof i == "string" && (o = true, i.split($o).length > 1)) return en.alphanumeric;
        }
        return o ? en.text : en.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return Xn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : en[e.columnDef.sortingFn];
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
  }, bd = [
    Vu,
    sd,
    td,
    nd,
    Hu,
    Bu,
    ld,
    ad,
    xd,
    Zu,
    cd,
    ud,
    dd,
    pd,
    rd
  ];
  function wd(e) {
    var t, n;
    const o = [
      ...bd,
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
          return v === void 0 && (v = 0), h.map((x) => {
            const _ = Lu(r, x, v, m), S = x;
            return _.columns = S.columns ? f(S.columns, _, v + 1) : [], _;
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
  function Cd() {
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
          const u = Oo(e, e._getRowId(r[d], d, s), r[d], d, i, void 0, s == null ? void 0 : s.id);
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
  function _d(e) {
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
  function Sd(e, t, n) {
    return n.options.filterFromLeafRows ? jd(e, t, n) : Rd(e, t, n);
  }
  function jd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var p;
        let f = a[g];
        const h = Oo(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
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
  function Rd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let f = a[g];
        if (t(f)) {
          var p;
          if ((p = f.subRows) != null && p.length && d < s) {
            const m = Oo(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
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
  function Md() {
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
      return Sd(t.rows, p, e);
    }, H(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function $d(e) {
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
      } : p = _d({
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
  function Ad() {
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
            const h = i[f], m = s[h.id], v = m.sortUndefined, x = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let _ = 0;
            if (v) {
              const S = u.getValue(h.id), w = p.getValue(h.id), j = S === void 0, R = w === void 0;
              if (j || R) {
                if (v === "first") return j ? -1 : 1;
                if (v === "last") return j ? 1 : -1;
                _ = j && R ? 0 : j ? v : -v;
              }
            }
            if (_ === 0 && (_ = m.sortingFn(u, p, h.id)), _ !== 0) return x && (_ *= -1), m.invertSorting && (_ *= -1), _;
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
  function tn(e, t) {
    return e ? Pd(e) ? y.createElement(e, t) : e : null;
  }
  function Pd(e) {
    return Id(e) || typeof e == "function" || Fd(e);
  }
  function Id(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function Fd(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function zd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: wd(t)
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
  function Tt(e, t, n) {
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
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, v = m / 16, x = (_, S) => {
          for (_ = String(_); _.length < S; ) _ = " " + _;
          return _;
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
  function $r(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const kd = (e, t) => Math.abs(e - t) < 1.01, Td = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, Ar = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Dd = (e) => e, Ed = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, Od = (e, t) => {
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
    if (r(Ar(n)), !o.ResizeObserver) return () => {
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
        r(Ar(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return i.observe(n, {
      box: "border-box"
    }), () => {
      i.unobserve(n);
    };
  }, Pr = {
    passive: true
  }, Ir = typeof window > "u" ? true : "onscrollend" in window, Nd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const i = e.options.useScrollendEvent && Ir ? () => {
    } : Td(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), s = (u) => () => {
      const { horizontal: p, isRtl: g } = e.options;
      r = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(r, u);
    }, l = s(true), a = s(false);
    n.addEventListener("scroll", l, Pr);
    const d = e.options.useScrollendEvent && Ir;
    return d && n.addEventListener("scrollend", a, Pr), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, Ld = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Vd = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, i;
    const s = e + t;
    (i = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || i.call(r, {
      [o.options.horizontal ? "left" : "top"]: s,
      behavior: n
    });
  };
  class Hd {
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
          getItemKey: Dd,
          rangeExtractor: Ed,
          onChange: () => {
          },
          measureElement: Ld,
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
      }, this.maybeNotify = Tt(() => (this.calculateRange(), [
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
      }, this.getMeasurementOptions = Tt(() => [
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
      }), this.getMeasurements = Tt(() => [
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
          const x = a.get(f), _ = typeof x == "number" ? x : this.options.estimateSize(g), S = v + _;
          u[g] = {
            index: g,
            start: v,
            size: _,
            end: S,
            key: f,
            lane: m
          }, p[m] = g;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Tt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, i) => this.range = n.length > 0 && o > 0 ? Bd({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: i
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Tt(() => {
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
      }, this.getVirtualItems = Tt(() => [
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
        if (o.length !== 0) return $r(o[wi(0, o.length - 1, (r) => $r(o[r]).start, n)]);
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
  const wi = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, i = n(r);
      if (i < o) e = r + 1;
      else if (i > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Bd({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, i = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let s = wi(0, r, i, n), l = s;
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
  const Fr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Wd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (i, s) => {
        var l;
        e && s ? Hi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, i, s);
      }
    }, [r] = y.useState(() => new Hd(o));
    return r.setOptions(o), Fr(() => r._didMount(), []), Fr(() => r._willUpdate()), r;
  }
  function Gd(e) {
    return Wd({
      observeElementRect: Od,
      observeElementOffset: Nd,
      scrollToFn: Vd,
      ...e
    });
  }
  function Ud(e, t) {
    var _a2, _b;
    let n = e != null ? typeof e == "object" ? JSON.stringify(e) : String(e) : "";
    if (t == null ? void 0 : t.format) switch (t.format.type) {
      case "number":
        (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (n = si(Number(e), {
          decimals: t.format.numberDecimals,
          prefix: t.format.numberPrefix,
          suffix: t.format.numberSuffix,
          thousands: t.format.numberThousandsSeparator
        }));
        break;
      case "date":
        n = ai(e, t.format.dateFormat, t.format.dateInputFormat);
        break;
      case "boolean":
        n = xo(e, t.format.booleanTrue, t.format.booleanFalse);
        break;
      case "string":
        n = ci(n, t.format);
        break;
    }
    if (!t) return {
      displayValue: n,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", r = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? li(e, t.format.dateInputFormat) : e, i = {}, s = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const l of t.cellStyle) if (l.logic && au(l.logic, r)) {
        if (l.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const a = Ht(l.backgroundColor);
          a ? i.background = a : i.backgroundColor = l.backgroundColor;
        }
        if (l.textColor && !("color" in s) && !("background" in s)) {
          const a = Ht(l.textColor);
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
  function zr({ value: e, config: t }) {
    const { displayValue: n, textSx: o, bgSx: r } = y.useMemo(() => Ud(e, t), [
      e,
      t
    ]);
    return c.jsx(G, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        ...r
      },
      children: c.jsx(P, {
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
  function kr(e) {
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
  function qd(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: o, tableRowSelection: r, tablePageSize: i, tablePagination: s, tableFiltering: l, tableSorting: a, tableQuickFilter: d, gridRowsLength: u } = e, [p, g] = y.useState([]);
    y.useEffect(() => {
      a || g([]);
    }, [
      a
    ]);
    const [f, h] = y.useState([]);
    y.useEffect(() => {
      l || h([]);
    }, [
      l
    ]);
    const [m, v] = y.useState("");
    y.useEffect(() => {
      d || v("");
    }, [
      d
    ]);
    const [x, _] = y.useState({}), [S, w] = y.useState(() => {
      if (o) return {};
      const C = `jtc_col_sizes_${t}`;
      try {
        const k = localStorage.getItem(C);
        if (k) return JSON.parse(k);
      } catch {
      }
      const M = {};
      return n.forEach((k) => {
        k.width && (M[k.path] = k.width);
      }), r === true && (M.__select__ = 48), M;
    });
    y.useEffect(() => {
      if (!o) try {
        localStorage.setItem(`jtc_col_sizes_${t}`, JSON.stringify(S));
      } catch {
      }
    }, [
      S,
      t,
      o
    ]);
    const j = y.useMemo(() => Number(i) || 25, [
      i
    ]), [R, A] = y.useState({
      pageIndex: 0,
      pageSize: j
    });
    y.useEffect(() => {
      A((C) => C.pageSize === j ? C : {
        pageIndex: 0,
        pageSize: j
      });
    }, [
      j
    ]);
    const D = y.useMemo(() => s === false ? {
      pageIndex: 0,
      pageSize: Math.max(u, 1)
    } : R, [
      s,
      u,
      R
    ]), F = y.useMemo(() => kr(void 0), []);
    return {
      sorting: p,
      columnFilters: f,
      globalFilter: m,
      rowSelection: x,
      columnSizing: S,
      pagination: R,
      effectivePagination: D,
      setSorting: g,
      setColumnFilters: h,
      setGlobalFilter: v,
      setRowSelection: _,
      setColumnSizing: w,
      setPagination: A,
      pageSizeOptions: F,
      parsePageSizeOptions: kr
    };
  }
  function Tr(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = li(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  function Dr(e) {
    return (t, n, o) => Tr(t.getValue(o), e) - Tr(n.getValue(o), e);
  }
  function Yd(e) {
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
          sortingFn: Dr(g)
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
          sortingFn: Dr(f)
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
  const Jd = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Xd = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, Kd = () => {
    var _a2, _b;
    const e = y.useContext(Bi), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = Wi("oid"), i = es("oid"), s = vn(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
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
    ]), { columns: p, rows: g } = zu(d, u), f = y.useMemo(() => ii(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = n.data.tableDensity || "standard", m = Number(n.data.tableRowHeight) || Jd[h] || 52, v = Number(n.data.tableHeaderHeight) || Xd[h] || 56, x = y.useMemo(() => g.map(($, E) => ({
      __id: E,
      ...$
    })), [
      g
    ]), _ = y.useMemo(() => Yd({
      columnConfig: f,
      analysisColumns: p,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: n.data.tableFiltering === true,
        tableRowSelection: n.data.tableRowSelection === true
      },
      renderConfiguredCell: ($, E) => c.jsx(zr, {
        value: $,
        config: E
      }),
      renderAutoDetectedCell: ($) => c.jsx(zr, {
        value: $
      }),
      renderSelectionHeader: ($) => c.jsx(fn, {
        size: "small",
        indeterminate: $.getIsSomePageRowsSelected(),
        checked: $.getIsAllPageRowsSelected(),
        onChange: $.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: ($) => c.jsx(fn, {
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
    ]), S = n.data.tableAutoSize === true, { sorting: w, columnFilters: j, globalFilter: R, rowSelection: A, columnSizing: D, pagination: F, effectivePagination: C, setSorting: M, setColumnFilters: k, setGlobalFilter: T, setRowSelection: N, setColumnSizing: O, setPagination: L, pageSizeOptions: z } = qd({
      widgetId: o,
      columnConfig: f,
      tableAutoSize: S,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: n.data.tableFiltering === true,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: x.length
    }), W = zd({
      data: x,
      columns: _,
      getCoreRowModel: Cd(),
      getSortedRowModel: Ad(),
      getFilteredRowModel: Md(),
      getPaginationRowModel: $d(),
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
        pagination: C,
        rowSelection: A,
        columnSizing: D
      },
      onSortingChange: M,
      onColumnFiltersChange: k,
      onGlobalFilterChange: T,
      onPaginationChange: n.data.tablePagination !== false ? L : void 0,
      onRowSelectionChange: N,
      onColumnSizingChange: O,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), Y = y.useRef(null), ie = y.useRef(null), [ae, Se] = y.useState({}), [Ce, ge] = y.useState(null), ee = y.useRef(null), [I, se] = y.useState(void 0), [te, $e] = y.useState(void 0), Oe = y.useCallback(($, E) => {
      var _a3;
      ee.current = $;
      const Z = $.id, Re = w.find((Je) => Je.id === Z), Pe = (_a3 = j.find((Je) => Je.id === Z)) == null ? void 0 : _a3.value;
      se(Re), $e(Pe), ge(E);
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
        const Z = $.querySelector("tr[data-row-index]");
        if (!Z) return;
        const Re = Z.querySelectorAll("td"), Pe = W.getHeaderGroups()[0];
        if (!Pe || Re.length !== Pe.headers.length) return;
        const Je = {};
        Pe.headers.forEach((vt, xt) => {
          const Cn = Re[xt];
          Cn && (Je[vt.id] = Cn.getBoundingClientRect().width);
        }), Se(Je);
      });
      return E.observe($), () => E.disconnect();
    }, [
      S,
      W
    ]);
    const ce = y.useMemo(() => {
      const $ = {
        tableLayout: S ? "auto" : "fixed",
        width: "100%"
      };
      return n.data.tableShowRowBorders === false && ($["& .MuiTableCell-root"] = {
        borderBottom: "none"
      }), n.data.tableShowCellBorders === true && ($["& .MuiTableCell-root"] = {
        ...$["& .MuiTableCell-root"],
        borderRight: "1px solid",
        borderRightColor: "divider"
      }), $;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      S
    ]), be = n.data.tableHeaderBgColor, ue = n.data.tableHeaderTextColor, We = n.data.tableHeaderFontSize, jt = y.useMemo(() => ({
      height: v,
      whiteSpace: "nowrap",
      ...ue && {
        color: ue
      },
      ...We && {
        fontSize: `${We}px`
      }
    }), [
      v,
      ue,
      We
    ]), ot = y.useMemo(() => ({
      ...ue && {
        color: ue
      },
      ...We && {
        fontSize: `${We}px`
      }
    }), [
      ue,
      We
    ]), lt = n.data.noCard === true, Rt = y.useMemo(() => {
      const $ = n.data.tableHeaderElevation ?? 6, E = lt ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: $ > 0 ? s.shadows[$] : "none"
      }, Z = be ? Ht(be) : null;
      return Z ? {
        ...E,
        background: Z
      } : be ? {
        ...E,
        backgroundColor: be
      } : E;
    }, [
      lt,
      be,
      s.shadows,
      n.data.tableHeaderElevation
    ]), ke = y.useCallback(($) => S ? ae[$.id] ?? "auto" : $.getSize(), [
      S,
      ae
    ]), rt = y.useMemo(() => ({
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
    ]), Ye = n.data.tableStripedColor, at = Ye ? Ht(Ye) : null, mt = y.useCallback(($) => {
      if (!(!Ye || $ % 2 === 0)) return {
        background: at || Ye,
        ...at ? {} : {
          backgroundColor: Ye
        }
      };
    }, [
      Ye,
      at
    ]), ct = W.getRowModel().rows, Mt = Gd({
      count: ct.length,
      getScrollElement: () => Y.current,
      estimateSize: () => m,
      overscan: 10
    }), yt = n.data.tableVirtualizeThreshold ?? 50, Te = n.data.tablePagination === false && ct.length > yt ? Mt.getVirtualItems() : null, zt = Te && Te.length > 0 ? Te[0].start : 0, Ne = Te && Te.length > 0 ? Mt.getTotalSize() - (Te[Te.length - 1].end ?? 0) : 0;
    return c.jsxs(Gi, {
      isValidType: a,
      data: r,
      oidValue: i,
      children: [
        c.jsx(Ui, {
          data: r,
          widget: n
        }),
        a && _.length > 0 ? c.jsxs(G, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(G, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(Ae, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: R,
                onChange: ($) => T($.target.value),
                placeholder: b.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(yo, {
                      position: "start",
                      children: c.jsx(ri, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            c.jsx(Ba, {
              ref: Y,
              sx: {
                flex: 1,
                overflow: "auto"
              },
              children: c.jsxs(Pa, {
                size: h === "compact" ? "small" : "medium",
                sx: ce,
                children: [
                  c.jsxs(Ya, {
                    sx: {
                      position: "sticky",
                      top: 0,
                      zIndex: 2,
                      ...Rt,
                      "& .resize-handle": {
                        opacity: 0
                      },
                      "&:hover .resize-handle": {
                        opacity: 1
                      }
                    },
                    children: [
                      W.getHeaderGroups().map(($) => c.jsx(kt, {
                        children: $.headers.map((E) => {
                          const Z = E.column.getCanSort(), Re = E.column.getIsSorted(), Pe = E.column.columnDef.meta, Je = E.column.id === "__select__", vt = !S;
                          return c.jsxs(et, {
                            component: "th",
                            colSpan: E.colSpan,
                            align: (Pe == null ? void 0 : Pe.align) || "left",
                            padding: Je ? "checkbox" : "normal",
                            sx: {
                              width: ke(E),
                              minWidth: Je ? 48 : 40,
                              position: "relative",
                              ...jt
                            },
                            children: [
                              Je ? tn(E.column.columnDef.header, E.getContext()) : c.jsxs(G, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (Pe == null ? void 0 : Pe.align) === "right" ? "flex-end" : (Pe == null ? void 0 : Pe.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  Z ? c.jsx(wc, {
                                    active: Re !== false,
                                    direction: Re === "desc" ? "desc" : "asc",
                                    onClick: E.column.getToggleSortingHandler(),
                                    children: c.jsx(P, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: ot,
                                      children: tn(E.column.columnDef.header, E.getContext())
                                    })
                                  }) : c.jsx(P, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: ot,
                                    children: tn(E.column.columnDef.header, E.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && c.jsx(Ve, {
                                    title: b.t("json_table_column_menu"),
                                    children: c.jsx(we, {
                                      size: "small",
                                      "aria-label": b.t("json_table_column_menu"),
                                      onClick: (xt) => {
                                        xt.stopPropagation(), Oe(E.column, xt.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: c.jsx(_c, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              vt && E.column.getCanResize() && c.jsx(G, {
                                className: "resize-handle",
                                onMouseDown: E.getResizeHandler(),
                                onTouchStart: E.getResizeHandler(),
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
                      n.data.tableFiltering === true && c.jsx(kt, {
                        children: (_a2 = W.getHeaderGroups()[0]) == null ? void 0 : _a2.headers.map(($) => {
                          if ($.column.id === "__select__") return c.jsx(et, {
                            component: "th",
                            colSpan: $.colSpan,
                            padding: "checkbox",
                            sx: {
                              width: ke($),
                              py: 0.5,
                              px: 0.5
                            }
                          }, $.id);
                          if (!$.column.getCanFilter()) return c.jsx(et, {
                            component: "th",
                            colSpan: $.colSpan,
                            sx: {
                              width: ke($),
                              py: 0.5,
                              px: 0.5
                            }
                          }, $.id);
                          const E = $.column.getFilterValue() ?? "";
                          return c.jsx(et, {
                            component: "th",
                            colSpan: $.colSpan,
                            sx: {
                              width: ke($),
                              py: 0.5,
                              px: 0.5
                            },
                            children: c.jsx(Ae, {
                              size: "small",
                              variant: "standard",
                              fullWidth: true,
                              value: E,
                              onChange: (Z) => $.column.setFilterValue(Z.target.value || void 0),
                              placeholder: b.t("json_table_filter_placeholder"),
                              slotProps: {
                                input: {
                                  endAdornment: E ? c.jsx(yo, {
                                    position: "end",
                                    children: c.jsx(Ve, {
                                      title: b.t("json_table_filter_clear"),
                                      children: c.jsx(we, {
                                        size: "small",
                                        onClick: () => $.column.setFilterValue(void 0),
                                        "aria-label": b.t("json_table_filter_clear"),
                                        children: c.jsx(vo, {
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
                  c.jsx(Ta, {
                    ref: ie,
                    children: Te ? c.jsxs(c.Fragment, {
                      children: [
                        zt > 0 && c.jsx(kt, {
                          children: c.jsx(et, {
                            colSpan: _.length,
                            sx: {
                              height: zt,
                              p: 0,
                              border: "none"
                            }
                          })
                        }),
                        Te.map(($) => {
                          const E = ct[$.index], Z = $.index;
                          return c.jsx(kt, {
                            "data-row-index": Z,
                            sx: {
                              height: m,
                              ...mt(Z)
                            },
                            children: E.getVisibleCells().map((Re) => {
                              var _a3;
                              const Pe = Re.column.id === "__select__";
                              return c.jsx(et, {
                                align: ((_a3 = Re.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                                padding: Pe ? "checkbox" : "normal",
                                sx: rt,
                                children: tn(Re.column.columnDef.cell, Re.getContext())
                              }, Re.id);
                            })
                          }, E.id);
                        }),
                        Ne > 0 && c.jsx(kt, {
                          children: c.jsx(et, {
                            colSpan: _.length,
                            sx: {
                              height: Ne,
                              p: 0,
                              border: "none"
                            }
                          })
                        })
                      ]
                    }) : ct.map(($, E) => c.jsx(kt, {
                      "data-row-index": E,
                      sx: {
                        height: m,
                        ...mt(E)
                      },
                      children: $.getVisibleCells().map((Z) => {
                        var _a3;
                        const Re = Z.column.id === "__select__";
                        return c.jsx(et, {
                          align: ((_a3 = Z.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                          padding: Re ? "checkbox" : "normal",
                          sx: rt,
                          children: tn(Z.column.columnDef.cell, Z.getContext())
                        }, Z.id);
                      })
                    }, $.id))
                  })
                ]
              })
            }),
            n.data.tablePagination !== false && c.jsx(pc, {
              component: "div",
              count: W.getFilteredRowModel().rows.length,
              page: F.pageIndex,
              rowsPerPage: F.pageSize,
              rowsPerPageOptions: z,
              onPageChange: ($, E) => L((Z) => ({
                ...Z,
                pageIndex: E
              })),
              onRowsPerPageChange: ($) => L({
                pageIndex: 0,
                pageSize: parseInt($.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(P, {
                variant: "body2",
                component: "span",
                children: b.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: $, to: E, count: Z }) => c.jsx(P, {
                variant: "body2",
                component: "span",
                children: `${$}\u2013${E} / ${Z}`
              }),
              slots: {
                menuItem: function(E) {
                  const { children: Z, value: Re, ...Pe } = E;
                  return c.jsx(_e, {
                    ...Pe,
                    value: Re,
                    children: c.jsx(P, {
                      variant: "body2",
                      component: "span",
                      children: Z
                    })
                  });
                }
              },
              slotProps: {
                select: {
                  renderValue: ($) => c.jsx(P, {
                    variant: "body2",
                    component: "span",
                    children: String($)
                  })
                }
              }
            }),
            c.jsxs(qi, {
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
                    c.jsx(oi, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_sort_asc")
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
                    c.jsx(ni, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_sort_desc")
                    })
                  ]
                }),
                I && c.jsx(_e, {
                  onClick: () => {
                    M([]), je();
                  },
                  children: c.jsx(P, {
                    variant: "body2",
                    children: b.t("json_table_sort_clear")
                  })
                }),
                n.data.tableFiltering === true && ((_b = ee.current) == null ? void 0 : _b.getCanFilter()) === true && te && c.jsxs(_e, {
                  onClick: () => {
                    var _a3;
                    (_a3 = ee.current) == null ? void 0 : _a3.setFilterValue(void 0), je();
                  },
                  children: [
                    c.jsx(vo, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            })
          ]
        }) : c.jsx(G, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: c.jsx(P, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? b.t("json_table_no_oid") : a ? f.length > 0 && _.length === 0 ? b.t("json_table_all_columns_hidden") : b.t("json_table_no_data") : b.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Qd = [
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
  Ao = class extends b {
    static createObjectFields() {
      const t = Yi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (i, s, l, a) => {
          if (!s.oid) {
            for (const d of Qd) delete s[d];
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
              ...Uo()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Ao.createObjectFields(),
              ...Du()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Uo({
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
      return Ao.getWidgetInfo();
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
      return Ji(this.wrapContent(c.jsx(Kd, {})), n);
    }
  };
});
export {
  __tla,
  Ao as default
};
