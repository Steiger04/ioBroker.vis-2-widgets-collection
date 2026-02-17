import { g as bt, a as ft, u as Ct, Z as id, _ as ad, $ as ws, a0 as Xt, h as jt, j as f, s as se, d as de, e as me, a1 as ai, m as qe, a2 as er, b as at, P as qt, B as Ul, c as ke, a3 as nt, a4 as Ke, a5 as cd, a6 as en, a7 as ud, f as St, a8 as dd, a9 as At, M as ce, i as lt, N as Cn, aa as pd, ab as lo, ac as Kt, ad as ci, ae as Tl, I as Qt, af as Ua, W as fd, ag as gd, T as Pe, O as xs, ah as vs, ai as gr, aj as hr, L as hd, ak as Ka, al as md, am as ui, an as ys, V as qr, o as tt, ao as Gt, G as le, ap as Kl, aq as ql, ar as bd, as as qa, C as Mn, at as Sn, au as b, av as ge, aw as Ss, K as Cd, ax as wd, ay as Ya, az as di, aA as xd, aB as vd, aC as yd, aD as Sd, D as Id, n as Pd, q as Md, w as kd, x as Ed, y as pi, z as Fd, A as Td, __tla as __tla_0 } from "./useData-Dh4nd_La.js";
import { v as u, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Yr, __tla as __tla_2 } from "./Checkbox-d0B1W55c.js";
import { S as mn, s as Je, g as Od, __tla as __tla_3 } from "./Stack-D45nKyxi.js";
import { g as Dd, M as $t, __tla as __tla_4 } from "./MenuItem-x_yBPAof.js";
import { F as Ln, __tla as __tla_5 } from "./FormControlLabel-bpsysXt-.js";
import { S as Er, __tla as __tla_6 } from "./Switch-Cveq0wsU.js";
import { S as Rd, __tla as __tla_7 } from "./Slider-CV4PB2I8.js";
import { B as lr, __tla as __tla_8 } from "./Button-DOw2ES1r.js";
import { D as $d, a as Hd, b as Ld, L as wo, __tla as __tla_9 } from "./ListItemText-CPmYzEpD.js";
import { C as jd, __tla as __tla_10 } from "./Close-Ctq43X6h.js";
import { u as Ad, __tla as __tla_11 } from "./useOidValue-deN5pshO.js";
import { g as zd } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_12 } from "./SwitchBase-CsNUGlgO.js";
import { __tla as __tla_13 } from "./listItemTextClasses-DZA6NAVK.js";
let rd;
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
  var Xa = {
    exports: {}
  }, Gd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", _d = Gd, Vd = _d;
  function Qa() {
  }
  function Ja() {
  }
  Ja.resetWarningCache = Qa;
  var Nd = function() {
    function e(o, r, l, s, a, i) {
      if (i !== Vd) {
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
      checkPropTypes: Ja,
      resetWarningCache: Qa
    };
    return n.PropTypes = n, n;
  };
  Xa.exports = Nd();
  var Bd = Xa.exports;
  const N = zd(Bd), Is = (e) => {
    const t = u.useRef({});
    return u.useEffect(() => {
      t.current = e;
    }), t.current;
  };
  function Wd(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
  }
  function Ud(e) {
    return parseFloat(e);
  }
  function Kd(e) {
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
  const qd = (e) => {
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
    return me(o, Kd, n);
  }, Yd = se("div", {
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
  }))), Xd = se("div", {
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
  }), Qd = se("div", {
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
  }), Yl = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: l, className: s, collapsedSize: a = "0px", component: i, easing: d, in: c, onEnter: p, onEntered: h, onEntering: g, onExit: m, onExited: C, onExiting: y, orientation: w = "vertical", style: x, timeout: E = id.standard, TransitionComponent: H = ad, ...M } = o, $ = {
      ...o,
      orientation: w,
      collapsedSize: a
    }, z = qd($), D = ws(), S = Xt(), v = u.useRef(null), k = u.useRef(), O = typeof a == "number" ? `${a}px` : a, R = w === "horizontal", _ = R ? "width" : "height", F = u.useRef(null), I = jt(n, F), T = (B) => (te) => {
      if (B) {
        const J = F.current;
        te === void 0 ? B(J) : B(J, te);
      }
    }, L = () => v.current ? v.current[R ? "clientWidth" : "clientHeight"] : 0, A = T((B, te) => {
      v.current && R && (v.current.style.position = "absolute"), B.style[_] = O, p && p(B, te);
    }), G = T((B, te) => {
      const J = L();
      v.current && R && (v.current.style.position = "");
      const { duration: ne, easing: ae } = ai({
        style: x,
        timeout: E,
        easing: d
      }, {
        mode: "enter"
      });
      if (E === "auto") {
        const we = D.transitions.getAutoHeightDuration(J);
        B.style.transitionDuration = `${we}ms`, k.current = we;
      } else B.style.transitionDuration = typeof ne == "string" ? ne : `${ne}ms`;
      B.style[_] = `${J}px`, B.style.transitionTimingFunction = ae, g && g(B, te);
    }), j = T((B, te) => {
      B.style[_] = "auto", h && h(B, te);
    }), V = T((B) => {
      B.style[_] = `${L()}px`, m && m(B);
    }), U = T(C), W = T((B) => {
      const te = L(), { duration: J, easing: ne } = ai({
        style: x,
        timeout: E,
        easing: d
      }, {
        mode: "exit"
      });
      if (E === "auto") {
        const ae = D.transitions.getAutoHeightDuration(te);
        B.style.transitionDuration = `${ae}ms`, k.current = ae;
      } else B.style.transitionDuration = typeof J == "string" ? J : `${J}ms`;
      B.style[_] = O, B.style.transitionTimingFunction = ne, y && y(B);
    }), K = (B) => {
      E === "auto" && S.start(k.current || 0, B), r && r(F.current, B);
    };
    return f.jsx(H, {
      in: c,
      onEnter: A,
      onEntered: j,
      onEntering: G,
      onExit: V,
      onExited: U,
      onExiting: W,
      addEndListener: K,
      nodeRef: F,
      timeout: E === "auto" ? null : E,
      ...M,
      children: (B, { ownerState: te, ...J }) => f.jsx(Yd, {
        as: i,
        className: de(z.root, s, {
          entered: z.entered,
          exited: !c && O === "0px" && z.hidden
        }[B]),
        style: {
          [R ? "minWidth" : "minHeight"]: O,
          ...x
        },
        ref: I,
        ownerState: {
          ...$,
          state: B
        },
        ...J,
        children: f.jsx(Xd, {
          ownerState: {
            ...$,
            state: B
          },
          className: z.wrapper,
          ref: v,
          children: f.jsx(Qd, {
            ownerState: {
              ...$,
              state: B
            },
            className: z.wrapperInner,
            children: l
          })
        })
      })
    });
  });
  Yl && (Yl.muiSupportAuto = true);
  const Za = u.createContext({});
  function Jd(e) {
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
  ]), Zd = (e) => {
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
    }, Jd, t);
  }, ep = se(qt, {
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
  }))), tp = se("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Tr = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: l, defaultExpanded: s = false, disabled: a = false, disableGutters: i = false, expanded: d, onChange: c, square: p = false, slots: h = {}, slotProps: g = {}, TransitionComponent: m, TransitionProps: C, ...y } = o, [w, x] = er({
      controlled: d,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), E = u.useCallback((L) => {
      x(!w), c && c(L, !w);
    }, [
      w,
      c,
      x
    ]), [H, ...M] = u.Children.toArray(r), $ = u.useMemo(() => ({
      expanded: w,
      disabled: a,
      disableGutters: i,
      toggle: E
    }), [
      w,
      a,
      i,
      E
    ]), z = {
      ...o,
      square: p,
      disabled: a,
      disableGutters: i,
      expanded: w
    }, D = Zd(z), S = {
      transition: m,
      ...h
    }, v = {
      transition: C,
      ...g
    }, k = {
      slots: S,
      slotProps: v
    }, [O, R] = at("root", {
      elementType: ep,
      externalForwardedProps: {
        ...k,
        ...y
      },
      className: de(D.root, l),
      shouldForwardComponentProp: true,
      ownerState: z,
      ref: n,
      additionalProps: {
        square: p
      }
    }), [_, F] = at("heading", {
      elementType: tp,
      externalForwardedProps: k,
      className: D.heading,
      ownerState: z
    }), [I, T] = at("transition", {
      elementType: Yl,
      externalForwardedProps: k,
      ownerState: z
    });
    return f.jsxs(O, {
      ...R,
      children: [
        f.jsx(_, {
          ...F,
          children: f.jsx(Za.Provider, {
            value: $,
            children: H
          })
        }),
        f.jsx(I, {
          in: w,
          timeout: "auto",
          ...T,
          children: f.jsx("div", {
            "aria-labelledby": H.props.id,
            id: H.props["aria-controls"],
            role: "region",
            className: D.region,
            children: M
          })
        })
      ]
    });
  });
  function np(e) {
    return bt("MuiAccordionDetails", e);
  }
  ft("MuiAccordionDetails", [
    "root"
  ]);
  const op = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "root"
      ]
    }, np, t);
  }, rp = se("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(qe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), Or = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...l } = o, s = o, a = op(s);
    return f.jsx(rp, {
      className: de(a.root, r),
      ref: n,
      ownerState: s,
      ...l
    });
  });
  function lp(e) {
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
  ]), sp = (e) => {
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
    }, lp, t);
  }, ip = se(Ul, {
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
  })), ap = se("span", {
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
  }))), cp = se("span", {
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
  }))), Dr = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: l, expandIcon: s, focusVisibleClassName: a, onClick: i, slots: d, slotProps: c, ...p } = o, { disabled: h = false, disableGutters: g, expanded: m, toggle: C } = u.useContext(Za), y = (v) => {
      C && C(v), i && i(v);
    }, w = {
      ...o,
      expanded: m,
      disabled: h,
      disableGutters: g
    }, x = sp(w), E = {
      slots: d,
      slotProps: c
    }, [H, M] = at("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: de(x.root, l),
      elementType: ip,
      externalForwardedProps: {
        ...E,
        ...p
      },
      ownerState: w,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: h,
        "aria-expanded": m,
        focusVisibleClassName: de(x.focusVisible, a)
      },
      getSlotProps: (v) => ({
        ...v,
        onClick: (k) => {
          var _a2;
          (_a2 = v.onClick) == null ? void 0 : _a2.call(v, k), y(k);
        }
      })
    }), [$, z] = at("content", {
      className: x.content,
      elementType: ap,
      externalForwardedProps: E,
      ownerState: w
    }), [D, S] = at("expandIconWrapper", {
      className: x.expandIconWrapper,
      elementType: cp,
      externalForwardedProps: E,
      ownerState: w
    });
    return f.jsxs(H, {
      ...M,
      children: [
        f.jsx($, {
          ...z,
          children: r
        }),
        s && f.jsx(D, {
          ...S,
          children: s
        })
      ]
    });
  }), up = ke(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  function fi(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function ec(e = {}) {
    const { ignoreAccents: t = true, ignoreCase: n = true, limit: o, matchFrom: r = "any", stringify: l, trim: s = false } = e;
    return (a, { inputValue: i, getOptionLabel: d }) => {
      let c = s ? i.trim() : i;
      n && (c = c.toLowerCase()), t && (c = fi(c));
      const p = c ? a.filter((h) => {
        let g = (l || d)(h);
        return n && (g = g.toLowerCase()), t && (g = fi(g)), r === "start" ? g.startsWith(c) : g.includes(c);
      }) : a;
      return typeof o == "number" ? p.slice(0, o) : p;
    };
  }
  const dp = ec(), gi = 5, pp = (e) => {
    var _a2;
    return e.current !== null && ((_a2 = e.current.parentElement) == null ? void 0 : _a2.contains(document.activeElement));
  }, fp = [];
  function hi(e, t, n) {
    if (t || e == null) return "";
    const o = n(e);
    return typeof o == "string" ? o : "";
  }
  function gp(e) {
    const { unstable_isActiveElementInListbox: t = pp, unstable_classNamePrefix: n = "Mui", autoComplete: o = false, autoHighlight: r = false, autoSelect: l = false, blurOnSelect: s = false, clearOnBlur: a = !e.freeSolo, clearOnEscape: i = false, componentName: d = "useAutocomplete", defaultValue: c = e.multiple ? fp : null, disableClearable: p = false, disableCloseOnSelect: h = false, disabled: g, disabledItemsFocusable: m = false, disableListWrap: C = false, filterOptions: y = dp, filterSelectedOptions: w = false, freeSolo: x = false, getOptionDisabled: E, getOptionKey: H, getOptionLabel: M = (X) => X.label ?? X, groupBy: $, handleHomeEndKeys: z = !e.freeSolo, id: D, includeInputInList: S = false, inputValue: v, isOptionEqualToValue: k = (X, q) => X === q, multiple: O = false, onChange: R, onClose: _, onHighlightChange: F, onInputChange: I, onOpen: T, open: L, openOnFocus: A = false, options: G, readOnly: j = false, selectOnFocus: V = !e.freeSolo, value: U } = e, W = nt(D);
    let K = M;
    K = (X) => {
      const q = M(X);
      return typeof q != "string" ? String(q) : q;
    };
    const B = u.useRef(false), te = u.useRef(true), J = u.useRef(null), ne = u.useRef(null), [ae, we] = u.useState(null), [Y, re] = u.useState(-1), ye = r ? 0 : -1, Z = u.useRef(ye), Se = u.useRef(hi(c ?? U, O, K)).current, [ee, ve] = er({
      controlled: U,
      default: c,
      name: d
    }), [Ce, Fe] = er({
      controlled: v,
      default: Se,
      name: d,
      state: "inputValue"
    }), [Ne, Be] = u.useState(false), ze = u.useCallback((X, q, ue) => {
      if (!(O ? ee.length < q.length : q !== null) && !a) return;
      const _e = hi(q, O, K);
      Ce !== _e && (Fe(_e), I && I(X, _e, ue));
    }, [
      K,
      Ce,
      O,
      I,
      Fe,
      a,
      ee
    ]), [He, Le] = er({
      controlled: L,
      default: false,
      name: d,
      state: "open"
    }), [We, Ge] = u.useState(true), fe = !O && ee != null && Ce === K(ee), xe = He && !j, pe = xe ? y(G.filter((X) => !(w && (O ? ee : [
      ee
    ]).some((q) => q !== null && k(X, q)))), {
      inputValue: fe && We ? "" : Ce,
      getOptionLabel: K
    }) : [], he = Is({
      filteredOptions: pe,
      value: ee,
      inputValue: Ce
    });
    u.useEffect(() => {
      const X = ee !== he.value;
      Ne && !X || x && !X || ze(null, ee, "reset");
    }, [
      ee,
      ze,
      Ne,
      he.value,
      x
    ]);
    const je = He && pe.length > 0 && !j, Re = Ke((X) => {
      X === -1 ? J.current.focus() : ae.querySelector(`[data-tag-index="${X}"]`).focus();
    });
    u.useEffect(() => {
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
        const dt = Ze, Wt = _e.clientHeight + _e.scrollTop, Fl = dt.offsetTop + dt.offsetHeight;
        Fl > Wt ? _e.scrollTop = Fl - _e.clientHeight : dt.offsetTop - dt.offsetHeight * ($ ? 1.3 : 0) < _e.scrollTop && (_e.scrollTop = dt.offsetTop - dt.offsetHeight * ($ ? 1.3 : 0));
      }
    }), ut = Ke(({ event: X, diff: q, direction: ue = "next", reason: Te }) => {
      if (!xe) return;
      const Ze = rt((() => {
        const dt = pe.length - 1;
        if (q === "reset") return ye;
        if (q === "start") return 0;
        if (q === "end") return dt;
        const Wt = Z.current + q;
        return Wt < 0 ? Wt === -1 && S ? -1 : C && Z.current !== -1 || Math.abs(q) > 1 ? 0 : dt : Wt > dt ? Wt === dt + 1 && S ? -1 : C || Math.abs(q) > 1 ? dt : 0 : Wt;
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
    }, Ot = u.useCallback(() => {
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
          if (O && ue && ee.findIndex((_e) => k(ue, _e)) !== -1) return;
          const Te = pe.findIndex((_e) => k(_e, q));
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
      w,
      ut,
      xt,
      xe,
      Ce,
      O
    ]), Pn = Ke((X) => {
      cd(ne, X), X && Ot();
    });
    u.useEffect(() => {
      Ot();
    }, [
      Ot
    ]);
    const It = (X) => {
      He || (Le(true), Ge(true), T && T(X));
    }, zt = (X, q) => {
      He && (Le(false), _ && _(X, q));
    }, Et = (X, q, ue, Te) => {
      if (O) {
        if (ee.length === q.length && ee.every((_e, Ze) => _e === q[Ze])) return;
      } else if (ee === q) return;
      R && R(X, q, ue, Te), ve(q);
    }, Dt = u.useRef(false), Ft = (X, q, ue = "selectOption", Te = "options") => {
      let _e = ue, Ze = q;
      if (O) {
        Ze = Array.isArray(ee) ? ee.slice() : [];
        const dt = Ze.findIndex((Wt) => k(q, Wt));
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
    }, Ie = (X) => {
      B.current = true, Fe(""), I && I(X, "", "clear"), Et(X, O ? [] : null, "clear");
    }, Bt = (X) => (q) => {
      if (X.onKeyDown && X.onKeyDown(q), !q.defaultMuiPrevented && (Y !== -1 && ![
        "ArrowLeft",
        "ArrowRight"
      ].includes(q.key) && (re(-1), Re(-1)), q.which !== 229)) switch (q.key) {
        case "Home":
          xe && z && (q.preventDefault(), ut({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: q
          }));
          break;
        case "End":
          xe && z && (q.preventDefault(), ut({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: q
          }));
          break;
        case "PageUp":
          q.preventDefault(), ut({
            diff: -gi,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), It(q);
          break;
        case "PageDown":
          q.preventDefault(), ut({
            diff: gi,
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
          } else x && Ce !== "" && fe === false && (O && q.preventDefault(), Ft(q, Ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          xe ? (q.preventDefault(), q.stopPropagation(), zt(q, "escape")) : i && (Ce !== "" || O && ee.length > 0) && (q.preventDefault(), q.stopPropagation(), Ie(q));
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
      Be(true), A && !B.current && It(X);
    }, Un = (X) => {
      if (t(ne)) {
        J.current.focus();
        return;
      }
      Be(false), te.current = true, B.current = false, l && Z.current !== -1 && xe ? Ft(X, pe[Z.current], "blur") : l && x && Ce !== "" ? Ft(X, Ce, "blur", "freeSolo") : a && ze(X, ee, "blur"), zt(X, "blur");
    }, _o = (X) => {
      const q = X.target.value;
      Ce !== q && (Fe(q), Ge(false), I && I(X, q, "input")), q === "" ? !p && !O && Et(X, null, "clear") : It(X);
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
      He ? zt(X, "toggleInput") : It(X);
    }, No = (X) => {
      X.currentTarget.contains(X.target) && X.target.getAttribute("id") !== W && X.preventDefault();
    }, Mt = (X) => {
      X.currentTarget.contains(X.target) && (J.current.focus(), V && te.current && J.current.selectionEnd - J.current.selectionStart === 0 && J.current.select(), te.current = false);
    }, vt = (X) => {
      !g && (Ce === "" || !He) && El(X);
    };
    let gn = x && Ce.length > 0;
    gn = gn || (O ? ee.length > 0 : ee !== null);
    let kr = pe;
    return $ && (kr = pe.reduce((X, q, ue) => {
      const Te = $(q);
      return X.length > 0 && X[X.length - 1].group === Te ? X[X.length - 1].options.push(q) : X.push({
        key: ue,
        index: ue,
        group: Te,
        options: [
          q
        ]
      }), X;
    }, [])), g && Ne && Un(), {
      getRootProps: (X = {}) => ({
        ...X,
        onKeyDown: Bt(X),
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
        onBlur: Un,
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
        onClick: Ie
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
        ]).some((_e) => _e != null && k(q, _e)), Te = E ? E(q) : false;
        return {
          key: (H == null ? void 0 : H(q)) ?? K(q),
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
  var Ht = "top", rn = "bottom", ln = "right", Lt = "left", Ps = "auto", mr = [
    Ht,
    rn,
    ln,
    Lt
  ], So = "start", sr = "end", hp = "clippingParents", tc = "viewport", Wo = "popper", mp = "reference", mi = mr.reduce(function(e, t) {
    return e.concat([
      t + "-" + So,
      t + "-" + sr
    ]);
  }, []), nc = [].concat(mr, [
    Ps
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + So,
      t + "-" + sr
    ]);
  }, []), bp = "beforeRead", Cp = "read", wp = "afterRead", xp = "beforeMain", vp = "main", yp = "afterMain", Sp = "beforeWrite", Ip = "write", Pp = "afterWrite", Mp = [
    bp,
    Cp,
    wp,
    xp,
    vp,
    yp,
    Sp,
    Ip,
    Pp
  ];
  function vn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Nt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Qn(e) {
    var t = Nt(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function tn(e) {
    var t = Nt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Ms(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Nt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function kp(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
      !tn(l) || !vn(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
        var a = r[s];
        a === false ? l.removeAttribute(s) : l.setAttribute(s, a === true ? "" : a);
      }));
    });
  }
  function Ep(e) {
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
  const Fp = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: kp,
    effect: Ep,
    requires: [
      "computeStyles"
    ]
  };
  function wn(e) {
    return e.split("-")[0];
  }
  var qn = Math.max, Xr = Math.min, Io = Math.round;
  function Xl() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function oc() {
    return !/^((?!chrome|android).)*safari/i.test(Xl());
  }
  function Po(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, l = 1;
    t && tn(e) && (r = e.offsetWidth > 0 && Io(o.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && Io(o.height) / e.offsetHeight || 1);
    var s = Qn(e) ? Nt(e) : window, a = s.visualViewport, i = !oc() && n, d = (o.left + (i && a ? a.offsetLeft : 0)) / r, c = (o.top + (i && a ? a.offsetTop : 0)) / l, p = o.width / r, h = o.height / l;
    return {
      width: p,
      height: h,
      top: c,
      right: d + p,
      bottom: c + h,
      left: d,
      x: d,
      y: c
    };
  }
  function ks(e) {
    var t = Po(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function rc(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Ms(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function Fn(e) {
    return Nt(e).getComputedStyle(e);
  }
  function Tp(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(vn(e)) >= 0;
  }
  function Nn(e) {
    return ((Qn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function pl(e) {
    return vn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ms(e) ? e.host : null) || Nn(e);
  }
  function bi(e) {
    return !tn(e) || Fn(e).position === "fixed" ? null : e.offsetParent;
  }
  function Op(e) {
    var t = /firefox/i.test(Xl()), n = /Trident/i.test(Xl());
    if (n && tn(e)) {
      var o = Fn(e);
      if (o.position === "fixed") return null;
    }
    var r = pl(e);
    for (Ms(r) && (r = r.host); tn(r) && [
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
    for (var t = Nt(e), n = bi(e); n && Tp(n) && Fn(n).position === "static"; ) n = bi(n);
    return n && (vn(n) === "html" || vn(n) === "body" && Fn(n).position === "static") ? t : n || Op(e) || t;
  }
  function Es(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function tr(e, t, n) {
    return qn(e, Xr(t, n));
  }
  function Dp(e, t, n) {
    var o = tr(e, t, n);
    return o > n ? n : o;
  }
  function lc() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function sc(e) {
    return Object.assign({}, lc(), e);
  }
  function ic(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Rp = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, sc(typeof t != "number" ? t : ic(t, mr));
  };
  function $p(e) {
    var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = wn(n.placement), i = Es(a), d = [
      Lt,
      ln
    ].indexOf(a) >= 0, c = d ? "height" : "width";
    if (!(!l || !s)) {
      var p = Rp(r.padding, n), h = ks(l), g = i === "y" ? Ht : Lt, m = i === "y" ? rn : ln, C = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c], y = s[i] - n.rects.reference[i], w = br(l), x = w ? i === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, E = C / 2 - y / 2, H = p[g], M = x - h[c] - p[m], $ = x / 2 - h[c] / 2 + E, z = tr(H, $, M), D = i;
      n.modifiersData[o] = (t = {}, t[D] = z, t.centerOffset = z - $, t);
    }
  }
  function Hp(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || rc(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Lp = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: $p,
    effect: Hp,
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
  var jp = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Ap(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Io(n * r) / r || 0,
      y: Io(o * r) / r || 0
    };
  }
  function Ci(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, p = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, m = s.y, C = m === void 0 ? 0 : m, y = typeof c == "function" ? c({
      x: g,
      y: C
    }) : {
      x: g,
      y: C
    };
    g = y.x, C = y.y;
    var w = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), E = Lt, H = Ht, M = window;
    if (d) {
      var $ = br(n), z = "clientHeight", D = "clientWidth";
      if ($ === Nt(n) && ($ = Nn(n), Fn($).position !== "static" && a === "absolute" && (z = "scrollHeight", D = "scrollWidth")), $ = $, r === Ht || (r === Lt || r === ln) && l === sr) {
        H = rn;
        var S = p && $ === M && M.visualViewport ? M.visualViewport.height : $[z];
        C -= S - o.height, C *= i ? 1 : -1;
      }
      if (r === Lt || (r === Ht || r === rn) && l === sr) {
        E = ln;
        var v = p && $ === M && M.visualViewport ? M.visualViewport.width : $[D];
        g -= v - o.width, g *= i ? 1 : -1;
      }
    }
    var k = Object.assign({
      position: a
    }, d && jp), O = c === true ? Ap({
      x: g,
      y: C
    }, Nt(n)) : {
      x: g,
      y: C
    };
    if (g = O.x, C = O.y, i) {
      var R;
      return Object.assign({}, k, (R = {}, R[H] = x ? "0" : "", R[E] = w ? "0" : "", R.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + C + "px)" : "translate3d(" + g + "px, " + C + "px, 0)", R));
    }
    return Object.assign({}, k, (t = {}, t[H] = x ? C + "px" : "", t[E] = w ? g + "px" : "", t.transform = "", t));
  }
  function zp(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, l = n.adaptive, s = l === void 0 ? true : l, a = n.roundOffsets, i = a === void 0 ? true : a, d = {
      placement: wn(t.placement),
      variation: Mo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ci(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: i
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ci(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: i
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Gp = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: zp,
    data: {}
  };
  var Rr = {
    passive: true
  };
  function _p(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? true : r, s = o.resize, a = s === void 0 ? true : s, i = Nt(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return l && d.forEach(function(c) {
      c.addEventListener("scroll", n.update, Rr);
    }), a && i.addEventListener("resize", n.update, Rr), function() {
      l && d.forEach(function(c) {
        c.removeEventListener("scroll", n.update, Rr);
      }), a && i.removeEventListener("resize", n.update, Rr);
    };
  }
  const Vp = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: _p,
    data: {}
  };
  var Np = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Vr(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Np[t];
    });
  }
  var Bp = {
    start: "end",
    end: "start"
  };
  function wi(e) {
    return e.replace(/start|end/g, function(t) {
      return Bp[t];
    });
  }
  function Fs(e) {
    var t = Nt(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Ts(e) {
    return Po(Nn(e)).left + Fs(e).scrollLeft;
  }
  function Wp(e, t) {
    var n = Nt(e), o = Nn(e), r = n.visualViewport, l = o.clientWidth, s = o.clientHeight, a = 0, i = 0;
    if (r) {
      l = r.width, s = r.height;
      var d = oc();
      (d || !d && t === "fixed") && (a = r.offsetLeft, i = r.offsetTop);
    }
    return {
      width: l,
      height: s,
      x: a + Ts(e),
      y: i
    };
  }
  function Up(e) {
    var t, n = Nn(e), o = Fs(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = qn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = qn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Ts(e), i = -o.scrollTop;
    return Fn(r || n).direction === "rtl" && (a += qn(n.clientWidth, r ? r.clientWidth : 0) - l), {
      width: l,
      height: s,
      x: a,
      y: i
    };
  }
  function Os(e) {
    var t = Fn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function ac(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(vn(e)) >= 0 ? e.ownerDocument.body : tn(e) && Os(e) ? e : ac(pl(e));
  }
  function nr(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = ac(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Nt(o), s = r ? [
      l
    ].concat(l.visualViewport || [], Os(o) ? o : []) : o, a = t.concat(s);
    return r ? a : a.concat(nr(pl(s)));
  }
  function Ql(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Kp(e, t) {
    var n = Po(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function xi(e, t, n) {
    return t === tc ? Ql(Wp(e, n)) : Qn(t) ? Kp(t, n) : Ql(Up(Nn(e)));
  }
  function qp(e) {
    var t = nr(pl(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(Fn(e).position) >= 0, o = n && tn(e) ? br(e) : e;
    return Qn(o) ? t.filter(function(r) {
      return Qn(r) && rc(r, o) && vn(r) !== "body";
    }) : [];
  }
  function Yp(e, t, n, o) {
    var r = t === "clippingParents" ? qp(e) : [].concat(t), l = [].concat(r, [
      n
    ]), s = l[0], a = l.reduce(function(i, d) {
      var c = xi(e, d, o);
      return i.top = qn(c.top, i.top), i.right = Xr(c.right, i.right), i.bottom = Xr(c.bottom, i.bottom), i.left = qn(c.left, i.left), i;
    }, xi(e, s, o));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function cc(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? wn(o) : null, l = o ? Mo(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
    switch (r) {
      case Ht:
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
    var d = r ? Es(r) : null;
    if (d != null) {
      var c = d === "y" ? "height" : "width";
      switch (l) {
        case So:
          i[d] = i[d] - (t[c] / 2 - n[c] / 2);
          break;
        case sr:
          i[d] = i[d] + (t[c] / 2 - n[c] / 2);
          break;
      }
    }
    return i;
  }
  function ir(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.strategy, s = l === void 0 ? e.strategy : l, a = n.boundary, i = a === void 0 ? hp : a, d = n.rootBoundary, c = d === void 0 ? tc : d, p = n.elementContext, h = p === void 0 ? Wo : p, g = n.altBoundary, m = g === void 0 ? false : g, C = n.padding, y = C === void 0 ? 0 : C, w = sc(typeof y != "number" ? y : ic(y, mr)), x = h === Wo ? mp : Wo, E = e.rects.popper, H = e.elements[m ? x : h], M = Yp(Qn(H) ? H : H.contextElement || Nn(e.elements.popper), i, c, s), $ = Po(e.elements.reference), z = cc({
      reference: $,
      element: E,
      placement: r
    }), D = Ql(Object.assign({}, E, z)), S = h === Wo ? D : $, v = {
      top: M.top - S.top + w.top,
      bottom: S.bottom - M.bottom + w.bottom,
      left: M.left - S.left + w.left,
      right: S.right - M.right + w.right
    }, k = e.modifiersData.offset;
    if (h === Wo && k) {
      var O = k[r];
      Object.keys(v).forEach(function(R) {
        var _ = [
          ln,
          rn
        ].indexOf(R) >= 0 ? 1 : -1, F = [
          Ht,
          rn
        ].indexOf(R) >= 0 ? "y" : "x";
        v[R] += O[F] * _;
      });
    }
    return v;
  }
  function Xp(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, d = i === void 0 ? nc : i, c = Mo(o), p = c ? a ? mi : mi.filter(function(m) {
      return Mo(m) === c;
    }) : mr, h = p.filter(function(m) {
      return d.indexOf(m) >= 0;
    });
    h.length === 0 && (h = p);
    var g = h.reduce(function(m, C) {
      return m[C] = ir(e, {
        placement: C,
        boundary: r,
        rootBoundary: l,
        padding: s
      })[wn(C)], m;
    }, {});
    return Object.keys(g).sort(function(m, C) {
      return g[m] - g[C];
    });
  }
  function Qp(e) {
    if (wn(e) === Ps) return [];
    var t = Vr(e);
    return [
      wi(e),
      t,
      wi(t)
    ];
  }
  function Jp(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? true : s, i = n.fallbackPlacements, d = n.padding, c = n.boundary, p = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, m = g === void 0 ? true : g, C = n.allowedAutoPlacements, y = t.options.placement, w = wn(y), x = w === y, E = i || (x || !m ? [
        Vr(y)
      ] : Qp(y)), H = [
        y
      ].concat(E).reduce(function(W, K) {
        return W.concat(wn(K) === Ps ? Xp(t, {
          placement: K,
          boundary: c,
          rootBoundary: p,
          padding: d,
          flipVariations: m,
          allowedAutoPlacements: C
        }) : K);
      }, []), M = t.rects.reference, $ = t.rects.popper, z = /* @__PURE__ */ new Map(), D = true, S = H[0], v = 0; v < H.length; v++) {
        var k = H[v], O = wn(k), R = Mo(k) === So, _ = [
          Ht,
          rn
        ].indexOf(O) >= 0, F = _ ? "width" : "height", I = ir(t, {
          placement: k,
          boundary: c,
          rootBoundary: p,
          altBoundary: h,
          padding: d
        }), T = _ ? R ? ln : Lt : R ? rn : Ht;
        M[F] > $[F] && (T = Vr(T));
        var L = Vr(T), A = [];
        if (l && A.push(I[O] <= 0), a && A.push(I[T] <= 0, I[L] <= 0), A.every(function(W) {
          return W;
        })) {
          S = k, D = false;
          break;
        }
        z.set(k, A);
      }
      if (D) for (var G = m ? 3 : 1, j = function(K) {
        var B = H.find(function(te) {
          var J = z.get(te);
          if (J) return J.slice(0, K).every(function(ne) {
            return ne;
          });
        });
        if (B) return S = B, "break";
      }, V = G; V > 0; V--) {
        var U = j(V);
        if (U === "break") break;
      }
      t.placement !== S && (t.modifiersData[o]._skip = true, t.placement = S, t.reset = true);
    }
  }
  const Zp = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Jp,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function vi(e, t, n) {
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
  function yi(e) {
    return [
      Ht,
      ln,
      rn,
      Lt
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function ef(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = ir(t, {
      elementContext: "reference"
    }), a = ir(t, {
      altBoundary: true
    }), i = vi(s, o), d = vi(a, r, l), c = yi(i), p = yi(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: i,
      popperEscapeOffsets: d,
      isReferenceHidden: c,
      hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": p
    });
  }
  const tf = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: ef
  };
  function nf(e, t, n) {
    var o = wn(e), r = [
      Lt,
      Ht
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
  function of(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [
      0,
      0
    ] : r, s = nc.reduce(function(c, p) {
      return c[p] = nf(p, t.rects, l), c;
    }, {}), a = s[t.placement], i = a.x, d = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const rf = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: of
  };
  function lf(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = cc({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const sf = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: lf,
    data: {}
  };
  function af(e) {
    return e === "x" ? "y" : "x";
  }
  function cf(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? false : s, i = n.boundary, d = n.rootBoundary, c = n.altBoundary, p = n.padding, h = n.tether, g = h === void 0 ? true : h, m = n.tetherOffset, C = m === void 0 ? 0 : m, y = ir(t, {
      boundary: i,
      rootBoundary: d,
      padding: p,
      altBoundary: c
    }), w = wn(t.placement), x = Mo(t.placement), E = !x, H = Es(w), M = af(H), $ = t.modifiersData.popperOffsets, z = t.rects.reference, D = t.rects.popper, S = typeof C == "function" ? C(Object.assign({}, t.rects, {
      placement: t.placement
    })) : C, v = typeof S == "number" ? {
      mainAxis: S,
      altAxis: S
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, S), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
      x: 0,
      y: 0
    };
    if ($) {
      if (l) {
        var R, _ = H === "y" ? Ht : Lt, F = H === "y" ? rn : ln, I = H === "y" ? "height" : "width", T = $[H], L = T + y[_], A = T - y[F], G = g ? -D[I] / 2 : 0, j = x === So ? z[I] : D[I], V = x === So ? -D[I] : -z[I], U = t.elements.arrow, W = g && U ? ks(U) : {
          width: 0,
          height: 0
        }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : lc(), B = K[_], te = K[F], J = tr(0, z[I], W[I]), ne = E ? z[I] / 2 - G - J - B - v.mainAxis : j - J - B - v.mainAxis, ae = E ? -z[I] / 2 + G + J + te + v.mainAxis : V + J + te + v.mainAxis, we = t.elements.arrow && br(t.elements.arrow), Y = we ? H === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, re = (R = k == null ? void 0 : k[H]) != null ? R : 0, ye = T + ne - re - Y, Z = T + ae - re, Se = tr(g ? Xr(L, ye) : L, T, g ? qn(A, Z) : A);
        $[H] = Se, O[H] = Se - T;
      }
      if (a) {
        var ee, ve = H === "x" ? Ht : Lt, Ce = H === "x" ? rn : ln, Fe = $[M], Ne = M === "y" ? "height" : "width", Be = Fe + y[ve], ze = Fe - y[Ce], He = [
          Ht,
          Lt
        ].indexOf(w) !== -1, Le = (ee = k == null ? void 0 : k[M]) != null ? ee : 0, We = He ? Be : Fe - z[Ne] - D[Ne] - Le + v.altAxis, Ge = He ? Fe + z[Ne] + D[Ne] - Le - v.altAxis : ze, fe = g && He ? Dp(We, Fe, Ge) : tr(g ? We : Be, Fe, g ? Ge : ze);
        $[M] = fe, O[M] = fe - Fe;
      }
      t.modifiersData[o] = O;
    }
  }
  const uf = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: cf,
    requiresIfExists: [
      "offset"
    ]
  };
  function df(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function pf(e) {
    return e === Nt(e) || !tn(e) ? Fs(e) : df(e);
  }
  function ff(e) {
    var t = e.getBoundingClientRect(), n = Io(t.width) / e.offsetWidth || 1, o = Io(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function gf(e, t, n) {
    n === void 0 && (n = false);
    var o = tn(t), r = tn(t) && ff(t), l = Nn(t), s = Po(e, r, n), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, i = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((vn(t) !== "body" || Os(l)) && (a = pf(t)), tn(t) ? (i = Po(t, true), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Ts(l))), {
      x: s.left + a.scrollLeft - i.x,
      y: s.top + a.scrollTop - i.y,
      width: s.width,
      height: s.height
    };
  }
  function hf(e) {
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
  function mf(e) {
    var t = hf(e);
    return Mp.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function bf(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Cf(e) {
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
  var Si = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ii() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function wf(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Si : r;
    return function(a, i, d) {
      d === void 0 && (d = l);
      var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Si, l),
        modifiersData: {},
        elements: {
          reference: a,
          popper: i
        },
        attributes: {},
        styles: {}
      }, p = [], h = false, g = {
        state: c,
        setOptions: function(w) {
          var x = typeof w == "function" ? w(c.options) : w;
          C(), c.options = Object.assign({}, l, c.options, x), c.scrollParents = {
            reference: Qn(a) ? nr(a) : a.contextElement ? nr(a.contextElement) : [],
            popper: nr(i)
          };
          var E = mf(Cf([].concat(o, c.options.modifiers)));
          return c.orderedModifiers = E.filter(function(H) {
            return H.enabled;
          }), m(), g.update();
        },
        forceUpdate: function() {
          if (!h) {
            var w = c.elements, x = w.reference, E = w.popper;
            if (Ii(x, E)) {
              c.rects = {
                reference: gf(x, br(E), c.options.strategy === "fixed"),
                popper: ks(E)
              }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(v) {
                return c.modifiersData[v.name] = Object.assign({}, v.data);
              });
              for (var H = 0; H < c.orderedModifiers.length; H++) {
                if (c.reset === true) {
                  c.reset = false, H = -1;
                  continue;
                }
                var M = c.orderedModifiers[H], $ = M.fn, z = M.options, D = z === void 0 ? {} : z, S = M.name;
                typeof $ == "function" && (c = $({
                  state: c,
                  options: D,
                  name: S,
                  instance: g
                }) || c);
              }
            }
          }
        },
        update: bf(function() {
          return new Promise(function(y) {
            g.forceUpdate(), y(c);
          });
        }),
        destroy: function() {
          C(), h = true;
        }
      };
      if (!Ii(a, i)) return g;
      g.setOptions(d).then(function(y) {
        !h && d.onFirstUpdate && d.onFirstUpdate(y);
      });
      function m() {
        c.orderedModifiers.forEach(function(y) {
          var w = y.name, x = y.options, E = x === void 0 ? {} : x, H = y.effect;
          if (typeof H == "function") {
            var M = H({
              state: c,
              name: w,
              instance: g,
              options: E
            }), $ = function() {
            };
            p.push(M || $);
          }
        });
      }
      function C() {
        p.forEach(function(y) {
          return y();
        }), p = [];
      }
      return g;
    };
  }
  var xf = [
    Vp,
    sf,
    Gp,
    Fp,
    rf,
    Zp,
    uf,
    Lp,
    tf
  ], vf = wf({
    defaultModifiers: xf
  });
  function yf(e) {
    return bt("MuiPopper", e);
  }
  ft("MuiPopper", [
    "root"
  ]);
  function Sf(e, t) {
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
  function Jl(e) {
    return typeof e == "function" ? e() : e;
  }
  function If(e) {
    return e.nodeType !== void 0;
  }
  const Pf = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "root"
      ]
    }, yf, t);
  }, Mf = {}, kf = u.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: l, disablePortal: s, modifiers: a, open: i, placement: d, popperOptions: c, popperRef: p, slotProps: h = {}, slots: g = {}, TransitionProps: m, ownerState: C, ...y } = t, w = u.useRef(null), x = jt(w, n), E = u.useRef(null), H = jt(E, p), M = u.useRef(H);
    St(() => {
      M.current = H;
    }, [
      H
    ]), u.useImperativeHandle(p, () => E.current, []);
    const $ = Sf(d, l), [z, D] = u.useState($), [S, v] = u.useState(Jl(o));
    u.useEffect(() => {
      E.current && E.current.forceUpdate();
    }), u.useEffect(() => {
      o && v(Jl(o));
    }, [
      o
    ]), St(() => {
      if (!S || !i) return;
      const F = (L) => {
        D(L.placement);
      };
      let I = [
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
      a != null && (I = I.concat(a)), c && c.modifiers != null && (I = I.concat(c.modifiers));
      const T = vf(S, w.current, {
        placement: $,
        ...c,
        modifiers: I
      });
      return M.current(T), () => {
        T.destroy(), M.current(null);
      };
    }, [
      S,
      s,
      a,
      i,
      c,
      $
    ]);
    const k = {
      placement: z
    };
    m !== null && (k.TransitionProps = m);
    const O = Pf(t), R = g.root ?? "div", _ = dd({
      elementType: R,
      externalSlotProps: h.root,
      externalForwardedProps: y,
      additionalProps: {
        role: "tooltip",
        ref: x
      },
      ownerState: t,
      className: O.root
    });
    return f.jsx(R, {
      ..._,
      children: typeof r == "function" ? r(k) : r
    });
  }), Ef = u.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: l, direction: s = "ltr", disablePortal: a = false, keepMounted: i = false, modifiers: d, open: c, placement: p = "bottom", popperOptions: h = Mf, popperRef: g, style: m, transition: C = false, slotProps: y = {}, slots: w = {}, ...x } = t, [E, H] = u.useState(true), M = () => {
      H(false);
    }, $ = () => {
      H(true);
    };
    if (!i && !c && (!C || E)) return null;
    let z;
    if (l) z = l;
    else if (o) {
      const v = Jl(o);
      z = v && If(v) ? en(v).body : en(null).body;
    }
    const D = !c && i && (!C || E) ? "none" : void 0, S = C ? {
      in: c,
      onEnter: M,
      onExited: $
    } : void 0;
    return f.jsx(ud, {
      disablePortal: a,
      container: z,
      children: f.jsx(kf, {
        anchorEl: o,
        direction: s,
        disablePortal: a,
        modifiers: d,
        ref: n,
        open: C ? !E : c,
        placement: p,
        popperOptions: h,
        popperRef: g,
        slotProps: y,
        slots: w,
        ...x,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: D,
          ...m
        },
        TransitionProps: S,
        children: r
      })
    });
  }), Ff = se(Ef, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), to = u.forwardRef(function(t, n) {
    const o = At(), r = Ct({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: l, component: s, components: a, componentsProps: i, container: d, disablePortal: c, keepMounted: p, modifiers: h, open: g, placement: m, popperOptions: C, popperRef: y, transition: w, slots: x, slotProps: E, ...H } = r, M = (x == null ? void 0 : x.root) ?? (a == null ? void 0 : a.Root), $ = {
      anchorEl: l,
      container: d,
      disablePortal: c,
      keepMounted: p,
      modifiers: h,
      open: g,
      placement: m,
      popperOptions: C,
      popperRef: y,
      transition: w,
      ...H
    };
    return f.jsx(Ff, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: M
      },
      slotProps: E ?? i,
      ...$,
      ref: n
    });
  });
  function Tf(e) {
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
  const Of = (e) => {
    const { classes: t, color: n, disableGutters: o, inset: r, disableSticky: l } = e, s = {
      root: [
        "root",
        n !== "default" && `color${ce(n)}`,
        !o && "gutters",
        r && "inset",
        !l && "sticky"
      ]
    };
    return me(s, Tf, t);
  }, Df = se("li", {
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
  }))), Zl = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiListSubheader"
    }), { className: r, color: l = "default", component: s = "li", disableGutters: a = false, disableSticky: i = false, inset: d = false, ...c } = o, p = {
      ...o,
      color: l,
      component: s,
      disableGutters: a,
      disableSticky: i,
      inset: d
    }, h = Of(p);
    return f.jsx(Df, {
      as: s,
      className: de(h.root, r),
      ref: n,
      ownerState: p,
      ...c
    });
  });
  Zl && (Zl.muiSkipListHighlight = true);
  const Rf = ke(f.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function $f(e) {
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
  ]), Hf = (e) => {
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
    return me(d, $f, t);
  }, Lf = se("div", {
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
  })), jf = se("span", {
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
  function Pi(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const xo = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: l, clickable: s, color: a = "default", component: i, deleteIcon: d, disabled: c = false, icon: p, label: h, onClick: g, onDelete: m, onKeyDown: C, onKeyUp: y, size: w = "medium", variant: x = "filled", tabIndex: E, skipFocusWhenDisabled: H = false, ...M } = o, $ = u.useRef(null), z = jt($, n), D = (A) => {
      A.stopPropagation(), m && m(A);
    }, S = (A) => {
      A.currentTarget === A.target && Pi(A) && A.preventDefault(), C && C(A);
    }, v = (A) => {
      A.currentTarget === A.target && m && Pi(A) && m(A), y && y(A);
    }, k = s !== false && g ? true : s, O = k || m ? Ul : i || "div", R = {
      ...o,
      component: O,
      disabled: c,
      size: w,
      color: a,
      iconColor: u.isValidElement(p) && p.props.color || a,
      onDelete: !!m,
      clickable: k,
      variant: x
    }, _ = Hf(R), F = O === Ul ? {
      component: i || "div",
      focusVisibleClassName: _.focusVisible,
      ...m && {
        disableRipple: true
      }
    } : {};
    let I = null;
    m && (I = d && u.isValidElement(d) ? u.cloneElement(d, {
      className: de(d.props.className, _.deleteIcon),
      onClick: D
    }) : f.jsx(Rf, {
      className: de(_.deleteIcon),
      onClick: D
    }));
    let T = null;
    r && u.isValidElement(r) && (T = u.cloneElement(r, {
      className: de(_.avatar, r.props.className)
    }));
    let L = null;
    return p && u.isValidElement(p) && (L = u.cloneElement(p, {
      className: de(_.icon, p.props.className)
    })), f.jsxs(Lf, {
      as: O,
      className: de(_.root, l),
      disabled: k && c ? true : void 0,
      onClick: g,
      onKeyDown: S,
      onKeyUp: v,
      ref: z,
      tabIndex: H && c ? -1 : E,
      ownerState: R,
      ...F,
      ...M,
      children: [
        T || L,
        f.jsx(jf, {
          className: de(_.label),
          ownerState: R,
          children: h
        }),
        I
      ]
    });
  });
  function Af(e) {
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
  var Mi, ki;
  const zf = (e) => {
    const { classes: t, disablePortal: n, expanded: o, focused: r, fullWidth: l, hasClearIcon: s, hasPopupIcon: a, inputFocused: i, popupOpen: d, size: c } = e, p = {
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
        `tagSize${ce(c)}`
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
    return me(p, Af, t);
  }, Gf = se("div", {
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
    [`& .${Tl.root}.${Kt.sizeSmall}`]: {
      [`& .${Tl.input}`]: {
        padding: "2px 4px 3px 0"
      }
    },
    [`& .${ci.root}`]: {
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
    [`& .${ci.root}.${Kt.sizeSmall}`]: {
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
    [`& .${lo.root}.${Kt.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${lo.input}`]: {
        padding: "2.5px 4px"
      }
    },
    [`& .${Kt.hiddenLabel}`]: {
      paddingTop: 8
    },
    [`& .${lo.root}.${Kt.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${De.input}`]: {
        paddingTop: 16,
        paddingBottom: 17
      }
    },
    [`& .${lo.root}.${Kt.hiddenLabel}.${Kt.sizeSmall}`]: {
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
  }), _f = se("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  }), Vf = se(Qt, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator
  })({
    marginRight: -2,
    padding: 4,
    visibility: "hidden"
  }), Nf = se(Qt, {
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
  }), Bf = se(to, {
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
  }))), Wf = se(qt, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(qe(({ theme: e }) => ({
    ...e.typography.body1,
    overflow: "auto"
  }))), Uf = se("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading
  })(qe(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), Kf = se("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions
  })(qe(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), qf = se("ul", {
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
  }))), Yf = se(Zl, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel
  })(qe(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8
  }))), Xf = se("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl
  })({
    padding: 0,
    [`& .${De.option}`]: {
      paddingLeft: 24
    }
  }), uc = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiAutocomplete"
    }), { autoComplete: r = false, autoHighlight: l = false, autoSelect: s = false, blurOnSelect: a = false, ChipProps: i, className: d, clearIcon: c = Mi || (Mi = f.jsx(up, {
      fontSize: "small"
    })), clearOnBlur: p = !o.freeSolo, clearOnEscape: h = false, clearText: g = "Clear", closeText: m = "Close", componentsProps: C, defaultValue: y = o.multiple ? [] : null, disableClearable: w = false, disableCloseOnSelect: x = false, disabled: E = false, disabledItemsFocusable: H = false, disableListWrap: M = false, disablePortal: $ = false, filterOptions: z, filterSelectedOptions: D = false, forcePopupIcon: S = "auto", freeSolo: v = false, fullWidth: k = false, getLimitTagsText: O = (Ye) => `+${Ye}`, getOptionDisabled: R, getOptionKey: _, getOptionLabel: F, isOptionEqualToValue: I, groupBy: T, handleHomeEndKeys: L = !o.freeSolo, id: A, includeInputInList: G = false, inputValue: j, limitTags: V = -1, ListboxComponent: U, ListboxProps: W, loading: K = false, loadingText: B = "Loading\u2026", multiple: te = false, noOptionsText: J = "No options", onChange: ne, onClose: ae, onHighlightChange: we, onInputChange: Y, onOpen: re, open: ye, openOnFocus: Z = false, openText: Se = "Open", options: ee, PaperComponent: ve, PopperComponent: Ce, popupIcon: Fe = ki || (ki = f.jsx(pd, {})), readOnly: Ne = false, renderGroup: Be, renderInput: ze, renderOption: He, renderTags: Le, selectOnFocus: We = !o.freeSolo, size: Ge = "medium", slots: fe = {}, slotProps: xe = {}, value: pe, ...he } = o, { getRootProps: je, getInputProps: Re, getInputLabelProps: rt, getPopupIndicatorProps: xt, getClearProps: ut, getTagProps: In, getListboxProps: Ot, getOptionProps: Pn, value: It, dirty: zt, expanded: Et, id: Dt, popupOpen: Ft, focused: oo, focusedTag: ro, anchorEl: Ie, setAnchorEl: Bt, inputValue: Il, groupedOptions: Un } = gp({
      ...o,
      componentName: "Autocomplete"
    }), _o = !w && !E && zt && !Ne, Vo = (!v || S === true) && S !== false, { onMouseDown: Pl } = Re(), { ref: Ml, ...kl } = Ot(), No = F || ((Ye) => Ye.label ?? Ye), Mt = {
      ...o,
      disablePortal: $,
      expanded: Et,
      focused: oo,
      fullWidth: k,
      getOptionLabel: No,
      hasClearIcon: _o,
      hasPopupIcon: Vo,
      inputFocused: ro === -1,
      popupOpen: Ft,
      size: Ge
    }, vt = zf(Mt), gn = {
      slots: {
        paper: ve,
        popper: Ce,
        ...fe
      },
      slotProps: {
        chip: i,
        listbox: W,
        ...C,
        ...xe
      }
    }, [kr, X] = at("listbox", {
      elementType: qf,
      externalForwardedProps: gn,
      ownerState: Mt,
      className: vt.listbox,
      additionalProps: kl,
      ref: Ml
    }), [q, ue] = at("paper", {
      elementType: qt,
      externalForwardedProps: gn,
      ownerState: Mt,
      className: vt.paper
    }), [Te, _e] = at("popper", {
      elementType: to,
      externalForwardedProps: gn,
      ownerState: Mt,
      className: vt.popper,
      additionalProps: {
        disablePortal: $,
        style: {
          width: Ie ? Ie.clientWidth : null
        },
        role: "presentation",
        anchorEl: Ie,
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
        const { key: Bo, ...sd } = Ye({
          index: Rn
        });
        return f.jsx(xo, {
          label: No(hn),
          size: Ge,
          ...sd,
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
    const Wt = Be || ((Ye) => f.jsxs("li", {
      children: [
        f.jsx(Yf, {
          className: vt.groupLabel,
          ownerState: Mt,
          component: "div",
          children: Ye.group
        }),
        f.jsx(Xf, {
          className: vt.groupUl,
          ownerState: Mt,
          children: Ye.children
        })
      ]
    }, Ye.key)), ld = He || ((Ye, hn) => {
      const { key: Rn, ...Bo } = Ye;
      return f.jsx("li", {
        ...Bo,
        children: No(hn)
      }, Rn);
    }), li = (Ye, hn) => {
      const Rn = Pn({
        option: Ye,
        index: hn
      });
      return ld({
        ...Rn,
        className: vt.option
      }, Ye, {
        selected: Rn["aria-selected"],
        index: hn,
        inputValue: Il
      }, Mt);
    }, si = gn.slotProps.clearIndicator, ii = gn.slotProps.popupIndicator;
    return f.jsxs(u.Fragment, {
      children: [
        f.jsx(Gf, {
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
              ref: Bt,
              className: vt.inputRoot,
              startAdornment: Ze,
              onMouseDown: (Ye) => {
                Ye.target === Ye.currentTarget && Pl(Ye);
              },
              ...(_o || Vo) && {
                endAdornment: f.jsxs(_f, {
                  className: vt.endAdornment,
                  ownerState: Mt,
                  children: [
                    _o ? f.jsx(Vf, {
                      ...ut(),
                      "aria-label": g,
                      title: g,
                      ownerState: Mt,
                      ...si,
                      className: de(vt.clearIndicator, si == null ? void 0 : si.className),
                      children: c
                    }) : null,
                    Vo ? f.jsx(Nf, {
                      ...xt(),
                      disabled: E,
                      "aria-label": Ft ? m : Se,
                      title: Ft ? m : Se,
                      ownerState: Mt,
                      ...ii,
                      className: de(vt.popupIndicator, ii == null ? void 0 : ii.className),
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
        Ie ? f.jsx(Bf, {
          as: Te,
          ..._e,
          children: f.jsxs(Wf, {
            as: q,
            ...ue,
            children: [
              K && Un.length === 0 ? f.jsx(Uf, {
                className: vt.loading,
                ownerState: Mt,
                children: B
              }) : null,
              Un.length === 0 && !v && !K ? f.jsx(Kf, {
                className: vt.noOptions,
                ownerState: Mt,
                role: "presentation",
                onMouseDown: (Ye) => {
                  Ye.preventDefault();
                },
                children: J
              }) : null,
              Un.length > 0 ? f.jsx(kr, {
                as: U,
                ...X,
                children: Un.map((Ye, hn) => T ? Wt({
                  key: Ye.key,
                  group: Ye.group,
                  children: Ye.options.map((Rn, Bo) => li(Rn, Ye.index + Bo))
                }) : li(Ye, hn))
              }) : null
            ]
          })
        }) : null
      ]
    });
  });
  function Qf(e) {
    const { badgeContent: t, invisible: n = false, max: o = 99, showZero: r = false } = e, l = Is({
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
  function Jf(e) {
    return bt("MuiBadge", e);
  }
  const $n = ft("MuiBadge", [
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
  ]), Ol = 10, Dl = 4, Zf = (e) => {
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
    return me(a, Jf, s);
  }, eg = se("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0
  }), tg = se("span", {
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
    minWidth: Ol * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: Ol * 2,
    borderRadius: Ol,
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
          borderRadius: Dl,
          height: Dl * 2,
          minWidth: Dl * 2,
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
          [`&.${$n.invisible}`]: {
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
  function Ei(e) {
    return {
      vertical: (e == null ? void 0 : e.vertical) ?? "top",
      horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
    };
  }
  const ng = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiBadge"
    }), { anchorOrigin: r, className: l, classes: s, component: a, components: i = {}, componentsProps: d = {}, children: c, overlap: p = "rectangular", color: h = "default", invisible: g = false, max: m = 99, badgeContent: C, slots: y, slotProps: w, showZero: x = false, variant: E = "standard", ...H } = o, { badgeContent: M, invisible: $, max: z, displayValue: D } = Qf({
      max: m,
      invisible: g,
      badgeContent: C,
      showZero: x
    }), S = Is({
      anchorOrigin: Ei(r),
      color: h,
      overlap: p,
      variant: E,
      badgeContent: C
    }), v = $ || M == null && E !== "dot", { color: k = h, overlap: O = p, anchorOrigin: R, variant: _ = E } = v ? S : o, F = Ei(R), I = _ !== "dot" ? D : void 0, T = {
      ...o,
      badgeContent: M,
      invisible: v,
      max: z,
      displayValue: I,
      showZero: x,
      anchorOrigin: F,
      color: k,
      overlap: O,
      variant: _
    }, L = Zf(T), A = {
      slots: {
        root: (y == null ? void 0 : y.root) ?? i.Root,
        badge: (y == null ? void 0 : y.badge) ?? i.Badge
      },
      slotProps: {
        root: (w == null ? void 0 : w.root) ?? d.root,
        badge: (w == null ? void 0 : w.badge) ?? d.badge
      }
    }, [G, j] = at("root", {
      elementType: eg,
      externalForwardedProps: {
        ...A,
        ...H
      },
      ownerState: T,
      className: de(L.root, l),
      ref: n,
      additionalProps: {
        as: a
      }
    }), [V, U] = at("badge", {
      elementType: tg,
      externalForwardedProps: A,
      ownerState: T,
      className: L.badge
    });
    return f.jsxs(G, {
      ...j,
      children: [
        c,
        f.jsx(V, {
          ...U,
          children: I
        })
      ]
    });
  });
  function og(e) {
    return bt("MuiCard", e);
  }
  ft("MuiCard", [
    "root"
  ]);
  const rg = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "root"
      ]
    }, og, t);
  }, lg = se(qt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), sg = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: l = false, ...s } = o, a = {
      ...o,
      raised: l
    }, i = rg(a);
    return f.jsx(lg, {
      className: de(i.root, r),
      elevation: l ? 8 : void 0,
      ref: n,
      ownerState: a,
      ...s
    });
  });
  function Fi(e) {
    return e.substring(2).toLowerCase();
  }
  function ig(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function dc(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: l = "onTouchEnd" } = e, s = u.useRef(false), a = u.useRef(null), i = u.useRef(false), d = u.useRef(false);
    u.useEffect(() => (setTimeout(() => {
      i.current = true;
    }, 0), () => {
      i.current = false;
    }), []);
    const c = jt(Ua(t), a), p = Ke((m) => {
      const C = d.current;
      d.current = false;
      const y = en(a.current);
      if (!i.current || !a.current || "clientX" in m && ig(m, y)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let w;
      m.composedPath ? w = m.composedPath().includes(a.current) : w = !y.documentElement.contains(m.target) || a.current.contains(m.target), !w && (n || !C) && r(m);
    }), h = (m) => (C) => {
      d.current = true;
      const y = t.props[m];
      y && y(C);
    }, g = {
      ref: c
    };
    return l !== false && (g[l] = h(l)), u.useEffect(() => {
      if (l !== false) {
        const m = Fi(l), C = en(a.current), y = () => {
          s.current = true;
        };
        return C.addEventListener(m, p), C.addEventListener("touchmove", y), () => {
          C.removeEventListener(m, p), C.removeEventListener("touchmove", y);
        };
      }
    }, [
      p,
      l
    ]), o !== false && (g[o] = h(o)), u.useEffect(() => {
      if (o !== false) {
        const m = Fi(o), C = en(a.current);
        return C.addEventListener(m, p), () => {
          C.removeEventListener(m, p);
        };
      }
    }, [
      p,
      o
    ]), u.cloneElement(t, g);
  }
  function ag(e) {
    return bt("MuiDialogActions", e);
  }
  ft("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const cg = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return me({
      root: [
        "root",
        !n && "spacing"
      ]
    }, ag, t);
  }, ug = se("div", {
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
  }), dg = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: l = false, ...s } = o, a = {
      ...o,
      disableSpacing: l
    }, i = cg(a);
    return f.jsx(ug, {
      className: de(i.root, r),
      ownerState: a,
      ref: n,
      ...s
    });
  });
  function pg(e) {
    return bt("MuiInputAdornment", e);
  }
  const Ti = ft("MuiInputAdornment", [
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
  var Oi;
  const fg = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${ce(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, gg = (e) => {
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
    return me(a, pg, t);
  }, hg = se("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: fg
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
          [`&.${Ti.positionStart}&:not(.${Ti.hiddenLabel})`]: {
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
  }))), pc = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: l, component: s = "div", disablePointerEvents: a = false, disableTypography: i = false, position: d, variant: c, ...p } = o, h = fd() || {};
    let g = c;
    c && h.variant, h && !g && (g = h.variant);
    const m = {
      ...o,
      hiddenLabel: h.hiddenLabel,
      size: h.size,
      disablePointerEvents: a,
      position: d,
      variant: g
    }, C = gg(m);
    return f.jsx(gd.Provider, {
      value: null,
      children: f.jsx(hg, {
        as: s,
        ownerState: m,
        className: de(C.root, l),
        ref: n,
        ...p,
        children: typeof r == "string" && !i ? f.jsx(Pe, {
          color: "textSecondary",
          children: r
        }) : f.jsxs(u.Fragment, {
          children: [
            d === "start" ? Oi || (Oi = f.jsx("span", {
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
  function mg(e) {
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
  const es = 4, ts = hr`
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
`, bg = typeof ts != "string" ? gr`
        animation: ${ts} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, ns = hr`
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
`, Cg = typeof ns != "string" ? gr`
        animation: ${ns} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, os = hr`
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
`, wg = typeof os != "string" ? gr`
        animation: ${os} 3s infinite linear;
      ` : null, xg = (e) => {
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
    return me(r, mg, t);
  }, Ds = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? xs(e.palette[t].main, 0.62) : vs(e.palette[t].main, 0.5), vg = se("span", {
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
          backgroundColor: Ds(e, t)
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
  }))), yg = se("span", {
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
        const n = Ds(e, t);
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
  })), wg || {
    animation: `${os} 3s infinite linear`
  }), Sg = se("span", {
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
          transition: `transform .${es}s linear`
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          zIndex: 1,
          transition: `transform .${es}s linear`
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
        style: bg || {
          animation: `${ts} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
        }
      }
    ]
  }))), Ig = se("span", {
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
          backgroundColor: Ds(e, t),
          transition: `transform .${es}s linear`
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
        style: Cg || {
          animation: `${ns} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
        }
      }
    ]
  }))), Pg = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiLinearProgress"
    }), { className: r, color: l = "primary", value: s, valueBuffer: a, variant: i = "indeterminate", ...d } = o, c = {
      ...o,
      color: l,
      variant: i
    }, p = xg(c), h = At(), g = {}, m = {
      bar1: {},
      bar2: {}
    };
    if ((i === "determinate" || i === "buffer") && s !== void 0) {
      g["aria-valuenow"] = Math.round(s), g["aria-valuemin"] = 0, g["aria-valuemax"] = 100;
      let C = s - 100;
      h && (C = -C), m.bar1.transform = `translateX(${C}%)`;
    }
    if (i === "buffer" && a !== void 0) {
      let C = (a || 0) - 100;
      h && (C = -C), m.bar2.transform = `translateX(${C}%)`;
    }
    return f.jsxs(vg, {
      className: de(p.root, r),
      ownerState: c,
      role: "progressbar",
      ...g,
      ref: n,
      ...d,
      children: [
        i === "buffer" ? f.jsx(yg, {
          className: p.dashed,
          ownerState: c
        }) : null,
        f.jsx(Sg, {
          className: p.bar1,
          ownerState: c,
          style: m.bar1
        }),
        i === "determinate" ? null : f.jsx(Ig, {
          className: p.bar2,
          ownerState: c,
          style: m.bar2
        })
      ]
    });
  }), Mg = (e) => {
    const { alignItems: t, classes: n } = e;
    return me({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, Dd, n);
  }, kg = se("div", {
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
  }))), vo = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiListItemIcon"
    }), { className: r, ...l } = o, s = u.useContext(hd), a = {
      ...o,
      alignItems: s.alignItems
    }, i = Mg(a);
    return f.jsx(kg, {
      className: de(i.root, r),
      ownerState: a,
      ref: n,
      ...l
    });
  }), Eg = ke(f.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Fg = ke(f.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Tg(e) {
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
  const Og = (e) => {
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
    }, Tg, t);
  }, rs = hr`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, ls = hr`
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
`, Dg = typeof rs != "string" ? gr`
        animation: ${rs} 2s ease-in-out 0.5s infinite;
      ` : null, Rg = typeof ls != "string" ? gr`
        &::after {
          animation: ${ls} 2s linear 0.5s infinite;
        }
      ` : null, $g = se("span", {
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
    const t = Wd(e.shape.borderRadius) || "px", n = Ud(e.shape.borderRadius);
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
          style: Dg || {
            animation: `${rs} 2s ease-in-out 0.5s infinite`
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
          style: Rg || {
            "&::after": {
              animation: `${ls} 2s linear 0.5s infinite`
            }
          }
        }
      ]
    };
  })), Hg = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiSkeleton"
    }), { animation: r = "pulse", className: l, component: s = "span", height: a, style: i, variant: d = "text", width: c, ...p } = o, h = {
      ...o,
      animation: r,
      component: s,
      variant: d,
      hasChildren: !!p.children
    }, g = Og(h);
    return f.jsx($g, {
      as: s,
      ref: n,
      className: de(g.root, l),
      ownerState: h,
      ...p,
      style: {
        width: c,
        height: a,
        ...i
      }
    });
  });
  function Lg(e) {
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
  function jg(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Ag = (e) => {
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
    return me(s, Lg, t);
  }, zg = se(to, {
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
  }))), Gg = se("div", {
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
          lineHeight: `${jg(16 / 14)}em`,
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
  }))), _g = se("span", {
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
  let $r = false;
  const Di = new md();
  let Uo = {
    x: 0,
    y: 0
  };
  function Hr(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Yn = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: l, classes: s, components: a = {}, componentsProps: i = {}, describeChild: d = false, disableFocusListener: c = false, disableHoverListener: p = false, disableInteractive: h = false, disableTouchListener: g = false, enterDelay: m = 100, enterNextDelay: C = 0, enterTouchDelay: y = 700, followCursor: w = false, id: x, leaveDelay: E = 0, leaveTouchDelay: H = 1500, onClose: M, onOpen: $, open: z, placement: D = "bottom", PopperComponent: S, PopperProps: v = {}, slotProps: k = {}, slots: O = {}, title: R, TransitionComponent: _, TransitionProps: F, ...I } = o, T = u.isValidElement(l) ? l : f.jsx("span", {
      children: l
    }), L = ws(), A = At(), [G, j] = u.useState(), [V, U] = u.useState(null), W = u.useRef(false), K = h || w, B = Xt(), te = Xt(), J = Xt(), ne = Xt(), [ae, we] = er({
      controlled: z,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let Y = ae;
    const re = nt(x), ye = u.useRef(), Z = Ke(() => {
      ye.current !== void 0 && (document.body.style.WebkitUserSelect = ye.current, ye.current = void 0), ne.clear();
    });
    u.useEffect(() => Z, [
      Z
    ]);
    const Se = (Ie) => {
      Di.clear(), $r = true, we(true), $ && !Y && $(Ie);
    }, ee = Ke((Ie) => {
      Di.start(800 + E, () => {
        $r = false;
      }), we(false), M && Y && M(Ie), B.start(L.transitions.duration.shortest, () => {
        W.current = false;
      });
    }), ve = (Ie) => {
      W.current && Ie.type !== "touchstart" || (G && G.removeAttribute("title"), te.clear(), J.clear(), m || $r && C ? te.start($r ? C : m, () => {
        Se(Ie);
      }) : Se(Ie));
    }, Ce = (Ie) => {
      te.clear(), J.start(E, () => {
        ee(Ie);
      });
    }, [, Fe] = u.useState(false), Ne = (Ie) => {
      ui(Ie.target) || (Fe(false), Ce(Ie));
    }, Be = (Ie) => {
      G || j(Ie.currentTarget), ui(Ie.target) && (Fe(true), ve(Ie));
    }, ze = (Ie) => {
      W.current = true;
      const Bt = T.props;
      Bt.onTouchStart && Bt.onTouchStart(Ie);
    }, He = (Ie) => {
      ze(Ie), J.clear(), B.clear(), Z(), ye.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ne.start(y, () => {
        document.body.style.WebkitUserSelect = ye.current, ve(Ie);
      });
    }, Le = (Ie) => {
      T.props.onTouchEnd && T.props.onTouchEnd(Ie), Z(), J.start(H, () => {
        ee(Ie);
      });
    };
    u.useEffect(() => {
      if (!Y) return;
      function Ie(Bt) {
        Bt.key === "Escape" && ee(Bt);
      }
      return document.addEventListener("keydown", Ie), () => {
        document.removeEventListener("keydown", Ie);
      };
    }, [
      ee,
      Y
    ]);
    const We = jt(Ua(T), j, n);
    !R && R !== 0 && (Y = false);
    const Ge = u.useRef(), fe = (Ie) => {
      const Bt = T.props;
      Bt.onMouseMove && Bt.onMouseMove(Ie), Uo = {
        x: Ie.clientX,
        y: Ie.clientY
      }, Ge.current && Ge.current.update();
    }, xe = {}, pe = typeof R == "string";
    d ? (xe.title = !Y && pe && !p ? R : null, xe["aria-describedby"] = Y ? re : null) : (xe["aria-label"] = pe ? R : null, xe["aria-labelledby"] = Y && !pe ? re : null);
    const he = {
      ...xe,
      ...I,
      ...T.props,
      className: de(I.className, T.props.className),
      onTouchStart: ze,
      ref: We,
      ...w ? {
        onMouseMove: fe
      } : {}
    }, je = {};
    g || (he.onTouchStart = He, he.onTouchEnd = Le), p || (he.onMouseOver = Hr(ve, he.onMouseOver), he.onMouseLeave = Hr(Ce, he.onMouseLeave), K || (je.onMouseOver = ve, je.onMouseLeave = Ce)), c || (he.onFocus = Hr(Be, he.onFocus), he.onBlur = Hr(Ne, he.onBlur), K || (je.onFocus = Be, je.onBlur = Ne));
    const Re = {
      ...o,
      isRtl: A,
      arrow: r,
      disableInteractive: K,
      placement: D,
      PopperComponentProp: S,
      touch: W.current
    }, rt = typeof k.popper == "function" ? k.popper(Re) : k.popper, xt = u.useMemo(() => {
      var _a2, _b2;
      let Ie = [
        {
          name: "arrow",
          enabled: !!V,
          options: {
            element: V,
            padding: 4
          }
        }
      ];
      return ((_a2 = v.popperOptions) == null ? void 0 : _a2.modifiers) && (Ie = Ie.concat(v.popperOptions.modifiers)), ((_b2 = rt == null ? void 0 : rt.popperOptions) == null ? void 0 : _b2.modifiers) && (Ie = Ie.concat(rt.popperOptions.modifiers)), {
        ...v.popperOptions,
        ...rt == null ? void 0 : rt.popperOptions,
        modifiers: Ie
      };
    }, [
      V,
      v.popperOptions,
      rt == null ? void 0 : rt.popperOptions
    ]), ut = Ag(Re), In = typeof k.transition == "function" ? k.transition(Re) : k.transition, Ot = {
      slots: {
        popper: a.Popper,
        transition: a.Transition ?? _,
        tooltip: a.Tooltip,
        arrow: a.Arrow,
        ...O
      },
      slotProps: {
        arrow: k.arrow ?? i.arrow,
        popper: {
          ...v,
          ...rt ?? i.popper
        },
        tooltip: k.tooltip ?? i.tooltip,
        transition: {
          ...F,
          ...In ?? i.transition
        }
      }
    }, [Pn, It] = at("popper", {
      elementType: zg,
      externalForwardedProps: Ot,
      ownerState: Re,
      className: de(ut.popper, v == null ? void 0 : v.className)
    }), [zt, Et] = at("transition", {
      elementType: Ka,
      externalForwardedProps: Ot,
      ownerState: Re
    }), [Dt, Ft] = at("tooltip", {
      elementType: Gg,
      className: ut.tooltip,
      externalForwardedProps: Ot,
      ownerState: Re
    }), [oo, ro] = at("arrow", {
      elementType: _g,
      className: ut.arrow,
      externalForwardedProps: Ot,
      ownerState: Re,
      ref: U
    });
    return f.jsxs(u.Fragment, {
      children: [
        u.cloneElement(T, he),
        f.jsx(Pn, {
          as: S ?? to,
          placement: D,
          anchorEl: w ? {
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
          children: ({ TransitionProps: Ie }) => f.jsx(zt, {
            timeout: L.transitions.duration.shorter,
            ...Ie,
            ...Et,
            children: f.jsxs(Dt, {
              ...Ft,
              children: [
                R,
                r ? f.jsx(oo, {
                  ...ro
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Vg = u.createContext(), Ng = u.createContext();
  function Bg(e) {
    return bt("MuiTableCell", e);
  }
  const Wg = ft("MuiTableCell", [
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
  ]), Ug = (e) => {
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
    return me(a, Bg, t);
  }, Kg = se("td", {
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
    ${e.palette.mode === "light" ? xs(lt(e.palette.divider, 1), 0.88) : vs(lt(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Wg.paddingCheckbox}`]: {
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
  }))), ss = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: l, component: s, padding: a, scope: i, size: d, sortDirection: c, variant: p, ...h } = o, g = u.useContext(Vg), m = u.useContext(Ng), C = m && m.variant === "head";
    let y;
    s ? y = s : y = C ? "th" : "td";
    let w = i;
    y === "td" ? w = void 0 : !w && C && (w = "col");
    const x = p || m && m.variant, E = {
      ...o,
      align: r,
      component: y,
      padding: a || (g && g.padding ? g.padding : "normal"),
      size: d || (g && g.size ? g.size : "medium"),
      sortDirection: c,
      stickyHeader: x === "head" && g && g.stickyHeader,
      variant: x
    }, H = Ug(E);
    let M = null;
    return c && (M = c === "asc" ? "ascending" : "descending"), f.jsx(Kg, {
      as: y,
      ref: n,
      className: de(H.root, l),
      "aria-sort": M,
      scope: w,
      ownerState: E,
      ...h
    });
  });
  function qg(e) {
    return bt("MuiToolbar", e);
  }
  ft("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Yg = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return me({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, qg, t);
  }, Xg = se("div", {
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
  }))), fc = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: l = "div", disableGutters: s = false, variant: a = "regular", ...i } = o, d = {
      ...o,
      component: l,
      disableGutters: s,
      variant: a
    }, c = Yg(d);
    return f.jsx(Xg, {
      as: l,
      className: de(c.root, r),
      ref: n,
      ownerState: d,
      ...i
    });
  }), Qg = ke(f.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Jg = ke(f.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Zg = u.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: l = false, getItemAriaLabel: s, nextIconButtonProps: a, onPageChange: i, page: d, rowsPerPage: c, showFirstButton: p, showLastButton: h, slots: g = {}, slotProps: m = {}, ...C } = t, y = At(), w = (j) => {
      i(j, 0);
    }, x = (j) => {
      i(j, d - 1);
    }, E = (j) => {
      i(j, d + 1);
    }, H = (j) => {
      i(j, Math.max(0, Math.ceil(r / c) - 1));
    }, M = g.firstButton ?? Qt, $ = g.lastButton ?? Qt, z = g.nextButton ?? Qt, D = g.previousButton ?? Qt, S = g.firstButtonIcon ?? Eg, v = g.lastButtonIcon ?? Fg, k = g.nextButtonIcon ?? Jg, O = g.previousButtonIcon ?? Qg, R = y ? $ : M, _ = y ? z : D, F = y ? D : z, I = y ? M : $, T = y ? m.lastButton : m.firstButton, L = y ? m.nextButton : m.previousButton, A = y ? m.previousButton : m.nextButton, G = y ? m.firstButton : m.lastButton;
    return f.jsxs("div", {
      ref: n,
      ...C,
      children: [
        p && f.jsx(R, {
          onClick: w,
          disabled: l || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...T,
          children: y ? f.jsx(v, {
            ...m.lastButtonIcon
          }) : f.jsx(S, {
            ...m.firstButtonIcon
          })
        }),
        f.jsx(_, {
          onClick: x,
          disabled: l || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...L ?? o,
          children: y ? f.jsx(k, {
            ...m.nextButtonIcon
          }) : f.jsx(O, {
            ...m.previousButtonIcon
          })
        }),
        f.jsx(F, {
          onClick: E,
          disabled: l || (r !== -1 ? d >= Math.ceil(r / c) - 1 : false),
          color: "inherit",
          "aria-label": s("next", d),
          title: s("next", d),
          ...A ?? a,
          children: y ? f.jsx(O, {
            ...m.previousButtonIcon
          }) : f.jsx(k, {
            ...m.nextButtonIcon
          })
        }),
        h && f.jsx(I, {
          onClick: H,
          disabled: l || d >= Math.ceil(r / c) - 1,
          "aria-label": s("last", d),
          title: s("last", d),
          ...G,
          children: y ? f.jsx(S, {
            ...m.firstButtonIcon
          }) : f.jsx(v, {
            ...m.lastButtonIcon
          })
        })
      ]
    });
  });
  function eh(e) {
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
  var Ri;
  const th = se(ss, {
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
  }))), nh = se(fc, {
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
  }))), oh = se("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), rh = se("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(qe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), lh = se(qr, {
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
  }), sh = se($t, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), ih = se("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(qe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function ah({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function ch(e) {
    return `Go to ${e} page`;
  }
  const uh = (e) => {
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
    }, eh, t);
  }, dh = u.forwardRef(function(t, n) {
    const o = Ct({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = Zg, backIconButtonProps: l, colSpan: s, component: a = ss, count: i, disabled: d = false, getItemAriaLabel: c = ch, labelDisplayedRows: p = ah, labelRowsPerPage: h = "Rows per page:", nextIconButtonProps: g, onPageChange: m, onRowsPerPageChange: C, page: y, rowsPerPage: w, rowsPerPageOptions: x = [
      10,
      25,
      50,
      100
    ], SelectProps: E = {}, showFirstButton: H = false, showLastButton: M = false, slotProps: $ = {}, slots: z = {}, ...D } = o, S = o, v = uh(S), k = ($ == null ? void 0 : $.select) ?? E, O = k.native ? "option" : sh;
    let R;
    (a === ss || a === "td") && (R = s || 1e3);
    const _ = nt(k.id), F = nt(k.labelId), I = () => i === -1 ? (y + 1) * w : w === -1 ? i : Math.min(i, (y + 1) * w), T = {
      slots: z,
      slotProps: $
    }, [L, A] = at("root", {
      ref: n,
      className: v.root,
      elementType: th,
      externalForwardedProps: {
        ...T,
        component: a,
        ...D
      },
      ownerState: S,
      additionalProps: {
        colSpan: R
      }
    }), [G, j] = at("toolbar", {
      className: v.toolbar,
      elementType: nh,
      externalForwardedProps: T,
      ownerState: S
    }), [V, U] = at("spacer", {
      className: v.spacer,
      elementType: oh,
      externalForwardedProps: T,
      ownerState: S
    }), [W, K] = at("selectLabel", {
      className: v.selectLabel,
      elementType: rh,
      externalForwardedProps: T,
      ownerState: S,
      additionalProps: {
        id: F
      }
    }), [B, te] = at("select", {
      className: v.select,
      elementType: lh,
      externalForwardedProps: T,
      ownerState: S
    }), [J, ne] = at("menuItem", {
      className: v.menuItem,
      elementType: O,
      externalForwardedProps: T,
      ownerState: S
    }), [ae, we] = at("displayedRows", {
      className: v.displayedRows,
      elementType: ih,
      externalForwardedProps: T,
      ownerState: S
    });
    return f.jsx(L, {
      ...A,
      children: f.jsxs(G, {
        ...j,
        children: [
          f.jsx(V, {
            ...U
          }),
          x.length > 1 && f.jsx(W, {
            ...K,
            children: h
          }),
          x.length > 1 && f.jsx(B, {
            variant: "standard",
            ...!k.variant && {
              input: Ri || (Ri = f.jsx(ys, {}))
            },
            value: w,
            onChange: C,
            id: _,
            labelId: F,
            ...k,
            classes: {
              ...k.classes,
              root: de(v.input, v.selectRoot, (k.classes || {}).root),
              select: de(v.select, (k.classes || {}).select),
              icon: de(v.selectIcon, (k.classes || {}).icon)
            },
            disabled: d,
            ...te,
            children: x.map((Y) => u.createElement(J, {
              ...ne,
              key: Y.label ? Y.label : Y,
              value: Y.value ? Y.value : Y
            }, Y.label ? Y.label : Y))
          }),
          f.jsx(ae, {
            ...we,
            children: p({
              from: i === 0 ? 0 : y * w + 1,
              to: I(),
              count: i === -1 ? -1 : i,
              page: y
            })
          }),
          f.jsx(r, {
            className: v.actions,
            backIconButtonProps: l,
            count: i,
            nextIconButtonProps: g,
            onPageChange: m,
            page: y,
            rowsPerPage: w,
            showFirstButton: H,
            showLastButton: M,
            slotProps: $.actions,
            slots: z.actions,
            getItemAriaLabel: c,
            disabled: d
          })
        ]
      })
    });
  }), ph = ke(f.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), fh = ke(f.jsx("path", {
    d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "CheckCircleOutline"), gh = ke(f.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "ErrorOutline"), Lr = ke(f.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), $i = ke(f.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Hi = ke(f.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), hh = ke(f.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), mh = ke(f.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), bh = ke(f.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Ch = ke(f.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), wh = ke(f.jsx("path", {
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
  function gc(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function xh({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: l, loading: s }) {
    const [a, i] = u.useState(""), d = u.useMemo(() => {
      if (!a) return e;
      const g = a.toLowerCase();
      return e.filter((m) => m.path.toLowerCase().includes(g) || m.headerName.toLowerCase().includes(g));
    }, [
      e,
      a
    ]), c = e.filter((g) => g.visible).length, p = (g, m) => {
      g.stopPropagation(), r(e.map((C) => C.path === m ? {
        ...C,
        visible: !C.visible
      } : C));
    }, h = (g) => {
      r(e.map((m) => ({
        ...m,
        visible: g
      })));
    };
    return f.jsxs(tt, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        f.jsxs(fc, {
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
              onChange: (g) => i(g.target.value),
              slotProps: {
                input: {
                  startAdornment: f.jsx(pc, {
                    position: "start",
                    children: f.jsx(mh, {
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
            f.jsx(Yn, {
              title: le.t("json_table_refresh_columns"),
              children: f.jsx("span", {
                children: f.jsx(Qt, {
                  size: "small",
                  onClick: l,
                  disabled: s,
                  children: f.jsx(hh, {
                    fontSize: "small"
                  })
                })
              })
            }),
            f.jsx(Yn, {
              title: le.t("json_table_show_all"),
              children: f.jsx(Qt, {
                size: "small",
                onClick: () => h(true),
                children: f.jsx(Ch, {
                  fontSize: "small"
                })
              })
            }),
            f.jsx(Yn, {
              title: le.t("json_table_hide_all"),
              children: f.jsx(Qt, {
                size: "small",
                onClick: () => h(false),
                children: f.jsx(wh, {
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
          children: d.length === 0 ? f.jsx(tt, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: f.jsx(Pe, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? le.t("json_table_no_columns") : le.t("json_table_no_search_results")
            })
          }) : d.map((g) => {
            const m = t.find((w) => w.path === g.path), C = n === g.path, y = (m == null ? void 0 : m.type) || "string";
            return f.jsx(sg, {
              onClick: () => o(g.path),
              variant: "outlined",
              sx: {
                p: 1,
                cursor: "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: C ? "primary.main" : "divider",
                backgroundColor: C ? "action.selected" : "background.paper",
                opacity: g.visible ? 1 : 0.55,
                "&:hover": {
                  backgroundColor: C ? "action.selected" : "action.hover"
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
                  f.jsx(Yr, {
                    checked: g.visible,
                    onClick: (w) => p(w, g.path),
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
                      f.jsx(Pe, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: g.path,
                        children: g.headerName || g.path
                      }),
                      g.headerName && g.headerName !== g.path && f.jsx(Pe, {
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
                        title: g.path,
                        children: g.path
                      })
                    ]
                  }),
                  f.jsx(xo, {
                    label: y,
                    size: "small",
                    sx: {
                      backgroundColor: or[y] || or.string,
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
            }, g.path);
          })
        }),
        e.length > 0 && f.jsx(tt, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: f.jsxs(Pe, {
            variant: "caption",
            color: "text.secondary",
            children: [
              c,
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
  function hc(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: l = false } = t;
    let s = e.toFixed(n);
    if (l) {
      const [a, i] = s.split("."), d = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = i !== void 0 ? `${d}.${i}` : d;
    }
    return `${o}${s}${r}`;
  }
  const vh = [
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
  function mc(e, t) {
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
      for (const [a, i] of Object.entries(l).sort((d, c) => c[0].length - d[0].length)) s = s.replaceAll(a, i);
      return s;
    } catch {
      return Nr(e);
    }
  }
  function is(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Nr(e);
  }
  function yh(e, t) {
    if (!e || e.trim() === "") return false;
    try {
      return !!new Function("value", `'use strict'; return (${e});`)(t);
    } catch {
      return false;
    }
  }
  function Sh(e) {
    if (!e || e.trim() === "") return null;
    try {
      return new Function("value", `'use strict'; return (${e});`), null;
    } catch (t) {
      return t instanceof Error ? t.message : "Invalid expression";
    }
  }
  function Ih({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o, _p2, _q, _r2, _s2, _t2, _u2;
    const [o, r] = u.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = u.useCallback((g) => {
      r((m) => ({
        ...m,
        [g]: !m[g]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", a = u.useCallback((g) => {
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
    ]), i = u.useCallback((g, m) => {
      const C = [
        ...e.cellStyle || []
      ];
      C[g] = {
        ...C[g],
        ...m
      }, n({
        ...e,
        cellStyle: C
      });
    }, [
      e,
      n
    ]), d = u.useCallback((g) => {
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
    ]), c = u.useCallback(() => {
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
    ]), p = u.useMemo(() => (t == null ? void 0 : t.min) !== void 0 && typeof t.min == "number" ? t.min + ((t.max || 0) - t.min) * 0.75 : 1234.567, [
      t
    ]), h = u.useMemo(() => t ? Object.values(t.typeCounts).reduce((g, m) => g + m, 0) : 0, [
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
            f.jsx(Pe, {
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
                  children: f.jsx(Pe, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: "medium"
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
                      f.jsxs(Kl, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          f.jsx(ql, {
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
                              f.jsx($t, {
                                value: "left",
                                children: le.t("json_table_align_left")
                              }),
                              f.jsx($t, {
                                value: "center",
                                children: le.t("json_table_align_center")
                              }),
                              f.jsx($t, {
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
                        label: f.jsx(Pe, {
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
                  children: f.jsx(Pe, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: "medium"
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
                          f.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: "medium"
                            },
                            children: le.t("json_table_number_format")
                          }),
                          f.jsxs(tt, {
                            children: [
                              f.jsxs(Pe, {
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
                              f.jsx(Rd, {
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
                            label: f.jsx(Pe, {
                              variant: "body2",
                              children: le.t("json_table_number_thousands")
                            })
                          }),
                          f.jsxs(qt, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(Pe, {
                                variant: "caption",
                                color: "text.secondary",
                                children: le.t("json_table_preview")
                              }),
                              f.jsxs(Pe, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: [
                                  p,
                                  " \u2192",
                                  " ",
                                  hc(p, {
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
                          f.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: "medium"
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
                          f.jsxs(Kl, {
                            fullWidth: true,
                            size: "small",
                            children: [
                              f.jsx(ql, {
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
                                children: vh.map((g) => f.jsx($t, {
                                  value: g.value,
                                  children: g.label
                                }, g.value))
                              })
                            ]
                          }),
                          f.jsxs(qt, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(Pe, {
                                variant: "caption",
                                color: "text.secondary",
                                children: le.t("json_table_preview")
                              }),
                              f.jsx(Pe, {
                                variant: "body2",
                                sx: {
                                  mt: 0.5,
                                  fontFamily: "monospace"
                                },
                                children: mc(/* @__PURE__ */ new Date(), ((_m2 = e.format) == null ? void 0 : _m2.dateFormat) || "yyyy-MM-dd")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "boolean" || ((_n2 = e.format) == null ? void 0 : _n2.type) === "boolean") && f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: "medium"
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
                          f.jsxs(qt, {
                            variant: "outlined",
                            sx: {
                              p: 1.5,
                              bgcolor: "action.hover"
                            },
                            children: [
                              f.jsx(Pe, {
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
                                  f.jsxs(Pe, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "true \u2192",
                                      " ",
                                      is(true, (_q = e.format) == null ? void 0 : _q.booleanTrue, (_r2 = e.format) == null ? void 0 : _r2.booleanFalse)
                                    ]
                                  }),
                                  f.jsxs(Pe, {
                                    variant: "body2",
                                    sx: {
                                      fontFamily: "monospace"
                                    },
                                    children: [
                                      "false \u2192",
                                      " ",
                                      is(false, (_s2 = e.format) == null ? void 0 : _s2.booleanTrue, (_t2 = e.format) == null ? void 0 : _t2.booleanFalse)
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && !e.format && f.jsx(Pe, {
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
                      f.jsx(Pe, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: "medium"
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
                        const C = Sh(g.condition), y = g.condition.trim() !== "";
                        return f.jsx(qt, {
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
                                  f.jsxs(Pe, {
                                    variant: "caption",
                                    sx: {
                                      fontWeight: "medium"
                                    },
                                    children: [
                                      le.t("json_table_rule"),
                                      " ",
                                      m + 1
                                    ]
                                  }),
                                  f.jsx(Yn, {
                                    title: le.t("json_table_delete_rule"),
                                    children: f.jsx(Qt, {
                                      size: "small",
                                      onClick: () => d(m),
                                      color: "error",
                                      children: f.jsx(bd, {
                                        fontSize: "small"
                                      })
                                    })
                                  })
                                ]
                              }),
                              f.jsx(Gt, {
                                label: le.t("json_table_condition"),
                                value: g.condition,
                                onChange: (w) => i(m, {
                                  condition: w.target.value
                                }),
                                size: "small",
                                fullWidth: true,
                                placeholder: "value > 100",
                                error: y && C !== null,
                                helperText: y && C ? C : le.t("json_table_condition_hint"),
                                slotProps: {
                                  input: {
                                    endAdornment: y ? C ? f.jsx(Yn, {
                                      title: C,
                                      children: f.jsx(gh, {
                                        fontSize: "small",
                                        color: "error"
                                      })
                                    }) : f.jsx(Yn, {
                                      title: le.t("json_table_condition_valid"),
                                      children: f.jsx(fh, {
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
                                    onChange: (w) => i(m, {
                                      backgroundColor: w.target.value
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
                                    onChange: (w) => i(m, {
                                      textColor: w.target.value
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
                                      onChange: (w) => i(m, {
                                        fontWeight: w.target.checked ? "bold" : "normal"
                                      }),
                                      icon: f.jsx($i, {}),
                                      checkedIcon: f.jsx($i, {}),
                                      size: "small"
                                    }),
                                    label: f.jsx(Pe, {
                                      variant: "caption",
                                      children: le.t("json_table_bold")
                                    })
                                  }),
                                  f.jsx(Ln, {
                                    control: f.jsx(Yr, {
                                      checked: g.fontStyle === "italic",
                                      onChange: (w) => i(m, {
                                        fontStyle: w.target.checked ? "italic" : "normal"
                                      }),
                                      icon: f.jsx(Hi, {}),
                                      checkedIcon: f.jsx(Hi, {}),
                                      size: "small"
                                    }),
                                    label: f.jsx(Pe, {
                                      variant: "caption",
                                      children: le.t("json_table_italic")
                                    })
                                  })
                                ]
                              }),
                              (g.backgroundColor || g.textColor) && f.jsx(qt, {
                                variant: "outlined",
                                sx: {
                                  p: 1,
                                  backgroundColor: g.backgroundColor || "transparent",
                                  color: g.textColor || "inherit",
                                  fontWeight: g.fontWeight || "normal",
                                  fontStyle: g.fontStyle || "normal"
                                },
                                children: f.jsx(Pe, {
                                  variant: "body2",
                                  children: le.t("json_table_sample_value")
                                })
                              })
                            ]
                          })
                        }, m);
                      }),
                      f.jsx(lr, {
                        startIcon: f.jsx(ph, {}),
                        onClick: c,
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
                  children: f.jsx(Pe, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: "medium"
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
                        label: f.jsx(Pe, {
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
                        label: f.jsx(Pe, {
                          variant: "body2",
                          children: le.t("json_table_filterable")
                        })
                      }),
                      t && f.jsxs(qt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          f.jsx(Pe, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: "medium",
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
                                  f.jsx(Pe, {
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
                                  f.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_confidence")
                                  }),
                                  f.jsxs(Pe, {
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
                                  f.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_nulls")
                                  }),
                                  f.jsxs(Pe, {
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
                                  f.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_distinct")
                                  }),
                                  f.jsx(Pe, {
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
                                  f.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_range")
                                  }),
                                  f.jsxs(Pe, {
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
                                  f.jsx(Pe, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: le.t("json_table_date_input_format")
                                  }),
                                  f.jsx(Pe, {
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
  const Ph = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Mh = /^\d{4}-\d{2}-\d{2}$/, kh = /^(\d{2})\.(\d{2})\.(\d{4})$/, Eh = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Fh = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Th = /^(\d{2})\/(\d{2})\/(\d{4})$/, Oh = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Dh = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function jr(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function Rl(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Ar(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Rh = [
    {
      regex: Ph,
      format: "ISO-8601"
    },
    {
      regex: Mh,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return jr(n, t);
      }
    },
    {
      regex: Fh,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return jr(t, n) && Ar(o, r, l);
      }
    },
    {
      regex: Eh,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return jr(t, n) && Ar(o, r);
      }
    },
    {
      regex: kh,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return jr(t, n);
      }
    },
    {
      regex: Dh,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return Rl(t, n) && Ar(o, r, l);
      }
    },
    {
      regex: Oh,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Rl(t, n) && Ar(o, r);
      }
    },
    {
      regex: Th,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Rl(t, n);
      }
    }
  ];
  function $h(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Rh) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Hh(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Lh(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Hh(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = $h(e);
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
  function jh(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Ah(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function zh(e) {
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
  function Li(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Gh(e, t) {
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
  function _h(e, t, n = 100) {
    const o = t.length, r = /* @__PURE__ */ new Map();
    for (const l of e) r.set(l, zh(l));
    for (const l of t) for (const s of e) {
      const a = r.get(s), i = l[s], d = Lh(i);
      if (Li(a.typeCounts, d.type), d.type === "null") {
        a.nullCount++;
        continue;
      }
      if (a.nonNullCount++, d.dateFormat && Li(a.dateFormatCounts, d.dateFormat), a.distinctValues.size < n && a.distinctValues.add(i), typeof i == "number" && Number.isFinite(i) && ((a.numMin === void 0 || i < a.numMin) && (a.numMin = i), (a.numMax === void 0 || i > a.numMax) && (a.numMax = i)), typeof i == "string") {
        const c = i.length;
        (a.strLenMin === void 0 || c < a.strLenMin) && (a.strLenMin = c), (a.strLenMax === void 0 || c > a.strLenMax) && (a.strLenMax = c);
      }
      if (d.dateFormat) {
        const c = Gh(i, d.dateFormat);
        c !== null && ((a.dateMin === void 0 || c < a.dateMin) && (a.dateMin = c), (a.dateMax === void 0 || c > a.dateMax) && (a.dateMax = c));
      }
    }
    return e.map((l) => {
      const s = r.get(l), a = jh(s.typeCounts), i = a === "date" ? Ah(s.dateFormatCounts) : void 0, d = a === "date" ? s.typeCounts.date || 0 : s.typeCounts[a] || 0, c = o > 0 ? Math.round(d / o * 100) / 100 : 0, p = {
        path: l,
        type: a,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: c
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
        const c = t ? `${t}.${d}` : d;
        Qr(e[d], c, n, o, r, l + 1, s, a);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Vh(e, t = 10) {
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
    const l = Nh([
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
  function Nh(e) {
    return e.sort((t, n) => {
      const o = ji(t), r = ji(n), l = Math.min(o.length, r.length);
      for (let s = 0; s < l; s++) {
        const a = o[s], i = r[s], d = Ai(a), c = Ai(i);
        if (d !== null && c !== null) {
          if (d !== c) return d - c;
          continue;
        }
        if (a !== i) return a.localeCompare(i);
      }
      return o.length - r.length;
    });
  }
  function ji(e) {
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
  function Ai(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Bh = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function bc(e, t) {
    const n = performance.now(), o = {
      ...Bh,
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
    const r = Vh(e, o.maxDepth), l = _h(r.paths, r.rows, o.maxDistinct), s = r.paths.length * r.rows.length, a = l.reduce((c, p) => c + p.nullCount, 0), i = s > 0 ? Math.round(a / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
  function Wh(e, t) {
    return u.useMemo(() => bc(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Uh({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: l, socket: s }) {
    const [a, i] = u.useState(n), [d, c] = u.useState(null), [p, h] = u.useState(false), [g, m] = u.useState([]), [C, y] = u.useState(false), w = u.useRef(false), x = u.useRef(() => Promise.resolve());
    u.useEffect(() => {
      e && (i(n), h(false), c(n.length > 0 ? n[0].path : null), w.current = false);
    }, [
      e,
      n
    ]), u.useEffect(() => {
      e && !w.current && (w.current = true, x.current());
    }, [
      e
    ]);
    const E = u.useCallback(async () => {
      y(true);
      try {
        const v = l.oid;
        if (!v) {
          y(false);
          return;
        }
        const k = await s.getState(v);
        if (!(k == null ? void 0 : k.val)) {
          y(false);
          return;
        }
        let O;
        const R = k.val;
        if (typeof R == "string") try {
          const I = JSON.parse(R);
          O = Array.isArray(I) ? I : [
            I
          ];
        } catch {
          y(false);
          return;
        }
        else if (Array.isArray(R)) O = R;
        else if (typeof R == "object" && R !== null) O = [
          R
        ];
        else {
          y(false);
          return;
        }
        const _ = l.tableMaxDepth || 10, F = bc(O, {
          maxDepth: _
        });
        m(F.columns), i((I) => {
          const T = new Map(I.map((A) => [
            A.path,
            A
          ])), L = F.columns.map((A) => {
            const G = T.get(A.path);
            return G || {
              path: A.path,
              visible: true,
              headerName: A.path.split(".").pop() || A.path
            };
          });
          return L.length !== I.length && h(true), L;
        });
      } catch {
      } finally {
        y(false);
      }
    }, [
      l,
      s
    ]);
    x.current = E;
    const H = u.useCallback((v) => {
      i((k) => k.map((O) => O.path === v.path ? v : O)), h(true);
    }, []), M = u.useCallback((v) => {
      i(v), h(true);
    }, []), $ = u.useCallback(() => {
      o(a), h(false), t();
    }, [
      a,
      o,
      t
    ]), z = u.useCallback((v, k) => {
      k === "backdropClick" && p || p && !window.confirm(le.t("json_table_unsaved_changes")) || t();
    }, [
      p,
      t
    ]), D = d ? a.find((v) => v.path === d) : null, S = d ? g.find((v) => v.path === d) : void 0;
    return f.jsx(qa, {
      theme: r,
      children: f.jsxs($d, {
        open: e,
        onClose: z,
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
          f.jsx(Hd, {
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
                f.jsx(Pe, {
                  variant: "h6",
                  children: le.t("json_table_column_editor_title")
                }),
                f.jsx(Qt, {
                  onClick: () => z(),
                  size: "small",
                  sx: {
                    color: "text.secondary"
                  },
                  children: f.jsx(jd, {})
                })
              ]
            })
          }),
          f.jsxs(Ld, {
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
                children: f.jsx(xh, {
                  columns: a,
                  discoveredColumns: g,
                  selectedPath: d,
                  onSelect: c,
                  onChange: M,
                  onRefresh: E,
                  loading: C
                })
              }),
              f.jsx(tt, {
                sx: {
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                },
                children: D ? f.jsx(Ih, {
                  column: D,
                  discoveredColumn: S,
                  onChange: H
                }) : f.jsx(tt, {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                  },
                  children: f.jsx(Pe, {
                    variant: "body2",
                    color: "text.secondary",
                    children: a.length > 0 ? le.t("json_table_select_column") : le.t("json_table_no_columns")
                  })
                })
              })
            ]
          }),
          f.jsxs(dg, {
            sx: {
              px: 2.5,
              py: 1.5
            },
            children: [
              f.jsx(lr, {
                onClick: () => z(),
                children: le.t("cancel")
              }),
              f.jsx(lr, {
                variant: "contained",
                onClick: $,
                disabled: !p,
                children: le.t("save")
              })
            ]
          })
        ]
      })
    });
  }
  function Kh(e, t, n, o) {
    const r = e.name || "columnConfig", l = o.context.theme, [s, a] = u.useState(false), i = u.useMemo(() => gc(t[r]), [
      t,
      r
    ]), d = i.filter((m) => m.visible).length, c = i.length, p = i.some((m) => m.format), h = i.some((m) => m.cellStyle && m.cellStyle.length > 0), g = u.useCallback((m) => {
      n({
        [r]: JSON.stringify(m)
      });
    }, [
      r,
      n
    ]);
    return f.jsx(qa, {
      theme: l,
      children: f.jsxs(tt, {
        sx: {
          mt: 1,
          width: "100%"
        },
        children: [
          f.jsx(lr, {
            variant: "outlined",
            startIcon: f.jsx(bh, {}),
            onClick: () => a(true),
            fullWidth: true,
            sx: {
              textTransform: "none"
            },
            children: le.t("json_table_configure_columns")
          }),
          c > 0 && f.jsxs(Pe, {
            variant: "caption",
            color: "text.secondary",
            sx: {
              mt: 0.5,
              display: "block"
            },
            children: [
              d,
              " / ",
              c,
              " ",
              le.t("json_table_columns_visible"),
              p && ` \xB7 ${le.t("json_table_has_formatting")}`,
              h && ` \xB7 ${le.t("json_table_has_styling")}`
            ]
          }),
          f.jsx(Uh, {
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
  const qh = () => [
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
      type: "color",
      label: "json_table_header_bg_color"
    },
    {
      name: "tableHeaderTextColor",
      type: "color",
      label: "json_table_header_text_color"
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
      type: "color",
      label: "json_table_striped_color"
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
      component: Kh
    }
  ], Cc = u.createContext(void 0);
  function Ee() {
    const e = u.useContext(Cc);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const wc = u.createContext(void 0), ie = () => {
    const e = u.useContext(wc);
    if (!e) throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
    return e;
  }, Yh = parseInt(u.version, 10), Ve = (e) => {
    if (Yh >= 19) {
      const t = (n) => e(n, n.ref ?? null);
      return t.displayName = e.displayName ?? e.name, t;
    }
    return u.forwardRef(e);
  };
  var Jr = /* @__PURE__ */ Symbol("NOT_FOUND");
  function Xh(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
  }
  function Qh(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
  }
  function Jh(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every((n) => typeof n == "function")) {
      const n = e.map((o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o).join(", ");
      throw new TypeError(`${t}[${n}]`);
    }
  }
  var zi = (e) => Array.isArray(e) ? e : [
    e
  ];
  function Zh(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return Jh(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
  }
  function em(e, t) {
    const n = [], { length: o } = e;
    for (let r = 0; r < o; r++) n.push(e[r].apply(null, t));
    return n;
  }
  function tm(e) {
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
  function nm(e, t) {
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
  var om = (e, t) => e === t;
  function rm(e) {
    return function(n, o) {
      if (n === null || o === null || n.length !== o.length) return false;
      const { length: r } = n;
      for (let l = 0; l < r; l++) if (!e(n[l], o[l])) return false;
      return true;
    };
  }
  function xc(e, t) {
    const n = typeof t == "object" ? t : {
      equalityCheck: t
    }, { equalityCheck: o = om, maxSize: r = 1, resultEqualityCheck: l } = n, s = rm(o);
    let a = 0;
    const i = r <= 1 ? tm(s) : nm(r, s);
    function d() {
      let c = i.get(arguments);
      if (c === Jr) {
        if (c = e.apply(null, arguments), a++, l) {
          const h = i.getEntries().find((g) => l(g.value, c));
          h && (c = h.value, a !== 0 && a--);
        }
        i.put(arguments, c);
      }
      return c;
    }
    return d.clearCache = () => {
      i.clear(), d.resetResultsCount();
    }, d.resultsCount = () => a, d.resetResultsCount = () => {
      a = 0;
    }, d;
  }
  var lm = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  }, sm = typeof WeakRef < "u" ? WeakRef : lm, im = 0, Gi = 1;
  function zr() {
    return {
      s: im,
      v: void 0,
      o: null,
      p: null
    };
  }
  function vc(e, t = {}) {
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
          const C = m.get(g);
          C === void 0 ? (a = zr(), m.set(g, a)) : a = C;
        } else {
          let m = a.p;
          m === null && (a.p = m = /* @__PURE__ */ new Map());
          const C = m.get(g);
          C === void 0 ? (a = zr(), m.set(g, a)) : a = C;
        }
      }
      const d = a;
      let c;
      if (a.s === Gi) c = a.v;
      else if (c = e.apply(null, arguments), l++, o) {
        const p = ((_a2 = r == null ? void 0 : r.deref) == null ? void 0 : _a2.call(r)) ?? r;
        p != null && o(p, c) && (c = p, l !== 0 && l--), r = typeof c == "object" && c !== null || typeof c == "function" ? new sm(c) : c;
      }
      return d.s = Gi, d.v = c, c;
    }
    return s.clearCache = () => {
      n = zr(), s.resetResultsCount();
    }, s.resultsCount = () => l, s.resetResultsCount = () => {
      l = 0;
    }, s;
  }
  function yc(e, ...t) {
    const n = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: t
    } : e, o = (...r) => {
      let l = 0, s = 0, a, i = {}, d = r.pop();
      typeof d == "object" && (i = d, d = r.pop()), Xh(d, `createSelector expects an output function after the inputs, but received: [${typeof d}]`);
      const c = {
        ...n,
        ...i
      }, { memoize: p, memoizeOptions: h = [], argsMemoize: g = vc, argsMemoizeOptions: m = [] } = c, C = zi(h), y = zi(m), w = Zh(r), x = p(function() {
        return l++, d.apply(null, arguments);
      }, ...C), E = g(function() {
        s++;
        const M = em(w, arguments);
        return a = x.apply(null, M), a;
      }, ...y);
      return Object.assign(E, {
        resultFunc: d,
        memoizedResultFunc: x,
        dependencies: w,
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
  var Sc = yc(vc), am = Object.assign((e, t = Sc) => {
    Qh(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const n = Object.keys(e), o = n.map((l) => e[l]);
    return t(o, (...l) => l.reduce((s, a, i) => (s[n[i]] = a, s), {}));
  }, {
    withTypes: () => am
  });
  const cm = Object.is;
  function Ic(e, t) {
    if (e === t) return true;
    if (!(e instanceof Object) || !(t instanceof Object)) return false;
    let n = 0, o = 0;
    for (const r in e) if (n += 1, !cm(e[r], t[r]) || !(r in t)) return false;
    for (const r in t) o += 1;
    return n === o;
  }
  var Pc = {
    exports: {}
  }, Mc = {};
  var ko = u;
  function um(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dm = typeof Object.is == "function" ? Object.is : um, pm = ko.useState, fm = ko.useEffect, gm = ko.useLayoutEffect, hm = ko.useDebugValue;
  function mm(e, t) {
    var n = t(), o = pm({
      inst: {
        value: n,
        getSnapshot: t
      }
    }), r = o[0].inst, l = o[1];
    return gm(function() {
      r.value = n, r.getSnapshot = t, $l(r) && l({
        inst: r
      });
    }, [
      e,
      n,
      t
    ]), fm(function() {
      return $l(r) && l({
        inst: r
      }), e(function() {
        $l(r) && l({
          inst: r
        });
      });
    }, [
      e
    ]), hm(n), n;
  }
  function $l(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dm(e, n);
    } catch {
      return true;
    }
  }
  function bm(e, t) {
    return t();
  }
  var Cm = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? bm : mm;
  Mc.useSyncExternalStore = ko.useSyncExternalStore !== void 0 ? ko.useSyncExternalStore : Cm;
  Pc.exports = Mc;
  var Rs = Pc.exports;
  function kc(e) {
    return e.acceptsApiRef;
  }
  function _i(e, t) {
    return kc(t) ? t(e) : t(e.current.state);
  }
  function Hl(e, t, n, o) {
    return kc(t) ? t(e, n) : t(e.current.state, o);
  }
  const Ec = Object.is, $s = Ic, wm = (e, t) => e === t ? true : e.length === t.length && e.every((n, o) => n === t[o]), xm = (e, t) => {
    let n = Object.is;
    return t instanceof Array ? n = wm : t instanceof Object && (n = $s), n(e, t);
  }, Fc = () => ({
    state: null,
    equals: null,
    selector: null,
    args: void 0
  }), Zr = [], Tc = () => null, Q = (e, t, n = Ec) => {
    const o = Sn(Fc), r = o.current.selector !== null, [l, s] = u.useState(r ? null : _i(e, t));
    o.current.state = l, o.current.equals = n, o.current.selector = t;
    const a = u.useCallback(() => (o.current.subscription || (o.current.subscription = e.current.store.subscribe(() => {
      const d = _i(e, o.current.selector);
      o.current.equals(o.current.state, d) || (o.current.state = d, s(d));
    })), null), Zr), i = u.useCallback(() => () => {
      o.current.subscription && (o.current.subscription(), o.current.subscription = void 0);
    }, Zr);
    return Rs.useSyncExternalStore(i, a, Tc), l;
  }, ar = (e, t, n = void 0, o = Ec) => {
    const r = Sn(Fc), l = r.current.selector !== null, [s, a] = u.useState(l ? null : Hl(e, t, n, e.current.instanceId));
    r.current.state = s, r.current.equals = o, r.current.selector = t;
    const i = r.current.args;
    if (r.current.args = n, l && !xm(i, n)) {
      const p = Hl(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, p) || (r.current.state = p, a(p));
    }
    const d = u.useCallback(() => (r.current.subscription || (r.current.subscription = e.current.store.subscribe(() => {
      const p = Hl(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, p) || (r.current.state = p, a(p));
    })), null), Zr), c = u.useCallback(() => () => {
      r.current.subscription && (r.current.subscription(), r.current.subscription = void 0);
    }, Zr);
    return Rs.useSyncExternalStore(c, d, Tc), s;
  }, vm = yc({
    memoize: xc,
    memoizeOptions: {
      maxSize: 1,
      equalityCheck: Object.is
    }
  }), Vi = /* @__PURE__ */ new WeakMap();
  function dn(e) {
    return "current" in e && "instanceId" in e.current;
  }
  const pn = {
    id: "default"
  }, be = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d) => {
      const c = dn(i), p = d ?? (c ? i.current.instanceId : pn), h = c ? i.current.state : i, g = e(h, p), m = t(h, p), C = n(h, p), y = o(h, p), w = r(h, p);
      return l(g, m, C, y, w);
    };
    else if (e && t && n && o && r) a = (i, d) => {
      const c = dn(i), p = d ?? (c ? i.current.instanceId : pn), h = c ? i.current.state : i, g = e(h, p), m = t(h, p), C = n(h, p), y = o(h, p);
      return r(g, m, C, y);
    };
    else if (e && t && n && o) a = (i, d) => {
      const c = dn(i), p = d ?? (c ? i.current.instanceId : pn), h = c ? i.current.state : i, g = e(h, p), m = t(h, p), C = n(h, p);
      return o(g, m, C);
    };
    else if (e && t && n) a = (i, d) => {
      const c = dn(i), p = d ?? (c ? i.current.instanceId : pn), h = c ? i.current.state : i, g = e(h, p), m = t(h, p);
      return n(g, m);
    };
    else if (e && t) a = (i, d) => {
      const c = dn(i), p = d ?? (c ? i.current.instanceId : pn), h = c ? i.current.state : i, g = e(h, p);
      return t(g);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, Cr = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d, c) => {
      const p = dn(i), h = c ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), C = t(g, d, h), y = n(g, d, h), w = o(g, d, h), x = r(g, d, h);
      return l(m, C, y, w, x, d);
    };
    else if (e && t && n && o && r) a = (i, d, c) => {
      const p = dn(i), h = c ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), C = t(g, d, h), y = n(g, d, h), w = o(g, d, h);
      return r(m, C, y, w, d);
    };
    else if (e && t && n && o) a = (i, d, c) => {
      const p = dn(i), h = c ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), C = t(g, d, h), y = n(g, d, h);
      return o(m, C, y, d);
    };
    else if (e && t && n) a = (i, d, c) => {
      const p = dn(i), h = c ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h), C = t(g, d, h);
      return n(m, C, d);
    };
    else if (e && t) a = (i, d, c) => {
      const p = dn(i), h = c ?? (p ? i.current.instanceId : pn), g = p ? i.current.state : i, m = e(g, d, h);
      return t(m, d);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, Ue = (...e) => {
    const t = (n, o) => {
      const r = dn(n), l = r ? n.current.instanceId : o ?? pn, s = r ? n.current.state : n, a = Vi.get(l), i = a ?? /* @__PURE__ */ new Map(), d = i == null ? void 0 : i.get(e);
      if (i && d) return d(s, l);
      const c = vm(...e);
      return a || Vi.set(l, i), i.set(e, c), c(s, l);
    };
    return t.acceptsApiRef = true, t;
  }, mt = (e) => e.dimensions, fl = be(mt, (e) => e.columnsTotalWidth), Hs = (e) => e.dimensions.rowHeight, ym = (e) => e.dimensions.contentSize.height, Sm = (e) => e.dimensions.hasScrollX, Im = (e) => e.dimensions.hasScrollY, Oc = (e) => e.dimensions.columnsTotalWidth < e.dimensions.viewportOuterSize.width, Pm = (e) => e.dimensions.headerHeight, Mm = (e) => e.dimensions.groupHeaderHeight, Dc = (e) => e.dimensions.hasScrollY ? e.dimensions.scrollbarSize : 0, km = (e) => {
    const t = e.dimensions.hasScrollX ? e.dimensions.scrollbarSize : 0, n = e.dimensions.viewportOuterSize.height - e.dimensions.minimumSize.height > 0;
    return !(t === 0 && !n);
  };
  function Tn(e) {
    return u.memo(e, Ic);
  }
  const Em = {
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
  function $e(e) {
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
  ]), Ni = 1e3;
  class Fm {
    constructor(t = Ni) {
      this.timeouts = /* @__PURE__ */ new Map(), this.cleanupTimeout = Ni, this.cleanupTimeout = t;
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
  class Tm {
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
  class Om {
  }
  function Dm(e) {
    let t = 0;
    return function(o, r, l, s) {
      e.registry === null && (e.registry = typeof FinalizationRegistry < "u" ? new Tm() : new Fm());
      const [a] = u.useState(new Om()), i = u.useRef(null), d = u.useRef(null);
      d.current = l;
      const c = u.useRef(null);
      if (!i.current && d.current) {
        const p = (h, g, m) => {
          var _a2;
          g && !g.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, h, g, m));
        };
        i.current = o.current.subscribeEvent(r, p, s), t += 1, c.current = {
          cleanupToken: t
        }, e.registry.register(a, () => {
          var _a2;
          (_a2 = i.current) == null ? void 0 : _a2.call(i), i.current = null, c.current = null;
        }, c.current);
      } else !d.current && i.current && (i.current(), i.current = null, c.current && (e.registry.unregister(c.current), c.current = null));
      u.useEffect(() => {
        if (!i.current && d.current) {
          const p = (h, g, m) => {
            var _a2;
            g && !g.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, h, g, m));
          };
          i.current = o.current.subscribeEvent(r, p, s);
        }
        return c.current && e.registry && (e.registry.unregister(c.current), c.current = null), () => {
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
  const Rm = {
    registry: null
  }, oe = Dm(Rm), $m = {
    isFirst: true
  };
  function Qe(e, t, n) {
    oe(e, t, n, $m);
  }
  const Hm = 0.7, Lm = 1.3, jm = {
    compact: Hm,
    comfortable: Lm,
    standard: 1
  }, ho = (e) => e.density, Do = be(ho, (e) => jm[e]), Am = [
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
  ], zm = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "editInputCell"
      ]
    }, $e, t);
  }, Gm = se(ys, {
    name: "MuiDataGrid",
    slot: "EditInputCell",
    overridesResolver: (e, t) => t.editInputCell
  })(({ theme: e }) => b({}, e.typography.body2, {
    padding: "1px 0",
    "& input": {
      padding: "0 16px",
      height: "100%"
    }
  })), _m = Ve((e, t) => {
    const n = ie(), { id: o, value: r, field: l, colDef: s, hasFocus: a, debounceMs: i = 200, isProcessingProps: d, onValueChange: c } = e, p = ge(e, Am), h = Ee(), g = u.useRef(null), [m, C] = u.useState(r), y = zm(n), w = u.useCallback(async (E) => {
      const H = E.target.value;
      c && await c(E, H);
      const M = h.current.getColumn(l);
      let $ = H;
      M.valueParser && ($ = M.valueParser(H, h.current.getRow(o), M, h)), C($), h.current.setEditCellValue({
        id: o,
        field: l,
        value: $,
        debounceMs: i,
        unstable_skipValueParser: true
      }, E);
    }, [
      h,
      i,
      l,
      o,
      c
    ]), x = h.current.unstable_getEditCellMeta(o, l);
    return u.useEffect(() => {
      (x == null ? void 0 : x.changeReason) !== "debouncedSetEditCellValue" && C(r);
    }, [
      x,
      r
    ]), St(() => {
      a && g.current.focus();
    }, [
      a
    ]), f.jsx(Gm, b({
      inputRef: g,
      className: y.root,
      ownerState: n,
      fullWidth: true,
      type: s.type === "number" ? s.type : "text",
      value: m ?? "",
      onChange: w,
      endAdornment: d ? f.jsx(n.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : void 0
    }, p, {
      ref: t
    }));
  }), Vm = (e) => f.jsx(_m, b({}, e)), sn = (e) => e.rows, wr = be(sn, (e) => e.totalRowCount), Nm = be(sn, (e) => e.loading), Bm = be(sn, (e) => e.totalTopLevelRowCount), Jt = be(sn, (e) => e.dataRowIdToModelLookup), Bi = be(sn, (e) => e.dataRowIdToIdLookup), pt = be(sn, (e) => e.tree), Wm = be(sn, (e) => e.groupsToFetch), Um = be(sn, (e) => e.groupingName), Wi = be(sn, (e) => e.treeDepths), no = Ue(sn, (e) => {
    const t = Object.entries(e.treeDepths);
    return t.length === 0 ? 1 : (t.filter(([, n]) => n > 0).map(([n]) => Number(n)).sort((n, o) => o - n)[0] ?? 0) + 1;
  }), Qo = be(sn, (e) => e.dataRowIds), Km = be(sn, (e) => e == null ? void 0 : e.additionalRowGroups), Ro = Ue(Km, (e) => {
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
  }), Rc = be(Ro, (e) => {
    var _a2, _b2;
    return (((_a2 = e == null ? void 0 : e.top) == null ? void 0 : _a2.length) || 0) + (((_b2 = e == null ? void 0 : e.bottom) == null ? void 0 : _b2.length) || 0);
  }), $c = (e, t) => t && e.length > 1 ? [
    e[0]
  ] : e, Ui = (e, t) => (n) => b({}, n, {
    sorting: b({}, n.sorting, {
      sortModel: $c(e, t)
    })
  }), qm = (e) => e === "desc", Ym = (e, t) => {
    const n = t.current.getColumn(e.field);
    if (!n || e.sort === null) return null;
    let o;
    return n.getSortComparator ? o = n.getSortComparator(e.sort) : o = qm(e.sort) ? (...l) => -1 * n.sortComparator(...l) : n.sortComparator, o ? {
      getSortCellParams: (l) => ({
        id: l,
        field: n.field,
        rowNode: pt(t)[l],
        value: t.current.getCellValue(l, n.field),
        api: t.current
      }),
      comparator: o
    } : null;
  }, Xm = (e, t, n) => e.reduce((o, r, l) => {
    if (o !== 0) return o;
    const s = t.params[l], a = n.params[l];
    return o = r.comparator(s.value, a.value, s, a), o;
  }, 0), Qm = (e, t) => {
    const n = e.map((o) => Ym(o, t)).filter((o) => !!o);
    return n.length === 0 ? null : (o) => o.map((r) => ({
      node: r,
      params: n.map((l) => l.getSortCellParams(r.id))
    })).sort((r, l) => Xm(n, r, l)).map((r) => r.node.id);
  }, Ki = (e, t) => {
    const n = e.indexOf(t);
    return !t || n === -1 || n + 1 === e.length ? e[0] : e[n + 1];
  }, Ls = (e, t) => e == null && t != null ? -1 : t == null && e != null ? 1 : e == null && t == null ? 0 : null, Jm = new Intl.Collator(), Zm = (e, t) => {
    const n = Ls(e, t);
    return n !== null ? n : typeof e == "string" ? Jm.compare(e.toString(), t.toString()) : e - t;
  }, Hc = (e, t) => {
    const n = Ls(e, t);
    return n !== null ? n : Number(e) - Number(t);
  }, Lc = (e, t) => {
    const n = Ls(e, t);
    return n !== null ? n : e > t ? 1 : e < t ? -1 : 0;
  }, eb = [
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
  function Yt(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, tabIndex: s, disabled: a, clearButton: i, InputProps: d, variant: c = "standard" } = e, p = ge(e, eb), h = Xt(), [g, m] = u.useState(Ll(t.value)), [C, y] = u.useState(false), w = nt(), x = ie(), E = u.useCallback((H) => {
      const M = Ll(H.target.value);
      m(M), y(true), h.start(x.filterDebounceMs, () => {
        const $ = b({}, t, {
          value: o === "number" && !Number.isNaN(Number(M)) ? Number(M) : M,
          fromInput: w
        });
        n($), y(false);
      });
    }, [
      h,
      x.filterDebounceMs,
      t,
      o,
      w,
      n
    ]);
    return u.useEffect(() => {
      (t.fromInput !== w || t.value == null) && m(Ll(t.value));
    }, [
      w,
      t
    ]), f.jsx(x.slots.baseTextField, b({
      id: w,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: g ?? "",
      onChange: E,
      variant: c,
      type: o || "text",
      InputProps: b({}, C || i ? {
        endAdornment: C ? f.jsx(x.slots.loadIcon, {
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
    }, p, (_a2 = x.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function Ll(e) {
    if (!(e == null || e === "")) return String(e);
  }
  function tb(e) {
    return typeof e == "number" && !Number.isNaN(e);
  }
  function nb(e) {
    return typeof e == "function";
  }
  function js(e) {
    return typeof e == "object" && e !== null;
  }
  function ob() {
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
  const Vt = (e, t, n) => Math.max(t, Math.min(n, e));
  function qi(e, t) {
    return Array.from({
      length: t - e
    }).map((n, o) => e + o);
  }
  function zn(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      if (Array.isArray(e)) {
        const r = e.length;
        if (r !== t.length) return false;
        for (let l = 0; l < r; l += 1) if (!zn(e[l], t[l])) return false;
        return true;
      }
      if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return false;
        const r = Array.from(e.entries());
        for (let l = 0; l < r.length; l += 1) if (!t.has(r[l][0])) return false;
        for (let l = 0; l < r.length; l += 1) {
          const s = r[l];
          if (!zn(s[1], t.get(s[0]))) return false;
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
        if (!zn(e[l], t[l])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function rb(e) {
    return () => {
      let t = e += 1831565813;
      return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function lb(e) {
    const t = rb(e);
    return (n, o) => n + (o - n) * t();
  }
  function jc(e) {
    return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
  }
  const Kn = (e, t) => (n) => {
    e && t(n);
  }, sb = [
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
  ], ib = [
    "key"
  ];
  function Ac(e) {
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, color: s, error: a, helperText: i, size: d, variant: c = "standard" } = e, p = ge(e, sb), h = {
      color: s,
      error: a,
      helperText: i,
      size: d,
      variant: c
    }, [g, m] = u.useState(t.value || []), C = nt(), y = ie();
    u.useEffect(() => {
      const x = t.value ?? [];
      m(x.map(String));
    }, [
      t.value
    ]);
    const w = u.useCallback((x, E) => {
      m(E.map(String)), n(b({}, t, {
        value: [
          ...E.map((H) => o === "number" ? Number(H) : H)
        ]
      }));
    }, [
      n,
      t,
      o
    ]);
    return f.jsx(uc, b({
      multiple: true,
      freeSolo: true,
      options: [],
      filterOptions: (x, E) => {
        const { inputValue: H } = E;
        return H == null || H === "" ? [] : [
          H
        ];
      },
      id: C,
      value: g,
      onChange: w,
      renderTags: (x, E) => x.map((H, M) => {
        const $ = E({
          index: M
        }), { key: z } = $, D = ge($, ib);
        return f.jsx(y.slots.baseChip, b({
          variant: "outlined",
          size: "small",
          label: H
        }, D), z);
      }),
      renderInput: (x) => {
        var _a2;
        return f.jsx(y.slots.baseTextField, b({}, x, {
          label: r.current.getLocaleText("filterPanelInputLabel"),
          placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: b({}, x.InputLabelProps, {
            shrink: true
          }),
          inputRef: l,
          type: o || "text"
        }, h, (_a2 = y.slotProps) == null ? void 0 : _a2.baseTextField));
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
  })(cn || {}), Hn = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e;
  })(Hn || {}), bn = (function(e) {
    return e.rowFocusOut = "rowFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(bn || {});
  function zc(e) {
    return e.field !== void 0;
  }
  const Gc = {
    filteredRowsLookup: {},
    filteredChildrenCountLookup: {},
    filteredDescendantCountLookup: {}
  }, cr = () => ({
    items: [],
    logicOperator: Tt.And,
    quickFilterValues: [],
    quickFilterLogicOperator: Tt.And
  });
  function _c(e) {
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
  }, Vc = (e) => e.isRtl, xn = (e) => e.columns, En = be(xn, (e) => e.orderedFields), On = be(xn, (e) => e.lookup), on = Ue(En, On, (e, t) => e.map((n) => t[n])), Zt = be(xn, (e) => e.columnVisibilityModel), st = Ue(on, Zt, (e, t) => e.filter((n) => t[n.field] !== false)), $o = Ue(st, (e) => e.map((t) => t.field)), Nc = (e) => e.pinnedColumns;
  Ue(Nc, En, Vc, (e, t, n) => Bc(e, t, n));
  const Ho = Ue(xn, Nc, $o, Vc, (e, t, n, o) => {
    const r = Bc(t, n, o);
    return {
      left: r.left.map((s) => e.lookup[s]),
      right: r.right.map((s) => e.lookup[s])
    };
  });
  function Bc(e, t, n) {
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
  const Bn = Ue(st, (e) => {
    const t = [];
    let n = 0;
    for (let o = 0; o < e.length; o += 1) t.push(n), n += e[o].computedWidth;
    return t;
  }), Wc = Ue(on, (e) => e.filter((t) => t.filterable)), ab = Ue(on, (e) => e.reduce((t, n) => (n.filterable && (t[n.field] = n), t), {})), cb = Ue(on, (e) => e.some((t) => t.colSpan !== void 0));
  let Ko;
  function ub() {
    if (Ko !== void 0) return Ko;
    try {
      Ko = new Function("return true")();
    } catch {
      Ko = false;
    }
    return Ko;
  }
  const as = (e, t) => {
    const n = b({}, e);
    if (n.id == null && (n.id = Math.round(Math.random() * 1e5)), n.operator == null) {
      const o = On(t)[n.field];
      n.operator = o && o.filterOperators[0].value;
    }
    return n;
  }, As = (e, t, n) => {
    const o = e.items.length > 1;
    let r;
    o && t ? r = [
      e.items[0]
    ] : r = e.items;
    const l = o && r.some((a) => a.id == null);
    return r.some((a) => a.operator == null) || l ? b({}, e, {
      items: r.map((a) => as(a, n))
    }) : e.items !== r ? b({}, e, {
      items: r
    }) : e;
  }, Yi = (e, t, n) => (o) => b({}, o, {
    filterModel: As(e, t, n)
  }), ur = (e) => typeof e == "string" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e, Uc = (e, t) => {
    var _a2;
    if (!e.field || !e.operator) return null;
    const n = t.current.getColumn(e.field);
    if (!n) return null;
    let o;
    if (n.valueParser) {
      const c = n.valueParser;
      o = Array.isArray(e.value) ? (_a2 = e.value) == null ? void 0 : _a2.map((p) => c(p, void 0, n, t)) : c(e.value, void 0, n, t);
    } else o = e.value;
    const { ignoreDiacritics: r } = t.current.rootProps;
    r && (o = ur(o));
    const l = b({}, e, {
      value: o
    }), s = n.filterOperators;
    if (!(s == null ? void 0 : s.length)) throw new Error(`MUI X: No filter operators found for column '${n.field}'.`);
    const a = s.find((c) => c.value === l.operator);
    if (!a) throw new Error(`MUI X: No filter operator found for column '${n.field}' and operator value '${l.operator}'.`);
    const i = _c(t), d = a.getApplyFilterFn(l, n);
    return typeof d != "function" ? null : {
      item: l,
      fn: (c) => {
        let p = t.current.getRowValue(c, n);
        return r && (p = ur(p)), d(p, c, n, i);
      }
    };
  };
  let Xi = 1;
  const db = (e, t, n) => {
    const { items: o } = e, r = o.map((a) => Uc(a, t)).filter((a) => !!a);
    if (r.length === 0) return null;
    if (n || !ub()) return (a, i) => {
      const d = {};
      for (let c = 0; c < r.length; c += 1) {
        const p = r[c];
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

return result$$;`.replaceAll("$$", String(Xi)));
    return Xi += 1, (a, i) => l(r, a, i);
  }, Kc = (e) => e.quickFilterExcludeHiddenColumns ?? true, pb = (e, t) => {
    var _a2;
    const n = ((_a2 = e.quickFilterValues) == null ? void 0 : _a2.filter(Boolean)) ?? [];
    if (n.length === 0) return null;
    const o = Kc(e) ? $o(t) : En(t), r = [], { ignoreDiacritics: l } = t.current.rootProps, s = _c(t);
    return o.forEach((a) => {
      const i = t.current.getColumn(a), d = i == null ? void 0 : i.getApplyQuickFilterFn;
      d && r.push({
        column: i,
        appliers: n.map((c) => {
          const p = l ? ur(c) : c;
          return {
            fn: d(p, i, s)
          };
        })
      });
    }), function(i, d) {
      const c = {};
      e: for (let p = 0; p < n.length; p += 1) {
        const h = n[p];
        for (let g = 0; g < r.length; g += 1) {
          const { column: m, appliers: C } = r[g], { field: y } = m;
          if (d && !d(y)) continue;
          const w = C[p];
          let x = t.current.getRowValue(i, m);
          if (w.fn === null) continue;
          if (l && (x = ur(x)), w.fn(x, i, m, s)) {
            c[h] = true;
            continue e;
          }
        }
        c[h] = false;
      }
      return c;
    };
  }, fb = (e, t, n) => {
    const o = db(e, t, n), r = pb(e, t);
    return function(s, a, i) {
      i.passingFilterItems = (o == null ? void 0 : o(s, a)) ?? null, i.passingQuickFilterValues = (r == null ? void 0 : r(s, a)) ?? null;
    };
  }, Qi = (e) => e != null, gb = (e, t, n) => (e.cleanedFilterItems || (e.cleanedFilterItems = n.filter((o) => Uc(o, t) !== null)), e.cleanedFilterItems), hb = (e, t, n, o, r) => {
    const l = gb(r, o, n.items), s = e.filter(Qi), a = t.filter(Qi);
    if (s.length > 0) {
      const i = (c) => s.some((p) => p[c.id]);
      if ((n.logicOperator ?? cr().logicOperator) === Tt.And) {
        if (!l.every(i)) return false;
      } else if (!l.some(i)) return false;
    }
    if (a.length > 0 && n.quickFilterValues != null) {
      const i = (c) => a.some((p) => p[c]);
      if ((n.quickFilterLogicOperator ?? cr().quickFilterLogicOperator) === Tt.And) {
        if (!n.quickFilterValues.every(i)) return false;
      } else if (!n.quickFilterValues.some(i)) return false;
    }
    return true;
  }, mb = (e) => {
    if (!e) return null;
    const t = new RegExp(el(e), "i");
    return (n, o, r, l) => {
      let s = l.current.getRowFormattedValue(o, r);
      return l.current.ignoreDiacritics && (s = ur(s)), s != null ? t.test(s.toString()) : false;
    };
  }, Ji = (e, t) => (n) => {
    if (!n.value) return null;
    const o = e ? n.value : n.value.trim(), r = new RegExp(el(o), "i");
    return (l) => {
      if (l == null) return t;
      const s = r.test(String(l));
      return t ? !s : s;
    };
  }, Zi = (e, t) => (n) => {
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
  }, ea = (e) => () => (t) => {
    const n = t === "" || t == null;
    return e ? !n : n;
  }, bb = (e = false) => [
    {
      value: "contains",
      getApplyFilterFn: Ji(e, false),
      InputComponent: Yt
    },
    {
      value: "doesNotContain",
      getApplyFilterFn: Ji(e, true),
      InputComponent: Yt
    },
    {
      value: "equals",
      getApplyFilterFn: Zi(e, false),
      InputComponent: Yt
    },
    {
      value: "doesNotEqual",
      getApplyFilterFn: Zi(e, true),
      InputComponent: Yt
    },
    {
      value: "startsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`^${el(n)}.*$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Yt
    },
    {
      value: "endsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`.*${el(n)}$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Yt
    },
    {
      value: "isEmpty",
      getApplyFilterFn: ea(false),
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: ea(true),
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
      InputComponent: Ac
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
    sortComparator: Zm,
    type: "string",
    align: "left",
    filterOperators: bb(),
    renderEditCell: Vm,
    getApplyQuickFilterFn: mb
  }, Cb = [
    "open",
    "target",
    "onClose",
    "children",
    "position",
    "className",
    "onExited"
  ], wb = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "menu"
      ]
    }, $e, t);
  }, xb = se(to, {
    name: "MuiDataGrid",
    slot: "Menu",
    overridesResolver: (e, t) => t.menu
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal,
    [`& .${P.menuList}`]: {
      outline: 0
    }
  })), vb = {
    "bottom-start": "top left",
    "bottom-end": "top right"
  };
  function zs(e) {
    var _a2;
    const { open: t, target: n, onClose: o, children: r, position: l, className: s, onExited: a } = e, i = ge(e, Cb), d = Ee(), c = ie(), p = wb(c), h = u.useRef(null);
    St(() => {
      var _a3, _b2;
      t ? h.current = document.activeElement instanceof HTMLElement ? document.activeElement : null : ((_b2 = (_a3 = h.current) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3), h.current = null);
    }, [
      t
    ]), u.useEffect(() => {
      const C = t ? "menuOpen" : "menuClose";
      d.current.publishEvent(C, {
        target: n
      });
    }, [
      d,
      t,
      n
    ]);
    const g = (C) => (y) => {
      C && C(), a && a(y);
    }, m = (C) => {
      C.target && (n === C.target || (n == null ? void 0 : n.contains(C.target))) || o(C);
    };
    return f.jsx(xb, b({
      as: c.slots.basePopper,
      className: de(p.root, s),
      ownerState: c,
      open: t,
      anchorEl: n,
      transition: true,
      placement: l
    }, i, (_a2 = c.slotProps) == null ? void 0 : _a2.basePopper, {
      children: ({ TransitionProps: C, placement: y }) => f.jsx(dc, {
        onClickAway: m,
        mouseEvent: "onMouseDown",
        children: f.jsx(Ka, b({}, C, {
          style: {
            transformOrigin: vb[y]
          },
          onExited: g(C == null ? void 0 : C.onExited),
          children: f.jsx(qt, {
            children: r
          })
        }))
      })
    }));
  }
  const yb = [
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
  ], Sb = (e) => typeof e.getActions == "function";
  function Ib(e) {
    var _a2;
    const { colDef: t, id: n, hasFocus: o, tabIndex: r, position: l = "bottom-end", focusElementRef: s } = e, a = ge(e, yb), [i, d] = u.useState(-1), [c, p] = u.useState(false), h = Ee(), g = u.useRef(null), m = u.useRef(null), C = u.useRef(false), y = u.useRef({}), w = At(), x = nt(), E = nt(), H = ie();
    if (!Sb(t)) throw new Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
    const M = t.getActions(h.current.getRowParams(n)), $ = M.filter((I) => !I.props.showInMenu), z = M.filter((I) => I.props.showInMenu), D = $.length + (z.length ? 1 : 0);
    u.useLayoutEffect(() => {
      o || Object.entries(y.current).forEach(([I, T]) => {
        T == null ? void 0 : T.stop({}, () => {
          delete y.current[I];
        });
      });
    }, [
      o
    ]), u.useEffect(() => {
      if (i < 0 || !g.current || i >= g.current.children.length) return;
      g.current.children[i].focus({
        preventScroll: true
      });
    }, [
      i
    ]), u.useEffect(() => {
      o || (d(-1), C.current = false);
    }, [
      o
    ]), u.useImperativeHandle(s, () => ({
      focus() {
        if (!C.current) {
          const I = M.findIndex((T) => !T.props.disabled);
          d(I);
        }
      }
    }), [
      M
    ]), u.useEffect(() => {
      i >= D && d(D - 1);
    }, [
      i,
      D
    ]);
    const S = () => {
      p(true), d(D - 1), C.current = true;
    }, v = () => {
      p(false);
    }, k = (I) => {
      I.stopPropagation(), I.preventDefault(), c ? v() : S();
    }, O = (I) => (T) => {
      y.current[I] = T;
    }, R = (I, T) => (L) => {
      d(I), C.current = true, T && T(L);
    }, _ = (I) => {
      if (D <= 1) return;
      const T = (A, G) => {
        var _a3;
        if (A < 0 || A > M.length) return A;
        const V = (G === "left" ? -1 : 1) * (w ? -1 : 1);
        return ((_a3 = M[A + V]) == null ? void 0 : _a3.props.disabled) ? T(A + V, G) : A + V;
      };
      let L = i;
      I.key === "ArrowRight" ? L = T(i, "right") : I.key === "ArrowLeft" && (L = T(i, "left")), !(L < 0 || L >= D) && L !== i && (I.preventDefault(), I.stopPropagation(), d(L));
    }, F = (I) => {
      I.key === "Tab" && I.preventDefault(), [
        "Tab",
        "Escape"
      ].includes(I.key) && v();
    };
    return f.jsxs("div", b({
      role: "menu",
      ref: g,
      tabIndex: -1,
      className: P.actionsCell,
      onKeyDown: _
    }, a, {
      children: [
        $.map((I, T) => u.cloneElement(I, {
          key: T,
          touchRippleRef: O(T),
          onClick: R(T, I.props.onClick),
          tabIndex: i === T ? r : -1
        })),
        z.length > 0 && E && f.jsx(H.slots.baseIconButton, b({
          ref: m,
          id: E,
          "aria-label": h.current.getLocaleText("actionsCellMore"),
          "aria-haspopup": "menu",
          "aria-expanded": c,
          "aria-controls": c ? x : void 0,
          role: "menuitem",
          size: "small",
          onClick: k,
          touchRippleRef: O(E),
          tabIndex: i === $.length ? r : -1
        }, (_a2 = H.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: f.jsx(H.slots.moreActionsIcon, {
            fontSize: "small"
          })
        })),
        z.length > 0 && f.jsx(zs, {
          open: c,
          target: m.current,
          position: l,
          onClose: v,
          children: f.jsx(Ss, {
            id: x,
            className: P.menuList,
            onKeyDown: F,
            "aria-labelledby": E,
            variant: "menu",
            autoFocusItem: true,
            children: z.map((I, T) => u.cloneElement(I, {
              key: T,
              closeMenu: v
            }))
          })
        })
      ]
    }));
  }
  const Pb = (e) => f.jsx(Ib, b({}, e)), gl = "actions", Mb = b({}, fn, {
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
    renderCell: Pb,
    getApplyQuickFilterFn: void 0
  }), Pt = "auto-generated-group-node-root", Eo = /* @__PURE__ */ Symbol("mui.id_autogenerated"), kb = () => ({
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
  function Eb(e, t, n = "A row was provided without id in the rows prop:") {
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
    return Eb(o, e, n), o;
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
  }, qc = ({ tree: e, rowCountProp: t = 0 }) => {
    const n = e[Pt];
    return Math.max(t, n.children.length + (n.footerId == null ? 0 : 1));
  }, Yc = ({ apiRef: e, rowCountProp: t = 0, loadingProp: n, previousTree: o, previousTreeDepths: r, previousGroupsToFetch: l }) => {
    const s = e.current.caches.rows, { tree: a, treeDepths: i, dataRowIds: d, groupingName: c, groupsToFetch: p = [] } = e.current.applyStrategyProcessor("rowTreeCreation", {
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
      totalTopLevelRowCount: qc({
        tree: h.tree,
        rowCountProp: t
      }),
      groupingName: c,
      loading: n,
      groupsToFetch: p
    });
  }, Fo = (e) => e.type === "skeletonRow" || e.type === "footer" || e.type === "group" && e.isAutoGenerated || e.type === "pinnedRow" && e.isAutoGenerated, Gs = (e, t, n) => {
    const o = e[t];
    if (o.type !== "group") return [];
    const r = [];
    for (let l = 0; l < o.children.length; l += 1) {
      const s = o.children[l];
      (!n || !Fo(e[s])) && r.push(s);
      const a = Gs(e, s, n);
      for (let i = 0; i < a.length; i += 1) r.push(a[i]);
    }
    return !n && o.footerId != null && r.push(o.footerId), r;
  }, ta = ({ previousCache: e, getRowId: t, updates: n, groupKeys: o }) => {
    if (e.updates.type === "full") throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
    const r = /* @__PURE__ */ new Map();
    n.forEach((c) => {
      const p = hl(c, t, "A row was provided without id when calling updateRows():");
      r.has(p) ? r.set(p, b({}, r.get(p), c)) : r.set(p, c);
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
    r.forEach((c, p) => {
      const h = l.idToActionLookup[p];
      if (c._action === "delete") {
        if (h === "remove" || !s[p]) return;
        h != null && (i[h][p] = true), l.actions.remove.push(p), delete s[p], delete a[p];
        return;
      }
      const g = s[p];
      if (g) {
        h === "remove" ? (i.remove[p] = true, l.actions.modify.push(p)) : h == null && l.actions.modify.push(p), s[p] = b({}, g, c);
        return;
      }
      h === "remove" ? (i.remove[p] = true, l.actions.insert.push(p)) : h == null && l.actions.insert.push(p), s[p] = c, a[p] = p;
    });
    const d = Object.keys(i);
    for (let c = 0; c < d.length; c += 1) {
      const p = d[c], h = i[p];
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
  }, Xc = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
  function na(e, t, n) {
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
  const Qc = (e, t, n) => typeof e == "number" && e > 0 ? e : t, Fb = "__tree_data_group__", Jc = "__row_group_by_columns_group__", ml = "__detail_panel_toggle__";
  let Oe = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.VIRTUAL = 3] = "VIRTUAL", e;
  })({});
  const Tb = [
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
  ], Ob = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "booleanCell"
      ]
    }, $e, t);
  };
  function Db(e) {
    const { value: t, rowNode: n } = e, o = ge(e, Tb), r = Ee(), l = ie(), s = {
      classes: l.classes
    }, a = Ob(s), d = Q(r, no) > 0 && n.type === "group" && l.treeData === false, c = u.useMemo(() => t ? l.slots.booleanCellTrueIcon : l.slots.booleanCellFalseIcon, [
      l.slots.booleanCellFalseIcon,
      l.slots.booleanCellTrueIcon,
      t
    ]);
    return d && t === void 0 ? null : f.jsx(c, b({
      fontSize: "small",
      className: a.root,
      titleAccess: r.current.getLocaleText(t ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
      "data-value": !!t
    }, o));
  }
  const Rb = u.memo(Db), $b = (e) => e.field !== Jc && Fo(e.rowNode) ? "" : f.jsx(Rb, b({}, e)), Hb = [
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
  ], Lb = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "editBooleanCell"
      ]
    }, $e, t);
  };
  function jb(e) {
    var _a2;
    const { id: t, value: n, field: o, className: r, hasFocus: l, onValueChange: s } = e, a = ge(e, Hb), i = Ee(), d = u.useRef(null), c = nt(), [p, h] = u.useState(n), g = ie(), m = {
      classes: g.classes
    }, C = Lb(m), y = u.useCallback(async (w) => {
      const x = w.target.checked;
      s && await s(w, x), h(x), await i.current.setEditCellValue({
        id: t,
        field: o,
        value: x
      }, w);
    }, [
      i,
      o,
      t,
      s
    ]);
    return u.useEffect(() => {
      h(n);
    }, [
      n
    ]), St(() => {
      l && d.current.focus();
    }, [
      l
    ]), f.jsx("label", b({
      htmlFor: c,
      className: de(C.root, r)
    }, a, {
      children: f.jsx(g.slots.baseCheckbox, b({
        id: c,
        inputRef: d,
        checked: !!p,
        onChange: y,
        size: "small"
      }, (_a2 = g.slotProps) == null ? void 0 : _a2.baseCheckbox))
    }));
  }
  const Ab = (e) => f.jsx(jb, b({}, e)), zb = [
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
  }, Gb = se("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function _b(e) {
    var _a2, _b2, _c2;
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, clearButton: l, tabIndex: s, label: a, variant: i = "standard" } = e, d = ge(e, zb), [c, p] = u.useState(Wr(t.value)), h = ie(), g = nt(), m = nt(), C = ((_a2 = h.slotProps) == null ? void 0 : _a2.baseSelect) || {}, y = C.native ?? false, w = ((_b2 = h.slotProps) == null ? void 0 : _b2.baseSelectOption) || {}, x = u.useCallback((H) => {
      const M = Wr(H.target.value);
      p(M), n(b({}, t, {
        value: M
      }));
    }, [
      n,
      t
    ]);
    u.useEffect(() => {
      p(Wr(t.value));
    }, [
      t.value
    ]);
    const E = a ?? o.current.getLocaleText("filterPanelInputLabel");
    return f.jsxs(Gb, {
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
              value: c === void 0 ? "" : String(c),
              onChange: x,
              variant: i,
              notched: i === "outlined" ? true : void 0,
              native: y,
              displayEmpty: true,
              inputProps: {
                ref: r,
                tabIndex: s
              }
            }, d, C, {
              children: [
                f.jsx(h.slots.baseSelectOption, b({}, w, {
                  native: y,
                  value: "",
                  children: o.current.getLocaleText("filterValueAny")
                })),
                f.jsx(h.slots.baseSelectOption, b({}, w, {
                  native: y,
                  value: "true",
                  children: o.current.getLocaleText("filterValueTrue")
                })),
                f.jsx(h.slots.baseSelectOption, b({}, w, {
                  native: y,
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
  const Vb = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => {
        const t = Wr(e.value);
        return t === void 0 ? null : (n) => !!n === t;
      },
      InputComponent: _b
    }
  ], Nb = (e, t, n, o) => e ? o.current.getLocaleText("booleanCellTrueLabel") : o.current.getLocaleText("booleanCellFalseLabel"), Bb = (e) => {
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
  }, Zc = b({}, fn, {
    type: "boolean",
    display: "flex",
    align: "center",
    headerAlign: "center",
    renderCell: $b,
    renderEditCell: Ab,
    sortComparator: Hc,
    valueFormatter: Nb,
    filterOperators: Vb(),
    getApplyQuickFilterFn: void 0,
    aggregable: false,
    pastedValueParser: (e) => Bb(e)
  }), eu = (e) => e.sorting, Lo = be(eu, (e) => e.sortedRows), _s = Ue(Lo, Jt, pt, (e, t, n) => e.reduce((o, r) => {
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
  }, [])), un = be(eu, (e) => e.sortModel), Wb = Ue(un, (e) => e.reduce((n, o, r) => (n[o.field] = {
    sortDirection: o.sort,
    sortIndex: e.length > 1 ? r + 1 : void 0
  }, n), {}));
  Ue(Lo, (e) => e.reduce((t, n, o) => (t[n] = o, t), /* @__PURE__ */ Object.create(null)));
  const bl = (e) => e.filter, yt = be(bl, (e) => e.filterModel), Ub = be(yt, (e) => e.quickFilterValues), Kb = (e) => e.visibleRowsLookup, jo = be(bl, (e) => e.filteredRowsLookup);
  be(bl, (e) => e.filteredChildrenCountLookup);
  be(bl, (e) => e.filteredDescendantCountLookup);
  const Wn = Ue(Kb, _s, no, yt, Ub, (e, t, n, o, r) => n < 2 && !o.items.length && !(r == null ? void 0 : r.length) ? t : t.filter((l) => e[l.id] !== false)), yo = Ue(Wn, (e) => e.map((t) => t.id)), tu = Ue(jo, _s, (e, t) => t.filter((n) => e[n.id] !== false)), nu = Ue(tu, (e) => e.map((t) => t.id));
  Ue(yo, pt, (e, t) => {
    const n = {};
    let o = 0;
    return e.reduce((r, l) => {
      const s = t[l];
      return n[s.depth] || (n[s.depth] = 0), s.depth > o && (n[s.depth] = 0), o = s.depth, n[s.depth] += 1, r[l] = n[s.depth], r;
    }, {});
  });
  const ou = Ue(Wn, pt, no, (e, t, n) => n < 2 ? e : e.filter((o) => {
    var _a2;
    return ((_a2 = t[o.id]) == null ? void 0 : _a2.depth) === 0;
  })), Vs = be(Wn, (e) => e.length), Ns = be(ou, (e) => e.length), qb = be(tu, (e) => e.length);
  be(qb, Ns, (e, t) => e - t);
  const ru = Ue(yt, On, (e, t) => {
    var _a2;
    return (_a2 = e.items) == null ? void 0 : _a2.filter((n) => {
      var _a3, _b2;
      if (!n.field) return false;
      const o = t[n.field];
      if (!(o == null ? void 0 : o.filterOperators) || ((_a3 = o == null ? void 0 : o.filterOperators) == null ? void 0 : _a3.length) === 0) return false;
      const r = o.filterOperators.find((l) => l.value === n.operator);
      return r ? !r.InputComponent || n.value != null && ((_b2 = n.value) == null ? void 0 : _b2.toString()) !== "" : false;
    });
  }), Yb = Ue(ru, (e) => e.reduce((n, o) => (n[o.field] ? n[o.field].push(o) : n[o.field] = [
    o
  ], n), {})), _t = (e) => e.rowSelection, Xb = be(_t, (e) => e.length), Qb = Ue(_t, Jt, (e, t) => new Map(e.map((n) => [
    n,
    t[n]
  ]))), Gn = Ue(_t, (e) => e.reduce((t, n) => (t[n] = n, t), {}));
  function lu(e, t) {
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
  function Jb(e, t) {
    return be(pt, Lo, jo, Gn, (n, o, r, l) => {
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
      const d = o.findIndex((c) => c === e) + 1;
      for (let c = d; c < o.length && ((_a2 = n[o[c]]) == null ? void 0 : _a2.depth) > s.depth; c += 1) {
        const p = o[c];
        r[p] !== false && (a += 1, l[p] !== void 0 && (i += 1));
      }
      return {
        isIndeterminate: i > 0 && (i < a || l[e] === void 0),
        isChecked: t ? i > 0 : l[e] === e
      };
    });
  }
  function Bs(e) {
    return e.signature === nn.DataGrid ? e.checkboxSelection && e.disableMultipleRowSelection !== true : !e.disableMultipleRowSelection;
  }
  const Zb = (e, t) => {
    const n = [];
    let o = t;
    for (; o != null && o !== Pt; ) {
      const r = e[o];
      if (!r) return n;
      n.push(o), o = r.parent;
    }
    return n;
  }, eC = (e, t, n) => {
    const o = e[n];
    if (!o) return [];
    const r = o.parent;
    return r == null ? [] : e[r].children.filter((s) => s !== n && t[s] !== false);
  }, qo = (e, t, n, o, r, l, s = new Set(_t(e.current.state))) => {
    var _a2;
    const a = jo(e), i = /* @__PURE__ */ new Set([]);
    if (!(!o && !r || a[n] === false) && (o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && lu(e, n).forEach((p) => {
      l(p), i.add(p);
    }), r)) {
      const d = (p) => {
        if (!s.has(p) && !i.has(p)) return false;
        const h = t[p];
        return h ? h.type !== "group" ? true : h.children.every(d) : false;
      }, c = (p) => {
        var _a3;
        const h = eC(t, a, p);
        if (h.length === 0 || h.every(d)) {
          const m = (_a3 = t[p]) == null ? void 0 : _a3.parent;
          m != null && m !== Pt && e.current.isRowSelectable(m) && (l(m), i.add(m), c(m));
        }
      };
      c(n);
    }
  }, oa = (e, t, n, o, r, l) => {
    var _a2;
    const s = Gn(e);
    !r && !o || (r && Zb(t, n).forEach((i) => {
      s[i] === i && l(i);
    }), o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && lu(e, n).forEach((d) => {
      l(d);
    }));
  }, tC = [
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
  ], nC = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "checkboxInput"
      ]
    }, $e, t);
  }, oC = Ve(function(t, n) {
    var _a2, _b2;
    const { field: o, id: r, rowNode: l, hasFocus: s, tabIndex: a } = t, i = ge(t, tC), d = Ee(), c = ie(), p = {
      classes: c.classes
    }, h = nC(p), g = u.useRef(null), m = u.useRef(null), C = jt(g, n), y = (D) => {
      const S = {
        value: D.target.checked,
        id: r
      };
      d.current.publishEvent("rowSelectionCheckboxChange", S, D);
    };
    u.useLayoutEffect(() => {
      if (a === 0) {
        const D = d.current.getCellElement(r, o);
        D && (D.tabIndex = -1);
      }
    }, [
      d,
      a,
      r,
      o
    ]), u.useEffect(() => {
      var _a3, _b3;
      s ? (_b3 = (_a3 = g.current) == null ? void 0 : _a3.querySelector("input")) == null ? void 0 : _b3.focus({
        preventScroll: true
      }) : m.current && m.current.stop({});
    }, [
      s
    ]);
    const w = u.useCallback((D) => {
      D.key === " " && D.stopPropagation();
    }, []), x = d.current.isRowSelectable(r), E = Jb(r, ((_a2 = c.rowSelectionPropagation) == null ? void 0 : _a2.parents) ?? false), { isIndeterminate: H, isChecked: M } = Q(d, E, $s);
    if (l.type === "footer" || l.type === "pinnedRow") return null;
    const $ = c.indeterminateCheckboxAction === "select" ? M && !H : M, z = d.current.getLocaleText($ ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
    return f.jsx(c.slots.baseCheckbox, b({
      tabIndex: a,
      checked: $,
      onChange: y,
      className: h.root,
      inputProps: {
        "aria-label": z,
        name: "select_row"
      },
      onKeyDown: w,
      indeterminate: H,
      disabled: !x,
      touchRippleRef: m
    }, (_b2 = c.slotProps) == null ? void 0 : _b2.baseCheckbox, i, {
      ref: C
    }));
  }), rC = oC, Cl = (e) => e.focus, Rt = be(Cl, (e) => e.cell), lC = be(Cl, (e) => e.columnHeader);
  be(Cl, (e) => e.columnHeaderFilter);
  const nl = be(Cl, (e) => e.columnGroupHeader), wl = (e) => e.tabIndex, Ws = be(wl, (e) => e.cell), su = be(wl, (e) => e.columnHeader);
  be(wl, (e) => e.columnHeaderFilter);
  const sC = be(wl, (e) => e.columnGroupHeader);
  function Me(e, t, n) {
    const o = u.useRef(true);
    St(() => {
      o.current = false, e.current.register(n, t);
    }, [
      e,
      n,
      t
    ]), o.current && e.current.register(n, t);
  }
  function wt(e, t) {
    const n = u.useRef(null);
    if (n.current) return n.current;
    const o = e.current.getLogger(t);
    return n.current = o, o;
  }
  const iu = (e, t, n, o, r) => {
    const l = wt(e, "useNativeEventListener");
    Qe(e, "rootMount", () => {
      const s = typeof t == "function" ? t() : t.current;
      if (!(!s || !n || !o)) return l.debug(`Binding native ${n} event`), s.addEventListener(n, o, r), () => {
        l.debug(`Clearing native ${n} event`), s.removeEventListener(n, o, r);
      };
    });
  }, xr = (e) => {
    const t = u.useRef(true);
    t.current && (t.current = false, e());
  }, iC = () => {
  }, aC = (e, t) => {
    const n = u.useRef(false);
    St(() => n.current || !e ? iC : (n.current = true, t()), [
      n.current || e
    ]);
  }, cC = 100, uC = (e) => e ? 0 : 100, au = (e, t, n) => t > 0 && e > 0 ? Math.ceil(e / t) : e === -1 ? n + 2 : 0, cu = (e) => ({
    page: 0,
    pageSize: e ? 0 : 100
  }), dC = (e, t = 0) => t === 0 ? e : Math.max(Math.min(e, t - 1), 0), uu = (e, t) => {
    if (t === nn.DataGrid && e > cC) throw new Error([
      "MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.",
      "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
    ].join(`
`));
  }, pC = -1, vr = (e) => e.pagination, du = be(vr, (e) => e.enabled && e.paginationMode === "client"), kt = be(vr, (e) => e.paginationModel), mo = be(vr, (e) => e.rowCount), Jo = be(vr, (e) => e.meta), fC = be(kt, (e) => e.page), pu = be(kt, (e) => e.pageSize), fu = be(kt, mo, (e, t) => au(t, e.pageSize, e.page)), Us = Ue(du, kt, pt, no, Wn, ou, (e, t, n, o, r, l) => {
    var _a2;
    if (!e) return null;
    const s = l.length, a = Math.min(t.pageSize * t.page, s - 1), i = t.pageSize === pC ? s - 1 : Math.min(a + t.pageSize - 1, s - 1);
    if (a === -1 || i === -1) return null;
    if (o < 2) return {
      firstRowIndex: a,
      lastRowIndex: i
    };
    const d = l[a], c = i - a + 1, p = r.findIndex((m) => m.id === d.id);
    let h = p, g = 0;
    for (; h < r.length && g <= c; ) {
      const m = r[h], C = (_a2 = n[m.id]) == null ? void 0 : _a2.depth;
      C === void 0 ? h += 1 : ((g < c || C > 0) && (h += 1), C === 0 && (g += 1));
    }
    return {
      firstRowIndex: p,
      lastRowIndex: h - 1
    };
  }), gC = Ue(Wn, Us, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), gu = Ue(yo, Us, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), yr = Ue(du, Us, gC, Wn, (e, t, n, o) => e ? {
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
  }), hC = [
    "field",
    "colDef"
  ], mC = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "checkboxInput"
      ]
    }, $e, t);
  }, bC = Ve(function(t, n) {
    var _a2;
    const o = ge(t, hC), [, r] = u.useState(false), l = Ee(), s = ie(), a = {
      classes: s.classes
    }, i = mC(a), d = Q(l, su), c = Q(l, _t), p = Q(l, yo), h = Q(l, gu), g = u.useMemo(() => typeof s.isRowSelectable != "function" ? c : c.filter((D) => s.keepNonExistentRowsSelected ? true : l.current.getRow(D) ? s.isRowSelectable(l.current.getRowParams(D)) : false), [
      l,
      s.isRowSelectable,
      c,
      s.keepNonExistentRowsSelected
    ]), m = u.useMemo(() => (!s.pagination || !s.checkboxSelectionVisibleOnly || s.paginationMode === "server" ? p : h).reduce((S, v) => (S[v] = true, S), {}), [
      s.pagination,
      s.paginationMode,
      s.checkboxSelectionVisibleOnly,
      h,
      p
    ]), C = u.useMemo(() => g.filter((D) => m[D]).length, [
      g,
      m
    ]), y = C > 0 && C < Object.keys(m).length, w = C > 0, x = (D) => {
      const S = {
        value: D.target.checked
      };
      l.current.publishEvent("headerSelectionCheckboxChange", S);
    }, E = d !== null && d.field === t.field ? 0 : -1;
    u.useLayoutEffect(() => {
      const D = l.current.getColumnHeaderElement(t.field);
      E === 0 && D && (D.tabIndex = -1);
    }, [
      E,
      l,
      t.field
    ]);
    const H = u.useCallback((D) => {
      D.key === " " && l.current.publishEvent("headerSelectionCheckboxChange", {
        value: !w
      });
    }, [
      l,
      w
    ]), M = u.useCallback(() => {
      r((D) => !D);
    }, []);
    u.useEffect(() => l.current.subscribeEvent("rowSelectionChange", M), [
      l,
      M
    ]);
    const $ = s.indeterminateCheckboxAction === "select" ? w && !y : w, z = l.current.getLocaleText($ ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
    return f.jsx(s.slots.baseCheckbox, b({
      indeterminate: y,
      checked: $,
      onChange: x,
      className: i.root,
      inputProps: {
        "aria-label": z,
        name: "select_all_rows"
      },
      tabIndex: E,
      onKeyDown: H,
      disabled: !Bs(s)
    }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseCheckbox, o, {
      ref: n
    }));
  }), Sr = (e, t) => Eo in t ? t[Eo] : e.props.getRowId ? e.props.getRowId(t) : t.id, Ut = "__check__", Ao = b({}, Zc, {
    type: "custom",
    field: Ut,
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
      const r = Gn(o), l = Sr(o.current.state, t);
      return r[l] !== void 0;
    },
    renderHeader: (e) => f.jsx(bC, b({}, e)),
    renderCell: (e) => f.jsx(rC, b({}, e))
  }), CC = [
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
  function ra(e, t) {
    if (e == null) return "";
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "" : t === "date" ? n.toISOString().substring(0, 10) : t === "datetime-local" ? (n.setMinutes(n.getMinutes() - n.getTimezoneOffset()), n.toISOString().substring(0, 19)) : n.toISOString().substring(0, 10);
  }
  function so(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, InputProps: s, clearButton: a, tabIndex: i, disabled: d } = e, c = ge(e, CC), p = Xt(), [h, g] = u.useState(() => ra(t.value, o)), [m, C] = u.useState(false), y = nt(), w = ie(), x = u.useCallback((E) => {
      p.clear();
      const H = E.target.value;
      g(H), C(true), p.start(w.filterDebounceMs, () => {
        const M = new Date(H);
        n(b({}, t, {
          value: Number.isNaN(M.getTime()) ? void 0 : M
        })), C(false);
      });
    }, [
      n,
      t,
      w.filterDebounceMs,
      p
    ]);
    return u.useEffect(() => {
      const E = ra(t.value, o);
      g(E);
    }, [
      t.value,
      o
    ]), f.jsx(w.slots.baseTextField, b({
      fullWidth: true,
      id: y,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: h,
      onChange: x,
      variant: "standard",
      type: o || "text",
      InputLabelProps: {
        shrink: true
      },
      inputRef: l,
      InputProps: b({}, m || a ? {
        endAdornment: m ? f.jsx(w.slots.loadIcon, {
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
    }, c, (_a2 = w.slotProps) == null ? void 0 : _a2.baseTextField));
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
  const hu = (e) => [
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
  ], wC = [
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
  ], xC = se(ys)({
    fontSize: "inherit"
  }), vC = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "editInputCell"
      ]
    }, $e, t);
  };
  function yC(e) {
    const { id: t, value: n, field: o, colDef: r, hasFocus: l, inputProps: s, onValueChange: a } = e, i = ge(e, wC), d = r.type === "dateTime", c = Ee(), p = u.useRef(null), h = u.useMemo(() => {
      let H;
      n == null ? H = null : n instanceof Date ? H = n : H = new Date((n ?? "").toString());
      let M;
      return H == null || Number.isNaN(H.getTime()) ? M = "" : M = new Date(H.getTime() - H.getTimezoneOffset() * 60 * 1e3).toISOString().substr(0, d ? 16 : 10), {
        parsed: H,
        formatted: M
      };
    }, [
      n,
      d
    ]), [g, m] = u.useState(h), y = {
      classes: ie().classes
    }, w = vC(y), x = u.useCallback((H) => {
      if (H === "") return null;
      const [M, $] = H.split("T"), [z, D, S] = M.split("-"), v = /* @__PURE__ */ new Date();
      if (v.setFullYear(Number(z), Number(D) - 1, Number(S)), v.setHours(0, 0, 0, 0), $) {
        const [k, O] = $.split(":");
        v.setHours(Number(k), Number(O), 0, 0);
      }
      return v;
    }, []), E = u.useCallback(async (H) => {
      const M = H.target.value, $ = x(M);
      a && await a(H, $), m({
        parsed: $,
        formatted: M
      }), c.current.setEditCellValue({
        id: t,
        field: o,
        value: $
      }, H);
    }, [
      c,
      o,
      t,
      a,
      x
    ]);
    return u.useEffect(() => {
      m((H) => {
        var _a2, _b2;
        return h.parsed !== H.parsed && ((_a2 = h.parsed) == null ? void 0 : _a2.getTime()) !== ((_b2 = H.parsed) == null ? void 0 : _b2.getTime()) ? h : H;
      });
    }, [
      h
    ]), St(() => {
      l && p.current.focus();
    }, [
      l
    ]), f.jsx(xC, b({
      inputRef: p,
      fullWidth: true,
      className: w.root,
      type: d ? "datetime-local" : "date",
      inputProps: b({
        max: d ? "9999-12-31T23:59" : "9999-12-31"
      }, s),
      value: g.formatted,
      onChange: E
    }, i));
  }
  const mu = (e) => f.jsx(yC, b({}, e));
  function bu({ value: e, columnType: t, rowId: n, field: o }) {
    if (!(e instanceof Date)) throw new Error([
      `MUI X: \`${t}\` column type only accepts \`Date\` objects as values.`,
      "Use `valueGetter` to transform the value into a `Date` object.",
      `Row ID: ${n}, field: "${o}".`
    ].join(`
`));
  }
  const SC = (e, t, n, o) => {
    if (!e) return "";
    const r = Sr(o.current.state, t);
    return bu({
      value: e,
      columnType: "date",
      rowId: r,
      field: n.field
    }), e.toLocaleDateString();
  }, IC = (e, t, n, o) => {
    if (!e) return "";
    const r = Sr(o.current.state, t);
    return bu({
      value: e,
      columnType: "dateTime",
      rowId: r,
      field: n.field
    }), e.toLocaleString();
  }, PC = b({}, fn, {
    type: "date",
    sortComparator: Lc,
    valueFormatter: SC,
    filterOperators: hu(),
    renderEditCell: mu,
    pastedValueParser: (e) => new Date(e)
  }), MC = b({}, fn, {
    type: "dateTime",
    sortComparator: Lc,
    valueFormatter: IC,
    filterOperators: hu(true),
    renderEditCell: mu,
    pastedValueParser: (e) => new Date(e)
  }), An = (e) => e == null ? null : Number(e), kC = (e) => e == null || Number.isNaN(e) || e === "" ? null : (t) => An(t) === An(e), EC = () => [
    {
      value: "=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => An(t) === e.value,
      InputComponent: Yt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "!=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => An(t) !== e.value,
      InputComponent: Yt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) > e.value,
      InputComponent: Yt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) >= e.value,
      InputComponent: Yt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) < e.value,
      InputComponent: Yt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : An(t) <= e.value,
      InputComponent: Yt,
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
      InputComponent: Ac,
      InputComponentProps: {
        type: "number"
      }
    }
  ], FC = b({}, fn, {
    type: "number",
    align: "right",
    headerAlign: "right",
    sortComparator: Hc,
    valueParser: (e) => e === "" ? null : Number(e),
    valueFormatter: (e) => tb(e) ? e.toLocaleString() : e || "",
    filterOperators: EC(),
    getApplyQuickFilterFn: kC
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
  const TC = [
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
  ], OC = [
    "MenuProps"
  ];
  function DC(e) {
    return !!e.key;
  }
  function RC(e) {
    var _a2, _b2;
    const t = ie(), { id: n, value: o, field: r, row: l, colDef: s, hasFocus: a, error: i, onValueChange: d, initialOpen: c = t.editMode === yn.Cell } = e, p = ge(e, TC), h = Ee(), g = u.useRef(null), m = u.useRef(null), [C, y] = u.useState(c), x = (((_a2 = t.slotProps) == null ? void 0 : _a2.baseSelect) || {}).native ?? false, E = ((_b2 = t.slotProps) == null ? void 0 : _b2.baseSelect) || {}, { MenuProps: H } = E, M = ge(E, OC);
    if (St(() => {
      var _a3;
      a && ((_a3 = m.current) == null ? void 0 : _a3.focus());
    }, [
      a
    ]), !To(s)) return null;
    const $ = Jn(s, {
      id: n,
      row: l
    });
    if (!$) return null;
    const z = s.getOptionValue, D = s.getOptionLabel, S = async (O) => {
      if (!To(s) || !$) return;
      y(false);
      const R = O.target, _ = ol(R.value, $, z);
      d && await d(O, _), await h.current.setEditCellValue({
        id: n,
        field: r,
        value: _
      }, O);
    }, v = (O, R) => {
      if (t.editMode === yn.Row) {
        y(false);
        return;
      }
      if (R === "backdropClick" || O.key === "Escape") {
        const _ = h.current.getCellParams(n, r);
        h.current.publishEvent("cellEditStop", b({}, _, {
          reason: O.key === "Escape" ? cn.escapeKeyDown : cn.cellFocusOut
        }));
      }
    }, k = (O) => {
      DC(O) && O.key === "Enter" || y(true);
    };
    return !$ || !s ? null : f.jsx(t.slots.baseSelect, b({
      ref: g,
      inputRef: m,
      value: o,
      onChange: S,
      open: C,
      onOpen: k,
      MenuProps: b({
        onClose: v
      }, H),
      error: i,
      native: x,
      fullWidth: true
    }, p, M, {
      children: $.map((O) => {
        var _a3;
        const R = z(O);
        return u.createElement(t.slots.baseSelectOption, b({}, ((_a3 = t.slotProps) == null ? void 0 : _a3.baseSelectOption) || {}, {
          native: x,
          key: R,
          value: R
        }), D(O));
      })
    }));
  }
  const $C = (e) => f.jsx(RC, b({}, e)), HC = [
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
  ], LC = ({ column: e, OptionComponent: t, getOptionLabel: n, getOptionValue: o, isSelectNative: r, baseSelectOptionProps: l }) => [
    "",
    ...Jn(e) || []
  ].map((a) => {
    const i = o(a);
    let d = n(a);
    return d === "" && (d = "\u2003"), u.createElement(t, b({}, l, {
      native: r,
      key: i,
      value: i
    }), d);
  }), jC = se("div")({
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function la(e) {
    var _a2, _b2, _c2, _d2, _e;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, placeholder: s, tabIndex: a, label: i, variant: d = "standard", clearButton: c } = e, p = ge(e, HC), h = t.value ?? "", g = nt(), m = nt(), C = ie(), y = ((_b2 = (_a2 = C.slotProps) == null ? void 0 : _a2.baseSelect) == null ? void 0 : _b2.native) ?? false;
    let w = null;
    if (t.field) {
      const z = r.current.getColumn(t.field);
      To(z) && (w = z);
    }
    const x = w == null ? void 0 : w.getOptionValue, E = w == null ? void 0 : w.getOptionLabel, H = u.useMemo(() => Jn(w), [
      w
    ]), M = u.useCallback((z) => {
      let D = z.target.value;
      D = ol(D, H, x), n(b({}, t, {
        value: D
      }));
    }, [
      H,
      x,
      n,
      t
    ]);
    if (!To(w)) return null;
    const $ = i ?? r.current.getLocaleText("filterPanelInputLabel");
    return f.jsxs(jC, {
      children: [
        f.jsxs(C.slots.baseFormControl, {
          fullWidth: true,
          children: [
            f.jsx(C.slots.baseInputLabel, b({}, (_c2 = C.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: m,
              htmlFor: g,
              shrink: true,
              variant: d,
              children: $
            })),
            f.jsx(C.slots.baseSelect, b({
              id: g,
              label: $,
              labelId: m,
              value: h,
              onChange: M,
              variant: d,
              type: o || "text",
              inputProps: {
                tabIndex: a,
                ref: l,
                placeholder: s ?? r.current.getLocaleText("filterPanelInputPlaceholder")
              },
              native: y,
              notched: d === "outlined" ? true : void 0
            }, p, (_d2 = C.slotProps) == null ? void 0 : _d2.baseSelect, {
              children: LC({
                column: w,
                OptionComponent: C.slots.baseSelectOption,
                getOptionLabel: E,
                getOptionValue: x,
                isSelectNative: y,
                baseSelectOptionProps: (_e = C.slotProps) == null ? void 0 : _e.baseSelectOption
              })
            }))
          ]
        }),
        c
      ]
    });
  }
  const AC = [
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
  ], zC = [
    "key"
  ], GC = ec();
  function _C(e) {
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, color: l, error: s, helperText: a, size: i, variant: d = "standard" } = e, c = ge(e, AC), p = {
      color: l,
      error: s,
      helperText: a,
      size: i,
      variant: d
    }, h = nt(), g = ie();
    let m = null;
    if (t.field) {
      const M = o.current.getColumn(t.field);
      To(M) && (m = M);
    }
    const C = m == null ? void 0 : m.getOptionValue, y = m == null ? void 0 : m.getOptionLabel, w = u.useCallback((M, $) => C(M) === C($), [
      C
    ]), x = u.useMemo(() => Jn(m) || [], [
      m
    ]), E = u.useMemo(() => Array.isArray(t.value) ? t.value.reduce((M, $) => {
      const z = x.find((D) => C(D) === $);
      return z != null && M.push(z), M;
    }, []) : [], [
      C,
      t.value,
      x
    ]), H = u.useCallback((M, $) => {
      n(b({}, t, {
        value: $.map(C)
      }));
    }, [
      n,
      t,
      C
    ]);
    return f.jsx(uc, b({
      multiple: true,
      options: x,
      isOptionEqualToValue: w,
      filterOptions: GC,
      id: h,
      value: E,
      onChange: H,
      getOptionLabel: y,
      renderTags: (M, $) => M.map((z, D) => {
        const S = $({
          index: D
        }), { key: v } = S, k = ge(S, zC);
        return f.jsx(g.slots.baseChip, b({
          variant: "outlined",
          size: "small",
          label: y(z)
        }, k), v);
      }),
      renderInput: (M) => {
        var _a2;
        return f.jsx(g.slots.baseTextField, b({}, M, {
          label: o.current.getLocaleText("filterPanelInputLabel"),
          placeholder: o.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: b({}, M.InputLabelProps, {
            shrink: true
          }),
          inputRef: r,
          type: "singleSelect"
        }, p, (_a2 = g.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, c));
  }
  const ao = (e) => e == null || !js(e) ? e : e.value, VC = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => ao(t) === ao(e.value),
      InputComponent: la
    },
    {
      value: "not",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => ao(t) !== ao(e.value),
      InputComponent: la
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => {
        if (!Array.isArray(e.value) || e.value.length === 0) return null;
        const t = e.value.map(ao);
        return (n) => t.includes(ao(n));
      },
      InputComponent: _C
    }
  ], NC = (e) => typeof e[0] == "object", BC = (e) => js(e) ? e.value : e, WC = (e) => js(e) ? e.label : String(e), UC = b({}, fn, {
    type: "singleSelect",
    getOptionLabel: WC,
    getOptionValue: BC,
    valueFormatter(e, t, n, o) {
      const r = Sr(o.current.state, t);
      if (!To(n)) return "";
      const l = Jn(n, {
        id: r,
        row: t
      });
      if (e == null) return "";
      if (!l) return e;
      if (!NC(l)) return n.getOptionLabel(e);
      const s = l.find((a) => n.getOptionValue(a) === e);
      return s ? n.getOptionLabel(s) : "";
    },
    renderEditCell: $C,
    filterOperators: VC(),
    pastedValueParser: (e, t, n) => {
      const o = n, r = Jn(o) || [], l = o.getOptionValue;
      if (r.find((a) => l(a) === e)) return e;
    }
  }), KC = "string", qC = () => ({
    string: fn,
    number: FC,
    date: PC,
    dateTime: MC,
    boolean: Zc,
    singleSelect: UC,
    [gl]: Mb,
    custom: fn
  }), Ks = (e) => e.headerFiltering, YC = be(Ks, (e) => (e == null ? void 0 : e.enabled) ?? false), XC = be(Ks, (e) => e.editing), QC = be(Ks, (e) => e.menuOpen), xl = (e) => e.columnGrouping, Cu = Ue(xl, (e) => (e == null ? void 0 : e.unwrappedGroupingModel) ?? {}), wu = Ue(xl, (e) => (e == null ? void 0 : e.lookup) ?? {}), JC = Ue(xl, (e) => (e == null ? void 0 : e.headerStructure) ?? []), Ir = be(xl, (e) => (e == null ? void 0 : e.maxDepth) ?? 0), xu = [
    "maxWidth",
    "minWidth",
    "width",
    "flex"
  ], jl = qC();
  function ZC({ initialFreeSpace: e, totalFlexUnits: t, flexColumns: n }) {
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
      r.frozenFields.forEach((c) => {
        a -= r.all[c].computedWidth, i -= r.all[c].flex;
      });
      for (let c = 0; c < n.length; c += 1) {
        const p = n[c];
        if (r.all[p.field] && r.all[p.field].frozen === true) continue;
        let g = a / i * p.flex;
        g < p.minWidth ? (d += p.minWidth - g, g = p.minWidth, s.min[p.field] = true) : g > p.maxWidth && (d += p.maxWidth - g, g = p.maxWidth, s.max[p.field] = true), r.all[p.field] = {
          frozen: false,
          computedWidth: g,
          flex: p.flex
        };
      }
      d < 0 ? Object.keys(s.max).forEach((c) => {
        r.freeze(c);
      }) : d > 0 ? Object.keys(s.min).forEach((c) => {
        r.freeze(c);
      }) : n.forEach(({ field: c }) => {
        r.freeze(c);
      }), l();
    }
    return l(), r.all;
  }
  const cs = (e, t) => {
    const n = {};
    let o = 0, r = 0;
    const l = [];
    e.orderedFields.forEach((i) => {
      let d = e.lookup[i], c = 0, p = false;
      e.columnVisibilityModel[i] !== false && (d.flex && d.flex > 0 ? (o += d.flex, p = true) : c = Vt(d.width || fn.width, d.minWidth || fn.minWidth, d.maxWidth || fn.maxWidth), r += c), d.computedWidth !== c && (d = b({}, d, {
        computedWidth: c
      })), p && l.push(d), n[i] = d;
    });
    const s = t === void 0 ? 0 : t.viewportOuterSize.width - (t.hasScrollY ? t.scrollbarSize : 0), a = Math.max(s - r, 0);
    if (o > 0 && s > 0) {
      const i = ZC({
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
  }, ew = (e, t) => {
    if (!t) return e;
    const { orderedFields: n = [], dimensions: o = {} } = t, r = Object.keys(o);
    if (r.length === 0 && n.length === 0) return e;
    const l = {}, s = [];
    for (let c = 0; c < n.length; c += 1) {
      const p = n[c];
      e.lookup[p] && (l[p] = true, s.push(p));
    }
    const a = s.length === 0 ? e.orderedFields : [
      ...s,
      ...e.orderedFields.filter((c) => !l[c])
    ], i = b({}, e.lookup);
    for (let c = 0; c < r.length; c += 1) {
      const p = r[c], h = b({}, i[p], {
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
  function sa(e) {
    let t = jl[KC];
    return e && jl[e] && (t = jl[e]), t;
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
      const c = xn(e.current.state);
      s = {
        orderedFields: r ? [] : [
          ...c.orderedFields
        ],
        lookup: b({}, c.lookup),
        columnVisibilityModel: o
      };
    }
    let a = {};
    r && !l && (a = Object.keys(s.lookup).reduce((c, p) => b({}, c, {
      [p]: false
    }), {})), t.forEach((c) => {
      const { field: p } = c;
      a[p] = true;
      let h = s.lookup[p];
      h == null ? (h = b({}, sa(c.type), {
        field: p,
        hasBeenResized: false
      }), s.orderedFields.push(p)) : r && s.orderedFields.push(p), h && h.type !== c.type && (h = b({}, sa(c.type), {
        field: p
      }));
      let g = h.hasBeenResized;
      xu.forEach((m) => {
        c[m] !== void 0 && (g = true, c[m] === -1 && (c[m] = 1 / 0));
      }), s.lookup[p] = Cd(h, b({}, c, {
        hasBeenResized: g
      }));
    }), r && !l && Object.keys(s.lookup).forEach((c) => {
      a[c] || delete s.lookup[c];
    });
    const i = e.current.unstable_applyPipeProcessors("hydrateColumns", s), d = ew(i, n);
    return cs(d, ((_b2 = (_a2 = e.current).getRootDimensions) == null ? void 0 : _b2.call(_a2)) ?? void 0);
  };
  function tw({ firstColumnToRender: e, apiRef: t, firstRowToRender: n, lastRowToRender: o, visibleRows: r }) {
    let l = e, s = false;
    for (; !s; ) {
      s = true;
      for (let a = n; a < o; a += 1) if (r[a]) {
        const d = r[a].id, c = t.current.unstable_getCellColSpanInfo(d, l);
        if (c && c.spannedByColSpan && c.leftVisibleCellIndex < l) {
          l = c.leftVisibleCellIndex, s = false;
          break;
        }
      }
    }
    return l;
  }
  function vl(e, t) {
    if (t.unstable_listView) return 0;
    const n = Do(e), o = Ir(e), r = YC(e), l = Math.floor(t.columnHeaderHeight * n), s = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * n), a = r ? Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * n) : 0;
    return l + s * o + a;
  }
  const zo = (e) => e.rowsMeta, rl = 1, vu = 1.5, nw = (e) => {
    const { scrollDirection: t, classes: n } = e, o = {
      root: [
        "scrollArea",
        `scrollArea--${t}`
      ]
    };
    return me(o, $e, n);
  }, ow = Je("div", {
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
  })), rw = Cr(mt, (e, t) => t === "left" ? e.leftPinnedWidth : t === "right" ? e.rightPinnedWidth + (e.hasScrollX ? e.scrollbarSize : 0) : 0);
  function lw(e) {
    const t = Ee(), [n, o] = u.useState("none");
    return oe(t, "columnHeaderDragStart", () => o("horizontal")), oe(t, "columnHeaderDragEnd", () => o("none")), oe(t, "rowDragStart", () => o("vertical")), oe(t, "rowDragEnd", () => o("none")), n === "none" ? null : n === "horizontal" ? f.jsx(sw, b({}, e)) : f.jsx(iw, b({}, e));
  }
  function sw(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = u.useRef(null), r = Ee(), l = Xt(), s = Q(r, Do), a = Q(r, fl), i = ar(r, rw, t), d = () => {
      const C = mt(r.current.state);
      if (t === "left") return n.current.left > 0;
      if (t === "right") {
        const y = a - C.viewportInnerSize.width;
        return n.current.left < y;
      }
      return false;
    }, c = ie(), p = vl(r, c), h = Math.floor(c.columnHeaderHeight * s), g = b({
      height: h,
      top: p - h
    }, t === "left" ? {
      left: i
    } : {}, t === "right" ? {
      right: i
    } : {}), m = Ke((C) => {
      let y;
      if (C.preventDefault(), t === "left") y = C.clientX - o.current.getBoundingClientRect().right;
      else if (t === "right") y = Math.max(1, C.clientX - o.current.getBoundingClientRect().left);
      else throw new Error("MUI X: Wrong drag direction");
      y = (y - rl) * vu + rl, l.start(0, () => {
        r.current.scroll({
          left: n.current.left + y,
          top: n.current.top
        });
      });
    });
    return f.jsx(yu, b({}, e, {
      ref: o,
      getCanScrollMore: d,
      style: g,
      handleDragOver: m
    }));
  }
  function iw(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = u.useRef(null), r = Ee(), l = Xt(), s = Q(r, zo), a = () => {
      const h = mt(r.current.state);
      if (t === "up") return n.current.top > 0;
      if (t === "down") {
        const m = (s.currentPageTotalHeight || 0) - h.viewportInnerSize.height - h.scrollbarSize;
        return n.current.top < m;
      }
      return false;
    }, i = ie(), d = vl(r, i), c = {
      top: t === "up" ? d : void 0,
      bottom: t === "down" ? 0 : void 0
    }, p = Ke((h) => {
      let g;
      if (h.preventDefault(), t === "up") g = h.clientY - o.current.getBoundingClientRect().bottom;
      else if (t === "down") g = Math.max(1, h.clientY - o.current.getBoundingClientRect().top);
      else throw new Error("MUI X: Wrong drag direction");
      g = (g - rl) * vu + rl, l.start(0, () => {
        r.current.scroll({
          left: n.current.left,
          top: n.current.top + g
        });
      });
    });
    return f.jsx(yu, b({}, e, {
      ref: o,
      getCanScrollMore: a,
      style: c,
      handleDragOver: p
    }));
  }
  const yu = Ve(function(t, n) {
    const { scrollDirection: o, getCanScrollMore: r, style: l, handleDragOver: s } = t, a = Ee(), [i, d] = u.useState(r), c = ie(), p = b({}, c, {
      scrollDirection: o
    }), h = nw(p);
    return oe(a, "scrollPositionChange", () => {
      d(r);
    }), i ? f.jsx(ow, {
      ref: n,
      className: h.root,
      ownerState: p,
      onDragOver: s,
      style: l
    }) : null;
  }), Gr = Tn(lw);
  var qs = {}, Su = {
    exports: {}
  }, Iu = {
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
  })(Iu);
  var aw = Iu.exports;
  (function(e) {
    var t = aw.default;
    function n(o, r) {
      if (typeof WeakMap == "function") var l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
      return (e.exports = n = function(i, d) {
        if (!d && i && i.__esModule) return i;
        var c, p, h = {
          __proto__: null,
          default: i
        };
        if (i === null || t(i) != "object" && typeof i != "function") return h;
        if (c = d ? s : l) {
          if (c.has(i)) return c.get(i);
          c.set(i, h);
        }
        for (var g in i) g !== "default" && {}.hasOwnProperty.call(i, g) && ((p = (c = Object.defineProperty) && Object.getOwnPropertyDescriptor(i, g)) && (p.get || p.set) ? c(h, g, p) : h[g] = i[g]);
        return h;
      }, e.exports.__esModule = true, e.exports.default = e.exports)(o, r);
    }
    e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
  })(Su);
  var cw = Su.exports, uw = cw.default;
  Object.defineProperty(qs, "__esModule", {
    value: true
  });
  var Pu = qs.default = void 0, dw = uw(u);
  Pu = qs.default = parseInt(dw.version, 10);
  const Mu = u.createContext(void 0);
  function an() {
    const e = u.useContext(Mu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid private context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const _n = (e, t) => yr(e), Ys = (e, t) => Q(e, yr), pw = typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "empty", fw = pw.includes("firefox"), yl = (e) => e.virtualization;
  be(yl, (e) => e.enabled);
  const ku = be(yl, (e) => e.enabledForColumns), gw = be(yl, (e) => e.enabledForRows), Pr = be(yl, (e) => e.renderContext), hw = Ue((e) => e.virtualization.renderContext.firstColumnIndex, (e) => e.virtualization.renderContext.lastColumnIndex, (e, t) => ({
    firstColumnIndex: e,
    lastColumnIndex: t
  })), us = {
    firstRowIndex: 0,
    lastRowIndex: 0,
    firstColumnIndex: 0,
    lastColumnIndex: 0
  }, mw = (e, t) => {
    const { disableVirtualization: n, autoHeight: o } = t;
    return b({}, e, {
      virtualization: {
        enabled: !n,
        enabledForColumns: !n,
        enabledForRows: !n && !o,
        renderContext: us
      }
    });
  };
  function bw(e, t) {
    const n = (l) => {
      e.current.setState((s) => b({}, s, {
        virtualization: b({}, s.virtualization, {
          enabled: l,
          enabledForColumns: l,
          enabledForRows: l && !t.autoHeight
        })
      }));
    };
    Me(e, {
      unstable_setVirtualization: n,
      unstable_setColumnVirtualization: (l) => {
        e.current.setState((s) => b({}, s, {
          virtualization: b({}, s.virtualization, {
            enabledForColumns: l
          })
        }));
      }
    }, "public"), u.useEffect(() => {
      n(!t.disableVirtualization);
    }, [
      t.disableVirtualization,
      t.autoHeight
    ]);
  }
  const Xs = (e) => e.rowSpanning, Eu = be(Xs, (e) => e.hiddenCells), Cw = be(Xs, (e) => e.spannedCells), ww = be(Xs, (e) => e.hiddenCellOriginMap), Oo = (e) => e.listViewColumn, xw = Sc(Rt, Pr, yr, st, Jt, (e, t, n, o, r) => {
    if (!e) return false;
    const l = r[e.id];
    if (!l) return false;
    const s = n.rowToIndexMap.get(l), a = o.slice(t.firstColumnIndex, t.lastColumnIndex).findIndex((d) => d.field === e.field);
    return !(s !== void 0 && a !== -1 && s >= t.firstRowIndex && s <= t.lastRowIndex);
  }), Fu = Ue(xw, st, yr, Jt, Rt, (e, t, n, o, r) => {
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
  const ll = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), Al = 50;
  var ct = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e;
  })(ct || {});
  const ia = {
    top: 0,
    left: 0
  }, vw = Object.freeze(/* @__PURE__ */ new Map()), yw = (e, t, n, o, r) => ({
    direction: ct.NONE,
    buffer: Ou(e, ct.NONE, t, n, o, r)
  }), Sw = () => {
    var _a2;
    const e = an(), t = ie(), { unstable_listView: n } = t, o = Q(e, () => n ? [
      Oo(e.current.state)
    ] : st(e)), r = Q(e, gw) && !ll, l = Q(e, ku) && !ll, s = Q(e, Ro), a = Ho(e), i = n ? tl : a, d = s.bottom.length > 0, [c, p] = u.useState(vw), h = At(), g = Q(e, Gn), m = Ys(e), C = e.current.mainElementRef, y = e.current.virtualScrollerRef, w = e.current.virtualScrollbarVerticalRef, x = e.current.virtualScrollbarHorizontalRef, E = Q(e, cb), H = u.useRef(false), M = Q(e, Hs), $ = Q(e, ym), z = Q(e, fl), D = Q(e, Iw), S = Q(e, Dc), v = Q(e, Oc), k = u.useRef(null), O = u.useCallback((Y) => {
      if (C.current = Y, !Y) return;
      const re = Y.getBoundingClientRect();
      let ye = {
        width: bo(re.width, 1),
        height: bo(re.height, 1)
      };
      if ((!k.current || ye.width !== k.current.width && ye.height !== k.current.height) && (k.current = ye, e.current.publishEvent("resize", ye)), typeof ResizeObserver > "u") return;
      const Z = new ResizeObserver((Se) => {
        const ee = Se[0];
        if (!ee) return;
        const ve = {
          width: bo(ee.contentRect.width, 1),
          height: bo(ee.contentRect.height, 1)
        };
        ve.width === ye.width && ve.height === ye.height || (e.current.publishEvent("resize", ve), ye = ve);
      });
      if (Z.observe(Y), Pu >= 19) return () => {
        C.current = null, Z.disconnect();
      };
    }, [
      e,
      C
    ]), R = u.useRef(((_a2 = t.initialState) == null ? void 0 : _a2.scroll) ?? ia), _ = u.useRef(false), F = u.useRef(ia), I = u.useRef(us), T = Q(e, Pr), L = Q(e, Fu), A = Xt(), G = u.useRef(void 0), j = Sn(() => yw(h, t.rowBufferPx, t.columnBufferPx, M * 15, Al * 6)).current, V = u.useCallback((Y) => {
      if (da(Y, e.current.state.virtualization.renderContext)) return;
      const re = Y.firstRowIndex !== I.current.firstRowIndex || Y.lastRowIndex !== I.current.lastRowIndex;
      e.current.setState((Z) => b({}, Z, {
        virtualization: b({}, Z.virtualization, {
          renderContext: Y
        })
      })), mt(e.current.state).isReady && re && (I.current = Y, e.current.publishEvent("renderedRowsIntervalChange", Y)), F.current = R.current;
    }, [
      e
    ]), U = Ke(() => {
      const Y = y.current;
      if (!Y) return;
      const re = mt(e.current.state), ye = Math.ceil(re.minimumSize.height - re.viewportOuterSize.height), Z = Math.ceil(re.minimumSize.width - re.viewportInnerSize.width), Se = {
        top: Vt(Y.scrollTop, 0, ye),
        left: h ? Vt(Y.scrollLeft, -Z, 0) : Vt(Y.scrollLeft, 0, Z)
      }, ee = Se.left - R.current.left, ve = Se.top - R.current.top, Ce = ee !== 0 || ve !== 0;
      R.current = Se;
      const Fe = Ce ? kw(ee, ve) : ct.NONE, Ne = Math.abs(R.current.top - F.current.top), Be = Math.abs(R.current.left - F.current.left), ze = Ne >= M || Be >= Al, He = j.direction !== Fe;
      if (!(ze || He)) return T;
      if (He) switch (Fe) {
        case ct.NONE:
        case ct.LEFT:
        case ct.RIGHT:
          G.current = void 0;
          break;
        default:
          G.current = T;
          break;
      }
      j.direction = Fe, j.buffer = Ou(h, Fe, t.rowBufferPx, t.columnBufferPx, M * 15, Al * 6);
      const We = aa(e, t, r, l), Ge = ca(We, R.current, j);
      return da(Ge, T) || (wd.flushSync(() => {
        V(Ge);
      }), A.start(1e3, U)), Ge;
    }), W = () => {
      if (!mt(e.current.state).isReady && (r || l)) return;
      const Y = aa(e, t, r, l), re = ca(Y, R.current, j);
      G.current = void 0, V(re);
    }, K = Ke(() => {
      if (_.current) {
        _.current = false;
        return;
      }
      const Y = U();
      e.current.publishEvent("scrollPositionChange", {
        top: R.current.top,
        left: R.current.left,
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
      const ve = Y.rows ?? m.rows, Ce = ye.firstRowIndex, Fe = Math.min(ye.lastRowIndex, ve.length), Ne = Y.rows ? qi(0, Y.rows.length) : qi(Ce, Fe);
      let Be = -1;
      !Se && L && (L.rowIndex < Ce && (Ne.unshift(L.rowIndex), Be = L.rowIndex), L.rowIndex > Fe && (Ne.push(L.rowIndex), Be = L.rowIndex));
      const ze = [], He = (_a3 = t.slotProps) == null ? void 0 : _a3.row, Le = Bn(e);
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
        const ut = We === Be, In = (L == null ? void 0 : L.rowIndex) === xe, Ot = Tu(Le, xt, i.left.length), Pn = rt && Y.position === "top", It = xt.firstColumnIndex, zt = xt.lastColumnIndex;
        if (ze.push(f.jsx(t.slots.row, b({
          row: fe,
          rowId: Ge,
          index: xe,
          selected: he,
          offsetLeft: Ot,
          columnsTotalWidth: z,
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
          scrollbarWidth: S,
          gridHasFiller: v
        }, He), Ge)), ut) return;
        const Et = c.get(Ge);
        Et && ze.push(Et), Y.position === void 0 && rt && ze.push((_c2 = (_b2 = e.current).getInfiniteLoadingTriggerElement) == null ? void 0 : _c2.call(_b2, {
          lastRowId: Ge
        }));
      }), ze;
    }, ne = u.useMemo(() => ({
      overflowX: !D || n ? "hidden" : void 0,
      overflowY: t.autoHeight ? "hidden" : void 0
    }), [
      D,
      t.autoHeight,
      n
    ]), ae = u.useMemo(() => {
      const Y = {
        width: D ? z : "auto",
        flexBasis: $,
        flexShrink: 0
      };
      return Y.flexBasis === 0 && (Y.flexBasis = Xc), Y;
    }, [
      z,
      $,
      D
    ]), we = u.useCallback((Y) => {
      Y && e.current.publishEvent("virtualScrollerContentSizeChange", {
        columnsTotalWidth: z,
        contentHeight: $
      });
    }, [
      e,
      z,
      $
    ]);
    return St(() => {
      var _a3, _b2;
      H.current && ((_b2 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a3));
    }, [
      e,
      l,
      r
    ]), St(() => {
      n && (y.current.scrollLeft = 0);
    }, [
      n,
      y
    ]), aC(T !== us, () => {
      var _a3;
      if (e.current.publishEvent("scrollPositionChange", {
        top: R.current.top,
        left: R.current.left,
        renderContext: T
      }), H.current = true, ((_a3 = t.initialState) == null ? void 0 : _a3.scroll) && y.current) {
        const Y = y.current, { top: re, left: ye } = t.initialState.scroll, Z = {
          top: !(re > 0),
          left: !(ye > 0)
        };
        if (!Z.left && z && (Y.scrollLeft = ye, _.current = true, Z.left = true), !Z.top && $ && (Y.scrollTop = re, _.current = true, Z.top = true), !Z.top || !Z.left) {
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
        ref: y,
        onScroll: K,
        onWheel: B,
        onTouchMove: te,
        style: ne,
        role: "presentation",
        tabIndex: fw ? -1 : void 0
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
        ref: w,
        scrollPosition: R
      }),
      getScrollbarHorizontalProps: () => ({
        ref: x,
        scrollPosition: R
      }),
      getScrollAreaProps: () => ({
        scrollPosition: R
      })
    };
  };
  function Iw(e) {
    return e.dimensions.viewportOuterSize.width > 0 && e.dimensions.columnsTotalWidth > e.dimensions.viewportOuterSize.width;
  }
  function aa(e, t, n, o) {
    const r = mt(e.current.state), l = _n(e), s = t.unstable_listView ? [
      Oo(e.current.state)
    ] : st(e), a = ww(e), i = e.current.state.rows.dataRowIds.at(-1), d = s.at(-1);
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
      columnPositions: Bn(e),
      rows: l.rows,
      range: l.range,
      pinnedColumns: Ho(e),
      visibleColumns: s,
      hiddenCellsOriginMap: a,
      listView: t.unstable_listView ?? false,
      virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight
    };
  }
  function ca(e, t, n) {
    const o = {
      firstRowIndex: 0,
      lastRowIndex: e.rows.length,
      firstColumnIndex: 0,
      lastColumnIndex: e.visibleColumns.length
    }, { top: r, left: l } = t, s = Math.abs(l) + e.leftPinnedWidth;
    if (e.enabledForRows) {
      let i = Math.min(ua(e, r, {
        atStart: true,
        lastPosition: e.rowsMeta.positions[e.rowsMeta.positions.length - 1] + e.lastRowHeight
      }), e.rowsMeta.positions.length - 1);
      const d = e.hiddenCellsOriginMap[i];
      if (d) {
        const p = Math.min(...Object.values(d));
        i = Math.min(i, p);
      }
      const c = e.autoHeight ? i + e.rows.length : ua(e, r + e.viewportInnerHeight);
      o.firstRowIndex = i, o.lastRowIndex = c;
    }
    if (e.listView) return b({}, o, {
      lastColumnIndex: 1
    });
    if (e.enabledForColumns) {
      let i = 0, d = e.columnPositions.length, c = false;
      const [p, h] = ds({
        firstIndex: o.firstRowIndex,
        lastIndex: o.lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: e.rows.length,
        bufferBefore: n.buffer.rowBefore,
        bufferAfter: n.buffer.rowAfter,
        positions: e.rowsMeta.positions,
        lastSize: e.lastRowHeight
      });
      if (!e.virtualizeColumnsWithAutoRowHeight) for (let g = p; g < h && !c; g += 1) {
        const m = e.rows[g];
        c = e.apiRef.current.rowHasAutoHeight(m.id);
      }
      (!c || e.virtualizeColumnsWithAutoRowHeight) && (i = Vn(s, e.columnPositions, {
        atStart: true,
        lastPosition: e.columnsTotalWidth
      }), d = Vn(s + e.viewportInnerWidth, e.columnPositions)), o.firstColumnIndex = i, o.lastColumnIndex = d;
    }
    return Pw(e, o, n);
  }
  function ua(e, t, n) {
    var _a2, _b2;
    const o = e.apiRef.current.getLastMeasuredRowIndex();
    let r = o === 1 / 0;
    ((_a2 = e.range) == null ? void 0 : _a2.lastRowIndex) && !r && (r = o >= e.range.lastRowIndex);
    const l = Vt(o - (((_b2 = e.range) == null ? void 0 : _b2.firstRowIndex) || 0), 0, e.rowsMeta.positions.length);
    return r || e.rowsMeta.positions[l] >= t ? Vn(t, e.rowsMeta.positions, n) : Mw(t, e.rowsMeta.positions, l, n);
  }
  function Pw(e, t, n) {
    const [o, r] = ds({
      firstIndex: t.firstRowIndex,
      lastIndex: t.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: e.rows.length,
      bufferBefore: n.buffer.rowBefore,
      bufferAfter: n.buffer.rowAfter,
      positions: e.rowsMeta.positions,
      lastSize: e.lastRowHeight
    }), [l, s] = ds({
      firstIndex: t.firstColumnIndex,
      lastIndex: t.lastColumnIndex,
      minFirstIndex: e.pinnedColumns.left.length,
      maxLastIndex: e.visibleColumns.length - e.pinnedColumns.right.length,
      bufferBefore: n.buffer.columnBefore,
      bufferAfter: n.buffer.columnAfter,
      positions: e.columnPositions,
      lastSize: e.lastColumnWidth
    }), a = tw({
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
  function Vn(e, t, n = void 0, o = 0, r = t.length) {
    if (t.length <= 0) return -1;
    if (o >= r) return o;
    const l = o + Math.floor((r - o) / 2), s = t[l];
    let a;
    if (n == null ? void 0 : n.atStart) {
      const i = (l === t.length - 1 ? n.lastPosition : t[l + 1]) - s;
      a = e - i < s;
    } else a = e <= s;
    return a ? Vn(e, t, n, o, l) : Vn(e, t, n, l + 1, r);
  }
  function Mw(e, t, n, o = void 0) {
    let r = 1;
    for (; n < t.length && Math.abs(t[n]) < e; ) n += r, r *= 2;
    return Vn(e, t, o, Math.floor(n / 2), Math.min(n, t.length));
  }
  function ds({ firstIndex: e, lastIndex: t, bufferBefore: n, bufferAfter: o, minFirstIndex: r, maxLastIndex: l, positions: s, lastSize: a }) {
    const i = s[e] - n, d = s[t] + o, c = Vn(i, s, {
      atStart: true,
      lastPosition: s[s.length - 1] + a
    }), p = Vn(d, s);
    return [
      Vt(c, r, l),
      Vt(p, r, l)
    ];
  }
  function da(e, t) {
    return e === t ? true : e.firstRowIndex === t.firstRowIndex && e.lastRowIndex === t.lastRowIndex && e.firstColumnIndex === t.firstColumnIndex && e.lastColumnIndex === t.lastColumnIndex;
  }
  function Tu(e, t, n) {
    const o = (e[t.firstColumnIndex] ?? 0) - (e[n] ?? 0);
    return Math.abs(o);
  }
  function kw(e, t) {
    return e === 0 && t === 0 ? ct.NONE : Math.abs(t) >= Math.abs(e) ? t > 0 ? ct.DOWN : ct.UP : e > 0 ? ct.RIGHT : ct.LEFT;
  }
  function Ou(e, t, n, o, r, l) {
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
  const Ew = () => {
    var _a2, _b2;
    const e = Ee(), t = ie(), n = Q(e, wr), o = Q(e, Vs), r = Q(e, Rc), l = n === 0 && r === 0, s = Q(e, Nm), a = !s && l, i = !s && n > 0 && o === 0;
    let d = null, c = null;
    return a && (d = "noRowsOverlay"), i && (d = "noResultsOverlay"), s && (d = "loadingOverlay", c = ((_b2 = (_a2 = t.slotProps) == null ? void 0 : _a2.loadingOverlay) == null ? void 0 : _b2[l ? "noRowsVariant" : "variant"]) || null), {
      overlayType: d,
      loadingOverlayVariant: c
    };
  }, Fw = Je("div", {
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
  } : {}), Tw = Je("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapperInner",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapperInner
  })({}), Ow = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "overlayWrapper"
      ],
      inner: [
        "overlayWrapperInner"
      ]
    }, $e, t);
  };
  function Dw(e) {
    const t = Ee(), n = ie(), o = Q(t, mt);
    let r = Math.max(o.viewportOuterSize.height - o.topContainerHeight - o.bottomContainerHeight - (o.hasScrollX ? o.scrollbarSize : 0), 0);
    r === 0 && (r = Xc);
    const l = Ow(b({}, e, {
      classes: n.classes
    }));
    return f.jsx(Fw, b({
      className: de(l.root)
    }, e, {
      children: f.jsx(Tw, b({
        className: de(l.inner),
        style: {
          height: r,
          width: o.viewportOuterSize.width
        }
      }, e))
    }));
  }
  function Rw(e) {
    var _a2, _b2;
    const { overlayType: t } = e, n = ie();
    if (!t) return null;
    const o = (_a2 = n.slots) == null ? void 0 : _a2[t], r = (_b2 = n.slotProps) == null ? void 0 : _b2[t];
    return f.jsx(Dw, b({}, e, {
      children: f.jsx(o, b({}, r))
    }));
  }
  const Ur = (e) => e.columnMenu;
  function $w() {
    var _a2;
    const e = an(), t = ie(), n = Q(e, st), o = Q(e, Yb), r = Q(e, Wb), l = Q(e, su), s = Q(e, () => Ws(e) === null), a = Q(e, sC), i = Q(e, lC), d = Q(e, nl), c = Q(e, Ir), p = Q(e, Ur), h = Q(e, Zt), g = Q(e, JC), m = !(a === null && l === null && s), C = e.current.columnHeadersContainerRef;
    return f.jsx(t.slots.columnHeaders, b({
      ref: C,
      visibleColumns: n,
      filterColumnLookup: o,
      sortColumnLookup: r,
      columnHeaderTabIndexState: l,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: c,
      columnMenuState: p,
      columnVisibility: h,
      columnGroupsHeaderStructure: g,
      hasOtherElementInTabSequence: m
    }, (_a2 = t.slotProps) == null ? void 0 : _a2.columnHeaders));
  }
  const Hw = Tn($w), Du = u.createContext(void 0), Qs = () => {
    const e = u.useContext(Du);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid configuration context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }, Lw = Je("div")({
    position: "absolute",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: "calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))"
  }), jw = Je("div", {
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
  }), Aw = Ve((e, t) => {
    var _a2;
    const { ownerState: n } = e, o = ie(), l = Qs().hooks.useGridAriaAttributes();
    return f.jsxs(jw, b({
      ownerState: n,
      className: e.className,
      tabIndex: -1
    }, l, (_a2 = o.slotProps) == null ? void 0 : _a2.main, {
      ref: t,
      children: [
        f.jsx(Lw, {
          role: "presentation",
          "data-id": "gridPanelAnchor"
        }),
        e.children
      ]
    }));
  }), zw = () => me({
    root: [
      "topContainer"
    ]
  }, $e, {}), Gw = Je("div")({
    position: "sticky",
    zIndex: 40,
    top: 0
  });
  function _w(e) {
    const t = zw();
    return f.jsx(Gw, b({}, e, {
      className: de(t.root, P["container--top"]),
      role: "presentation"
    }));
  }
  const Vw = () => me({
    root: [
      "bottomContainer"
    ]
  }, $e, {}), Nw = Je("div")({
    position: "sticky",
    zIndex: 40,
    bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
  });
  function Bw(e) {
    const t = Vw();
    return f.jsx(Nw, b({}, e, {
      className: de(t.root, P["container--bottom"]),
      role: "presentation"
    }));
  }
  const Ww = (e, t) => {
    const { classes: n } = e;
    return me({
      root: [
        "virtualScrollerContent",
        t && "virtualScrollerContent--overflowed"
      ]
    }, $e, n);
  }, Uw = Je("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerContent",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.virtualScrollerContent,
        n.overflowedContent && t["virtualScrollerContent--overflowed"]
      ];
    }
  })({}), Kw = Ve(function(t, n) {
    var _a2;
    const o = ie(), r = !o.autoHeight && ((_a2 = t.style) == null ? void 0 : _a2.minHeight) === "auto", l = Ww(o, r), s = {
      classes: o.classes,
      overflowedContent: r
    };
    return f.jsx(Uw, b({}, t, {
      ownerState: s,
      className: de(l.root, t.className),
      ref: n
    }));
  }), qw = Je("div")({
    display: "flex",
    flexDirection: "row",
    width: "var(--DataGrid-rowWidth)",
    boxSizing: "border-box"
  }), Ru = Je("div")({
    position: "sticky",
    height: "100%",
    boxSizing: "border-box",
    borderTop: "1px solid var(--rowBorderColor)",
    backgroundColor: "var(--DataGrid-pinnedBackground)"
  }), Yw = Je(Ru)({
    left: 0,
    borderRight: "1px solid var(--rowBorderColor)"
  }), Xw = Je(Ru)({
    right: 0,
    borderLeft: "1px solid var(--rowBorderColor)"
  }), Qw = Je("div")({
    flexGrow: 1,
    borderTop: "1px solid var(--rowBorderColor)"
  });
  function Jw({ rowsLength: e }) {
    const t = Ee(), { viewportOuterSize: n, minimumSize: o, hasScrollX: r, hasScrollY: l, scrollbarSize: s, leftPinnedWidth: a, rightPinnedWidth: i } = Q(t, mt), d = r ? s : 0, c = n.height - o.height > 0;
    return d === 0 && !c ? null : f.jsxs(qw, {
      className: P.filler,
      role: "presentation",
      style: {
        height: d,
        "--rowBorderColor": e === 0 ? "transparent" : "var(--DataGrid-rowBorderColor)"
      },
      children: [
        a > 0 && f.jsx(Yw, {
          className: P["filler--pinnedLeft"],
          style: {
            width: a
          }
        }),
        f.jsx(Qw, {}),
        i > 0 && f.jsx(Xw, {
          className: P["filler--pinnedRight"],
          style: {
            width: i + (l ? s : 0)
          }
        })
      ]
    });
  }
  const Zw = Tn(Jw), ex = [
    "className"
  ], tx = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "virtualScrollerRenderZone"
      ]
    }, $e, t);
  }, nx = Je("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerRenderZone",
    overridesResolver: (e, t) => t.virtualScrollerRenderZone
  })({
    position: "absolute",
    display: "flex",
    flexDirection: "column"
  }), ox = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, ex), l = Ee(), s = ie(), a = tx(s), i = Q(l, () => {
      const d = Pr(l);
      return zo(l.current.state).positions[d.firstRowIndex] ?? 0;
    });
    return f.jsx(nx, b({
      className: de(a.root, o),
      ownerState: s,
      style: {
        transform: `translate3d(0, ${i}px, 0)`
      }
    }, r, {
      ref: n
    }));
  }), rx = {
    includeHeaders: true,
    includeOutliers: false,
    outliersFactor: 1.5,
    expand: false,
    disableColumnVirtualization: true
  }, ht = (e) => e.editRows, $u = Cr(ht, (e, { rowId: t, editMode: n }) => n === yn.Row && !!e[t]), lx = Cr(ht, (e, { rowId: t, field: n }) => {
    var _a2;
    return ((_a2 = e[t]) == null ? void 0 : _a2[n]) ?? null;
  }), dr = (e) => e.preferencePanel, sx = Cr(dr, (e, t) => !!(e.open && e.labelId === t));
  var Zn = (function(e) {
    return e.filters = "filters", e.columns = "columns", e;
  })(Zn || {});
  const ix = (e, t) => {
    const { classes: n } = e, o = {
      root: [
        "scrollbar",
        `scrollbar--${t}`
      ],
      content: [
        "scrollbarContent"
      ]
    };
    return me(o, $e, n);
  }, Hu = Je("div")({
    position: "absolute",
    display: "inline-block",
    zIndex: 60,
    "&:hover": {
      zIndex: 70
    },
    "--size": "calc(max(var(--DataGrid-scrollbarSize), 14px))"
  }), ax = Je(Hu)({
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
  }), cx = Je(Hu)({
    width: "100%",
    height: "var(--size)",
    overflowY: "hidden",
    overflowX: "auto",
    outline: 0,
    "& > div": {
      height: "var(--size)"
    },
    bottom: "0px"
  }), pa = Ve(function(t, n) {
    const o = an(), r = ie(), l = u.useRef(false), s = u.useRef(0), a = u.useRef(null), i = u.useRef(null), d = ix(r, t.position), c = Q(o, mt), p = t.position === "vertical" ? "height" : "width", h = t.position === "vertical" ? "scrollTop" : "scrollLeft", g = t.position === "vertical" ? "top" : "left", m = t.position === "vertical" ? c.hasScrollX : c.hasScrollY, C = c.minimumSize[p] + (m ? c.scrollbarSize : 0), w = (t.position === "vertical" ? c.viewportInnerSize.height : c.viewportOuterSize.width) * (C / c.viewportOuterSize[p]), x = Ke(() => {
      const M = a.current, $ = t.scrollPosition.current;
      if (!M || $[g] === s.current) return;
      if (s.current = $[g], l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const z = $[g] / C;
      M[h] = z * w;
    }), E = Ke(() => {
      const M = o.current.virtualScrollerRef.current, $ = a.current;
      if (!$) return;
      if (l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const z = $[h] / w;
      M[h] = z * C;
    });
    Ya(() => {
      const M = o.current.virtualScrollerRef.current, $ = a.current, z = {
        passive: true
      };
      return M.addEventListener("scroll", x, z), $.addEventListener("scroll", E, z), () => {
        M.removeEventListener("scroll", x, z), $.removeEventListener("scroll", E, z);
      };
    }), u.useEffect(() => {
      i.current.style.setProperty(p, `${w}px`);
    }, [
      w,
      p
    ]);
    const H = t.position === "vertical" ? ax : cx;
    return f.jsx(H, {
      ref: jt(n, a),
      className: d.root,
      style: t.position === "vertical" && r.unstable_listView ? {
        height: "100%",
        top: 0
      } : void 0,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: (M) => {
        M.target.blur();
      },
      children: f.jsx("div", {
        ref: i,
        className: d.content
      })
    });
  }), ux = (e) => {
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
    }, $e, t);
  }, dx = Je("div", {
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
  }), px = (e) => e.dimensions.rightPinnedWidth > 0;
  function fx(e) {
    const t = Ee(), n = ie(), o = Q(t, Im), r = Q(t, Sm), l = Q(t, px), s = Q(t, km), a = Ew(), i = {
      classes: n.classes,
      hasScrollX: r,
      hasPinnedRight: l,
      loadingOverlayVariant: a.loadingOverlayVariant
    }, d = ux(i), c = Sw(), { getContainerProps: p, getScrollerProps: h, getContentProps: g, getRenderZoneProps: m, getScrollbarVerticalProps: C, getScrollbarHorizontalProps: y, getRows: w, getScrollAreaProps: x } = c, E = w();
    return f.jsxs(Aw, b({
      className: d.root
    }, p(), {
      ownerState: i,
      children: [
        f.jsx(Gr, b({
          scrollDirection: "left"
        }, x())),
        f.jsx(Gr, b({
          scrollDirection: "right"
        }, x())),
        f.jsx(Gr, b({
          scrollDirection: "up"
        }, x())),
        f.jsx(Gr, b({
          scrollDirection: "down"
        }, x())),
        f.jsxs(dx, b({
          className: d.scroller
        }, h(), {
          ownerState: i,
          children: [
            f.jsxs(_w, {
              children: [
                !n.unstable_listView && f.jsx(Hw, {}),
                f.jsx(n.slots.pinnedRows, {
                  position: "top",
                  virtualScroller: c
                })
              ]
            }),
            f.jsx(Rw, b({}, a)),
            f.jsx(Kw, b({}, g(), {
              children: f.jsxs(ox, b({}, m(), {
                children: [
                  E,
                  f.jsx(n.slots.detailPanels, {
                    virtualScroller: c
                  })
                ]
              }))
            })),
            s && f.jsx(Zw, {
              rowsLength: E.length
            }),
            f.jsx(Bw, {
              children: f.jsx(n.slots.pinnedRows, {
                position: "bottom",
                virtualScroller: c
              })
            })
          ]
        })),
        r && !n.unstable_listView && f.jsx(pa, b({
          position: "horizontal"
        }, y())),
        o && f.jsx(pa, b({
          position: "vertical"
        }, C())),
        e.children
      ]
    }));
  }
  function gx() {
    var _a2;
    const e = ie();
    return e.hideFooter ? null : f.jsx(e.slots.footer, b({}, (_a2 = e.slotProps) == null ? void 0 : _a2.footer));
  }
  let zl;
  function Js() {
    return zl === void 0 && document.createElement("div").focus({
      get preventScroll() {
        return zl = true, false;
      }
    }), zl;
  }
  function hx({ defaultSlots: e, slots: t }) {
    const n = t;
    if (!n || Object.keys(n).length === 0) return e;
    const o = b({}, e);
    return Object.keys(n).forEach((r) => {
      const l = r;
      n[l] !== void 0 && (o[l] = n[l]);
    }), o;
  }
  function mx(e) {
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
  function bx(e) {
    return u.useMemo(() => mx(e), [
      e
    ]);
  }
  const Cx = (e) => {
    const t = e.match(/^__row_group_by_columns_group_(.*)__$/);
    return t ? t[1] : null;
  }, wx = (e) => e === Jc || Cx(e) !== null, Lu = (e, t) => {
    if (e) if (t) {
      if (e === Oe.LEFT) return "right";
      if (e === Oe.RIGHT) return "left";
    } else {
      if (e === Oe.LEFT) return "left";
      if (e === Oe.RIGHT) return "right";
    }
  };
  function Sl(e, t, n, o) {
    const r = Lu(n, t);
    return !r || o === void 0 || (e[r] = o), e;
  }
  const xx = [
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
  ], vx = [
    "changeReason",
    "unstable_updateValueOnRender"
  ];
  Oe.LEFT + "", jn.LEFT, Oe.RIGHT + "", jn.RIGHT, Oe.NONE + "", Oe.VIRTUAL + "";
  const yx = (e) => {
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
    return me(d, $e, i);
  }, Sx = Ve(function(t, n) {
    var _a2, _b2, _c2;
    const { column: o, row: r, rowId: l, rowNode: s, align: a, colIndex: i, width: d, className: c, style: p, colSpan: h, disableDragEvents: g, isNotVisible: m, pinnedOffset: C, pinnedPosition: y, showRightBorder: w, showLeftBorder: x, onClick: E, onDoubleClick: H, onMouseDown: M, onMouseUp: $, onMouseOver: z, onKeyDown: D, onKeyUp: S, onDragEnter: v, onDragOver: k } = t, O = ge(t, xx), R = an(), _ = ie(), F = At(), I = o.field, T = ar(R, lx, {
      rowId: l,
      field: I
    }), A = Qs().hooks.useCellAggregationResult(l, I), G = T ? Xe.Edit : Xe.View, j = R.current.getCellParamsForRow(l, I, r, {
      colDef: o,
      cellMode: G,
      rowNode: s,
      tabIndex: Q(R, () => {
        const he = Ws(R);
        return he && he.field === I && he.id === l ? 0 : -1;
      }),
      hasFocus: Q(R, () => {
        const he = Rt(R);
        return (he == null ? void 0 : he.id) === l && he.field === I;
      })
    });
    j.api = R.current, A && (j.value = A.value, j.formattedValue = o.valueFormatter ? o.valueFormatter(j.value, r, o, R) : j.value);
    const V = Q(R, () => R.current.unstable_applyPipeProcessors("isCellSelected", false, {
      id: l,
      field: I
    })), U = Q(R, Eu), W = Q(R, Cw), { hasFocus: K, isEditable: B = false, value: te } = j, J = o.type === "actions" && ((_a2 = o.getActions) == null ? void 0 : _a2.call(o, R.current.getRowParams(l)).some((he) => !he.props.disabled)), ne = (G === "view" || !B) && !J ? j.tabIndex : -1, { classes: ae, getCellClassName: we } = _, re = [
      Q(R, () => R.current.unstable_applyPipeProcessors("cellClassName", [], {
        id: l,
        field: I
      }).filter(Boolean).join(" "))
    ];
    o.cellClassName && re.push(typeof o.cellClassName == "function" ? o.cellClassName(j) : o.cellClassName), o.display === "flex" && re.push(P["cell--flex"]), we && re.push(we(j));
    const ye = j.formattedValue ?? te, Z = u.useRef(null), Se = jt(n, Z), ee = u.useRef(null), ve = _.cellSelection ?? false, Ce = {
      align: a,
      showLeftBorder: x,
      showRightBorder: w,
      isEditable: B,
      classes: _.classes,
      pinnedPosition: y,
      isSelected: V,
      isSelectionMode: ve
    }, Fe = yx(Ce), Ne = u.useCallback((he) => (je) => {
      const Re = R.current.getCellParams(l, I || "");
      R.current.publishEvent(he, Re, je), $ && $(je);
    }, [
      R,
      I,
      $,
      l
    ]), Be = u.useCallback((he) => (je) => {
      const Re = R.current.getCellParams(l, I || "");
      R.current.publishEvent(he, Re, je), M && M(je);
    }, [
      R,
      I,
      M,
      l
    ]), ze = u.useCallback((he, je) => (Re) => {
      if (!R.current.getRow(l)) return;
      const rt = R.current.getCellParams(l, I || "");
      R.current.publishEvent(he, rt, Re), je && je(Re);
    }, [
      R,
      I,
      l
    ]), He = ((_b2 = U[l]) == null ? void 0 : _b2[I]) ?? false, Le = ((_c2 = W[l]) == null ? void 0 : _c2[I]) ?? 1, We = u.useMemo(() => {
      if (m) return {
        padding: 0,
        opacity: 0,
        width: 0,
        height: 0,
        border: 0
      };
      const he = Sl(b({
        "--width": `${d}px`
      }, p), F, y, C), je = y === Oe.LEFT, Re = y === Oe.RIGHT;
      return Le > 1 && (he.height = `calc(var(--height) * ${Le})`, he.zIndex = 10, (je || Re) && (he.zIndex = 40)), he;
    }, [
      d,
      m,
      p,
      C,
      y,
      F,
      Le
    ]);
    if (u.useEffect(() => {
      if (!K || G === Xe.Edit) return;
      const he = en(R.current.rootElementRef.current);
      if (Z.current && !Z.current.contains(he.activeElement)) {
        const je = Z.current.querySelector('[tabindex="0"]'), Re = ee.current || je || Z.current;
        if (Js()) Re.focus({
          preventScroll: true
        });
        else {
          const rt = R.current.getScrollPosition();
          Re.focus(), R.current.scroll(rt);
        }
      }
    }, [
      K,
      G,
      R
    ]), He) return f.jsx("div", {
      "data-colindex": i,
      role: "presentation",
      style: b({
        width: "var(--width)"
      }, We)
    });
    let Ge = O.onFocus, fe, xe;
    if (T === null && o.renderCell && (fe = o.renderCell(j)), T !== null && o.renderEditCell) {
      const he = R.current.getRowWithUpdatedValues(l, o.field), je = ge(T, vx), Re = o.valueFormatter ? o.valueFormatter(T.value, he, o, R) : j.formattedValue, rt = b({}, j, {
        row: he,
        formattedValue: Re
      }, je);
      fe = o.renderEditCell(rt), re.push(P["cell--editing"]), re.push(ae == null ? void 0 : ae["cell--editing"]);
    }
    if (fe === void 0) {
      const he = ye == null ? void 0 : ye.toString();
      fe = he, xe = he;
    }
    u.isValidElement(fe) && J && (fe = u.cloneElement(fe, {
      focusElementRef: ee
    }));
    const pe = g ? null : {
      onDragEnter: ze("cellDragEnter", v),
      onDragOver: ze("cellDragOver", k)
    };
    return f.jsx("div", b({
      className: de(Fe.root, re, c),
      role: "gridcell",
      "data-field": I,
      "data-colindex": i,
      "aria-colindex": i + 1,
      "aria-colspan": h,
      "aria-rowspan": Le,
      style: We,
      title: xe,
      tabIndex: ne,
      onClick: ze("cellClick", E),
      onDoubleClick: ze("cellDoubleClick", H),
      onMouseOver: ze("cellMouseOver", z),
      onMouseDown: Be("cellMouseDown"),
      onMouseUp: Ne("cellMouseUp"),
      onKeyDown: ze("cellKeyDown", D),
      onKeyUp: ze("cellKeyUp", S)
    }, pe, O, {
      onFocus: Ge,
      ref: Se,
      children: fe
    }));
  }), Ix = Tn(Sx), Px = [
    "field",
    "type",
    "align",
    "width",
    "height",
    "empty",
    "style",
    "className"
  ], fa = "1.3em", Mx = "1.2em", ga = [
    40,
    80
  ], kx = {
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
  }, Ex = (e) => {
    const { align: t, classes: n, empty: o } = e, r = {
      root: [
        "cell",
        "cellSkeleton",
        `cell--text${t ? ce(t) : "Left"}`,
        o && "cellEmpty"
      ]
    };
    return me(r, $e, n);
  }, Fx = lb(12345);
  function Tx(e) {
    const { field: t, type: n, align: o, width: r, height: l, empty: s = false, style: a, className: i } = e, d = ge(e, Px), p = {
      classes: ie().classes,
      align: o,
      empty: s
    }, h = Ex(p), g = u.useMemo(() => {
      if (n === "boolean" || n === "actions") return {
        variant: "circular",
        width: fa,
        height: fa
      };
      const [C, y] = n ? kx[n] ?? ga : ga;
      return {
        variant: "text",
        width: `${Math.round(Fx(C, y))}%`,
        height: Mx
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
      children: !s && f.jsx(Hg, b({}, g))
    }));
  }
  const Ox = Tn(Tx);
  function Dx(e) {
    return e.vars ? e.vars.palette.TableCell.border : e.palette.mode === "light" ? xs(lt(e.palette.divider, 1), 0.88) : vs(lt(e.palette.divider, 1), 0.68);
  }
  const Rx = 10, _r = -5, co = 1, ha = {
    width: 3,
    rx: 1.5,
    x: 10.5
  }, $x = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Hx = (e) => e.dimensions.hasScrollX && (!e.dimensions.hasScrollY || e.dimensions.scrollbarSize === 0), Lx = se("div", {
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
    const t = an(), n = Q(t, Hx), o = Dx(e), r = e.shape.borderRadius, l = e.vars ? e.vars.palette.background.default : ((_a2 = e.mixins.MuiDataGrid) == null ? void 0 : _a2.containerBackground) ?? e.palette.background.default, s = ((_b2 = e.mixins.MuiDataGrid) == null ? void 0 : _b2.pinnedBackground) ?? l, a = e.vars ? `rgba(${e.vars.palette.background.defaultChannel} / ${e.vars.palette.action.disabledOpacity})` : lt(e.palette.background.default, e.palette.action.disabledOpacity), i = (e.vars || e).palette.action.hoverOpacity, d = (e.vars || e).palette.action.hover, c = (e.vars || e).palette.action.selectedOpacity, p = e.vars ? `calc(${i} + ${c})` : i + c, h = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${c})` : lt(e.palette.primary.main, c), g = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${p})` : lt(e.palette.primary.main, p), m = e.vars ? zx : jx, C = (D) => ({
      [`& .${P["cell--pinnedLeft"]}, & .${P["cell--pinnedRight"]}`]: {
        backgroundColor: D,
        "&.Mui-selected": {
          backgroundColor: m(D, h, c),
          "&:hover": {
            backgroundColor: m(D, h, p)
          }
        }
      }
    }), y = m(s, d, i), w = C(y), x = m(s, h, c), E = C(x), H = m(s, g, p), M = C(H), $ = {
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
      [`.${P.main} > *:first-child${$x}`]: {
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
        maxWidth: Rx,
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
          [`& .${P.iconSeparator} rect`]: ha
        },
        "@media (hover: hover)": {
          "&:hover": {
            color: (e.vars || e).palette.primary.main,
            [`& .${P.iconSeparator} rect`]: ha
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
        "&.Mui-selected": $
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
        "&.Mui-selected": $
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
          backgroundColor: x
        }
      },
      [`& .${P.virtualScrollerContent} .${P.row}`]: {
        "&:hover": w,
        "&.Mui-selected": E,
        "&.Mui-selected:hover": M
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
  function jx(e, t, n, o = 1) {
    const r = (i, d) => Math.round((i ** (1 / o) * (1 - n) + d ** (1 / o) * n) ** o), l = di(e), s = di(t), a = [
      r(l.values[0], s.values[0]),
      r(l.values[1], s.values[1]),
      r(l.values[2], s.values[2])
    ];
    return xd({
      type: "rgb",
      values: a
    });
  }
  const Ax = (e) => `rgb(from ${e} r g b / 1)`;
  function zx(e, t, n) {
    return `color-mix(in srgb,${e}, ${Ax(t)} calc(${n} * 100%))`;
  }
  const Gx = () => () => {
  }, _x = () => false, Vx = () => true, Nx = () => Rs.useSyncExternalStore(Gx, _x, Vx);
  function Bx() {
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
  function Wx() {
    var _a2;
    const e = ie();
    return f.jsxs(u.Fragment, {
      children: [
        f.jsx(Bx, {}),
        e.slots.toolbar && f.jsx(e.slots.toolbar, b({}, (_a2 = e.slotProps) == null ? void 0 : _a2.toolbar))
      ]
    });
  }
  const Ux = [
    "className",
    "children"
  ], Kx = (e, t) => {
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
    return me(l, $e, o);
  }, qx = Ve(function(t, n) {
    const o = ie(), { className: r, children: l } = t, s = ge(t, Ux), a = an(), i = Q(a, ho), d = a.current.rootElementRef, c = u.useCallback((C) => {
      C !== null && a.current.publishEvent("rootMount", C);
    }, [
      a
    ]), p = jt(d, n, c), h = o, g = Kx(h, i);
    return Nx() ? null : f.jsxs(Lx, b({
      className: de(g.root, r),
      ownerState: h
    }, s, {
      ref: p,
      children: [
        f.jsx(Wx, {}),
        f.jsx(fx, {
          children: l
        }),
        f.jsx(gx, {})
      ]
    }));
  }), Yx = Tn(qx), Xx = [
    "className"
  ], Qx = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "footerContainer",
        "withBorderColor"
      ]
    }, $e, t);
  }, Jx = Je("div", {
    name: "MuiDataGrid",
    slot: "FooterContainer",
    overridesResolver: (e, t) => t.footerContainer
  })({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 52,
    borderTop: "1px solid"
  }), Zx = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, Xx), l = ie(), s = Qx(l);
    return f.jsx(Jx, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), ev = [
    "className"
  ], tv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "overlay"
      ]
    }, $e, t);
  }, nv = Je("div", {
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
  }), Zs = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, ev), l = ie(), s = tv(l);
    return f.jsx(nv, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), ov = (e) => {
    const { classes: t, open: n } = e;
    return me({
      root: [
        "menuIcon",
        n && "menuOpen"
      ],
      button: [
        "menuIconButton"
      ]
    }, $e, t);
  }, rv = u.memo((e) => {
    var _a2, _b2;
    const { colDef: t, open: n, columnMenuId: o, columnMenuButtonId: r, iconButtonRef: l } = e, s = Ee(), a = ie(), i = b({}, e, {
      classes: a.classes
    }), d = ov(i), c = u.useCallback((h) => {
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
          onClick: c,
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
  function lv({ columnMenuId: e, columnMenuButtonId: t, ContentComponent: n, contentComponentProps: o, field: r, open: l, target: s, onExited: a }) {
    const i = Ee(), d = i.current.getColumn(r), c = Ke((p) => {
      p && (p.stopPropagation(), s == null ? void 0 : s.contains(p.target)) || i.current.hideColumnMenu();
    });
    return !s || !d ? null : f.jsx(zs, {
      placement: `bottom-${d.align === "right" ? "start" : "end"}`,
      open: l,
      target: s,
      onClose: c,
      onExited: a,
      children: f.jsx(n, b({
        colDef: d,
        hideMenu: c,
        open: l,
        id: e,
        labelledby: t
      }, o))
    });
  }
  function sv(e) {
    return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
  }
  function sl(e, t) {
    return e.closest(`.${t}`);
  }
  function Dn(e) {
    return e.replace(/["\\]/g, "\\$&");
  }
  function iv(e, t) {
    return e.querySelector(`[role="columnheader"][data-field="${Dn(t)}"]`);
  }
  function ju(e) {
    return `.${P.row}[data-id="${Dn(String(e))}"]`;
  }
  function av(e, t) {
    return e.querySelector(ju(t));
  }
  function cv(e, { id: t, field: n }) {
    const o = ju(t), r = `.${P.cell}[data-field="${Dn(n)}"]`, l = `${o} ${r}`;
    return e.querySelector(l);
  }
  function Mr(e) {
    return e.target.nodeType === 1 && !e.currentTarget.contains(e.target);
  }
  function uv(e) {
    return e.getAttribute("data-field");
  }
  function dv(e, t) {
    return e.querySelector(`[data-field="${Dn(t)}"]`);
  }
  function pv(e) {
    return e.getAttribute("data-fields").slice(2, -2).split("-|-");
  }
  function fv(e, t) {
    return Array.from(e.querySelectorAll(`[data-fields*="|-${Dn(t)}-|"]`) ?? []);
  }
  function gv(e, t) {
    var _a2;
    if (!sl(e, P.root)) throw new Error("MUI X: The root element is not found.");
    const o = e.getAttribute("aria-colindex");
    if (!o) return [];
    const r = Number(o) - 1, l = [];
    return ((_a2 = t.virtualScrollerRef) == null ? void 0 : _a2.current) ? (Gu(t).forEach((s) => {
      const a = s.getAttribute("data-id");
      if (!a) return;
      let i = r;
      const d = t.unstable_getCellColSpanInfo(a, r);
      d && d.spannedByColSpan && (i = d.leftVisibleCellIndex);
      const c = s.querySelector(`[data-colindex="${i}"]`);
      c && l.push(c);
    }), l) : [];
  }
  function ma(e, t) {
    return e.rootElementRef.current.querySelector(`.${P[t]}`);
  }
  const Au = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    if (t === null) return [];
    const r = [];
    return Gu(e).forEach((l) => {
      l.getAttribute("data-id") && l.querySelectorAll(`.${P[n === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((a) => {
        const i = Go(a);
        i !== null && o(i) && r.push(a);
      });
    }), r;
  };
  function hv(e, t, n) {
    const o = Go(t);
    return Au({
      api: e,
      colIndex: o,
      position: n ? "right" : "left",
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function mv(e, t, n) {
    const o = Go(t);
    return Au({
      api: e,
      colIndex: o,
      position: n ? "left" : "right",
      filterFn: (r) => n ? r > o : r < o
    });
  }
  const zu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    var _a2;
    if (!((_a2 = e.columnHeadersContainerRef) == null ? void 0 : _a2.current)) return [];
    if (t === null) return [];
    const r = [];
    return e.columnHeadersContainerRef.current.querySelectorAll(`.${P[n === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((l) => {
      const s = Go(l);
      s !== null && o(s, l) && r.push(l);
    }), r;
  };
  function bv(e, t, n) {
    const o = Go(t);
    return zu({
      api: e,
      position: n ? "right" : "left",
      colIndex: o,
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function Cv(e, t, n) {
    const o = Go(t);
    return zu({
      api: e,
      position: n ? "left" : "right",
      colIndex: o,
      filterFn: (r, l) => l.classList.contains(P["columnHeader--last"]) ? false : n ? r > o : r < o
    });
  }
  function wv(e, t) {
    return e.columnHeadersContainerRef.current.querySelector(`:scope > div > [data-field="${Dn(t)}"][role="columnheader"]`);
  }
  function xv(e, t) {
    const n = e.virtualScrollerRef.current;
    return Array.from(n.querySelectorAll(`:scope > div > div > div > [data-field="${Dn(t)}"][role="gridcell"]`));
  }
  function Gu(e) {
    return e.virtualScrollerRef.current.querySelectorAll(`:scope > div > div > .${P.row}`);
  }
  function Go(e) {
    const t = e.getAttribute("aria-colindex");
    return t ? Number(t) - 1 : null;
  }
  const vv = [
    "className",
    "aria-label"
  ], yv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "columnHeaderTitle"
      ]
    }, $e, t);
  }, Sv = Je("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderTitle",
    overridesResolver: (e, t) => t.columnHeaderTitle
  })({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "var(--unstable_DataGrid-headWeight)",
    lineHeight: "normal"
  }), Iv = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, vv), l = ie(), s = yv(l);
    return f.jsx(Sv, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  });
  function Pv(e) {
    var _a2;
    const { label: t, description: n } = e, o = ie(), r = u.useRef(null), [l, s] = u.useState(""), a = u.useCallback(() => {
      if (!n && (r == null ? void 0 : r.current)) {
        const i = sv(r.current);
        s(i ? t : "");
      }
    }, [
      n,
      t
    ]);
    return f.jsx(o.slots.baseTooltip, b({
      title: n || l
    }, (_a2 = o.slotProps) == null ? void 0 : _a2.baseTooltip, {
      children: f.jsx(Iv, {
        onMouseOver: a,
        ref: r,
        children: t
      })
    }));
  }
  const Mv = [
    "resizable",
    "resizing",
    "height",
    "side"
  ];
  var ei = (function(e) {
    return e.Left = "left", e.Right = "right", e;
  })(ei || {});
  const kv = (e) => {
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
    return me(l, $e, o);
  };
  function Ev(e) {
    const { height: t, side: n = ei.Right } = e, o = ge(e, Mv), r = ie(), l = b({}, e, {
      side: n,
      classes: r.classes
    }), s = kv(l), a = u.useCallback((i) => {
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
  const Fv = u.memo(Ev), Tv = [
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
  ], _u = Ve(function(t, n) {
    const { classes: o, colIndex: r, height: l, isResizing: s, sortDirection: a, tabIndex: i, separatorSide: d, isDraggable: c, headerComponent: p, description: h, width: g, columnMenuIconButton: m = null, columnMenu: C = null, columnTitleIconButtons: y = null, headerClassName: w, label: x, resizable: E, draggableContainerProps: H, columnHeaderSeparatorProps: M, style: $ } = t, z = ge(t, Tv), D = ie(), S = u.useRef(null), v = jt(S, n);
    let k = "none";
    return a != null && (k = a === "asc" ? "ascending" : "descending"), f.jsxs("div", b({
      className: de(o.root, w),
      style: b({}, $, {
        height: l,
        width: g
      }),
      role: "columnheader",
      tabIndex: i,
      "aria-colindex": r + 1,
      "aria-sort": k
    }, z, {
      ref: v,
      children: [
        f.jsxs("div", b({
          className: o.draggableContainer,
          draggable: c,
          role: "presentation"
        }, H, {
          children: [
            f.jsxs("div", {
              className: o.titleContainer,
              role: "presentation",
              children: [
                f.jsx("div", {
                  className: o.titleContainerContent,
                  children: p !== void 0 ? p : f.jsx(Pv, {
                    label: x,
                    description: h,
                    columnWidth: g
                  })
                }),
                y
              ]
            }),
            m
          ]
        })),
        f.jsx(Fv, b({
          resizable: !D.disableColumnResize && !!E,
          resizing: s,
          height: l,
          side: d
        }, M)),
        C
      ]
    }));
  }), Ov = (e) => {
    const { colDef: t, classes: n, isDragging: o, sortDirection: r, showRightBorder: l, showLeftBorder: s, filterItemsCounter: a, pinnedPosition: i, isLastUnpinned: d, isSiblingFocused: c } = e, p = r != null, h = a != null && a > 0, g = t.type === "number", m = {
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
    return me(m, $e, n);
  };
  function Dv(e) {
    var _a2, _b2, _c2;
    const { colDef: t, columnMenuOpen: n, colIndex: o, headerHeight: r, isResizing: l, isLast: s, sortDirection: a, sortIndex: i, filterItemsCounter: d, hasFocus: c, tabIndex: p, disableReorder: h, separatorSide: g, showLeftBorder: m, showRightBorder: C, pinnedPosition: y, pinnedOffset: w } = e, x = an(), E = ie(), H = At(), M = u.useRef(null), $ = nt(), z = nt(), D = u.useRef(null), [S, v] = u.useState(n), k = u.useMemo(() => !E.disableColumnReorder && !h && !t.disableReorder, [
      E.disableColumnReorder,
      h,
      t.disableReorder
    ]);
    let O;
    t.renderHeader && (O = t.renderHeader(x.current.getColumnHeaderParams(t.field)));
    const R = b({}, e, {
      classes: E.classes,
      showRightBorder: C,
      showLeftBorder: m
    }), _ = Ov(R), F = u.useCallback((J) => (ne) => {
      Mr(ne) || x.current.publishEvent(J, x.current.getColumnHeaderParams(t.field), ne);
    }, [
      x,
      t.field
    ]), I = u.useMemo(() => ({
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
    ]), T = u.useMemo(() => k ? {
      onDragStart: F("columnHeaderDragStart"),
      onDragEnter: F("columnHeaderDragEnter"),
      onDragOver: F("columnHeaderDragOver"),
      onDragEnd: F("columnHeaderDragEnd")
    } : {}, [
      k,
      F
    ]), L = u.useMemo(() => ({
      onMouseDown: F("columnSeparatorMouseDown"),
      onDoubleClick: F("columnSeparatorDoubleClick")
    }), [
      F
    ]);
    u.useEffect(() => {
      S || v(n);
    }, [
      S,
      n
    ]);
    const A = u.useCallback(() => {
      v(false);
    }, []), G = !E.disableColumnMenu && !t.disableColumnMenu && f.jsx(rv, {
      colDef: t,
      columnMenuId: $,
      columnMenuButtonId: z,
      open: S,
      iconButtonRef: D
    }), j = f.jsx(lv, {
      columnMenuId: $,
      columnMenuButtonId: z,
      field: t.field,
      open: n,
      target: D.current,
      ContentComponent: E.slots.columnMenu,
      contentComponentProps: (_a2 = E.slotProps) == null ? void 0 : _a2.columnMenu,
      onExited: A
    }), V = t.sortingOrder ?? E.sortingOrder, U = (t.sortable || a != null) && !t.hideSortIcons && !E.disableColumnSorting, W = f.jsxs(u.Fragment, {
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
    u.useLayoutEffect(() => {
      const J = x.current.state.columnMenu;
      if (c && !J.open) {
        const ae = M.current.querySelector('[tabindex="0"]') || M.current;
        if (!ae) return;
        if (Js()) ae.focus({
          preventScroll: true
        });
        else {
          const we = x.current.getScrollPosition();
          ae.focus(), x.current.scroll(we);
        }
      }
    }, [
      x,
      c
    ]);
    const K = typeof t.headerClassName == "function" ? t.headerClassName({
      field: t.field,
      colDef: t
    }) : t.headerClassName, B = t.headerName ?? t.field, te = u.useMemo(() => Sl(b({}, e.style), H, y, w), [
      y,
      w,
      e.style,
      H
    ]);
    return f.jsx(_u, b({
      ref: M,
      classes: _,
      columnMenuOpen: n,
      colIndex: o,
      height: r,
      isResizing: l,
      sortDirection: a,
      hasFocus: c,
      tabIndex: p,
      separatorSide: g,
      isDraggable: k,
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
    }, I));
  }
  const Rv = Tn(Dv), $v = [
    "className"
  ], Hv = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "iconButtonContainer"
      ]
    }, $e, t);
  }, Lv = Je("div", {
    name: "MuiDataGrid",
    slot: "IconButtonContainer",
    overridesResolver: (e, t) => t.iconButtonContainer
  })(() => ({
    display: "flex",
    visibility: "hidden",
    width: 0
  })), Vu = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, $v), l = ie(), s = Hv(l);
    return f.jsx(Lv, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), jv = [
    "direction",
    "index",
    "sortingOrder",
    "disabled",
    "className"
  ], Av = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "sortButton"
      ],
      icon: [
        "sortIcon"
      ]
    }, $e, t);
  };
  function zv(e, t, n, o) {
    let r;
    const l = {};
    return t === "asc" ? r = e.columnSortedAscendingIcon : t === "desc" ? r = e.columnSortedDescendingIcon : (r = e.columnUnsortedIcon, l.sortingOrder = o), r ? f.jsx(r, b({
      fontSize: "small",
      className: n
    }, l)) : null;
  }
  function Gv(e) {
    var _a2;
    const { direction: t, index: n, sortingOrder: o, disabled: r, className: l } = e, s = ge(e, jv), a = Ee(), i = ie(), d = b({}, e, {
      classes: i.classes
    }), c = Av(d), p = zv(i.slots, t, c.icon, o);
    if (!p) return null;
    const h = f.jsx(i.slots.baseIconButton, b({
      tabIndex: -1,
      "aria-label": a.current.getLocaleText("columnHeaderSortIconLabel"),
      title: a.current.getLocaleText("columnHeaderSortIconLabel"),
      size: "small",
      disabled: r,
      className: de(c.root, l)
    }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseIconButton, s, {
      children: p
    }));
    return f.jsxs(Vu, {
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
  const _v = u.memo(Gv), Vv = (e) => {
    const { classes: t } = e;
    return me({
      icon: [
        "filterIcon"
      ]
    }, $e, t);
  };
  function Nv(e) {
    return e.counter ? f.jsx(Bv, b({}, e)) : null;
  }
  function Bv(e) {
    var _a2, _b2;
    const { counter: t, field: n, onClick: o } = e, r = Ee(), l = ie(), s = b({}, e, {
      classes: l.classes
    }), a = Vv(s), i = nt(), d = ar(r, sx, i), c = nt(), p = u.useCallback((g) => {
      g.preventDefault(), g.stopPropagation();
      const { open: m, openedPanelValue: C } = dr(r.current.state);
      m && C === Zn.filters ? r.current.hideFilterPanel() : r.current.showFilterPanel(void 0, c, i), o && o(r.current.getColumnHeaderParams(n), g);
    }, [
      r,
      n,
      o,
      c,
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
      "aria-controls": d ? c : void 0
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
      children: f.jsxs(Vu, {
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
  const ba = ke(f.jsx("path", {
    d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
  }), "ArrowUpward"), Ca = ke(f.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward"), wa = ke(f.jsx("path", {
    d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "KeyboardArrowRight"), xa = ke(f.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Wv = ke(f.jsx("path", {
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  }), "FilterList"), va = ke(f.jsx("path", {
    d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
  }), "FilterAlt"), Uv = ke(f.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), "Search");
  ke(f.jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu");
  ke(f.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckCircle");
  const Kv = ke(f.jsx("path", {
    d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
  }), "ColumnIcon"), qv = ke(f.jsx("rect", {
    width: "1",
    height: "24",
    x: "11.5",
    rx: "0.5"
  }), "Separator"), Yv = ke(f.jsx("path", {
    d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
  }), "ViewHeadline"), Xv = ke(f.jsx("path", {
    d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
  }), "TableRows"), Qv = ke(f.jsx("path", {
    d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
  }), "ViewStream"), Jv = ke(f.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "TripleDotsVertical"), Gl = ke(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), ya = ke(f.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), "Add"), Zv = ke(f.jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }), "Remove"), ey = ke(f.jsx("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }), "Load"), Sa = ke(f.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "Drag"), ty = ke(f.jsx("path", {
    d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
  }), "SaveAlt"), ny = ke(f.jsx("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), oy = ke(f.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "MoreVert"), ry = ke(f.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }), "VisibilityOff"), ly = ke(f.jsx("g", {
    children: f.jsx("path", {
      d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
    })
  }), "ViewColumn"), sy = ke(f.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  ke(f.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  const iy = ke(f.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  function Nu(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
  }
  const il = (e) => e.indexOf("Arrow") === 0 || e.indexOf("Page") === 0 || e === " " || e === "Home" || e === "End", ay = (e) => !!e.key, Bu = (e) => e === "Tab" || e === "Escape";
  function Wu(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "V" && !e.shiftKey && !e.altKey;
  }
  function cy(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "C" && !e.shiftKey && !e.altKey;
  }
  const uy = [
    "hideMenu",
    "colDef",
    "id",
    "labelledby",
    "className",
    "children",
    "open"
  ], dy = se(Ss)(() => ({
    minWidth: 248
  })), py = Ve(function(t, n) {
    const { hideMenu: o, id: r, labelledby: l, className: s, children: a, open: i } = t, d = ge(t, uy), c = u.useCallback((p) => {
      p.key === "Tab" && p.preventDefault(), Bu(p.key) && o(p);
    }, [
      o
    ]);
    return f.jsx(dy, b({
      id: r,
      className: de(P.menuList, s),
      "aria-labelledby": l,
      onKeyDown: c,
      autoFocus: i
    }, d, {
      ref: n,
      children: a
    }));
  }), fy = [
    "displayOrder"
  ], gy = (e) => {
    const t = an(), n = ie(), { defaultSlots: o, defaultSlotProps: r, slots: l = {}, slotProps: s = {}, hideMenu: a, colDef: i, addDividers: d = true } = e, c = u.useMemo(() => b({}, o, l), [
      o,
      l
    ]), p = u.useMemo(() => {
      if (!s || Object.keys(s).length === 0) return r;
      const m = b({}, s);
      return Object.entries(r).forEach(([C, y]) => {
        m[C] = b({}, y, s[C] || {});
      }), m;
    }, [
      r,
      s
    ]), h = t.current.unstable_applyPipeProcessors("columnMenu", [], e.colDef), g = u.useMemo(() => {
      const m = Object.keys(o);
      return Object.keys(l).filter((C) => !m.includes(C));
    }, [
      l,
      o
    ]);
    return u.useMemo(() => {
      const y = Array.from(/* @__PURE__ */ new Set([
        ...h,
        ...g
      ])).filter((w) => c[w] != null).sort((w, x) => {
        const E = p[w], H = p[x], M = Number.isFinite(E == null ? void 0 : E.displayOrder) ? E.displayOrder : 100, $ = Number.isFinite(H == null ? void 0 : H.displayOrder) ? H.displayOrder : 100;
        return M - $;
      });
      return y.reduce((w, x, E) => {
        let H = {
          colDef: i,
          onClick: a
        };
        const M = p[x];
        if (M) {
          const $ = ge(M, fy);
          H = b({}, H, $);
        }
        return d && E !== y.length - 1 ? [
          ...w,
          [
            c[x],
            H
          ],
          [
            n.slots.baseDivider,
            {}
          ]
        ] : [
          ...w,
          [
            c[x],
            H
          ]
        ];
      }, []);
    }, [
      d,
      i,
      h,
      a,
      c,
      p,
      g,
      n.slots.baseDivider
    ]);
  };
  function hy(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = ie(), a = st(o).filter((d) => d.disableColumnMenu !== true).length === 1, i = u.useCallback((d) => {
      a || (o.current.setColumnVisibility(t.field, false), n(d));
    }, [
      o,
      t.field,
      n,
      a
    ]);
    return r.disableColumnSelector || t.hideable === false ? null : f.jsxs($t, {
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
  function my(e) {
    const { onClick: t } = e, n = Ee(), o = ie(), r = u.useCallback((l) => {
      t(l), n.current.showPreferences(Zn.columns);
    }, [
      n,
      t
    ]);
    return o.disableColumnSelector ? null : f.jsxs($t, {
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
  function by(e) {
    return f.jsxs(u.Fragment, {
      children: [
        f.jsx(hy, b({}, e)),
        f.jsx(my, b({}, e))
      ]
    });
  }
  function Cy(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = ie(), l = u.useCallback((s) => {
      n(s), o.current.showFilterPanel(t.field);
    }, [
      o,
      t.field,
      n
    ]);
    return r.disableColumnFilter || !t.filterable ? null : f.jsxs($t, {
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
  function wy(e) {
    const { colDef: t, onClick: n } = e, o = Ee(), r = Q(o, un), l = ie(), s = u.useMemo(() => {
      var _a2;
      return t ? (_a2 = r.find((p) => p.field === t.field)) == null ? void 0 : _a2.sort : null;
    }, [
      t,
      r
    ]), a = t.sortingOrder ?? l.sortingOrder, i = u.useCallback((c) => {
      n(c);
      const p = c.currentTarget.getAttribute("data-value") || null;
      o.current.sortColumn(t.field, p === s ? null : p);
    }, [
      o,
      t,
      n,
      s
    ]);
    if (l.disableColumnSorting || !t || !t.sortable || !a.some((c) => !!c)) return null;
    const d = (c) => {
      const p = o.current.getLocaleText(c);
      return typeof p == "function" ? p(t) : p;
    };
    return f.jsxs(u.Fragment, {
      children: [
        a.includes("asc") && s !== "asc" ? f.jsxs($t, {
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
        a.includes("desc") && s !== "desc" ? f.jsxs($t, {
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
        a.includes(null) && s != null ? f.jsxs($t, {
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
  const xy = [
    "defaultSlots",
    "defaultSlotProps",
    "slots",
    "slotProps"
  ], vy = {
    columnMenuSortItem: wy,
    columnMenuFilterItem: Cy,
    columnMenuColumnsItem: by
  }, yy = {
    columnMenuSortItem: {
      displayOrder: 10
    },
    columnMenuFilterItem: {
      displayOrder: 20
    },
    columnMenuColumnsItem: {
      displayOrder: 30
    }
  }, Sy = Ve(function(t, n) {
    const { defaultSlots: o, defaultSlotProps: r, slots: l, slotProps: s } = t, a = ge(t, xy), i = gy(b({}, a, {
      defaultSlots: o,
      defaultSlotProps: r,
      slots: l,
      slotProps: s
    }));
    return f.jsx(py, b({}, a, {
      ref: n,
      children: i.map(([d, c], p) => f.jsx(d, b({}, c), p))
    }));
  }), Iy = Ve(function(t, n) {
    return f.jsx(Sy, b({}, t, {
      ref: n,
      defaultSlots: vy,
      defaultSlotProps: yy
    }));
  }), Py = [
    "className",
    "slotProps"
  ], My = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "panelWrapper"
      ]
    }, $e, t);
  }, ky = se("div", {
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
  }), Ey = () => true, Uu = Ve(function(t, n) {
    const { className: o, slotProps: r = {} } = t, l = ge(t, Py), s = ie(), a = My(s);
    return f.jsx(vd, b({
      open: true,
      disableEnforceFocus: true,
      isEnabled: Ey
    }, r.TrapFocus, {
      children: f.jsx(ky, b({
        tabIndex: -1,
        className: de(a.root, o),
        ownerState: s
      }, l, {
        ref: n
      }))
    }));
  });
  function Fy(e) {
    var _a2;
    const t = ie();
    return f.jsx(Uu, b({}, e, {
      children: f.jsx(t.slots.columnsManagement, b({}, (_a2 = t.slotProps) == null ? void 0 : _a2.columnsManagement))
    }));
  }
  const Ty = [
    "children",
    "className",
    "classes"
  ], Oy = ft("MuiDataGrid", [
    "panel",
    "paper"
  ]), Dy = se(to, {
    name: "MuiDataGrid",
    slot: "Panel",
    overridesResolver: (e, t) => t.panel
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal
  })), Ry = se(qt, {
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
  })), $y = Ve((e, t) => {
    const { children: n, className: o } = e, r = ge(e, Ty), l = Ee(), s = ie(), a = Oy, [i, d] = u.useState(false), c = u.useCallback(() => {
      l.current.hidePreferences();
    }, [
      l
    ]), p = u.useCallback((C) => {
      C.key === "Escape" && l.current.hidePreferences();
    }, [
      l
    ]), h = u.useMemo(() => [
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
    ], []), [g, m] = u.useState(null);
    return u.useEffect(() => {
      var _a2, _b2;
      const C = (_b2 = (_a2 = l.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.querySelector('[data-id="gridPanelAnchor"]');
      C && m(C);
    }, [
      l
    ]), g ? f.jsx(Dy, b({
      placement: "bottom-start",
      className: de(a.panel, o),
      ownerState: s,
      anchorEl: g,
      modifiers: h
    }, r, {
      ref: t,
      children: f.jsx(dc, {
        mouseEvent: "onPointerUp",
        touchEvent: false,
        onClickAway: c,
        children: f.jsx(Ry, {
          className: a.paper,
          ownerState: s,
          elevation: 8,
          onKeyDown: p,
          children: i && n
        })
      })
    })) : null;
  }), Hy = [
    "className"
  ], Ly = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "panelContent"
      ]
    }, $e, t);
  }, jy = Je("div", {
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
  function Ay(e) {
    const { className: t } = e, n = ge(e, Hy), o = ie(), r = Ly(o);
    return f.jsx(jy, b({
      className: de(r.root, t),
      ownerState: o
    }, n));
  }
  const zy = [
    "className"
  ], Gy = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "panelFooter"
      ]
    }, $e, t);
  }, _y = Je("div", {
    name: "MuiDataGrid",
    slot: "PanelFooter",
    overridesResolver: (e, t) => t.panelFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5),
    display: "flex",
    justifyContent: "space-between"
  }));
  function Vy(e) {
    const { className: t } = e, n = ge(e, zy), o = ie(), r = Gy(o);
    return f.jsx(_y, b({
      className: de(r.root, t),
      ownerState: o
    }, n));
  }
  const Ny = [
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
  ], By = [
    "InputComponentProps"
  ], Wy = (e) => {
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
    }, $e, t);
  }, Uy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterForm",
    overridesResolver: (e, t) => t.filterForm
  })(({ theme: e }) => ({
    display: "flex",
    padding: e.spacing(1)
  })), Ky = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormDeleteIcon",
    overridesResolver: (e, t) => t.filterFormDeleteIcon
  })(({ theme: e }) => ({
    flexShrink: 0,
    justifyContent: "flex-end",
    marginRight: e.spacing(0.5),
    marginBottom: e.spacing(0.2)
  })), qy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormLogicOperatorInput",
    overridesResolver: (e, t) => t.filterFormLogicOperatorInput
  })({
    minWidth: 55,
    marginRight: 5,
    justifyContent: "end"
  }), Yy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormColumnInput",
    overridesResolver: (e, t) => t.filterFormColumnInput
  })({
    width: 150
  }), Xy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormOperatorInput",
    overridesResolver: (e, t) => t.filterFormOperatorInput
  })({
    width: 150
  }), Qy = se("div", {
    name: "MuiDataGrid",
    slot: "FilterFormValueInput",
    overridesResolver: (e, t) => t.filterFormValueInput
  })({
    width: 190
  }), Jy = (e) => {
    switch (e) {
      case Tt.And:
        return "filterPanelOperatorAnd";
      case Tt.Or:
        return "filterPanelOperatorOr";
      default:
        throw new Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
    }
  }, Yo = (e) => e.headerName || e.field, Ia = new Intl.Collator(), Pa = Ve(function(t, n) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const { item: o, hasMultipleFilters: r, deleteFilter: l, applyFilterChanges: s, showMultiFilterOperators: a, disableMultiFilterOperator: i, applyMultiFilterOperatorChanges: d, focusElementRef: c, logicOperators: p = [
      Tt.And,
      Tt.Or
    ], columnsSort: h, filterColumns: g, deleteIconProps: m = {}, logicOperatorInputProps: C = {}, operatorInputProps: y = {}, columnInputProps: w = {}, valueInputProps: x = {}, readOnly: E } = t, H = ge(t, Ny), M = Ee(), $ = Q(M, On), z = Q(M, Wc), D = Q(M, yt), S = nt(), v = nt(), k = nt(), O = nt(), R = ie(), _ = Wy(R), F = u.useRef(null), I = u.useRef(null), T = D.logicOperator ?? Tt.And, L = r && p.length > 0, A = ((_a2 = R.slotProps) == null ? void 0 : _a2.baseFormControl) || {}, j = (((_b2 = R.slotProps) == null ? void 0 : _b2.baseSelect) || {}).native ?? false, V = ((_c2 = R.slotProps) == null ? void 0 : _c2.baseInputLabel) || {}, U = ((_d2 = R.slotProps) == null ? void 0 : _d2.baseSelectOption) || {}, { InputComponentProps: W } = x, K = ge(x, By), { filteredColumns: B, selectedField: te } = u.useMemo(() => {
      let Z = o.field;
      const Se = $[o.field].filterable === false ? $[o.field] : null;
      if (Se) return {
        filteredColumns: [
          Se
        ],
        selectedField: Z
      };
      if (g === void 0 || typeof g != "function") return {
        filteredColumns: z,
        selectedField: Z
      };
      const ee = g({
        field: o.field,
        columns: z,
        currentFilters: (D == null ? void 0 : D.items) || []
      });
      return {
        filteredColumns: z.filter((ve) => {
          const Ce = ee.includes(ve.field);
          return ve.field === o.field && !Ce && (Z = void 0), Ce;
        }),
        selectedField: Z
      };
    }, [
      g,
      D == null ? void 0 : D.items,
      z,
      o.field,
      $
    ]), J = u.useMemo(() => {
      switch (h) {
        case "asc":
          return B.sort((Z, Se) => Ia.compare(Yo(Z), Yo(Se)));
        case "desc":
          return B.sort((Z, Se) => -Ia.compare(Yo(Z), Yo(Se)));
        default:
          return B;
      }
    }, [
      B,
      h
    ]), ne = o.field ? M.current.getColumn(o.field) : null, ae = u.useMemo(() => {
      var _a3;
      return !o.operator || !ne ? null : (_a3 = ne.filterOperators) == null ? void 0 : _a3.find((Z) => Z.value === o.operator);
    }, [
      o,
      ne
    ]), we = u.useCallback((Z) => {
      const Se = Z.target.value, ee = M.current.getColumn(Se);
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
      M,
      s,
      o,
      ne,
      ae
    ]), Y = u.useCallback((Z) => {
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
    ]), re = u.useCallback((Z) => {
      const Se = Z.target.value === Tt.And.toString() ? Tt.And : Tt.Or;
      d(Se);
    }, [
      d
    ]), ye = () => {
      l(o);
    };
    return u.useImperativeHandle(c, () => ({
      focus: () => {
        var _a3;
        (ae == null ? void 0 : ae.InputComponent) ? (_a3 = F == null ? void 0 : F.current) == null ? void 0 : _a3.focus() : I.current.focus();
      }
    }), [
      ae
    ]), f.jsxs(Uy, b({
      className: _.root,
      "data-id": o.id,
      ownerState: R
    }, H, {
      ref: n,
      children: [
        f.jsx(Ky, b({
          variant: "standard",
          as: R.slots.baseFormControl
        }, A, m, {
          className: de(_.deleteIcon, A.className, m.className),
          ownerState: R,
          children: f.jsx(R.slots.baseIconButton, b({
            "aria-label": M.current.getLocaleText("filterPanelDeleteIconLabel"),
            title: M.current.getLocaleText("filterPanelDeleteIconLabel"),
            onClick: ye,
            size: "small",
            disabled: E
          }, (_e = R.slotProps) == null ? void 0 : _e.baseIconButton, {
            children: f.jsx(R.slots.filterPanelDeleteIcon, {
              fontSize: "small"
            })
          }))
        })),
        f.jsx(qy, b({
          variant: "standard",
          as: R.slots.baseFormControl
        }, A, C, {
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
            A.sx,
            C.sx
          ],
          className: de(_.logicOperatorInput, A.className, C.className),
          ownerState: R,
          children: f.jsx(R.slots.baseSelect, b({
            inputProps: {
              "aria-label": M.current.getLocaleText("filterPanelLogicOperator")
            },
            value: T ?? "",
            onChange: re,
            disabled: !!i || p.length === 1,
            native: j
          }, (_f2 = R.slotProps) == null ? void 0 : _f2.baseSelect, {
            children: p.map((Z) => u.createElement(R.slots.baseSelectOption, b({}, U, {
              native: j,
              key: Z.toString(),
              value: Z.toString()
            }), M.current.getLocaleText(Jy(Z))))
          }))
        })),
        f.jsxs(Yy, b({
          variant: "standard",
          as: R.slots.baseFormControl
        }, A, w, {
          className: de(_.columnInput, A.className, w.className),
          ownerState: R,
          children: [
            f.jsx(R.slots.baseInputLabel, b({}, V, {
              htmlFor: S,
              id: v,
              children: M.current.getLocaleText("filterPanelColumns")
            })),
            f.jsx(R.slots.baseSelect, b({
              labelId: v,
              id: S,
              label: M.current.getLocaleText("filterPanelColumns"),
              value: te ?? "",
              onChange: we,
              native: j,
              disabled: E
            }, (_g2 = R.slotProps) == null ? void 0 : _g2.baseSelect, {
              children: J.map((Z) => u.createElement(R.slots.baseSelectOption, b({}, U, {
                native: j,
                key: Z.field,
                value: Z.field
              }), Yo(Z)))
            }))
          ]
        })),
        f.jsxs(Xy, b({
          variant: "standard",
          as: R.slots.baseFormControl
        }, A, y, {
          className: de(_.operatorInput, A.className, y.className),
          ownerState: R,
          children: [
            f.jsx(R.slots.baseInputLabel, b({}, V, {
              htmlFor: k,
              id: O,
              children: M.current.getLocaleText("filterPanelOperator")
            })),
            f.jsx(R.slots.baseSelect, b({
              labelId: O,
              label: M.current.getLocaleText("filterPanelOperator"),
              id: k,
              value: o.operator,
              onChange: Y,
              native: j,
              inputRef: I,
              disabled: E
            }, (_h2 = R.slotProps) == null ? void 0 : _h2.baseSelect, {
              children: (_i2 = ne == null ? void 0 : ne.filterOperators) == null ? void 0 : _i2.map((Z) => u.createElement(R.slots.baseSelectOption, b({}, U, {
                native: j,
                key: Z.value,
                value: Z.value
              }), Z.label || M.current.getLocaleText(`filterOperator${ce(Z.value)}`)))
            }))
          ]
        })),
        f.jsx(Qy, b({
          variant: "standard",
          as: R.slots.baseFormControl
        }, A, K, {
          className: de(_.valueInput, A.className, K.className),
          ownerState: R,
          children: (ae == null ? void 0 : ae.InputComponent) ? f.jsx(ae.InputComponent, b({
            apiRef: M,
            item: o,
            applyValue: s,
            focusElementRef: F,
            disabled: E
          }, ae.InputComponentProps, W), o.field) : null
        }))
      ]
    }));
  }), Zy = [
    "logicOperators",
    "columnsSort",
    "filterFormProps",
    "getColumnForNewFilter",
    "children",
    "disableAddFilterButton",
    "disableRemoveAllButton"
  ], Ma = (e) => ({
    field: e.field,
    operator: e.filterOperators[0].value,
    id: Math.round(Math.random() * 1e5)
  }), eS = Ve(function(t, n) {
    var _a2, _b2;
    const o = Ee(), r = ie(), l = Q(o, yt), s = Q(o, Wc), a = Q(o, ab), i = u.useRef(null), d = u.useRef(null), { logicOperators: c = [
      Tt.And,
      Tt.Or
    ], columnsSort: p, filterFormProps: h, getColumnForNewFilter: g, disableAddFilterButton: m = false, disableRemoveAllButton: C = false } = t, y = ge(t, Zy), w = o.current.upsertFilterItem, x = u.useCallback((O) => {
      o.current.setFilterLogicOperator(O);
    }, [
      o
    ]), E = u.useCallback(() => {
      let O;
      if (g && typeof g == "function") {
        const R = g({
          currentFilters: (l == null ? void 0 : l.items) || [],
          columns: s
        });
        if (R === null) return null;
        O = s.find(({ field: _ }) => _ === R);
      } else O = s.find((R) => {
        var _a3;
        return (_a3 = R.filterOperators) == null ? void 0 : _a3.length;
      });
      return O ? Ma(O) : null;
    }, [
      l == null ? void 0 : l.items,
      s,
      g
    ]), H = u.useCallback(() => {
      if (g === void 0 || typeof g != "function") return E();
      const O = l.items.length ? l.items : [
        E()
      ].filter(Boolean), R = g({
        currentFilters: O,
        columns: s
      });
      if (R === null) return null;
      const _ = s.find(({ field: F }) => F === R);
      return _ ? Ma(_) : null;
    }, [
      l.items,
      s,
      g,
      E
    ]), M = u.useMemo(() => l.items.length ? l.items : (d.current || (d.current = E()), d.current ? [
      d.current
    ] : []), [
      l.items,
      E
    ]), $ = M.length > 1, { readOnlyFilters: z, validFilters: D } = u.useMemo(() => M.reduce((O, R) => (a[R.field] ? O.validFilters.push(R) : O.readOnlyFilters.push(R), O), {
      readOnlyFilters: [],
      validFilters: []
    }), [
      M,
      a
    ]), S = u.useCallback(() => {
      const O = H();
      O && o.current.upsertFilterItems([
        ...M,
        O
      ]);
    }, [
      o,
      H,
      M
    ]), v = u.useCallback((O) => {
      const R = D.length === 1;
      o.current.deleteFilterItem(O), R && o.current.hideFilterPanel();
    }, [
      o,
      D.length
    ]), k = u.useCallback(() => D.length === 1 && D[0].value === void 0 ? (o.current.deleteFilterItem(D[0]), o.current.hideFilterPanel()) : o.current.setFilterModel(b({}, l, {
      items: z
    }), "removeAllFilterItems"), [
      o,
      z,
      l,
      D
    ]);
    return u.useEffect(() => {
      c.length > 0 && l.logicOperator && !c.includes(l.logicOperator) && x(c[0]);
    }, [
      c,
      x,
      l.logicOperator
    ]), u.useEffect(() => {
      D.length > 0 && i.current.focus();
    }, [
      D.length
    ]), f.jsxs(Uu, b({}, y, {
      ref: n,
      children: [
        f.jsxs(Ay, {
          children: [
            z.map((O, R) => f.jsx(Pa, b({
              item: O,
              applyFilterChanges: w,
              deleteFilter: v,
              hasMultipleFilters: $,
              showMultiFilterOperators: R > 0,
              disableMultiFilterOperator: R !== 1,
              applyMultiFilterOperatorChanges: x,
              focusElementRef: null,
              readOnly: true,
              logicOperators: c,
              columnsSort: p
            }, h), O.id == null ? R : O.id)),
            D.map((O, R) => f.jsx(Pa, b({
              item: O,
              applyFilterChanges: w,
              deleteFilter: v,
              hasMultipleFilters: $,
              showMultiFilterOperators: z.length + R > 0,
              disableMultiFilterOperator: z.length + R !== 1,
              applyMultiFilterOperatorChanges: x,
              focusElementRef: R === D.length - 1 ? i : null,
              logicOperators: c,
              columnsSort: p
            }, h), O.id == null ? R + z.length : O.id))
          ]
        }),
        !r.disableMultipleColumnsFiltering && !(m && C) ? f.jsxs(Vy, {
          children: [
            m ? f.jsx("span", {}) : f.jsx(r.slots.baseButton, b({
              onClick: S,
              startIcon: f.jsx(r.slots.filterPanelAddIcon, {})
            }, (_a2 = r.slotProps) == null ? void 0 : _a2.baseButton, {
              children: o.current.getLocaleText("filterPanelAddFilter")
            })),
            !C && D.length > 0 ? f.jsx(r.slots.baseButton, b({
              onClick: k,
              startIcon: f.jsx(r.slots.filterPanelRemoveAllIcon, {})
            }, (_b2 = r.slotProps) == null ? void 0 : _b2.baseButton, {
              children: o.current.getLocaleText("filterPanelRemoveAll")
            })) : null
          ]
        }) : null
      ]
    }));
  }), tS = (e, t) => {
    const n = new Set(Object.keys(e).filter((l) => e[l] === false)), o = new Set(Object.keys(t).filter((l) => t[l] === false));
    if (n.size !== o.size) return false;
    let r = true;
    return n.forEach((l) => {
      o.has(l) || (r = false);
    }), r;
  }, nS = (e, t) => (e.headerName || e.field).toLowerCase().indexOf(t) > -1, oS = (e) => {
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
    }, $e, t);
  }, ka = new Intl.Collator();
  function rS(e) {
    var _a2, _b2, _c2, _d2;
    const t = Ee(), n = u.useRef(null), o = Q(t, on), r = Sn(() => Zt(t)).current, l = Q(t, Zt), s = ie(), [a, i] = u.useState(""), d = oS(s), { sort: c, searchPredicate: p = nS, autoFocusSearchField: h = true, disableShowHideToggle: g = false, disableResetButton: m = false, toggleAllMode: C = "all", getTogglableColumns: y, searchInputProps: w } = e, x = u.useMemo(() => tS(l, r), [
      l,
      r
    ]), E = u.useMemo(() => {
      switch (c) {
        case "asc":
          return [
            ...o
          ].sort((F, I) => ka.compare(F.headerName || F.field, I.headerName || I.field));
        case "desc":
          return [
            ...o
          ].sort((F, I) => -ka.compare(F.headerName || F.field, I.headerName || I.field));
        default:
          return o;
      }
    }, [
      o,
      c
    ]), H = (F) => {
      const { name: I } = F.target;
      t.current.setColumnVisibility(I, l[I] === false);
    }, M = u.useMemo(() => {
      const F = y ? y(E) : null, I = F ? E.filter(({ field: T }) => F.includes(T)) : E;
      return a ? I.filter((T) => p(T, a.toLowerCase())) : I;
    }, [
      E,
      a,
      p,
      y
    ]), $ = u.useCallback((F) => {
      const I = Zt(t), T = b({}, I), L = y ? y(o) : null;
      return (C === "filteredOnly" ? M : o).forEach((A) => {
        A.hideable && (L == null || L.includes(A.field)) && (F ? delete T[A.field] : T[A.field] = false);
      }), t.current.setColumnVisibilityModel(T);
    }, [
      t,
      o,
      y,
      C,
      M
    ]), z = u.useCallback((F) => {
      i(F.target.value);
    }, []), D = u.useMemo(() => M.filter((F) => F.hideable), [
      M
    ]), S = u.useMemo(() => D.every((F) => l[F.field] == null || l[F.field] !== false), [
      l,
      D
    ]), v = u.useMemo(() => D.every((F) => l[F.field] === false), [
      l,
      D
    ]), k = u.useRef(null);
    u.useEffect(() => {
      h ? n.current.focus() : k.current && typeof k.current.focus == "function" && k.current.focus();
    }, [
      h
    ]);
    let O = false;
    const R = (F) => O === false && F.hideable !== false ? (O = true, true) : false, _ = u.useCallback(() => {
      i(""), n.current.focus();
    }, []);
    return f.jsxs(u.Fragment, {
      children: [
        f.jsx(sS, {
          className: d.header,
          ownerState: s,
          children: f.jsx(iS, b({
            as: s.slots.baseTextField,
            ownerState: s,
            placeholder: t.current.getLocaleText("columnsManagementSearchTitle"),
            inputRef: n,
            className: d.searchInput,
            value: a,
            onChange: z,
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
          }, (_b2 = s.slotProps) == null ? void 0 : _b2.baseTextField, w))
        }),
        f.jsxs(lS, {
          className: d.root,
          ownerState: s,
          children: [
            M.map((F) => {
              var _a3;
              return f.jsx(Ln, {
                className: d.row,
                control: f.jsx(s.slots.baseCheckbox, b({
                  disabled: F.hideable === false,
                  checked: l[F.field] !== false,
                  onClick: H,
                  name: F.field,
                  sx: {
                    p: 0.5
                  },
                  inputRef: R(F) ? k : void 0
                }, (_a3 = s.slotProps) == null ? void 0 : _a3.baseCheckbox)),
                label: F.headerName || F.field
              }, F.field);
            }),
            M.length === 0 && f.jsx(cS, {
              ownerState: s,
              children: t.current.getLocaleText("columnsManagementNoColumns")
            })
          ]
        }),
        (!g || !m) && M.length > 0 ? f.jsxs(aS, {
          ownerState: s,
          className: d.footer,
          children: [
            g ? f.jsx("span", {}) : f.jsx(Ln, {
              control: f.jsx(s.slots.baseCheckbox, b({
                disabled: D.length === 0,
                checked: S,
                indeterminate: !S && !v,
                onClick: () => $(!S),
                name: t.current.getLocaleText("columnsManagementShowHideAllText"),
                sx: {
                  p: 0.5
                }
              }, (_c2 = s.slotProps) == null ? void 0 : _c2.baseCheckbox)),
              label: t.current.getLocaleText("columnsManagementShowHideAllText")
            }),
            m ? null : f.jsx(s.slots.baseButton, b({
              onClick: () => t.current.setColumnVisibilityModel(r),
              disabled: x
            }, (_d2 = s.slotProps) == null ? void 0 : _d2.baseButton, {
              children: t.current.getLocaleText("columnsManagementReset")
            }))
          ]
        }) : null
      ]
    });
  }
  const lS = se("div", {
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
  })), sS = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementHeader",
    overridesResolver: (e, t) => t.columnsManagementHeader
  })(({ theme: e }) => ({
    padding: e.spacing(1.5, 3)
  })), iS = se(Gt, {
    name: "MuiDataGrid",
    slot: "ColumnsManagementSearchInput",
    overridesResolver: (e, t) => t.columnsManagementSearchInput
  })(({ theme: e }) => ({
    [`& .${Kt.root}`]: {
      padding: e.spacing(0, 1.5, 0, 1.5)
    },
    [`& .${Kt.input}::-webkit-search-decoration,
  & .${Kt.input}::-webkit-search-cancel-button,
  & .${Kt.input}::-webkit-search-results-button,
  & .${Kt.input}::-webkit-search-results-decoration`]: {
      display: "none"
    }
  })), aS = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementFooter",
    overridesResolver: (e, t) => t.columnsManagementFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5, 1, 0.5, 3),
    display: "flex",
    justifyContent: "space-between",
    borderTop: `1px solid ${e.palette.divider}`
  })), cS = se("div")(({ theme: e }) => ({
    padding: e.spacing(0.5, 0),
    color: e.palette.grey[500]
  })), uS = Ve(function(t, n) {
    var _a2, _b2;
    const { children: o, slotProps: r = {} } = t, l = r.button || {}, s = r.tooltip || {}, a = Ee(), i = ie(), d = nt(), c = nt(), [p, h] = u.useState(false), g = u.useRef(null), m = jt(n, g), C = (x) => {
      var _a3;
      h((E) => !E), (_a3 = l.onClick) == null ? void 0 : _a3.call(l, x);
    }, y = () => h(false), w = (x) => {
      x.key === "Tab" && x.preventDefault(), Bu(x.key) && y();
    };
    return o == null ? null : f.jsxs(u.Fragment, {
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
            "aria-controls": p ? c : void 0,
            id: d
          }, (_b2 = i.slotProps) == null ? void 0 : _b2.baseButton, l, {
            onClick: C,
            ref: m,
            children: a.current.getLocaleText("toolbarExport")
          }))
        })),
        f.jsx(zs, {
          open: p,
          target: g.current,
          onClose: y,
          position: "bottom-start",
          children: f.jsx(Ss, {
            id: c,
            className: P.menuList,
            "aria-labelledby": d,
            onKeyDown: w,
            autoFocusItem: p,
            children: u.Children.map(o, (x) => u.isValidElement(x) ? u.cloneElement(x, {
              hideMenu: y
            }) : x)
          })
        })
      ]
    });
  }), dS = [
    "hideMenu",
    "options"
  ], pS = [
    "hideMenu",
    "options"
  ], fS = [
    "csvOptions",
    "printOptions",
    "excelOptions"
  ];
  function gS(e) {
    const t = Ee(), { hideMenu: n, options: o } = e, r = ge(e, dS);
    return f.jsx($t, b({
      onClick: () => {
        t.current.exportDataAsCsv(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportCSV")
    }));
  }
  function hS(e) {
    const t = Ee(), { hideMenu: n, options: o } = e, r = ge(e, pS);
    return f.jsx($t, b({
      onClick: () => {
        t.current.exportDataAsPrint(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportPrint")
    }));
  }
  Ve(function(t, n) {
    const o = t, { csvOptions: r = {}, printOptions: l = {}, excelOptions: s } = o, a = ge(o, fS), d = Ee().current.unstable_applyPipeProcessors("exportMenu", [], {
      excelOptions: s,
      csvOptions: r,
      printOptions: l
    }).sort((c, p) => c.componentName > p.componentName ? 1 : -1);
    return d.length === 0 ? null : f.jsx(uS, b({}, a, {
      ref: n,
      children: d.map((c, p) => u.cloneElement(c.component, {
        key: p
      }))
    }));
  });
  const mS = [
    "className",
    "selectedRowCount"
  ], bS = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "selectedRowCount"
      ]
    }, $e, t);
  }, CS = Je("div", {
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
  })), wS = Ve(function(t, n) {
    const { className: o, selectedRowCount: r } = t, l = ge(t, mS), s = Ee(), a = ie(), i = bS(a), d = s.current.getLocaleText("footerRowSelected")(r);
    return f.jsx(CS, b({
      className: de(i.root, o),
      ownerState: a
    }, l, {
      ref: n,
      children: d
    }));
  }), xS = Ve(function(t, n) {
    var _a2, _b2;
    const o = Ee(), r = ie(), l = Q(o, Bm), s = Q(o, Xb), a = Q(o, Ns), i = !r.hideFooterSelectedRowCount && s > 0 ? f.jsx(wS, {
      selectedRowCount: s
    }) : f.jsx("div", {}), d = !r.hideFooterRowCount && !r.pagination ? f.jsx(r.slots.footerRowCount, b({}, (_a2 = r.slotProps) == null ? void 0 : _a2.footerRowCount, {
      rowCount: l,
      visibleRowCount: a
    })) : null, c = r.pagination && !r.hideFooterPagination && r.slots.pagination && f.jsx(r.slots.pagination, b({}, (_b2 = r.slotProps) == null ? void 0 : _b2.pagination));
    return f.jsxs(Zx, b({}, t, {
      ref: n,
      children: [
        i,
        d,
        c
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
  function ti({ header: e, borderTop: t = true, borderBottom: n, pinnedRight: o }) {
    return f.jsx("div", {
      role: "presentation",
      className: de(Xo.root, e && Xo.header, t && Xo.borderTop, n && Xo.borderBottom, o && Xo.pinnedRight)
    });
  }
  const vS = Je("div", {
    name: "MuiDataGrid",
    slot: "SkeletonLoadingOverlay",
    overridesResolver: (e, t) => t.skeletonLoadingOverlay
  })({
    minWidth: "100%",
    width: "max-content",
    height: "100%",
    overflow: "clip"
  }), yS = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "skeletonLoadingOverlay"
      ]
    }, $e, t);
  }, Ea = (e) => parseInt(e.getAttribute("data-colindex"), 10), SS = Ve(function(t, n) {
    const o = ie(), { slots: r } = o, l = At(), s = yS({
      classes: o.classes
    }), a = u.useRef(null), i = jt(a, n), d = Ee(), c = Q(d, mt), p = (c == null ? void 0 : c.viewportInnerSize.height) ?? 0, h = Math.ceil(p / c.rowHeight), g = Q(d, fl), m = Q(d, Bn), C = u.useMemo(() => m.filter(($) => $ <= g).length, [
      g,
      m
    ]), y = Q(d, st), w = u.useMemo(() => y.slice(0, C), [
      y,
      C
    ]), x = Q(d, Ho), E = u.useCallback(($) => {
      if (x.left.findIndex((z) => z.field === $) !== -1) return Oe.LEFT;
      if (x.right.findIndex((z) => z.field === $) !== -1) return Oe.RIGHT;
    }, [
      x.left,
      x.right
    ]), H = u.useMemo(() => {
      const $ = [];
      for (let z = 0; z < h; z += 1) {
        const D = [];
        for (let S = 0; S < w.length; S += 1) {
          const v = w[S], k = E(v.field), O = k === Oe.LEFT, R = k === Oe.RIGHT, _ = Lu(k, l), F = _ ? x[_].length : w.length - x.left.length - x.right.length, I = _ ? x[_].findIndex((ae) => ae.field === v.field) : S - x.left.length, T = c.hasScrollY ? c.scrollbarSize : 0, L = Sl({}, l, k, rr(k, v.computedWidth, S, m, c.columnsTotalWidth, T)), A = c.columnsTotalWidth < c.viewportOuterSize.width, G = al(k, I, F, o.showCellVerticalBorder, A), j = cl(k, I), V = S === w.length - 1, U = R && I === 0, W = U && A, K = V && !U && A, B = c.viewportOuterSize.width - c.columnsTotalWidth, te = Math.max(0, B), J = f.jsx(r.skeletonCell, {
            width: te,
            empty: true
          }, `skeleton-filler-column-${z}`), ne = V && T !== 0;
          W && D.push(J), D.push(f.jsx(r.skeletonCell, {
            field: v.field,
            type: v.type,
            align: v.align,
            width: "var(--width)",
            height: c.rowHeight,
            "data-colindex": S,
            className: de(O && P["cell--pinnedLeft"], R && P["cell--pinnedRight"], G && P["cell--withRightBorder"], j && P["cell--withLeftBorder"]),
            style: b({
              "--width": `${v.computedWidth}px`
            }, L)
          }, `skeleton-column-${z}-${v.field}`)), K && D.push(J), ne && D.push(f.jsx(ti, {
            pinnedRight: x.right.length > 0
          }, `skeleton-scrollbar-filler-${z}`));
        }
        $.push(f.jsx("div", {
          className: de(P.row, P.rowSkeleton, z === 0 && P["row--firstVisible"]),
          children: D
        }, `skeleton-row-${z}`));
      }
      return $;
    }, [
      r,
      w,
      x,
      h,
      o.showCellVerticalBorder,
      c,
      m,
      E,
      l
    ]);
    return oe(d, "columnResize", ($) => {
      var _a2, _b2, _c2, _d2, _e;
      const { colDef: z, width: D } = $, S = (_a2 = a.current) == null ? void 0 : _a2.querySelectorAll(`[data-field="${Dn(z.field)}"]`);
      if (!S) throw new Error("MUI X: Expected skeleton cells to be defined with `data-field` attribute.");
      const v = w.findIndex((I) => I.field === z.field), k = E(z.field), O = k === Oe.LEFT, R = k === Oe.RIGHT, _ = getComputedStyle(S[0]).getPropertyValue("--width"), F = parseInt(_, 10) - D;
      S && S.forEach((I) => {
        I.style.setProperty("--width", `${D}px`);
      }), O && ((_c2 = (_b2 = a.current) == null ? void 0 : _b2.querySelectorAll(`.${P["cell--pinnedLeft"]}`)) == null ? void 0 : _c2.forEach((T) => {
        Ea(T) > v && (T.style.left = `${parseInt(getComputedStyle(T).left, 10) - F}px`);
      })), R && ((_e = (_d2 = a.current) == null ? void 0 : _d2.querySelectorAll(`.${P["cell--pinnedRight"]}`)) == null ? void 0 : _e.forEach((T) => {
        Ea(T) < v && (T.style.right = `${parseInt(getComputedStyle(T).right, 10) + F}px`);
      }));
    }), f.jsx(vS, b({
      className: s.root
    }, t, {
      ref: i,
      children: H
    }));
  }), IS = [
    "variant",
    "noRowsVariant",
    "style"
  ], PS = {
    "circular-progress": {
      component: yd,
      style: {}
    },
    "linear-progress": {
      component: Pg,
      style: {
        display: "block"
      }
    },
    skeleton: {
      component: SS,
      style: {
        display: "block"
      }
    }
  }, MS = Ve(function(t, n) {
    const { variant: o = "circular-progress", noRowsVariant: r = "circular-progress", style: l } = t, s = ge(t, IS), a = Ee(), i = Q(a, wr), d = PS[i === 0 ? r : o];
    return f.jsx(Zs, b({
      style: b({}, d.style, l)
    }, s, {
      ref: n,
      children: f.jsx(d.component, {})
    }));
  }), kS = Ve(function(t, n) {
    const r = Ee().current.getLocaleText("noRowsLabel");
    return f.jsx(Zs, b({}, t, {
      ref: n,
      children: r
    }));
  }), ES = se(dh)(({ theme: e }) => ({
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
  })), FS = (e, t) => ({ from: n, to: o, count: r, page: l }) => e({
    from: n,
    to: o,
    count: r,
    page: l,
    estimated: t
  }), TS = ({ from: e, to: t, count: n, estimated: o }) => o ? `${e}\u2013${t} of ${n !== -1 ? n : `more than ${o > t ? o : t}`}` : `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`, OS = Ve(function(t, n) {
    const o = Ee(), r = ie(), l = Q(o, kt), s = Q(o, mo), a = Q(o, fu), { paginationMode: i, loading: d, estimatedRowCount: c } = r, p = u.useMemo(() => s === -1 && i === "server" && d ? {
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
    ]), h = u.useMemo(() => Math.max(0, a - 1), [
      a
    ]), g = u.useMemo(() => s === -1 || l.page <= h ? l.page : h, [
      h,
      l.page,
      s
    ]), m = u.useCallback((H) => {
      const M = Number(H.target.value);
      o.current.setPageSize(M);
    }, [
      o
    ]), C = u.useCallback((H, M) => {
      o.current.setPage(M);
    }, [
      o
    ]), w = ((H) => {
      for (let M = 0; M < r.pageSizeOptions.length; M += 1) {
        const $ = r.pageSizeOptions[M];
        if (typeof $ == "number") {
          if ($ === H) return true;
        } else if ($.value === H) return true;
      }
      return false;
    })(l.pageSize) ? r.pageSizeOptions : [], x = o.current.getLocaleText("MuiTablePagination"), E = FS(x.labelDisplayedRows || TS, c);
    return f.jsx(ES, b({
      component: "div",
      count: s,
      page: g,
      rowsPerPageOptions: w,
      rowsPerPage: l.pageSize,
      onPageChange: C,
      onRowsPerPageChange: m
    }, p, x, {
      labelDisplayedRows: E
    }, t, {
      ref: n
    }));
  }), DS = [
    "className",
    "rowCount",
    "visibleRowCount"
  ], RS = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "rowCount"
      ]
    }, $e, t);
  }, $S = Je("div", {
    name: "MuiDataGrid",
    slot: "RowCount",
    overridesResolver: (e, t) => t.rowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2)
  })), HS = Ve(function(t, n) {
    const { className: o, rowCount: r, visibleRowCount: l } = t, s = ge(t, DS), a = Ee(), i = ie(), d = RS(i);
    if (r === 0) return null;
    const c = l < r ? a.current.getLocaleText("footerTotalVisibleRows")(l, r) : r.toLocaleString();
    return f.jsxs($S, b({
      className: de(d.root, o),
      ownerState: i
    }, s, {
      ref: n,
      children: [
        a.current.getLocaleText("footerTotalRows"),
        " ",
        c
      ]
    }));
  });
  function LS(e) {
    for (const t in e) return false;
    return true;
  }
  function jS(e, t) {
    return me(t, $e, e);
  }
  const AS = [
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
  ], zS = Cr(ht, (e, t) => t ? !!LS(e) : false), GS = Ve(function(t, n) {
    var _a2;
    const { selected: o, rowId: r, row: l, index: s, style: a, rowHeight: i, className: d, visibleColumns: c, pinnedColumns: p, offsetLeft: h, columnsTotalWidth: g, firstColumnIndex: m, lastColumnIndex: C, focusedColumnIndex: y, isFirstVisible: w, isLastVisible: x, isNotVisible: E, showBottomBorder: H, scrollbarWidth: M, gridHasFiller: $, onClick: z, onDoubleClick: D, onMouseEnter: S, onMouseLeave: v, onMouseOut: k, onMouseOver: O } = t, R = ge(t, AS), _ = an(), F = Qs(), I = u.useRef(null), T = ie(), L = Ys(_), A = Q(_, un), G = Q(_, no), j = Q(_, Bn), V = T.rowReordering, U = ar(_, zS, V), W = jt(I, n), K = _.current.getRowNode(r), B = ar(_, $u, {
      rowId: r,
      editMode: T.editMode
    }), te = T.editMode === yn.Row, J = y !== void 0, ne = J && y >= p.left.length && y < m, ae = J && y < c.length - p.right.length && y >= C, we = jS(T.classes, {
      root: [
        "row",
        o && "selected",
        te && "row--editable",
        B && "row--editing",
        w && "row--firstVisible",
        x && "row--lastVisible",
        H && "row--borderBottom",
        i === "auto" && "row--dynamicHeight"
      ]
    }), Y = F.hooks.useGridRowAriaAttributes();
    u.useLayoutEffect(() => {
      if (L.range) {
        const fe = _.current.getRowIndexRelativeToVisibleRows(r);
        fe !== void 0 && _.current.unstable_setLastMeasuredRowIndex(fe);
      }
      if (I.current && i === "auto") return _.current.observeRowHeight(I.current, r);
    }, [
      _,
      L.range,
      i,
      r
    ]);
    const re = u.useCallback((fe, xe) => (pe) => {
      Mr(pe) || _.current.getRow(r) && (_.current.publishEvent(fe, _.current.getRowParams(r), pe), xe && xe(pe));
    }, [
      _,
      r
    ]), ye = u.useCallback((fe) => {
      var _a3, _b2;
      const pe = (_a3 = sl(fe.target, P.cell)) == null ? void 0 : _a3.getAttribute("data-field");
      pe && (pe === Ao.field || pe === ml || pe === "__reorder__" || _.current.getCellMode(r, pe) === Xe.Edit || ((_b2 = _.current.getColumn(pe)) == null ? void 0 : _b2.type) === gl) || re("rowClick", z)(fe);
    }, [
      _,
      z,
      re,
      r
    ]), { slots: Z, slotProps: Se, disableColumnReorder: ee } = T, ve = Q(_, () => b({}, _.current.getRowHeightEntry(r)), $s), Ce = u.useMemo(() => {
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
      const rt = (Re == null ? void 0 : Re.cellProps.width) ?? fe.computedWidth, xt = (Re == null ? void 0 : Re.cellProps.colSpan) ?? 1, ut = rr(je, fe.computedWidth, pe, j, g, M);
      if (K.type === "skeletonRow") return f.jsx(Z.skeletonCell, {
        type: fe.type,
        width: rt,
        height: i,
        field: fe.field,
        align: fe.align
      }, fe.field);
      const In = fe.field === "__reorder__", Ot = !(ee || fe.disableReorder), Pn = U && !A.length && G <= 1, It = !(Ot || In && Pn), zt = je === Oe.VIRTUAL, Et = cl(je, xe), Dt = al(je, xe, he, T.showCellVerticalBorder, $);
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
    }, ze = p.left.map((fe, xe) => Be(fe, xe, xe, p.left.length, Oe.LEFT)), He = p.right.map((fe, xe) => {
      const pe = c.length - p.right.length + xe;
      return Be(fe, xe, pe, p.right.length, Oe.RIGHT);
    }), Le = c.length - p.left.length - p.right.length, We = [];
    ne && We.push(Be(c[y], y - p.left.length, y, Le, Oe.VIRTUAL));
    for (let fe = m; fe < C; fe += 1) {
      const xe = c[fe], pe = fe - p.left.length;
      xe && We.push(Be(xe, pe, fe, Le));
    }
    ae && We.push(Be(c[y], y - p.left.length, y, Le, Oe.VIRTUAL));
    const Ge = l ? {
      onClick: ye,
      onDoubleClick: re("rowDoubleClick", D),
      onMouseEnter: re("rowMouseEnter", S),
      onMouseLeave: re("rowMouseLeave", v),
      onMouseOut: re("rowMouseOut", k),
      onMouseOver: re("rowMouseOver", O)
    } : null;
    return f.jsxs("div", b({
      "data-id": r,
      "data-rowindex": s,
      role: "row",
      className: de(...Fe, we.root, d),
      style: Ce
    }, Ne, Ge, R, {
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
        He,
        M !== 0 && f.jsx(ti, {
          pinnedRight: p.right.length > 0,
          borderTop: !w
        })
      ]
    }));
  }), _S = Tn(GS), VS = () => {
    const e = an(), t = ie(), n = Q(e, st), o = Q(e, Vs), r = Q(e, Ir), l = Q(e, Rc);
    return {
      role: "grid",
      "aria-colcount": n.length,
      "aria-rowcount": r + 1 + l + o,
      "aria-multiselectable": Bs(t)
    };
  }, NS = () => {
    const e = an(), t = Q(e, Gn), n = Q(e, Ir);
    return u.useCallback((o, r) => {
      const l = {}, s = r + n + 2;
      return l["aria-rowindex"] = s, e.current.isRowSelectable(o.id) && (l["aria-selected"] = t[o.id] !== void 0), l;
    }, [
      e,
      t,
      n
    ]);
  };
  function BS({ privateApiRef: e, configuration: t, props: n, children: o }) {
    const r = u.useRef(e.current.getPublicApi());
    return f.jsx(Du.Provider, {
      value: t,
      children: f.jsx(wc.Provider, {
        value: n,
        children: f.jsx(Mu.Provider, {
          value: e,
          children: f.jsx(Cc.Provider, {
            value: r,
            children: o
          })
        })
      })
    });
  }
  const WS = (e) => {
    const t = u.useRef(null), n = u.useRef(null), o = u.useRef(null), r = u.useRef(null), l = u.useRef(null), s = u.useRef(null);
    e.current.register("public", {
      rootElementRef: t
    }), e.current.register("private", {
      mainElementRef: n,
      virtualScrollerRef: o,
      virtualScrollbarVerticalRef: r,
      virtualScrollbarHorizontalRef: l,
      columnHeadersContainerRef: s
    });
  }, US = (e) => {
    const t = At();
    e.current.state.isRtl === void 0 && (e.current.state.isRtl = t);
    const n = u.useRef(true);
    u.useEffect(() => {
      n.current ? n.current = false : e.current.setState((o) => b({}, o, {
        isRtl: t
      }));
    }, [
      e,
      t
    ]);
  }, KS = ob() && window.localStorage.getItem("DEBUG") != null, Zo = () => {
  }, qS = {
    debug: Zo,
    info: Zo,
    warn: Zo,
    error: Zo
  }, Fa = [
    "debug",
    "info",
    "warn",
    "error"
  ];
  function Ta(e, t, n = console) {
    const o = Fa.indexOf(t);
    if (o === -1) throw new Error(`MUI X: Log level ${t} not recognized.`);
    return Fa.reduce((l, s, a) => (a >= o ? l[s] = (...i) => {
      const [d, ...c] = i;
      n[s](`MUI X: ${e} - ${d}`, ...c);
    } : l[s] = Zo, l), {});
  }
  const YS = (e, t) => {
    const n = u.useCallback((o) => KS ? Ta(o, "debug", t.logger) : t.logLevel ? Ta(o, t.logLevel.toString(), t.logger) : qS, [
      t.logLevel,
      t.logger
    ]);
    Me(e, {
      getLogger: n
    }, "private");
  };
  class XS {
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
  class ni {
    static create(t) {
      return new ni(t);
    }
    constructor(t) {
      this.value = void 0, this.listeners = void 0, this.subscribe = (n) => (this.listeners.add(n), () => {
        this.listeners.delete(n);
      }), this.getSnapshot = () => this.value, this.update = (n) => {
        this.value = n, this.listeners.forEach((o) => o(n));
      }, this.value = t, this.listeners = /* @__PURE__ */ new Set();
    }
  }
  const Ku = /* @__PURE__ */ Symbol("mui.api_private"), QS = (e) => e.isPropagationStopped !== void 0;
  let Oa = 0;
  function JS(e) {
    var _a2;
    const t = (_a2 = e.current) == null ? void 0 : _a2[Ku];
    if (t) return t;
    const n = {}, o = {
      state: n,
      store: ni.create(n),
      instanceId: {
        id: Oa
      }
    };
    return Oa += 1, o.getPublicApi = () => e.current, o.register = (r, l) => {
      Object.keys(l).forEach((s) => {
        const a = l[s], i = o[s];
        if ((i == null ? void 0 : i.spying) === true ? i.target = a : o[s] = a, r === "public") {
          const d = e.current, c = d[s];
          (c == null ? void 0 : c.spying) === true ? c.target = a : d[s] = a;
        }
      });
    }, o.register("private", {
      caches: {},
      eventManager: new XS()
    }), o;
  }
  function ZS(e) {
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
      [Ku]: e.current
    };
  }
  function eI(e, t) {
    var _a2;
    const n = u.useRef(null), o = u.useRef(null);
    o.current || (o.current = JS(n)), n.current || (n.current = ZS(o));
    const r = u.useCallback((...s) => {
      const [a, i, d = {}] = s;
      if (d.defaultMuiPrevented = false, QS(d) && d.isPropagationStopped()) return;
      const c = t.signature === nn.DataGridPro || t.signature === nn.DataGridPremium ? {
        api: o.current.getPublicApi()
      } : {};
      o.current.eventManager.emit(a, i, d, c);
    }, [
      o,
      t.signature
    ]), l = u.useCallback((s, a, i) => {
      o.current.eventManager.on(s, a, i);
      const d = o.current;
      return () => {
        d.eventManager.removeListener(s, a);
      };
    }, [
      o
    ]);
    return Me(o, {
      subscribeEvent: l,
      publishEvent: r
    }, "public"), e && !((_a2 = e.current) == null ? void 0 : _a2.state) && (e.current = n.current), u.useImperativeHandle(e, () => n.current, [
      n
    ]), u.useEffect(() => {
      const s = o.current;
      return () => {
        s.publishEvent("unmount");
      };
    }, [
      o
    ]), o;
  }
  const tI = (e, t) => {
    const n = u.useCallback((o) => {
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
  function nI(e, t) {
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
    var t = nI(e, "string");
    return pr(t) == "symbol" ? t : t + "";
  }
  const oI = (e) => {
    const t = u.useRef({}), n = u.useRef(false), o = u.useCallback((c) => {
      n.current || !c || (n.current = true, Object.values(c.appliers).forEach((p) => {
        p();
      }), n.current = false);
    }, []), r = u.useCallback((c, p, h) => {
      t.current[c] || (t.current[c] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      });
      const g = t.current[c];
      return g.processors.get(p) !== h && (g.processors.set(p, h), g.processorsAsArray = Array.from(t.current[c].processors.values()).filter((C) => C !== null), o(g)), () => {
        t.current[c].processors.set(p, null), t.current[c].processorsAsArray = Array.from(t.current[c].processors.values()).filter((C) => C !== null);
      };
    }, [
      o
    ]), l = u.useCallback((c, p, h) => (t.current[c] || (t.current[c] = {
      processors: /* @__PURE__ */ new Map(),
      processorsAsArray: [],
      appliers: {}
    }), t.current[c].appliers[p] = h, () => {
      const g = t.current[c].appliers, m = ge(g, [
        p
      ].map(fr));
      t.current[c].appliers = m;
    }), []), s = u.useCallback((c) => {
      o(t.current[c]);
    }, [
      o
    ]), a = u.useCallback((...c) => {
      const [p, h, g] = c;
      if (!t.current[p]) return h;
      const m = t.current[p].processorsAsArray;
      let C = h;
      for (let y = 0; y < m.length; y += 1) C = m[y](C, g);
      return C;
    }, []), i = {
      registerPipeProcessor: r,
      registerPipeApplier: l,
      requestPipeProcessorsApplication: s
    }, d = {
      unstable_applyPipeProcessors: a
    };
    Me(e, i, "private"), Me(e, d, "public");
  }, ot = (e, t, n, o = true) => {
    const r = u.useRef(null), l = u.useRef(`mui-${Math.round(Math.random() * 1e9)}`), s = u.useCallback(() => {
      r.current = e.current.registerPipeProcessor(t, l.current, n);
    }, [
      e,
      n,
      t
    ]);
    xr(() => {
      o && s();
    });
    const a = u.useRef(true);
    u.useEffect(() => (a.current ? a.current = false : o && s(), () => {
      r.current && (r.current(), r.current = null);
    }), [
      s,
      o
    ]);
  }, oi = (e, t, n) => {
    const o = u.useRef(null), r = u.useRef(`mui-${Math.round(Math.random() * 1e9)}`), l = u.useCallback(() => {
      o.current = e.current.registerPipeApplier(t, r.current, n);
    }, [
      e,
      n,
      t
    ]);
    xr(() => {
      l();
    });
    const s = u.useRef(true);
    u.useEffect(() => (s.current ? s.current = false : l(), () => {
      o.current && (o.current(), o.current = null);
    }), [
      l
    ]);
  }, ul = (e, t, n, o) => {
    const r = u.useCallback(() => {
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
    const l = u.useRef(true);
    u.useEffect(() => {
      l.current ? l.current = false : r();
    }, [
      r
    ]);
  }, eo = "none", Da = {
    rowTreeCreation: "rowTree",
    filtering: "rowTree",
    sorting: "rowTree",
    visibleRowsLookupCreation: "rowTree"
  }, rI = (e) => {
    const t = u.useRef(/* @__PURE__ */ new Map()), n = u.useRef({}), o = u.useCallback((i, d, c) => {
      const p = () => {
        const m = n.current[d], C = ge(m, [
          i
        ].map(fr));
        n.current[d] = C;
      };
      n.current[d] || (n.current[d] = {});
      const h = n.current[d], g = h[i];
      return h[i] = c, !g || g === c || i === e.current.getActiveStrategy(Da[d]) && e.current.publishEvent("activeStrategyProcessorChange", d), p;
    }, [
      e
    ]), r = u.useCallback((i, d) => {
      const c = e.current.getActiveStrategy(Da[i]);
      if (c == null) throw new Error("Can't apply a strategy processor before defining an active strategy");
      const p = n.current[i];
      if (!p || !p[c]) throw new Error(`No processor found for processor "${i}" on strategy "${c}"`);
      const h = p[c];
      return h(d);
    }, [
      e
    ]), l = u.useCallback((i) => {
      var _a2;
      return ((_a2 = Array.from(t.current.entries()).find(([, p]) => p.group !== i ? false : p.isAvailable())) == null ? void 0 : _a2[0]) ?? eo;
    }, []), s = u.useCallback((i, d, c) => {
      t.current.set(d, {
        group: i,
        isAvailable: c
      }), e.current.publishEvent("strategyAvailabilityChange");
    }, [
      e
    ]);
    Me(e, {
      registerStrategyProcessor: o,
      applyStrategyProcessor: r,
      getActiveStrategy: l,
      setStrategyAvailability: s
    }, "private");
  }, lI = (e) => {
    const t = u.useRef({}), n = u.useCallback((i) => {
      t.current[i.stateId] = i;
    }, []), o = u.useCallback((i, d) => {
      let c;
      if (nb(i) ? c = i(e.current.state) : c = i, e.current.state === c) return false;
      let p = false;
      const h = [];
      if (Object.keys(t.current).forEach((g) => {
        const m = t.current[g], C = m.stateSelector(e.current.state, e.current.instanceId), y = m.stateSelector(c, e.current.instanceId);
        y !== C && (h.push({
          stateId: m.stateId,
          hasPropChanged: y !== m.propModel
        }), m.propModel !== void 0 && y !== m.propModel && (p = true));
      }), h.length > 1) throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${h[0].stateId}, therefore, you're not allowed to update ${h.map((g) => g.stateId).join(", ")} in the same transaction.`);
      if (p || (e.current.state = c, e.current.publishEvent("stateChange", c), e.current.store.update(c)), h.length === 1) {
        const { stateId: g, hasPropChanged: m } = h[0], C = t.current[g], y = C.stateSelector(c, e.current.instanceId);
        C.propOnChange && m && C.propOnChange(y, {
          reason: d,
          api: e.current
        }), p || e.current.publishEvent(C.changeEvent, y, {
          reason: d
        });
      }
      return !p;
    }, [
      e
    ]), r = u.useCallback((i, d, c) => e.current.setState((p) => b({}, p, {
      [i]: d(p[i])
    }), c), [
      e
    ]), l = u.useCallback(() => {
    }, []), s = {
      setState: o,
      forceUpdate: l
    }, a = {
      updateControlState: r,
      registerControlState: n
    };
    Me(e, s, "public"), Me(e, a, "private");
  }, sI = (e, t) => b({}, e, {
    props: {
      getRowId: t.getRowId
    }
  }), iI = (e, t) => {
    u.useEffect(() => {
      e.current.setState((n) => b({}, n, {
        props: {
          getRowId: t.getRowId
        }
      }));
    }, [
      e,
      t.getRowId
    ]);
  }, aI = (e, t) => {
    const n = eI(e, t);
    return WS(n), iI(n, t), US(n), YS(n, t), lI(n), oI(n), rI(n), tI(n, t), n.current.register("private", {
      rootProps: t
    }), n;
  }, gt = (e, t, n) => {
    const o = u.useRef(false);
    o.current || (t.current.state = e(t.current.state, n, t), o.current = true);
  };
  function ps(e, t) {
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
  const qu = (e, t) => {
    var _a2, _b2;
    const { csvOptions: n, ignoreValueFormatter: o } = t;
    let r;
    if (o) {
      const l = e.colDef.type;
      l === "number" ? r = String(e.value) : l === "date" || l === "dateTime" ? r = (_a2 = e.value) == null ? void 0 : _a2.toISOString() : typeof ((_b2 = e.value) == null ? void 0 : _b2.toString) == "function" ? r = e.value.toString() : r = e.value;
    } else r = e.formattedValue;
    return ps(r, n);
  };
  class fs {
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
  const cI = ({ id: e, columns: t, getCellParams: n, csvOptions: o, ignoreValueFormatter: r }) => {
    const l = new fs({
      csvOptions: o
    });
    return t.forEach((s) => {
      const a = n(e, s.field);
      l.addValue(qu(a, {
        ignoreValueFormatter: r,
        csvOptions: o
      }));
    }), l.getRowString();
  };
  function uI(e) {
    const { columns: t, rowIds: n, csvOptions: o, ignoreValueFormatter: r, apiRef: l } = e, s = n.reduce((p, h) => `${p}${cI({
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
      const g = a.reduce((m, C) => {
        const y = l.current.getColumnGroupPath(C.field);
        return m[C.field] = y, h = Math.max(h, y.length), m;
      }, {});
      for (let m = 0; m < h; m += 1) {
        const C = new fs({
          csvOptions: o,
          sanitizeCellValue: ps
        });
        i.push(C), a.forEach((y) => {
          const w = (g[y.field] || [])[m], x = p[w];
          C.addValue(x ? x.headerName || x.groupId : "");
        });
      }
    }
    const d = new fs({
      csvOptions: o,
      sanitizeCellValue: ps
    });
    return a.forEach((p) => {
      d.addValue(p.headerName || p.field);
    }), i.push(d), `${`${i.map((p) => p.getRowString()).join(`\r
`)}\r
`}${s}`.trim();
  }
  function Ra(e) {
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
  function dI(e) {
    navigator.clipboard ? navigator.clipboard.writeText(e).catch(() => {
      Ra(e);
    }) : Ra(e);
  }
  function pI(e) {
    var _a2;
    return !!(((_a2 = window.getSelection()) == null ? void 0 : _a2.toString()) || e && (e.selectionEnd || 0) - (e.selectionStart || 0) > 0);
  }
  const fI = (e, t) => {
    const n = t.ignoreValueFormatterDuringExport, o = (typeof n == "object" ? n == null ? void 0 : n.clipboardExport : n) || false, r = t.clipboardCopyCellDelimiter, l = u.useCallback((s) => {
      if (!cy(s) || pI(s.target)) return;
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
          const c = e.current.getCellParams(d.id, d.field);
          a = qu(c, {
            csvOptions: {
              delimiter: r,
              shouldAppendQuotes: false,
              escapeFormulas: false
            },
            ignoreValueFormatter: o
          });
        }
      }
      a = e.current.unstable_applyPipeProcessors("clipboardCopy", a), a && (dI(a), e.current.publishEvent("clipboardCopy", a));
    }, [
      e,
      o,
      r
    ]);
    iu(e, () => e.current.rootElementRef.current, "keydown", l), Qe(e, "clipboardCopy", t.onClipboardCopy);
  }, gI = (e) => b({}, e, {
    columnMenu: {
      open: false
    }
  }), hI = (e) => {
    const t = wt(e, "useGridColumnMenu"), n = u.useCallback((s) => {
      const a = Ur(e.current.state), i = {
        open: true,
        field: s
      };
      (i.open !== a.open || i.field !== a.field) && (e.current.setState((c) => c.columnMenu.open && c.columnMenu.field === s ? c : (t.debug("Opening Column Menu"), b({}, c, {
        columnMenu: {
          open: true,
          field: s
        }
      }))), e.current.hidePreferences());
    }, [
      e,
      t
    ]), o = u.useCallback(() => {
      const s = Ur(e.current.state);
      if (s.field) {
        const d = On(e), c = Zt(e), p = En(e);
        let h = s.field;
        if (d[h] || (h = p[0]), c[h] === false) {
          const g = p.filter((C) => C === h ? true : c[C] !== false), m = g.indexOf(h);
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
    ]), r = u.useCallback((s) => {
      t.debug("Toggle Column Menu");
      const a = Ur(e.current.state);
      !a.open || a.field !== s ? n(s) : o();
    }, [
      e,
      t,
      n,
      o
    ]);
    Me(e, {
      showColumnMenu: n,
      hideColumnMenu: o,
      toggleColumnMenu: r
    }, "public"), oe(e, "columnResizeStart", o), oe(e, "virtualScrollerWheel", e.current.hideColumnMenu), oe(e, "virtualScrollerTouchMove", e.current.hideColumnMenu);
  }, mI = (e, t, n) => {
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
  function bI(e, t) {
    var _a2, _b2;
    const n = wt(e, "useGridColumns"), o = u.useRef(t.columns);
    e.current.registerControlState({
      stateId: "visibleColumns",
      propModel: t.columnVisibilityModel,
      propOnChange: t.onColumnVisibilityModelChange,
      stateSelector: Zt,
      changeEvent: "columnVisibilityModelChange"
    });
    const r = u.useCallback((v) => {
      n.debug("Updating columns state."), e.current.setState($a(v)), e.current.publishEvent("columnsChange", v.orderedFields);
    }, [
      n,
      e
    ]), l = u.useCallback((v) => On(e)[v], [
      e
    ]), s = u.useCallback(() => on(e), [
      e
    ]), a = u.useCallback(() => st(e), [
      e
    ]), i = u.useCallback((v, k = true) => (k ? st(e) : on(e)).findIndex((R) => R.field === v), [
      e
    ]), d = u.useCallback((v) => {
      const k = i(v);
      return Bn(e)[k];
    }, [
      e,
      i
    ]), c = u.useCallback((v) => {
      var _a3, _b3;
      Zt(e) !== v && (e.current.setState((O) => b({}, O, {
        columns: po({
          apiRef: e,
          columnsToUpsert: [],
          initialState: void 0,
          columnVisibilityModel: v,
          keepOnlyColumnsToUpsert: false
        })
      })), (_b3 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b3.call(_a3), e.current.forceUpdate());
    }, [
      e
    ]), p = u.useCallback((v) => {
      const k = po({
        apiRef: e,
        columnsToUpsert: v,
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(k);
    }, [
      e,
      r
    ]), h = u.useCallback((v, k) => {
      const O = Zt(e), R = O[v] ?? true;
      if (k !== R) {
        const _ = b({}, O, {
          [v]: k
        });
        e.current.setColumnVisibilityModel(_);
      }
    }, [
      e
    ]), g = u.useCallback((v) => En(e).findIndex((O) => O === v), [
      e
    ]), m = u.useCallback((v, k) => {
      const O = En(e), R = g(v);
      if (R === k) return;
      n.debug(`Moving column ${v} to index ${k}`);
      const _ = [
        ...O
      ], F = _.splice(R, 1)[0];
      _.splice(k, 0, F), r(b({}, xn(e.current.state), {
        orderedFields: _
      }));
      const I = {
        column: e.current.getColumn(v),
        targetIndex: e.current.getColumnIndexRelativeToVisibleColumns(v),
        oldIndex: R
      };
      e.current.publishEvent("columnIndexChange", I);
    }, [
      e,
      n,
      r,
      g
    ]), C = u.useCallback((v, k) => {
      n.debug(`Updating column ${v} width to ${k}`);
      const O = xn(e.current.state), R = O.lookup[v], _ = b({}, R, {
        width: k,
        hasBeenResized: true
      });
      r(cs(b({}, O, {
        lookup: b({}, O.lookup, {
          [v]: _
        })
      }), e.current.getRootDimensions())), e.current.publishEvent("columnWidthChange", {
        element: e.current.getColumnHeaderElement(v),
        colDef: _,
        width: k
      });
    }, [
      e,
      n,
      r
    ]), y = {
      getColumn: l,
      getAllColumns: s,
      getColumnIndex: i,
      getColumnPosition: d,
      getVisibleColumns: a,
      getColumnIndexRelativeToVisibleColumns: g,
      updateColumns: p,
      setColumnVisibilityModel: c,
      setColumnVisibility: h,
      setColumnWidth: C
    }, w = {
      setColumnIndex: m
    };
    Me(e, y, "public"), Me(e, w, t.signature === nn.DataGrid ? "private" : "public");
    const x = u.useCallback((v, k) => {
      var _a3, _b3;
      const O = {}, R = Zt(e);
      (!k.exportOnlyDirtyModels || t.columnVisibilityModel != null || Object.keys(((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.columns) == null ? void 0 : _b3.columnVisibilityModel) ?? {}).length > 0 || Object.keys(R).length > 0) && (O.columnVisibilityModel = R), O.orderedFields = En(e);
      const F = on(e), I = {};
      return F.forEach((T) => {
        if (T.hasBeenResized) {
          const L = {};
          xu.forEach((A) => {
            let G = T[A];
            G === 1 / 0 && (G = -1), L[A] = G;
          }), I[T.field] = L;
        }
      }), Object.keys(I).length > 0 && (O.dimensions = I), b({}, v, {
        columns: O
      });
    }, [
      e,
      t.columnVisibilityModel,
      (_a2 = t.initialState) == null ? void 0 : _a2.columns
    ]), E = u.useCallback((v, k) => {
      var _a3;
      const O = (_a3 = k.stateToRestore.columns) == null ? void 0 : _a3.columnVisibilityModel, R = k.stateToRestore.columns;
      if (O == null && R == null) return v;
      const _ = po({
        apiRef: e,
        columnsToUpsert: [],
        initialState: R,
        columnVisibilityModel: O,
        keepOnlyColumnsToUpsert: false
      });
      return e.current.setState($a(_)), R != null && e.current.publishEvent("columnsChange", _.orderedFields), v;
    }, [
      e
    ]), H = u.useCallback((v, k) => {
      var _a3;
      if (k === Zn.columns) {
        const O = t.slots.columnsPanel;
        return f.jsx(O, b({}, (_a3 = t.slotProps) == null ? void 0 : _a3.columnsPanel));
      }
      return v;
    }, [
      t.slots.columnsPanel,
      (_b2 = t.slotProps) == null ? void 0 : _b2.columnsPanel
    ]), M = u.useCallback((v) => t.disableColumnSelector ? v : [
      ...v,
      "columnMenuColumnsItem"
    ], [
      t.disableColumnSelector
    ]);
    ot(e, "columnMenu", M), ot(e, "exportState", x), ot(e, "restoreState", E), ot(e, "preferencePanel", H);
    const $ = u.useRef(null);
    oe(e, "viewportInnerSizeChange", (v) => {
      if ($.current !== v.width) {
        if ($.current = v.width, !st(e).some((O) => O.flex && O.flex > 0)) return;
        r(cs(xn(e.current.state), e.current.getRootDimensions()));
      }
    });
    const D = u.useCallback(() => {
      n.info("Columns pipe processing have changed, regenerating the columns");
      const v = po({
        apiRef: e,
        columnsToUpsert: [],
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(v);
    }, [
      e,
      n,
      r
    ]);
    oi(e, "hydrateColumns", D);
    const S = u.useRef(true);
    u.useEffect(() => {
      if (S.current) {
        S.current = false;
        return;
      }
      if (n.info(`GridColumns have changed, new length ${t.columns.length}`), o.current === t.columns) return;
      const v = po({
        apiRef: e,
        initialState: void 0,
        columnsToUpsert: t.columns,
        keepOnlyColumnsToUpsert: true
      });
      o.current = t.columns, r(v);
    }, [
      n,
      e,
      r,
      t.columns
    ]), u.useEffect(() => {
      t.columnVisibilityModel !== void 0 && e.current.setColumnVisibilityModel(t.columnVisibilityModel);
    }, [
      e,
      n,
      t.columnVisibilityModel
    ]);
  }
  function $a(e) {
    return (t) => b({}, t, {
      columns: e
    });
  }
  const CI = (e, t) => {
    var _a2;
    return b({}, e, {
      density: ((_a2 = t.initialState) == null ? void 0 : _a2.density) ?? t.density ?? "standard"
    });
  }, wI = (e, t) => {
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
    Me(e, r, "public");
    const l = u.useCallback((a, i) => {
      var _a3;
      const d = ho(e.current.state);
      return !i.exportOnlyDirtyModels || t.density != null || ((_a3 = t.initialState) == null ? void 0 : _a3.density) != null ? b({}, a, {
        density: d
      }) : a;
    }, [
      e,
      t.density,
      (_a2 = t.initialState) == null ? void 0 : _a2.density
    ]), s = u.useCallback((a, i) => {
      var _a3;
      const d = ((_a3 = i.stateToRestore) == null ? void 0 : _a3.density) ? i.stateToRestore.density : ho(e.current.state);
      return e.current.setState((c) => b({}, c, {
        density: d
      })), a;
    }, [
      e
    ]);
    ot(e, "exportState", l), ot(e, "restoreState", s), u.useEffect(() => {
      t.density && e.current.setDensity(t.density);
    }, [
      e,
      t.density
    ]);
  };
  function xI(e, t = "csv", n = document.title || "untitled") {
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
  const Yu = ({ apiRef: e, options: t }) => {
    const n = on(e);
    return t.fields ? t.fields.reduce((r, l) => {
      const s = n.find((a) => a.field === l);
      return s && r.push(s), r;
    }, []) : (t.allColumns ? n : st(e)).filter((r) => !r.disableExport);
  }, Xu = ({ apiRef: e }) => {
    var _a2, _b2;
    const t = nu(e), n = pt(e), o = e.current.getSelectedRows(), r = t.filter((i) => n[i].type !== "footer"), l = Ro(e), s = ((_a2 = l == null ? void 0 : l.top) == null ? void 0 : _a2.map((i) => i.id)) || [], a = ((_b2 = l == null ? void 0 : l.bottom) == null ? void 0 : _b2.map((i) => i.id)) || [];
    return r.unshift(...s), r.push(...a), o.size > 0 ? r.filter((i) => o.has(i)) : r;
  }, vI = (e, t) => {
    const n = wt(e, "useGridCsvExport"), o = t.ignoreValueFormatterDuringExport, r = (typeof o == "object" ? o == null ? void 0 : o.csvExport : o) || false, l = u.useCallback((d = {}) => {
      n.debug("Get data as CSV");
      const c = Yu({
        apiRef: e,
        options: d
      }), h = (d.getRowsToExport ?? Xu)({
        apiRef: e
      });
      return uI({
        columns: c,
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
    ]), s = u.useCallback((d) => {
      n.debug("Export data as CSV");
      const c = l(d), p = new Blob([
        (d == null ? void 0 : d.utf8WithBom) ? new Uint8Array([
          239,
          187,
          191
        ]) : "",
        c
      ], {
        type: "text/csv"
      });
      xI(p, "csv", d == null ? void 0 : d.fileName);
    }, [
      n,
      l
    ]);
    Me(e, {
      getDataAsCsv: l,
      exportDataAsCsv: s
    }, "public");
    const i = u.useCallback((d, c) => {
      var _a2;
      return ((_a2 = c.csvOptions) == null ? void 0 : _a2.disableToolbarButton) ? d : [
        ...d,
        {
          component: f.jsx(gS, {
            options: c.csvOptions
          }),
          componentName: "csvExport"
        }
      ];
    }, []);
    ot(e, "exportMenu", i);
  }, Kr = (e, t, n) => {
    let o = e.paginationModel;
    const r = e.rowCount, l = (n == null ? void 0 : n.pageSize) ?? o.pageSize, s = (n == null ? void 0 : n.page) ?? o.page, a = au(r, l, s);
    n && ((n == null ? void 0 : n.page) !== o.page || (n == null ? void 0 : n.pageSize) !== o.pageSize) && (o = n);
    const i = l === -1 ? 0 : dC(o.page, a);
    return i !== o.page && (o = b({}, o, {
      page: i
    })), uu(o.pageSize, t), o;
  }, yI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridPaginationModel"), o = Q(e, Do), r = u.useRef(yt(e)), l = Math.floor(t.rowHeight * o);
    e.current.registerControlState({
      stateId: "paginationModel",
      propModel: t.paginationModel,
      propOnChange: t.onPaginationModelChange,
      stateSelector: kt,
      changeEvent: "paginationModelChange"
    });
    const s = u.useCallback((x) => {
      const E = kt(e);
      x !== E.page && (n.debug(`Setting page to ${x}`), e.current.setPaginationModel({
        page: x,
        pageSize: E.pageSize
      }));
    }, [
      e,
      n
    ]), a = u.useCallback((x) => {
      const E = kt(e);
      x !== E.pageSize && (n.debug(`Setting page size to ${x}`), e.current.setPaginationModel({
        pageSize: x,
        page: E.page
      }));
    }, [
      e,
      n
    ]), i = u.useCallback((x) => {
      const E = kt(e);
      x !== E && (n.debug("Setting 'paginationModel' to", x), e.current.setState((H) => b({}, H, {
        pagination: b({}, H.pagination, {
          paginationModel: Kr(H.pagination, t.signature, x)
        })
      }), "setPaginationModel"));
    }, [
      e,
      n,
      t.signature
    ]);
    Me(e, {
      setPage: s,
      setPageSize: a,
      setPaginationModel: i
    }, "public");
    const c = u.useCallback((x, E) => {
      var _a3, _b3;
      const H = kt(e);
      return !E.exportOnlyDirtyModels || t.paginationModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.paginationModel) != null || H.page !== 0 && H.pageSize !== uC(t.autoPageSize) ? b({}, x, {
        pagination: b({}, x.pagination, {
          paginationModel: H
        })
      }) : x;
    }, [
      e,
      t.paginationModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel,
      t.autoPageSize
    ]), p = u.useCallback((x, E) => {
      var _a3, _b3;
      const H = ((_a3 = E.stateToRestore.pagination) == null ? void 0 : _a3.paginationModel) ? b({}, cu(t.autoPageSize), (_b3 = E.stateToRestore.pagination) == null ? void 0 : _b3.paginationModel) : kt(e);
      return e.current.setState((M) => b({}, M, {
        pagination: b({}, M.pagination, {
          paginationModel: Kr(M.pagination, t.signature, H)
        })
      }), "stateRestorePreProcessing"), x;
    }, [
      e,
      t.autoPageSize,
      t.signature
    ]);
    ot(e, "exportState", c), ot(e, "restoreState", p);
    const h = () => {
      var _a3;
      const x = kt(e);
      ((_a3 = e.current.virtualScrollerRef) == null ? void 0 : _a3.current) && e.current.scrollToIndexes({
        rowIndex: x.page * x.pageSize
      });
    }, g = u.useCallback(() => {
      if (!t.autoPageSize) return;
      const x = e.current.getRootDimensions(), E = Math.max(1, Math.floor(x.viewportInnerSize.height / l));
      e.current.setPageSize(E);
    }, [
      e,
      t.autoPageSize,
      l
    ]), m = u.useCallback((x) => {
      if (x == null) return;
      const E = kt(e);
      if (E.page === 0) return;
      const H = fu(e);
      E.page > H - 1 && e.current.setPage(Math.max(0, H - 1));
    }, [
      e
    ]), C = u.useCallback(() => {
      kt(e).page !== 0 && e.current.setPage(0), e.current.getScrollPosition().top !== 0 && e.current.scroll({
        top: 0
      });
    }, [
      e
    ]), y = u.useCallback((x) => {
      const E = b({}, x, {
        items: ru(e)
      });
      zn(E, r.current) || (r.current = E, C());
    }, [
      e,
      C
    ]);
    oe(e, "viewportInnerSizeChange", g), oe(e, "paginationModelChange", h), oe(e, "rowCountChange", m), oe(e, "sortModelChange", Kn(t.resetPageOnSortFilter, C)), oe(e, "filterModelChange", Kn(t.resetPageOnSortFilter, y));
    const w = u.useRef(true);
    u.useEffect(() => {
      if (w.current) {
        w.current = false;
        return;
      }
      t.pagination && e.current.setState((x) => b({}, x, {
        pagination: b({}, x.pagination, {
          paginationModel: Kr(x.pagination, t.signature, t.paginationModel)
        })
      }));
    }, [
      e,
      t.paginationModel,
      t.signature,
      t.pagination
    ]), u.useEffect(() => {
      e.current.setState((x) => {
        const E = t.pagination === true;
        return x.pagination.paginationMode === t.paginationMode || x.pagination.enabled === E ? x : b({}, x, {
          pagination: b({}, x.pagination, {
            paginationMode: t.paginationMode,
            enabled: t.pagination === true
          })
        });
      });
    }, [
      e,
      t.paginationMode,
      t.pagination
    ]), u.useEffect(g, [
      g
    ]);
  };
  function SI() {
    return new Promise((e) => {
      requestAnimationFrame(() => {
        e();
      });
    });
  }
  function II(e) {
    const t = document.createElement("iframe");
    return t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.title = e || document.title, t;
  }
  const PI = (e, t) => {
    const n = e.current.rootElementRef.current !== null, o = wt(e, "useGridPrintExport"), r = u.useRef(null), l = u.useRef(null), s = u.useRef({}), a = u.useRef([]), i = u.useRef(null);
    u.useEffect(() => {
      r.current = en(e.current.rootElementRef.current);
    }, [
      e,
      n
    ]);
    const d = u.useCallback((y, w, x) => new Promise((E) => {
      const H = Yu({
        apiRef: e,
        options: {
          fields: y,
          allColumns: w
        }
      }).map((z) => z.field), M = on(e), $ = {};
      M.forEach((z) => {
        $[z.field] = H.includes(z.field);
      }), x && ($[Ao.field] = true), e.current.setColumnVisibilityModel($), E();
    }), [
      e
    ]), c = u.useCallback((y) => {
      const x = y({
        apiRef: e
      }).reduce((E, H) => {
        const M = e.current.getRow(H);
        return M[Eo] || E.push(M), E;
      }, []);
      e.current.setRows(x);
    }, [
      e
    ]), p = u.useCallback((y, w) => {
      var _a2, _b2, _c2;
      const x = b({
        copyStyles: true,
        hideToolbar: false,
        hideFooter: false,
        includeCheckboxes: false
      }, w), E = y.contentDocument;
      if (!E) return;
      const H = zo(e.current.state), M = e.current.rootElementRef.current, $ = M.cloneNode(true), z = $.querySelector(`.${P.main}`);
      z.style.overflow = "visible", $.style.contain = "size";
      let D = ((_a2 = M.querySelector(`.${P.toolbarContainer}`)) == null ? void 0 : _a2.offsetHeight) || 0, S = ((_b2 = M.querySelector(`.${P.footerContainer}`)) == null ? void 0 : _b2.offsetHeight) || 0;
      const v = $.querySelector(`.${P.footerContainer}`);
      x.hideToolbar && ((_c2 = $.querySelector(`.${P.toolbarContainer}`)) == null ? void 0 : _c2.remove(), D = 0), x.hideFooter && v && (v.remove(), S = 0);
      const k = H.currentPageTotalHeight + vl(e, t) + D + S;
      $.style.height = `${k}px`, $.style.boxSizing = "content-box", !x.hideFooter && v && (v.style.position = "absolute", v.style.width = "100%", v.style.top = `${k - S}px`);
      const O = document.createElement("div");
      O.appendChild($), E.body.style.marginTop = "0px", E.body.innerHTML = O.innerHTML;
      const R = typeof x.pageStyle == "function" ? x.pageStyle() : x.pageStyle;
      if (typeof R == "string") {
        const F = E.createElement("style");
        F.appendChild(E.createTextNode(R)), E.head.appendChild(F);
      }
      x.bodyClassName && E.body.classList.add(...x.bodyClassName.split(" "));
      const _ = [];
      if (x.copyStyles) {
        const F = M.getRootNode(), T = (F.constructor.name === "ShadowRoot" ? F : r.current).querySelectorAll("style, link[rel='stylesheet']");
        for (let L = 0; L < T.length; L += 1) {
          const A = T[L];
          if (A.tagName === "STYLE") {
            const G = E.createElement(A.tagName), j = A.sheet;
            if (j) {
              let V = "";
              for (let U = 0; U < j.cssRules.length; U += 1) typeof j.cssRules[U].cssText == "string" && (V += `${j.cssRules[U].cssText}\r
`);
              G.appendChild(E.createTextNode(V)), E.head.appendChild(G);
            }
          } else if (A.getAttribute("href")) {
            const G = E.createElement(A.tagName);
            for (let j = 0; j < A.attributes.length; j += 1) {
              const V = A.attributes[j];
              V && G.setAttribute(V.nodeName, V.nodeValue || "");
            }
            _.push(new Promise((j) => {
              G.addEventListener("load", () => j());
            })), E.head.appendChild(G);
          }
        }
      }
      Promise.all(_).then(() => {
        y.contentWindow.print();
      });
    }, [
      e,
      r,
      t
    ]), h = u.useCallback((y) => {
      var _a2, _b2;
      r.current.body.removeChild(y), e.current.restoreState(l.current || {}), ((_b2 = (_a2 = l.current) == null ? void 0 : _a2.columns) == null ? void 0 : _b2.columnVisibilityModel) || e.current.setColumnVisibilityModel(s.current), e.current.setState((w) => b({}, w, {
        virtualization: i.current
      })), e.current.setRows(a.current), l.current = null, s.current = {}, a.current = [];
    }, [
      e
    ]), m = {
      exportDataAsPrint: u.useCallback(async (y) => {
        if (o.debug("Export data as Print"), !e.current.rootElementRef.current) throw new Error("MUI X: No grid root element available.");
        if (l.current = e.current.exportState(), s.current = Zt(e), a.current = e.current.getSortedRows().filter((x) => !x[Eo]), t.pagination) {
          const E = {
            page: 0,
            pageSize: Vs(e)
          };
          e.current.setState((H) => b({}, H, {
            pagination: b({}, H.pagination, {
              paginationModel: Kr(H.pagination, "DataGridPro", E)
            })
          }));
        }
        i.current = e.current.state.virtualization, e.current.unstable_setVirtualization(false), await d(y == null ? void 0 : y.fields, y == null ? void 0 : y.allColumns, y == null ? void 0 : y.includeCheckboxes), c((y == null ? void 0 : y.getRowsToExport) ?? Xu), await SI();
        const w = II(y == null ? void 0 : y.fileName);
        w.onload = () => {
          p(w, y), w.contentWindow.matchMedia("print").addEventListener("change", (E) => {
            E.matches === false && h(w);
          });
        }, r.current.body.appendChild(w);
      }, [
        t,
        o,
        e,
        p,
        h,
        d,
        c
      ])
    };
    Me(e, m, "public");
    const C = u.useCallback((y, w) => {
      var _a2;
      return ((_a2 = w.printOptions) == null ? void 0 : _a2.disableToolbarButton) ? y : [
        ...y,
        {
          component: f.jsx(hS, {
            options: w.printOptions
          }),
          componentName: "printExport"
        }
      ];
    }, []);
    ot(e, "exportMenu", C);
  }, MI = (e, t, n) => {
    var _a2, _b2;
    const o = t.filterModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel) ?? cr();
    return b({}, e, {
      filter: b({
        filterModel: As(o, t.disableMultipleColumnsFiltering, n)
      }, Gc),
      visibleRowsLookup: {}
    });
  }, kI = (e) => e.filteredRowsLookup;
  function Ha(e, t) {
    return e.current.applyStrategyProcessor("visibleRowsLookupCreation", {
      tree: t.rows.tree,
      filteredRowsLookup: t.filter.filteredRowsLookup
    });
  }
  function EI() {
    return xc(Object.values);
  }
  const FI = (e, t) => {
    var _a2, _b2, _c2;
    const n = wt(e, "useGridFilter");
    e.current.registerControlState({
      stateId: "filter",
      propModel: t.filterModel,
      propOnChange: t.onFilterModelChange,
      stateSelector: yt,
      changeEvent: "filterModelChange"
    });
    const o = u.useCallback(() => {
      e.current.setState((S) => {
        const v = yt(S, e.current.instanceId), k = e.current.getFilterState(v), O = b({}, S, {
          filter: b({}, S.filter, k)
        }), R = Ha(e, O);
        return b({}, O, {
          visibleRowsLookup: R
        });
      }), e.current.publishEvent("filteredRowsSet");
    }, [
      e
    ]), r = u.useCallback((S, v) => v == null || v.filterable === false || t.disableColumnFilter ? S : [
      ...S,
      "columnMenuFilterItem"
    ], [
      t.disableColumnFilter
    ]), l = u.useCallback(() => {
      o(), e.current.forceUpdate();
    }, [
      e,
      o
    ]), s = u.useCallback((S) => {
      const v = yt(e), k = [
        ...v.items
      ], O = k.findIndex((R) => R.id === S.id);
      O === -1 ? k.push(S) : k[O] = S, e.current.setFilterModel(b({}, v, {
        items: k
      }), "upsertFilterItem");
    }, [
      e
    ]), a = u.useCallback((S) => {
      const v = yt(e), k = [
        ...v.items
      ];
      S.forEach((O) => {
        const R = k.findIndex((_) => _.id === O.id);
        R === -1 ? k.push(O) : k[R] = O;
      }), e.current.setFilterModel(b({}, v, {
        items: k
      }), "upsertFilterItems");
    }, [
      e
    ]), i = u.useCallback((S) => {
      const v = yt(e), k = v.items.filter((O) => O.id !== S.id);
      k.length !== v.items.length && e.current.setFilterModel(b({}, v, {
        items: k
      }), "deleteFilterItem");
    }, [
      e
    ]), d = u.useCallback((S, v, k) => {
      if (n.debug("Displaying filter panel"), S) {
        const O = yt(e), R = O.items.filter((T) => {
          var _a3;
          if (T.value !== void 0) return !(Array.isArray(T.value) && T.value.length === 0);
          const A = (_a3 = e.current.getColumn(T.field).filterOperators) == null ? void 0 : _a3.find((j) => j.value === T.operator);
          return !(typeof (A == null ? void 0 : A.requiresFilterValue) > "u" ? true : A == null ? void 0 : A.requiresFilterValue);
        });
        let _;
        const F = R.find((T) => T.field === S), I = e.current.getColumn(S);
        F ? _ = R : t.disableMultipleColumnsFiltering ? _ = [
          as({
            field: S,
            operator: I.filterOperators[0].value
          }, e)
        ] : _ = [
          ...R,
          as({
            field: S,
            operator: I.filterOperators[0].value
          }, e)
        ], e.current.setFilterModel(b({}, O, {
          items: _
        }));
      }
      e.current.showPreferences(Zn.filters, v, k);
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), c = u.useCallback(() => {
      n.debug("Hiding filter panel"), e.current.hidePreferences();
    }, [
      e,
      n
    ]), p = u.useCallback((S) => {
      const v = yt(e);
      v.logicOperator !== S && e.current.setFilterModel(b({}, v, {
        logicOperator: S
      }), "changeLogicOperator");
    }, [
      e
    ]), h = u.useCallback((S) => {
      const v = yt(e);
      zn(v.quickFilterValues, S) || e.current.setFilterModel(b({}, v, {
        quickFilterValues: [
          ...S
        ]
      }));
    }, [
      e
    ]), g = u.useCallback((S, v) => {
      yt(e) !== S && (n.debug("Setting filter model"), e.current.updateControlState("filter", Yi(S, t.disableMultipleColumnsFiltering, e), v), e.current.unstable_applyFilters());
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), m = u.useCallback((S) => {
      const v = As(S, t.disableMultipleColumnsFiltering, e), k = t.filterMode === "client" ? fb(v, e, t.disableEval) : null, O = e.current.applyStrategyProcessor("filtering", {
        isRowMatchingFilters: k,
        filterModel: v ?? cr()
      });
      return b({}, O, {
        filterModel: v
      });
    }, [
      t.disableMultipleColumnsFiltering,
      t.filterMode,
      t.disableEval,
      e
    ]), C = {
      setFilterLogicOperator: p,
      unstable_applyFilters: l,
      deleteFilterItem: i,
      upsertFilterItem: s,
      upsertFilterItems: a,
      setFilterModel: g,
      showFilterPanel: d,
      hideFilterPanel: c,
      setQuickFilterValues: h,
      ignoreDiacritics: t.ignoreDiacritics,
      getFilterState: m
    };
    Me(e, C, "public");
    const y = u.useCallback((S, v) => {
      var _a3, _b3;
      const k = yt(e);
      return k.items.forEach((R) => {
        delete R.fromInput;
      }), !v.exportOnlyDirtyModels || t.filterModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.filter) == null ? void 0 : _b3.filterModel) != null || !zn(k, cr()) ? b({}, S, {
        filter: {
          filterModel: k
        }
      }) : S;
    }, [
      e,
      t.filterModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel
    ]), w = u.useCallback((S, v) => {
      var _a3;
      const k = (_a3 = v.stateToRestore.filter) == null ? void 0 : _a3.filterModel;
      return k == null ? S : (e.current.updateControlState("filter", Yi(k, t.disableMultipleColumnsFiltering, e), "restoreState"), b({}, S, {
        callbacks: [
          ...S.callbacks,
          e.current.unstable_applyFilters
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsFiltering
    ]), x = u.useCallback((S, v) => {
      var _a3;
      if (v === Zn.filters) {
        const k = t.slots.filterPanel;
        return f.jsx(k, b({}, (_a3 = t.slotProps) == null ? void 0 : _a3.filterPanel));
      }
      return S;
    }, [
      t.slots.filterPanel,
      (_c2 = t.slotProps) == null ? void 0 : _c2.filterPanel
    ]), { getRowId: E } = t, H = Sn(EI), M = u.useCallback((S) => {
      var _a3;
      if (t.filterMode !== "client" || !S.isRowMatchingFilters || !S.filterModel.items.length && !((_a3 = S.filterModel.quickFilterValues) == null ? void 0 : _a3.length)) return Gc;
      const v = Jt(e), k = {}, { isRowMatchingFilters: O } = S, R = {}, _ = {
        passingFilterItems: null,
        passingQuickFilterValues: null
      }, F = H.current(e.current.state.rows.dataRowIdToModelLookup);
      for (let L = 0; L < F.length; L += 1) {
        const A = F[L], G = E ? E(A) : A.id;
        O(A, void 0, _);
        const j = hb([
          _.passingFilterItems
        ], [
          _.passingQuickFilterValues
        ], S.filterModel, e, R);
        k[G] = j;
      }
      const I = "auto-generated-group-footer-root";
      return v[I] && (k[I] = true), {
        filteredRowsLookup: k,
        filteredChildrenCountLookup: {},
        filteredDescendantCountLookup: {}
      };
    }, [
      e,
      t.filterMode,
      E,
      H
    ]);
    ot(e, "columnMenu", r), ot(e, "exportState", y), ot(e, "restoreState", w), ot(e, "preferencePanel", x), ul(e, eo, "filtering", M), ul(e, eo, "visibleRowsLookupCreation", kI);
    const $ = u.useCallback(() => {
      n.debug("onColUpdated - GridColumns changed, applying filters");
      const S = yt(e), v = On(e), k = S.items.filter((O) => O.field && v[O.field]);
      k.length < S.items.length && e.current.setFilterModel(b({}, S, {
        items: k
      }));
    }, [
      e,
      n
    ]), z = u.useCallback((S) => {
      S === "filtering" && e.current.unstable_applyFilters();
    }, [
      e
    ]), D = u.useCallback(() => {
      e.current.setState((S) => b({}, S, {
        visibleRowsLookup: Ha(e, S)
      })), e.current.forceUpdate();
    }, [
      e
    ]);
    oe(e, "rowsSet", o), oe(e, "columnsChange", $), oe(e, "activeStrategyProcessorChange", z), oe(e, "rowExpansionChange", D), oe(e, "columnVisibilityModelChange", () => {
      const S = yt(e);
      S.quickFilterValues && Kc(S) && e.current.unstable_applyFilters();
    }), xr(() => {
      e.current.unstable_applyFilters();
    }), St(() => {
      t.filterModel !== void 0 && e.current.setFilterModel(t.filterModel);
    }, [
      e,
      n,
      t.filterModel
    ]);
  }, TI = (e) => b({}, e, {
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
  }), OI = (e, t) => {
    const n = wt(e, "useGridFocus"), o = u.useRef(null), r = e.current.rootElementRef.current !== null, l = u.useCallback((D, S) => {
      D && e.current.getRow(D.id) && e.current.publishEvent("cellFocusOut", e.current.getCellParams(D.id, D.field), S);
    }, [
      e
    ]), s = u.useCallback((D, S) => {
      const v = Rt(e);
      (v == null ? void 0 : v.id) === D && (v == null ? void 0 : v.field) === S || (e.current.setState((k) => (n.debug(`Focusing on cell with id=${D} and field=${S}`), b({}, k, {
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
      }))), e.current.forceUpdate(), e.current.getRow(D) && (v && l(v, {}), e.current.publishEvent("cellFocusIn", e.current.getCellParams(D, S))));
    }, [
      e,
      n,
      l
    ]), a = u.useCallback((D, S = {}) => {
      const v = Rt(e);
      l(v, S), e.current.setState((k) => (n.debug(`Focusing on column header with colIndex=${D}`), b({}, k, {
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
      n,
      l
    ]), i = u.useCallback((D, S = {}) => {
      const v = Rt(e);
      l(v, S), e.current.setState((k) => (n.debug(`Focusing on column header filter with colIndex=${D}`), b({}, k, {
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
      n,
      l
    ]), d = u.useCallback((D, S, v = {}) => {
      const k = Rt(e);
      k && e.current.publishEvent("cellFocusOut", e.current.getCellParams(k.id, k.field), v), e.current.setState((O) => b({}, O, {
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
    ]), c = u.useCallback(() => nl(e), [
      e
    ]), p = u.useCallback((D, S, v) => {
      let k = e.current.getColumnIndex(S);
      const O = st(e), R = _n(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      }), _ = Ro(e), F = [].concat(_.top || [], R.rows, _.bottom || []);
      let I = F.findIndex((G) => G.id === D);
      v === "right" ? k += 1 : v === "left" ? k -= 1 : I += 1, k >= O.length ? (I += 1, I < F.length && (k = 0)) : k < 0 && (I -= 1, I >= 0 && (k = O.length - 1)), I = Vt(I, 0, F.length - 1);
      const T = F[I];
      if (!T) return;
      const L = e.current.unstable_getCellColSpanInfo(T.id, k);
      L && L.spannedByColSpan && (v === "left" || v === "below" ? k = L.leftVisibleCellIndex : v === "right" && (k = L.rightVisibleCellIndex)), k = Vt(k, 0, O.length - 1);
      const A = O[k];
      e.current.setCellFocus(T.id, A.field);
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), h = u.useCallback(({ id: D, field: S }) => {
      e.current.setCellFocus(D, S);
    }, [
      e
    ]), g = u.useCallback((D, S) => {
      S.key === "Enter" || S.key === "Tab" || S.key === "Shift" || il(S.key) || e.current.setCellFocus(D.id, D.field);
    }, [
      e
    ]), m = u.useCallback(({ field: D }, S) => {
      S.target === S.currentTarget && e.current.setColumnHeaderFocus(D, S);
    }, [
      e
    ]), C = u.useCallback(({ fields: D, depth: S }, v) => {
      if (v.target !== v.currentTarget) return;
      const k = nl(e);
      k !== null && k.depth === S && D.includes(k.field) || e.current.setColumnGroupHeaderFocus(D[0], S, v);
    }, [
      e
    ]), y = u.useCallback((D, S) => {
      var _a2, _b2;
      ((_b2 = (_a2 = S.relatedTarget) == null ? void 0 : _a2.getAttribute("class")) == null ? void 0 : _b2.includes(P.columnHeader)) || (n.debug("Clearing focus"), e.current.setState((v) => b({}, v, {
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
    ]), w = u.useCallback((D) => {
      o.current = D;
    }, []), x = u.useCallback((D) => {
      var _a2;
      const S = o.current;
      o.current = null;
      const v = Rt(e);
      if (!e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: D,
        cell: S
      })) return;
      if (!v) {
        S && e.current.setCellFocus(S.id, S.field);
        return;
      }
      (S == null ? void 0 : S.id) === v.id && (S == null ? void 0 : S.field) === v.field || ((_a2 = e.current.getCellElement(v.id, v.field)) == null ? void 0 : _a2.contains(D.target)) || (S ? e.current.setCellFocus(S.id, S.field) : (e.current.setState((R) => b({}, R, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })), e.current.forceUpdate(), l(v, D)));
    }, [
      e,
      l
    ]), E = u.useCallback((D) => {
      if (D.cellMode === "view") return;
      const S = Rt(e);
      ((S == null ? void 0 : S.id) !== D.id || (S == null ? void 0 : S.field) !== D.field) && e.current.setCellFocus(D.id, D.field);
    }, [
      e
    ]), H = u.useCallback(() => {
      var _a2;
      const D = Rt(e);
      if (D && !e.current.getRow(D.id)) {
        const S = D.id;
        let v = null;
        if (typeof S < "u") {
          const k = e.current.getRowElement(S), O = (k == null ? void 0 : k.dataset.rowindex) ? Number(k == null ? void 0 : k.dataset.rowindex) : 0, R = _n(e, {
            pagination: t.pagination,
            paginationMode: t.paginationMode
          });
          v = ((_a2 = R.rows[Vt(O, 0, R.rows.length - 1)]) == null ? void 0 : _a2.id) ?? null;
        }
        e.current.setState((k) => b({}, k, {
          focus: {
            cell: v === null ? null : {
              id: v,
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
    ]), M = Ke(() => {
      const D = Rt(e);
      if (!D) return;
      const S = _n(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (S.rows.find((O) => O.id === D.id)) return;
      const k = st(e);
      e.current.setState((O) => b({}, O, {
        tabIndex: {
          cell: {
            id: S.rows[0].id,
            field: k[0].field
          },
          columnGroupHeader: null,
          columnHeader: null,
          columnHeaderFilter: null
        }
      }));
    }), $ = {
      setCellFocus: s,
      setColumnHeaderFocus: a,
      setColumnHeaderFilterFocus: i
    }, z = {
      moveFocusToRelativeCell: p,
      setColumnGroupHeaderFocus: d,
      getColumnGroupHeaderFocus: c
    };
    Me(e, $, "public"), Me(e, z, "private"), u.useEffect(() => {
      const D = en(e.current.rootElementRef.current);
      return D.addEventListener("mouseup", x), () => {
        D.removeEventListener("mouseup", x);
      };
    }, [
      e,
      r,
      x
    ]), oe(e, "columnHeaderBlur", y), oe(e, "cellDoubleClick", h), oe(e, "cellMouseDown", w), oe(e, "cellKeyDown", g), oe(e, "cellModeChange", E), oe(e, "columnHeaderFocus", m), oe(e, "columnGroupHeaderFocus", C), oe(e, "rowsSet", H), oe(e, "paginationModelChange", M);
  }, _l = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e < n) return e + 1;
    } else if (!o && e > t) return e - 1;
    return null;
  }, Vl = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e > t) return e - 1;
    } else if (!o && e < n) return e + 1;
    return null;
  };
  function DI(e, t, n, o) {
    var _a2, _b2;
    const r = Eu(e);
    if (!((_a2 = r[t]) == null ? void 0 : _a2[n])) return t;
    const l = nu(e);
    let s = l.indexOf(t) + (o === "down" ? 1 : -1);
    for (; s >= 0 && s < l.length; ) {
      const a = l[s];
      if (!((_b2 = r[a]) == null ? void 0 : _b2[n])) return a;
      s += o === "down" ? 1 : -1;
    }
    return t;
  }
  const RI = Ue(yr, Ro, (e, t) => (t.top || []).concat(e.rows, t.bottom || [])), $I = (e, t) => {
    const n = wt(e, "useGridKeyboardNavigation"), o = At(), r = t.unstable_listView, l = u.useCallback(() => RI(e), [
      e
    ]), s = t.signature !== "DataGrid" && t.headerFilters, a = u.useCallback((w, x, E = "left", H = "up") => {
      const M = Wn(e), $ = e.current.unstable_getCellColSpanInfo(x, w);
      $ && $.spannedByColSpan && (E === "left" ? w = $.leftVisibleCellIndex : E === "right" && (w = $.rightVisibleCellIndex));
      const z = r ? Oo(e.current.state).field : $o(e)[w], D = DI(e, x, z, H), S = M.findIndex((v) => v.id === D);
      n.debug(`Navigating to cell row ${S}, col ${w}`), e.current.scrollToIndexes({
        colIndex: w,
        rowIndex: S
      }), e.current.setCellFocus(D, z);
    }, [
      e,
      n,
      r
    ]), i = u.useCallback((w, x) => {
      n.debug(`Navigating to header col ${w}`), e.current.scrollToIndexes({
        colIndex: w
      });
      const E = e.current.getVisibleColumns()[w].field;
      e.current.setColumnHeaderFocus(E, x);
    }, [
      e,
      n
    ]), d = u.useCallback((w, x) => {
      n.debug(`Navigating to header filter col ${w}`), e.current.scrollToIndexes({
        colIndex: w
      });
      const E = e.current.getVisibleColumns()[w].field;
      e.current.setColumnHeaderFilterFocus(E, x);
    }, [
      e,
      n
    ]), c = u.useCallback((w, x, E) => {
      n.debug(`Navigating to header col ${w}`), e.current.scrollToIndexes({
        colIndex: w
      });
      const { field: H } = e.current.getVisibleColumns()[w];
      e.current.setColumnGroupHeaderFocus(H, x, E);
    }, [
      e,
      n
    ]), p = u.useCallback((w) => {
      var _a2;
      return (_a2 = l()[w]) == null ? void 0 : _a2.id;
    }, [
      l
    ]), h = u.useCallback((w, x) => {
      const E = x.currentTarget.querySelector(`.${P.columnHeaderTitleContainerContent}`);
      if (!!E && E.contains(x.target) && w.field !== Ao.field) return;
      const M = l(), $ = e.current.getViewportPageSize(), z = w.field ? e.current.getColumnIndex(w.field) : 0, D = M.length > 0 ? 0 : null, S = M.length - 1, v = 0, k = st(e).length - 1, O = Ir(e);
      let R = true;
      switch (x.key) {
        case "ArrowDown": {
          s ? d(z, x) : D !== null && a(z, p(D));
          break;
        }
        case "ArrowRight": {
          const _ = Vl({
            currentColIndex: z,
            firstColIndex: v,
            lastColIndex: k,
            isRtl: o
          });
          _ !== null && i(_, x);
          break;
        }
        case "ArrowLeft": {
          const _ = _l({
            currentColIndex: z,
            firstColIndex: v,
            lastColIndex: k,
            isRtl: o
          });
          _ !== null && i(_, x);
          break;
        }
        case "ArrowUp": {
          O > 0 && c(z, O - 1, x);
          break;
        }
        case "PageDown": {
          D !== null && S !== null && a(z, p(Math.min(D + $, S)));
          break;
        }
        case "Home": {
          i(v, x);
          break;
        }
        case "End": {
          i(k, x);
          break;
        }
        case "Enter": {
          (x.ctrlKey || x.metaKey) && e.current.toggleColumnMenu(w.field);
          break;
        }
        case " ":
          break;
        default:
          R = false;
      }
      R && x.preventDefault();
    }, [
      e,
      l,
      s,
      d,
      a,
      p,
      o,
      i,
      c
    ]), g = u.useCallback((w, x) => {
      const E = XC(e) === w.field, H = QC(e) === w.field;
      if (E || H || !il(x.key)) return;
      const M = l(), $ = e.current.getViewportPageSize(), z = w.field ? e.current.getColumnIndex(w.field) : 0, D = 0, S = M.length - 1, v = 0, k = st(e).length - 1;
      let O = true;
      switch (x.key) {
        case "ArrowDown": {
          const R = p(D);
          R != null && a(z, R);
          break;
        }
        case "ArrowRight": {
          const R = Vl({
            currentColIndex: z,
            firstColIndex: v,
            lastColIndex: k,
            isRtl: o
          });
          R !== null && d(R, x);
          break;
        }
        case "ArrowLeft": {
          const R = _l({
            currentColIndex: z,
            firstColIndex: v,
            lastColIndex: k,
            isRtl: o
          });
          R !== null ? d(R, x) : e.current.setColumnHeaderFilterFocus(w.field, x);
          break;
        }
        case "ArrowUp": {
          i(z, x);
          break;
        }
        case "PageDown": {
          S !== null && a(z, p(Math.min(D + $, S)));
          break;
        }
        case "Home": {
          d(v, x);
          break;
        }
        case "End": {
          d(k, x);
          break;
        }
        case " ":
          break;
        default:
          O = false;
      }
      O && x.preventDefault();
    }, [
      e,
      l,
      d,
      o,
      i,
      a,
      p
    ]), m = u.useCallback((w, x) => {
      const E = nl(e);
      if (E === null) return;
      const { field: H, depth: M } = E, { fields: $, depth: z, maxDepth: D } = w, S = l(), v = e.current.getViewportPageSize(), k = e.current.getColumnIndex(H), O = H ? e.current.getColumnIndex(H) : 0, R = 0, _ = S.length - 1, F = 0, I = st(e).length - 1;
      let T = true;
      switch (x.key) {
        case "ArrowDown": {
          z === D - 1 ? i(k, x) : c(k, M + 1, x);
          break;
        }
        case "ArrowUp": {
          z > 0 && c(k, M - 1, x);
          break;
        }
        case "ArrowRight": {
          const L = $.length - $.indexOf(H) - 1;
          k + L + 1 <= I && c(k + L + 1, M, x);
          break;
        }
        case "ArrowLeft": {
          const L = $.indexOf(H);
          k - L - 1 >= F && c(k - L - 1, M, x);
          break;
        }
        case "PageDown": {
          _ !== null && a(O, p(Math.min(R + v, _)));
          break;
        }
        case "Home": {
          c(F, M, x);
          break;
        }
        case "End": {
          c(I, M, x);
          break;
        }
        case " ":
          break;
        default:
          T = false;
      }
      T && x.preventDefault();
    }, [
      e,
      l,
      i,
      c,
      a,
      p
    ]), C = u.useCallback((w, x) => {
      if (Mr(x)) return;
      const E = e.current.getCellParams(w.id, w.field);
      if (E.cellMode === Xe.Edit || !il(x.key) || !e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: x,
        cell: E
      })) return;
      const M = l();
      if (M.length === 0) return;
      const $ = e.current.getViewportPageSize(), z = r ? () => 0 : e.current.getColumnIndex, D = w.field ? z(w.field) : 0, S = M.findIndex((I) => I.id === w.id), v = 0, k = M.length - 1, O = 0, _ = (r ? [
        Oo(e.current.state)
      ] : st(e)).length - 1;
      let F = true;
      switch (x.key) {
        case "ArrowDown": {
          S < k && a(D, p(S + 1), o ? "right" : "left", "down");
          break;
        }
        case "ArrowUp": {
          S > v ? a(D, p(S - 1)) : s ? d(D, x) : i(D, x);
          break;
        }
        case "ArrowRight": {
          const I = Vl({
            currentColIndex: D,
            firstColIndex: O,
            lastColIndex: _,
            isRtl: o
          });
          I !== null && a(I, p(S), o ? "left" : "right");
          break;
        }
        case "ArrowLeft": {
          const I = _l({
            currentColIndex: D,
            firstColIndex: O,
            lastColIndex: _,
            isRtl: o
          });
          I !== null && a(I, p(S), o ? "right" : "left");
          break;
        }
        case "Tab": {
          x.shiftKey && D > O ? a(D - 1, p(S), "left") : !x.shiftKey && D < _ && a(D + 1, p(S), "right");
          break;
        }
        case " ": {
          if (w.field === ml) break;
          const T = w.colDef;
          if (T && (T.field === Fb || wx(T.field))) break;
          !x.shiftKey && S < k && a(D, p(Math.min(S + $, k)));
          break;
        }
        case "PageDown": {
          S < k && a(D, p(Math.min(S + $, k)));
          break;
        }
        case "PageUp": {
          const I = Math.max(S - $, v);
          I !== S && I >= v ? a(D, p(I)) : i(D, x);
          break;
        }
        case "Home": {
          x.ctrlKey || x.metaKey || x.shiftKey ? a(O, p(v)) : a(O, p(S));
          break;
        }
        case "End": {
          x.ctrlKey || x.metaKey || x.shiftKey ? a(_, p(k)) : a(_, p(S));
          break;
        }
        default:
          F = false;
      }
      F && x.preventDefault();
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
    ]), y = u.useCallback((w, { event: x }) => x.key === " " ? false : w, []);
    ot(e, "canStartEditing", y), oe(e, "columnHeaderKeyDown", h), oe(e, "headerFilterKeyDown", g), oe(e, "columnGroupHeaderKeyDown", m), oe(e, "cellKeyDown", C);
  }, HI = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridRowCount"), o = Q(e, Ns), r = Q(e, mo), l = Q(e, Jo), s = Q(e, kt), a = Sn(() => kt(e).pageSize);
    e.current.registerControlState({
      stateId: "paginationRowCount",
      propModel: t.rowCount,
      propOnChange: t.onRowCountChange,
      stateSelector: mo,
      changeEvent: "rowCountChange"
    });
    const d = {
      setRowCount: u.useCallback((m) => {
        r !== m && (n.debug("Setting 'rowCount' to", m), e.current.setState((C) => b({}, C, {
          pagination: b({}, C.pagination, {
            rowCount: m
          })
        })));
      }, [
        e,
        n,
        r
      ])
    };
    Me(e, d, "public");
    const c = u.useCallback((m, C) => {
      var _a3, _b3;
      const y = mo(e);
      return !C.exportOnlyDirtyModels || t.rowCount != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.rowCount) != null ? b({}, m, {
        pagination: b({}, m.pagination, {
          rowCount: y
        })
      }) : m;
    }, [
      e,
      t.rowCount,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.rowCount
    ]), p = u.useCallback((m, C) => {
      var _a3;
      const y = ((_a3 = C.stateToRestore.pagination) == null ? void 0 : _a3.rowCount) ? C.stateToRestore.pagination.rowCount : mo(e);
      return e.current.setState((w) => b({}, w, {
        pagination: b({}, w.pagination, {
          rowCount: y
        })
      })), m;
    }, [
      e
    ]);
    ot(e, "exportState", c), ot(e, "restoreState", p);
    const h = u.useCallback((m) => {
      t.paginationMode === "client" || !a.current || m.pageSize !== a.current && (a.current = m.pageSize, r === -1 && e.current.setPage(0));
    }, [
      t.paginationMode,
      a,
      r,
      e
    ]);
    oe(e, "paginationModelChange", h), u.useEffect(() => {
      t.paginationMode === "client" ? e.current.setRowCount(o) : t.rowCount != null && e.current.setRowCount(t.rowCount);
    }, [
      e,
      t.paginationMode,
      o,
      t.rowCount
    ]);
    const g = l.hasNextPage === false;
    u.useEffect(() => {
      g && r === -1 && e.current.setRowCount(s.pageSize * s.page + o);
    }, [
      e,
      o,
      g,
      r,
      s
    ]);
  }, LI = (e, t) => {
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
      setPaginationMeta: u.useCallback((i) => {
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
    Me(e, l, "public");
    const s = u.useCallback((i, d) => {
      var _a3, _b3;
      const c = Jo(e);
      return !d.exportOnlyDirtyModels || t.paginationMeta != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.meta) != null ? b({}, i, {
        pagination: b({}, i.pagination, {
          meta: c
        })
      }) : i;
    }, [
      e,
      t.paginationMeta,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.meta
    ]), a = u.useCallback((i, d) => {
      var _a3;
      const c = ((_a3 = d.stateToRestore.pagination) == null ? void 0 : _a3.meta) ? d.stateToRestore.pagination.meta : Jo(e);
      return e.current.setState((p) => b({}, p, {
        pagination: b({}, p.pagination, {
          meta: c
        })
      })), i;
    }, [
      e
    ]);
    ot(e, "exportState", s), ot(e, "restoreState", a), u.useEffect(() => {
      t.paginationMeta && e.current.setPaginationMeta(t.paginationMeta);
    }, [
      e,
      t.paginationMeta
    ]);
  }, jI = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2;
    const n = b({}, cu(t.autoPageSize), t.paginationModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel));
    uu(n.pageSize, t.signature);
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
  }, AI = (e, t) => {
    LI(e, t), yI(e, t), HI(e, t);
  }, zI = (e, t) => {
    var _a2;
    return b({}, e, {
      preferencePanel: ((_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel) ?? {
        open: false
      }
    });
  }, GI = (e, t) => {
    var _a2;
    const n = wt(e, "useGridPreferencesPanel"), o = u.useCallback(() => {
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
    ]), r = u.useCallback((a, i, d) => {
      n.debug("Opening Preferences Panel"), e.current.setState((c) => b({}, c, {
        preferencePanel: b({}, c.preferencePanel, {
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
    Me(e, {
      showPreferences: r,
      hidePreferences: o
    }, "public");
    const l = u.useCallback((a, i) => {
      var _a3;
      const d = dr(e.current.state);
      return !i.exportOnlyDirtyModels || ((_a3 = t.initialState) == null ? void 0 : _a3.preferencePanel) != null || d.open ? b({}, a, {
        preferencePanel: d
      }) : a;
    }, [
      e,
      (_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel
    ]), s = u.useCallback((a, i) => {
      const d = i.stateToRestore.preferencePanel;
      return d != null && e.current.setState((c) => b({}, c, {
        preferencePanel: d
      })), a;
    }, [
      e
    ]);
    ot(e, "exportState", l), ot(e, "restoreState", s);
  }, gs = (e) => {
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
  }, _I = [
    "id",
    "field"
  ], VI = [
    "id",
    "field"
  ], NI = (e, t) => {
    const [n, o] = u.useState({}), r = u.useRef(n), l = u.useRef({}), { processRowUpdate: s, onProcessRowUpdateError: a, cellModesModel: i, onCellModesModelChange: d } = t, c = (F) => (...I) => {
      t.editMode === yn.Cell && F(...I);
    }, p = u.useCallback((F, I) => {
      const T = e.current.getCellParams(F, I);
      if (!e.current.isCellEditable(T)) throw new Error(`MUI X: The cell with id=${F} and field=${I} is not editable.`);
    }, [
      e
    ]), h = u.useCallback((F, I, T) => {
      if (e.current.getCellMode(F, I) !== T) throw new Error(`MUI X: The cell with id=${F} and field=${I} is not in ${T} mode.`);
    }, [
      e
    ]), g = u.useCallback((F, I) => {
      if (!F.isEditable || F.cellMode === Xe.Edit) return;
      const T = b({}, F, {
        reason: kn.cellDoubleClick
      });
      e.current.publishEvent("cellEditStart", T, I);
    }, [
      e
    ]), m = u.useCallback((F, I) => {
      if (F.cellMode === Xe.View || e.current.getCellMode(F.id, F.field) === Xe.View) return;
      const T = b({}, F, {
        reason: cn.cellFocusOut
      });
      e.current.publishEvent("cellEditStop", T, I);
    }, [
      e
    ]), C = u.useCallback((F, I) => {
      if (F.cellMode === Xe.Edit) {
        if (I.which === 229) return;
        let T;
        if (I.key === "Escape" ? T = cn.escapeKeyDown : I.key === "Enter" ? T = cn.enterKeyDown : I.key === "Tab" && (T = I.shiftKey ? cn.shiftTabKeyDown : cn.tabKeyDown, I.preventDefault()), T) {
          const L = b({}, F, {
            reason: T
          });
          e.current.publishEvent("cellEditStop", L, I);
        }
      } else if (F.isEditable) {
        let T;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: I,
          cellParams: F,
          editMode: "cell"
        })) return;
        if (Nu(I) ? T = kn.printableKeyDown : Wu(I) ? T = kn.pasteKeyDown : I.key === "Enter" ? T = kn.enterKeyDown : (I.key === "Backspace" || I.key === "Delete") && (T = kn.deleteKeyDown), T) {
          const A = b({}, F, {
            reason: T,
            key: I.key
          });
          e.current.publishEvent("cellEditStart", A, I);
        }
      }
    }, [
      e
    ]), y = u.useCallback((F) => {
      const { id: I, field: T, reason: L } = F, A = {
        id: I,
        field: T
      };
      (L === kn.printableKeyDown || L === kn.deleteKeyDown || L === kn.pasteKeyDown) && (A.deleteValue = true), e.current.startCellEditMode(A);
    }, [
      e
    ]), w = u.useCallback((F) => {
      const { id: I, field: T, reason: L } = F;
      e.current.runPendingEditCellValueMutation(I, T);
      let A;
      L === cn.enterKeyDown ? A = "below" : L === cn.tabKeyDown ? A = "right" : L === cn.shiftTabKeyDown && (A = "left");
      const G = L === "escapeKeyDown";
      e.current.stopCellEditMode({
        id: I,
        field: T,
        ignoreModifications: G,
        cellToFocusAfter: A
      });
    }, [
      e
    ]), x = (F) => async (...I) => {
      var _a2;
      if (F) {
        const { id: T, field: L } = I[0];
        ((_a2 = e.current.state.editRows[T][L]) == null ? void 0 : _a2.error) || F(...I);
      }
    };
    oe(e, "cellDoubleClick", c(g)), oe(e, "cellFocusOut", c(m)), oe(e, "cellKeyDown", c(C)), oe(e, "cellEditStart", c(y)), oe(e, "cellEditStop", c(w)), Qe(e, "cellEditStart", t.onCellEditStart), Qe(e, "cellEditStop", x(t.onCellEditStop));
    const E = u.useCallback((F, I) => {
      const T = ht(e.current.state);
      return T[F] && T[F][I] ? Xe.Edit : Xe.View;
    }, [
      e
    ]), H = Ke((F) => {
      const I = F !== t.cellModesModel;
      d && I && d(F, {
        api: e.current
      }), !(t.cellModesModel && I) && (o(F), r.current = F, e.current.publishEvent("cellModesModelChange", F));
    }), M = u.useCallback((F, I, T) => {
      const L = b({}, r.current);
      if (T !== null) L[F] = b({}, L[F], {
        [I]: b({}, T)
      });
      else {
        const A = L[F], G = ge(A, [
          I
        ].map(fr));
        L[F] = G, Object.keys(L[F]).length === 0 && delete L[F];
      }
      H(L);
    }, [
      H
    ]), $ = u.useCallback((F, I, T) => {
      e.current.setState((L) => {
        const A = b({}, L.editRows);
        return T !== null ? A[F] = b({}, A[F], {
          [I]: b({}, T)
        }) : (delete A[F][I], Object.keys(A[F]).length === 0 && delete A[F]), b({}, L, {
          editRows: A
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), z = u.useCallback((F) => {
      const { id: I, field: T } = F, L = ge(F, _I);
      p(I, T), h(I, T, Xe.View), M(I, T, b({
        mode: Xe.Edit
      }, L));
    }, [
      p,
      h,
      M
    ]), D = Ke(async (F) => {
      const { id: I, field: T, deleteValue: L, initialValue: A } = F, G = e.current.getCellValue(I, T);
      let j = G;
      L ? j = gs(e.current.getColumn(T)) : A && (j = A);
      const V = e.current.getColumn(T), U = !!V.preProcessEditCellProps && L;
      let W = {
        value: j,
        error: false,
        isProcessingProps: U
      };
      if ($(I, T, W), e.current.setCellFocus(I, T), U && (W = await Promise.resolve(V.preProcessEditCellProps({
        id: I,
        row: e.current.getRow(I),
        props: W,
        hasChanged: j !== G
      })), e.current.getCellMode(I, T) === Xe.Edit)) {
        const K = ht(e.current.state);
        $(I, T, b({}, W, {
          value: K[I][T].value,
          isProcessingProps: false
        }));
      }
    }), S = u.useCallback((F) => {
      const { id: I, field: T } = F, L = ge(F, VI);
      h(I, T, Xe.Edit), M(I, T, b({
        mode: Xe.View
      }, L));
    }, [
      h,
      M
    ]), v = Ke(async (F) => {
      const { id: I, field: T, ignoreModifications: L, cellToFocusAfter: A = "none" } = F;
      h(I, T, Xe.Edit), e.current.runPendingEditCellValueMutation(I, T);
      const G = () => {
        $(I, T, null), M(I, T, null), A !== "none" && e.current.moveFocusToRelativeCell(I, T, A);
      };
      if (L) {
        G();
        return;
      }
      const j = ht(e.current.state), { error: V, isProcessingProps: U } = j[I][T];
      if (V || U) {
        l.current[I][T].mode = Xe.Edit, M(I, T, {
          mode: Xe.Edit
        });
        return;
      }
      const W = e.current.getRowWithUpdatedValuesFromCellEditing(I, T);
      if (s) {
        const K = (B) => {
          l.current[I][T].mode = Xe.Edit, M(I, T, {
            mode: Xe.Edit
          }), a && a(B);
        };
        try {
          const B = e.current.getRow(I);
          Promise.resolve(s(W, B, {
            rowId: I
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
    }), k = u.useCallback(async (F) => {
      var _a2, _b2;
      const { id: I, field: T, value: L, debounceMs: A, unstable_skipValueParser: G } = F;
      p(I, T), h(I, T, Xe.Edit);
      const j = e.current.getColumn(T), V = e.current.getRow(I);
      let U = L;
      j.valueParser && !G && (U = j.valueParser(L, V, j, e));
      let W = ht(e.current.state), K = b({}, W[I][T], {
        value: U,
        changeReason: A ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      if (j.preProcessEditCellProps) {
        const B = L !== W[I][T].value;
        K = b({}, K, {
          isProcessingProps: true
        }), $(I, T, K), K = await Promise.resolve(j.preProcessEditCellProps({
          id: I,
          row: V,
          props: K,
          hasChanged: B
        }));
      }
      return e.current.getCellMode(I, T) === Xe.View ? false : (W = ht(e.current.state), K = b({}, K, {
        isProcessingProps: false
      }), K.value = j.preProcessEditCellProps ? W[I][T].value : U, $(I, T, K), W = ht(e.current.state), !((_b2 = (_a2 = W[I]) == null ? void 0 : _a2[T]) == null ? void 0 : _b2.error));
    }, [
      e,
      p,
      h,
      $
    ]), O = u.useCallback((F, I) => {
      const T = e.current.getColumn(I), L = ht(e.current.state), A = e.current.getRow(F);
      if (!L[F] || !L[F][I]) return e.current.getRow(F);
      const { value: G } = L[F][I];
      return T.valueSetter ? T.valueSetter(G, A, T, e) : b({}, A, {
        [I]: G
      });
    }, [
      e
    ]), R = {
      getCellMode: E,
      startCellEditMode: z,
      stopCellEditMode: S
    }, _ = {
      setCellEditingEditCellValue: k,
      getRowWithUpdatedValuesFromCellEditing: O
    };
    Me(e, R, "public"), Me(e, _, "private"), u.useEffect(() => {
      i && H(i);
    }, [
      i,
      H
    ]), St(() => {
      const F = Jt(e), I = l.current;
      l.current = jc(n), Object.entries(n).forEach(([T, L]) => {
        Object.entries(L).forEach(([A, G]) => {
          var _a2, _b2;
          const j = ((_b2 = (_a2 = I[T]) == null ? void 0 : _a2[A]) == null ? void 0 : _b2.mode) || Xe.View, V = F[T] ? e.current.getRowId(F[T]) : T;
          G.mode === Xe.Edit && j === Xe.View ? D(b({
            id: V,
            field: A
          }, G)) : G.mode === Xe.View && j === Xe.Edit && v(b({
            id: V,
            field: A
          }, G));
        });
      });
    }, [
      e,
      n,
      D,
      v
    ]);
  }, BI = [
    "id"
  ], WI = [
    "id"
  ], UI = (e, t) => {
    const [n, o] = u.useState({}), r = u.useRef(n), l = u.useRef({}), s = u.useRef({}), a = u.useRef(void 0), i = u.useRef(null), { processRowUpdate: d, onProcessRowUpdateError: c, rowModesModel: p, onRowModesModelChange: h } = t, g = (G) => (...j) => {
      t.editMode === yn.Row && G(...j);
    }, m = u.useCallback((G, j) => {
      const V = e.current.getCellParams(G, j);
      if (!e.current.isCellEditable(V)) throw new Error(`MUI X: The cell with id=${G} and field=${j} is not editable.`);
    }, [
      e
    ]), C = u.useCallback((G, j) => {
      if (e.current.getRowMode(G) !== j) throw new Error(`MUI X: The row with id=${G} is not in ${j} mode.`);
    }, [
      e
    ]), y = u.useCallback((G) => {
      const j = ht(e.current.state);
      return Object.values(j[G]).some((V) => V.error);
    }, [
      e
    ]), w = u.useCallback((G, j) => {
      if (!G.isEditable || e.current.getRowMode(G.id) === et.Edit) return;
      const V = e.current.getRowParams(G.id), U = b({}, V, {
        field: G.field,
        reason: Hn.cellDoubleClick
      });
      e.current.publishEvent("rowEditStart", U, j);
    }, [
      e
    ]), x = u.useCallback((G) => {
      i.current = G;
    }, []), E = u.useCallback((G, j) => {
      G.isEditable && e.current.getRowMode(G.id) !== et.View && (i.current = null, a.current = setTimeout(() => {
        var _a2;
        if (((_a2 = i.current) == null ? void 0 : _a2.id) !== G.id) {
          if (!e.current.getRow(G.id) || e.current.getRowMode(G.id) === et.View || y(G.id)) return;
          const V = e.current.getRowParams(G.id), U = b({}, V, {
            field: G.field,
            reason: bn.rowFocusOut
          });
          e.current.publishEvent("rowEditStop", U, j);
        }
      }));
    }, [
      e,
      y
    ]);
    u.useEffect(() => () => {
      clearTimeout(a.current);
    }, []);
    const H = u.useCallback((G, j) => {
      if (G.cellMode === et.Edit) {
        if (j.which === 229) return;
        let V;
        if (j.key === "Escape") V = bn.escapeKeyDown;
        else if (j.key === "Enter") V = bn.enterKeyDown;
        else if (j.key === "Tab") {
          const U = $o(e).filter((W) => e.current.getColumn(W).type === gl ? true : e.current.isCellEditable(e.current.getCellParams(G.id, W)));
          if (j.shiftKey ? G.field === U[0] && (V = bn.shiftTabKeyDown) : G.field === U[U.length - 1] && (V = bn.tabKeyDown), j.preventDefault(), !V) {
            const W = U.findIndex((B) => B === G.field), K = U[j.shiftKey ? W - 1 : W + 1];
            e.current.setCellFocus(G.id, K);
          }
        }
        if (V) {
          if (V !== bn.escapeKeyDown && y(G.id)) return;
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
        if (Nu(j) || Wu(j) ? V = Hn.printableKeyDown : j.key === "Enter" ? V = Hn.enterKeyDown : (j.key === "Backspace" || j.key === "Delete") && (V = Hn.deleteKeyDown), V) {
          const W = e.current.getRowParams(G.id), K = b({}, W, {
            field: G.field,
            reason: V
          });
          e.current.publishEvent("rowEditStart", K, j);
        }
      }
    }, [
      e,
      y
    ]), M = u.useCallback((G) => {
      const { id: j, field: V, reason: U } = G, W = {
        id: j,
        fieldToFocus: V
      };
      (U === Hn.printableKeyDown || U === Hn.deleteKeyDown) && (W.deleteValue = !!V), e.current.startRowEditMode(W);
    }, [
      e
    ]), $ = u.useCallback((G) => {
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
    oe(e, "cellDoubleClick", g(w)), oe(e, "cellFocusIn", g(x)), oe(e, "cellFocusOut", g(E)), oe(e, "cellKeyDown", g(H)), oe(e, "rowEditStart", g(M)), oe(e, "rowEditStop", g($)), Qe(e, "rowEditStart", t.onRowEditStart), Qe(e, "rowEditStop", t.onRowEditStop);
    const z = u.useCallback((G) => $u(e, {
      rowId: G,
      editMode: t.editMode
    }) ? et.Edit : et.View, [
      e,
      t.editMode
    ]), D = Ke((G) => {
      const j = G !== t.rowModesModel;
      h && j && h(G, {
        api: e.current
      }), !(t.rowModesModel && j) && (o(G), r.current = G, e.current.publishEvent("rowModesModelChange", G));
    }), S = u.useCallback((G, j) => {
      const V = b({}, r.current);
      j !== null ? V[G] = b({}, j) : delete V[G], D(V);
    }, [
      D
    ]), v = u.useCallback((G, j) => {
      e.current.setState((V) => {
        const U = b({}, V.editRows);
        return j !== null ? U[G] = j : delete U[G], b({}, V, {
          editRows: U
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), k = u.useCallback((G, j, V) => {
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
    ]), O = u.useCallback((G) => {
      const { id: j } = G, V = ge(G, BI);
      C(j, et.View), S(j, b({
        mode: et.Edit
      }, V));
    }, [
      C,
      S
    ]), R = Ke((G) => {
      const { id: j, fieldToFocus: V, deleteValue: U, initialValue: W } = G, K = e.current.getRow(j), B = on(e), te = B.reduce((J, ne) => {
        const ae = ne.field;
        if (!e.current.getCellParams(j, ae).isEditable) return J;
        const Y = e.current.getColumn(ae);
        let re = e.current.getCellValue(j, ae);
        return V === ae && (U || W) && (U ? re = gs(Y) : W && (re = W)), J[ae] = {
          value: re,
          error: false,
          isProcessingProps: Y.editable && !!Y.preProcessEditCellProps && U
        }, J;
      }, {});
      s.current[j] = K, v(j, te), V && e.current.setCellFocus(j, V), B.filter((J) => e.current.getCellParams(j, J.field).isEditable && J.editable && !!J.preProcessEditCellProps && U).forEach((J) => {
        const ne = J.field, ae = e.current.getCellValue(j, ne), we = U ? gs(J) : W ?? ae;
        Promise.resolve(J.preProcessEditCellProps({
          id: j,
          row: K,
          props: te[ne],
          hasChanged: we !== ae
        })).then((Y) => {
          if (e.current.getRowMode(j) === et.Edit) {
            const re = ht(e.current.state);
            k(j, ne, b({}, Y, {
              value: re[j][ne].value,
              isProcessingProps: false
            }));
          }
        });
      });
    }), _ = u.useCallback((G) => {
      const { id: j } = G, V = ge(G, WI);
      C(j, et.Edit), S(j, b({
        mode: et.View
      }, V));
    }, [
      C,
      S
    ]), F = Ke((G) => {
      const { id: j, ignoreModifications: V, field: U, cellToFocusAfter: W = "none" } = G;
      e.current.runPendingEditCellValueMutation(j);
      const K = () => {
        W !== "none" && U && e.current.moveFocusToRelativeCell(j, U, W), v(j, null), S(j, null), delete s.current[j];
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
      if (y(j)) {
        l.current[j].mode = et.Edit, S(j, {
          mode: et.Edit
        });
        return;
      }
      const ne = e.current.getRowWithUpdatedValuesFromRowEditing(j);
      if (d) {
        const ae = (we) => {
          l.current[j] && (l.current[j].mode = et.Edit, S(j, {
            mode: et.Edit
          })), c && c(we);
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
    }), I = u.useCallback((G) => {
      const { id: j, field: V, value: U, debounceMs: W, unstable_skipValueParser: K } = G;
      m(j, V);
      const B = e.current.getColumn(V), te = e.current.getRow(j);
      let J = U;
      B.valueParser && !K && (J = B.valueParser(U, te, B, e));
      let ne = ht(e.current.state), ae = b({}, ne[j][V], {
        value: J,
        changeReason: W ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      return B.preProcessEditCellProps || k(j, V, ae), new Promise((we) => {
        const Y = [];
        if (B.preProcessEditCellProps) {
          const re = ae.value !== ne[j][V].value;
          ae = b({}, ae, {
            isProcessingProps: true
          }), k(j, V, ae);
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
            }), ee.value = B.preProcessEditCellProps ? ne[j][V].value : J, k(j, V, ee);
          });
          Y.push(Se);
        }
        Object.entries(ne[j]).forEach(([re, ye]) => {
          if (re === V) return;
          const Z = e.current.getColumn(re);
          if (!Z.preProcessEditCellProps) return;
          ye = b({}, ye, {
            isProcessingProps: true
          }), k(j, re, ye), ne = ht(e.current.state);
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
            }), k(j, re, Ce);
          });
          Y.push(ve);
        }), Promise.all(Y).then(() => {
          e.current.getRowMode(j) === et.Edit ? (ne = ht(e.current.state), we(!ne[j][V].error)) : we(false);
        });
      });
    }, [
      e,
      m,
      k
    ]), T = u.useCallback((G) => {
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
      getRowMode: z,
      startRowEditMode: O,
      stopRowEditMode: _
    }, A = {
      setRowEditingEditCellValue: I,
      getRowWithUpdatedValuesFromRowEditing: T
    };
    Me(e, L, "public"), Me(e, A, "private"), u.useEffect(() => {
      p && D(p);
    }, [
      p,
      D
    ]), St(() => {
      const G = Jt(e), j = l.current;
      l.current = jc(n);
      const V = /* @__PURE__ */ new Set([
        ...Object.keys(n),
        ...Object.keys(j)
      ]);
      Array.from(V).forEach((U) => {
        var _a2;
        const W = n[U] ?? {
          mode: et.View
        }, K = ((_a2 = j[U]) == null ? void 0 : _a2.mode) || et.View, B = G[U] ? e.current.getRowId(G[U]) : U;
        W.mode === et.Edit && K === et.View ? R(b({
          id: B
        }, W)) : W.mode === et.View && K === et.Edit && F(b({
          id: B
        }, W));
      });
    }, [
      e,
      n,
      R,
      F
    ]);
  }, KI = (e) => b({}, e, {
    editRows: {}
  }), qI = (e, t) => {
    NI(e, t), UI(e, t);
    const n = u.useRef({}), { isCellEditable: o } = t, r = u.useCallback((h) => Fo(h.rowNode) || !h.colDef.editable || !h.colDef.renderEditCell ? false : o ? o(h) : true, [
      o
    ]), l = (h, g, m, C) => {
      if (!m) {
        C();
        return;
      }
      if (n.current[h] || (n.current[h] = {}), n.current[h][g]) {
        const [x] = n.current[h][g];
        clearTimeout(x);
      }
      const y = () => {
        const [x] = n.current[h][g];
        clearTimeout(x), C(), delete n.current[h][g];
      }, w = setTimeout(() => {
        C(), delete n.current[h][g];
      }, m);
      n.current[h][g] = [
        w,
        y
      ];
    };
    u.useEffect(() => {
      const h = n.current;
      return () => {
        Object.entries(h).forEach(([g, m]) => {
          Object.keys(m).forEach((C) => {
            const [y] = h[g][C];
            clearTimeout(y), delete h[g][C];
          });
        });
      };
    }, []);
    const s = u.useCallback((h, g) => {
      if (n.current[h]) {
        if (!g) Object.keys(n.current[h]).forEach((m) => {
          const [, C] = n.current[h][m];
          C();
        });
        else if (n.current[h][g]) {
          const [, m] = n.current[h][g];
          m();
        }
      }
    }, []), a = u.useCallback((h) => {
      const { id: g, field: m, debounceMs: C } = h;
      return new Promise((y) => {
        l(g, m, C, async () => {
          const w = t.editMode === yn.Row ? e.current.setRowEditingEditCellValue : e.current.setCellEditingEditCellValue;
          if (e.current.getCellMode(g, m) === Xe.Edit) {
            const x = await w(h);
            y(x);
          }
        });
      });
    }, [
      e,
      t.editMode
    ]), i = u.useCallback((h, g) => t.editMode === yn.Cell ? e.current.getRowWithUpdatedValuesFromCellEditing(h, g) : e.current.getRowWithUpdatedValuesFromRowEditing(h), [
      e,
      t.editMode
    ]), d = u.useCallback((h, g) => {
      var _a2;
      return ((_a2 = ht(e.current.state)[h]) == null ? void 0 : _a2[g]) ?? null;
    }, [
      e
    ]), c = {
      isCellEditable: r,
      setEditCellValue: a,
      getRowWithUpdatedValues: i,
      unstable_getEditCellMeta: d
    }, p = {
      runPendingEditCellValueMutation: s
    };
    Me(e, c, "public"), Me(e, p, "private");
  }, YI = (e, t, n) => {
    const o = !!t.unstable_dataSource;
    return n.current.caches.rows = Br({
      rows: o ? [] : t.rows,
      getRowId: t.getRowId,
      loading: t.loading,
      rowCount: t.rowCount
    }), b({}, e, {
      rows: Yc({
        apiRef: n,
        rowCountProp: t.rowCount,
        loadingProp: o ? true : t.loading,
        previousTree: null,
        previousTreeDepths: null
      })
    });
  }, XI = (e, t) => {
    const n = wt(e, "useGridRows"), o = u.useRef(Date.now()), r = u.useRef(t.rowCount), l = Xt(), s = u.useCallback((F) => {
      const I = Jt(e)[F];
      if (I) return I;
      const T = e.current.getRowNode(F);
      return T && Fo(T) ? {
        [Eo]: F
      } : null;
    }, [
      e
    ]), a = u.useCallback((F) => Sr(e.current.state, F), [
      e
    ]), i = u.useCallback(({ cache: F, throttle: I }) => {
      const T = () => {
        o.current = Date.now(), e.current.setState((A) => b({}, A, {
          rows: Yc({
            apiRef: e,
            rowCountProp: t.rowCount,
            loadingProp: t.loading,
            previousTree: pt(e),
            previousTreeDepths: Wi(e),
            previousGroupsToFetch: Wm(e)
          })
        })), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
      };
      if (l.clear(), e.current.caches.rows = F, !I) {
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
    ]), d = u.useCallback((F) => {
      n.debug(`Updating all rows, new length ${F.length}`);
      const I = Br({
        rows: F,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), T = e.current.caches.rows;
      I.rowsBeforePartialUpdates = T.rowsBeforePartialUpdates, i({
        cache: I,
        throttle: true
      });
    }, [
      n,
      t.getRowId,
      t.loading,
      t.rowCount,
      i,
      e
    ]), c = u.useCallback((F) => {
      if (t.signature === nn.DataGrid && F.length > 1) throw new Error([
        "MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      const I = na(e, F, t.getRowId), T = ta({
        updates: I,
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
    ]), p = u.useCallback((F, I) => {
      const T = na(e, F, t.getRowId), L = ta({
        updates: T,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows,
        groupKeys: I ?? []
      });
      i({
        cache: L,
        throttle: false
      });
    }, [
      t.getRowId,
      i,
      e
    ]), h = u.useCallback((F) => {
      F !== t.loading && (n.debug(`Setting loading to ${F}`), e.current.setState((I) => b({}, I, {
        rows: b({}, I.rows, {
          loading: F
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = F);
    }, [
      t.loading,
      e,
      n
    ]), g = u.useCallback(() => {
      const F = Qo(e), I = Jt(e);
      return new Map(F.map((T) => [
        T,
        I[T] ?? {}
      ]));
    }, [
      e
    ]), m = u.useCallback(() => wr(e), [
      e
    ]), C = u.useCallback(() => Qo(e), [
      e
    ]), y = u.useCallback((F) => {
      const I = e.current.getRow(F), { rowToIndexMap: T } = _n(e);
      return T.get(I);
    }, [
      e
    ]), w = u.useCallback((F, I) => {
      const T = e.current.getRowNode(F);
      if (!T) throw new Error(`MUI X: No row with id #${F} found.`);
      if (T.type !== "group") throw new Error("MUI X: Only group nodes can be expanded or collapsed.");
      const L = b({}, T, {
        childrenExpanded: I
      });
      e.current.setState((A) => b({}, A, {
        rows: b({}, A.rows, {
          tree: b({}, A.rows.tree, {
            [F]: L
          })
        })
      })), e.current.forceUpdate(), e.current.publishEvent("rowExpansionChange", L);
    }, [
      e
    ]), x = u.useCallback((F) => pt(e)[F] ?? null, [
      e
    ]), E = u.useCallback(({ skipAutoGeneratedRows: F = true, groupId: I, applySorting: T, applyFiltering: L }) => {
      const A = pt(e);
      let G;
      if (T) {
        const j = A[I];
        if (!j) return [];
        const V = Lo(e);
        G = [];
        const U = V.findIndex((W) => W === I) + 1;
        for (let W = U; W < V.length && A[V[W]].depth > j.depth; W += 1) {
          const K = V[W];
          (!F || !Fo(A[K])) && G.push(K);
        }
      } else G = Gs(A, I, F);
      if (L) {
        const j = jo(e);
        G = G.filter((V) => j[V] !== false);
      }
      return G;
    }, [
      e
    ]), H = u.useCallback((F, I) => {
      const T = e.current.getRowNode(F);
      if (!T) throw new Error(`MUI X: No row with id #${F} found.`);
      if (T.parent !== Pt) throw new Error("MUI X: The row reordering do not support reordering of grouped rows yet.");
      if (T.type !== "leaf") throw new Error("MUI X: The row reordering do not support reordering of footer or grouping rows.");
      e.current.setState((L) => {
        const A = pt(L, e.current.instanceId)[Pt], G = A.children, j = G.findIndex((U) => U === F);
        if (j === -1 || j === I) return L;
        n.debug(`Moving row ${F} to index ${I}`);
        const V = [
          ...G
        ];
        return V.splice(I, 0, V.splice(j, 1)[0]), b({}, L, {
          rows: b({}, L.rows, {
            tree: b({}, L.rows.tree, {
              [Pt]: b({}, A, {
                children: V
              })
            })
          })
        });
      }), e.current.publishEvent("rowsSet");
    }, [
      e,
      n
    ]), M = u.useCallback((F, I) => {
      if (t.signature === nn.DataGrid && I.length > 1) throw new Error([
        "MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      if (I.length === 0) return;
      if (no(e) > 1) throw new Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
      const L = b({}, pt(e)), A = b({}, Jt(e)), G = b({}, Bi(e)), j = L[Pt], V = [
        ...j.children
      ], U = /* @__PURE__ */ new Set();
      for (let K = 0; K < I.length; K += 1) {
        const B = I[K], te = hl(B, t.getRowId, "A row was provided without id when calling replaceRows()."), [J] = V.splice(F + K, 1, te);
        U.has(J) || (delete A[J], delete G[J], delete L[J]);
        const ne = {
          id: te,
          depth: 0,
          parent: Pt,
          type: "leaf",
          groupingKey: null
        };
        A[te] = B, G[te] = te, L[te] = ne, U.add(te);
      }
      L[Pt] = b({}, j, {
        children: V
      });
      const W = V.filter((K) => {
        var _a2;
        return ((_a2 = L[K]) == null ? void 0 : _a2.type) === "leaf";
      });
      e.current.caches.rows.dataRowIdToModelLookup = A, e.current.caches.rows.dataRowIdToIdLookup = G, e.current.setState((K) => b({}, K, {
        rows: b({}, K.rows, {
          dataRowIdToModelLookup: A,
          dataRowIdToIdLookup: G,
          dataRowIds: W,
          tree: L
        })
      })), e.current.publishEvent("rowsSet");
    }, [
      e,
      t.signature,
      t.getRowId
    ]), $ = {
      getRow: s,
      setLoading: h,
      getRowId: a,
      getRowModels: g,
      getRowsCount: m,
      getAllRowIds: C,
      setRows: d,
      updateRows: c,
      getRowNode: x,
      getRowIndexRelativeToVisibleRows: y,
      unstable_replaceRows: M
    }, z = {
      setRowIndex: H,
      setRowChildrenExpansion: w,
      getRowGroupChildren: E
    }, D = {
      updateServerRows: p
    }, S = u.useCallback(() => {
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
    ]), v = Sn(() => t.unstable_dataSource), k = u.useCallback((F) => {
      if (t.unstable_dataSource && t.unstable_dataSource !== v.current) {
        v.current = t.unstable_dataSource;
        return;
      }
      F === "rowTreeCreation" && S();
    }, [
      S,
      v,
      t.unstable_dataSource
    ]), O = u.useCallback(() => {
      e.current.getActiveStrategy("rowTree") !== Um(e) && S();
    }, [
      e,
      S
    ]);
    oe(e, "activeStrategyProcessorChange", k), oe(e, "strategyAvailabilityChange", O);
    const R = u.useCallback(() => {
      e.current.setState((F) => {
        const I = e.current.unstable_applyPipeProcessors("hydrateRows", {
          tree: pt(F, e.current.instanceId),
          treeDepths: Wi(F, e.current.instanceId),
          dataRowIds: Qo(F, e.current.instanceId),
          dataRowIdToModelLookup: Jt(F, e.current.instanceId),
          dataRowIdToIdLookup: Bi(F, e.current.instanceId)
        });
        return b({}, F, {
          rows: b({}, F.rows, I, {
            totalTopLevelRowCount: qc({
              tree: I.tree,
              rowCountProp: t.rowCount
            })
          })
        });
      }), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
    }, [
      e,
      t.rowCount
    ]);
    oi(e, "hydrateRows", R), Me(e, $, "public"), Me(e, z, t.signature === nn.DataGrid ? "private" : "public"), Me(e, D, "private");
    const _ = u.useRef(true);
    u.useEffect(() => {
      var _a2;
      if (_.current) {
        _.current = false;
        return;
      }
      let F = false;
      t.rowCount !== r.current && (F = true, r.current = t.rowCount);
      const I = e.current.caches.rows.rowsBeforePartialUpdates === t.rows, T = e.current.caches.rows.loadingPropBeforePartialUpdates === t.loading, L = e.current.caches.rows.rowCountPropBeforePartialUpdates === t.rowCount;
      I && (T || (e.current.setState((A) => b({}, A, {
        rows: b({}, A.rows, {
          loading: t.loading
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = t.loading, e.current.forceUpdate()), L || (e.current.setState((A) => b({}, A, {
        rows: b({}, A.rows, {
          totalRowCount: Math.max(t.rowCount || 0, A.rows.totalRowCount),
          totalTopLevelRowCount: Math.max(t.rowCount || 0, A.rows.totalTopLevelRowCount)
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
  }, QI = (e) => {
    const t = {
      [Pt]: b({}, kb(), {
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
  }, JI = ({ previousTree: e, actions: t }) => {
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
  }, ZI = (e) => e.updates.type === "full" ? QI(e.updates.rows) : JI({
    previousTree: e.previousTree,
    actions: e.updates.actions
  }), e0 = (e) => {
    ul(e, eo, "rowTreeCreation", ZI);
  };
  class Nl extends Error {
  }
  function t0(e, t) {
    var _a2;
    const n = u.useCallback((m) => ({
      field: m,
      colDef: e.current.getColumn(m)
    }), [
      e
    ]), o = u.useCallback((m) => {
      const C = e.current.getRow(m);
      if (!C) throw new Nl(`No row with id #${m} found`);
      return {
        id: m,
        columns: e.current.getAllColumns(),
        row: C
      };
    }, [
      e
    ]), r = u.useCallback((m, C, y, { cellMode: w, colDef: x, hasFocus: E, rowNode: H, tabIndex: M }) => {
      const $ = y[C], z = (x == null ? void 0 : x.valueGetter) ? x.valueGetter($, y, x, e) : $, D = {
        id: m,
        field: C,
        row: y,
        rowNode: H,
        colDef: x,
        cellMode: w,
        hasFocus: E,
        tabIndex: M,
        value: z,
        formattedValue: z,
        isEditable: false,
        api: e.current
      };
      return x && x.valueFormatter && (D.formattedValue = x.valueFormatter(z, y, x, e)), D.isEditable = x && e.current.isCellEditable(D), D;
    }, [
      e
    ]), l = u.useCallback((m, C) => {
      var _a3;
      const y = e.current.getRow(m), w = e.current.getRowNode(m);
      if (!y || !w) throw new Nl(`No row with id #${m} found`);
      const x = Rt(e), E = Ws(e), H = e.current.getCellMode(m, C);
      return e.current.getCellParamsForRow(m, C, y, {
        colDef: t.unstable_listView && ((_a3 = t.unstable_listColumn) == null ? void 0 : _a3.field) === C ? Oo(e.current.state) : e.current.getColumn(C),
        rowNode: w,
        hasFocus: x !== null && x.field === C && x.id === m,
        tabIndex: E && E.field === C && E.id === m ? 0 : -1,
        cellMode: H
      });
    }, [
      e,
      t.unstable_listView,
      (_a2 = t.unstable_listColumn) == null ? void 0 : _a2.field
    ]), s = u.useCallback((m, C) => {
      const y = e.current.getColumn(C), w = e.current.getRow(m);
      if (!w) throw new Nl(`No row with id #${m} found`);
      return !y || !y.valueGetter ? w[C] : y.valueGetter(w[y.field], w, y, e);
    }, [
      e
    ]), a = u.useCallback((m, C) => {
      const y = C.field;
      if (!C || !C.valueGetter) return m[y];
      const w = m[C.field];
      return C.valueGetter(w, m, C, e);
    }, [
      e
    ]), i = u.useCallback((m, C) => {
      const y = a(m, C);
      return !C || !C.valueFormatter ? y : C.valueFormatter(y, m, C, e);
    }, [
      e,
      a
    ]), d = u.useCallback((m) => e.current.rootElementRef.current ? iv(e.current.rootElementRef.current, m) : null, [
      e
    ]), c = u.useCallback((m) => e.current.rootElementRef.current ? av(e.current.rootElementRef.current, m) : null, [
      e
    ]), p = u.useCallback((m, C) => e.current.rootElementRef.current ? cv(e.current.rootElementRef.current, {
      id: m,
      field: C
    }) : null, [
      e
    ]), h = {
      getCellValue: s,
      getCellParams: l,
      getCellElement: p,
      getRowValue: a,
      getRowFormattedValue: i,
      getRowParams: o,
      getRowElement: c,
      getColumnHeaderParams: n,
      getColumnHeaderElement: d
    }, g = {
      getCellParamsForRow: r
    };
    Me(e, h, "public"), Me(e, g, "private");
  }
  const Qu = (e, t) => e == null || Array.isArray(e) ? e : t && t[0] === e ? t : [
    e
  ], n0 = (e, t) => b({}, e, {
    rowSelection: t.rowSelection ? Qu(t.rowSelectionModel) ?? [] : []
  }), o0 = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const n = wt(e, "useGridSelection"), o = u.useCallback((L) => (...A) => {
      t.rowSelection && L(...A);
    }, [
      t.rowSelection
    ]), r = t.signature !== nn.DataGrid && (((_a2 = t.rowSelectionPropagation) == null ? void 0 : _a2.parents) || ((_b2 = t.rowSelectionPropagation) == null ? void 0 : _b2.descendants)), l = u.useMemo(() => Qu(t.rowSelectionModel, _t(e.current.state)), [
      e,
      t.rowSelectionModel
    ]), s = u.useRef(null);
    e.current.registerControlState({
      stateId: "rowSelection",
      propModel: l,
      propOnChange: t.onRowSelectionModelChange,
      stateSelector: _t,
      changeEvent: "rowSelectionChange"
    });
    const { checkboxSelection: a, disableRowSelectionOnClick: i, isRowSelectable: d } = t, c = Bs(t), p = Q(e, pt), h = Q(e, no) > 1, g = u.useCallback((L) => {
      let A = L;
      const G = s.current ?? L, j = e.current.isRowSelected(L);
      if (j) {
        const V = yo(e), U = V.findIndex((K) => K === G), W = V.findIndex((K) => K === A);
        if (U === W) return;
        U > W ? A = V[W + 1] : A = V[W - 1];
      }
      s.current = L, e.current.selectRowRange({
        startId: G,
        endId: A
      }, !j);
    }, [
      e
    ]), m = u.useCallback((L) => {
      if (t.signature === nn.DataGrid && !c && Array.isArray(L) && L.length > 1) throw new Error([
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
      c
    ]), C = u.useCallback((L) => _t(e.current.state).includes(L), [
      e
    ]), y = u.useCallback((L) => {
      if (t.rowSelection === false || d && !d(e.current.getRowParams(L))) return false;
      const A = pt(e)[L];
      return !((A == null ? void 0 : A.type) === "footer" || (A == null ? void 0 : A.type) === "pinnedRow");
    }, [
      e,
      t.rowSelection,
      d
    ]), w = u.useCallback(() => Qb(e), [
      e
    ]), x = u.useCallback((L, A = true, G = false) => {
      var _a3, _b3, _c3, _d3, _e2, _f3;
      if (e.current.isRowSelectable(L)) if (s.current = L, G) {
        n.debug(`Setting selection for row ${L}`);
        const j = [], V = (U) => {
          j.push(U);
        };
        A && (V(L), r && qo(e, p, L, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, V)), e.current.setRowSelectionModel(j);
      } else {
        n.debug(`Toggling selection for row ${L}`);
        const j = _t(e.current.state), V = new Set(j);
        V.delete(L);
        const U = (B) => {
          V.add(B);
        }, W = (B) => {
          V.delete(B);
        };
        A ? (U(L), r && qo(e, p, L, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, U)) : r && oa(e, p, L, ((_e2 = t.rowSelectionPropagation) == null ? void 0 : _e2.descendants) ?? false, ((_f3 = t.rowSelectionPropagation) == null ? void 0 : _f3.parents) ?? false, W), (V.size < 2 || c) && e.current.setRowSelectionModel(Array.from(V));
      }
    }, [
      e,
      n,
      r,
      p,
      (_c2 = t.rowSelectionPropagation) == null ? void 0 : _c2.descendants,
      (_d2 = t.rowSelectionPropagation) == null ? void 0 : _d2.parents,
      c
    ]), E = u.useCallback((L, A = true, G = false) => {
      n.debug("Setting selection for several rows");
      const j = L.filter((W) => e.current.isRowSelectable(W));
      let V;
      if (G) {
        if (A) {
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
        const W = Gn(e);
        if (V.size === Object.keys(W).length && Array.from(V).every((K) => W[K] === K)) return;
      } else {
        V = new Set(Object.values(Gn(e)));
        const W = (B) => {
          V.add(B);
        }, K = (B) => {
          V.delete(B);
        };
        j.forEach((B) => {
          var _a3, _b3, _c3, _d3;
          A ? (V.add(B), r && qo(e, p, B, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, W)) : (K(B), r && oa(e, p, B, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, K));
        });
      }
      (V.size < 2 || c) && e.current.setRowSelectionModel(Array.from(V));
    }, [
      n,
      r,
      c,
      e,
      p,
      (_e = t.rowSelectionPropagation) == null ? void 0 : _e.descendants,
      (_f2 = t.rowSelectionPropagation) == null ? void 0 : _f2.parents
    ]), H = u.useCallback((L) => {
      var _a3, _b3;
      if (!h || !r || L.length === 0) return L;
      const A = new Set(L), G = (j) => {
        A.add(j);
      };
      for (const j of L) qo(e, p, j, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, G, A);
      return Array.from(A);
    }, [
      e,
      p,
      (_g2 = t.rowSelectionPropagation) == null ? void 0 : _g2.descendants,
      (_h2 = t.rowSelectionPropagation) == null ? void 0 : _h2.parents,
      h,
      r
    ]), M = u.useCallback(({ startId: L, endId: A }, G = true, j = false) => {
      if (!e.current.getRow(L) || !e.current.getRow(A)) return;
      n.debug(`Expanding selection from row ${L} to row ${A}`);
      const V = yo(e), U = V.indexOf(L), W = V.indexOf(A), [K, B] = U > W ? [
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
    ]), $ = {
      selectRow: x,
      setRowSelectionModel: m,
      getSelectedRows: w,
      isRowSelected: C,
      isRowSelectable: y
    }, z = {
      selectRows: E,
      selectRowRange: M,
      getPropagatedRowSelectionModel: H
    };
    Me(e, $, "public"), Me(e, z, t.signature === nn.DataGrid ? "private" : "public");
    const D = u.useRef(true), S = u.useCallback((L = false) => {
      var _a3;
      if (D.current) return;
      const A = _t(e.current.state), G = Jt(e), j = jo(e), V = b({}, Gn(e)), U = (B) => t.filterMode === "server" ? !G[B] : !G[B] || j[B] === false;
      let W = false;
      A.forEach((B) => {
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
    ]), v = u.useCallback((L, A) => {
      const G = A.metaKey || A.ctrlKey, j = !a && !G && !ay(A), V = !c || j, U = e.current.isRowSelected(L);
      V ? e.current.selectRow(L, j ? true : !U, true) : e.current.selectRow(L, !U, false);
    }, [
      e,
      c,
      a
    ]), k = u.useCallback((L, A) => {
      var _a3, _b3;
      if (i) return;
      const G = (_a3 = A.target.closest(`.${P.cell}`)) == null ? void 0 : _a3.getAttribute("data-field");
      G === Ao.field || G === ml || G && ((_b3 = e.current.getColumn(G)) == null ? void 0 : _b3.type) === gl || pt(e)[L.id].type === "pinnedRow" || (A.shiftKey && c ? g(L.id) : v(L.id, A));
    }, [
      i,
      c,
      e,
      g,
      v
    ]), O = u.useCallback((L, A) => {
      var _a3;
      c && A.shiftKey && ((_a3 = window.getSelection()) == null ? void 0 : _a3.removeAllRanges());
    }, [
      c
    ]), R = u.useCallback((L, A) => {
      c && A.nativeEvent.shiftKey ? g(L.id) : e.current.selectRow(L.id, L.value, !c);
    }, [
      e,
      g,
      c
    ]), _ = u.useCallback((L) => {
      const A = t.pagination && t.checkboxSelectionVisibleOnly && t.paginationMode === "client" ? gu(e) : yo(e);
      e.current.selectRows(A, L.value);
    }, [
      e,
      t.checkboxSelectionVisibleOnly,
      t.pagination,
      t.paginationMode
    ]), F = u.useCallback((L, A) => {
      if (e.current.getCellMode(L.id, L.field) !== Xe.Edit && !Mr(A)) {
        if (il(A.key) && A.shiftKey) {
          const G = Rt(e);
          if (G && G.id !== L.id) {
            A.preventDefault();
            const j = e.current.isRowSelected(G.id);
            if (!c) {
              e.current.selectRow(G.id, !j, true);
              return;
            }
            const V = e.current.getRowIndexRelativeToVisibleRows(G.id), U = e.current.getRowIndexRelativeToVisibleRows(L.id);
            let W, K;
            V > U ? j ? (W = U, K = V - 1) : (W = U, K = V) : j ? (W = V + 1, K = U) : (W = V, K = U);
            const te = _n(e).rows.slice(W, K + 1).map((J) => J.id);
            e.current.selectRows(te, !j);
            return;
          }
        }
        if (A.key === " " && A.shiftKey) {
          A.preventDefault(), v(L.id, A);
          return;
        }
        String.fromCharCode(A.keyCode) === "A" && (A.ctrlKey || A.metaKey) && (A.preventDefault(), E(e.current.getAllRowIds(), true));
      }
    }, [
      e,
      v,
      E,
      c
    ]), I = Ke(() => {
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
      if (L.length !== l.length || !L.every((A) => l.includes(A))) {
        e.current.setRowSelectionModel(L);
        return;
      }
      e.current.setRowSelectionModel(l);
    });
    oe(e, "sortedRowsSet", o(() => S(true))), oe(e, "filteredRowsSet", o(() => S())), oe(e, "rowClick", o(k)), oe(e, "rowSelectionCheckboxChange", o(R)), oe(e, "headerSelectionCheckboxChange", _), oe(e, "cellMouseDown", o(O)), oe(e, "cellKeyDown", o(F)), u.useEffect(() => {
      I();
    }, [
      e,
      l,
      t.rowSelection,
      I
    ]);
    const T = l != null;
    u.useEffect(() => {
      if (T || !t.rowSelection) return;
      const L = _t(e.current.state);
      if (y) {
        const A = L.filter((G) => y(G));
        A.length < L.length && e.current.setRowSelectionModel(A);
      }
    }, [
      e,
      y,
      T,
      t.rowSelection
    ]), u.useEffect(() => {
      if (!t.rowSelection || T) return;
      const L = _t(e.current.state);
      !c && L.length > 1 && e.current.setRowSelectionModel([]);
    }, [
      e,
      c,
      a,
      T,
      t.rowSelection
    ]), u.useEffect(() => {
      o(S);
    }, [
      S,
      o
    ]), u.useEffect(() => {
      D.current && (D.current = false);
    }, []);
  }, r0 = (e) => {
    const { classes: t } = e;
    return u.useMemo(() => me({
      cellCheckbox: [
        "cellCheckbox"
      ],
      columnHeaderCheckbox: [
        "columnHeaderCheckbox"
      ]
    }, $e, t), [
      t
    ]);
  }, l0 = (e, t) => {
    const n = {
      classes: t.classes
    }, o = r0(n), r = u.useCallback((l) => {
      const s = b({}, Ao, {
        cellClassName: o.cellCheckbox,
        headerClassName: o.columnHeaderCheckbox,
        headerName: e.current.getLocaleText("checkboxSelectionHeaderName")
      }), a = t.checkboxSelection, i = l.lookup[Ut] != null;
      return a && !i ? (l.lookup[Ut] = s, l.orderedFields = [
        Ut,
        ...l.orderedFields
      ]) : !a && i ? (delete l.lookup[Ut], l.orderedFields = l.orderedFields.filter((d) => d !== Ut)) : a && i && (l.lookup[Ut] = b({}, s, l.lookup[Ut]), t.columns.some((d) => d.field === Ut) || (l.orderedFields = [
        Ut,
        ...l.orderedFields.filter((d) => d !== Ut)
      ])), l;
    }, [
      e,
      o,
      t.columns,
      t.checkboxSelection
    ]);
    ot(e, "hydrateColumns", r);
  }, s0 = (e, t) => {
    var _a2, _b2;
    const n = t.sortModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel) ?? [];
    return b({}, e, {
      sorting: {
        sortModel: $c(n, t.disableMultipleColumnsSorting),
        sortedRows: []
      }
    });
  }, i0 = (e, t) => {
    var _a2, _b2;
    const n = wt(e, "useGridSorting");
    e.current.registerControlState({
      stateId: "sortModel",
      propModel: t.sortModel,
      propOnChange: t.onSortModelChange,
      stateSelector: un,
      changeEvent: "sortModelChange"
    });
    const o = u.useCallback((M, $) => {
      const z = un(e), D = z.findIndex((v) => v.field === M);
      let S = [
        ...z
      ];
      return D > -1 ? ($ == null ? void 0 : $.sort) == null ? S.splice(D, 1) : S.splice(D, 1, $) : S = [
        ...z,
        $
      ], S;
    }, [
      e
    ]), r = u.useCallback((M, $) => {
      const D = un(e).find((S) => S.field === M.field);
      if (D) {
        const S = $ === void 0 ? Ki(M.sortingOrder ?? t.sortingOrder, D.sort) : $;
        return S === void 0 ? void 0 : b({}, D, {
          sort: S
        });
      }
      return {
        field: M.field,
        sort: $ === void 0 ? Ki(M.sortingOrder ?? t.sortingOrder) : $
      };
    }, [
      e,
      t.sortingOrder
    ]), l = u.useCallback((M, $) => $ == null || $.sortable === false || t.disableColumnSorting ? M : ($.sortingOrder || t.sortingOrder).some((D) => !!D) ? [
      ...M,
      "columnMenuSortItem"
    ] : M, [
      t.sortingOrder,
      t.disableColumnSorting
    ]), s = u.useCallback(() => {
      e.current.setState((M) => {
        if (t.sortingMode === "server") return n.debug("Skipping sorting rows as sortingMode = server"), b({}, M, {
          sorting: b({}, M.sorting, {
            sortedRows: Gs(pt(e), Pt, false)
          })
        });
        const $ = un(M, e.current.instanceId), z = Qm($, e), D = e.current.applyStrategyProcessor("sorting", {
          sortRowList: z
        });
        return b({}, M, {
          sorting: b({}, M.sorting, {
            sortedRows: D
          })
        });
      }), e.current.publishEvent("sortedRowsSet"), e.current.forceUpdate();
    }, [
      e,
      n,
      t.sortingMode
    ]), a = u.useCallback((M) => {
      un(e) !== M && (n.debug("Setting sort model"), e.current.setState(Ui(M, t.disableMultipleColumnsSorting)), e.current.forceUpdate(), e.current.applySorting());
    }, [
      e,
      n,
      t.disableMultipleColumnsSorting
    ]), i = u.useCallback((M, $, z) => {
      const D = e.current.getColumn(M), S = r(D, $);
      let v;
      !z || t.disableMultipleColumnsSorting ? v = (S == null ? void 0 : S.sort) == null ? [] : [
        S
      ] : v = o(D.field, S), e.current.setSortModel(v);
    }, [
      e,
      o,
      r,
      t.disableMultipleColumnsSorting
    ]), d = u.useCallback(() => un(e), [
      e
    ]), c = u.useCallback(() => _s(e).map(($) => $.model), [
      e
    ]), p = u.useCallback(() => Lo(e), [
      e
    ]), h = u.useCallback((M) => e.current.getSortedRowIds()[M], [
      e
    ]);
    Me(e, {
      getSortModel: d,
      getSortedRows: c,
      getSortedRowIds: p,
      getRowIdFromRowIndex: h,
      setSortModel: a,
      sortColumn: i,
      applySorting: s
    }, "public");
    const m = u.useCallback((M, $) => {
      var _a3, _b3;
      const z = un(e);
      return !$.exportOnlyDirtyModels || t.sortModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.sorting) == null ? void 0 : _b3.sortModel) != null || z.length > 0 ? b({}, M, {
        sorting: {
          sortModel: z
        }
      }) : M;
    }, [
      e,
      t.sortModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel
    ]), C = u.useCallback((M, $) => {
      var _a3;
      const z = (_a3 = $.stateToRestore.sorting) == null ? void 0 : _a3.sortModel;
      return z == null ? M : (e.current.setState(Ui(z, t.disableMultipleColumnsSorting)), b({}, M, {
        callbacks: [
          ...M.callbacks,
          e.current.applySorting
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsSorting
    ]), y = u.useCallback((M) => {
      const $ = pt(e), z = $[Pt], D = M.sortRowList ? M.sortRowList(z.children.map((S) => $[S])) : [
        ...z.children
      ];
      return z.footerId != null && D.push(z.footerId), D;
    }, [
      e
    ]);
    ot(e, "exportState", m), ot(e, "restoreState", C), ul(e, eo, "sorting", y);
    const w = u.useCallback(({ field: M, colDef: $ }, z) => {
      if (!$.sortable || t.disableColumnSorting) return;
      const D = z.shiftKey || z.metaKey || z.ctrlKey;
      i(M, void 0, D);
    }, [
      i,
      t.disableColumnSorting
    ]), x = u.useCallback(({ field: M, colDef: $ }, z) => {
      !$.sortable || t.disableColumnSorting || z.key === "Enter" && !z.ctrlKey && !z.metaKey && i(M, void 0, z.shiftKey);
    }, [
      i,
      t.disableColumnSorting
    ]), E = u.useCallback(() => {
      const M = un(e), $ = On(e);
      if (M.length > 0) {
        const z = M.filter((D) => $[D.field]);
        z.length < M.length && e.current.setSortModel(z);
      }
    }, [
      e
    ]), H = u.useCallback((M) => {
      M === "sorting" && e.current.applySorting();
    }, [
      e
    ]);
    ot(e, "columnMenu", l), oe(e, "columnHeaderClick", w), oe(e, "columnHeaderKeyDown", x), oe(e, "rowsSet", e.current.applySorting), oe(e, "columnsChange", E), oe(e, "activeStrategyProcessorChange", H), xr(() => {
      e.current.applySorting();
    }), St(() => {
      t.sortModel !== void 0 && e.current.setSortModel(t.sortModel);
    }, [
      e,
      t.sortModel
    ]);
  };
  function La(e) {
    const { containerSize: t, scrollPosition: n, elementSize: o, elementOffset: r } = e, l = r + o;
    if (o > t) return r;
    if (l - t > n) return l - t;
    if (r < n) return r;
  }
  const a0 = (e, t) => {
    const n = At(), o = wt(e, "useGridScroll"), r = e.current.columnHeadersContainerRef, l = e.current.virtualScrollerRef, s = Q(e, Wn), a = u.useCallback((p) => {
      var _a2;
      const h = mt(e.current.state), g = wr(e), m = t.unstable_listView ? [
        Oo(e.current.state)
      ] : st(e);
      if (!(p.rowIndex == null) && g === 0 || m.length === 0) return false;
      o.debug(`Scrolling to cell at row ${p.rowIndex}, col: ${p.colIndex} `);
      let y = {};
      if (p.colIndex !== void 0) {
        const w = Bn(e);
        let x;
        if (typeof p.rowIndex < "u") {
          const E = (_a2 = s[p.rowIndex]) == null ? void 0 : _a2.id, H = e.current.unstable_getCellColSpanInfo(E, p.colIndex);
          H && !H.spannedByColSpan && (x = H.cellProps.width);
        }
        typeof x > "u" && (x = m[p.colIndex].computedWidth), y.left = La({
          containerSize: h.viewportOuterSize.width,
          scrollPosition: Math.abs(l.current.scrollLeft),
          elementSize: x,
          elementOffset: w[p.colIndex]
        });
      }
      if (p.rowIndex !== void 0) {
        const w = zo(e.current.state), x = fC(e), E = pu(e), H = t.pagination ? p.rowIndex - x * E : p.rowIndex, M = w.positions[H + 1] ? w.positions[H + 1] - w.positions[H] : w.currentPageTotalHeight - w.positions[H];
        y.top = La({
          containerSize: h.viewportInnerSize.height,
          scrollPosition: l.current.scrollTop,
          elementSize: M,
          elementOffset: w.positions[H]
        });
      }
      return y = e.current.unstable_applyPipeProcessors("scrollToIndexes", y, p), typeof y.left !== void 0 || typeof y.top !== void 0 ? (e.current.scroll(y), true) : false;
    }, [
      o,
      e,
      l,
      t.pagination,
      s,
      t.unstable_listView
    ]), i = u.useCallback((p) => {
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
    ]), d = u.useCallback(() => (l == null ? void 0 : l.current) ? {
      top: l.current.scrollTop,
      left: l.current.scrollLeft
    } : {
      top: 0,
      left: 0
    }, [
      l
    ]);
    Me(e, {
      scroll: i,
      scrollToIndexes: a,
      getScrollPosition: d
    }, "public");
  };
  function c0(e, t) {
    Qe(e, "columnHeaderClick", t.onColumnHeaderClick), Qe(e, "columnHeaderContextMenu", t.onColumnHeaderContextMenu), Qe(e, "columnHeaderDoubleClick", t.onColumnHeaderDoubleClick), Qe(e, "columnHeaderOver", t.onColumnHeaderOver), Qe(e, "columnHeaderOut", t.onColumnHeaderOut), Qe(e, "columnHeaderEnter", t.onColumnHeaderEnter), Qe(e, "columnHeaderLeave", t.onColumnHeaderLeave), Qe(e, "cellClick", t.onCellClick), Qe(e, "cellDoubleClick", t.onCellDoubleClick), Qe(e, "cellKeyDown", t.onCellKeyDown), Qe(e, "preferencePanelClose", t.onPreferencePanelClose), Qe(e, "preferencePanelOpen", t.onPreferencePanelOpen), Qe(e, "menuOpen", t.onMenuOpen), Qe(e, "menuClose", t.onMenuClose), Qe(e, "rowDoubleClick", t.onRowDoubleClick), Qe(e, "rowClick", t.onRowClick), Qe(e, "stateChange", t.onStateChange);
  }
  function u0(e, t = 166) {
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
  const hs = {
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
  }, d0 = {
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
  }, p0 = (e, t, n) => {
    const o = d0, r = Do(n);
    return b({}, e, {
      dimensions: b({}, o, Zu(t, n, r, Ho(n)))
    });
  }, Ju = be(st, Bn, (e, t) => {
    const n = e.length;
    return n === 0 ? 0 : bo(t[n - 1] + e[n - 1].computedWidth, 1);
  });
  function f0(e, t) {
    const n = wt(e, "useResizeContainer"), o = u.useRef(false), r = u.useRef(fo), l = Q(e, Ho), s = Q(e, Do), a = Q(e, Ju), i = u.useRef(true), { rowHeight: d, headerHeight: c, groupHeaderHeight: p, headerFilterHeight: h, headersTotalHeight: g, leftPinnedWidth: m, rightPinnedWidth: C } = Zu(t, e, s, l), y = u.useRef(void 0), w = u.useCallback(() => mt(e.current.state), [
      e
    ]), x = u.useCallback((O) => {
      e.current.setState((R) => b({}, R, {
        dimensions: O
      })), e.current.rootElementRef.current && ja(e.current.rootElementRef.current, mt(e.current.state));
    }, [
      e
    ]), E = u.useCallback(() => {
      const O = e.current.mainElementRef.current;
      if (!O) return;
      const R = Sd(O).getComputedStyle(O), _ = {
        width: parseFloat(R.width) || 0,
        height: parseFloat(R.height) || 0
      };
      (!y.current || !za(y.current, _)) && (e.current.publishEvent("resize", _), y.current = _);
    }, [
      e
    ]), H = u.useCallback(() => {
      const O = mt(e.current.state);
      if (!O.isReady) return 0;
      const R = _n(e);
      if (t.getRowHeight) {
        const F = Pr(e), I = F.lastRowIndex - F.firstRowIndex;
        return Math.min(I - 1, R.rows.length);
      }
      const _ = Math.floor(O.viewportInnerSize.height / d);
      return Math.min(_, R.rows.length);
    }, [
      e,
      t.getRowHeight,
      d
    ]), M = u.useCallback(() => {
      var _a2, _b2;
      if (i.current) return;
      const O = g0(e.current.mainElementRef.current, t.scrollbarSize), R = zo(e.current.state), _ = g + R.pinnedTopRowsTotalHeight, F = R.pinnedBottomRowsTotalHeight, T = {
        width: a - m - C,
        height: bo(R.currentPageTotalHeight, 1)
      };
      let L, A, G = false, j = false;
      if (t.autoHeight) j = false, G = Math.round(a) > Math.round(r.current.width), L = {
        width: r.current.width,
        height: _ + F + T.height
      }, A = {
        width: Math.max(0, L.width - (j ? O : 0)),
        height: Math.max(0, L.height - (G ? O : 0))
      };
      else {
        L = {
          width: r.current.width,
          height: r.current.height
        }, A = {
          width: Math.max(0, L.width - m - C),
          height: Math.max(0, L.height - _ - F)
        };
        const B = T, te = A, J = B.width > te.width, ne = B.height > te.height;
        (J || ne) && (j = ne, G = B.width + (j ? O : 0) > te.width, G && (j = B.height + O > te.height)), j && (A.width -= O), G && (A.height -= O);
      }
      const V = Math.max(L.width, a + (j ? O : 0)), U = {
        width: a,
        height: _ + T.height + F
      }, W = {
        isReady: true,
        root: r.current,
        viewportOuterSize: L,
        viewportInnerSize: A,
        contentSize: T,
        minimumSize: U,
        hasScrollX: G,
        hasScrollY: j,
        scrollbarSize: O,
        headerHeight: c,
        groupHeaderHeight: p,
        headerFilterHeight: h,
        rowWidth: V,
        rowHeight: d,
        columnsTotalWidth: a,
        leftPinnedWidth: m,
        rightPinnedWidth: C,
        headersTotalHeight: g,
        topContainerHeight: _,
        bottomContainerHeight: F
      }, K = e.current.state.dimensions;
      zn(K, W) || (x(W), za(W.viewportInnerSize, K.viewportInnerSize) || e.current.publishEvent("viewportInnerSizeChange", W.viewportInnerSize), (_b2 = (_a2 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a2));
    }, [
      e,
      x,
      t.scrollbarSize,
      t.autoHeight,
      d,
      c,
      p,
      h,
      a,
      g,
      m,
      C
    ]), $ = Ke(M), z = u.useMemo(() => t.resizeThrottleMs > 0 ? u0(() => {
      $(), e.current.publishEvent("debouncedResize", r.current);
    }, t.resizeThrottleMs) : void 0, [
      e,
      t.resizeThrottleMs,
      $
    ]);
    u.useEffect(() => z == null ? void 0 : z.clear, [
      z
    ]);
    const D = {
      resize: E,
      getRootDimensions: w
    }, S = {
      updateDimensions: M,
      getViewportPageSize: H
    };
    St(M, [
      M
    ]), Me(e, D, "public"), Me(e, S, "private");
    const v = u.useCallback((O) => {
      ja(O, mt(e.current.state));
    }, [
      e
    ]), k = u.useCallback((O) => {
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
`)), o.current = true), i.current || !z) {
        i.current = false, M();
        return;
      }
      z();
    }, [
      M,
      t.autoHeight,
      z,
      n
    ]);
    Qe(e, "rootMount", v), Qe(e, "resize", k), Qe(e, "debouncedResize", t.onResize);
  }
  function ja(e, t) {
    const n = (o, r) => e.style.setProperty(o, r);
    n("--DataGrid-hasScrollX", `${Number(t.hasScrollX)}`), n("--DataGrid-hasScrollY", `${Number(t.hasScrollY)}`), n("--DataGrid-scrollbarSize", `${t.scrollbarSize}px`), n("--DataGrid-rowWidth", `${t.rowWidth}px`), n("--DataGrid-columnsTotalWidth", `${t.columnsTotalWidth}px`), n("--DataGrid-leftPinnedWidth", `${t.leftPinnedWidth}px`), n("--DataGrid-rightPinnedWidth", `${t.rightPinnedWidth}px`), n("--DataGrid-headerHeight", `${t.headerHeight}px`), n("--DataGrid-headersTotalHeight", `${t.headersTotalHeight}px`), n("--DataGrid-topContainerHeight", `${t.topContainerHeight}px`), n("--DataGrid-bottomContainerHeight", `${t.bottomContainerHeight}px`), n("--height", `${t.rowHeight}px`);
  }
  function Zu(e, t, n, o) {
    const r = Qc(e.rowHeight, hs.rowHeight);
    return {
      rowHeight: Math.floor(r * n),
      headerHeight: Math.floor(e.columnHeaderHeight * n),
      groupHeaderHeight: Math.floor((e.columnGroupHeaderHeight ?? e.columnHeaderHeight) * n),
      headerFilterHeight: Math.floor((e.headerFilterHeight ?? e.columnHeaderHeight) * n),
      columnsTotalWidth: Ju(t),
      headersTotalHeight: vl(t, e),
      leftPinnedWidth: o.left.reduce((l, s) => l + s.computedWidth, 0),
      rightPinnedWidth: o.right.reduce((l, s) => l + s.computedWidth, 0)
    };
  }
  const Aa = /* @__PURE__ */ new WeakMap();
  function g0(e, t) {
    if (t !== void 0) return t;
    if (e === null) return 0;
    const n = Aa.get(e);
    if (n !== void 0) return n;
    const r = en(e).createElement("div");
    r.style.width = "99px", r.style.height = "99px", r.style.position = "absolute", r.style.overflow = "scroll", r.className = "scrollDiv", e.appendChild(r);
    const l = r.offsetWidth - r.clientWidth;
    return e.removeChild(r), Aa.set(e, l), l;
  }
  function za(e, t) {
    return e.width === t.width && e.height === t.height;
  }
  const h0 = typeof globalThis.ResizeObserver < "u" ? globalThis.ResizeObserver : class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }, m0 = (e, t, n) => {
    n.current.caches.rowsMeta = {
      heights: /* @__PURE__ */ new Map()
    };
    const o = Hs(n.current.state), r = wr(n), l = vr(n.current.state), s = Math.min(l.enabled ? l.paginationModel.pageSize : r, r);
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
  }, b0 = (e, t) => {
    const { getRowHeight: n, getRowSpacing: o, getEstimatedRowHeight: r } = t, l = e.current.caches.rowsMeta.heights, s = u.useRef(-1), a = u.useRef(false), i = u.useRef(false), d = Q(e, Do), c = Ys(e), p = Q(e, Ro), h = Q(e, Hs), g = (v) => {
      let k = l.get(v);
      return k === void 0 && (k = {
        content: h,
        spacingTop: 0,
        spacingBottom: 0,
        detail: 0,
        autoHeight: false,
        needsFirstMeasurement: true
      }, l.set(v, k)), k;
    }, m = u.useCallback((v) => {
      const k = mt(e.current.state).rowHeight, O = e.current.getRowHeightEntry(v.id);
      if (!n) O.content = k, O.needsFirstMeasurement = false;
      else {
        const R = n(b({}, v, {
          densityFactor: d
        }));
        if (R === "auto") {
          if (O.needsFirstMeasurement) {
            const _ = r ? r(b({}, v, {
              densityFactor: d
            })) : k;
            O.content = _ ?? k;
          }
          a.current = true, O.autoHeight = true;
        } else O.content = Qc(R, k), O.needsFirstMeasurement = false, O.autoHeight = false;
      }
      if (o) {
        const R = e.current.getRowIndexRelativeToVisibleRows(v.id), _ = o(b({}, v, {
          isFirstVisible: R === 0,
          isLastVisible: R === c.rows.length - 1,
          indexRelativeToCurrentPage: R
        }));
        O.spacingTop = _.top ?? 0, O.spacingBottom = _.bottom ?? 0;
      } else O.spacingTop = 0, O.spacingBottom = 0;
      return e.current.unstable_applyPipeProcessors("rowHeight", O, v), O;
    }, [
      e,
      c.rows,
      n,
      r,
      h,
      o,
      d
    ]), C = u.useCallback(() => {
      a.current = false;
      const v = p.top.reduce((I, T) => {
        const L = m(T);
        return I + L.content + L.spacingTop + L.spacingBottom + L.detail;
      }, 0), k = p.bottom.reduce((I, T) => {
        const L = m(T);
        return I + L.content + L.spacingTop + L.spacingBottom + L.detail;
      }, 0), O = [], R = c.rows.reduce((I, T) => {
        O.push(I);
        const L = m(T), A = L.content + L.spacingTop + L.spacingBottom + L.detail;
        return I + A;
      }, 0);
      a.current || (s.current = 1 / 0);
      const _ = v !== e.current.state.rowsMeta.pinnedTopRowsTotalHeight || k !== e.current.state.rowsMeta.pinnedBottomRowsTotalHeight || R !== e.current.state.rowsMeta.currentPageTotalHeight, F = {
        currentPageTotalHeight: R,
        positions: O,
        pinnedTopRowsTotalHeight: v,
        pinnedBottomRowsTotalHeight: k
      };
      e.current.setState((I) => b({}, I, {
        rowsMeta: F
      })), _ && e.current.updateDimensions(), i.current = true;
    }, [
      e,
      p,
      c.rows,
      m
    ]), y = (v) => {
      var _a2;
      return ((_a2 = l.get(v)) == null ? void 0 : _a2.content) ?? h;
    }, w = (v, k) => {
      const O = e.current.getRowHeightEntry(v), R = O.content !== k;
      O.needsFirstMeasurement = false, O.content = k, i.current &&= !R;
    }, x = (v) => {
      var _a2;
      return ((_a2 = l.get(v)) == null ? void 0 : _a2.autoHeight) ?? false;
    }, E = () => s.current, H = (v) => {
      a.current && v > s.current && (s.current = v);
    }, M = () => {
      l.clear(), C();
    }, $ = Sn(() => new h0((v) => {
      var _a2;
      for (let k = 0; k < v.length; k += 1) {
        const O = v[k], R = O.borderBoxSize && O.borderBoxSize.length > 0 ? O.borderBoxSize[0].blockSize : O.contentRect.height, _ = O.target.__mui_id;
        if (((_a2 = Fu(e)) == null ? void 0 : _a2.id) === _ && R === 0) return;
        e.current.unstable_storeRowHeightMeasurement(_, R);
      }
      i.current || requestAnimationFrame(() => {
        e.current.requestPipeProcessorsApplication("rowHeight");
      });
    })).current, z = (v, k) => (v.__mui_id = k, $.observe(v), () => $.unobserve(v));
    oi(e, "rowHeight", C), St(() => {
      C();
    }, [
      C
    ]);
    const D = {
      unstable_getRowHeight: y,
      unstable_setLastMeasuredRowIndex: H,
      unstable_storeRowHeightMeasurement: w,
      resetRowHeights: M
    }, S = {
      hydrateRowsMeta: C,
      observeRowHeight: z,
      rowHasAutoHeight: x,
      getRowHeightEntry: g,
      getLastMeasuredRowIndex: E
    };
    Me(e, D, "public"), Me(e, S, "private");
  }, C0 = (e) => {
    const t = u.useCallback((r = {}) => e.current.unstable_applyPipeProcessors("exportState", {}, r), [
      e
    ]), n = u.useCallback((r) => {
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
    Me(e, {
      exportState: t,
      restoreState: n
    }, "public");
  }, w0 = (e) => {
    const t = u.useRef({}), n = (a, i) => {
      var _a2;
      return (_a2 = t.current[a]) == null ? void 0 : _a2[i];
    }, o = () => {
      t.current = {};
    }, r = u.useCallback(({ rowId: a, minFirstColumn: i, maxLastColumn: d, columns: c }) => {
      for (let p = i; p < d; p += 1) {
        const h = x0({
          apiRef: e,
          lookup: t.current,
          columnIndex: p,
          rowId: a,
          minFirstColumnIndex: i,
          maxLastColumnIndex: d,
          columns: c
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
    Me(e, l, "public"), Me(e, s, "private"), oe(e, "columnOrderChange", o);
  };
  function x0(e) {
    const { apiRef: t, lookup: n, columnIndex: o, rowId: r, minFirstColumnIndex: l, maxLastColumnIndex: s, columns: a } = e, i = a.length, d = a[o], c = t.current.getRow(r), p = t.current.getRowValue(c, d), h = typeof d.colSpan == "function" ? d.colSpan(p, c, d, t) : d.colSpan;
    if (!h || h === 1) return Bl(n, r, o, {
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
      const C = o + m;
      if (C >= l && C < s) {
        const y = a[C];
        g += y.computedWidth, Bl(n, r, o + m, {
          spannedByColSpan: true,
          rightVisibleCellIndex: Math.min(o + h, i - 1),
          leftVisibleCellIndex: o
        });
      }
      Bl(n, r, o, {
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
  function Bl(e, t, n, o) {
    e[t] || (e[t] = {}), e[t][n] = o;
  }
  const ed = (e, t, n) => {
    if (zc(e)) {
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
      ed(l, [
        ...t,
        o
      ], n);
    });
  }, ms = (e) => {
    if (!e) return {};
    const t = {};
    return e.forEach((n) => {
      ed(n, [], t);
    }), t;
  }, bs = (e, t, n) => {
    const o = (i) => t[i] ?? [], r = [], l = Math.max(...e.map((i) => o(i).length)), s = (i, d, c) => zn(o(i).slice(0, c + 1), o(d).slice(0, c + 1)), a = (i, d) => !!((n == null ? void 0 : n.left) && n.left.includes(i) && !n.left.includes(d) || (n == null ? void 0 : n.right) && !n.right.includes(i) && n.right.includes(d));
    for (let i = 0; i < l; i += 1) {
      const d = e.reduce((c, p) => {
        const h = o(p)[i] ?? null;
        if (c.length === 0) return [
          {
            columnFields: [
              p
            ],
            groupId: h
          }
        ];
        const g = c[c.length - 1], m = g.columnFields[g.columnFields.length - 1];
        return g.groupId !== h || !s(m, p, i) || a(m, p) ? [
          ...c,
          {
            columnFields: [
              p
            ],
            groupId: h
          }
        ] : [
          ...c.slice(0, c.length - 1),
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
  }, v0 = [
    "groupId",
    "children"
  ], ri = (e) => {
    let t = {};
    return e.forEach((n) => {
      if (zc(n)) return;
      const { groupId: o, children: r } = n, l = ge(n, v0);
      if (!o) throw new Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
      const s = b({}, l, {
        groupId: o
      }), a = ri(r);
      if (a[o] !== void 0 || t[o] !== void 0) throw new Error(`MUI X: The groupId ${o} is used multiple times in the columnGroupingModel.`);
      t = b({}, t, a, {
        [o]: s
      });
    }), b({}, t);
  }, y0 = (e, t, n) => {
    if (!t.columnGroupingModel) return e;
    const o = En(n), r = $o(n), l = ri(t.columnGroupingModel ?? []), s = ms(t.columnGroupingModel ?? []), a = bs(o, s, n.current.state.pinnedColumns ?? {}), i = r.length === 0 ? 0 : Math.max(...r.map((d) => {
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
  }, S0 = (e, t) => {
    const n = u.useCallback((a) => Cu(e)[a] ?? [], [
      e
    ]), o = u.useCallback(() => wu(e), [
      e
    ]);
    Me(e, {
      getColumnGroupPath: n,
      getAllGroupDetails: o
    }, "public");
    const l = u.useCallback(() => {
      const a = ms(t.columnGroupingModel ?? []);
      e.current.setState((i) => {
        var _a2;
        const d = ((_a2 = i.columns) == null ? void 0 : _a2.orderedFields) ?? [], c = i.pinnedColumns ?? {}, p = bs(d, a, c);
        return b({}, i, {
          columnGrouping: b({}, i.columnGrouping, {
            headerStructure: p
          })
        });
      });
    }, [
      e,
      t.columnGroupingModel
    ]), s = u.useCallback((a) => {
      var _a2, _b2;
      const i = ((_b2 = (_a2 = e.current).getPinnedColumns) == null ? void 0 : _b2.call(_a2)) ?? {}, d = En(e), c = $o(e), p = ri(a ?? []), h = ms(a ?? []), g = bs(d, h, i), m = c.length === 0 ? 0 : Math.max(...c.map((C) => {
        var _a3;
        return ((_a3 = h[C]) == null ? void 0 : _a3.length) ?? 0;
      }));
      e.current.setState((C) => b({}, C, {
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
    }), u.useEffect(() => {
      s(t.columnGroupingModel);
    }, [
      s,
      t.columnGroupingModel
    ]);
  };
  function I0() {
    let e, t;
    const n = new Promise((o, r) => {
      e = o, t = r;
    });
    return n.resolve = e, n.reject = t, n;
  }
  function Ga(e, t) {
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
  function _a(e, t, n, o) {
    let r = e;
    return o === "Right" ? r += t - n.left : r += n.right - t, r;
  }
  function P0(e, t, n) {
    return n === "Left" ? e - t.left : t.right - e;
  }
  function M0(e) {
    return e === "Right" ? "Left" : "Right";
  }
  function k0(e, t) {
    const n = e.classList.contains(P["columnSeparator--sideRight"]) ? "Right" : "Left";
    return t ? M0(n) : n;
  }
  function Va(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function E0(e) {
    const t = u.useRef(void 0), n = () => ku(e), o = Q(e, n);
    return u.useEffect(() => {
      t.current && o === false && (t.current.resolve(), t.current = void 0);
    }), () => {
      if (!t.current) {
        if (n() === false) return Promise.resolve();
        t.current = I0();
      }
      return t.current;
    };
  }
  function F0(e, t) {
    if (e.length < 4) return e;
    const n = e.slice();
    n.sort((a, i) => a - i);
    const o = n[Math.floor(n.length * 0.25)], r = n[Math.floor(n.length * 0.75) - 1], l = r - o, s = l < 5 ? 5 : l * t;
    return n.filter((a) => a > o - s && a < r + s);
  }
  function T0(e, t, n) {
    const o = {}, r = e.current.rootElementRef.current;
    return r.classList.add(P.autosizing), n.forEach((l) => {
      const a = xv(e.current, l.field).map((m) => m.getBoundingClientRect().width ?? 0), i = t.includeOutliers ? a : F0(a, t.outliersFactor);
      if (t.includeHeaders) {
        const m = wv(e.current, l.field);
        if (m) {
          const C = m.querySelector(`.${P.columnHeaderTitle}`), y = m.querySelector(`.${P.columnHeaderTitleContainerContent}`), w = m.querySelector(`.${P.iconButtonContainer}`), x = m.querySelector(`.${P.menuIcon}`), E = C ?? y, H = window.getComputedStyle(m, null), M = parseInt(H.paddingLeft, 10) + parseInt(H.paddingRight, 10), z = E.scrollWidth + 1 + M + ((w == null ? void 0 : w.clientWidth) ?? 0) + ((x == null ? void 0 : x.clientWidth) ?? 0);
          i.push(z);
        }
      }
      const d = l.minWidth !== -1 / 0 && l.minWidth !== void 0, c = l.maxWidth !== 1 / 0 && l.maxWidth !== void 0, p = d ? l.minWidth : 0, h = c ? l.maxWidth : 1 / 0, g = i.length === 0 ? 0 : Math.max(...i);
      o[l.field] = Vt(g, p, h);
    }), r.classList.remove(P.autosizing), o;
  }
  const O0 = (e) => b({}, e, {
    columnResize: {
      resizingColumnField: ""
    }
  });
  function D0() {
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
  const R0 = (e, t) => {
    const n = At(), o = wt(e, "useGridColumnResize"), r = Sn(D0).current, l = u.useRef(null), s = u.useRef(null), a = Xt(), i = u.useRef(void 0), d = (S) => {
      var _a2, _b2;
      o.debug(`Updating width to ${S} for col ${r.colDef.field}`);
      const v = r.columnHeaderElement.offsetWidth, k = S - v, O = S - r.initialColWidth;
      if (O > 0) {
        const F = r.initialTotalWidth + O;
        (_b2 = (_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.style.setProperty("--DataGrid-rowWidth", `${F}px`);
      }
      r.colDef.computedWidth = S, r.colDef.width = S, r.colDef.flex = 0, r.columnHeaderElement.style.width = `${S}px`;
      const R = r.headerFilterElement;
      R && (R.style.width = `${S}px`), r.groupHeaderElements.forEach((F) => {
        const I = F;
        let T;
        I.getAttribute("aria-colspan") === "1" ? T = `${S}px` : T = `${I.offsetWidth + k}px`, I.style.width = T;
      }), r.cellElements.forEach((F) => {
        const I = F;
        let T;
        I.getAttribute("aria-colspan") === "1" ? T = `${S}px` : T = `${I.offsetWidth + k}px`, I.style.setProperty("--width", T);
      });
      const _ = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      _ === jn.LEFT && (uo(r.fillerLeft, "width", k), r.leftPinnedCellsAfter.forEach((F) => {
        uo(F, "left", k);
      }), r.leftPinnedHeadersAfter.forEach((F) => {
        uo(F, "left", k);
      })), _ === jn.RIGHT && (uo(r.fillerRight, "width", k), r.rightPinnedCellsBefore.forEach((F) => {
        uo(F, "right", k);
      }), r.rightPinnedHeadersBefore.forEach((F) => {
        uo(F, "right", k);
      }));
    }, c = (S) => {
      if (w(), r.previousMouseClickEvent) {
        const v = r.previousMouseClickEvent, k = v.timeStamp, O = v.clientX, R = v.clientY;
        if (S.timeStamp - k < 300 && S.clientX === O && S.clientY === R) {
          r.previousMouseClickEvent = void 0, e.current.publishEvent("columnResizeStop", null, S);
          return;
        }
      }
      if (r.colDef) {
        e.current.setColumnWidth(r.colDef.field, r.colDef.width), o.debug(`Updating col ${r.colDef.field} with new width: ${r.colDef.width}`);
        const v = xn(e.current.state);
        r.groupHeaderElements.forEach((k) => {
          const O = pv(k), R = k, F = `${O.reduce((I, T) => v.columnVisibilityModel[T] !== false ? I + v.lookup[T].computedWidth : I, 0)}px`;
          R.style.width = F;
        });
      }
      a.start(0, () => {
        e.current.publishEvent("columnResizeStop", null, S);
      });
    }, p = (S, v, k) => {
      var _a2;
      const O = e.current.rootElementRef.current;
      r.initialColWidth = S.computedWidth, r.initialTotalWidth = e.current.getRootDimensions().rowWidth, r.colDef = S, r.columnHeaderElement = dv(e.current.columnHeadersContainerRef.current, S.field);
      const R = O.querySelector(`.${P.headerFilterRow} [data-field="${Dn(S.field)}"]`);
      R && (r.headerFilterElement = R), r.groupHeaderElements = fv((_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current, S.field), r.cellElements = gv(r.columnHeaderElement, e.current), r.fillerLeft = ma(e.current, n ? "filler--pinnedRight" : "filler--pinnedLeft"), r.fillerRight = ma(e.current, n ? "filler--pinnedLeft" : "filler--pinnedRight");
      const _ = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      r.leftPinnedCellsAfter = _ !== jn.LEFT ? [] : hv(e.current, r.columnHeaderElement, n), r.rightPinnedCellsBefore = _ !== jn.RIGHT ? [] : mv(e.current, r.columnHeaderElement, n), r.leftPinnedHeadersAfter = _ !== jn.LEFT ? [] : bv(e.current, r.columnHeaderElement, n), r.rightPinnedHeadersBefore = _ !== jn.RIGHT ? [] : Cv(e.current, r.columnHeaderElement, n), s.current = k0(v, n), l.current = P0(k, r.columnHeaderElement.getBoundingClientRect(), s.current);
    }, h = Ke(c), g = Ke((S) => {
      if (S.buttons === 0) {
        h(S);
        return;
      }
      let v = _a(l.current, S.clientX, r.columnHeaderElement.getBoundingClientRect(), s.current);
      v = Vt(v, r.colDef.minWidth, r.colDef.maxWidth), d(v);
      const k = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: v
      };
      e.current.publishEvent("columnResize", k, S);
    }), m = Ke((S) => {
      Ga(S, i.current) && c(S);
    }), C = Ke((S) => {
      const v = Ga(S, i.current);
      if (!v) return;
      if (S.type === "mousemove" && S.buttons === 0) {
        m(S);
        return;
      }
      let k = _a(l.current, v.x, r.columnHeaderElement.getBoundingClientRect(), s.current);
      k = Vt(k, r.colDef.minWidth, r.colDef.maxWidth), d(k);
      const O = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: k
      };
      e.current.publishEvent("columnResize", O, S);
    }), y = Ke((S) => {
      const v = sl(S.target, P["columnSeparator--resizable"]);
      if (!v) return;
      const k = S.changedTouches[0];
      k != null && (i.current = k.identifier);
      const O = sl(S.target, P.columnHeader), R = uv(O), _ = e.current.getColumn(R);
      o.debug(`Start Resize on col ${_.field}`), e.current.publishEvent("columnResizeStart", {
        field: R
      }, S), p(_, v, k.clientX);
      const F = en(S.currentTarget);
      F.addEventListener("touchmove", C), F.addEventListener("touchend", m);
    }), w = u.useCallback(() => {
      const S = en(e.current.rootElementRef.current);
      S.body.style.removeProperty("cursor"), S.removeEventListener("mousemove", g), S.removeEventListener("mouseup", h), S.removeEventListener("touchmove", C), S.removeEventListener("touchend", m), setTimeout(() => {
        S.removeEventListener("click", Va, true);
      }, 100), r.columnHeaderElement && (r.columnHeaderElement.style.pointerEvents = "unset");
    }, [
      e,
      r,
      g,
      h,
      C,
      m
    ]), x = u.useCallback(({ field: S }) => {
      e.current.setState((v) => b({}, v, {
        columnResize: b({}, v.columnResize, {
          resizingColumnField: S
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), E = u.useCallback(() => {
      e.current.setState((S) => b({}, S, {
        columnResize: b({}, S.columnResize, {
          resizingColumnField: ""
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), H = Ke(({ colDef: S }, v) => {
      if (v.button !== 0 || !v.currentTarget.classList.contains(P["columnSeparator--resizable"])) return;
      v.preventDefault(), o.debug(`Start Resize on col ${S.field}`), e.current.publishEvent("columnResizeStart", {
        field: S.field
      }, v), p(S, v.currentTarget, v.clientX);
      const k = en(e.current.rootElementRef.current);
      k.body.style.cursor = "col-resize", r.previousMouseClickEvent = v.nativeEvent, k.addEventListener("mousemove", g), k.addEventListener("mouseup", h), k.addEventListener("click", Va, true);
    }), M = Ke((S, v) => {
      if (t.disableAutosize || v.button !== 0) return;
      const k = e.current.state.columns.lookup[S.field];
      k.resizable !== false && e.current.autosizeColumns(b({}, t.autosizeOptions, {
        disableColumnVirtualization: false,
        columns: [
          k.field
        ]
      }));
    }), $ = E0(e), z = u.useRef(false), D = u.useCallback(async (S) => {
      var _a2;
      if (!((_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) || z.current) return;
      z.current = true;
      const k = xn(e.current.state), O = b({}, rx, S, {
        columns: (S == null ? void 0 : S.columns) ?? k.orderedFields
      });
      O.columns = O.columns.filter((_) => k.columnVisibilityModel[_] !== false);
      const R = O.columns.map((_) => e.current.state.columns.lookup[_]);
      try {
        !t.disableVirtualization && O.disableColumnVirtualization && (e.current.unstable_setColumnVirtualization(false), await $());
        const _ = T0(e, O, R), F = R.map((I) => b({}, I, {
          width: _[I.field],
          computedWidth: _[I.field],
          flex: 0
        }));
        if (O.expand) {
          const T = k.orderedFields.map((j) => k.lookup[j]).filter((j) => k.columnVisibilityModel[j.field] !== false).reduce((j, V) => j + (_[V.field] ?? V.computedWidth ?? V.width), 0), G = e.current.getRootDimensions().viewportInnerSize.width - T;
          if (G > 0) {
            const j = G / (F.length || 1);
            F.forEach((V) => {
              V.width += j, V.computedWidth += j;
            });
          }
        }
        e.current.updateColumns(F), F.forEach((I, T) => {
          if (I.width !== R[T].width) {
            const L = I.width;
            e.current.publishEvent("columnWidthChange", {
              element: e.current.getColumnHeaderElement(I.field),
              colDef: I,
              width: L
            });
          }
        });
      } finally {
        t.disableVirtualization || e.current.unstable_setColumnVirtualization(true), z.current = false;
      }
    }, [
      e,
      $,
      t.disableVirtualization
    ]);
    u.useEffect(() => w, [
      w
    ]), Ya(() => {
      t.autosizeOnMount && Promise.resolve().then(() => {
        e.current.autosizeColumns(t.autosizeOptions);
      });
    }), iu(e, () => {
      var _a2;
      return (_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current;
    }, "touchstart", y, {
      passive: true
    }), Me(e, {
      autosizeColumns: D
    }, "public"), oe(e, "columnResizeStop", E), oe(e, "columnResizeStart", x), oe(e, "columnSeparatorMouseDown", H), oe(e, "columnSeparatorDoubleClick", M), Qe(e, "columnResize", t.onColumnResize), Qe(e, "columnWidthChange", t.onColumnWidthChange);
  };
  function uo(e, t, n) {
    e && (e.style[t] = `${parseInt(e.style[t], 10) + n}px`);
  }
  function $0(e, t) {
    return e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? null : e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex > t.lastRowIndex ? {
      firstRowIndex: t.lastRowIndex,
      lastRowIndex: e.lastRowIndex
    } : e.firstRowIndex < t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? {
      firstRowIndex: e.firstRowIndex,
      lastRowIndex: t.firstRowIndex - 1
    } : e;
  }
  function Na(e) {
    return e.firstRowIndex !== 0 || e.lastRowIndex !== 0;
  }
  const Wl = (e, t, n) => {
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
  }, H0 = /* @__PURE__ */ new Set([
    Ut,
    "__reorder__",
    ml
  ]), Ba = 20, td = (e, t, n, o, r, l, s) => {
    const a = l ? {} : b({}, e.current.state.rowSpanning.spannedCells), i = l ? {} : b({}, e.current.state.rowSpanning.hiddenCells), d = l ? {} : b({}, e.current.state.rowSpanning.hiddenCellOriginMap);
    return l && (s = dl), t.forEach((c) => {
      var _a2;
      if (!H0.has(c.field)) {
        for (let p = r.firstRowIndex; p < r.lastRowIndex; p += 1) {
          const h = n[p];
          if ((_a2 = i[h.id]) == null ? void 0 : _a2[c.field]) continue;
          const g = Wl(h.model, c, e);
          if (g == null) continue;
          let m = h.id, C = p, y = 0;
          const w = [];
          if (p === r.firstRowIndex) {
            let E = p - 1, H = n[E];
            for (; E >= o.firstRowIndex && H && Wl(H.model, c, e) === g; ) {
              const M = n[E + 1];
              i[M.id] ? i[M.id][c.field] = true : i[M.id] = {
                [c.field]: true
              }, w.push(p), y += 1, m = H.id, C = E, E -= 1, H = n[E];
            }
          }
          w.forEach((E) => {
            d[E] ? d[E][c.field] = C : d[E] = {
              [c.field]: C
            };
          });
          let x = p + 1;
          for (; x <= o.lastRowIndex && n[x] && Wl(n[x].model, c, e) === g; ) {
            const E = n[x];
            i[E.id] ? i[E.id][c.field] = true : i[E.id] = {
              [c.field]: true
            }, d[x] ? d[x][c.field] = C : d[x] = {
              [c.field]: C
            }, x += 1, y += 1;
          }
          y > 0 && (a[m] ? a[m][c.field] = y + 1 : a[m] = {
            [c.field]: y + 1
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
  }, nd = (e, t) => {
    const n = Qo(t).length;
    if (e.pagination) {
      const o = pu(t);
      let r = Ba;
      return o > 0 && (r = o - 1), {
        firstRowIndex: 0,
        lastRowIndex: Math.min(r, n)
      };
    }
    return {
      firstRowIndex: 0,
      lastRowIndex: Math.min(Ba, n)
    };
  }, L0 = (e, t, n) => {
    var _a2;
    if (!t.unstable_rowSpanning) return b({}, e, {
      rowSpanning: Co
    });
    const o = e.rows.dataRowIds || [], r = e.columns.orderedFields || [], l = e.rows.dataRowIdToModelLookup, s = e.columns.lookup, a = !!e.filter.filterModel.items.length || !!((_a2 = e.filter.filterModel.quickFilterValues) == null ? void 0 : _a2.length);
    if (!o.length || !r.length || !l || !s || a) return b({}, e, {
      rowSpanning: Co
    });
    const i = nd(t, n), d = o.map((m) => ({
      id: m,
      model: l[m]
    })), c = r.map((m) => s[m]), { spannedCells: p, hiddenCells: h, hiddenCellOriginMap: g } = td(n, c, d, i, i, true, dl);
    return b({}, e, {
      rowSpanning: {
        spannedCells: p,
        hiddenCells: h,
        hiddenCellOriginMap: g
      }
    });
  }, j0 = (e, t) => {
    const n = Sn(() => e.current.state.rowSpanning !== Co ? nd(t, e) : dl), o = u.useCallback((l, s = false) => {
      const { range: a, rows: i } = _n(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (a === null || !Na(l)) return;
      s && (n.current = dl);
      const d = $0({
        firstRowIndex: l.firstRowIndex,
        lastRowIndex: Math.min(l.lastRowIndex, a.lastRowIndex + 1)
      }, n.current);
      if (d === null) return;
      const c = st(e), { spannedCells: p, hiddenCells: h, hiddenCellOriginMap: g, processedRange: m } = td(e, c, i, a, d, s, n.current);
      n.current = m;
      const C = Object.keys(p).length, y = Object.keys(h).length, w = Object.keys(e.current.state.rowSpanning.spannedCells).length, x = Object.keys(e.current.state.rowSpanning.hiddenCells).length;
      !(s || C !== w || y !== x) || C === 0 && w === 0 || e.current.setState((M) => b({}, M, {
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
    ]), r = u.useCallback(() => {
      const l = Pr(e);
      Na(l) && o(l, true);
    }, [
      e,
      o
    ]);
    oe(e, "renderedRowsIntervalChange", Kn(t.unstable_rowSpanning, o)), oe(e, "sortedRowsSet", Kn(t.unstable_rowSpanning, r)), oe(e, "paginationModelChange", Kn(t.unstable_rowSpanning, r)), oe(e, "filteredRowsSet", Kn(t.unstable_rowSpanning, r)), oe(e, "columnsChange", Kn(t.unstable_rowSpanning, r)), u.useEffect(() => {
      t.unstable_rowSpanning ? e.current.state.rowSpanning === Co && r() : e.current.state.rowSpanning !== Co && e.current.setState((l) => b({}, l, {
        rowSpanning: Co
      }));
    }, [
      e,
      r,
      t.unstable_rowSpanning
    ]);
  }, A0 = (e, t, n) => b({}, e, {
    listViewColumn: t.unstable_listColumn ? b({}, t.unstable_listColumn, {
      computedWidth: Cs(n)
    }) : void 0
  });
  function z0(e, t) {
    const n = () => {
      e.current.setState((l) => l.listViewColumn ? b({}, l, {
        listViewColumn: b({}, l.listViewColumn, {
          computedWidth: Cs(e)
        })
      }) : l);
    }, o = u.useRef(null);
    oe(e, "viewportInnerSizeChange", (l) => {
      o.current !== l.width && (o.current = l.width, n());
    }), oe(e, "columnVisibilityModelChange", n), St(() => {
      const l = t.unstable_listColumn;
      l && e.current.setState((s) => b({}, s, {
        listViewColumn: b({}, l, {
          computedWidth: Cs(e)
        })
      }));
    }, [
      e,
      t.unstable_listColumn
    ]), u.useEffect(() => {
      t.unstable_listView && t.unstable_listColumn;
    }, [
      t.unstable_listView,
      t.unstable_listColumn
    ]);
  }
  function Cs(e) {
    return mt(e.current.state).viewportInnerSize.width;
  }
  const G0 = (e, t) => {
    const n = aI(e, t);
    return l0(n, t), e0(n), gt(sI, n, t), gt(n0, n, t), gt(mI, n, t), gt(YI, n, t), gt(jI, n, t), gt(KI, n, t), gt(TI, n, t), gt(s0, n, t), gt(zI, n, t), gt(MI, n, t), gt(L0, n, t), gt(CI, n, t), gt(O0, n, t), gt(gI, n, t), gt(y0, n, t), gt(mw, n, t), gt(p0, n, t), gt(m0, n, t), gt(A0, n, t), $I(n, t), o0(n, t), bI(n, t), XI(n, t), j0(n, t), t0(n, t), w0(n), S0(n, t), qI(n, t), OI(n, t), GI(n, t), FI(n, t), i0(n, t), wI(n, t), R0(n, t), AI(n, t), b0(n, t), a0(n, t), hI(n), vI(n, t), PI(n, t), fI(n, t), f0(n, t), c0(n, t), C0(n), bw(n, t), z0(n, t), n;
  }, _0 = (e) => {
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
    return me(d, $e, t);
  };
  function V0(e) {
    var _a2;
    const { groupId: t, width: n, depth: o, maxDepth: r, fields: l, height: s, colIndex: a, hasFocus: i, tabIndex: d, isLastColumn: c, pinnedPosition: p, pinnedOffset: h } = e, g = ie(), m = At(), C = u.useRef(null), y = Ee(), w = Q(y, wu), x = t ? w[t] : {}, { headerName: E = t ?? "", description: H = "", headerAlign: M = void 0 } = x;
    let $;
    const z = t && ((_a2 = w[t]) == null ? void 0 : _a2.renderHeaderGroup), D = u.useMemo(() => ({
      groupId: t,
      headerName: E,
      description: H,
      depth: o,
      maxDepth: r,
      fields: l,
      colIndex: a,
      isLastColumn: c
    }), [
      t,
      E,
      H,
      o,
      r,
      l,
      a,
      c
    ]);
    t && z && ($ = z(D));
    const S = b({}, e, {
      classes: g.classes,
      headerAlign: M,
      depth: o,
      isDragging: false
    }), v = E ?? t, k = nt(), O = t === null ? `empty-group-cell-${k}` : t, R = _0(S);
    u.useLayoutEffect(() => {
      if (i) {
        const A = C.current.querySelector('[tabindex="0"]') || C.current;
        if (!A) return;
        if (Js()) A.focus({
          preventScroll: true
        });
        else {
          const G = y.current.getScrollPosition();
          A.focus(), y.current.scroll(G);
        }
      }
    }, [
      y,
      i
    ]);
    const _ = u.useCallback((L) => (A) => {
      Mr(A) || y.current.publishEvent(L, D, A);
    }, [
      y,
      D
    ]), F = u.useMemo(() => ({
      onKeyDown: _("columnGroupHeaderKeyDown"),
      onFocus: _("columnGroupHeaderFocus"),
      onBlur: _("columnGroupHeaderBlur")
    }), [
      _
    ]), I = typeof x.headerClassName == "function" ? x.headerClassName(D) : x.headerClassName, T = u.useMemo(() => Sl(b({}, e.style), m, p, h), [
      p,
      h,
      e.style,
      m
    ]);
    return f.jsx(_u, b({
      ref: C,
      classes: R,
      columnMenuOpen: false,
      colIndex: a,
      height: s,
      isResizing: false,
      sortDirection: null,
      hasFocus: false,
      tabIndex: d,
      isDraggable: false,
      headerComponent: $,
      headerClassName: I,
      description: H,
      elementId: O,
      width: n,
      columnMenuIconButton: null,
      columnTitleIconButtons: null,
      resizable: false,
      label: v,
      "aria-colspan": l.length,
      "data-fields": `|-${l.join("-|-")}-|`,
      style: T
    }, F));
  }
  const Wa = se("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderRow",
    overridesResolver: (e, t) => t.columnHeaderRow
  })({
    display: "flex"
  }), N0 = (e) => {
    const { visibleColumns: t, sortColumnLookup: n, filterColumnLookup: o, columnHeaderTabIndexState: r, columnGroupHeaderTabIndexState: l, columnHeaderFocus: s, columnGroupHeaderFocus: a, headerGroupingMaxDepth: i, columnMenuState: d, columnVisibility: c, columnGroupsHeaderStructure: p, hasOtherElementInTabSequence: h } = e, [g, m] = u.useState(""), [C, y] = u.useState(""), w = an(), x = ie(), E = Q(w, Cu), H = Q(w, Bn), M = Q(w, hw), $ = Q(w, Ho), z = Q(w, On), D = Tu(H, M, $.left.length), S = Q(w, fl), v = Q(w, Oc), k = Q(w, Pm), O = Q(w, Mm), R = Q(w, Dc), _ = u.useCallback((B) => y(B.field), []), F = u.useCallback(() => y(""), []), I = u.useCallback((B) => m(B.field), []), T = u.useCallback(() => m(""), []), L = u.useMemo(() => $.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: $.left.length
    } : null, [
      $.left.length
    ]), A = u.useMemo(() => $.right.length ? {
      firstColumnIndex: t.length - $.right.length,
      lastColumnIndex: t.length
    } : null, [
      $.right.length,
      t.length
    ]);
    oe(w, "columnResizeStart", _), oe(w, "columnResizeStop", F), oe(w, "columnHeaderDragStart", I), oe(w, "columnHeaderDragEnd", T);
    const G = (B) => {
      const { renderContext: te = M } = B || {}, J = te.firstColumnIndex, ne = te.lastColumnIndex;
      return {
        renderedColumns: t.slice(J, ne),
        firstColumnToRender: J,
        lastColumnToRender: ne
      };
    }, j = (B, te, J, ne = false) => {
      const ae = (B == null ? void 0 : B.position) === Oe.RIGHT, we = (B == null ? void 0 : B.position) === void 0, Y = $.right.length > 0 && ae || $.right.length === 0 && we, re = D - J;
      return f.jsxs(u.Fragment, {
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
          Y && f.jsx(ti, {
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
        const Y = J[we], re = ne + we, ye = re === 0, Z = r !== null && r.field === Y.field || ye && !h ? 0 : -1, Se = s !== null && s.field === Y.field, ee = d.open && d.field === Y.field, ve = B == null ? void 0 : B.position, Ce = rr(ve, Y.computedWidth, re, H, S, R), Fe = ve === Oe.RIGHT ? J[we - 1] : J[we + 1], Ne = Fe ? s !== null && s.field === Fe.field : false, Be = re + 1 === H.length - $.right.length, ze = we, He = J.length, Le = cl(ve, ze), We = al(ve, ze, He, x.showColumnVerticalBorder, v);
        ae.push(f.jsx(Rv, b({}, n[Y.field], {
          columnMenuOpen: ee,
          filterItemsCounter: o[Y.field] && o[Y.field].length,
          headerHeight: k,
          isDragging: Y.field === g,
          colDef: Y,
          colIndex: re,
          isResizing: C === Y.field,
          isLast: re === H.length - 1,
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
    }, U = () => f.jsxs(Wa, {
      role: "row",
      "aria-rowindex": i + 1,
      ownerState: x,
      className: P["row--borderBottom"],
      children: [
        L && V({
          position: Oe.LEFT,
          renderContext: L
        }, {
          disableReorder: true
        }),
        V({
          renderContext: M
        }),
        A && V({
          position: Oe.RIGHT,
          renderContext: A
        }, {
          disableReorder: true,
          separatorSide: ei.Left
        })
      ]
    }), W = ({ depth: B, params: te }) => {
      var _a2, _b2;
      const J = G(te);
      if (J.renderedColumns.length === 0) return null;
      const { firstColumnToRender: ne, lastColumnToRender: ae } = J, we = p[B], Y = t[ne].field, re = ((_a2 = E[Y]) == null ? void 0 : _a2[B]) ?? null, ye = we.findIndex(({ groupId: He, columnFields: Le }) => He === re && Le.includes(Y)), Z = t[ae - 1].field, Se = ((_b2 = E[Z]) == null ? void 0 : _b2[B]) ?? null, ee = we.findIndex(({ groupId: He, columnFields: Le }) => He === Se && Le.includes(Z)), ve = we.slice(ye, ee + 1).map((He) => b({}, He, {
        columnFields: He.columnFields.filter((Le) => c[Le] !== false)
      })).filter((He) => He.columnFields.length > 0), Ce = ve[0].columnFields.indexOf(Y), Ne = ve[0].columnFields.slice(0, Ce).reduce((He, Le) => {
        const We = z[Le];
        return He + (We.computedWidth ?? 0);
      }, 0);
      let Be = ne;
      const ze = ve.map(({ groupId: He, columnFields: Le }, We) => {
        const Ge = a !== null && a.depth === B && Le.includes(a.field), fe = l !== null && l.depth === B && Le.includes(l.field) ? 0 : -1, xe = {
          width: Le.reduce((Re, rt) => Re + z[rt].computedWidth, 0),
          fields: Le,
          colIndex: Be
        }, pe = te.position, he = rr(pe, xe.width, Be, H, S, R);
        Be += Le.length;
        let je = We;
        return pe === Oe.LEFT && (je = Be - 1), f.jsx(V0, {
          groupId: He,
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
          showRightBorder: al(pe, je, ve.length, x.showColumnVerticalBorder, v)
        }, We);
      });
      return j(te, ze, Ne);
    };
    return {
      renderContext: M,
      leftRenderContext: L,
      rightRenderContext: A,
      pinnedColumns: $,
      visibleColumns: t,
      columnPositions: H,
      getFillers: j,
      getColumnHeadersRow: U,
      getColumnsToRender: G,
      getColumnGroupHeadersRows: () => {
        if (i === 0) return null;
        const B = [];
        for (let te = 0; te < i; te += 1) B.push(f.jsxs(Wa, {
          role: "row",
          "aria-rowindex": te + 1,
          ownerState: x,
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
                renderContext: M
              }
            }),
            A && W({
              depth: te,
              params: {
                position: Oe.RIGHT,
                renderContext: A,
                maxLastColumn: A.lastColumnIndex
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
  }, B0 = [
    "className"
  ], W0 = (e) => {
    const { classes: t } = e;
    return me({
      root: [
        "columnHeaders"
      ]
    }, $e, t);
  }, U0 = Je("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaders",
    overridesResolver: (e, t) => t.columnHeaders
  })({
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
    borderTopRightRadius: "var(--unstable_DataGrid-radius)"
  }), K0 = Ve(function(t, n) {
    const { className: o } = t, r = ge(t, B0), l = ie(), s = W0(l);
    return f.jsx(U0, b({
      className: de(s.root, o),
      ownerState: l
    }, r, {
      role: "presentation",
      ref: n
    }));
  }), q0 = [
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
  ], Y0 = Ve(function(t, n) {
    const { visibleColumns: o, sortColumnLookup: r, filterColumnLookup: l, columnHeaderTabIndexState: s, columnGroupHeaderTabIndexState: a, columnHeaderFocus: i, columnGroupHeaderFocus: d, headerGroupingMaxDepth: c, columnMenuState: p, columnVisibility: h, columnGroupsHeaderStructure: g, hasOtherElementInTabSequence: m } = t, C = ge(t, q0), { getInnerProps: y, getColumnHeadersRow: w, getColumnGroupHeadersRows: x } = N0({
      visibleColumns: o,
      sortColumnLookup: r,
      filterColumnLookup: l,
      columnHeaderTabIndexState: s,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: c,
      columnMenuState: p,
      columnVisibility: h,
      columnGroupsHeaderStructure: g,
      hasOtherElementInTabSequence: m
    });
    return f.jsxs(K0, b({}, C, y(), {
      ref: n,
      children: [
        x(),
        w()
      ]
    }));
  }), X0 = Tn(Y0);
  function Q0(e) {
    return null;
  }
  function J0(e) {
    return null;
  }
  const Z0 = Ve(function(t, n) {
    const r = Ee().current.getLocaleText("noResultsOverlayLabel");
    return f.jsx(Zs, b({}, t, {
      ref: n,
      children: r
    }));
  }), eP = [
    "sortingOrder"
  ], tP = u.memo(function(t) {
    const { sortingOrder: n } = t, o = ge(t, eP), r = ie(), [l] = n, s = l === "asc" ? r.slots.columnSortedAscendingIcon : r.slots.columnSortedDescendingIcon;
    return s ? f.jsx(s, b({}, o)) : null;
  }), nP = [
    "native"
  ];
  function oP(e) {
    let { native: t } = e, n = ge(e, nP);
    return t ? f.jsx("option", b({}, n)) : f.jsx($t, b({}, n));
  }
  const rP = {
    booleanCellTrueIcon: ny,
    booleanCellFalseIcon: Gl,
    columnMenuIcon: Jv,
    openFilterButtonIcon: Wv,
    filterPanelDeleteIcon: Gl,
    columnFilteredIcon: va,
    columnSelectorIcon: Kv,
    columnUnsortedIcon: tP,
    columnSortedAscendingIcon: ba,
    columnSortedDescendingIcon: Ca,
    columnResizeIcon: qv,
    densityCompactIcon: Yv,
    densityStandardIcon: Xv,
    densityComfortableIcon: Qv,
    exportIcon: ty,
    moreActionsIcon: oy,
    treeDataCollapseIcon: xa,
    treeDataExpandIcon: wa,
    groupingCriteriaCollapseIcon: xa,
    groupingCriteriaExpandIcon: wa,
    detailPanelExpandIcon: ya,
    detailPanelCollapseIcon: Zv,
    rowReorderIcon: Sa,
    quickFilterIcon: Uv,
    quickFilterClearIcon: Gl,
    columnMenuHideIcon: ry,
    columnMenuSortAscendingIcon: ba,
    columnMenuSortDescendingIcon: Ca,
    columnMenuFilterIcon: va,
    columnMenuManageColumnsIcon: ly,
    columnMenuClearIcon: sy,
    loadIcon: ey,
    filterPanelAddIcon: ya,
    filterPanelRemoveAllIcon: iy,
    columnReorderIcon: Sa
  }, lP = b({}, rP, {
    baseBadge: ng,
    baseCheckbox: Yr,
    baseDivider: Id,
    baseTextField: Gt,
    baseFormControl: Kl,
    baseSelect: qr,
    baseButton: lr,
    baseIconButton: Qt,
    baseInputAdornment: pc,
    baseTooltip: Yn,
    basePopper: to,
    baseInputLabel: ql,
    baseSelectOption: oP,
    baseChip: xo
  }), sP = b({}, lP, {
    cell: Ix,
    skeletonCell: Ox,
    columnHeaderFilterIconButton: Nv,
    columnHeaderSortIcon: _v,
    columnMenu: Iy,
    columnHeaders: X0,
    detailPanels: Q0,
    footer: xS,
    footerRowCount: HS,
    toolbar: null,
    pinnedRows: J0,
    loadingOverlay: MS,
    noResultsOverlay: Z0,
    noRowsOverlay: kS,
    pagination: OS,
    filterPanel: eS,
    columnsPanel: Fy,
    columnsManagement: rS,
    panel: $y,
    row: _S
  }), iP = {
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
  }, aP = sP, cP = (e) => {
    const t = ws(), n = bx(u.useMemo(() => Od({
      props: e,
      theme: t,
      name: "MuiDataGrid"
    }), [
      t,
      e
    ])), o = u.useMemo(() => b({}, Em, n.localeText), [
      n.localeText
    ]), r = u.useMemo(() => hx({
      defaultSlots: aP,
      slots: n.slots
    }), [
      n.slots
    ]), l = u.useMemo(() => Object.keys(hs).reduce((s, a) => (s[a] = n[a] ?? hs[a], s), {}), [
      n
    ]);
    return u.useMemo(() => b({}, n, l, {
      localeText: o,
      slots: r
    }, iP), [
      n,
      o,
      r,
      l
    ]);
  }, uP = {
    hooks: {
      useGridAriaAttributes: VS,
      useGridRowAriaAttributes: NS,
      useCellAggregationResult: () => null
    }
  }, od = Ve(function(t, n) {
    var _a2;
    const o = cP(t), r = G0(o.apiRef, o);
    return f.jsx(BS, {
      privateApiRef: r,
      configuration: uP,
      props: o,
      children: f.jsx(Yx, b({
        className: o.className,
        style: o.style,
        sx: o.sx
      }, o.forwardedProps, (_a2 = o.slotProps) == null ? void 0 : _a2.root, {
        ref: n
      }))
    });
  }), dP = u.memo(od);
  od.propTypes = {
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
  function pP(e) {
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
  const fP = () => {
    const e = u.useContext(Pd), { widget: { data: { oidObject: t } }, widget: n } = e, { data: o } = Md("oid"), r = Ad("oid"), l = t == null ? void 0 : t.type, s = l === "string" || l === "mixed", a = u.useMemo(() => {
      if (r == null) return [];
      let w;
      if (typeof r == "string") try {
        w = JSON.parse(r);
      } catch {
        return [];
      }
      else w = r;
      return Array.isArray(w) ? w : typeof w == "object" && w !== null ? [
        w
      ] : [];
    }, [
      r
    ]), i = u.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: d, rows: c } = Wh(a, i), p = u.useMemo(() => gc(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = u.useCallback((w) => (x) => {
      const E = x.value;
      let H = E != null ? String(E) : "";
      if (w.format) switch (w.format.type) {
        case "number":
          (typeof E == "number" || typeof E == "string" && !isNaN(Number(E))) && (H = hc(Number(E), {
            decimals: w.format.numberDecimals,
            prefix: w.format.numberPrefix,
            suffix: w.format.numberSuffix,
            thousands: w.format.numberThousandsSeparator
          }));
          break;
        case "date":
          H = mc(E, w.format.dateFormat);
          break;
        case "boolean":
          H = is(E, w.format.booleanTrue, w.format.booleanFalse);
          break;
      }
      let M = {};
      if (w.cellStyle && w.cellStyle.length > 0) {
        for (const $ of w.cellStyle) if (yh($.condition, E)) {
          M = {
            ...$.backgroundColor && {
              backgroundColor: $.backgroundColor
            },
            ...$.textColor && {
              color: $.textColor
            },
            ...$.fontWeight && {
              fontWeight: $.fontWeight
            },
            ...$.fontStyle && {
              fontStyle: $.fontStyle
            }
          };
          break;
        }
      }
      return f.jsx(Pe, {
        variant: "body2",
        component: "span",
        noWrap: true,
        title: H,
        sx: {
          width: "100%",
          display: "block",
          lineHeight: "inherit",
          ...M
        },
        children: H
      });
    }, []), g = u.useMemo(() => p.length > 0 ? p.filter((w) => w.visible).map((w) => {
      const x = {
        field: w.path,
        headerName: w.headerName || w.path,
        flex: w.width ? 0 : 1,
        width: w.width,
        headerAlign: w.align || "left",
        align: w.align || "left",
        sortable: w.sortable ?? n.data.tableSorting !== false,
        filterable: w.filterable ?? n.data.tableFiltering === true
      };
      return (w.format || w.cellStyle && w.cellStyle.length > 0) && (x.renderCell = h(w)), x;
    }) : d.map((w) => ({
      field: w.path,
      headerName: w.path.split(".").pop() || w.path,
      flex: 1,
      sortable: n.data.tableSorting !== false,
      filterable: n.data.tableFiltering === true
    })), [
      p,
      d,
      n.data.tableSorting,
      n.data.tableFiltering,
      h
    ]), m = u.useMemo(() => c.map((w, x) => ({
      id: x,
      ...w
    })), [
      c
    ]), C = u.useMemo(() => pP(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), y = u.useMemo(() => {
      const w = {
        border: 0,
        width: "100%",
        height: "100%"
      };
      return (n.data.tableHeaderBgColor || n.data.tableHeaderTextColor || n.data.tableHeaderFontSize) && (w["& .MuiDataGrid-columnHeaders"] = {
        ...n.data.tableHeaderBgColor && {
          backgroundColor: n.data.tableHeaderBgColor
        },
        ...n.data.tableHeaderTextColor && {
          color: n.data.tableHeaderTextColor
        },
        ...n.data.tableHeaderFontSize && {
          fontSize: `${n.data.tableHeaderFontSize}px`
        }
      }), n.data.tableCellFontSize && (w["& .MuiDataGrid-cell"] = {
        fontSize: `${n.data.tableCellFontSize}px`
      }), n.data.tableStripedColor && (w["& .MuiDataGrid-row:nth-of-type(even)"] = {
        backgroundColor: n.data.tableStripedColor
      }), n.data.tableShowCellBorders && (w["& .MuiDataGrid-cell"] = {
        ...w["& .MuiDataGrid-cell"],
        borderRight: "1px solid",
        borderColor: "divider"
      }), w;
    }, [
      n.data.tableHeaderBgColor,
      n.data.tableHeaderTextColor,
      n.data.tableHeaderFontSize,
      n.data.tableCellFontSize,
      n.data.tableStripedColor,
      n.data.tableShowCellBorders
    ]);
    return f.jsxs(kd, {
      isValidType: s,
      data: o,
      oidValue: r,
      children: [
        f.jsx(Ed, {
          data: o,
          widget: n
        }),
        s && g.length > 0 ? f.jsx(tt, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          },
          children: f.jsx(dP, {
            rows: m,
            columns: g,
            density: n.data.tableDensity || "standard",
            rowHeight: n.data.tableRowHeight || void 0,
            columnHeaderHeight: n.data.tableHeaderHeight || void 0,
            pageSizeOptions: C,
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
            sx: y
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
          children: f.jsx(Pe, {
            variant: "body2",
            color: "text.secondary",
            children: s ? le.t("json_table_no_data") : le.t("json_table_invalid_type")
          })
        })
      ]
    });
  };
  rd = class extends le {
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
              ...pi()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Fd([
                "string"
              ]),
              ...qh()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...pi({
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
      return rd.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Td(this.wrapContent(f.jsx(fP, {})), n);
    }
  };
});
export {
  __tla,
  rd as default
};
