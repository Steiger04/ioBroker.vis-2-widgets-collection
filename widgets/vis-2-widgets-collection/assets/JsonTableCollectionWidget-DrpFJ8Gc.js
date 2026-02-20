import { g as mt, a as gt, u as bt, Y as sp, Z as ip, _ as zn, $ as Jt, h as Yt, j as f, s as se, d as ue, e as ge, a0 as qi, m as Ue, a1 as vn, b as Je, P as Ut, B as Es, c as Pe, I as Et, V as ie, a2 as On, K as Fn, W as er, a3 as it, a4 as Be, a5 as ap, a6 as pr, a7 as cp, f as Tt, a8 as up, a9 as Xt, i as ut, aa as dp, ab as xo, ac as sr, ad as Ki, ae as cs, af as _c, R as pp, ag as fp, T as ye, ah as Nn, ai as _n, L as gp, aj as Yi, ak as hp, al as li, am as mp, an as Xi, ao as si, Q as kn, o as Ze, ap as ir, G as oe, aq as bp, ar as Cp, as as vl, at as Sl, v as Eo, au as yp, av as wp, C as Hr, E as us, aw as Lr, ax as C, ay as fe, az as ii, aA as xp, aB as vp, aC as Gc, aD as Qi, aE as Sp, aF as Pp, aG as Ip, aH as Mp, aI as Op, D as Fp, n as kp, q as Ep, w as Tp, x as Ap, z as Dp, y as Zi, A as $p, __tla as __tla_0 } from "./useData-CFNDeVWW.js";
import { v as d, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Pl, __tla as __tla_2 } from "./Checkbox-DYUzTJb_.js";
import { S as wr, s as ot, g as Lp, __tla as __tla_3 } from "./Stack-fTlLKXgB.js";
import { T as Rp, a as Ji, __tla as __tla_4 } from "./ToggleButtonGroup-BR0figS4.js";
import { g as jp, M as jt, __tla as __tla_5 } from "./MenuItem-D6pjWpu8.js";
import { C as Vc, __tla as __tla_6 } from "./Close-Qb4-Ap6j.js";
import { B as _o, __tla as __tla_7 } from "./Button-C37w3Vw6.js";
import { F as Zr, __tla as __tla_8 } from "./FormControlLabel-7Wd-Otjv.js";
import { S as tl, __tla as __tla_9 } from "./Switch-BgmKfAZh.js";
import { S as Hp, __tla as __tla_10 } from "./Slider-BgdwdNx-.js";
import { D as zp, a as Np, b as _p, L as jo, __tla as __tla_11 } from "./ListItemText-C_ilVOwH.js";
import { u as Gp, __tla as __tla_12 } from "./useOidValue-DRiZW1RP.js";
import { g as Vp } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-DIywY-d5.js";
import { __tla as __tla_14 } from "./listItemTextClasses-4EZ_keuw.js";
let ni;
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
  var Bc = {
    exports: {}
  }, Bp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Wp = Bp, Up = Wp;
  function Wc() {
  }
  function Uc() {
  }
  Uc.resetWarningCache = Wc;
  var qp = function() {
    function e(o, n, l, s, i, a) {
      if (a !== Up) {
        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw u.name = "Invariant Violation", u;
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Uc,
      resetWarningCache: Wc
    };
    return r.PropTypes = r, r;
  };
  Bc.exports = qp();
  var Kp = Bc.exports;
  const V = Vp(Kp), ai = (e) => {
    const t = d.useRef({});
    return d.useEffect(() => {
      t.current = e;
    }), t.current;
  };
  function Yp(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
  }
  function Xp(e) {
    return parseFloat(e);
  }
  function Qp(e) {
    return mt("MuiCollapse", e);
  }
  gt("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Zp = (e) => {
    const { orientation: t, classes: r } = e, o = {
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
    return ge(o, Qp, r);
  }, Jp = se("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.orientation],
        r.state === "entered" && t.entered,
        r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden
      ];
    }
  })(Ue(({ theme: e }) => ({
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
  }))), ef = se("div", {
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
  }), tf = se("div", {
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
  }), Ts = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: n, children: l, className: s, collapsedSize: i = "0px", component: a, easing: u, in: c, onEnter: p, onEntered: g, onEntering: b, onExit: h, onExited: m, onExiting: x, orientation: v = "vertical", style: w, timeout: k = sp.standard, TransitionComponent: L = ip, ...F } = o, I = {
      ...o,
      orientation: v,
      collapsedSize: i
    }, j = Zp(I), D = zn(), S = Jt(), y = d.useRef(null), M = d.useRef(), $ = typeof i == "number" ? `${i}px` : i, E = v === "horizontal", N = E ? "width" : "height", T = d.useRef(null), P = Yt(r, T), A = (W) => (te) => {
      if (W) {
        const Z = T.current;
        te === void 0 ? W(Z) : W(Z, te);
      }
    }, R = () => y.current ? y.current[E ? "clientWidth" : "clientHeight"] : 0, z = A((W, te) => {
      y.current && E && (y.current.style.position = "absolute"), W.style[N] = $, p && p(W, te);
    }), _ = A((W, te) => {
      const Z = R();
      y.current && E && (y.current.style.position = "");
      const { duration: re, easing: ce } = qi({
        style: w,
        timeout: k,
        easing: u
      }, {
        mode: "enter"
      });
      if (k === "auto") {
        const Ce = D.transitions.getAutoHeightDuration(Z);
        W.style.transitionDuration = `${Ce}ms`, M.current = Ce;
      } else W.style.transitionDuration = typeof re == "string" ? re : `${re}ms`;
      W.style[N] = `${Z}px`, W.style.transitionTimingFunction = ce, b && b(W, te);
    }), H = A((W, te) => {
      W.style[N] = "auto", g && g(W, te);
    }), G = A((W) => {
      W.style[N] = `${R()}px`, h && h(W);
    }), U = A(m), B = A((W) => {
      const te = R(), { duration: Z, easing: re } = qi({
        style: w,
        timeout: k,
        easing: u
      }, {
        mode: "exit"
      });
      if (k === "auto") {
        const ce = D.transitions.getAutoHeightDuration(te);
        W.style.transitionDuration = `${ce}ms`, M.current = ce;
      } else W.style.transitionDuration = typeof Z == "string" ? Z : `${Z}ms`;
      W.style[N] = $, W.style.transitionTimingFunction = re, x && x(W);
    }), q = (W) => {
      k === "auto" && S.start(M.current || 0, W), n && n(T.current, W);
    };
    return f.jsx(L, {
      in: c,
      onEnter: z,
      onEntered: H,
      onEntering: _,
      onExit: G,
      onExited: U,
      onExiting: B,
      addEndListener: q,
      nodeRef: T,
      timeout: k === "auto" ? null : k,
      ...F,
      children: (W, { ownerState: te, ...Z }) => f.jsx(Jp, {
        as: a,
        className: ue(j.root, s, {
          entered: j.entered,
          exited: !c && $ === "0px" && j.hidden
        }[W]),
        style: {
          [E ? "minWidth" : "minHeight"]: $,
          ...w
        },
        ref: P,
        ownerState: {
          ...I,
          state: W
        },
        ...Z,
        children: f.jsx(ef, {
          ownerState: {
            ...I,
            state: W
          },
          className: j.wrapper,
          ref: y,
          children: f.jsx(tf, {
            ownerState: {
              ...I,
              state: W
            },
            className: j.wrapperInner,
            children: l
          })
        })
      })
    });
  });
  Ts && (Ts.muiSupportAuto = true);
  const qc = d.createContext({});
  function rf(e) {
    return mt("MuiAccordion", e);
  }
  const rl = gt("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), of = (e) => {
    const { classes: t, square: r, expanded: o, disabled: n, disableGutters: l } = e;
    return ge({
      root: [
        "root",
        !r && "rounded",
        o && "expanded",
        n && "disabled",
        !l && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, rf, t);
  }, nf = se(Ut, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        {
          [`& .${rl.region}`]: t.region
        },
        t.root,
        !r.square && t.rounded,
        !r.disableGutters && t.gutters
      ];
    }
  })(Ue(({ theme: e }) => {
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
      [`&.${rl.expanded}`]: {
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
      [`&.${rl.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), Ue(({ theme: e }) => ({
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
          [`&.${rl.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), lf = se("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), ol = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiAccordion"
    }), { children: n, className: l, defaultExpanded: s = false, disabled: i = false, disableGutters: a = false, expanded: u, onChange: c, square: p = false, slots: g = {}, slotProps: b = {}, TransitionComponent: h, TransitionProps: m, ...x } = o, [v, w] = vn({
      controlled: u,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), k = d.useCallback((R) => {
      w(!v), c && c(R, !v);
    }, [
      v,
      c,
      w
    ]), [L, ...F] = d.Children.toArray(n), I = d.useMemo(() => ({
      expanded: v,
      disabled: i,
      disableGutters: a,
      toggle: k
    }), [
      v,
      i,
      a,
      k
    ]), j = {
      ...o,
      square: p,
      disabled: i,
      disableGutters: a,
      expanded: v
    }, D = of(j), S = {
      transition: h,
      ...g
    }, y = {
      transition: m,
      ...b
    }, M = {
      slots: S,
      slotProps: y
    }, [$, E] = Je("root", {
      elementType: nf,
      externalForwardedProps: {
        ...M,
        ...x
      },
      className: ue(D.root, l),
      shouldForwardComponentProp: true,
      ownerState: j,
      ref: r,
      additionalProps: {
        square: p
      }
    }), [N, T] = Je("heading", {
      elementType: lf,
      externalForwardedProps: M,
      className: D.heading,
      ownerState: j
    }), [P, A] = Je("transition", {
      elementType: Ts,
      externalForwardedProps: M,
      ownerState: j
    });
    return f.jsxs($, {
      ...E,
      children: [
        f.jsx(N, {
          ...T,
          children: f.jsx(qc.Provider, {
            value: I,
            children: L
          })
        }),
        f.jsx(P, {
          in: v,
          timeout: "auto",
          ...A,
          children: f.jsx("div", {
            "aria-labelledby": L.props.id,
            id: L.props["aria-controls"],
            role: "region",
            className: D.region,
            children: F
          })
        })
      ]
    });
  });
  function sf(e) {
    return mt("MuiAccordionDetails", e);
  }
  gt("MuiAccordionDetails", [
    "root"
  ]);
  const af = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, sf, t);
  }, cf = se("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Ue(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), nl = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: n, ...l } = o, s = o, i = af(s);
    return f.jsx(cf, {
      className: ue(i.root, n),
      ref: r,
      ownerState: s,
      ...l
    });
  });
  function uf(e) {
    return mt("MuiAccordionSummary", e);
  }
  const To = gt("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), df = (e) => {
    const { classes: t, expanded: r, disabled: o, disableGutters: n } = e;
    return ge({
      root: [
        "root",
        r && "expanded",
        o && "disabled",
        !n && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        r && "expanded",
        !n && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        r && "expanded"
      ]
    }, uf, t);
  }, pf = se(Es, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Ue(({ theme: e }) => {
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
      [`&.${To.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${To.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${To.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (r) => !r.disableGutters,
          style: {
            [`&.${To.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), ff = se("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(Ue(({ theme: e }) => ({
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
          [`&.${To.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), gf = se("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(Ue(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${To.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), ll = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: n, className: l, expandIcon: s, focusVisibleClassName: i, onClick: a, slots: u, slotProps: c, ...p } = o, { disabled: g = false, disableGutters: b, expanded: h, toggle: m } = d.useContext(qc), x = (y) => {
      m && m(y), a && a(y);
    }, v = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: b
    }, w = df(v), k = {
      slots: u,
      slotProps: c
    }, [L, F] = Je("root", {
      ref: r,
      shouldForwardComponentProp: true,
      className: ue(w.root, l),
      elementType: pf,
      externalForwardedProps: {
        ...k,
        ...p
      },
      ownerState: v,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: ue(w.focusVisible, i)
      },
      getSlotProps: (y) => ({
        ...y,
        onClick: (M) => {
          var _a2;
          (_a2 = y.onClick) == null ? void 0 : _a2.call(y, M), x(M);
        }
      })
    }), [I, j] = Je("content", {
      className: w.content,
      elementType: ff,
      externalForwardedProps: k,
      ownerState: v
    }), [D, S] = Je("expandIconWrapper", {
      className: w.expandIconWrapper,
      elementType: gf,
      externalForwardedProps: k,
      ownerState: v
    });
    return f.jsxs(L, {
      ...F,
      children: [
        f.jsx(I, {
          ...j,
          children: n
        }),
        s && f.jsx(D, {
          ...S,
          children: s
        })
      ]
    });
  });
  function hf(e) {
    return mt("MuiAlert", e);
  }
  const ea = gt("MuiAlert", [
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
  ]), mf = Pe(f.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), bf = Pe(f.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Cf = Pe(f.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), yf = Pe(f.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), Kc = Pe(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), wf = (e) => {
    const { variant: t, color: r, severity: o, classes: n } = e, l = {
      root: [
        "root",
        `color${ie(r || o)}`,
        `${t}${ie(r || o)}`,
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
    return ge(l, hf, n);
  }, xf = se(Ut, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${ie(r.color || r.severity)}`]
      ];
    }
  })(Ue(({ theme: e }) => {
    const t = e.palette.mode === "light" ? On : Fn, r = e.palette.mode === "light" ? Fn : On;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(er([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9),
            [`& .${ea.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(er([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${ea.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(er([
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
  })), vf = se("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), Sf = se("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), Pf = se("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), ta = {
    success: f.jsx(mf, {
      fontSize: "inherit"
    }),
    warning: f.jsx(bf, {
      fontSize: "inherit"
    }),
    error: f.jsx(Cf, {
      fontSize: "inherit"
    }),
    info: f.jsx(yf, {
      fontSize: "inherit"
    })
  }, If = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiAlert"
    }), { action: n, children: l, className: s, closeText: i = "Close", color: a, components: u = {}, componentsProps: c = {}, icon: p, iconMapping: g = ta, onClose: b, role: h = "alert", severity: m = "success", slotProps: x = {}, slots: v = {}, variant: w = "standard", ...k } = o, L = {
      ...o,
      color: a,
      severity: m,
      variant: w,
      colorSeverity: a || m
    }, F = wf(L), I = {
      slots: {
        closeButton: u.CloseButton,
        closeIcon: u.CloseIcon,
        ...v
      },
      slotProps: {
        ...c,
        ...x
      }
    }, [j, D] = Je("root", {
      ref: r,
      shouldForwardComponentProp: true,
      className: ue(F.root, s),
      elementType: xf,
      externalForwardedProps: {
        ...I,
        ...k
      },
      ownerState: L,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [S, y] = Je("icon", {
      className: F.icon,
      elementType: vf,
      externalForwardedProps: I,
      ownerState: L
    }), [M, $] = Je("message", {
      className: F.message,
      elementType: Sf,
      externalForwardedProps: I,
      ownerState: L
    }), [E, N] = Je("action", {
      className: F.action,
      elementType: Pf,
      externalForwardedProps: I,
      ownerState: L
    }), [T, P] = Je("closeButton", {
      elementType: Et,
      externalForwardedProps: I,
      ownerState: L
    }), [A, R] = Je("closeIcon", {
      elementType: Kc,
      externalForwardedProps: I,
      ownerState: L
    });
    return f.jsxs(j, {
      ...D,
      children: [
        p !== false ? f.jsx(S, {
          ...y,
          children: p || g[m] || ta[m]
        }) : null,
        f.jsx(M, {
          ...$,
          children: l
        }),
        n != null ? f.jsx(E, {
          ...N,
          children: n
        }) : null,
        n == null && b ? f.jsx(E, {
          ...N,
          children: f.jsx(T, {
            size: "small",
            "aria-label": i,
            title: i,
            color: "inherit",
            onClick: b,
            ...P,
            children: f.jsx(A, {
              fontSize: "small",
              ...R
            })
          })
        }) : null
      ]
    });
  });
  function ra(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function Yc(e = {}) {
    const { ignoreAccents: t = true, ignoreCase: r = true, limit: o, matchFrom: n = "any", stringify: l, trim: s = false } = e;
    return (i, { inputValue: a, getOptionLabel: u }) => {
      let c = s ? a.trim() : a;
      r && (c = c.toLowerCase()), t && (c = ra(c));
      const p = c ? i.filter((g) => {
        let b = (l || u)(g);
        return r && (b = b.toLowerCase()), t && (b = ra(b)), n === "start" ? b.startsWith(c) : b.includes(c);
      }) : i;
      return typeof o == "number" ? p.slice(0, o) : p;
    };
  }
  const Mf = Yc(), oa = 5, Of = (e) => {
    var _a2;
    return e.current !== null && ((_a2 = e.current.parentElement) == null ? void 0 : _a2.contains(document.activeElement));
  }, Ff = [];
  function na(e, t, r) {
    if (t || e == null) return "";
    const o = r(e);
    return typeof o == "string" ? o : "";
  }
  function kf(e) {
    const { unstable_isActiveElementInListbox: t = Of, unstable_classNamePrefix: r = "Mui", autoComplete: o = false, autoHighlight: n = false, autoSelect: l = false, blurOnSelect: s = false, clearOnBlur: i = !e.freeSolo, clearOnEscape: a = false, componentName: u = "useAutocomplete", defaultValue: c = e.multiple ? Ff : null, disableClearable: p = false, disableCloseOnSelect: g = false, disabled: b, disabledItemsFocusable: h = false, disableListWrap: m = false, filterOptions: x = Mf, filterSelectedOptions: v = false, freeSolo: w = false, getOptionDisabled: k, getOptionKey: L, getOptionLabel: F = (Q) => Q.label ?? Q, groupBy: I, handleHomeEndKeys: j = !e.freeSolo, id: D, includeInputInList: S = false, inputValue: y, isOptionEqualToValue: M = (Q, K) => Q === K, multiple: $ = false, onChange: E, onClose: N, onHighlightChange: T, onInputChange: P, onOpen: A, open: R, openOnFocus: z = false, options: _, readOnly: H = false, selectOnFocus: G = !e.freeSolo, value: U } = e, B = it(D);
    let q = F;
    q = (Q) => {
      const K = F(Q);
      return typeof K != "string" ? String(K) : K;
    };
    const W = d.useRef(false), te = d.useRef(true), Z = d.useRef(null), re = d.useRef(null), [ce, Ce] = d.useState(null), [Y, ne] = d.useState(-1), he = n ? 0 : -1, J = d.useRef(he), Ie = d.useRef(na(c ?? U, $, q)).current, [ee, Se] = vn({
      controlled: U,
      default: c,
      name: u
    }), [xe, ke] = vn({
      controlled: y,
      default: Ie,
      name: u,
      state: "inputValue"
    }), [Ve, qe] = d.useState(false), Ne = d.useCallback((Q, K, de) => {
      if (!($ ? ee.length < K.length : K !== null) && !i) return;
      const Ge = na(K, $, q);
      xe !== Ge && (ke(Ge), P && P(Q, Ge, de));
    }, [
      q,
      xe,
      $,
      P,
      ke,
      i,
      ee
    ]), [Le, Re] = vn({
      controlled: R,
      default: false,
      name: u,
      state: "open"
    }), [Ke, _e] = d.useState(true), me = !$ && ee != null && xe === q(ee), ve = Le && !H, pe = ve ? x(_.filter((Q) => !(v && ($ ? ee : [
      ee
    ]).some((K) => K !== null && M(Q, K)))), {
      inputValue: me && Ke ? "" : xe,
      getOptionLabel: q
    }) : [], be = ai({
      filteredOptions: pe,
      value: ee,
      inputValue: xe
    });
    d.useEffect(() => {
      const Q = ee !== be.value;
      Ve && !Q || w && !Q || Ne(null, ee, "reset");
    }, [
      ee,
      Ne,
      Ve,
      be.value,
      w
    ]);
    const je = Le && pe.length > 0 && !H, $e = Be((Q) => {
      Q === -1 ? Z.current.focus() : ce.querySelector(`[data-tag-index="${Q}"]`).focus();
    });
    d.useEffect(() => {
      $ && Y > ee.length - 1 && (ne(-1), $e(-1));
    }, [
      ee,
      $,
      Y,
      $e
    ]);
    function ct(Q, K) {
      if (!re.current || Q < 0 || Q >= pe.length) return -1;
      let de = Q;
      for (; ; ) {
        const Ee = re.current.querySelector(`[data-option-index="${de}"]`), Ge = h ? false : !Ee || Ee.disabled || Ee.getAttribute("aria-disabled") === "true";
        if (Ee && Ee.hasAttribute("tabindex") && !Ge) return de;
        if (K === "next" ? de = (de + 1) % pe.length : de = (de - 1 + pe.length) % pe.length, de === Q) return -1;
      }
    }
    const Ot = Be(({ event: Q, index: K, reason: de }) => {
      if (J.current = K, K === -1 ? Z.current.removeAttribute("aria-activedescendant") : Z.current.setAttribute("aria-activedescendant", `${B}-option-${K}`), T && [
        "mouse",
        "keyboard",
        "touch"
      ].includes(de) && T(Q, K === -1 ? null : pe[K], de), !re.current) return;
      const Ee = re.current.querySelector(`[role="option"].${r}-focused`);
      Ee && (Ee.classList.remove(`${r}-focused`), Ee.classList.remove(`${r}-focusVisible`));
      let Ge = re.current;
      if (re.current.getAttribute("role") !== "listbox" && (Ge = re.current.parentElement.querySelector('[role="listbox"]')), !Ge) return;
      if (K === -1) {
        Ge.scrollTop = 0;
        return;
      }
      const nt = re.current.querySelector(`[data-option-index="${K}"]`);
      if (nt && (nt.classList.add(`${r}-focused`), de === "keyboard" && nt.classList.add(`${r}-focusVisible`), Ge.scrollHeight > Ge.clientHeight && de !== "mouse" && de !== "touch")) {
        const wt = nt, nr = Ge.clientHeight + Ge.scrollTop, as = wt.offsetTop + wt.offsetHeight;
        as > nr ? Ge.scrollTop = as - Ge.clientHeight : wt.offsetTop - wt.offsetHeight * (I ? 1.3 : 0) < Ge.scrollTop && (Ge.scrollTop = wt.offsetTop - wt.offsetHeight * (I ? 1.3 : 0));
      }
    }), yt = Be(({ event: Q, diff: K, direction: de = "next", reason: Ee }) => {
      if (!ve) return;
      const nt = ct((() => {
        const wt = pe.length - 1;
        if (K === "reset") return he;
        if (K === "start") return 0;
        if (K === "end") return wt;
        const nr = J.current + K;
        return nr < 0 ? nr === -1 && S ? -1 : m && J.current !== -1 || Math.abs(K) > 1 ? 0 : wt : nr > wt ? nr === wt + 1 && S ? -1 : m || Math.abs(K) > 1 ? wt : 0 : nr;
      })(), de);
      if (Ot({
        index: nt,
        reason: Ee,
        event: Q
      }), o && K !== "reset") if (nt === -1) Z.current.value = xe;
      else {
        const wt = q(pe[nt]);
        Z.current.value = wt, wt.toLowerCase().indexOf(xe.toLowerCase()) === 0 && xe.length > 0 && Z.current.setSelectionRange(xe.length, wt.length);
      }
    }), Rr = () => {
      const Q = (K, de) => {
        const Ee = K ? q(K) : "", Ge = de ? q(de) : "";
        return Ee === Ge;
      };
      if (J.current !== -1 && be.filteredOptions && be.filteredOptions.length !== pe.length && be.inputValue === xe && ($ ? ee.length === be.value.length && be.value.every((K, de) => q(ee[de]) === q(K)) : Q(be.value, ee))) {
        const K = be.filteredOptions[J.current];
        if (K) return pe.findIndex((de) => q(de) === q(K));
      }
      return -1;
    }, Gt = d.useCallback(() => {
      if (!ve) return;
      const Q = Rr();
      if (Q !== -1) {
        J.current = Q;
        return;
      }
      const K = $ ? ee[0] : ee;
      if (pe.length === 0 || K == null) {
        yt({
          diff: "reset"
        });
        return;
      }
      if (re.current) {
        if (K != null) {
          const de = pe[J.current];
          if ($ && de && ee.findIndex((Ge) => M(de, Ge)) !== -1) return;
          const Ee = pe.findIndex((Ge) => M(Ge, K));
          Ee === -1 ? yt({
            diff: "reset"
          }) : Ot({
            index: Ee
          });
          return;
        }
        if (J.current >= pe.length - 1) {
          Ot({
            index: pe.length - 1
          });
          return;
        }
        Ot({
          index: J.current
        });
      }
    }, [
      pe.length,
      $ ? false : ee,
      v,
      yt,
      Ot,
      ve,
      xe,
      $
    ]), jr = Be((Q) => {
      ap(re, Q), Q && Gt();
    });
    d.useEffect(() => {
      Gt();
    }, [
      Gt
    ]);
    const At = (Q) => {
      Le || (Re(true), _e(true), A && A(Q));
    }, Qt = (Q, K) => {
      Le && (Re(false), N && N(Q, K));
    }, Ht = (Q, K, de, Ee) => {
      if ($) {
        if (ee.length === K.length && ee.every((Ge, nt) => Ge === K[nt])) return;
      } else if (ee === K) return;
      E && E(Q, K, de, Ee), Se(K);
    }, Vt = d.useRef(false), zt = (Q, K, de = "selectOption", Ee = "options") => {
      let Ge = de, nt = K;
      if ($) {
        nt = Array.isArray(ee) ? ee.slice() : [];
        const wt = nt.findIndex((nr) => M(K, nr));
        wt === -1 ? nt.push(K) : Ee !== "freeSolo" && (nt.splice(wt, 1), Ge = "removeOption");
      }
      Ne(Q, nt, Ge), Ht(Q, nt, Ge, {
        option: K
      }), !g && (!Q || !Q.ctrlKey && !Q.metaKey) && Qt(Q, Ge), (s === true || s === "touch" && Vt.current || s === "mouse" && !Vt.current) && Z.current.blur();
    };
    function yo(Q, K) {
      if (Q === -1) return -1;
      let de = Q;
      for (; ; ) {
        if (K === "next" && de === ee.length || K === "previous" && de === -1) return -1;
        const Ee = ce.querySelector(`[data-tag-index="${de}"]`);
        if (!Ee || !Ee.hasAttribute("tabindex") || Ee.disabled || Ee.getAttribute("aria-disabled") === "true") de += K === "next" ? 1 : -1;
        else return de;
      }
    }
    const wo = (Q, K) => {
      if (!$) return;
      xe === "" && Qt(Q, "toggleInput");
      let de = Y;
      Y === -1 ? xe === "" && K === "previous" && (de = ee.length - 1) : (de += K === "next" ? 1 : -1, de < 0 && (de = 0), de === ee.length && (de = -1)), de = yo(de, K), ne(de), $e(de);
    }, Me = (Q) => {
      W.current = true, ke(""), P && P(Q, "", "clear"), Ht(Q, $ ? [] : null, "clear");
    }, or = (Q) => (K) => {
      if (Q.onKeyDown && Q.onKeyDown(K), !K.defaultMuiPrevented && (Y !== -1 && ![
        "ArrowLeft",
        "ArrowRight"
      ].includes(K.key) && (ne(-1), $e(-1)), K.which !== 229)) switch (K.key) {
        case "Home":
          ve && j && (K.preventDefault(), yt({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: K
          }));
          break;
        case "End":
          ve && j && (K.preventDefault(), yt({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: K
          }));
          break;
        case "PageUp":
          K.preventDefault(), yt({
            diff: -oa,
            direction: "previous",
            reason: "keyboard",
            event: K
          }), At(K);
          break;
        case "PageDown":
          K.preventDefault(), yt({
            diff: oa,
            direction: "next",
            reason: "keyboard",
            event: K
          }), At(K);
          break;
        case "ArrowDown":
          K.preventDefault(), yt({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: K
          }), At(K);
          break;
        case "ArrowUp":
          K.preventDefault(), yt({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: K
          }), At(K);
          break;
        case "ArrowLeft":
          wo(K, "previous");
          break;
        case "ArrowRight":
          wo(K, "next");
          break;
        case "Enter":
          if (J.current !== -1 && ve) {
            const de = pe[J.current], Ee = k ? k(de) : false;
            if (K.preventDefault(), Ee) return;
            zt(K, de, "selectOption"), o && Z.current.setSelectionRange(Z.current.value.length, Z.current.value.length);
          } else w && xe !== "" && me === false && ($ && K.preventDefault(), zt(K, xe, "createOption", "freeSolo"));
          break;
        case "Escape":
          ve ? (K.preventDefault(), K.stopPropagation(), Qt(K, "escape")) : a && (xe !== "" || $ && ee.length > 0) && (K.preventDefault(), K.stopPropagation(), Me(K));
          break;
        case "Backspace":
          if ($ && !H && xe === "" && ee.length > 0) {
            const de = Y === -1 ? ee.length - 1 : Y, Ee = ee.slice();
            Ee.splice(de, 1), Ht(K, Ee, "removeOption", {
              option: ee[de]
            });
          }
          break;
        case "Delete":
          if ($ && !H && xe === "" && ee.length > 0 && Y !== -1) {
            const de = Y, Ee = ee.slice();
            Ee.splice(de, 1), Ht(K, Ee, "removeOption", {
              option: ee[de]
            });
          }
          break;
      }
    }, os = (Q) => {
      qe(true), z && !W.current && At(Q);
    }, io = (Q) => {
      if (t(re)) {
        Z.current.focus();
        return;
      }
      qe(false), te.current = true, W.current = false, l && J.current !== -1 && ve ? zt(Q, pe[J.current], "blur") : l && w && xe !== "" ? zt(Q, xe, "blur", "freeSolo") : i && Ne(Q, ee, "blur"), Qt(Q, "blur");
    }, sn = (Q) => {
      const K = Q.target.value;
      xe !== K && (ke(K), _e(false), P && P(Q, K, "input")), K === "" ? !p && !$ && Ht(Q, null, "clear") : At(Q);
    }, an = (Q) => {
      const K = Number(Q.currentTarget.getAttribute("data-option-index"));
      J.current !== K && Ot({
        event: Q,
        index: K,
        reason: "mouse"
      });
    }, ns = (Q) => {
      Ot({
        event: Q,
        index: Number(Q.currentTarget.getAttribute("data-option-index")),
        reason: "touch"
      }), Vt.current = true;
    }, ls = (Q) => {
      const K = Number(Q.currentTarget.getAttribute("data-option-index"));
      zt(Q, pe[K], "selectOption"), Vt.current = false;
    }, ss = (Q) => (K) => {
      const de = ee.slice();
      de.splice(Q, 1), Ht(K, de, "removeOption", {
        option: ee[Q]
      });
    }, is = (Q) => {
      Le ? Qt(Q, "toggleInput") : At(Q);
    }, cn = (Q) => {
      Q.currentTarget.contains(Q.target) && Q.target.getAttribute("id") !== B && Q.preventDefault();
    }, $t = (Q) => {
      Q.currentTarget.contains(Q.target) && (Z.current.focus(), G && te.current && Z.current.selectionEnd - Z.current.selectionStart === 0 && Z.current.select(), te.current = false);
    }, Ft = (Q) => {
      !b && (xe === "" || !Le) && is(Q);
    };
    let Or = w && xe.length > 0;
    Or = Or || ($ ? ee.length > 0 : ee !== null);
    let el = pe;
    return I && (el = pe.reduce((Q, K, de) => {
      const Ee = I(K);
      return Q.length > 0 && Q[Q.length - 1].group === Ee ? Q[Q.length - 1].options.push(K) : Q.push({
        key: de,
        index: de,
        group: Ee,
        options: [
          K
        ]
      }), Q;
    }, [])), b && Ve && io(), {
      getRootProps: (Q = {}) => ({
        ...Q,
        onKeyDown: or(Q),
        onMouseDown: cn,
        onClick: $t
      }),
      getInputLabelProps: () => ({
        id: `${B}-label`,
        htmlFor: B
      }),
      getInputProps: () => ({
        id: B,
        value: xe,
        onBlur: io,
        onFocus: os,
        onChange: sn,
        onMouseDown: Ft,
        "aria-activedescendant": ve ? "" : null,
        "aria-autocomplete": o ? "both" : "list",
        "aria-controls": je ? `${B}-listbox` : void 0,
        "aria-expanded": je,
        autoComplete: "off",
        ref: Z,
        autoCapitalize: "none",
        spellCheck: "false",
        role: "combobox",
        disabled: b
      }),
      getClearProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: Me
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: is
      }),
      getTagProps: ({ index: Q }) => ({
        key: Q,
        "data-tag-index": Q,
        tabIndex: -1,
        ...!H && {
          onDelete: ss(Q)
        }
      }),
      getListboxProps: () => ({
        role: "listbox",
        id: `${B}-listbox`,
        "aria-labelledby": `${B}-label`,
        ref: jr,
        onMouseDown: (Q) => {
          Q.preventDefault();
        }
      }),
      getOptionProps: ({ index: Q, option: K }) => {
        const de = ($ ? ee : [
          ee
        ]).some((Ge) => Ge != null && M(K, Ge)), Ee = k ? k(K) : false;
        return {
          key: (L == null ? void 0 : L(K)) ?? q(K),
          tabIndex: -1,
          role: "option",
          id: `${B}-option-${Q}`,
          onMouseMove: an,
          onClick: ls,
          onTouchStart: ns,
          "data-option-index": Q,
          "aria-disabled": Ee,
          "aria-selected": de
        };
      },
      id: B,
      inputValue: xe,
      value: ee,
      dirty: Or,
      expanded: ve && ce,
      popupOpen: ve,
      focused: Ve || Y !== -1,
      anchorEl: ce,
      setAnchorEl: Ce,
      focusedTag: Y,
      groupedOptions: el
    };
  }
  var qt = "top", mr = "bottom", br = "right", Kt = "left", ci = "auto", Gn = [
    qt,
    mr,
    br,
    Kt
  ], Go = "start", En = "end", Ef = "clippingParents", Xc = "viewport", dn = "popper", Tf = "reference", la = Gn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Go,
      t + "-" + En
    ]);
  }, []), Qc = [].concat(Gn, [
    ci
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Go,
      t + "-" + En
    ]);
  }, []), Af = "beforeRead", Df = "read", $f = "afterRead", Lf = "beforeMain", Rf = "main", jf = "afterMain", Hf = "beforeWrite", zf = "write", Nf = "afterWrite", _f = [
    Af,
    Df,
    $f,
    Lf,
    Rf,
    jf,
    Hf,
    zf,
    Nf
  ];
  function Dr(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function rr(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function po(e) {
    var t = rr(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function fr(e) {
    var t = rr(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function ui(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = rr(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Gf(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(r) {
      var o = t.styles[r] || {}, n = t.attributes[r] || {}, l = t.elements[r];
      !fr(l) || !Dr(l) || (Object.assign(l.style, o), Object.keys(n).forEach(function(s) {
        var i = n[s];
        i === false ? l.removeAttribute(s) : l.setAttribute(s, i === true ? "" : i);
      }));
    });
  }
  function Vf(e) {
    var t = e.state, r = {
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
    return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
      Object.keys(t.elements).forEach(function(o) {
        var n = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]), i = s.reduce(function(a, u) {
          return a[u] = "", a;
        }, {});
        !fr(n) || !Dr(n) || (Object.assign(n.style, i), Object.keys(l).forEach(function(a) {
          n.removeAttribute(a);
        }));
      });
    };
  }
  const Bf = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Gf,
    effect: Vf,
    requires: [
      "computeStyles"
    ]
  };
  function Er(e) {
    return e.split("-")[0];
  }
  var co = Math.max, Il = Math.min, Vo = Math.round;
  function As() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Zc() {
    return !/^((?!chrome|android).)*safari/i.test(As());
  }
  function Bo(e, t, r) {
    t === void 0 && (t = false), r === void 0 && (r = false);
    var o = e.getBoundingClientRect(), n = 1, l = 1;
    t && fr(e) && (n = e.offsetWidth > 0 && Vo(o.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && Vo(o.height) / e.offsetHeight || 1);
    var s = po(e) ? rr(e) : window, i = s.visualViewport, a = !Zc() && r, u = (o.left + (a && i ? i.offsetLeft : 0)) / n, c = (o.top + (a && i ? i.offsetTop : 0)) / l, p = o.width / n, g = o.height / l;
    return {
      width: p,
      height: g,
      top: c,
      right: u + p,
      bottom: c + g,
      left: u,
      x: u,
      y: c
    };
  }
  function di(e) {
    var t = Bo(e), r = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: r,
      height: o
    };
  }
  function Jc(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (r && ui(r)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function Br(e) {
    return rr(e).getComputedStyle(e);
  }
  function Wf(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(Dr(e)) >= 0;
  }
  function no(e) {
    return ((po(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Bl(e) {
    return Dr(e) === "html" ? e : e.assignedSlot || e.parentNode || (ui(e) ? e.host : null) || no(e);
  }
  function sa(e) {
    return !fr(e) || Br(e).position === "fixed" ? null : e.offsetParent;
  }
  function Uf(e) {
    var t = /firefox/i.test(As()), r = /Trident/i.test(As());
    if (r && fr(e)) {
      var o = Br(e);
      if (o.position === "fixed") return null;
    }
    var n = Bl(e);
    for (ui(n) && (n = n.host); fr(n) && [
      "html",
      "body"
    ].indexOf(Dr(n)) < 0; ) {
      var l = Br(n);
      if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none") return n;
      n = n.parentNode;
    }
    return null;
  }
  function Vn(e) {
    for (var t = rr(e), r = sa(e); r && Wf(r) && Br(r).position === "static"; ) r = sa(r);
    return r && (Dr(r) === "html" || Dr(r) === "body" && Br(r).position === "static") ? t : r || Uf(e) || t;
  }
  function pi(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function Sn(e, t, r) {
    return co(e, Il(t, r));
  }
  function qf(e, t, r) {
    var o = Sn(e, t, r);
    return o > r ? r : o;
  }
  function eu() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function tu(e) {
    return Object.assign({}, eu(), e);
  }
  function ru(e, t) {
    return t.reduce(function(r, o) {
      return r[o] = e, r;
    }, {});
  }
  var Kf = function(t, r) {
    return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
      placement: r.placement
    })) : t, tu(typeof t != "number" ? t : ru(t, Gn));
  };
  function Yf(e) {
    var t, r = e.state, o = e.name, n = e.options, l = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Er(r.placement), a = pi(i), u = [
      Kt,
      br
    ].indexOf(i) >= 0, c = u ? "height" : "width";
    if (!(!l || !s)) {
      var p = Kf(n.padding, r), g = di(l), b = a === "y" ? qt : Kt, h = a === "y" ? mr : br, m = r.rects.reference[c] + r.rects.reference[a] - s[a] - r.rects.popper[c], x = s[a] - r.rects.reference[a], v = Vn(l), w = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = m / 2 - x / 2, L = p[b], F = w - g[c] - p[h], I = w / 2 - g[c] / 2 + k, j = Sn(L, I, F), D = a;
      r.modifiersData[o] = (t = {}, t[D] = j, t.centerOffset = j - I, t);
    }
  }
  function Xf(e) {
    var t = e.state, r = e.options, o = r.element, n = o === void 0 ? "[data-popper-arrow]" : o;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || Jc(t.elements.popper, n) && (t.elements.arrow = n));
  }
  const Qf = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Yf,
    effect: Xf,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Wo(e) {
    return e.split("-")[1];
  }
  var Zf = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Jf(e, t) {
    var r = e.x, o = e.y, n = t.devicePixelRatio || 1;
    return {
      x: Vo(r * n) / n || 0,
      y: Vo(o * n) / n || 0
    };
  }
  function ia(e) {
    var t, r = e.popper, o = e.popperRect, n = e.placement, l = e.variation, s = e.offsets, i = e.position, a = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, g = s.x, b = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, x = typeof c == "function" ? c({
      x: b,
      y: m
    }) : {
      x: b,
      y: m
    };
    b = x.x, m = x.y;
    var v = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), k = Kt, L = qt, F = window;
    if (u) {
      var I = Vn(r), j = "clientHeight", D = "clientWidth";
      if (I === rr(r) && (I = no(r), Br(I).position !== "static" && i === "absolute" && (j = "scrollHeight", D = "scrollWidth")), I = I, n === qt || (n === Kt || n === br) && l === En) {
        L = mr;
        var S = p && I === F && F.visualViewport ? F.visualViewport.height : I[j];
        m -= S - o.height, m *= a ? 1 : -1;
      }
      if (n === Kt || (n === qt || n === mr) && l === En) {
        k = br;
        var y = p && I === F && F.visualViewport ? F.visualViewport.width : I[D];
        b -= y - o.width, b *= a ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: i
    }, u && Zf), $ = c === true ? Jf({
      x: b,
      y: m
    }, rr(r)) : {
      x: b,
      y: m
    };
    if (b = $.x, m = $.y, a) {
      var E;
      return Object.assign({}, M, (E = {}, E[L] = w ? "0" : "", E[k] = v ? "0" : "", E.transform = (F.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + m + "px)" : "translate3d(" + b + "px, " + m + "px, 0)", E));
    }
    return Object.assign({}, M, (t = {}, t[L] = w ? m + "px" : "", t[k] = v ? b + "px" : "", t.transform = "", t));
  }
  function eg(e) {
    var t = e.state, r = e.options, o = r.gpuAcceleration, n = o === void 0 ? true : o, l = r.adaptive, s = l === void 0 ? true : l, i = r.roundOffsets, a = i === void 0 ? true : i, u = {
      placement: Er(t.placement),
      variation: Wo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ia(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ia(Object.assign({}, u, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const tg = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: eg,
    data: {}
  };
  var sl = {
    passive: true
  };
  function rg(e) {
    var t = e.state, r = e.instance, o = e.options, n = o.scroll, l = n === void 0 ? true : n, s = o.resize, i = s === void 0 ? true : s, a = rr(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return l && u.forEach(function(c) {
      c.addEventListener("scroll", r.update, sl);
    }), i && a.addEventListener("resize", r.update, sl), function() {
      l && u.forEach(function(c) {
        c.removeEventListener("scroll", r.update, sl);
      }), i && a.removeEventListener("resize", r.update, sl);
    };
  }
  const og = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: rg,
    data: {}
  };
  var ng = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function hl(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return ng[t];
    });
  }
  var lg = {
    start: "end",
    end: "start"
  };
  function aa(e) {
    return e.replace(/start|end/g, function(t) {
      return lg[t];
    });
  }
  function fi(e) {
    var t = rr(e), r = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: r,
      scrollTop: o
    };
  }
  function gi(e) {
    return Bo(no(e)).left + fi(e).scrollLeft;
  }
  function sg(e, t) {
    var r = rr(e), o = no(e), n = r.visualViewport, l = o.clientWidth, s = o.clientHeight, i = 0, a = 0;
    if (n) {
      l = n.width, s = n.height;
      var u = Zc();
      (u || !u && t === "fixed") && (i = n.offsetLeft, a = n.offsetTop);
    }
    return {
      width: l,
      height: s,
      x: i + gi(e),
      y: a
    };
  }
  function ig(e) {
    var t, r = no(e), o = fi(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, l = co(r.scrollWidth, r.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), s = co(r.scrollHeight, r.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), i = -o.scrollLeft + gi(e), a = -o.scrollTop;
    return Br(n || r).direction === "rtl" && (i += co(r.clientWidth, n ? n.clientWidth : 0) - l), {
      width: l,
      height: s,
      x: i,
      y: a
    };
  }
  function hi(e) {
    var t = Br(e), r = t.overflow, o = t.overflowX, n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + n + o);
  }
  function ou(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(Dr(e)) >= 0 ? e.ownerDocument.body : fr(e) && hi(e) ? e : ou(Bl(e));
  }
  function Pn(e, t) {
    var r;
    t === void 0 && (t = []);
    var o = ou(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = rr(o), s = n ? [
      l
    ].concat(l.visualViewport || [], hi(o) ? o : []) : o, i = t.concat(s);
    return n ? i : i.concat(Pn(Bl(s)));
  }
  function Ds(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function ag(e, t) {
    var r = Bo(e, false, t === "fixed");
    return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
  }
  function ca(e, t, r) {
    return t === Xc ? Ds(sg(e, r)) : po(t) ? ag(t, r) : Ds(ig(no(e)));
  }
  function cg(e) {
    var t = Pn(Bl(e)), r = [
      "absolute",
      "fixed"
    ].indexOf(Br(e).position) >= 0, o = r && fr(e) ? Vn(e) : e;
    return po(o) ? t.filter(function(n) {
      return po(n) && Jc(n, o) && Dr(n) !== "body";
    }) : [];
  }
  function ug(e, t, r, o) {
    var n = t === "clippingParents" ? cg(e) : [].concat(t), l = [].concat(n, [
      r
    ]), s = l[0], i = l.reduce(function(a, u) {
      var c = ca(e, u, o);
      return a.top = co(c.top, a.top), a.right = Il(c.right, a.right), a.bottom = Il(c.bottom, a.bottom), a.left = co(c.left, a.left), a;
    }, ca(e, s, o));
    return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
  }
  function nu(e) {
    var t = e.reference, r = e.element, o = e.placement, n = o ? Er(o) : null, l = o ? Wo(o) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, a;
    switch (n) {
      case qt:
        a = {
          x: s,
          y: t.y - r.height
        };
        break;
      case mr:
        a = {
          x: s,
          y: t.y + t.height
        };
        break;
      case br:
        a = {
          x: t.x + t.width,
          y: i
        };
        break;
      case Kt:
        a = {
          x: t.x - r.width,
          y: i
        };
        break;
      default:
        a = {
          x: t.x,
          y: t.y
        };
    }
    var u = n ? pi(n) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (l) {
        case Go:
          a[u] = a[u] - (t[c] / 2 - r[c] / 2);
          break;
        case En:
          a[u] = a[u] + (t[c] / 2 - r[c] / 2);
          break;
      }
    }
    return a;
  }
  function Tn(e, t) {
    t === void 0 && (t = {});
    var r = t, o = r.placement, n = o === void 0 ? e.placement : o, l = r.strategy, s = l === void 0 ? e.strategy : l, i = r.boundary, a = i === void 0 ? Ef : i, u = r.rootBoundary, c = u === void 0 ? Xc : u, p = r.elementContext, g = p === void 0 ? dn : p, b = r.altBoundary, h = b === void 0 ? false : b, m = r.padding, x = m === void 0 ? 0 : m, v = tu(typeof x != "number" ? x : ru(x, Gn)), w = g === dn ? Tf : dn, k = e.rects.popper, L = e.elements[h ? w : g], F = ug(po(L) ? L : L.contextElement || no(e.elements.popper), a, c, s), I = Bo(e.elements.reference), j = nu({
      reference: I,
      element: k,
      placement: n
    }), D = Ds(Object.assign({}, k, j)), S = g === dn ? D : I, y = {
      top: F.top - S.top + v.top,
      bottom: S.bottom - F.bottom + v.bottom,
      left: F.left - S.left + v.left,
      right: S.right - F.right + v.right
    }, M = e.modifiersData.offset;
    if (g === dn && M) {
      var $ = M[n];
      Object.keys(y).forEach(function(E) {
        var N = [
          br,
          mr
        ].indexOf(E) >= 0 ? 1 : -1, T = [
          qt,
          mr
        ].indexOf(E) >= 0 ? "y" : "x";
        y[E] += $[T] * N;
      });
    }
    return y;
  }
  function dg(e, t) {
    t === void 0 && (t = {});
    var r = t, o = r.placement, n = r.boundary, l = r.rootBoundary, s = r.padding, i = r.flipVariations, a = r.allowedAutoPlacements, u = a === void 0 ? Qc : a, c = Wo(o), p = c ? i ? la : la.filter(function(h) {
      return Wo(h) === c;
    }) : Gn, g = p.filter(function(h) {
      return u.indexOf(h) >= 0;
    });
    g.length === 0 && (g = p);
    var b = g.reduce(function(h, m) {
      return h[m] = Tn(e, {
        placement: m,
        boundary: n,
        rootBoundary: l,
        padding: s
      })[Er(m)], h;
    }, {});
    return Object.keys(b).sort(function(h, m) {
      return b[h] - b[m];
    });
  }
  function pg(e) {
    if (Er(e) === ci) return [];
    var t = hl(e);
    return [
      aa(e),
      t,
      aa(t)
    ];
  }
  function fg(e) {
    var t = e.state, r = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var n = r.mainAxis, l = n === void 0 ? true : n, s = r.altAxis, i = s === void 0 ? true : s, a = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, g = r.altBoundary, b = r.flipVariations, h = b === void 0 ? true : b, m = r.allowedAutoPlacements, x = t.options.placement, v = Er(x), w = v === x, k = a || (w || !h ? [
        hl(x)
      ] : pg(x)), L = [
        x
      ].concat(k).reduce(function(B, q) {
        return B.concat(Er(q) === ci ? dg(t, {
          placement: q,
          boundary: c,
          rootBoundary: p,
          padding: u,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : q);
      }, []), F = t.rects.reference, I = t.rects.popper, j = /* @__PURE__ */ new Map(), D = true, S = L[0], y = 0; y < L.length; y++) {
        var M = L[y], $ = Er(M), E = Wo(M) === Go, N = [
          qt,
          mr
        ].indexOf($) >= 0, T = N ? "width" : "height", P = Tn(t, {
          placement: M,
          boundary: c,
          rootBoundary: p,
          altBoundary: g,
          padding: u
        }), A = N ? E ? br : Kt : E ? mr : qt;
        F[T] > I[T] && (A = hl(A));
        var R = hl(A), z = [];
        if (l && z.push(P[$] <= 0), i && z.push(P[A] <= 0, P[R] <= 0), z.every(function(B) {
          return B;
        })) {
          S = M, D = false;
          break;
        }
        j.set(M, z);
      }
      if (D) for (var _ = h ? 3 : 1, H = function(q) {
        var W = L.find(function(te) {
          var Z = j.get(te);
          if (Z) return Z.slice(0, q).every(function(re) {
            return re;
          });
        });
        if (W) return S = W, "break";
      }, G = _; G > 0; G--) {
        var U = H(G);
        if (U === "break") break;
      }
      t.placement !== S && (t.modifiersData[o]._skip = true, t.placement = S, t.reset = true);
    }
  }
  const gg = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: fg,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function ua(e, t, r) {
    return r === void 0 && (r = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x
    };
  }
  function da(e) {
    return [
      qt,
      br,
      mr,
      Kt
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function hg(e) {
    var t = e.state, r = e.name, o = t.rects.reference, n = t.rects.popper, l = t.modifiersData.preventOverflow, s = Tn(t, {
      elementContext: "reference"
    }), i = Tn(t, {
      altBoundary: true
    }), a = ua(s, o), u = ua(i, n, l), c = da(a), p = da(u);
    t.modifiersData[r] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": p
    });
  }
  const mg = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: hg
  };
  function bg(e, t, r) {
    var o = Er(e), n = [
      Kt,
      qt
    ].indexOf(o) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, t, {
      placement: e
    })) : r, s = l[0], i = l[1];
    return s = s || 0, i = (i || 0) * n, [
      Kt,
      br
    ].indexOf(o) >= 0 ? {
      x: i,
      y: s
    } : {
      x: s,
      y: i
    };
  }
  function Cg(e) {
    var t = e.state, r = e.options, o = e.name, n = r.offset, l = n === void 0 ? [
      0,
      0
    ] : n, s = Qc.reduce(function(c, p) {
      return c[p] = bg(p, t.rects, l), c;
    }, {}), i = s[t.placement], a = i.x, u = i.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
  }
  const yg = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: Cg
  };
  function wg(e) {
    var t = e.state, r = e.name;
    t.modifiersData[r] = nu({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const xg = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: wg,
    data: {}
  };
  function vg(e) {
    return e === "x" ? "y" : "x";
  }
  function Sg(e) {
    var t = e.state, r = e.options, o = e.name, n = r.mainAxis, l = n === void 0 ? true : n, s = r.altAxis, i = s === void 0 ? false : s, a = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, g = r.tether, b = g === void 0 ? true : g, h = r.tetherOffset, m = h === void 0 ? 0 : h, x = Tn(t, {
      boundary: a,
      rootBoundary: u,
      padding: p,
      altBoundary: c
    }), v = Er(t.placement), w = Wo(t.placement), k = !w, L = pi(v), F = vg(L), I = t.modifiersData.popperOffsets, j = t.rects.reference, D = t.rects.popper, S = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, y = typeof S == "number" ? {
      mainAxis: S,
      altAxis: S
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, S), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = {
      x: 0,
      y: 0
    };
    if (I) {
      if (l) {
        var E, N = L === "y" ? qt : Kt, T = L === "y" ? mr : br, P = L === "y" ? "height" : "width", A = I[L], R = A + x[N], z = A - x[T], _ = b ? -D[P] / 2 : 0, H = w === Go ? j[P] : D[P], G = w === Go ? -D[P] : -j[P], U = t.elements.arrow, B = b && U ? di(U) : {
          width: 0,
          height: 0
        }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : eu(), W = q[N], te = q[T], Z = Sn(0, j[P], B[P]), re = k ? j[P] / 2 - _ - Z - W - y.mainAxis : H - Z - W - y.mainAxis, ce = k ? -j[P] / 2 + _ + Z + te + y.mainAxis : G + Z + te + y.mainAxis, Ce = t.elements.arrow && Vn(t.elements.arrow), Y = Ce ? L === "y" ? Ce.clientTop || 0 : Ce.clientLeft || 0 : 0, ne = (E = M == null ? void 0 : M[L]) != null ? E : 0, he = A + re - ne - Y, J = A + ce - ne, Ie = Sn(b ? Il(R, he) : R, A, b ? co(z, J) : z);
        I[L] = Ie, $[L] = Ie - A;
      }
      if (i) {
        var ee, Se = L === "x" ? qt : Kt, xe = L === "x" ? mr : br, ke = I[F], Ve = F === "y" ? "height" : "width", qe = ke + x[Se], Ne = ke - x[xe], Le = [
          qt,
          Kt
        ].indexOf(v) !== -1, Re = (ee = M == null ? void 0 : M[F]) != null ? ee : 0, Ke = Le ? qe : ke - j[Ve] - D[Ve] - Re + y.altAxis, _e = Le ? ke + j[Ve] + D[Ve] - Re - y.altAxis : Ne, me = b && Le ? qf(Ke, ke, _e) : Sn(b ? Ke : qe, ke, b ? _e : Ne);
        I[F] = me, $[F] = me - ke;
      }
      t.modifiersData[o] = $;
    }
  }
  const Pg = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: Sg,
    requiresIfExists: [
      "offset"
    ]
  };
  function Ig(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Mg(e) {
    return e === rr(e) || !fr(e) ? fi(e) : Ig(e);
  }
  function Og(e) {
    var t = e.getBoundingClientRect(), r = Vo(t.width) / e.offsetWidth || 1, o = Vo(t.height) / e.offsetHeight || 1;
    return r !== 1 || o !== 1;
  }
  function Fg(e, t, r) {
    r === void 0 && (r = false);
    var o = fr(t), n = fr(t) && Og(t), l = no(t), s = Bo(e, n, r), i = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !r) && ((Dr(t) !== "body" || hi(l)) && (i = Mg(t)), fr(t) ? (a = Bo(t, true), a.x += t.clientLeft, a.y += t.clientTop) : l && (a.x = gi(l))), {
      x: s.left + i.scrollLeft - a.x,
      y: s.top + i.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function kg(e) {
    var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(l) {
      t.set(l.name, l);
    });
    function n(l) {
      r.add(l.name);
      var s = [].concat(l.requires || [], l.requiresIfExists || []);
      s.forEach(function(i) {
        if (!r.has(i)) {
          var a = t.get(i);
          a && n(a);
        }
      }), o.push(l);
    }
    return e.forEach(function(l) {
      r.has(l.name) || n(l);
    }), o;
  }
  function Eg(e) {
    var t = kg(e);
    return _f.reduce(function(r, o) {
      return r.concat(t.filter(function(n) {
        return n.phase === o;
      }));
    }, []);
  }
  function Tg(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(r) {
        Promise.resolve().then(function() {
          t = void 0, r(e());
        });
      })), t;
    };
  }
  function Ag(e) {
    var t = e.reduce(function(r, o) {
      var n = r[o.name];
      return r[o.name] = n ? Object.assign({}, n, o, {
        options: Object.assign({}, n.options, o.options),
        data: Object.assign({}, n.data, o.data)
      }) : o, r;
    }, {});
    return Object.keys(t).map(function(r) {
      return t[r];
    });
  }
  var pa = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function fa() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Dg(e) {
    e === void 0 && (e = {});
    var t = e, r = t.defaultModifiers, o = r === void 0 ? [] : r, n = t.defaultOptions, l = n === void 0 ? pa : n;
    return function(i, a, u) {
      u === void 0 && (u = l);
      var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, pa, l),
        modifiersData: {},
        elements: {
          reference: i,
          popper: a
        },
        attributes: {},
        styles: {}
      }, p = [], g = false, b = {
        state: c,
        setOptions: function(v) {
          var w = typeof v == "function" ? v(c.options) : v;
          m(), c.options = Object.assign({}, l, c.options, w), c.scrollParents = {
            reference: po(i) ? Pn(i) : i.contextElement ? Pn(i.contextElement) : [],
            popper: Pn(a)
          };
          var k = Eg(Ag([].concat(o, c.options.modifiers)));
          return c.orderedModifiers = k.filter(function(L) {
            return L.enabled;
          }), h(), b.update();
        },
        forceUpdate: function() {
          if (!g) {
            var v = c.elements, w = v.reference, k = v.popper;
            if (fa(w, k)) {
              c.rects = {
                reference: Fg(w, Vn(k), c.options.strategy === "fixed"),
                popper: di(k)
              }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(y) {
                return c.modifiersData[y.name] = Object.assign({}, y.data);
              });
              for (var L = 0; L < c.orderedModifiers.length; L++) {
                if (c.reset === true) {
                  c.reset = false, L = -1;
                  continue;
                }
                var F = c.orderedModifiers[L], I = F.fn, j = F.options, D = j === void 0 ? {} : j, S = F.name;
                typeof I == "function" && (c = I({
                  state: c,
                  options: D,
                  name: S,
                  instance: b
                }) || c);
              }
            }
          }
        },
        update: Tg(function() {
          return new Promise(function(x) {
            b.forceUpdate(), x(c);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!fa(i, a)) return b;
      b.setOptions(u).then(function(x) {
        !g && u.onFirstUpdate && u.onFirstUpdate(x);
      });
      function h() {
        c.orderedModifiers.forEach(function(x) {
          var v = x.name, w = x.options, k = w === void 0 ? {} : w, L = x.effect;
          if (typeof L == "function") {
            var F = L({
              state: c,
              name: v,
              instance: b,
              options: k
            }), I = function() {
            };
            p.push(F || I);
          }
        });
      }
      function m() {
        p.forEach(function(x) {
          return x();
        }), p = [];
      }
      return b;
    };
  }
  var $g = [
    og,
    xg,
    tg,
    Bf,
    yg,
    gg,
    Pg,
    Qf,
    mg
  ], Lg = Dg({
    defaultModifiers: $g
  });
  function Rg(e) {
    return mt("MuiPopper", e);
  }
  gt("MuiPopper", [
    "root"
  ]);
  function jg(e, t) {
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
  function $s(e) {
    return typeof e == "function" ? e() : e;
  }
  function Hg(e) {
    return e.nodeType !== void 0;
  }
  const zg = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, Rg, t);
  }, Ng = {}, _g = d.forwardRef(function(t, r) {
    const { anchorEl: o, children: n, direction: l, disablePortal: s, modifiers: i, open: a, placement: u, popperOptions: c, popperRef: p, slotProps: g = {}, slots: b = {}, TransitionProps: h, ownerState: m, ...x } = t, v = d.useRef(null), w = Yt(v, r), k = d.useRef(null), L = Yt(k, p), F = d.useRef(L);
    Tt(() => {
      F.current = L;
    }, [
      L
    ]), d.useImperativeHandle(p, () => k.current, []);
    const I = jg(u, l), [j, D] = d.useState(I), [S, y] = d.useState($s(o));
    d.useEffect(() => {
      k.current && k.current.forceUpdate();
    }), d.useEffect(() => {
      o && y($s(o));
    }, [
      o
    ]), Tt(() => {
      if (!S || !a) return;
      const T = (R) => {
        D(R.placement);
      };
      let P = [
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
          fn: ({ state: R }) => {
            T(R);
          }
        }
      ];
      i != null && (P = P.concat(i)), c && c.modifiers != null && (P = P.concat(c.modifiers));
      const A = Lg(S, v.current, {
        placement: I,
        ...c,
        modifiers: P
      });
      return F.current(A), () => {
        A.destroy(), F.current(null);
      };
    }, [
      S,
      s,
      i,
      a,
      c,
      I
    ]);
    const M = {
      placement: j
    };
    h !== null && (M.TransitionProps = h);
    const $ = zg(t), E = b.root ?? "div", N = up({
      elementType: E,
      externalSlotProps: g.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: w
      },
      ownerState: t,
      className: $.root
    });
    return f.jsx(E, {
      ...N,
      children: typeof n == "function" ? n(M) : n
    });
  }), Gg = d.forwardRef(function(t, r) {
    const { anchorEl: o, children: n, container: l, direction: s = "ltr", disablePortal: i = false, keepMounted: a = false, modifiers: u, open: c, placement: p = "bottom", popperOptions: g = Ng, popperRef: b, style: h, transition: m = false, slotProps: x = {}, slots: v = {}, ...w } = t, [k, L] = d.useState(true), F = () => {
      L(false);
    }, I = () => {
      L(true);
    };
    if (!a && !c && (!m || k)) return null;
    let j;
    if (l) j = l;
    else if (o) {
      const y = $s(o);
      j = y && Hg(y) ? pr(y).body : pr(null).body;
    }
    const D = !c && a && (!m || k) ? "none" : void 0, S = m ? {
      in: c,
      onEnter: F,
      onExited: I
    } : void 0;
    return f.jsx(cp, {
      disablePortal: i,
      container: j,
      children: f.jsx(_g, {
        anchorEl: o,
        direction: s,
        disablePortal: i,
        modifiers: u,
        ref: r,
        open: m ? !k : c,
        placement: p,
        popperOptions: g,
        popperRef: b,
        slotProps: x,
        slots: v,
        ...w,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: D,
          ...h
        },
        TransitionProps: S,
        children: n
      })
    });
  }), Vg = se(Gg, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), bo = d.forwardRef(function(t, r) {
    const o = Xt(), n = bt({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: l, component: s, components: i, componentsProps: a, container: u, disablePortal: c, keepMounted: p, modifiers: g, open: b, placement: h, popperOptions: m, popperRef: x, transition: v, slots: w, slotProps: k, ...L } = n, F = (w == null ? void 0 : w.root) ?? (i == null ? void 0 : i.Root), I = {
      anchorEl: l,
      container: u,
      disablePortal: c,
      keepMounted: p,
      modifiers: g,
      open: b,
      placement: h,
      popperOptions: m,
      popperRef: x,
      transition: v,
      ...L
    };
    return f.jsx(Vg, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: F
      },
      slotProps: k ?? a,
      ...I,
      ref: r
    });
  });
  function Bg(e) {
    return mt("MuiListSubheader", e);
  }
  gt("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const Wg = (e) => {
    const { classes: t, color: r, disableGutters: o, inset: n, disableSticky: l } = e, s = {
      root: [
        "root",
        r !== "default" && `color${ie(r)}`,
        !o && "gutters",
        n && "inset",
        !l && "sticky"
      ]
    };
    return ge(s, Bg, t);
  }, Ug = se("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "default" && t[`color${ie(r.color)}`],
        !r.disableGutters && t.gutters,
        r.inset && t.inset,
        !r.disableSticky && t.sticky
      ];
    }
  })(Ue(({ theme: e }) => ({
    boxSizing: "border-box",
    lineHeight: "48px",
    listStyle: "none",
    color: (e.vars || e).palette.text.secondary,
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(14),
    variants: [
      {
        props: {
          color: "primary"
        },
        style: {
          color: (e.vars || e).palette.primary.main
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.inset,
        style: {
          paddingLeft: 72
        }
      },
      {
        props: ({ ownerState: t }) => !t.disableSticky,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: (e.vars || e).palette.background.paper
        }
      }
    ]
  }))), Ls = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiListSubheader"
    }), { className: n, color: l = "default", component: s = "li", disableGutters: i = false, disableSticky: a = false, inset: u = false, ...c } = o, p = {
      ...o,
      color: l,
      component: s,
      disableGutters: i,
      disableSticky: a,
      inset: u
    }, g = Wg(p);
    return f.jsx(Ug, {
      as: s,
      className: ue(g.root, n),
      ref: r,
      ownerState: p,
      ...c
    });
  });
  Ls && (Ls.muiSkipListHighlight = true);
  const qg = Pe(f.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Kg(e) {
    return mt("MuiChip", e);
  }
  const He = gt("MuiChip", [
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
  ]), Yg = (e) => {
    const { classes: t, disabled: r, size: o, color: n, iconColor: l, onDelete: s, clickable: i, variant: a } = e, u = {
      root: [
        "root",
        a,
        r && "disabled",
        `size${ie(o)}`,
        `color${ie(n)}`,
        i && "clickable",
        i && `clickableColor${ie(n)}`,
        s && "deletable",
        s && `deletableColor${ie(n)}`,
        `${a}${ie(n)}`
      ],
      label: [
        "label",
        `label${ie(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${ie(o)}`,
        `avatarColor${ie(n)}`
      ],
      icon: [
        "icon",
        `icon${ie(o)}`,
        `iconColor${ie(l)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${ie(o)}`,
        `deleteIconColor${ie(n)}`,
        `deleteIcon${ie(a)}Color${ie(n)}`
      ]
    };
    return ge(u, Kg, t);
  }, Xg = se("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e, { color: o, iconColor: n, clickable: l, onDelete: s, size: i, variant: a } = r;
      return [
        {
          [`& .${He.avatar}`]: t.avatar
        },
        {
          [`& .${He.avatar}`]: t[`avatar${ie(i)}`]
        },
        {
          [`& .${He.avatar}`]: t[`avatarColor${ie(o)}`]
        },
        {
          [`& .${He.icon}`]: t.icon
        },
        {
          [`& .${He.icon}`]: t[`icon${ie(i)}`]
        },
        {
          [`& .${He.icon}`]: t[`iconColor${ie(n)}`]
        },
        {
          [`& .${He.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${He.deleteIcon}`]: t[`deleteIcon${ie(i)}`]
        },
        {
          [`& .${He.deleteIcon}`]: t[`deleteIconColor${ie(o)}`]
        },
        {
          [`& .${He.deleteIcon}`]: t[`deleteIcon${ie(a)}Color${ie(o)}`]
        },
        t.root,
        t[`size${ie(i)}`],
        t[`color${ie(o)}`],
        l && t.clickable,
        l && o !== "default" && t[`clickableColor${ie(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${ie(o)}`],
        t[a],
        t[`${a}${ie(o)}`]
      ];
    }
  })(Ue(({ theme: e }) => {
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
      [`&.${He.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${He.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${He.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${He.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${He.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${He.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${He.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : ut(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : ut(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${He.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${He.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(er([
          "contrastText"
        ])).map(([r]) => ({
          props: {
            color: r
          },
          style: {
            backgroundColor: (e.vars || e).palette[r].main,
            color: (e.vars || e).palette[r].contrastText,
            [`& .${He.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : ut(e.palette[r].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[r].contrastText
              }
            }
          }
        })),
        {
          props: (r) => r.iconColor === r.color,
          style: {
            [`& .${He.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (r) => r.iconColor === r.color && r.color !== "default",
          style: {
            [`& .${He.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${He.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ut(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(er([
          "dark"
        ])).map(([r]) => ({
          props: {
            color: r,
            onDelete: true
          },
          style: {
            [`&.${He.focusVisible}`]: {
              background: (e.vars || e).palette[r].dark
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ut(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${He.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ut(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(er([
          "dark"
        ])).map(([r]) => ({
          props: {
            color: r,
            clickable: true
          },
          style: {
            [`&:hover, &.${He.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[r].dark
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
            [`&.${He.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${He.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${He.avatar}`]: {
              marginLeft: 4
            },
            [`& .${He.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${He.icon}`]: {
              marginLeft: 4
            },
            [`& .${He.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${He.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${He.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(er()).map(([r]) => ({
          props: {
            variant: "outlined",
            color: r
          },
          style: {
            color: (e.vars || e).palette[r].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : ut(e.palette[r].main, 0.7)}`,
            [`&.${He.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ut(e.palette[r].main, e.palette.action.hoverOpacity)
            },
            [`&.${He.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ut(e.palette[r].main, e.palette.action.focusOpacity)
            },
            [`& .${He.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : ut(e.palette[r].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[r].main
              }
            }
          }
        }))
      ]
    };
  })), Qg = se("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e, { size: o } = r;
      return [
        t.label,
        t[`label${ie(o)}`]
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
  function ga(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const Ho = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiChip"
    }), { avatar: n, className: l, clickable: s, color: i = "default", component: a, deleteIcon: u, disabled: c = false, icon: p, label: g, onClick: b, onDelete: h, onKeyDown: m, onKeyUp: x, size: v = "medium", variant: w = "filled", tabIndex: k, skipFocusWhenDisabled: L = false, ...F } = o, I = d.useRef(null), j = Yt(I, r), D = (z) => {
      z.stopPropagation(), h && h(z);
    }, S = (z) => {
      z.currentTarget === z.target && ga(z) && z.preventDefault(), m && m(z);
    }, y = (z) => {
      z.currentTarget === z.target && h && ga(z) && h(z), x && x(z);
    }, M = s !== false && b ? true : s, $ = M || h ? Es : a || "div", E = {
      ...o,
      component: $,
      disabled: c,
      size: v,
      color: i,
      iconColor: d.isValidElement(p) && p.props.color || i,
      onDelete: !!h,
      clickable: M,
      variant: w
    }, N = Yg(E), T = $ === Es ? {
      component: a || "div",
      focusVisibleClassName: N.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let P = null;
    h && (P = u && d.isValidElement(u) ? d.cloneElement(u, {
      className: ue(u.props.className, N.deleteIcon),
      onClick: D
    }) : f.jsx(qg, {
      className: ue(N.deleteIcon),
      onClick: D
    }));
    let A = null;
    n && d.isValidElement(n) && (A = d.cloneElement(n, {
      className: ue(N.avatar, n.props.className)
    }));
    let R = null;
    return p && d.isValidElement(p) && (R = d.cloneElement(p, {
      className: ue(N.icon, p.props.className)
    })), f.jsxs(Xg, {
      as: $,
      className: ue(N.root, l),
      disabled: M && c ? true : void 0,
      onClick: b,
      onKeyDown: S,
      onKeyUp: y,
      ref: j,
      tabIndex: L && c ? -1 : k,
      ownerState: E,
      ...T,
      ...F,
      children: [
        A || R,
        f.jsx(Qg, {
          className: ue(N.label),
          ownerState: E,
          children: g
        }),
        P
      ]
    });
  });
  function Zg(e) {
    return mt("MuiAutocomplete", e);
  }
  const De = gt("MuiAutocomplete", [
    "root",
    "expanded",
    "fullWidth",
    "focused",
    "focusVisible",
    "tag",
    "tagSizeSmall",
    "tagSizeMedium",
    "hasPopupIcon",
    "hasClearIcon",
    "inputRoot",
    "input",
    "inputFocused",
    "endAdornment",
    "clearIndicator",
    "popupIndicator",
    "popupIndicatorOpen",
    "popper",
    "popperDisablePortal",
    "paper",
    "listbox",
    "loading",
    "noOptions",
    "option",
    "groupLabel",
    "groupUl"
  ]);
  var ha, ma;
  const Jg = (e) => {
    const { classes: t, disablePortal: r, expanded: o, focused: n, fullWidth: l, hasClearIcon: s, hasPopupIcon: i, inputFocused: a, popupOpen: u, size: c } = e, p = {
      root: [
        "root",
        o && "expanded",
        n && "focused",
        l && "fullWidth",
        s && "hasClearIcon",
        i && "hasPopupIcon"
      ],
      inputRoot: [
        "inputRoot"
      ],
      input: [
        "input",
        a && "inputFocused"
      ],
      tag: [
        "tag",
        `tagSize${ie(c)}`
      ],
      endAdornment: [
        "endAdornment"
      ],
      clearIndicator: [
        "clearIndicator"
      ],
      popupIndicator: [
        "popupIndicator",
        u && "popupIndicatorOpen"
      ],
      popper: [
        "popper",
        r && "popperDisablePortal"
      ],
      paper: [
        "paper"
      ],
      listbox: [
        "listbox"
      ],
      loading: [
        "loading"
      ],
      noOptions: [
        "noOptions"
      ],
      option: [
        "option"
      ],
      groupLabel: [
        "groupLabel"
      ],
      groupUl: [
        "groupUl"
      ]
    };
    return ge(p, Zg, t);
  }, eh = se("div", {
    name: "MuiAutocomplete",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e, { fullWidth: o, hasClearIcon: n, hasPopupIcon: l, inputFocused: s, size: i } = r;
      return [
        {
          [`& .${De.tag}`]: t.tag
        },
        {
          [`& .${De.tag}`]: t[`tagSize${ie(i)}`]
        },
        {
          [`& .${De.inputRoot}`]: t.inputRoot
        },
        {
          [`& .${De.input}`]: t.input
        },
        {
          [`& .${De.input}`]: s && t.inputFocused
        },
        t.root,
        o && t.fullWidth,
        l && t.hasPopupIcon,
        n && t.hasClearIcon
      ];
    }
  })({
    [`&.${De.focused} .${De.clearIndicator}`]: {
      visibility: "visible"
    },
    "@media (pointer: fine)": {
      [`&:hover .${De.clearIndicator}`]: {
        visibility: "visible"
      }
    },
    [`& .${De.tag}`]: {
      margin: 3,
      maxWidth: "calc(100% - 6px)"
    },
    [`& .${De.inputRoot}`]: {
      [`.${De.hasPopupIcon}&, .${De.hasClearIcon}&`]: {
        paddingRight: 30
      },
      [`.${De.hasPopupIcon}.${De.hasClearIcon}&`]: {
        paddingRight: 56
      },
      [`& .${De.input}`]: {
        width: 0,
        minWidth: 30
      }
    },
    [`& .${cs.root}`]: {
      paddingBottom: 1,
      "& .MuiInput-input": {
        padding: "4px 4px 4px 0px"
      }
    },
    [`& .${cs.root}.${sr.sizeSmall}`]: {
      [`& .${cs.input}`]: {
        padding: "2px 4px 3px 0"
      }
    },
    [`& .${Ki.root}`]: {
      padding: 9,
      [`.${De.hasPopupIcon}&, .${De.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${De.hasPopupIcon}.${De.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${De.input}`]: {
        padding: "7.5px 4px 7.5px 5px"
      },
      [`& .${De.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${Ki.root}.${sr.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${De.input}`]: {
        padding: "2.5px 4px 2.5px 8px"
      }
    },
    [`& .${xo.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${De.hasPopupIcon}&, .${De.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${De.hasPopupIcon}.${De.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${xo.input}`]: {
        padding: "7px 4px"
      },
      [`& .${De.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${xo.root}.${sr.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${xo.input}`]: {
        padding: "2.5px 4px"
      }
    },
    [`& .${sr.hiddenLabel}`]: {
      paddingTop: 8
    },
    [`& .${xo.root}.${sr.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${De.input}`]: {
        paddingTop: 16,
        paddingBottom: 17
      }
    },
    [`& .${xo.root}.${sr.hiddenLabel}.${sr.sizeSmall}`]: {
      [`& .${De.input}`]: {
        paddingTop: 8,
        paddingBottom: 9
      }
    },
    [`& .${De.input}`]: {
      flexGrow: 1,
      textOverflow: "ellipsis",
      opacity: 0
    },
    variants: [
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          [`& .${De.tag}`]: {
            margin: 2,
            maxWidth: "calc(100% - 4px)"
          }
        }
      },
      {
        props: {
          inputFocused: true
        },
        style: {
          [`& .${De.input}`]: {
            opacity: 1
          }
        }
      },
      {
        props: {
          multiple: true
        },
        style: {
          [`& .${De.inputRoot}`]: {
            flexWrap: "wrap"
          }
        }
      }
    ]
  }), th = se("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  }), rh = se(Et, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator
  })({
    marginRight: -2,
    padding: 4,
    visibility: "hidden"
  }), oh = se(Et, {
    name: "MuiAutocomplete",
    slot: "PopupIndicator",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.popupIndicator,
        r.popupOpen && t.popupIndicatorOpen
      ];
    }
  })({
    padding: 2,
    marginRight: -2,
    variants: [
      {
        props: {
          popupOpen: true
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }), nh = se(bo, {
    name: "MuiAutocomplete",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        {
          [`& .${De.option}`]: t.option
        },
        t.popper,
        r.disablePortal && t.popperDisablePortal
      ];
    }
  })(Ue(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.modal,
    variants: [
      {
        props: {
          disablePortal: true
        },
        style: {
          position: "absolute"
        }
      }
    ]
  }))), lh = se(Ut, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(Ue(({ theme: e }) => ({
    ...e.typography.body1,
    overflow: "auto"
  }))), sh = se("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading
  })(Ue(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), ih = se("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions
  })(Ue(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), ah = se("ul", {
    name: "MuiAutocomplete",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox
  })(Ue(({ theme: e }) => ({
    listStyle: "none",
    margin: 0,
    padding: "8px 0",
    maxHeight: "40vh",
    overflow: "auto",
    position: "relative",
    [`& .${De.option}`]: {
      minHeight: 48,
      display: "flex",
      overflow: "hidden",
      justifyContent: "flex-start",
      alignItems: "center",
      cursor: "pointer",
      paddingTop: 6,
      boxSizing: "border-box",
      outline: "0",
      WebkitTapHighlightColor: "transparent",
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      },
      [`&.${De.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`&.${De.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ut(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${De.focused}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ut(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected
          }
        },
        [`&.${De.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ut(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }
  }))), ch = se(Ls, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel
  })(Ue(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8
  }))), uh = se("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl
  })({
    padding: 0,
    [`& .${De.option}`]: {
      paddingLeft: 24
    }
  }), lu = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiAutocomplete"
    }), { autoComplete: n = false, autoHighlight: l = false, autoSelect: s = false, blurOnSelect: i = false, ChipProps: a, className: u, clearIcon: c = ha || (ha = f.jsx(Kc, {
      fontSize: "small"
    })), clearOnBlur: p = !o.freeSolo, clearOnEscape: g = false, clearText: b = "Clear", closeText: h = "Close", componentsProps: m, defaultValue: x = o.multiple ? [] : null, disableClearable: v = false, disableCloseOnSelect: w = false, disabled: k = false, disabledItemsFocusable: L = false, disableListWrap: F = false, disablePortal: I = false, filterOptions: j, filterSelectedOptions: D = false, forcePopupIcon: S = "auto", freeSolo: y = false, fullWidth: M = false, getLimitTagsText: $ = (et) => `+${et}`, getOptionDisabled: E, getOptionKey: N, getOptionLabel: T, isOptionEqualToValue: P, groupBy: A, handleHomeEndKeys: R = !o.freeSolo, id: z, includeInputInList: _ = false, inputValue: H, limitTags: G = -1, ListboxComponent: U, ListboxProps: B, loading: q = false, loadingText: W = "Loading\u2026", multiple: te = false, noOptionsText: Z = "No options", onChange: re, onClose: ce, onHighlightChange: Ce, onInputChange: Y, onOpen: ne, open: he, openOnFocus: J = false, openText: Ie = "Open", options: ee, PaperComponent: Se, PopperComponent: xe, popupIcon: ke = ma || (ma = f.jsx(dp, {})), readOnly: Ve = false, renderGroup: qe, renderInput: Ne, renderOption: Le, renderTags: Re, selectOnFocus: Ke = !o.freeSolo, size: _e = "medium", slots: me = {}, slotProps: ve = {}, value: pe, ...be } = o, { getRootProps: je, getInputProps: $e, getInputLabelProps: ct, getPopupIndicatorProps: Ot, getClearProps: yt, getTagProps: Rr, getListboxProps: Gt, getOptionProps: jr, value: At, dirty: Qt, expanded: Ht, id: Vt, popupOpen: zt, focused: yo, focusedTag: wo, anchorEl: Me, setAnchorEl: or, inputValue: os, groupedOptions: io } = kf({
      ...o,
      componentName: "Autocomplete"
    }), sn = !v && !k && Qt && !Ve, an = (!y || S === true) && S !== false, { onMouseDown: ns } = $e(), { ref: ls, ...ss } = Gt(), cn = T || ((et) => et.label ?? et), $t = {
      ...o,
      disablePortal: I,
      expanded: Ht,
      focused: yo,
      fullWidth: M,
      getOptionLabel: cn,
      hasClearIcon: sn,
      hasPopupIcon: an,
      inputFocused: wo === -1,
      popupOpen: zt,
      size: _e
    }, Ft = Jg($t), Or = {
      slots: {
        paper: Se,
        popper: xe,
        ...me
      },
      slotProps: {
        chip: a,
        listbox: B,
        ...m,
        ...ve
      }
    }, [el, Q] = Je("listbox", {
      elementType: ah,
      externalForwardedProps: Or,
      ownerState: $t,
      className: Ft.listbox,
      additionalProps: ss,
      ref: ls
    }), [K, de] = Je("paper", {
      elementType: Ut,
      externalForwardedProps: Or,
      ownerState: $t,
      className: Ft.paper
    }), [Ee, Ge] = Je("popper", {
      elementType: bo,
      externalForwardedProps: Or,
      ownerState: $t,
      className: Ft.popper,
      additionalProps: {
        disablePortal: I,
        style: {
          width: Me ? Me.clientWidth : null
        },
        role: "presentation",
        anchorEl: Me,
        open: zt
      }
    });
    let nt;
    if (te && At.length > 0) {
      const et = (Fr) => ({
        className: Ft.tag,
        disabled: k,
        ...Rr(Fr)
      });
      Re ? nt = Re(At, et, $t) : nt = At.map((Fr, Kr) => {
        const { key: un, ...lp } = et({
          index: Kr
        });
        return f.jsx(Ho, {
          label: cn(Fr),
          size: _e,
          ...lp,
          ...Or.slotProps.chip
        }, un);
      });
    }
    if (G > -1 && Array.isArray(nt)) {
      const et = nt.length - G;
      !yo && et > 0 && (nt = nt.splice(0, G), nt.push(f.jsx("span", {
        className: Ft.tag,
        children: $(et)
      }, nt.length)));
    }
    const nr = qe || ((et) => f.jsxs("li", {
      children: [
        f.jsx(ch, {
          className: Ft.groupLabel,
          ownerState: $t,
          component: "div",
          children: et.group
        }),
        f.jsx(uh, {
          className: Ft.groupUl,
          ownerState: $t,
          children: et.children
        })
      ]
    }, et.key)), np = Le || ((et, Fr) => {
      const { key: Kr, ...un } = et;
      return f.jsx("li", {
        ...un,
        children: cn(Fr)
      }, Kr);
    }), Bi = (et, Fr) => {
      const Kr = jr({
        option: et,
        index: Fr
      });
      return np({
        ...Kr,
        className: Ft.option
      }, et, {
        selected: Kr["aria-selected"],
        index: Fr,
        inputValue: os
      }, $t);
    }, Wi = Or.slotProps.clearIndicator, Ui = Or.slotProps.popupIndicator;
    return f.jsxs(d.Fragment, {
      children: [
        f.jsx(eh, {
          ref: r,
          className: ue(Ft.root, u),
          ownerState: $t,
          ...je(be),
          children: Ne({
            id: Vt,
            disabled: k,
            fullWidth: true,
            size: _e === "small" ? "small" : void 0,
            InputLabelProps: ct(),
            InputProps: {
              ref: or,
              className: Ft.inputRoot,
              startAdornment: nt,
              onMouseDown: (et) => {
                et.target === et.currentTarget && ns(et);
              },
              ...(sn || an) && {
                endAdornment: f.jsxs(th, {
                  className: Ft.endAdornment,
                  ownerState: $t,
                  children: [
                    sn ? f.jsx(rh, {
                      ...yt(),
                      "aria-label": b,
                      title: b,
                      ownerState: $t,
                      ...Wi,
                      className: ue(Ft.clearIndicator, Wi == null ? void 0 : Wi.className),
                      children: c
                    }) : null,
                    an ? f.jsx(oh, {
                      ...Ot(),
                      disabled: k,
                      "aria-label": zt ? h : Ie,
                      title: zt ? h : Ie,
                      ownerState: $t,
                      ...Ui,
                      className: ue(Ft.popupIndicator, Ui == null ? void 0 : Ui.className),
                      children: ke
                    }) : null
                  ]
                })
              }
            },
            inputProps: {
              className: Ft.input,
              disabled: k,
              readOnly: Ve,
              ...$e()
            }
          })
        }),
        Me ? f.jsx(nh, {
          as: Ee,
          ...Ge,
          children: f.jsxs(lh, {
            as: K,
            ...de,
            children: [
              q && io.length === 0 ? f.jsx(sh, {
                className: Ft.loading,
                ownerState: $t,
                children: W
              }) : null,
              io.length === 0 && !y && !q ? f.jsx(ih, {
                className: Ft.noOptions,
                ownerState: $t,
                role: "presentation",
                onMouseDown: (et) => {
                  et.preventDefault();
                },
                children: Z
              }) : null,
              io.length > 0 ? f.jsx(el, {
                as: U,
                ...Q,
                children: io.map((et, Fr) => A ? nr({
                  key: et.key,
                  group: et.group,
                  children: et.options.map((Kr, un) => Bi(Kr, et.index + un))
                }) : Bi(et, Fr))
              }) : null
            ]
          })
        }) : null
      ]
    });
  });
  function dh(e) {
    const { badgeContent: t, invisible: r = false, max: o = 99, showZero: n = false } = e, l = ai({
      badgeContent: t,
      max: o
    });
    let s = r;
    r === false && t === 0 && !n && (s = true);
    const { badgeContent: i, max: a = o } = s ? l : e, u = i && Number(i) > a ? `${a}+` : i;
    return {
      badgeContent: i,
      invisible: s,
      max: a,
      displayValue: u
    };
  }
  function ph(e) {
    return mt("MuiBadge", e);
  }
  const Yr = gt("MuiBadge", [
    "root",
    "badge",
    "dot",
    "standard",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft",
    "invisible",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular"
  ]), ds = 10, ps = 4, fh = (e) => {
    const { color: t, anchorOrigin: r, invisible: o, overlap: n, variant: l, classes: s = {} } = e, i = {
      root: [
        "root"
      ],
      badge: [
        "badge",
        l,
        o && "invisible",
        `anchorOrigin${ie(r.vertical)}${ie(r.horizontal)}`,
        `anchorOrigin${ie(r.vertical)}${ie(r.horizontal)}${ie(n)}`,
        `overlap${ie(n)}`,
        t !== "default" && `color${ie(t)}`
      ]
    };
    return ge(i, ph, s);
  }, gh = se("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0
  }), hh = se("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.badge,
        t[r.variant],
        t[`anchorOrigin${ie(r.anchorOrigin.vertical)}${ie(r.anchorOrigin.horizontal)}${ie(r.overlap)}`],
        r.color !== "default" && t[`color${ie(r.color)}`],
        r.invisible && t.invisible
      ];
    }
  })(Ue(({ theme: e }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(12),
    minWidth: ds * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: ds * 2,
    borderRadius: ds,
    zIndex: 1,
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeInOut,
      duration: e.transitions.duration.enteringScreen
    }),
    variants: [
      ...Object.entries(e.palette).filter(er([
        "contrastText"
      ])).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: (e.vars || e).palette[t].main,
          color: (e.vars || e).palette[t].contrastText
        }
      })),
      {
        props: {
          variant: "dot"
        },
        style: {
          borderRadius: ps,
          height: ps * 2,
          minWidth: ps * 2,
          padding: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
        style: {
          top: 0,
          right: 0,
          transform: "scale(1) translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
        style: {
          bottom: 0,
          right: 0,
          transform: "scale(1) translate(50%, 50%)",
          transformOrigin: "100% 100%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(50%, 50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
        style: {
          top: 0,
          left: 0,
          transform: "scale(1) translate(-50%, -50%)",
          transformOrigin: "0% 0%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(-50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
        style: {
          bottom: 0,
          left: 0,
          transform: "scale(1) translate(-50%, 50%)",
          transformOrigin: "0% 100%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(-50%, 50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
        style: {
          top: "14%",
          right: "14%",
          transform: "scale(1) translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
        style: {
          bottom: "14%",
          right: "14%",
          transform: "scale(1) translate(50%, 50%)",
          transformOrigin: "100% 100%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(50%, 50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
        style: {
          top: "14%",
          left: "14%",
          transform: "scale(1) translate(-50%, -50%)",
          transformOrigin: "0% 0%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(-50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
        style: {
          bottom: "14%",
          left: "14%",
          transform: "scale(1) translate(-50%, 50%)",
          transformOrigin: "0% 100%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(-50%, 50%)"
          }
        }
      },
      {
        props: {
          invisible: true
        },
        style: {
          transition: e.transitions.create("transform", {
            easing: e.transitions.easing.easeInOut,
            duration: e.transitions.duration.leavingScreen
          })
        }
      }
    ]
  })));
  function ba(e) {
    return {
      vertical: (e == null ? void 0 : e.vertical) ?? "top",
      horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
    };
  }
  const mh = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiBadge"
    }), { anchorOrigin: n, className: l, classes: s, component: i, components: a = {}, componentsProps: u = {}, children: c, overlap: p = "rectangular", color: g = "default", invisible: b = false, max: h = 99, badgeContent: m, slots: x, slotProps: v, showZero: w = false, variant: k = "standard", ...L } = o, { badgeContent: F, invisible: I, max: j, displayValue: D } = dh({
      max: h,
      invisible: b,
      badgeContent: m,
      showZero: w
    }), S = ai({
      anchorOrigin: ba(n),
      color: g,
      overlap: p,
      variant: k,
      badgeContent: m
    }), y = I || F == null && k !== "dot", { color: M = g, overlap: $ = p, anchorOrigin: E, variant: N = k } = y ? S : o, T = ba(E), P = N !== "dot" ? D : void 0, A = {
      ...o,
      badgeContent: F,
      invisible: y,
      max: j,
      displayValue: P,
      showZero: w,
      anchorOrigin: T,
      color: M,
      overlap: $,
      variant: N
    }, R = fh(A), z = {
      slots: {
        root: (x == null ? void 0 : x.root) ?? a.Root,
        badge: (x == null ? void 0 : x.badge) ?? a.Badge
      },
      slotProps: {
        root: (v == null ? void 0 : v.root) ?? u.root,
        badge: (v == null ? void 0 : v.badge) ?? u.badge
      }
    }, [_, H] = Je("root", {
      elementType: gh,
      externalForwardedProps: {
        ...z,
        ...L
      },
      ownerState: A,
      className: ue(R.root, l),
      ref: r,
      additionalProps: {
        as: i
      }
    }), [G, U] = Je("badge", {
      elementType: hh,
      externalForwardedProps: z,
      ownerState: A,
      className: R.badge
    });
    return f.jsxs(_, {
      ...H,
      children: [
        c,
        f.jsx(G, {
          ...U,
          children: P
        })
      ]
    });
  });
  function bh(e) {
    return mt("MuiCard", e);
  }
  gt("MuiCard", [
    "root"
  ]);
  const Ch = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, bh, t);
  }, yh = se(Ut, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), wh = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiCard"
    }), { className: n, raised: l = false, ...s } = o, i = {
      ...o,
      raised: l
    }, a = Ch(i);
    return f.jsx(yh, {
      className: ue(a.root, n),
      elevation: l ? 8 : void 0,
      ref: r,
      ownerState: i,
      ...s
    });
  });
  function Ca(e) {
    return e.substring(2).toLowerCase();
  }
  function xh(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function mi(e) {
    const { children: t, disableReactTree: r = false, mouseEvent: o = "onClick", onClickAway: n, touchEvent: l = "onTouchEnd" } = e, s = d.useRef(false), i = d.useRef(null), a = d.useRef(false), u = d.useRef(false);
    d.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const c = Yt(_c(t), i), p = Be((h) => {
      const m = u.current;
      u.current = false;
      const x = pr(i.current);
      if (!a.current || !i.current || "clientX" in h && xh(h, x)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let v;
      h.composedPath ? v = h.composedPath().includes(i.current) : v = !x.documentElement.contains(h.target) || i.current.contains(h.target), !v && (r || !m) && n(h);
    }), g = (h) => (m) => {
      u.current = true;
      const x = t.props[h];
      x && x(m);
    }, b = {
      ref: c
    };
    return l !== false && (b[l] = g(l)), d.useEffect(() => {
      if (l !== false) {
        const h = Ca(l), m = pr(i.current), x = () => {
          s.current = true;
        };
        return m.addEventListener(h, p), m.addEventListener("touchmove", x), () => {
          m.removeEventListener(h, p), m.removeEventListener("touchmove", x);
        };
      }
    }, [
      p,
      l
    ]), o !== false && (b[o] = g(o)), d.useEffect(() => {
      if (o !== false) {
        const h = Ca(o), m = pr(i.current);
        return m.addEventListener(h, p), () => {
          m.removeEventListener(h, p);
        };
      }
    }, [
      p,
      o
    ]), d.cloneElement(t, b);
  }
  function vh(e) {
    return mt("MuiDialogActions", e);
  }
  gt("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const Sh = (e) => {
    const { classes: t, disableSpacing: r } = e;
    return ge({
      root: [
        "root",
        !r && "spacing"
      ]
    }, vh, t);
  }, Ph = se("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.disableSpacing && t.spacing
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
  }), Ih = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiDialogActions"
    }), { className: n, disableSpacing: l = false, ...s } = o, i = {
      ...o,
      disableSpacing: l
    }, a = Sh(i);
    return f.jsx(Ph, {
      className: ue(a.root, n),
      ownerState: i,
      ref: r,
      ...s
    });
  });
  function Mh(e) {
    return mt("MuiInputAdornment", e);
  }
  const ya = gt("MuiInputAdornment", [
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
  var wa;
  const Oh = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      t[`position${ie(r.position)}`],
      r.disablePointerEvents === true && t.disablePointerEvents,
      t[r.variant]
    ];
  }, Fh = (e) => {
    const { classes: t, disablePointerEvents: r, hiddenLabel: o, position: n, size: l, variant: s } = e, i = {
      root: [
        "root",
        r && "disablePointerEvents",
        n && `position${ie(n)}`,
        s,
        o && "hiddenLabel",
        l && `size${ie(l)}`
      ]
    };
    return ge(i, Mh, t);
  }, kh = se("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Oh
  })(Ue(({ theme: e }) => ({
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
          [`&.${ya.positionStart}&:not(.${ya.hiddenLabel})`]: {
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
  }))), su = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiInputAdornment"
    }), { children: n, className: l, component: s = "div", disablePointerEvents: i = false, disableTypography: a = false, position: u, variant: c, ...p } = o, g = pp() || {};
    let b = c;
    c && g.variant, g && !b && (b = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: i,
      position: u,
      variant: b
    }, m = Fh(h);
    return f.jsx(fp.Provider, {
      value: null,
      children: f.jsx(kh, {
        as: s,
        ownerState: h,
        className: ue(m.root, l),
        ref: r,
        ...p,
        children: typeof n == "string" && !a ? f.jsx(ye, {
          color: "textSecondary",
          children: n
        }) : f.jsxs(d.Fragment, {
          children: [
            u === "start" ? wa || (wa = f.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            n
          ]
        })
      })
    });
  });
  function Eh(e) {
    return mt("MuiLinearProgress", e);
  }
  gt("MuiLinearProgress", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "determinate",
    "indeterminate",
    "buffer",
    "query",
    "dashed",
    "dashedColorPrimary",
    "dashedColorSecondary",
    "bar",
    "bar1",
    "bar2",
    "barColorPrimary",
    "barColorSecondary",
    "bar1Indeterminate",
    "bar1Determinate",
    "bar1Buffer",
    "bar2Indeterminate",
    "bar2Buffer"
  ]);
  const Rs = 4, js = _n`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, Th = typeof js != "string" ? Nn`
        animation: ${js} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, Hs = _n`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, Ah = typeof Hs != "string" ? Nn`
        animation: ${Hs} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, zs = _n`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, Dh = typeof zs != "string" ? Nn`
        animation: ${zs} 3s infinite linear;
      ` : null, $h = (e) => {
    const { classes: t, variant: r, color: o } = e, n = {
      root: [
        "root",
        `color${ie(o)}`,
        r
      ],
      dashed: [
        "dashed",
        `dashedColor${ie(o)}`
      ],
      bar1: [
        "bar",
        "bar1",
        `barColor${ie(o)}`,
        (r === "indeterminate" || r === "query") && "bar1Indeterminate",
        r === "determinate" && "bar1Determinate",
        r === "buffer" && "bar1Buffer"
      ],
      bar2: [
        "bar",
        "bar2",
        r !== "buffer" && `barColor${ie(o)}`,
        r === "buffer" && `color${ie(o)}`,
        (r === "indeterminate" || r === "query") && "bar2Indeterminate",
        r === "buffer" && "bar2Buffer"
      ]
    };
    return ge(n, Eh, t);
  }, bi = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Fn(e.palette[t].main, 0.62) : On(e.palette[t].main, 0.5), Lh = se("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`color${ie(r.color)}`],
        t[r.variant]
      ];
    }
  })(Ue(({ theme: e }) => ({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
      colorAdjust: "exact"
    },
    variants: [
      ...Object.entries(e.palette).filter(er()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: bi(e, t)
        }
      })),
      {
        props: ({ ownerState: t }) => t.color === "inherit" && t.variant !== "buffer",
        style: {
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "currentColor",
            opacity: 0.3
          }
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          backgroundColor: "transparent"
        }
      },
      {
        props: {
          variant: "query"
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }))), Rh = se("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.dashed,
        t[`dashedColor${ie(r.color)}`]
      ];
    }
  })(Ue(({ theme: e }) => ({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%",
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px",
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          opacity: 0.3,
          backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
        }
      },
      ...Object.entries(e.palette).filter(er()).map(([t]) => {
        const r = bi(e, t);
        return {
          props: {
            color: t
          },
          style: {
            backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`
          }
        };
      })
    ]
  })), Dh || {
    animation: `${zs} 3s infinite linear`
  }), jh = se("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t.bar1,
        t[`barColor${ie(r.color)}`],
        (r.variant === "indeterminate" || r.variant === "query") && t.bar1Indeterminate,
        r.variant === "determinate" && t.bar1Determinate,
        r.variant === "buffer" && t.bar1Buffer
      ];
    }
  })(Ue(({ theme: e }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          backgroundColor: "currentColor"
        }
      },
      ...Object.entries(e.palette).filter(er()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: (e.vars || e).palette[t].main
        }
      })),
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: `transform .${Rs}s linear`
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          zIndex: 1,
          transition: `transform .${Rs}s linear`
        }
      },
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: Th || {
          animation: `${js} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
        }
      }
    ]
  }))), Hh = se("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t.bar2,
        t[`barColor${ie(r.color)}`],
        (r.variant === "indeterminate" || r.variant === "query") && t.bar2Indeterminate,
        r.variant === "buffer" && t.bar2Buffer
      ];
    }
  })(Ue(({ theme: e }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      ...Object.entries(e.palette).filter(er()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main
        }
      })),
      {
        props: ({ ownerState: t }) => t.variant !== "buffer" && t.color !== "inherit",
        style: {
          backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
        }
      },
      {
        props: ({ ownerState: t }) => t.variant !== "buffer" && t.color === "inherit",
        style: {
          backgroundColor: "currentColor"
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          opacity: 0.3
        }
      },
      ...Object.entries(e.palette).filter(er()).map(([t]) => ({
        props: {
          color: t,
          variant: "buffer"
        },
        style: {
          backgroundColor: bi(e, t),
          transition: `transform .${Rs}s linear`
        }
      })),
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: Ah || {
          animation: `${Hs} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
        }
      }
    ]
  }))), zh = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiLinearProgress"
    }), { className: n, color: l = "primary", value: s, valueBuffer: i, variant: a = "indeterminate", ...u } = o, c = {
      ...o,
      color: l,
      variant: a
    }, p = $h(c), g = Xt(), b = {}, h = {
      bar1: {},
      bar2: {}
    };
    if ((a === "determinate" || a === "buffer") && s !== void 0) {
      b["aria-valuenow"] = Math.round(s), b["aria-valuemin"] = 0, b["aria-valuemax"] = 100;
      let m = s - 100;
      g && (m = -m), h.bar1.transform = `translateX(${m}%)`;
    }
    if (a === "buffer" && i !== void 0) {
      let m = (i || 0) - 100;
      g && (m = -m), h.bar2.transform = `translateX(${m}%)`;
    }
    return f.jsxs(Lh, {
      className: ue(p.root, n),
      ownerState: c,
      role: "progressbar",
      ...b,
      ref: r,
      ...u,
      children: [
        a === "buffer" ? f.jsx(Rh, {
          className: p.dashed,
          ownerState: c
        }) : null,
        f.jsx(jh, {
          className: p.bar1,
          ownerState: c,
          style: h.bar1
        }),
        a === "determinate" ? null : f.jsx(Hh, {
          className: p.bar2,
          ownerState: c,
          style: h.bar2
        })
      ]
    });
  }), Nh = (e) => {
    const { alignItems: t, classes: r } = e;
    return ge({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, jp, r);
  }, _h = se("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(Ue(({ theme: e }) => ({
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
  }))), zo = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiListItemIcon"
    }), { className: n, ...l } = o, s = d.useContext(gp), i = {
      ...o,
      alignItems: s.alignItems
    }, a = Nh(i);
    return f.jsx(_h, {
      className: ue(a.root, n),
      ownerState: i,
      ref: r,
      ...l
    });
  }), Gh = Pe(f.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Vh = Pe(f.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Bh(e) {
    return mt("MuiSkeleton", e);
  }
  gt("MuiSkeleton", [
    "root",
    "text",
    "rectangular",
    "rounded",
    "circular",
    "pulse",
    "wave",
    "withChildren",
    "fitContent",
    "heightAuto"
  ]);
  const Wh = (e) => {
    const { classes: t, variant: r, animation: o, hasChildren: n, width: l, height: s } = e;
    return ge({
      root: [
        "root",
        r,
        o,
        n && "withChildren",
        n && !l && "fitContent",
        n && !s && "heightAuto"
      ]
    }, Bh, t);
  }, Ns = _n`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, _s = _n`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`, Uh = typeof Ns != "string" ? Nn`
        animation: ${Ns} 2s ease-in-out 0.5s infinite;
      ` : null, qh = typeof _s != "string" ? Nn`
        &::after {
          animation: ${_s} 2s linear 0.5s infinite;
        }
      ` : null, Kh = se("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        r.animation !== false && t[r.animation],
        r.hasChildren && t.withChildren,
        r.hasChildren && !r.width && t.fitContent,
        r.hasChildren && !r.height && t.heightAuto
      ];
    }
  })(Ue(({ theme: e }) => {
    const t = Yp(e.shape.borderRadius) || "px", r = Xp(e.shape.borderRadius);
    return {
      display: "block",
      backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : ut(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
      height: "1.2em",
      variants: [
        {
          props: {
            variant: "text"
          },
          style: {
            marginTop: 0,
            marginBottom: 0,
            height: "auto",
            transformOrigin: "0 55%",
            transform: "scale(1, 0.60)",
            borderRadius: `${r}${t}/${Math.round(r / 0.6 * 10) / 10}${t}`,
            "&:empty:before": {
              content: '"\\00a0"'
            }
          }
        },
        {
          props: {
            variant: "circular"
          },
          style: {
            borderRadius: "50%"
          }
        },
        {
          props: {
            variant: "rounded"
          },
          style: {
            borderRadius: (e.vars || e).shape.borderRadius
          }
        },
        {
          props: ({ ownerState: o }) => o.hasChildren,
          style: {
            "& > *": {
              visibility: "hidden"
            }
          }
        },
        {
          props: ({ ownerState: o }) => o.hasChildren && !o.width,
          style: {
            maxWidth: "fit-content"
          }
        },
        {
          props: ({ ownerState: o }) => o.hasChildren && !o.height,
          style: {
            height: "auto"
          }
        },
        {
          props: {
            animation: "pulse"
          },
          style: Uh || {
            animation: `${Ns} 2s ease-in-out 0.5s infinite`
          }
        },
        {
          props: {
            animation: "wave"
          },
          style: {
            position: "relative",
            overflow: "hidden",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            "&::after": {
              background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
              content: '""',
              position: "absolute",
              transform: "translateX(-100%)",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0
            }
          }
        },
        {
          props: {
            animation: "wave"
          },
          style: qh || {
            "&::after": {
              animation: `${_s} 2s linear 0.5s infinite`
            }
          }
        }
      ]
    };
  })), Yh = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiSkeleton"
    }), { animation: n = "pulse", className: l, component: s = "span", height: i, style: a, variant: u = "text", width: c, ...p } = o, g = {
      ...o,
      animation: n,
      component: s,
      variant: u,
      hasChildren: !!p.children
    }, b = Wh(g);
    return f.jsx(Kh, {
      as: s,
      ref: r,
      className: ue(b.root, l),
      ownerState: g,
      ...p,
      style: {
        width: c,
        height: i,
        ...a
      }
    });
  });
  function Xh(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: r = false, onClose: o, open: n, resumeHideDuration: l } = e, s = Jt();
    d.useEffect(() => {
      if (!n) return;
      function v(w) {
        w.defaultPrevented || w.key === "Escape" && (o == null ? void 0 : o(w, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", v), () => {
        document.removeEventListener("keydown", v);
      };
    }, [
      n,
      o
    ]);
    const i = Be((v, w) => {
      o == null ? void 0 : o(v, w);
    }), a = Be((v) => {
      !o || v == null || s.start(v, () => {
        i(null, "timeout");
      });
    });
    d.useEffect(() => (n && a(t), s.clear), [
      n,
      t,
      a,
      s
    ]);
    const u = (v) => {
      o == null ? void 0 : o(v, "clickaway");
    }, c = s.clear, p = d.useCallback(() => {
      t != null && a(l ?? t * 0.5);
    }, [
      t,
      l,
      a
    ]), g = (v) => (w) => {
      const k = v.onBlur;
      k == null ? void 0 : k(w), p();
    }, b = (v) => (w) => {
      const k = v.onFocus;
      k == null ? void 0 : k(w), c();
    }, h = (v) => (w) => {
      const k = v.onMouseEnter;
      k == null ? void 0 : k(w), c();
    }, m = (v) => (w) => {
      const k = v.onMouseLeave;
      k == null ? void 0 : k(w), p();
    };
    return d.useEffect(() => {
      if (!r && n) return window.addEventListener("focus", p), window.addEventListener("blur", c), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", c);
      };
    }, [
      r,
      n,
      p,
      c
    ]), {
      getRootProps: (v = {}) => {
        const w = {
          ...Yi(e),
          ...Yi(v)
        };
        return {
          role: "presentation",
          ...v,
          ...w,
          onBlur: g(w),
          onFocus: b(w),
          onMouseEnter: h(w),
          onMouseLeave: m(w)
        };
      },
      onClickAway: u
    };
  }
  function Qh(e) {
    return mt("MuiSnackbarContent", e);
  }
  gt("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const Zh = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, Qh, t);
  }, Jh = se(Ut, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Ue(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, r = hp(e.palette.background.default, t);
    return {
      ...e.typography.body2,
      color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(r),
      backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : r,
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
  })), em = se("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), tm = se("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), rm = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: n, className: l, message: s, role: i = "alert", ...a } = o, u = o, c = Zh(u);
    return f.jsxs(Jh, {
      role: i,
      square: true,
      elevation: 6,
      className: ue(c.root, l),
      ownerState: u,
      ref: r,
      ...a,
      children: [
        f.jsx(em, {
          className: c.message,
          ownerState: u,
          children: s
        }),
        n ? f.jsx(tm, {
          className: c.action,
          ownerState: u,
          children: n
        }) : null
      ]
    });
  });
  function om(e) {
    return mt("MuiSnackbar", e);
  }
  gt("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const nm = (e) => {
    const { classes: t, anchorOrigin: r } = e, o = {
      root: [
        "root",
        `anchorOrigin${ie(r.vertical)}${ie(r.horizontal)}`
      ]
    };
    return ge(o, om, t);
  }, lm = se("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`anchorOrigin${ie(r.anchorOrigin.vertical)}${ie(r.anchorOrigin.horizontal)}`]
      ];
    }
  })(Ue(({ theme: e }) => ({
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
  }))), sm = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiSnackbar"
    }), n = zn(), l = {
      enter: n.transitions.duration.enteringScreen,
      exit: n.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: i, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: u = null, children: c, className: p, ClickAwayListenerProps: g, ContentProps: b, disableWindowBlurListener: h = false, message: m, onBlur: x, onClose: v, onFocus: w, onMouseEnter: k, onMouseLeave: L, open: F, resumeHideDuration: I, slots: j = {}, slotProps: D = {}, TransitionComponent: S, transitionDuration: y = l, TransitionProps: { onEnter: M, onExited: $, ...E } = {}, ...N } = o, T = {
      ...o,
      anchorOrigin: {
        vertical: i,
        horizontal: a
      },
      autoHideDuration: u,
      disableWindowBlurListener: h,
      TransitionComponent: S,
      transitionDuration: y
    }, P = nm(T), { getRootProps: A, onClickAway: R } = Xh({
      ...T
    }), [z, _] = d.useState(true), H = (ne) => {
      _(true), $ && $(ne);
    }, G = (ne, he) => {
      _(false), M && M(ne, he);
    }, U = {
      slots: {
        transition: S,
        ...j
      },
      slotProps: {
        content: b,
        clickAwayListener: g,
        transition: E,
        ...D
      }
    }, [B, q] = Je("root", {
      ref: r,
      className: [
        P.root,
        p
      ],
      elementType: lm,
      getSlotProps: A,
      externalForwardedProps: {
        ...U,
        ...N
      },
      ownerState: T
    }), [W, { ownerState: te, ...Z }] = Je("clickAwayListener", {
      elementType: mi,
      externalForwardedProps: U,
      getSlotProps: (ne) => ({
        onClickAway: (...he) => {
          var _a2;
          (_a2 = ne.onClickAway) == null ? void 0 : _a2.call(ne, ...he), R(...he);
        }
      }),
      ownerState: T
    }), [re, ce] = Je("content", {
      elementType: rm,
      shouldForwardComponentProp: true,
      externalForwardedProps: U,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: T
    }), [Ce, Y] = Je("transition", {
      elementType: li,
      externalForwardedProps: U,
      getSlotProps: (ne) => ({
        onEnter: (...he) => {
          var _a2;
          (_a2 = ne.onEnter) == null ? void 0 : _a2.call(ne, ...he), G(...he);
        },
        onExited: (...he) => {
          var _a2;
          (_a2 = ne.onExited) == null ? void 0 : _a2.call(ne, ...he), H(...he);
        }
      }),
      additionalProps: {
        appear: true,
        in: F,
        timeout: y,
        direction: i === "top" ? "down" : "up"
      },
      ownerState: T
    });
    return !F && z ? null : f.jsx(W, {
      ...Z,
      ...j.clickAwayListener && {
        ownerState: te
      },
      children: f.jsx(B, {
        ...q,
        children: f.jsx(Ce, {
          ...Y,
          children: c || f.jsx(re, {
            ...ce
          })
        })
      })
    });
  });
  function im(e) {
    return mt("MuiTooltip", e);
  }
  const ht = gt("MuiTooltip", [
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
  function am(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const cm = (e) => {
    const { classes: t, disableInteractive: r, arrow: o, touch: n, placement: l } = e, s = {
      popper: [
        "popper",
        !r && "popperInteractive",
        o && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        o && "tooltipArrow",
        n && "touch",
        `tooltipPlacement${ie(l.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return ge(s, im, t);
  }, um = se(bo, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.popper,
        !r.disableInteractive && t.popperInteractive,
        r.arrow && t.popperArrow,
        !r.open && t.popperClose
      ];
    }
  })(Ue(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${ht.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${ht.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${ht.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${ht.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${ht.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${ht.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${ht.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${ht.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), dm = se("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.tooltip,
        r.touch && t.touch,
        r.arrow && t.tooltipArrow,
        t[`tooltipPlacement${ie(r.placement.split("-")[0])}`]
      ];
    }
  })(Ue(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : ut(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${ht.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${ht.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${ht.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${ht.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${am(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${ht.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${ht.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${ht.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${ht.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${ht.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${ht.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${ht.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${ht.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${ht.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${ht.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), pm = se("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(Ue(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : ut(e.palette.grey[700], 0.9),
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
  let il = false;
  const xa = new mp();
  let pn = {
    x: 0,
    y: 0
  };
  function al(e, t) {
    return (r, ...o) => {
      t && t(r, ...o), e(r, ...o);
    };
  }
  const _r = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiTooltip"
    }), { arrow: n = false, children: l, classes: s, components: i = {}, componentsProps: a = {}, describeChild: u = false, disableFocusListener: c = false, disableHoverListener: p = false, disableInteractive: g = false, disableTouchListener: b = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: x = 700, followCursor: v = false, id: w, leaveDelay: k = 0, leaveTouchDelay: L = 1500, onClose: F, onOpen: I, open: j, placement: D = "bottom", PopperComponent: S, PopperProps: y = {}, slotProps: M = {}, slots: $ = {}, title: E, TransitionComponent: N, TransitionProps: T, ...P } = o, A = d.isValidElement(l) ? l : f.jsx("span", {
      children: l
    }), R = zn(), z = Xt(), [_, H] = d.useState(), [G, U] = d.useState(null), B = d.useRef(false), q = g || v, W = Jt(), te = Jt(), Z = Jt(), re = Jt(), [ce, Ce] = vn({
      controlled: j,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let Y = ce;
    const ne = it(w), he = d.useRef(), J = Be(() => {
      he.current !== void 0 && (document.body.style.WebkitUserSelect = he.current, he.current = void 0), re.clear();
    });
    d.useEffect(() => J, [
      J
    ]);
    const Ie = (Me) => {
      xa.clear(), il = true, Ce(true), I && !Y && I(Me);
    }, ee = Be((Me) => {
      xa.start(800 + k, () => {
        il = false;
      }), Ce(false), F && Y && F(Me), W.start(R.transitions.duration.shortest, () => {
        B.current = false;
      });
    }), Se = (Me) => {
      B.current && Me.type !== "touchstart" || (_ && _.removeAttribute("title"), te.clear(), Z.clear(), h || il && m ? te.start(il ? m : h, () => {
        Ie(Me);
      }) : Ie(Me));
    }, xe = (Me) => {
      te.clear(), Z.start(k, () => {
        ee(Me);
      });
    }, [, ke] = d.useState(false), Ve = (Me) => {
      Xi(Me.target) || (ke(false), xe(Me));
    }, qe = (Me) => {
      _ || H(Me.currentTarget), Xi(Me.target) && (ke(true), Se(Me));
    }, Ne = (Me) => {
      B.current = true;
      const or = A.props;
      or.onTouchStart && or.onTouchStart(Me);
    }, Le = (Me) => {
      Ne(Me), Z.clear(), W.clear(), J(), he.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", re.start(x, () => {
        document.body.style.WebkitUserSelect = he.current, Se(Me);
      });
    }, Re = (Me) => {
      A.props.onTouchEnd && A.props.onTouchEnd(Me), J(), Z.start(L, () => {
        ee(Me);
      });
    };
    d.useEffect(() => {
      if (!Y) return;
      function Me(or) {
        or.key === "Escape" && ee(or);
      }
      return document.addEventListener("keydown", Me), () => {
        document.removeEventListener("keydown", Me);
      };
    }, [
      ee,
      Y
    ]);
    const Ke = Yt(_c(A), H, r);
    !E && E !== 0 && (Y = false);
    const _e = d.useRef(), me = (Me) => {
      const or = A.props;
      or.onMouseMove && or.onMouseMove(Me), pn = {
        x: Me.clientX,
        y: Me.clientY
      }, _e.current && _e.current.update();
    }, ve = {}, pe = typeof E == "string";
    u ? (ve.title = !Y && pe && !p ? E : null, ve["aria-describedby"] = Y ? ne : null) : (ve["aria-label"] = pe ? E : null, ve["aria-labelledby"] = Y && !pe ? ne : null);
    const be = {
      ...ve,
      ...P,
      ...A.props,
      className: ue(P.className, A.props.className),
      onTouchStart: Ne,
      ref: Ke,
      ...v ? {
        onMouseMove: me
      } : {}
    }, je = {};
    b || (be.onTouchStart = Le, be.onTouchEnd = Re), p || (be.onMouseOver = al(Se, be.onMouseOver), be.onMouseLeave = al(xe, be.onMouseLeave), q || (je.onMouseOver = Se, je.onMouseLeave = xe)), c || (be.onFocus = al(qe, be.onFocus), be.onBlur = al(Ve, be.onBlur), q || (je.onFocus = qe, je.onBlur = Ve));
    const $e = {
      ...o,
      isRtl: z,
      arrow: n,
      disableInteractive: q,
      placement: D,
      PopperComponentProp: S,
      touch: B.current
    }, ct = typeof M.popper == "function" ? M.popper($e) : M.popper, Ot = d.useMemo(() => {
      var _a2, _b2;
      let Me = [
        {
          name: "arrow",
          enabled: !!G,
          options: {
            element: G,
            padding: 4
          }
        }
      ];
      return ((_a2 = y.popperOptions) == null ? void 0 : _a2.modifiers) && (Me = Me.concat(y.popperOptions.modifiers)), ((_b2 = ct == null ? void 0 : ct.popperOptions) == null ? void 0 : _b2.modifiers) && (Me = Me.concat(ct.popperOptions.modifiers)), {
        ...y.popperOptions,
        ...ct == null ? void 0 : ct.popperOptions,
        modifiers: Me
      };
    }, [
      G,
      y.popperOptions,
      ct == null ? void 0 : ct.popperOptions
    ]), yt = cm($e), Rr = typeof M.transition == "function" ? M.transition($e) : M.transition, Gt = {
      slots: {
        popper: i.Popper,
        transition: i.Transition ?? N,
        tooltip: i.Tooltip,
        arrow: i.Arrow,
        ...$
      },
      slotProps: {
        arrow: M.arrow ?? a.arrow,
        popper: {
          ...y,
          ...ct ?? a.popper
        },
        tooltip: M.tooltip ?? a.tooltip,
        transition: {
          ...T,
          ...Rr ?? a.transition
        }
      }
    }, [jr, At] = Je("popper", {
      elementType: um,
      externalForwardedProps: Gt,
      ownerState: $e,
      className: ue(yt.popper, y == null ? void 0 : y.className)
    }), [Qt, Ht] = Je("transition", {
      elementType: li,
      externalForwardedProps: Gt,
      ownerState: $e
    }), [Vt, zt] = Je("tooltip", {
      elementType: dm,
      className: yt.tooltip,
      externalForwardedProps: Gt,
      ownerState: $e
    }), [yo, wo] = Je("arrow", {
      elementType: pm,
      className: yt.arrow,
      externalForwardedProps: Gt,
      ownerState: $e,
      ref: U
    });
    return f.jsxs(d.Fragment, {
      children: [
        d.cloneElement(A, be),
        f.jsx(jr, {
          as: S ?? bo,
          placement: D,
          anchorEl: v ? {
            getBoundingClientRect: () => ({
              top: pn.y,
              left: pn.x,
              right: pn.x,
              bottom: pn.y,
              width: 0,
              height: 0
            })
          } : _,
          popperRef: _e,
          open: _ ? Y : false,
          id: ne,
          transition: true,
          ...je,
          ...At,
          popperOptions: Ot,
          children: ({ TransitionProps: Me }) => f.jsx(Qt, {
            timeout: R.transitions.duration.shorter,
            ...Me,
            ...Ht,
            children: f.jsxs(Vt, {
              ...zt,
              children: [
                E,
                n ? f.jsx(yo, {
                  ...wo
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), fm = d.createContext(), gm = d.createContext();
  function hm(e) {
    return mt("MuiTableCell", e);
  }
  const mm = gt("MuiTableCell", [
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
  ]), bm = (e) => {
    const { classes: t, variant: r, align: o, padding: n, size: l, stickyHeader: s } = e, i = {
      root: [
        "root",
        r,
        s && "stickyHeader",
        o !== "inherit" && `align${ie(o)}`,
        n !== "normal" && `padding${ie(n)}`,
        `size${ie(l)}`
      ]
    };
    return ge(i, hm, t);
  }, Cm = se("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`size${ie(r.size)}`],
        r.padding !== "normal" && t[`padding${ie(r.padding)}`],
        r.align !== "inherit" && t[`align${ie(r.align)}`],
        r.stickyHeader && t.stickyHeader
      ];
    }
  })(Ue(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Fn(ut(e.palette.divider, 1), 0.88) : On(ut(e.palette.divider, 1), 0.68)}`,
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
          [`&.${mm.paddingCheckbox}`]: {
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
  }))), Gs = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiTableCell"
    }), { align: n = "inherit", className: l, component: s, padding: i, scope: a, size: u, sortDirection: c, variant: p, ...g } = o, b = d.useContext(fm), h = d.useContext(gm), m = h && h.variant === "head";
    let x;
    s ? x = s : x = m ? "th" : "td";
    let v = a;
    x === "td" ? v = void 0 : !v && m && (v = "col");
    const w = p || h && h.variant, k = {
      ...o,
      align: n,
      component: x,
      padding: i || (b && b.padding ? b.padding : "normal"),
      size: u || (b && b.size ? b.size : "medium"),
      sortDirection: c,
      stickyHeader: w === "head" && b && b.stickyHeader,
      variant: w
    }, L = bm(k);
    let F = null;
    return c && (F = c === "asc" ? "ascending" : "descending"), f.jsx(Cm, {
      as: x,
      ref: r,
      className: ue(L.root, l),
      "aria-sort": F,
      scope: v,
      ownerState: k,
      ...g
    });
  });
  function ym(e) {
    return mt("MuiToolbar", e);
  }
  gt("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const wm = (e) => {
    const { classes: t, disableGutters: r, variant: o } = e;
    return ge({
      root: [
        "root",
        !r && "gutters",
        o
      ]
    }, ym, t);
  }, xm = se("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.disableGutters && t.gutters,
        t[r.variant]
      ];
    }
  })(Ue(({ theme: e }) => ({
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
  }))), iu = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiToolbar"
    }), { className: n, component: l = "div", disableGutters: s = false, variant: i = "regular", ...a } = o, u = {
      ...o,
      component: l,
      disableGutters: s,
      variant: i
    }, c = wm(u);
    return f.jsx(xm, {
      as: l,
      className: ue(c.root, n),
      ref: r,
      ownerState: u,
      ...a
    });
  }), vm = Pe(f.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Sm = Pe(f.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Pm = d.forwardRef(function(t, r) {
    const { backIconButtonProps: o, count: n, disabled: l = false, getItemAriaLabel: s, nextIconButtonProps: i, onPageChange: a, page: u, rowsPerPage: c, showFirstButton: p, showLastButton: g, slots: b = {}, slotProps: h = {}, ...m } = t, x = Xt(), v = (H) => {
      a(H, 0);
    }, w = (H) => {
      a(H, u - 1);
    }, k = (H) => {
      a(H, u + 1);
    }, L = (H) => {
      a(H, Math.max(0, Math.ceil(n / c) - 1));
    }, F = b.firstButton ?? Et, I = b.lastButton ?? Et, j = b.nextButton ?? Et, D = b.previousButton ?? Et, S = b.firstButtonIcon ?? Gh, y = b.lastButtonIcon ?? Vh, M = b.nextButtonIcon ?? Sm, $ = b.previousButtonIcon ?? vm, E = x ? I : F, N = x ? j : D, T = x ? D : j, P = x ? F : I, A = x ? h.lastButton : h.firstButton, R = x ? h.nextButton : h.previousButton, z = x ? h.previousButton : h.nextButton, _ = x ? h.firstButton : h.lastButton;
    return f.jsxs("div", {
      ref: r,
      ...m,
      children: [
        p && f.jsx(E, {
          onClick: v,
          disabled: l || u === 0,
          "aria-label": s("first", u),
          title: s("first", u),
          ...A,
          children: x ? f.jsx(y, {
            ...h.lastButtonIcon
          }) : f.jsx(S, {
            ...h.firstButtonIcon
          })
        }),
        f.jsx(N, {
          onClick: w,
          disabled: l || u === 0,
          color: "inherit",
          "aria-label": s("previous", u),
          title: s("previous", u),
          ...R ?? o,
          children: x ? f.jsx(M, {
            ...h.nextButtonIcon
          }) : f.jsx($, {
            ...h.previousButtonIcon
          })
        }),
        f.jsx(T, {
          onClick: k,
          disabled: l || (n !== -1 ? u >= Math.ceil(n / c) - 1 : false),
          color: "inherit",
          "aria-label": s("next", u),
          title: s("next", u),
          ...z ?? i,
          children: x ? f.jsx($, {
            ...h.previousButtonIcon
          }) : f.jsx(M, {
            ...h.nextButtonIcon
          })
        }),
        g && f.jsx(P, {
          onClick: L,
          disabled: l || u >= Math.ceil(n / c) - 1,
          "aria-label": s("last", u),
          title: s("last", u),
          ..._,
          children: x ? f.jsx(S, {
            ...h.firstButtonIcon
          }) : f.jsx(y, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Im(e) {
    return mt("MuiTablePagination", e);
  }
  const uo = gt("MuiTablePagination", [
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
  var va;
  const Mm = se(Gs, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Ue(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), Om = se(iu, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${uo.actions}`]: t.actions,
      ...t.toolbar
    })
  })(Ue(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${uo.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), Fm = se("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), km = se("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(Ue(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), Em = se(kn, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${uo.selectIcon}`]: t.selectIcon,
      [`& .${uo.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${uo.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), Tm = se(jt, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), Am = se("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(Ue(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function Dm({ from: e, to: t, count: r }) {
    return `${e}\u2013${t} of ${r !== -1 ? r : `more than ${t}`}`;
  }
  function $m(e) {
    return `Go to ${e} page`;
  }
  const Lm = (e) => {
    const { classes: t } = e;
    return ge({
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
    }, Im, t);
  }, Rm = d.forwardRef(function(t, r) {
    const o = bt({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: n = Pm, backIconButtonProps: l, colSpan: s, component: i = Gs, count: a, disabled: u = false, getItemAriaLabel: c = $m, labelDisplayedRows: p = Dm, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: b, onPageChange: h, onRowsPerPageChange: m, page: x, rowsPerPage: v, rowsPerPageOptions: w = [
      10,
      25,
      50,
      100
    ], SelectProps: k = {}, showFirstButton: L = false, showLastButton: F = false, slotProps: I = {}, slots: j = {}, ...D } = o, S = o, y = Lm(S), M = (I == null ? void 0 : I.select) ?? k, $ = M.native ? "option" : Tm;
    let E;
    (i === Gs || i === "td") && (E = s || 1e3);
    const N = it(M.id), T = it(M.labelId), P = () => a === -1 ? (x + 1) * v : v === -1 ? a : Math.min(a, (x + 1) * v), A = {
      slots: j,
      slotProps: I
    }, [R, z] = Je("root", {
      ref: r,
      className: y.root,
      elementType: Mm,
      externalForwardedProps: {
        ...A,
        component: i,
        ...D
      },
      ownerState: S,
      additionalProps: {
        colSpan: E
      }
    }), [_, H] = Je("toolbar", {
      className: y.toolbar,
      elementType: Om,
      externalForwardedProps: A,
      ownerState: S
    }), [G, U] = Je("spacer", {
      className: y.spacer,
      elementType: Fm,
      externalForwardedProps: A,
      ownerState: S
    }), [B, q] = Je("selectLabel", {
      className: y.selectLabel,
      elementType: km,
      externalForwardedProps: A,
      ownerState: S,
      additionalProps: {
        id: T
      }
    }), [W, te] = Je("select", {
      className: y.select,
      elementType: Em,
      externalForwardedProps: A,
      ownerState: S
    }), [Z, re] = Je("menuItem", {
      className: y.menuItem,
      elementType: $,
      externalForwardedProps: A,
      ownerState: S
    }), [ce, Ce] = Je("displayedRows", {
      className: y.displayedRows,
      elementType: Am,
      externalForwardedProps: A,
      ownerState: S
    });
    return f.jsx(R, {
      ...z,
      children: f.jsxs(_, {
        ...H,
        children: [
          f.jsx(G, {
            ...U
          }),
          w.length > 1 && f.jsx(B, {
            ...q,
            children: g
          }),
          w.length > 1 && f.jsx(W, {
            variant: "standard",
            ...!M.variant && {
              input: va || (va = f.jsx(si, {}))
            },
            value: v,
            onChange: m,
            id: N,
            labelId: T,
            ...M,
            classes: {
              ...M.classes,
              root: ue(y.input, y.selectRoot, (M.classes || {}).root),
              select: ue(y.select, (M.classes || {}).select),
              icon: ue(y.selectIcon, (M.classes || {}).icon)
            },
            disabled: u,
            ...te,
            children: w.map((Y) => d.createElement(Z, {
              ...re,
              key: Y.label ? Y.label : Y,
              value: Y.value ? Y.value : Y
            }, Y.label ? Y.label : Y))
          }),
          f.jsx(ce, {
            ...Ce,
            children: p({
              from: a === 0 ? 0 : x * v + 1,
              to: P(),
              count: a === -1 ? -1 : a,
              page: x
            })
          }),
          f.jsx(n, {
            className: y.actions,
            backIconButtonProps: l,
            count: a,
            nextIconButtonProps: b,
            onPageChange: h,
            page: x,
            rowsPerPage: v,
            showFirstButton: L,
            showLastButton: F,
            slotProps: I.actions,
            slots: j.actions,
            getItemAriaLabel: c,
            disabled: u
          })
        ]
      })
    });
  }), au = Pe(f.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), jm = Pe(f.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Hm = Pe(f.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), zm = Pe(f.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), Nm = Pe(f.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), cl = Pe(f.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Sa = Pe(f.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Pa = Pe(f.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), _m = Pe(f.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), Gm = Pe(f.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Vm = Pe(f.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Bm = Pe(f.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Wm = Pe(f.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Um = Pe(f.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), In = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function cu(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function qm({ columns: e, discoveredColumns: t, selectedPath: r, onSelect: o, onChange: n, onRefresh: l, loading: s }) {
    const [i, a] = d.useState(""), [u, c] = d.useState(null), [p, g] = d.useState(null), b = d.useRef(0), h = !i, m = d.useMemo(() => {
      if (!i) return e;
      const y = i.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(y) || M.headerName.toLowerCase().includes(y));
    }, [
      e,
      i
    ]), x = d.useMemo(() => e.filter((y) => y.visible).length, [
      e
    ]), v = d.useCallback((y, M) => {
      y.stopPropagation(), n(e.map(($) => $.path === M ? {
        ...$,
        visible: !$.visible
      } : $));
    }, [
      e,
      n
    ]), w = d.useCallback((y) => {
      n(e.map((M) => ({
        ...M,
        visible: y
      })));
    }, [
      e,
      n
    ]), k = d.useCallback((y, M) => {
      y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", M), c(M);
    }, []), L = d.useCallback((y, M) => {
      y.preventDefault(), b.current += 1, M !== u && g(M);
    }, [
      u
    ]), F = d.useCallback((y) => {
      y.preventDefault(), b.current -= 1, b.current <= 0 && (b.current = 0, g(null));
    }, []), I = d.useCallback((y) => {
      y.preventDefault(), y.dataTransfer.dropEffect = "move";
    }, []), j = d.useCallback((y, M) => {
      y.preventDefault(), b.current = 0, g(null), c(null);
      const $ = y.dataTransfer.getData("text/plain");
      if (!$ || $ === M) return;
      const E = [
        ...e
      ], N = E.findIndex((A) => A.path === $), T = E.findIndex((A) => A.path === M);
      if (N === -1 || T === -1) return;
      const [P] = E.splice(N, 1);
      E.splice(T, 0, P), n(E);
    }, [
      e,
      n
    ]), D = d.useCallback(() => {
      b.current = 0, c(null), g(null);
    }, []), S = d.useCallback(() => {
      n(e.map((y) => ({
        path: y.path,
        visible: true,
        headerName: y.path.split(".").pop() || y.path
      })));
    }, [
      e,
      n
    ]);
    return f.jsxs(Ze, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        f.jsxs(iu, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            f.jsx(ir, {
              size: "small",
              placeholder: oe.t("json_table_search_columns"),
              value: i,
              onChange: (y) => a(y.target.value),
              slotProps: {
                input: {
                  startAdornment: f.jsx(su, {
                    position: "start",
                    children: f.jsx(Vm, {
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
            f.jsx(_r, {
              title: oe.t("json_table_refresh_columns"),
              children: f.jsx("span", {
                children: f.jsx(Et, {
                  size: "small",
                  onClick: l,
                  disabled: s,
                  children: f.jsx(_m, {
                    fontSize: "small"
                  })
                })
              })
            }),
            f.jsx(_r, {
              title: oe.t("json_table_show_all"),
              children: f.jsx(Et, {
                size: "small",
                onClick: () => w(true),
                children: f.jsx(Wm, {
                  fontSize: "small"
                })
              })
            }),
            f.jsx(_r, {
              title: oe.t("json_table_hide_all"),
              children: f.jsx(Et, {
                size: "small",
                onClick: () => w(false),
                children: f.jsx(Um, {
                  fontSize: "small"
                })
              })
            }),
            f.jsx(_r, {
              title: oe.t("json_table_reset_all"),
              children: f.jsx(Et, {
                size: "small",
                onClick: S,
                children: f.jsx(Gm, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        f.jsx(Ze, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: m.length === 0 ? f.jsx(Ze, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: f.jsx(ye, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? oe.t("json_table_no_columns") : oe.t("json_table_no_search_results")
            })
          }) : m.map((y) => {
            const M = t.find((N) => N.path === y.path), $ = r === y.path, E = (M == null ? void 0 : M.type) || "string";
            return f.jsx(wh, {
              onClick: () => o(y.path),
              draggable: h,
              onDragStart: h ? (N) => k(N, y.path) : void 0,
              onDragEnter: h ? (N) => L(N, y.path) : void 0,
              onDragLeave: h ? F : void 0,
              onDragOver: h ? I : void 0,
              onDrop: h ? (N) => j(N, y.path) : void 0,
              onDragEnd: h ? D : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: h ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: $ ? "primary.main" : "divider",
                backgroundColor: $ ? "action.selected" : "background.paper",
                opacity: u === y.path ? 0.4 : y.visible ? 1 : 0.55,
                borderTop: p === y.path ? "3px solid" : void 0,
                borderTopColor: p === y.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: $ ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: f.jsxs(Ze, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  h && f.jsx(Nm, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  f.jsx(Pl, {
                    checked: y.visible,
                    onClick: (N) => v(N, y.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  f.jsxs(Ze, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      f.jsx(ye, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: y.path,
                        children: y.headerName || y.path
                      }),
                      y.headerName && y.headerName !== y.path && f.jsx(ye, {
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
                        title: y.path,
                        children: y.path
                      })
                    ]
                  }),
                  f.jsx(Ho, {
                    label: E,
                    size: "small",
                    sx: {
                      backgroundColor: In[E] || In.string,
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
            }, y.path);
          })
        }),
        e.length > 0 && f.jsx(Ze, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: f.jsxs(ye, {
            variant: "caption",
            color: "text.secondary",
            children: [
              x,
              " / ",
              e.length,
              " ",
              oe.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function Ia({ value: e, onChange: t, label: r }) {
    const o = zn(), [n, l] = d.useState(null), s = d.useRef(null), [i, a] = d.useState(null), u = !!n;
    return d.useEffect(() => {
      if (!u || !i) return;
      const c = new ResizeObserver(() => {
        var _a2;
        (_a2 = s.current) == null ? void 0 : _a2.updatePosition();
      });
      return c.observe(i), () => {
        c.disconnect();
      };
    }, [
      u,
      i
    ]), f.jsxs(Ze, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        f.jsxs(Ze, {
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
          onClick: (c) => {
            l(c.currentTarget);
          },
          children: [
            f.jsx(ye, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: r
            }),
            f.jsx(Ze, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && f.jsx(Et, {
              size: "small",
              onClick: (c) => {
                c.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: f.jsx(zm, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        f.jsx(bp, {
          action: s,
          open: u,
          anchorEl: n,
          onClose: () => l(null),
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
          children: f.jsx(Ze, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: f.jsx(Cp, {
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
  function ml(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function uu(e, t = {}) {
    const { decimals: r = 2, prefix: o = "", suffix: n = "", thousands: l = false } = t;
    let s = e.toFixed(r);
    if (l) {
      const [i, a] = s.split("."), u = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${u}.${a}` : u;
    }
    return `${o}${s}${n}`;
  }
  const Km = [
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
      label: "ISO-8601",
      value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    }
  ];
  function du(e, t) {
    if (e == null || e === "") return "";
    try {
      let r;
      if (typeof e == "string") r = new Date(e);
      else if (typeof e == "number") r = new Date(e >= 1e12 ? e : e * 1e3);
      else if (e instanceof Date) r = e;
      else return ml(e);
      if (isNaN(r.getTime())) return ml(e);
      const o = t || "yyyy-MM-dd", n = (i, a = 2) => String(i).padStart(a, "0"), l = {
        yyyy: String(r.getFullYear()),
        MM: n(r.getMonth() + 1),
        dd: n(r.getDate()),
        HH: n(r.getHours()),
        mm: n(r.getMinutes()),
        ss: n(r.getSeconds()),
        SSS: n(r.getMilliseconds(), 3)
      };
      if (o.includes("xxx")) return r.toISOString();
      let s = o;
      for (const [i, a] of Object.entries(l).sort((u, c) => c[0].length - u[0].length)) s = s.replaceAll(i, a);
      return s;
    } catch {
      return ml(e);
    }
  }
  function Vs(e, t = "true", r = "false") {
    return typeof e == "boolean" ? e ? t : r : ml(e);
  }
  function dt(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Ym(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function Gr(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let r = 0; r < e.length; r++) if (typeof e[r] == "object" && e[r]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        Gr(e[r], t - 1);
      }
    } else {
      const r = Object.keys(e);
      for (let o = 0; o < r.length; o++) {
        const n = e[r[o]];
        if (typeof n == "object" && n) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          Gr(n, t - 1);
        }
      }
    }
    return e;
  }
  function Xm(e, t, r) {
    if (r || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+dt(e)) && t !== null) throw NaN;
    if (Number.isNaN(+dt(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Qm(e, t) {
    const r = [];
    let o = 0;
    for (const n of e) await t(n, o++, e) && r.push(n);
    return r;
  }
  async function Zm(e, t) {
    let r = 0;
    for (const o of e) if (await t(o, r++, e)) return true;
    return false;
  }
  async function Jm(e, t) {
    let r = 0;
    for (const o of e) if (!await t(o, r++, e)) return false;
    return true;
  }
  async function eb(e, t) {
    const r = [];
    let o = 0;
    for (const n of e) r.push(await t(n, o++, e));
    return r;
  }
  async function tb(e, t, r, o = 0) {
    if (e.length === 0) {
      if (typeof r < "u") return r;
      throw new Error("Array has no elements.");
    }
    const n = typeof r > "u" ? 1 : 0;
    let l = Gr(n ? e[0] : r, o);
    for (let s = n; s < e.length; s++) l = Gr(await t(l, e[s]), o);
    return l;
  }
  const Ml = {
    filter: Qm,
    some: Zm,
    every: Jm,
    map: eb,
    reduce: tb
  }, Xe = /* @__PURE__ */ Symbol.for("json_logic_sync"), Nt = /* @__PURE__ */ Symbol.for("json_logic_compiled"), cr = /* @__PURE__ */ Symbol.for("json_logic_original"), Ma = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function fo(e) {
    return typeof e == "function" ? e[Xe] === true : Array.isArray(e) ? e.every(fo) : !(e && e.asyncMethod && !e.method);
  }
  function pu(e, t = true) {
    return e[Xe] = t, e;
  }
  function An(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const fs = /* @__PURE__ */ new WeakMap();
  function Oa(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (fs.has(e) || fs.set(e, rb(e)), fs.get(e));
  }
  function rb(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function ob(e, ...t) {
    let r = "";
    const o = this;
    for (let n = 0; n < e.length; n++) r += e[n], n < t.length && (typeof t[n] == "function" ? (this.methods.push(t[n]), fo(t[n]) || (o.asyncDetected = true), r += (fo(t[n]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[n] && typeof t[n][Nt] < "u" ? r += t[n][Nt] : r += pt(t[n], o));
    return {
      [Nt]: r
    };
  }
  function nb(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Ol(e, t, r) {
    if (Array.isArray(e)) return e.every((o) => Ol(o, t, r));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], n = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(n, r) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(n, r) : t.methods[o].deterministic && Ol(n, t, r);
    }
    return true;
  }
  function Bs(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((r) => Bs(r, t));
    if (e && typeof e == "object") {
      const r = Object.keys(e);
      if (r.length === 0) return true;
      const o = r[0], n = e[o];
      return fo(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][Xe] == "function" && t.methods[o][Xe](e, {
        engine: t
      })) : Bs(n, t) : false;
    }
    return true;
  }
  function pt(e, t = {}) {
    const { notTraversed: r = [], async: o, processing: n = [], values: l = [], engine: s } = t;
    function i(c, p = false) {
      return nb(c, p) ? JSON.stringify(c) : (l.push(c), `values[${l.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let c = "";
      for (let p = 0; p < e.length; p++) p > 0 && (c += ","), c += pt(e[p], t);
      return "[" + c + "]";
    }
    let a = false;
    function u(c) {
      return t.asyncDetected = t.asyncDetected || a, o && a ? `await ${c}` : c;
    }
    if (e && typeof e == "object") {
      const c = Object.keys(e), p = c[0];
      if (!p) return i(e);
      if (!s.methods[p] || c.length > 1) {
        if (s.isData(e, p)) return i(e, true);
        throw {
          type: "Unknown Operator",
          key: p
        };
      }
      if (!t.engine.disableInline && s.methods[p] && Ol(e, s, t)) return Bs(e, s) ? i((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${i(s.run(e))})`) : (n.push(s.run(e).then((m) => i(m))), `__%%%${n.length - 1}%%%__`);
      let g = e[p];
      if ((!g || typeof g != "object") && !s.methods[p].lazy && (g = [
        g
      ]), s.methods[p] && s.methods[p].compile) {
        let m = s.methods[p].compile(g, t);
        if (m[Nt] && (m = m[Nt]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let b = s.methods[p].optimizeUnary ? "" : "coerceArray";
      !b && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : b && Array.isArray(g) && (b = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof s.methods[p] == "function") {
        a = !fo(s.methods[p]);
        const m = h[Oa(s.methods[p]) - 1] || h[2];
        return u(`engine.methods["${p}"](${b}(` + pt(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[p] && s.methods[p].asyncMethod);
        const m = Oa(a ? s.methods[p].asyncMethod : s.methods[p].method);
        let x = h[m - 1] || h[2];
        return a && typeof s.methods[p][Xe] == "function" && s.methods[p][Xe](g, {
          engine: s
        }) && (a = false, x = x.replace("engine", "engine.fallback")), s.methods[p] && !s.methods[p].lazy ? u(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${b}(` + pt(g, t) + ")" + x + ")") : (r.push(g), u(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${r.length - 1}]` + x + ")"));
      }
    }
    return i(e);
  }
  function Fl(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: ob
    }, t));
    const r = pt(e, t);
    return lb(e, r, t);
  }
  function lb(e, t, r) {
    const { engine: o, methods: n, notTraversed: l, processing: s = [], values: i } = r, a = [];
    s.forEach((c, p) => {
      t = t.replace(`__%%%${p}%%%__`, c);
    });
    const u = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${r.asyncDetected ? "async" : ""} (context ${r.extraArguments ? "," + r.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(u)(i, n, l, Ml, o, a, An, dt, Ym, Xm, Gr), {
      [Xe]: !r.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const sb = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Ao = sb(), fn = /* @__PURE__ */ new Map();
  function Oo(e) {
    if (fn.has(e)) return fn.get(e);
    fn.size > 2048 && fn.clear();
    const t = ib(e);
    return fn.set(e, t), t;
  }
  function ib(e, t = ".", r = "\\", o = "/") {
    const n = [];
    let l = "";
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      i === r ? e[s + 1] === t || e[s + 1] === o ? (l += e[s + 1], s++) : e[s + 1] === r ? (l += r, s++) : l += r : i === t ? (n.push(l), l = "") : l += i;
    }
    return n.length !== e.length && n.push(l), n;
  }
  const Ws = {
    get: {
      [Xe]: true,
      method: ([e, t, r], o, n, l) => {
        const s = r === void 0 ? null : r, i = Oo(String(t));
        for (let a = 0; a < i.length; a++) if (e == null || (e = e[i[a]], e === void 0)) return s;
        return l.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let r = null, o = e, n = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (n = e[0], o = e[1], r = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const l = Oo(o);
          return Ao ? `((${pt(n, t)})${l.map((s) => `?.[${pt(s, t)}]`).join("")} ?? ${pt(r, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${l.reduce((s, i) => `(${s}||0)[${JSON.stringify(i)}]`, `(${pt(n, t)}||0)`)}, ${pt(r, t)}))`;
        }
        return false;
      }
    },
    var: {
      [cr]: true,
      [Xe]: true,
      method: (e, t, r, o) => {
        let n;
        Array.isArray(e) && (n = e[1], e = e[0]);
        let l = 0;
        for (; typeof e == "string" && e.startsWith("../") && l < r.length; ) t = r[l++], e = e.substring(3), l === r.length && Array.isArray(t) && (l = 0, r = t, t = r[l++]);
        const s = n === void 0 ? null : n;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const i = Oo(String(e));
        for (let a = 0; a < i.length; a++) if (t == null || (t = t[i[a]], t === void 0)) return s;
        return o.allowFunctions || typeof t != "function" ? t : null;
      },
      deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"),
      optimizeUnary: true,
      compile: (e, t) => {
        let r = e, o = null;
        if (!r || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
          if (Array.isArray(e) && (r = e[0], o = typeof e[1] > "u" ? null : e[1]), r === "../index" && t.iteratorCompile) return "index";
          if (typeof r > "u" || r === null || r === "") return "context";
          if (typeof r != "string" && typeof r != "number" || (r = r.toString(), r.includes("../"))) return false;
          const n = Oo(r);
          if (!Ao) {
            const s = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${n.reduce((i, a) => `(${i}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${pt(o, t)})))`;
            return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
          }
          const l = `(context${n.map((s) => `?.[${JSON.stringify(s)}]`).join("")} ?? ${pt(o, t)})`;
          return t.engine.allowFunctions ? l : `(typeof (prev = ${l}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [Xe]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const r = [];
        for (let o = 0; o < e.length; o++) {
          const n = Oo(String(e[o]));
          let l = t, s = true;
          for (let i = 0; i < n.length; i++) {
            if (!l) {
              s = false;
              break;
            }
            if (l = l[n[i]], l === void 0) {
              s = false;
              break;
            }
          }
          s || r.push(e[o]);
        }
        return r;
      },
      compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false,
      deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0)
    },
    missing_some: {
      [Xe]: true,
      optimizeUnary: false,
      method: ([e, t], r) => {
        const o = Ws.missing.method(t, r);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], r) => {
        if (!Array.isArray(t)) return false;
        let o = Ws.missing.compile(t, r);
        return o || (o = r.compile`engine.methods.missing.method(${{
          [Nt]: JSON.stringify(t)
        }}, context)`), r.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, ab = {
    ...Ws
  }, Ye = {
    type: "Invalid Arguments"
  };
  function St(e, t, r) {
    if (Array.isArray(e)) return e.every((o) => St(o, t, r));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], n = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(n, r) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(n, r) : t.methods[o].deterministic && St(n, t, r);
    }
    return true;
  }
  function Bt(e, t, r) {
    if (Array.isArray(e)) return e.every((o) => Bt(o, t, r));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], n = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][Xe] == "function" ? t.methods[o][Xe](n, r) : t.methods[o][Xe] : typeof t.methods[o][Xe] == "function" ? t.methods[o][Xe](n, r) : t.methods[o][Xe] && Bt(n, t, r);
    }
    return true;
  }
  function lt(e, t, r, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const n = t.optimizedMap.get(e);
      return typeof n == "function" ? n(r, o) : n;
    }
    return t.run(e, r, {
      above: o
    });
  }
  const gn = bl("every", true), We = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return dt(+e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e[r] && typeof e[r] == "object") throw NaN;
        t += +e[r];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "*": (e) => {
      if (e.length === 0) return 1;
      let t = 1;
      for (let r = 0; r < e.length; r++) {
        if (e[r] && typeof e[r] == "object") throw NaN;
        t *= +e[r];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "/": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw Ye;
      if (e.length === 1) {
        if (!+e[0] || e[0] && typeof e[0] == "object") throw NaN;
        return 1 / +e[0];
      }
      let t = +e[0];
      for (let r = 1; r < e.length; r++) {
        if (e[r] && typeof e[r] == "object" || !e[r]) throw NaN;
        t /= +e[r];
      }
      if (Number.isNaN(t) || t === 1 / 0) throw NaN;
      return t;
    },
    "-": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return dt(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw Ye;
      if (e.length === 1) return -e[0];
      let t = e[0];
      for (let r = 1; r < e.length; r++) {
        if (e[r] && typeof e[r] == "object") throw NaN;
        t -= +e[r];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "%": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length < 2) throw Ye;
      let t = +e[0];
      for (let r = 1; r < e.length; r++) {
        if (e[r] && typeof e[r] == "object") throw NaN;
        t %= +e[r];
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
      if (!e.length || typeof e[0] != "number") throw Ye;
      let t = e[0];
      for (let r = 1; r < e.length; r++) {
        if (typeof e[r] != "number") throw Ye;
        e[r] > t && (t = e[r]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw Ye;
      let t = e[0];
      for (let r = 1; r < e.length; r++) {
        if (typeof e[r] != "number") throw Ye;
        e[r] < t && (t = e[r]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: pu((e) => e, true),
      [Xe]: () => true
    },
    if: {
      [cr]: true,
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        if (e.length === 1) return lt(e[0], o, t, r);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const n = e.pop();
        for (; e.length; ) {
          const l = e.shift(), s = e.shift(), i = lt(l, o, t, r);
          if (o.truthy(i)) return lt(s, o, t, r);
        }
        return lt(n, o, t, r);
      },
      [Xe]: (e, t) => Bt(e, t.engine, t),
      deterministic: (e, t) => St(e, t.engine, t),
      asyncMethod: async (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        if (e.length === 1) return o.run(e[0], t, {
          above: r
        });
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const n = e.pop();
        for (; e.length; ) {
          const l = e.shift(), s = e.shift(), i = await o.run(l, t, {
            above: r
          });
          if (o.truthy(i)) return o.run(s, t, {
            above: r
          });
        }
        return o.run(n, t, {
          above: r
        });
      },
      lazy: true
    },
    "<": Xr("<", (e, t) => e < t),
    "<=": Xr("<=", (e, t) => e <= t),
    ">": Xr(">", (e, t) => e > t),
    ">=": Xr(">=", (e, t) => e >= t),
    "==": Xr("==", (e, t) => e == t),
    "===": Xr("===", (e, t) => e === t),
    "!=": Xr("!=", (e, t) => e != t),
    "!==": Xr("!==", (e, t) => e !== t),
    or: {
      [Xe]: (e, t) => Bt(e, t.engine, t),
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        if (!e.length) return null;
        let n;
        for (let l = 0; l < e.length; l++) if (n = lt(e[l], o, t, r), o.truthy(n)) return n;
        return n;
      },
      asyncMethod: async (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        if (!e.length) return null;
        let n;
        for (let l = 0; l < e.length; l++) if (n = await o.run(e[l], t, {
          above: r
        }), o.truthy(n)) return n;
        return n;
      },
      deterministic: (e, t) => St(e, t.engine, t),
      compile: (e, t) => {
        let r = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let o = 0; o < e.length; o++) r = t.compile`${r} engine.truthy(prev = ${e[o]}) ? prev : `;
          return r = t.compile`${r} prev`, r;
        }
        return false;
      },
      lazy: true
    },
    "??": {
      [Xe]: (e, t) => Bt(e, t.engine, t),
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        let n;
        for (let l = 0; l < e.length; l++) if (n = lt(e[l], o, t, r), n != null) return n;
        return n === void 0 ? null : n;
      },
      asyncMethod: async (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        let n;
        for (let l = 0; l < e.length; l++) if (n = await o.run(e[l], t, {
          above: r
        }), n != null) return n;
        return n === void 0 ? null : n;
      },
      deterministic: (e, t) => St(e, t.engine, t),
      compile: (e, t) => Ao ? Array.isArray(e) && e.length ? `(${e.map((r, o) => {
        const n = pt(r, t);
        return Array.isArray(r) || !r || typeof r != "object" || o === e.length - 1 ? n : "(" + n + ")";
      }).join(" ?? ")})` : `(${pt(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [Xe]: (e, t) => Bt(e, t.engine, t),
      method: (e, t, r, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let n, l;
        for (let s = 0; s < e.length; s++) try {
          return l ? n = lt(e[s], o, {
            type: l.type || l.error || l.message || l.constructor.name
          }, [
            null,
            t,
            r
          ]) : n = lt(e[s], o, t, r), n;
        } catch (i) {
          Number.isNaN(i) ? l = {
            message: "NaN"
          } : l = i;
        }
        throw l;
      },
      asyncMethod: async (e, t, r, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let n, l;
        for (let s = 0; s < e.length; s++) try {
          return l ? n = await o.run(e[s], {
            type: l.type || l.error || l.message || l.constructor.name
          }, {
            above: [
              null,
              t,
              r
            ]
          }) : n = await o.run(e[s], t, {
            above: r
          }), n;
        } catch (i) {
          Number.isNaN(i) ? l = {
            message: "NaN"
          } : l = i;
        }
        throw l;
      },
      deterministic: (e, t) => St(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && St(e, t.engine, {
        ...t,
        insideIterator: true,
        insideTry: true
      }),
      lazy: true,
      compile: (e, t) => {
        if (!Array.isArray(e) || !e.length) return false;
        let r;
        try {
          "+" in e[0] && e.length > 1 ? r = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; ` : r = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `;
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), r = {
            [Nt]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? r = t.compile`${r} try { return ${e[o]} } catch(err) { throw err; } ` : r = t.compile`${r} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (n) {
          Number.isNaN(n) && (n = {
            type: "NaN"
          }), o === e.length - 1 ? r = t.compile`${r} throw ${{
            [Nt]: JSON.stringify(n)
          }} ` : r = t.compile`${r} ${{
            [Nt]: `context = ${JSON.stringify(n)};`
          }}`;
        }
        else r[Nt].includes("err") ? r = t.compile`${r} throw err;` : r = t.compile`${r} throw context;`;
        return r = t.compile`${r} } })(context, above)`, r[Nt].includes("await") && (r[Nt] = r[Nt].replace("((context", "await (async (context")), r;
      }
    },
    and: {
      [Xe]: (e, t) => Bt(e, t.engine, t),
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        if (!e.length) return null;
        let n;
        for (let l = 0; l < e.length; l++) if (n = lt(e[l], o, t, r), !o.truthy(n)) return n;
        return n;
      },
      asyncMethod: async (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        if (!e.length) return null;
        let n;
        for (let l = 0; l < e.length; l++) if (n = await o.run(e[l], t, {
          above: r
        }), !o.truthy(n)) return n;
        return n;
      },
      lazy: true,
      deterministic: (e, t) => St(e, t.engine, t),
      compile: (e, t) => {
        let r = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let o = 0; o < e.length; o++) r = t.compile`${r} !engine.truthy(prev = ${e[o]}) ? prev : `;
          return r = t.compile`${r} prev`, r;
        }
        return false;
      }
    },
    substr: ([e, t, r]) => {
      if (r < 0) {
        const o = e.substr(t);
        return o.substr(0, o.length + r);
      }
      return e.substr(t, r);
    },
    length: {
      method: (e, t, r, o) => {
        if (!e) throw Ye;
        const n = lt(e, o, t, r), l = Array.isArray(e) ? n[0] : n;
        if (typeof l == "string" || Array.isArray(l)) return l.length;
        if (l && typeof l == "object") return Object.keys(l).length;
        throw Ye;
      },
      asyncMethod: async (e, t, r, o) => {
        if (!e) throw Ye;
        const n = await lt(e, o, t, r), l = Array.isArray(e) ? n[0] : n;
        if (typeof l == "string" || Array.isArray(l)) return l.length;
        if (l && typeof l == "object") return Object.keys(l).length;
        throw Ye;
      },
      deterministic: (e, t) => St(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, r, o) => We.val.method(e, t, r, o, Ma) !== Ma,
      deterministic: false
    },
    val: {
      [cr]: true,
      [Xe]: true,
      method: (e, t, r, o, n = null) => {
        if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
          if (n && !(t && e in t)) return n;
          if (t == null) return null;
          const i = t[e];
          return typeof i > "u" ? null : i;
        }
        let l = t, s = 0;
        if (Array.isArray(e[0]) && e[0].length === 1) {
          s++;
          const i = +Math.abs(e[0][0]);
          let a = 0;
          for (let u = 0; u < i; u++) l = r[a++], u === r.length - 1 && Array.isArray(l) && (r = l, l = l[0], a = 1);
        }
        for (let i = s; i < e.length; i++) {
          if (n && !(l && e[i] in l)) return n;
          if (l == null) return null;
          l = l[e[i]];
        }
        return typeof l > "u" || typeof l == "function" && !o.allowFunctions ? n : l;
      },
      optimizeUnary: true,
      deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
      compile: (e, t) => {
        function r(o) {
          let n;
          return Ao ? n = t.compile`(${o} ?? null)` : n = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (n = t.compile`(typeof (prev = ${n}) === 'function' ? null : prev)`), n;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Bt(e, t.engine, t) && St(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return r(t.compile`context`);
        if (!Array.isArray(e)) return r(Ao ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let n = 0; n < e.length; n++) e[n] !== null && (Ao ? o = t.compile`${o}?.[${e[n]}]` : o = t.compile`(${o}|| 0)[${e[n]}]`);
          return r(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: bl("map"),
    some: {
      ...bl("some", true),
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        let [n, l] = e;
        n = lt(n, o, t, r) || [];
        for (let s = 0; s < n.length; s++) if (o.truthy(lt(l, o, n[s], [
          n,
          t,
          r
        ]))) return true;
        return false;
      }
    },
    all: {
      [Xe]: gn[Xe],
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        const n = lt(e[0], o, t, r) || [];
        if (Array.isArray(n) && n.length === 0) return false;
        const l = e[1];
        for (let s = 0; s < n.length; s++) if (!o.truthy(lt(l, o, n[s], [
          n,
          t,
          r
        ]))) return false;
        return true;
      },
      asyncMethod: async (e, t, r, o) => {
        if (Array.isArray(e)) {
          const n = await o.run(e[0], t, r);
          if (Array.isArray(n) && n.length === 0) return false;
        }
        return gn.asyncMethod(e, t, r, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${gn.compile([
        {
          [Nt]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: gn.deterministic,
      lazy: gn.lazy
    },
    none: {
      [Xe]: (e, t) => Bt(e, t.engine, t),
      lazy: true,
      method: (e, t, r, o) => !We.some.method(e, t, r, o),
      asyncMethod: async (e, t, r, o) => !await We.some.asyncMethod(e, t, r, o),
      compile: (e, t) => {
        const r = We.some.compile(e, t);
        return r ? t.compile`!(${r})` : false;
      }
    },
    merge: (e) => {
      if (!Array.isArray(e)) return [
        e
      ];
      const t = [];
      for (let r = 0; r < e.length; r++) if (Array.isArray(e[r])) for (let o = 0; o < e[r].length; o++) t.push(e[r][o]);
      else t.push(e[r]);
      return t;
    },
    filter: bl("filter", true),
    reduce: {
      deterministic: (e, t) => St(e[0], t.engine, t) && St(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw Ye;
        const { async: r } = t;
        let [o, n, l] = e;
        o = pt(o, t), typeof l < "u" && (l = pt(l, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        n = Fl(n, s);
        const i = n.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(n), r && (!fo(n) || o.includes("await")) ? (t.asyncDetected = true, typeof l < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${i}), ${l}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${i}), undefined, ${t.engine.options.maxDepth})`) : typeof l < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${i})), ${a}(${l}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${i})))`;
      },
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        let [n, l, s] = e;
        s = Gr(lt(s, o, t, r), o.options.maxDepth), n = lt(n, o, t, r) || [];
        let i = (a, u) => Gr(o.run(l, {
          accumulator: a,
          current: u
        }, {
          above: [
            n,
            t,
            r
          ]
        }), o.options.maxDepth);
        if (o.optimizedMap.has(l) && typeof o.optimizedMap.get(l) == "function") {
          const a = o.optimizedMap.get(l);
          i = (u, c) => Gr(a({
            accumulator: u,
            current: c
          }, [
            n,
            t,
            r
          ]), o.options.maxDepth);
        }
        return typeof s > "u" ? n.reduce(i) : n.reduce(i, s);
      },
      [Xe]: (e, t) => Bt(e, t.engine, t),
      asyncMethod: async (e, t, r, o) => {
        if (!Array.isArray(e)) throw Ye;
        let [n, l, s] = e;
        return s = Gr(await o.run(s, t, {
          above: r
        }), o.options.maxDepth), n = await o.run(n, t, {
          above: r
        }) || [], Ml.reduce(n, (i, a) => o.run(l, {
          accumulator: i,
          current: a
        }, {
          above: [
            n,
            t,
            r
          ]
        }), s, o.options.maxDepth);
      },
      lazy: true
    },
    "!": (e, t, r, o) => Array.isArray(e) ? !o.truthy(e[0]) : !o.truthy(e),
    "!!": (e, t, r, o) => !!(Array.isArray(e) ? o.truthy(e[0]) : o.truthy(e)),
    cat: {
      [cr]: true,
      [Xe]: true,
      method: (e) => {
        if (typeof e == "string") return e;
        if (!Array.isArray(e)) return e.toString();
        let t = "";
        for (let r = 0; r < e.length; r++) e[r] === null || e[r] === void 0 || (t += e[r]);
        return t;
      },
      deterministic: true,
      optimizeUnary: true,
      compile: (e, t) => {
        if (typeof e == "string") return JSON.stringify(e);
        if (typeof e == "number") return '"' + JSON.stringify(e) + '"';
        if (!Array.isArray(e)) return false;
        let r = t.compile`''`;
        for (let o = 0; o < e.length; o++) r = t.compile`${r} + ${e[o]}`;
        return t.compile`(${r})`;
      }
    },
    keys: ([e]) => typeof e == "object" ? Object.keys(e) : [],
    pipe: {
      lazy: true,
      [Xe]: (e, t) => Bt(e, t.engine, t),
      method: (e, t, r, o) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let n = o.run(e[0], t, {
          above: [
            e,
            t,
            r
          ]
        });
        for (let l = 1; l < e.length; l++) n = o.run(e[l], n, {
          above: [
            e,
            t,
            r
          ]
        });
        return n;
      },
      asyncMethod: async (e, t, r, o) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let n = await o.run(e[0], t, {
          above: [
            e,
            t,
            r
          ]
        });
        for (let l = 1; l < e.length; l++) n = await o.run(e[l], n, {
          above: [
            e,
            t,
            r
          ]
        });
        return n;
      },
      compile: (e, t) => {
        let r = t.compile`${e[0]}`;
        for (let o = 1; o < e.length; o++) r = t.compile`${Fl(e[o], {
          ...t,
          extraArguments: "above"
        })}(${r}, [null, context, above])`;
        return r;
      },
      deterministic: (e, t) => {
        if (!Array.isArray(e)) return false;
        e = [
          ...e
        ];
        const r = e.shift();
        return St(r, t.engine, t) && St(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [Xe]: (e, t) => Bt(Object.values(e[Object.keys(e)[0]]), t.engine, t),
      method: (e, t, r, o) => Object.keys(e).reduce((l, s) => {
        const i = e[s];
        return Object.defineProperty(l, s, {
          enumerable: true,
          value: o.run(i, t, {
            above: r
          })
        }), l;
      }, {}),
      deterministic: (e, t) => {
        if (e && typeof e == "object") return Object.values(e).every((r) => St(r, t.engine, t));
        throw Ye;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, n) => (o.push(`${JSON.stringify(n)}: ${pt(e[n], t)}`), o), []).join(",")} })`;
        throw Ye;
      },
      asyncMethod: async (e, t, r, o) => await Ml.reduce(Object.keys(e), async (l, s) => {
        const i = e[s];
        return Object.defineProperty(l, s, {
          enumerable: true,
          value: await o.run(i, t, {
            above: r
          })
        }), l;
      }, {}, 1 / 0)
    }
  };
  function Xr(e, t) {
    const r = {
      [Nt]: e
    }, o = e.length === 3;
    return {
      method: (n, l, s, i) => {
        if (!Array.isArray(n) || n.length <= 1) throw Ye;
        if (n.length === 2) {
          const u = lt(n[0], i, l, s), c = lt(n[1], i, l, s);
          if (o || (typeof u == "string" || u === null) && (typeof c == "string" || c === null)) return t(u, c);
          if (Number.isNaN(+dt(u))) throw NaN;
          if (Number.isNaN(+dt(c)) && u !== null) throw NaN;
          return t(+u, +c);
        }
        let a = lt(n[0], i, l, s);
        for (let u = 1; u < n.length; u++) {
          const c = lt(n[u], i, l, s);
          if ((o || (typeof c == "string" || c === null) && (typeof a == "string" || a === null)) && !t(a, c)) return false;
          if (Number.isNaN(+dt(c)) && a !== null) throw NaN;
          if (u === 1 && Number.isNaN(+dt(a))) throw NaN;
          if (!t(+a, +c)) return false;
          a = c;
        }
        return true;
      },
      asyncMethod: async (n, l, s, i) => {
        if (!Array.isArray(n) || n.length <= 1) throw Ye;
        if (n.length === 2) {
          const u = await lt(n[0], i, l, s), c = await lt(n[1], i, l, s);
          if (o || (typeof u == "string" || u === null) && (typeof c == "string" || c === null)) return t(u, c);
          if (Number.isNaN(+dt(u))) throw NaN;
          if (Number.isNaN(+dt(c)) && u !== null) throw NaN;
          return t(+u, +c);
        }
        let a = await lt(n[0], i, l, s);
        for (let u = 1; u < n.length; u++) {
          const c = await lt(n[u], i, l, s);
          if ((o || (typeof c == "string" || c === null) && (typeof a == "string" || a === null)) && !t(a, c)) return false;
          if (Number.isNaN(+dt(c)) && a !== null) throw NaN;
          if (u === 1 && Number.isNaN(+dt(a))) throw NaN;
          if (!t(+a, +c)) return false;
          a = c;
        }
        return true;
      },
      compile: (n, l) => {
        if (!Array.isArray(n) || n.length < 2) return false;
        if (n.length === 2) return l.compile`((prev = ${n[0]}) ${r} compareCheck(${n[1]}, prev, ${o}))`;
        let s = l.compile`((prev = ${n[0]}) ${r} (prev = compareCheck(${n[1]}, prev, ${o})))`;
        for (let i = 2; i < n.length; i++) s = l.compile`(${s} && prev ${r} (prev = compareCheck(${n[i]}, prev, ${o})))`;
        return s;
      },
      [cr]: true,
      [Xe]: (n, l) => Bt(n, l.engine, l),
      deterministic: (n, l) => St(n, l.engine, l),
      lazy: true
    };
  }
  function bl(e, t = false) {
    return {
      deterministic: (r, o) => St(r[0], o.engine, o) && St(r[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [cr]: true,
      [Xe]: (r, o) => Bt(r, o.engine, o),
      method: (r, o, n, l) => {
        if (!Array.isArray(r)) throw Ye;
        let [s, i] = r;
        return s = lt(s, l, o, n) || [], s[e]((a, u) => {
          if (!i || typeof i != "object") return t ? l.truthy(i) : i;
          const c = lt(i, l, a, [
            {
              iterator: s,
              index: u
            },
            o,
            n
          ]);
          return t ? l.truthy(c) : c;
        });
      },
      asyncMethod: async (r, o, n, l) => {
        if (!Array.isArray(r)) throw Ye;
        let [s, i] = r;
        return s = await l.run(s, o, {
          above: n
        }) || [], Ml[e](s, async (a, u) => {
          if (!i || typeof i != "object") return t ? l.truthy(i) : i;
          const c = await l.run(i, a, {
            above: [
              {
                iterator: s,
                index: u
              },
              o,
              n
            ]
          });
          return t ? l.truthy(c) : c;
        });
      },
      compile: (r, o) => {
        if (!Array.isArray(r)) throw Ye;
        const { async: n } = o, [l, s] = r, i = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = Fl(s, i), u = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, c = t ? o.compile`engine.truthy` : o.compile``;
        return n && !fo(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${l} || [], async (i, x, z) => ${c}(${a}(i, x, ${u})))`) : o.compile`(${l} || [])[${e}]((i, x, z) => ${c}(${a}(i, x, ${u})))`;
      },
      lazy: true
    };
  }
  We.every = We.all;
  We["?:"] = We.if;
  Object.keys(We).forEach((e) => {
    typeof We[e] == "function" && (We[e][Xe] = true), We[e].deterministic = typeof We[e].deterministic > "u" ? true : We[e].deterministic;
  });
  We.if.compile = function(e, t) {
    if (!Array.isArray(e) || e.length < 3) return false;
    e = [
      ...e
    ], e.length % 2 !== 1 && e.push(null);
    const r = e.pop();
    let o = t.compile``;
    for (; e.length; ) {
      const n = e.shift(), l = e.shift();
      o = t.compile`${o} engine.truthy(${n}) ? ${l} : `;
    }
    return t.compile`(${o} ${r})`;
  };
  function Bn(e, t) {
    if (Array.isArray(e)) return dt(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + pt(e, t);
    if (typeof e == "string") return "+" + dt(+e);
    const r = pt(e, t);
    return /^-?\d+(\.\d*)?$/.test(r) ? "+" + r : r.startsWith('"') ? "+" + dt(+JSON.parse(r)) : r === "true" ? "1" : r === "false" || r === "null" ? "0" : r.startsWith("[") || r.startsWith("{") ? dt(NaN) : `(+precoerceNumber(${r}))`;
  }
  We["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((r) => Bn(r, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${pt(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  We["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw Ye;
      return `precoerceNumber(${e.map((r) => Bn(r, t)).join(" % ")})`;
    }
    return `assertSize(${pt(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  We.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  We["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw Ye;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((r) => Bn(r, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${pt(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  We["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw Ye;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((r, o) => {
        let n = Bn(r, t);
        return o && n === "+0" && dt(NaN), o && (n = `precoerceNumber(${n} || NaN)`), n;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${pt(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  We["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((r) => Bn(r, t)).join(" * ")})` : `(${pt(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  We["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  We.not = We["!"];
  We["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  We.none.deterministic = We.some.deterministic;
  We.throw.deterministic = (e, t) => t.insideTry && St(e, t.engine, t);
  We["+"].optimizeUnary = We["-"].optimizeUnary = We["!"].optimizeUnary = We["!!"].optimizeUnary = We.cat.optimizeUnary = We.throw.optimizeUnary = true;
  const cb = {
    ...We,
    ...ab
  }, ub = function(t) {
    return Object.keys(t).forEach((r) => {
      t[r] === void 0 && delete t[r];
    }), t;
  };
  function db(e, t, r, o) {
    const n = t.methods[r], l = n.method ? n.method : n;
    if (n.lazy) {
      const i = e[r];
      return (a, u) => l(i, a, u || o, t);
    }
    let s = e[r];
    if ((!s || typeof s != "object") && !n.optimizeUnary && (s = [
      s
    ]), Array.isArray(s) && s.length === 1 && n.optimizeUnary && !Array.isArray(s[0]) && (s = s[0]), Array.isArray(s)) {
      const i = s.map((a) => Lt(a, t, o));
      if (i.every((a) => typeof a != "function")) return (a, u) => l(i, a, u || o, t);
      if (i.length === 1) {
        const a = i[0];
        return (u, c) => l([
          a(u, c)
        ], u, c || o, t);
      }
      if (i.length === 2) {
        const [a, u] = i;
        return typeof a == "function" && typeof u == "function" ? (c, p) => l([
          a(c, p),
          u(c, p)
        ], c, p || o, t) : typeof a == "function" ? (c, p) => l([
          a(c, p),
          u
        ], c, p || o, t) : (c, p) => l([
          a,
          u(c, p)
        ], c, p || o, t);
      }
      return (a, u) => {
        const c = i.map((p) => typeof p == "function" ? p(a, u) : p);
        return l(c, a, u || o, t);
      };
    } else {
      const i = Lt(s, t, o);
      if (n.optimizeUnary) {
        const a = (u) => !u || typeof u[i] > "u" || typeof u[i] == "function" && !t.allowFunctions ? null : u[i];
        if (typeof i == "function") return (u, c) => l(i(u, c), u, c || o, t);
        if ((r === "var" || r === "val") && t.methods[r][cr]) {
          if (!i && r !== "val") return (u) => u === null || typeof u > "u" || typeof u == "function" && !t.allowFunctions ? null : u;
          if (r === "val" || typeof i == "number" || !i.includes(".") && !i.includes("\\")) return a;
          if (r === "var" && !i.startsWith("../")) {
            const u = Oo(String(i));
            let c;
            if (u.length === 2) {
              const [p, g] = u;
              return (b) => (typeof (c = b && b[p] && b[p][g]) != "function" || t.allowFunctions) && typeof c < "u" ? c : null;
            }
            if (u.length === 3) {
              const [p, g, b] = u;
              return (h) => (typeof (c = h && h[p] && h[p][g] && h[p][g][b]) != "function" || t.allowFunctions) && typeof c < "u" ? c : null;
            }
          }
        }
        return (u, c) => l(i, u, c || o, t);
      }
      return typeof i == "function" ? (a, u) => l(An(i(a, u)), a, u || o, t) : (a, u) => l(An(i), a, u || o, t);
    }
  }
  const Fa = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function pb(e, t, r) {
    if (e.val && t.methods.val[cr] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
      let o;
      if (e.val.length === 1) {
        const n = e.val[0];
        return (l) => (typeof (o = l && l[n]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
      if (e.val.length === 2) {
        const [n, l] = e.val;
        return (s) => (typeof (o = s && s[n] && s[n][l]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
      if (e.val.length === 3) {
        const [n, l, s] = e.val;
        return (i) => (typeof (o = i && i[n] && i[n][l] && i[n][l][s]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
    }
    if ((e.if || e["?:"]) && t.methods.if[cr] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, n, l] = e.if || e["?:"], s = Lt(o, t, r), i = Lt(n, t, r), a = Lt(l, t, r);
      return typeof s == "function" && typeof i == "function" && typeof a == "function" ? (u, c) => t.truthy(s(u, c)) ? i(u, c) : a(u, c) : typeof s == "function" && typeof i == "function" ? (u, c) => t.truthy(s(u, c)) ? i(u, c) : a : typeof s == "function" && typeof a == "function" ? (u, c) => t.truthy(s(u, c)) ? i : a(u, c) : typeof s == "function" ? (u, c) => t.truthy(s(u, c)) ? i : a : t.truthy(s) ? i : a;
    }
    if (e.filter && t.methods.filter[cr] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, n] = e.filter, l = Lt(n, t, r);
      if (typeof l != "function") return t.truthy(l) ? Lt(o, t, r) : [];
    }
    for (const o in Fa) if (e[o] && Array.isArray(e[o]) && t.methods[o][cr]) {
      const n = Fa[o], l = o.length === 3 ? n : function(i, a) {
        if ((typeof i == "string" || i === null) && (typeof a == "string" || a === null)) return n(i, a);
        if (Number.isNaN(+dt(i))) throw NaN;
        if (Number.isNaN(+dt(a)) && i !== null) throw NaN;
        return n(+i, +a);
      };
      if (e[o].length === 2) {
        const [s, i] = e[o], a = Lt(s, t, r), u = Lt(i, t, r);
        return typeof a == "function" && typeof u == "function" ? (c, p) => l(a(c, p), u(c, p)) : typeof a == "function" ? (c, p) => l(a(c, p), u) : typeof u == "function" ? (c, p) => l(a, u(c, p)) : l(a, u);
      }
      if (e[o].length === 3) {
        const [s, i, a] = e[o], u = Lt(s, t, r), c = Lt(i, t, r), p = Lt(a, t, r);
        let g;
        return typeof u == "function" && typeof c == "function" && typeof p == "function" ? (b, h) => l(u(b, h), g = c(b, h)) && l(g, p(b, h)) : typeof u == "function" && typeof c == "function" ? (b, h) => l(u(b, h), g = c(b, h)) && l(g, p) : typeof u == "function" && typeof p == "function" ? (b, h) => l(u(b, h), c) && l(c, p(b, h)) : typeof c == "function" && typeof p == "function" ? (b, h) => l(u, g = c(b, h)) && l(g, p(b, h)) : typeof u == "function" ? (b, h) => l(u(b, h), c) && l(c, p) : typeof c == "function" ? (b, h) => l(u, g = c(b, h)) && l(g, p) : typeof p == "function" ? (b, h) => l(u, c) && l(c, p(b, h)) : l(u, c) && l(c, p);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, n, l] = e.reduce;
      if (n["+"] && n["+"].length === 2 && (n["+"][0] || 0).var && (n["+"][1] || 0).var) {
        const s = n["+"][0].var === "accumulator" || n["+"][1].var === "accumulator", i = n["+"][0].var === "current" || n["+"][1].var === "current";
        if (l = l || 0, s && i) return Lt({
          "+": [
            {
              "+": o
            },
            l
          ]
        }, t, r);
      }
      if (n["*"] && n["*"].length === 2 && (n["*"][0] || 0).var && (n["*"][1] || 0).var) {
        const s = n["*"][0].var === "accumulator" || n["*"][1].var === "accumulator", i = n["*"][0].var === "current" || n["*"][1].var === "current";
        if (l = typeof l > "u" ? 1 : l, s && i) return Lt({
          "*": [
            {
              "*": o
            },
            l
          ]
        }, t, r);
      }
    }
  }
  function Lt(e, t, r = []) {
    if (Array.isArray(e)) {
      const o = e.map((n) => Lt(n, t, r));
      return o.every((n) => typeof n != "function") ? o : (n, l) => o.map((s) => typeof s == "function" ? s(n, l) : s);
    }
    if (e && typeof e == "object") {
      const o = pb(e, t, r);
      if (typeof o < "u") return o;
      const n = Object.keys(e), l = n[0];
      if (n.length === 0) return e;
      if (t.isData(e, l)) return () => e;
      if (n.length > 1) throw {
        type: "Unknown Operator"
      };
      const i = !t.disableInline && Ol(e, t, {
        engine: t
      });
      if (l in t.methods) {
        const a = db(e, t, l, r);
        return i ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: l
      };
    }
    return e;
  }
  class fb {
    constructor(t = cb, r = {
      disableInline: false,
      disableInterpretedOptimization: false,
      permissive: false,
      maxDepth: 0,
      maxArrayLength: 32768,
      maxStringLength: 65536
    }) {
      this.disableInline = r.disableInline, this.disableInterpretedOptimization = r.disableInterpretedOptimization, this.methods = {
        ...t
      }, this.optimizedMap = /* @__PURE__ */ new WeakMap(), this.missesSinceSeen = 0, this.options = {
        disableInline: r.disableInline,
        disableInterpretedOptimization: r.disableInterpretedOptimization,
        maxDepth: r.maxDepth || 0,
        maxArrayLength: r.maxArrayLength || 32768,
        maxStringLength: r.maxStringLength || 65536
      }, this.isData || (r.permissive ? this.isData = (o, n) => !(n in this.methods) : this.isData = () => false);
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
    _parse(t, r, o, n, l) {
      const s = t[n];
      if (this.isData(t, n)) return t;
      if (!this.methods[n] || l > 1) throw {
        type: "Unknown Operator",
        key: n
      };
      if ((n === "var" || n === "val") && this.methods[n][cr]) {
        const i = !s || typeof s != "object" ? s : this.run(s, r, {
          above: o
        });
        return this.methods[n].method(i, r, o, this, null);
      }
      if (typeof this.methods[n] == "function") {
        const i = !s || typeof s != "object" ? [
          s
        ] : An(this.run(s, r, {
          above: o
        }));
        return this.methods[n](i, r, o, this);
      }
      if (typeof this.methods[n] == "object") {
        const { method: i, lazy: a } = this.methods[n], u = a ? s : !s || typeof s != "object" ? [
          s
        ] : An(this.run(s, r, {
          above: o
        }));
        return i(u, r, o, this);
      }
      throw new Error(`Method '${n}' is not set up properly.`);
    }
    addMethod(t, r, { deterministic: o, optimizeUnary: n } = {}) {
      typeof r == "function" ? r = {
        method: r,
        lazy: false
      } : r = {
        ...r,
        lazy: typeof r.traverse < "u" ? !r.traverse : r.lazy
      }, Object.assign(r, ub({
        deterministic: o,
        optimizeUnary: n
      })), this.methods[t] = pu(r);
    }
    addModule(t, r, o) {
      Object.getOwnPropertyNames(r).forEach((n) => {
        (typeof r[n] == "function" || typeof r[n] == "object") && this.addMethod(`${t}${t ? "." : ""}${n}`, r[n], o);
      });
    }
    run(t, r = {}, o = {}) {
      const { above: n = [] } = o;
      if (!this.disableInterpretedOptimization && typeof t == "object" && t) if (this.missesSinceSeen > 500 && (this.disableInterpretedOptimization = true, this.missesSinceSeen = 0), this.optimizedMap.has(t)) {
        this.missesSinceSeen = 0;
        const l = this.optimizedMap.get(t);
        return typeof l == "function" ? l(r, n) : l;
      } else {
        this.optimizedMap.set(t, Lt(t, this, n)), this.missesSinceSeen++;
        const l = this.optimizedMap.get(t);
        return typeof l == "function" ? l(r, n) : l;
      }
      if (Array.isArray(t)) {
        const l = new Array(t.length);
        for (let s = 0; s < t.length; s++) l[s] = this.run(t[s], r, {
          above: n
        });
        return l;
      }
      if (t && typeof t == "object") {
        const l = Object.keys(t);
        if (l.length > 0) {
          const s = l[0];
          return this._parse(t, r, n, s, l.length);
        }
      }
      return t;
    }
    build(t, r = {}) {
      const { above: o = [], top: n = true } = r, l = Fl(t, {
        engine: this,
        above: o
      });
      return n === false && l.deterministic ? l() : l;
    }
  }
  const Wl = new fb();
  Wl.addMethod("contains", ([e, t]) => String(e ?? "").includes(String(t ?? "")), {
    deterministic: true
  });
  Wl.addMethod("startsWith", ([e, t]) => String(e ?? "").startsWith(String(t ?? "")), {
    deterministic: true
  });
  Wl.addMethod("endsWith", ([e, t]) => String(e ?? "").endsWith(String(t ?? "")), {
    deterministic: true
  });
  const Us = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), gb = {
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
  }, hb = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], mb = {
    var: "value"
  };
  function bb(e, t) {
    const r = Number(t), o = mb;
    switch (e) {
      case "eq":
        return {
          "==": [
            o,
            t
          ]
        };
      case "neq":
        return {
          "!=": [
            o,
            t
          ]
        };
      case "gt":
        return {
          ">": [
            o,
            r
          ]
        };
      case "gte":
        return {
          ">=": [
            o,
            r
          ]
        };
      case "lt":
        return {
          "<": [
            o,
            r
          ]
        };
      case "lte":
        return {
          "<=": [
            o,
            r
          ]
        };
      case "contains":
        return {
          contains: [
            o,
            t
          ]
        };
      case "not_contains":
        return {
          "!": [
            {
              contains: [
                o,
                t
              ]
            }
          ]
        };
      case "starts_with":
        return {
          startsWith: [
            o,
            t
          ]
        };
      case "ends_with":
        return {
          endsWith: [
            o,
            t
          ]
        };
      case "empty":
        return {
          "!": [
            {
              "!!": [
                o
              ]
            }
          ]
        };
      case "not_empty":
        return {
          "!!": [
            o
          ]
        };
      case "is_true":
        return {
          "==": [
            o,
            true
          ]
        };
      case "is_false":
        return {
          "==": [
            o,
            false
          ]
        };
    }
  }
  function Cb(e) {
    const t = e.conditions.filter((o) => Us.has(o.operator) ? true : o.operand.trim() !== "");
    if (t.length === 0) return;
    const r = t.map((o) => bb(o.operator, o.operand));
    return r.length === 1 ? r[0] : {
      [e.mode]: r
    };
  }
  function zr(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function gs(e) {
    for (const [t, r] of [
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
      if (Array.isArray(o) && o.length === 2 && zr(o[0])) return {
        operator: r,
        operand: String(o[1] ?? "")
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && zr(t[0])) return t[1] === true ? {
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
      if (Array.isArray(t) && t.length === 2 && zr(t[0])) return {
        operator: "neq",
        operand: String(t[1] ?? "")
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && zr(t[0])) return {
        operator: "contains",
        operand: String(t[1] ?? "")
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && zr(t[0])) return {
        operator: "starts_with",
        operand: String(t[1] ?? "")
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && zr(t[0])) return {
        operator: "ends_with",
        operand: String(t[1] ?? "")
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const r = t[0];
        if (typeof r == "object" && r !== null && "!!" in r) {
          const o = r["!!"];
          if (Array.isArray(o) && zr(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof r == "object" && r !== null && "contains" in r) {
          const o = r.contains;
          if (Array.isArray(o) && o.length === 2 && zr(o[0])) return {
            operator: "not_contains",
            operand: String(o[1] ?? "")
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && zr(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function yb(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const r = e.and;
      if (Array.isArray(r)) {
        const o = r.map((n) => gs(n)).filter((n) => n !== null);
        if (o.length > 0) return {
          mode: "and",
          conditions: o
        };
      }
    }
    if ("or" in e) {
      const r = e.or;
      if (Array.isArray(r)) {
        const o = r.map((n) => gs(n)).filter((n) => n !== null);
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = gs(e);
    return t ? {
      mode: "and",
      conditions: [
        t
      ]
    } : {
      mode: "and",
      conditions: [
        {
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const ka = /* @__PURE__ */ new Map();
  function wb(e, t) {
    try {
      const r = JSON.stringify(e);
      let o = ka.get(r);
      return o || (o = Wl.build(e), ka.set(r, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const xb = {
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
  function vb({ logic: e, columnType: t, onChange: r }) {
    const [o, n] = d.useState(() => yb(e)), l = gb[t] ?? hb, s = d.useCallback((g) => {
      n(g), r(Cb(g));
    }, [
      r
    ]), i = d.useCallback((g, b) => {
      const h = o.conditions.map((m, x) => x === g ? {
        ...m,
        ...b
      } : m);
      s({
        ...o,
        conditions: h
      });
    }, [
      o,
      s
    ]), a = d.useCallback((g) => {
      const b = o.conditions.filter((h, m) => m !== g);
      s({
        ...o,
        conditions: b
      });
    }, [
      o,
      s
    ]), u = d.useCallback(() => {
      const g = l[0] ?? "eq";
      s({
        ...o,
        conditions: [
          ...o.conditions,
          {
            operator: g,
            operand: ""
          }
        ]
      });
    }, [
      o,
      s,
      l
    ]), c = d.useCallback((g, b) => {
      b !== null && s({
        ...o,
        mode: b
      });
    }, [
      o,
      s
    ]), p = o.conditions.length > 1;
    return f.jsxs(wr, {
      spacing: 1,
      children: [
        p && f.jsxs(Ze, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            f.jsxs(Rp, {
              value: o.mode,
              exclusive: true,
              onChange: c,
              size: "small",
              "aria-label": oe.t("json_table_condition_mode_label"),
              children: [
                f.jsx(Ji, {
                  value: "and",
                  "aria-label": oe.t("json_table_condition_mode_all"),
                  children: oe.t("json_table_condition_mode_all")
                }),
                f.jsx(Ji, {
                  value: "or",
                  "aria-label": oe.t("json_table_condition_mode_any"),
                  children: oe.t("json_table_condition_mode_any")
                })
              ]
            }),
            f.jsx(ye, {
              variant: "caption",
              color: "text.secondary",
              children: oe.t("json_table_condition_mode_hint")
            })
          ]
        }),
        o.conditions.map((g, b) => {
          const h = !Us.has(g.operator), m = [
            "gt",
            "gte",
            "lt",
            "lte"
          ].includes(g.operator);
          return f.jsxs(Ze, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              f.jsxs(vl, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  f.jsx(Sl, {
                    children: oe.t("json_table_condition_operator")
                  }),
                  f.jsx(kn, {
                    label: oe.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (x) => {
                      const v = x.target.value, w = Us.has(v) ? "" : g.operand;
                      i(b, {
                        operator: v,
                        operand: w
                      });
                    },
                    children: l.map((x) => f.jsx(jt, {
                      value: x,
                      children: oe.t(xb[x])
                    }, x))
                  })
                ]
              }),
              h && f.jsx(ir, {
                label: oe.t("json_table_condition_value"),
                value: g.operand,
                onChange: (x) => i(b, {
                  operand: x.target.value
                }),
                size: "small",
                type: m ? "number" : "text",
                sx: {
                  flex: 1
                },
                slotProps: m ? {
                  htmlInput: {
                    step: "any"
                  }
                } : void 0
              }),
              p && f.jsx(_r, {
                title: oe.t("json_table_condition_remove"),
                children: f.jsx(Et, {
                  size: "small",
                  onClick: () => a(b),
                  "aria-label": oe.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: f.jsx(Vc, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, b);
        }),
        f.jsx(_o, {
          startIcon: f.jsx(au, {}),
          onClick: u,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": oe.t("json_table_condition_add"),
          children: p ? oe.t("json_table_condition_add") : oe.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function Sb({ column: e, discoveredColumn: t, onChange: r }) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2;
    const [o, n] = d.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = d.useCallback((m) => {
      n((x) => ({
        ...x,
        [m]: !x[m]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", i = d.useCallback((m) => {
      var _a3, _b3;
      const x = {
        ...e.format
      };
      if (m.type && m.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const v = (_b3 = e.format) == null ? void 0 : _b3.type;
        v === "number" ? (delete x.numberDecimals, delete x.numberPrefix, delete x.numberSuffix, delete x.numberThousandsSeparator) : v === "date" ? (delete x.dateFormat, delete x.dateInputFormat) : v === "boolean" && (delete x.booleanTrue, delete x.booleanFalse);
      }
      r({
        ...e,
        format: {
          ...x,
          ...m
        }
      });
    }, [
      e,
      r
    ]), a = d.useCallback((m, x) => {
      const v = [
        ...e.cellStyle || []
      ];
      v[m] = {
        ...v[m],
        ...x
      }, r({
        ...e,
        cellStyle: v
      });
    }, [
      e,
      r
    ]), u = d.useCallback((m) => {
      const x = [
        ...e.cellStyle || []
      ];
      x.splice(m, 1), r({
        ...e,
        cellStyle: x
      });
    }, [
      e,
      r
    ]), c = d.useCallback(() => {
      const m = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      r({
        ...e,
        cellStyle: [
          ...e.cellStyle || [],
          m
        ]
      });
    }, [
      e,
      r
    ]), p = d.useCallback((m) => {
      if (m === 0) return;
      const x = [
        ...e.cellStyle || []
      ];
      [x[m - 1], x[m]] = [
        x[m],
        x[m - 1]
      ], r({
        ...e,
        cellStyle: x
      });
    }, [
      e,
      r
    ]), g = d.useCallback((m) => {
      const x = e.cellStyle || [];
      if (m >= x.length - 1) return;
      const v = [
        ...x
      ];
      [v[m], v[m + 1]] = [
        v[m + 1],
        v[m]
      ], r({
        ...e,
        cellStyle: v
      });
    }, [
      e,
      r
    ]), b = d.useMemo(() => (t == null ? void 0 : t.min) !== void 0 && typeof t.min == "number" ? t.min + ((t.max || 0) - t.min) * 0.75 : 1234.567, [
      t
    ]), h = d.useMemo(() => t ? Object.values(t.typeCounts).reduce((m, x) => m + x, 0) : 0, [
      t
    ]);
    return f.jsxs(Ze, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        f.jsxs(Ze, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            f.jsx(Ho, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: In[s] || In.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            f.jsx(ye, {
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
        f.jsxs(wr, {
          spacing: 1,
          children: [
            f.jsxs(ol, {
              expanded: o.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                f.jsx(ll, {
                  expandIcon: f.jsx(cl, {}),
                  children: f.jsx(ye, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: oe.t("json_table_section_basic")
                  })
                }),
                f.jsx(nl, {
                  children: f.jsxs(wr, {
                    spacing: 2,
                    children: [
                      f.jsx(ir, {
                        label: oe.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (m) => r({
                          ...e,
                          headerName: m.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      f.jsx(ir, {
                        label: oe.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (m) => r({
                          ...e,
                          width: m.target.value ? parseInt(m.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: oe.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      f.jsxs(vl, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          f.jsx(Sl, {
                            children: oe.t("json_table_align")
                          }),
                          f.jsxs(kn, {
                            label: oe.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (m) => r({
                              ...e,
                              align: m.target.value
                            }),
                            children: [
                              f.jsx(jt, {
                                value: "left",
                                children: oe.t("json_table_align_left")
                              }),
                              f.jsx(jt, {
                                value: "center",
                                children: oe.t("json_table_align_center")
                              }),
                              f.jsx(jt, {
                                value: "right",
                                children: oe.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      f.jsx(Zr, {
                        control: f.jsx(tl, {
                          checked: e.visible,
                          onChange: (m) => r({
                            ...e,
                            visible: m.target.checked
                          })
                        }),
                        label: f.jsx(ye, {
                          variant: "body2",
                          children: oe.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            f.jsxs(ol, {
              expanded: o.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                f.jsx(ll, {
                  expandIcon: f.jsx(cl, {}),
                  children: f.jsx(ye, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: oe.t("json_table_section_formatting")
                  })
                }),
                f.jsx(nl, {
                  children: f.jsxs(wr, {
                    spacing: 2,
                    children: [
                      (s === "number" || ((_a2 = e.format) == null ? void 0 : _a2.type) === "number") && f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(ye, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: oe.t("json_table_number_format")
                          }),
                          f.jsxs(Ze, {
                            children: [
                              f.jsxs(ye, {
                                variant: "caption",
                                color: "text.secondary",
                                gutterBottom: true,
                                children: [
                                  oe.t("json_table_number_decimals"),
                                  ":",
                                  " ",
                                  ((_b2 = e.format) == null ? void 0 : _b2.numberDecimals) ?? 2
                                ]
                              }),
                              f.jsx(Hp, {
                                value: ((_c2 = e.format) == null ? void 0 : _c2.numberDecimals) ?? 2,
                                onChange: (m, x) => i({
                                  type: "number",
                                  numberDecimals: x
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
                          f.jsx(ir, {
                            label: oe.t("json_table_number_prefix"),
                            value: ((_d2 = e.format) == null ? void 0 : _d2.numberPrefix) || "",
                            onChange: (m) => i({
                              type: "number",
                              numberPrefix: m.target.value
                            }),
                            size: "small",
                            placeholder: "$, \u20AC, \xA3"
                          }),
                          f.jsx(ir, {
                            label: oe.t("json_table_number_suffix"),
                            value: ((_e = e.format) == null ? void 0 : _e.numberSuffix) || "",
                            onChange: (m) => i({
                              type: "number",
                              numberSuffix: m.target.value
                            }),
                            size: "small",
                            placeholder: "%, kg, \xB0C"
                          }),
                          f.jsx(Zr, {
                            control: f.jsx(tl, {
                              checked: ((_f2 = e.format) == null ? void 0 : _f2.numberThousandsSeparator) || false,
                              onChange: (m) => i({
                                type: "number",
                                numberThousandsSeparator: m.target.checked
                              }),
                              size: "small"
                            }),
                            label: f.jsx(ye, {
                              variant: "body2",
                              children: oe.t("json_table_number_thousands")
                            })
                          }),
                          f.jsxs(Ut, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(ye, {
                                variant: "caption",
                                color: "text.secondary",
                                children: oe.t("json_table_preview")
                              }),
                              f.jsxs(ye, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  b,
                                  " \u2192",
                                  " ",
                                  uu(b, {
                                    decimals: (_g2 = e.format) == null ? void 0 : _g2.numberDecimals,
                                    prefix: (_h2 = e.format) == null ? void 0 : _h2.numberPrefix,
                                    suffix: (_i2 = e.format) == null ? void 0 : _i2.numberSuffix,
                                    thousands: (_j = e.format) == null ? void 0 : _j.numberThousandsSeparator
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "date" || ((_k = e.format) == null ? void 0 : _k.type) === "date") && f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(ye, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: oe.t("json_table_date_format")
                          }),
                          (t == null ? void 0 : t.dateFormat) && f.jsx(ir, {
                            label: oe.t("json_table_date_input_format"),
                            value: t.dateFormat,
                            disabled: true,
                            size: "small",
                            helperText: oe.t("json_table_date_detected_hint")
                          }),
                          f.jsxs(vl, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              f.jsx(Sl, {
                                children: oe.t("json_table_date_output_format")
                              }),
                              f.jsx(kn, {
                                label: oe.t("json_table_date_output_format"),
                                value: ((_l2 = e.format) == null ? void 0 : _l2.dateFormat) || "yyyy-MM-dd",
                                onChange: (m) => i({
                                  type: "date",
                                  dateFormat: m.target.value,
                                  dateInputFormat: t == null ? void 0 : t.dateFormat
                                }),
                                children: Km.map((m) => f.jsx(jt, {
                                  value: m.value,
                                  children: m.label
                                }, m.value))
                              })
                            ]
                          }),
                          f.jsxs(Ut, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(ye, {
                                variant: "caption",
                                color: "text.secondary",
                                children: oe.t("json_table_preview")
                              }),
                              f.jsx(ye, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: du(/* @__PURE__ */ new Date(), ((_m2 = e.format) == null ? void 0 : _m2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_n2 = e.format) == null ? void 0 : _n2.type) === "boolean") && f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(ye, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: oe.t("json_table_boolean_format")
                          }),
                          f.jsx(ir, {
                            label: oe.t("json_table_boolean_true"),
                            value: ((_o2 = e.format) == null ? void 0 : _o2.booleanTrue) || "",
                            onChange: (m) => i({
                              type: "boolean",
                              booleanTrue: m.target.value
                            }),
                            size: "small",
                            placeholder: "Yes, On, \u2713, Active"
                          }),
                          f.jsx(ir, {
                            label: oe.t("json_table_boolean_false"),
                            value: ((_p2 = e.format) == null ? void 0 : _p2.booleanFalse) || "",
                            onChange: (m) => i({
                              type: "boolean",
                              booleanFalse: m.target.value
                            }),
                            size: "small",
                            placeholder: "No, Off, \u2717, Inactive"
                          }),
                          f.jsxs(Ut, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(ye, {
                                variant: "caption",
                                color: "text.secondary",
                                children: oe.t("json_table_preview")
                              }),
                              f.jsxs(wr, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                  mt: 0.5
                                },
                                children: [
                                  f.jsxs(ye, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      Vs(true, (_q = e.format) == null ? void 0 : _q.booleanTrue, (_r2 = e.format) == null ? void 0 : _r2.booleanFalse)
                                    ]
                                  }),
                                  f.jsxs(ye, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      Vs(false, (_s2 = e.format) == null ? void 0 : _s2.booleanTrue, (_t2 = e.format) == null ? void 0 : _t2.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && !e.format && f.jsx(ye, {
                        variant: "body2",
                        color: "text.secondary",
                        children: oe.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            f.jsxs(ol, {
              expanded: o.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                f.jsx(ll, {
                  expandIcon: f.jsx(cl, {}),
                  children: f.jsxs(Ze, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    },
                    children: [
                      f.jsx(ye, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: oe.t("json_table_section_styling")
                      }),
                      (((_u2 = e.cellStyle) == null ? void 0 : _u2.length) ?? 0) > 0 && f.jsx(Ho, {
                        label: e.cellStyle.length,
                        size: "small",
                        color: "primary",
                        sx: {
                          height: 20,
                          fontSize: "0.7rem"
                        }
                      })
                    ]
                  })
                }),
                f.jsx(nl, {
                  children: f.jsxs(wr, {
                    spacing: 1.5,
                    children: [
                      (e.cellStyle || []).length === 0 && f.jsxs(Ze, {
                        sx: {
                          textAlign: "center",
                          py: 2,
                          px: 1,
                          color: "text.secondary"
                        },
                        children: [
                          f.jsx(ye, {
                            variant: "body2",
                            sx: {
                              fontWeight: 500,
                              mb: 0.5
                            },
                            children: oe.t("json_table_no_style_rules")
                          }),
                          f.jsx(ye, {
                            variant: "caption",
                            children: oe.t("json_table_no_style_rules_hint")
                          })
                        ]
                      }),
                      (e.cellStyle || []).map((m, x) => {
                        const v = (e.cellStyle || []).length, w = m.backgroundColor ? Eo(m.backgroundColor) : void 0, k = m.textColor ? Eo(m.textColor) : void 0;
                        return f.jsx(Ut, {
                          variant: "outlined",
                          sx: {
                            p: 1.5
                          },
                          children: f.jsxs(wr, {
                            spacing: 1.5,
                            children: [
                              f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center"
                                },
                                children: [
                                  f.jsxs(ye, {
                                    variant: "caption",
                                    sx: {
                                      fontWeight: 600,
                                      color: "text.secondary"
                                    },
                                    children: [
                                      oe.t("json_table_rule"),
                                      " ",
                                      x + 1
                                    ]
                                  }),
                                  f.jsxs(Ze, {
                                    sx: {
                                      display: "flex",
                                      gap: 0.5
                                    },
                                    children: [
                                      f.jsx(_r, {
                                        title: oe.t("json_table_rule_move_up"),
                                        children: f.jsx("span", {
                                          children: f.jsx(Et, {
                                            size: "small",
                                            onClick: () => p(x),
                                            disabled: x === 0,
                                            "aria-label": oe.t("json_table_rule_move_up"),
                                            children: f.jsx(Hm, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      f.jsx(_r, {
                                        title: oe.t("json_table_rule_move_down"),
                                        children: f.jsx("span", {
                                          children: f.jsx(Et, {
                                            size: "small",
                                            onClick: () => g(x),
                                            disabled: x >= v - 1,
                                            "aria-label": oe.t("json_table_rule_move_down"),
                                            children: f.jsx(jm, {
                                              fontSize: "small"
                                            })
                                          })
                                        })
                                      }),
                                      f.jsx(_r, {
                                        title: oe.t("json_table_delete_rule"),
                                        children: f.jsx(Et, {
                                          size: "small",
                                          onClick: () => u(x),
                                          color: "error",
                                          "aria-label": oe.t("json_table_delete_rule"),
                                          children: f.jsx(yp, {
                                            fontSize: "small"
                                          })
                                        })
                                      })
                                    ]
                                  })
                                ]
                              }),
                              f.jsx(vb, {
                                logic: m.logic,
                                columnType: s,
                                onChange: (L) => a(x, {
                                  logic: L
                                })
                              }, m.id ?? x),
                              f.jsxs(wr, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "flex-start",
                                children: [
                                  f.jsx(Ia, {
                                    label: oe.t("json_table_bg_color"),
                                    value: m.backgroundColor || "",
                                    onChange: (L) => a(x, {
                                      backgroundColor: L
                                    })
                                  }),
                                  f.jsx(Ia, {
                                    label: oe.t("json_table_text_color"),
                                    value: m.textColor || "",
                                    onChange: (L) => a(x, {
                                      textColor: L
                                    })
                                  })
                                ]
                              }),
                              f.jsxs(wr, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  f.jsx(Zr, {
                                    control: f.jsx(Pl, {
                                      checked: m.fontWeight === "bold",
                                      onChange: (L) => a(x, {
                                        fontWeight: L.target.checked ? "bold" : "normal"
                                      }),
                                      icon: f.jsx(Sa, {
                                        sx: {
                                          opacity: 0.3
                                        }
                                      }),
                                      checkedIcon: f.jsx(Sa, {
                                        color: "primary"
                                      }),
                                      size: "small"
                                    }),
                                    label: f.jsx(ye, {
                                      variant: "caption",
                                      children: oe.t("json_table_bold")
                                    })
                                  }),
                                  f.jsx(Zr, {
                                    control: f.jsx(Pl, {
                                      checked: m.fontStyle === "italic",
                                      onChange: (L) => a(x, {
                                        fontStyle: L.target.checked ? "italic" : "normal"
                                      }),
                                      icon: f.jsx(Pa, {
                                        sx: {
                                          opacity: 0.3
                                        }
                                      }),
                                      checkedIcon: f.jsx(Pa, {
                                        color: "primary"
                                      }),
                                      size: "small"
                                    }),
                                    label: f.jsx(ye, {
                                      variant: "caption",
                                      children: oe.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (m.backgroundColor || m.textColor || m.fontWeight === "bold" || m.fontStyle === "italic") && f.jsx(Ut, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  ...m.backgroundColor ? w ? {
                                    background: w
                                  } : {
                                    backgroundColor: m.backgroundColor
                                  } : {},
                                  fontWeight: m.fontWeight || "normal",
                                  fontStyle: m.fontStyle || "normal"
                                },
                                children: f.jsx(ye, {
                                  variant: "body2",
                                  sx: {
                                    ...m.textColor ? k ? {
                                      background: k,
                                      backgroundClip: "text",
                                      WebkitBackgroundClip: "text",
                                      color: "transparent"
                                    } : {
                                      color: m.textColor
                                    } : {
                                      color: "inherit"
                                    }
                                  },
                                  children: oe.t("json_table_sample_value")
                                })
                              })
                            ]
                          })
                        }, m.id ?? x);
                      }),
                      f.jsx(_o, {
                        startIcon: f.jsx(au, {}),
                        onClick: c,
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                        children: oe.t("json_table_add_style_rule")
                      })
                    ]
                  })
                })
              ]
            }),
            f.jsxs(ol, {
              expanded: o.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                f.jsx(ll, {
                  expandIcon: f.jsx(cl, {}),
                  children: f.jsx(ye, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: oe.t("json_table_section_advanced")
                  })
                }),
                f.jsx(nl, {
                  children: f.jsxs(wr, {
                    spacing: 2,
                    children: [
                      f.jsx(Zr, {
                        control: f.jsx(tl, {
                          checked: e.sortable ?? true,
                          onChange: (m) => r({
                            ...e,
                            sortable: m.target.checked
                          }),
                          size: "small"
                        }),
                        label: f.jsx(ye, {
                          variant: "body2",
                          children: oe.t("json_table_sortable")
                        })
                      }),
                      f.jsx(Zr, {
                        control: f.jsx(tl, {
                          checked: e.filterable ?? false,
                          onChange: (m) => r({
                            ...e,
                            filterable: m.target.checked
                          }),
                          size: "small"
                        }),
                        label: f.jsx(ye, {
                          variant: "body2",
                          children: oe.t("json_table_filterable")
                        })
                      }),
                      t && f.jsxs(Ut, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          f.jsx(ye, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: oe.t("json_table_analysis_info")
                          }),
                          f.jsxs(wr, {
                            spacing: 0.5,
                            children: [
                              f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(ye, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: oe.t("json_table_type_label")
                                  }),
                                  f.jsx(Ho, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: In[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(ye, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: oe.t("json_table_confidence")
                                  }),
                                  f.jsxs(ye, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(ye, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: oe.t("json_table_nulls")
                                  }),
                                  f.jsxs(ye, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      h > 0 && ` (${Math.round(t.nullCount / h * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(ye, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: oe.t("json_table_distinct")
                                  }),
                                  f.jsx(ye, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(ye, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: oe.t("json_table_range")
                                  }),
                                  f.jsxs(ye, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && f.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(ye, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: oe.t("json_table_date_input_format")
                                  }),
                                  f.jsx(ye, {
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
  const Pb = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Ib = /^\d{4}-\d{2}-\d{2}$/, Mb = /^(\d{2})\.(\d{2})\.(\d{4})$/, Ob = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Fb = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, kb = /^(\d{2})\/(\d{2})\/(\d{4})$/, Eb = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Tb = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function ul(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function hs(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function dl(e, t, r) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (r === void 0 || r >= 0 && r <= 59);
  }
  const Ab = [
    {
      regex: Pb,
      format: "ISO-8601"
    },
    {
      regex: Ib,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), r = parseInt(e[0].slice(8, 10), 10);
        return ul(r, t);
      }
    },
    {
      regex: Fb,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), r = parseInt(e[2], 10), o = parseInt(e[4], 10), n = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return ul(t, r) && dl(o, n, l);
      }
    },
    {
      regex: Ob,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), r = parseInt(e[2], 10), o = parseInt(e[4], 10), n = parseInt(e[5], 10);
        return ul(t, r) && dl(o, n);
      }
    },
    {
      regex: Mb,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), r = parseInt(e[2], 10);
        return ul(t, r);
      }
    },
    {
      regex: Tb,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), r = parseInt(e[2], 10), o = parseInt(e[4], 10), n = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return hs(t, r) && dl(o, n, l);
      }
    },
    {
      regex: Eb,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), r = parseInt(e[2], 10), o = parseInt(e[4], 10), n = parseInt(e[5], 10);
        return hs(t, r) && dl(o, n);
      }
    },
    {
      regex: kb,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), r = parseInt(e[2], 10);
        return hs(t, r);
      }
    }
  ];
  function Db(e) {
    const t = e.trim();
    if (!t) return null;
    for (const r of Ab) {
      const o = t.match(r.regex);
      if (o) {
        if (r.validate && !r.validate(o)) continue;
        return r.format;
      }
    }
    return null;
  }
  function $b(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Lb(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = $b(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = Db(e);
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
  function Rb(e) {
    const t = Object.keys(e).filter((r) => r !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function jb(e) {
    let t, r = 0;
    for (const [o, n] of Object.entries(e)) n > r && (t = o, r = n);
    return t;
  }
  function Hb(e) {
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
  function Ea(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function zb(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const r = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return r;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = r.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const n = o[1], l = o[2], s = o[3], i = o[4] || "00", a = o[5] || "00", u = o[6] || "00";
        return `${s}-${l}-${n}T${i}:${a}:${u}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = r.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const n = o[1], l = o[2], s = o[3], i = o[4] || "00", a = o[5] || "00", u = o[6] || "00";
        return `${s}-${n}-${l}T${i}:${a}:${u}`;
      }
    }
    return null;
  }
  function Nb(e, t, r = 100, o = 0.8) {
    t.length;
    const n = /* @__PURE__ */ new Map();
    for (const l of e) n.set(l, Hb(l));
    for (const l of t) for (const s of e) {
      const i = n.get(s), a = l[s], u = Lb(a);
      if (Ea(i.typeCounts, u.type), u.type === "null") {
        i.nullCount++;
        continue;
      }
      if (i.nonNullCount++, u.dateFormat && Ea(i.dateFormatCounts, u.dateFormat), i.distinctValues.size < r && i.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((i.numMin === void 0 || a < i.numMin) && (i.numMin = a), (i.numMax === void 0 || a > i.numMax) && (i.numMax = a)), typeof a == "string") {
        const c = a.length;
        (i.strLenMin === void 0 || c < i.strLenMin) && (i.strLenMin = c), (i.strLenMax === void 0 || c > i.strLenMax) && (i.strLenMax = c);
      }
      if (u.dateFormat) {
        const c = zb(a, u.dateFormat);
        c !== null && ((i.dateMin === void 0 || c < i.dateMin) && (i.dateMin = c), (i.dateMax === void 0 || c > i.dateMax) && (i.dateMax = c));
      }
    }
    return e.map((l) => {
      const s = n.get(l);
      let i = Rb(s.typeCounts);
      i === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (i = "string");
      const a = i === "date" ? jb(s.dateFormatCounts) : void 0, u = i === "date" ? s.typeCounts.date || 0 : s.typeCounts[i] || 0, c = s.nonNullCount > 0 ? Math.round(u / s.nonNullCount * 100) / 100 : 0, p = {
        path: l,
        type: i,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: c
      };
      return a && (p.dateFormat = a), i === "number" && (s.numMin !== void 0 && (p.min = s.numMin), s.numMax !== void 0 && (p.max = s.numMax)), i === "date" && (s.dateMin !== void 0 && (p.min = s.dateMin), s.dateMax !== void 0 && (p.max = s.dateMax)), (i === "string" || i === "mixed") && (s.strLenMin !== void 0 && (p.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (p.stringLengthMax = s.strLenMax)), p;
    });
  }
  function kl(e, t, r, o, n, l, s, i) {
    if (l > i.maxDepth && (i.maxDepth = l), l > s) {
      r[t] = e, o.add(t);
      return;
    }
    if (e == null) {
      r[t] = null, o.add(t);
      return;
    }
    if (Array.isArray(e)) {
      if (e.length === 0) {
        r[t] = null, o.add(t);
        return;
      }
      for (let a = 0; a < e.length; a++) {
        a > i.maxArrayIndex && (i.maxArrayIndex = a);
        const u = `${t}[${a}]`;
        kl(e[a], u, r, o, n, l + 1, s, i);
      }
      return;
    }
    if (typeof e == "object") {
      if (n.has(e)) {
        r[t] = "[Circular]", o.add(t);
        return;
      }
      n.add(e);
      const a = Object.keys(e);
      if (a.length === 0) {
        r[t] = null, o.add(t);
        return;
      }
      for (const u of a) {
        const c = t ? `${t}.${u}` : u;
        kl(e[u], c, r, o, n, l + 1, s, i);
      }
      return;
    }
    r[t] = e, o.add(t);
  }
  function _b(e, t = 10) {
    const r = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, n = [];
    for (const s of e) {
      const i = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const u of Object.keys(s)) kl(s[u], u, i, r, a, 1, t, o);
      else kl(s, "_value", i, r, a, 0, t, o);
      n.push(i);
    }
    const l = Gb([
      ...r
    ]);
    for (const s of n) for (const i of l) i in s || (s[i] = null);
    return {
      paths: l,
      rows: n,
      maxDepth: o.maxDepth,
      maxArrayIndex: o.maxArrayIndex
    };
  }
  function Gb(e) {
    return e.sort((t, r) => {
      const o = Ta(t), n = Ta(r), l = Math.min(o.length, n.length);
      for (let s = 0; s < l; s++) {
        const i = o[s], a = n[s], u = Aa(i), c = Aa(a);
        if (u !== null && c !== null) {
          if (u !== c) return u - c;
          continue;
        }
        if (i !== a) return i < a ? -1 : 1;
      }
      return o.length - n.length;
    });
  }
  function Ta(e) {
    return e.split(/\./).flatMap((t) => {
      const r = [], n = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (n) {
        n[1] && r.push(n[1]);
        const l = n[2].match(/\[\d+\]/g);
        l && r.push(...l);
      } else r.push(t);
      return r;
    });
  }
  function Aa(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Vb = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function fu(e, t) {
    const r = performance.now(), o = {
      ...Vb,
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
    const n = _b(e, o.maxDepth), l = Nb(n.paths, n.rows, o.maxDistinct, o.dateConfidenceThreshold), s = n.paths.length * n.rows.length, i = l.reduce((c, p) => c + p.nullCount, 0), a = s > 0 ? Math.round(i / s * 1e3) / 10 : 0, u = Math.round((performance.now() - r) * 100) / 100;
    return {
      columns: l,
      rows: n.rows,
      meta: {
        rowCount: n.rows.length,
        columnCount: l.length,
        maxDepth: n.maxDepth,
        maxArrayIndex: n.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: i,
        nullPercentage: a,
        analysisTimeMs: u
      }
    };
  }
  function Bb(e, t) {
    return d.useMemo(() => fu(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Wb({ open: e, onClose: t, columns: r, onSave: o, theme: n, data: l, socket: s }) {
    const [i, a] = d.useState(r), [u, c] = d.useState(null), [p, g] = d.useState([]), [b, h] = d.useState(false), [m, x] = d.useState(false), v = d.useRef(false), w = d.useRef(() => Promise.resolve()), k = d.useRef(r), L = d.useMemo(() => JSON.stringify(r), [
      r
    ]), F = d.useMemo(() => JSON.stringify(i) !== L, [
      i,
      L
    ]);
    d.useEffect(() => {
      e && (a(r), k.current = r, c(r.length > 0 ? r[0].path : null), v.current = false);
    }, [
      e,
      r
    ]), d.useEffect(() => {
      e && !v.current && (v.current = true, w.current());
    }, [
      e
    ]);
    const I = d.useCallback(async () => {
      h(true);
      try {
        const E = l.oid;
        if (!E) return;
        const N = await s.getState(E);
        if ((N == null ? void 0 : N.val) === null || (N == null ? void 0 : N.val) === void 0) return;
        let T;
        const P = N.val;
        if (typeof P == "string") try {
          const B = JSON.parse(P);
          T = Array.isArray(B) ? B : [
            B
          ];
        } catch {
          return;
        }
        else if (Array.isArray(P)) T = P;
        else if (typeof P == "object" && P !== null) T = [
          P
        ];
        else return;
        const A = l.tableMaxDepth || 10, R = fu(T, {
          maxDepth: A
        });
        g(R.columns);
        const z = new Map(k.current.map((B) => [
          B.path,
          B
        ])), _ = new Set(R.columns.map((B) => B.path)), H = k.current.filter((B) => _.has(B.path)), G = R.columns.filter((B) => !z.has(B.path)).map((B) => ({
          path: B.path,
          visible: true,
          headerName: B.path.split(".").pop() || B.path
        })), U = [
          ...H,
          ...G
        ];
        a(U), k.current = U, c((B) => B === null && U.length > 0 ? U[0].path : B);
      } catch {
      } finally {
        h(false);
      }
    }, [
      l,
      s
    ]);
    w.current = I;
    const j = d.useCallback((E) => {
      a((N) => N.map((T) => T.path === E.path ? E : T)), k.current = k.current.map((N) => N.path === E.path ? E : N);
    }, []), D = d.useCallback((E) => {
      a(E), k.current = E;
    }, []), S = d.useCallback(() => {
      o(i), t();
    }, [
      i,
      o,
      t
    ]), y = d.useCallback((E, N) => {
      if (N === "backdropClick" && F) {
        x(true);
        return;
      }
      t();
    }, [
      F,
      t
    ]), M = d.useMemo(() => u ? i.find((E) => E.path === u) : null, [
      u,
      i
    ]), $ = d.useMemo(() => u ? p.find((E) => E.path === u) : void 0, [
      u,
      p
    ]);
    return f.jsxs(wp, {
      theme: n,
      children: [
        f.jsxs(zp, {
          open: e,
          onClose: y,
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
            f.jsx(Np, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: f.jsxs(Ze, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  f.jsx(ye, {
                    variant: "h6",
                    children: oe.t("json_table_column_editor_title")
                  }),
                  f.jsx(Et, {
                    onClick: () => y(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: f.jsx(Vc, {})
                  })
                ]
              })
            }),
            f.jsxs(_p, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                overflow: "hidden"
              },
              children: [
                f.jsx(Ze, {
                  sx: {
                    width: "40%",
                    minWidth: 280,
                    borderRight: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: f.jsx(qm, {
                    columns: i,
                    discoveredColumns: p,
                    selectedPath: u,
                    onSelect: c,
                    onChange: D,
                    onRefresh: I,
                    loading: b
                  })
                }),
                f.jsx(Ze, {
                  sx: {
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: M ? f.jsx(Sb, {
                    column: M,
                    discoveredColumn: $,
                    onChange: j
                  }) : f.jsx(Ze, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%"
                    },
                    children: f.jsx(ye, {
                      variant: "body2",
                      color: "text.secondary",
                      children: i.length > 0 ? oe.t("json_table_select_column") : oe.t("json_table_no_columns")
                    })
                  })
                })
              ]
            }),
            f.jsxs(Ih, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                f.jsx(_o, {
                  onClick: () => y(),
                  children: oe.t("cancel")
                }),
                f.jsx(_o, {
                  variant: "contained",
                  onClick: S,
                  disabled: !F,
                  children: oe.t("save")
                })
              ]
            })
          ]
        }),
        f.jsx(sm, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => x(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: f.jsx(If, {
            severity: "warning",
            onClose: () => x(false),
            children: oe.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Ub(e, t, r, o) {
    const n = e.name || "columnConfig", l = o.context.theme, [s, i] = d.useState(false), a = d.useMemo(() => cu(t[n]), [
      t,
      n
    ]), u = a.filter((h) => h.visible).length, c = a.length, p = a.some((h) => h.format), g = a.some((h) => h.cellStyle && h.cellStyle.length > 0), b = d.useCallback((h) => {
      r({
        [n]: JSON.stringify(h)
      });
    }, [
      n,
      r
    ]);
    return f.jsxs(Ze, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        f.jsx(_o, {
          variant: "outlined",
          startIcon: f.jsx(Bm, {}),
          onClick: () => i(true),
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          children: oe.t("json_table_configure_columns")
        }),
        c > 0 && f.jsxs(ye, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: "block"
          },
          children: [
            u,
            " / ",
            c,
            " ",
            oe.t("json_table_columns_visible"),
            p && ` \xB7 ${oe.t("json_table_has_formatting")}`,
            g && ` \xB7 ${oe.t("json_table_has_styling")}`
          ]
        }),
        f.jsx(Wb, {
          open: s,
          onClose: () => i(false),
          columns: a,
          onSave: b,
          theme: l,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const qb = () => [
    {
      label: "",
      type: "custom",
      component: () => f.jsx(Hr, {
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
      component: () => f.jsx(Hr, {
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
      component: () => f.jsx(Hr, {
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
      component: () => f.jsx(Hr, {
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
      component: () => f.jsx(Hr, {
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
      component: () => f.jsx(Hr, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, r, o) => f.jsx(us, {
        field: e,
        data: t,
        onDataChange: r,
        props: o
      })
    },
    {
      name: "tableHeaderTextColor",
      label: "json_table_header_text_color",
      default: "",
      type: "custom",
      component: (e, t, r, o) => f.jsx(us, {
        field: {
          ...e,
          noGradient: true
        },
        data: t,
        onDataChange: r,
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
      component: () => f.jsx(Hr, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, r, o) => f.jsx(us, {
        field: e,
        data: t,
        onDataChange: r,
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
      component: () => f.jsx(Hr, {
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
      component: () => f.jsx(Hr, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Ub
    }
  ], gu = d.createContext(void 0);
  function Fe() {
    const e = d.useContext(gu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const hu = d.createContext(void 0), ae = () => {
    const e = d.useContext(hu);
    if (!e) throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
    return e;
  }, Kb = parseInt(d.version, 10), ze = (e) => {
    if (Kb >= 19) {
      const t = (r) => e(r, r.ref ?? null);
      return t.displayName = e.displayName ?? e.name, t;
    }
    return d.forwardRef(e);
  };
  var El = /* @__PURE__ */ Symbol("NOT_FOUND");
  function Yb(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
  }
  function Xb(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
  }
  function Qb(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every((r) => typeof r == "function")) {
      const r = e.map((o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o).join(", ");
      throw new TypeError(`${t}[${r}]`);
    }
  }
  var Da = (e) => Array.isArray(e) ? e : [
    e
  ];
  function Zb(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return Qb(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
  }
  function Jb(e, t) {
    const r = [], { length: o } = e;
    for (let n = 0; n < o; n++) r.push(e[n].apply(null, t));
    return r;
  }
  function eC(e) {
    let t;
    return {
      get(r) {
        return t && e(t.key, r) ? t.value : El;
      },
      put(r, o) {
        t = {
          key: r,
          value: o
        };
      },
      getEntries() {
        return t ? [
          t
        ] : [];
      },
      clear() {
        t = void 0;
      }
    };
  }
  function tC(e, t) {
    let r = [];
    function o(i) {
      const a = r.findIndex((u) => t(i, u.key));
      if (a > -1) {
        const u = r[a];
        return a > 0 && (r.splice(a, 1), r.unshift(u)), u.value;
      }
      return El;
    }
    function n(i, a) {
      o(i) === El && (r.unshift({
        key: i,
        value: a
      }), r.length > e && r.pop());
    }
    function l() {
      return r;
    }
    function s() {
      r = [];
    }
    return {
      get: o,
      put: n,
      getEntries: l,
      clear: s
    };
  }
  var rC = (e, t) => e === t;
  function oC(e) {
    return function(r, o) {
      if (r === null || o === null || r.length !== o.length) return false;
      const { length: n } = r;
      for (let l = 0; l < n; l++) if (!e(r[l], o[l])) return false;
      return true;
    };
  }
  function mu(e, t) {
    const r = typeof t == "object" ? t : {
      equalityCheck: t
    }, { equalityCheck: o = rC, maxSize: n = 1, resultEqualityCheck: l } = r, s = oC(o);
    let i = 0;
    const a = n <= 1 ? eC(s) : tC(n, s);
    function u() {
      let c = a.get(arguments);
      if (c === El) {
        if (c = e.apply(null, arguments), i++, l) {
          const g = a.getEntries().find((b) => l(b.value, c));
          g && (c = g.value, i !== 0 && i--);
        }
        a.put(arguments, c);
      }
      return c;
    }
    return u.clearCache = () => {
      a.clear(), u.resetResultsCount();
    }, u.resultsCount = () => i, u.resetResultsCount = () => {
      i = 0;
    }, u;
  }
  var nC = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  }, lC = typeof WeakRef < "u" ? WeakRef : nC, sC = 0, $a = 1;
  function pl() {
    return {
      s: sC,
      v: void 0,
      o: null,
      p: null
    };
  }
  function bu(e, t = {}) {
    let r = pl();
    const { resultEqualityCheck: o } = t;
    let n, l = 0;
    function s() {
      var _a2;
      let i = r;
      const { length: a } = arguments;
      for (let p = 0, g = a; p < g; p++) {
        const b = arguments[p];
        if (typeof b == "function" || typeof b == "object" && b !== null) {
          let h = i.o;
          h === null && (i.o = h = /* @__PURE__ */ new WeakMap());
          const m = h.get(b);
          m === void 0 ? (i = pl(), h.set(b, i)) : i = m;
        } else {
          let h = i.p;
          h === null && (i.p = h = /* @__PURE__ */ new Map());
          const m = h.get(b);
          m === void 0 ? (i = pl(), h.set(b, i)) : i = m;
        }
      }
      const u = i;
      let c;
      if (i.s === $a) c = i.v;
      else if (c = e.apply(null, arguments), l++, o) {
        const p = ((_a2 = n == null ? void 0 : n.deref) == null ? void 0 : _a2.call(n)) ?? n;
        p != null && o(p, c) && (c = p, l !== 0 && l--), n = typeof c == "object" && c !== null || typeof c == "function" ? new lC(c) : c;
      }
      return u.s = $a, u.v = c, c;
    }
    return s.clearCache = () => {
      r = pl(), s.resetResultsCount();
    }, s.resultsCount = () => l, s.resetResultsCount = () => {
      l = 0;
    }, s;
  }
  function Cu(e, ...t) {
    const r = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: t
    } : e, o = (...n) => {
      let l = 0, s = 0, i, a = {}, u = n.pop();
      typeof u == "object" && (a = u, u = n.pop()), Yb(u, `createSelector expects an output function after the inputs, but received: [${typeof u}]`);
      const c = {
        ...r,
        ...a
      }, { memoize: p, memoizeOptions: g = [], argsMemoize: b = bu, argsMemoizeOptions: h = [] } = c, m = Da(g), x = Da(h), v = Zb(n), w = p(function() {
        return l++, u.apply(null, arguments);
      }, ...m), k = b(function() {
        s++;
        const F = Jb(v, arguments);
        return i = w.apply(null, F), i;
      }, ...x);
      return Object.assign(k, {
        resultFunc: u,
        memoizedResultFunc: w,
        dependencies: v,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => i,
        recomputations: () => l,
        resetRecomputations: () => {
          l = 0;
        },
        memoize: p,
        argsMemoize: b
      });
    };
    return Object.assign(o, {
      withTypes: () => o
    }), o;
  }
  var yu = Cu(bu), iC = Object.assign((e, t = yu) => {
    Xb(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const r = Object.keys(e), o = r.map((l) => e[l]);
    return t(o, (...l) => l.reduce((s, i, a) => (s[r[a]] = i, s), {}));
  }, {
    withTypes: () => iC
  });
  const aC = Object.is;
  function wu(e, t) {
    if (e === t) return true;
    if (!(e instanceof Object) || !(t instanceof Object)) return false;
    let r = 0, o = 0;
    for (const n in e) if (r += 1, !aC(e[n], t[n]) || !(n in t)) return false;
    for (const n in t) o += 1;
    return r === o;
  }
  var xu = {
    exports: {}
  }, vu = {};
  var Uo = d;
  function cC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var uC = typeof Object.is == "function" ? Object.is : cC, dC = Uo.useState, pC = Uo.useEffect, fC = Uo.useLayoutEffect, gC = Uo.useDebugValue;
  function hC(e, t) {
    var r = t(), o = dC({
      inst: {
        value: r,
        getSnapshot: t
      }
    }), n = o[0].inst, l = o[1];
    return fC(function() {
      n.value = r, n.getSnapshot = t, ms(n) && l({
        inst: n
      });
    }, [
      e,
      r,
      t
    ]), pC(function() {
      return ms(n) && l({
        inst: n
      }), e(function() {
        ms(n) && l({
          inst: n
        });
      });
    }, [
      e
    ]), gC(r), r;
  }
  function ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !uC(e, r);
    } catch {
      return true;
    }
  }
  function mC(e, t) {
    return t();
  }
  var bC = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? mC : hC;
  vu.useSyncExternalStore = Uo.useSyncExternalStore !== void 0 ? Uo.useSyncExternalStore : bC;
  xu.exports = vu;
  var Ci = xu.exports;
  function Su(e) {
    return e.acceptsApiRef;
  }
  function La(e, t) {
    return Su(t) ? t(e) : t(e.current.state);
  }
  function bs(e, t, r, o) {
    return Su(t) ? t(e, r) : t(e.current.state, o);
  }
  const Pu = Object.is, yi = wu, CC = (e, t) => e === t ? true : e.length === t.length && e.every((r, o) => r === t[o]), yC = (e, t) => {
    let r = Object.is;
    return t instanceof Array ? r = CC : t instanceof Object && (r = yi), r(e, t);
  }, Iu = () => ({
    state: null,
    equals: null,
    selector: null,
    args: void 0
  }), Tl = [], Mu = () => null, X = (e, t, r = Pu) => {
    const o = Lr(Iu), n = o.current.selector !== null, [l, s] = d.useState(n ? null : La(e, t));
    o.current.state = l, o.current.equals = r, o.current.selector = t;
    const i = d.useCallback(() => (o.current.subscription || (o.current.subscription = e.current.store.subscribe(() => {
      const u = La(e, o.current.selector);
      o.current.equals(o.current.state, u) || (o.current.state = u, s(u));
    })), null), Tl), a = d.useCallback(() => () => {
      o.current.subscription && (o.current.subscription(), o.current.subscription = void 0);
    }, Tl);
    return Ci.useSyncExternalStore(a, i, Mu), l;
  }, Dn = (e, t, r = void 0, o = Pu) => {
    const n = Lr(Iu), l = n.current.selector !== null, [s, i] = d.useState(l ? null : bs(e, t, r, e.current.instanceId));
    n.current.state = s, n.current.equals = o, n.current.selector = t;
    const a = n.current.args;
    if (n.current.args = r, l && !yC(a, r)) {
      const p = bs(e, n.current.selector, n.current.args, e.current.instanceId);
      n.current.equals(n.current.state, p) || (n.current.state = p, i(p));
    }
    const u = d.useCallback(() => (n.current.subscription || (n.current.subscription = e.current.store.subscribe(() => {
      const p = bs(e, n.current.selector, n.current.args, e.current.instanceId);
      n.current.equals(n.current.state, p) || (n.current.state = p, i(p));
    })), null), Tl), c = d.useCallback(() => () => {
      n.current.subscription && (n.current.subscription(), n.current.subscription = void 0);
    }, Tl);
    return Ci.useSyncExternalStore(c, u, Mu), s;
  }, wC = Cu({
    memoize: mu,
    memoizeOptions: {
      maxSize: 1,
      equalityCheck: Object.is
    }
  }), Ra = /* @__PURE__ */ new WeakMap();
  function Sr(e) {
    return "current" in e && "instanceId" in e.current;
  }
  const Pr = {
    id: "default"
  }, we = (e, t, r, o, n, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let i;
    if (e && t && r && o && n && l) i = (a, u) => {
      const c = Sr(a), p = u ?? (c ? a.current.instanceId : Pr), g = c ? a.current.state : a, b = e(g, p), h = t(g, p), m = r(g, p), x = o(g, p), v = n(g, p);
      return l(b, h, m, x, v);
    };
    else if (e && t && r && o && n) i = (a, u) => {
      const c = Sr(a), p = u ?? (c ? a.current.instanceId : Pr), g = c ? a.current.state : a, b = e(g, p), h = t(g, p), m = r(g, p), x = o(g, p);
      return n(b, h, m, x);
    };
    else if (e && t && r && o) i = (a, u) => {
      const c = Sr(a), p = u ?? (c ? a.current.instanceId : Pr), g = c ? a.current.state : a, b = e(g, p), h = t(g, p), m = r(g, p);
      return o(b, h, m);
    };
    else if (e && t && r) i = (a, u) => {
      const c = Sr(a), p = u ?? (c ? a.current.instanceId : Pr), g = c ? a.current.state : a, b = e(g, p), h = t(g, p);
      return r(b, h);
    };
    else if (e && t) i = (a, u) => {
      const c = Sr(a), p = u ?? (c ? a.current.instanceId : Pr), g = c ? a.current.state : a, b = e(g, p);
      return t(b);
    };
    else throw new Error("Missing arguments");
    return i.acceptsApiRef = true, i;
  }, Wn = (e, t, r, o, n, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let i;
    if (e && t && r && o && n && l) i = (a, u, c) => {
      const p = Sr(a), g = c ?? (p ? a.current.instanceId : Pr), b = p ? a.current.state : a, h = e(b, u, g), m = t(b, u, g), x = r(b, u, g), v = o(b, u, g), w = n(b, u, g);
      return l(h, m, x, v, w, u);
    };
    else if (e && t && r && o && n) i = (a, u, c) => {
      const p = Sr(a), g = c ?? (p ? a.current.instanceId : Pr), b = p ? a.current.state : a, h = e(b, u, g), m = t(b, u, g), x = r(b, u, g), v = o(b, u, g);
      return n(h, m, x, v, u);
    };
    else if (e && t && r && o) i = (a, u, c) => {
      const p = Sr(a), g = c ?? (p ? a.current.instanceId : Pr), b = p ? a.current.state : a, h = e(b, u, g), m = t(b, u, g), x = r(b, u, g);
      return o(h, m, x, u);
    };
    else if (e && t && r) i = (a, u, c) => {
      const p = Sr(a), g = c ?? (p ? a.current.instanceId : Pr), b = p ? a.current.state : a, h = e(b, u, g), m = t(b, u, g);
      return r(h, m, u);
    };
    else if (e && t) i = (a, u, c) => {
      const p = Sr(a), g = c ?? (p ? a.current.instanceId : Pr), b = p ? a.current.state : a, h = e(b, u, g);
      return t(h, u);
    };
    else throw new Error("Missing arguments");
    return i.acceptsApiRef = true, i;
  }, Qe = (...e) => {
    const t = (r, o) => {
      const n = Sr(r), l = n ? r.current.instanceId : o ?? Pr, s = n ? r.current.state : r, i = Ra.get(l), a = i ?? /* @__PURE__ */ new Map(), u = a == null ? void 0 : a.get(e);
      if (a && u) return u(s, l);
      const c = wC(...e);
      return i || Ra.set(l, a), a.set(e, c), c(s, l);
    };
    return t.acceptsApiRef = true, t;
  }, It = (e) => e.dimensions, Ul = we(It, (e) => e.columnsTotalWidth), wi = (e) => e.dimensions.rowHeight, xC = (e) => e.dimensions.contentSize.height, vC = (e) => e.dimensions.hasScrollX, SC = (e) => e.dimensions.hasScrollY, Ou = (e) => e.dimensions.columnsTotalWidth < e.dimensions.viewportOuterSize.width, PC = (e) => e.dimensions.headerHeight, IC = (e) => e.dimensions.groupHeaderHeight, Fu = (e) => e.dimensions.hasScrollY ? e.dimensions.scrollbarSize : 0, MC = (e) => {
    const t = e.dimensions.hasScrollX ? e.dimensions.scrollbarSize : 0, r = e.dimensions.viewportOuterSize.height - e.dimensions.minimumSize.height > 0;
    return !(t === 0 && !r);
  };
  function Wr(e) {
    return d.memo(e, wu);
  }
  const ku = {
    noRowsLabel: "No rows",
    noResultsOverlayLabel: "No results found.",
    toolbarDensity: "Density",
    toolbarDensityLabel: "Density",
    toolbarDensityCompact: "Compact",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Comfortable",
    toolbarColumns: "Columns",
    toolbarColumnsLabel: "Select columns",
    toolbarFilters: "Filters",
    toolbarFiltersLabel: "Show filters",
    toolbarFiltersTooltipHide: "Hide filters",
    toolbarFiltersTooltipShow: "Show filters",
    toolbarFiltersTooltipActive: (e) => e !== 1 ? `${e} active filters` : `${e} active filter`,
    toolbarQuickFilterPlaceholder: "Search\u2026",
    toolbarQuickFilterLabel: "Search",
    toolbarQuickFilterDeleteIconLabel: "Clear",
    toolbarExport: "Export",
    toolbarExportLabel: "Export",
    toolbarExportCSV: "Download as CSV",
    toolbarExportPrint: "Print",
    toolbarExportExcel: "Download as Excel",
    columnsManagementSearchTitle: "Search",
    columnsManagementNoColumns: "No columns",
    columnsManagementShowHideAllText: "Show/Hide All",
    columnsManagementReset: "Reset",
    columnsManagementDeleteIconLabel: "Clear",
    filterPanelAddFilter: "Add filter",
    filterPanelRemoveAll: "Remove all",
    filterPanelDeleteIconLabel: "Delete",
    filterPanelLogicOperator: "Logic operator",
    filterPanelOperator: "Operator",
    filterPanelOperatorAnd: "And",
    filterPanelOperatorOr: "Or",
    filterPanelColumns: "Columns",
    filterPanelInputLabel: "Value",
    filterPanelInputPlaceholder: "Filter value",
    filterOperatorContains: "contains",
    filterOperatorDoesNotContain: "does not contain",
    filterOperatorEquals: "equals",
    filterOperatorDoesNotEqual: "does not equal",
    filterOperatorStartsWith: "starts with",
    filterOperatorEndsWith: "ends with",
    filterOperatorIs: "is",
    filterOperatorNot: "is not",
    filterOperatorAfter: "is after",
    filterOperatorOnOrAfter: "is on or after",
    filterOperatorBefore: "is before",
    filterOperatorOnOrBefore: "is on or before",
    filterOperatorIsEmpty: "is empty",
    filterOperatorIsNotEmpty: "is not empty",
    filterOperatorIsAnyOf: "is any of",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Contains",
    headerFilterOperatorDoesNotContain: "Does not contain",
    headerFilterOperatorEquals: "Equals",
    headerFilterOperatorDoesNotEqual: "Does not equal",
    headerFilterOperatorStartsWith: "Starts with",
    headerFilterOperatorEndsWith: "Ends with",
    headerFilterOperatorIs: "Is",
    headerFilterOperatorNot: "Is not",
    headerFilterOperatorAfter: "Is after",
    headerFilterOperatorOnOrAfter: "Is on or after",
    headerFilterOperatorBefore: "Is before",
    headerFilterOperatorOnOrBefore: "Is on or before",
    headerFilterOperatorIsEmpty: "Is empty",
    headerFilterOperatorIsNotEmpty: "Is not empty",
    headerFilterOperatorIsAnyOf: "Is any of",
    "headerFilterOperator=": "Equals",
    "headerFilterOperator!=": "Not equals",
    "headerFilterOperator>": "Greater than",
    "headerFilterOperator>=": "Greater than or equal to",
    "headerFilterOperator<": "Less than",
    "headerFilterOperator<=": "Less than or equal to",
    filterValueAny: "any",
    filterValueTrue: "true",
    filterValueFalse: "false",
    columnMenuLabel: "Menu",
    columnMenuAriaLabel: (e) => `${e} column menu`,
    columnMenuShowColumns: "Show columns",
    columnMenuManageColumns: "Manage columns",
    columnMenuFilter: "Filter",
    columnMenuHideColumn: "Hide column",
    columnMenuUnsort: "Unsort",
    columnMenuSortAsc: "Sort by ASC",
    columnMenuSortDesc: "Sort by DESC",
    columnHeaderFiltersTooltipActive: (e) => e !== 1 ? `${e} active filters` : `${e} active filter`,
    columnHeaderFiltersLabel: "Show filters",
    columnHeaderSortIconLabel: "Sort",
    footerRowSelected: (e) => e !== 1 ? `${e.toLocaleString()} rows selected` : `${e.toLocaleString()} row selected`,
    footerTotalRows: "Total Rows:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} of ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Checkbox selection",
    checkboxSelectionSelectAllRows: "Select all rows",
    checkboxSelectionUnselectAllRows: "Unselect all rows",
    checkboxSelectionSelectRow: "Select row",
    checkboxSelectionUnselectRow: "Unselect row",
    booleanCellTrueLabel: "yes",
    booleanCellFalseLabel: "no",
    actionsCellMore: "more",
    pinToLeft: "Pin to left",
    pinToRight: "Pin to right",
    unpin: "Unpin",
    treeDataGroupingHeaderName: "Group",
    treeDataExpand: "see children",
    treeDataCollapse: "hide children",
    groupingColumnHeaderName: "Group",
    groupColumn: (e) => `Group by ${e}`,
    unGroupColumn: (e) => `Stop grouping by ${e}`,
    detailPanelToggle: "Detail panel toggle",
    expandDetailPanel: "Expand",
    collapseDetailPanel: "Collapse",
    MuiTablePagination: {},
    rowReorderingHeaderName: "Row reordering",
    aggregationMenuItemHeader: "Aggregation",
    aggregationFunctionLabelSum: "sum",
    aggregationFunctionLabelAvg: "avg",
    aggregationFunctionLabelMin: "min",
    aggregationFunctionLabelMax: "max",
    aggregationFunctionLabelSize: "size"
  };
  function Ae(e) {
    return mt("MuiDataGrid", e);
  }
  const O = gt("MuiDataGrid", [
    "actionsCell",
    "aggregationColumnHeader",
    "aggregationColumnHeader--alignLeft",
    "aggregationColumnHeader--alignCenter",
    "aggregationColumnHeader--alignRight",
    "aggregationColumnHeaderLabel",
    "autoHeight",
    "autosizing",
    "booleanCell",
    "cell--editable",
    "cell--editing",
    "cell--flex",
    "cell--textCenter",
    "cell--textLeft",
    "cell--textRight",
    "cell--rangeTop",
    "cell--rangeBottom",
    "cell--rangeLeft",
    "cell--rangeRight",
    "cell--pinnedLeft",
    "cell--pinnedRight",
    "cell--selectionMode",
    "cell",
    "cellCheckbox",
    "cellEmpty",
    "cellSkeleton",
    "cellOffsetLeft",
    "checkboxInput",
    "columnHeader",
    "columnHeader--alignCenter",
    "columnHeader--alignLeft",
    "columnHeader--alignRight",
    "columnHeader--dragging",
    "columnHeader--moving",
    "columnHeader--numeric",
    "columnHeader--sortable",
    "columnHeader--sorted",
    "columnHeader--filtered",
    "columnHeader--pinnedLeft",
    "columnHeader--pinnedRight",
    "columnHeader--last",
    "columnHeader--lastUnpinned",
    "columnHeader--siblingFocused",
    "columnHeaderCheckbox",
    "columnHeaderDraggableContainer",
    "columnHeaderTitle",
    "columnHeaderTitleContainer",
    "columnHeaderTitleContainerContent",
    "columnHeader--filledGroup",
    "columnHeader--emptyGroup",
    "columnHeaders",
    "columnSeparator--resizable",
    "columnSeparator--resizing",
    "columnSeparator--sideLeft",
    "columnSeparator--sideRight",
    "columnSeparator",
    "columnsManagement",
    "columnsManagementRow",
    "columnsManagementHeader",
    "columnsManagementSearchInput",
    "columnsManagementFooter",
    "container--top",
    "container--bottom",
    "detailPanel",
    "detailPanels",
    "detailPanelToggleCell",
    "detailPanelToggleCell--expanded",
    "footerCell",
    "panel",
    "panelHeader",
    "panelWrapper",
    "panelContent",
    "panelFooter",
    "paper",
    "editBooleanCell",
    "editInputCell",
    "filler",
    "filler--borderBottom",
    "filler--pinnedLeft",
    "filler--pinnedRight",
    "filterForm",
    "filterFormDeleteIcon",
    "filterFormLogicOperatorInput",
    "filterFormColumnInput",
    "filterFormOperatorInput",
    "filterFormValueInput",
    "filterIcon",
    "footerContainer",
    "headerFilterRow",
    "iconButtonContainer",
    "iconSeparator",
    "main",
    "main--hasPinnedRight",
    "main--hasSkeletonLoadingOverlay",
    "menu",
    "menuIcon",
    "menuIconButton",
    "menuOpen",
    "menuList",
    "overlay",
    "overlayWrapper",
    "overlayWrapperInner",
    "root",
    "root--densityStandard",
    "root--densityComfortable",
    "root--densityCompact",
    "root--disableUserSelection",
    "root--noToolbar",
    "row",
    "row--editable",
    "row--editing",
    "row--firstVisible",
    "row--lastVisible",
    "row--dragging",
    "row--dynamicHeight",
    "row--detailPanelExpanded",
    "row--borderBottom",
    "rowReorderCellPlaceholder",
    "rowCount",
    "rowReorderCellContainer",
    "rowReorderCell",
    "rowReorderCell--draggable",
    "rowSkeleton",
    "scrollArea--left",
    "scrollArea--right",
    "scrollArea--up",
    "scrollArea--down",
    "scrollArea",
    "scrollbar",
    "scrollbar--vertical",
    "scrollbar--horizontal",
    "scrollbarFiller",
    "scrollbarFiller--header",
    "scrollbarFiller--borderTop",
    "scrollbarFiller--borderBottom",
    "scrollbarFiller--pinnedRight",
    "selectedRowCount",
    "sortButton",
    "sortIcon",
    "toolbarContainer",
    "toolbarFilterList",
    "virtualScroller",
    "virtualScroller--hasScrollX",
    "virtualScrollerContent",
    "virtualScrollerContent--overflowed",
    "virtualScrollerRenderZone",
    "pinnedColumns",
    "withVerticalBorder",
    "withBorderColor",
    "cell--withRightBorder",
    "cell--withLeftBorder",
    "columnHeader--withRightBorder",
    "columnHeader--withLeftBorder",
    "treeDataGroupingCell",
    "treeDataGroupingCellToggle",
    "treeDataGroupingCellLoadingContainer",
    "groupingCriteriaCell",
    "groupingCriteriaCellToggle",
    "groupingCriteriaCellLoadingContainer",
    "pinnedRows",
    "pinnedRows--top",
    "pinnedRows--bottom",
    "pinnedRowsRenderZone"
  ]), ja = 1e3;
  class OC {
    constructor(t = ja) {
      this.timeouts = /* @__PURE__ */ new Map(), this.cleanupTimeout = ja, this.cleanupTimeout = t;
    }
    register(t, r, o) {
      this.timeouts || (this.timeouts = /* @__PURE__ */ new Map());
      const n = setTimeout(() => {
        typeof r == "function" && r(), this.timeouts.delete(o.cleanupToken);
      }, this.cleanupTimeout);
      this.timeouts.set(o.cleanupToken, n);
    }
    unregister(t) {
      const r = this.timeouts.get(t.cleanupToken);
      r && (this.timeouts.delete(t.cleanupToken), clearTimeout(r));
    }
    reset() {
      this.timeouts && (this.timeouts.forEach((t, r) => {
        this.unregister({
          cleanupToken: r
        });
      }), this.timeouts = void 0);
    }
  }
  class FC {
    constructor() {
      this.registry = new FinalizationRegistry((t) => {
        typeof t == "function" && t();
      });
    }
    register(t, r, o) {
      this.registry.register(t, r, o);
    }
    unregister(t) {
      this.registry.unregister(t);
    }
    reset() {
    }
  }
  var gr = (function(e) {
    return e.DataGrid = "DataGrid", e.DataGridPro = "DataGridPro", e.DataGridPremium = "DataGridPremium", e;
  })(gr || {});
  class kC {
  }
  function EC(e) {
    let t = 0;
    return function(o, n, l, s) {
      e.registry === null && (e.registry = typeof FinalizationRegistry < "u" ? new FC() : new OC());
      const [i] = d.useState(new kC()), a = d.useRef(null), u = d.useRef(null);
      u.current = l;
      const c = d.useRef(null);
      if (!a.current && u.current) {
        const p = (g, b, h) => {
          var _a2;
          b && !b.defaultMuiPrevented && ((_a2 = u.current) == null ? void 0 : _a2.call(u, g, b, h));
        };
        a.current = o.current.subscribeEvent(n, p, s), t += 1, c.current = {
          cleanupToken: t
        }, e.registry.register(i, () => {
          var _a2;
          (_a2 = a.current) == null ? void 0 : _a2.call(a), a.current = null, c.current = null;
        }, c.current);
      } else !u.current && a.current && (a.current(), a.current = null, c.current && (e.registry.unregister(c.current), c.current = null));
      d.useEffect(() => {
        if (!a.current && u.current) {
          const p = (g, b, h) => {
            var _a2;
            b && !b.defaultMuiPrevented && ((_a2 = u.current) == null ? void 0 : _a2.call(u, g, b, h));
          };
          a.current = o.current.subscribeEvent(n, p, s);
        }
        return c.current && e.registry && (e.registry.unregister(c.current), c.current = null), () => {
          var _a2;
          (_a2 = a.current) == null ? void 0 : _a2.call(a), a.current = null;
        };
      }, [
        o,
        n,
        s
      ]);
    };
  }
  const TC = {
    registry: null
  }, le = EC(TC), AC = {
    isFirst: true
  };
  function rt(e, t, r) {
    le(e, t, r, AC);
  }
  const DC = 0.7, $C = 1.3, LC = {
    compact: DC,
    comfortable: $C,
    standard: 1
  }, Do = (e) => e.density, Qo = we(Do, (e) => LC[e]), RC = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "hasFocus",
    "isValidating",
    "debounceMs",
    "isProcessingProps",
    "onValueChange"
  ], jC = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "editInputCell"
      ]
    }, Ae, t);
  }, HC = se(si, {
    name: "MuiDataGrid",
    slot: "EditInputCell",
    overridesResolver: (e, t) => t.editInputCell
  })(({ theme: e }) => C({}, e.typography.body2, {
    padding: "1px 0",
    "& input": {
      padding: "0 16px",
      height: "100%"
    }
  })), zC = ze((e, t) => {
    const r = ae(), { id: o, value: n, field: l, colDef: s, hasFocus: i, debounceMs: a = 200, isProcessingProps: u, onValueChange: c } = e, p = fe(e, RC), g = Fe(), b = d.useRef(null), [h, m] = d.useState(n), x = jC(r), v = d.useCallback(async (k) => {
      const L = k.target.value;
      c && await c(k, L);
      const F = g.current.getColumn(l);
      let I = L;
      F.valueParser && (I = F.valueParser(L, g.current.getRow(o), F, g)), m(I), g.current.setEditCellValue({
        id: o,
        field: l,
        value: I,
        debounceMs: a,
        unstable_skipValueParser: true
      }, k);
    }, [
      g,
      a,
      l,
      o,
      c
    ]), w = g.current.unstable_getEditCellMeta(o, l);
    return d.useEffect(() => {
      (w == null ? void 0 : w.changeReason) !== "debouncedSetEditCellValue" && m(n);
    }, [
      w,
      n
    ]), Tt(() => {
      i && b.current.focus();
    }, [
      i
    ]), f.jsx(HC, C({
      inputRef: b,
      className: x.root,
      ownerState: r,
      fullWidth: true,
      type: s.type === "number" ? s.type : "text",
      value: h ?? "",
      onChange: v,
      endAdornment: u ? f.jsx(r.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : void 0
    }, p, {
      ref: t
    }));
  }), NC = (e) => f.jsx(zC, C({}, e)), Cr = (e) => e.rows, Un = we(Cr, (e) => e.totalRowCount), _C = we(Cr, (e) => e.loading), GC = we(Cr, (e) => e.totalTopLevelRowCount), ur = we(Cr, (e) => e.dataRowIdToModelLookup), Ha = we(Cr, (e) => e.dataRowIdToIdLookup), xt = we(Cr, (e) => e.tree), VC = we(Cr, (e) => e.groupsToFetch), BC = we(Cr, (e) => e.groupingName), za = we(Cr, (e) => e.treeDepths), Co = Qe(Cr, (e) => {
    const t = Object.entries(e.treeDepths);
    return t.length === 0 ? 1 : (t.filter(([, r]) => r > 0).map(([r]) => Number(r)).sort((r, o) => o - r)[0] ?? 0) + 1;
  }), yn = we(Cr, (e) => e.dataRowIds), WC = we(Cr, (e) => e == null ? void 0 : e.additionalRowGroups), Zo = Qe(WC, (e) => {
    var _a2, _b2;
    const t = e == null ? void 0 : e.pinnedRows;
    return {
      bottom: ((_a2 = t == null ? void 0 : t.bottom) == null ? void 0 : _a2.map((r) => ({
        id: r.id,
        model: r.model ?? {}
      }))) ?? [],
      top: ((_b2 = t == null ? void 0 : t.top) == null ? void 0 : _b2.map((r) => ({
        id: r.id,
        model: r.model ?? {}
      }))) ?? []
    };
  }), Eu = we(Zo, (e) => {
    var _a2, _b2;
    return (((_a2 = e == null ? void 0 : e.top) == null ? void 0 : _a2.length) || 0) + (((_b2 = e == null ? void 0 : e.bottom) == null ? void 0 : _b2.length) || 0);
  }), Tu = (e, t) => t && e.length > 1 ? [
    e[0]
  ] : e, Na = (e, t) => (r) => C({}, r, {
    sorting: C({}, r.sorting, {
      sortModel: Tu(e, t)
    })
  }), UC = (e) => e === "desc", qC = (e, t) => {
    const r = t.current.getColumn(e.field);
    if (!r || e.sort === null) return null;
    let o;
    return r.getSortComparator ? o = r.getSortComparator(e.sort) : o = UC(e.sort) ? (...l) => -1 * r.sortComparator(...l) : r.sortComparator, o ? {
      getSortCellParams: (l) => ({
        id: l,
        field: r.field,
        rowNode: xt(t)[l],
        value: t.current.getCellValue(l, r.field),
        api: t.current
      }),
      comparator: o
    } : null;
  }, KC = (e, t, r) => e.reduce((o, n, l) => {
    if (o !== 0) return o;
    const s = t.params[l], i = r.params[l];
    return o = n.comparator(s.value, i.value, s, i), o;
  }, 0), YC = (e, t) => {
    const r = e.map((o) => qC(o, t)).filter((o) => !!o);
    return r.length === 0 ? null : (o) => o.map((n) => ({
      node: n,
      params: r.map((l) => l.getSortCellParams(n.id))
    })).sort((n, l) => KC(r, n, l)).map((n) => n.node.id);
  }, _a = (e, t) => {
    const r = e.indexOf(t);
    return !t || r === -1 || r + 1 === e.length ? e[0] : e[r + 1];
  }, xi = (e, t) => e == null && t != null ? -1 : t == null && e != null ? 1 : e == null && t == null ? 0 : null, XC = new Intl.Collator(), QC = (e, t) => {
    const r = xi(e, t);
    return r !== null ? r : typeof e == "string" ? XC.compare(e.toString(), t.toString()) : e - t;
  }, Au = (e, t) => {
    const r = xi(e, t);
    return r !== null ? r : Number(e) - Number(t);
  }, Du = (e, t) => {
    const r = xi(e, t);
    return r !== null ? r : e > t ? 1 : e < t ? -1 : 0;
  }, ZC = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "tabIndex",
    "disabled",
    "isFilterActive",
    "clearButton",
    "InputProps",
    "variant"
  ];
  function ar(e) {
    var _a2;
    const { item: t, applyValue: r, type: o, apiRef: n, focusElementRef: l, tabIndex: s, disabled: i, clearButton: a, InputProps: u, variant: c = "standard" } = e, p = fe(e, ZC), g = Jt(), [b, h] = d.useState(Cs(t.value)), [m, x] = d.useState(false), v = it(), w = ae(), k = d.useCallback((L) => {
      const F = Cs(L.target.value);
      h(F), x(true), g.start(w.filterDebounceMs, () => {
        const I = C({}, t, {
          value: o === "number" && !Number.isNaN(Number(F)) ? Number(F) : F,
          fromInput: v
        });
        r(I), x(false);
      });
    }, [
      g,
      w.filterDebounceMs,
      t,
      o,
      v,
      r
    ]);
    return d.useEffect(() => {
      (t.fromInput !== v || t.value == null) && h(Cs(t.value));
    }, [
      v,
      t
    ]), f.jsx(w.slots.baseTextField, C({
      id: v,
      label: n.current.getLocaleText("filterPanelInputLabel"),
      placeholder: n.current.getLocaleText("filterPanelInputPlaceholder"),
      value: b ?? "",
      onChange: k,
      variant: c,
      type: o || "text",
      InputProps: C({}, m || a ? {
        endAdornment: m ? f.jsx(w.slots.loadIcon, {
          fontSize: "small",
          color: "action"
        }) : a
      } : {}, {
        disabled: i
      }, u, {
        inputProps: C({
          tabIndex: s
        }, u == null ? void 0 : u.inputProps)
      }),
      InputLabelProps: {
        shrink: true
      },
      inputRef: l
    }, p, (_a2 = w.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function Cs(e) {
    if (!(e == null || e === "")) return String(e);
  }
  function JC(e) {
    return typeof e == "number" && !Number.isNaN(e);
  }
  function ey(e) {
    return typeof e == "function";
  }
  function vi(e) {
    return typeof e == "object" && e !== null;
  }
  function ty() {
    try {
      const e = "__some_random_key_you_are_not_going_to_use__";
      return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), true;
    } catch {
      return false;
    }
  }
  function Al(e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  const tr = (e, t, r) => Math.max(t, Math.min(r, e));
  function Ga(e, t) {
    return Array.from({
      length: t - e
    }).map((r, o) => e + o);
  }
  function Tr(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      if (Array.isArray(e)) {
        const n = e.length;
        if (n !== t.length) return false;
        for (let l = 0; l < n; l += 1) if (!Tr(e[l], t[l])) return false;
        return true;
      }
      if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return false;
        const n = Array.from(e.entries());
        for (let l = 0; l < n.length; l += 1) if (!t.has(n[l][0])) return false;
        for (let l = 0; l < n.length; l += 1) {
          const s = n[l];
          if (!Tr(s[1], t.get(s[0]))) return false;
        }
        return true;
      }
      if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return false;
        const n = Array.from(e.entries());
        for (let l = 0; l < n.length; l += 1) if (!t.has(n[l][0])) return false;
        return true;
      }
      if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        const n = e.length;
        if (n !== t.length) return false;
        for (let l = 0; l < n; l += 1) if (e[l] !== t[l]) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      const r = Object.keys(e), o = r.length;
      if (o !== Object.keys(t).length) return false;
      for (let n = 0; n < o; n += 1) if (!Object.prototype.hasOwnProperty.call(t, r[n])) return false;
      for (let n = 0; n < o; n += 1) {
        const l = r[n];
        if (!Tr(e[l], t[l])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function ry(e) {
    return () => {
      let t = e += 1831565813;
      return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function oy(e) {
    const t = ry(e);
    return (r, o) => r + (o - r) * t();
  }
  function $u(e) {
    return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
  }
  const ao = (e, t) => (r) => {
    e && t(r);
  }, ny = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "color",
    "error",
    "helperText",
    "size",
    "variant"
  ], ly = [
    "key"
  ];
  function Lu(e) {
    const { item: t, applyValue: r, type: o, apiRef: n, focusElementRef: l, color: s, error: i, helperText: a, size: u, variant: c = "standard" } = e, p = fe(e, ny), g = {
      color: s,
      error: i,
      helperText: a,
      size: u,
      variant: c
    }, [b, h] = d.useState(t.value || []), m = it(), x = ae();
    d.useEffect(() => {
      const w = t.value ?? [];
      h(w.map(String));
    }, [
      t.value
    ]);
    const v = d.useCallback((w, k) => {
      h(k.map(String)), r(C({}, t, {
        value: [
          ...k.map((L) => o === "number" ? Number(L) : L)
        ]
      }));
    }, [
      r,
      t,
      o
    ]);
    return f.jsx(lu, C({
      multiple: true,
      freeSolo: true,
      options: [],
      filterOptions: (w, k) => {
        const { inputValue: L } = k;
        return L == null || L === "" ? [] : [
          L
        ];
      },
      id: m,
      value: b,
      onChange: v,
      renderTags: (w, k) => w.map((L, F) => {
        const I = k({
          index: F
        }), { key: j } = I, D = fe(I, ly);
        return f.jsx(x.slots.baseChip, C({
          variant: "outlined",
          size: "small",
          label: L
        }, D), j);
      }),
      renderInput: (w) => {
        var _a2;
        return f.jsx(x.slots.baseTextField, C({}, w, {
          label: n.current.getLocaleText("filterPanelInputLabel"),
          placeholder: n.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: C({}, w.InputLabelProps, {
            shrink: true
          }),
          inputRef: l,
          type: o || "text"
        }, g, (_a2 = x.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, p));
  }
  var $r = (function(e) {
    return e.Cell = "cell", e.Row = "row", e;
  })($r || {}), tt = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(tt || {}), st = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(st || {}), _t = (function(e) {
    return e.And = "and", e.Or = "or", e;
  })(_t || {}), Nr = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e.pasteKeyDown = "pasteKeyDown", e;
  })(Nr || {}), xr = (function(e) {
    return e.cellFocusOut = "cellFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(xr || {}), Qr = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e;
  })(Qr || {}), kr = (function(e) {
    return e.rowFocusOut = "rowFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(kr || {});
  function Ru(e) {
    return e.field !== void 0;
  }
  const ju = {
    filteredRowsLookup: {},
    filteredChildrenCountLookup: {},
    filteredDescendantCountLookup: {}
  }, $n = () => ({
    items: [],
    logicOperator: _t.And,
    quickFilterValues: [],
    quickFilterLogicOperator: _t.And
  });
  function Hu(e) {
    return {
      current: e.current.getPublicApi()
    };
  }
  let Jr = (function(e) {
    return e.LEFT = "left", e.RIGHT = "right", e;
  })({});
  const Dl = {
    left: [],
    right: []
  }, zu = (e) => e.isRtl, Ar = (e) => e.columns, Vr = we(Ar, (e) => e.orderedFields), Ur = we(Ar, (e) => e.lookup), hr = Qe(Vr, Ur, (e, t) => e.map((r) => t[r])), dr = we(Ar, (e) => e.columnVisibilityModel), ft = Qe(hr, dr, (e, t) => e.filter((r) => t[r.field] !== false)), Jo = Qe(ft, (e) => e.map((t) => t.field)), Nu = (e) => e.pinnedColumns;
  Qe(Nu, Vr, zu, (e, t, r) => _u(e, t, r));
  const en = Qe(Ar, Nu, Jo, zu, (e, t, r, o) => {
    const n = _u(t, r, o);
    return {
      left: n.left.map((s) => e.lookup[s]),
      right: n.right.map((s) => e.lookup[s])
    };
  });
  function _u(e, t, r) {
    var _a2, _b2;
    if (!Array.isArray(e.left) && !Array.isArray(e.right) || ((_a2 = e.left) == null ? void 0 : _a2.length) === 0 && ((_b2 = e.right) == null ? void 0 : _b2.length) === 0) return Dl;
    const o = (i, a) => Array.isArray(i) ? i.filter((u) => a.includes(u)) : [], n = o(e.left, t), l = t.filter((i) => !n.includes(i)), s = o(e.right, l);
    return r ? {
      left: s,
      right: n
    } : {
      left: n,
      right: s
    };
  }
  const lo = Qe(ft, (e) => {
    const t = [];
    let r = 0;
    for (let o = 0; o < e.length; o += 1) t.push(r), r += e[o].computedWidth;
    return t;
  }), Gu = Qe(hr, (e) => e.filter((t) => t.filterable)), sy = Qe(hr, (e) => e.reduce((t, r) => (r.filterable && (t[r.field] = r), t), {})), iy = Qe(hr, (e) => e.some((t) => t.colSpan !== void 0));
  let hn;
  function ay() {
    if (hn !== void 0) return hn;
    try {
      hn = new Function("return true")();
    } catch {
      hn = false;
    }
    return hn;
  }
  const qs = (e, t) => {
    const r = C({}, e);
    if (r.id == null && (r.id = Math.round(Math.random() * 1e5)), r.operator == null) {
      const o = Ur(t)[r.field];
      r.operator = o && o.filterOperators[0].value;
    }
    return r;
  }, Si = (e, t, r) => {
    const o = e.items.length > 1;
    let n;
    o && t ? n = [
      e.items[0]
    ] : n = e.items;
    const l = o && n.some((i) => i.id == null);
    return n.some((i) => i.operator == null) || l ? C({}, e, {
      items: n.map((i) => qs(i, r))
    }) : e.items !== n ? C({}, e, {
      items: n
    }) : e;
  }, Va = (e, t, r) => (o) => C({}, o, {
    filterModel: Si(e, t, r)
  }), Ln = (e) => typeof e == "string" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e, Vu = (e, t) => {
    var _a2;
    if (!e.field || !e.operator) return null;
    const r = t.current.getColumn(e.field);
    if (!r) return null;
    let o;
    if (r.valueParser) {
      const c = r.valueParser;
      o = Array.isArray(e.value) ? (_a2 = e.value) == null ? void 0 : _a2.map((p) => c(p, void 0, r, t)) : c(e.value, void 0, r, t);
    } else o = e.value;
    const { ignoreDiacritics: n } = t.current.rootProps;
    n && (o = Ln(o));
    const l = C({}, e, {
      value: o
    }), s = r.filterOperators;
    if (!(s == null ? void 0 : s.length)) throw new Error(`MUI X: No filter operators found for column '${r.field}'.`);
    const i = s.find((c) => c.value === l.operator);
    if (!i) throw new Error(`MUI X: No filter operator found for column '${r.field}' and operator value '${l.operator}'.`);
    const a = Hu(t), u = i.getApplyFilterFn(l, r);
    return typeof u != "function" ? null : {
      item: l,
      fn: (c) => {
        let p = t.current.getRowValue(c, r);
        return n && (p = Ln(p)), u(p, c, r, a);
      }
    };
  };
  let Ba = 1;
  const cy = (e, t, r) => {
    const { items: o } = e, n = o.map((i) => Vu(i, t)).filter((i) => !!i);
    if (n.length === 0) return null;
    if (r || !ay()) return (i, a) => {
      const u = {};
      for (let c = 0; c < n.length; c += 1) {
        const p = n[c];
        (!a || a(p.item.field)) && (u[p.item.id] = p.fn(i));
      }
      return u;
    };
    const l = new Function("appliers", "row", "shouldApplyFilter", `"use strict";
${n.map((i, a) => `const shouldApply${a} = !shouldApplyFilter || shouldApplyFilter(${JSON.stringify(i.item.field)});`).join(`
`)}

const result$$ = {
${n.map((i, a) => `  ${JSON.stringify(String(i.item.id))}: !shouldApply${a} ? false : appliers[${a}].fn(row),`).join(`
`)}
};

return result$$;`.replaceAll("$$", String(Ba)));
    return Ba += 1, (i, a) => l(n, i, a);
  }, Bu = (e) => e.quickFilterExcludeHiddenColumns ?? true, uy = (e, t) => {
    var _a2;
    const r = ((_a2 = e.quickFilterValues) == null ? void 0 : _a2.filter(Boolean)) ?? [];
    if (r.length === 0) return null;
    const o = Bu(e) ? Jo(t) : Vr(t), n = [], { ignoreDiacritics: l } = t.current.rootProps, s = Hu(t);
    return o.forEach((i) => {
      const a = t.current.getColumn(i), u = a == null ? void 0 : a.getApplyQuickFilterFn;
      u && n.push({
        column: a,
        appliers: r.map((c) => {
          const p = l ? Ln(c) : c;
          return {
            fn: u(p, a, s)
          };
        })
      });
    }), function(a, u) {
      const c = {};
      e: for (let p = 0; p < r.length; p += 1) {
        const g = r[p];
        for (let b = 0; b < n.length; b += 1) {
          const { column: h, appliers: m } = n[b], { field: x } = h;
          if (u && !u(x)) continue;
          const v = m[p];
          let w = t.current.getRowValue(a, h);
          if (v.fn === null) continue;
          if (l && (w = Ln(w)), v.fn(w, a, h, s)) {
            c[g] = true;
            continue e;
          }
        }
        c[g] = false;
      }
      return c;
    };
  }, dy = (e, t, r) => {
    const o = cy(e, t, r), n = uy(e, t);
    return function(s, i, a) {
      a.passingFilterItems = (o == null ? void 0 : o(s, i)) ?? null, a.passingQuickFilterValues = (n == null ? void 0 : n(s, i)) ?? null;
    };
  }, Wa = (e) => e != null, py = (e, t, r) => (e.cleanedFilterItems || (e.cleanedFilterItems = r.filter((o) => Vu(o, t) !== null)), e.cleanedFilterItems), fy = (e, t, r, o, n) => {
    const l = py(n, o, r.items), s = e.filter(Wa), i = t.filter(Wa);
    if (s.length > 0) {
      const a = (c) => s.some((p) => p[c.id]);
      if ((r.logicOperator ?? $n().logicOperator) === _t.And) {
        if (!l.every(a)) return false;
      } else if (!l.some(a)) return false;
    }
    if (i.length > 0 && r.quickFilterValues != null) {
      const a = (c) => i.some((p) => p[c]);
      if ((r.quickFilterLogicOperator ?? $n().quickFilterLogicOperator) === _t.And) {
        if (!r.quickFilterValues.every(a)) return false;
      } else if (!r.quickFilterValues.some(a)) return false;
    }
    return true;
  }, gy = (e) => {
    if (!e) return null;
    const t = new RegExp(Al(e), "i");
    return (r, o, n, l) => {
      let s = l.current.getRowFormattedValue(o, n);
      return l.current.ignoreDiacritics && (s = Ln(s)), s != null ? t.test(s.toString()) : false;
    };
  }, Ua = (e, t) => (r) => {
    if (!r.value) return null;
    const o = e ? r.value : r.value.trim(), n = new RegExp(Al(o), "i");
    return (l) => {
      if (l == null) return t;
      const s = n.test(String(l));
      return t ? !s : s;
    };
  }, qa = (e, t) => (r) => {
    if (!r.value) return null;
    const o = e ? r.value : r.value.trim(), n = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return (l) => {
      if (l == null) return t;
      const s = n.compare(o, l.toString()) === 0;
      return t ? !s : s;
    };
  }, Ka = (e) => () => (t) => {
    const r = t === "" || t == null;
    return e ? !r : r;
  }, hy = (e = false) => [
    {
      value: "contains",
      getApplyFilterFn: Ua(e, false),
      InputComponent: ar
    },
    {
      value: "doesNotContain",
      getApplyFilterFn: Ua(e, true),
      InputComponent: ar
    },
    {
      value: "equals",
      getApplyFilterFn: qa(e, false),
      InputComponent: ar
    },
    {
      value: "doesNotEqual",
      getApplyFilterFn: qa(e, true),
      InputComponent: ar
    },
    {
      value: "startsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const r = e ? t.value : t.value.trim(), o = new RegExp(`^${Al(r)}.*$`, "i");
        return (n) => n != null ? o.test(n.toString()) : false;
      },
      InputComponent: ar
    },
    {
      value: "endsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const r = e ? t.value : t.value.trim(), o = new RegExp(`.*${Al(r)}$`, "i");
        return (n) => n != null ? o.test(n.toString()) : false;
      },
      InputComponent: ar
    },
    {
      value: "isEmpty",
      getApplyFilterFn: Ka(false),
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: Ka(true),
      requiresFilterValue: false
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (t) => {
        if (!Array.isArray(t.value) || t.value.length === 0) return null;
        const r = e ? t.value : t.value.map((n) => n.trim()), o = new Intl.Collator(void 0, {
          sensitivity: "base",
          usage: "search"
        });
        return (n) => n != null ? r.some((l) => o.compare(l, n.toString() || "") === 0) : false;
      },
      InputComponent: Lu
    }
  ], Ir = {
    width: 100,
    minWidth: 50,
    maxWidth: 1 / 0,
    hideable: true,
    sortable: true,
    resizable: true,
    filterable: true,
    groupable: true,
    pinnable: true,
    aggregable: true,
    editable: false,
    sortComparator: QC,
    type: "string",
    align: "left",
    filterOperators: hy(),
    renderEditCell: NC,
    getApplyQuickFilterFn: gy
  }, my = [
    "open",
    "target",
    "onClose",
    "children",
    "position",
    "className",
    "onExited"
  ], by = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "menu"
      ]
    }, Ae, t);
  }, Cy = se(bo, {
    name: "MuiDataGrid",
    slot: "Menu",
    overridesResolver: (e, t) => t.menu
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal,
    [`& .${O.menuList}`]: {
      outline: 0
    }
  })), yy = {
    "bottom-start": "top left",
    "bottom-end": "top right"
  };
  function Pi(e) {
    var _a2;
    const { open: t, target: r, onClose: o, children: n, position: l, className: s, onExited: i } = e, a = fe(e, my), u = Fe(), c = ae(), p = by(c), g = d.useRef(null);
    Tt(() => {
      var _a3, _b2;
      t ? g.current = document.activeElement instanceof HTMLElement ? document.activeElement : null : ((_b2 = (_a3 = g.current) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3), g.current = null);
    }, [
      t
    ]), d.useEffect(() => {
      const m = t ? "menuOpen" : "menuClose";
      u.current.publishEvent(m, {
        target: r
      });
    }, [
      u,
      t,
      r
    ]);
    const b = (m) => (x) => {
      m && m(), i && i(x);
    }, h = (m) => {
      m.target && (r === m.target || (r == null ? void 0 : r.contains(m.target))) || o(m);
    };
    return f.jsx(Cy, C({
      as: c.slots.basePopper,
      className: ue(p.root, s),
      ownerState: c,
      open: t,
      anchorEl: r,
      transition: true,
      placement: l
    }, a, (_a2 = c.slotProps) == null ? void 0 : _a2.basePopper, {
      children: ({ TransitionProps: m, placement: x }) => f.jsx(mi, {
        onClickAway: h,
        mouseEvent: "onMouseDown",
        children: f.jsx(li, C({}, m, {
          style: {
            transformOrigin: yy[x]
          },
          onExited: b(m == null ? void 0 : m.onExited),
          children: f.jsx(Ut, {
            children: n
          })
        }))
      })
    }));
  }
  const wy = [
    "api",
    "colDef",
    "id",
    "hasFocus",
    "isEditable",
    "field",
    "value",
    "formattedValue",
    "row",
    "rowNode",
    "cellMode",
    "tabIndex",
    "position",
    "focusElementRef"
  ], xy = (e) => typeof e.getActions == "function";
  function vy(e) {
    var _a2;
    const { colDef: t, id: r, hasFocus: o, tabIndex: n, position: l = "bottom-end", focusElementRef: s } = e, i = fe(e, wy), [a, u] = d.useState(-1), [c, p] = d.useState(false), g = Fe(), b = d.useRef(null), h = d.useRef(null), m = d.useRef(false), x = d.useRef({}), v = Xt(), w = it(), k = it(), L = ae();
    if (!xy(t)) throw new Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
    const F = t.getActions(g.current.getRowParams(r)), I = F.filter((P) => !P.props.showInMenu), j = F.filter((P) => P.props.showInMenu), D = I.length + (j.length ? 1 : 0);
    d.useLayoutEffect(() => {
      o || Object.entries(x.current).forEach(([P, A]) => {
        A == null ? void 0 : A.stop({}, () => {
          delete x.current[P];
        });
      });
    }, [
      o
    ]), d.useEffect(() => {
      if (a < 0 || !b.current || a >= b.current.children.length) return;
      b.current.children[a].focus({
        preventScroll: true
      });
    }, [
      a
    ]), d.useEffect(() => {
      o || (u(-1), m.current = false);
    }, [
      o
    ]), d.useImperativeHandle(s, () => ({
      focus() {
        if (!m.current) {
          const P = F.findIndex((A) => !A.props.disabled);
          u(P);
        }
      }
    }), [
      F
    ]), d.useEffect(() => {
      a >= D && u(D - 1);
    }, [
      a,
      D
    ]);
    const S = () => {
      p(true), u(D - 1), m.current = true;
    }, y = () => {
      p(false);
    }, M = (P) => {
      P.stopPropagation(), P.preventDefault(), c ? y() : S();
    }, $ = (P) => (A) => {
      x.current[P] = A;
    }, E = (P, A) => (R) => {
      u(P), m.current = true, A && A(R);
    }, N = (P) => {
      if (D <= 1) return;
      const A = (z, _) => {
        var _a3;
        if (z < 0 || z > F.length) return z;
        const G = (_ === "left" ? -1 : 1) * (v ? -1 : 1);
        return ((_a3 = F[z + G]) == null ? void 0 : _a3.props.disabled) ? A(z + G, _) : z + G;
      };
      let R = a;
      P.key === "ArrowRight" ? R = A(a, "right") : P.key === "ArrowLeft" && (R = A(a, "left")), !(R < 0 || R >= D) && R !== a && (P.preventDefault(), P.stopPropagation(), u(R));
    }, T = (P) => {
      P.key === "Tab" && P.preventDefault(), [
        "Tab",
        "Escape"
      ].includes(P.key) && y();
    };
    return f.jsxs("div", C({
      role: "menu",
      ref: b,
      tabIndex: -1,
      className: O.actionsCell,
      onKeyDown: N
    }, i, {
      children: [
        I.map((P, A) => d.cloneElement(P, {
          key: A,
          touchRippleRef: $(A),
          onClick: E(A, P.props.onClick),
          tabIndex: a === A ? n : -1
        })),
        j.length > 0 && k && f.jsx(L.slots.baseIconButton, C({
          ref: h,
          id: k,
          "aria-label": g.current.getLocaleText("actionsCellMore"),
          "aria-haspopup": "menu",
          "aria-expanded": c,
          "aria-controls": c ? w : void 0,
          role: "menuitem",
          size: "small",
          onClick: M,
          touchRippleRef: $(k),
          tabIndex: a === I.length ? n : -1
        }, (_a2 = L.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: f.jsx(L.slots.moreActionsIcon, {
            fontSize: "small"
          })
        })),
        j.length > 0 && f.jsx(Pi, {
          open: c,
          target: h.current,
          position: l,
          onClose: y,
          children: f.jsx(ii, {
            id: w,
            className: O.menuList,
            onKeyDown: T,
            "aria-labelledby": k,
            variant: "menu",
            autoFocusItem: true,
            children: j.map((P, A) => d.cloneElement(P, {
              key: A,
              closeMenu: y
            }))
          })
        })
      ]
    }));
  }
  const Sy = (e) => f.jsx(vy, C({}, e)), ql = "actions", Py = C({}, Ir, {
    sortable: false,
    filterable: false,
    aggregable: false,
    width: 100,
    display: "flex",
    align: "center",
    headerAlign: "center",
    headerName: "",
    disableColumnMenu: true,
    disableExport: true,
    renderCell: Sy,
    getApplyQuickFilterFn: void 0
  }), Dt = "auto-generated-group-node-root", qo = /* @__PURE__ */ Symbol("mui.id_autogenerated"), Iy = () => ({
    type: "group",
    id: Dt,
    depth: -1,
    groupingField: null,
    groupingKey: null,
    isAutoGenerated: true,
    children: [],
    childrenFromPath: {},
    childrenExpanded: true,
    parent: null
  });
  function My(e, t, r = "A row was provided without id in the rows prop:") {
    if (e == null) throw new Error([
      "MUI X: The Data Grid component requires all rows to have a unique `id` property.",
      "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.",
      r,
      JSON.stringify(t)
    ].join(`
`));
  }
  const Kl = (e, t, r) => {
    const o = t ? t(e) : e.id;
    return My(o, e, r), o;
  }, Cl = ({ rows: e, getRowId: t, loading: r, rowCount: o }) => {
    const n = {
      type: "full",
      rows: []
    }, l = {}, s = {};
    for (let i = 0; i < e.length; i += 1) {
      const a = e[i], u = Kl(a, t);
      l[u] = a, s[u] = u, n.rows.push(u);
    }
    return {
      rowsBeforePartialUpdates: e,
      loadingPropBeforePartialUpdates: r,
      rowCountPropBeforePartialUpdates: o,
      updates: n,
      dataRowIdToIdLookup: s,
      dataRowIdToModelLookup: l
    };
  }, Wu = ({ tree: e, rowCountProp: t = 0 }) => {
    const r = e[Dt];
    return Math.max(t, r.children.length + (r.footerId == null ? 0 : 1));
  }, Uu = ({ apiRef: e, rowCountProp: t = 0, loadingProp: r, previousTree: o, previousTreeDepths: n, previousGroupsToFetch: l }) => {
    const s = e.current.caches.rows, { tree: i, treeDepths: a, dataRowIds: u, groupingName: c, groupsToFetch: p = [] } = e.current.applyStrategyProcessor("rowTreeCreation", {
      previousTree: o,
      previousTreeDepths: n,
      updates: s.updates,
      dataRowIdToIdLookup: s.dataRowIdToIdLookup,
      dataRowIdToModelLookup: s.dataRowIdToModelLookup,
      previousGroupsToFetch: l
    }), g = e.current.unstable_applyPipeProcessors("hydrateRows", {
      tree: i,
      treeDepths: a,
      dataRowIdToIdLookup: s.dataRowIdToIdLookup,
      dataRowIds: u,
      dataRowIdToModelLookup: s.dataRowIdToModelLookup
    });
    return e.current.caches.rows.updates = {
      type: "partial",
      actions: {
        insert: [],
        modify: [],
        remove: []
      },
      idToActionLookup: {}
    }, C({}, g, {
      totalRowCount: Math.max(t, g.dataRowIds.length),
      totalTopLevelRowCount: Wu({
        tree: g.tree,
        rowCountProp: t
      }),
      groupingName: c,
      loading: r,
      groupsToFetch: p
    });
  }, Ko = (e) => e.type === "skeletonRow" || e.type === "footer" || e.type === "group" && e.isAutoGenerated || e.type === "pinnedRow" && e.isAutoGenerated, Ii = (e, t, r) => {
    const o = e[t];
    if (o.type !== "group") return [];
    const n = [];
    for (let l = 0; l < o.children.length; l += 1) {
      const s = o.children[l];
      (!r || !Ko(e[s])) && n.push(s);
      const i = Ii(e, s, r);
      for (let a = 0; a < i.length; a += 1) n.push(i[a]);
    }
    return !r && o.footerId != null && n.push(o.footerId), n;
  }, Ya = ({ previousCache: e, getRowId: t, updates: r, groupKeys: o }) => {
    if (e.updates.type === "full") throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
    const n = /* @__PURE__ */ new Map();
    r.forEach((c) => {
      const p = Kl(c, t, "A row was provided without id when calling updateRows():");
      n.has(p) ? n.set(p, C({}, n.get(p), c)) : n.set(p, c);
    });
    const l = {
      type: "partial",
      actions: {
        insert: [
          ...e.updates.actions.insert ?? []
        ],
        modify: [
          ...e.updates.actions.modify ?? []
        ],
        remove: [
          ...e.updates.actions.remove ?? []
        ]
      },
      idToActionLookup: C({}, e.updates.idToActionLookup),
      groupKeys: o
    }, s = C({}, e.dataRowIdToModelLookup), i = C({}, e.dataRowIdToIdLookup), a = {
      insert: {},
      modify: {},
      remove: {}
    };
    n.forEach((c, p) => {
      const g = l.idToActionLookup[p];
      if (c._action === "delete") {
        if (g === "remove" || !s[p]) return;
        g != null && (a[g][p] = true), l.actions.remove.push(p), delete s[p], delete i[p];
        return;
      }
      const b = s[p];
      if (b) {
        g === "remove" ? (a.remove[p] = true, l.actions.modify.push(p)) : g == null && l.actions.modify.push(p), s[p] = C({}, b, c);
        return;
      }
      g === "remove" ? (a.remove[p] = true, l.actions.insert.push(p)) : g == null && l.actions.insert.push(p), s[p] = c, i[p] = p;
    });
    const u = Object.keys(a);
    for (let c = 0; c < u.length; c += 1) {
      const p = u[c], g = a[p];
      Object.keys(g).length > 0 && (l.actions[p] = l.actions[p].filter((b) => !g[b]));
    }
    return {
      dataRowIdToModelLookup: s,
      dataRowIdToIdLookup: i,
      updates: l,
      rowsBeforePartialUpdates: e.rowsBeforePartialUpdates,
      loadingPropBeforePartialUpdates: e.loadingPropBeforePartialUpdates,
      rowCountPropBeforePartialUpdates: e.rowCountPropBeforePartialUpdates
    };
  }, qu = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
  function Xa(e, t, r) {
    const o = [];
    return t.forEach((n) => {
      var _a2;
      const l = Kl(n, r, "A row was provided without id when calling updateRows():");
      if (((_a2 = e.current.getRowNode(l)) == null ? void 0 : _a2.type) === "pinnedRow") {
        const i = e.current.caches.pinnedRows, a = i.idLookup[l];
        a && (i.idLookup[l] = C({}, a, n));
      } else o.push(n);
    }), o;
  }
  const Ku = (e, t, r) => typeof e == "number" && e > 0 ? e : t, Oy = "__tree_data_group__", Yu = "__row_group_by_columns_group__", Yl = "__detail_panel_toggle__";
  let Te = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.VIRTUAL = 3] = "VIRTUAL", e;
  })({});
  const Fy = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "hasFocus",
    "tabIndex",
    "hideDescendantCount"
  ], ky = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "booleanCell"
      ]
    }, Ae, t);
  };
  function Ey(e) {
    const { value: t, rowNode: r } = e, o = fe(e, Fy), n = Fe(), l = ae(), s = {
      classes: l.classes
    }, i = ky(s), u = X(n, Co) > 0 && r.type === "group" && l.treeData === false, c = d.useMemo(() => t ? l.slots.booleanCellTrueIcon : l.slots.booleanCellFalseIcon, [
      l.slots.booleanCellFalseIcon,
      l.slots.booleanCellTrueIcon,
      t
    ]);
    return u && t === void 0 ? null : f.jsx(c, C({
      fontSize: "small",
      className: i.root,
      titleAccess: n.current.getLocaleText(t ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
      "data-value": !!t
    }, o));
  }
  const Ty = d.memo(Ey), Ay = (e) => e.field !== Yu && Ko(e.rowNode) ? "" : f.jsx(Ty, C({}, e)), Dy = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "className",
    "hasFocus",
    "isValidating",
    "isProcessingProps",
    "error",
    "onValueChange"
  ], $y = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "editBooleanCell"
      ]
    }, Ae, t);
  };
  function Ly(e) {
    var _a2;
    const { id: t, value: r, field: o, className: n, hasFocus: l, onValueChange: s } = e, i = fe(e, Dy), a = Fe(), u = d.useRef(null), c = it(), [p, g] = d.useState(r), b = ae(), h = {
      classes: b.classes
    }, m = $y(h), x = d.useCallback(async (v) => {
      const w = v.target.checked;
      s && await s(v, w), g(w), await a.current.setEditCellValue({
        id: t,
        field: o,
        value: w
      }, v);
    }, [
      a,
      o,
      t,
      s
    ]);
    return d.useEffect(() => {
      g(r);
    }, [
      r
    ]), Tt(() => {
      l && u.current.focus();
    }, [
      l
    ]), f.jsx("label", C({
      htmlFor: c,
      className: ue(m.root, n)
    }, i, {
      children: f.jsx(b.slots.baseCheckbox, C({
        id: c,
        inputRef: u,
        checked: !!p,
        onChange: x,
        size: "small"
      }, (_a2 = b.slotProps) == null ? void 0 : _a2.baseCheckbox))
    }));
  }
  const Ry = (e) => f.jsx(Ly, C({}, e)), jy = [
    "item",
    "applyValue",
    "apiRef",
    "focusElementRef",
    "isFilterActive",
    "clearButton",
    "tabIndex",
    "label",
    "variant",
    "InputLabelProps"
  ], yl = (e) => {
    if (String(e).toLowerCase() === "true") return true;
    if (String(e).toLowerCase() === "false") return false;
  }, Hy = se("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function zy(e) {
    var _a2, _b2, _c2;
    const { item: t, applyValue: r, apiRef: o, focusElementRef: n, clearButton: l, tabIndex: s, label: i, variant: a = "standard" } = e, u = fe(e, jy), [c, p] = d.useState(yl(t.value)), g = ae(), b = it(), h = it(), m = ((_a2 = g.slotProps) == null ? void 0 : _a2.baseSelect) || {}, x = m.native ?? false, v = ((_b2 = g.slotProps) == null ? void 0 : _b2.baseSelectOption) || {}, w = d.useCallback((L) => {
      const F = yl(L.target.value);
      p(F), r(C({}, t, {
        value: F
      }));
    }, [
      r,
      t
    ]);
    d.useEffect(() => {
      p(yl(t.value));
    }, [
      t.value
    ]);
    const k = i ?? o.current.getLocaleText("filterPanelInputLabel");
    return f.jsxs(Hy, {
      children: [
        f.jsxs(g.slots.baseFormControl, {
          fullWidth: true,
          children: [
            f.jsx(g.slots.baseInputLabel, C({}, (_c2 = g.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: b,
              shrink: true,
              variant: a,
              children: k
            })),
            f.jsxs(g.slots.baseSelect, C({
              labelId: b,
              id: h,
              label: k,
              value: c === void 0 ? "" : String(c),
              onChange: w,
              variant: a,
              notched: a === "outlined" ? true : void 0,
              native: x,
              displayEmpty: true,
              inputProps: {
                ref: n,
                tabIndex: s
              }
            }, u, m, {
              children: [
                f.jsx(g.slots.baseSelectOption, C({}, v, {
                  native: x,
                  value: "",
                  children: o.current.getLocaleText("filterValueAny")
                })),
                f.jsx(g.slots.baseSelectOption, C({}, v, {
                  native: x,
                  value: "true",
                  children: o.current.getLocaleText("filterValueTrue")
                })),
                f.jsx(g.slots.baseSelectOption, C({}, v, {
                  native: x,
                  value: "false",
                  children: o.current.getLocaleText("filterValueFalse")
                }))
              ]
            }))
          ]
        }),
        l
      ]
    });
  }
  const Ny = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => {
        const t = yl(e.value);
        return t === void 0 ? null : (r) => !!r === t;
      },
      InputComponent: zy
    }
  ], _y = (e, t, r, o) => e ? o.current.getLocaleText("booleanCellTrueLabel") : o.current.getLocaleText("booleanCellFalseLabel"), Gy = (e) => {
    switch (e.toLowerCase().trim()) {
      case "true":
      case "yes":
      case "1":
        return true;
      case "false":
      case "no":
      case "0":
      case "null":
      case "undefined":
        return false;
      default:
        return;
    }
  }, Xu = C({}, Ir, {
    type: "boolean",
    display: "flex",
    align: "center",
    headerAlign: "center",
    renderCell: Ay,
    renderEditCell: Ry,
    sortComparator: Au,
    valueFormatter: _y,
    filterOperators: Ny(),
    getApplyQuickFilterFn: void 0,
    aggregable: false,
    pastedValueParser: (e) => Gy(e)
  }), Qu = (e) => e.sorting, tn = we(Qu, (e) => e.sortedRows), Mi = Qe(tn, ur, xt, (e, t, r) => e.reduce((o, n) => {
    const l = t[n];
    if (l) o.push({
      id: n,
      model: l
    });
    else {
      const s = r[n];
      s && Ko(s) && o.push({
        id: n,
        model: {
          [qo]: n
        }
      });
    }
    return o;
  }, [])), vr = we(Qu, (e) => e.sortModel), Vy = Qe(vr, (e) => e.reduce((r, o, n) => (r[o.field] = {
    sortDirection: o.sort,
    sortIndex: e.length > 1 ? n + 1 : void 0
  }, r), {}));
  Qe(tn, (e) => e.reduce((t, r, o) => (t[r] = o, t), /* @__PURE__ */ Object.create(null)));
  const Xl = (e) => e.filter, kt = we(Xl, (e) => e.filterModel), Zu = we(kt, (e) => e.quickFilterValues), By = (e) => e.visibleRowsLookup, rn = we(Xl, (e) => e.filteredRowsLookup);
  we(Xl, (e) => e.filteredChildrenCountLookup);
  we(Xl, (e) => e.filteredDescendantCountLookup);
  const so = Qe(By, Mi, Co, kt, Zu, (e, t, r, o, n) => r < 2 && !o.items.length && !(n == null ? void 0 : n.length) ? t : t.filter((l) => e[l.id] !== false)), No = Qe(so, (e) => e.map((t) => t.id)), Ju = Qe(rn, Mi, (e, t) => t.filter((r) => e[r.id] !== false)), ed = Qe(Ju, (e) => e.map((t) => t.id));
  Qe(No, xt, (e, t) => {
    const r = {};
    let o = 0;
    return e.reduce((n, l) => {
      const s = t[l];
      return r[s.depth] || (r[s.depth] = 0), s.depth > o && (r[s.depth] = 0), o = s.depth, r[s.depth] += 1, n[l] = r[s.depth], n;
    }, {});
  });
  const td = Qe(so, xt, Co, (e, t, r) => r < 2 ? e : e.filter((o) => {
    var _a2;
    return ((_a2 = t[o.id]) == null ? void 0 : _a2.depth) === 0;
  })), Oi = we(so, (e) => e.length), Fi = we(td, (e) => e.length), Wy = we(Ju, (e) => e.length);
  we(Wy, Fi, (e, t) => e - t);
  const rd = Qe(kt, Ur, (e, t) => {
    var _a2;
    return (_a2 = e.items) == null ? void 0 : _a2.filter((r) => {
      var _a3, _b2;
      if (!r.field) return false;
      const o = t[r.field];
      if (!(o == null ? void 0 : o.filterOperators) || ((_a3 = o == null ? void 0 : o.filterOperators) == null ? void 0 : _a3.length) === 0) return false;
      const n = o.filterOperators.find((l) => l.value === r.operator);
      return n ? !n.InputComponent || r.value != null && ((_b2 = r.value) == null ? void 0 : _b2.toString()) !== "" : false;
    });
  }), Uy = Qe(rd, (e) => e.reduce((r, o) => (r[o.field] ? r[o.field].push(o) : r[o.field] = [
    o
  ], r), {})), Zt = (e) => e.rowSelection, qy = we(Zt, (e) => e.length), Ky = Qe(Zt, ur, (e, t) => new Map(e.map((r) => [
    r,
    t[r]
  ]))), to = Qe(Zt, (e) => e.reduce((t, r) => (t[r] = r, t), {}));
  function od(e, t) {
    var _a2;
    const r = xt(e), o = tn(e), n = rn(e), l = r[t];
    if (!l || l.type !== "group") return [];
    const s = [], i = o.findIndex((a) => a === t) + 1;
    for (let a = i; a < o.length && ((_a2 = r[o[a]]) == null ? void 0 : _a2.depth) > l.depth; a += 1) {
      const u = o[a];
      n[u] !== false && e.current.isRowSelectable(u) && s.push(u);
    }
    return s;
  }
  function Yy(e, t) {
    return we(xt, tn, rn, to, (r, o, n, l) => {
      var _a2;
      const s = r[e];
      if (!s || s.type !== "group") return {
        isIndeterminate: false,
        isChecked: l[e] === e
      };
      if (l[e] === e) return {
        isIndeterminate: false,
        isChecked: true
      };
      let i = 0, a = 0;
      const u = o.findIndex((c) => c === e) + 1;
      for (let c = u; c < o.length && ((_a2 = r[o[c]]) == null ? void 0 : _a2.depth) > s.depth; c += 1) {
        const p = o[c];
        n[p] !== false && (i += 1, l[p] !== void 0 && (a += 1));
      }
      return {
        isIndeterminate: a > 0 && (a < i || l[e] === void 0),
        isChecked: t ? a > 0 : l[e] === e
      };
    });
  }
  function ki(e) {
    return e.signature === gr.DataGrid ? e.checkboxSelection && e.disableMultipleRowSelection !== true : !e.disableMultipleRowSelection;
  }
  const Xy = (e, t) => {
    const r = [];
    let o = t;
    for (; o != null && o !== Dt; ) {
      const n = e[o];
      if (!n) return r;
      r.push(o), o = n.parent;
    }
    return r;
  }, Qy = (e, t, r) => {
    const o = e[r];
    if (!o) return [];
    const n = o.parent;
    return n == null ? [] : e[n].children.filter((s) => s !== r && t[s] !== false);
  }, mn = (e, t, r, o, n, l, s = new Set(Zt(e.current.state))) => {
    var _a2;
    const i = rn(e), a = /* @__PURE__ */ new Set([]);
    if (!(!o && !n || i[r] === false) && (o && ((_a2 = t[r]) == null ? void 0 : _a2.type) === "group" && od(e, r).forEach((p) => {
      l(p), a.add(p);
    }), n)) {
      const u = (p) => {
        if (!s.has(p) && !a.has(p)) return false;
        const g = t[p];
        return g ? g.type !== "group" ? true : g.children.every(u) : false;
      }, c = (p) => {
        var _a3;
        const g = Qy(t, i, p);
        if (g.length === 0 || g.every(u)) {
          const h = (_a3 = t[p]) == null ? void 0 : _a3.parent;
          h != null && h !== Dt && e.current.isRowSelectable(h) && (l(h), a.add(h), c(h));
        }
      };
      c(r);
    }
  }, Qa = (e, t, r, o, n, l) => {
    var _a2;
    const s = to(e);
    !n && !o || (n && Xy(t, r).forEach((a) => {
      s[a] === a && l(a);
    }), o && ((_a2 = t[r]) == null ? void 0 : _a2.type) === "group" && od(e, r).forEach((u) => {
      l(u);
    }));
  }, Zy = [
    "field",
    "id",
    "formattedValue",
    "row",
    "rowNode",
    "colDef",
    "isEditable",
    "cellMode",
    "hasFocus",
    "tabIndex",
    "api"
  ], Jy = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "checkboxInput"
      ]
    }, Ae, t);
  }, ew = ze(function(t, r) {
    var _a2, _b2;
    const { field: o, id: n, rowNode: l, hasFocus: s, tabIndex: i } = t, a = fe(t, Zy), u = Fe(), c = ae(), p = {
      classes: c.classes
    }, g = Jy(p), b = d.useRef(null), h = d.useRef(null), m = Yt(b, r), x = (D) => {
      const S = {
        value: D.target.checked,
        id: n
      };
      u.current.publishEvent("rowSelectionCheckboxChange", S, D);
    };
    d.useLayoutEffect(() => {
      if (i === 0) {
        const D = u.current.getCellElement(n, o);
        D && (D.tabIndex = -1);
      }
    }, [
      u,
      i,
      n,
      o
    ]), d.useEffect(() => {
      var _a3, _b3;
      s ? (_b3 = (_a3 = b.current) == null ? void 0 : _a3.querySelector("input")) == null ? void 0 : _b3.focus({
        preventScroll: true
      }) : h.current && h.current.stop({});
    }, [
      s
    ]);
    const v = d.useCallback((D) => {
      D.key === " " && D.stopPropagation();
    }, []), w = u.current.isRowSelectable(n), k = Yy(n, ((_a2 = c.rowSelectionPropagation) == null ? void 0 : _a2.parents) ?? false), { isIndeterminate: L, isChecked: F } = X(u, k, yi);
    if (l.type === "footer" || l.type === "pinnedRow") return null;
    const I = c.indeterminateCheckboxAction === "select" ? F && !L : F, j = u.current.getLocaleText(I ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
    return f.jsx(c.slots.baseCheckbox, C({
      tabIndex: i,
      checked: I,
      onChange: x,
      className: g.root,
      inputProps: {
        "aria-label": j,
        name: "select_row"
      },
      onKeyDown: v,
      indeterminate: L,
      disabled: !w,
      touchRippleRef: h
    }, (_b2 = c.slotProps) == null ? void 0 : _b2.baseCheckbox, a, {
      ref: m
    }));
  }), tw = ew, Ql = (e) => e.focus, Wt = we(Ql, (e) => e.cell), rw = we(Ql, (e) => e.columnHeader);
  we(Ql, (e) => e.columnHeaderFilter);
  const $l = we(Ql, (e) => e.columnGroupHeader), Zl = (e) => e.tabIndex, Ei = we(Zl, (e) => e.cell), nd = we(Zl, (e) => e.columnHeader);
  we(Zl, (e) => e.columnHeaderFilter);
  const ow = we(Zl, (e) => e.columnGroupHeader);
  function Oe(e, t, r) {
    const o = d.useRef(true);
    Tt(() => {
      o.current = false, e.current.register(r, t);
    }, [
      e,
      r,
      t
    ]), o.current && e.current.register(r, t);
  }
  function Mt(e, t) {
    const r = d.useRef(null);
    if (r.current) return r.current;
    const o = e.current.getLogger(t);
    return r.current = o, o;
  }
  const ld = (e, t, r, o, n) => {
    const l = Mt(e, "useNativeEventListener");
    rt(e, "rootMount", () => {
      const s = typeof t == "function" ? t() : t.current;
      if (!(!s || !r || !o)) return l.debug(`Binding native ${r} event`), s.addEventListener(r, o, n), () => {
        l.debug(`Clearing native ${r} event`), s.removeEventListener(r, o, n);
      };
    });
  }, qn = (e) => {
    const t = d.useRef(true);
    t.current && (t.current = false, e());
  }, nw = () => {
  }, lw = (e, t) => {
    const r = d.useRef(false);
    Tt(() => r.current || !e ? nw : (r.current = true, t()), [
      r.current || e
    ]);
  }, sw = 100, iw = (e) => e ? 0 : 100, sd = (e, t, r) => t > 0 && e > 0 ? Math.ceil(e / t) : e === -1 ? r + 2 : 0, id = (e) => ({
    page: 0,
    pageSize: e ? 0 : 100
  }), aw = (e, t = 0) => t === 0 ? e : Math.max(Math.min(e, t - 1), 0), ad = (e, t) => {
    if (t === gr.DataGrid && e > sw) throw new Error([
      "MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.",
      "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
    ].join(`
`));
  }, cw = -1, Kn = (e) => e.pagination, cd = we(Kn, (e) => e.enabled && e.paginationMode === "client"), Rt = we(Kn, (e) => e.paginationModel), $o = we(Kn, (e) => e.rowCount), wn = we(Kn, (e) => e.meta), uw = we(Rt, (e) => e.page), ud = we(Rt, (e) => e.pageSize), dd = we(Rt, $o, (e, t) => sd(t, e.pageSize, e.page)), Ti = Qe(cd, Rt, xt, Co, so, td, (e, t, r, o, n, l) => {
    var _a2;
    if (!e) return null;
    const s = l.length, i = Math.min(t.pageSize * t.page, s - 1), a = t.pageSize === cw ? s - 1 : Math.min(i + t.pageSize - 1, s - 1);
    if (i === -1 || a === -1) return null;
    if (o < 2) return {
      firstRowIndex: i,
      lastRowIndex: a
    };
    const u = l[i], c = a - i + 1, p = n.findIndex((h) => h.id === u.id);
    let g = p, b = 0;
    for (; g < n.length && b <= c; ) {
      const h = n[g], m = (_a2 = r[h.id]) == null ? void 0 : _a2.depth;
      m === void 0 ? g += 1 : ((b < c || m > 0) && (g += 1), m === 0 && (b += 1));
    }
    return {
      firstRowIndex: p,
      lastRowIndex: g - 1
    };
  }), dw = Qe(so, Ti, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), pd = Qe(No, Ti, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), Yn = Qe(cd, Ti, dw, so, (e, t, r, o) => e ? {
    rows: r,
    range: t,
    rowToIndexMap: r.reduce((n, l, s) => (n.set(l.model, s), n), /* @__PURE__ */ new Map())
  } : {
    rows: o,
    range: o.length === 0 ? null : {
      firstRowIndex: 0,
      lastRowIndex: o.length - 1
    },
    rowToIndexMap: o.reduce((n, l, s) => (n.set(l.model, s), n), /* @__PURE__ */ new Map())
  }), pw = [
    "field",
    "colDef"
  ], fw = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "checkboxInput"
      ]
    }, Ae, t);
  }, gw = ze(function(t, r) {
    var _a2;
    const o = fe(t, pw), [, n] = d.useState(false), l = Fe(), s = ae(), i = {
      classes: s.classes
    }, a = fw(i), u = X(l, nd), c = X(l, Zt), p = X(l, No), g = X(l, pd), b = d.useMemo(() => typeof s.isRowSelectable != "function" ? c : c.filter((D) => s.keepNonExistentRowsSelected ? true : l.current.getRow(D) ? s.isRowSelectable(l.current.getRowParams(D)) : false), [
      l,
      s.isRowSelectable,
      c,
      s.keepNonExistentRowsSelected
    ]), h = d.useMemo(() => (!s.pagination || !s.checkboxSelectionVisibleOnly || s.paginationMode === "server" ? p : g).reduce((S, y) => (S[y] = true, S), {}), [
      s.pagination,
      s.paginationMode,
      s.checkboxSelectionVisibleOnly,
      g,
      p
    ]), m = d.useMemo(() => b.filter((D) => h[D]).length, [
      b,
      h
    ]), x = m > 0 && m < Object.keys(h).length, v = m > 0, w = (D) => {
      const S = {
        value: D.target.checked
      };
      l.current.publishEvent("headerSelectionCheckboxChange", S);
    }, k = u !== null && u.field === t.field ? 0 : -1;
    d.useLayoutEffect(() => {
      const D = l.current.getColumnHeaderElement(t.field);
      k === 0 && D && (D.tabIndex = -1);
    }, [
      k,
      l,
      t.field
    ]);
    const L = d.useCallback((D) => {
      D.key === " " && l.current.publishEvent("headerSelectionCheckboxChange", {
        value: !v
      });
    }, [
      l,
      v
    ]), F = d.useCallback(() => {
      n((D) => !D);
    }, []);
    d.useEffect(() => l.current.subscribeEvent("rowSelectionChange", F), [
      l,
      F
    ]);
    const I = s.indeterminateCheckboxAction === "select" ? v && !x : v, j = l.current.getLocaleText(I ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
    return f.jsx(s.slots.baseCheckbox, C({
      indeterminate: x,
      checked: I,
      onChange: w,
      className: a.root,
      inputProps: {
        "aria-label": j,
        name: "select_all_rows"
      },
      tabIndex: k,
      onKeyDown: L,
      disabled: !ki(s)
    }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseCheckbox, o, {
      ref: r
    }));
  }), Xn = (e, t) => qo in t ? t[qo] : e.props.getRowId ? e.props.getRowId(t) : t.id, lr = "__check__", on = C({}, Xu, {
    type: "custom",
    field: lr,
    width: 50,
    resizable: false,
    sortable: false,
    filterable: false,
    aggregable: false,
    disableColumnMenu: true,
    disableReorder: true,
    disableExport: true,
    getApplyQuickFilterFn: void 0,
    display: "flex",
    valueGetter: (e, t, r, o) => {
      const n = to(o), l = Xn(o.current.state, t);
      return n[l] !== void 0;
    },
    renderHeader: (e) => f.jsx(gw, C({}, e)),
    renderCell: (e) => f.jsx(tw, C({}, e))
  }), hw = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "InputProps",
    "isFilterActive",
    "clearButton",
    "tabIndex",
    "disabled"
  ];
  function Za(e, t) {
    if (e == null) return "";
    const r = new Date(e);
    return Number.isNaN(r.getTime()) ? "" : t === "date" ? r.toISOString().substring(0, 10) : t === "datetime-local" ? (r.setMinutes(r.getMinutes() - r.getTimezoneOffset()), r.toISOString().substring(0, 19)) : r.toISOString().substring(0, 10);
  }
  function vo(e) {
    var _a2;
    const { item: t, applyValue: r, type: o, apiRef: n, focusElementRef: l, InputProps: s, clearButton: i, tabIndex: a, disabled: u } = e, c = fe(e, hw), p = Jt(), [g, b] = d.useState(() => Za(t.value, o)), [h, m] = d.useState(false), x = it(), v = ae(), w = d.useCallback((k) => {
      p.clear();
      const L = k.target.value;
      b(L), m(true), p.start(v.filterDebounceMs, () => {
        const F = new Date(L);
        r(C({}, t, {
          value: Number.isNaN(F.getTime()) ? void 0 : F
        })), m(false);
      });
    }, [
      r,
      t,
      v.filterDebounceMs,
      p
    ]);
    return d.useEffect(() => {
      const k = Za(t.value, o);
      b(k);
    }, [
      t.value,
      o
    ]), f.jsx(v.slots.baseTextField, C({
      fullWidth: true,
      id: x,
      label: n.current.getLocaleText("filterPanelInputLabel"),
      placeholder: n.current.getLocaleText("filterPanelInputPlaceholder"),
      value: g,
      onChange: w,
      variant: "standard",
      type: o || "text",
      InputLabelProps: {
        shrink: true
      },
      inputRef: l,
      InputProps: C({}, h || i ? {
        endAdornment: h ? f.jsx(v.slots.loadIcon, {
          fontSize: "small",
          color: "action"
        }) : i
      } : {}, {
        disabled: u
      }, s, {
        inputProps: C({
          max: o === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31",
          tabIndex: a
        }, s == null ? void 0 : s.inputProps)
      })
    }, c, (_a2 = v.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function So(e, t, r, o) {
    if (!e.value) return null;
    const n = new Date(e.value);
    r ? n.setSeconds(0, 0) : (n.setMinutes(n.getMinutes() + n.getTimezoneOffset()), n.setHours(0, 0, 0, 0));
    const l = n.getTime();
    return (s) => {
      if (!s) return false;
      if (o) return t(s.getTime(), l);
      const i = new Date(s);
      return r ? i.setSeconds(0, 0) : i.setHours(0, 0, 0, 0), t(i.getTime(), l);
    };
  }
  const fd = (e) => [
    {
      value: "is",
      getApplyFilterFn: (t) => So(t, (r, o) => r === o, e),
      InputComponent: vo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "not",
      getApplyFilterFn: (t) => So(t, (r, o) => r !== o, e),
      InputComponent: vo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "after",
      getApplyFilterFn: (t) => So(t, (r, o) => r > o, e),
      InputComponent: vo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrAfter",
      getApplyFilterFn: (t) => So(t, (r, o) => r >= o, e),
      InputComponent: vo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "before",
      getApplyFilterFn: (t) => So(t, (r, o) => r < o, e, !e),
      InputComponent: vo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrBefore",
      getApplyFilterFn: (t) => So(t, (r, o) => r <= o, e),
      InputComponent: vo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "isEmpty",
      getApplyFilterFn: () => (t) => t == null,
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: () => (t) => t != null,
      requiresFilterValue: false
    }
  ], mw = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "hasFocus",
    "inputProps",
    "isValidating",
    "isProcessingProps",
    "onValueChange"
  ], bw = se(si)({
    fontSize: "inherit"
  }), Cw = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "editInputCell"
      ]
    }, Ae, t);
  };
  function yw(e) {
    const { id: t, value: r, field: o, colDef: n, hasFocus: l, inputProps: s, onValueChange: i } = e, a = fe(e, mw), u = n.type === "dateTime", c = Fe(), p = d.useRef(null), g = d.useMemo(() => {
      let L;
      r == null ? L = null : r instanceof Date ? L = r : L = new Date((r ?? "").toString());
      let F;
      return L == null || Number.isNaN(L.getTime()) ? F = "" : F = new Date(L.getTime() - L.getTimezoneOffset() * 60 * 1e3).toISOString().substr(0, u ? 16 : 10), {
        parsed: L,
        formatted: F
      };
    }, [
      r,
      u
    ]), [b, h] = d.useState(g), x = {
      classes: ae().classes
    }, v = Cw(x), w = d.useCallback((L) => {
      if (L === "") return null;
      const [F, I] = L.split("T"), [j, D, S] = F.split("-"), y = /* @__PURE__ */ new Date();
      if (y.setFullYear(Number(j), Number(D) - 1, Number(S)), y.setHours(0, 0, 0, 0), I) {
        const [M, $] = I.split(":");
        y.setHours(Number(M), Number($), 0, 0);
      }
      return y;
    }, []), k = d.useCallback(async (L) => {
      const F = L.target.value, I = w(F);
      i && await i(L, I), h({
        parsed: I,
        formatted: F
      }), c.current.setEditCellValue({
        id: t,
        field: o,
        value: I
      }, L);
    }, [
      c,
      o,
      t,
      i,
      w
    ]);
    return d.useEffect(() => {
      h((L) => {
        var _a2, _b2;
        return g.parsed !== L.parsed && ((_a2 = g.parsed) == null ? void 0 : _a2.getTime()) !== ((_b2 = L.parsed) == null ? void 0 : _b2.getTime()) ? g : L;
      });
    }, [
      g
    ]), Tt(() => {
      l && p.current.focus();
    }, [
      l
    ]), f.jsx(bw, C({
      inputRef: p,
      fullWidth: true,
      className: v.root,
      type: u ? "datetime-local" : "date",
      inputProps: C({
        max: u ? "9999-12-31T23:59" : "9999-12-31"
      }, s),
      value: b.formatted,
      onChange: k
    }, a));
  }
  const gd = (e) => f.jsx(yw, C({}, e));
  function hd({ value: e, columnType: t, rowId: r, field: o }) {
    if (!(e instanceof Date)) throw new Error([
      `MUI X: \`${t}\` column type only accepts \`Date\` objects as values.`,
      "Use `valueGetter` to transform the value into a `Date` object.",
      `Row ID: ${r}, field: "${o}".`
    ].join(`
`));
  }
  const ww = (e, t, r, o) => {
    if (!e) return "";
    const n = Xn(o.current.state, t);
    return hd({
      value: e,
      columnType: "date",
      rowId: n,
      field: r.field
    }), e.toLocaleDateString();
  }, xw = (e, t, r, o) => {
    if (!e) return "";
    const n = Xn(o.current.state, t);
    return hd({
      value: e,
      columnType: "dateTime",
      rowId: n,
      field: r.field
    }), e.toLocaleString();
  }, vw = C({}, Ir, {
    type: "date",
    sortComparator: Du,
    valueFormatter: ww,
    filterOperators: fd(),
    renderEditCell: gd,
    pastedValueParser: (e) => new Date(e)
  }), Sw = C({}, Ir, {
    type: "dateTime",
    sortComparator: Du,
    valueFormatter: xw,
    filterOperators: fd(true),
    renderEditCell: gd,
    pastedValueParser: (e) => new Date(e)
  }), eo = (e) => e == null ? null : Number(e), Pw = (e) => e == null || Number.isNaN(e) || e === "" ? null : (t) => eo(t) === eo(e), Iw = () => [
    {
      value: "=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => eo(t) === e.value,
      InputComponent: ar,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "!=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => eo(t) !== e.value,
      InputComponent: ar,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : eo(t) > e.value,
      InputComponent: ar,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : eo(t) >= e.value,
      InputComponent: ar,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : eo(t) < e.value,
      InputComponent: ar,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : eo(t) <= e.value,
      InputComponent: ar,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "isEmpty",
      getApplyFilterFn: () => (e) => e == null,
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: () => (e) => e != null,
      requiresFilterValue: false
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => !Array.isArray(e.value) || e.value.length === 0 ? null : (t) => t != null && e.value.includes(Number(t)),
      InputComponent: Lu,
      InputComponentProps: {
        type: "number"
      }
    }
  ], Mw = C({}, Ir, {
    type: "number",
    align: "right",
    headerAlign: "right",
    sortComparator: Au,
    valueParser: (e) => e === "" ? null : Number(e),
    valueFormatter: (e) => JC(e) ? e.toLocaleString() : e || "",
    filterOperators: Iw(),
    getApplyQuickFilterFn: Pw
  });
  function Yo(e) {
    return (e == null ? void 0 : e.type) === "singleSelect";
  }
  function go(e, t) {
    if (e) return typeof e.valueOptions == "function" ? e.valueOptions(C({
      field: e.field
    }, t)) : e.valueOptions;
  }
  function Ll(e, t, r) {
    if (t === void 0) return;
    const o = t.find((n) => {
      const l = r(n);
      return String(l) === String(e);
    });
    return r(o);
  }
  const Ow = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "className",
    "hasFocus",
    "isValidating",
    "isProcessingProps",
    "error",
    "onValueChange",
    "initialOpen"
  ], Fw = [
    "MenuProps"
  ];
  function kw(e) {
    return !!e.key;
  }
  function Ew(e) {
    var _a2, _b2;
    const t = ae(), { id: r, value: o, field: n, row: l, colDef: s, hasFocus: i, error: a, onValueChange: u, initialOpen: c = t.editMode === $r.Cell } = e, p = fe(e, Ow), g = Fe(), b = d.useRef(null), h = d.useRef(null), [m, x] = d.useState(c), w = (((_a2 = t.slotProps) == null ? void 0 : _a2.baseSelect) || {}).native ?? false, k = ((_b2 = t.slotProps) == null ? void 0 : _b2.baseSelect) || {}, { MenuProps: L } = k, F = fe(k, Fw);
    if (Tt(() => {
      var _a3;
      i && ((_a3 = h.current) == null ? void 0 : _a3.focus());
    }, [
      i
    ]), !Yo(s)) return null;
    const I = go(s, {
      id: r,
      row: l
    });
    if (!I) return null;
    const j = s.getOptionValue, D = s.getOptionLabel, S = async ($) => {
      if (!Yo(s) || !I) return;
      x(false);
      const E = $.target, N = Ll(E.value, I, j);
      u && await u($, N), await g.current.setEditCellValue({
        id: r,
        field: n,
        value: N
      }, $);
    }, y = ($, E) => {
      if (t.editMode === $r.Row) {
        x(false);
        return;
      }
      if (E === "backdropClick" || $.key === "Escape") {
        const N = g.current.getCellParams(r, n);
        g.current.publishEvent("cellEditStop", C({}, N, {
          reason: $.key === "Escape" ? xr.escapeKeyDown : xr.cellFocusOut
        }));
      }
    }, M = ($) => {
      kw($) && $.key === "Enter" || x(true);
    };
    return !I || !s ? null : f.jsx(t.slots.baseSelect, C({
      ref: b,
      inputRef: h,
      value: o,
      onChange: S,
      open: m,
      onOpen: M,
      MenuProps: C({
        onClose: y
      }, L),
      error: a,
      native: w,
      fullWidth: true
    }, p, F, {
      children: I.map(($) => {
        var _a3;
        const E = j($);
        return d.createElement(t.slots.baseSelectOption, C({}, ((_a3 = t.slotProps) == null ? void 0 : _a3.baseSelectOption) || {}, {
          native: w,
          key: E,
          value: E
        }), D($));
      })
    }));
  }
  const Tw = (e) => f.jsx(Ew, C({}, e)), Aw = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "placeholder",
    "tabIndex",
    "label",
    "variant",
    "isFilterActive",
    "clearButton",
    "InputLabelProps"
  ], Dw = ({ column: e, OptionComponent: t, getOptionLabel: r, getOptionValue: o, isSelectNative: n, baseSelectOptionProps: l }) => [
    "",
    ...go(e) || []
  ].map((i) => {
    const a = o(i);
    let u = r(i);
    return u === "" && (u = "\u2003"), d.createElement(t, C({}, l, {
      native: n,
      key: a,
      value: a
    }), u);
  }), $w = se("div")({
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function Ja(e) {
    var _a2, _b2, _c2, _d2, _e;
    const { item: t, applyValue: r, type: o, apiRef: n, focusElementRef: l, placeholder: s, tabIndex: i, label: a, variant: u = "standard", clearButton: c } = e, p = fe(e, Aw), g = t.value ?? "", b = it(), h = it(), m = ae(), x = ((_b2 = (_a2 = m.slotProps) == null ? void 0 : _a2.baseSelect) == null ? void 0 : _b2.native) ?? false;
    let v = null;
    if (t.field) {
      const j = n.current.getColumn(t.field);
      Yo(j) && (v = j);
    }
    const w = v == null ? void 0 : v.getOptionValue, k = v == null ? void 0 : v.getOptionLabel, L = d.useMemo(() => go(v), [
      v
    ]), F = d.useCallback((j) => {
      let D = j.target.value;
      D = Ll(D, L, w), r(C({}, t, {
        value: D
      }));
    }, [
      L,
      w,
      r,
      t
    ]);
    if (!Yo(v)) return null;
    const I = a ?? n.current.getLocaleText("filterPanelInputLabel");
    return f.jsxs($w, {
      children: [
        f.jsxs(m.slots.baseFormControl, {
          fullWidth: true,
          children: [
            f.jsx(m.slots.baseInputLabel, C({}, (_c2 = m.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: h,
              htmlFor: b,
              shrink: true,
              variant: u,
              children: I
            })),
            f.jsx(m.slots.baseSelect, C({
              id: b,
              label: I,
              labelId: h,
              value: g,
              onChange: F,
              variant: u,
              type: o || "text",
              inputProps: {
                tabIndex: i,
                ref: l,
                placeholder: s ?? n.current.getLocaleText("filterPanelInputPlaceholder")
              },
              native: x,
              notched: u === "outlined" ? true : void 0
            }, p, (_d2 = m.slotProps) == null ? void 0 : _d2.baseSelect, {
              children: Dw({
                column: v,
                OptionComponent: m.slots.baseSelectOption,
                getOptionLabel: k,
                getOptionValue: w,
                isSelectNative: x,
                baseSelectOptionProps: (_e = m.slotProps) == null ? void 0 : _e.baseSelectOption
              })
            }))
          ]
        }),
        c
      ]
    });
  }
  const Lw = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "color",
    "error",
    "helperText",
    "size",
    "variant"
  ], Rw = [
    "key"
  ], jw = Yc();
  function Hw(e) {
    const { item: t, applyValue: r, apiRef: o, focusElementRef: n, color: l, error: s, helperText: i, size: a, variant: u = "standard" } = e, c = fe(e, Lw), p = {
      color: l,
      error: s,
      helperText: i,
      size: a,
      variant: u
    }, g = it(), b = ae();
    let h = null;
    if (t.field) {
      const F = o.current.getColumn(t.field);
      Yo(F) && (h = F);
    }
    const m = h == null ? void 0 : h.getOptionValue, x = h == null ? void 0 : h.getOptionLabel, v = d.useCallback((F, I) => m(F) === m(I), [
      m
    ]), w = d.useMemo(() => go(h) || [], [
      h
    ]), k = d.useMemo(() => Array.isArray(t.value) ? t.value.reduce((F, I) => {
      const j = w.find((D) => m(D) === I);
      return j != null && F.push(j), F;
    }, []) : [], [
      m,
      t.value,
      w
    ]), L = d.useCallback((F, I) => {
      r(C({}, t, {
        value: I.map(m)
      }));
    }, [
      r,
      t,
      m
    ]);
    return f.jsx(lu, C({
      multiple: true,
      options: w,
      isOptionEqualToValue: v,
      filterOptions: jw,
      id: g,
      value: k,
      onChange: L,
      getOptionLabel: x,
      renderTags: (F, I) => F.map((j, D) => {
        const S = I({
          index: D
        }), { key: y } = S, M = fe(S, Rw);
        return f.jsx(b.slots.baseChip, C({
          variant: "outlined",
          size: "small",
          label: x(j)
        }, M), y);
      }),
      renderInput: (F) => {
        var _a2;
        return f.jsx(b.slots.baseTextField, C({}, F, {
          label: o.current.getLocaleText("filterPanelInputLabel"),
          placeholder: o.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: C({}, F.InputLabelProps, {
            shrink: true
          }),
          inputRef: n,
          type: "singleSelect"
        }, p, (_a2 = b.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, c));
  }
  const Po = (e) => e == null || !vi(e) ? e : e.value, zw = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => Po(t) === Po(e.value),
      InputComponent: Ja
    },
    {
      value: "not",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => Po(t) !== Po(e.value),
      InputComponent: Ja
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => {
        if (!Array.isArray(e.value) || e.value.length === 0) return null;
        const t = e.value.map(Po);
        return (r) => t.includes(Po(r));
      },
      InputComponent: Hw
    }
  ], Nw = (e) => typeof e[0] == "object", _w = (e) => vi(e) ? e.value : e, Gw = (e) => vi(e) ? e.label : String(e), Vw = C({}, Ir, {
    type: "singleSelect",
    getOptionLabel: Gw,
    getOptionValue: _w,
    valueFormatter(e, t, r, o) {
      const n = Xn(o.current.state, t);
      if (!Yo(r)) return "";
      const l = go(r, {
        id: n,
        row: t
      });
      if (e == null) return "";
      if (!l) return e;
      if (!Nw(l)) return r.getOptionLabel(e);
      const s = l.find((i) => r.getOptionValue(i) === e);
      return s ? r.getOptionLabel(s) : "";
    },
    renderEditCell: Tw,
    filterOperators: zw(),
    pastedValueParser: (e, t, r) => {
      const o = r, n = go(o) || [], l = o.getOptionValue;
      if (n.find((i) => l(i) === e)) return e;
    }
  }), Bw = "string", Ww = () => ({
    string: Ir,
    number: Mw,
    date: vw,
    dateTime: Sw,
    boolean: Xu,
    singleSelect: Vw,
    [ql]: Py,
    custom: Ir
  }), Ai = (e) => e.headerFiltering, Uw = we(Ai, (e) => (e == null ? void 0 : e.enabled) ?? false), qw = we(Ai, (e) => e.editing), Kw = we(Ai, (e) => e.menuOpen), Jl = (e) => e.columnGrouping, md = Qe(Jl, (e) => (e == null ? void 0 : e.unwrappedGroupingModel) ?? {}), bd = Qe(Jl, (e) => (e == null ? void 0 : e.lookup) ?? {}), Yw = Qe(Jl, (e) => (e == null ? void 0 : e.headerStructure) ?? []), Qn = we(Jl, (e) => (e == null ? void 0 : e.maxDepth) ?? 0), Cd = [
    "maxWidth",
    "minWidth",
    "width",
    "flex"
  ], ys = Ww();
  function Xw({ initialFreeSpace: e, totalFlexUnits: t, flexColumns: r }) {
    const o = new Set(r.map((s) => s.field)), n = {
      all: {},
      frozenFields: [],
      freeze: (s) => {
        const i = n.all[s];
        i && i.frozen !== true && (n.all[s].frozen = true, n.frozenFields.push(s));
      }
    };
    function l() {
      if (n.frozenFields.length === o.size) return;
      const s = {
        min: {},
        max: {}
      };
      let i = e, a = t, u = 0;
      n.frozenFields.forEach((c) => {
        i -= n.all[c].computedWidth, a -= n.all[c].flex;
      });
      for (let c = 0; c < r.length; c += 1) {
        const p = r[c];
        if (n.all[p.field] && n.all[p.field].frozen === true) continue;
        let b = i / a * p.flex;
        b < p.minWidth ? (u += p.minWidth - b, b = p.minWidth, s.min[p.field] = true) : b > p.maxWidth && (u += p.maxWidth - b, b = p.maxWidth, s.max[p.field] = true), n.all[p.field] = {
          frozen: false,
          computedWidth: b,
          flex: p.flex
        };
      }
      u < 0 ? Object.keys(s.max).forEach((c) => {
        n.freeze(c);
      }) : u > 0 ? Object.keys(s.min).forEach((c) => {
        n.freeze(c);
      }) : r.forEach(({ field: c }) => {
        n.freeze(c);
      }), l();
    }
    return l(), n.all;
  }
  const Ks = (e, t) => {
    const r = {};
    let o = 0, n = 0;
    const l = [];
    e.orderedFields.forEach((a) => {
      let u = e.lookup[a], c = 0, p = false;
      e.columnVisibilityModel[a] !== false && (u.flex && u.flex > 0 ? (o += u.flex, p = true) : c = tr(u.width || Ir.width, u.minWidth || Ir.minWidth, u.maxWidth || Ir.maxWidth), n += c), u.computedWidth !== c && (u = C({}, u, {
        computedWidth: c
      })), p && l.push(u), r[a] = u;
    });
    const s = t === void 0 ? 0 : t.viewportOuterSize.width - (t.hasScrollY ? t.scrollbarSize : 0), i = Math.max(s - n, 0);
    if (o > 0 && s > 0) {
      const a = Xw({
        initialFreeSpace: i,
        totalFlexUnits: o,
        flexColumns: l
      });
      Object.keys(a).forEach((u) => {
        r[u].computedWidth = a[u].computedWidth;
      });
    }
    return C({}, e, {
      lookup: r
    });
  }, Qw = (e, t) => {
    if (!t) return e;
    const { orderedFields: r = [], dimensions: o = {} } = t, n = Object.keys(o);
    if (n.length === 0 && r.length === 0) return e;
    const l = {}, s = [];
    for (let c = 0; c < r.length; c += 1) {
      const p = r[c];
      e.lookup[p] && (l[p] = true, s.push(p));
    }
    const i = s.length === 0 ? e.orderedFields : [
      ...s,
      ...e.orderedFields.filter((c) => !l[c])
    ], a = C({}, e.lookup);
    for (let c = 0; c < n.length; c += 1) {
      const p = n[c], g = C({}, a[p], {
        hasBeenResized: true
      });
      Object.entries(o[p]).forEach(([b, h]) => {
        g[b] = h === -1 ? 1 / 0 : h;
      }), a[p] = g;
    }
    return C({}, e, {
      orderedFields: i,
      lookup: a
    });
  };
  function ec(e) {
    let t = ys[Bw];
    return e && ys[e] && (t = ys[e]), t;
  }
  const Fo = ({ apiRef: e, columnsToUpsert: t, initialState: r, columnVisibilityModel: o = dr(e), keepOnlyColumnsToUpsert: n = false }) => {
    var _a2, _b2;
    const l = !e.current.state.columns;
    let s;
    if (l) s = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel: o
    };
    else {
      const c = Ar(e.current.state);
      s = {
        orderedFields: n ? [] : [
          ...c.orderedFields
        ],
        lookup: C({}, c.lookup),
        columnVisibilityModel: o
      };
    }
    let i = {};
    n && !l && (i = Object.keys(s.lookup).reduce((c, p) => C({}, c, {
      [p]: false
    }), {})), t.forEach((c) => {
      const { field: p } = c;
      i[p] = true;
      let g = s.lookup[p];
      g == null ? (g = C({}, ec(c.type), {
        field: p,
        hasBeenResized: false
      }), s.orderedFields.push(p)) : n && s.orderedFields.push(p), g && g.type !== c.type && (g = C({}, ec(c.type), {
        field: p
      }));
      let b = g.hasBeenResized;
      Cd.forEach((h) => {
        c[h] !== void 0 && (b = true, c[h] === -1 && (c[h] = 1 / 0));
      }), s.lookup[p] = xp(g, C({}, c, {
        hasBeenResized: b
      }));
    }), n && !l && Object.keys(s.lookup).forEach((c) => {
      i[c] || delete s.lookup[c];
    });
    const a = e.current.unstable_applyPipeProcessors("hydrateColumns", s), u = Qw(a, r);
    return Ks(u, ((_b2 = (_a2 = e.current).getRootDimensions) == null ? void 0 : _b2.call(_a2)) ?? void 0);
  };
  function Zw({ firstColumnToRender: e, apiRef: t, firstRowToRender: r, lastRowToRender: o, visibleRows: n }) {
    let l = e, s = false;
    for (; !s; ) {
      s = true;
      for (let i = r; i < o; i += 1) if (n[i]) {
        const u = n[i].id, c = t.current.unstable_getCellColSpanInfo(u, l);
        if (c && c.spannedByColSpan && c.leftVisibleCellIndex < l) {
          l = c.leftVisibleCellIndex, s = false;
          break;
        }
      }
    }
    return l;
  }
  function es(e, t) {
    if (t.unstable_listView) return 0;
    const r = Qo(e), o = Qn(e), n = Uw(e), l = Math.floor(t.columnHeaderHeight * r), s = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * r), i = n ? Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * r) : 0;
    return l + s * o + i;
  }
  const nn = (e) => e.rowsMeta, Rl = 1, yd = 1.5, Jw = (e) => {
    const { scrollDirection: t, classes: r } = e, o = {
      root: [
        "scrollArea",
        `scrollArea--${t}`
      ]
    };
    return ge(o, Ae, r);
  }, ex = ot("div", {
    name: "MuiDataGrid",
    slot: "ScrollArea",
    overridesResolver: (e, t) => [
      {
        [`&.${O["scrollArea--left"]}`]: t["scrollArea--left"]
      },
      {
        [`&.${O["scrollArea--right"]}`]: t["scrollArea--right"]
      },
      {
        [`&.${O["scrollArea--up"]}`]: t["scrollArea--up"]
      },
      {
        [`&.${O["scrollArea--down"]}`]: t["scrollArea--down"]
      },
      t.scrollArea
    ]
  })(() => ({
    position: "absolute",
    zIndex: 101,
    [`&.${O["scrollArea--left"]}`]: {
      top: 0,
      left: 0,
      width: 20,
      bottom: 0
    },
    [`&.${O["scrollArea--right"]}`]: {
      top: 0,
      right: 0,
      width: 20,
      bottom: 0
    },
    [`&.${O["scrollArea--up"]}`]: {
      top: 0,
      left: 0,
      right: 0,
      height: 20
    },
    [`&.${O["scrollArea--down"]}`]: {
      bottom: 0,
      left: 0,
      right: 0,
      height: 20
    }
  })), tx = Wn(It, (e, t) => t === "left" ? e.leftPinnedWidth : t === "right" ? e.rightPinnedWidth + (e.hasScrollX ? e.scrollbarSize : 0) : 0);
  function rx(e) {
    const t = Fe(), [r, o] = d.useState("none");
    return le(t, "columnHeaderDragStart", () => o("horizontal")), le(t, "columnHeaderDragEnd", () => o("none")), le(t, "rowDragStart", () => o("vertical")), le(t, "rowDragEnd", () => o("none")), r === "none" ? null : r === "horizontal" ? f.jsx(ox, C({}, e)) : f.jsx(nx, C({}, e));
  }
  function ox(e) {
    const { scrollDirection: t, scrollPosition: r } = e, o = d.useRef(null), n = Fe(), l = Jt(), s = X(n, Qo), i = X(n, Ul), a = Dn(n, tx, t), u = () => {
      const m = It(n.current.state);
      if (t === "left") return r.current.left > 0;
      if (t === "right") {
        const x = i - m.viewportInnerSize.width;
        return r.current.left < x;
      }
      return false;
    }, c = ae(), p = es(n, c), g = Math.floor(c.columnHeaderHeight * s), b = C({
      height: g,
      top: p - g
    }, t === "left" ? {
      left: a
    } : {}, t === "right" ? {
      right: a
    } : {}), h = Be((m) => {
      let x;
      if (m.preventDefault(), t === "left") x = m.clientX - o.current.getBoundingClientRect().right;
      else if (t === "right") x = Math.max(1, m.clientX - o.current.getBoundingClientRect().left);
      else throw new Error("MUI X: Wrong drag direction");
      x = (x - Rl) * yd + Rl, l.start(0, () => {
        n.current.scroll({
          left: r.current.left + x,
          top: r.current.top
        });
      });
    });
    return f.jsx(wd, C({}, e, {
      ref: o,
      getCanScrollMore: u,
      style: b,
      handleDragOver: h
    }));
  }
  function nx(e) {
    const { scrollDirection: t, scrollPosition: r } = e, o = d.useRef(null), n = Fe(), l = Jt(), s = X(n, nn), i = () => {
      const g = It(n.current.state);
      if (t === "up") return r.current.top > 0;
      if (t === "down") {
        const h = (s.currentPageTotalHeight || 0) - g.viewportInnerSize.height - g.scrollbarSize;
        return r.current.top < h;
      }
      return false;
    }, a = ae(), u = es(n, a), c = {
      top: t === "up" ? u : void 0,
      bottom: t === "down" ? 0 : void 0
    }, p = Be((g) => {
      let b;
      if (g.preventDefault(), t === "up") b = g.clientY - o.current.getBoundingClientRect().bottom;
      else if (t === "down") b = Math.max(1, g.clientY - o.current.getBoundingClientRect().top);
      else throw new Error("MUI X: Wrong drag direction");
      b = (b - Rl) * yd + Rl, l.start(0, () => {
        n.current.scroll({
          left: r.current.left,
          top: r.current.top + b
        });
      });
    });
    return f.jsx(wd, C({}, e, {
      ref: o,
      getCanScrollMore: i,
      style: c,
      handleDragOver: p
    }));
  }
  const wd = ze(function(t, r) {
    const { scrollDirection: o, getCanScrollMore: n, style: l, handleDragOver: s } = t, i = Fe(), [a, u] = d.useState(n), c = ae(), p = C({}, c, {
      scrollDirection: o
    }), g = Jw(p);
    return le(i, "scrollPositionChange", () => {
      u(n);
    }), a ? f.jsx(ex, {
      ref: r,
      className: g.root,
      ownerState: p,
      onDragOver: s,
      style: l
    }) : null;
  }), fl = Wr(rx);
  var Di = {}, xd = {
    exports: {}
  }, vd = {
    exports: {}
  };
  (function(e) {
    function t(r) {
      "@babel/helpers - typeof";
      return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, e.exports.__esModule = true, e.exports.default = e.exports, t(r);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  })(vd);
  var lx = vd.exports;
  (function(e) {
    var t = lx.default;
    function r(o, n) {
      if (typeof WeakMap == "function") var l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
      return (e.exports = r = function(a, u) {
        if (!u && a && a.__esModule) return a;
        var c, p, g = {
          __proto__: null,
          default: a
        };
        if (a === null || t(a) != "object" && typeof a != "function") return g;
        if (c = u ? s : l) {
          if (c.has(a)) return c.get(a);
          c.set(a, g);
        }
        for (var b in a) b !== "default" && {}.hasOwnProperty.call(a, b) && ((p = (c = Object.defineProperty) && Object.getOwnPropertyDescriptor(a, b)) && (p.get || p.set) ? c(g, b, p) : g[b] = a[b]);
        return g;
      }, e.exports.__esModule = true, e.exports.default = e.exports)(o, n);
    }
    e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
  })(xd);
  var sx = xd.exports, ix = sx.default;
  Object.defineProperty(Di, "__esModule", {
    value: true
  });
  var Sd = Di.default = void 0, ax = ix(d);
  Sd = Di.default = parseInt(ax.version, 10);
  const Pd = d.createContext(void 0);
  function yr() {
    const e = d.useContext(Pd);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid private context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const ro = (e, t) => Yn(e), $i = (e, t) => X(e, Yn), cx = typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "empty", ux = cx.includes("firefox"), ts = (e) => e.virtualization;
  we(ts, (e) => e.enabled);
  const Id = we(ts, (e) => e.enabledForColumns), dx = we(ts, (e) => e.enabledForRows), Zn = we(ts, (e) => e.renderContext), px = Qe((e) => e.virtualization.renderContext.firstColumnIndex, (e) => e.virtualization.renderContext.lastColumnIndex, (e, t) => ({
    firstColumnIndex: e,
    lastColumnIndex: t
  })), Ys = {
    firstRowIndex: 0,
    lastRowIndex: 0,
    firstColumnIndex: 0,
    lastColumnIndex: 0
  }, fx = (e, t) => {
    const { disableVirtualization: r, autoHeight: o } = t;
    return C({}, e, {
      virtualization: {
        enabled: !r,
        enabledForColumns: !r,
        enabledForRows: !r && !o,
        renderContext: Ys
      }
    });
  };
  function gx(e, t) {
    const r = (l) => {
      e.current.setState((s) => C({}, s, {
        virtualization: C({}, s.virtualization, {
          enabled: l,
          enabledForColumns: l,
          enabledForRows: l && !t.autoHeight
        })
      }));
    };
    Oe(e, {
      unstable_setVirtualization: r,
      unstable_setColumnVirtualization: (l) => {
        e.current.setState((s) => C({}, s, {
          virtualization: C({}, s.virtualization, {
            enabledForColumns: l
          })
        }));
      }
    }, "public"), d.useEffect(() => {
      r(!t.disableVirtualization);
    }, [
      t.disableVirtualization,
      t.autoHeight
    ]);
  }
  const Li = (e) => e.rowSpanning, Md = we(Li, (e) => e.hiddenCells), hx = we(Li, (e) => e.spannedCells), mx = we(Li, (e) => e.hiddenCellOriginMap), Xo = (e) => e.listViewColumn, bx = yu(Wt, Zn, Yn, ft, ur, (e, t, r, o, n) => {
    if (!e) return false;
    const l = n[e.id];
    if (!l) return false;
    const s = r.rowToIndexMap.get(l), i = o.slice(t.firstColumnIndex, t.lastColumnIndex).findIndex((u) => u.field === e.field);
    return !(s !== void 0 && i !== -1 && s >= t.firstRowIndex && s <= t.lastRowIndex);
  }), Od = Qe(bx, ft, Yn, ur, Wt, (e, t, r, o, n) => {
    if (!e) return null;
    const l = o[n.id];
    if (!l) return null;
    const s = r.rowToIndexMap.get(l);
    if (s === void 0) return null;
    const i = t.findIndex((a) => a.field === n.field);
    return i === -1 ? null : C({}, n, {
      rowIndex: s,
      columnIndex: i
    });
  });
  function Lo(e, t) {
    return Math.round(e * 10 ** t) / 10 ** t;
  }
  const jl = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), ws = 50;
  var Ct = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e;
  })(Ct || {});
  const tc = {
    top: 0,
    left: 0
  }, Cx = Object.freeze(/* @__PURE__ */ new Map()), yx = (e, t, r, o, n) => ({
    direction: Ct.NONE,
    buffer: kd(e, Ct.NONE, t, r, o, n)
  }), wx = () => {
    var _a2;
    const e = yr(), t = ae(), { unstable_listView: r } = t, o = X(e, () => r ? [
      Xo(e.current.state)
    ] : ft(e)), n = X(e, dx) && !jl, l = X(e, Id) && !jl, s = X(e, Zo), i = en(e), a = r ? Dl : i, u = s.bottom.length > 0, [c, p] = d.useState(Cx), g = Xt(), b = X(e, to), h = $i(e), m = e.current.mainElementRef, x = e.current.virtualScrollerRef, v = e.current.virtualScrollbarVerticalRef, w = e.current.virtualScrollbarHorizontalRef, k = X(e, iy), L = d.useRef(false), F = X(e, wi), I = X(e, xC), j = X(e, Ul), D = X(e, xx), S = X(e, Fu), y = X(e, Ou), M = d.useRef(null), $ = d.useCallback((Y) => {
      if (m.current = Y, !Y) return;
      const ne = Y.getBoundingClientRect();
      let he = {
        width: Lo(ne.width, 1),
        height: Lo(ne.height, 1)
      };
      if ((!M.current || he.width !== M.current.width && he.height !== M.current.height) && (M.current = he, e.current.publishEvent("resize", he)), typeof ResizeObserver > "u") return;
      const J = new ResizeObserver((Ie) => {
        const ee = Ie[0];
        if (!ee) return;
        const Se = {
          width: Lo(ee.contentRect.width, 1),
          height: Lo(ee.contentRect.height, 1)
        };
        Se.width === he.width && Se.height === he.height || (e.current.publishEvent("resize", Se), he = Se);
      });
      if (J.observe(Y), Sd >= 19) return () => {
        m.current = null, J.disconnect();
      };
    }, [
      e,
      m
    ]), E = d.useRef(((_a2 = t.initialState) == null ? void 0 : _a2.scroll) ?? tc), N = d.useRef(false), T = d.useRef(tc), P = d.useRef(Ys), A = X(e, Zn), R = X(e, Od), z = Jt(), _ = d.useRef(void 0), H = Lr(() => yx(g, t.rowBufferPx, t.columnBufferPx, F * 15, ws * 6)).current, G = d.useCallback((Y) => {
      if (lc(Y, e.current.state.virtualization.renderContext)) return;
      const ne = Y.firstRowIndex !== P.current.firstRowIndex || Y.lastRowIndex !== P.current.lastRowIndex;
      e.current.setState((J) => C({}, J, {
        virtualization: C({}, J.virtualization, {
          renderContext: Y
        })
      })), It(e.current.state).isReady && ne && (P.current = Y, e.current.publishEvent("renderedRowsIntervalChange", Y)), T.current = E.current;
    }, [
      e
    ]), U = Be(() => {
      const Y = x.current;
      if (!Y) return;
      const ne = It(e.current.state), he = Math.ceil(ne.minimumSize.height - ne.viewportOuterSize.height), J = Math.ceil(ne.minimumSize.width - ne.viewportInnerSize.width), Ie = {
        top: tr(Y.scrollTop, 0, he),
        left: g ? tr(Y.scrollLeft, -J, 0) : tr(Y.scrollLeft, 0, J)
      }, ee = Ie.left - E.current.left, Se = Ie.top - E.current.top, xe = ee !== 0 || Se !== 0;
      E.current = Ie;
      const ke = xe ? Px(ee, Se) : Ct.NONE, Ve = Math.abs(E.current.top - T.current.top), qe = Math.abs(E.current.left - T.current.left), Ne = Ve >= F || qe >= ws, Le = H.direction !== ke;
      if (!(Ne || Le)) return A;
      if (Le) switch (ke) {
        case Ct.NONE:
        case Ct.LEFT:
        case Ct.RIGHT:
          _.current = void 0;
          break;
        default:
          _.current = A;
          break;
      }
      H.direction = ke, H.buffer = kd(g, ke, t.rowBufferPx, t.columnBufferPx, F * 15, ws * 6);
      const Ke = rc(e, t, n, l), _e = oc(Ke, E.current, H);
      return lc(_e, A) || (vp.flushSync(() => {
        G(_e);
      }), z.start(1e3, U)), _e;
    }), B = () => {
      if (!It(e.current.state).isReady && (n || l)) return;
      const Y = rc(e, t, n, l), ne = oc(Y, E.current, H);
      _.current = void 0, G(ne);
    }, q = Be(() => {
      if (N.current) {
        N.current = false;
        return;
      }
      const Y = U();
      e.current.publishEvent("scrollPositionChange", {
        top: E.current.top,
        left: E.current.left,
        renderContext: Y
      });
    }), W = Be((Y) => {
      e.current.publishEvent("virtualScrollerWheel", {}, Y);
    }), te = Be((Y) => {
      e.current.publishEvent("virtualScrollerTouchMove", {}, Y);
    }), Z = (Y = {}) => {
      var _a3;
      if (!Y.rows && !h.range) return [];
      const ne = xt(e);
      let he = A;
      Y.renderContext && (he = Y.renderContext, he.firstColumnIndex = A.firstColumnIndex, he.lastColumnIndex = A.lastColumnIndex);
      const J = !u && Y.position === void 0 || u && Y.position === "bottom", Ie = Y.position !== void 0;
      let ee;
      switch (Y.position) {
        case "top":
          ee = 0;
          break;
        case "bottom":
          ee = s.top.length + h.rows.length;
          break;
        case void 0:
          ee = s.top.length;
          break;
      }
      const Se = Y.rows ?? h.rows, xe = he.firstRowIndex, ke = Math.min(he.lastRowIndex, Se.length), Ve = Y.rows ? Ga(0, Y.rows.length) : Ga(xe, ke);
      let qe = -1;
      !Ie && R && (R.rowIndex < xe && (Ve.unshift(R.rowIndex), qe = R.rowIndex), R.rowIndex > ke && (Ve.push(R.rowIndex), qe = R.rowIndex));
      const Ne = [], Le = (_a3 = t.slotProps) == null ? void 0 : _a3.row, Re = lo(e);
      return Ve.forEach((Ke) => {
        var _a4, _b2, _c2;
        const { id: _e, model: me } = Se[Ke];
        if (!ne[_e]) return;
        const ve = (((_a4 = h == null ? void 0 : h.range) == null ? void 0 : _a4.firstRowIndex) || 0) + ee + Ke;
        if (k) {
          const Vt = a.left.length, zt = o.length - a.right.length;
          e.current.calculateColSpan({
            rowId: _e,
            minFirstColumn: Vt,
            maxLastColumn: zt,
            columns: o
          }), a.left.length > 0 && e.current.calculateColSpan({
            rowId: _e,
            minFirstColumn: 0,
            maxLastColumn: a.left.length,
            columns: o
          }), a.right.length > 0 && e.current.calculateColSpan({
            rowId: _e,
            minFirstColumn: o.length - a.right.length,
            maxLastColumn: o.length,
            columns: o
          });
        }
        const pe = e.current.rowHasAutoHeight(_e) ? "auto" : e.current.unstable_getRowHeight(_e);
        let be;
        b[_e] == null ? be = false : be = e.current.isRowSelectable(_e);
        let je = false;
        Y.position === void 0 && (je = Ke === 0);
        let $e = false;
        const ct = Ke === Se.length - 1;
        if (J) if (Ie) $e = ct;
        else {
          const Vt = h.rows.length - 1;
          Ke === Vt && ($e = true);
        }
        let Ot = he;
        _.current && Ke >= _.current.firstRowIndex && Ke < _.current.lastRowIndex && (Ot = _.current);
        const yt = Ke === qe, Rr = (R == null ? void 0 : R.rowIndex) === ve, Gt = Fd(Re, Ot, a.left.length), jr = ct && Y.position === "top", At = Ot.firstColumnIndex, Qt = Ot.lastColumnIndex;
        if (Ne.push(f.jsx(t.slots.row, C({
          row: me,
          rowId: _e,
          index: ve,
          selected: be,
          offsetLeft: Gt,
          columnsTotalWidth: j,
          rowHeight: pe,
          pinnedColumns: a,
          visibleColumns: o,
          firstColumnIndex: At,
          lastColumnIndex: Qt,
          focusedColumnIndex: Rr ? R.columnIndex : void 0,
          isFirstVisible: je,
          isLastVisible: $e,
          isNotVisible: yt,
          showBottomBorder: jr,
          scrollbarWidth: S,
          gridHasFiller: y
        }, Le), _e)), yt) return;
        const Ht = c.get(_e);
        Ht && Ne.push(Ht), Y.position === void 0 && ct && Ne.push((_c2 = (_b2 = e.current).getInfiniteLoadingTriggerElement) == null ? void 0 : _c2.call(_b2, {
          lastRowId: _e
        }));
      }), Ne;
    }, re = d.useMemo(() => ({
      overflowX: !D || r ? "hidden" : void 0,
      overflowY: t.autoHeight ? "hidden" : void 0
    }), [
      D,
      t.autoHeight,
      r
    ]), ce = d.useMemo(() => {
      const Y = {
        width: D ? j : "auto",
        flexBasis: I,
        flexShrink: 0
      };
      return Y.flexBasis === 0 && (Y.flexBasis = qu), Y;
    }, [
      j,
      I,
      D
    ]), Ce = d.useCallback((Y) => {
      Y && e.current.publishEvent("virtualScrollerContentSizeChange", {
        columnsTotalWidth: j,
        contentHeight: I
      });
    }, [
      e,
      j,
      I
    ]);
    return Tt(() => {
      var _a3, _b2;
      L.current && ((_b2 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a3));
    }, [
      e,
      l,
      n
    ]), Tt(() => {
      r && (x.current.scrollLeft = 0);
    }, [
      r,
      x
    ]), lw(A !== Ys, () => {
      var _a3;
      if (e.current.publishEvent("scrollPositionChange", {
        top: E.current.top,
        left: E.current.left,
        renderContext: A
      }), L.current = true, ((_a3 = t.initialState) == null ? void 0 : _a3.scroll) && x.current) {
        const Y = x.current, { top: ne, left: he } = t.initialState.scroll, J = {
          top: !(ne > 0),
          left: !(he > 0)
        };
        if (!J.left && j && (Y.scrollLeft = he, N.current = true, J.left = true), !J.top && I && (Y.scrollTop = ne, N.current = true, J.top = true), !J.top || !J.left) {
          const Ie = e.current.subscribeEvent("virtualScrollerContentSizeChange", (ee) => {
            !J.left && ee.columnsTotalWidth && (Y.scrollLeft = he, N.current = true, J.left = true), !J.top && ee.contentHeight && (Y.scrollTop = ne, N.current = true, J.top = true), J.left && J.top && Ie();
          });
          return Ie;
        }
      }
    }), e.current.register("private", {
      updateRenderContext: B
    }), rt(e, "sortedRowsSet", B), rt(e, "paginationModelChange", B), rt(e, "columnsChange", B), {
      renderContext: A,
      setPanels: p,
      getRows: Z,
      getContainerProps: () => ({
        ref: $
      }),
      getScrollerProps: () => ({
        ref: x,
        onScroll: q,
        onWheel: W,
        onTouchMove: te,
        style: re,
        role: "presentation",
        tabIndex: ux ? -1 : void 0
      }),
      getContentProps: () => ({
        style: ce,
        role: "presentation",
        ref: Ce
      }),
      getRenderZoneProps: () => ({
        role: "rowgroup"
      }),
      getScrollbarVerticalProps: () => ({
        ref: v,
        scrollPosition: E
      }),
      getScrollbarHorizontalProps: () => ({
        ref: w,
        scrollPosition: E
      }),
      getScrollAreaProps: () => ({
        scrollPosition: E
      })
    };
  };
  function xx(e) {
    return e.dimensions.viewportOuterSize.width > 0 && e.dimensions.columnsTotalWidth > e.dimensions.viewportOuterSize.width;
  }
  function rc(e, t, r, o) {
    const n = It(e.current.state), l = ro(e), s = t.unstable_listView ? [
      Xo(e.current.state)
    ] : ft(e), i = mx(e), a = e.current.state.rows.dataRowIds.at(-1), u = s.at(-1);
    return {
      enabledForRows: r,
      enabledForColumns: o,
      apiRef: e,
      autoHeight: t.autoHeight,
      rowBufferPx: t.rowBufferPx,
      columnBufferPx: t.columnBufferPx,
      leftPinnedWidth: n.leftPinnedWidth,
      columnsTotalWidth: n.columnsTotalWidth,
      viewportInnerWidth: n.viewportInnerSize.width,
      viewportInnerHeight: n.viewportInnerSize.height,
      lastRowHeight: a !== void 0 ? e.current.unstable_getRowHeight(a) : 0,
      lastColumnWidth: (u == null ? void 0 : u.computedWidth) ?? 0,
      rowsMeta: nn(e.current.state),
      columnPositions: lo(e),
      rows: l.rows,
      range: l.range,
      pinnedColumns: en(e),
      visibleColumns: s,
      hiddenCellsOriginMap: i,
      listView: t.unstable_listView ?? false,
      virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight
    };
  }
  function oc(e, t, r) {
    const o = {
      firstRowIndex: 0,
      lastRowIndex: e.rows.length,
      firstColumnIndex: 0,
      lastColumnIndex: e.visibleColumns.length
    }, { top: n, left: l } = t, s = Math.abs(l) + e.leftPinnedWidth;
    if (e.enabledForRows) {
      let a = Math.min(nc(e, n, {
        atStart: true,
        lastPosition: e.rowsMeta.positions[e.rowsMeta.positions.length - 1] + e.lastRowHeight
      }), e.rowsMeta.positions.length - 1);
      const u = e.hiddenCellsOriginMap[a];
      if (u) {
        const p = Math.min(...Object.values(u));
        a = Math.min(a, p);
      }
      const c = e.autoHeight ? a + e.rows.length : nc(e, n + e.viewportInnerHeight);
      o.firstRowIndex = a, o.lastRowIndex = c;
    }
    if (e.listView) return C({}, o, {
      lastColumnIndex: 1
    });
    if (e.enabledForColumns) {
      let a = 0, u = e.columnPositions.length, c = false;
      const [p, g] = Xs({
        firstIndex: o.firstRowIndex,
        lastIndex: o.lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: e.rows.length,
        bufferBefore: r.buffer.rowBefore,
        bufferAfter: r.buffer.rowAfter,
        positions: e.rowsMeta.positions,
        lastSize: e.lastRowHeight
      });
      if (!e.virtualizeColumnsWithAutoRowHeight) for (let b = p; b < g && !c; b += 1) {
        const h = e.rows[b];
        c = e.apiRef.current.rowHasAutoHeight(h.id);
      }
      (!c || e.virtualizeColumnsWithAutoRowHeight) && (a = oo(s, e.columnPositions, {
        atStart: true,
        lastPosition: e.columnsTotalWidth
      }), u = oo(s + e.viewportInnerWidth, e.columnPositions)), o.firstColumnIndex = a, o.lastColumnIndex = u;
    }
    return vx(e, o, r);
  }
  function nc(e, t, r) {
    var _a2, _b2;
    const o = e.apiRef.current.getLastMeasuredRowIndex();
    let n = o === 1 / 0;
    ((_a2 = e.range) == null ? void 0 : _a2.lastRowIndex) && !n && (n = o >= e.range.lastRowIndex);
    const l = tr(o - (((_b2 = e.range) == null ? void 0 : _b2.firstRowIndex) || 0), 0, e.rowsMeta.positions.length);
    return n || e.rowsMeta.positions[l] >= t ? oo(t, e.rowsMeta.positions, r) : Sx(t, e.rowsMeta.positions, l, r);
  }
  function vx(e, t, r) {
    const [o, n] = Xs({
      firstIndex: t.firstRowIndex,
      lastIndex: t.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: e.rows.length,
      bufferBefore: r.buffer.rowBefore,
      bufferAfter: r.buffer.rowAfter,
      positions: e.rowsMeta.positions,
      lastSize: e.lastRowHeight
    }), [l, s] = Xs({
      firstIndex: t.firstColumnIndex,
      lastIndex: t.lastColumnIndex,
      minFirstIndex: e.pinnedColumns.left.length,
      maxLastIndex: e.visibleColumns.length - e.pinnedColumns.right.length,
      bufferBefore: r.buffer.columnBefore,
      bufferAfter: r.buffer.columnAfter,
      positions: e.columnPositions,
      lastSize: e.lastColumnWidth
    }), i = Zw({
      firstColumnToRender: l,
      apiRef: e.apiRef,
      firstRowToRender: o,
      lastRowToRender: n,
      visibleRows: e.rows
    });
    return {
      firstRowIndex: o,
      lastRowIndex: n,
      firstColumnIndex: i,
      lastColumnIndex: s
    };
  }
  function oo(e, t, r = void 0, o = 0, n = t.length) {
    if (t.length <= 0) return -1;
    if (o >= n) return o;
    const l = o + Math.floor((n - o) / 2), s = t[l];
    let i;
    if (r == null ? void 0 : r.atStart) {
      const a = (l === t.length - 1 ? r.lastPosition : t[l + 1]) - s;
      i = e - a < s;
    } else i = e <= s;
    return i ? oo(e, t, r, o, l) : oo(e, t, r, l + 1, n);
  }
  function Sx(e, t, r, o = void 0) {
    let n = 1;
    for (; r < t.length && Math.abs(t[r]) < e; ) r += n, n *= 2;
    return oo(e, t, o, Math.floor(r / 2), Math.min(r, t.length));
  }
  function Xs({ firstIndex: e, lastIndex: t, bufferBefore: r, bufferAfter: o, minFirstIndex: n, maxLastIndex: l, positions: s, lastSize: i }) {
    const a = s[e] - r, u = s[t] + o, c = oo(a, s, {
      atStart: true,
      lastPosition: s[s.length - 1] + i
    }), p = oo(u, s);
    return [
      tr(c, n, l),
      tr(p, n, l)
    ];
  }
  function lc(e, t) {
    return e === t ? true : e.firstRowIndex === t.firstRowIndex && e.lastRowIndex === t.lastRowIndex && e.firstColumnIndex === t.firstColumnIndex && e.lastColumnIndex === t.lastColumnIndex;
  }
  function Fd(e, t, r) {
    const o = (e[t.firstColumnIndex] ?? 0) - (e[r] ?? 0);
    return Math.abs(o);
  }
  function Px(e, t) {
    return e === 0 && t === 0 ? Ct.NONE : Math.abs(t) >= Math.abs(e) ? t > 0 ? Ct.DOWN : Ct.UP : e > 0 ? Ct.RIGHT : Ct.LEFT;
  }
  function kd(e, t, r, o, n, l) {
    if (e) switch (t) {
      case Ct.LEFT:
        t = Ct.RIGHT;
        break;
      case Ct.RIGHT:
        t = Ct.LEFT;
        break;
    }
    switch (t) {
      case Ct.NONE:
        return {
          rowAfter: r,
          rowBefore: r,
          columnAfter: o,
          columnBefore: o
        };
      case Ct.LEFT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: l
        };
      case Ct.RIGHT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: l,
          columnBefore: 0
        };
      case Ct.UP:
        return {
          rowAfter: 0,
          rowBefore: n,
          columnAfter: 0,
          columnBefore: 0
        };
      case Ct.DOWN:
        return {
          rowAfter: n,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: 0
        };
      default:
        throw new Error("unreachable");
    }
  }
  const Ix = () => {
    var _a2, _b2;
    const e = Fe(), t = ae(), r = X(e, Un), o = X(e, Oi), n = X(e, Eu), l = r === 0 && n === 0, s = X(e, _C), i = !s && l, a = !s && r > 0 && o === 0;
    let u = null, c = null;
    return i && (u = "noRowsOverlay"), a && (u = "noResultsOverlay"), s && (u = "loadingOverlay", c = ((_b2 = (_a2 = t.slotProps) == null ? void 0 : _a2.loadingOverlay) == null ? void 0 : _b2[l ? "noRowsVariant" : "variant"]) || null), {
      overlayType: u,
      loadingOverlayVariant: c
    };
  }, Mx = ot("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapper",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapper
  })(({ overlayType: e, loadingOverlayVariant: t }) => t !== "skeleton" ? {
    position: "sticky",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: 0,
    height: 0,
    zIndex: e === "loadingOverlay" ? 5 : 4
  } : {}), Ox = ot("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapperInner",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapperInner
  })({}), Fx = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "overlayWrapper"
      ],
      inner: [
        "overlayWrapperInner"
      ]
    }, Ae, t);
  };
  function kx(e) {
    const t = Fe(), r = ae(), o = X(t, It);
    let n = Math.max(o.viewportOuterSize.height - o.topContainerHeight - o.bottomContainerHeight - (o.hasScrollX ? o.scrollbarSize : 0), 0);
    n === 0 && (n = qu);
    const l = Fx(C({}, e, {
      classes: r.classes
    }));
    return f.jsx(Mx, C({
      className: ue(l.root)
    }, e, {
      children: f.jsx(Ox, C({
        className: ue(l.inner),
        style: {
          height: n,
          width: o.viewportOuterSize.width
        }
      }, e))
    }));
  }
  function Ex(e) {
    var _a2, _b2;
    const { overlayType: t } = e, r = ae();
    if (!t) return null;
    const o = (_a2 = r.slots) == null ? void 0 : _a2[t], n = (_b2 = r.slotProps) == null ? void 0 : _b2[t];
    return f.jsx(kx, C({}, e, {
      children: f.jsx(o, C({}, n))
    }));
  }
  const wl = (e) => e.columnMenu;
  function Tx() {
    var _a2;
    const e = yr(), t = ae(), r = X(e, ft), o = X(e, Uy), n = X(e, Vy), l = X(e, nd), s = X(e, () => Ei(e) === null), i = X(e, ow), a = X(e, rw), u = X(e, $l), c = X(e, Qn), p = X(e, wl), g = X(e, dr), b = X(e, Yw), h = !(i === null && l === null && s), m = e.current.columnHeadersContainerRef;
    return f.jsx(t.slots.columnHeaders, C({
      ref: m,
      visibleColumns: r,
      filterColumnLookup: o,
      sortColumnLookup: n,
      columnHeaderTabIndexState: l,
      columnGroupHeaderTabIndexState: i,
      columnHeaderFocus: a,
      columnGroupHeaderFocus: u,
      headerGroupingMaxDepth: c,
      columnMenuState: p,
      columnVisibility: g,
      columnGroupsHeaderStructure: b,
      hasOtherElementInTabSequence: h
    }, (_a2 = t.slotProps) == null ? void 0 : _a2.columnHeaders));
  }
  const Ax = Wr(Tx), Ed = d.createContext(void 0), Ri = () => {
    const e = d.useContext(Ed);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid configuration context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }, Dx = ot("div")({
    position: "absolute",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: "calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))"
  }), $x = ot("div", {
    name: "MuiDataGrid",
    slot: "Main",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.main,
        r.hasPinnedRight && t["main--hasPinnedRight"],
        r.loadingOverlayVariant === "skeleton" && t["main--hasSkeletonLoadingOverlay"]
      ];
    }
  })({
    flexGrow: 1,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  }), Lx = ze((e, t) => {
    var _a2;
    const { ownerState: r } = e, o = ae(), l = Ri().hooks.useGridAriaAttributes();
    return f.jsxs($x, C({
      ownerState: r,
      className: e.className,
      tabIndex: -1
    }, l, (_a2 = o.slotProps) == null ? void 0 : _a2.main, {
      ref: t,
      children: [
        f.jsx(Dx, {
          role: "presentation",
          "data-id": "gridPanelAnchor"
        }),
        e.children
      ]
    }));
  }), Rx = () => ge({
    root: [
      "topContainer"
    ]
  }, Ae, {}), jx = ot("div")({
    position: "sticky",
    zIndex: 40,
    top: 0
  });
  function Hx(e) {
    const t = Rx();
    return f.jsx(jx, C({}, e, {
      className: ue(t.root, O["container--top"]),
      role: "presentation"
    }));
  }
  const zx = () => ge({
    root: [
      "bottomContainer"
    ]
  }, Ae, {}), Nx = ot("div")({
    position: "sticky",
    zIndex: 40,
    bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
  });
  function _x(e) {
    const t = zx();
    return f.jsx(Nx, C({}, e, {
      className: ue(t.root, O["container--bottom"]),
      role: "presentation"
    }));
  }
  const Gx = (e, t) => {
    const { classes: r } = e;
    return ge({
      root: [
        "virtualScrollerContent",
        t && "virtualScrollerContent--overflowed"
      ]
    }, Ae, r);
  }, Vx = ot("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerContent",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.virtualScrollerContent,
        r.overflowedContent && t["virtualScrollerContent--overflowed"]
      ];
    }
  })({}), Bx = ze(function(t, r) {
    var _a2;
    const o = ae(), n = !o.autoHeight && ((_a2 = t.style) == null ? void 0 : _a2.minHeight) === "auto", l = Gx(o, n), s = {
      classes: o.classes,
      overflowedContent: n
    };
    return f.jsx(Vx, C({}, t, {
      ownerState: s,
      className: ue(l.root, t.className),
      ref: r
    }));
  }), Wx = ot("div")({
    display: "flex",
    flexDirection: "row",
    width: "var(--DataGrid-rowWidth)",
    boxSizing: "border-box"
  }), Td = ot("div")({
    position: "sticky",
    height: "100%",
    boxSizing: "border-box",
    borderTop: "1px solid var(--rowBorderColor)",
    backgroundColor: "var(--DataGrid-pinnedBackground)"
  }), Ux = ot(Td)({
    left: 0,
    borderRight: "1px solid var(--rowBorderColor)"
  }), qx = ot(Td)({
    right: 0,
    borderLeft: "1px solid var(--rowBorderColor)"
  }), Kx = ot("div")({
    flexGrow: 1,
    borderTop: "1px solid var(--rowBorderColor)"
  });
  function Yx({ rowsLength: e }) {
    const t = Fe(), { viewportOuterSize: r, minimumSize: o, hasScrollX: n, hasScrollY: l, scrollbarSize: s, leftPinnedWidth: i, rightPinnedWidth: a } = X(t, It), u = n ? s : 0, c = r.height - o.height > 0;
    return u === 0 && !c ? null : f.jsxs(Wx, {
      className: O.filler,
      role: "presentation",
      style: {
        height: u,
        "--rowBorderColor": e === 0 ? "transparent" : "var(--DataGrid-rowBorderColor)"
      },
      children: [
        i > 0 && f.jsx(Ux, {
          className: O["filler--pinnedLeft"],
          style: {
            width: i
          }
        }),
        f.jsx(Kx, {}),
        a > 0 && f.jsx(qx, {
          className: O["filler--pinnedRight"],
          style: {
            width: a + (l ? s : 0)
          }
        })
      ]
    });
  }
  const Xx = Wr(Yx), Qx = [
    "className"
  ], Zx = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "virtualScrollerRenderZone"
      ]
    }, Ae, t);
  }, Jx = ot("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerRenderZone",
    overridesResolver: (e, t) => t.virtualScrollerRenderZone
  })({
    position: "absolute",
    display: "flex",
    flexDirection: "column"
  }), ev = ze(function(t, r) {
    const { className: o } = t, n = fe(t, Qx), l = Fe(), s = ae(), i = Zx(s), a = X(l, () => {
      const u = Zn(l);
      return nn(l.current.state).positions[u.firstRowIndex] ?? 0;
    });
    return f.jsx(Jx, C({
      className: ue(i.root, o),
      ownerState: s,
      style: {
        transform: `translate3d(0, ${a}px, 0)`
      }
    }, n, {
      ref: r
    }));
  }), tv = {
    includeHeaders: true,
    includeOutliers: false,
    outliersFactor: 1.5,
    expand: false,
    disableColumnVirtualization: true
  }, Pt = (e) => e.editRows, Ad = Wn(Pt, (e, { rowId: t, editMode: r }) => r === $r.Row && !!e[t]), rv = Wn(Pt, (e, { rowId: t, field: r }) => {
    var _a2;
    return ((_a2 = e[t]) == null ? void 0 : _a2[r]) ?? null;
  }), Rn = (e) => e.preferencePanel, ov = Wn(Rn, (e, t) => !!(e.open && e.labelId === t));
  var ho = (function(e) {
    return e.filters = "filters", e.columns = "columns", e;
  })(ho || {});
  const nv = (e, t) => {
    const { classes: r } = e, o = {
      root: [
        "scrollbar",
        `scrollbar--${t}`
      ],
      content: [
        "scrollbarContent"
      ]
    };
    return ge(o, Ae, r);
  }, Dd = ot("div")({
    position: "absolute",
    display: "inline-block",
    zIndex: 60,
    "&:hover": {
      zIndex: 70
    },
    "--size": "calc(max(var(--DataGrid-scrollbarSize), 14px))"
  }), lv = ot(Dd)({
    width: "var(--size)",
    height: "calc(var(--DataGrid-hasScrollY) * (100% - var(--DataGrid-topContainerHeight) - var(--DataGrid-bottomContainerHeight) - var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize)))",
    overflowY: "auto",
    overflowX: "hidden",
    outline: 0,
    "& > div": {
      width: "var(--size)"
    },
    top: "var(--DataGrid-topContainerHeight)",
    right: "0px"
  }), sv = ot(Dd)({
    width: "100%",
    height: "var(--size)",
    overflowY: "hidden",
    overflowX: "auto",
    outline: 0,
    "& > div": {
      height: "var(--size)"
    },
    bottom: "0px"
  }), sc = ze(function(t, r) {
    const o = yr(), n = ae(), l = d.useRef(false), s = d.useRef(0), i = d.useRef(null), a = d.useRef(null), u = nv(n, t.position), c = X(o, It), p = t.position === "vertical" ? "height" : "width", g = t.position === "vertical" ? "scrollTop" : "scrollLeft", b = t.position === "vertical" ? "top" : "left", h = t.position === "vertical" ? c.hasScrollX : c.hasScrollY, m = c.minimumSize[p] + (h ? c.scrollbarSize : 0), v = (t.position === "vertical" ? c.viewportInnerSize.height : c.viewportOuterSize.width) * (m / c.viewportOuterSize[p]), w = Be(() => {
      const F = i.current, I = t.scrollPosition.current;
      if (!F || I[b] === s.current) return;
      if (s.current = I[b], l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const j = I[b] / m;
      F[g] = j * v;
    }), k = Be(() => {
      const F = o.current.virtualScrollerRef.current, I = i.current;
      if (!I) return;
      if (l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const j = I[g] / v;
      F[g] = j * m;
    });
    Gc(() => {
      const F = o.current.virtualScrollerRef.current, I = i.current, j = {
        passive: true
      };
      return F.addEventListener("scroll", w, j), I.addEventListener("scroll", k, j), () => {
        F.removeEventListener("scroll", w, j), I.removeEventListener("scroll", k, j);
      };
    }), d.useEffect(() => {
      a.current.style.setProperty(p, `${v}px`);
    }, [
      v,
      p
    ]);
    const L = t.position === "vertical" ? lv : sv;
    return f.jsx(L, {
      ref: Yt(r, i),
      className: u.root,
      style: t.position === "vertical" && n.unstable_listView ? {
        height: "100%",
        top: 0
      } : void 0,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: (F) => {
        F.target.blur();
      },
      children: f.jsx("div", {
        ref: a,
        className: u.content
      })
    });
  }), iv = (e) => {
    const { classes: t, hasScrollX: r, hasPinnedRight: o, loadingOverlayVariant: n } = e;
    return ge({
      root: [
        "main",
        o && "main--hasPinnedRight",
        n === "skeleton" && "main--hasSkeletonLoadingOverlay"
      ],
      scroller: [
        "virtualScroller",
        r && "virtualScroller--hasScrollX"
      ]
    }, Ae, t);
  }, av = ot("div", {
    name: "MuiDataGrid",
    slot: "VirtualScroller",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.virtualScroller,
        r.hasScrollX && t["virtualScroller--hasScrollX"]
      ];
    }
  })({
    position: "relative",
    height: "100%",
    flexGrow: 1,
    overflow: "scroll",
    scrollbarWidth: "none",
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    "@media print": {
      overflow: "hidden"
    },
    zIndex: 0
  }), cv = (e) => e.dimensions.rightPinnedWidth > 0;
  function uv(e) {
    const t = Fe(), r = ae(), o = X(t, SC), n = X(t, vC), l = X(t, cv), s = X(t, MC), i = Ix(), a = {
      classes: r.classes,
      hasScrollX: n,
      hasPinnedRight: l,
      loadingOverlayVariant: i.loadingOverlayVariant
    }, u = iv(a), c = wx(), { getContainerProps: p, getScrollerProps: g, getContentProps: b, getRenderZoneProps: h, getScrollbarVerticalProps: m, getScrollbarHorizontalProps: x, getRows: v, getScrollAreaProps: w } = c, k = v();
    return f.jsxs(Lx, C({
      className: u.root
    }, p(), {
      ownerState: a,
      children: [
        f.jsx(fl, C({
          scrollDirection: "left"
        }, w())),
        f.jsx(fl, C({
          scrollDirection: "right"
        }, w())),
        f.jsx(fl, C({
          scrollDirection: "up"
        }, w())),
        f.jsx(fl, C({
          scrollDirection: "down"
        }, w())),
        f.jsxs(av, C({
          className: u.scroller
        }, g(), {
          ownerState: a,
          children: [
            f.jsxs(Hx, {
              children: [
                !r.unstable_listView && f.jsx(Ax, {}),
                f.jsx(r.slots.pinnedRows, {
                  position: "top",
                  virtualScroller: c
                })
              ]
            }),
            f.jsx(Ex, C({}, i)),
            f.jsx(Bx, C({}, b(), {
              children: f.jsxs(ev, C({}, h(), {
                children: [
                  k,
                  f.jsx(r.slots.detailPanels, {
                    virtualScroller: c
                  })
                ]
              }))
            })),
            s && f.jsx(Xx, {
              rowsLength: k.length
            }),
            f.jsx(_x, {
              children: f.jsx(r.slots.pinnedRows, {
                position: "bottom",
                virtualScroller: c
              })
            })
          ]
        })),
        n && !r.unstable_listView && f.jsx(sc, C({
          position: "horizontal"
        }, x())),
        o && f.jsx(sc, C({
          position: "vertical"
        }, m())),
        e.children
      ]
    }));
  }
  function dv() {
    var _a2;
    const e = ae();
    return e.hideFooter ? null : f.jsx(e.slots.footer, C({}, (_a2 = e.slotProps) == null ? void 0 : _a2.footer));
  }
  let xs;
  function ji() {
    return xs === void 0 && document.createElement("div").focus({
      get preventScroll() {
        return xs = true, false;
      }
    }), xs;
  }
  function pv({ defaultSlots: e, slots: t }) {
    const r = t;
    if (!r || Object.keys(r).length === 0) return e;
    const o = C({}, e);
    return Object.keys(r).forEach((n) => {
      const l = n;
      r[l] !== void 0 && (o[l] = r[l]);
    }), o;
  }
  function fv(e) {
    var _a2;
    if ((_a2 = e.slotProps) == null ? void 0 : _a2.root) return e;
    const t = Object.keys(e);
    if (!t.some((n) => n.startsWith("aria-") || n.startsWith("data-"))) return e;
    const r = {}, o = e.forwardedProps ?? {};
    for (let n = 0; n < t.length; n += 1) {
      const l = t[n];
      l.startsWith("aria-") || l.startsWith("data-") ? o[l] = e[l] : r[l] = e[l];
    }
    return r.forwardedProps = o, r;
  }
  function gv(e) {
    return d.useMemo(() => fv(e), [
      e
    ]);
  }
  const hv = (e) => {
    const t = e.match(/^__row_group_by_columns_group_(.*)__$/);
    return t ? t[1] : null;
  }, mv = (e) => e === Yu || hv(e) !== null, $d = (e, t) => {
    if (e) if (t) {
      if (e === Te.LEFT) return "right";
      if (e === Te.RIGHT) return "left";
    } else {
      if (e === Te.LEFT) return "left";
      if (e === Te.RIGHT) return "right";
    }
  };
  function rs(e, t, r, o) {
    const n = $d(r, t);
    return !n || o === void 0 || (e[n] = o), e;
  }
  const bv = [
    "column",
    "row",
    "rowId",
    "rowNode",
    "align",
    "children",
    "colIndex",
    "width",
    "className",
    "style",
    "colSpan",
    "disableDragEvents",
    "isNotVisible",
    "pinnedOffset",
    "pinnedPosition",
    "showRightBorder",
    "showLeftBorder",
    "onClick",
    "onDoubleClick",
    "onMouseDown",
    "onMouseUp",
    "onMouseOver",
    "onKeyDown",
    "onKeyUp",
    "onDragEnter",
    "onDragOver"
  ], Cv = [
    "changeReason",
    "unstable_updateValueOnRender"
  ];
  Te.LEFT + "", Jr.LEFT, Te.RIGHT + "", Jr.RIGHT, Te.NONE + "", Te.VIRTUAL + "";
  const yv = (e) => {
    const { align: t, showLeftBorder: r, showRightBorder: o, pinnedPosition: n, isEditable: l, isSelected: s, isSelectionMode: i, classes: a } = e, u = {
      root: [
        "cell",
        `cell--text${ie(t)}`,
        s && "selected",
        l && "cell--editable",
        r && "cell--withLeftBorder",
        o && "cell--withRightBorder",
        n === Te.LEFT && "cell--pinnedLeft",
        n === Te.RIGHT && "cell--pinnedRight",
        i && !l && "cell--selectionMode"
      ]
    };
    return ge(u, Ae, a);
  }, wv = ze(function(t, r) {
    var _a2, _b2, _c2;
    const { column: o, row: n, rowId: l, rowNode: s, align: i, colIndex: a, width: u, className: c, style: p, colSpan: g, disableDragEvents: b, isNotVisible: h, pinnedOffset: m, pinnedPosition: x, showRightBorder: v, showLeftBorder: w, onClick: k, onDoubleClick: L, onMouseDown: F, onMouseUp: I, onMouseOver: j, onKeyDown: D, onKeyUp: S, onDragEnter: y, onDragOver: M } = t, $ = fe(t, bv), E = yr(), N = ae(), T = Xt(), P = o.field, A = Dn(E, rv, {
      rowId: l,
      field: P
    }), z = Ri().hooks.useCellAggregationResult(l, P), _ = A ? tt.Edit : tt.View, H = E.current.getCellParamsForRow(l, P, n, {
      colDef: o,
      cellMode: _,
      rowNode: s,
      tabIndex: X(E, () => {
        const be = Ei(E);
        return be && be.field === P && be.id === l ? 0 : -1;
      }),
      hasFocus: X(E, () => {
        const be = Wt(E);
        return (be == null ? void 0 : be.id) === l && be.field === P;
      })
    });
    H.api = E.current, z && (H.value = z.value, H.formattedValue = o.valueFormatter ? o.valueFormatter(H.value, n, o, E) : H.value);
    const G = X(E, () => E.current.unstable_applyPipeProcessors("isCellSelected", false, {
      id: l,
      field: P
    })), U = X(E, Md), B = X(E, hx), { hasFocus: q, isEditable: W = false, value: te } = H, Z = o.type === "actions" && ((_a2 = o.getActions) == null ? void 0 : _a2.call(o, E.current.getRowParams(l)).some((be) => !be.props.disabled)), re = (_ === "view" || !W) && !Z ? H.tabIndex : -1, { classes: ce, getCellClassName: Ce } = N, ne = [
      X(E, () => E.current.unstable_applyPipeProcessors("cellClassName", [], {
        id: l,
        field: P
      }).filter(Boolean).join(" "))
    ];
    o.cellClassName && ne.push(typeof o.cellClassName == "function" ? o.cellClassName(H) : o.cellClassName), o.display === "flex" && ne.push(O["cell--flex"]), Ce && ne.push(Ce(H));
    const he = H.formattedValue ?? te, J = d.useRef(null), Ie = Yt(r, J), ee = d.useRef(null), Se = N.cellSelection ?? false, xe = {
      align: i,
      showLeftBorder: w,
      showRightBorder: v,
      isEditable: W,
      classes: N.classes,
      pinnedPosition: x,
      isSelected: G,
      isSelectionMode: Se
    }, ke = yv(xe), Ve = d.useCallback((be) => (je) => {
      const $e = E.current.getCellParams(l, P || "");
      E.current.publishEvent(be, $e, je), I && I(je);
    }, [
      E,
      P,
      I,
      l
    ]), qe = d.useCallback((be) => (je) => {
      const $e = E.current.getCellParams(l, P || "");
      E.current.publishEvent(be, $e, je), F && F(je);
    }, [
      E,
      P,
      F,
      l
    ]), Ne = d.useCallback((be, je) => ($e) => {
      if (!E.current.getRow(l)) return;
      const ct = E.current.getCellParams(l, P || "");
      E.current.publishEvent(be, ct, $e), je && je($e);
    }, [
      E,
      P,
      l
    ]), Le = ((_b2 = U[l]) == null ? void 0 : _b2[P]) ?? false, Re = ((_c2 = B[l]) == null ? void 0 : _c2[P]) ?? 1, Ke = d.useMemo(() => {
      if (h) return {
        padding: 0,
        opacity: 0,
        width: 0,
        height: 0,
        border: 0
      };
      const be = rs(C({
        "--width": `${u}px`
      }, p), T, x, m), je = x === Te.LEFT, $e = x === Te.RIGHT;
      return Re > 1 && (be.height = `calc(var(--height) * ${Re})`, be.zIndex = 10, (je || $e) && (be.zIndex = 40)), be;
    }, [
      u,
      h,
      p,
      m,
      x,
      T,
      Re
    ]);
    if (d.useEffect(() => {
      if (!q || _ === tt.Edit) return;
      const be = pr(E.current.rootElementRef.current);
      if (J.current && !J.current.contains(be.activeElement)) {
        const je = J.current.querySelector('[tabindex="0"]'), $e = ee.current || je || J.current;
        if (ji()) $e.focus({
          preventScroll: true
        });
        else {
          const ct = E.current.getScrollPosition();
          $e.focus(), E.current.scroll(ct);
        }
      }
    }, [
      q,
      _,
      E
    ]), Le) return f.jsx("div", {
      "data-colindex": a,
      role: "presentation",
      style: C({
        width: "var(--width)"
      }, Ke)
    });
    let _e = $.onFocus, me, ve;
    if (A === null && o.renderCell && (me = o.renderCell(H)), A !== null && o.renderEditCell) {
      const be = E.current.getRowWithUpdatedValues(l, o.field), je = fe(A, Cv), $e = o.valueFormatter ? o.valueFormatter(A.value, be, o, E) : H.formattedValue, ct = C({}, H, {
        row: be,
        formattedValue: $e
      }, je);
      me = o.renderEditCell(ct), ne.push(O["cell--editing"]), ne.push(ce == null ? void 0 : ce["cell--editing"]);
    }
    if (me === void 0) {
      const be = he == null ? void 0 : he.toString();
      me = be, ve = be;
    }
    d.isValidElement(me) && Z && (me = d.cloneElement(me, {
      focusElementRef: ee
    }));
    const pe = b ? null : {
      onDragEnter: Ne("cellDragEnter", y),
      onDragOver: Ne("cellDragOver", M)
    };
    return f.jsx("div", C({
      className: ue(ke.root, ne, c),
      role: "gridcell",
      "data-field": P,
      "data-colindex": a,
      "aria-colindex": a + 1,
      "aria-colspan": g,
      "aria-rowspan": Re,
      style: Ke,
      title: ve,
      tabIndex: re,
      onClick: Ne("cellClick", k),
      onDoubleClick: Ne("cellDoubleClick", L),
      onMouseOver: Ne("cellMouseOver", j),
      onMouseDown: qe("cellMouseDown"),
      onMouseUp: Ve("cellMouseUp"),
      onKeyDown: Ne("cellKeyDown", D),
      onKeyUp: Ne("cellKeyUp", S)
    }, pe, $, {
      onFocus: _e,
      ref: Ie,
      children: me
    }));
  }), xv = Wr(wv), vv = [
    "field",
    "type",
    "align",
    "width",
    "height",
    "empty",
    "style",
    "className"
  ], ic = "1.3em", Sv = "1.2em", ac = [
    40,
    80
  ], Pv = {
    number: [
      40,
      60
    ],
    string: [
      40,
      80
    ],
    date: [
      40,
      60
    ],
    dateTime: [
      60,
      80
    ],
    singleSelect: [
      40,
      80
    ]
  }, Iv = (e) => {
    const { align: t, classes: r, empty: o } = e, n = {
      root: [
        "cell",
        "cellSkeleton",
        `cell--text${t ? ie(t) : "Left"}`,
        o && "cellEmpty"
      ]
    };
    return ge(n, Ae, r);
  }, Mv = oy(12345);
  function Ov(e) {
    const { field: t, type: r, align: o, width: n, height: l, empty: s = false, style: i, className: a } = e, u = fe(e, vv), p = {
      classes: ae().classes,
      align: o,
      empty: s
    }, g = Iv(p), b = d.useMemo(() => {
      if (r === "boolean" || r === "actions") return {
        variant: "circular",
        width: ic,
        height: ic
      };
      const [m, x] = r ? Pv[r] ?? ac : ac;
      return {
        variant: "text",
        width: `${Math.round(Mv(m, x))}%`,
        height: Sv
      };
    }, [
      r
    ]);
    return f.jsx("div", C({
      "data-field": t,
      className: ue(g.root, a),
      style: C({
        height: l,
        maxWidth: n,
        minWidth: n
      }, i)
    }, u, {
      children: !s && f.jsx(Yh, C({}, b))
    }));
  }
  const Fv = Wr(Ov);
  function kv(e) {
    return e.vars ? e.vars.palette.TableCell.border : e.palette.mode === "light" ? Fn(ut(e.palette.divider, 1), 0.88) : On(ut(e.palette.divider, 1), 0.68);
  }
  const Ev = 10, gl = -5, Io = 1, cc = {
    width: 3,
    rx: 1.5,
    x: 10.5
  }, Tv = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Av = (e) => e.dimensions.hasScrollX && (!e.dimensions.hasScrollY || e.dimensions.scrollbarSize === 0), Dv = se("div", {
    name: "MuiDataGrid",
    slot: "Root",
    overridesResolver: (e, t) => [
      t.root,
      {
        [`&.${O.autoHeight}`]: t.autoHeight
      },
      {
        [`&.${O.autosizing}`]: t.autosizing
      },
      {
        [`&.${O["root--densityStandard"]}`]: t["root--densityStandard"]
      },
      {
        [`&.${O["root--densityComfortable"]}`]: t["root--densityComfortable"]
      },
      {
        [`&.${O["root--densityCompact"]}`]: t["root--densityCompact"]
      },
      {
        [`&.${O["root--disableUserSelection"]}`]: t["root--disableUserSelection"]
      },
      {
        [`&.${O["root--noToolbar"]}`]: t["root--noToolbar"]
      },
      {
        [`&.${O.withVerticalBorder}`]: t.withVerticalBorder
      },
      {
        [`& .${O.actionsCell}`]: t.actionsCell
      },
      {
        [`& .${O.booleanCell}`]: t.booleanCell
      },
      {
        [`& .${O.cell}`]: t.cell
      },
      {
        [`& .${O["cell--editable"]}`]: t["cell--editable"]
      },
      {
        [`& .${O["cell--editing"]}`]: t["cell--editing"]
      },
      {
        [`& .${O["cell--flex"]}`]: t["cell--flex"]
      },
      {
        [`& .${O["cell--pinnedLeft"]}`]: t["cell--pinnedLeft"]
      },
      {
        [`& .${O["cell--pinnedRight"]}`]: t["cell--pinnedRight"]
      },
      {
        [`& .${O["cell--rangeBottom"]}`]: t["cell--rangeBottom"]
      },
      {
        [`& .${O["cell--rangeLeft"]}`]: t["cell--rangeLeft"]
      },
      {
        [`& .${O["cell--rangeRight"]}`]: t["cell--rangeRight"]
      },
      {
        [`& .${O["cell--rangeTop"]}`]: t["cell--rangeTop"]
      },
      {
        [`& .${O["cell--selectionMode"]}`]: t["cell--selectionMode"]
      },
      {
        [`& .${O["cell--textCenter"]}`]: t["cell--textCenter"]
      },
      {
        [`& .${O["cell--textLeft"]}`]: t["cell--textLeft"]
      },
      {
        [`& .${O["cell--textRight"]}`]: t["cell--textRight"]
      },
      {
        [`& .${O["cell--withLeftBorder"]}`]: t["cell--withLeftBorder"]
      },
      {
        [`& .${O["cell--withRightBorder"]}`]: t["cell--withRightBorder"]
      },
      {
        [`& .${O.cellCheckbox}`]: t.cellCheckbox
      },
      {
        [`& .${O.cellEmpty}`]: t.cellEmpty
      },
      {
        [`& .${O.cellOffsetLeft}`]: t.cellOffsetLeft
      },
      {
        [`& .${O.cellSkeleton}`]: t.cellSkeleton
      },
      {
        [`& .${O.checkboxInput}`]: t.checkboxInput
      },
      {
        [`& .${O.columnHeader}`]: t.columnHeader
      },
      {
        [`& .${O["columnHeader--alignCenter"]}`]: t["columnHeader--alignCenter"]
      },
      {
        [`& .${O["columnHeader--alignLeft"]}`]: t["columnHeader--alignLeft"]
      },
      {
        [`& .${O["columnHeader--alignRight"]}`]: t["columnHeader--alignRight"]
      },
      {
        [`& .${O["columnHeader--dragging"]}`]: t["columnHeader--dragging"]
      },
      {
        [`& .${O["columnHeader--emptyGroup"]}`]: t["columnHeader--emptyGroup"]
      },
      {
        [`& .${O["columnHeader--filledGroup"]}`]: t["columnHeader--filledGroup"]
      },
      {
        [`& .${O["columnHeader--filtered"]}`]: t["columnHeader--filtered"]
      },
      {
        [`& .${O["columnHeader--last"]}`]: t["columnHeader--last"]
      },
      {
        [`& .${O["columnHeader--lastUnpinned"]}`]: t["columnHeader--lastUnpinned"]
      },
      {
        [`& .${O["columnHeader--moving"]}`]: t["columnHeader--moving"]
      },
      {
        [`& .${O["columnHeader--numeric"]}`]: t["columnHeader--numeric"]
      },
      {
        [`& .${O["columnHeader--pinnedLeft"]}`]: t["columnHeader--pinnedLeft"]
      },
      {
        [`& .${O["columnHeader--pinnedRight"]}`]: t["columnHeader--pinnedRight"]
      },
      {
        [`& .${O["columnHeader--siblingFocused"]}`]: t["columnHeader--siblingFocused"]
      },
      {
        [`& .${O["columnHeader--sortable"]}`]: t["columnHeader--sortable"]
      },
      {
        [`& .${O["columnHeader--sorted"]}`]: t["columnHeader--sorted"]
      },
      {
        [`& .${O["columnHeader--withLeftBorder"]}`]: t["columnHeader--withLeftBorder"]
      },
      {
        [`& .${O["columnHeader--withRightBorder"]}`]: t["columnHeader--withRightBorder"]
      },
      {
        [`& .${O.columnHeaderCheckbox}`]: t.columnHeaderCheckbox
      },
      {
        [`& .${O.columnHeaderDraggableContainer}`]: t.columnHeaderDraggableContainer
      },
      {
        [`& .${O.columnHeaderTitleContainer}`]: t.columnHeaderTitleContainer
      },
      {
        [`& .${O.columnHeaderTitleContainerContent}`]: t.columnHeaderTitleContainerContent
      },
      {
        [`& .${O.columnSeparator}`]: t.columnSeparator
      },
      {
        [`& .${O["columnSeparator--resizable"]}`]: t["columnSeparator--resizable"]
      },
      {
        [`& .${O["columnSeparator--resizing"]}`]: t["columnSeparator--resizing"]
      },
      {
        [`& .${O["columnSeparator--sideLeft"]}`]: t["columnSeparator--sideLeft"]
      },
      {
        [`& .${O["columnSeparator--sideRight"]}`]: t["columnSeparator--sideRight"]
      },
      {
        [`& .${O["container--bottom"]}`]: t["container--bottom"]
      },
      {
        [`& .${O["container--top"]}`]: t["container--top"]
      },
      {
        [`& .${O.detailPanelToggleCell}`]: t.detailPanelToggleCell
      },
      {
        [`& .${O["detailPanelToggleCell--expanded"]}`]: t["detailPanelToggleCell--expanded"]
      },
      {
        [`& .${O.editBooleanCell}`]: t.editBooleanCell
      },
      {
        [`& .${O.filterIcon}`]: t.filterIcon
      },
      {
        [`& .${O["filler--borderBottom"]}`]: t["filler--borderBottom"]
      },
      {
        [`& .${O["filler--pinnedLeft"]}`]: t["filler--pinnedLeft"]
      },
      {
        [`& .${O["filler--pinnedRight"]}`]: t["filler--pinnedRight"]
      },
      {
        [`& .${O.groupingCriteriaCell}`]: t.groupingCriteriaCell
      },
      {
        [`& .${O.groupingCriteriaCellLoadingContainer}`]: t.groupingCriteriaCellLoadingContainer
      },
      {
        [`& .${O.groupingCriteriaCellToggle}`]: t.groupingCriteriaCellToggle
      },
      {
        [`& .${O.headerFilterRow}`]: t.headerFilterRow
      },
      {
        [`& .${O.iconSeparator}`]: t.iconSeparator
      },
      {
        [`& .${O.menuIcon}`]: t.menuIcon
      },
      {
        [`& .${O.menuIconButton}`]: t.menuIconButton
      },
      {
        [`& .${O.menuList}`]: t.menuList
      },
      {
        [`& .${O.menuOpen}`]: t.menuOpen
      },
      {
        [`& .${O.overlayWrapperInner}`]: t.overlayWrapperInner
      },
      {
        [`& .${O.pinnedRows}`]: t.pinnedRows
      },
      {
        [`& .${O["pinnedRows--bottom"]}`]: t["pinnedRows--bottom"]
      },
      {
        [`& .${O["pinnedRows--top"]}`]: t["pinnedRows--top"]
      },
      {
        [`& .${O.row}`]: t.row
      },
      {
        [`& .${O["row--borderBottom"]}`]: t["row--borderBottom"]
      },
      {
        [`& .${O["row--detailPanelExpanded"]}`]: t["row--detailPanelExpanded"]
      },
      {
        [`& .${O["row--dragging"]}`]: t["row--dragging"]
      },
      {
        [`& .${O["row--dynamicHeight"]}`]: t["row--dynamicHeight"]
      },
      {
        [`& .${O["row--editable"]}`]: t["row--editable"]
      },
      {
        [`& .${O["row--editing"]}`]: t["row--editing"]
      },
      {
        [`& .${O["row--firstVisible"]}`]: t["row--firstVisible"]
      },
      {
        [`& .${O["row--lastVisible"]}`]: t["row--lastVisible"]
      },
      {
        [`& .${O.rowReorderCell}`]: t.rowReorderCell
      },
      {
        [`& .${O["rowReorderCell--draggable"]}`]: t["rowReorderCell--draggable"]
      },
      {
        [`& .${O.rowReorderCellContainer}`]: t.rowReorderCellContainer
      },
      {
        [`& .${O.rowReorderCellPlaceholder}`]: t.rowReorderCellPlaceholder
      },
      {
        [`& .${O.rowSkeleton}`]: t.rowSkeleton
      },
      {
        [`& .${O.scrollbar}`]: t.scrollbar
      },
      {
        [`& .${O["scrollbar--horizontal"]}`]: t["scrollbar--horizontal"]
      },
      {
        [`& .${O["scrollbar--vertical"]}`]: t["scrollbar--vertical"]
      },
      {
        [`& .${O.scrollbarFiller}`]: t.scrollbarFiller
      },
      {
        [`& .${O["scrollbarFiller--borderBottom"]}`]: t["scrollbarFiller--borderBottom"]
      },
      {
        [`& .${O["scrollbarFiller--borderTop"]}`]: t["scrollbarFiller--borderTop"]
      },
      {
        [`& .${O["scrollbarFiller--header"]}`]: t["scrollbarFiller--header"]
      },
      {
        [`& .${O["scrollbarFiller--pinnedRight"]}`]: t["scrollbarFiller--pinnedRight"]
      },
      {
        [`& .${O.sortIcon}`]: t.sortIcon
      },
      {
        [`& .${O.treeDataGroupingCell}`]: t.treeDataGroupingCell
      },
      {
        [`& .${O.treeDataGroupingCellLoadingContainer}`]: t.treeDataGroupingCellLoadingContainer
      },
      {
        [`& .${O.treeDataGroupingCellToggle}`]: t.treeDataGroupingCellToggle
      },
      {
        [`& .${O.withBorderColor}`]: t.withBorderColor
      }
    ]
  })(({ theme: e }) => {
    var _a2, _b2;
    const t = yr(), r = X(t, Av), o = kv(e), n = e.shape.borderRadius, l = e.vars ? e.vars.palette.background.default : ((_a2 = e.mixins.MuiDataGrid) == null ? void 0 : _a2.containerBackground) ?? e.palette.background.default, s = ((_b2 = e.mixins.MuiDataGrid) == null ? void 0 : _b2.pinnedBackground) ?? l, i = e.vars ? `rgba(${e.vars.palette.background.defaultChannel} / ${e.vars.palette.action.disabledOpacity})` : ut(e.palette.background.default, e.palette.action.disabledOpacity), a = (e.vars || e).palette.action.hoverOpacity, u = (e.vars || e).palette.action.hover, c = (e.vars || e).palette.action.selectedOpacity, p = e.vars ? `calc(${a} + ${c})` : a + c, g = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${c})` : ut(e.palette.primary.main, c), b = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${p})` : ut(e.palette.primary.main, p), h = e.vars ? Rv : $v, m = (D) => ({
      [`& .${O["cell--pinnedLeft"]}, & .${O["cell--pinnedRight"]}`]: {
        backgroundColor: D,
        "&.Mui-selected": {
          backgroundColor: h(D, g, c),
          "&:hover": {
            backgroundColor: h(D, g, p)
          }
        }
      }
    }), x = h(s, u, a), v = m(x), w = h(s, g, c), k = m(w), L = h(s, b, p), F = m(L), I = {
      backgroundColor: g,
      "&:hover": {
        backgroundColor: b,
        "@media (hover: none)": {
          backgroundColor: g
        }
      }
    };
    return C({
      "--unstable_DataGrid-radius": typeof n == "number" ? `${n}px` : n,
      "--unstable_DataGrid-headWeight": e.typography.fontWeightMedium,
      "--unstable_DataGrid-overlayBackground": i,
      "--DataGrid-containerBackground": l,
      "--DataGrid-pinnedBackground": s,
      "--DataGrid-rowBorderColor": o,
      "--DataGrid-cellOffsetMultiplier": 2,
      "--DataGrid-width": "0px",
      "--DataGrid-hasScrollX": "0",
      "--DataGrid-hasScrollY": "0",
      "--DataGrid-scrollbarSize": "10px",
      "--DataGrid-rowWidth": "0px",
      "--DataGrid-columnsTotalWidth": "0px",
      "--DataGrid-leftPinnedWidth": "0px",
      "--DataGrid-rightPinnedWidth": "0px",
      "--DataGrid-headerHeight": "0px",
      "--DataGrid-headersTotalHeight": "0px",
      "--DataGrid-topContainerHeight": "0px",
      "--DataGrid-bottomContainerHeight": "0px",
      flex: 1,
      boxSizing: "border-box",
      position: "relative",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: o,
      borderRadius: "var(--unstable_DataGrid-radius)",
      color: (e.vars || e).palette.text.primary
    }, e.typography.body2, {
      outline: "none",
      height: "100%",
      display: "flex",
      minWidth: 0,
      minHeight: 0,
      flexDirection: "column",
      overflow: "hidden",
      overflowAnchor: "none",
      transform: "translate(0, 0)",
      [`.${O.main} > *:first-child${Tv}`]: {
        borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
        borderTopRightRadius: "var(--unstable_DataGrid-radius)"
      },
      [`&.${O.autoHeight}`]: {
        height: "auto"
      },
      [`&.${O.autosizing}`]: {
        [`& .${O.columnHeaderTitleContainerContent} > *`]: {
          overflow: "visible !important"
        },
        "@media (hover: hover)": {
          [`& .${O.menuIcon}`]: {
            width: "0 !important",
            visibility: "hidden !important"
          }
        },
        [`& .${O.cell}`]: {
          overflow: "visible !important",
          whiteSpace: "nowrap",
          minWidth: "max-content !important",
          maxWidth: "max-content !important"
        },
        [`& .${O.groupingCriteriaCell}`]: {
          width: "unset"
        },
        [`& .${O.treeDataGroupingCell}`]: {
          width: "unset"
        }
      },
      [`& .${O.columnHeader}, & .${O.cell}`]: {
        WebkitTapHighlightColor: "transparent",
        padding: "0 10px",
        boxSizing: "border-box"
      },
      [`& .${O.columnHeader}:focus-within, & .${O.cell}:focus-within`]: {
        outline: `solid ${e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / 0.5)` : ut(e.palette.primary.main, 0.5)} ${Io}px`,
        outlineOffset: Io * -1
      },
      [`& .${O.columnHeader}:focus, & .${O.cell}:focus`]: {
        outline: `solid ${e.palette.primary.main} ${Io}px`,
        outlineOffset: Io * -1
      },
      [`& .${O.columnHeader}:focus,
      & .${O["columnHeader--withLeftBorder"]},
      & .${O["columnHeader--withRightBorder"]},
      & .${O["columnHeader--siblingFocused"]},
      & .${O["virtualScroller--hasScrollX"]} .${O["columnHeader--lastUnpinned"]},
      & .${O["virtualScroller--hasScrollX"]} .${O["columnHeader--last"]}
      `]: {
        [`& .${O.columnSeparator}`]: {
          opacity: 0
        },
        "@media (hover: none)": {
          [`& .${O["columnSeparator--resizable"]}`]: {
            opacity: 1
          }
        },
        [`& .${O["columnSeparator--resizable"]}:hover`]: {
          opacity: 1
        }
      },
      [`&.${O["root--noToolbar"]} [aria-rowindex="1"] [aria-colindex="1"]`]: {
        borderTopLeftRadius: "calc(var(--unstable_DataGrid-radius) - 1px)"
      },
      [`&.${O["root--noToolbar"]} [aria-rowindex="1"] .${O["columnHeader--last"]}`]: {
        borderTopRightRadius: r ? "calc(var(--unstable_DataGrid-radius) - 1px)" : void 0
      },
      [`& .${O.columnHeaderCheckbox}, & .${O.cellCheckbox}`]: {
        padding: 0,
        justifyContent: "center",
        alignItems: "center"
      },
      [`& .${O.columnHeader}`]: {
        position: "relative",
        display: "flex",
        alignItems: "center"
      },
      [`& .${O["virtualScroller--hasScrollX"]} .${O["columnHeader--last"]}`]: {
        overflow: "hidden"
      },
      [`& .${O["columnHeader--sorted"]} .${O.iconButtonContainer}, & .${O["columnHeader--filtered"]} .${O.iconButtonContainer}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${O.columnHeader}:not(.${O["columnHeader--sorted"]}) .${O.sortButton}`]: {
        opacity: 0,
        transition: e.transitions.create([
          "opacity"
        ], {
          duration: e.transitions.duration.shorter
        })
      },
      [`& .${O.columnHeaderTitleContainer}`]: {
        display: "flex",
        alignItems: "center",
        gap: e.spacing(0.25),
        minWidth: 0,
        flex: 1,
        whiteSpace: "nowrap",
        overflow: "hidden"
      },
      [`& .${O.columnHeaderTitleContainerContent}`]: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      },
      [`& .${O["columnHeader--filledGroup"]} .${O.columnHeaderTitleContainer}`]: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        boxSizing: "border-box"
      },
      [`& .${O.sortIcon}, & .${O.filterIcon}`]: {
        fontSize: "inherit"
      },
      [`& .${O["columnHeader--sortable"]}`]: {
        cursor: "pointer"
      },
      [`& .${O["columnHeader--alignCenter"]} .${O.columnHeaderTitleContainer}`]: {
        justifyContent: "center"
      },
      [`& .${O["columnHeader--alignRight"]} .${O.columnHeaderDraggableContainer}, & .${O["columnHeader--alignRight"]} .${O.columnHeaderTitleContainer}`]: {
        flexDirection: "row-reverse"
      },
      [`& .${O["columnHeader--alignCenter"]} .${O.menuIcon}`]: {
        marginLeft: "auto"
      },
      [`& .${O["columnHeader--alignRight"]} .${O.menuIcon}`]: {
        marginRight: "auto",
        marginLeft: -5
      },
      [`& .${O["columnHeader--moving"]}`]: {
        backgroundColor: (e.vars || e).palette.action.hover
      },
      [`& .${O["columnHeader--pinnedLeft"]}, & .${O["columnHeader--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 40,
        background: "var(--DataGrid-pinnedBackground)"
      },
      [`& .${O.columnSeparator}`]: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: Ev,
        color: o
      },
      [`& .${O.columnHeaders}`]: {
        width: "var(--DataGrid-rowWidth)"
      },
      "@media (hover: hover)": {
        [`& .${O.columnHeader}:hover`]: {
          [`& .${O.menuIcon}`]: {
            width: "auto",
            visibility: "visible"
          },
          [`& .${O.iconButtonContainer}`]: {
            visibility: "visible",
            width: "auto"
          }
        },
        [`& .${O.columnHeader}:not(.${O["columnHeader--sorted"]}):hover .${O.sortButton}`]: {
          opacity: 0.5
        }
      },
      "@media (hover: none)": {
        [`& .${O.columnHeader} .${O.menuIcon}`]: {
          width: "auto",
          visibility: "visible"
        },
        [`& .${O.columnHeader}:focus,
        & .${O["columnHeader--siblingFocused"]}`]: {
          [`.${O["columnSeparator--resizable"]}`]: {
            color: (e.vars || e).palette.primary.main
          }
        }
      },
      [`& .${O["columnSeparator--sideLeft"]}`]: {
        left: gl
      },
      [`& .${O["columnSeparator--sideRight"]}`]: {
        right: gl
      },
      [`& .${O["columnHeader--withRightBorder"]} .${O["columnSeparator--sideLeft"]}`]: {
        left: gl - 0.5
      },
      [`& .${O["columnHeader--withRightBorder"]} .${O["columnSeparator--sideRight"]}`]: {
        right: gl - 0.5
      },
      [`& .${O["columnSeparator--resizable"]}`]: {
        cursor: "col-resize",
        touchAction: "none",
        [`&.${O["columnSeparator--resizing"]}`]: {
          color: (e.vars || e).palette.primary.main
        },
        "@media (hover: none)": {
          [`& .${O.iconSeparator} rect`]: cc
        },
        "@media (hover: hover)": {
          "&:hover": {
            color: (e.vars || e).palette.primary.main,
            [`& .${O.iconSeparator} rect`]: cc
          }
        },
        "& svg": {
          pointerEvents: "none"
        }
      },
      [`& .${O.iconSeparator}`]: {
        color: "inherit",
        transition: e.transitions.create([
          "color",
          "width"
        ], {
          duration: e.transitions.duration.shortest
        })
      },
      [`& .${O.menuIcon}`]: {
        width: 0,
        visibility: "hidden",
        fontSize: 20,
        marginRight: -5,
        display: "flex",
        alignItems: "center"
      },
      [`.${O.menuOpen}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${O.headerFilterRow}`]: {
        [`& .${O.columnHeader}`]: {
          boxSizing: "border-box",
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        }
      },
      [`& .${O["row--borderBottom"]} .${O.columnHeader},
      & .${O["row--borderBottom"]} .${O.filler},
      & .${O["row--borderBottom"]} .${O.scrollbarFiller}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${O["row--borderBottom"]} .${O.cell}`]: {
        borderBottom: "1px solid var(--rowBorderColor)"
      },
      [`.${O.row}`]: {
        display: "flex",
        width: "var(--DataGrid-rowWidth)",
        breakInside: "avoid",
        "--rowBorderColor": "var(--DataGrid-rowBorderColor)",
        [`&.${O["row--firstVisible"]}`]: {
          "--rowBorderColor": "transparent"
        },
        "&:hover": {
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${O.rowSkeleton}:hover`]: {
          backgroundColor: "transparent"
        },
        "&.Mui-selected": I
      },
      [`& .${O["container--top"]}, & .${O["container--bottom"]}`]: {
        "[role=row]": {
          background: "var(--DataGrid-containerBackground)"
        }
      },
      [`& .${O.cell}`]: {
        flex: "0 0 auto",
        height: "var(--height)",
        width: "var(--width)",
        lineHeight: "calc(var(--height) - 1px)",
        boxSizing: "border-box",
        borderTop: "1px solid var(--rowBorderColor)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        "&.Mui-selected": I
      },
      [`& .${O["virtualScrollerContent--overflowed"]} .${O["row--lastVisible"]} .${O.cell}`]: {
        borderTopColor: "transparent"
      },
      [`& .${O["pinnedRows--top"]} :first-of-type`]: {
        [`& .${O.cell}, .${O.scrollbarFiller}`]: {
          borderTop: "none"
        }
      },
      [`&.${O["root--disableUserSelection"]}`]: {
        userSelect: "none"
      },
      [`& .${O["row--dynamicHeight"]} > .${O.cell}`]: {
        whiteSpace: "initial",
        lineHeight: "inherit"
      },
      [`& .${O.cellEmpty}`]: {
        flex: 1,
        padding: 0,
        height: "unset"
      },
      [`& .${O.cell}.${O["cell--selectionMode"]}`]: {
        cursor: "default"
      },
      [`& .${O.cell}.${O["cell--editing"]}`]: {
        padding: 1,
        display: "flex",
        boxShadow: e.shadows[2],
        backgroundColor: (e.vars || e).palette.background.paper,
        "&:focus-within": {
          outline: `${Io}px solid ${(e.vars || e).palette.primary.main}`,
          outlineOffset: Io * -1
        }
      },
      [`& .${O["row--editing"]}`]: {
        boxShadow: e.shadows[2]
      },
      [`& .${O["row--editing"]} .${O.cell}`]: {
        boxShadow: e.shadows[0],
        backgroundColor: (e.vars || e).palette.background.paper
      },
      [`& .${O.editBooleanCell}`]: {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      [`& .${O.booleanCell}[data-value="true"]`]: {
        color: (e.vars || e).palette.text.secondary
      },
      [`& .${O.booleanCell}[data-value="false"]`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`& .${O.actionsCell}`]: {
        display: "inline-flex",
        alignItems: "center",
        gridGap: e.spacing(1)
      },
      [`& .${O.rowReorderCell}`]: {
        display: "inline-flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${O["rowReorderCell--draggable"]}`]: {
        cursor: "move",
        opacity: 1
      },
      [`& .${O.rowReorderCellContainer}`]: {
        padding: 0,
        display: "flex",
        alignItems: "stretch"
      },
      [`.${O.withBorderColor}`]: {
        borderColor: o
      },
      [`& .${O["cell--withLeftBorder"]}, & .${O["columnHeader--withLeftBorder"]}`]: {
        borderLeftColor: "var(--DataGrid-rowBorderColor)",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid"
      },
      [`& .${O["cell--withRightBorder"]}, & .${O["columnHeader--withRightBorder"]}`]: {
        borderRightColor: "var(--DataGrid-rowBorderColor)",
        borderRightWidth: "1px",
        borderRightStyle: "solid"
      },
      [`& .${O["cell--flex"]}`]: {
        display: "flex",
        alignItems: "center",
        lineHeight: "inherit"
      },
      [`& .${O["cell--textLeft"]}`]: {
        textAlign: "left",
        justifyContent: "flex-start"
      },
      [`& .${O["cell--textRight"]}`]: {
        textAlign: "right",
        justifyContent: "flex-end"
      },
      [`& .${O["cell--textCenter"]}`]: {
        textAlign: "center",
        justifyContent: "center"
      },
      [`& .${O["cell--pinnedLeft"]}, & .${O["cell--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 30,
        background: "var(--DataGrid-pinnedBackground)",
        "&.Mui-selected": {
          backgroundColor: w
        }
      },
      [`& .${O.virtualScrollerContent} .${O.row}`]: {
        "&:hover": v,
        "&.Mui-selected": k,
        "&.Mui-selected:hover": F
      },
      [`& .${O.cellOffsetLeft}`]: {
        flex: "0 0 auto",
        display: "inline-block"
      },
      [`& .${O.cellSkeleton}`]: {
        flex: "0 0 auto",
        height: "100%",
        display: "inline-flex",
        alignItems: "center"
      },
      [`& .${O.columnHeaderDraggableContainer}`]: {
        display: "flex",
        width: "100%",
        height: "100%"
      },
      [`& .${O.rowReorderCellPlaceholder}`]: {
        display: "none"
      },
      [`& .${O["columnHeader--dragging"]}, & .${O["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${O["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity,
        [`& .${O.rowReorderCellPlaceholder}`]: {
          display: "flex"
        }
      },
      [`& .${O.treeDataGroupingCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${O.treeDataGroupingCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`& .${O.treeDataGroupingCellLoadingContainer}, .${O.groupingCriteriaCellLoadingContainer}`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      [`& .${O.groupingCriteriaCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${O.groupingCriteriaCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`.${O.scrollbarFiller}`]: {
        minWidth: "calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
        alignSelf: "stretch",
        [`&.${O["scrollbarFiller--borderTop"]}`]: {
          borderTop: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${O["scrollbarFiller--borderBottom"]}`]: {
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${O["scrollbarFiller--pinnedRight"]}`]: {
          backgroundColor: "var(--DataGrid-pinnedBackground)",
          position: "sticky",
          right: 0
        }
      },
      [`& .${O.filler}`]: {
        flex: "1 0 auto"
      },
      [`& .${O["filler--borderBottom"]}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${O["main--hasSkeletonLoadingOverlay"]}`]: {
        [`& .${O.virtualScrollerContent}`]: {
          position: "fixed",
          visibility: "hidden"
        },
        [`& .${O["scrollbar--vertical"]}, & .${O.pinnedRows}, & .${O.virtualScroller} > .${O.filler}`]: {
          display: "none"
        }
      }
    });
  });
  function $v(e, t, r, o = 1) {
    const n = (a, u) => Math.round((a ** (1 / o) * (1 - r) + u ** (1 / o) * r) ** o), l = Qi(e), s = Qi(t), i = [
      n(l.values[0], s.values[0]),
      n(l.values[1], s.values[1]),
      n(l.values[2], s.values[2])
    ];
    return Sp({
      type: "rgb",
      values: i
    });
  }
  const Lv = (e) => `rgb(from ${e} r g b / 1)`;
  function Rv(e, t, r) {
    return `color-mix(in srgb,${e}, ${Lv(t)} calc(${r} * 100%))`;
  }
  const jv = () => () => {
  }, Hv = () => false, zv = () => true, Nv = () => Ci.useSyncExternalStore(jv, Hv, zv);
  function _v() {
    var _a2, _b2;
    const e = Fe(), t = X(e, hr), r = ae(), o = X(e, Rn), n = e.current.unstable_applyPipeProcessors("preferencePanel", null, o.openedPanelValue ?? ho.filters);
    return f.jsx(r.slots.panel, C({
      as: r.slots.basePopper,
      open: t.length > 0 && o.open,
      id: o.panelId,
      "aria-labelledby": o.labelId
    }, (_a2 = r.slotProps) == null ? void 0 : _a2.panel, (_b2 = r.slotProps) == null ? void 0 : _b2.basePopper, {
      children: n
    }));
  }
  function Gv() {
    var _a2;
    const e = ae();
    return f.jsxs(d.Fragment, {
      children: [
        f.jsx(_v, {}),
        e.slots.toolbar && f.jsx(e.slots.toolbar, C({}, (_a2 = e.slotProps) == null ? void 0 : _a2.toolbar))
      ]
    });
  }
  const Vv = [
    "className",
    "children"
  ], Bv = (e, t) => {
    const { autoHeight: r, classes: o, showCellVerticalBorder: n } = e, l = {
      root: [
        "root",
        r && "autoHeight",
        `root--density${ie(t)}`,
        e.slots.toolbar === null && "root--noToolbar",
        "withBorderColor",
        n && "withVerticalBorder"
      ]
    };
    return ge(l, Ae, o);
  }, Wv = ze(function(t, r) {
    const o = ae(), { className: n, children: l } = t, s = fe(t, Vv), i = yr(), a = X(i, Do), u = i.current.rootElementRef, c = d.useCallback((m) => {
      m !== null && i.current.publishEvent("rootMount", m);
    }, [
      i
    ]), p = Yt(u, r, c), g = o, b = Bv(g, a);
    return Nv() ? null : f.jsxs(Dv, C({
      className: ue(b.root, n),
      ownerState: g
    }, s, {
      ref: p,
      children: [
        f.jsx(Gv, {}),
        f.jsx(uv, {
          children: l
        }),
        f.jsx(dv, {})
      ]
    }));
  }), Uv = Wr(Wv), qv = [
    "className"
  ], Kv = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "footerContainer",
        "withBorderColor"
      ]
    }, Ae, t);
  }, Yv = ot("div", {
    name: "MuiDataGrid",
    slot: "FooterContainer",
    overridesResolver: (e, t) => t.footerContainer
  })({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 52,
    borderTop: "1px solid"
  }), Xv = ze(function(t, r) {
    const { className: o } = t, n = fe(t, qv), l = ae(), s = Kv(l);
    return f.jsx(Yv, C({
      className: ue(s.root, o),
      ownerState: l
    }, n, {
      ref: r
    }));
  }), Qv = [
    "className"
  ], Zv = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "overlay"
      ]
    }, Ae, t);
  }, Jv = ot("div", {
    name: "MuiDataGrid",
    slot: "Overlay",
    overridesResolver: (e, t) => t.overlay
  })({
    width: "100%",
    height: "100%",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--unstable_DataGrid-overlayBackground)"
  }), Hi = ze(function(t, r) {
    const { className: o } = t, n = fe(t, Qv), l = ae(), s = Zv(l);
    return f.jsx(Jv, C({
      className: ue(s.root, o),
      ownerState: l
    }, n, {
      ref: r
    }));
  }), eS = [
    "className",
    "children"
  ], tS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "toolbarContainer"
      ]
    }, Ae, t);
  }, rS = ot("div", {
    name: "MuiDataGrid",
    slot: "ToolbarContainer",
    overridesResolver: (e, t) => t.toolbarContainer
  })(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: e.spacing(1),
    padding: e.spacing(0.5, 0.5, 0)
  })), oS = ze(function(t, r) {
    const { className: o, children: n } = t, l = fe(t, eS), s = ae(), i = tS(s);
    return n ? f.jsx(rS, C({
      className: ue(i.root, o),
      ownerState: s
    }, l, {
      ref: r,
      children: n
    })) : null;
  }), nS = (e) => {
    const { classes: t, open: r } = e;
    return ge({
      root: [
        "menuIcon",
        r && "menuOpen"
      ],
      button: [
        "menuIconButton"
      ]
    }, Ae, t);
  }, lS = d.memo((e) => {
    var _a2, _b2;
    const { colDef: t, open: r, columnMenuId: o, columnMenuButtonId: n, iconButtonRef: l } = e, s = Fe(), i = ae(), a = C({}, e, {
      classes: i.classes
    }), u = nS(a), c = d.useCallback((g) => {
      g.preventDefault(), g.stopPropagation(), s.current.toggleColumnMenu(t.field);
    }, [
      s,
      t.field
    ]), p = t.headerName ?? t.field;
    return f.jsx("div", {
      className: u.root,
      children: f.jsx(i.slots.baseTooltip, C({
        title: s.current.getLocaleText("columnMenuLabel"),
        enterDelay: 1e3
      }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseTooltip, {
        children: f.jsx(i.slots.baseIconButton, C({
          ref: l,
          tabIndex: -1,
          className: u.button,
          "aria-label": s.current.getLocaleText("columnMenuAriaLabel")(p),
          size: "small",
          onClick: c,
          "aria-haspopup": "menu",
          "aria-expanded": r,
          "aria-controls": r ? o : void 0,
          id: n
        }, (_b2 = i.slotProps) == null ? void 0 : _b2.baseIconButton, {
          children: f.jsx(i.slots.columnMenuIcon, {
            fontSize: "inherit"
          })
        }))
      }))
    });
  });
  function sS({ columnMenuId: e, columnMenuButtonId: t, ContentComponent: r, contentComponentProps: o, field: n, open: l, target: s, onExited: i }) {
    const a = Fe(), u = a.current.getColumn(n), c = Be((p) => {
      p && (p.stopPropagation(), s == null ? void 0 : s.contains(p.target)) || a.current.hideColumnMenu();
    });
    return !s || !u ? null : f.jsx(Pi, {
      placement: `bottom-${u.align === "right" ? "start" : "end"}`,
      open: l,
      target: s,
      onClose: c,
      onExited: i,
      children: f.jsx(r, C({
        colDef: u,
        hideMenu: c,
        open: l,
        id: e,
        labelledby: t
      }, o))
    });
  }
  function iS(e) {
    return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
  }
  function Hl(e, t) {
    return e.closest(`.${t}`);
  }
  function qr(e) {
    return e.replace(/["\\]/g, "\\$&");
  }
  function aS(e, t) {
    return e.querySelector(`[role="columnheader"][data-field="${qr(t)}"]`);
  }
  function Ld(e) {
    return `.${O.row}[data-id="${qr(String(e))}"]`;
  }
  function cS(e, t) {
    return e.querySelector(Ld(t));
  }
  function uS(e, { id: t, field: r }) {
    const o = Ld(t), n = `.${O.cell}[data-field="${qr(r)}"]`, l = `${o} ${n}`;
    return e.querySelector(l);
  }
  function Jn(e) {
    return e.target.nodeType === 1 && !e.currentTarget.contains(e.target);
  }
  function dS(e) {
    return e.getAttribute("data-field");
  }
  function pS(e, t) {
    return e.querySelector(`[data-field="${qr(t)}"]`);
  }
  function fS(e) {
    return e.getAttribute("data-fields").slice(2, -2).split("-|-");
  }
  function gS(e, t) {
    return Array.from(e.querySelectorAll(`[data-fields*="|-${qr(t)}-|"]`) ?? []);
  }
  function hS(e, t) {
    var _a2;
    if (!Hl(e, O.root)) throw new Error("MUI X: The root element is not found.");
    const o = e.getAttribute("aria-colindex");
    if (!o) return [];
    const n = Number(o) - 1, l = [];
    return ((_a2 = t.virtualScrollerRef) == null ? void 0 : _a2.current) ? (Hd(t).forEach((s) => {
      const i = s.getAttribute("data-id");
      if (!i) return;
      let a = n;
      const u = t.unstable_getCellColSpanInfo(i, n);
      u && u.spannedByColSpan && (a = u.leftVisibleCellIndex);
      const c = s.querySelector(`[data-colindex="${a}"]`);
      c && l.push(c);
    }), l) : [];
  }
  function uc(e, t) {
    return e.rootElementRef.current.querySelector(`.${O[t]}`);
  }
  const Rd = ({ api: e, colIndex: t, position: r, filterFn: o }) => {
    if (t === null) return [];
    const n = [];
    return Hd(e).forEach((l) => {
      l.getAttribute("data-id") && l.querySelectorAll(`.${O[r === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((i) => {
        const a = ln(i);
        a !== null && o(a) && n.push(i);
      });
    }), n;
  };
  function mS(e, t, r) {
    const o = ln(t);
    return Rd({
      api: e,
      colIndex: o,
      position: r ? "right" : "left",
      filterFn: (n) => r ? n < o : n > o
    });
  }
  function bS(e, t, r) {
    const o = ln(t);
    return Rd({
      api: e,
      colIndex: o,
      position: r ? "left" : "right",
      filterFn: (n) => r ? n > o : n < o
    });
  }
  const jd = ({ api: e, colIndex: t, position: r, filterFn: o }) => {
    var _a2;
    if (!((_a2 = e.columnHeadersContainerRef) == null ? void 0 : _a2.current)) return [];
    if (t === null) return [];
    const n = [];
    return e.columnHeadersContainerRef.current.querySelectorAll(`.${O[r === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((l) => {
      const s = ln(l);
      s !== null && o(s, l) && n.push(l);
    }), n;
  };
  function CS(e, t, r) {
    const o = ln(t);
    return jd({
      api: e,
      position: r ? "right" : "left",
      colIndex: o,
      filterFn: (n) => r ? n < o : n > o
    });
  }
  function yS(e, t, r) {
    const o = ln(t);
    return jd({
      api: e,
      position: r ? "left" : "right",
      colIndex: o,
      filterFn: (n, l) => l.classList.contains(O["columnHeader--last"]) ? false : r ? n > o : n < o
    });
  }
  function wS(e, t) {
    return e.columnHeadersContainerRef.current.querySelector(`:scope > div > [data-field="${qr(t)}"][role="columnheader"]`);
  }
  function xS(e, t) {
    const r = e.virtualScrollerRef.current;
    return Array.from(r.querySelectorAll(`:scope > div > div > div > [data-field="${qr(t)}"][role="gridcell"]`));
  }
  function Hd(e) {
    return e.virtualScrollerRef.current.querySelectorAll(`:scope > div > div > .${O.row}`);
  }
  function ln(e) {
    const t = e.getAttribute("aria-colindex");
    return t ? Number(t) - 1 : null;
  }
  const vS = [
    "className",
    "aria-label"
  ], SS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "columnHeaderTitle"
      ]
    }, Ae, t);
  }, PS = ot("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderTitle",
    overridesResolver: (e, t) => t.columnHeaderTitle
  })({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "var(--unstable_DataGrid-headWeight)",
    lineHeight: "normal"
  }), IS = ze(function(t, r) {
    const { className: o } = t, n = fe(t, vS), l = ae(), s = SS(l);
    return f.jsx(PS, C({
      className: ue(s.root, o),
      ownerState: l
    }, n, {
      ref: r
    }));
  });
  function MS(e) {
    var _a2;
    const { label: t, description: r } = e, o = ae(), n = d.useRef(null), [l, s] = d.useState(""), i = d.useCallback(() => {
      if (!r && (n == null ? void 0 : n.current)) {
        const a = iS(n.current);
        s(a ? t : "");
      }
    }, [
      r,
      t
    ]);
    return f.jsx(o.slots.baseTooltip, C({
      title: r || l
    }, (_a2 = o.slotProps) == null ? void 0 : _a2.baseTooltip, {
      children: f.jsx(IS, {
        onMouseOver: i,
        ref: n,
        children: t
      })
    }));
  }
  const OS = [
    "resizable",
    "resizing",
    "height",
    "side"
  ];
  var zi = (function(e) {
    return e.Left = "left", e.Right = "right", e;
  })(zi || {});
  const FS = (e) => {
    const { resizable: t, resizing: r, classes: o, side: n } = e, l = {
      root: [
        "columnSeparator",
        t && "columnSeparator--resizable",
        r && "columnSeparator--resizing",
        n && `columnSeparator--side${ie(n)}`
      ],
      icon: [
        "iconSeparator"
      ]
    };
    return ge(l, Ae, o);
  };
  function kS(e) {
    const { height: t, side: r = zi.Right } = e, o = fe(e, OS), n = ae(), l = C({}, e, {
      side: r,
      classes: n.classes
    }), s = FS(l), i = d.useCallback((a) => {
      a.preventDefault(), a.stopPropagation();
    }, []);
    return f.jsx("div", C({
      className: s.root,
      style: {
        minHeight: t
      }
    }, o, {
      onClick: i,
      children: f.jsx(n.slots.columnResizeIcon, {
        className: s.icon
      })
    }));
  }
  const ES = d.memo(kS), TS = [
    "classes",
    "columnMenuOpen",
    "colIndex",
    "height",
    "isResizing",
    "sortDirection",
    "hasFocus",
    "tabIndex",
    "separatorSide",
    "isDraggable",
    "headerComponent",
    "description",
    "elementId",
    "width",
    "columnMenuIconButton",
    "columnMenu",
    "columnTitleIconButtons",
    "headerClassName",
    "label",
    "resizable",
    "draggableContainerProps",
    "columnHeaderSeparatorProps",
    "style"
  ], zd = ze(function(t, r) {
    const { classes: o, colIndex: n, height: l, isResizing: s, sortDirection: i, tabIndex: a, separatorSide: u, isDraggable: c, headerComponent: p, description: g, width: b, columnMenuIconButton: h = null, columnMenu: m = null, columnTitleIconButtons: x = null, headerClassName: v, label: w, resizable: k, draggableContainerProps: L, columnHeaderSeparatorProps: F, style: I } = t, j = fe(t, TS), D = ae(), S = d.useRef(null), y = Yt(S, r);
    let M = "none";
    return i != null && (M = i === "asc" ? "ascending" : "descending"), f.jsxs("div", C({
      className: ue(o.root, v),
      style: C({}, I, {
        height: l,
        width: b
      }),
      role: "columnheader",
      tabIndex: a,
      "aria-colindex": n + 1,
      "aria-sort": M
    }, j, {
      ref: y,
      children: [
        f.jsxs("div", C({
          className: o.draggableContainer,
          draggable: c,
          role: "presentation"
        }, L, {
          children: [
            f.jsxs("div", {
              className: o.titleContainer,
              role: "presentation",
              children: [
                f.jsx("div", {
                  className: o.titleContainerContent,
                  children: p !== void 0 ? p : f.jsx(MS, {
                    label: w,
                    description: g,
                    columnWidth: b
                  })
                }),
                x
              ]
            }),
            h
          ]
        })),
        f.jsx(ES, C({
          resizable: !D.disableColumnResize && !!k,
          resizing: s,
          height: l,
          side: u
        }, F)),
        m
      ]
    }));
  }), AS = (e) => {
    const { colDef: t, classes: r, isDragging: o, sortDirection: n, showRightBorder: l, showLeftBorder: s, filterItemsCounter: i, pinnedPosition: a, isLastUnpinned: u, isSiblingFocused: c } = e, p = n != null, g = i != null && i > 0, b = t.type === "number", h = {
      root: [
        "columnHeader",
        t.headerAlign === "left" && "columnHeader--alignLeft",
        t.headerAlign === "center" && "columnHeader--alignCenter",
        t.headerAlign === "right" && "columnHeader--alignRight",
        t.sortable && "columnHeader--sortable",
        o && "columnHeader--moving",
        p && "columnHeader--sorted",
        g && "columnHeader--filtered",
        b && "columnHeader--numeric",
        "withBorderColor",
        l && "columnHeader--withRightBorder",
        s && "columnHeader--withLeftBorder",
        a === Te.LEFT && "columnHeader--pinnedLeft",
        a === Te.RIGHT && "columnHeader--pinnedRight",
        u && "columnHeader--lastUnpinned",
        c && "columnHeader--siblingFocused"
      ],
      draggableContainer: [
        "columnHeaderDraggableContainer"
      ],
      titleContainer: [
        "columnHeaderTitleContainer"
      ],
      titleContainerContent: [
        "columnHeaderTitleContainerContent"
      ]
    };
    return ge(h, Ae, r);
  };
  function DS(e) {
    var _a2, _b2, _c2;
    const { colDef: t, columnMenuOpen: r, colIndex: o, headerHeight: n, isResizing: l, isLast: s, sortDirection: i, sortIndex: a, filterItemsCounter: u, hasFocus: c, tabIndex: p, disableReorder: g, separatorSide: b, showLeftBorder: h, showRightBorder: m, pinnedPosition: x, pinnedOffset: v } = e, w = yr(), k = ae(), L = Xt(), F = d.useRef(null), I = it(), j = it(), D = d.useRef(null), [S, y] = d.useState(r), M = d.useMemo(() => !k.disableColumnReorder && !g && !t.disableReorder, [
      k.disableColumnReorder,
      g,
      t.disableReorder
    ]);
    let $;
    t.renderHeader && ($ = t.renderHeader(w.current.getColumnHeaderParams(t.field)));
    const E = C({}, e, {
      classes: k.classes,
      showRightBorder: m,
      showLeftBorder: h
    }), N = AS(E), T = d.useCallback((Z) => (re) => {
      Jn(re) || w.current.publishEvent(Z, w.current.getColumnHeaderParams(t.field), re);
    }, [
      w,
      t.field
    ]), P = d.useMemo(() => ({
      onClick: T("columnHeaderClick"),
      onContextMenu: T("columnHeaderContextMenu"),
      onDoubleClick: T("columnHeaderDoubleClick"),
      onMouseOver: T("columnHeaderOver"),
      onMouseOut: T("columnHeaderOut"),
      onMouseEnter: T("columnHeaderEnter"),
      onMouseLeave: T("columnHeaderLeave"),
      onKeyDown: T("columnHeaderKeyDown"),
      onFocus: T("columnHeaderFocus"),
      onBlur: T("columnHeaderBlur")
    }), [
      T
    ]), A = d.useMemo(() => M ? {
      onDragStart: T("columnHeaderDragStart"),
      onDragEnter: T("columnHeaderDragEnter"),
      onDragOver: T("columnHeaderDragOver"),
      onDragEnd: T("columnHeaderDragEnd")
    } : {}, [
      M,
      T
    ]), R = d.useMemo(() => ({
      onMouseDown: T("columnSeparatorMouseDown"),
      onDoubleClick: T("columnSeparatorDoubleClick")
    }), [
      T
    ]);
    d.useEffect(() => {
      S || y(r);
    }, [
      S,
      r
    ]);
    const z = d.useCallback(() => {
      y(false);
    }, []), _ = !k.disableColumnMenu && !t.disableColumnMenu && f.jsx(lS, {
      colDef: t,
      columnMenuId: I,
      columnMenuButtonId: j,
      open: S,
      iconButtonRef: D
    }), H = f.jsx(sS, {
      columnMenuId: I,
      columnMenuButtonId: j,
      field: t.field,
      open: r,
      target: D.current,
      ContentComponent: k.slots.columnMenu,
      contentComponentProps: (_a2 = k.slotProps) == null ? void 0 : _a2.columnMenu,
      onExited: z
    }), G = t.sortingOrder ?? k.sortingOrder, U = (t.sortable || i != null) && !t.hideSortIcons && !k.disableColumnSorting, B = f.jsxs(d.Fragment, {
      children: [
        !k.disableColumnFilter && f.jsx(k.slots.columnHeaderFilterIconButton, C({
          field: t.field,
          counter: u
        }, (_b2 = k.slotProps) == null ? void 0 : _b2.columnHeaderFilterIconButton)),
        U && f.jsx(k.slots.columnHeaderSortIcon, C({
          field: t.field,
          direction: i,
          index: a,
          sortingOrder: G,
          disabled: !t.sortable
        }, (_c2 = k.slotProps) == null ? void 0 : _c2.columnHeaderSortIcon))
      ]
    });
    d.useLayoutEffect(() => {
      const Z = w.current.state.columnMenu;
      if (c && !Z.open) {
        const ce = F.current.querySelector('[tabindex="0"]') || F.current;
        if (!ce) return;
        if (ji()) ce.focus({
          preventScroll: true
        });
        else {
          const Ce = w.current.getScrollPosition();
          ce.focus(), w.current.scroll(Ce);
        }
      }
    }, [
      w,
      c
    ]);
    const q = typeof t.headerClassName == "function" ? t.headerClassName({
      field: t.field,
      colDef: t
    }) : t.headerClassName, W = t.headerName ?? t.field, te = d.useMemo(() => rs(C({}, e.style), L, x, v), [
      x,
      v,
      e.style,
      L
    ]);
    return f.jsx(zd, C({
      ref: F,
      classes: N,
      columnMenuOpen: r,
      colIndex: o,
      height: n,
      isResizing: l,
      sortDirection: i,
      hasFocus: c,
      tabIndex: p,
      separatorSide: b,
      isDraggable: M,
      headerComponent: $,
      description: t.description,
      elementId: t.field,
      width: t.computedWidth,
      columnMenuIconButton: _,
      columnTitleIconButtons: B,
      headerClassName: ue(q, s && O["columnHeader--last"]),
      label: W,
      resizable: !k.disableColumnResize && !!t.resizable,
      "data-field": t.field,
      columnMenu: H,
      draggableContainerProps: A,
      columnHeaderSeparatorProps: R,
      style: te
    }, P));
  }
  const $S = Wr(DS), LS = [
    "className"
  ], RS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "iconButtonContainer"
      ]
    }, Ae, t);
  }, jS = ot("div", {
    name: "MuiDataGrid",
    slot: "IconButtonContainer",
    overridesResolver: (e, t) => t.iconButtonContainer
  })(() => ({
    display: "flex",
    visibility: "hidden",
    width: 0
  })), Nd = ze(function(t, r) {
    const { className: o } = t, n = fe(t, LS), l = ae(), s = RS(l);
    return f.jsx(jS, C({
      className: ue(s.root, o),
      ownerState: l
    }, n, {
      ref: r
    }));
  }), HS = [
    "direction",
    "index",
    "sortingOrder",
    "disabled",
    "className"
  ], zS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "sortButton"
      ],
      icon: [
        "sortIcon"
      ]
    }, Ae, t);
  };
  function NS(e, t, r, o) {
    let n;
    const l = {};
    return t === "asc" ? n = e.columnSortedAscendingIcon : t === "desc" ? n = e.columnSortedDescendingIcon : (n = e.columnUnsortedIcon, l.sortingOrder = o), n ? f.jsx(n, C({
      fontSize: "small",
      className: r
    }, l)) : null;
  }
  function _S(e) {
    var _a2;
    const { direction: t, index: r, sortingOrder: o, disabled: n, className: l } = e, s = fe(e, HS), i = Fe(), a = ae(), u = C({}, e, {
      classes: a.classes
    }), c = zS(u), p = NS(a.slots, t, c.icon, o);
    if (!p) return null;
    const g = f.jsx(a.slots.baseIconButton, C({
      tabIndex: -1,
      "aria-label": i.current.getLocaleText("columnHeaderSortIconLabel"),
      title: i.current.getLocaleText("columnHeaderSortIconLabel"),
      size: "small",
      disabled: n,
      className: ue(c.root, l)
    }, (_a2 = a.slotProps) == null ? void 0 : _a2.baseIconButton, s, {
      children: p
    }));
    return f.jsxs(Nd, {
      children: [
        r != null && f.jsx(a.slots.baseBadge, {
          badgeContent: r,
          color: "default",
          overlap: "circular",
          children: g
        }),
        r == null && g
      ]
    });
  }
  const GS = d.memo(_S), VS = (e) => {
    const { classes: t } = e;
    return ge({
      icon: [
        "filterIcon"
      ]
    }, Ae, t);
  };
  function BS(e) {
    return e.counter ? f.jsx(WS, C({}, e)) : null;
  }
  function WS(e) {
    var _a2, _b2;
    const { counter: t, field: r, onClick: o } = e, n = Fe(), l = ae(), s = C({}, e, {
      classes: l.classes
    }), i = VS(s), a = it(), u = Dn(n, ov, a), c = it(), p = d.useCallback((b) => {
      b.preventDefault(), b.stopPropagation();
      const { open: h, openedPanelValue: m } = Rn(n.current.state);
      h && m === ho.filters ? n.current.hideFilterPanel() : n.current.showFilterPanel(void 0, c, a), o && o(n.current.getColumnHeaderParams(r), b);
    }, [
      n,
      r,
      o,
      c,
      a
    ]);
    if (!t) return null;
    const g = f.jsx(l.slots.baseIconButton, C({
      id: a,
      onClick: p,
      color: "default",
      "aria-label": n.current.getLocaleText("columnHeaderFiltersLabel"),
      size: "small",
      tabIndex: -1,
      "aria-haspopup": "menu",
      "aria-expanded": u,
      "aria-controls": u ? c : void 0
    }, (_a2 = l.slotProps) == null ? void 0 : _a2.baseIconButton, {
      children: f.jsx(l.slots.columnFilteredIcon, {
        className: i.icon,
        fontSize: "small"
      })
    }));
    return f.jsx(l.slots.baseTooltip, C({
      title: n.current.getLocaleText("columnHeaderFiltersTooltipActive")(t),
      enterDelay: 1e3
    }, (_b2 = l.slotProps) == null ? void 0 : _b2.baseTooltip, {
      children: f.jsxs(Nd, {
        children: [
          t > 1 && f.jsx(l.slots.baseBadge, {
            badgeContent: t,
            color: "default",
            children: g
          }),
          t === 1 && g
        ]
      })
    }));
  }
  const dc = Pe(f.jsx("path", {
    d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
  }), "ArrowUpward"), pc = Pe(f.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward"), fc = Pe(f.jsx("path", {
    d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "KeyboardArrowRight"), gc = Pe(f.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), US = Pe(f.jsx("path", {
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  }), "FilterList"), hc = Pe(f.jsx("path", {
    d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
  }), "FilterAlt"), qS = Pe(f.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), "Search");
  Pe(f.jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu");
  Pe(f.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckCircle");
  const KS = Pe(f.jsx("path", {
    d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
  }), "ColumnIcon"), YS = Pe(f.jsx("rect", {
    width: "1",
    height: "24",
    x: "11.5",
    rx: "0.5"
  }), "Separator"), XS = Pe(f.jsx("path", {
    d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
  }), "ViewHeadline"), QS = Pe(f.jsx("path", {
    d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
  }), "TableRows"), ZS = Pe(f.jsx("path", {
    d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
  }), "ViewStream"), JS = Pe(f.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "TripleDotsVertical"), vs = Pe(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), mc = Pe(f.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), "Add"), e0 = Pe(f.jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }), "Remove"), t0 = Pe(f.jsx("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }), "Load"), bc = Pe(f.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "Drag"), r0 = Pe(f.jsx("path", {
    d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
  }), "SaveAlt"), o0 = Pe(f.jsx("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), n0 = Pe(f.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "MoreVert"), l0 = Pe(f.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }), "VisibilityOff"), s0 = Pe(f.jsx("g", {
    children: f.jsx("path", {
      d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
    })
  }), "ViewColumn"), i0 = Pe(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  Pe(f.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  const a0 = Pe(f.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  function _d(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
  }
  const zl = (e) => e.indexOf("Arrow") === 0 || e.indexOf("Page") === 0 || e === " " || e === "Home" || e === "End", c0 = (e) => !!e.key, Gd = (e) => e === "Tab" || e === "Escape";
  function Vd(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "V" && !e.shiftKey && !e.altKey;
  }
  function u0(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "C" && !e.shiftKey && !e.altKey;
  }
  const d0 = [
    "hideMenu",
    "colDef",
    "id",
    "labelledby",
    "className",
    "children",
    "open"
  ], p0 = se(ii)(() => ({
    minWidth: 248
  })), f0 = ze(function(t, r) {
    const { hideMenu: o, id: n, labelledby: l, className: s, children: i, open: a } = t, u = fe(t, d0), c = d.useCallback((p) => {
      p.key === "Tab" && p.preventDefault(), Gd(p.key) && o(p);
    }, [
      o
    ]);
    return f.jsx(p0, C({
      id: n,
      className: ue(O.menuList, s),
      "aria-labelledby": l,
      onKeyDown: c,
      autoFocus: a
    }, u, {
      ref: r,
      children: i
    }));
  }), g0 = [
    "displayOrder"
  ], h0 = (e) => {
    const t = yr(), r = ae(), { defaultSlots: o, defaultSlotProps: n, slots: l = {}, slotProps: s = {}, hideMenu: i, colDef: a, addDividers: u = true } = e, c = d.useMemo(() => C({}, o, l), [
      o,
      l
    ]), p = d.useMemo(() => {
      if (!s || Object.keys(s).length === 0) return n;
      const h = C({}, s);
      return Object.entries(n).forEach(([m, x]) => {
        h[m] = C({}, x, s[m] || {});
      }), h;
    }, [
      n,
      s
    ]), g = t.current.unstable_applyPipeProcessors("columnMenu", [], e.colDef), b = d.useMemo(() => {
      const h = Object.keys(o);
      return Object.keys(l).filter((m) => !h.includes(m));
    }, [
      l,
      o
    ]);
    return d.useMemo(() => {
      const x = Array.from(/* @__PURE__ */ new Set([
        ...g,
        ...b
      ])).filter((v) => c[v] != null).sort((v, w) => {
        const k = p[v], L = p[w], F = Number.isFinite(k == null ? void 0 : k.displayOrder) ? k.displayOrder : 100, I = Number.isFinite(L == null ? void 0 : L.displayOrder) ? L.displayOrder : 100;
        return F - I;
      });
      return x.reduce((v, w, k) => {
        let L = {
          colDef: a,
          onClick: i
        };
        const F = p[w];
        if (F) {
          const I = fe(F, g0);
          L = C({}, L, I);
        }
        return u && k !== x.length - 1 ? [
          ...v,
          [
            c[w],
            L
          ],
          [
            r.slots.baseDivider,
            {}
          ]
        ] : [
          ...v,
          [
            c[w],
            L
          ]
        ];
      }, []);
    }, [
      u,
      a,
      g,
      i,
      c,
      p,
      b,
      r.slots.baseDivider
    ]);
  };
  function m0(e) {
    const { colDef: t, onClick: r } = e, o = Fe(), n = ae(), i = ft(o).filter((u) => u.disableColumnMenu !== true).length === 1, a = d.useCallback((u) => {
      i || (o.current.setColumnVisibility(t.field, false), r(u));
    }, [
      o,
      t.field,
      r,
      i
    ]);
    return n.disableColumnSelector || t.hideable === false ? null : f.jsxs(jt, {
      onClick: a,
      disabled: i,
      children: [
        f.jsx(zo, {
          children: f.jsx(n.slots.columnMenuHideIcon, {
            fontSize: "small"
          })
        }),
        f.jsx(jo, {
          children: o.current.getLocaleText("columnMenuHideColumn")
        })
      ]
    });
  }
  function b0(e) {
    const { onClick: t } = e, r = Fe(), o = ae(), n = d.useCallback((l) => {
      t(l), r.current.showPreferences(ho.columns);
    }, [
      r,
      t
    ]);
    return o.disableColumnSelector ? null : f.jsxs(jt, {
      onClick: n,
      children: [
        f.jsx(zo, {
          children: f.jsx(o.slots.columnMenuManageColumnsIcon, {
            fontSize: "small"
          })
        }),
        f.jsx(jo, {
          children: r.current.getLocaleText("columnMenuManageColumns")
        })
      ]
    });
  }
  function C0(e) {
    return f.jsxs(d.Fragment, {
      children: [
        f.jsx(m0, C({}, e)),
        f.jsx(b0, C({}, e))
      ]
    });
  }
  function y0(e) {
    const { colDef: t, onClick: r } = e, o = Fe(), n = ae(), l = d.useCallback((s) => {
      r(s), o.current.showFilterPanel(t.field);
    }, [
      o,
      t.field,
      r
    ]);
    return n.disableColumnFilter || !t.filterable ? null : f.jsxs(jt, {
      onClick: l,
      children: [
        f.jsx(zo, {
          children: f.jsx(n.slots.columnMenuFilterIcon, {
            fontSize: "small"
          })
        }),
        f.jsx(jo, {
          children: o.current.getLocaleText("columnMenuFilter")
        })
      ]
    });
  }
  function w0(e) {
    const { colDef: t, onClick: r } = e, o = Fe(), n = X(o, vr), l = ae(), s = d.useMemo(() => {
      var _a2;
      return t ? (_a2 = n.find((p) => p.field === t.field)) == null ? void 0 : _a2.sort : null;
    }, [
      t,
      n
    ]), i = t.sortingOrder ?? l.sortingOrder, a = d.useCallback((c) => {
      r(c);
      const p = c.currentTarget.getAttribute("data-value") || null;
      o.current.sortColumn(t.field, p === s ? null : p);
    }, [
      o,
      t,
      r,
      s
    ]);
    if (l.disableColumnSorting || !t || !t.sortable || !i.some((c) => !!c)) return null;
    const u = (c) => {
      const p = o.current.getLocaleText(c);
      return typeof p == "function" ? p(t) : p;
    };
    return f.jsxs(d.Fragment, {
      children: [
        i.includes("asc") && s !== "asc" ? f.jsxs(jt, {
          onClick: a,
          "data-value": "asc",
          children: [
            f.jsx(zo, {
              children: f.jsx(l.slots.columnMenuSortAscendingIcon, {
                fontSize: "small"
              })
            }),
            f.jsx(jo, {
              children: u("columnMenuSortAsc")
            })
          ]
        }) : null,
        i.includes("desc") && s !== "desc" ? f.jsxs(jt, {
          onClick: a,
          "data-value": "desc",
          children: [
            f.jsx(zo, {
              children: f.jsx(l.slots.columnMenuSortDescendingIcon, {
                fontSize: "small"
              })
            }),
            f.jsx(jo, {
              children: u("columnMenuSortDesc")
            })
          ]
        }) : null,
        i.includes(null) && s != null ? f.jsxs(jt, {
          onClick: a,
          children: [
            f.jsx(zo, {}),
            f.jsx(jo, {
              children: o.current.getLocaleText("columnMenuUnsort")
            })
          ]
        }) : null
      ]
    });
  }
  const x0 = [
    "defaultSlots",
    "defaultSlotProps",
    "slots",
    "slotProps"
  ], v0 = {
    columnMenuSortItem: w0,
    columnMenuFilterItem: y0,
    columnMenuColumnsItem: C0
  }, S0 = {
    columnMenuSortItem: {
      displayOrder: 10
    },
    columnMenuFilterItem: {
      displayOrder: 20
    },
    columnMenuColumnsItem: {
      displayOrder: 30
    }
  }, P0 = ze(function(t, r) {
    const { defaultSlots: o, defaultSlotProps: n, slots: l, slotProps: s } = t, i = fe(t, x0), a = h0(C({}, i, {
      defaultSlots: o,
      defaultSlotProps: n,
      slots: l,
      slotProps: s
    }));
    return f.jsx(f0, C({}, i, {
      ref: r,
      children: a.map(([u, c], p) => f.jsx(u, C({}, c), p))
    }));
  }), I0 = ze(function(t, r) {
    return f.jsx(P0, C({}, t, {
      ref: r,
      defaultSlots: v0,
      defaultSlotProps: S0
    }));
  }), M0 = [
    "className",
    "slotProps"
  ], O0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "panelWrapper"
      ]
    }, Ae, t);
  }, F0 = se("div", {
    name: "MuiDataGrid",
    slot: "PanelWrapper",
    overridesResolver: (e, t) => t.panelWrapper
  })({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    "&:focus": {
      outline: 0
    }
  }), k0 = () => true, Bd = ze(function(t, r) {
    const { className: o, slotProps: n = {} } = t, l = fe(t, M0), s = ae(), i = O0(s);
    return f.jsx(Pp, C({
      open: true,
      disableEnforceFocus: true,
      isEnabled: k0
    }, n.TrapFocus, {
      children: f.jsx(F0, C({
        tabIndex: -1,
        className: ue(i.root, o),
        ownerState: s
      }, l, {
        ref: r
      }))
    }));
  });
  function E0(e) {
    var _a2;
    const t = ae();
    return f.jsx(Bd, C({}, e, {
      children: f.jsx(t.slots.columnsManagement, C({}, (_a2 = t.slotProps) == null ? void 0 : _a2.columnsManagement))
    }));
  }
  const T0 = [
    "children",
    "className",
    "classes"
  ], A0 = gt("MuiDataGrid", [
    "panel",
    "paper"
  ]), D0 = se(bo, {
    name: "MuiDataGrid",
    slot: "Panel",
    overridesResolver: (e, t) => t.panel
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal
  })), $0 = se(Ut, {
    name: "MuiDataGrid",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    minWidth: 300,
    maxHeight: 450,
    display: "flex",
    maxWidth: `calc(100vw - ${e.spacing(0.5)})`,
    overflow: "auto"
  })), L0 = ze((e, t) => {
    const { children: r, className: o } = e, n = fe(e, T0), l = Fe(), s = ae(), i = A0, [a, u] = d.useState(false), c = d.useCallback(() => {
      l.current.hidePreferences();
    }, [
      l
    ]), p = d.useCallback((m) => {
      m.key === "Escape" && l.current.hidePreferences();
    }, [
      l
    ]), g = d.useMemo(() => [
      {
        name: "flip",
        enabled: true,
        options: {
          rootBoundary: "document"
        }
      },
      {
        name: "isPlaced",
        enabled: true,
        phase: "main",
        fn: () => {
          u(true);
        },
        effect: () => () => {
          u(false);
        }
      }
    ], []), [b, h] = d.useState(null);
    return d.useEffect(() => {
      var _a2, _b2;
      const m = (_b2 = (_a2 = l.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.querySelector('[data-id="gridPanelAnchor"]');
      m && h(m);
    }, [
      l
    ]), b ? f.jsx(D0, C({
      placement: "bottom-start",
      className: ue(i.panel, o),
      ownerState: s,
      anchorEl: b,
      modifiers: g
    }, n, {
      ref: t,
      children: f.jsx(mi, {
        mouseEvent: "onPointerUp",
        touchEvent: false,
        onClickAway: c,
        children: f.jsx($0, {
          className: i.paper,
          ownerState: s,
          elevation: 8,
          onKeyDown: p,
          children: a && r
        })
      })
    })) : null;
  }), R0 = [
    "className"
  ], j0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "panelContent"
      ]
    }, Ae, t);
  }, H0 = ot("div", {
    name: "MuiDataGrid",
    slot: "PanelContent",
    overridesResolver: (e, t) => t.panelContent
  })({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flex: "1 1",
    maxHeight: 400
  });
  function z0(e) {
    const { className: t } = e, r = fe(e, R0), o = ae(), n = j0(o);
    return f.jsx(H0, C({
      className: ue(n.root, t),
      ownerState: o
    }, r));
  }
  const N0 = [
    "className"
  ], _0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "panelFooter"
      ]
    }, Ae, t);
  }, G0 = ot("div", {
    name: "MuiDataGrid",
    slot: "PanelFooter",
    overridesResolver: (e, t) => t.panelFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5),
    display: "flex",
    justifyContent: "space-between"
  }));
  function V0(e) {
    const { className: t } = e, r = fe(e, N0), o = ae(), n = _0(o);
    return f.jsx(G0, C({
      className: ue(n.root, t),
      ownerState: o
    }, r));
  }
  const B0 = [
    "item",
    "hasMultipleFilters",
    "deleteFilter",
    "applyFilterChanges",
    "showMultiFilterOperators",
    "disableMultiFilterOperator",
    "applyMultiFilterOperatorChanges",
    "focusElementRef",
    "logicOperators",
    "columnsSort",
    "filterColumns",
    "deleteIconProps",
    "logicOperatorInputProps",
    "operatorInputProps",
    "columnInputProps",
    "valueInputProps",
    "readOnly",
    "children"
  ], W0 = [
    "InputComponentProps"
  ], U0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "filterForm"
      ],
      deleteIcon: [
        "filterFormDeleteIcon"
      ],
      logicOperatorInput: [
        "filterFormLogicOperatorInput"
      ],
      columnInput: [
        "filterFormColumnInput"
      ],
      operatorInput: [
        "filterFormOperatorInput"
      ],
      valueInput: [
        "filterFormValueInput"
      ]
    }, Ae, t);
  }, q0 = se("div", {
    name: "MuiDataGrid",
    slot: "FilterForm",
    overridesResolver: (e, t) => t.filterForm
  })(({ theme: e }) => ({
    display: "flex",
    padding: e.spacing(1)
  })), K0 = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormDeleteIcon",
    overridesResolver: (e, t) => t.filterFormDeleteIcon
  })(({ theme: e }) => ({
    flexShrink: 0,
    justifyContent: "flex-end",
    marginRight: e.spacing(0.5),
    marginBottom: e.spacing(0.2)
  })), Y0 = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormLogicOperatorInput",
    overridesResolver: (e, t) => t.filterFormLogicOperatorInput
  })({
    minWidth: 55,
    marginRight: 5,
    justifyContent: "end"
  }), X0 = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormColumnInput",
    overridesResolver: (e, t) => t.filterFormColumnInput
  })({
    width: 150
  }), Q0 = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormOperatorInput",
    overridesResolver: (e, t) => t.filterFormOperatorInput
  })({
    width: 150
  }), Z0 = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormValueInput",
    overridesResolver: (e, t) => t.filterFormValueInput
  })({
    width: 190
  }), J0 = (e) => {
    switch (e) {
      case _t.And:
        return "filterPanelOperatorAnd";
      case _t.Or:
        return "filterPanelOperatorOr";
      default:
        throw new Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
    }
  }, bn = (e) => e.headerName || e.field, Cc = new Intl.Collator(), yc = ze(function(t, r) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const { item: o, hasMultipleFilters: n, deleteFilter: l, applyFilterChanges: s, showMultiFilterOperators: i, disableMultiFilterOperator: a, applyMultiFilterOperatorChanges: u, focusElementRef: c, logicOperators: p = [
      _t.And,
      _t.Or
    ], columnsSort: g, filterColumns: b, deleteIconProps: h = {}, logicOperatorInputProps: m = {}, operatorInputProps: x = {}, columnInputProps: v = {}, valueInputProps: w = {}, readOnly: k } = t, L = fe(t, B0), F = Fe(), I = X(F, Ur), j = X(F, Gu), D = X(F, kt), S = it(), y = it(), M = it(), $ = it(), E = ae(), N = U0(E), T = d.useRef(null), P = d.useRef(null), A = D.logicOperator ?? _t.And, R = n && p.length > 0, z = ((_a2 = E.slotProps) == null ? void 0 : _a2.baseFormControl) || {}, H = (((_b2 = E.slotProps) == null ? void 0 : _b2.baseSelect) || {}).native ?? false, G = ((_c2 = E.slotProps) == null ? void 0 : _c2.baseInputLabel) || {}, U = ((_d2 = E.slotProps) == null ? void 0 : _d2.baseSelectOption) || {}, { InputComponentProps: B } = w, q = fe(w, W0), { filteredColumns: W, selectedField: te } = d.useMemo(() => {
      let J = o.field;
      const Ie = I[o.field].filterable === false ? I[o.field] : null;
      if (Ie) return {
        filteredColumns: [
          Ie
        ],
        selectedField: J
      };
      if (b === void 0 || typeof b != "function") return {
        filteredColumns: j,
        selectedField: J
      };
      const ee = b({
        field: o.field,
        columns: j,
        currentFilters: (D == null ? void 0 : D.items) || []
      });
      return {
        filteredColumns: j.filter((Se) => {
          const xe = ee.includes(Se.field);
          return Se.field === o.field && !xe && (J = void 0), xe;
        }),
        selectedField: J
      };
    }, [
      b,
      D == null ? void 0 : D.items,
      j,
      o.field,
      I
    ]), Z = d.useMemo(() => {
      switch (g) {
        case "asc":
          return W.sort((J, Ie) => Cc.compare(bn(J), bn(Ie)));
        case "desc":
          return W.sort((J, Ie) => -Cc.compare(bn(J), bn(Ie)));
        default:
          return W;
      }
    }, [
      W,
      g
    ]), re = o.field ? F.current.getColumn(o.field) : null, ce = d.useMemo(() => {
      var _a3;
      return !o.operator || !re ? null : (_a3 = re.filterOperators) == null ? void 0 : _a3.find((J) => J.value === o.operator);
    }, [
      o,
      re
    ]), Ce = d.useCallback((J) => {
      const Ie = J.target.value, ee = F.current.getColumn(Ie);
      if (ee.field === re.field) return;
      const Se = ee.filterOperators.find((Ve) => Ve.value === o.operator) || ee.filterOperators[0];
      let ke = !Se.InputComponent || Se.InputComponent !== (ce == null ? void 0 : ce.InputComponent) || ee.type !== re.type ? void 0 : o.value;
      if (ee.type === "singleSelect" && ke !== void 0) {
        const Ve = ee, qe = go(Ve);
        Array.isArray(ke) ? ke = ke.filter((Ne) => Ll(Ne, qe, Ve == null ? void 0 : Ve.getOptionValue) !== void 0) : Ll(o.value, qe, Ve == null ? void 0 : Ve.getOptionValue) === void 0 && (ke = void 0);
      }
      s(C({}, o, {
        field: Ie,
        operator: Se.value,
        value: ke
      }));
    }, [
      F,
      s,
      o,
      re,
      ce
    ]), Y = d.useCallback((J) => {
      const Ie = J.target.value, ee = re == null ? void 0 : re.filterOperators.find((xe) => xe.value === Ie), Se = !(ee == null ? void 0 : ee.InputComponent) || (ee == null ? void 0 : ee.InputComponent) !== (ce == null ? void 0 : ce.InputComponent);
      s(C({}, o, {
        operator: Ie,
        value: Se ? void 0 : o.value
      }));
    }, [
      s,
      o,
      re,
      ce
    ]), ne = d.useCallback((J) => {
      const Ie = J.target.value === _t.And.toString() ? _t.And : _t.Or;
      u(Ie);
    }, [
      u
    ]), he = () => {
      l(o);
    };
    return d.useImperativeHandle(c, () => ({
      focus: () => {
        var _a3;
        (ce == null ? void 0 : ce.InputComponent) ? (_a3 = T == null ? void 0 : T.current) == null ? void 0 : _a3.focus() : P.current.focus();
      }
    }), [
      ce
    ]), f.jsxs(q0, C({
      className: N.root,
      "data-id": o.id,
      ownerState: E
    }, L, {
      ref: r,
      children: [
        f.jsx(K0, C({
          variant: "standard",
          as: E.slots.baseFormControl
        }, z, h, {
          className: ue(N.deleteIcon, z.className, h.className),
          ownerState: E,
          children: f.jsx(E.slots.baseIconButton, C({
            "aria-label": F.current.getLocaleText("filterPanelDeleteIconLabel"),
            title: F.current.getLocaleText("filterPanelDeleteIconLabel"),
            onClick: he,
            size: "small",
            disabled: k
          }, (_e = E.slotProps) == null ? void 0 : _e.baseIconButton, {
            children: f.jsx(E.slots.filterPanelDeleteIcon, {
              fontSize: "small"
            })
          }))
        })),
        f.jsx(Y0, C({
          variant: "standard",
          as: E.slots.baseFormControl
        }, z, m, {
          sx: [
            R ? {
              display: "flex"
            } : {
              display: "none"
            },
            i ? {
              visibility: "visible"
            } : {
              visibility: "hidden"
            },
            z.sx,
            m.sx
          ],
          className: ue(N.logicOperatorInput, z.className, m.className),
          ownerState: E,
          children: f.jsx(E.slots.baseSelect, C({
            inputProps: {
              "aria-label": F.current.getLocaleText("filterPanelLogicOperator")
            },
            value: A ?? "",
            onChange: ne,
            disabled: !!a || p.length === 1,
            native: H
          }, (_f2 = E.slotProps) == null ? void 0 : _f2.baseSelect, {
            children: p.map((J) => d.createElement(E.slots.baseSelectOption, C({}, U, {
              native: H,
              key: J.toString(),
              value: J.toString()
            }), F.current.getLocaleText(J0(J))))
          }))
        })),
        f.jsxs(X0, C({
          variant: "standard",
          as: E.slots.baseFormControl
        }, z, v, {
          className: ue(N.columnInput, z.className, v.className),
          ownerState: E,
          children: [
            f.jsx(E.slots.baseInputLabel, C({}, G, {
              htmlFor: S,
              id: y,
              children: F.current.getLocaleText("filterPanelColumns")
            })),
            f.jsx(E.slots.baseSelect, C({
              labelId: y,
              id: S,
              label: F.current.getLocaleText("filterPanelColumns"),
              value: te ?? "",
              onChange: Ce,
              native: H,
              disabled: k
            }, (_g2 = E.slotProps) == null ? void 0 : _g2.baseSelect, {
              children: Z.map((J) => d.createElement(E.slots.baseSelectOption, C({}, U, {
                native: H,
                key: J.field,
                value: J.field
              }), bn(J)))
            }))
          ]
        })),
        f.jsxs(Q0, C({
          variant: "standard",
          as: E.slots.baseFormControl
        }, z, x, {
          className: ue(N.operatorInput, z.className, x.className),
          ownerState: E,
          children: [
            f.jsx(E.slots.baseInputLabel, C({}, G, {
              htmlFor: M,
              id: $,
              children: F.current.getLocaleText("filterPanelOperator")
            })),
            f.jsx(E.slots.baseSelect, C({
              labelId: $,
              label: F.current.getLocaleText("filterPanelOperator"),
              id: M,
              value: o.operator,
              onChange: Y,
              native: H,
              inputRef: P,
              disabled: k
            }, (_h2 = E.slotProps) == null ? void 0 : _h2.baseSelect, {
              children: (_i2 = re == null ? void 0 : re.filterOperators) == null ? void 0 : _i2.map((J) => d.createElement(E.slots.baseSelectOption, C({}, U, {
                native: H,
                key: J.value,
                value: J.value
              }), J.label || F.current.getLocaleText(`filterOperator${ie(J.value)}`)))
            }))
          ]
        })),
        f.jsx(Z0, C({
          variant: "standard",
          as: E.slots.baseFormControl
        }, z, q, {
          className: ue(N.valueInput, z.className, q.className),
          ownerState: E,
          children: (ce == null ? void 0 : ce.InputComponent) ? f.jsx(ce.InputComponent, C({
            apiRef: F,
            item: o,
            applyValue: s,
            focusElementRef: T,
            disabled: k
          }, ce.InputComponentProps, B), o.field) : null
        }))
      ]
    }));
  }), eP = [
    "logicOperators",
    "columnsSort",
    "filterFormProps",
    "getColumnForNewFilter",
    "children",
    "disableAddFilterButton",
    "disableRemoveAllButton"
  ], wc = (e) => ({
    field: e.field,
    operator: e.filterOperators[0].value,
    id: Math.round(Math.random() * 1e5)
  }), tP = ze(function(t, r) {
    var _a2, _b2;
    const o = Fe(), n = ae(), l = X(o, kt), s = X(o, Gu), i = X(o, sy), a = d.useRef(null), u = d.useRef(null), { logicOperators: c = [
      _t.And,
      _t.Or
    ], columnsSort: p, filterFormProps: g, getColumnForNewFilter: b, disableAddFilterButton: h = false, disableRemoveAllButton: m = false } = t, x = fe(t, eP), v = o.current.upsertFilterItem, w = d.useCallback(($) => {
      o.current.setFilterLogicOperator($);
    }, [
      o
    ]), k = d.useCallback(() => {
      let $;
      if (b && typeof b == "function") {
        const E = b({
          currentFilters: (l == null ? void 0 : l.items) || [],
          columns: s
        });
        if (E === null) return null;
        $ = s.find(({ field: N }) => N === E);
      } else $ = s.find((E) => {
        var _a3;
        return (_a3 = E.filterOperators) == null ? void 0 : _a3.length;
      });
      return $ ? wc($) : null;
    }, [
      l == null ? void 0 : l.items,
      s,
      b
    ]), L = d.useCallback(() => {
      if (b === void 0 || typeof b != "function") return k();
      const $ = l.items.length ? l.items : [
        k()
      ].filter(Boolean), E = b({
        currentFilters: $,
        columns: s
      });
      if (E === null) return null;
      const N = s.find(({ field: T }) => T === E);
      return N ? wc(N) : null;
    }, [
      l.items,
      s,
      b,
      k
    ]), F = d.useMemo(() => l.items.length ? l.items : (u.current || (u.current = k()), u.current ? [
      u.current
    ] : []), [
      l.items,
      k
    ]), I = F.length > 1, { readOnlyFilters: j, validFilters: D } = d.useMemo(() => F.reduce(($, E) => (i[E.field] ? $.validFilters.push(E) : $.readOnlyFilters.push(E), $), {
      readOnlyFilters: [],
      validFilters: []
    }), [
      F,
      i
    ]), S = d.useCallback(() => {
      const $ = L();
      $ && o.current.upsertFilterItems([
        ...F,
        $
      ]);
    }, [
      o,
      L,
      F
    ]), y = d.useCallback(($) => {
      const E = D.length === 1;
      o.current.deleteFilterItem($), E && o.current.hideFilterPanel();
    }, [
      o,
      D.length
    ]), M = d.useCallback(() => D.length === 1 && D[0].value === void 0 ? (o.current.deleteFilterItem(D[0]), o.current.hideFilterPanel()) : o.current.setFilterModel(C({}, l, {
      items: j
    }), "removeAllFilterItems"), [
      o,
      j,
      l,
      D
    ]);
    return d.useEffect(() => {
      c.length > 0 && l.logicOperator && !c.includes(l.logicOperator) && w(c[0]);
    }, [
      c,
      w,
      l.logicOperator
    ]), d.useEffect(() => {
      D.length > 0 && a.current.focus();
    }, [
      D.length
    ]), f.jsxs(Bd, C({}, x, {
      ref: r,
      children: [
        f.jsxs(z0, {
          children: [
            j.map(($, E) => f.jsx(yc, C({
              item: $,
              applyFilterChanges: v,
              deleteFilter: y,
              hasMultipleFilters: I,
              showMultiFilterOperators: E > 0,
              disableMultiFilterOperator: E !== 1,
              applyMultiFilterOperatorChanges: w,
              focusElementRef: null,
              readOnly: true,
              logicOperators: c,
              columnsSort: p
            }, g), $.id == null ? E : $.id)),
            D.map(($, E) => f.jsx(yc, C({
              item: $,
              applyFilterChanges: v,
              deleteFilter: y,
              hasMultipleFilters: I,
              showMultiFilterOperators: j.length + E > 0,
              disableMultiFilterOperator: j.length + E !== 1,
              applyMultiFilterOperatorChanges: w,
              focusElementRef: E === D.length - 1 ? a : null,
              logicOperators: c,
              columnsSort: p
            }, g), $.id == null ? E + j.length : $.id))
          ]
        }),
        !n.disableMultipleColumnsFiltering && !(h && m) ? f.jsxs(V0, {
          children: [
            h ? f.jsx("span", {}) : f.jsx(n.slots.baseButton, C({
              onClick: S,
              startIcon: f.jsx(n.slots.filterPanelAddIcon, {})
            }, (_a2 = n.slotProps) == null ? void 0 : _a2.baseButton, {
              children: o.current.getLocaleText("filterPanelAddFilter")
            })),
            !m && D.length > 0 ? f.jsx(n.slots.baseButton, C({
              onClick: M,
              startIcon: f.jsx(n.slots.filterPanelRemoveAllIcon, {})
            }, (_b2 = n.slotProps) == null ? void 0 : _b2.baseButton, {
              children: o.current.getLocaleText("filterPanelRemoveAll")
            })) : null
          ]
        }) : null
      ]
    }));
  }), rP = (e, t) => {
    const r = new Set(Object.keys(e).filter((l) => e[l] === false)), o = new Set(Object.keys(t).filter((l) => t[l] === false));
    if (r.size !== o.size) return false;
    let n = true;
    return r.forEach((l) => {
      o.has(l) || (n = false);
    }), n;
  }, oP = (e, t) => (e.headerName || e.field).toLowerCase().indexOf(t) > -1, nP = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "columnsManagement"
      ],
      header: [
        "columnsManagementHeader"
      ],
      searchInput: [
        "columnsManagementSearchInput"
      ],
      footer: [
        "columnsManagementFooter"
      ],
      row: [
        "columnsManagementRow"
      ]
    }, Ae, t);
  }, xc = new Intl.Collator();
  function lP(e) {
    var _a2, _b2, _c2, _d2;
    const t = Fe(), r = d.useRef(null), o = X(t, hr), n = Lr(() => dr(t)).current, l = X(t, dr), s = ae(), [i, a] = d.useState(""), u = nP(s), { sort: c, searchPredicate: p = oP, autoFocusSearchField: g = true, disableShowHideToggle: b = false, disableResetButton: h = false, toggleAllMode: m = "all", getTogglableColumns: x, searchInputProps: v } = e, w = d.useMemo(() => rP(l, n), [
      l,
      n
    ]), k = d.useMemo(() => {
      switch (c) {
        case "asc":
          return [
            ...o
          ].sort((T, P) => xc.compare(T.headerName || T.field, P.headerName || P.field));
        case "desc":
          return [
            ...o
          ].sort((T, P) => -xc.compare(T.headerName || T.field, P.headerName || P.field));
        default:
          return o;
      }
    }, [
      o,
      c
    ]), L = (T) => {
      const { name: P } = T.target;
      t.current.setColumnVisibility(P, l[P] === false);
    }, F = d.useMemo(() => {
      const T = x ? x(k) : null, P = T ? k.filter(({ field: A }) => T.includes(A)) : k;
      return i ? P.filter((A) => p(A, i.toLowerCase())) : P;
    }, [
      k,
      i,
      p,
      x
    ]), I = d.useCallback((T) => {
      const P = dr(t), A = C({}, P), R = x ? x(o) : null;
      return (m === "filteredOnly" ? F : o).forEach((z) => {
        z.hideable && (R == null || R.includes(z.field)) && (T ? delete A[z.field] : A[z.field] = false);
      }), t.current.setColumnVisibilityModel(A);
    }, [
      t,
      o,
      x,
      m,
      F
    ]), j = d.useCallback((T) => {
      a(T.target.value);
    }, []), D = d.useMemo(() => F.filter((T) => T.hideable), [
      F
    ]), S = d.useMemo(() => D.every((T) => l[T.field] == null || l[T.field] !== false), [
      l,
      D
    ]), y = d.useMemo(() => D.every((T) => l[T.field] === false), [
      l,
      D
    ]), M = d.useRef(null);
    d.useEffect(() => {
      g ? r.current.focus() : M.current && typeof M.current.focus == "function" && M.current.focus();
    }, [
      g
    ]);
    let $ = false;
    const E = (T) => $ === false && T.hideable !== false ? ($ = true, true) : false, N = d.useCallback(() => {
      a(""), r.current.focus();
    }, []);
    return f.jsxs(d.Fragment, {
      children: [
        f.jsx(iP, {
          className: u.header,
          ownerState: s,
          children: f.jsx(aP, C({
            as: s.slots.baseTextField,
            ownerState: s,
            placeholder: t.current.getLocaleText("columnsManagementSearchTitle"),
            inputRef: r,
            className: u.searchInput,
            value: i,
            onChange: j,
            variant: "outlined",
            size: "small",
            type: "search",
            InputProps: {
              startAdornment: f.jsx(s.slots.baseInputAdornment, {
                position: "start",
                children: f.jsx(s.slots.quickFilterIcon, {})
              }),
              endAdornment: f.jsx(s.slots.baseIconButton, C({
                "aria-label": t.current.getLocaleText("columnsManagementDeleteIconLabel"),
                size: "small",
                sx: [
                  i ? {
                    visibility: "visible"
                  } : {
                    visibility: "hidden"
                  }
                ],
                tabIndex: -1,
                onClick: N
              }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseIconButton, {
                children: f.jsx(s.slots.quickFilterClearIcon, {
                  fontSize: "small"
                })
              }))
            },
            inputProps: {
              "aria-label": t.current.getLocaleText("columnsManagementSearchTitle")
            },
            autoComplete: "off",
            fullWidth: true
          }, (_b2 = s.slotProps) == null ? void 0 : _b2.baseTextField, v))
        }),
        f.jsxs(sP, {
          className: u.root,
          ownerState: s,
          children: [
            F.map((T) => {
              var _a3;
              return f.jsx(Zr, {
                className: u.row,
                control: f.jsx(s.slots.baseCheckbox, C({
                  disabled: T.hideable === false,
                  checked: l[T.field] !== false,
                  onClick: L,
                  name: T.field,
                  sx: {
                    p: 0.5
                  },
                  inputRef: E(T) ? M : void 0
                }, (_a3 = s.slotProps) == null ? void 0 : _a3.baseCheckbox)),
                label: T.headerName || T.field
              }, T.field);
            }),
            F.length === 0 && f.jsx(uP, {
              ownerState: s,
              children: t.current.getLocaleText("columnsManagementNoColumns")
            })
          ]
        }),
        (!b || !h) && F.length > 0 ? f.jsxs(cP, {
          ownerState: s,
          className: u.footer,
          children: [
            b ? f.jsx("span", {}) : f.jsx(Zr, {
              control: f.jsx(s.slots.baseCheckbox, C({
                disabled: D.length === 0,
                checked: S,
                indeterminate: !S && !y,
                onClick: () => I(!S),
                name: t.current.getLocaleText("columnsManagementShowHideAllText"),
                sx: {
                  p: 0.5
                }
              }, (_c2 = s.slotProps) == null ? void 0 : _c2.baseCheckbox)),
              label: t.current.getLocaleText("columnsManagementShowHideAllText")
            }),
            h ? null : f.jsx(s.slots.baseButton, C({
              onClick: () => t.current.setColumnVisibilityModel(n),
              disabled: w
            }, (_d2 = s.slotProps) == null ? void 0 : _d2.baseButton, {
              children: t.current.getLocaleText("columnsManagementReset")
            }))
          ]
        }) : null
      ]
    });
  }
  const sP = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagement",
    overridesResolver: (e, t) => t.columnsManagement
  })(({ theme: e }) => ({
    padding: e.spacing(0, 3, 1.5),
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flex: "1 1",
    maxHeight: 400,
    alignItems: "flex-start"
  })), iP = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementHeader",
    overridesResolver: (e, t) => t.columnsManagementHeader
  })(({ theme: e }) => ({
    padding: e.spacing(1.5, 3)
  })), aP = se(ir, {
    name: "MuiDataGrid",
    slot: "ColumnsManagementSearchInput",
    overridesResolver: (e, t) => t.columnsManagementSearchInput
  })(({ theme: e }) => ({
    [`& .${sr.root}`]: {
      padding: e.spacing(0, 1.5, 0, 1.5)
    },
    [`& .${sr.input}::-webkit-search-decoration,
  & .${sr.input}::-webkit-search-cancel-button,
  & .${sr.input}::-webkit-search-results-button,
  & .${sr.input}::-webkit-search-results-decoration`]: {
      display: "none"
    }
  })), cP = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementFooter",
    overridesResolver: (e, t) => t.columnsManagementFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5, 1, 0.5, 3),
    display: "flex",
    justifyContent: "space-between",
    borderTop: `1px solid ${e.palette.divider}`
  })), uP = se("div")(({ theme: e }) => ({
    padding: e.spacing(0.5, 0),
    color: e.palette.grey[500]
  })), dP = ze(function(t, r) {
    var _a2, _b2;
    const { children: o, slotProps: n = {} } = t, l = n.button || {}, s = n.tooltip || {}, i = Fe(), a = ae(), u = it(), c = it(), [p, g] = d.useState(false), b = d.useRef(null), h = Yt(r, b), m = (w) => {
      var _a3;
      g((k) => !k), (_a3 = l.onClick) == null ? void 0 : _a3.call(l, w);
    }, x = () => g(false), v = (w) => {
      w.key === "Tab" && w.preventDefault(), Gd(w.key) && x();
    };
    return o == null ? null : f.jsxs(d.Fragment, {
      children: [
        f.jsx(a.slots.baseTooltip, C({
          title: i.current.getLocaleText("toolbarExportLabel"),
          enterDelay: 1e3
        }, (_a2 = a.slotProps) == null ? void 0 : _a2.baseTooltip, s, {
          children: f.jsx(a.slots.baseButton, C({
            size: "small",
            startIcon: f.jsx(a.slots.exportIcon, {}),
            "aria-expanded": p,
            "aria-label": i.current.getLocaleText("toolbarExportLabel"),
            "aria-haspopup": "menu",
            "aria-controls": p ? c : void 0,
            id: u
          }, (_b2 = a.slotProps) == null ? void 0 : _b2.baseButton, l, {
            onClick: m,
            ref: h,
            children: i.current.getLocaleText("toolbarExport")
          }))
        })),
        f.jsx(Pi, {
          open: p,
          target: b.current,
          onClose: x,
          position: "bottom-start",
          children: f.jsx(ii, {
            id: c,
            className: O.menuList,
            "aria-labelledby": u,
            onKeyDown: v,
            autoFocusItem: p,
            children: d.Children.map(o, (w) => d.isValidElement(w) ? d.cloneElement(w, {
              hideMenu: x
            }) : w)
          })
        })
      ]
    });
  }), pP = [
    "hideMenu",
    "options"
  ], fP = [
    "hideMenu",
    "options"
  ], gP = [
    "csvOptions",
    "printOptions",
    "excelOptions"
  ];
  function hP(e) {
    const t = Fe(), { hideMenu: r, options: o } = e, n = fe(e, pP);
    return f.jsx(jt, C({
      onClick: () => {
        t.current.exportDataAsCsv(o), r == null ? void 0 : r();
      }
    }, n, {
      children: t.current.getLocaleText("toolbarExportCSV")
    }));
  }
  function mP(e) {
    const t = Fe(), { hideMenu: r, options: o } = e, n = fe(e, fP);
    return f.jsx(jt, C({
      onClick: () => {
        t.current.exportDataAsPrint(o), r == null ? void 0 : r();
      }
    }, n, {
      children: t.current.getLocaleText("toolbarExportPrint")
    }));
  }
  ze(function(t, r) {
    const o = t, { csvOptions: n = {}, printOptions: l = {}, excelOptions: s } = o, i = fe(o, gP), u = Fe().current.unstable_applyPipeProcessors("exportMenu", [], {
      excelOptions: s,
      csvOptions: n,
      printOptions: l
    }).sort((c, p) => c.componentName > p.componentName ? 1 : -1);
    return u.length === 0 ? null : f.jsx(dP, C({}, i, {
      ref: r,
      children: u.map((c, p) => d.cloneElement(c.component, {
        key: p
      }))
    }));
  });
  const bP = [
    "quickFilterParser",
    "quickFilterFormatter",
    "debounceMs",
    "className"
  ], CP = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "toolbarQuickFilter"
      ]
    }, Ae, t);
  }, yP = se(ir, {
    name: "MuiDataGrid",
    slot: "ToolbarQuickFilter",
    overridesResolver: (e, t) => t.toolbarQuickFilter
  })(({ theme: e }) => ({
    width: "auto",
    paddingBottom: e.spacing(0.5),
    "& input": {
      marginLeft: e.spacing(0.5)
    },
    "& .MuiInput-underline:before": {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    },
    '& input[type="search"]::-webkit-search-decoration,\n  & input[type="search"]::-webkit-search-cancel-button,\n  & input[type="search"]::-webkit-search-results-button,\n  & input[type="search"]::-webkit-search-results-decoration': {
      display: "none"
    }
  })), wP = (e) => e.split(" ").filter((t) => t !== ""), xP = (e) => e.join(" ");
  function vP(e) {
    var _a2, _b2;
    const t = Fe(), r = ae(), o = CP(r), n = X(t, Zu), { quickFilterParser: l = wP, quickFilterFormatter: s = xP, debounceMs: i = r.filterDebounceMs, className: a } = e, u = fe(e, bP), [c, p] = d.useState(() => s(n ?? [])), g = d.useRef(n);
    d.useEffect(() => {
      Tr(g.current, n) || (g.current = n, p((v) => Tr(l(v), n) ? v : s(n ?? [])));
    }, [
      n,
      s,
      l
    ]);
    const b = d.useCallback((v) => {
      const w = l(v);
      g.current = w, t.current.setQuickFilterValues(w);
    }, [
      t,
      l
    ]), h = d.useMemo(() => Ip(b, i), [
      b,
      i
    ]);
    d.useEffect(() => h.clear, [
      h
    ]);
    const m = d.useCallback((v) => {
      const w = v.target.value;
      p(w), h(w);
    }, [
      h
    ]), x = d.useCallback(() => {
      p(""), b("");
    }, [
      b
    ]);
    return f.jsx(yP, C({
      as: r.slots.baseTextField,
      ownerState: r,
      variant: "standard",
      value: c,
      onChange: m,
      className: ue(o.root, a),
      placeholder: t.current.getLocaleText("toolbarQuickFilterPlaceholder"),
      "aria-label": t.current.getLocaleText("toolbarQuickFilterLabel"),
      type: "search"
    }, u, {
      InputProps: C({
        startAdornment: f.jsx(r.slots.quickFilterIcon, {
          fontSize: "small"
        }),
        endAdornment: f.jsx(r.slots.baseIconButton, C({
          "aria-label": t.current.getLocaleText("toolbarQuickFilterDeleteIconLabel"),
          size: "small",
          sx: [
            c ? {
              visibility: "visible"
            } : {
              visibility: "hidden"
            }
          ],
          onClick: x
        }, (_a2 = r.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: f.jsx(r.slots.quickFilterClearIcon, {
            fontSize: "small"
          })
        }))
      }, u.InputProps)
    }, (_b2 = r.slotProps) == null ? void 0 : _b2.baseTextField));
  }
  const SP = [
    "className",
    "selectedRowCount"
  ], PP = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "selectedRowCount"
      ]
    }, Ae, t);
  }, IP = ot("div", {
    name: "MuiDataGrid",
    slot: "SelectedRowCount",
    overridesResolver: (e, t) => t.selectedRowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2),
    visibility: "hidden",
    width: 0,
    height: 0,
    [e.breakpoints.up("sm")]: {
      visibility: "visible",
      width: "auto",
      height: "auto"
    }
  })), MP = ze(function(t, r) {
    const { className: o, selectedRowCount: n } = t, l = fe(t, SP), s = Fe(), i = ae(), a = PP(i), u = s.current.getLocaleText("footerRowSelected")(n);
    return f.jsx(IP, C({
      className: ue(a.root, o),
      ownerState: i
    }, l, {
      ref: r,
      children: u
    }));
  }), OP = ze(function(t, r) {
    var _a2, _b2;
    const o = Fe(), n = ae(), l = X(o, GC), s = X(o, qy), i = X(o, Fi), a = !n.hideFooterSelectedRowCount && s > 0 ? f.jsx(MP, {
      selectedRowCount: s
    }) : f.jsx("div", {}), u = !n.hideFooterRowCount && !n.pagination ? f.jsx(n.slots.footerRowCount, C({}, (_a2 = n.slotProps) == null ? void 0 : _a2.footerRowCount, {
      rowCount: l,
      visibleRowCount: i
    })) : null, c = n.pagination && !n.hideFooterPagination && n.slots.pagination && f.jsx(n.slots.pagination, C({}, (_b2 = n.slotProps) == null ? void 0 : _b2.pagination));
    return f.jsxs(Xv, C({}, t, {
      ref: r,
      children: [
        a,
        u,
        c
      ]
    }));
  }), Mn = (e, t, r, o, n, l) => {
    let s;
    switch (e) {
      case Te.LEFT:
        s = o[r];
        break;
      case Te.RIGHT:
        s = n - o[r] - t + l;
        break;
      default:
        s = void 0;
        break;
    }
    return s;
  }, Nl = (e, t, r, o, n) => {
    const l = t === r - 1;
    return e === Te.LEFT && l ? true : o ? e === Te.LEFT ? true : e === Te.RIGHT ? !l : !l || n : false;
  }, _l = (e, t) => e === Te.RIGHT && t === 0, Cn = {
    root: O.scrollbarFiller,
    header: O["scrollbarFiller--header"],
    borderTop: O["scrollbarFiller--borderTop"],
    borderBottom: O["scrollbarFiller--borderBottom"],
    pinnedRight: O["scrollbarFiller--pinnedRight"]
  };
  function Ni({ header: e, borderTop: t = true, borderBottom: r, pinnedRight: o }) {
    return f.jsx("div", {
      role: "presentation",
      className: ue(Cn.root, e && Cn.header, t && Cn.borderTop, r && Cn.borderBottom, o && Cn.pinnedRight)
    });
  }
  const FP = ot("div", {
    name: "MuiDataGrid",
    slot: "SkeletonLoadingOverlay",
    overridesResolver: (e, t) => t.skeletonLoadingOverlay
  })({
    minWidth: "100%",
    width: "max-content",
    height: "100%",
    overflow: "clip"
  }), kP = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "skeletonLoadingOverlay"
      ]
    }, Ae, t);
  }, vc = (e) => parseInt(e.getAttribute("data-colindex"), 10), EP = ze(function(t, r) {
    const o = ae(), { slots: n } = o, l = Xt(), s = kP({
      classes: o.classes
    }), i = d.useRef(null), a = Yt(i, r), u = Fe(), c = X(u, It), p = (c == null ? void 0 : c.viewportInnerSize.height) ?? 0, g = Math.ceil(p / c.rowHeight), b = X(u, Ul), h = X(u, lo), m = d.useMemo(() => h.filter((I) => I <= b).length, [
      b,
      h
    ]), x = X(u, ft), v = d.useMemo(() => x.slice(0, m), [
      x,
      m
    ]), w = X(u, en), k = d.useCallback((I) => {
      if (w.left.findIndex((j) => j.field === I) !== -1) return Te.LEFT;
      if (w.right.findIndex((j) => j.field === I) !== -1) return Te.RIGHT;
    }, [
      w.left,
      w.right
    ]), L = d.useMemo(() => {
      const I = [];
      for (let j = 0; j < g; j += 1) {
        const D = [];
        for (let S = 0; S < v.length; S += 1) {
          const y = v[S], M = k(y.field), $ = M === Te.LEFT, E = M === Te.RIGHT, N = $d(M, l), T = N ? w[N].length : v.length - w.left.length - w.right.length, P = N ? w[N].findIndex((ce) => ce.field === y.field) : S - w.left.length, A = c.hasScrollY ? c.scrollbarSize : 0, R = rs({}, l, M, Mn(M, y.computedWidth, S, h, c.columnsTotalWidth, A)), z = c.columnsTotalWidth < c.viewportOuterSize.width, _ = Nl(M, P, T, o.showCellVerticalBorder, z), H = _l(M, P), G = S === v.length - 1, U = E && P === 0, B = U && z, q = G && !U && z, W = c.viewportOuterSize.width - c.columnsTotalWidth, te = Math.max(0, W), Z = f.jsx(n.skeletonCell, {
            width: te,
            empty: true
          }, `skeleton-filler-column-${j}`), re = G && A !== 0;
          B && D.push(Z), D.push(f.jsx(n.skeletonCell, {
            field: y.field,
            type: y.type,
            align: y.align,
            width: "var(--width)",
            height: c.rowHeight,
            "data-colindex": S,
            className: ue($ && O["cell--pinnedLeft"], E && O["cell--pinnedRight"], _ && O["cell--withRightBorder"], H && O["cell--withLeftBorder"]),
            style: C({
              "--width": `${y.computedWidth}px`
            }, R)
          }, `skeleton-column-${j}-${y.field}`)), q && D.push(Z), re && D.push(f.jsx(Ni, {
            pinnedRight: w.right.length > 0
          }, `skeleton-scrollbar-filler-${j}`));
        }
        I.push(f.jsx("div", {
          className: ue(O.row, O.rowSkeleton, j === 0 && O["row--firstVisible"]),
          children: D
        }, `skeleton-row-${j}`));
      }
      return I;
    }, [
      n,
      v,
      w,
      g,
      o.showCellVerticalBorder,
      c,
      h,
      k,
      l
    ]);
    return le(u, "columnResize", (I) => {
      var _a2, _b2, _c2, _d2, _e;
      const { colDef: j, width: D } = I, S = (_a2 = i.current) == null ? void 0 : _a2.querySelectorAll(`[data-field="${qr(j.field)}"]`);
      if (!S) throw new Error("MUI X: Expected skeleton cells to be defined with `data-field` attribute.");
      const y = v.findIndex((P) => P.field === j.field), M = k(j.field), $ = M === Te.LEFT, E = M === Te.RIGHT, N = getComputedStyle(S[0]).getPropertyValue("--width"), T = parseInt(N, 10) - D;
      S && S.forEach((P) => {
        P.style.setProperty("--width", `${D}px`);
      }), $ && ((_c2 = (_b2 = i.current) == null ? void 0 : _b2.querySelectorAll(`.${O["cell--pinnedLeft"]}`)) == null ? void 0 : _c2.forEach((A) => {
        vc(A) > y && (A.style.left = `${parseInt(getComputedStyle(A).left, 10) - T}px`);
      })), E && ((_e = (_d2 = i.current) == null ? void 0 : _d2.querySelectorAll(`.${O["cell--pinnedRight"]}`)) == null ? void 0 : _e.forEach((A) => {
        vc(A) < y && (A.style.right = `${parseInt(getComputedStyle(A).right, 10) + T}px`);
      }));
    }), f.jsx(FP, C({
      className: s.root
    }, t, {
      ref: a,
      children: L
    }));
  }), TP = [
    "variant",
    "noRowsVariant",
    "style"
  ], AP = {
    "circular-progress": {
      component: Mp,
      style: {}
    },
    "linear-progress": {
      component: zh,
      style: {
        display: "block"
      }
    },
    skeleton: {
      component: EP,
      style: {
        display: "block"
      }
    }
  }, DP = ze(function(t, r) {
    const { variant: o = "circular-progress", noRowsVariant: n = "circular-progress", style: l } = t, s = fe(t, TP), i = Fe(), a = X(i, Un), u = AP[a === 0 ? n : o];
    return f.jsx(Hi, C({
      style: C({}, u.style, l)
    }, s, {
      ref: r,
      children: f.jsx(u.component, {})
    }));
  }), $P = ze(function(t, r) {
    const n = Fe().current.getLocaleText("noRowsLabel");
    return f.jsx(Hi, C({}, t, {
      ref: r,
      children: n
    }));
  }), LP = se(Rm)(({ theme: e }) => ({
    maxHeight: "calc(100% + 1px)",
    flexGrow: 1,
    [`& .${uo.selectLabel}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    [`& .${uo.input}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "inline-flex"
      }
    }
  })), RP = (e, t) => ({ from: r, to: o, count: n, page: l }) => e({
    from: r,
    to: o,
    count: n,
    page: l,
    estimated: t
  }), jP = ({ from: e, to: t, count: r, estimated: o }) => o ? `${e}\u2013${t} of ${r !== -1 ? r : `more than ${o > t ? o : t}`}` : `${e}\u2013${t} of ${r !== -1 ? r : `more than ${t}`}`, Wd = ze(function(t, r) {
    const o = Fe(), n = ae(), l = X(o, Rt), s = X(o, $o), i = X(o, dd), { paginationMode: a, loading: u, estimatedRowCount: c } = n, p = d.useMemo(() => s === -1 && a === "server" && u ? {
      backIconButtonProps: {
        disabled: true
      },
      nextIconButtonProps: {
        disabled: true
      }
    } : {}, [
      u,
      a,
      s
    ]), g = d.useMemo(() => Math.max(0, i - 1), [
      i
    ]), b = d.useMemo(() => s === -1 || l.page <= g ? l.page : g, [
      g,
      l.page,
      s
    ]), h = d.useCallback((L) => {
      const F = Number(L.target.value);
      o.current.setPageSize(F);
    }, [
      o
    ]), m = d.useCallback((L, F) => {
      o.current.setPage(F);
    }, [
      o
    ]), v = ((L) => {
      for (let F = 0; F < n.pageSizeOptions.length; F += 1) {
        const I = n.pageSizeOptions[F];
        if (typeof I == "number") {
          if (I === L) return true;
        } else if (I.value === L) return true;
      }
      return false;
    })(l.pageSize) ? n.pageSizeOptions : [], w = o.current.getLocaleText("MuiTablePagination"), k = RP(w.labelDisplayedRows || jP, c);
    return f.jsx(LP, C({
      component: "div",
      count: s,
      page: b,
      rowsPerPageOptions: v,
      rowsPerPage: l.pageSize,
      onPageChange: m,
      onRowsPerPageChange: h
    }, p, w, {
      labelDisplayedRows: k
    }, t, {
      ref: r
    }));
  }), HP = [
    "className",
    "rowCount",
    "visibleRowCount"
  ], zP = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "rowCount"
      ]
    }, Ae, t);
  }, NP = ot("div", {
    name: "MuiDataGrid",
    slot: "RowCount",
    overridesResolver: (e, t) => t.rowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2)
  })), _P = ze(function(t, r) {
    const { className: o, rowCount: n, visibleRowCount: l } = t, s = fe(t, HP), i = Fe(), a = ae(), u = zP(a);
    if (n === 0) return null;
    const c = l < n ? i.current.getLocaleText("footerTotalVisibleRows")(l, n) : n.toLocaleString();
    return f.jsxs(NP, C({
      className: ue(u.root, o),
      ownerState: a
    }, s, {
      ref: r,
      children: [
        i.current.getLocaleText("footerTotalRows"),
        " ",
        c
      ]
    }));
  });
  function GP(e) {
    for (const t in e) return false;
    return true;
  }
  function VP(e, t) {
    return ge(t, Ae, e);
  }
  const BP = [
    "selected",
    "rowId",
    "row",
    "index",
    "style",
    "rowHeight",
    "className",
    "visibleColumns",
    "pinnedColumns",
    "offsetLeft",
    "columnsTotalWidth",
    "firstColumnIndex",
    "lastColumnIndex",
    "focusedColumnIndex",
    "isFirstVisible",
    "isLastVisible",
    "isNotVisible",
    "showBottomBorder",
    "scrollbarWidth",
    "gridHasFiller",
    "onClick",
    "onDoubleClick",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseOut",
    "onMouseOver"
  ], WP = Wn(Pt, (e, t) => t ? !!GP(e) : false), UP = ze(function(t, r) {
    var _a2;
    const { selected: o, rowId: n, row: l, index: s, style: i, rowHeight: a, className: u, visibleColumns: c, pinnedColumns: p, offsetLeft: g, columnsTotalWidth: b, firstColumnIndex: h, lastColumnIndex: m, focusedColumnIndex: x, isFirstVisible: v, isLastVisible: w, isNotVisible: k, showBottomBorder: L, scrollbarWidth: F, gridHasFiller: I, onClick: j, onDoubleClick: D, onMouseEnter: S, onMouseLeave: y, onMouseOut: M, onMouseOver: $ } = t, E = fe(t, BP), N = yr(), T = Ri(), P = d.useRef(null), A = ae(), R = $i(N), z = X(N, vr), _ = X(N, Co), H = X(N, lo), G = A.rowReordering, U = Dn(N, WP, G), B = Yt(P, r), q = N.current.getRowNode(n), W = Dn(N, Ad, {
      rowId: n,
      editMode: A.editMode
    }), te = A.editMode === $r.Row, Z = x !== void 0, re = Z && x >= p.left.length && x < h, ce = Z && x < c.length - p.right.length && x >= m, Ce = VP(A.classes, {
      root: [
        "row",
        o && "selected",
        te && "row--editable",
        W && "row--editing",
        v && "row--firstVisible",
        w && "row--lastVisible",
        L && "row--borderBottom",
        a === "auto" && "row--dynamicHeight"
      ]
    }), Y = T.hooks.useGridRowAriaAttributes();
    d.useLayoutEffect(() => {
      if (R.range) {
        const me = N.current.getRowIndexRelativeToVisibleRows(n);
        me !== void 0 && N.current.unstable_setLastMeasuredRowIndex(me);
      }
      if (P.current && a === "auto") return N.current.observeRowHeight(P.current, n);
    }, [
      N,
      R.range,
      a,
      n
    ]);
    const ne = d.useCallback((me, ve) => (pe) => {
      Jn(pe) || N.current.getRow(n) && (N.current.publishEvent(me, N.current.getRowParams(n), pe), ve && ve(pe));
    }, [
      N,
      n
    ]), he = d.useCallback((me) => {
      var _a3, _b2;
      const pe = (_a3 = Hl(me.target, O.cell)) == null ? void 0 : _a3.getAttribute("data-field");
      pe && (pe === on.field || pe === Yl || pe === "__reorder__" || N.current.getCellMode(n, pe) === tt.Edit || ((_b2 = N.current.getColumn(pe)) == null ? void 0 : _b2.type) === ql) || ne("rowClick", j)(me);
    }, [
      N,
      j,
      ne,
      n
    ]), { slots: J, slotProps: Ie, disableColumnReorder: ee } = A, Se = X(N, () => C({}, N.current.getRowHeightEntry(n)), yi), xe = d.useMemo(() => {
      if (k) return {
        opacity: 0,
        width: 0,
        height: 0
      };
      const me = C({}, i, {
        maxHeight: a === "auto" ? "none" : a,
        minHeight: a,
        "--height": typeof a == "number" ? `${a}px` : a
      });
      if (Se.spacingTop) {
        const ve = A.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
        me[ve] = Se.spacingTop;
      }
      if (Se.spacingBottom) {
        const ve = A.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom";
        let pe = me[ve];
        typeof pe != "number" && (pe = parseInt(pe || "0", 10)), pe += Se.spacingBottom, me[ve] = pe;
      }
      return me;
    }, [
      k,
      a,
      i,
      Se,
      A.rowSpacingType
    ]), ke = N.current.unstable_applyPipeProcessors("rowClassName", [], n), Ve = Y(q, s);
    if (typeof A.getRowClassName == "function") {
      const me = s - (((_a2 = R.range) == null ? void 0 : _a2.firstRowIndex) || 0), ve = C({}, N.current.getRowParams(n), {
        isFirstVisible: me === 0,
        isLastVisible: me === R.rows.length - 1,
        indexRelativeToCurrentPage: me
      });
      ke.push(A.getRowClassName(ve));
    }
    const qe = (me, ve, pe, be, je = Te.NONE) => {
      const $e = N.current.unstable_getCellColSpanInfo(n, pe);
      if ($e == null ? void 0 : $e.spannedByColSpan) return null;
      const ct = ($e == null ? void 0 : $e.cellProps.width) ?? me.computedWidth, Ot = ($e == null ? void 0 : $e.cellProps.colSpan) ?? 1, yt = Mn(je, me.computedWidth, pe, H, b, F);
      if (q.type === "skeletonRow") return f.jsx(J.skeletonCell, {
        type: me.type,
        width: ct,
        height: a,
        field: me.field,
        align: me.align
      }, me.field);
      const Rr = me.field === "__reorder__", Gt = !(ee || me.disableReorder), jr = U && !z.length && _ <= 1, At = !(Gt || Rr && jr), Qt = je === Te.VIRTUAL, Ht = _l(je, ve), Vt = Nl(je, ve, be, A.showCellVerticalBorder, I);
      return f.jsx(J.cell, C({
        column: me,
        width: ct,
        rowId: n,
        align: me.align || "left",
        colIndex: pe,
        colSpan: Ot,
        disableDragEvents: At,
        isNotVisible: Qt,
        pinnedOffset: yt,
        pinnedPosition: je,
        showLeftBorder: Ht,
        showRightBorder: Vt,
        row: l,
        rowNode: q
      }, Ie == null ? void 0 : Ie.cell), me.field);
    }, Ne = p.left.map((me, ve) => qe(me, ve, ve, p.left.length, Te.LEFT)), Le = p.right.map((me, ve) => {
      const pe = c.length - p.right.length + ve;
      return qe(me, ve, pe, p.right.length, Te.RIGHT);
    }), Re = c.length - p.left.length - p.right.length, Ke = [];
    re && Ke.push(qe(c[x], x - p.left.length, x, Re, Te.VIRTUAL));
    for (let me = h; me < m; me += 1) {
      const ve = c[me], pe = me - p.left.length;
      ve && Ke.push(qe(ve, pe, me, Re));
    }
    ce && Ke.push(qe(c[x], x - p.left.length, x, Re, Te.VIRTUAL));
    const _e = l ? {
      onClick: he,
      onDoubleClick: ne("rowDoubleClick", D),
      onMouseEnter: ne("rowMouseEnter", S),
      onMouseLeave: ne("rowMouseLeave", y),
      onMouseOut: ne("rowMouseOut", M),
      onMouseOver: ne("rowMouseOver", $)
    } : null;
    return f.jsxs("div", C({
      "data-id": n,
      "data-rowindex": s,
      role: "row",
      className: ue(...ke, Ce.root, u),
      style: xe
    }, Ve, _e, E, {
      ref: B,
      children: [
        Ne,
        f.jsx("div", {
          role: "presentation",
          className: O.cellOffsetLeft,
          style: {
            width: g
          }
        }),
        Ke,
        f.jsx("div", {
          role: "presentation",
          className: ue(O.cell, O.cellEmpty)
        }),
        Le,
        F !== 0 && f.jsx(Ni, {
          pinnedRight: p.right.length > 0,
          borderTop: !v
        })
      ]
    }));
  }), qP = Wr(UP), KP = () => {
    const e = yr(), t = ae(), r = X(e, ft), o = X(e, Oi), n = X(e, Qn), l = X(e, Eu);
    return {
      role: "grid",
      "aria-colcount": r.length,
      "aria-rowcount": n + 1 + l + o,
      "aria-multiselectable": ki(t)
    };
  }, YP = () => {
    const e = yr(), t = X(e, to), r = X(e, Qn);
    return d.useCallback((o, n) => {
      const l = {}, s = n + r + 2;
      return l["aria-rowindex"] = s, e.current.isRowSelectable(o.id) && (l["aria-selected"] = t[o.id] !== void 0), l;
    }, [
      e,
      t,
      r
    ]);
  };
  function XP({ privateApiRef: e, configuration: t, props: r, children: o }) {
    const n = d.useRef(e.current.getPublicApi());
    return f.jsx(Ed.Provider, {
      value: t,
      children: f.jsx(hu.Provider, {
        value: r,
        children: f.jsx(Pd.Provider, {
          value: e,
          children: f.jsx(gu.Provider, {
            value: n,
            children: o
          })
        })
      })
    });
  }
  const QP = (e) => {
    const t = d.useRef(null), r = d.useRef(null), o = d.useRef(null), n = d.useRef(null), l = d.useRef(null), s = d.useRef(null);
    e.current.register("public", {
      rootElementRef: t
    }), e.current.register("private", {
      mainElementRef: r,
      virtualScrollerRef: o,
      virtualScrollbarVerticalRef: n,
      virtualScrollbarHorizontalRef: l,
      columnHeadersContainerRef: s
    });
  }, ZP = (e) => {
    const t = Xt();
    e.current.state.isRtl === void 0 && (e.current.state.isRtl = t);
    const r = d.useRef(true);
    d.useEffect(() => {
      r.current ? r.current = false : e.current.setState((o) => C({}, o, {
        isRtl: t
      }));
    }, [
      e,
      t
    ]);
  }, JP = ty() && window.localStorage.getItem("DEBUG") != null, xn = () => {
  }, eI = {
    debug: xn,
    info: xn,
    warn: xn,
    error: xn
  }, Sc = [
    "debug",
    "info",
    "warn",
    "error"
  ];
  function Pc(e, t, r = console) {
    const o = Sc.indexOf(t);
    if (o === -1) throw new Error(`MUI X: Log level ${t} not recognized.`);
    return Sc.reduce((l, s, i) => (i >= o ? l[s] = (...a) => {
      const [u, ...c] = a;
      r[s](`MUI X: ${e} - ${u}`, ...c);
    } : l[s] = xn, l), {});
  }
  const tI = (e, t) => {
    const r = d.useCallback((o) => JP ? Pc(o, "debug", t.logger) : t.logLevel ? Pc(o, t.logLevel.toString(), t.logger) : eI, [
      t.logLevel,
      t.logger
    ]);
    Oe(e, {
      getLogger: r
    }, "private");
  };
  class rI {
    constructor() {
      this.maxListeners = 20, this.warnOnce = false, this.events = {};
    }
    on(t, r, o = {}) {
      let n = this.events[t];
      n || (n = {
        highPriority: /* @__PURE__ */ new Map(),
        regular: /* @__PURE__ */ new Map()
      }, this.events[t] = n), o.isFirst ? n.highPriority.set(r, true) : n.regular.set(r, true);
    }
    removeListener(t, r) {
      this.events[t] && (this.events[t].regular.delete(r), this.events[t].highPriority.delete(r));
    }
    removeAllListeners() {
      this.events = {};
    }
    emit(t, ...r) {
      const o = this.events[t];
      if (!o) return;
      const n = Array.from(o.highPriority.keys()), l = Array.from(o.regular.keys());
      for (let s = n.length - 1; s >= 0; s -= 1) {
        const i = n[s];
        o.highPriority.has(i) && i.apply(this, r);
      }
      for (let s = 0; s < l.length; s += 1) {
        const i = l[s];
        o.regular.has(i) && i.apply(this, r);
      }
    }
    once(t, r) {
      const o = this;
      this.on(t, function n(...l) {
        o.removeListener(t, n), r.apply(o, l);
      });
    }
  }
  class _i {
    static create(t) {
      return new _i(t);
    }
    constructor(t) {
      this.value = void 0, this.listeners = void 0, this.subscribe = (r) => (this.listeners.add(r), () => {
        this.listeners.delete(r);
      }), this.getSnapshot = () => this.value, this.update = (r) => {
        this.value = r, this.listeners.forEach((o) => o(r));
      }, this.value = t, this.listeners = /* @__PURE__ */ new Set();
    }
  }
  const Ud = /* @__PURE__ */ Symbol("mui.api_private"), oI = (e) => e.isPropagationStopped !== void 0;
  let Ic = 0;
  function nI(e) {
    var _a2;
    const t = (_a2 = e.current) == null ? void 0 : _a2[Ud];
    if (t) return t;
    const r = {}, o = {
      state: r,
      store: _i.create(r),
      instanceId: {
        id: Ic
      }
    };
    return Ic += 1, o.getPublicApi = () => e.current, o.register = (n, l) => {
      Object.keys(l).forEach((s) => {
        const i = l[s], a = o[s];
        if ((a == null ? void 0 : a.spying) === true ? a.target = i : o[s] = i, n === "public") {
          const u = e.current, c = u[s];
          (c == null ? void 0 : c.spying) === true ? c.target = i : u[s] = i;
        }
      });
    }, o.register("private", {
      caches: {},
      eventManager: new rI()
    }), o;
  }
  function lI(e) {
    return {
      get state() {
        return e.current.state;
      },
      get store() {
        return e.current.store;
      },
      get instanceId() {
        return e.current.instanceId;
      },
      [Ud]: e.current
    };
  }
  function sI(e, t) {
    var _a2;
    const r = d.useRef(null), o = d.useRef(null);
    o.current || (o.current = nI(r)), r.current || (r.current = lI(o));
    const n = d.useCallback((...s) => {
      const [i, a, u = {}] = s;
      if (u.defaultMuiPrevented = false, oI(u) && u.isPropagationStopped()) return;
      const c = t.signature === gr.DataGridPro || t.signature === gr.DataGridPremium ? {
        api: o.current.getPublicApi()
      } : {};
      o.current.eventManager.emit(i, a, u, c);
    }, [
      o,
      t.signature
    ]), l = d.useCallback((s, i, a) => {
      o.current.eventManager.on(s, i, a);
      const u = o.current;
      return () => {
        u.eventManager.removeListener(s, i);
      };
    }, [
      o
    ]);
    return Oe(o, {
      subscribeEvent: l,
      publishEvent: n
    }, "public"), e && !((_a2 = e.current) == null ? void 0 : _a2.state) && (e.current = r.current), d.useImperativeHandle(e, () => r.current, [
      r
    ]), d.useEffect(() => {
      const s = o.current;
      return () => {
        s.publishEvent("unmount");
      };
    }, [
      o
    ]), o;
  }
  const iI = (e, t) => {
    const r = d.useCallback((o) => {
      if (t.localeText[o] == null) throw new Error(`Missing translation for key ${o}.`);
      return t.localeText[o];
    }, [
      t.localeText
    ]);
    e.current.register("public", {
      getLocaleText: r
    });
  };
  function jn(e) {
    "@babel/helpers - typeof";
    return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, jn(e);
  }
  function aI(e, t) {
    if (jn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var o = r.call(e, t);
      if (jn(o) != "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function Hn(e) {
    var t = aI(e, "string");
    return jn(t) == "symbol" ? t : t + "";
  }
  const cI = (e) => {
    const t = d.useRef({}), r = d.useRef(false), o = d.useCallback((c) => {
      r.current || !c || (r.current = true, Object.values(c.appliers).forEach((p) => {
        p();
      }), r.current = false);
    }, []), n = d.useCallback((c, p, g) => {
      t.current[c] || (t.current[c] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      });
      const b = t.current[c];
      return b.processors.get(p) !== g && (b.processors.set(p, g), b.processorsAsArray = Array.from(t.current[c].processors.values()).filter((m) => m !== null), o(b)), () => {
        t.current[c].processors.set(p, null), t.current[c].processorsAsArray = Array.from(t.current[c].processors.values()).filter((m) => m !== null);
      };
    }, [
      o
    ]), l = d.useCallback((c, p, g) => (t.current[c] || (t.current[c] = {
      processors: /* @__PURE__ */ new Map(),
      processorsAsArray: [],
      appliers: {}
    }), t.current[c].appliers[p] = g, () => {
      const b = t.current[c].appliers, h = fe(b, [
        p
      ].map(Hn));
      t.current[c].appliers = h;
    }), []), s = d.useCallback((c) => {
      o(t.current[c]);
    }, [
      o
    ]), i = d.useCallback((...c) => {
      const [p, g, b] = c;
      if (!t.current[p]) return g;
      const h = t.current[p].processorsAsArray;
      let m = g;
      for (let x = 0; x < h.length; x += 1) m = h[x](m, b);
      return m;
    }, []), a = {
      registerPipeProcessor: n,
      registerPipeApplier: l,
      requestPipeProcessorsApplication: s
    }, u = {
      unstable_applyPipeProcessors: i
    };
    Oe(e, a, "private"), Oe(e, u, "public");
  }, at = (e, t, r, o = true) => {
    const n = d.useRef(null), l = d.useRef(`mui-${Math.round(Math.random() * 1e9)}`), s = d.useCallback(() => {
      n.current = e.current.registerPipeProcessor(t, l.current, r);
    }, [
      e,
      r,
      t
    ]);
    qn(() => {
      o && s();
    });
    const i = d.useRef(true);
    d.useEffect(() => (i.current ? i.current = false : o && s(), () => {
      n.current && (n.current(), n.current = null);
    }), [
      s,
      o
    ]);
  }, Gi = (e, t, r) => {
    const o = d.useRef(null), n = d.useRef(`mui-${Math.round(Math.random() * 1e9)}`), l = d.useCallback(() => {
      o.current = e.current.registerPipeApplier(t, n.current, r);
    }, [
      e,
      r,
      t
    ]);
    qn(() => {
      l();
    });
    const s = d.useRef(true);
    d.useEffect(() => (s.current ? s.current = false : l(), () => {
      o.current && (o.current(), o.current = null);
    }), [
      l
    ]);
  }, Gl = (e, t, r, o) => {
    const n = d.useCallback(() => {
      e.current.registerStrategyProcessor(t, r, o);
    }, [
      e,
      o,
      r,
      t
    ]);
    qn(() => {
      n();
    });
    const l = d.useRef(true);
    d.useEffect(() => {
      l.current ? l.current = false : n();
    }, [
      n
    ]);
  }, mo = "none", Mc = {
    rowTreeCreation: "rowTree",
    filtering: "rowTree",
    sorting: "rowTree",
    visibleRowsLookupCreation: "rowTree"
  }, uI = (e) => {
    const t = d.useRef(/* @__PURE__ */ new Map()), r = d.useRef({}), o = d.useCallback((a, u, c) => {
      const p = () => {
        const h = r.current[u], m = fe(h, [
          a
        ].map(Hn));
        r.current[u] = m;
      };
      r.current[u] || (r.current[u] = {});
      const g = r.current[u], b = g[a];
      return g[a] = c, !b || b === c || a === e.current.getActiveStrategy(Mc[u]) && e.current.publishEvent("activeStrategyProcessorChange", u), p;
    }, [
      e
    ]), n = d.useCallback((a, u) => {
      const c = e.current.getActiveStrategy(Mc[a]);
      if (c == null) throw new Error("Can't apply a strategy processor before defining an active strategy");
      const p = r.current[a];
      if (!p || !p[c]) throw new Error(`No processor found for processor "${a}" on strategy "${c}"`);
      const g = p[c];
      return g(u);
    }, [
      e
    ]), l = d.useCallback((a) => {
      var _a2;
      return ((_a2 = Array.from(t.current.entries()).find(([, p]) => p.group !== a ? false : p.isAvailable())) == null ? void 0 : _a2[0]) ?? mo;
    }, []), s = d.useCallback((a, u, c) => {
      t.current.set(u, {
        group: a,
        isAvailable: c
      }), e.current.publishEvent("strategyAvailabilityChange");
    }, [
      e
    ]);
    Oe(e, {
      registerStrategyProcessor: o,
      applyStrategyProcessor: n,
      getActiveStrategy: l,
      setStrategyAvailability: s
    }, "private");
  }, dI = (e) => {
    const t = d.useRef({}), r = d.useCallback((a) => {
      t.current[a.stateId] = a;
    }, []), o = d.useCallback((a, u) => {
      let c;
      if (ey(a) ? c = a(e.current.state) : c = a, e.current.state === c) return false;
      let p = false;
      const g = [];
      if (Object.keys(t.current).forEach((b) => {
        const h = t.current[b], m = h.stateSelector(e.current.state, e.current.instanceId), x = h.stateSelector(c, e.current.instanceId);
        x !== m && (g.push({
          stateId: h.stateId,
          hasPropChanged: x !== h.propModel
        }), h.propModel !== void 0 && x !== h.propModel && (p = true));
      }), g.length > 1) throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${g[0].stateId}, therefore, you're not allowed to update ${g.map((b) => b.stateId).join(", ")} in the same transaction.`);
      if (p || (e.current.state = c, e.current.publishEvent("stateChange", c), e.current.store.update(c)), g.length === 1) {
        const { stateId: b, hasPropChanged: h } = g[0], m = t.current[b], x = m.stateSelector(c, e.current.instanceId);
        m.propOnChange && h && m.propOnChange(x, {
          reason: u,
          api: e.current
        }), p || e.current.publishEvent(m.changeEvent, x, {
          reason: u
        });
      }
      return !p;
    }, [
      e
    ]), n = d.useCallback((a, u, c) => e.current.setState((p) => C({}, p, {
      [a]: u(p[a])
    }), c), [
      e
    ]), l = d.useCallback(() => {
    }, []), s = {
      setState: o,
      forceUpdate: l
    }, i = {
      updateControlState: n,
      registerControlState: r
    };
    Oe(e, s, "public"), Oe(e, i, "private");
  }, pI = (e, t) => C({}, e, {
    props: {
      getRowId: t.getRowId
    }
  }), fI = (e, t) => {
    d.useEffect(() => {
      e.current.setState((r) => C({}, r, {
        props: {
          getRowId: t.getRowId
        }
      }));
    }, [
      e,
      t.getRowId
    ]);
  }, gI = (e, t) => {
    const r = sI(e, t);
    return QP(r), fI(r, t), ZP(r), tI(r, t), dI(r), cI(r), uI(r), iI(r, t), r.current.register("private", {
      rootProps: t
    }), r;
  }, vt = (e, t, r) => {
    const o = d.useRef(false);
    o.current || (t.current.state = e(t.current.state, r, t), o.current = true);
  };
  function Qs(e, t) {
    if (e == null) return "";
    const r = typeof e == "string" ? e : `${e}`;
    if (t.shouldAppendQuotes || t.escapeFormulas) {
      const o = r.replace(/"/g, '""');
      return t.escapeFormulas && [
        "=",
        "+",
        "-",
        "@",
        "	",
        "\r"
      ].includes(o[0]) ? `"'${o}"` : [
        t.delimiter,
        `
`,
        "\r",
        '"'
      ].some((n) => r.includes(n)) ? `"${o}"` : o;
    }
    return r;
  }
  const qd = (e, t) => {
    var _a2, _b2;
    const { csvOptions: r, ignoreValueFormatter: o } = t;
    let n;
    if (o) {
      const l = e.colDef.type;
      l === "number" ? n = String(e.value) : l === "date" || l === "dateTime" ? n = (_a2 = e.value) == null ? void 0 : _a2.toISOString() : typeof ((_b2 = e.value) == null ? void 0 : _b2.toString) == "function" ? n = e.value.toString() : n = e.value;
    } else n = e.formattedValue;
    return Qs(n, r);
  };
  class Zs {
    constructor(t) {
      this.options = void 0, this.rowString = "", this.isEmpty = true, this.options = t;
    }
    addValue(t) {
      this.isEmpty || (this.rowString += this.options.csvOptions.delimiter), typeof this.options.sanitizeCellValue == "function" ? this.rowString += this.options.sanitizeCellValue(t, this.options.csvOptions) : this.rowString += t, this.isEmpty = false;
    }
    getRowString() {
      return this.rowString;
    }
  }
  const hI = ({ id: e, columns: t, getCellParams: r, csvOptions: o, ignoreValueFormatter: n }) => {
    const l = new Zs({
      csvOptions: o
    });
    return t.forEach((s) => {
      const i = r(e, s.field);
      l.addValue(qd(i, {
        ignoreValueFormatter: n,
        csvOptions: o
      }));
    }), l.getRowString();
  };
  function mI(e) {
    const { columns: t, rowIds: r, csvOptions: o, ignoreValueFormatter: n, apiRef: l } = e, s = r.reduce((p, g) => `${p}${hI({
      id: g,
      columns: t,
      getCellParams: l.current.getCellParams,
      ignoreValueFormatter: n,
      csvOptions: o
    })}\r
`, "").trim();
    if (!o.includeHeaders) return s;
    const i = t.filter((p) => p.field !== on.field), a = [];
    if (o.includeColumnGroupsHeaders) {
      const p = l.current.getAllGroupDetails();
      let g = 0;
      const b = i.reduce((h, m) => {
        const x = l.current.getColumnGroupPath(m.field);
        return h[m.field] = x, g = Math.max(g, x.length), h;
      }, {});
      for (let h = 0; h < g; h += 1) {
        const m = new Zs({
          csvOptions: o,
          sanitizeCellValue: Qs
        });
        a.push(m), i.forEach((x) => {
          const v = (b[x.field] || [])[h], w = p[v];
          m.addValue(w ? w.headerName || w.groupId : "");
        });
      }
    }
    const u = new Zs({
      csvOptions: o,
      sanitizeCellValue: Qs
    });
    return i.forEach((p) => {
      u.addValue(p.headerName || p.field);
    }), a.push(u), `${`${a.map((p) => p.getRowString()).join(`\r
`)}\r
`}${s}`.trim();
  }
  function Oc(e) {
    const t = document.createElement("span");
    t.style.whiteSpace = "pre", t.style.userSelect = "all", t.style.opacity = "0px", t.textContent = e, document.body.appendChild(t);
    const r = document.createRange();
    r.selectNode(t);
    const o = window.getSelection();
    o.removeAllRanges(), o.addRange(r);
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(t);
    }
  }
  function bI(e) {
    navigator.clipboard ? navigator.clipboard.writeText(e).catch(() => {
      Oc(e);
    }) : Oc(e);
  }
  function CI(e) {
    var _a2;
    return !!(((_a2 = window.getSelection()) == null ? void 0 : _a2.toString()) || e && (e.selectionEnd || 0) - (e.selectionStart || 0) > 0);
  }
  const yI = (e, t) => {
    const r = t.ignoreValueFormatterDuringExport, o = (typeof r == "object" ? r == null ? void 0 : r.clipboardExport : r) || false, n = t.clipboardCopyCellDelimiter, l = d.useCallback((s) => {
      if (!u0(s) || CI(s.target)) return;
      let i = "";
      if (e.current.getSelectedRows().size > 0) i = e.current.getDataAsCsv({
        includeHeaders: false,
        delimiter: n,
        shouldAppendQuotes: false,
        escapeFormulas: false
      });
      else {
        const u = Wt(e);
        if (u) {
          const c = e.current.getCellParams(u.id, u.field);
          i = qd(c, {
            csvOptions: {
              delimiter: n,
              shouldAppendQuotes: false,
              escapeFormulas: false
            },
            ignoreValueFormatter: o
          });
        }
      }
      i = e.current.unstable_applyPipeProcessors("clipboardCopy", i), i && (bI(i), e.current.publishEvent("clipboardCopy", i));
    }, [
      e,
      o,
      n
    ]);
    ld(e, () => e.current.rootElementRef.current, "keydown", l), rt(e, "clipboardCopy", t.onClipboardCopy);
  }, wI = (e) => C({}, e, {
    columnMenu: {
      open: false
    }
  }), xI = (e) => {
    const t = Mt(e, "useGridColumnMenu"), r = d.useCallback((s) => {
      const i = wl(e.current.state), a = {
        open: true,
        field: s
      };
      (a.open !== i.open || a.field !== i.field) && (e.current.setState((c) => c.columnMenu.open && c.columnMenu.field === s ? c : (t.debug("Opening Column Menu"), C({}, c, {
        columnMenu: {
          open: true,
          field: s
        }
      }))), e.current.hidePreferences());
    }, [
      e,
      t
    ]), o = d.useCallback(() => {
      const s = wl(e.current.state);
      if (s.field) {
        const u = Ur(e), c = dr(e), p = Vr(e);
        let g = s.field;
        if (u[g] || (g = p[0]), c[g] === false) {
          const b = p.filter((m) => m === g ? true : c[m] !== false), h = b.indexOf(g);
          g = b[h + 1] || b[h - 1];
        }
        e.current.setColumnHeaderFocus(g);
      }
      const i = {
        open: false,
        field: void 0
      };
      (i.open !== s.open || i.field !== s.field) && e.current.setState((u) => (t.debug("Hiding Column Menu"), C({}, u, {
        columnMenu: i
      })));
    }, [
      e,
      t
    ]), n = d.useCallback((s) => {
      t.debug("Toggle Column Menu");
      const i = wl(e.current.state);
      !i.open || i.field !== s ? r(s) : o();
    }, [
      e,
      t,
      r,
      o
    ]);
    Oe(e, {
      showColumnMenu: r,
      hideColumnMenu: o,
      toggleColumnMenu: n
    }, "public"), le(e, "columnResizeStart", o), le(e, "virtualScrollerWheel", e.current.hideColumnMenu), le(e, "virtualScrollerTouchMove", e.current.hideColumnMenu);
  }, vI = (e, t, r) => {
    var _a2, _b2, _c2;
    const o = Fo({
      apiRef: r,
      columnsToUpsert: t.columns,
      initialState: (_a2 = t.initialState) == null ? void 0 : _a2.columns,
      columnVisibilityModel: t.columnVisibilityModel ?? ((_c2 = (_b2 = t.initialState) == null ? void 0 : _b2.columns) == null ? void 0 : _c2.columnVisibilityModel) ?? {},
      keepOnlyColumnsToUpsert: true
    });
    return C({}, e, {
      columns: o,
      pinnedColumns: e.pinnedColumns ?? Dl
    });
  };
  function SI(e, t) {
    var _a2, _b2;
    const r = Mt(e, "useGridColumns"), o = d.useRef(t.columns);
    e.current.registerControlState({
      stateId: "visibleColumns",
      propModel: t.columnVisibilityModel,
      propOnChange: t.onColumnVisibilityModelChange,
      stateSelector: dr,
      changeEvent: "columnVisibilityModelChange"
    });
    const n = d.useCallback((y) => {
      r.debug("Updating columns state."), e.current.setState(Fc(y)), e.current.publishEvent("columnsChange", y.orderedFields);
    }, [
      r,
      e
    ]), l = d.useCallback((y) => Ur(e)[y], [
      e
    ]), s = d.useCallback(() => hr(e), [
      e
    ]), i = d.useCallback(() => ft(e), [
      e
    ]), a = d.useCallback((y, M = true) => (M ? ft(e) : hr(e)).findIndex((E) => E.field === y), [
      e
    ]), u = d.useCallback((y) => {
      const M = a(y);
      return lo(e)[M];
    }, [
      e,
      a
    ]), c = d.useCallback((y) => {
      var _a3, _b3;
      dr(e) !== y && (e.current.setState(($) => C({}, $, {
        columns: Fo({
          apiRef: e,
          columnsToUpsert: [],
          initialState: void 0,
          columnVisibilityModel: y,
          keepOnlyColumnsToUpsert: false
        })
      })), (_b3 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b3.call(_a3), e.current.forceUpdate());
    }, [
      e
    ]), p = d.useCallback((y) => {
      const M = Fo({
        apiRef: e,
        columnsToUpsert: y,
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      n(M);
    }, [
      e,
      n
    ]), g = d.useCallback((y, M) => {
      const $ = dr(e), E = $[y] ?? true;
      if (M !== E) {
        const N = C({}, $, {
          [y]: M
        });
        e.current.setColumnVisibilityModel(N);
      }
    }, [
      e
    ]), b = d.useCallback((y) => Vr(e).findIndex(($) => $ === y), [
      e
    ]), h = d.useCallback((y, M) => {
      const $ = Vr(e), E = b(y);
      if (E === M) return;
      r.debug(`Moving column ${y} to index ${M}`);
      const N = [
        ...$
      ], T = N.splice(E, 1)[0];
      N.splice(M, 0, T), n(C({}, Ar(e.current.state), {
        orderedFields: N
      }));
      const P = {
        column: e.current.getColumn(y),
        targetIndex: e.current.getColumnIndexRelativeToVisibleColumns(y),
        oldIndex: E
      };
      e.current.publishEvent("columnIndexChange", P);
    }, [
      e,
      r,
      n,
      b
    ]), m = d.useCallback((y, M) => {
      r.debug(`Updating column ${y} width to ${M}`);
      const $ = Ar(e.current.state), E = $.lookup[y], N = C({}, E, {
        width: M,
        hasBeenResized: true
      });
      n(Ks(C({}, $, {
        lookup: C({}, $.lookup, {
          [y]: N
        })
      }), e.current.getRootDimensions())), e.current.publishEvent("columnWidthChange", {
        element: e.current.getColumnHeaderElement(y),
        colDef: N,
        width: M
      });
    }, [
      e,
      r,
      n
    ]), x = {
      getColumn: l,
      getAllColumns: s,
      getColumnIndex: a,
      getColumnPosition: u,
      getVisibleColumns: i,
      getColumnIndexRelativeToVisibleColumns: b,
      updateColumns: p,
      setColumnVisibilityModel: c,
      setColumnVisibility: g,
      setColumnWidth: m
    }, v = {
      setColumnIndex: h
    };
    Oe(e, x, "public"), Oe(e, v, t.signature === gr.DataGrid ? "private" : "public");
    const w = d.useCallback((y, M) => {
      var _a3, _b3;
      const $ = {}, E = dr(e);
      (!M.exportOnlyDirtyModels || t.columnVisibilityModel != null || Object.keys(((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.columns) == null ? void 0 : _b3.columnVisibilityModel) ?? {}).length > 0 || Object.keys(E).length > 0) && ($.columnVisibilityModel = E), $.orderedFields = Vr(e);
      const T = hr(e), P = {};
      return T.forEach((A) => {
        if (A.hasBeenResized) {
          const R = {};
          Cd.forEach((z) => {
            let _ = A[z];
            _ === 1 / 0 && (_ = -1), R[z] = _;
          }), P[A.field] = R;
        }
      }), Object.keys(P).length > 0 && ($.dimensions = P), C({}, y, {
        columns: $
      });
    }, [
      e,
      t.columnVisibilityModel,
      (_a2 = t.initialState) == null ? void 0 : _a2.columns
    ]), k = d.useCallback((y, M) => {
      var _a3;
      const $ = (_a3 = M.stateToRestore.columns) == null ? void 0 : _a3.columnVisibilityModel, E = M.stateToRestore.columns;
      if ($ == null && E == null) return y;
      const N = Fo({
        apiRef: e,
        columnsToUpsert: [],
        initialState: E,
        columnVisibilityModel: $,
        keepOnlyColumnsToUpsert: false
      });
      return e.current.setState(Fc(N)), E != null && e.current.publishEvent("columnsChange", N.orderedFields), y;
    }, [
      e
    ]), L = d.useCallback((y, M) => {
      var _a3;
      if (M === ho.columns) {
        const $ = t.slots.columnsPanel;
        return f.jsx($, C({}, (_a3 = t.slotProps) == null ? void 0 : _a3.columnsPanel));
      }
      return y;
    }, [
      t.slots.columnsPanel,
      (_b2 = t.slotProps) == null ? void 0 : _b2.columnsPanel
    ]), F = d.useCallback((y) => t.disableColumnSelector ? y : [
      ...y,
      "columnMenuColumnsItem"
    ], [
      t.disableColumnSelector
    ]);
    at(e, "columnMenu", F), at(e, "exportState", w), at(e, "restoreState", k), at(e, "preferencePanel", L);
    const I = d.useRef(null);
    le(e, "viewportInnerSizeChange", (y) => {
      if (I.current !== y.width) {
        if (I.current = y.width, !ft(e).some(($) => $.flex && $.flex > 0)) return;
        n(Ks(Ar(e.current.state), e.current.getRootDimensions()));
      }
    });
    const D = d.useCallback(() => {
      r.info("Columns pipe processing have changed, regenerating the columns");
      const y = Fo({
        apiRef: e,
        columnsToUpsert: [],
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      n(y);
    }, [
      e,
      r,
      n
    ]);
    Gi(e, "hydrateColumns", D);
    const S = d.useRef(true);
    d.useEffect(() => {
      if (S.current) {
        S.current = false;
        return;
      }
      if (r.info(`GridColumns have changed, new length ${t.columns.length}`), o.current === t.columns) return;
      const y = Fo({
        apiRef: e,
        initialState: void 0,
        columnsToUpsert: t.columns,
        keepOnlyColumnsToUpsert: true
      });
      o.current = t.columns, n(y);
    }, [
      r,
      e,
      n,
      t.columns
    ]), d.useEffect(() => {
      t.columnVisibilityModel !== void 0 && e.current.setColumnVisibilityModel(t.columnVisibilityModel);
    }, [
      e,
      r,
      t.columnVisibilityModel
    ]);
  }
  function Fc(e) {
    return (t) => C({}, t, {
      columns: e
    });
  }
  const PI = (e, t) => {
    var _a2;
    return C({}, e, {
      density: ((_a2 = t.initialState) == null ? void 0 : _a2.density) ?? t.density ?? "standard"
    });
  }, II = (e, t) => {
    var _a2;
    const r = Mt(e, "useDensity");
    e.current.registerControlState({
      stateId: "density",
      propModel: t.density,
      propOnChange: t.onDensityChange,
      stateSelector: Do,
      changeEvent: "densityChange"
    });
    const n = {
      setDensity: Be((i) => {
        Do(e.current.state) !== i && (r.debug(`Set grid density to ${i}`), e.current.setState((u) => C({}, u, {
          density: i
        })));
      })
    };
    Oe(e, n, "public");
    const l = d.useCallback((i, a) => {
      var _a3;
      const u = Do(e.current.state);
      return !a.exportOnlyDirtyModels || t.density != null || ((_a3 = t.initialState) == null ? void 0 : _a3.density) != null ? C({}, i, {
        density: u
      }) : i;
    }, [
      e,
      t.density,
      (_a2 = t.initialState) == null ? void 0 : _a2.density
    ]), s = d.useCallback((i, a) => {
      var _a3;
      const u = ((_a3 = a.stateToRestore) == null ? void 0 : _a3.density) ? a.stateToRestore.density : Do(e.current.state);
      return e.current.setState((c) => C({}, c, {
        density: u
      })), i;
    }, [
      e
    ]);
    at(e, "exportState", l), at(e, "restoreState", s), d.useEffect(() => {
      t.density && e.current.setDensity(t.density);
    }, [
      e,
      t.density
    ]);
  };
  function MI(e, t = "csv", r = document.title || "untitled") {
    const o = `${r}.${t}`;
    if ("download" in HTMLAnchorElement.prototype) {
      const n = URL.createObjectURL(e), l = document.createElement("a");
      l.href = n, l.download = o, l.click(), setTimeout(() => {
        URL.revokeObjectURL(n);
      });
      return;
    }
    throw new Error("MUI X: exportAs not supported.");
  }
  const Kd = ({ apiRef: e, options: t }) => {
    const r = hr(e);
    return t.fields ? t.fields.reduce((n, l) => {
      const s = r.find((i) => i.field === l);
      return s && n.push(s), n;
    }, []) : (t.allColumns ? r : ft(e)).filter((n) => !n.disableExport);
  }, Yd = ({ apiRef: e }) => {
    var _a2, _b2;
    const t = ed(e), r = xt(e), o = e.current.getSelectedRows(), n = t.filter((a) => r[a].type !== "footer"), l = Zo(e), s = ((_a2 = l == null ? void 0 : l.top) == null ? void 0 : _a2.map((a) => a.id)) || [], i = ((_b2 = l == null ? void 0 : l.bottom) == null ? void 0 : _b2.map((a) => a.id)) || [];
    return n.unshift(...s), n.push(...i), o.size > 0 ? n.filter((a) => o.has(a)) : n;
  }, OI = (e, t) => {
    const r = Mt(e, "useGridCsvExport"), o = t.ignoreValueFormatterDuringExport, n = (typeof o == "object" ? o == null ? void 0 : o.csvExport : o) || false, l = d.useCallback((u = {}) => {
      r.debug("Get data as CSV");
      const c = Kd({
        apiRef: e,
        options: u
      }), g = (u.getRowsToExport ?? Yd)({
        apiRef: e
      });
      return mI({
        columns: c,
        rowIds: g,
        csvOptions: {
          delimiter: u.delimiter || ",",
          shouldAppendQuotes: u.shouldAppendQuotes ?? true,
          includeHeaders: u.includeHeaders ?? true,
          includeColumnGroupsHeaders: u.includeColumnGroupsHeaders ?? true,
          escapeFormulas: u.escapeFormulas ?? true
        },
        ignoreValueFormatter: n,
        apiRef: e
      });
    }, [
      r,
      e,
      n
    ]), s = d.useCallback((u) => {
      r.debug("Export data as CSV");
      const c = l(u), p = new Blob([
        (u == null ? void 0 : u.utf8WithBom) ? new Uint8Array([
          239,
          187,
          191
        ]) : "",
        c
      ], {
        type: "text/csv"
      });
      MI(p, "csv", u == null ? void 0 : u.fileName);
    }, [
      r,
      l
    ]);
    Oe(e, {
      getDataAsCsv: l,
      exportDataAsCsv: s
    }, "public");
    const a = d.useCallback((u, c) => {
      var _a2;
      return ((_a2 = c.csvOptions) == null ? void 0 : _a2.disableToolbarButton) ? u : [
        ...u,
        {
          component: f.jsx(hP, {
            options: c.csvOptions
          }),
          componentName: "csvExport"
        }
      ];
    }, []);
    at(e, "exportMenu", a);
  }, xl = (e, t, r) => {
    let o = e.paginationModel;
    const n = e.rowCount, l = (r == null ? void 0 : r.pageSize) ?? o.pageSize, s = (r == null ? void 0 : r.page) ?? o.page, i = sd(n, l, s);
    r && ((r == null ? void 0 : r.page) !== o.page || (r == null ? void 0 : r.pageSize) !== o.pageSize) && (o = r);
    const a = l === -1 ? 0 : aw(o.page, i);
    return a !== o.page && (o = C({}, o, {
      page: a
    })), ad(o.pageSize, t), o;
  }, FI = (e, t) => {
    var _a2, _b2;
    const r = Mt(e, "useGridPaginationModel"), o = X(e, Qo), n = d.useRef(kt(e)), l = Math.floor(t.rowHeight * o);
    e.current.registerControlState({
      stateId: "paginationModel",
      propModel: t.paginationModel,
      propOnChange: t.onPaginationModelChange,
      stateSelector: Rt,
      changeEvent: "paginationModelChange"
    });
    const s = d.useCallback((w) => {
      const k = Rt(e);
      w !== k.page && (r.debug(`Setting page to ${w}`), e.current.setPaginationModel({
        page: w,
        pageSize: k.pageSize
      }));
    }, [
      e,
      r
    ]), i = d.useCallback((w) => {
      const k = Rt(e);
      w !== k.pageSize && (r.debug(`Setting page size to ${w}`), e.current.setPaginationModel({
        pageSize: w,
        page: k.page
      }));
    }, [
      e,
      r
    ]), a = d.useCallback((w) => {
      const k = Rt(e);
      w !== k && (r.debug("Setting 'paginationModel' to", w), e.current.setState((L) => C({}, L, {
        pagination: C({}, L.pagination, {
          paginationModel: xl(L.pagination, t.signature, w)
        })
      }), "setPaginationModel"));
    }, [
      e,
      r,
      t.signature
    ]);
    Oe(e, {
      setPage: s,
      setPageSize: i,
      setPaginationModel: a
    }, "public");
    const c = d.useCallback((w, k) => {
      var _a3, _b3;
      const L = Rt(e);
      return !k.exportOnlyDirtyModels || t.paginationModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.paginationModel) != null || L.page !== 0 && L.pageSize !== iw(t.autoPageSize) ? C({}, w, {
        pagination: C({}, w.pagination, {
          paginationModel: L
        })
      }) : w;
    }, [
      e,
      t.paginationModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel,
      t.autoPageSize
    ]), p = d.useCallback((w, k) => {
      var _a3, _b3;
      const L = ((_a3 = k.stateToRestore.pagination) == null ? void 0 : _a3.paginationModel) ? C({}, id(t.autoPageSize), (_b3 = k.stateToRestore.pagination) == null ? void 0 : _b3.paginationModel) : Rt(e);
      return e.current.setState((F) => C({}, F, {
        pagination: C({}, F.pagination, {
          paginationModel: xl(F.pagination, t.signature, L)
        })
      }), "stateRestorePreProcessing"), w;
    }, [
      e,
      t.autoPageSize,
      t.signature
    ]);
    at(e, "exportState", c), at(e, "restoreState", p);
    const g = () => {
      var _a3;
      const w = Rt(e);
      ((_a3 = e.current.virtualScrollerRef) == null ? void 0 : _a3.current) && e.current.scrollToIndexes({
        rowIndex: w.page * w.pageSize
      });
    }, b = d.useCallback(() => {
      if (!t.autoPageSize) return;
      const w = e.current.getRootDimensions(), k = Math.max(1, Math.floor(w.viewportInnerSize.height / l));
      e.current.setPageSize(k);
    }, [
      e,
      t.autoPageSize,
      l
    ]), h = d.useCallback((w) => {
      if (w == null) return;
      const k = Rt(e);
      if (k.page === 0) return;
      const L = dd(e);
      k.page > L - 1 && e.current.setPage(Math.max(0, L - 1));
    }, [
      e
    ]), m = d.useCallback(() => {
      Rt(e).page !== 0 && e.current.setPage(0), e.current.getScrollPosition().top !== 0 && e.current.scroll({
        top: 0
      });
    }, [
      e
    ]), x = d.useCallback((w) => {
      const k = C({}, w, {
        items: rd(e)
      });
      Tr(k, n.current) || (n.current = k, m());
    }, [
      e,
      m
    ]);
    le(e, "viewportInnerSizeChange", b), le(e, "paginationModelChange", g), le(e, "rowCountChange", h), le(e, "sortModelChange", ao(t.resetPageOnSortFilter, m)), le(e, "filterModelChange", ao(t.resetPageOnSortFilter, x));
    const v = d.useRef(true);
    d.useEffect(() => {
      if (v.current) {
        v.current = false;
        return;
      }
      t.pagination && e.current.setState((w) => C({}, w, {
        pagination: C({}, w.pagination, {
          paginationModel: xl(w.pagination, t.signature, t.paginationModel)
        })
      }));
    }, [
      e,
      t.paginationModel,
      t.signature,
      t.pagination
    ]), d.useEffect(() => {
      e.current.setState((w) => {
        const k = t.pagination === true;
        return w.pagination.paginationMode === t.paginationMode || w.pagination.enabled === k ? w : C({}, w, {
          pagination: C({}, w.pagination, {
            paginationMode: t.paginationMode,
            enabled: t.pagination === true
          })
        });
      });
    }, [
      e,
      t.paginationMode,
      t.pagination
    ]), d.useEffect(b, [
      b
    ]);
  };
  function kI() {
    return new Promise((e) => {
      requestAnimationFrame(() => {
        e();
      });
    });
  }
  function EI(e) {
    const t = document.createElement("iframe");
    return t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.title = e || document.title, t;
  }
  const TI = (e, t) => {
    const r = e.current.rootElementRef.current !== null, o = Mt(e, "useGridPrintExport"), n = d.useRef(null), l = d.useRef(null), s = d.useRef({}), i = d.useRef([]), a = d.useRef(null);
    d.useEffect(() => {
      n.current = pr(e.current.rootElementRef.current);
    }, [
      e,
      r
    ]);
    const u = d.useCallback((x, v, w) => new Promise((k) => {
      const L = Kd({
        apiRef: e,
        options: {
          fields: x,
          allColumns: v
        }
      }).map((j) => j.field), F = hr(e), I = {};
      F.forEach((j) => {
        I[j.field] = L.includes(j.field);
      }), w && (I[on.field] = true), e.current.setColumnVisibilityModel(I), k();
    }), [
      e
    ]), c = d.useCallback((x) => {
      const w = x({
        apiRef: e
      }).reduce((k, L) => {
        const F = e.current.getRow(L);
        return F[qo] || k.push(F), k;
      }, []);
      e.current.setRows(w);
    }, [
      e
    ]), p = d.useCallback((x, v) => {
      var _a2, _b2, _c2;
      const w = C({
        copyStyles: true,
        hideToolbar: false,
        hideFooter: false,
        includeCheckboxes: false
      }, v), k = x.contentDocument;
      if (!k) return;
      const L = nn(e.current.state), F = e.current.rootElementRef.current, I = F.cloneNode(true), j = I.querySelector(`.${O.main}`);
      j.style.overflow = "visible", I.style.contain = "size";
      let D = ((_a2 = F.querySelector(`.${O.toolbarContainer}`)) == null ? void 0 : _a2.offsetHeight) || 0, S = ((_b2 = F.querySelector(`.${O.footerContainer}`)) == null ? void 0 : _b2.offsetHeight) || 0;
      const y = I.querySelector(`.${O.footerContainer}`);
      w.hideToolbar && ((_c2 = I.querySelector(`.${O.toolbarContainer}`)) == null ? void 0 : _c2.remove(), D = 0), w.hideFooter && y && (y.remove(), S = 0);
      const M = L.currentPageTotalHeight + es(e, t) + D + S;
      I.style.height = `${M}px`, I.style.boxSizing = "content-box", !w.hideFooter && y && (y.style.position = "absolute", y.style.width = "100%", y.style.top = `${M - S}px`);
      const $ = document.createElement("div");
      $.appendChild(I), k.body.style.marginTop = "0px", k.body.innerHTML = $.innerHTML;
      const E = typeof w.pageStyle == "function" ? w.pageStyle() : w.pageStyle;
      if (typeof E == "string") {
        const T = k.createElement("style");
        T.appendChild(k.createTextNode(E)), k.head.appendChild(T);
      }
      w.bodyClassName && k.body.classList.add(...w.bodyClassName.split(" "));
      const N = [];
      if (w.copyStyles) {
        const T = F.getRootNode(), A = (T.constructor.name === "ShadowRoot" ? T : n.current).querySelectorAll("style, link[rel='stylesheet']");
        for (let R = 0; R < A.length; R += 1) {
          const z = A[R];
          if (z.tagName === "STYLE") {
            const _ = k.createElement(z.tagName), H = z.sheet;
            if (H) {
              let G = "";
              for (let U = 0; U < H.cssRules.length; U += 1) typeof H.cssRules[U].cssText == "string" && (G += `${H.cssRules[U].cssText}\r
`);
              _.appendChild(k.createTextNode(G)), k.head.appendChild(_);
            }
          } else if (z.getAttribute("href")) {
            const _ = k.createElement(z.tagName);
            for (let H = 0; H < z.attributes.length; H += 1) {
              const G = z.attributes[H];
              G && _.setAttribute(G.nodeName, G.nodeValue || "");
            }
            N.push(new Promise((H) => {
              _.addEventListener("load", () => H());
            })), k.head.appendChild(_);
          }
        }
      }
      Promise.all(N).then(() => {
        x.contentWindow.print();
      });
    }, [
      e,
      n,
      t
    ]), g = d.useCallback((x) => {
      var _a2, _b2;
      n.current.body.removeChild(x), e.current.restoreState(l.current || {}), ((_b2 = (_a2 = l.current) == null ? void 0 : _a2.columns) == null ? void 0 : _b2.columnVisibilityModel) || e.current.setColumnVisibilityModel(s.current), e.current.setState((v) => C({}, v, {
        virtualization: a.current
      })), e.current.setRows(i.current), l.current = null, s.current = {}, i.current = [];
    }, [
      e
    ]), h = {
      exportDataAsPrint: d.useCallback(async (x) => {
        if (o.debug("Export data as Print"), !e.current.rootElementRef.current) throw new Error("MUI X: No grid root element available.");
        if (l.current = e.current.exportState(), s.current = dr(e), i.current = e.current.getSortedRows().filter((w) => !w[qo]), t.pagination) {
          const k = {
            page: 0,
            pageSize: Oi(e)
          };
          e.current.setState((L) => C({}, L, {
            pagination: C({}, L.pagination, {
              paginationModel: xl(L.pagination, "DataGridPro", k)
            })
          }));
        }
        a.current = e.current.state.virtualization, e.current.unstable_setVirtualization(false), await u(x == null ? void 0 : x.fields, x == null ? void 0 : x.allColumns, x == null ? void 0 : x.includeCheckboxes), c((x == null ? void 0 : x.getRowsToExport) ?? Yd), await kI();
        const v = EI(x == null ? void 0 : x.fileName);
        v.onload = () => {
          p(v, x), v.contentWindow.matchMedia("print").addEventListener("change", (k) => {
            k.matches === false && g(v);
          });
        }, n.current.body.appendChild(v);
      }, [
        t,
        o,
        e,
        p,
        g,
        u,
        c
      ])
    };
    Oe(e, h, "public");
    const m = d.useCallback((x, v) => {
      var _a2;
      return ((_a2 = v.printOptions) == null ? void 0 : _a2.disableToolbarButton) ? x : [
        ...x,
        {
          component: f.jsx(mP, {
            options: v.printOptions
          }),
          componentName: "printExport"
        }
      ];
    }, []);
    at(e, "exportMenu", m);
  }, AI = (e, t, r) => {
    var _a2, _b2;
    const o = t.filterModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel) ?? $n();
    return C({}, e, {
      filter: C({
        filterModel: Si(o, t.disableMultipleColumnsFiltering, r)
      }, ju),
      visibleRowsLookup: {}
    });
  }, DI = (e) => e.filteredRowsLookup;
  function kc(e, t) {
    return e.current.applyStrategyProcessor("visibleRowsLookupCreation", {
      tree: t.rows.tree,
      filteredRowsLookup: t.filter.filteredRowsLookup
    });
  }
  function $I() {
    return mu(Object.values);
  }
  const LI = (e, t) => {
    var _a2, _b2, _c2;
    const r = Mt(e, "useGridFilter");
    e.current.registerControlState({
      stateId: "filter",
      propModel: t.filterModel,
      propOnChange: t.onFilterModelChange,
      stateSelector: kt,
      changeEvent: "filterModelChange"
    });
    const o = d.useCallback(() => {
      e.current.setState((S) => {
        const y = kt(S, e.current.instanceId), M = e.current.getFilterState(y), $ = C({}, S, {
          filter: C({}, S.filter, M)
        }), E = kc(e, $);
        return C({}, $, {
          visibleRowsLookup: E
        });
      }), e.current.publishEvent("filteredRowsSet");
    }, [
      e
    ]), n = d.useCallback((S, y) => y == null || y.filterable === false || t.disableColumnFilter ? S : [
      ...S,
      "columnMenuFilterItem"
    ], [
      t.disableColumnFilter
    ]), l = d.useCallback(() => {
      o(), e.current.forceUpdate();
    }, [
      e,
      o
    ]), s = d.useCallback((S) => {
      const y = kt(e), M = [
        ...y.items
      ], $ = M.findIndex((E) => E.id === S.id);
      $ === -1 ? M.push(S) : M[$] = S, e.current.setFilterModel(C({}, y, {
        items: M
      }), "upsertFilterItem");
    }, [
      e
    ]), i = d.useCallback((S) => {
      const y = kt(e), M = [
        ...y.items
      ];
      S.forEach(($) => {
        const E = M.findIndex((N) => N.id === $.id);
        E === -1 ? M.push($) : M[E] = $;
      }), e.current.setFilterModel(C({}, y, {
        items: M
      }), "upsertFilterItems");
    }, [
      e
    ]), a = d.useCallback((S) => {
      const y = kt(e), M = y.items.filter(($) => $.id !== S.id);
      M.length !== y.items.length && e.current.setFilterModel(C({}, y, {
        items: M
      }), "deleteFilterItem");
    }, [
      e
    ]), u = d.useCallback((S, y, M) => {
      if (r.debug("Displaying filter panel"), S) {
        const $ = kt(e), E = $.items.filter((A) => {
          var _a3;
          if (A.value !== void 0) return !(Array.isArray(A.value) && A.value.length === 0);
          const z = (_a3 = e.current.getColumn(A.field).filterOperators) == null ? void 0 : _a3.find((H) => H.value === A.operator);
          return !(typeof (z == null ? void 0 : z.requiresFilterValue) > "u" ? true : z == null ? void 0 : z.requiresFilterValue);
        });
        let N;
        const T = E.find((A) => A.field === S), P = e.current.getColumn(S);
        T ? N = E : t.disableMultipleColumnsFiltering ? N = [
          qs({
            field: S,
            operator: P.filterOperators[0].value
          }, e)
        ] : N = [
          ...E,
          qs({
            field: S,
            operator: P.filterOperators[0].value
          }, e)
        ], e.current.setFilterModel(C({}, $, {
          items: N
        }));
      }
      e.current.showPreferences(ho.filters, y, M);
    }, [
      e,
      r,
      t.disableMultipleColumnsFiltering
    ]), c = d.useCallback(() => {
      r.debug("Hiding filter panel"), e.current.hidePreferences();
    }, [
      e,
      r
    ]), p = d.useCallback((S) => {
      const y = kt(e);
      y.logicOperator !== S && e.current.setFilterModel(C({}, y, {
        logicOperator: S
      }), "changeLogicOperator");
    }, [
      e
    ]), g = d.useCallback((S) => {
      const y = kt(e);
      Tr(y.quickFilterValues, S) || e.current.setFilterModel(C({}, y, {
        quickFilterValues: [
          ...S
        ]
      }));
    }, [
      e
    ]), b = d.useCallback((S, y) => {
      kt(e) !== S && (r.debug("Setting filter model"), e.current.updateControlState("filter", Va(S, t.disableMultipleColumnsFiltering, e), y), e.current.unstable_applyFilters());
    }, [
      e,
      r,
      t.disableMultipleColumnsFiltering
    ]), h = d.useCallback((S) => {
      const y = Si(S, t.disableMultipleColumnsFiltering, e), M = t.filterMode === "client" ? dy(y, e, t.disableEval) : null, $ = e.current.applyStrategyProcessor("filtering", {
        isRowMatchingFilters: M,
        filterModel: y ?? $n()
      });
      return C({}, $, {
        filterModel: y
      });
    }, [
      t.disableMultipleColumnsFiltering,
      t.filterMode,
      t.disableEval,
      e
    ]), m = {
      setFilterLogicOperator: p,
      unstable_applyFilters: l,
      deleteFilterItem: a,
      upsertFilterItem: s,
      upsertFilterItems: i,
      setFilterModel: b,
      showFilterPanel: u,
      hideFilterPanel: c,
      setQuickFilterValues: g,
      ignoreDiacritics: t.ignoreDiacritics,
      getFilterState: h
    };
    Oe(e, m, "public");
    const x = d.useCallback((S, y) => {
      var _a3, _b3;
      const M = kt(e);
      return M.items.forEach((E) => {
        delete E.fromInput;
      }), !y.exportOnlyDirtyModels || t.filterModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.filter) == null ? void 0 : _b3.filterModel) != null || !Tr(M, $n()) ? C({}, S, {
        filter: {
          filterModel: M
        }
      }) : S;
    }, [
      e,
      t.filterModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel
    ]), v = d.useCallback((S, y) => {
      var _a3;
      const M = (_a3 = y.stateToRestore.filter) == null ? void 0 : _a3.filterModel;
      return M == null ? S : (e.current.updateControlState("filter", Va(M, t.disableMultipleColumnsFiltering, e), "restoreState"), C({}, S, {
        callbacks: [
          ...S.callbacks,
          e.current.unstable_applyFilters
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsFiltering
    ]), w = d.useCallback((S, y) => {
      var _a3;
      if (y === ho.filters) {
        const M = t.slots.filterPanel;
        return f.jsx(M, C({}, (_a3 = t.slotProps) == null ? void 0 : _a3.filterPanel));
      }
      return S;
    }, [
      t.slots.filterPanel,
      (_c2 = t.slotProps) == null ? void 0 : _c2.filterPanel
    ]), { getRowId: k } = t, L = Lr($I), F = d.useCallback((S) => {
      var _a3;
      if (t.filterMode !== "client" || !S.isRowMatchingFilters || !S.filterModel.items.length && !((_a3 = S.filterModel.quickFilterValues) == null ? void 0 : _a3.length)) return ju;
      const y = ur(e), M = {}, { isRowMatchingFilters: $ } = S, E = {}, N = {
        passingFilterItems: null,
        passingQuickFilterValues: null
      }, T = L.current(e.current.state.rows.dataRowIdToModelLookup);
      for (let R = 0; R < T.length; R += 1) {
        const z = T[R], _ = k ? k(z) : z.id;
        $(z, void 0, N);
        const H = fy([
          N.passingFilterItems
        ], [
          N.passingQuickFilterValues
        ], S.filterModel, e, E);
        M[_] = H;
      }
      const P = "auto-generated-group-footer-root";
      return y[P] && (M[P] = true), {
        filteredRowsLookup: M,
        filteredChildrenCountLookup: {},
        filteredDescendantCountLookup: {}
      };
    }, [
      e,
      t.filterMode,
      k,
      L
    ]);
    at(e, "columnMenu", n), at(e, "exportState", x), at(e, "restoreState", v), at(e, "preferencePanel", w), Gl(e, mo, "filtering", F), Gl(e, mo, "visibleRowsLookupCreation", DI);
    const I = d.useCallback(() => {
      r.debug("onColUpdated - GridColumns changed, applying filters");
      const S = kt(e), y = Ur(e), M = S.items.filter(($) => $.field && y[$.field]);
      M.length < S.items.length && e.current.setFilterModel(C({}, S, {
        items: M
      }));
    }, [
      e,
      r
    ]), j = d.useCallback((S) => {
      S === "filtering" && e.current.unstable_applyFilters();
    }, [
      e
    ]), D = d.useCallback(() => {
      e.current.setState((S) => C({}, S, {
        visibleRowsLookup: kc(e, S)
      })), e.current.forceUpdate();
    }, [
      e
    ]);
    le(e, "rowsSet", o), le(e, "columnsChange", I), le(e, "activeStrategyProcessorChange", j), le(e, "rowExpansionChange", D), le(e, "columnVisibilityModelChange", () => {
      const S = kt(e);
      S.quickFilterValues && Bu(S) && e.current.unstable_applyFilters();
    }), qn(() => {
      e.current.unstable_applyFilters();
    }), Tt(() => {
      t.filterModel !== void 0 && e.current.setFilterModel(t.filterModel);
    }, [
      e,
      r,
      t.filterModel
    ]);
  }, RI = (e) => C({}, e, {
    focus: {
      cell: null,
      columnHeader: null,
      columnHeaderFilter: null,
      columnGroupHeader: null
    },
    tabIndex: {
      cell: null,
      columnHeader: null,
      columnHeaderFilter: null,
      columnGroupHeader: null
    }
  }), jI = (e, t) => {
    const r = Mt(e, "useGridFocus"), o = d.useRef(null), n = e.current.rootElementRef.current !== null, l = d.useCallback((D, S) => {
      D && e.current.getRow(D.id) && e.current.publishEvent("cellFocusOut", e.current.getCellParams(D.id, D.field), S);
    }, [
      e
    ]), s = d.useCallback((D, S) => {
      const y = Wt(e);
      (y == null ? void 0 : y.id) === D && (y == null ? void 0 : y.field) === S || (e.current.setState((M) => (r.debug(`Focusing on cell with id=${D} and field=${S}`), C({}, M, {
        tabIndex: {
          cell: {
            id: D,
            field: S
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        },
        focus: {
          cell: {
            id: D,
            field: S
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate(), e.current.getRow(D) && (y && l(y, {}), e.current.publishEvent("cellFocusIn", e.current.getCellParams(D, S))));
    }, [
      e,
      r,
      l
    ]), i = d.useCallback((D, S = {}) => {
      const y = Wt(e);
      l(y, S), e.current.setState((M) => (r.debug(`Focusing on column header with colIndex=${D}`), C({}, M, {
        tabIndex: {
          columnHeader: {
            field: D
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: {
            field: D
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      r,
      l
    ]), a = d.useCallback((D, S = {}) => {
      const y = Wt(e);
      l(y, S), e.current.setState((M) => (r.debug(`Focusing on column header filter with colIndex=${D}`), C({}, M, {
        tabIndex: {
          columnHeader: null,
          columnHeaderFilter: {
            field: D
          },
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: null,
          columnHeaderFilter: {
            field: D
          },
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      r,
      l
    ]), u = d.useCallback((D, S, y = {}) => {
      const M = Wt(e);
      M && e.current.publishEvent("cellFocusOut", e.current.getCellParams(M.id, M.field), y), e.current.setState(($) => C({}, $, {
        tabIndex: {
          columnGroupHeader: {
            field: D,
            depth: S
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        },
        focus: {
          columnGroupHeader: {
            field: D,
            depth: S
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        }
      })), e.current.forceUpdate();
    }, [
      e
    ]), c = d.useCallback(() => $l(e), [
      e
    ]), p = d.useCallback((D, S, y) => {
      let M = e.current.getColumnIndex(S);
      const $ = ft(e), E = ro(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      }), N = Zo(e), T = [].concat(N.top || [], E.rows, N.bottom || []);
      let P = T.findIndex((_) => _.id === D);
      y === "right" ? M += 1 : y === "left" ? M -= 1 : P += 1, M >= $.length ? (P += 1, P < T.length && (M = 0)) : M < 0 && (P -= 1, P >= 0 && (M = $.length - 1)), P = tr(P, 0, T.length - 1);
      const A = T[P];
      if (!A) return;
      const R = e.current.unstable_getCellColSpanInfo(A.id, M);
      R && R.spannedByColSpan && (y === "left" || y === "below" ? M = R.leftVisibleCellIndex : y === "right" && (M = R.rightVisibleCellIndex)), M = tr(M, 0, $.length - 1);
      const z = $[M];
      e.current.setCellFocus(A.id, z.field);
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), g = d.useCallback(({ id: D, field: S }) => {
      e.current.setCellFocus(D, S);
    }, [
      e
    ]), b = d.useCallback((D, S) => {
      S.key === "Enter" || S.key === "Tab" || S.key === "Shift" || zl(S.key) || e.current.setCellFocus(D.id, D.field);
    }, [
      e
    ]), h = d.useCallback(({ field: D }, S) => {
      S.target === S.currentTarget && e.current.setColumnHeaderFocus(D, S);
    }, [
      e
    ]), m = d.useCallback(({ fields: D, depth: S }, y) => {
      if (y.target !== y.currentTarget) return;
      const M = $l(e);
      M !== null && M.depth === S && D.includes(M.field) || e.current.setColumnGroupHeaderFocus(D[0], S, y);
    }, [
      e
    ]), x = d.useCallback((D, S) => {
      var _a2, _b2;
      ((_b2 = (_a2 = S.relatedTarget) == null ? void 0 : _a2.getAttribute("class")) == null ? void 0 : _b2.includes(O.columnHeader)) || (r.debug("Clearing focus"), e.current.setState((y) => C({}, y, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })));
    }, [
      r,
      e
    ]), v = d.useCallback((D) => {
      o.current = D;
    }, []), w = d.useCallback((D) => {
      var _a2;
      const S = o.current;
      o.current = null;
      const y = Wt(e);
      if (!e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: D,
        cell: S
      })) return;
      if (!y) {
        S && e.current.setCellFocus(S.id, S.field);
        return;
      }
      (S == null ? void 0 : S.id) === y.id && (S == null ? void 0 : S.field) === y.field || ((_a2 = e.current.getCellElement(y.id, y.field)) == null ? void 0 : _a2.contains(D.target)) || (S ? e.current.setCellFocus(S.id, S.field) : (e.current.setState((E) => C({}, E, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })), e.current.forceUpdate(), l(y, D)));
    }, [
      e,
      l
    ]), k = d.useCallback((D) => {
      if (D.cellMode === "view") return;
      const S = Wt(e);
      ((S == null ? void 0 : S.id) !== D.id || (S == null ? void 0 : S.field) !== D.field) && e.current.setCellFocus(D.id, D.field);
    }, [
      e
    ]), L = d.useCallback(() => {
      var _a2;
      const D = Wt(e);
      if (D && !e.current.getRow(D.id)) {
        const S = D.id;
        let y = null;
        if (typeof S < "u") {
          const M = e.current.getRowElement(S), $ = (M == null ? void 0 : M.dataset.rowindex) ? Number(M == null ? void 0 : M.dataset.rowindex) : 0, E = ro(e, {
            pagination: t.pagination,
            paginationMode: t.paginationMode
          });
          y = ((_a2 = E.rows[tr($, 0, E.rows.length - 1)]) == null ? void 0 : _a2.id) ?? null;
        }
        e.current.setState((M) => C({}, M, {
          focus: {
            cell: y === null ? null : {
              id: y,
              field: D.field
            },
            columnHeader: null,
            columnHeaderFilter: null,
            columnGroupHeader: null
          }
        }));
      }
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), F = Be(() => {
      const D = Wt(e);
      if (!D) return;
      const S = ro(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (S.rows.find(($) => $.id === D.id)) return;
      const M = ft(e);
      e.current.setState(($) => C({}, $, {
        tabIndex: {
          cell: {
            id: S.rows[0].id,
            field: M[0].field
          },
          columnGroupHeader: null,
          columnHeader: null,
          columnHeaderFilter: null
        }
      }));
    }), I = {
      setCellFocus: s,
      setColumnHeaderFocus: i,
      setColumnHeaderFilterFocus: a
    }, j = {
      moveFocusToRelativeCell: p,
      setColumnGroupHeaderFocus: u,
      getColumnGroupHeaderFocus: c
    };
    Oe(e, I, "public"), Oe(e, j, "private"), d.useEffect(() => {
      const D = pr(e.current.rootElementRef.current);
      return D.addEventListener("mouseup", w), () => {
        D.removeEventListener("mouseup", w);
      };
    }, [
      e,
      n,
      w
    ]), le(e, "columnHeaderBlur", x), le(e, "cellDoubleClick", g), le(e, "cellMouseDown", v), le(e, "cellKeyDown", b), le(e, "cellModeChange", k), le(e, "columnHeaderFocus", h), le(e, "columnGroupHeaderFocus", m), le(e, "rowsSet", L), le(e, "paginationModelChange", F);
  }, Ss = ({ currentColIndex: e, firstColIndex: t, lastColIndex: r, isRtl: o }) => {
    if (o) {
      if (e < r) return e + 1;
    } else if (!o && e > t) return e - 1;
    return null;
  }, Ps = ({ currentColIndex: e, firstColIndex: t, lastColIndex: r, isRtl: o }) => {
    if (o) {
      if (e > t) return e - 1;
    } else if (!o && e < r) return e + 1;
    return null;
  };
  function HI(e, t, r, o) {
    var _a2, _b2;
    const n = Md(e);
    if (!((_a2 = n[t]) == null ? void 0 : _a2[r])) return t;
    const l = ed(e);
    let s = l.indexOf(t) + (o === "down" ? 1 : -1);
    for (; s >= 0 && s < l.length; ) {
      const i = l[s];
      if (!((_b2 = n[i]) == null ? void 0 : _b2[r])) return i;
      s += o === "down" ? 1 : -1;
    }
    return t;
  }
  const zI = Qe(Yn, Zo, (e, t) => (t.top || []).concat(e.rows, t.bottom || [])), NI = (e, t) => {
    const r = Mt(e, "useGridKeyboardNavigation"), o = Xt(), n = t.unstable_listView, l = d.useCallback(() => zI(e), [
      e
    ]), s = t.signature !== "DataGrid" && t.headerFilters, i = d.useCallback((v, w, k = "left", L = "up") => {
      const F = so(e), I = e.current.unstable_getCellColSpanInfo(w, v);
      I && I.spannedByColSpan && (k === "left" ? v = I.leftVisibleCellIndex : k === "right" && (v = I.rightVisibleCellIndex));
      const j = n ? Xo(e.current.state).field : Jo(e)[v], D = HI(e, w, j, L), S = F.findIndex((y) => y.id === D);
      r.debug(`Navigating to cell row ${S}, col ${v}`), e.current.scrollToIndexes({
        colIndex: v,
        rowIndex: S
      }), e.current.setCellFocus(D, j);
    }, [
      e,
      r,
      n
    ]), a = d.useCallback((v, w) => {
      r.debug(`Navigating to header col ${v}`), e.current.scrollToIndexes({
        colIndex: v
      });
      const k = e.current.getVisibleColumns()[v].field;
      e.current.setColumnHeaderFocus(k, w);
    }, [
      e,
      r
    ]), u = d.useCallback((v, w) => {
      r.debug(`Navigating to header filter col ${v}`), e.current.scrollToIndexes({
        colIndex: v
      });
      const k = e.current.getVisibleColumns()[v].field;
      e.current.setColumnHeaderFilterFocus(k, w);
    }, [
      e,
      r
    ]), c = d.useCallback((v, w, k) => {
      r.debug(`Navigating to header col ${v}`), e.current.scrollToIndexes({
        colIndex: v
      });
      const { field: L } = e.current.getVisibleColumns()[v];
      e.current.setColumnGroupHeaderFocus(L, w, k);
    }, [
      e,
      r
    ]), p = d.useCallback((v) => {
      var _a2;
      return (_a2 = l()[v]) == null ? void 0 : _a2.id;
    }, [
      l
    ]), g = d.useCallback((v, w) => {
      const k = w.currentTarget.querySelector(`.${O.columnHeaderTitleContainerContent}`);
      if (!!k && k.contains(w.target) && v.field !== on.field) return;
      const F = l(), I = e.current.getViewportPageSize(), j = v.field ? e.current.getColumnIndex(v.field) : 0, D = F.length > 0 ? 0 : null, S = F.length - 1, y = 0, M = ft(e).length - 1, $ = Qn(e);
      let E = true;
      switch (w.key) {
        case "ArrowDown": {
          s ? u(j, w) : D !== null && i(j, p(D));
          break;
        }
        case "ArrowRight": {
          const N = Ps({
            currentColIndex: j,
            firstColIndex: y,
            lastColIndex: M,
            isRtl: o
          });
          N !== null && a(N, w);
          break;
        }
        case "ArrowLeft": {
          const N = Ss({
            currentColIndex: j,
            firstColIndex: y,
            lastColIndex: M,
            isRtl: o
          });
          N !== null && a(N, w);
          break;
        }
        case "ArrowUp": {
          $ > 0 && c(j, $ - 1, w);
          break;
        }
        case "PageDown": {
          D !== null && S !== null && i(j, p(Math.min(D + I, S)));
          break;
        }
        case "Home": {
          a(y, w);
          break;
        }
        case "End": {
          a(M, w);
          break;
        }
        case "Enter": {
          (w.ctrlKey || w.metaKey) && e.current.toggleColumnMenu(v.field);
          break;
        }
        case " ":
          break;
        default:
          E = false;
      }
      E && w.preventDefault();
    }, [
      e,
      l,
      s,
      u,
      i,
      p,
      o,
      a,
      c
    ]), b = d.useCallback((v, w) => {
      const k = qw(e) === v.field, L = Kw(e) === v.field;
      if (k || L || !zl(w.key)) return;
      const F = l(), I = e.current.getViewportPageSize(), j = v.field ? e.current.getColumnIndex(v.field) : 0, D = 0, S = F.length - 1, y = 0, M = ft(e).length - 1;
      let $ = true;
      switch (w.key) {
        case "ArrowDown": {
          const E = p(D);
          E != null && i(j, E);
          break;
        }
        case "ArrowRight": {
          const E = Ps({
            currentColIndex: j,
            firstColIndex: y,
            lastColIndex: M,
            isRtl: o
          });
          E !== null && u(E, w);
          break;
        }
        case "ArrowLeft": {
          const E = Ss({
            currentColIndex: j,
            firstColIndex: y,
            lastColIndex: M,
            isRtl: o
          });
          E !== null ? u(E, w) : e.current.setColumnHeaderFilterFocus(v.field, w);
          break;
        }
        case "ArrowUp": {
          a(j, w);
          break;
        }
        case "PageDown": {
          S !== null && i(j, p(Math.min(D + I, S)));
          break;
        }
        case "Home": {
          u(y, w);
          break;
        }
        case "End": {
          u(M, w);
          break;
        }
        case " ":
          break;
        default:
          $ = false;
      }
      $ && w.preventDefault();
    }, [
      e,
      l,
      u,
      o,
      a,
      i,
      p
    ]), h = d.useCallback((v, w) => {
      const k = $l(e);
      if (k === null) return;
      const { field: L, depth: F } = k, { fields: I, depth: j, maxDepth: D } = v, S = l(), y = e.current.getViewportPageSize(), M = e.current.getColumnIndex(L), $ = L ? e.current.getColumnIndex(L) : 0, E = 0, N = S.length - 1, T = 0, P = ft(e).length - 1;
      let A = true;
      switch (w.key) {
        case "ArrowDown": {
          j === D - 1 ? a(M, w) : c(M, F + 1, w);
          break;
        }
        case "ArrowUp": {
          j > 0 && c(M, F - 1, w);
          break;
        }
        case "ArrowRight": {
          const R = I.length - I.indexOf(L) - 1;
          M + R + 1 <= P && c(M + R + 1, F, w);
          break;
        }
        case "ArrowLeft": {
          const R = I.indexOf(L);
          M - R - 1 >= T && c(M - R - 1, F, w);
          break;
        }
        case "PageDown": {
          N !== null && i($, p(Math.min(E + y, N)));
          break;
        }
        case "Home": {
          c(T, F, w);
          break;
        }
        case "End": {
          c(P, F, w);
          break;
        }
        case " ":
          break;
        default:
          A = false;
      }
      A && w.preventDefault();
    }, [
      e,
      l,
      a,
      c,
      i,
      p
    ]), m = d.useCallback((v, w) => {
      if (Jn(w)) return;
      const k = e.current.getCellParams(v.id, v.field);
      if (k.cellMode === tt.Edit || !zl(w.key) || !e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: w,
        cell: k
      })) return;
      const F = l();
      if (F.length === 0) return;
      const I = e.current.getViewportPageSize(), j = n ? () => 0 : e.current.getColumnIndex, D = v.field ? j(v.field) : 0, S = F.findIndex((P) => P.id === v.id), y = 0, M = F.length - 1, $ = 0, N = (n ? [
        Xo(e.current.state)
      ] : ft(e)).length - 1;
      let T = true;
      switch (w.key) {
        case "ArrowDown": {
          S < M && i(D, p(S + 1), o ? "right" : "left", "down");
          break;
        }
        case "ArrowUp": {
          S > y ? i(D, p(S - 1)) : s ? u(D, w) : a(D, w);
          break;
        }
        case "ArrowRight": {
          const P = Ps({
            currentColIndex: D,
            firstColIndex: $,
            lastColIndex: N,
            isRtl: o
          });
          P !== null && i(P, p(S), o ? "left" : "right");
          break;
        }
        case "ArrowLeft": {
          const P = Ss({
            currentColIndex: D,
            firstColIndex: $,
            lastColIndex: N,
            isRtl: o
          });
          P !== null && i(P, p(S), o ? "right" : "left");
          break;
        }
        case "Tab": {
          w.shiftKey && D > $ ? i(D - 1, p(S), "left") : !w.shiftKey && D < N && i(D + 1, p(S), "right");
          break;
        }
        case " ": {
          if (v.field === Yl) break;
          const A = v.colDef;
          if (A && (A.field === Oy || mv(A.field))) break;
          !w.shiftKey && S < M && i(D, p(Math.min(S + I, M)));
          break;
        }
        case "PageDown": {
          S < M && i(D, p(Math.min(S + I, M)));
          break;
        }
        case "PageUp": {
          const P = Math.max(S - I, y);
          P !== S && P >= y ? i(D, p(P)) : a(D, w);
          break;
        }
        case "Home": {
          w.ctrlKey || w.metaKey || w.shiftKey ? i($, p(y)) : i($, p(S));
          break;
        }
        case "End": {
          w.ctrlKey || w.metaKey || w.shiftKey ? i(N, p(M)) : i(N, p(S));
          break;
        }
        default:
          T = false;
      }
      T && w.preventDefault();
    }, [
      e,
      l,
      o,
      i,
      p,
      s,
      u,
      a,
      n
    ]), x = d.useCallback((v, { event: w }) => w.key === " " ? false : v, []);
    at(e, "canStartEditing", x), le(e, "columnHeaderKeyDown", g), le(e, "headerFilterKeyDown", b), le(e, "columnGroupHeaderKeyDown", h), le(e, "cellKeyDown", m);
  }, _I = (e, t) => {
    var _a2, _b2;
    const r = Mt(e, "useGridRowCount"), o = X(e, Fi), n = X(e, $o), l = X(e, wn), s = X(e, Rt), i = Lr(() => Rt(e).pageSize);
    e.current.registerControlState({
      stateId: "paginationRowCount",
      propModel: t.rowCount,
      propOnChange: t.onRowCountChange,
      stateSelector: $o,
      changeEvent: "rowCountChange"
    });
    const u = {
      setRowCount: d.useCallback((h) => {
        n !== h && (r.debug("Setting 'rowCount' to", h), e.current.setState((m) => C({}, m, {
          pagination: C({}, m.pagination, {
            rowCount: h
          })
        })));
      }, [
        e,
        r,
        n
      ])
    };
    Oe(e, u, "public");
    const c = d.useCallback((h, m) => {
      var _a3, _b3;
      const x = $o(e);
      return !m.exportOnlyDirtyModels || t.rowCount != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.rowCount) != null ? C({}, h, {
        pagination: C({}, h.pagination, {
          rowCount: x
        })
      }) : h;
    }, [
      e,
      t.rowCount,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.rowCount
    ]), p = d.useCallback((h, m) => {
      var _a3;
      const x = ((_a3 = m.stateToRestore.pagination) == null ? void 0 : _a3.rowCount) ? m.stateToRestore.pagination.rowCount : $o(e);
      return e.current.setState((v) => C({}, v, {
        pagination: C({}, v.pagination, {
          rowCount: x
        })
      })), h;
    }, [
      e
    ]);
    at(e, "exportState", c), at(e, "restoreState", p);
    const g = d.useCallback((h) => {
      t.paginationMode === "client" || !i.current || h.pageSize !== i.current && (i.current = h.pageSize, n === -1 && e.current.setPage(0));
    }, [
      t.paginationMode,
      i,
      n,
      e
    ]);
    le(e, "paginationModelChange", g), d.useEffect(() => {
      t.paginationMode === "client" ? e.current.setRowCount(o) : t.rowCount != null && e.current.setRowCount(t.rowCount);
    }, [
      e,
      t.paginationMode,
      o,
      t.rowCount
    ]);
    const b = l.hasNextPage === false;
    d.useEffect(() => {
      b && n === -1 && e.current.setRowCount(s.pageSize * s.page + o);
    }, [
      e,
      o,
      b,
      n,
      s
    ]);
  }, GI = (e, t) => {
    var _a2, _b2;
    const r = Mt(e, "useGridPaginationMeta"), o = X(e, wn);
    e.current.registerControlState({
      stateId: "paginationMeta",
      propModel: t.paginationMeta,
      propOnChange: t.onPaginationMetaChange,
      stateSelector: wn,
      changeEvent: "paginationMetaChange"
    });
    const l = {
      setPaginationMeta: d.useCallback((a) => {
        o !== a && (r.debug("Setting 'paginationMeta' to", a), e.current.setState((u) => C({}, u, {
          pagination: C({}, u.pagination, {
            meta: a
          })
        })));
      }, [
        e,
        r,
        o
      ])
    };
    Oe(e, l, "public");
    const s = d.useCallback((a, u) => {
      var _a3, _b3;
      const c = wn(e);
      return !u.exportOnlyDirtyModels || t.paginationMeta != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.meta) != null ? C({}, a, {
        pagination: C({}, a.pagination, {
          meta: c
        })
      }) : a;
    }, [
      e,
      t.paginationMeta,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.meta
    ]), i = d.useCallback((a, u) => {
      var _a3;
      const c = ((_a3 = u.stateToRestore.pagination) == null ? void 0 : _a3.meta) ? u.stateToRestore.pagination.meta : wn(e);
      return e.current.setState((p) => C({}, p, {
        pagination: C({}, p.pagination, {
          meta: c
        })
      })), a;
    }, [
      e
    ]);
    at(e, "exportState", s), at(e, "restoreState", i), d.useEffect(() => {
      t.paginationMeta && e.current.setPaginationMeta(t.paginationMeta);
    }, [
      e,
      t.paginationMeta
    ]);
  }, VI = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2;
    const r = C({}, id(t.autoPageSize), t.paginationModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel));
    ad(r.pageSize, t.signature);
    const o = t.rowCount ?? ((_d2 = (_c2 = t.initialState) == null ? void 0 : _c2.pagination) == null ? void 0 : _d2.rowCount) ?? (t.paginationMode === "client" ? (_e = e.rows) == null ? void 0 : _e.totalRowCount : void 0), n = t.paginationMeta ?? ((_g2 = (_f2 = t.initialState) == null ? void 0 : _f2.pagination) == null ? void 0 : _g2.meta) ?? {};
    return C({}, e, {
      pagination: C({}, e.pagination, {
        paginationModel: r,
        rowCount: o,
        meta: n,
        enabled: t.pagination === true,
        paginationMode: t.paginationMode
      })
    });
  }, BI = (e, t) => {
    GI(e, t), FI(e, t), _I(e, t);
  }, WI = (e, t) => {
    var _a2;
    return C({}, e, {
      preferencePanel: ((_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel) ?? {
        open: false
      }
    });
  }, UI = (e, t) => {
    var _a2;
    const r = Mt(e, "useGridPreferencesPanel"), o = d.useCallback(() => {
      e.current.setState((i) => {
        if (!i.preferencePanel.open) return i;
        r.debug("Hiding Preferences Panel");
        const a = Rn(i);
        return e.current.publishEvent("preferencePanelClose", {
          openedPanelValue: a.openedPanelValue
        }), C({}, i, {
          preferencePanel: {
            open: false
          }
        });
      });
    }, [
      e,
      r
    ]), n = d.useCallback((i, a, u) => {
      r.debug("Opening Preferences Panel"), e.current.setState((c) => C({}, c, {
        preferencePanel: C({}, c.preferencePanel, {
          open: true,
          openedPanelValue: i,
          panelId: a,
          labelId: u
        })
      })), e.current.publishEvent("preferencePanelOpen", {
        openedPanelValue: i
      });
    }, [
      r,
      e
    ]);
    Oe(e, {
      showPreferences: n,
      hidePreferences: o
    }, "public");
    const l = d.useCallback((i, a) => {
      var _a3;
      const u = Rn(e.current.state);
      return !a.exportOnlyDirtyModels || ((_a3 = t.initialState) == null ? void 0 : _a3.preferencePanel) != null || u.open ? C({}, i, {
        preferencePanel: u
      }) : i;
    }, [
      e,
      (_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel
    ]), s = d.useCallback((i, a) => {
      const u = a.stateToRestore.preferencePanel;
      return u != null && e.current.setState((c) => C({}, c, {
        preferencePanel: u
      })), i;
    }, [
      e
    ]);
    at(e, "exportState", l), at(e, "restoreState", s);
  }, Js = (e) => {
    switch (e.type) {
      case "boolean":
        return false;
      case "date":
      case "dateTime":
      case "number":
        return;
      case "singleSelect":
        return null;
      default:
        return "";
    }
  }, qI = [
    "id",
    "field"
  ], KI = [
    "id",
    "field"
  ], YI = (e, t) => {
    const [r, o] = d.useState({}), n = d.useRef(r), l = d.useRef({}), { processRowUpdate: s, onProcessRowUpdateError: i, cellModesModel: a, onCellModesModelChange: u } = t, c = (T) => (...P) => {
      t.editMode === $r.Cell && T(...P);
    }, p = d.useCallback((T, P) => {
      const A = e.current.getCellParams(T, P);
      if (!e.current.isCellEditable(A)) throw new Error(`MUI X: The cell with id=${T} and field=${P} is not editable.`);
    }, [
      e
    ]), g = d.useCallback((T, P, A) => {
      if (e.current.getCellMode(T, P) !== A) throw new Error(`MUI X: The cell with id=${T} and field=${P} is not in ${A} mode.`);
    }, [
      e
    ]), b = d.useCallback((T, P) => {
      if (!T.isEditable || T.cellMode === tt.Edit) return;
      const A = C({}, T, {
        reason: Nr.cellDoubleClick
      });
      e.current.publishEvent("cellEditStart", A, P);
    }, [
      e
    ]), h = d.useCallback((T, P) => {
      if (T.cellMode === tt.View || e.current.getCellMode(T.id, T.field) === tt.View) return;
      const A = C({}, T, {
        reason: xr.cellFocusOut
      });
      e.current.publishEvent("cellEditStop", A, P);
    }, [
      e
    ]), m = d.useCallback((T, P) => {
      if (T.cellMode === tt.Edit) {
        if (P.which === 229) return;
        let A;
        if (P.key === "Escape" ? A = xr.escapeKeyDown : P.key === "Enter" ? A = xr.enterKeyDown : P.key === "Tab" && (A = P.shiftKey ? xr.shiftTabKeyDown : xr.tabKeyDown, P.preventDefault()), A) {
          const R = C({}, T, {
            reason: A
          });
          e.current.publishEvent("cellEditStop", R, P);
        }
      } else if (T.isEditable) {
        let A;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: P,
          cellParams: T,
          editMode: "cell"
        })) return;
        if (_d(P) ? A = Nr.printableKeyDown : Vd(P) ? A = Nr.pasteKeyDown : P.key === "Enter" ? A = Nr.enterKeyDown : (P.key === "Backspace" || P.key === "Delete") && (A = Nr.deleteKeyDown), A) {
          const z = C({}, T, {
            reason: A,
            key: P.key
          });
          e.current.publishEvent("cellEditStart", z, P);
        }
      }
    }, [
      e
    ]), x = d.useCallback((T) => {
      const { id: P, field: A, reason: R } = T, z = {
        id: P,
        field: A
      };
      (R === Nr.printableKeyDown || R === Nr.deleteKeyDown || R === Nr.pasteKeyDown) && (z.deleteValue = true), e.current.startCellEditMode(z);
    }, [
      e
    ]), v = d.useCallback((T) => {
      const { id: P, field: A, reason: R } = T;
      e.current.runPendingEditCellValueMutation(P, A);
      let z;
      R === xr.enterKeyDown ? z = "below" : R === xr.tabKeyDown ? z = "right" : R === xr.shiftTabKeyDown && (z = "left");
      const _ = R === "escapeKeyDown";
      e.current.stopCellEditMode({
        id: P,
        field: A,
        ignoreModifications: _,
        cellToFocusAfter: z
      });
    }, [
      e
    ]), w = (T) => async (...P) => {
      var _a2;
      if (T) {
        const { id: A, field: R } = P[0];
        ((_a2 = e.current.state.editRows[A][R]) == null ? void 0 : _a2.error) || T(...P);
      }
    };
    le(e, "cellDoubleClick", c(b)), le(e, "cellFocusOut", c(h)), le(e, "cellKeyDown", c(m)), le(e, "cellEditStart", c(x)), le(e, "cellEditStop", c(v)), rt(e, "cellEditStart", t.onCellEditStart), rt(e, "cellEditStop", w(t.onCellEditStop));
    const k = d.useCallback((T, P) => {
      const A = Pt(e.current.state);
      return A[T] && A[T][P] ? tt.Edit : tt.View;
    }, [
      e
    ]), L = Be((T) => {
      const P = T !== t.cellModesModel;
      u && P && u(T, {
        api: e.current
      }), !(t.cellModesModel && P) && (o(T), n.current = T, e.current.publishEvent("cellModesModelChange", T));
    }), F = d.useCallback((T, P, A) => {
      const R = C({}, n.current);
      if (A !== null) R[T] = C({}, R[T], {
        [P]: C({}, A)
      });
      else {
        const z = R[T], _ = fe(z, [
          P
        ].map(Hn));
        R[T] = _, Object.keys(R[T]).length === 0 && delete R[T];
      }
      L(R);
    }, [
      L
    ]), I = d.useCallback((T, P, A) => {
      e.current.setState((R) => {
        const z = C({}, R.editRows);
        return A !== null ? z[T] = C({}, z[T], {
          [P]: C({}, A)
        }) : (delete z[T][P], Object.keys(z[T]).length === 0 && delete z[T]), C({}, R, {
          editRows: z
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), j = d.useCallback((T) => {
      const { id: P, field: A } = T, R = fe(T, qI);
      p(P, A), g(P, A, tt.View), F(P, A, C({
        mode: tt.Edit
      }, R));
    }, [
      p,
      g,
      F
    ]), D = Be(async (T) => {
      const { id: P, field: A, deleteValue: R, initialValue: z } = T, _ = e.current.getCellValue(P, A);
      let H = _;
      R ? H = Js(e.current.getColumn(A)) : z && (H = z);
      const G = e.current.getColumn(A), U = !!G.preProcessEditCellProps && R;
      let B = {
        value: H,
        error: false,
        isProcessingProps: U
      };
      if (I(P, A, B), e.current.setCellFocus(P, A), U && (B = await Promise.resolve(G.preProcessEditCellProps({
        id: P,
        row: e.current.getRow(P),
        props: B,
        hasChanged: H !== _
      })), e.current.getCellMode(P, A) === tt.Edit)) {
        const q = Pt(e.current.state);
        I(P, A, C({}, B, {
          value: q[P][A].value,
          isProcessingProps: false
        }));
      }
    }), S = d.useCallback((T) => {
      const { id: P, field: A } = T, R = fe(T, KI);
      g(P, A, tt.Edit), F(P, A, C({
        mode: tt.View
      }, R));
    }, [
      g,
      F
    ]), y = Be(async (T) => {
      const { id: P, field: A, ignoreModifications: R, cellToFocusAfter: z = "none" } = T;
      g(P, A, tt.Edit), e.current.runPendingEditCellValueMutation(P, A);
      const _ = () => {
        I(P, A, null), F(P, A, null), z !== "none" && e.current.moveFocusToRelativeCell(P, A, z);
      };
      if (R) {
        _();
        return;
      }
      const H = Pt(e.current.state), { error: G, isProcessingProps: U } = H[P][A];
      if (G || U) {
        l.current[P][A].mode = tt.Edit, F(P, A, {
          mode: tt.Edit
        });
        return;
      }
      const B = e.current.getRowWithUpdatedValuesFromCellEditing(P, A);
      if (s) {
        const q = (W) => {
          l.current[P][A].mode = tt.Edit, F(P, A, {
            mode: tt.Edit
          }), i && i(W);
        };
        try {
          const W = e.current.getRow(P);
          Promise.resolve(s(B, W, {
            rowId: P
          })).then((te) => {
            e.current.updateRows([
              te
            ]), _();
          }).catch(q);
        } catch (W) {
          q(W);
        }
      } else e.current.updateRows([
        B
      ]), _();
    }), M = d.useCallback(async (T) => {
      var _a2, _b2;
      const { id: P, field: A, value: R, debounceMs: z, unstable_skipValueParser: _ } = T;
      p(P, A), g(P, A, tt.Edit);
      const H = e.current.getColumn(A), G = e.current.getRow(P);
      let U = R;
      H.valueParser && !_ && (U = H.valueParser(R, G, H, e));
      let B = Pt(e.current.state), q = C({}, B[P][A], {
        value: U,
        changeReason: z ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      if (H.preProcessEditCellProps) {
        const W = R !== B[P][A].value;
        q = C({}, q, {
          isProcessingProps: true
        }), I(P, A, q), q = await Promise.resolve(H.preProcessEditCellProps({
          id: P,
          row: G,
          props: q,
          hasChanged: W
        }));
      }
      return e.current.getCellMode(P, A) === tt.View ? false : (B = Pt(e.current.state), q = C({}, q, {
        isProcessingProps: false
      }), q.value = H.preProcessEditCellProps ? B[P][A].value : U, I(P, A, q), B = Pt(e.current.state), !((_b2 = (_a2 = B[P]) == null ? void 0 : _a2[A]) == null ? void 0 : _b2.error));
    }, [
      e,
      p,
      g,
      I
    ]), $ = d.useCallback((T, P) => {
      const A = e.current.getColumn(P), R = Pt(e.current.state), z = e.current.getRow(T);
      if (!R[T] || !R[T][P]) return e.current.getRow(T);
      const { value: _ } = R[T][P];
      return A.valueSetter ? A.valueSetter(_, z, A, e) : C({}, z, {
        [P]: _
      });
    }, [
      e
    ]), E = {
      getCellMode: k,
      startCellEditMode: j,
      stopCellEditMode: S
    }, N = {
      setCellEditingEditCellValue: M,
      getRowWithUpdatedValuesFromCellEditing: $
    };
    Oe(e, E, "public"), Oe(e, N, "private"), d.useEffect(() => {
      a && L(a);
    }, [
      a,
      L
    ]), Tt(() => {
      const T = ur(e), P = l.current;
      l.current = $u(r), Object.entries(r).forEach(([A, R]) => {
        Object.entries(R).forEach(([z, _]) => {
          var _a2, _b2;
          const H = ((_b2 = (_a2 = P[A]) == null ? void 0 : _a2[z]) == null ? void 0 : _b2.mode) || tt.View, G = T[A] ? e.current.getRowId(T[A]) : A;
          _.mode === tt.Edit && H === tt.View ? D(C({
            id: G,
            field: z
          }, _)) : _.mode === tt.View && H === tt.Edit && y(C({
            id: G,
            field: z
          }, _));
        });
      });
    }, [
      e,
      r,
      D,
      y
    ]);
  }, XI = [
    "id"
  ], QI = [
    "id"
  ], ZI = (e, t) => {
    const [r, o] = d.useState({}), n = d.useRef(r), l = d.useRef({}), s = d.useRef({}), i = d.useRef(void 0), a = d.useRef(null), { processRowUpdate: u, onProcessRowUpdateError: c, rowModesModel: p, onRowModesModelChange: g } = t, b = (_) => (...H) => {
      t.editMode === $r.Row && _(...H);
    }, h = d.useCallback((_, H) => {
      const G = e.current.getCellParams(_, H);
      if (!e.current.isCellEditable(G)) throw new Error(`MUI X: The cell with id=${_} and field=${H} is not editable.`);
    }, [
      e
    ]), m = d.useCallback((_, H) => {
      if (e.current.getRowMode(_) !== H) throw new Error(`MUI X: The row with id=${_} is not in ${H} mode.`);
    }, [
      e
    ]), x = d.useCallback((_) => {
      const H = Pt(e.current.state);
      return Object.values(H[_]).some((G) => G.error);
    }, [
      e
    ]), v = d.useCallback((_, H) => {
      if (!_.isEditable || e.current.getRowMode(_.id) === st.Edit) return;
      const G = e.current.getRowParams(_.id), U = C({}, G, {
        field: _.field,
        reason: Qr.cellDoubleClick
      });
      e.current.publishEvent("rowEditStart", U, H);
    }, [
      e
    ]), w = d.useCallback((_) => {
      a.current = _;
    }, []), k = d.useCallback((_, H) => {
      _.isEditable && e.current.getRowMode(_.id) !== st.View && (a.current = null, i.current = setTimeout(() => {
        var _a2;
        if (((_a2 = a.current) == null ? void 0 : _a2.id) !== _.id) {
          if (!e.current.getRow(_.id) || e.current.getRowMode(_.id) === st.View || x(_.id)) return;
          const G = e.current.getRowParams(_.id), U = C({}, G, {
            field: _.field,
            reason: kr.rowFocusOut
          });
          e.current.publishEvent("rowEditStop", U, H);
        }
      }));
    }, [
      e,
      x
    ]);
    d.useEffect(() => () => {
      clearTimeout(i.current);
    }, []);
    const L = d.useCallback((_, H) => {
      if (_.cellMode === st.Edit) {
        if (H.which === 229) return;
        let G;
        if (H.key === "Escape") G = kr.escapeKeyDown;
        else if (H.key === "Enter") G = kr.enterKeyDown;
        else if (H.key === "Tab") {
          const U = Jo(e).filter((B) => e.current.getColumn(B).type === ql ? true : e.current.isCellEditable(e.current.getCellParams(_.id, B)));
          if (H.shiftKey ? _.field === U[0] && (G = kr.shiftTabKeyDown) : _.field === U[U.length - 1] && (G = kr.tabKeyDown), H.preventDefault(), !G) {
            const B = U.findIndex((W) => W === _.field), q = U[H.shiftKey ? B - 1 : B + 1];
            e.current.setCellFocus(_.id, q);
          }
        }
        if (G) {
          if (G !== kr.escapeKeyDown && x(_.id)) return;
          const U = C({}, e.current.getRowParams(_.id), {
            reason: G,
            field: _.field
          });
          e.current.publishEvent("rowEditStop", U, H);
        }
      } else if (_.isEditable) {
        let G;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: H,
          cellParams: _,
          editMode: "row"
        })) return;
        if (_d(H) || Vd(H) ? G = Qr.printableKeyDown : H.key === "Enter" ? G = Qr.enterKeyDown : (H.key === "Backspace" || H.key === "Delete") && (G = Qr.deleteKeyDown), G) {
          const B = e.current.getRowParams(_.id), q = C({}, B, {
            field: _.field,
            reason: G
          });
          e.current.publishEvent("rowEditStart", q, H);
        }
      }
    }, [
      e,
      x
    ]), F = d.useCallback((_) => {
      const { id: H, field: G, reason: U } = _, B = {
        id: H,
        fieldToFocus: G
      };
      (U === Qr.printableKeyDown || U === Qr.deleteKeyDown) && (B.deleteValue = !!G), e.current.startRowEditMode(B);
    }, [
      e
    ]), I = d.useCallback((_) => {
      const { id: H, reason: G, field: U } = _;
      e.current.runPendingEditCellValueMutation(H);
      let B;
      G === kr.enterKeyDown ? B = "below" : G === kr.tabKeyDown ? B = "right" : G === kr.shiftTabKeyDown && (B = "left");
      const q = G === "escapeKeyDown";
      e.current.stopRowEditMode({
        id: H,
        ignoreModifications: q,
        field: U,
        cellToFocusAfter: B
      });
    }, [
      e
    ]);
    le(e, "cellDoubleClick", b(v)), le(e, "cellFocusIn", b(w)), le(e, "cellFocusOut", b(k)), le(e, "cellKeyDown", b(L)), le(e, "rowEditStart", b(F)), le(e, "rowEditStop", b(I)), rt(e, "rowEditStart", t.onRowEditStart), rt(e, "rowEditStop", t.onRowEditStop);
    const j = d.useCallback((_) => Ad(e, {
      rowId: _,
      editMode: t.editMode
    }) ? st.Edit : st.View, [
      e,
      t.editMode
    ]), D = Be((_) => {
      const H = _ !== t.rowModesModel;
      g && H && g(_, {
        api: e.current
      }), !(t.rowModesModel && H) && (o(_), n.current = _, e.current.publishEvent("rowModesModelChange", _));
    }), S = d.useCallback((_, H) => {
      const G = C({}, n.current);
      H !== null ? G[_] = C({}, H) : delete G[_], D(G);
    }, [
      D
    ]), y = d.useCallback((_, H) => {
      e.current.setState((G) => {
        const U = C({}, G.editRows);
        return H !== null ? U[_] = H : delete U[_], C({}, G, {
          editRows: U
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), M = d.useCallback((_, H, G) => {
      e.current.setState((U) => {
        const B = C({}, U.editRows);
        return G !== null ? B[_] = C({}, B[_], {
          [H]: C({}, G)
        }) : (delete B[_][H], Object.keys(B[_]).length === 0 && delete B[_]), C({}, U, {
          editRows: B
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), $ = d.useCallback((_) => {
      const { id: H } = _, G = fe(_, XI);
      m(H, st.View), S(H, C({
        mode: st.Edit
      }, G));
    }, [
      m,
      S
    ]), E = Be((_) => {
      const { id: H, fieldToFocus: G, deleteValue: U, initialValue: B } = _, q = e.current.getRow(H), W = hr(e), te = W.reduce((Z, re) => {
        const ce = re.field;
        if (!e.current.getCellParams(H, ce).isEditable) return Z;
        const Y = e.current.getColumn(ce);
        let ne = e.current.getCellValue(H, ce);
        return G === ce && (U || B) && (U ? ne = Js(Y) : B && (ne = B)), Z[ce] = {
          value: ne,
          error: false,
          isProcessingProps: Y.editable && !!Y.preProcessEditCellProps && U
        }, Z;
      }, {});
      s.current[H] = q, y(H, te), G && e.current.setCellFocus(H, G), W.filter((Z) => e.current.getCellParams(H, Z.field).isEditable && Z.editable && !!Z.preProcessEditCellProps && U).forEach((Z) => {
        const re = Z.field, ce = e.current.getCellValue(H, re), Ce = U ? Js(Z) : B ?? ce;
        Promise.resolve(Z.preProcessEditCellProps({
          id: H,
          row: q,
          props: te[re],
          hasChanged: Ce !== ce
        })).then((Y) => {
          if (e.current.getRowMode(H) === st.Edit) {
            const ne = Pt(e.current.state);
            M(H, re, C({}, Y, {
              value: ne[H][re].value,
              isProcessingProps: false
            }));
          }
        });
      });
    }), N = d.useCallback((_) => {
      const { id: H } = _, G = fe(_, QI);
      m(H, st.Edit), S(H, C({
        mode: st.View
      }, G));
    }, [
      m,
      S
    ]), T = Be((_) => {
      const { id: H, ignoreModifications: G, field: U, cellToFocusAfter: B = "none" } = _;
      e.current.runPendingEditCellValueMutation(H);
      const q = () => {
        B !== "none" && U && e.current.moveFocusToRelativeCell(H, U, B), y(H, null), S(H, null), delete s.current[H];
      };
      if (G) {
        q();
        return;
      }
      const W = Pt(e.current.state), te = s.current[H];
      if (Object.values(W[H]).some((ce) => ce.isProcessingProps)) {
        l.current[H].mode = st.Edit;
        return;
      }
      if (x(H)) {
        l.current[H].mode = st.Edit, S(H, {
          mode: st.Edit
        });
        return;
      }
      const re = e.current.getRowWithUpdatedValuesFromRowEditing(H);
      if (u) {
        const ce = (Ce) => {
          l.current[H] && (l.current[H].mode = st.Edit, S(H, {
            mode: st.Edit
          })), c && c(Ce);
        };
        try {
          Promise.resolve(u(re, te, {
            rowId: H
          })).then((Ce) => {
            e.current.updateRows([
              Ce
            ]), q();
          }).catch(ce);
        } catch (Ce) {
          ce(Ce);
        }
      } else e.current.updateRows([
        re
      ]), q();
    }), P = d.useCallback((_) => {
      const { id: H, field: G, value: U, debounceMs: B, unstable_skipValueParser: q } = _;
      h(H, G);
      const W = e.current.getColumn(G), te = e.current.getRow(H);
      let Z = U;
      W.valueParser && !q && (Z = W.valueParser(U, te, W, e));
      let re = Pt(e.current.state), ce = C({}, re[H][G], {
        value: Z,
        changeReason: B ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      return W.preProcessEditCellProps || M(H, G, ce), new Promise((Ce) => {
        const Y = [];
        if (W.preProcessEditCellProps) {
          const ne = ce.value !== re[H][G].value;
          ce = C({}, ce, {
            isProcessingProps: true
          }), M(H, G, ce);
          const he = re[H], J = fe(he, [
            G
          ].map(Hn)), Ie = Promise.resolve(W.preProcessEditCellProps({
            id: H,
            row: te,
            props: ce,
            hasChanged: ne,
            otherFieldsProps: J
          })).then((ee) => {
            if (e.current.getRowMode(H) === st.View) {
              Ce(false);
              return;
            }
            re = Pt(e.current.state), ee = C({}, ee, {
              isProcessingProps: false
            }), ee.value = W.preProcessEditCellProps ? re[H][G].value : Z, M(H, G, ee);
          });
          Y.push(Ie);
        }
        Object.entries(re[H]).forEach(([ne, he]) => {
          if (ne === G) return;
          const J = e.current.getColumn(ne);
          if (!J.preProcessEditCellProps) return;
          he = C({}, he, {
            isProcessingProps: true
          }), M(H, ne, he), re = Pt(e.current.state);
          const Ie = re[H], ee = fe(Ie, [
            ne
          ].map(Hn)), Se = Promise.resolve(J.preProcessEditCellProps({
            id: H,
            row: te,
            props: he,
            hasChanged: false,
            otherFieldsProps: ee
          })).then((xe) => {
            if (e.current.getRowMode(H) === st.View) {
              Ce(false);
              return;
            }
            xe = C({}, xe, {
              isProcessingProps: false
            }), M(H, ne, xe);
          });
          Y.push(Se);
        }), Promise.all(Y).then(() => {
          e.current.getRowMode(H) === st.Edit ? (re = Pt(e.current.state), Ce(!re[H][G].error)) : Ce(false);
        });
      });
    }, [
      e,
      h,
      M
    ]), A = d.useCallback((_) => {
      const H = Pt(e.current.state), G = e.current.getRow(_);
      if (!H[_]) return e.current.getRow(_);
      let U = C({}, s.current[_], G);
      return Object.entries(H[_]).forEach(([B, q]) => {
        const W = e.current.getColumn(B);
        (W == null ? void 0 : W.valueSetter) ? U = W.valueSetter(q.value, U, W, e) : U[B] = q.value;
      }), U;
    }, [
      e
    ]), R = {
      getRowMode: j,
      startRowEditMode: $,
      stopRowEditMode: N
    }, z = {
      setRowEditingEditCellValue: P,
      getRowWithUpdatedValuesFromRowEditing: A
    };
    Oe(e, R, "public"), Oe(e, z, "private"), d.useEffect(() => {
      p && D(p);
    }, [
      p,
      D
    ]), Tt(() => {
      const _ = ur(e), H = l.current;
      l.current = $u(r);
      const G = /* @__PURE__ */ new Set([
        ...Object.keys(r),
        ...Object.keys(H)
      ]);
      Array.from(G).forEach((U) => {
        var _a2;
        const B = r[U] ?? {
          mode: st.View
        }, q = ((_a2 = H[U]) == null ? void 0 : _a2.mode) || st.View, W = _[U] ? e.current.getRowId(_[U]) : U;
        B.mode === st.Edit && q === st.View ? E(C({
          id: W
        }, B)) : B.mode === st.View && q === st.Edit && T(C({
          id: W
        }, B));
      });
    }, [
      e,
      r,
      E,
      T
    ]);
  }, JI = (e) => C({}, e, {
    editRows: {}
  }), eM = (e, t) => {
    YI(e, t), ZI(e, t);
    const r = d.useRef({}), { isCellEditable: o } = t, n = d.useCallback((g) => Ko(g.rowNode) || !g.colDef.editable || !g.colDef.renderEditCell ? false : o ? o(g) : true, [
      o
    ]), l = (g, b, h, m) => {
      if (!h) {
        m();
        return;
      }
      if (r.current[g] || (r.current[g] = {}), r.current[g][b]) {
        const [w] = r.current[g][b];
        clearTimeout(w);
      }
      const x = () => {
        const [w] = r.current[g][b];
        clearTimeout(w), m(), delete r.current[g][b];
      }, v = setTimeout(() => {
        m(), delete r.current[g][b];
      }, h);
      r.current[g][b] = [
        v,
        x
      ];
    };
    d.useEffect(() => {
      const g = r.current;
      return () => {
        Object.entries(g).forEach(([b, h]) => {
          Object.keys(h).forEach((m) => {
            const [x] = g[b][m];
            clearTimeout(x), delete g[b][m];
          });
        });
      };
    }, []);
    const s = d.useCallback((g, b) => {
      if (r.current[g]) {
        if (!b) Object.keys(r.current[g]).forEach((h) => {
          const [, m] = r.current[g][h];
          m();
        });
        else if (r.current[g][b]) {
          const [, h] = r.current[g][b];
          h();
        }
      }
    }, []), i = d.useCallback((g) => {
      const { id: b, field: h, debounceMs: m } = g;
      return new Promise((x) => {
        l(b, h, m, async () => {
          const v = t.editMode === $r.Row ? e.current.setRowEditingEditCellValue : e.current.setCellEditingEditCellValue;
          if (e.current.getCellMode(b, h) === tt.Edit) {
            const w = await v(g);
            x(w);
          }
        });
      });
    }, [
      e,
      t.editMode
    ]), a = d.useCallback((g, b) => t.editMode === $r.Cell ? e.current.getRowWithUpdatedValuesFromCellEditing(g, b) : e.current.getRowWithUpdatedValuesFromRowEditing(g), [
      e,
      t.editMode
    ]), u = d.useCallback((g, b) => {
      var _a2;
      return ((_a2 = Pt(e.current.state)[g]) == null ? void 0 : _a2[b]) ?? null;
    }, [
      e
    ]), c = {
      isCellEditable: n,
      setEditCellValue: i,
      getRowWithUpdatedValues: a,
      unstable_getEditCellMeta: u
    }, p = {
      runPendingEditCellValueMutation: s
    };
    Oe(e, c, "public"), Oe(e, p, "private");
  }, tM = (e, t, r) => {
    const o = !!t.unstable_dataSource;
    return r.current.caches.rows = Cl({
      rows: o ? [] : t.rows,
      getRowId: t.getRowId,
      loading: t.loading,
      rowCount: t.rowCount
    }), C({}, e, {
      rows: Uu({
        apiRef: r,
        rowCountProp: t.rowCount,
        loadingProp: o ? true : t.loading,
        previousTree: null,
        previousTreeDepths: null
      })
    });
  }, rM = (e, t) => {
    const r = Mt(e, "useGridRows"), o = d.useRef(Date.now()), n = d.useRef(t.rowCount), l = Jt(), s = d.useCallback((T) => {
      const P = ur(e)[T];
      if (P) return P;
      const A = e.current.getRowNode(T);
      return A && Ko(A) ? {
        [qo]: T
      } : null;
    }, [
      e
    ]), i = d.useCallback((T) => Xn(e.current.state, T), [
      e
    ]), a = d.useCallback(({ cache: T, throttle: P }) => {
      const A = () => {
        o.current = Date.now(), e.current.setState((z) => C({}, z, {
          rows: Uu({
            apiRef: e,
            rowCountProp: t.rowCount,
            loadingProp: t.loading,
            previousTree: xt(e),
            previousTreeDepths: za(e),
            previousGroupsToFetch: VC(e)
          })
        })), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
      };
      if (l.clear(), e.current.caches.rows = T, !P) {
        A();
        return;
      }
      const R = t.throttleRowsMs - (Date.now() - o.current);
      if (R > 0) {
        l.start(R, A);
        return;
      }
      A();
    }, [
      t.throttleRowsMs,
      t.rowCount,
      t.loading,
      e,
      l
    ]), u = d.useCallback((T) => {
      r.debug(`Updating all rows, new length ${T.length}`);
      const P = Cl({
        rows: T,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), A = e.current.caches.rows;
      P.rowsBeforePartialUpdates = A.rowsBeforePartialUpdates, a({
        cache: P,
        throttle: true
      });
    }, [
      r,
      t.getRowId,
      t.loading,
      t.rowCount,
      a,
      e
    ]), c = d.useCallback((T) => {
      if (t.signature === gr.DataGrid && T.length > 1) throw new Error([
        "MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      const P = Xa(e, T, t.getRowId), A = Ya({
        updates: P,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows
      });
      a({
        cache: A,
        throttle: true
      });
    }, [
      t.signature,
      t.getRowId,
      a,
      e
    ]), p = d.useCallback((T, P) => {
      const A = Xa(e, T, t.getRowId), R = Ya({
        updates: A,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows,
        groupKeys: P ?? []
      });
      a({
        cache: R,
        throttle: false
      });
    }, [
      t.getRowId,
      a,
      e
    ]), g = d.useCallback((T) => {
      T !== t.loading && (r.debug(`Setting loading to ${T}`), e.current.setState((P) => C({}, P, {
        rows: C({}, P.rows, {
          loading: T
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = T);
    }, [
      t.loading,
      e,
      r
    ]), b = d.useCallback(() => {
      const T = yn(e), P = ur(e);
      return new Map(T.map((A) => [
        A,
        P[A] ?? {}
      ]));
    }, [
      e
    ]), h = d.useCallback(() => Un(e), [
      e
    ]), m = d.useCallback(() => yn(e), [
      e
    ]), x = d.useCallback((T) => {
      const P = e.current.getRow(T), { rowToIndexMap: A } = ro(e);
      return A.get(P);
    }, [
      e
    ]), v = d.useCallback((T, P) => {
      const A = e.current.getRowNode(T);
      if (!A) throw new Error(`MUI X: No row with id #${T} found.`);
      if (A.type !== "group") throw new Error("MUI X: Only group nodes can be expanded or collapsed.");
      const R = C({}, A, {
        childrenExpanded: P
      });
      e.current.setState((z) => C({}, z, {
        rows: C({}, z.rows, {
          tree: C({}, z.rows.tree, {
            [T]: R
          })
        })
      })), e.current.forceUpdate(), e.current.publishEvent("rowExpansionChange", R);
    }, [
      e
    ]), w = d.useCallback((T) => xt(e)[T] ?? null, [
      e
    ]), k = d.useCallback(({ skipAutoGeneratedRows: T = true, groupId: P, applySorting: A, applyFiltering: R }) => {
      const z = xt(e);
      let _;
      if (A) {
        const H = z[P];
        if (!H) return [];
        const G = tn(e);
        _ = [];
        const U = G.findIndex((B) => B === P) + 1;
        for (let B = U; B < G.length && z[G[B]].depth > H.depth; B += 1) {
          const q = G[B];
          (!T || !Ko(z[q])) && _.push(q);
        }
      } else _ = Ii(z, P, T);
      if (R) {
        const H = rn(e);
        _ = _.filter((G) => H[G] !== false);
      }
      return _;
    }, [
      e
    ]), L = d.useCallback((T, P) => {
      const A = e.current.getRowNode(T);
      if (!A) throw new Error(`MUI X: No row with id #${T} found.`);
      if (A.parent !== Dt) throw new Error("MUI X: The row reordering do not support reordering of grouped rows yet.");
      if (A.type !== "leaf") throw new Error("MUI X: The row reordering do not support reordering of footer or grouping rows.");
      e.current.setState((R) => {
        const z = xt(R, e.current.instanceId)[Dt], _ = z.children, H = _.findIndex((U) => U === T);
        if (H === -1 || H === P) return R;
        r.debug(`Moving row ${T} to index ${P}`);
        const G = [
          ..._
        ];
        return G.splice(P, 0, G.splice(H, 1)[0]), C({}, R, {
          rows: C({}, R.rows, {
            tree: C({}, R.rows.tree, {
              [Dt]: C({}, z, {
                children: G
              })
            })
          })
        });
      }), e.current.publishEvent("rowsSet");
    }, [
      e,
      r
    ]), F = d.useCallback((T, P) => {
      if (t.signature === gr.DataGrid && P.length > 1) throw new Error([
        "MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      if (P.length === 0) return;
      if (Co(e) > 1) throw new Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
      const R = C({}, xt(e)), z = C({}, ur(e)), _ = C({}, Ha(e)), H = R[Dt], G = [
        ...H.children
      ], U = /* @__PURE__ */ new Set();
      for (let q = 0; q < P.length; q += 1) {
        const W = P[q], te = Kl(W, t.getRowId, "A row was provided without id when calling replaceRows()."), [Z] = G.splice(T + q, 1, te);
        U.has(Z) || (delete z[Z], delete _[Z], delete R[Z]);
        const re = {
          id: te,
          depth: 0,
          parent: Dt,
          type: "leaf",
          groupingKey: null
        };
        z[te] = W, _[te] = te, R[te] = re, U.add(te);
      }
      R[Dt] = C({}, H, {
        children: G
      });
      const B = G.filter((q) => {
        var _a2;
        return ((_a2 = R[q]) == null ? void 0 : _a2.type) === "leaf";
      });
      e.current.caches.rows.dataRowIdToModelLookup = z, e.current.caches.rows.dataRowIdToIdLookup = _, e.current.setState((q) => C({}, q, {
        rows: C({}, q.rows, {
          dataRowIdToModelLookup: z,
          dataRowIdToIdLookup: _,
          dataRowIds: B,
          tree: R
        })
      })), e.current.publishEvent("rowsSet");
    }, [
      e,
      t.signature,
      t.getRowId
    ]), I = {
      getRow: s,
      setLoading: g,
      getRowId: i,
      getRowModels: b,
      getRowsCount: h,
      getAllRowIds: m,
      setRows: u,
      updateRows: c,
      getRowNode: w,
      getRowIndexRelativeToVisibleRows: x,
      unstable_replaceRows: F
    }, j = {
      setRowIndex: L,
      setRowChildrenExpansion: v,
      getRowGroupChildren: k
    }, D = {
      updateServerRows: p
    }, S = d.useCallback(() => {
      r.info("Row grouping pre-processing have changed, regenerating the row tree");
      let T;
      e.current.caches.rows.rowsBeforePartialUpdates === t.rows ? T = C({}, e.current.caches.rows, {
        updates: {
          type: "full",
          rows: yn(e)
        }
      }) : T = Cl({
        rows: t.rows,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), a({
        cache: T,
        throttle: false
      });
    }, [
      r,
      e,
      t.rows,
      t.getRowId,
      t.loading,
      t.rowCount,
      a
    ]), y = Lr(() => t.unstable_dataSource), M = d.useCallback((T) => {
      if (t.unstable_dataSource && t.unstable_dataSource !== y.current) {
        y.current = t.unstable_dataSource;
        return;
      }
      T === "rowTreeCreation" && S();
    }, [
      S,
      y,
      t.unstable_dataSource
    ]), $ = d.useCallback(() => {
      e.current.getActiveStrategy("rowTree") !== BC(e) && S();
    }, [
      e,
      S
    ]);
    le(e, "activeStrategyProcessorChange", M), le(e, "strategyAvailabilityChange", $);
    const E = d.useCallback(() => {
      e.current.setState((T) => {
        const P = e.current.unstable_applyPipeProcessors("hydrateRows", {
          tree: xt(T, e.current.instanceId),
          treeDepths: za(T, e.current.instanceId),
          dataRowIds: yn(T, e.current.instanceId),
          dataRowIdToModelLookup: ur(T, e.current.instanceId),
          dataRowIdToIdLookup: Ha(T, e.current.instanceId)
        });
        return C({}, T, {
          rows: C({}, T.rows, P, {
            totalTopLevelRowCount: Wu({
              tree: P.tree,
              rowCountProp: t.rowCount
            })
          })
        });
      }), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
    }, [
      e,
      t.rowCount
    ]);
    Gi(e, "hydrateRows", E), Oe(e, I, "public"), Oe(e, j, t.signature === gr.DataGrid ? "private" : "public"), Oe(e, D, "private");
    const N = d.useRef(true);
    d.useEffect(() => {
      var _a2;
      if (N.current) {
        N.current = false;
        return;
      }
      let T = false;
      t.rowCount !== n.current && (T = true, n.current = t.rowCount);
      const P = e.current.caches.rows.rowsBeforePartialUpdates === t.rows, A = e.current.caches.rows.loadingPropBeforePartialUpdates === t.loading, R = e.current.caches.rows.rowCountPropBeforePartialUpdates === t.rowCount;
      P && (A || (e.current.setState((z) => C({}, z, {
        rows: C({}, z.rows, {
          loading: t.loading
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = t.loading, e.current.forceUpdate()), R || (e.current.setState((z) => C({}, z, {
        rows: C({}, z.rows, {
          totalRowCount: Math.max(t.rowCount || 0, z.rows.totalRowCount),
          totalTopLevelRowCount: Math.max(t.rowCount || 0, z.rows.totalTopLevelRowCount)
        })
      })), e.current.caches.rows.rowCountPropBeforePartialUpdates = t.rowCount, e.current.forceUpdate()), !T) || (r.debug(`Updating all rows, new length ${(_a2 = t.rows) == null ? void 0 : _a2.length}`), a({
        cache: Cl({
          rows: t.rows,
          getRowId: t.getRowId,
          loading: t.loading,
          rowCount: t.rowCount
        }),
        throttle: false
      }));
    }, [
      t.rows,
      t.rowCount,
      t.getRowId,
      t.loading,
      r,
      a,
      e
    ]);
  }, oM = (e) => {
    const t = {
      [Dt]: C({}, Iy(), {
        children: e
      })
    };
    for (let r = 0; r < e.length; r += 1) {
      const o = e[r];
      t[o] = {
        id: o,
        depth: 0,
        parent: Dt,
        type: "leaf",
        groupingKey: null
      };
    }
    return {
      groupingName: mo,
      tree: t,
      treeDepths: {
        0: e.length
      },
      dataRowIds: e
    };
  }, nM = ({ previousTree: e, actions: t }) => {
    const r = C({}, e), o = {};
    for (let s = 0; s < t.remove.length; s += 1) {
      const i = t.remove[s];
      o[i] = true, delete r[i];
    }
    for (let s = 0; s < t.insert.length; s += 1) {
      const i = t.insert[s];
      r[i] = {
        id: i,
        depth: 0,
        parent: Dt,
        type: "leaf",
        groupingKey: null
      };
    }
    const n = r[Dt];
    let l = [
      ...n.children,
      ...t.insert
    ];
    return Object.values(o).length && (l = l.filter((s) => !o[s])), r[Dt] = C({}, n, {
      children: l
    }), {
      groupingName: mo,
      tree: r,
      treeDepths: {
        0: l.length
      },
      dataRowIds: l
    };
  }, lM = (e) => e.updates.type === "full" ? oM(e.updates.rows) : nM({
    previousTree: e.previousTree,
    actions: e.updates.actions
  }), sM = (e) => {
    Gl(e, mo, "rowTreeCreation", lM);
  };
  class Is extends Error {
  }
  function iM(e, t) {
    var _a2;
    const r = d.useCallback((h) => ({
      field: h,
      colDef: e.current.getColumn(h)
    }), [
      e
    ]), o = d.useCallback((h) => {
      const m = e.current.getRow(h);
      if (!m) throw new Is(`No row with id #${h} found`);
      return {
        id: h,
        columns: e.current.getAllColumns(),
        row: m
      };
    }, [
      e
    ]), n = d.useCallback((h, m, x, { cellMode: v, colDef: w, hasFocus: k, rowNode: L, tabIndex: F }) => {
      const I = x[m], j = (w == null ? void 0 : w.valueGetter) ? w.valueGetter(I, x, w, e) : I, D = {
        id: h,
        field: m,
        row: x,
        rowNode: L,
        colDef: w,
        cellMode: v,
        hasFocus: k,
        tabIndex: F,
        value: j,
        formattedValue: j,
        isEditable: false,
        api: e.current
      };
      return w && w.valueFormatter && (D.formattedValue = w.valueFormatter(j, x, w, e)), D.isEditable = w && e.current.isCellEditable(D), D;
    }, [
      e
    ]), l = d.useCallback((h, m) => {
      var _a3;
      const x = e.current.getRow(h), v = e.current.getRowNode(h);
      if (!x || !v) throw new Is(`No row with id #${h} found`);
      const w = Wt(e), k = Ei(e), L = e.current.getCellMode(h, m);
      return e.current.getCellParamsForRow(h, m, x, {
        colDef: t.unstable_listView && ((_a3 = t.unstable_listColumn) == null ? void 0 : _a3.field) === m ? Xo(e.current.state) : e.current.getColumn(m),
        rowNode: v,
        hasFocus: w !== null && w.field === m && w.id === h,
        tabIndex: k && k.field === m && k.id === h ? 0 : -1,
        cellMode: L
      });
    }, [
      e,
      t.unstable_listView,
      (_a2 = t.unstable_listColumn) == null ? void 0 : _a2.field
    ]), s = d.useCallback((h, m) => {
      const x = e.current.getColumn(m), v = e.current.getRow(h);
      if (!v) throw new Is(`No row with id #${h} found`);
      return !x || !x.valueGetter ? v[m] : x.valueGetter(v[x.field], v, x, e);
    }, [
      e
    ]), i = d.useCallback((h, m) => {
      const x = m.field;
      if (!m || !m.valueGetter) return h[x];
      const v = h[m.field];
      return m.valueGetter(v, h, m, e);
    }, [
      e
    ]), a = d.useCallback((h, m) => {
      const x = i(h, m);
      return !m || !m.valueFormatter ? x : m.valueFormatter(x, h, m, e);
    }, [
      e,
      i
    ]), u = d.useCallback((h) => e.current.rootElementRef.current ? aS(e.current.rootElementRef.current, h) : null, [
      e
    ]), c = d.useCallback((h) => e.current.rootElementRef.current ? cS(e.current.rootElementRef.current, h) : null, [
      e
    ]), p = d.useCallback((h, m) => e.current.rootElementRef.current ? uS(e.current.rootElementRef.current, {
      id: h,
      field: m
    }) : null, [
      e
    ]), g = {
      getCellValue: s,
      getCellParams: l,
      getCellElement: p,
      getRowValue: i,
      getRowFormattedValue: a,
      getRowParams: o,
      getRowElement: c,
      getColumnHeaderParams: r,
      getColumnHeaderElement: u
    }, b = {
      getCellParamsForRow: n
    };
    Oe(e, g, "public"), Oe(e, b, "private");
  }
  const Xd = (e, t) => e == null || Array.isArray(e) ? e : t && t[0] === e ? t : [
    e
  ], aM = (e, t) => C({}, e, {
    rowSelection: t.rowSelection ? Xd(t.rowSelectionModel) ?? [] : []
  }), cM = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const r = Mt(e, "useGridSelection"), o = d.useCallback((R) => (...z) => {
      t.rowSelection && R(...z);
    }, [
      t.rowSelection
    ]), n = t.signature !== gr.DataGrid && (((_a2 = t.rowSelectionPropagation) == null ? void 0 : _a2.parents) || ((_b2 = t.rowSelectionPropagation) == null ? void 0 : _b2.descendants)), l = d.useMemo(() => Xd(t.rowSelectionModel, Zt(e.current.state)), [
      e,
      t.rowSelectionModel
    ]), s = d.useRef(null);
    e.current.registerControlState({
      stateId: "rowSelection",
      propModel: l,
      propOnChange: t.onRowSelectionModelChange,
      stateSelector: Zt,
      changeEvent: "rowSelectionChange"
    });
    const { checkboxSelection: i, disableRowSelectionOnClick: a, isRowSelectable: u } = t, c = ki(t), p = X(e, xt), g = X(e, Co) > 1, b = d.useCallback((R) => {
      let z = R;
      const _ = s.current ?? R, H = e.current.isRowSelected(R);
      if (H) {
        const G = No(e), U = G.findIndex((q) => q === _), B = G.findIndex((q) => q === z);
        if (U === B) return;
        U > B ? z = G[B + 1] : z = G[B - 1];
      }
      s.current = R, e.current.selectRowRange({
        startId: _,
        endId: z
      }, !H);
    }, [
      e
    ]), h = d.useCallback((R) => {
      if (t.signature === gr.DataGrid && !c && Array.isArray(R) && R.length > 1) throw new Error([
        "MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."
      ].join(`
`));
      Zt(e.current.state) !== R && (r.debug("Setting selection model"), e.current.setState((_) => C({}, _, {
        rowSelection: t.rowSelection ? R : []
      })), e.current.forceUpdate());
    }, [
      e,
      r,
      t.rowSelection,
      t.signature,
      c
    ]), m = d.useCallback((R) => Zt(e.current.state).includes(R), [
      e
    ]), x = d.useCallback((R) => {
      if (t.rowSelection === false || u && !u(e.current.getRowParams(R))) return false;
      const z = xt(e)[R];
      return !((z == null ? void 0 : z.type) === "footer" || (z == null ? void 0 : z.type) === "pinnedRow");
    }, [
      e,
      t.rowSelection,
      u
    ]), v = d.useCallback(() => Ky(e), [
      e
    ]), w = d.useCallback((R, z = true, _ = false) => {
      var _a3, _b3, _c3, _d3, _e2, _f3;
      if (e.current.isRowSelectable(R)) if (s.current = R, _) {
        r.debug(`Setting selection for row ${R}`);
        const H = [], G = (U) => {
          H.push(U);
        };
        z && (G(R), n && mn(e, p, R, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, G)), e.current.setRowSelectionModel(H);
      } else {
        r.debug(`Toggling selection for row ${R}`);
        const H = Zt(e.current.state), G = new Set(H);
        G.delete(R);
        const U = (W) => {
          G.add(W);
        }, B = (W) => {
          G.delete(W);
        };
        z ? (U(R), n && mn(e, p, R, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, U)) : n && Qa(e, p, R, ((_e2 = t.rowSelectionPropagation) == null ? void 0 : _e2.descendants) ?? false, ((_f3 = t.rowSelectionPropagation) == null ? void 0 : _f3.parents) ?? false, B), (G.size < 2 || c) && e.current.setRowSelectionModel(Array.from(G));
      }
    }, [
      e,
      r,
      n,
      p,
      (_c2 = t.rowSelectionPropagation) == null ? void 0 : _c2.descendants,
      (_d2 = t.rowSelectionPropagation) == null ? void 0 : _d2.parents,
      c
    ]), k = d.useCallback((R, z = true, _ = false) => {
      r.debug("Setting selection for several rows");
      const H = R.filter((B) => e.current.isRowSelectable(B));
      let G;
      if (_) {
        if (z) {
          if (G = new Set(H), n) {
            const q = (W) => {
              G.add(W);
            };
            H.forEach((W) => {
              var _a3, _b3;
              mn(e, p, W, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, q);
            });
          }
        } else G = /* @__PURE__ */ new Set();
        const B = to(e);
        if (G.size === Object.keys(B).length && Array.from(G).every((q) => B[q] === q)) return;
      } else {
        G = new Set(Object.values(to(e)));
        const B = (W) => {
          G.add(W);
        }, q = (W) => {
          G.delete(W);
        };
        H.forEach((W) => {
          var _a3, _b3, _c3, _d3;
          z ? (G.add(W), n && mn(e, p, W, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, B)) : (q(W), n && Qa(e, p, W, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, q));
        });
      }
      (G.size < 2 || c) && e.current.setRowSelectionModel(Array.from(G));
    }, [
      r,
      n,
      c,
      e,
      p,
      (_e = t.rowSelectionPropagation) == null ? void 0 : _e.descendants,
      (_f2 = t.rowSelectionPropagation) == null ? void 0 : _f2.parents
    ]), L = d.useCallback((R) => {
      var _a3, _b3;
      if (!g || !n || R.length === 0) return R;
      const z = new Set(R), _ = (H) => {
        z.add(H);
      };
      for (const H of R) mn(e, p, H, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, _, z);
      return Array.from(z);
    }, [
      e,
      p,
      (_g2 = t.rowSelectionPropagation) == null ? void 0 : _g2.descendants,
      (_h2 = t.rowSelectionPropagation) == null ? void 0 : _h2.parents,
      g,
      n
    ]), F = d.useCallback(({ startId: R, endId: z }, _ = true, H = false) => {
      if (!e.current.getRow(R) || !e.current.getRow(z)) return;
      r.debug(`Expanding selection from row ${R} to row ${z}`);
      const G = No(e), U = G.indexOf(R), B = G.indexOf(z), [q, W] = U > B ? [
        B,
        U
      ] : [
        U,
        B
      ], te = G.slice(q, W + 1);
      e.current.selectRows(te, _, H);
    }, [
      e,
      r
    ]), I = {
      selectRow: w,
      setRowSelectionModel: h,
      getSelectedRows: v,
      isRowSelected: m,
      isRowSelectable: x
    }, j = {
      selectRows: k,
      selectRowRange: F,
      getPropagatedRowSelectionModel: L
    };
    Oe(e, I, "public"), Oe(e, j, t.signature === gr.DataGrid ? "private" : "public");
    const D = d.useRef(true), S = d.useCallback((R = false) => {
      var _a3;
      if (D.current) return;
      const z = Zt(e.current.state), _ = ur(e), H = rn(e), G = C({}, to(e)), U = (W) => t.filterMode === "server" ? !_[W] : !_[W] || H[W] === false;
      let B = false;
      z.forEach((W) => {
        var _a4;
        if (U(W)) {
          if (t.keepNonExistentRowsSelected) return;
          delete G[W], B = true;
          return;
        }
        if (!((_a4 = t.rowSelectionPropagation) == null ? void 0 : _a4.parents)) return;
        const te = p[W];
        if (te.type === "group") {
          if (te.isAutoGenerated) {
            delete G[W], B = true;
            return;
          }
          te.children.every((re) => H[re] === false) || (delete G[W], B = true);
        }
      });
      const q = g && ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.parents) && Object.keys(G).length > 0;
      if (B || q && !R) {
        const W = Object.values(G);
        q ? e.current.selectRows(W, true, true) : e.current.setRowSelectionModel(W);
      }
    }, [
      e,
      g,
      (_i2 = t.rowSelectionPropagation) == null ? void 0 : _i2.parents,
      t.keepNonExistentRowsSelected,
      t.filterMode,
      p
    ]), y = d.useCallback((R, z) => {
      const _ = z.metaKey || z.ctrlKey, H = !i && !_ && !c0(z), G = !c || H, U = e.current.isRowSelected(R);
      G ? e.current.selectRow(R, H ? true : !U, true) : e.current.selectRow(R, !U, false);
    }, [
      e,
      c,
      i
    ]), M = d.useCallback((R, z) => {
      var _a3, _b3;
      if (a) return;
      const _ = (_a3 = z.target.closest(`.${O.cell}`)) == null ? void 0 : _a3.getAttribute("data-field");
      _ === on.field || _ === Yl || _ && ((_b3 = e.current.getColumn(_)) == null ? void 0 : _b3.type) === ql || xt(e)[R.id].type === "pinnedRow" || (z.shiftKey && c ? b(R.id) : y(R.id, z));
    }, [
      a,
      c,
      e,
      b,
      y
    ]), $ = d.useCallback((R, z) => {
      var _a3;
      c && z.shiftKey && ((_a3 = window.getSelection()) == null ? void 0 : _a3.removeAllRanges());
    }, [
      c
    ]), E = d.useCallback((R, z) => {
      c && z.nativeEvent.shiftKey ? b(R.id) : e.current.selectRow(R.id, R.value, !c);
    }, [
      e,
      b,
      c
    ]), N = d.useCallback((R) => {
      const z = t.pagination && t.checkboxSelectionVisibleOnly && t.paginationMode === "client" ? pd(e) : No(e);
      e.current.selectRows(z, R.value);
    }, [
      e,
      t.checkboxSelectionVisibleOnly,
      t.pagination,
      t.paginationMode
    ]), T = d.useCallback((R, z) => {
      if (e.current.getCellMode(R.id, R.field) !== tt.Edit && !Jn(z)) {
        if (zl(z.key) && z.shiftKey) {
          const _ = Wt(e);
          if (_ && _.id !== R.id) {
            z.preventDefault();
            const H = e.current.isRowSelected(_.id);
            if (!c) {
              e.current.selectRow(_.id, !H, true);
              return;
            }
            const G = e.current.getRowIndexRelativeToVisibleRows(_.id), U = e.current.getRowIndexRelativeToVisibleRows(R.id);
            let B, q;
            G > U ? H ? (B = U, q = G - 1) : (B = U, q = G) : H ? (B = G + 1, q = U) : (B = G, q = U);
            const te = ro(e).rows.slice(B, q + 1).map((Z) => Z.id);
            e.current.selectRows(te, !H);
            return;
          }
        }
        if (z.key === " " && z.shiftKey) {
          z.preventDefault(), y(R.id, z);
          return;
        }
        String.fromCharCode(z.keyCode) === "A" && (z.ctrlKey || z.metaKey) && (z.preventDefault(), k(e.current.getAllRowIds(), true));
      }
    }, [
      e,
      y,
      k,
      c
    ]), P = Be(() => {
      if (!t.rowSelection) {
        e.current.setRowSelectionModel([]);
        return;
      }
      if (l === void 0) return;
      if (!n || !g || l.length === 0) {
        e.current.setRowSelectionModel(l);
        return;
      }
      const R = e.current.getPropagatedRowSelectionModel(l);
      if (R.length !== l.length || !R.every((z) => l.includes(z))) {
        e.current.setRowSelectionModel(R);
        return;
      }
      e.current.setRowSelectionModel(l);
    });
    le(e, "sortedRowsSet", o(() => S(true))), le(e, "filteredRowsSet", o(() => S())), le(e, "rowClick", o(M)), le(e, "rowSelectionCheckboxChange", o(E)), le(e, "headerSelectionCheckboxChange", N), le(e, "cellMouseDown", o($)), le(e, "cellKeyDown", o(T)), d.useEffect(() => {
      P();
    }, [
      e,
      l,
      t.rowSelection,
      P
    ]);
    const A = l != null;
    d.useEffect(() => {
      if (A || !t.rowSelection) return;
      const R = Zt(e.current.state);
      if (x) {
        const z = R.filter((_) => x(_));
        z.length < R.length && e.current.setRowSelectionModel(z);
      }
    }, [
      e,
      x,
      A,
      t.rowSelection
    ]), d.useEffect(() => {
      if (!t.rowSelection || A) return;
      const R = Zt(e.current.state);
      !c && R.length > 1 && e.current.setRowSelectionModel([]);
    }, [
      e,
      c,
      i,
      A,
      t.rowSelection
    ]), d.useEffect(() => {
      o(S);
    }, [
      S,
      o
    ]), d.useEffect(() => {
      D.current && (D.current = false);
    }, []);
  }, uM = (e) => {
    const { classes: t } = e;
    return d.useMemo(() => ge({
      cellCheckbox: [
        "cellCheckbox"
      ],
      columnHeaderCheckbox: [
        "columnHeaderCheckbox"
      ]
    }, Ae, t), [
      t
    ]);
  }, dM = (e, t) => {
    const r = {
      classes: t.classes
    }, o = uM(r), n = d.useCallback((l) => {
      const s = C({}, on, {
        cellClassName: o.cellCheckbox,
        headerClassName: o.columnHeaderCheckbox,
        headerName: e.current.getLocaleText("checkboxSelectionHeaderName")
      }), i = t.checkboxSelection, a = l.lookup[lr] != null;
      return i && !a ? (l.lookup[lr] = s, l.orderedFields = [
        lr,
        ...l.orderedFields
      ]) : !i && a ? (delete l.lookup[lr], l.orderedFields = l.orderedFields.filter((u) => u !== lr)) : i && a && (l.lookup[lr] = C({}, s, l.lookup[lr]), t.columns.some((u) => u.field === lr) || (l.orderedFields = [
        lr,
        ...l.orderedFields.filter((u) => u !== lr)
      ])), l;
    }, [
      e,
      o,
      t.columns,
      t.checkboxSelection
    ]);
    at(e, "hydrateColumns", n);
  }, pM = (e, t) => {
    var _a2, _b2;
    const r = t.sortModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel) ?? [];
    return C({}, e, {
      sorting: {
        sortModel: Tu(r, t.disableMultipleColumnsSorting),
        sortedRows: []
      }
    });
  }, fM = (e, t) => {
    var _a2, _b2;
    const r = Mt(e, "useGridSorting");
    e.current.registerControlState({
      stateId: "sortModel",
      propModel: t.sortModel,
      propOnChange: t.onSortModelChange,
      stateSelector: vr,
      changeEvent: "sortModelChange"
    });
    const o = d.useCallback((F, I) => {
      const j = vr(e), D = j.findIndex((y) => y.field === F);
      let S = [
        ...j
      ];
      return D > -1 ? (I == null ? void 0 : I.sort) == null ? S.splice(D, 1) : S.splice(D, 1, I) : S = [
        ...j,
        I
      ], S;
    }, [
      e
    ]), n = d.useCallback((F, I) => {
      const D = vr(e).find((S) => S.field === F.field);
      if (D) {
        const S = I === void 0 ? _a(F.sortingOrder ?? t.sortingOrder, D.sort) : I;
        return S === void 0 ? void 0 : C({}, D, {
          sort: S
        });
      }
      return {
        field: F.field,
        sort: I === void 0 ? _a(F.sortingOrder ?? t.sortingOrder) : I
      };
    }, [
      e,
      t.sortingOrder
    ]), l = d.useCallback((F, I) => I == null || I.sortable === false || t.disableColumnSorting ? F : (I.sortingOrder || t.sortingOrder).some((D) => !!D) ? [
      ...F,
      "columnMenuSortItem"
    ] : F, [
      t.sortingOrder,
      t.disableColumnSorting
    ]), s = d.useCallback(() => {
      e.current.setState((F) => {
        if (t.sortingMode === "server") return r.debug("Skipping sorting rows as sortingMode = server"), C({}, F, {
          sorting: C({}, F.sorting, {
            sortedRows: Ii(xt(e), Dt, false)
          })
        });
        const I = vr(F, e.current.instanceId), j = YC(I, e), D = e.current.applyStrategyProcessor("sorting", {
          sortRowList: j
        });
        return C({}, F, {
          sorting: C({}, F.sorting, {
            sortedRows: D
          })
        });
      }), e.current.publishEvent("sortedRowsSet"), e.current.forceUpdate();
    }, [
      e,
      r,
      t.sortingMode
    ]), i = d.useCallback((F) => {
      vr(e) !== F && (r.debug("Setting sort model"), e.current.setState(Na(F, t.disableMultipleColumnsSorting)), e.current.forceUpdate(), e.current.applySorting());
    }, [
      e,
      r,
      t.disableMultipleColumnsSorting
    ]), a = d.useCallback((F, I, j) => {
      const D = e.current.getColumn(F), S = n(D, I);
      let y;
      !j || t.disableMultipleColumnsSorting ? y = (S == null ? void 0 : S.sort) == null ? [] : [
        S
      ] : y = o(D.field, S), e.current.setSortModel(y);
    }, [
      e,
      o,
      n,
      t.disableMultipleColumnsSorting
    ]), u = d.useCallback(() => vr(e), [
      e
    ]), c = d.useCallback(() => Mi(e).map((I) => I.model), [
      e
    ]), p = d.useCallback(() => tn(e), [
      e
    ]), g = d.useCallback((F) => e.current.getSortedRowIds()[F], [
      e
    ]);
    Oe(e, {
      getSortModel: u,
      getSortedRows: c,
      getSortedRowIds: p,
      getRowIdFromRowIndex: g,
      setSortModel: i,
      sortColumn: a,
      applySorting: s
    }, "public");
    const h = d.useCallback((F, I) => {
      var _a3, _b3;
      const j = vr(e);
      return !I.exportOnlyDirtyModels || t.sortModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.sorting) == null ? void 0 : _b3.sortModel) != null || j.length > 0 ? C({}, F, {
        sorting: {
          sortModel: j
        }
      }) : F;
    }, [
      e,
      t.sortModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel
    ]), m = d.useCallback((F, I) => {
      var _a3;
      const j = (_a3 = I.stateToRestore.sorting) == null ? void 0 : _a3.sortModel;
      return j == null ? F : (e.current.setState(Na(j, t.disableMultipleColumnsSorting)), C({}, F, {
        callbacks: [
          ...F.callbacks,
          e.current.applySorting
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsSorting
    ]), x = d.useCallback((F) => {
      const I = xt(e), j = I[Dt], D = F.sortRowList ? F.sortRowList(j.children.map((S) => I[S])) : [
        ...j.children
      ];
      return j.footerId != null && D.push(j.footerId), D;
    }, [
      e
    ]);
    at(e, "exportState", h), at(e, "restoreState", m), Gl(e, mo, "sorting", x);
    const v = d.useCallback(({ field: F, colDef: I }, j) => {
      if (!I.sortable || t.disableColumnSorting) return;
      const D = j.shiftKey || j.metaKey || j.ctrlKey;
      a(F, void 0, D);
    }, [
      a,
      t.disableColumnSorting
    ]), w = d.useCallback(({ field: F, colDef: I }, j) => {
      !I.sortable || t.disableColumnSorting || j.key === "Enter" && !j.ctrlKey && !j.metaKey && a(F, void 0, j.shiftKey);
    }, [
      a,
      t.disableColumnSorting
    ]), k = d.useCallback(() => {
      const F = vr(e), I = Ur(e);
      if (F.length > 0) {
        const j = F.filter((D) => I[D.field]);
        j.length < F.length && e.current.setSortModel(j);
      }
    }, [
      e
    ]), L = d.useCallback((F) => {
      F === "sorting" && e.current.applySorting();
    }, [
      e
    ]);
    at(e, "columnMenu", l), le(e, "columnHeaderClick", v), le(e, "columnHeaderKeyDown", w), le(e, "rowsSet", e.current.applySorting), le(e, "columnsChange", k), le(e, "activeStrategyProcessorChange", L), qn(() => {
      e.current.applySorting();
    }), Tt(() => {
      t.sortModel !== void 0 && e.current.setSortModel(t.sortModel);
    }, [
      e,
      t.sortModel
    ]);
  };
  function Ec(e) {
    const { containerSize: t, scrollPosition: r, elementSize: o, elementOffset: n } = e, l = n + o;
    if (o > t) return n;
    if (l - t > r) return l - t;
    if (n < r) return n;
  }
  const gM = (e, t) => {
    const r = Xt(), o = Mt(e, "useGridScroll"), n = e.current.columnHeadersContainerRef, l = e.current.virtualScrollerRef, s = X(e, so), i = d.useCallback((p) => {
      var _a2;
      const g = It(e.current.state), b = Un(e), h = t.unstable_listView ? [
        Xo(e.current.state)
      ] : ft(e);
      if (!(p.rowIndex == null) && b === 0 || h.length === 0) return false;
      o.debug(`Scrolling to cell at row ${p.rowIndex}, col: ${p.colIndex} `);
      let x = {};
      if (p.colIndex !== void 0) {
        const v = lo(e);
        let w;
        if (typeof p.rowIndex < "u") {
          const k = (_a2 = s[p.rowIndex]) == null ? void 0 : _a2.id, L = e.current.unstable_getCellColSpanInfo(k, p.colIndex);
          L && !L.spannedByColSpan && (w = L.cellProps.width);
        }
        typeof w > "u" && (w = h[p.colIndex].computedWidth), x.left = Ec({
          containerSize: g.viewportOuterSize.width,
          scrollPosition: Math.abs(l.current.scrollLeft),
          elementSize: w,
          elementOffset: v[p.colIndex]
        });
      }
      if (p.rowIndex !== void 0) {
        const v = nn(e.current.state), w = uw(e), k = ud(e), L = t.pagination ? p.rowIndex - w * k : p.rowIndex, F = v.positions[L + 1] ? v.positions[L + 1] - v.positions[L] : v.currentPageTotalHeight - v.positions[L];
        x.top = Ec({
          containerSize: g.viewportInnerSize.height,
          scrollPosition: l.current.scrollTop,
          elementSize: F,
          elementOffset: v.positions[L]
        });
      }
      return x = e.current.unstable_applyPipeProcessors("scrollToIndexes", x, p), typeof x.left !== void 0 || typeof x.top !== void 0 ? (e.current.scroll(x), true) : false;
    }, [
      o,
      e,
      l,
      t.pagination,
      s,
      t.unstable_listView
    ]), a = d.useCallback((p) => {
      if (l.current && p.left !== void 0 && n.current) {
        const g = r ? -1 : 1;
        n.current.scrollLeft = p.left, l.current.scrollLeft = g * p.left, o.debug(`Scrolling left: ${p.left}`);
      }
      l.current && p.top !== void 0 && (l.current.scrollTop = p.top, o.debug(`Scrolling top: ${p.top}`)), o.debug("Scrolling, updating container, and viewport");
    }, [
      l,
      r,
      n,
      o
    ]), u = d.useCallback(() => (l == null ? void 0 : l.current) ? {
      top: l.current.scrollTop,
      left: l.current.scrollLeft
    } : {
      top: 0,
      left: 0
    }, [
      l
    ]);
    Oe(e, {
      scroll: a,
      scrollToIndexes: i,
      getScrollPosition: u
    }, "public");
  };
  function hM(e, t) {
    rt(e, "columnHeaderClick", t.onColumnHeaderClick), rt(e, "columnHeaderContextMenu", t.onColumnHeaderContextMenu), rt(e, "columnHeaderDoubleClick", t.onColumnHeaderDoubleClick), rt(e, "columnHeaderOver", t.onColumnHeaderOver), rt(e, "columnHeaderOut", t.onColumnHeaderOut), rt(e, "columnHeaderEnter", t.onColumnHeaderEnter), rt(e, "columnHeaderLeave", t.onColumnHeaderLeave), rt(e, "cellClick", t.onCellClick), rt(e, "cellDoubleClick", t.onCellDoubleClick), rt(e, "cellKeyDown", t.onCellKeyDown), rt(e, "preferencePanelClose", t.onPreferencePanelClose), rt(e, "preferencePanelOpen", t.onPreferencePanelOpen), rt(e, "menuOpen", t.onMenuOpen), rt(e, "menuClose", t.onMenuClose), rt(e, "rowDoubleClick", t.onRowDoubleClick), rt(e, "rowClick", t.onRowClick), rt(e, "stateChange", t.onStateChange);
  }
  function mM(e, t = 166) {
    let r, o;
    const n = () => {
      r = void 0, e(...o);
    };
    function l(...s) {
      o = s, r === void 0 && (r = setTimeout(n, t));
    }
    return l.clear = () => {
      clearTimeout(r), r = void 0;
    }, l;
  }
  const ei = {
    autoHeight: false,
    autoPageSize: false,
    autosizeOnMount: false,
    checkboxSelection: false,
    checkboxSelectionVisibleOnly: false,
    clipboardCopyCellDelimiter: "	",
    columnBufferPx: 150,
    columnHeaderHeight: 56,
    disableAutosize: false,
    disableColumnFilter: false,
    disableColumnMenu: false,
    disableColumnReorder: false,
    disableColumnResize: false,
    disableColumnSelector: false,
    disableColumnSorting: false,
    disableDensitySelector: false,
    disableEval: false,
    disableMultipleColumnsFiltering: false,
    disableMultipleColumnsSorting: false,
    disableMultipleRowSelection: false,
    disableRowSelectionOnClick: false,
    disableVirtualization: false,
    editMode: $r.Cell,
    filterDebounceMs: 150,
    filterMode: "client",
    hideFooter: false,
    hideFooterPagination: false,
    hideFooterRowCount: false,
    hideFooterSelectedRowCount: false,
    ignoreDiacritics: false,
    ignoreValueFormatterDuringExport: false,
    indeterminateCheckboxAction: "deselect",
    keepColumnPositionIfDraggedOutside: false,
    keepNonExistentRowsSelected: false,
    loading: false,
    logger: console,
    logLevel: "error",
    pageSizeOptions: [
      25,
      50,
      100
    ],
    pagination: false,
    paginationMode: "client",
    resetPageOnSortFilter: false,
    resizeThrottleMs: 60,
    rowBufferPx: 150,
    rowHeight: 52,
    rowPositionsDebounceMs: 166,
    rows: [],
    rowSelection: true,
    rowSpacingType: "margin",
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    sortingMode: "client",
    sortingOrder: [
      "asc",
      "desc",
      null
    ],
    throttleRowsMs: 0,
    unstable_rowSpanning: false,
    virtualizeColumnsWithAutoRowHeight: false
  }, ko = {
    width: 0,
    height: 0
  }, bM = {
    isReady: false,
    root: ko,
    viewportOuterSize: ko,
    viewportInnerSize: ko,
    contentSize: ko,
    minimumSize: ko,
    hasScrollX: false,
    hasScrollY: false,
    scrollbarSize: 0,
    headerHeight: 0,
    groupHeaderHeight: 0,
    headerFilterHeight: 0,
    rowWidth: 0,
    rowHeight: 0,
    columnsTotalWidth: 0,
    leftPinnedWidth: 0,
    rightPinnedWidth: 0,
    headersTotalHeight: 0,
    topContainerHeight: 0,
    bottomContainerHeight: 0
  }, CM = (e, t, r) => {
    const o = bM, n = Qo(r);
    return C({}, e, {
      dimensions: C({}, o, Zd(t, r, n, en(r)))
    });
  }, Qd = we(ft, lo, (e, t) => {
    const r = e.length;
    return r === 0 ? 0 : Lo(t[r - 1] + e[r - 1].computedWidth, 1);
  });
  function yM(e, t) {
    const r = Mt(e, "useResizeContainer"), o = d.useRef(false), n = d.useRef(ko), l = X(e, en), s = X(e, Qo), i = X(e, Qd), a = d.useRef(true), { rowHeight: u, headerHeight: c, groupHeaderHeight: p, headerFilterHeight: g, headersTotalHeight: b, leftPinnedWidth: h, rightPinnedWidth: m } = Zd(t, e, s, l), x = d.useRef(void 0), v = d.useCallback(() => It(e.current.state), [
      e
    ]), w = d.useCallback(($) => {
      e.current.setState((E) => C({}, E, {
        dimensions: $
      })), e.current.rootElementRef.current && Tc(e.current.rootElementRef.current, It(e.current.state));
    }, [
      e
    ]), k = d.useCallback(() => {
      const $ = e.current.mainElementRef.current;
      if (!$) return;
      const E = Op($).getComputedStyle($), N = {
        width: parseFloat(E.width) || 0,
        height: parseFloat(E.height) || 0
      };
      (!x.current || !Dc(x.current, N)) && (e.current.publishEvent("resize", N), x.current = N);
    }, [
      e
    ]), L = d.useCallback(() => {
      const $ = It(e.current.state);
      if (!$.isReady) return 0;
      const E = ro(e);
      if (t.getRowHeight) {
        const T = Zn(e), P = T.lastRowIndex - T.firstRowIndex;
        return Math.min(P - 1, E.rows.length);
      }
      const N = Math.floor($.viewportInnerSize.height / u);
      return Math.min(N, E.rows.length);
    }, [
      e,
      t.getRowHeight,
      u
    ]), F = d.useCallback(() => {
      var _a2, _b2;
      if (a.current) return;
      const $ = wM(e.current.mainElementRef.current, t.scrollbarSize), E = nn(e.current.state), N = b + E.pinnedTopRowsTotalHeight, T = E.pinnedBottomRowsTotalHeight, A = {
        width: i - h - m,
        height: Lo(E.currentPageTotalHeight, 1)
      };
      let R, z, _ = false, H = false;
      if (t.autoHeight) H = false, _ = Math.round(i) > Math.round(n.current.width), R = {
        width: n.current.width,
        height: N + T + A.height
      }, z = {
        width: Math.max(0, R.width - (H ? $ : 0)),
        height: Math.max(0, R.height - (_ ? $ : 0))
      };
      else {
        R = {
          width: n.current.width,
          height: n.current.height
        }, z = {
          width: Math.max(0, R.width - h - m),
          height: Math.max(0, R.height - N - T)
        };
        const W = A, te = z, Z = W.width > te.width, re = W.height > te.height;
        (Z || re) && (H = re, _ = W.width + (H ? $ : 0) > te.width, _ && (H = W.height + $ > te.height)), H && (z.width -= $), _ && (z.height -= $);
      }
      const G = Math.max(R.width, i + (H ? $ : 0)), U = {
        width: i,
        height: N + A.height + T
      }, B = {
        isReady: true,
        root: n.current,
        viewportOuterSize: R,
        viewportInnerSize: z,
        contentSize: A,
        minimumSize: U,
        hasScrollX: _,
        hasScrollY: H,
        scrollbarSize: $,
        headerHeight: c,
        groupHeaderHeight: p,
        headerFilterHeight: g,
        rowWidth: G,
        rowHeight: u,
        columnsTotalWidth: i,
        leftPinnedWidth: h,
        rightPinnedWidth: m,
        headersTotalHeight: b,
        topContainerHeight: N,
        bottomContainerHeight: T
      }, q = e.current.state.dimensions;
      Tr(q, B) || (w(B), Dc(B.viewportInnerSize, q.viewportInnerSize) || e.current.publishEvent("viewportInnerSizeChange", B.viewportInnerSize), (_b2 = (_a2 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a2));
    }, [
      e,
      w,
      t.scrollbarSize,
      t.autoHeight,
      u,
      c,
      p,
      g,
      i,
      b,
      h,
      m
    ]), I = Be(F), j = d.useMemo(() => t.resizeThrottleMs > 0 ? mM(() => {
      I(), e.current.publishEvent("debouncedResize", n.current);
    }, t.resizeThrottleMs) : void 0, [
      e,
      t.resizeThrottleMs,
      I
    ]);
    d.useEffect(() => j == null ? void 0 : j.clear, [
      j
    ]);
    const D = {
      resize: k,
      getRootDimensions: v
    }, S = {
      updateDimensions: F,
      getViewportPageSize: L
    };
    Tt(F, [
      F
    ]), Oe(e, D, "public"), Oe(e, S, "private");
    const y = d.useCallback(($) => {
      Tc($, It(e.current.state));
    }, [
      e
    ]), M = d.useCallback(($) => {
      if (n.current = $, $.height === 0 && !o.current && !t.autoHeight && !jl && (r.error([
        "The parent DOM element of the Data Grid has an empty height.",
        "Please make sure that this element has an intrinsic height.",
        "The grid displays with a height of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), $.width === 0 && !o.current && !jl && (r.error([
        "The parent DOM element of the Data Grid has an empty width.",
        "Please make sure that this element has an intrinsic width.",
        "The grid displays with a width of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), a.current || !j) {
        a.current = false, F();
        return;
      }
      j();
    }, [
      F,
      t.autoHeight,
      j,
      r
    ]);
    rt(e, "rootMount", y), rt(e, "resize", M), rt(e, "debouncedResize", t.onResize);
  }
  function Tc(e, t) {
    const r = (o, n) => e.style.setProperty(o, n);
    r("--DataGrid-hasScrollX", `${Number(t.hasScrollX)}`), r("--DataGrid-hasScrollY", `${Number(t.hasScrollY)}`), r("--DataGrid-scrollbarSize", `${t.scrollbarSize}px`), r("--DataGrid-rowWidth", `${t.rowWidth}px`), r("--DataGrid-columnsTotalWidth", `${t.columnsTotalWidth}px`), r("--DataGrid-leftPinnedWidth", `${t.leftPinnedWidth}px`), r("--DataGrid-rightPinnedWidth", `${t.rightPinnedWidth}px`), r("--DataGrid-headerHeight", `${t.headerHeight}px`), r("--DataGrid-headersTotalHeight", `${t.headersTotalHeight}px`), r("--DataGrid-topContainerHeight", `${t.topContainerHeight}px`), r("--DataGrid-bottomContainerHeight", `${t.bottomContainerHeight}px`), r("--height", `${t.rowHeight}px`);
  }
  function Zd(e, t, r, o) {
    const n = Ku(e.rowHeight, ei.rowHeight);
    return {
      rowHeight: Math.floor(n * r),
      headerHeight: Math.floor(e.columnHeaderHeight * r),
      groupHeaderHeight: Math.floor((e.columnGroupHeaderHeight ?? e.columnHeaderHeight) * r),
      headerFilterHeight: Math.floor((e.headerFilterHeight ?? e.columnHeaderHeight) * r),
      columnsTotalWidth: Qd(t),
      headersTotalHeight: es(t, e),
      leftPinnedWidth: o.left.reduce((l, s) => l + s.computedWidth, 0),
      rightPinnedWidth: o.right.reduce((l, s) => l + s.computedWidth, 0)
    };
  }
  const Ac = /* @__PURE__ */ new WeakMap();
  function wM(e, t) {
    if (t !== void 0) return t;
    if (e === null) return 0;
    const r = Ac.get(e);
    if (r !== void 0) return r;
    const n = pr(e).createElement("div");
    n.style.width = "99px", n.style.height = "99px", n.style.position = "absolute", n.style.overflow = "scroll", n.className = "scrollDiv", e.appendChild(n);
    const l = n.offsetWidth - n.clientWidth;
    return e.removeChild(n), Ac.set(e, l), l;
  }
  function Dc(e, t) {
    return e.width === t.width && e.height === t.height;
  }
  const xM = typeof globalThis.ResizeObserver < "u" ? globalThis.ResizeObserver : class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }, vM = (e, t, r) => {
    r.current.caches.rowsMeta = {
      heights: /* @__PURE__ */ new Map()
    };
    const o = wi(r.current.state), n = Un(r), l = Kn(r.current.state), s = Math.min(l.enabled ? l.paginationModel.pageSize : n, n);
    return C({}, e, {
      rowsMeta: {
        currentPageTotalHeight: s * o,
        positions: Array.from({
          length: s
        }, (i, a) => a * o),
        pinnedTopRowsTotalHeight: 0,
        pinnedBottomRowsTotalHeight: 0
      }
    });
  }, SM = (e, t) => {
    const { getRowHeight: r, getRowSpacing: o, getEstimatedRowHeight: n } = t, l = e.current.caches.rowsMeta.heights, s = d.useRef(-1), i = d.useRef(false), a = d.useRef(false), u = X(e, Qo), c = $i(e), p = X(e, Zo), g = X(e, wi), b = (y) => {
      let M = l.get(y);
      return M === void 0 && (M = {
        content: g,
        spacingTop: 0,
        spacingBottom: 0,
        detail: 0,
        autoHeight: false,
        needsFirstMeasurement: true
      }, l.set(y, M)), M;
    }, h = d.useCallback((y) => {
      const M = It(e.current.state).rowHeight, $ = e.current.getRowHeightEntry(y.id);
      if (!r) $.content = M, $.needsFirstMeasurement = false;
      else {
        const E = r(C({}, y, {
          densityFactor: u
        }));
        if (E === "auto") {
          if ($.needsFirstMeasurement) {
            const N = n ? n(C({}, y, {
              densityFactor: u
            })) : M;
            $.content = N ?? M;
          }
          i.current = true, $.autoHeight = true;
        } else $.content = Ku(E, M), $.needsFirstMeasurement = false, $.autoHeight = false;
      }
      if (o) {
        const E = e.current.getRowIndexRelativeToVisibleRows(y.id), N = o(C({}, y, {
          isFirstVisible: E === 0,
          isLastVisible: E === c.rows.length - 1,
          indexRelativeToCurrentPage: E
        }));
        $.spacingTop = N.top ?? 0, $.spacingBottom = N.bottom ?? 0;
      } else $.spacingTop = 0, $.spacingBottom = 0;
      return e.current.unstable_applyPipeProcessors("rowHeight", $, y), $;
    }, [
      e,
      c.rows,
      r,
      n,
      g,
      o,
      u
    ]), m = d.useCallback(() => {
      i.current = false;
      const y = p.top.reduce((P, A) => {
        const R = h(A);
        return P + R.content + R.spacingTop + R.spacingBottom + R.detail;
      }, 0), M = p.bottom.reduce((P, A) => {
        const R = h(A);
        return P + R.content + R.spacingTop + R.spacingBottom + R.detail;
      }, 0), $ = [], E = c.rows.reduce((P, A) => {
        $.push(P);
        const R = h(A), z = R.content + R.spacingTop + R.spacingBottom + R.detail;
        return P + z;
      }, 0);
      i.current || (s.current = 1 / 0);
      const N = y !== e.current.state.rowsMeta.pinnedTopRowsTotalHeight || M !== e.current.state.rowsMeta.pinnedBottomRowsTotalHeight || E !== e.current.state.rowsMeta.currentPageTotalHeight, T = {
        currentPageTotalHeight: E,
        positions: $,
        pinnedTopRowsTotalHeight: y,
        pinnedBottomRowsTotalHeight: M
      };
      e.current.setState((P) => C({}, P, {
        rowsMeta: T
      })), N && e.current.updateDimensions(), a.current = true;
    }, [
      e,
      p,
      c.rows,
      h
    ]), x = (y) => {
      var _a2;
      return ((_a2 = l.get(y)) == null ? void 0 : _a2.content) ?? g;
    }, v = (y, M) => {
      const $ = e.current.getRowHeightEntry(y), E = $.content !== M;
      $.needsFirstMeasurement = false, $.content = M, a.current &&= !E;
    }, w = (y) => {
      var _a2;
      return ((_a2 = l.get(y)) == null ? void 0 : _a2.autoHeight) ?? false;
    }, k = () => s.current, L = (y) => {
      i.current && y > s.current && (s.current = y);
    }, F = () => {
      l.clear(), m();
    }, I = Lr(() => new xM((y) => {
      var _a2;
      for (let M = 0; M < y.length; M += 1) {
        const $ = y[M], E = $.borderBoxSize && $.borderBoxSize.length > 0 ? $.borderBoxSize[0].blockSize : $.contentRect.height, N = $.target.__mui_id;
        if (((_a2 = Od(e)) == null ? void 0 : _a2.id) === N && E === 0) return;
        e.current.unstable_storeRowHeightMeasurement(N, E);
      }
      a.current || requestAnimationFrame(() => {
        e.current.requestPipeProcessorsApplication("rowHeight");
      });
    })).current, j = (y, M) => (y.__mui_id = M, I.observe(y), () => I.unobserve(y));
    Gi(e, "rowHeight", m), Tt(() => {
      m();
    }, [
      m
    ]);
    const D = {
      unstable_getRowHeight: x,
      unstable_setLastMeasuredRowIndex: L,
      unstable_storeRowHeightMeasurement: v,
      resetRowHeights: F
    }, S = {
      hydrateRowsMeta: m,
      observeRowHeight: j,
      rowHasAutoHeight: w,
      getRowHeightEntry: b,
      getLastMeasuredRowIndex: k
    };
    Oe(e, D, "public"), Oe(e, S, "private");
  }, PM = (e) => {
    const t = d.useCallback((n = {}) => e.current.unstable_applyPipeProcessors("exportState", {}, n), [
      e
    ]), r = d.useCallback((n) => {
      e.current.unstable_applyPipeProcessors("restoreState", {
        callbacks: []
      }, {
        stateToRestore: n
      }).callbacks.forEach((s) => {
        s();
      }), e.current.forceUpdate();
    }, [
      e
    ]);
    Oe(e, {
      exportState: t,
      restoreState: r
    }, "public");
  }, IM = (e) => {
    const t = d.useRef({}), r = (i, a) => {
      var _a2;
      return (_a2 = t.current[i]) == null ? void 0 : _a2[a];
    }, o = () => {
      t.current = {};
    }, n = d.useCallback(({ rowId: i, minFirstColumn: a, maxLastColumn: u, columns: c }) => {
      for (let p = a; p < u; p += 1) {
        const g = MM({
          apiRef: e,
          lookup: t.current,
          columnIndex: p,
          rowId: i,
          minFirstColumnIndex: a,
          maxLastColumnIndex: u,
          columns: c
        });
        g.colSpan > 1 && (p += g.colSpan - 1);
      }
    }, [
      e
    ]), l = {
      unstable_getCellColSpanInfo: r
    }, s = {
      resetColSpan: o,
      calculateColSpan: n
    };
    Oe(e, l, "public"), Oe(e, s, "private"), le(e, "columnOrderChange", o);
  };
  function MM(e) {
    const { apiRef: t, lookup: r, columnIndex: o, rowId: n, minFirstColumnIndex: l, maxLastColumnIndex: s, columns: i } = e, a = i.length, u = i[o], c = t.current.getRow(n), p = t.current.getRowValue(c, u), g = typeof u.colSpan == "function" ? u.colSpan(p, c, u, t) : u.colSpan;
    if (!g || g === 1) return Ms(r, n, o, {
      spannedByColSpan: false,
      cellProps: {
        colSpan: 1,
        width: u.computedWidth
      }
    }), {
      colSpan: 1
    };
    let b = u.computedWidth;
    for (let h = 1; h < g; h += 1) {
      const m = o + h;
      if (m >= l && m < s) {
        const x = i[m];
        b += x.computedWidth, Ms(r, n, o + h, {
          spannedByColSpan: true,
          rightVisibleCellIndex: Math.min(o + g, a - 1),
          leftVisibleCellIndex: o
        });
      }
      Ms(r, n, o, {
        spannedByColSpan: false,
        cellProps: {
          colSpan: g,
          width: b
        }
      });
    }
    return {
      colSpan: g
    };
  }
  function Ms(e, t, r, o) {
    e[t] || (e[t] = {}), e[t][r] = o;
  }
  const Jd = (e, t, r) => {
    if (Ru(e)) {
      if (r[e.field] !== void 0) throw new Error([
        "MUI X: columnGroupingModel contains duplicated field",
        `column field ${e.field} occurs two times in the grouping model:`,
        `- ${r[e.field].join(" > ")}`,
        `- ${t.join(" > ")}`
      ].join(`
`));
      r[e.field] = t;
      return;
    }
    const { groupId: o, children: n } = e;
    n.forEach((l) => {
      Jd(l, [
        ...t,
        o
      ], r);
    });
  }, ti = (e) => {
    if (!e) return {};
    const t = {};
    return e.forEach((r) => {
      Jd(r, [], t);
    }), t;
  }, ri = (e, t, r) => {
    const o = (a) => t[a] ?? [], n = [], l = Math.max(...e.map((a) => o(a).length)), s = (a, u, c) => Tr(o(a).slice(0, c + 1), o(u).slice(0, c + 1)), i = (a, u) => !!((r == null ? void 0 : r.left) && r.left.includes(a) && !r.left.includes(u) || (r == null ? void 0 : r.right) && !r.right.includes(a) && r.right.includes(u));
    for (let a = 0; a < l; a += 1) {
      const u = e.reduce((c, p) => {
        const g = o(p)[a] ?? null;
        if (c.length === 0) return [
          {
            columnFields: [
              p
            ],
            groupId: g
          }
        ];
        const b = c[c.length - 1], h = b.columnFields[b.columnFields.length - 1];
        return b.groupId !== g || !s(h, p, a) || i(h, p) ? [
          ...c,
          {
            columnFields: [
              p
            ],
            groupId: g
          }
        ] : [
          ...c.slice(0, c.length - 1),
          {
            columnFields: [
              ...b.columnFields,
              p
            ],
            groupId: g
          }
        ];
      }, []);
      n.push(u);
    }
    return n;
  }, OM = [
    "groupId",
    "children"
  ], Vi = (e) => {
    let t = {};
    return e.forEach((r) => {
      if (Ru(r)) return;
      const { groupId: o, children: n } = r, l = fe(r, OM);
      if (!o) throw new Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
      const s = C({}, l, {
        groupId: o
      }), i = Vi(n);
      if (i[o] !== void 0 || t[o] !== void 0) throw new Error(`MUI X: The groupId ${o} is used multiple times in the columnGroupingModel.`);
      t = C({}, t, i, {
        [o]: s
      });
    }), C({}, t);
  }, FM = (e, t, r) => {
    if (!t.columnGroupingModel) return e;
    const o = Vr(r), n = Jo(r), l = Vi(t.columnGroupingModel ?? []), s = ti(t.columnGroupingModel ?? []), i = ri(o, s, r.current.state.pinnedColumns ?? {}), a = n.length === 0 ? 0 : Math.max(...n.map((u) => {
      var _a2;
      return ((_a2 = s[u]) == null ? void 0 : _a2.length) ?? 0;
    }));
    return C({}, e, {
      columnGrouping: {
        lookup: l,
        unwrappedGroupingModel: s,
        headerStructure: i,
        maxDepth: a
      }
    });
  }, kM = (e, t) => {
    const r = d.useCallback((i) => md(e)[i] ?? [], [
      e
    ]), o = d.useCallback(() => bd(e), [
      e
    ]);
    Oe(e, {
      getColumnGroupPath: r,
      getAllGroupDetails: o
    }, "public");
    const l = d.useCallback(() => {
      const i = ti(t.columnGroupingModel ?? []);
      e.current.setState((a) => {
        var _a2;
        const u = ((_a2 = a.columns) == null ? void 0 : _a2.orderedFields) ?? [], c = a.pinnedColumns ?? {}, p = ri(u, i, c);
        return C({}, a, {
          columnGrouping: C({}, a.columnGrouping, {
            headerStructure: p
          })
        });
      });
    }, [
      e,
      t.columnGroupingModel
    ]), s = d.useCallback((i) => {
      var _a2, _b2;
      const a = ((_b2 = (_a2 = e.current).getPinnedColumns) == null ? void 0 : _b2.call(_a2)) ?? {}, u = Vr(e), c = Jo(e), p = Vi(i ?? []), g = ti(i ?? []), b = ri(u, g, a), h = c.length === 0 ? 0 : Math.max(...c.map((m) => {
        var _a3;
        return ((_a3 = g[m]) == null ? void 0 : _a3.length) ?? 0;
      }));
      e.current.setState((m) => C({}, m, {
        columnGrouping: {
          lookup: p,
          unwrappedGroupingModel: g,
          headerStructure: b,
          maxDepth: h
        }
      }));
    }, [
      e
    ]);
    le(e, "columnIndexChange", l), le(e, "columnsChange", () => {
      s(t.columnGroupingModel);
    }), le(e, "columnVisibilityModelChange", () => {
      s(t.columnGroupingModel);
    }), d.useEffect(() => {
      s(t.columnGroupingModel);
    }, [
      s,
      t.columnGroupingModel
    ]);
  };
  function EM() {
    let e, t;
    const r = new Promise((o, n) => {
      e = o, t = n;
    });
    return r.resolve = e, r.reject = t, r;
  }
  function $c(e, t) {
    if (t !== void 0 && e.changedTouches) {
      for (let r = 0; r < e.changedTouches.length; r += 1) {
        const o = e.changedTouches[r];
        if (o.identifier === t) return {
          x: o.clientX,
          y: o.clientY
        };
      }
      return false;
    }
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  function Lc(e, t, r, o) {
    let n = e;
    return o === "Right" ? n += t - r.left : n += r.right - t, n;
  }
  function TM(e, t, r) {
    return r === "Left" ? e - t.left : t.right - e;
  }
  function AM(e) {
    return e === "Right" ? "Left" : "Right";
  }
  function DM(e, t) {
    const r = e.classList.contains(O["columnSeparator--sideRight"]) ? "Right" : "Left";
    return t ? AM(r) : r;
  }
  function Rc(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function $M(e) {
    const t = d.useRef(void 0), r = () => Id(e), o = X(e, r);
    return d.useEffect(() => {
      t.current && o === false && (t.current.resolve(), t.current = void 0);
    }), () => {
      if (!t.current) {
        if (r() === false) return Promise.resolve();
        t.current = EM();
      }
      return t.current;
    };
  }
  function LM(e, t) {
    if (e.length < 4) return e;
    const r = e.slice();
    r.sort((i, a) => i - a);
    const o = r[Math.floor(r.length * 0.25)], n = r[Math.floor(r.length * 0.75) - 1], l = n - o, s = l < 5 ? 5 : l * t;
    return r.filter((i) => i > o - s && i < n + s);
  }
  function RM(e, t, r) {
    const o = {}, n = e.current.rootElementRef.current;
    return n.classList.add(O.autosizing), r.forEach((l) => {
      const i = xS(e.current, l.field).map((h) => h.getBoundingClientRect().width ?? 0), a = t.includeOutliers ? i : LM(i, t.outliersFactor);
      if (t.includeHeaders) {
        const h = wS(e.current, l.field);
        if (h) {
          const m = h.querySelector(`.${O.columnHeaderTitle}`), x = h.querySelector(`.${O.columnHeaderTitleContainerContent}`), v = h.querySelector(`.${O.iconButtonContainer}`), w = h.querySelector(`.${O.menuIcon}`), k = m ?? x, L = window.getComputedStyle(h, null), F = parseInt(L.paddingLeft, 10) + parseInt(L.paddingRight, 10), j = k.scrollWidth + 1 + F + ((v == null ? void 0 : v.clientWidth) ?? 0) + ((w == null ? void 0 : w.clientWidth) ?? 0);
          a.push(j);
        }
      }
      const u = l.minWidth !== -1 / 0 && l.minWidth !== void 0, c = l.maxWidth !== 1 / 0 && l.maxWidth !== void 0, p = u ? l.minWidth : 0, g = c ? l.maxWidth : 1 / 0, b = a.length === 0 ? 0 : Math.max(...a);
      o[l.field] = tr(b, p, g);
    }), n.classList.remove(O.autosizing), o;
  }
  const jM = (e) => C({}, e, {
    columnResize: {
      resizingColumnField: ""
    }
  });
  function HM() {
    return {
      colDef: void 0,
      initialColWidth: 0,
      initialTotalWidth: 0,
      previousMouseClickEvent: void 0,
      columnHeaderElement: void 0,
      headerFilterElement: void 0,
      groupHeaderElements: [],
      cellElements: [],
      leftPinnedCellsAfter: [],
      rightPinnedCellsBefore: [],
      fillerLeft: void 0,
      fillerRight: void 0,
      leftPinnedHeadersAfter: [],
      rightPinnedHeadersBefore: []
    };
  }
  const zM = (e, t) => {
    const r = Xt(), o = Mt(e, "useGridColumnResize"), n = Lr(HM).current, l = d.useRef(null), s = d.useRef(null), i = Jt(), a = d.useRef(void 0), u = (S) => {
      var _a2, _b2;
      o.debug(`Updating width to ${S} for col ${n.colDef.field}`);
      const y = n.columnHeaderElement.offsetWidth, M = S - y, $ = S - n.initialColWidth;
      if ($ > 0) {
        const T = n.initialTotalWidth + $;
        (_b2 = (_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.style.setProperty("--DataGrid-rowWidth", `${T}px`);
      }
      n.colDef.computedWidth = S, n.colDef.width = S, n.colDef.flex = 0, n.columnHeaderElement.style.width = `${S}px`;
      const E = n.headerFilterElement;
      E && (E.style.width = `${S}px`), n.groupHeaderElements.forEach((T) => {
        const P = T;
        let A;
        P.getAttribute("aria-colspan") === "1" ? A = `${S}px` : A = `${P.offsetWidth + M}px`, P.style.width = A;
      }), n.cellElements.forEach((T) => {
        const P = T;
        let A;
        P.getAttribute("aria-colspan") === "1" ? A = `${S}px` : A = `${P.offsetWidth + M}px`, P.style.setProperty("--width", A);
      });
      const N = e.current.unstable_applyPipeProcessors("isColumnPinned", false, n.colDef.field);
      N === Jr.LEFT && (Mo(n.fillerLeft, "width", M), n.leftPinnedCellsAfter.forEach((T) => {
        Mo(T, "left", M);
      }), n.leftPinnedHeadersAfter.forEach((T) => {
        Mo(T, "left", M);
      })), N === Jr.RIGHT && (Mo(n.fillerRight, "width", M), n.rightPinnedCellsBefore.forEach((T) => {
        Mo(T, "right", M);
      }), n.rightPinnedHeadersBefore.forEach((T) => {
        Mo(T, "right", M);
      }));
    }, c = (S) => {
      if (v(), n.previousMouseClickEvent) {
        const y = n.previousMouseClickEvent, M = y.timeStamp, $ = y.clientX, E = y.clientY;
        if (S.timeStamp - M < 300 && S.clientX === $ && S.clientY === E) {
          n.previousMouseClickEvent = void 0, e.current.publishEvent("columnResizeStop", null, S);
          return;
        }
      }
      if (n.colDef) {
        e.current.setColumnWidth(n.colDef.field, n.colDef.width), o.debug(`Updating col ${n.colDef.field} with new width: ${n.colDef.width}`);
        const y = Ar(e.current.state);
        n.groupHeaderElements.forEach((M) => {
          const $ = fS(M), E = M, T = `${$.reduce((P, A) => y.columnVisibilityModel[A] !== false ? P + y.lookup[A].computedWidth : P, 0)}px`;
          E.style.width = T;
        });
      }
      i.start(0, () => {
        e.current.publishEvent("columnResizeStop", null, S);
      });
    }, p = (S, y, M) => {
      var _a2;
      const $ = e.current.rootElementRef.current;
      n.initialColWidth = S.computedWidth, n.initialTotalWidth = e.current.getRootDimensions().rowWidth, n.colDef = S, n.columnHeaderElement = pS(e.current.columnHeadersContainerRef.current, S.field);
      const E = $.querySelector(`.${O.headerFilterRow} [data-field="${qr(S.field)}"]`);
      E && (n.headerFilterElement = E), n.groupHeaderElements = gS((_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current, S.field), n.cellElements = hS(n.columnHeaderElement, e.current), n.fillerLeft = uc(e.current, r ? "filler--pinnedRight" : "filler--pinnedLeft"), n.fillerRight = uc(e.current, r ? "filler--pinnedLeft" : "filler--pinnedRight");
      const N = e.current.unstable_applyPipeProcessors("isColumnPinned", false, n.colDef.field);
      n.leftPinnedCellsAfter = N !== Jr.LEFT ? [] : mS(e.current, n.columnHeaderElement, r), n.rightPinnedCellsBefore = N !== Jr.RIGHT ? [] : bS(e.current, n.columnHeaderElement, r), n.leftPinnedHeadersAfter = N !== Jr.LEFT ? [] : CS(e.current, n.columnHeaderElement, r), n.rightPinnedHeadersBefore = N !== Jr.RIGHT ? [] : yS(e.current, n.columnHeaderElement, r), s.current = DM(y, r), l.current = TM(M, n.columnHeaderElement.getBoundingClientRect(), s.current);
    }, g = Be(c), b = Be((S) => {
      if (S.buttons === 0) {
        g(S);
        return;
      }
      let y = Lc(l.current, S.clientX, n.columnHeaderElement.getBoundingClientRect(), s.current);
      y = tr(y, n.colDef.minWidth, n.colDef.maxWidth), u(y);
      const M = {
        element: n.columnHeaderElement,
        colDef: n.colDef,
        width: y
      };
      e.current.publishEvent("columnResize", M, S);
    }), h = Be((S) => {
      $c(S, a.current) && c(S);
    }), m = Be((S) => {
      const y = $c(S, a.current);
      if (!y) return;
      if (S.type === "mousemove" && S.buttons === 0) {
        h(S);
        return;
      }
      let M = Lc(l.current, y.x, n.columnHeaderElement.getBoundingClientRect(), s.current);
      M = tr(M, n.colDef.minWidth, n.colDef.maxWidth), u(M);
      const $ = {
        element: n.columnHeaderElement,
        colDef: n.colDef,
        width: M
      };
      e.current.publishEvent("columnResize", $, S);
    }), x = Be((S) => {
      const y = Hl(S.target, O["columnSeparator--resizable"]);
      if (!y) return;
      const M = S.changedTouches[0];
      M != null && (a.current = M.identifier);
      const $ = Hl(S.target, O.columnHeader), E = dS($), N = e.current.getColumn(E);
      o.debug(`Start Resize on col ${N.field}`), e.current.publishEvent("columnResizeStart", {
        field: E
      }, S), p(N, y, M.clientX);
      const T = pr(S.currentTarget);
      T.addEventListener("touchmove", m), T.addEventListener("touchend", h);
    }), v = d.useCallback(() => {
      const S = pr(e.current.rootElementRef.current);
      S.body.style.removeProperty("cursor"), S.removeEventListener("mousemove", b), S.removeEventListener("mouseup", g), S.removeEventListener("touchmove", m), S.removeEventListener("touchend", h), setTimeout(() => {
        S.removeEventListener("click", Rc, true);
      }, 100), n.columnHeaderElement && (n.columnHeaderElement.style.pointerEvents = "unset");
    }, [
      e,
      n,
      b,
      g,
      m,
      h
    ]), w = d.useCallback(({ field: S }) => {
      e.current.setState((y) => C({}, y, {
        columnResize: C({}, y.columnResize, {
          resizingColumnField: S
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), k = d.useCallback(() => {
      e.current.setState((S) => C({}, S, {
        columnResize: C({}, S.columnResize, {
          resizingColumnField: ""
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), L = Be(({ colDef: S }, y) => {
      if (y.button !== 0 || !y.currentTarget.classList.contains(O["columnSeparator--resizable"])) return;
      y.preventDefault(), o.debug(`Start Resize on col ${S.field}`), e.current.publishEvent("columnResizeStart", {
        field: S.field
      }, y), p(S, y.currentTarget, y.clientX);
      const M = pr(e.current.rootElementRef.current);
      M.body.style.cursor = "col-resize", n.previousMouseClickEvent = y.nativeEvent, M.addEventListener("mousemove", b), M.addEventListener("mouseup", g), M.addEventListener("click", Rc, true);
    }), F = Be((S, y) => {
      if (t.disableAutosize || y.button !== 0) return;
      const M = e.current.state.columns.lookup[S.field];
      M.resizable !== false && e.current.autosizeColumns(C({}, t.autosizeOptions, {
        disableColumnVirtualization: false,
        columns: [
          M.field
        ]
      }));
    }), I = $M(e), j = d.useRef(false), D = d.useCallback(async (S) => {
      var _a2;
      if (!((_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) || j.current) return;
      j.current = true;
      const M = Ar(e.current.state), $ = C({}, tv, S, {
        columns: (S == null ? void 0 : S.columns) ?? M.orderedFields
      });
      $.columns = $.columns.filter((N) => M.columnVisibilityModel[N] !== false);
      const E = $.columns.map((N) => e.current.state.columns.lookup[N]);
      try {
        !t.disableVirtualization && $.disableColumnVirtualization && (e.current.unstable_setColumnVirtualization(false), await I());
        const N = RM(e, $, E), T = E.map((P) => C({}, P, {
          width: N[P.field],
          computedWidth: N[P.field],
          flex: 0
        }));
        if ($.expand) {
          const A = M.orderedFields.map((H) => M.lookup[H]).filter((H) => M.columnVisibilityModel[H.field] !== false).reduce((H, G) => H + (N[G.field] ?? G.computedWidth ?? G.width), 0), _ = e.current.getRootDimensions().viewportInnerSize.width - A;
          if (_ > 0) {
            const H = _ / (T.length || 1);
            T.forEach((G) => {
              G.width += H, G.computedWidth += H;
            });
          }
        }
        e.current.updateColumns(T), T.forEach((P, A) => {
          if (P.width !== E[A].width) {
            const R = P.width;
            e.current.publishEvent("columnWidthChange", {
              element: e.current.getColumnHeaderElement(P.field),
              colDef: P,
              width: R
            });
          }
        });
      } finally {
        t.disableVirtualization || e.current.unstable_setColumnVirtualization(true), j.current = false;
      }
    }, [
      e,
      I,
      t.disableVirtualization
    ]);
    d.useEffect(() => v, [
      v
    ]), Gc(() => {
      t.autosizeOnMount && Promise.resolve().then(() => {
        e.current.autosizeColumns(t.autosizeOptions);
      });
    }), ld(e, () => {
      var _a2;
      return (_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current;
    }, "touchstart", x, {
      passive: true
    }), Oe(e, {
      autosizeColumns: D
    }, "public"), le(e, "columnResizeStop", k), le(e, "columnResizeStart", w), le(e, "columnSeparatorMouseDown", L), le(e, "columnSeparatorDoubleClick", F), rt(e, "columnResize", t.onColumnResize), rt(e, "columnWidthChange", t.onColumnWidthChange);
  };
  function Mo(e, t, r) {
    e && (e.style[t] = `${parseInt(e.style[t], 10) + r}px`);
  }
  function NM(e, t) {
    return e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? null : e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex > t.lastRowIndex ? {
      firstRowIndex: t.lastRowIndex,
      lastRowIndex: e.lastRowIndex
    } : e.firstRowIndex < t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? {
      firstRowIndex: e.firstRowIndex,
      lastRowIndex: t.firstRowIndex - 1
    } : e;
  }
  function jc(e) {
    return e.firstRowIndex !== 0 || e.lastRowIndex !== 0;
  }
  const Os = (e, t, r) => {
    if (!e) return null;
    let o = e[t.field];
    const n = t.rowSpanValueGetter ?? t.valueGetter;
    return n && (o = n(o, e, t, r)), o;
  }, Ro = {
    spannedCells: {},
    hiddenCells: {},
    hiddenCellOriginMap: {}
  }, Vl = {
    firstRowIndex: 0,
    lastRowIndex: 0
  }, _M = /* @__PURE__ */ new Set([
    lr,
    "__reorder__",
    Yl
  ]), Hc = 20, ep = (e, t, r, o, n, l, s) => {
    const i = l ? {} : C({}, e.current.state.rowSpanning.spannedCells), a = l ? {} : C({}, e.current.state.rowSpanning.hiddenCells), u = l ? {} : C({}, e.current.state.rowSpanning.hiddenCellOriginMap);
    return l && (s = Vl), t.forEach((c) => {
      var _a2;
      if (!_M.has(c.field)) {
        for (let p = n.firstRowIndex; p < n.lastRowIndex; p += 1) {
          const g = r[p];
          if ((_a2 = a[g.id]) == null ? void 0 : _a2[c.field]) continue;
          const b = Os(g.model, c, e);
          if (b == null) continue;
          let h = g.id, m = p, x = 0;
          const v = [];
          if (p === n.firstRowIndex) {
            let k = p - 1, L = r[k];
            for (; k >= o.firstRowIndex && L && Os(L.model, c, e) === b; ) {
              const F = r[k + 1];
              a[F.id] ? a[F.id][c.field] = true : a[F.id] = {
                [c.field]: true
              }, v.push(p), x += 1, h = L.id, m = k, k -= 1, L = r[k];
            }
          }
          v.forEach((k) => {
            u[k] ? u[k][c.field] = m : u[k] = {
              [c.field]: m
            };
          });
          let w = p + 1;
          for (; w <= o.lastRowIndex && r[w] && Os(r[w].model, c, e) === b; ) {
            const k = r[w];
            a[k.id] ? a[k.id][c.field] = true : a[k.id] = {
              [c.field]: true
            }, u[w] ? u[w][c.field] = m : u[w] = {
              [c.field]: m
            }, w += 1, x += 1;
          }
          x > 0 && (i[h] ? i[h][c.field] = x + 1 : i[h] = {
            [c.field]: x + 1
          });
        }
        s = {
          firstRowIndex: Math.min(s.firstRowIndex, n.firstRowIndex),
          lastRowIndex: Math.max(s.lastRowIndex, n.lastRowIndex)
        };
      }
    }), {
      spannedCells: i,
      hiddenCells: a,
      hiddenCellOriginMap: u,
      processedRange: s
    };
  }, tp = (e, t) => {
    const r = yn(t).length;
    if (e.pagination) {
      const o = ud(t);
      let n = Hc;
      return o > 0 && (n = o - 1), {
        firstRowIndex: 0,
        lastRowIndex: Math.min(n, r)
      };
    }
    return {
      firstRowIndex: 0,
      lastRowIndex: Math.min(Hc, r)
    };
  }, GM = (e, t, r) => {
    var _a2;
    if (!t.unstable_rowSpanning) return C({}, e, {
      rowSpanning: Ro
    });
    const o = e.rows.dataRowIds || [], n = e.columns.orderedFields || [], l = e.rows.dataRowIdToModelLookup, s = e.columns.lookup, i = !!e.filter.filterModel.items.length || !!((_a2 = e.filter.filterModel.quickFilterValues) == null ? void 0 : _a2.length);
    if (!o.length || !n.length || !l || !s || i) return C({}, e, {
      rowSpanning: Ro
    });
    const a = tp(t, r), u = o.map((h) => ({
      id: h,
      model: l[h]
    })), c = n.map((h) => s[h]), { spannedCells: p, hiddenCells: g, hiddenCellOriginMap: b } = ep(r, c, u, a, a, true, Vl);
    return C({}, e, {
      rowSpanning: {
        spannedCells: p,
        hiddenCells: g,
        hiddenCellOriginMap: b
      }
    });
  }, VM = (e, t) => {
    const r = Lr(() => e.current.state.rowSpanning !== Ro ? tp(t, e) : Vl), o = d.useCallback((l, s = false) => {
      const { range: i, rows: a } = ro(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (i === null || !jc(l)) return;
      s && (r.current = Vl);
      const u = NM({
        firstRowIndex: l.firstRowIndex,
        lastRowIndex: Math.min(l.lastRowIndex, i.lastRowIndex + 1)
      }, r.current);
      if (u === null) return;
      const c = ft(e), { spannedCells: p, hiddenCells: g, hiddenCellOriginMap: b, processedRange: h } = ep(e, c, a, i, u, s, r.current);
      r.current = h;
      const m = Object.keys(p).length, x = Object.keys(g).length, v = Object.keys(e.current.state.rowSpanning.spannedCells).length, w = Object.keys(e.current.state.rowSpanning.hiddenCells).length;
      !(s || m !== v || x !== w) || m === 0 && v === 0 || e.current.setState((F) => C({}, F, {
        rowSpanning: {
          spannedCells: p,
          hiddenCells: g,
          hiddenCellOriginMap: b
        }
      }));
    }, [
      e,
      r,
      t.pagination,
      t.paginationMode
    ]), n = d.useCallback(() => {
      const l = Zn(e);
      jc(l) && o(l, true);
    }, [
      e,
      o
    ]);
    le(e, "renderedRowsIntervalChange", ao(t.unstable_rowSpanning, o)), le(e, "sortedRowsSet", ao(t.unstable_rowSpanning, n)), le(e, "paginationModelChange", ao(t.unstable_rowSpanning, n)), le(e, "filteredRowsSet", ao(t.unstable_rowSpanning, n)), le(e, "columnsChange", ao(t.unstable_rowSpanning, n)), d.useEffect(() => {
      t.unstable_rowSpanning ? e.current.state.rowSpanning === Ro && n() : e.current.state.rowSpanning !== Ro && e.current.setState((l) => C({}, l, {
        rowSpanning: Ro
      }));
    }, [
      e,
      n,
      t.unstable_rowSpanning
    ]);
  }, BM = (e, t, r) => C({}, e, {
    listViewColumn: t.unstable_listColumn ? C({}, t.unstable_listColumn, {
      computedWidth: oi(r)
    }) : void 0
  });
  function WM(e, t) {
    const r = () => {
      e.current.setState((l) => l.listViewColumn ? C({}, l, {
        listViewColumn: C({}, l.listViewColumn, {
          computedWidth: oi(e)
        })
      }) : l);
    }, o = d.useRef(null);
    le(e, "viewportInnerSizeChange", (l) => {
      o.current !== l.width && (o.current = l.width, r());
    }), le(e, "columnVisibilityModelChange", r), Tt(() => {
      const l = t.unstable_listColumn;
      l && e.current.setState((s) => C({}, s, {
        listViewColumn: C({}, l, {
          computedWidth: oi(e)
        })
      }));
    }, [
      e,
      t.unstable_listColumn
    ]), d.useEffect(() => {
      t.unstable_listView && t.unstable_listColumn;
    }, [
      t.unstable_listView,
      t.unstable_listColumn
    ]);
  }
  function oi(e) {
    return It(e.current.state).viewportInnerSize.width;
  }
  const UM = (e, t) => {
    const r = gI(e, t);
    return dM(r, t), sM(r), vt(pI, r, t), vt(aM, r, t), vt(vI, r, t), vt(tM, r, t), vt(VI, r, t), vt(JI, r, t), vt(RI, r, t), vt(pM, r, t), vt(WI, r, t), vt(AI, r, t), vt(GM, r, t), vt(PI, r, t), vt(jM, r, t), vt(wI, r, t), vt(FM, r, t), vt(fx, r, t), vt(CM, r, t), vt(vM, r, t), vt(BM, r, t), NI(r, t), cM(r, t), SI(r, t), rM(r, t), VM(r, t), iM(r, t), IM(r), kM(r, t), eM(r, t), jI(r, t), UI(r, t), LI(r, t), fM(r, t), II(r, t), zM(r, t), BI(r, t), SM(r, t), gM(r, t), xI(r), OI(r, t), TI(r, t), yI(r, t), yM(r, t), hM(r, t), PM(r), gx(r, t), WM(r, t), r;
  }, qM = (e) => {
    const { classes: t, headerAlign: r, isDragging: o, isLastColumn: n, showLeftBorder: l, showRightBorder: s, groupId: i, pinnedPosition: a } = e, u = {
      root: [
        "columnHeader",
        r === "left" && "columnHeader--alignLeft",
        r === "center" && "columnHeader--alignCenter",
        r === "right" && "columnHeader--alignRight",
        o && "columnHeader--moving",
        s && "columnHeader--withRightBorder",
        l && "columnHeader--withLeftBorder",
        "withBorderColor",
        i === null ? "columnHeader--emptyGroup" : "columnHeader--filledGroup",
        a === Te.LEFT && "columnHeader--pinnedLeft",
        a === Te.RIGHT && "columnHeader--pinnedRight",
        n && "columnHeader--last"
      ],
      draggableContainer: [
        "columnHeaderDraggableContainer"
      ],
      titleContainer: [
        "columnHeaderTitleContainer",
        "withBorderColor"
      ],
      titleContainerContent: [
        "columnHeaderTitleContainerContent"
      ]
    };
    return ge(u, Ae, t);
  };
  function KM(e) {
    var _a2;
    const { groupId: t, width: r, depth: o, maxDepth: n, fields: l, height: s, colIndex: i, hasFocus: a, tabIndex: u, isLastColumn: c, pinnedPosition: p, pinnedOffset: g } = e, b = ae(), h = Xt(), m = d.useRef(null), x = Fe(), v = X(x, bd), w = t ? v[t] : {}, { headerName: k = t ?? "", description: L = "", headerAlign: F = void 0 } = w;
    let I;
    const j = t && ((_a2 = v[t]) == null ? void 0 : _a2.renderHeaderGroup), D = d.useMemo(() => ({
      groupId: t,
      headerName: k,
      description: L,
      depth: o,
      maxDepth: n,
      fields: l,
      colIndex: i,
      isLastColumn: c
    }), [
      t,
      k,
      L,
      o,
      n,
      l,
      i,
      c
    ]);
    t && j && (I = j(D));
    const S = C({}, e, {
      classes: b.classes,
      headerAlign: F,
      depth: o,
      isDragging: false
    }), y = k ?? t, M = it(), $ = t === null ? `empty-group-cell-${M}` : t, E = qM(S);
    d.useLayoutEffect(() => {
      if (a) {
        const z = m.current.querySelector('[tabindex="0"]') || m.current;
        if (!z) return;
        if (ji()) z.focus({
          preventScroll: true
        });
        else {
          const _ = x.current.getScrollPosition();
          z.focus(), x.current.scroll(_);
        }
      }
    }, [
      x,
      a
    ]);
    const N = d.useCallback((R) => (z) => {
      Jn(z) || x.current.publishEvent(R, D, z);
    }, [
      x,
      D
    ]), T = d.useMemo(() => ({
      onKeyDown: N("columnGroupHeaderKeyDown"),
      onFocus: N("columnGroupHeaderFocus"),
      onBlur: N("columnGroupHeaderBlur")
    }), [
      N
    ]), P = typeof w.headerClassName == "function" ? w.headerClassName(D) : w.headerClassName, A = d.useMemo(() => rs(C({}, e.style), h, p, g), [
      p,
      g,
      e.style,
      h
    ]);
    return f.jsx(zd, C({
      ref: m,
      classes: E,
      columnMenuOpen: false,
      colIndex: i,
      height: s,
      isResizing: false,
      sortDirection: null,
      hasFocus: false,
      tabIndex: u,
      isDraggable: false,
      headerComponent: I,
      headerClassName: P,
      description: L,
      elementId: $,
      width: r,
      columnMenuIconButton: null,
      columnTitleIconButtons: null,
      resizable: false,
      label: y,
      "aria-colspan": l.length,
      "data-fields": `|-${l.join("-|-")}-|`,
      style: A
    }, T));
  }
  const zc = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderRow",
    overridesResolver: (e, t) => t.columnHeaderRow
  })({
    display: "flex"
  }), YM = (e) => {
    const { visibleColumns: t, sortColumnLookup: r, filterColumnLookup: o, columnHeaderTabIndexState: n, columnGroupHeaderTabIndexState: l, columnHeaderFocus: s, columnGroupHeaderFocus: i, headerGroupingMaxDepth: a, columnMenuState: u, columnVisibility: c, columnGroupsHeaderStructure: p, hasOtherElementInTabSequence: g } = e, [b, h] = d.useState(""), [m, x] = d.useState(""), v = yr(), w = ae(), k = X(v, md), L = X(v, lo), F = X(v, px), I = X(v, en), j = X(v, Ur), D = Fd(L, F, I.left.length), S = X(v, Ul), y = X(v, Ou), M = X(v, PC), $ = X(v, IC), E = X(v, Fu), N = d.useCallback((W) => x(W.field), []), T = d.useCallback(() => x(""), []), P = d.useCallback((W) => h(W.field), []), A = d.useCallback(() => h(""), []), R = d.useMemo(() => I.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: I.left.length
    } : null, [
      I.left.length
    ]), z = d.useMemo(() => I.right.length ? {
      firstColumnIndex: t.length - I.right.length,
      lastColumnIndex: t.length
    } : null, [
      I.right.length,
      t.length
    ]);
    le(v, "columnResizeStart", N), le(v, "columnResizeStop", T), le(v, "columnHeaderDragStart", P), le(v, "columnHeaderDragEnd", A);
    const _ = (W) => {
      const { renderContext: te = F } = W || {}, Z = te.firstColumnIndex, re = te.lastColumnIndex;
      return {
        renderedColumns: t.slice(Z, re),
        firstColumnToRender: Z,
        lastColumnToRender: re
      };
    }, H = (W, te, Z, re = false) => {
      const ce = (W == null ? void 0 : W.position) === Te.RIGHT, Ce = (W == null ? void 0 : W.position) === void 0, Y = I.right.length > 0 && ce || I.right.length === 0 && Ce, ne = D - Z;
      return f.jsxs(d.Fragment, {
        children: [
          Ce && f.jsx("div", {
            role: "presentation",
            style: {
              width: ne
            }
          }),
          te,
          Ce && f.jsx("div", {
            role: "presentation",
            className: ue(O.filler, re && O["filler--borderBottom"])
          }),
          Y && f.jsx(Ni, {
            header: true,
            pinnedRight: ce,
            borderBottom: re,
            borderTop: false
          })
        ]
      });
    }, G = (W, te = {}) => {
      const { renderedColumns: Z, firstColumnToRender: re } = _(W), ce = [];
      for (let Ce = 0; Ce < Z.length; Ce += 1) {
        const Y = Z[Ce], ne = re + Ce, he = ne === 0, J = n !== null && n.field === Y.field || he && !g ? 0 : -1, Ie = s !== null && s.field === Y.field, ee = u.open && u.field === Y.field, Se = W == null ? void 0 : W.position, xe = Mn(Se, Y.computedWidth, ne, L, S, E), ke = Se === Te.RIGHT ? Z[Ce - 1] : Z[Ce + 1], Ve = ke ? s !== null && s.field === ke.field : false, qe = ne + 1 === L.length - I.right.length, Ne = Ce, Le = Z.length, Re = _l(Se, Ne), Ke = Nl(Se, Ne, Le, w.showColumnVerticalBorder, y);
        ce.push(f.jsx($S, C({}, r[Y.field], {
          columnMenuOpen: ee,
          filterItemsCounter: o[Y.field] && o[Y.field].length,
          headerHeight: M,
          isDragging: Y.field === b,
          colDef: Y,
          colIndex: ne,
          isResizing: m === Y.field,
          isLast: ne === L.length - 1,
          hasFocus: Ie,
          tabIndex: J,
          pinnedPosition: Se,
          pinnedOffset: xe,
          isLastUnpinned: qe,
          isSiblingFocused: Ve,
          showLeftBorder: Re,
          showRightBorder: Ke
        }, te), Y.field));
      }
      return H(W, ce, 0);
    }, U = () => f.jsxs(zc, {
      role: "row",
      "aria-rowindex": a + 1,
      ownerState: w,
      className: O["row--borderBottom"],
      children: [
        R && G({
          position: Te.LEFT,
          renderContext: R
        }, {
          disableReorder: true
        }),
        G({
          renderContext: F
        }),
        z && G({
          position: Te.RIGHT,
          renderContext: z
        }, {
          disableReorder: true,
          separatorSide: zi.Left
        })
      ]
    }), B = ({ depth: W, params: te }) => {
      var _a2, _b2;
      const Z = _(te);
      if (Z.renderedColumns.length === 0) return null;
      const { firstColumnToRender: re, lastColumnToRender: ce } = Z, Ce = p[W], Y = t[re].field, ne = ((_a2 = k[Y]) == null ? void 0 : _a2[W]) ?? null, he = Ce.findIndex(({ groupId: Le, columnFields: Re }) => Le === ne && Re.includes(Y)), J = t[ce - 1].field, Ie = ((_b2 = k[J]) == null ? void 0 : _b2[W]) ?? null, ee = Ce.findIndex(({ groupId: Le, columnFields: Re }) => Le === Ie && Re.includes(J)), Se = Ce.slice(he, ee + 1).map((Le) => C({}, Le, {
        columnFields: Le.columnFields.filter((Re) => c[Re] !== false)
      })).filter((Le) => Le.columnFields.length > 0), xe = Se[0].columnFields.indexOf(Y), Ve = Se[0].columnFields.slice(0, xe).reduce((Le, Re) => {
        const Ke = j[Re];
        return Le + (Ke.computedWidth ?? 0);
      }, 0);
      let qe = re;
      const Ne = Se.map(({ groupId: Le, columnFields: Re }, Ke) => {
        const _e = i !== null && i.depth === W && Re.includes(i.field), me = l !== null && l.depth === W && Re.includes(l.field) ? 0 : -1, ve = {
          width: Re.reduce(($e, ct) => $e + j[ct].computedWidth, 0),
          fields: Re,
          colIndex: qe
        }, pe = te.position, be = Mn(pe, ve.width, qe, L, S, E);
        qe += Re.length;
        let je = Ke;
        return pe === Te.LEFT && (je = qe - 1), f.jsx(KM, {
          groupId: Le,
          width: ve.width,
          fields: ve.fields,
          colIndex: ve.colIndex,
          depth: W,
          isLastColumn: Ke === Se.length - 1,
          maxDepth: a,
          height: $,
          hasFocus: _e,
          tabIndex: me,
          pinnedPosition: pe,
          pinnedOffset: be,
          showLeftBorder: _l(pe, je),
          showRightBorder: Nl(pe, je, Se.length, w.showColumnVerticalBorder, y)
        }, Ke);
      });
      return H(te, Ne, Ve);
    };
    return {
      renderContext: F,
      leftRenderContext: R,
      rightRenderContext: z,
      pinnedColumns: I,
      visibleColumns: t,
      columnPositions: L,
      getFillers: H,
      getColumnHeadersRow: U,
      getColumnsToRender: _,
      getColumnGroupHeadersRows: () => {
        if (a === 0) return null;
        const W = [];
        for (let te = 0; te < a; te += 1) W.push(f.jsxs(zc, {
          role: "row",
          "aria-rowindex": te + 1,
          ownerState: w,
          children: [
            R && B({
              depth: te,
              params: {
                position: Te.LEFT,
                renderContext: R,
                maxLastColumn: R.lastColumnIndex
              }
            }),
            B({
              depth: te,
              params: {
                renderContext: F
              }
            }),
            z && B({
              depth: te,
              params: {
                position: Te.RIGHT,
                renderContext: z,
                maxLastColumn: z.lastColumnIndex
              }
            })
          ]
        }, te));
        return W;
      },
      getPinnedCellOffset: Mn,
      isDragging: !!b,
      getInnerProps: () => ({
        role: "rowgroup"
      })
    };
  }, XM = [
    "className"
  ], QM = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "columnHeaders"
      ]
    }, Ae, t);
  }, ZM = ot("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaders",
    overridesResolver: (e, t) => t.columnHeaders
  })({
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
    borderTopRightRadius: "var(--unstable_DataGrid-radius)"
  }), JM = ze(function(t, r) {
    const { className: o } = t, n = fe(t, XM), l = ae(), s = QM(l);
    return f.jsx(ZM, C({
      className: ue(s.root, o),
      ownerState: l
    }, n, {
      role: "presentation",
      ref: r
    }));
  }), e1 = [
    "className",
    "visibleColumns",
    "sortColumnLookup",
    "filterColumnLookup",
    "columnHeaderTabIndexState",
    "columnGroupHeaderTabIndexState",
    "columnHeaderFocus",
    "columnGroupHeaderFocus",
    "headerGroupingMaxDepth",
    "columnMenuState",
    "columnVisibility",
    "columnGroupsHeaderStructure",
    "hasOtherElementInTabSequence"
  ], t1 = ze(function(t, r) {
    const { visibleColumns: o, sortColumnLookup: n, filterColumnLookup: l, columnHeaderTabIndexState: s, columnGroupHeaderTabIndexState: i, columnHeaderFocus: a, columnGroupHeaderFocus: u, headerGroupingMaxDepth: c, columnMenuState: p, columnVisibility: g, columnGroupsHeaderStructure: b, hasOtherElementInTabSequence: h } = t, m = fe(t, e1), { getInnerProps: x, getColumnHeadersRow: v, getColumnGroupHeadersRows: w } = YM({
      visibleColumns: o,
      sortColumnLookup: n,
      filterColumnLookup: l,
      columnHeaderTabIndexState: s,
      columnGroupHeaderTabIndexState: i,
      columnHeaderFocus: a,
      columnGroupHeaderFocus: u,
      headerGroupingMaxDepth: c,
      columnMenuState: p,
      columnVisibility: g,
      columnGroupsHeaderStructure: b,
      hasOtherElementInTabSequence: h
    });
    return f.jsxs(JM, C({}, m, x(), {
      ref: r,
      children: [
        w(),
        v()
      ]
    }));
  }), r1 = Wr(t1);
  function o1(e) {
    return null;
  }
  function n1(e) {
    return null;
  }
  const l1 = ze(function(t, r) {
    const n = Fe().current.getLocaleText("noResultsOverlayLabel");
    return f.jsx(Hi, C({}, t, {
      ref: r,
      children: n
    }));
  }), s1 = [
    "sortingOrder"
  ], i1 = d.memo(function(t) {
    const { sortingOrder: r } = t, o = fe(t, s1), n = ae(), [l] = r, s = l === "asc" ? n.slots.columnSortedAscendingIcon : n.slots.columnSortedDescendingIcon;
    return s ? f.jsx(s, C({}, o)) : null;
  }), a1 = [
    "native"
  ];
  function c1(e) {
    let { native: t } = e, r = fe(e, a1);
    return t ? f.jsx("option", C({}, r)) : f.jsx(jt, C({}, r));
  }
  const u1 = {
    booleanCellTrueIcon: o0,
    booleanCellFalseIcon: vs,
    columnMenuIcon: JS,
    openFilterButtonIcon: US,
    filterPanelDeleteIcon: vs,
    columnFilteredIcon: hc,
    columnSelectorIcon: KS,
    columnUnsortedIcon: i1,
    columnSortedAscendingIcon: dc,
    columnSortedDescendingIcon: pc,
    columnResizeIcon: YS,
    densityCompactIcon: XS,
    densityStandardIcon: QS,
    densityComfortableIcon: ZS,
    exportIcon: r0,
    moreActionsIcon: n0,
    treeDataCollapseIcon: gc,
    treeDataExpandIcon: fc,
    groupingCriteriaCollapseIcon: gc,
    groupingCriteriaExpandIcon: fc,
    detailPanelExpandIcon: mc,
    detailPanelCollapseIcon: e0,
    rowReorderIcon: bc,
    quickFilterIcon: qS,
    quickFilterClearIcon: vs,
    columnMenuHideIcon: l0,
    columnMenuSortAscendingIcon: dc,
    columnMenuSortDescendingIcon: pc,
    columnMenuFilterIcon: hc,
    columnMenuManageColumnsIcon: s0,
    columnMenuClearIcon: i0,
    loadIcon: t0,
    filterPanelAddIcon: mc,
    filterPanelRemoveAllIcon: a0,
    columnReorderIcon: bc
  }, d1 = C({}, u1, {
    baseBadge: mh,
    baseCheckbox: Pl,
    baseDivider: Fp,
    baseTextField: ir,
    baseFormControl: vl,
    baseSelect: kn,
    baseButton: _o,
    baseIconButton: Et,
    baseInputAdornment: su,
    baseTooltip: _r,
    basePopper: bo,
    baseInputLabel: Sl,
    baseSelectOption: c1,
    baseChip: Ho
  }), p1 = C({}, d1, {
    cell: xv,
    skeletonCell: Fv,
    columnHeaderFilterIconButton: BS,
    columnHeaderSortIcon: GS,
    columnMenu: I0,
    columnHeaders: r1,
    detailPanels: o1,
    footer: OP,
    footerRowCount: _P,
    toolbar: null,
    pinnedRows: n1,
    loadingOverlay: DP,
    noResultsOverlay: l1,
    noRowsOverlay: $P,
    pagination: Wd,
    filterPanel: tP,
    columnsPanel: E0,
    columnsManagement: lP,
    panel: L0,
    row: qP
  }), f1 = {
    disableMultipleColumnsFiltering: true,
    disableMultipleColumnsSorting: true,
    throttleRowsMs: void 0,
    hideFooterRowCount: false,
    pagination: true,
    checkboxSelectionVisibleOnly: false,
    disableColumnReorder: true,
    keepColumnPositionIfDraggedOutside: false,
    signature: "DataGrid",
    unstable_listView: false
  }, g1 = p1, h1 = (e) => {
    const t = zn(), r = gv(d.useMemo(() => Lp({
      props: e,
      theme: t,
      name: "MuiDataGrid"
    }), [
      t,
      e
    ])), o = d.useMemo(() => C({}, ku, r.localeText), [
      r.localeText
    ]), n = d.useMemo(() => pv({
      defaultSlots: g1,
      slots: r.slots
    }), [
      r.slots
    ]), l = d.useMemo(() => Object.keys(ei).reduce((s, i) => (s[i] = r[i] ?? ei[i], s), {}), [
      r
    ]);
    return d.useMemo(() => C({}, r, l, {
      localeText: o,
      slots: n
    }, f1), [
      r,
      o,
      n,
      l
    ]);
  }, m1 = {
    hooks: {
      useGridAriaAttributes: KP,
      useGridRowAriaAttributes: YP,
      useCellAggregationResult: () => null
    }
  }, rp = ze(function(t, r) {
    var _a2;
    const o = h1(t), n = UM(o.apiRef, o);
    return f.jsx(XP, {
      privateApiRef: n,
      configuration: m1,
      props: o,
      children: f.jsx(Uv, C({
        className: o.className,
        style: o.style,
        sx: o.sx
      }, o.forwardedProps, (_a2 = o.slotProps) == null ? void 0 : _a2.root, {
        ref: r
      }))
    });
  }), b1 = d.memo(rp);
  rp.propTypes = {
    apiRef: V.shape({
      current: V.object.isRequired
    }),
    "aria-label": V.string,
    "aria-labelledby": V.string,
    autoHeight: V.bool,
    autoPageSize: V.bool,
    autosizeOnMount: V.bool,
    autosizeOptions: V.shape({
      columns: V.arrayOf(V.string),
      disableColumnVirtualization: V.bool,
      expand: V.bool,
      includeHeaders: V.bool,
      includeOutliers: V.bool,
      outliersFactor: V.number
    }),
    cellModesModel: V.object,
    checkboxSelection: V.bool,
    classes: V.object,
    clipboardCopyCellDelimiter: V.string,
    columnBufferPx: V.number,
    columnGroupHeaderHeight: V.number,
    columnGroupingModel: V.arrayOf(V.object),
    columnHeaderHeight: V.number,
    columns: V.arrayOf(V.object).isRequired,
    columnVisibilityModel: V.object,
    density: V.oneOf([
      "comfortable",
      "compact",
      "standard"
    ]),
    disableAutosize: V.bool,
    disableColumnFilter: V.bool,
    disableColumnMenu: V.bool,
    disableColumnResize: V.bool,
    disableColumnSelector: V.bool,
    disableColumnSorting: V.bool,
    disableDensitySelector: V.bool,
    disableEval: V.bool,
    disableMultipleRowSelection: V.bool,
    disableRowSelectionOnClick: V.bool,
    disableVirtualization: V.bool,
    editMode: V.oneOf([
      "cell",
      "row"
    ]),
    estimatedRowCount: V.number,
    experimentalFeatures: V.shape({
      warnIfFocusStateIsNotSynced: V.bool
    }),
    filterDebounceMs: V.number,
    filterMode: V.oneOf([
      "client",
      "server"
    ]),
    filterModel: V.shape({
      items: V.arrayOf(V.shape({
        field: V.string.isRequired,
        id: V.oneOfType([
          V.number,
          V.string
        ]),
        operator: V.string.isRequired,
        value: V.any
      })).isRequired,
      logicOperator: V.oneOf([
        "and",
        "or"
      ]),
      quickFilterExcludeHiddenColumns: V.bool,
      quickFilterLogicOperator: V.oneOf([
        "and",
        "or"
      ]),
      quickFilterValues: V.array
    }),
    forwardedProps: V.object,
    getCellClassName: V.func,
    getDetailPanelContent: V.func,
    getEstimatedRowHeight: V.func,
    getRowClassName: V.func,
    getRowHeight: V.func,
    getRowId: V.func,
    getRowSpacing: V.func,
    hideFooter: V.bool,
    hideFooterPagination: V.bool,
    hideFooterSelectedRowCount: V.bool,
    ignoreDiacritics: V.bool,
    ignoreValueFormatterDuringExport: V.oneOfType([
      V.shape({
        clipboardExport: V.bool,
        csvExport: V.bool
      }),
      V.bool
    ]),
    indeterminateCheckboxAction: V.oneOf([
      "deselect",
      "select"
    ]),
    initialState: V.object,
    isCellEditable: V.func,
    isRowSelectable: V.func,
    keepNonExistentRowsSelected: V.bool,
    loading: V.bool,
    localeText: V.object,
    logger: V.shape({
      debug: V.func.isRequired,
      error: V.func.isRequired,
      info: V.func.isRequired,
      warn: V.func.isRequired
    }),
    logLevel: V.oneOf([
      "debug",
      "error",
      "info",
      "warn",
      false
    ]),
    nonce: V.string,
    onCellClick: V.func,
    onCellDoubleClick: V.func,
    onCellEditStart: V.func,
    onCellEditStop: V.func,
    onCellKeyDown: V.func,
    onCellModesModelChange: V.func,
    onClipboardCopy: V.func,
    onColumnHeaderClick: V.func,
    onColumnHeaderContextMenu: V.func,
    onColumnHeaderDoubleClick: V.func,
    onColumnHeaderEnter: V.func,
    onColumnHeaderLeave: V.func,
    onColumnHeaderOut: V.func,
    onColumnHeaderOver: V.func,
    onColumnOrderChange: V.func,
    onColumnResize: V.func,
    onColumnVisibilityModelChange: V.func,
    onColumnWidthChange: V.func,
    onDensityChange: V.func,
    onFilterModelChange: V.func,
    onMenuClose: V.func,
    onMenuOpen: V.func,
    onPaginationMetaChange: V.func,
    onPaginationModelChange: V.func,
    onPreferencePanelClose: V.func,
    onPreferencePanelOpen: V.func,
    onProcessRowUpdateError: V.func,
    onResize: V.func,
    onRowClick: V.func,
    onRowCountChange: V.func,
    onRowDoubleClick: V.func,
    onRowEditStart: V.func,
    onRowEditStop: V.func,
    onRowModesModelChange: V.func,
    onRowSelectionModelChange: V.func,
    onSortModelChange: V.func,
    onStateChange: V.func,
    pageSizeOptions: V.arrayOf(V.oneOfType([
      V.number,
      V.shape({
        label: V.string.isRequired,
        value: V.number.isRequired
      })
    ]).isRequired),
    pagination: V.oneOf([
      true
    ]),
    paginationMeta: V.shape({
      hasNextPage: V.bool
    }),
    paginationMode: V.oneOf([
      "client",
      "server"
    ]),
    paginationModel: V.shape({
      page: V.number.isRequired,
      pageSize: V.number.isRequired
    }),
    processRowUpdate: V.func,
    resetPageOnSortFilter: V.bool,
    resizeThrottleMs: V.number,
    rowBufferPx: V.number,
    rowCount: V.number,
    rowHeight: V.number,
    rowModesModel: V.object,
    rowPositionsDebounceMs: V.number,
    rows: V.arrayOf(V.object),
    rowSelection: V.bool,
    rowSelectionModel: V.oneOfType([
      V.arrayOf(V.oneOfType([
        V.number,
        V.string
      ]).isRequired),
      V.number,
      V.string
    ]),
    rowSpacingType: V.oneOf([
      "border",
      "margin"
    ]),
    scrollbarSize: V.number,
    showCellVerticalBorder: V.bool,
    showColumnVerticalBorder: V.bool,
    slotProps: V.object,
    slots: V.object,
    sortingMode: V.oneOf([
      "client",
      "server"
    ]),
    sortingOrder: V.arrayOf(V.oneOf([
      "asc",
      "desc"
    ])),
    sortModel: V.arrayOf(V.shape({
      field: V.string.isRequired,
      sort: V.oneOf([
        "asc",
        "desc"
      ])
    })),
    sx: V.oneOfType([
      V.arrayOf(V.oneOfType([
        V.func,
        V.object,
        V.bool
      ])),
      V.func,
      V.object
    ]),
    unstable_rowSpanning: V.bool,
    virtualizeColumnsWithAutoRowHeight: V.bool
  };
  const C1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Pfad anzeigen"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Zur ersten Seite" : e === "last" ? "Zur letzten Seite" : e === "next" ? "Zur n\xE4chsten Seite" : "Zur vorherigen Seite",
          labelRowsPerPage: "Zeilen pro Seite:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} von ${r !== -1 ? r : `mehr als ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} ${e !== 1 ? "Sterne" : "Stern"}`,
          emptyLabelText: "Keine Wertung"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Leeren",
          closeText: "Schlie\xDFen",
          loadingText: "Wird geladen\u2026",
          noOptionsText: "Keine Optionen",
          openText: "\xD6ffnen"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Schlie\xDFen"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "Navigation via Seitennummerierung",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Gehe zu "}Seite ${t}` : e === "first" ? "Zur ersten Seite" : e === "last" ? "Zur letzten Seite" : e === "next" ? "Zur n\xE4chsten Seite" : "Zur vorherigen Seite"
        }
      }
    }
  }, y1 = {}, w1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Mostrar ruta"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Ir a la primera p\xE1gina" : e === "last" ? "Ir a la \xFAltima p\xE1gina" : e === "next" ? "Ir a la p\xE1gina siguiente" : "Ir a la p\xE1gina anterior",
          labelRowsPerPage: "Filas por p\xE1gina:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} de ${r !== -1 ? r : `m\xE1s de ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} Estrella${e !== 1 ? "s" : ""}`,
          emptyLabelText: "Vac\xEDo"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Limpiar",
          closeText: "Cerrar",
          loadingText: "Cargando\u2026",
          noOptionsText: "Sin opciones",
          openText: "Abierto"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Cerrar"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "Paginador",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : e === "first" ? "Ir a la primera p\xE1gina" : e === "last" ? "Ir a la \xFAltima p\xE1gina" : e === "next" ? "Ir a la p\xE1gina siguiente" : "Ir a la p\xE1gina anterior"
        }
      }
    }
  }, x1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Montrer le chemin"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Aller \xE0 la premi\xE8re page" : e === "last" ? "Aller \xE0 la derni\xE8re page" : e === "next" ? "Aller \xE0 la page suivante" : "Aller \xE0 la page pr\xE9c\xE9dente",
          labelRowsPerPage: "Lignes par page :",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} sur ${r !== -1 ? r : `plus que ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} Etoile${e !== 1 ? "s" : ""}`,
          emptyLabelText: "Vide"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Vider",
          closeText: "Fermer",
          loadingText: "Chargement\u2026",
          noOptionsText: "Pas de r\xE9sultats",
          openText: "Ouvrir"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Fermer"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "navigation de pagination",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Aller \xE0 la "}page ${t}` : e === "first" ? "Aller \xE0 la premi\xE8re page" : e === "last" ? "Aller \xE0 la derni\xE8re page" : e === "next" ? "Aller \xE0 la page suivante" : "Aller \xE0 la page pr\xE9c\xE9dente"
        }
      }
    }
  }, v1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Visualizza percorso"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Vai alla prima pagina" : e === "last" ? "Vai all'ultima pagina" : e === "next" ? "Vai alla pagina successiva" : "Vai alla pagina precedente",
          labelRowsPerPage: "Righe per pagina:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} di ${r !== -1 ? r : `pi\xF9 di ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} Stell${e !== 1 ? "e" : "a"}`,
          emptyLabelText: "Vuoto"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Svuota",
          closeText: "Chiudi",
          loadingText: "Caricamento in corso\u2026",
          noOptionsText: "Nessuna opzione",
          openText: "Apri"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Chiudi"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "Navigazione impaginata",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Vai alla "}pagina ${t}` : e === "first" ? "Vai alla prima pagina" : e === "last" ? "Vai all'ultima pagina" : e === "next" ? "Vai alla pagina successiva" : "Vai alla pagina precedente"
        }
      }
    }
  }, S1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Pad tonen"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Ga naar eerste pagina" : e === "last" ? "Ga naar laatste pagina" : e === "next" ? "Ga naar volgende pagina" : "Ga naar vorige pagina",
          labelRowsPerPage: "Regels per pagina:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} van ${r !== -1 ? r : `meer dan ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} Ster${e !== 1 ? "ren" : ""}`,
          emptyLabelText: "Leeg"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Wissen",
          closeText: "Sluiten",
          loadingText: "Laden\u2026",
          noOptionsText: "Geen opties",
          openText: "Openen"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Sluiten"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "Navigatie via paginering",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Ga naar "}pagina ${t}` : e === "first" ? "Ga naar eerste pagina" : e === "last" ? "Ga naar laatste pagina" : e === "next" ? "Ga naar volgende pagina" : "Ga naar vorige pagina"
        }
      }
    }
  }, P1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Poka\u017C \u015Bcie\u017Ck\u0119"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Przejd\u017A do pierwszej strony" : e === "last" ? "Przejd\u017A do ostatniej strony" : e === "next" ? "Przejd\u017A do nast\u0119pnej strony" : "Przejd\u017A do poprzedniej strony",
          labelRowsPerPage: "Wierszy na stron\u0119:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} z ${r !== -1 ? r : `ponad ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => {
            let t = "gwiazdek";
            const r = e % 10;
            return (e < 10 || e > 20) && r > 1 && r < 5 ? t = "gwiazdki" : e === 1 && (t = "gwiazdka"), `${e} ${t}`;
          },
          emptyLabelText: "Brak gwiazdek"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Wyczy\u015B\u0107",
          closeText: "Zamknij",
          loadingText: "\u0141adowanie\u2026",
          noOptionsText: "Brak opcji",
          openText: "Otw\xF3rz"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Zamknij"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "Nawigacja podzia\u0142u na strony",
          getItemAriaLabel: (e, t, r) => e === "page" ? r ? `${t}. strona` : `Przejd\u017A do ${t}. strony` : e === "first" ? "Przejd\u017A do pierwszej strony" : e === "last" ? "Przejd\u017A do ostatniej strony" : e === "next" ? "Przejd\u017A do nast\u0119pnej strony" : "Przejd\u017A do poprzedniej strony"
        }
      }
    }
  }, I1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "Mostrar caminho"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "Ir para a primeira p\xE1gina" : e === "last" ? "Ir para a \xFAltima p\xE1gina" : e === "next" ? "Ir para a pr\xF3xima p\xE1gina" : "Ir para a p\xE1gina anterior",
          labelRowsPerPage: "Linhas por p\xE1gina:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} de ${r !== -1 ? r : `mais de ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} Estrela${e !== 1 ? "s" : ""}`,
          emptyLabelText: "Vazio"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "Limpar",
          closeText: "Fechar",
          loadingText: "Carregando\u2026",
          noOptionsText: "Sem op\xE7\xF5es",
          openText: "Abrir"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "Fechar"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "Navegar pela pagina\xE7\xE3o",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Ir para a "}p\xE1gina ${t}` : e === "first" ? "Ir para a primeira p\xE1gina" : e === "last" ? "Ir para a \xFAltima p\xE1gina" : e === "next" ? "Ir para a pr\xF3xima p\xE1gina" : "Ir para a p\xE1gina anterior"
        }
      }
    }
  }, M1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0443\u0442\u044C"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" : e === "last" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" : e === "next" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" : "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
          labelRowsPerPage: "\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} \u0438\u0437 ${r !== -1 ? r : `\u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => {
            let t = "\u0417\u0432\u0451\u0437\u0434";
            const r = e % 10;
            return r > 1 && r < 5 ? t = "\u0417\u0432\u0435\u0437\u0434\u044B" : r === 1 && (t = "\u0417\u0432\u0435\u0437\u0434\u0430"), `${e} ${t}`;
          },
          emptyLabelText: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
          closeText: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
          loadingText: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",
          noOptionsText: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
          openText: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C",
          getItemAriaLabel: (e, t, r) => e === "page" ? r ? `${t} \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430` : `\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 ${t} \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443` : e === "first" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" : e === "last" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" : e === "next" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" : "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
        }
      }
    }
  }, O1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0448\u043B\u044F\u0445 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0448\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443" : e === "last" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443" : e === "next" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443" : "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
          labelRowsPerPage: "\u0420\u044F\u0434\u043A\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `${e}\u2013${t} \u0437 ${r !== -1 ? r : `\u043F\u043E\u043D\u0430\u0434 ${t}`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => {
            let t = "\u0417\u0456\u0440\u043E\u043A";
            const r = e % 10;
            return r > 1 && r < 5 ? t = "\u0417\u0456\u0440\u043A\u0438" : r === 1 && (t = "\u0417\u0456\u0440\u043A\u0430"), `${e} ${t}`;
          },
          emptyLabelText: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
          closeText: "\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438",
          loadingText: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F\u2026",
          noOptionsText: "\u041D\u0435\u043C\u0430\u0454 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432",
          openText: "\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438"
        }
      },
      MuiPagination: {
        defaultProps: {
          "aria-label": "\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u043C\u0438",
          getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 "}\u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 ${t}` : e === "first" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0448\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443" : e === "last" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443" : e === "next" ? "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443" : "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443"
        }
      }
    }
  }, F1 = {
    components: {
      MuiBreadcrumbs: {
        defaultProps: {
          expandText: "\u5C55\u5F00"
        }
      },
      MuiTablePagination: {
        defaultProps: {
          getItemAriaLabel: (e) => e === "first" ? "\u7B2C\u4E00\u9875" : e === "last" ? "\u6700\u540E\u4E00\u9875" : e === "next" ? "\u4E0B\u4E00\u9875" : "\u4E0A\u4E00\u9875",
          labelRowsPerPage: "\u6BCF\u9875\u884C\u6570:",
          labelDisplayedRows: ({ from: e, to: t, count: r }) => `\u7B2C ${e} \u6761\u5230\u7B2C ${t} \u6761\uFF0C${r !== -1 ? `\u5171 ${r} \u6761` : `\u81F3\u5C11 ${t} \u6761`}`
        }
      },
      MuiRating: {
        defaultProps: {
          getLabelText: (e) => `${e} \u9897\u661F`,
          emptyLabelText: "\u65E0\u6807\u7B7E"
        }
      },
      MuiAutocomplete: {
        defaultProps: {
          clearText: "\u6E05\u7A7A",
          closeText: "\u5173\u95ED",
          loadingText: "\u52A0\u8F7D\u4E2D\u2026\u2026",
          noOptionsText: "\u6CA1\u6709\u53EF\u7528\u9009\u9879",
          openText: "\u6253\u5F00"
        }
      },
      MuiAlert: {
        defaultProps: {
          closeText: "\u5173\u95ED"
        }
      }
    }
  }, Mr = (e, t) => {
    var _a2, _b2;
    return {
      components: {
        MuiDataGrid: {
          defaultProps: {
            localeText: C({}, e, {
              MuiTablePagination: ((_b2 = (_a2 = t == null ? void 0 : t.components) == null ? void 0 : _a2.MuiTablePagination) == null ? void 0 : _b2.defaultProps) || {}
            })
          }
        }
      }
    };
  }, k1 = {
    noRowsLabel: "Keine Eintr\xE4ge",
    noResultsOverlayLabel: "Keine Ergebnisse gefunden.",
    toolbarDensity: "Zeilenh\xF6he",
    toolbarDensityLabel: "Zeilenh\xF6he",
    toolbarDensityCompact: "Kompakt",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Breit",
    toolbarColumns: "Spalten",
    toolbarColumnsLabel: "Zeige Spaltenauswahl",
    toolbarFilters: "Filter",
    toolbarFiltersLabel: "Zeige Filter",
    toolbarFiltersTooltipHide: "Verberge Filter",
    toolbarFiltersTooltipShow: "Zeige Filter",
    toolbarFiltersTooltipActive: (e) => e !== 1 ? `${e} aktive Filter` : `${e} aktiver Filter`,
    toolbarQuickFilterPlaceholder: "Suchen\u2026",
    toolbarQuickFilterLabel: "Suchen",
    toolbarQuickFilterDeleteIconLabel: "L\xF6schen",
    toolbarExport: "Exportieren",
    toolbarExportLabel: "Exportieren",
    toolbarExportCSV: "Download als CSV",
    toolbarExportPrint: "Drucken",
    toolbarExportExcel: "Download als Excel",
    columnsManagementSearchTitle: "Suche",
    columnsManagementNoColumns: "Keine Spalten",
    columnsManagementShowHideAllText: "Alle anzeigen/verbergen",
    columnsManagementReset: "Zur\xFCcksetzen",
    columnsManagementDeleteIconLabel: "L\xF6schen",
    filterPanelAddFilter: "Filter hinzuf\xFCgen",
    filterPanelRemoveAll: "Alle entfernen",
    filterPanelDeleteIconLabel: "L\xF6schen",
    filterPanelLogicOperator: "Logische Operatoren",
    filterPanelOperator: "Operatoren",
    filterPanelOperatorAnd: "Und",
    filterPanelOperatorOr: "Oder",
    filterPanelColumns: "Spalten",
    filterPanelInputLabel: "Wert",
    filterPanelInputPlaceholder: "Wert filtern",
    filterOperatorContains: "enth\xE4lt",
    filterOperatorDoesNotContain: "enth\xE4lt nicht",
    filterOperatorEquals: "ist gleich",
    filterOperatorDoesNotEqual: "ist ungleich",
    filterOperatorStartsWith: "beginnt mit",
    filterOperatorEndsWith: "endet mit",
    filterOperatorIs: "ist",
    filterOperatorNot: "ist nicht",
    filterOperatorAfter: "ist nach",
    filterOperatorOnOrAfter: "ist am oder nach",
    filterOperatorBefore: "ist vor",
    filterOperatorOnOrBefore: "ist am oder vor",
    filterOperatorIsEmpty: "ist leer",
    filterOperatorIsNotEmpty: "ist nicht leer",
    filterOperatorIsAnyOf: "ist einer der Werte",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Enth\xE4lt",
    headerFilterOperatorDoesNotContain: "Enth\xE4lt nicht",
    headerFilterOperatorEquals: "Gleich",
    headerFilterOperatorDoesNotEqual: "Ungleich",
    headerFilterOperatorStartsWith: "Beginnt mit",
    headerFilterOperatorEndsWith: "Endet mit",
    headerFilterOperatorIs: "Ist",
    headerFilterOperatorNot: "Ist nicht",
    headerFilterOperatorAfter: "Ist nach",
    headerFilterOperatorOnOrAfter: "Ist am oder nach",
    headerFilterOperatorBefore: "Ist vor",
    headerFilterOperatorOnOrBefore: "Ist am oder vor",
    headerFilterOperatorIsEmpty: "Ist leer",
    headerFilterOperatorIsNotEmpty: "Ist nicht leer",
    headerFilterOperatorIsAnyOf: "Ist eines von",
    "headerFilterOperator=": "Gleich",
    "headerFilterOperator!=": "Ungleich",
    "headerFilterOperator>": "Gr\xF6\xDFer als",
    "headerFilterOperator>=": "Gr\xF6\xDFer als oder gleich",
    "headerFilterOperator<": "Kleiner als",
    "headerFilterOperator<=": "Kleiner als oder gleich",
    filterValueAny: "Beliebig",
    filterValueTrue: "Ja",
    filterValueFalse: "Nein",
    columnMenuLabel: "Men\xFC",
    columnMenuShowColumns: "Zeige alle Spalten",
    columnMenuManageColumns: "Spalten verwalten",
    columnMenuFilter: "Filter",
    columnMenuHideColumn: "Verbergen",
    columnMenuUnsort: "Sortierung deaktivieren",
    columnMenuSortAsc: "Sortiere aufsteigend",
    columnMenuSortDesc: "Sortiere absteigend",
    columnHeaderFiltersTooltipActive: (e) => e !== 1 ? `${e} aktive Filter` : `${e} aktiver Filter`,
    columnHeaderFiltersLabel: "Zeige Filter",
    columnHeaderSortIconLabel: "Sortieren",
    footerRowSelected: (e) => e !== 1 ? `${e.toLocaleString()} Eintr\xE4ge ausgew\xE4hlt` : `${e.toLocaleString()} Eintrag ausgew\xE4hlt`,
    footerTotalRows: "Gesamt:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} von ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Checkbox Auswahl",
    checkboxSelectionSelectAllRows: "Alle Zeilen ausw\xE4hlen",
    checkboxSelectionUnselectAllRows: "Alle Zeilen abw\xE4hlen",
    checkboxSelectionSelectRow: "Zeile ausw\xE4hlen",
    checkboxSelectionUnselectRow: "Zeile abw\xE4hlen",
    booleanCellTrueLabel: "Ja",
    booleanCellFalseLabel: "Nein",
    actionsCellMore: "Mehr",
    pinToLeft: "Links anheften",
    pinToRight: "Rechts anheften",
    unpin: "Losl\xF6sen",
    treeDataGroupingHeaderName: "Gruppe",
    treeDataExpand: "Kinder einblenden",
    treeDataCollapse: "Kinder ausblenden",
    groupingColumnHeaderName: "Gruppierung",
    groupColumn: (e) => `Gruppieren nach ${e}`,
    unGroupColumn: (e) => `Gruppierung nach ${e} aufheben`,
    detailPanelToggle: "Detailansicht Kippschalter",
    expandDetailPanel: "Aufklappen",
    collapseDetailPanel: "Zuklappen",
    rowReorderingHeaderName: "Reihen neu ordnen",
    aggregationMenuItemHeader: "Aggregation",
    aggregationFunctionLabelSum: "Summe",
    aggregationFunctionLabelAvg: "Mittelwert",
    aggregationFunctionLabelMin: "Minimum",
    aggregationFunctionLabelMax: "Maximum",
    aggregationFunctionLabelSize: "Anzahl"
  }, E1 = Mr(k1, C1), op = Mr(ku, y1), T1 = {
    noRowsLabel: "Sin filas",
    noResultsOverlayLabel: "Resultados no encontrados",
    toolbarDensity: "Densidad",
    toolbarDensityLabel: "Densidad",
    toolbarDensityCompact: "Compacta",
    toolbarDensityStandard: "Est\xE1ndar",
    toolbarDensityComfortable: "C\xF3moda",
    toolbarColumns: "Columnas",
    toolbarColumnsLabel: "Seleccionar columnas",
    toolbarFilters: "Filtros",
    toolbarFiltersLabel: "Mostrar filtros",
    toolbarFiltersTooltipHide: "Ocultar filtros",
    toolbarFiltersTooltipShow: "Mostrar filtros",
    toolbarFiltersTooltipActive: (e) => e > 1 ? `${e} filtros activos` : `${e} filtro activo`,
    toolbarQuickFilterPlaceholder: "Buscar\u2026",
    toolbarQuickFilterLabel: "Buscar",
    toolbarQuickFilterDeleteIconLabel: "Limpiar",
    toolbarExport: "Exportar",
    toolbarExportLabel: "Exportar",
    toolbarExportCSV: "Descargar como CSV",
    toolbarExportPrint: "Imprimir",
    toolbarExportExcel: "Descargar como Excel",
    columnsManagementSearchTitle: "Buscar",
    columnsManagementNoColumns: "Sin columnas",
    columnsManagementShowHideAllText: "Mostrar/Ocultar todas",
    columnsManagementReset: "Restablecer",
    columnsManagementDeleteIconLabel: "Limpiar",
    filterPanelAddFilter: "Agregar filtro",
    filterPanelRemoveAll: "Remover todos",
    filterPanelDeleteIconLabel: "Borrar",
    filterPanelLogicOperator: "Operador l\xF3gico",
    filterPanelOperator: "Operadores",
    filterPanelOperatorAnd: "Y",
    filterPanelOperatorOr: "O",
    filterPanelColumns: "Columnas",
    filterPanelInputLabel: "Valor",
    filterPanelInputPlaceholder: "Valor de filtro",
    filterOperatorContains: "contiene",
    filterOperatorDoesNotContain: "no contiene",
    filterOperatorEquals: "es igual",
    filterOperatorDoesNotEqual: "es diferente a",
    filterOperatorStartsWith: "comienza con",
    filterOperatorEndsWith: "termina con",
    filterOperatorIs: "es",
    filterOperatorNot: "no es",
    filterOperatorAfter: "es posterior",
    filterOperatorOnOrAfter: "es en o posterior",
    filterOperatorBefore: "es anterior",
    filterOperatorOnOrBefore: "es en o anterior",
    filterOperatorIsEmpty: "esta vac\xEDo",
    filterOperatorIsNotEmpty: "no esta vac\xEDo",
    filterOperatorIsAnyOf: "es cualquiera de",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Contiene",
    headerFilterOperatorDoesNotContain: "No contiene",
    headerFilterOperatorEquals: "Es igual a",
    headerFilterOperatorDoesNotEqual: "Es diferente a",
    headerFilterOperatorStartsWith: "Comienza con",
    headerFilterOperatorEndsWith: "Termina con",
    headerFilterOperatorIs: "Es",
    headerFilterOperatorNot: "No es",
    headerFilterOperatorAfter: "Esta despu\xE9s de",
    headerFilterOperatorOnOrAfter: "Esta en o despu\xE9s de",
    headerFilterOperatorBefore: "Esta antes de",
    headerFilterOperatorOnOrBefore: "Esta en o antes de",
    headerFilterOperatorIsEmpty: "Esta vac\xEDo",
    headerFilterOperatorIsNotEmpty: "No esta vac\xEDo",
    headerFilterOperatorIsAnyOf: "Es cualquiera de",
    "headerFilterOperator=": "Es igual a",
    "headerFilterOperator!=": "Es diferente a",
    "headerFilterOperator>": "Es mayor que",
    "headerFilterOperator>=": "Es mayor o igual que",
    "headerFilterOperator<": "Es menor que",
    "headerFilterOperator<=": "Es menor o igual que",
    filterValueAny: "cualquiera",
    filterValueTrue: "verdadero",
    filterValueFalse: "falso",
    columnMenuLabel: "Men\xFA",
    columnMenuShowColumns: "Mostrar columnas",
    columnMenuManageColumns: "Administrar columnas",
    columnMenuFilter: "Filtro",
    columnMenuHideColumn: "Ocultar",
    columnMenuUnsort: "Desordenar",
    columnMenuSortAsc: "Ordenar ASC",
    columnMenuSortDesc: "Ordenar DESC",
    columnHeaderFiltersTooltipActive: (e) => e > 1 ? `${e} filtros activos` : `${e} filtro activo`,
    columnHeaderFiltersLabel: "Mostrar filtros",
    columnHeaderSortIconLabel: "Ordenar",
    footerRowSelected: (e) => e > 1 ? `${e.toLocaleString()} filas seleccionadas` : `${e.toLocaleString()} fila seleccionada`,
    footerTotalRows: "Filas Totales:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} de ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Seleccionar casilla",
    checkboxSelectionSelectAllRows: "Seleccionar todas las filas",
    checkboxSelectionUnselectAllRows: "Deseleccionar todas las filas",
    checkboxSelectionSelectRow: "Seleccionar fila",
    checkboxSelectionUnselectRow: "Deseleccionar fila",
    booleanCellTrueLabel: "si",
    booleanCellFalseLabel: "no",
    actionsCellMore: "m\xE1s",
    pinToLeft: "Anclar a la izquierda",
    pinToRight: "Anclar a la derecha",
    unpin: "Desanclar",
    treeDataGroupingHeaderName: "Grupo",
    treeDataExpand: "mostrar hijos",
    treeDataCollapse: "ocultar hijos",
    groupingColumnHeaderName: "Grupo",
    groupColumn: (e) => `Agrupar por ${e}`,
    unGroupColumn: (e) => `No agrupar por ${e}`,
    detailPanelToggle: "Alternar detalle",
    expandDetailPanel: "Expandir",
    collapseDetailPanel: "Contraer",
    rowReorderingHeaderName: "Reordenar filas",
    aggregationMenuItemHeader: "Agregaci\xF3n",
    aggregationFunctionLabelSum: "suma",
    aggregationFunctionLabelAvg: "promedio",
    aggregationFunctionLabelMin: "m\xEDnimo",
    aggregationFunctionLabelMax: "m\xE1ximo",
    aggregationFunctionLabelSize: "tama\xF1o"
  }, A1 = Mr(T1, w1), D1 = {
    noRowsLabel: "Pas de r\xE9sultats",
    noResultsOverlayLabel: "Aucun r\xE9sultat.",
    toolbarDensity: "Densit\xE9",
    toolbarDensityLabel: "Densit\xE9",
    toolbarDensityCompact: "Compacte",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Confortable",
    toolbarColumns: "Colonnes",
    toolbarColumnsLabel: "Choisir les colonnes",
    toolbarFilters: "Filtres",
    toolbarFiltersLabel: "Afficher les filtres",
    toolbarFiltersTooltipHide: "Masquer les filtres",
    toolbarFiltersTooltipShow: "Afficher les filtres",
    toolbarFiltersTooltipActive: (e) => e > 1 ? `${e} filtres actifs` : `${e} filtre actif`,
    toolbarQuickFilterPlaceholder: "Rechercher\u2026",
    toolbarQuickFilterLabel: "Recherche",
    toolbarQuickFilterDeleteIconLabel: "Supprimer",
    toolbarExport: "Exporter",
    toolbarExportLabel: "Exporter",
    toolbarExportCSV: "T\xE9l\xE9charger en CSV",
    toolbarExportPrint: "Imprimer",
    toolbarExportExcel: "T\xE9l\xE9charger pour Excel",
    columnsManagementSearchTitle: "Rechercher",
    columnsManagementNoColumns: "Pas de colonnes",
    columnsManagementShowHideAllText: "Afficher/masquer toutes",
    columnsManagementReset: "R\xE9initialiser",
    filterPanelAddFilter: "Ajouter un filtre",
    filterPanelRemoveAll: "Tout supprimer",
    filterPanelDeleteIconLabel: "Supprimer",
    filterPanelLogicOperator: "Op\xE9rateur logique",
    filterPanelOperator: "Op\xE9rateur",
    filterPanelOperatorAnd: "Et",
    filterPanelOperatorOr: "Ou",
    filterPanelColumns: "Colonne",
    filterPanelInputLabel: "Valeur",
    filterPanelInputPlaceholder: "Filtrer la valeur",
    filterOperatorContains: "contient",
    filterOperatorDoesNotContain: "ne contient pas",
    filterOperatorEquals: "est \xE9gal \xE0",
    filterOperatorDoesNotEqual: "n'est pas \xE9gal \xE0",
    filterOperatorStartsWith: "commence par",
    filterOperatorEndsWith: "se termine par",
    filterOperatorIs: "est",
    filterOperatorNot: "n'est pas",
    filterOperatorAfter: "post\xE9rieur",
    filterOperatorOnOrAfter: "\xE9gal ou post\xE9rieur",
    filterOperatorBefore: "ant\xE9rieur",
    filterOperatorOnOrBefore: "\xE9gal ou ant\xE9rieur",
    filterOperatorIsEmpty: "est vide",
    filterOperatorIsNotEmpty: "n'est pas vide",
    filterOperatorIsAnyOf: "fait partie de",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Contient",
    headerFilterOperatorDoesNotContain: "Ne contient pas",
    headerFilterOperatorEquals: "Est \xE9gal \xE0",
    headerFilterOperatorDoesNotEqual: "N'est pas \xE9gal \xE0",
    headerFilterOperatorStartsWith: "Commence par",
    headerFilterOperatorEndsWith: "Se termine par",
    headerFilterOperatorIs: "Est",
    headerFilterOperatorNot: "N'est pas",
    headerFilterOperatorAfter: "Post\xE9rieur",
    headerFilterOperatorOnOrAfter: "\xC9gal ou post\xE9rieur",
    headerFilterOperatorBefore: "Ant\xE9rieur",
    headerFilterOperatorOnOrBefore: "\xC9gal ou ant\xE9rieur",
    headerFilterOperatorIsEmpty: "Est vide",
    headerFilterOperatorIsNotEmpty: "N'est pas vide",
    headerFilterOperatorIsAnyOf: "Fait partie de",
    "headerFilterOperator=": "Est \xE9gal \xE0",
    "headerFilterOperator!=": "N'est pas \xE9gal \xE0",
    "headerFilterOperator>": "Est sup\xE9rieur \xE0",
    "headerFilterOperator>=": "Est sup\xE9rieur ou \xE9gal \xE0",
    "headerFilterOperator<": "Est inf\xE9rieur \xE0",
    "headerFilterOperator<=": "Est inf\xE9rieur ou \xE9gal \xE0",
    filterValueAny: "tous",
    filterValueTrue: "vrai",
    filterValueFalse: "faux",
    columnMenuLabel: "Menu",
    columnMenuShowColumns: "Afficher les colonnes",
    columnMenuManageColumns: "G\xE9rer les colonnes",
    columnMenuFilter: "Filtrer",
    columnMenuHideColumn: "Masquer",
    columnMenuUnsort: "Annuler le tri",
    columnMenuSortAsc: "Tri ascendant",
    columnMenuSortDesc: "Tri descendant",
    columnHeaderFiltersTooltipActive: (e) => e > 1 ? `${e} filtres actifs` : `${e} filtre actif`,
    columnHeaderFiltersLabel: "Afficher les filtres",
    columnHeaderSortIconLabel: "Trier",
    footerRowSelected: (e) => e > 1 ? `${e.toLocaleString()} lignes s\xE9lectionn\xE9es` : `${e.toLocaleString()} ligne s\xE9lectionn\xE9e`,
    footerTotalRows: "Total de lignes :",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} sur ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "S\xE9lection",
    checkboxSelectionSelectAllRows: "S\xE9lectionner toutes les lignes",
    checkboxSelectionUnselectAllRows: "D\xE9s\xE9lectionner toutes les lignes",
    checkboxSelectionSelectRow: "S\xE9lectionner la ligne",
    checkboxSelectionUnselectRow: "D\xE9s\xE9lectionner la ligne",
    booleanCellTrueLabel: "vrai",
    booleanCellFalseLabel: "faux",
    actionsCellMore: "Plus",
    pinToLeft: "\xC9pingler \xE0 gauche",
    pinToRight: "\xC9pingler \xE0 droite",
    unpin: "D\xE9s\xE9pingler",
    treeDataGroupingHeaderName: "Groupe",
    treeDataExpand: "afficher les enfants",
    treeDataCollapse: "masquer les enfants",
    groupingColumnHeaderName: "Groupe",
    groupColumn: (e) => `Grouper par ${e}`,
    unGroupColumn: (e) => `Arr\xEAter de grouper par ${e}`,
    detailPanelToggle: "Afficher/masquer les d\xE9tails",
    expandDetailPanel: "Afficher",
    collapseDetailPanel: "Masquer",
    rowReorderingHeaderName: "Positionnement des lignes",
    aggregationMenuItemHeader: "Agr\xE9gation",
    aggregationFunctionLabelSum: "Somme",
    aggregationFunctionLabelAvg: "Moyenne",
    aggregationFunctionLabelMin: "Minimum",
    aggregationFunctionLabelMax: "Maximum",
    aggregationFunctionLabelSize: "Nombre d'\xE9l\xE9ments"
  }, $1 = Mr(D1, x1), L1 = {
    noRowsLabel: "Nessun record",
    noResultsOverlayLabel: "Nessun record trovato.",
    toolbarDensity: "Densit\xE0",
    toolbarDensityLabel: "Densit\xE0",
    toolbarDensityCompact: "Compatta",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Comoda",
    toolbarColumns: "Colonne",
    toolbarColumnsLabel: "Seleziona le colonne",
    toolbarFilters: "Filtri",
    toolbarFiltersLabel: "Mostra i filtri",
    toolbarFiltersTooltipHide: "Nascondi i filtri",
    toolbarFiltersTooltipShow: "Mostra i filtri",
    toolbarFiltersTooltipActive: (e) => e > 1 ? `${e} filtri attivi` : `${e} filtro attivo`,
    toolbarQuickFilterPlaceholder: "Cerca\u2026",
    toolbarQuickFilterLabel: "Cerca",
    toolbarQuickFilterDeleteIconLabel: "Resetta",
    toolbarExport: "Esporta",
    toolbarExportLabel: "Esporta",
    toolbarExportCSV: "Esporta in CSV",
    toolbarExportPrint: "Stampa",
    toolbarExportExcel: "Scarica come Excel",
    columnsManagementSearchTitle: "Cerca",
    columnsManagementNoColumns: "Nessuna colonna",
    columnsManagementShowHideAllText: "Mostra/Nascondi Tutto",
    columnsManagementReset: "Resetta",
    filterPanelAddFilter: "Aggiungi un filtro",
    filterPanelRemoveAll: "Rimuovi filtri",
    filterPanelDeleteIconLabel: "Rimuovi",
    filterPanelLogicOperator: "Operatore logico",
    filterPanelOperator: "Operatori",
    filterPanelOperatorAnd: "E (and)",
    filterPanelOperatorOr: "O (or)",
    filterPanelColumns: "Colonne",
    filterPanelInputLabel: "Valore",
    filterPanelInputPlaceholder: "Filtra il valore",
    filterOperatorContains: "contiene",
    filterOperatorDoesNotContain: "non contiene",
    filterOperatorEquals: "uguale a",
    filterOperatorDoesNotEqual: "diverso da",
    filterOperatorStartsWith: "comincia per",
    filterOperatorEndsWith: "termina per",
    filterOperatorIs: "uguale a",
    filterOperatorNot: "diverso da",
    filterOperatorAfter: "dopo il",
    filterOperatorOnOrAfter: "a partire dal",
    filterOperatorBefore: "prima del",
    filterOperatorOnOrBefore: "fino al",
    filterOperatorIsEmpty: "\xE8 vuoto",
    filterOperatorIsNotEmpty: "non \xE8 vuoto",
    filterOperatorIsAnyOf: "\xE8 uno tra",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Contiene",
    headerFilterOperatorDoesNotContain: "Non contiene",
    headerFilterOperatorEquals: "Uguale a",
    headerFilterOperatorDoesNotEqual: "Diverso da",
    headerFilterOperatorStartsWith: "Comincia per",
    headerFilterOperatorEndsWith: "Termina per",
    headerFilterOperatorIs: "Uguale a",
    headerFilterOperatorNot: "Diverso da",
    headerFilterOperatorAfter: "Dopo il",
    headerFilterOperatorOnOrAfter: "A partire dal",
    headerFilterOperatorBefore: "Prima del",
    headerFilterOperatorOnOrBefore: "Fino al",
    headerFilterOperatorIsEmpty: "\xC8 vuoto",
    headerFilterOperatorIsNotEmpty: "Non \xE8 vuoto",
    headerFilterOperatorIsAnyOf: "\xC8 uno tra",
    "headerFilterOperator=": "Uguale a",
    "headerFilterOperator!=": "Diverso da",
    "headerFilterOperator>": "Maggiore di",
    "headerFilterOperator>=": "Maggiore o uguale a",
    "headerFilterOperator<": "Minore di",
    "headerFilterOperator<=": "Minore o uguale a",
    filterValueAny: "qualunque",
    filterValueTrue: "vero",
    filterValueFalse: "falso",
    columnMenuLabel: "Menu",
    columnMenuShowColumns: "Mostra le colonne",
    columnMenuManageColumns: "Gestisci colonne",
    columnMenuFilter: "Filtra",
    columnMenuHideColumn: "Nascondi",
    columnMenuUnsort: "Annulla l'ordinamento",
    columnMenuSortAsc: "Ordinamento crescente",
    columnMenuSortDesc: "Ordinamento decrescente",
    columnHeaderFiltersTooltipActive: (e) => e > 1 ? `${e} filtri attivi` : `${e} filtro attivo`,
    columnHeaderFiltersLabel: "Mostra i filtri",
    columnHeaderSortIconLabel: "Ordina",
    footerRowSelected: (e) => e > 1 ? `${e.toLocaleString()} record selezionati` : `${e.toLocaleString()} record selezionato`,
    footerTotalRows: "Record totali:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} di ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Seleziona",
    checkboxSelectionSelectAllRows: "Seleziona tutte le righe",
    checkboxSelectionUnselectAllRows: "Deseleziona tutte le righe",
    checkboxSelectionSelectRow: "Seleziona riga",
    checkboxSelectionUnselectRow: "Deseleziona riga",
    booleanCellTrueLabel: "vero",
    booleanCellFalseLabel: "falso",
    actionsCellMore: "pi\xF9",
    pinToLeft: "Blocca a sinistra",
    pinToRight: "Blocca a destra",
    unpin: "Sblocca",
    treeDataGroupingHeaderName: "Gruppo",
    treeDataExpand: "mostra figli",
    treeDataCollapse: "nascondi figli",
    groupingColumnHeaderName: "Gruppo",
    groupColumn: (e) => `Raggruppa per ${e}`,
    unGroupColumn: (e) => `Annulla raggruppamento per ${e}`,
    detailPanelToggle: "Abilita pannello dettagli",
    expandDetailPanel: "Espandi",
    collapseDetailPanel: "Comprimi",
    rowReorderingHeaderName: "Riordinamento righe",
    aggregationMenuItemHeader: "aggregazione",
    aggregationFunctionLabelSum: "somma",
    aggregationFunctionLabelAvg: "media",
    aggregationFunctionLabelMin: "minimo",
    aggregationFunctionLabelMax: "massimo",
    aggregationFunctionLabelSize: "numero di elementi"
  }, R1 = Mr(L1, v1), j1 = {
    noRowsLabel: "Geen resultaten.",
    noResultsOverlayLabel: "Geen resultaten gevonden.",
    toolbarDensity: "Grootte",
    toolbarDensityLabel: "Grootte",
    toolbarDensityCompact: "Compact",
    toolbarDensityStandard: "Normaal",
    toolbarDensityComfortable: "Breed",
    toolbarColumns: "Kolommen",
    toolbarColumnsLabel: "Kies kolommen",
    toolbarFilters: "Filters",
    toolbarFiltersLabel: "Toon filters",
    toolbarFiltersTooltipHide: "Verberg filters",
    toolbarFiltersTooltipShow: "Toon filters",
    toolbarFiltersTooltipActive: (e) => e > 1 ? `${e} actieve filters` : `${e} filter actief`,
    toolbarQuickFilterPlaceholder: "Zoeken\u2026",
    toolbarQuickFilterLabel: "Zoeken",
    toolbarQuickFilterDeleteIconLabel: "Wissen",
    toolbarExport: "Exporteren",
    toolbarExportLabel: "Exporteren",
    toolbarExportCSV: "Exporteer naar CSV",
    toolbarExportPrint: "Print",
    toolbarExportExcel: "Downloaden als Excel-bestand",
    columnsManagementSearchTitle: "Zoeken",
    columnsManagementNoColumns: "Geen kolommen",
    columnsManagementShowHideAllText: "Toon/Verberg Alle",
    columnsManagementReset: "Reset",
    columnsManagementDeleteIconLabel: "Verwijderen",
    filterPanelAddFilter: "Filter toevoegen",
    filterPanelRemoveAll: "Alles verwijderen",
    filterPanelDeleteIconLabel: "Verwijderen",
    filterPanelLogicOperator: "Logische operator",
    filterPanelOperator: "Operatoren",
    filterPanelOperatorAnd: "En",
    filterPanelOperatorOr: "Of",
    filterPanelColumns: "Kolommen",
    filterPanelInputLabel: "Waarde",
    filterPanelInputPlaceholder: "Filter waarde",
    filterOperatorContains: "bevat",
    filterOperatorDoesNotContain: "bevat niet",
    filterOperatorEquals: "gelijk aan",
    filterOperatorDoesNotEqual: "niet gelijk aan",
    filterOperatorStartsWith: "begint met",
    filterOperatorEndsWith: "eindigt met",
    filterOperatorIs: "is",
    filterOperatorNot: "is niet",
    filterOperatorAfter: "is na",
    filterOperatorOnOrAfter: "is gelijk of er na",
    filterOperatorBefore: "is voor",
    filterOperatorOnOrBefore: "is gelijk of er voor",
    filterOperatorIsEmpty: "is leeg",
    filterOperatorIsNotEmpty: "is niet leeg",
    filterOperatorIsAnyOf: "is een van",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Bevat",
    headerFilterOperatorDoesNotContain: "Bevat niet",
    headerFilterOperatorEquals: "Gelijk aan",
    headerFilterOperatorDoesNotEqual: "Niet gelijk aan",
    headerFilterOperatorStartsWith: "Begint met",
    headerFilterOperatorEndsWith: "Eindigt met",
    headerFilterOperatorIs: "Is",
    headerFilterOperatorNot: "Is niet",
    headerFilterOperatorAfter: "Is na",
    headerFilterOperatorOnOrAfter: "Is op of na",
    headerFilterOperatorBefore: "Is voor",
    headerFilterOperatorOnOrBefore: "Is op of voor",
    headerFilterOperatorIsEmpty: "Is leeg",
    headerFilterOperatorIsNotEmpty: "Is niet leeg",
    headerFilterOperatorIsAnyOf: "Is een van",
    "headerFilterOperator=": "Gelijk aan",
    "headerFilterOperator!=": "Niet gelijk aan",
    "headerFilterOperator>": "Is groter dan",
    "headerFilterOperator>=": "Is groter dan of gelijk aan",
    "headerFilterOperator<": "Is kleiner dan",
    "headerFilterOperator<=": "Is kleiner dan of gelijk aan",
    filterValueAny: "alles",
    filterValueTrue: "waar",
    filterValueFalse: "onwaar",
    columnMenuLabel: "Menu",
    columnMenuShowColumns: "Toon kolommen",
    columnMenuManageColumns: "Kolommen beheren",
    columnMenuFilter: "Filteren",
    columnMenuHideColumn: "Verbergen",
    columnMenuUnsort: "Annuleer sortering",
    columnMenuSortAsc: "Oplopend sorteren",
    columnMenuSortDesc: "Aflopend sorteren",
    columnHeaderFiltersTooltipActive: (e) => e > 1 ? `${e} actieve filters` : `${e} filter actief`,
    columnHeaderFiltersLabel: "Toon filters",
    columnHeaderSortIconLabel: "Sorteren",
    footerRowSelected: (e) => e > 1 ? `${e.toLocaleString()} rijen geselecteerd` : `${e.toLocaleString()} rij geselecteerd`,
    footerTotalRows: "Totaal:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} van ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Checkbox selectie",
    checkboxSelectionSelectAllRows: "Alle rijen selecteren",
    checkboxSelectionUnselectAllRows: "Alle rijen de-selecteren",
    checkboxSelectionSelectRow: "Rij selecteren",
    checkboxSelectionUnselectRow: "Rij de-selecteren",
    booleanCellTrueLabel: "waar",
    booleanCellFalseLabel: "onwaar",
    actionsCellMore: "meer",
    pinToLeft: "Links vastzetten",
    pinToRight: "Rechts vastzetten",
    unpin: "Losmaken",
    treeDataGroupingHeaderName: "Groep",
    treeDataExpand: "Uitvouwen",
    treeDataCollapse: "Inklappen",
    groupingColumnHeaderName: "Groep",
    groupColumn: (e) => `Groepeer op ${e}`,
    unGroupColumn: (e) => `Stop groeperen op ${e}`,
    detailPanelToggle: "Detailmenu in- of uitklappen",
    expandDetailPanel: "Uitklappen",
    collapseDetailPanel: "Inklappen",
    rowReorderingHeaderName: "Rijen hersorteren",
    aggregationMenuItemHeader: "Aggregatie",
    aggregationFunctionLabelSum: "som",
    aggregationFunctionLabelAvg: "gem",
    aggregationFunctionLabelMin: "min",
    aggregationFunctionLabelMax: "max",
    aggregationFunctionLabelSize: "grootte"
  }, H1 = Mr(j1, S1), z1 = {
    noRowsLabel: "Brak danych",
    noResultsOverlayLabel: "Nie znaleziono wynik\xF3w.",
    toolbarDensity: "Wysoko\u015B\u0107 rz\u0119du",
    toolbarDensityLabel: "Wysoko\u015B\u0107 rz\u0119du",
    toolbarDensityCompact: "Kompakt",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Komfort",
    toolbarColumns: "Kolumny",
    toolbarColumnsLabel: "Zaznacz kolumny",
    toolbarFilters: "Filtry",
    toolbarFiltersLabel: "Poka\u017C filtry",
    toolbarFiltersTooltipHide: "Ukryj filtry",
    toolbarFiltersTooltipShow: "Poka\u017C filtry",
    toolbarFiltersTooltipActive: (e) => `Liczba aktywnych filtr\xF3w: ${e}`,
    toolbarQuickFilterPlaceholder: "Wyszukaj\u2026",
    toolbarQuickFilterLabel: "Szukaj",
    toolbarQuickFilterDeleteIconLabel: "Wyczy\u015B\u0107",
    toolbarExport: "Eksportuj",
    toolbarExportLabel: "Eksportuj",
    toolbarExportCSV: "Pobierz jako plik CSV",
    toolbarExportPrint: "Drukuj",
    toolbarExportExcel: "Pobierz jako plik Excel",
    columnsManagementSearchTitle: "Szukaj",
    columnsManagementNoColumns: "Brak kolumn",
    columnsManagementShowHideAllText: "Wy\u015Bwietl/Ukryj wszystkie",
    columnsManagementReset: "Resetuj",
    columnsManagementDeleteIconLabel: "Wyczy\u015B\u0107",
    filterPanelAddFilter: "Dodaj filtr",
    filterPanelRemoveAll: "Usu\u0144 wszystkie",
    filterPanelDeleteIconLabel: "Usu\u0144",
    filterPanelLogicOperator: "Operator logiczny",
    filterPanelOperator: "Operator",
    filterPanelOperatorAnd: "I",
    filterPanelOperatorOr: "Lub",
    filterPanelColumns: "Kolumny",
    filterPanelInputLabel: "Warto\u015B\u0107",
    filterPanelInputPlaceholder: "Filtrowana warto\u015B\u0107",
    filterOperatorContains: "zawiera",
    filterOperatorDoesNotContain: "nie zawiera",
    filterOperatorEquals: "r\xF3wna si\u0119",
    filterOperatorDoesNotEqual: "nie r\xF3wna si\u0119",
    filterOperatorStartsWith: "zaczyna si\u0119 od",
    filterOperatorEndsWith: "ko\u0144czy si\u0119 na",
    filterOperatorIs: "r\xF3wna si\u0119",
    filterOperatorNot: "r\xF3\u017Cne",
    filterOperatorAfter: "wi\u0119ksze ni\u017C",
    filterOperatorOnOrAfter: "wi\u0119ksze lub r\xF3wne",
    filterOperatorBefore: "mniejsze ni\u017C",
    filterOperatorOnOrBefore: "mniejsze lub r\xF3wne",
    filterOperatorIsEmpty: "jest pusty",
    filterOperatorIsNotEmpty: "nie jest pusty",
    filterOperatorIsAnyOf: "jest jednym z",
    "filterOperator=": "r\xF3wna si\u0119",
    "filterOperator!=": "nie r\xF3wna si\u0119",
    "filterOperator>": "wi\u0119kszy ni\u017C",
    "filterOperator>=": "wi\u0119kszy lub r\xF3wny",
    "filterOperator<": "mniejszy ni\u017C",
    "filterOperator<=": "mniejszy lub r\xF3wny",
    headerFilterOperatorContains: "Zawiera",
    headerFilterOperatorDoesNotContain: "Nie zawiera",
    headerFilterOperatorEquals: "R\xF3wna si\u0119",
    headerFilterOperatorDoesNotEqual: "Nie r\xF3wna si\u0119",
    headerFilterOperatorStartsWith: "Zaczyna si\u0119 od",
    headerFilterOperatorEndsWith: "Ko\u0144czy si\u0119 na",
    headerFilterOperatorIs: "Jest",
    headerFilterOperatorNot: "Niepuste",
    headerFilterOperatorAfter: "Jest po",
    headerFilterOperatorOnOrAfter: "Jest w lub po",
    headerFilterOperatorBefore: "Jest przed",
    headerFilterOperatorOnOrBefore: "Jest w lub przed",
    headerFilterOperatorIsEmpty: "Jest pusty",
    headerFilterOperatorIsNotEmpty: "Nie jest pusty",
    headerFilterOperatorIsAnyOf: "Jest jednym z",
    "headerFilterOperator=": "R\xF3wna si\u0119",
    "headerFilterOperator!=": "Nie r\xF3wna si\u0119",
    "headerFilterOperator>": "Wi\u0119kszy ni\u017C",
    "headerFilterOperator>=": "Wi\u0119kszy lub r\xF3wny",
    "headerFilterOperator<": "Mniejszy ni\u017C",
    "headerFilterOperator<=": "Mniejszy lub r\xF3wny",
    filterValueAny: "dowolny",
    filterValueTrue: "prawda",
    filterValueFalse: "fa\u0142sz",
    columnMenuLabel: "Menu",
    columnMenuAriaLabel: (e) => `Menu kolumny: ${e}`,
    columnMenuShowColumns: "Poka\u017C wszystkie kolumny",
    columnMenuManageColumns: "Zarz\u0105dzaj kolumnami",
    columnMenuFilter: "Filtr",
    columnMenuHideColumn: "Ukryj",
    columnMenuUnsort: "Anuluj sortowanie",
    columnMenuSortAsc: "Sortuj rosn\u0105co",
    columnMenuSortDesc: "Sortuj malej\u0105co",
    columnHeaderFiltersTooltipActive: (e) => `Liczba aktywnych filtr\xF3w: ${e}`,
    columnHeaderFiltersLabel: "Poka\u017C filtry",
    columnHeaderSortIconLabel: "Sortuj",
    footerRowSelected: (e) => `Liczba wybranych wierszy: ${e.toLocaleString()}`,
    footerTotalRows: "\u0141\u0105czna liczba wierszy:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} z ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Pole wyboru",
    checkboxSelectionSelectAllRows: "Zaznacz wszystkie wiersze",
    checkboxSelectionUnselectAllRows: "Odznacz wszystkie wiersze",
    checkboxSelectionSelectRow: "Zaznacz wiersz",
    checkboxSelectionUnselectRow: "Odznacz wiersz",
    booleanCellTrueLabel: "tak",
    booleanCellFalseLabel: "nie",
    actionsCellMore: "wi\u0119cej",
    pinToLeft: "Przypnij do lewej",
    pinToRight: "Przypnij do prawej",
    unpin: "Odepnij",
    treeDataGroupingHeaderName: "Grupa",
    treeDataExpand: "poka\u017C elementy potomne",
    treeDataCollapse: "ukryj elementy potomne",
    groupingColumnHeaderName: "Grupa",
    groupColumn: (e) => `Grupuj wed\u0142ug ${e}`,
    unGroupColumn: (e) => `Rozgrupuj ${e}`,
    expandDetailPanel: "Rozwi\u0144",
    collapseDetailPanel: "Zwi\u0144",
    rowReorderingHeaderName: "Porz\u0105dkowanie wierszy",
    aggregationMenuItemHeader: "Agregacja",
    aggregationFunctionLabelSum: "suma",
    aggregationFunctionLabelAvg: "\u015Brednia",
    aggregationFunctionLabelMin: "minimum",
    aggregationFunctionLabelMax: "maximum",
    aggregationFunctionLabelSize: "rozmiar"
  }, N1 = Mr(z1, P1), _1 = {
    noRowsLabel: "Nenhuma linha",
    noResultsOverlayLabel: "Nenhum resultado encontrado.",
    toolbarDensity: "Densidade",
    toolbarDensityLabel: "Densidade",
    toolbarDensityCompact: "Compacto",
    toolbarDensityStandard: "Padr\xE3o",
    toolbarDensityComfortable: "Confort\xE1vel",
    toolbarColumns: "Colunas",
    toolbarColumnsLabel: "Exibir seletor de colunas",
    toolbarFilters: "Filtros",
    toolbarFiltersLabel: "Exibir filtros",
    toolbarFiltersTooltipHide: "Ocultar filtros",
    toolbarFiltersTooltipShow: "Exibir filtros",
    toolbarFiltersTooltipActive: (e) => `${e} ${e !== 1 ? "filtros" : "filtro"} ${e !== 1 ? "ativos" : "ativo"}`,
    toolbarQuickFilterPlaceholder: "Procurar\u2026",
    toolbarQuickFilterLabel: "Procurar",
    toolbarQuickFilterDeleteIconLabel: "Limpar",
    toolbarExport: "Exportar",
    toolbarExportLabel: "Exportar",
    toolbarExportCSV: "Baixar como CSV",
    toolbarExportPrint: "Imprimir",
    toolbarExportExcel: "Baixar como Excel",
    columnsManagementSearchTitle: "Buscar",
    columnsManagementNoColumns: "Nenhuma coluna",
    columnsManagementShowHideAllText: "Mostrar/Ocultar Todas",
    columnsManagementReset: "Redefinir",
    columnsManagementDeleteIconLabel: "Limpar",
    filterPanelAddFilter: "Adicionar filtro",
    filterPanelRemoveAll: "Remover todos",
    filterPanelDeleteIconLabel: "Excluir",
    filterPanelLogicOperator: "Operador l\xF3gico",
    filterPanelOperator: "Operador",
    filterPanelOperatorAnd: "E",
    filterPanelOperatorOr: "Ou",
    filterPanelColumns: "Colunas",
    filterPanelInputLabel: "Valor",
    filterPanelInputPlaceholder: "Filtrar valor",
    filterOperatorContains: "cont\xE9m",
    filterOperatorDoesNotContain: "n\xE3o cont\xE9m",
    filterOperatorEquals: "\xE9 igual a",
    filterOperatorDoesNotEqual: "n\xE3o \xE9 igual a",
    filterOperatorStartsWith: "come\xE7a com",
    filterOperatorEndsWith: "termina com",
    filterOperatorIs: "\xE9",
    filterOperatorNot: "n\xE3o \xE9",
    filterOperatorAfter: "ap\xF3s",
    filterOperatorOnOrAfter: "em ou ap\xF3s",
    filterOperatorBefore: "antes de",
    filterOperatorOnOrBefore: "em ou antes de",
    filterOperatorIsEmpty: "est\xE1 vazio",
    filterOperatorIsNotEmpty: "n\xE3o est\xE1 vazio",
    filterOperatorIsAnyOf: "\xE9 qualquer um dos",
    "filterOperator=": "igual \xE0",
    "filterOperator!=": "diferente de",
    "filterOperator>": "maior que",
    "filterOperator>=": "maior ou igual que",
    "filterOperator<": "menor que",
    "filterOperator<=": "menor ou igual que",
    headerFilterOperatorContains: "Cont\xE9m",
    headerFilterOperatorDoesNotContain: "N\xE3o cont\xE9m",
    headerFilterOperatorEquals: "Igual",
    headerFilterOperatorDoesNotEqual: "N\xE3o \xE9 igual a",
    headerFilterOperatorStartsWith: "Come\xE7a com",
    headerFilterOperatorEndsWith: "Termina com",
    headerFilterOperatorIs: "\xC9",
    headerFilterOperatorNot: "N\xE3o \xE9",
    headerFilterOperatorAfter: "Depois de",
    headerFilterOperatorOnOrAfter: "Est\xE1 entre ou depois de",
    headerFilterOperatorBefore: "Antes de",
    headerFilterOperatorOnOrBefore: "Est\xE1 entre ou antes de",
    headerFilterOperatorIsEmpty: "\xC9 vazio",
    headerFilterOperatorIsNotEmpty: "N\xE3o \xE9 vazio",
    headerFilterOperatorIsAnyOf: "\xC9 algum",
    "headerFilterOperator=": "Igual",
    "headerFilterOperator!=": "N\xE3o igual",
    "headerFilterOperator>": "Maior que",
    "headerFilterOperator>=": "Maior que ou igual a",
    "headerFilterOperator<": "Menor que",
    "headerFilterOperator<=": "Menor que ou igual a",
    filterValueAny: "qualquer",
    filterValueTrue: "verdadeiro",
    filterValueFalse: "falso",
    columnMenuLabel: "Menu",
    columnMenuShowColumns: "Exibir colunas",
    columnMenuManageColumns: "Gerir colunas",
    columnMenuFilter: "Filtrar",
    columnMenuHideColumn: "Ocultar",
    columnMenuUnsort: "Desfazer ordena\xE7\xE3o",
    columnMenuSortAsc: "Ordenar do menor para o maior",
    columnMenuSortDesc: "Ordenar do maior para o menor",
    columnHeaderFiltersTooltipActive: (e) => `${e} ${e !== 1 ? "filtros" : "filtro"} ${e !== 1 ? "ativos" : "ativo"}`,
    columnHeaderFiltersLabel: "Exibir Filtros",
    columnHeaderSortIconLabel: "Ordenar",
    footerRowSelected: (e) => e !== 1 ? `${e.toLocaleString()} linhas selecionadas` : `${e.toLocaleString()} linha selecionada`,
    footerTotalRows: "Total de linhas:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} de ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Sele\xE7\xE3o",
    checkboxSelectionSelectAllRows: "Selecionar todas linhas",
    checkboxSelectionUnselectAllRows: "Deselecionar todas linhas",
    checkboxSelectionSelectRow: "Selecionar linha",
    checkboxSelectionUnselectRow: "Deselecionar linha",
    booleanCellTrueLabel: "sim",
    booleanCellFalseLabel: "n\xE3o",
    actionsCellMore: "mais",
    pinToLeft: "Fixar \xE0 esquerda",
    pinToRight: "Fixar \xE0 direita",
    unpin: "Desafixar",
    treeDataGroupingHeaderName: "Grupo",
    treeDataExpand: "mostrar filhos",
    treeDataCollapse: "esconder filhos",
    groupingColumnHeaderName: "Grupo",
    groupColumn: (e) => `Agrupar por ${e}`,
    unGroupColumn: (e) => `Parar agrupamento por ${e}`,
    detailPanelToggle: "Painel de detalhes",
    expandDetailPanel: "Expandir",
    collapseDetailPanel: "Esconder",
    rowReorderingHeaderName: "Reorganizar linhas",
    aggregationMenuItemHeader: "Agrupar",
    aggregationFunctionLabelSum: "soma",
    aggregationFunctionLabelAvg: "m\xE9dia",
    aggregationFunctionLabelMin: "m\xEDn",
    aggregationFunctionLabelMax: "m\xE1x",
    aggregationFunctionLabelSize: "tamanho"
  }, G1 = Mr(_1, I1);
  function Fs(e, t) {
    const r = Math.floor(e / 10) % 10, o = e % 10;
    let n = t.many;
    return r !== 1 && o > 1 && o < 5 ? n = t.few : r !== 1 && o === 1 && (n = t.one), `${e} ${n}`;
  }
  const V1 = {
    noRowsLabel: "\u041D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A",
    noResultsOverlayLabel: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B.",
    toolbarDensity: "\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438",
    toolbarDensityLabel: "\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438",
    toolbarDensityCompact: "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0430\u044F",
    toolbarDensityStandard: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F",
    toolbarDensityComfortable: "\u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0430\u044F",
    toolbarColumns: "\u0421\u0442\u043E\u043B\u0431\u0446\u044B",
    toolbarColumnsLabel: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u044B",
    toolbarFilters: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
    toolbarFiltersLabel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
    toolbarFiltersTooltipHide: "\u0421\u043A\u0440\u044B\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
    toolbarFiltersTooltipShow: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
    toolbarFiltersTooltipActive: (e) => Fs(e, {
      one: "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440",
      few: "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430",
      many: "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432"
    }),
    toolbarQuickFilterPlaceholder: "\u041F\u043E\u0438\u0441\u043A\u2026",
    toolbarQuickFilterLabel: "\u041F\u043E\u0438\u0441\u043A",
    toolbarQuickFilterDeleteIconLabel: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    toolbarExport: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442",
    toolbarExportLabel: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442",
    toolbarExportCSV: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 CSV",
    toolbarExportPrint: "\u041F\u0435\u0447\u0430\u0442\u044C",
    toolbarExportExcel: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 Excel",
    columnsManagementSearchTitle: "\u041F\u043E\u0438\u0441\u043A",
    columnsManagementNoColumns: "\u041D\u0435\u0442 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
    columnsManagementShowHideAllText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0421\u043A\u0440\u044B\u0442\u044C \u0412\u0441\u0451",
    columnsManagementReset: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
    columnsManagementDeleteIconLabel: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    filterPanelAddFilter: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440",
    filterPanelRemoveAll: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440",
    filterPanelDeleteIconLabel: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    filterPanelLogicOperator: "\u041B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B",
    filterPanelOperator: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B",
    filterPanelOperatorAnd: "\u0418",
    filterPanelOperatorOr: "\u0418\u043B\u0438",
    filterPanelColumns: "\u0421\u0442\u043E\u043B\u0431\u0446\u044B",
    filterPanelInputLabel: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    filterPanelInputPlaceholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0430",
    filterOperatorContains: "\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
    filterOperatorDoesNotContain: "\u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
    filterOperatorEquals: "\u0440\u0430\u0432\u0435\u043D",
    filterOperatorDoesNotEqual: "\u043D\u0435 \u0440\u0430\u0432\u0435\u043D",
    filterOperatorStartsWith: "\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441",
    filterOperatorEndsWith: "\u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430",
    filterOperatorIs: "\u0440\u0430\u0432\u0435\u043D",
    filterOperatorNot: "\u043D\u0435 \u0440\u0430\u0432\u0435\u043D",
    filterOperatorAfter: "\u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C",
    filterOperatorOnOrAfter: "\u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E",
    filterOperatorBefore: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0447\u0435\u043C",
    filterOperatorOnOrBefore: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E",
    filterOperatorIsEmpty: "\u043F\u0443\u0441\u0442\u043E\u0439",
    filterOperatorIsNotEmpty: "\u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0439",
    filterOperatorIsAnyOf: "\u043B\u044E\u0431\u043E\u0439 \u0438\u0437",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
    headerFilterOperatorDoesNotContain: "\u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
    headerFilterOperatorEquals: "\u0440\u0430\u0432\u0435\u043D",
    headerFilterOperatorDoesNotEqual: "\u043D\u0435 \u0440\u0430\u0432\u0435\u043D",
    headerFilterOperatorStartsWith: "\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441",
    headerFilterOperatorEndsWith: "\u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430",
    headerFilterOperatorIs: "\u0440\u0430\u0432\u0435\u043D",
    headerFilterOperatorNot: "\u043D\u0435 \u0440\u0430\u0432\u0435\u043D",
    headerFilterOperatorAfter: "\u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C",
    headerFilterOperatorOnOrAfter: "\u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E",
    headerFilterOperatorBefore: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0447\u0435\u043C",
    headerFilterOperatorOnOrBefore: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E",
    headerFilterOperatorIsEmpty: "\u043F\u0443\u0441\u0442\u043E\u0439",
    headerFilterOperatorIsNotEmpty: "\u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0439",
    headerFilterOperatorIsAnyOf: "\u043B\u044E\u0431\u043E\u0439 \u0438\u0437",
    "headerFilterOperator=": "\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
    "headerFilterOperator!=": "\u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
    "headerFilterOperator>": "\u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C",
    "headerFilterOperator>=": "\u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E",
    "headerFilterOperator<": "\u043C\u0435\u043D\u044C\u0448\u0435 \u0447\u0435\u043C",
    "headerFilterOperator<=": "\u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E",
    filterValueAny: "\u043B\u044E\u0431\u043E\u0439",
    filterValueTrue: "\u0438\u0441\u0442\u0438\u043D\u0430",
    filterValueFalse: "\u043B\u043E\u0436\u044C",
    columnMenuLabel: "\u041C\u0435\u043D\u044E",
    columnMenuShowColumns: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0446\u044B",
    columnMenuManageColumns: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438",
    columnMenuFilter: "\u0424\u0438\u043B\u044C\u0442\u0440",
    columnMenuHideColumn: "\u0421\u043A\u0440\u044B\u0442\u044C",
    columnMenuUnsort: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0443",
    columnMenuSortAsc: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E",
    columnMenuSortDesc: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E",
    columnHeaderFiltersTooltipActive: (e) => Fs(e, {
      one: "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440",
      few: "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430",
      many: "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432"
    }),
    columnHeaderFiltersLabel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
    columnHeaderSortIconLabel: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    footerRowSelected: (e) => Fs(e, {
      one: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u0430",
      few: "\u0441\u0442\u0440\u043E\u043A\u0438 \u0432\u044B\u0431\u0440\u0430\u043D\u044B",
      many: "\u0441\u0442\u0440\u043E\u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
    }),
    footerTotalRows: "\u0412\u0441\u0435\u0433\u043E \u0441\u0442\u0440\u043E\u043A:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} \u0438\u0437 ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "\u0412\u044B\u0431\u043E\u0440 \u0444\u043B\u0430\u0436\u043A\u0430",
    checkboxSelectionSelectAllRows: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",
    checkboxSelectionUnselectAllRows: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u043E\u043A",
    checkboxSelectionSelectRow: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443",
    checkboxSelectionUnselectRow: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0441\u0442\u0440\u043E\u043A\u0438",
    booleanCellTrueLabel: "\u0438\u0441\u0442\u0438\u043D\u0430",
    booleanCellFalseLabel: "\u043B\u043E\u0436\u044C",
    actionsCellMore: "\u0435\u0449\u0451",
    pinToLeft: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043B\u0435\u0432\u0430",
    pinToRight: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u0430",
    unpin: "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
    treeDataGroupingHeaderName: "\u0413\u0440\u0443\u043F\u043F\u0430",
    treeDataExpand: "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
    treeDataCollapse: "\u0441\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
    groupingColumnHeaderName: "\u0413\u0440\u0443\u043F\u043F\u0430",
    groupColumn: (e) => `\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${e}`,
    unGroupColumn: (e) => `\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${e}`,
    detailPanelToggle: "\u0414\u0435\u0442\u0430\u043B\u0438",
    expandDetailPanel: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    collapseDetailPanel: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    rowReorderingHeaderName: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0441\u0442\u0440\u043E\u043A",
    aggregationMenuItemHeader: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445",
    aggregationFunctionLabelSum: "\u0441\u0443\u043C\u043C",
    aggregationFunctionLabelAvg: "\u0441\u0440\u0437\u043D\u0430\u0447",
    aggregationFunctionLabelMin: "\u043C\u0438\u043D",
    aggregationFunctionLabelMax: "\u043C\u0430\u043A\u0441",
    aggregationFunctionLabelSize: "\u0441\u0447\u0435\u0442"
  }, B1 = Mr(V1, M1);
  function ks(e, t) {
    const r = Math.floor(e / 10) % 10, o = e % 10;
    let n = t.many;
    return r !== 1 && o > 1 && o < 5 ? n = t.few : r !== 1 && o === 1 && (n = t.one), `${e} ${n}`;
  }
  const W1 = {
    noRowsLabel: "\u041D\u0435\u043C\u0430\u0454 \u0440\u044F\u0434\u043A\u0456\u0432",
    noResultsOverlayLabel: "\u0414\u0430\u043D\u0456 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E.",
    toolbarDensity: "\u0412\u0438\u0441\u043E\u0442\u0430 \u0440\u044F\u0434\u043A\u0430",
    toolbarDensityLabel: "\u0412\u0438\u0441\u043E\u0442\u0430 \u0440\u044F\u0434\u043A\u0430",
    toolbarDensityCompact: "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0438\u0439",
    toolbarDensityStandard: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439",
    toolbarDensityComfortable: "\u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0438\u0439",
    toolbarColumns: "\u0421\u0442\u043E\u0432\u043F\u0446\u0456",
    toolbarColumnsLabel: "\u0412\u0438\u0434\u0456\u043B\u0456\u0442\u044C \u0441\u0442\u043E\u0432\u043F\u0446\u0456",
    toolbarFilters: "\u0424\u0456\u043B\u044C\u0442\u0440\u0438",
    toolbarFiltersLabel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",
    toolbarFiltersTooltipHide: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",
    toolbarFiltersTooltipShow: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",
    toolbarFiltersTooltipActive: (e) => ks(e, {
      one: "\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u0444\u0456\u043B\u044C\u0442\u0440",
      few: "\u0430\u043A\u0442\u0438\u0432\u043D\u0456 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",
      many: "\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0445 \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432"
    }),
    toolbarQuickFilterPlaceholder: "\u041F\u043E\u0448\u0443\u043A\u2026",
    toolbarQuickFilterLabel: "\u041F\u043E\u0448\u0443\u043A",
    toolbarQuickFilterDeleteIconLabel: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
    toolbarExport: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442",
    toolbarExportLabel: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442",
    toolbarExportCSV: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456 CSV",
    toolbarExportPrint: "\u0414\u0440\u0443\u043A",
    toolbarExportExcel: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456 Excel",
    columnsManagementSearchTitle: "\u041F\u043E\u0448\u0443\u043A",
    columnsManagementNoColumns: "\u041D\u0435\u043C\u0430\u0454 \u0441\u0442\u043E\u0432\u043F\u0446\u0456\u0432",
    columnsManagementShowHideAllText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438/\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0441\u0456",
    columnsManagementReset: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
    columnsManagementDeleteIconLabel: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
    filterPanelAddFilter: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440",
    filterPanelRemoveAll: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0441\u0456",
    filterPanelDeleteIconLabel: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    filterPanelLogicOperator: "\u041B\u043E\u0433\u0456\u0447\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u044F",
    filterPanelOperator: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0438",
    filterPanelOperatorAnd: "\u0406",
    filterPanelOperatorOr: "\u0410\u0431\u043E",
    filterPanelColumns: "\u0421\u0442\u043E\u0432\u043F\u0446\u0456",
    filterPanelInputLabel: "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
    filterPanelInputPlaceholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0444\u0456\u043B\u044C\u0442\u0440\u0430",
    filterOperatorContains: "\u043C\u0456\u0441\u0442\u0438\u0442\u044C",
    filterOperatorDoesNotContain: "\u043D\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C",
    filterOperatorEquals: "\u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterOperatorDoesNotEqual: "\u043D\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterOperatorStartsWith: "\u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0437",
    filterOperatorEndsWith: "\u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430",
    filterOperatorIs: "\u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterOperatorNot: "\u043D\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterOperatorAfter: "\u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0456\u0436",
    filterOperatorOnOrAfter: "\u0431\u0456\u043B\u044C\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterOperatorBefore: "\u043C\u0435\u043D\u0448\u0435 \u043D\u0456\u0436",
    filterOperatorOnOrBefore: "\u043C\u0435\u043D\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterOperatorIsEmpty: "\u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439",
    filterOperatorIsNotEmpty: "\u043D\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439",
    filterOperatorIsAnyOf: "\u0431\u0443\u0434\u044C-\u0449\u043E \u0456\u0437",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "\u041C\u0456\u0441\u0442\u0438\u0442\u044C",
    headerFilterOperatorDoesNotContain: "\u041D\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C",
    headerFilterOperatorEquals: "\u0414\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    headerFilterOperatorDoesNotEqual: "\u041D\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    headerFilterOperatorStartsWith: "\u041F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0437",
    headerFilterOperatorEndsWith: "\u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430",
    headerFilterOperatorIs: "\u0414\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    headerFilterOperatorNot: "\u041D\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    headerFilterOperatorAfter: "\u041F\u0456\u0441\u043B\u044F",
    headerFilterOperatorOnOrAfter: "\u041F\u0456\u0441\u043B\u044F (\u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438)",
    headerFilterOperatorBefore: "\u0420\u0430\u043D\u0456\u0448\u0435",
    headerFilterOperatorOnOrBefore: "\u0420\u0430\u043D\u0456\u0448\u0435 (\u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438)",
    headerFilterOperatorIsEmpty: "\u041F\u043E\u0440\u043E\u0436\u043D\u0454",
    headerFilterOperatorIsNotEmpty: "\u041D\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0454",
    headerFilterOperatorIsAnyOf: "\u0411\u0443\u0434\u044C-\u0449\u043E \u0456\u0437",
    "headerFilterOperator=": "\u0414\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    "headerFilterOperator!=": "\u041D\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    "headerFilterOperator>": "\u0411\u0456\u043B\u044C\u0448\u0435 \u043D\u0456\u0436",
    "headerFilterOperator>=": "\u0411\u0456\u043B\u044C\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    "headerFilterOperator<": "\u041C\u0435\u043D\u0448\u0435 \u043D\u0456\u0436",
    "headerFilterOperator<=": "\u041C\u0435\u043D\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454",
    filterValueAny: "\u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439",
    filterValueTrue: "\u0442\u0430\u043A",
    filterValueFalse: "\u043D\u0456",
    columnMenuLabel: "\u041C\u0435\u043D\u044E",
    columnMenuShowColumns: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0446\u0456",
    columnMenuManageColumns: "\u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u043E\u0432\u043F\u0446\u044F\u043C\u0438",
    columnMenuFilter: "\u0424\u0456\u043B\u044C\u0442\u0440",
    columnMenuHideColumn: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438",
    columnMenuUnsort: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
    columnMenuSortAsc: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F\u043C",
    columnMenuSortDesc: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0441\u043F\u0430\u0434\u0430\u043D\u043D\u044F\u043C",
    columnHeaderFiltersTooltipActive: (e) => ks(e, {
      one: "\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u0444\u0456\u043B\u044C\u0442\u0440",
      few: "\u0430\u043A\u0442\u0438\u0432\u043D\u0456 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",
      many: "\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0445 \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432"
    }),
    columnHeaderFiltersLabel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",
    columnHeaderSortIconLabel: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438",
    footerRowSelected: (e) => ks(e, {
      one: "\u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A",
      few: "\u0432\u0438\u0431\u0440\u0430\u043D\u0456 \u0440\u044F\u0434\u043A\u0438",
      many: "\u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0445 \u0440\u044F\u0434\u043A\u0456\u0432"
    }),
    footerTotalRows: "\u0423\u0441\u044C\u043E\u0433\u043E \u0440\u044F\u0434\u043A\u0456\u0432:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} \u0437 ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "\u0412\u0438\u0431\u0456\u0440 \u043F\u0440\u0430\u043F\u043E\u0440\u0446\u044F",
    checkboxSelectionSelectAllRows: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044F\u0434\u043A\u0438",
    checkboxSelectionUnselectAllRows: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0432\u0441\u0456\u0445 \u0440\u044F\u0434\u043A\u0456\u0432",
    checkboxSelectionSelectRow: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u044F\u0434\u043E\u043A",
    checkboxSelectionUnselectRow: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0440\u044F\u0434\u043A\u0430",
    booleanCellTrueLabel: "\u0442\u0430\u043A",
    booleanCellFalseLabel: "\u043D\u0456",
    actionsCellMore: "\u0431\u0456\u043B\u044C\u0448\u0435",
    pinToLeft: "\u0417\u0430\u043A\u0440\u0456\u043F\u0438\u0442\u0438 \u043B\u0456\u0432\u043E\u0440\u0443\u0447",
    pinToRight: "\u0417\u0430\u043A\u0440\u0456\u043F\u0438\u0442\u0438 \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447",
    unpin: "\u0412\u0456\u0434\u043A\u0440\u0456\u043F\u0438\u0442\u0438",
    treeDataGroupingHeaderName: "\u0413\u0440\u0443\u043F\u0430",
    treeDataExpand: "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0434\u043E\u0447\u0456\u0440\u043D\u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438",
    treeDataCollapse: "\u043F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0434\u043E\u0447\u0456\u0440\u043D\u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438",
    groupingColumnHeaderName: "\u0413\u0440\u0443\u043F\u0430",
    groupColumn: (e) => `\u0413\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 ${e}`,
    unGroupColumn: (e) => `\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u0433\u0440\u0443\u043F\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430 ${e}`,
    detailPanelToggle: "\u041F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u0447 \u043F\u0430\u043D\u0435\u043B\u0456 \u0434\u0435\u0442\u0430\u043B\u0435\u0439",
    expandDetailPanel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438",
    collapseDetailPanel: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438",
    rowReorderingHeaderName: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0440\u044F\u0434\u043A\u0456\u0432",
    aggregationMenuItemHeader: "\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0456\u044F",
    aggregationFunctionLabelSum: "\u0441\u0443\u043C\u0430",
    aggregationFunctionLabelAvg: "\u0441\u0435\u0440",
    aggregationFunctionLabelMin: "\u043C\u0456\u043D",
    aggregationFunctionLabelMax: "\u043C\u0430\u043A\u0441",
    aggregationFunctionLabelSize: "\u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"
  }, U1 = Mr(W1, O1), q1 = {
    noRowsLabel: "\u6CA1\u6709\u6570\u636E\u3002",
    noResultsOverlayLabel: "\u672A\u627E\u5230\u6570\u636E\u3002",
    toolbarDensity: "\u8868\u683C\u5BC6\u5EA6",
    toolbarDensityLabel: "\u8868\u683C\u5BC6\u5EA6",
    toolbarDensityCompact: "\u7D27\u5BC6",
    toolbarDensityStandard: "\u6807\u51C6",
    toolbarDensityComfortable: "\u7A00\u758F",
    toolbarColumns: "\u5217",
    toolbarColumnsLabel: "\u9009\u62E9\u5217",
    toolbarFilters: "\u7B5B\u9009\u5668",
    toolbarFiltersLabel: "\u663E\u793A\u7B5B\u9009\u5668",
    toolbarFiltersTooltipHide: "\u9690\u85CF\u7B5B\u9009\u5668",
    toolbarFiltersTooltipShow: "\u663E\u793A\u7B5B\u9009\u5668",
    toolbarFiltersTooltipActive: (e) => `${e} \u4E2A\u7B5B\u9009\u5668`,
    toolbarQuickFilterPlaceholder: "\u641C\u7D22\u2026",
    toolbarQuickFilterLabel: "\u641C\u7D22",
    toolbarQuickFilterDeleteIconLabel: "\u6E05\u9664",
    toolbarExport: "\u5BFC\u51FA",
    toolbarExportLabel: "\u5BFC\u51FA",
    toolbarExportCSV: "\u5BFC\u51FA\u81F3CSV",
    toolbarExportPrint: "\u6253\u5370",
    toolbarExportExcel: "\u5BFC\u51FA\u81F3Excel",
    columnsManagementSearchTitle: "\u641C\u7D22",
    columnsManagementNoColumns: "\u6CA1\u6709\u5217",
    columnsManagementShowHideAllText: "\u663E\u793A/\u9690\u85CF\u6240\u6709",
    columnsManagementReset: "\u91CD\u7F6E",
    columnsManagementDeleteIconLabel: "\u6E05\u9664",
    filterPanelAddFilter: "\u6DFB\u52A0\u7B5B\u9009\u5668",
    filterPanelRemoveAll: "\u6E05\u9664\u5168\u90E8",
    filterPanelDeleteIconLabel: "\u5220\u9664",
    filterPanelLogicOperator: "\u903B\u8F91\u64CD\u4F5C\u5668",
    filterPanelOperator: "\u64CD\u4F5C\u5668",
    filterPanelOperatorAnd: "\u4E0E",
    filterPanelOperatorOr: "\u6216",
    filterPanelColumns: "\u5217",
    filterPanelInputLabel: "\u503C",
    filterPanelInputPlaceholder: "\u7B5B\u9009\u503C",
    filterOperatorContains: "\u5305\u542B",
    filterOperatorDoesNotContain: "\u4E0D\u5305\u542B",
    filterOperatorEquals: "\u7B49\u4E8E",
    filterOperatorDoesNotEqual: "\u4E0D\u7B49\u4E8E",
    filterOperatorStartsWith: "\u5F00\u59CB\u4E8E",
    filterOperatorEndsWith: "\u7ED3\u675F\u4E8E",
    filterOperatorIs: "\u662F",
    filterOperatorNot: "\u4E0D\u662F",
    filterOperatorAfter: "\u5728\u540E\u9762",
    filterOperatorOnOrAfter: "\u6B63\u5728\u540E\u9762",
    filterOperatorBefore: "\u5728\u524D\u9762",
    filterOperatorOnOrBefore: "\u6B63\u5728\u524D\u9762",
    filterOperatorIsEmpty: "\u4E3A\u7A7A",
    filterOperatorIsNotEmpty: "\u4E0D\u4E3A\u7A7A",
    filterOperatorIsAnyOf: "\u5C5E\u4E8E",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "\u5305\u542B",
    headerFilterOperatorDoesNotContain: "\u4E0D\u5305\u542B",
    headerFilterOperatorEquals: "\u7B49\u4E8E",
    headerFilterOperatorDoesNotEqual: "\u4E0D\u7B49\u4E8E",
    headerFilterOperatorStartsWith: "\u5F00\u59CB\u4E8E",
    headerFilterOperatorEndsWith: "\u7ED3\u675F\u4E8E",
    headerFilterOperatorIs: "\u662F",
    headerFilterOperatorNot: "\u4E0D\u662F",
    headerFilterOperatorAfter: "\u5728\u540E\u9762",
    headerFilterOperatorOnOrAfter: "\u5728\u5F53\u524D\u6216\u540E\u9762",
    headerFilterOperatorBefore: "\u5728\u524D\u9762",
    headerFilterOperatorOnOrBefore: "\u5728\u5F53\u524D\u6216\u524D\u9762",
    headerFilterOperatorIsEmpty: "\u4E3A\u7A7A",
    headerFilterOperatorIsNotEmpty: "\u4E0D\u4E3A\u7A7A",
    headerFilterOperatorIsAnyOf: "\u5C5E\u4E8E",
    "headerFilterOperator=": "\u7B49\u4E8E",
    "headerFilterOperator!=": "\u4E0D\u7B49\u4E8E",
    "headerFilterOperator>": "\u5927\u4E8E",
    "headerFilterOperator>=": "\u5927\u4E8E\u6216\u7B49\u4E8E",
    "headerFilterOperator<": "\u5C0F\u4E8E",
    "headerFilterOperator<=": "\u5C0F\u4E8E\u6216\u7B49\u4E8E",
    filterValueAny: "\u4EFB\u4F55",
    filterValueTrue: "\u771F",
    filterValueFalse: "\u5047",
    columnMenuLabel: "\u83DC\u5355",
    columnMenuAriaLabel: (e) => `${e} \u5217\u83DC\u5355`,
    columnMenuShowColumns: "\u663E\u793A",
    columnMenuManageColumns: "\u7BA1\u7406\u5217",
    columnMenuFilter: "\u7B5B\u9009\u5668",
    columnMenuHideColumn: "\u9690\u85CF",
    columnMenuUnsort: "\u6062\u590D\u9ED8\u8BA4",
    columnMenuSortAsc: "\u5347\u5E8F",
    columnMenuSortDesc: "\u964D\u5E8F",
    columnHeaderFiltersTooltipActive: (e) => e !== 1 ? `${e} \u4E2A\u7B5B\u9009\u5668` : `${e} \u4E2A\u7B5B\u9009\u5668`,
    columnHeaderFiltersLabel: "\u663E\u793A\u7B5B\u9009\u5668",
    columnHeaderSortIconLabel: "\u6392\u5E8F",
    footerRowSelected: (e) => `\u5171\u9009\u4E2D\u4E86${e.toLocaleString()}\u884C`,
    footerTotalRows: "\u6240\u6709\u884C:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} / ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "\u591A\u9009\u6846",
    checkboxSelectionSelectAllRows: "\u5168\u9009\u884C",
    checkboxSelectionUnselectAllRows: "\u53CD\u9009\u6240\u6709\u884C",
    checkboxSelectionSelectRow: "\u9009\u62E9\u884C",
    checkboxSelectionUnselectRow: "\u53CD\u9009\u884C",
    booleanCellTrueLabel: "\u771F",
    booleanCellFalseLabel: "\u5047",
    actionsCellMore: "\u66F4\u591A",
    pinToLeft: "\u56FA\u5B9A\u5230\u5DE6\u4FA7",
    pinToRight: "\u56FA\u5B9A\u5230\u53F3\u4FA7",
    unpin: "\u53D6\u6D88\u56FA\u5B9A",
    treeDataGroupingHeaderName: "\u7EC4",
    treeDataExpand: "\u67E5\u770B\u5B50\u9879\u76EE",
    treeDataCollapse: "\u9690\u85CF\u5B50\u9879\u76EE",
    groupingColumnHeaderName: "\u7EC4",
    groupColumn: (e) => `\u7528${e}\u5206\u7EC4`,
    unGroupColumn: (e) => `\u4E0D\u518D\u7528${e}\u5206\u7EC4`,
    detailPanelToggle: "\u8BE6\u7EC6\u4FE1\u606F",
    expandDetailPanel: "\u663E\u793A",
    collapseDetailPanel: "\u6298\u53E0",
    rowReorderingHeaderName: "\u91CD\u65B0\u6392\u5217\u884C",
    aggregationMenuItemHeader: "\u96C6\u5408",
    aggregationFunctionLabelSum: "\u603B\u6570",
    aggregationFunctionLabelAvg: "\u5E73\u5747",
    aggregationFunctionLabelMin: "\u6700\u5C0F",
    aggregationFunctionLabelMax: "\u6700\u5927",
    aggregationFunctionLabelSize: "\u5927\u5C0F"
  }, K1 = Mr(q1, F1);
  function Y1(e) {
    if (!e) return [
      10,
      25,
      50,
      100
    ];
    const t = e.split(",").map((r) => parseInt(r.trim(), 10)).filter((r) => !isNaN(r) && r > 0);
    return t.length > 0 ? t : [
      10,
      25,
      50,
      100
    ];
  }
  const X1 = {
    de: E1,
    en: op,
    es: A1,
    fr: $1,
    it: R1,
    nl: H1,
    pl: N1,
    pt: G1,
    ru: B1,
    uk: U1,
    "zh-cn": K1
  };
  function Q1(e) {
    return (X1[e] ?? op).components.MuiDataGrid.defaultProps.localeText;
  }
  function Nc(e) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e12 ? e : e * 1e3;
    if (typeof e == "string") {
      const t = new Date(e);
      return isNaN(t.getTime()) ? 0 : t.getTime();
    }
    return 0;
  }
  function Z1(e) {
    return f.jsx(oS, {
      children: f.jsx(vP, {
        ...e.quickFilterProps
      })
    });
  }
  function J1(e) {
    const { children: t, ...r } = e;
    return f.jsx(jt, {
      ...r,
      children: f.jsx(ye, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }
  function eO(e) {
    var _a2;
    return f.jsx(Wd, {
      ...e,
      labelRowsPerPage: f.jsx(ye, {
        variant: "body2",
        component: "span",
        children: e.labelRowsPerPage
      }),
      labelDisplayedRows: (t) => f.jsx(ye, {
        variant: "body2",
        component: "span",
        children: typeof e.labelDisplayedRows == "function" ? e.labelDisplayedRows(t) : `${t.from}\u2013${t.to} / ${t.count}`
      }),
      slots: {
        menuItem: J1
      },
      slotProps: {
        ...e.slotProps,
        select: {
          ...(_a2 = e.slotProps) == null ? void 0 : _a2.select,
          renderValue: (t) => f.jsx(ye, {
            variant: "body2",
            component: "span",
            children: String(t)
          }),
          sx: {
            "& .MuiSelect-icon": {
              color: "inherit"
            }
          }
        }
      }
    });
  }
  const tO = () => {
    const e = d.useContext(kp), { widget: { data: { oidObject: t } }, widget: r } = e, { data: o } = Ep("oid"), n = Gp("oid"), l = t == null ? void 0 : t.type, s = l === "string" || l === "mixed" || l === "json", i = d.useMemo(() => {
      if (n == null) return [];
      let I;
      if (typeof n == "string") try {
        I = JSON.parse(n);
      } catch {
        return [];
      }
      else I = n;
      return Array.isArray(I) ? I : typeof I == "object" && I !== null ? [
        I
      ] : [];
    }, [
      n
    ]), a = d.useMemo(() => ({
      maxDepth: r.data.tableMaxDepth || 10
    }), [
      r.data.tableMaxDepth
    ]), { columns: u, rows: c } = Bb(i, a), p = d.useMemo(() => cu(r.data.columnConfig), [
      r.data.columnConfig
    ]), g = d.useCallback((I) => ((j) => {
      const D = j.value;
      let S = D != null ? String(D) : "";
      if (I.format) switch (I.format.type) {
        case "number":
          (typeof D == "number" || typeof D == "string" && !isNaN(Number(D))) && (S = uu(Number(D), {
            decimals: I.format.numberDecimals,
            prefix: I.format.numberPrefix,
            suffix: I.format.numberSuffix,
            thousands: I.format.numberThousandsSeparator
          }));
          break;
        case "date":
          S = du(D, I.format.dateFormat);
          break;
        case "boolean":
          S = Vs(D, I.format.booleanTrue, I.format.booleanFalse);
          break;
      }
      const y = {}, M = {};
      if (I.cellStyle && I.cellStyle.length > 0) {
        for (const E of I.cellStyle) if (E.logic && wb(E.logic, D)) {
          if (E.backgroundColor) {
            const N = Eo(E.backgroundColor);
            N ? y.background = N : y.backgroundColor = E.backgroundColor;
          }
          if (E.textColor) {
            const N = Eo(E.textColor);
            N ? (M.background = N, M.backgroundClip = "text", M.WebkitBackgroundClip = "text", M.color = "transparent") : M.color = E.textColor;
          }
          E.fontWeight && (M.fontWeight = E.fontWeight), E.fontStyle && (M.fontStyle = E.fontStyle);
          break;
        }
      }
      const $ = "background" in y || "backgroundColor" in y;
      return f.jsx(Ze, {
        sx: {
          width: $ ? "calc(100% + 20px)" : "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ...$ && {
            ml: "-10px",
            px: "10px"
          },
          ...y
        },
        children: f.jsx(ye, {
          variant: "body2",
          component: "span",
          noWrap: true,
          title: S,
          sx: {
            width: "100%",
            display: "block",
            lineHeight: "inherit",
            ...M
          },
          children: S
        })
      });
    }), []), b = d.useCallback((I) => {
      const j = I.value != null ? String(I.value) : "";
      return f.jsx(ye, {
        variant: "body2",
        component: "span",
        noWrap: true,
        title: j,
        sx: {
          width: "100%",
          display: "block",
          lineHeight: "inherit"
        },
        children: j
      });
    }, []), h = d.useCallback((I) => f.jsx(ye, {
      variant: "body2",
      component: "span",
      fontWeight: "medium",
      noWrap: true,
      title: I.colDef.headerName || I.colDef.field,
      sx: {
        width: "100%",
        display: "block",
        lineHeight: "inherit"
      },
      children: I.colDef.headerName || I.colDef.field
    }), []), m = d.useMemo(() => p.length > 0 ? p.filter((I) => I.visible).map((I) => {
      var _a2;
      const j = {
        field: I.path,
        headerName: I.headerName || I.path,
        flex: I.width ? 0 : 1,
        width: I.width,
        headerAlign: I.align || "left",
        align: I.align || "left",
        sortable: I.sortable ?? r.data.tableSorting !== false,
        filterable: I.filterable ?? r.data.tableFiltering === true,
        renderHeader: h
      };
      return I.format || I.cellStyle && I.cellStyle.length > 0 ? j.renderCell = g(I) : j.renderCell = b, ((_a2 = I.format) == null ? void 0 : _a2.type) === "date" && (j.sortComparator = (D, S) => Nc(D) - Nc(S)), j;
    }) : u.map((I) => ({
      field: I.path,
      headerName: I.path.split(".").pop() || I.path,
      flex: 1,
      sortable: r.data.tableSorting !== false,
      filterable: r.data.tableFiltering === true,
      renderCell: b,
      renderHeader: h
    })), [
      p,
      u,
      r.data.tableSorting,
      r.data.tableFiltering,
      g,
      b,
      h
    ]), x = d.useMemo(() => Number(r.data.tablePageSize) || 25, [
      r.data.tablePageSize
    ]), [v, w] = d.useState({
      page: 0,
      pageSize: x
    });
    d.useEffect(() => {
      w((I) => I.pageSize === x ? I : {
        page: 0,
        pageSize: x
      });
    }, [
      x
    ]);
    const k = d.useMemo(() => c.map((I, j) => ({
      id: j,
      ...I
    })), [
      c
    ]), L = d.useMemo(() => Y1(r.data.tablePageSizeOptions), [
      r.data.tablePageSizeOptions
    ]), F = d.useMemo(() => {
      const I = {
        border: 0,
        width: "100%",
        height: "100%"
      }, j = r.data.tableHeaderBgColor, D = r.data.tableHeaderTextColor, S = r.data.tableHeaderFontSize;
      if (j || D || S) {
        const y = j ? Eo(j) : null;
        I["& .MuiDataGrid-columnHeaders"] = {
          ...y && {
            background: y
          },
          ...!y && j && {
            backgroundColor: j
          }
        }, I["& .MuiDataGrid-columnHeader"] = {
          ...y && {
            background: y
          },
          ...!y && j && {
            backgroundColor: j
          },
          ...D && {
            color: D
          },
          ...S && {
            fontSize: `${S}px`
          }
        }, I["& .MuiDataGrid-filler"] = {
          ...y && {
            background: y
          },
          ...!y && j && {
            backgroundColor: j
          }
        }, I["& .MuiDataGrid-scrollbarFiller--header"] = {
          ...y && {
            background: y
          },
          ...!y && j && {
            backgroundColor: j
          }
        };
      }
      if (r.data.tableCellFontSize && (I["& .MuiDataGrid-cell"] = {
        fontSize: `${r.data.tableCellFontSize}px`
      }), r.data.tableStripedColor) {
        const y = r.data.tableStripedColor, M = Eo(y);
        I["& .MuiDataGrid-row:nth-of-type(even)"] = {
          background: M || y,
          backgroundColor: M ? "transparent" : y
        };
      }
      return r.data.tableShowRowBorders === false && (I["--DataGrid-rowBorderColor"] = "transparent"), I["& .MuiDataGrid-columnHeader--last .MuiDataGrid-columnSeparator"] = {
        display: "none"
      }, I;
    }, [
      r.data.tableHeaderBgColor,
      r.data.tableHeaderTextColor,
      r.data.tableHeaderFontSize,
      r.data.tableCellFontSize,
      r.data.tableStripedColor,
      r.data.tableShowRowBorders
    ]);
    return f.jsxs(Tp, {
      isValidType: s,
      data: o,
      oidValue: n,
      children: [
        f.jsx(Ap, {
          data: o,
          widget: r
        }),
        s && m.length > 0 ? f.jsx(Ze, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          },
          children: f.jsx(b1, {
            localeText: Q1(oe.getLanguage()),
            rows: k,
            columns: m,
            density: r.data.tableDensity || "standard",
            rowHeight: Number(r.data.tableRowHeight) || void 0,
            columnHeaderHeight: Number(r.data.tableHeaderHeight) || void 0,
            pageSizeOptions: L,
            paginationModel: v,
            onPaginationModelChange: w,
            hideFooter: r.data.tablePagination === false,
            disableColumnSorting: r.data.tableSorting === false,
            disableColumnFilter: r.data.tableFiltering !== true,
            disableColumnMenu: r.data.tableColumnMenu === false,
            checkboxSelection: r.data.tableRowSelection === true,
            disableRowSelectionOnClick: true,
            showCellVerticalBorder: r.data.tableShowCellBorders === true,
            showColumnVerticalBorder: r.data.tableShowCellBorders === true,
            autosizeOnMount: r.data.tableAutoSize === true,
            slots: {
              ...r.data.tableQuickFilter === true && {
                toolbar: Z1
              },
              pagination: eO
            },
            ...r.data.tableQuickFilter === true && {
              slotProps: {
                toolbar: {
                  quickFilterProps: {
                    debounceMs: 300,
                    variant: "outlined",
                    size: "small"
                  }
                }
              }
            },
            sx: F
          }, `grid-${r.data.tableAutoSize}`)
        }) : f.jsx(Ze, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: f.jsx(ye, {
            variant: "body2",
            color: "text.secondary",
            children: s ? oe.t("json_table_no_data") : oe.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, rO = [
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
  ni = class extends oe {
    static createObjectFields() {
      const t = Dp([
        "string",
        "mixed",
        "json"
      ]), r = t.find((o) => o.name === "oid");
      if (r) {
        const o = r, n = o.onChange;
        o.onChange = async (l, s, i, a) => {
          if (!s.oid) for (const u of rO) delete s[u];
          n && await n(l, s, i, a);
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
              ...Zi()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...ni.createObjectFields(),
              ...qb()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Zi({
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
      return ni.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, r) {
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t), t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true;
      const r = {
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
      return $p(this.wrapContent(f.jsx(tO, {})), r);
    }
  };
});
export {
  __tla,
  ni as default
};
