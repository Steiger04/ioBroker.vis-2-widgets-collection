import { g as bt, a as ft, u as Ct, Z as ud, _ as dd, $ as vs, a0 as Qt, h as jt, j as f, s as se, d as de, e as me, a1 as ui, m as qe, a2 as er, b as at, P as Yt, B as Kl, c as Me, a3 as nt, a4 as Ke, a5 as pd, a6 as en, a7 as fd, f as St, a8 as gd, a9 as At, M as ce, i as lt, N as Cn, aa as hd, ab as lo, ac as qt, ad as di, ae as Tl, I as Vt, af as Xa, W as md, ag as bd, T as Ie, O as ys, ah as Ss, ai as gr, aj as hr, L as Cd, ak as Qa, al as wd, am as pi, an as Is, V as qr, o as tt, ao as Gt, G as le, ap as ql, aq as Yl, ar as xd, as as Ja, C as Mn, E as Ol, at as Sn, au as b, av as ge, aw as Ps, K as vd, ax as yd, ay as Za, az as fi, aA as Sd, aB as Id, aC as Pd, aD as Md, D as kd, n as Ed, q as Fd, v as gi, w as Td, x as Od, z as Dd, y as hi, A as Rd, __tla as __tla_0 } from "./useData-Dh4nd_La.js";
import { v as c, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Yr, __tla as __tla_2 } from "./Checkbox-d0B1W55c.js";
import { S as mn, s as Je, g as Hd, __tla as __tla_3 } from "./Stack-D45nKyxi.js";
import { g as $d, M as Ht, __tla as __tla_4 } from "./MenuItem-x_yBPAof.js";
import { F as Ln, __tla as __tla_5 } from "./FormControlLabel-bpsysXt-.js";
import { S as Er, __tla as __tla_6 } from "./Switch-Cveq0wsU.js";
import { S as Ld, __tla as __tla_7 } from "./Slider-CV4PB2I8.js";
import { B as lr, __tla as __tla_8 } from "./Button-DOw2ES1r.js";
import { D as jd, a as Ad, b as zd, L as wo, __tla as __tla_9 } from "./ListItemText-CPmYzEpD.js";
import { C as Gd, __tla as __tla_10 } from "./Close-Ctq43X6h.js";
import { u as _d, __tla as __tla_11 } from "./useOidValue-deN5pshO.js";
import { g as Vd } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_12 } from "./SwitchBase-CsNUGlgO.js";
import { __tla as __tla_13 } from "./listItemTextClasses-DZA6NAVK.js";
let xs;
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
  var ec = {
    exports: {}
  }, Nd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Bd = Nd, Wd = Bd;
  function tc() {
  }
  function nc() {
  }
  nc.resetWarningCache = tc;
  var Ud = function() {
    function e(o, r, l, s, a, i) {
      if (i !== Wd) {
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
      checkPropTypes: nc,
      resetWarningCache: tc
    };
    return n.PropTypes = n, n;
  };
  ec.exports = Ud();
  var Kd = ec.exports;
  const N = Vd(Kd), Ms = (e) => {
    const t = c.useRef({});
    return c.useEffect(() => {
      t.current = e;
    }), t.current;
  };
  function qd(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
  }
  function Yd(e) {
    return parseFloat(e);
  }
  function Xd(e) {
    return bt("MuiCollapse", e);
  }
  ft("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Qd = (e) => {
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
    return me(o, Xd, n);
  }, Jd = se("div", {
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
  })(qe(({ theme: e }) => ({
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
  }))), Zd = se("div", {
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
  }), ep = se("div", {
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
  }), Xl = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: l, className: s, collapsedSize: a = "0px", component: i, easing: d, in: u, onEnter: p, onEntered: h, onEntering: g, onExit: m, onExited: x, onExiting: v, orientation: I = "vertical", style: C, timeout: E = ud.standard, TransitionComponent: $ = dd, ...k } = o, H = {
      ...o,
      orientation: I,
      collapsedSize: a
    }, A = Qd(H), R = vs(), y = Qt(), w = c.useRef(null), M = c.useRef(), O = typeof a == "number" ? `${a}px` : a, D = I === "horizontal", _ = D ? "width" : "height", F = c.useRef(null), S = jt(n, F), T = (B) => (te) => {
      if (B) {
        const J = F.current;
        te === void 0 ? B(J) : B(J, te);
      }
    }, L = () => w.current ? w.current[D ? "clientWidth" : "clientHeight"] : 0, z = T((B, te) => {
      w.current && D && (w.current.style.position = "absolute"), B.style[_] = O, p && p(B, te);
    }), G = T((B, te) => {
      const J = L();
      w.current && D && (w.current.style.position = "");
      const { duration: ne, easing: ae } = ui({
        style: C,
        timeout: E,
        easing: d
      }, {
        mode: "enter"
      });
      if (E === "auto") {
        const we = R.transitions.getAutoHeightDuration(J);
        B.style.transitionDuration = `${we}ms`, M.current = we;
      } else B.style.transitionDuration = typeof ne == "string" ? ne : `${ne}ms`;
      B.style[_] = `${J}px`, B.style.transitionTimingFunction = ae, g && g(B, te);
    }), j = T((B, te) => {
      B.style[_] = "auto", h && h(B, te);
    }), V = T((B) => {
      B.style[_] = `${L()}px`, m && m(B);
    }), U = T(x), W = T((B) => {
      const te = L(), { duration: J, easing: ne } = ui({
        style: C,
        timeout: E,
        easing: d
      }, {
        mode: "exit"
      });
      if (E === "auto") {
        const ae = R.transitions.getAutoHeightDuration(te);
        B.style.transitionDuration = `${ae}ms`, M.current = ae;
      } else B.style.transitionDuration = typeof J == "string" ? J : `${J}ms`;
      B.style[_] = O, B.style.transitionTimingFunction = ne, v && v(B);
    }), K = (B) => {
      E === "auto" && y.start(M.current || 0, B), r && r(F.current, B);
    };
    return f.jsx($, {
      in: u,
      onEnter: z,
      onEntered: j,
      onEntering: G,
      onExit: V,
      onExited: U,
      onExiting: W,
      addEndListener: K,
      nodeRef: F,
      timeout: E === "auto" ? null : E,
      ...k,
      children: (B, { ownerState: te, ...J }) => f.jsx(Jd, {
        as: i,
        className: de(A.root, s, {
          entered: A.entered,
          exited: !u && O === "0px" && A.hidden
        }[B]),
        style: {
          [D ? "minWidth" : "minHeight"]: O,
          ...C
        },
        ref: S,
        ownerState: {
          ...H,
          state: B
        },
        ...J,
        children: f.jsx(Zd, {
          ownerState: {
            ...H,
            state: B
          },
          className: A.wrapper,
          ref: w,
          children: f.jsx(ep, {
            ownerState: {
              ...H,
              state: B
            },
            className: A.wrapperInner,
            children: l
          })
        })
      })
    });
  });
  Xl && (Xl.muiSupportAuto = true);
  const oc = c.createContext({});
  function tp(e) {
    return bt("MuiAccordion", e);
  }
  const Fr = ft("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), np = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: l } = e;
    return me({
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
    }, tp, t);
  }, op = se(Yt, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Fr.region}`]: t.region
        },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters
      ];
    }
  })(qe(({ theme: e }) => {
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
      [`&.${Fr.expanded}`]: {
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
      [`&.${Fr.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), qe(({ theme: e }) => ({
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
          [`&.${Fr.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), rp = se("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Tr = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: l, defaultExpanded: s = false, disabled: a = false, disableGutters: i = false, expanded: d, onChange: u, square: p = false, slots: h = {}, slotProps: g = {}, TransitionComponent: m, TransitionProps: x, ...v } = o, [I, C] = er({
      controlled: d,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), E = c.useCallback((L) => {
      C(!I), u && u(L, !I);
    }, [
      I,
      u,
      C
    ]), [$, ...k] = c.Children.toArray(r), H = c.useMemo(() => ({
      expanded: I,
      disabled: a,
      disableGutters: i,
      toggle: E
    }), [
      I,
      a,
      i,
      E
    ]), A = {
      ...o,
      square: p,
      disabled: a,
      disableGutters: i,
      expanded: I
    }, R = np(A), y = {
      transition: m,
      ...h
    }, w = {
      transition: x,
      ...g
    }, M = {
      slots: y,
      slotProps: w
    }, [O, D] = at("root", {
      elementType: op,
      externalForwardedProps: {
        ...M,
        ...v
      },
      className: de(R.root, l),
      shouldForwardComponentProp: true,
      ownerState: A,
      ref: n,
      additionalProps: {
        square: p
      }
    }), [_, F] = at("heading", {
      elementType: rp,
      externalForwardedProps: M,
      className: R.heading,
      ownerState: A
    }), [S, T] = at("transition", {
      elementType: Xl,
      externalForwardedProps: M,
      ownerState: A
    });
    return f.jsxs(O, {
      ...D,
      children: [
        f.jsx(_, {
          ...F,
          children: f.jsx(oc.Provider, {
            value: H,
            children: $
          })
        }),
        f.jsx(S, {
          in: I,
          timeout: "auto",
          ...T,
          children: f.jsx("div", {
            "aria-labelledby": $.props.id,
            id: $.props["aria-controls"],
            role: "region",
            className: R.region,
            children: k
          })
        })
      ]
    });
  });
  function lp(e) {
    return bt("MuiAccordionDetails", e);
  }
  ft("MuiAccordionDetails", [
    "root"
  ]);
  const sp = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "root"
      ]
    }, lp, t);
  }, ip = se("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(qe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), Or = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...l } = o, s = o, a = sp(s);
    return f.jsx(ip, {
      className: de(a.root, r),
      ref: n,
      ownerState: s,
      ...l
    });
  });
  function ap(e) {
    return bt("MuiAccordionSummary", e);
  }
  const go = ft("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), cp = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return me({
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
    }, ap, t);
  }, up = se(Kl, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(qe(({ theme: e }) => {
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
      [`&.${go.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${go.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${go.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${go.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), dp = se("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(qe(({ theme: e }) => ({
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
          [`&.${go.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), pp = se("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(qe(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${go.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Dr = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: l, expandIcon: s, focusVisibleClassName: a, onClick: i, slots: d, slotProps: u, ...p } = o, { disabled: h = false, disableGutters: g, expanded: m, toggle: x } = c.useContext(oc), v = (w) => {
      x && x(w), i && i(w);
    }, I = {
      ...o,
      expanded: m,
      disabled: h,
      disableGutters: g
    }, C = cp(I), E = {
      slots: d,
      slotProps: u
    }, [$, k] = at("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: de(C.root, l),
      elementType: up,
      externalForwardedProps: {
        ...E,
        ...p
      },
      ownerState: I,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: h,
        "aria-expanded": m,
        focusVisibleClassName: de(C.focusVisible, a)
      },
      getSlotProps: (w) => ({
        ...w,
        onClick: (M) => {
          var _a2;
          (_a2 = w.onClick) == null ? void 0 : _a2.call(w, M), v(M);
        }
      })
    }), [H, A] = at("content", {
      className: C.content,
      elementType: dp,
      externalForwardedProps: E,
      ownerState: I
    }), [R, y] = at("expandIconWrapper", {
      className: C.expandIconWrapper,
      elementType: pp,
      externalForwardedProps: E,
      ownerState: I
    });
    return f.jsxs($, {
      ...k,
      children: [
        f.jsx(H, {
          ...A,
          children: r
        }),
        s && f.jsx(R, {
          ...y,
          children: s
        })
      ]
    });
  }), fp = Me(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  function mi(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function rc(e = {}) {
    const { ignoreAccents: t = true, ignoreCase: n = true, limit: o, matchFrom: r = "any", stringify: l, trim: s = false } = e;
    return (a, { inputValue: i, getOptionLabel: d }) => {
      let u = s ? i.trim() : i;
      n && (u = u.toLowerCase()), t && (u = mi(u));
      const p = u ? a.filter((h) => {
        let g = (l || d)(h);
        return n && (g = g.toLowerCase()), t && (g = mi(g)), r === "start" ? g.startsWith(u) : g.includes(u);
      }) : a;
      return typeof o == "number" ? p.slice(0, o) : p;
    };
  }
  const gp = rc(), bi = 5, hp = (e) => {
    var _a2;
    return e.current !== null && ((_a2 = e.current.parentElement) == null ? void 0 : _a2.contains(document.activeElement));
  }, mp = [];
  function Ci(e, t, n) {
    if (t || e == null) return "";
    const o = n(e);
    return typeof o == "string" ? o : "";
  }
  function bp(e) {
    const { unstable_isActiveElementInListbox: t = hp, unstable_classNamePrefix: n = "Mui", autoComplete: o = false, autoHighlight: r = false, autoSelect: l = false, blurOnSelect: s = false, clearOnBlur: a = !e.freeSolo, clearOnEscape: i = false, componentName: d = "useAutocomplete", defaultValue: u = e.multiple ? mp : null, disableClearable: p = false, disableCloseOnSelect: h = false, disabled: g, disabledItemsFocusable: m = false, disableListWrap: x = false, filterOptions: v = gp, filterSelectedOptions: I = false, freeSolo: C = false, getOptionDisabled: E, getOptionKey: $, getOptionLabel: k = (X) => X.label ?? X, groupBy: H, handleHomeEndKeys: A = !e.freeSolo, id: R, includeInputInList: y = false, inputValue: w, isOptionEqualToValue: M = (X, q) => X === q, multiple: O = false, onChange: D, onClose: _, onHighlightChange: F, onInputChange: S, onOpen: T, open: L, openOnFocus: z = false, options: G, readOnly: j = false, selectOnFocus: V = !e.freeSolo, value: U } = e, W = nt(R);
    let K = k;
    K = (X) => {
      const q = k(X);
      return typeof q != "string" ? String(q) : q;
    };
    const B = c.useRef(false), te = c.useRef(true), J = c.useRef(null), ne = c.useRef(null), [ae, we] = c.useState(null), [Y, re] = c.useState(-1), ye = r ? 0 : -1, Z = c.useRef(ye), Se = c.useRef(Ci(u ?? U, O, K)).current, [ee, ve] = er({
      controlled: U,
      default: u,
      name: d
    }), [Ce, Fe] = er({
      controlled: w,
      default: Se,
      name: d,
      state: "inputValue"
    }), [Ne, Be] = c.useState(false), ze = c.useCallback((X, q, ue) => {
      if (!(O ? ee.length < q.length : q !== null) && !a) return;
      const _e = Ci(q, O, K);
      Ce !== _e && (Fe(_e), S && S(X, _e, ue));
    }, [
      K,
      Ce,
      O,
      S,
      Fe,
      a,
      ee
    ]), [$e, Le] = er({
      controlled: L,
      default: false,
      name: d,
      state: "open"
    }), [We, Ge] = c.useState(true), fe = !O && ee != null && Ce === K(ee), xe = $e && !j, pe = xe ? v(G.filter((X) => !(I && (O ? ee : [
      ee
    ]).some((q) => q !== null && M(X, q)))), {
      inputValue: fe && We ? "" : Ce,
      getOptionLabel: K
    }) : [], he = Ms({
      filteredOptions: pe,
      value: ee,
      inputValue: Ce
    });
    c.useEffect(() => {
      const X = ee !== he.value;
      Ne && !X || C && !X || ze(null, ee, "reset");
    }, [
      ee,
      ze,
      Ne,
      he.value,
      C
    ]);
    const je = $e && pe.length > 0 && !j, Re = Ke((X) => {
      X === -1 ? J.current.focus() : ae.querySelector(`[data-tag-index="${X}"]`).focus();
    });
    c.useEffect(() => {
      O && Y > ee.length - 1 && (re(-1), Re(-1));
    }, [
      ee,
      O,
      Y,
      Re
    ]);
    function rt(X, q) {
      if (!ne.current || X < 0 || X >= pe.length) return -1;
      let ue = X;
      for (; ; ) {
        const Te = ne.current.querySelector(`[data-option-index="${ue}"]`), _e = m ? false : !Te || Te.disabled || Te.getAttribute("aria-disabled") === "true";
        if (Te && Te.hasAttribute("tabindex") && !_e) return ue;
        if (q === "next" ? ue = (ue + 1) % pe.length : ue = (ue - 1 + pe.length) % pe.length, ue === X) return -1;
      }
    }
    const xt = Ke(({ event: X, index: q, reason: ue }) => {
      if (Z.current = q, q === -1 ? J.current.removeAttribute("aria-activedescendant") : J.current.setAttribute("aria-activedescendant", `${W}-option-${q}`), F && [
        "mouse",
        "keyboard",
        "touch"
      ].includes(ue) && F(X, q === -1 ? null : pe[q], ue), !ne.current) return;
      const Te = ne.current.querySelector(`[role="option"].${n}-focused`);
      Te && (Te.classList.remove(`${n}-focused`), Te.classList.remove(`${n}-focusVisible`));
      let _e = ne.current;
      if (ne.current.getAttribute("role") !== "listbox" && (_e = ne.current.parentElement.querySelector('[role="listbox"]')), !_e) return;
      if (q === -1) {
        _e.scrollTop = 0;
        return;
      }
      const Ze = ne.current.querySelector(`[data-option-index="${q}"]`);
      if (Ze && (Ze.classList.add(`${n}-focused`), ue === "keyboard" && Ze.classList.add(`${n}-focusVisible`), _e.scrollHeight > _e.clientHeight && ue !== "mouse" && ue !== "touch")) {
        const dt = Ze, Ut = _e.clientHeight + _e.scrollTop, Fl = dt.offsetTop + dt.offsetHeight;
        Fl > Ut ? _e.scrollTop = Fl - _e.clientHeight : dt.offsetTop - dt.offsetHeight * (H ? 1.3 : 0) < _e.scrollTop && (_e.scrollTop = dt.offsetTop - dt.offsetHeight * (H ? 1.3 : 0));
      }
    }), ut = Ke(({ event: X, diff: q, direction: ue = "next", reason: Te }) => {
      if (!xe) return;
      const Ze = rt((() => {
        const dt = pe.length - 1;
        if (q === "reset") return ye;
        if (q === "start") return 0;
        if (q === "end") return dt;
        const Ut = Z.current + q;
        return Ut < 0 ? Ut === -1 && y ? -1 : x && Z.current !== -1 || Math.abs(q) > 1 ? 0 : dt : Ut > dt ? Ut === dt + 1 && y ? -1 : x || Math.abs(q) > 1 ? dt : 0 : Ut;
      })(), ue);
      if (xt({
        index: Ze,
        reason: Te,
        event: X
      }), o && q !== "reset") if (Ze === -1) J.current.value = Ce;
      else {
        const dt = K(pe[Ze]);
        J.current.value = dt, dt.toLowerCase().indexOf(Ce.toLowerCase()) === 0 && Ce.length > 0 && J.current.setSelectionRange(Ce.length, dt.length);
      }
    }), In = () => {
      const X = (q, ue) => {
        const Te = q ? K(q) : "", _e = ue ? K(ue) : "";
        return Te === _e;
      };
      if (Z.current !== -1 && he.filteredOptions && he.filteredOptions.length !== pe.length && he.inputValue === Ce && (O ? ee.length === he.value.length && he.value.every((q, ue) => K(ee[ue]) === K(q)) : X(he.value, ee))) {
        const q = he.filteredOptions[Z.current];
        if (q) return pe.findIndex((ue) => K(ue) === K(q));
      }
      return -1;
    }, Ot = c.useCallback(() => {
      if (!xe) return;
      const X = In();
      if (X !== -1) {
        Z.current = X;
        return;
      }
      const q = O ? ee[0] : ee;
      if (pe.length === 0 || q == null) {
        ut({
          diff: "reset"
        });
        return;
      }
      if (ne.current) {
        if (q != null) {
          const ue = pe[Z.current];
          if (O && ue && ee.findIndex((_e) => M(ue, _e)) !== -1) return;
          const Te = pe.findIndex((_e) => M(_e, q));
          Te === -1 ? ut({
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
      O ? false : ee,
      I,
      ut,
      xt,
      xe,
      Ce,
      O
    ]), Pn = Ke((X) => {
      pd(ne, X), X && Ot();
    });
    c.useEffect(() => {
      Ot();
    }, [
      Ot
    ]);
    const It = (X) => {
      $e || (Le(true), Ge(true), T && T(X));
    }, zt = (X, q) => {
      $e && (Le(false), _ && _(X, q));
    }, Et = (X, q, ue, Te) => {
      if (O) {
        if (ee.length === q.length && ee.every((_e, Ze) => _e === q[Ze])) return;
      } else if (ee === q) return;
      D && D(X, q, ue, Te), ve(q);
    }, Dt = c.useRef(false), Ft = (X, q, ue = "selectOption", Te = "options") => {
      let _e = ue, Ze = q;
      if (O) {
        Ze = Array.isArray(ee) ? ee.slice() : [];
        const dt = Ze.findIndex((Ut) => M(q, Ut));
        dt === -1 ? Ze.push(q) : Te !== "freeSolo" && (Ze.splice(dt, 1), _e = "removeOption");
      }
      ze(X, Ze, _e), Et(X, Ze, _e, {
        option: q
      }), !h && (!X || !X.ctrlKey && !X.metaKey) && zt(X, _e), (s === true || s === "touch" && Dt.current || s === "mouse" && !Dt.current) && J.current.blur();
    };
    function oo(X, q) {
      if (X === -1) return -1;
      let ue = X;
      for (; ; ) {
        if (q === "next" && ue === ee.length || q === "previous" && ue === -1) return -1;
        const Te = ae.querySelector(`[data-tag-index="${ue}"]`);
        if (!Te || !Te.hasAttribute("tabindex") || Te.disabled || Te.getAttribute("aria-disabled") === "true") ue += q === "next" ? 1 : -1;
        else return ue;
      }
    }
    const ro = (X, q) => {
      if (!O) return;
      Ce === "" && zt(X, "toggleInput");
      let ue = Y;
      Y === -1 ? Ce === "" && q === "previous" && (ue = ee.length - 1) : (ue += q === "next" ? 1 : -1, ue < 0 && (ue = 0), ue === ee.length && (ue = -1)), ue = oo(ue, q), re(ue), Re(ue);
    }, Pe = (X) => {
      B.current = true, Fe(""), S && S(X, "", "clear"), Et(X, O ? [] : null, "clear");
    }, Wt = (X) => (q) => {
      if (X.onKeyDown && X.onKeyDown(q), !q.defaultMuiPrevented && (Y !== -1 && ![
        "ArrowLeft",
        "ArrowRight"
      ].includes(q.key) && (re(-1), Re(-1)), q.which !== 229)) switch (q.key) {
        case "Home":
          xe && A && (q.preventDefault(), ut({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: q
          }));
          break;
        case "End":
          xe && A && (q.preventDefault(), ut({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: q
          }));
          break;
        case "PageUp":
          q.preventDefault(), ut({
            diff: -bi,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "PageDown":
          q.preventDefault(), ut({
            diff: bi,
            direction: "next",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "ArrowDown":
          q.preventDefault(), ut({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "ArrowUp":
          q.preventDefault(), ut({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "ArrowLeft":
          ro(q, "previous");
          break;
        case "ArrowRight":
          ro(q, "next");
          break;
        case "Enter":
          if (Z.current !== -1 && xe) {
            const ue = pe[Z.current], Te = E ? E(ue) : false;
            if (q.preventDefault(), Te) return;
            Ft(q, ue, "selectOption"), o && J.current.setSelectionRange(J.current.value.length, J.current.value.length);
          } else C && Ce !== "" && fe === false && (O && q.preventDefault(), Ft(q, Ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          xe ? (q.preventDefault(), q.stopPropagation(), zt(q, "escape")) : i && (Ce !== "" || O && ee.length > 0) && (q.preventDefault(), q.stopPropagation(), Pe(q));
          break;
        case "Backspace":
          if (O && !j && Ce === "" && ee.length > 0) {
            const ue = Y === -1 ? ee.length - 1 : Y, Te = ee.slice();
            Te.splice(ue, 1), Et(q, Te, "removeOption", {
              option: ee[ue]
            });
          }
          break;
        case "Delete":
          if (O && !j && Ce === "" && ee.length > 0 && Y !== -1) {
            const ue = Y, Te = ee.slice();
            Te.splice(ue, 1), Et(q, Te, "removeOption", {
              option: ee[ue]
            });
          }
          break;
      }
    }, Il = (X) => {
      Be(true), z && !B.current && It(X);
    }, Kn = (X) => {
      if (t(ne)) {
        J.current.focus();
        return;
      }
      Be(false), te.current = true, B.current = false, l && Z.current !== -1 && xe ? Ft(X, pe[Z.current], "blur") : l && C && Ce !== "" ? Ft(X, Ce, "blur", "freeSolo") : a && ze(X, ee, "blur"), zt(X, "blur");
    }, _o = (X) => {
      const q = X.target.value;
      Ce !== q && (Fe(q), Ge(false), S && S(X, q, "input")), q === "" ? !p && !O && Et(X, null, "clear") : It(X);
    }, Vo = (X) => {
      const q = Number(X.currentTarget.getAttribute("data-option-index"));
      Z.current !== q && xt({
        event: X,
        index: q,
        reason: "mouse"
      });
    }, Pl = (X) => {
      xt({
        event: X,
        index: Number(X.currentTarget.getAttribute("data-option-index")),
        reason: "touch"
      }), Dt.current = true;
    }, Ml = (X) => {
      const q = Number(X.currentTarget.getAttribute("data-option-index"));
      Ft(X, pe[q], "selectOption"), Dt.current = false;
    }, kl = (X) => (q) => {
      const ue = ee.slice();
      ue.splice(X, 1), Et(q, ue, "removeOption", {
        option: ee[X]
      });
    }, El = (X) => {
      $e ? zt(X, "toggleInput") : It(X);
    }, No = (X) => {
      X.currentTarget.contains(X.target) && X.target.getAttribute("id") !== W && X.preventDefault();
    }, Mt = (X) => {
      X.currentTarget.contains(X.target) && (J.current.focus(), V && te.current && J.current.selectionEnd - J.current.selectionStart === 0 && J.current.select(), te.current = false);
    }, vt = (X) => {
      !g && (Ce === "" || !$e) && El(X);
    };
    let gn = C && Ce.length > 0;
    gn = gn || (O ? ee.length > 0 : ee !== null);
    let kr = pe;
    return H && (kr = pe.reduce((X, q, ue) => {
      const Te = H(q);
      return X.length > 0 && X[X.length - 1].group === Te ? X[X.length - 1].options.push(q) : X.push({
        key: ue,
        index: ue,
        group: Te,
        options: [
          q
        ]
      }), X;
    }, [])), g && Ne && Kn(), {
      getRootProps: (X = {}) => ({
        ...X,
        onKeyDown: Wt(X),
        onMouseDown: No,
        onClick: Mt
      }),
      getInputLabelProps: () => ({
        id: `${W}-label`,
        htmlFor: W
      }),
      getInputProps: () => ({
        id: W,
        value: Ce,
        onBlur: Kn,
        onFocus: Il,
        onChange: _o,
        onMouseDown: vt,
        "aria-activedescendant": xe ? "" : null,
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
        onClick: Pe
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: El
      }),
      getTagProps: ({ index: X }) => ({
        key: X,
        "data-tag-index": X,
        tabIndex: -1,
        ...!j && {
          onDelete: kl(X)
        }
      }),
      getListboxProps: () => ({
        role: "listbox",
        id: `${W}-listbox`,
        "aria-labelledby": `${W}-label`,
        ref: Pn,
        onMouseDown: (X) => {
          X.preventDefault();
        }
      }),
      getOptionProps: ({ index: X, option: q }) => {
        const ue = (O ? ee : [
          ee
        ]).some((_e) => _e != null && M(q, _e)), Te = E ? E(q) : false;
        return {
          key: ($ == null ? void 0 : $(q)) ?? K(q),
          tabIndex: -1,
          role: "option",
          id: `${W}-option-${X}`,
          onMouseMove: Vo,
          onClick: Ml,
          onTouchStart: Pl,
          "data-option-index": X,
          "aria-disabled": Te,
          "aria-selected": ue
        };
      },
      id: W,
      inputValue: Ce,
      value: ee,
      dirty: gn,
      expanded: xe && ae,
      popupOpen: xe,
      focused: Ne || Y !== -1,
      anchorEl: ae,
      setAnchorEl: we,
      focusedTag: Y,
      groupedOptions: kr
    };
  }
  var $t = "top", rn = "bottom", ln = "right", Lt = "left", ks = "auto", mr = [
    $t,
    rn,
    ln,
    Lt
  ], So = "start", sr = "end", Cp = "clippingParents", lc = "viewport", Wo = "popper", wp = "reference", wi = mr.reduce(function(e, t) {
    return e.concat([
      t + "-" + So,
      t + "-" + sr
    ]);
  }, []), sc = [].concat(mr, [
    ks
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + So,
      t + "-" + sr
    ]);
  }, []), xp = "beforeRead", vp = "read", yp = "afterRead", Sp = "beforeMain", Ip = "main", Pp = "afterMain", Mp = "beforeWrite", kp = "write", Ep = "afterWrite", Fp = [
    xp,
    vp,
    yp,
    Sp,
    Ip,
    Pp,
    Mp,
    kp,
    Ep
  ];
  function vn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Bt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Qn(e) {
    var t = Bt(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function tn(e) {
    var t = Bt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Es(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Bt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Tp(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
      !tn(l) || !vn(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
        var a = r[s];
        a === false ? l.removeAttribute(s) : l.setAttribute(s, a === true ? "" : a);
      }));
    });
  }
  function Op(e) {
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
        !tn(r) || !vn(r) || (Object.assign(r.style, a), Object.keys(l).forEach(function(i) {
          r.removeAttribute(i);
        }));
      });
    };
  }
  const Dp = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Tp,
    effect: Op,
    requires: [
      "computeStyles"
    ]
  };
  function wn(e) {
    return e.split("-")[0];
  }
  var Yn = Math.max, Xr = Math.min, Io = Math.round;
  function Ql() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function ic() {
    return !/^((?!chrome|android).)*safari/i.test(Ql());
  }
  function Po(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, l = 1;
    t && tn(e) && (r = e.offsetWidth > 0 && Io(o.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && Io(o.height) / e.offsetHeight || 1);
    var s = Qn(e) ? Bt(e) : window, a = s.visualViewport, i = !ic() && n, d = (o.left + (i && a ? a.offsetLeft : 0)) / r, u = (o.top + (i && a ? a.offsetTop : 0)) / l, p = o.width / r, h = o.height / l;
    return {
      width: p,
      height: h,
      top: u,
      right: d + p,
      bottom: u + h,
      left: d,
      x: d,
      y: u
    };
  }
  function Fs(e) {
    var t = Po(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function ac(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Es(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function Fn(e) {
    return Bt(e).getComputedStyle(e);
  }
  function Rp(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(vn(e)) >= 0;
  }
  function Bn(e) {
    return ((Qn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function pl(e) {
    return vn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Es(e) ? e.host : null) || Bn(e);
  }
  function xi(e) {
    return !tn(e) || Fn(e).position === "fixed" ? null : e.offsetParent;
  }
  function Hp(e) {
    var t = /firefox/i.test(Ql()), n = /Trident/i.test(Ql());
    if (n && tn(e)) {
      var o = Fn(e);
      if (o.position === "fixed") return null;
    }
    var r = pl(e);
    for (Es(r) && (r = r.host); tn(r) && [
      "html",
      "body"
    ].indexOf(vn(r)) < 0; ) {
      var l = Fn(r);
      if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function br(e) {
    for (var t = Bt(e), n = xi(e); n && Rp(n) && Fn(n).position === "static"; ) n = xi(n);
    return n && (vn(n) === "html" || vn(n) === "body" && Fn(n).position === "static") ? t : n || Hp(e) || t;
  }
  function Ts(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function tr(e, t, n) {
    return Yn(e, Xr(t, n));
  }
  function $p(e, t, n) {
    var o = tr(e, t, n);
    return o > n ? n : o;
  }
  function cc() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function uc(e) {
    return Object.assign({}, cc(), e);
  }
  function dc(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Lp = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, uc(typeof t != "number" ? t : dc(t, mr));
  };
  function jp(e) {
    var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = wn(n.placement), i = Ts(a), d = [
      Lt,
      ln
    ].indexOf(a) >= 0, u = d ? "height" : "width";
    if (!(!l || !s)) {
      var p = Lp(r.padding, n), h = Fs(l), g = i === "y" ? $t : Lt, m = i === "y" ? rn : ln, x = n.rects.reference[u] + n.rects.reference[i] - s[i] - n.rects.popper[u], v = s[i] - n.rects.reference[i], I = br(l), C = I ? i === "y" ? I.clientHeight || 0 : I.clientWidth || 0 : 0, E = x / 2 - v / 2, $ = p[g], k = C - h[u] - p[m], H = C / 2 - h[u] / 2 + E, A = tr($, H, k), R = i;
      n.modifiersData[o] = (t = {}, t[R] = A, t.centerOffset = A - H, t);
    }
  }
  function Ap(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || ac(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const zp = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: jp,
    effect: Ap,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Mo(e) {
    return e.split("-")[1];
  }
  var Gp = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function _p(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Io(n * r) / r || 0,
      y: Io(o * r) / r || 0
    };
  }
  function vi(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, p = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, m = s.y, x = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
      x: g,
      y: x
    }) : {
      x: g,
      y: x
    };
    g = v.x, x = v.y;
    var I = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), E = Lt, $ = $t, k = window;
    if (d) {
      var H = br(n), A = "clientHeight", R = "clientWidth";
      if (H === Bt(n) && (H = Bn(n), Fn(H).position !== "static" && a === "absolute" && (A = "scrollHeight", R = "scrollWidth")), H = H, r === $t || (r === Lt || r === ln) && l === sr) {
        $ = rn;
        var y = p && H === k && k.visualViewport ? k.visualViewport.height : H[A];
        x -= y - o.height, x *= i ? 1 : -1;
      }
      if (r === Lt || (r === $t || r === rn) && l === sr) {
        E = ln;
        var w = p && H === k && k.visualViewport ? k.visualViewport.width : H[R];
        g -= w - o.width, g *= i ? 1 : -1;
      }
    }
    var M = Object.assign({
      position: a
    }, d && Gp), O = u === true ? _p({
      x: g,
      y: x
    }, Bt(n)) : {
      x: g,
      y: x
    };
    if (g = O.x, x = O.y, i) {
      var D;
      return Object.assign({}, M, (D = {}, D[$] = C ? "0" : "", D[E] = I ? "0" : "", D.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + x + "px)" : "translate3d(" + g + "px, " + x + "px, 0)", D));
    }
    return Object.assign({}, M, (t = {}, t[$] = C ? x + "px" : "", t[E] = I ? g + "px" : "", t.transform = "", t));
  }
  function Vp(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, l = n.adaptive, s = l === void 0 ? true : l, a = n.roundOffsets, i = a === void 0 ? true : a, d = {
      placement: wn(t.placement),
      variation: Mo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vi(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: i
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vi(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: i
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Np = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Vp,
    data: {}
  };
  var Rr = {
    passive: true
  };
  function Bp(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? true : r, s = o.resize, a = s === void 0 ? true : s, i = Bt(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return l && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Rr);
    }), a && i.addEventListener("resize", n.update, Rr), function() {
      l && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Rr);
      }), a && i.removeEventListener("resize", n.update, Rr);
    };
  }
  const Wp = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Bp,
    data: {}
  };
  var Up = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Vr(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Up[t];
    });
  }
  var Kp = {
    start: "end",
    end: "start"
  };
  function yi(e) {
    return e.replace(/start|end/g, function(t) {
      return Kp[t];
    });
  }
  function Os(e) {
    var t = Bt(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Ds(e) {
    return Po(Bn(e)).left + Os(e).scrollLeft;
  }
  function qp(e, t) {
    var n = Bt(e), o = Bn(e), r = n.visualViewport, l = o.clientWidth, s = o.clientHeight, a = 0, i = 0;
    if (r) {
      l = r.width, s = r.height;
      var d = ic();
      (d || !d && t === "fixed") && (a = r.offsetLeft, i = r.offsetTop);
    }
    return {
      width: l,
      height: s,
      x: a + Ds(e),
      y: i
    };
  }
  function Yp(e) {
    var t, n = Bn(e), o = Os(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Yn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Yn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Ds(e), i = -o.scrollTop;
    return Fn(r || n).direction === "rtl" && (a += Yn(n.clientWidth, r ? r.clientWidth : 0) - l), {
      width: l,
      height: s,
      x: a,
      y: i
    };
  }
  function Rs(e) {
    var t = Fn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function pc(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(vn(e)) >= 0 ? e.ownerDocument.body : tn(e) && Rs(e) ? e : pc(pl(e));
  }
  function nr(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = pc(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Bt(o), s = r ? [
      l
    ].concat(l.visualViewport || [], Rs(o) ? o : []) : o, a = t.concat(s);
    return r ? a : a.concat(nr(pl(s)));
  }
  function Jl(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Xp(e, t) {
    var n = Po(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function Si(e, t, n) {
    return t === lc ? Jl(qp(e, n)) : Qn(t) ? Xp(t, n) : Jl(Yp(Bn(e)));
  }
  function Qp(e) {
    var t = nr(pl(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(Fn(e).position) >= 0, o = n && tn(e) ? br(e) : e;
    return Qn(o) ? t.filter(function(r) {
      return Qn(r) && ac(r, o) && vn(r) !== "body";
    }) : [];
  }
  function Jp(e, t, n, o) {
    var r = t === "clippingParents" ? Qp(e) : [].concat(t), l = [].concat(r, [
      n
    ]), s = l[0], a = l.reduce(function(i, d) {
      var u = Si(e, d, o);
      return i.top = Yn(u.top, i.top), i.right = Xr(u.right, i.right), i.bottom = Xr(u.bottom, i.bottom), i.left = Yn(u.left, i.left), i;
    }, Si(e, s, o));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function fc(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? wn(o) : null, l = o ? Mo(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
    switch (r) {
      case $t:
        i = {
          x: s,
          y: t.y - n.height
        };
        break;
      case rn:
        i = {
          x: s,
          y: t.y + t.height
        };
        break;
      case ln:
        i = {
          x: t.x + t.width,
          y: a
        };
        break;
      case Lt:
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
    var d = r ? Ts(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (l) {
        case So:
          i[d] = i[d] - (t[u] / 2 - n[u] / 2);
          break;
        case sr:
          i[d] = i[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return i;
  }
  function ir(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.strategy, s = l === void 0 ? e.strategy : l, a = n.boundary, i = a === void 0 ? Cp : a, d = n.rootBoundary, u = d === void 0 ? lc : d, p = n.elementContext, h = p === void 0 ? Wo : p, g = n.altBoundary, m = g === void 0 ? false : g, x = n.padding, v = x === void 0 ? 0 : x, I = uc(typeof v != "number" ? v : dc(v, mr)), C = h === Wo ? wp : Wo, E = e.rects.popper, $ = e.elements[m ? C : h], k = Jp(Qn($) ? $ : $.contextElement || Bn(e.elements.popper), i, u, s), H = Po(e.elements.reference), A = fc({
      reference: H,
      element: E,
      placement: r
    }), R = Jl(Object.assign({}, E, A)), y = h === Wo ? R : H, w = {
      top: k.top - y.top + I.top,
      bottom: y.bottom - k.bottom + I.bottom,
      left: k.left - y.left + I.left,
      right: y.right - k.right + I.right
    }, M = e.modifiersData.offset;
    if (h === Wo && M) {
      var O = M[r];
      Object.keys(w).forEach(function(D) {
        var _ = [
          ln,
          rn
        ].indexOf(D) >= 0 ? 1 : -1, F = [
          $t,
          rn
        ].indexOf(D) >= 0 ? "y" : "x";
        w[D] += O[F] * _;
      });
    }
    return w;
  }
  function Zp(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, d = i === void 0 ? sc : i, u = Mo(o), p = u ? a ? wi : wi.filter(function(m) {
      return Mo(m) === u;
    }) : mr, h = p.filter(function(m) {
      return d.indexOf(m) >= 0;
    });
    h.length === 0 && (h = p);
    var g = h.reduce(function(m, x) {
      return m[x] = ir(e, {
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
  function ef(e) {
    if (wn(e) === ks) return [];
    var t = Vr(e);
    return [
      yi(e),
      t,
      yi(t)
    ];
  }
  function tf(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? true : s, i = n.fallbackPlacements, d = n.padding, u = n.boundary, p = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, m = g === void 0 ? true : g, x = n.allowedAutoPlacements, v = t.options.placement, I = wn(v), C = I === v, E = i || (C || !m ? [
        Vr(v)
      ] : ef(v)), $ = [
        v
      ].concat(E).reduce(function(W, K) {
        return W.concat(wn(K) === ks ? Zp(t, {
          placement: K,
          boundary: u,
          rootBoundary: p,
          padding: d,
          flipVariations: m,
          allowedAutoPlacements: x
        }) : K);
      }, []), k = t.rects.reference, H = t.rects.popper, A = /* @__PURE__ */ new Map(), R = true, y = $[0], w = 0; w < $.length; w++) {
        var M = $[w], O = wn(M), D = Mo(M) === So, _ = [
          $t,
          rn
        ].indexOf(O) >= 0, F = _ ? "width" : "height", S = ir(t, {
          placement: M,
          boundary: u,
          rootBoundary: p,
          altBoundary: h,
          padding: d
        }), T = _ ? D ? ln : Lt : D ? rn : $t;
        k[F] > H[F] && (T = Vr(T));
        var L = Vr(T), z = [];
        if (l && z.push(S[O] <= 0), a && z.push(S[T] <= 0, S[L] <= 0), z.every(function(W) {
          return W;
        })) {
          y = M, R = false;
          break;
        }
        A.set(M, z);
      }
      if (R) for (var G = m ? 3 : 1, j = function(K) {
        var B = $.find(function(te) {
          var J = A.get(te);
          if (J) return J.slice(0, K).every(function(ne) {
            return ne;
          });
        });
        if (B) return y = B, "break";
      }, V = G; V > 0; V--) {
        var U = j(V);
        if (U === "break") break;
      }
      t.placement !== y && (t.modifiersData[o]._skip = true, t.placement = y, t.reset = true);
    }
  }
  const nf = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: tf,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Ii(e, t, n) {
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
  function Pi(e) {
    return [
      $t,
      ln,
      rn,
      Lt
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function of(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = ir(t, {
      elementContext: "reference"
    }), a = ir(t, {
      altBoundary: true
    }), i = Ii(s, o), d = Ii(a, r, l), u = Pi(i), p = Pi(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: i,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": p
    });
  }
  const rf = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: of
  };
  function lf(e, t, n) {
    var o = wn(e), r = [
      Lt,
      $t
    ].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = l[0], a = l[1];
    return s = s || 0, a = (a || 0) * r, [
      Lt,
      ln
    ].indexOf(o) >= 0 ? {
      x: a,
      y: s
    } : {
      x: s,
      y: a
    };
  }
  function sf(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [
      0,
      0
    ] : r, s = sc.reduce(function(u, p) {
      return u[p] = lf(p, t.rects, l), u;
    }, {}), a = s[t.placement], i = a.x, d = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const af = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: sf
  };
  function cf(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = fc({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const uf = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: cf,
    data: {}
  };
  function df(e) {
    return e === "x" ? "y" : "x";
  }
  function pf(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? false : s, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, p = n.padding, h = n.tether, g = h === void 0 ? true : h, m = n.tetherOffset, x = m === void 0 ? 0 : m, v = ir(t, {
      boundary: i,
      rootBoundary: d,
      padding: p,
      altBoundary: u
    }), I = wn(t.placement), C = Mo(t.placement), E = !C, $ = Ts(I), k = df($), H = t.modifiersData.popperOffsets, A = t.rects.reference, R = t.rects.popper, y = typeof x == "function" ? x(Object.assign({}, t.rects, {
      placement: t.placement
    })) : x, w = typeof y == "number" ? {
      mainAxis: y,
      altAxis: y
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, y), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
      x: 0,
      y: 0
    };
    if (H) {
      if (l) {
        var D, _ = $ === "y" ? $t : Lt, F = $ === "y" ? rn : ln, S = $ === "y" ? "height" : "width", T = H[$], L = T + v[_], z = T - v[F], G = g ? -R[S] / 2 : 0, j = C === So ? A[S] : R[S], V = C === So ? -R[S] : -A[S], U = t.elements.arrow, W = g && U ? Fs(U) : {
          width: 0,
          height: 0
        }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cc(), B = K[_], te = K[F], J = tr(0, A[S], W[S]), ne = E ? A[S] / 2 - G - J - B - w.mainAxis : j - J - B - w.mainAxis, ae = E ? -A[S] / 2 + G + J + te + w.mainAxis : V + J + te + w.mainAxis, we = t.elements.arrow && br(t.elements.arrow), Y = we ? $ === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, re = (D = M == null ? void 0 : M[$]) != null ? D : 0, ye = T + ne - re - Y, Z = T + ae - re, Se = tr(g ? Xr(L, ye) : L, T, g ? Yn(z, Z) : z);
        H[$] = Se, O[$] = Se - T;
      }
      if (a) {
        var ee, ve = $ === "x" ? $t : Lt, Ce = $ === "x" ? rn : ln, Fe = H[k], Ne = k === "y" ? "height" : "width", Be = Fe + v[ve], ze = Fe - v[Ce], $e = [
          $t,
          Lt
        ].indexOf(I) !== -1, Le = (ee = M == null ? void 0 : M[k]) != null ? ee : 0, We = $e ? Be : Fe - A[Ne] - R[Ne] - Le + w.altAxis, Ge = $e ? Fe + A[Ne] + R[Ne] - Le - w.altAxis : ze, fe = g && $e ? $p(We, Fe, Ge) : tr(g ? We : Be, Fe, g ? Ge : ze);
        H[k] = fe, O[k] = fe - Fe;
      }
      t.modifiersData[o] = O;
    }
  }
  const ff = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: pf,
    requiresIfExists: [
      "offset"
    ]
  };
  function gf(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function hf(e) {
    return e === Bt(e) || !tn(e) ? Os(e) : gf(e);
  }
  function mf(e) {
    var t = e.getBoundingClientRect(), n = Io(t.width) / e.offsetWidth || 1, o = Io(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function bf(e, t, n) {
    n === void 0 && (n = false);
    var o = tn(t), r = tn(t) && mf(t), l = Bn(t), s = Po(e, r, n), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, i = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((vn(t) !== "body" || Rs(l)) && (a = hf(t)), tn(t) ? (i = Po(t, true), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Ds(l))), {
      x: s.left + a.scrollLeft - i.x,
      y: s.top + a.scrollTop - i.y,
      width: s.width,
      height: s.height
    };
  }
  function Cf(e) {
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
  function wf(e) {
    var t = Cf(e);
    return Fp.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function xf(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function vf(e) {
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
  var Mi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function ki() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function yf(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Mi : r;
    return function(a, i, d) {
      d === void 0 && (d = l);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Mi, l),
        modifiersData: {},
        elements: {
          reference: a,
          popper: i
        },
        attributes: {},
        styles: {}
      }, p = [], h = false, g = {
        state: u,
        setOptions: function(I) {
          var C = typeof I == "function" ? I(u.options) : I;
          x(), u.options = Object.assign({}, l, u.options, C), u.scrollParents = {
            reference: Qn(a) ? nr(a) : a.contextElement ? nr(a.contextElement) : [],
            popper: nr(i)
          };
          var E = wf(vf([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = E.filter(function($) {
            return $.enabled;
          }), m(), g.update();
        },
        forceUpdate: function() {
          if (!h) {
            var I = u.elements, C = I.reference, E = I.popper;
            if (ki(C, E)) {
              u.rects = {
                reference: bf(C, br(E), u.options.strategy === "fixed"),
                popper: Fs(E)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(w) {
                return u.modifiersData[w.name] = Object.assign({}, w.data);
              });
              for (var $ = 0; $ < u.orderedModifiers.length; $++) {
                if (u.reset === true) {
                  u.reset = false, $ = -1;
                  continue;
                }
                var k = u.orderedModifiers[$], H = k.fn, A = k.options, R = A === void 0 ? {} : A, y = k.name;
                typeof H == "function" && (u = H({
                  state: u,
                  options: R,
                  name: y,
                  instance: g
                }) || u);
              }
            }
          }
        },
        update: xf(function() {
          return new Promise(function(v) {
            g.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          x(), h = true;
        }
      };
      if (!ki(a, i)) return g;
      g.setOptions(d).then(function(v) {
        !h && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function m() {
        u.orderedModifiers.forEach(function(v) {
          var I = v.name, C = v.options, E = C === void 0 ? {} : C, $ = v.effect;
          if (typeof $ == "function") {
            var k = $({
              state: u,
              name: I,
              instance: g,
              options: E
            }), H = function() {
            };
            p.push(k || H);
          }
        });
      }
      function x() {
        p.forEach(function(v) {
          return v();
        }), p = [];
      }
      return g;
    };
  }
  var Sf = [
    Wp,
    uf,
    Np,
    Dp,
    af,
    nf,
    ff,
    zp,
    rf
  ], If = yf({
    defaultModifiers: Sf
  });
  function Pf(e) {
    return bt("MuiPopper", e);
  }
  ft("MuiPopper", [
    "root"
  ]);
  function Mf(e, t) {
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
  function Zl(e) {
    return typeof e == "function" ? e() : e;
  }
  function kf(e) {
    return e.nodeType !== void 0;
  }
  const Ef = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "root"
      ]
    }, Pf, t);
  }, Ff = {}, Tf = c.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: l, disablePortal: s, modifiers: a, open: i, placement: d, popperOptions: u, popperRef: p, slotProps: h = {}, slots: g = {}, TransitionProps: m, ownerState: x, ...v } = t, I = c.useRef(null), C = jt(I, n), E = c.useRef(null), $ = jt(E, p), k = c.useRef($);
    St(() => {
      k.current = $;
    }, [
      $
    ]), c.useImperativeHandle(p, () => E.current, []);
    const H = Mf(d, l), [A, R] = c.useState(H), [y, w] = c.useState(Zl(o));
    c.useEffect(() => {
      E.current && E.current.forceUpdate();
    }), c.useEffect(() => {
      o && w(Zl(o));
    }, [
      o
    ]), St(() => {
      if (!y || !i) return;
      const F = (L) => {
        R(L.placement);
      };
      let S = [
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
            F(L);
          }
        }
      ];
      a != null && (S = S.concat(a)), u && u.modifiers != null && (S = S.concat(u.modifiers));
      const T = If(y, I.current, {
        placement: H,
        ...u,
        modifiers: S
      });
      return k.current(T), () => {
        T.destroy(), k.current(null);
      };
    }, [
      y,
      s,
      a,
      i,
      u,
      H
    ]);
    const M = {
      placement: A
    };
    m !== null && (M.TransitionProps = m);
    const O = Ef(t), D = g.root ?? "div", _ = gd({
      elementType: D,
      externalSlotProps: h.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: C
      },
      ownerState: t,
      className: O.root
    });
    return f.jsx(D, {
      ..._,
      children: typeof r == "function" ? r(M) : r
    });
  }), Of = c.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: l, direction: s = "ltr", disablePortal: a = false, keepMounted: i = false, modifiers: d, open: u, placement: p = "bottom", popperOptions: h = Ff, popperRef: g, style: m, transition: x = false, slotProps: v = {}, slots: I = {}, ...C } = t, [E, $] = c.useState(true), k = () => {
      $(false);
    }, H = () => {
      $(true);
    };
    if (!i && !u && (!x || E)) return null;
    let A;
    if (l) A = l;
    else if (o) {
      const w = Zl(o);
      A = w && kf(w) ? en(w).body : en(null).body;
    }
    const R = !u && i && (!x || E) ? "none" : void 0, y = x ? {
      in: u,
      onEnter: k,
      onExited: H
    } : void 0;
    return f.jsx(fd, {
      disablePortal: a,
      container: A,
      children: f.jsx(Tf, {
        anchorEl: o,
        direction: s,
        disablePortal: a,
        modifiers: d,
        ref: n,
        open: x ? !E : u,
        placement: p,
        popperOptions: h,
        popperRef: g,
        slotProps: v,
        slots: I,
        ...C,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: R,
          ...m
        },
        TransitionProps: y,
        children: r
      })
    });
  }), Df = se(Of, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), to = c.forwardRef(function(t, n) {
    const o = At(), r = Ct({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: l, component: s, components: a, componentsProps: i, container: d, disablePortal: u, keepMounted: p, modifiers: h, open: g, placement: m, popperOptions: x, popperRef: v, transition: I, slots: C, slotProps: E, ...$ } = r, k = (C == null ? void 0 : C.root) ?? (a == null ? void 0 : a.Root), H = {
      anchorEl: l,
      container: d,
      disablePortal: u,
      keepMounted: p,
      modifiers: h,
      open: g,
      placement: m,
      popperOptions: x,
      popperRef: v,
      transition: I,
      ...$
    };
    return f.jsx(Df, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: k
      },
      slotProps: E ?? i,
      ...H,
      ref: n
    });
  });
  function Rf(e) {
    return bt("MuiListSubheader", e);
  }
  ft("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const Hf = (e) => {
    const { classes: t, color: n, disableGutters: o, inset: r, disableSticky: l } = e, s = {
      root: [
        "root",
        n !== "default" && `color${ce(n)}`,
        !o && "gutters",
        r && "inset",
        !l && "sticky"
      ]
    };
    return me(s, Rf, t);
  }, $f = se("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${ce(n.color)}`],
        !n.disableGutters && t.gutters,
        n.inset && t.inset,
        !n.disableSticky && t.sticky
      ];
    }
  })(qe(({ theme: e }) => ({
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
  }))), es = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiListSubheader"
    }), { className: r, color: l = "default", component: s = "li", disableGutters: a = false, disableSticky: i = false, inset: d = false, ...u } = o, p = {
      ...o,
      color: l,
      component: s,
      disableGutters: a,
      disableSticky: i,
      inset: d
    }, h = Hf(p);
    return f.jsx($f, {
      as: s,
      className: de(h.root, r),
      ref: n,
      ownerState: p,
      ...u
    });
  });
  es && (es.muiSkipListHighlight = true);
  const Lf = Me(f.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function jf(e) {
    return bt("MuiChip", e);
  }
  const Ae = ft("MuiChip", [
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
  ]), Af = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: l, onDelete: s, clickable: a, variant: i } = e, d = {
      root: [
        "root",
        i,
        n && "disabled",
        `size${ce(o)}`,
        `color${ce(r)}`,
        a && "clickable",
        a && `clickableColor${ce(r)}`,
        s && "deletable",
        s && `deletableColor${ce(r)}`,
        `${i}${ce(r)}`
      ],
      label: [
        "label",
        `label${ce(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${ce(o)}`,
        `avatarColor${ce(r)}`
      ],
      icon: [
        "icon",
        `icon${ce(o)}`,
        `iconColor${ce(l)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${ce(o)}`,
        `deleteIconColor${ce(r)}`,
        `deleteIcon${ce(i)}Color${ce(r)}`
      ]
    };
    return me(d, jf, t);
  }, zf = se("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: l, onDelete: s, size: a, variant: i } = n;
      return [
        {
          [`& .${Ae.avatar}`]: t.avatar
        },
        {
          [`& .${Ae.avatar}`]: t[`avatar${ce(a)}`]
        },
        {
          [`& .${Ae.avatar}`]: t[`avatarColor${ce(o)}`]
        },
        {
          [`& .${Ae.icon}`]: t.icon
        },
        {
          [`& .${Ae.icon}`]: t[`icon${ce(a)}`]
        },
        {
          [`& .${Ae.icon}`]: t[`iconColor${ce(r)}`]
        },
        {
          [`& .${Ae.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${Ae.deleteIcon}`]: t[`deleteIcon${ce(a)}`]
        },
        {
          [`& .${Ae.deleteIcon}`]: t[`deleteIconColor${ce(o)}`]
        },
        {
          [`& .${Ae.deleteIcon}`]: t[`deleteIcon${ce(i)}Color${ce(o)}`]
        },
        t.root,
        t[`size${ce(a)}`],
        t[`color${ce(o)}`],
        l && t.clickable,
        l && o !== "default" && t[`clickableColor${ce(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${ce(o)}`],
        t[i],
        t[`${i}${ce(o)}`]
      ];
    }
  })(qe(({ theme: e }) => {
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
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : lt(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : lt(e.palette.text.primary, 0.4)
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
        ...Object.entries(e.palette).filter(Cn([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${Ae.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : lt(e.palette[n].contrastText, 0.7),
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : lt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Cn([
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : lt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${Ae.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : lt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Cn([
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
        ...Object.entries(e.palette).filter(Cn()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : lt(e.palette[n].main, 0.7)}`,
            [`&.${Ae.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : lt(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${Ae.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : lt(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${Ae.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : lt(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Gf = se("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${ce(o)}`]
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
  function Ei(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const xo = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: l, clickable: s, color: a = "default", component: i, deleteIcon: d, disabled: u = false, icon: p, label: h, onClick: g, onDelete: m, onKeyDown: x, onKeyUp: v, size: I = "medium", variant: C = "filled", tabIndex: E, skipFocusWhenDisabled: $ = false, ...k } = o, H = c.useRef(null), A = jt(H, n), R = (z) => {
      z.stopPropagation(), m && m(z);
    }, y = (z) => {
      z.currentTarget === z.target && Ei(z) && z.preventDefault(), x && x(z);
    }, w = (z) => {
      z.currentTarget === z.target && m && Ei(z) && m(z), v && v(z);
    }, M = s !== false && g ? true : s, O = M || m ? Kl : i || "div", D = {
      ...o,
      component: O,
      disabled: u,
      size: I,
      color: a,
      iconColor: c.isValidElement(p) && p.props.color || a,
      onDelete: !!m,
      clickable: M,
      variant: C
    }, _ = Af(D), F = O === Kl ? {
      component: i || "div",
      focusVisibleClassName: _.focusVisible,
      ...m && {
        disableRipple: true
      }
    } : {};
    let S = null;
    m && (S = d && c.isValidElement(d) ? c.cloneElement(d, {
      className: de(d.props.className, _.deleteIcon),
      onClick: R
    }) : f.jsx(Lf, {
      className: de(_.deleteIcon),
      onClick: R
    }));
    let T = null;
    r && c.isValidElement(r) && (T = c.cloneElement(r, {
      className: de(_.avatar, r.props.className)
    }));
    let L = null;
    return p && c.isValidElement(p) && (L = c.cloneElement(p, {
      className: de(_.icon, p.props.className)
    })), f.jsxs(zf, {
      as: O,
      className: de(_.root, l),
      disabled: M && u ? true : void 0,
      onClick: g,
      onKeyDown: y,
      onKeyUp: w,
      ref: A,
      tabIndex: $ && u ? -1 : E,
      ownerState: D,
      ...F,
      ...k,
      children: [
        T || L,
        f.jsx(Gf, {
          className: de(_.label),
          ownerState: D,
          children: h
        }),
        S
      ]
    });
  });
  function _f(e) {
    return bt("MuiAutocomplete", e);
  }
  const De = ft("MuiAutocomplete", [
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
  var Fi, Ti;
  const Vf = (e) => {
    const { classes: t, disablePortal: n, expanded: o, focused: r, fullWidth: l, hasClearIcon: s, hasPopupIcon: a, inputFocused: i, popupOpen: d, size: u } = e, p = {
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
        `tagSize${ce(u)}`
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
    return me(p, _f, t);
  }, Nf = se("div", {
    name: "MuiAutocomplete",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { fullWidth: o, hasClearIcon: r, hasPopupIcon: l, inputFocused: s, size: a } = n;
      return [
        {
          [`& .${De.tag}`]: t.tag
        },
        {
          [`& .${De.tag}`]: t[`tagSize${ce(a)}`]
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
        r && t.hasClearIcon
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
    [`& .${Tl.root}`]: {
      paddingBottom: 1,
      "& .MuiInput-input": {
        padding: "4px 4px 4px 0px"
      }
    },
    [`& .${Tl.root}.${qt.sizeSmall}`]: {
      [`& .${Tl.input}`]: {
        padding: "2px 4px 3px 0"
      }
    },
    [`& .${di.root}`]: {
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
    [`& .${di.root}.${qt.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${De.input}`]: {
        padding: "2.5px 4px 2.5px 8px"
      }
    },
    [`& .${lo.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${De.hasPopupIcon}&, .${De.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${De.hasPopupIcon}.${De.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${lo.input}`]: {
        padding: "7px 4px"
      },
      [`& .${De.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${lo.root}.${qt.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${lo.input}`]: {
        padding: "2.5px 4px"
      }
    },
    [`& .${qt.hiddenLabel}`]: {
      paddingTop: 8
    },
    [`& .${lo.root}.${qt.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${De.input}`]: {
        paddingTop: 16,
        paddingBottom: 17
      }
    },
    [`& .${lo.root}.${qt.hiddenLabel}.${qt.sizeSmall}`]: {
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
  }), Bf = se("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  }), Wf = se(Vt, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator
  })({
    marginRight: -2,
    padding: 4,
    visibility: "hidden"
  }), Uf = se(Vt, {
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
  }), Kf = se(to, {
    name: "MuiAutocomplete",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${De.option}`]: t.option
        },
        t.popper,
        n.disablePortal && t.popperDisablePortal
      ];
    }
  })(qe(({ theme: e }) => ({
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
  }))), qf = se(Yt, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(qe(({ theme: e }) => ({
    ...e.typography.body1,
    overflow: "auto"
  }))), Yf = se("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading
  })(qe(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), Xf = se("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions
  })(qe(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), Qf = se("ul", {
    name: "MuiAutocomplete",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox
  })(qe(({ theme: e }) => ({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : lt(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${De.focused}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : lt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected
          }
        },
        [`&.${De.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : lt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }
  }))), Jf = se(es, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel
  })(qe(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8
  }))), Zf = se("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl
  })({
    padding: 0,
    [`& .${De.option}`]: {
      paddingLeft: 24
    }
  }), gc = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAutocomplete"
    }), { autoComplete: r = false, autoHighlight: l = false, autoSelect: s = false, blurOnSelect: a = false, ChipProps: i, className: d, clearIcon: u = Fi || (Fi = f.jsx(fp, {
      fontSize: "small"
    })), clearOnBlur: p = !o.freeSolo, clearOnEscape: h = false, clearText: g = "Clear", closeText: m = "Close", componentsProps: x, defaultValue: v = o.multiple ? [] : null, disableClearable: I = false, disableCloseOnSelect: C = false, disabled: E = false, disabledItemsFocusable: $ = false, disableListWrap: k = false, disablePortal: H = false, filterOptions: A, filterSelectedOptions: R = false, forcePopupIcon: y = "auto", freeSolo: w = false, fullWidth: M = false, getLimitTagsText: O = (Ye) => `+${Ye}`, getOptionDisabled: D, getOptionKey: _, getOptionLabel: F, isOptionEqualToValue: S, groupBy: T, handleHomeEndKeys: L = !o.freeSolo, id: z, includeInputInList: G = false, inputValue: j, limitTags: V = -1, ListboxComponent: U, ListboxProps: W, loading: K = false, loadingText: B = "Loading\u2026", multiple: te = false, noOptionsText: J = "No options", onChange: ne, onClose: ae, onHighlightChange: we, onInputChange: Y, onOpen: re, open: ye, openOnFocus: Z = false, openText: Se = "Open", options: ee, PaperComponent: ve, PopperComponent: Ce, popupIcon: Fe = Ti || (Ti = f.jsx(hd, {})), readOnly: Ne = false, renderGroup: Be, renderInput: ze, renderOption: $e, renderTags: Le, selectOnFocus: We = !o.freeSolo, size: Ge = "medium", slots: fe = {}, slotProps: xe = {}, value: pe, ...he } = o, { getRootProps: je, getInputProps: Re, getInputLabelProps: rt, getPopupIndicatorProps: xt, getClearProps: ut, getTagProps: In, getListboxProps: Ot, getOptionProps: Pn, value: It, dirty: zt, expanded: Et, id: Dt, popupOpen: Ft, focused: oo, focusedTag: ro, anchorEl: Pe, setAnchorEl: Wt, inputValue: Il, groupedOptions: Kn } = bp({
      ...o,
      componentName: "Autocomplete"
    }), _o = !I && !E && zt && !Ne, Vo = (!w || y === true) && y !== false, { onMouseDown: Pl } = Re(), { ref: Ml, ...kl } = Ot(), No = F || ((Ye) => Ye.label ?? Ye), Mt = {
      ...o,
      disablePortal: H,
      expanded: Et,
      focused: oo,
      fullWidth: M,
      getOptionLabel: No,
      hasClearIcon: _o,
      hasPopupIcon: Vo,
      inputFocused: ro === -1,
      popupOpen: Ft,
      size: Ge
    }, vt = Vf(Mt), gn = {
      slots: {
        paper: ve,
        popper: Ce,
        ...fe
      },
      slotProps: {
        chip: i,
        listbox: W,
        ...x,
        ...xe
      }
    }, [kr, X] = at("listbox", {
      elementType: Qf,
      externalForwardedProps: gn,
      ownerState: Mt,
      className: vt.listbox,
      additionalProps: kl,
      ref: Ml
    }), [q, ue] = at("paper", {
      elementType: Yt,
      externalForwardedProps: gn,
      ownerState: Mt,
      className: vt.paper
    }), [Te, _e] = at("popper", {
      elementType: to,
      externalForwardedProps: gn,
      ownerState: Mt,
      className: vt.popper,
      additionalProps: {
        disablePortal: H,
        style: {
          width: Pe ? Pe.clientWidth : null
        },
        role: "presentation",
        anchorEl: Pe,
        open: Ft
      }
    });
    let Ze;
    if (te && It.length > 0) {
      const Ye = (hn) => ({
        className: vt.tag,
        disabled: E,
        ...In(hn)
      });
      Le ? Ze = Le(It, Ye, Mt) : Ze = It.map((hn, Rn) => {
        const { key: Bo, ...cd } = Ye({
          index: Rn
        });
        return f.jsx(xo, {
          label: No(hn),
          size: Ge,
          ...cd,
          ...gn.slotProps.chip
        }, Bo);
      });
    }
    if (V > -1 && Array.isArray(Ze)) {
      const Ye = Ze.length - V;
      !oo && Ye > 0 && (Ze = Ze.splice(0, V), Ze.push(f.jsx("span", {
        className: vt.tag,
        children: O(Ye)
      }, Ze.length)));
    }
    const Ut = Be || ((Ye) => f.jsxs("li", {
      children: [
        f.jsx(Jf, {
          className: vt.groupLabel,
          ownerState: Mt,
          component: "div",
          children: Ye.group
        }),
        f.jsx(Zf, {
          className: vt.groupUl,
          ownerState: Mt,
          children: Ye.children
        })
      ]
    }, Ye.key)), ad = $e || ((Ye, hn) => {
      const { key: Rn, ...Bo } = Ye;
      return f.jsx("li", {
        ...Bo,
        children: No(hn)
      }, Rn);
    }), ii = (Ye, hn) => {
      const Rn = Pn({
        option: Ye,
        index: hn
      });
      return ad({
        ...Rn,
        className: vt.option
      }, Ye, {
        selected: Rn["aria-selected"],
        index: hn,
        inputValue: Il
      }, Mt);
    }, ai = gn.slotProps.clearIndicator, ci = gn.slotProps.popupIndicator;
    return f.jsxs(c.Fragment, {
      children: [
        f.jsx(Nf, {
          ref: n,
          className: de(vt.root, d),
          ownerState: Mt,
          ...je(he),
          children: ze({
            id: Dt,
            disabled: E,
            fullWidth: true,
            size: Ge === "small" ? "small" : void 0,
            InputLabelProps: rt(),
            InputProps: {
              ref: Wt,
              className: vt.inputRoot,
              startAdornment: Ze,
              onMouseDown: (Ye) => {
                Ye.target === Ye.currentTarget && Pl(Ye);
              },
              ...(_o || Vo) && {
                endAdornment: f.jsxs(Bf, {
                  className: vt.endAdornment,
                  ownerState: Mt,
                  children: [
                    _o ? f.jsx(Wf, {
                      ...ut(),
                      "aria-label": g,
                      title: g,
                      ownerState: Mt,
                      ...ai,
                      className: de(vt.clearIndicator, ai == null ? void 0 : ai.className),
                      children: u
                    }) : null,
                    Vo ? f.jsx(Uf, {
                      ...xt(),
                      disabled: E,
                      "aria-label": Ft ? m : Se,
                      title: Ft ? m : Se,
                      ownerState: Mt,
                      ...ci,
                      className: de(vt.popupIndicator, ci == null ? void 0 : ci.className),
                      children: Fe
                    }) : null
                  ]
                })
              }
            },
            inputProps: {
              className: vt.input,
              disabled: E,
              readOnly: Ne,
              ...Re()
            }
          })
        }),
        Pe ? f.jsx(Kf, {
          as: Te,
          ..._e,
          children: f.jsxs(qf, {
            as: q,
            ...ue,
            children: [
              K && Kn.length === 0 ? f.jsx(Yf, {
                className: vt.loading,
                ownerState: Mt,
                children: B
              }) : null,
              Kn.length === 0 && !w && !K ? f.jsx(Xf, {
                className: vt.noOptions,
                ownerState: Mt,
                role: "presentation",
                onMouseDown: (Ye) => {
                  Ye.preventDefault();
                },
                children: J
              }) : null,
              Kn.length > 0 ? f.jsx(kr, {
                as: U,
                ...X,
                children: Kn.map((Ye, hn) => T ? Ut({
                  key: Ye.key,
                  group: Ye.group,
                  children: Ye.options.map((Rn, Bo) => ii(Rn, Ye.index + Bo))
                }) : ii(Ye, hn))
              }) : null
            ]
          })
        }) : null
      ]
    });
  });
  function eg(e) {
    const { badgeContent: t, invisible: n = false, max: o = 99, showZero: r = false } = e, l = Ms({
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
  function tg(e) {
    return bt("MuiBadge", e);
  }
  const Hn = ft("MuiBadge", [
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
  ]), Dl = 10, Rl = 4, ng = (e) => {
    const { color: t, anchorOrigin: n, invisible: o, overlap: r, variant: l, classes: s = {} } = e, a = {
      root: [
        "root"
      ],
      badge: [
        "badge",
        l,
        o && "invisible",
        `anchorOrigin${ce(n.vertical)}${ce(n.horizontal)}`,
        `anchorOrigin${ce(n.vertical)}${ce(n.horizontal)}${ce(r)}`,
        `overlap${ce(r)}`,
        t !== "default" && `color${ce(t)}`
      ]
    };
    return me(a, tg, s);
  }, og = se("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0
  }), rg = se("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.badge,
        t[n.variant],
        t[`anchorOrigin${ce(n.anchorOrigin.vertical)}${ce(n.anchorOrigin.horizontal)}${ce(n.overlap)}`],
        n.color !== "default" && t[`color${ce(n.color)}`],
        n.invisible && t.invisible
      ];
    }
  })(qe(({ theme: e }) => ({
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
    minWidth: Dl * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: Dl * 2,
    borderRadius: Dl,
    zIndex: 1,
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeInOut,
      duration: e.transitions.duration.enteringScreen
    }),
    variants: [
      ...Object.entries(e.palette).filter(Cn([
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
          borderRadius: Rl,
          height: Rl * 2,
          minWidth: Rl * 2,
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
  function Oi(e) {
    return {
      vertical: (e == null ? void 0 : e.vertical) ?? "top",
      horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
    };
  }
  const lg = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiBadge"
    }), { anchorOrigin: r, className: l, classes: s, component: a, components: i = {}, componentsProps: d = {}, children: u, overlap: p = "rectangular", color: h = "default", invisible: g = false, max: m = 99, badgeContent: x, slots: v, slotProps: I, showZero: C = false, variant: E = "standard", ...$ } = o, { badgeContent: k, invisible: H, max: A, displayValue: R } = eg({
      max: m,
      invisible: g,
      badgeContent: x,
      showZero: C
    }), y = Ms({
      anchorOrigin: Oi(r),
      color: h,
      overlap: p,
      variant: E,
      badgeContent: x
    }), w = H || k == null && E !== "dot", { color: M = h, overlap: O = p, anchorOrigin: D, variant: _ = E } = w ? y : o, F = Oi(D), S = _ !== "dot" ? R : void 0, T = {
      ...o,
      badgeContent: k,
      invisible: w,
      max: A,
      displayValue: S,
      showZero: C,
      anchorOrigin: F,
      color: M,
      overlap: O,
      variant: _
    }, L = ng(T), z = {
      slots: {
        root: (v == null ? void 0 : v.root) ?? i.Root,
        badge: (v == null ? void 0 : v.badge) ?? i.Badge
      },
      slotProps: {
        root: (I == null ? void 0 : I.root) ?? d.root,
        badge: (I == null ? void 0 : I.badge) ?? d.badge
      }
    }, [G, j] = at("root", {
      elementType: og,
      externalForwardedProps: {
        ...z,
        ...$
      },
      ownerState: T,
      className: de(L.root, l),
      ref: n,
      additionalProps: {
        as: a
      }
    }), [V, U] = at("badge", {
      elementType: rg,
      externalForwardedProps: z,
      ownerState: T,
      className: L.badge
    });
    return f.jsxs(G, {
      ...j,
      children: [
        u,
        f.jsx(V, {
          ...U,
          children: S
        })
      ]
    });
  });
  function sg(e) {
    return bt("MuiCard", e);
  }
  ft("MuiCard", [
    "root"
  ]);
  const ig = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "root"
      ]
    }, sg, t);
  }, ag = se(Yt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), cg = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: l = false, ...s } = o, a = {
      ...o,
      raised: l
    }, i = ig(a);
    return f.jsx(ag, {
      className: de(i.root, r),
      elevation: l ? 8 : void 0,
      ref: n,
      ownerState: a,
      ...s
    });
  });
  function Di(e) {
    return e.substring(2).toLowerCase();
  }
  function ug(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function hc(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: l = "onTouchEnd" } = e, s = c.useRef(false), a = c.useRef(null), i = c.useRef(false), d = c.useRef(false);
    c.useEffect(() => (setTimeout(() => {
      i.current = true;
    }, 0), () => {
      i.current = false;
    }), []);
    const u = jt(Xa(t), a), p = Ke((m) => {
      const x = d.current;
      d.current = false;
      const v = en(a.current);
      if (!i.current || !a.current || "clientX" in m && ug(m, v)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let I;
      m.composedPath ? I = m.composedPath().includes(a.current) : I = !v.documentElement.contains(m.target) || a.current.contains(m.target), !I && (n || !x) && r(m);
    }), h = (m) => (x) => {
      d.current = true;
      const v = t.props[m];
      v && v(x);
    }, g = {
      ref: u
    };
    return l !== false && (g[l] = h(l)), c.useEffect(() => {
      if (l !== false) {
        const m = Di(l), x = en(a.current), v = () => {
          s.current = true;
        };
        return x.addEventListener(m, p), x.addEventListener("touchmove", v), () => {
          x.removeEventListener(m, p), x.removeEventListener("touchmove", v);
        };
      }
    }, [
      p,
      l
    ]), o !== false && (g[o] = h(o)), c.useEffect(() => {
      if (o !== false) {
        const m = Di(o), x = en(a.current);
        return x.addEventListener(m, p), () => {
          x.removeEventListener(m, p);
        };
      }
    }, [
      p,
      o
    ]), c.cloneElement(t, g);
  }
  function dg(e) {
    return bt("MuiDialogActions", e);
  }
  ft("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const pg = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return me({
      root: [
        "root",
        !n && "spacing"
      ]
    }, dg, t);
  }, fg = se("div", {
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
  }), gg = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: l = false, ...s } = o, a = {
      ...o,
      disableSpacing: l
    }, i = pg(a);
    return f.jsx(fg, {
      className: de(i.root, r),
      ownerState: a,
      ref: n,
      ...s
    });
  });
  function hg(e) {
    return bt("MuiInputAdornment", e);
  }
  const Ri = ft("MuiInputAdornment", [
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
  var Hi;
  const mg = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${ce(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, bg = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: l, variant: s } = e, a = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${ce(r)}`,
        s,
        o && "hiddenLabel",
        l && `size${ce(l)}`
      ]
    };
    return me(a, hg, t);
  }, Cg = se("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: mg
  })(qe(({ theme: e }) => ({
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
          [`&.${Ri.positionStart}&:not(.${Ri.hiddenLabel})`]: {
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
  }))), mc = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: l, component: s = "div", disablePointerEvents: a = false, disableTypography: i = false, position: d, variant: u, ...p } = o, h = md() || {};
    let g = u;
    u && h.variant, h && !g && (g = h.variant);
    const m = {
      ...o,
      hiddenLabel: h.hiddenLabel,
      size: h.size,
      disablePointerEvents: a,
      position: d,
      variant: g
    }, x = bg(m);
    return f.jsx(bd.Provider, {
      value: null,
      children: f.jsx(Cg, {
        as: s,
        ownerState: m,
        className: de(x.root, l),
        ref: n,
        ...p,
        children: typeof r == "string" && !i ? f.jsx(Ie, {
          color: "textSecondary",
          children: r
        }) : f.jsxs(c.Fragment, {
          children: [
            d === "start" ? Hi || (Hi = f.jsx("span", {
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
  function wg(e) {
    return bt("MuiLinearProgress", e);
  }
  ft("MuiLinearProgress", [
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
  const ts = 4, ns = hr`
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
`, xg = typeof ns != "string" ? gr`
        animation: ${ns} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, os = hr`
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
`, vg = typeof os != "string" ? gr`
        animation: ${os} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, rs = hr`
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
`, yg = typeof rs != "string" ? gr`
        animation: ${rs} 3s infinite linear;
      ` : null, Sg = (e) => {
    const { classes: t, variant: n, color: o } = e, r = {
      root: [
        "root",
        `color${ce(o)}`,
        n
      ],
      dashed: [
        "dashed",
        `dashedColor${ce(o)}`
      ],
      bar1: [
        "bar",
        "bar1",
        `barColor${ce(o)}`,
        (n === "indeterminate" || n === "query") && "bar1Indeterminate",
        n === "determinate" && "bar1Determinate",
        n === "buffer" && "bar1Buffer"
      ],
      bar2: [
        "bar",
        "bar2",
        n !== "buffer" && `barColor${ce(o)}`,
        n === "buffer" && `color${ce(o)}`,
        (n === "indeterminate" || n === "query") && "bar2Indeterminate",
        n === "buffer" && "bar2Buffer"
      ]
    };
    return me(r, wg, t);
  }, Hs = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? ys(e.palette[t].main, 0.62) : Ss(e.palette[t].main, 0.5), Ig = se("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${ce(n.color)}`],
        t[n.variant]
      ];
    }
  })(qe(({ theme: e }) => ({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
      colorAdjust: "exact"
    },
    variants: [
      ...Object.entries(e.palette).filter(Cn()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: Hs(e, t)
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
  }))), Pg = se("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.dashed,
        t[`dashedColor${ce(n.color)}`]
      ];
    }
  })(qe(({ theme: e }) => ({
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
      ...Object.entries(e.palette).filter(Cn()).map(([t]) => {
        const n = Hs(e, t);
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
  })), yg || {
    animation: `${rs} 3s infinite linear`
  }), Mg = se("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t.bar1,
        t[`barColor${ce(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate,
        n.variant === "determinate" && t.bar1Determinate,
        n.variant === "buffer" && t.bar1Buffer
      ];
    }
  })(qe(({ theme: e }) => ({
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
      ...Object.entries(e.palette).filter(Cn()).map(([t]) => ({
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
          transition: `transform .${ts}s linear`
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          zIndex: 1,
          transition: `transform .${ts}s linear`
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
        style: xg || {
          animation: `${ns} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
        }
      }
    ]
  }))), kg = se("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t.bar2,
        t[`barColor${ce(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate,
        n.variant === "buffer" && t.bar2Buffer
      ];
    }
  })(qe(({ theme: e }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      ...Object.entries(e.palette).filter(Cn()).map(([t]) => ({
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
      ...Object.entries(e.palette).filter(Cn()).map(([t]) => ({
        props: {
          color: t,
          variant: "buffer"
        },
        style: {
          backgroundColor: Hs(e, t),
          transition: `transform .${ts}s linear`
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
        style: vg || {
          animation: `${os} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
        }
      }
    ]
  }))), Eg = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiLinearProgress"
    }), { className: r, color: l = "primary", value: s, valueBuffer: a, variant: i = "indeterminate", ...d } = o, u = {
      ...o,
      color: l,
      variant: i
    }, p = Sg(u), h = At(), g = {}, m = {
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
    return f.jsxs(Ig, {
      className: de(p.root, r),
      ownerState: u,
      role: "progressbar",
      ...g,
      ref: n,
      ...d,
      children: [
        i === "buffer" ? f.jsx(Pg, {
          className: p.dashed,
          ownerState: u
        }) : null,
        f.jsx(Mg, {
          className: p.bar1,
          ownerState: u,
          style: m.bar1
        }),
        i === "determinate" ? null : f.jsx(kg, {
          className: p.bar2,
          ownerState: u,
          style: m.bar2
        })
      ]
    });
  }), Fg = (e) => {
    const { alignItems: t, classes: n } = e;
    return me({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, $d, n);
  }, Tg = se("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(qe(({ theme: e }) => ({
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
  }))), vo = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiListItemIcon"
    }), { className: r, ...l } = o, s = c.useContext(Cd), a = {
      ...o,
      alignItems: s.alignItems
    }, i = Fg(a);
    return f.jsx(Tg, {
      className: de(i.root, r),
      ownerState: a,
      ref: n,
      ...l
    });
  }), Og = Me(f.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Dg = Me(f.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Rg(e) {
    return bt("MuiSkeleton", e);
  }
  ft("MuiSkeleton", [
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
  const Hg = (e) => {
    const { classes: t, variant: n, animation: o, hasChildren: r, width: l, height: s } = e;
    return me({
      root: [
        "root",
        n,
        o,
        r && "withChildren",
        r && !l && "fitContent",
        r && !s && "heightAuto"
      ]
    }, Rg, t);
  }, ls = hr`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, ss = hr`
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
`, $g = typeof ls != "string" ? gr`
        animation: ${ls} 2s ease-in-out 0.5s infinite;
      ` : null, Lg = typeof ss != "string" ? gr`
        &::after {
          animation: ${ss} 2s linear 0.5s infinite;
        }
      ` : null, jg = se("span", {
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
  })(qe(({ theme: e }) => {
    const t = qd(e.shape.borderRadius) || "px", n = Yd(e.shape.borderRadius);
    return {
      display: "block",
      backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : lt(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
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
          style: $g || {
            animation: `${ls} 2s ease-in-out 0.5s infinite`
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
          style: Lg || {
            "&::after": {
              animation: `${ss} 2s linear 0.5s infinite`
            }
          }
        }
      ]
    };
  })), Ag = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiSkeleton"
    }), { animation: r = "pulse", className: l, component: s = "span", height: a, style: i, variant: d = "text", width: u, ...p } = o, h = {
      ...o,
      animation: r,
      component: s,
      variant: d,
      hasChildren: !!p.children
    }, g = Hg(h);
    return f.jsx(jg, {
      as: s,
      ref: n,
      className: de(g.root, l),
      ownerState: h,
      ...p,
      style: {
        width: u,
        height: a,
        ...i
      }
    });
  });
  function zg(e) {
    return bt("MuiTooltip", e);
  }
  const it = ft("MuiTooltip", [
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
  function Gg(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const _g = (e) => {
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
        `tooltipPlacement${ce(l.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return me(s, zg, t);
  }, Vg = se(to, {
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
  })(qe(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${it.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${it.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${it.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${it.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${it.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${it.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${it.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${it.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Ng = se("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${ce(n.placement.split("-")[0])}`]
      ];
    }
  })(qe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : lt(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${it.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${it.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${it.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${it.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${Gg(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${it.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${it.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${it.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${it.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${it.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${it.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${it.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${it.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${it.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${it.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Bg = se("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(qe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : lt(e.palette.grey[700], 0.9),
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
  let Hr = false;
  const $i = new wd();
  let Uo = {
    x: 0,
    y: 0
  };
  function $r(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const zn = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: l, classes: s, components: a = {}, componentsProps: i = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: p = false, disableInteractive: h = false, disableTouchListener: g = false, enterDelay: m = 100, enterNextDelay: x = 0, enterTouchDelay: v = 700, followCursor: I = false, id: C, leaveDelay: E = 0, leaveTouchDelay: $ = 1500, onClose: k, onOpen: H, open: A, placement: R = "bottom", PopperComponent: y, PopperProps: w = {}, slotProps: M = {}, slots: O = {}, title: D, TransitionComponent: _, TransitionProps: F, ...S } = o, T = c.isValidElement(l) ? l : f.jsx("span", {
      children: l
    }), L = vs(), z = At(), [G, j] = c.useState(), [V, U] = c.useState(null), W = c.useRef(false), K = h || I, B = Qt(), te = Qt(), J = Qt(), ne = Qt(), [ae, we] = er({
      controlled: A,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let Y = ae;
    const re = nt(C), ye = c.useRef(), Z = Ke(() => {
      ye.current !== void 0 && (document.body.style.WebkitUserSelect = ye.current, ye.current = void 0), ne.clear();
    });
    c.useEffect(() => Z, [
      Z
    ]);
    const Se = (Pe) => {
      $i.clear(), Hr = true, we(true), H && !Y && H(Pe);
    }, ee = Ke((Pe) => {
      $i.start(800 + E, () => {
        Hr = false;
      }), we(false), k && Y && k(Pe), B.start(L.transitions.duration.shortest, () => {
        W.current = false;
      });
    }), ve = (Pe) => {
      W.current && Pe.type !== "touchstart" || (G && G.removeAttribute("title"), te.clear(), J.clear(), m || Hr && x ? te.start(Hr ? x : m, () => {
        Se(Pe);
      }) : Se(Pe));
    }, Ce = (Pe) => {
      te.clear(), J.start(E, () => {
        ee(Pe);
      });
    }, [, Fe] = c.useState(false), Ne = (Pe) => {
      pi(Pe.target) || (Fe(false), Ce(Pe));
    }, Be = (Pe) => {
      G || j(Pe.currentTarget), pi(Pe.target) && (Fe(true), ve(Pe));
    }, ze = (Pe) => {
      W.current = true;
      const Wt = T.props;
      Wt.onTouchStart && Wt.onTouchStart(Pe);
    }, $e = (Pe) => {
      ze(Pe), J.clear(), B.clear(), Z(), ye.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ne.start(v, () => {
        document.body.style.WebkitUserSelect = ye.current, ve(Pe);
      });
    }, Le = (Pe) => {
      T.props.onTouchEnd && T.props.onTouchEnd(Pe), Z(), J.start($, () => {
        ee(Pe);
      });
    };
    c.useEffect(() => {
      if (!Y) return;
      function Pe(Wt) {
        Wt.key === "Escape" && ee(Wt);
      }
      return document.addEventListener("keydown", Pe), () => {
        document.removeEventListener("keydown", Pe);
      };
    }, [
      ee,
      Y
    ]);
    const We = jt(Xa(T), j, n);
    !D && D !== 0 && (Y = false);
    const Ge = c.useRef(), fe = (Pe) => {
      const Wt = T.props;
      Wt.onMouseMove && Wt.onMouseMove(Pe), Uo = {
        x: Pe.clientX,
        y: Pe.clientY
      }, Ge.current && Ge.current.update();
    }, xe = {}, pe = typeof D == "string";
    d ? (xe.title = !Y && pe && !p ? D : null, xe["aria-describedby"] = Y ? re : null) : (xe["aria-label"] = pe ? D : null, xe["aria-labelledby"] = Y && !pe ? re : null);
    const he = {
      ...xe,
      ...S,
      ...T.props,
      className: de(S.className, T.props.className),
      onTouchStart: ze,
      ref: We,
      ...I ? {
        onMouseMove: fe
      } : {}
    }, je = {};
    g || (he.onTouchStart = $e, he.onTouchEnd = Le), p || (he.onMouseOver = $r(ve, he.onMouseOver), he.onMouseLeave = $r(Ce, he.onMouseLeave), K || (je.onMouseOver = ve, je.onMouseLeave = Ce)), u || (he.onFocus = $r(Be, he.onFocus), he.onBlur = $r(Ne, he.onBlur), K || (je.onFocus = Be, je.onBlur = Ne));
    const Re = {
      ...o,
      isRtl: z,
      arrow: r,
      disableInteractive: K,
      placement: R,
      PopperComponentProp: y,
      touch: W.current
    }, rt = typeof M.popper == "function" ? M.popper(Re) : M.popper, xt = c.useMemo(() => {
      var _a2, _b2;
      let Pe = [
        {
          name: "arrow",
          enabled: !!V,
          options: {
            element: V,
            padding: 4
          }
        }
      ];
      return ((_a2 = w.popperOptions) == null ? void 0 : _a2.modifiers) && (Pe = Pe.concat(w.popperOptions.modifiers)), ((_b2 = rt == null ? void 0 : rt.popperOptions) == null ? void 0 : _b2.modifiers) && (Pe = Pe.concat(rt.popperOptions.modifiers)), {
        ...w.popperOptions,
        ...rt == null ? void 0 : rt.popperOptions,
        modifiers: Pe
      };
    }, [
      V,
      w.popperOptions,
      rt == null ? void 0 : rt.popperOptions
    ]), ut = _g(Re), In = typeof M.transition == "function" ? M.transition(Re) : M.transition, Ot = {
      slots: {
        popper: a.Popper,
        transition: a.Transition ?? _,
        tooltip: a.Tooltip,
        arrow: a.Arrow,
        ...O
      },
      slotProps: {
        arrow: M.arrow ?? i.arrow,
        popper: {
          ...w,
          ...rt ?? i.popper
        },
        tooltip: M.tooltip ?? i.tooltip,
        transition: {
          ...F,
          ...In ?? i.transition
        }
      }
    }, [Pn, It] = at("popper", {
      elementType: Vg,
      externalForwardedProps: Ot,
      ownerState: Re,
      className: de(ut.popper, w == null ? void 0 : w.className)
    }), [zt, Et] = at("transition", {
      elementType: Qa,
      externalForwardedProps: Ot,
      ownerState: Re
    }), [Dt, Ft] = at("tooltip", {
      elementType: Ng,
      className: ut.tooltip,
      externalForwardedProps: Ot,
      ownerState: Re
    }), [oo, ro] = at("arrow", {
      elementType: Bg,
      className: ut.arrow,
      externalForwardedProps: Ot,
      ownerState: Re,
      ref: U
    });
    return f.jsxs(c.Fragment, {
      children: [
        c.cloneElement(T, he),
        f.jsx(Pn, {
          as: y ?? to,
          placement: R,
          anchorEl: I ? {
            getBoundingClientRect: () => ({
              top: Uo.y,
              left: Uo.x,
              right: Uo.x,
              bottom: Uo.y,
              width: 0,
              height: 0
            })
          } : G,
          popperRef: Ge,
          open: G ? Y : false,
          id: re,
          transition: true,
          ...je,
          ...It,
          popperOptions: xt,
          children: ({ TransitionProps: Pe }) => f.jsx(zt, {
            timeout: L.transitions.duration.shorter,
            ...Pe,
            ...Et,
            children: f.jsxs(Dt, {
              ...Ft,
              children: [
                D,
                r ? f.jsx(oo, {
                  ...ro
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Wg = c.createContext(), Ug = c.createContext();
  function Kg(e) {
    return bt("MuiTableCell", e);
  }
  const qg = ft("MuiTableCell", [
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
  ]), Yg = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: l, stickyHeader: s } = e, a = {
      root: [
        "root",
        n,
        s && "stickyHeader",
        o !== "inherit" && `align${ce(o)}`,
        r !== "normal" && `padding${ce(r)}`,
        `size${ce(l)}`
      ]
    };
    return me(a, Kg, t);
  }, Xg = se("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${ce(n.size)}`],
        n.padding !== "normal" && t[`padding${ce(n.padding)}`],
        n.align !== "inherit" && t[`align${ce(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(qe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? ys(lt(e.palette.divider, 1), 0.88) : Ss(lt(e.palette.divider, 1), 0.68)}`,
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
          [`&.${qg.paddingCheckbox}`]: {
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
  }))), is = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: l, component: s, padding: a, scope: i, size: d, sortDirection: u, variant: p, ...h } = o, g = c.useContext(Wg), m = c.useContext(Ug), x = m && m.variant === "head";
    let v;
    s ? v = s : v = x ? "th" : "td";
    let I = i;
    v === "td" ? I = void 0 : !I && x && (I = "col");
    const C = p || m && m.variant, E = {
      ...o,
      align: r,
      component: v,
      padding: a || (g && g.padding ? g.padding : "normal"),
      size: d || (g && g.size ? g.size : "medium"),
      sortDirection: u,
      stickyHeader: C === "head" && g && g.stickyHeader,
      variant: C
    }, $ = Yg(E);
    let k = null;
    return u && (k = u === "asc" ? "ascending" : "descending"), f.jsx(Xg, {
      as: v,
      ref: n,
      className: de($.root, l),
      "aria-sort": k,
      scope: I,
      ownerState: E,
      ...h
    });
  });
  function Qg(e) {
    return bt("MuiToolbar", e);
  }
  ft("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Jg = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return me({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Qg, t);
  }, Zg = se("div", {
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
  })(qe(({ theme: e }) => ({
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
  }))), bc = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: l = "div", disableGutters: s = false, variant: a = "regular", ...i } = o, d = {
      ...o,
      component: l,
      disableGutters: s,
      variant: a
    }, u = Jg(d);
    return f.jsx(Zg, {
      as: l,
      className: de(u.root, r),
      ref: n,
      ownerState: d,
      ...i
    });
  }), eh = Me(f.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), th = Me(f.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), nh = c.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: l = false, getItemAriaLabel: s, nextIconButtonProps: a, onPageChange: i, page: d, rowsPerPage: u, showFirstButton: p, showLastButton: h, slots: g = {}, slotProps: m = {}, ...x } = t, v = At(), I = (j) => {
      i(j, 0);
    }, C = (j) => {
      i(j, d - 1);
    }, E = (j) => {
      i(j, d + 1);
    }, $ = (j) => {
      i(j, Math.max(0, Math.ceil(r / u) - 1));
    }, k = g.firstButton ?? Vt, H = g.lastButton ?? Vt, A = g.nextButton ?? Vt, R = g.previousButton ?? Vt, y = g.firstButtonIcon ?? Og, w = g.lastButtonIcon ?? Dg, M = g.nextButtonIcon ?? th, O = g.previousButtonIcon ?? eh, D = v ? H : k, _ = v ? A : R, F = v ? R : A, S = v ? k : H, T = v ? m.lastButton : m.firstButton, L = v ? m.nextButton : m.previousButton, z = v ? m.previousButton : m.nextButton, G = v ? m.firstButton : m.lastButton;
    return f.jsxs("div", {
      ref: n,
      ...x,
      children: [
        p && f.jsx(D, {
          onClick: I,
          disabled: l || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...T,
          children: v ? f.jsx(w, {
            ...m.lastButtonIcon
          }) : f.jsx(y, {
            ...m.firstButtonIcon
          })
        }),
        f.jsx(_, {
          onClick: C,
          disabled: l || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...L ?? o,
          children: v ? f.jsx(M, {
            ...m.nextButtonIcon
          }) : f.jsx(O, {
            ...m.previousButtonIcon
          })
        }),
        f.jsx(F, {
          onClick: E,
          disabled: l || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": s("next", d),
          title: s("next", d),
          ...z ?? a,
          children: v ? f.jsx(O, {
            ...m.previousButtonIcon
          }) : f.jsx(M, {
            ...m.nextButtonIcon
          })
        }),
        h && f.jsx(S, {
          onClick: $,
          disabled: l || d >= Math.ceil(r / u) - 1,
          "aria-label": s("last", d),
          title: s("last", d),
          ...G,
          children: v ? f.jsx(y, {
            ...m.firstButtonIcon
          }) : f.jsx(w, {
            ...m.lastButtonIcon
          })
        })
      ]
    });
  });
  function oh(e) {
    return bt("MuiTablePagination", e);
  }
  const Xn = ft("MuiTablePagination", [
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
  var Li;
  const rh = se(is, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(qe(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), lh = se(bc, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${Xn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(qe(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${Xn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), sh = se("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), ih = se("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(qe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), ah = se(qr, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${Xn.selectIcon}`]: t.selectIcon,
      [`& .${Xn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${Xn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), ch = se(Ht, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), uh = se("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(qe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function dh({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function ph(e) {
    return `Go to ${e} page`;
  }
  const fh = (e) => {
    const { classes: t } = e;
    return me({
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
    }, oh, t);
  }, gh = c.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = nh, backIconButtonProps: l, colSpan: s, component: a = is, count: i, disabled: d = false, getItemAriaLabel: u = ph, labelDisplayedRows: p = dh, labelRowsPerPage: h = "Rows per page:", nextIconButtonProps: g, onPageChange: m, onRowsPerPageChange: x, page: v, rowsPerPage: I, rowsPerPageOptions: C = [
      10,
      25,
      50,
      100
    ], SelectProps: E = {}, showFirstButton: $ = false, showLastButton: k = false, slotProps: H = {}, slots: A = {}, ...R } = o, y = o, w = fh(y), M = (H == null ? void 0 : H.select) ?? E, O = M.native ? "option" : ch;
    let D;
    (a === is || a === "td") && (D = s || 1e3);
    const _ = nt(M.id), F = nt(M.labelId), S = () => i === -1 ? (v + 1) * I : I === -1 ? i : Math.min(i, (v + 1) * I), T = {
      slots: A,
      slotProps: H
    }, [L, z] = at("root", {
      ref: n,
      className: w.root,
      elementType: rh,
      externalForwardedProps: {
        ...T,
        component: a,
        ...R
      },
      ownerState: y,
      additionalProps: {
        colSpan: D
      }
    }), [G, j] = at("toolbar", {
      className: w.toolbar,
      elementType: lh,
      externalForwardedProps: T,
      ownerState: y
    }), [V, U] = at("spacer", {
      className: w.spacer,
      elementType: sh,
      externalForwardedProps: T,
      ownerState: y
    }), [W, K] = at("selectLabel", {
      className: w.selectLabel,
      elementType: ih,
      externalForwardedProps: T,
      ownerState: y,
      additionalProps: {
        id: F
      }
    }), [B, te] = at("select", {
      className: w.select,
      elementType: ah,
      externalForwardedProps: T,
      ownerState: y
    }), [J, ne] = at("menuItem", {
      className: w.menuItem,
      elementType: O,
      externalForwardedProps: T,
      ownerState: y
    }), [ae, we] = at("displayedRows", {
      className: w.displayedRows,
      elementType: uh,
      externalForwardedProps: T,
      ownerState: y
    });
    return f.jsx(L, {
      ...z,
      children: f.jsxs(G, {
        ...j,
        children: [
          f.jsx(V, {
            ...U
          }),
          C.length > 1 && f.jsx(W, {
            ...K,
            children: h
          }),
          C.length > 1 && f.jsx(B, {
            variant: "standard",
            ...!M.variant && {
              input: Li || (Li = f.jsx(Is, {}))
            },
            value: I,
            onChange: x,
            id: _,
            labelId: F,
            ...M,
            classes: {
              ...M.classes,
              root: de(w.input, w.selectRoot, (M.classes || {}).root),
              select: de(w.select, (M.classes || {}).select),
              icon: de(w.selectIcon, (M.classes || {}).icon)
            },
            disabled: d,
            ...te,
            children: C.map((Y) => c.createElement(J, {
              ...ne,
              key: Y.label ? Y.label : Y,
              value: Y.value ? Y.value : Y
            }, Y.label ? Y.label : Y))
          }),
          f.jsx(ae, {
            ...we,
            children: p({
              from: i === 0 ? 0 : v * I + 1,
              to: S(),
              count: i === -1 ? -1 : i,
              page: v
            })
          }),
          f.jsx(r, {
            className: w.actions,
            backIconButtonProps: l,
            count: i,
            nextIconButtonProps: g,
            onPageChange: m,
            page: v,
            rowsPerPage: I,
            showFirstButton: $,
            showLastButton: k,
            slotProps: H.actions,
            slots: A.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  }), hh = Me(f.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), mh = Me(f.jsx("path", {
    d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "CheckCircleOutline"), bh = Me(f.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Ch = Me(f.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "ErrorOutline"), Lr = Me(f.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), ji = Me(f.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Ai = Me(f.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), wh = Me(f.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), xh = Me(f.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), vh = Me(f.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), yh = Me(f.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Sh = Me(f.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Ih = Me(f.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), or = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function Cc(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function Ph({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: l, loading: s }) {
    const [a, i] = c.useState(""), [d, u] = c.useState(null), [p, h] = c.useState(null), g = c.useRef(0), m = !a, x = c.useMemo(() => {
      if (!a) return e;
      const w = a.toLowerCase();
      return e.filter((M) => M.path.toLowerCase().includes(w) || M.headerName.toLowerCase().includes(w));
    }, [
      e,
      a
    ]), v = e.filter((w) => w.visible).length, I = (w, M) => {
      w.stopPropagation(), r(e.map((O) => O.path === M ? {
        ...O,
        visible: !O.visible
      } : O));
    }, C = (w) => {
      r(e.map((M) => ({
        ...M,
        visible: w
      })));
    }, E = c.useCallback((w, M) => {
      w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", M), u(M);
    }, []), $ = c.useCallback((w, M) => {
      w.preventDefault(), g.current += 1, M !== d && h(M);
    }, [
      d
    ]), k = c.useCallback((w) => {
      w.preventDefault(), g.current -= 1, g.current <= 0 && (g.current = 0, h(null));
    }, []), H = c.useCallback((w) => {
      w.preventDefault(), w.dataTransfer.dropEffect = "move";
    }, []), A = c.useCallback((w, M) => {
      w.preventDefault(), g.current = 0, h(null), u(null);
      const O = w.dataTransfer.getData("text/plain");
      if (!O || O === M) return;
      const D = [
        ...e
      ], _ = D.findIndex((T) => T.path === O), F = D.findIndex((T) => T.path === M);
      if (_ === -1 || F === -1) return;
      const [S] = D.splice(_, 1);
      D.splice(F, 0, S), r(D);
    }, [
      e,
      r
    ]), R = c.useCallback(() => {
      g.current = 0, u(null), h(null);
    }, []), y = () => {
      r(e.map((w) => ({
        path: w.path,
        visible: true,
        headerName: w.path.split(".").pop() || w.path
      })));
    };
    return f.jsxs(tt, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        f.jsxs(bc, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            f.jsx(Gt, {
              size: "small",
              placeholder: le.t("json_table_search_columns"),
              value: a,
              onChange: (w) => i(w.target.value),
              slotProps: {
                input: {
                  startAdornment: f.jsx(mc, {
                    position: "start",
                    children: f.jsx(vh, {
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
            f.jsx(zn, {
              title: le.t("json_table_refresh_columns"),
              children: f.jsx("span", {
                children: f.jsx(Vt, {
                  size: "small",
                  onClick: l,
                  disabled: s,
                  children: f.jsx(wh, {
                    fontSize: "small"
                  })
                })
              })
            }),
            f.jsx(zn, {
              title: le.t("json_table_show_all"),
              children: f.jsx(Vt, {
                size: "small",
                onClick: () => C(true),
                children: f.jsx(Sh, {
                  fontSize: "small"
                })
              })
            }),
            f.jsx(zn, {
              title: le.t("json_table_hide_all"),
              children: f.jsx(Vt, {
                size: "small",
                onClick: () => C(false),
                children: f.jsx(Ih, {
                  fontSize: "small"
                })
              })
            }),
            f.jsx(zn, {
              title: le.t("json_table_reset_all"),
              children: f.jsx(Vt, {
                size: "small",
                onClick: y,
                children: f.jsx(xh, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        f.jsx(tt, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: x.length === 0 ? f.jsx(tt, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: f.jsx(Ie, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? le.t("json_table_no_columns") : le.t("json_table_no_search_results")
            })
          }) : x.map((w) => {
            const M = t.find((_) => _.path === w.path), O = n === w.path, D = (M == null ? void 0 : M.type) || "string";
            return f.jsx(cg, {
              onClick: () => o(w.path),
              draggable: m,
              onDragStart: m ? (_) => E(_, w.path) : void 0,
              onDragEnter: m ? (_) => $(_, w.path) : void 0,
              onDragLeave: m ? k : void 0,
              onDragOver: m ? H : void 0,
              onDrop: m ? (_) => A(_, w.path) : void 0,
              onDragEnd: m ? R : void 0,
              variant: "outlined",
              sx: {
                p: 1,
                cursor: m ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: O ? "primary.main" : "divider",
                backgroundColor: O ? "action.selected" : "background.paper",
                opacity: d === w.path ? 0.4 : w.visible ? 1 : 0.55,
                borderTop: p === w.path ? "3px solid" : void 0,
                borderTopColor: p === w.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: O ? "action.selected" : "action.hover"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: f.jsxs(tt, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  m && f.jsx(bh, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    }
                  }),
                  f.jsx(Yr, {
                    checked: w.visible,
                    onClick: (_) => I(_, w.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    }
                  }),
                  f.jsxs(tt, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      f.jsx(Ie, {
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
                      w.headerName && w.headerName !== w.path && f.jsx(Ie, {
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
                  f.jsx(xo, {
                    label: D,
                    size: "small",
                    sx: {
                      backgroundColor: or[D] || or.string,
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
        e.length > 0 && f.jsx(tt, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: f.jsxs(Ie, {
            variant: "caption",
            color: "text.secondary",
            children: [
              v,
              " / ",
              e.length,
              " ",
              le.t("json_table_columns_visible")
            ]
          })
        })
      ]
    });
  }
  function Nr(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function wc(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: l = false } = t;
    let s = e.toFixed(n);
    if (l) {
      const [a, i] = s.split("."), d = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = i !== void 0 ? `${d}.${i}` : d;
    }
    return `${o}${s}${r}`;
  }
  const Mh = [
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
  function xc(e, t) {
    if (e == null || e === "") return "";
    try {
      let n;
      if (typeof e == "string") n = new Date(e);
      else if (typeof e == "number") n = new Date(e > 1e11 ? e : e * 1e3);
      else if (e instanceof Date) n = e;
      else return Nr(e);
      if (isNaN(n.getTime())) return Nr(e);
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
      return Nr(e);
    }
  }
  function as(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Nr(e);
  }
  function kh(e, t) {
    if (!e || e.trim() === "") return false;
    try {
      return !!new Function("value", `'use strict'; return (${e});`)(t);
    } catch {
      return false;
    }
  }
  function Eh(e) {
    if (!e || e.trim() === "") return null;
    try {
      return new Function("value", `'use strict'; return (${e});`), null;
    } catch (t) {
      return t instanceof Error ? t.message : "Invalid expression";
    }
  }
  function Fh({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o, _p2, _q, _r2, _s2, _t2, _u2;
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
    ]), p = c.useMemo(() => (t == null ? void 0 : t.min) !== void 0 && typeof t.min == "number" ? t.min + ((t.max || 0) - t.min) * 0.75 : 1234.567, [
      t
    ]), h = c.useMemo(() => t ? Object.values(t.typeCounts).reduce((g, m) => g + m, 0) : 0, [
      t
    ]);
    return f.jsxs(tt, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        f.jsxs(tt, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            f.jsx(xo, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: or[s] || or.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            f.jsx(Ie, {
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
        f.jsxs(mn, {
          spacing: 1,
          children: [
            f.jsxs(Tr, {
              expanded: o.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                f.jsx(Dr, {
                  expandIcon: f.jsx(Lr, {}),
                  children: f.jsx(Ie, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: le.t("json_table_section_basic")
                  })
                }),
                f.jsx(Or, {
                  children: f.jsxs(mn, {
                    spacing: 2,
                    children: [
                      f.jsx(Gt, {
                        label: le.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (g) => n({
                          ...e,
                          headerName: g.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      f.jsx(Gt, {
                        label: le.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (g) => n({
                          ...e,
                          width: g.target.value ? parseInt(g.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: le.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      f.jsxs(ql, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          f.jsx(Yl, {
                            children: le.t("json_table_align")
                          }),
                          f.jsxs(qr, {
                            label: le.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (g) => n({
                              ...e,
                              align: g.target.value
                            }),
                            children: [
                              f.jsx(Ht, {
                                value: "left",
                                children: le.t("json_table_align_left")
                              }),
                              f.jsx(Ht, {
                                value: "center",
                                children: le.t("json_table_align_center")
                              }),
                              f.jsx(Ht, {
                                value: "right",
                                children: le.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      f.jsx(Ln, {
                        control: f.jsx(Er, {
                          checked: e.visible,
                          onChange: (g) => n({
                            ...e,
                            visible: g.target.checked
                          })
                        }),
                        label: f.jsx(Ie, {
                          variant: "body2",
                          children: le.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            f.jsxs(Tr, {
              expanded: o.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                f.jsx(Dr, {
                  expandIcon: f.jsx(Lr, {}),
                  children: f.jsx(Ie, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: le.t("json_table_section_formatting")
                  })
                }),
                f.jsx(Or, {
                  children: f.jsxs(mn, {
                    spacing: 2,
                    children: [
                      (s === "number" || ((_a2 = e.format) == null ? void 0 : _a2.type) === "number") && f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(Ie, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: le.t("json_table_number_format")
                          }),
                          f.jsxs(tt, {
                            children: [
                              f.jsxs(Ie, {
                                variant: "caption",
                                color: "text.secondary",
                                gutterBottom: true,
                                children: [
                                  le.t("json_table_number_decimals"),
                                  ":",
                                  " ",
                                  ((_b2 = e.format) == null ? void 0 : _b2.numberDecimals) ?? 2
                                ]
                              }),
                              f.jsx(Ld, {
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
                          f.jsx(Gt, {
                            label: le.t("json_table_number_prefix"),
                            value: ((_d2 = e.format) == null ? void 0 : _d2.numberPrefix) || "",
                            onChange: (g) => a({
                              type: "number",
                              numberPrefix: g.target.value
                            }),
                            size: "small",
                            placeholder: "$, \u20AC, \xA3"
                          }),
                          f.jsx(Gt, {
                            label: le.t("json_table_number_suffix"),
                            value: ((_e = e.format) == null ? void 0 : _e.numberSuffix) || "",
                            onChange: (g) => a({
                              type: "number",
                              numberSuffix: g.target.value
                            }),
                            size: "small",
                            placeholder: "%, kg, \xB0C"
                          }),
                          f.jsx(Ln, {
                            control: f.jsx(Er, {
                              checked: ((_f2 = e.format) == null ? void 0 : _f2.numberThousandsSeparator) || false,
                              onChange: (g) => a({
                                type: "number",
                                numberThousandsSeparator: g.target.checked
                              }),
                              size: "small"
                            }),
                            label: f.jsx(Ie, {
                              variant: "body2",
                              children: le.t("json_table_number_thousands")
                            })
                          }),
                          f.jsxs(Yt, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(Ie, {
                                variant: "caption",
                                color: "text.secondary",
                                children: le.t("json_table_preview")
                              }),
                              f.jsxs(Ie, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  p,
                                  " \u2192",
                                  " ",
                                  wc(p, {
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
                          f.jsx(Ie, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: le.t("json_table_date_format")
                          }),
                          (t == null ? void 0 : t.dateFormat) && f.jsx(Gt, {
                            label: le.t("json_table_date_input_format"),
                            value: t.dateFormat,
                            disabled: true,
                            size: "small",
                            helperText: le.t("json_table_date_detected_hint")
                          }),
                          f.jsxs(ql, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              f.jsx(Yl, {
                                children: le.t("json_table_date_output_format")
                              }),
                              f.jsx(qr, {
                                label: le.t("json_table_date_output_format"),
                                value: ((_l2 = e.format) == null ? void 0 : _l2.dateFormat) || "yyyy-MM-dd",
                                onChange: (g) => a({
                                  type: "date",
                                  dateFormat: g.target.value,
                                  dateInputFormat: t == null ? void 0 : t.dateFormat
                                }),
                                children: Mh.map((g) => f.jsx(Ht, {
                                  value: g.value,
                                  children: g.label
                                }, g.value))
                              })
                            ]
                          }),
                          f.jsxs(Yt, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(Ie, {
                                variant: "caption",
                                color: "text.secondary",
                                children: le.t("json_table_preview")
                              }),
                              f.jsx(Ie, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: xc(/* @__PURE__ */ new Date(), ((_m2 = e.format) == null ? void 0 : _m2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_n2 = e.format) == null ? void 0 : _n2.type) === "boolean") && f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(Ie, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500
                            },
                            children: le.t("json_table_boolean_format")
                          }),
                          f.jsx(Gt, {
                            label: le.t("json_table_boolean_true"),
                            value: ((_o = e.format) == null ? void 0 : _o.booleanTrue) || "",
                            onChange: (g) => a({
                              type: "boolean",
                              booleanTrue: g.target.value
                            }),
                            size: "small",
                            placeholder: "Yes, On, \u2713, Active"
                          }),
                          f.jsx(Gt, {
                            label: le.t("json_table_boolean_false"),
                            value: ((_p2 = e.format) == null ? void 0 : _p2.booleanFalse) || "",
                            onChange: (g) => a({
                              type: "boolean",
                              booleanFalse: g.target.value
                            }),
                            size: "small",
                            placeholder: "No, Off, \u2717, Inactive"
                          }),
                          f.jsxs(Yt, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(Ie, {
                                variant: "caption",
                                color: "text.secondary",
                                children: le.t("json_table_preview")
                              }),
                              f.jsxs(mn, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                  mt: 0.5
                                },
                                children: [
                                  f.jsxs(Ie, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      as(true, (_q = e.format) == null ? void 0 : _q.booleanTrue, (_r2 = e.format) == null ? void 0 : _r2.booleanFalse)
                                    ]
                                  }),
                                  f.jsxs(Ie, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      as(false, (_s2 = e.format) == null ? void 0 : _s2.booleanTrue, (_t2 = e.format) == null ? void 0 : _t2.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && !e.format && f.jsx(Ie, {
                        variant: "body2",
                        color: "text.secondary",
                        children: le.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            f.jsxs(Tr, {
              expanded: o.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                f.jsx(Dr, {
                  expandIcon: f.jsx(Lr, {}),
                  children: f.jsxs(tt, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    },
                    children: [
                      f.jsx(Ie, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: le.t("json_table_section_styling")
                      }),
                      (((_u2 = e.cellStyle) == null ? void 0 : _u2.length) ?? 0) > 0 && f.jsx(xo, {
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
                f.jsx(Or, {
                  children: f.jsxs(mn, {
                    spacing: 1.5,
                    children: [
                      (e.cellStyle || []).map((g, m) => {
                        const x = Eh(g.condition), v = g.condition.trim() !== "";
                        return f.jsx(Yt, {
                          variant: "outlined",
                          sx: {
                            p: 1.5
                          },
                          children: f.jsxs(mn, {
                            spacing: 1.5,
                            children: [
                              f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center"
                                },
                                children: [
                                  f.jsxs(Ie, {
                                    variant: "caption",
                                    sx: {
                                      fontWeight: 500
                                    },
                                    children: [
                                      le.t("json_table_rule"),
                                      " ",
                                      m + 1
                                    ]
                                  }),
                                  f.jsx(zn, {
                                    title: le.t("json_table_delete_rule"),
                                    children: f.jsx(Vt, {
                                      size: "small",
                                      onClick: () => d(m),
                                      color: "error",
                                      children: f.jsx(xd, {
                                        fontSize: "small"
                                      })
                                    })
                                  })
                                ]
                              }),
                              f.jsx(Gt, {
                                label: le.t("json_table_condition"),
                                value: g.condition,
                                onChange: (I) => i(m, {
                                  condition: I.target.value
                                }),
                                size: "small",
                                fullWidth: true,
                                placeholder: "value > 100",
                                error: v && x !== null,
                                helperText: v && x ? x : le.t("json_table_condition_hint"),
                                slotProps: {
                                  input: {
                                    endAdornment: v ? x ? f.jsx(zn, {
                                      title: x,
                                      children: f.jsx(Ch, {
                                        fontSize: "small",
                                        color: "error"
                                      })
                                    }) : f.jsx(zn, {
                                      title: le.t("json_table_condition_valid"),
                                      children: f.jsx(mh, {
                                        fontSize: "small",
                                        color: "success"
                                      })
                                    }) : null
                                  }
                                }
                              }),
                              f.jsxs(mn, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  f.jsx(Gt, {
                                    label: le.t("json_table_bg_color"),
                                    value: g.backgroundColor || "",
                                    onChange: (I) => i(m, {
                                      backgroundColor: I.target.value
                                    }),
                                    size: "small",
                                    fullWidth: true,
                                    placeholder: "#ffebee",
                                    slotProps: {
                                      input: {
                                        endAdornment: g.backgroundColor ? f.jsx(tt, {
                                          sx: {
                                            width: 20,
                                            height: 20,
                                            borderRadius: "4px",
                                            backgroundColor: g.backgroundColor,
                                            border: 1,
                                            borderColor: "divider",
                                            flexShrink: 0
                                          }
                                        }) : null
                                      }
                                    }
                                  }),
                                  f.jsx(Gt, {
                                    label: le.t("json_table_text_color"),
                                    value: g.textColor || "",
                                    onChange: (I) => i(m, {
                                      textColor: I.target.value
                                    }),
                                    size: "small",
                                    fullWidth: true,
                                    placeholder: "#c62828",
                                    slotProps: {
                                      input: {
                                        endAdornment: g.textColor ? f.jsx(tt, {
                                          sx: {
                                            width: 20,
                                            height: 20,
                                            borderRadius: "4px",
                                            backgroundColor: g.textColor,
                                            border: 1,
                                            borderColor: "divider",
                                            flexShrink: 0
                                          }
                                        }) : null
                                      }
                                    }
                                  })
                                ]
                              }),
                              f.jsxs(mn, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                  f.jsx(Ln, {
                                    control: f.jsx(Yr, {
                                      checked: g.fontWeight === "bold",
                                      onChange: (I) => i(m, {
                                        fontWeight: I.target.checked ? "bold" : "normal"
                                      }),
                                      icon: f.jsx(ji, {}),
                                      checkedIcon: f.jsx(ji, {}),
                                      size: "small"
                                    }),
                                    label: f.jsx(Ie, {
                                      variant: "caption",
                                      children: le.t("json_table_bold")
                                    })
                                  }),
                                  f.jsx(Ln, {
                                    control: f.jsx(Yr, {
                                      checked: g.fontStyle === "italic",
                                      onChange: (I) => i(m, {
                                        fontStyle: I.target.checked ? "italic" : "normal"
                                      }),
                                      icon: f.jsx(Ai, {}),
                                      checkedIcon: f.jsx(Ai, {}),
                                      size: "small"
                                    }),
                                    label: f.jsx(Ie, {
                                      variant: "caption",
                                      children: le.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (g.backgroundColor || g.textColor) && f.jsx(Yt, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  backgroundColor: g.backgroundColor || "transparent",
                                  color: g.textColor || "inherit",
                                  fontWeight: g.fontWeight || "normal",
                                  fontStyle: g.fontStyle || "normal"
                                },
                                children: f.jsx(Ie, {
                                  variant: "body2",
                                  children: le.t("json_table_sample_value")
                                })
                              })
                            ]
                          })
                        }, m);
                      }),
                      f.jsx(lr, {
                        startIcon: f.jsx(hh, {}),
                        onClick: u,
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                        children: le.t("json_table_add_style_rule")
                      })
                    ]
                  })
                })
              ]
            }),
            f.jsxs(Tr, {
              expanded: o.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                f.jsx(Dr, {
                  expandIcon: f.jsx(Lr, {}),
                  children: f.jsx(Ie, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: 500
                    },
                    children: le.t("json_table_section_advanced")
                  })
                }),
                f.jsx(Or, {
                  children: f.jsxs(mn, {
                    spacing: 2,
                    children: [
                      f.jsx(Ln, {
                        control: f.jsx(Er, {
                          checked: e.sortable ?? true,
                          onChange: (g) => n({
                            ...e,
                            sortable: g.target.checked
                          }),
                          size: "small"
                        }),
                        label: f.jsx(Ie, {
                          variant: "body2",
                          children: le.t("json_table_sortable")
                        })
                      }),
                      f.jsx(Ln, {
                        control: f.jsx(Er, {
                          checked: e.filterable ?? false,
                          onChange: (g) => n({
                            ...e,
                            filterable: g.target.checked
                          }),
                          size: "small"
                        }),
                        label: f.jsx(Ie, {
                          variant: "body2",
                          children: le.t("json_table_filterable")
                        })
                      }),
                      t && f.jsxs(Yt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          f.jsx(Ie, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: le.t("json_table_analysis_info")
                          }),
                          f.jsxs(mn, {
                            spacing: 0.5,
                            children: [
                              f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_type_label")
                                  }),
                                  f.jsx(xo, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: or[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_confidence")
                                  }),
                                  f.jsxs(Ie, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_nulls")
                                  }),
                                  f.jsxs(Ie, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      h > 0 && ` (${Math.round(t.nullCount / h * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_distinct")
                                  }),
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_range")
                                  }),
                                  f.jsxs(Ie, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && f.jsxs(tt, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  f.jsx(Ie, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_date_input_format")
                                  }),
                                  f.jsx(Ie, {
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
  const Th = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Oh = /^\d{4}-\d{2}-\d{2}$/, Dh = /^(\d{2})\.(\d{2})\.(\d{4})$/, Rh = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Hh = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, $h = /^(\d{2})\/(\d{2})\/(\d{4})$/, Lh = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, jh = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function jr(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function Hl(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Ar(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Ah = [
    {
      regex: Th,
      format: "ISO-8601"
    },
    {
      regex: Oh,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return jr(n, t);
      }
    },
    {
      regex: Hh,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return jr(t, n) && Ar(o, r, l);
      }
    },
    {
      regex: Rh,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return jr(t, n) && Ar(o, r);
      }
    },
    {
      regex: Dh,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return jr(t, n);
      }
    },
    {
      regex: jh,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return Hl(t, n) && Ar(o, r, l);
      }
    },
    {
      regex: Lh,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Hl(t, n) && Ar(o, r);
      }
    },
    {
      regex: $h,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Hl(t, n);
      }
    }
  ];
  function zh(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Ah) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Gh(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function _h(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Gh(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = zh(e);
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
  function Vh(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Nh(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function Bh(e) {
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
  function zi(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Wh(e, t) {
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
  function Uh(e, t, n = 100) {
    const o = t.length, r = /* @__PURE__ */ new Map();
    for (const l of e) r.set(l, Bh(l));
    for (const l of t) for (const s of e) {
      const a = r.get(s), i = l[s], d = _h(i);
      if (zi(a.typeCounts, d.type), d.type === "null") {
        a.nullCount++;
        continue;
      }
      if (a.nonNullCount++, d.dateFormat && zi(a.dateFormatCounts, d.dateFormat), a.distinctValues.size < n && a.distinctValues.add(i), typeof i == "number" && Number.isFinite(i) && ((a.numMin === void 0 || i < a.numMin) && (a.numMin = i), (a.numMax === void 0 || i > a.numMax) && (a.numMax = i)), typeof i == "string") {
        const u = i.length;
        (a.strLenMin === void 0 || u < a.strLenMin) && (a.strLenMin = u), (a.strLenMax === void 0 || u > a.strLenMax) && (a.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = Wh(i, d.dateFormat);
        u !== null && ((a.dateMin === void 0 || u < a.dateMin) && (a.dateMin = u), (a.dateMax === void 0 || u > a.dateMax) && (a.dateMax = u));
      }
    }
    return e.map((l) => {
      const s = r.get(l), a = Vh(s.typeCounts), i = a === "date" ? Nh(s.dateFormatCounts) : void 0, d = a === "date" ? s.typeCounts.date || 0 : s.typeCounts[a] || 0, u = o > 0 ? Math.round(d / o * 100) / 100 : 0, p = {
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
      return i && (p.dateFormat = i), a === "number" && (s.numMin !== void 0 && (p.min = s.numMin), s.numMax !== void 0 && (p.max = s.numMax)), a === "date" && (s.dateMin !== void 0 && (p.min = s.dateMin), s.dateMax !== void 0 && (p.max = s.dateMax)), (a === "string" || a === "mixed") && (s.strLenMin !== void 0 && (p.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (p.stringLengthMax = s.strLenMax)), p;
    });
  }
  function Qr(e, t, n, o, r, l, s, a) {
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
        Qr(e[i], d, n, o, r, l + 1, s, a);
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
        Qr(e[d], u, n, o, r, l + 1, s, a);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Kh(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const a = {}, i = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const d of Object.keys(s)) Qr(s[d], d, a, n, i, 1, t, o);
      else Qr(s, "_value", a, n, i, 0, t, o);
      r.push(a);
    }
    const l = qh([
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
  function qh(e) {
    return e.sort((t, n) => {
      const o = Gi(t), r = Gi(n), l = Math.min(o.length, r.length);
      for (let s = 0; s < l; s++) {
        const a = o[s], i = r[s], d = _i(a), u = _i(i);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (a !== i) return a.localeCompare(i);
      }
      return o.length - r.length;
    });
  }
  function Gi(e) {
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
  function _i(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Yh = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function vc(e, t) {
    const n = performance.now(), o = {
      ...Yh,
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
    const r = Kh(e, o.maxDepth), l = Uh(r.paths, r.rows, o.maxDistinct), s = r.paths.length * r.rows.length, a = l.reduce((u, p) => u + p.nullCount, 0), i = s > 0 ? Math.round(a / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
  function Xh(e, t) {
    return c.useMemo(() => vc(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Qh({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: l, socket: s }) {
    const [a, i] = c.useState(n), [d, u] = c.useState(null), [p, h] = c.useState(false), [g, m] = c.useState([]), [x, v] = c.useState(false), I = c.useRef(false), C = c.useRef(() => Promise.resolve());
    c.useEffect(() => {
      e && (i(n), h(false), u(n.length > 0 ? n[0].path : null), I.current = false);
    }, [
      e,
      n
    ]), c.useEffect(() => {
      e && !I.current && (I.current = true, C.current());
    }, [
      e
    ]);
    const E = c.useCallback(async () => {
      v(true);
      try {
        const w = l.oid;
        if (!w) {
          v(false);
          return;
        }
        const M = await s.getState(w);
        if (!(M == null ? void 0 : M.val)) {
          v(false);
          return;
        }
        let O;
        const D = M.val;
        if (typeof D == "string") try {
          const S = JSON.parse(D);
          O = Array.isArray(S) ? S : [
            S
          ];
        } catch {
          v(false);
          return;
        }
        else if (Array.isArray(D)) O = D;
        else if (typeof D == "object" && D !== null) O = [
          D
        ];
        else {
          v(false);
          return;
        }
        const _ = l.tableMaxDepth || 10, F = vc(O, {
          maxDepth: _
        });
        m(F.columns), i((S) => {
          const T = new Map(S.map((z) => [
            z.path,
            z
          ]));
          return F.columns.map((z) => {
            const G = T.get(z.path);
            return G || {
              path: z.path,
              visible: true,
              headerName: z.path.split(".").pop() || z.path
            };
          });
        });
      } catch {
      } finally {
        v(false);
      }
    }, [
      l,
      s
    ]);
    C.current = E;
    const $ = c.useCallback((w) => {
      i((M) => M.map((O) => O.path === w.path ? w : O)), h(true);
    }, []), k = c.useCallback((w) => {
      i(w), h(true);
    }, []), H = c.useCallback(() => {
      o(a), h(false), t();
    }, [
      a,
      o,
      t
    ]), A = c.useCallback((w, M) => {
      M === "backdropClick" && p || t();
    }, [
      p,
      t
    ]), R = d ? a.find((w) => w.path === d) : null, y = d ? g.find((w) => w.path === d) : void 0;
    return f.jsx(Ja, {
      theme: r,
      children: f.jsxs(jd, {
        open: e,
        onClose: A,
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
          f.jsx(Ad, {
            sx: {
              py: 1.5,
              px: 2.5
            },
            children: f.jsxs(tt, {
              sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                f.jsx(Ie, {
                  variant: "h6",
                  children: le.t("json_table_column_editor_title")
                }),
                f.jsx(Vt, {
                  onClick: () => A(),
                  size: "small",
                  sx: {
                    color: "text.secondary"
                  },
                  children: f.jsx(Gd, {})
                })
              ]
            })
          }),
          f.jsxs(zd, {
            dividers: true,
            sx: {
              p: 0,
              display: "flex",
              overflow: "hidden"
            },
            children: [
              f.jsx(tt, {
                sx: {
                  width: "40%",
                  minWidth: 280,
                  borderRight: 1,
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                },
                children: f.jsx(Ph, {
                  columns: a,
                  discoveredColumns: g,
                  selectedPath: d,
                  onSelect: u,
                  onChange: k,
                  onRefresh: E,
                  loading: x
                })
              }),
              f.jsx(tt, {
                sx: {
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                },
                children: R ? f.jsx(Fh, {
                  column: R,
                  discoveredColumn: y,
                  onChange: $
                }) : f.jsx(tt, {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                  },
                  children: f.jsx(Ie, {
                    variant: "body2",
                    color: "text.secondary",
                    children: a.length > 0 ? le.t("json_table_select_column") : le.t("json_table_no_columns")
                  })
                })
              })
            ]
          }),
          f.jsxs(gg, {
            sx: {
              px: 2.5,
              py: 1.5
            },
            children: [
              f.jsx(lr, {
                onClick: () => A(),
                children: le.t("cancel")
              }),
              f.jsx(lr, {
                variant: "contained",
                onClick: H,
                disabled: !p,
                children: le.t("save")
              })
            ]
          })
        ]
      })
    });
  }
  function Jh(e, t, n, o) {
    const r = e.name || "columnConfig", l = o.context.theme, [s, a] = c.useState(false), i = c.useMemo(() => Cc(t[r]), [
      t,
      r
    ]), d = i.filter((m) => m.visible).length, u = i.length, p = i.some((m) => m.format), h = i.some((m) => m.cellStyle && m.cellStyle.length > 0), g = c.useCallback((m) => {
      n({
        [r]: JSON.stringify(m)
      });
    }, [
      r,
      n
    ]);
    return f.jsx(Ja, {
      theme: l,
      children: f.jsxs(tt, {
        sx: {
          mt: 1,
          width: "100%"
        },
        children: [
          f.jsx(lr, {
            variant: "outlined",
            startIcon: f.jsx(yh, {}),
            onClick: () => a(true),
            fullWidth: true,
            sx: {
              textTransform: "none"
            },
            children: le.t("json_table_configure_columns")
          }),
          u > 0 && f.jsxs(Ie, {
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
              le.t("json_table_columns_visible"),
              p && ` \xB7 ${le.t("json_table_has_formatting")}`,
              h && ` \xB7 ${le.t("json_table_has_styling")}`
            ]
          }),
          f.jsx(Qh, {
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
  const Zh = () => [
    {
      label: "",
      type: "custom",
      component: () => f.jsx(Mn, {
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
      component: () => f.jsx(Mn, {
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
      component: () => f.jsx(Mn, {
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
      name: "tableHideFooter",
      type: "checkbox",
      label: "json_table_hide_footer",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => f.jsx(Mn, {
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
      component: () => f.jsx(Mn, {
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
      component: () => f.jsx(Mn, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      fallbackFields: [],
      component: (e, t, n, o) => f.jsx(Ol, {
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
      fallbackFields: [],
      noGradient: true,
      component: (e, t, n, o) => f.jsx(Ol, {
        field: e,
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
      component: () => f.jsx(Mn, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      label: "json_table_striped_color",
      default: "",
      type: "custom",
      fallbackFields: [],
      component: (e, t, n, o) => f.jsx(Ol, {
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
      component: () => f.jsx(Mn, {
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
      component: () => f.jsx(Mn, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Jh
    }
  ], yc = c.createContext(void 0);
  function Ee() {
    const e = c.useContext(yc);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const Sc = c.createContext(void 0), ie = () => {
    const e = c.useContext(Sc);
    if (!e) throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
    return e;
  }, em = parseInt(c.version, 10), Ve = (e) => {
    if (em >= 19) {
      const t = (n) => e(n, n.ref ?? null);
      return t.displayName = e.displayName ?? e.name, t;
    }
    return c.forwardRef(e);
  };
  var Jr = /* @__PURE__ */ Symbol("NOT_FOUND");
  function tm(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
  }
  function nm(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
  }
  function om(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every((n) => typeof n == "function")) {
      const n = e.map((o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o).join(", ");
      throw new TypeError(`${t}[${n}]`);
    }
  }
  var Vi = (e) => Array.isArray(e) ? e : [
    e
  ];
  function rm(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return om(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
  }
  function lm(e, t) {
    const n = [], { length: o } = e;
    for (let r = 0; r < o; r++) n.push(e[r].apply(null, t));
    return n;
  }
  function sm(e) {
    let t;
    return {
      get(n) {
        return t && e(t.key, n) ? t.value : Jr;
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
  function im(e, t) {
    let n = [];
    function o(a) {
      const i = n.findIndex((d) => t(a, d.key));
      if (i > -1) {
        const d = n[i];
        return i > 0 && (n.splice(i, 1), n.unshift(d)), d.value;
      }
      return Jr;
    }
    function r(a, i) {
      o(a) === Jr && (n.unshift({
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
  var am = (e, t) => e === t;
  function cm(e) {
    return function(n, o) {
      if (n === null || o === null || n.length !== o.length) return false;
      const { length: r } = n;
      for (let l = 0; l < r; l++) if (!e(n[l], o[l])) return false;
      return true;
    };
  }
  function Ic(e, t) {
    const n = typeof t == "object" ? t : {
      equalityCheck: t
    }, { equalityCheck: o = am, maxSize: r = 1, resultEqualityCheck: l } = n, s = cm(o);
    let a = 0;
    const i = r <= 1 ? sm(s) : im(r, s);
    function d() {
      let u = i.get(arguments);
      if (u === Jr) {
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
  var um = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  }, dm = typeof WeakRef < "u" ? WeakRef : um, pm = 0, Ni = 1;
  function zr() {
    return {
      s: pm,
      v: void 0,
      o: null,
      p: null
    };
  }
  function Pc(e, t = {}) {
    let n = zr();
    const { resultEqualityCheck: o } = t;
    let r, l = 0;
    function s() {
      var _a2;
      let a = n;
      const { length: i } = arguments;
      for (let p = 0, h = i; p < h; p++) {
        const g = arguments[p];
        if (typeof g == "function" || typeof g == "object" && g !== null) {
          let m = a.o;
          m === null && (a.o = m = /* @__PURE__ */ new WeakMap());
          const x = m.get(g);
          x === void 0 ? (a = zr(), m.set(g, a)) : a = x;
        } else {
          let m = a.p;
          m === null && (a.p = m = /* @__PURE__ */ new Map());
          const x = m.get(g);
          x === void 0 ? (a = zr(), m.set(g, a)) : a = x;
        }
      }
      const d = a;
      let u;
      if (a.s === Ni) u = a.v;
      else if (u = e.apply(null, arguments), l++, o) {
        const p = ((_a2 = r == null ? void 0 : r.deref) == null ? void 0 : _a2.call(r)) ?? r;
        p != null && o(p, u) && (u = p, l !== 0 && l--), r = typeof u == "object" && u !== null || typeof u == "function" ? new dm(u) : u;
      }
      return d.s = Ni, d.v = u, u;
    }
    return s.clearCache = () => {
      n = zr(), s.resetResultsCount();
    }, s.resultsCount = () => l, s.resetResultsCount = () => {
      l = 0;
    }, s;
  }
  function Mc(e, ...t) {
    const n = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: t
    } : e, o = (...r) => {
      let l = 0, s = 0, a, i = {}, d = r.pop();
      typeof d == "object" && (i = d, d = r.pop()), tm(d, `createSelector expects an output function after the inputs, but received: [${typeof d}]`);
      const u = {
        ...n,
        ...i
      }, { memoize: p, memoizeOptions: h = [], argsMemoize: g = Pc, argsMemoizeOptions: m = [] } = u, x = Vi(h), v = Vi(m), I = rm(r), C = p(function() {
        return l++, d.apply(null, arguments);
      }, ...x), E = g(function() {
        s++;
        const k = lm(I, arguments);
        return a = C.apply(null, k), a;
      }, ...v);
      return Object.assign(E, {
        resultFunc: d,
        memoizedResultFunc: C,
        dependencies: I,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => a,
        recomputations: () => l,
        resetRecomputations: () => {
          l = 0;
        },
        memoize: p,
        argsMemoize: g
      });
    };
    return Object.assign(o, {
      withTypes: () => o
    }), o;
  }
  var kc = Mc(Pc), fm = Object.assign((e, t = kc) => {
    nm(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const n = Object.keys(e), o = n.map((l) => e[l]);
    return t(o, (...l) => l.reduce((s, a, i) => (s[n[i]] = a, s), {}));
  }, {
    withTypes: () => fm
  });
  const gm = Object.is;
  function Ec(e, t) {
    if (e === t) return true;
    if (!(e instanceof Object) || !(t instanceof Object)) return false;
    let n = 0, o = 0;
    for (const r in e) if (n += 1, !gm(e[r], t[r]) || !(r in t)) return false;
    for (const r in t) o += 1;
    return n === o;
  }
  var Fc = {
    exports: {}
  }, Tc = {};
  var ko = c;
  function hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mm = typeof Object.is == "function" ? Object.is : hm, bm = ko.useState, Cm = ko.useEffect, wm = ko.useLayoutEffect, xm = ko.useDebugValue;
  function vm(e, t) {
    var n = t(), o = bm({
      inst: {
        value: n,
        getSnapshot: t
      }
    }), r = o[0].inst, l = o[1];
    return wm(function() {
      r.value = n, r.getSnapshot = t, $l(r) && l({
        inst: r
      });
    }, [
      e,
      n,
      t
    ]), Cm(function() {
      return $l(r) && l({
        inst: r
      }), e(function() {
        $l(r) && l({
          inst: r
        });
      });
    }, [
      e
    ]), xm(n), n;
  }
  function $l(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mm(e, n);
    } catch {
      return true;
    }
  }
  function ym(e, t) {
    return t();
  }
  var Sm = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? ym : vm;
  Tc.useSyncExternalStore = ko.useSyncExternalStore !== void 0 ? ko.useSyncExternalStore : Sm;
  Fc.exports = Tc;
  var $s = Fc.exports;
  function Oc(e) {
    return e.acceptsApiRef;
  }
  function Bi(e, t) {
    return Oc(t) ? t(e) : t(e.current.state);
  }
  function Ll(e, t, n, o) {
    return Oc(t) ? t(e, n) : t(e.current.state, o);
  }
  const Dc = Object.is, Ls = Ec, Im = (e, t) => e === t ? true : e.length === t.length && e.every((n, o) => n === t[o]), Pm = (e, t) => {
    let n = Object.is;
    return t instanceof Array ? n = Im : t instanceof Object && (n = Ls), n(e, t);
  }, Rc = () => ({
    state: null,
    equals: null,
    selector: null,
    args: void 0
  }), Zr = [], Hc = () => null, Q = (e, t, n = Dc) => {
    const o = Sn(Rc), r = o.current.selector !== null, [l, s] = c.useState(r ? null : Bi(e, t));
    o.current.state = l, o.current.equals = n, o.current.selector = t;
    const a = c.useCallback(() => (o.current.subscription || (o.current.subscription = e.current.store.subscribe(() => {
      const d = Bi(e, o.current.selector);
      o.current.equals(o.current.state, d) || (o.current.state = d, s(d));
    })), null), Zr), i = c.useCallback(() => () => {
      o.current.subscription && (o.current.subscription(), o.current.subscription = void 0);
    }, Zr);
    return $s.useSyncExternalStore(i, a, Hc), l;
  }, ar = (e, t, n = void 0, o = Dc) => {
    const r = Sn(Rc), l = r.current.selector !== null, [s, a] = c.useState(l ? null : Ll(e, t, n, e.current.instanceId));
    r.current.state = s, r.current.equals = o, r.current.selector = t;
    const i = r.current.args;
    if (r.current.args = n, l && !Pm(i, n)) {
      const p = Ll(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, p) || (r.current.state = p, a(p));
    }
    const d = c.useCallback(() => (r.current.subscription || (r.current.subscription = e.current.store.subscribe(() => {
      const p = Ll(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, p) || (r.current.state = p, a(p));
    })), null), Zr), u = c.useCallback(() => () => {
      r.current.subscription && (r.current.subscription(), r.current.subscription = void 0);
    }, Zr);
    return $s.useSyncExternalStore(u, d, Hc), s;
  }, Mm = Mc({
    memoize: Ic,
    memoizeOptions: {
      maxSize: 1,
      equalityCheck: Object.is
    }
  }), Wi = /* @__PURE__ */ new WeakMap();
  function dn(e) {
    return "current" in e && "instanceId" in e.current;
  }
  const pn = {
    id: "default"
  }, be = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d) => {
      const u = dn(i), p = d ?? (u ? i.current.instanceId : pn), h = u ? i.current.state : i, g = e(h, p), m = t(h, p), x = n(h, p), v = o(h, p), I = r(h, p);
      return l(g, m, x, v, I);
    };
    else if (e && t && n && o && r) a = (i, d) => {
      const u = dn(i), p = d ?? (u ? i.current.instanceId : pn), h = u ? i.current.state : i, g = e(h, p), m = t(h, p), x = n(h, p), v = o(h, p);
      return r(g, m, x, v);
    };
    else if (e && t && n && o) a = (i, d) => {
      const u = dn(i), p = d ?? (u ? i.current.instanceId : pn), h = u ? i.current.state : i, g = e(h, p), m = t(h, p), x = n(h, p);
      return o(g, m, x);
    };
    else if (e && t && n) a = (i, d) => {
      const u = dn(i), p = d ?? (u ? i.current.instanceId : pn), h = u ? i.current.state : i, g = e(h, p), m = t(h, p);
      return n(g, m);
    };
    else if (e && t) a = (i, d) => {
      const u = dn(i), p = d ?? (u ? i.current.instanceId : pn), h = u ? i.current.state : i, g = e(h, p);
      return t(g);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, Cr = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d, u) => {
      const p = dn(i), h = u ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), x = t(g, d, h), v = n(g, d, h), I = o(g, d, h), C = r(g, d, h);
      return l(m, x, v, I, C, d);
    };
    else if (e && t && n && o && r) a = (i, d, u) => {
      const p = dn(i), h = u ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), x = t(g, d, h), v = n(g, d, h), I = o(g, d, h);
      return r(m, x, v, I, d);
    };
    else if (e && t && n && o) a = (i, d, u) => {
      const p = dn(i), h = u ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), x = t(g, d, h), v = n(g, d, h);
      return o(m, x, v, d);
    };
    else if (e && t && n) a = (i, d, u) => {
      const p = dn(i), h = u ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), x = t(g, d, h);
      return n(m, x, d);
    };
    else if (e && t) a = (i, d, u) => {
      const p = dn(i), h = u ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h);
      return t(m, d);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, Ue = (...e) => {
    const t = (n, o) => {
      const r = dn(n), l = r ? n.current.instanceId : o ?? pn, s = r ? n.current.state : n, a = Wi.get(l), i = a ?? /* @__PURE__ */ new Map(), d = i == null ? void 0 : i.get(e);
      if (i && d) return d(s, l);
      const u = Mm(...e);
      return a || Wi.set(l, i), i.set(e, u), u(s, l);
    };
    return t.acceptsApiRef = true, t;
  }, mt = (e) => e.dimensions, fl = be(mt, (e) => e.columnsTotalWidth), js = (e) => e.dimensions.rowHeight, km = (e) => e.dimensions.contentSize.height, Em = (e) => e.dimensions.hasScrollX, Fm = (e) => e.dimensions.hasScrollY, $c = (e) => e.dimensions.columnsTotalWidth < e.dimensions.viewportOuterSize.width, Tm = (e) => e.dimensions.headerHeight, Om = (e) => e.dimensions.groupHeaderHeight, Lc = (e) => e.dimensions.hasScrollY ? e.dimensions.scrollbarSize : 0, Dm = (e) => {
    const t = e.dimensions.hasScrollX ? e.dimensions.scrollbarSize : 0, n = e.dimensions.viewportOuterSize.height - e.dimensions.minimumSize.height > 0;
    return !(t === 0 && !n);
  };
  function Tn(e) {
    return c.memo(e, Ec);
  }
  const Rm = {
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
  function He(e) {
    return bt("MuiDataGrid", e);
  }
  const P = ft("MuiDataGrid", [
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
  ]), Ui = 1e3;
  class Hm {
    constructor(t = Ui) {
      this.timeouts = /* @__PURE__ */ new Map(), this.cleanupTimeout = Ui, this.cleanupTimeout = t;
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
  class $m {
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
  var nn = (function(e) {
    return e.DataGrid = "DataGrid", e.DataGridPro = "DataGridPro", e.DataGridPremium = "DataGridPremium", e;
  })(nn || {});
  class Lm {
  }
  function jm(e) {
    let t = 0;
    return function(o, r, l, s) {
      e.registry === null && (e.registry = typeof FinalizationRegistry < "u" ? new $m() : new Hm());
      const [a] = c.useState(new Lm()), i = c.useRef(null), d = c.useRef(null);
      d.current = l;
      const u = c.useRef(null);
      if (!i.current && d.current) {
        const p = (h, g, m) => {
          var _a2;
          g && !g.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, h, g, m));
        };
        i.current = o.current.subscribeEvent(r, p, s), t += 1, u.current = {
          cleanupToken: t
        }, e.registry.register(a, () => {
          var _a2;
          (_a2 = i.current) == null ? void 0 : _a2.call(i), i.current = null, u.current = null;
        }, u.current);
      } else !d.current && i.current && (i.current(), i.current = null, u.current && (e.registry.unregister(u.current), u.current = null));
      c.useEffect(() => {
        if (!i.current && d.current) {
          const p = (h, g, m) => {
            var _a2;
            g && !g.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, h, g, m));
          };
          i.current = o.current.subscribeEvent(r, p, s);
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
  const Am = {
    registry: null
  }, oe = jm(Am), zm = {
    isFirst: true
  };
  function Qe(e, t, n) {
    oe(e, t, n, zm);
  }
  const Gm = 0.7, _m = 1.3, Vm = {
    compact: Gm,
    comfortable: _m,
    standard: 1
  }, ho = (e) => e.density, Do = be(ho, (e) => Vm[e]), Nm = [
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
  ], Bm = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "editInputCell"
      ]
    }, He, t);
  }, Wm = se(Is, {
    name: "MuiDataGrid",
    slot: "EditInputCell",
    overridesResolver: (e, t) => t.editInputCell
  })(({ theme: e }) => b({}, e.typography.body2, {
    padding: "1px 0",
    "& input": {
      padding: "0 16px",
      height: "100%"
    }
  })), Um = Ve((e, t) => {
    const n = ie(), { id: o, value: r, field: l, colDef: s, hasFocus: a, debounceMs: i = 200, isProcessingProps: d, onValueChange: u } = e, p = ge(e, Nm), h = Ee(), g = c.useRef(null), [m, x] = c.useState(r), v = Bm(n), I = c.useCallback(async (E) => {
      const $ = E.target.value;
      u && await u(E, $);
      const k = h.current.getColumn(l);
      let H = $;
      k.valueParser && (H = k.valueParser($, h.current.getRow(o), k, h)), x(H), h.current.setEditCellValue({
        id: o,
        field: l,
        value: H,
        debounceMs: i,
        unstable_skipValueParser: true
      }, E);
    }, [
      h,
      i,
      l,
      o,
      u
    ]), C = h.current.unstable_getEditCellMeta(o, l);
    return c.useEffect(() => {
      (C == null ? void 0 : C.changeReason) !== "debouncedSetEditCellValue" && x(r);
    }, [
      C,
      r
    ]), St(() => {
      a && g.current.focus();
    }, [
      a
    ]), f.jsx(Wm, b({
      inputRef: g,
      className: v.root,
      ownerState: n,
      fullWidth: true,
      type: s.type === "number" ? s.type : "text",
      value: m ?? "",
      onChange: I,
      endAdornment: d ? f.jsx(n.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : void 0
    }, p, {
      ref: t
    }));
  }), Km = (e) => f.jsx(Um, b({}, e)), sn = (e) => e.rows, wr = be(sn, (e) => e.totalRowCount), qm = be(sn, (e) => e.loading), Ym = be(sn, (e) => e.totalTopLevelRowCount), Jt = be(sn, (e) => e.dataRowIdToModelLookup), Ki = be(sn, (e) => e.dataRowIdToIdLookup), pt = be(sn, (e) => e.tree), Xm = be(sn, (e) => e.groupsToFetch), Qm = be(sn, (e) => e.groupingName), qi = be(sn, (e) => e.treeDepths), no = Ue(sn, (e) => {
    const t = Object.entries(e.treeDepths);
    return t.length === 0 ? 1 : (t.filter(([, n]) => n > 0).map(([n]) => Number(n)).sort((n, o) => o - n)[0] ?? 0) + 1;
  }), Qo = be(sn, (e) => e.dataRowIds), Jm = be(sn, (e) => e == null ? void 0 : e.additionalRowGroups), Ro = Ue(Jm, (e) => {
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
  }), jc = be(Ro, (e) => {
    var _a2, _b2;
    return (((_a2 = e == null ? void 0 : e.top) == null ? void 0 : _a2.length) || 0) + (((_b2 = e == null ? void 0 : e.bottom) == null ? void 0 : _b2.length) || 0);
  }), Ac = (e, t) => t && e.length > 1 ? [
    e[0]
  ] : e, Yi = (e, t) => (n) => b({}, n, {
    sorting: b({}, n.sorting, {
      sortModel: Ac(e, t)
    })
  }), Zm = (e) => e === "desc", eb = (e, t) => {
    const n = t.current.getColumn(e.field);
    if (!n || e.sort === null) return null;
    let o;
    return n.getSortComparator ? o = n.getSortComparator(e.sort) : o = Zm(e.sort) ? (...l) => -1 * n.sortComparator(...l) : n.sortComparator, o ? {
      getSortCellParams: (l) => ({
        id: l,
        field: n.field,
        rowNode: pt(t)[l],
        value: t.current.getCellValue(l, n.field),
        api: t.current
      }),
      comparator: o
    } : null;
  }, tb = (e, t, n) => e.reduce((o, r, l) => {
    if (o !== 0) return o;
    const s = t.params[l], a = n.params[l];
    return o = r.comparator(s.value, a.value, s, a), o;
  }, 0), nb = (e, t) => {
    const n = e.map((o) => eb(o, t)).filter((o) => !!o);
    return n.length === 0 ? null : (o) => o.map((r) => ({
      node: r,
      params: n.map((l) => l.getSortCellParams(r.id))
    })).sort((r, l) => tb(n, r, l)).map((r) => r.node.id);
  }, Xi = (e, t) => {
    const n = e.indexOf(t);
    return !t || n === -1 || n + 1 === e.length ? e[0] : e[n + 1];
  }, As = (e, t) => e == null && t != null ? -1 : t == null && e != null ? 1 : e == null && t == null ? 0 : null, ob = new Intl.Collator(), rb = (e, t) => {
    const n = As(e, t);
    return n !== null ? n : typeof e == "string" ? ob.compare(e.toString(), t.toString()) : e - t;
  }, zc = (e, t) => {
    const n = As(e, t);
    return n !== null ? n : Number(e) - Number(t);
  }, Gc = (e, t) => {
    const n = As(e, t);
    return n !== null ? n : e > t ? 1 : e < t ? -1 : 0;
  }, lb = [
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
  function Xt(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, tabIndex: s, disabled: a, clearButton: i, InputProps: d, variant: u = "standard" } = e, p = ge(e, lb), h = Qt(), [g, m] = c.useState(jl(t.value)), [x, v] = c.useState(false), I = nt(), C = ie(), E = c.useCallback(($) => {
      const k = jl($.target.value);
      m(k), v(true), h.start(C.filterDebounceMs, () => {
        const H = b({}, t, {
          value: o === "number" && !Number.isNaN(Number(k)) ? Number(k) : k,
          fromInput: I
        });
        n(H), v(false);
      });
    }, [
      h,
      C.filterDebounceMs,
      t,
      o,
      I,
      n
    ]);
    return c.useEffect(() => {
      (t.fromInput !== I || t.value == null) && m(jl(t.value));
    }, [
      I,
      t
    ]), f.jsx(C.slots.baseTextField, b({
      id: I,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: g ?? "",
      onChange: E,
      variant: u,
      type: o || "text",
      InputProps: b({}, x || i ? {
        endAdornment: x ? f.jsx(C.slots.loadIcon, {
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
    }, p, (_a2 = C.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function jl(e) {
    if (!(e == null || e === "")) return String(e);
  }
  function sb(e) {
    return typeof e == "number" && !Number.isNaN(e);
  }
  function ib(e) {
    return typeof e == "function";
  }
  function zs(e) {
    return typeof e == "object" && e !== null;
  }
  function ab() {
    try {
      const e = "__some_random_key_you_are_not_going_to_use__";
      return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), true;
    } catch {
      return false;
    }
  }
  function el(e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  const Nt = (e, t, n) => Math.max(t, Math.min(n, e));
  function Qi(e, t) {
    return Array.from({
      length: t - e
    }).map((n, o) => e + o);
  }
  function Gn(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      if (Array.isArray(e)) {
        const r = e.length;
        if (r !== t.length) return false;
        for (let l = 0; l < r; l += 1) if (!Gn(e[l], t[l])) return false;
        return true;
      }
      if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return false;
        const r = Array.from(e.entries());
        for (let l = 0; l < r.length; l += 1) if (!t.has(r[l][0])) return false;
        for (let l = 0; l < r.length; l += 1) {
          const s = r[l];
          if (!Gn(s[1], t.get(s[0]))) return false;
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
        if (!Gn(e[l], t[l])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function cb(e) {
    return () => {
      let t = e += 1831565813;
      return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function ub(e) {
    const t = cb(e);
    return (n, o) => n + (o - n) * t();
  }
  function _c(e) {
    return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
  }
  const qn = (e, t) => (n) => {
    e && t(n);
  }, db = [
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
  ], pb = [
    "key"
  ];
  function Vc(e) {
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, color: s, error: a, helperText: i, size: d, variant: u = "standard" } = e, p = ge(e, db), h = {
      color: s,
      error: a,
      helperText: i,
      size: d,
      variant: u
    }, [g, m] = c.useState(t.value || []), x = nt(), v = ie();
    c.useEffect(() => {
      const C = t.value ?? [];
      m(C.map(String));
    }, [
      t.value
    ]);
    const I = c.useCallback((C, E) => {
      m(E.map(String)), n(b({}, t, {
        value: [
          ...E.map(($) => o === "number" ? Number($) : $)
        ]
      }));
    }, [
      n,
      t,
      o
    ]);
    return f.jsx(gc, b({
      multiple: true,
      freeSolo: true,
      options: [],
      filterOptions: (C, E) => {
        const { inputValue: $ } = E;
        return $ == null || $ === "" ? [] : [
          $
        ];
      },
      id: x,
      value: g,
      onChange: I,
      renderTags: (C, E) => C.map(($, k) => {
        const H = E({
          index: k
        }), { key: A } = H, R = ge(H, pb);
        return f.jsx(v.slots.baseChip, b({
          variant: "outlined",
          size: "small",
          label: $
        }, R), A);
      }),
      renderInput: (C) => {
        var _a2;
        return f.jsx(v.slots.baseTextField, b({}, C, {
          label: r.current.getLocaleText("filterPanelInputLabel"),
          placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: b({}, C.InputLabelProps, {
            shrink: true
          }),
          inputRef: l,
          type: o || "text"
        }, h, (_a2 = v.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, p));
  }
  var yn = (function(e) {
    return e.Cell = "cell", e.Row = "row", e;
  })(yn || {}), Xe = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(Xe || {}), et = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(et || {}), Tt = (function(e) {
    return e.And = "and", e.Or = "or", e;
  })(Tt || {}), kn = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e.pasteKeyDown = "pasteKeyDown", e;
  })(kn || {}), cn = (function(e) {
    return e.cellFocusOut = "cellFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(cn || {}), $n = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e;
  })($n || {}), bn = (function(e) {
    return e.rowFocusOut = "rowFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(bn || {});
  function Nc(e) {
    return e.field !== void 0;
  }
  const Bc = {
    filteredRowsLookup: {},
    filteredChildrenCountLookup: {},
    filteredDescendantCountLookup: {}
  }, cr = () => ({
    items: [],
    logicOperator: Tt.And,
    quickFilterValues: [],
    quickFilterLogicOperator: Tt.And
  });
  function Wc(e) {
    return {
      current: e.current.getPublicApi()
    };
  }
  let jn = (function(e) {
    return e.LEFT = "left", e.RIGHT = "right", e;
  })({});
  const tl = {
    left: [],
    right: []
  }, Uc = (e) => e.isRtl, xn = (e) => e.columns, En = be(xn, (e) => e.orderedFields), On = be(xn, (e) => e.lookup), on = Ue(En, On, (e, t) => e.map((n) => t[n])), Zt = be(xn, (e) => e.columnVisibilityModel), st = Ue(on, Zt, (e, t) => e.filter((n) => t[n.field] !== false)), Ho = Ue(st, (e) => e.map((t) => t.field)), Kc = (e) => e.pinnedColumns;
  Ue(Kc, En, Uc, (e, t, n) => qc(e, t, n));
  const $o = Ue(xn, Kc, Ho, Uc, (e, t, n, o) => {
    const r = qc(t, n, o);
    return {
      left: r.left.map((s) => e.lookup[s]),
      right: r.right.map((s) => e.lookup[s])
    };
  });
  function qc(e, t, n) {
    var _a2, _b2;
    if (!Array.isArray(e.left) && !Array.isArray(e.right) || ((_a2 = e.left) == null ? void 0 : _a2.length) === 0 && ((_b2 = e.right) == null ? void 0 : _b2.length) === 0) return tl;
    const o = (a, i) => Array.isArray(a) ? a.filter((d) => i.includes(d)) : [], r = o(e.left, t), l = t.filter((a) => !r.includes(a)), s = o(e.right, l);
    return n ? {
      left: s,
      right: r
    } : {
      left: r,
      right: s
    };
  }
  const Wn = Ue(st, (e) => {
    const t = [];
    let n = 0;
    for (let o = 0; o < e.length; o += 1) t.push(n), n += e[o].computedWidth;
    return t;
  }), Yc = Ue(on, (e) => e.filter((t) => t.filterable)), fb = Ue(on, (e) => e.reduce((t, n) => (n.filterable && (t[n.field] = n), t), {})), gb = Ue(on, (e) => e.some((t) => t.colSpan !== void 0));
  let Ko;
  function hb() {
    if (Ko !== void 0) return Ko;
    try {
      Ko = new Function("return true")();
    } catch {
      Ko = false;
    }
    return Ko;
  }
  const cs = (e, t) => {
    const n = b({}, e);
    if (n.id == null && (n.id = Math.round(Math.random() * 1e5)), n.operator == null) {
      const o = On(t)[n.field];
      n.operator = o && o.filterOperators[0].value;
    }
    return n;
  }, Gs = (e, t, n) => {
    const o = e.items.length > 1;
    let r;
    o && t ? r = [
      e.items[0]
    ] : r = e.items;
    const l = o && r.some((a) => a.id == null);
    return r.some((a) => a.operator == null) || l ? b({}, e, {
      items: r.map((a) => cs(a, n))
    }) : e.items !== r ? b({}, e, {
      items: r
    }) : e;
  }, Ji = (e, t, n) => (o) => b({}, o, {
    filterModel: Gs(e, t, n)
  }), ur = (e) => typeof e == "string" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e, Xc = (e, t) => {
    var _a2;
    if (!e.field || !e.operator) return null;
    const n = t.current.getColumn(e.field);
    if (!n) return null;
    let o;
    if (n.valueParser) {
      const u = n.valueParser;
      o = Array.isArray(e.value) ? (_a2 = e.value) == null ? void 0 : _a2.map((p) => u(p, void 0, n, t)) : u(e.value, void 0, n, t);
    } else o = e.value;
    const { ignoreDiacritics: r } = t.current.rootProps;
    r && (o = ur(o));
    const l = b({}, e, {
      value: o
    }), s = n.filterOperators;
    if (!(s == null ? void 0 : s.length)) throw new Error(`MUI X: No filter operators found for column '${n.field}'.`);
    const a = s.find((u) => u.value === l.operator);
    if (!a) throw new Error(`MUI X: No filter operator found for column '${n.field}' and operator value '${l.operator}'.`);
    const i = Wc(t), d = a.getApplyFilterFn(l, n);
    return typeof d != "function" ? null : {
      item: l,
      fn: (u) => {
        let p = t.current.getRowValue(u, n);
        return r && (p = ur(p)), d(p, u, n, i);
      }
    };
  };
  let Zi = 1;
  const mb = (e, t, n) => {
    const { items: o } = e, r = o.map((a) => Xc(a, t)).filter((a) => !!a);
    if (r.length === 0) return null;
    if (n || !hb()) return (a, i) => {
      const d = {};
      for (let u = 0; u < r.length; u += 1) {
        const p = r[u];
        (!i || i(p.item.field)) && (d[p.item.id] = p.fn(a));
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

return result$$;`.replaceAll("$$", String(Zi)));
    return Zi += 1, (a, i) => l(r, a, i);
  }, Qc = (e) => e.quickFilterExcludeHiddenColumns ?? true, bb = (e, t) => {
    var _a2;
    const n = ((_a2 = e.quickFilterValues) == null ? void 0 : _a2.filter(Boolean)) ?? [];
    if (n.length === 0) return null;
    const o = Qc(e) ? Ho(t) : En(t), r = [], { ignoreDiacritics: l } = t.current.rootProps, s = Wc(t);
    return o.forEach((a) => {
      const i = t.current.getColumn(a), d = i == null ? void 0 : i.getApplyQuickFilterFn;
      d && r.push({
        column: i,
        appliers: n.map((u) => {
          const p = l ? ur(u) : u;
          return {
            fn: d(p, i, s)
          };
        })
      });
    }), function(i, d) {
      const u = {};
      e: for (let p = 0; p < n.length; p += 1) {
        const h = n[p];
        for (let g = 0; g < r.length; g += 1) {
          const { column: m, appliers: x } = r[g], { field: v } = m;
          if (d && !d(v)) continue;
          const I = x[p];
          let C = t.current.getRowValue(i, m);
          if (I.fn === null) continue;
          if (l && (C = ur(C)), I.fn(C, i, m, s)) {
            u[h] = true;
            continue e;
          }
        }
        u[h] = false;
      }
      return u;
    };
  }, Cb = (e, t, n) => {
    const o = mb(e, t, n), r = bb(e, t);
    return function(s, a, i) {
      i.passingFilterItems = (o == null ? void 0 : o(s, a)) ?? null, i.passingQuickFilterValues = (r == null ? void 0 : r(s, a)) ?? null;
    };
  }, ea = (e) => e != null, wb = (e, t, n) => (e.cleanedFilterItems || (e.cleanedFilterItems = n.filter((o) => Xc(o, t) !== null)), e.cleanedFilterItems), xb = (e, t, n, o, r) => {
    const l = wb(r, o, n.items), s = e.filter(ea), a = t.filter(ea);
    if (s.length > 0) {
      const i = (u) => s.some((p) => p[u.id]);
      if ((n.logicOperator ?? cr().logicOperator) === Tt.And) {
        if (!l.every(i)) return false;
      } else if (!l.some(i)) return false;
    }
    if (a.length > 0 && n.quickFilterValues != null) {
      const i = (u) => a.some((p) => p[u]);
      if ((n.quickFilterLogicOperator ?? cr().quickFilterLogicOperator) === Tt.And) {
        if (!n.quickFilterValues.every(i)) return false;
      } else if (!n.quickFilterValues.some(i)) return false;
    }
    return true;
  }, vb = (e) => {
    if (!e) return null;
    const t = new RegExp(el(e), "i");
    return (n, o, r, l) => {
      let s = l.current.getRowFormattedValue(o, r);
      return l.current.ignoreDiacritics && (s = ur(s)), s != null ? t.test(s.toString()) : false;
    };
  }, ta = (e, t) => (n) => {
    if (!n.value) return null;
    const o = e ? n.value : n.value.trim(), r = new RegExp(el(o), "i");
    return (l) => {
      if (l == null) return t;
      const s = r.test(String(l));
      return t ? !s : s;
    };
  }, na = (e, t) => (n) => {
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
  }, oa = (e) => () => (t) => {
    const n = t === "" || t == null;
    return e ? !n : n;
  }, yb = (e = false) => [
    {
      value: "contains",
      getApplyFilterFn: ta(e, false),
      InputComponent: Xt
    },
    {
      value: "doesNotContain",
      getApplyFilterFn: ta(e, true),
      InputComponent: Xt
    },
    {
      value: "equals",
      getApplyFilterFn: na(e, false),
      InputComponent: Xt
    },
    {
      value: "doesNotEqual",
      getApplyFilterFn: na(e, true),
      InputComponent: Xt
    },
    {
      value: "startsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`^${el(n)}.*$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Xt
    },
    {
      value: "endsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`.*${el(n)}$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Xt
    },
    {
      value: "isEmpty",
      getApplyFilterFn: oa(false),
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: oa(true),
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
      InputComponent: Vc
    }
  ], fn = {
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
    sortComparator: rb,
    type: "string",
    align: "left",
    filterOperators: yb(),
    renderEditCell: Km,
    getApplyQuickFilterFn: vb
  }, Sb = [
    "open",
    "target",
    "onClose",
    "children",
    "position",
    "className",
    "onExited"
  ], Ib = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "menu"
      ]
    }, He, t);
  }, Pb = se(to, {
    name: "MuiDataGrid",
    slot: "Menu",
    overridesResolver: (e, t) => t.menu
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal,
    [`& .${P.menuList}`]: {
      outline: 0
    }
  })), Mb = {
    "bottom-start": "top left",
    "bottom-end": "top right"
  };
  function _s(e) {
    var _a2;
    const { open: t, target: n, onClose: o, children: r, position: l, className: s, onExited: a } = e, i = ge(e, Sb), d = Ee(), u = ie(), p = Ib(u), h = c.useRef(null);
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
    const g = (x) => (v) => {
      x && x(), a && a(v);
    }, m = (x) => {
      x.target && (n === x.target || (n == null ? void 0 : n.contains(x.target))) || o(x);
    };
    return f.jsx(Pb, b({
      as: u.slots.basePopper,
      className: de(p.root, s),
      ownerState: u,
      open: t,
      anchorEl: n,
      transition: true,
      placement: l
    }, i, (_a2 = u.slotProps) == null ? void 0 : _a2.basePopper, {
      children: ({ TransitionProps: x, placement: v }) => f.jsx(hc, {
        onClickAway: m,
        mouseEvent: "onMouseDown",
        children: f.jsx(Qa, b({}, x, {
          style: {
            transformOrigin: Mb[v]
          },
          onExited: g(x == null ? void 0 : x.onExited),
          children: f.jsx(Yt, {
            children: r
          })
        }))
      })
    }));
  }
  const kb = [
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
  ], Eb = (e) => typeof e.getActions == "function";
  function Fb(e) {
    var _a2;
    const { colDef: t, id: n, hasFocus: o, tabIndex: r, position: l = "bottom-end", focusElementRef: s } = e, a = ge(e, kb), [i, d] = c.useState(-1), [u, p] = c.useState(false), h = Ee(), g = c.useRef(null), m = c.useRef(null), x = c.useRef(false), v = c.useRef({}), I = At(), C = nt(), E = nt(), $ = ie();
    if (!Eb(t)) throw new Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
    const k = t.getActions(h.current.getRowParams(n)), H = k.filter((S) => !S.props.showInMenu), A = k.filter((S) => S.props.showInMenu), R = H.length + (A.length ? 1 : 0);
    c.useLayoutEffect(() => {
      o || Object.entries(v.current).forEach(([S, T]) => {
        T == null ? void 0 : T.stop({}, () => {
          delete v.current[S];
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
          const S = k.findIndex((T) => !T.props.disabled);
          d(S);
        }
      }
    }), [
      k
    ]), c.useEffect(() => {
      i >= R && d(R - 1);
    }, [
      i,
      R
    ]);
    const y = () => {
      p(true), d(R - 1), x.current = true;
    }, w = () => {
      p(false);
    }, M = (S) => {
      S.stopPropagation(), S.preventDefault(), u ? w() : y();
    }, O = (S) => (T) => {
      v.current[S] = T;
    }, D = (S, T) => (L) => {
      d(S), x.current = true, T && T(L);
    }, _ = (S) => {
      if (R <= 1) return;
      const T = (z, G) => {
        var _a3;
        if (z < 0 || z > k.length) return z;
        const V = (G === "left" ? -1 : 1) * (I ? -1 : 1);
        return ((_a3 = k[z + V]) == null ? void 0 : _a3.props.disabled) ? T(z + V, G) : z + V;
      };
      let L = i;
      S.key === "ArrowRight" ? L = T(i, "right") : S.key === "ArrowLeft" && (L = T(i, "left")), !(L < 0 || L >= R) && L !== i && (S.preventDefault(), S.stopPropagation(), d(L));
    }, F = (S) => {
      S.key === "Tab" && S.preventDefault(), [
        "Tab",
        "Escape"
      ].includes(S.key) && w();
    };
    return f.jsxs("div", b({
      role: "menu",
      ref: g,
      tabIndex: -1,
      className: P.actionsCell,
      onKeyDown: _
    }, a, {
      children: [
        H.map((S, T) => c.cloneElement(S, {
          key: T,
          touchRippleRef: O(T),
          onClick: D(T, S.props.onClick),
          tabIndex: i === T ? r : -1
        })),
        A.length > 0 && E && f.jsx($.slots.baseIconButton, b({
          ref: m,
          id: E,
          "aria-label": h.current.getLocaleText("actionsCellMore"),
          "aria-haspopup": "menu",
          "aria-expanded": u,
          "aria-controls": u ? C : void 0,
          role: "menuitem",
          size: "small",
          onClick: M,
          touchRippleRef: O(E),
          tabIndex: i === H.length ? r : -1
        }, (_a2 = $.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: f.jsx($.slots.moreActionsIcon, {
            fontSize: "small"
          })
        })),
        A.length > 0 && f.jsx(_s, {
          open: u,
          target: m.current,
          position: l,
          onClose: w,
          children: f.jsx(Ps, {
            id: C,
            className: P.menuList,
            onKeyDown: F,
            "aria-labelledby": E,
            variant: "menu",
            autoFocusItem: true,
            children: A.map((S, T) => c.cloneElement(S, {
              key: T,
              closeMenu: w
            }))
          })
        })
      ]
    }));
  }
  const Tb = (e) => f.jsx(Fb, b({}, e)), gl = "actions", Ob = b({}, fn, {
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
    renderCell: Tb,
    getApplyQuickFilterFn: void 0
  }), Pt = "auto-generated-group-node-root", Eo = /* @__PURE__ */ Symbol("mui.id_autogenerated"), Db = () => ({
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
  function Rb(e, t, n = "A row was provided without id in the rows prop:") {
    if (e == null) throw new Error([
      "MUI X: The Data Grid component requires all rows to have a unique `id` property.",
      "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.",
      n,
      JSON.stringify(t)
    ].join(`
`));
  }
  const hl = (e, t, n) => {
    const o = t ? t(e) : e.id;
    return Rb(o, e, n), o;
  }, Br = ({ rows: e, getRowId: t, loading: n, rowCount: o }) => {
    const r = {
      type: "full",
      rows: []
    }, l = {}, s = {};
    for (let a = 0; a < e.length; a += 1) {
      const i = e[a], d = hl(i, t);
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
  }, Jc = ({ tree: e, rowCountProp: t = 0 }) => {
    const n = e[Pt];
    return Math.max(t, n.children.length + (n.footerId == null ? 0 : 1));
  }, Zc = ({ apiRef: e, rowCountProp: t = 0, loadingProp: n, previousTree: o, previousTreeDepths: r, previousGroupsToFetch: l }) => {
    const s = e.current.caches.rows, { tree: a, treeDepths: i, dataRowIds: d, groupingName: u, groupsToFetch: p = [] } = e.current.applyStrategyProcessor("rowTreeCreation", {
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
      totalTopLevelRowCount: Jc({
        tree: h.tree,
        rowCountProp: t
      }),
      groupingName: u,
      loading: n,
      groupsToFetch: p
    });
  }, Fo = (e) => e.type === "skeletonRow" || e.type === "footer" || e.type === "group" && e.isAutoGenerated || e.type === "pinnedRow" && e.isAutoGenerated, Vs = (e, t, n) => {
    const o = e[t];
    if (o.type !== "group") return [];
    const r = [];
    for (let l = 0; l < o.children.length; l += 1) {
      const s = o.children[l];
      (!n || !Fo(e[s])) && r.push(s);
      const a = Vs(e, s, n);
      for (let i = 0; i < a.length; i += 1) r.push(a[i]);
    }
    return !n && o.footerId != null && r.push(o.footerId), r;
  }, ra = ({ previousCache: e, getRowId: t, updates: n, groupKeys: o }) => {
    if (e.updates.type === "full") throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
    const r = /* @__PURE__ */ new Map();
    n.forEach((u) => {
      const p = hl(u, t, "A row was provided without id when calling updateRows():");
      r.has(p) ? r.set(p, b({}, r.get(p), u)) : r.set(p, u);
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
    r.forEach((u, p) => {
      const h = l.idToActionLookup[p];
      if (u._action === "delete") {
        if (h === "remove" || !s[p]) return;
        h != null && (i[h][p] = true), l.actions.remove.push(p), delete s[p], delete a[p];
        return;
      }
      const g = s[p];
      if (g) {
        h === "remove" ? (i.remove[p] = true, l.actions.modify.push(p)) : h == null && l.actions.modify.push(p), s[p] = b({}, g, u);
        return;
      }
      h === "remove" ? (i.remove[p] = true, l.actions.insert.push(p)) : h == null && l.actions.insert.push(p), s[p] = u, a[p] = p;
    });
    const d = Object.keys(i);
    for (let u = 0; u < d.length; u += 1) {
      const p = d[u], h = i[p];
      Object.keys(h).length > 0 && (l.actions[p] = l.actions[p].filter((g) => !h[g]));
    }
    return {
      dataRowIdToModelLookup: s,
      dataRowIdToIdLookup: a,
      updates: l,
      rowsBeforePartialUpdates: e.rowsBeforePartialUpdates,
      loadingPropBeforePartialUpdates: e.loadingPropBeforePartialUpdates,
      rowCountPropBeforePartialUpdates: e.rowCountPropBeforePartialUpdates
    };
  }, eu = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
  function la(e, t, n) {
    const o = [];
    return t.forEach((r) => {
      var _a2;
      const l = hl(r, n, "A row was provided without id when calling updateRows():");
      if (((_a2 = e.current.getRowNode(l)) == null ? void 0 : _a2.type) === "pinnedRow") {
        const a = e.current.caches.pinnedRows, i = a.idLookup[l];
        i && (a.idLookup[l] = b({}, i, r));
      } else o.push(r);
    }), o;
  }
  const tu = (e, t, n) => typeof e == "number" && e > 0 ? e : t, Hb = "__tree_data_group__", nu = "__row_group_by_columns_group__", ml = "__detail_panel_toggle__";
  let Oe = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.VIRTUAL = 3] = "VIRTUAL", e;
  })({});
  const $b = [
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
  ], Lb = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "booleanCell"
      ]
    }, He, t);
  };
  function jb(e) {
    const { value: t, rowNode: n } = e, o = ge(e, $b), r = Ee(), l = ie(), s = {
      classes: l.classes
    }, a = Lb(s), d = Q(r, no) > 0 && n.type === "group" && l.treeData === false, u = c.useMemo(() => t ? l.slots.booleanCellTrueIcon : l.slots.booleanCellFalseIcon, [
      l.slots.booleanCellFalseIcon,
      l.slots.booleanCellTrueIcon,
      t
    ]);
    return d && t === void 0 ? null : f.jsx(u, b({
      fontSize: "small",
      className: a.root,
      titleAccess: r.current.getLocaleText(t ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
      "data-value": !!t
    }, o));
  }
  const Ab = c.memo(jb), zb = (e) => e.field !== nu && Fo(e.rowNode) ? "" : f.jsx(Ab, b({}, e)), Gb = [
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
  ], _b = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "editBooleanCell"
      ]
    }, He, t);
  };
  function Vb(e) {
    var _a2;
    const { id: t, value: n, field: o, className: r, hasFocus: l, onValueChange: s } = e, a = ge(e, Gb), i = Ee(), d = c.useRef(null), u = nt(), [p, h] = c.useState(n), g = ie(), m = {
      classes: g.classes
    }, x = _b(m), v = c.useCallback(async (I) => {
      const C = I.target.checked;
      s && await s(I, C), h(C), await i.current.setEditCellValue({
        id: t,
        field: o,
        value: C
      }, I);
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
    ]), f.jsx("label", b({
      htmlFor: u,
      className: de(x.root, r)
    }, a, {
      children: f.jsx(g.slots.baseCheckbox, b({
        id: u,
        inputRef: d,
        checked: !!p,
        onChange: v,
        size: "small"
      }, (_a2 = g.slotProps) == null ? void 0 : _a2.baseCheckbox))
    }));
  }
  const Nb = (e) => f.jsx(Vb, b({}, e)), Bb = [
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
  ], Wr = (e) => {
    if (String(e).toLowerCase() === "true") return true;
    if (String(e).toLowerCase() === "false") return false;
  }, Wb = se("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function Ub(e) {
    var _a2, _b2, _c2;
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, clearButton: l, tabIndex: s, label: a, variant: i = "standard" } = e, d = ge(e, Bb), [u, p] = c.useState(Wr(t.value)), h = ie(), g = nt(), m = nt(), x = ((_a2 = h.slotProps) == null ? void 0 : _a2.baseSelect) || {}, v = x.native ?? false, I = ((_b2 = h.slotProps) == null ? void 0 : _b2.baseSelectOption) || {}, C = c.useCallback(($) => {
      const k = Wr($.target.value);
      p(k), n(b({}, t, {
        value: k
      }));
    }, [
      n,
      t
    ]);
    c.useEffect(() => {
      p(Wr(t.value));
    }, [
      t.value
    ]);
    const E = a ?? o.current.getLocaleText("filterPanelInputLabel");
    return f.jsxs(Wb, {
      children: [
        f.jsxs(h.slots.baseFormControl, {
          fullWidth: true,
          children: [
            f.jsx(h.slots.baseInputLabel, b({}, (_c2 = h.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: g,
              shrink: true,
              variant: i,
              children: E
            })),
            f.jsxs(h.slots.baseSelect, b({
              labelId: g,
              id: m,
              label: E,
              value: u === void 0 ? "" : String(u),
              onChange: C,
              variant: i,
              notched: i === "outlined" ? true : void 0,
              native: v,
              displayEmpty: true,
              inputProps: {
                ref: r,
                tabIndex: s
              }
            }, d, x, {
              children: [
                f.jsx(h.slots.baseSelectOption, b({}, I, {
                  native: v,
                  value: "",
                  children: o.current.getLocaleText("filterValueAny")
                })),
                f.jsx(h.slots.baseSelectOption, b({}, I, {
                  native: v,
                  value: "true",
                  children: o.current.getLocaleText("filterValueTrue")
                })),
                f.jsx(h.slots.baseSelectOption, b({}, I, {
                  native: v,
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
  const Kb = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => {
        const t = Wr(e.value);
        return t === void 0 ? null : (n) => !!n === t;
      },
      InputComponent: Ub
    }
  ], qb = (e, t, n, o) => e ? o.current.getLocaleText("booleanCellTrueLabel") : o.current.getLocaleText("booleanCellFalseLabel"), Yb = (e) => {
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
  }, ou = b({}, fn, {
    type: "boolean",
    display: "flex",
    align: "center",
    headerAlign: "center",
    renderCell: zb,
    renderEditCell: Nb,
    sortComparator: zc,
    valueFormatter: qb,
    filterOperators: Kb(),
    getApplyQuickFilterFn: void 0,
    aggregable: false,
    pastedValueParser: (e) => Yb(e)
  }), ru = (e) => e.sorting, Lo = be(ru, (e) => e.sortedRows), Ns = Ue(Lo, Jt, pt, (e, t, n) => e.reduce((o, r) => {
    const l = t[r];
    if (l) o.push({
      id: r,
      model: l
    });
    else {
      const s = n[r];
      s && Fo(s) && o.push({
        id: r,
        model: {
          [Eo]: r
        }
      });
    }
    return o;
  }, [])), un = be(ru, (e) => e.sortModel), Xb = Ue(un, (e) => e.reduce((n, o, r) => (n[o.field] = {
    sortDirection: o.sort,
    sortIndex: e.length > 1 ? r + 1 : void 0
  }, n), {}));
  Ue(Lo, (e) => e.reduce((t, n, o) => (t[n] = o, t), /* @__PURE__ */ Object.create(null)));
  const bl = (e) => e.filter, yt = be(bl, (e) => e.filterModel), Qb = be(yt, (e) => e.quickFilterValues), Jb = (e) => e.visibleRowsLookup, jo = be(bl, (e) => e.filteredRowsLookup);
  be(bl, (e) => e.filteredChildrenCountLookup);
  be(bl, (e) => e.filteredDescendantCountLookup);
  const Un = Ue(Jb, Ns, no, yt, Qb, (e, t, n, o, r) => n < 2 && !o.items.length && !(r == null ? void 0 : r.length) ? t : t.filter((l) => e[l.id] !== false)), yo = Ue(Un, (e) => e.map((t) => t.id)), lu = Ue(jo, Ns, (e, t) => t.filter((n) => e[n.id] !== false)), su = Ue(lu, (e) => e.map((t) => t.id));
  Ue(yo, pt, (e, t) => {
    const n = {};
    let o = 0;
    return e.reduce((r, l) => {
      const s = t[l];
      return n[s.depth] || (n[s.depth] = 0), s.depth > o && (n[s.depth] = 0), o = s.depth, n[s.depth] += 1, r[l] = n[s.depth], r;
    }, {});
  });
  const iu = Ue(Un, pt, no, (e, t, n) => n < 2 ? e : e.filter((o) => {
    var _a2;
    return ((_a2 = t[o.id]) == null ? void 0 : _a2.depth) === 0;
  })), Bs = be(Un, (e) => e.length), Ws = be(iu, (e) => e.length), Zb = be(lu, (e) => e.length);
  be(Zb, Ws, (e, t) => e - t);
  const au = Ue(yt, On, (e, t) => {
    var _a2;
    return (_a2 = e.items) == null ? void 0 : _a2.filter((n) => {
      var _a3, _b2;
      if (!n.field) return false;
      const o = t[n.field];
      if (!(o == null ? void 0 : o.filterOperators) || ((_a3 = o == null ? void 0 : o.filterOperators) == null ? void 0 : _a3.length) === 0) return false;
      const r = o.filterOperators.find((l) => l.value === n.operator);
      return r ? !r.InputComponent || n.value != null && ((_b2 = n.value) == null ? void 0 : _b2.toString()) !== "" : false;
    });
  }), eC = Ue(au, (e) => e.reduce((n, o) => (n[o.field] ? n[o.field].push(o) : n[o.field] = [
    o
  ], n), {})), _t = (e) => e.rowSelection, tC = be(_t, (e) => e.length), nC = Ue(_t, Jt, (e, t) => new Map(e.map((n) => [
    n,
    t[n]
  ]))), _n = Ue(_t, (e) => e.reduce((t, n) => (t[n] = n, t), {}));
  function cu(e, t) {
    var _a2;
    const n = pt(e), o = Lo(e), r = jo(e), l = n[t];
    if (!l || l.type !== "group") return [];
    const s = [], a = o.findIndex((i) => i === t) + 1;
    for (let i = a; i < o.length && ((_a2 = n[o[i]]) == null ? void 0 : _a2.depth) > l.depth; i += 1) {
      const d = o[i];
      r[d] !== false && e.current.isRowSelectable(d) && s.push(d);
    }
    return s;
  }
  function oC(e, t) {
    return be(pt, Lo, jo, _n, (n, o, r, l) => {
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
        const p = o[u];
        r[p] !== false && (a += 1, l[p] !== void 0 && (i += 1));
      }
      return {
        isIndeterminate: i > 0 && (i < a || l[e] === void 0),
        isChecked: t ? i > 0 : l[e] === e
      };
    });
  }
  function Us(e) {
    return e.signature === nn.DataGrid ? e.checkboxSelection && e.disableMultipleRowSelection !== true : !e.disableMultipleRowSelection;
  }
  const rC = (e, t) => {
    const n = [];
    let o = t;
    for (; o != null && o !== Pt; ) {
      const r = e[o];
      if (!r) return n;
      n.push(o), o = r.parent;
    }
    return n;
  }, lC = (e, t, n) => {
    const o = e[n];
    if (!o) return [];
    const r = o.parent;
    return r == null ? [] : e[r].children.filter((s) => s !== n && t[s] !== false);
  }, qo = (e, t, n, o, r, l, s = new Set(_t(e.current.state))) => {
    var _a2;
    const a = jo(e), i = /* @__PURE__ */ new Set([]);
    if (!(!o && !r || a[n] === false) && (o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && cu(e, n).forEach((p) => {
      l(p), i.add(p);
    }), r)) {
      const d = (p) => {
        if (!s.has(p) && !i.has(p)) return false;
        const h = t[p];
        return h ? h.type !== "group" ? true : h.children.every(d) : false;
      }, u = (p) => {
        var _a3;
        const h = lC(t, a, p);
        if (h.length === 0 || h.every(d)) {
          const m = (_a3 = t[p]) == null ? void 0 : _a3.parent;
          m != null && m !== Pt && e.current.isRowSelectable(m) && (l(m), i.add(m), u(m));
        }
      };
      u(n);
    }
  }, sa = (e, t, n, o, r, l) => {
    var _a2;
    const s = _n(e);
    !r && !o || (r && rC(t, n).forEach((i) => {
      s[i] === i && l(i);
    }), o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && cu(e, n).forEach((d) => {
      l(d);
    }));
  }, sC = [
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
  ], iC = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "checkboxInput"
      ]
    }, He, t);
  }, aC = Ve(function(t, n) {
    var _a2, _b2;
    const { field: o, id: r, rowNode: l, hasFocus: s, tabIndex: a } = t, i = ge(t, sC), d = Ee(), u = ie(), p = {
      classes: u.classes
    }, h = iC(p), g = c.useRef(null), m = c.useRef(null), x = jt(g, n), v = (R) => {
      const y = {
        value: R.target.checked,
        id: r
      };
      d.current.publishEvent("rowSelectionCheckboxChange", y, R);
    };
    c.useLayoutEffect(() => {
      if (a === 0) {
        const R = d.current.getCellElement(r, o);
        R && (R.tabIndex = -1);
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
    const I = c.useCallback((R) => {
      R.key === " " && R.stopPropagation();
    }, []), C = d.current.isRowSelectable(r), E = oC(r, ((_a2 = u.rowSelectionPropagation) == null ? void 0 : _a2.parents) ?? false), { isIndeterminate: $, isChecked: k } = Q(d, E, Ls);
    if (l.type === "footer" || l.type === "pinnedRow") return null;
    const H = u.indeterminateCheckboxAction === "select" ? k && !$ : k, A = d.current.getLocaleText(H ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
    return f.jsx(u.slots.baseCheckbox, b({
      tabIndex: a,
      checked: H,
      onChange: v,
      className: h.root,
      inputProps: {
        "aria-label": A,
        name: "select_row"
      },
      onKeyDown: I,
      indeterminate: $,
      disabled: !C,
      touchRippleRef: m
    }, (_b2 = u.slotProps) == null ? void 0 : _b2.baseCheckbox, i, {
      ref: x
    }));
  }), cC = aC, Cl = (e) => e.focus, Rt = be(Cl, (e) => e.cell), uC = be(Cl, (e) => e.columnHeader);
  be(Cl, (e) => e.columnHeaderFilter);
  const nl = be(Cl, (e) => e.columnGroupHeader), wl = (e) => e.tabIndex, Ks = be(wl, (e) => e.cell), uu = be(wl, (e) => e.columnHeader);
  be(wl, (e) => e.columnHeaderFilter);
  const dC = be(wl, (e) => e.columnGroupHeader);
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
  const du = (e, t, n, o, r) => {
    const l = wt(e, "useNativeEventListener");
    Qe(e, "rootMount", () => {
      const s = typeof t == "function" ? t() : t.current;
      if (!(!s || !n || !o)) return l.debug(`Binding native ${n} event`), s.addEventListener(n, o, r), () => {
        l.debug(`Clearing native ${n} event`), s.removeEventListener(n, o, r);
      };
    });
  }, xr = (e) => {
    const t = c.useRef(true);
    t.current && (t.current = false, e());
  }, pC = () => {
  }, fC = (e, t) => {
    const n = c.useRef(false);
    St(() => n.current || !e ? pC : (n.current = true, t()), [
      n.current || e
    ]);
  }, gC = 100, hC = (e) => e ? 0 : 100, pu = (e, t, n) => t > 0 && e > 0 ? Math.ceil(e / t) : e === -1 ? n + 2 : 0, fu = (e) => ({
    page: 0,
    pageSize: e ? 0 : 100
  }), mC = (e, t = 0) => t === 0 ? e : Math.max(Math.min(e, t - 1), 0), gu = (e, t) => {
    if (t === nn.DataGrid && e > gC) throw new Error([
      "MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.",
      "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
    ].join(`
`));
  }, bC = -1, vr = (e) => e.pagination, hu = be(vr, (e) => e.enabled && e.paginationMode === "client"), kt = be(vr, (e) => e.paginationModel), mo = be(vr, (e) => e.rowCount), Jo = be(vr, (e) => e.meta), CC = be(kt, (e) => e.page), mu = be(kt, (e) => e.pageSize), bu = be(kt, mo, (e, t) => pu(t, e.pageSize, e.page)), qs = Ue(hu, kt, pt, no, Un, iu, (e, t, n, o, r, l) => {
    var _a2;
    if (!e) return null;
    const s = l.length, a = Math.min(t.pageSize * t.page, s - 1), i = t.pageSize === bC ? s - 1 : Math.min(a + t.pageSize - 1, s - 1);
    if (a === -1 || i === -1) return null;
    if (o < 2) return {
      firstRowIndex: a,
      lastRowIndex: i
    };
    const d = l[a], u = i - a + 1, p = r.findIndex((m) => m.id === d.id);
    let h = p, g = 0;
    for (; h < r.length && g <= u; ) {
      const m = r[h], x = (_a2 = n[m.id]) == null ? void 0 : _a2.depth;
      x === void 0 ? h += 1 : ((g < u || x > 0) && (h += 1), x === 0 && (g += 1));
    }
    return {
      firstRowIndex: p,
      lastRowIndex: h - 1
    };
  }), wC = Ue(Un, qs, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), Cu = Ue(yo, qs, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), yr = Ue(hu, qs, wC, Un, (e, t, n, o) => e ? {
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
  }), xC = [
    "field",
    "colDef"
  ], vC = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "checkboxInput"
      ]
    }, He, t);
  }, yC = Ve(function(t, n) {
    var _a2;
    const o = ge(t, xC), [, r] = c.useState(false), l = Ee(), s = ie(), a = {
      classes: s.classes
    }, i = vC(a), d = Q(l, uu), u = Q(l, _t), p = Q(l, yo), h = Q(l, Cu), g = c.useMemo(() => typeof s.isRowSelectable != "function" ? u : u.filter((R) => s.keepNonExistentRowsSelected ? true : l.current.getRow(R) ? s.isRowSelectable(l.current.getRowParams(R)) : false), [
      l,
      s.isRowSelectable,
      u,
      s.keepNonExistentRowsSelected
    ]), m = c.useMemo(() => (!s.pagination || !s.checkboxSelectionVisibleOnly || s.paginationMode === "server" ? p : h).reduce((y, w) => (y[w] = true, y), {}), [
      s.pagination,
      s.paginationMode,
      s.checkboxSelectionVisibleOnly,
      h,
      p
    ]), x = c.useMemo(() => g.filter((R) => m[R]).length, [
      g,
      m
    ]), v = x > 0 && x < Object.keys(m).length, I = x > 0, C = (R) => {
      const y = {
        value: R.target.checked
      };
      l.current.publishEvent("headerSelectionCheckboxChange", y);
    }, E = d !== null && d.field === t.field ? 0 : -1;
    c.useLayoutEffect(() => {
      const R = l.current.getColumnHeaderElement(t.field);
      E === 0 && R && (R.tabIndex = -1);
    }, [
      E,
      l,
      t.field
    ]);
    const $ = c.useCallback((R) => {
      R.key === " " && l.current.publishEvent("headerSelectionCheckboxChange", {
        value: !I
      });
    }, [
      l,
      I
    ]), k = c.useCallback(() => {
      r((R) => !R);
    }, []);
    c.useEffect(() => l.current.subscribeEvent("rowSelectionChange", k), [
      l,
      k
    ]);
    const H = s.indeterminateCheckboxAction === "select" ? I && !v : I, A = l.current.getLocaleText(H ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
    return f.jsx(s.slots.baseCheckbox, b({
      indeterminate: v,
      checked: H,
      onChange: C,
      className: i.root,
      inputProps: {
        "aria-label": A,
        name: "select_all_rows"
      },
      tabIndex: E,
      onKeyDown: $,
      disabled: !Us(s)
    }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseCheckbox, o, {
      ref: n
    }));
  }), Sr = (e, t) => Eo in t ? t[Eo] : e.props.getRowId ? e.props.getRowId(t) : t.id, Kt = "__check__", Ao = b({}, ou, {
    type: "custom",
    field: Kt,
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
      const r = _n(o), l = Sr(o.current.state, t);
      return r[l] !== void 0;
    },
    renderHeader: (e) => f.jsx(yC, b({}, e)),
    renderCell: (e) => f.jsx(cC, b({}, e))
  }), SC = [
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
  function ia(e, t) {
    if (e == null) return "";
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "" : t === "date" ? n.toISOString().substring(0, 10) : t === "datetime-local" ? (n.setMinutes(n.getMinutes() - n.getTimezoneOffset()), n.toISOString().substring(0, 19)) : n.toISOString().substring(0, 10);
  }
  function so(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, InputProps: s, clearButton: a, tabIndex: i, disabled: d } = e, u = ge(e, SC), p = Qt(), [h, g] = c.useState(() => ia(t.value, o)), [m, x] = c.useState(false), v = nt(), I = ie(), C = c.useCallback((E) => {
      p.clear();
      const $ = E.target.value;
      g($), x(true), p.start(I.filterDebounceMs, () => {
        const k = new Date($);
        n(b({}, t, {
          value: Number.isNaN(k.getTime()) ? void 0 : k
        })), x(false);
      });
    }, [
      n,
      t,
      I.filterDebounceMs,
      p
    ]);
    return c.useEffect(() => {
      const E = ia(t.value, o);
      g(E);
    }, [
      t.value,
      o
    ]), f.jsx(I.slots.baseTextField, b({
      fullWidth: true,
      id: v,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: h,
      onChange: C,
      variant: "standard",
      type: o || "text",
      InputLabelProps: {
        shrink: true
      },
      inputRef: l,
      InputProps: b({}, m || a ? {
        endAdornment: m ? f.jsx(I.slots.loadIcon, {
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
    }, u, (_a2 = I.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function io(e, t, n, o) {
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
  const wu = (e) => [
    {
      value: "is",
      getApplyFilterFn: (t) => io(t, (n, o) => n === o, e),
      InputComponent: so,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "not",
      getApplyFilterFn: (t) => io(t, (n, o) => n !== o, e),
      InputComponent: so,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "after",
      getApplyFilterFn: (t) => io(t, (n, o) => n > o, e),
      InputComponent: so,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrAfter",
      getApplyFilterFn: (t) => io(t, (n, o) => n >= o, e),
      InputComponent: so,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "before",
      getApplyFilterFn: (t) => io(t, (n, o) => n < o, e, !e),
      InputComponent: so,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrBefore",
      getApplyFilterFn: (t) => io(t, (n, o) => n <= o, e),
      InputComponent: so,
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
  ], IC = [
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
  ], PC = se(Is)({
    fontSize: "inherit"
  }), MC = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "editInputCell"
      ]
    }, He, t);
  };
  function kC(e) {
    const { id: t, value: n, field: o, colDef: r, hasFocus: l, inputProps: s, onValueChange: a } = e, i = ge(e, IC), d = r.type === "dateTime", u = Ee(), p = c.useRef(null), h = c.useMemo(() => {
      let $;
      n == null ? $ = null : n instanceof Date ? $ = n : $ = new Date((n ?? "").toString());
      let k;
      return $ == null || Number.isNaN($.getTime()) ? k = "" : k = new Date($.getTime() - $.getTimezoneOffset() * 60 * 1e3).toISOString().substr(0, d ? 16 : 10), {
        parsed: $,
        formatted: k
      };
    }, [
      n,
      d
    ]), [g, m] = c.useState(h), v = {
      classes: ie().classes
    }, I = MC(v), C = c.useCallback(($) => {
      if ($ === "") return null;
      const [k, H] = $.split("T"), [A, R, y] = k.split("-"), w = /* @__PURE__ */ new Date();
      if (w.setFullYear(Number(A), Number(R) - 1, Number(y)), w.setHours(0, 0, 0, 0), H) {
        const [M, O] = H.split(":");
        w.setHours(Number(M), Number(O), 0, 0);
      }
      return w;
    }, []), E = c.useCallback(async ($) => {
      const k = $.target.value, H = C(k);
      a && await a($, H), m({
        parsed: H,
        formatted: k
      }), u.current.setEditCellValue({
        id: t,
        field: o,
        value: H
      }, $);
    }, [
      u,
      o,
      t,
      a,
      C
    ]);
    return c.useEffect(() => {
      m(($) => {
        var _a2, _b2;
        return h.parsed !== $.parsed && ((_a2 = h.parsed) == null ? void 0 : _a2.getTime()) !== ((_b2 = $.parsed) == null ? void 0 : _b2.getTime()) ? h : $;
      });
    }, [
      h
    ]), St(() => {
      l && p.current.focus();
    }, [
      l
    ]), f.jsx(PC, b({
      inputRef: p,
      fullWidth: true,
      className: I.root,
      type: d ? "datetime-local" : "date",
      inputProps: b({
        max: d ? "9999-12-31T23:59" : "9999-12-31"
      }, s),
      value: g.formatted,
      onChange: E
    }, i));
  }
  const xu = (e) => f.jsx(kC, b({}, e));
  function vu({ value: e, columnType: t, rowId: n, field: o }) {
    if (!(e instanceof Date)) throw new Error([
      `MUI X: \`${t}\` column type only accepts \`Date\` objects as values.`,
      "Use `valueGetter` to transform the value into a `Date` object.",
      `Row ID: ${n}, field: "${o}".`
    ].join(`
`));
  }
  const EC = (e, t, n, o) => {
    if (!e) return "";
    const r = Sr(o.current.state, t);
    return vu({
      value: e,
      columnType: "date",
      rowId: r,
      field: n.field
    }), e.toLocaleDateString();
  }, FC = (e, t, n, o) => {
    if (!e) return "";
    const r = Sr(o.current.state, t);
    return vu({
      value: e,
      columnType: "dateTime",
      rowId: r,
      field: n.field
    }), e.toLocaleString();
  }, TC = b({}, fn, {
    type: "date",
    sortComparator: Gc,
    valueFormatter: EC,
    filterOperators: wu(),
    renderEditCell: xu,
    pastedValueParser: (e) => new Date(e)
  }), OC = b({}, fn, {
    type: "dateTime",
    sortComparator: Gc,
    valueFormatter: FC,
    filterOperators: wu(true),
    renderEditCell: xu,
    pastedValueParser: (e) => new Date(e)
  }), An = (e) => e == null ? null : Number(e), DC = (e) => e == null || Number.isNaN(e) || e === "" ? null : (t) => An(t) === An(e), RC = () => [
    {
      value: "=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => An(t) === e.value,
      InputComponent: Xt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "!=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => An(t) !== e.value,
      InputComponent: Xt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) > e.value,
      InputComponent: Xt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) >= e.value,
      InputComponent: Xt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) < e.value,
      InputComponent: Xt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) <= e.value,
      InputComponent: Xt,
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
      InputComponent: Vc,
      InputComponentProps: {
        type: "number"
      }
    }
  ], HC = b({}, fn, {
    type: "number",
    align: "right",
    headerAlign: "right",
    sortComparator: zc,
    valueParser: (e) => e === "" ? null : Number(e),
    valueFormatter: (e) => sb(e) ? e.toLocaleString() : e || "",
    filterOperators: RC(),
    getApplyQuickFilterFn: DC
  });
  function To(e) {
    return (e == null ? void 0 : e.type) === "singleSelect";
  }
  function Jn(e, t) {
    if (e) return typeof e.valueOptions == "function" ? e.valueOptions(b({
      field: e.field
    }, t)) : e.valueOptions;
  }
  function ol(e, t, n) {
    if (t === void 0) return;
    const o = t.find((r) => {
      const l = n(r);
      return String(l) === String(e);
    });
    return n(o);
  }
  const $C = [
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
  ], LC = [
    "MenuProps"
  ];
  function jC(e) {
    return !!e.key;
  }
  function AC(e) {
    var _a2, _b2;
    const t = ie(), { id: n, value: o, field: r, row: l, colDef: s, hasFocus: a, error: i, onValueChange: d, initialOpen: u = t.editMode === yn.Cell } = e, p = ge(e, $C), h = Ee(), g = c.useRef(null), m = c.useRef(null), [x, v] = c.useState(u), C = (((_a2 = t.slotProps) == null ? void 0 : _a2.baseSelect) || {}).native ?? false, E = ((_b2 = t.slotProps) == null ? void 0 : _b2.baseSelect) || {}, { MenuProps: $ } = E, k = ge(E, LC);
    if (St(() => {
      var _a3;
      a && ((_a3 = m.current) == null ? void 0 : _a3.focus());
    }, [
      a
    ]), !To(s)) return null;
    const H = Jn(s, {
      id: n,
      row: l
    });
    if (!H) return null;
    const A = s.getOptionValue, R = s.getOptionLabel, y = async (O) => {
      if (!To(s) || !H) return;
      v(false);
      const D = O.target, _ = ol(D.value, H, A);
      d && await d(O, _), await h.current.setEditCellValue({
        id: n,
        field: r,
        value: _
      }, O);
    }, w = (O, D) => {
      if (t.editMode === yn.Row) {
        v(false);
        return;
      }
      if (D === "backdropClick" || O.key === "Escape") {
        const _ = h.current.getCellParams(n, r);
        h.current.publishEvent("cellEditStop", b({}, _, {
          reason: O.key === "Escape" ? cn.escapeKeyDown : cn.cellFocusOut
        }));
      }
    }, M = (O) => {
      jC(O) && O.key === "Enter" || v(true);
    };
    return !H || !s ? null : f.jsx(t.slots.baseSelect, b({
      ref: g,
      inputRef: m,
      value: o,
      onChange: y,
      open: x,
      onOpen: M,
      MenuProps: b({
        onClose: w
      }, $),
      error: i,
      native: C,
      fullWidth: true
    }, p, k, {
      children: H.map((O) => {
        var _a3;
        const D = A(O);
        return c.createElement(t.slots.baseSelectOption, b({}, ((_a3 = t.slotProps) == null ? void 0 : _a3.baseSelectOption) || {}, {
          native: C,
          key: D,
          value: D
        }), R(O));
      })
    }));
  }
  const zC = (e) => f.jsx(AC, b({}, e)), GC = [
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
  ], _C = ({ column: e, OptionComponent: t, getOptionLabel: n, getOptionValue: o, isSelectNative: r, baseSelectOptionProps: l }) => [
    "",
    ...Jn(e) || []
  ].map((a) => {
    const i = o(a);
    let d = n(a);
    return d === "" && (d = "\u2003"), c.createElement(t, b({}, l, {
      native: r,
      key: i,
      value: i
    }), d);
  }), VC = se("div")({
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function aa(e) {
    var _a2, _b2, _c2, _d2, _e;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, placeholder: s, tabIndex: a, label: i, variant: d = "standard", clearButton: u } = e, p = ge(e, GC), h = t.value ?? "", g = nt(), m = nt(), x = ie(), v = ((_b2 = (_a2 = x.slotProps) == null ? void 0 : _a2.baseSelect) == null ? void 0 : _b2.native) ?? false;
    let I = null;
    if (t.field) {
      const A = r.current.getColumn(t.field);
      To(A) && (I = A);
    }
    const C = I == null ? void 0 : I.getOptionValue, E = I == null ? void 0 : I.getOptionLabel, $ = c.useMemo(() => Jn(I), [
      I
    ]), k = c.useCallback((A) => {
      let R = A.target.value;
      R = ol(R, $, C), n(b({}, t, {
        value: R
      }));
    }, [
      $,
      C,
      n,
      t
    ]);
    if (!To(I)) return null;
    const H = i ?? r.current.getLocaleText("filterPanelInputLabel");
    return f.jsxs(VC, {
      children: [
        f.jsxs(x.slots.baseFormControl, {
          fullWidth: true,
          children: [
            f.jsx(x.slots.baseInputLabel, b({}, (_c2 = x.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: m,
              htmlFor: g,
              shrink: true,
              variant: d,
              children: H
            })),
            f.jsx(x.slots.baseSelect, b({
              id: g,
              label: H,
              labelId: m,
              value: h,
              onChange: k,
              variant: d,
              type: o || "text",
              inputProps: {
                tabIndex: a,
                ref: l,
                placeholder: s ?? r.current.getLocaleText("filterPanelInputPlaceholder")
              },
              native: v,
              notched: d === "outlined" ? true : void 0
            }, p, (_d2 = x.slotProps) == null ? void 0 : _d2.baseSelect, {
              children: _C({
                column: I,
                OptionComponent: x.slots.baseSelectOption,
                getOptionLabel: E,
                getOptionValue: C,
                isSelectNative: v,
                baseSelectOptionProps: (_e = x.slotProps) == null ? void 0 : _e.baseSelectOption
              })
            }))
          ]
        }),
        u
      ]
    });
  }
  const NC = [
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
  ], BC = [
    "key"
  ], WC = rc();
  function UC(e) {
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, color: l, error: s, helperText: a, size: i, variant: d = "standard" } = e, u = ge(e, NC), p = {
      color: l,
      error: s,
      helperText: a,
      size: i,
      variant: d
    }, h = nt(), g = ie();
    let m = null;
    if (t.field) {
      const k = o.current.getColumn(t.field);
      To(k) && (m = k);
    }
    const x = m == null ? void 0 : m.getOptionValue, v = m == null ? void 0 : m.getOptionLabel, I = c.useCallback((k, H) => x(k) === x(H), [
      x
    ]), C = c.useMemo(() => Jn(m) || [], [
      m
    ]), E = c.useMemo(() => Array.isArray(t.value) ? t.value.reduce((k, H) => {
      const A = C.find((R) => x(R) === H);
      return A != null && k.push(A), k;
    }, []) : [], [
      x,
      t.value,
      C
    ]), $ = c.useCallback((k, H) => {
      n(b({}, t, {
        value: H.map(x)
      }));
    }, [
      n,
      t,
      x
    ]);
    return f.jsx(gc, b({
      multiple: true,
      options: C,
      isOptionEqualToValue: I,
      filterOptions: WC,
      id: h,
      value: E,
      onChange: $,
      getOptionLabel: v,
      renderTags: (k, H) => k.map((A, R) => {
        const y = H({
          index: R
        }), { key: w } = y, M = ge(y, BC);
        return f.jsx(g.slots.baseChip, b({
          variant: "outlined",
          size: "small",
          label: v(A)
        }, M), w);
      }),
      renderInput: (k) => {
        var _a2;
        return f.jsx(g.slots.baseTextField, b({}, k, {
          label: o.current.getLocaleText("filterPanelInputLabel"),
          placeholder: o.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: b({}, k.InputLabelProps, {
            shrink: true
          }),
          inputRef: r,
          type: "singleSelect"
        }, p, (_a2 = g.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, u));
  }
  const ao = (e) => e == null || !zs(e) ? e : e.value, KC = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => ao(t) === ao(e.value),
      InputComponent: aa
    },
    {
      value: "not",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => ao(t) !== ao(e.value),
      InputComponent: aa
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => {
        if (!Array.isArray(e.value) || e.value.length === 0) return null;
        const t = e.value.map(ao);
        return (n) => t.includes(ao(n));
      },
      InputComponent: UC
    }
  ], qC = (e) => typeof e[0] == "object", YC = (e) => zs(e) ? e.value : e, XC = (e) => zs(e) ? e.label : String(e), QC = b({}, fn, {
    type: "singleSelect",
    getOptionLabel: XC,
    getOptionValue: YC,
    valueFormatter(e, t, n, o) {
      const r = Sr(o.current.state, t);
      if (!To(n)) return "";
      const l = Jn(n, {
        id: r,
        row: t
      });
      if (e == null) return "";
      if (!l) return e;
      if (!qC(l)) return n.getOptionLabel(e);
      const s = l.find((a) => n.getOptionValue(a) === e);
      return s ? n.getOptionLabel(s) : "";
    },
    renderEditCell: zC,
    filterOperators: KC(),
    pastedValueParser: (e, t, n) => {
      const o = n, r = Jn(o) || [], l = o.getOptionValue;
      if (r.find((a) => l(a) === e)) return e;
    }
  }), JC = "string", ZC = () => ({
    string: fn,
    number: HC,
    date: TC,
    dateTime: OC,
    boolean: ou,
    singleSelect: QC,
    [gl]: Ob,
    custom: fn
  }), Ys = (e) => e.headerFiltering, ew = be(Ys, (e) => (e == null ? void 0 : e.enabled) ?? false), tw = be(Ys, (e) => e.editing), nw = be(Ys, (e) => e.menuOpen), xl = (e) => e.columnGrouping, yu = Ue(xl, (e) => (e == null ? void 0 : e.unwrappedGroupingModel) ?? {}), Su = Ue(xl, (e) => (e == null ? void 0 : e.lookup) ?? {}), ow = Ue(xl, (e) => (e == null ? void 0 : e.headerStructure) ?? []), Ir = be(xl, (e) => (e == null ? void 0 : e.maxDepth) ?? 0), Iu = [
    "maxWidth",
    "minWidth",
    "width",
    "flex"
  ], Al = ZC();
  function rw({ initialFreeSpace: e, totalFlexUnits: t, flexColumns: n }) {
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
        const p = n[u];
        if (r.all[p.field] && r.all[p.field].frozen === true) continue;
        let g = a / i * p.flex;
        g < p.minWidth ? (d += p.minWidth - g, g = p.minWidth, s.min[p.field] = true) : g > p.maxWidth && (d += p.maxWidth - g, g = p.maxWidth, s.max[p.field] = true), r.all[p.field] = {
          frozen: false,
          computedWidth: g,
          flex: p.flex
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
  const us = (e, t) => {
    const n = {};
    let o = 0, r = 0;
    const l = [];
    e.orderedFields.forEach((i) => {
      let d = e.lookup[i], u = 0, p = false;
      e.columnVisibilityModel[i] !== false && (d.flex && d.flex > 0 ? (o += d.flex, p = true) : u = Nt(d.width || fn.width, d.minWidth || fn.minWidth, d.maxWidth || fn.maxWidth), r += u), d.computedWidth !== u && (d = b({}, d, {
        computedWidth: u
      })), p && l.push(d), n[i] = d;
    });
    const s = t === void 0 ? 0 : t.viewportOuterSize.width - (t.hasScrollY ? t.scrollbarSize : 0), a = Math.max(s - r, 0);
    if (o > 0 && s > 0) {
      const i = rw({
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
  }, lw = (e, t) => {
    if (!t) return e;
    const { orderedFields: n = [], dimensions: o = {} } = t, r = Object.keys(o);
    if (r.length === 0 && n.length === 0) return e;
    const l = {}, s = [];
    for (let u = 0; u < n.length; u += 1) {
      const p = n[u];
      e.lookup[p] && (l[p] = true, s.push(p));
    }
    const a = s.length === 0 ? e.orderedFields : [
      ...s,
      ...e.orderedFields.filter((u) => !l[u])
    ], i = b({}, e.lookup);
    for (let u = 0; u < r.length; u += 1) {
      const p = r[u], h = b({}, i[p], {
        hasBeenResized: true
      });
      Object.entries(o[p]).forEach(([g, m]) => {
        h[g] = m === -1 ? 1 / 0 : m;
      }), i[p] = h;
    }
    return b({}, e, {
      orderedFields: a,
      lookup: i
    });
  };
  function ca(e) {
    let t = Al[JC];
    return e && Al[e] && (t = Al[e]), t;
  }
  const po = ({ apiRef: e, columnsToUpsert: t, initialState: n, columnVisibilityModel: o = Zt(e), keepOnlyColumnsToUpsert: r = false }) => {
    var _a2, _b2;
    const l = !e.current.state.columns;
    let s;
    if (l) s = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel: o
    };
    else {
      const u = xn(e.current.state);
      s = {
        orderedFields: r ? [] : [
          ...u.orderedFields
        ],
        lookup: b({}, u.lookup),
        columnVisibilityModel: o
      };
    }
    let a = {};
    r && !l && (a = Object.keys(s.lookup).reduce((u, p) => b({}, u, {
      [p]: false
    }), {})), t.forEach((u) => {
      const { field: p } = u;
      a[p] = true;
      let h = s.lookup[p];
      h == null ? (h = b({}, ca(u.type), {
        field: p,
        hasBeenResized: false
      }), s.orderedFields.push(p)) : r && s.orderedFields.push(p), h && h.type !== u.type && (h = b({}, ca(u.type), {
        field: p
      }));
      let g = h.hasBeenResized;
      Iu.forEach((m) => {
        u[m] !== void 0 && (g = true, u[m] === -1 && (u[m] = 1 / 0));
      }), s.lookup[p] = vd(h, b({}, u, {
        hasBeenResized: g
      }));
    }), r && !l && Object.keys(s.lookup).forEach((u) => {
      a[u] || delete s.lookup[u];
    });
    const i = e.current.unstable_applyPipeProcessors("hydrateColumns", s), d = lw(i, n);
    return us(d, ((_b2 = (_a2 = e.current).getRootDimensions) == null ? void 0 : _b2.call(_a2)) ?? void 0);
  };
  function sw({ firstColumnToRender: e, apiRef: t, firstRowToRender: n, lastRowToRender: o, visibleRows: r }) {
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
  function vl(e, t) {
    if (t.unstable_listView) return 0;
    const n = Do(e), o = Ir(e), r = ew(e), l = Math.floor(t.columnHeaderHeight * n), s = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * n), a = r ? Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * n) : 0;
    return l + s * o + a;
  }
  const zo = (e) => e.rowsMeta, rl = 1, Pu = 1.5, iw = (e) => {
    const { scrollDirection: t, classes: n } = e, o = {
      root: [
        "scrollArea",
        `scrollArea--${t}`
      ]
    };
    return me(o, He, n);
  }, aw = Je("div", {
    name: "MuiDataGrid",
    slot: "ScrollArea",
    overridesResolver: (e, t) => [
      {
        [`&.${P["scrollArea--left"]}`]: t["scrollArea--left"]
      },
      {
        [`&.${P["scrollArea--right"]}`]: t["scrollArea--right"]
      },
      {
        [`&.${P["scrollArea--up"]}`]: t["scrollArea--up"]
      },
      {
        [`&.${P["scrollArea--down"]}`]: t["scrollArea--down"]
      },
      t.scrollArea
    ]
  })(() => ({
    position: "absolute",
    zIndex: 101,
    [`&.${P["scrollArea--left"]}`]: {
      top: 0,
      left: 0,
      width: 20,
      bottom: 0
    },
    [`&.${P["scrollArea--right"]}`]: {
      top: 0,
      right: 0,
      width: 20,
      bottom: 0
    },
    [`&.${P["scrollArea--up"]}`]: {
      top: 0,
      left: 0,
      right: 0,
      height: 20
    },
    [`&.${P["scrollArea--down"]}`]: {
      bottom: 0,
      left: 0,
      right: 0,
      height: 20
    }
  })), cw = Cr(mt, (e, t) => t === "left" ? e.leftPinnedWidth : t === "right" ? e.rightPinnedWidth + (e.hasScrollX ? e.scrollbarSize : 0) : 0);
  function uw(e) {
    const t = Ee(), [n, o] = c.useState("none");
    return oe(t, "columnHeaderDragStart", () => o("horizontal")), oe(t, "columnHeaderDragEnd", () => o("none")), oe(t, "rowDragStart", () => o("vertical")), oe(t, "rowDragEnd", () => o("none")), n === "none" ? null : n === "horizontal" ? f.jsx(dw, b({}, e)) : f.jsx(pw, b({}, e));
  }
  function dw(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = c.useRef(null), r = Ee(), l = Qt(), s = Q(r, Do), a = Q(r, fl), i = ar(r, cw, t), d = () => {
      const x = mt(r.current.state);
      if (t === "left") return n.current.left > 0;
      if (t === "right") {
        const v = a - x.viewportInnerSize.width;
        return n.current.left < v;
      }
      return false;
    }, u = ie(), p = vl(r, u), h = Math.floor(u.columnHeaderHeight * s), g = b({
      height: h,
      top: p - h
    }, t === "left" ? {
      left: i
    } : {}, t === "right" ? {
      right: i
    } : {}), m = Ke((x) => {
      let v;
      if (x.preventDefault(), t === "left") v = x.clientX - o.current.getBoundingClientRect().right;
      else if (t === "right") v = Math.max(1, x.clientX - o.current.getBoundingClientRect().left);
      else throw new Error("MUI X: Wrong drag direction");
      v = (v - rl) * Pu + rl, l.start(0, () => {
        r.current.scroll({
          left: n.current.left + v,
          top: n.current.top
        });
      });
    });
    return f.jsx(Mu, b({}, e, {
      ref: o,
      getCanScrollMore: d,
      style: g,
      handleDragOver: m
    }));
  }
  function pw(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = c.useRef(null), r = Ee(), l = Qt(), s = Q(r, zo), a = () => {
      const h = mt(r.current.state);
      if (t === "up") return n.current.top > 0;
      if (t === "down") {
        const m = (s.currentPageTotalHeight || 0) - h.viewportInnerSize.height - h.scrollbarSize;
        return n.current.top < m;
      }
      return false;
    }, i = ie(), d = vl(r, i), u = {
      top: t === "up" ? d : void 0,
      bottom: t === "down" ? 0 : void 0
    }, p = Ke((h) => {
      let g;
      if (h.preventDefault(), t === "up") g = h.clientY - o.current.getBoundingClientRect().bottom;
      else if (t === "down") g = Math.max(1, h.clientY - o.current.getBoundingClientRect().top);
      else throw new Error("MUI X: Wrong drag direction");
      g = (g - rl) * Pu + rl, l.start(0, () => {
        r.current.scroll({
          left: n.current.left,
          top: n.current.top + g
        });
      });
    });
    return f.jsx(Mu, b({}, e, {
      ref: o,
      getCanScrollMore: a,
      style: u,
      handleDragOver: p
    }));
  }
  const Mu = Ve(function(t, n) {
    const { scrollDirection: o, getCanScrollMore: r, style: l, handleDragOver: s } = t, a = Ee(), [i, d] = c.useState(r), u = ie(), p = b({}, u, {
      scrollDirection: o
    }), h = iw(p);
    return oe(a, "scrollPositionChange", () => {
      d(r);
    }), i ? f.jsx(aw, {
      ref: n,
      className: h.root,
      ownerState: p,
      onDragOver: s,
      style: l
    }) : null;
  }), Gr = Tn(uw);
  var Xs = {}, ku = {
    exports: {}
  }, Eu = {
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
  })(Eu);
  var fw = Eu.exports;
  (function(e) {
    var t = fw.default;
    function n(o, r) {
      if (typeof WeakMap == "function") var l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
      return (e.exports = n = function(i, d) {
        if (!d && i && i.__esModule) return i;
        var u, p, h = {
          __proto__: null,
          default: i
        };
        if (i === null || t(i) != "object" && typeof i != "function") return h;
        if (u = d ? s : l) {
          if (u.has(i)) return u.get(i);
          u.set(i, h);
        }
        for (var g in i) g !== "default" && {}.hasOwnProperty.call(i, g) && ((p = (u = Object.defineProperty) && Object.getOwnPropertyDescriptor(i, g)) && (p.get || p.set) ? u(h, g, p) : h[g] = i[g]);
        return h;
      }, e.exports.__esModule = true, e.exports.default = e.exports)(o, r);
    }
    e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
  })(ku);
  var gw = ku.exports, hw = gw.default;
  Object.defineProperty(Xs, "__esModule", {
    value: true
  });
  var Fu = Xs.default = void 0, mw = hw(c);
  Fu = Xs.default = parseInt(mw.version, 10);
  const Tu = c.createContext(void 0);
  function an() {
    const e = c.useContext(Tu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid private context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const Vn = (e, t) => yr(e), Qs = (e, t) => Q(e, yr), bw = typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "empty", Cw = bw.includes("firefox"), yl = (e) => e.virtualization;
  be(yl, (e) => e.enabled);
  const Ou = be(yl, (e) => e.enabledForColumns), ww = be(yl, (e) => e.enabledForRows), Pr = be(yl, (e) => e.renderContext), xw = Ue((e) => e.virtualization.renderContext.firstColumnIndex, (e) => e.virtualization.renderContext.lastColumnIndex, (e, t) => ({
    firstColumnIndex: e,
    lastColumnIndex: t
  })), ds = {
    firstRowIndex: 0,
    lastRowIndex: 0,
    firstColumnIndex: 0,
    lastColumnIndex: 0
  }, vw = (e, t) => {
    const { disableVirtualization: n, autoHeight: o } = t;
    return b({}, e, {
      virtualization: {
        enabled: !n,
        enabledForColumns: !n,
        enabledForRows: !n && !o,
        renderContext: ds
      }
    });
  };
  function yw(e, t) {
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
  const Js = (e) => e.rowSpanning, Du = be(Js, (e) => e.hiddenCells), Sw = be(Js, (e) => e.spannedCells), Iw = be(Js, (e) => e.hiddenCellOriginMap), Oo = (e) => e.listViewColumn, Pw = kc(Rt, Pr, yr, st, Jt, (e, t, n, o, r) => {
    if (!e) return false;
    const l = r[e.id];
    if (!l) return false;
    const s = n.rowToIndexMap.get(l), a = o.slice(t.firstColumnIndex, t.lastColumnIndex).findIndex((d) => d.field === e.field);
    return !(s !== void 0 && a !== -1 && s >= t.firstRowIndex && s <= t.lastRowIndex);
  }), Ru = Ue(Pw, st, yr, Jt, Rt, (e, t, n, o, r) => {
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
  function bo(e, t) {
    return Math.round(e * 10 ** t) / 10 ** t;
  }
  const ll = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), zl = 50;
  var ct = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e;
  })(ct || {});
  const ua = {
    top: 0,
    left: 0
  }, Mw = Object.freeze(/* @__PURE__ */ new Map()), kw = (e, t, n, o, r) => ({
    direction: ct.NONE,
    buffer: $u(e, ct.NONE, t, n, o, r)
  }), Ew = () => {
    var _a2;
    const e = an(), t = ie(), { unstable_listView: n } = t, o = Q(e, () => n ? [
      Oo(e.current.state)
    ] : st(e)), r = Q(e, ww) && !ll, l = Q(e, Ou) && !ll, s = Q(e, Ro), a = $o(e), i = n ? tl : a, d = s.bottom.length > 0, [u, p] = c.useState(Mw), h = At(), g = Q(e, _n), m = Qs(e), x = e.current.mainElementRef, v = e.current.virtualScrollerRef, I = e.current.virtualScrollbarVerticalRef, C = e.current.virtualScrollbarHorizontalRef, E = Q(e, gb), $ = c.useRef(false), k = Q(e, js), H = Q(e, km), A = Q(e, fl), R = Q(e, Fw), y = Q(e, Lc), w = Q(e, $c), M = c.useRef(null), O = c.useCallback((Y) => {
      if (x.current = Y, !Y) return;
      const re = Y.getBoundingClientRect();
      let ye = {
        width: bo(re.width, 1),
        height: bo(re.height, 1)
      };
      if ((!M.current || ye.width !== M.current.width && ye.height !== M.current.height) && (M.current = ye, e.current.publishEvent("resize", ye)), typeof ResizeObserver > "u") return;
      const Z = new ResizeObserver((Se) => {
        const ee = Se[0];
        if (!ee) return;
        const ve = {
          width: bo(ee.contentRect.width, 1),
          height: bo(ee.contentRect.height, 1)
        };
        ve.width === ye.width && ve.height === ye.height || (e.current.publishEvent("resize", ve), ye = ve);
      });
      if (Z.observe(Y), Fu >= 19) return () => {
        x.current = null, Z.disconnect();
      };
    }, [
      e,
      x
    ]), D = c.useRef(((_a2 = t.initialState) == null ? void 0 : _a2.scroll) ?? ua), _ = c.useRef(false), F = c.useRef(ua), S = c.useRef(ds), T = Q(e, Pr), L = Q(e, Ru), z = Qt(), G = c.useRef(void 0), j = Sn(() => kw(h, t.rowBufferPx, t.columnBufferPx, k * 15, zl * 6)).current, V = c.useCallback((Y) => {
      if (ga(Y, e.current.state.virtualization.renderContext)) return;
      const re = Y.firstRowIndex !== S.current.firstRowIndex || Y.lastRowIndex !== S.current.lastRowIndex;
      e.current.setState((Z) => b({}, Z, {
        virtualization: b({}, Z.virtualization, {
          renderContext: Y
        })
      })), mt(e.current.state).isReady && re && (S.current = Y, e.current.publishEvent("renderedRowsIntervalChange", Y)), F.current = D.current;
    }, [
      e
    ]), U = Ke(() => {
      const Y = v.current;
      if (!Y) return;
      const re = mt(e.current.state), ye = Math.ceil(re.minimumSize.height - re.viewportOuterSize.height), Z = Math.ceil(re.minimumSize.width - re.viewportInnerSize.width), Se = {
        top: Nt(Y.scrollTop, 0, ye),
        left: h ? Nt(Y.scrollLeft, -Z, 0) : Nt(Y.scrollLeft, 0, Z)
      }, ee = Se.left - D.current.left, ve = Se.top - D.current.top, Ce = ee !== 0 || ve !== 0;
      D.current = Se;
      const Fe = Ce ? Dw(ee, ve) : ct.NONE, Ne = Math.abs(D.current.top - F.current.top), Be = Math.abs(D.current.left - F.current.left), ze = Ne >= k || Be >= zl, $e = j.direction !== Fe;
      if (!(ze || $e)) return T;
      if ($e) switch (Fe) {
        case ct.NONE:
        case ct.LEFT:
        case ct.RIGHT:
          G.current = void 0;
          break;
        default:
          G.current = T;
          break;
      }
      j.direction = Fe, j.buffer = $u(h, Fe, t.rowBufferPx, t.columnBufferPx, k * 15, zl * 6);
      const We = da(e, t, r, l), Ge = pa(We, D.current, j);
      return ga(Ge, T) || (yd.flushSync(() => {
        V(Ge);
      }), z.start(1e3, U)), Ge;
    }), W = () => {
      if (!mt(e.current.state).isReady && (r || l)) return;
      const Y = da(e, t, r, l), re = pa(Y, D.current, j);
      G.current = void 0, V(re);
    }, K = Ke(() => {
      if (_.current) {
        _.current = false;
        return;
      }
      const Y = U();
      e.current.publishEvent("scrollPositionChange", {
        top: D.current.top,
        left: D.current.left,
        renderContext: Y
      });
    }), B = Ke((Y) => {
      e.current.publishEvent("virtualScrollerWheel", {}, Y);
    }), te = Ke((Y) => {
      e.current.publishEvent("virtualScrollerTouchMove", {}, Y);
    }), J = (Y = {}) => {
      var _a3;
      if (!Y.rows && !m.range) return [];
      const re = pt(e);
      let ye = T;
      Y.renderContext && (ye = Y.renderContext, ye.firstColumnIndex = T.firstColumnIndex, ye.lastColumnIndex = T.lastColumnIndex);
      const Z = !d && Y.position === void 0 || d && Y.position === "bottom", Se = Y.position !== void 0;
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
      const ve = Y.rows ?? m.rows, Ce = ye.firstRowIndex, Fe = Math.min(ye.lastRowIndex, ve.length), Ne = Y.rows ? Qi(0, Y.rows.length) : Qi(Ce, Fe);
      let Be = -1;
      !Se && L && (L.rowIndex < Ce && (Ne.unshift(L.rowIndex), Be = L.rowIndex), L.rowIndex > Fe && (Ne.push(L.rowIndex), Be = L.rowIndex));
      const ze = [], $e = (_a3 = t.slotProps) == null ? void 0 : _a3.row, Le = Wn(e);
      return Ne.forEach((We) => {
        var _a4, _b2, _c2;
        const { id: Ge, model: fe } = ve[We];
        if (!re[Ge]) return;
        const xe = (((_a4 = m == null ? void 0 : m.range) == null ? void 0 : _a4.firstRowIndex) || 0) + ee + We;
        if (E) {
          const Dt = i.left.length, Ft = o.length - i.right.length;
          e.current.calculateColSpan({
            rowId: Ge,
            minFirstColumn: Dt,
            maxLastColumn: Ft,
            columns: o
          }), i.left.length > 0 && e.current.calculateColSpan({
            rowId: Ge,
            minFirstColumn: 0,
            maxLastColumn: i.left.length,
            columns: o
          }), i.right.length > 0 && e.current.calculateColSpan({
            rowId: Ge,
            minFirstColumn: o.length - i.right.length,
            maxLastColumn: o.length,
            columns: o
          });
        }
        const pe = e.current.rowHasAutoHeight(Ge) ? "auto" : e.current.unstable_getRowHeight(Ge);
        let he;
        g[Ge] == null ? he = false : he = e.current.isRowSelectable(Ge);
        let je = false;
        Y.position === void 0 && (je = We === 0);
        let Re = false;
        const rt = We === ve.length - 1;
        if (Z) if (Se) Re = rt;
        else {
          const Dt = m.rows.length - 1;
          We === Dt && (Re = true);
        }
        let xt = ye;
        G.current && We >= G.current.firstRowIndex && We < G.current.lastRowIndex && (xt = G.current);
        const ut = We === Be, In = (L == null ? void 0 : L.rowIndex) === xe, Ot = Hu(Le, xt, i.left.length), Pn = rt && Y.position === "top", It = xt.firstColumnIndex, zt = xt.lastColumnIndex;
        if (ze.push(f.jsx(t.slots.row, b({
          row: fe,
          rowId: Ge,
          index: xe,
          selected: he,
          offsetLeft: Ot,
          columnsTotalWidth: A,
          rowHeight: pe,
          pinnedColumns: i,
          visibleColumns: o,
          firstColumnIndex: It,
          lastColumnIndex: zt,
          focusedColumnIndex: In ? L.columnIndex : void 0,
          isFirstVisible: je,
          isLastVisible: Re,
          isNotVisible: ut,
          showBottomBorder: Pn,
          scrollbarWidth: y,
          gridHasFiller: w
        }, $e), Ge)), ut) return;
        const Et = u.get(Ge);
        Et && ze.push(Et), Y.position === void 0 && rt && ze.push((_c2 = (_b2 = e.current).getInfiniteLoadingTriggerElement) == null ? void 0 : _c2.call(_b2, {
          lastRowId: Ge
        }));
      }), ze;
    }, ne = c.useMemo(() => ({
      overflowX: !R || n ? "hidden" : void 0,
      overflowY: t.autoHeight ? "hidden" : void 0
    }), [
      R,
      t.autoHeight,
      n
    ]), ae = c.useMemo(() => {
      const Y = {
        width: R ? A : "auto",
        flexBasis: H,
        flexShrink: 0
      };
      return Y.flexBasis === 0 && (Y.flexBasis = eu), Y;
    }, [
      A,
      H,
      R
    ]), we = c.useCallback((Y) => {
      Y && e.current.publishEvent("virtualScrollerContentSizeChange", {
        columnsTotalWidth: A,
        contentHeight: H
      });
    }, [
      e,
      A,
      H
    ]);
    return St(() => {
      var _a3, _b2;
      $.current && ((_b2 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a3));
    }, [
      e,
      l,
      r
    ]), St(() => {
      n && (v.current.scrollLeft = 0);
    }, [
      n,
      v
    ]), fC(T !== ds, () => {
      var _a3;
      if (e.current.publishEvent("scrollPositionChange", {
        top: D.current.top,
        left: D.current.left,
        renderContext: T
      }), $.current = true, ((_a3 = t.initialState) == null ? void 0 : _a3.scroll) && v.current) {
        const Y = v.current, { top: re, left: ye } = t.initialState.scroll, Z = {
          top: !(re > 0),
          left: !(ye > 0)
        };
        if (!Z.left && A && (Y.scrollLeft = ye, _.current = true, Z.left = true), !Z.top && H && (Y.scrollTop = re, _.current = true, Z.top = true), !Z.top || !Z.left) {
          const Se = e.current.subscribeEvent("virtualScrollerContentSizeChange", (ee) => {
            !Z.left && ee.columnsTotalWidth && (Y.scrollLeft = ye, _.current = true, Z.left = true), !Z.top && ee.contentHeight && (Y.scrollTop = re, _.current = true, Z.top = true), Z.left && Z.top && Se();
          });
          return Se;
        }
      }
    }), e.current.register("private", {
      updateRenderContext: W
    }), Qe(e, "sortedRowsSet", W), Qe(e, "paginationModelChange", W), Qe(e, "columnsChange", W), {
      renderContext: T,
      setPanels: p,
      getRows: J,
      getContainerProps: () => ({
        ref: O
      }),
      getScrollerProps: () => ({
        ref: v,
        onScroll: K,
        onWheel: B,
        onTouchMove: te,
        style: ne,
        role: "presentation",
        tabIndex: Cw ? -1 : void 0
      }),
      getContentProps: () => ({
        style: ae,
        role: "presentation",
        ref: we
      }),
      getRenderZoneProps: () => ({
        role: "rowgroup"
      }),
      getScrollbarVerticalProps: () => ({
        ref: I,
        scrollPosition: D
      }),
      getScrollbarHorizontalProps: () => ({
        ref: C,
        scrollPosition: D
      }),
      getScrollAreaProps: () => ({
        scrollPosition: D
      })
    };
  };
  function Fw(e) {
    return e.dimensions.viewportOuterSize.width > 0 && e.dimensions.columnsTotalWidth > e.dimensions.viewportOuterSize.width;
  }
  function da(e, t, n, o) {
    const r = mt(e.current.state), l = Vn(e), s = t.unstable_listView ? [
      Oo(e.current.state)
    ] : st(e), a = Iw(e), i = e.current.state.rows.dataRowIds.at(-1), d = s.at(-1);
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
      rowsMeta: zo(e.current.state),
      columnPositions: Wn(e),
      rows: l.rows,
      range: l.range,
      pinnedColumns: $o(e),
      visibleColumns: s,
      hiddenCellsOriginMap: a,
      listView: t.unstable_listView ?? false,
      virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight
    };
  }
  function pa(e, t, n) {
    const o = {
      firstRowIndex: 0,
      lastRowIndex: e.rows.length,
      firstColumnIndex: 0,
      lastColumnIndex: e.visibleColumns.length
    }, { top: r, left: l } = t, s = Math.abs(l) + e.leftPinnedWidth;
    if (e.enabledForRows) {
      let i = Math.min(fa(e, r, {
        atStart: true,
        lastPosition: e.rowsMeta.positions[e.rowsMeta.positions.length - 1] + e.lastRowHeight
      }), e.rowsMeta.positions.length - 1);
      const d = e.hiddenCellsOriginMap[i];
      if (d) {
        const p = Math.min(...Object.values(d));
        i = Math.min(i, p);
      }
      const u = e.autoHeight ? i + e.rows.length : fa(e, r + e.viewportInnerHeight);
      o.firstRowIndex = i, o.lastRowIndex = u;
    }
    if (e.listView) return b({}, o, {
      lastColumnIndex: 1
    });
    if (e.enabledForColumns) {
      let i = 0, d = e.columnPositions.length, u = false;
      const [p, h] = ps({
        firstIndex: o.firstRowIndex,
        lastIndex: o.lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: e.rows.length,
        bufferBefore: n.buffer.rowBefore,
        bufferAfter: n.buffer.rowAfter,
        positions: e.rowsMeta.positions,
        lastSize: e.lastRowHeight
      });
      if (!e.virtualizeColumnsWithAutoRowHeight) for (let g = p; g < h && !u; g += 1) {
        const m = e.rows[g];
        u = e.apiRef.current.rowHasAutoHeight(m.id);
      }
      (!u || e.virtualizeColumnsWithAutoRowHeight) && (i = Nn(s, e.columnPositions, {
        atStart: true,
        lastPosition: e.columnsTotalWidth
      }), d = Nn(s + e.viewportInnerWidth, e.columnPositions)), o.firstColumnIndex = i, o.lastColumnIndex = d;
    }
    return Tw(e, o, n);
  }
  function fa(e, t, n) {
    var _a2, _b2;
    const o = e.apiRef.current.getLastMeasuredRowIndex();
    let r = o === 1 / 0;
    ((_a2 = e.range) == null ? void 0 : _a2.lastRowIndex) && !r && (r = o >= e.range.lastRowIndex);
    const l = Nt(o - (((_b2 = e.range) == null ? void 0 : _b2.firstRowIndex) || 0), 0, e.rowsMeta.positions.length);
    return r || e.rowsMeta.positions[l] >= t ? Nn(t, e.rowsMeta.positions, n) : Ow(t, e.rowsMeta.positions, l, n);
  }
  function Tw(e, t, n) {
    const [o, r] = ps({
      firstIndex: t.firstRowIndex,
      lastIndex: t.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: e.rows.length,
      bufferBefore: n.buffer.rowBefore,
      bufferAfter: n.buffer.rowAfter,
      positions: e.rowsMeta.positions,
      lastSize: e.lastRowHeight
    }), [l, s] = ps({
      firstIndex: t.firstColumnIndex,
      lastIndex: t.lastColumnIndex,
      minFirstIndex: e.pinnedColumns.left.length,
      maxLastIndex: e.visibleColumns.length - e.pinnedColumns.right.length,
      bufferBefore: n.buffer.columnBefore,
      bufferAfter: n.buffer.columnAfter,
      positions: e.columnPositions,
      lastSize: e.lastColumnWidth
    }), a = sw({
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
  function Nn(e, t, n = void 0, o = 0, r = t.length) {
    if (t.length <= 0) return -1;
    if (o >= r) return o;
    const l = o + Math.floor((r - o) / 2), s = t[l];
    let a;
    if (n == null ? void 0 : n.atStart) {
      const i = (l === t.length - 1 ? n.lastPosition : t[l + 1]) - s;
      a = e - i < s;
    } else a = e <= s;
    return a ? Nn(e, t, n, o, l) : Nn(e, t, n, l + 1, r);
  }
  function Ow(e, t, n, o = void 0) {
    let r = 1;
    for (; n < t.length && Math.abs(t[n]) < e; ) n += r, r *= 2;
    return Nn(e, t, o, Math.floor(n / 2), Math.min(n, t.length));
  }
  function ps({ firstIndex: e, lastIndex: t, bufferBefore: n, bufferAfter: o, minFirstIndex: r, maxLastIndex: l, positions: s, lastSize: a }) {
    const i = s[e] - n, d = s[t] + o, u = Nn(i, s, {
      atStart: true,
      lastPosition: s[s.length - 1] + a
    }), p = Nn(d, s);
    return [
      Nt(u, r, l),
      Nt(p, r, l)
    ];
  }
  function ga(e, t) {
    return e === t ? true : e.firstRowIndex === t.firstRowIndex && e.lastRowIndex === t.lastRowIndex && e.firstColumnIndex === t.firstColumnIndex && e.lastColumnIndex === t.lastColumnIndex;
  }
  function Hu(e, t, n) {
    const o = (e[t.firstColumnIndex] ?? 0) - (e[n] ?? 0);
    return Math.abs(o);
  }
  function Dw(e, t) {
    return e === 0 && t === 0 ? ct.NONE : Math.abs(t) >= Math.abs(e) ? t > 0 ? ct.DOWN : ct.UP : e > 0 ? ct.RIGHT : ct.LEFT;
  }
  function $u(e, t, n, o, r, l) {
    if (e) switch (t) {
      case ct.LEFT:
        t = ct.RIGHT;
        break;
      case ct.RIGHT:
        t = ct.LEFT;
        break;
    }
    switch (t) {
      case ct.NONE:
        return {
          rowAfter: n,
          rowBefore: n,
          columnAfter: o,
          columnBefore: o
        };
      case ct.LEFT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: l
        };
      case ct.RIGHT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: l,
          columnBefore: 0
        };
      case ct.UP:
        return {
          rowAfter: 0,
          rowBefore: r,
          columnAfter: 0,
          columnBefore: 0
        };
      case ct.DOWN:
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
  const Rw = () => {
    var _a2, _b2;
    const e = Ee(), t = ie(), n = Q(e, wr), o = Q(e, Bs), r = Q(e, jc), l = n === 0 && r === 0, s = Q(e, qm), a = !s && l, i = !s && n > 0 && o === 0;
    let d = null, u = null;
    return a && (d = "noRowsOverlay"), i && (d = "noResultsOverlay"), s && (d = "loadingOverlay", u = ((_b2 = (_a2 = t.slotProps) == null ? void 0 : _a2.loadingOverlay) == null ? void 0 : _b2[l ? "noRowsVariant" : "variant"]) || null), {
      overlayType: d,
      loadingOverlayVariant: u
    };
  }, Hw = Je("div", {
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
  } : {}), $w = Je("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapperInner",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapperInner
  })({}), Lw = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "overlayWrapper"
      ],
      inner: [
        "overlayWrapperInner"
      ]
    }, He, t);
  };
  function jw(e) {
    const t = Ee(), n = ie(), o = Q(t, mt);
    let r = Math.max(o.viewportOuterSize.height - o.topContainerHeight - o.bottomContainerHeight - (o.hasScrollX ? o.scrollbarSize : 0), 0);
    r === 0 && (r = eu);
    const l = Lw(b({}, e, {
      classes: n.classes
    }));
    return f.jsx(Hw, b({
      className: de(l.root)
    }, e, {
      children: f.jsx($w, b({
        className: de(l.inner),
        style: {
          height: r,
          width: o.viewportOuterSize.width
        }
      }, e))
    }));
  }
  function Aw(e) {
    var _a2, _b2;
    const { overlayType: t } = e, n = ie();
    if (!t) return null;
    const o = (_a2 = n.slots) == null ? void 0 : _a2[t], r = (_b2 = n.slotProps) == null ? void 0 : _b2[t];
    return f.jsx(jw, b({}, e, {
      children: f.jsx(o, b({}, r))
    }));
  }
  const Ur = (e) => e.columnMenu;
  function zw() {
    var _a2;
    const e = an(), t = ie(), n = Q(e, st), o = Q(e, eC), r = Q(e, Xb), l = Q(e, uu), s = Q(e, () => Ks(e) === null), a = Q(e, dC), i = Q(e, uC), d = Q(e, nl), u = Q(e, Ir), p = Q(e, Ur), h = Q(e, Zt), g = Q(e, ow), m = !(a === null && l === null && s), x = e.current.columnHeadersContainerRef;
    return f.jsx(t.slots.columnHeaders, b({
      ref: x,
      visibleColumns: n,
      filterColumnLookup: o,
      sortColumnLookup: r,
      columnHeaderTabIndexState: l,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: u,
      columnMenuState: p,
      columnVisibility: h,
      columnGroupsHeaderStructure: g,
      hasOtherElementInTabSequence: m
    }, (_a2 = t.slotProps) == null ? void 0 : _a2.columnHeaders));
  }
  const Gw = Tn(zw), Lu = c.createContext(void 0), Zs = () => {
    const e = c.useContext(Lu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid configuration context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }, _w = Je("div")({
    position: "absolute",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: "calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))"
  }), Vw = Je("div", {
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
  }), Nw = Ve((e, t) => {
    var _a2;
    const { ownerState: n } = e, o = ie(), l = Zs().hooks.useGridAriaAttributes();
    return f.jsxs(Vw, b({
      ownerState: n,
      className: e.className,
      tabIndex: -1
    }, l, (_a2 = o.slotProps) == null ? void 0 : _a2.main, {
      ref: t,
      children: [
        f.jsx(_w, {
          role: "presentation",
          "data-id": "gridPanelAnchor"
        }),
        e.children
      ]
    }));
  }), Bw = () => me({
    root: [
      "topContainer"
    ]
  }, He, {}), Ww = Je("div")({
    position: "sticky",
    zIndex: 40,
    top: 0
  });
  function Uw(e) {
    const t = Bw();
    return f.jsx(Ww, b({}, e, {
      className: de(t.root, P["container--top"]),
      role: "presentation"
    }));
  }
  const Kw = () => me({
    root: [
      "bottomContainer"
    ]
  }, He, {}), qw = Je("div")({
    position: "sticky",
    zIndex: 40,
    bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
  });
  function Yw(e) {
    const t = Kw();
    return f.jsx(qw, b({}, e, {
      className: de(t.root, P["container--bottom"]),
      role: "presentation"
    }));
  }
  const Xw = (e, t) => {
    const { classes: n } = e;
    return me({
      root: [
        "virtualScrollerContent",
        t && "virtualScrollerContent--overflowed"
      ]
    }, He, n);
  }, Qw = Je("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerContent",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.virtualScrollerContent,
        n.overflowedContent && t["virtualScrollerContent--overflowed"]
      ];
    }
  })({}), Jw = Ve(function(t, n) {
    var _a2;
    const o = ie(), r = !o.autoHeight && ((_a2 = t.style) == null ? void 0 : _a2.minHeight) === "auto", l = Xw(o, r), s = {
      classes: o.classes,
      overflowedContent: r
    };
    return f.jsx(Qw, b({}, t, {
      ownerState: s,
      className: de(l.root, t.className),
      ref: n
    }));
  }), Zw = Je("div")({
    display: "flex",
    flexDirection: "row",
    width: "var(--DataGrid-rowWidth)",
    boxSizing: "border-box"
  }), ju = Je("div")({
    position: "sticky",
    height: "100%",
    boxSizing: "border-box",
    borderTop: "1px solid var(--rowBorderColor)",
    backgroundColor: "var(--DataGrid-pinnedBackground)"
  }), ex = Je(ju)({
    left: 0,
    borderRight: "1px solid var(--rowBorderColor)"
  }), tx = Je(ju)({
    right: 0,
    borderLeft: "1px solid var(--rowBorderColor)"
  }), nx = Je("div")({
    flexGrow: 1,
    borderTop: "1px solid var(--rowBorderColor)"
  });
  function ox({ rowsLength: e }) {
    const t = Ee(), { viewportOuterSize: n, minimumSize: o, hasScrollX: r, hasScrollY: l, scrollbarSize: s, leftPinnedWidth: a, rightPinnedWidth: i } = Q(t, mt), d = r ? s : 0, u = n.height - o.height > 0;
    return d === 0 && !u ? null : f.jsxs(Zw, {
      className: P.filler,
      role: "presentation",
      style: {
        height: d,
        "--rowBorderColor": e === 0 ? "transparent" : "var(--DataGrid-rowBorderColor)"
      },
      children: [
        a > 0 && f.jsx(ex, {
          className: P["filler--pinnedLeft"],
          style: {
            width: a
          }
        }),
        f.jsx(nx, {}),
        i > 0 && f.jsx(tx, {
          className: P["filler--pinnedRight"],
          style: {
            width: i + (l ? s : 0)
          }
        })
      ]
    });
  }
  const rx = Tn(ox), lx = [
    "className"
  ], sx = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "virtualScrollerRenderZone"
      ]
    }, He, t);
  }, ix = Je("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerRenderZone",
    overridesResolver: (e, t) => t.virtualScrollerRenderZone
  })({
    position: "absolute",
    display: "flex",
    flexDirection: "column"
  }), ax = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, lx), l = Ee(), s = ie(), a = sx(s), i = Q(l, () => {
      const d = Pr(l);
      return zo(l.current.state).positions[d.firstRowIndex] ?? 0;
    });
    return f.jsx(ix, b({
      className: de(a.root, o),
      ownerState: s,
      style: {
        transform: `translate3d(0, ${i}px, 0)`
      }
    }, r, {
      ref: n
    }));
  }), cx = {
    includeHeaders: true,
    includeOutliers: false,
    outliersFactor: 1.5,
    expand: false,
    disableColumnVirtualization: true
  }, ht = (e) => e.editRows, Au = Cr(ht, (e, { rowId: t, editMode: n }) => n === yn.Row && !!e[t]), ux = Cr(ht, (e, { rowId: t, field: n }) => {
    var _a2;
    return ((_a2 = e[t]) == null ? void 0 : _a2[n]) ?? null;
  }), dr = (e) => e.preferencePanel, dx = Cr(dr, (e, t) => !!(e.open && e.labelId === t));
  var Zn = (function(e) {
    return e.filters = "filters", e.columns = "columns", e;
  })(Zn || {});
  const px = (e, t) => {
    const { classes: n } = e, o = {
      root: [
        "scrollbar",
        `scrollbar--${t}`
      ],
      content: [
        "scrollbarContent"
      ]
    };
    return me(o, He, n);
  }, zu = Je("div")({
    position: "absolute",
    display: "inline-block",
    zIndex: 60,
    "&:hover": {
      zIndex: 70
    },
    "--size": "calc(max(var(--DataGrid-scrollbarSize), 14px))"
  }), fx = Je(zu)({
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
  }), gx = Je(zu)({
    width: "100%",
    height: "var(--size)",
    overflowY: "hidden",
    overflowX: "auto",
    outline: 0,
    "& > div": {
      height: "var(--size)"
    },
    bottom: "0px"
  }), ha = Ve(function(t, n) {
    const o = an(), r = ie(), l = c.useRef(false), s = c.useRef(0), a = c.useRef(null), i = c.useRef(null), d = px(r, t.position), u = Q(o, mt), p = t.position === "vertical" ? "height" : "width", h = t.position === "vertical" ? "scrollTop" : "scrollLeft", g = t.position === "vertical" ? "top" : "left", m = t.position === "vertical" ? u.hasScrollX : u.hasScrollY, x = u.minimumSize[p] + (m ? u.scrollbarSize : 0), I = (t.position === "vertical" ? u.viewportInnerSize.height : u.viewportOuterSize.width) * (x / u.viewportOuterSize[p]), C = Ke(() => {
      const k = a.current, H = t.scrollPosition.current;
      if (!k || H[g] === s.current) return;
      if (s.current = H[g], l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const A = H[g] / x;
      k[h] = A * I;
    }), E = Ke(() => {
      const k = o.current.virtualScrollerRef.current, H = a.current;
      if (!H) return;
      if (l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const A = H[h] / I;
      k[h] = A * x;
    });
    Za(() => {
      const k = o.current.virtualScrollerRef.current, H = a.current, A = {
        passive: true
      };
      return k.addEventListener("scroll", C, A), H.addEventListener("scroll", E, A), () => {
        k.removeEventListener("scroll", C, A), H.removeEventListener("scroll", E, A);
      };
    }), c.useEffect(() => {
      i.current.style.setProperty(p, `${I}px`);
    }, [
      I,
      p
    ]);
    const $ = t.position === "vertical" ? fx : gx;
    return f.jsx($, {
      ref: jt(n, a),
      className: d.root,
      style: t.position === "vertical" && r.unstable_listView ? {
        height: "100%",
        top: 0
      } : void 0,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: (k) => {
        k.target.blur();
      },
      children: f.jsx("div", {
        ref: i,
        className: d.content
      })
    });
  }), hx = (e) => {
    const { classes: t, hasScrollX: n, hasPinnedRight: o, loadingOverlayVariant: r } = e;
    return me({
      root: [
        "main",
        o && "main--hasPinnedRight",
        r === "skeleton" && "main--hasSkeletonLoadingOverlay"
      ],
      scroller: [
        "virtualScroller",
        n && "virtualScroller--hasScrollX"
      ]
    }, He, t);
  }, mx = Je("div", {
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
  }), bx = (e) => e.dimensions.rightPinnedWidth > 0;
  function Cx(e) {
    const t = Ee(), n = ie(), o = Q(t, Fm), r = Q(t, Em), l = Q(t, bx), s = Q(t, Dm), a = Rw(), i = {
      classes: n.classes,
      hasScrollX: r,
      hasPinnedRight: l,
      loadingOverlayVariant: a.loadingOverlayVariant
    }, d = hx(i), u = Ew(), { getContainerProps: p, getScrollerProps: h, getContentProps: g, getRenderZoneProps: m, getScrollbarVerticalProps: x, getScrollbarHorizontalProps: v, getRows: I, getScrollAreaProps: C } = u, E = I();
    return f.jsxs(Nw, b({
      className: d.root
    }, p(), {
      ownerState: i,
      children: [
        f.jsx(Gr, b({
          scrollDirection: "left"
        }, C())),
        f.jsx(Gr, b({
          scrollDirection: "right"
        }, C())),
        f.jsx(Gr, b({
          scrollDirection: "up"
        }, C())),
        f.jsx(Gr, b({
          scrollDirection: "down"
        }, C())),
        f.jsxs(mx, b({
          className: d.scroller
        }, h(), {
          ownerState: i,
          children: [
            f.jsxs(Uw, {
              children: [
                !n.unstable_listView && f.jsx(Gw, {}),
                f.jsx(n.slots.pinnedRows, {
                  position: "top",
                  virtualScroller: u
                })
              ]
            }),
            f.jsx(Aw, b({}, a)),
            f.jsx(Jw, b({}, g(), {
              children: f.jsxs(ax, b({}, m(), {
                children: [
                  E,
                  f.jsx(n.slots.detailPanels, {
                    virtualScroller: u
                  })
                ]
              }))
            })),
            s && f.jsx(rx, {
              rowsLength: E.length
            }),
            f.jsx(Yw, {
              children: f.jsx(n.slots.pinnedRows, {
                position: "bottom",
                virtualScroller: u
              })
            })
          ]
        })),
        r && !n.unstable_listView && f.jsx(ha, b({
          position: "horizontal"
        }, v())),
        o && f.jsx(ha, b({
          position: "vertical"
        }, x())),
        e.children
      ]
    }));
  }
  function wx() {
    var _a2;
    const e = ie();
    return e.hideFooter ? null : f.jsx(e.slots.footer, b({}, (_a2 = e.slotProps) == null ? void 0 : _a2.footer));
  }
  let Gl;
  function ei() {
    return Gl === void 0 && document.createElement("div").focus({
      get preventScroll() {
        return Gl = true, false;
      }
    }), Gl;
  }
  function xx({ defaultSlots: e, slots: t }) {
    const n = t;
    if (!n || Object.keys(n).length === 0) return e;
    const o = b({}, e);
    return Object.keys(n).forEach((r) => {
      const l = r;
      n[l] !== void 0 && (o[l] = n[l]);
    }), o;
  }
  function vx(e) {
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
  function yx(e) {
    return c.useMemo(() => vx(e), [
      e
    ]);
  }
  const Sx = (e) => {
    const t = e.match(/^__row_group_by_columns_group_(.*)__$/);
    return t ? t[1] : null;
  }, Ix = (e) => e === nu || Sx(e) !== null, Gu = (e, t) => {
    if (e) if (t) {
      if (e === Oe.LEFT) return "right";
      if (e === Oe.RIGHT) return "left";
    } else {
      if (e === Oe.LEFT) return "left";
      if (e === Oe.RIGHT) return "right";
    }
  };
  function Sl(e, t, n, o) {
    const r = Gu(n, t);
    return !r || o === void 0 || (e[r] = o), e;
  }
  const Px = [
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
  ], Mx = [
    "changeReason",
    "unstable_updateValueOnRender"
  ];
  Oe.LEFT + "", jn.LEFT, Oe.RIGHT + "", jn.RIGHT, Oe.NONE + "", Oe.VIRTUAL + "";
  const kx = (e) => {
    const { align: t, showLeftBorder: n, showRightBorder: o, pinnedPosition: r, isEditable: l, isSelected: s, isSelectionMode: a, classes: i } = e, d = {
      root: [
        "cell",
        `cell--text${ce(t)}`,
        s && "selected",
        l && "cell--editable",
        n && "cell--withLeftBorder",
        o && "cell--withRightBorder",
        r === Oe.LEFT && "cell--pinnedLeft",
        r === Oe.RIGHT && "cell--pinnedRight",
        a && !l && "cell--selectionMode"
      ]
    };
    return me(d, He, i);
  }, Ex = Ve(function(t, n) {
    var _a2, _b2, _c2;
    const { column: o, row: r, rowId: l, rowNode: s, align: a, colIndex: i, width: d, className: u, style: p, colSpan: h, disableDragEvents: g, isNotVisible: m, pinnedOffset: x, pinnedPosition: v, showRightBorder: I, showLeftBorder: C, onClick: E, onDoubleClick: $, onMouseDown: k, onMouseUp: H, onMouseOver: A, onKeyDown: R, onKeyUp: y, onDragEnter: w, onDragOver: M } = t, O = ge(t, Px), D = an(), _ = ie(), F = At(), S = o.field, T = ar(D, ux, {
      rowId: l,
      field: S
    }), z = Zs().hooks.useCellAggregationResult(l, S), G = T ? Xe.Edit : Xe.View, j = D.current.getCellParamsForRow(l, S, r, {
      colDef: o,
      cellMode: G,
      rowNode: s,
      tabIndex: Q(D, () => {
        const he = Ks(D);
        return he && he.field === S && he.id === l ? 0 : -1;
      }),
      hasFocus: Q(D, () => {
        const he = Rt(D);
        return (he == null ? void 0 : he.id) === l && he.field === S;
      })
    });
    j.api = D.current, z && (j.value = z.value, j.formattedValue = o.valueFormatter ? o.valueFormatter(j.value, r, o, D) : j.value);
    const V = Q(D, () => D.current.unstable_applyPipeProcessors("isCellSelected", false, {
      id: l,
      field: S
    })), U = Q(D, Du), W = Q(D, Sw), { hasFocus: K, isEditable: B = false, value: te } = j, J = o.type === "actions" && ((_a2 = o.getActions) == null ? void 0 : _a2.call(o, D.current.getRowParams(l)).some((he) => !he.props.disabled)), ne = (G === "view" || !B) && !J ? j.tabIndex : -1, { classes: ae, getCellClassName: we } = _, re = [
      Q(D, () => D.current.unstable_applyPipeProcessors("cellClassName", [], {
        id: l,
        field: S
      }).filter(Boolean).join(" "))
    ];
    o.cellClassName && re.push(typeof o.cellClassName == "function" ? o.cellClassName(j) : o.cellClassName), o.display === "flex" && re.push(P["cell--flex"]), we && re.push(we(j));
    const ye = j.formattedValue ?? te, Z = c.useRef(null), Se = jt(n, Z), ee = c.useRef(null), ve = _.cellSelection ?? false, Ce = {
      align: a,
      showLeftBorder: C,
      showRightBorder: I,
      isEditable: B,
      classes: _.classes,
      pinnedPosition: v,
      isSelected: V,
      isSelectionMode: ve
    }, Fe = kx(Ce), Ne = c.useCallback((he) => (je) => {
      const Re = D.current.getCellParams(l, S || "");
      D.current.publishEvent(he, Re, je), H && H(je);
    }, [
      D,
      S,
      H,
      l
    ]), Be = c.useCallback((he) => (je) => {
      const Re = D.current.getCellParams(l, S || "");
      D.current.publishEvent(he, Re, je), k && k(je);
    }, [
      D,
      S,
      k,
      l
    ]), ze = c.useCallback((he, je) => (Re) => {
      if (!D.current.getRow(l)) return;
      const rt = D.current.getCellParams(l, S || "");
      D.current.publishEvent(he, rt, Re), je && je(Re);
    }, [
      D,
      S,
      l
    ]), $e = ((_b2 = U[l]) == null ? void 0 : _b2[S]) ?? false, Le = ((_c2 = W[l]) == null ? void 0 : _c2[S]) ?? 1, We = c.useMemo(() => {
      if (m) return {
        padding: 0,
        opacity: 0,
        width: 0,
        height: 0,
        border: 0
      };
      const he = Sl(b({
        "--width": `${d}px`
      }, p), F, v, x), je = v === Oe.LEFT, Re = v === Oe.RIGHT;
      return Le > 1 && (he.height = `calc(var(--height) * ${Le})`, he.zIndex = 10, (je || Re) && (he.zIndex = 40)), he;
    }, [
      d,
      m,
      p,
      x,
      v,
      F,
      Le
    ]);
    if (c.useEffect(() => {
      if (!K || G === Xe.Edit) return;
      const he = en(D.current.rootElementRef.current);
      if (Z.current && !Z.current.contains(he.activeElement)) {
        const je = Z.current.querySelector('[tabindex="0"]'), Re = ee.current || je || Z.current;
        if (ei()) Re.focus({
          preventScroll: true
        });
        else {
          const rt = D.current.getScrollPosition();
          Re.focus(), D.current.scroll(rt);
        }
      }
    }, [
      K,
      G,
      D
    ]), $e) return f.jsx("div", {
      "data-colindex": i,
      role: "presentation",
      style: b({
        width: "var(--width)"
      }, We)
    });
    let Ge = O.onFocus, fe, xe;
    if (T === null && o.renderCell && (fe = o.renderCell(j)), T !== null && o.renderEditCell) {
      const he = D.current.getRowWithUpdatedValues(l, o.field), je = ge(T, Mx), Re = o.valueFormatter ? o.valueFormatter(T.value, he, o, D) : j.formattedValue, rt = b({}, j, {
        row: he,
        formattedValue: Re
      }, je);
      fe = o.renderEditCell(rt), re.push(P["cell--editing"]), re.push(ae == null ? void 0 : ae["cell--editing"]);
    }
    if (fe === void 0) {
      const he = ye == null ? void 0 : ye.toString();
      fe = he, xe = he;
    }
    c.isValidElement(fe) && J && (fe = c.cloneElement(fe, {
      focusElementRef: ee
    }));
    const pe = g ? null : {
      onDragEnter: ze("cellDragEnter", w),
      onDragOver: ze("cellDragOver", M)
    };
    return f.jsx("div", b({
      className: de(Fe.root, re, u),
      role: "gridcell",
      "data-field": S,
      "data-colindex": i,
      "aria-colindex": i + 1,
      "aria-colspan": h,
      "aria-rowspan": Le,
      style: We,
      title: xe,
      tabIndex: ne,
      onClick: ze("cellClick", E),
      onDoubleClick: ze("cellDoubleClick", $),
      onMouseOver: ze("cellMouseOver", A),
      onMouseDown: Be("cellMouseDown"),
      onMouseUp: Ne("cellMouseUp"),
      onKeyDown: ze("cellKeyDown", R),
      onKeyUp: ze("cellKeyUp", y)
    }, pe, O, {
      onFocus: Ge,
      ref: Se,
      children: fe
    }));
  }), Fx = Tn(Ex), Tx = [
    "field",
    "type",
    "align",
    "width",
    "height",
    "empty",
    "style",
    "className"
  ], ma = "1.3em", Ox = "1.2em", ba = [
    40,
    80
  ], Dx = {
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
  }, Rx = (e) => {
    const { align: t, classes: n, empty: o } = e, r = {
      root: [
        "cell",
        "cellSkeleton",
        `cell--text${t ? ce(t) : "Left"}`,
        o && "cellEmpty"
      ]
    };
    return me(r, He, n);
  }, Hx = ub(12345);
  function $x(e) {
    const { field: t, type: n, align: o, width: r, height: l, empty: s = false, style: a, className: i } = e, d = ge(e, Tx), p = {
      classes: ie().classes,
      align: o,
      empty: s
    }, h = Rx(p), g = c.useMemo(() => {
      if (n === "boolean" || n === "actions") return {
        variant: "circular",
        width: ma,
        height: ma
      };
      const [x, v] = n ? Dx[n] ?? ba : ba;
      return {
        variant: "text",
        width: `${Math.round(Hx(x, v))}%`,
        height: Ox
      };
    }, [
      n
    ]);
    return f.jsx("div", b({
      "data-field": t,
      className: de(h.root, i),
      style: b({
        height: l,
        maxWidth: r,
        minWidth: r
      }, a)
    }, d, {
      children: !s && f.jsx(Ag, b({}, g))
    }));
  }
  const Lx = Tn($x);
  function jx(e) {
    return e.vars ? e.vars.palette.TableCell.border : e.palette.mode === "light" ? ys(lt(e.palette.divider, 1), 0.88) : Ss(lt(e.palette.divider, 1), 0.68);
  }
  const Ax = 10, _r = -5, co = 1, Ca = {
    width: 3,
    rx: 1.5,
    x: 10.5
  }, zx = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Gx = (e) => e.dimensions.hasScrollX && (!e.dimensions.hasScrollY || e.dimensions.scrollbarSize === 0), _x = se("div", {
    name: "MuiDataGrid",
    slot: "Root",
    overridesResolver: (e, t) => [
      t.root,
      {
        [`&.${P.autoHeight}`]: t.autoHeight
      },
      {
        [`&.${P.autosizing}`]: t.autosizing
      },
      {
        [`&.${P["root--densityStandard"]}`]: t["root--densityStandard"]
      },
      {
        [`&.${P["root--densityComfortable"]}`]: t["root--densityComfortable"]
      },
      {
        [`&.${P["root--densityCompact"]}`]: t["root--densityCompact"]
      },
      {
        [`&.${P["root--disableUserSelection"]}`]: t["root--disableUserSelection"]
      },
      {
        [`&.${P["root--noToolbar"]}`]: t["root--noToolbar"]
      },
      {
        [`&.${P.withVerticalBorder}`]: t.withVerticalBorder
      },
      {
        [`& .${P.actionsCell}`]: t.actionsCell
      },
      {
        [`& .${P.booleanCell}`]: t.booleanCell
      },
      {
        [`& .${P.cell}`]: t.cell
      },
      {
        [`& .${P["cell--editable"]}`]: t["cell--editable"]
      },
      {
        [`& .${P["cell--editing"]}`]: t["cell--editing"]
      },
      {
        [`& .${P["cell--flex"]}`]: t["cell--flex"]
      },
      {
        [`& .${P["cell--pinnedLeft"]}`]: t["cell--pinnedLeft"]
      },
      {
        [`& .${P["cell--pinnedRight"]}`]: t["cell--pinnedRight"]
      },
      {
        [`& .${P["cell--rangeBottom"]}`]: t["cell--rangeBottom"]
      },
      {
        [`& .${P["cell--rangeLeft"]}`]: t["cell--rangeLeft"]
      },
      {
        [`& .${P["cell--rangeRight"]}`]: t["cell--rangeRight"]
      },
      {
        [`& .${P["cell--rangeTop"]}`]: t["cell--rangeTop"]
      },
      {
        [`& .${P["cell--selectionMode"]}`]: t["cell--selectionMode"]
      },
      {
        [`& .${P["cell--textCenter"]}`]: t["cell--textCenter"]
      },
      {
        [`& .${P["cell--textLeft"]}`]: t["cell--textLeft"]
      },
      {
        [`& .${P["cell--textRight"]}`]: t["cell--textRight"]
      },
      {
        [`& .${P["cell--withLeftBorder"]}`]: t["cell--withLeftBorder"]
      },
      {
        [`& .${P["cell--withRightBorder"]}`]: t["cell--withRightBorder"]
      },
      {
        [`& .${P.cellCheckbox}`]: t.cellCheckbox
      },
      {
        [`& .${P.cellEmpty}`]: t.cellEmpty
      },
      {
        [`& .${P.cellOffsetLeft}`]: t.cellOffsetLeft
      },
      {
        [`& .${P.cellSkeleton}`]: t.cellSkeleton
      },
      {
        [`& .${P.checkboxInput}`]: t.checkboxInput
      },
      {
        [`& .${P.columnHeader}`]: t.columnHeader
      },
      {
        [`& .${P["columnHeader--alignCenter"]}`]: t["columnHeader--alignCenter"]
      },
      {
        [`& .${P["columnHeader--alignLeft"]}`]: t["columnHeader--alignLeft"]
      },
      {
        [`& .${P["columnHeader--alignRight"]}`]: t["columnHeader--alignRight"]
      },
      {
        [`& .${P["columnHeader--dragging"]}`]: t["columnHeader--dragging"]
      },
      {
        [`& .${P["columnHeader--emptyGroup"]}`]: t["columnHeader--emptyGroup"]
      },
      {
        [`& .${P["columnHeader--filledGroup"]}`]: t["columnHeader--filledGroup"]
      },
      {
        [`& .${P["columnHeader--filtered"]}`]: t["columnHeader--filtered"]
      },
      {
        [`& .${P["columnHeader--last"]}`]: t["columnHeader--last"]
      },
      {
        [`& .${P["columnHeader--lastUnpinned"]}`]: t["columnHeader--lastUnpinned"]
      },
      {
        [`& .${P["columnHeader--moving"]}`]: t["columnHeader--moving"]
      },
      {
        [`& .${P["columnHeader--numeric"]}`]: t["columnHeader--numeric"]
      },
      {
        [`& .${P["columnHeader--pinnedLeft"]}`]: t["columnHeader--pinnedLeft"]
      },
      {
        [`& .${P["columnHeader--pinnedRight"]}`]: t["columnHeader--pinnedRight"]
      },
      {
        [`& .${P["columnHeader--siblingFocused"]}`]: t["columnHeader--siblingFocused"]
      },
      {
        [`& .${P["columnHeader--sortable"]}`]: t["columnHeader--sortable"]
      },
      {
        [`& .${P["columnHeader--sorted"]}`]: t["columnHeader--sorted"]
      },
      {
        [`& .${P["columnHeader--withLeftBorder"]}`]: t["columnHeader--withLeftBorder"]
      },
      {
        [`& .${P["columnHeader--withRightBorder"]}`]: t["columnHeader--withRightBorder"]
      },
      {
        [`& .${P.columnHeaderCheckbox}`]: t.columnHeaderCheckbox
      },
      {
        [`& .${P.columnHeaderDraggableContainer}`]: t.columnHeaderDraggableContainer
      },
      {
        [`& .${P.columnHeaderTitleContainer}`]: t.columnHeaderTitleContainer
      },
      {
        [`& .${P.columnHeaderTitleContainerContent}`]: t.columnHeaderTitleContainerContent
      },
      {
        [`& .${P.columnSeparator}`]: t.columnSeparator
      },
      {
        [`& .${P["columnSeparator--resizable"]}`]: t["columnSeparator--resizable"]
      },
      {
        [`& .${P["columnSeparator--resizing"]}`]: t["columnSeparator--resizing"]
      },
      {
        [`& .${P["columnSeparator--sideLeft"]}`]: t["columnSeparator--sideLeft"]
      },
      {
        [`& .${P["columnSeparator--sideRight"]}`]: t["columnSeparator--sideRight"]
      },
      {
        [`& .${P["container--bottom"]}`]: t["container--bottom"]
      },
      {
        [`& .${P["container--top"]}`]: t["container--top"]
      },
      {
        [`& .${P.detailPanelToggleCell}`]: t.detailPanelToggleCell
      },
      {
        [`& .${P["detailPanelToggleCell--expanded"]}`]: t["detailPanelToggleCell--expanded"]
      },
      {
        [`& .${P.editBooleanCell}`]: t.editBooleanCell
      },
      {
        [`& .${P.filterIcon}`]: t.filterIcon
      },
      {
        [`& .${P["filler--borderBottom"]}`]: t["filler--borderBottom"]
      },
      {
        [`& .${P["filler--pinnedLeft"]}`]: t["filler--pinnedLeft"]
      },
      {
        [`& .${P["filler--pinnedRight"]}`]: t["filler--pinnedRight"]
      },
      {
        [`& .${P.groupingCriteriaCell}`]: t.groupingCriteriaCell
      },
      {
        [`& .${P.groupingCriteriaCellLoadingContainer}`]: t.groupingCriteriaCellLoadingContainer
      },
      {
        [`& .${P.groupingCriteriaCellToggle}`]: t.groupingCriteriaCellToggle
      },
      {
        [`& .${P.headerFilterRow}`]: t.headerFilterRow
      },
      {
        [`& .${P.iconSeparator}`]: t.iconSeparator
      },
      {
        [`& .${P.menuIcon}`]: t.menuIcon
      },
      {
        [`& .${P.menuIconButton}`]: t.menuIconButton
      },
      {
        [`& .${P.menuList}`]: t.menuList
      },
      {
        [`& .${P.menuOpen}`]: t.menuOpen
      },
      {
        [`& .${P.overlayWrapperInner}`]: t.overlayWrapperInner
      },
      {
        [`& .${P.pinnedRows}`]: t.pinnedRows
      },
      {
        [`& .${P["pinnedRows--bottom"]}`]: t["pinnedRows--bottom"]
      },
      {
        [`& .${P["pinnedRows--top"]}`]: t["pinnedRows--top"]
      },
      {
        [`& .${P.row}`]: t.row
      },
      {
        [`& .${P["row--borderBottom"]}`]: t["row--borderBottom"]
      },
      {
        [`& .${P["row--detailPanelExpanded"]}`]: t["row--detailPanelExpanded"]
      },
      {
        [`& .${P["row--dragging"]}`]: t["row--dragging"]
      },
      {
        [`& .${P["row--dynamicHeight"]}`]: t["row--dynamicHeight"]
      },
      {
        [`& .${P["row--editable"]}`]: t["row--editable"]
      },
      {
        [`& .${P["row--editing"]}`]: t["row--editing"]
      },
      {
        [`& .${P["row--firstVisible"]}`]: t["row--firstVisible"]
      },
      {
        [`& .${P["row--lastVisible"]}`]: t["row--lastVisible"]
      },
      {
        [`& .${P.rowReorderCell}`]: t.rowReorderCell
      },
      {
        [`& .${P["rowReorderCell--draggable"]}`]: t["rowReorderCell--draggable"]
      },
      {
        [`& .${P.rowReorderCellContainer}`]: t.rowReorderCellContainer
      },
      {
        [`& .${P.rowReorderCellPlaceholder}`]: t.rowReorderCellPlaceholder
      },
      {
        [`& .${P.rowSkeleton}`]: t.rowSkeleton
      },
      {
        [`& .${P.scrollbar}`]: t.scrollbar
      },
      {
        [`& .${P["scrollbar--horizontal"]}`]: t["scrollbar--horizontal"]
      },
      {
        [`& .${P["scrollbar--vertical"]}`]: t["scrollbar--vertical"]
      },
      {
        [`& .${P.scrollbarFiller}`]: t.scrollbarFiller
      },
      {
        [`& .${P["scrollbarFiller--borderBottom"]}`]: t["scrollbarFiller--borderBottom"]
      },
      {
        [`& .${P["scrollbarFiller--borderTop"]}`]: t["scrollbarFiller--borderTop"]
      },
      {
        [`& .${P["scrollbarFiller--header"]}`]: t["scrollbarFiller--header"]
      },
      {
        [`& .${P["scrollbarFiller--pinnedRight"]}`]: t["scrollbarFiller--pinnedRight"]
      },
      {
        [`& .${P.sortIcon}`]: t.sortIcon
      },
      {
        [`& .${P.treeDataGroupingCell}`]: t.treeDataGroupingCell
      },
      {
        [`& .${P.treeDataGroupingCellLoadingContainer}`]: t.treeDataGroupingCellLoadingContainer
      },
      {
        [`& .${P.treeDataGroupingCellToggle}`]: t.treeDataGroupingCellToggle
      },
      {
        [`& .${P.withBorderColor}`]: t.withBorderColor
      }
    ]
  })(({ theme: e }) => {
    var _a2, _b2;
    const t = an(), n = Q(t, Gx), o = jx(e), r = e.shape.borderRadius, l = e.vars ? e.vars.palette.background.default : ((_a2 = e.mixins.MuiDataGrid) == null ? void 0 : _a2.containerBackground) ?? e.palette.background.default, s = ((_b2 = e.mixins.MuiDataGrid) == null ? void 0 : _b2.pinnedBackground) ?? l, a = e.vars ? `rgba(${e.vars.palette.background.defaultChannel} / ${e.vars.palette.action.disabledOpacity})` : lt(e.palette.background.default, e.palette.action.disabledOpacity), i = (e.vars || e).palette.action.hoverOpacity, d = (e.vars || e).palette.action.hover, u = (e.vars || e).palette.action.selectedOpacity, p = e.vars ? `calc(${i} + ${u})` : i + u, h = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${u})` : lt(e.palette.primary.main, u), g = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${p})` : lt(e.palette.primary.main, p), m = e.vars ? Bx : Vx, x = (R) => ({
      [`& .${P["cell--pinnedLeft"]}, & .${P["cell--pinnedRight"]}`]: {
        backgroundColor: R,
        "&.Mui-selected": {
          backgroundColor: m(R, h, u),
          "&:hover": {
            backgroundColor: m(R, h, p)
          }
        }
      }
    }), v = m(s, d, i), I = x(v), C = m(s, h, u), E = x(C), $ = m(s, g, p), k = x($), H = {
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
      [`.${P.main} > *:first-child${zx}`]: {
        borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
        borderTopRightRadius: "var(--unstable_DataGrid-radius)"
      },
      [`&.${P.autoHeight}`]: {
        height: "auto"
      },
      [`&.${P.autosizing}`]: {
        [`& .${P.columnHeaderTitleContainerContent} > *`]: {
          overflow: "visible !important"
        },
        "@media (hover: hover)": {
          [`& .${P.menuIcon}`]: {
            width: "0 !important",
            visibility: "hidden !important"
          }
        },
        [`& .${P.cell}`]: {
          overflow: "visible !important",
          whiteSpace: "nowrap",
          minWidth: "max-content !important",
          maxWidth: "max-content !important"
        },
        [`& .${P.groupingCriteriaCell}`]: {
          width: "unset"
        },
        [`& .${P.treeDataGroupingCell}`]: {
          width: "unset"
        }
      },
      [`& .${P.columnHeader}, & .${P.cell}`]: {
        WebkitTapHighlightColor: "transparent",
        padding: "0 10px",
        boxSizing: "border-box"
      },
      [`& .${P.columnHeader}:focus-within, & .${P.cell}:focus-within`]: {
        outline: `solid ${e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / 0.5)` : lt(e.palette.primary.main, 0.5)} ${co}px`,
        outlineOffset: co * -1
      },
      [`& .${P.columnHeader}:focus, & .${P.cell}:focus`]: {
        outline: `solid ${e.palette.primary.main} ${co}px`,
        outlineOffset: co * -1
      },
      [`& .${P.columnHeader}:focus,
      & .${P["columnHeader--withLeftBorder"]},
      & .${P["columnHeader--withRightBorder"]},
      & .${P["columnHeader--siblingFocused"]},
      & .${P["virtualScroller--hasScrollX"]} .${P["columnHeader--lastUnpinned"]},
      & .${P["virtualScroller--hasScrollX"]} .${P["columnHeader--last"]}
      `]: {
        [`& .${P.columnSeparator}`]: {
          opacity: 0
        },
        "@media (hover: none)": {
          [`& .${P["columnSeparator--resizable"]}`]: {
            opacity: 1
          }
        },
        [`& .${P["columnSeparator--resizable"]}:hover`]: {
          opacity: 1
        }
      },
      [`&.${P["root--noToolbar"]} [aria-rowindex="1"] [aria-colindex="1"]`]: {
        borderTopLeftRadius: "calc(var(--unstable_DataGrid-radius) - 1px)"
      },
      [`&.${P["root--noToolbar"]} [aria-rowindex="1"] .${P["columnHeader--last"]}`]: {
        borderTopRightRadius: n ? "calc(var(--unstable_DataGrid-radius) - 1px)" : void 0
      },
      [`& .${P.columnHeaderCheckbox}, & .${P.cellCheckbox}`]: {
        padding: 0,
        justifyContent: "center",
        alignItems: "center"
      },
      [`& .${P.columnHeader}`]: {
        position: "relative",
        display: "flex",
        alignItems: "center"
      },
      [`& .${P["virtualScroller--hasScrollX"]} .${P["columnHeader--last"]}`]: {
        overflow: "hidden"
      },
      [`& .${P["columnHeader--sorted"]} .${P.iconButtonContainer}, & .${P["columnHeader--filtered"]} .${P.iconButtonContainer}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${P.columnHeader}:not(.${P["columnHeader--sorted"]}) .${P.sortButton}`]: {
        opacity: 0,
        transition: e.transitions.create([
          "opacity"
        ], {
          duration: e.transitions.duration.shorter
        })
      },
      [`& .${P.columnHeaderTitleContainer}`]: {
        display: "flex",
        alignItems: "center",
        gap: e.spacing(0.25),
        minWidth: 0,
        flex: 1,
        whiteSpace: "nowrap",
        overflow: "hidden"
      },
      [`& .${P.columnHeaderTitleContainerContent}`]: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      },
      [`& .${P["columnHeader--filledGroup"]} .${P.columnHeaderTitleContainer}`]: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        boxSizing: "border-box"
      },
      [`& .${P.sortIcon}, & .${P.filterIcon}`]: {
        fontSize: "inherit"
      },
      [`& .${P["columnHeader--sortable"]}`]: {
        cursor: "pointer"
      },
      [`& .${P["columnHeader--alignCenter"]} .${P.columnHeaderTitleContainer}`]: {
        justifyContent: "center"
      },
      [`& .${P["columnHeader--alignRight"]} .${P.columnHeaderDraggableContainer}, & .${P["columnHeader--alignRight"]} .${P.columnHeaderTitleContainer}`]: {
        flexDirection: "row-reverse"
      },
      [`& .${P["columnHeader--alignCenter"]} .${P.menuIcon}`]: {
        marginLeft: "auto"
      },
      [`& .${P["columnHeader--alignRight"]} .${P.menuIcon}`]: {
        marginRight: "auto",
        marginLeft: -5
      },
      [`& .${P["columnHeader--moving"]}`]: {
        backgroundColor: (e.vars || e).palette.action.hover
      },
      [`& .${P["columnHeader--pinnedLeft"]}, & .${P["columnHeader--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 40,
        background: "var(--DataGrid-pinnedBackground)"
      },
      [`& .${P.columnSeparator}`]: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: Ax,
        color: o
      },
      [`& .${P.columnHeaders}`]: {
        width: "var(--DataGrid-rowWidth)"
      },
      "@media (hover: hover)": {
        [`& .${P.columnHeader}:hover`]: {
          [`& .${P.menuIcon}`]: {
            width: "auto",
            visibility: "visible"
          },
          [`& .${P.iconButtonContainer}`]: {
            visibility: "visible",
            width: "auto"
          }
        },
        [`& .${P.columnHeader}:not(.${P["columnHeader--sorted"]}):hover .${P.sortButton}`]: {
          opacity: 0.5
        }
      },
      "@media (hover: none)": {
        [`& .${P.columnHeader} .${P.menuIcon}`]: {
          width: "auto",
          visibility: "visible"
        },
        [`& .${P.columnHeader}:focus,
        & .${P["columnHeader--siblingFocused"]}`]: {
          [`.${P["columnSeparator--resizable"]}`]: {
            color: (e.vars || e).palette.primary.main
          }
        }
      },
      [`& .${P["columnSeparator--sideLeft"]}`]: {
        left: _r
      },
      [`& .${P["columnSeparator--sideRight"]}`]: {
        right: _r
      },
      [`& .${P["columnHeader--withRightBorder"]} .${P["columnSeparator--sideLeft"]}`]: {
        left: _r - 0.5
      },
      [`& .${P["columnHeader--withRightBorder"]} .${P["columnSeparator--sideRight"]}`]: {
        right: _r - 0.5
      },
      [`& .${P["columnSeparator--resizable"]}`]: {
        cursor: "col-resize",
        touchAction: "none",
        [`&.${P["columnSeparator--resizing"]}`]: {
          color: (e.vars || e).palette.primary.main
        },
        "@media (hover: none)": {
          [`& .${P.iconSeparator} rect`]: Ca
        },
        "@media (hover: hover)": {
          "&:hover": {
            color: (e.vars || e).palette.primary.main,
            [`& .${P.iconSeparator} rect`]: Ca
          }
        },
        "& svg": {
          pointerEvents: "none"
        }
      },
      [`& .${P.iconSeparator}`]: {
        color: "inherit",
        transition: e.transitions.create([
          "color",
          "width"
        ], {
          duration: e.transitions.duration.shortest
        })
      },
      [`& .${P.menuIcon}`]: {
        width: 0,
        visibility: "hidden",
        fontSize: 20,
        marginRight: -5,
        display: "flex",
        alignItems: "center"
      },
      [`.${P.menuOpen}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${P.headerFilterRow}`]: {
        [`& .${P.columnHeader}`]: {
          boxSizing: "border-box",
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        }
      },
      [`& .${P["row--borderBottom"]} .${P.columnHeader},
      & .${P["row--borderBottom"]} .${P.filler},
      & .${P["row--borderBottom"]} .${P.scrollbarFiller}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${P["row--borderBottom"]} .${P.cell}`]: {
        borderBottom: "1px solid var(--rowBorderColor)"
      },
      [`.${P.row}`]: {
        display: "flex",
        width: "var(--DataGrid-rowWidth)",
        breakInside: "avoid",
        "--rowBorderColor": "var(--DataGrid-rowBorderColor)",
        [`&.${P["row--firstVisible"]}`]: {
          "--rowBorderColor": "transparent"
        },
        "&:hover": {
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${P.rowSkeleton}:hover`]: {
          backgroundColor: "transparent"
        },
        "&.Mui-selected": H
      },
      [`& .${P["container--top"]}, & .${P["container--bottom"]}`]: {
        "[role=row]": {
          background: "var(--DataGrid-containerBackground)"
        }
      },
      [`& .${P.cell}`]: {
        flex: "0 0 auto",
        height: "var(--height)",
        width: "var(--width)",
        lineHeight: "calc(var(--height) - 1px)",
        boxSizing: "border-box",
        borderTop: "1px solid var(--rowBorderColor)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        "&.Mui-selected": H
      },
      [`& .${P["virtualScrollerContent--overflowed"]} .${P["row--lastVisible"]} .${P.cell}`]: {
        borderTopColor: "transparent"
      },
      [`& .${P["pinnedRows--top"]} :first-of-type`]: {
        [`& .${P.cell}, .${P.scrollbarFiller}`]: {
          borderTop: "none"
        }
      },
      [`&.${P["root--disableUserSelection"]}`]: {
        userSelect: "none"
      },
      [`& .${P["row--dynamicHeight"]} > .${P.cell}`]: {
        whiteSpace: "initial",
        lineHeight: "inherit"
      },
      [`& .${P.cellEmpty}`]: {
        flex: 1,
        padding: 0,
        height: "unset"
      },
      [`& .${P.cell}.${P["cell--selectionMode"]}`]: {
        cursor: "default"
      },
      [`& .${P.cell}.${P["cell--editing"]}`]: {
        padding: 1,
        display: "flex",
        boxShadow: e.shadows[2],
        backgroundColor: (e.vars || e).palette.background.paper,
        "&:focus-within": {
          outline: `${co}px solid ${(e.vars || e).palette.primary.main}`,
          outlineOffset: co * -1
        }
      },
      [`& .${P["row--editing"]}`]: {
        boxShadow: e.shadows[2]
      },
      [`& .${P["row--editing"]} .${P.cell}`]: {
        boxShadow: e.shadows[0],
        backgroundColor: (e.vars || e).palette.background.paper
      },
      [`& .${P.editBooleanCell}`]: {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      [`& .${P.booleanCell}[data-value="true"]`]: {
        color: (e.vars || e).palette.text.secondary
      },
      [`& .${P.booleanCell}[data-value="false"]`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`& .${P.actionsCell}`]: {
        display: "inline-flex",
        alignItems: "center",
        gridGap: e.spacing(1)
      },
      [`& .${P.rowReorderCell}`]: {
        display: "inline-flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${P["rowReorderCell--draggable"]}`]: {
        cursor: "move",
        opacity: 1
      },
      [`& .${P.rowReorderCellContainer}`]: {
        padding: 0,
        display: "flex",
        alignItems: "stretch"
      },
      [`.${P.withBorderColor}`]: {
        borderColor: o
      },
      [`& .${P["cell--withLeftBorder"]}, & .${P["columnHeader--withLeftBorder"]}`]: {
        borderLeftColor: "var(--DataGrid-rowBorderColor)",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid"
      },
      [`& .${P["cell--withRightBorder"]}, & .${P["columnHeader--withRightBorder"]}`]: {
        borderRightColor: "var(--DataGrid-rowBorderColor)",
        borderRightWidth: "1px",
        borderRightStyle: "solid"
      },
      [`& .${P["cell--flex"]}`]: {
        display: "flex",
        alignItems: "center",
        lineHeight: "inherit"
      },
      [`& .${P["cell--textLeft"]}`]: {
        textAlign: "left",
        justifyContent: "flex-start"
      },
      [`& .${P["cell--textRight"]}`]: {
        textAlign: "right",
        justifyContent: "flex-end"
      },
      [`& .${P["cell--textCenter"]}`]: {
        textAlign: "center",
        justifyContent: "center"
      },
      [`& .${P["cell--pinnedLeft"]}, & .${P["cell--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 30,
        background: "var(--DataGrid-pinnedBackground)",
        "&.Mui-selected": {
          backgroundColor: C
        }
      },
      [`& .${P.virtualScrollerContent} .${P.row}`]: {
        "&:hover": I,
        "&.Mui-selected": E,
        "&.Mui-selected:hover": k
      },
      [`& .${P.cellOffsetLeft}`]: {
        flex: "0 0 auto",
        display: "inline-block"
      },
      [`& .${P.cellSkeleton}`]: {
        flex: "0 0 auto",
        height: "100%",
        display: "inline-flex",
        alignItems: "center"
      },
      [`& .${P.columnHeaderDraggableContainer}`]: {
        display: "flex",
        width: "100%",
        height: "100%"
      },
      [`& .${P.rowReorderCellPlaceholder}`]: {
        display: "none"
      },
      [`& .${P["columnHeader--dragging"]}, & .${P["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${P["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity,
        [`& .${P.rowReorderCellPlaceholder}`]: {
          display: "flex"
        }
      },
      [`& .${P.treeDataGroupingCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${P.treeDataGroupingCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`& .${P.treeDataGroupingCellLoadingContainer}, .${P.groupingCriteriaCellLoadingContainer}`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      [`& .${P.groupingCriteriaCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${P.groupingCriteriaCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`.${P.scrollbarFiller}`]: {
        minWidth: "calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
        alignSelf: "stretch",
        [`&.${P["scrollbarFiller--borderTop"]}`]: {
          borderTop: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${P["scrollbarFiller--borderBottom"]}`]: {
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${P["scrollbarFiller--pinnedRight"]}`]: {
          backgroundColor: "var(--DataGrid-pinnedBackground)",
          position: "sticky",
          right: 0
        }
      },
      [`& .${P.filler}`]: {
        flex: "1 0 auto"
      },
      [`& .${P["filler--borderBottom"]}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${P["main--hasSkeletonLoadingOverlay"]}`]: {
        [`& .${P.virtualScrollerContent}`]: {
          position: "fixed",
          visibility: "hidden"
        },
        [`& .${P["scrollbar--vertical"]}, & .${P.pinnedRows}, & .${P.virtualScroller} > .${P.filler}`]: {
          display: "none"
        }
      }
    });
  });
  function Vx(e, t, n, o = 1) {
    const r = (i, d) => Math.round((i ** (1 / o) * (1 - n) + d ** (1 / o) * n) ** o), l = fi(e), s = fi(t), a = [
      r(l.values[0], s.values[0]),
      r(l.values[1], s.values[1]),
      r(l.values[2], s.values[2])
    ];
    return Sd({
      type: "rgb",
      values: a
    });
  }
  const Nx = (e) => `rgb(from ${e} r g b / 1)`;
  function Bx(e, t, n) {
    return `color-mix(in srgb,${e}, ${Nx(t)} calc(${n} * 100%))`;
  }
  const Wx = () => () => {
  }, Ux = () => false, Kx = () => true, qx = () => $s.useSyncExternalStore(Wx, Ux, Kx);
  function Yx() {
    var _a2, _b2;
    const e = Ee(), t = Q(e, on), n = ie(), o = Q(e, dr), r = e.current.unstable_applyPipeProcessors("preferencePanel", null, o.openedPanelValue ?? Zn.filters);
    return f.jsx(n.slots.panel, b({
      as: n.slots.basePopper,
      open: t.length > 0 && o.open,
      id: o.panelId,
      "aria-labelledby": o.labelId
    }, (_a2 = n.slotProps) == null ? void 0 : _a2.panel, (_b2 = n.slotProps) == null ? void 0 : _b2.basePopper, {
      children: r
    }));
  }
  function Xx() {
    var _a2;
    const e = ie();
    return f.jsxs(c.Fragment, {
      children: [
        f.jsx(Yx, {}),
        e.slots.toolbar && f.jsx(e.slots.toolbar, b({}, (_a2 = e.slotProps) == null ? void 0 : _a2.toolbar))
      ]
    });
  }
  const Qx = [
    "className",
    "children"
  ], Jx = (e, t) => {
    const { autoHeight: n, classes: o, showCellVerticalBorder: r } = e, l = {
      root: [
        "root",
        n && "autoHeight",
        `root--density${ce(t)}`,
        e.slots.toolbar === null && "root--noToolbar",
        "withBorderColor",
        r && "withVerticalBorder"
      ]
    };
    return me(l, He, o);
  }, Zx = Ve(function(t, n) {
    const o = ie(), { className: r, children: l } = t, s = ge(t, Qx), a = an(), i = Q(a, ho), d = a.current.rootElementRef, u = c.useCallback((x) => {
      x !== null && a.current.publishEvent("rootMount", x);
    }, [
      a
    ]), p = jt(d, n, u), h = o, g = Jx(h, i);
    return qx() ? null : f.jsxs(_x, b({
      className: de(g.root, r),
      ownerState: h
    }, s, {
      ref: p,
      children: [
        f.jsx(Xx, {}),
        f.jsx(Cx, {
          children: l
        }),
        f.jsx(wx, {})
      ]
    }));
  }), ev = Tn(Zx), tv = [
    "className"
  ], nv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "footerContainer",
        "withBorderColor"
      ]
    }, He, t);
  }, ov = Je("div", {
    name: "MuiDataGrid",
    slot: "FooterContainer",
    overridesResolver: (e, t) => t.footerContainer
  })({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 52,
    borderTop: "1px solid"
  }), rv = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, tv), l = ie(), s = nv(l);
    return f.jsx(ov, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), lv = [
    "className"
  ], sv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "overlay"
      ]
    }, He, t);
  }, iv = Je("div", {
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
  }), ti = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, lv), l = ie(), s = sv(l);
    return f.jsx(iv, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), av = (e) => {
    const { classes: t, open: n } = e;
    return me({
      root: [
        "menuIcon",
        n && "menuOpen"
      ],
      button: [
        "menuIconButton"
      ]
    }, He, t);
  }, cv = c.memo((e) => {
    var _a2, _b2;
    const { colDef: t, open: n, columnMenuId: o, columnMenuButtonId: r, iconButtonRef: l } = e, s = Ee(), a = ie(), i = b({}, e, {
      classes: a.classes
    }), d = av(i), u = c.useCallback((h) => {
      h.preventDefault(), h.stopPropagation(), s.current.toggleColumnMenu(t.field);
    }, [
      s,
      t.field
    ]), p = t.headerName ?? t.field;
    return f.jsx("div", {
      className: d.root,
      children: f.jsx(a.slots.baseTooltip, b({
        title: s.current.getLocaleText("columnMenuLabel"),
        enterDelay: 1e3
      }, (_a2 = a.slotProps) == null ? void 0 : _a2.baseTooltip, {
        children: f.jsx(a.slots.baseIconButton, b({
          ref: l,
          tabIndex: -1,
          className: d.button,
          "aria-label": s.current.getLocaleText("columnMenuAriaLabel")(p),
          size: "small",
          onClick: u,
          "aria-haspopup": "menu",
          "aria-expanded": n,
          "aria-controls": n ? o : void 0,
          id: r
        }, (_b2 = a.slotProps) == null ? void 0 : _b2.baseIconButton, {
          children: f.jsx(a.slots.columnMenuIcon, {
            fontSize: "inherit"
          })
        }))
      }))
    });
  });
  function uv({ columnMenuId: e, columnMenuButtonId: t, ContentComponent: n, contentComponentProps: o, field: r, open: l, target: s, onExited: a }) {
    const i = Ee(), d = i.current.getColumn(r), u = Ke((p) => {
      p && (p.stopPropagation(), s == null ? void 0 : s.contains(p.target)) || i.current.hideColumnMenu();
    });
    return !s || !d ? null : f.jsx(_s, {
      placement: `bottom-${d.align === "right" ? "start" : "end"}`,
      open: l,
      target: s,
      onClose: u,
      onExited: a,
      children: f.jsx(n, b({
        colDef: d,
        hideMenu: u,
        open: l,
        id: e,
        labelledby: t
      }, o))
    });
  }
  function dv(e) {
    return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
  }
  function sl(e, t) {
    return e.closest(`.${t}`);
  }
  function Dn(e) {
    return e.replace(/["\\]/g, "\\$&");
  }
  function pv(e, t) {
    return e.querySelector(`[role="columnheader"][data-field="${Dn(t)}"]`);
  }
  function _u(e) {
    return `.${P.row}[data-id="${Dn(String(e))}"]`;
  }
  function fv(e, t) {
    return e.querySelector(_u(t));
  }
  function gv(e, { id: t, field: n }) {
    const o = _u(t), r = `.${P.cell}[data-field="${Dn(n)}"]`, l = `${o} ${r}`;
    return e.querySelector(l);
  }
  function Mr(e) {
    return e.target.nodeType === 1 && !e.currentTarget.contains(e.target);
  }
  function hv(e) {
    return e.getAttribute("data-field");
  }
  function mv(e, t) {
    return e.querySelector(`[data-field="${Dn(t)}"]`);
  }
  function bv(e) {
    return e.getAttribute("data-fields").slice(2, -2).split("-|-");
  }
  function Cv(e, t) {
    return Array.from(e.querySelectorAll(`[data-fields*="|-${Dn(t)}-|"]`) ?? []);
  }
  function wv(e, t) {
    var _a2;
    if (!sl(e, P.root)) throw new Error("MUI X: The root element is not found.");
    const o = e.getAttribute("aria-colindex");
    if (!o) return [];
    const r = Number(o) - 1, l = [];
    return ((_a2 = t.virtualScrollerRef) == null ? void 0 : _a2.current) ? (Bu(t).forEach((s) => {
      const a = s.getAttribute("data-id");
      if (!a) return;
      let i = r;
      const d = t.unstable_getCellColSpanInfo(a, r);
      d && d.spannedByColSpan && (i = d.leftVisibleCellIndex);
      const u = s.querySelector(`[data-colindex="${i}"]`);
      u && l.push(u);
    }), l) : [];
  }
  function wa(e, t) {
    return e.rootElementRef.current.querySelector(`.${P[t]}`);
  }
  const Vu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    if (t === null) return [];
    const r = [];
    return Bu(e).forEach((l) => {
      l.getAttribute("data-id") && l.querySelectorAll(`.${P[n === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((a) => {
        const i = Go(a);
        i !== null && o(i) && r.push(a);
      });
    }), r;
  };
  function xv(e, t, n) {
    const o = Go(t);
    return Vu({
      api: e,
      colIndex: o,
      position: n ? "right" : "left",
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function vv(e, t, n) {
    const o = Go(t);
    return Vu({
      api: e,
      colIndex: o,
      position: n ? "left" : "right",
      filterFn: (r) => n ? r > o : r < o
    });
  }
  const Nu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    var _a2;
    if (!((_a2 = e.columnHeadersContainerRef) == null ? void 0 : _a2.current)) return [];
    if (t === null) return [];
    const r = [];
    return e.columnHeadersContainerRef.current.querySelectorAll(`.${P[n === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((l) => {
      const s = Go(l);
      s !== null && o(s, l) && r.push(l);
    }), r;
  };
  function yv(e, t, n) {
    const o = Go(t);
    return Nu({
      api: e,
      position: n ? "right" : "left",
      colIndex: o,
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function Sv(e, t, n) {
    const o = Go(t);
    return Nu({
      api: e,
      position: n ? "left" : "right",
      colIndex: o,
      filterFn: (r, l) => l.classList.contains(P["columnHeader--last"]) ? false : n ? r > o : r < o
    });
  }
  function Iv(e, t) {
    return e.columnHeadersContainerRef.current.querySelector(`:scope > div > [data-field="${Dn(t)}"][role="columnheader"]`);
  }
  function Pv(e, t) {
    const n = e.virtualScrollerRef.current;
    return Array.from(n.querySelectorAll(`:scope > div > div > div > [data-field="${Dn(t)}"][role="gridcell"]`));
  }
  function Bu(e) {
    return e.virtualScrollerRef.current.querySelectorAll(`:scope > div > div > .${P.row}`);
  }
  function Go(e) {
    const t = e.getAttribute("aria-colindex");
    return t ? Number(t) - 1 : null;
  }
  const Mv = [
    "className",
    "aria-label"
  ], kv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "columnHeaderTitle"
      ]
    }, He, t);
  }, Ev = Je("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderTitle",
    overridesResolver: (e, t) => t.columnHeaderTitle
  })({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "var(--unstable_DataGrid-headWeight)",
    lineHeight: "normal"
  }), Fv = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, Mv), l = ie(), s = kv(l);
    return f.jsx(Ev, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  });
  function Tv(e) {
    var _a2;
    const { label: t, description: n } = e, o = ie(), r = c.useRef(null), [l, s] = c.useState(""), a = c.useCallback(() => {
      if (!n && (r == null ? void 0 : r.current)) {
        const i = dv(r.current);
        s(i ? t : "");
      }
    }, [
      n,
      t
    ]);
    return f.jsx(o.slots.baseTooltip, b({
      title: n || l
    }, (_a2 = o.slotProps) == null ? void 0 : _a2.baseTooltip, {
      children: f.jsx(Fv, {
        onMouseOver: a,
        ref: r,
        children: t
      })
    }));
  }
  const Ov = [
    "resizable",
    "resizing",
    "height",
    "side"
  ];
  var ni = (function(e) {
    return e.Left = "left", e.Right = "right", e;
  })(ni || {});
  const Dv = (e) => {
    const { resizable: t, resizing: n, classes: o, side: r } = e, l = {
      root: [
        "columnSeparator",
        t && "columnSeparator--resizable",
        n && "columnSeparator--resizing",
        r && `columnSeparator--side${ce(r)}`
      ],
      icon: [
        "iconSeparator"
      ]
    };
    return me(l, He, o);
  };
  function Rv(e) {
    const { height: t, side: n = ni.Right } = e, o = ge(e, Ov), r = ie(), l = b({}, e, {
      side: n,
      classes: r.classes
    }), s = Dv(l), a = c.useCallback((i) => {
      i.preventDefault(), i.stopPropagation();
    }, []);
    return f.jsx("div", b({
      className: s.root,
      style: {
        minHeight: t
      }
    }, o, {
      onClick: a,
      children: f.jsx(r.slots.columnResizeIcon, {
        className: s.icon
      })
    }));
  }
  const Hv = c.memo(Rv), $v = [
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
  ], Wu = Ve(function(t, n) {
    const { classes: o, colIndex: r, height: l, isResizing: s, sortDirection: a, tabIndex: i, separatorSide: d, isDraggable: u, headerComponent: p, description: h, width: g, columnMenuIconButton: m = null, columnMenu: x = null, columnTitleIconButtons: v = null, headerClassName: I, label: C, resizable: E, draggableContainerProps: $, columnHeaderSeparatorProps: k, style: H } = t, A = ge(t, $v), R = ie(), y = c.useRef(null), w = jt(y, n);
    let M = "none";
    return a != null && (M = a === "asc" ? "ascending" : "descending"), f.jsxs("div", b({
      className: de(o.root, I),
      style: b({}, H, {
        height: l,
        width: g
      }),
      role: "columnheader",
      tabIndex: i,
      "aria-colindex": r + 1,
      "aria-sort": M
    }, A, {
      ref: w,
      children: [
        f.jsxs("div", b({
          className: o.draggableContainer,
          draggable: u,
          role: "presentation"
        }, $, {
          children: [
            f.jsxs("div", {
              className: o.titleContainer,
              role: "presentation",
              children: [
                f.jsx("div", {
                  className: o.titleContainerContent,
                  children: p !== void 0 ? p : f.jsx(Tv, {
                    label: C,
                    description: h,
                    columnWidth: g
                  })
                }),
                v
              ]
            }),
            m
          ]
        })),
        f.jsx(Hv, b({
          resizable: !R.disableColumnResize && !!E,
          resizing: s,
          height: l,
          side: d
        }, k)),
        x
      ]
    }));
  }), Lv = (e) => {
    const { colDef: t, classes: n, isDragging: o, sortDirection: r, showRightBorder: l, showLeftBorder: s, filterItemsCounter: a, pinnedPosition: i, isLastUnpinned: d, isSiblingFocused: u } = e, p = r != null, h = a != null && a > 0, g = t.type === "number", m = {
      root: [
        "columnHeader",
        t.headerAlign === "left" && "columnHeader--alignLeft",
        t.headerAlign === "center" && "columnHeader--alignCenter",
        t.headerAlign === "right" && "columnHeader--alignRight",
        t.sortable && "columnHeader--sortable",
        o && "columnHeader--moving",
        p && "columnHeader--sorted",
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
    return me(m, He, n);
  };
  function jv(e) {
    var _a2, _b2, _c2;
    const { colDef: t, columnMenuOpen: n, colIndex: o, headerHeight: r, isResizing: l, isLast: s, sortDirection: a, sortIndex: i, filterItemsCounter: d, hasFocus: u, tabIndex: p, disableReorder: h, separatorSide: g, showLeftBorder: m, showRightBorder: x, pinnedPosition: v, pinnedOffset: I } = e, C = an(), E = ie(), $ = At(), k = c.useRef(null), H = nt(), A = nt(), R = c.useRef(null), [y, w] = c.useState(n), M = c.useMemo(() => !E.disableColumnReorder && !h && !t.disableReorder, [
      E.disableColumnReorder,
      h,
      t.disableReorder
    ]);
    let O;
    t.renderHeader && (O = t.renderHeader(C.current.getColumnHeaderParams(t.field)));
    const D = b({}, e, {
      classes: E.classes,
      showRightBorder: x,
      showLeftBorder: m
    }), _ = Lv(D), F = c.useCallback((J) => (ne) => {
      Mr(ne) || C.current.publishEvent(J, C.current.getColumnHeaderParams(t.field), ne);
    }, [
      C,
      t.field
    ]), S = c.useMemo(() => ({
      onClick: F("columnHeaderClick"),
      onContextMenu: F("columnHeaderContextMenu"),
      onDoubleClick: F("columnHeaderDoubleClick"),
      onMouseOver: F("columnHeaderOver"),
      onMouseOut: F("columnHeaderOut"),
      onMouseEnter: F("columnHeaderEnter"),
      onMouseLeave: F("columnHeaderLeave"),
      onKeyDown: F("columnHeaderKeyDown"),
      onFocus: F("columnHeaderFocus"),
      onBlur: F("columnHeaderBlur")
    }), [
      F
    ]), T = c.useMemo(() => M ? {
      onDragStart: F("columnHeaderDragStart"),
      onDragEnter: F("columnHeaderDragEnter"),
      onDragOver: F("columnHeaderDragOver"),
      onDragEnd: F("columnHeaderDragEnd")
    } : {}, [
      M,
      F
    ]), L = c.useMemo(() => ({
      onMouseDown: F("columnSeparatorMouseDown"),
      onDoubleClick: F("columnSeparatorDoubleClick")
    }), [
      F
    ]);
    c.useEffect(() => {
      y || w(n);
    }, [
      y,
      n
    ]);
    const z = c.useCallback(() => {
      w(false);
    }, []), G = !E.disableColumnMenu && !t.disableColumnMenu && f.jsx(cv, {
      colDef: t,
      columnMenuId: H,
      columnMenuButtonId: A,
      open: y,
      iconButtonRef: R
    }), j = f.jsx(uv, {
      columnMenuId: H,
      columnMenuButtonId: A,
      field: t.field,
      open: n,
      target: R.current,
      ContentComponent: E.slots.columnMenu,
      contentComponentProps: (_a2 = E.slotProps) == null ? void 0 : _a2.columnMenu,
      onExited: z
    }), V = t.sortingOrder ?? E.sortingOrder, U = (t.sortable || a != null) && !t.hideSortIcons && !E.disableColumnSorting, W = f.jsxs(c.Fragment, {
      children: [
        !E.disableColumnFilter && f.jsx(E.slots.columnHeaderFilterIconButton, b({
          field: t.field,
          counter: d
        }, (_b2 = E.slotProps) == null ? void 0 : _b2.columnHeaderFilterIconButton)),
        U && f.jsx(E.slots.columnHeaderSortIcon, b({
          field: t.field,
          direction: a,
          index: i,
          sortingOrder: V,
          disabled: !t.sortable
        }, (_c2 = E.slotProps) == null ? void 0 : _c2.columnHeaderSortIcon))
      ]
    });
    c.useLayoutEffect(() => {
      const J = C.current.state.columnMenu;
      if (u && !J.open) {
        const ae = k.current.querySelector('[tabindex="0"]') || k.current;
        if (!ae) return;
        if (ei()) ae.focus({
          preventScroll: true
        });
        else {
          const we = C.current.getScrollPosition();
          ae.focus(), C.current.scroll(we);
        }
      }
    }, [
      C,
      u
    ]);
    const K = typeof t.headerClassName == "function" ? t.headerClassName({
      field: t.field,
      colDef: t
    }) : t.headerClassName, B = t.headerName ?? t.field, te = c.useMemo(() => Sl(b({}, e.style), $, v, I), [
      v,
      I,
      e.style,
      $
    ]);
    return f.jsx(Wu, b({
      ref: k,
      classes: _,
      columnMenuOpen: n,
      colIndex: o,
      height: r,
      isResizing: l,
      sortDirection: a,
      hasFocus: u,
      tabIndex: p,
      separatorSide: g,
      isDraggable: M,
      headerComponent: O,
      description: t.description,
      elementId: t.field,
      width: t.computedWidth,
      columnMenuIconButton: G,
      columnTitleIconButtons: W,
      headerClassName: de(K, s && P["columnHeader--last"]),
      label: B,
      resizable: !E.disableColumnResize && !!t.resizable,
      "data-field": t.field,
      columnMenu: j,
      draggableContainerProps: T,
      columnHeaderSeparatorProps: L,
      style: te
    }, S));
  }
  const Av = Tn(jv), zv = [
    "className"
  ], Gv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "iconButtonContainer"
      ]
    }, He, t);
  }, _v = Je("div", {
    name: "MuiDataGrid",
    slot: "IconButtonContainer",
    overridesResolver: (e, t) => t.iconButtonContainer
  })(() => ({
    display: "flex",
    visibility: "hidden",
    width: 0
  })), Uu = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, zv), l = ie(), s = Gv(l);
    return f.jsx(_v, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), Vv = [
    "direction",
    "index",
    "sortingOrder",
    "disabled",
    "className"
  ], Nv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "sortButton"
      ],
      icon: [
        "sortIcon"
      ]
    }, He, t);
  };
  function Bv(e, t, n, o) {
    let r;
    const l = {};
    return t === "asc" ? r = e.columnSortedAscendingIcon : t === "desc" ? r = e.columnSortedDescendingIcon : (r = e.columnUnsortedIcon, l.sortingOrder = o), r ? f.jsx(r, b({
      fontSize: "small",
      className: n
    }, l)) : null;
  }
  function Wv(e) {
    var _a2;
    const { direction: t, index: n, sortingOrder: o, disabled: r, className: l } = e, s = ge(e, Vv), a = Ee(), i = ie(), d = b({}, e, {
      classes: i.classes
    }), u = Nv(d), p = Bv(i.slots, t, u.icon, o);
    if (!p) return null;
    const h = f.jsx(i.slots.baseIconButton, b({
      tabIndex: -1,
      "aria-label": a.current.getLocaleText("columnHeaderSortIconLabel"),
      title: a.current.getLocaleText("columnHeaderSortIconLabel"),
      size: "small",
      disabled: r,
      className: de(u.root, l)
    }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseIconButton, s, {
      children: p
    }));
    return f.jsxs(Uu, {
      children: [
        n != null && f.jsx(i.slots.baseBadge, {
          badgeContent: n,
          color: "default",
          overlap: "circular",
          children: h
        }),
        n == null && h
      ]
    });
  }
  const Uv = c.memo(Wv), Kv = (e) => {
    const { classes: t } = e;
    return me({
      icon: [
        "filterIcon"
      ]
    }, He, t);
  };
  function qv(e) {
    return e.counter ? f.jsx(Yv, b({}, e)) : null;
  }
  function Yv(e) {
    var _a2, _b2;
    const { counter: t, field: n, onClick: o } = e, r = Ee(), l = ie(), s = b({}, e, {
      classes: l.classes
    }), a = Kv(s), i = nt(), d = ar(r, dx, i), u = nt(), p = c.useCallback((g) => {
      g.preventDefault(), g.stopPropagation();
      const { open: m, openedPanelValue: x } = dr(r.current.state);
      m && x === Zn.filters ? r.current.hideFilterPanel() : r.current.showFilterPanel(void 0, u, i), o && o(r.current.getColumnHeaderParams(n), g);
    }, [
      r,
      n,
      o,
      u,
      i
    ]);
    if (!t) return null;
    const h = f.jsx(l.slots.baseIconButton, b({
      id: i,
      onClick: p,
      color: "default",
      "aria-label": r.current.getLocaleText("columnHeaderFiltersLabel"),
      size: "small",
      tabIndex: -1,
      "aria-haspopup": "menu",
      "aria-expanded": d,
      "aria-controls": d ? u : void 0
    }, (_a2 = l.slotProps) == null ? void 0 : _a2.baseIconButton, {
      children: f.jsx(l.slots.columnFilteredIcon, {
        className: a.icon,
        fontSize: "small"
      })
    }));
    return f.jsx(l.slots.baseTooltip, b({
      title: r.current.getLocaleText("columnHeaderFiltersTooltipActive")(t),
      enterDelay: 1e3
    }, (_b2 = l.slotProps) == null ? void 0 : _b2.baseTooltip, {
      children: f.jsxs(Uu, {
        children: [
          t > 1 && f.jsx(l.slots.baseBadge, {
            badgeContent: t,
            color: "default",
            children: h
          }),
          t === 1 && h
        ]
      })
    }));
  }
  const xa = Me(f.jsx("path", {
    d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
  }), "ArrowUpward"), va = Me(f.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward"), ya = Me(f.jsx("path", {
    d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "KeyboardArrowRight"), Sa = Me(f.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Xv = Me(f.jsx("path", {
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  }), "FilterList"), Ia = Me(f.jsx("path", {
    d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
  }), "FilterAlt"), Qv = Me(f.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), "Search");
  Me(f.jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu");
  Me(f.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckCircle");
  const Jv = Me(f.jsx("path", {
    d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
  }), "ColumnIcon"), Zv = Me(f.jsx("rect", {
    width: "1",
    height: "24",
    x: "11.5",
    rx: "0.5"
  }), "Separator"), ey = Me(f.jsx("path", {
    d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
  }), "ViewHeadline"), ty = Me(f.jsx("path", {
    d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
  }), "TableRows"), ny = Me(f.jsx("path", {
    d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
  }), "ViewStream"), oy = Me(f.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "TripleDotsVertical"), _l = Me(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Pa = Me(f.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), "Add"), ry = Me(f.jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }), "Remove"), ly = Me(f.jsx("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }), "Load"), Ma = Me(f.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "Drag"), sy = Me(f.jsx("path", {
    d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
  }), "SaveAlt"), iy = Me(f.jsx("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), ay = Me(f.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "MoreVert"), cy = Me(f.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }), "VisibilityOff"), uy = Me(f.jsx("g", {
    children: f.jsx("path", {
      d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
    })
  }), "ViewColumn"), dy = Me(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  Me(f.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  const py = Me(f.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  function Ku(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
  }
  const il = (e) => e.indexOf("Arrow") === 0 || e.indexOf("Page") === 0 || e === " " || e === "Home" || e === "End", fy = (e) => !!e.key, qu = (e) => e === "Tab" || e === "Escape";
  function Yu(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "V" && !e.shiftKey && !e.altKey;
  }
  function gy(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "C" && !e.shiftKey && !e.altKey;
  }
  const hy = [
    "hideMenu",
    "colDef",
    "id",
    "labelledby",
    "className",
    "children",
    "open"
  ], my = se(Ps)(() => ({
    minWidth: 248
  })), by = Ve(function(t, n) {
    const { hideMenu: o, id: r, labelledby: l, className: s, children: a, open: i } = t, d = ge(t, hy), u = c.useCallback((p) => {
      p.key === "Tab" && p.preventDefault(), qu(p.key) && o(p);
    }, [
      o
    ]);
    return f.jsx(my, b({
      id: r,
      className: de(P.menuList, s),
      "aria-labelledby": l,
      onKeyDown: u,
      autoFocus: i
    }, d, {
      ref: n,
      children: a
    }));
  }), Cy = [
    "displayOrder"
  ], wy = (e) => {
    const t = an(), n = ie(), { defaultSlots: o, defaultSlotProps: r, slots: l = {}, slotProps: s = {}, hideMenu: a, colDef: i, addDividers: d = true } = e, u = c.useMemo(() => b({}, o, l), [
      o,
      l
    ]), p = c.useMemo(() => {
      if (!s || Object.keys(s).length === 0) return r;
      const m = b({}, s);
      return Object.entries(r).forEach(([x, v]) => {
        m[x] = b({}, v, s[x] || {});
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
      const v = Array.from(/* @__PURE__ */ new Set([
        ...h,
        ...g
      ])).filter((I) => u[I] != null).sort((I, C) => {
        const E = p[I], $ = p[C], k = Number.isFinite(E == null ? void 0 : E.displayOrder) ? E.displayOrder : 100, H = Number.isFinite($ == null ? void 0 : $.displayOrder) ? $.displayOrder : 100;
        return k - H;
      });
      return v.reduce((I, C, E) => {
        let $ = {
          colDef: i,
          onClick: a
        };
        const k = p[C];
        if (k) {
          const H = ge(k, Cy);
          $ = b({}, $, H);
        }
        return d && E !== v.length - 1 ? [
          ...I,
          [
            u[C],
            $
          ],
          [
            n.slots.baseDivider,
            {}
          ]
        ] : [
          ...I,
          [
            u[C],
            $
          ]
        ];
      }, []);
    }, [
      d,
      i,
      h,
      a,
      u,
      p,
      g,
      n.slots.baseDivider
    ]);
  };
  function xy(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = ie(), a = st(o).filter((d) => d.disableColumnMenu !== true).length === 1, i = c.useCallback((d) => {
      a || (o.current.setColumnVisibility(t.field, false), n(d));
    }, [
      o,
      t.field,
      n,
      a
    ]);
    return r.disableColumnSelector || t.hideable === false ? null : f.jsxs(Ht, {
      onClick: i,
      disabled: a,
      children: [
        f.jsx(vo, {
          children: f.jsx(r.slots.columnMenuHideIcon, {
            fontSize: "small"
          })
        }),
        f.jsx(wo, {
          children: o.current.getLocaleText("columnMenuHideColumn")
        })
      ]
    });
  }
  function vy(e) {
    const { onClick: t } = e, n = Ee(), o = ie(), r = c.useCallback((l) => {
      t(l), n.current.showPreferences(Zn.columns);
    }, [
      n,
      t
    ]);
    return o.disableColumnSelector ? null : f.jsxs(Ht, {
      onClick: r,
      children: [
        f.jsx(vo, {
          children: f.jsx(o.slots.columnMenuManageColumnsIcon, {
            fontSize: "small"
          })
        }),
        f.jsx(wo, {
          children: n.current.getLocaleText("columnMenuManageColumns")
        })
      ]
    });
  }
  function yy(e) {
    return f.jsxs(c.Fragment, {
      children: [
        f.jsx(xy, b({}, e)),
        f.jsx(vy, b({}, e))
      ]
    });
  }
  function Sy(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = ie(), l = c.useCallback((s) => {
      n(s), o.current.showFilterPanel(t.field);
    }, [
      o,
      t.field,
      n
    ]);
    return r.disableColumnFilter || !t.filterable ? null : f.jsxs(Ht, {
      onClick: l,
      children: [
        f.jsx(vo, {
          children: f.jsx(r.slots.columnMenuFilterIcon, {
            fontSize: "small"
          })
        }),
        f.jsx(wo, {
          children: o.current.getLocaleText("columnMenuFilter")
        })
      ]
    });
  }
  function Iy(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = Q(o, un), l = ie(), s = c.useMemo(() => {
      var _a2;
      return t ? (_a2 = r.find((p) => p.field === t.field)) == null ? void 0 : _a2.sort : null;
    }, [
      t,
      r
    ]), a = t.sortingOrder ?? l.sortingOrder, i = c.useCallback((u) => {
      n(u);
      const p = u.currentTarget.getAttribute("data-value") || null;
      o.current.sortColumn(t.field, p === s ? null : p);
    }, [
      o,
      t,
      n,
      s
    ]);
    if (l.disableColumnSorting || !t || !t.sortable || !a.some((u) => !!u)) return null;
    const d = (u) => {
      const p = o.current.getLocaleText(u);
      return typeof p == "function" ? p(t) : p;
    };
    return f.jsxs(c.Fragment, {
      children: [
        a.includes("asc") && s !== "asc" ? f.jsxs(Ht, {
          onClick: i,
          "data-value": "asc",
          children: [
            f.jsx(vo, {
              children: f.jsx(l.slots.columnMenuSortAscendingIcon, {
                fontSize: "small"
              })
            }),
            f.jsx(wo, {
              children: d("columnMenuSortAsc")
            })
          ]
        }) : null,
        a.includes("desc") && s !== "desc" ? f.jsxs(Ht, {
          onClick: i,
          "data-value": "desc",
          children: [
            f.jsx(vo, {
              children: f.jsx(l.slots.columnMenuSortDescendingIcon, {
                fontSize: "small"
              })
            }),
            f.jsx(wo, {
              children: d("columnMenuSortDesc")
            })
          ]
        }) : null,
        a.includes(null) && s != null ? f.jsxs(Ht, {
          onClick: i,
          children: [
            f.jsx(vo, {}),
            f.jsx(wo, {
              children: o.current.getLocaleText("columnMenuUnsort")
            })
          ]
        }) : null
      ]
    });
  }
  const Py = [
    "defaultSlots",
    "defaultSlotProps",
    "slots",
    "slotProps"
  ], My = {
    columnMenuSortItem: Iy,
    columnMenuFilterItem: Sy,
    columnMenuColumnsItem: yy
  }, ky = {
    columnMenuSortItem: {
      displayOrder: 10
    },
    columnMenuFilterItem: {
      displayOrder: 20
    },
    columnMenuColumnsItem: {
      displayOrder: 30
    }
  }, Ey = Ve(function(t, n) {
    const { defaultSlots: o, defaultSlotProps: r, slots: l, slotProps: s } = t, a = ge(t, Py), i = wy(b({}, a, {
      defaultSlots: o,
      defaultSlotProps: r,
      slots: l,
      slotProps: s
    }));
    return f.jsx(by, b({}, a, {
      ref: n,
      children: i.map(([d, u], p) => f.jsx(d, b({}, u), p))
    }));
  }), Fy = Ve(function(t, n) {
    return f.jsx(Ey, b({}, t, {
      ref: n,
      defaultSlots: My,
      defaultSlotProps: ky
    }));
  }), Ty = [
    "className",
    "slotProps"
  ], Oy = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "panelWrapper"
      ]
    }, He, t);
  }, Dy = se("div", {
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
  }), Ry = () => true, Xu = Ve(function(t, n) {
    const { className: o, slotProps: r = {} } = t, l = ge(t, Ty), s = ie(), a = Oy(s);
    return f.jsx(Id, b({
      open: true,
      disableEnforceFocus: true,
      isEnabled: Ry
    }, r.TrapFocus, {
      children: f.jsx(Dy, b({
        tabIndex: -1,
        className: de(a.root, o),
        ownerState: s
      }, l, {
        ref: n
      }))
    }));
  });
  function Hy(e) {
    var _a2;
    const t = ie();
    return f.jsx(Xu, b({}, e, {
      children: f.jsx(t.slots.columnsManagement, b({}, (_a2 = t.slotProps) == null ? void 0 : _a2.columnsManagement))
    }));
  }
  const $y = [
    "children",
    "className",
    "classes"
  ], Ly = ft("MuiDataGrid", [
    "panel",
    "paper"
  ]), jy = se(to, {
    name: "MuiDataGrid",
    slot: "Panel",
    overridesResolver: (e, t) => t.panel
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal
  })), Ay = se(Yt, {
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
  })), zy = Ve((e, t) => {
    const { children: n, className: o } = e, r = ge(e, $y), l = Ee(), s = ie(), a = Ly, [i, d] = c.useState(false), u = c.useCallback(() => {
      l.current.hidePreferences();
    }, [
      l
    ]), p = c.useCallback((x) => {
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
    ]), g ? f.jsx(jy, b({
      placement: "bottom-start",
      className: de(a.panel, o),
      ownerState: s,
      anchorEl: g,
      modifiers: h
    }, r, {
      ref: t,
      children: f.jsx(hc, {
        mouseEvent: "onPointerUp",
        touchEvent: false,
        onClickAway: u,
        children: f.jsx(Ay, {
          className: a.paper,
          ownerState: s,
          elevation: 8,
          onKeyDown: p,
          children: i && n
        })
      })
    })) : null;
  }), Gy = [
    "className"
  ], _y = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "panelContent"
      ]
    }, He, t);
  }, Vy = Je("div", {
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
  function Ny(e) {
    const { className: t } = e, n = ge(e, Gy), o = ie(), r = _y(o);
    return f.jsx(Vy, b({
      className: de(r.root, t),
      ownerState: o
    }, n));
  }
  const By = [
    "className"
  ], Wy = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "panelFooter"
      ]
    }, He, t);
  }, Uy = Je("div", {
    name: "MuiDataGrid",
    slot: "PanelFooter",
    overridesResolver: (e, t) => t.panelFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5),
    display: "flex",
    justifyContent: "space-between"
  }));
  function Ky(e) {
    const { className: t } = e, n = ge(e, By), o = ie(), r = Wy(o);
    return f.jsx(Uy, b({
      className: de(r.root, t),
      ownerState: o
    }, n));
  }
  const qy = [
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
  ], Yy = [
    "InputComponentProps"
  ], Xy = (e) => {
    const { classes: t } = e;
    return me({
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
    }, He, t);
  }, Qy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterForm",
    overridesResolver: (e, t) => t.filterForm
  })(({ theme: e }) => ({
    display: "flex",
    padding: e.spacing(1)
  })), Jy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormDeleteIcon",
    overridesResolver: (e, t) => t.filterFormDeleteIcon
  })(({ theme: e }) => ({
    flexShrink: 0,
    justifyContent: "flex-end",
    marginRight: e.spacing(0.5),
    marginBottom: e.spacing(0.2)
  })), Zy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormLogicOperatorInput",
    overridesResolver: (e, t) => t.filterFormLogicOperatorInput
  })({
    minWidth: 55,
    marginRight: 5,
    justifyContent: "end"
  }), eS = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormColumnInput",
    overridesResolver: (e, t) => t.filterFormColumnInput
  })({
    width: 150
  }), tS = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormOperatorInput",
    overridesResolver: (e, t) => t.filterFormOperatorInput
  })({
    width: 150
  }), nS = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormValueInput",
    overridesResolver: (e, t) => t.filterFormValueInput
  })({
    width: 190
  }), oS = (e) => {
    switch (e) {
      case Tt.And:
        return "filterPanelOperatorAnd";
      case Tt.Or:
        return "filterPanelOperatorOr";
      default:
        throw new Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
    }
  }, Yo = (e) => e.headerName || e.field, ka = new Intl.Collator(), Ea = Ve(function(t, n) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const { item: o, hasMultipleFilters: r, deleteFilter: l, applyFilterChanges: s, showMultiFilterOperators: a, disableMultiFilterOperator: i, applyMultiFilterOperatorChanges: d, focusElementRef: u, logicOperators: p = [
      Tt.And,
      Tt.Or
    ], columnsSort: h, filterColumns: g, deleteIconProps: m = {}, logicOperatorInputProps: x = {}, operatorInputProps: v = {}, columnInputProps: I = {}, valueInputProps: C = {}, readOnly: E } = t, $ = ge(t, qy), k = Ee(), H = Q(k, On), A = Q(k, Yc), R = Q(k, yt), y = nt(), w = nt(), M = nt(), O = nt(), D = ie(), _ = Xy(D), F = c.useRef(null), S = c.useRef(null), T = R.logicOperator ?? Tt.And, L = r && p.length > 0, z = ((_a2 = D.slotProps) == null ? void 0 : _a2.baseFormControl) || {}, j = (((_b2 = D.slotProps) == null ? void 0 : _b2.baseSelect) || {}).native ?? false, V = ((_c2 = D.slotProps) == null ? void 0 : _c2.baseInputLabel) || {}, U = ((_d2 = D.slotProps) == null ? void 0 : _d2.baseSelectOption) || {}, { InputComponentProps: W } = C, K = ge(C, Yy), { filteredColumns: B, selectedField: te } = c.useMemo(() => {
      let Z = o.field;
      const Se = H[o.field].filterable === false ? H[o.field] : null;
      if (Se) return {
        filteredColumns: [
          Se
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
        currentFilters: (R == null ? void 0 : R.items) || []
      });
      return {
        filteredColumns: A.filter((ve) => {
          const Ce = ee.includes(ve.field);
          return ve.field === o.field && !Ce && (Z = void 0), Ce;
        }),
        selectedField: Z
      };
    }, [
      g,
      R == null ? void 0 : R.items,
      A,
      o.field,
      H
    ]), J = c.useMemo(() => {
      switch (h) {
        case "asc":
          return B.sort((Z, Se) => ka.compare(Yo(Z), Yo(Se)));
        case "desc":
          return B.sort((Z, Se) => -ka.compare(Yo(Z), Yo(Se)));
        default:
          return B;
      }
    }, [
      B,
      h
    ]), ne = o.field ? k.current.getColumn(o.field) : null, ae = c.useMemo(() => {
      var _a3;
      return !o.operator || !ne ? null : (_a3 = ne.filterOperators) == null ? void 0 : _a3.find((Z) => Z.value === o.operator);
    }, [
      o,
      ne
    ]), we = c.useCallback((Z) => {
      const Se = Z.target.value, ee = k.current.getColumn(Se);
      if (ee.field === ne.field) return;
      const ve = ee.filterOperators.find((Ne) => Ne.value === o.operator) || ee.filterOperators[0];
      let Fe = !ve.InputComponent || ve.InputComponent !== (ae == null ? void 0 : ae.InputComponent) || ee.type !== ne.type ? void 0 : o.value;
      if (ee.type === "singleSelect" && Fe !== void 0) {
        const Ne = ee, Be = Jn(Ne);
        Array.isArray(Fe) ? Fe = Fe.filter((ze) => ol(ze, Be, Ne == null ? void 0 : Ne.getOptionValue) !== void 0) : ol(o.value, Be, Ne == null ? void 0 : Ne.getOptionValue) === void 0 && (Fe = void 0);
      }
      s(b({}, o, {
        field: Se,
        operator: ve.value,
        value: Fe
      }));
    }, [
      k,
      s,
      o,
      ne,
      ae
    ]), Y = c.useCallback((Z) => {
      const Se = Z.target.value, ee = ne == null ? void 0 : ne.filterOperators.find((Ce) => Ce.value === Se), ve = !(ee == null ? void 0 : ee.InputComponent) || (ee == null ? void 0 : ee.InputComponent) !== (ae == null ? void 0 : ae.InputComponent);
      s(b({}, o, {
        operator: Se,
        value: ve ? void 0 : o.value
      }));
    }, [
      s,
      o,
      ne,
      ae
    ]), re = c.useCallback((Z) => {
      const Se = Z.target.value === Tt.And.toString() ? Tt.And : Tt.Or;
      d(Se);
    }, [
      d
    ]), ye = () => {
      l(o);
    };
    return c.useImperativeHandle(u, () => ({
      focus: () => {
        var _a3;
        (ae == null ? void 0 : ae.InputComponent) ? (_a3 = F == null ? void 0 : F.current) == null ? void 0 : _a3.focus() : S.current.focus();
      }
    }), [
      ae
    ]), f.jsxs(Qy, b({
      className: _.root,
      "data-id": o.id,
      ownerState: D
    }, $, {
      ref: n,
      children: [
        f.jsx(Jy, b({
          variant: "standard",
          as: D.slots.baseFormControl
        }, z, m, {
          className: de(_.deleteIcon, z.className, m.className),
          ownerState: D,
          children: f.jsx(D.slots.baseIconButton, b({
            "aria-label": k.current.getLocaleText("filterPanelDeleteIconLabel"),
            title: k.current.getLocaleText("filterPanelDeleteIconLabel"),
            onClick: ye,
            size: "small",
            disabled: E
          }, (_e = D.slotProps) == null ? void 0 : _e.baseIconButton, {
            children: f.jsx(D.slots.filterPanelDeleteIcon, {
              fontSize: "small"
            })
          }))
        })),
        f.jsx(Zy, b({
          variant: "standard",
          as: D.slots.baseFormControl
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
          className: de(_.logicOperatorInput, z.className, x.className),
          ownerState: D,
          children: f.jsx(D.slots.baseSelect, b({
            inputProps: {
              "aria-label": k.current.getLocaleText("filterPanelLogicOperator")
            },
            value: T ?? "",
            onChange: re,
            disabled: !!i || p.length === 1,
            native: j
          }, (_f2 = D.slotProps) == null ? void 0 : _f2.baseSelect, {
            children: p.map((Z) => c.createElement(D.slots.baseSelectOption, b({}, U, {
              native: j,
              key: Z.toString(),
              value: Z.toString()
            }), k.current.getLocaleText(oS(Z))))
          }))
        })),
        f.jsxs(eS, b({
          variant: "standard",
          as: D.slots.baseFormControl
        }, z, I, {
          className: de(_.columnInput, z.className, I.className),
          ownerState: D,
          children: [
            f.jsx(D.slots.baseInputLabel, b({}, V, {
              htmlFor: y,
              id: w,
              children: k.current.getLocaleText("filterPanelColumns")
            })),
            f.jsx(D.slots.baseSelect, b({
              labelId: w,
              id: y,
              label: k.current.getLocaleText("filterPanelColumns"),
              value: te ?? "",
              onChange: we,
              native: j,
              disabled: E
            }, (_g2 = D.slotProps) == null ? void 0 : _g2.baseSelect, {
              children: J.map((Z) => c.createElement(D.slots.baseSelectOption, b({}, U, {
                native: j,
                key: Z.field,
                value: Z.field
              }), Yo(Z)))
            }))
          ]
        })),
        f.jsxs(tS, b({
          variant: "standard",
          as: D.slots.baseFormControl
        }, z, v, {
          className: de(_.operatorInput, z.className, v.className),
          ownerState: D,
          children: [
            f.jsx(D.slots.baseInputLabel, b({}, V, {
              htmlFor: M,
              id: O,
              children: k.current.getLocaleText("filterPanelOperator")
            })),
            f.jsx(D.slots.baseSelect, b({
              labelId: O,
              label: k.current.getLocaleText("filterPanelOperator"),
              id: M,
              value: o.operator,
              onChange: Y,
              native: j,
              inputRef: S,
              disabled: E
            }, (_h2 = D.slotProps) == null ? void 0 : _h2.baseSelect, {
              children: (_i2 = ne == null ? void 0 : ne.filterOperators) == null ? void 0 : _i2.map((Z) => c.createElement(D.slots.baseSelectOption, b({}, U, {
                native: j,
                key: Z.value,
                value: Z.value
              }), Z.label || k.current.getLocaleText(`filterOperator${ce(Z.value)}`)))
            }))
          ]
        })),
        f.jsx(nS, b({
          variant: "standard",
          as: D.slots.baseFormControl
        }, z, K, {
          className: de(_.valueInput, z.className, K.className),
          ownerState: D,
          children: (ae == null ? void 0 : ae.InputComponent) ? f.jsx(ae.InputComponent, b({
            apiRef: k,
            item: o,
            applyValue: s,
            focusElementRef: F,
            disabled: E
          }, ae.InputComponentProps, W), o.field) : null
        }))
      ]
    }));
  }), rS = [
    "logicOperators",
    "columnsSort",
    "filterFormProps",
    "getColumnForNewFilter",
    "children",
    "disableAddFilterButton",
    "disableRemoveAllButton"
  ], Fa = (e) => ({
    field: e.field,
    operator: e.filterOperators[0].value,
    id: Math.round(Math.random() * 1e5)
  }), lS = Ve(function(t, n) {
    var _a2, _b2;
    const o = Ee(), r = ie(), l = Q(o, yt), s = Q(o, Yc), a = Q(o, fb), i = c.useRef(null), d = c.useRef(null), { logicOperators: u = [
      Tt.And,
      Tt.Or
    ], columnsSort: p, filterFormProps: h, getColumnForNewFilter: g, disableAddFilterButton: m = false, disableRemoveAllButton: x = false } = t, v = ge(t, rS), I = o.current.upsertFilterItem, C = c.useCallback((O) => {
      o.current.setFilterLogicOperator(O);
    }, [
      o
    ]), E = c.useCallback(() => {
      let O;
      if (g && typeof g == "function") {
        const D = g({
          currentFilters: (l == null ? void 0 : l.items) || [],
          columns: s
        });
        if (D === null) return null;
        O = s.find(({ field: _ }) => _ === D);
      } else O = s.find((D) => {
        var _a3;
        return (_a3 = D.filterOperators) == null ? void 0 : _a3.length;
      });
      return O ? Fa(O) : null;
    }, [
      l == null ? void 0 : l.items,
      s,
      g
    ]), $ = c.useCallback(() => {
      if (g === void 0 || typeof g != "function") return E();
      const O = l.items.length ? l.items : [
        E()
      ].filter(Boolean), D = g({
        currentFilters: O,
        columns: s
      });
      if (D === null) return null;
      const _ = s.find(({ field: F }) => F === D);
      return _ ? Fa(_) : null;
    }, [
      l.items,
      s,
      g,
      E
    ]), k = c.useMemo(() => l.items.length ? l.items : (d.current || (d.current = E()), d.current ? [
      d.current
    ] : []), [
      l.items,
      E
    ]), H = k.length > 1, { readOnlyFilters: A, validFilters: R } = c.useMemo(() => k.reduce((O, D) => (a[D.field] ? O.validFilters.push(D) : O.readOnlyFilters.push(D), O), {
      readOnlyFilters: [],
      validFilters: []
    }), [
      k,
      a
    ]), y = c.useCallback(() => {
      const O = $();
      O && o.current.upsertFilterItems([
        ...k,
        O
      ]);
    }, [
      o,
      $,
      k
    ]), w = c.useCallback((O) => {
      const D = R.length === 1;
      o.current.deleteFilterItem(O), D && o.current.hideFilterPanel();
    }, [
      o,
      R.length
    ]), M = c.useCallback(() => R.length === 1 && R[0].value === void 0 ? (o.current.deleteFilterItem(R[0]), o.current.hideFilterPanel()) : o.current.setFilterModel(b({}, l, {
      items: A
    }), "removeAllFilterItems"), [
      o,
      A,
      l,
      R
    ]);
    return c.useEffect(() => {
      u.length > 0 && l.logicOperator && !u.includes(l.logicOperator) && C(u[0]);
    }, [
      u,
      C,
      l.logicOperator
    ]), c.useEffect(() => {
      R.length > 0 && i.current.focus();
    }, [
      R.length
    ]), f.jsxs(Xu, b({}, v, {
      ref: n,
      children: [
        f.jsxs(Ny, {
          children: [
            A.map((O, D) => f.jsx(Ea, b({
              item: O,
              applyFilterChanges: I,
              deleteFilter: w,
              hasMultipleFilters: H,
              showMultiFilterOperators: D > 0,
              disableMultiFilterOperator: D !== 1,
              applyMultiFilterOperatorChanges: C,
              focusElementRef: null,
              readOnly: true,
              logicOperators: u,
              columnsSort: p
            }, h), O.id == null ? D : O.id)),
            R.map((O, D) => f.jsx(Ea, b({
              item: O,
              applyFilterChanges: I,
              deleteFilter: w,
              hasMultipleFilters: H,
              showMultiFilterOperators: A.length + D > 0,
              disableMultiFilterOperator: A.length + D !== 1,
              applyMultiFilterOperatorChanges: C,
              focusElementRef: D === R.length - 1 ? i : null,
              logicOperators: u,
              columnsSort: p
            }, h), O.id == null ? D + A.length : O.id))
          ]
        }),
        !r.disableMultipleColumnsFiltering && !(m && x) ? f.jsxs(Ky, {
          children: [
            m ? f.jsx("span", {}) : f.jsx(r.slots.baseButton, b({
              onClick: y,
              startIcon: f.jsx(r.slots.filterPanelAddIcon, {})
            }, (_a2 = r.slotProps) == null ? void 0 : _a2.baseButton, {
              children: o.current.getLocaleText("filterPanelAddFilter")
            })),
            !x && R.length > 0 ? f.jsx(r.slots.baseButton, b({
              onClick: M,
              startIcon: f.jsx(r.slots.filterPanelRemoveAllIcon, {})
            }, (_b2 = r.slotProps) == null ? void 0 : _b2.baseButton, {
              children: o.current.getLocaleText("filterPanelRemoveAll")
            })) : null
          ]
        }) : null
      ]
    }));
  }), sS = (e, t) => {
    const n = new Set(Object.keys(e).filter((l) => e[l] === false)), o = new Set(Object.keys(t).filter((l) => t[l] === false));
    if (n.size !== o.size) return false;
    let r = true;
    return n.forEach((l) => {
      o.has(l) || (r = false);
    }), r;
  }, iS = (e, t) => (e.headerName || e.field).toLowerCase().indexOf(t) > -1, aS = (e) => {
    const { classes: t } = e;
    return me({
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
    }, He, t);
  }, Ta = new Intl.Collator();
  function cS(e) {
    var _a2, _b2, _c2, _d2;
    const t = Ee(), n = c.useRef(null), o = Q(t, on), r = Sn(() => Zt(t)).current, l = Q(t, Zt), s = ie(), [a, i] = c.useState(""), d = aS(s), { sort: u, searchPredicate: p = iS, autoFocusSearchField: h = true, disableShowHideToggle: g = false, disableResetButton: m = false, toggleAllMode: x = "all", getTogglableColumns: v, searchInputProps: I } = e, C = c.useMemo(() => sS(l, r), [
      l,
      r
    ]), E = c.useMemo(() => {
      switch (u) {
        case "asc":
          return [
            ...o
          ].sort((F, S) => Ta.compare(F.headerName || F.field, S.headerName || S.field));
        case "desc":
          return [
            ...o
          ].sort((F, S) => -Ta.compare(F.headerName || F.field, S.headerName || S.field));
        default:
          return o;
      }
    }, [
      o,
      u
    ]), $ = (F) => {
      const { name: S } = F.target;
      t.current.setColumnVisibility(S, l[S] === false);
    }, k = c.useMemo(() => {
      const F = v ? v(E) : null, S = F ? E.filter(({ field: T }) => F.includes(T)) : E;
      return a ? S.filter((T) => p(T, a.toLowerCase())) : S;
    }, [
      E,
      a,
      p,
      v
    ]), H = c.useCallback((F) => {
      const S = Zt(t), T = b({}, S), L = v ? v(o) : null;
      return (x === "filteredOnly" ? k : o).forEach((z) => {
        z.hideable && (L == null || L.includes(z.field)) && (F ? delete T[z.field] : T[z.field] = false);
      }), t.current.setColumnVisibilityModel(T);
    }, [
      t,
      o,
      v,
      x,
      k
    ]), A = c.useCallback((F) => {
      i(F.target.value);
    }, []), R = c.useMemo(() => k.filter((F) => F.hideable), [
      k
    ]), y = c.useMemo(() => R.every((F) => l[F.field] == null || l[F.field] !== false), [
      l,
      R
    ]), w = c.useMemo(() => R.every((F) => l[F.field] === false), [
      l,
      R
    ]), M = c.useRef(null);
    c.useEffect(() => {
      h ? n.current.focus() : M.current && typeof M.current.focus == "function" && M.current.focus();
    }, [
      h
    ]);
    let O = false;
    const D = (F) => O === false && F.hideable !== false ? (O = true, true) : false, _ = c.useCallback(() => {
      i(""), n.current.focus();
    }, []);
    return f.jsxs(c.Fragment, {
      children: [
        f.jsx(dS, {
          className: d.header,
          ownerState: s,
          children: f.jsx(pS, b({
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
              startAdornment: f.jsx(s.slots.baseInputAdornment, {
                position: "start",
                children: f.jsx(s.slots.quickFilterIcon, {})
              }),
              endAdornment: f.jsx(s.slots.baseIconButton, b({
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
                onClick: _
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
          }, (_b2 = s.slotProps) == null ? void 0 : _b2.baseTextField, I))
        }),
        f.jsxs(uS, {
          className: d.root,
          ownerState: s,
          children: [
            k.map((F) => {
              var _a3;
              return f.jsx(Ln, {
                className: d.row,
                control: f.jsx(s.slots.baseCheckbox, b({
                  disabled: F.hideable === false,
                  checked: l[F.field] !== false,
                  onClick: $,
                  name: F.field,
                  sx: {
                    p: 0.5
                  },
                  inputRef: D(F) ? M : void 0
                }, (_a3 = s.slotProps) == null ? void 0 : _a3.baseCheckbox)),
                label: F.headerName || F.field
              }, F.field);
            }),
            k.length === 0 && f.jsx(gS, {
              ownerState: s,
              children: t.current.getLocaleText("columnsManagementNoColumns")
            })
          ]
        }),
        (!g || !m) && k.length > 0 ? f.jsxs(fS, {
          ownerState: s,
          className: d.footer,
          children: [
            g ? f.jsx("span", {}) : f.jsx(Ln, {
              control: f.jsx(s.slots.baseCheckbox, b({
                disabled: R.length === 0,
                checked: y,
                indeterminate: !y && !w,
                onClick: () => H(!y),
                name: t.current.getLocaleText("columnsManagementShowHideAllText"),
                sx: {
                  p: 0.5
                }
              }, (_c2 = s.slotProps) == null ? void 0 : _c2.baseCheckbox)),
              label: t.current.getLocaleText("columnsManagementShowHideAllText")
            }),
            m ? null : f.jsx(s.slots.baseButton, b({
              onClick: () => t.current.setColumnVisibilityModel(r),
              disabled: C
            }, (_d2 = s.slotProps) == null ? void 0 : _d2.baseButton, {
              children: t.current.getLocaleText("columnsManagementReset")
            }))
          ]
        }) : null
      ]
    });
  }
  const uS = se("div", {
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
  })), dS = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementHeader",
    overridesResolver: (e, t) => t.columnsManagementHeader
  })(({ theme: e }) => ({
    padding: e.spacing(1.5, 3)
  })), pS = se(Gt, {
    name: "MuiDataGrid",
    slot: "ColumnsManagementSearchInput",
    overridesResolver: (e, t) => t.columnsManagementSearchInput
  })(({ theme: e }) => ({
    [`& .${qt.root}`]: {
      padding: e.spacing(0, 1.5, 0, 1.5)
    },
    [`& .${qt.input}::-webkit-search-decoration,
  & .${qt.input}::-webkit-search-cancel-button,
  & .${qt.input}::-webkit-search-results-button,
  & .${qt.input}::-webkit-search-results-decoration`]: {
      display: "none"
    }
  })), fS = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementFooter",
    overridesResolver: (e, t) => t.columnsManagementFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5, 1, 0.5, 3),
    display: "flex",
    justifyContent: "space-between",
    borderTop: `1px solid ${e.palette.divider}`
  })), gS = se("div")(({ theme: e }) => ({
    padding: e.spacing(0.5, 0),
    color: e.palette.grey[500]
  })), hS = Ve(function(t, n) {
    var _a2, _b2;
    const { children: o, slotProps: r = {} } = t, l = r.button || {}, s = r.tooltip || {}, a = Ee(), i = ie(), d = nt(), u = nt(), [p, h] = c.useState(false), g = c.useRef(null), m = jt(n, g), x = (C) => {
      var _a3;
      h((E) => !E), (_a3 = l.onClick) == null ? void 0 : _a3.call(l, C);
    }, v = () => h(false), I = (C) => {
      C.key === "Tab" && C.preventDefault(), qu(C.key) && v();
    };
    return o == null ? null : f.jsxs(c.Fragment, {
      children: [
        f.jsx(i.slots.baseTooltip, b({
          title: a.current.getLocaleText("toolbarExportLabel"),
          enterDelay: 1e3
        }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseTooltip, s, {
          children: f.jsx(i.slots.baseButton, b({
            size: "small",
            startIcon: f.jsx(i.slots.exportIcon, {}),
            "aria-expanded": p,
            "aria-label": a.current.getLocaleText("toolbarExportLabel"),
            "aria-haspopup": "menu",
            "aria-controls": p ? u : void 0,
            id: d
          }, (_b2 = i.slotProps) == null ? void 0 : _b2.baseButton, l, {
            onClick: x,
            ref: m,
            children: a.current.getLocaleText("toolbarExport")
          }))
        })),
        f.jsx(_s, {
          open: p,
          target: g.current,
          onClose: v,
          position: "bottom-start",
          children: f.jsx(Ps, {
            id: u,
            className: P.menuList,
            "aria-labelledby": d,
            onKeyDown: I,
            autoFocusItem: p,
            children: c.Children.map(o, (C) => c.isValidElement(C) ? c.cloneElement(C, {
              hideMenu: v
            }) : C)
          })
        })
      ]
    });
  }), mS = [
    "hideMenu",
    "options"
  ], bS = [
    "hideMenu",
    "options"
  ], CS = [
    "csvOptions",
    "printOptions",
    "excelOptions"
  ];
  function wS(e) {
    const t = Ee(), { hideMenu: n, options: o } = e, r = ge(e, mS);
    return f.jsx(Ht, b({
      onClick: () => {
        t.current.exportDataAsCsv(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportCSV")
    }));
  }
  function xS(e) {
    const t = Ee(), { hideMenu: n, options: o } = e, r = ge(e, bS);
    return f.jsx(Ht, b({
      onClick: () => {
        t.current.exportDataAsPrint(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportPrint")
    }));
  }
  Ve(function(t, n) {
    const o = t, { csvOptions: r = {}, printOptions: l = {}, excelOptions: s } = o, a = ge(o, CS), d = Ee().current.unstable_applyPipeProcessors("exportMenu", [], {
      excelOptions: s,
      csvOptions: r,
      printOptions: l
    }).sort((u, p) => u.componentName > p.componentName ? 1 : -1);
    return d.length === 0 ? null : f.jsx(hS, b({}, a, {
      ref: n,
      children: d.map((u, p) => c.cloneElement(u.component, {
        key: p
      }))
    }));
  });
  const vS = [
    "className",
    "selectedRowCount"
  ], yS = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "selectedRowCount"
      ]
    }, He, t);
  }, SS = Je("div", {
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
  })), IS = Ve(function(t, n) {
    const { className: o, selectedRowCount: r } = t, l = ge(t, vS), s = Ee(), a = ie(), i = yS(a), d = s.current.getLocaleText("footerRowSelected")(r);
    return f.jsx(SS, b({
      className: de(i.root, o),
      ownerState: a
    }, l, {
      ref: n,
      children: d
    }));
  }), PS = Ve(function(t, n) {
    var _a2, _b2;
    const o = Ee(), r = ie(), l = Q(o, Ym), s = Q(o, tC), a = Q(o, Ws), i = !r.hideFooterSelectedRowCount && s > 0 ? f.jsx(IS, {
      selectedRowCount: s
    }) : f.jsx("div", {}), d = !r.hideFooterRowCount && !r.pagination ? f.jsx(r.slots.footerRowCount, b({}, (_a2 = r.slotProps) == null ? void 0 : _a2.footerRowCount, {
      rowCount: l,
      visibleRowCount: a
    })) : null, u = r.pagination && !r.hideFooterPagination && r.slots.pagination && f.jsx(r.slots.pagination, b({}, (_b2 = r.slotProps) == null ? void 0 : _b2.pagination));
    return f.jsxs(rv, b({}, t, {
      ref: n,
      children: [
        i,
        d,
        u
      ]
    }));
  }), rr = (e, t, n, o, r, l) => {
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
  }, al = (e, t, n, o, r) => {
    const l = t === n - 1;
    return e === Oe.LEFT && l ? true : o ? e === Oe.LEFT ? true : e === Oe.RIGHT ? !l : !l || r : false;
  }, cl = (e, t) => e === Oe.RIGHT && t === 0, Xo = {
    root: P.scrollbarFiller,
    header: P["scrollbarFiller--header"],
    borderTop: P["scrollbarFiller--borderTop"],
    borderBottom: P["scrollbarFiller--borderBottom"],
    pinnedRight: P["scrollbarFiller--pinnedRight"]
  };
  function oi({ header: e, borderTop: t = true, borderBottom: n, pinnedRight: o }) {
    return f.jsx("div", {
      role: "presentation",
      className: de(Xo.root, e && Xo.header, t && Xo.borderTop, n && Xo.borderBottom, o && Xo.pinnedRight)
    });
  }
  const MS = Je("div", {
    name: "MuiDataGrid",
    slot: "SkeletonLoadingOverlay",
    overridesResolver: (e, t) => t.skeletonLoadingOverlay
  })({
    minWidth: "100%",
    width: "max-content",
    height: "100%",
    overflow: "clip"
  }), kS = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "skeletonLoadingOverlay"
      ]
    }, He, t);
  }, Oa = (e) => parseInt(e.getAttribute("data-colindex"), 10), ES = Ve(function(t, n) {
    const o = ie(), { slots: r } = o, l = At(), s = kS({
      classes: o.classes
    }), a = c.useRef(null), i = jt(a, n), d = Ee(), u = Q(d, mt), p = (u == null ? void 0 : u.viewportInnerSize.height) ?? 0, h = Math.ceil(p / u.rowHeight), g = Q(d, fl), m = Q(d, Wn), x = c.useMemo(() => m.filter((H) => H <= g).length, [
      g,
      m
    ]), v = Q(d, st), I = c.useMemo(() => v.slice(0, x), [
      v,
      x
    ]), C = Q(d, $o), E = c.useCallback((H) => {
      if (C.left.findIndex((A) => A.field === H) !== -1) return Oe.LEFT;
      if (C.right.findIndex((A) => A.field === H) !== -1) return Oe.RIGHT;
    }, [
      C.left,
      C.right
    ]), $ = c.useMemo(() => {
      const H = [];
      for (let A = 0; A < h; A += 1) {
        const R = [];
        for (let y = 0; y < I.length; y += 1) {
          const w = I[y], M = E(w.field), O = M === Oe.LEFT, D = M === Oe.RIGHT, _ = Gu(M, l), F = _ ? C[_].length : I.length - C.left.length - C.right.length, S = _ ? C[_].findIndex((ae) => ae.field === w.field) : y - C.left.length, T = u.hasScrollY ? u.scrollbarSize : 0, L = Sl({}, l, M, rr(M, w.computedWidth, y, m, u.columnsTotalWidth, T)), z = u.columnsTotalWidth < u.viewportOuterSize.width, G = al(M, S, F, o.showCellVerticalBorder, z), j = cl(M, S), V = y === I.length - 1, U = D && S === 0, W = U && z, K = V && !U && z, B = u.viewportOuterSize.width - u.columnsTotalWidth, te = Math.max(0, B), J = f.jsx(r.skeletonCell, {
            width: te,
            empty: true
          }, `skeleton-filler-column-${A}`), ne = V && T !== 0;
          W && R.push(J), R.push(f.jsx(r.skeletonCell, {
            field: w.field,
            type: w.type,
            align: w.align,
            width: "var(--width)",
            height: u.rowHeight,
            "data-colindex": y,
            className: de(O && P["cell--pinnedLeft"], D && P["cell--pinnedRight"], G && P["cell--withRightBorder"], j && P["cell--withLeftBorder"]),
            style: b({
              "--width": `${w.computedWidth}px`
            }, L)
          }, `skeleton-column-${A}-${w.field}`)), K && R.push(J), ne && R.push(f.jsx(oi, {
            pinnedRight: C.right.length > 0
          }, `skeleton-scrollbar-filler-${A}`));
        }
        H.push(f.jsx("div", {
          className: de(P.row, P.rowSkeleton, A === 0 && P["row--firstVisible"]),
          children: R
        }, `skeleton-row-${A}`));
      }
      return H;
    }, [
      r,
      I,
      C,
      h,
      o.showCellVerticalBorder,
      u,
      m,
      E,
      l
    ]);
    return oe(d, "columnResize", (H) => {
      var _a2, _b2, _c2, _d2, _e;
      const { colDef: A, width: R } = H, y = (_a2 = a.current) == null ? void 0 : _a2.querySelectorAll(`[data-field="${Dn(A.field)}"]`);
      if (!y) throw new Error("MUI X: Expected skeleton cells to be defined with `data-field` attribute.");
      const w = I.findIndex((S) => S.field === A.field), M = E(A.field), O = M === Oe.LEFT, D = M === Oe.RIGHT, _ = getComputedStyle(y[0]).getPropertyValue("--width"), F = parseInt(_, 10) - R;
      y && y.forEach((S) => {
        S.style.setProperty("--width", `${R}px`);
      }), O && ((_c2 = (_b2 = a.current) == null ? void 0 : _b2.querySelectorAll(`.${P["cell--pinnedLeft"]}`)) == null ? void 0 : _c2.forEach((T) => {
        Oa(T) > w && (T.style.left = `${parseInt(getComputedStyle(T).left, 10) - F}px`);
      })), D && ((_e = (_d2 = a.current) == null ? void 0 : _d2.querySelectorAll(`.${P["cell--pinnedRight"]}`)) == null ? void 0 : _e.forEach((T) => {
        Oa(T) < w && (T.style.right = `${parseInt(getComputedStyle(T).right, 10) + F}px`);
      }));
    }), f.jsx(MS, b({
      className: s.root
    }, t, {
      ref: i,
      children: $
    }));
  }), FS = [
    "variant",
    "noRowsVariant",
    "style"
  ], TS = {
    "circular-progress": {
      component: Pd,
      style: {}
    },
    "linear-progress": {
      component: Eg,
      style: {
        display: "block"
      }
    },
    skeleton: {
      component: ES,
      style: {
        display: "block"
      }
    }
  }, OS = Ve(function(t, n) {
    const { variant: o = "circular-progress", noRowsVariant: r = "circular-progress", style: l } = t, s = ge(t, FS), a = Ee(), i = Q(a, wr), d = TS[i === 0 ? r : o];
    return f.jsx(ti, b({
      style: b({}, d.style, l)
    }, s, {
      ref: n,
      children: f.jsx(d.component, {})
    }));
  }), DS = Ve(function(t, n) {
    const r = Ee().current.getLocaleText("noRowsLabel");
    return f.jsx(ti, b({}, t, {
      ref: n,
      children: r
    }));
  }), RS = se(gh)(({ theme: e }) => ({
    maxHeight: "calc(100% + 1px)",
    flexGrow: 1,
    [`& .${Xn.selectLabel}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    [`& .${Xn.input}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "inline-flex"
      }
    }
  })), HS = (e, t) => ({ from: n, to: o, count: r, page: l }) => e({
    from: n,
    to: o,
    count: r,
    page: l,
    estimated: t
  }), $S = ({ from: e, to: t, count: n, estimated: o }) => o ? `${e}\u2013${t} of ${n !== -1 ? n : `more than ${o > t ? o : t}`}` : `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`, LS = Ve(function(t, n) {
    const o = Ee(), r = ie(), l = Q(o, kt), s = Q(o, mo), a = Q(o, bu), { paginationMode: i, loading: d, estimatedRowCount: u } = r, p = c.useMemo(() => s === -1 && i === "server" && d ? {
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
    ]), m = c.useCallback(($) => {
      const k = Number($.target.value);
      o.current.setPageSize(k);
    }, [
      o
    ]), x = c.useCallback(($, k) => {
      o.current.setPage(k);
    }, [
      o
    ]), I = (($) => {
      for (let k = 0; k < r.pageSizeOptions.length; k += 1) {
        const H = r.pageSizeOptions[k];
        if (typeof H == "number") {
          if (H === $) return true;
        } else if (H.value === $) return true;
      }
      return false;
    })(l.pageSize) ? r.pageSizeOptions : [], C = o.current.getLocaleText("MuiTablePagination"), E = HS(C.labelDisplayedRows || $S, u);
    return f.jsx(RS, b({
      component: "div",
      count: s,
      page: g,
      rowsPerPageOptions: I,
      rowsPerPage: l.pageSize,
      onPageChange: x,
      onRowsPerPageChange: m
    }, p, C, {
      labelDisplayedRows: E
    }, t, {
      ref: n
    }));
  }), jS = [
    "className",
    "rowCount",
    "visibleRowCount"
  ], AS = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "rowCount"
      ]
    }, He, t);
  }, zS = Je("div", {
    name: "MuiDataGrid",
    slot: "RowCount",
    overridesResolver: (e, t) => t.rowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2)
  })), GS = Ve(function(t, n) {
    const { className: o, rowCount: r, visibleRowCount: l } = t, s = ge(t, jS), a = Ee(), i = ie(), d = AS(i);
    if (r === 0) return null;
    const u = l < r ? a.current.getLocaleText("footerTotalVisibleRows")(l, r) : r.toLocaleString();
    return f.jsxs(zS, b({
      className: de(d.root, o),
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
  function _S(e) {
    for (const t in e) return false;
    return true;
  }
  function VS(e, t) {
    return me(t, He, e);
  }
  const NS = [
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
  ], BS = Cr(ht, (e, t) => t ? !!_S(e) : false), WS = Ve(function(t, n) {
    var _a2;
    const { selected: o, rowId: r, row: l, index: s, style: a, rowHeight: i, className: d, visibleColumns: u, pinnedColumns: p, offsetLeft: h, columnsTotalWidth: g, firstColumnIndex: m, lastColumnIndex: x, focusedColumnIndex: v, isFirstVisible: I, isLastVisible: C, isNotVisible: E, showBottomBorder: $, scrollbarWidth: k, gridHasFiller: H, onClick: A, onDoubleClick: R, onMouseEnter: y, onMouseLeave: w, onMouseOut: M, onMouseOver: O } = t, D = ge(t, NS), _ = an(), F = Zs(), S = c.useRef(null), T = ie(), L = Qs(_), z = Q(_, un), G = Q(_, no), j = Q(_, Wn), V = T.rowReordering, U = ar(_, BS, V), W = jt(S, n), K = _.current.getRowNode(r), B = ar(_, Au, {
      rowId: r,
      editMode: T.editMode
    }), te = T.editMode === yn.Row, J = v !== void 0, ne = J && v >= p.left.length && v < m, ae = J && v < u.length - p.right.length && v >= x, we = VS(T.classes, {
      root: [
        "row",
        o && "selected",
        te && "row--editable",
        B && "row--editing",
        I && "row--firstVisible",
        C && "row--lastVisible",
        $ && "row--borderBottom",
        i === "auto" && "row--dynamicHeight"
      ]
    }), Y = F.hooks.useGridRowAriaAttributes();
    c.useLayoutEffect(() => {
      if (L.range) {
        const fe = _.current.getRowIndexRelativeToVisibleRows(r);
        fe !== void 0 && _.current.unstable_setLastMeasuredRowIndex(fe);
      }
      if (S.current && i === "auto") return _.current.observeRowHeight(S.current, r);
    }, [
      _,
      L.range,
      i,
      r
    ]);
    const re = c.useCallback((fe, xe) => (pe) => {
      Mr(pe) || _.current.getRow(r) && (_.current.publishEvent(fe, _.current.getRowParams(r), pe), xe && xe(pe));
    }, [
      _,
      r
    ]), ye = c.useCallback((fe) => {
      var _a3, _b2;
      const pe = (_a3 = sl(fe.target, P.cell)) == null ? void 0 : _a3.getAttribute("data-field");
      pe && (pe === Ao.field || pe === ml || pe === "__reorder__" || _.current.getCellMode(r, pe) === Xe.Edit || ((_b2 = _.current.getColumn(pe)) == null ? void 0 : _b2.type) === gl) || re("rowClick", A)(fe);
    }, [
      _,
      A,
      re,
      r
    ]), { slots: Z, slotProps: Se, disableColumnReorder: ee } = T, ve = Q(_, () => b({}, _.current.getRowHeightEntry(r)), Ls), Ce = c.useMemo(() => {
      if (E) return {
        opacity: 0,
        width: 0,
        height: 0
      };
      const fe = b({}, a, {
        maxHeight: i === "auto" ? "none" : i,
        minHeight: i,
        "--height": typeof i == "number" ? `${i}px` : i
      });
      if (ve.spacingTop) {
        const xe = T.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
        fe[xe] = ve.spacingTop;
      }
      if (ve.spacingBottom) {
        const xe = T.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom";
        let pe = fe[xe];
        typeof pe != "number" && (pe = parseInt(pe || "0", 10)), pe += ve.spacingBottom, fe[xe] = pe;
      }
      return fe;
    }, [
      E,
      i,
      a,
      ve,
      T.rowSpacingType
    ]), Fe = _.current.unstable_applyPipeProcessors("rowClassName", [], r), Ne = Y(K, s);
    if (typeof T.getRowClassName == "function") {
      const fe = s - (((_a2 = L.range) == null ? void 0 : _a2.firstRowIndex) || 0), xe = b({}, _.current.getRowParams(r), {
        isFirstVisible: fe === 0,
        isLastVisible: fe === L.rows.length - 1,
        indexRelativeToCurrentPage: fe
      });
      Fe.push(T.getRowClassName(xe));
    }
    const Be = (fe, xe, pe, he, je = Oe.NONE) => {
      const Re = _.current.unstable_getCellColSpanInfo(r, pe);
      if (Re == null ? void 0 : Re.spannedByColSpan) return null;
      const rt = (Re == null ? void 0 : Re.cellProps.width) ?? fe.computedWidth, xt = (Re == null ? void 0 : Re.cellProps.colSpan) ?? 1, ut = rr(je, fe.computedWidth, pe, j, g, k);
      if (K.type === "skeletonRow") return f.jsx(Z.skeletonCell, {
        type: fe.type,
        width: rt,
        height: i,
        field: fe.field,
        align: fe.align
      }, fe.field);
      const In = fe.field === "__reorder__", Ot = !(ee || fe.disableReorder), Pn = U && !z.length && G <= 1, It = !(Ot || In && Pn), zt = je === Oe.VIRTUAL, Et = cl(je, xe), Dt = al(je, xe, he, T.showCellVerticalBorder, H);
      return f.jsx(Z.cell, b({
        column: fe,
        width: rt,
        rowId: r,
        align: fe.align || "left",
        colIndex: pe,
        colSpan: xt,
        disableDragEvents: It,
        isNotVisible: zt,
        pinnedOffset: ut,
        pinnedPosition: je,
        showLeftBorder: Et,
        showRightBorder: Dt,
        row: l,
        rowNode: K
      }, Se == null ? void 0 : Se.cell), fe.field);
    }, ze = p.left.map((fe, xe) => Be(fe, xe, xe, p.left.length, Oe.LEFT)), $e = p.right.map((fe, xe) => {
      const pe = u.length - p.right.length + xe;
      return Be(fe, xe, pe, p.right.length, Oe.RIGHT);
    }), Le = u.length - p.left.length - p.right.length, We = [];
    ne && We.push(Be(u[v], v - p.left.length, v, Le, Oe.VIRTUAL));
    for (let fe = m; fe < x; fe += 1) {
      const xe = u[fe], pe = fe - p.left.length;
      xe && We.push(Be(xe, pe, fe, Le));
    }
    ae && We.push(Be(u[v], v - p.left.length, v, Le, Oe.VIRTUAL));
    const Ge = l ? {
      onClick: ye,
      onDoubleClick: re("rowDoubleClick", R),
      onMouseEnter: re("rowMouseEnter", y),
      onMouseLeave: re("rowMouseLeave", w),
      onMouseOut: re("rowMouseOut", M),
      onMouseOver: re("rowMouseOver", O)
    } : null;
    return f.jsxs("div", b({
      "data-id": r,
      "data-rowindex": s,
      role: "row",
      className: de(...Fe, we.root, d),
      style: Ce
    }, Ne, Ge, D, {
      ref: W,
      children: [
        ze,
        f.jsx("div", {
          role: "presentation",
          className: P.cellOffsetLeft,
          style: {
            width: h
          }
        }),
        We,
        f.jsx("div", {
          role: "presentation",
          className: de(P.cell, P.cellEmpty)
        }),
        $e,
        k !== 0 && f.jsx(oi, {
          pinnedRight: p.right.length > 0,
          borderTop: !I
        })
      ]
    }));
  }), US = Tn(WS), KS = () => {
    const e = an(), t = ie(), n = Q(e, st), o = Q(e, Bs), r = Q(e, Ir), l = Q(e, jc);
    return {
      role: "grid",
      "aria-colcount": n.length,
      "aria-rowcount": r + 1 + l + o,
      "aria-multiselectable": Us(t)
    };
  }, qS = () => {
    const e = an(), t = Q(e, _n), n = Q(e, Ir);
    return c.useCallback((o, r) => {
      const l = {}, s = r + n + 2;
      return l["aria-rowindex"] = s, e.current.isRowSelectable(o.id) && (l["aria-selected"] = t[o.id] !== void 0), l;
    }, [
      e,
      t,
      n
    ]);
  };
  function YS({ privateApiRef: e, configuration: t, props: n, children: o }) {
    const r = c.useRef(e.current.getPublicApi());
    return f.jsx(Lu.Provider, {
      value: t,
      children: f.jsx(Sc.Provider, {
        value: n,
        children: f.jsx(Tu.Provider, {
          value: e,
          children: f.jsx(yc.Provider, {
            value: r,
            children: o
          })
        })
      })
    });
  }
  const XS = (e) => {
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
  }, QS = (e) => {
    const t = At();
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
  }, JS = ab() && window.localStorage.getItem("DEBUG") != null, Zo = () => {
  }, ZS = {
    debug: Zo,
    info: Zo,
    warn: Zo,
    error: Zo
  }, Da = [
    "debug",
    "info",
    "warn",
    "error"
  ];
  function Ra(e, t, n = console) {
    const o = Da.indexOf(t);
    if (o === -1) throw new Error(`MUI X: Log level ${t} not recognized.`);
    return Da.reduce((l, s, a) => (a >= o ? l[s] = (...i) => {
      const [d, ...u] = i;
      n[s](`MUI X: ${e} - ${d}`, ...u);
    } : l[s] = Zo, l), {});
  }
  const e0 = (e, t) => {
    const n = c.useCallback((o) => JS ? Ra(o, "debug", t.logger) : t.logLevel ? Ra(o, t.logLevel.toString(), t.logger) : ZS, [
      t.logLevel,
      t.logger
    ]);
    ke(e, {
      getLogger: n
    }, "private");
  };
  class t0 {
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
  class ri {
    static create(t) {
      return new ri(t);
    }
    constructor(t) {
      this.value = void 0, this.listeners = void 0, this.subscribe = (n) => (this.listeners.add(n), () => {
        this.listeners.delete(n);
      }), this.getSnapshot = () => this.value, this.update = (n) => {
        this.value = n, this.listeners.forEach((o) => o(n));
      }, this.value = t, this.listeners = /* @__PURE__ */ new Set();
    }
  }
  const Qu = /* @__PURE__ */ Symbol("mui.api_private"), n0 = (e) => e.isPropagationStopped !== void 0;
  let Ha = 0;
  function o0(e) {
    var _a2;
    const t = (_a2 = e.current) == null ? void 0 : _a2[Qu];
    if (t) return t;
    const n = {}, o = {
      state: n,
      store: ri.create(n),
      instanceId: {
        id: Ha
      }
    };
    return Ha += 1, o.getPublicApi = () => e.current, o.register = (r, l) => {
      Object.keys(l).forEach((s) => {
        const a = l[s], i = o[s];
        if ((i == null ? void 0 : i.spying) === true ? i.target = a : o[s] = a, r === "public") {
          const d = e.current, u = d[s];
          (u == null ? void 0 : u.spying) === true ? u.target = a : d[s] = a;
        }
      });
    }, o.register("private", {
      caches: {},
      eventManager: new t0()
    }), o;
  }
  function r0(e) {
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
      [Qu]: e.current
    };
  }
  function l0(e, t) {
    var _a2;
    const n = c.useRef(null), o = c.useRef(null);
    o.current || (o.current = o0(n)), n.current || (n.current = r0(o));
    const r = c.useCallback((...s) => {
      const [a, i, d = {}] = s;
      if (d.defaultMuiPrevented = false, n0(d) && d.isPropagationStopped()) return;
      const u = t.signature === nn.DataGridPro || t.signature === nn.DataGridPremium ? {
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
  const s0 = (e, t) => {
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
  function pr(e) {
    "@babel/helpers - typeof";
    return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, pr(e);
  }
  function i0(e, t) {
    if (pr(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var o = n.call(e, t);
      if (pr(o) != "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function fr(e) {
    var t = i0(e, "string");
    return pr(t) == "symbol" ? t : t + "";
  }
  const a0 = (e) => {
    const t = c.useRef({}), n = c.useRef(false), o = c.useCallback((u) => {
      n.current || !u || (n.current = true, Object.values(u.appliers).forEach((p) => {
        p();
      }), n.current = false);
    }, []), r = c.useCallback((u, p, h) => {
      t.current[u] || (t.current[u] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      });
      const g = t.current[u];
      return g.processors.get(p) !== h && (g.processors.set(p, h), g.processorsAsArray = Array.from(t.current[u].processors.values()).filter((x) => x !== null), o(g)), () => {
        t.current[u].processors.set(p, null), t.current[u].processorsAsArray = Array.from(t.current[u].processors.values()).filter((x) => x !== null);
      };
    }, [
      o
    ]), l = c.useCallback((u, p, h) => (t.current[u] || (t.current[u] = {
      processors: /* @__PURE__ */ new Map(),
      processorsAsArray: [],
      appliers: {}
    }), t.current[u].appliers[p] = h, () => {
      const g = t.current[u].appliers, m = ge(g, [
        p
      ].map(fr));
      t.current[u].appliers = m;
    }), []), s = c.useCallback((u) => {
      o(t.current[u]);
    }, [
      o
    ]), a = c.useCallback((...u) => {
      const [p, h, g] = u;
      if (!t.current[p]) return h;
      const m = t.current[p].processorsAsArray;
      let x = h;
      for (let v = 0; v < m.length; v += 1) x = m[v](x, g);
      return x;
    }, []), i = {
      registerPipeProcessor: r,
      registerPipeApplier: l,
      requestPipeProcessorsApplication: s
    }, d = {
      unstable_applyPipeProcessors: a
    };
    ke(e, i, "private"), ke(e, d, "public");
  }, ot = (e, t, n, o = true) => {
    const r = c.useRef(null), l = c.useRef(`mui-${Math.round(Math.random() * 1e9)}`), s = c.useCallback(() => {
      r.current = e.current.registerPipeProcessor(t, l.current, n);
    }, [
      e,
      n,
      t
    ]);
    xr(() => {
      o && s();
    });
    const a = c.useRef(true);
    c.useEffect(() => (a.current ? a.current = false : o && s(), () => {
      r.current && (r.current(), r.current = null);
    }), [
      s,
      o
    ]);
  }, li = (e, t, n) => {
    const o = c.useRef(null), r = c.useRef(`mui-${Math.round(Math.random() * 1e9)}`), l = c.useCallback(() => {
      o.current = e.current.registerPipeApplier(t, r.current, n);
    }, [
      e,
      n,
      t
    ]);
    xr(() => {
      l();
    });
    const s = c.useRef(true);
    c.useEffect(() => (s.current ? s.current = false : l(), () => {
      o.current && (o.current(), o.current = null);
    }), [
      l
    ]);
  }, ul = (e, t, n, o) => {
    const r = c.useCallback(() => {
      e.current.registerStrategyProcessor(t, n, o);
    }, [
      e,
      o,
      n,
      t
    ]);
    xr(() => {
      r();
    });
    const l = c.useRef(true);
    c.useEffect(() => {
      l.current ? l.current = false : r();
    }, [
      r
    ]);
  }, eo = "none", $a = {
    rowTreeCreation: "rowTree",
    filtering: "rowTree",
    sorting: "rowTree",
    visibleRowsLookupCreation: "rowTree"
  }, c0 = (e) => {
    const t = c.useRef(/* @__PURE__ */ new Map()), n = c.useRef({}), o = c.useCallback((i, d, u) => {
      const p = () => {
        const m = n.current[d], x = ge(m, [
          i
        ].map(fr));
        n.current[d] = x;
      };
      n.current[d] || (n.current[d] = {});
      const h = n.current[d], g = h[i];
      return h[i] = u, !g || g === u || i === e.current.getActiveStrategy($a[d]) && e.current.publishEvent("activeStrategyProcessorChange", d), p;
    }, [
      e
    ]), r = c.useCallback((i, d) => {
      const u = e.current.getActiveStrategy($a[i]);
      if (u == null) throw new Error("Can't apply a strategy processor before defining an active strategy");
      const p = n.current[i];
      if (!p || !p[u]) throw new Error(`No processor found for processor "${i}" on strategy "${u}"`);
      const h = p[u];
      return h(d);
    }, [
      e
    ]), l = c.useCallback((i) => {
      var _a2;
      return ((_a2 = Array.from(t.current.entries()).find(([, p]) => p.group !== i ? false : p.isAvailable())) == null ? void 0 : _a2[0]) ?? eo;
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
  }, u0 = (e) => {
    const t = c.useRef({}), n = c.useCallback((i) => {
      t.current[i.stateId] = i;
    }, []), o = c.useCallback((i, d) => {
      let u;
      if (ib(i) ? u = i(e.current.state) : u = i, e.current.state === u) return false;
      let p = false;
      const h = [];
      if (Object.keys(t.current).forEach((g) => {
        const m = t.current[g], x = m.stateSelector(e.current.state, e.current.instanceId), v = m.stateSelector(u, e.current.instanceId);
        v !== x && (h.push({
          stateId: m.stateId,
          hasPropChanged: v !== m.propModel
        }), m.propModel !== void 0 && v !== m.propModel && (p = true));
      }), h.length > 1) throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${h[0].stateId}, therefore, you're not allowed to update ${h.map((g) => g.stateId).join(", ")} in the same transaction.`);
      if (p || (e.current.state = u, e.current.publishEvent("stateChange", u), e.current.store.update(u)), h.length === 1) {
        const { stateId: g, hasPropChanged: m } = h[0], x = t.current[g], v = x.stateSelector(u, e.current.instanceId);
        x.propOnChange && m && x.propOnChange(v, {
          reason: d,
          api: e.current
        }), p || e.current.publishEvent(x.changeEvent, v, {
          reason: d
        });
      }
      return !p;
    }, [
      e
    ]), r = c.useCallback((i, d, u) => e.current.setState((p) => b({}, p, {
      [i]: d(p[i])
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
  }, d0 = (e, t) => b({}, e, {
    props: {
      getRowId: t.getRowId
    }
  }), p0 = (e, t) => {
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
  }, f0 = (e, t) => {
    const n = l0(e, t);
    return XS(n), p0(n, t), QS(n), e0(n, t), u0(n), a0(n), c0(n), s0(n, t), n.current.register("private", {
      rootProps: t
    }), n;
  }, gt = (e, t, n) => {
    const o = c.useRef(false);
    o.current || (t.current.state = e(t.current.state, n, t), o.current = true);
  };
  function fs(e, t) {
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
  const Ju = (e, t) => {
    var _a2, _b2;
    const { csvOptions: n, ignoreValueFormatter: o } = t;
    let r;
    if (o) {
      const l = e.colDef.type;
      l === "number" ? r = String(e.value) : l === "date" || l === "dateTime" ? r = (_a2 = e.value) == null ? void 0 : _a2.toISOString() : typeof ((_b2 = e.value) == null ? void 0 : _b2.toString) == "function" ? r = e.value.toString() : r = e.value;
    } else r = e.formattedValue;
    return fs(r, n);
  };
  class gs {
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
  const g0 = ({ id: e, columns: t, getCellParams: n, csvOptions: o, ignoreValueFormatter: r }) => {
    const l = new gs({
      csvOptions: o
    });
    return t.forEach((s) => {
      const a = n(e, s.field);
      l.addValue(Ju(a, {
        ignoreValueFormatter: r,
        csvOptions: o
      }));
    }), l.getRowString();
  };
  function h0(e) {
    const { columns: t, rowIds: n, csvOptions: o, ignoreValueFormatter: r, apiRef: l } = e, s = n.reduce((p, h) => `${p}${g0({
      id: h,
      columns: t,
      getCellParams: l.current.getCellParams,
      ignoreValueFormatter: r,
      csvOptions: o
    })}\r
`, "").trim();
    if (!o.includeHeaders) return s;
    const a = t.filter((p) => p.field !== Ao.field), i = [];
    if (o.includeColumnGroupsHeaders) {
      const p = l.current.getAllGroupDetails();
      let h = 0;
      const g = a.reduce((m, x) => {
        const v = l.current.getColumnGroupPath(x.field);
        return m[x.field] = v, h = Math.max(h, v.length), m;
      }, {});
      for (let m = 0; m < h; m += 1) {
        const x = new gs({
          csvOptions: o,
          sanitizeCellValue: fs
        });
        i.push(x), a.forEach((v) => {
          const I = (g[v.field] || [])[m], C = p[I];
          x.addValue(C ? C.headerName || C.groupId : "");
        });
      }
    }
    const d = new gs({
      csvOptions: o,
      sanitizeCellValue: fs
    });
    return a.forEach((p) => {
      d.addValue(p.headerName || p.field);
    }), i.push(d), `${`${i.map((p) => p.getRowString()).join(`\r
`)}\r
`}${s}`.trim();
  }
  function La(e) {
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
  function m0(e) {
    navigator.clipboard ? navigator.clipboard.writeText(e).catch(() => {
      La(e);
    }) : La(e);
  }
  function b0(e) {
    var _a2;
    return !!(((_a2 = window.getSelection()) == null ? void 0 : _a2.toString()) || e && (e.selectionEnd || 0) - (e.selectionStart || 0) > 0);
  }
  const C0 = (e, t) => {
    const n = t.ignoreValueFormatterDuringExport, o = (typeof n == "object" ? n == null ? void 0 : n.clipboardExport : n) || false, r = t.clipboardCopyCellDelimiter, l = c.useCallback((s) => {
      if (!gy(s) || b0(s.target)) return;
      let a = "";
      if (e.current.getSelectedRows().size > 0) a = e.current.getDataAsCsv({
        includeHeaders: false,
        delimiter: r,
        shouldAppendQuotes: false,
        escapeFormulas: false
      });
      else {
        const d = Rt(e);
        if (d) {
          const u = e.current.getCellParams(d.id, d.field);
          a = Ju(u, {
            csvOptions: {
              delimiter: r,
              shouldAppendQuotes: false,
              escapeFormulas: false
            },
            ignoreValueFormatter: o
          });
        }
      }
      a = e.current.unstable_applyPipeProcessors("clipboardCopy", a), a && (m0(a), e.current.publishEvent("clipboardCopy", a));
    }, [
      e,
      o,
      r
    ]);
    du(e, () => e.current.rootElementRef.current, "keydown", l), Qe(e, "clipboardCopy", t.onClipboardCopy);
  }, w0 = (e) => b({}, e, {
    columnMenu: {
      open: false
    }
  }), x0 = (e) => {
    const t = wt(e, "useGridColumnMenu"), n = c.useCallback((s) => {
      const a = Ur(e.current.state), i = {
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
      const s = Ur(e.current.state);
      if (s.field) {
        const d = On(e), u = Zt(e), p = En(e);
        let h = s.field;
        if (d[h] || (h = p[0]), u[h] === false) {
          const g = p.filter((x) => x === h ? true : u[x] !== false), m = g.indexOf(h);
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
      const a = Ur(e.current.state);
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
    }, "public"), oe(e, "columnResizeStart", o), oe(e, "virtualScrollerWheel", e.current.hideColumnMenu), oe(e, "virtualScrollerTouchMove", e.current.hideColumnMenu);
  }, v0 = (e, t, n) => {
    var _a2, _b2, _c2;
    const o = po({
      apiRef: n,
      columnsToUpsert: t.columns,
      initialState: (_a2 = t.initialState) == null ? void 0 : _a2.columns,
      columnVisibilityModel: t.columnVisibilityModel ?? ((_c2 = (_b2 = t.initialState) == null ? void 0 : _b2.columns) == null ? void 0 : _c2.columnVisibilityModel) ?? {},
      keepOnlyColumnsToUpsert: true
    });
    return b({}, e, {
      columns: o,
      pinnedColumns: e.pinnedColumns ?? tl
    });
  };
  function y0(e, t) {
    var _a2, _b2;
    const n = wt(e, "useGridColumns"), o = c.useRef(t.columns);
    e.current.registerControlState({
      stateId: "visibleColumns",
      propModel: t.columnVisibilityModel,
      propOnChange: t.onColumnVisibilityModelChange,
      stateSelector: Zt,
      changeEvent: "columnVisibilityModelChange"
    });
    const r = c.useCallback((w) => {
      n.debug("Updating columns state."), e.current.setState(ja(w)), e.current.publishEvent("columnsChange", w.orderedFields);
    }, [
      n,
      e
    ]), l = c.useCallback((w) => On(e)[w], [
      e
    ]), s = c.useCallback(() => on(e), [
      e
    ]), a = c.useCallback(() => st(e), [
      e
    ]), i = c.useCallback((w, M = true) => (M ? st(e) : on(e)).findIndex((D) => D.field === w), [
      e
    ]), d = c.useCallback((w) => {
      const M = i(w);
      return Wn(e)[M];
    }, [
      e,
      i
    ]), u = c.useCallback((w) => {
      var _a3, _b3;
      Zt(e) !== w && (e.current.setState((O) => b({}, O, {
        columns: po({
          apiRef: e,
          columnsToUpsert: [],
          initialState: void 0,
          columnVisibilityModel: w,
          keepOnlyColumnsToUpsert: false
        })
      })), (_b3 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b3.call(_a3), e.current.forceUpdate());
    }, [
      e
    ]), p = c.useCallback((w) => {
      const M = po({
        apiRef: e,
        columnsToUpsert: w,
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(M);
    }, [
      e,
      r
    ]), h = c.useCallback((w, M) => {
      const O = Zt(e), D = O[w] ?? true;
      if (M !== D) {
        const _ = b({}, O, {
          [w]: M
        });
        e.current.setColumnVisibilityModel(_);
      }
    }, [
      e
    ]), g = c.useCallback((w) => En(e).findIndex((O) => O === w), [
      e
    ]), m = c.useCallback((w, M) => {
      const O = En(e), D = g(w);
      if (D === M) return;
      n.debug(`Moving column ${w} to index ${M}`);
      const _ = [
        ...O
      ], F = _.splice(D, 1)[0];
      _.splice(M, 0, F), r(b({}, xn(e.current.state), {
        orderedFields: _
      }));
      const S = {
        column: e.current.getColumn(w),
        targetIndex: e.current.getColumnIndexRelativeToVisibleColumns(w),
        oldIndex: D
      };
      e.current.publishEvent("columnIndexChange", S);
    }, [
      e,
      n,
      r,
      g
    ]), x = c.useCallback((w, M) => {
      n.debug(`Updating column ${w} width to ${M}`);
      const O = xn(e.current.state), D = O.lookup[w], _ = b({}, D, {
        width: M,
        hasBeenResized: true
      });
      r(us(b({}, O, {
        lookup: b({}, O.lookup, {
          [w]: _
        })
      }), e.current.getRootDimensions())), e.current.publishEvent("columnWidthChange", {
        element: e.current.getColumnHeaderElement(w),
        colDef: _,
        width: M
      });
    }, [
      e,
      n,
      r
    ]), v = {
      getColumn: l,
      getAllColumns: s,
      getColumnIndex: i,
      getColumnPosition: d,
      getVisibleColumns: a,
      getColumnIndexRelativeToVisibleColumns: g,
      updateColumns: p,
      setColumnVisibilityModel: u,
      setColumnVisibility: h,
      setColumnWidth: x
    }, I = {
      setColumnIndex: m
    };
    ke(e, v, "public"), ke(e, I, t.signature === nn.DataGrid ? "private" : "public");
    const C = c.useCallback((w, M) => {
      var _a3, _b3;
      const O = {}, D = Zt(e);
      (!M.exportOnlyDirtyModels || t.columnVisibilityModel != null || Object.keys(((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.columns) == null ? void 0 : _b3.columnVisibilityModel) ?? {}).length > 0 || Object.keys(D).length > 0) && (O.columnVisibilityModel = D), O.orderedFields = En(e);
      const F = on(e), S = {};
      return F.forEach((T) => {
        if (T.hasBeenResized) {
          const L = {};
          Iu.forEach((z) => {
            let G = T[z];
            G === 1 / 0 && (G = -1), L[z] = G;
          }), S[T.field] = L;
        }
      }), Object.keys(S).length > 0 && (O.dimensions = S), b({}, w, {
        columns: O
      });
    }, [
      e,
      t.columnVisibilityModel,
      (_a2 = t.initialState) == null ? void 0 : _a2.columns
    ]), E = c.useCallback((w, M) => {
      var _a3;
      const O = (_a3 = M.stateToRestore.columns) == null ? void 0 : _a3.columnVisibilityModel, D = M.stateToRestore.columns;
      if (O == null && D == null) return w;
      const _ = po({
        apiRef: e,
        columnsToUpsert: [],
        initialState: D,
        columnVisibilityModel: O,
        keepOnlyColumnsToUpsert: false
      });
      return e.current.setState(ja(_)), D != null && e.current.publishEvent("columnsChange", _.orderedFields), w;
    }, [
      e
    ]), $ = c.useCallback((w, M) => {
      var _a3;
      if (M === Zn.columns) {
        const O = t.slots.columnsPanel;
        return f.jsx(O, b({}, (_a3 = t.slotProps) == null ? void 0 : _a3.columnsPanel));
      }
      return w;
    }, [
      t.slots.columnsPanel,
      (_b2 = t.slotProps) == null ? void 0 : _b2.columnsPanel
    ]), k = c.useCallback((w) => t.disableColumnSelector ? w : [
      ...w,
      "columnMenuColumnsItem"
    ], [
      t.disableColumnSelector
    ]);
    ot(e, "columnMenu", k), ot(e, "exportState", C), ot(e, "restoreState", E), ot(e, "preferencePanel", $);
    const H = c.useRef(null);
    oe(e, "viewportInnerSizeChange", (w) => {
      if (H.current !== w.width) {
        if (H.current = w.width, !st(e).some((O) => O.flex && O.flex > 0)) return;
        r(us(xn(e.current.state), e.current.getRootDimensions()));
      }
    });
    const R = c.useCallback(() => {
      n.info("Columns pipe processing have changed, regenerating the columns");
      const w = po({
        apiRef: e,
        columnsToUpsert: [],
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(w);
    }, [
      e,
      n,
      r
    ]);
    li(e, "hydrateColumns", R);
    const y = c.useRef(true);
    c.useEffect(() => {
      if (y.current) {
        y.current = false;
        return;
      }
      if (n.info(`GridColumns have changed, new length ${t.columns.length}`), o.current === t.columns) return;
      const w = po({
        apiRef: e,
        initialState: void 0,
        columnsToUpsert: t.columns,
        keepOnlyColumnsToUpsert: true
      });
      o.current = t.columns, r(w);
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
  function ja(e) {
    return (t) => b({}, t, {
      columns: e
    });
  }
  const S0 = (e, t) => {
    var _a2;
    return b({}, e, {
      density: ((_a2 = t.initialState) == null ? void 0 : _a2.density) ?? t.density ?? "standard"
    });
  }, I0 = (e, t) => {
    var _a2;
    const n = wt(e, "useDensity");
    e.current.registerControlState({
      stateId: "density",
      propModel: t.density,
      propOnChange: t.onDensityChange,
      stateSelector: ho,
      changeEvent: "densityChange"
    });
    const r = {
      setDensity: Ke((a) => {
        ho(e.current.state) !== a && (n.debug(`Set grid density to ${a}`), e.current.setState((d) => b({}, d, {
          density: a
        })));
      })
    };
    ke(e, r, "public");
    const l = c.useCallback((a, i) => {
      var _a3;
      const d = ho(e.current.state);
      return !i.exportOnlyDirtyModels || t.density != null || ((_a3 = t.initialState) == null ? void 0 : _a3.density) != null ? b({}, a, {
        density: d
      }) : a;
    }, [
      e,
      t.density,
      (_a2 = t.initialState) == null ? void 0 : _a2.density
    ]), s = c.useCallback((a, i) => {
      var _a3;
      const d = ((_a3 = i.stateToRestore) == null ? void 0 : _a3.density) ? i.stateToRestore.density : ho(e.current.state);
      return e.current.setState((u) => b({}, u, {
        density: d
      })), a;
    }, [
      e
    ]);
    ot(e, "exportState", l), ot(e, "restoreState", s), c.useEffect(() => {
      t.density && e.current.setDensity(t.density);
    }, [
      e,
      t.density
    ]);
  };
  function P0(e, t = "csv", n = document.title || "untitled") {
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
  const Zu = ({ apiRef: e, options: t }) => {
    const n = on(e);
    return t.fields ? t.fields.reduce((r, l) => {
      const s = n.find((a) => a.field === l);
      return s && r.push(s), r;
    }, []) : (t.allColumns ? n : st(e)).filter((r) => !r.disableExport);
  }, ed = ({ apiRef: e }) => {
    var _a2, _b2;
    const t = su(e), n = pt(e), o = e.current.getSelectedRows(), r = t.filter((i) => n[i].type !== "footer"), l = Ro(e), s = ((_a2 = l == null ? void 0 : l.top) == null ? void 0 : _a2.map((i) => i.id)) || [], a = ((_b2 = l == null ? void 0 : l.bottom) == null ? void 0 : _b2.map((i) => i.id)) || [];
    return r.unshift(...s), r.push(...a), o.size > 0 ? r.filter((i) => o.has(i)) : r;
  }, M0 = (e, t) => {
    const n = wt(e, "useGridCsvExport"), o = t.ignoreValueFormatterDuringExport, r = (typeof o == "object" ? o == null ? void 0 : o.csvExport : o) || false, l = c.useCallback((d = {}) => {
      n.debug("Get data as CSV");
      const u = Zu({
        apiRef: e,
        options: d
      }), h = (d.getRowsToExport ?? ed)({
        apiRef: e
      });
      return h0({
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
      const u = l(d), p = new Blob([
        (d == null ? void 0 : d.utf8WithBom) ? new Uint8Array([
          239,
          187,
          191
        ]) : "",
        u
      ], {
        type: "text/csv"
      });
      P0(p, "csv", d == null ? void 0 : d.fileName);
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
          component: f.jsx(wS, {
            options: u.csvOptions
          }),
          componentName: "csvExport"
        }
      ];
    }, []);
    ot(e, "exportMenu", i);
  }, Kr = (e, t, n) => {
    let o = e.paginationModel;
    const r = e.rowCount, l = (n == null ? void 0 : n.pageSize) ?? o.pageSize, s = (n == null ? void 0 : n.page) ?? o.page, a = pu(r, l, s);
    n && ((n == null ? void 0 : n.page) !== o.page || (n == null ? void 0 : n.pageSize) !== o.pageSize) && (o = n);
    const i = l === -1 ? 0 : mC(o.page, a);
    return i !== o.page && (o = b({}, o, {
      page: i
    })), gu(o.pageSize, t), o;
  }, k0 = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridPaginationModel"), o = Q(e, Do), r = c.useRef(yt(e)), l = Math.floor(t.rowHeight * o);
    e.current.registerControlState({
      stateId: "paginationModel",
      propModel: t.paginationModel,
      propOnChange: t.onPaginationModelChange,
      stateSelector: kt,
      changeEvent: "paginationModelChange"
    });
    const s = c.useCallback((C) => {
      const E = kt(e);
      C !== E.page && (n.debug(`Setting page to ${C}`), e.current.setPaginationModel({
        page: C,
        pageSize: E.pageSize
      }));
    }, [
      e,
      n
    ]), a = c.useCallback((C) => {
      const E = kt(e);
      C !== E.pageSize && (n.debug(`Setting page size to ${C}`), e.current.setPaginationModel({
        pageSize: C,
        page: E.page
      }));
    }, [
      e,
      n
    ]), i = c.useCallback((C) => {
      const E = kt(e);
      C !== E && (n.debug("Setting 'paginationModel' to", C), e.current.setState(($) => b({}, $, {
        pagination: b({}, $.pagination, {
          paginationModel: Kr($.pagination, t.signature, C)
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
    const u = c.useCallback((C, E) => {
      var _a3, _b3;
      const $ = kt(e);
      return !E.exportOnlyDirtyModels || t.paginationModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.paginationModel) != null || $.page !== 0 && $.pageSize !== hC(t.autoPageSize) ? b({}, C, {
        pagination: b({}, C.pagination, {
          paginationModel: $
        })
      }) : C;
    }, [
      e,
      t.paginationModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel,
      t.autoPageSize
    ]), p = c.useCallback((C, E) => {
      var _a3, _b3;
      const $ = ((_a3 = E.stateToRestore.pagination) == null ? void 0 : _a3.paginationModel) ? b({}, fu(t.autoPageSize), (_b3 = E.stateToRestore.pagination) == null ? void 0 : _b3.paginationModel) : kt(e);
      return e.current.setState((k) => b({}, k, {
        pagination: b({}, k.pagination, {
          paginationModel: Kr(k.pagination, t.signature, $)
        })
      }), "stateRestorePreProcessing"), C;
    }, [
      e,
      t.autoPageSize,
      t.signature
    ]);
    ot(e, "exportState", u), ot(e, "restoreState", p);
    const h = () => {
      var _a3;
      const C = kt(e);
      ((_a3 = e.current.virtualScrollerRef) == null ? void 0 : _a3.current) && e.current.scrollToIndexes({
        rowIndex: C.page * C.pageSize
      });
    }, g = c.useCallback(() => {
      if (!t.autoPageSize) return;
      const C = e.current.getRootDimensions(), E = Math.max(1, Math.floor(C.viewportInnerSize.height / l));
      e.current.setPageSize(E);
    }, [
      e,
      t.autoPageSize,
      l
    ]), m = c.useCallback((C) => {
      if (C == null) return;
      const E = kt(e);
      if (E.page === 0) return;
      const $ = bu(e);
      E.page > $ - 1 && e.current.setPage(Math.max(0, $ - 1));
    }, [
      e
    ]), x = c.useCallback(() => {
      kt(e).page !== 0 && e.current.setPage(0), e.current.getScrollPosition().top !== 0 && e.current.scroll({
        top: 0
      });
    }, [
      e
    ]), v = c.useCallback((C) => {
      const E = b({}, C, {
        items: au(e)
      });
      Gn(E, r.current) || (r.current = E, x());
    }, [
      e,
      x
    ]);
    oe(e, "viewportInnerSizeChange", g), oe(e, "paginationModelChange", h), oe(e, "rowCountChange", m), oe(e, "sortModelChange", qn(t.resetPageOnSortFilter, x)), oe(e, "filterModelChange", qn(t.resetPageOnSortFilter, v));
    const I = c.useRef(true);
    c.useEffect(() => {
      if (I.current) {
        I.current = false;
        return;
      }
      t.pagination && e.current.setState((C) => b({}, C, {
        pagination: b({}, C.pagination, {
          paginationModel: Kr(C.pagination, t.signature, t.paginationModel)
        })
      }));
    }, [
      e,
      t.paginationModel,
      t.signature,
      t.pagination
    ]), c.useEffect(() => {
      e.current.setState((C) => {
        const E = t.pagination === true;
        return C.pagination.paginationMode === t.paginationMode || C.pagination.enabled === E ? C : b({}, C, {
          pagination: b({}, C.pagination, {
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
  function E0() {
    return new Promise((e) => {
      requestAnimationFrame(() => {
        e();
      });
    });
  }
  function F0(e) {
    const t = document.createElement("iframe");
    return t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.title = e || document.title, t;
  }
  const T0 = (e, t) => {
    const n = e.current.rootElementRef.current !== null, o = wt(e, "useGridPrintExport"), r = c.useRef(null), l = c.useRef(null), s = c.useRef({}), a = c.useRef([]), i = c.useRef(null);
    c.useEffect(() => {
      r.current = en(e.current.rootElementRef.current);
    }, [
      e,
      n
    ]);
    const d = c.useCallback((v, I, C) => new Promise((E) => {
      const $ = Zu({
        apiRef: e,
        options: {
          fields: v,
          allColumns: I
        }
      }).map((A) => A.field), k = on(e), H = {};
      k.forEach((A) => {
        H[A.field] = $.includes(A.field);
      }), C && (H[Ao.field] = true), e.current.setColumnVisibilityModel(H), E();
    }), [
      e
    ]), u = c.useCallback((v) => {
      const C = v({
        apiRef: e
      }).reduce((E, $) => {
        const k = e.current.getRow($);
        return k[Eo] || E.push(k), E;
      }, []);
      e.current.setRows(C);
    }, [
      e
    ]), p = c.useCallback((v, I) => {
      var _a2, _b2, _c2;
      const C = b({
        copyStyles: true,
        hideToolbar: false,
        hideFooter: false,
        includeCheckboxes: false
      }, I), E = v.contentDocument;
      if (!E) return;
      const $ = zo(e.current.state), k = e.current.rootElementRef.current, H = k.cloneNode(true), A = H.querySelector(`.${P.main}`);
      A.style.overflow = "visible", H.style.contain = "size";
      let R = ((_a2 = k.querySelector(`.${P.toolbarContainer}`)) == null ? void 0 : _a2.offsetHeight) || 0, y = ((_b2 = k.querySelector(`.${P.footerContainer}`)) == null ? void 0 : _b2.offsetHeight) || 0;
      const w = H.querySelector(`.${P.footerContainer}`);
      C.hideToolbar && ((_c2 = H.querySelector(`.${P.toolbarContainer}`)) == null ? void 0 : _c2.remove(), R = 0), C.hideFooter && w && (w.remove(), y = 0);
      const M = $.currentPageTotalHeight + vl(e, t) + R + y;
      H.style.height = `${M}px`, H.style.boxSizing = "content-box", !C.hideFooter && w && (w.style.position = "absolute", w.style.width = "100%", w.style.top = `${M - y}px`);
      const O = document.createElement("div");
      O.appendChild(H), E.body.style.marginTop = "0px", E.body.innerHTML = O.innerHTML;
      const D = typeof C.pageStyle == "function" ? C.pageStyle() : C.pageStyle;
      if (typeof D == "string") {
        const F = E.createElement("style");
        F.appendChild(E.createTextNode(D)), E.head.appendChild(F);
      }
      C.bodyClassName && E.body.classList.add(...C.bodyClassName.split(" "));
      const _ = [];
      if (C.copyStyles) {
        const F = k.getRootNode(), T = (F.constructor.name === "ShadowRoot" ? F : r.current).querySelectorAll("style, link[rel='stylesheet']");
        for (let L = 0; L < T.length; L += 1) {
          const z = T[L];
          if (z.tagName === "STYLE") {
            const G = E.createElement(z.tagName), j = z.sheet;
            if (j) {
              let V = "";
              for (let U = 0; U < j.cssRules.length; U += 1) typeof j.cssRules[U].cssText == "string" && (V += `${j.cssRules[U].cssText}\r
`);
              G.appendChild(E.createTextNode(V)), E.head.appendChild(G);
            }
          } else if (z.getAttribute("href")) {
            const G = E.createElement(z.tagName);
            for (let j = 0; j < z.attributes.length; j += 1) {
              const V = z.attributes[j];
              V && G.setAttribute(V.nodeName, V.nodeValue || "");
            }
            _.push(new Promise((j) => {
              G.addEventListener("load", () => j());
            })), E.head.appendChild(G);
          }
        }
      }
      Promise.all(_).then(() => {
        v.contentWindow.print();
      });
    }, [
      e,
      r,
      t
    ]), h = c.useCallback((v) => {
      var _a2, _b2;
      r.current.body.removeChild(v), e.current.restoreState(l.current || {}), ((_b2 = (_a2 = l.current) == null ? void 0 : _a2.columns) == null ? void 0 : _b2.columnVisibilityModel) || e.current.setColumnVisibilityModel(s.current), e.current.setState((I) => b({}, I, {
        virtualization: i.current
      })), e.current.setRows(a.current), l.current = null, s.current = {}, a.current = [];
    }, [
      e
    ]), m = {
      exportDataAsPrint: c.useCallback(async (v) => {
        if (o.debug("Export data as Print"), !e.current.rootElementRef.current) throw new Error("MUI X: No grid root element available.");
        if (l.current = e.current.exportState(), s.current = Zt(e), a.current = e.current.getSortedRows().filter((C) => !C[Eo]), t.pagination) {
          const E = {
            page: 0,
            pageSize: Bs(e)
          };
          e.current.setState(($) => b({}, $, {
            pagination: b({}, $.pagination, {
              paginationModel: Kr($.pagination, "DataGridPro", E)
            })
          }));
        }
        i.current = e.current.state.virtualization, e.current.unstable_setVirtualization(false), await d(v == null ? void 0 : v.fields, v == null ? void 0 : v.allColumns, v == null ? void 0 : v.includeCheckboxes), u((v == null ? void 0 : v.getRowsToExport) ?? ed), await E0();
        const I = F0(v == null ? void 0 : v.fileName);
        I.onload = () => {
          p(I, v), I.contentWindow.matchMedia("print").addEventListener("change", (E) => {
            E.matches === false && h(I);
          });
        }, r.current.body.appendChild(I);
      }, [
        t,
        o,
        e,
        p,
        h,
        d,
        u
      ])
    };
    ke(e, m, "public");
    const x = c.useCallback((v, I) => {
      var _a2;
      return ((_a2 = I.printOptions) == null ? void 0 : _a2.disableToolbarButton) ? v : [
        ...v,
        {
          component: f.jsx(xS, {
            options: I.printOptions
          }),
          componentName: "printExport"
        }
      ];
    }, []);
    ot(e, "exportMenu", x);
  }, O0 = (e, t, n) => {
    var _a2, _b2;
    const o = t.filterModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel) ?? cr();
    return b({}, e, {
      filter: b({
        filterModel: Gs(o, t.disableMultipleColumnsFiltering, n)
      }, Bc),
      visibleRowsLookup: {}
    });
  }, D0 = (e) => e.filteredRowsLookup;
  function Aa(e, t) {
    return e.current.applyStrategyProcessor("visibleRowsLookupCreation", {
      tree: t.rows.tree,
      filteredRowsLookup: t.filter.filteredRowsLookup
    });
  }
  function R0() {
    return Ic(Object.values);
  }
  const H0 = (e, t) => {
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
        const w = yt(y, e.current.instanceId), M = e.current.getFilterState(w), O = b({}, y, {
          filter: b({}, y.filter, M)
        }), D = Aa(e, O);
        return b({}, O, {
          visibleRowsLookup: D
        });
      }), e.current.publishEvent("filteredRowsSet");
    }, [
      e
    ]), r = c.useCallback((y, w) => w == null || w.filterable === false || t.disableColumnFilter ? y : [
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
      const w = yt(e), M = [
        ...w.items
      ], O = M.findIndex((D) => D.id === y.id);
      O === -1 ? M.push(y) : M[O] = y, e.current.setFilterModel(b({}, w, {
        items: M
      }), "upsertFilterItem");
    }, [
      e
    ]), a = c.useCallback((y) => {
      const w = yt(e), M = [
        ...w.items
      ];
      y.forEach((O) => {
        const D = M.findIndex((_) => _.id === O.id);
        D === -1 ? M.push(O) : M[D] = O;
      }), e.current.setFilterModel(b({}, w, {
        items: M
      }), "upsertFilterItems");
    }, [
      e
    ]), i = c.useCallback((y) => {
      const w = yt(e), M = w.items.filter((O) => O.id !== y.id);
      M.length !== w.items.length && e.current.setFilterModel(b({}, w, {
        items: M
      }), "deleteFilterItem");
    }, [
      e
    ]), d = c.useCallback((y, w, M) => {
      if (n.debug("Displaying filter panel"), y) {
        const O = yt(e), D = O.items.filter((T) => {
          var _a3;
          if (T.value !== void 0) return !(Array.isArray(T.value) && T.value.length === 0);
          const z = (_a3 = e.current.getColumn(T.field).filterOperators) == null ? void 0 : _a3.find((j) => j.value === T.operator);
          return !(typeof (z == null ? void 0 : z.requiresFilterValue) > "u" ? true : z == null ? void 0 : z.requiresFilterValue);
        });
        let _;
        const F = D.find((T) => T.field === y), S = e.current.getColumn(y);
        F ? _ = D : t.disableMultipleColumnsFiltering ? _ = [
          cs({
            field: y,
            operator: S.filterOperators[0].value
          }, e)
        ] : _ = [
          ...D,
          cs({
            field: y,
            operator: S.filterOperators[0].value
          }, e)
        ], e.current.setFilterModel(b({}, O, {
          items: _
        }));
      }
      e.current.showPreferences(Zn.filters, w, M);
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), u = c.useCallback(() => {
      n.debug("Hiding filter panel"), e.current.hidePreferences();
    }, [
      e,
      n
    ]), p = c.useCallback((y) => {
      const w = yt(e);
      w.logicOperator !== y && e.current.setFilterModel(b({}, w, {
        logicOperator: y
      }), "changeLogicOperator");
    }, [
      e
    ]), h = c.useCallback((y) => {
      const w = yt(e);
      Gn(w.quickFilterValues, y) || e.current.setFilterModel(b({}, w, {
        quickFilterValues: [
          ...y
        ]
      }));
    }, [
      e
    ]), g = c.useCallback((y, w) => {
      yt(e) !== y && (n.debug("Setting filter model"), e.current.updateControlState("filter", Ji(y, t.disableMultipleColumnsFiltering, e), w), e.current.unstable_applyFilters());
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), m = c.useCallback((y) => {
      const w = Gs(y, t.disableMultipleColumnsFiltering, e), M = t.filterMode === "client" ? Cb(w, e, t.disableEval) : null, O = e.current.applyStrategyProcessor("filtering", {
        isRowMatchingFilters: M,
        filterModel: w ?? cr()
      });
      return b({}, O, {
        filterModel: w
      });
    }, [
      t.disableMultipleColumnsFiltering,
      t.filterMode,
      t.disableEval,
      e
    ]), x = {
      setFilterLogicOperator: p,
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
    const v = c.useCallback((y, w) => {
      var _a3, _b3;
      const M = yt(e);
      return M.items.forEach((D) => {
        delete D.fromInput;
      }), !w.exportOnlyDirtyModels || t.filterModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.filter) == null ? void 0 : _b3.filterModel) != null || !Gn(M, cr()) ? b({}, y, {
        filter: {
          filterModel: M
        }
      }) : y;
    }, [
      e,
      t.filterModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel
    ]), I = c.useCallback((y, w) => {
      var _a3;
      const M = (_a3 = w.stateToRestore.filter) == null ? void 0 : _a3.filterModel;
      return M == null ? y : (e.current.updateControlState("filter", Ji(M, t.disableMultipleColumnsFiltering, e), "restoreState"), b({}, y, {
        callbacks: [
          ...y.callbacks,
          e.current.unstable_applyFilters
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsFiltering
    ]), C = c.useCallback((y, w) => {
      var _a3;
      if (w === Zn.filters) {
        const M = t.slots.filterPanel;
        return f.jsx(M, b({}, (_a3 = t.slotProps) == null ? void 0 : _a3.filterPanel));
      }
      return y;
    }, [
      t.slots.filterPanel,
      (_c2 = t.slotProps) == null ? void 0 : _c2.filterPanel
    ]), { getRowId: E } = t, $ = Sn(R0), k = c.useCallback((y) => {
      var _a3;
      if (t.filterMode !== "client" || !y.isRowMatchingFilters || !y.filterModel.items.length && !((_a3 = y.filterModel.quickFilterValues) == null ? void 0 : _a3.length)) return Bc;
      const w = Jt(e), M = {}, { isRowMatchingFilters: O } = y, D = {}, _ = {
        passingFilterItems: null,
        passingQuickFilterValues: null
      }, F = $.current(e.current.state.rows.dataRowIdToModelLookup);
      for (let L = 0; L < F.length; L += 1) {
        const z = F[L], G = E ? E(z) : z.id;
        O(z, void 0, _);
        const j = xb([
          _.passingFilterItems
        ], [
          _.passingQuickFilterValues
        ], y.filterModel, e, D);
        M[G] = j;
      }
      const S = "auto-generated-group-footer-root";
      return w[S] && (M[S] = true), {
        filteredRowsLookup: M,
        filteredChildrenCountLookup: {},
        filteredDescendantCountLookup: {}
      };
    }, [
      e,
      t.filterMode,
      E,
      $
    ]);
    ot(e, "columnMenu", r), ot(e, "exportState", v), ot(e, "restoreState", I), ot(e, "preferencePanel", C), ul(e, eo, "filtering", k), ul(e, eo, "visibleRowsLookupCreation", D0);
    const H = c.useCallback(() => {
      n.debug("onColUpdated - GridColumns changed, applying filters");
      const y = yt(e), w = On(e), M = y.items.filter((O) => O.field && w[O.field]);
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
    ]), R = c.useCallback(() => {
      e.current.setState((y) => b({}, y, {
        visibleRowsLookup: Aa(e, y)
      })), e.current.forceUpdate();
    }, [
      e
    ]);
    oe(e, "rowsSet", o), oe(e, "columnsChange", H), oe(e, "activeStrategyProcessorChange", A), oe(e, "rowExpansionChange", R), oe(e, "columnVisibilityModelChange", () => {
      const y = yt(e);
      y.quickFilterValues && Qc(y) && e.current.unstable_applyFilters();
    }), xr(() => {
      e.current.unstable_applyFilters();
    }), St(() => {
      t.filterModel !== void 0 && e.current.setFilterModel(t.filterModel);
    }, [
      e,
      n,
      t.filterModel
    ]);
  }, $0 = (e) => b({}, e, {
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
  }), L0 = (e, t) => {
    const n = wt(e, "useGridFocus"), o = c.useRef(null), r = e.current.rootElementRef.current !== null, l = c.useCallback((R, y) => {
      R && e.current.getRow(R.id) && e.current.publishEvent("cellFocusOut", e.current.getCellParams(R.id, R.field), y);
    }, [
      e
    ]), s = c.useCallback((R, y) => {
      const w = Rt(e);
      (w == null ? void 0 : w.id) === R && (w == null ? void 0 : w.field) === y || (e.current.setState((M) => (n.debug(`Focusing on cell with id=${R} and field=${y}`), b({}, M, {
        tabIndex: {
          cell: {
            id: R,
            field: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        },
        focus: {
          cell: {
            id: R,
            field: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate(), e.current.getRow(R) && (w && l(w, {}), e.current.publishEvent("cellFocusIn", e.current.getCellParams(R, y))));
    }, [
      e,
      n,
      l
    ]), a = c.useCallback((R, y = {}) => {
      const w = Rt(e);
      l(w, y), e.current.setState((M) => (n.debug(`Focusing on column header with colIndex=${R}`), b({}, M, {
        tabIndex: {
          columnHeader: {
            field: R
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: {
            field: R
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
    ]), i = c.useCallback((R, y = {}) => {
      const w = Rt(e);
      l(w, y), e.current.setState((M) => (n.debug(`Focusing on column header filter with colIndex=${R}`), b({}, M, {
        tabIndex: {
          columnHeader: null,
          columnHeaderFilter: {
            field: R
          },
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: null,
          columnHeaderFilter: {
            field: R
          },
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      n,
      l
    ]), d = c.useCallback((R, y, w = {}) => {
      const M = Rt(e);
      M && e.current.publishEvent("cellFocusOut", e.current.getCellParams(M.id, M.field), w), e.current.setState((O) => b({}, O, {
        tabIndex: {
          columnGroupHeader: {
            field: R,
            depth: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        },
        focus: {
          columnGroupHeader: {
            field: R,
            depth: y
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        }
      })), e.current.forceUpdate();
    }, [
      e
    ]), u = c.useCallback(() => nl(e), [
      e
    ]), p = c.useCallback((R, y, w) => {
      let M = e.current.getColumnIndex(y);
      const O = st(e), D = Vn(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      }), _ = Ro(e), F = [].concat(_.top || [], D.rows, _.bottom || []);
      let S = F.findIndex((G) => G.id === R);
      w === "right" ? M += 1 : w === "left" ? M -= 1 : S += 1, M >= O.length ? (S += 1, S < F.length && (M = 0)) : M < 0 && (S -= 1, S >= 0 && (M = O.length - 1)), S = Nt(S, 0, F.length - 1);
      const T = F[S];
      if (!T) return;
      const L = e.current.unstable_getCellColSpanInfo(T.id, M);
      L && L.spannedByColSpan && (w === "left" || w === "below" ? M = L.leftVisibleCellIndex : w === "right" && (M = L.rightVisibleCellIndex)), M = Nt(M, 0, O.length - 1);
      const z = O[M];
      e.current.setCellFocus(T.id, z.field);
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), h = c.useCallback(({ id: R, field: y }) => {
      e.current.setCellFocus(R, y);
    }, [
      e
    ]), g = c.useCallback((R, y) => {
      y.key === "Enter" || y.key === "Tab" || y.key === "Shift" || il(y.key) || e.current.setCellFocus(R.id, R.field);
    }, [
      e
    ]), m = c.useCallback(({ field: R }, y) => {
      y.target === y.currentTarget && e.current.setColumnHeaderFocus(R, y);
    }, [
      e
    ]), x = c.useCallback(({ fields: R, depth: y }, w) => {
      if (w.target !== w.currentTarget) return;
      const M = nl(e);
      M !== null && M.depth === y && R.includes(M.field) || e.current.setColumnGroupHeaderFocus(R[0], y, w);
    }, [
      e
    ]), v = c.useCallback((R, y) => {
      var _a2, _b2;
      ((_b2 = (_a2 = y.relatedTarget) == null ? void 0 : _a2.getAttribute("class")) == null ? void 0 : _b2.includes(P.columnHeader)) || (n.debug("Clearing focus"), e.current.setState((w) => b({}, w, {
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
    ]), I = c.useCallback((R) => {
      o.current = R;
    }, []), C = c.useCallback((R) => {
      var _a2;
      const y = o.current;
      o.current = null;
      const w = Rt(e);
      if (!e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: R,
        cell: y
      })) return;
      if (!w) {
        y && e.current.setCellFocus(y.id, y.field);
        return;
      }
      (y == null ? void 0 : y.id) === w.id && (y == null ? void 0 : y.field) === w.field || ((_a2 = e.current.getCellElement(w.id, w.field)) == null ? void 0 : _a2.contains(R.target)) || (y ? e.current.setCellFocus(y.id, y.field) : (e.current.setState((D) => b({}, D, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })), e.current.forceUpdate(), l(w, R)));
    }, [
      e,
      l
    ]), E = c.useCallback((R) => {
      if (R.cellMode === "view") return;
      const y = Rt(e);
      ((y == null ? void 0 : y.id) !== R.id || (y == null ? void 0 : y.field) !== R.field) && e.current.setCellFocus(R.id, R.field);
    }, [
      e
    ]), $ = c.useCallback(() => {
      var _a2;
      const R = Rt(e);
      if (R && !e.current.getRow(R.id)) {
        const y = R.id;
        let w = null;
        if (typeof y < "u") {
          const M = e.current.getRowElement(y), O = (M == null ? void 0 : M.dataset.rowindex) ? Number(M == null ? void 0 : M.dataset.rowindex) : 0, D = Vn(e, {
            pagination: t.pagination,
            paginationMode: t.paginationMode
          });
          w = ((_a2 = D.rows[Nt(O, 0, D.rows.length - 1)]) == null ? void 0 : _a2.id) ?? null;
        }
        e.current.setState((M) => b({}, M, {
          focus: {
            cell: w === null ? null : {
              id: w,
              field: R.field
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
    ]), k = Ke(() => {
      const R = Rt(e);
      if (!R) return;
      const y = Vn(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (y.rows.find((O) => O.id === R.id)) return;
      const M = st(e);
      e.current.setState((O) => b({}, O, {
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
    }), H = {
      setCellFocus: s,
      setColumnHeaderFocus: a,
      setColumnHeaderFilterFocus: i
    }, A = {
      moveFocusToRelativeCell: p,
      setColumnGroupHeaderFocus: d,
      getColumnGroupHeaderFocus: u
    };
    ke(e, H, "public"), ke(e, A, "private"), c.useEffect(() => {
      const R = en(e.current.rootElementRef.current);
      return R.addEventListener("mouseup", C), () => {
        R.removeEventListener("mouseup", C);
      };
    }, [
      e,
      r,
      C
    ]), oe(e, "columnHeaderBlur", v), oe(e, "cellDoubleClick", h), oe(e, "cellMouseDown", I), oe(e, "cellKeyDown", g), oe(e, "cellModeChange", E), oe(e, "columnHeaderFocus", m), oe(e, "columnGroupHeaderFocus", x), oe(e, "rowsSet", $), oe(e, "paginationModelChange", k);
  }, Vl = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e < n) return e + 1;
    } else if (!o && e > t) return e - 1;
    return null;
  }, Nl = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e > t) return e - 1;
    } else if (!o && e < n) return e + 1;
    return null;
  };
  function j0(e, t, n, o) {
    var _a2, _b2;
    const r = Du(e);
    if (!((_a2 = r[t]) == null ? void 0 : _a2[n])) return t;
    const l = su(e);
    let s = l.indexOf(t) + (o === "down" ? 1 : -1);
    for (; s >= 0 && s < l.length; ) {
      const a = l[s];
      if (!((_b2 = r[a]) == null ? void 0 : _b2[n])) return a;
      s += o === "down" ? 1 : -1;
    }
    return t;
  }
  const A0 = Ue(yr, Ro, (e, t) => (t.top || []).concat(e.rows, t.bottom || [])), z0 = (e, t) => {
    const n = wt(e, "useGridKeyboardNavigation"), o = At(), r = t.unstable_listView, l = c.useCallback(() => A0(e), [
      e
    ]), s = t.signature !== "DataGrid" && t.headerFilters, a = c.useCallback((I, C, E = "left", $ = "up") => {
      const k = Un(e), H = e.current.unstable_getCellColSpanInfo(C, I);
      H && H.spannedByColSpan && (E === "left" ? I = H.leftVisibleCellIndex : E === "right" && (I = H.rightVisibleCellIndex));
      const A = r ? Oo(e.current.state).field : Ho(e)[I], R = j0(e, C, A, $), y = k.findIndex((w) => w.id === R);
      n.debug(`Navigating to cell row ${y}, col ${I}`), e.current.scrollToIndexes({
        colIndex: I,
        rowIndex: y
      }), e.current.setCellFocus(R, A);
    }, [
      e,
      n,
      r
    ]), i = c.useCallback((I, C) => {
      n.debug(`Navigating to header col ${I}`), e.current.scrollToIndexes({
        colIndex: I
      });
      const E = e.current.getVisibleColumns()[I].field;
      e.current.setColumnHeaderFocus(E, C);
    }, [
      e,
      n
    ]), d = c.useCallback((I, C) => {
      n.debug(`Navigating to header filter col ${I}`), e.current.scrollToIndexes({
        colIndex: I
      });
      const E = e.current.getVisibleColumns()[I].field;
      e.current.setColumnHeaderFilterFocus(E, C);
    }, [
      e,
      n
    ]), u = c.useCallback((I, C, E) => {
      n.debug(`Navigating to header col ${I}`), e.current.scrollToIndexes({
        colIndex: I
      });
      const { field: $ } = e.current.getVisibleColumns()[I];
      e.current.setColumnGroupHeaderFocus($, C, E);
    }, [
      e,
      n
    ]), p = c.useCallback((I) => {
      var _a2;
      return (_a2 = l()[I]) == null ? void 0 : _a2.id;
    }, [
      l
    ]), h = c.useCallback((I, C) => {
      const E = C.currentTarget.querySelector(`.${P.columnHeaderTitleContainerContent}`);
      if (!!E && E.contains(C.target) && I.field !== Ao.field) return;
      const k = l(), H = e.current.getViewportPageSize(), A = I.field ? e.current.getColumnIndex(I.field) : 0, R = k.length > 0 ? 0 : null, y = k.length - 1, w = 0, M = st(e).length - 1, O = Ir(e);
      let D = true;
      switch (C.key) {
        case "ArrowDown": {
          s ? d(A, C) : R !== null && a(A, p(R));
          break;
        }
        case "ArrowRight": {
          const _ = Nl({
            currentColIndex: A,
            firstColIndex: w,
            lastColIndex: M,
            isRtl: o
          });
          _ !== null && i(_, C);
          break;
        }
        case "ArrowLeft": {
          const _ = Vl({
            currentColIndex: A,
            firstColIndex: w,
            lastColIndex: M,
            isRtl: o
          });
          _ !== null && i(_, C);
          break;
        }
        case "ArrowUp": {
          O > 0 && u(A, O - 1, C);
          break;
        }
        case "PageDown": {
          R !== null && y !== null && a(A, p(Math.min(R + H, y)));
          break;
        }
        case "Home": {
          i(w, C);
          break;
        }
        case "End": {
          i(M, C);
          break;
        }
        case "Enter": {
          (C.ctrlKey || C.metaKey) && e.current.toggleColumnMenu(I.field);
          break;
        }
        case " ":
          break;
        default:
          D = false;
      }
      D && C.preventDefault();
    }, [
      e,
      l,
      s,
      d,
      a,
      p,
      o,
      i,
      u
    ]), g = c.useCallback((I, C) => {
      const E = tw(e) === I.field, $ = nw(e) === I.field;
      if (E || $ || !il(C.key)) return;
      const k = l(), H = e.current.getViewportPageSize(), A = I.field ? e.current.getColumnIndex(I.field) : 0, R = 0, y = k.length - 1, w = 0, M = st(e).length - 1;
      let O = true;
      switch (C.key) {
        case "ArrowDown": {
          const D = p(R);
          D != null && a(A, D);
          break;
        }
        case "ArrowRight": {
          const D = Nl({
            currentColIndex: A,
            firstColIndex: w,
            lastColIndex: M,
            isRtl: o
          });
          D !== null && d(D, C);
          break;
        }
        case "ArrowLeft": {
          const D = Vl({
            currentColIndex: A,
            firstColIndex: w,
            lastColIndex: M,
            isRtl: o
          });
          D !== null ? d(D, C) : e.current.setColumnHeaderFilterFocus(I.field, C);
          break;
        }
        case "ArrowUp": {
          i(A, C);
          break;
        }
        case "PageDown": {
          y !== null && a(A, p(Math.min(R + H, y)));
          break;
        }
        case "Home": {
          d(w, C);
          break;
        }
        case "End": {
          d(M, C);
          break;
        }
        case " ":
          break;
        default:
          O = false;
      }
      O && C.preventDefault();
    }, [
      e,
      l,
      d,
      o,
      i,
      a,
      p
    ]), m = c.useCallback((I, C) => {
      const E = nl(e);
      if (E === null) return;
      const { field: $, depth: k } = E, { fields: H, depth: A, maxDepth: R } = I, y = l(), w = e.current.getViewportPageSize(), M = e.current.getColumnIndex($), O = $ ? e.current.getColumnIndex($) : 0, D = 0, _ = y.length - 1, F = 0, S = st(e).length - 1;
      let T = true;
      switch (C.key) {
        case "ArrowDown": {
          A === R - 1 ? i(M, C) : u(M, k + 1, C);
          break;
        }
        case "ArrowUp": {
          A > 0 && u(M, k - 1, C);
          break;
        }
        case "ArrowRight": {
          const L = H.length - H.indexOf($) - 1;
          M + L + 1 <= S && u(M + L + 1, k, C);
          break;
        }
        case "ArrowLeft": {
          const L = H.indexOf($);
          M - L - 1 >= F && u(M - L - 1, k, C);
          break;
        }
        case "PageDown": {
          _ !== null && a(O, p(Math.min(D + w, _)));
          break;
        }
        case "Home": {
          u(F, k, C);
          break;
        }
        case "End": {
          u(S, k, C);
          break;
        }
        case " ":
          break;
        default:
          T = false;
      }
      T && C.preventDefault();
    }, [
      e,
      l,
      i,
      u,
      a,
      p
    ]), x = c.useCallback((I, C) => {
      if (Mr(C)) return;
      const E = e.current.getCellParams(I.id, I.field);
      if (E.cellMode === Xe.Edit || !il(C.key) || !e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: C,
        cell: E
      })) return;
      const k = l();
      if (k.length === 0) return;
      const H = e.current.getViewportPageSize(), A = r ? () => 0 : e.current.getColumnIndex, R = I.field ? A(I.field) : 0, y = k.findIndex((S) => S.id === I.id), w = 0, M = k.length - 1, O = 0, _ = (r ? [
        Oo(e.current.state)
      ] : st(e)).length - 1;
      let F = true;
      switch (C.key) {
        case "ArrowDown": {
          y < M && a(R, p(y + 1), o ? "right" : "left", "down");
          break;
        }
        case "ArrowUp": {
          y > w ? a(R, p(y - 1)) : s ? d(R, C) : i(R, C);
          break;
        }
        case "ArrowRight": {
          const S = Nl({
            currentColIndex: R,
            firstColIndex: O,
            lastColIndex: _,
            isRtl: o
          });
          S !== null && a(S, p(y), o ? "left" : "right");
          break;
        }
        case "ArrowLeft": {
          const S = Vl({
            currentColIndex: R,
            firstColIndex: O,
            lastColIndex: _,
            isRtl: o
          });
          S !== null && a(S, p(y), o ? "right" : "left");
          break;
        }
        case "Tab": {
          C.shiftKey && R > O ? a(R - 1, p(y), "left") : !C.shiftKey && R < _ && a(R + 1, p(y), "right");
          break;
        }
        case " ": {
          if (I.field === ml) break;
          const T = I.colDef;
          if (T && (T.field === Hb || Ix(T.field))) break;
          !C.shiftKey && y < M && a(R, p(Math.min(y + H, M)));
          break;
        }
        case "PageDown": {
          y < M && a(R, p(Math.min(y + H, M)));
          break;
        }
        case "PageUp": {
          const S = Math.max(y - H, w);
          S !== y && S >= w ? a(R, p(S)) : i(R, C);
          break;
        }
        case "Home": {
          C.ctrlKey || C.metaKey || C.shiftKey ? a(O, p(w)) : a(O, p(y));
          break;
        }
        case "End": {
          C.ctrlKey || C.metaKey || C.shiftKey ? a(_, p(M)) : a(_, p(y));
          break;
        }
        default:
          F = false;
      }
      F && C.preventDefault();
    }, [
      e,
      l,
      o,
      a,
      p,
      s,
      d,
      i,
      r
    ]), v = c.useCallback((I, { event: C }) => C.key === " " ? false : I, []);
    ot(e, "canStartEditing", v), oe(e, "columnHeaderKeyDown", h), oe(e, "headerFilterKeyDown", g), oe(e, "columnGroupHeaderKeyDown", m), oe(e, "cellKeyDown", x);
  }, G0 = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridRowCount"), o = Q(e, Ws), r = Q(e, mo), l = Q(e, Jo), s = Q(e, kt), a = Sn(() => kt(e).pageSize);
    e.current.registerControlState({
      stateId: "paginationRowCount",
      propModel: t.rowCount,
      propOnChange: t.onRowCountChange,
      stateSelector: mo,
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
      const v = mo(e);
      return !x.exportOnlyDirtyModels || t.rowCount != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.rowCount) != null ? b({}, m, {
        pagination: b({}, m.pagination, {
          rowCount: v
        })
      }) : m;
    }, [
      e,
      t.rowCount,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.rowCount
    ]), p = c.useCallback((m, x) => {
      var _a3;
      const v = ((_a3 = x.stateToRestore.pagination) == null ? void 0 : _a3.rowCount) ? x.stateToRestore.pagination.rowCount : mo(e);
      return e.current.setState((I) => b({}, I, {
        pagination: b({}, I.pagination, {
          rowCount: v
        })
      })), m;
    }, [
      e
    ]);
    ot(e, "exportState", u), ot(e, "restoreState", p);
    const h = c.useCallback((m) => {
      t.paginationMode === "client" || !a.current || m.pageSize !== a.current && (a.current = m.pageSize, r === -1 && e.current.setPage(0));
    }, [
      t.paginationMode,
      a,
      r,
      e
    ]);
    oe(e, "paginationModelChange", h), c.useEffect(() => {
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
  }, _0 = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridPaginationMeta"), o = Q(e, Jo);
    e.current.registerControlState({
      stateId: "paginationMeta",
      propModel: t.paginationMeta,
      propOnChange: t.onPaginationMetaChange,
      stateSelector: Jo,
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
      const u = Jo(e);
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
      const u = ((_a3 = d.stateToRestore.pagination) == null ? void 0 : _a3.meta) ? d.stateToRestore.pagination.meta : Jo(e);
      return e.current.setState((p) => b({}, p, {
        pagination: b({}, p.pagination, {
          meta: u
        })
      })), i;
    }, [
      e
    ]);
    ot(e, "exportState", s), ot(e, "restoreState", a), c.useEffect(() => {
      t.paginationMeta && e.current.setPaginationMeta(t.paginationMeta);
    }, [
      e,
      t.paginationMeta
    ]);
  }, V0 = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2;
    const n = b({}, fu(t.autoPageSize), t.paginationModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel));
    gu(n.pageSize, t.signature);
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
  }, N0 = (e, t) => {
    _0(e, t), k0(e, t), G0(e, t);
  }, B0 = (e, t) => {
    var _a2;
    return b({}, e, {
      preferencePanel: ((_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel) ?? {
        open: false
      }
    });
  }, W0 = (e, t) => {
    var _a2;
    const n = wt(e, "useGridPreferencesPanel"), o = c.useCallback(() => {
      e.current.setState((a) => {
        if (!a.preferencePanel.open) return a;
        n.debug("Hiding Preferences Panel");
        const i = dr(a);
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
      const d = dr(e.current.state);
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
    ot(e, "exportState", l), ot(e, "restoreState", s);
  }, hs = (e) => {
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
  }, U0 = [
    "id",
    "field"
  ], K0 = [
    "id",
    "field"
  ], q0 = (e, t) => {
    const [n, o] = c.useState({}), r = c.useRef(n), l = c.useRef({}), { processRowUpdate: s, onProcessRowUpdateError: a, cellModesModel: i, onCellModesModelChange: d } = t, u = (F) => (...S) => {
      t.editMode === yn.Cell && F(...S);
    }, p = c.useCallback((F, S) => {
      const T = e.current.getCellParams(F, S);
      if (!e.current.isCellEditable(T)) throw new Error(`MUI X: The cell with id=${F} and field=${S} is not editable.`);
    }, [
      e
    ]), h = c.useCallback((F, S, T) => {
      if (e.current.getCellMode(F, S) !== T) throw new Error(`MUI X: The cell with id=${F} and field=${S} is not in ${T} mode.`);
    }, [
      e
    ]), g = c.useCallback((F, S) => {
      if (!F.isEditable || F.cellMode === Xe.Edit) return;
      const T = b({}, F, {
        reason: kn.cellDoubleClick
      });
      e.current.publishEvent("cellEditStart", T, S);
    }, [
      e
    ]), m = c.useCallback((F, S) => {
      if (F.cellMode === Xe.View || e.current.getCellMode(F.id, F.field) === Xe.View) return;
      const T = b({}, F, {
        reason: cn.cellFocusOut
      });
      e.current.publishEvent("cellEditStop", T, S);
    }, [
      e
    ]), x = c.useCallback((F, S) => {
      if (F.cellMode === Xe.Edit) {
        if (S.which === 229) return;
        let T;
        if (S.key === "Escape" ? T = cn.escapeKeyDown : S.key === "Enter" ? T = cn.enterKeyDown : S.key === "Tab" && (T = S.shiftKey ? cn.shiftTabKeyDown : cn.tabKeyDown, S.preventDefault()), T) {
          const L = b({}, F, {
            reason: T
          });
          e.current.publishEvent("cellEditStop", L, S);
        }
      } else if (F.isEditable) {
        let T;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: S,
          cellParams: F,
          editMode: "cell"
        })) return;
        if (Ku(S) ? T = kn.printableKeyDown : Yu(S) ? T = kn.pasteKeyDown : S.key === "Enter" ? T = kn.enterKeyDown : (S.key === "Backspace" || S.key === "Delete") && (T = kn.deleteKeyDown), T) {
          const z = b({}, F, {
            reason: T,
            key: S.key
          });
          e.current.publishEvent("cellEditStart", z, S);
        }
      }
    }, [
      e
    ]), v = c.useCallback((F) => {
      const { id: S, field: T, reason: L } = F, z = {
        id: S,
        field: T
      };
      (L === kn.printableKeyDown || L === kn.deleteKeyDown || L === kn.pasteKeyDown) && (z.deleteValue = true), e.current.startCellEditMode(z);
    }, [
      e
    ]), I = c.useCallback((F) => {
      const { id: S, field: T, reason: L } = F;
      e.current.runPendingEditCellValueMutation(S, T);
      let z;
      L === cn.enterKeyDown ? z = "below" : L === cn.tabKeyDown ? z = "right" : L === cn.shiftTabKeyDown && (z = "left");
      const G = L === "escapeKeyDown";
      e.current.stopCellEditMode({
        id: S,
        field: T,
        ignoreModifications: G,
        cellToFocusAfter: z
      });
    }, [
      e
    ]), C = (F) => async (...S) => {
      var _a2;
      if (F) {
        const { id: T, field: L } = S[0];
        ((_a2 = e.current.state.editRows[T][L]) == null ? void 0 : _a2.error) || F(...S);
      }
    };
    oe(e, "cellDoubleClick", u(g)), oe(e, "cellFocusOut", u(m)), oe(e, "cellKeyDown", u(x)), oe(e, "cellEditStart", u(v)), oe(e, "cellEditStop", u(I)), Qe(e, "cellEditStart", t.onCellEditStart), Qe(e, "cellEditStop", C(t.onCellEditStop));
    const E = c.useCallback((F, S) => {
      const T = ht(e.current.state);
      return T[F] && T[F][S] ? Xe.Edit : Xe.View;
    }, [
      e
    ]), $ = Ke((F) => {
      const S = F !== t.cellModesModel;
      d && S && d(F, {
        api: e.current
      }), !(t.cellModesModel && S) && (o(F), r.current = F, e.current.publishEvent("cellModesModelChange", F));
    }), k = c.useCallback((F, S, T) => {
      const L = b({}, r.current);
      if (T !== null) L[F] = b({}, L[F], {
        [S]: b({}, T)
      });
      else {
        const z = L[F], G = ge(z, [
          S
        ].map(fr));
        L[F] = G, Object.keys(L[F]).length === 0 && delete L[F];
      }
      $(L);
    }, [
      $
    ]), H = c.useCallback((F, S, T) => {
      e.current.setState((L) => {
        const z = b({}, L.editRows);
        return T !== null ? z[F] = b({}, z[F], {
          [S]: b({}, T)
        }) : (delete z[F][S], Object.keys(z[F]).length === 0 && delete z[F]), b({}, L, {
          editRows: z
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), A = c.useCallback((F) => {
      const { id: S, field: T } = F, L = ge(F, U0);
      p(S, T), h(S, T, Xe.View), k(S, T, b({
        mode: Xe.Edit
      }, L));
    }, [
      p,
      h,
      k
    ]), R = Ke(async (F) => {
      const { id: S, field: T, deleteValue: L, initialValue: z } = F, G = e.current.getCellValue(S, T);
      let j = G;
      L ? j = hs(e.current.getColumn(T)) : z && (j = z);
      const V = e.current.getColumn(T), U = !!V.preProcessEditCellProps && L;
      let W = {
        value: j,
        error: false,
        isProcessingProps: U
      };
      if (H(S, T, W), e.current.setCellFocus(S, T), U && (W = await Promise.resolve(V.preProcessEditCellProps({
        id: S,
        row: e.current.getRow(S),
        props: W,
        hasChanged: j !== G
      })), e.current.getCellMode(S, T) === Xe.Edit)) {
        const K = ht(e.current.state);
        H(S, T, b({}, W, {
          value: K[S][T].value,
          isProcessingProps: false
        }));
      }
    }), y = c.useCallback((F) => {
      const { id: S, field: T } = F, L = ge(F, K0);
      h(S, T, Xe.Edit), k(S, T, b({
        mode: Xe.View
      }, L));
    }, [
      h,
      k
    ]), w = Ke(async (F) => {
      const { id: S, field: T, ignoreModifications: L, cellToFocusAfter: z = "none" } = F;
      h(S, T, Xe.Edit), e.current.runPendingEditCellValueMutation(S, T);
      const G = () => {
        H(S, T, null), k(S, T, null), z !== "none" && e.current.moveFocusToRelativeCell(S, T, z);
      };
      if (L) {
        G();
        return;
      }
      const j = ht(e.current.state), { error: V, isProcessingProps: U } = j[S][T];
      if (V || U) {
        l.current[S][T].mode = Xe.Edit, k(S, T, {
          mode: Xe.Edit
        });
        return;
      }
      const W = e.current.getRowWithUpdatedValuesFromCellEditing(S, T);
      if (s) {
        const K = (B) => {
          l.current[S][T].mode = Xe.Edit, k(S, T, {
            mode: Xe.Edit
          }), a && a(B);
        };
        try {
          const B = e.current.getRow(S);
          Promise.resolve(s(W, B, {
            rowId: S
          })).then((te) => {
            e.current.updateRows([
              te
            ]), G();
          }).catch(K);
        } catch (B) {
          K(B);
        }
      } else e.current.updateRows([
        W
      ]), G();
    }), M = c.useCallback(async (F) => {
      var _a2, _b2;
      const { id: S, field: T, value: L, debounceMs: z, unstable_skipValueParser: G } = F;
      p(S, T), h(S, T, Xe.Edit);
      const j = e.current.getColumn(T), V = e.current.getRow(S);
      let U = L;
      j.valueParser && !G && (U = j.valueParser(L, V, j, e));
      let W = ht(e.current.state), K = b({}, W[S][T], {
        value: U,
        changeReason: z ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      if (j.preProcessEditCellProps) {
        const B = L !== W[S][T].value;
        K = b({}, K, {
          isProcessingProps: true
        }), H(S, T, K), K = await Promise.resolve(j.preProcessEditCellProps({
          id: S,
          row: V,
          props: K,
          hasChanged: B
        }));
      }
      return e.current.getCellMode(S, T) === Xe.View ? false : (W = ht(e.current.state), K = b({}, K, {
        isProcessingProps: false
      }), K.value = j.preProcessEditCellProps ? W[S][T].value : U, H(S, T, K), W = ht(e.current.state), !((_b2 = (_a2 = W[S]) == null ? void 0 : _a2[T]) == null ? void 0 : _b2.error));
    }, [
      e,
      p,
      h,
      H
    ]), O = c.useCallback((F, S) => {
      const T = e.current.getColumn(S), L = ht(e.current.state), z = e.current.getRow(F);
      if (!L[F] || !L[F][S]) return e.current.getRow(F);
      const { value: G } = L[F][S];
      return T.valueSetter ? T.valueSetter(G, z, T, e) : b({}, z, {
        [S]: G
      });
    }, [
      e
    ]), D = {
      getCellMode: E,
      startCellEditMode: A,
      stopCellEditMode: y
    }, _ = {
      setCellEditingEditCellValue: M,
      getRowWithUpdatedValuesFromCellEditing: O
    };
    ke(e, D, "public"), ke(e, _, "private"), c.useEffect(() => {
      i && $(i);
    }, [
      i,
      $
    ]), St(() => {
      const F = Jt(e), S = l.current;
      l.current = _c(n), Object.entries(n).forEach(([T, L]) => {
        Object.entries(L).forEach(([z, G]) => {
          var _a2, _b2;
          const j = ((_b2 = (_a2 = S[T]) == null ? void 0 : _a2[z]) == null ? void 0 : _b2.mode) || Xe.View, V = F[T] ? e.current.getRowId(F[T]) : T;
          G.mode === Xe.Edit && j === Xe.View ? R(b({
            id: V,
            field: z
          }, G)) : G.mode === Xe.View && j === Xe.Edit && w(b({
            id: V,
            field: z
          }, G));
        });
      });
    }, [
      e,
      n,
      R,
      w
    ]);
  }, Y0 = [
    "id"
  ], X0 = [
    "id"
  ], Q0 = (e, t) => {
    const [n, o] = c.useState({}), r = c.useRef(n), l = c.useRef({}), s = c.useRef({}), a = c.useRef(void 0), i = c.useRef(null), { processRowUpdate: d, onProcessRowUpdateError: u, rowModesModel: p, onRowModesModelChange: h } = t, g = (G) => (...j) => {
      t.editMode === yn.Row && G(...j);
    }, m = c.useCallback((G, j) => {
      const V = e.current.getCellParams(G, j);
      if (!e.current.isCellEditable(V)) throw new Error(`MUI X: The cell with id=${G} and field=${j} is not editable.`);
    }, [
      e
    ]), x = c.useCallback((G, j) => {
      if (e.current.getRowMode(G) !== j) throw new Error(`MUI X: The row with id=${G} is not in ${j} mode.`);
    }, [
      e
    ]), v = c.useCallback((G) => {
      const j = ht(e.current.state);
      return Object.values(j[G]).some((V) => V.error);
    }, [
      e
    ]), I = c.useCallback((G, j) => {
      if (!G.isEditable || e.current.getRowMode(G.id) === et.Edit) return;
      const V = e.current.getRowParams(G.id), U = b({}, V, {
        field: G.field,
        reason: $n.cellDoubleClick
      });
      e.current.publishEvent("rowEditStart", U, j);
    }, [
      e
    ]), C = c.useCallback((G) => {
      i.current = G;
    }, []), E = c.useCallback((G, j) => {
      G.isEditable && e.current.getRowMode(G.id) !== et.View && (i.current = null, a.current = setTimeout(() => {
        var _a2;
        if (((_a2 = i.current) == null ? void 0 : _a2.id) !== G.id) {
          if (!e.current.getRow(G.id) || e.current.getRowMode(G.id) === et.View || v(G.id)) return;
          const V = e.current.getRowParams(G.id), U = b({}, V, {
            field: G.field,
            reason: bn.rowFocusOut
          });
          e.current.publishEvent("rowEditStop", U, j);
        }
      }));
    }, [
      e,
      v
    ]);
    c.useEffect(() => () => {
      clearTimeout(a.current);
    }, []);
    const $ = c.useCallback((G, j) => {
      if (G.cellMode === et.Edit) {
        if (j.which === 229) return;
        let V;
        if (j.key === "Escape") V = bn.escapeKeyDown;
        else if (j.key === "Enter") V = bn.enterKeyDown;
        else if (j.key === "Tab") {
          const U = Ho(e).filter((W) => e.current.getColumn(W).type === gl ? true : e.current.isCellEditable(e.current.getCellParams(G.id, W)));
          if (j.shiftKey ? G.field === U[0] && (V = bn.shiftTabKeyDown) : G.field === U[U.length - 1] && (V = bn.tabKeyDown), j.preventDefault(), !V) {
            const W = U.findIndex((B) => B === G.field), K = U[j.shiftKey ? W - 1 : W + 1];
            e.current.setCellFocus(G.id, K);
          }
        }
        if (V) {
          if (V !== bn.escapeKeyDown && v(G.id)) return;
          const U = b({}, e.current.getRowParams(G.id), {
            reason: V,
            field: G.field
          });
          e.current.publishEvent("rowEditStop", U, j);
        }
      } else if (G.isEditable) {
        let V;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: j,
          cellParams: G,
          editMode: "row"
        })) return;
        if (Ku(j) || Yu(j) ? V = $n.printableKeyDown : j.key === "Enter" ? V = $n.enterKeyDown : (j.key === "Backspace" || j.key === "Delete") && (V = $n.deleteKeyDown), V) {
          const W = e.current.getRowParams(G.id), K = b({}, W, {
            field: G.field,
            reason: V
          });
          e.current.publishEvent("rowEditStart", K, j);
        }
      }
    }, [
      e,
      v
    ]), k = c.useCallback((G) => {
      const { id: j, field: V, reason: U } = G, W = {
        id: j,
        fieldToFocus: V
      };
      (U === $n.printableKeyDown || U === $n.deleteKeyDown) && (W.deleteValue = !!V), e.current.startRowEditMode(W);
    }, [
      e
    ]), H = c.useCallback((G) => {
      const { id: j, reason: V, field: U } = G;
      e.current.runPendingEditCellValueMutation(j);
      let W;
      V === bn.enterKeyDown ? W = "below" : V === bn.tabKeyDown ? W = "right" : V === bn.shiftTabKeyDown && (W = "left");
      const K = V === "escapeKeyDown";
      e.current.stopRowEditMode({
        id: j,
        ignoreModifications: K,
        field: U,
        cellToFocusAfter: W
      });
    }, [
      e
    ]);
    oe(e, "cellDoubleClick", g(I)), oe(e, "cellFocusIn", g(C)), oe(e, "cellFocusOut", g(E)), oe(e, "cellKeyDown", g($)), oe(e, "rowEditStart", g(k)), oe(e, "rowEditStop", g(H)), Qe(e, "rowEditStart", t.onRowEditStart), Qe(e, "rowEditStop", t.onRowEditStop);
    const A = c.useCallback((G) => Au(e, {
      rowId: G,
      editMode: t.editMode
    }) ? et.Edit : et.View, [
      e,
      t.editMode
    ]), R = Ke((G) => {
      const j = G !== t.rowModesModel;
      h && j && h(G, {
        api: e.current
      }), !(t.rowModesModel && j) && (o(G), r.current = G, e.current.publishEvent("rowModesModelChange", G));
    }), y = c.useCallback((G, j) => {
      const V = b({}, r.current);
      j !== null ? V[G] = b({}, j) : delete V[G], R(V);
    }, [
      R
    ]), w = c.useCallback((G, j) => {
      e.current.setState((V) => {
        const U = b({}, V.editRows);
        return j !== null ? U[G] = j : delete U[G], b({}, V, {
          editRows: U
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), M = c.useCallback((G, j, V) => {
      e.current.setState((U) => {
        const W = b({}, U.editRows);
        return V !== null ? W[G] = b({}, W[G], {
          [j]: b({}, V)
        }) : (delete W[G][j], Object.keys(W[G]).length === 0 && delete W[G]), b({}, U, {
          editRows: W
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), O = c.useCallback((G) => {
      const { id: j } = G, V = ge(G, Y0);
      x(j, et.View), y(j, b({
        mode: et.Edit
      }, V));
    }, [
      x,
      y
    ]), D = Ke((G) => {
      const { id: j, fieldToFocus: V, deleteValue: U, initialValue: W } = G, K = e.current.getRow(j), B = on(e), te = B.reduce((J, ne) => {
        const ae = ne.field;
        if (!e.current.getCellParams(j, ae).isEditable) return J;
        const Y = e.current.getColumn(ae);
        let re = e.current.getCellValue(j, ae);
        return V === ae && (U || W) && (U ? re = hs(Y) : W && (re = W)), J[ae] = {
          value: re,
          error: false,
          isProcessingProps: Y.editable && !!Y.preProcessEditCellProps && U
        }, J;
      }, {});
      s.current[j] = K, w(j, te), V && e.current.setCellFocus(j, V), B.filter((J) => e.current.getCellParams(j, J.field).isEditable && J.editable && !!J.preProcessEditCellProps && U).forEach((J) => {
        const ne = J.field, ae = e.current.getCellValue(j, ne), we = U ? hs(J) : W ?? ae;
        Promise.resolve(J.preProcessEditCellProps({
          id: j,
          row: K,
          props: te[ne],
          hasChanged: we !== ae
        })).then((Y) => {
          if (e.current.getRowMode(j) === et.Edit) {
            const re = ht(e.current.state);
            M(j, ne, b({}, Y, {
              value: re[j][ne].value,
              isProcessingProps: false
            }));
          }
        });
      });
    }), _ = c.useCallback((G) => {
      const { id: j } = G, V = ge(G, X0);
      x(j, et.Edit), y(j, b({
        mode: et.View
      }, V));
    }, [
      x,
      y
    ]), F = Ke((G) => {
      const { id: j, ignoreModifications: V, field: U, cellToFocusAfter: W = "none" } = G;
      e.current.runPendingEditCellValueMutation(j);
      const K = () => {
        W !== "none" && U && e.current.moveFocusToRelativeCell(j, U, W), w(j, null), y(j, null), delete s.current[j];
      };
      if (V) {
        K();
        return;
      }
      const B = ht(e.current.state), te = s.current[j];
      if (Object.values(B[j]).some((ae) => ae.isProcessingProps)) {
        l.current[j].mode = et.Edit;
        return;
      }
      if (v(j)) {
        l.current[j].mode = et.Edit, y(j, {
          mode: et.Edit
        });
        return;
      }
      const ne = e.current.getRowWithUpdatedValuesFromRowEditing(j);
      if (d) {
        const ae = (we) => {
          l.current[j] && (l.current[j].mode = et.Edit, y(j, {
            mode: et.Edit
          })), u && u(we);
        };
        try {
          Promise.resolve(d(ne, te, {
            rowId: j
          })).then((we) => {
            e.current.updateRows([
              we
            ]), K();
          }).catch(ae);
        } catch (we) {
          ae(we);
        }
      } else e.current.updateRows([
        ne
      ]), K();
    }), S = c.useCallback((G) => {
      const { id: j, field: V, value: U, debounceMs: W, unstable_skipValueParser: K } = G;
      m(j, V);
      const B = e.current.getColumn(V), te = e.current.getRow(j);
      let J = U;
      B.valueParser && !K && (J = B.valueParser(U, te, B, e));
      let ne = ht(e.current.state), ae = b({}, ne[j][V], {
        value: J,
        changeReason: W ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      return B.preProcessEditCellProps || M(j, V, ae), new Promise((we) => {
        const Y = [];
        if (B.preProcessEditCellProps) {
          const re = ae.value !== ne[j][V].value;
          ae = b({}, ae, {
            isProcessingProps: true
          }), M(j, V, ae);
          const ye = ne[j], Z = ge(ye, [
            V
          ].map(fr)), Se = Promise.resolve(B.preProcessEditCellProps({
            id: j,
            row: te,
            props: ae,
            hasChanged: re,
            otherFieldsProps: Z
          })).then((ee) => {
            if (e.current.getRowMode(j) === et.View) {
              we(false);
              return;
            }
            ne = ht(e.current.state), ee = b({}, ee, {
              isProcessingProps: false
            }), ee.value = B.preProcessEditCellProps ? ne[j][V].value : J, M(j, V, ee);
          });
          Y.push(Se);
        }
        Object.entries(ne[j]).forEach(([re, ye]) => {
          if (re === V) return;
          const Z = e.current.getColumn(re);
          if (!Z.preProcessEditCellProps) return;
          ye = b({}, ye, {
            isProcessingProps: true
          }), M(j, re, ye), ne = ht(e.current.state);
          const Se = ne[j], ee = ge(Se, [
            re
          ].map(fr)), ve = Promise.resolve(Z.preProcessEditCellProps({
            id: j,
            row: te,
            props: ye,
            hasChanged: false,
            otherFieldsProps: ee
          })).then((Ce) => {
            if (e.current.getRowMode(j) === et.View) {
              we(false);
              return;
            }
            Ce = b({}, Ce, {
              isProcessingProps: false
            }), M(j, re, Ce);
          });
          Y.push(ve);
        }), Promise.all(Y).then(() => {
          e.current.getRowMode(j) === et.Edit ? (ne = ht(e.current.state), we(!ne[j][V].error)) : we(false);
        });
      });
    }, [
      e,
      m,
      M
    ]), T = c.useCallback((G) => {
      const j = ht(e.current.state), V = e.current.getRow(G);
      if (!j[G]) return e.current.getRow(G);
      let U = b({}, s.current[G], V);
      return Object.entries(j[G]).forEach(([W, K]) => {
        const B = e.current.getColumn(W);
        (B == null ? void 0 : B.valueSetter) ? U = B.valueSetter(K.value, U, B, e) : U[W] = K.value;
      }), U;
    }, [
      e
    ]), L = {
      getRowMode: A,
      startRowEditMode: O,
      stopRowEditMode: _
    }, z = {
      setRowEditingEditCellValue: S,
      getRowWithUpdatedValuesFromRowEditing: T
    };
    ke(e, L, "public"), ke(e, z, "private"), c.useEffect(() => {
      p && R(p);
    }, [
      p,
      R
    ]), St(() => {
      const G = Jt(e), j = l.current;
      l.current = _c(n);
      const V = /* @__PURE__ */ new Set([
        ...Object.keys(n),
        ...Object.keys(j)
      ]);
      Array.from(V).forEach((U) => {
        var _a2;
        const W = n[U] ?? {
          mode: et.View
        }, K = ((_a2 = j[U]) == null ? void 0 : _a2.mode) || et.View, B = G[U] ? e.current.getRowId(G[U]) : U;
        W.mode === et.Edit && K === et.View ? D(b({
          id: B
        }, W)) : W.mode === et.View && K === et.Edit && F(b({
          id: B
        }, W));
      });
    }, [
      e,
      n,
      D,
      F
    ]);
  }, J0 = (e) => b({}, e, {
    editRows: {}
  }), Z0 = (e, t) => {
    q0(e, t), Q0(e, t);
    const n = c.useRef({}), { isCellEditable: o } = t, r = c.useCallback((h) => Fo(h.rowNode) || !h.colDef.editable || !h.colDef.renderEditCell ? false : o ? o(h) : true, [
      o
    ]), l = (h, g, m, x) => {
      if (!m) {
        x();
        return;
      }
      if (n.current[h] || (n.current[h] = {}), n.current[h][g]) {
        const [C] = n.current[h][g];
        clearTimeout(C);
      }
      const v = () => {
        const [C] = n.current[h][g];
        clearTimeout(C), x(), delete n.current[h][g];
      }, I = setTimeout(() => {
        x(), delete n.current[h][g];
      }, m);
      n.current[h][g] = [
        I,
        v
      ];
    };
    c.useEffect(() => {
      const h = n.current;
      return () => {
        Object.entries(h).forEach(([g, m]) => {
          Object.keys(m).forEach((x) => {
            const [v] = h[g][x];
            clearTimeout(v), delete h[g][x];
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
      return new Promise((v) => {
        l(g, m, x, async () => {
          const I = t.editMode === yn.Row ? e.current.setRowEditingEditCellValue : e.current.setCellEditingEditCellValue;
          if (e.current.getCellMode(g, m) === Xe.Edit) {
            const C = await I(h);
            v(C);
          }
        });
      });
    }, [
      e,
      t.editMode
    ]), i = c.useCallback((h, g) => t.editMode === yn.Cell ? e.current.getRowWithUpdatedValuesFromCellEditing(h, g) : e.current.getRowWithUpdatedValuesFromRowEditing(h), [
      e,
      t.editMode
    ]), d = c.useCallback((h, g) => {
      var _a2;
      return ((_a2 = ht(e.current.state)[h]) == null ? void 0 : _a2[g]) ?? null;
    }, [
      e
    ]), u = {
      isCellEditable: r,
      setEditCellValue: a,
      getRowWithUpdatedValues: i,
      unstable_getEditCellMeta: d
    }, p = {
      runPendingEditCellValueMutation: s
    };
    ke(e, u, "public"), ke(e, p, "private");
  }, eI = (e, t, n) => {
    const o = !!t.unstable_dataSource;
    return n.current.caches.rows = Br({
      rows: o ? [] : t.rows,
      getRowId: t.getRowId,
      loading: t.loading,
      rowCount: t.rowCount
    }), b({}, e, {
      rows: Zc({
        apiRef: n,
        rowCountProp: t.rowCount,
        loadingProp: o ? true : t.loading,
        previousTree: null,
        previousTreeDepths: null
      })
    });
  }, tI = (e, t) => {
    const n = wt(e, "useGridRows"), o = c.useRef(Date.now()), r = c.useRef(t.rowCount), l = Qt(), s = c.useCallback((F) => {
      const S = Jt(e)[F];
      if (S) return S;
      const T = e.current.getRowNode(F);
      return T && Fo(T) ? {
        [Eo]: F
      } : null;
    }, [
      e
    ]), a = c.useCallback((F) => Sr(e.current.state, F), [
      e
    ]), i = c.useCallback(({ cache: F, throttle: S }) => {
      const T = () => {
        o.current = Date.now(), e.current.setState((z) => b({}, z, {
          rows: Zc({
            apiRef: e,
            rowCountProp: t.rowCount,
            loadingProp: t.loading,
            previousTree: pt(e),
            previousTreeDepths: qi(e),
            previousGroupsToFetch: Xm(e)
          })
        })), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
      };
      if (l.clear(), e.current.caches.rows = F, !S) {
        T();
        return;
      }
      const L = t.throttleRowsMs - (Date.now() - o.current);
      if (L > 0) {
        l.start(L, T);
        return;
      }
      T();
    }, [
      t.throttleRowsMs,
      t.rowCount,
      t.loading,
      e,
      l
    ]), d = c.useCallback((F) => {
      n.debug(`Updating all rows, new length ${F.length}`);
      const S = Br({
        rows: F,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), T = e.current.caches.rows;
      S.rowsBeforePartialUpdates = T.rowsBeforePartialUpdates, i({
        cache: S,
        throttle: true
      });
    }, [
      n,
      t.getRowId,
      t.loading,
      t.rowCount,
      i,
      e
    ]), u = c.useCallback((F) => {
      if (t.signature === nn.DataGrid && F.length > 1) throw new Error([
        "MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      const S = la(e, F, t.getRowId), T = ra({
        updates: S,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows
      });
      i({
        cache: T,
        throttle: true
      });
    }, [
      t.signature,
      t.getRowId,
      i,
      e
    ]), p = c.useCallback((F, S) => {
      const T = la(e, F, t.getRowId), L = ra({
        updates: T,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows,
        groupKeys: S ?? []
      });
      i({
        cache: L,
        throttle: false
      });
    }, [
      t.getRowId,
      i,
      e
    ]), h = c.useCallback((F) => {
      F !== t.loading && (n.debug(`Setting loading to ${F}`), e.current.setState((S) => b({}, S, {
        rows: b({}, S.rows, {
          loading: F
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = F);
    }, [
      t.loading,
      e,
      n
    ]), g = c.useCallback(() => {
      const F = Qo(e), S = Jt(e);
      return new Map(F.map((T) => [
        T,
        S[T] ?? {}
      ]));
    }, [
      e
    ]), m = c.useCallback(() => wr(e), [
      e
    ]), x = c.useCallback(() => Qo(e), [
      e
    ]), v = c.useCallback((F) => {
      const S = e.current.getRow(F), { rowToIndexMap: T } = Vn(e);
      return T.get(S);
    }, [
      e
    ]), I = c.useCallback((F, S) => {
      const T = e.current.getRowNode(F);
      if (!T) throw new Error(`MUI X: No row with id #${F} found.`);
      if (T.type !== "group") throw new Error("MUI X: Only group nodes can be expanded or collapsed.");
      const L = b({}, T, {
        childrenExpanded: S
      });
      e.current.setState((z) => b({}, z, {
        rows: b({}, z.rows, {
          tree: b({}, z.rows.tree, {
            [F]: L
          })
        })
      })), e.current.forceUpdate(), e.current.publishEvent("rowExpansionChange", L);
    }, [
      e
    ]), C = c.useCallback((F) => pt(e)[F] ?? null, [
      e
    ]), E = c.useCallback(({ skipAutoGeneratedRows: F = true, groupId: S, applySorting: T, applyFiltering: L }) => {
      const z = pt(e);
      let G;
      if (T) {
        const j = z[S];
        if (!j) return [];
        const V = Lo(e);
        G = [];
        const U = V.findIndex((W) => W === S) + 1;
        for (let W = U; W < V.length && z[V[W]].depth > j.depth; W += 1) {
          const K = V[W];
          (!F || !Fo(z[K])) && G.push(K);
        }
      } else G = Vs(z, S, F);
      if (L) {
        const j = jo(e);
        G = G.filter((V) => j[V] !== false);
      }
      return G;
    }, [
      e
    ]), $ = c.useCallback((F, S) => {
      const T = e.current.getRowNode(F);
      if (!T) throw new Error(`MUI X: No row with id #${F} found.`);
      if (T.parent !== Pt) throw new Error("MUI X: The row reordering do not support reordering of grouped rows yet.");
      if (T.type !== "leaf") throw new Error("MUI X: The row reordering do not support reordering of footer or grouping rows.");
      e.current.setState((L) => {
        const z = pt(L, e.current.instanceId)[Pt], G = z.children, j = G.findIndex((U) => U === F);
        if (j === -1 || j === S) return L;
        n.debug(`Moving row ${F} to index ${S}`);
        const V = [
          ...G
        ];
        return V.splice(S, 0, V.splice(j, 1)[0]), b({}, L, {
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
    ]), k = c.useCallback((F, S) => {
      if (t.signature === nn.DataGrid && S.length > 1) throw new Error([
        "MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      if (S.length === 0) return;
      if (no(e) > 1) throw new Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
      const L = b({}, pt(e)), z = b({}, Jt(e)), G = b({}, Ki(e)), j = L[Pt], V = [
        ...j.children
      ], U = /* @__PURE__ */ new Set();
      for (let K = 0; K < S.length; K += 1) {
        const B = S[K], te = hl(B, t.getRowId, "A row was provided without id when calling replaceRows()."), [J] = V.splice(F + K, 1, te);
        U.has(J) || (delete z[J], delete G[J], delete L[J]);
        const ne = {
          id: te,
          depth: 0,
          parent: Pt,
          type: "leaf",
          groupingKey: null
        };
        z[te] = B, G[te] = te, L[te] = ne, U.add(te);
      }
      L[Pt] = b({}, j, {
        children: V
      });
      const W = V.filter((K) => {
        var _a2;
        return ((_a2 = L[K]) == null ? void 0 : _a2.type) === "leaf";
      });
      e.current.caches.rows.dataRowIdToModelLookup = z, e.current.caches.rows.dataRowIdToIdLookup = G, e.current.setState((K) => b({}, K, {
        rows: b({}, K.rows, {
          dataRowIdToModelLookup: z,
          dataRowIdToIdLookup: G,
          dataRowIds: W,
          tree: L
        })
      })), e.current.publishEvent("rowsSet");
    }, [
      e,
      t.signature,
      t.getRowId
    ]), H = {
      getRow: s,
      setLoading: h,
      getRowId: a,
      getRowModels: g,
      getRowsCount: m,
      getAllRowIds: x,
      setRows: d,
      updateRows: u,
      getRowNode: C,
      getRowIndexRelativeToVisibleRows: v,
      unstable_replaceRows: k
    }, A = {
      setRowIndex: $,
      setRowChildrenExpansion: I,
      getRowGroupChildren: E
    }, R = {
      updateServerRows: p
    }, y = c.useCallback(() => {
      n.info("Row grouping pre-processing have changed, regenerating the row tree");
      let F;
      e.current.caches.rows.rowsBeforePartialUpdates === t.rows ? F = b({}, e.current.caches.rows, {
        updates: {
          type: "full",
          rows: Qo(e)
        }
      }) : F = Br({
        rows: t.rows,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), i({
        cache: F,
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
    ]), w = Sn(() => t.unstable_dataSource), M = c.useCallback((F) => {
      if (t.unstable_dataSource && t.unstable_dataSource !== w.current) {
        w.current = t.unstable_dataSource;
        return;
      }
      F === "rowTreeCreation" && y();
    }, [
      y,
      w,
      t.unstable_dataSource
    ]), O = c.useCallback(() => {
      e.current.getActiveStrategy("rowTree") !== Qm(e) && y();
    }, [
      e,
      y
    ]);
    oe(e, "activeStrategyProcessorChange", M), oe(e, "strategyAvailabilityChange", O);
    const D = c.useCallback(() => {
      e.current.setState((F) => {
        const S = e.current.unstable_applyPipeProcessors("hydrateRows", {
          tree: pt(F, e.current.instanceId),
          treeDepths: qi(F, e.current.instanceId),
          dataRowIds: Qo(F, e.current.instanceId),
          dataRowIdToModelLookup: Jt(F, e.current.instanceId),
          dataRowIdToIdLookup: Ki(F, e.current.instanceId)
        });
        return b({}, F, {
          rows: b({}, F.rows, S, {
            totalTopLevelRowCount: Jc({
              tree: S.tree,
              rowCountProp: t.rowCount
            })
          })
        });
      }), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
    }, [
      e,
      t.rowCount
    ]);
    li(e, "hydrateRows", D), ke(e, H, "public"), ke(e, A, t.signature === nn.DataGrid ? "private" : "public"), ke(e, R, "private");
    const _ = c.useRef(true);
    c.useEffect(() => {
      var _a2;
      if (_.current) {
        _.current = false;
        return;
      }
      let F = false;
      t.rowCount !== r.current && (F = true, r.current = t.rowCount);
      const S = e.current.caches.rows.rowsBeforePartialUpdates === t.rows, T = e.current.caches.rows.loadingPropBeforePartialUpdates === t.loading, L = e.current.caches.rows.rowCountPropBeforePartialUpdates === t.rowCount;
      S && (T || (e.current.setState((z) => b({}, z, {
        rows: b({}, z.rows, {
          loading: t.loading
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = t.loading, e.current.forceUpdate()), L || (e.current.setState((z) => b({}, z, {
        rows: b({}, z.rows, {
          totalRowCount: Math.max(t.rowCount || 0, z.rows.totalRowCount),
          totalTopLevelRowCount: Math.max(t.rowCount || 0, z.rows.totalTopLevelRowCount)
        })
      })), e.current.caches.rows.rowCountPropBeforePartialUpdates = t.rowCount, e.current.forceUpdate()), !F) || (n.debug(`Updating all rows, new length ${(_a2 = t.rows) == null ? void 0 : _a2.length}`), i({
        cache: Br({
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
  }, nI = (e) => {
    const t = {
      [Pt]: b({}, Db(), {
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
      groupingName: eo,
      tree: t,
      treeDepths: {
        0: e.length
      },
      dataRowIds: e
    };
  }, oI = ({ previousTree: e, actions: t }) => {
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
      groupingName: eo,
      tree: n,
      treeDepths: {
        0: l.length
      },
      dataRowIds: l
    };
  }, rI = (e) => e.updates.type === "full" ? nI(e.updates.rows) : oI({
    previousTree: e.previousTree,
    actions: e.updates.actions
  }), lI = (e) => {
    ul(e, eo, "rowTreeCreation", rI);
  };
  class Bl extends Error {
  }
  function sI(e, t) {
    var _a2;
    const n = c.useCallback((m) => ({
      field: m,
      colDef: e.current.getColumn(m)
    }), [
      e
    ]), o = c.useCallback((m) => {
      const x = e.current.getRow(m);
      if (!x) throw new Bl(`No row with id #${m} found`);
      return {
        id: m,
        columns: e.current.getAllColumns(),
        row: x
      };
    }, [
      e
    ]), r = c.useCallback((m, x, v, { cellMode: I, colDef: C, hasFocus: E, rowNode: $, tabIndex: k }) => {
      const H = v[x], A = (C == null ? void 0 : C.valueGetter) ? C.valueGetter(H, v, C, e) : H, R = {
        id: m,
        field: x,
        row: v,
        rowNode: $,
        colDef: C,
        cellMode: I,
        hasFocus: E,
        tabIndex: k,
        value: A,
        formattedValue: A,
        isEditable: false,
        api: e.current
      };
      return C && C.valueFormatter && (R.formattedValue = C.valueFormatter(A, v, C, e)), R.isEditable = C && e.current.isCellEditable(R), R;
    }, [
      e
    ]), l = c.useCallback((m, x) => {
      var _a3;
      const v = e.current.getRow(m), I = e.current.getRowNode(m);
      if (!v || !I) throw new Bl(`No row with id #${m} found`);
      const C = Rt(e), E = Ks(e), $ = e.current.getCellMode(m, x);
      return e.current.getCellParamsForRow(m, x, v, {
        colDef: t.unstable_listView && ((_a3 = t.unstable_listColumn) == null ? void 0 : _a3.field) === x ? Oo(e.current.state) : e.current.getColumn(x),
        rowNode: I,
        hasFocus: C !== null && C.field === x && C.id === m,
        tabIndex: E && E.field === x && E.id === m ? 0 : -1,
        cellMode: $
      });
    }, [
      e,
      t.unstable_listView,
      (_a2 = t.unstable_listColumn) == null ? void 0 : _a2.field
    ]), s = c.useCallback((m, x) => {
      const v = e.current.getColumn(x), I = e.current.getRow(m);
      if (!I) throw new Bl(`No row with id #${m} found`);
      return !v || !v.valueGetter ? I[x] : v.valueGetter(I[v.field], I, v, e);
    }, [
      e
    ]), a = c.useCallback((m, x) => {
      const v = x.field;
      if (!x || !x.valueGetter) return m[v];
      const I = m[x.field];
      return x.valueGetter(I, m, x, e);
    }, [
      e
    ]), i = c.useCallback((m, x) => {
      const v = a(m, x);
      return !x || !x.valueFormatter ? v : x.valueFormatter(v, m, x, e);
    }, [
      e,
      a
    ]), d = c.useCallback((m) => e.current.rootElementRef.current ? pv(e.current.rootElementRef.current, m) : null, [
      e
    ]), u = c.useCallback((m) => e.current.rootElementRef.current ? fv(e.current.rootElementRef.current, m) : null, [
      e
    ]), p = c.useCallback((m, x) => e.current.rootElementRef.current ? gv(e.current.rootElementRef.current, {
      id: m,
      field: x
    }) : null, [
      e
    ]), h = {
      getCellValue: s,
      getCellParams: l,
      getCellElement: p,
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
  const td = (e, t) => e == null || Array.isArray(e) ? e : t && t[0] === e ? t : [
    e
  ], iI = (e, t) => b({}, e, {
    rowSelection: t.rowSelection ? td(t.rowSelectionModel) ?? [] : []
  }), aI = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const n = wt(e, "useGridSelection"), o = c.useCallback((L) => (...z) => {
      t.rowSelection && L(...z);
    }, [
      t.rowSelection
    ]), r = t.signature !== nn.DataGrid && (((_a2 = t.rowSelectionPropagation) == null ? void 0 : _a2.parents) || ((_b2 = t.rowSelectionPropagation) == null ? void 0 : _b2.descendants)), l = c.useMemo(() => td(t.rowSelectionModel, _t(e.current.state)), [
      e,
      t.rowSelectionModel
    ]), s = c.useRef(null);
    e.current.registerControlState({
      stateId: "rowSelection",
      propModel: l,
      propOnChange: t.onRowSelectionModelChange,
      stateSelector: _t,
      changeEvent: "rowSelectionChange"
    });
    const { checkboxSelection: a, disableRowSelectionOnClick: i, isRowSelectable: d } = t, u = Us(t), p = Q(e, pt), h = Q(e, no) > 1, g = c.useCallback((L) => {
      let z = L;
      const G = s.current ?? L, j = e.current.isRowSelected(L);
      if (j) {
        const V = yo(e), U = V.findIndex((K) => K === G), W = V.findIndex((K) => K === z);
        if (U === W) return;
        U > W ? z = V[W + 1] : z = V[W - 1];
      }
      s.current = L, e.current.selectRowRange({
        startId: G,
        endId: z
      }, !j);
    }, [
      e
    ]), m = c.useCallback((L) => {
      if (t.signature === nn.DataGrid && !u && Array.isArray(L) && L.length > 1) throw new Error([
        "MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."
      ].join(`
`));
      _t(e.current.state) !== L && (n.debug("Setting selection model"), e.current.setState((G) => b({}, G, {
        rowSelection: t.rowSelection ? L : []
      })), e.current.forceUpdate());
    }, [
      e,
      n,
      t.rowSelection,
      t.signature,
      u
    ]), x = c.useCallback((L) => _t(e.current.state).includes(L), [
      e
    ]), v = c.useCallback((L) => {
      if (t.rowSelection === false || d && !d(e.current.getRowParams(L))) return false;
      const z = pt(e)[L];
      return !((z == null ? void 0 : z.type) === "footer" || (z == null ? void 0 : z.type) === "pinnedRow");
    }, [
      e,
      t.rowSelection,
      d
    ]), I = c.useCallback(() => nC(e), [
      e
    ]), C = c.useCallback((L, z = true, G = false) => {
      var _a3, _b3, _c3, _d3, _e2, _f3;
      if (e.current.isRowSelectable(L)) if (s.current = L, G) {
        n.debug(`Setting selection for row ${L}`);
        const j = [], V = (U) => {
          j.push(U);
        };
        z && (V(L), r && qo(e, p, L, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, V)), e.current.setRowSelectionModel(j);
      } else {
        n.debug(`Toggling selection for row ${L}`);
        const j = _t(e.current.state), V = new Set(j);
        V.delete(L);
        const U = (B) => {
          V.add(B);
        }, W = (B) => {
          V.delete(B);
        };
        z ? (U(L), r && qo(e, p, L, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, U)) : r && sa(e, p, L, ((_e2 = t.rowSelectionPropagation) == null ? void 0 : _e2.descendants) ?? false, ((_f3 = t.rowSelectionPropagation) == null ? void 0 : _f3.parents) ?? false, W), (V.size < 2 || u) && e.current.setRowSelectionModel(Array.from(V));
      }
    }, [
      e,
      n,
      r,
      p,
      (_c2 = t.rowSelectionPropagation) == null ? void 0 : _c2.descendants,
      (_d2 = t.rowSelectionPropagation) == null ? void 0 : _d2.parents,
      u
    ]), E = c.useCallback((L, z = true, G = false) => {
      n.debug("Setting selection for several rows");
      const j = L.filter((W) => e.current.isRowSelectable(W));
      let V;
      if (G) {
        if (z) {
          if (V = new Set(j), r) {
            const K = (B) => {
              V.add(B);
            };
            j.forEach((B) => {
              var _a3, _b3;
              qo(e, p, B, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, K);
            });
          }
        } else V = /* @__PURE__ */ new Set();
        const W = _n(e);
        if (V.size === Object.keys(W).length && Array.from(V).every((K) => W[K] === K)) return;
      } else {
        V = new Set(Object.values(_n(e)));
        const W = (B) => {
          V.add(B);
        }, K = (B) => {
          V.delete(B);
        };
        j.forEach((B) => {
          var _a3, _b3, _c3, _d3;
          z ? (V.add(B), r && qo(e, p, B, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, W)) : (K(B), r && sa(e, p, B, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, K));
        });
      }
      (V.size < 2 || u) && e.current.setRowSelectionModel(Array.from(V));
    }, [
      n,
      r,
      u,
      e,
      p,
      (_e = t.rowSelectionPropagation) == null ? void 0 : _e.descendants,
      (_f2 = t.rowSelectionPropagation) == null ? void 0 : _f2.parents
    ]), $ = c.useCallback((L) => {
      var _a3, _b3;
      if (!h || !r || L.length === 0) return L;
      const z = new Set(L), G = (j) => {
        z.add(j);
      };
      for (const j of L) qo(e, p, j, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, G, z);
      return Array.from(z);
    }, [
      e,
      p,
      (_g2 = t.rowSelectionPropagation) == null ? void 0 : _g2.descendants,
      (_h2 = t.rowSelectionPropagation) == null ? void 0 : _h2.parents,
      h,
      r
    ]), k = c.useCallback(({ startId: L, endId: z }, G = true, j = false) => {
      if (!e.current.getRow(L) || !e.current.getRow(z)) return;
      n.debug(`Expanding selection from row ${L} to row ${z}`);
      const V = yo(e), U = V.indexOf(L), W = V.indexOf(z), [K, B] = U > W ? [
        W,
        U
      ] : [
        U,
        W
      ], te = V.slice(K, B + 1);
      e.current.selectRows(te, G, j);
    }, [
      e,
      n
    ]), H = {
      selectRow: C,
      setRowSelectionModel: m,
      getSelectedRows: I,
      isRowSelected: x,
      isRowSelectable: v
    }, A = {
      selectRows: E,
      selectRowRange: k,
      getPropagatedRowSelectionModel: $
    };
    ke(e, H, "public"), ke(e, A, t.signature === nn.DataGrid ? "private" : "public");
    const R = c.useRef(true), y = c.useCallback((L = false) => {
      var _a3;
      if (R.current) return;
      const z = _t(e.current.state), G = Jt(e), j = jo(e), V = b({}, _n(e)), U = (B) => t.filterMode === "server" ? !G[B] : !G[B] || j[B] === false;
      let W = false;
      z.forEach((B) => {
        var _a4;
        if (U(B)) {
          if (t.keepNonExistentRowsSelected) return;
          delete V[B], W = true;
          return;
        }
        if (!((_a4 = t.rowSelectionPropagation) == null ? void 0 : _a4.parents)) return;
        const te = p[B];
        if (te.type === "group") {
          if (te.isAutoGenerated) {
            delete V[B], W = true;
            return;
          }
          te.children.every((ne) => j[ne] === false) || (delete V[B], W = true);
        }
      });
      const K = h && ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.parents) && Object.keys(V).length > 0;
      if (W || K && !L) {
        const B = Object.values(V);
        K ? e.current.selectRows(B, true, true) : e.current.setRowSelectionModel(B);
      }
    }, [
      e,
      h,
      (_i2 = t.rowSelectionPropagation) == null ? void 0 : _i2.parents,
      t.keepNonExistentRowsSelected,
      t.filterMode,
      p
    ]), w = c.useCallback((L, z) => {
      const G = z.metaKey || z.ctrlKey, j = !a && !G && !fy(z), V = !u || j, U = e.current.isRowSelected(L);
      V ? e.current.selectRow(L, j ? true : !U, true) : e.current.selectRow(L, !U, false);
    }, [
      e,
      u,
      a
    ]), M = c.useCallback((L, z) => {
      var _a3, _b3;
      if (i) return;
      const G = (_a3 = z.target.closest(`.${P.cell}`)) == null ? void 0 : _a3.getAttribute("data-field");
      G === Ao.field || G === ml || G && ((_b3 = e.current.getColumn(G)) == null ? void 0 : _b3.type) === gl || pt(e)[L.id].type === "pinnedRow" || (z.shiftKey && u ? g(L.id) : w(L.id, z));
    }, [
      i,
      u,
      e,
      g,
      w
    ]), O = c.useCallback((L, z) => {
      var _a3;
      u && z.shiftKey && ((_a3 = window.getSelection()) == null ? void 0 : _a3.removeAllRanges());
    }, [
      u
    ]), D = c.useCallback((L, z) => {
      u && z.nativeEvent.shiftKey ? g(L.id) : e.current.selectRow(L.id, L.value, !u);
    }, [
      e,
      g,
      u
    ]), _ = c.useCallback((L) => {
      const z = t.pagination && t.checkboxSelectionVisibleOnly && t.paginationMode === "client" ? Cu(e) : yo(e);
      e.current.selectRows(z, L.value);
    }, [
      e,
      t.checkboxSelectionVisibleOnly,
      t.pagination,
      t.paginationMode
    ]), F = c.useCallback((L, z) => {
      if (e.current.getCellMode(L.id, L.field) !== Xe.Edit && !Mr(z)) {
        if (il(z.key) && z.shiftKey) {
          const G = Rt(e);
          if (G && G.id !== L.id) {
            z.preventDefault();
            const j = e.current.isRowSelected(G.id);
            if (!u) {
              e.current.selectRow(G.id, !j, true);
              return;
            }
            const V = e.current.getRowIndexRelativeToVisibleRows(G.id), U = e.current.getRowIndexRelativeToVisibleRows(L.id);
            let W, K;
            V > U ? j ? (W = U, K = V - 1) : (W = U, K = V) : j ? (W = V + 1, K = U) : (W = V, K = U);
            const te = Vn(e).rows.slice(W, K + 1).map((J) => J.id);
            e.current.selectRows(te, !j);
            return;
          }
        }
        if (z.key === " " && z.shiftKey) {
          z.preventDefault(), w(L.id, z);
          return;
        }
        String.fromCharCode(z.keyCode) === "A" && (z.ctrlKey || z.metaKey) && (z.preventDefault(), E(e.current.getAllRowIds(), true));
      }
    }, [
      e,
      w,
      E,
      u
    ]), S = Ke(() => {
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
    oe(e, "sortedRowsSet", o(() => y(true))), oe(e, "filteredRowsSet", o(() => y())), oe(e, "rowClick", o(M)), oe(e, "rowSelectionCheckboxChange", o(D)), oe(e, "headerSelectionCheckboxChange", _), oe(e, "cellMouseDown", o(O)), oe(e, "cellKeyDown", o(F)), c.useEffect(() => {
      S();
    }, [
      e,
      l,
      t.rowSelection,
      S
    ]);
    const T = l != null;
    c.useEffect(() => {
      if (T || !t.rowSelection) return;
      const L = _t(e.current.state);
      if (v) {
        const z = L.filter((G) => v(G));
        z.length < L.length && e.current.setRowSelectionModel(z);
      }
    }, [
      e,
      v,
      T,
      t.rowSelection
    ]), c.useEffect(() => {
      if (!t.rowSelection || T) return;
      const L = _t(e.current.state);
      !u && L.length > 1 && e.current.setRowSelectionModel([]);
    }, [
      e,
      u,
      a,
      T,
      t.rowSelection
    ]), c.useEffect(() => {
      o(y);
    }, [
      y,
      o
    ]), c.useEffect(() => {
      R.current && (R.current = false);
    }, []);
  }, cI = (e) => {
    const { classes: t } = e;
    return c.useMemo(() => me({
      cellCheckbox: [
        "cellCheckbox"
      ],
      columnHeaderCheckbox: [
        "columnHeaderCheckbox"
      ]
    }, He, t), [
      t
    ]);
  }, uI = (e, t) => {
    const n = {
      classes: t.classes
    }, o = cI(n), r = c.useCallback((l) => {
      const s = b({}, Ao, {
        cellClassName: o.cellCheckbox,
        headerClassName: o.columnHeaderCheckbox,
        headerName: e.current.getLocaleText("checkboxSelectionHeaderName")
      }), a = t.checkboxSelection, i = l.lookup[Kt] != null;
      return a && !i ? (l.lookup[Kt] = s, l.orderedFields = [
        Kt,
        ...l.orderedFields
      ]) : !a && i ? (delete l.lookup[Kt], l.orderedFields = l.orderedFields.filter((d) => d !== Kt)) : a && i && (l.lookup[Kt] = b({}, s, l.lookup[Kt]), t.columns.some((d) => d.field === Kt) || (l.orderedFields = [
        Kt,
        ...l.orderedFields.filter((d) => d !== Kt)
      ])), l;
    }, [
      e,
      o,
      t.columns,
      t.checkboxSelection
    ]);
    ot(e, "hydrateColumns", r);
  }, dI = (e, t) => {
    var _a2, _b2;
    const n = t.sortModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel) ?? [];
    return b({}, e, {
      sorting: {
        sortModel: Ac(n, t.disableMultipleColumnsSorting),
        sortedRows: []
      }
    });
  }, pI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridSorting");
    e.current.registerControlState({
      stateId: "sortModel",
      propModel: t.sortModel,
      propOnChange: t.onSortModelChange,
      stateSelector: un,
      changeEvent: "sortModelChange"
    });
    const o = c.useCallback((k, H) => {
      const A = un(e), R = A.findIndex((w) => w.field === k);
      let y = [
        ...A
      ];
      return R > -1 ? (H == null ? void 0 : H.sort) == null ? y.splice(R, 1) : y.splice(R, 1, H) : y = [
        ...A,
        H
      ], y;
    }, [
      e
    ]), r = c.useCallback((k, H) => {
      const R = un(e).find((y) => y.field === k.field);
      if (R) {
        const y = H === void 0 ? Xi(k.sortingOrder ?? t.sortingOrder, R.sort) : H;
        return y === void 0 ? void 0 : b({}, R, {
          sort: y
        });
      }
      return {
        field: k.field,
        sort: H === void 0 ? Xi(k.sortingOrder ?? t.sortingOrder) : H
      };
    }, [
      e,
      t.sortingOrder
    ]), l = c.useCallback((k, H) => H == null || H.sortable === false || t.disableColumnSorting ? k : (H.sortingOrder || t.sortingOrder).some((R) => !!R) ? [
      ...k,
      "columnMenuSortItem"
    ] : k, [
      t.sortingOrder,
      t.disableColumnSorting
    ]), s = c.useCallback(() => {
      e.current.setState((k) => {
        if (t.sortingMode === "server") return n.debug("Skipping sorting rows as sortingMode = server"), b({}, k, {
          sorting: b({}, k.sorting, {
            sortedRows: Vs(pt(e), Pt, false)
          })
        });
        const H = un(k, e.current.instanceId), A = nb(H, e), R = e.current.applyStrategyProcessor("sorting", {
          sortRowList: A
        });
        return b({}, k, {
          sorting: b({}, k.sorting, {
            sortedRows: R
          })
        });
      }), e.current.publishEvent("sortedRowsSet"), e.current.forceUpdate();
    }, [
      e,
      n,
      t.sortingMode
    ]), a = c.useCallback((k) => {
      un(e) !== k && (n.debug("Setting sort model"), e.current.setState(Yi(k, t.disableMultipleColumnsSorting)), e.current.forceUpdate(), e.current.applySorting());
    }, [
      e,
      n,
      t.disableMultipleColumnsSorting
    ]), i = c.useCallback((k, H, A) => {
      const R = e.current.getColumn(k), y = r(R, H);
      let w;
      !A || t.disableMultipleColumnsSorting ? w = (y == null ? void 0 : y.sort) == null ? [] : [
        y
      ] : w = o(R.field, y), e.current.setSortModel(w);
    }, [
      e,
      o,
      r,
      t.disableMultipleColumnsSorting
    ]), d = c.useCallback(() => un(e), [
      e
    ]), u = c.useCallback(() => Ns(e).map((H) => H.model), [
      e
    ]), p = c.useCallback(() => Lo(e), [
      e
    ]), h = c.useCallback((k) => e.current.getSortedRowIds()[k], [
      e
    ]);
    ke(e, {
      getSortModel: d,
      getSortedRows: u,
      getSortedRowIds: p,
      getRowIdFromRowIndex: h,
      setSortModel: a,
      sortColumn: i,
      applySorting: s
    }, "public");
    const m = c.useCallback((k, H) => {
      var _a3, _b3;
      const A = un(e);
      return !H.exportOnlyDirtyModels || t.sortModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.sorting) == null ? void 0 : _b3.sortModel) != null || A.length > 0 ? b({}, k, {
        sorting: {
          sortModel: A
        }
      }) : k;
    }, [
      e,
      t.sortModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel
    ]), x = c.useCallback((k, H) => {
      var _a3;
      const A = (_a3 = H.stateToRestore.sorting) == null ? void 0 : _a3.sortModel;
      return A == null ? k : (e.current.setState(Yi(A, t.disableMultipleColumnsSorting)), b({}, k, {
        callbacks: [
          ...k.callbacks,
          e.current.applySorting
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsSorting
    ]), v = c.useCallback((k) => {
      const H = pt(e), A = H[Pt], R = k.sortRowList ? k.sortRowList(A.children.map((y) => H[y])) : [
        ...A.children
      ];
      return A.footerId != null && R.push(A.footerId), R;
    }, [
      e
    ]);
    ot(e, "exportState", m), ot(e, "restoreState", x), ul(e, eo, "sorting", v);
    const I = c.useCallback(({ field: k, colDef: H }, A) => {
      if (!H.sortable || t.disableColumnSorting) return;
      const R = A.shiftKey || A.metaKey || A.ctrlKey;
      i(k, void 0, R);
    }, [
      i,
      t.disableColumnSorting
    ]), C = c.useCallback(({ field: k, colDef: H }, A) => {
      !H.sortable || t.disableColumnSorting || A.key === "Enter" && !A.ctrlKey && !A.metaKey && i(k, void 0, A.shiftKey);
    }, [
      i,
      t.disableColumnSorting
    ]), E = c.useCallback(() => {
      const k = un(e), H = On(e);
      if (k.length > 0) {
        const A = k.filter((R) => H[R.field]);
        A.length < k.length && e.current.setSortModel(A);
      }
    }, [
      e
    ]), $ = c.useCallback((k) => {
      k === "sorting" && e.current.applySorting();
    }, [
      e
    ]);
    ot(e, "columnMenu", l), oe(e, "columnHeaderClick", I), oe(e, "columnHeaderKeyDown", C), oe(e, "rowsSet", e.current.applySorting), oe(e, "columnsChange", E), oe(e, "activeStrategyProcessorChange", $), xr(() => {
      e.current.applySorting();
    }), St(() => {
      t.sortModel !== void 0 && e.current.setSortModel(t.sortModel);
    }, [
      e,
      t.sortModel
    ]);
  };
  function za(e) {
    const { containerSize: t, scrollPosition: n, elementSize: o, elementOffset: r } = e, l = r + o;
    if (o > t) return r;
    if (l - t > n) return l - t;
    if (r < n) return r;
  }
  const fI = (e, t) => {
    const n = At(), o = wt(e, "useGridScroll"), r = e.current.columnHeadersContainerRef, l = e.current.virtualScrollerRef, s = Q(e, Un), a = c.useCallback((p) => {
      var _a2;
      const h = mt(e.current.state), g = wr(e), m = t.unstable_listView ? [
        Oo(e.current.state)
      ] : st(e);
      if (!(p.rowIndex == null) && g === 0 || m.length === 0) return false;
      o.debug(`Scrolling to cell at row ${p.rowIndex}, col: ${p.colIndex} `);
      let v = {};
      if (p.colIndex !== void 0) {
        const I = Wn(e);
        let C;
        if (typeof p.rowIndex < "u") {
          const E = (_a2 = s[p.rowIndex]) == null ? void 0 : _a2.id, $ = e.current.unstable_getCellColSpanInfo(E, p.colIndex);
          $ && !$.spannedByColSpan && (C = $.cellProps.width);
        }
        typeof C > "u" && (C = m[p.colIndex].computedWidth), v.left = za({
          containerSize: h.viewportOuterSize.width,
          scrollPosition: Math.abs(l.current.scrollLeft),
          elementSize: C,
          elementOffset: I[p.colIndex]
        });
      }
      if (p.rowIndex !== void 0) {
        const I = zo(e.current.state), C = CC(e), E = mu(e), $ = t.pagination ? p.rowIndex - C * E : p.rowIndex, k = I.positions[$ + 1] ? I.positions[$ + 1] - I.positions[$] : I.currentPageTotalHeight - I.positions[$];
        v.top = za({
          containerSize: h.viewportInnerSize.height,
          scrollPosition: l.current.scrollTop,
          elementSize: k,
          elementOffset: I.positions[$]
        });
      }
      return v = e.current.unstable_applyPipeProcessors("scrollToIndexes", v, p), typeof v.left !== void 0 || typeof v.top !== void 0 ? (e.current.scroll(v), true) : false;
    }, [
      o,
      e,
      l,
      t.pagination,
      s,
      t.unstable_listView
    ]), i = c.useCallback((p) => {
      if (l.current && p.left !== void 0 && r.current) {
        const h = n ? -1 : 1;
        r.current.scrollLeft = p.left, l.current.scrollLeft = h * p.left, o.debug(`Scrolling left: ${p.left}`);
      }
      l.current && p.top !== void 0 && (l.current.scrollTop = p.top, o.debug(`Scrolling top: ${p.top}`)), o.debug("Scrolling, updating container, and viewport");
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
  function gI(e, t) {
    Qe(e, "columnHeaderClick", t.onColumnHeaderClick), Qe(e, "columnHeaderContextMenu", t.onColumnHeaderContextMenu), Qe(e, "columnHeaderDoubleClick", t.onColumnHeaderDoubleClick), Qe(e, "columnHeaderOver", t.onColumnHeaderOver), Qe(e, "columnHeaderOut", t.onColumnHeaderOut), Qe(e, "columnHeaderEnter", t.onColumnHeaderEnter), Qe(e, "columnHeaderLeave", t.onColumnHeaderLeave), Qe(e, "cellClick", t.onCellClick), Qe(e, "cellDoubleClick", t.onCellDoubleClick), Qe(e, "cellKeyDown", t.onCellKeyDown), Qe(e, "preferencePanelClose", t.onPreferencePanelClose), Qe(e, "preferencePanelOpen", t.onPreferencePanelOpen), Qe(e, "menuOpen", t.onMenuOpen), Qe(e, "menuClose", t.onMenuClose), Qe(e, "rowDoubleClick", t.onRowDoubleClick), Qe(e, "rowClick", t.onRowClick), Qe(e, "stateChange", t.onStateChange);
  }
  function hI(e, t = 166) {
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
  const ms = {
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
    editMode: yn.Cell,
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
  }, fo = {
    width: 0,
    height: 0
  }, mI = {
    isReady: false,
    root: fo,
    viewportOuterSize: fo,
    viewportInnerSize: fo,
    contentSize: fo,
    minimumSize: fo,
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
  }, bI = (e, t, n) => {
    const o = mI, r = Do(n);
    return b({}, e, {
      dimensions: b({}, o, od(t, n, r, $o(n)))
    });
  }, nd = be(st, Wn, (e, t) => {
    const n = e.length;
    return n === 0 ? 0 : bo(t[n - 1] + e[n - 1].computedWidth, 1);
  });
  function CI(e, t) {
    const n = wt(e, "useResizeContainer"), o = c.useRef(false), r = c.useRef(fo), l = Q(e, $o), s = Q(e, Do), a = Q(e, nd), i = c.useRef(true), { rowHeight: d, headerHeight: u, groupHeaderHeight: p, headerFilterHeight: h, headersTotalHeight: g, leftPinnedWidth: m, rightPinnedWidth: x } = od(t, e, s, l), v = c.useRef(void 0), I = c.useCallback(() => mt(e.current.state), [
      e
    ]), C = c.useCallback((O) => {
      e.current.setState((D) => b({}, D, {
        dimensions: O
      })), e.current.rootElementRef.current && Ga(e.current.rootElementRef.current, mt(e.current.state));
    }, [
      e
    ]), E = c.useCallback(() => {
      const O = e.current.mainElementRef.current;
      if (!O) return;
      const D = Md(O).getComputedStyle(O), _ = {
        width: parseFloat(D.width) || 0,
        height: parseFloat(D.height) || 0
      };
      (!v.current || !Va(v.current, _)) && (e.current.publishEvent("resize", _), v.current = _);
    }, [
      e
    ]), $ = c.useCallback(() => {
      const O = mt(e.current.state);
      if (!O.isReady) return 0;
      const D = Vn(e);
      if (t.getRowHeight) {
        const F = Pr(e), S = F.lastRowIndex - F.firstRowIndex;
        return Math.min(S - 1, D.rows.length);
      }
      const _ = Math.floor(O.viewportInnerSize.height / d);
      return Math.min(_, D.rows.length);
    }, [
      e,
      t.getRowHeight,
      d
    ]), k = c.useCallback(() => {
      var _a2, _b2;
      if (i.current) return;
      const O = wI(e.current.mainElementRef.current, t.scrollbarSize), D = zo(e.current.state), _ = g + D.pinnedTopRowsTotalHeight, F = D.pinnedBottomRowsTotalHeight, T = {
        width: a - m - x,
        height: bo(D.currentPageTotalHeight, 1)
      };
      let L, z, G = false, j = false;
      if (t.autoHeight) j = false, G = Math.round(a) > Math.round(r.current.width), L = {
        width: r.current.width,
        height: _ + F + T.height
      }, z = {
        width: Math.max(0, L.width - (j ? O : 0)),
        height: Math.max(0, L.height - (G ? O : 0))
      };
      else {
        L = {
          width: r.current.width,
          height: r.current.height
        }, z = {
          width: Math.max(0, L.width - m - x),
          height: Math.max(0, L.height - _ - F)
        };
        const B = T, te = z, J = B.width > te.width, ne = B.height > te.height;
        (J || ne) && (j = ne, G = B.width + (j ? O : 0) > te.width, G && (j = B.height + O > te.height)), j && (z.width -= O), G && (z.height -= O);
      }
      const V = Math.max(L.width, a + (j ? O : 0)), U = {
        width: a,
        height: _ + T.height + F
      }, W = {
        isReady: true,
        root: r.current,
        viewportOuterSize: L,
        viewportInnerSize: z,
        contentSize: T,
        minimumSize: U,
        hasScrollX: G,
        hasScrollY: j,
        scrollbarSize: O,
        headerHeight: u,
        groupHeaderHeight: p,
        headerFilterHeight: h,
        rowWidth: V,
        rowHeight: d,
        columnsTotalWidth: a,
        leftPinnedWidth: m,
        rightPinnedWidth: x,
        headersTotalHeight: g,
        topContainerHeight: _,
        bottomContainerHeight: F
      }, K = e.current.state.dimensions;
      Gn(K, W) || (C(W), Va(W.viewportInnerSize, K.viewportInnerSize) || e.current.publishEvent("viewportInnerSizeChange", W.viewportInnerSize), (_b2 = (_a2 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a2));
    }, [
      e,
      C,
      t.scrollbarSize,
      t.autoHeight,
      d,
      u,
      p,
      h,
      a,
      g,
      m,
      x
    ]), H = Ke(k), A = c.useMemo(() => t.resizeThrottleMs > 0 ? hI(() => {
      H(), e.current.publishEvent("debouncedResize", r.current);
    }, t.resizeThrottleMs) : void 0, [
      e,
      t.resizeThrottleMs,
      H
    ]);
    c.useEffect(() => A == null ? void 0 : A.clear, [
      A
    ]);
    const R = {
      resize: E,
      getRootDimensions: I
    }, y = {
      updateDimensions: k,
      getViewportPageSize: $
    };
    St(k, [
      k
    ]), ke(e, R, "public"), ke(e, y, "private");
    const w = c.useCallback((O) => {
      Ga(O, mt(e.current.state));
    }, [
      e
    ]), M = c.useCallback((O) => {
      if (r.current = O, O.height === 0 && !o.current && !t.autoHeight && !ll && (n.error([
        "The parent DOM element of the Data Grid has an empty height.",
        "Please make sure that this element has an intrinsic height.",
        "The grid displays with a height of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), O.width === 0 && !o.current && !ll && (n.error([
        "The parent DOM element of the Data Grid has an empty width.",
        "Please make sure that this element has an intrinsic width.",
        "The grid displays with a width of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), i.current || !A) {
        i.current = false, k();
        return;
      }
      A();
    }, [
      k,
      t.autoHeight,
      A,
      n
    ]);
    Qe(e, "rootMount", w), Qe(e, "resize", M), Qe(e, "debouncedResize", t.onResize);
  }
  function Ga(e, t) {
    const n = (o, r) => e.style.setProperty(o, r);
    n("--DataGrid-hasScrollX", `${Number(t.hasScrollX)}`), n("--DataGrid-hasScrollY", `${Number(t.hasScrollY)}`), n("--DataGrid-scrollbarSize", `${t.scrollbarSize}px`), n("--DataGrid-rowWidth", `${t.rowWidth}px`), n("--DataGrid-columnsTotalWidth", `${t.columnsTotalWidth}px`), n("--DataGrid-leftPinnedWidth", `${t.leftPinnedWidth}px`), n("--DataGrid-rightPinnedWidth", `${t.rightPinnedWidth}px`), n("--DataGrid-headerHeight", `${t.headerHeight}px`), n("--DataGrid-headersTotalHeight", `${t.headersTotalHeight}px`), n("--DataGrid-topContainerHeight", `${t.topContainerHeight}px`), n("--DataGrid-bottomContainerHeight", `${t.bottomContainerHeight}px`), n("--height", `${t.rowHeight}px`);
  }
  function od(e, t, n, o) {
    const r = tu(e.rowHeight, ms.rowHeight);
    return {
      rowHeight: Math.floor(r * n),
      headerHeight: Math.floor(e.columnHeaderHeight * n),
      groupHeaderHeight: Math.floor((e.columnGroupHeaderHeight ?? e.columnHeaderHeight) * n),
      headerFilterHeight: Math.floor((e.headerFilterHeight ?? e.columnHeaderHeight) * n),
      columnsTotalWidth: nd(t),
      headersTotalHeight: vl(t, e),
      leftPinnedWidth: o.left.reduce((l, s) => l + s.computedWidth, 0),
      rightPinnedWidth: o.right.reduce((l, s) => l + s.computedWidth, 0)
    };
  }
  const _a = /* @__PURE__ */ new WeakMap();
  function wI(e, t) {
    if (t !== void 0) return t;
    if (e === null) return 0;
    const n = _a.get(e);
    if (n !== void 0) return n;
    const r = en(e).createElement("div");
    r.style.width = "99px", r.style.height = "99px", r.style.position = "absolute", r.style.overflow = "scroll", r.className = "scrollDiv", e.appendChild(r);
    const l = r.offsetWidth - r.clientWidth;
    return e.removeChild(r), _a.set(e, l), l;
  }
  function Va(e, t) {
    return e.width === t.width && e.height === t.height;
  }
  const xI = typeof globalThis.ResizeObserver < "u" ? globalThis.ResizeObserver : class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }, vI = (e, t, n) => {
    n.current.caches.rowsMeta = {
      heights: /* @__PURE__ */ new Map()
    };
    const o = js(n.current.state), r = wr(n), l = vr(n.current.state), s = Math.min(l.enabled ? l.paginationModel.pageSize : r, r);
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
  }, yI = (e, t) => {
    const { getRowHeight: n, getRowSpacing: o, getEstimatedRowHeight: r } = t, l = e.current.caches.rowsMeta.heights, s = c.useRef(-1), a = c.useRef(false), i = c.useRef(false), d = Q(e, Do), u = Qs(e), p = Q(e, Ro), h = Q(e, js), g = (w) => {
      let M = l.get(w);
      return M === void 0 && (M = {
        content: h,
        spacingTop: 0,
        spacingBottom: 0,
        detail: 0,
        autoHeight: false,
        needsFirstMeasurement: true
      }, l.set(w, M)), M;
    }, m = c.useCallback((w) => {
      const M = mt(e.current.state).rowHeight, O = e.current.getRowHeightEntry(w.id);
      if (!n) O.content = M, O.needsFirstMeasurement = false;
      else {
        const D = n(b({}, w, {
          densityFactor: d
        }));
        if (D === "auto") {
          if (O.needsFirstMeasurement) {
            const _ = r ? r(b({}, w, {
              densityFactor: d
            })) : M;
            O.content = _ ?? M;
          }
          a.current = true, O.autoHeight = true;
        } else O.content = tu(D, M), O.needsFirstMeasurement = false, O.autoHeight = false;
      }
      if (o) {
        const D = e.current.getRowIndexRelativeToVisibleRows(w.id), _ = o(b({}, w, {
          isFirstVisible: D === 0,
          isLastVisible: D === u.rows.length - 1,
          indexRelativeToCurrentPage: D
        }));
        O.spacingTop = _.top ?? 0, O.spacingBottom = _.bottom ?? 0;
      } else O.spacingTop = 0, O.spacingBottom = 0;
      return e.current.unstable_applyPipeProcessors("rowHeight", O, w), O;
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
      const w = p.top.reduce((S, T) => {
        const L = m(T);
        return S + L.content + L.spacingTop + L.spacingBottom + L.detail;
      }, 0), M = p.bottom.reduce((S, T) => {
        const L = m(T);
        return S + L.content + L.spacingTop + L.spacingBottom + L.detail;
      }, 0), O = [], D = u.rows.reduce((S, T) => {
        O.push(S);
        const L = m(T), z = L.content + L.spacingTop + L.spacingBottom + L.detail;
        return S + z;
      }, 0);
      a.current || (s.current = 1 / 0);
      const _ = w !== e.current.state.rowsMeta.pinnedTopRowsTotalHeight || M !== e.current.state.rowsMeta.pinnedBottomRowsTotalHeight || D !== e.current.state.rowsMeta.currentPageTotalHeight, F = {
        currentPageTotalHeight: D,
        positions: O,
        pinnedTopRowsTotalHeight: w,
        pinnedBottomRowsTotalHeight: M
      };
      e.current.setState((S) => b({}, S, {
        rowsMeta: F
      })), _ && e.current.updateDimensions(), i.current = true;
    }, [
      e,
      p,
      u.rows,
      m
    ]), v = (w) => {
      var _a2;
      return ((_a2 = l.get(w)) == null ? void 0 : _a2.content) ?? h;
    }, I = (w, M) => {
      const O = e.current.getRowHeightEntry(w), D = O.content !== M;
      O.needsFirstMeasurement = false, O.content = M, i.current &&= !D;
    }, C = (w) => {
      var _a2;
      return ((_a2 = l.get(w)) == null ? void 0 : _a2.autoHeight) ?? false;
    }, E = () => s.current, $ = (w) => {
      a.current && w > s.current && (s.current = w);
    }, k = () => {
      l.clear(), x();
    }, H = Sn(() => new xI((w) => {
      var _a2;
      for (let M = 0; M < w.length; M += 1) {
        const O = w[M], D = O.borderBoxSize && O.borderBoxSize.length > 0 ? O.borderBoxSize[0].blockSize : O.contentRect.height, _ = O.target.__mui_id;
        if (((_a2 = Ru(e)) == null ? void 0 : _a2.id) === _ && D === 0) return;
        e.current.unstable_storeRowHeightMeasurement(_, D);
      }
      i.current || requestAnimationFrame(() => {
        e.current.requestPipeProcessorsApplication("rowHeight");
      });
    })).current, A = (w, M) => (w.__mui_id = M, H.observe(w), () => H.unobserve(w));
    li(e, "rowHeight", x), St(() => {
      x();
    }, [
      x
    ]);
    const R = {
      unstable_getRowHeight: v,
      unstable_setLastMeasuredRowIndex: $,
      unstable_storeRowHeightMeasurement: I,
      resetRowHeights: k
    }, y = {
      hydrateRowsMeta: x,
      observeRowHeight: A,
      rowHasAutoHeight: C,
      getRowHeightEntry: g,
      getLastMeasuredRowIndex: E
    };
    ke(e, R, "public"), ke(e, y, "private");
  }, SI = (e) => {
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
  }, II = (e) => {
    const t = c.useRef({}), n = (a, i) => {
      var _a2;
      return (_a2 = t.current[a]) == null ? void 0 : _a2[i];
    }, o = () => {
      t.current = {};
    }, r = c.useCallback(({ rowId: a, minFirstColumn: i, maxLastColumn: d, columns: u }) => {
      for (let p = i; p < d; p += 1) {
        const h = PI({
          apiRef: e,
          lookup: t.current,
          columnIndex: p,
          rowId: a,
          minFirstColumnIndex: i,
          maxLastColumnIndex: d,
          columns: u
        });
        h.colSpan > 1 && (p += h.colSpan - 1);
      }
    }, [
      e
    ]), l = {
      unstable_getCellColSpanInfo: n
    }, s = {
      resetColSpan: o,
      calculateColSpan: r
    };
    ke(e, l, "public"), ke(e, s, "private"), oe(e, "columnOrderChange", o);
  };
  function PI(e) {
    const { apiRef: t, lookup: n, columnIndex: o, rowId: r, minFirstColumnIndex: l, maxLastColumnIndex: s, columns: a } = e, i = a.length, d = a[o], u = t.current.getRow(r), p = t.current.getRowValue(u, d), h = typeof d.colSpan == "function" ? d.colSpan(p, u, d, t) : d.colSpan;
    if (!h || h === 1) return Wl(n, r, o, {
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
        const v = a[x];
        g += v.computedWidth, Wl(n, r, o + m, {
          spannedByColSpan: true,
          rightVisibleCellIndex: Math.min(o + h, i - 1),
          leftVisibleCellIndex: o
        });
      }
      Wl(n, r, o, {
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
  function Wl(e, t, n, o) {
    e[t] || (e[t] = {}), e[t][n] = o;
  }
  const rd = (e, t, n) => {
    if (Nc(e)) {
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
      rd(l, [
        ...t,
        o
      ], n);
    });
  }, bs = (e) => {
    if (!e) return {};
    const t = {};
    return e.forEach((n) => {
      rd(n, [], t);
    }), t;
  }, Cs = (e, t, n) => {
    const o = (i) => t[i] ?? [], r = [], l = Math.max(...e.map((i) => o(i).length)), s = (i, d, u) => Gn(o(i).slice(0, u + 1), o(d).slice(0, u + 1)), a = (i, d) => !!((n == null ? void 0 : n.left) && n.left.includes(i) && !n.left.includes(d) || (n == null ? void 0 : n.right) && !n.right.includes(i) && n.right.includes(d));
    for (let i = 0; i < l; i += 1) {
      const d = e.reduce((u, p) => {
        const h = o(p)[i] ?? null;
        if (u.length === 0) return [
          {
            columnFields: [
              p
            ],
            groupId: h
          }
        ];
        const g = u[u.length - 1], m = g.columnFields[g.columnFields.length - 1];
        return g.groupId !== h || !s(m, p, i) || a(m, p) ? [
          ...u,
          {
            columnFields: [
              p
            ],
            groupId: h
          }
        ] : [
          ...u.slice(0, u.length - 1),
          {
            columnFields: [
              ...g.columnFields,
              p
            ],
            groupId: h
          }
        ];
      }, []);
      r.push(d);
    }
    return r;
  }, MI = [
    "groupId",
    "children"
  ], si = (e) => {
    let t = {};
    return e.forEach((n) => {
      if (Nc(n)) return;
      const { groupId: o, children: r } = n, l = ge(n, MI);
      if (!o) throw new Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
      const s = b({}, l, {
        groupId: o
      }), a = si(r);
      if (a[o] !== void 0 || t[o] !== void 0) throw new Error(`MUI X: The groupId ${o} is used multiple times in the columnGroupingModel.`);
      t = b({}, t, a, {
        [o]: s
      });
    }), b({}, t);
  }, kI = (e, t, n) => {
    if (!t.columnGroupingModel) return e;
    const o = En(n), r = Ho(n), l = si(t.columnGroupingModel ?? []), s = bs(t.columnGroupingModel ?? []), a = Cs(o, s, n.current.state.pinnedColumns ?? {}), i = r.length === 0 ? 0 : Math.max(...r.map((d) => {
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
  }, EI = (e, t) => {
    const n = c.useCallback((a) => yu(e)[a] ?? [], [
      e
    ]), o = c.useCallback(() => Su(e), [
      e
    ]);
    ke(e, {
      getColumnGroupPath: n,
      getAllGroupDetails: o
    }, "public");
    const l = c.useCallback(() => {
      const a = bs(t.columnGroupingModel ?? []);
      e.current.setState((i) => {
        var _a2;
        const d = ((_a2 = i.columns) == null ? void 0 : _a2.orderedFields) ?? [], u = i.pinnedColumns ?? {}, p = Cs(d, a, u);
        return b({}, i, {
          columnGrouping: b({}, i.columnGrouping, {
            headerStructure: p
          })
        });
      });
    }, [
      e,
      t.columnGroupingModel
    ]), s = c.useCallback((a) => {
      var _a2, _b2;
      const i = ((_b2 = (_a2 = e.current).getPinnedColumns) == null ? void 0 : _b2.call(_a2)) ?? {}, d = En(e), u = Ho(e), p = si(a ?? []), h = bs(a ?? []), g = Cs(d, h, i), m = u.length === 0 ? 0 : Math.max(...u.map((x) => {
        var _a3;
        return ((_a3 = h[x]) == null ? void 0 : _a3.length) ?? 0;
      }));
      e.current.setState((x) => b({}, x, {
        columnGrouping: {
          lookup: p,
          unwrappedGroupingModel: h,
          headerStructure: g,
          maxDepth: m
        }
      }));
    }, [
      e
    ]);
    oe(e, "columnIndexChange", l), oe(e, "columnsChange", () => {
      s(t.columnGroupingModel);
    }), oe(e, "columnVisibilityModelChange", () => {
      s(t.columnGroupingModel);
    }), c.useEffect(() => {
      s(t.columnGroupingModel);
    }, [
      s,
      t.columnGroupingModel
    ]);
  };
  function FI() {
    let e, t;
    const n = new Promise((o, r) => {
      e = o, t = r;
    });
    return n.resolve = e, n.reject = t, n;
  }
  function Na(e, t) {
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
  function Ba(e, t, n, o) {
    let r = e;
    return o === "Right" ? r += t - n.left : r += n.right - t, r;
  }
  function TI(e, t, n) {
    return n === "Left" ? e - t.left : t.right - e;
  }
  function OI(e) {
    return e === "Right" ? "Left" : "Right";
  }
  function DI(e, t) {
    const n = e.classList.contains(P["columnSeparator--sideRight"]) ? "Right" : "Left";
    return t ? OI(n) : n;
  }
  function Wa(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function RI(e) {
    const t = c.useRef(void 0), n = () => Ou(e), o = Q(e, n);
    return c.useEffect(() => {
      t.current && o === false && (t.current.resolve(), t.current = void 0);
    }), () => {
      if (!t.current) {
        if (n() === false) return Promise.resolve();
        t.current = FI();
      }
      return t.current;
    };
  }
  function HI(e, t) {
    if (e.length < 4) return e;
    const n = e.slice();
    n.sort((a, i) => a - i);
    const o = n[Math.floor(n.length * 0.25)], r = n[Math.floor(n.length * 0.75) - 1], l = r - o, s = l < 5 ? 5 : l * t;
    return n.filter((a) => a > o - s && a < r + s);
  }
  function $I(e, t, n) {
    const o = {}, r = e.current.rootElementRef.current;
    return r.classList.add(P.autosizing), n.forEach((l) => {
      const a = Pv(e.current, l.field).map((m) => m.getBoundingClientRect().width ?? 0), i = t.includeOutliers ? a : HI(a, t.outliersFactor);
      if (t.includeHeaders) {
        const m = Iv(e.current, l.field);
        if (m) {
          const x = m.querySelector(`.${P.columnHeaderTitle}`), v = m.querySelector(`.${P.columnHeaderTitleContainerContent}`), I = m.querySelector(`.${P.iconButtonContainer}`), C = m.querySelector(`.${P.menuIcon}`), E = x ?? v, $ = window.getComputedStyle(m, null), k = parseInt($.paddingLeft, 10) + parseInt($.paddingRight, 10), A = E.scrollWidth + 1 + k + ((I == null ? void 0 : I.clientWidth) ?? 0) + ((C == null ? void 0 : C.clientWidth) ?? 0);
          i.push(A);
        }
      }
      const d = l.minWidth !== -1 / 0 && l.minWidth !== void 0, u = l.maxWidth !== 1 / 0 && l.maxWidth !== void 0, p = d ? l.minWidth : 0, h = u ? l.maxWidth : 1 / 0, g = i.length === 0 ? 0 : Math.max(...i);
      o[l.field] = Nt(g, p, h);
    }), r.classList.remove(P.autosizing), o;
  }
  const LI = (e) => b({}, e, {
    columnResize: {
      resizingColumnField: ""
    }
  });
  function jI() {
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
  const AI = (e, t) => {
    const n = At(), o = wt(e, "useGridColumnResize"), r = Sn(jI).current, l = c.useRef(null), s = c.useRef(null), a = Qt(), i = c.useRef(void 0), d = (y) => {
      var _a2, _b2;
      o.debug(`Updating width to ${y} for col ${r.colDef.field}`);
      const w = r.columnHeaderElement.offsetWidth, M = y - w, O = y - r.initialColWidth;
      if (O > 0) {
        const F = r.initialTotalWidth + O;
        (_b2 = (_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.style.setProperty("--DataGrid-rowWidth", `${F}px`);
      }
      r.colDef.computedWidth = y, r.colDef.width = y, r.colDef.flex = 0, r.columnHeaderElement.style.width = `${y}px`;
      const D = r.headerFilterElement;
      D && (D.style.width = `${y}px`), r.groupHeaderElements.forEach((F) => {
        const S = F;
        let T;
        S.getAttribute("aria-colspan") === "1" ? T = `${y}px` : T = `${S.offsetWidth + M}px`, S.style.width = T;
      }), r.cellElements.forEach((F) => {
        const S = F;
        let T;
        S.getAttribute("aria-colspan") === "1" ? T = `${y}px` : T = `${S.offsetWidth + M}px`, S.style.setProperty("--width", T);
      });
      const _ = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      _ === jn.LEFT && (uo(r.fillerLeft, "width", M), r.leftPinnedCellsAfter.forEach((F) => {
        uo(F, "left", M);
      }), r.leftPinnedHeadersAfter.forEach((F) => {
        uo(F, "left", M);
      })), _ === jn.RIGHT && (uo(r.fillerRight, "width", M), r.rightPinnedCellsBefore.forEach((F) => {
        uo(F, "right", M);
      }), r.rightPinnedHeadersBefore.forEach((F) => {
        uo(F, "right", M);
      }));
    }, u = (y) => {
      if (I(), r.previousMouseClickEvent) {
        const w = r.previousMouseClickEvent, M = w.timeStamp, O = w.clientX, D = w.clientY;
        if (y.timeStamp - M < 300 && y.clientX === O && y.clientY === D) {
          r.previousMouseClickEvent = void 0, e.current.publishEvent("columnResizeStop", null, y);
          return;
        }
      }
      if (r.colDef) {
        e.current.setColumnWidth(r.colDef.field, r.colDef.width), o.debug(`Updating col ${r.colDef.field} with new width: ${r.colDef.width}`);
        const w = xn(e.current.state);
        r.groupHeaderElements.forEach((M) => {
          const O = bv(M), D = M, F = `${O.reduce((S, T) => w.columnVisibilityModel[T] !== false ? S + w.lookup[T].computedWidth : S, 0)}px`;
          D.style.width = F;
        });
      }
      a.start(0, () => {
        e.current.publishEvent("columnResizeStop", null, y);
      });
    }, p = (y, w, M) => {
      var _a2;
      const O = e.current.rootElementRef.current;
      r.initialColWidth = y.computedWidth, r.initialTotalWidth = e.current.getRootDimensions().rowWidth, r.colDef = y, r.columnHeaderElement = mv(e.current.columnHeadersContainerRef.current, y.field);
      const D = O.querySelector(`.${P.headerFilterRow} [data-field="${Dn(y.field)}"]`);
      D && (r.headerFilterElement = D), r.groupHeaderElements = Cv((_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current, y.field), r.cellElements = wv(r.columnHeaderElement, e.current), r.fillerLeft = wa(e.current, n ? "filler--pinnedRight" : "filler--pinnedLeft"), r.fillerRight = wa(e.current, n ? "filler--pinnedLeft" : "filler--pinnedRight");
      const _ = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      r.leftPinnedCellsAfter = _ !== jn.LEFT ? [] : xv(e.current, r.columnHeaderElement, n), r.rightPinnedCellsBefore = _ !== jn.RIGHT ? [] : vv(e.current, r.columnHeaderElement, n), r.leftPinnedHeadersAfter = _ !== jn.LEFT ? [] : yv(e.current, r.columnHeaderElement, n), r.rightPinnedHeadersBefore = _ !== jn.RIGHT ? [] : Sv(e.current, r.columnHeaderElement, n), s.current = DI(w, n), l.current = TI(M, r.columnHeaderElement.getBoundingClientRect(), s.current);
    }, h = Ke(u), g = Ke((y) => {
      if (y.buttons === 0) {
        h(y);
        return;
      }
      let w = Ba(l.current, y.clientX, r.columnHeaderElement.getBoundingClientRect(), s.current);
      w = Nt(w, r.colDef.minWidth, r.colDef.maxWidth), d(w);
      const M = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: w
      };
      e.current.publishEvent("columnResize", M, y);
    }), m = Ke((y) => {
      Na(y, i.current) && u(y);
    }), x = Ke((y) => {
      const w = Na(y, i.current);
      if (!w) return;
      if (y.type === "mousemove" && y.buttons === 0) {
        m(y);
        return;
      }
      let M = Ba(l.current, w.x, r.columnHeaderElement.getBoundingClientRect(), s.current);
      M = Nt(M, r.colDef.minWidth, r.colDef.maxWidth), d(M);
      const O = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: M
      };
      e.current.publishEvent("columnResize", O, y);
    }), v = Ke((y) => {
      const w = sl(y.target, P["columnSeparator--resizable"]);
      if (!w) return;
      const M = y.changedTouches[0];
      M != null && (i.current = M.identifier);
      const O = sl(y.target, P.columnHeader), D = hv(O), _ = e.current.getColumn(D);
      o.debug(`Start Resize on col ${_.field}`), e.current.publishEvent("columnResizeStart", {
        field: D
      }, y), p(_, w, M.clientX);
      const F = en(y.currentTarget);
      F.addEventListener("touchmove", x), F.addEventListener("touchend", m);
    }), I = c.useCallback(() => {
      const y = en(e.current.rootElementRef.current);
      y.body.style.removeProperty("cursor"), y.removeEventListener("mousemove", g), y.removeEventListener("mouseup", h), y.removeEventListener("touchmove", x), y.removeEventListener("touchend", m), setTimeout(() => {
        y.removeEventListener("click", Wa, true);
      }, 100), r.columnHeaderElement && (r.columnHeaderElement.style.pointerEvents = "unset");
    }, [
      e,
      r,
      g,
      h,
      x,
      m
    ]), C = c.useCallback(({ field: y }) => {
      e.current.setState((w) => b({}, w, {
        columnResize: b({}, w.columnResize, {
          resizingColumnField: y
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), E = c.useCallback(() => {
      e.current.setState((y) => b({}, y, {
        columnResize: b({}, y.columnResize, {
          resizingColumnField: ""
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), $ = Ke(({ colDef: y }, w) => {
      if (w.button !== 0 || !w.currentTarget.classList.contains(P["columnSeparator--resizable"])) return;
      w.preventDefault(), o.debug(`Start Resize on col ${y.field}`), e.current.publishEvent("columnResizeStart", {
        field: y.field
      }, w), p(y, w.currentTarget, w.clientX);
      const M = en(e.current.rootElementRef.current);
      M.body.style.cursor = "col-resize", r.previousMouseClickEvent = w.nativeEvent, M.addEventListener("mousemove", g), M.addEventListener("mouseup", h), M.addEventListener("click", Wa, true);
    }), k = Ke((y, w) => {
      if (t.disableAutosize || w.button !== 0) return;
      const M = e.current.state.columns.lookup[y.field];
      M.resizable !== false && e.current.autosizeColumns(b({}, t.autosizeOptions, {
        disableColumnVirtualization: false,
        columns: [
          M.field
        ]
      }));
    }), H = RI(e), A = c.useRef(false), R = c.useCallback(async (y) => {
      var _a2;
      if (!((_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) || A.current) return;
      A.current = true;
      const M = xn(e.current.state), O = b({}, cx, y, {
        columns: (y == null ? void 0 : y.columns) ?? M.orderedFields
      });
      O.columns = O.columns.filter((_) => M.columnVisibilityModel[_] !== false);
      const D = O.columns.map((_) => e.current.state.columns.lookup[_]);
      try {
        !t.disableVirtualization && O.disableColumnVirtualization && (e.current.unstable_setColumnVirtualization(false), await H());
        const _ = $I(e, O, D), F = D.map((S) => b({}, S, {
          width: _[S.field],
          computedWidth: _[S.field],
          flex: 0
        }));
        if (O.expand) {
          const T = M.orderedFields.map((j) => M.lookup[j]).filter((j) => M.columnVisibilityModel[j.field] !== false).reduce((j, V) => j + (_[V.field] ?? V.computedWidth ?? V.width), 0), G = e.current.getRootDimensions().viewportInnerSize.width - T;
          if (G > 0) {
            const j = G / (F.length || 1);
            F.forEach((V) => {
              V.width += j, V.computedWidth += j;
            });
          }
        }
        e.current.updateColumns(F), F.forEach((S, T) => {
          if (S.width !== D[T].width) {
            const L = S.width;
            e.current.publishEvent("columnWidthChange", {
              element: e.current.getColumnHeaderElement(S.field),
              colDef: S,
              width: L
            });
          }
        });
      } finally {
        t.disableVirtualization || e.current.unstable_setColumnVirtualization(true), A.current = false;
      }
    }, [
      e,
      H,
      t.disableVirtualization
    ]);
    c.useEffect(() => I, [
      I
    ]), Za(() => {
      t.autosizeOnMount && Promise.resolve().then(() => {
        e.current.autosizeColumns(t.autosizeOptions);
      });
    }), du(e, () => {
      var _a2;
      return (_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current;
    }, "touchstart", v, {
      passive: true
    }), ke(e, {
      autosizeColumns: R
    }, "public"), oe(e, "columnResizeStop", E), oe(e, "columnResizeStart", C), oe(e, "columnSeparatorMouseDown", $), oe(e, "columnSeparatorDoubleClick", k), Qe(e, "columnResize", t.onColumnResize), Qe(e, "columnWidthChange", t.onColumnWidthChange);
  };
  function uo(e, t, n) {
    e && (e.style[t] = `${parseInt(e.style[t], 10) + n}px`);
  }
  function zI(e, t) {
    return e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? null : e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex > t.lastRowIndex ? {
      firstRowIndex: t.lastRowIndex,
      lastRowIndex: e.lastRowIndex
    } : e.firstRowIndex < t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? {
      firstRowIndex: e.firstRowIndex,
      lastRowIndex: t.firstRowIndex - 1
    } : e;
  }
  function Ua(e) {
    return e.firstRowIndex !== 0 || e.lastRowIndex !== 0;
  }
  const Ul = (e, t, n) => {
    if (!e) return null;
    let o = e[t.field];
    const r = t.rowSpanValueGetter ?? t.valueGetter;
    return r && (o = r(o, e, t, n)), o;
  }, Co = {
    spannedCells: {},
    hiddenCells: {},
    hiddenCellOriginMap: {}
  }, dl = {
    firstRowIndex: 0,
    lastRowIndex: 0
  }, GI = /* @__PURE__ */ new Set([
    Kt,
    "__reorder__",
    ml
  ]), Ka = 20, ld = (e, t, n, o, r, l, s) => {
    const a = l ? {} : b({}, e.current.state.rowSpanning.spannedCells), i = l ? {} : b({}, e.current.state.rowSpanning.hiddenCells), d = l ? {} : b({}, e.current.state.rowSpanning.hiddenCellOriginMap);
    return l && (s = dl), t.forEach((u) => {
      var _a2;
      if (!GI.has(u.field)) {
        for (let p = r.firstRowIndex; p < r.lastRowIndex; p += 1) {
          const h = n[p];
          if ((_a2 = i[h.id]) == null ? void 0 : _a2[u.field]) continue;
          const g = Ul(h.model, u, e);
          if (g == null) continue;
          let m = h.id, x = p, v = 0;
          const I = [];
          if (p === r.firstRowIndex) {
            let E = p - 1, $ = n[E];
            for (; E >= o.firstRowIndex && $ && Ul($.model, u, e) === g; ) {
              const k = n[E + 1];
              i[k.id] ? i[k.id][u.field] = true : i[k.id] = {
                [u.field]: true
              }, I.push(p), v += 1, m = $.id, x = E, E -= 1, $ = n[E];
            }
          }
          I.forEach((E) => {
            d[E] ? d[E][u.field] = x : d[E] = {
              [u.field]: x
            };
          });
          let C = p + 1;
          for (; C <= o.lastRowIndex && n[C] && Ul(n[C].model, u, e) === g; ) {
            const E = n[C];
            i[E.id] ? i[E.id][u.field] = true : i[E.id] = {
              [u.field]: true
            }, d[C] ? d[C][u.field] = x : d[C] = {
              [u.field]: x
            }, C += 1, v += 1;
          }
          v > 0 && (a[m] ? a[m][u.field] = v + 1 : a[m] = {
            [u.field]: v + 1
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
  }, sd = (e, t) => {
    const n = Qo(t).length;
    if (e.pagination) {
      const o = mu(t);
      let r = Ka;
      return o > 0 && (r = o - 1), {
        firstRowIndex: 0,
        lastRowIndex: Math.min(r, n)
      };
    }
    return {
      firstRowIndex: 0,
      lastRowIndex: Math.min(Ka, n)
    };
  }, _I = (e, t, n) => {
    var _a2;
    if (!t.unstable_rowSpanning) return b({}, e, {
      rowSpanning: Co
    });
    const o = e.rows.dataRowIds || [], r = e.columns.orderedFields || [], l = e.rows.dataRowIdToModelLookup, s = e.columns.lookup, a = !!e.filter.filterModel.items.length || !!((_a2 = e.filter.filterModel.quickFilterValues) == null ? void 0 : _a2.length);
    if (!o.length || !r.length || !l || !s || a) return b({}, e, {
      rowSpanning: Co
    });
    const i = sd(t, n), d = o.map((m) => ({
      id: m,
      model: l[m]
    })), u = r.map((m) => s[m]), { spannedCells: p, hiddenCells: h, hiddenCellOriginMap: g } = ld(n, u, d, i, i, true, dl);
    return b({}, e, {
      rowSpanning: {
        spannedCells: p,
        hiddenCells: h,
        hiddenCellOriginMap: g
      }
    });
  }, VI = (e, t) => {
    const n = Sn(() => e.current.state.rowSpanning !== Co ? sd(t, e) : dl), o = c.useCallback((l, s = false) => {
      const { range: a, rows: i } = Vn(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (a === null || !Ua(l)) return;
      s && (n.current = dl);
      const d = zI({
        firstRowIndex: l.firstRowIndex,
        lastRowIndex: Math.min(l.lastRowIndex, a.lastRowIndex + 1)
      }, n.current);
      if (d === null) return;
      const u = st(e), { spannedCells: p, hiddenCells: h, hiddenCellOriginMap: g, processedRange: m } = ld(e, u, i, a, d, s, n.current);
      n.current = m;
      const x = Object.keys(p).length, v = Object.keys(h).length, I = Object.keys(e.current.state.rowSpanning.spannedCells).length, C = Object.keys(e.current.state.rowSpanning.hiddenCells).length;
      !(s || x !== I || v !== C) || x === 0 && I === 0 || e.current.setState((k) => b({}, k, {
        rowSpanning: {
          spannedCells: p,
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
      const l = Pr(e);
      Ua(l) && o(l, true);
    }, [
      e,
      o
    ]);
    oe(e, "renderedRowsIntervalChange", qn(t.unstable_rowSpanning, o)), oe(e, "sortedRowsSet", qn(t.unstable_rowSpanning, r)), oe(e, "paginationModelChange", qn(t.unstable_rowSpanning, r)), oe(e, "filteredRowsSet", qn(t.unstable_rowSpanning, r)), oe(e, "columnsChange", qn(t.unstable_rowSpanning, r)), c.useEffect(() => {
      t.unstable_rowSpanning ? e.current.state.rowSpanning === Co && r() : e.current.state.rowSpanning !== Co && e.current.setState((l) => b({}, l, {
        rowSpanning: Co
      }));
    }, [
      e,
      r,
      t.unstable_rowSpanning
    ]);
  }, NI = (e, t, n) => b({}, e, {
    listViewColumn: t.unstable_listColumn ? b({}, t.unstable_listColumn, {
      computedWidth: ws(n)
    }) : void 0
  });
  function BI(e, t) {
    const n = () => {
      e.current.setState((l) => l.listViewColumn ? b({}, l, {
        listViewColumn: b({}, l.listViewColumn, {
          computedWidth: ws(e)
        })
      }) : l);
    }, o = c.useRef(null);
    oe(e, "viewportInnerSizeChange", (l) => {
      o.current !== l.width && (o.current = l.width, n());
    }), oe(e, "columnVisibilityModelChange", n), St(() => {
      const l = t.unstable_listColumn;
      l && e.current.setState((s) => b({}, s, {
        listViewColumn: b({}, l, {
          computedWidth: ws(e)
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
  function ws(e) {
    return mt(e.current.state).viewportInnerSize.width;
  }
  const WI = (e, t) => {
    const n = f0(e, t);
    return uI(n, t), lI(n), gt(d0, n, t), gt(iI, n, t), gt(v0, n, t), gt(eI, n, t), gt(V0, n, t), gt(J0, n, t), gt($0, n, t), gt(dI, n, t), gt(B0, n, t), gt(O0, n, t), gt(_I, n, t), gt(S0, n, t), gt(LI, n, t), gt(w0, n, t), gt(kI, n, t), gt(vw, n, t), gt(bI, n, t), gt(vI, n, t), gt(NI, n, t), z0(n, t), aI(n, t), y0(n, t), tI(n, t), VI(n, t), sI(n, t), II(n), EI(n, t), Z0(n, t), L0(n, t), W0(n, t), H0(n, t), pI(n, t), I0(n, t), AI(n, t), N0(n, t), yI(n, t), fI(n, t), x0(n), M0(n, t), T0(n, t), C0(n, t), CI(n, t), gI(n, t), SI(n), yw(n, t), BI(n, t), n;
  }, UI = (e) => {
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
    return me(d, He, t);
  };
  function KI(e) {
    var _a2;
    const { groupId: t, width: n, depth: o, maxDepth: r, fields: l, height: s, colIndex: a, hasFocus: i, tabIndex: d, isLastColumn: u, pinnedPosition: p, pinnedOffset: h } = e, g = ie(), m = At(), x = c.useRef(null), v = Ee(), I = Q(v, Su), C = t ? I[t] : {}, { headerName: E = t ?? "", description: $ = "", headerAlign: k = void 0 } = C;
    let H;
    const A = t && ((_a2 = I[t]) == null ? void 0 : _a2.renderHeaderGroup), R = c.useMemo(() => ({
      groupId: t,
      headerName: E,
      description: $,
      depth: o,
      maxDepth: r,
      fields: l,
      colIndex: a,
      isLastColumn: u
    }), [
      t,
      E,
      $,
      o,
      r,
      l,
      a,
      u
    ]);
    t && A && (H = A(R));
    const y = b({}, e, {
      classes: g.classes,
      headerAlign: k,
      depth: o,
      isDragging: false
    }), w = E ?? t, M = nt(), O = t === null ? `empty-group-cell-${M}` : t, D = UI(y);
    c.useLayoutEffect(() => {
      if (i) {
        const z = x.current.querySelector('[tabindex="0"]') || x.current;
        if (!z) return;
        if (ei()) z.focus({
          preventScroll: true
        });
        else {
          const G = v.current.getScrollPosition();
          z.focus(), v.current.scroll(G);
        }
      }
    }, [
      v,
      i
    ]);
    const _ = c.useCallback((L) => (z) => {
      Mr(z) || v.current.publishEvent(L, R, z);
    }, [
      v,
      R
    ]), F = c.useMemo(() => ({
      onKeyDown: _("columnGroupHeaderKeyDown"),
      onFocus: _("columnGroupHeaderFocus"),
      onBlur: _("columnGroupHeaderBlur")
    }), [
      _
    ]), S = typeof C.headerClassName == "function" ? C.headerClassName(R) : C.headerClassName, T = c.useMemo(() => Sl(b({}, e.style), m, p, h), [
      p,
      h,
      e.style,
      m
    ]);
    return f.jsx(Wu, b({
      ref: x,
      classes: D,
      columnMenuOpen: false,
      colIndex: a,
      height: s,
      isResizing: false,
      sortDirection: null,
      hasFocus: false,
      tabIndex: d,
      isDraggable: false,
      headerComponent: H,
      headerClassName: S,
      description: $,
      elementId: O,
      width: n,
      columnMenuIconButton: null,
      columnTitleIconButtons: null,
      resizable: false,
      label: w,
      "aria-colspan": l.length,
      "data-fields": `|-${l.join("-|-")}-|`,
      style: T
    }, F));
  }
  const qa = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderRow",
    overridesResolver: (e, t) => t.columnHeaderRow
  })({
    display: "flex"
  }), qI = (e) => {
    const { visibleColumns: t, sortColumnLookup: n, filterColumnLookup: o, columnHeaderTabIndexState: r, columnGroupHeaderTabIndexState: l, columnHeaderFocus: s, columnGroupHeaderFocus: a, headerGroupingMaxDepth: i, columnMenuState: d, columnVisibility: u, columnGroupsHeaderStructure: p, hasOtherElementInTabSequence: h } = e, [g, m] = c.useState(""), [x, v] = c.useState(""), I = an(), C = ie(), E = Q(I, yu), $ = Q(I, Wn), k = Q(I, xw), H = Q(I, $o), A = Q(I, On), R = Hu($, k, H.left.length), y = Q(I, fl), w = Q(I, $c), M = Q(I, Tm), O = Q(I, Om), D = Q(I, Lc), _ = c.useCallback((B) => v(B.field), []), F = c.useCallback(() => v(""), []), S = c.useCallback((B) => m(B.field), []), T = c.useCallback(() => m(""), []), L = c.useMemo(() => H.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: H.left.length
    } : null, [
      H.left.length
    ]), z = c.useMemo(() => H.right.length ? {
      firstColumnIndex: t.length - H.right.length,
      lastColumnIndex: t.length
    } : null, [
      H.right.length,
      t.length
    ]);
    oe(I, "columnResizeStart", _), oe(I, "columnResizeStop", F), oe(I, "columnHeaderDragStart", S), oe(I, "columnHeaderDragEnd", T);
    const G = (B) => {
      const { renderContext: te = k } = B || {}, J = te.firstColumnIndex, ne = te.lastColumnIndex;
      return {
        renderedColumns: t.slice(J, ne),
        firstColumnToRender: J,
        lastColumnToRender: ne
      };
    }, j = (B, te, J, ne = false) => {
      const ae = (B == null ? void 0 : B.position) === Oe.RIGHT, we = (B == null ? void 0 : B.position) === void 0, Y = H.right.length > 0 && ae || H.right.length === 0 && we, re = R - J;
      return f.jsxs(c.Fragment, {
        children: [
          we && f.jsx("div", {
            role: "presentation",
            style: {
              width: re
            }
          }),
          te,
          we && f.jsx("div", {
            role: "presentation",
            className: de(P.filler, ne && P["filler--borderBottom"])
          }),
          Y && f.jsx(oi, {
            header: true,
            pinnedRight: ae,
            borderBottom: ne,
            borderTop: false
          })
        ]
      });
    }, V = (B, te = {}) => {
      const { renderedColumns: J, firstColumnToRender: ne } = G(B), ae = [];
      for (let we = 0; we < J.length; we += 1) {
        const Y = J[we], re = ne + we, ye = re === 0, Z = r !== null && r.field === Y.field || ye && !h ? 0 : -1, Se = s !== null && s.field === Y.field, ee = d.open && d.field === Y.field, ve = B == null ? void 0 : B.position, Ce = rr(ve, Y.computedWidth, re, $, y, D), Fe = ve === Oe.RIGHT ? J[we - 1] : J[we + 1], Ne = Fe ? s !== null && s.field === Fe.field : false, Be = re + 1 === $.length - H.right.length, ze = we, $e = J.length, Le = cl(ve, ze), We = al(ve, ze, $e, C.showColumnVerticalBorder, w);
        ae.push(f.jsx(Av, b({}, n[Y.field], {
          columnMenuOpen: ee,
          filterItemsCounter: o[Y.field] && o[Y.field].length,
          headerHeight: M,
          isDragging: Y.field === g,
          colDef: Y,
          colIndex: re,
          isResizing: x === Y.field,
          isLast: re === $.length - 1,
          hasFocus: Se,
          tabIndex: Z,
          pinnedPosition: ve,
          pinnedOffset: Ce,
          isLastUnpinned: Be,
          isSiblingFocused: Ne,
          showLeftBorder: Le,
          showRightBorder: We
        }, te), Y.field));
      }
      return j(B, ae, 0);
    }, U = () => f.jsxs(qa, {
      role: "row",
      "aria-rowindex": i + 1,
      ownerState: C,
      className: P["row--borderBottom"],
      children: [
        L && V({
          position: Oe.LEFT,
          renderContext: L
        }, {
          disableReorder: true
        }),
        V({
          renderContext: k
        }),
        z && V({
          position: Oe.RIGHT,
          renderContext: z
        }, {
          disableReorder: true,
          separatorSide: ni.Left
        })
      ]
    }), W = ({ depth: B, params: te }) => {
      var _a2, _b2;
      const J = G(te);
      if (J.renderedColumns.length === 0) return null;
      const { firstColumnToRender: ne, lastColumnToRender: ae } = J, we = p[B], Y = t[ne].field, re = ((_a2 = E[Y]) == null ? void 0 : _a2[B]) ?? null, ye = we.findIndex(({ groupId: $e, columnFields: Le }) => $e === re && Le.includes(Y)), Z = t[ae - 1].field, Se = ((_b2 = E[Z]) == null ? void 0 : _b2[B]) ?? null, ee = we.findIndex(({ groupId: $e, columnFields: Le }) => $e === Se && Le.includes(Z)), ve = we.slice(ye, ee + 1).map(($e) => b({}, $e, {
        columnFields: $e.columnFields.filter((Le) => u[Le] !== false)
      })).filter(($e) => $e.columnFields.length > 0), Ce = ve[0].columnFields.indexOf(Y), Ne = ve[0].columnFields.slice(0, Ce).reduce(($e, Le) => {
        const We = A[Le];
        return $e + (We.computedWidth ?? 0);
      }, 0);
      let Be = ne;
      const ze = ve.map(({ groupId: $e, columnFields: Le }, We) => {
        const Ge = a !== null && a.depth === B && Le.includes(a.field), fe = l !== null && l.depth === B && Le.includes(l.field) ? 0 : -1, xe = {
          width: Le.reduce((Re, rt) => Re + A[rt].computedWidth, 0),
          fields: Le,
          colIndex: Be
        }, pe = te.position, he = rr(pe, xe.width, Be, $, y, D);
        Be += Le.length;
        let je = We;
        return pe === Oe.LEFT && (je = Be - 1), f.jsx(KI, {
          groupId: $e,
          width: xe.width,
          fields: xe.fields,
          colIndex: xe.colIndex,
          depth: B,
          isLastColumn: We === ve.length - 1,
          maxDepth: i,
          height: O,
          hasFocus: Ge,
          tabIndex: fe,
          pinnedPosition: pe,
          pinnedOffset: he,
          showLeftBorder: cl(pe, je),
          showRightBorder: al(pe, je, ve.length, C.showColumnVerticalBorder, w)
        }, We);
      });
      return j(te, ze, Ne);
    };
    return {
      renderContext: k,
      leftRenderContext: L,
      rightRenderContext: z,
      pinnedColumns: H,
      visibleColumns: t,
      columnPositions: $,
      getFillers: j,
      getColumnHeadersRow: U,
      getColumnsToRender: G,
      getColumnGroupHeadersRows: () => {
        if (i === 0) return null;
        const B = [];
        for (let te = 0; te < i; te += 1) B.push(f.jsxs(qa, {
          role: "row",
          "aria-rowindex": te + 1,
          ownerState: C,
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
                renderContext: k
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
      getPinnedCellOffset: rr,
      isDragging: !!g,
      getInnerProps: () => ({
        role: "rowgroup"
      })
    };
  }, YI = [
    "className"
  ], XI = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "columnHeaders"
      ]
    }, He, t);
  }, QI = Je("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaders",
    overridesResolver: (e, t) => t.columnHeaders
  })({
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
    borderTopRightRadius: "var(--unstable_DataGrid-radius)"
  }), JI = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, YI), l = ie(), s = XI(l);
    return f.jsx(QI, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      role: "presentation",
      ref: n
    }));
  }), ZI = [
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
  ], eP = Ve(function(t, n) {
    const { visibleColumns: o, sortColumnLookup: r, filterColumnLookup: l, columnHeaderTabIndexState: s, columnGroupHeaderTabIndexState: a, columnHeaderFocus: i, columnGroupHeaderFocus: d, headerGroupingMaxDepth: u, columnMenuState: p, columnVisibility: h, columnGroupsHeaderStructure: g, hasOtherElementInTabSequence: m } = t, x = ge(t, ZI), { getInnerProps: v, getColumnHeadersRow: I, getColumnGroupHeadersRows: C } = qI({
      visibleColumns: o,
      sortColumnLookup: r,
      filterColumnLookup: l,
      columnHeaderTabIndexState: s,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: u,
      columnMenuState: p,
      columnVisibility: h,
      columnGroupsHeaderStructure: g,
      hasOtherElementInTabSequence: m
    });
    return f.jsxs(JI, b({}, x, v(), {
      ref: n,
      children: [
        C(),
        I()
      ]
    }));
  }), tP = Tn(eP);
  function nP(e) {
    return null;
  }
  function oP(e) {
    return null;
  }
  const rP = Ve(function(t, n) {
    const r = Ee().current.getLocaleText("noResultsOverlayLabel");
    return f.jsx(ti, b({}, t, {
      ref: n,
      children: r
    }));
  }), lP = [
    "sortingOrder"
  ], sP = c.memo(function(t) {
    const { sortingOrder: n } = t, o = ge(t, lP), r = ie(), [l] = n, s = l === "asc" ? r.slots.columnSortedAscendingIcon : r.slots.columnSortedDescendingIcon;
    return s ? f.jsx(s, b({}, o)) : null;
  }), iP = [
    "native"
  ];
  function aP(e) {
    let { native: t } = e, n = ge(e, iP);
    return t ? f.jsx("option", b({}, n)) : f.jsx(Ht, b({}, n));
  }
  const cP = {
    booleanCellTrueIcon: iy,
    booleanCellFalseIcon: _l,
    columnMenuIcon: oy,
    openFilterButtonIcon: Xv,
    filterPanelDeleteIcon: _l,
    columnFilteredIcon: Ia,
    columnSelectorIcon: Jv,
    columnUnsortedIcon: sP,
    columnSortedAscendingIcon: xa,
    columnSortedDescendingIcon: va,
    columnResizeIcon: Zv,
    densityCompactIcon: ey,
    densityStandardIcon: ty,
    densityComfortableIcon: ny,
    exportIcon: sy,
    moreActionsIcon: ay,
    treeDataCollapseIcon: Sa,
    treeDataExpandIcon: ya,
    groupingCriteriaCollapseIcon: Sa,
    groupingCriteriaExpandIcon: ya,
    detailPanelExpandIcon: Pa,
    detailPanelCollapseIcon: ry,
    rowReorderIcon: Ma,
    quickFilterIcon: Qv,
    quickFilterClearIcon: _l,
    columnMenuHideIcon: cy,
    columnMenuSortAscendingIcon: xa,
    columnMenuSortDescendingIcon: va,
    columnMenuFilterIcon: Ia,
    columnMenuManageColumnsIcon: uy,
    columnMenuClearIcon: dy,
    loadIcon: ly,
    filterPanelAddIcon: Pa,
    filterPanelRemoveAllIcon: py,
    columnReorderIcon: Ma
  }, uP = b({}, cP, {
    baseBadge: lg,
    baseCheckbox: Yr,
    baseDivider: kd,
    baseTextField: Gt,
    baseFormControl: ql,
    baseSelect: qr,
    baseButton: lr,
    baseIconButton: Vt,
    baseInputAdornment: mc,
    baseTooltip: zn,
    basePopper: to,
    baseInputLabel: Yl,
    baseSelectOption: aP,
    baseChip: xo
  }), dP = b({}, uP, {
    cell: Fx,
    skeletonCell: Lx,
    columnHeaderFilterIconButton: qv,
    columnHeaderSortIcon: Uv,
    columnMenu: Fy,
    columnHeaders: tP,
    detailPanels: nP,
    footer: PS,
    footerRowCount: GS,
    toolbar: null,
    pinnedRows: oP,
    loadingOverlay: OS,
    noResultsOverlay: rP,
    noRowsOverlay: DS,
    pagination: LS,
    filterPanel: lS,
    columnsPanel: Hy,
    columnsManagement: cS,
    panel: zy,
    row: US
  }), pP = {
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
  }, fP = dP, gP = (e) => {
    const t = vs(), n = yx(c.useMemo(() => Hd({
      props: e,
      theme: t,
      name: "MuiDataGrid"
    }), [
      t,
      e
    ])), o = c.useMemo(() => b({}, Rm, n.localeText), [
      n.localeText
    ]), r = c.useMemo(() => xx({
      defaultSlots: fP,
      slots: n.slots
    }), [
      n.slots
    ]), l = c.useMemo(() => Object.keys(ms).reduce((s, a) => (s[a] = n[a] ?? ms[a], s), {}), [
      n
    ]);
    return c.useMemo(() => b({}, n, l, {
      localeText: o,
      slots: r
    }, pP), [
      n,
      o,
      r,
      l
    ]);
  }, hP = {
    hooks: {
      useGridAriaAttributes: KS,
      useGridRowAriaAttributes: qS,
      useCellAggregationResult: () => null
    }
  }, id = Ve(function(t, n) {
    var _a2;
    const o = gP(t), r = WI(o.apiRef, o);
    return f.jsx(YS, {
      privateApiRef: r,
      configuration: hP,
      props: o,
      children: f.jsx(ev, b({
        className: o.className,
        style: o.style,
        sx: o.sx
      }, o.forwardedProps, (_a2 = o.slotProps) == null ? void 0 : _a2.root, {
        ref: n
      }))
    });
  }), mP = c.memo(id);
  id.propTypes = {
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
  function bP(e) {
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
  function Ya(e) {
    if (e == null) return 0;
    if (typeof e == "number") return e > 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const t = new Date(e);
      return isNaN(t.getTime()) ? 0 : t.getTime();
    }
    return 0;
  }
  const CP = () => {
    const e = c.useContext(Ed), { widget: { data: { oidObject: t } }, widget: n } = e, { data: o } = Fd("oid"), r = _d("oid"), l = t == null ? void 0 : t.type, s = l === "string" || l === "mixed", a = c.useMemo(() => {
      if (r == null) return [];
      let C;
      if (typeof r == "string") try {
        C = JSON.parse(r);
      } catch {
        return [];
      }
      else C = r;
      return Array.isArray(C) ? C : typeof C == "object" && C !== null ? [
        C
      ] : [];
    }, [
      r
    ]), i = c.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: d, rows: u } = Xh(a, i), p = c.useMemo(() => Cc(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = c.useCallback((C) => ((E) => {
      const $ = E.value;
      let k = $ != null ? String($) : "";
      if (C.format) switch (C.format.type) {
        case "number":
          (typeof $ == "number" || typeof $ == "string" && !isNaN(Number($))) && (k = wc(Number($), {
            decimals: C.format.numberDecimals,
            prefix: C.format.numberPrefix,
            suffix: C.format.numberSuffix,
            thousands: C.format.numberThousandsSeparator
          }));
          break;
        case "date":
          k = xc($, C.format.dateFormat);
          break;
        case "boolean":
          k = as($, C.format.booleanTrue, C.format.booleanFalse);
          break;
      }
      let H = {};
      if (C.cellStyle && C.cellStyle.length > 0) {
        for (const A of C.cellStyle) if (kh(A.condition, $)) {
          H = {
            ...A.backgroundColor && {
              backgroundColor: A.backgroundColor
            },
            ...A.textColor && {
              color: A.textColor
            },
            ...A.fontWeight && {
              fontWeight: A.fontWeight
            },
            ...A.fontStyle && {
              fontStyle: A.fontStyle
            }
          };
          break;
        }
      }
      return f.jsx(Ie, {
        variant: "body2",
        component: "span",
        noWrap: true,
        title: k,
        sx: {
          width: "100%",
          display: "block",
          lineHeight: "inherit",
          ...H
        },
        children: k
      });
    }), []), g = c.useCallback((C) => {
      const E = C.value != null ? String(C.value) : "";
      return f.jsx(Ie, {
        variant: "body2",
        component: "span",
        noWrap: true,
        title: E,
        sx: {
          width: "100%",
          display: "block",
          lineHeight: "inherit"
        },
        children: E
      });
    }, []), m = c.useMemo(() => p.length > 0 ? p.filter((C) => C.visible).map((C) => {
      var _a2;
      const E = {
        field: C.path,
        headerName: C.headerName || C.path,
        flex: C.width ? 0 : 1,
        width: C.width,
        headerAlign: C.align || "left",
        align: C.align || "left",
        sortable: C.sortable ?? n.data.tableSorting !== false,
        filterable: C.filterable ?? n.data.tableFiltering === true
      };
      return C.format || C.cellStyle && C.cellStyle.length > 0 ? E.renderCell = h(C) : E.renderCell = g, ((_a2 = C.format) == null ? void 0 : _a2.type) === "date" && (E.sortComparator = ($, k) => Ya($) - Ya(k)), E;
    }) : d.map((C) => ({
      field: C.path,
      headerName: C.path.split(".").pop() || C.path,
      flex: 1,
      sortable: n.data.tableSorting !== false,
      filterable: n.data.tableFiltering === true,
      renderCell: g
    })), [
      p,
      d,
      n.data.tableSorting,
      n.data.tableFiltering,
      h,
      g
    ]), x = c.useMemo(() => u.map((C, E) => ({
      id: E,
      ...C
    })), [
      u
    ]), v = c.useMemo(() => bP(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), I = c.useMemo(() => {
      const C = {
        border: 0,
        width: "100%",
        height: "100%"
      }, E = n.data.tableHeaderBgColor, $ = n.data.tableHeaderTextColor, k = n.data.tableHeaderFontSize;
      if (E || $ || k) {
        const H = E ? gi(E) : null;
        C["& .MuiDataGrid-columnHeaders"] = {
          ...E && {
            background: H || E,
            backgroundColor: H ? "transparent" : void 0
          }
        }, C["& .MuiDataGrid-columnHeader"] = {
          ...E && {
            background: "inherit"
          },
          ...$ && {
            color: $
          },
          ...k && {
            fontSize: `${k}px`
          }
        };
      }
      if (n.data.tableCellFontSize && (C["& .MuiDataGrid-cell"] = {
        fontSize: `${n.data.tableCellFontSize}px`
      }), n.data.tableStripedColor) {
        const H = n.data.tableStripedColor, A = gi(H);
        C["& .MuiDataGrid-row:nth-of-type(even)"] = {
          background: A || H,
          backgroundColor: A ? "transparent" : H
        };
      }
      return n.data.tableShowCellBorders && (C["& .MuiDataGrid-cell"] = {
        ...C["& .MuiDataGrid-cell"],
        borderRight: "1px solid",
        borderColor: "divider"
      }), C;
    }, [
      n.data.tableHeaderBgColor,
      n.data.tableHeaderTextColor,
      n.data.tableHeaderFontSize,
      n.data.tableCellFontSize,
      n.data.tableStripedColor,
      n.data.tableShowCellBorders
    ]);
    return f.jsxs(Td, {
      isValidType: s,
      data: o,
      oidValue: r,
      children: [
        f.jsx(Od, {
          data: o,
          widget: n
        }),
        s && m.length > 0 ? f.jsx(tt, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          },
          children: f.jsx(mP, {
            rows: x,
            columns: m,
            density: n.data.tableDensity || "standard",
            rowHeight: n.data.tableRowHeight || void 0,
            columnHeaderHeight: n.data.tableHeaderHeight || void 0,
            pageSizeOptions: v,
            initialState: {
              pagination: {
                paginationModel: {
                  pageSize: n.data.tablePageSize || 25
                }
              }
            },
            pagination: n.data.tablePagination !== false || void 0,
            disableColumnSorting: n.data.tableSorting === false,
            disableColumnFilter: n.data.tableFiltering !== true,
            disableColumnMenu: n.data.tableColumnMenu === false,
            hideFooter: n.data.tableHideFooter === true,
            checkboxSelection: n.data.tableRowSelection === true,
            disableRowSelectionOnClick: true,
            showCellVerticalBorder: n.data.tableShowCellBorders === true,
            showColumnVerticalBorder: n.data.tableShowCellBorders === true,
            autosizeOnMount: n.data.tableAutoSize === true,
            sx: I
          })
        }) : f.jsx(tt, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: f.jsx(Ie, {
            variant: "body2",
            color: "text.secondary",
            children: s ? le.t("json_table_no_data") : le.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, wP = [
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
    "tableHideFooter",
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
  xs = class extends le {
    static createObjectFields() {
      const t = Dd([
        "string"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (l, s, a, i) => {
          if (!s.oid) for (const d of wP) delete s[d];
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
              ...hi()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...xs.createObjectFields(),
              ...Zh()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...hi({
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
      return xs.getWidgetInfo();
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
      super.renderWidgetBody(t);
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Rd(this.wrapContent(f.jsx(CP, {})), n);
    }
  };
});
export {
  __tla,
  xs as default
};
