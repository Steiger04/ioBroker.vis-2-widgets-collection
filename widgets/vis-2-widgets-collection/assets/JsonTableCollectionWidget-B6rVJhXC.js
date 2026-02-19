import { g as ut, a as at, u as dt, Z as md, _ as bd, $ as br, a0 as Nt, h as zt, j as p, s as le, d as ue, e as ge, a1 as fi, m as We, a2 as tr, b as Ye, P as Ht, B as Ql, c as Se, I as Ot, M as se, a3 as sr, O as ir, N as Bt, a4 as ot, a5 as Be, a6 as Cd, a7 as tn, a8 as wd, f as St, a9 as xd, aa as Gt, i as st, ab as vd, ac as so, ad as Qt, ae as gi, af as $l, ag as nc, W as yd, ah as Sd, T as Pe, ai as Cr, aj as wr, L as Id, ak as hi, al as Pd, am as Ps, an as Md, ao as mi, ap as Ms, V as Jr, o as Ze, aq as Xt, G as ae, ar as kd, as as Ed, at as Jl, au as Zl, av as Fd, v as Gn, aw as oc, C as kn, E as Hl, ax as In, ay as b, az as fe, aA as ks, K as Td, aB as Od, aC as rc, aD as bi, aE as Dd, aF as Rd, aG as $d, aH as Hd, aI as Ld, D as jd, n as Ad, q as zd, w as Gd, x as _d, z as Vd, y as Ci, A as Nd, __tla as __tla_0 } from "./useData-CHGwo_iw.js";
import { v as c, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Zr, __tla as __tla_2 } from "./Checkbox-B3nRZFSe.js";
import { S as bn, s as et, g as Bd, __tla as __tla_3 } from "./Stack-CCmKKmyw.js";
import { g as Wd, M as Lt, __tla as __tla_4 } from "./MenuItem-lVKdmvs2.js";
import { F as jn, __tla as __tla_5 } from "./FormControlLabel-BZXmt7zV.js";
import { S as Dr, __tla as __tla_6 } from "./Switch-DjS1mw1A.js";
import { S as Ud, __tla as __tla_7 } from "./Slider-Cv1Fm-zO.js";
import { B as ar, __tla as __tla_8 } from "./Button-B4k6QPcj.js";
import { D as Kd, a as qd, b as Yd, L as xo, __tla as __tla_9 } from "./ListItemText-BE07mIsv.js";
import { C as Xd, __tla as __tla_10 } from "./Close-CL8GeJs9.js";
import { u as Qd, __tla as __tla_11 } from "./useOidValue-DPu-5fsu.js";
import { g as Jd } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_12 } from "./SwitchBase-BXvDBV8a.js";
import { __tla as __tla_13 } from "./listItemTextClasses-BUoEXc8e.js";
let Is;
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
  })()
]).then(async () => {
  var lc = {
    exports: {}
  }, Zd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ep = Zd, tp = ep;
  function sc() {
  }
  function ic() {
  }
  ic.resetWarningCache = sc;
  var np = function() {
    function e(o, r, l, s, a, i) {
      if (i !== tp) {
        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw d.name = "Invariant Violation", d;
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var n = {
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
      checkPropTypes: ic,
      resetWarningCache: sc
    };
    return n.PropTypes = n, n;
  };
  lc.exports = np();
  var op = lc.exports;
  const N = Jd(op), Es = (e) => {
    const t = c.useRef({});
    return c.useEffect(() => {
      t.current = e;
    }), t.current;
  };
  function rp(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
  }
  function lp(e) {
    return parseFloat(e);
  }
  function sp(e) {
    return ut("MuiCollapse", e);
  }
  at("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const ip = (e) => {
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
    return ge(o, sp, n);
  }, ap = le("div", {
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
  })(We(({ theme: e }) => ({
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
  }))), cp = le("div", {
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
  }), up = le("div", {
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
  }), es = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: l, className: s, collapsedSize: a = "0px", component: i, easing: d, in: u, onEnter: f, onEntered: h, onEntering: g, onExit: m, onExited: x, onExiting: I, orientation: S = "vertical", style: w, timeout: F = md.standard, TransitionComponent: H = bd, ...v } = o, R = {
      ...o,
      orientation: S,
      collapsedSize: a
    }, A = ip(R), $ = br(), y = Nt(), C = c.useRef(null), M = c.useRef(), T = typeof a == "number" ? `${a}px` : a, O = S === "horizontal", G = O ? "width" : "height", E = c.useRef(null), P = zt(n, E), D = (B) => (te) => {
      if (B) {
        const J = E.current;
        te === void 0 ? B(J) : B(J, te);
      }
    }, L = () => C.current ? C.current[O ? "clientWidth" : "clientHeight"] : 0, z = D((B, te) => {
      C.current && O && (C.current.style.position = "absolute"), B.style[G] = T, f && f(B, te);
    }), _ = D((B, te) => {
      const J = L();
      C.current && O && (C.current.style.position = "");
      const { duration: ne, easing: ce } = fi({
        style: w,
        timeout: F,
        easing: d
      }, {
        mode: "enter"
      });
      if (F === "auto") {
        const Ce = $.transitions.getAutoHeightDuration(J);
        B.style.transitionDuration = `${Ce}ms`, M.current = Ce;
      } else B.style.transitionDuration = typeof ne == "string" ? ne : `${ne}ms`;
      B.style[G] = `${J}px`, B.style.transitionTimingFunction = ce, g && g(B, te);
    }), j = D((B, te) => {
      B.style[G] = "auto", h && h(B, te);
    }), V = D((B) => {
      B.style[G] = `${L()}px`, m && m(B);
    }), K = D(x), W = D((B) => {
      const te = L(), { duration: J, easing: ne } = fi({
        style: w,
        timeout: F,
        easing: d
      }, {
        mode: "exit"
      });
      if (F === "auto") {
        const ce = $.transitions.getAutoHeightDuration(te);
        B.style.transitionDuration = `${ce}ms`, M.current = ce;
      } else B.style.transitionDuration = typeof J == "string" ? J : `${J}ms`;
      B.style[G] = T, B.style.transitionTimingFunction = ne, I && I(B);
    }), U = (B) => {
      F === "auto" && y.start(M.current || 0, B), r && r(E.current, B);
    };
    return p.jsx(H, {
      in: u,
      onEnter: z,
      onEntered: j,
      onEntering: _,
      onExit: V,
      onExited: K,
      onExiting: W,
      addEndListener: U,
      nodeRef: E,
      timeout: F === "auto" ? null : F,
      ...v,
      children: (B, { ownerState: te, ...J }) => p.jsx(ap, {
        as: i,
        className: ue(A.root, s, {
          entered: A.entered,
          exited: !u && T === "0px" && A.hidden
        }[B]),
        style: {
          [O ? "minWidth" : "minHeight"]: T,
          ...w
        },
        ref: P,
        ownerState: {
          ...R,
          state: B
        },
        ...J,
        children: p.jsx(cp, {
          ownerState: {
            ...R,
            state: B
          },
          className: A.wrapper,
          ref: C,
          children: p.jsx(up, {
            ownerState: {
              ...R,
              state: B
            },
            className: A.wrapperInner,
            children: l
          })
        })
      })
    });
  });
  es && (es.muiSupportAuto = true);
  const ac = c.createContext({});
  function dp(e) {
    return ut("MuiAccordion", e);
  }
  const Rr = at("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), pp = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: l } = e;
    return ge({
      root: [
        "root",
        !n && "rounded",
        o && "expanded",
        r && "disabled",
        !l && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, dp, t);
  }, fp = le(Ht, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Rr.region}`]: t.region
        },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters
      ];
    }
  })(We(({ theme: e }) => {
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
      [`&.${Rr.expanded}`]: {
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
      [`&.${Rr.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), We(({ theme: e }) => ({
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
          [`&.${Rr.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), gp = le("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), $r = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: l, defaultExpanded: s = false, disabled: a = false, disableGutters: i = false, expanded: d, onChange: u, square: f = false, slots: h = {}, slotProps: g = {}, TransitionComponent: m, TransitionProps: x, ...I } = o, [S, w] = tr({
      controlled: d,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), F = c.useCallback((L) => {
      w(!S), u && u(L, !S);
    }, [
      S,
      u,
      w
    ]), [H, ...v] = c.Children.toArray(r), R = c.useMemo(() => ({
      expanded: S,
      disabled: a,
      disableGutters: i,
      toggle: F
    }), [
      S,
      a,
      i,
      F
    ]), A = {
      ...o,
      square: f,
      disabled: a,
      disableGutters: i,
      expanded: S
    }, $ = pp(A), y = {
      transition: m,
      ...h
    }, C = {
      transition: x,
      ...g
    }, M = {
      slots: y,
      slotProps: C
    }, [T, O] = Ye("root", {
      elementType: fp,
      externalForwardedProps: {
        ...M,
        ...I
      },
      className: ue($.root, l),
      shouldForwardComponentProp: true,
      ownerState: A,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [G, E] = Ye("heading", {
      elementType: gp,
      externalForwardedProps: M,
      className: $.heading,
      ownerState: A
    }), [P, D] = Ye("transition", {
      elementType: es,
      externalForwardedProps: M,
      ownerState: A
    });
    return p.jsxs(T, {
      ...O,
      children: [
        p.jsx(G, {
          ...E,
          children: p.jsx(ac.Provider, {
            value: R,
            children: H
          })
        }),
        p.jsx(P, {
          in: S,
          timeout: "auto",
          ...D,
          children: p.jsx("div", {
            "aria-labelledby": H.props.id,
            id: H.props["aria-controls"],
            role: "region",
            className: $.region,
            children: v
          })
        })
      ]
    });
  });
  function hp(e) {
    return ut("MuiAccordionDetails", e);
  }
  at("MuiAccordionDetails", [
    "root"
  ]);
  const mp = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, hp, t);
  }, bp = le("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(We(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), Hr = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...l } = o, s = o, a = mp(s);
    return p.jsx(bp, {
      className: ue(a.root, r),
      ref: n,
      ownerState: s,
      ...l
    });
  });
  function Cp(e) {
    return ut("MuiAccordionSummary", e);
  }
  const ho = at("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), wp = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return ge({
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
    }, Cp, t);
  }, xp = le(Ql, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(We(({ theme: e }) => {
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
      [`&.${ho.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${ho.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${ho.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${ho.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), vp = le("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(We(({ theme: e }) => ({
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
          [`&.${ho.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), yp = le("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(We(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${ho.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Lr = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: l, expandIcon: s, focusVisibleClassName: a, onClick: i, slots: d, slotProps: u, ...f } = o, { disabled: h = false, disableGutters: g, expanded: m, toggle: x } = c.useContext(ac), I = (C) => {
      x && x(C), i && i(C);
    }, S = {
      ...o,
      expanded: m,
      disabled: h,
      disableGutters: g
    }, w = wp(S), F = {
      slots: d,
      slotProps: u
    }, [H, v] = Ye("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: ue(w.root, l),
      elementType: xp,
      externalForwardedProps: {
        ...F,
        ...f
      },
      ownerState: S,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: h,
        "aria-expanded": m,
        focusVisibleClassName: ue(w.focusVisible, a)
      },
      getSlotProps: (C) => ({
        ...C,
        onClick: (M) => {
          var _a2;
          (_a2 = C.onClick) == null ? void 0 : _a2.call(C, M), I(M);
        }
      })
    }), [R, A] = Ye("content", {
      className: w.content,
      elementType: vp,
      externalForwardedProps: F,
      ownerState: S
    }), [$, y] = Ye("expandIconWrapper", {
      className: w.expandIconWrapper,
      elementType: yp,
      externalForwardedProps: F,
      ownerState: S
    });
    return p.jsxs(H, {
      ...v,
      children: [
        p.jsx(R, {
          ...A,
          children: r
        }),
        s && p.jsx($, {
          ...y,
          children: s
        })
      ]
    });
  });
  function Sp(e) {
    return ut("MuiAlert", e);
  }
  const wi = at("MuiAlert", [
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
  ]), Ip = Se(p.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), Pp = Se(p.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Mp = Se(p.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), kp = Se(p.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), cc = Se(p.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Ep = (e) => {
    const { variant: t, color: n, severity: o, classes: r } = e, l = {
      root: [
        "root",
        `color${se(n || o)}`,
        `${t}${se(n || o)}`,
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
    return ge(l, Sp, r);
  }, Fp = le(Ht, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${se(n.color || n.severity)}`]
      ];
    }
  })(We(({ theme: e }) => {
    const t = e.palette.mode === "light" ? sr : ir, n = e.palette.mode === "light" ? ir : sr;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Bt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${wi.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Bt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${wi.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Bt([
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
  })), Tp = le("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), Op = le("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), Dp = le("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), xi = {
    success: p.jsx(Ip, {
      fontSize: "inherit"
    }),
    warning: p.jsx(Pp, {
      fontSize: "inherit"
    }),
    error: p.jsx(Mp, {
      fontSize: "inherit"
    }),
    info: p.jsx(kp, {
      fontSize: "inherit"
    })
  }, Rp = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: l, className: s, closeText: a = "Close", color: i, components: d = {}, componentsProps: u = {}, icon: f, iconMapping: h = xi, onClose: g, role: m = "alert", severity: x = "success", slotProps: I = {}, slots: S = {}, variant: w = "standard", ...F } = o, H = {
      ...o,
      color: i,
      severity: x,
      variant: w,
      colorSeverity: i || x
    }, v = Ep(H), R = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...S
      },
      slotProps: {
        ...u,
        ...I
      }
    }, [A, $] = Ye("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: ue(v.root, s),
      elementType: Fp,
      externalForwardedProps: {
        ...R,
        ...F
      },
      ownerState: H,
      additionalProps: {
        role: m,
        elevation: 0
      }
    }), [y, C] = Ye("icon", {
      className: v.icon,
      elementType: Tp,
      externalForwardedProps: R,
      ownerState: H
    }), [M, T] = Ye("message", {
      className: v.message,
      elementType: Op,
      externalForwardedProps: R,
      ownerState: H
    }), [O, G] = Ye("action", {
      className: v.action,
      elementType: Dp,
      externalForwardedProps: R,
      ownerState: H
    }), [E, P] = Ye("closeButton", {
      elementType: Ot,
      externalForwardedProps: R,
      ownerState: H
    }), [D, L] = Ye("closeIcon", {
      elementType: cc,
      externalForwardedProps: R,
      ownerState: H
    });
    return p.jsxs(A, {
      ...$,
      children: [
        f !== false ? p.jsx(y, {
          ...C,
          children: f || h[x] || xi[x]
        }) : null,
        p.jsx(M, {
          ...T,
          children: l
        }),
        r != null ? p.jsx(O, {
          ...G,
          children: r
        }) : null,
        r == null && g ? p.jsx(O, {
          ...G,
          children: p.jsx(E, {
            size: "small",
            "aria-label": a,
            title: a,
            color: "inherit",
            onClick: g,
            ...P,
            children: p.jsx(D, {
              fontSize: "small",
              ...L
            })
          })
        }) : null
      ]
    });
  });
  function vi(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function uc(e = {}) {
    const { ignoreAccents: t = true, ignoreCase: n = true, limit: o, matchFrom: r = "any", stringify: l, trim: s = false } = e;
    return (a, { inputValue: i, getOptionLabel: d }) => {
      let u = s ? i.trim() : i;
      n && (u = u.toLowerCase()), t && (u = vi(u));
      const f = u ? a.filter((h) => {
        let g = (l || d)(h);
        return n && (g = g.toLowerCase()), t && (g = vi(g)), r === "start" ? g.startsWith(u) : g.includes(u);
      }) : a;
      return typeof o == "number" ? f.slice(0, o) : f;
    };
  }
  const $p = uc(), yi = 5, Hp = (e) => {
    var _a2;
    return e.current !== null && ((_a2 = e.current.parentElement) == null ? void 0 : _a2.contains(document.activeElement));
  }, Lp = [];
  function Si(e, t, n) {
    if (t || e == null) return "";
    const o = n(e);
    return typeof o == "string" ? o : "";
  }
  function jp(e) {
    const { unstable_isActiveElementInListbox: t = Hp, unstable_classNamePrefix: n = "Mui", autoComplete: o = false, autoHighlight: r = false, autoSelect: l = false, blurOnSelect: s = false, clearOnBlur: a = !e.freeSolo, clearOnEscape: i = false, componentName: d = "useAutocomplete", defaultValue: u = e.multiple ? Lp : null, disableClearable: f = false, disableCloseOnSelect: h = false, disabled: g, disabledItemsFocusable: m = false, disableListWrap: x = false, filterOptions: I = $p, filterSelectedOptions: S = false, freeSolo: w = false, getOptionDisabled: F, getOptionKey: H, getOptionLabel: v = (Q) => Q.label ?? Q, groupBy: R, handleHomeEndKeys: A = !e.freeSolo, id: $, includeInputInList: y = false, inputValue: C, isOptionEqualToValue: M = (Q, q) => Q === q, multiple: T = false, onChange: O, onClose: G, onHighlightChange: E, onInputChange: P, onOpen: D, open: L, openOnFocus: z = false, options: _, readOnly: j = false, selectOnFocus: V = !e.freeSolo, value: K } = e, W = ot($);
    let U = v;
    U = (Q) => {
      const q = v(Q);
      return typeof q != "string" ? String(q) : q;
    };
    const B = c.useRef(false), te = c.useRef(true), J = c.useRef(null), ne = c.useRef(null), [ce, Ce] = c.useState(null), [Y, oe] = c.useState(-1), he = r ? 0 : -1, Z = c.useRef(he), Ie = c.useRef(Si(u ?? K, T, U)).current, [ee, ye] = tr({
      controlled: K,
      default: u,
      name: d
    }), [xe, Fe] = tr({
      controlled: C,
      default: Ie,
      name: d,
      state: "inputValue"
    }), [Ne, Ue] = c.useState(false), Ge = c.useCallback((Q, q, de) => {
      if (!(T ? ee.length < q.length : q !== null) && !a) return;
      const Ve = Si(q, T, U);
      xe !== Ve && (Fe(Ve), P && P(Q, Ve, de));
    }, [
      U,
      xe,
      T,
      P,
      Fe,
      a,
      ee
    ]), [He, Le] = tr({
      controlled: L,
      default: false,
      name: d,
      state: "open"
    }), [Ke, _e] = c.useState(true), me = !T && ee != null && xe === U(ee), ve = He && !j, pe = ve ? I(_.filter((Q) => !(S && (T ? ee : [
      ee
    ]).some((q) => q !== null && M(Q, q)))), {
      inputValue: me && Ke ? "" : xe,
      getOptionLabel: U
    }) : [], be = Es({
      filteredOptions: pe,
      value: ee,
      inputValue: xe
    });
    c.useEffect(() => {
      const Q = ee !== be.value;
      Ne && !Q || w && !Q || Ge(null, ee, "reset");
    }, [
      ee,
      Ge,
      Ne,
      be.value,
      w
    ]);
    const je = He && pe.length > 0 && !j, $e = Be((Q) => {
      Q === -1 ? J.current.focus() : ce.querySelector(`[data-tag-index="${Q}"]`).focus();
    });
    c.useEffect(() => {
      T && Y > ee.length - 1 && (oe(-1), $e(-1));
    }, [
      ee,
      T,
      Y,
      $e
    ]);
    function lt(Q, q) {
      if (!ne.current || Q < 0 || Q >= pe.length) return -1;
      let de = Q;
      for (; ; ) {
        const Te = ne.current.querySelector(`[data-option-index="${de}"]`), Ve = m ? false : !Te || Te.disabled || Te.getAttribute("aria-disabled") === "true";
        if (Te && Te.hasAttribute("tabindex") && !Ve) return de;
        if (q === "next" ? de = (de + 1) % pe.length : de = (de - 1 + pe.length) % pe.length, de === Q) return -1;
      }
    }
    const xt = Be(({ event: Q, index: q, reason: de }) => {
      if (Z.current = q, q === -1 ? J.current.removeAttribute("aria-activedescendant") : J.current.setAttribute("aria-activedescendant", `${W}-option-${q}`), E && [
        "mouse",
        "keyboard",
        "touch"
      ].includes(de) && E(Q, q === -1 ? null : pe[q], de), !ne.current) return;
      const Te = ne.current.querySelector(`[role="option"].${n}-focused`);
      Te && (Te.classList.remove(`${n}-focused`), Te.classList.remove(`${n}-focusVisible`));
      let Ve = ne.current;
      if (ne.current.getAttribute("role") !== "listbox" && (Ve = ne.current.parentElement.querySelector('[role="listbox"]')), !Ve) return;
      if (q === -1) {
        Ve.scrollTop = 0;
        return;
      }
      const tt = ne.current.querySelector(`[data-option-index="${q}"]`);
      if (tt && (tt.classList.add(`${n}-focused`), de === "keyboard" && tt.classList.add(`${n}-focusVisible`), Ve.scrollHeight > Ve.clientHeight && de !== "mouse" && de !== "touch")) {
        const gt = tt, qt = Ve.clientHeight + Ve.scrollTop, Rl = gt.offsetTop + gt.offsetHeight;
        Rl > qt ? Ve.scrollTop = Rl - Ve.clientHeight : gt.offsetTop - gt.offsetHeight * (R ? 1.3 : 0) < Ve.scrollTop && (Ve.scrollTop = gt.offsetTop - gt.offsetHeight * (R ? 1.3 : 0));
      }
    }), ft = Be(({ event: Q, diff: q, direction: de = "next", reason: Te }) => {
      if (!ve) return;
      const tt = lt((() => {
        const gt = pe.length - 1;
        if (q === "reset") return he;
        if (q === "start") return 0;
        if (q === "end") return gt;
        const qt = Z.current + q;
        return qt < 0 ? qt === -1 && y ? -1 : x && Z.current !== -1 || Math.abs(q) > 1 ? 0 : gt : qt > gt ? qt === gt + 1 && y ? -1 : x || Math.abs(q) > 1 ? gt : 0 : qt;
      })(), de);
      if (xt({
        index: tt,
        reason: Te,
        event: Q
      }), o && q !== "reset") if (tt === -1) J.current.value = xe;
      else {
        const gt = U(pe[tt]);
        J.current.value = gt, gt.toLowerCase().indexOf(xe.toLowerCase()) === 0 && xe.length > 0 && J.current.setSelectionRange(xe.length, gt.length);
      }
    }), Pn = () => {
      const Q = (q, de) => {
        const Te = q ? U(q) : "", Ve = de ? U(de) : "";
        return Te === Ve;
      };
      if (Z.current !== -1 && be.filteredOptions && be.filteredOptions.length !== pe.length && be.inputValue === xe && (T ? ee.length === be.value.length && be.value.every((q, de) => U(ee[de]) === U(q)) : Q(be.value, ee))) {
        const q = be.filteredOptions[Z.current];
        if (q) return pe.findIndex((de) => U(de) === U(q));
      }
      return -1;
    }, Dt = c.useCallback(() => {
      if (!ve) return;
      const Q = Pn();
      if (Q !== -1) {
        Z.current = Q;
        return;
      }
      const q = T ? ee[0] : ee;
      if (pe.length === 0 || q == null) {
        ft({
          diff: "reset"
        });
        return;
      }
      if (ne.current) {
        if (q != null) {
          const de = pe[Z.current];
          if (T && de && ee.findIndex((Ve) => M(de, Ve)) !== -1) return;
          const Te = pe.findIndex((Ve) => M(Ve, q));
          Te === -1 ? ft({
            diff: "reset"
          }) : xt({
            index: Te
          });
          return;
        }
        if (Z.current >= pe.length - 1) {
          xt({
            index: pe.length - 1
          });
          return;
        }
        xt({
          index: Z.current
        });
      }
    }, [
      pe.length,
      T ? false : ee,
      S,
      ft,
      xt,
      ve,
      xe,
      T
    ]), Mn = Be((Q) => {
      Cd(ne, Q), Q && Dt();
    });
    c.useEffect(() => {
      Dt();
    }, [
      Dt
    ]);
    const It = (Q) => {
      He || (Le(true), _e(true), D && D(Q));
    }, _t = (Q, q) => {
      He && (Le(false), G && G(Q, q));
    }, Et = (Q, q, de, Te) => {
      if (T) {
        if (ee.length === q.length && ee.every((Ve, tt) => Ve === q[tt])) return;
      } else if (ee === q) return;
      O && O(Q, q, de, Te), ye(q);
    }, Rt = c.useRef(false), Ft = (Q, q, de = "selectOption", Te = "options") => {
      let Ve = de, tt = q;
      if (T) {
        tt = Array.isArray(ee) ? ee.slice() : [];
        const gt = tt.findIndex((qt) => M(q, qt));
        gt === -1 ? tt.push(q) : Te !== "freeSolo" && (tt.splice(gt, 1), Ve = "removeOption");
      }
      Ge(Q, tt, Ve), Et(Q, tt, Ve, {
        option: q
      }), !h && (!Q || !Q.ctrlKey && !Q.metaKey) && _t(Q, Ve), (s === true || s === "touch" && Rt.current || s === "mouse" && !Rt.current) && J.current.blur();
    };
    function ro(Q, q) {
      if (Q === -1) return -1;
      let de = Q;
      for (; ; ) {
        if (q === "next" && de === ee.length || q === "previous" && de === -1) return -1;
        const Te = ce.querySelector(`[data-tag-index="${de}"]`);
        if (!Te || !Te.hasAttribute("tabindex") || Te.disabled || Te.getAttribute("aria-disabled") === "true") de += q === "next" ? 1 : -1;
        else return de;
      }
    }
    const lo = (Q, q) => {
      if (!T) return;
      xe === "" && _t(Q, "toggleInput");
      let de = Y;
      Y === -1 ? xe === "" && q === "previous" && (de = ee.length - 1) : (de += q === "next" ? 1 : -1, de < 0 && (de = 0), de === ee.length && (de = -1)), de = ro(de, q), oe(de), $e(de);
    }, Me = (Q) => {
      B.current = true, Fe(""), P && P(Q, "", "clear"), Et(Q, T ? [] : null, "clear");
    }, Kt = (Q) => (q) => {
      if (Q.onKeyDown && Q.onKeyDown(q), !q.defaultMuiPrevented && (Y !== -1 && ![
        "ArrowLeft",
        "ArrowRight"
      ].includes(q.key) && (oe(-1), $e(-1)), q.which !== 229)) switch (q.key) {
        case "Home":
          ve && A && (q.preventDefault(), ft({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: q
          }));
          break;
        case "End":
          ve && A && (q.preventDefault(), ft({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: q
          }));
          break;
        case "PageUp":
          q.preventDefault(), ft({
            diff: -yi,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "PageDown":
          q.preventDefault(), ft({
            diff: yi,
            direction: "next",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "ArrowDown":
          q.preventDefault(), ft({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "ArrowUp":
          q.preventDefault(), ft({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "ArrowLeft":
          lo(q, "previous");
          break;
        case "ArrowRight":
          lo(q, "next");
          break;
        case "Enter":
          if (Z.current !== -1 && ve) {
            const de = pe[Z.current], Te = F ? F(de) : false;
            if (q.preventDefault(), Te) return;
            Ft(q, de, "selectOption"), o && J.current.setSelectionRange(J.current.value.length, J.current.value.length);
          } else w && xe !== "" && me === false && (T && q.preventDefault(), Ft(q, xe, "createOption", "freeSolo"));
          break;
        case "Escape":
          ve ? (q.preventDefault(), q.stopPropagation(), _t(q, "escape")) : i && (xe !== "" || T && ee.length > 0) && (q.preventDefault(), q.stopPropagation(), Me(q));
          break;
        case "Backspace":
          if (T && !j && xe === "" && ee.length > 0) {
            const de = Y === -1 ? ee.length - 1 : Y, Te = ee.slice();
            Te.splice(de, 1), Et(q, Te, "removeOption", {
              option: ee[de]
            });
          }
          break;
        case "Delete":
          if (T && !j && xe === "" && ee.length > 0 && Y !== -1) {
            const de = Y, Te = ee.slice();
            Te.splice(de, 1), Et(q, Te, "removeOption", {
              option: ee[de]
            });
          }
          break;
      }
    }, El = (Q) => {
      Ue(true), z && !B.current && It(Q);
    }, qn = (Q) => {
      if (t(ne)) {
        J.current.focus();
        return;
      }
      Ue(false), te.current = true, B.current = false, l && Z.current !== -1 && ve ? Ft(Q, pe[Z.current], "blur") : l && w && xe !== "" ? Ft(Q, xe, "blur", "freeSolo") : a && Ge(Q, ee, "blur"), _t(Q, "blur");
    }, Vo = (Q) => {
      const q = Q.target.value;
      xe !== q && (Fe(q), _e(false), P && P(Q, q, "input")), q === "" ? !f && !T && Et(Q, null, "clear") : It(Q);
    }, No = (Q) => {
      const q = Number(Q.currentTarget.getAttribute("data-option-index"));
      Z.current !== q && xt({
        event: Q,
        index: q,
        reason: "mouse"
      });
    }, Fl = (Q) => {
      xt({
        event: Q,
        index: Number(Q.currentTarget.getAttribute("data-option-index")),
        reason: "touch"
      }), Rt.current = true;
    }, Tl = (Q) => {
      const q = Number(Q.currentTarget.getAttribute("data-option-index"));
      Ft(Q, pe[q], "selectOption"), Rt.current = false;
    }, Ol = (Q) => (q) => {
      const de = ee.slice();
      de.splice(Q, 1), Et(q, de, "removeOption", {
        option: ee[Q]
      });
    }, Dl = (Q) => {
      He ? _t(Q, "toggleInput") : It(Q);
    }, Bo = (Q) => {
      Q.currentTarget.contains(Q.target) && Q.target.getAttribute("id") !== W && Q.preventDefault();
    }, Mt = (Q) => {
      Q.currentTarget.contains(Q.target) && (J.current.focus(), V && te.current && J.current.selectionEnd - J.current.selectionStart === 0 && J.current.select(), te.current = false);
    }, vt = (Q) => {
      !g && (xe === "" || !He) && Dl(Q);
    };
    let hn = w && xe.length > 0;
    hn = hn || (T ? ee.length > 0 : ee !== null);
    let Or = pe;
    return R && (Or = pe.reduce((Q, q, de) => {
      const Te = R(q);
      return Q.length > 0 && Q[Q.length - 1].group === Te ? Q[Q.length - 1].options.push(q) : Q.push({
        key: de,
        index: de,
        group: Te,
        options: [
          q
        ]
      }), Q;
    }, [])), g && Ne && qn(), {
      getRootProps: (Q = {}) => ({
        ...Q,
        onKeyDown: Kt(Q),
        onMouseDown: Bo,
        onClick: Mt
      }),
      getInputLabelProps: () => ({
        id: `${W}-label`,
        htmlFor: W
      }),
      getInputProps: () => ({
        id: W,
        value: xe,
        onBlur: qn,
        onFocus: El,
        onChange: Vo,
        onMouseDown: vt,
        "aria-activedescendant": ve ? "" : null,
        "aria-autocomplete": o ? "both" : "list",
        "aria-controls": je ? `${W}-listbox` : void 0,
        "aria-expanded": je,
        autoComplete: "off",
        ref: J,
        autoCapitalize: "none",
        spellCheck: "false",
        role: "combobox",
        disabled: g
      }),
      getClearProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: Me
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: Dl
      }),
      getTagProps: ({ index: Q }) => ({
        key: Q,
        "data-tag-index": Q,
        tabIndex: -1,
        ...!j && {
          onDelete: Ol(Q)
        }
      }),
      getListboxProps: () => ({
        role: "listbox",
        id: `${W}-listbox`,
        "aria-labelledby": `${W}-label`,
        ref: Mn,
        onMouseDown: (Q) => {
          Q.preventDefault();
        }
      }),
      getOptionProps: ({ index: Q, option: q }) => {
        const de = (T ? ee : [
          ee
        ]).some((Ve) => Ve != null && M(q, Ve)), Te = F ? F(q) : false;
        return {
          key: (H == null ? void 0 : H(q)) ?? U(q),
          tabIndex: -1,
          role: "option",
          id: `${W}-option-${Q}`,
          onMouseMove: No,
          onClick: Tl,
          onTouchStart: Fl,
          "data-option-index": Q,
          "aria-disabled": Te,
          "aria-selected": de
        };
      },
      id: W,
      inputValue: xe,
      value: ee,
      dirty: hn,
      expanded: ve && ce,
      popupOpen: ve,
      focused: Ne || Y !== -1,
      anchorEl: ce,
      setAnchorEl: Ce,
      focusedTag: Y,
      groupedOptions: Or
    };
  }
  var jt = "top", ln = "bottom", sn = "right", At = "left", Fs = "auto", xr = [
    jt,
    ln,
    sn,
    At
  ], Io = "start", cr = "end", Ap = "clippingParents", dc = "viewport", Uo = "popper", zp = "reference", Ii = xr.reduce(function(e, t) {
    return e.concat([
      t + "-" + Io,
      t + "-" + cr
    ]);
  }, []), pc = [].concat(xr, [
    Fs
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Io,
      t + "-" + cr
    ]);
  }, []), Gp = "beforeRead", _p = "read", Vp = "afterRead", Np = "beforeMain", Bp = "main", Wp = "afterMain", Up = "beforeWrite", Kp = "write", qp = "afterWrite", Yp = [
    Gp,
    _p,
    Vp,
    Np,
    Bp,
    Wp,
    Up,
    Kp,
    qp
  ];
  function yn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Ut(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Jn(e) {
    var t = Ut(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function nn(e) {
    var t = Ut(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Ts(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ut(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Xp(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
      !nn(l) || !yn(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
        var a = r[s];
        a === false ? l.removeAttribute(s) : l.setAttribute(s, a === true ? "" : a);
      }));
    });
  }
  function Qp(e) {
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
        var r = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(i, d) {
          return i[d] = "", i;
        }, {});
        !nn(r) || !yn(r) || (Object.assign(r.style, a), Object.keys(l).forEach(function(i) {
          r.removeAttribute(i);
        }));
      });
    };
  }
  const Jp = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Xp,
    effect: Qp,
    requires: [
      "computeStyles"
    ]
  };
  function wn(e) {
    return e.split("-")[0];
  }
  var Xn = Math.max, el = Math.min, Po = Math.round;
  function ts() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function fc() {
    return !/^((?!chrome|android).)*safari/i.test(ts());
  }
  function Mo(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, l = 1;
    t && nn(e) && (r = e.offsetWidth > 0 && Po(o.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && Po(o.height) / e.offsetHeight || 1);
    var s = Jn(e) ? Ut(e) : window, a = s.visualViewport, i = !fc() && n, d = (o.left + (i && a ? a.offsetLeft : 0)) / r, u = (o.top + (i && a ? a.offsetTop : 0)) / l, f = o.width / r, h = o.height / l;
    return {
      width: f,
      height: h,
      top: u,
      right: d + f,
      bottom: u + h,
      left: d,
      x: d,
      y: u
    };
  }
  function Os(e) {
    var t = Mo(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function gc(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Ts(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function Tn(e) {
    return Ut(e).getComputedStyle(e);
  }
  function Zp(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(yn(e)) >= 0;
  }
  function Wn(e) {
    return ((Jn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function ml(e) {
    return yn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ts(e) ? e.host : null) || Wn(e);
  }
  function Pi(e) {
    return !nn(e) || Tn(e).position === "fixed" ? null : e.offsetParent;
  }
  function ef(e) {
    var t = /firefox/i.test(ts()), n = /Trident/i.test(ts());
    if (n && nn(e)) {
      var o = Tn(e);
      if (o.position === "fixed") return null;
    }
    var r = ml(e);
    for (Ts(r) && (r = r.host); nn(r) && [
      "html",
      "body"
    ].indexOf(yn(r)) < 0; ) {
      var l = Tn(r);
      if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function vr(e) {
    for (var t = Ut(e), n = Pi(e); n && Zp(n) && Tn(n).position === "static"; ) n = Pi(n);
    return n && (yn(n) === "html" || yn(n) === "body" && Tn(n).position === "static") ? t : n || ef(e) || t;
  }
  function Ds(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function nr(e, t, n) {
    return Xn(e, el(t, n));
  }
  function tf(e, t, n) {
    var o = nr(e, t, n);
    return o > n ? n : o;
  }
  function hc() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mc(e) {
    return Object.assign({}, hc(), e);
  }
  function bc(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var nf = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, mc(typeof t != "number" ? t : bc(t, xr));
  };
  function of(e) {
    var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = wn(n.placement), i = Ds(a), d = [
      At,
      sn
    ].indexOf(a) >= 0, u = d ? "height" : "width";
    if (!(!l || !s)) {
      var f = nf(r.padding, n), h = Os(l), g = i === "y" ? jt : At, m = i === "y" ? ln : sn, x = n.rects.reference[u] + n.rects.reference[i] - s[i] - n.rects.popper[u], I = s[i] - n.rects.reference[i], S = vr(l), w = S ? i === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, F = x / 2 - I / 2, H = f[g], v = w - h[u] - f[m], R = w / 2 - h[u] / 2 + F, A = nr(H, R, v), $ = i;
      n.modifiersData[o] = (t = {}, t[$] = A, t.centerOffset = A - R, t);
    }
  }
  function rf(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || gc(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const lf = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: of,
    effect: rf,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function ko(e) {
    return e.split("-")[1];
  }
  var sf = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function af(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Po(n * r) / r || 0,
      y: Po(o * r) / r || 0
    };
  }
  function Mi(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, m = s.y, x = m === void 0 ? 0 : m, I = typeof u == "function" ? u({
      x: g,
      y: x
    }) : {
      x: g,
      y: x
    };
    g = I.x, x = I.y;
    var S = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), F = At, H = jt, v = window;
    if (d) {
      var R = vr(n), A = "clientHeight", $ = "clientWidth";
      if (R === Ut(n) && (R = Wn(n), Tn(R).position !== "static" && a === "absolute" && (A = "scrollHeight", $ = "scrollWidth")), R = R, r === jt || (r === At || r === sn) && l === cr) {
        H = ln;
        var y = f && R === v && v.visualViewport ? v.visualViewport.height : R[A];
        x -= y - o.height, x *= i ? 1 : -1;
      }
      if (r === At || (r === jt || r === ln) && l === cr) {
        F = sn;
        var C = f && R === v && v.visualViewport ? v.visualViewport.width : R[$];
        g -= C - o.width, g *= i ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: a
    }, d && sf), T = u === true ? af({
      x: g,
      y: x
    }, Ut(n)) : {
      x: g,
      y: x
    };
    if (g = T.x, x = T.y, i) {
      var O;
      return Object.assign({}, M, (O = {}, O[H] = w ? "0" : "", O[F] = S ? "0" : "", O.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + x + "px)" : "translate3d(" + g + "px, " + x + "px, 0)", O));
    }
    return Object.assign({}, M, (t = {}, t[H] = w ? x + "px" : "", t[F] = S ? g + "px" : "", t.transform = "", t));
  }
  function cf(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, l = n.adaptive, s = l === void 0 ? true : l, a = n.roundOffsets, i = a === void 0 ? true : a, d = {
      placement: wn(t.placement),
      variation: ko(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Mi(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: i
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Mi(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: i
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const uf = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: cf,
    data: {}
  };
  var jr = {
    passive: true
  };
  function df(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? true : r, s = o.resize, a = s === void 0 ? true : s, i = Ut(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return l && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, jr);
    }), a && i.addEventListener("resize", n.update, jr), function() {
      l && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, jr);
      }), a && i.removeEventListener("resize", n.update, jr);
    };
  }
  const pf = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: df,
    data: {}
  };
  var ff = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Ur(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return ff[t];
    });
  }
  var gf = {
    start: "end",
    end: "start"
  };
  function ki(e) {
    return e.replace(/start|end/g, function(t) {
      return gf[t];
    });
  }
  function Rs(e) {
    var t = Ut(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function $s(e) {
    return Mo(Wn(e)).left + Rs(e).scrollLeft;
  }
  function hf(e, t) {
    var n = Ut(e), o = Wn(e), r = n.visualViewport, l = o.clientWidth, s = o.clientHeight, a = 0, i = 0;
    if (r) {
      l = r.width, s = r.height;
      var d = fc();
      (d || !d && t === "fixed") && (a = r.offsetLeft, i = r.offsetTop);
    }
    return {
      width: l,
      height: s,
      x: a + $s(e),
      y: i
    };
  }
  function mf(e) {
    var t, n = Wn(e), o = Rs(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Xn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Xn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + $s(e), i = -o.scrollTop;
    return Tn(r || n).direction === "rtl" && (a += Xn(n.clientWidth, r ? r.clientWidth : 0) - l), {
      width: l,
      height: s,
      x: a,
      y: i
    };
  }
  function Hs(e) {
    var t = Tn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function Cc(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(yn(e)) >= 0 ? e.ownerDocument.body : nn(e) && Hs(e) ? e : Cc(ml(e));
  }
  function or(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Cc(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Ut(o), s = r ? [
      l
    ].concat(l.visualViewport || [], Hs(o) ? o : []) : o, a = t.concat(s);
    return r ? a : a.concat(or(ml(s)));
  }
  function ns(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function bf(e, t) {
    var n = Mo(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function Ei(e, t, n) {
    return t === dc ? ns(hf(e, n)) : Jn(t) ? bf(t, n) : ns(mf(Wn(e)));
  }
  function Cf(e) {
    var t = or(ml(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(Tn(e).position) >= 0, o = n && nn(e) ? vr(e) : e;
    return Jn(o) ? t.filter(function(r) {
      return Jn(r) && gc(r, o) && yn(r) !== "body";
    }) : [];
  }
  function wf(e, t, n, o) {
    var r = t === "clippingParents" ? Cf(e) : [].concat(t), l = [].concat(r, [
      n
    ]), s = l[0], a = l.reduce(function(i, d) {
      var u = Ei(e, d, o);
      return i.top = Xn(u.top, i.top), i.right = el(u.right, i.right), i.bottom = el(u.bottom, i.bottom), i.left = Xn(u.left, i.left), i;
    }, Ei(e, s, o));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function wc(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? wn(o) : null, l = o ? ko(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
    switch (r) {
      case jt:
        i = {
          x: s,
          y: t.y - n.height
        };
        break;
      case ln:
        i = {
          x: s,
          y: t.y + t.height
        };
        break;
      case sn:
        i = {
          x: t.x + t.width,
          y: a
        };
        break;
      case At:
        i = {
          x: t.x - n.width,
          y: a
        };
        break;
      default:
        i = {
          x: t.x,
          y: t.y
        };
    }
    var d = r ? Ds(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (l) {
        case Io:
          i[d] = i[d] - (t[u] / 2 - n[u] / 2);
          break;
        case cr:
          i[d] = i[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return i;
  }
  function ur(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.strategy, s = l === void 0 ? e.strategy : l, a = n.boundary, i = a === void 0 ? Ap : a, d = n.rootBoundary, u = d === void 0 ? dc : d, f = n.elementContext, h = f === void 0 ? Uo : f, g = n.altBoundary, m = g === void 0 ? false : g, x = n.padding, I = x === void 0 ? 0 : x, S = mc(typeof I != "number" ? I : bc(I, xr)), w = h === Uo ? zp : Uo, F = e.rects.popper, H = e.elements[m ? w : h], v = wf(Jn(H) ? H : H.contextElement || Wn(e.elements.popper), i, u, s), R = Mo(e.elements.reference), A = wc({
      reference: R,
      element: F,
      placement: r
    }), $ = ns(Object.assign({}, F, A)), y = h === Uo ? $ : R, C = {
      top: v.top - y.top + S.top,
      bottom: y.bottom - v.bottom + S.bottom,
      left: v.left - y.left + S.left,
      right: y.right - v.right + S.right
    }, M = e.modifiersData.offset;
    if (h === Uo && M) {
      var T = M[r];
      Object.keys(C).forEach(function(O) {
        var G = [
          sn,
          ln
        ].indexOf(O) >= 0 ? 1 : -1, E = [
          jt,
          ln
        ].indexOf(O) >= 0 ? "y" : "x";
        C[O] += T[E] * G;
      });
    }
    return C;
  }
  function xf(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, d = i === void 0 ? pc : i, u = ko(o), f = u ? a ? Ii : Ii.filter(function(m) {
      return ko(m) === u;
    }) : xr, h = f.filter(function(m) {
      return d.indexOf(m) >= 0;
    });
    h.length === 0 && (h = f);
    var g = h.reduce(function(m, x) {
      return m[x] = ur(e, {
        placement: x,
        boundary: r,
        rootBoundary: l,
        padding: s
      })[wn(x)], m;
    }, {});
    return Object.keys(g).sort(function(m, x) {
      return g[m] - g[x];
    });
  }
  function vf(e) {
    if (wn(e) === Fs) return [];
    var t = Ur(e);
    return [
      ki(e),
      t,
      ki(t)
    ];
  }
  function yf(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? true : s, i = n.fallbackPlacements, d = n.padding, u = n.boundary, f = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, m = g === void 0 ? true : g, x = n.allowedAutoPlacements, I = t.options.placement, S = wn(I), w = S === I, F = i || (w || !m ? [
        Ur(I)
      ] : vf(I)), H = [
        I
      ].concat(F).reduce(function(W, U) {
        return W.concat(wn(U) === Fs ? xf(t, {
          placement: U,
          boundary: u,
          rootBoundary: f,
          padding: d,
          flipVariations: m,
          allowedAutoPlacements: x
        }) : U);
      }, []), v = t.rects.reference, R = t.rects.popper, A = /* @__PURE__ */ new Map(), $ = true, y = H[0], C = 0; C < H.length; C++) {
        var M = H[C], T = wn(M), O = ko(M) === Io, G = [
          jt,
          ln
        ].indexOf(T) >= 0, E = G ? "width" : "height", P = ur(t, {
          placement: M,
          boundary: u,
          rootBoundary: f,
          altBoundary: h,
          padding: d
        }), D = G ? O ? sn : At : O ? ln : jt;
        v[E] > R[E] && (D = Ur(D));
        var L = Ur(D), z = [];
        if (l && z.push(P[T] <= 0), a && z.push(P[D] <= 0, P[L] <= 0), z.every(function(W) {
          return W;
        })) {
          y = M, $ = false;
          break;
        }
        A.set(M, z);
      }
      if ($) for (var _ = m ? 3 : 1, j = function(U) {
        var B = H.find(function(te) {
          var J = A.get(te);
          if (J) return J.slice(0, U).every(function(ne) {
            return ne;
          });
        });
        if (B) return y = B, "break";
      }, V = _; V > 0; V--) {
        var K = j(V);
        if (K === "break") break;
      }
      t.placement !== y && (t.modifiersData[o]._skip = true, t.placement = y, t.reset = true);
    }
  }
  const Sf = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: yf,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Fi(e, t, n) {
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
  function Ti(e) {
    return [
      jt,
      sn,
      ln,
      At
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function If(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = ur(t, {
      elementContext: "reference"
    }), a = ur(t, {
      altBoundary: true
    }), i = Fi(s, o), d = Fi(a, r, l), u = Ti(i), f = Ti(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: i,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": f
    });
  }
  const Pf = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: If
  };
  function Mf(e, t, n) {
    var o = wn(e), r = [
      At,
      jt
    ].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = l[0], a = l[1];
    return s = s || 0, a = (a || 0) * r, [
      At,
      sn
    ].indexOf(o) >= 0 ? {
      x: a,
      y: s
    } : {
      x: s,
      y: a
    };
  }
  function kf(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [
      0,
      0
    ] : r, s = pc.reduce(function(u, f) {
      return u[f] = Mf(f, t.rects, l), u;
    }, {}), a = s[t.placement], i = a.x, d = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const Ef = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: kf
  };
  function Ff(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = wc({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const Tf = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: Ff,
    data: {}
  };
  function Of(e) {
    return e === "x" ? "y" : "x";
  }
  function Df(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? false : s, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, f = n.padding, h = n.tether, g = h === void 0 ? true : h, m = n.tetherOffset, x = m === void 0 ? 0 : m, I = ur(t, {
      boundary: i,
      rootBoundary: d,
      padding: f,
      altBoundary: u
    }), S = wn(t.placement), w = ko(t.placement), F = !w, H = Ds(S), v = Of(H), R = t.modifiersData.popperOffsets, A = t.rects.reference, $ = t.rects.popper, y = typeof x == "function" ? x(Object.assign({}, t.rects, {
      placement: t.placement
    })) : x, C = typeof y == "number" ? {
      mainAxis: y,
      altAxis: y
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, y), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, T = {
      x: 0,
      y: 0
    };
    if (R) {
      if (l) {
        var O, G = H === "y" ? jt : At, E = H === "y" ? ln : sn, P = H === "y" ? "height" : "width", D = R[H], L = D + I[G], z = D - I[E], _ = g ? -$[P] / 2 : 0, j = w === Io ? A[P] : $[P], V = w === Io ? -$[P] : -A[P], K = t.elements.arrow, W = g && K ? Os(K) : {
          width: 0,
          height: 0
        }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hc(), B = U[G], te = U[E], J = nr(0, A[P], W[P]), ne = F ? A[P] / 2 - _ - J - B - C.mainAxis : j - J - B - C.mainAxis, ce = F ? -A[P] / 2 + _ + J + te + C.mainAxis : V + J + te + C.mainAxis, Ce = t.elements.arrow && vr(t.elements.arrow), Y = Ce ? H === "y" ? Ce.clientTop || 0 : Ce.clientLeft || 0 : 0, oe = (O = M == null ? void 0 : M[H]) != null ? O : 0, he = D + ne - oe - Y, Z = D + ce - oe, Ie = nr(g ? el(L, he) : L, D, g ? Xn(z, Z) : z);
        R[H] = Ie, T[H] = Ie - D;
      }
      if (a) {
        var ee, ye = H === "x" ? jt : At, xe = H === "x" ? ln : sn, Fe = R[v], Ne = v === "y" ? "height" : "width", Ue = Fe + I[ye], Ge = Fe - I[xe], He = [
          jt,
          At
        ].indexOf(S) !== -1, Le = (ee = M == null ? void 0 : M[v]) != null ? ee : 0, Ke = He ? Ue : Fe - A[Ne] - $[Ne] - Le + C.altAxis, _e = He ? Fe + A[Ne] + $[Ne] - Le - C.altAxis : Ge, me = g && He ? tf(Ke, Fe, _e) : nr(g ? Ke : Ue, Fe, g ? _e : Ge);
        R[v] = me, T[v] = me - Fe;
      }
      t.modifiersData[o] = T;
    }
  }
  const Rf = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: Df,
    requiresIfExists: [
      "offset"
    ]
  };
  function $f(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Hf(e) {
    return e === Ut(e) || !nn(e) ? Rs(e) : $f(e);
  }
  function Lf(e) {
    var t = e.getBoundingClientRect(), n = Po(t.width) / e.offsetWidth || 1, o = Po(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function jf(e, t, n) {
    n === void 0 && (n = false);
    var o = nn(t), r = nn(t) && Lf(t), l = Wn(t), s = Mo(e, r, n), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, i = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((yn(t) !== "body" || Hs(l)) && (a = Hf(t)), nn(t) ? (i = Mo(t, true), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = $s(l))), {
      x: s.left + a.scrollLeft - i.x,
      y: s.top + a.scrollTop - i.y,
      width: s.width,
      height: s.height
    };
  }
  function Af(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(l) {
      t.set(l.name, l);
    });
    function r(l) {
      n.add(l.name);
      var s = [].concat(l.requires || [], l.requiresIfExists || []);
      s.forEach(function(a) {
        if (!n.has(a)) {
          var i = t.get(a);
          i && r(i);
        }
      }), o.push(l);
    }
    return e.forEach(function(l) {
      n.has(l.name) || r(l);
    }), o;
  }
  function zf(e) {
    var t = Af(e);
    return Yp.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Gf(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function _f(e) {
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
  var Oi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Di() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Vf(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Oi : r;
    return function(a, i, d) {
      d === void 0 && (d = l);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Oi, l),
        modifiersData: {},
        elements: {
          reference: a,
          popper: i
        },
        attributes: {},
        styles: {}
      }, f = [], h = false, g = {
        state: u,
        setOptions: function(S) {
          var w = typeof S == "function" ? S(u.options) : S;
          x(), u.options = Object.assign({}, l, u.options, w), u.scrollParents = {
            reference: Jn(a) ? or(a) : a.contextElement ? or(a.contextElement) : [],
            popper: or(i)
          };
          var F = zf(_f([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = F.filter(function(H) {
            return H.enabled;
          }), m(), g.update();
        },
        forceUpdate: function() {
          if (!h) {
            var S = u.elements, w = S.reference, F = S.popper;
            if (Di(w, F)) {
              u.rects = {
                reference: jf(w, vr(F), u.options.strategy === "fixed"),
                popper: Os(F)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(C) {
                return u.modifiersData[C.name] = Object.assign({}, C.data);
              });
              for (var H = 0; H < u.orderedModifiers.length; H++) {
                if (u.reset === true) {
                  u.reset = false, H = -1;
                  continue;
                }
                var v = u.orderedModifiers[H], R = v.fn, A = v.options, $ = A === void 0 ? {} : A, y = v.name;
                typeof R == "function" && (u = R({
                  state: u,
                  options: $,
                  name: y,
                  instance: g
                }) || u);
              }
            }
          }
        },
        update: Gf(function() {
          return new Promise(function(I) {
            g.forceUpdate(), I(u);
          });
        }),
        destroy: function() {
          x(), h = true;
        }
      };
      if (!Di(a, i)) return g;
      g.setOptions(d).then(function(I) {
        !h && d.onFirstUpdate && d.onFirstUpdate(I);
      });
      function m() {
        u.orderedModifiers.forEach(function(I) {
          var S = I.name, w = I.options, F = w === void 0 ? {} : w, H = I.effect;
          if (typeof H == "function") {
            var v = H({
              state: u,
              name: S,
              instance: g,
              options: F
            }), R = function() {
            };
            f.push(v || R);
          }
        });
      }
      function x() {
        f.forEach(function(I) {
          return I();
        }), f = [];
      }
      return g;
    };
  }
  var Nf = [
    pf,
    Tf,
    uf,
    Jp,
    Ef,
    Sf,
    Rf,
    lf,
    Pf
  ], Bf = Vf({
    defaultModifiers: Nf
  });
  function Wf(e) {
    return ut("MuiPopper", e);
  }
  at("MuiPopper", [
    "root"
  ]);
  function Uf(e, t) {
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
  function os(e) {
    return typeof e == "function" ? e() : e;
  }
  function Kf(e) {
    return e.nodeType !== void 0;
  }
  const qf = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, Wf, t);
  }, Yf = {}, Xf = c.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: l, disablePortal: s, modifiers: a, open: i, placement: d, popperOptions: u, popperRef: f, slotProps: h = {}, slots: g = {}, TransitionProps: m, ownerState: x, ...I } = t, S = c.useRef(null), w = zt(S, n), F = c.useRef(null), H = zt(F, f), v = c.useRef(H);
    St(() => {
      v.current = H;
    }, [
      H
    ]), c.useImperativeHandle(f, () => F.current, []);
    const R = Uf(d, l), [A, $] = c.useState(R), [y, C] = c.useState(os(o));
    c.useEffect(() => {
      F.current && F.current.forceUpdate();
    }), c.useEffect(() => {
      o && C(os(o));
    }, [
      o
    ]), St(() => {
      if (!y || !i) return;
      const E = (L) => {
        $(L.placement);
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
          fn: ({ state: L }) => {
            E(L);
          }
        }
      ];
      a != null && (P = P.concat(a)), u && u.modifiers != null && (P = P.concat(u.modifiers));
      const D = Bf(y, S.current, {
        placement: R,
        ...u,
        modifiers: P
      });
      return v.current(D), () => {
        D.destroy(), v.current(null);
      };
    }, [
      y,
      s,
      a,
      i,
      u,
      R
    ]);
    const M = {
      placement: A
    };
    m !== null && (M.TransitionProps = m);
    const T = qf(t), O = g.root ?? "div", G = xd({
      elementType: O,
      externalSlotProps: h.root,
      externalForwardedProps: I,
      additionalProps: {
        role: "tooltip",
        ref: w
      },
      ownerState: t,
      className: T.root
    });
    return p.jsx(O, {
      ...G,
      children: typeof r == "function" ? r(M) : r
    });
  }), Qf = c.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: l, direction: s = "ltr", disablePortal: a = false, keepMounted: i = false, modifiers: d, open: u, placement: f = "bottom", popperOptions: h = Yf, popperRef: g, style: m, transition: x = false, slotProps: I = {}, slots: S = {}, ...w } = t, [F, H] = c.useState(true), v = () => {
      H(false);
    }, R = () => {
      H(true);
    };
    if (!i && !u && (!x || F)) return null;
    let A;
    if (l) A = l;
    else if (o) {
      const C = os(o);
      A = C && Kf(C) ? tn(C).body : tn(null).body;
    }
    const $ = !u && i && (!x || F) ? "none" : void 0, y = x ? {
      in: u,
      onEnter: v,
      onExited: R
    } : void 0;
    return p.jsx(wd, {
      disablePortal: a,
      container: A,
      children: p.jsx(Xf, {
        anchorEl: o,
        direction: s,
        disablePortal: a,
        modifiers: d,
        ref: n,
        open: x ? !F : u,
        placement: f,
        popperOptions: h,
        popperRef: g,
        slotProps: I,
        slots: S,
        ...w,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: $,
          ...m
        },
        TransitionProps: y,
        children: r
      })
    });
  }), Jf = le(Qf, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), no = c.forwardRef(function(t, n) {
    const o = Gt(), r = dt({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: l, component: s, components: a, componentsProps: i, container: d, disablePortal: u, keepMounted: f, modifiers: h, open: g, placement: m, popperOptions: x, popperRef: I, transition: S, slots: w, slotProps: F, ...H } = r, v = (w == null ? void 0 : w.root) ?? (a == null ? void 0 : a.Root), R = {
      anchorEl: l,
      container: d,
      disablePortal: u,
      keepMounted: f,
      modifiers: h,
      open: g,
      placement: m,
      popperOptions: x,
      popperRef: I,
      transition: S,
      ...H
    };
    return p.jsx(Jf, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: v
      },
      slotProps: F ?? i,
      ...R,
      ref: n
    });
  });
  function Zf(e) {
    return ut("MuiListSubheader", e);
  }
  at("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const eg = (e) => {
    const { classes: t, color: n, disableGutters: o, inset: r, disableSticky: l } = e, s = {
      root: [
        "root",
        n !== "default" && `color${se(n)}`,
        !o && "gutters",
        r && "inset",
        !l && "sticky"
      ]
    };
    return ge(s, Zf, t);
  }, tg = le("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${se(n.color)}`],
        !n.disableGutters && t.gutters,
        n.inset && t.inset,
        !n.disableSticky && t.sticky
      ];
    }
  })(We(({ theme: e }) => ({
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
  }))), rs = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiListSubheader"
    }), { className: r, color: l = "default", component: s = "li", disableGutters: a = false, disableSticky: i = false, inset: d = false, ...u } = o, f = {
      ...o,
      color: l,
      component: s,
      disableGutters: a,
      disableSticky: i,
      inset: d
    }, h = eg(f);
    return p.jsx(tg, {
      as: s,
      className: ue(h.root, r),
      ref: n,
      ownerState: f,
      ...u
    });
  });
  rs && (rs.muiSkipListHighlight = true);
  const ng = Se(p.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function og(e) {
    return ut("MuiChip", e);
  }
  const Ae = at("MuiChip", [
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
  ]), rg = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: l, onDelete: s, clickable: a, variant: i } = e, d = {
      root: [
        "root",
        i,
        n && "disabled",
        `size${se(o)}`,
        `color${se(r)}`,
        a && "clickable",
        a && `clickableColor${se(r)}`,
        s && "deletable",
        s && `deletableColor${se(r)}`,
        `${i}${se(r)}`
      ],
      label: [
        "label",
        `label${se(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${se(o)}`,
        `avatarColor${se(r)}`
      ],
      icon: [
        "icon",
        `icon${se(o)}`,
        `iconColor${se(l)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${se(o)}`,
        `deleteIconColor${se(r)}`,
        `deleteIcon${se(i)}Color${se(r)}`
      ]
    };
    return ge(d, og, t);
  }, lg = le("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: l, onDelete: s, size: a, variant: i } = n;
      return [
        {
          [`& .${Ae.avatar}`]: t.avatar
        },
        {
          [`& .${Ae.avatar}`]: t[`avatar${se(a)}`]
        },
        {
          [`& .${Ae.avatar}`]: t[`avatarColor${se(o)}`]
        },
        {
          [`& .${Ae.icon}`]: t.icon
        },
        {
          [`& .${Ae.icon}`]: t[`icon${se(a)}`]
        },
        {
          [`& .${Ae.icon}`]: t[`iconColor${se(r)}`]
        },
        {
          [`& .${Ae.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${Ae.deleteIcon}`]: t[`deleteIcon${se(a)}`]
        },
        {
          [`& .${Ae.deleteIcon}`]: t[`deleteIconColor${se(o)}`]
        },
        {
          [`& .${Ae.deleteIcon}`]: t[`deleteIcon${se(i)}Color${se(o)}`]
        },
        t.root,
        t[`size${se(a)}`],
        t[`color${se(o)}`],
        l && t.clickable,
        l && o !== "default" && t[`clickableColor${se(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${se(o)}`],
        t[i],
        t[`${i}${se(o)}`]
      ];
    }
  })(We(({ theme: e }) => {
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
      [`&.${Ae.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${Ae.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${Ae.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${Ae.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${Ae.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${Ae.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${Ae.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : st(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : st(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${Ae.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${Ae.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(Bt([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${Ae.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : st(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${Ae.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${Ae.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${Ae.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Bt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${Ae.focusVisible}`]: {
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${Ae.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Bt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${Ae.focusVisible}`]: {
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
            [`&.${Ae.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${Ae.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${Ae.avatar}`]: {
              marginLeft: 4
            },
            [`& .${Ae.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${Ae.icon}`]: {
              marginLeft: 4
            },
            [`& .${Ae.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${Ae.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${Ae.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(Bt()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : st(e.palette[n].main, 0.7)}`,
            [`&.${Ae.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${Ae.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : st(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${Ae.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : st(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), sg = le("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${se(o)}`]
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
  function Ri(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const vo = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: l, clickable: s, color: a = "default", component: i, deleteIcon: d, disabled: u = false, icon: f, label: h, onClick: g, onDelete: m, onKeyDown: x, onKeyUp: I, size: S = "medium", variant: w = "filled", tabIndex: F, skipFocusWhenDisabled: H = false, ...v } = o, R = c.useRef(null), A = zt(R, n), $ = (z) => {
      z.stopPropagation(), m && m(z);
    }, y = (z) => {
      z.currentTarget === z.target && Ri(z) && z.preventDefault(), x && x(z);
    }, C = (z) => {
      z.currentTarget === z.target && m && Ri(z) && m(z), I && I(z);
    }, M = s !== false && g ? true : s, T = M || m ? Ql : i || "div", O = {
      ...o,
      component: T,
      disabled: u,
      size: S,
      color: a,
      iconColor: c.isValidElement(f) && f.props.color || a,
      onDelete: !!m,
      clickable: M,
      variant: w
    }, G = rg(O), E = T === Ql ? {
      component: i || "div",
      focusVisibleClassName: G.focusVisible,
      ...m && {
        disableRipple: true
      }
    } : {};
    let P = null;
    m && (P = d && c.isValidElement(d) ? c.cloneElement(d, {
      className: ue(d.props.className, G.deleteIcon),
      onClick: $
    }) : p.jsx(ng, {
      className: ue(G.deleteIcon),
      onClick: $
    }));
    let D = null;
    r && c.isValidElement(r) && (D = c.cloneElement(r, {
      className: ue(G.avatar, r.props.className)
    }));
    let L = null;
    return f && c.isValidElement(f) && (L = c.cloneElement(f, {
      className: ue(G.icon, f.props.className)
    })), p.jsxs(lg, {
      as: T,
      className: ue(G.root, l),
      disabled: M && u ? true : void 0,
      onClick: g,
      onKeyDown: y,
      onKeyUp: C,
      ref: A,
      tabIndex: H && u ? -1 : F,
      ownerState: O,
      ...E,
      ...v,
      children: [
        D || L,
        p.jsx(sg, {
          className: ue(G.label),
          ownerState: O,
          children: h
        }),
        P
      ]
    });
  });
  function ig(e) {
    return ut("MuiAutocomplete", e);
  }
  const Re = at("MuiAutocomplete", [
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
  var $i, Hi;
  const ag = (e) => {
    const { classes: t, disablePortal: n, expanded: o, focused: r, fullWidth: l, hasClearIcon: s, hasPopupIcon: a, inputFocused: i, popupOpen: d, size: u } = e, f = {
      root: [
        "root",
        o && "expanded",
        r && "focused",
        l && "fullWidth",
        s && "hasClearIcon",
        a && "hasPopupIcon"
      ],
      inputRoot: [
        "inputRoot"
      ],
      input: [
        "input",
        i && "inputFocused"
      ],
      tag: [
        "tag",
        `tagSize${se(u)}`
      ],
      endAdornment: [
        "endAdornment"
      ],
      clearIndicator: [
        "clearIndicator"
      ],
      popupIndicator: [
        "popupIndicator",
        d && "popupIndicatorOpen"
      ],
      popper: [
        "popper",
        n && "popperDisablePortal"
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
    return ge(f, ig, t);
  }, cg = le("div", {
    name: "MuiAutocomplete",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { fullWidth: o, hasClearIcon: r, hasPopupIcon: l, inputFocused: s, size: a } = n;
      return [
        {
          [`& .${Re.tag}`]: t.tag
        },
        {
          [`& .${Re.tag}`]: t[`tagSize${se(a)}`]
        },
        {
          [`& .${Re.inputRoot}`]: t.inputRoot
        },
        {
          [`& .${Re.input}`]: t.input
        },
        {
          [`& .${Re.input}`]: s && t.inputFocused
        },
        t.root,
        o && t.fullWidth,
        l && t.hasPopupIcon,
        r && t.hasClearIcon
      ];
    }
  })({
    [`&.${Re.focused} .${Re.clearIndicator}`]: {
      visibility: "visible"
    },
    "@media (pointer: fine)": {
      [`&:hover .${Re.clearIndicator}`]: {
        visibility: "visible"
      }
    },
    [`& .${Re.tag}`]: {
      margin: 3,
      maxWidth: "calc(100% - 6px)"
    },
    [`& .${Re.inputRoot}`]: {
      [`.${Re.hasPopupIcon}&, .${Re.hasClearIcon}&`]: {
        paddingRight: 30
      },
      [`.${Re.hasPopupIcon}.${Re.hasClearIcon}&`]: {
        paddingRight: 56
      },
      [`& .${Re.input}`]: {
        width: 0,
        minWidth: 30
      }
    },
    [`& .${$l.root}`]: {
      paddingBottom: 1,
      "& .MuiInput-input": {
        padding: "4px 4px 4px 0px"
      }
    },
    [`& .${$l.root}.${Qt.sizeSmall}`]: {
      [`& .${$l.input}`]: {
        padding: "2px 4px 3px 0"
      }
    },
    [`& .${gi.root}`]: {
      padding: 9,
      [`.${Re.hasPopupIcon}&, .${Re.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${Re.hasPopupIcon}.${Re.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${Re.input}`]: {
        padding: "7.5px 4px 7.5px 5px"
      },
      [`& .${Re.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${gi.root}.${Qt.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${Re.input}`]: {
        padding: "2.5px 4px 2.5px 8px"
      }
    },
    [`& .${so.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${Re.hasPopupIcon}&, .${Re.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${Re.hasPopupIcon}.${Re.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${so.input}`]: {
        padding: "7px 4px"
      },
      [`& .${Re.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${so.root}.${Qt.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${so.input}`]: {
        padding: "2.5px 4px"
      }
    },
    [`& .${Qt.hiddenLabel}`]: {
      paddingTop: 8
    },
    [`& .${so.root}.${Qt.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${Re.input}`]: {
        paddingTop: 16,
        paddingBottom: 17
      }
    },
    [`& .${so.root}.${Qt.hiddenLabel}.${Qt.sizeSmall}`]: {
      [`& .${Re.input}`]: {
        paddingTop: 8,
        paddingBottom: 9
      }
    },
    [`& .${Re.input}`]: {
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
          [`& .${Re.tag}`]: {
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
          [`& .${Re.input}`]: {
            opacity: 1
          }
        }
      },
      {
        props: {
          multiple: true
        },
        style: {
          [`& .${Re.inputRoot}`]: {
            flexWrap: "wrap"
          }
        }
      }
    ]
  }), ug = le("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  }), dg = le(Ot, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator
  })({
    marginRight: -2,
    padding: 4,
    visibility: "hidden"
  }), pg = le(Ot, {
    name: "MuiAutocomplete",
    slot: "PopupIndicator",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popupIndicator,
        n.popupOpen && t.popupIndicatorOpen
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
  }), fg = le(no, {
    name: "MuiAutocomplete",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Re.option}`]: t.option
        },
        t.popper,
        n.disablePortal && t.popperDisablePortal
      ];
    }
  })(We(({ theme: e }) => ({
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
  }))), gg = le(Ht, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(We(({ theme: e }) => ({
    ...e.typography.body1,
    overflow: "auto"
  }))), hg = le("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading
  })(We(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), mg = le("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions
  })(We(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), bg = le("ul", {
    name: "MuiAutocomplete",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox
  })(We(({ theme: e }) => ({
    listStyle: "none",
    margin: 0,
    padding: "8px 0",
    maxHeight: "40vh",
    overflow: "auto",
    position: "relative",
    [`& .${Re.option}`]: {
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
      [`&.${Re.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`&.${Re.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : st(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${Re.focused}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected
          }
        },
        [`&.${Re.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }
  }))), Cg = le(rs, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel
  })(We(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8
  }))), wg = le("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl
  })({
    padding: 0,
    [`& .${Re.option}`]: {
      paddingLeft: 24
    }
  }), xc = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiAutocomplete"
    }), { autoComplete: r = false, autoHighlight: l = false, autoSelect: s = false, blurOnSelect: a = false, ChipProps: i, className: d, clearIcon: u = $i || ($i = p.jsx(cc, {
      fontSize: "small"
    })), clearOnBlur: f = !o.freeSolo, clearOnEscape: h = false, clearText: g = "Clear", closeText: m = "Close", componentsProps: x, defaultValue: I = o.multiple ? [] : null, disableClearable: S = false, disableCloseOnSelect: w = false, disabled: F = false, disabledItemsFocusable: H = false, disableListWrap: v = false, disablePortal: R = false, filterOptions: A, filterSelectedOptions: $ = false, forcePopupIcon: y = "auto", freeSolo: C = false, fullWidth: M = false, getLimitTagsText: T = (Xe) => `+${Xe}`, getOptionDisabled: O, getOptionKey: G, getOptionLabel: E, isOptionEqualToValue: P, groupBy: D, handleHomeEndKeys: L = !o.freeSolo, id: z, includeInputInList: _ = false, inputValue: j, limitTags: V = -1, ListboxComponent: K, ListboxProps: W, loading: U = false, loadingText: B = "Loading\u2026", multiple: te = false, noOptionsText: J = "No options", onChange: ne, onClose: ce, onHighlightChange: Ce, onInputChange: Y, onOpen: oe, open: he, openOnFocus: Z = false, openText: Ie = "Open", options: ee, PaperComponent: ye, PopperComponent: xe, popupIcon: Fe = Hi || (Hi = p.jsx(vd, {})), readOnly: Ne = false, renderGroup: Ue, renderInput: Ge, renderOption: He, renderTags: Le, selectOnFocus: Ke = !o.freeSolo, size: _e = "medium", slots: me = {}, slotProps: ve = {}, value: pe, ...be } = o, { getRootProps: je, getInputProps: $e, getInputLabelProps: lt, getPopupIndicatorProps: xt, getClearProps: ft, getTagProps: Pn, getListboxProps: Dt, getOptionProps: Mn, value: It, dirty: _t, expanded: Et, id: Rt, popupOpen: Ft, focused: ro, focusedTag: lo, anchorEl: Me, setAnchorEl: Kt, inputValue: El, groupedOptions: qn } = jp({
      ...o,
      componentName: "Autocomplete"
    }), Vo = !S && !F && _t && !Ne, No = (!C || y === true) && y !== false, { onMouseDown: Fl } = $e(), { ref: Tl, ...Ol } = Dt(), Bo = E || ((Xe) => Xe.label ?? Xe), Mt = {
      ...o,
      disablePortal: R,
      expanded: Et,
      focused: ro,
      fullWidth: M,
      getOptionLabel: Bo,
      hasClearIcon: Vo,
      hasPopupIcon: No,
      inputFocused: lo === -1,
      popupOpen: Ft,
      size: _e
    }, vt = ag(Mt), hn = {
      slots: {
        paper: ye,
        popper: xe,
        ...me
      },
      slotProps: {
        chip: i,
        listbox: W,
        ...x,
        ...ve
      }
    }, [Or, Q] = Ye("listbox", {
      elementType: bg,
      externalForwardedProps: hn,
      ownerState: Mt,
      className: vt.listbox,
      additionalProps: Ol,
      ref: Tl
    }), [q, de] = Ye("paper", {
      elementType: Ht,
      externalForwardedProps: hn,
      ownerState: Mt,
      className: vt.paper
    }), [Te, Ve] = Ye("popper", {
      elementType: no,
      externalForwardedProps: hn,
      ownerState: Mt,
      className: vt.popper,
      additionalProps: {
        disablePortal: R,
        style: {
          width: Me ? Me.clientWidth : null
        },
        role: "presentation",
        anchorEl: Me,
        open: Ft
      }
    });
    let tt;
    if (te && It.length > 0) {
      const Xe = (mn) => ({
        className: vt.tag,
        disabled: F,
        ...Pn(mn)
      });
      Le ? tt = Le(It, Xe, Mt) : tt = It.map((mn, $n) => {
        const { key: Wo, ...hd } = Xe({
          index: $n
        });
        return p.jsx(vo, {
          label: Bo(mn),
          size: _e,
          ...hd,
          ...hn.slotProps.chip
        }, Wo);
      });
    }
    if (V > -1 && Array.isArray(tt)) {
      const Xe = tt.length - V;
      !ro && Xe > 0 && (tt = tt.splice(0, V), tt.push(p.jsx("span", {
        className: vt.tag,
        children: T(Xe)
      }, tt.length)));
    }
    const qt = Ue || ((Xe) => p.jsxs("li", {
      children: [
        p.jsx(Cg, {
          className: vt.groupLabel,
          ownerState: Mt,
          component: "div",
          children: Xe.group
        }),
        p.jsx(wg, {
          className: vt.groupUl,
          ownerState: Mt,
          children: Xe.children
        })
      ]
    }, Xe.key)), gd = He || ((Xe, mn) => {
      const { key: $n, ...Wo } = Xe;
      return p.jsx("li", {
        ...Wo,
        children: Bo(mn)
      }, $n);
    }), ui = (Xe, mn) => {
      const $n = Mn({
        option: Xe,
        index: mn
      });
      return gd({
        ...$n,
        className: vt.option
      }, Xe, {
        selected: $n["aria-selected"],
        index: mn,
        inputValue: El
      }, Mt);
    }, di = hn.slotProps.clearIndicator, pi = hn.slotProps.popupIndicator;
    return p.jsxs(c.Fragment, {
      children: [
        p.jsx(cg, {
          ref: n,
          className: ue(vt.root, d),
          ownerState: Mt,
          ...je(be),
          children: Ge({
            id: Rt,
            disabled: F,
            fullWidth: true,
            size: _e === "small" ? "small" : void 0,
            InputLabelProps: lt(),
            InputProps: {
              ref: Kt,
              className: vt.inputRoot,
              startAdornment: tt,
              onMouseDown: (Xe) => {
                Xe.target === Xe.currentTarget && Fl(Xe);
              },
              ...(Vo || No) && {
                endAdornment: p.jsxs(ug, {
                  className: vt.endAdornment,
                  ownerState: Mt,
                  children: [
                    Vo ? p.jsx(dg, {
                      ...ft(),
                      "aria-label": g,
                      title: g,
                      ownerState: Mt,
                      ...di,
                      className: ue(vt.clearIndicator, di == null ? void 0 : di.className),
                      children: u
                    }) : null,
                    No ? p.jsx(pg, {
                      ...xt(),
                      disabled: F,
                      "aria-label": Ft ? m : Ie,
                      title: Ft ? m : Ie,
                      ownerState: Mt,
                      ...pi,
                      className: ue(vt.popupIndicator, pi == null ? void 0 : pi.className),
                      children: Fe
                    }) : null
                  ]
                })
              }
            },
            inputProps: {
              className: vt.input,
              disabled: F,
              readOnly: Ne,
              ...$e()
            }
          })
        }),
        Me ? p.jsx(fg, {
          as: Te,
          ...Ve,
          children: p.jsxs(gg, {
            as: q,
            ...de,
            children: [
              U && qn.length === 0 ? p.jsx(hg, {
                className: vt.loading,
                ownerState: Mt,
                children: B
              }) : null,
              qn.length === 0 && !C && !U ? p.jsx(mg, {
                className: vt.noOptions,
                ownerState: Mt,
                role: "presentation",
                onMouseDown: (Xe) => {
                  Xe.preventDefault();
                },
                children: J
              }) : null,
              qn.length > 0 ? p.jsx(Or, {
                as: K,
                ...Q,
                children: qn.map((Xe, mn) => D ? qt({
                  key: Xe.key,
                  group: Xe.group,
                  children: Xe.options.map(($n, Wo) => ui($n, Xe.index + Wo))
                }) : ui(Xe, mn))
              }) : null
            ]
          })
        }) : null
      ]
    });
  });
  function xg(e) {
    const { badgeContent: t, invisible: n = false, max: o = 99, showZero: r = false } = e, l = Es({
      badgeContent: t,
      max: o
    });
    let s = n;
    n === false && t === 0 && !r && (s = true);
    const { badgeContent: a, max: i = o } = s ? l : e, d = a && Number(a) > i ? `${i}+` : a;
    return {
      badgeContent: a,
      invisible: s,
      max: i,
      displayValue: d
    };
  }
  function vg(e) {
    return ut("MuiBadge", e);
  }
  const Hn = at("MuiBadge", [
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
  ]), Ll = 10, jl = 4, yg = (e) => {
    const { color: t, anchorOrigin: n, invisible: o, overlap: r, variant: l, classes: s = {} } = e, a = {
      root: [
        "root"
      ],
      badge: [
        "badge",
        l,
        o && "invisible",
        `anchorOrigin${se(n.vertical)}${se(n.horizontal)}`,
        `anchorOrigin${se(n.vertical)}${se(n.horizontal)}${se(r)}`,
        `overlap${se(r)}`,
        t !== "default" && `color${se(t)}`
      ]
    };
    return ge(a, vg, s);
  }, Sg = le("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0
  }), Ig = le("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.badge,
        t[n.variant],
        t[`anchorOrigin${se(n.anchorOrigin.vertical)}${se(n.anchorOrigin.horizontal)}${se(n.overlap)}`],
        n.color !== "default" && t[`color${se(n.color)}`],
        n.invisible && t.invisible
      ];
    }
  })(We(({ theme: e }) => ({
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
    minWidth: Ll * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: Ll * 2,
    borderRadius: Ll,
    zIndex: 1,
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeInOut,
      duration: e.transitions.duration.enteringScreen
    }),
    variants: [
      ...Object.entries(e.palette).filter(Bt([
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
          borderRadius: jl,
          height: jl * 2,
          minWidth: jl * 2,
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
          [`&.${Hn.invisible}`]: {
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
  function Li(e) {
    return {
      vertical: (e == null ? void 0 : e.vertical) ?? "top",
      horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
    };
  }
  const Pg = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiBadge"
    }), { anchorOrigin: r, className: l, classes: s, component: a, components: i = {}, componentsProps: d = {}, children: u, overlap: f = "rectangular", color: h = "default", invisible: g = false, max: m = 99, badgeContent: x, slots: I, slotProps: S, showZero: w = false, variant: F = "standard", ...H } = o, { badgeContent: v, invisible: R, max: A, displayValue: $ } = xg({
      max: m,
      invisible: g,
      badgeContent: x,
      showZero: w
    }), y = Es({
      anchorOrigin: Li(r),
      color: h,
      overlap: f,
      variant: F,
      badgeContent: x
    }), C = R || v == null && F !== "dot", { color: M = h, overlap: T = f, anchorOrigin: O, variant: G = F } = C ? y : o, E = Li(O), P = G !== "dot" ? $ : void 0, D = {
      ...o,
      badgeContent: v,
      invisible: C,
      max: A,
      displayValue: P,
      showZero: w,
      anchorOrigin: E,
      color: M,
      overlap: T,
      variant: G
    }, L = yg(D), z = {
      slots: {
        root: (I == null ? void 0 : I.root) ?? i.Root,
        badge: (I == null ? void 0 : I.badge) ?? i.Badge
      },
      slotProps: {
        root: (S == null ? void 0 : S.root) ?? d.root,
        badge: (S == null ? void 0 : S.badge) ?? d.badge
      }
    }, [_, j] = Ye("root", {
      elementType: Sg,
      externalForwardedProps: {
        ...z,
        ...H
      },
      ownerState: D,
      className: ue(L.root, l),
      ref: n,
      additionalProps: {
        as: a
      }
    }), [V, K] = Ye("badge", {
      elementType: Ig,
      externalForwardedProps: z,
      ownerState: D,
      className: L.badge
    });
    return p.jsxs(_, {
      ...j,
      children: [
        u,
        p.jsx(V, {
          ...K,
          children: P
        })
      ]
    });
  });
  function Mg(e) {
    return ut("MuiCard", e);
  }
  at("MuiCard", [
    "root"
  ]);
  const kg = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, Mg, t);
  }, Eg = le(Ht, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Fg = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: l = false, ...s } = o, a = {
      ...o,
      raised: l
    }, i = kg(a);
    return p.jsx(Eg, {
      className: ue(i.root, r),
      elevation: l ? 8 : void 0,
      ref: n,
      ownerState: a,
      ...s
    });
  });
  function ji(e) {
    return e.substring(2).toLowerCase();
  }
  function Tg(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Ls(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: l = "onTouchEnd" } = e, s = c.useRef(false), a = c.useRef(null), i = c.useRef(false), d = c.useRef(false);
    c.useEffect(() => (setTimeout(() => {
      i.current = true;
    }, 0), () => {
      i.current = false;
    }), []);
    const u = zt(nc(t), a), f = Be((m) => {
      const x = d.current;
      d.current = false;
      const I = tn(a.current);
      if (!i.current || !a.current || "clientX" in m && Tg(m, I)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let S;
      m.composedPath ? S = m.composedPath().includes(a.current) : S = !I.documentElement.contains(m.target) || a.current.contains(m.target), !S && (n || !x) && r(m);
    }), h = (m) => (x) => {
      d.current = true;
      const I = t.props[m];
      I && I(x);
    }, g = {
      ref: u
    };
    return l !== false && (g[l] = h(l)), c.useEffect(() => {
      if (l !== false) {
        const m = ji(l), x = tn(a.current), I = () => {
          s.current = true;
        };
        return x.addEventListener(m, f), x.addEventListener("touchmove", I), () => {
          x.removeEventListener(m, f), x.removeEventListener("touchmove", I);
        };
      }
    }, [
      f,
      l
    ]), o !== false && (g[o] = h(o)), c.useEffect(() => {
      if (o !== false) {
        const m = ji(o), x = tn(a.current);
        return x.addEventListener(m, f), () => {
          x.removeEventListener(m, f);
        };
      }
    }, [
      f,
      o
    ]), c.cloneElement(t, g);
  }
  function Og(e) {
    return ut("MuiDialogActions", e);
  }
  at("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const Dg = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return ge({
      root: [
        "root",
        !n && "spacing"
      ]
    }, Og, t);
  }, Rg = le("div", {
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
  }), $g = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: l = false, ...s } = o, a = {
      ...o,
      disableSpacing: l
    }, i = Dg(a);
    return p.jsx(Rg, {
      className: ue(i.root, r),
      ownerState: a,
      ref: n,
      ...s
    });
  });
  function Hg(e) {
    return ut("MuiInputAdornment", e);
  }
  const Ai = at("MuiInputAdornment", [
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
  var zi;
  const Lg = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${se(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, jg = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: l, variant: s } = e, a = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${se(r)}`,
        s,
        o && "hiddenLabel",
        l && `size${se(l)}`
      ]
    };
    return ge(a, Hg, t);
  }, Ag = le("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Lg
  })(We(({ theme: e }) => ({
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
          [`&.${Ai.positionStart}&:not(.${Ai.hiddenLabel})`]: {
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
  }))), vc = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: l, component: s = "div", disablePointerEvents: a = false, disableTypography: i = false, position: d, variant: u, ...f } = o, h = yd() || {};
    let g = u;
    u && h.variant, h && !g && (g = h.variant);
    const m = {
      ...o,
      hiddenLabel: h.hiddenLabel,
      size: h.size,
      disablePointerEvents: a,
      position: d,
      variant: g
    }, x = jg(m);
    return p.jsx(Sd.Provider, {
      value: null,
      children: p.jsx(Ag, {
        as: s,
        ownerState: m,
        className: ue(x.root, l),
        ref: n,
        ...f,
        children: typeof r == "string" && !i ? p.jsx(Pe, {
          color: "textSecondary",
          children: r
        }) : p.jsxs(c.Fragment, {
          children: [
            d === "start" ? zi || (zi = p.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  });
  function zg(e) {
    return ut("MuiLinearProgress", e);
  }
  at("MuiLinearProgress", [
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
  const ls = 4, ss = wr`
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
`, Gg = typeof ss != "string" ? Cr`
        animation: ${ss} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, is = wr`
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
`, _g = typeof is != "string" ? Cr`
        animation: ${is} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, as = wr`
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
`, Vg = typeof as != "string" ? Cr`
        animation: ${as} 3s infinite linear;
      ` : null, Ng = (e) => {
    const { classes: t, variant: n, color: o } = e, r = {
      root: [
        "root",
        `color${se(o)}`,
        n
      ],
      dashed: [
        "dashed",
        `dashedColor${se(o)}`
      ],
      bar1: [
        "bar",
        "bar1",
        `barColor${se(o)}`,
        (n === "indeterminate" || n === "query") && "bar1Indeterminate",
        n === "determinate" && "bar1Determinate",
        n === "buffer" && "bar1Buffer"
      ],
      bar2: [
        "bar",
        "bar2",
        n !== "buffer" && `barColor${se(o)}`,
        n === "buffer" && `color${se(o)}`,
        (n === "indeterminate" || n === "query") && "bar2Indeterminate",
        n === "buffer" && "bar2Buffer"
      ]
    };
    return ge(r, zg, t);
  }, js = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? ir(e.palette[t].main, 0.62) : sr(e.palette[t].main, 0.5), Bg = le("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${se(n.color)}`],
        t[n.variant]
      ];
    }
  })(We(({ theme: e }) => ({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
      colorAdjust: "exact"
    },
    variants: [
      ...Object.entries(e.palette).filter(Bt()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: js(e, t)
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
  }))), Wg = le("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.dashed,
        t[`dashedColor${se(n.color)}`]
      ];
    }
  })(We(({ theme: e }) => ({
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
      ...Object.entries(e.palette).filter(Bt()).map(([t]) => {
        const n = js(e, t);
        return {
          props: {
            color: t
          },
          style: {
            backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
          }
        };
      })
    ]
  })), Vg || {
    animation: `${as} 3s infinite linear`
  }), Ug = le("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t.bar1,
        t[`barColor${se(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate,
        n.variant === "determinate" && t.bar1Determinate,
        n.variant === "buffer" && t.bar1Buffer
      ];
    }
  })(We(({ theme: e }) => ({
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
      ...Object.entries(e.palette).filter(Bt()).map(([t]) => ({
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
          transition: `transform .${ls}s linear`
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          zIndex: 1,
          transition: `transform .${ls}s linear`
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
        style: Gg || {
          animation: `${ss} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
        }
      }
    ]
  }))), Kg = le("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t.bar2,
        t[`barColor${se(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate,
        n.variant === "buffer" && t.bar2Buffer
      ];
    }
  })(We(({ theme: e }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      ...Object.entries(e.palette).filter(Bt()).map(([t]) => ({
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
      ...Object.entries(e.palette).filter(Bt()).map(([t]) => ({
        props: {
          color: t,
          variant: "buffer"
        },
        style: {
          backgroundColor: js(e, t),
          transition: `transform .${ls}s linear`
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
        style: _g || {
          animation: `${is} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
        }
      }
    ]
  }))), qg = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiLinearProgress"
    }), { className: r, color: l = "primary", value: s, valueBuffer: a, variant: i = "indeterminate", ...d } = o, u = {
      ...o,
      color: l,
      variant: i
    }, f = Ng(u), h = Gt(), g = {}, m = {
      bar1: {},
      bar2: {}
    };
    if ((i === "determinate" || i === "buffer") && s !== void 0) {
      g["aria-valuenow"] = Math.round(s), g["aria-valuemin"] = 0, g["aria-valuemax"] = 100;
      let x = s - 100;
      h && (x = -x), m.bar1.transform = `translateX(${x}%)`;
    }
    if (i === "buffer" && a !== void 0) {
      let x = (a || 0) - 100;
      h && (x = -x), m.bar2.transform = `translateX(${x}%)`;
    }
    return p.jsxs(Bg, {
      className: ue(f.root, r),
      ownerState: u,
      role: "progressbar",
      ...g,
      ref: n,
      ...d,
      children: [
        i === "buffer" ? p.jsx(Wg, {
          className: f.dashed,
          ownerState: u
        }) : null,
        p.jsx(Ug, {
          className: f.bar1,
          ownerState: u,
          style: m.bar1
        }),
        i === "determinate" ? null : p.jsx(Kg, {
          className: f.bar2,
          ownerState: u,
          style: m.bar2
        })
      ]
    });
  }), Yg = (e) => {
    const { alignItems: t, classes: n } = e;
    return ge({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, Wd, n);
  }, Xg = le("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(We(({ theme: e }) => ({
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
  }))), yo = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiListItemIcon"
    }), { className: r, ...l } = o, s = c.useContext(Id), a = {
      ...o,
      alignItems: s.alignItems
    }, i = Yg(a);
    return p.jsx(Xg, {
      className: ue(i.root, r),
      ownerState: a,
      ref: n,
      ...l
    });
  }), Qg = Se(p.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Jg = Se(p.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Zg(e) {
    return ut("MuiSkeleton", e);
  }
  at("MuiSkeleton", [
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
  const eh = (e) => {
    const { classes: t, variant: n, animation: o, hasChildren: r, width: l, height: s } = e;
    return ge({
      root: [
        "root",
        n,
        o,
        r && "withChildren",
        r && !l && "fitContent",
        r && !s && "heightAuto"
      ]
    }, Zg, t);
  }, cs = wr`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, us = wr`
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
`, th = typeof cs != "string" ? Cr`
        animation: ${cs} 2s ease-in-out 0.5s infinite;
      ` : null, nh = typeof us != "string" ? Cr`
        &::after {
          animation: ${us} 2s linear 0.5s infinite;
        }
      ` : null, oh = le("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        n.animation !== false && t[n.animation],
        n.hasChildren && t.withChildren,
        n.hasChildren && !n.width && t.fitContent,
        n.hasChildren && !n.height && t.heightAuto
      ];
    }
  })(We(({ theme: e }) => {
    const t = rp(e.shape.borderRadius) || "px", n = lp(e.shape.borderRadius);
    return {
      display: "block",
      backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : st(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
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
            borderRadius: `${n}${t}/${Math.round(n / 0.6 * 10) / 10}${t}`,
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
          style: th || {
            animation: `${cs} 2s ease-in-out 0.5s infinite`
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
          style: nh || {
            "&::after": {
              animation: `${us} 2s linear 0.5s infinite`
            }
          }
        }
      ]
    };
  })), rh = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiSkeleton"
    }), { animation: r = "pulse", className: l, component: s = "span", height: a, style: i, variant: d = "text", width: u, ...f } = o, h = {
      ...o,
      animation: r,
      component: s,
      variant: d,
      hasChildren: !!f.children
    }, g = eh(h);
    return p.jsx(oh, {
      as: s,
      ref: n,
      className: ue(g.root, l),
      ownerState: h,
      ...f,
      style: {
        width: u,
        height: a,
        ...i
      }
    });
  });
  function lh(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: l } = e, s = Nt();
    c.useEffect(() => {
      if (!r) return;
      function S(w) {
        w.defaultPrevented || w.key === "Escape" && (o == null ? void 0 : o(w, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", S), () => {
        document.removeEventListener("keydown", S);
      };
    }, [
      r,
      o
    ]);
    const a = Be((S, w) => {
      o == null ? void 0 : o(S, w);
    }), i = Be((S) => {
      !o || S == null || s.start(S, () => {
        a(null, "timeout");
      });
    });
    c.useEffect(() => (r && i(t), s.clear), [
      r,
      t,
      i,
      s
    ]);
    const d = (S) => {
      o == null ? void 0 : o(S, "clickaway");
    }, u = s.clear, f = c.useCallback(() => {
      t != null && i(l ?? t * 0.5);
    }, [
      t,
      l,
      i
    ]), h = (S) => (w) => {
      const F = S.onBlur;
      F == null ? void 0 : F(w), f();
    }, g = (S) => (w) => {
      const F = S.onFocus;
      F == null ? void 0 : F(w), u();
    }, m = (S) => (w) => {
      const F = S.onMouseEnter;
      F == null ? void 0 : F(w), u();
    }, x = (S) => (w) => {
      const F = S.onMouseLeave;
      F == null ? void 0 : F(w), f();
    };
    return c.useEffect(() => {
      if (!n && r) return window.addEventListener("focus", f), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", u);
      };
    }, [
      n,
      r,
      f,
      u
    ]), {
      getRootProps: (S = {}) => {
        const w = {
          ...hi(e),
          ...hi(S)
        };
        return {
          role: "presentation",
          ...S,
          ...w,
          onBlur: h(w),
          onFocus: g(w),
          onMouseEnter: m(w),
          onMouseLeave: x(w)
        };
      },
      onClickAway: d
    };
  }
  function sh(e) {
    return ut("MuiSnackbarContent", e);
  }
  at("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const ih = (e) => {
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
    }, sh, t);
  }, ah = le(Ht, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(We(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Pd(e.palette.background.default, t);
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
  })), ch = le("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), uh = le("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), dh = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: l, message: s, role: a = "alert", ...i } = o, d = o, u = ih(d);
    return p.jsxs(ah, {
      role: a,
      square: true,
      elevation: 6,
      className: ue(u.root, l),
      ownerState: d,
      ref: n,
      ...i,
      children: [
        p.jsx(ch, {
          className: u.message,
          ownerState: d,
          children: s
        }),
        r ? p.jsx(uh, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function ph(e) {
    return ut("MuiSnackbar", e);
  }
  at("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const fh = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${se(n.vertical)}${se(n.horizontal)}`
      ]
    };
    return ge(o, ph, t);
  }, gh = le("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${se(n.anchorOrigin.vertical)}${se(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(We(({ theme: e }) => ({
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
  }))), hh = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiSnackbar"
    }), r = br(), l = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: a, horizontal: i } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: f, ClickAwayListenerProps: h, ContentProps: g, disableWindowBlurListener: m = false, message: x, onBlur: I, onClose: S, onFocus: w, onMouseEnter: F, onMouseLeave: H, open: v, resumeHideDuration: R, slots: A = {}, slotProps: $ = {}, TransitionComponent: y, transitionDuration: C = l, TransitionProps: { onEnter: M, onExited: T, ...O } = {}, ...G } = o, E = {
      ...o,
      anchorOrigin: {
        vertical: a,
        horizontal: i
      },
      autoHideDuration: d,
      disableWindowBlurListener: m,
      TransitionComponent: y,
      transitionDuration: C
    }, P = fh(E), { getRootProps: D, onClickAway: L } = lh({
      ...E
    }), [z, _] = c.useState(true), j = (oe) => {
      _(true), T && T(oe);
    }, V = (oe, he) => {
      _(false), M && M(oe, he);
    }, K = {
      slots: {
        transition: y,
        ...A
      },
      slotProps: {
        content: g,
        clickAwayListener: h,
        transition: O,
        ...$
      }
    }, [W, U] = Ye("root", {
      ref: n,
      className: [
        P.root,
        f
      ],
      elementType: gh,
      getSlotProps: D,
      externalForwardedProps: {
        ...K,
        ...G
      },
      ownerState: E
    }), [B, { ownerState: te, ...J }] = Ye("clickAwayListener", {
      elementType: Ls,
      externalForwardedProps: K,
      getSlotProps: (oe) => ({
        onClickAway: (...he) => {
          var _a2;
          (_a2 = oe.onClickAway) == null ? void 0 : _a2.call(oe, ...he), L(...he);
        }
      }),
      ownerState: E
    }), [ne, ce] = Ye("content", {
      elementType: dh,
      shouldForwardComponentProp: true,
      externalForwardedProps: K,
      additionalProps: {
        message: x,
        action: s
      },
      ownerState: E
    }), [Ce, Y] = Ye("transition", {
      elementType: Ps,
      externalForwardedProps: K,
      getSlotProps: (oe) => ({
        onEnter: (...he) => {
          var _a2;
          (_a2 = oe.onEnter) == null ? void 0 : _a2.call(oe, ...he), V(...he);
        },
        onExited: (...he) => {
          var _a2;
          (_a2 = oe.onExited) == null ? void 0 : _a2.call(oe, ...he), j(...he);
        }
      }),
      additionalProps: {
        appear: true,
        in: v,
        timeout: C,
        direction: a === "top" ? "down" : "up"
      },
      ownerState: E
    });
    return !v && z ? null : p.jsx(B, {
      ...J,
      ...A.clickAwayListener && {
        ownerState: te
      },
      children: p.jsx(W, {
        ...U,
        children: p.jsx(Ce, {
          ...Y,
          children: u || p.jsx(ne, {
            ...ce
          })
        })
      })
    });
  });
  function mh(e) {
    return ut("MuiTooltip", e);
  }
  const ct = at("MuiTooltip", [
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
  function bh(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Ch = (e) => {
    const { classes: t, disableInteractive: n, arrow: o, touch: r, placement: l } = e, s = {
      popper: [
        "popper",
        !n && "popperInteractive",
        o && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        o && "tooltipArrow",
        r && "touch",
        `tooltipPlacement${se(l.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return ge(s, mh, t);
  }, wh = le(no, {
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
  })(We(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${ct.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${ct.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${ct.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${ct.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${ct.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${ct.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${ct.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${ct.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), xh = le("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${se(n.placement.split("-")[0])}`]
      ];
    }
  })(We(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : st(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${ct.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${ct.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${ct.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${ct.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${bh(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${ct.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${ct.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${ct.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${ct.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${ct.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${ct.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${ct.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${ct.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${ct.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${ct.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), vh = le("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(We(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : st(e.palette.grey[700], 0.9),
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
  let Ar = false;
  const Gi = new Md();
  let Ko = {
    x: 0,
    y: 0
  };
  function zr(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const _n = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: l, classes: s, components: a = {}, componentsProps: i = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: f = false, disableInteractive: h = false, disableTouchListener: g = false, enterDelay: m = 100, enterNextDelay: x = 0, enterTouchDelay: I = 700, followCursor: S = false, id: w, leaveDelay: F = 0, leaveTouchDelay: H = 1500, onClose: v, onOpen: R, open: A, placement: $ = "bottom", PopperComponent: y, PopperProps: C = {}, slotProps: M = {}, slots: T = {}, title: O, TransitionComponent: G, TransitionProps: E, ...P } = o, D = c.isValidElement(l) ? l : p.jsx("span", {
      children: l
    }), L = br(), z = Gt(), [_, j] = c.useState(), [V, K] = c.useState(null), W = c.useRef(false), U = h || S, B = Nt(), te = Nt(), J = Nt(), ne = Nt(), [ce, Ce] = tr({
      controlled: A,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let Y = ce;
    const oe = ot(w), he = c.useRef(), Z = Be(() => {
      he.current !== void 0 && (document.body.style.WebkitUserSelect = he.current, he.current = void 0), ne.clear();
    });
    c.useEffect(() => Z, [
      Z
    ]);
    const Ie = (Me) => {
      Gi.clear(), Ar = true, Ce(true), R && !Y && R(Me);
    }, ee = Be((Me) => {
      Gi.start(800 + F, () => {
        Ar = false;
      }), Ce(false), v && Y && v(Me), B.start(L.transitions.duration.shortest, () => {
        W.current = false;
      });
    }), ye = (Me) => {
      W.current && Me.type !== "touchstart" || (_ && _.removeAttribute("title"), te.clear(), J.clear(), m || Ar && x ? te.start(Ar ? x : m, () => {
        Ie(Me);
      }) : Ie(Me));
    }, xe = (Me) => {
      te.clear(), J.start(F, () => {
        ee(Me);
      });
    }, [, Fe] = c.useState(false), Ne = (Me) => {
      mi(Me.target) || (Fe(false), xe(Me));
    }, Ue = (Me) => {
      _ || j(Me.currentTarget), mi(Me.target) && (Fe(true), ye(Me));
    }, Ge = (Me) => {
      W.current = true;
      const Kt = D.props;
      Kt.onTouchStart && Kt.onTouchStart(Me);
    }, He = (Me) => {
      Ge(Me), J.clear(), B.clear(), Z(), he.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ne.start(I, () => {
        document.body.style.WebkitUserSelect = he.current, ye(Me);
      });
    }, Le = (Me) => {
      D.props.onTouchEnd && D.props.onTouchEnd(Me), Z(), J.start(H, () => {
        ee(Me);
      });
    };
    c.useEffect(() => {
      if (!Y) return;
      function Me(Kt) {
        Kt.key === "Escape" && ee(Kt);
      }
      return document.addEventListener("keydown", Me), () => {
        document.removeEventListener("keydown", Me);
      };
    }, [
      ee,
      Y
    ]);
    const Ke = zt(nc(D), j, n);
    !O && O !== 0 && (Y = false);
    const _e = c.useRef(), me = (Me) => {
      const Kt = D.props;
      Kt.onMouseMove && Kt.onMouseMove(Me), Ko = {
        x: Me.clientX,
        y: Me.clientY
      }, _e.current && _e.current.update();
    }, ve = {}, pe = typeof O == "string";
    d ? (ve.title = !Y && pe && !f ? O : null, ve["aria-describedby"] = Y ? oe : null) : (ve["aria-label"] = pe ? O : null, ve["aria-labelledby"] = Y && !pe ? oe : null);
    const be = {
      ...ve,
      ...P,
      ...D.props,
      className: ue(P.className, D.props.className),
      onTouchStart: Ge,
      ref: Ke,
      ...S ? {
        onMouseMove: me
      } : {}
    }, je = {};
    g || (be.onTouchStart = He, be.onTouchEnd = Le), f || (be.onMouseOver = zr(ye, be.onMouseOver), be.onMouseLeave = zr(xe, be.onMouseLeave), U || (je.onMouseOver = ye, je.onMouseLeave = xe)), u || (be.onFocus = zr(Ue, be.onFocus), be.onBlur = zr(Ne, be.onBlur), U || (je.onFocus = Ue, je.onBlur = Ne));
    const $e = {
      ...o,
      isRtl: z,
      arrow: r,
      disableInteractive: U,
      placement: $,
      PopperComponentProp: y,
      touch: W.current
    }, lt = typeof M.popper == "function" ? M.popper($e) : M.popper, xt = c.useMemo(() => {
      var _a2, _b2;
      let Me = [
        {
          name: "arrow",
          enabled: !!V,
          options: {
            element: V,
            padding: 4
          }
        }
      ];
      return ((_a2 = C.popperOptions) == null ? void 0 : _a2.modifiers) && (Me = Me.concat(C.popperOptions.modifiers)), ((_b2 = lt == null ? void 0 : lt.popperOptions) == null ? void 0 : _b2.modifiers) && (Me = Me.concat(lt.popperOptions.modifiers)), {
        ...C.popperOptions,
        ...lt == null ? void 0 : lt.popperOptions,
        modifiers: Me
      };
    }, [
      V,
      C.popperOptions,
      lt == null ? void 0 : lt.popperOptions
    ]), ft = Ch($e), Pn = typeof M.transition == "function" ? M.transition($e) : M.transition, Dt = {
      slots: {
        popper: a.Popper,
        transition: a.Transition ?? G,
        tooltip: a.Tooltip,
        arrow: a.Arrow,
        ...T
      },
      slotProps: {
        arrow: M.arrow ?? i.arrow,
        popper: {
          ...C,
          ...lt ?? i.popper
        },
        tooltip: M.tooltip ?? i.tooltip,
        transition: {
          ...E,
          ...Pn ?? i.transition
        }
      }
    }, [Mn, It] = Ye("popper", {
      elementType: wh,
      externalForwardedProps: Dt,
      ownerState: $e,
      className: ue(ft.popper, C == null ? void 0 : C.className)
    }), [_t, Et] = Ye("transition", {
      elementType: Ps,
      externalForwardedProps: Dt,
      ownerState: $e
    }), [Rt, Ft] = Ye("tooltip", {
      elementType: xh,
      className: ft.tooltip,
      externalForwardedProps: Dt,
      ownerState: $e
    }), [ro, lo] = Ye("arrow", {
      elementType: vh,
      className: ft.arrow,
      externalForwardedProps: Dt,
      ownerState: $e,
      ref: K
    });
    return p.jsxs(c.Fragment, {
      children: [
        c.cloneElement(D, be),
        p.jsx(Mn, {
          as: y ?? no,
          placement: $,
          anchorEl: S ? {
            getBoundingClientRect: () => ({
              top: Ko.y,
              left: Ko.x,
              right: Ko.x,
              bottom: Ko.y,
              width: 0,
              height: 0
            })
          } : _,
          popperRef: _e,
          open: _ ? Y : false,
          id: oe,
          transition: true,
          ...je,
          ...It,
          popperOptions: xt,
          children: ({ TransitionProps: Me }) => p.jsx(_t, {
            timeout: L.transitions.duration.shorter,
            ...Me,
            ...Et,
            children: p.jsxs(Rt, {
              ...Ft,
              children: [
                O,
                r ? p.jsx(ro, {
                  ...lo
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), yh = c.createContext(), Sh = c.createContext();
  function Ih(e) {
    return ut("MuiTableCell", e);
  }
  const Ph = at("MuiTableCell", [
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
  ]), Mh = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: l, stickyHeader: s } = e, a = {
      root: [
        "root",
        n,
        s && "stickyHeader",
        o !== "inherit" && `align${se(o)}`,
        r !== "normal" && `padding${se(r)}`,
        `size${se(l)}`
      ]
    };
    return ge(a, Ih, t);
  }, kh = le("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${se(n.size)}`],
        n.padding !== "normal" && t[`padding${se(n.padding)}`],
        n.align !== "inherit" && t[`align${se(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(We(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? ir(st(e.palette.divider, 1), 0.88) : sr(st(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Ph.paddingCheckbox}`]: {
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
  }))), ds = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: l, component: s, padding: a, scope: i, size: d, sortDirection: u, variant: f, ...h } = o, g = c.useContext(yh), m = c.useContext(Sh), x = m && m.variant === "head";
    let I;
    s ? I = s : I = x ? "th" : "td";
    let S = i;
    I === "td" ? S = void 0 : !S && x && (S = "col");
    const w = f || m && m.variant, F = {
      ...o,
      align: r,
      component: I,
      padding: a || (g && g.padding ? g.padding : "normal"),
      size: d || (g && g.size ? g.size : "medium"),
      sortDirection: u,
      stickyHeader: w === "head" && g && g.stickyHeader,
      variant: w
    }, H = Mh(F);
    let v = null;
    return u && (v = u === "asc" ? "ascending" : "descending"), p.jsx(kh, {
      as: I,
      ref: n,
      className: ue(H.root, l),
      "aria-sort": v,
      scope: S,
      ownerState: F,
      ...h
    });
  });
  function Eh(e) {
    return ut("MuiToolbar", e);
  }
  at("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Fh = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return ge({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Eh, t);
  }, Th = le("div", {
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
  })(We(({ theme: e }) => ({
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
  }))), yc = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: l = "div", disableGutters: s = false, variant: a = "regular", ...i } = o, d = {
      ...o,
      component: l,
      disableGutters: s,
      variant: a
    }, u = Fh(d);
    return p.jsx(Th, {
      as: l,
      className: ue(u.root, r),
      ref: n,
      ownerState: d,
      ...i
    });
  }), Oh = Se(p.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Dh = Se(p.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Rh = c.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: l = false, getItemAriaLabel: s, nextIconButtonProps: a, onPageChange: i, page: d, rowsPerPage: u, showFirstButton: f, showLastButton: h, slots: g = {}, slotProps: m = {}, ...x } = t, I = Gt(), S = (j) => {
      i(j, 0);
    }, w = (j) => {
      i(j, d - 1);
    }, F = (j) => {
      i(j, d + 1);
    }, H = (j) => {
      i(j, Math.max(0, Math.ceil(r / u) - 1));
    }, v = g.firstButton ?? Ot, R = g.lastButton ?? Ot, A = g.nextButton ?? Ot, $ = g.previousButton ?? Ot, y = g.firstButtonIcon ?? Qg, C = g.lastButtonIcon ?? Jg, M = g.nextButtonIcon ?? Dh, T = g.previousButtonIcon ?? Oh, O = I ? R : v, G = I ? A : $, E = I ? $ : A, P = I ? v : R, D = I ? m.lastButton : m.firstButton, L = I ? m.nextButton : m.previousButton, z = I ? m.previousButton : m.nextButton, _ = I ? m.firstButton : m.lastButton;
    return p.jsxs("div", {
      ref: n,
      ...x,
      children: [
        f && p.jsx(O, {
          onClick: S,
          disabled: l || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...D,
          children: I ? p.jsx(C, {
            ...m.lastButtonIcon
          }) : p.jsx(y, {
            ...m.firstButtonIcon
          })
        }),
        p.jsx(G, {
          onClick: w,
          disabled: l || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...L ?? o,
          children: I ? p.jsx(M, {
            ...m.nextButtonIcon
          }) : p.jsx(T, {
            ...m.previousButtonIcon
          })
        }),
        p.jsx(E, {
          onClick: F,
          disabled: l || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": s("next", d),
          title: s("next", d),
          ...z ?? a,
          children: I ? p.jsx(T, {
            ...m.previousButtonIcon
          }) : p.jsx(M, {
            ...m.nextButtonIcon
          })
        }),
        h && p.jsx(P, {
          onClick: H,
          disabled: l || d >= Math.ceil(r / u) - 1,
          "aria-label": s("last", d),
          title: s("last", d),
          ..._,
          children: I ? p.jsx(y, {
            ...m.firstButtonIcon
          }) : p.jsx(C, {
            ...m.lastButtonIcon
          })
        })
      ]
    });
  });
  function $h(e) {
    return ut("MuiTablePagination", e);
  }
  const Qn = at("MuiTablePagination", [
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
  var _i;
  const Hh = le(ds, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(We(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), Lh = le(yc, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${Qn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(We(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${Qn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), jh = le("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), Ah = le("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(We(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), zh = le(Jr, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${Qn.selectIcon}`]: t.selectIcon,
      [`& .${Qn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${Qn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), Gh = le(Lt, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), _h = le("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(We(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function Vh({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function Nh(e) {
    return `Go to ${e} page`;
  }
  const Bh = (e) => {
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
    }, $h, t);
  }, Wh = c.forwardRef(function(t, n) {
    const o = dt({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = Rh, backIconButtonProps: l, colSpan: s, component: a = ds, count: i, disabled: d = false, getItemAriaLabel: u = Nh, labelDisplayedRows: f = Vh, labelRowsPerPage: h = "Rows per page:", nextIconButtonProps: g, onPageChange: m, onRowsPerPageChange: x, page: I, rowsPerPage: S, rowsPerPageOptions: w = [
      10,
      25,
      50,
      100
    ], SelectProps: F = {}, showFirstButton: H = false, showLastButton: v = false, slotProps: R = {}, slots: A = {}, ...$ } = o, y = o, C = Bh(y), M = (R == null ? void 0 : R.select) ?? F, T = M.native ? "option" : Gh;
    let O;
    (a === ds || a === "td") && (O = s || 1e3);
    const G = ot(M.id), E = ot(M.labelId), P = () => i === -1 ? (I + 1) * S : S === -1 ? i : Math.min(i, (I + 1) * S), D = {
      slots: A,
      slotProps: R
    }, [L, z] = Ye("root", {
      ref: n,
      className: C.root,
      elementType: Hh,
      externalForwardedProps: {
        ...D,
        component: a,
        ...$
      },
      ownerState: y,
      additionalProps: {
        colSpan: O
      }
    }), [_, j] = Ye("toolbar", {
      className: C.toolbar,
      elementType: Lh,
      externalForwardedProps: D,
      ownerState: y
    }), [V, K] = Ye("spacer", {
      className: C.spacer,
      elementType: jh,
      externalForwardedProps: D,
      ownerState: y
    }), [W, U] = Ye("selectLabel", {
      className: C.selectLabel,
      elementType: Ah,
      externalForwardedProps: D,
      ownerState: y,
      additionalProps: {
        id: E
      }
    }), [B, te] = Ye("select", {
      className: C.select,
      elementType: zh,
      externalForwardedProps: D,
      ownerState: y
    }), [J, ne] = Ye("menuItem", {
      className: C.menuItem,
      elementType: T,
      externalForwardedProps: D,
      ownerState: y
    }), [ce, Ce] = Ye("displayedRows", {
      className: C.displayedRows,
      elementType: _h,
      externalForwardedProps: D,
      ownerState: y
    });
    return p.jsx(L, {
      ...z,
      children: p.jsxs(_, {
        ...j,
        children: [
          p.jsx(V, {
            ...K
          }),
          w.length > 1 && p.jsx(W, {
            ...U,
            children: h
          }),
          w.length > 1 && p.jsx(B, {
            variant: "standard",
            ...!M.variant && {
              input: _i || (_i = p.jsx(Ms, {}))
            },
            value: S,
            onChange: x,
            id: G,
            labelId: E,
            ...M,
            classes: {
              ...M.classes,
              root: ue(C.input, C.selectRoot, (M.classes || {}).root),
              select: ue(C.select, (M.classes || {}).select),
              icon: ue(C.selectIcon, (M.classes || {}).icon)
            },
            disabled: d,
            ...te,
            children: w.map((Y) => c.createElement(J, {
              ...ne,
              key: Y.label ? Y.label : Y,
              value: Y.value ? Y.value : Y
            }, Y.label ? Y.label : Y))
          }),
          p.jsx(ce, {
            ...Ce,
            children: f({
              from: i === 0 ? 0 : I * S + 1,
              to: P(),
              count: i === -1 ? -1 : i,
              page: I
            })
          }),
          p.jsx(r, {
            className: C.actions,
            backIconButtonProps: l,
            count: i,
            nextIconButtonProps: g,
            onPageChange: m,
            page: I,
            rowsPerPage: S,
            showFirstButton: H,
            showLastButton: v,
            slotProps: R.actions,
            slots: A.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  }), Uh = Se(p.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Kh = Se(p.jsx("path", {
    d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "CheckCircleOutline"), qh = Se(p.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), Yh = Se(p.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Xh = Se(p.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "ErrorOutline"), Gr = Se(p.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Vi = Se(p.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Ni = Se(p.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), Qh = Se(p.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), Jh = Se(p.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Zh = Se(p.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), em = Se(p.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), tm = Se(p.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), nm = Se(p.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), rr = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function Sc(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function om({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: l, loading: s }) {
    const [a, i] = c.useState(""), [d, u] = c.useState(null), [f, h] = c.useState(null), g = c.useRef(0), m = !a, x = c.useMemo(() => {
      if (!a) return e;
      const C = a.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(C) || M.headerName.toLowerCase().includes(C));
    }, [
      e,
      a
    ]), I = e.filter((C) => C.visible).length, S = (C, M) => {
      C.stopPropagation(), r(e.map((T) => T.path === M ? {
        ...T,
        visible: !T.visible
      } : T));
    }, w = (C) => {
      r(e.map((M) => ({
        ...M,
        visible: C
      })));
    }, F = c.useCallback((C, M) => {
      C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", M), u(M);
    }, []), H = c.useCallback((C, M) => {
      C.preventDefault(), g.current += 1, M !== d && h(M);
    }, [
      d
    ]), v = c.useCallback((C) => {
      C.preventDefault(), g.current -= 1, g.current <= 0 && (g.current = 0, h(null));
    }, []), R = c.useCallback((C) => {
      C.preventDefault(), C.dataTransfer.dropEffect = "move";
    }, []), A = c.useCallback((C, M) => {
      C.preventDefault(), g.current = 0, h(null), u(null);
      const T = C.dataTransfer.getData("text/plain");
      if (!T || T === M) return;
      const O = [
        ...e
      ], G = O.findIndex((D) => D.path === T), E = O.findIndex((D) => D.path === M);
      if (G === -1 || E === -1) return;
      const [P] = O.splice(G, 1);
      O.splice(E, 0, P), r(O);
    }, [
      e,
      r
    ]), $ = c.useCallback(() => {
      g.current = 0, u(null), h(null);
    }, []), y = () => {
      r(e.map((C) => ({
        path: C.path,
        visible: true,
        headerName: C.path.split(".").pop() || C.path
      })));
    };
    return p.jsxs(Ze, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        p.jsxs(yc, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            p.jsx(Xt, {
              size: "small",
              placeholder: ae.t("json_table_search_columns"),
              value: a,
              onChange: (C) => i(C.target.value),
              slotProps: {
                input: {
                  startAdornment: p.jsx(vc, {
                    position: "start",
                    children: p.jsx(Zh, {
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
            p.jsx(_n, {
              title: ae.t("json_table_refresh_columns"),
              children: p.jsx("span", {
                children: p.jsx(Ot, {
                  size: "small",
                  onClick: l,
                  disabled: s,
                  children: p.jsx(Qh, {
                    fontSize: "small"
                  })
                })
              })
            }),
            p.jsx(_n, {
              title: ae.t("json_table_show_all"),
              children: p.jsx(Ot, {
                size: "small",
                onClick: () => w(true),
                children: p.jsx(tm, {
                  fontSize: "small"
                })
              })
            }),
            p.jsx(_n, {
              title: ae.t("json_table_hide_all"),
              children: p.jsx(Ot, {
                size: "small",
                onClick: () => w(false),
                children: p.jsx(nm, {
                  fontSize: "small"
                })
              })
            }),
            p.jsx(_n, {
              title: ae.t("json_table_reset_all"),
              children: p.jsx(Ot, {
                size: "small",
                onClick: y,
                children: p.jsx(Jh, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        p.jsx(Ze, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: x.length === 0 ? p.jsx(Ze, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: p.jsx(Pe, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? ae.t("json_table_no_columns") : ae.t("json_table_no_search_results")
            })
          }) : x.map((C) => {
            const M = t.find((G) => G.path === C.path), T = n === C.path, O = (M == null ? void 0 : M.type) || "string";
            return p.jsx(Fg, {
              onClick: () => o(C.path),
              draggable: m,
              onDragStart: m ? (G) => F(G, C.path) : void 0,
              onDragEnter: m ? (G) => H(G, C.path) : void 0,
              onDragLeave: m ? v : void 0,
              onDragOver: m ? R : void 0,
              onDrop: m ? (G) => A(G, C.path) : void 0,
              onDragEnd: m ? $ : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: m ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: T ? "primary.main" : "divider",
                backgroundColor: T ? "action.selected" : "background.paper",
                opacity: d === C.path ? 0.4 : C.visible ? 1 : 0.55,
                borderTop: f === C.path ? "3px solid" : void 0,
                borderTopColor: f === C.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: T ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: p.jsxs(Ze, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  m && p.jsx(Yh, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  p.jsx(Zr, {
                    checked: C.visible,
                    onClick: (G) => S(G, C.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  p.jsxs(Ze, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      p.jsx(Pe, {
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
                      C.headerName && C.headerName !== C.path && p.jsx(Pe, {
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
                  p.jsx(vo, {
                    label: O,
                    size: "small",
                    sx: {
                      backgroundColor: rr[O] || rr.string,
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
        e.length > 0 && p.jsx(Ze, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: p.jsxs(Pe, {
            variant: "caption",
            color: "text.secondary",
            children: [
              I,
              " / ",
              e.length,
              " ",
              ae.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function Bi({ value: e, onChange: t, label: n }) {
    const o = br(), [r, l] = c.useState(null), s = c.useRef(null), [a, i] = c.useState(null), d = !!r;
    return c.useEffect(() => {
      if (!d || !a) return;
      const u = new ResizeObserver(() => {
        var _a2;
        (_a2 = s.current) == null ? void 0 : _a2.updatePosition();
      });
      return u.observe(a), () => {
        u.disconnect();
      };
    }, [
      d,
      a
    ]), p.jsxs(Ze, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        p.jsxs(Ze, {
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
            l(u.currentTarget);
          },
          children: [
            p.jsx(Pe, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            p.jsx(Ze, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && p.jsx(Ot, {
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: p.jsx(qh, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        p.jsx(kd, {
          action: s,
          open: d,
          anchorEl: r,
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
          children: p.jsx(Ze, {
            ref: i,
            sx: {
              borderRadius: "6px"
            },
            children: p.jsx(Ed, {
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
  function Kr(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function Ic(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: l = false } = t;
    let s = e.toFixed(n);
    if (l) {
      const [a, i] = s.split("."), d = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = i !== void 0 ? `${d}.${i}` : d;
    }
    return `${o}${s}${r}`;
  }
  const rm = [
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
  function Pc(e, t) {
    if (e == null || e === "") return "";
    try {
      let n;
      if (typeof e == "string") n = new Date(e);
      else if (typeof e == "number") n = new Date(e >= 1e12 ? e : e * 1e3);
      else if (e instanceof Date) n = e;
      else return Kr(e);
      if (isNaN(n.getTime())) return Kr(e);
      const o = t || "yyyy-MM-dd", r = (a, i = 2) => String(a).padStart(i, "0"), l = {
        yyyy: String(n.getFullYear()),
        MM: r(n.getMonth() + 1),
        dd: r(n.getDate()),
        HH: r(n.getHours()),
        mm: r(n.getMinutes()),
        ss: r(n.getSeconds()),
        SSS: r(n.getMilliseconds(), 3)
      };
      if (o.includes("xxx")) return n.toISOString();
      let s = o;
      for (const [a, i] of Object.entries(l).sort((d, u) => u[0].length - d[0].length)) s = s.replaceAll(a, i);
      return s;
    } catch {
      return Kr(e);
    }
  }
  function ps(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Kr(e);
  }
  function lm(e, t) {
    if (!e || e.trim() === "") return false;
    try {
      return !!new Function("value", `'use strict'; return (${e});`)(t);
    } catch {
      return false;
    }
  }
  function sm(e) {
    if (!e || e.trim() === "") return null;
    try {
      return new Function("value", `'use strict'; return (${e});`), null;
    } catch (t) {
      return t instanceof Error ? t.message : "Invalid expression";
    }
  }
  function im({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2;
    const [o, r] = c.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = c.useCallback((g) => {
      r((m) => ({
        ...m,
        [g]: !m[g]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", a = c.useCallback((g) => {
      n({
        ...e,
        format: {
          ...e.format,
          ...g
        }
      });
    }, [
      e,
      n
    ]), i = c.useCallback((g, m) => {
      const x = [
        ...e.cellStyle || []
      ];
      x[g] = {
        ...x[g],
        ...m
      }, n({
        ...e,
        cellStyle: x
      });
    }, [
      e,
      n
    ]), d = c.useCallback((g) => {
      const m = [
        ...e.cellStyle || []
      ];
      m.splice(g, 1), n({
        ...e,
        cellStyle: m
      });
    }, [
      e,
      n
    ]), u = c.useCallback(() => {
      const g = {
        condition: "",
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      n({
        ...e,
        cellStyle: [
          ...e.cellStyle || [],
          g
        ]
      });
    }, [
      e,
      n
    ]), f = c.useMemo(() => (t == null ? void 0 : t.min) !== void 0 && typeof t.min == "number" ? t.min + ((t.max || 0) - t.min) * 0.75 : 1234.567, [
      t
    ]), h = c.useMemo(() => t ? Object.values(t.typeCounts).reduce((g, m) => g + m, 0) : 0, [
      t
    ]);
    return p.jsxs(Ze, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        p.jsxs(Ze, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            p.jsx(vo, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: rr[s] || rr.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            p.jsx(Pe, {
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
        p.jsxs(bn, {
          spacing: 1,
          children: [
            p.jsxs($r, {
              expanded: o.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                p.jsx(Lr, {
                  expandIcon: p.jsx(Gr, {}),
                  children: p.jsx(Pe, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: ae.t("json_table_section_basic")
                  })
                }),
                p.jsx(Hr, {
                  children: p.jsxs(bn, {
                    spacing: 2,
                    children: [
                      p.jsx(Xt, {
                        label: ae.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (g) => n({
                          ...e,
                          headerName: g.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      p.jsx(Xt, {
                        label: ae.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (g) => n({
                          ...e,
                          width: g.target.value ? parseInt(g.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: ae.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      p.jsxs(Jl, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          p.jsx(Zl, {
                            children: ae.t("json_table_align")
                          }),
                          p.jsxs(Jr, {
                            label: ae.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (g) => n({
                              ...e,
                              align: g.target.value
                            }),
                            children: [
                              p.jsx(Lt, {
                                value: "left",
                                children: ae.t("json_table_align_left")
                              }),
                              p.jsx(Lt, {
                                value: "center",
                                children: ae.t("json_table_align_center")
                              }),
                              p.jsx(Lt, {
                                value: "right",
                                children: ae.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      p.jsx(jn, {
                        control: p.jsx(Dr, {
                          checked: e.visible,
                          onChange: (g) => n({
                            ...e,
                            visible: g.target.checked
                          })
                        }),
                        label: p.jsx(Pe, {
                          variant: "body2",
                          children: ae.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            p.jsxs($r, {
              expanded: o.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                p.jsx(Lr, {
                  expandIcon: p.jsx(Gr, {}),
                  children: p.jsx(Pe, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: ae.t("json_table_section_formatting")
                  })
                }),
                p.jsx(Hr, {
                  children: p.jsxs(bn, {
                    spacing: 2,
                    children: [
                      (s === "number" || ((_a2 = e.format) == null ? void 0 : _a2.type) === "number") && p.jsxs(p.Fragment, {
                        children: [
                          p.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: ae.t("json_table_number_format")
                          }),
                          p.jsxs(Ze, {
                            children: [
                              p.jsxs(Pe, {
                                variant: "caption",
                                color: "text.secondary",
                                gutterBottom: true,
                                children: [
                                  ae.t("json_table_number_decimals"),
                                  ":",
                                  " ",
                                  ((_b2 = e.format) == null ? void 0 : _b2.numberDecimals) ?? 2
                                ]
                              }),
                              p.jsx(Ud, {
                                value: ((_c2 = e.format) == null ? void 0 : _c2.numberDecimals) ?? 2,
                                onChange: (g, m) => a({
                                  type: "number",
                                  numberDecimals: m
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
                          p.jsx(Xt, {
                            label: ae.t("json_table_number_prefix"),
                            value: ((_d2 = e.format) == null ? void 0 : _d2.numberPrefix) || "",
                            onChange: (g) => a({
                              type: "number",
                              numberPrefix: g.target.value
                            }),
                            size: "small",
                            placeholder: "$, \u20AC, \xA3"
                          }),
                          p.jsx(Xt, {
                            label: ae.t("json_table_number_suffix"),
                            value: ((_e = e.format) == null ? void 0 : _e.numberSuffix) || "",
                            onChange: (g) => a({
                              type: "number",
                              numberSuffix: g.target.value
                            }),
                            size: "small",
                            placeholder: "%, kg, \xB0C"
                          }),
                          p.jsx(jn, {
                            control: p.jsx(Dr, {
                              checked: ((_f2 = e.format) == null ? void 0 : _f2.numberThousandsSeparator) || false,
                              onChange: (g) => a({
                                type: "number",
                                numberThousandsSeparator: g.target.checked
                              }),
                              size: "small"
                            }),
                            label: p.jsx(Pe, {
                              variant: "body2",
                              children: ae.t("json_table_number_thousands")
                            })
                          }),
                          p.jsxs(Ht, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              p.jsx(Pe, {
                                variant: "caption",
                                color: "text.secondary",
                                children: ae.t("json_table_preview")
                              }),
                              p.jsxs(Pe, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  f,
                                  " \u2192",
                                  " ",
                                  Ic(f, {
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
                      (s === "date" || ((_k = e.format) == null ? void 0 : _k.type) === "date") && p.jsxs(p.Fragment, {
                        children: [
                          p.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: ae.t("json_table_date_format")
                          }),
                          (t == null ? void 0 : t.dateFormat) && p.jsx(Xt, {
                            label: ae.t("json_table_date_input_format"),
                            value: t.dateFormat,
                            disabled: true,
                            size: "small",
                            helperText: ae.t("json_table_date_detected_hint")
                          }),
                          p.jsxs(Jl, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              p.jsx(Zl, {
                                children: ae.t("json_table_date_output_format")
                              }),
                              p.jsx(Jr, {
                                label: ae.t("json_table_date_output_format"),
                                value: ((_l2 = e.format) == null ? void 0 : _l2.dateFormat) || "yyyy-MM-dd",
                                onChange: (g) => a({
                                  type: "date",
                                  dateFormat: g.target.value,
                                  dateInputFormat: t == null ? void 0 : t.dateFormat
                                }),
                                children: rm.map((g) => p.jsx(Lt, {
                                  value: g.value,
                                  children: g.label
                                }, g.value))
                              })
                            ]
                          }),
                          p.jsxs(Ht, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              p.jsx(Pe, {
                                variant: "caption",
                                color: "text.secondary",
                                children: ae.t("json_table_preview")
                              }),
                              p.jsx(Pe, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: Pc(/* @__PURE__ */ new Date(), ((_m2 = e.format) == null ? void 0 : _m2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_n2 = e.format) == null ? void 0 : _n2.type) === "boolean") && p.jsxs(p.Fragment, {
                        children: [
                          p.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: ae.t("json_table_boolean_format")
                          }),
                          p.jsx(Xt, {
                            label: ae.t("json_table_boolean_true"),
                            value: ((_o2 = e.format) == null ? void 0 : _o2.booleanTrue) || "",
                            onChange: (g) => a({
                              type: "boolean",
                              booleanTrue: g.target.value
                            }),
                            size: "small",
                            placeholder: "Yes, On, \u2713, Active"
                          }),
                          p.jsx(Xt, {
                            label: ae.t("json_table_boolean_false"),
                            value: ((_p2 = e.format) == null ? void 0 : _p2.booleanFalse) || "",
                            onChange: (g) => a({
                              type: "boolean",
                              booleanFalse: g.target.value
                            }),
                            size: "small",
                            placeholder: "No, Off, \u2717, Inactive"
                          }),
                          p.jsxs(Ht, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              p.jsx(Pe, {
                                variant: "caption",
                                color: "text.secondary",
                                children: ae.t("json_table_preview")
                              }),
                              p.jsxs(bn, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                  mt: 0.5
                                },
                                children: [
                                  p.jsxs(Pe, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      ps(true, (_q = e.format) == null ? void 0 : _q.booleanTrue, (_r2 = e.format) == null ? void 0 : _r2.booleanFalse)
                                    ]
                                  }),
                                  p.jsxs(Pe, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      ps(false, (_s2 = e.format) == null ? void 0 : _s2.booleanTrue, (_t = e.format) == null ? void 0 : _t.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && !e.format && p.jsx(Pe, {
                        variant: "body2",
                        color: "text.secondary",
                        children: ae.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            p.jsxs($r, {
              expanded: o.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                p.jsx(Lr, {
                  expandIcon: p.jsx(Gr, {}),
                  children: p.jsxs(Ze, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    },
                    children: [
                      p.jsx(Pe, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: ae.t("json_table_section_styling")
                      }),
                      (((_u2 = e.cellStyle) == null ? void 0 : _u2.length) ?? 0) > 0 && p.jsx(vo, {
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
                p.jsx(Hr, {
                  children: p.jsxs(bn, {
                    spacing: 1.5,
                    children: [
                      (e.cellStyle || []).map((g, m) => {
                        const x = sm(g.condition), I = g.condition.trim() !== "";
                        return p.jsx(Ht, {
                          variant: "outlined",
                          sx: {
                            p: 1.5
                          },
                          children: p.jsxs(bn, {
                            spacing: 1.5,
                            children: [
                              p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center"
                                },
                                children: [
                                  p.jsxs(Pe, {
                                    variant: "caption",
                                    sx: {
                                      fontWeight: 500
                                    },
                                    children: [
                                      ae.t("json_table_rule"),
                                      " ",
                                      m + 1
                                    ]
                                  }),
                                  p.jsx(_n, {
                                    title: ae.t("json_table_delete_rule"),
                                    children: p.jsx(Ot, {
                                      size: "small",
                                      onClick: () => d(m),
                                      color: "error",
                                      children: p.jsx(Fd, {
                                        fontSize: "small"
                                      })
                                    })
                                  })
                                ]
                              }),
                              p.jsx(Xt, {
                                label: ae.t("json_table_condition"),
                                value: g.condition,
                                onChange: (S) => i(m, {
                                  condition: S.target.value
                                }),
                                size: "small",
                                fullWidth: true,
                                placeholder: "value > 100",
                                error: I && x !== null,
                                helperText: I && x ? x : ae.t("json_table_condition_hint"),
                                slotProps: {
                                  input: {
                                    endAdornment: I ? x ? p.jsx(_n, {
                                      title: x,
                                      children: p.jsx(Xh, {
                                        fontSize: "small",
                                        color: "error"
                                      })
                                    }) : p.jsx(_n, {
                                      title: ae.t("json_table_condition_valid"),
                                      children: p.jsx(Kh, {
                                        fontSize: "small",
                                        color: "success"
                                      })
                                    }) : null
                                  }
                                }
                              }),
                              p.jsxs(bn, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "flex-start",
                                children: [
                                  p.jsx(Bi, {
                                    label: ae.t("json_table_bg_color"),
                                    value: g.backgroundColor || "",
                                    onChange: (S) => i(m, {
                                      backgroundColor: S
                                    })
                                  }),
                                  p.jsx(Bi, {
                                    label: ae.t("json_table_text_color"),
                                    value: g.textColor || "",
                                    onChange: (S) => i(m, {
                                      textColor: S
                                    })
                                  })
                                ]
                              }),
                              p.jsxs(bn, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  p.jsx(jn, {
                                    control: p.jsx(Zr, {
                                      checked: g.fontWeight === "bold",
                                      onChange: (S) => i(m, {
                                        fontWeight: S.target.checked ? "bold" : "normal"
                                      }),
                                      icon: p.jsx(Vi, {}),
                                      checkedIcon: p.jsx(Vi, {}),
                                      size: "small"
                                    }),
                                    label: p.jsx(Pe, {
                                      variant: "caption",
                                      children: ae.t("json_table_bold")
                                    })
                                  }),
                                  p.jsx(jn, {
                                    control: p.jsx(Zr, {
                                      checked: g.fontStyle === "italic",
                                      onChange: (S) => i(m, {
                                        fontStyle: S.target.checked ? "italic" : "normal"
                                      }),
                                      icon: p.jsx(Ni, {}),
                                      checkedIcon: p.jsx(Ni, {}),
                                      size: "small"
                                    }),
                                    label: p.jsx(Pe, {
                                      variant: "caption",
                                      children: ae.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (g.backgroundColor || g.textColor) && p.jsx(Ht, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  ...g.backgroundColor ? Gn(g.backgroundColor) ? {
                                    background: Gn(g.backgroundColor)
                                  } : {
                                    backgroundColor: g.backgroundColor
                                  } : {
                                    backgroundColor: "transparent"
                                  },
                                  fontWeight: g.fontWeight || "normal",
                                  fontStyle: g.fontStyle || "normal"
                                },
                                children: p.jsx(Pe, {
                                  variant: "body2",
                                  sx: {
                                    ...g.textColor ? Gn(g.textColor) ? {
                                      background: Gn(g.textColor),
                                      backgroundClip: "text",
                                      WebkitBackgroundClip: "text",
                                      color: "transparent"
                                    } : {
                                      color: g.textColor
                                    } : {
                                      color: "inherit"
                                    }
                                  },
                                  children: ae.t("json_table_sample_value")
                                })
                              })
                            ]
                          })
                        }, m);
                      }),
                      p.jsx(ar, {
                        startIcon: p.jsx(Uh, {}),
                        onClick: u,
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                        children: ae.t("json_table_add_style_rule")
                      })
                    ]
                  })
                })
              ]
            }),
            p.jsxs($r, {
              expanded: o.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                p.jsx(Lr, {
                  expandIcon: p.jsx(Gr, {}),
                  children: p.jsx(Pe, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: ae.t("json_table_section_advanced")
                  })
                }),
                p.jsx(Hr, {
                  children: p.jsxs(bn, {
                    spacing: 2,
                    children: [
                      p.jsx(jn, {
                        control: p.jsx(Dr, {
                          checked: e.sortable ?? true,
                          onChange: (g) => n({
                            ...e,
                            sortable: g.target.checked
                          }),
                          size: "small"
                        }),
                        label: p.jsx(Pe, {
                          variant: "body2",
                          children: ae.t("json_table_sortable")
                        })
                      }),
                      p.jsx(jn, {
                        control: p.jsx(Dr, {
                          checked: e.filterable ?? false,
                          onChange: (g) => n({
                            ...e,
                            filterable: g.target.checked
                          }),
                          size: "small"
                        }),
                        label: p.jsx(Pe, {
                          variant: "body2",
                          children: ae.t("json_table_filterable")
                        })
                      }),
                      t && p.jsxs(Ht, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          p.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: ae.t("json_table_analysis_info")
                          }),
                          p.jsxs(bn, {
                            spacing: 0.5,
                            children: [
                              p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: ae.t("json_table_type_label")
                                  }),
                                  p.jsx(vo, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: rr[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: ae.t("json_table_confidence")
                                  }),
                                  p.jsxs(Pe, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: ae.t("json_table_nulls")
                                  }),
                                  p.jsxs(Pe, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      h > 0 && ` (${Math.round(t.nullCount / h * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: ae.t("json_table_distinct")
                                  }),
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: ae.t("json_table_range")
                                  }),
                                  p.jsxs(Pe, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && p.jsxs(Ze, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  p.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: ae.t("json_table_date_input_format")
                                  }),
                                  p.jsx(Pe, {
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
  const am = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, cm = /^\d{4}-\d{2}-\d{2}$/, um = /^(\d{2})\.(\d{2})\.(\d{4})$/, dm = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, pm = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, fm = /^(\d{2})\/(\d{2})\/(\d{4})$/, gm = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, hm = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function _r(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function Al(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Vr(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const mm = [
    {
      regex: am,
      format: "ISO-8601"
    },
    {
      regex: cm,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return _r(n, t);
      }
    },
    {
      regex: pm,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return _r(t, n) && Vr(o, r, l);
      }
    },
    {
      regex: dm,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return _r(t, n) && Vr(o, r);
      }
    },
    {
      regex: um,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return _r(t, n);
      }
    },
    {
      regex: hm,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return Al(t, n) && Vr(o, r, l);
      }
    },
    {
      regex: gm,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Al(t, n) && Vr(o, r);
      }
    },
    {
      regex: fm,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Al(t, n);
      }
    }
  ];
  function bm(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of mm) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Cm(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function wm(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Cm(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = bm(e);
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
  function xm(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function vm(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function ym(e) {
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
  function Wi(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Sm(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], l = o[2], s = o[3], a = o[4] || "00", i = o[5] || "00", d = o[6] || "00";
        return `${s}-${l}-${r}T${a}:${i}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], l = o[2], s = o[3], a = o[4] || "00", i = o[5] || "00", d = o[6] || "00";
        return `${s}-${r}-${l}T${a}:${i}:${d}`;
      }
    }
    return null;
  }
  function Im(e, t, n = 100) {
    const o = t.length, r = /* @__PURE__ */ new Map();
    for (const l of e) r.set(l, ym(l));
    for (const l of t) for (const s of e) {
      const a = r.get(s), i = l[s], d = wm(i);
      if (Wi(a.typeCounts, d.type), d.type === "null") {
        a.nullCount++;
        continue;
      }
      if (a.nonNullCount++, d.dateFormat && Wi(a.dateFormatCounts, d.dateFormat), a.distinctValues.size < n && a.distinctValues.add(i), typeof i == "number" && Number.isFinite(i) && ((a.numMin === void 0 || i < a.numMin) && (a.numMin = i), (a.numMax === void 0 || i > a.numMax) && (a.numMax = i)), typeof i == "string") {
        const u = i.length;
        (a.strLenMin === void 0 || u < a.strLenMin) && (a.strLenMin = u), (a.strLenMax === void 0 || u > a.strLenMax) && (a.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = Sm(i, d.dateFormat);
        u !== null && ((a.dateMin === void 0 || u < a.dateMin) && (a.dateMin = u), (a.dateMax === void 0 || u > a.dateMax) && (a.dateMax = u));
      }
    }
    return e.map((l) => {
      const s = r.get(l), a = xm(s.typeCounts), i = a === "date" ? vm(s.dateFormatCounts) : void 0, d = a === "date" ? s.typeCounts.date || 0 : s.typeCounts[a] || 0, u = o > 0 ? Math.round(d / o * 100) / 100 : 0, f = {
        path: l,
        type: a,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: u
      };
      return i && (f.dateFormat = i), a === "number" && (s.numMin !== void 0 && (f.min = s.numMin), s.numMax !== void 0 && (f.max = s.numMax)), a === "date" && (s.dateMin !== void 0 && (f.min = s.dateMin), s.dateMax !== void 0 && (f.max = s.dateMax)), (a === "string" || a === "mixed") && (s.strLenMin !== void 0 && (f.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (f.stringLengthMax = s.strLenMax)), f;
    });
  }
  function tl(e, t, n, o, r, l, s, a) {
    if (l > a.maxDepth && (a.maxDepth = l), l > s) {
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
      for (let i = 0; i < e.length; i++) {
        i > a.maxArrayIndex && (a.maxArrayIndex = i);
        const d = `${t}[${i}]`;
        tl(e[i], d, n, o, r, l + 1, s, a);
      }
      return;
    }
    if (typeof e == "object") {
      if (r.has(e)) {
        n[t] = "[Circular]", o.add(t);
        return;
      }
      r.add(e);
      const i = Object.keys(e);
      if (i.length === 0) {
        n[t] = null, o.add(t);
        return;
      }
      for (const d of i) {
        const u = t ? `${t}.${d}` : d;
        tl(e[d], u, n, o, r, l + 1, s, a);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Pm(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const a = {}, i = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const d of Object.keys(s)) tl(s[d], d, a, n, i, 1, t, o);
      else tl(s, "_value", a, n, i, 0, t, o);
      r.push(a);
    }
    const l = Mm([
      ...n
    ]);
    for (const s of r) for (const a of l) a in s || (s[a] = null);
    return {
      paths: l,
      rows: r,
      maxDepth: o.maxDepth,
      maxArrayIndex: o.maxArrayIndex
    };
  }
  function Mm(e) {
    return e.sort((t, n) => {
      const o = Ui(t), r = Ui(n), l = Math.min(o.length, r.length);
      for (let s = 0; s < l; s++) {
        const a = o[s], i = r[s], d = Ki(a), u = Ki(i);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (a !== i) return a.localeCompare(i);
      }
      return o.length - r.length;
    });
  }
  function Ui(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], r = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (r) {
        r[1] && n.push(r[1]);
        const l = r[2].match(/\[\d+\]/g);
        l && n.push(...l);
      } else n.push(t);
      return n;
    });
  }
  function Ki(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const km = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Mc(e, t) {
    const n = performance.now(), o = {
      ...km,
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
    const r = Pm(e, o.maxDepth), l = Im(r.paths, r.rows, o.maxDistinct), s = r.paths.length * r.rows.length, a = l.reduce((u, f) => u + f.nullCount, 0), i = s > 0 ? Math.round(a / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: l,
      rows: r.rows,
      meta: {
        rowCount: r.rows.length,
        columnCount: l.length,
        maxDepth: r.maxDepth,
        maxArrayIndex: r.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: a,
        nullPercentage: i,
        analysisTimeMs: d
      }
    };
  }
  function Em(e, t) {
    return c.useMemo(() => Mc(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Fm({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: l, socket: s }) {
    const [a, i] = c.useState(n), [d, u] = c.useState(null), [f, h] = c.useState(false), [g, m] = c.useState([]), [x, I] = c.useState(false), [S, w] = c.useState(false), F = c.useRef(false), H = c.useRef(() => Promise.resolve()), v = c.useRef(n);
    c.useEffect(() => {
      e && (i(n), v.current = n, h(false), u(n.length > 0 ? n[0].path : null), F.current = false);
    }, [
      e,
      n
    ]), c.useEffect(() => {
      e && !F.current && (F.current = true, H.current());
    }, [
      e
    ]);
    const R = c.useCallback(async () => {
      I(true);
      try {
        const O = l.oid;
        if (!O) {
          I(false);
          return;
        }
        const G = await s.getState(O);
        if ((G == null ? void 0 : G.val) === null || (G == null ? void 0 : G.val) === void 0) {
          I(false);
          return;
        }
        let E;
        const P = G.val;
        if (typeof P == "string") try {
          const U = JSON.parse(P);
          E = Array.isArray(U) ? U : [
            U
          ];
        } catch {
          I(false);
          return;
        }
        else if (Array.isArray(P)) E = P;
        else if (typeof P == "object" && P !== null) E = [
          P
        ];
        else {
          I(false);
          return;
        }
        const D = l.tableMaxDepth || 10, L = Mc(E, {
          maxDepth: D
        });
        m(L.columns);
        const z = new Map(v.current.map((U) => [
          U.path,
          U
        ])), _ = new Set(L.columns.map((U) => U.path)), j = v.current.filter((U) => _.has(U.path)), V = L.columns.filter((U) => !z.has(U.path)).map((U) => ({
          path: U.path,
          visible: true,
          headerName: U.path.split(".").pop() || U.path
        })), K = [
          ...j,
          ...V
        ], W = K.length !== v.current.length || K.some((U) => !z.has(U.path));
        i(K), v.current = K, W && h(true), !d && K.length > 0 && u(K[0].path);
      } catch {
      } finally {
        I(false);
      }
    }, [
      l,
      s,
      d
    ]);
    H.current = R;
    const A = c.useCallback((O) => {
      i((G) => G.map((E) => E.path === O.path ? O : E)), v.current = v.current.map((G) => G.path === O.path ? O : G), h(true);
    }, []), $ = c.useCallback((O) => {
      i(O), v.current = O, h(true);
    }, []), y = c.useCallback(() => {
      o(a), h(false), t();
    }, [
      a,
      o,
      t
    ]), C = c.useCallback((O, G) => {
      if (G === "backdropClick" && f) {
        w(true);
        return;
      }
      t();
    }, [
      f,
      t
    ]), M = d ? a.find((O) => O.path === d) : null, T = d ? g.find((O) => O.path === d) : void 0;
    return p.jsxs(oc, {
      theme: r,
      children: [
        p.jsxs(Kd, {
          open: e,
          onClose: C,
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
            p.jsx(qd, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              children: p.jsxs(Ze, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  p.jsx(Pe, {
                    variant: "h6",
                    children: ae.t("json_table_column_editor_title")
                  }),
                  p.jsx(Ot, {
                    onClick: () => C(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    children: p.jsx(Xd, {})
                  })
                ]
              })
            }),
            p.jsxs(Yd, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                overflow: "hidden"
              },
              children: [
                p.jsx(Ze, {
                  sx: {
                    width: "40%",
                    minWidth: 280,
                    borderRight: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: p.jsx(om, {
                    columns: a,
                    discoveredColumns: g,
                    selectedPath: d,
                    onSelect: u,
                    onChange: $,
                    onRefresh: R,
                    loading: x
                  })
                }),
                p.jsx(Ze, {
                  sx: {
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  },
                  children: M ? p.jsx(im, {
                    column: M,
                    discoveredColumn: T,
                    onChange: A
                  }) : p.jsx(Ze, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%"
                    },
                    children: p.jsx(Pe, {
                      variant: "body2",
                      color: "text.secondary",
                      children: a.length > 0 ? ae.t("json_table_select_column") : ae.t("json_table_no_columns")
                    })
                  })
                })
              ]
            }),
            p.jsxs($g, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                p.jsx(ar, {
                  onClick: () => C(),
                  children: ae.t("cancel")
                }),
                p.jsx(ar, {
                  variant: "contained",
                  onClick: y,
                  disabled: !f,
                  children: ae.t("save")
                })
              ]
            })
          ]
        }),
        p.jsx(hh, {
          open: S,
          autoHideDuration: 3e3,
          onClose: () => w(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: p.jsx(Rp, {
            severity: "warning",
            onClose: () => w(false),
            children: ae.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Tm(e, t, n, o) {
    const r = e.name || "columnConfig", l = o.context.theme, [s, a] = c.useState(false), i = c.useMemo(() => Sc(t[r]), [
      t,
      r
    ]), d = i.filter((m) => m.visible).length, u = i.length, f = i.some((m) => m.format), h = i.some((m) => m.cellStyle && m.cellStyle.length > 0), g = c.useCallback((m) => {
      n({
        [r]: JSON.stringify(m)
      });
    }, [
      r,
      n
    ]);
    return p.jsx(oc, {
      theme: l,
      children: p.jsxs(Ze, {
        sx: {
          mt: 1,
          width: "100%"
        },
        children: [
          p.jsx(ar, {
            variant: "outlined",
            startIcon: p.jsx(em, {}),
            onClick: () => a(true),
            fullWidth: true,
            sx: {
              textTransform: "none"
            },
            children: ae.t("json_table_configure_columns")
          }),
          u > 0 && p.jsxs(Pe, {
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
              ae.t("json_table_columns_visible"),
              f && ` \xB7 ${ae.t("json_table_has_formatting")}`,
              h && ` \xB7 ${ae.t("json_table_has_styling")}`
            ]
          }),
          p.jsx(Fm, {
            open: s,
            onClose: () => a(false),
            columns: i,
            onSave: g,
            theme: l,
            data: t,
            socket: o.context.socket
          })
        ]
      })
    });
  }
  const Om = () => [
    {
      label: "",
      type: "custom",
      component: () => p.jsx(kn, {
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
      component: () => p.jsx(kn, {
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
      component: () => p.jsx(kn, {
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
      component: () => p.jsx(kn, {
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
      component: () => p.jsx(kn, {
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
      component: () => p.jsx(kn, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => p.jsx(Hl, {
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
      component: (e, t, n, o) => p.jsx(Hl, {
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
      component: () => p.jsx(kn, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => p.jsx(Hl, {
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
      component: () => p.jsx(kn, {
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
      component: () => p.jsx(kn, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Tm
    }
  ], kc = c.createContext(void 0);
  function Ee() {
    const e = c.useContext(kc);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const Ec = c.createContext(void 0), ie = () => {
    const e = c.useContext(Ec);
    if (!e) throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
    return e;
  }, Dm = parseInt(c.version, 10), ze = (e) => {
    if (Dm >= 19) {
      const t = (n) => e(n, n.ref ?? null);
      return t.displayName = e.displayName ?? e.name, t;
    }
    return c.forwardRef(e);
  };
  var nl = /* @__PURE__ */ Symbol("NOT_FOUND");
  function Rm(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
  }
  function $m(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
  }
  function Hm(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every((n) => typeof n == "function")) {
      const n = e.map((o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o).join(", ");
      throw new TypeError(`${t}[${n}]`);
    }
  }
  var qi = (e) => Array.isArray(e) ? e : [
    e
  ];
  function Lm(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return Hm(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
  }
  function jm(e, t) {
    const n = [], { length: o } = e;
    for (let r = 0; r < o; r++) n.push(e[r].apply(null, t));
    return n;
  }
  function Am(e) {
    let t;
    return {
      get(n) {
        return t && e(t.key, n) ? t.value : nl;
      },
      put(n, o) {
        t = {
          key: n,
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
  function zm(e, t) {
    let n = [];
    function o(a) {
      const i = n.findIndex((d) => t(a, d.key));
      if (i > -1) {
        const d = n[i];
        return i > 0 && (n.splice(i, 1), n.unshift(d)), d.value;
      }
      return nl;
    }
    function r(a, i) {
      o(a) === nl && (n.unshift({
        key: a,
        value: i
      }), n.length > e && n.pop());
    }
    function l() {
      return n;
    }
    function s() {
      n = [];
    }
    return {
      get: o,
      put: r,
      getEntries: l,
      clear: s
    };
  }
  var Gm = (e, t) => e === t;
  function _m(e) {
    return function(n, o) {
      if (n === null || o === null || n.length !== o.length) return false;
      const { length: r } = n;
      for (let l = 0; l < r; l++) if (!e(n[l], o[l])) return false;
      return true;
    };
  }
  function Fc(e, t) {
    const n = typeof t == "object" ? t : {
      equalityCheck: t
    }, { equalityCheck: o = Gm, maxSize: r = 1, resultEqualityCheck: l } = n, s = _m(o);
    let a = 0;
    const i = r <= 1 ? Am(s) : zm(r, s);
    function d() {
      let u = i.get(arguments);
      if (u === nl) {
        if (u = e.apply(null, arguments), a++, l) {
          const h = i.getEntries().find((g) => l(g.value, u));
          h && (u = h.value, a !== 0 && a--);
        }
        i.put(arguments, u);
      }
      return u;
    }
    return d.clearCache = () => {
      i.clear(), d.resetResultsCount();
    }, d.resultsCount = () => a, d.resetResultsCount = () => {
      a = 0;
    }, d;
  }
  var Vm = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  }, Nm = typeof WeakRef < "u" ? WeakRef : Vm, Bm = 0, Yi = 1;
  function Nr() {
    return {
      s: Bm,
      v: void 0,
      o: null,
      p: null
    };
  }
  function Tc(e, t = {}) {
    let n = Nr();
    const { resultEqualityCheck: o } = t;
    let r, l = 0;
    function s() {
      var _a2;
      let a = n;
      const { length: i } = arguments;
      for (let f = 0, h = i; f < h; f++) {
        const g = arguments[f];
        if (typeof g == "function" || typeof g == "object" && g !== null) {
          let m = a.o;
          m === null && (a.o = m = /* @__PURE__ */ new WeakMap());
          const x = m.get(g);
          x === void 0 ? (a = Nr(), m.set(g, a)) : a = x;
        } else {
          let m = a.p;
          m === null && (a.p = m = /* @__PURE__ */ new Map());
          const x = m.get(g);
          x === void 0 ? (a = Nr(), m.set(g, a)) : a = x;
        }
      }
      const d = a;
      let u;
      if (a.s === Yi) u = a.v;
      else if (u = e.apply(null, arguments), l++, o) {
        const f = ((_a2 = r == null ? void 0 : r.deref) == null ? void 0 : _a2.call(r)) ?? r;
        f != null && o(f, u) && (u = f, l !== 0 && l--), r = typeof u == "object" && u !== null || typeof u == "function" ? new Nm(u) : u;
      }
      return d.s = Yi, d.v = u, u;
    }
    return s.clearCache = () => {
      n = Nr(), s.resetResultsCount();
    }, s.resultsCount = () => l, s.resetResultsCount = () => {
      l = 0;
    }, s;
  }
  function Oc(e, ...t) {
    const n = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: t
    } : e, o = (...r) => {
      let l = 0, s = 0, a, i = {}, d = r.pop();
      typeof d == "object" && (i = d, d = r.pop()), Rm(d, `createSelector expects an output function after the inputs, but received: [${typeof d}]`);
      const u = {
        ...n,
        ...i
      }, { memoize: f, memoizeOptions: h = [], argsMemoize: g = Tc, argsMemoizeOptions: m = [] } = u, x = qi(h), I = qi(m), S = Lm(r), w = f(function() {
        return l++, d.apply(null, arguments);
      }, ...x), F = g(function() {
        s++;
        const v = jm(S, arguments);
        return a = w.apply(null, v), a;
      }, ...I);
      return Object.assign(F, {
        resultFunc: d,
        memoizedResultFunc: w,
        dependencies: S,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => a,
        recomputations: () => l,
        resetRecomputations: () => {
          l = 0;
        },
        memoize: f,
        argsMemoize: g
      });
    };
    return Object.assign(o, {
      withTypes: () => o
    }), o;
  }
  var Dc = Oc(Tc), Wm = Object.assign((e, t = Dc) => {
    $m(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const n = Object.keys(e), o = n.map((l) => e[l]);
    return t(o, (...l) => l.reduce((s, a, i) => (s[n[i]] = a, s), {}));
  }, {
    withTypes: () => Wm
  });
  const Um = Object.is;
  function Rc(e, t) {
    if (e === t) return true;
    if (!(e instanceof Object) || !(t instanceof Object)) return false;
    let n = 0, o = 0;
    for (const r in e) if (n += 1, !Um(e[r], t[r]) || !(r in t)) return false;
    for (const r in t) o += 1;
    return n === o;
  }
  var $c = {
    exports: {}
  }, Hc = {};
  var Eo = c;
  function Km(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var qm = typeof Object.is == "function" ? Object.is : Km, Ym = Eo.useState, Xm = Eo.useEffect, Qm = Eo.useLayoutEffect, Jm = Eo.useDebugValue;
  function Zm(e, t) {
    var n = t(), o = Ym({
      inst: {
        value: n,
        getSnapshot: t
      }
    }), r = o[0].inst, l = o[1];
    return Qm(function() {
      r.value = n, r.getSnapshot = t, zl(r) && l({
        inst: r
      });
    }, [
      e,
      n,
      t
    ]), Xm(function() {
      return zl(r) && l({
        inst: r
      }), e(function() {
        zl(r) && l({
          inst: r
        });
      });
    }, [
      e
    ]), Jm(n), n;
  }
  function zl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !qm(e, n);
    } catch {
      return true;
    }
  }
  function eb(e, t) {
    return t();
  }
  var tb = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? eb : Zm;
  Hc.useSyncExternalStore = Eo.useSyncExternalStore !== void 0 ? Eo.useSyncExternalStore : tb;
  $c.exports = Hc;
  var As = $c.exports;
  function Lc(e) {
    return e.acceptsApiRef;
  }
  function Xi(e, t) {
    return Lc(t) ? t(e) : t(e.current.state);
  }
  function Gl(e, t, n, o) {
    return Lc(t) ? t(e, n) : t(e.current.state, o);
  }
  const jc = Object.is, zs = Rc, nb = (e, t) => e === t ? true : e.length === t.length && e.every((n, o) => n === t[o]), ob = (e, t) => {
    let n = Object.is;
    return t instanceof Array ? n = nb : t instanceof Object && (n = zs), n(e, t);
  }, Ac = () => ({
    state: null,
    equals: null,
    selector: null,
    args: void 0
  }), ol = [], zc = () => null, X = (e, t, n = jc) => {
    const o = In(Ac), r = o.current.selector !== null, [l, s] = c.useState(r ? null : Xi(e, t));
    o.current.state = l, o.current.equals = n, o.current.selector = t;
    const a = c.useCallback(() => (o.current.subscription || (o.current.subscription = e.current.store.subscribe(() => {
      const d = Xi(e, o.current.selector);
      o.current.equals(o.current.state, d) || (o.current.state = d, s(d));
    })), null), ol), i = c.useCallback(() => () => {
      o.current.subscription && (o.current.subscription(), o.current.subscription = void 0);
    }, ol);
    return As.useSyncExternalStore(i, a, zc), l;
  }, dr = (e, t, n = void 0, o = jc) => {
    const r = In(Ac), l = r.current.selector !== null, [s, a] = c.useState(l ? null : Gl(e, t, n, e.current.instanceId));
    r.current.state = s, r.current.equals = o, r.current.selector = t;
    const i = r.current.args;
    if (r.current.args = n, l && !ob(i, n)) {
      const f = Gl(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, f) || (r.current.state = f, a(f));
    }
    const d = c.useCallback(() => (r.current.subscription || (r.current.subscription = e.current.store.subscribe(() => {
      const f = Gl(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, f) || (r.current.state = f, a(f));
    })), null), ol), u = c.useCallback(() => () => {
      r.current.subscription && (r.current.subscription(), r.current.subscription = void 0);
    }, ol);
    return As.useSyncExternalStore(u, d, zc), s;
  }, rb = Oc({
    memoize: Fc,
    memoizeOptions: {
      maxSize: 1,
      equalityCheck: Object.is
    }
  }), Qi = /* @__PURE__ */ new WeakMap();
  function pn(e) {
    return "current" in e && "instanceId" in e.current;
  }
  const fn = {
    id: "default"
  }, we = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d) => {
      const u = pn(i), f = d ?? (u ? i.current.instanceId : fn), h = u ? i.current.state : i, g = e(h, f), m = t(h, f), x = n(h, f), I = o(h, f), S = r(h, f);
      return l(g, m, x, I, S);
    };
    else if (e && t && n && o && r) a = (i, d) => {
      const u = pn(i), f = d ?? (u ? i.current.instanceId : fn), h = u ? i.current.state : i, g = e(h, f), m = t(h, f), x = n(h, f), I = o(h, f);
      return r(g, m, x, I);
    };
    else if (e && t && n && o) a = (i, d) => {
      const u = pn(i), f = d ?? (u ? i.current.instanceId : fn), h = u ? i.current.state : i, g = e(h, f), m = t(h, f), x = n(h, f);
      return o(g, m, x);
    };
    else if (e && t && n) a = (i, d) => {
      const u = pn(i), f = d ?? (u ? i.current.instanceId : fn), h = u ? i.current.state : i, g = e(h, f), m = t(h, f);
      return n(g, m);
    };
    else if (e && t) a = (i, d) => {
      const u = pn(i), f = d ?? (u ? i.current.instanceId : fn), h = u ? i.current.state : i, g = e(h, f);
      return t(g);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, yr = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d, u) => {
      const f = pn(i), h = u ?? (f ? i.current.instanceId : fn), g = f ? i.current.state : i, m = e(g, d, h), x = t(g, d, h), I = n(g, d, h), S = o(g, d, h), w = r(g, d, h);
      return l(m, x, I, S, w, d);
    };
    else if (e && t && n && o && r) a = (i, d, u) => {
      const f = pn(i), h = u ?? (f ? i.current.instanceId : fn), g = f ? i.current.state : i, m = e(g, d, h), x = t(g, d, h), I = n(g, d, h), S = o(g, d, h);
      return r(m, x, I, S, d);
    };
    else if (e && t && n && o) a = (i, d, u) => {
      const f = pn(i), h = u ?? (f ? i.current.instanceId : fn), g = f ? i.current.state : i, m = e(g, d, h), x = t(g, d, h), I = n(g, d, h);
      return o(m, x, I, d);
    };
    else if (e && t && n) a = (i, d, u) => {
      const f = pn(i), h = u ?? (f ? i.current.instanceId : fn), g = f ? i.current.state : i, m = e(g, d, h), x = t(g, d, h);
      return n(m, x, d);
    };
    else if (e && t) a = (i, d, u) => {
      const f = pn(i), h = u ?? (f ? i.current.instanceId : fn), g = f ? i.current.state : i, m = e(g, d, h);
      return t(m, d);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, qe = (...e) => {
    const t = (n, o) => {
      const r = pn(n), l = r ? n.current.instanceId : o ?? fn, s = r ? n.current.state : n, a = Qi.get(l), i = a ?? /* @__PURE__ */ new Map(), d = i == null ? void 0 : i.get(e);
      if (i && d) return d(s, l);
      const u = rb(...e);
      return a || Qi.set(l, i), i.set(e, u), u(s, l);
    };
    return t.acceptsApiRef = true, t;
  }, Ct = (e) => e.dimensions, bl = we(Ct, (e) => e.columnsTotalWidth), Gs = (e) => e.dimensions.rowHeight, lb = (e) => e.dimensions.contentSize.height, sb = (e) => e.dimensions.hasScrollX, ib = (e) => e.dimensions.hasScrollY, Gc = (e) => e.dimensions.columnsTotalWidth < e.dimensions.viewportOuterSize.width, ab = (e) => e.dimensions.headerHeight, cb = (e) => e.dimensions.groupHeaderHeight, _c = (e) => e.dimensions.hasScrollY ? e.dimensions.scrollbarSize : 0, ub = (e) => {
    const t = e.dimensions.hasScrollX ? e.dimensions.scrollbarSize : 0, n = e.dimensions.viewportOuterSize.height - e.dimensions.minimumSize.height > 0;
    return !(t === 0 && !n);
  };
  function On(e) {
    return c.memo(e, Rc);
  }
  const db = {
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
  function De(e) {
    return ut("MuiDataGrid", e);
  }
  const k = at("MuiDataGrid", [
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
  ]), Ji = 1e3;
  class pb {
    constructor(t = Ji) {
      this.timeouts = /* @__PURE__ */ new Map(), this.cleanupTimeout = Ji, this.cleanupTimeout = t;
    }
    register(t, n, o) {
      this.timeouts || (this.timeouts = /* @__PURE__ */ new Map());
      const r = setTimeout(() => {
        typeof n == "function" && n(), this.timeouts.delete(o.cleanupToken);
      }, this.cleanupTimeout);
      this.timeouts.set(o.cleanupToken, r);
    }
    unregister(t) {
      const n = this.timeouts.get(t.cleanupToken);
      n && (this.timeouts.delete(t.cleanupToken), clearTimeout(n));
    }
    reset() {
      this.timeouts && (this.timeouts.forEach((t, n) => {
        this.unregister({
          cleanupToken: n
        });
      }), this.timeouts = void 0);
    }
  }
  class fb {
    constructor() {
      this.registry = new FinalizationRegistry((t) => {
        typeof t == "function" && t();
      });
    }
    register(t, n, o) {
      this.registry.register(t, n, o);
    }
    unregister(t) {
      this.registry.unregister(t);
    }
    reset() {
    }
  }
  var on = (function(e) {
    return e.DataGrid = "DataGrid", e.DataGridPro = "DataGridPro", e.DataGridPremium = "DataGridPremium", e;
  })(on || {});
  class gb {
  }
  function hb(e) {
    let t = 0;
    return function(o, r, l, s) {
      e.registry === null && (e.registry = typeof FinalizationRegistry < "u" ? new fb() : new pb());
      const [a] = c.useState(new gb()), i = c.useRef(null), d = c.useRef(null);
      d.current = l;
      const u = c.useRef(null);
      if (!i.current && d.current) {
        const f = (h, g, m) => {
          var _a2;
          g && !g.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, h, g, m));
        };
        i.current = o.current.subscribeEvent(r, f, s), t += 1, u.current = {
          cleanupToken: t
        }, e.registry.register(a, () => {
          var _a2;
          (_a2 = i.current) == null ? void 0 : _a2.call(i), i.current = null, u.current = null;
        }, u.current);
      } else !d.current && i.current && (i.current(), i.current = null, u.current && (e.registry.unregister(u.current), u.current = null));
      c.useEffect(() => {
        if (!i.current && d.current) {
          const f = (h, g, m) => {
            var _a2;
            g && !g.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, h, g, m));
          };
          i.current = o.current.subscribeEvent(r, f, s);
        }
        return u.current && e.registry && (e.registry.unregister(u.current), u.current = null), () => {
          var _a2;
          (_a2 = i.current) == null ? void 0 : _a2.call(i), i.current = null;
        };
      }, [
        o,
        r,
        s
      ]);
    };
  }
  const mb = {
    registry: null
  }, re = hb(mb), bb = {
    isFirst: true
  };
  function Je(e, t, n) {
    re(e, t, n, bb);
  }
  const Cb = 0.7, wb = 1.3, xb = {
    compact: Cb,
    comfortable: wb,
    standard: 1
  }, mo = (e) => e.density, Ro = we(mo, (e) => xb[e]), vb = [
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
  ], yb = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "editInputCell"
      ]
    }, De, t);
  }, Sb = le(Ms, {
    name: "MuiDataGrid",
    slot: "EditInputCell",
    overridesResolver: (e, t) => t.editInputCell
  })(({ theme: e }) => b({}, e.typography.body2, {
    padding: "1px 0",
    "& input": {
      padding: "0 16px",
      height: "100%"
    }
  })), Ib = ze((e, t) => {
    const n = ie(), { id: o, value: r, field: l, colDef: s, hasFocus: a, debounceMs: i = 200, isProcessingProps: d, onValueChange: u } = e, f = fe(e, vb), h = Ee(), g = c.useRef(null), [m, x] = c.useState(r), I = yb(n), S = c.useCallback(async (F) => {
      const H = F.target.value;
      u && await u(F, H);
      const v = h.current.getColumn(l);
      let R = H;
      v.valueParser && (R = v.valueParser(H, h.current.getRow(o), v, h)), x(R), h.current.setEditCellValue({
        id: o,
        field: l,
        value: R,
        debounceMs: i,
        unstable_skipValueParser: true
      }, F);
    }, [
      h,
      i,
      l,
      o,
      u
    ]), w = h.current.unstable_getEditCellMeta(o, l);
    return c.useEffect(() => {
      (w == null ? void 0 : w.changeReason) !== "debouncedSetEditCellValue" && x(r);
    }, [
      w,
      r
    ]), St(() => {
      a && g.current.focus();
    }, [
      a
    ]), p.jsx(Sb, b({
      inputRef: g,
      className: I.root,
      ownerState: n,
      fullWidth: true,
      type: s.type === "number" ? s.type : "text",
      value: m ?? "",
      onChange: S,
      endAdornment: d ? p.jsx(n.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : void 0
    }, f, {
      ref: t
    }));
  }), Pb = (e) => p.jsx(Ib, b({}, e)), an = (e) => e.rows, Sr = we(an, (e) => e.totalRowCount), Mb = we(an, (e) => e.loading), kb = we(an, (e) => e.totalTopLevelRowCount), Zt = we(an, (e) => e.dataRowIdToModelLookup), Zi = we(an, (e) => e.dataRowIdToIdLookup), ht = we(an, (e) => e.tree), Eb = we(an, (e) => e.groupsToFetch), Fb = we(an, (e) => e.groupingName), ea = we(an, (e) => e.treeDepths), oo = qe(an, (e) => {
    const t = Object.entries(e.treeDepths);
    return t.length === 0 ? 1 : (t.filter(([, n]) => n > 0).map(([n]) => Number(n)).sort((n, o) => o - n)[0] ?? 0) + 1;
  }), Jo = we(an, (e) => e.dataRowIds), Tb = we(an, (e) => e == null ? void 0 : e.additionalRowGroups), $o = qe(Tb, (e) => {
    var _a2, _b2;
    const t = e == null ? void 0 : e.pinnedRows;
    return {
      bottom: ((_a2 = t == null ? void 0 : t.bottom) == null ? void 0 : _a2.map((n) => ({
        id: n.id,
        model: n.model ?? {}
      }))) ?? [],
      top: ((_b2 = t == null ? void 0 : t.top) == null ? void 0 : _b2.map((n) => ({
        id: n.id,
        model: n.model ?? {}
      }))) ?? []
    };
  }), Vc = we($o, (e) => {
    var _a2, _b2;
    return (((_a2 = e == null ? void 0 : e.top) == null ? void 0 : _a2.length) || 0) + (((_b2 = e == null ? void 0 : e.bottom) == null ? void 0 : _b2.length) || 0);
  }), Nc = (e, t) => t && e.length > 1 ? [
    e[0]
  ] : e, ta = (e, t) => (n) => b({}, n, {
    sorting: b({}, n.sorting, {
      sortModel: Nc(e, t)
    })
  }), Ob = (e) => e === "desc", Db = (e, t) => {
    const n = t.current.getColumn(e.field);
    if (!n || e.sort === null) return null;
    let o;
    return n.getSortComparator ? o = n.getSortComparator(e.sort) : o = Ob(e.sort) ? (...l) => -1 * n.sortComparator(...l) : n.sortComparator, o ? {
      getSortCellParams: (l) => ({
        id: l,
        field: n.field,
        rowNode: ht(t)[l],
        value: t.current.getCellValue(l, n.field),
        api: t.current
      }),
      comparator: o
    } : null;
  }, Rb = (e, t, n) => e.reduce((o, r, l) => {
    if (o !== 0) return o;
    const s = t.params[l], a = n.params[l];
    return o = r.comparator(s.value, a.value, s, a), o;
  }, 0), $b = (e, t) => {
    const n = e.map((o) => Db(o, t)).filter((o) => !!o);
    return n.length === 0 ? null : (o) => o.map((r) => ({
      node: r,
      params: n.map((l) => l.getSortCellParams(r.id))
    })).sort((r, l) => Rb(n, r, l)).map((r) => r.node.id);
  }, na = (e, t) => {
    const n = e.indexOf(t);
    return !t || n === -1 || n + 1 === e.length ? e[0] : e[n + 1];
  }, _s = (e, t) => e == null && t != null ? -1 : t == null && e != null ? 1 : e == null && t == null ? 0 : null, Hb = new Intl.Collator(), Lb = (e, t) => {
    const n = _s(e, t);
    return n !== null ? n : typeof e == "string" ? Hb.compare(e.toString(), t.toString()) : e - t;
  }, Bc = (e, t) => {
    const n = _s(e, t);
    return n !== null ? n : Number(e) - Number(t);
  }, Wc = (e, t) => {
    const n = _s(e, t);
    return n !== null ? n : e > t ? 1 : e < t ? -1 : 0;
  }, jb = [
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
  function Jt(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, tabIndex: s, disabled: a, clearButton: i, InputProps: d, variant: u = "standard" } = e, f = fe(e, jb), h = Nt(), [g, m] = c.useState(_l(t.value)), [x, I] = c.useState(false), S = ot(), w = ie(), F = c.useCallback((H) => {
      const v = _l(H.target.value);
      m(v), I(true), h.start(w.filterDebounceMs, () => {
        const R = b({}, t, {
          value: o === "number" && !Number.isNaN(Number(v)) ? Number(v) : v,
          fromInput: S
        });
        n(R), I(false);
      });
    }, [
      h,
      w.filterDebounceMs,
      t,
      o,
      S,
      n
    ]);
    return c.useEffect(() => {
      (t.fromInput !== S || t.value == null) && m(_l(t.value));
    }, [
      S,
      t
    ]), p.jsx(w.slots.baseTextField, b({
      id: S,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: g ?? "",
      onChange: F,
      variant: u,
      type: o || "text",
      InputProps: b({}, x || i ? {
        endAdornment: x ? p.jsx(w.slots.loadIcon, {
          fontSize: "small",
          color: "action"
        }) : i
      } : {}, {
        disabled: a
      }, d, {
        inputProps: b({
          tabIndex: s
        }, d == null ? void 0 : d.inputProps)
      }),
      InputLabelProps: {
        shrink: true
      },
      inputRef: l
    }, f, (_a2 = w.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function _l(e) {
    if (!(e == null || e === "")) return String(e);
  }
  function Ab(e) {
    return typeof e == "number" && !Number.isNaN(e);
  }
  function zb(e) {
    return typeof e == "function";
  }
  function Vs(e) {
    return typeof e == "object" && e !== null;
  }
  function Gb() {
    try {
      const e = "__some_random_key_you_are_not_going_to_use__";
      return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), true;
    } catch {
      return false;
    }
  }
  function rl(e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  const Wt = (e, t, n) => Math.max(t, Math.min(n, e));
  function oa(e, t) {
    return Array.from({
      length: t - e
    }).map((n, o) => e + o);
  }
  function xn(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      if (Array.isArray(e)) {
        const r = e.length;
        if (r !== t.length) return false;
        for (let l = 0; l < r; l += 1) if (!xn(e[l], t[l])) return false;
        return true;
      }
      if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return false;
        const r = Array.from(e.entries());
        for (let l = 0; l < r.length; l += 1) if (!t.has(r[l][0])) return false;
        for (let l = 0; l < r.length; l += 1) {
          const s = r[l];
          if (!xn(s[1], t.get(s[0]))) return false;
        }
        return true;
      }
      if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return false;
        const r = Array.from(e.entries());
        for (let l = 0; l < r.length; l += 1) if (!t.has(r[l][0])) return false;
        return true;
      }
      if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        const r = e.length;
        if (r !== t.length) return false;
        for (let l = 0; l < r; l += 1) if (e[l] !== t[l]) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      const n = Object.keys(e), o = n.length;
      if (o !== Object.keys(t).length) return false;
      for (let r = 0; r < o; r += 1) if (!Object.prototype.hasOwnProperty.call(t, n[r])) return false;
      for (let r = 0; r < o; r += 1) {
        const l = n[r];
        if (!xn(e[l], t[l])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function _b(e) {
    return () => {
      let t = e += 1831565813;
      return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function Vb(e) {
    const t = _b(e);
    return (n, o) => n + (o - n) * t();
  }
  function Uc(e) {
    return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
  }
  const Yn = (e, t) => (n) => {
    e && t(n);
  }, Nb = [
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
  ], Bb = [
    "key"
  ];
  function Kc(e) {
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, color: s, error: a, helperText: i, size: d, variant: u = "standard" } = e, f = fe(e, Nb), h = {
      color: s,
      error: a,
      helperText: i,
      size: d,
      variant: u
    }, [g, m] = c.useState(t.value || []), x = ot(), I = ie();
    c.useEffect(() => {
      const w = t.value ?? [];
      m(w.map(String));
    }, [
      t.value
    ]);
    const S = c.useCallback((w, F) => {
      m(F.map(String)), n(b({}, t, {
        value: [
          ...F.map((H) => o === "number" ? Number(H) : H)
        ]
      }));
    }, [
      n,
      t,
      o
    ]);
    return p.jsx(xc, b({
      multiple: true,
      freeSolo: true,
      options: [],
      filterOptions: (w, F) => {
        const { inputValue: H } = F;
        return H == null || H === "" ? [] : [
          H
        ];
      },
      id: x,
      value: g,
      onChange: S,
      renderTags: (w, F) => w.map((H, v) => {
        const R = F({
          index: v
        }), { key: A } = R, $ = fe(R, Bb);
        return p.jsx(I.slots.baseChip, b({
          variant: "outlined",
          size: "small",
          label: H
        }, $), A);
      }),
      renderInput: (w) => {
        var _a2;
        return p.jsx(I.slots.baseTextField, b({}, w, {
          label: r.current.getLocaleText("filterPanelInputLabel"),
          placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: b({}, w.InputLabelProps, {
            shrink: true
          }),
          inputRef: l,
          type: o || "text"
        }, h, (_a2 = I.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, f));
  }
  var Sn = (function(e) {
    return e.Cell = "cell", e.Row = "row", e;
  })(Sn || {}), Qe = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(Qe || {}), nt = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(nt || {}), Tt = (function(e) {
    return e.And = "and", e.Or = "or", e;
  })(Tt || {}), En = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e.pasteKeyDown = "pasteKeyDown", e;
  })(En || {}), un = (function(e) {
    return e.cellFocusOut = "cellFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(un || {}), Ln = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e;
  })(Ln || {}), Cn = (function(e) {
    return e.rowFocusOut = "rowFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(Cn || {});
  function qc(e) {
    return e.field !== void 0;
  }
  const Yc = {
    filteredRowsLookup: {},
    filteredChildrenCountLookup: {},
    filteredDescendantCountLookup: {}
  }, pr = () => ({
    items: [],
    logicOperator: Tt.And,
    quickFilterValues: [],
    quickFilterLogicOperator: Tt.And
  });
  function Xc(e) {
    return {
      current: e.current.getPublicApi()
    };
  }
  let An = (function(e) {
    return e.LEFT = "left", e.RIGHT = "right", e;
  })({});
  const ll = {
    left: [],
    right: []
  }, Qc = (e) => e.isRtl, vn = (e) => e.columns, Fn = we(vn, (e) => e.orderedFields), Dn = we(vn, (e) => e.lookup), rn = qe(Fn, Dn, (e, t) => e.map((n) => t[n])), en = we(vn, (e) => e.columnVisibilityModel), it = qe(rn, en, (e, t) => e.filter((n) => t[n.field] !== false)), Ho = qe(it, (e) => e.map((t) => t.field)), Jc = (e) => e.pinnedColumns;
  qe(Jc, Fn, Qc, (e, t, n) => Zc(e, t, n));
  const Lo = qe(vn, Jc, Ho, Qc, (e, t, n, o) => {
    const r = Zc(t, n, o);
    return {
      left: r.left.map((s) => e.lookup[s]),
      right: r.right.map((s) => e.lookup[s])
    };
  });
  function Zc(e, t, n) {
    var _a2, _b2;
    if (!Array.isArray(e.left) && !Array.isArray(e.right) || ((_a2 = e.left) == null ? void 0 : _a2.length) === 0 && ((_b2 = e.right) == null ? void 0 : _b2.length) === 0) return ll;
    const o = (a, i) => Array.isArray(a) ? a.filter((d) => i.includes(d)) : [], r = o(e.left, t), l = t.filter((a) => !r.includes(a)), s = o(e.right, l);
    return n ? {
      left: s,
      right: r
    } : {
      left: r,
      right: s
    };
  }
  const Un = qe(it, (e) => {
    const t = [];
    let n = 0;
    for (let o = 0; o < e.length; o += 1) t.push(n), n += e[o].computedWidth;
    return t;
  }), eu = qe(rn, (e) => e.filter((t) => t.filterable)), Wb = qe(rn, (e) => e.reduce((t, n) => (n.filterable && (t[n.field] = n), t), {})), Ub = qe(rn, (e) => e.some((t) => t.colSpan !== void 0));
  let qo;
  function Kb() {
    if (qo !== void 0) return qo;
    try {
      qo = new Function("return true")();
    } catch {
      qo = false;
    }
    return qo;
  }
  const fs = (e, t) => {
    const n = b({}, e);
    if (n.id == null && (n.id = Math.round(Math.random() * 1e5)), n.operator == null) {
      const o = Dn(t)[n.field];
      n.operator = o && o.filterOperators[0].value;
    }
    return n;
  }, Ns = (e, t, n) => {
    const o = e.items.length > 1;
    let r;
    o && t ? r = [
      e.items[0]
    ] : r = e.items;
    const l = o && r.some((a) => a.id == null);
    return r.some((a) => a.operator == null) || l ? b({}, e, {
      items: r.map((a) => fs(a, n))
    }) : e.items !== r ? b({}, e, {
      items: r
    }) : e;
  }, ra = (e, t, n) => (o) => b({}, o, {
    filterModel: Ns(e, t, n)
  }), fr = (e) => typeof e == "string" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e, tu = (e, t) => {
    var _a2;
    if (!e.field || !e.operator) return null;
    const n = t.current.getColumn(e.field);
    if (!n) return null;
    let o;
    if (n.valueParser) {
      const u = n.valueParser;
      o = Array.isArray(e.value) ? (_a2 = e.value) == null ? void 0 : _a2.map((f) => u(f, void 0, n, t)) : u(e.value, void 0, n, t);
    } else o = e.value;
    const { ignoreDiacritics: r } = t.current.rootProps;
    r && (o = fr(o));
    const l = b({}, e, {
      value: o
    }), s = n.filterOperators;
    if (!(s == null ? void 0 : s.length)) throw new Error(`MUI X: No filter operators found for column '${n.field}'.`);
    const a = s.find((u) => u.value === l.operator);
    if (!a) throw new Error(`MUI X: No filter operator found for column '${n.field}' and operator value '${l.operator}'.`);
    const i = Xc(t), d = a.getApplyFilterFn(l, n);
    return typeof d != "function" ? null : {
      item: l,
      fn: (u) => {
        let f = t.current.getRowValue(u, n);
        return r && (f = fr(f)), d(f, u, n, i);
      }
    };
  };
  let la = 1;
  const qb = (e, t, n) => {
    const { items: o } = e, r = o.map((a) => tu(a, t)).filter((a) => !!a);
    if (r.length === 0) return null;
    if (n || !Kb()) return (a, i) => {
      const d = {};
      for (let u = 0; u < r.length; u += 1) {
        const f = r[u];
        (!i || i(f.item.field)) && (d[f.item.id] = f.fn(a));
      }
      return d;
    };
    const l = new Function("appliers", "row", "shouldApplyFilter", `"use strict";
${r.map((a, i) => `const shouldApply${i} = !shouldApplyFilter || shouldApplyFilter(${JSON.stringify(a.item.field)});`).join(`
`)}

const result$$ = {
${r.map((a, i) => `  ${JSON.stringify(String(a.item.id))}: !shouldApply${i} ? false : appliers[${i}].fn(row),`).join(`
`)}
};

return result$$;`.replaceAll("$$", String(la)));
    return la += 1, (a, i) => l(r, a, i);
  }, nu = (e) => e.quickFilterExcludeHiddenColumns ?? true, Yb = (e, t) => {
    var _a2;
    const n = ((_a2 = e.quickFilterValues) == null ? void 0 : _a2.filter(Boolean)) ?? [];
    if (n.length === 0) return null;
    const o = nu(e) ? Ho(t) : Fn(t), r = [], { ignoreDiacritics: l } = t.current.rootProps, s = Xc(t);
    return o.forEach((a) => {
      const i = t.current.getColumn(a), d = i == null ? void 0 : i.getApplyQuickFilterFn;
      d && r.push({
        column: i,
        appliers: n.map((u) => {
          const f = l ? fr(u) : u;
          return {
            fn: d(f, i, s)
          };
        })
      });
    }), function(i, d) {
      const u = {};
      e: for (let f = 0; f < n.length; f += 1) {
        const h = n[f];
        for (let g = 0; g < r.length; g += 1) {
          const { column: m, appliers: x } = r[g], { field: I } = m;
          if (d && !d(I)) continue;
          const S = x[f];
          let w = t.current.getRowValue(i, m);
          if (S.fn === null) continue;
          if (l && (w = fr(w)), S.fn(w, i, m, s)) {
            u[h] = true;
            continue e;
          }
        }
        u[h] = false;
      }
      return u;
    };
  }, Xb = (e, t, n) => {
    const o = qb(e, t, n), r = Yb(e, t);
    return function(s, a, i) {
      i.passingFilterItems = (o == null ? void 0 : o(s, a)) ?? null, i.passingQuickFilterValues = (r == null ? void 0 : r(s, a)) ?? null;
    };
  }, sa = (e) => e != null, Qb = (e, t, n) => (e.cleanedFilterItems || (e.cleanedFilterItems = n.filter((o) => tu(o, t) !== null)), e.cleanedFilterItems), Jb = (e, t, n, o, r) => {
    const l = Qb(r, o, n.items), s = e.filter(sa), a = t.filter(sa);
    if (s.length > 0) {
      const i = (u) => s.some((f) => f[u.id]);
      if ((n.logicOperator ?? pr().logicOperator) === Tt.And) {
        if (!l.every(i)) return false;
      } else if (!l.some(i)) return false;
    }
    if (a.length > 0 && n.quickFilterValues != null) {
      const i = (u) => a.some((f) => f[u]);
      if ((n.quickFilterLogicOperator ?? pr().quickFilterLogicOperator) === Tt.And) {
        if (!n.quickFilterValues.every(i)) return false;
      } else if (!n.quickFilterValues.some(i)) return false;
    }
    return true;
  }, Zb = (e) => {
    if (!e) return null;
    const t = new RegExp(rl(e), "i");
    return (n, o, r, l) => {
      let s = l.current.getRowFormattedValue(o, r);
      return l.current.ignoreDiacritics && (s = fr(s)), s != null ? t.test(s.toString()) : false;
    };
  }, ia = (e, t) => (n) => {
    if (!n.value) return null;
    const o = e ? n.value : n.value.trim(), r = new RegExp(rl(o), "i");
    return (l) => {
      if (l == null) return t;
      const s = r.test(String(l));
      return t ? !s : s;
    };
  }, aa = (e, t) => (n) => {
    if (!n.value) return null;
    const o = e ? n.value : n.value.trim(), r = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return (l) => {
      if (l == null) return t;
      const s = r.compare(o, l.toString()) === 0;
      return t ? !s : s;
    };
  }, ca = (e) => () => (t) => {
    const n = t === "" || t == null;
    return e ? !n : n;
  }, eC = (e = false) => [
    {
      value: "contains",
      getApplyFilterFn: ia(e, false),
      InputComponent: Jt
    },
    {
      value: "doesNotContain",
      getApplyFilterFn: ia(e, true),
      InputComponent: Jt
    },
    {
      value: "equals",
      getApplyFilterFn: aa(e, false),
      InputComponent: Jt
    },
    {
      value: "doesNotEqual",
      getApplyFilterFn: aa(e, true),
      InputComponent: Jt
    },
    {
      value: "startsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`^${rl(n)}.*$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Jt
    },
    {
      value: "endsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`.*${rl(n)}$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Jt
    },
    {
      value: "isEmpty",
      getApplyFilterFn: ca(false),
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: ca(true),
      requiresFilterValue: false
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (t) => {
        if (!Array.isArray(t.value) || t.value.length === 0) return null;
        const n = e ? t.value : t.value.map((r) => r.trim()), o = new Intl.Collator(void 0, {
          sensitivity: "base",
          usage: "search"
        });
        return (r) => r != null ? n.some((l) => o.compare(l, r.toString() || "") === 0) : false;
      },
      InputComponent: Kc
    }
  ], gn = {
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
    sortComparator: Lb,
    type: "string",
    align: "left",
    filterOperators: eC(),
    renderEditCell: Pb,
    getApplyQuickFilterFn: Zb
  }, tC = [
    "open",
    "target",
    "onClose",
    "children",
    "position",
    "className",
    "onExited"
  ], nC = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "menu"
      ]
    }, De, t);
  }, oC = le(no, {
    name: "MuiDataGrid",
    slot: "Menu",
    overridesResolver: (e, t) => t.menu
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal,
    [`& .${k.menuList}`]: {
      outline: 0
    }
  })), rC = {
    "bottom-start": "top left",
    "bottom-end": "top right"
  };
  function Bs(e) {
    var _a2;
    const { open: t, target: n, onClose: o, children: r, position: l, className: s, onExited: a } = e, i = fe(e, tC), d = Ee(), u = ie(), f = nC(u), h = c.useRef(null);
    St(() => {
      var _a3, _b2;
      t ? h.current = document.activeElement instanceof HTMLElement ? document.activeElement : null : ((_b2 = (_a3 = h.current) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3), h.current = null);
    }, [
      t
    ]), c.useEffect(() => {
      const x = t ? "menuOpen" : "menuClose";
      d.current.publishEvent(x, {
        target: n
      });
    }, [
      d,
      t,
      n
    ]);
    const g = (x) => (I) => {
      x && x(), a && a(I);
    }, m = (x) => {
      x.target && (n === x.target || (n == null ? void 0 : n.contains(x.target))) || o(x);
    };
    return p.jsx(oC, b({
      as: u.slots.basePopper,
      className: ue(f.root, s),
      ownerState: u,
      open: t,
      anchorEl: n,
      transition: true,
      placement: l
    }, i, (_a2 = u.slotProps) == null ? void 0 : _a2.basePopper, {
      children: ({ TransitionProps: x, placement: I }) => p.jsx(Ls, {
        onClickAway: m,
        mouseEvent: "onMouseDown",
        children: p.jsx(Ps, b({}, x, {
          style: {
            transformOrigin: rC[I]
          },
          onExited: g(x == null ? void 0 : x.onExited),
          children: p.jsx(Ht, {
            children: r
          })
        }))
      })
    }));
  }
  const lC = [
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
  ], sC = (e) => typeof e.getActions == "function";
  function iC(e) {
    var _a2;
    const { colDef: t, id: n, hasFocus: o, tabIndex: r, position: l = "bottom-end", focusElementRef: s } = e, a = fe(e, lC), [i, d] = c.useState(-1), [u, f] = c.useState(false), h = Ee(), g = c.useRef(null), m = c.useRef(null), x = c.useRef(false), I = c.useRef({}), S = Gt(), w = ot(), F = ot(), H = ie();
    if (!sC(t)) throw new Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
    const v = t.getActions(h.current.getRowParams(n)), R = v.filter((P) => !P.props.showInMenu), A = v.filter((P) => P.props.showInMenu), $ = R.length + (A.length ? 1 : 0);
    c.useLayoutEffect(() => {
      o || Object.entries(I.current).forEach(([P, D]) => {
        D == null ? void 0 : D.stop({}, () => {
          delete I.current[P];
        });
      });
    }, [
      o
    ]), c.useEffect(() => {
      if (i < 0 || !g.current || i >= g.current.children.length) return;
      g.current.children[i].focus({
        preventScroll: true
      });
    }, [
      i
    ]), c.useEffect(() => {
      o || (d(-1), x.current = false);
    }, [
      o
    ]), c.useImperativeHandle(s, () => ({
      focus() {
        if (!x.current) {
          const P = v.findIndex((D) => !D.props.disabled);
          d(P);
        }
      }
    }), [
      v
    ]), c.useEffect(() => {
      i >= $ && d($ - 1);
    }, [
      i,
      $
    ]);
    const y = () => {
      f(true), d($ - 1), x.current = true;
    }, C = () => {
      f(false);
    }, M = (P) => {
      P.stopPropagation(), P.preventDefault(), u ? C() : y();
    }, T = (P) => (D) => {
      I.current[P] = D;
    }, O = (P, D) => (L) => {
      d(P), x.current = true, D && D(L);
    }, G = (P) => {
      if ($ <= 1) return;
      const D = (z, _) => {
        var _a3;
        if (z < 0 || z > v.length) return z;
        const V = (_ === "left" ? -1 : 1) * (S ? -1 : 1);
        return ((_a3 = v[z + V]) == null ? void 0 : _a3.props.disabled) ? D(z + V, _) : z + V;
      };
      let L = i;
      P.key === "ArrowRight" ? L = D(i, "right") : P.key === "ArrowLeft" && (L = D(i, "left")), !(L < 0 || L >= $) && L !== i && (P.preventDefault(), P.stopPropagation(), d(L));
    }, E = (P) => {
      P.key === "Tab" && P.preventDefault(), [
        "Tab",
        "Escape"
      ].includes(P.key) && C();
    };
    return p.jsxs("div", b({
      role: "menu",
      ref: g,
      tabIndex: -1,
      className: k.actionsCell,
      onKeyDown: G
    }, a, {
      children: [
        R.map((P, D) => c.cloneElement(P, {
          key: D,
          touchRippleRef: T(D),
          onClick: O(D, P.props.onClick),
          tabIndex: i === D ? r : -1
        })),
        A.length > 0 && F && p.jsx(H.slots.baseIconButton, b({
          ref: m,
          id: F,
          "aria-label": h.current.getLocaleText("actionsCellMore"),
          "aria-haspopup": "menu",
          "aria-expanded": u,
          "aria-controls": u ? w : void 0,
          role: "menuitem",
          size: "small",
          onClick: M,
          touchRippleRef: T(F),
          tabIndex: i === R.length ? r : -1
        }, (_a2 = H.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: p.jsx(H.slots.moreActionsIcon, {
            fontSize: "small"
          })
        })),
        A.length > 0 && p.jsx(Bs, {
          open: u,
          target: m.current,
          position: l,
          onClose: C,
          children: p.jsx(ks, {
            id: w,
            className: k.menuList,
            onKeyDown: E,
            "aria-labelledby": F,
            variant: "menu",
            autoFocusItem: true,
            children: A.map((P, D) => c.cloneElement(P, {
              key: D,
              closeMenu: C
            }))
          })
        })
      ]
    }));
  }
  const aC = (e) => p.jsx(iC, b({}, e)), Cl = "actions", cC = b({}, gn, {
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
    renderCell: aC,
    getApplyQuickFilterFn: void 0
  }), Pt = "auto-generated-group-node-root", Fo = /* @__PURE__ */ Symbol("mui.id_autogenerated"), uC = () => ({
    type: "group",
    id: Pt,
    depth: -1,
    groupingField: null,
    groupingKey: null,
    isAutoGenerated: true,
    children: [],
    childrenFromPath: {},
    childrenExpanded: true,
    parent: null
  });
  function dC(e, t, n = "A row was provided without id in the rows prop:") {
    if (e == null) throw new Error([
      "MUI X: The Data Grid component requires all rows to have a unique `id` property.",
      "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.",
      n,
      JSON.stringify(t)
    ].join(`
`));
  }
  const wl = (e, t, n) => {
    const o = t ? t(e) : e.id;
    return dC(o, e, n), o;
  }, qr = ({ rows: e, getRowId: t, loading: n, rowCount: o }) => {
    const r = {
      type: "full",
      rows: []
    }, l = {}, s = {};
    for (let a = 0; a < e.length; a += 1) {
      const i = e[a], d = wl(i, t);
      l[d] = i, s[d] = d, r.rows.push(d);
    }
    return {
      rowsBeforePartialUpdates: e,
      loadingPropBeforePartialUpdates: n,
      rowCountPropBeforePartialUpdates: o,
      updates: r,
      dataRowIdToIdLookup: s,
      dataRowIdToModelLookup: l
    };
  }, ou = ({ tree: e, rowCountProp: t = 0 }) => {
    const n = e[Pt];
    return Math.max(t, n.children.length + (n.footerId == null ? 0 : 1));
  }, ru = ({ apiRef: e, rowCountProp: t = 0, loadingProp: n, previousTree: o, previousTreeDepths: r, previousGroupsToFetch: l }) => {
    const s = e.current.caches.rows, { tree: a, treeDepths: i, dataRowIds: d, groupingName: u, groupsToFetch: f = [] } = e.current.applyStrategyProcessor("rowTreeCreation", {
      previousTree: o,
      previousTreeDepths: r,
      updates: s.updates,
      dataRowIdToIdLookup: s.dataRowIdToIdLookup,
      dataRowIdToModelLookup: s.dataRowIdToModelLookup,
      previousGroupsToFetch: l
    }), h = e.current.unstable_applyPipeProcessors("hydrateRows", {
      tree: a,
      treeDepths: i,
      dataRowIdToIdLookup: s.dataRowIdToIdLookup,
      dataRowIds: d,
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
    }, b({}, h, {
      totalRowCount: Math.max(t, h.dataRowIds.length),
      totalTopLevelRowCount: ou({
        tree: h.tree,
        rowCountProp: t
      }),
      groupingName: u,
      loading: n,
      groupsToFetch: f
    });
  }, To = (e) => e.type === "skeletonRow" || e.type === "footer" || e.type === "group" && e.isAutoGenerated || e.type === "pinnedRow" && e.isAutoGenerated, Ws = (e, t, n) => {
    const o = e[t];
    if (o.type !== "group") return [];
    const r = [];
    for (let l = 0; l < o.children.length; l += 1) {
      const s = o.children[l];
      (!n || !To(e[s])) && r.push(s);
      const a = Ws(e, s, n);
      for (let i = 0; i < a.length; i += 1) r.push(a[i]);
    }
    return !n && o.footerId != null && r.push(o.footerId), r;
  }, ua = ({ previousCache: e, getRowId: t, updates: n, groupKeys: o }) => {
    if (e.updates.type === "full") throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
    const r = /* @__PURE__ */ new Map();
    n.forEach((u) => {
      const f = wl(u, t, "A row was provided without id when calling updateRows():");
      r.has(f) ? r.set(f, b({}, r.get(f), u)) : r.set(f, u);
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
      idToActionLookup: b({}, e.updates.idToActionLookup),
      groupKeys: o
    }, s = b({}, e.dataRowIdToModelLookup), a = b({}, e.dataRowIdToIdLookup), i = {
      insert: {},
      modify: {},
      remove: {}
    };
    r.forEach((u, f) => {
      const h = l.idToActionLookup[f];
      if (u._action === "delete") {
        if (h === "remove" || !s[f]) return;
        h != null && (i[h][f] = true), l.actions.remove.push(f), delete s[f], delete a[f];
        return;
      }
      const g = s[f];
      if (g) {
        h === "remove" ? (i.remove[f] = true, l.actions.modify.push(f)) : h == null && l.actions.modify.push(f), s[f] = b({}, g, u);
        return;
      }
      h === "remove" ? (i.remove[f] = true, l.actions.insert.push(f)) : h == null && l.actions.insert.push(f), s[f] = u, a[f] = f;
    });
    const d = Object.keys(i);
    for (let u = 0; u < d.length; u += 1) {
      const f = d[u], h = i[f];
      Object.keys(h).length > 0 && (l.actions[f] = l.actions[f].filter((g) => !h[g]));
    }
    return {
      dataRowIdToModelLookup: s,
      dataRowIdToIdLookup: a,
      updates: l,
      rowsBeforePartialUpdates: e.rowsBeforePartialUpdates,
      loadingPropBeforePartialUpdates: e.loadingPropBeforePartialUpdates,
      rowCountPropBeforePartialUpdates: e.rowCountPropBeforePartialUpdates
    };
  }, lu = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
  function da(e, t, n) {
    const o = [];
    return t.forEach((r) => {
      var _a2;
      const l = wl(r, n, "A row was provided without id when calling updateRows():");
      if (((_a2 = e.current.getRowNode(l)) == null ? void 0 : _a2.type) === "pinnedRow") {
        const a = e.current.caches.pinnedRows, i = a.idLookup[l];
        i && (a.idLookup[l] = b({}, i, r));
      } else o.push(r);
    }), o;
  }
  const su = (e, t, n) => typeof e == "number" && e > 0 ? e : t, pC = "__tree_data_group__", iu = "__row_group_by_columns_group__", xl = "__detail_panel_toggle__";
  let Oe = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.VIRTUAL = 3] = "VIRTUAL", e;
  })({});
  const fC = [
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
  ], gC = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "booleanCell"
      ]
    }, De, t);
  };
  function hC(e) {
    const { value: t, rowNode: n } = e, o = fe(e, fC), r = Ee(), l = ie(), s = {
      classes: l.classes
    }, a = gC(s), d = X(r, oo) > 0 && n.type === "group" && l.treeData === false, u = c.useMemo(() => t ? l.slots.booleanCellTrueIcon : l.slots.booleanCellFalseIcon, [
      l.slots.booleanCellFalseIcon,
      l.slots.booleanCellTrueIcon,
      t
    ]);
    return d && t === void 0 ? null : p.jsx(u, b({
      fontSize: "small",
      className: a.root,
      titleAccess: r.current.getLocaleText(t ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
      "data-value": !!t
    }, o));
  }
  const mC = c.memo(hC), bC = (e) => e.field !== iu && To(e.rowNode) ? "" : p.jsx(mC, b({}, e)), CC = [
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
  ], wC = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "editBooleanCell"
      ]
    }, De, t);
  };
  function xC(e) {
    var _a2;
    const { id: t, value: n, field: o, className: r, hasFocus: l, onValueChange: s } = e, a = fe(e, CC), i = Ee(), d = c.useRef(null), u = ot(), [f, h] = c.useState(n), g = ie(), m = {
      classes: g.classes
    }, x = wC(m), I = c.useCallback(async (S) => {
      const w = S.target.checked;
      s && await s(S, w), h(w), await i.current.setEditCellValue({
        id: t,
        field: o,
        value: w
      }, S);
    }, [
      i,
      o,
      t,
      s
    ]);
    return c.useEffect(() => {
      h(n);
    }, [
      n
    ]), St(() => {
      l && d.current.focus();
    }, [
      l
    ]), p.jsx("label", b({
      htmlFor: u,
      className: ue(x.root, r)
    }, a, {
      children: p.jsx(g.slots.baseCheckbox, b({
        id: u,
        inputRef: d,
        checked: !!f,
        onChange: I,
        size: "small"
      }, (_a2 = g.slotProps) == null ? void 0 : _a2.baseCheckbox))
    }));
  }
  const vC = (e) => p.jsx(xC, b({}, e)), yC = [
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
  ], Yr = (e) => {
    if (String(e).toLowerCase() === "true") return true;
    if (String(e).toLowerCase() === "false") return false;
  }, SC = le("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function IC(e) {
    var _a2, _b2, _c2;
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, clearButton: l, tabIndex: s, label: a, variant: i = "standard" } = e, d = fe(e, yC), [u, f] = c.useState(Yr(t.value)), h = ie(), g = ot(), m = ot(), x = ((_a2 = h.slotProps) == null ? void 0 : _a2.baseSelect) || {}, I = x.native ?? false, S = ((_b2 = h.slotProps) == null ? void 0 : _b2.baseSelectOption) || {}, w = c.useCallback((H) => {
      const v = Yr(H.target.value);
      f(v), n(b({}, t, {
        value: v
      }));
    }, [
      n,
      t
    ]);
    c.useEffect(() => {
      f(Yr(t.value));
    }, [
      t.value
    ]);
    const F = a ?? o.current.getLocaleText("filterPanelInputLabel");
    return p.jsxs(SC, {
      children: [
        p.jsxs(h.slots.baseFormControl, {
          fullWidth: true,
          children: [
            p.jsx(h.slots.baseInputLabel, b({}, (_c2 = h.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: g,
              shrink: true,
              variant: i,
              children: F
            })),
            p.jsxs(h.slots.baseSelect, b({
              labelId: g,
              id: m,
              label: F,
              value: u === void 0 ? "" : String(u),
              onChange: w,
              variant: i,
              notched: i === "outlined" ? true : void 0,
              native: I,
              displayEmpty: true,
              inputProps: {
                ref: r,
                tabIndex: s
              }
            }, d, x, {
              children: [
                p.jsx(h.slots.baseSelectOption, b({}, S, {
                  native: I,
                  value: "",
                  children: o.current.getLocaleText("filterValueAny")
                })),
                p.jsx(h.slots.baseSelectOption, b({}, S, {
                  native: I,
                  value: "true",
                  children: o.current.getLocaleText("filterValueTrue")
                })),
                p.jsx(h.slots.baseSelectOption, b({}, S, {
                  native: I,
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
  const PC = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => {
        const t = Yr(e.value);
        return t === void 0 ? null : (n) => !!n === t;
      },
      InputComponent: IC
    }
  ], MC = (e, t, n, o) => e ? o.current.getLocaleText("booleanCellTrueLabel") : o.current.getLocaleText("booleanCellFalseLabel"), kC = (e) => {
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
  }, au = b({}, gn, {
    type: "boolean",
    display: "flex",
    align: "center",
    headerAlign: "center",
    renderCell: bC,
    renderEditCell: vC,
    sortComparator: Bc,
    valueFormatter: MC,
    filterOperators: PC(),
    getApplyQuickFilterFn: void 0,
    aggregable: false,
    pastedValueParser: (e) => kC(e)
  }), cu = (e) => e.sorting, jo = we(cu, (e) => e.sortedRows), Us = qe(jo, Zt, ht, (e, t, n) => e.reduce((o, r) => {
    const l = t[r];
    if (l) o.push({
      id: r,
      model: l
    });
    else {
      const s = n[r];
      s && To(s) && o.push({
        id: r,
        model: {
          [Fo]: r
        }
      });
    }
    return o;
  }, [])), dn = we(cu, (e) => e.sortModel), EC = qe(dn, (e) => e.reduce((n, o, r) => (n[o.field] = {
    sortDirection: o.sort,
    sortIndex: e.length > 1 ? r + 1 : void 0
  }, n), {}));
  qe(jo, (e) => e.reduce((t, n, o) => (t[n] = o, t), /* @__PURE__ */ Object.create(null)));
  const vl = (e) => e.filter, yt = we(vl, (e) => e.filterModel), uu = we(yt, (e) => e.quickFilterValues), FC = (e) => e.visibleRowsLookup, Ao = we(vl, (e) => e.filteredRowsLookup);
  we(vl, (e) => e.filteredChildrenCountLookup);
  we(vl, (e) => e.filteredDescendantCountLookup);
  const Kn = qe(FC, Us, oo, yt, uu, (e, t, n, o, r) => n < 2 && !o.items.length && !(r == null ? void 0 : r.length) ? t : t.filter((l) => e[l.id] !== false)), So = qe(Kn, (e) => e.map((t) => t.id)), du = qe(Ao, Us, (e, t) => t.filter((n) => e[n.id] !== false)), pu = qe(du, (e) => e.map((t) => t.id));
  qe(So, ht, (e, t) => {
    const n = {};
    let o = 0;
    return e.reduce((r, l) => {
      const s = t[l];
      return n[s.depth] || (n[s.depth] = 0), s.depth > o && (n[s.depth] = 0), o = s.depth, n[s.depth] += 1, r[l] = n[s.depth], r;
    }, {});
  });
  const fu = qe(Kn, ht, oo, (e, t, n) => n < 2 ? e : e.filter((o) => {
    var _a2;
    return ((_a2 = t[o.id]) == null ? void 0 : _a2.depth) === 0;
  })), Ks = we(Kn, (e) => e.length), qs = we(fu, (e) => e.length), TC = we(du, (e) => e.length);
  we(TC, qs, (e, t) => e - t);
  const gu = qe(yt, Dn, (e, t) => {
    var _a2;
    return (_a2 = e.items) == null ? void 0 : _a2.filter((n) => {
      var _a3, _b2;
      if (!n.field) return false;
      const o = t[n.field];
      if (!(o == null ? void 0 : o.filterOperators) || ((_a3 = o == null ? void 0 : o.filterOperators) == null ? void 0 : _a3.length) === 0) return false;
      const r = o.filterOperators.find((l) => l.value === n.operator);
      return r ? !r.InputComponent || n.value != null && ((_b2 = n.value) == null ? void 0 : _b2.toString()) !== "" : false;
    });
  }), OC = qe(gu, (e) => e.reduce((n, o) => (n[o.field] ? n[o.field].push(o) : n[o.field] = [
    o
  ], n), {})), Vt = (e) => e.rowSelection, DC = we(Vt, (e) => e.length), RC = qe(Vt, Zt, (e, t) => new Map(e.map((n) => [
    n,
    t[n]
  ]))), Vn = qe(Vt, (e) => e.reduce((t, n) => (t[n] = n, t), {}));
  function hu(e, t) {
    var _a2;
    const n = ht(e), o = jo(e), r = Ao(e), l = n[t];
    if (!l || l.type !== "group") return [];
    const s = [], a = o.findIndex((i) => i === t) + 1;
    for (let i = a; i < o.length && ((_a2 = n[o[i]]) == null ? void 0 : _a2.depth) > l.depth; i += 1) {
      const d = o[i];
      r[d] !== false && e.current.isRowSelectable(d) && s.push(d);
    }
    return s;
  }
  function $C(e, t) {
    return we(ht, jo, Ao, Vn, (n, o, r, l) => {
      var _a2;
      const s = n[e];
      if (!s || s.type !== "group") return {
        isIndeterminate: false,
        isChecked: l[e] === e
      };
      if (l[e] === e) return {
        isIndeterminate: false,
        isChecked: true
      };
      let a = 0, i = 0;
      const d = o.findIndex((u) => u === e) + 1;
      for (let u = d; u < o.length && ((_a2 = n[o[u]]) == null ? void 0 : _a2.depth) > s.depth; u += 1) {
        const f = o[u];
        r[f] !== false && (a += 1, l[f] !== void 0 && (i += 1));
      }
      return {
        isIndeterminate: i > 0 && (i < a || l[e] === void 0),
        isChecked: t ? i > 0 : l[e] === e
      };
    });
  }
  function Ys(e) {
    return e.signature === on.DataGrid ? e.checkboxSelection && e.disableMultipleRowSelection !== true : !e.disableMultipleRowSelection;
  }
  const HC = (e, t) => {
    const n = [];
    let o = t;
    for (; o != null && o !== Pt; ) {
      const r = e[o];
      if (!r) return n;
      n.push(o), o = r.parent;
    }
    return n;
  }, LC = (e, t, n) => {
    const o = e[n];
    if (!o) return [];
    const r = o.parent;
    return r == null ? [] : e[r].children.filter((s) => s !== n && t[s] !== false);
  }, Yo = (e, t, n, o, r, l, s = new Set(Vt(e.current.state))) => {
    var _a2;
    const a = Ao(e), i = /* @__PURE__ */ new Set([]);
    if (!(!o && !r || a[n] === false) && (o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && hu(e, n).forEach((f) => {
      l(f), i.add(f);
    }), r)) {
      const d = (f) => {
        if (!s.has(f) && !i.has(f)) return false;
        const h = t[f];
        return h ? h.type !== "group" ? true : h.children.every(d) : false;
      }, u = (f) => {
        var _a3;
        const h = LC(t, a, f);
        if (h.length === 0 || h.every(d)) {
          const m = (_a3 = t[f]) == null ? void 0 : _a3.parent;
          m != null && m !== Pt && e.current.isRowSelectable(m) && (l(m), i.add(m), u(m));
        }
      };
      u(n);
    }
  }, pa = (e, t, n, o, r, l) => {
    var _a2;
    const s = Vn(e);
    !r && !o || (r && HC(t, n).forEach((i) => {
      s[i] === i && l(i);
    }), o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && hu(e, n).forEach((d) => {
      l(d);
    }));
  }, jC = [
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
  ], AC = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "checkboxInput"
      ]
    }, De, t);
  }, zC = ze(function(t, n) {
    var _a2, _b2;
    const { field: o, id: r, rowNode: l, hasFocus: s, tabIndex: a } = t, i = fe(t, jC), d = Ee(), u = ie(), f = {
      classes: u.classes
    }, h = AC(f), g = c.useRef(null), m = c.useRef(null), x = zt(g, n), I = ($) => {
      const y = {
        value: $.target.checked,
        id: r
      };
      d.current.publishEvent("rowSelectionCheckboxChange", y, $);
    };
    c.useLayoutEffect(() => {
      if (a === 0) {
        const $ = d.current.getCellElement(r, o);
        $ && ($.tabIndex = -1);
      }
    }, [
      d,
      a,
      r,
      o
    ]), c.useEffect(() => {
      var _a3, _b3;
      s ? (_b3 = (_a3 = g.current) == null ? void 0 : _a3.querySelector("input")) == null ? void 0 : _b3.focus({
        preventScroll: true
      }) : m.current && m.current.stop({});
    }, [
      s
    ]);
    const S = c.useCallback(($) => {
      $.key === " " && $.stopPropagation();
    }, []), w = d.current.isRowSelectable(r), F = $C(r, ((_a2 = u.rowSelectionPropagation) == null ? void 0 : _a2.parents) ?? false), { isIndeterminate: H, isChecked: v } = X(d, F, zs);
    if (l.type === "footer" || l.type === "pinnedRow") return null;
    const R = u.indeterminateCheckboxAction === "select" ? v && !H : v, A = d.current.getLocaleText(R ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
    return p.jsx(u.slots.baseCheckbox, b({
      tabIndex: a,
      checked: R,
      onChange: I,
      className: h.root,
      inputProps: {
        "aria-label": A,
        name: "select_row"
      },
      onKeyDown: S,
      indeterminate: H,
      disabled: !w,
      touchRippleRef: m
    }, (_b2 = u.slotProps) == null ? void 0 : _b2.baseCheckbox, i, {
      ref: x
    }));
  }), GC = zC, yl = (e) => e.focus, $t = we(yl, (e) => e.cell), _C = we(yl, (e) => e.columnHeader);
  we(yl, (e) => e.columnHeaderFilter);
  const sl = we(yl, (e) => e.columnGroupHeader), Sl = (e) => e.tabIndex, Xs = we(Sl, (e) => e.cell), mu = we(Sl, (e) => e.columnHeader);
  we(Sl, (e) => e.columnHeaderFilter);
  const VC = we(Sl, (e) => e.columnGroupHeader);
  function ke(e, t, n) {
    const o = c.useRef(true);
    St(() => {
      o.current = false, e.current.register(n, t);
    }, [
      e,
      n,
      t
    ]), o.current && e.current.register(n, t);
  }
  function wt(e, t) {
    const n = c.useRef(null);
    if (n.current) return n.current;
    const o = e.current.getLogger(t);
    return n.current = o, o;
  }
  const bu = (e, t, n, o, r) => {
    const l = wt(e, "useNativeEventListener");
    Je(e, "rootMount", () => {
      const s = typeof t == "function" ? t() : t.current;
      if (!(!s || !n || !o)) return l.debug(`Binding native ${n} event`), s.addEventListener(n, o, r), () => {
        l.debug(`Clearing native ${n} event`), s.removeEventListener(n, o, r);
      };
    });
  }, Ir = (e) => {
    const t = c.useRef(true);
    t.current && (t.current = false, e());
  }, NC = () => {
  }, BC = (e, t) => {
    const n = c.useRef(false);
    St(() => n.current || !e ? NC : (n.current = true, t()), [
      n.current || e
    ]);
  }, WC = 100, UC = (e) => e ? 0 : 100, Cu = (e, t, n) => t > 0 && e > 0 ? Math.ceil(e / t) : e === -1 ? n + 2 : 0, wu = (e) => ({
    page: 0,
    pageSize: e ? 0 : 100
  }), KC = (e, t = 0) => t === 0 ? e : Math.max(Math.min(e, t - 1), 0), xu = (e, t) => {
    if (t === on.DataGrid && e > WC) throw new Error([
      "MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.",
      "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
    ].join(`
`));
  }, qC = -1, Pr = (e) => e.pagination, vu = we(Pr, (e) => e.enabled && e.paginationMode === "client"), kt = we(Pr, (e) => e.paginationModel), bo = we(Pr, (e) => e.rowCount), Zo = we(Pr, (e) => e.meta), YC = we(kt, (e) => e.page), yu = we(kt, (e) => e.pageSize), Su = we(kt, bo, (e, t) => Cu(t, e.pageSize, e.page)), Qs = qe(vu, kt, ht, oo, Kn, fu, (e, t, n, o, r, l) => {
    var _a2;
    if (!e) return null;
    const s = l.length, a = Math.min(t.pageSize * t.page, s - 1), i = t.pageSize === qC ? s - 1 : Math.min(a + t.pageSize - 1, s - 1);
    if (a === -1 || i === -1) return null;
    if (o < 2) return {
      firstRowIndex: a,
      lastRowIndex: i
    };
    const d = l[a], u = i - a + 1, f = r.findIndex((m) => m.id === d.id);
    let h = f, g = 0;
    for (; h < r.length && g <= u; ) {
      const m = r[h], x = (_a2 = n[m.id]) == null ? void 0 : _a2.depth;
      x === void 0 ? h += 1 : ((g < u || x > 0) && (h += 1), x === 0 && (g += 1));
    }
    return {
      firstRowIndex: f,
      lastRowIndex: h - 1
    };
  }), XC = qe(Kn, Qs, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), Iu = qe(So, Qs, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), Mr = qe(vu, Qs, XC, Kn, (e, t, n, o) => e ? {
    rows: n,
    range: t,
    rowToIndexMap: n.reduce((r, l, s) => (r.set(l.model, s), r), /* @__PURE__ */ new Map())
  } : {
    rows: o,
    range: o.length === 0 ? null : {
      firstRowIndex: 0,
      lastRowIndex: o.length - 1
    },
    rowToIndexMap: o.reduce((r, l, s) => (r.set(l.model, s), r), /* @__PURE__ */ new Map())
  }), QC = [
    "field",
    "colDef"
  ], JC = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "checkboxInput"
      ]
    }, De, t);
  }, ZC = ze(function(t, n) {
    var _a2;
    const o = fe(t, QC), [, r] = c.useState(false), l = Ee(), s = ie(), a = {
      classes: s.classes
    }, i = JC(a), d = X(l, mu), u = X(l, Vt), f = X(l, So), h = X(l, Iu), g = c.useMemo(() => typeof s.isRowSelectable != "function" ? u : u.filter(($) => s.keepNonExistentRowsSelected ? true : l.current.getRow($) ? s.isRowSelectable(l.current.getRowParams($)) : false), [
      l,
      s.isRowSelectable,
      u,
      s.keepNonExistentRowsSelected
    ]), m = c.useMemo(() => (!s.pagination || !s.checkboxSelectionVisibleOnly || s.paginationMode === "server" ? f : h).reduce((y, C) => (y[C] = true, y), {}), [
      s.pagination,
      s.paginationMode,
      s.checkboxSelectionVisibleOnly,
      h,
      f
    ]), x = c.useMemo(() => g.filter(($) => m[$]).length, [
      g,
      m
    ]), I = x > 0 && x < Object.keys(m).length, S = x > 0, w = ($) => {
      const y = {
        value: $.target.checked
      };
      l.current.publishEvent("headerSelectionCheckboxChange", y);
    }, F = d !== null && d.field === t.field ? 0 : -1;
    c.useLayoutEffect(() => {
      const $ = l.current.getColumnHeaderElement(t.field);
      F === 0 && $ && ($.tabIndex = -1);
    }, [
      F,
      l,
      t.field
    ]);
    const H = c.useCallback(($) => {
      $.key === " " && l.current.publishEvent("headerSelectionCheckboxChange", {
        value: !S
      });
    }, [
      l,
      S
    ]), v = c.useCallback(() => {
      r(($) => !$);
    }, []);
    c.useEffect(() => l.current.subscribeEvent("rowSelectionChange", v), [
      l,
      v
    ]);
    const R = s.indeterminateCheckboxAction === "select" ? S && !I : S, A = l.current.getLocaleText(R ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
    return p.jsx(s.slots.baseCheckbox, b({
      indeterminate: I,
      checked: R,
      onChange: w,
      className: i.root,
      inputProps: {
        "aria-label": A,
        name: "select_all_rows"
      },
      tabIndex: F,
      onKeyDown: H,
      disabled: !Ys(s)
    }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseCheckbox, o, {
      ref: n
    }));
  }), kr = (e, t) => Fo in t ? t[Fo] : e.props.getRowId ? e.props.getRowId(t) : t.id, Yt = "__check__", zo = b({}, au, {
    type: "custom",
    field: Yt,
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
    valueGetter: (e, t, n, o) => {
      const r = Vn(o), l = kr(o.current.state, t);
      return r[l] !== void 0;
    },
    renderHeader: (e) => p.jsx(ZC, b({}, e)),
    renderCell: (e) => p.jsx(GC, b({}, e))
  }), ew = [
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
  function fa(e, t) {
    if (e == null) return "";
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "" : t === "date" ? n.toISOString().substring(0, 10) : t === "datetime-local" ? (n.setMinutes(n.getMinutes() - n.getTimezoneOffset()), n.toISOString().substring(0, 19)) : n.toISOString().substring(0, 10);
  }
  function io(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, InputProps: s, clearButton: a, tabIndex: i, disabled: d } = e, u = fe(e, ew), f = Nt(), [h, g] = c.useState(() => fa(t.value, o)), [m, x] = c.useState(false), I = ot(), S = ie(), w = c.useCallback((F) => {
      f.clear();
      const H = F.target.value;
      g(H), x(true), f.start(S.filterDebounceMs, () => {
        const v = new Date(H);
        n(b({}, t, {
          value: Number.isNaN(v.getTime()) ? void 0 : v
        })), x(false);
      });
    }, [
      n,
      t,
      S.filterDebounceMs,
      f
    ]);
    return c.useEffect(() => {
      const F = fa(t.value, o);
      g(F);
    }, [
      t.value,
      o
    ]), p.jsx(S.slots.baseTextField, b({
      fullWidth: true,
      id: I,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: h,
      onChange: w,
      variant: "standard",
      type: o || "text",
      InputLabelProps: {
        shrink: true
      },
      inputRef: l,
      InputProps: b({}, m || a ? {
        endAdornment: m ? p.jsx(S.slots.loadIcon, {
          fontSize: "small",
          color: "action"
        }) : a
      } : {}, {
        disabled: d
      }, s, {
        inputProps: b({
          max: o === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31",
          tabIndex: i
        }, s == null ? void 0 : s.inputProps)
      })
    }, u, (_a2 = S.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function ao(e, t, n, o) {
    if (!e.value) return null;
    const r = new Date(e.value);
    n ? r.setSeconds(0, 0) : (r.setMinutes(r.getMinutes() + r.getTimezoneOffset()), r.setHours(0, 0, 0, 0));
    const l = r.getTime();
    return (s) => {
      if (!s) return false;
      if (o) return t(s.getTime(), l);
      const a = new Date(s);
      return n ? a.setSeconds(0, 0) : a.setHours(0, 0, 0, 0), t(a.getTime(), l);
    };
  }
  const Pu = (e) => [
    {
      value: "is",
      getApplyFilterFn: (t) => ao(t, (n, o) => n === o, e),
      InputComponent: io,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "not",
      getApplyFilterFn: (t) => ao(t, (n, o) => n !== o, e),
      InputComponent: io,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "after",
      getApplyFilterFn: (t) => ao(t, (n, o) => n > o, e),
      InputComponent: io,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrAfter",
      getApplyFilterFn: (t) => ao(t, (n, o) => n >= o, e),
      InputComponent: io,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "before",
      getApplyFilterFn: (t) => ao(t, (n, o) => n < o, e, !e),
      InputComponent: io,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrBefore",
      getApplyFilterFn: (t) => ao(t, (n, o) => n <= o, e),
      InputComponent: io,
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
  ], tw = [
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
  ], nw = le(Ms)({
    fontSize: "inherit"
  }), ow = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "editInputCell"
      ]
    }, De, t);
  };
  function rw(e) {
    const { id: t, value: n, field: o, colDef: r, hasFocus: l, inputProps: s, onValueChange: a } = e, i = fe(e, tw), d = r.type === "dateTime", u = Ee(), f = c.useRef(null), h = c.useMemo(() => {
      let H;
      n == null ? H = null : n instanceof Date ? H = n : H = new Date((n ?? "").toString());
      let v;
      return H == null || Number.isNaN(H.getTime()) ? v = "" : v = new Date(H.getTime() - H.getTimezoneOffset() * 60 * 1e3).toISOString().substr(0, d ? 16 : 10), {
        parsed: H,
        formatted: v
      };
    }, [
      n,
      d
    ]), [g, m] = c.useState(h), I = {
      classes: ie().classes
    }, S = ow(I), w = c.useCallback((H) => {
      if (H === "") return null;
      const [v, R] = H.split("T"), [A, $, y] = v.split("-"), C = /* @__PURE__ */ new Date();
      if (C.setFullYear(Number(A), Number($) - 1, Number(y)), C.setHours(0, 0, 0, 0), R) {
        const [M, T] = R.split(":");
        C.setHours(Number(M), Number(T), 0, 0);
      }
      return C;
    }, []), F = c.useCallback(async (H) => {
      const v = H.target.value, R = w(v);
      a && await a(H, R), m({
        parsed: R,
        formatted: v
      }), u.current.setEditCellValue({
        id: t,
        field: o,
        value: R
      }, H);
    }, [
      u,
      o,
      t,
      a,
      w
    ]);
    return c.useEffect(() => {
      m((H) => {
        var _a2, _b2;
        return h.parsed !== H.parsed && ((_a2 = h.parsed) == null ? void 0 : _a2.getTime()) !== ((_b2 = H.parsed) == null ? void 0 : _b2.getTime()) ? h : H;
      });
    }, [
      h
    ]), St(() => {
      l && f.current.focus();
    }, [
      l
    ]), p.jsx(nw, b({
      inputRef: f,
      fullWidth: true,
      className: S.root,
      type: d ? "datetime-local" : "date",
      inputProps: b({
        max: d ? "9999-12-31T23:59" : "9999-12-31"
      }, s),
      value: g.formatted,
      onChange: F
    }, i));
  }
  const Mu = (e) => p.jsx(rw, b({}, e));
  function ku({ value: e, columnType: t, rowId: n, field: o }) {
    if (!(e instanceof Date)) throw new Error([
      `MUI X: \`${t}\` column type only accepts \`Date\` objects as values.`,
      "Use `valueGetter` to transform the value into a `Date` object.",
      `Row ID: ${n}, field: "${o}".`
    ].join(`
`));
  }
  const lw = (e, t, n, o) => {
    if (!e) return "";
    const r = kr(o.current.state, t);
    return ku({
      value: e,
      columnType: "date",
      rowId: r,
      field: n.field
    }), e.toLocaleDateString();
  }, sw = (e, t, n, o) => {
    if (!e) return "";
    const r = kr(o.current.state, t);
    return ku({
      value: e,
      columnType: "dateTime",
      rowId: r,
      field: n.field
    }), e.toLocaleString();
  }, iw = b({}, gn, {
    type: "date",
    sortComparator: Wc,
    valueFormatter: lw,
    filterOperators: Pu(),
    renderEditCell: Mu,
    pastedValueParser: (e) => new Date(e)
  }), aw = b({}, gn, {
    type: "dateTime",
    sortComparator: Wc,
    valueFormatter: sw,
    filterOperators: Pu(true),
    renderEditCell: Mu,
    pastedValueParser: (e) => new Date(e)
  }), zn = (e) => e == null ? null : Number(e), cw = (e) => e == null || Number.isNaN(e) || e === "" ? null : (t) => zn(t) === zn(e), uw = () => [
    {
      value: "=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => zn(t) === e.value,
      InputComponent: Jt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "!=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => zn(t) !== e.value,
      InputComponent: Jt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : zn(t) > e.value,
      InputComponent: Jt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : zn(t) >= e.value,
      InputComponent: Jt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : zn(t) < e.value,
      InputComponent: Jt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : zn(t) <= e.value,
      InputComponent: Jt,
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
      InputComponent: Kc,
      InputComponentProps: {
        type: "number"
      }
    }
  ], dw = b({}, gn, {
    type: "number",
    align: "right",
    headerAlign: "right",
    sortComparator: Bc,
    valueParser: (e) => e === "" ? null : Number(e),
    valueFormatter: (e) => Ab(e) ? e.toLocaleString() : e || "",
    filterOperators: uw(),
    getApplyQuickFilterFn: cw
  });
  function Oo(e) {
    return (e == null ? void 0 : e.type) === "singleSelect";
  }
  function Zn(e, t) {
    if (e) return typeof e.valueOptions == "function" ? e.valueOptions(b({
      field: e.field
    }, t)) : e.valueOptions;
  }
  function il(e, t, n) {
    if (t === void 0) return;
    const o = t.find((r) => {
      const l = n(r);
      return String(l) === String(e);
    });
    return n(o);
  }
  const pw = [
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
  ], fw = [
    "MenuProps"
  ];
  function gw(e) {
    return !!e.key;
  }
  function hw(e) {
    var _a2, _b2;
    const t = ie(), { id: n, value: o, field: r, row: l, colDef: s, hasFocus: a, error: i, onValueChange: d, initialOpen: u = t.editMode === Sn.Cell } = e, f = fe(e, pw), h = Ee(), g = c.useRef(null), m = c.useRef(null), [x, I] = c.useState(u), w = (((_a2 = t.slotProps) == null ? void 0 : _a2.baseSelect) || {}).native ?? false, F = ((_b2 = t.slotProps) == null ? void 0 : _b2.baseSelect) || {}, { MenuProps: H } = F, v = fe(F, fw);
    if (St(() => {
      var _a3;
      a && ((_a3 = m.current) == null ? void 0 : _a3.focus());
    }, [
      a
    ]), !Oo(s)) return null;
    const R = Zn(s, {
      id: n,
      row: l
    });
    if (!R) return null;
    const A = s.getOptionValue, $ = s.getOptionLabel, y = async (T) => {
      if (!Oo(s) || !R) return;
      I(false);
      const O = T.target, G = il(O.value, R, A);
      d && await d(T, G), await h.current.setEditCellValue({
        id: n,
        field: r,
        value: G
      }, T);
    }, C = (T, O) => {
      if (t.editMode === Sn.Row) {
        I(false);
        return;
      }
      if (O === "backdropClick" || T.key === "Escape") {
        const G = h.current.getCellParams(n, r);
        h.current.publishEvent("cellEditStop", b({}, G, {
          reason: T.key === "Escape" ? un.escapeKeyDown : un.cellFocusOut
        }));
      }
    }, M = (T) => {
      gw(T) && T.key === "Enter" || I(true);
    };
    return !R || !s ? null : p.jsx(t.slots.baseSelect, b({
      ref: g,
      inputRef: m,
      value: o,
      onChange: y,
      open: x,
      onOpen: M,
      MenuProps: b({
        onClose: C
      }, H),
      error: i,
      native: w,
      fullWidth: true
    }, f, v, {
      children: R.map((T) => {
        var _a3;
        const O = A(T);
        return c.createElement(t.slots.baseSelectOption, b({}, ((_a3 = t.slotProps) == null ? void 0 : _a3.baseSelectOption) || {}, {
          native: w,
          key: O,
          value: O
        }), $(T));
      })
    }));
  }
  const mw = (e) => p.jsx(hw, b({}, e)), bw = [
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
  ], Cw = ({ column: e, OptionComponent: t, getOptionLabel: n, getOptionValue: o, isSelectNative: r, baseSelectOptionProps: l }) => [
    "",
    ...Zn(e) || []
  ].map((a) => {
    const i = o(a);
    let d = n(a);
    return d === "" && (d = "\u2003"), c.createElement(t, b({}, l, {
      native: r,
      key: i,
      value: i
    }), d);
  }), ww = le("div")({
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function ga(e) {
    var _a2, _b2, _c2, _d2, _e;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, placeholder: s, tabIndex: a, label: i, variant: d = "standard", clearButton: u } = e, f = fe(e, bw), h = t.value ?? "", g = ot(), m = ot(), x = ie(), I = ((_b2 = (_a2 = x.slotProps) == null ? void 0 : _a2.baseSelect) == null ? void 0 : _b2.native) ?? false;
    let S = null;
    if (t.field) {
      const A = r.current.getColumn(t.field);
      Oo(A) && (S = A);
    }
    const w = S == null ? void 0 : S.getOptionValue, F = S == null ? void 0 : S.getOptionLabel, H = c.useMemo(() => Zn(S), [
      S
    ]), v = c.useCallback((A) => {
      let $ = A.target.value;
      $ = il($, H, w), n(b({}, t, {
        value: $
      }));
    }, [
      H,
      w,
      n,
      t
    ]);
    if (!Oo(S)) return null;
    const R = i ?? r.current.getLocaleText("filterPanelInputLabel");
    return p.jsxs(ww, {
      children: [
        p.jsxs(x.slots.baseFormControl, {
          fullWidth: true,
          children: [
            p.jsx(x.slots.baseInputLabel, b({}, (_c2 = x.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: m,
              htmlFor: g,
              shrink: true,
              variant: d,
              children: R
            })),
            p.jsx(x.slots.baseSelect, b({
              id: g,
              label: R,
              labelId: m,
              value: h,
              onChange: v,
              variant: d,
              type: o || "text",
              inputProps: {
                tabIndex: a,
                ref: l,
                placeholder: s ?? r.current.getLocaleText("filterPanelInputPlaceholder")
              },
              native: I,
              notched: d === "outlined" ? true : void 0
            }, f, (_d2 = x.slotProps) == null ? void 0 : _d2.baseSelect, {
              children: Cw({
                column: S,
                OptionComponent: x.slots.baseSelectOption,
                getOptionLabel: F,
                getOptionValue: w,
                isSelectNative: I,
                baseSelectOptionProps: (_e = x.slotProps) == null ? void 0 : _e.baseSelectOption
              })
            }))
          ]
        }),
        u
      ]
    });
  }
  const xw = [
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
  ], vw = [
    "key"
  ], yw = uc();
  function Sw(e) {
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, color: l, error: s, helperText: a, size: i, variant: d = "standard" } = e, u = fe(e, xw), f = {
      color: l,
      error: s,
      helperText: a,
      size: i,
      variant: d
    }, h = ot(), g = ie();
    let m = null;
    if (t.field) {
      const v = o.current.getColumn(t.field);
      Oo(v) && (m = v);
    }
    const x = m == null ? void 0 : m.getOptionValue, I = m == null ? void 0 : m.getOptionLabel, S = c.useCallback((v, R) => x(v) === x(R), [
      x
    ]), w = c.useMemo(() => Zn(m) || [], [
      m
    ]), F = c.useMemo(() => Array.isArray(t.value) ? t.value.reduce((v, R) => {
      const A = w.find(($) => x($) === R);
      return A != null && v.push(A), v;
    }, []) : [], [
      x,
      t.value,
      w
    ]), H = c.useCallback((v, R) => {
      n(b({}, t, {
        value: R.map(x)
      }));
    }, [
      n,
      t,
      x
    ]);
    return p.jsx(xc, b({
      multiple: true,
      options: w,
      isOptionEqualToValue: S,
      filterOptions: yw,
      id: h,
      value: F,
      onChange: H,
      getOptionLabel: I,
      renderTags: (v, R) => v.map((A, $) => {
        const y = R({
          index: $
        }), { key: C } = y, M = fe(y, vw);
        return p.jsx(g.slots.baseChip, b({
          variant: "outlined",
          size: "small",
          label: I(A)
        }, M), C);
      }),
      renderInput: (v) => {
        var _a2;
        return p.jsx(g.slots.baseTextField, b({}, v, {
          label: o.current.getLocaleText("filterPanelInputLabel"),
          placeholder: o.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: b({}, v.InputLabelProps, {
            shrink: true
          }),
          inputRef: r,
          type: "singleSelect"
        }, f, (_a2 = g.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, u));
  }
  const co = (e) => e == null || !Vs(e) ? e : e.value, Iw = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => co(t) === co(e.value),
      InputComponent: ga
    },
    {
      value: "not",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => co(t) !== co(e.value),
      InputComponent: ga
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => {
        if (!Array.isArray(e.value) || e.value.length === 0) return null;
        const t = e.value.map(co);
        return (n) => t.includes(co(n));
      },
      InputComponent: Sw
    }
  ], Pw = (e) => typeof e[0] == "object", Mw = (e) => Vs(e) ? e.value : e, kw = (e) => Vs(e) ? e.label : String(e), Ew = b({}, gn, {
    type: "singleSelect",
    getOptionLabel: kw,
    getOptionValue: Mw,
    valueFormatter(e, t, n, o) {
      const r = kr(o.current.state, t);
      if (!Oo(n)) return "";
      const l = Zn(n, {
        id: r,
        row: t
      });
      if (e == null) return "";
      if (!l) return e;
      if (!Pw(l)) return n.getOptionLabel(e);
      const s = l.find((a) => n.getOptionValue(a) === e);
      return s ? n.getOptionLabel(s) : "";
    },
    renderEditCell: mw,
    filterOperators: Iw(),
    pastedValueParser: (e, t, n) => {
      const o = n, r = Zn(o) || [], l = o.getOptionValue;
      if (r.find((a) => l(a) === e)) return e;
    }
  }), Fw = "string", Tw = () => ({
    string: gn,
    number: dw,
    date: iw,
    dateTime: aw,
    boolean: au,
    singleSelect: Ew,
    [Cl]: cC,
    custom: gn
  }), Js = (e) => e.headerFiltering, Ow = we(Js, (e) => (e == null ? void 0 : e.enabled) ?? false), Dw = we(Js, (e) => e.editing), Rw = we(Js, (e) => e.menuOpen), Il = (e) => e.columnGrouping, Eu = qe(Il, (e) => (e == null ? void 0 : e.unwrappedGroupingModel) ?? {}), Fu = qe(Il, (e) => (e == null ? void 0 : e.lookup) ?? {}), $w = qe(Il, (e) => (e == null ? void 0 : e.headerStructure) ?? []), Er = we(Il, (e) => (e == null ? void 0 : e.maxDepth) ?? 0), Tu = [
    "maxWidth",
    "minWidth",
    "width",
    "flex"
  ], Vl = Tw();
  function Hw({ initialFreeSpace: e, totalFlexUnits: t, flexColumns: n }) {
    const o = new Set(n.map((s) => s.field)), r = {
      all: {},
      frozenFields: [],
      freeze: (s) => {
        const a = r.all[s];
        a && a.frozen !== true && (r.all[s].frozen = true, r.frozenFields.push(s));
      }
    };
    function l() {
      if (r.frozenFields.length === o.size) return;
      const s = {
        min: {},
        max: {}
      };
      let a = e, i = t, d = 0;
      r.frozenFields.forEach((u) => {
        a -= r.all[u].computedWidth, i -= r.all[u].flex;
      });
      for (let u = 0; u < n.length; u += 1) {
        const f = n[u];
        if (r.all[f.field] && r.all[f.field].frozen === true) continue;
        let g = a / i * f.flex;
        g < f.minWidth ? (d += f.minWidth - g, g = f.minWidth, s.min[f.field] = true) : g > f.maxWidth && (d += f.maxWidth - g, g = f.maxWidth, s.max[f.field] = true), r.all[f.field] = {
          frozen: false,
          computedWidth: g,
          flex: f.flex
        };
      }
      d < 0 ? Object.keys(s.max).forEach((u) => {
        r.freeze(u);
      }) : d > 0 ? Object.keys(s.min).forEach((u) => {
        r.freeze(u);
      }) : n.forEach(({ field: u }) => {
        r.freeze(u);
      }), l();
    }
    return l(), r.all;
  }
  const gs = (e, t) => {
    const n = {};
    let o = 0, r = 0;
    const l = [];
    e.orderedFields.forEach((i) => {
      let d = e.lookup[i], u = 0, f = false;
      e.columnVisibilityModel[i] !== false && (d.flex && d.flex > 0 ? (o += d.flex, f = true) : u = Wt(d.width || gn.width, d.minWidth || gn.minWidth, d.maxWidth || gn.maxWidth), r += u), d.computedWidth !== u && (d = b({}, d, {
        computedWidth: u
      })), f && l.push(d), n[i] = d;
    });
    const s = t === void 0 ? 0 : t.viewportOuterSize.width - (t.hasScrollY ? t.scrollbarSize : 0), a = Math.max(s - r, 0);
    if (o > 0 && s > 0) {
      const i = Hw({
        initialFreeSpace: a,
        totalFlexUnits: o,
        flexColumns: l
      });
      Object.keys(i).forEach((d) => {
        n[d].computedWidth = i[d].computedWidth;
      });
    }
    return b({}, e, {
      lookup: n
    });
  }, Lw = (e, t) => {
    if (!t) return e;
    const { orderedFields: n = [], dimensions: o = {} } = t, r = Object.keys(o);
    if (r.length === 0 && n.length === 0) return e;
    const l = {}, s = [];
    for (let u = 0; u < n.length; u += 1) {
      const f = n[u];
      e.lookup[f] && (l[f] = true, s.push(f));
    }
    const a = s.length === 0 ? e.orderedFields : [
      ...s,
      ...e.orderedFields.filter((u) => !l[u])
    ], i = b({}, e.lookup);
    for (let u = 0; u < r.length; u += 1) {
      const f = r[u], h = b({}, i[f], {
        hasBeenResized: true
      });
      Object.entries(o[f]).forEach(([g, m]) => {
        h[g] = m === -1 ? 1 / 0 : m;
      }), i[f] = h;
    }
    return b({}, e, {
      orderedFields: a,
      lookup: i
    });
  };
  function ha(e) {
    let t = Vl[Fw];
    return e && Vl[e] && (t = Vl[e]), t;
  }
  const fo = ({ apiRef: e, columnsToUpsert: t, initialState: n, columnVisibilityModel: o = en(e), keepOnlyColumnsToUpsert: r = false }) => {
    var _a2, _b2;
    const l = !e.current.state.columns;
    let s;
    if (l) s = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel: o
    };
    else {
      const u = vn(e.current.state);
      s = {
        orderedFields: r ? [] : [
          ...u.orderedFields
        ],
        lookup: b({}, u.lookup),
        columnVisibilityModel: o
      };
    }
    let a = {};
    r && !l && (a = Object.keys(s.lookup).reduce((u, f) => b({}, u, {
      [f]: false
    }), {})), t.forEach((u) => {
      const { field: f } = u;
      a[f] = true;
      let h = s.lookup[f];
      h == null ? (h = b({}, ha(u.type), {
        field: f,
        hasBeenResized: false
      }), s.orderedFields.push(f)) : r && s.orderedFields.push(f), h && h.type !== u.type && (h = b({}, ha(u.type), {
        field: f
      }));
      let g = h.hasBeenResized;
      Tu.forEach((m) => {
        u[m] !== void 0 && (g = true, u[m] === -1 && (u[m] = 1 / 0));
      }), s.lookup[f] = Td(h, b({}, u, {
        hasBeenResized: g
      }));
    }), r && !l && Object.keys(s.lookup).forEach((u) => {
      a[u] || delete s.lookup[u];
    });
    const i = e.current.unstable_applyPipeProcessors("hydrateColumns", s), d = Lw(i, n);
    return gs(d, ((_b2 = (_a2 = e.current).getRootDimensions) == null ? void 0 : _b2.call(_a2)) ?? void 0);
  };
  function jw({ firstColumnToRender: e, apiRef: t, firstRowToRender: n, lastRowToRender: o, visibleRows: r }) {
    let l = e, s = false;
    for (; !s; ) {
      s = true;
      for (let a = n; a < o; a += 1) if (r[a]) {
        const d = r[a].id, u = t.current.unstable_getCellColSpanInfo(d, l);
        if (u && u.spannedByColSpan && u.leftVisibleCellIndex < l) {
          l = u.leftVisibleCellIndex, s = false;
          break;
        }
      }
    }
    return l;
  }
  function Pl(e, t) {
    if (t.unstable_listView) return 0;
    const n = Ro(e), o = Er(e), r = Ow(e), l = Math.floor(t.columnHeaderHeight * n), s = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * n), a = r ? Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * n) : 0;
    return l + s * o + a;
  }
  const Go = (e) => e.rowsMeta, al = 1, Ou = 1.5, Aw = (e) => {
    const { scrollDirection: t, classes: n } = e, o = {
      root: [
        "scrollArea",
        `scrollArea--${t}`
      ]
    };
    return ge(o, De, n);
  }, zw = et("div", {
    name: "MuiDataGrid",
    slot: "ScrollArea",
    overridesResolver: (e, t) => [
      {
        [`&.${k["scrollArea--left"]}`]: t["scrollArea--left"]
      },
      {
        [`&.${k["scrollArea--right"]}`]: t["scrollArea--right"]
      },
      {
        [`&.${k["scrollArea--up"]}`]: t["scrollArea--up"]
      },
      {
        [`&.${k["scrollArea--down"]}`]: t["scrollArea--down"]
      },
      t.scrollArea
    ]
  })(() => ({
    position: "absolute",
    zIndex: 101,
    [`&.${k["scrollArea--left"]}`]: {
      top: 0,
      left: 0,
      width: 20,
      bottom: 0
    },
    [`&.${k["scrollArea--right"]}`]: {
      top: 0,
      right: 0,
      width: 20,
      bottom: 0
    },
    [`&.${k["scrollArea--up"]}`]: {
      top: 0,
      left: 0,
      right: 0,
      height: 20
    },
    [`&.${k["scrollArea--down"]}`]: {
      bottom: 0,
      left: 0,
      right: 0,
      height: 20
    }
  })), Gw = yr(Ct, (e, t) => t === "left" ? e.leftPinnedWidth : t === "right" ? e.rightPinnedWidth + (e.hasScrollX ? e.scrollbarSize : 0) : 0);
  function _w(e) {
    const t = Ee(), [n, o] = c.useState("none");
    return re(t, "columnHeaderDragStart", () => o("horizontal")), re(t, "columnHeaderDragEnd", () => o("none")), re(t, "rowDragStart", () => o("vertical")), re(t, "rowDragEnd", () => o("none")), n === "none" ? null : n === "horizontal" ? p.jsx(Vw, b({}, e)) : p.jsx(Nw, b({}, e));
  }
  function Vw(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = c.useRef(null), r = Ee(), l = Nt(), s = X(r, Ro), a = X(r, bl), i = dr(r, Gw, t), d = () => {
      const x = Ct(r.current.state);
      if (t === "left") return n.current.left > 0;
      if (t === "right") {
        const I = a - x.viewportInnerSize.width;
        return n.current.left < I;
      }
      return false;
    }, u = ie(), f = Pl(r, u), h = Math.floor(u.columnHeaderHeight * s), g = b({
      height: h,
      top: f - h
    }, t === "left" ? {
      left: i
    } : {}, t === "right" ? {
      right: i
    } : {}), m = Be((x) => {
      let I;
      if (x.preventDefault(), t === "left") I = x.clientX - o.current.getBoundingClientRect().right;
      else if (t === "right") I = Math.max(1, x.clientX - o.current.getBoundingClientRect().left);
      else throw new Error("MUI X: Wrong drag direction");
      I = (I - al) * Ou + al, l.start(0, () => {
        r.current.scroll({
          left: n.current.left + I,
          top: n.current.top
        });
      });
    });
    return p.jsx(Du, b({}, e, {
      ref: o,
      getCanScrollMore: d,
      style: g,
      handleDragOver: m
    }));
  }
  function Nw(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = c.useRef(null), r = Ee(), l = Nt(), s = X(r, Go), a = () => {
      const h = Ct(r.current.state);
      if (t === "up") return n.current.top > 0;
      if (t === "down") {
        const m = (s.currentPageTotalHeight || 0) - h.viewportInnerSize.height - h.scrollbarSize;
        return n.current.top < m;
      }
      return false;
    }, i = ie(), d = Pl(r, i), u = {
      top: t === "up" ? d : void 0,
      bottom: t === "down" ? 0 : void 0
    }, f = Be((h) => {
      let g;
      if (h.preventDefault(), t === "up") g = h.clientY - o.current.getBoundingClientRect().bottom;
      else if (t === "down") g = Math.max(1, h.clientY - o.current.getBoundingClientRect().top);
      else throw new Error("MUI X: Wrong drag direction");
      g = (g - al) * Ou + al, l.start(0, () => {
        r.current.scroll({
          left: n.current.left,
          top: n.current.top + g
        });
      });
    });
    return p.jsx(Du, b({}, e, {
      ref: o,
      getCanScrollMore: a,
      style: u,
      handleDragOver: f
    }));
  }
  const Du = ze(function(t, n) {
    const { scrollDirection: o, getCanScrollMore: r, style: l, handleDragOver: s } = t, a = Ee(), [i, d] = c.useState(r), u = ie(), f = b({}, u, {
      scrollDirection: o
    }), h = Aw(f);
    return re(a, "scrollPositionChange", () => {
      d(r);
    }), i ? p.jsx(zw, {
      ref: n,
      className: h.root,
      ownerState: f,
      onDragOver: s,
      style: l
    }) : null;
  }), Br = On(_w);
  var Zs = {}, Ru = {
    exports: {}
  }, $u = {
    exports: {}
  };
  (function(e) {
    function t(n) {
      "@babel/helpers - typeof";
      return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, e.exports.__esModule = true, e.exports.default = e.exports, t(n);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  })($u);
  var Bw = $u.exports;
  (function(e) {
    var t = Bw.default;
    function n(o, r) {
      if (typeof WeakMap == "function") var l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
      return (e.exports = n = function(i, d) {
        if (!d && i && i.__esModule) return i;
        var u, f, h = {
          __proto__: null,
          default: i
        };
        if (i === null || t(i) != "object" && typeof i != "function") return h;
        if (u = d ? s : l) {
          if (u.has(i)) return u.get(i);
          u.set(i, h);
        }
        for (var g in i) g !== "default" && {}.hasOwnProperty.call(i, g) && ((f = (u = Object.defineProperty) && Object.getOwnPropertyDescriptor(i, g)) && (f.get || f.set) ? u(h, g, f) : h[g] = i[g]);
        return h;
      }, e.exports.__esModule = true, e.exports.default = e.exports)(o, r);
    }
    e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
  })(Ru);
  var Ww = Ru.exports, Uw = Ww.default;
  Object.defineProperty(Zs, "__esModule", {
    value: true
  });
  var Hu = Zs.default = void 0, Kw = Uw(c);
  Hu = Zs.default = parseInt(Kw.version, 10);
  const Lu = c.createContext(void 0);
  function cn() {
    const e = c.useContext(Lu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid private context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const Nn = (e, t) => Mr(e), ei = (e, t) => X(e, Mr), qw = typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "empty", Yw = qw.includes("firefox"), Ml = (e) => e.virtualization;
  we(Ml, (e) => e.enabled);
  const ju = we(Ml, (e) => e.enabledForColumns), Xw = we(Ml, (e) => e.enabledForRows), Fr = we(Ml, (e) => e.renderContext), Qw = qe((e) => e.virtualization.renderContext.firstColumnIndex, (e) => e.virtualization.renderContext.lastColumnIndex, (e, t) => ({
    firstColumnIndex: e,
    lastColumnIndex: t
  })), hs = {
    firstRowIndex: 0,
    lastRowIndex: 0,
    firstColumnIndex: 0,
    lastColumnIndex: 0
  }, Jw = (e, t) => {
    const { disableVirtualization: n, autoHeight: o } = t;
    return b({}, e, {
      virtualization: {
        enabled: !n,
        enabledForColumns: !n,
        enabledForRows: !n && !o,
        renderContext: hs
      }
    });
  };
  function Zw(e, t) {
    const n = (l) => {
      e.current.setState((s) => b({}, s, {
        virtualization: b({}, s.virtualization, {
          enabled: l,
          enabledForColumns: l,
          enabledForRows: l && !t.autoHeight
        })
      }));
    };
    ke(e, {
      unstable_setVirtualization: n,
      unstable_setColumnVirtualization: (l) => {
        e.current.setState((s) => b({}, s, {
          virtualization: b({}, s.virtualization, {
            enabledForColumns: l
          })
        }));
      }
    }, "public"), c.useEffect(() => {
      n(!t.disableVirtualization);
    }, [
      t.disableVirtualization,
      t.autoHeight
    ]);
  }
  const ti = (e) => e.rowSpanning, Au = we(ti, (e) => e.hiddenCells), ex = we(ti, (e) => e.spannedCells), tx = we(ti, (e) => e.hiddenCellOriginMap), Do = (e) => e.listViewColumn, nx = Dc($t, Fr, Mr, it, Zt, (e, t, n, o, r) => {
    if (!e) return false;
    const l = r[e.id];
    if (!l) return false;
    const s = n.rowToIndexMap.get(l), a = o.slice(t.firstColumnIndex, t.lastColumnIndex).findIndex((d) => d.field === e.field);
    return !(s !== void 0 && a !== -1 && s >= t.firstRowIndex && s <= t.lastRowIndex);
  }), zu = qe(nx, it, Mr, Zt, $t, (e, t, n, o, r) => {
    if (!e) return null;
    const l = o[r.id];
    if (!l) return null;
    const s = n.rowToIndexMap.get(l);
    if (s === void 0) return null;
    const a = t.findIndex((i) => i.field === r.field);
    return a === -1 ? null : b({}, r, {
      rowIndex: s,
      columnIndex: a
    });
  });
  function Co(e, t) {
    return Math.round(e * 10 ** t) / 10 ** t;
  }
  const cl = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), Nl = 50;
  var pt = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e;
  })(pt || {});
  const ma = {
    top: 0,
    left: 0
  }, ox = Object.freeze(/* @__PURE__ */ new Map()), rx = (e, t, n, o, r) => ({
    direction: pt.NONE,
    buffer: _u(e, pt.NONE, t, n, o, r)
  }), lx = () => {
    var _a2;
    const e = cn(), t = ie(), { unstable_listView: n } = t, o = X(e, () => n ? [
      Do(e.current.state)
    ] : it(e)), r = X(e, Xw) && !cl, l = X(e, ju) && !cl, s = X(e, $o), a = Lo(e), i = n ? ll : a, d = s.bottom.length > 0, [u, f] = c.useState(ox), h = Gt(), g = X(e, Vn), m = ei(e), x = e.current.mainElementRef, I = e.current.virtualScrollerRef, S = e.current.virtualScrollbarVerticalRef, w = e.current.virtualScrollbarHorizontalRef, F = X(e, Ub), H = c.useRef(false), v = X(e, Gs), R = X(e, lb), A = X(e, bl), $ = X(e, sx), y = X(e, _c), C = X(e, Gc), M = c.useRef(null), T = c.useCallback((Y) => {
      if (x.current = Y, !Y) return;
      const oe = Y.getBoundingClientRect();
      let he = {
        width: Co(oe.width, 1),
        height: Co(oe.height, 1)
      };
      if ((!M.current || he.width !== M.current.width && he.height !== M.current.height) && (M.current = he, e.current.publishEvent("resize", he)), typeof ResizeObserver > "u") return;
      const Z = new ResizeObserver((Ie) => {
        const ee = Ie[0];
        if (!ee) return;
        const ye = {
          width: Co(ee.contentRect.width, 1),
          height: Co(ee.contentRect.height, 1)
        };
        ye.width === he.width && ye.height === he.height || (e.current.publishEvent("resize", ye), he = ye);
      });
      if (Z.observe(Y), Hu >= 19) return () => {
        x.current = null, Z.disconnect();
      };
    }, [
      e,
      x
    ]), O = c.useRef(((_a2 = t.initialState) == null ? void 0 : _a2.scroll) ?? ma), G = c.useRef(false), E = c.useRef(ma), P = c.useRef(hs), D = X(e, Fr), L = X(e, zu), z = Nt(), _ = c.useRef(void 0), j = In(() => rx(h, t.rowBufferPx, t.columnBufferPx, v * 15, Nl * 6)).current, V = c.useCallback((Y) => {
      if (xa(Y, e.current.state.virtualization.renderContext)) return;
      const oe = Y.firstRowIndex !== P.current.firstRowIndex || Y.lastRowIndex !== P.current.lastRowIndex;
      e.current.setState((Z) => b({}, Z, {
        virtualization: b({}, Z.virtualization, {
          renderContext: Y
        })
      })), Ct(e.current.state).isReady && oe && (P.current = Y, e.current.publishEvent("renderedRowsIntervalChange", Y)), E.current = O.current;
    }, [
      e
    ]), K = Be(() => {
      const Y = I.current;
      if (!Y) return;
      const oe = Ct(e.current.state), he = Math.ceil(oe.minimumSize.height - oe.viewportOuterSize.height), Z = Math.ceil(oe.minimumSize.width - oe.viewportInnerSize.width), Ie = {
        top: Wt(Y.scrollTop, 0, he),
        left: h ? Wt(Y.scrollLeft, -Z, 0) : Wt(Y.scrollLeft, 0, Z)
      }, ee = Ie.left - O.current.left, ye = Ie.top - O.current.top, xe = ee !== 0 || ye !== 0;
      O.current = Ie;
      const Fe = xe ? cx(ee, ye) : pt.NONE, Ne = Math.abs(O.current.top - E.current.top), Ue = Math.abs(O.current.left - E.current.left), Ge = Ne >= v || Ue >= Nl, He = j.direction !== Fe;
      if (!(Ge || He)) return D;
      if (He) switch (Fe) {
        case pt.NONE:
        case pt.LEFT:
        case pt.RIGHT:
          _.current = void 0;
          break;
        default:
          _.current = D;
          break;
      }
      j.direction = Fe, j.buffer = _u(h, Fe, t.rowBufferPx, t.columnBufferPx, v * 15, Nl * 6);
      const Ke = ba(e, t, r, l), _e = Ca(Ke, O.current, j);
      return xa(_e, D) || (Od.flushSync(() => {
        V(_e);
      }), z.start(1e3, K)), _e;
    }), W = () => {
      if (!Ct(e.current.state).isReady && (r || l)) return;
      const Y = ba(e, t, r, l), oe = Ca(Y, O.current, j);
      _.current = void 0, V(oe);
    }, U = Be(() => {
      if (G.current) {
        G.current = false;
        return;
      }
      const Y = K();
      e.current.publishEvent("scrollPositionChange", {
        top: O.current.top,
        left: O.current.left,
        renderContext: Y
      });
    }), B = Be((Y) => {
      e.current.publishEvent("virtualScrollerWheel", {}, Y);
    }), te = Be((Y) => {
      e.current.publishEvent("virtualScrollerTouchMove", {}, Y);
    }), J = (Y = {}) => {
      var _a3;
      if (!Y.rows && !m.range) return [];
      const oe = ht(e);
      let he = D;
      Y.renderContext && (he = Y.renderContext, he.firstColumnIndex = D.firstColumnIndex, he.lastColumnIndex = D.lastColumnIndex);
      const Z = !d && Y.position === void 0 || d && Y.position === "bottom", Ie = Y.position !== void 0;
      let ee;
      switch (Y.position) {
        case "top":
          ee = 0;
          break;
        case "bottom":
          ee = s.top.length + m.rows.length;
          break;
        case void 0:
          ee = s.top.length;
          break;
      }
      const ye = Y.rows ?? m.rows, xe = he.firstRowIndex, Fe = Math.min(he.lastRowIndex, ye.length), Ne = Y.rows ? oa(0, Y.rows.length) : oa(xe, Fe);
      let Ue = -1;
      !Ie && L && (L.rowIndex < xe && (Ne.unshift(L.rowIndex), Ue = L.rowIndex), L.rowIndex > Fe && (Ne.push(L.rowIndex), Ue = L.rowIndex));
      const Ge = [], He = (_a3 = t.slotProps) == null ? void 0 : _a3.row, Le = Un(e);
      return Ne.forEach((Ke) => {
        var _a4, _b2, _c2;
        const { id: _e, model: me } = ye[Ke];
        if (!oe[_e]) return;
        const ve = (((_a4 = m == null ? void 0 : m.range) == null ? void 0 : _a4.firstRowIndex) || 0) + ee + Ke;
        if (F) {
          const Rt = i.left.length, Ft = o.length - i.right.length;
          e.current.calculateColSpan({
            rowId: _e,
            minFirstColumn: Rt,
            maxLastColumn: Ft,
            columns: o
          }), i.left.length > 0 && e.current.calculateColSpan({
            rowId: _e,
            minFirstColumn: 0,
            maxLastColumn: i.left.length,
            columns: o
          }), i.right.length > 0 && e.current.calculateColSpan({
            rowId: _e,
            minFirstColumn: o.length - i.right.length,
            maxLastColumn: o.length,
            columns: o
          });
        }
        const pe = e.current.rowHasAutoHeight(_e) ? "auto" : e.current.unstable_getRowHeight(_e);
        let be;
        g[_e] == null ? be = false : be = e.current.isRowSelectable(_e);
        let je = false;
        Y.position === void 0 && (je = Ke === 0);
        let $e = false;
        const lt = Ke === ye.length - 1;
        if (Z) if (Ie) $e = lt;
        else {
          const Rt = m.rows.length - 1;
          Ke === Rt && ($e = true);
        }
        let xt = he;
        _.current && Ke >= _.current.firstRowIndex && Ke < _.current.lastRowIndex && (xt = _.current);
        const ft = Ke === Ue, Pn = (L == null ? void 0 : L.rowIndex) === ve, Dt = Gu(Le, xt, i.left.length), Mn = lt && Y.position === "top", It = xt.firstColumnIndex, _t = xt.lastColumnIndex;
        if (Ge.push(p.jsx(t.slots.row, b({
          row: me,
          rowId: _e,
          index: ve,
          selected: be,
          offsetLeft: Dt,
          columnsTotalWidth: A,
          rowHeight: pe,
          pinnedColumns: i,
          visibleColumns: o,
          firstColumnIndex: It,
          lastColumnIndex: _t,
          focusedColumnIndex: Pn ? L.columnIndex : void 0,
          isFirstVisible: je,
          isLastVisible: $e,
          isNotVisible: ft,
          showBottomBorder: Mn,
          scrollbarWidth: y,
          gridHasFiller: C
        }, He), _e)), ft) return;
        const Et = u.get(_e);
        Et && Ge.push(Et), Y.position === void 0 && lt && Ge.push((_c2 = (_b2 = e.current).getInfiniteLoadingTriggerElement) == null ? void 0 : _c2.call(_b2, {
          lastRowId: _e
        }));
      }), Ge;
    }, ne = c.useMemo(() => ({
      overflowX: !$ || n ? "hidden" : void 0,
      overflowY: t.autoHeight ? "hidden" : void 0
    }), [
      $,
      t.autoHeight,
      n
    ]), ce = c.useMemo(() => {
      const Y = {
        width: $ ? A : "auto",
        flexBasis: R,
        flexShrink: 0
      };
      return Y.flexBasis === 0 && (Y.flexBasis = lu), Y;
    }, [
      A,
      R,
      $
    ]), Ce = c.useCallback((Y) => {
      Y && e.current.publishEvent("virtualScrollerContentSizeChange", {
        columnsTotalWidth: A,
        contentHeight: R
      });
    }, [
      e,
      A,
      R
    ]);
    return St(() => {
      var _a3, _b2;
      H.current && ((_b2 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a3));
    }, [
      e,
      l,
      r
    ]), St(() => {
      n && (I.current.scrollLeft = 0);
    }, [
      n,
      I
    ]), BC(D !== hs, () => {
      var _a3;
      if (e.current.publishEvent("scrollPositionChange", {
        top: O.current.top,
        left: O.current.left,
        renderContext: D
      }), H.current = true, ((_a3 = t.initialState) == null ? void 0 : _a3.scroll) && I.current) {
        const Y = I.current, { top: oe, left: he } = t.initialState.scroll, Z = {
          top: !(oe > 0),
          left: !(he > 0)
        };
        if (!Z.left && A && (Y.scrollLeft = he, G.current = true, Z.left = true), !Z.top && R && (Y.scrollTop = oe, G.current = true, Z.top = true), !Z.top || !Z.left) {
          const Ie = e.current.subscribeEvent("virtualScrollerContentSizeChange", (ee) => {
            !Z.left && ee.columnsTotalWidth && (Y.scrollLeft = he, G.current = true, Z.left = true), !Z.top && ee.contentHeight && (Y.scrollTop = oe, G.current = true, Z.top = true), Z.left && Z.top && Ie();
          });
          return Ie;
        }
      }
    }), e.current.register("private", {
      updateRenderContext: W
    }), Je(e, "sortedRowsSet", W), Je(e, "paginationModelChange", W), Je(e, "columnsChange", W), {
      renderContext: D,
      setPanels: f,
      getRows: J,
      getContainerProps: () => ({
        ref: T
      }),
      getScrollerProps: () => ({
        ref: I,
        onScroll: U,
        onWheel: B,
        onTouchMove: te,
        style: ne,
        role: "presentation",
        tabIndex: Yw ? -1 : void 0
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
        ref: S,
        scrollPosition: O
      }),
      getScrollbarHorizontalProps: () => ({
        ref: w,
        scrollPosition: O
      }),
      getScrollAreaProps: () => ({
        scrollPosition: O
      })
    };
  };
  function sx(e) {
    return e.dimensions.viewportOuterSize.width > 0 && e.dimensions.columnsTotalWidth > e.dimensions.viewportOuterSize.width;
  }
  function ba(e, t, n, o) {
    const r = Ct(e.current.state), l = Nn(e), s = t.unstable_listView ? [
      Do(e.current.state)
    ] : it(e), a = tx(e), i = e.current.state.rows.dataRowIds.at(-1), d = s.at(-1);
    return {
      enabledForRows: n,
      enabledForColumns: o,
      apiRef: e,
      autoHeight: t.autoHeight,
      rowBufferPx: t.rowBufferPx,
      columnBufferPx: t.columnBufferPx,
      leftPinnedWidth: r.leftPinnedWidth,
      columnsTotalWidth: r.columnsTotalWidth,
      viewportInnerWidth: r.viewportInnerSize.width,
      viewportInnerHeight: r.viewportInnerSize.height,
      lastRowHeight: i !== void 0 ? e.current.unstable_getRowHeight(i) : 0,
      lastColumnWidth: (d == null ? void 0 : d.computedWidth) ?? 0,
      rowsMeta: Go(e.current.state),
      columnPositions: Un(e),
      rows: l.rows,
      range: l.range,
      pinnedColumns: Lo(e),
      visibleColumns: s,
      hiddenCellsOriginMap: a,
      listView: t.unstable_listView ?? false,
      virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight
    };
  }
  function Ca(e, t, n) {
    const o = {
      firstRowIndex: 0,
      lastRowIndex: e.rows.length,
      firstColumnIndex: 0,
      lastColumnIndex: e.visibleColumns.length
    }, { top: r, left: l } = t, s = Math.abs(l) + e.leftPinnedWidth;
    if (e.enabledForRows) {
      let i = Math.min(wa(e, r, {
        atStart: true,
        lastPosition: e.rowsMeta.positions[e.rowsMeta.positions.length - 1] + e.lastRowHeight
      }), e.rowsMeta.positions.length - 1);
      const d = e.hiddenCellsOriginMap[i];
      if (d) {
        const f = Math.min(...Object.values(d));
        i = Math.min(i, f);
      }
      const u = e.autoHeight ? i + e.rows.length : wa(e, r + e.viewportInnerHeight);
      o.firstRowIndex = i, o.lastRowIndex = u;
    }
    if (e.listView) return b({}, o, {
      lastColumnIndex: 1
    });
    if (e.enabledForColumns) {
      let i = 0, d = e.columnPositions.length, u = false;
      const [f, h] = ms({
        firstIndex: o.firstRowIndex,
        lastIndex: o.lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: e.rows.length,
        bufferBefore: n.buffer.rowBefore,
        bufferAfter: n.buffer.rowAfter,
        positions: e.rowsMeta.positions,
        lastSize: e.lastRowHeight
      });
      if (!e.virtualizeColumnsWithAutoRowHeight) for (let g = f; g < h && !u; g += 1) {
        const m = e.rows[g];
        u = e.apiRef.current.rowHasAutoHeight(m.id);
      }
      (!u || e.virtualizeColumnsWithAutoRowHeight) && (i = Bn(s, e.columnPositions, {
        atStart: true,
        lastPosition: e.columnsTotalWidth
      }), d = Bn(s + e.viewportInnerWidth, e.columnPositions)), o.firstColumnIndex = i, o.lastColumnIndex = d;
    }
    return ix(e, o, n);
  }
  function wa(e, t, n) {
    var _a2, _b2;
    const o = e.apiRef.current.getLastMeasuredRowIndex();
    let r = o === 1 / 0;
    ((_a2 = e.range) == null ? void 0 : _a2.lastRowIndex) && !r && (r = o >= e.range.lastRowIndex);
    const l = Wt(o - (((_b2 = e.range) == null ? void 0 : _b2.firstRowIndex) || 0), 0, e.rowsMeta.positions.length);
    return r || e.rowsMeta.positions[l] >= t ? Bn(t, e.rowsMeta.positions, n) : ax(t, e.rowsMeta.positions, l, n);
  }
  function ix(e, t, n) {
    const [o, r] = ms({
      firstIndex: t.firstRowIndex,
      lastIndex: t.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: e.rows.length,
      bufferBefore: n.buffer.rowBefore,
      bufferAfter: n.buffer.rowAfter,
      positions: e.rowsMeta.positions,
      lastSize: e.lastRowHeight
    }), [l, s] = ms({
      firstIndex: t.firstColumnIndex,
      lastIndex: t.lastColumnIndex,
      minFirstIndex: e.pinnedColumns.left.length,
      maxLastIndex: e.visibleColumns.length - e.pinnedColumns.right.length,
      bufferBefore: n.buffer.columnBefore,
      bufferAfter: n.buffer.columnAfter,
      positions: e.columnPositions,
      lastSize: e.lastColumnWidth
    }), a = jw({
      firstColumnToRender: l,
      apiRef: e.apiRef,
      firstRowToRender: o,
      lastRowToRender: r,
      visibleRows: e.rows
    });
    return {
      firstRowIndex: o,
      lastRowIndex: r,
      firstColumnIndex: a,
      lastColumnIndex: s
    };
  }
  function Bn(e, t, n = void 0, o = 0, r = t.length) {
    if (t.length <= 0) return -1;
    if (o >= r) return o;
    const l = o + Math.floor((r - o) / 2), s = t[l];
    let a;
    if (n == null ? void 0 : n.atStart) {
      const i = (l === t.length - 1 ? n.lastPosition : t[l + 1]) - s;
      a = e - i < s;
    } else a = e <= s;
    return a ? Bn(e, t, n, o, l) : Bn(e, t, n, l + 1, r);
  }
  function ax(e, t, n, o = void 0) {
    let r = 1;
    for (; n < t.length && Math.abs(t[n]) < e; ) n += r, r *= 2;
    return Bn(e, t, o, Math.floor(n / 2), Math.min(n, t.length));
  }
  function ms({ firstIndex: e, lastIndex: t, bufferBefore: n, bufferAfter: o, minFirstIndex: r, maxLastIndex: l, positions: s, lastSize: a }) {
    const i = s[e] - n, d = s[t] + o, u = Bn(i, s, {
      atStart: true,
      lastPosition: s[s.length - 1] + a
    }), f = Bn(d, s);
    return [
      Wt(u, r, l),
      Wt(f, r, l)
    ];
  }
  function xa(e, t) {
    return e === t ? true : e.firstRowIndex === t.firstRowIndex && e.lastRowIndex === t.lastRowIndex && e.firstColumnIndex === t.firstColumnIndex && e.lastColumnIndex === t.lastColumnIndex;
  }
  function Gu(e, t, n) {
    const o = (e[t.firstColumnIndex] ?? 0) - (e[n] ?? 0);
    return Math.abs(o);
  }
  function cx(e, t) {
    return e === 0 && t === 0 ? pt.NONE : Math.abs(t) >= Math.abs(e) ? t > 0 ? pt.DOWN : pt.UP : e > 0 ? pt.RIGHT : pt.LEFT;
  }
  function _u(e, t, n, o, r, l) {
    if (e) switch (t) {
      case pt.LEFT:
        t = pt.RIGHT;
        break;
      case pt.RIGHT:
        t = pt.LEFT;
        break;
    }
    switch (t) {
      case pt.NONE:
        return {
          rowAfter: n,
          rowBefore: n,
          columnAfter: o,
          columnBefore: o
        };
      case pt.LEFT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: l
        };
      case pt.RIGHT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: l,
          columnBefore: 0
        };
      case pt.UP:
        return {
          rowAfter: 0,
          rowBefore: r,
          columnAfter: 0,
          columnBefore: 0
        };
      case pt.DOWN:
        return {
          rowAfter: r,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: 0
        };
      default:
        throw new Error("unreachable");
    }
  }
  const ux = () => {
    var _a2, _b2;
    const e = Ee(), t = ie(), n = X(e, Sr), o = X(e, Ks), r = X(e, Vc), l = n === 0 && r === 0, s = X(e, Mb), a = !s && l, i = !s && n > 0 && o === 0;
    let d = null, u = null;
    return a && (d = "noRowsOverlay"), i && (d = "noResultsOverlay"), s && (d = "loadingOverlay", u = ((_b2 = (_a2 = t.slotProps) == null ? void 0 : _a2.loadingOverlay) == null ? void 0 : _b2[l ? "noRowsVariant" : "variant"]) || null), {
      overlayType: d,
      loadingOverlayVariant: u
    };
  }, dx = et("div", {
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
  } : {}), px = et("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapperInner",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapperInner
  })({}), fx = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "overlayWrapper"
      ],
      inner: [
        "overlayWrapperInner"
      ]
    }, De, t);
  };
  function gx(e) {
    const t = Ee(), n = ie(), o = X(t, Ct);
    let r = Math.max(o.viewportOuterSize.height - o.topContainerHeight - o.bottomContainerHeight - (o.hasScrollX ? o.scrollbarSize : 0), 0);
    r === 0 && (r = lu);
    const l = fx(b({}, e, {
      classes: n.classes
    }));
    return p.jsx(dx, b({
      className: ue(l.root)
    }, e, {
      children: p.jsx(px, b({
        className: ue(l.inner),
        style: {
          height: r,
          width: o.viewportOuterSize.width
        }
      }, e))
    }));
  }
  function hx(e) {
    var _a2, _b2;
    const { overlayType: t } = e, n = ie();
    if (!t) return null;
    const o = (_a2 = n.slots) == null ? void 0 : _a2[t], r = (_b2 = n.slotProps) == null ? void 0 : _b2[t];
    return p.jsx(gx, b({}, e, {
      children: p.jsx(o, b({}, r))
    }));
  }
  const Xr = (e) => e.columnMenu;
  function mx() {
    var _a2;
    const e = cn(), t = ie(), n = X(e, it), o = X(e, OC), r = X(e, EC), l = X(e, mu), s = X(e, () => Xs(e) === null), a = X(e, VC), i = X(e, _C), d = X(e, sl), u = X(e, Er), f = X(e, Xr), h = X(e, en), g = X(e, $w), m = !(a === null && l === null && s), x = e.current.columnHeadersContainerRef;
    return p.jsx(t.slots.columnHeaders, b({
      ref: x,
      visibleColumns: n,
      filterColumnLookup: o,
      sortColumnLookup: r,
      columnHeaderTabIndexState: l,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: u,
      columnMenuState: f,
      columnVisibility: h,
      columnGroupsHeaderStructure: g,
      hasOtherElementInTabSequence: m
    }, (_a2 = t.slotProps) == null ? void 0 : _a2.columnHeaders));
  }
  const bx = On(mx), Vu = c.createContext(void 0), ni = () => {
    const e = c.useContext(Vu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid configuration context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }, Cx = et("div")({
    position: "absolute",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: "calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))"
  }), wx = et("div", {
    name: "MuiDataGrid",
    slot: "Main",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.main,
        n.hasPinnedRight && t["main--hasPinnedRight"],
        n.loadingOverlayVariant === "skeleton" && t["main--hasSkeletonLoadingOverlay"]
      ];
    }
  })({
    flexGrow: 1,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  }), xx = ze((e, t) => {
    var _a2;
    const { ownerState: n } = e, o = ie(), l = ni().hooks.useGridAriaAttributes();
    return p.jsxs(wx, b({
      ownerState: n,
      className: e.className,
      tabIndex: -1
    }, l, (_a2 = o.slotProps) == null ? void 0 : _a2.main, {
      ref: t,
      children: [
        p.jsx(Cx, {
          role: "presentation",
          "data-id": "gridPanelAnchor"
        }),
        e.children
      ]
    }));
  }), vx = () => ge({
    root: [
      "topContainer"
    ]
  }, De, {}), yx = et("div")({
    position: "sticky",
    zIndex: 40,
    top: 0
  });
  function Sx(e) {
    const t = vx();
    return p.jsx(yx, b({}, e, {
      className: ue(t.root, k["container--top"]),
      role: "presentation"
    }));
  }
  const Ix = () => ge({
    root: [
      "bottomContainer"
    ]
  }, De, {}), Px = et("div")({
    position: "sticky",
    zIndex: 40,
    bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
  });
  function Mx(e) {
    const t = Ix();
    return p.jsx(Px, b({}, e, {
      className: ue(t.root, k["container--bottom"]),
      role: "presentation"
    }));
  }
  const kx = (e, t) => {
    const { classes: n } = e;
    return ge({
      root: [
        "virtualScrollerContent",
        t && "virtualScrollerContent--overflowed"
      ]
    }, De, n);
  }, Ex = et("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerContent",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.virtualScrollerContent,
        n.overflowedContent && t["virtualScrollerContent--overflowed"]
      ];
    }
  })({}), Fx = ze(function(t, n) {
    var _a2;
    const o = ie(), r = !o.autoHeight && ((_a2 = t.style) == null ? void 0 : _a2.minHeight) === "auto", l = kx(o, r), s = {
      classes: o.classes,
      overflowedContent: r
    };
    return p.jsx(Ex, b({}, t, {
      ownerState: s,
      className: ue(l.root, t.className),
      ref: n
    }));
  }), Tx = et("div")({
    display: "flex",
    flexDirection: "row",
    width: "var(--DataGrid-rowWidth)",
    boxSizing: "border-box"
  }), Nu = et("div")({
    position: "sticky",
    height: "100%",
    boxSizing: "border-box",
    borderTop: "1px solid var(--rowBorderColor)",
    backgroundColor: "var(--DataGrid-pinnedBackground)"
  }), Ox = et(Nu)({
    left: 0,
    borderRight: "1px solid var(--rowBorderColor)"
  }), Dx = et(Nu)({
    right: 0,
    borderLeft: "1px solid var(--rowBorderColor)"
  }), Rx = et("div")({
    flexGrow: 1,
    borderTop: "1px solid var(--rowBorderColor)"
  });
  function $x({ rowsLength: e }) {
    const t = Ee(), { viewportOuterSize: n, minimumSize: o, hasScrollX: r, hasScrollY: l, scrollbarSize: s, leftPinnedWidth: a, rightPinnedWidth: i } = X(t, Ct), d = r ? s : 0, u = n.height - o.height > 0;
    return d === 0 && !u ? null : p.jsxs(Tx, {
      className: k.filler,
      role: "presentation",
      style: {
        height: d,
        "--rowBorderColor": e === 0 ? "transparent" : "var(--DataGrid-rowBorderColor)"
      },
      children: [
        a > 0 && p.jsx(Ox, {
          className: k["filler--pinnedLeft"],
          style: {
            width: a
          }
        }),
        p.jsx(Rx, {}),
        i > 0 && p.jsx(Dx, {
          className: k["filler--pinnedRight"],
          style: {
            width: i + (l ? s : 0)
          }
        })
      ]
    });
  }
  const Hx = On($x), Lx = [
    "className"
  ], jx = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "virtualScrollerRenderZone"
      ]
    }, De, t);
  }, Ax = et("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerRenderZone",
    overridesResolver: (e, t) => t.virtualScrollerRenderZone
  })({
    position: "absolute",
    display: "flex",
    flexDirection: "column"
  }), zx = ze(function(t, n) {
    const { className: o } = t, r = fe(t, Lx), l = Ee(), s = ie(), a = jx(s), i = X(l, () => {
      const d = Fr(l);
      return Go(l.current.state).positions[d.firstRowIndex] ?? 0;
    });
    return p.jsx(Ax, b({
      className: ue(a.root, o),
      ownerState: s,
      style: {
        transform: `translate3d(0, ${i}px, 0)`
      }
    }, r, {
      ref: n
    }));
  }), Gx = {
    includeHeaders: true,
    includeOutliers: false,
    outliersFactor: 1.5,
    expand: false,
    disableColumnVirtualization: true
  }, bt = (e) => e.editRows, Bu = yr(bt, (e, { rowId: t, editMode: n }) => n === Sn.Row && !!e[t]), _x = yr(bt, (e, { rowId: t, field: n }) => {
    var _a2;
    return ((_a2 = e[t]) == null ? void 0 : _a2[n]) ?? null;
  }), gr = (e) => e.preferencePanel, Vx = yr(gr, (e, t) => !!(e.open && e.labelId === t));
  var eo = (function(e) {
    return e.filters = "filters", e.columns = "columns", e;
  })(eo || {});
  const Nx = (e, t) => {
    const { classes: n } = e, o = {
      root: [
        "scrollbar",
        `scrollbar--${t}`
      ],
      content: [
        "scrollbarContent"
      ]
    };
    return ge(o, De, n);
  }, Wu = et("div")({
    position: "absolute",
    display: "inline-block",
    zIndex: 60,
    "&:hover": {
      zIndex: 70
    },
    "--size": "calc(max(var(--DataGrid-scrollbarSize), 14px))"
  }), Bx = et(Wu)({
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
  }), Wx = et(Wu)({
    width: "100%",
    height: "var(--size)",
    overflowY: "hidden",
    overflowX: "auto",
    outline: 0,
    "& > div": {
      height: "var(--size)"
    },
    bottom: "0px"
  }), va = ze(function(t, n) {
    const o = cn(), r = ie(), l = c.useRef(false), s = c.useRef(0), a = c.useRef(null), i = c.useRef(null), d = Nx(r, t.position), u = X(o, Ct), f = t.position === "vertical" ? "height" : "width", h = t.position === "vertical" ? "scrollTop" : "scrollLeft", g = t.position === "vertical" ? "top" : "left", m = t.position === "vertical" ? u.hasScrollX : u.hasScrollY, x = u.minimumSize[f] + (m ? u.scrollbarSize : 0), S = (t.position === "vertical" ? u.viewportInnerSize.height : u.viewportOuterSize.width) * (x / u.viewportOuterSize[f]), w = Be(() => {
      const v = a.current, R = t.scrollPosition.current;
      if (!v || R[g] === s.current) return;
      if (s.current = R[g], l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const A = R[g] / x;
      v[h] = A * S;
    }), F = Be(() => {
      const v = o.current.virtualScrollerRef.current, R = a.current;
      if (!R) return;
      if (l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const A = R[h] / S;
      v[h] = A * x;
    });
    rc(() => {
      const v = o.current.virtualScrollerRef.current, R = a.current, A = {
        passive: true
      };
      return v.addEventListener("scroll", w, A), R.addEventListener("scroll", F, A), () => {
        v.removeEventListener("scroll", w, A), R.removeEventListener("scroll", F, A);
      };
    }), c.useEffect(() => {
      i.current.style.setProperty(f, `${S}px`);
    }, [
      S,
      f
    ]);
    const H = t.position === "vertical" ? Bx : Wx;
    return p.jsx(H, {
      ref: zt(n, a),
      className: d.root,
      style: t.position === "vertical" && r.unstable_listView ? {
        height: "100%",
        top: 0
      } : void 0,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: (v) => {
        v.target.blur();
      },
      children: p.jsx("div", {
        ref: i,
        className: d.content
      })
    });
  }), Ux = (e) => {
    const { classes: t, hasScrollX: n, hasPinnedRight: o, loadingOverlayVariant: r } = e;
    return ge({
      root: [
        "main",
        o && "main--hasPinnedRight",
        r === "skeleton" && "main--hasSkeletonLoadingOverlay"
      ],
      scroller: [
        "virtualScroller",
        n && "virtualScroller--hasScrollX"
      ]
    }, De, t);
  }, Kx = et("div", {
    name: "MuiDataGrid",
    slot: "VirtualScroller",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.virtualScroller,
        n.hasScrollX && t["virtualScroller--hasScrollX"]
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
  }), qx = (e) => e.dimensions.rightPinnedWidth > 0;
  function Yx(e) {
    const t = Ee(), n = ie(), o = X(t, ib), r = X(t, sb), l = X(t, qx), s = X(t, ub), a = ux(), i = {
      classes: n.classes,
      hasScrollX: r,
      hasPinnedRight: l,
      loadingOverlayVariant: a.loadingOverlayVariant
    }, d = Ux(i), u = lx(), { getContainerProps: f, getScrollerProps: h, getContentProps: g, getRenderZoneProps: m, getScrollbarVerticalProps: x, getScrollbarHorizontalProps: I, getRows: S, getScrollAreaProps: w } = u, F = S();
    return p.jsxs(xx, b({
      className: d.root
    }, f(), {
      ownerState: i,
      children: [
        p.jsx(Br, b({
          scrollDirection: "left"
        }, w())),
        p.jsx(Br, b({
          scrollDirection: "right"
        }, w())),
        p.jsx(Br, b({
          scrollDirection: "up"
        }, w())),
        p.jsx(Br, b({
          scrollDirection: "down"
        }, w())),
        p.jsxs(Kx, b({
          className: d.scroller
        }, h(), {
          ownerState: i,
          children: [
            p.jsxs(Sx, {
              children: [
                !n.unstable_listView && p.jsx(bx, {}),
                p.jsx(n.slots.pinnedRows, {
                  position: "top",
                  virtualScroller: u
                })
              ]
            }),
            p.jsx(hx, b({}, a)),
            p.jsx(Fx, b({}, g(), {
              children: p.jsxs(zx, b({}, m(), {
                children: [
                  F,
                  p.jsx(n.slots.detailPanels, {
                    virtualScroller: u
                  })
                ]
              }))
            })),
            s && p.jsx(Hx, {
              rowsLength: F.length
            }),
            p.jsx(Mx, {
              children: p.jsx(n.slots.pinnedRows, {
                position: "bottom",
                virtualScroller: u
              })
            })
          ]
        })),
        r && !n.unstable_listView && p.jsx(va, b({
          position: "horizontal"
        }, I())),
        o && p.jsx(va, b({
          position: "vertical"
        }, x())),
        e.children
      ]
    }));
  }
  function Xx() {
    var _a2;
    const e = ie();
    return e.hideFooter ? null : p.jsx(e.slots.footer, b({}, (_a2 = e.slotProps) == null ? void 0 : _a2.footer));
  }
  let Bl;
  function oi() {
    return Bl === void 0 && document.createElement("div").focus({
      get preventScroll() {
        return Bl = true, false;
      }
    }), Bl;
  }
  function Qx({ defaultSlots: e, slots: t }) {
    const n = t;
    if (!n || Object.keys(n).length === 0) return e;
    const o = b({}, e);
    return Object.keys(n).forEach((r) => {
      const l = r;
      n[l] !== void 0 && (o[l] = n[l]);
    }), o;
  }
  function Jx(e) {
    var _a2;
    if ((_a2 = e.slotProps) == null ? void 0 : _a2.root) return e;
    const t = Object.keys(e);
    if (!t.some((r) => r.startsWith("aria-") || r.startsWith("data-"))) return e;
    const n = {}, o = e.forwardedProps ?? {};
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r];
      l.startsWith("aria-") || l.startsWith("data-") ? o[l] = e[l] : n[l] = e[l];
    }
    return n.forwardedProps = o, n;
  }
  function Zx(e) {
    return c.useMemo(() => Jx(e), [
      e
    ]);
  }
  const ev = (e) => {
    const t = e.match(/^__row_group_by_columns_group_(.*)__$/);
    return t ? t[1] : null;
  }, tv = (e) => e === iu || ev(e) !== null, Uu = (e, t) => {
    if (e) if (t) {
      if (e === Oe.LEFT) return "right";
      if (e === Oe.RIGHT) return "left";
    } else {
      if (e === Oe.LEFT) return "left";
      if (e === Oe.RIGHT) return "right";
    }
  };
  function kl(e, t, n, o) {
    const r = Uu(n, t);
    return !r || o === void 0 || (e[r] = o), e;
  }
  const nv = [
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
  ], ov = [
    "changeReason",
    "unstable_updateValueOnRender"
  ];
  Oe.LEFT + "", An.LEFT, Oe.RIGHT + "", An.RIGHT, Oe.NONE + "", Oe.VIRTUAL + "";
  const rv = (e) => {
    const { align: t, showLeftBorder: n, showRightBorder: o, pinnedPosition: r, isEditable: l, isSelected: s, isSelectionMode: a, classes: i } = e, d = {
      root: [
        "cell",
        `cell--text${se(t)}`,
        s && "selected",
        l && "cell--editable",
        n && "cell--withLeftBorder",
        o && "cell--withRightBorder",
        r === Oe.LEFT && "cell--pinnedLeft",
        r === Oe.RIGHT && "cell--pinnedRight",
        a && !l && "cell--selectionMode"
      ]
    };
    return ge(d, De, i);
  }, lv = ze(function(t, n) {
    var _a2, _b2, _c2;
    const { column: o, row: r, rowId: l, rowNode: s, align: a, colIndex: i, width: d, className: u, style: f, colSpan: h, disableDragEvents: g, isNotVisible: m, pinnedOffset: x, pinnedPosition: I, showRightBorder: S, showLeftBorder: w, onClick: F, onDoubleClick: H, onMouseDown: v, onMouseUp: R, onMouseOver: A, onKeyDown: $, onKeyUp: y, onDragEnter: C, onDragOver: M } = t, T = fe(t, nv), O = cn(), G = ie(), E = Gt(), P = o.field, D = dr(O, _x, {
      rowId: l,
      field: P
    }), z = ni().hooks.useCellAggregationResult(l, P), _ = D ? Qe.Edit : Qe.View, j = O.current.getCellParamsForRow(l, P, r, {
      colDef: o,
      cellMode: _,
      rowNode: s,
      tabIndex: X(O, () => {
        const be = Xs(O);
        return be && be.field === P && be.id === l ? 0 : -1;
      }),
      hasFocus: X(O, () => {
        const be = $t(O);
        return (be == null ? void 0 : be.id) === l && be.field === P;
      })
    });
    j.api = O.current, z && (j.value = z.value, j.formattedValue = o.valueFormatter ? o.valueFormatter(j.value, r, o, O) : j.value);
    const V = X(O, () => O.current.unstable_applyPipeProcessors("isCellSelected", false, {
      id: l,
      field: P
    })), K = X(O, Au), W = X(O, ex), { hasFocus: U, isEditable: B = false, value: te } = j, J = o.type === "actions" && ((_a2 = o.getActions) == null ? void 0 : _a2.call(o, O.current.getRowParams(l)).some((be) => !be.props.disabled)), ne = (_ === "view" || !B) && !J ? j.tabIndex : -1, { classes: ce, getCellClassName: Ce } = G, oe = [
      X(O, () => O.current.unstable_applyPipeProcessors("cellClassName", [], {
        id: l,
        field: P
      }).filter(Boolean).join(" "))
    ];
    o.cellClassName && oe.push(typeof o.cellClassName == "function" ? o.cellClassName(j) : o.cellClassName), o.display === "flex" && oe.push(k["cell--flex"]), Ce && oe.push(Ce(j));
    const he = j.formattedValue ?? te, Z = c.useRef(null), Ie = zt(n, Z), ee = c.useRef(null), ye = G.cellSelection ?? false, xe = {
      align: a,
      showLeftBorder: w,
      showRightBorder: S,
      isEditable: B,
      classes: G.classes,
      pinnedPosition: I,
      isSelected: V,
      isSelectionMode: ye
    }, Fe = rv(xe), Ne = c.useCallback((be) => (je) => {
      const $e = O.current.getCellParams(l, P || "");
      O.current.publishEvent(be, $e, je), R && R(je);
    }, [
      O,
      P,
      R,
      l
    ]), Ue = c.useCallback((be) => (je) => {
      const $e = O.current.getCellParams(l, P || "");
      O.current.publishEvent(be, $e, je), v && v(je);
    }, [
      O,
      P,
      v,
      l
    ]), Ge = c.useCallback((be, je) => ($e) => {
      if (!O.current.getRow(l)) return;
      const lt = O.current.getCellParams(l, P || "");
      O.current.publishEvent(be, lt, $e), je && je($e);
    }, [
      O,
      P,
      l
    ]), He = ((_b2 = K[l]) == null ? void 0 : _b2[P]) ?? false, Le = ((_c2 = W[l]) == null ? void 0 : _c2[P]) ?? 1, Ke = c.useMemo(() => {
      if (m) return {
        padding: 0,
        opacity: 0,
        width: 0,
        height: 0,
        border: 0
      };
      const be = kl(b({
        "--width": `${d}px`
      }, f), E, I, x), je = I === Oe.LEFT, $e = I === Oe.RIGHT;
      return Le > 1 && (be.height = `calc(var(--height) * ${Le})`, be.zIndex = 10, (je || $e) && (be.zIndex = 40)), be;
    }, [
      d,
      m,
      f,
      x,
      I,
      E,
      Le
    ]);
    if (c.useEffect(() => {
      if (!U || _ === Qe.Edit) return;
      const be = tn(O.current.rootElementRef.current);
      if (Z.current && !Z.current.contains(be.activeElement)) {
        const je = Z.current.querySelector('[tabindex="0"]'), $e = ee.current || je || Z.current;
        if (oi()) $e.focus({
          preventScroll: true
        });
        else {
          const lt = O.current.getScrollPosition();
          $e.focus(), O.current.scroll(lt);
        }
      }
    }, [
      U,
      _,
      O
    ]), He) return p.jsx("div", {
      "data-colindex": i,
      role: "presentation",
      style: b({
        width: "var(--width)"
      }, Ke)
    });
    let _e = T.onFocus, me, ve;
    if (D === null && o.renderCell && (me = o.renderCell(j)), D !== null && o.renderEditCell) {
      const be = O.current.getRowWithUpdatedValues(l, o.field), je = fe(D, ov), $e = o.valueFormatter ? o.valueFormatter(D.value, be, o, O) : j.formattedValue, lt = b({}, j, {
        row: be,
        formattedValue: $e
      }, je);
      me = o.renderEditCell(lt), oe.push(k["cell--editing"]), oe.push(ce == null ? void 0 : ce["cell--editing"]);
    }
    if (me === void 0) {
      const be = he == null ? void 0 : he.toString();
      me = be, ve = be;
    }
    c.isValidElement(me) && J && (me = c.cloneElement(me, {
      focusElementRef: ee
    }));
    const pe = g ? null : {
      onDragEnter: Ge("cellDragEnter", C),
      onDragOver: Ge("cellDragOver", M)
    };
    return p.jsx("div", b({
      className: ue(Fe.root, oe, u),
      role: "gridcell",
      "data-field": P,
      "data-colindex": i,
      "aria-colindex": i + 1,
      "aria-colspan": h,
      "aria-rowspan": Le,
      style: Ke,
      title: ve,
      tabIndex: ne,
      onClick: Ge("cellClick", F),
      onDoubleClick: Ge("cellDoubleClick", H),
      onMouseOver: Ge("cellMouseOver", A),
      onMouseDown: Ue("cellMouseDown"),
      onMouseUp: Ne("cellMouseUp"),
      onKeyDown: Ge("cellKeyDown", $),
      onKeyUp: Ge("cellKeyUp", y)
    }, pe, T, {
      onFocus: _e,
      ref: Ie,
      children: me
    }));
  }), sv = On(lv), iv = [
    "field",
    "type",
    "align",
    "width",
    "height",
    "empty",
    "style",
    "className"
  ], ya = "1.3em", av = "1.2em", Sa = [
    40,
    80
  ], cv = {
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
  }, uv = (e) => {
    const { align: t, classes: n, empty: o } = e, r = {
      root: [
        "cell",
        "cellSkeleton",
        `cell--text${t ? se(t) : "Left"}`,
        o && "cellEmpty"
      ]
    };
    return ge(r, De, n);
  }, dv = Vb(12345);
  function pv(e) {
    const { field: t, type: n, align: o, width: r, height: l, empty: s = false, style: a, className: i } = e, d = fe(e, iv), f = {
      classes: ie().classes,
      align: o,
      empty: s
    }, h = uv(f), g = c.useMemo(() => {
      if (n === "boolean" || n === "actions") return {
        variant: "circular",
        width: ya,
        height: ya
      };
      const [x, I] = n ? cv[n] ?? Sa : Sa;
      return {
        variant: "text",
        width: `${Math.round(dv(x, I))}%`,
        height: av
      };
    }, [
      n
    ]);
    return p.jsx("div", b({
      "data-field": t,
      className: ue(h.root, i),
      style: b({
        height: l,
        maxWidth: r,
        minWidth: r
      }, a)
    }, d, {
      children: !s && p.jsx(rh, b({}, g))
    }));
  }
  const fv = On(pv);
  function gv(e) {
    return e.vars ? e.vars.palette.TableCell.border : e.palette.mode === "light" ? ir(st(e.palette.divider, 1), 0.88) : sr(st(e.palette.divider, 1), 0.68);
  }
  const hv = 10, Wr = -5, uo = 1, Ia = {
    width: 3,
    rx: 1.5,
    x: 10.5
  }, mv = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", bv = (e) => e.dimensions.hasScrollX && (!e.dimensions.hasScrollY || e.dimensions.scrollbarSize === 0), Cv = le("div", {
    name: "MuiDataGrid",
    slot: "Root",
    overridesResolver: (e, t) => [
      t.root,
      {
        [`&.${k.autoHeight}`]: t.autoHeight
      },
      {
        [`&.${k.autosizing}`]: t.autosizing
      },
      {
        [`&.${k["root--densityStandard"]}`]: t["root--densityStandard"]
      },
      {
        [`&.${k["root--densityComfortable"]}`]: t["root--densityComfortable"]
      },
      {
        [`&.${k["root--densityCompact"]}`]: t["root--densityCompact"]
      },
      {
        [`&.${k["root--disableUserSelection"]}`]: t["root--disableUserSelection"]
      },
      {
        [`&.${k["root--noToolbar"]}`]: t["root--noToolbar"]
      },
      {
        [`&.${k.withVerticalBorder}`]: t.withVerticalBorder
      },
      {
        [`& .${k.actionsCell}`]: t.actionsCell
      },
      {
        [`& .${k.booleanCell}`]: t.booleanCell
      },
      {
        [`& .${k.cell}`]: t.cell
      },
      {
        [`& .${k["cell--editable"]}`]: t["cell--editable"]
      },
      {
        [`& .${k["cell--editing"]}`]: t["cell--editing"]
      },
      {
        [`& .${k["cell--flex"]}`]: t["cell--flex"]
      },
      {
        [`& .${k["cell--pinnedLeft"]}`]: t["cell--pinnedLeft"]
      },
      {
        [`& .${k["cell--pinnedRight"]}`]: t["cell--pinnedRight"]
      },
      {
        [`& .${k["cell--rangeBottom"]}`]: t["cell--rangeBottom"]
      },
      {
        [`& .${k["cell--rangeLeft"]}`]: t["cell--rangeLeft"]
      },
      {
        [`& .${k["cell--rangeRight"]}`]: t["cell--rangeRight"]
      },
      {
        [`& .${k["cell--rangeTop"]}`]: t["cell--rangeTop"]
      },
      {
        [`& .${k["cell--selectionMode"]}`]: t["cell--selectionMode"]
      },
      {
        [`& .${k["cell--textCenter"]}`]: t["cell--textCenter"]
      },
      {
        [`& .${k["cell--textLeft"]}`]: t["cell--textLeft"]
      },
      {
        [`& .${k["cell--textRight"]}`]: t["cell--textRight"]
      },
      {
        [`& .${k["cell--withLeftBorder"]}`]: t["cell--withLeftBorder"]
      },
      {
        [`& .${k["cell--withRightBorder"]}`]: t["cell--withRightBorder"]
      },
      {
        [`& .${k.cellCheckbox}`]: t.cellCheckbox
      },
      {
        [`& .${k.cellEmpty}`]: t.cellEmpty
      },
      {
        [`& .${k.cellOffsetLeft}`]: t.cellOffsetLeft
      },
      {
        [`& .${k.cellSkeleton}`]: t.cellSkeleton
      },
      {
        [`& .${k.checkboxInput}`]: t.checkboxInput
      },
      {
        [`& .${k.columnHeader}`]: t.columnHeader
      },
      {
        [`& .${k["columnHeader--alignCenter"]}`]: t["columnHeader--alignCenter"]
      },
      {
        [`& .${k["columnHeader--alignLeft"]}`]: t["columnHeader--alignLeft"]
      },
      {
        [`& .${k["columnHeader--alignRight"]}`]: t["columnHeader--alignRight"]
      },
      {
        [`& .${k["columnHeader--dragging"]}`]: t["columnHeader--dragging"]
      },
      {
        [`& .${k["columnHeader--emptyGroup"]}`]: t["columnHeader--emptyGroup"]
      },
      {
        [`& .${k["columnHeader--filledGroup"]}`]: t["columnHeader--filledGroup"]
      },
      {
        [`& .${k["columnHeader--filtered"]}`]: t["columnHeader--filtered"]
      },
      {
        [`& .${k["columnHeader--last"]}`]: t["columnHeader--last"]
      },
      {
        [`& .${k["columnHeader--lastUnpinned"]}`]: t["columnHeader--lastUnpinned"]
      },
      {
        [`& .${k["columnHeader--moving"]}`]: t["columnHeader--moving"]
      },
      {
        [`& .${k["columnHeader--numeric"]}`]: t["columnHeader--numeric"]
      },
      {
        [`& .${k["columnHeader--pinnedLeft"]}`]: t["columnHeader--pinnedLeft"]
      },
      {
        [`& .${k["columnHeader--pinnedRight"]}`]: t["columnHeader--pinnedRight"]
      },
      {
        [`& .${k["columnHeader--siblingFocused"]}`]: t["columnHeader--siblingFocused"]
      },
      {
        [`& .${k["columnHeader--sortable"]}`]: t["columnHeader--sortable"]
      },
      {
        [`& .${k["columnHeader--sorted"]}`]: t["columnHeader--sorted"]
      },
      {
        [`& .${k["columnHeader--withLeftBorder"]}`]: t["columnHeader--withLeftBorder"]
      },
      {
        [`& .${k["columnHeader--withRightBorder"]}`]: t["columnHeader--withRightBorder"]
      },
      {
        [`& .${k.columnHeaderCheckbox}`]: t.columnHeaderCheckbox
      },
      {
        [`& .${k.columnHeaderDraggableContainer}`]: t.columnHeaderDraggableContainer
      },
      {
        [`& .${k.columnHeaderTitleContainer}`]: t.columnHeaderTitleContainer
      },
      {
        [`& .${k.columnHeaderTitleContainerContent}`]: t.columnHeaderTitleContainerContent
      },
      {
        [`& .${k.columnSeparator}`]: t.columnSeparator
      },
      {
        [`& .${k["columnSeparator--resizable"]}`]: t["columnSeparator--resizable"]
      },
      {
        [`& .${k["columnSeparator--resizing"]}`]: t["columnSeparator--resizing"]
      },
      {
        [`& .${k["columnSeparator--sideLeft"]}`]: t["columnSeparator--sideLeft"]
      },
      {
        [`& .${k["columnSeparator--sideRight"]}`]: t["columnSeparator--sideRight"]
      },
      {
        [`& .${k["container--bottom"]}`]: t["container--bottom"]
      },
      {
        [`& .${k["container--top"]}`]: t["container--top"]
      },
      {
        [`& .${k.detailPanelToggleCell}`]: t.detailPanelToggleCell
      },
      {
        [`& .${k["detailPanelToggleCell--expanded"]}`]: t["detailPanelToggleCell--expanded"]
      },
      {
        [`& .${k.editBooleanCell}`]: t.editBooleanCell
      },
      {
        [`& .${k.filterIcon}`]: t.filterIcon
      },
      {
        [`& .${k["filler--borderBottom"]}`]: t["filler--borderBottom"]
      },
      {
        [`& .${k["filler--pinnedLeft"]}`]: t["filler--pinnedLeft"]
      },
      {
        [`& .${k["filler--pinnedRight"]}`]: t["filler--pinnedRight"]
      },
      {
        [`& .${k.groupingCriteriaCell}`]: t.groupingCriteriaCell
      },
      {
        [`& .${k.groupingCriteriaCellLoadingContainer}`]: t.groupingCriteriaCellLoadingContainer
      },
      {
        [`& .${k.groupingCriteriaCellToggle}`]: t.groupingCriteriaCellToggle
      },
      {
        [`& .${k.headerFilterRow}`]: t.headerFilterRow
      },
      {
        [`& .${k.iconSeparator}`]: t.iconSeparator
      },
      {
        [`& .${k.menuIcon}`]: t.menuIcon
      },
      {
        [`& .${k.menuIconButton}`]: t.menuIconButton
      },
      {
        [`& .${k.menuList}`]: t.menuList
      },
      {
        [`& .${k.menuOpen}`]: t.menuOpen
      },
      {
        [`& .${k.overlayWrapperInner}`]: t.overlayWrapperInner
      },
      {
        [`& .${k.pinnedRows}`]: t.pinnedRows
      },
      {
        [`& .${k["pinnedRows--bottom"]}`]: t["pinnedRows--bottom"]
      },
      {
        [`& .${k["pinnedRows--top"]}`]: t["pinnedRows--top"]
      },
      {
        [`& .${k.row}`]: t.row
      },
      {
        [`& .${k["row--borderBottom"]}`]: t["row--borderBottom"]
      },
      {
        [`& .${k["row--detailPanelExpanded"]}`]: t["row--detailPanelExpanded"]
      },
      {
        [`& .${k["row--dragging"]}`]: t["row--dragging"]
      },
      {
        [`& .${k["row--dynamicHeight"]}`]: t["row--dynamicHeight"]
      },
      {
        [`& .${k["row--editable"]}`]: t["row--editable"]
      },
      {
        [`& .${k["row--editing"]}`]: t["row--editing"]
      },
      {
        [`& .${k["row--firstVisible"]}`]: t["row--firstVisible"]
      },
      {
        [`& .${k["row--lastVisible"]}`]: t["row--lastVisible"]
      },
      {
        [`& .${k.rowReorderCell}`]: t.rowReorderCell
      },
      {
        [`& .${k["rowReorderCell--draggable"]}`]: t["rowReorderCell--draggable"]
      },
      {
        [`& .${k.rowReorderCellContainer}`]: t.rowReorderCellContainer
      },
      {
        [`& .${k.rowReorderCellPlaceholder}`]: t.rowReorderCellPlaceholder
      },
      {
        [`& .${k.rowSkeleton}`]: t.rowSkeleton
      },
      {
        [`& .${k.scrollbar}`]: t.scrollbar
      },
      {
        [`& .${k["scrollbar--horizontal"]}`]: t["scrollbar--horizontal"]
      },
      {
        [`& .${k["scrollbar--vertical"]}`]: t["scrollbar--vertical"]
      },
      {
        [`& .${k.scrollbarFiller}`]: t.scrollbarFiller
      },
      {
        [`& .${k["scrollbarFiller--borderBottom"]}`]: t["scrollbarFiller--borderBottom"]
      },
      {
        [`& .${k["scrollbarFiller--borderTop"]}`]: t["scrollbarFiller--borderTop"]
      },
      {
        [`& .${k["scrollbarFiller--header"]}`]: t["scrollbarFiller--header"]
      },
      {
        [`& .${k["scrollbarFiller--pinnedRight"]}`]: t["scrollbarFiller--pinnedRight"]
      },
      {
        [`& .${k.sortIcon}`]: t.sortIcon
      },
      {
        [`& .${k.treeDataGroupingCell}`]: t.treeDataGroupingCell
      },
      {
        [`& .${k.treeDataGroupingCellLoadingContainer}`]: t.treeDataGroupingCellLoadingContainer
      },
      {
        [`& .${k.treeDataGroupingCellToggle}`]: t.treeDataGroupingCellToggle
      },
      {
        [`& .${k.withBorderColor}`]: t.withBorderColor
      }
    ]
  })(({ theme: e }) => {
    var _a2, _b2;
    const t = cn(), n = X(t, bv), o = gv(e), r = e.shape.borderRadius, l = e.vars ? e.vars.palette.background.default : ((_a2 = e.mixins.MuiDataGrid) == null ? void 0 : _a2.containerBackground) ?? e.palette.background.default, s = ((_b2 = e.mixins.MuiDataGrid) == null ? void 0 : _b2.pinnedBackground) ?? l, a = e.vars ? `rgba(${e.vars.palette.background.defaultChannel} / ${e.vars.palette.action.disabledOpacity})` : st(e.palette.background.default, e.palette.action.disabledOpacity), i = (e.vars || e).palette.action.hoverOpacity, d = (e.vars || e).palette.action.hover, u = (e.vars || e).palette.action.selectedOpacity, f = e.vars ? `calc(${i} + ${u})` : i + u, h = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${u})` : st(e.palette.primary.main, u), g = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${f})` : st(e.palette.primary.main, f), m = e.vars ? vv : wv, x = ($) => ({
      [`& .${k["cell--pinnedLeft"]}, & .${k["cell--pinnedRight"]}`]: {
        backgroundColor: $,
        "&.Mui-selected": {
          backgroundColor: m($, h, u),
          "&:hover": {
            backgroundColor: m($, h, f)
          }
        }
      }
    }), I = m(s, d, i), S = x(I), w = m(s, h, u), F = x(w), H = m(s, g, f), v = x(H), R = {
      backgroundColor: h,
      "&:hover": {
        backgroundColor: g,
        "@media (hover: none)": {
          backgroundColor: h
        }
      }
    };
    return b({
      "--unstable_DataGrid-radius": typeof r == "number" ? `${r}px` : r,
      "--unstable_DataGrid-headWeight": e.typography.fontWeightMedium,
      "--unstable_DataGrid-overlayBackground": a,
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
      [`.${k.main} > *:first-child${mv}`]: {
        borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
        borderTopRightRadius: "var(--unstable_DataGrid-radius)"
      },
      [`&.${k.autoHeight}`]: {
        height: "auto"
      },
      [`&.${k.autosizing}`]: {
        [`& .${k.columnHeaderTitleContainerContent} > *`]: {
          overflow: "visible !important"
        },
        "@media (hover: hover)": {
          [`& .${k.menuIcon}`]: {
            width: "0 !important",
            visibility: "hidden !important"
          }
        },
        [`& .${k.cell}`]: {
          overflow: "visible !important",
          whiteSpace: "nowrap",
          minWidth: "max-content !important",
          maxWidth: "max-content !important"
        },
        [`& .${k.groupingCriteriaCell}`]: {
          width: "unset"
        },
        [`& .${k.treeDataGroupingCell}`]: {
          width: "unset"
        }
      },
      [`& .${k.columnHeader}, & .${k.cell}`]: {
        WebkitTapHighlightColor: "transparent",
        padding: "0 10px",
        boxSizing: "border-box"
      },
      [`& .${k.columnHeader}:focus-within, & .${k.cell}:focus-within`]: {
        outline: `solid ${e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / 0.5)` : st(e.palette.primary.main, 0.5)} ${uo}px`,
        outlineOffset: uo * -1
      },
      [`& .${k.columnHeader}:focus, & .${k.cell}:focus`]: {
        outline: `solid ${e.palette.primary.main} ${uo}px`,
        outlineOffset: uo * -1
      },
      [`& .${k.columnHeader}:focus,
      & .${k["columnHeader--withLeftBorder"]},
      & .${k["columnHeader--withRightBorder"]},
      & .${k["columnHeader--siblingFocused"]},
      & .${k["virtualScroller--hasScrollX"]} .${k["columnHeader--lastUnpinned"]},
      & .${k["virtualScroller--hasScrollX"]} .${k["columnHeader--last"]}
      `]: {
        [`& .${k.columnSeparator}`]: {
          opacity: 0
        },
        "@media (hover: none)": {
          [`& .${k["columnSeparator--resizable"]}`]: {
            opacity: 1
          }
        },
        [`& .${k["columnSeparator--resizable"]}:hover`]: {
          opacity: 1
        }
      },
      [`&.${k["root--noToolbar"]} [aria-rowindex="1"] [aria-colindex="1"]`]: {
        borderTopLeftRadius: "calc(var(--unstable_DataGrid-radius) - 1px)"
      },
      [`&.${k["root--noToolbar"]} [aria-rowindex="1"] .${k["columnHeader--last"]}`]: {
        borderTopRightRadius: n ? "calc(var(--unstable_DataGrid-radius) - 1px)" : void 0
      },
      [`& .${k.columnHeaderCheckbox}, & .${k.cellCheckbox}`]: {
        padding: 0,
        justifyContent: "center",
        alignItems: "center"
      },
      [`& .${k.columnHeader}`]: {
        position: "relative",
        display: "flex",
        alignItems: "center"
      },
      [`& .${k["virtualScroller--hasScrollX"]} .${k["columnHeader--last"]}`]: {
        overflow: "hidden"
      },
      [`& .${k["columnHeader--sorted"]} .${k.iconButtonContainer}, & .${k["columnHeader--filtered"]} .${k.iconButtonContainer}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${k.columnHeader}:not(.${k["columnHeader--sorted"]}) .${k.sortButton}`]: {
        opacity: 0,
        transition: e.transitions.create([
          "opacity"
        ], {
          duration: e.transitions.duration.shorter
        })
      },
      [`& .${k.columnHeaderTitleContainer}`]: {
        display: "flex",
        alignItems: "center",
        gap: e.spacing(0.25),
        minWidth: 0,
        flex: 1,
        whiteSpace: "nowrap",
        overflow: "hidden"
      },
      [`& .${k.columnHeaderTitleContainerContent}`]: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      },
      [`& .${k["columnHeader--filledGroup"]} .${k.columnHeaderTitleContainer}`]: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        boxSizing: "border-box"
      },
      [`& .${k.sortIcon}, & .${k.filterIcon}`]: {
        fontSize: "inherit"
      },
      [`& .${k["columnHeader--sortable"]}`]: {
        cursor: "pointer"
      },
      [`& .${k["columnHeader--alignCenter"]} .${k.columnHeaderTitleContainer}`]: {
        justifyContent: "center"
      },
      [`& .${k["columnHeader--alignRight"]} .${k.columnHeaderDraggableContainer}, & .${k["columnHeader--alignRight"]} .${k.columnHeaderTitleContainer}`]: {
        flexDirection: "row-reverse"
      },
      [`& .${k["columnHeader--alignCenter"]} .${k.menuIcon}`]: {
        marginLeft: "auto"
      },
      [`& .${k["columnHeader--alignRight"]} .${k.menuIcon}`]: {
        marginRight: "auto",
        marginLeft: -5
      },
      [`& .${k["columnHeader--moving"]}`]: {
        backgroundColor: (e.vars || e).palette.action.hover
      },
      [`& .${k["columnHeader--pinnedLeft"]}, & .${k["columnHeader--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 40,
        background: "var(--DataGrid-pinnedBackground)"
      },
      [`& .${k.columnSeparator}`]: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: hv,
        color: o
      },
      [`& .${k.columnHeaders}`]: {
        width: "var(--DataGrid-rowWidth)"
      },
      "@media (hover: hover)": {
        [`& .${k.columnHeader}:hover`]: {
          [`& .${k.menuIcon}`]: {
            width: "auto",
            visibility: "visible"
          },
          [`& .${k.iconButtonContainer}`]: {
            visibility: "visible",
            width: "auto"
          }
        },
        [`& .${k.columnHeader}:not(.${k["columnHeader--sorted"]}):hover .${k.sortButton}`]: {
          opacity: 0.5
        }
      },
      "@media (hover: none)": {
        [`& .${k.columnHeader} .${k.menuIcon}`]: {
          width: "auto",
          visibility: "visible"
        },
        [`& .${k.columnHeader}:focus,
        & .${k["columnHeader--siblingFocused"]}`]: {
          [`.${k["columnSeparator--resizable"]}`]: {
            color: (e.vars || e).palette.primary.main
          }
        }
      },
      [`& .${k["columnSeparator--sideLeft"]}`]: {
        left: Wr
      },
      [`& .${k["columnSeparator--sideRight"]}`]: {
        right: Wr
      },
      [`& .${k["columnHeader--withRightBorder"]} .${k["columnSeparator--sideLeft"]}`]: {
        left: Wr - 0.5
      },
      [`& .${k["columnHeader--withRightBorder"]} .${k["columnSeparator--sideRight"]}`]: {
        right: Wr - 0.5
      },
      [`& .${k["columnSeparator--resizable"]}`]: {
        cursor: "col-resize",
        touchAction: "none",
        [`&.${k["columnSeparator--resizing"]}`]: {
          color: (e.vars || e).palette.primary.main
        },
        "@media (hover: none)": {
          [`& .${k.iconSeparator} rect`]: Ia
        },
        "@media (hover: hover)": {
          "&:hover": {
            color: (e.vars || e).palette.primary.main,
            [`& .${k.iconSeparator} rect`]: Ia
          }
        },
        "& svg": {
          pointerEvents: "none"
        }
      },
      [`& .${k.iconSeparator}`]: {
        color: "inherit",
        transition: e.transitions.create([
          "color",
          "width"
        ], {
          duration: e.transitions.duration.shortest
        })
      },
      [`& .${k.menuIcon}`]: {
        width: 0,
        visibility: "hidden",
        fontSize: 20,
        marginRight: -5,
        display: "flex",
        alignItems: "center"
      },
      [`.${k.menuOpen}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${k.headerFilterRow}`]: {
        [`& .${k.columnHeader}`]: {
          boxSizing: "border-box",
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        }
      },
      [`& .${k["row--borderBottom"]} .${k.columnHeader},
      & .${k["row--borderBottom"]} .${k.filler},
      & .${k["row--borderBottom"]} .${k.scrollbarFiller}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${k["row--borderBottom"]} .${k.cell}`]: {
        borderBottom: "1px solid var(--rowBorderColor)"
      },
      [`.${k.row}`]: {
        display: "flex",
        width: "var(--DataGrid-rowWidth)",
        breakInside: "avoid",
        "--rowBorderColor": "var(--DataGrid-rowBorderColor)",
        [`&.${k["row--firstVisible"]}`]: {
          "--rowBorderColor": "transparent"
        },
        "&:hover": {
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${k.rowSkeleton}:hover`]: {
          backgroundColor: "transparent"
        },
        "&.Mui-selected": R
      },
      [`& .${k["container--top"]}, & .${k["container--bottom"]}`]: {
        "[role=row]": {
          background: "var(--DataGrid-containerBackground)"
        }
      },
      [`& .${k.cell}`]: {
        flex: "0 0 auto",
        height: "var(--height)",
        width: "var(--width)",
        lineHeight: "calc(var(--height) - 1px)",
        boxSizing: "border-box",
        borderTop: "1px solid var(--rowBorderColor)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        "&.Mui-selected": R
      },
      [`& .${k["virtualScrollerContent--overflowed"]} .${k["row--lastVisible"]} .${k.cell}`]: {
        borderTopColor: "transparent"
      },
      [`& .${k["pinnedRows--top"]} :first-of-type`]: {
        [`& .${k.cell}, .${k.scrollbarFiller}`]: {
          borderTop: "none"
        }
      },
      [`&.${k["root--disableUserSelection"]}`]: {
        userSelect: "none"
      },
      [`& .${k["row--dynamicHeight"]} > .${k.cell}`]: {
        whiteSpace: "initial",
        lineHeight: "inherit"
      },
      [`& .${k.cellEmpty}`]: {
        flex: 1,
        padding: 0,
        height: "unset"
      },
      [`& .${k.cell}.${k["cell--selectionMode"]}`]: {
        cursor: "default"
      },
      [`& .${k.cell}.${k["cell--editing"]}`]: {
        padding: 1,
        display: "flex",
        boxShadow: e.shadows[2],
        backgroundColor: (e.vars || e).palette.background.paper,
        "&:focus-within": {
          outline: `${uo}px solid ${(e.vars || e).palette.primary.main}`,
          outlineOffset: uo * -1
        }
      },
      [`& .${k["row--editing"]}`]: {
        boxShadow: e.shadows[2]
      },
      [`& .${k["row--editing"]} .${k.cell}`]: {
        boxShadow: e.shadows[0],
        backgroundColor: (e.vars || e).palette.background.paper
      },
      [`& .${k.editBooleanCell}`]: {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      [`& .${k.booleanCell}[data-value="true"]`]: {
        color: (e.vars || e).palette.text.secondary
      },
      [`& .${k.booleanCell}[data-value="false"]`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`& .${k.actionsCell}`]: {
        display: "inline-flex",
        alignItems: "center",
        gridGap: e.spacing(1)
      },
      [`& .${k.rowReorderCell}`]: {
        display: "inline-flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${k["rowReorderCell--draggable"]}`]: {
        cursor: "move",
        opacity: 1
      },
      [`& .${k.rowReorderCellContainer}`]: {
        padding: 0,
        display: "flex",
        alignItems: "stretch"
      },
      [`.${k.withBorderColor}`]: {
        borderColor: o
      },
      [`& .${k["cell--withLeftBorder"]}, & .${k["columnHeader--withLeftBorder"]}`]: {
        borderLeftColor: "var(--DataGrid-rowBorderColor)",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid"
      },
      [`& .${k["cell--withRightBorder"]}, & .${k["columnHeader--withRightBorder"]}`]: {
        borderRightColor: "var(--DataGrid-rowBorderColor)",
        borderRightWidth: "1px",
        borderRightStyle: "solid"
      },
      [`& .${k["cell--flex"]}`]: {
        display: "flex",
        alignItems: "center",
        lineHeight: "inherit"
      },
      [`& .${k["cell--textLeft"]}`]: {
        textAlign: "left",
        justifyContent: "flex-start"
      },
      [`& .${k["cell--textRight"]}`]: {
        textAlign: "right",
        justifyContent: "flex-end"
      },
      [`& .${k["cell--textCenter"]}`]: {
        textAlign: "center",
        justifyContent: "center"
      },
      [`& .${k["cell--pinnedLeft"]}, & .${k["cell--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 30,
        background: "var(--DataGrid-pinnedBackground)",
        "&.Mui-selected": {
          backgroundColor: w
        }
      },
      [`& .${k.virtualScrollerContent} .${k.row}`]: {
        "&:hover": S,
        "&.Mui-selected": F,
        "&.Mui-selected:hover": v
      },
      [`& .${k.cellOffsetLeft}`]: {
        flex: "0 0 auto",
        display: "inline-block"
      },
      [`& .${k.cellSkeleton}`]: {
        flex: "0 0 auto",
        height: "100%",
        display: "inline-flex",
        alignItems: "center"
      },
      [`& .${k.columnHeaderDraggableContainer}`]: {
        display: "flex",
        width: "100%",
        height: "100%"
      },
      [`& .${k.rowReorderCellPlaceholder}`]: {
        display: "none"
      },
      [`& .${k["columnHeader--dragging"]}, & .${k["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${k["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity,
        [`& .${k.rowReorderCellPlaceholder}`]: {
          display: "flex"
        }
      },
      [`& .${k.treeDataGroupingCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${k.treeDataGroupingCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`& .${k.treeDataGroupingCellLoadingContainer}, .${k.groupingCriteriaCellLoadingContainer}`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      [`& .${k.groupingCriteriaCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${k.groupingCriteriaCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`.${k.scrollbarFiller}`]: {
        minWidth: "calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
        alignSelf: "stretch",
        [`&.${k["scrollbarFiller--borderTop"]}`]: {
          borderTop: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${k["scrollbarFiller--borderBottom"]}`]: {
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${k["scrollbarFiller--pinnedRight"]}`]: {
          backgroundColor: "var(--DataGrid-pinnedBackground)",
          position: "sticky",
          right: 0
        }
      },
      [`& .${k.filler}`]: {
        flex: "1 0 auto"
      },
      [`& .${k["filler--borderBottom"]}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${k["main--hasSkeletonLoadingOverlay"]}`]: {
        [`& .${k.virtualScrollerContent}`]: {
          position: "fixed",
          visibility: "hidden"
        },
        [`& .${k["scrollbar--vertical"]}, & .${k.pinnedRows}, & .${k.virtualScroller} > .${k.filler}`]: {
          display: "none"
        }
      }
    });
  });
  function wv(e, t, n, o = 1) {
    const r = (i, d) => Math.round((i ** (1 / o) * (1 - n) + d ** (1 / o) * n) ** o), l = bi(e), s = bi(t), a = [
      r(l.values[0], s.values[0]),
      r(l.values[1], s.values[1]),
      r(l.values[2], s.values[2])
    ];
    return Dd({
      type: "rgb",
      values: a
    });
  }
  const xv = (e) => `rgb(from ${e} r g b / 1)`;
  function vv(e, t, n) {
    return `color-mix(in srgb,${e}, ${xv(t)} calc(${n} * 100%))`;
  }
  const yv = () => () => {
  }, Sv = () => false, Iv = () => true, Pv = () => As.useSyncExternalStore(yv, Sv, Iv);
  function Mv() {
    var _a2, _b2;
    const e = Ee(), t = X(e, rn), n = ie(), o = X(e, gr), r = e.current.unstable_applyPipeProcessors("preferencePanel", null, o.openedPanelValue ?? eo.filters);
    return p.jsx(n.slots.panel, b({
      as: n.slots.basePopper,
      open: t.length > 0 && o.open,
      id: o.panelId,
      "aria-labelledby": o.labelId
    }, (_a2 = n.slotProps) == null ? void 0 : _a2.panel, (_b2 = n.slotProps) == null ? void 0 : _b2.basePopper, {
      children: r
    }));
  }
  function kv() {
    var _a2;
    const e = ie();
    return p.jsxs(c.Fragment, {
      children: [
        p.jsx(Mv, {}),
        e.slots.toolbar && p.jsx(e.slots.toolbar, b({}, (_a2 = e.slotProps) == null ? void 0 : _a2.toolbar))
      ]
    });
  }
  const Ev = [
    "className",
    "children"
  ], Fv = (e, t) => {
    const { autoHeight: n, classes: o, showCellVerticalBorder: r } = e, l = {
      root: [
        "root",
        n && "autoHeight",
        `root--density${se(t)}`,
        e.slots.toolbar === null && "root--noToolbar",
        "withBorderColor",
        r && "withVerticalBorder"
      ]
    };
    return ge(l, De, o);
  }, Tv = ze(function(t, n) {
    const o = ie(), { className: r, children: l } = t, s = fe(t, Ev), a = cn(), i = X(a, mo), d = a.current.rootElementRef, u = c.useCallback((x) => {
      x !== null && a.current.publishEvent("rootMount", x);
    }, [
      a
    ]), f = zt(d, n, u), h = o, g = Fv(h, i);
    return Pv() ? null : p.jsxs(Cv, b({
      className: ue(g.root, r),
      ownerState: h
    }, s, {
      ref: f,
      children: [
        p.jsx(kv, {}),
        p.jsx(Yx, {
          children: l
        }),
        p.jsx(Xx, {})
      ]
    }));
  }), Ov = On(Tv), Dv = [
    "className"
  ], Rv = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "footerContainer",
        "withBorderColor"
      ]
    }, De, t);
  }, $v = et("div", {
    name: "MuiDataGrid",
    slot: "FooterContainer",
    overridesResolver: (e, t) => t.footerContainer
  })({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 52,
    borderTop: "1px solid"
  }), Hv = ze(function(t, n) {
    const { className: o } = t, r = fe(t, Dv), l = ie(), s = Rv(l);
    return p.jsx($v, b({
      className: ue(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), Lv = [
    "className"
  ], jv = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "overlay"
      ]
    }, De, t);
  }, Av = et("div", {
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
  }), ri = ze(function(t, n) {
    const { className: o } = t, r = fe(t, Lv), l = ie(), s = jv(l);
    return p.jsx(Av, b({
      className: ue(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), zv = [
    "className",
    "children"
  ], Gv = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "toolbarContainer"
      ]
    }, De, t);
  }, _v = et("div", {
    name: "MuiDataGrid",
    slot: "ToolbarContainer",
    overridesResolver: (e, t) => t.toolbarContainer
  })(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: e.spacing(1),
    padding: e.spacing(0.5, 0.5, 0)
  })), Vv = ze(function(t, n) {
    const { className: o, children: r } = t, l = fe(t, zv), s = ie(), a = Gv(s);
    return r ? p.jsx(_v, b({
      className: ue(a.root, o),
      ownerState: s
    }, l, {
      ref: n,
      children: r
    })) : null;
  }), Nv = (e) => {
    const { classes: t, open: n } = e;
    return ge({
      root: [
        "menuIcon",
        n && "menuOpen"
      ],
      button: [
        "menuIconButton"
      ]
    }, De, t);
  }, Bv = c.memo((e) => {
    var _a2, _b2;
    const { colDef: t, open: n, columnMenuId: o, columnMenuButtonId: r, iconButtonRef: l } = e, s = Ee(), a = ie(), i = b({}, e, {
      classes: a.classes
    }), d = Nv(i), u = c.useCallback((h) => {
      h.preventDefault(), h.stopPropagation(), s.current.toggleColumnMenu(t.field);
    }, [
      s,
      t.field
    ]), f = t.headerName ?? t.field;
    return p.jsx("div", {
      className: d.root,
      children: p.jsx(a.slots.baseTooltip, b({
        title: s.current.getLocaleText("columnMenuLabel"),
        enterDelay: 1e3
      }, (_a2 = a.slotProps) == null ? void 0 : _a2.baseTooltip, {
        children: p.jsx(a.slots.baseIconButton, b({
          ref: l,
          tabIndex: -1,
          className: d.button,
          "aria-label": s.current.getLocaleText("columnMenuAriaLabel")(f),
          size: "small",
          onClick: u,
          "aria-haspopup": "menu",
          "aria-expanded": n,
          "aria-controls": n ? o : void 0,
          id: r
        }, (_b2 = a.slotProps) == null ? void 0 : _b2.baseIconButton, {
          children: p.jsx(a.slots.columnMenuIcon, {
            fontSize: "inherit"
          })
        }))
      }))
    });
  });
  function Wv({ columnMenuId: e, columnMenuButtonId: t, ContentComponent: n, contentComponentProps: o, field: r, open: l, target: s, onExited: a }) {
    const i = Ee(), d = i.current.getColumn(r), u = Be((f) => {
      f && (f.stopPropagation(), s == null ? void 0 : s.contains(f.target)) || i.current.hideColumnMenu();
    });
    return !s || !d ? null : p.jsx(Bs, {
      placement: `bottom-${d.align === "right" ? "start" : "end"}`,
      open: l,
      target: s,
      onClose: u,
      onExited: a,
      children: p.jsx(n, b({
        colDef: d,
        hideMenu: u,
        open: l,
        id: e,
        labelledby: t
      }, o))
    });
  }
  function Uv(e) {
    return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
  }
  function ul(e, t) {
    return e.closest(`.${t}`);
  }
  function Rn(e) {
    return e.replace(/["\\]/g, "\\$&");
  }
  function Kv(e, t) {
    return e.querySelector(`[role="columnheader"][data-field="${Rn(t)}"]`);
  }
  function Ku(e) {
    return `.${k.row}[data-id="${Rn(String(e))}"]`;
  }
  function qv(e, t) {
    return e.querySelector(Ku(t));
  }
  function Yv(e, { id: t, field: n }) {
    const o = Ku(t), r = `.${k.cell}[data-field="${Rn(n)}"]`, l = `${o} ${r}`;
    return e.querySelector(l);
  }
  function Tr(e) {
    return e.target.nodeType === 1 && !e.currentTarget.contains(e.target);
  }
  function Xv(e) {
    return e.getAttribute("data-field");
  }
  function Qv(e, t) {
    return e.querySelector(`[data-field="${Rn(t)}"]`);
  }
  function Jv(e) {
    return e.getAttribute("data-fields").slice(2, -2).split("-|-");
  }
  function Zv(e, t) {
    return Array.from(e.querySelectorAll(`[data-fields*="|-${Rn(t)}-|"]`) ?? []);
  }
  function ey(e, t) {
    var _a2;
    if (!ul(e, k.root)) throw new Error("MUI X: The root element is not found.");
    const o = e.getAttribute("aria-colindex");
    if (!o) return [];
    const r = Number(o) - 1, l = [];
    return ((_a2 = t.virtualScrollerRef) == null ? void 0 : _a2.current) ? (Xu(t).forEach((s) => {
      const a = s.getAttribute("data-id");
      if (!a) return;
      let i = r;
      const d = t.unstable_getCellColSpanInfo(a, r);
      d && d.spannedByColSpan && (i = d.leftVisibleCellIndex);
      const u = s.querySelector(`[data-colindex="${i}"]`);
      u && l.push(u);
    }), l) : [];
  }
  function Pa(e, t) {
    return e.rootElementRef.current.querySelector(`.${k[t]}`);
  }
  const qu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    if (t === null) return [];
    const r = [];
    return Xu(e).forEach((l) => {
      l.getAttribute("data-id") && l.querySelectorAll(`.${k[n === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((a) => {
        const i = _o(a);
        i !== null && o(i) && r.push(a);
      });
    }), r;
  };
  function ty(e, t, n) {
    const o = _o(t);
    return qu({
      api: e,
      colIndex: o,
      position: n ? "right" : "left",
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function ny(e, t, n) {
    const o = _o(t);
    return qu({
      api: e,
      colIndex: o,
      position: n ? "left" : "right",
      filterFn: (r) => n ? r > o : r < o
    });
  }
  const Yu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    var _a2;
    if (!((_a2 = e.columnHeadersContainerRef) == null ? void 0 : _a2.current)) return [];
    if (t === null) return [];
    const r = [];
    return e.columnHeadersContainerRef.current.querySelectorAll(`.${k[n === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((l) => {
      const s = _o(l);
      s !== null && o(s, l) && r.push(l);
    }), r;
  };
  function oy(e, t, n) {
    const o = _o(t);
    return Yu({
      api: e,
      position: n ? "right" : "left",
      colIndex: o,
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function ry(e, t, n) {
    const o = _o(t);
    return Yu({
      api: e,
      position: n ? "left" : "right",
      colIndex: o,
      filterFn: (r, l) => l.classList.contains(k["columnHeader--last"]) ? false : n ? r > o : r < o
    });
  }
  function ly(e, t) {
    return e.columnHeadersContainerRef.current.querySelector(`:scope > div > [data-field="${Rn(t)}"][role="columnheader"]`);
  }
  function sy(e, t) {
    const n = e.virtualScrollerRef.current;
    return Array.from(n.querySelectorAll(`:scope > div > div > div > [data-field="${Rn(t)}"][role="gridcell"]`));
  }
  function Xu(e) {
    return e.virtualScrollerRef.current.querySelectorAll(`:scope > div > div > .${k.row}`);
  }
  function _o(e) {
    const t = e.getAttribute("aria-colindex");
    return t ? Number(t) - 1 : null;
  }
  const iy = [
    "className",
    "aria-label"
  ], ay = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "columnHeaderTitle"
      ]
    }, De, t);
  }, cy = et("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderTitle",
    overridesResolver: (e, t) => t.columnHeaderTitle
  })({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "var(--unstable_DataGrid-headWeight)",
    lineHeight: "normal"
  }), uy = ze(function(t, n) {
    const { className: o } = t, r = fe(t, iy), l = ie(), s = ay(l);
    return p.jsx(cy, b({
      className: ue(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  });
  function dy(e) {
    var _a2;
    const { label: t, description: n } = e, o = ie(), r = c.useRef(null), [l, s] = c.useState(""), a = c.useCallback(() => {
      if (!n && (r == null ? void 0 : r.current)) {
        const i = Uv(r.current);
        s(i ? t : "");
      }
    }, [
      n,
      t
    ]);
    return p.jsx(o.slots.baseTooltip, b({
      title: n || l
    }, (_a2 = o.slotProps) == null ? void 0 : _a2.baseTooltip, {
      children: p.jsx(uy, {
        onMouseOver: a,
        ref: r,
        children: t
      })
    }));
  }
  const py = [
    "resizable",
    "resizing",
    "height",
    "side"
  ];
  var li = (function(e) {
    return e.Left = "left", e.Right = "right", e;
  })(li || {});
  const fy = (e) => {
    const { resizable: t, resizing: n, classes: o, side: r } = e, l = {
      root: [
        "columnSeparator",
        t && "columnSeparator--resizable",
        n && "columnSeparator--resizing",
        r && `columnSeparator--side${se(r)}`
      ],
      icon: [
        "iconSeparator"
      ]
    };
    return ge(l, De, o);
  };
  function gy(e) {
    const { height: t, side: n = li.Right } = e, o = fe(e, py), r = ie(), l = b({}, e, {
      side: n,
      classes: r.classes
    }), s = fy(l), a = c.useCallback((i) => {
      i.preventDefault(), i.stopPropagation();
    }, []);
    return p.jsx("div", b({
      className: s.root,
      style: {
        minHeight: t
      }
    }, o, {
      onClick: a,
      children: p.jsx(r.slots.columnResizeIcon, {
        className: s.icon
      })
    }));
  }
  const hy = c.memo(gy), my = [
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
  ], Qu = ze(function(t, n) {
    const { classes: o, colIndex: r, height: l, isResizing: s, sortDirection: a, tabIndex: i, separatorSide: d, isDraggable: u, headerComponent: f, description: h, width: g, columnMenuIconButton: m = null, columnMenu: x = null, columnTitleIconButtons: I = null, headerClassName: S, label: w, resizable: F, draggableContainerProps: H, columnHeaderSeparatorProps: v, style: R } = t, A = fe(t, my), $ = ie(), y = c.useRef(null), C = zt(y, n);
    let M = "none";
    return a != null && (M = a === "asc" ? "ascending" : "descending"), p.jsxs("div", b({
      className: ue(o.root, S),
      style: b({}, R, {
        height: l,
        width: g
      }),
      role: "columnheader",
      tabIndex: i,
      "aria-colindex": r + 1,
      "aria-sort": M
    }, A, {
      ref: C,
      children: [
        p.jsxs("div", b({
          className: o.draggableContainer,
          draggable: u,
          role: "presentation"
        }, H, {
          children: [
            p.jsxs("div", {
              className: o.titleContainer,
              role: "presentation",
              children: [
                p.jsx("div", {
                  className: o.titleContainerContent,
                  children: f !== void 0 ? f : p.jsx(dy, {
                    label: w,
                    description: h,
                    columnWidth: g
                  })
                }),
                I
              ]
            }),
            m
          ]
        })),
        p.jsx(hy, b({
          resizable: !$.disableColumnResize && !!F,
          resizing: s,
          height: l,
          side: d
        }, v)),
        x
      ]
    }));
  }), by = (e) => {
    const { colDef: t, classes: n, isDragging: o, sortDirection: r, showRightBorder: l, showLeftBorder: s, filterItemsCounter: a, pinnedPosition: i, isLastUnpinned: d, isSiblingFocused: u } = e, f = r != null, h = a != null && a > 0, g = t.type === "number", m = {
      root: [
        "columnHeader",
        t.headerAlign === "left" && "columnHeader--alignLeft",
        t.headerAlign === "center" && "columnHeader--alignCenter",
        t.headerAlign === "right" && "columnHeader--alignRight",
        t.sortable && "columnHeader--sortable",
        o && "columnHeader--moving",
        f && "columnHeader--sorted",
        h && "columnHeader--filtered",
        g && "columnHeader--numeric",
        "withBorderColor",
        l && "columnHeader--withRightBorder",
        s && "columnHeader--withLeftBorder",
        i === Oe.LEFT && "columnHeader--pinnedLeft",
        i === Oe.RIGHT && "columnHeader--pinnedRight",
        d && "columnHeader--lastUnpinned",
        u && "columnHeader--siblingFocused"
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
    return ge(m, De, n);
  };
  function Cy(e) {
    var _a2, _b2, _c2;
    const { colDef: t, columnMenuOpen: n, colIndex: o, headerHeight: r, isResizing: l, isLast: s, sortDirection: a, sortIndex: i, filterItemsCounter: d, hasFocus: u, tabIndex: f, disableReorder: h, separatorSide: g, showLeftBorder: m, showRightBorder: x, pinnedPosition: I, pinnedOffset: S } = e, w = cn(), F = ie(), H = Gt(), v = c.useRef(null), R = ot(), A = ot(), $ = c.useRef(null), [y, C] = c.useState(n), M = c.useMemo(() => !F.disableColumnReorder && !h && !t.disableReorder, [
      F.disableColumnReorder,
      h,
      t.disableReorder
    ]);
    let T;
    t.renderHeader && (T = t.renderHeader(w.current.getColumnHeaderParams(t.field)));
    const O = b({}, e, {
      classes: F.classes,
      showRightBorder: x,
      showLeftBorder: m
    }), G = by(O), E = c.useCallback((J) => (ne) => {
      Tr(ne) || w.current.publishEvent(J, w.current.getColumnHeaderParams(t.field), ne);
    }, [
      w,
      t.field
    ]), P = c.useMemo(() => ({
      onClick: E("columnHeaderClick"),
      onContextMenu: E("columnHeaderContextMenu"),
      onDoubleClick: E("columnHeaderDoubleClick"),
      onMouseOver: E("columnHeaderOver"),
      onMouseOut: E("columnHeaderOut"),
      onMouseEnter: E("columnHeaderEnter"),
      onMouseLeave: E("columnHeaderLeave"),
      onKeyDown: E("columnHeaderKeyDown"),
      onFocus: E("columnHeaderFocus"),
      onBlur: E("columnHeaderBlur")
    }), [
      E
    ]), D = c.useMemo(() => M ? {
      onDragStart: E("columnHeaderDragStart"),
      onDragEnter: E("columnHeaderDragEnter"),
      onDragOver: E("columnHeaderDragOver"),
      onDragEnd: E("columnHeaderDragEnd")
    } : {}, [
      M,
      E
    ]), L = c.useMemo(() => ({
      onMouseDown: E("columnSeparatorMouseDown"),
      onDoubleClick: E("columnSeparatorDoubleClick")
    }), [
      E
    ]);
    c.useEffect(() => {
      y || C(n);
    }, [
      y,
      n
    ]);
    const z = c.useCallback(() => {
      C(false);
    }, []), _ = !F.disableColumnMenu && !t.disableColumnMenu && p.jsx(Bv, {
      colDef: t,
      columnMenuId: R,
      columnMenuButtonId: A,
      open: y,
      iconButtonRef: $
    }), j = p.jsx(Wv, {
      columnMenuId: R,
      columnMenuButtonId: A,
      field: t.field,
      open: n,
      target: $.current,
      ContentComponent: F.slots.columnMenu,
      contentComponentProps: (_a2 = F.slotProps) == null ? void 0 : _a2.columnMenu,
      onExited: z
    }), V = t.sortingOrder ?? F.sortingOrder, K = (t.sortable || a != null) && !t.hideSortIcons && !F.disableColumnSorting, W = p.jsxs(c.Fragment, {
      children: [
        !F.disableColumnFilter && p.jsx(F.slots.columnHeaderFilterIconButton, b({
          field: t.field,
          counter: d
        }, (_b2 = F.slotProps) == null ? void 0 : _b2.columnHeaderFilterIconButton)),
        K && p.jsx(F.slots.columnHeaderSortIcon, b({
          field: t.field,
          direction: a,
          index: i,
          sortingOrder: V,
          disabled: !t.sortable
        }, (_c2 = F.slotProps) == null ? void 0 : _c2.columnHeaderSortIcon))
      ]
    });
    c.useLayoutEffect(() => {
      const J = w.current.state.columnMenu;
      if (u && !J.open) {
        const ce = v.current.querySelector('[tabindex="0"]') || v.current;
        if (!ce) return;
        if (oi()) ce.focus({
          preventScroll: true
        });
        else {
          const Ce = w.current.getScrollPosition();
          ce.focus(), w.current.scroll(Ce);
        }
      }
    }, [
      w,
      u
    ]);
    const U = typeof t.headerClassName == "function" ? t.headerClassName({
      field: t.field,
      colDef: t
    }) : t.headerClassName, B = t.headerName ?? t.field, te = c.useMemo(() => kl(b({}, e.style), H, I, S), [
      I,
      S,
      e.style,
      H
    ]);
    return p.jsx(Qu, b({
      ref: v,
      classes: G,
      columnMenuOpen: n,
      colIndex: o,
      height: r,
      isResizing: l,
      sortDirection: a,
      hasFocus: u,
      tabIndex: f,
      separatorSide: g,
      isDraggable: M,
      headerComponent: T,
      description: t.description,
      elementId: t.field,
      width: t.computedWidth,
      columnMenuIconButton: _,
      columnTitleIconButtons: W,
      headerClassName: ue(U, s && k["columnHeader--last"]),
      label: B,
      resizable: !F.disableColumnResize && !!t.resizable,
      "data-field": t.field,
      columnMenu: j,
      draggableContainerProps: D,
      columnHeaderSeparatorProps: L,
      style: te
    }, P));
  }
  const wy = On(Cy), xy = [
    "className"
  ], vy = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "iconButtonContainer"
      ]
    }, De, t);
  }, yy = et("div", {
    name: "MuiDataGrid",
    slot: "IconButtonContainer",
    overridesResolver: (e, t) => t.iconButtonContainer
  })(() => ({
    display: "flex",
    visibility: "hidden",
    width: 0
  })), Ju = ze(function(t, n) {
    const { className: o } = t, r = fe(t, xy), l = ie(), s = vy(l);
    return p.jsx(yy, b({
      className: ue(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), Sy = [
    "direction",
    "index",
    "sortingOrder",
    "disabled",
    "className"
  ], Iy = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "sortButton"
      ],
      icon: [
        "sortIcon"
      ]
    }, De, t);
  };
  function Py(e, t, n, o) {
    let r;
    const l = {};
    return t === "asc" ? r = e.columnSortedAscendingIcon : t === "desc" ? r = e.columnSortedDescendingIcon : (r = e.columnUnsortedIcon, l.sortingOrder = o), r ? p.jsx(r, b({
      fontSize: "small",
      className: n
    }, l)) : null;
  }
  function My(e) {
    var _a2;
    const { direction: t, index: n, sortingOrder: o, disabled: r, className: l } = e, s = fe(e, Sy), a = Ee(), i = ie(), d = b({}, e, {
      classes: i.classes
    }), u = Iy(d), f = Py(i.slots, t, u.icon, o);
    if (!f) return null;
    const h = p.jsx(i.slots.baseIconButton, b({
      tabIndex: -1,
      "aria-label": a.current.getLocaleText("columnHeaderSortIconLabel"),
      title: a.current.getLocaleText("columnHeaderSortIconLabel"),
      size: "small",
      disabled: r,
      className: ue(u.root, l)
    }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseIconButton, s, {
      children: f
    }));
    return p.jsxs(Ju, {
      children: [
        n != null && p.jsx(i.slots.baseBadge, {
          badgeContent: n,
          color: "default",
          overlap: "circular",
          children: h
        }),
        n == null && h
      ]
    });
  }
  const ky = c.memo(My), Ey = (e) => {
    const { classes: t } = e;
    return ge({
      icon: [
        "filterIcon"
      ]
    }, De, t);
  };
  function Fy(e) {
    return e.counter ? p.jsx(Ty, b({}, e)) : null;
  }
  function Ty(e) {
    var _a2, _b2;
    const { counter: t, field: n, onClick: o } = e, r = Ee(), l = ie(), s = b({}, e, {
      classes: l.classes
    }), a = Ey(s), i = ot(), d = dr(r, Vx, i), u = ot(), f = c.useCallback((g) => {
      g.preventDefault(), g.stopPropagation();
      const { open: m, openedPanelValue: x } = gr(r.current.state);
      m && x === eo.filters ? r.current.hideFilterPanel() : r.current.showFilterPanel(void 0, u, i), o && o(r.current.getColumnHeaderParams(n), g);
    }, [
      r,
      n,
      o,
      u,
      i
    ]);
    if (!t) return null;
    const h = p.jsx(l.slots.baseIconButton, b({
      id: i,
      onClick: f,
      color: "default",
      "aria-label": r.current.getLocaleText("columnHeaderFiltersLabel"),
      size: "small",
      tabIndex: -1,
      "aria-haspopup": "menu",
      "aria-expanded": d,
      "aria-controls": d ? u : void 0
    }, (_a2 = l.slotProps) == null ? void 0 : _a2.baseIconButton, {
      children: p.jsx(l.slots.columnFilteredIcon, {
        className: a.icon,
        fontSize: "small"
      })
    }));
    return p.jsx(l.slots.baseTooltip, b({
      title: r.current.getLocaleText("columnHeaderFiltersTooltipActive")(t),
      enterDelay: 1e3
    }, (_b2 = l.slotProps) == null ? void 0 : _b2.baseTooltip, {
      children: p.jsxs(Ju, {
        children: [
          t > 1 && p.jsx(l.slots.baseBadge, {
            badgeContent: t,
            color: "default",
            children: h
          }),
          t === 1 && h
        ]
      })
    }));
  }
  const Ma = Se(p.jsx("path", {
    d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
  }), "ArrowUpward"), ka = Se(p.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward"), Ea = Se(p.jsx("path", {
    d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "KeyboardArrowRight"), Fa = Se(p.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Oy = Se(p.jsx("path", {
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  }), "FilterList"), Ta = Se(p.jsx("path", {
    d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
  }), "FilterAlt"), Dy = Se(p.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), "Search");
  Se(p.jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu");
  Se(p.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckCircle");
  const Ry = Se(p.jsx("path", {
    d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
  }), "ColumnIcon"), $y = Se(p.jsx("rect", {
    width: "1",
    height: "24",
    x: "11.5",
    rx: "0.5"
  }), "Separator"), Hy = Se(p.jsx("path", {
    d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
  }), "ViewHeadline"), Ly = Se(p.jsx("path", {
    d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
  }), "TableRows"), jy = Se(p.jsx("path", {
    d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
  }), "ViewStream"), Ay = Se(p.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "TripleDotsVertical"), Wl = Se(p.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Oa = Se(p.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), "Add"), zy = Se(p.jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }), "Remove"), Gy = Se(p.jsx("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }), "Load"), Da = Se(p.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "Drag"), _y = Se(p.jsx("path", {
    d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
  }), "SaveAlt"), Vy = Se(p.jsx("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), Ny = Se(p.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "MoreVert"), By = Se(p.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }), "VisibilityOff"), Wy = Se(p.jsx("g", {
    children: p.jsx("path", {
      d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
    })
  }), "ViewColumn"), Uy = Se(p.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  Se(p.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  const Ky = Se(p.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  function Zu(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
  }
  const dl = (e) => e.indexOf("Arrow") === 0 || e.indexOf("Page") === 0 || e === " " || e === "Home" || e === "End", qy = (e) => !!e.key, ed = (e) => e === "Tab" || e === "Escape";
  function td(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "V" && !e.shiftKey && !e.altKey;
  }
  function Yy(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "C" && !e.shiftKey && !e.altKey;
  }
  const Xy = [
    "hideMenu",
    "colDef",
    "id",
    "labelledby",
    "className",
    "children",
    "open"
  ], Qy = le(ks)(() => ({
    minWidth: 248
  })), Jy = ze(function(t, n) {
    const { hideMenu: o, id: r, labelledby: l, className: s, children: a, open: i } = t, d = fe(t, Xy), u = c.useCallback((f) => {
      f.key === "Tab" && f.preventDefault(), ed(f.key) && o(f);
    }, [
      o
    ]);
    return p.jsx(Qy, b({
      id: r,
      className: ue(k.menuList, s),
      "aria-labelledby": l,
      onKeyDown: u,
      autoFocus: i
    }, d, {
      ref: n,
      children: a
    }));
  }), Zy = [
    "displayOrder"
  ], eS = (e) => {
    const t = cn(), n = ie(), { defaultSlots: o, defaultSlotProps: r, slots: l = {}, slotProps: s = {}, hideMenu: a, colDef: i, addDividers: d = true } = e, u = c.useMemo(() => b({}, o, l), [
      o,
      l
    ]), f = c.useMemo(() => {
      if (!s || Object.keys(s).length === 0) return r;
      const m = b({}, s);
      return Object.entries(r).forEach(([x, I]) => {
        m[x] = b({}, I, s[x] || {});
      }), m;
    }, [
      r,
      s
    ]), h = t.current.unstable_applyPipeProcessors("columnMenu", [], e.colDef), g = c.useMemo(() => {
      const m = Object.keys(o);
      return Object.keys(l).filter((x) => !m.includes(x));
    }, [
      l,
      o
    ]);
    return c.useMemo(() => {
      const I = Array.from(/* @__PURE__ */ new Set([
        ...h,
        ...g
      ])).filter((S) => u[S] != null).sort((S, w) => {
        const F = f[S], H = f[w], v = Number.isFinite(F == null ? void 0 : F.displayOrder) ? F.displayOrder : 100, R = Number.isFinite(H == null ? void 0 : H.displayOrder) ? H.displayOrder : 100;
        return v - R;
      });
      return I.reduce((S, w, F) => {
        let H = {
          colDef: i,
          onClick: a
        };
        const v = f[w];
        if (v) {
          const R = fe(v, Zy);
          H = b({}, H, R);
        }
        return d && F !== I.length - 1 ? [
          ...S,
          [
            u[w],
            H
          ],
          [
            n.slots.baseDivider,
            {}
          ]
        ] : [
          ...S,
          [
            u[w],
            H
          ]
        ];
      }, []);
    }, [
      d,
      i,
      h,
      a,
      u,
      f,
      g,
      n.slots.baseDivider
    ]);
  };
  function tS(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = ie(), a = it(o).filter((d) => d.disableColumnMenu !== true).length === 1, i = c.useCallback((d) => {
      a || (o.current.setColumnVisibility(t.field, false), n(d));
    }, [
      o,
      t.field,
      n,
      a
    ]);
    return r.disableColumnSelector || t.hideable === false ? null : p.jsxs(Lt, {
      onClick: i,
      disabled: a,
      children: [
        p.jsx(yo, {
          children: p.jsx(r.slots.columnMenuHideIcon, {
            fontSize: "small"
          })
        }),
        p.jsx(xo, {
          children: o.current.getLocaleText("columnMenuHideColumn")
        })
      ]
    });
  }
  function nS(e) {
    const { onClick: t } = e, n = Ee(), o = ie(), r = c.useCallback((l) => {
      t(l), n.current.showPreferences(eo.columns);
    }, [
      n,
      t
    ]);
    return o.disableColumnSelector ? null : p.jsxs(Lt, {
      onClick: r,
      children: [
        p.jsx(yo, {
          children: p.jsx(o.slots.columnMenuManageColumnsIcon, {
            fontSize: "small"
          })
        }),
        p.jsx(xo, {
          children: n.current.getLocaleText("columnMenuManageColumns")
        })
      ]
    });
  }
  function oS(e) {
    return p.jsxs(c.Fragment, {
      children: [
        p.jsx(tS, b({}, e)),
        p.jsx(nS, b({}, e))
      ]
    });
  }
  function rS(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = ie(), l = c.useCallback((s) => {
      n(s), o.current.showFilterPanel(t.field);
    }, [
      o,
      t.field,
      n
    ]);
    return r.disableColumnFilter || !t.filterable ? null : p.jsxs(Lt, {
      onClick: l,
      children: [
        p.jsx(yo, {
          children: p.jsx(r.slots.columnMenuFilterIcon, {
            fontSize: "small"
          })
        }),
        p.jsx(xo, {
          children: o.current.getLocaleText("columnMenuFilter")
        })
      ]
    });
  }
  function lS(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = X(o, dn), l = ie(), s = c.useMemo(() => {
      var _a2;
      return t ? (_a2 = r.find((f) => f.field === t.field)) == null ? void 0 : _a2.sort : null;
    }, [
      t,
      r
    ]), a = t.sortingOrder ?? l.sortingOrder, i = c.useCallback((u) => {
      n(u);
      const f = u.currentTarget.getAttribute("data-value") || null;
      o.current.sortColumn(t.field, f === s ? null : f);
    }, [
      o,
      t,
      n,
      s
    ]);
    if (l.disableColumnSorting || !t || !t.sortable || !a.some((u) => !!u)) return null;
    const d = (u) => {
      const f = o.current.getLocaleText(u);
      return typeof f == "function" ? f(t) : f;
    };
    return p.jsxs(c.Fragment, {
      children: [
        a.includes("asc") && s !== "asc" ? p.jsxs(Lt, {
          onClick: i,
          "data-value": "asc",
          children: [
            p.jsx(yo, {
              children: p.jsx(l.slots.columnMenuSortAscendingIcon, {
                fontSize: "small"
              })
            }),
            p.jsx(xo, {
              children: d("columnMenuSortAsc")
            })
          ]
        }) : null,
        a.includes("desc") && s !== "desc" ? p.jsxs(Lt, {
          onClick: i,
          "data-value": "desc",
          children: [
            p.jsx(yo, {
              children: p.jsx(l.slots.columnMenuSortDescendingIcon, {
                fontSize: "small"
              })
            }),
            p.jsx(xo, {
              children: d("columnMenuSortDesc")
            })
          ]
        }) : null,
        a.includes(null) && s != null ? p.jsxs(Lt, {
          onClick: i,
          children: [
            p.jsx(yo, {}),
            p.jsx(xo, {
              children: o.current.getLocaleText("columnMenuUnsort")
            })
          ]
        }) : null
      ]
    });
  }
  const sS = [
    "defaultSlots",
    "defaultSlotProps",
    "slots",
    "slotProps"
  ], iS = {
    columnMenuSortItem: lS,
    columnMenuFilterItem: rS,
    columnMenuColumnsItem: oS
  }, aS = {
    columnMenuSortItem: {
      displayOrder: 10
    },
    columnMenuFilterItem: {
      displayOrder: 20
    },
    columnMenuColumnsItem: {
      displayOrder: 30
    }
  }, cS = ze(function(t, n) {
    const { defaultSlots: o, defaultSlotProps: r, slots: l, slotProps: s } = t, a = fe(t, sS), i = eS(b({}, a, {
      defaultSlots: o,
      defaultSlotProps: r,
      slots: l,
      slotProps: s
    }));
    return p.jsx(Jy, b({}, a, {
      ref: n,
      children: i.map(([d, u], f) => p.jsx(d, b({}, u), f))
    }));
  }), uS = ze(function(t, n) {
    return p.jsx(cS, b({}, t, {
      ref: n,
      defaultSlots: iS,
      defaultSlotProps: aS
    }));
  }), dS = [
    "className",
    "slotProps"
  ], pS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "panelWrapper"
      ]
    }, De, t);
  }, fS = le("div", {
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
  }), gS = () => true, nd = ze(function(t, n) {
    const { className: o, slotProps: r = {} } = t, l = fe(t, dS), s = ie(), a = pS(s);
    return p.jsx(Rd, b({
      open: true,
      disableEnforceFocus: true,
      isEnabled: gS
    }, r.TrapFocus, {
      children: p.jsx(fS, b({
        tabIndex: -1,
        className: ue(a.root, o),
        ownerState: s
      }, l, {
        ref: n
      }))
    }));
  });
  function hS(e) {
    var _a2;
    const t = ie();
    return p.jsx(nd, b({}, e, {
      children: p.jsx(t.slots.columnsManagement, b({}, (_a2 = t.slotProps) == null ? void 0 : _a2.columnsManagement))
    }));
  }
  const mS = [
    "children",
    "className",
    "classes"
  ], bS = at("MuiDataGrid", [
    "panel",
    "paper"
  ]), CS = le(no, {
    name: "MuiDataGrid",
    slot: "Panel",
    overridesResolver: (e, t) => t.panel
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal
  })), wS = le(Ht, {
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
  })), xS = ze((e, t) => {
    const { children: n, className: o } = e, r = fe(e, mS), l = Ee(), s = ie(), a = bS, [i, d] = c.useState(false), u = c.useCallback(() => {
      l.current.hidePreferences();
    }, [
      l
    ]), f = c.useCallback((x) => {
      x.key === "Escape" && l.current.hidePreferences();
    }, [
      l
    ]), h = c.useMemo(() => [
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
          d(true);
        },
        effect: () => () => {
          d(false);
        }
      }
    ], []), [g, m] = c.useState(null);
    return c.useEffect(() => {
      var _a2, _b2;
      const x = (_b2 = (_a2 = l.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.querySelector('[data-id="gridPanelAnchor"]');
      x && m(x);
    }, [
      l
    ]), g ? p.jsx(CS, b({
      placement: "bottom-start",
      className: ue(a.panel, o),
      ownerState: s,
      anchorEl: g,
      modifiers: h
    }, r, {
      ref: t,
      children: p.jsx(Ls, {
        mouseEvent: "onPointerUp",
        touchEvent: false,
        onClickAway: u,
        children: p.jsx(wS, {
          className: a.paper,
          ownerState: s,
          elevation: 8,
          onKeyDown: f,
          children: i && n
        })
      })
    })) : null;
  }), vS = [
    "className"
  ], yS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "panelContent"
      ]
    }, De, t);
  }, SS = et("div", {
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
  function IS(e) {
    const { className: t } = e, n = fe(e, vS), o = ie(), r = yS(o);
    return p.jsx(SS, b({
      className: ue(r.root, t),
      ownerState: o
    }, n));
  }
  const PS = [
    "className"
  ], MS = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "panelFooter"
      ]
    }, De, t);
  }, kS = et("div", {
    name: "MuiDataGrid",
    slot: "PanelFooter",
    overridesResolver: (e, t) => t.panelFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5),
    display: "flex",
    justifyContent: "space-between"
  }));
  function ES(e) {
    const { className: t } = e, n = fe(e, PS), o = ie(), r = MS(o);
    return p.jsx(kS, b({
      className: ue(r.root, t),
      ownerState: o
    }, n));
  }
  const FS = [
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
  ], TS = [
    "InputComponentProps"
  ], OS = (e) => {
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
    }, De, t);
  }, DS = le("div", {
    name: "MuiDataGrid",
    slot: "FilterForm",
    overridesResolver: (e, t) => t.filterForm
  })(({ theme: e }) => ({
    display: "flex",
    padding: e.spacing(1)
  })), RS = le("div", {
    name: "MuiDataGrid",
    slot: "FilterFormDeleteIcon",
    overridesResolver: (e, t) => t.filterFormDeleteIcon
  })(({ theme: e }) => ({
    flexShrink: 0,
    justifyContent: "flex-end",
    marginRight: e.spacing(0.5),
    marginBottom: e.spacing(0.2)
  })), $S = le("div", {
    name: "MuiDataGrid",
    slot: "FilterFormLogicOperatorInput",
    overridesResolver: (e, t) => t.filterFormLogicOperatorInput
  })({
    minWidth: 55,
    marginRight: 5,
    justifyContent: "end"
  }), HS = le("div", {
    name: "MuiDataGrid",
    slot: "FilterFormColumnInput",
    overridesResolver: (e, t) => t.filterFormColumnInput
  })({
    width: 150
  }), LS = le("div", {
    name: "MuiDataGrid",
    slot: "FilterFormOperatorInput",
    overridesResolver: (e, t) => t.filterFormOperatorInput
  })({
    width: 150
  }), jS = le("div", {
    name: "MuiDataGrid",
    slot: "FilterFormValueInput",
    overridesResolver: (e, t) => t.filterFormValueInput
  })({
    width: 190
  }), AS = (e) => {
    switch (e) {
      case Tt.And:
        return "filterPanelOperatorAnd";
      case Tt.Or:
        return "filterPanelOperatorOr";
      default:
        throw new Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
    }
  }, Xo = (e) => e.headerName || e.field, Ra = new Intl.Collator(), $a = ze(function(t, n) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const { item: o, hasMultipleFilters: r, deleteFilter: l, applyFilterChanges: s, showMultiFilterOperators: a, disableMultiFilterOperator: i, applyMultiFilterOperatorChanges: d, focusElementRef: u, logicOperators: f = [
      Tt.And,
      Tt.Or
    ], columnsSort: h, filterColumns: g, deleteIconProps: m = {}, logicOperatorInputProps: x = {}, operatorInputProps: I = {}, columnInputProps: S = {}, valueInputProps: w = {}, readOnly: F } = t, H = fe(t, FS), v = Ee(), R = X(v, Dn), A = X(v, eu), $ = X(v, yt), y = ot(), C = ot(), M = ot(), T = ot(), O = ie(), G = OS(O), E = c.useRef(null), P = c.useRef(null), D = $.logicOperator ?? Tt.And, L = r && f.length > 0, z = ((_a2 = O.slotProps) == null ? void 0 : _a2.baseFormControl) || {}, j = (((_b2 = O.slotProps) == null ? void 0 : _b2.baseSelect) || {}).native ?? false, V = ((_c2 = O.slotProps) == null ? void 0 : _c2.baseInputLabel) || {}, K = ((_d2 = O.slotProps) == null ? void 0 : _d2.baseSelectOption) || {}, { InputComponentProps: W } = w, U = fe(w, TS), { filteredColumns: B, selectedField: te } = c.useMemo(() => {
      let Z = o.field;
      const Ie = R[o.field].filterable === false ? R[o.field] : null;
      if (Ie) return {
        filteredColumns: [
          Ie
        ],
        selectedField: Z
      };
      if (g === void 0 || typeof g != "function") return {
        filteredColumns: A,
        selectedField: Z
      };
      const ee = g({
        field: o.field,
        columns: A,
        currentFilters: ($ == null ? void 0 : $.items) || []
      });
      return {
        filteredColumns: A.filter((ye) => {
          const xe = ee.includes(ye.field);
          return ye.field === o.field && !xe && (Z = void 0), xe;
        }),
        selectedField: Z
      };
    }, [
      g,
      $ == null ? void 0 : $.items,
      A,
      o.field,
      R
    ]), J = c.useMemo(() => {
      switch (h) {
        case "asc":
          return B.sort((Z, Ie) => Ra.compare(Xo(Z), Xo(Ie)));
        case "desc":
          return B.sort((Z, Ie) => -Ra.compare(Xo(Z), Xo(Ie)));
        default:
          return B;
      }
    }, [
      B,
      h
    ]), ne = o.field ? v.current.getColumn(o.field) : null, ce = c.useMemo(() => {
      var _a3;
      return !o.operator || !ne ? null : (_a3 = ne.filterOperators) == null ? void 0 : _a3.find((Z) => Z.value === o.operator);
    }, [
      o,
      ne
    ]), Ce = c.useCallback((Z) => {
      const Ie = Z.target.value, ee = v.current.getColumn(Ie);
      if (ee.field === ne.field) return;
      const ye = ee.filterOperators.find((Ne) => Ne.value === o.operator) || ee.filterOperators[0];
      let Fe = !ye.InputComponent || ye.InputComponent !== (ce == null ? void 0 : ce.InputComponent) || ee.type !== ne.type ? void 0 : o.value;
      if (ee.type === "singleSelect" && Fe !== void 0) {
        const Ne = ee, Ue = Zn(Ne);
        Array.isArray(Fe) ? Fe = Fe.filter((Ge) => il(Ge, Ue, Ne == null ? void 0 : Ne.getOptionValue) !== void 0) : il(o.value, Ue, Ne == null ? void 0 : Ne.getOptionValue) === void 0 && (Fe = void 0);
      }
      s(b({}, o, {
        field: Ie,
        operator: ye.value,
        value: Fe
      }));
    }, [
      v,
      s,
      o,
      ne,
      ce
    ]), Y = c.useCallback((Z) => {
      const Ie = Z.target.value, ee = ne == null ? void 0 : ne.filterOperators.find((xe) => xe.value === Ie), ye = !(ee == null ? void 0 : ee.InputComponent) || (ee == null ? void 0 : ee.InputComponent) !== (ce == null ? void 0 : ce.InputComponent);
      s(b({}, o, {
        operator: Ie,
        value: ye ? void 0 : o.value
      }));
    }, [
      s,
      o,
      ne,
      ce
    ]), oe = c.useCallback((Z) => {
      const Ie = Z.target.value === Tt.And.toString() ? Tt.And : Tt.Or;
      d(Ie);
    }, [
      d
    ]), he = () => {
      l(o);
    };
    return c.useImperativeHandle(u, () => ({
      focus: () => {
        var _a3;
        (ce == null ? void 0 : ce.InputComponent) ? (_a3 = E == null ? void 0 : E.current) == null ? void 0 : _a3.focus() : P.current.focus();
      }
    }), [
      ce
    ]), p.jsxs(DS, b({
      className: G.root,
      "data-id": o.id,
      ownerState: O
    }, H, {
      ref: n,
      children: [
        p.jsx(RS, b({
          variant: "standard",
          as: O.slots.baseFormControl
        }, z, m, {
          className: ue(G.deleteIcon, z.className, m.className),
          ownerState: O,
          children: p.jsx(O.slots.baseIconButton, b({
            "aria-label": v.current.getLocaleText("filterPanelDeleteIconLabel"),
            title: v.current.getLocaleText("filterPanelDeleteIconLabel"),
            onClick: he,
            size: "small",
            disabled: F
          }, (_e = O.slotProps) == null ? void 0 : _e.baseIconButton, {
            children: p.jsx(O.slots.filterPanelDeleteIcon, {
              fontSize: "small"
            })
          }))
        })),
        p.jsx($S, b({
          variant: "standard",
          as: O.slots.baseFormControl
        }, z, x, {
          sx: [
            L ? {
              display: "flex"
            } : {
              display: "none"
            },
            a ? {
              visibility: "visible"
            } : {
              visibility: "hidden"
            },
            z.sx,
            x.sx
          ],
          className: ue(G.logicOperatorInput, z.className, x.className),
          ownerState: O,
          children: p.jsx(O.slots.baseSelect, b({
            inputProps: {
              "aria-label": v.current.getLocaleText("filterPanelLogicOperator")
            },
            value: D ?? "",
            onChange: oe,
            disabled: !!i || f.length === 1,
            native: j
          }, (_f2 = O.slotProps) == null ? void 0 : _f2.baseSelect, {
            children: f.map((Z) => c.createElement(O.slots.baseSelectOption, b({}, K, {
              native: j,
              key: Z.toString(),
              value: Z.toString()
            }), v.current.getLocaleText(AS(Z))))
          }))
        })),
        p.jsxs(HS, b({
          variant: "standard",
          as: O.slots.baseFormControl
        }, z, S, {
          className: ue(G.columnInput, z.className, S.className),
          ownerState: O,
          children: [
            p.jsx(O.slots.baseInputLabel, b({}, V, {
              htmlFor: y,
              id: C,
              children: v.current.getLocaleText("filterPanelColumns")
            })),
            p.jsx(O.slots.baseSelect, b({
              labelId: C,
              id: y,
              label: v.current.getLocaleText("filterPanelColumns"),
              value: te ?? "",
              onChange: Ce,
              native: j,
              disabled: F
            }, (_g2 = O.slotProps) == null ? void 0 : _g2.baseSelect, {
              children: J.map((Z) => c.createElement(O.slots.baseSelectOption, b({}, K, {
                native: j,
                key: Z.field,
                value: Z.field
              }), Xo(Z)))
            }))
          ]
        })),
        p.jsxs(LS, b({
          variant: "standard",
          as: O.slots.baseFormControl
        }, z, I, {
          className: ue(G.operatorInput, z.className, I.className),
          ownerState: O,
          children: [
            p.jsx(O.slots.baseInputLabel, b({}, V, {
              htmlFor: M,
              id: T,
              children: v.current.getLocaleText("filterPanelOperator")
            })),
            p.jsx(O.slots.baseSelect, b({
              labelId: T,
              label: v.current.getLocaleText("filterPanelOperator"),
              id: M,
              value: o.operator,
              onChange: Y,
              native: j,
              inputRef: P,
              disabled: F
            }, (_h2 = O.slotProps) == null ? void 0 : _h2.baseSelect, {
              children: (_i2 = ne == null ? void 0 : ne.filterOperators) == null ? void 0 : _i2.map((Z) => c.createElement(O.slots.baseSelectOption, b({}, K, {
                native: j,
                key: Z.value,
                value: Z.value
              }), Z.label || v.current.getLocaleText(`filterOperator${se(Z.value)}`)))
            }))
          ]
        })),
        p.jsx(jS, b({
          variant: "standard",
          as: O.slots.baseFormControl
        }, z, U, {
          className: ue(G.valueInput, z.className, U.className),
          ownerState: O,
          children: (ce == null ? void 0 : ce.InputComponent) ? p.jsx(ce.InputComponent, b({
            apiRef: v,
            item: o,
            applyValue: s,
            focusElementRef: E,
            disabled: F
          }, ce.InputComponentProps, W), o.field) : null
        }))
      ]
    }));
  }), zS = [
    "logicOperators",
    "columnsSort",
    "filterFormProps",
    "getColumnForNewFilter",
    "children",
    "disableAddFilterButton",
    "disableRemoveAllButton"
  ], Ha = (e) => ({
    field: e.field,
    operator: e.filterOperators[0].value,
    id: Math.round(Math.random() * 1e5)
  }), GS = ze(function(t, n) {
    var _a2, _b2;
    const o = Ee(), r = ie(), l = X(o, yt), s = X(o, eu), a = X(o, Wb), i = c.useRef(null), d = c.useRef(null), { logicOperators: u = [
      Tt.And,
      Tt.Or
    ], columnsSort: f, filterFormProps: h, getColumnForNewFilter: g, disableAddFilterButton: m = false, disableRemoveAllButton: x = false } = t, I = fe(t, zS), S = o.current.upsertFilterItem, w = c.useCallback((T) => {
      o.current.setFilterLogicOperator(T);
    }, [
      o
    ]), F = c.useCallback(() => {
      let T;
      if (g && typeof g == "function") {
        const O = g({
          currentFilters: (l == null ? void 0 : l.items) || [],
          columns: s
        });
        if (O === null) return null;
        T = s.find(({ field: G }) => G === O);
      } else T = s.find((O) => {
        var _a3;
        return (_a3 = O.filterOperators) == null ? void 0 : _a3.length;
      });
      return T ? Ha(T) : null;
    }, [
      l == null ? void 0 : l.items,
      s,
      g
    ]), H = c.useCallback(() => {
      if (g === void 0 || typeof g != "function") return F();
      const T = l.items.length ? l.items : [
        F()
      ].filter(Boolean), O = g({
        currentFilters: T,
        columns: s
      });
      if (O === null) return null;
      const G = s.find(({ field: E }) => E === O);
      return G ? Ha(G) : null;
    }, [
      l.items,
      s,
      g,
      F
    ]), v = c.useMemo(() => l.items.length ? l.items : (d.current || (d.current = F()), d.current ? [
      d.current
    ] : []), [
      l.items,
      F
    ]), R = v.length > 1, { readOnlyFilters: A, validFilters: $ } = c.useMemo(() => v.reduce((T, O) => (a[O.field] ? T.validFilters.push(O) : T.readOnlyFilters.push(O), T), {
      readOnlyFilters: [],
      validFilters: []
    }), [
      v,
      a
    ]), y = c.useCallback(() => {
      const T = H();
      T && o.current.upsertFilterItems([
        ...v,
        T
      ]);
    }, [
      o,
      H,
      v
    ]), C = c.useCallback((T) => {
      const O = $.length === 1;
      o.current.deleteFilterItem(T), O && o.current.hideFilterPanel();
    }, [
      o,
      $.length
    ]), M = c.useCallback(() => $.length === 1 && $[0].value === void 0 ? (o.current.deleteFilterItem($[0]), o.current.hideFilterPanel()) : o.current.setFilterModel(b({}, l, {
      items: A
    }), "removeAllFilterItems"), [
      o,
      A,
      l,
      $
    ]);
    return c.useEffect(() => {
      u.length > 0 && l.logicOperator && !u.includes(l.logicOperator) && w(u[0]);
    }, [
      u,
      w,
      l.logicOperator
    ]), c.useEffect(() => {
      $.length > 0 && i.current.focus();
    }, [
      $.length
    ]), p.jsxs(nd, b({}, I, {
      ref: n,
      children: [
        p.jsxs(IS, {
          children: [
            A.map((T, O) => p.jsx($a, b({
              item: T,
              applyFilterChanges: S,
              deleteFilter: C,
              hasMultipleFilters: R,
              showMultiFilterOperators: O > 0,
              disableMultiFilterOperator: O !== 1,
              applyMultiFilterOperatorChanges: w,
              focusElementRef: null,
              readOnly: true,
              logicOperators: u,
              columnsSort: f
            }, h), T.id == null ? O : T.id)),
            $.map((T, O) => p.jsx($a, b({
              item: T,
              applyFilterChanges: S,
              deleteFilter: C,
              hasMultipleFilters: R,
              showMultiFilterOperators: A.length + O > 0,
              disableMultiFilterOperator: A.length + O !== 1,
              applyMultiFilterOperatorChanges: w,
              focusElementRef: O === $.length - 1 ? i : null,
              logicOperators: u,
              columnsSort: f
            }, h), T.id == null ? O + A.length : T.id))
          ]
        }),
        !r.disableMultipleColumnsFiltering && !(m && x) ? p.jsxs(ES, {
          children: [
            m ? p.jsx("span", {}) : p.jsx(r.slots.baseButton, b({
              onClick: y,
              startIcon: p.jsx(r.slots.filterPanelAddIcon, {})
            }, (_a2 = r.slotProps) == null ? void 0 : _a2.baseButton, {
              children: o.current.getLocaleText("filterPanelAddFilter")
            })),
            !x && $.length > 0 ? p.jsx(r.slots.baseButton, b({
              onClick: M,
              startIcon: p.jsx(r.slots.filterPanelRemoveAllIcon, {})
            }, (_b2 = r.slotProps) == null ? void 0 : _b2.baseButton, {
              children: o.current.getLocaleText("filterPanelRemoveAll")
            })) : null
          ]
        }) : null
      ]
    }));
  }), _S = (e, t) => {
    const n = new Set(Object.keys(e).filter((l) => e[l] === false)), o = new Set(Object.keys(t).filter((l) => t[l] === false));
    if (n.size !== o.size) return false;
    let r = true;
    return n.forEach((l) => {
      o.has(l) || (r = false);
    }), r;
  }, VS = (e, t) => (e.headerName || e.field).toLowerCase().indexOf(t) > -1, NS = (e) => {
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
    }, De, t);
  }, La = new Intl.Collator();
  function BS(e) {
    var _a2, _b2, _c2, _d2;
    const t = Ee(), n = c.useRef(null), o = X(t, rn), r = In(() => en(t)).current, l = X(t, en), s = ie(), [a, i] = c.useState(""), d = NS(s), { sort: u, searchPredicate: f = VS, autoFocusSearchField: h = true, disableShowHideToggle: g = false, disableResetButton: m = false, toggleAllMode: x = "all", getTogglableColumns: I, searchInputProps: S } = e, w = c.useMemo(() => _S(l, r), [
      l,
      r
    ]), F = c.useMemo(() => {
      switch (u) {
        case "asc":
          return [
            ...o
          ].sort((E, P) => La.compare(E.headerName || E.field, P.headerName || P.field));
        case "desc":
          return [
            ...o
          ].sort((E, P) => -La.compare(E.headerName || E.field, P.headerName || P.field));
        default:
          return o;
      }
    }, [
      o,
      u
    ]), H = (E) => {
      const { name: P } = E.target;
      t.current.setColumnVisibility(P, l[P] === false);
    }, v = c.useMemo(() => {
      const E = I ? I(F) : null, P = E ? F.filter(({ field: D }) => E.includes(D)) : F;
      return a ? P.filter((D) => f(D, a.toLowerCase())) : P;
    }, [
      F,
      a,
      f,
      I
    ]), R = c.useCallback((E) => {
      const P = en(t), D = b({}, P), L = I ? I(o) : null;
      return (x === "filteredOnly" ? v : o).forEach((z) => {
        z.hideable && (L == null || L.includes(z.field)) && (E ? delete D[z.field] : D[z.field] = false);
      }), t.current.setColumnVisibilityModel(D);
    }, [
      t,
      o,
      I,
      x,
      v
    ]), A = c.useCallback((E) => {
      i(E.target.value);
    }, []), $ = c.useMemo(() => v.filter((E) => E.hideable), [
      v
    ]), y = c.useMemo(() => $.every((E) => l[E.field] == null || l[E.field] !== false), [
      l,
      $
    ]), C = c.useMemo(() => $.every((E) => l[E.field] === false), [
      l,
      $
    ]), M = c.useRef(null);
    c.useEffect(() => {
      h ? n.current.focus() : M.current && typeof M.current.focus == "function" && M.current.focus();
    }, [
      h
    ]);
    let T = false;
    const O = (E) => T === false && E.hideable !== false ? (T = true, true) : false, G = c.useCallback(() => {
      i(""), n.current.focus();
    }, []);
    return p.jsxs(c.Fragment, {
      children: [
        p.jsx(US, {
          className: d.header,
          ownerState: s,
          children: p.jsx(KS, b({
            as: s.slots.baseTextField,
            ownerState: s,
            placeholder: t.current.getLocaleText("columnsManagementSearchTitle"),
            inputRef: n,
            className: d.searchInput,
            value: a,
            onChange: A,
            variant: "outlined",
            size: "small",
            type: "search",
            InputProps: {
              startAdornment: p.jsx(s.slots.baseInputAdornment, {
                position: "start",
                children: p.jsx(s.slots.quickFilterIcon, {})
              }),
              endAdornment: p.jsx(s.slots.baseIconButton, b({
                "aria-label": t.current.getLocaleText("columnsManagementDeleteIconLabel"),
                size: "small",
                sx: [
                  a ? {
                    visibility: "visible"
                  } : {
                    visibility: "hidden"
                  }
                ],
                tabIndex: -1,
                onClick: G
              }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseIconButton, {
                children: p.jsx(s.slots.quickFilterClearIcon, {
                  fontSize: "small"
                })
              }))
            },
            inputProps: {
              "aria-label": t.current.getLocaleText("columnsManagementSearchTitle")
            },
            autoComplete: "off",
            fullWidth: true
          }, (_b2 = s.slotProps) == null ? void 0 : _b2.baseTextField, S))
        }),
        p.jsxs(WS, {
          className: d.root,
          ownerState: s,
          children: [
            v.map((E) => {
              var _a3;
              return p.jsx(jn, {
                className: d.row,
                control: p.jsx(s.slots.baseCheckbox, b({
                  disabled: E.hideable === false,
                  checked: l[E.field] !== false,
                  onClick: H,
                  name: E.field,
                  sx: {
                    p: 0.5
                  },
                  inputRef: O(E) ? M : void 0
                }, (_a3 = s.slotProps) == null ? void 0 : _a3.baseCheckbox)),
                label: E.headerName || E.field
              }, E.field);
            }),
            v.length === 0 && p.jsx(YS, {
              ownerState: s,
              children: t.current.getLocaleText("columnsManagementNoColumns")
            })
          ]
        }),
        (!g || !m) && v.length > 0 ? p.jsxs(qS, {
          ownerState: s,
          className: d.footer,
          children: [
            g ? p.jsx("span", {}) : p.jsx(jn, {
              control: p.jsx(s.slots.baseCheckbox, b({
                disabled: $.length === 0,
                checked: y,
                indeterminate: !y && !C,
                onClick: () => R(!y),
                name: t.current.getLocaleText("columnsManagementShowHideAllText"),
                sx: {
                  p: 0.5
                }
              }, (_c2 = s.slotProps) == null ? void 0 : _c2.baseCheckbox)),
              label: t.current.getLocaleText("columnsManagementShowHideAllText")
            }),
            m ? null : p.jsx(s.slots.baseButton, b({
              onClick: () => t.current.setColumnVisibilityModel(r),
              disabled: w
            }, (_d2 = s.slotProps) == null ? void 0 : _d2.baseButton, {
              children: t.current.getLocaleText("columnsManagementReset")
            }))
          ]
        }) : null
      ]
    });
  }
  const WS = le("div", {
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
  })), US = le("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementHeader",
    overridesResolver: (e, t) => t.columnsManagementHeader
  })(({ theme: e }) => ({
    padding: e.spacing(1.5, 3)
  })), KS = le(Xt, {
    name: "MuiDataGrid",
    slot: "ColumnsManagementSearchInput",
    overridesResolver: (e, t) => t.columnsManagementSearchInput
  })(({ theme: e }) => ({
    [`& .${Qt.root}`]: {
      padding: e.spacing(0, 1.5, 0, 1.5)
    },
    [`& .${Qt.input}::-webkit-search-decoration,
  & .${Qt.input}::-webkit-search-cancel-button,
  & .${Qt.input}::-webkit-search-results-button,
  & .${Qt.input}::-webkit-search-results-decoration`]: {
      display: "none"
    }
  })), qS = le("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementFooter",
    overridesResolver: (e, t) => t.columnsManagementFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5, 1, 0.5, 3),
    display: "flex",
    justifyContent: "space-between",
    borderTop: `1px solid ${e.palette.divider}`
  })), YS = le("div")(({ theme: e }) => ({
    padding: e.spacing(0.5, 0),
    color: e.palette.grey[500]
  })), XS = ze(function(t, n) {
    var _a2, _b2;
    const { children: o, slotProps: r = {} } = t, l = r.button || {}, s = r.tooltip || {}, a = Ee(), i = ie(), d = ot(), u = ot(), [f, h] = c.useState(false), g = c.useRef(null), m = zt(n, g), x = (w) => {
      var _a3;
      h((F) => !F), (_a3 = l.onClick) == null ? void 0 : _a3.call(l, w);
    }, I = () => h(false), S = (w) => {
      w.key === "Tab" && w.preventDefault(), ed(w.key) && I();
    };
    return o == null ? null : p.jsxs(c.Fragment, {
      children: [
        p.jsx(i.slots.baseTooltip, b({
          title: a.current.getLocaleText("toolbarExportLabel"),
          enterDelay: 1e3
        }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseTooltip, s, {
          children: p.jsx(i.slots.baseButton, b({
            size: "small",
            startIcon: p.jsx(i.slots.exportIcon, {}),
            "aria-expanded": f,
            "aria-label": a.current.getLocaleText("toolbarExportLabel"),
            "aria-haspopup": "menu",
            "aria-controls": f ? u : void 0,
            id: d
          }, (_b2 = i.slotProps) == null ? void 0 : _b2.baseButton, l, {
            onClick: x,
            ref: m,
            children: a.current.getLocaleText("toolbarExport")
          }))
        })),
        p.jsx(Bs, {
          open: f,
          target: g.current,
          onClose: I,
          position: "bottom-start",
          children: p.jsx(ks, {
            id: u,
            className: k.menuList,
            "aria-labelledby": d,
            onKeyDown: S,
            autoFocusItem: f,
            children: c.Children.map(o, (w) => c.isValidElement(w) ? c.cloneElement(w, {
              hideMenu: I
            }) : w)
          })
        })
      ]
    });
  }), QS = [
    "hideMenu",
    "options"
  ], JS = [
    "hideMenu",
    "options"
  ], ZS = [
    "csvOptions",
    "printOptions",
    "excelOptions"
  ];
  function e0(e) {
    const t = Ee(), { hideMenu: n, options: o } = e, r = fe(e, QS);
    return p.jsx(Lt, b({
      onClick: () => {
        t.current.exportDataAsCsv(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportCSV")
    }));
  }
  function t0(e) {
    const t = Ee(), { hideMenu: n, options: o } = e, r = fe(e, JS);
    return p.jsx(Lt, b({
      onClick: () => {
        t.current.exportDataAsPrint(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportPrint")
    }));
  }
  ze(function(t, n) {
    const o = t, { csvOptions: r = {}, printOptions: l = {}, excelOptions: s } = o, a = fe(o, ZS), d = Ee().current.unstable_applyPipeProcessors("exportMenu", [], {
      excelOptions: s,
      csvOptions: r,
      printOptions: l
    }).sort((u, f) => u.componentName > f.componentName ? 1 : -1);
    return d.length === 0 ? null : p.jsx(XS, b({}, a, {
      ref: n,
      children: d.map((u, f) => c.cloneElement(u.component, {
        key: f
      }))
    }));
  });
  const n0 = [
    "quickFilterParser",
    "quickFilterFormatter",
    "debounceMs",
    "className"
  ], o0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "toolbarQuickFilter"
      ]
    }, De, t);
  }, r0 = le(Xt, {
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
  })), l0 = (e) => e.split(" ").filter((t) => t !== ""), s0 = (e) => e.join(" ");
  function i0(e) {
    var _a2, _b2;
    const t = Ee(), n = ie(), o = o0(n), r = X(t, uu), { quickFilterParser: l = l0, quickFilterFormatter: s = s0, debounceMs: a = n.filterDebounceMs, className: i } = e, d = fe(e, n0), [u, f] = c.useState(() => s(r ?? [])), h = c.useRef(r);
    c.useEffect(() => {
      xn(h.current, r) || (h.current = r, f((S) => xn(l(S), r) ? S : s(r ?? [])));
    }, [
      r,
      s,
      l
    ]);
    const g = c.useCallback((S) => {
      const w = l(S);
      h.current = w, t.current.setQuickFilterValues(w);
    }, [
      t,
      l
    ]), m = c.useMemo(() => $d(g, a), [
      g,
      a
    ]);
    c.useEffect(() => m.clear, [
      m
    ]);
    const x = c.useCallback((S) => {
      const w = S.target.value;
      f(w), m(w);
    }, [
      m
    ]), I = c.useCallback(() => {
      f(""), g("");
    }, [
      g
    ]);
    return p.jsx(r0, b({
      as: n.slots.baseTextField,
      ownerState: n,
      variant: "standard",
      value: u,
      onChange: x,
      className: ue(o.root, i),
      placeholder: t.current.getLocaleText("toolbarQuickFilterPlaceholder"),
      "aria-label": t.current.getLocaleText("toolbarQuickFilterLabel"),
      type: "search"
    }, d, {
      InputProps: b({
        startAdornment: p.jsx(n.slots.quickFilterIcon, {
          fontSize: "small"
        }),
        endAdornment: p.jsx(n.slots.baseIconButton, b({
          "aria-label": t.current.getLocaleText("toolbarQuickFilterDeleteIconLabel"),
          size: "small",
          sx: [
            u ? {
              visibility: "visible"
            } : {
              visibility: "hidden"
            }
          ],
          onClick: I
        }, (_a2 = n.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: p.jsx(n.slots.quickFilterClearIcon, {
            fontSize: "small"
          })
        }))
      }, d.InputProps)
    }, (_b2 = n.slotProps) == null ? void 0 : _b2.baseTextField));
  }
  const a0 = [
    "className",
    "selectedRowCount"
  ], c0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "selectedRowCount"
      ]
    }, De, t);
  }, u0 = et("div", {
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
  })), d0 = ze(function(t, n) {
    const { className: o, selectedRowCount: r } = t, l = fe(t, a0), s = Ee(), a = ie(), i = c0(a), d = s.current.getLocaleText("footerRowSelected")(r);
    return p.jsx(u0, b({
      className: ue(i.root, o),
      ownerState: a
    }, l, {
      ref: n,
      children: d
    }));
  }), p0 = ze(function(t, n) {
    var _a2, _b2;
    const o = Ee(), r = ie(), l = X(o, kb), s = X(o, DC), a = X(o, qs), i = !r.hideFooterSelectedRowCount && s > 0 ? p.jsx(d0, {
      selectedRowCount: s
    }) : p.jsx("div", {}), d = !r.hideFooterRowCount && !r.pagination ? p.jsx(r.slots.footerRowCount, b({}, (_a2 = r.slotProps) == null ? void 0 : _a2.footerRowCount, {
      rowCount: l,
      visibleRowCount: a
    })) : null, u = r.pagination && !r.hideFooterPagination && r.slots.pagination && p.jsx(r.slots.pagination, b({}, (_b2 = r.slotProps) == null ? void 0 : _b2.pagination));
    return p.jsxs(Hv, b({}, t, {
      ref: n,
      children: [
        i,
        d,
        u
      ]
    }));
  }), lr = (e, t, n, o, r, l) => {
    let s;
    switch (e) {
      case Oe.LEFT:
        s = o[n];
        break;
      case Oe.RIGHT:
        s = r - o[n] - t + l;
        break;
      default:
        s = void 0;
        break;
    }
    return s;
  }, pl = (e, t, n, o, r) => {
    const l = t === n - 1;
    return e === Oe.LEFT && l ? true : o ? e === Oe.LEFT ? true : e === Oe.RIGHT ? !l : !l || r : false;
  }, fl = (e, t) => e === Oe.RIGHT && t === 0, Qo = {
    root: k.scrollbarFiller,
    header: k["scrollbarFiller--header"],
    borderTop: k["scrollbarFiller--borderTop"],
    borderBottom: k["scrollbarFiller--borderBottom"],
    pinnedRight: k["scrollbarFiller--pinnedRight"]
  };
  function si({ header: e, borderTop: t = true, borderBottom: n, pinnedRight: o }) {
    return p.jsx("div", {
      role: "presentation",
      className: ue(Qo.root, e && Qo.header, t && Qo.borderTop, n && Qo.borderBottom, o && Qo.pinnedRight)
    });
  }
  const f0 = et("div", {
    name: "MuiDataGrid",
    slot: "SkeletonLoadingOverlay",
    overridesResolver: (e, t) => t.skeletonLoadingOverlay
  })({
    minWidth: "100%",
    width: "max-content",
    height: "100%",
    overflow: "clip"
  }), g0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "skeletonLoadingOverlay"
      ]
    }, De, t);
  }, ja = (e) => parseInt(e.getAttribute("data-colindex"), 10), h0 = ze(function(t, n) {
    const o = ie(), { slots: r } = o, l = Gt(), s = g0({
      classes: o.classes
    }), a = c.useRef(null), i = zt(a, n), d = Ee(), u = X(d, Ct), f = (u == null ? void 0 : u.viewportInnerSize.height) ?? 0, h = Math.ceil(f / u.rowHeight), g = X(d, bl), m = X(d, Un), x = c.useMemo(() => m.filter((R) => R <= g).length, [
      g,
      m
    ]), I = X(d, it), S = c.useMemo(() => I.slice(0, x), [
      I,
      x
    ]), w = X(d, Lo), F = c.useCallback((R) => {
      if (w.left.findIndex((A) => A.field === R) !== -1) return Oe.LEFT;
      if (w.right.findIndex((A) => A.field === R) !== -1) return Oe.RIGHT;
    }, [
      w.left,
      w.right
    ]), H = c.useMemo(() => {
      const R = [];
      for (let A = 0; A < h; A += 1) {
        const $ = [];
        for (let y = 0; y < S.length; y += 1) {
          const C = S[y], M = F(C.field), T = M === Oe.LEFT, O = M === Oe.RIGHT, G = Uu(M, l), E = G ? w[G].length : S.length - w.left.length - w.right.length, P = G ? w[G].findIndex((ce) => ce.field === C.field) : y - w.left.length, D = u.hasScrollY ? u.scrollbarSize : 0, L = kl({}, l, M, lr(M, C.computedWidth, y, m, u.columnsTotalWidth, D)), z = u.columnsTotalWidth < u.viewportOuterSize.width, _ = pl(M, P, E, o.showCellVerticalBorder, z), j = fl(M, P), V = y === S.length - 1, K = O && P === 0, W = K && z, U = V && !K && z, B = u.viewportOuterSize.width - u.columnsTotalWidth, te = Math.max(0, B), J = p.jsx(r.skeletonCell, {
            width: te,
            empty: true
          }, `skeleton-filler-column-${A}`), ne = V && D !== 0;
          W && $.push(J), $.push(p.jsx(r.skeletonCell, {
            field: C.field,
            type: C.type,
            align: C.align,
            width: "var(--width)",
            height: u.rowHeight,
            "data-colindex": y,
            className: ue(T && k["cell--pinnedLeft"], O && k["cell--pinnedRight"], _ && k["cell--withRightBorder"], j && k["cell--withLeftBorder"]),
            style: b({
              "--width": `${C.computedWidth}px`
            }, L)
          }, `skeleton-column-${A}-${C.field}`)), U && $.push(J), ne && $.push(p.jsx(si, {
            pinnedRight: w.right.length > 0
          }, `skeleton-scrollbar-filler-${A}`));
        }
        R.push(p.jsx("div", {
          className: ue(k.row, k.rowSkeleton, A === 0 && k["row--firstVisible"]),
          children: $
        }, `skeleton-row-${A}`));
      }
      return R;
    }, [
      r,
      S,
      w,
      h,
      o.showCellVerticalBorder,
      u,
      m,
      F,
      l
    ]);
    return re(d, "columnResize", (R) => {
      var _a2, _b2, _c2, _d2, _e;
      const { colDef: A, width: $ } = R, y = (_a2 = a.current) == null ? void 0 : _a2.querySelectorAll(`[data-field="${Rn(A.field)}"]`);
      if (!y) throw new Error("MUI X: Expected skeleton cells to be defined with `data-field` attribute.");
      const C = S.findIndex((P) => P.field === A.field), M = F(A.field), T = M === Oe.LEFT, O = M === Oe.RIGHT, G = getComputedStyle(y[0]).getPropertyValue("--width"), E = parseInt(G, 10) - $;
      y && y.forEach((P) => {
        P.style.setProperty("--width", `${$}px`);
      }), T && ((_c2 = (_b2 = a.current) == null ? void 0 : _b2.querySelectorAll(`.${k["cell--pinnedLeft"]}`)) == null ? void 0 : _c2.forEach((D) => {
        ja(D) > C && (D.style.left = `${parseInt(getComputedStyle(D).left, 10) - E}px`);
      })), O && ((_e = (_d2 = a.current) == null ? void 0 : _d2.querySelectorAll(`.${k["cell--pinnedRight"]}`)) == null ? void 0 : _e.forEach((D) => {
        ja(D) < C && (D.style.right = `${parseInt(getComputedStyle(D).right, 10) + E}px`);
      }));
    }), p.jsx(f0, b({
      className: s.root
    }, t, {
      ref: i,
      children: H
    }));
  }), m0 = [
    "variant",
    "noRowsVariant",
    "style"
  ], b0 = {
    "circular-progress": {
      component: Hd,
      style: {}
    },
    "linear-progress": {
      component: qg,
      style: {
        display: "block"
      }
    },
    skeleton: {
      component: h0,
      style: {
        display: "block"
      }
    }
  }, C0 = ze(function(t, n) {
    const { variant: o = "circular-progress", noRowsVariant: r = "circular-progress", style: l } = t, s = fe(t, m0), a = Ee(), i = X(a, Sr), d = b0[i === 0 ? r : o];
    return p.jsx(ri, b({
      style: b({}, d.style, l)
    }, s, {
      ref: n,
      children: p.jsx(d.component, {})
    }));
  }), w0 = ze(function(t, n) {
    const r = Ee().current.getLocaleText("noRowsLabel");
    return p.jsx(ri, b({}, t, {
      ref: n,
      children: r
    }));
  }), x0 = le(Wh)(({ theme: e }) => ({
    maxHeight: "calc(100% + 1px)",
    flexGrow: 1,
    [`& .${Qn.selectLabel}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    [`& .${Qn.input}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "inline-flex"
      }
    }
  })), v0 = (e, t) => ({ from: n, to: o, count: r, page: l }) => e({
    from: n,
    to: o,
    count: r,
    page: l,
    estimated: t
  }), y0 = ({ from: e, to: t, count: n, estimated: o }) => o ? `${e}\u2013${t} of ${n !== -1 ? n : `more than ${o > t ? o : t}`}` : `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`, S0 = ze(function(t, n) {
    const o = Ee(), r = ie(), l = X(o, kt), s = X(o, bo), a = X(o, Su), { paginationMode: i, loading: d, estimatedRowCount: u } = r, f = c.useMemo(() => s === -1 && i === "server" && d ? {
      backIconButtonProps: {
        disabled: true
      },
      nextIconButtonProps: {
        disabled: true
      }
    } : {}, [
      d,
      i,
      s
    ]), h = c.useMemo(() => Math.max(0, a - 1), [
      a
    ]), g = c.useMemo(() => s === -1 || l.page <= h ? l.page : h, [
      h,
      l.page,
      s
    ]), m = c.useCallback((H) => {
      const v = Number(H.target.value);
      o.current.setPageSize(v);
    }, [
      o
    ]), x = c.useCallback((H, v) => {
      o.current.setPage(v);
    }, [
      o
    ]), S = ((H) => {
      for (let v = 0; v < r.pageSizeOptions.length; v += 1) {
        const R = r.pageSizeOptions[v];
        if (typeof R == "number") {
          if (R === H) return true;
        } else if (R.value === H) return true;
      }
      return false;
    })(l.pageSize) ? r.pageSizeOptions : [], w = o.current.getLocaleText("MuiTablePagination"), F = v0(w.labelDisplayedRows || y0, u);
    return p.jsx(x0, b({
      component: "div",
      count: s,
      page: g,
      rowsPerPageOptions: S,
      rowsPerPage: l.pageSize,
      onPageChange: x,
      onRowsPerPageChange: m
    }, f, w, {
      labelDisplayedRows: F
    }, t, {
      ref: n
    }));
  }), I0 = [
    "className",
    "rowCount",
    "visibleRowCount"
  ], P0 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "rowCount"
      ]
    }, De, t);
  }, M0 = et("div", {
    name: "MuiDataGrid",
    slot: "RowCount",
    overridesResolver: (e, t) => t.rowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2)
  })), k0 = ze(function(t, n) {
    const { className: o, rowCount: r, visibleRowCount: l } = t, s = fe(t, I0), a = Ee(), i = ie(), d = P0(i);
    if (r === 0) return null;
    const u = l < r ? a.current.getLocaleText("footerTotalVisibleRows")(l, r) : r.toLocaleString();
    return p.jsxs(M0, b({
      className: ue(d.root, o),
      ownerState: i
    }, s, {
      ref: n,
      children: [
        a.current.getLocaleText("footerTotalRows"),
        " ",
        u
      ]
    }));
  });
  function E0(e) {
    for (const t in e) return false;
    return true;
  }
  function F0(e, t) {
    return ge(t, De, e);
  }
  const T0 = [
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
  ], O0 = yr(bt, (e, t) => t ? !!E0(e) : false), D0 = ze(function(t, n) {
    var _a2;
    const { selected: o, rowId: r, row: l, index: s, style: a, rowHeight: i, className: d, visibleColumns: u, pinnedColumns: f, offsetLeft: h, columnsTotalWidth: g, firstColumnIndex: m, lastColumnIndex: x, focusedColumnIndex: I, isFirstVisible: S, isLastVisible: w, isNotVisible: F, showBottomBorder: H, scrollbarWidth: v, gridHasFiller: R, onClick: A, onDoubleClick: $, onMouseEnter: y, onMouseLeave: C, onMouseOut: M, onMouseOver: T } = t, O = fe(t, T0), G = cn(), E = ni(), P = c.useRef(null), D = ie(), L = ei(G), z = X(G, dn), _ = X(G, oo), j = X(G, Un), V = D.rowReordering, K = dr(G, O0, V), W = zt(P, n), U = G.current.getRowNode(r), B = dr(G, Bu, {
      rowId: r,
      editMode: D.editMode
    }), te = D.editMode === Sn.Row, J = I !== void 0, ne = J && I >= f.left.length && I < m, ce = J && I < u.length - f.right.length && I >= x, Ce = F0(D.classes, {
      root: [
        "row",
        o && "selected",
        te && "row--editable",
        B && "row--editing",
        S && "row--firstVisible",
        w && "row--lastVisible",
        H && "row--borderBottom",
        i === "auto" && "row--dynamicHeight"
      ]
    }), Y = E.hooks.useGridRowAriaAttributes();
    c.useLayoutEffect(() => {
      if (L.range) {
        const me = G.current.getRowIndexRelativeToVisibleRows(r);
        me !== void 0 && G.current.unstable_setLastMeasuredRowIndex(me);
      }
      if (P.current && i === "auto") return G.current.observeRowHeight(P.current, r);
    }, [
      G,
      L.range,
      i,
      r
    ]);
    const oe = c.useCallback((me, ve) => (pe) => {
      Tr(pe) || G.current.getRow(r) && (G.current.publishEvent(me, G.current.getRowParams(r), pe), ve && ve(pe));
    }, [
      G,
      r
    ]), he = c.useCallback((me) => {
      var _a3, _b2;
      const pe = (_a3 = ul(me.target, k.cell)) == null ? void 0 : _a3.getAttribute("data-field");
      pe && (pe === zo.field || pe === xl || pe === "__reorder__" || G.current.getCellMode(r, pe) === Qe.Edit || ((_b2 = G.current.getColumn(pe)) == null ? void 0 : _b2.type) === Cl) || oe("rowClick", A)(me);
    }, [
      G,
      A,
      oe,
      r
    ]), { slots: Z, slotProps: Ie, disableColumnReorder: ee } = D, ye = X(G, () => b({}, G.current.getRowHeightEntry(r)), zs), xe = c.useMemo(() => {
      if (F) return {
        opacity: 0,
        width: 0,
        height: 0
      };
      const me = b({}, a, {
        maxHeight: i === "auto" ? "none" : i,
        minHeight: i,
        "--height": typeof i == "number" ? `${i}px` : i
      });
      if (ye.spacingTop) {
        const ve = D.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
        me[ve] = ye.spacingTop;
      }
      if (ye.spacingBottom) {
        const ve = D.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom";
        let pe = me[ve];
        typeof pe != "number" && (pe = parseInt(pe || "0", 10)), pe += ye.spacingBottom, me[ve] = pe;
      }
      return me;
    }, [
      F,
      i,
      a,
      ye,
      D.rowSpacingType
    ]), Fe = G.current.unstable_applyPipeProcessors("rowClassName", [], r), Ne = Y(U, s);
    if (typeof D.getRowClassName == "function") {
      const me = s - (((_a2 = L.range) == null ? void 0 : _a2.firstRowIndex) || 0), ve = b({}, G.current.getRowParams(r), {
        isFirstVisible: me === 0,
        isLastVisible: me === L.rows.length - 1,
        indexRelativeToCurrentPage: me
      });
      Fe.push(D.getRowClassName(ve));
    }
    const Ue = (me, ve, pe, be, je = Oe.NONE) => {
      const $e = G.current.unstable_getCellColSpanInfo(r, pe);
      if ($e == null ? void 0 : $e.spannedByColSpan) return null;
      const lt = ($e == null ? void 0 : $e.cellProps.width) ?? me.computedWidth, xt = ($e == null ? void 0 : $e.cellProps.colSpan) ?? 1, ft = lr(je, me.computedWidth, pe, j, g, v);
      if (U.type === "skeletonRow") return p.jsx(Z.skeletonCell, {
        type: me.type,
        width: lt,
        height: i,
        field: me.field,
        align: me.align
      }, me.field);
      const Pn = me.field === "__reorder__", Dt = !(ee || me.disableReorder), Mn = K && !z.length && _ <= 1, It = !(Dt || Pn && Mn), _t = je === Oe.VIRTUAL, Et = fl(je, ve), Rt = pl(je, ve, be, D.showCellVerticalBorder, R);
      return p.jsx(Z.cell, b({
        column: me,
        width: lt,
        rowId: r,
        align: me.align || "left",
        colIndex: pe,
        colSpan: xt,
        disableDragEvents: It,
        isNotVisible: _t,
        pinnedOffset: ft,
        pinnedPosition: je,
        showLeftBorder: Et,
        showRightBorder: Rt,
        row: l,
        rowNode: U
      }, Ie == null ? void 0 : Ie.cell), me.field);
    }, Ge = f.left.map((me, ve) => Ue(me, ve, ve, f.left.length, Oe.LEFT)), He = f.right.map((me, ve) => {
      const pe = u.length - f.right.length + ve;
      return Ue(me, ve, pe, f.right.length, Oe.RIGHT);
    }), Le = u.length - f.left.length - f.right.length, Ke = [];
    ne && Ke.push(Ue(u[I], I - f.left.length, I, Le, Oe.VIRTUAL));
    for (let me = m; me < x; me += 1) {
      const ve = u[me], pe = me - f.left.length;
      ve && Ke.push(Ue(ve, pe, me, Le));
    }
    ce && Ke.push(Ue(u[I], I - f.left.length, I, Le, Oe.VIRTUAL));
    const _e = l ? {
      onClick: he,
      onDoubleClick: oe("rowDoubleClick", $),
      onMouseEnter: oe("rowMouseEnter", y),
      onMouseLeave: oe("rowMouseLeave", C),
      onMouseOut: oe("rowMouseOut", M),
      onMouseOver: oe("rowMouseOver", T)
    } : null;
    return p.jsxs("div", b({
      "data-id": r,
      "data-rowindex": s,
      role: "row",
      className: ue(...Fe, Ce.root, d),
      style: xe
    }, Ne, _e, O, {
      ref: W,
      children: [
        Ge,
        p.jsx("div", {
          role: "presentation",
          className: k.cellOffsetLeft,
          style: {
            width: h
          }
        }),
        Ke,
        p.jsx("div", {
          role: "presentation",
          className: ue(k.cell, k.cellEmpty)
        }),
        He,
        v !== 0 && p.jsx(si, {
          pinnedRight: f.right.length > 0,
          borderTop: !S
        })
      ]
    }));
  }), R0 = On(D0), $0 = () => {
    const e = cn(), t = ie(), n = X(e, it), o = X(e, Ks), r = X(e, Er), l = X(e, Vc);
    return {
      role: "grid",
      "aria-colcount": n.length,
      "aria-rowcount": r + 1 + l + o,
      "aria-multiselectable": Ys(t)
    };
  }, H0 = () => {
    const e = cn(), t = X(e, Vn), n = X(e, Er);
    return c.useCallback((o, r) => {
      const l = {}, s = r + n + 2;
      return l["aria-rowindex"] = s, e.current.isRowSelectable(o.id) && (l["aria-selected"] = t[o.id] !== void 0), l;
    }, [
      e,
      t,
      n
    ]);
  };
  function L0({ privateApiRef: e, configuration: t, props: n, children: o }) {
    const r = c.useRef(e.current.getPublicApi());
    return p.jsx(Vu.Provider, {
      value: t,
      children: p.jsx(Ec.Provider, {
        value: n,
        children: p.jsx(Lu.Provider, {
          value: e,
          children: p.jsx(kc.Provider, {
            value: r,
            children: o
          })
        })
      })
    });
  }
  const j0 = (e) => {
    const t = c.useRef(null), n = c.useRef(null), o = c.useRef(null), r = c.useRef(null), l = c.useRef(null), s = c.useRef(null);
    e.current.register("public", {
      rootElementRef: t
    }), e.current.register("private", {
      mainElementRef: n,
      virtualScrollerRef: o,
      virtualScrollbarVerticalRef: r,
      virtualScrollbarHorizontalRef: l,
      columnHeadersContainerRef: s
    });
  }, A0 = (e) => {
    const t = Gt();
    e.current.state.isRtl === void 0 && (e.current.state.isRtl = t);
    const n = c.useRef(true);
    c.useEffect(() => {
      n.current ? n.current = false : e.current.setState((o) => b({}, o, {
        isRtl: t
      }));
    }, [
      e,
      t
    ]);
  }, z0 = Gb() && window.localStorage.getItem("DEBUG") != null, er = () => {
  }, G0 = {
    debug: er,
    info: er,
    warn: er,
    error: er
  }, Aa = [
    "debug",
    "info",
    "warn",
    "error"
  ];
  function za(e, t, n = console) {
    const o = Aa.indexOf(t);
    if (o === -1) throw new Error(`MUI X: Log level ${t} not recognized.`);
    return Aa.reduce((l, s, a) => (a >= o ? l[s] = (...i) => {
      const [d, ...u] = i;
      n[s](`MUI X: ${e} - ${d}`, ...u);
    } : l[s] = er, l), {});
  }
  const _0 = (e, t) => {
    const n = c.useCallback((o) => z0 ? za(o, "debug", t.logger) : t.logLevel ? za(o, t.logLevel.toString(), t.logger) : G0, [
      t.logLevel,
      t.logger
    ]);
    ke(e, {
      getLogger: n
    }, "private");
  };
  class V0 {
    constructor() {
      this.maxListeners = 20, this.warnOnce = false, this.events = {};
    }
    on(t, n, o = {}) {
      let r = this.events[t];
      r || (r = {
        highPriority: /* @__PURE__ */ new Map(),
        regular: /* @__PURE__ */ new Map()
      }, this.events[t] = r), o.isFirst ? r.highPriority.set(n, true) : r.regular.set(n, true);
    }
    removeListener(t, n) {
      this.events[t] && (this.events[t].regular.delete(n), this.events[t].highPriority.delete(n));
    }
    removeAllListeners() {
      this.events = {};
    }
    emit(t, ...n) {
      const o = this.events[t];
      if (!o) return;
      const r = Array.from(o.highPriority.keys()), l = Array.from(o.regular.keys());
      for (let s = r.length - 1; s >= 0; s -= 1) {
        const a = r[s];
        o.highPriority.has(a) && a.apply(this, n);
      }
      for (let s = 0; s < l.length; s += 1) {
        const a = l[s];
        o.regular.has(a) && a.apply(this, n);
      }
    }
    once(t, n) {
      const o = this;
      this.on(t, function r(...l) {
        o.removeListener(t, r), n.apply(o, l);
      });
    }
  }
  class ii {
    static create(t) {
      return new ii(t);
    }
    constructor(t) {
      this.value = void 0, this.listeners = void 0, this.subscribe = (n) => (this.listeners.add(n), () => {
        this.listeners.delete(n);
      }), this.getSnapshot = () => this.value, this.update = (n) => {
        this.value = n, this.listeners.forEach((o) => o(n));
      }, this.value = t, this.listeners = /* @__PURE__ */ new Set();
    }
  }
  const od = /* @__PURE__ */ Symbol("mui.api_private"), N0 = (e) => e.isPropagationStopped !== void 0;
  let Ga = 0;
  function B0(e) {
    var _a2;
    const t = (_a2 = e.current) == null ? void 0 : _a2[od];
    if (t) return t;
    const n = {}, o = {
      state: n,
      store: ii.create(n),
      instanceId: {
        id: Ga
      }
    };
    return Ga += 1, o.getPublicApi = () => e.current, o.register = (r, l) => {
      Object.keys(l).forEach((s) => {
        const a = l[s], i = o[s];
        if ((i == null ? void 0 : i.spying) === true ? i.target = a : o[s] = a, r === "public") {
          const d = e.current, u = d[s];
          (u == null ? void 0 : u.spying) === true ? u.target = a : d[s] = a;
        }
      });
    }, o.register("private", {
      caches: {},
      eventManager: new V0()
    }), o;
  }
  function W0(e) {
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
      [od]: e.current
    };
  }
  function U0(e, t) {
    var _a2;
    const n = c.useRef(null), o = c.useRef(null);
    o.current || (o.current = B0(n)), n.current || (n.current = W0(o));
    const r = c.useCallback((...s) => {
      const [a, i, d = {}] = s;
      if (d.defaultMuiPrevented = false, N0(d) && d.isPropagationStopped()) return;
      const u = t.signature === on.DataGridPro || t.signature === on.DataGridPremium ? {
        api: o.current.getPublicApi()
      } : {};
      o.current.eventManager.emit(a, i, d, u);
    }, [
      o,
      t.signature
    ]), l = c.useCallback((s, a, i) => {
      o.current.eventManager.on(s, a, i);
      const d = o.current;
      return () => {
        d.eventManager.removeListener(s, a);
      };
    }, [
      o
    ]);
    return ke(o, {
      subscribeEvent: l,
      publishEvent: r
    }, "public"), e && !((_a2 = e.current) == null ? void 0 : _a2.state) && (e.current = n.current), c.useImperativeHandle(e, () => n.current, [
      n
    ]), c.useEffect(() => {
      const s = o.current;
      return () => {
        s.publishEvent("unmount");
      };
    }, [
      o
    ]), o;
  }
  const K0 = (e, t) => {
    const n = c.useCallback((o) => {
      if (t.localeText[o] == null) throw new Error(`Missing translation for key ${o}.`);
      return t.localeText[o];
    }, [
      t.localeText
    ]);
    e.current.register("public", {
      getLocaleText: n
    });
  };
  function hr(e) {
    "@babel/helpers - typeof";
    return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, hr(e);
  }
  function q0(e, t) {
    if (hr(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var o = n.call(e, t);
      if (hr(o) != "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function mr(e) {
    var t = q0(e, "string");
    return hr(t) == "symbol" ? t : t + "";
  }
  const Y0 = (e) => {
    const t = c.useRef({}), n = c.useRef(false), o = c.useCallback((u) => {
      n.current || !u || (n.current = true, Object.values(u.appliers).forEach((f) => {
        f();
      }), n.current = false);
    }, []), r = c.useCallback((u, f, h) => {
      t.current[u] || (t.current[u] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      });
      const g = t.current[u];
      return g.processors.get(f) !== h && (g.processors.set(f, h), g.processorsAsArray = Array.from(t.current[u].processors.values()).filter((x) => x !== null), o(g)), () => {
        t.current[u].processors.set(f, null), t.current[u].processorsAsArray = Array.from(t.current[u].processors.values()).filter((x) => x !== null);
      };
    }, [
      o
    ]), l = c.useCallback((u, f, h) => (t.current[u] || (t.current[u] = {
      processors: /* @__PURE__ */ new Map(),
      processorsAsArray: [],
      appliers: {}
    }), t.current[u].appliers[f] = h, () => {
      const g = t.current[u].appliers, m = fe(g, [
        f
      ].map(mr));
      t.current[u].appliers = m;
    }), []), s = c.useCallback((u) => {
      o(t.current[u]);
    }, [
      o
    ]), a = c.useCallback((...u) => {
      const [f, h, g] = u;
      if (!t.current[f]) return h;
      const m = t.current[f].processorsAsArray;
      let x = h;
      for (let I = 0; I < m.length; I += 1) x = m[I](x, g);
      return x;
    }, []), i = {
      registerPipeProcessor: r,
      registerPipeApplier: l,
      requestPipeProcessorsApplication: s
    }, d = {
      unstable_applyPipeProcessors: a
    };
    ke(e, i, "private"), ke(e, d, "public");
  }, rt = (e, t, n, o = true) => {
    const r = c.useRef(null), l = c.useRef(`mui-${Math.round(Math.random() * 1e9)}`), s = c.useCallback(() => {
      r.current = e.current.registerPipeProcessor(t, l.current, n);
    }, [
      e,
      n,
      t
    ]);
    Ir(() => {
      o && s();
    });
    const a = c.useRef(true);
    c.useEffect(() => (a.current ? a.current = false : o && s(), () => {
      r.current && (r.current(), r.current = null);
    }), [
      s,
      o
    ]);
  }, ai = (e, t, n) => {
    const o = c.useRef(null), r = c.useRef(`mui-${Math.round(Math.random() * 1e9)}`), l = c.useCallback(() => {
      o.current = e.current.registerPipeApplier(t, r.current, n);
    }, [
      e,
      n,
      t
    ]);
    Ir(() => {
      l();
    });
    const s = c.useRef(true);
    c.useEffect(() => (s.current ? s.current = false : l(), () => {
      o.current && (o.current(), o.current = null);
    }), [
      l
    ]);
  }, gl = (e, t, n, o) => {
    const r = c.useCallback(() => {
      e.current.registerStrategyProcessor(t, n, o);
    }, [
      e,
      o,
      n,
      t
    ]);
    Ir(() => {
      r();
    });
    const l = c.useRef(true);
    c.useEffect(() => {
      l.current ? l.current = false : r();
    }, [
      r
    ]);
  }, to = "none", _a = {
    rowTreeCreation: "rowTree",
    filtering: "rowTree",
    sorting: "rowTree",
    visibleRowsLookupCreation: "rowTree"
  }, X0 = (e) => {
    const t = c.useRef(/* @__PURE__ */ new Map()), n = c.useRef({}), o = c.useCallback((i, d, u) => {
      const f = () => {
        const m = n.current[d], x = fe(m, [
          i
        ].map(mr));
        n.current[d] = x;
      };
      n.current[d] || (n.current[d] = {});
      const h = n.current[d], g = h[i];
      return h[i] = u, !g || g === u || i === e.current.getActiveStrategy(_a[d]) && e.current.publishEvent("activeStrategyProcessorChange", d), f;
    }, [
      e
    ]), r = c.useCallback((i, d) => {
      const u = e.current.getActiveStrategy(_a[i]);
      if (u == null) throw new Error("Can't apply a strategy processor before defining an active strategy");
      const f = n.current[i];
      if (!f || !f[u]) throw new Error(`No processor found for processor "${i}" on strategy "${u}"`);
      const h = f[u];
      return h(d);
    }, [
      e
    ]), l = c.useCallback((i) => {
      var _a2;
      return ((_a2 = Array.from(t.current.entries()).find(([, f]) => f.group !== i ? false : f.isAvailable())) == null ? void 0 : _a2[0]) ?? to;
    }, []), s = c.useCallback((i, d, u) => {
      t.current.set(d, {
        group: i,
        isAvailable: u
      }), e.current.publishEvent("strategyAvailabilityChange");
    }, [
      e
    ]);
    ke(e, {
      registerStrategyProcessor: o,
      applyStrategyProcessor: r,
      getActiveStrategy: l,
      setStrategyAvailability: s
    }, "private");
  }, Q0 = (e) => {
    const t = c.useRef({}), n = c.useCallback((i) => {
      t.current[i.stateId] = i;
    }, []), o = c.useCallback((i, d) => {
      let u;
      if (zb(i) ? u = i(e.current.state) : u = i, e.current.state === u) return false;
      let f = false;
      const h = [];
      if (Object.keys(t.current).forEach((g) => {
        const m = t.current[g], x = m.stateSelector(e.current.state, e.current.instanceId), I = m.stateSelector(u, e.current.instanceId);
        I !== x && (h.push({
          stateId: m.stateId,
          hasPropChanged: I !== m.propModel
        }), m.propModel !== void 0 && I !== m.propModel && (f = true));
      }), h.length > 1) throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${h[0].stateId}, therefore, you're not allowed to update ${h.map((g) => g.stateId).join(", ")} in the same transaction.`);
      if (f || (e.current.state = u, e.current.publishEvent("stateChange", u), e.current.store.update(u)), h.length === 1) {
        const { stateId: g, hasPropChanged: m } = h[0], x = t.current[g], I = x.stateSelector(u, e.current.instanceId);
        x.propOnChange && m && x.propOnChange(I, {
          reason: d,
          api: e.current
        }), f || e.current.publishEvent(x.changeEvent, I, {
          reason: d
        });
      }
      return !f;
    }, [
      e
    ]), r = c.useCallback((i, d, u) => e.current.setState((f) => b({}, f, {
      [i]: d(f[i])
    }), u), [
      e
    ]), l = c.useCallback(() => {
    }, []), s = {
      setState: o,
      forceUpdate: l
    }, a = {
      updateControlState: r,
      registerControlState: n
    };
    ke(e, s, "public"), ke(e, a, "private");
  }, J0 = (e, t) => b({}, e, {
    props: {
      getRowId: t.getRowId
    }
  }), Z0 = (e, t) => {
    c.useEffect(() => {
      e.current.setState((n) => b({}, n, {
        props: {
          getRowId: t.getRowId
        }
      }));
    }, [
      e,
      t.getRowId
    ]);
  }, eI = (e, t) => {
    const n = U0(e, t);
    return j0(n), Z0(n, t), A0(n), _0(n, t), Q0(n), Y0(n), X0(n), K0(n, t), n.current.register("private", {
      rootProps: t
    }), n;
  }, mt = (e, t, n) => {
    const o = c.useRef(false);
    o.current || (t.current.state = e(t.current.state, n, t), o.current = true);
  };
  function bs(e, t) {
    if (e == null) return "";
    const n = typeof e == "string" ? e : `${e}`;
    if (t.shouldAppendQuotes || t.escapeFormulas) {
      const o = n.replace(/"/g, '""');
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
      ].some((r) => n.includes(r)) ? `"${o}"` : o;
    }
    return n;
  }
  const rd = (e, t) => {
    var _a2, _b2;
    const { csvOptions: n, ignoreValueFormatter: o } = t;
    let r;
    if (o) {
      const l = e.colDef.type;
      l === "number" ? r = String(e.value) : l === "date" || l === "dateTime" ? r = (_a2 = e.value) == null ? void 0 : _a2.toISOString() : typeof ((_b2 = e.value) == null ? void 0 : _b2.toString) == "function" ? r = e.value.toString() : r = e.value;
    } else r = e.formattedValue;
    return bs(r, n);
  };
  class Cs {
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
  const tI = ({ id: e, columns: t, getCellParams: n, csvOptions: o, ignoreValueFormatter: r }) => {
    const l = new Cs({
      csvOptions: o
    });
    return t.forEach((s) => {
      const a = n(e, s.field);
      l.addValue(rd(a, {
        ignoreValueFormatter: r,
        csvOptions: o
      }));
    }), l.getRowString();
  };
  function nI(e) {
    const { columns: t, rowIds: n, csvOptions: o, ignoreValueFormatter: r, apiRef: l } = e, s = n.reduce((f, h) => `${f}${tI({
      id: h,
      columns: t,
      getCellParams: l.current.getCellParams,
      ignoreValueFormatter: r,
      csvOptions: o
    })}\r
`, "").trim();
    if (!o.includeHeaders) return s;
    const a = t.filter((f) => f.field !== zo.field), i = [];
    if (o.includeColumnGroupsHeaders) {
      const f = l.current.getAllGroupDetails();
      let h = 0;
      const g = a.reduce((m, x) => {
        const I = l.current.getColumnGroupPath(x.field);
        return m[x.field] = I, h = Math.max(h, I.length), m;
      }, {});
      for (let m = 0; m < h; m += 1) {
        const x = new Cs({
          csvOptions: o,
          sanitizeCellValue: bs
        });
        i.push(x), a.forEach((I) => {
          const S = (g[I.field] || [])[m], w = f[S];
          x.addValue(w ? w.headerName || w.groupId : "");
        });
      }
    }
    const d = new Cs({
      csvOptions: o,
      sanitizeCellValue: bs
    });
    return a.forEach((f) => {
      d.addValue(f.headerName || f.field);
    }), i.push(d), `${`${i.map((f) => f.getRowString()).join(`\r
`)}\r
`}${s}`.trim();
  }
  function Va(e) {
    const t = document.createElement("span");
    t.style.whiteSpace = "pre", t.style.userSelect = "all", t.style.opacity = "0px", t.textContent = e, document.body.appendChild(t);
    const n = document.createRange();
    n.selectNode(t);
    const o = window.getSelection();
    o.removeAllRanges(), o.addRange(n);
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(t);
    }
  }
  function oI(e) {
    navigator.clipboard ? navigator.clipboard.writeText(e).catch(() => {
      Va(e);
    }) : Va(e);
  }
  function rI(e) {
    var _a2;
    return !!(((_a2 = window.getSelection()) == null ? void 0 : _a2.toString()) || e && (e.selectionEnd || 0) - (e.selectionStart || 0) > 0);
  }
  const lI = (e, t) => {
    const n = t.ignoreValueFormatterDuringExport, o = (typeof n == "object" ? n == null ? void 0 : n.clipboardExport : n) || false, r = t.clipboardCopyCellDelimiter, l = c.useCallback((s) => {
      if (!Yy(s) || rI(s.target)) return;
      let a = "";
      if (e.current.getSelectedRows().size > 0) a = e.current.getDataAsCsv({
        includeHeaders: false,
        delimiter: r,
        shouldAppendQuotes: false,
        escapeFormulas: false
      });
      else {
        const d = $t(e);
        if (d) {
          const u = e.current.getCellParams(d.id, d.field);
          a = rd(u, {
            csvOptions: {
              delimiter: r,
              shouldAppendQuotes: false,
              escapeFormulas: false
            },
            ignoreValueFormatter: o
          });
        }
      }
      a = e.current.unstable_applyPipeProcessors("clipboardCopy", a), a && (oI(a), e.current.publishEvent("clipboardCopy", a));
    }, [
      e,
      o,
      r
    ]);
    bu(e, () => e.current.rootElementRef.current, "keydown", l), Je(e, "clipboardCopy", t.onClipboardCopy);
  }, sI = (e) => b({}, e, {
    columnMenu: {
      open: false
    }
  }), iI = (e) => {
    const t = wt(e, "useGridColumnMenu"), n = c.useCallback((s) => {
      const a = Xr(e.current.state), i = {
        open: true,
        field: s
      };
      (i.open !== a.open || i.field !== a.field) && (e.current.setState((u) => u.columnMenu.open && u.columnMenu.field === s ? u : (t.debug("Opening Column Menu"), b({}, u, {
        columnMenu: {
          open: true,
          field: s
        }
      }))), e.current.hidePreferences());
    }, [
      e,
      t
    ]), o = c.useCallback(() => {
      const s = Xr(e.current.state);
      if (s.field) {
        const d = Dn(e), u = en(e), f = Fn(e);
        let h = s.field;
        if (d[h] || (h = f[0]), u[h] === false) {
          const g = f.filter((x) => x === h ? true : u[x] !== false), m = g.indexOf(h);
          h = g[m + 1] || g[m - 1];
        }
        e.current.setColumnHeaderFocus(h);
      }
      const a = {
        open: false,
        field: void 0
      };
      (a.open !== s.open || a.field !== s.field) && e.current.setState((d) => (t.debug("Hiding Column Menu"), b({}, d, {
        columnMenu: a
      })));
    }, [
      e,
      t
    ]), r = c.useCallback((s) => {
      t.debug("Toggle Column Menu");
      const a = Xr(e.current.state);
      !a.open || a.field !== s ? n(s) : o();
    }, [
      e,
      t,
      n,
      o
    ]);
    ke(e, {
      showColumnMenu: n,
      hideColumnMenu: o,
      toggleColumnMenu: r
    }, "public"), re(e, "columnResizeStart", o), re(e, "virtualScrollerWheel", e.current.hideColumnMenu), re(e, "virtualScrollerTouchMove", e.current.hideColumnMenu);
  }, aI = (e, t, n) => {
    var _a2, _b2, _c2;
    const o = fo({
      apiRef: n,
      columnsToUpsert: t.columns,
      initialState: (_a2 = t.initialState) == null ? void 0 : _a2.columns,
      columnVisibilityModel: t.columnVisibilityModel ?? ((_c2 = (_b2 = t.initialState) == null ? void 0 : _b2.columns) == null ? void 0 : _c2.columnVisibilityModel) ?? {},
      keepOnlyColumnsToUpsert: true
    });
    return b({}, e, {
      columns: o,
      pinnedColumns: e.pinnedColumns ?? ll
    });
  };
  function cI(e, t) {
    var _a2, _b2;
    const n = wt(e, "useGridColumns"), o = c.useRef(t.columns);
    e.current.registerControlState({
      stateId: "visibleColumns",
      propModel: t.columnVisibilityModel,
      propOnChange: t.onColumnVisibilityModelChange,
      stateSelector: en,
      changeEvent: "columnVisibilityModelChange"
    });
    const r = c.useCallback((C) => {
      n.debug("Updating columns state."), e.current.setState(Na(C)), e.current.publishEvent("columnsChange", C.orderedFields);
    }, [
      n,
      e
    ]), l = c.useCallback((C) => Dn(e)[C], [
      e
    ]), s = c.useCallback(() => rn(e), [
      e
    ]), a = c.useCallback(() => it(e), [
      e
    ]), i = c.useCallback((C, M = true) => (M ? it(e) : rn(e)).findIndex((O) => O.field === C), [
      e
    ]), d = c.useCallback((C) => {
      const M = i(C);
      return Un(e)[M];
    }, [
      e,
      i
    ]), u = c.useCallback((C) => {
      var _a3, _b3;
      en(e) !== C && (e.current.setState((T) => b({}, T, {
        columns: fo({
          apiRef: e,
          columnsToUpsert: [],
          initialState: void 0,
          columnVisibilityModel: C,
          keepOnlyColumnsToUpsert: false
        })
      })), (_b3 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b3.call(_a3), e.current.forceUpdate());
    }, [
      e
    ]), f = c.useCallback((C) => {
      const M = fo({
        apiRef: e,
        columnsToUpsert: C,
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(M);
    }, [
      e,
      r
    ]), h = c.useCallback((C, M) => {
      const T = en(e), O = T[C] ?? true;
      if (M !== O) {
        const G = b({}, T, {
          [C]: M
        });
        e.current.setColumnVisibilityModel(G);
      }
    }, [
      e
    ]), g = c.useCallback((C) => Fn(e).findIndex((T) => T === C), [
      e
    ]), m = c.useCallback((C, M) => {
      const T = Fn(e), O = g(C);
      if (O === M) return;
      n.debug(`Moving column ${C} to index ${M}`);
      const G = [
        ...T
      ], E = G.splice(O, 1)[0];
      G.splice(M, 0, E), r(b({}, vn(e.current.state), {
        orderedFields: G
      }));
      const P = {
        column: e.current.getColumn(C),
        targetIndex: e.current.getColumnIndexRelativeToVisibleColumns(C),
        oldIndex: O
      };
      e.current.publishEvent("columnIndexChange", P);
    }, [
      e,
      n,
      r,
      g
    ]), x = c.useCallback((C, M) => {
      n.debug(`Updating column ${C} width to ${M}`);
      const T = vn(e.current.state), O = T.lookup[C], G = b({}, O, {
        width: M,
        hasBeenResized: true
      });
      r(gs(b({}, T, {
        lookup: b({}, T.lookup, {
          [C]: G
        })
      }), e.current.getRootDimensions())), e.current.publishEvent("columnWidthChange", {
        element: e.current.getColumnHeaderElement(C),
        colDef: G,
        width: M
      });
    }, [
      e,
      n,
      r
    ]), I = {
      getColumn: l,
      getAllColumns: s,
      getColumnIndex: i,
      getColumnPosition: d,
      getVisibleColumns: a,
      getColumnIndexRelativeToVisibleColumns: g,
      updateColumns: f,
      setColumnVisibilityModel: u,
      setColumnVisibility: h,
      setColumnWidth: x
    }, S = {
      setColumnIndex: m
    };
    ke(e, I, "public"), ke(e, S, t.signature === on.DataGrid ? "private" : "public");
    const w = c.useCallback((C, M) => {
      var _a3, _b3;
      const T = {}, O = en(e);
      (!M.exportOnlyDirtyModels || t.columnVisibilityModel != null || Object.keys(((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.columns) == null ? void 0 : _b3.columnVisibilityModel) ?? {}).length > 0 || Object.keys(O).length > 0) && (T.columnVisibilityModel = O), T.orderedFields = Fn(e);
      const E = rn(e), P = {};
      return E.forEach((D) => {
        if (D.hasBeenResized) {
          const L = {};
          Tu.forEach((z) => {
            let _ = D[z];
            _ === 1 / 0 && (_ = -1), L[z] = _;
          }), P[D.field] = L;
        }
      }), Object.keys(P).length > 0 && (T.dimensions = P), b({}, C, {
        columns: T
      });
    }, [
      e,
      t.columnVisibilityModel,
      (_a2 = t.initialState) == null ? void 0 : _a2.columns
    ]), F = c.useCallback((C, M) => {
      var _a3;
      const T = (_a3 = M.stateToRestore.columns) == null ? void 0 : _a3.columnVisibilityModel, O = M.stateToRestore.columns;
      if (T == null && O == null) return C;
      const G = fo({
        apiRef: e,
        columnsToUpsert: [],
        initialState: O,
        columnVisibilityModel: T,
        keepOnlyColumnsToUpsert: false
      });
      return e.current.setState(Na(G)), O != null && e.current.publishEvent("columnsChange", G.orderedFields), C;
    }, [
      e
    ]), H = c.useCallback((C, M) => {
      var _a3;
      if (M === eo.columns) {
        const T = t.slots.columnsPanel;
        return p.jsx(T, b({}, (_a3 = t.slotProps) == null ? void 0 : _a3.columnsPanel));
      }
      return C;
    }, [
      t.slots.columnsPanel,
      (_b2 = t.slotProps) == null ? void 0 : _b2.columnsPanel
    ]), v = c.useCallback((C) => t.disableColumnSelector ? C : [
      ...C,
      "columnMenuColumnsItem"
    ], [
      t.disableColumnSelector
    ]);
    rt(e, "columnMenu", v), rt(e, "exportState", w), rt(e, "restoreState", F), rt(e, "preferencePanel", H);
    const R = c.useRef(null);
    re(e, "viewportInnerSizeChange", (C) => {
      if (R.current !== C.width) {
        if (R.current = C.width, !it(e).some((T) => T.flex && T.flex > 0)) return;
        r(gs(vn(e.current.state), e.current.getRootDimensions()));
      }
    });
    const $ = c.useCallback(() => {
      n.info("Columns pipe processing have changed, regenerating the columns");
      const C = fo({
        apiRef: e,
        columnsToUpsert: [],
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(C);
    }, [
      e,
      n,
      r
    ]);
    ai(e, "hydrateColumns", $);
    const y = c.useRef(true);
    c.useEffect(() => {
      if (y.current) {
        y.current = false;
        return;
      }
      if (n.info(`GridColumns have changed, new length ${t.columns.length}`), o.current === t.columns) return;
      const C = fo({
        apiRef: e,
        initialState: void 0,
        columnsToUpsert: t.columns,
        keepOnlyColumnsToUpsert: true
      });
      o.current = t.columns, r(C);
    }, [
      n,
      e,
      r,
      t.columns
    ]), c.useEffect(() => {
      t.columnVisibilityModel !== void 0 && e.current.setColumnVisibilityModel(t.columnVisibilityModel);
    }, [
      e,
      n,
      t.columnVisibilityModel
    ]);
  }
  function Na(e) {
    return (t) => b({}, t, {
      columns: e
    });
  }
  const uI = (e, t) => {
    var _a2;
    return b({}, e, {
      density: ((_a2 = t.initialState) == null ? void 0 : _a2.density) ?? t.density ?? "standard"
    });
  }, dI = (e, t) => {
    var _a2;
    const n = wt(e, "useDensity");
    e.current.registerControlState({
      stateId: "density",
      propModel: t.density,
      propOnChange: t.onDensityChange,
      stateSelector: mo,
      changeEvent: "densityChange"
    });
    const r = {
      setDensity: Be((a) => {
        mo(e.current.state) !== a && (n.debug(`Set grid density to ${a}`), e.current.setState((d) => b({}, d, {
          density: a
        })));
      })
    };
    ke(e, r, "public");
    const l = c.useCallback((a, i) => {
      var _a3;
      const d = mo(e.current.state);
      return !i.exportOnlyDirtyModels || t.density != null || ((_a3 = t.initialState) == null ? void 0 : _a3.density) != null ? b({}, a, {
        density: d
      }) : a;
    }, [
      e,
      t.density,
      (_a2 = t.initialState) == null ? void 0 : _a2.density
    ]), s = c.useCallback((a, i) => {
      var _a3;
      const d = ((_a3 = i.stateToRestore) == null ? void 0 : _a3.density) ? i.stateToRestore.density : mo(e.current.state);
      return e.current.setState((u) => b({}, u, {
        density: d
      })), a;
    }, [
      e
    ]);
    rt(e, "exportState", l), rt(e, "restoreState", s), c.useEffect(() => {
      t.density && e.current.setDensity(t.density);
    }, [
      e,
      t.density
    ]);
  };
  function pI(e, t = "csv", n = document.title || "untitled") {
    const o = `${n}.${t}`;
    if ("download" in HTMLAnchorElement.prototype) {
      const r = URL.createObjectURL(e), l = document.createElement("a");
      l.href = r, l.download = o, l.click(), setTimeout(() => {
        URL.revokeObjectURL(r);
      });
      return;
    }
    throw new Error("MUI X: exportAs not supported.");
  }
  const ld = ({ apiRef: e, options: t }) => {
    const n = rn(e);
    return t.fields ? t.fields.reduce((r, l) => {
      const s = n.find((a) => a.field === l);
      return s && r.push(s), r;
    }, []) : (t.allColumns ? n : it(e)).filter((r) => !r.disableExport);
  }, sd = ({ apiRef: e }) => {
    var _a2, _b2;
    const t = pu(e), n = ht(e), o = e.current.getSelectedRows(), r = t.filter((i) => n[i].type !== "footer"), l = $o(e), s = ((_a2 = l == null ? void 0 : l.top) == null ? void 0 : _a2.map((i) => i.id)) || [], a = ((_b2 = l == null ? void 0 : l.bottom) == null ? void 0 : _b2.map((i) => i.id)) || [];
    return r.unshift(...s), r.push(...a), o.size > 0 ? r.filter((i) => o.has(i)) : r;
  }, fI = (e, t) => {
    const n = wt(e, "useGridCsvExport"), o = t.ignoreValueFormatterDuringExport, r = (typeof o == "object" ? o == null ? void 0 : o.csvExport : o) || false, l = c.useCallback((d = {}) => {
      n.debug("Get data as CSV");
      const u = ld({
        apiRef: e,
        options: d
      }), h = (d.getRowsToExport ?? sd)({
        apiRef: e
      });
      return nI({
        columns: u,
        rowIds: h,
        csvOptions: {
          delimiter: d.delimiter || ",",
          shouldAppendQuotes: d.shouldAppendQuotes ?? true,
          includeHeaders: d.includeHeaders ?? true,
          includeColumnGroupsHeaders: d.includeColumnGroupsHeaders ?? true,
          escapeFormulas: d.escapeFormulas ?? true
        },
        ignoreValueFormatter: r,
        apiRef: e
      });
    }, [
      n,
      e,
      r
    ]), s = c.useCallback((d) => {
      n.debug("Export data as CSV");
      const u = l(d), f = new Blob([
        (d == null ? void 0 : d.utf8WithBom) ? new Uint8Array([
          239,
          187,
          191
        ]) : "",
        u
      ], {
        type: "text/csv"
      });
      pI(f, "csv", d == null ? void 0 : d.fileName);
    }, [
      n,
      l
    ]);
    ke(e, {
      getDataAsCsv: l,
      exportDataAsCsv: s
    }, "public");
    const i = c.useCallback((d, u) => {
      var _a2;
      return ((_a2 = u.csvOptions) == null ? void 0 : _a2.disableToolbarButton) ? d : [
        ...d,
        {
          component: p.jsx(e0, {
            options: u.csvOptions
          }),
          componentName: "csvExport"
        }
      ];
    }, []);
    rt(e, "exportMenu", i);
  }, Qr = (e, t, n) => {
    let o = e.paginationModel;
    const r = e.rowCount, l = (n == null ? void 0 : n.pageSize) ?? o.pageSize, s = (n == null ? void 0 : n.page) ?? o.page, a = Cu(r, l, s);
    n && ((n == null ? void 0 : n.page) !== o.page || (n == null ? void 0 : n.pageSize) !== o.pageSize) && (o = n);
    const i = l === -1 ? 0 : KC(o.page, a);
    return i !== o.page && (o = b({}, o, {
      page: i
    })), xu(o.pageSize, t), o;
  }, gI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridPaginationModel"), o = X(e, Ro), r = c.useRef(yt(e)), l = Math.floor(t.rowHeight * o);
    e.current.registerControlState({
      stateId: "paginationModel",
      propModel: t.paginationModel,
      propOnChange: t.onPaginationModelChange,
      stateSelector: kt,
      changeEvent: "paginationModelChange"
    });
    const s = c.useCallback((w) => {
      const F = kt(e);
      w !== F.page && (n.debug(`Setting page to ${w}`), e.current.setPaginationModel({
        page: w,
        pageSize: F.pageSize
      }));
    }, [
      e,
      n
    ]), a = c.useCallback((w) => {
      const F = kt(e);
      w !== F.pageSize && (n.debug(`Setting page size to ${w}`), e.current.setPaginationModel({
        pageSize: w,
        page: F.page
      }));
    }, [
      e,
      n
    ]), i = c.useCallback((w) => {
      const F = kt(e);
      w !== F && (n.debug("Setting 'paginationModel' to", w), e.current.setState((H) => b({}, H, {
        pagination: b({}, H.pagination, {
          paginationModel: Qr(H.pagination, t.signature, w)
        })
      }), "setPaginationModel"));
    }, [
      e,
      n,
      t.signature
    ]);
    ke(e, {
      setPage: s,
      setPageSize: a,
      setPaginationModel: i
    }, "public");
    const u = c.useCallback((w, F) => {
      var _a3, _b3;
      const H = kt(e);
      return !F.exportOnlyDirtyModels || t.paginationModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.paginationModel) != null || H.page !== 0 && H.pageSize !== UC(t.autoPageSize) ? b({}, w, {
        pagination: b({}, w.pagination, {
          paginationModel: H
        })
      }) : w;
    }, [
      e,
      t.paginationModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel,
      t.autoPageSize
    ]), f = c.useCallback((w, F) => {
      var _a3, _b3;
      const H = ((_a3 = F.stateToRestore.pagination) == null ? void 0 : _a3.paginationModel) ? b({}, wu(t.autoPageSize), (_b3 = F.stateToRestore.pagination) == null ? void 0 : _b3.paginationModel) : kt(e);
      return e.current.setState((v) => b({}, v, {
        pagination: b({}, v.pagination, {
          paginationModel: Qr(v.pagination, t.signature, H)
        })
      }), "stateRestorePreProcessing"), w;
    }, [
      e,
      t.autoPageSize,
      t.signature
    ]);
    rt(e, "exportState", u), rt(e, "restoreState", f);
    const h = () => {
      var _a3;
      const w = kt(e);
      ((_a3 = e.current.virtualScrollerRef) == null ? void 0 : _a3.current) && e.current.scrollToIndexes({
        rowIndex: w.page * w.pageSize
      });
    }, g = c.useCallback(() => {
      if (!t.autoPageSize) return;
      const w = e.current.getRootDimensions(), F = Math.max(1, Math.floor(w.viewportInnerSize.height / l));
      e.current.setPageSize(F);
    }, [
      e,
      t.autoPageSize,
      l
    ]), m = c.useCallback((w) => {
      if (w == null) return;
      const F = kt(e);
      if (F.page === 0) return;
      const H = Su(e);
      F.page > H - 1 && e.current.setPage(Math.max(0, H - 1));
    }, [
      e
    ]), x = c.useCallback(() => {
      kt(e).page !== 0 && e.current.setPage(0), e.current.getScrollPosition().top !== 0 && e.current.scroll({
        top: 0
      });
    }, [
      e
    ]), I = c.useCallback((w) => {
      const F = b({}, w, {
        items: gu(e)
      });
      xn(F, r.current) || (r.current = F, x());
    }, [
      e,
      x
    ]);
    re(e, "viewportInnerSizeChange", g), re(e, "paginationModelChange", h), re(e, "rowCountChange", m), re(e, "sortModelChange", Yn(t.resetPageOnSortFilter, x)), re(e, "filterModelChange", Yn(t.resetPageOnSortFilter, I));
    const S = c.useRef(true);
    c.useEffect(() => {
      if (S.current) {
        S.current = false;
        return;
      }
      t.pagination && e.current.setState((w) => b({}, w, {
        pagination: b({}, w.pagination, {
          paginationModel: Qr(w.pagination, t.signature, t.paginationModel)
        })
      }));
    }, [
      e,
      t.paginationModel,
      t.signature,
      t.pagination
    ]), c.useEffect(() => {
      e.current.setState((w) => {
        const F = t.pagination === true;
        return w.pagination.paginationMode === t.paginationMode || w.pagination.enabled === F ? w : b({}, w, {
          pagination: b({}, w.pagination, {
            paginationMode: t.paginationMode,
            enabled: t.pagination === true
          })
        });
      });
    }, [
      e,
      t.paginationMode,
      t.pagination
    ]), c.useEffect(g, [
      g
    ]);
  };
  function hI() {
    return new Promise((e) => {
      requestAnimationFrame(() => {
        e();
      });
    });
  }
  function mI(e) {
    const t = document.createElement("iframe");
    return t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.title = e || document.title, t;
  }
  const bI = (e, t) => {
    const n = e.current.rootElementRef.current !== null, o = wt(e, "useGridPrintExport"), r = c.useRef(null), l = c.useRef(null), s = c.useRef({}), a = c.useRef([]), i = c.useRef(null);
    c.useEffect(() => {
      r.current = tn(e.current.rootElementRef.current);
    }, [
      e,
      n
    ]);
    const d = c.useCallback((I, S, w) => new Promise((F) => {
      const H = ld({
        apiRef: e,
        options: {
          fields: I,
          allColumns: S
        }
      }).map((A) => A.field), v = rn(e), R = {};
      v.forEach((A) => {
        R[A.field] = H.includes(A.field);
      }), w && (R[zo.field] = true), e.current.setColumnVisibilityModel(R), F();
    }), [
      e
    ]), u = c.useCallback((I) => {
      const w = I({
        apiRef: e
      }).reduce((F, H) => {
        const v = e.current.getRow(H);
        return v[Fo] || F.push(v), F;
      }, []);
      e.current.setRows(w);
    }, [
      e
    ]), f = c.useCallback((I, S) => {
      var _a2, _b2, _c2;
      const w = b({
        copyStyles: true,
        hideToolbar: false,
        hideFooter: false,
        includeCheckboxes: false
      }, S), F = I.contentDocument;
      if (!F) return;
      const H = Go(e.current.state), v = e.current.rootElementRef.current, R = v.cloneNode(true), A = R.querySelector(`.${k.main}`);
      A.style.overflow = "visible", R.style.contain = "size";
      let $ = ((_a2 = v.querySelector(`.${k.toolbarContainer}`)) == null ? void 0 : _a2.offsetHeight) || 0, y = ((_b2 = v.querySelector(`.${k.footerContainer}`)) == null ? void 0 : _b2.offsetHeight) || 0;
      const C = R.querySelector(`.${k.footerContainer}`);
      w.hideToolbar && ((_c2 = R.querySelector(`.${k.toolbarContainer}`)) == null ? void 0 : _c2.remove(), $ = 0), w.hideFooter && C && (C.remove(), y = 0);
      const M = H.currentPageTotalHeight + Pl(e, t) + $ + y;
      R.style.height = `${M}px`, R.style.boxSizing = "content-box", !w.hideFooter && C && (C.style.position = "absolute", C.style.width = "100%", C.style.top = `${M - y}px`);
      const T = document.createElement("div");
      T.appendChild(R), F.body.style.marginTop = "0px", F.body.innerHTML = T.innerHTML;
      const O = typeof w.pageStyle == "function" ? w.pageStyle() : w.pageStyle;
      if (typeof O == "string") {
        const E = F.createElement("style");
        E.appendChild(F.createTextNode(O)), F.head.appendChild(E);
      }
      w.bodyClassName && F.body.classList.add(...w.bodyClassName.split(" "));
      const G = [];
      if (w.copyStyles) {
        const E = v.getRootNode(), D = (E.constructor.name === "ShadowRoot" ? E : r.current).querySelectorAll("style, link[rel='stylesheet']");
        for (let L = 0; L < D.length; L += 1) {
          const z = D[L];
          if (z.tagName === "STYLE") {
            const _ = F.createElement(z.tagName), j = z.sheet;
            if (j) {
              let V = "";
              for (let K = 0; K < j.cssRules.length; K += 1) typeof j.cssRules[K].cssText == "string" && (V += `${j.cssRules[K].cssText}\r
`);
              _.appendChild(F.createTextNode(V)), F.head.appendChild(_);
            }
          } else if (z.getAttribute("href")) {
            const _ = F.createElement(z.tagName);
            for (let j = 0; j < z.attributes.length; j += 1) {
              const V = z.attributes[j];
              V && _.setAttribute(V.nodeName, V.nodeValue || "");
            }
            G.push(new Promise((j) => {
              _.addEventListener("load", () => j());
            })), F.head.appendChild(_);
          }
        }
      }
      Promise.all(G).then(() => {
        I.contentWindow.print();
      });
    }, [
      e,
      r,
      t
    ]), h = c.useCallback((I) => {
      var _a2, _b2;
      r.current.body.removeChild(I), e.current.restoreState(l.current || {}), ((_b2 = (_a2 = l.current) == null ? void 0 : _a2.columns) == null ? void 0 : _b2.columnVisibilityModel) || e.current.setColumnVisibilityModel(s.current), e.current.setState((S) => b({}, S, {
        virtualization: i.current
      })), e.current.setRows(a.current), l.current = null, s.current = {}, a.current = [];
    }, [
      e
    ]), m = {
      exportDataAsPrint: c.useCallback(async (I) => {
        if (o.debug("Export data as Print"), !e.current.rootElementRef.current) throw new Error("MUI X: No grid root element available.");
        if (l.current = e.current.exportState(), s.current = en(e), a.current = e.current.getSortedRows().filter((w) => !w[Fo]), t.pagination) {
          const F = {
            page: 0,
            pageSize: Ks(e)
          };
          e.current.setState((H) => b({}, H, {
            pagination: b({}, H.pagination, {
              paginationModel: Qr(H.pagination, "DataGridPro", F)
            })
          }));
        }
        i.current = e.current.state.virtualization, e.current.unstable_setVirtualization(false), await d(I == null ? void 0 : I.fields, I == null ? void 0 : I.allColumns, I == null ? void 0 : I.includeCheckboxes), u((I == null ? void 0 : I.getRowsToExport) ?? sd), await hI();
        const S = mI(I == null ? void 0 : I.fileName);
        S.onload = () => {
          f(S, I), S.contentWindow.matchMedia("print").addEventListener("change", (F) => {
            F.matches === false && h(S);
          });
        }, r.current.body.appendChild(S);
      }, [
        t,
        o,
        e,
        f,
        h,
        d,
        u
      ])
    };
    ke(e, m, "public");
    const x = c.useCallback((I, S) => {
      var _a2;
      return ((_a2 = S.printOptions) == null ? void 0 : _a2.disableToolbarButton) ? I : [
        ...I,
        {
          component: p.jsx(t0, {
            options: S.printOptions
          }),
          componentName: "printExport"
        }
      ];
    }, []);
    rt(e, "exportMenu", x);
  }, CI = (e, t, n) => {
    var _a2, _b2;
    const o = t.filterModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel) ?? pr();
    return b({}, e, {
      filter: b({
        filterModel: Ns(o, t.disableMultipleColumnsFiltering, n)
      }, Yc),
      visibleRowsLookup: {}
    });
  }, wI = (e) => e.filteredRowsLookup;
  function Ba(e, t) {
    return e.current.applyStrategyProcessor("visibleRowsLookupCreation", {
      tree: t.rows.tree,
      filteredRowsLookup: t.filter.filteredRowsLookup
    });
  }
  function xI() {
    return Fc(Object.values);
  }
  const vI = (e, t) => {
    var _a2, _b2, _c2;
    const n = wt(e, "useGridFilter");
    e.current.registerControlState({
      stateId: "filter",
      propModel: t.filterModel,
      propOnChange: t.onFilterModelChange,
      stateSelector: yt,
      changeEvent: "filterModelChange"
    });
    const o = c.useCallback(() => {
      e.current.setState((y) => {
        const C = yt(y, e.current.instanceId), M = e.current.getFilterState(C), T = b({}, y, {
          filter: b({}, y.filter, M)
        }), O = Ba(e, T);
        return b({}, T, {
          visibleRowsLookup: O
        });
      }), e.current.publishEvent("filteredRowsSet");
    }, [
      e
    ]), r = c.useCallback((y, C) => C == null || C.filterable === false || t.disableColumnFilter ? y : [
      ...y,
      "columnMenuFilterItem"
    ], [
      t.disableColumnFilter
    ]), l = c.useCallback(() => {
      o(), e.current.forceUpdate();
    }, [
      e,
      o
    ]), s = c.useCallback((y) => {
      const C = yt(e), M = [
        ...C.items
      ], T = M.findIndex((O) => O.id === y.id);
      T === -1 ? M.push(y) : M[T] = y, e.current.setFilterModel(b({}, C, {
        items: M
      }), "upsertFilterItem");
    }, [
      e
    ]), a = c.useCallback((y) => {
      const C = yt(e), M = [
        ...C.items
      ];
      y.forEach((T) => {
        const O = M.findIndex((G) => G.id === T.id);
        O === -1 ? M.push(T) : M[O] = T;
      }), e.current.setFilterModel(b({}, C, {
        items: M
      }), "upsertFilterItems");
    }, [
      e
    ]), i = c.useCallback((y) => {
      const C = yt(e), M = C.items.filter((T) => T.id !== y.id);
      M.length !== C.items.length && e.current.setFilterModel(b({}, C, {
        items: M
      }), "deleteFilterItem");
    }, [
      e
    ]), d = c.useCallback((y, C, M) => {
      if (n.debug("Displaying filter panel"), y) {
        const T = yt(e), O = T.items.filter((D) => {
          var _a3;
          if (D.value !== void 0) return !(Array.isArray(D.value) && D.value.length === 0);
          const z = (_a3 = e.current.getColumn(D.field).filterOperators) == null ? void 0 : _a3.find((j) => j.value === D.operator);
          return !(typeof (z == null ? void 0 : z.requiresFilterValue) > "u" ? true : z == null ? void 0 : z.requiresFilterValue);
        });
        let G;
        const E = O.find((D) => D.field === y), P = e.current.getColumn(y);
        E ? G = O : t.disableMultipleColumnsFiltering ? G = [
          fs({
            field: y,
            operator: P.filterOperators[0].value
          }, e)
        ] : G = [
          ...O,
          fs({
            field: y,
            operator: P.filterOperators[0].value
          }, e)
        ], e.current.setFilterModel(b({}, T, {
          items: G
        }));
      }
      e.current.showPreferences(eo.filters, C, M);
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), u = c.useCallback(() => {
      n.debug("Hiding filter panel"), e.current.hidePreferences();
    }, [
      e,
      n
    ]), f = c.useCallback((y) => {
      const C = yt(e);
      C.logicOperator !== y && e.current.setFilterModel(b({}, C, {
        logicOperator: y
      }), "changeLogicOperator");
    }, [
      e
    ]), h = c.useCallback((y) => {
      const C = yt(e);
      xn(C.quickFilterValues, y) || e.current.setFilterModel(b({}, C, {
        quickFilterValues: [
          ...y
        ]
      }));
    }, [
      e
    ]), g = c.useCallback((y, C) => {
      yt(e) !== y && (n.debug("Setting filter model"), e.current.updateControlState("filter", ra(y, t.disableMultipleColumnsFiltering, e), C), e.current.unstable_applyFilters());
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), m = c.useCallback((y) => {
      const C = Ns(y, t.disableMultipleColumnsFiltering, e), M = t.filterMode === "client" ? Xb(C, e, t.disableEval) : null, T = e.current.applyStrategyProcessor("filtering", {
        isRowMatchingFilters: M,
        filterModel: C ?? pr()
      });
      return b({}, T, {
        filterModel: C
      });
    }, [
      t.disableMultipleColumnsFiltering,
      t.filterMode,
      t.disableEval,
      e
    ]), x = {
      setFilterLogicOperator: f,
      unstable_applyFilters: l,
      deleteFilterItem: i,
      upsertFilterItem: s,
      upsertFilterItems: a,
      setFilterModel: g,
      showFilterPanel: d,
      hideFilterPanel: u,
      setQuickFilterValues: h,
      ignoreDiacritics: t.ignoreDiacritics,
      getFilterState: m
    };
    ke(e, x, "public");
    const I = c.useCallback((y, C) => {
      var _a3, _b3;
      const M = yt(e);
      return M.items.forEach((O) => {
        delete O.fromInput;
      }), !C.exportOnlyDirtyModels || t.filterModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.filter) == null ? void 0 : _b3.filterModel) != null || !xn(M, pr()) ? b({}, y, {
        filter: {
          filterModel: M
        }
      }) : y;
    }, [
      e,
      t.filterModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel
    ]), S = c.useCallback((y, C) => {
      var _a3;
      const M = (_a3 = C.stateToRestore.filter) == null ? void 0 : _a3.filterModel;
      return M == null ? y : (e.current.updateControlState("filter", ra(M, t.disableMultipleColumnsFiltering, e), "restoreState"), b({}, y, {
        callbacks: [
          ...y.callbacks,
          e.current.unstable_applyFilters
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsFiltering
    ]), w = c.useCallback((y, C) => {
      var _a3;
      if (C === eo.filters) {
        const M = t.slots.filterPanel;
        return p.jsx(M, b({}, (_a3 = t.slotProps) == null ? void 0 : _a3.filterPanel));
      }
      return y;
    }, [
      t.slots.filterPanel,
      (_c2 = t.slotProps) == null ? void 0 : _c2.filterPanel
    ]), { getRowId: F } = t, H = In(xI), v = c.useCallback((y) => {
      var _a3;
      if (t.filterMode !== "client" || !y.isRowMatchingFilters || !y.filterModel.items.length && !((_a3 = y.filterModel.quickFilterValues) == null ? void 0 : _a3.length)) return Yc;
      const C = Zt(e), M = {}, { isRowMatchingFilters: T } = y, O = {}, G = {
        passingFilterItems: null,
        passingQuickFilterValues: null
      }, E = H.current(e.current.state.rows.dataRowIdToModelLookup);
      for (let L = 0; L < E.length; L += 1) {
        const z = E[L], _ = F ? F(z) : z.id;
        T(z, void 0, G);
        const j = Jb([
          G.passingFilterItems
        ], [
          G.passingQuickFilterValues
        ], y.filterModel, e, O);
        M[_] = j;
      }
      const P = "auto-generated-group-footer-root";
      return C[P] && (M[P] = true), {
        filteredRowsLookup: M,
        filteredChildrenCountLookup: {},
        filteredDescendantCountLookup: {}
      };
    }, [
      e,
      t.filterMode,
      F,
      H
    ]);
    rt(e, "columnMenu", r), rt(e, "exportState", I), rt(e, "restoreState", S), rt(e, "preferencePanel", w), gl(e, to, "filtering", v), gl(e, to, "visibleRowsLookupCreation", wI);
    const R = c.useCallback(() => {
      n.debug("onColUpdated - GridColumns changed, applying filters");
      const y = yt(e), C = Dn(e), M = y.items.filter((T) => T.field && C[T.field]);
      M.length < y.items.length && e.current.setFilterModel(b({}, y, {
        items: M
      }));
    }, [
      e,
      n
    ]), A = c.useCallback((y) => {
      y === "filtering" && e.current.unstable_applyFilters();
    }, [
      e
    ]), $ = c.useCallback(() => {
      e.current.setState((y) => b({}, y, {
        visibleRowsLookup: Ba(e, y)
      })), e.current.forceUpdate();
    }, [
      e
    ]);
    re(e, "rowsSet", o), re(e, "columnsChange", R), re(e, "activeStrategyProcessorChange", A), re(e, "rowExpansionChange", $), re(e, "columnVisibilityModelChange", () => {
      const y = yt(e);
      y.quickFilterValues && nu(y) && e.current.unstable_applyFilters();
    }), Ir(() => {
      e.current.unstable_applyFilters();
    }), St(() => {
      t.filterModel !== void 0 && e.current.setFilterModel(t.filterModel);
    }, [
      e,
      n,
      t.filterModel
    ]);
  }, yI = (e) => b({}, e, {
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
  }), SI = (e, t) => {
    const n = wt(e, "useGridFocus"), o = c.useRef(null), r = e.current.rootElementRef.current !== null, l = c.useCallback(($, y) => {
      $ && e.current.getRow($.id) && e.current.publishEvent("cellFocusOut", e.current.getCellParams($.id, $.field), y);
    }, [
      e
    ]), s = c.useCallback(($, y) => {
      const C = $t(e);
      (C == null ? void 0 : C.id) === $ && (C == null ? void 0 : C.field) === y || (e.current.setState((M) => (n.debug(`Focusing on cell with id=${$} and field=${y}`), b({}, M, {
        tabIndex: {
          cell: {
            id: $,
            field: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        },
        focus: {
          cell: {
            id: $,
            field: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate(), e.current.getRow($) && (C && l(C, {}), e.current.publishEvent("cellFocusIn", e.current.getCellParams($, y))));
    }, [
      e,
      n,
      l
    ]), a = c.useCallback(($, y = {}) => {
      const C = $t(e);
      l(C, y), e.current.setState((M) => (n.debug(`Focusing on column header with colIndex=${$}`), b({}, M, {
        tabIndex: {
          columnHeader: {
            field: $
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: {
            field: $
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      n,
      l
    ]), i = c.useCallback(($, y = {}) => {
      const C = $t(e);
      l(C, y), e.current.setState((M) => (n.debug(`Focusing on column header filter with colIndex=${$}`), b({}, M, {
        tabIndex: {
          columnHeader: null,
          columnHeaderFilter: {
            field: $
          },
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: null,
          columnHeaderFilter: {
            field: $
          },
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      n,
      l
    ]), d = c.useCallback(($, y, C = {}) => {
      const M = $t(e);
      M && e.current.publishEvent("cellFocusOut", e.current.getCellParams(M.id, M.field), C), e.current.setState((T) => b({}, T, {
        tabIndex: {
          columnGroupHeader: {
            field: $,
            depth: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        },
        focus: {
          columnGroupHeader: {
            field: $,
            depth: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        }
      })), e.current.forceUpdate();
    }, [
      e
    ]), u = c.useCallback(() => sl(e), [
      e
    ]), f = c.useCallback(($, y, C) => {
      let M = e.current.getColumnIndex(y);
      const T = it(e), O = Nn(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      }), G = $o(e), E = [].concat(G.top || [], O.rows, G.bottom || []);
      let P = E.findIndex((_) => _.id === $);
      C === "right" ? M += 1 : C === "left" ? M -= 1 : P += 1, M >= T.length ? (P += 1, P < E.length && (M = 0)) : M < 0 && (P -= 1, P >= 0 && (M = T.length - 1)), P = Wt(P, 0, E.length - 1);
      const D = E[P];
      if (!D) return;
      const L = e.current.unstable_getCellColSpanInfo(D.id, M);
      L && L.spannedByColSpan && (C === "left" || C === "below" ? M = L.leftVisibleCellIndex : C === "right" && (M = L.rightVisibleCellIndex)), M = Wt(M, 0, T.length - 1);
      const z = T[M];
      e.current.setCellFocus(D.id, z.field);
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), h = c.useCallback(({ id: $, field: y }) => {
      e.current.setCellFocus($, y);
    }, [
      e
    ]), g = c.useCallback(($, y) => {
      y.key === "Enter" || y.key === "Tab" || y.key === "Shift" || dl(y.key) || e.current.setCellFocus($.id, $.field);
    }, [
      e
    ]), m = c.useCallback(({ field: $ }, y) => {
      y.target === y.currentTarget && e.current.setColumnHeaderFocus($, y);
    }, [
      e
    ]), x = c.useCallback(({ fields: $, depth: y }, C) => {
      if (C.target !== C.currentTarget) return;
      const M = sl(e);
      M !== null && M.depth === y && $.includes(M.field) || e.current.setColumnGroupHeaderFocus($[0], y, C);
    }, [
      e
    ]), I = c.useCallback(($, y) => {
      var _a2, _b2;
      ((_b2 = (_a2 = y.relatedTarget) == null ? void 0 : _a2.getAttribute("class")) == null ? void 0 : _b2.includes(k.columnHeader)) || (n.debug("Clearing focus"), e.current.setState((C) => b({}, C, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })));
    }, [
      n,
      e
    ]), S = c.useCallback(($) => {
      o.current = $;
    }, []), w = c.useCallback(($) => {
      var _a2;
      const y = o.current;
      o.current = null;
      const C = $t(e);
      if (!e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: $,
        cell: y
      })) return;
      if (!C) {
        y && e.current.setCellFocus(y.id, y.field);
        return;
      }
      (y == null ? void 0 : y.id) === C.id && (y == null ? void 0 : y.field) === C.field || ((_a2 = e.current.getCellElement(C.id, C.field)) == null ? void 0 : _a2.contains($.target)) || (y ? e.current.setCellFocus(y.id, y.field) : (e.current.setState((O) => b({}, O, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })), e.current.forceUpdate(), l(C, $)));
    }, [
      e,
      l
    ]), F = c.useCallback(($) => {
      if ($.cellMode === "view") return;
      const y = $t(e);
      ((y == null ? void 0 : y.id) !== $.id || (y == null ? void 0 : y.field) !== $.field) && e.current.setCellFocus($.id, $.field);
    }, [
      e
    ]), H = c.useCallback(() => {
      var _a2;
      const $ = $t(e);
      if ($ && !e.current.getRow($.id)) {
        const y = $.id;
        let C = null;
        if (typeof y < "u") {
          const M = e.current.getRowElement(y), T = (M == null ? void 0 : M.dataset.rowindex) ? Number(M == null ? void 0 : M.dataset.rowindex) : 0, O = Nn(e, {
            pagination: t.pagination,
            paginationMode: t.paginationMode
          });
          C = ((_a2 = O.rows[Wt(T, 0, O.rows.length - 1)]) == null ? void 0 : _a2.id) ?? null;
        }
        e.current.setState((M) => b({}, M, {
          focus: {
            cell: C === null ? null : {
              id: C,
              field: $.field
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
    ]), v = Be(() => {
      const $ = $t(e);
      if (!$) return;
      const y = Nn(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (y.rows.find((T) => T.id === $.id)) return;
      const M = it(e);
      e.current.setState((T) => b({}, T, {
        tabIndex: {
          cell: {
            id: y.rows[0].id,
            field: M[0].field
          },
          columnGroupHeader: null,
          columnHeader: null,
          columnHeaderFilter: null
        }
      }));
    }), R = {
      setCellFocus: s,
      setColumnHeaderFocus: a,
      setColumnHeaderFilterFocus: i
    }, A = {
      moveFocusToRelativeCell: f,
      setColumnGroupHeaderFocus: d,
      getColumnGroupHeaderFocus: u
    };
    ke(e, R, "public"), ke(e, A, "private"), c.useEffect(() => {
      const $ = tn(e.current.rootElementRef.current);
      return $.addEventListener("mouseup", w), () => {
        $.removeEventListener("mouseup", w);
      };
    }, [
      e,
      r,
      w
    ]), re(e, "columnHeaderBlur", I), re(e, "cellDoubleClick", h), re(e, "cellMouseDown", S), re(e, "cellKeyDown", g), re(e, "cellModeChange", F), re(e, "columnHeaderFocus", m), re(e, "columnGroupHeaderFocus", x), re(e, "rowsSet", H), re(e, "paginationModelChange", v);
  }, Ul = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e < n) return e + 1;
    } else if (!o && e > t) return e - 1;
    return null;
  }, Kl = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e > t) return e - 1;
    } else if (!o && e < n) return e + 1;
    return null;
  };
  function II(e, t, n, o) {
    var _a2, _b2;
    const r = Au(e);
    if (!((_a2 = r[t]) == null ? void 0 : _a2[n])) return t;
    const l = pu(e);
    let s = l.indexOf(t) + (o === "down" ? 1 : -1);
    for (; s >= 0 && s < l.length; ) {
      const a = l[s];
      if (!((_b2 = r[a]) == null ? void 0 : _b2[n])) return a;
      s += o === "down" ? 1 : -1;
    }
    return t;
  }
  const PI = qe(Mr, $o, (e, t) => (t.top || []).concat(e.rows, t.bottom || [])), MI = (e, t) => {
    const n = wt(e, "useGridKeyboardNavigation"), o = Gt(), r = t.unstable_listView, l = c.useCallback(() => PI(e), [
      e
    ]), s = t.signature !== "DataGrid" && t.headerFilters, a = c.useCallback((S, w, F = "left", H = "up") => {
      const v = Kn(e), R = e.current.unstable_getCellColSpanInfo(w, S);
      R && R.spannedByColSpan && (F === "left" ? S = R.leftVisibleCellIndex : F === "right" && (S = R.rightVisibleCellIndex));
      const A = r ? Do(e.current.state).field : Ho(e)[S], $ = II(e, w, A, H), y = v.findIndex((C) => C.id === $);
      n.debug(`Navigating to cell row ${y}, col ${S}`), e.current.scrollToIndexes({
        colIndex: S,
        rowIndex: y
      }), e.current.setCellFocus($, A);
    }, [
      e,
      n,
      r
    ]), i = c.useCallback((S, w) => {
      n.debug(`Navigating to header col ${S}`), e.current.scrollToIndexes({
        colIndex: S
      });
      const F = e.current.getVisibleColumns()[S].field;
      e.current.setColumnHeaderFocus(F, w);
    }, [
      e,
      n
    ]), d = c.useCallback((S, w) => {
      n.debug(`Navigating to header filter col ${S}`), e.current.scrollToIndexes({
        colIndex: S
      });
      const F = e.current.getVisibleColumns()[S].field;
      e.current.setColumnHeaderFilterFocus(F, w);
    }, [
      e,
      n
    ]), u = c.useCallback((S, w, F) => {
      n.debug(`Navigating to header col ${S}`), e.current.scrollToIndexes({
        colIndex: S
      });
      const { field: H } = e.current.getVisibleColumns()[S];
      e.current.setColumnGroupHeaderFocus(H, w, F);
    }, [
      e,
      n
    ]), f = c.useCallback((S) => {
      var _a2;
      return (_a2 = l()[S]) == null ? void 0 : _a2.id;
    }, [
      l
    ]), h = c.useCallback((S, w) => {
      const F = w.currentTarget.querySelector(`.${k.columnHeaderTitleContainerContent}`);
      if (!!F && F.contains(w.target) && S.field !== zo.field) return;
      const v = l(), R = e.current.getViewportPageSize(), A = S.field ? e.current.getColumnIndex(S.field) : 0, $ = v.length > 0 ? 0 : null, y = v.length - 1, C = 0, M = it(e).length - 1, T = Er(e);
      let O = true;
      switch (w.key) {
        case "ArrowDown": {
          s ? d(A, w) : $ !== null && a(A, f($));
          break;
        }
        case "ArrowRight": {
          const G = Kl({
            currentColIndex: A,
            firstColIndex: C,
            lastColIndex: M,
            isRtl: o
          });
          G !== null && i(G, w);
          break;
        }
        case "ArrowLeft": {
          const G = Ul({
            currentColIndex: A,
            firstColIndex: C,
            lastColIndex: M,
            isRtl: o
          });
          G !== null && i(G, w);
          break;
        }
        case "ArrowUp": {
          T > 0 && u(A, T - 1, w);
          break;
        }
        case "PageDown": {
          $ !== null && y !== null && a(A, f(Math.min($ + R, y)));
          break;
        }
        case "Home": {
          i(C, w);
          break;
        }
        case "End": {
          i(M, w);
          break;
        }
        case "Enter": {
          (w.ctrlKey || w.metaKey) && e.current.toggleColumnMenu(S.field);
          break;
        }
        case " ":
          break;
        default:
          O = false;
      }
      O && w.preventDefault();
    }, [
      e,
      l,
      s,
      d,
      a,
      f,
      o,
      i,
      u
    ]), g = c.useCallback((S, w) => {
      const F = Dw(e) === S.field, H = Rw(e) === S.field;
      if (F || H || !dl(w.key)) return;
      const v = l(), R = e.current.getViewportPageSize(), A = S.field ? e.current.getColumnIndex(S.field) : 0, $ = 0, y = v.length - 1, C = 0, M = it(e).length - 1;
      let T = true;
      switch (w.key) {
        case "ArrowDown": {
          const O = f($);
          O != null && a(A, O);
          break;
        }
        case "ArrowRight": {
          const O = Kl({
            currentColIndex: A,
            firstColIndex: C,
            lastColIndex: M,
            isRtl: o
          });
          O !== null && d(O, w);
          break;
        }
        case "ArrowLeft": {
          const O = Ul({
            currentColIndex: A,
            firstColIndex: C,
            lastColIndex: M,
            isRtl: o
          });
          O !== null ? d(O, w) : e.current.setColumnHeaderFilterFocus(S.field, w);
          break;
        }
        case "ArrowUp": {
          i(A, w);
          break;
        }
        case "PageDown": {
          y !== null && a(A, f(Math.min($ + R, y)));
          break;
        }
        case "Home": {
          d(C, w);
          break;
        }
        case "End": {
          d(M, w);
          break;
        }
        case " ":
          break;
        default:
          T = false;
      }
      T && w.preventDefault();
    }, [
      e,
      l,
      d,
      o,
      i,
      a,
      f
    ]), m = c.useCallback((S, w) => {
      const F = sl(e);
      if (F === null) return;
      const { field: H, depth: v } = F, { fields: R, depth: A, maxDepth: $ } = S, y = l(), C = e.current.getViewportPageSize(), M = e.current.getColumnIndex(H), T = H ? e.current.getColumnIndex(H) : 0, O = 0, G = y.length - 1, E = 0, P = it(e).length - 1;
      let D = true;
      switch (w.key) {
        case "ArrowDown": {
          A === $ - 1 ? i(M, w) : u(M, v + 1, w);
          break;
        }
        case "ArrowUp": {
          A > 0 && u(M, v - 1, w);
          break;
        }
        case "ArrowRight": {
          const L = R.length - R.indexOf(H) - 1;
          M + L + 1 <= P && u(M + L + 1, v, w);
          break;
        }
        case "ArrowLeft": {
          const L = R.indexOf(H);
          M - L - 1 >= E && u(M - L - 1, v, w);
          break;
        }
        case "PageDown": {
          G !== null && a(T, f(Math.min(O + C, G)));
          break;
        }
        case "Home": {
          u(E, v, w);
          break;
        }
        case "End": {
          u(P, v, w);
          break;
        }
        case " ":
          break;
        default:
          D = false;
      }
      D && w.preventDefault();
    }, [
      e,
      l,
      i,
      u,
      a,
      f
    ]), x = c.useCallback((S, w) => {
      if (Tr(w)) return;
      const F = e.current.getCellParams(S.id, S.field);
      if (F.cellMode === Qe.Edit || !dl(w.key) || !e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: w,
        cell: F
      })) return;
      const v = l();
      if (v.length === 0) return;
      const R = e.current.getViewportPageSize(), A = r ? () => 0 : e.current.getColumnIndex, $ = S.field ? A(S.field) : 0, y = v.findIndex((P) => P.id === S.id), C = 0, M = v.length - 1, T = 0, G = (r ? [
        Do(e.current.state)
      ] : it(e)).length - 1;
      let E = true;
      switch (w.key) {
        case "ArrowDown": {
          y < M && a($, f(y + 1), o ? "right" : "left", "down");
          break;
        }
        case "ArrowUp": {
          y > C ? a($, f(y - 1)) : s ? d($, w) : i($, w);
          break;
        }
        case "ArrowRight": {
          const P = Kl({
            currentColIndex: $,
            firstColIndex: T,
            lastColIndex: G,
            isRtl: o
          });
          P !== null && a(P, f(y), o ? "left" : "right");
          break;
        }
        case "ArrowLeft": {
          const P = Ul({
            currentColIndex: $,
            firstColIndex: T,
            lastColIndex: G,
            isRtl: o
          });
          P !== null && a(P, f(y), o ? "right" : "left");
          break;
        }
        case "Tab": {
          w.shiftKey && $ > T ? a($ - 1, f(y), "left") : !w.shiftKey && $ < G && a($ + 1, f(y), "right");
          break;
        }
        case " ": {
          if (S.field === xl) break;
          const D = S.colDef;
          if (D && (D.field === pC || tv(D.field))) break;
          !w.shiftKey && y < M && a($, f(Math.min(y + R, M)));
          break;
        }
        case "PageDown": {
          y < M && a($, f(Math.min(y + R, M)));
          break;
        }
        case "PageUp": {
          const P = Math.max(y - R, C);
          P !== y && P >= C ? a($, f(P)) : i($, w);
          break;
        }
        case "Home": {
          w.ctrlKey || w.metaKey || w.shiftKey ? a(T, f(C)) : a(T, f(y));
          break;
        }
        case "End": {
          w.ctrlKey || w.metaKey || w.shiftKey ? a(G, f(M)) : a(G, f(y));
          break;
        }
        default:
          E = false;
      }
      E && w.preventDefault();
    }, [
      e,
      l,
      o,
      a,
      f,
      s,
      d,
      i,
      r
    ]), I = c.useCallback((S, { event: w }) => w.key === " " ? false : S, []);
    rt(e, "canStartEditing", I), re(e, "columnHeaderKeyDown", h), re(e, "headerFilterKeyDown", g), re(e, "columnGroupHeaderKeyDown", m), re(e, "cellKeyDown", x);
  }, kI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridRowCount"), o = X(e, qs), r = X(e, bo), l = X(e, Zo), s = X(e, kt), a = In(() => kt(e).pageSize);
    e.current.registerControlState({
      stateId: "paginationRowCount",
      propModel: t.rowCount,
      propOnChange: t.onRowCountChange,
      stateSelector: bo,
      changeEvent: "rowCountChange"
    });
    const d = {
      setRowCount: c.useCallback((m) => {
        r !== m && (n.debug("Setting 'rowCount' to", m), e.current.setState((x) => b({}, x, {
          pagination: b({}, x.pagination, {
            rowCount: m
          })
        })));
      }, [
        e,
        n,
        r
      ])
    };
    ke(e, d, "public");
    const u = c.useCallback((m, x) => {
      var _a3, _b3;
      const I = bo(e);
      return !x.exportOnlyDirtyModels || t.rowCount != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.rowCount) != null ? b({}, m, {
        pagination: b({}, m.pagination, {
          rowCount: I
        })
      }) : m;
    }, [
      e,
      t.rowCount,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.rowCount
    ]), f = c.useCallback((m, x) => {
      var _a3;
      const I = ((_a3 = x.stateToRestore.pagination) == null ? void 0 : _a3.rowCount) ? x.stateToRestore.pagination.rowCount : bo(e);
      return e.current.setState((S) => b({}, S, {
        pagination: b({}, S.pagination, {
          rowCount: I
        })
      })), m;
    }, [
      e
    ]);
    rt(e, "exportState", u), rt(e, "restoreState", f);
    const h = c.useCallback((m) => {
      t.paginationMode === "client" || !a.current || m.pageSize !== a.current && (a.current = m.pageSize, r === -1 && e.current.setPage(0));
    }, [
      t.paginationMode,
      a,
      r,
      e
    ]);
    re(e, "paginationModelChange", h), c.useEffect(() => {
      t.paginationMode === "client" ? e.current.setRowCount(o) : t.rowCount != null && e.current.setRowCount(t.rowCount);
    }, [
      e,
      t.paginationMode,
      o,
      t.rowCount
    ]);
    const g = l.hasNextPage === false;
    c.useEffect(() => {
      g && r === -1 && e.current.setRowCount(s.pageSize * s.page + o);
    }, [
      e,
      o,
      g,
      r,
      s
    ]);
  }, EI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridPaginationMeta"), o = X(e, Zo);
    e.current.registerControlState({
      stateId: "paginationMeta",
      propModel: t.paginationMeta,
      propOnChange: t.onPaginationMetaChange,
      stateSelector: Zo,
      changeEvent: "paginationMetaChange"
    });
    const l = {
      setPaginationMeta: c.useCallback((i) => {
        o !== i && (n.debug("Setting 'paginationMeta' to", i), e.current.setState((d) => b({}, d, {
          pagination: b({}, d.pagination, {
            meta: i
          })
        })));
      }, [
        e,
        n,
        o
      ])
    };
    ke(e, l, "public");
    const s = c.useCallback((i, d) => {
      var _a3, _b3;
      const u = Zo(e);
      return !d.exportOnlyDirtyModels || t.paginationMeta != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.meta) != null ? b({}, i, {
        pagination: b({}, i.pagination, {
          meta: u
        })
      }) : i;
    }, [
      e,
      t.paginationMeta,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.meta
    ]), a = c.useCallback((i, d) => {
      var _a3;
      const u = ((_a3 = d.stateToRestore.pagination) == null ? void 0 : _a3.meta) ? d.stateToRestore.pagination.meta : Zo(e);
      return e.current.setState((f) => b({}, f, {
        pagination: b({}, f.pagination, {
          meta: u
        })
      })), i;
    }, [
      e
    ]);
    rt(e, "exportState", s), rt(e, "restoreState", a), c.useEffect(() => {
      t.paginationMeta && e.current.setPaginationMeta(t.paginationMeta);
    }, [
      e,
      t.paginationMeta
    ]);
  }, FI = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2;
    const n = b({}, wu(t.autoPageSize), t.paginationModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel));
    xu(n.pageSize, t.signature);
    const o = t.rowCount ?? ((_d2 = (_c2 = t.initialState) == null ? void 0 : _c2.pagination) == null ? void 0 : _d2.rowCount) ?? (t.paginationMode === "client" ? (_e = e.rows) == null ? void 0 : _e.totalRowCount : void 0), r = t.paginationMeta ?? ((_g2 = (_f2 = t.initialState) == null ? void 0 : _f2.pagination) == null ? void 0 : _g2.meta) ?? {};
    return b({}, e, {
      pagination: b({}, e.pagination, {
        paginationModel: n,
        rowCount: o,
        meta: r,
        enabled: t.pagination === true,
        paginationMode: t.paginationMode
      })
    });
  }, TI = (e, t) => {
    EI(e, t), gI(e, t), kI(e, t);
  }, OI = (e, t) => {
    var _a2;
    return b({}, e, {
      preferencePanel: ((_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel) ?? {
        open: false
      }
    });
  }, DI = (e, t) => {
    var _a2;
    const n = wt(e, "useGridPreferencesPanel"), o = c.useCallback(() => {
      e.current.setState((a) => {
        if (!a.preferencePanel.open) return a;
        n.debug("Hiding Preferences Panel");
        const i = gr(a);
        return e.current.publishEvent("preferencePanelClose", {
          openedPanelValue: i.openedPanelValue
        }), b({}, a, {
          preferencePanel: {
            open: false
          }
        });
      });
    }, [
      e,
      n
    ]), r = c.useCallback((a, i, d) => {
      n.debug("Opening Preferences Panel"), e.current.setState((u) => b({}, u, {
        preferencePanel: b({}, u.preferencePanel, {
          open: true,
          openedPanelValue: a,
          panelId: i,
          labelId: d
        })
      })), e.current.publishEvent("preferencePanelOpen", {
        openedPanelValue: a
      });
    }, [
      n,
      e
    ]);
    ke(e, {
      showPreferences: r,
      hidePreferences: o
    }, "public");
    const l = c.useCallback((a, i) => {
      var _a3;
      const d = gr(e.current.state);
      return !i.exportOnlyDirtyModels || ((_a3 = t.initialState) == null ? void 0 : _a3.preferencePanel) != null || d.open ? b({}, a, {
        preferencePanel: d
      }) : a;
    }, [
      e,
      (_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel
    ]), s = c.useCallback((a, i) => {
      const d = i.stateToRestore.preferencePanel;
      return d != null && e.current.setState((u) => b({}, u, {
        preferencePanel: d
      })), a;
    }, [
      e
    ]);
    rt(e, "exportState", l), rt(e, "restoreState", s);
  }, ws = (e) => {
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
  }, RI = [
    "id",
    "field"
  ], $I = [
    "id",
    "field"
  ], HI = (e, t) => {
    const [n, o] = c.useState({}), r = c.useRef(n), l = c.useRef({}), { processRowUpdate: s, onProcessRowUpdateError: a, cellModesModel: i, onCellModesModelChange: d } = t, u = (E) => (...P) => {
      t.editMode === Sn.Cell && E(...P);
    }, f = c.useCallback((E, P) => {
      const D = e.current.getCellParams(E, P);
      if (!e.current.isCellEditable(D)) throw new Error(`MUI X: The cell with id=${E} and field=${P} is not editable.`);
    }, [
      e
    ]), h = c.useCallback((E, P, D) => {
      if (e.current.getCellMode(E, P) !== D) throw new Error(`MUI X: The cell with id=${E} and field=${P} is not in ${D} mode.`);
    }, [
      e
    ]), g = c.useCallback((E, P) => {
      if (!E.isEditable || E.cellMode === Qe.Edit) return;
      const D = b({}, E, {
        reason: En.cellDoubleClick
      });
      e.current.publishEvent("cellEditStart", D, P);
    }, [
      e
    ]), m = c.useCallback((E, P) => {
      if (E.cellMode === Qe.View || e.current.getCellMode(E.id, E.field) === Qe.View) return;
      const D = b({}, E, {
        reason: un.cellFocusOut
      });
      e.current.publishEvent("cellEditStop", D, P);
    }, [
      e
    ]), x = c.useCallback((E, P) => {
      if (E.cellMode === Qe.Edit) {
        if (P.which === 229) return;
        let D;
        if (P.key === "Escape" ? D = un.escapeKeyDown : P.key === "Enter" ? D = un.enterKeyDown : P.key === "Tab" && (D = P.shiftKey ? un.shiftTabKeyDown : un.tabKeyDown, P.preventDefault()), D) {
          const L = b({}, E, {
            reason: D
          });
          e.current.publishEvent("cellEditStop", L, P);
        }
      } else if (E.isEditable) {
        let D;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: P,
          cellParams: E,
          editMode: "cell"
        })) return;
        if (Zu(P) ? D = En.printableKeyDown : td(P) ? D = En.pasteKeyDown : P.key === "Enter" ? D = En.enterKeyDown : (P.key === "Backspace" || P.key === "Delete") && (D = En.deleteKeyDown), D) {
          const z = b({}, E, {
            reason: D,
            key: P.key
          });
          e.current.publishEvent("cellEditStart", z, P);
        }
      }
    }, [
      e
    ]), I = c.useCallback((E) => {
      const { id: P, field: D, reason: L } = E, z = {
        id: P,
        field: D
      };
      (L === En.printableKeyDown || L === En.deleteKeyDown || L === En.pasteKeyDown) && (z.deleteValue = true), e.current.startCellEditMode(z);
    }, [
      e
    ]), S = c.useCallback((E) => {
      const { id: P, field: D, reason: L } = E;
      e.current.runPendingEditCellValueMutation(P, D);
      let z;
      L === un.enterKeyDown ? z = "below" : L === un.tabKeyDown ? z = "right" : L === un.shiftTabKeyDown && (z = "left");
      const _ = L === "escapeKeyDown";
      e.current.stopCellEditMode({
        id: P,
        field: D,
        ignoreModifications: _,
        cellToFocusAfter: z
      });
    }, [
      e
    ]), w = (E) => async (...P) => {
      var _a2;
      if (E) {
        const { id: D, field: L } = P[0];
        ((_a2 = e.current.state.editRows[D][L]) == null ? void 0 : _a2.error) || E(...P);
      }
    };
    re(e, "cellDoubleClick", u(g)), re(e, "cellFocusOut", u(m)), re(e, "cellKeyDown", u(x)), re(e, "cellEditStart", u(I)), re(e, "cellEditStop", u(S)), Je(e, "cellEditStart", t.onCellEditStart), Je(e, "cellEditStop", w(t.onCellEditStop));
    const F = c.useCallback((E, P) => {
      const D = bt(e.current.state);
      return D[E] && D[E][P] ? Qe.Edit : Qe.View;
    }, [
      e
    ]), H = Be((E) => {
      const P = E !== t.cellModesModel;
      d && P && d(E, {
        api: e.current
      }), !(t.cellModesModel && P) && (o(E), r.current = E, e.current.publishEvent("cellModesModelChange", E));
    }), v = c.useCallback((E, P, D) => {
      const L = b({}, r.current);
      if (D !== null) L[E] = b({}, L[E], {
        [P]: b({}, D)
      });
      else {
        const z = L[E], _ = fe(z, [
          P
        ].map(mr));
        L[E] = _, Object.keys(L[E]).length === 0 && delete L[E];
      }
      H(L);
    }, [
      H
    ]), R = c.useCallback((E, P, D) => {
      e.current.setState((L) => {
        const z = b({}, L.editRows);
        return D !== null ? z[E] = b({}, z[E], {
          [P]: b({}, D)
        }) : (delete z[E][P], Object.keys(z[E]).length === 0 && delete z[E]), b({}, L, {
          editRows: z
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), A = c.useCallback((E) => {
      const { id: P, field: D } = E, L = fe(E, RI);
      f(P, D), h(P, D, Qe.View), v(P, D, b({
        mode: Qe.Edit
      }, L));
    }, [
      f,
      h,
      v
    ]), $ = Be(async (E) => {
      const { id: P, field: D, deleteValue: L, initialValue: z } = E, _ = e.current.getCellValue(P, D);
      let j = _;
      L ? j = ws(e.current.getColumn(D)) : z && (j = z);
      const V = e.current.getColumn(D), K = !!V.preProcessEditCellProps && L;
      let W = {
        value: j,
        error: false,
        isProcessingProps: K
      };
      if (R(P, D, W), e.current.setCellFocus(P, D), K && (W = await Promise.resolve(V.preProcessEditCellProps({
        id: P,
        row: e.current.getRow(P),
        props: W,
        hasChanged: j !== _
      })), e.current.getCellMode(P, D) === Qe.Edit)) {
        const U = bt(e.current.state);
        R(P, D, b({}, W, {
          value: U[P][D].value,
          isProcessingProps: false
        }));
      }
    }), y = c.useCallback((E) => {
      const { id: P, field: D } = E, L = fe(E, $I);
      h(P, D, Qe.Edit), v(P, D, b({
        mode: Qe.View
      }, L));
    }, [
      h,
      v
    ]), C = Be(async (E) => {
      const { id: P, field: D, ignoreModifications: L, cellToFocusAfter: z = "none" } = E;
      h(P, D, Qe.Edit), e.current.runPendingEditCellValueMutation(P, D);
      const _ = () => {
        R(P, D, null), v(P, D, null), z !== "none" && e.current.moveFocusToRelativeCell(P, D, z);
      };
      if (L) {
        _();
        return;
      }
      const j = bt(e.current.state), { error: V, isProcessingProps: K } = j[P][D];
      if (V || K) {
        l.current[P][D].mode = Qe.Edit, v(P, D, {
          mode: Qe.Edit
        });
        return;
      }
      const W = e.current.getRowWithUpdatedValuesFromCellEditing(P, D);
      if (s) {
        const U = (B) => {
          l.current[P][D].mode = Qe.Edit, v(P, D, {
            mode: Qe.Edit
          }), a && a(B);
        };
        try {
          const B = e.current.getRow(P);
          Promise.resolve(s(W, B, {
            rowId: P
          })).then((te) => {
            e.current.updateRows([
              te
            ]), _();
          }).catch(U);
        } catch (B) {
          U(B);
        }
      } else e.current.updateRows([
        W
      ]), _();
    }), M = c.useCallback(async (E) => {
      var _a2, _b2;
      const { id: P, field: D, value: L, debounceMs: z, unstable_skipValueParser: _ } = E;
      f(P, D), h(P, D, Qe.Edit);
      const j = e.current.getColumn(D), V = e.current.getRow(P);
      let K = L;
      j.valueParser && !_ && (K = j.valueParser(L, V, j, e));
      let W = bt(e.current.state), U = b({}, W[P][D], {
        value: K,
        changeReason: z ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      if (j.preProcessEditCellProps) {
        const B = L !== W[P][D].value;
        U = b({}, U, {
          isProcessingProps: true
        }), R(P, D, U), U = await Promise.resolve(j.preProcessEditCellProps({
          id: P,
          row: V,
          props: U,
          hasChanged: B
        }));
      }
      return e.current.getCellMode(P, D) === Qe.View ? false : (W = bt(e.current.state), U = b({}, U, {
        isProcessingProps: false
      }), U.value = j.preProcessEditCellProps ? W[P][D].value : K, R(P, D, U), W = bt(e.current.state), !((_b2 = (_a2 = W[P]) == null ? void 0 : _a2[D]) == null ? void 0 : _b2.error));
    }, [
      e,
      f,
      h,
      R
    ]), T = c.useCallback((E, P) => {
      const D = e.current.getColumn(P), L = bt(e.current.state), z = e.current.getRow(E);
      if (!L[E] || !L[E][P]) return e.current.getRow(E);
      const { value: _ } = L[E][P];
      return D.valueSetter ? D.valueSetter(_, z, D, e) : b({}, z, {
        [P]: _
      });
    }, [
      e
    ]), O = {
      getCellMode: F,
      startCellEditMode: A,
      stopCellEditMode: y
    }, G = {
      setCellEditingEditCellValue: M,
      getRowWithUpdatedValuesFromCellEditing: T
    };
    ke(e, O, "public"), ke(e, G, "private"), c.useEffect(() => {
      i && H(i);
    }, [
      i,
      H
    ]), St(() => {
      const E = Zt(e), P = l.current;
      l.current = Uc(n), Object.entries(n).forEach(([D, L]) => {
        Object.entries(L).forEach(([z, _]) => {
          var _a2, _b2;
          const j = ((_b2 = (_a2 = P[D]) == null ? void 0 : _a2[z]) == null ? void 0 : _b2.mode) || Qe.View, V = E[D] ? e.current.getRowId(E[D]) : D;
          _.mode === Qe.Edit && j === Qe.View ? $(b({
            id: V,
            field: z
          }, _)) : _.mode === Qe.View && j === Qe.Edit && C(b({
            id: V,
            field: z
          }, _));
        });
      });
    }, [
      e,
      n,
      $,
      C
    ]);
  }, LI = [
    "id"
  ], jI = [
    "id"
  ], AI = (e, t) => {
    const [n, o] = c.useState({}), r = c.useRef(n), l = c.useRef({}), s = c.useRef({}), a = c.useRef(void 0), i = c.useRef(null), { processRowUpdate: d, onProcessRowUpdateError: u, rowModesModel: f, onRowModesModelChange: h } = t, g = (_) => (...j) => {
      t.editMode === Sn.Row && _(...j);
    }, m = c.useCallback((_, j) => {
      const V = e.current.getCellParams(_, j);
      if (!e.current.isCellEditable(V)) throw new Error(`MUI X: The cell with id=${_} and field=${j} is not editable.`);
    }, [
      e
    ]), x = c.useCallback((_, j) => {
      if (e.current.getRowMode(_) !== j) throw new Error(`MUI X: The row with id=${_} is not in ${j} mode.`);
    }, [
      e
    ]), I = c.useCallback((_) => {
      const j = bt(e.current.state);
      return Object.values(j[_]).some((V) => V.error);
    }, [
      e
    ]), S = c.useCallback((_, j) => {
      if (!_.isEditable || e.current.getRowMode(_.id) === nt.Edit) return;
      const V = e.current.getRowParams(_.id), K = b({}, V, {
        field: _.field,
        reason: Ln.cellDoubleClick
      });
      e.current.publishEvent("rowEditStart", K, j);
    }, [
      e
    ]), w = c.useCallback((_) => {
      i.current = _;
    }, []), F = c.useCallback((_, j) => {
      _.isEditable && e.current.getRowMode(_.id) !== nt.View && (i.current = null, a.current = setTimeout(() => {
        var _a2;
        if (((_a2 = i.current) == null ? void 0 : _a2.id) !== _.id) {
          if (!e.current.getRow(_.id) || e.current.getRowMode(_.id) === nt.View || I(_.id)) return;
          const V = e.current.getRowParams(_.id), K = b({}, V, {
            field: _.field,
            reason: Cn.rowFocusOut
          });
          e.current.publishEvent("rowEditStop", K, j);
        }
      }));
    }, [
      e,
      I
    ]);
    c.useEffect(() => () => {
      clearTimeout(a.current);
    }, []);
    const H = c.useCallback((_, j) => {
      if (_.cellMode === nt.Edit) {
        if (j.which === 229) return;
        let V;
        if (j.key === "Escape") V = Cn.escapeKeyDown;
        else if (j.key === "Enter") V = Cn.enterKeyDown;
        else if (j.key === "Tab") {
          const K = Ho(e).filter((W) => e.current.getColumn(W).type === Cl ? true : e.current.isCellEditable(e.current.getCellParams(_.id, W)));
          if (j.shiftKey ? _.field === K[0] && (V = Cn.shiftTabKeyDown) : _.field === K[K.length - 1] && (V = Cn.tabKeyDown), j.preventDefault(), !V) {
            const W = K.findIndex((B) => B === _.field), U = K[j.shiftKey ? W - 1 : W + 1];
            e.current.setCellFocus(_.id, U);
          }
        }
        if (V) {
          if (V !== Cn.escapeKeyDown && I(_.id)) return;
          const K = b({}, e.current.getRowParams(_.id), {
            reason: V,
            field: _.field
          });
          e.current.publishEvent("rowEditStop", K, j);
        }
      } else if (_.isEditable) {
        let V;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: j,
          cellParams: _,
          editMode: "row"
        })) return;
        if (Zu(j) || td(j) ? V = Ln.printableKeyDown : j.key === "Enter" ? V = Ln.enterKeyDown : (j.key === "Backspace" || j.key === "Delete") && (V = Ln.deleteKeyDown), V) {
          const W = e.current.getRowParams(_.id), U = b({}, W, {
            field: _.field,
            reason: V
          });
          e.current.publishEvent("rowEditStart", U, j);
        }
      }
    }, [
      e,
      I
    ]), v = c.useCallback((_) => {
      const { id: j, field: V, reason: K } = _, W = {
        id: j,
        fieldToFocus: V
      };
      (K === Ln.printableKeyDown || K === Ln.deleteKeyDown) && (W.deleteValue = !!V), e.current.startRowEditMode(W);
    }, [
      e
    ]), R = c.useCallback((_) => {
      const { id: j, reason: V, field: K } = _;
      e.current.runPendingEditCellValueMutation(j);
      let W;
      V === Cn.enterKeyDown ? W = "below" : V === Cn.tabKeyDown ? W = "right" : V === Cn.shiftTabKeyDown && (W = "left");
      const U = V === "escapeKeyDown";
      e.current.stopRowEditMode({
        id: j,
        ignoreModifications: U,
        field: K,
        cellToFocusAfter: W
      });
    }, [
      e
    ]);
    re(e, "cellDoubleClick", g(S)), re(e, "cellFocusIn", g(w)), re(e, "cellFocusOut", g(F)), re(e, "cellKeyDown", g(H)), re(e, "rowEditStart", g(v)), re(e, "rowEditStop", g(R)), Je(e, "rowEditStart", t.onRowEditStart), Je(e, "rowEditStop", t.onRowEditStop);
    const A = c.useCallback((_) => Bu(e, {
      rowId: _,
      editMode: t.editMode
    }) ? nt.Edit : nt.View, [
      e,
      t.editMode
    ]), $ = Be((_) => {
      const j = _ !== t.rowModesModel;
      h && j && h(_, {
        api: e.current
      }), !(t.rowModesModel && j) && (o(_), r.current = _, e.current.publishEvent("rowModesModelChange", _));
    }), y = c.useCallback((_, j) => {
      const V = b({}, r.current);
      j !== null ? V[_] = b({}, j) : delete V[_], $(V);
    }, [
      $
    ]), C = c.useCallback((_, j) => {
      e.current.setState((V) => {
        const K = b({}, V.editRows);
        return j !== null ? K[_] = j : delete K[_], b({}, V, {
          editRows: K
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), M = c.useCallback((_, j, V) => {
      e.current.setState((K) => {
        const W = b({}, K.editRows);
        return V !== null ? W[_] = b({}, W[_], {
          [j]: b({}, V)
        }) : (delete W[_][j], Object.keys(W[_]).length === 0 && delete W[_]), b({}, K, {
          editRows: W
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), T = c.useCallback((_) => {
      const { id: j } = _, V = fe(_, LI);
      x(j, nt.View), y(j, b({
        mode: nt.Edit
      }, V));
    }, [
      x,
      y
    ]), O = Be((_) => {
      const { id: j, fieldToFocus: V, deleteValue: K, initialValue: W } = _, U = e.current.getRow(j), B = rn(e), te = B.reduce((J, ne) => {
        const ce = ne.field;
        if (!e.current.getCellParams(j, ce).isEditable) return J;
        const Y = e.current.getColumn(ce);
        let oe = e.current.getCellValue(j, ce);
        return V === ce && (K || W) && (K ? oe = ws(Y) : W && (oe = W)), J[ce] = {
          value: oe,
          error: false,
          isProcessingProps: Y.editable && !!Y.preProcessEditCellProps && K
        }, J;
      }, {});
      s.current[j] = U, C(j, te), V && e.current.setCellFocus(j, V), B.filter((J) => e.current.getCellParams(j, J.field).isEditable && J.editable && !!J.preProcessEditCellProps && K).forEach((J) => {
        const ne = J.field, ce = e.current.getCellValue(j, ne), Ce = K ? ws(J) : W ?? ce;
        Promise.resolve(J.preProcessEditCellProps({
          id: j,
          row: U,
          props: te[ne],
          hasChanged: Ce !== ce
        })).then((Y) => {
          if (e.current.getRowMode(j) === nt.Edit) {
            const oe = bt(e.current.state);
            M(j, ne, b({}, Y, {
              value: oe[j][ne].value,
              isProcessingProps: false
            }));
          }
        });
      });
    }), G = c.useCallback((_) => {
      const { id: j } = _, V = fe(_, jI);
      x(j, nt.Edit), y(j, b({
        mode: nt.View
      }, V));
    }, [
      x,
      y
    ]), E = Be((_) => {
      const { id: j, ignoreModifications: V, field: K, cellToFocusAfter: W = "none" } = _;
      e.current.runPendingEditCellValueMutation(j);
      const U = () => {
        W !== "none" && K && e.current.moveFocusToRelativeCell(j, K, W), C(j, null), y(j, null), delete s.current[j];
      };
      if (V) {
        U();
        return;
      }
      const B = bt(e.current.state), te = s.current[j];
      if (Object.values(B[j]).some((ce) => ce.isProcessingProps)) {
        l.current[j].mode = nt.Edit;
        return;
      }
      if (I(j)) {
        l.current[j].mode = nt.Edit, y(j, {
          mode: nt.Edit
        });
        return;
      }
      const ne = e.current.getRowWithUpdatedValuesFromRowEditing(j);
      if (d) {
        const ce = (Ce) => {
          l.current[j] && (l.current[j].mode = nt.Edit, y(j, {
            mode: nt.Edit
          })), u && u(Ce);
        };
        try {
          Promise.resolve(d(ne, te, {
            rowId: j
          })).then((Ce) => {
            e.current.updateRows([
              Ce
            ]), U();
          }).catch(ce);
        } catch (Ce) {
          ce(Ce);
        }
      } else e.current.updateRows([
        ne
      ]), U();
    }), P = c.useCallback((_) => {
      const { id: j, field: V, value: K, debounceMs: W, unstable_skipValueParser: U } = _;
      m(j, V);
      const B = e.current.getColumn(V), te = e.current.getRow(j);
      let J = K;
      B.valueParser && !U && (J = B.valueParser(K, te, B, e));
      let ne = bt(e.current.state), ce = b({}, ne[j][V], {
        value: J,
        changeReason: W ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      return B.preProcessEditCellProps || M(j, V, ce), new Promise((Ce) => {
        const Y = [];
        if (B.preProcessEditCellProps) {
          const oe = ce.value !== ne[j][V].value;
          ce = b({}, ce, {
            isProcessingProps: true
          }), M(j, V, ce);
          const he = ne[j], Z = fe(he, [
            V
          ].map(mr)), Ie = Promise.resolve(B.preProcessEditCellProps({
            id: j,
            row: te,
            props: ce,
            hasChanged: oe,
            otherFieldsProps: Z
          })).then((ee) => {
            if (e.current.getRowMode(j) === nt.View) {
              Ce(false);
              return;
            }
            ne = bt(e.current.state), ee = b({}, ee, {
              isProcessingProps: false
            }), ee.value = B.preProcessEditCellProps ? ne[j][V].value : J, M(j, V, ee);
          });
          Y.push(Ie);
        }
        Object.entries(ne[j]).forEach(([oe, he]) => {
          if (oe === V) return;
          const Z = e.current.getColumn(oe);
          if (!Z.preProcessEditCellProps) return;
          he = b({}, he, {
            isProcessingProps: true
          }), M(j, oe, he), ne = bt(e.current.state);
          const Ie = ne[j], ee = fe(Ie, [
            oe
          ].map(mr)), ye = Promise.resolve(Z.preProcessEditCellProps({
            id: j,
            row: te,
            props: he,
            hasChanged: false,
            otherFieldsProps: ee
          })).then((xe) => {
            if (e.current.getRowMode(j) === nt.View) {
              Ce(false);
              return;
            }
            xe = b({}, xe, {
              isProcessingProps: false
            }), M(j, oe, xe);
          });
          Y.push(ye);
        }), Promise.all(Y).then(() => {
          e.current.getRowMode(j) === nt.Edit ? (ne = bt(e.current.state), Ce(!ne[j][V].error)) : Ce(false);
        });
      });
    }, [
      e,
      m,
      M
    ]), D = c.useCallback((_) => {
      const j = bt(e.current.state), V = e.current.getRow(_);
      if (!j[_]) return e.current.getRow(_);
      let K = b({}, s.current[_], V);
      return Object.entries(j[_]).forEach(([W, U]) => {
        const B = e.current.getColumn(W);
        (B == null ? void 0 : B.valueSetter) ? K = B.valueSetter(U.value, K, B, e) : K[W] = U.value;
      }), K;
    }, [
      e
    ]), L = {
      getRowMode: A,
      startRowEditMode: T,
      stopRowEditMode: G
    }, z = {
      setRowEditingEditCellValue: P,
      getRowWithUpdatedValuesFromRowEditing: D
    };
    ke(e, L, "public"), ke(e, z, "private"), c.useEffect(() => {
      f && $(f);
    }, [
      f,
      $
    ]), St(() => {
      const _ = Zt(e), j = l.current;
      l.current = Uc(n);
      const V = /* @__PURE__ */ new Set([
        ...Object.keys(n),
        ...Object.keys(j)
      ]);
      Array.from(V).forEach((K) => {
        var _a2;
        const W = n[K] ?? {
          mode: nt.View
        }, U = ((_a2 = j[K]) == null ? void 0 : _a2.mode) || nt.View, B = _[K] ? e.current.getRowId(_[K]) : K;
        W.mode === nt.Edit && U === nt.View ? O(b({
          id: B
        }, W)) : W.mode === nt.View && U === nt.Edit && E(b({
          id: B
        }, W));
      });
    }, [
      e,
      n,
      O,
      E
    ]);
  }, zI = (e) => b({}, e, {
    editRows: {}
  }), GI = (e, t) => {
    HI(e, t), AI(e, t);
    const n = c.useRef({}), { isCellEditable: o } = t, r = c.useCallback((h) => To(h.rowNode) || !h.colDef.editable || !h.colDef.renderEditCell ? false : o ? o(h) : true, [
      o
    ]), l = (h, g, m, x) => {
      if (!m) {
        x();
        return;
      }
      if (n.current[h] || (n.current[h] = {}), n.current[h][g]) {
        const [w] = n.current[h][g];
        clearTimeout(w);
      }
      const I = () => {
        const [w] = n.current[h][g];
        clearTimeout(w), x(), delete n.current[h][g];
      }, S = setTimeout(() => {
        x(), delete n.current[h][g];
      }, m);
      n.current[h][g] = [
        S,
        I
      ];
    };
    c.useEffect(() => {
      const h = n.current;
      return () => {
        Object.entries(h).forEach(([g, m]) => {
          Object.keys(m).forEach((x) => {
            const [I] = h[g][x];
            clearTimeout(I), delete h[g][x];
          });
        });
      };
    }, []);
    const s = c.useCallback((h, g) => {
      if (n.current[h]) {
        if (!g) Object.keys(n.current[h]).forEach((m) => {
          const [, x] = n.current[h][m];
          x();
        });
        else if (n.current[h][g]) {
          const [, m] = n.current[h][g];
          m();
        }
      }
    }, []), a = c.useCallback((h) => {
      const { id: g, field: m, debounceMs: x } = h;
      return new Promise((I) => {
        l(g, m, x, async () => {
          const S = t.editMode === Sn.Row ? e.current.setRowEditingEditCellValue : e.current.setCellEditingEditCellValue;
          if (e.current.getCellMode(g, m) === Qe.Edit) {
            const w = await S(h);
            I(w);
          }
        });
      });
    }, [
      e,
      t.editMode
    ]), i = c.useCallback((h, g) => t.editMode === Sn.Cell ? e.current.getRowWithUpdatedValuesFromCellEditing(h, g) : e.current.getRowWithUpdatedValuesFromRowEditing(h), [
      e,
      t.editMode
    ]), d = c.useCallback((h, g) => {
      var _a2;
      return ((_a2 = bt(e.current.state)[h]) == null ? void 0 : _a2[g]) ?? null;
    }, [
      e
    ]), u = {
      isCellEditable: r,
      setEditCellValue: a,
      getRowWithUpdatedValues: i,
      unstable_getEditCellMeta: d
    }, f = {
      runPendingEditCellValueMutation: s
    };
    ke(e, u, "public"), ke(e, f, "private");
  }, _I = (e, t, n) => {
    const o = !!t.unstable_dataSource;
    return n.current.caches.rows = qr({
      rows: o ? [] : t.rows,
      getRowId: t.getRowId,
      loading: t.loading,
      rowCount: t.rowCount
    }), b({}, e, {
      rows: ru({
        apiRef: n,
        rowCountProp: t.rowCount,
        loadingProp: o ? true : t.loading,
        previousTree: null,
        previousTreeDepths: null
      })
    });
  }, VI = (e, t) => {
    const n = wt(e, "useGridRows"), o = c.useRef(Date.now()), r = c.useRef(t.rowCount), l = Nt(), s = c.useCallback((E) => {
      const P = Zt(e)[E];
      if (P) return P;
      const D = e.current.getRowNode(E);
      return D && To(D) ? {
        [Fo]: E
      } : null;
    }, [
      e
    ]), a = c.useCallback((E) => kr(e.current.state, E), [
      e
    ]), i = c.useCallback(({ cache: E, throttle: P }) => {
      const D = () => {
        o.current = Date.now(), e.current.setState((z) => b({}, z, {
          rows: ru({
            apiRef: e,
            rowCountProp: t.rowCount,
            loadingProp: t.loading,
            previousTree: ht(e),
            previousTreeDepths: ea(e),
            previousGroupsToFetch: Eb(e)
          })
        })), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
      };
      if (l.clear(), e.current.caches.rows = E, !P) {
        D();
        return;
      }
      const L = t.throttleRowsMs - (Date.now() - o.current);
      if (L > 0) {
        l.start(L, D);
        return;
      }
      D();
    }, [
      t.throttleRowsMs,
      t.rowCount,
      t.loading,
      e,
      l
    ]), d = c.useCallback((E) => {
      n.debug(`Updating all rows, new length ${E.length}`);
      const P = qr({
        rows: E,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), D = e.current.caches.rows;
      P.rowsBeforePartialUpdates = D.rowsBeforePartialUpdates, i({
        cache: P,
        throttle: true
      });
    }, [
      n,
      t.getRowId,
      t.loading,
      t.rowCount,
      i,
      e
    ]), u = c.useCallback((E) => {
      if (t.signature === on.DataGrid && E.length > 1) throw new Error([
        "MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      const P = da(e, E, t.getRowId), D = ua({
        updates: P,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows
      });
      i({
        cache: D,
        throttle: true
      });
    }, [
      t.signature,
      t.getRowId,
      i,
      e
    ]), f = c.useCallback((E, P) => {
      const D = da(e, E, t.getRowId), L = ua({
        updates: D,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows,
        groupKeys: P ?? []
      });
      i({
        cache: L,
        throttle: false
      });
    }, [
      t.getRowId,
      i,
      e
    ]), h = c.useCallback((E) => {
      E !== t.loading && (n.debug(`Setting loading to ${E}`), e.current.setState((P) => b({}, P, {
        rows: b({}, P.rows, {
          loading: E
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = E);
    }, [
      t.loading,
      e,
      n
    ]), g = c.useCallback(() => {
      const E = Jo(e), P = Zt(e);
      return new Map(E.map((D) => [
        D,
        P[D] ?? {}
      ]));
    }, [
      e
    ]), m = c.useCallback(() => Sr(e), [
      e
    ]), x = c.useCallback(() => Jo(e), [
      e
    ]), I = c.useCallback((E) => {
      const P = e.current.getRow(E), { rowToIndexMap: D } = Nn(e);
      return D.get(P);
    }, [
      e
    ]), S = c.useCallback((E, P) => {
      const D = e.current.getRowNode(E);
      if (!D) throw new Error(`MUI X: No row with id #${E} found.`);
      if (D.type !== "group") throw new Error("MUI X: Only group nodes can be expanded or collapsed.");
      const L = b({}, D, {
        childrenExpanded: P
      });
      e.current.setState((z) => b({}, z, {
        rows: b({}, z.rows, {
          tree: b({}, z.rows.tree, {
            [E]: L
          })
        })
      })), e.current.forceUpdate(), e.current.publishEvent("rowExpansionChange", L);
    }, [
      e
    ]), w = c.useCallback((E) => ht(e)[E] ?? null, [
      e
    ]), F = c.useCallback(({ skipAutoGeneratedRows: E = true, groupId: P, applySorting: D, applyFiltering: L }) => {
      const z = ht(e);
      let _;
      if (D) {
        const j = z[P];
        if (!j) return [];
        const V = jo(e);
        _ = [];
        const K = V.findIndex((W) => W === P) + 1;
        for (let W = K; W < V.length && z[V[W]].depth > j.depth; W += 1) {
          const U = V[W];
          (!E || !To(z[U])) && _.push(U);
        }
      } else _ = Ws(z, P, E);
      if (L) {
        const j = Ao(e);
        _ = _.filter((V) => j[V] !== false);
      }
      return _;
    }, [
      e
    ]), H = c.useCallback((E, P) => {
      const D = e.current.getRowNode(E);
      if (!D) throw new Error(`MUI X: No row with id #${E} found.`);
      if (D.parent !== Pt) throw new Error("MUI X: The row reordering do not support reordering of grouped rows yet.");
      if (D.type !== "leaf") throw new Error("MUI X: The row reordering do not support reordering of footer or grouping rows.");
      e.current.setState((L) => {
        const z = ht(L, e.current.instanceId)[Pt], _ = z.children, j = _.findIndex((K) => K === E);
        if (j === -1 || j === P) return L;
        n.debug(`Moving row ${E} to index ${P}`);
        const V = [
          ..._
        ];
        return V.splice(P, 0, V.splice(j, 1)[0]), b({}, L, {
          rows: b({}, L.rows, {
            tree: b({}, L.rows.tree, {
              [Pt]: b({}, z, {
                children: V
              })
            })
          })
        });
      }), e.current.publishEvent("rowsSet");
    }, [
      e,
      n
    ]), v = c.useCallback((E, P) => {
      if (t.signature === on.DataGrid && P.length > 1) throw new Error([
        "MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      if (P.length === 0) return;
      if (oo(e) > 1) throw new Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
      const L = b({}, ht(e)), z = b({}, Zt(e)), _ = b({}, Zi(e)), j = L[Pt], V = [
        ...j.children
      ], K = /* @__PURE__ */ new Set();
      for (let U = 0; U < P.length; U += 1) {
        const B = P[U], te = wl(B, t.getRowId, "A row was provided without id when calling replaceRows()."), [J] = V.splice(E + U, 1, te);
        K.has(J) || (delete z[J], delete _[J], delete L[J]);
        const ne = {
          id: te,
          depth: 0,
          parent: Pt,
          type: "leaf",
          groupingKey: null
        };
        z[te] = B, _[te] = te, L[te] = ne, K.add(te);
      }
      L[Pt] = b({}, j, {
        children: V
      });
      const W = V.filter((U) => {
        var _a2;
        return ((_a2 = L[U]) == null ? void 0 : _a2.type) === "leaf";
      });
      e.current.caches.rows.dataRowIdToModelLookup = z, e.current.caches.rows.dataRowIdToIdLookup = _, e.current.setState((U) => b({}, U, {
        rows: b({}, U.rows, {
          dataRowIdToModelLookup: z,
          dataRowIdToIdLookup: _,
          dataRowIds: W,
          tree: L
        })
      })), e.current.publishEvent("rowsSet");
    }, [
      e,
      t.signature,
      t.getRowId
    ]), R = {
      getRow: s,
      setLoading: h,
      getRowId: a,
      getRowModels: g,
      getRowsCount: m,
      getAllRowIds: x,
      setRows: d,
      updateRows: u,
      getRowNode: w,
      getRowIndexRelativeToVisibleRows: I,
      unstable_replaceRows: v
    }, A = {
      setRowIndex: H,
      setRowChildrenExpansion: S,
      getRowGroupChildren: F
    }, $ = {
      updateServerRows: f
    }, y = c.useCallback(() => {
      n.info("Row grouping pre-processing have changed, regenerating the row tree");
      let E;
      e.current.caches.rows.rowsBeforePartialUpdates === t.rows ? E = b({}, e.current.caches.rows, {
        updates: {
          type: "full",
          rows: Jo(e)
        }
      }) : E = qr({
        rows: t.rows,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), i({
        cache: E,
        throttle: false
      });
    }, [
      n,
      e,
      t.rows,
      t.getRowId,
      t.loading,
      t.rowCount,
      i
    ]), C = In(() => t.unstable_dataSource), M = c.useCallback((E) => {
      if (t.unstable_dataSource && t.unstable_dataSource !== C.current) {
        C.current = t.unstable_dataSource;
        return;
      }
      E === "rowTreeCreation" && y();
    }, [
      y,
      C,
      t.unstable_dataSource
    ]), T = c.useCallback(() => {
      e.current.getActiveStrategy("rowTree") !== Fb(e) && y();
    }, [
      e,
      y
    ]);
    re(e, "activeStrategyProcessorChange", M), re(e, "strategyAvailabilityChange", T);
    const O = c.useCallback(() => {
      e.current.setState((E) => {
        const P = e.current.unstable_applyPipeProcessors("hydrateRows", {
          tree: ht(E, e.current.instanceId),
          treeDepths: ea(E, e.current.instanceId),
          dataRowIds: Jo(E, e.current.instanceId),
          dataRowIdToModelLookup: Zt(E, e.current.instanceId),
          dataRowIdToIdLookup: Zi(E, e.current.instanceId)
        });
        return b({}, E, {
          rows: b({}, E.rows, P, {
            totalTopLevelRowCount: ou({
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
    ai(e, "hydrateRows", O), ke(e, R, "public"), ke(e, A, t.signature === on.DataGrid ? "private" : "public"), ke(e, $, "private");
    const G = c.useRef(true);
    c.useEffect(() => {
      var _a2;
      if (G.current) {
        G.current = false;
        return;
      }
      let E = false;
      t.rowCount !== r.current && (E = true, r.current = t.rowCount);
      const P = e.current.caches.rows.rowsBeforePartialUpdates === t.rows, D = e.current.caches.rows.loadingPropBeforePartialUpdates === t.loading, L = e.current.caches.rows.rowCountPropBeforePartialUpdates === t.rowCount;
      P && (D || (e.current.setState((z) => b({}, z, {
        rows: b({}, z.rows, {
          loading: t.loading
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = t.loading, e.current.forceUpdate()), L || (e.current.setState((z) => b({}, z, {
        rows: b({}, z.rows, {
          totalRowCount: Math.max(t.rowCount || 0, z.rows.totalRowCount),
          totalTopLevelRowCount: Math.max(t.rowCount || 0, z.rows.totalTopLevelRowCount)
        })
      })), e.current.caches.rows.rowCountPropBeforePartialUpdates = t.rowCount, e.current.forceUpdate()), !E) || (n.debug(`Updating all rows, new length ${(_a2 = t.rows) == null ? void 0 : _a2.length}`), i({
        cache: qr({
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
      n,
      i,
      e
    ]);
  }, NI = (e) => {
    const t = {
      [Pt]: b({}, uC(), {
        children: e
      })
    };
    for (let n = 0; n < e.length; n += 1) {
      const o = e[n];
      t[o] = {
        id: o,
        depth: 0,
        parent: Pt,
        type: "leaf",
        groupingKey: null
      };
    }
    return {
      groupingName: to,
      tree: t,
      treeDepths: {
        0: e.length
      },
      dataRowIds: e
    };
  }, BI = ({ previousTree: e, actions: t }) => {
    const n = b({}, e), o = {};
    for (let s = 0; s < t.remove.length; s += 1) {
      const a = t.remove[s];
      o[a] = true, delete n[a];
    }
    for (let s = 0; s < t.insert.length; s += 1) {
      const a = t.insert[s];
      n[a] = {
        id: a,
        depth: 0,
        parent: Pt,
        type: "leaf",
        groupingKey: null
      };
    }
    const r = n[Pt];
    let l = [
      ...r.children,
      ...t.insert
    ];
    return Object.values(o).length && (l = l.filter((s) => !o[s])), n[Pt] = b({}, r, {
      children: l
    }), {
      groupingName: to,
      tree: n,
      treeDepths: {
        0: l.length
      },
      dataRowIds: l
    };
  }, WI = (e) => e.updates.type === "full" ? NI(e.updates.rows) : BI({
    previousTree: e.previousTree,
    actions: e.updates.actions
  }), UI = (e) => {
    gl(e, to, "rowTreeCreation", WI);
  };
  class ql extends Error {
  }
  function KI(e, t) {
    var _a2;
    const n = c.useCallback((m) => ({
      field: m,
      colDef: e.current.getColumn(m)
    }), [
      e
    ]), o = c.useCallback((m) => {
      const x = e.current.getRow(m);
      if (!x) throw new ql(`No row with id #${m} found`);
      return {
        id: m,
        columns: e.current.getAllColumns(),
        row: x
      };
    }, [
      e
    ]), r = c.useCallback((m, x, I, { cellMode: S, colDef: w, hasFocus: F, rowNode: H, tabIndex: v }) => {
      const R = I[x], A = (w == null ? void 0 : w.valueGetter) ? w.valueGetter(R, I, w, e) : R, $ = {
        id: m,
        field: x,
        row: I,
        rowNode: H,
        colDef: w,
        cellMode: S,
        hasFocus: F,
        tabIndex: v,
        value: A,
        formattedValue: A,
        isEditable: false,
        api: e.current
      };
      return w && w.valueFormatter && ($.formattedValue = w.valueFormatter(A, I, w, e)), $.isEditable = w && e.current.isCellEditable($), $;
    }, [
      e
    ]), l = c.useCallback((m, x) => {
      var _a3;
      const I = e.current.getRow(m), S = e.current.getRowNode(m);
      if (!I || !S) throw new ql(`No row with id #${m} found`);
      const w = $t(e), F = Xs(e), H = e.current.getCellMode(m, x);
      return e.current.getCellParamsForRow(m, x, I, {
        colDef: t.unstable_listView && ((_a3 = t.unstable_listColumn) == null ? void 0 : _a3.field) === x ? Do(e.current.state) : e.current.getColumn(x),
        rowNode: S,
        hasFocus: w !== null && w.field === x && w.id === m,
        tabIndex: F && F.field === x && F.id === m ? 0 : -1,
        cellMode: H
      });
    }, [
      e,
      t.unstable_listView,
      (_a2 = t.unstable_listColumn) == null ? void 0 : _a2.field
    ]), s = c.useCallback((m, x) => {
      const I = e.current.getColumn(x), S = e.current.getRow(m);
      if (!S) throw new ql(`No row with id #${m} found`);
      return !I || !I.valueGetter ? S[x] : I.valueGetter(S[I.field], S, I, e);
    }, [
      e
    ]), a = c.useCallback((m, x) => {
      const I = x.field;
      if (!x || !x.valueGetter) return m[I];
      const S = m[x.field];
      return x.valueGetter(S, m, x, e);
    }, [
      e
    ]), i = c.useCallback((m, x) => {
      const I = a(m, x);
      return !x || !x.valueFormatter ? I : x.valueFormatter(I, m, x, e);
    }, [
      e,
      a
    ]), d = c.useCallback((m) => e.current.rootElementRef.current ? Kv(e.current.rootElementRef.current, m) : null, [
      e
    ]), u = c.useCallback((m) => e.current.rootElementRef.current ? qv(e.current.rootElementRef.current, m) : null, [
      e
    ]), f = c.useCallback((m, x) => e.current.rootElementRef.current ? Yv(e.current.rootElementRef.current, {
      id: m,
      field: x
    }) : null, [
      e
    ]), h = {
      getCellValue: s,
      getCellParams: l,
      getCellElement: f,
      getRowValue: a,
      getRowFormattedValue: i,
      getRowParams: o,
      getRowElement: u,
      getColumnHeaderParams: n,
      getColumnHeaderElement: d
    }, g = {
      getCellParamsForRow: r
    };
    ke(e, h, "public"), ke(e, g, "private");
  }
  const id = (e, t) => e == null || Array.isArray(e) ? e : t && t[0] === e ? t : [
    e
  ], qI = (e, t) => b({}, e, {
    rowSelection: t.rowSelection ? id(t.rowSelectionModel) ?? [] : []
  }), YI = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const n = wt(e, "useGridSelection"), o = c.useCallback((L) => (...z) => {
      t.rowSelection && L(...z);
    }, [
      t.rowSelection
    ]), r = t.signature !== on.DataGrid && (((_a2 = t.rowSelectionPropagation) == null ? void 0 : _a2.parents) || ((_b2 = t.rowSelectionPropagation) == null ? void 0 : _b2.descendants)), l = c.useMemo(() => id(t.rowSelectionModel, Vt(e.current.state)), [
      e,
      t.rowSelectionModel
    ]), s = c.useRef(null);
    e.current.registerControlState({
      stateId: "rowSelection",
      propModel: l,
      propOnChange: t.onRowSelectionModelChange,
      stateSelector: Vt,
      changeEvent: "rowSelectionChange"
    });
    const { checkboxSelection: a, disableRowSelectionOnClick: i, isRowSelectable: d } = t, u = Ys(t), f = X(e, ht), h = X(e, oo) > 1, g = c.useCallback((L) => {
      let z = L;
      const _ = s.current ?? L, j = e.current.isRowSelected(L);
      if (j) {
        const V = So(e), K = V.findIndex((U) => U === _), W = V.findIndex((U) => U === z);
        if (K === W) return;
        K > W ? z = V[W + 1] : z = V[W - 1];
      }
      s.current = L, e.current.selectRowRange({
        startId: _,
        endId: z
      }, !j);
    }, [
      e
    ]), m = c.useCallback((L) => {
      if (t.signature === on.DataGrid && !u && Array.isArray(L) && L.length > 1) throw new Error([
        "MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."
      ].join(`
`));
      Vt(e.current.state) !== L && (n.debug("Setting selection model"), e.current.setState((_) => b({}, _, {
        rowSelection: t.rowSelection ? L : []
      })), e.current.forceUpdate());
    }, [
      e,
      n,
      t.rowSelection,
      t.signature,
      u
    ]), x = c.useCallback((L) => Vt(e.current.state).includes(L), [
      e
    ]), I = c.useCallback((L) => {
      if (t.rowSelection === false || d && !d(e.current.getRowParams(L))) return false;
      const z = ht(e)[L];
      return !((z == null ? void 0 : z.type) === "footer" || (z == null ? void 0 : z.type) === "pinnedRow");
    }, [
      e,
      t.rowSelection,
      d
    ]), S = c.useCallback(() => RC(e), [
      e
    ]), w = c.useCallback((L, z = true, _ = false) => {
      var _a3, _b3, _c3, _d3, _e2, _f3;
      if (e.current.isRowSelectable(L)) if (s.current = L, _) {
        n.debug(`Setting selection for row ${L}`);
        const j = [], V = (K) => {
          j.push(K);
        };
        z && (V(L), r && Yo(e, f, L, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, V)), e.current.setRowSelectionModel(j);
      } else {
        n.debug(`Toggling selection for row ${L}`);
        const j = Vt(e.current.state), V = new Set(j);
        V.delete(L);
        const K = (B) => {
          V.add(B);
        }, W = (B) => {
          V.delete(B);
        };
        z ? (K(L), r && Yo(e, f, L, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, K)) : r && pa(e, f, L, ((_e2 = t.rowSelectionPropagation) == null ? void 0 : _e2.descendants) ?? false, ((_f3 = t.rowSelectionPropagation) == null ? void 0 : _f3.parents) ?? false, W), (V.size < 2 || u) && e.current.setRowSelectionModel(Array.from(V));
      }
    }, [
      e,
      n,
      r,
      f,
      (_c2 = t.rowSelectionPropagation) == null ? void 0 : _c2.descendants,
      (_d2 = t.rowSelectionPropagation) == null ? void 0 : _d2.parents,
      u
    ]), F = c.useCallback((L, z = true, _ = false) => {
      n.debug("Setting selection for several rows");
      const j = L.filter((W) => e.current.isRowSelectable(W));
      let V;
      if (_) {
        if (z) {
          if (V = new Set(j), r) {
            const U = (B) => {
              V.add(B);
            };
            j.forEach((B) => {
              var _a3, _b3;
              Yo(e, f, B, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, U);
            });
          }
        } else V = /* @__PURE__ */ new Set();
        const W = Vn(e);
        if (V.size === Object.keys(W).length && Array.from(V).every((U) => W[U] === U)) return;
      } else {
        V = new Set(Object.values(Vn(e)));
        const W = (B) => {
          V.add(B);
        }, U = (B) => {
          V.delete(B);
        };
        j.forEach((B) => {
          var _a3, _b3, _c3, _d3;
          z ? (V.add(B), r && Yo(e, f, B, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, W)) : (U(B), r && pa(e, f, B, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, U));
        });
      }
      (V.size < 2 || u) && e.current.setRowSelectionModel(Array.from(V));
    }, [
      n,
      r,
      u,
      e,
      f,
      (_e = t.rowSelectionPropagation) == null ? void 0 : _e.descendants,
      (_f2 = t.rowSelectionPropagation) == null ? void 0 : _f2.parents
    ]), H = c.useCallback((L) => {
      var _a3, _b3;
      if (!h || !r || L.length === 0) return L;
      const z = new Set(L), _ = (j) => {
        z.add(j);
      };
      for (const j of L) Yo(e, f, j, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, _, z);
      return Array.from(z);
    }, [
      e,
      f,
      (_g2 = t.rowSelectionPropagation) == null ? void 0 : _g2.descendants,
      (_h2 = t.rowSelectionPropagation) == null ? void 0 : _h2.parents,
      h,
      r
    ]), v = c.useCallback(({ startId: L, endId: z }, _ = true, j = false) => {
      if (!e.current.getRow(L) || !e.current.getRow(z)) return;
      n.debug(`Expanding selection from row ${L} to row ${z}`);
      const V = So(e), K = V.indexOf(L), W = V.indexOf(z), [U, B] = K > W ? [
        W,
        K
      ] : [
        K,
        W
      ], te = V.slice(U, B + 1);
      e.current.selectRows(te, _, j);
    }, [
      e,
      n
    ]), R = {
      selectRow: w,
      setRowSelectionModel: m,
      getSelectedRows: S,
      isRowSelected: x,
      isRowSelectable: I
    }, A = {
      selectRows: F,
      selectRowRange: v,
      getPropagatedRowSelectionModel: H
    };
    ke(e, R, "public"), ke(e, A, t.signature === on.DataGrid ? "private" : "public");
    const $ = c.useRef(true), y = c.useCallback((L = false) => {
      var _a3;
      if ($.current) return;
      const z = Vt(e.current.state), _ = Zt(e), j = Ao(e), V = b({}, Vn(e)), K = (B) => t.filterMode === "server" ? !_[B] : !_[B] || j[B] === false;
      let W = false;
      z.forEach((B) => {
        var _a4;
        if (K(B)) {
          if (t.keepNonExistentRowsSelected) return;
          delete V[B], W = true;
          return;
        }
        if (!((_a4 = t.rowSelectionPropagation) == null ? void 0 : _a4.parents)) return;
        const te = f[B];
        if (te.type === "group") {
          if (te.isAutoGenerated) {
            delete V[B], W = true;
            return;
          }
          te.children.every((ne) => j[ne] === false) || (delete V[B], W = true);
        }
      });
      const U = h && ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.parents) && Object.keys(V).length > 0;
      if (W || U && !L) {
        const B = Object.values(V);
        U ? e.current.selectRows(B, true, true) : e.current.setRowSelectionModel(B);
      }
    }, [
      e,
      h,
      (_i2 = t.rowSelectionPropagation) == null ? void 0 : _i2.parents,
      t.keepNonExistentRowsSelected,
      t.filterMode,
      f
    ]), C = c.useCallback((L, z) => {
      const _ = z.metaKey || z.ctrlKey, j = !a && !_ && !qy(z), V = !u || j, K = e.current.isRowSelected(L);
      V ? e.current.selectRow(L, j ? true : !K, true) : e.current.selectRow(L, !K, false);
    }, [
      e,
      u,
      a
    ]), M = c.useCallback((L, z) => {
      var _a3, _b3;
      if (i) return;
      const _ = (_a3 = z.target.closest(`.${k.cell}`)) == null ? void 0 : _a3.getAttribute("data-field");
      _ === zo.field || _ === xl || _ && ((_b3 = e.current.getColumn(_)) == null ? void 0 : _b3.type) === Cl || ht(e)[L.id].type === "pinnedRow" || (z.shiftKey && u ? g(L.id) : C(L.id, z));
    }, [
      i,
      u,
      e,
      g,
      C
    ]), T = c.useCallback((L, z) => {
      var _a3;
      u && z.shiftKey && ((_a3 = window.getSelection()) == null ? void 0 : _a3.removeAllRanges());
    }, [
      u
    ]), O = c.useCallback((L, z) => {
      u && z.nativeEvent.shiftKey ? g(L.id) : e.current.selectRow(L.id, L.value, !u);
    }, [
      e,
      g,
      u
    ]), G = c.useCallback((L) => {
      const z = t.pagination && t.checkboxSelectionVisibleOnly && t.paginationMode === "client" ? Iu(e) : So(e);
      e.current.selectRows(z, L.value);
    }, [
      e,
      t.checkboxSelectionVisibleOnly,
      t.pagination,
      t.paginationMode
    ]), E = c.useCallback((L, z) => {
      if (e.current.getCellMode(L.id, L.field) !== Qe.Edit && !Tr(z)) {
        if (dl(z.key) && z.shiftKey) {
          const _ = $t(e);
          if (_ && _.id !== L.id) {
            z.preventDefault();
            const j = e.current.isRowSelected(_.id);
            if (!u) {
              e.current.selectRow(_.id, !j, true);
              return;
            }
            const V = e.current.getRowIndexRelativeToVisibleRows(_.id), K = e.current.getRowIndexRelativeToVisibleRows(L.id);
            let W, U;
            V > K ? j ? (W = K, U = V - 1) : (W = K, U = V) : j ? (W = V + 1, U = K) : (W = V, U = K);
            const te = Nn(e).rows.slice(W, U + 1).map((J) => J.id);
            e.current.selectRows(te, !j);
            return;
          }
        }
        if (z.key === " " && z.shiftKey) {
          z.preventDefault(), C(L.id, z);
          return;
        }
        String.fromCharCode(z.keyCode) === "A" && (z.ctrlKey || z.metaKey) && (z.preventDefault(), F(e.current.getAllRowIds(), true));
      }
    }, [
      e,
      C,
      F,
      u
    ]), P = Be(() => {
      if (!t.rowSelection) {
        e.current.setRowSelectionModel([]);
        return;
      }
      if (l === void 0) return;
      if (!r || !h || l.length === 0) {
        e.current.setRowSelectionModel(l);
        return;
      }
      const L = e.current.getPropagatedRowSelectionModel(l);
      if (L.length !== l.length || !L.every((z) => l.includes(z))) {
        e.current.setRowSelectionModel(L);
        return;
      }
      e.current.setRowSelectionModel(l);
    });
    re(e, "sortedRowsSet", o(() => y(true))), re(e, "filteredRowsSet", o(() => y())), re(e, "rowClick", o(M)), re(e, "rowSelectionCheckboxChange", o(O)), re(e, "headerSelectionCheckboxChange", G), re(e, "cellMouseDown", o(T)), re(e, "cellKeyDown", o(E)), c.useEffect(() => {
      P();
    }, [
      e,
      l,
      t.rowSelection,
      P
    ]);
    const D = l != null;
    c.useEffect(() => {
      if (D || !t.rowSelection) return;
      const L = Vt(e.current.state);
      if (I) {
        const z = L.filter((_) => I(_));
        z.length < L.length && e.current.setRowSelectionModel(z);
      }
    }, [
      e,
      I,
      D,
      t.rowSelection
    ]), c.useEffect(() => {
      if (!t.rowSelection || D) return;
      const L = Vt(e.current.state);
      !u && L.length > 1 && e.current.setRowSelectionModel([]);
    }, [
      e,
      u,
      a,
      D,
      t.rowSelection
    ]), c.useEffect(() => {
      o(y);
    }, [
      y,
      o
    ]), c.useEffect(() => {
      $.current && ($.current = false);
    }, []);
  }, XI = (e) => {
    const { classes: t } = e;
    return c.useMemo(() => ge({
      cellCheckbox: [
        "cellCheckbox"
      ],
      columnHeaderCheckbox: [
        "columnHeaderCheckbox"
      ]
    }, De, t), [
      t
    ]);
  }, QI = (e, t) => {
    const n = {
      classes: t.classes
    }, o = XI(n), r = c.useCallback((l) => {
      const s = b({}, zo, {
        cellClassName: o.cellCheckbox,
        headerClassName: o.columnHeaderCheckbox,
        headerName: e.current.getLocaleText("checkboxSelectionHeaderName")
      }), a = t.checkboxSelection, i = l.lookup[Yt] != null;
      return a && !i ? (l.lookup[Yt] = s, l.orderedFields = [
        Yt,
        ...l.orderedFields
      ]) : !a && i ? (delete l.lookup[Yt], l.orderedFields = l.orderedFields.filter((d) => d !== Yt)) : a && i && (l.lookup[Yt] = b({}, s, l.lookup[Yt]), t.columns.some((d) => d.field === Yt) || (l.orderedFields = [
        Yt,
        ...l.orderedFields.filter((d) => d !== Yt)
      ])), l;
    }, [
      e,
      o,
      t.columns,
      t.checkboxSelection
    ]);
    rt(e, "hydrateColumns", r);
  }, JI = (e, t) => {
    var _a2, _b2;
    const n = t.sortModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel) ?? [];
    return b({}, e, {
      sorting: {
        sortModel: Nc(n, t.disableMultipleColumnsSorting),
        sortedRows: []
      }
    });
  }, ZI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridSorting");
    e.current.registerControlState({
      stateId: "sortModel",
      propModel: t.sortModel,
      propOnChange: t.onSortModelChange,
      stateSelector: dn,
      changeEvent: "sortModelChange"
    });
    const o = c.useCallback((v, R) => {
      const A = dn(e), $ = A.findIndex((C) => C.field === v);
      let y = [
        ...A
      ];
      return $ > -1 ? (R == null ? void 0 : R.sort) == null ? y.splice($, 1) : y.splice($, 1, R) : y = [
        ...A,
        R
      ], y;
    }, [
      e
    ]), r = c.useCallback((v, R) => {
      const $ = dn(e).find((y) => y.field === v.field);
      if ($) {
        const y = R === void 0 ? na(v.sortingOrder ?? t.sortingOrder, $.sort) : R;
        return y === void 0 ? void 0 : b({}, $, {
          sort: y
        });
      }
      return {
        field: v.field,
        sort: R === void 0 ? na(v.sortingOrder ?? t.sortingOrder) : R
      };
    }, [
      e,
      t.sortingOrder
    ]), l = c.useCallback((v, R) => R == null || R.sortable === false || t.disableColumnSorting ? v : (R.sortingOrder || t.sortingOrder).some(($) => !!$) ? [
      ...v,
      "columnMenuSortItem"
    ] : v, [
      t.sortingOrder,
      t.disableColumnSorting
    ]), s = c.useCallback(() => {
      e.current.setState((v) => {
        if (t.sortingMode === "server") return n.debug("Skipping sorting rows as sortingMode = server"), b({}, v, {
          sorting: b({}, v.sorting, {
            sortedRows: Ws(ht(e), Pt, false)
          })
        });
        const R = dn(v, e.current.instanceId), A = $b(R, e), $ = e.current.applyStrategyProcessor("sorting", {
          sortRowList: A
        });
        return b({}, v, {
          sorting: b({}, v.sorting, {
            sortedRows: $
          })
        });
      }), e.current.publishEvent("sortedRowsSet"), e.current.forceUpdate();
    }, [
      e,
      n,
      t.sortingMode
    ]), a = c.useCallback((v) => {
      dn(e) !== v && (n.debug("Setting sort model"), e.current.setState(ta(v, t.disableMultipleColumnsSorting)), e.current.forceUpdate(), e.current.applySorting());
    }, [
      e,
      n,
      t.disableMultipleColumnsSorting
    ]), i = c.useCallback((v, R, A) => {
      const $ = e.current.getColumn(v), y = r($, R);
      let C;
      !A || t.disableMultipleColumnsSorting ? C = (y == null ? void 0 : y.sort) == null ? [] : [
        y
      ] : C = o($.field, y), e.current.setSortModel(C);
    }, [
      e,
      o,
      r,
      t.disableMultipleColumnsSorting
    ]), d = c.useCallback(() => dn(e), [
      e
    ]), u = c.useCallback(() => Us(e).map((R) => R.model), [
      e
    ]), f = c.useCallback(() => jo(e), [
      e
    ]), h = c.useCallback((v) => e.current.getSortedRowIds()[v], [
      e
    ]);
    ke(e, {
      getSortModel: d,
      getSortedRows: u,
      getSortedRowIds: f,
      getRowIdFromRowIndex: h,
      setSortModel: a,
      sortColumn: i,
      applySorting: s
    }, "public");
    const m = c.useCallback((v, R) => {
      var _a3, _b3;
      const A = dn(e);
      return !R.exportOnlyDirtyModels || t.sortModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.sorting) == null ? void 0 : _b3.sortModel) != null || A.length > 0 ? b({}, v, {
        sorting: {
          sortModel: A
        }
      }) : v;
    }, [
      e,
      t.sortModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel
    ]), x = c.useCallback((v, R) => {
      var _a3;
      const A = (_a3 = R.stateToRestore.sorting) == null ? void 0 : _a3.sortModel;
      return A == null ? v : (e.current.setState(ta(A, t.disableMultipleColumnsSorting)), b({}, v, {
        callbacks: [
          ...v.callbacks,
          e.current.applySorting
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsSorting
    ]), I = c.useCallback((v) => {
      const R = ht(e), A = R[Pt], $ = v.sortRowList ? v.sortRowList(A.children.map((y) => R[y])) : [
        ...A.children
      ];
      return A.footerId != null && $.push(A.footerId), $;
    }, [
      e
    ]);
    rt(e, "exportState", m), rt(e, "restoreState", x), gl(e, to, "sorting", I);
    const S = c.useCallback(({ field: v, colDef: R }, A) => {
      if (!R.sortable || t.disableColumnSorting) return;
      const $ = A.shiftKey || A.metaKey || A.ctrlKey;
      i(v, void 0, $);
    }, [
      i,
      t.disableColumnSorting
    ]), w = c.useCallback(({ field: v, colDef: R }, A) => {
      !R.sortable || t.disableColumnSorting || A.key === "Enter" && !A.ctrlKey && !A.metaKey && i(v, void 0, A.shiftKey);
    }, [
      i,
      t.disableColumnSorting
    ]), F = c.useCallback(() => {
      const v = dn(e), R = Dn(e);
      if (v.length > 0) {
        const A = v.filter(($) => R[$.field]);
        A.length < v.length && e.current.setSortModel(A);
      }
    }, [
      e
    ]), H = c.useCallback((v) => {
      v === "sorting" && e.current.applySorting();
    }, [
      e
    ]);
    rt(e, "columnMenu", l), re(e, "columnHeaderClick", S), re(e, "columnHeaderKeyDown", w), re(e, "rowsSet", e.current.applySorting), re(e, "columnsChange", F), re(e, "activeStrategyProcessorChange", H), Ir(() => {
      e.current.applySorting();
    }), St(() => {
      t.sortModel !== void 0 && e.current.setSortModel(t.sortModel);
    }, [
      e,
      t.sortModel
    ]);
  };
  function Wa(e) {
    const { containerSize: t, scrollPosition: n, elementSize: o, elementOffset: r } = e, l = r + o;
    if (o > t) return r;
    if (l - t > n) return l - t;
    if (r < n) return r;
  }
  const e1 = (e, t) => {
    const n = Gt(), o = wt(e, "useGridScroll"), r = e.current.columnHeadersContainerRef, l = e.current.virtualScrollerRef, s = X(e, Kn), a = c.useCallback((f) => {
      var _a2;
      const h = Ct(e.current.state), g = Sr(e), m = t.unstable_listView ? [
        Do(e.current.state)
      ] : it(e);
      if (!(f.rowIndex == null) && g === 0 || m.length === 0) return false;
      o.debug(`Scrolling to cell at row ${f.rowIndex}, col: ${f.colIndex} `);
      let I = {};
      if (f.colIndex !== void 0) {
        const S = Un(e);
        let w;
        if (typeof f.rowIndex < "u") {
          const F = (_a2 = s[f.rowIndex]) == null ? void 0 : _a2.id, H = e.current.unstable_getCellColSpanInfo(F, f.colIndex);
          H && !H.spannedByColSpan && (w = H.cellProps.width);
        }
        typeof w > "u" && (w = m[f.colIndex].computedWidth), I.left = Wa({
          containerSize: h.viewportOuterSize.width,
          scrollPosition: Math.abs(l.current.scrollLeft),
          elementSize: w,
          elementOffset: S[f.colIndex]
        });
      }
      if (f.rowIndex !== void 0) {
        const S = Go(e.current.state), w = YC(e), F = yu(e), H = t.pagination ? f.rowIndex - w * F : f.rowIndex, v = S.positions[H + 1] ? S.positions[H + 1] - S.positions[H] : S.currentPageTotalHeight - S.positions[H];
        I.top = Wa({
          containerSize: h.viewportInnerSize.height,
          scrollPosition: l.current.scrollTop,
          elementSize: v,
          elementOffset: S.positions[H]
        });
      }
      return I = e.current.unstable_applyPipeProcessors("scrollToIndexes", I, f), typeof I.left !== void 0 || typeof I.top !== void 0 ? (e.current.scroll(I), true) : false;
    }, [
      o,
      e,
      l,
      t.pagination,
      s,
      t.unstable_listView
    ]), i = c.useCallback((f) => {
      if (l.current && f.left !== void 0 && r.current) {
        const h = n ? -1 : 1;
        r.current.scrollLeft = f.left, l.current.scrollLeft = h * f.left, o.debug(`Scrolling left: ${f.left}`);
      }
      l.current && f.top !== void 0 && (l.current.scrollTop = f.top, o.debug(`Scrolling top: ${f.top}`)), o.debug("Scrolling, updating container, and viewport");
    }, [
      l,
      n,
      r,
      o
    ]), d = c.useCallback(() => (l == null ? void 0 : l.current) ? {
      top: l.current.scrollTop,
      left: l.current.scrollLeft
    } : {
      top: 0,
      left: 0
    }, [
      l
    ]);
    ke(e, {
      scroll: i,
      scrollToIndexes: a,
      getScrollPosition: d
    }, "public");
  };
  function t1(e, t) {
    Je(e, "columnHeaderClick", t.onColumnHeaderClick), Je(e, "columnHeaderContextMenu", t.onColumnHeaderContextMenu), Je(e, "columnHeaderDoubleClick", t.onColumnHeaderDoubleClick), Je(e, "columnHeaderOver", t.onColumnHeaderOver), Je(e, "columnHeaderOut", t.onColumnHeaderOut), Je(e, "columnHeaderEnter", t.onColumnHeaderEnter), Je(e, "columnHeaderLeave", t.onColumnHeaderLeave), Je(e, "cellClick", t.onCellClick), Je(e, "cellDoubleClick", t.onCellDoubleClick), Je(e, "cellKeyDown", t.onCellKeyDown), Je(e, "preferencePanelClose", t.onPreferencePanelClose), Je(e, "preferencePanelOpen", t.onPreferencePanelOpen), Je(e, "menuOpen", t.onMenuOpen), Je(e, "menuClose", t.onMenuClose), Je(e, "rowDoubleClick", t.onRowDoubleClick), Je(e, "rowClick", t.onRowClick), Je(e, "stateChange", t.onStateChange);
  }
  function n1(e, t = 166) {
    let n, o;
    const r = () => {
      n = void 0, e(...o);
    };
    function l(...s) {
      o = s, n === void 0 && (n = setTimeout(r, t));
    }
    return l.clear = () => {
      clearTimeout(n), n = void 0;
    }, l;
  }
  const xs = {
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
    editMode: Sn.Cell,
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
  }, go = {
    width: 0,
    height: 0
  }, o1 = {
    isReady: false,
    root: go,
    viewportOuterSize: go,
    viewportInnerSize: go,
    contentSize: go,
    minimumSize: go,
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
  }, r1 = (e, t, n) => {
    const o = o1, r = Ro(n);
    return b({}, e, {
      dimensions: b({}, o, cd(t, n, r, Lo(n)))
    });
  }, ad = we(it, Un, (e, t) => {
    const n = e.length;
    return n === 0 ? 0 : Co(t[n - 1] + e[n - 1].computedWidth, 1);
  });
  function l1(e, t) {
    const n = wt(e, "useResizeContainer"), o = c.useRef(false), r = c.useRef(go), l = X(e, Lo), s = X(e, Ro), a = X(e, ad), i = c.useRef(true), { rowHeight: d, headerHeight: u, groupHeaderHeight: f, headerFilterHeight: h, headersTotalHeight: g, leftPinnedWidth: m, rightPinnedWidth: x } = cd(t, e, s, l), I = c.useRef(void 0), S = c.useCallback(() => Ct(e.current.state), [
      e
    ]), w = c.useCallback((T) => {
      e.current.setState((O) => b({}, O, {
        dimensions: T
      })), e.current.rootElementRef.current && Ua(e.current.rootElementRef.current, Ct(e.current.state));
    }, [
      e
    ]), F = c.useCallback(() => {
      const T = e.current.mainElementRef.current;
      if (!T) return;
      const O = Ld(T).getComputedStyle(T), G = {
        width: parseFloat(O.width) || 0,
        height: parseFloat(O.height) || 0
      };
      (!I.current || !qa(I.current, G)) && (e.current.publishEvent("resize", G), I.current = G);
    }, [
      e
    ]), H = c.useCallback(() => {
      const T = Ct(e.current.state);
      if (!T.isReady) return 0;
      const O = Nn(e);
      if (t.getRowHeight) {
        const E = Fr(e), P = E.lastRowIndex - E.firstRowIndex;
        return Math.min(P - 1, O.rows.length);
      }
      const G = Math.floor(T.viewportInnerSize.height / d);
      return Math.min(G, O.rows.length);
    }, [
      e,
      t.getRowHeight,
      d
    ]), v = c.useCallback(() => {
      var _a2, _b2;
      if (i.current) return;
      const T = s1(e.current.mainElementRef.current, t.scrollbarSize), O = Go(e.current.state), G = g + O.pinnedTopRowsTotalHeight, E = O.pinnedBottomRowsTotalHeight, D = {
        width: a - m - x,
        height: Co(O.currentPageTotalHeight, 1)
      };
      let L, z, _ = false, j = false;
      if (t.autoHeight) j = false, _ = Math.round(a) > Math.round(r.current.width), L = {
        width: r.current.width,
        height: G + E + D.height
      }, z = {
        width: Math.max(0, L.width - (j ? T : 0)),
        height: Math.max(0, L.height - (_ ? T : 0))
      };
      else {
        L = {
          width: r.current.width,
          height: r.current.height
        }, z = {
          width: Math.max(0, L.width - m - x),
          height: Math.max(0, L.height - G - E)
        };
        const B = D, te = z, J = B.width > te.width, ne = B.height > te.height;
        (J || ne) && (j = ne, _ = B.width + (j ? T : 0) > te.width, _ && (j = B.height + T > te.height)), j && (z.width -= T), _ && (z.height -= T);
      }
      const V = Math.max(L.width, a + (j ? T : 0)), K = {
        width: a,
        height: G + D.height + E
      }, W = {
        isReady: true,
        root: r.current,
        viewportOuterSize: L,
        viewportInnerSize: z,
        contentSize: D,
        minimumSize: K,
        hasScrollX: _,
        hasScrollY: j,
        scrollbarSize: T,
        headerHeight: u,
        groupHeaderHeight: f,
        headerFilterHeight: h,
        rowWidth: V,
        rowHeight: d,
        columnsTotalWidth: a,
        leftPinnedWidth: m,
        rightPinnedWidth: x,
        headersTotalHeight: g,
        topContainerHeight: G,
        bottomContainerHeight: E
      }, U = e.current.state.dimensions;
      xn(U, W) || (w(W), qa(W.viewportInnerSize, U.viewportInnerSize) || e.current.publishEvent("viewportInnerSizeChange", W.viewportInnerSize), (_b2 = (_a2 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a2));
    }, [
      e,
      w,
      t.scrollbarSize,
      t.autoHeight,
      d,
      u,
      f,
      h,
      a,
      g,
      m,
      x
    ]), R = Be(v), A = c.useMemo(() => t.resizeThrottleMs > 0 ? n1(() => {
      R(), e.current.publishEvent("debouncedResize", r.current);
    }, t.resizeThrottleMs) : void 0, [
      e,
      t.resizeThrottleMs,
      R
    ]);
    c.useEffect(() => A == null ? void 0 : A.clear, [
      A
    ]);
    const $ = {
      resize: F,
      getRootDimensions: S
    }, y = {
      updateDimensions: v,
      getViewportPageSize: H
    };
    St(v, [
      v
    ]), ke(e, $, "public"), ke(e, y, "private");
    const C = c.useCallback((T) => {
      Ua(T, Ct(e.current.state));
    }, [
      e
    ]), M = c.useCallback((T) => {
      if (r.current = T, T.height === 0 && !o.current && !t.autoHeight && !cl && (n.error([
        "The parent DOM element of the Data Grid has an empty height.",
        "Please make sure that this element has an intrinsic height.",
        "The grid displays with a height of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), T.width === 0 && !o.current && !cl && (n.error([
        "The parent DOM element of the Data Grid has an empty width.",
        "Please make sure that this element has an intrinsic width.",
        "The grid displays with a width of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), i.current || !A) {
        i.current = false, v();
        return;
      }
      A();
    }, [
      v,
      t.autoHeight,
      A,
      n
    ]);
    Je(e, "rootMount", C), Je(e, "resize", M), Je(e, "debouncedResize", t.onResize);
  }
  function Ua(e, t) {
    const n = (o, r) => e.style.setProperty(o, r);
    n("--DataGrid-hasScrollX", `${Number(t.hasScrollX)}`), n("--DataGrid-hasScrollY", `${Number(t.hasScrollY)}`), n("--DataGrid-scrollbarSize", `${t.scrollbarSize}px`), n("--DataGrid-rowWidth", `${t.rowWidth}px`), n("--DataGrid-columnsTotalWidth", `${t.columnsTotalWidth}px`), n("--DataGrid-leftPinnedWidth", `${t.leftPinnedWidth}px`), n("--DataGrid-rightPinnedWidth", `${t.rightPinnedWidth}px`), n("--DataGrid-headerHeight", `${t.headerHeight}px`), n("--DataGrid-headersTotalHeight", `${t.headersTotalHeight}px`), n("--DataGrid-topContainerHeight", `${t.topContainerHeight}px`), n("--DataGrid-bottomContainerHeight", `${t.bottomContainerHeight}px`), n("--height", `${t.rowHeight}px`);
  }
  function cd(e, t, n, o) {
    const r = su(e.rowHeight, xs.rowHeight);
    return {
      rowHeight: Math.floor(r * n),
      headerHeight: Math.floor(e.columnHeaderHeight * n),
      groupHeaderHeight: Math.floor((e.columnGroupHeaderHeight ?? e.columnHeaderHeight) * n),
      headerFilterHeight: Math.floor((e.headerFilterHeight ?? e.columnHeaderHeight) * n),
      columnsTotalWidth: ad(t),
      headersTotalHeight: Pl(t, e),
      leftPinnedWidth: o.left.reduce((l, s) => l + s.computedWidth, 0),
      rightPinnedWidth: o.right.reduce((l, s) => l + s.computedWidth, 0)
    };
  }
  const Ka = /* @__PURE__ */ new WeakMap();
  function s1(e, t) {
    if (t !== void 0) return t;
    if (e === null) return 0;
    const n = Ka.get(e);
    if (n !== void 0) return n;
    const r = tn(e).createElement("div");
    r.style.width = "99px", r.style.height = "99px", r.style.position = "absolute", r.style.overflow = "scroll", r.className = "scrollDiv", e.appendChild(r);
    const l = r.offsetWidth - r.clientWidth;
    return e.removeChild(r), Ka.set(e, l), l;
  }
  function qa(e, t) {
    return e.width === t.width && e.height === t.height;
  }
  const i1 = typeof globalThis.ResizeObserver < "u" ? globalThis.ResizeObserver : class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }, a1 = (e, t, n) => {
    n.current.caches.rowsMeta = {
      heights: /* @__PURE__ */ new Map()
    };
    const o = Gs(n.current.state), r = Sr(n), l = Pr(n.current.state), s = Math.min(l.enabled ? l.paginationModel.pageSize : r, r);
    return b({}, e, {
      rowsMeta: {
        currentPageTotalHeight: s * o,
        positions: Array.from({
          length: s
        }, (a, i) => i * o),
        pinnedTopRowsTotalHeight: 0,
        pinnedBottomRowsTotalHeight: 0
      }
    });
  }, c1 = (e, t) => {
    const { getRowHeight: n, getRowSpacing: o, getEstimatedRowHeight: r } = t, l = e.current.caches.rowsMeta.heights, s = c.useRef(-1), a = c.useRef(false), i = c.useRef(false), d = X(e, Ro), u = ei(e), f = X(e, $o), h = X(e, Gs), g = (C) => {
      let M = l.get(C);
      return M === void 0 && (M = {
        content: h,
        spacingTop: 0,
        spacingBottom: 0,
        detail: 0,
        autoHeight: false,
        needsFirstMeasurement: true
      }, l.set(C, M)), M;
    }, m = c.useCallback((C) => {
      const M = Ct(e.current.state).rowHeight, T = e.current.getRowHeightEntry(C.id);
      if (!n) T.content = M, T.needsFirstMeasurement = false;
      else {
        const O = n(b({}, C, {
          densityFactor: d
        }));
        if (O === "auto") {
          if (T.needsFirstMeasurement) {
            const G = r ? r(b({}, C, {
              densityFactor: d
            })) : M;
            T.content = G ?? M;
          }
          a.current = true, T.autoHeight = true;
        } else T.content = su(O, M), T.needsFirstMeasurement = false, T.autoHeight = false;
      }
      if (o) {
        const O = e.current.getRowIndexRelativeToVisibleRows(C.id), G = o(b({}, C, {
          isFirstVisible: O === 0,
          isLastVisible: O === u.rows.length - 1,
          indexRelativeToCurrentPage: O
        }));
        T.spacingTop = G.top ?? 0, T.spacingBottom = G.bottom ?? 0;
      } else T.spacingTop = 0, T.spacingBottom = 0;
      return e.current.unstable_applyPipeProcessors("rowHeight", T, C), T;
    }, [
      e,
      u.rows,
      n,
      r,
      h,
      o,
      d
    ]), x = c.useCallback(() => {
      a.current = false;
      const C = f.top.reduce((P, D) => {
        const L = m(D);
        return P + L.content + L.spacingTop + L.spacingBottom + L.detail;
      }, 0), M = f.bottom.reduce((P, D) => {
        const L = m(D);
        return P + L.content + L.spacingTop + L.spacingBottom + L.detail;
      }, 0), T = [], O = u.rows.reduce((P, D) => {
        T.push(P);
        const L = m(D), z = L.content + L.spacingTop + L.spacingBottom + L.detail;
        return P + z;
      }, 0);
      a.current || (s.current = 1 / 0);
      const G = C !== e.current.state.rowsMeta.pinnedTopRowsTotalHeight || M !== e.current.state.rowsMeta.pinnedBottomRowsTotalHeight || O !== e.current.state.rowsMeta.currentPageTotalHeight, E = {
        currentPageTotalHeight: O,
        positions: T,
        pinnedTopRowsTotalHeight: C,
        pinnedBottomRowsTotalHeight: M
      };
      e.current.setState((P) => b({}, P, {
        rowsMeta: E
      })), G && e.current.updateDimensions(), i.current = true;
    }, [
      e,
      f,
      u.rows,
      m
    ]), I = (C) => {
      var _a2;
      return ((_a2 = l.get(C)) == null ? void 0 : _a2.content) ?? h;
    }, S = (C, M) => {
      const T = e.current.getRowHeightEntry(C), O = T.content !== M;
      T.needsFirstMeasurement = false, T.content = M, i.current &&= !O;
    }, w = (C) => {
      var _a2;
      return ((_a2 = l.get(C)) == null ? void 0 : _a2.autoHeight) ?? false;
    }, F = () => s.current, H = (C) => {
      a.current && C > s.current && (s.current = C);
    }, v = () => {
      l.clear(), x();
    }, R = In(() => new i1((C) => {
      var _a2;
      for (let M = 0; M < C.length; M += 1) {
        const T = C[M], O = T.borderBoxSize && T.borderBoxSize.length > 0 ? T.borderBoxSize[0].blockSize : T.contentRect.height, G = T.target.__mui_id;
        if (((_a2 = zu(e)) == null ? void 0 : _a2.id) === G && O === 0) return;
        e.current.unstable_storeRowHeightMeasurement(G, O);
      }
      i.current || requestAnimationFrame(() => {
        e.current.requestPipeProcessorsApplication("rowHeight");
      });
    })).current, A = (C, M) => (C.__mui_id = M, R.observe(C), () => R.unobserve(C));
    ai(e, "rowHeight", x), St(() => {
      x();
    }, [
      x
    ]);
    const $ = {
      unstable_getRowHeight: I,
      unstable_setLastMeasuredRowIndex: H,
      unstable_storeRowHeightMeasurement: S,
      resetRowHeights: v
    }, y = {
      hydrateRowsMeta: x,
      observeRowHeight: A,
      rowHasAutoHeight: w,
      getRowHeightEntry: g,
      getLastMeasuredRowIndex: F
    };
    ke(e, $, "public"), ke(e, y, "private");
  }, u1 = (e) => {
    const t = c.useCallback((r = {}) => e.current.unstable_applyPipeProcessors("exportState", {}, r), [
      e
    ]), n = c.useCallback((r) => {
      e.current.unstable_applyPipeProcessors("restoreState", {
        callbacks: []
      }, {
        stateToRestore: r
      }).callbacks.forEach((s) => {
        s();
      }), e.current.forceUpdate();
    }, [
      e
    ]);
    ke(e, {
      exportState: t,
      restoreState: n
    }, "public");
  }, d1 = (e) => {
    const t = c.useRef({}), n = (a, i) => {
      var _a2;
      return (_a2 = t.current[a]) == null ? void 0 : _a2[i];
    }, o = () => {
      t.current = {};
    }, r = c.useCallback(({ rowId: a, minFirstColumn: i, maxLastColumn: d, columns: u }) => {
      for (let f = i; f < d; f += 1) {
        const h = p1({
          apiRef: e,
          lookup: t.current,
          columnIndex: f,
          rowId: a,
          minFirstColumnIndex: i,
          maxLastColumnIndex: d,
          columns: u
        });
        h.colSpan > 1 && (f += h.colSpan - 1);
      }
    }, [
      e
    ]), l = {
      unstable_getCellColSpanInfo: n
    }, s = {
      resetColSpan: o,
      calculateColSpan: r
    };
    ke(e, l, "public"), ke(e, s, "private"), re(e, "columnOrderChange", o);
  };
  function p1(e) {
    const { apiRef: t, lookup: n, columnIndex: o, rowId: r, minFirstColumnIndex: l, maxLastColumnIndex: s, columns: a } = e, i = a.length, d = a[o], u = t.current.getRow(r), f = t.current.getRowValue(u, d), h = typeof d.colSpan == "function" ? d.colSpan(f, u, d, t) : d.colSpan;
    if (!h || h === 1) return Yl(n, r, o, {
      spannedByColSpan: false,
      cellProps: {
        colSpan: 1,
        width: d.computedWidth
      }
    }), {
      colSpan: 1
    };
    let g = d.computedWidth;
    for (let m = 1; m < h; m += 1) {
      const x = o + m;
      if (x >= l && x < s) {
        const I = a[x];
        g += I.computedWidth, Yl(n, r, o + m, {
          spannedByColSpan: true,
          rightVisibleCellIndex: Math.min(o + h, i - 1),
          leftVisibleCellIndex: o
        });
      }
      Yl(n, r, o, {
        spannedByColSpan: false,
        cellProps: {
          colSpan: h,
          width: g
        }
      });
    }
    return {
      colSpan: h
    };
  }
  function Yl(e, t, n, o) {
    e[t] || (e[t] = {}), e[t][n] = o;
  }
  const ud = (e, t, n) => {
    if (qc(e)) {
      if (n[e.field] !== void 0) throw new Error([
        "MUI X: columnGroupingModel contains duplicated field",
        `column field ${e.field} occurs two times in the grouping model:`,
        `- ${n[e.field].join(" > ")}`,
        `- ${t.join(" > ")}`
      ].join(`
`));
      n[e.field] = t;
      return;
    }
    const { groupId: o, children: r } = e;
    r.forEach((l) => {
      ud(l, [
        ...t,
        o
      ], n);
    });
  }, vs = (e) => {
    if (!e) return {};
    const t = {};
    return e.forEach((n) => {
      ud(n, [], t);
    }), t;
  }, ys = (e, t, n) => {
    const o = (i) => t[i] ?? [], r = [], l = Math.max(...e.map((i) => o(i).length)), s = (i, d, u) => xn(o(i).slice(0, u + 1), o(d).slice(0, u + 1)), a = (i, d) => !!((n == null ? void 0 : n.left) && n.left.includes(i) && !n.left.includes(d) || (n == null ? void 0 : n.right) && !n.right.includes(i) && n.right.includes(d));
    for (let i = 0; i < l; i += 1) {
      const d = e.reduce((u, f) => {
        const h = o(f)[i] ?? null;
        if (u.length === 0) return [
          {
            columnFields: [
              f
            ],
            groupId: h
          }
        ];
        const g = u[u.length - 1], m = g.columnFields[g.columnFields.length - 1];
        return g.groupId !== h || !s(m, f, i) || a(m, f) ? [
          ...u,
          {
            columnFields: [
              f
            ],
            groupId: h
          }
        ] : [
          ...u.slice(0, u.length - 1),
          {
            columnFields: [
              ...g.columnFields,
              f
            ],
            groupId: h
          }
        ];
      }, []);
      r.push(d);
    }
    return r;
  }, f1 = [
    "groupId",
    "children"
  ], ci = (e) => {
    let t = {};
    return e.forEach((n) => {
      if (qc(n)) return;
      const { groupId: o, children: r } = n, l = fe(n, f1);
      if (!o) throw new Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
      const s = b({}, l, {
        groupId: o
      }), a = ci(r);
      if (a[o] !== void 0 || t[o] !== void 0) throw new Error(`MUI X: The groupId ${o} is used multiple times in the columnGroupingModel.`);
      t = b({}, t, a, {
        [o]: s
      });
    }), b({}, t);
  }, g1 = (e, t, n) => {
    if (!t.columnGroupingModel) return e;
    const o = Fn(n), r = Ho(n), l = ci(t.columnGroupingModel ?? []), s = vs(t.columnGroupingModel ?? []), a = ys(o, s, n.current.state.pinnedColumns ?? {}), i = r.length === 0 ? 0 : Math.max(...r.map((d) => {
      var _a2;
      return ((_a2 = s[d]) == null ? void 0 : _a2.length) ?? 0;
    }));
    return b({}, e, {
      columnGrouping: {
        lookup: l,
        unwrappedGroupingModel: s,
        headerStructure: a,
        maxDepth: i
      }
    });
  }, h1 = (e, t) => {
    const n = c.useCallback((a) => Eu(e)[a] ?? [], [
      e
    ]), o = c.useCallback(() => Fu(e), [
      e
    ]);
    ke(e, {
      getColumnGroupPath: n,
      getAllGroupDetails: o
    }, "public");
    const l = c.useCallback(() => {
      const a = vs(t.columnGroupingModel ?? []);
      e.current.setState((i) => {
        var _a2;
        const d = ((_a2 = i.columns) == null ? void 0 : _a2.orderedFields) ?? [], u = i.pinnedColumns ?? {}, f = ys(d, a, u);
        return b({}, i, {
          columnGrouping: b({}, i.columnGrouping, {
            headerStructure: f
          })
        });
      });
    }, [
      e,
      t.columnGroupingModel
    ]), s = c.useCallback((a) => {
      var _a2, _b2;
      const i = ((_b2 = (_a2 = e.current).getPinnedColumns) == null ? void 0 : _b2.call(_a2)) ?? {}, d = Fn(e), u = Ho(e), f = ci(a ?? []), h = vs(a ?? []), g = ys(d, h, i), m = u.length === 0 ? 0 : Math.max(...u.map((x) => {
        var _a3;
        return ((_a3 = h[x]) == null ? void 0 : _a3.length) ?? 0;
      }));
      e.current.setState((x) => b({}, x, {
        columnGrouping: {
          lookup: f,
          unwrappedGroupingModel: h,
          headerStructure: g,
          maxDepth: m
        }
      }));
    }, [
      e
    ]);
    re(e, "columnIndexChange", l), re(e, "columnsChange", () => {
      s(t.columnGroupingModel);
    }), re(e, "columnVisibilityModelChange", () => {
      s(t.columnGroupingModel);
    }), c.useEffect(() => {
      s(t.columnGroupingModel);
    }, [
      s,
      t.columnGroupingModel
    ]);
  };
  function m1() {
    let e, t;
    const n = new Promise((o, r) => {
      e = o, t = r;
    });
    return n.resolve = e, n.reject = t, n;
  }
  function Ya(e, t) {
    if (t !== void 0 && e.changedTouches) {
      for (let n = 0; n < e.changedTouches.length; n += 1) {
        const o = e.changedTouches[n];
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
  function Xa(e, t, n, o) {
    let r = e;
    return o === "Right" ? r += t - n.left : r += n.right - t, r;
  }
  function b1(e, t, n) {
    return n === "Left" ? e - t.left : t.right - e;
  }
  function C1(e) {
    return e === "Right" ? "Left" : "Right";
  }
  function w1(e, t) {
    const n = e.classList.contains(k["columnSeparator--sideRight"]) ? "Right" : "Left";
    return t ? C1(n) : n;
  }
  function Qa(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function x1(e) {
    const t = c.useRef(void 0), n = () => ju(e), o = X(e, n);
    return c.useEffect(() => {
      t.current && o === false && (t.current.resolve(), t.current = void 0);
    }), () => {
      if (!t.current) {
        if (n() === false) return Promise.resolve();
        t.current = m1();
      }
      return t.current;
    };
  }
  function v1(e, t) {
    if (e.length < 4) return e;
    const n = e.slice();
    n.sort((a, i) => a - i);
    const o = n[Math.floor(n.length * 0.25)], r = n[Math.floor(n.length * 0.75) - 1], l = r - o, s = l < 5 ? 5 : l * t;
    return n.filter((a) => a > o - s && a < r + s);
  }
  function y1(e, t, n) {
    const o = {}, r = e.current.rootElementRef.current;
    return r.classList.add(k.autosizing), n.forEach((l) => {
      const a = sy(e.current, l.field).map((m) => m.getBoundingClientRect().width ?? 0), i = t.includeOutliers ? a : v1(a, t.outliersFactor);
      if (t.includeHeaders) {
        const m = ly(e.current, l.field);
        if (m) {
          const x = m.querySelector(`.${k.columnHeaderTitle}`), I = m.querySelector(`.${k.columnHeaderTitleContainerContent}`), S = m.querySelector(`.${k.iconButtonContainer}`), w = m.querySelector(`.${k.menuIcon}`), F = x ?? I, H = window.getComputedStyle(m, null), v = parseInt(H.paddingLeft, 10) + parseInt(H.paddingRight, 10), A = F.scrollWidth + 1 + v + ((S == null ? void 0 : S.clientWidth) ?? 0) + ((w == null ? void 0 : w.clientWidth) ?? 0);
          i.push(A);
        }
      }
      const d = l.minWidth !== -1 / 0 && l.minWidth !== void 0, u = l.maxWidth !== 1 / 0 && l.maxWidth !== void 0, f = d ? l.minWidth : 0, h = u ? l.maxWidth : 1 / 0, g = i.length === 0 ? 0 : Math.max(...i);
      o[l.field] = Wt(g, f, h);
    }), r.classList.remove(k.autosizing), o;
  }
  const S1 = (e) => b({}, e, {
    columnResize: {
      resizingColumnField: ""
    }
  });
  function I1() {
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
  const P1 = (e, t) => {
    const n = Gt(), o = wt(e, "useGridColumnResize"), r = In(I1).current, l = c.useRef(null), s = c.useRef(null), a = Nt(), i = c.useRef(void 0), d = (y) => {
      var _a2, _b2;
      o.debug(`Updating width to ${y} for col ${r.colDef.field}`);
      const C = r.columnHeaderElement.offsetWidth, M = y - C, T = y - r.initialColWidth;
      if (T > 0) {
        const E = r.initialTotalWidth + T;
        (_b2 = (_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.style.setProperty("--DataGrid-rowWidth", `${E}px`);
      }
      r.colDef.computedWidth = y, r.colDef.width = y, r.colDef.flex = 0, r.columnHeaderElement.style.width = `${y}px`;
      const O = r.headerFilterElement;
      O && (O.style.width = `${y}px`), r.groupHeaderElements.forEach((E) => {
        const P = E;
        let D;
        P.getAttribute("aria-colspan") === "1" ? D = `${y}px` : D = `${P.offsetWidth + M}px`, P.style.width = D;
      }), r.cellElements.forEach((E) => {
        const P = E;
        let D;
        P.getAttribute("aria-colspan") === "1" ? D = `${y}px` : D = `${P.offsetWidth + M}px`, P.style.setProperty("--width", D);
      });
      const G = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      G === An.LEFT && (po(r.fillerLeft, "width", M), r.leftPinnedCellsAfter.forEach((E) => {
        po(E, "left", M);
      }), r.leftPinnedHeadersAfter.forEach((E) => {
        po(E, "left", M);
      })), G === An.RIGHT && (po(r.fillerRight, "width", M), r.rightPinnedCellsBefore.forEach((E) => {
        po(E, "right", M);
      }), r.rightPinnedHeadersBefore.forEach((E) => {
        po(E, "right", M);
      }));
    }, u = (y) => {
      if (S(), r.previousMouseClickEvent) {
        const C = r.previousMouseClickEvent, M = C.timeStamp, T = C.clientX, O = C.clientY;
        if (y.timeStamp - M < 300 && y.clientX === T && y.clientY === O) {
          r.previousMouseClickEvent = void 0, e.current.publishEvent("columnResizeStop", null, y);
          return;
        }
      }
      if (r.colDef) {
        e.current.setColumnWidth(r.colDef.field, r.colDef.width), o.debug(`Updating col ${r.colDef.field} with new width: ${r.colDef.width}`);
        const C = vn(e.current.state);
        r.groupHeaderElements.forEach((M) => {
          const T = Jv(M), O = M, E = `${T.reduce((P, D) => C.columnVisibilityModel[D] !== false ? P + C.lookup[D].computedWidth : P, 0)}px`;
          O.style.width = E;
        });
      }
      a.start(0, () => {
        e.current.publishEvent("columnResizeStop", null, y);
      });
    }, f = (y, C, M) => {
      var _a2;
      const T = e.current.rootElementRef.current;
      r.initialColWidth = y.computedWidth, r.initialTotalWidth = e.current.getRootDimensions().rowWidth, r.colDef = y, r.columnHeaderElement = Qv(e.current.columnHeadersContainerRef.current, y.field);
      const O = T.querySelector(`.${k.headerFilterRow} [data-field="${Rn(y.field)}"]`);
      O && (r.headerFilterElement = O), r.groupHeaderElements = Zv((_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current, y.field), r.cellElements = ey(r.columnHeaderElement, e.current), r.fillerLeft = Pa(e.current, n ? "filler--pinnedRight" : "filler--pinnedLeft"), r.fillerRight = Pa(e.current, n ? "filler--pinnedLeft" : "filler--pinnedRight");
      const G = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      r.leftPinnedCellsAfter = G !== An.LEFT ? [] : ty(e.current, r.columnHeaderElement, n), r.rightPinnedCellsBefore = G !== An.RIGHT ? [] : ny(e.current, r.columnHeaderElement, n), r.leftPinnedHeadersAfter = G !== An.LEFT ? [] : oy(e.current, r.columnHeaderElement, n), r.rightPinnedHeadersBefore = G !== An.RIGHT ? [] : ry(e.current, r.columnHeaderElement, n), s.current = w1(C, n), l.current = b1(M, r.columnHeaderElement.getBoundingClientRect(), s.current);
    }, h = Be(u), g = Be((y) => {
      if (y.buttons === 0) {
        h(y);
        return;
      }
      let C = Xa(l.current, y.clientX, r.columnHeaderElement.getBoundingClientRect(), s.current);
      C = Wt(C, r.colDef.minWidth, r.colDef.maxWidth), d(C);
      const M = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: C
      };
      e.current.publishEvent("columnResize", M, y);
    }), m = Be((y) => {
      Ya(y, i.current) && u(y);
    }), x = Be((y) => {
      const C = Ya(y, i.current);
      if (!C) return;
      if (y.type === "mousemove" && y.buttons === 0) {
        m(y);
        return;
      }
      let M = Xa(l.current, C.x, r.columnHeaderElement.getBoundingClientRect(), s.current);
      M = Wt(M, r.colDef.minWidth, r.colDef.maxWidth), d(M);
      const T = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: M
      };
      e.current.publishEvent("columnResize", T, y);
    }), I = Be((y) => {
      const C = ul(y.target, k["columnSeparator--resizable"]);
      if (!C) return;
      const M = y.changedTouches[0];
      M != null && (i.current = M.identifier);
      const T = ul(y.target, k.columnHeader), O = Xv(T), G = e.current.getColumn(O);
      o.debug(`Start Resize on col ${G.field}`), e.current.publishEvent("columnResizeStart", {
        field: O
      }, y), f(G, C, M.clientX);
      const E = tn(y.currentTarget);
      E.addEventListener("touchmove", x), E.addEventListener("touchend", m);
    }), S = c.useCallback(() => {
      const y = tn(e.current.rootElementRef.current);
      y.body.style.removeProperty("cursor"), y.removeEventListener("mousemove", g), y.removeEventListener("mouseup", h), y.removeEventListener("touchmove", x), y.removeEventListener("touchend", m), setTimeout(() => {
        y.removeEventListener("click", Qa, true);
      }, 100), r.columnHeaderElement && (r.columnHeaderElement.style.pointerEvents = "unset");
    }, [
      e,
      r,
      g,
      h,
      x,
      m
    ]), w = c.useCallback(({ field: y }) => {
      e.current.setState((C) => b({}, C, {
        columnResize: b({}, C.columnResize, {
          resizingColumnField: y
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), F = c.useCallback(() => {
      e.current.setState((y) => b({}, y, {
        columnResize: b({}, y.columnResize, {
          resizingColumnField: ""
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), H = Be(({ colDef: y }, C) => {
      if (C.button !== 0 || !C.currentTarget.classList.contains(k["columnSeparator--resizable"])) return;
      C.preventDefault(), o.debug(`Start Resize on col ${y.field}`), e.current.publishEvent("columnResizeStart", {
        field: y.field
      }, C), f(y, C.currentTarget, C.clientX);
      const M = tn(e.current.rootElementRef.current);
      M.body.style.cursor = "col-resize", r.previousMouseClickEvent = C.nativeEvent, M.addEventListener("mousemove", g), M.addEventListener("mouseup", h), M.addEventListener("click", Qa, true);
    }), v = Be((y, C) => {
      if (t.disableAutosize || C.button !== 0) return;
      const M = e.current.state.columns.lookup[y.field];
      M.resizable !== false && e.current.autosizeColumns(b({}, t.autosizeOptions, {
        disableColumnVirtualization: false,
        columns: [
          M.field
        ]
      }));
    }), R = x1(e), A = c.useRef(false), $ = c.useCallback(async (y) => {
      var _a2;
      if (!((_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) || A.current) return;
      A.current = true;
      const M = vn(e.current.state), T = b({}, Gx, y, {
        columns: (y == null ? void 0 : y.columns) ?? M.orderedFields
      });
      T.columns = T.columns.filter((G) => M.columnVisibilityModel[G] !== false);
      const O = T.columns.map((G) => e.current.state.columns.lookup[G]);
      try {
        !t.disableVirtualization && T.disableColumnVirtualization && (e.current.unstable_setColumnVirtualization(false), await R());
        const G = y1(e, T, O), E = O.map((P) => b({}, P, {
          width: G[P.field],
          computedWidth: G[P.field],
          flex: 0
        }));
        if (T.expand) {
          const D = M.orderedFields.map((j) => M.lookup[j]).filter((j) => M.columnVisibilityModel[j.field] !== false).reduce((j, V) => j + (G[V.field] ?? V.computedWidth ?? V.width), 0), _ = e.current.getRootDimensions().viewportInnerSize.width - D;
          if (_ > 0) {
            const j = _ / (E.length || 1);
            E.forEach((V) => {
              V.width += j, V.computedWidth += j;
            });
          }
        }
        e.current.updateColumns(E), E.forEach((P, D) => {
          if (P.width !== O[D].width) {
            const L = P.width;
            e.current.publishEvent("columnWidthChange", {
              element: e.current.getColumnHeaderElement(P.field),
              colDef: P,
              width: L
            });
          }
        });
      } finally {
        t.disableVirtualization || e.current.unstable_setColumnVirtualization(true), A.current = false;
      }
    }, [
      e,
      R,
      t.disableVirtualization
    ]);
    c.useEffect(() => S, [
      S
    ]), rc(() => {
      t.autosizeOnMount && Promise.resolve().then(() => {
        e.current.autosizeColumns(t.autosizeOptions);
      });
    }), bu(e, () => {
      var _a2;
      return (_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current;
    }, "touchstart", I, {
      passive: true
    }), ke(e, {
      autosizeColumns: $
    }, "public"), re(e, "columnResizeStop", F), re(e, "columnResizeStart", w), re(e, "columnSeparatorMouseDown", H), re(e, "columnSeparatorDoubleClick", v), Je(e, "columnResize", t.onColumnResize), Je(e, "columnWidthChange", t.onColumnWidthChange);
  };
  function po(e, t, n) {
    e && (e.style[t] = `${parseInt(e.style[t], 10) + n}px`);
  }
  function M1(e, t) {
    return e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? null : e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex > t.lastRowIndex ? {
      firstRowIndex: t.lastRowIndex,
      lastRowIndex: e.lastRowIndex
    } : e.firstRowIndex < t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? {
      firstRowIndex: e.firstRowIndex,
      lastRowIndex: t.firstRowIndex - 1
    } : e;
  }
  function Ja(e) {
    return e.firstRowIndex !== 0 || e.lastRowIndex !== 0;
  }
  const Xl = (e, t, n) => {
    if (!e) return null;
    let o = e[t.field];
    const r = t.rowSpanValueGetter ?? t.valueGetter;
    return r && (o = r(o, e, t, n)), o;
  }, wo = {
    spannedCells: {},
    hiddenCells: {},
    hiddenCellOriginMap: {}
  }, hl = {
    firstRowIndex: 0,
    lastRowIndex: 0
  }, k1 = /* @__PURE__ */ new Set([
    Yt,
    "__reorder__",
    xl
  ]), Za = 20, dd = (e, t, n, o, r, l, s) => {
    const a = l ? {} : b({}, e.current.state.rowSpanning.spannedCells), i = l ? {} : b({}, e.current.state.rowSpanning.hiddenCells), d = l ? {} : b({}, e.current.state.rowSpanning.hiddenCellOriginMap);
    return l && (s = hl), t.forEach((u) => {
      var _a2;
      if (!k1.has(u.field)) {
        for (let f = r.firstRowIndex; f < r.lastRowIndex; f += 1) {
          const h = n[f];
          if ((_a2 = i[h.id]) == null ? void 0 : _a2[u.field]) continue;
          const g = Xl(h.model, u, e);
          if (g == null) continue;
          let m = h.id, x = f, I = 0;
          const S = [];
          if (f === r.firstRowIndex) {
            let F = f - 1, H = n[F];
            for (; F >= o.firstRowIndex && H && Xl(H.model, u, e) === g; ) {
              const v = n[F + 1];
              i[v.id] ? i[v.id][u.field] = true : i[v.id] = {
                [u.field]: true
              }, S.push(f), I += 1, m = H.id, x = F, F -= 1, H = n[F];
            }
          }
          S.forEach((F) => {
            d[F] ? d[F][u.field] = x : d[F] = {
              [u.field]: x
            };
          });
          let w = f + 1;
          for (; w <= o.lastRowIndex && n[w] && Xl(n[w].model, u, e) === g; ) {
            const F = n[w];
            i[F.id] ? i[F.id][u.field] = true : i[F.id] = {
              [u.field]: true
            }, d[w] ? d[w][u.field] = x : d[w] = {
              [u.field]: x
            }, w += 1, I += 1;
          }
          I > 0 && (a[m] ? a[m][u.field] = I + 1 : a[m] = {
            [u.field]: I + 1
          });
        }
        s = {
          firstRowIndex: Math.min(s.firstRowIndex, r.firstRowIndex),
          lastRowIndex: Math.max(s.lastRowIndex, r.lastRowIndex)
        };
      }
    }), {
      spannedCells: a,
      hiddenCells: i,
      hiddenCellOriginMap: d,
      processedRange: s
    };
  }, pd = (e, t) => {
    const n = Jo(t).length;
    if (e.pagination) {
      const o = yu(t);
      let r = Za;
      return o > 0 && (r = o - 1), {
        firstRowIndex: 0,
        lastRowIndex: Math.min(r, n)
      };
    }
    return {
      firstRowIndex: 0,
      lastRowIndex: Math.min(Za, n)
    };
  }, E1 = (e, t, n) => {
    var _a2;
    if (!t.unstable_rowSpanning) return b({}, e, {
      rowSpanning: wo
    });
    const o = e.rows.dataRowIds || [], r = e.columns.orderedFields || [], l = e.rows.dataRowIdToModelLookup, s = e.columns.lookup, a = !!e.filter.filterModel.items.length || !!((_a2 = e.filter.filterModel.quickFilterValues) == null ? void 0 : _a2.length);
    if (!o.length || !r.length || !l || !s || a) return b({}, e, {
      rowSpanning: wo
    });
    const i = pd(t, n), d = o.map((m) => ({
      id: m,
      model: l[m]
    })), u = r.map((m) => s[m]), { spannedCells: f, hiddenCells: h, hiddenCellOriginMap: g } = dd(n, u, d, i, i, true, hl);
    return b({}, e, {
      rowSpanning: {
        spannedCells: f,
        hiddenCells: h,
        hiddenCellOriginMap: g
      }
    });
  }, F1 = (e, t) => {
    const n = In(() => e.current.state.rowSpanning !== wo ? pd(t, e) : hl), o = c.useCallback((l, s = false) => {
      const { range: a, rows: i } = Nn(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (a === null || !Ja(l)) return;
      s && (n.current = hl);
      const d = M1({
        firstRowIndex: l.firstRowIndex,
        lastRowIndex: Math.min(l.lastRowIndex, a.lastRowIndex + 1)
      }, n.current);
      if (d === null) return;
      const u = it(e), { spannedCells: f, hiddenCells: h, hiddenCellOriginMap: g, processedRange: m } = dd(e, u, i, a, d, s, n.current);
      n.current = m;
      const x = Object.keys(f).length, I = Object.keys(h).length, S = Object.keys(e.current.state.rowSpanning.spannedCells).length, w = Object.keys(e.current.state.rowSpanning.hiddenCells).length;
      !(s || x !== S || I !== w) || x === 0 && S === 0 || e.current.setState((v) => b({}, v, {
        rowSpanning: {
          spannedCells: f,
          hiddenCells: h,
          hiddenCellOriginMap: g
        }
      }));
    }, [
      e,
      n,
      t.pagination,
      t.paginationMode
    ]), r = c.useCallback(() => {
      const l = Fr(e);
      Ja(l) && o(l, true);
    }, [
      e,
      o
    ]);
    re(e, "renderedRowsIntervalChange", Yn(t.unstable_rowSpanning, o)), re(e, "sortedRowsSet", Yn(t.unstable_rowSpanning, r)), re(e, "paginationModelChange", Yn(t.unstable_rowSpanning, r)), re(e, "filteredRowsSet", Yn(t.unstable_rowSpanning, r)), re(e, "columnsChange", Yn(t.unstable_rowSpanning, r)), c.useEffect(() => {
      t.unstable_rowSpanning ? e.current.state.rowSpanning === wo && r() : e.current.state.rowSpanning !== wo && e.current.setState((l) => b({}, l, {
        rowSpanning: wo
      }));
    }, [
      e,
      r,
      t.unstable_rowSpanning
    ]);
  }, T1 = (e, t, n) => b({}, e, {
    listViewColumn: t.unstable_listColumn ? b({}, t.unstable_listColumn, {
      computedWidth: Ss(n)
    }) : void 0
  });
  function O1(e, t) {
    const n = () => {
      e.current.setState((l) => l.listViewColumn ? b({}, l, {
        listViewColumn: b({}, l.listViewColumn, {
          computedWidth: Ss(e)
        })
      }) : l);
    }, o = c.useRef(null);
    re(e, "viewportInnerSizeChange", (l) => {
      o.current !== l.width && (o.current = l.width, n());
    }), re(e, "columnVisibilityModelChange", n), St(() => {
      const l = t.unstable_listColumn;
      l && e.current.setState((s) => b({}, s, {
        listViewColumn: b({}, l, {
          computedWidth: Ss(e)
        })
      }));
    }, [
      e,
      t.unstable_listColumn
    ]), c.useEffect(() => {
      t.unstable_listView && t.unstable_listColumn;
    }, [
      t.unstable_listView,
      t.unstable_listColumn
    ]);
  }
  function Ss(e) {
    return Ct(e.current.state).viewportInnerSize.width;
  }
  const D1 = (e, t) => {
    const n = eI(e, t);
    return QI(n, t), UI(n), mt(J0, n, t), mt(qI, n, t), mt(aI, n, t), mt(_I, n, t), mt(FI, n, t), mt(zI, n, t), mt(yI, n, t), mt(JI, n, t), mt(OI, n, t), mt(CI, n, t), mt(E1, n, t), mt(uI, n, t), mt(S1, n, t), mt(sI, n, t), mt(g1, n, t), mt(Jw, n, t), mt(r1, n, t), mt(a1, n, t), mt(T1, n, t), MI(n, t), YI(n, t), cI(n, t), VI(n, t), F1(n, t), KI(n, t), d1(n), h1(n, t), GI(n, t), SI(n, t), DI(n, t), vI(n, t), ZI(n, t), dI(n, t), P1(n, t), TI(n, t), c1(n, t), e1(n, t), iI(n), fI(n, t), bI(n, t), lI(n, t), l1(n, t), t1(n, t), u1(n), Zw(n, t), O1(n, t), n;
  }, R1 = (e) => {
    const { classes: t, headerAlign: n, isDragging: o, isLastColumn: r, showLeftBorder: l, showRightBorder: s, groupId: a, pinnedPosition: i } = e, d = {
      root: [
        "columnHeader",
        n === "left" && "columnHeader--alignLeft",
        n === "center" && "columnHeader--alignCenter",
        n === "right" && "columnHeader--alignRight",
        o && "columnHeader--moving",
        s && "columnHeader--withRightBorder",
        l && "columnHeader--withLeftBorder",
        "withBorderColor",
        a === null ? "columnHeader--emptyGroup" : "columnHeader--filledGroup",
        i === Oe.LEFT && "columnHeader--pinnedLeft",
        i === Oe.RIGHT && "columnHeader--pinnedRight",
        r && "columnHeader--last"
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
    return ge(d, De, t);
  };
  function $1(e) {
    var _a2;
    const { groupId: t, width: n, depth: o, maxDepth: r, fields: l, height: s, colIndex: a, hasFocus: i, tabIndex: d, isLastColumn: u, pinnedPosition: f, pinnedOffset: h } = e, g = ie(), m = Gt(), x = c.useRef(null), I = Ee(), S = X(I, Fu), w = t ? S[t] : {}, { headerName: F = t ?? "", description: H = "", headerAlign: v = void 0 } = w;
    let R;
    const A = t && ((_a2 = S[t]) == null ? void 0 : _a2.renderHeaderGroup), $ = c.useMemo(() => ({
      groupId: t,
      headerName: F,
      description: H,
      depth: o,
      maxDepth: r,
      fields: l,
      colIndex: a,
      isLastColumn: u
    }), [
      t,
      F,
      H,
      o,
      r,
      l,
      a,
      u
    ]);
    t && A && (R = A($));
    const y = b({}, e, {
      classes: g.classes,
      headerAlign: v,
      depth: o,
      isDragging: false
    }), C = F ?? t, M = ot(), T = t === null ? `empty-group-cell-${M}` : t, O = R1(y);
    c.useLayoutEffect(() => {
      if (i) {
        const z = x.current.querySelector('[tabindex="0"]') || x.current;
        if (!z) return;
        if (oi()) z.focus({
          preventScroll: true
        });
        else {
          const _ = I.current.getScrollPosition();
          z.focus(), I.current.scroll(_);
        }
      }
    }, [
      I,
      i
    ]);
    const G = c.useCallback((L) => (z) => {
      Tr(z) || I.current.publishEvent(L, $, z);
    }, [
      I,
      $
    ]), E = c.useMemo(() => ({
      onKeyDown: G("columnGroupHeaderKeyDown"),
      onFocus: G("columnGroupHeaderFocus"),
      onBlur: G("columnGroupHeaderBlur")
    }), [
      G
    ]), P = typeof w.headerClassName == "function" ? w.headerClassName($) : w.headerClassName, D = c.useMemo(() => kl(b({}, e.style), m, f, h), [
      f,
      h,
      e.style,
      m
    ]);
    return p.jsx(Qu, b({
      ref: x,
      classes: O,
      columnMenuOpen: false,
      colIndex: a,
      height: s,
      isResizing: false,
      sortDirection: null,
      hasFocus: false,
      tabIndex: d,
      isDraggable: false,
      headerComponent: R,
      headerClassName: P,
      description: H,
      elementId: T,
      width: n,
      columnMenuIconButton: null,
      columnTitleIconButtons: null,
      resizable: false,
      label: C,
      "aria-colspan": l.length,
      "data-fields": `|-${l.join("-|-")}-|`,
      style: D
    }, E));
  }
  const ec = le("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderRow",
    overridesResolver: (e, t) => t.columnHeaderRow
  })({
    display: "flex"
  }), H1 = (e) => {
    const { visibleColumns: t, sortColumnLookup: n, filterColumnLookup: o, columnHeaderTabIndexState: r, columnGroupHeaderTabIndexState: l, columnHeaderFocus: s, columnGroupHeaderFocus: a, headerGroupingMaxDepth: i, columnMenuState: d, columnVisibility: u, columnGroupsHeaderStructure: f, hasOtherElementInTabSequence: h } = e, [g, m] = c.useState(""), [x, I] = c.useState(""), S = cn(), w = ie(), F = X(S, Eu), H = X(S, Un), v = X(S, Qw), R = X(S, Lo), A = X(S, Dn), $ = Gu(H, v, R.left.length), y = X(S, bl), C = X(S, Gc), M = X(S, ab), T = X(S, cb), O = X(S, _c), G = c.useCallback((B) => I(B.field), []), E = c.useCallback(() => I(""), []), P = c.useCallback((B) => m(B.field), []), D = c.useCallback(() => m(""), []), L = c.useMemo(() => R.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: R.left.length
    } : null, [
      R.left.length
    ]), z = c.useMemo(() => R.right.length ? {
      firstColumnIndex: t.length - R.right.length,
      lastColumnIndex: t.length
    } : null, [
      R.right.length,
      t.length
    ]);
    re(S, "columnResizeStart", G), re(S, "columnResizeStop", E), re(S, "columnHeaderDragStart", P), re(S, "columnHeaderDragEnd", D);
    const _ = (B) => {
      const { renderContext: te = v } = B || {}, J = te.firstColumnIndex, ne = te.lastColumnIndex;
      return {
        renderedColumns: t.slice(J, ne),
        firstColumnToRender: J,
        lastColumnToRender: ne
      };
    }, j = (B, te, J, ne = false) => {
      const ce = (B == null ? void 0 : B.position) === Oe.RIGHT, Ce = (B == null ? void 0 : B.position) === void 0, Y = R.right.length > 0 && ce || R.right.length === 0 && Ce, oe = $ - J;
      return p.jsxs(c.Fragment, {
        children: [
          Ce && p.jsx("div", {
            role: "presentation",
            style: {
              width: oe
            }
          }),
          te,
          Ce && p.jsx("div", {
            role: "presentation",
            className: ue(k.filler, ne && k["filler--borderBottom"])
          }),
          Y && p.jsx(si, {
            header: true,
            pinnedRight: ce,
            borderBottom: ne,
            borderTop: false
          })
        ]
      });
    }, V = (B, te = {}) => {
      const { renderedColumns: J, firstColumnToRender: ne } = _(B), ce = [];
      for (let Ce = 0; Ce < J.length; Ce += 1) {
        const Y = J[Ce], oe = ne + Ce, he = oe === 0, Z = r !== null && r.field === Y.field || he && !h ? 0 : -1, Ie = s !== null && s.field === Y.field, ee = d.open && d.field === Y.field, ye = B == null ? void 0 : B.position, xe = lr(ye, Y.computedWidth, oe, H, y, O), Fe = ye === Oe.RIGHT ? J[Ce - 1] : J[Ce + 1], Ne = Fe ? s !== null && s.field === Fe.field : false, Ue = oe + 1 === H.length - R.right.length, Ge = Ce, He = J.length, Le = fl(ye, Ge), Ke = pl(ye, Ge, He, w.showColumnVerticalBorder, C);
        ce.push(p.jsx(wy, b({}, n[Y.field], {
          columnMenuOpen: ee,
          filterItemsCounter: o[Y.field] && o[Y.field].length,
          headerHeight: M,
          isDragging: Y.field === g,
          colDef: Y,
          colIndex: oe,
          isResizing: x === Y.field,
          isLast: oe === H.length - 1,
          hasFocus: Ie,
          tabIndex: Z,
          pinnedPosition: ye,
          pinnedOffset: xe,
          isLastUnpinned: Ue,
          isSiblingFocused: Ne,
          showLeftBorder: Le,
          showRightBorder: Ke
        }, te), Y.field));
      }
      return j(B, ce, 0);
    }, K = () => p.jsxs(ec, {
      role: "row",
      "aria-rowindex": i + 1,
      ownerState: w,
      className: k["row--borderBottom"],
      children: [
        L && V({
          position: Oe.LEFT,
          renderContext: L
        }, {
          disableReorder: true
        }),
        V({
          renderContext: v
        }),
        z && V({
          position: Oe.RIGHT,
          renderContext: z
        }, {
          disableReorder: true,
          separatorSide: li.Left
        })
      ]
    }), W = ({ depth: B, params: te }) => {
      var _a2, _b2;
      const J = _(te);
      if (J.renderedColumns.length === 0) return null;
      const { firstColumnToRender: ne, lastColumnToRender: ce } = J, Ce = f[B], Y = t[ne].field, oe = ((_a2 = F[Y]) == null ? void 0 : _a2[B]) ?? null, he = Ce.findIndex(({ groupId: He, columnFields: Le }) => He === oe && Le.includes(Y)), Z = t[ce - 1].field, Ie = ((_b2 = F[Z]) == null ? void 0 : _b2[B]) ?? null, ee = Ce.findIndex(({ groupId: He, columnFields: Le }) => He === Ie && Le.includes(Z)), ye = Ce.slice(he, ee + 1).map((He) => b({}, He, {
        columnFields: He.columnFields.filter((Le) => u[Le] !== false)
      })).filter((He) => He.columnFields.length > 0), xe = ye[0].columnFields.indexOf(Y), Ne = ye[0].columnFields.slice(0, xe).reduce((He, Le) => {
        const Ke = A[Le];
        return He + (Ke.computedWidth ?? 0);
      }, 0);
      let Ue = ne;
      const Ge = ye.map(({ groupId: He, columnFields: Le }, Ke) => {
        const _e = a !== null && a.depth === B && Le.includes(a.field), me = l !== null && l.depth === B && Le.includes(l.field) ? 0 : -1, ve = {
          width: Le.reduce(($e, lt) => $e + A[lt].computedWidth, 0),
          fields: Le,
          colIndex: Ue
        }, pe = te.position, be = lr(pe, ve.width, Ue, H, y, O);
        Ue += Le.length;
        let je = Ke;
        return pe === Oe.LEFT && (je = Ue - 1), p.jsx($1, {
          groupId: He,
          width: ve.width,
          fields: ve.fields,
          colIndex: ve.colIndex,
          depth: B,
          isLastColumn: Ke === ye.length - 1,
          maxDepth: i,
          height: T,
          hasFocus: _e,
          tabIndex: me,
          pinnedPosition: pe,
          pinnedOffset: be,
          showLeftBorder: fl(pe, je),
          showRightBorder: pl(pe, je, ye.length, w.showColumnVerticalBorder, C)
        }, Ke);
      });
      return j(te, Ge, Ne);
    };
    return {
      renderContext: v,
      leftRenderContext: L,
      rightRenderContext: z,
      pinnedColumns: R,
      visibleColumns: t,
      columnPositions: H,
      getFillers: j,
      getColumnHeadersRow: K,
      getColumnsToRender: _,
      getColumnGroupHeadersRows: () => {
        if (i === 0) return null;
        const B = [];
        for (let te = 0; te < i; te += 1) B.push(p.jsxs(ec, {
          role: "row",
          "aria-rowindex": te + 1,
          ownerState: w,
          children: [
            L && W({
              depth: te,
              params: {
                position: Oe.LEFT,
                renderContext: L,
                maxLastColumn: L.lastColumnIndex
              }
            }),
            W({
              depth: te,
              params: {
                renderContext: v
              }
            }),
            z && W({
              depth: te,
              params: {
                position: Oe.RIGHT,
                renderContext: z,
                maxLastColumn: z.lastColumnIndex
              }
            })
          ]
        }, te));
        return B;
      },
      getPinnedCellOffset: lr,
      isDragging: !!g,
      getInnerProps: () => ({
        role: "rowgroup"
      })
    };
  }, L1 = [
    "className"
  ], j1 = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "columnHeaders"
      ]
    }, De, t);
  }, A1 = et("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaders",
    overridesResolver: (e, t) => t.columnHeaders
  })({
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
    borderTopRightRadius: "var(--unstable_DataGrid-radius)"
  }), z1 = ze(function(t, n) {
    const { className: o } = t, r = fe(t, L1), l = ie(), s = j1(l);
    return p.jsx(A1, b({
      className: ue(s.root, o),
      ownerState: l
    }, r, {
      role: "presentation",
      ref: n
    }));
  }), G1 = [
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
  ], _1 = ze(function(t, n) {
    const { visibleColumns: o, sortColumnLookup: r, filterColumnLookup: l, columnHeaderTabIndexState: s, columnGroupHeaderTabIndexState: a, columnHeaderFocus: i, columnGroupHeaderFocus: d, headerGroupingMaxDepth: u, columnMenuState: f, columnVisibility: h, columnGroupsHeaderStructure: g, hasOtherElementInTabSequence: m } = t, x = fe(t, G1), { getInnerProps: I, getColumnHeadersRow: S, getColumnGroupHeadersRows: w } = H1({
      visibleColumns: o,
      sortColumnLookup: r,
      filterColumnLookup: l,
      columnHeaderTabIndexState: s,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: u,
      columnMenuState: f,
      columnVisibility: h,
      columnGroupsHeaderStructure: g,
      hasOtherElementInTabSequence: m
    });
    return p.jsxs(z1, b({}, x, I(), {
      ref: n,
      children: [
        w(),
        S()
      ]
    }));
  }), V1 = On(_1);
  function N1(e) {
    return null;
  }
  function B1(e) {
    return null;
  }
  const W1 = ze(function(t, n) {
    const r = Ee().current.getLocaleText("noResultsOverlayLabel");
    return p.jsx(ri, b({}, t, {
      ref: n,
      children: r
    }));
  }), U1 = [
    "sortingOrder"
  ], K1 = c.memo(function(t) {
    const { sortingOrder: n } = t, o = fe(t, U1), r = ie(), [l] = n, s = l === "asc" ? r.slots.columnSortedAscendingIcon : r.slots.columnSortedDescendingIcon;
    return s ? p.jsx(s, b({}, o)) : null;
  }), q1 = [
    "native"
  ];
  function Y1(e) {
    let { native: t } = e, n = fe(e, q1);
    return t ? p.jsx("option", b({}, n)) : p.jsx(Lt, b({}, n));
  }
  const X1 = {
    booleanCellTrueIcon: Vy,
    booleanCellFalseIcon: Wl,
    columnMenuIcon: Ay,
    openFilterButtonIcon: Oy,
    filterPanelDeleteIcon: Wl,
    columnFilteredIcon: Ta,
    columnSelectorIcon: Ry,
    columnUnsortedIcon: K1,
    columnSortedAscendingIcon: Ma,
    columnSortedDescendingIcon: ka,
    columnResizeIcon: $y,
    densityCompactIcon: Hy,
    densityStandardIcon: Ly,
    densityComfortableIcon: jy,
    exportIcon: _y,
    moreActionsIcon: Ny,
    treeDataCollapseIcon: Fa,
    treeDataExpandIcon: Ea,
    groupingCriteriaCollapseIcon: Fa,
    groupingCriteriaExpandIcon: Ea,
    detailPanelExpandIcon: Oa,
    detailPanelCollapseIcon: zy,
    rowReorderIcon: Da,
    quickFilterIcon: Dy,
    quickFilterClearIcon: Wl,
    columnMenuHideIcon: By,
    columnMenuSortAscendingIcon: Ma,
    columnMenuSortDescendingIcon: ka,
    columnMenuFilterIcon: Ta,
    columnMenuManageColumnsIcon: Wy,
    columnMenuClearIcon: Uy,
    loadIcon: Gy,
    filterPanelAddIcon: Oa,
    filterPanelRemoveAllIcon: Ky,
    columnReorderIcon: Da
  }, Q1 = b({}, X1, {
    baseBadge: Pg,
    baseCheckbox: Zr,
    baseDivider: jd,
    baseTextField: Xt,
    baseFormControl: Jl,
    baseSelect: Jr,
    baseButton: ar,
    baseIconButton: Ot,
    baseInputAdornment: vc,
    baseTooltip: _n,
    basePopper: no,
    baseInputLabel: Zl,
    baseSelectOption: Y1,
    baseChip: vo
  }), J1 = b({}, Q1, {
    cell: sv,
    skeletonCell: fv,
    columnHeaderFilterIconButton: Fy,
    columnHeaderSortIcon: ky,
    columnMenu: uS,
    columnHeaders: V1,
    detailPanels: N1,
    footer: p0,
    footerRowCount: k0,
    toolbar: null,
    pinnedRows: B1,
    loadingOverlay: C0,
    noResultsOverlay: W1,
    noRowsOverlay: w0,
    pagination: S0,
    filterPanel: GS,
    columnsPanel: hS,
    columnsManagement: BS,
    panel: xS,
    row: R0
  }), Z1 = {
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
  }, eP = J1, tP = (e) => {
    const t = br(), n = Zx(c.useMemo(() => Bd({
      props: e,
      theme: t,
      name: "MuiDataGrid"
    }), [
      t,
      e
    ])), o = c.useMemo(() => b({}, db, n.localeText), [
      n.localeText
    ]), r = c.useMemo(() => Qx({
      defaultSlots: eP,
      slots: n.slots
    }), [
      n.slots
    ]), l = c.useMemo(() => Object.keys(xs).reduce((s, a) => (s[a] = n[a] ?? xs[a], s), {}), [
      n
    ]);
    return c.useMemo(() => b({}, n, l, {
      localeText: o,
      slots: r
    }, Z1), [
      n,
      o,
      r,
      l
    ]);
  }, nP = {
    hooks: {
      useGridAriaAttributes: $0,
      useGridRowAriaAttributes: H0,
      useCellAggregationResult: () => null
    }
  }, fd = ze(function(t, n) {
    var _a2;
    const o = tP(t), r = D1(o.apiRef, o);
    return p.jsx(L0, {
      privateApiRef: r,
      configuration: nP,
      props: o,
      children: p.jsx(Ov, b({
        className: o.className,
        style: o.style,
        sx: o.sx
      }, o.forwardedProps, (_a2 = o.slotProps) == null ? void 0 : _a2.root, {
        ref: n
      }))
    });
  }), oP = c.memo(fd);
  fd.propTypes = {
    apiRef: N.shape({
      current: N.object.isRequired
    }),
    "aria-label": N.string,
    "aria-labelledby": N.string,
    autoHeight: N.bool,
    autoPageSize: N.bool,
    autosizeOnMount: N.bool,
    autosizeOptions: N.shape({
      columns: N.arrayOf(N.string),
      disableColumnVirtualization: N.bool,
      expand: N.bool,
      includeHeaders: N.bool,
      includeOutliers: N.bool,
      outliersFactor: N.number
    }),
    cellModesModel: N.object,
    checkboxSelection: N.bool,
    classes: N.object,
    clipboardCopyCellDelimiter: N.string,
    columnBufferPx: N.number,
    columnGroupHeaderHeight: N.number,
    columnGroupingModel: N.arrayOf(N.object),
    columnHeaderHeight: N.number,
    columns: N.arrayOf(N.object).isRequired,
    columnVisibilityModel: N.object,
    density: N.oneOf([
      "comfortable",
      "compact",
      "standard"
    ]),
    disableAutosize: N.bool,
    disableColumnFilter: N.bool,
    disableColumnMenu: N.bool,
    disableColumnResize: N.bool,
    disableColumnSelector: N.bool,
    disableColumnSorting: N.bool,
    disableDensitySelector: N.bool,
    disableEval: N.bool,
    disableMultipleRowSelection: N.bool,
    disableRowSelectionOnClick: N.bool,
    disableVirtualization: N.bool,
    editMode: N.oneOf([
      "cell",
      "row"
    ]),
    estimatedRowCount: N.number,
    experimentalFeatures: N.shape({
      warnIfFocusStateIsNotSynced: N.bool
    }),
    filterDebounceMs: N.number,
    filterMode: N.oneOf([
      "client",
      "server"
    ]),
    filterModel: N.shape({
      items: N.arrayOf(N.shape({
        field: N.string.isRequired,
        id: N.oneOfType([
          N.number,
          N.string
        ]),
        operator: N.string.isRequired,
        value: N.any
      })).isRequired,
      logicOperator: N.oneOf([
        "and",
        "or"
      ]),
      quickFilterExcludeHiddenColumns: N.bool,
      quickFilterLogicOperator: N.oneOf([
        "and",
        "or"
      ]),
      quickFilterValues: N.array
    }),
    forwardedProps: N.object,
    getCellClassName: N.func,
    getDetailPanelContent: N.func,
    getEstimatedRowHeight: N.func,
    getRowClassName: N.func,
    getRowHeight: N.func,
    getRowId: N.func,
    getRowSpacing: N.func,
    hideFooter: N.bool,
    hideFooterPagination: N.bool,
    hideFooterSelectedRowCount: N.bool,
    ignoreDiacritics: N.bool,
    ignoreValueFormatterDuringExport: N.oneOfType([
      N.shape({
        clipboardExport: N.bool,
        csvExport: N.bool
      }),
      N.bool
    ]),
    indeterminateCheckboxAction: N.oneOf([
      "deselect",
      "select"
    ]),
    initialState: N.object,
    isCellEditable: N.func,
    isRowSelectable: N.func,
    keepNonExistentRowsSelected: N.bool,
    loading: N.bool,
    localeText: N.object,
    logger: N.shape({
      debug: N.func.isRequired,
      error: N.func.isRequired,
      info: N.func.isRequired,
      warn: N.func.isRequired
    }),
    logLevel: N.oneOf([
      "debug",
      "error",
      "info",
      "warn",
      false
    ]),
    nonce: N.string,
    onCellClick: N.func,
    onCellDoubleClick: N.func,
    onCellEditStart: N.func,
    onCellEditStop: N.func,
    onCellKeyDown: N.func,
    onCellModesModelChange: N.func,
    onClipboardCopy: N.func,
    onColumnHeaderClick: N.func,
    onColumnHeaderContextMenu: N.func,
    onColumnHeaderDoubleClick: N.func,
    onColumnHeaderEnter: N.func,
    onColumnHeaderLeave: N.func,
    onColumnHeaderOut: N.func,
    onColumnHeaderOver: N.func,
    onColumnOrderChange: N.func,
    onColumnResize: N.func,
    onColumnVisibilityModelChange: N.func,
    onColumnWidthChange: N.func,
    onDensityChange: N.func,
    onFilterModelChange: N.func,
    onMenuClose: N.func,
    onMenuOpen: N.func,
    onPaginationMetaChange: N.func,
    onPaginationModelChange: N.func,
    onPreferencePanelClose: N.func,
    onPreferencePanelOpen: N.func,
    onProcessRowUpdateError: N.func,
    onResize: N.func,
    onRowClick: N.func,
    onRowCountChange: N.func,
    onRowDoubleClick: N.func,
    onRowEditStart: N.func,
    onRowEditStop: N.func,
    onRowModesModelChange: N.func,
    onRowSelectionModelChange: N.func,
    onSortModelChange: N.func,
    onStateChange: N.func,
    pageSizeOptions: N.arrayOf(N.oneOfType([
      N.number,
      N.shape({
        label: N.string.isRequired,
        value: N.number.isRequired
      })
    ]).isRequired),
    pagination: N.oneOf([
      true
    ]),
    paginationMeta: N.shape({
      hasNextPage: N.bool
    }),
    paginationMode: N.oneOf([
      "client",
      "server"
    ]),
    paginationModel: N.shape({
      page: N.number.isRequired,
      pageSize: N.number.isRequired
    }),
    processRowUpdate: N.func,
    resetPageOnSortFilter: N.bool,
    resizeThrottleMs: N.number,
    rowBufferPx: N.number,
    rowCount: N.number,
    rowHeight: N.number,
    rowModesModel: N.object,
    rowPositionsDebounceMs: N.number,
    rows: N.arrayOf(N.object),
    rowSelection: N.bool,
    rowSelectionModel: N.oneOfType([
      N.arrayOf(N.oneOfType([
        N.number,
        N.string
      ]).isRequired),
      N.number,
      N.string
    ]),
    rowSpacingType: N.oneOf([
      "border",
      "margin"
    ]),
    scrollbarSize: N.number,
    showCellVerticalBorder: N.bool,
    showColumnVerticalBorder: N.bool,
    slotProps: N.object,
    slots: N.object,
    sortingMode: N.oneOf([
      "client",
      "server"
    ]),
    sortingOrder: N.arrayOf(N.oneOf([
      "asc",
      "desc"
    ])),
    sortModel: N.arrayOf(N.shape({
      field: N.string.isRequired,
      sort: N.oneOf([
        "asc",
        "desc"
      ])
    })),
    sx: N.oneOfType([
      N.arrayOf(N.oneOfType([
        N.func,
        N.object,
        N.bool
      ])),
      N.func,
      N.object
    ]),
    unstable_rowSpanning: N.bool,
    virtualizeColumnsWithAutoRowHeight: N.bool
  };
  function rP(e) {
    if (!e) return [
      10,
      25,
      50,
      100
    ];
    const t = e.split(",").map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n) && n > 0);
    return t.length > 0 ? t : [
      10,
      25,
      50,
      100
    ];
  }
  function tc(e) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e12 ? e : e * 1e3;
    if (typeof e == "string") {
      const t = new Date(e);
      return isNaN(t.getTime()) ? 0 : t.getTime();
    }
    return 0;
  }
  function lP(e) {
    return p.jsx(Vv, {
      children: p.jsx(i0, {
        ...e.quickFilterProps
      })
    });
  }
  const sP = () => {
    const e = c.useContext(Ad), { widget: { data: { oidObject: t } }, widget: n } = e, { data: o } = zd("oid"), r = Qd("oid"), l = t == null ? void 0 : t.type, s = l === "string" || l === "mixed", a = c.useMemo(() => {
      if (r == null) return [];
      let v;
      if (typeof r == "string") try {
        v = JSON.parse(r);
      } catch {
        return [];
      }
      else v = r;
      return Array.isArray(v) ? v : typeof v == "object" && v !== null ? [
        v
      ] : [];
    }, [
      r
    ]), i = c.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: d, rows: u } = Em(a, i), f = c.useMemo(() => Sc(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = c.useCallback((v) => ((R) => {
      const A = R.value;
      let $ = A != null ? String(A) : "";
      if (v.format) switch (v.format.type) {
        case "number":
          (typeof A == "number" || typeof A == "string" && !isNaN(Number(A))) && ($ = Ic(Number(A), {
            decimals: v.format.numberDecimals,
            prefix: v.format.numberPrefix,
            suffix: v.format.numberSuffix,
            thousands: v.format.numberThousandsSeparator
          }));
          break;
        case "date":
          $ = Pc(A, v.format.dateFormat);
          break;
        case "boolean":
          $ = ps(A, v.format.booleanTrue, v.format.booleanFalse);
          break;
      }
      const y = {}, C = {};
      if (v.cellStyle && v.cellStyle.length > 0) {
        for (const T of v.cellStyle) if (lm(T.condition, A)) {
          if (T.backgroundColor) {
            const O = Gn(T.backgroundColor);
            O ? y.background = O : y.backgroundColor = T.backgroundColor;
          }
          if (T.textColor) {
            const O = Gn(T.textColor);
            O ? (C.background = O, C.backgroundClip = "text", C.WebkitBackgroundClip = "text", C.color = "transparent") : C.color = T.textColor;
          }
          T.fontWeight && (C.fontWeight = T.fontWeight), T.fontStyle && (C.fontStyle = T.fontStyle);
          break;
        }
      }
      const M = "background" in y || "backgroundColor" in y;
      return p.jsx(Ze, {
        sx: {
          width: M ? "calc(100% + 20px)" : "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ...M && {
            ml: "-10px",
            px: "10px"
          },
          ...y
        },
        children: p.jsx(Pe, {
          variant: "body2",
          component: "span",
          noWrap: true,
          title: $,
          sx: {
            width: "100%",
            display: "block",
            lineHeight: "inherit",
            ...C
          },
          children: $
        })
      });
    }), []), g = c.useCallback((v) => {
      const R = v.value != null ? String(v.value) : "";
      return p.jsx(Pe, {
        variant: "body2",
        component: "span",
        noWrap: true,
        title: R,
        sx: {
          width: "100%",
          display: "block",
          lineHeight: "inherit"
        },
        children: R
      });
    }, []), m = c.useMemo(() => f.length > 0 ? f.filter((v) => v.visible).map((v) => {
      var _a2;
      const R = {
        field: v.path,
        headerName: v.headerName || v.path,
        flex: v.width ? 0 : 1,
        width: v.width,
        headerAlign: v.align || "left",
        align: v.align || "left",
        sortable: v.sortable ?? n.data.tableSorting !== false,
        filterable: v.filterable ?? n.data.tableFiltering === true
      };
      return v.format || v.cellStyle && v.cellStyle.length > 0 ? R.renderCell = h(v) : R.renderCell = g, ((_a2 = v.format) == null ? void 0 : _a2.type) === "date" && (R.sortComparator = (A, $) => tc(A) - tc($)), R;
    }) : d.map((v) => ({
      field: v.path,
      headerName: v.path.split(".").pop() || v.path,
      flex: 1,
      sortable: n.data.tableSorting !== false,
      filterable: n.data.tableFiltering === true,
      renderCell: g
    })), [
      f,
      d,
      n.data.tableSorting,
      n.data.tableFiltering,
      h,
      g
    ]), x = Number(n.data.tablePageSize) || 25, [I, S] = c.useState({
      page: 0,
      pageSize: x
    });
    c.useEffect(() => {
      S((v) => v.pageSize === x ? v : {
        page: 0,
        pageSize: x
      });
    }, [
      x
    ]);
    const w = c.useMemo(() => u.map((v, R) => ({
      id: R,
      ...v
    })), [
      u
    ]), F = c.useMemo(() => rP(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), H = c.useMemo(() => {
      const v = {
        border: 0,
        width: "100%",
        height: "100%"
      }, R = n.data.tableHeaderBgColor, A = n.data.tableHeaderTextColor, $ = n.data.tableHeaderFontSize;
      if (R || A || $) {
        const y = R ? Gn(R) : null;
        v["& .MuiDataGrid-columnHeaders"] = {
          ...y && {
            background: y
          },
          ...!y && R && {
            backgroundColor: R
          }
        }, v["& .MuiDataGrid-columnHeader"] = {
          ...y && {
            background: y
          },
          ...!y && R && {
            backgroundColor: R
          },
          ...A && {
            color: A
          },
          ...$ && {
            fontSize: `${$}px`
          }
        };
      }
      if (n.data.tableCellFontSize && (v["& .MuiDataGrid-cell"] = {
        fontSize: `${n.data.tableCellFontSize}px`
      }), n.data.tableStripedColor) {
        const y = n.data.tableStripedColor, C = Gn(y);
        v["& .MuiDataGrid-row:nth-of-type(even)"] = {
          background: C || y,
          backgroundColor: C ? "transparent" : y
        };
      }
      return n.data.tableShowRowBorders === false && (v["--DataGrid-rowBorderColor"] = "transparent"), v["& .MuiDataGrid-columnHeader--last .MuiDataGrid-columnSeparator"] = {
        display: "none"
      }, v;
    }, [
      n.data.tableHeaderBgColor,
      n.data.tableHeaderTextColor,
      n.data.tableHeaderFontSize,
      n.data.tableCellFontSize,
      n.data.tableStripedColor,
      n.data.tableShowRowBorders
    ]);
    return p.jsxs(Gd, {
      isValidType: s,
      data: o,
      oidValue: r,
      children: [
        p.jsx(_d, {
          data: o,
          widget: n
        }),
        s && m.length > 0 ? p.jsx(Ze, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          },
          children: p.jsx(oP, {
            rows: w,
            columns: m,
            density: n.data.tableDensity || "standard",
            rowHeight: Number(n.data.tableRowHeight) || void 0,
            columnHeaderHeight: Number(n.data.tableHeaderHeight) || void 0,
            pageSizeOptions: F,
            paginationModel: I,
            onPaginationModelChange: S,
            hideFooter: n.data.tablePagination === false,
            disableColumnSorting: n.data.tableSorting === false,
            disableColumnFilter: n.data.tableFiltering !== true,
            disableColumnMenu: n.data.tableColumnMenu === false,
            checkboxSelection: n.data.tableRowSelection === true,
            disableRowSelectionOnClick: true,
            showCellVerticalBorder: n.data.tableShowCellBorders === true,
            showColumnVerticalBorder: n.data.tableShowCellBorders === true,
            autosizeOnMount: n.data.tableAutoSize === true,
            slots: n.data.tableQuickFilter === true ? {
              toolbar: lP
            } : {},
            ...n.data.tableQuickFilter === true && {
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
            sx: H
          }, `grid-${n.data.tableAutoSize}`)
        }) : p.jsx(Ze, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: p.jsx(Pe, {
            variant: "body2",
            color: "text.secondary",
            children: s ? ae.t("json_table_no_data") : ae.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, iP = [
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
  Is = class extends ae {
    static createObjectFields() {
      const t = Vd([
        "string"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (l, s, a, i) => {
          if (!s.oid) for (const d of iP) delete s[d];
          r && await r(l, s, a, i);
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
              ...Ci()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Is.createObjectFields(),
              ...Om()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Ci({
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
      return Is.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, n) {
    }
    componentDidMount() {
      super.componentDidMount();
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
      return Nd(this.wrapContent(p.jsx(sP, {})), n);
    }
  };
});
export {
  __tla,
  Is as default
};
