import { $ as Ks, f as Ro, g as ve, a as xe, u as ye, a0 as Xs, a1 as Qs, a2 as tn, a3 as qt, h as Kt, j as c, s as J, d as ie, e as be, a4 as ur, m as pe, a5 as ls, b as ce, P as et, B as Zn, c as le, I as je, Y as G, a6 as Mo, M as $o, Z as Dt, a7 as hn, a8 as Zs, a9 as ei, aa as Uo, i as Fe, ab as as, ac as wn, T, r as ti, ad as ni, W as oi, ae as ri, L as si, af as dr, ag as ii, ah as cs, ai as Ao, aj as li, ak as pr, al as ai, U as ot, o as L, am as Se, G as b, an as ut, ao as dt, ap as ci, aq as ui, D as Io, w as Et, ar as di, as as pi, C as qe, F as wt, at as fi, au as gi, n as hi, q as mi, K as Dn, x as yi, y as bi, A as vi, z as fr, E as xi, __tla as __tla_0 } from "./useData-B0iH0GQ1.js";
import { v as m, a as _i, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Cn, __tla as __tla_2 } from "./Checkbox-BQh4uDkD.js";
import { D as qo, a as Yo, b as Jo, __tla as __tla_3 } from "./DialogTitle-BUaW0TaW.js";
import { B as rt, __tla as __tla_4 } from "./Button-ct0NMIsg.js";
import { S as wi, __tla as __tla_5 } from "./Slider-DeWAiTHT.js";
import { F as kt, __tla as __tla_6 } from "./FormControlLabel-D_E-ciUi.js";
import { S as mn, __tla as __tla_7 } from "./Switch-pCvmM2uk.js";
import { g as Ci, M as se, __tla as __tla_8 } from "./MenuItem-Bydf3SxN.js";
import { g as Si, S as De, __tla as __tla_9 } from "./Stack-B3LYfLLd.js";
import { T as us, a as eo, __tla as __tla_10 } from "./ToggleButtonGroup-DbzBMSgu.js";
import { C as to, __tla as __tla_11 } from "./Close-Dk5XM_JM.js";
import { u as ji, __tla as __tla_12 } from "./useOidValue-CFrQXCtF.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-DurAKeKN.js";
import { __tla as __tla_14 } from "./listItemTextClasses-D9f94nOz.js";
let Go;
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
  function Ri(e, t, n, o, r) {
    const [s, i] = m.useState(() => r && n ? n(e).matches : o ? o(e).matches : t);
    return Ro(() => {
      if (!n) return;
      const l = n(e), a = () => {
        i(l.matches);
      };
      return a(), l.addEventListener("change", a), () => {
        l.removeEventListener("change", a);
      };
    }, [
      e,
      n
    ]), s;
  }
  const Mi = {
    ..._i
  }, ds = Mi.useSyncExternalStore;
  function $i(e, t, n, o, r) {
    const s = m.useCallback(() => t, [
      t
    ]), i = m.useMemo(() => {
      if (r && n) return () => n(e).matches;
      if (o !== null) {
        const { matches: u } = o(e);
        return () => u;
      }
      return s;
    }, [
      s,
      e,
      o,
      r,
      n
    ]), [l, a] = m.useMemo(() => {
      if (n === null) return [
        s,
        () => () => {
        }
      ];
      const u = n(e);
      return [
        () => u.matches,
        (f) => (u.addEventListener("change", f), () => {
          u.removeEventListener("change", f);
        })
      ];
    }, [
      s,
      n,
      e
    ]);
    return ds(a, l, i);
  }
  function ps(e = {}) {
    const { themeId: t } = e;
    return function(o, r = {}) {
      let s = Ks();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: l = false, matchMedia: a = i ? window.matchMedia : null, ssrMatchMedia: d = null, noSsr: u = false } = Si({
        name: "MuiUseMediaQuery",
        props: r,
        theme: s
      });
      let f = typeof o == "function" ? o(s) : o;
      return f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (ds !== void 0 ? $i : Ri)(f, l, a, d, u);
    };
  }
  ps();
  function Ai(e) {
    return ve("MuiCollapse", e);
  }
  xe("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Ii = (e) => {
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
    return be(o, Ai, n);
  }, Pi = J("div", {
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
  }))), Fi = J("div", {
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
  }), zi = J("div", {
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
  }), Po = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: s, className: i, collapsedSize: l = "0px", component: a, easing: d, in: u, onEnter: f, onEntered: g, onEntering: p, onExit: h, onExited: y, onExiting: v, orientation: x = "vertical", style: _, timeout: C = Xs.standard, TransitionComponent: j = Qs, ...$ } = o, w = {
      ...o,
      orientation: x,
      collapsedSize: l
    }, R = Ii(w), M = tn(), F = qt(), I = m.useRef(null), P = m.useRef(), U = typeof l == "number" ? `${l}px` : l, k = x === "horizontal", W = k ? "width" : "height", Y = m.useRef(null), q = Kt(n, Y), E = (N) => (ae) => {
      if (N) {
        const te = Y.current;
        ae === void 0 ? N(te) : N(te, ae);
      }
    }, S = () => I.current ? I.current[k ? "clientWidth" : "clientHeight"] : 0, z = E((N, ae) => {
      I.current && k && (I.current.style.position = "absolute"), N.style[W] = U, f && f(N, ae);
    }), O = E((N, ae) => {
      const te = S();
      I.current && k && (I.current.style.position = "");
      const { duration: X, easing: ze } = ur({
        style: _,
        timeout: C,
        easing: d
      }, {
        mode: "enter"
      });
      if (C === "auto") {
        const Ae = M.transitions.getAutoHeightDuration(te);
        N.style.transitionDuration = `${Ae}ms`, P.current = Ae;
      } else N.style.transitionDuration = typeof X == "string" ? X : `${X}ms`;
      N.style[W] = `${te}px`, N.style.transitionTimingFunction = ze, p && p(N, ae);
    }), H = E((N, ae) => {
      N.style[W] = "auto", g && g(N, ae);
    }), Z = E((N) => {
      N.style[W] = `${S()}px`, h && h(N);
    }), Q = E(y), ue = E((N) => {
      const ae = S(), { duration: te, easing: X } = ur({
        style: _,
        timeout: C,
        easing: d
      }, {
        mode: "exit"
      });
      if (C === "auto") {
        const ze = M.transitions.getAutoHeightDuration(ae);
        N.style.transitionDuration = `${ze}ms`, P.current = ze;
      } else N.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
      N.style[W] = U, N.style.transitionTimingFunction = X, v && v(N);
    }), fe = (N) => {
      C === "auto" && F.start(P.current || 0, N), r && r(Y.current, N);
    };
    return c.jsx(j, {
      in: u,
      onEnter: z,
      onEntered: H,
      onEntering: O,
      onExit: Z,
      onExited: Q,
      onExiting: ue,
      addEndListener: fe,
      nodeRef: Y,
      timeout: C === "auto" ? null : C,
      ...$,
      children: (N, { ownerState: ae, ...te }) => c.jsx(Pi, {
        as: a,
        className: ie(R.root, i, {
          entered: R.entered,
          exited: !u && U === "0px" && R.hidden
        }[N]),
        style: {
          [k ? "minWidth" : "minHeight"]: U,
          ..._
        },
        ref: q,
        ownerState: {
          ...w,
          state: N
        },
        ...te,
        children: c.jsx(Fi, {
          ownerState: {
            ...w,
            state: N
          },
          className: R.wrapper,
          ref: I,
          children: c.jsx(zi, {
            ownerState: {
              ...w,
              state: N
            },
            className: R.wrapperInner,
            children: s
          })
        })
      })
    });
  });
  Po && (Po.muiSupportAuto = true);
  const fs = m.createContext({});
  function Ti(e) {
    return ve("MuiAccordion", e);
  }
  const En = xe("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), Di = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: s } = e;
    return be({
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
    }, Ti, t);
  }, Ei = J(et, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${En.region}`]: t.region
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
      [`&.${En.expanded}`]: {
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
      [`&.${En.disabled}`]: {
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
          [`&.${En.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), ki = J("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), kn = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: s, defaultExpanded: i = false, disabled: l = false, disableGutters: a = false, expanded: d, onChange: u, square: f = false, slots: g = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: y, ...v } = o, [x, _] = ls({
      controlled: d,
      default: i,
      name: "Accordion",
      state: "expanded"
    }), C = m.useCallback((S) => {
      _(!x), u && u(S, !x);
    }, [
      x,
      u,
      _
    ]), [j, ...$] = m.Children.toArray(r), w = m.useMemo(() => ({
      expanded: x,
      disabled: l,
      disableGutters: a,
      toggle: C
    }), [
      x,
      l,
      a,
      C
    ]), R = {
      ...o,
      square: f,
      disabled: l,
      disableGutters: a,
      expanded: x
    }, M = Di(R), F = {
      transition: h,
      ...g
    }, I = {
      transition: y,
      ...p
    }, P = {
      slots: F,
      slotProps: I
    }, [U, k] = ce("root", {
      elementType: Ei,
      externalForwardedProps: {
        ...P,
        ...v
      },
      className: ie(M.root, s),
      shouldForwardComponentProp: true,
      ownerState: R,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [W, Y] = ce("heading", {
      elementType: ki,
      externalForwardedProps: P,
      className: M.heading,
      ownerState: R
    }), [q, E] = ce("transition", {
      elementType: Po,
      externalForwardedProps: P,
      ownerState: R
    });
    return c.jsxs(U, {
      ...k,
      children: [
        c.jsx(W, {
          ...Y,
          children: c.jsx(fs.Provider, {
            value: w,
            children: j
          })
        }),
        c.jsx(q, {
          in: x,
          timeout: "auto",
          ...E,
          children: c.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: M.region,
            children: $
          })
        })
      ]
    });
  });
  function Oi(e) {
    return ve("MuiAccordionDetails", e);
  }
  xe("MuiAccordionDetails", [
    "root"
  ]);
  const Ni = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Oi, t);
  }, Li = J("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), On = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...s } = o, i = o, l = Ni(i);
    return c.jsx(Li, {
      className: ie(l.root, r),
      ref: n,
      ownerState: i,
      ...s
    });
  });
  function Hi(e) {
    return ve("MuiAccordionSummary", e);
  }
  const Yt = xe("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), Bi = (e) => {
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
    }, Hi, t);
  }, Vi = J(Zn, {
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
      [`&.${Yt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Yt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Yt.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Yt.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), Wi = J("span", {
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
          [`&.${Yt.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), Gi = J("span", {
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
    [`&.${Yt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Nn = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: s, expandIcon: i, focusVisibleClassName: l, onClick: a, slots: d, slotProps: u, ...f } = o, { disabled: g = false, disableGutters: p, expanded: h, toggle: y } = m.useContext(fs), v = (I) => {
      y && y(I), a && a(I);
    }, x = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: p
    }, _ = Bi(x), C = {
      slots: d,
      slotProps: u
    }, [j, $] = ce("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: ie(_.root, s),
      elementType: Vi,
      externalForwardedProps: {
        ...C,
        ...f
      },
      ownerState: x,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: ie(_.focusVisible, l)
      },
      getSlotProps: (I) => ({
        ...I,
        onClick: (P) => {
          var _a2;
          (_a2 = I.onClick) == null ? void 0 : _a2.call(I, P), v(P);
        }
      })
    }), [w, R] = ce("content", {
      className: _.content,
      elementType: Wi,
      externalForwardedProps: C,
      ownerState: x
    }), [M, F] = ce("expandIconWrapper", {
      className: _.expandIconWrapper,
      elementType: Gi,
      externalForwardedProps: C,
      ownerState: x
    });
    return c.jsxs(j, {
      ...$,
      children: [
        c.jsx(w, {
          ...R,
          children: r
        }),
        i && c.jsx(M, {
          ...F,
          children: i
        })
      ]
    });
  });
  function Ui(e) {
    return ve("MuiAlert", e);
  }
  const gr = xe("MuiAlert", [
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
  ]), qi = le(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), Yi = le(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Ji = le(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), Ki = le(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), Xi = le(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Qi = (e) => {
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
    return be(s, Ui, r);
  }, Zi = J(et, {
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
  })(pe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? Mo : $o, n = e.palette.mode === "light" ? $o : Mo;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Dt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${gr.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Dt([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${gr.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Dt([
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
  })), el = J("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), tl = J("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), nl = J("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), hr = {
    success: c.jsx(qi, {
      fontSize: "inherit"
    }),
    warning: c.jsx(Yi, {
      fontSize: "inherit"
    }),
    error: c.jsx(Ji, {
      fontSize: "inherit"
    }),
    info: c.jsx(Ki, {
      fontSize: "inherit"
    })
  }, Jn = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: s, className: i, closeText: l = "Close", color: a, components: d = {}, componentsProps: u = {}, icon: f, iconMapping: g = hr, onClose: p, role: h = "alert", severity: y = "success", slotProps: v = {}, slots: x = {}, variant: _ = "standard", ...C } = o, j = {
      ...o,
      color: a,
      severity: y,
      variant: _,
      colorSeverity: a || y
    }, $ = Qi(j), w = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...x
      },
      slotProps: {
        ...u,
        ...v
      }
    }, [R, M] = ce("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: ie($.root, i),
      elementType: Zi,
      externalForwardedProps: {
        ...w,
        ...C
      },
      ownerState: j,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [F, I] = ce("icon", {
      className: $.icon,
      elementType: el,
      externalForwardedProps: w,
      ownerState: j
    }), [P, U] = ce("message", {
      className: $.message,
      elementType: tl,
      externalForwardedProps: w,
      ownerState: j
    }), [k, W] = ce("action", {
      className: $.action,
      elementType: nl,
      externalForwardedProps: w,
      ownerState: j
    }), [Y, q] = ce("closeButton", {
      elementType: je,
      externalForwardedProps: w,
      ownerState: j
    }), [E, S] = ce("closeIcon", {
      elementType: Xi,
      externalForwardedProps: w,
      ownerState: j
    });
    return c.jsxs(R, {
      ...M,
      children: [
        f !== false ? c.jsx(F, {
          ...I,
          children: f || g[y] || hr[y]
        }) : null,
        c.jsx(P, {
          ...U,
          children: s
        }),
        r != null ? c.jsx(k, {
          ...W,
          children: r
        }) : null,
        r == null && p ? c.jsx(k, {
          ...W,
          children: c.jsx(Y, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...q,
            children: c.jsx(E, {
              fontSize: "small",
              ...S
            })
          })
        }) : null
      ]
    });
  });
  var He = "top", Ke = "bottom", Xe = "right", Be = "left", Ko = "auto", Mn = [
    He,
    Ke,
    Xe,
    Be
  ], Xt = "start", Sn = "end", ol = "clippingParents", gs = "viewport", on = "popper", rl = "reference", mr = Mn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Xt,
      t + "-" + Sn
    ]);
  }, []), hs = [].concat(Mn, [
    Ko
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Xt,
      t + "-" + Sn
    ]);
  }, []), sl = "beforeRead", il = "read", ll = "afterRead", al = "beforeMain", cl = "main", ul = "afterMain", dl = "beforeWrite", pl = "write", fl = "afterWrite", gl = [
    sl,
    il,
    ll,
    al,
    cl,
    ul,
    dl,
    pl,
    fl
  ];
  function it(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function We(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Nt(e) {
    var t = We(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Je(e) {
    var t = We(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Xo(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = We(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function hl(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
      !Je(s) || !it(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
        var l = r[i];
        l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? "" : l);
      }));
    });
  }
  function ml(e) {
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
        var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = i.reduce(function(a, d) {
          return a[d] = "", a;
        }, {});
        !Je(r) || !it(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const yl = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: hl,
    effect: ml,
    requires: [
      "computeStyles"
    ]
  };
  function st(e) {
    return e.split("-")[0];
  }
  var Ot = Math.max, no = Math.min, Qt = Math.round;
  function Fo() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function ms() {
    return !/^((?!chrome|android).)*safari/i.test(Fo());
  }
  function Zt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, s = 1;
    t && Je(e) && (r = e.offsetWidth > 0 && Qt(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Qt(o.height) / e.offsetHeight || 1);
    var i = Nt(e) ? We(e) : window, l = i.visualViewport, a = !ms() && n, d = (o.left + (a && l ? l.offsetLeft : 0)) / r, u = (o.top + (a && l ? l.offsetTop : 0)) / s, f = o.width / r, g = o.height / s;
    return {
      width: f,
      height: g,
      top: u,
      right: d + f,
      bottom: u + g,
      left: d,
      x: d,
      y: u
    };
  }
  function Qo(e) {
    var t = Zt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function ys(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Xo(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function gt(e) {
    return We(e).getComputedStyle(e);
  }
  function bl(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(it(e)) >= 0;
  }
  function Mt(e) {
    return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function lo(e) {
    return it(e) === "html" ? e : e.assignedSlot || e.parentNode || (Xo(e) ? e.host : null) || Mt(e);
  }
  function yr(e) {
    return !Je(e) || gt(e).position === "fixed" ? null : e.offsetParent;
  }
  function vl(e) {
    var t = /firefox/i.test(Fo()), n = /Trident/i.test(Fo());
    if (n && Je(e)) {
      var o = gt(e);
      if (o.position === "fixed") return null;
    }
    var r = lo(e);
    for (Xo(r) && (r = r.host); Je(r) && [
      "html",
      "body"
    ].indexOf(it(r)) < 0; ) {
      var s = gt(r);
      if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function $n(e) {
    for (var t = We(e), n = yr(e); n && bl(n) && gt(n).position === "static"; ) n = yr(n);
    return n && (it(n) === "html" || it(n) === "body" && gt(n).position === "static") ? t : n || vl(e) || t;
  }
  function Zo(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function yn(e, t, n) {
    return Ot(e, no(t, n));
  }
  function xl(e, t, n) {
    var o = yn(e, t, n);
    return o > n ? n : o;
  }
  function bs() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function vs(e) {
    return Object.assign({}, bs(), e);
  }
  function xs(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var _l = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, vs(typeof t != "number" ? t : xs(t, Mn));
  };
  function wl(e) {
    var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = st(n.placement), a = Zo(l), d = [
      Be,
      Xe
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!s || !i)) {
      var f = _l(r.padding, n), g = Qo(s), p = a === "y" ? He : Be, h = a === "y" ? Ke : Xe, y = n.rects.reference[u] + n.rects.reference[a] - i[a] - n.rects.popper[u], v = i[a] - n.rects.reference[a], x = $n(s), _ = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, C = y / 2 - v / 2, j = f[p], $ = _ - g[u] - f[h], w = _ / 2 - g[u] / 2 + C, R = yn(j, w, $), M = a;
      n.modifiersData[o] = (t = {}, t[M] = R, t.centerOffset = R - w, t);
    }
  }
  function Cl(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || ys(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Sl = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: wl,
    effect: Cl,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function en(e) {
    return e.split("-")[1];
  }
  var jl = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Rl(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Qt(n * r) / r || 0,
      y: Qt(o * r) / r || 0
    };
  }
  function br(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, g = i.x, p = g === void 0 ? 0 : g, h = i.y, y = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
      x: p,
      y
    }) : {
      x: p,
      y
    };
    p = v.x, y = v.y;
    var x = i.hasOwnProperty("x"), _ = i.hasOwnProperty("y"), C = Be, j = He, $ = window;
    if (d) {
      var w = $n(n), R = "clientHeight", M = "clientWidth";
      if (w === We(n) && (w = Mt(n), gt(w).position !== "static" && l === "absolute" && (R = "scrollHeight", M = "scrollWidth")), w = w, r === He || (r === Be || r === Xe) && s === Sn) {
        j = Ke;
        var F = f && w === $ && $.visualViewport ? $.visualViewport.height : w[R];
        y -= F - o.height, y *= a ? 1 : -1;
      }
      if (r === Be || (r === He || r === Ke) && s === Sn) {
        C = Xe;
        var I = f && w === $ && $.visualViewport ? $.visualViewport.width : w[M];
        p -= I - o.width, p *= a ? 1 : -1;
      }
    }
    var P = Object.assign({
      position: l
    }, d && jl), U = u === true ? Rl({
      x: p,
      y
    }, We(n)) : {
      x: p,
      y
    };
    if (p = U.x, y = U.y, a) {
      var k;
      return Object.assign({}, P, (k = {}, k[j] = _ ? "0" : "", k[C] = x ? "0" : "", k.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", k));
    }
    return Object.assign({}, P, (t = {}, t[j] = _ ? y + "px" : "", t[C] = x ? p + "px" : "", t.transform = "", t));
  }
  function Ml(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, s = n.adaptive, i = s === void 0 ? true : s, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: st(t.placement),
      variation: en(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, br(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: i,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, br(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const $l = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Ml,
    data: {}
  };
  var Ln = {
    passive: true
  };
  function Al(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? true : r, i = o.resize, l = i === void 0 ? true : i, a = We(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Ln);
    }), l && a.addEventListener("resize", n.update, Ln), function() {
      s && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Ln);
      }), l && a.removeEventListener("resize", n.update, Ln);
    };
  }
  const Il = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Al,
    data: {}
  };
  var Pl = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Kn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Pl[t];
    });
  }
  var Fl = {
    start: "end",
    end: "start"
  };
  function vr(e) {
    return e.replace(/start|end/g, function(t) {
      return Fl[t];
    });
  }
  function er(e) {
    var t = We(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function tr(e) {
    return Zt(Mt(e)).left + er(e).scrollLeft;
  }
  function zl(e, t) {
    var n = We(e), o = Mt(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, l = 0, a = 0;
    if (r) {
      s = r.width, i = r.height;
      var d = ms();
      (d || !d && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: s,
      height: i,
      x: l + tr(e),
      y: a
    };
  }
  function Tl(e) {
    var t, n = Mt(e), o = er(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ot(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Ot(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + tr(e), a = -o.scrollTop;
    return gt(r || n).direction === "rtl" && (l += Ot(n.clientWidth, r ? r.clientWidth : 0) - s), {
      width: s,
      height: i,
      x: l,
      y: a
    };
  }
  function nr(e) {
    var t = gt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function _s(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(it(e)) >= 0 ? e.ownerDocument.body : Je(e) && nr(e) ? e : _s(lo(e));
  }
  function bn(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = _s(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = We(o), i = r ? [
      s
    ].concat(s.visualViewport || [], nr(o) ? o : []) : o, l = t.concat(i);
    return r ? l : l.concat(bn(lo(i)));
  }
  function zo(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Dl(e, t) {
    var n = Zt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function xr(e, t, n) {
    return t === gs ? zo(zl(e, n)) : Nt(t) ? Dl(t, n) : zo(Tl(Mt(e)));
  }
  function El(e) {
    var t = bn(lo(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(gt(e).position) >= 0, o = n && Je(e) ? $n(e) : e;
    return Nt(o) ? t.filter(function(r) {
      return Nt(r) && ys(r, o) && it(r) !== "body";
    }) : [];
  }
  function kl(e, t, n, o) {
    var r = t === "clippingParents" ? El(e) : [].concat(t), s = [].concat(r, [
      n
    ]), i = s[0], l = s.reduce(function(a, d) {
      var u = xr(e, d, o);
      return a.top = Ot(u.top, a.top), a.right = no(u.right, a.right), a.bottom = no(u.bottom, a.bottom), a.left = Ot(u.left, a.left), a;
    }, xr(e, i, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function ws(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? st(o) : null, s = o ? en(o) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case He:
        a = {
          x: i,
          y: t.y - n.height
        };
        break;
      case Ke:
        a = {
          x: i,
          y: t.y + t.height
        };
        break;
      case Xe:
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
    var d = r ? Zo(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (s) {
        case Xt:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case Sn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function jn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, a = l === void 0 ? ol : l, d = n.rootBoundary, u = d === void 0 ? gs : d, f = n.elementContext, g = f === void 0 ? on : f, p = n.altBoundary, h = p === void 0 ? false : p, y = n.padding, v = y === void 0 ? 0 : y, x = vs(typeof v != "number" ? v : xs(v, Mn)), _ = g === on ? rl : on, C = e.rects.popper, j = e.elements[h ? _ : g], $ = kl(Nt(j) ? j : j.contextElement || Mt(e.elements.popper), a, u, i), w = Zt(e.elements.reference), R = ws({
      reference: w,
      element: C,
      placement: r
    }), M = zo(Object.assign({}, C, R)), F = g === on ? M : w, I = {
      top: $.top - F.top + x.top,
      bottom: F.bottom - $.bottom + x.bottom,
      left: $.left - F.left + x.left,
      right: F.right - $.right + x.right
    }, P = e.modifiersData.offset;
    if (g === on && P) {
      var U = P[r];
      Object.keys(I).forEach(function(k) {
        var W = [
          Xe,
          Ke
        ].indexOf(k) >= 0 ? 1 : -1, Y = [
          He,
          Ke
        ].indexOf(k) >= 0 ? "y" : "x";
        I[k] += U[Y] * W;
      });
    }
    return I;
  }
  function Ol(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? hs : a, u = en(o), f = u ? l ? mr : mr.filter(function(h) {
      return en(h) === u;
    }) : Mn, g = f.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = f);
    var p = g.reduce(function(h, y) {
      return h[y] = jn(e, {
        placement: y,
        boundary: r,
        rootBoundary: s,
        padding: i
      })[st(y)], h;
    }, {});
    return Object.keys(p).sort(function(h, y) {
      return p[h] - p[y];
    });
  }
  function Nl(e) {
    if (st(e) === Ko) return [];
    var t = Kn(e);
    return [
      vr(e),
      t,
      vr(t)
    ];
  }
  function Ll(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, s = r === void 0 ? true : r, i = n.altAxis, l = i === void 0 ? true : i, a = n.fallbackPlacements, d = n.padding, u = n.boundary, f = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, y = n.allowedAutoPlacements, v = t.options.placement, x = st(v), _ = x === v, C = a || (_ || !h ? [
        Kn(v)
      ] : Nl(v)), j = [
        v
      ].concat(C).reduce(function(ue, fe) {
        return ue.concat(st(fe) === Ko ? Ol(t, {
          placement: fe,
          boundary: u,
          rootBoundary: f,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: y
        }) : fe);
      }, []), $ = t.rects.reference, w = t.rects.popper, R = /* @__PURE__ */ new Map(), M = true, F = j[0], I = 0; I < j.length; I++) {
        var P = j[I], U = st(P), k = en(P) === Xt, W = [
          He,
          Ke
        ].indexOf(U) >= 0, Y = W ? "width" : "height", q = jn(t, {
          placement: P,
          boundary: u,
          rootBoundary: f,
          altBoundary: g,
          padding: d
        }), E = W ? k ? Xe : Be : k ? Ke : He;
        $[Y] > w[Y] && (E = Kn(E));
        var S = Kn(E), z = [];
        if (s && z.push(q[U] <= 0), l && z.push(q[E] <= 0, q[S] <= 0), z.every(function(ue) {
          return ue;
        })) {
          F = P, M = false;
          break;
        }
        R.set(P, z);
      }
      if (M) for (var O = h ? 3 : 1, H = function(fe) {
        var N = j.find(function(ae) {
          var te = R.get(ae);
          if (te) return te.slice(0, fe).every(function(X) {
            return X;
          });
        });
        if (N) return F = N, "break";
      }, Z = O; Z > 0; Z--) {
        var Q = H(Z);
        if (Q === "break") break;
      }
      t.placement !== F && (t.modifiersData[o]._skip = true, t.placement = F, t.reset = true);
    }
  }
  const Hl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Ll,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function _r(e, t, n) {
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
  function wr(e) {
    return [
      He,
      Xe,
      Ke,
      Be
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function Bl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = jn(t, {
      elementContext: "reference"
    }), l = jn(t, {
      altBoundary: true
    }), a = _r(i, o), d = _r(l, r, s), u = wr(a), f = wr(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": f
    });
  }
  const Vl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: Bl
  };
  function Wl(e, t, n) {
    var o = st(e), r = [
      Be,
      He
    ].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, i = s[0], l = s[1];
    return i = i || 0, l = (l || 0) * r, [
      Be,
      Xe
    ].indexOf(o) >= 0 ? {
      x: l,
      y: i
    } : {
      x: i,
      y: l
    };
  }
  function Gl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [
      0,
      0
    ] : r, i = hs.reduce(function(u, f) {
      return u[f] = Wl(f, t.rects, s), u;
    }, {}), l = i[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = i;
  }
  const Ul = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: Gl
  };
  function ql(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = ws({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const Yl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: ql,
    data: {}
  };
  function Jl(e) {
    return e === "x" ? "y" : "x";
  }
  function Kl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? true : r, i = n.altAxis, l = i === void 0 ? false : i, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, f = n.padding, g = n.tether, p = g === void 0 ? true : g, h = n.tetherOffset, y = h === void 0 ? 0 : h, v = jn(t, {
      boundary: a,
      rootBoundary: d,
      padding: f,
      altBoundary: u
    }), x = st(t.placement), _ = en(t.placement), C = !_, j = Zo(x), $ = Jl(j), w = t.modifiersData.popperOffsets, R = t.rects.reference, M = t.rects.popper, F = typeof y == "function" ? y(Object.assign({}, t.rects, {
      placement: t.placement
    })) : y, I = typeof F == "number" ? {
      mainAxis: F,
      altAxis: F
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, F), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
      x: 0,
      y: 0
    };
    if (w) {
      if (s) {
        var k, W = j === "y" ? He : Be, Y = j === "y" ? Ke : Xe, q = j === "y" ? "height" : "width", E = w[j], S = E + v[W], z = E - v[Y], O = p ? -M[q] / 2 : 0, H = _ === Xt ? R[q] : M[q], Z = _ === Xt ? -M[q] : -R[q], Q = t.elements.arrow, ue = p && Q ? Qo(Q) : {
          width: 0,
          height: 0
        }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bs(), N = fe[W], ae = fe[Y], te = yn(0, R[q], ue[q]), X = C ? R[q] / 2 - O - te - N - I.mainAxis : H - te - N - I.mainAxis, ze = C ? -R[q] / 2 + O + te + ae + I.mainAxis : Z + te + ae + I.mainAxis, Ae = t.elements.arrow && $n(t.elements.arrow), ge = Ae ? j === "y" ? Ae.clientTop || 0 : Ae.clientLeft || 0 : 0, Me = (k = P == null ? void 0 : P[j]) != null ? k : 0, we = E + X - Me - ge, ht = E + ze - Me, $t = yn(p ? no(S, we) : S, E, p ? Ot(z, ht) : z);
        w[j] = $t, U[j] = $t - E;
      }
      if (l) {
        var lt, mt = j === "x" ? He : Be, Qe = j === "x" ? Ke : Xe, $e = w[$], Ee = $ === "y" ? "height" : "width", At = $e + v[mt], yt = $e - v[Qe], bt = [
          He,
          Be
        ].indexOf(x) !== -1, vt = (lt = P == null ? void 0 : P[$]) != null ? lt : 0, It = bt ? At : $e - R[Ee] - M[Ee] - vt + I.altAxis, xt = bt ? $e + R[Ee] + M[Ee] - vt - I.altAxis : yt, Ht = p && bt ? xl(It, $e, xt) : yn(p ? It : At, $e, p ? xt : yt);
        w[$] = Ht, U[$] = Ht - $e;
      }
      t.modifiersData[o] = U;
    }
  }
  const Xl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: Kl,
    requiresIfExists: [
      "offset"
    ]
  };
  function Ql(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Zl(e) {
    return e === We(e) || !Je(e) ? er(e) : Ql(e);
  }
  function ea(e) {
    var t = e.getBoundingClientRect(), n = Qt(t.width) / e.offsetWidth || 1, o = Qt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function ta(e, t, n) {
    n === void 0 && (n = false);
    var o = Je(t), r = Je(t) && ea(t), s = Mt(t), i = Zt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((it(t) !== "body" || nr(s)) && (l = Zl(t)), Je(t) ? (a = Zt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : s && (a.x = tr(s))), {
      x: i.left + l.scrollLeft - a.x,
      y: i.top + l.scrollTop - a.y,
      width: i.width,
      height: i.height
    };
  }
  function na(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(s) {
      t.set(s.name, s);
    });
    function r(s) {
      n.add(s.name);
      var i = [].concat(s.requires || [], s.requiresIfExists || []);
      i.forEach(function(l) {
        if (!n.has(l)) {
          var a = t.get(l);
          a && r(a);
        }
      }), o.push(s);
    }
    return e.forEach(function(s) {
      n.has(s.name) || r(s);
    }), o;
  }
  function oa(e) {
    var t = na(e);
    return gl.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function ra(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function sa(e) {
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
  var Cr = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Sr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function ia(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Cr : r;
    return function(l, a, d) {
      d === void 0 && (d = s);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Cr, s),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, f = [], g = false, p = {
        state: u,
        setOptions: function(x) {
          var _ = typeof x == "function" ? x(u.options) : x;
          y(), u.options = Object.assign({}, s, u.options, _), u.scrollParents = {
            reference: Nt(l) ? bn(l) : l.contextElement ? bn(l.contextElement) : [],
            popper: bn(a)
          };
          var C = oa(sa([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = C.filter(function(j) {
            return j.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!g) {
            var x = u.elements, _ = x.reference, C = x.popper;
            if (Sr(_, C)) {
              u.rects = {
                reference: ta(_, $n(C), u.options.strategy === "fixed"),
                popper: Qo(C)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
                return u.modifiersData[I.name] = Object.assign({}, I.data);
              });
              for (var j = 0; j < u.orderedModifiers.length; j++) {
                if (u.reset === true) {
                  u.reset = false, j = -1;
                  continue;
                }
                var $ = u.orderedModifiers[j], w = $.fn, R = $.options, M = R === void 0 ? {} : R, F = $.name;
                typeof w == "function" && (u = w({
                  state: u,
                  options: M,
                  name: F,
                  instance: p
                }) || u);
              }
            }
          }
        },
        update: ra(function() {
          return new Promise(function(v) {
            p.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          y(), g = true;
        }
      };
      if (!Sr(l, a)) return p;
      p.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        u.orderedModifiers.forEach(function(v) {
          var x = v.name, _ = v.options, C = _ === void 0 ? {} : _, j = v.effect;
          if (typeof j == "function") {
            var $ = j({
              state: u,
              name: x,
              instance: p,
              options: C
            }), w = function() {
            };
            f.push($ || w);
          }
        });
      }
      function y() {
        f.forEach(function(v) {
          return v();
        }), f = [];
      }
      return p;
    };
  }
  var la = [
    Il,
    Yl,
    $l,
    yl,
    Ul,
    Hl,
    Xl,
    Sl,
    Vl
  ], aa = ia({
    defaultModifiers: la
  });
  function ca(e) {
    return ve("MuiPopper", e);
  }
  xe("MuiPopper", [
    "root"
  ]);
  function ua(e, t) {
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
  function To(e) {
    return typeof e == "function" ? e() : e;
  }
  function da(e) {
    return e.nodeType !== void 0;
  }
  const pa = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, ca, t);
  }, fa = {}, ga = m.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: s, disablePortal: i, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: f, slotProps: g = {}, slots: p = {}, TransitionProps: h, ownerState: y, ...v } = t, x = m.useRef(null), _ = Kt(x, n), C = m.useRef(null), j = Kt(C, f), $ = m.useRef(j);
    Ro(() => {
      $.current = j;
    }, [
      j
    ]), m.useImperativeHandle(f, () => C.current, []);
    const w = ua(d, s), [R, M] = m.useState(w), [F, I] = m.useState(To(o));
    m.useEffect(() => {
      C.current && C.current.forceUpdate();
    }), m.useEffect(() => {
      o && I(To(o));
    }, [
      o
    ]), Ro(() => {
      if (!F || !a) return;
      const Y = (S) => {
        M(S.placement);
      };
      let q = [
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
            Y(S);
          }
        }
      ];
      l != null && (q = q.concat(l)), u && u.modifiers != null && (q = q.concat(u.modifiers));
      const E = aa(F, x.current, {
        placement: w,
        ...u,
        modifiers: q
      });
      return $.current(E), () => {
        E.destroy(), $.current(null);
      };
    }, [
      F,
      i,
      l,
      a,
      u,
      w
    ]);
    const P = {
      placement: R
    };
    h !== null && (P.TransitionProps = h);
    const U = pa(t), k = p.root ?? "div", W = ei({
      elementType: k,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: _
      },
      ownerState: t,
      className: U.root
    });
    return c.jsx(k, {
      ...W,
      children: typeof r == "function" ? r(P) : r
    });
  }), ha = m.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: s, direction: i = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: f = "bottom", popperOptions: g = fa, popperRef: p, style: h, transition: y = false, slotProps: v = {}, slots: x = {}, ..._ } = t, [C, j] = m.useState(true), $ = () => {
      j(false);
    }, w = () => {
      j(true);
    };
    if (!a && !u && (!y || C)) return null;
    let R;
    if (s) R = s;
    else if (o) {
      const I = To(o);
      R = I && da(I) ? hn(I).body : hn(null).body;
    }
    const M = !u && a && (!y || C) ? "none" : void 0, F = y ? {
      in: u,
      onEnter: $,
      onExited: w
    } : void 0;
    return c.jsx(Zs, {
      disablePortal: l,
      container: R,
      children: c.jsx(ga, {
        anchorEl: o,
        direction: i,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: y ? !C : u,
        placement: f,
        popperOptions: g,
        popperRef: p,
        slotProps: v,
        slots: x,
        ..._,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: M,
          ...h
        },
        TransitionProps: F,
        children: r
      })
    });
  }), ma = J(ha, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Cs = m.forwardRef(function(t, n) {
    const o = Uo(), r = ye({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: s, component: i, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: f, modifiers: g, open: p, placement: h, popperOptions: y, popperRef: v, transition: x, slots: _, slotProps: C, ...j } = r, $ = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root), w = {
      anchorEl: s,
      container: d,
      disablePortal: u,
      keepMounted: f,
      modifiers: g,
      open: p,
      placement: h,
      popperOptions: y,
      popperRef: v,
      transition: x,
      ...j
    };
    return c.jsx(ma, {
      as: i,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: $
      },
      slotProps: C ?? a,
      ...w,
      ref: n
    });
  }), ya = le(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function ba(e) {
    return ve("MuiChip", e);
  }
  const ee = xe("MuiChip", [
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
  ]), va = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: s, onDelete: i, clickable: l, variant: a } = e, d = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${G(o)}`,
        `color${G(r)}`,
        l && "clickable",
        l && `clickableColor${G(r)}`,
        i && "deletable",
        i && `deletableColor${G(r)}`,
        `${a}${G(r)}`
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
        `deleteIcon${G(a)}Color${G(r)}`
      ]
    };
    return be(d, ba, t);
  }, xa = J("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: s, onDelete: i, size: l, variant: a } = n;
      return [
        {
          [`& .${ee.avatar}`]: t.avatar
        },
        {
          [`& .${ee.avatar}`]: t[`avatar${G(l)}`]
        },
        {
          [`& .${ee.avatar}`]: t[`avatarColor${G(o)}`]
        },
        {
          [`& .${ee.icon}`]: t.icon
        },
        {
          [`& .${ee.icon}`]: t[`icon${G(l)}`]
        },
        {
          [`& .${ee.icon}`]: t[`iconColor${G(r)}`]
        },
        {
          [`& .${ee.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${ee.deleteIcon}`]: t[`deleteIcon${G(l)}`]
        },
        {
          [`& .${ee.deleteIcon}`]: t[`deleteIconColor${G(o)}`]
        },
        {
          [`& .${ee.deleteIcon}`]: t[`deleteIcon${G(a)}Color${G(o)}`]
        },
        t.root,
        t[`size${G(l)}`],
        t[`color${G(o)}`],
        s && t.clickable,
        s && o !== "default" && t[`clickableColor${G(o)})`],
        i && t.deletable,
        i && o !== "default" && t[`deletableColor${G(o)}`],
        t[a],
        t[`${a}${G(o)}`]
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
      [`&.${ee.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${ee.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${ee.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${ee.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${ee.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${ee.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${ee.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Fe(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Fe(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${ee.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${ee.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(Dt([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${ee.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Fe(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${ee.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${ee.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${ee.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Dt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${ee.focusVisible}`]: {
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${ee.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Dt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${ee.focusVisible}`]: {
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
            [`&.${ee.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${ee.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${ee.avatar}`]: {
              marginLeft: 4
            },
            [`& .${ee.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${ee.icon}`]: {
              marginLeft: 4
            },
            [`& .${ee.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${ee.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${ee.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7)}`,
            [`&.${ee.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Fe(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${ee.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Fe(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${ee.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), _a = J("span", {
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
  function jr(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const ft = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: s, clickable: i, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: f, label: g, onClick: p, onDelete: h, onKeyDown: y, onKeyUp: v, size: x = "medium", variant: _ = "filled", tabIndex: C, skipFocusWhenDisabled: j = false, ...$ } = o, w = m.useRef(null), R = Kt(w, n), M = (z) => {
      z.stopPropagation(), h && h(z);
    }, F = (z) => {
      z.currentTarget === z.target && jr(z) && z.preventDefault(), y && y(z);
    }, I = (z) => {
      z.currentTarget === z.target && h && jr(z) && h(z), v && v(z);
    }, P = i !== false && p ? true : i, U = P || h ? Zn : a || "div", k = {
      ...o,
      component: U,
      disabled: u,
      size: x,
      color: l,
      iconColor: m.isValidElement(f) && f.props.color || l,
      onDelete: !!h,
      clickable: P,
      variant: _
    }, W = va(k), Y = U === Zn ? {
      component: a || "div",
      focusVisibleClassName: W.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let q = null;
    h && (q = d && m.isValidElement(d) ? m.cloneElement(d, {
      className: ie(d.props.className, W.deleteIcon),
      onClick: M
    }) : c.jsx(ya, {
      className: ie(W.deleteIcon),
      onClick: M
    }));
    let E = null;
    r && m.isValidElement(r) && (E = m.cloneElement(r, {
      className: ie(W.avatar, r.props.className)
    }));
    let S = null;
    return f && m.isValidElement(f) && (S = m.cloneElement(f, {
      className: ie(W.icon, f.props.className)
    })), c.jsxs(xa, {
      as: U,
      className: ie(W.root, s),
      disabled: P && u ? true : void 0,
      onClick: p,
      onKeyDown: F,
      onKeyUp: I,
      ref: R,
      tabIndex: j && u ? -1 : C,
      ownerState: k,
      ...Y,
      ...$,
      children: [
        E || S,
        c.jsx(_a, {
          className: ie(W.label),
          ownerState: k,
          children: g
        }),
        q
      ]
    });
  });
  function wa(e) {
    return ve("MuiCard", e);
  }
  xe("MuiCard", [
    "root"
  ]);
  const Ca = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, wa, t);
  }, Sa = J(et, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), ja = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: s = false, ...i } = o, l = {
      ...o,
      raised: s
    }, a = Ca(l);
    return c.jsx(Sa, {
      className: ie(a.root, r),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function Rr(e) {
    return e.substring(2).toLowerCase();
  }
  function Ra(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Ma(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: s = "onTouchEnd" } = e, i = m.useRef(false), l = m.useRef(null), a = m.useRef(false), d = m.useRef(false);
    m.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = Kt(as(t), l), f = wn((h) => {
      const y = d.current;
      d.current = false;
      const v = hn(l.current);
      if (!a.current || !l.current || "clientX" in h && Ra(h, v)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !v.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !y) && r(h);
    }), g = (h) => (y) => {
      d.current = true;
      const v = t.props[h];
      v && v(y);
    }, p = {
      ref: u
    };
    return s !== false && (p[s] = g(s)), m.useEffect(() => {
      if (s !== false) {
        const h = Rr(s), y = hn(l.current), v = () => {
          i.current = true;
        };
        return y.addEventListener(h, f), y.addEventListener("touchmove", v), () => {
          y.removeEventListener(h, f), y.removeEventListener("touchmove", v);
        };
      }
    }, [
      f,
      s
    ]), o !== false && (p[o] = g(o)), m.useEffect(() => {
      if (o !== false) {
        const h = Rr(o), y = hn(l.current);
        return y.addEventListener(h, f), () => {
          y.removeEventListener(h, f);
        };
      }
    }, [
      f,
      o
    ]), m.cloneElement(t, p);
  }
  function $a(e) {
    return ve("MuiDialogActions", e);
  }
  xe("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const Aa = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return be({
      root: [
        "root",
        !n && "spacing"
      ]
    }, $a, t);
  }, Ia = J("div", {
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
  }), or = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: s = false, ...i } = o, l = {
      ...o,
      disableSpacing: s
    }, a = Aa(l);
    return c.jsx(Ia, {
      className: ie(a.root, r),
      ownerState: l,
      ref: n,
      ...i
    });
  });
  function Pa(e) {
    return ve("MuiDialogContentText", e);
  }
  xe("MuiDialogContentText", [
    "root"
  ]);
  const Fa = (e) => {
    const { classes: t } = e, o = be({
      root: [
        "root"
      ]
    }, Pa, t);
    return {
      ...t,
      ...o
    };
  }, za = J(T, {
    shouldForwardProp: (e) => ti(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Ta = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiDialogContentText"
    }), { children: r, className: s, ...i } = o, l = Fa(i);
    return c.jsx(za, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: i,
      className: ie(l.root, s),
      ...o,
      classes: l
    });
  }), Da = ps({
    themeId: ni
  });
  function Ea(e) {
    return ve("MuiInputAdornment", e);
  }
  const Mr = xe("MuiInputAdornment", [
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
  var $r;
  const ka = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${G(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, Oa = (e) => {
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
    return be(l, Ea, t);
  }, Na = J("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: ka
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
          [`&.${Mr.positionStart}&:not(.${Mr.hiddenLabel})`]: {
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
  }))), Ss = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...f } = o, g = oi() || {};
    let p = u;
    u && g.variant, g && !p && (p = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: p
    }, y = Oa(h);
    return c.jsx(ri.Provider, {
      value: null,
      children: c.jsx(Na, {
        as: i,
        ownerState: h,
        className: ie(y.root, s),
        ref: n,
        ...f,
        children: typeof r == "string" && !a ? c.jsx(T, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(m.Fragment, {
          children: [
            d === "start" ? $r || ($r = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), La = (e) => {
    const { alignItems: t, classes: n } = e;
    return be({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, Ci, n);
  }, Ha = J("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(pe(({ theme: e }) => ({
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
  }))), rn = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiListItemIcon"
    }), { className: r, ...s } = o, i = m.useContext(si), l = {
      ...o,
      alignItems: i.alignItems
    }, a = La(l);
    return c.jsx(Ha, {
      className: ie(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  }), Ba = le(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Va = le(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Wa(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: s } = e, i = qt();
    m.useEffect(() => {
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
    const l = wn((x, _) => {
      o == null ? void 0 : o(x, _);
    }), a = wn((x) => {
      !o || x == null || i.start(x, () => {
        l(null, "timeout");
      });
    });
    m.useEffect(() => (r && a(t), i.clear), [
      r,
      t,
      a,
      i
    ]);
    const d = (x) => {
      o == null ? void 0 : o(x, "clickaway");
    }, u = i.clear, f = m.useCallback(() => {
      t != null && a(s ?? t * 0.5);
    }, [
      t,
      s,
      a
    ]), g = (x) => (_) => {
      const C = x.onBlur;
      C == null ? void 0 : C(_), f();
    }, p = (x) => (_) => {
      const C = x.onFocus;
      C == null ? void 0 : C(_), u();
    }, h = (x) => (_) => {
      const C = x.onMouseEnter;
      C == null ? void 0 : C(_), u();
    }, y = (x) => (_) => {
      const C = x.onMouseLeave;
      C == null ? void 0 : C(_), f();
    };
    return m.useEffect(() => {
      if (!n && r) return window.addEventListener("focus", f), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", u);
      };
    }, [
      n,
      r,
      f,
      u
    ]), {
      getRootProps: (x = {}) => {
        const _ = {
          ...dr(e),
          ...dr(x)
        };
        return {
          role: "presentation",
          ...x,
          ..._,
          onBlur: g(_),
          onFocus: p(_),
          onMouseEnter: h(_),
          onMouseLeave: y(_)
        };
      },
      onClickAway: d
    };
  }
  function Ga(e) {
    return ve("MuiSnackbarContent", e);
  }
  xe("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const Ua = (e) => {
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
    }, Ga, t);
  }, qa = J(et, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(pe(({ theme: e }) => {
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
  })), Ya = J("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), Ja = J("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Ka = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: s, message: i, role: l = "alert", ...a } = o, d = o, u = Ua(d);
    return c.jsxs(qa, {
      role: l,
      square: true,
      elevation: 6,
      className: ie(u.root, s),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(Ya, {
          className: u.message,
          ownerState: d,
          children: i
        }),
        r ? c.jsx(Ja, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function Xa(e) {
    return ve("MuiSnackbar", e);
  }
  xe("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const Qa = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${G(n.vertical)}${G(n.horizontal)}`
      ]
    };
    return be(o, Xa, t);
  }, Za = J("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${G(n.anchorOrigin.vertical)}${G(n.anchorOrigin.horizontal)}`]
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
  }))), ec = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiSnackbar"
    }), r = tn(), s = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: f, ClickAwayListenerProps: g, ContentProps: p, disableWindowBlurListener: h = false, message: y, onBlur: v, onClose: x, onFocus: _, onMouseEnter: C, onMouseLeave: j, open: $, resumeHideDuration: w, slots: R = {}, slotProps: M = {}, TransitionComponent: F, transitionDuration: I = s, TransitionProps: { onEnter: P, onExited: U, ...k } = {}, ...W } = o, Y = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: F,
      transitionDuration: I
    }, q = Qa(Y), { getRootProps: E, onClickAway: S } = Wa({
      ...Y
    }), [z, O] = m.useState(true), H = (Me) => {
      O(true), U && U(Me);
    }, Z = (Me, we) => {
      O(false), P && P(Me, we);
    }, Q = {
      slots: {
        transition: F,
        ...R
      },
      slotProps: {
        content: p,
        clickAwayListener: g,
        transition: k,
        ...M
      }
    }, [ue, fe] = ce("root", {
      ref: n,
      className: [
        q.root,
        f
      ],
      elementType: Za,
      getSlotProps: E,
      externalForwardedProps: {
        ...Q,
        ...W
      },
      ownerState: Y
    }), [N, { ownerState: ae, ...te }] = ce("clickAwayListener", {
      elementType: Ma,
      externalForwardedProps: Q,
      getSlotProps: (Me) => ({
        onClickAway: (...we) => {
          var _a2;
          (_a2 = Me.onClickAway) == null ? void 0 : _a2.call(Me, ...we), S(...we);
        }
      }),
      ownerState: Y
    }), [X, ze] = ce("content", {
      elementType: Ka,
      shouldForwardComponentProp: true,
      externalForwardedProps: Q,
      additionalProps: {
        message: y,
        action: i
      },
      ownerState: Y
    }), [Ae, ge] = ce("transition", {
      elementType: cs,
      externalForwardedProps: Q,
      getSlotProps: (Me) => ({
        onEnter: (...we) => {
          var _a2;
          (_a2 = Me.onEnter) == null ? void 0 : _a2.call(Me, ...we), Z(...we);
        },
        onExited: (...we) => {
          var _a2;
          (_a2 = Me.onExited) == null ? void 0 : _a2.call(Me, ...we), H(...we);
        }
      }),
      additionalProps: {
        appear: true,
        in: $,
        timeout: I,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: Y
    });
    return !$ && z ? null : c.jsx(N, {
      ...te,
      ...R.clickAwayListener && {
        ownerState: ae
      },
      children: c.jsx(ue, {
        ...fe,
        children: c.jsx(Ae, {
          ...ge,
          children: u || c.jsx(X, {
            ...ze
          })
        })
      })
    });
  });
  function tc(e) {
    return ve("MuiTooltip", e);
  }
  const _e = xe("MuiTooltip", [
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
  function nc(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const oc = (e) => {
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
    return be(i, tc, t);
  }, rc = J(Cs, {
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
          [`&[data-popper-placement*="bottom"] .${_e.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${_e.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${_e.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${_e.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${_e.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${_e.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${_e.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${_e.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), sc = J("div", {
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
  })(pe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Fe(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${_e.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${_e.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${_e.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${_e.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${nc(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${_e.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${_e.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${_e.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${_e.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${_e.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${_e.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${_e.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${_e.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${_e.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${_e.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), ic = J("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(pe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Fe(e.palette.grey[700], 0.9),
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
  let Hn = false;
  const Ar = new li();
  let sn = {
    x: 0,
    y: 0
  };
  function Bn(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Le = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: s, classes: i, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: f = false, disableInteractive: g = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: y = 0, enterTouchDelay: v = 700, followCursor: x = false, id: _, leaveDelay: C = 0, leaveTouchDelay: j = 1500, onClose: $, onOpen: w, open: R, placement: M = "bottom", PopperComponent: F, PopperProps: I = {}, slotProps: P = {}, slots: U = {}, title: k, TransitionComponent: W, TransitionProps: Y, ...q } = o, E = m.isValidElement(s) ? s : c.jsx("span", {
      children: s
    }), S = tn(), z = Uo(), [O, H] = m.useState(), [Z, Q] = m.useState(null), ue = m.useRef(false), fe = g || x, N = qt(), ae = qt(), te = qt(), X = qt(), [ze, Ae] = ls({
      controlled: R,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let ge = ze;
    const Me = Ao(_), we = m.useRef(), ht = wn(() => {
      we.current !== void 0 && (document.body.style.WebkitUserSelect = we.current, we.current = void 0), X.clear();
    });
    m.useEffect(() => ht, [
      ht
    ]);
    const $t = (A) => {
      Ar.clear(), Hn = true, Ae(true), w && !ge && w(A);
    }, lt = wn((A) => {
      Ar.start(800 + C, () => {
        Hn = false;
      }), Ae(false), $ && ge && $(A), N.start(S.transitions.duration.shortest, () => {
        ue.current = false;
      });
    }), mt = (A) => {
      ue.current && A.type !== "touchstart" || (O && O.removeAttribute("title"), ae.clear(), te.clear(), h || Hn && y ? ae.start(Hn ? y : h, () => {
        $t(A);
      }) : $t(A));
    }, Qe = (A) => {
      ae.clear(), te.start(C, () => {
        lt(A);
      });
    }, [, $e] = m.useState(false), Ee = (A) => {
      pr(A.target) || ($e(false), Qe(A));
    }, At = (A) => {
      O || H(A.currentTarget), pr(A.target) && ($e(true), mt(A));
    }, yt = (A) => {
      ue.current = true;
      const K = E.props;
      K.onTouchStart && K.onTouchStart(A);
    }, bt = (A) => {
      yt(A), te.clear(), N.clear(), ht(), we.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", X.start(v, () => {
        document.body.style.WebkitUserSelect = we.current, mt(A);
      });
    }, vt = (A) => {
      E.props.onTouchEnd && E.props.onTouchEnd(A), ht(), te.start(j, () => {
        lt(A);
      });
    };
    m.useEffect(() => {
      if (!ge) return;
      function A(K) {
        K.key === "Escape" && lt(K);
      }
      return document.addEventListener("keydown", A), () => {
        document.removeEventListener("keydown", A);
      };
    }, [
      lt,
      ge
    ]);
    const It = Kt(as(E), H, n);
    !k && k !== 0 && (ge = false);
    const xt = m.useRef(), Ht = (A) => {
      const K = E.props;
      K.onMouseMove && K.onMouseMove(A), sn = {
        x: A.clientX,
        y: A.clientY
      }, xt.current && xt.current.update();
    }, Pt = {}, nn = typeof k == "string";
    d ? (Pt.title = !ge && nn && !f ? k : null, Pt["aria-describedby"] = ge ? Me : null) : (Pt["aria-label"] = nn ? k : null, Pt["aria-labelledby"] = ge && !nn ? Me : null);
    const ke = {
      ...Pt,
      ...q,
      ...E.props,
      className: ie(q.className, E.props.className),
      onTouchStart: yt,
      ref: It,
      ...x ? {
        onMouseMove: Ht
      } : {}
    }, tt = {};
    p || (ke.onTouchStart = bt, ke.onTouchEnd = vt), f || (ke.onMouseOver = Bn(mt, ke.onMouseOver), ke.onMouseLeave = Bn(Qe, ke.onMouseLeave), fe || (tt.onMouseOver = mt, tt.onMouseLeave = Qe)), u || (ke.onFocus = Bn(At, ke.onFocus), ke.onBlur = Bn(Ee, ke.onBlur), fe || (tt.onFocus = At, tt.onBlur = Ee));
    const Ue = {
      ...o,
      isRtl: z,
      arrow: r,
      disableInteractive: fe,
      placement: M,
      PopperComponentProp: F,
      touch: ue.current
    }, _t = typeof P.popper == "function" ? P.popper(Ue) : P.popper, Pn = m.useMemo(() => {
      var _a2, _b;
      let A = [
        {
          name: "arrow",
          enabled: !!Z,
          options: {
            element: Z,
            padding: 4
          }
        }
      ];
      return ((_a2 = I.popperOptions) == null ? void 0 : _a2.modifiers) && (A = A.concat(I.popperOptions.modifiers)), ((_b = _t == null ? void 0 : _t.popperOptions) == null ? void 0 : _b.modifiers) && (A = A.concat(_t.popperOptions.modifiers)), {
        ...I.popperOptions,
        ..._t == null ? void 0 : _t.popperOptions,
        modifiers: A
      };
    }, [
      Z,
      I.popperOptions,
      _t == null ? void 0 : _t.popperOptions
    ]), Bt = oc(Ue), Vt = typeof P.transition == "function" ? P.transition(Ue) : P.transition, Ft = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? W,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...U
      },
      slotProps: {
        arrow: P.arrow ?? a.arrow,
        popper: {
          ...I,
          ..._t ?? a.popper
        },
        tooltip: P.tooltip ?? a.tooltip,
        transition: {
          ...Y,
          ...Vt ?? a.transition
        }
      }
    }, [po, ar] = ce("popper", {
      elementType: rc,
      externalForwardedProps: Ft,
      ownerState: Ue,
      className: ie(Bt.popper, I == null ? void 0 : I.className)
    }), [zt, fo] = ce("transition", {
      elementType: cs,
      externalForwardedProps: Ft,
      ownerState: Ue
    }), [Fn, zn] = ce("tooltip", {
      elementType: sc,
      className: Bt.tooltip,
      externalForwardedProps: Ft,
      ownerState: Ue
    }), [Tn, D] = ce("arrow", {
      elementType: ic,
      className: Bt.arrow,
      externalForwardedProps: Ft,
      ownerState: Ue,
      ref: Q
    });
    return c.jsxs(m.Fragment, {
      children: [
        m.cloneElement(E, ke),
        c.jsx(po, {
          as: F ?? Cs,
          placement: M,
          anchorEl: x ? {
            getBoundingClientRect: () => ({
              top: sn.y,
              left: sn.x,
              right: sn.x,
              bottom: sn.y,
              width: 0,
              height: 0
            })
          } : O,
          popperRef: xt,
          open: O ? ge : false,
          id: Me,
          transition: true,
          ...tt,
          ...ar,
          popperOptions: Pn,
          children: ({ TransitionProps: A }) => c.jsx(zt, {
            timeout: S.transitions.duration.shorter,
            ...A,
            ...fo,
            children: c.jsxs(Fn, {
              ...zn,
              children: [
                k,
                r ? c.jsx(Tn, {
                  ...D
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), js = m.createContext();
  function lc(e) {
    return ve("MuiTable", e);
  }
  xe("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const ac = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return be({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, lc, t);
  }, cc = J("table", {
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
  }))), Ir = "table", uc = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTable"
    }), { className: r, component: s = Ir, padding: i = "normal", size: l = "medium", stickyHeader: a = false, ...d } = o, u = {
      ...o,
      component: s,
      padding: i,
      size: l,
      stickyHeader: a
    }, f = ac(u), g = m.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: a
    }), [
      i,
      l,
      a
    ]);
    return c.jsx(js.Provider, {
      value: g,
      children: c.jsx(cc, {
        as: s,
        role: s === Ir ? null : "table",
        ref: n,
        className: ie(f.root, r),
        ownerState: u,
        ...d
      })
    });
  }), ao = m.createContext();
  function dc(e) {
    return ve("MuiTableBody", e);
  }
  xe("MuiTableBody", [
    "root"
  ]);
  const pc = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, dc, t);
  }, fc = J("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), gc = {
    variant: "body"
  }, Pr = "tbody", hc = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: s = Pr, ...i } = o, l = {
      ...o,
      component: s
    }, a = pc(l);
    return c.jsx(ao.Provider, {
      value: gc,
      children: c.jsx(fc, {
        className: ie(a.root, r),
        as: s,
        ref: n,
        role: s === Pr ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function mc(e) {
    return ve("MuiTableCell", e);
  }
  const yc = xe("MuiTableCell", [
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
  ]), bc = (e) => {
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
    return be(l, mc, t);
  }, vc = J("td", {
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
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? $o(Fe(e.palette.divider, 1), 0.88) : Mo(Fe(e.palette.divider, 1), 0.68)}`,
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
          [`&.${yc.paddingCheckbox}`]: {
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
  }))), St = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: s, component: i, padding: l, scope: a, size: d, sortDirection: u, variant: f, ...g } = o, p = m.useContext(js), h = m.useContext(ao), y = h && h.variant === "head";
    let v;
    i ? v = i : v = y ? "th" : "td";
    let x = a;
    v === "td" ? x = void 0 : !x && y && (x = "col");
    const _ = f || h && h.variant, C = {
      ...o,
      align: r,
      component: v,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: d || (p && p.size ? p.size : "medium"),
      sortDirection: u,
      stickyHeader: _ === "head" && p && p.stickyHeader,
      variant: _
    }, j = bc(C);
    let $ = null;
    return u && ($ = u === "asc" ? "ascending" : "descending"), c.jsx(vc, {
      as: v,
      ref: n,
      className: ie(j.root, s),
      "aria-sort": $,
      scope: x,
      ownerState: C,
      ...g
    });
  });
  function xc(e) {
    return ve("MuiTableContainer", e);
  }
  xe("MuiTableContainer", [
    "root"
  ]);
  const _c = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, xc, t);
  }, wc = J("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Cc = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: s = "div", ...i } = o, l = {
      ...o,
      component: s
    }, a = _c(l);
    return c.jsx(wc, {
      ref: n,
      as: s,
      className: ie(a.root, r),
      ownerState: l,
      ...i
    });
  });
  function Sc(e) {
    return ve("MuiTableHead", e);
  }
  xe("MuiTableHead", [
    "root"
  ]);
  const jc = (e) => {
    const { classes: t } = e;
    return be({
      root: [
        "root"
      ]
    }, Sc, t);
  }, Rc = J("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Mc = {
    variant: "head"
  }, Fr = "thead", $c = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: s = Fr, ...i } = o, l = {
      ...o,
      component: s
    }, a = jc(l);
    return c.jsx(ao.Provider, {
      value: Mc,
      children: c.jsx(Rc, {
        as: s,
        className: ie(a.root, r),
        ref: n,
        role: s === Fr ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Ac(e) {
    return ve("MuiToolbar", e);
  }
  xe("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Ic = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return be({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, Ac, t);
  }, Pc = J("div", {
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
  }))), Rs = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: s = "div", disableGutters: i = false, variant: l = "regular", ...a } = o, d = {
      ...o,
      component: s,
      disableGutters: i,
      variant: l
    }, u = Ic(d);
    return c.jsx(Pc, {
      as: s,
      className: ie(u.root, r),
      ref: n,
      ownerState: d,
      ...a
    });
  }), Fc = le(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), zc = le(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Tc = m.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: f, showLastButton: g, slots: p = {}, slotProps: h = {}, ...y } = t, v = Uo(), x = (H) => {
      a(H, 0);
    }, _ = (H) => {
      a(H, d - 1);
    }, C = (H) => {
      a(H, d + 1);
    }, j = (H) => {
      a(H, Math.max(0, Math.ceil(r / u) - 1));
    }, $ = p.firstButton ?? je, w = p.lastButton ?? je, R = p.nextButton ?? je, M = p.previousButton ?? je, F = p.firstButtonIcon ?? Ba, I = p.lastButtonIcon ?? Va, P = p.nextButtonIcon ?? zc, U = p.previousButtonIcon ?? Fc, k = v ? w : $, W = v ? R : M, Y = v ? M : R, q = v ? $ : w, E = v ? h.lastButton : h.firstButton, S = v ? h.nextButton : h.previousButton, z = v ? h.previousButton : h.nextButton, O = v ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...y,
      children: [
        f && c.jsx(k, {
          onClick: x,
          disabled: s || d === 0,
          "aria-label": i("first", d),
          title: i("first", d),
          ...E,
          children: v ? c.jsx(I, {
            ...h.lastButtonIcon
          }) : c.jsx(F, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(W, {
          onClick: _,
          disabled: s || d === 0,
          color: "inherit",
          "aria-label": i("previous", d),
          title: i("previous", d),
          ...S ?? o,
          children: v ? c.jsx(P, {
            ...h.nextButtonIcon
          }) : c.jsx(U, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(Y, {
          onClick: C,
          disabled: s || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": i("next", d),
          title: i("next", d),
          ...z ?? l,
          children: v ? c.jsx(U, {
            ...h.previousButtonIcon
          }) : c.jsx(P, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(q, {
          onClick: j,
          disabled: s || d >= Math.ceil(r / u) - 1,
          "aria-label": i("last", d),
          title: i("last", d),
          ...O,
          children: v ? c.jsx(F, {
            ...h.firstButtonIcon
          }) : c.jsx(I, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Dc(e) {
    return ve("MuiTablePagination", e);
  }
  const vn = xe("MuiTablePagination", [
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
  var zr;
  const Ec = J(St, {
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
  }))), kc = J(Rs, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${vn.actions}`]: t.actions,
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
    [`& .${vn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), Oc = J("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), Nc = J("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), Lc = J(ot, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${vn.selectIcon}`]: t.selectIcon,
      [`& .${vn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${vn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), Hc = J(se, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), Bc = J("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(pe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function Vc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function Wc(e) {
    return `Go to ${e} page`;
  }
  const Gc = (e) => {
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
    }, Dc, t);
  }, Uc = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = Tc, backIconButtonProps: s, colSpan: i, component: l = St, count: a, disabled: d = false, getItemAriaLabel: u = Wc, labelDisplayedRows: f = Vc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: y, page: v, rowsPerPage: x, rowsPerPageOptions: _ = [
      10,
      25,
      50,
      100
    ], SelectProps: C = {}, showFirstButton: j = false, showLastButton: $ = false, slotProps: w = {}, slots: R = {}, ...M } = o, F = o, I = Gc(F), P = (w == null ? void 0 : w.select) ?? C, U = P.native ? "option" : Hc;
    let k;
    (l === St || l === "td") && (k = i || 1e3);
    const W = Ao(P.id), Y = Ao(P.labelId), q = () => a === -1 ? (v + 1) * x : x === -1 ? a : Math.min(a, (v + 1) * x), E = {
      slots: R,
      slotProps: w
    }, [S, z] = ce("root", {
      ref: n,
      className: I.root,
      elementType: Ec,
      externalForwardedProps: {
        ...E,
        component: l,
        ...M
      },
      ownerState: F,
      additionalProps: {
        colSpan: k
      }
    }), [O, H] = ce("toolbar", {
      className: I.toolbar,
      elementType: kc,
      externalForwardedProps: E,
      ownerState: F
    }), [Z, Q] = ce("spacer", {
      className: I.spacer,
      elementType: Oc,
      externalForwardedProps: E,
      ownerState: F
    }), [ue, fe] = ce("selectLabel", {
      className: I.selectLabel,
      elementType: Nc,
      externalForwardedProps: E,
      ownerState: F,
      additionalProps: {
        id: Y
      }
    }), [N, ae] = ce("select", {
      className: I.select,
      elementType: Lc,
      externalForwardedProps: E,
      ownerState: F
    }), [te, X] = ce("menuItem", {
      className: I.menuItem,
      elementType: U,
      externalForwardedProps: E,
      ownerState: F
    }), [ze, Ae] = ce("displayedRows", {
      className: I.displayedRows,
      elementType: Bc,
      externalForwardedProps: E,
      ownerState: F
    });
    return c.jsx(S, {
      ...z,
      children: c.jsxs(O, {
        ...H,
        children: [
          c.jsx(Z, {
            ...Q
          }),
          _.length > 1 && c.jsx(ue, {
            ...fe,
            children: g
          }),
          _.length > 1 && c.jsx(N, {
            variant: "standard",
            ...!P.variant && {
              input: zr || (zr = c.jsx(ai, {}))
            },
            value: x,
            onChange: y,
            id: W,
            labelId: Y,
            ...P,
            classes: {
              ...P.classes,
              root: ie(I.input, I.selectRoot, (P.classes || {}).root),
              select: ie(I.select, (P.classes || {}).select),
              icon: ie(I.selectIcon, (P.classes || {}).icon)
            },
            disabled: d,
            ...ae,
            children: _.map((ge) => m.createElement(te, {
              ...X,
              key: ge.label ? ge.label : ge,
              value: ge.value ? ge.value : ge
            }, ge.label ? ge.label : ge))
          }),
          c.jsx(ze, {
            ...Ae,
            children: f({
              from: a === 0 ? 0 : v * x + 1,
              to: q(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          c.jsx(r, {
            className: I.actions,
            backIconButtonProps: s,
            count: a,
            nextIconButtonProps: p,
            onPageChange: h,
            page: v,
            rowsPerPage: x,
            showFirstButton: j,
            showLastButton: $,
            slotProps: w.actions,
            slots: R.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function qc(e) {
    return ve("MuiTableRow", e);
  }
  const Tr = xe("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), Yc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: s } = e;
    return be({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        s && "footer"
      ]
    }, qc, t);
  }, Jc = J("tr", {
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
    [`&.${Tr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${Tr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Fe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Dr = "tr", ln = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: s = Dr, hover: i = false, selected: l = false, ...a } = o, d = m.useContext(ao), u = {
      ...o,
      component: s,
      hover: i,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, f = Yc(u);
    return c.jsx(Jc, {
      as: s,
      ref: n,
      className: ie(f.root, r),
      role: s === Dr ? null : "row",
      ownerState: u,
      ...a
    });
  }), Kc = le(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function Xc(e) {
    return ve("MuiTableSortLabel", e);
  }
  const ho = xe("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), Qc = (e) => {
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
    return be(r, Xc, t);
  }, Zc = J(Zn, {
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
      [`& .${ho.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${ho.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${ho.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), eu = J("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${G(n.direction)}`]
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
  }))), tu = m.forwardRef(function(t, n) {
    const o = ye({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: s, className: i, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = Kc, slots: u = {}, slotProps: f = {}, ...g } = o, p = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = Qc(p), y = {
      slots: u,
      slotProps: f
    }, [v, x] = ce("root", {
      elementType: Zc,
      externalForwardedProps: y,
      ownerState: p,
      className: ie(h.root, i),
      ref: n
    }), [_, C] = ce("icon", {
      elementType: eu,
      externalForwardedProps: y,
      ownerState: p,
      className: h.icon
    });
    return c.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...x,
      ...g,
      children: [
        s,
        a && !r ? null : c.jsx(_, {
          as: d,
          ...C
        })
      ]
    });
  }), Ms = le(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), $s = le(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), As = le(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), nu = le(c.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), Er = le(c.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), Is = le(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), ou = le(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), ru = le(c.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), Vn = le(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), su = le(c.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), kr = le(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Or = le(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), iu = le(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), lu = le(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), gn = le(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Ps = le(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), au = le(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), cu = le(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Fs = le(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), xn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, Nr = "b64:";
  function uu(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function du(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  function zs(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(Nr) ? du(e.slice(Nr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function pu({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: s, loading: i }) {
    const [l, a] = m.useState(""), [d, u] = m.useState(null), [f, g] = m.useState(null), [p, h] = m.useState(false), y = m.useRef(0), v = m.useRef(/* @__PURE__ */ new Map()), x = !l, _ = m.useMemo(() => {
      if (!l) return e;
      const S = l.toLowerCase();
      return e.filter((z) => z.path.toLowerCase().includes(S) || z.headerName.toLowerCase().includes(S));
    }, [
      e,
      l
    ]), C = m.useMemo(() => e.filter((S) => S.visible).length, [
      e
    ]), j = m.useCallback((S) => {
      r(e.map((z) => z.path === S ? {
        ...z,
        visible: !z.visible
      } : z));
    }, [
      e,
      r
    ]), $ = m.useCallback((S, z) => {
      S.stopPropagation(), j(z);
    }, [
      j
    ]), w = m.useCallback((S) => (z) => {
      z ? v.current.set(S, z) : v.current.delete(S);
    }, []), R = m.useCallback((S) => {
      r(e.map((z) => ({
        ...z,
        visible: S
      })));
    }, [
      e,
      r
    ]), M = m.useCallback((S, z) => {
      S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", z), u(z);
    }, []), F = m.useCallback((S, z) => {
      S.preventDefault(), y.current += 1, z !== d && g(z);
    }, [
      d
    ]), I = m.useCallback((S) => {
      S.preventDefault(), y.current -= 1, y.current <= 0 && (y.current = 0, g(null));
    }, []), P = m.useCallback((S) => {
      S.preventDefault(), S.dataTransfer.dropEffect = "move";
    }, []), U = m.useCallback((S, z) => {
      S.preventDefault(), y.current = 0, g(null), u(null);
      const O = S.dataTransfer.getData("text/plain");
      if (!O || O === z) return;
      const H = [
        ...e
      ], Z = H.findIndex((N) => N.path === O), Q = H.findIndex((N) => N.path === z);
      if (Z === -1 || Q === -1) return;
      const [ue] = H.splice(Z, 1), fe = Z < Q ? Q - 1 : Q;
      H.splice(fe, 0, ue), r(H);
    }, [
      e,
      r
    ]), k = m.useCallback(() => {
      y.current = 0, u(null), g(null);
    }, []), W = m.useCallback(() => {
      r(e.map((S) => ({
        path: S.path,
        visible: true,
        headerName: S.path.split(".").pop() || S.path
      }))), h(false);
    }, [
      e,
      r
    ]), Y = m.useCallback(() => {
      h(true);
    }, []), q = m.useCallback(() => {
      h(false);
    }, []), E = m.useCallback((S, z, O) => {
      var _a2, _b;
      switch (S.key) {
        case "Enter":
        case " ":
          S.preventDefault(), o(z.path);
          break;
        case "ArrowDown":
          if (S.preventDefault(), O < _.length - 1) {
            const H = _[O + 1].path;
            o(H), (_a2 = v.current.get(H)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (S.preventDefault(), O > 0) {
            const H = _[O - 1].path;
            o(H), (_b = v.current.get(H)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          S.preventDefault(), j(z.path);
          break;
      }
    }, [
      _,
      o,
      j
    ]);
    return c.jsxs(L, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(Rs, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            c.jsx(Se, {
              size: "small",
              placeholder: b.t("json_table_search_columns"),
              value: l,
              onChange: (S) => a(S.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(Ss, {
                    position: "start",
                    children: c.jsx(Ps, {
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
            c.jsx(Le, {
              title: b.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(je, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": b.t("json_table_refresh_columns"),
                  children: c.jsx(lu, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Le, {
              title: b.t("json_table_show_all"),
              children: c.jsx(je, {
                size: "small",
                onClick: () => R(true),
                "aria-label": b.t("json_table_show_all"),
                children: c.jsx(cu, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Le, {
              title: b.t("json_table_hide_all"),
              children: c.jsx(je, {
                size: "small",
                onClick: () => R(false),
                "aria-label": b.t("json_table_hide_all"),
                children: c.jsx(Fs, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Le, {
              title: b.t("json_table_reset_all"),
              children: c.jsx(je, {
                size: "small",
                onClick: Y,
                "aria-label": b.t("json_table_reset_all"),
                children: c.jsx(gn, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(L, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: _.length === 0 ? c.jsx(L, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(T, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? b.t("json_table_no_columns") : b.t("json_table_no_search_results")
            })
          }) : _.map((S, z) => {
            const O = t.find((Q) => Q.path === S.path), H = n === S.path, Z = (O == null ? void 0 : O.type) || "string";
            return c.jsx(ja, {
              ref: w(S.path),
              "data-column-path": S.path,
              onClick: () => o(S.path),
              onKeyDown: (Q) => E(Q, S, z),
              draggable: x,
              onDragStart: x ? (Q) => M(Q, S.path) : void 0,
              onDragEnter: x ? (Q) => F(Q, S.path) : void 0,
              onDragLeave: x ? I : void 0,
              onDragOver: x ? P : void 0,
              onDrop: x ? (Q) => U(Q, S.path) : void 0,
              onDragEnd: x ? k : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": H,
              "aria-label": `${S.headerName || S.path}, ${Z}, ${S.visible ? b.t("json_table_visible") : b.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: x ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: H ? "primary.main" : "divider",
                backgroundColor: H ? "action.selected" : "background.paper",
                opacity: d === S.path ? 0.4 : S.visible ? 1 : 0.55,
                borderTop: f === S.path ? "3px solid" : void 0,
                borderTopColor: f === S.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: H ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(L, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  x && c.jsx(ou, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  c.jsx(Cn, {
                    checked: S.visible,
                    onClick: (Q) => $(Q, S.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${b.t("json_table_visible")}: ${S.headerName || S.path}`
                    }
                  }),
                  c.jsxs(L, {
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
                        title: S.path,
                        children: S.headerName || S.path
                      }),
                      S.headerName && S.headerName !== S.path && c.jsx(T, {
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
                  c.jsx(ft, {
                    label: Z,
                    size: "small",
                    sx: {
                      backgroundColor: xn[Z] || xn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${b.t("json_table_type")}: ${Z}`
                  })
                ]
              })
            }, S.path);
          })
        }),
        e.length > 0 && c.jsx(L, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(T, {
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
        c.jsxs(qo, {
          open: p,
          onClose: q,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            c.jsx(Yo, {
              id: "reset-dialog-title",
              children: b.t("json_table_reset_all")
            }),
            c.jsx(Jo, {
              children: c.jsx(Ta, {
                id: "reset-dialog-description",
                children: b.t("json_table_reset_confirm_message")
              })
            }),
            c.jsxs(or, {
              children: [
                c.jsx(rt, {
                  onClick: q,
                  color: "primary",
                  children: b.t("cancel")
                }),
                c.jsx(rt, {
                  onClick: W,
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
  function Xn(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const fu = 0, gu = 20, Lr = 2;
  function hu(e) {
    if (e == null) return Lr;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(fu, Math.min(gu, Math.floor(t))) : Lr;
  }
  function Ts(e, t = {}) {
    const { prefix: n = "", suffix: o = "", thousands: r = false } = t, s = hu(t.decimals);
    let i = e.toFixed(s);
    if (r) {
      const [l, a] = i.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${n}${i}${o}`;
  }
  const mu = [
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
  function Ds(e, t) {
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
  function Es(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let o;
      if (typeof e == "string") {
        const a = e.trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
          const [d, u, f] = a.split("-").map(Number);
          o = new Date(d, u - 1, f);
        } else o = new Date(a);
      } else if (typeof e == "number") o = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) o = e;
      else return Xn(e);
      if (isNaN(o.getTime())) return Xn(e);
      const r = t || "yyyy-MM-dd", s = (a, d = 2) => String(a).padStart(d, "0"), i = {
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
      for (const [a, d] of Object.entries(i).sort((u, f) => f[0].length - u[0].length)) l = l.replaceAll(a, d);
      return l;
    } catch {
      return Xn(e);
    }
  }
  function Do(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Xn(e);
  }
  function ks(e, t) {
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
  function yu({ format: e, onChange: t, discoveredColumn: n }) {
    const o = m.useMemo(() => {
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
        c.jsx(T, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_number_format")
        }),
        c.jsxs(L, {
          children: [
            c.jsxs(T, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                b.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(wi, {
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
        c.jsx(Se, {
          label: b.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (r) => t({
            type: "number",
            numberPrefix: r.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        c.jsx(Se, {
          label: b.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (r) => t({
            type: "number",
            numberSuffix: r.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        c.jsx(kt, {
          control: c.jsx(mn, {
            checked: e.numberThousandsSeparator || false,
            onChange: (r) => t({
              type: "number",
              numberThousandsSeparator: r.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(T, {
            variant: "body2",
            children: b.t("json_table_number_thousands")
          })
        }),
        c.jsxs(et, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(T, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                o,
                " \u2192",
                " ",
                Ts(o, {
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
  function bu({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(T, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_date_format")
        }),
        t && c.jsx(Se, {
          label: b.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: b.t("json_table_date_detected_hint")
        }),
        c.jsxs(ut, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(dt, {
              children: b.t("json_table_date_output_format")
            }),
            c.jsx(ot, {
              label: b.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (o) => n({
                type: "date",
                dateFormat: o.target.value,
                dateInputFormat: t
              }),
              children: mu.map((o) => c.jsx(se, {
                value: o.value,
                children: o.label
              }, o.value))
            })
          ]
        }),
        c.jsxs(et, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(T, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: Es(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function vu({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(T, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_boolean_format")
        }),
        c.jsx(Se, {
          label: b.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        c.jsx(Se, {
          label: b.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        c.jsxs(et, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(De, {
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
                    "true \u2192 ",
                    Do(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(T, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Do(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Eo({ value: e, onChange: t, label: n }) {
    const o = tn(), [r, s] = m.useState(null), i = m.useRef(null), [l, a] = m.useState(null), d = !!r;
    return m.useEffect(() => {
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
    ]), c.jsxs(L, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        c.jsxs(L, {
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
            c.jsx(T, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            c.jsx(L, {
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
              onClick: (u) => {
                u.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(Is, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(ci, {
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
          children: c.jsx(L, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(ui, {
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
  function xu({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(T, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_string_format")
        }),
        c.jsxs(ut, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(dt, {
              children: b.t("json_table_string_case")
            }),
            c.jsxs(ot, {
              label: b.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(se, {
                  value: "none",
                  children: b.t("json_table_string_case_none")
                }),
                c.jsx(se, {
                  value: "upper",
                  children: b.t("json_table_string_case_upper")
                }),
                c.jsx(se, {
                  value: "lower",
                  children: b.t("json_table_string_case_lower")
                }),
                c.jsx(se, {
                  value: "title",
                  children: b.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Se, {
              label: b.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            c.jsx(Se, {
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
        c.jsx(kt, {
          control: c.jsx(mn, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: b.t("json_table_string_trim")
        }),
        c.jsx(Se, {
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
        c.jsx(Se, {
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
        e.stringRegex && c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Se, {
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
            c.jsx(Se, {
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
        c.jsx(Io, {}),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(kt, {
              control: c.jsx(mn, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(T, {
                variant: "body2",
                fontWeight: "bold",
                children: b.t("json_table_string_font_weight")
              })
            }),
            c.jsx(kt, {
              control: c.jsx(mn, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(T, {
                variant: "body2",
                fontStyle: "italic",
                children: b.t("json_table_string_font_style")
              })
            })
          ]
        }),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Se, {
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
            c.jsx(Eo, {
              label: b.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        c.jsxs(et, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(T, {
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
              children: ks("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function he(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function _u(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function pt(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        pt(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          pt(r, t - 1);
        }
      }
    }
    return e;
  }
  function wu(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+he(e)) && t !== null) throw NaN;
    if (Number.isNaN(+he(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Cu(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Su(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function ju(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function Ru(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function Mu(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let s = pt(r ? e[0] : n, o);
    for (let i = r; i < e.length; i++) s = pt(await t(s, e[i]), o);
    return s;
  }
  const oo = {
    filter: Cu,
    some: Su,
    every: ju,
    map: Ru,
    reduce: Mu
  }, re = /* @__PURE__ */ Symbol.for("json_logic_sync"), Te = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Ye = /* @__PURE__ */ Symbol.for("json_logic_original"), Hr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Lt(e) {
    return typeof e == "function" ? e[re] === true : Array.isArray(e) ? e.every(Lt) : !(e && e.asyncMethod && !e.method);
  }
  function Os(e, t = true) {
    return e[re] = t, e;
  }
  function Rn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const mo = /* @__PURE__ */ new WeakMap();
  function Br(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (mo.has(e) || mo.set(e, $u(e)), mo.get(e));
  }
  function $u(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Au(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), Lt(t[r]) || (o.asyncDetected = true), n += (Lt(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][Te] < "u" ? n += t[r][Te] : n += me(t[r], o));
    return {
      [Te]: n
    };
  }
  function Iu(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function ro(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => ro(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && ro(r, t, n);
    }
    return true;
  }
  function ko(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => ko(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return Lt(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][re] == "function" && t.methods[o][re](e, {
        engine: t
      })) : ko(r, t) : false;
    }
    return true;
  }
  function me(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: s = [], engine: i } = t;
    function l(u, f = false) {
      return Iu(u, f) ? JSON.stringify(u) : (s.push(u), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let f = 0; f < e.length; f++) f > 0 && (u += ","), u += me(e[f], t);
      return "[" + u + "]";
    }
    let a = false;
    function d(u) {
      return t.asyncDetected = t.asyncDetected || a, o && a ? `await ${u}` : u;
    }
    if (e && typeof e == "object") {
      const u = Object.keys(e), f = u[0];
      if (!f) return l(e);
      if (!i.methods[f] || u.length > 1) {
        if (i.isData(e, f)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: f
        };
      }
      if (!t.engine.disableInline && i.methods[f] && ro(e, i, t)) return ko(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (r.push(i.run(e).then((y) => l(y))), `__%%%${r.length - 1}%%%__`);
      let g = e[f];
      if ((!g || typeof g != "object") && !i.methods[f].lazy && (g = [
        g
      ]), i.methods[f] && i.methods[f].compile) {
        let y = i.methods[f].compile(g, t);
        if (y[Te] && (y = y[Te]), (y || "").startsWith("await") && (t.asyncDetected = true), y !== false) return y;
      }
      let p = i.methods[f].optimizeUnary ? "" : "coerceArray";
      !p && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : p && Array.isArray(g) && (p = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[f] == "function") {
        a = !Lt(i.methods[f]);
        const y = h[Br(i.methods[f]) - 1] || h[2];
        return d(`engine.methods["${f}"](${p}(` + me(g, t) + ")" + y + ")");
      } else {
        a = !!(o && i.methods[f] && i.methods[f].asyncMethod);
        const y = Br(a ? i.methods[f].asyncMethod : i.methods[f].method);
        let v = h[y - 1] || h[2];
        return a && typeof i.methods[f][re] == "function" && i.methods[f][re](g, {
          engine: i
        }) && (a = false, v = v.replace("engine", "engine.fallback")), i.methods[f] && !i.methods[f].lazy ? d(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(${p}(` + me(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function so(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Au
    }, t));
    const n = me(e, t);
    return Pu(e, n, t);
  }
  function Pu(e, t, n) {
    const { engine: o, methods: r, notTraversed: s, processing: i = [], values: l } = n, a = [];
    i.forEach((u, f) => {
      t = t.replace(`__%%%${f}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, r, s, oo, o, a, Rn, he, _u, wu, pt), {
      [re]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Fu = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Jt = Fu(), an = /* @__PURE__ */ new Map();
  function Ut(e) {
    if (an.has(e)) return an.get(e);
    an.size > 2048 && an.clear();
    const t = zu(e);
    return an.set(e, t), t;
  }
  function zu(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === o ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (r.push(s), s = "") : s += l;
    }
    return r.length !== e.length && r.push(s), r;
  }
  const Oo = {
    get: {
      [re]: true,
      method: ([e, t, n], o, r, s) => {
        const i = n === void 0 ? null : n, l = Ut(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const s = Ut(o);
          return Jt ? `((${me(r, t)})${s.map((i) => `?.[${me(i, t)}]`).join("")} ?? ${me(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${me(r, t)}||0)`)}, ${me(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Ye]: true,
      [re]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Ut(String(e));
        for (let a = 0; a < l.length; a++) if (t == null || (t = t[l[a]], t === void 0)) return i;
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
          const r = Ut(n);
          if (!Jt) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${me(o, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${r.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${me(o, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [re]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Ut(String(e[o]));
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
      [re]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = Oo.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = Oo.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [Te]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Tu = {
    ...Oo
  }, oe = {
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
  function Ne(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Ne(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][re] == "function" ? t.methods[o][re](r, n) : t.methods[o][re] : typeof t.methods[o][re] == "function" ? t.methods[o][re](r, n) : t.methods[o][re] && Ne(r, t, n);
    }
    return true;
  }
  function de(e, t, n, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const r = t.optimizedMap.get(e);
      return typeof r == "function" ? r(n, o) : r;
    }
    return t.run(e, n, {
      above: o
    });
  }
  const cn = Qn("every", true), ne = {
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
      if (e.length === 0) throw oe;
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
      if (e.length === 0) throw oe;
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
      if (e.length < 2) throw oe;
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
      if (!e.length || typeof e[0] != "number") throw oe;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw oe;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw oe;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw oe;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: Os((e) => e, true),
      [re]: () => true
    },
    if: {
      [Ye]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        if (e.length === 1) return de(e[0], o, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = de(s, o, t, n);
          if (o.truthy(l)) return de(i, o, t, n);
        }
        return de(r, o, t, n);
      },
      [re]: (e, t) => Ne(e, t.engine, t),
      deterministic: (e, t) => Re(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
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
    "<": Ct("<", (e, t) => e < t),
    "<=": Ct("<=", (e, t) => e <= t),
    ">": Ct(">", (e, t) => e > t),
    ">=": Ct(">=", (e, t) => e >= t),
    "==": Ct("==", (e, t) => e == t),
    "===": Ct("===", (e, t) => e === t),
    "!=": Ct("!=", (e, t) => e != t),
    "!==": Ct("!==", (e, t) => e !== t),
    or: {
      [re]: (e, t) => Ne(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = de(e[s], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
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
      [re]: (e, t) => Ne(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        let r;
        for (let s = 0; s < e.length; s++) if (r = de(e[s], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        let r;
        for (let s = 0; s < e.length; s++) if (r = await o.run(e[s], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
      compile: (e, t) => Jt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = me(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${me(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [re]: (e, t) => Ne(e, t.engine, t),
      method: (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? r = de(e[i], o, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : r = de(e[i], o, t, n), r;
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
            [Te]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [Te]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [Te]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[Te].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[Te].includes("await") && (n[Te] = n[Te].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [re]: (e, t) => Ne(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = de(e[s], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
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
        if (!e) throw oe;
        const r = de(e, o, t, n), s = Array.isArray(e) ? r[0] : r;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw oe;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw oe;
        const r = await de(e, o, t, n), s = Array.isArray(e) ? r[0] : r;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw oe;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => ne.val.method(e, t, n, o, Hr) !== Hr,
      deterministic: false
    },
    val: {
      [Ye]: true,
      [re]: true,
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
          let a = 0;
          for (let d = 0; d < l; d++) s = n[a++], d === n.length - 1 && Array.isArray(s) && (n = s, s = s[0], a = 1);
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
          return Jt ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Ne(e, t.engine, t) && Re(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Jt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (Jt ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: Qn("map"),
    some: {
      ...Qn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        let [r, s] = e;
        r = de(r, o, t, n) || [];
        for (let i = 0; i < r.length; i++) if (o.truthy(de(s, o, r[i], [
          r,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [re]: cn[re],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        const r = de(e[0], o, t, n) || [];
        if (Array.isArray(r) && r.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < r.length; i++) if (!o.truthy(de(s, o, r[i], [
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
        return cn.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${cn.compile([
        {
          [Te]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: cn.deterministic,
      lazy: cn.lazy
    },
    none: {
      [re]: (e, t) => Ne(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !ne.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await ne.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = ne.some.compile(e, t);
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
    filter: Qn("filter", true),
    reduce: {
      deterministic: (e, t) => Re(e[0], t.engine, t) && Re(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw oe;
        const { async: n } = t;
        let [o, r, s] = e;
        o = me(o, t), typeof s < "u" && (s = me(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = so(r, i);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!Lt(r) || o.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${s}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        let [r, s, i] = e;
        i = pt(de(i, o, t, n), o.options.maxDepth), r = de(r, o, t, n) || [];
        let l = (a, d) => pt(o.run(s, {
          accumulator: a,
          current: d
        }, {
          above: [
            r,
            t,
            n
          ]
        }), o.options.maxDepth);
        if (o.optimizedMap.has(s) && typeof o.optimizedMap.get(s) == "function") {
          const a = o.optimizedMap.get(s);
          l = (d, u) => pt(a({
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
      [re]: (e, t) => Ne(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw oe;
        let [r, s, i] = e;
        return i = pt(await o.run(i, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], oo.reduce(r, (l, a) => o.run(s, {
          accumulator: l,
          current: a
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
      [Ye]: true,
      [re]: true,
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
      [re]: (e, t) => Ne(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${so(e[o], {
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
      [re]: (e, t) => Ne(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        throw oe;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${me(e[r], t)}`), o), []).join(",")} })`;
        throw oe;
      },
      asyncMethod: async (e, t, n, o) => await oo.reduce(Object.keys(e), async (s, i) => {
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
  function Ct(e, t) {
    const n = {
      [Te]: e
    }, o = e.length === 3;
    return {
      method: (r, s, i, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw oe;
        if (r.length === 2) {
          const d = de(r[0], l, s, i), u = de(r[1], l, s, i);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+he(d))) throw NaN;
          if (Number.isNaN(+he(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = de(r[0], l, s, i);
        for (let d = 1; d < r.length; d++) {
          const u = de(r[d], l, s, i);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+he(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+he(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      asyncMethod: async (r, s, i, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw oe;
        if (r.length === 2) {
          const d = await de(r[0], l, s, i), u = await de(r[1], l, s, i);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+he(d))) throw NaN;
          if (Number.isNaN(+he(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = await de(r[0], l, s, i);
        for (let d = 1; d < r.length; d++) {
          const u = await de(r[d], l, s, i);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+he(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+he(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
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
      [Ye]: true,
      [re]: (r, s) => Ne(r, s.engine, s),
      deterministic: (r, s) => Re(r, s.engine, s),
      lazy: true
    };
  }
  function Qn(e, t = false) {
    return {
      deterministic: (n, o) => Re(n[0], o.engine, o) && Re(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Ye]: true,
      [re]: (n, o) => Ne(n, o.engine, o),
      method: (n, o, r, s) => {
        if (!Array.isArray(n)) throw oe;
        let [i, l] = n;
        return i = de(i, s, o, r) || [], i[e]((a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = de(l, s, a, [
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
        if (!Array.isArray(n)) throw oe;
        let [i, l] = n;
        return i = await s.run(i, o, {
          above: r
        }) || [], oo[e](i, async (a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = await s.run(l, a, {
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
        if (!Array.isArray(n)) throw oe;
        const { async: r } = o, [s, i] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = so(i, l), d = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, u = t ? o.compile`engine.truthy` : o.compile``;
        return r && !Lt(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : o.compile`(${s} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  ne.every = ne.all;
  ne["?:"] = ne.if;
  Object.keys(ne).forEach((e) => {
    typeof ne[e] == "function" && (ne[e][re] = true), ne[e].deterministic = typeof ne[e].deterministic > "u" ? true : ne[e].deterministic;
  });
  ne.if.compile = function(e, t) {
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
  function An(e, t) {
    if (Array.isArray(e)) return he(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + me(e, t);
    if (typeof e == "string") return "+" + he(+e);
    const n = me(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + he(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? he(NaN) : `(+precoerceNumber(${n}))`;
  }
  ne["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => An(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${me(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  ne["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw oe;
      return `precoerceNumber(${e.map((n) => An(n, t)).join(" % ")})`;
    }
    return `assertSize(${me(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  ne.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  ne["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw oe;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => An(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${me(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  ne["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw oe;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = An(n, t);
        return o && r === "+0" && he(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${me(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  ne["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => An(n, t)).join(" * ")})` : `(${me(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  ne["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  ne.not = ne["!"];
  ne["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  ne.none.deterministic = ne.some.deterministic;
  ne.throw.deterministic = (e, t) => t.insideTry && Re(e, t.engine, t);
  ne["+"].optimizeUnary = ne["-"].optimizeUnary = ne["!"].optimizeUnary = ne["!!"].optimizeUnary = ne.cat.optimizeUnary = ne.throw.optimizeUnary = true;
  const Du = {
    ...ne,
    ...Tu
  }, Eu = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function ku(e, t, n, o) {
    const r = t.methods[n], s = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, d) => s(l, a, d || o, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !r.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && r.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((a) => Pe(a, t, o));
      if (l.every((a) => typeof a != "function")) return (a, d) => s(l, a, d || o, t);
      if (l.length === 1) {
        const a = l[0];
        return (d, u) => s([
          a(d, u)
        ], d, u || o, t);
      }
      if (l.length === 2) {
        const [a, d] = l;
        return typeof a == "function" && typeof d == "function" ? (u, f) => s([
          a(u, f),
          d(u, f)
        ], u, f || o, t) : typeof a == "function" ? (u, f) => s([
          a(u, f),
          d
        ], u, f || o, t) : (u, f) => s([
          a,
          d(u, f)
        ], u, f || o, t);
      }
      return (a, d) => {
        const u = l.map((f) => typeof f == "function" ? f(a, d) : f);
        return s(u, a, d || o, t);
      };
    } else {
      const l = Pe(i, t, o);
      if (r.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => s(l(d, u), d, u || o, t);
        if ((n === "var" || n === "val") && t.methods[n][Ye]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Ut(String(l));
            let u;
            if (d.length === 2) {
              const [f, g] = d;
              return (p) => (typeof (u = p && p[f] && p[f][g]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
            if (d.length === 3) {
              const [f, g, p] = d;
              return (h) => (typeof (u = h && h[f] && h[f][g] && h[f][g][p]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
          }
        }
        return (d, u) => s(l, d, u || o, t);
      }
      return typeof l == "function" ? (a, d) => s(Rn(l(a, d)), a, d || o, t) : (a, d) => s(Rn(l), a, d || o, t);
    }
  }
  const Vr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function Ou(e, t, n) {
    if (e.val && t.methods.val[Ye] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[Ye] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, s] = e.if || e["?:"], i = Pe(o, t, n), l = Pe(r, t, n), a = Pe(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a(d, u) : typeof i == "function" && typeof l == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a : typeof i == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a(d, u) : typeof i == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a : t.truthy(i) ? l : a;
    }
    if (e.filter && t.methods.filter[Ye] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, s = Pe(r, t, n);
      if (typeof s != "function") return t.truthy(s) ? Pe(o, t, n) : [];
    }
    for (const o in Vr) if (e[o] && Array.isArray(e[o]) && t.methods[o][Ye]) {
      const r = Vr[o], s = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+he(l))) throw NaN;
        if (Number.isNaN(+he(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [i, l] = e[o], a = Pe(i, t, n), d = Pe(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (u, f) => s(a(u, f), d(u, f)) : typeof a == "function" ? (u, f) => s(a(u, f), d) : typeof d == "function" ? (u, f) => s(a, d(u, f)) : s(a, d);
      }
      if (e[o].length === 3) {
        const [i, l, a] = e[o], d = Pe(i, t, n), u = Pe(l, t, n), f = Pe(a, t, n);
        let g;
        return typeof d == "function" && typeof u == "function" && typeof f == "function" ? (p, h) => s(d(p, h), g = u(p, h)) && s(g, f(p, h)) : typeof d == "function" && typeof u == "function" ? (p, h) => s(d(p, h), g = u(p, h)) && s(g, f) : typeof d == "function" && typeof f == "function" ? (p, h) => s(d(p, h), u) && s(u, f(p, h)) : typeof u == "function" && typeof f == "function" ? (p, h) => s(d, g = u(p, h)) && s(g, f(p, h)) : typeof d == "function" ? (p, h) => s(d(p, h), u) && s(u, f) : typeof u == "function" ? (p, h) => s(d, g = u(p, h)) && s(g, f) : typeof f == "function" ? (p, h) => s(d, u) && s(u, f(p, h)) : s(d, u) && s(u, f);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, s] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const i = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (s = s || 0, i && l) return Pe({
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
        if (s = typeof s > "u" ? 1 : s, i && l) return Pe({
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
  function Pe(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => Pe(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, s) => o.map((i) => typeof i == "function" ? i(r, s) : i);
    }
    if (e && typeof e == "object") {
      const o = Ou(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), s = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && ro(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const a = ku(e, t, s, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class Nu {
    constructor(t = Du, n = {
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
      if ((r === "var" || r === "val") && this.methods[r][Ye]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : Rn(this.run(i, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], d = a ? i : !i || typeof i != "object" ? [
          i
        ] : Rn(this.run(i, n, {
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
      }, Object.assign(n, Eu({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = Os(n);
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
        this.optimizedMap.set(t, Pe(t, this, r)), this.missesSinceSeen++;
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
      const { above: o = [], top: r = true } = n, s = so(t, {
        engine: this,
        above: o
      });
      return r === false && s.deterministic ? s() : s;
    }
  }
  function Ve(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const co = new Nu();
  co.addMethod("contains", ([e, t]) => Ve(e).includes(Ve(t)), {
    deterministic: true
  });
  co.addMethod("startsWith", ([e, t]) => Ve(e).startsWith(Ve(t)), {
    deterministic: true
  });
  co.addMethod("endsWith", ([e, t]) => Ve(e).endsWith(Ve(t)), {
    deterministic: true
  });
  function un() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const No = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Lu = {
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
  }, Hu = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], Bu = {
    var: "value"
  };
  function Vu(e, t, n = "string") {
    const o = Number(t), r = n === "number", s = n === "date", i = Bu;
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
  const Wu = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function Gu(e, t = "string") {
    const n = e.conditions.filter((r) => No.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && Wu.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => Vu(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function at(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function yo(e) {
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
      if (Array.isArray(o) && o.length === 2 && at(o[0])) return {
        operator: n,
        operand: Ve(o[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: Ve(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "neq",
        operand: Ve(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "contains",
        operand: Ve(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "starts_with",
        operand: Ve(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "ends_with",
        operand: Ve(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const o = n["!!"];
          if (Array.isArray(o) && at(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && at(o[0])) return {
            operator: "not_contains",
            operand: Ve(o[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && at(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Wr(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: un(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => yo(r)).filter((r) => r !== null).map((r) => ({
          id: un(),
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
        const o = n.map((r) => yo(r)).filter((r) => r !== null).map((r) => ({
          id: un(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = yo(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: un(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: un(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const Uu = 200, dn = /* @__PURE__ */ new Map();
  function qu(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = dn.get(n);
      if (!o) {
        if (o = co.build(e), dn.size >= Uu) {
          const r = dn.keys().next().value;
          r && dn.delete(r);
        }
        dn.set(n, o);
      }
      return !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const Yu = {
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
  function Ju({ label: e, value: t, onChange: n, inputType: o }) {
    const [r, s] = m.useState(t);
    m.useEffect(() => {
      s(t);
    }, [
      t
    ]);
    const i = m.useCallback(() => {
      r !== t && n(r);
    }, [
      r,
      t,
      n
    ]);
    return c.jsx(Se, {
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
  function Ku({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = m.useState(() => Wr(e));
    m.useEffect(() => {
      r(Wr(e));
    }, [
      e
    ]);
    const s = Lu[t] ?? Hu, i = m.useCallback((g) => {
      r(g), n(Gu(g, t));
    }, [
      n,
      t
    ]), l = m.useCallback((g, p) => {
      const h = o.conditions.map((y, v) => v === g ? {
        ...y,
        ...p
      } : y);
      i({
        ...o,
        conditions: h
      });
    }, [
      o,
      i
    ]), a = m.useCallback((g) => {
      const p = o.conditions.filter((h, y) => y !== g);
      i({
        ...o,
        conditions: p
      });
    }, [
      o,
      i
    ]), d = m.useCallback(() => {
      const g = s[0] ?? "eq";
      i({
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
      i,
      s
    ]), u = m.useCallback((g, p) => {
      p !== null && i({
        ...o,
        mode: p
      });
    }, [
      o,
      i
    ]), f = o.conditions.length > 1;
    return c.jsxs(De, {
      spacing: 1,
      children: [
        f && c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(us, {
              value: o.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": b.t("json_table_condition_mode_label"),
              children: [
                c.jsx(eo, {
                  value: "and",
                  "aria-label": b.t("json_table_condition_mode_all"),
                  children: b.t("json_table_condition_mode_all")
                }),
                c.jsx(eo, {
                  value: "or",
                  "aria-label": b.t("json_table_condition_mode_any"),
                  children: b.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? b.t("json_table_condition_mode_hint_and") : b.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, p) => {
          const h = !No.has(g.operator), y = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(L, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(ut, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(dt, {
                    children: b.t("json_table_condition_operator")
                  }),
                  c.jsx(ot, {
                    label: b.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const x = v.target.value, _ = No.has(x) ? "" : g.operand;
                      l(p, {
                        operator: x,
                        operand: _
                      });
                    },
                    children: s.map((v) => c.jsx(se, {
                      value: v,
                      children: b.t(Yu[v])
                    }, v))
                  })
                ]
              }),
              h && c.jsx(Ju, {
                label: b.t("json_table_condition_value"),
                value: g.operand ?? "",
                onChange: (v) => l(p, {
                  operand: v
                }),
                inputType: y
              }),
              f && c.jsx(Le, {
                title: b.t("json_table_condition_remove"),
                children: c.jsx(je, {
                  size: "small",
                  onClick: () => a(p),
                  "aria-label": b.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(to, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? p);
        }),
        c.jsx(rt, {
          startIcon: c.jsx(Ms, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": b.t("json_table_condition_add"),
          children: f ? b.t("json_table_condition_add") : b.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function Xu({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
    const s = m.useCallback((u, f) => {
      const g = [
        ...e || []
      ];
      g[u] = {
        ...g[u],
        ...f
      }, o(g);
    }, [
      e,
      o
    ]), i = m.useCallback((u) => {
      const f = [
        ...e || []
      ];
      f.splice(u, 1), o(f);
    }, [
      e,
      o
    ]), l = m.useCallback(() => {
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
    ]), a = m.useCallback((u) => {
      if (u === 0) return;
      const f = [
        ...e || []
      ];
      [f[u - 1], f[u]] = [
        f[u],
        f[u - 1]
      ], o(f);
    }, [
      e,
      o
    ]), d = m.useCallback((u) => {
      const f = e || [];
      if (u >= f.length - 1) return;
      const g = [
        ...f
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
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(us, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, f) => {
                f && r(f);
              },
              "aria-label": b.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(eo, {
                  value: "first-match",
                  "aria-label": b.t("json_table_cell_style_mode_first"),
                  children: b.t("json_table_cell_style_mode_first")
                }),
                c.jsx(eo, {
                  value: "all-match",
                  "aria-label": b.t("json_table_cell_style_mode_all"),
                  children: b.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(T, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? b.t("json_table_cell_style_mode_hint_first") : b.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && c.jsxs(L, {
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
              children: b.t("json_table_no_style_rules")
            }),
            c.jsx(T, {
              variant: "caption",
              children: b.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, f) => {
          const g = (e || []).length, p = u.backgroundColor ? Et(u.backgroundColor) : void 0, h = u.textColor ? Et(u.textColor) : void 0;
          return c.jsx(et, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(De, {
              spacing: 1.5,
              children: [
                c.jsxs(L, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(L, {
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
                          b.t("json_table_rule"),
                          " ",
                          f + 1
                        ]
                      })
                    }),
                    c.jsxs(L, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(Le, {
                          title: b.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(je, {
                              size: "small",
                              onClick: () => a(f),
                              disabled: f === 0,
                              "aria-label": b.t("json_table_rule_move_up"),
                              children: c.jsx(As, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Le, {
                          title: b.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(je, {
                              size: "small",
                              onClick: () => d(f),
                              disabled: f >= g - 1,
                              "aria-label": b.t("json_table_rule_move_down"),
                              children: c.jsx($s, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Le, {
                          title: b.t("json_table_delete_rule"),
                          children: c.jsx(je, {
                            size: "small",
                            onClick: () => i(f),
                            color: "error",
                            "aria-label": b.t("json_table_delete_rule"),
                            children: c.jsx(di, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(Ku, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (y) => s(f, {
                    logic: y
                  })
                }, u.id ?? f),
                c.jsxs(De, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    c.jsx(Eo, {
                      label: b.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (y) => s(f, {
                        backgroundColor: y
                      })
                    }),
                    c.jsx(Eo, {
                      label: b.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (y) => s(f, {
                        textColor: y
                      })
                    })
                  ]
                }),
                c.jsxs(De, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    c.jsx(kt, {
                      control: c.jsx(Cn, {
                        checked: u.fontWeight === "bold",
                        onChange: (y) => s(f, {
                          fontWeight: y.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx(kr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(kr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(T, {
                        variant: "caption",
                        children: b.t("json_table_bold")
                      })
                    }),
                    c.jsx(kt, {
                      control: c.jsx(Cn, {
                        checked: u.fontStyle === "italic",
                        onChange: (y) => s(f, {
                          fontStyle: y.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(Or, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Or, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(T, {
                        variant: "caption",
                        children: b.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (u.backgroundColor || u.textColor || u.fontWeight === "bold" || u.fontStyle === "italic") && c.jsx(et, {
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
                  children: c.jsx(T, {
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
          }, u.id ?? f);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(T, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? b.t("json_table_rules_priority_hint") : b.t("json_table_rules_all_match_hint")
        }),
        c.jsx(rt, {
          startIcon: c.jsx(Ms, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: b.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function Qu({ globalSorting: e, globalFiltering: t }) {
    return c.jsxs(L, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        c.jsx(T, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: b.t("json_table_global_status")
        }),
        c.jsxs(L, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            c.jsx(ft, {
              size: "small",
              icon: e ? c.jsx(Er, {}) : c.jsx(to, {}),
              label: `${b.t("json_table_sorting")}: ${e ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            c.jsx(ft, {
              size: "small",
              icon: t ? c.jsx(Er, {}) : c.jsx(to, {}),
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
  function In(e) {
    switch (e) {
      case "number":
      case "date":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "string":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "boolean":
        return {
          sortable: false,
          filterable: true,
          hiding: true
        };
      case "array":
      case "object":
        return {
          sortable: false,
          filterable: false,
          hiding: true
        };
      default:
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
    }
  }
  function Zu(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : In(t).sortable && n !== false;
  }
  function ed(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : In(t).filterable && n === true;
  }
  function td(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : In(t).hiding && n !== false;
  }
  function Gr(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = Ds(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  function Ur(e) {
    return (t, n, o) => Gr(t.getValue(o), e) - Gr(n.getValue(o), e);
  }
  function nd(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: o, renderConfiguredCell: r, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, a = new Map(n.map((g) => [
      g.path,
      g.dateFormat
    ])), d = new Map(n.map((g) => [
      g.path,
      g.type
    ])), u = o.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      header: ({ table: g }) => i(g),
      cell: ({ row: g }) => l(g),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let f;
    return t.length > 0 ? f = t.filter((g) => g.visible).map((g) => {
      var _a2, _b;
      const p = ((_a2 = g.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(g.path), h = ((_b = g.format) == null ? void 0 : _b.type) === "date", y = d.get(g.path) || "string";
      return {
        id: g.path,
        size: g.width ?? 150,
        accessorFn: (x) => (x == null ? void 0 : x[g.path]) ?? null,
        header: g.headerName || g.path,
        enableSorting: Zu(g, y, o.tableSorting),
        enableColumnFilter: ed(g, y, o.tableFiltering),
        enableHiding: td(g, y, o.tableHiding),
        ...h && {
          sortingFn: Ur(p)
        },
        cell: ({ getValue: x }) => r(x(), g),
        meta: {
          align: g.align || "left",
          width: g.width,
          columnType: y
        }
      };
    }) : f = n.map((g) => {
      const p = g.type === "date" && g.dateFormat, h = g.dateFormat, y = In(g.type);
      return {
        id: g.path,
        size: 150,
        accessorFn: (x) => x[g.path],
        header: g.path.split(".").pop() || g.path,
        enableSorting: y.sortable && o.tableSorting,
        enableColumnFilter: y.filterable && o.tableFiltering,
        enableHiding: y.hiding && o.tableHiding,
        ...p && {
          sortingFn: Ur(h)
        },
        cell: ({ getValue: x }) => s(x()),
        meta: {
          align: "left",
          columnType: g.type
        }
      };
    }), u ? [
      u,
      ...f
    ] : f;
  }
  function qr({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: o = "string", featureType: r = "sortable" }) {
    const s = t === "auto" || t === void 0, i = In(o), l = r === "sortable" ? i.sortable : i.filterable;
    let a, d;
    t === "auto" || t === void 0 ? (a = l && e, d = "json_table_source_auto") : (a = t, d = "json_table_source_override");
    const u = t !== void 0 && t !== "auto", f = (p, h) => p.replace(/\{(\w+)\}/g, (y, v) => v in h ? h[v] : y);
    let g;
    return t === "auto" || t === void 0 ? g = f(b.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? b.t("json_table_status_on") : b.t("json_table_status_off"),
      type: o
    }) : g = f(b.t("json_table_override_tooltip"), {
      feature: n
    }), c.jsx(Le, {
      title: g,
      arrow: true,
      children: c.jsxs(L, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          c.jsx(ft, {
            size: "small",
            label: c.jsx(L, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: a ? b.t("json_table_status_on") : b.t("json_table_status_off")
            }),
            color: a ? "success" : "default",
            variant: u ? "filled" : "outlined",
            sx: {
              height: 20,
              fontSize: "0.65rem",
              "& .MuiChip-label": {
                px: 0.75
              }
            }
          }),
          c.jsxs(T, {
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
              s && c.jsx(nu, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              u && c.jsx(ru, {
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
  function od({ column: e, discoveredColumn: t, onChange: n, globalSorting: o = true, globalFiltering: r = false }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [s, i] = m.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = m.useCallback((w) => {
      i((R) => ({
        ...R,
        [w]: !R[w]
      }));
    }, []), a = (t == null ? void 0 : t.type) || "string", d = m.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, R) => w + R, 0) : 0, [
      t
    ]), u = m.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), f = m.useMemo(() => e.headerName !== u || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      u
    ]), g = m.useCallback(() => {
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
    ]), p = m.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = m.useCallback(() => {
      const { format: w, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), y = m.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), v = m.useCallback(() => {
      const { cellStyle: w, cellStyleMode: R, ...M } = e;
      n(M);
    }, [
      e,
      n
    ]), x = m.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), _ = m.useCallback(() => {
      const { sortable: w, filterable: R, ...M } = e;
      n({
        ...M,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), C = m.useCallback((w) => {
      var _a3, _b2;
      const R = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const M = (_b2 = e.format) == null ? void 0 : _b2.type;
        M === "number" ? (delete R.numberDecimals, delete R.numberPrefix, delete R.numberSuffix, delete R.numberThousandsSeparator) : M === "date" ? (delete R.dateFormat, delete R.dateInputFormat) : M === "boolean" ? (delete R.booleanTrue, delete R.booleanFalse) : M === "string" && [
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
        ].forEach((I) => {
          delete R[I];
        });
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
    ]), j = m.useCallback((w) => {
      n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), $ = m.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return c.jsxs(L, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(ft, {
              label: a,
              size: "small",
              sx: {
                backgroundColor: xn[a] || xn.string,
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
        c.jsxs(De, {
          spacing: 1,
          children: [
            c.jsxs(kn, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Vn, {}),
                  children: c.jsxs(L, {
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
                        children: b.t("json_table_section_basic")
                      }),
                      c.jsx(Le, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(gn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(On, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(Se, {
                        label: b.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx(Se, {
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
                      c.jsxs(ut, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(dt, {
                            children: b.t("json_table_align")
                          }),
                          c.jsxs(ot, {
                            label: b.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              c.jsx(se, {
                                value: "left",
                                children: b.t("json_table_align_left")
                              }),
                              c.jsx(se, {
                                value: "center",
                                children: b.t("json_table_align_center")
                              }),
                              c.jsx(se, {
                                value: "right",
                                children: b.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(kt, {
                        control: c.jsx(mn, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: c.jsx(T, {
                          variant: "body2",
                          children: b.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(kn, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Vn, {}),
                  children: c.jsxs(L, {
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
                        children: b.t("json_table_section_formatting")
                      }),
                      c.jsx(Le, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(gn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(On, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsxs(ut, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(dt, {
                            children: b.t("json_table_format_type")
                          }),
                          c.jsxs(ot, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: b.t("json_table_format_type"),
                            onChange: (w) => {
                              const R = w.target.value;
                              R === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : C({
                                type: R
                              });
                            },
                            children: [
                              c.jsxs(se, {
                                value: "auto",
                                children: [
                                  b.t("json_table_format_type_auto"),
                                  ` (${a})`
                                ]
                              }),
                              c.jsx(se, {
                                value: "string",
                                children: b.t("json_table_format_type_string")
                              }),
                              c.jsx(se, {
                                value: "number",
                                children: b.t("json_table_format_type_number")
                              }),
                              c.jsx(se, {
                                value: "date",
                                children: b.t("json_table_format_type_date")
                              }),
                              c.jsx(se, {
                                value: "boolean",
                                children: b.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (a === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && c.jsx(yu, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: C,
                        discoveredColumn: t
                      }),
                      (a === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && c.jsx(bu, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: C
                      }),
                      (a === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && c.jsx(vu, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: C
                      }),
                      (a === "string" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "string") && c.jsx(xu, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: C
                      }),
                      a !== "number" && a !== "date" && a !== "boolean" && a !== "string" && !e.format && c.jsx(T, {
                        variant: "body2",
                        color: "text.secondary",
                        children: b.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(kn, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Vn, {}),
                  children: c.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(L, {
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
                            children: b.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && c.jsx(ft, {
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
                      c.jsx(Le, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !y,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(gn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(On, {
                  children: c.jsx(Xu, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: a,
                    onStyleChange: j,
                    onModeChange: $
                  })
                })
              ]
            }),
            c.jsxs(kn, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Vn, {}),
                  children: c.jsxs(L, {
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
                        children: b.t("json_table_section_advanced")
                      }),
                      c.jsx(Le, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(je, {
                            size: "small",
                            disabled: !x,
                            onClick: (w) => {
                              w.stopPropagation(), _();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(gn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(On, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(Qu, {
                        globalSorting: o,
                        globalFiltering: r
                      }),
                      c.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(ut, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(dt, {
                                children: b.t("json_table_sortable")
                              }),
                              c.jsxs(ot, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: b.t("json_table_sortable"),
                                onChange: (w) => n({
                                  ...e,
                                  sortable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(se, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(se, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  c.jsx(se, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(qr, {
                            globalEnabled: o,
                            columnOverride: e.sortable,
                            featureLabel: b.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      c.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(ut, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(dt, {
                                children: b.t("json_table_filterable")
                              }),
                              c.jsxs(ot, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: b.t("json_table_filterable"),
                                onChange: (w) => n({
                                  ...e,
                                  filterable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(se, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(se, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  c.jsx(se, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(qr, {
                            globalEnabled: r,
                            columnOverride: e.filterable,
                            featureLabel: b.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && c.jsxs(et, {
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
                            children: b.t("json_table_analysis_info")
                          }),
                          c.jsxs(De, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_type_label")
                                  }),
                                  c.jsx(ft, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: xn[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_confidence")
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
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_nulls")
                                  }),
                                  c.jsxs(T, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      d > 0 && ` (${Math.round(t.nullCount / d * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_distinct")
                                  }),
                                  c.jsx(T, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_range")
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
                              t.dateFormat && c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(T, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_date_input_format")
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
  const rd = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, sd = /^\d{4}-\d{2}-\d{2}$/, id = /^(\d{2})\.(\d{2})\.(\d{4})$/, ld = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, ad = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, cd = /^(\d{2})\/(\d{2})\/(\d{4})$/, ud = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, dd = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Wn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function bo(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Gn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const pd = [
    {
      regex: rd,
      format: "ISO-8601"
    },
    {
      regex: sd,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Wn(n, t);
      }
    },
    {
      regex: ad,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Wn(t, n) && Gn(o, r, s);
      }
    },
    {
      regex: ld,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Wn(t, n) && Gn(o, r);
      }
    },
    {
      regex: id,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Wn(t, n);
      }
    },
    {
      regex: dd,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return bo(t, n) && Gn(o, r, s);
      }
    },
    {
      regex: ud,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return bo(t, n) && Gn(o, r);
      }
    },
    {
      regex: cd,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return bo(t, n);
      }
    }
  ];
  function fd(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of pd) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function gd(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function hd(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = gd(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = fd(e);
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
  function md(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function yd(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function bd(e) {
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
  function Yr(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function vd(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], s = o[2], i = o[3], l = o[4] || "00", a = o[5] || "00", d = o[6] || "00";
        return `${i}-${s}-${r}T${l}:${a}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], s = o[2], i = o[3], l = o[4] || "00", a = o[5] || "00", d = o[6] || "00";
        return `${i}-${r}-${s}T${l}:${a}:${d}`;
      }
    }
    return null;
  }
  function xd(e, t, n = 100, o = 0.8) {
    const r = /* @__PURE__ */ new Map();
    for (const s of e) r.set(s, bd(s));
    for (const s of t) for (const i of e) {
      const l = r.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const a = s[i], d = hd(a);
      if (Yr(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && Yr(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = vd(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((s) => {
      const i = r.get(s);
      let l = md(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < o && (l = "string");
      const a = l === "date" ? yd(i.dateFormatCounts) : void 0, d = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, u = i.nonNullCount > 0 ? Math.round(d / i.nonNullCount * 100) / 100 : 0, f = {
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
      return a && (f.dateFormat = a), l === "number" && (i.numMin !== void 0 && (f.min = i.numMin), i.numMax !== void 0 && (f.max = i.numMax)), l === "date" && (i.dateMin !== void 0 && (f.min = i.dateMin), i.dateMax !== void 0 && (f.max = i.dateMax)), (l === "string" || l === "mixed") && (i.strLenMin !== void 0 && (f.stringLengthMin = i.strLenMin), i.strLenMax !== void 0 && (f.stringLengthMax = i.strLenMax)), f;
    });
  }
  function io(e, t, n, o, r, s, i, l) {
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
      for (let a = 0; a < e.length; a++) {
        a > l.maxArrayIndex && (l.maxArrayIndex = a);
        const d = `${t}[${a}]`;
        io(e[a], d, n, o, r, s + 1, i, l);
      }
      return;
    }
    if (e !== null && typeof e == "object") {
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
        io(e[d], u, n, o, r, s + 1, i, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function _d(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const i of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const d of Object.keys(i)) io(i[d], d, l, n, a, 1, t, o);
      else io(i, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const s = wd([
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
  function wd(e) {
    return e.sort((t, n) => {
      const o = Jr(t), r = Jr(n), s = Math.min(o.length, r.length);
      for (let i = 0; i < s; i++) {
        const l = o[i], a = r[i], d = Kr(l), u = Kr(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function Jr(e) {
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
  function Kr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Cd = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Ns(e, t) {
    const n = performance.now(), o = {
      ...Cd,
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
    const r = _d(e, o.maxDepth), s = xd(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), i = r.paths.length * r.rows.length, l = s.reduce((u, f) => u + f.nullCount, 0), a = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
        nullPercentage: a,
        analysisTimeMs: d
      }
    };
  }
  function Sd(e, t) {
    return m.useMemo(() => Ns(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function jd({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: s, socket: i }) {
    const [l, a] = m.useState(n), [d, u] = m.useState(null), [f, g] = m.useState([]), [p, h] = m.useState(false), [y, v] = m.useState(false), [x, _] = m.useState(null), [C, j] = m.useState(null), $ = m.useRef(false), w = m.useRef(() => Promise.resolve()), R = m.useRef(n), M = m.useMemo(() => JSON.stringify(n), [
      n
    ]), F = m.useMemo(() => JSON.stringify(l) !== M, [
      l,
      M
    ]);
    m.useEffect(() => {
      e && (a(n), R.current = n, u(n.length > 0 ? n[0].path : null), $.current = false, j(null), _(null));
    }, [
      e,
      n
    ]), m.useEffect(() => {
      e && !$.current && ($.current = true, w.current());
    }, [
      e
    ]);
    const I = m.useCallback(async () => {
      h(true), j(null), _(null);
      try {
        const S = s.oid;
        if (!S) return;
        const z = await i.getState(S);
        if ((z == null ? void 0 : z.val) === null || (z == null ? void 0 : z.val) === void 0) return;
        let O;
        const H = z.val;
        if (typeof H == "string") try {
          const X = JSON.parse(H);
          O = Array.isArray(X) ? X : [
            X
          ];
        } catch {
          return;
        }
        else if (Array.isArray(H)) O = H;
        else if (typeof H == "object" && H !== null) O = [
          H
        ];
        else return;
        const Z = s.tableMaxDepth || 10, Q = Ns(O, {
          maxDepth: Z
        });
        if (Q.meta.maxDepth > Z) {
          const X = b.t("json_table_depth_warning").replace("{{actual}}", String(Q.meta.maxDepth)).replace("{{configured}}", String(Z));
          _(X);
        }
        g(Q.columns);
        const ue = new Map(R.current.map((X) => [
          X.path,
          X
        ])), fe = new Set(Q.columns.map((X) => X.path)), N = R.current.filter((X) => fe.has(X.path)), ae = Q.columns.filter((X) => !ue.has(X.path)).map((X) => ({
          path: X.path,
          visible: true,
          headerName: X.path.split(".").pop() || X.path,
          sortable: "auto",
          filterable: "auto"
        })), te = [
          ...N,
          ...ae
        ];
        a(te), R.current = te, u((X) => X === null && te.length > 0 ? te[0].path : X);
      } catch (S) {
        const z = S instanceof Error ? S.message : "Failed to discover columns";
        j(z);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    m.useEffect(() => {
      w.current = I;
    }, [
      I
    ]), m.useEffect(() => {
      R.current = l;
    }, [
      l
    ]);
    const P = m.useCallback((S) => {
      a((z) => z.map((O) => O.path === S.path ? S : O));
    }, []), U = m.useCallback((S) => {
      a(S);
    }, []), k = m.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), W = m.useCallback((S, z) => {
      if (z === "backdropClick" && F) {
        v(true);
        return;
      }
      t();
    }, [
      F,
      t
    ]), Y = m.useMemo(() => d ? l.find((S) => S.path === d) : null, [
      d,
      l
    ]), q = m.useMemo(() => d ? f.find((S) => S.path === d) : void 0, [
      d,
      f
    ]), E = m.useMemo(() => "json-table-column-editor-title", []);
    return c.jsxs(pi, {
      theme: r,
      children: [
        c.jsxs(qo, {
          open: e,
          onClose: W,
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
            c.jsx(Yo, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: E,
              children: c.jsxs(L, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(T, {
                    variant: "h6",
                    children: b.t("json_table_column_editor_title")
                  }),
                  c.jsx(je, {
                    onClick: () => W(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": b.t("close"),
                    children: c.jsx(to, {})
                  })
                ]
              })
            }),
            c.jsxs(Jo, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && c.jsx(Jn, {
                  severity: "warning",
                  onClose: () => _(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                C && c.jsx(Jn, {
                  severity: "error",
                  onClose: () => j(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: C
                }),
                c.jsxs(L, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    c.jsx(L, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: c.jsx(pu, {
                        columns: l,
                        discoveredColumns: f,
                        selectedPath: d,
                        onSelect: u,
                        onChange: U,
                        onRefresh: I,
                        loading: p
                      })
                    }),
                    c.jsx(L, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: Y ? c.jsx(od, {
                        column: Y,
                        discoveredColumn: q,
                        onChange: P,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : c.jsx(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(T, {
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
            c.jsxs(or, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(rt, {
                  onClick: () => W(),
                  children: b.t("cancel")
                }),
                c.jsx(rt, {
                  variant: "contained",
                  onClick: k,
                  disabled: !F,
                  children: b.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(ec, {
          open: y,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(Jn, {
            severity: "warning",
            onClose: () => v(false),
            children: b.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Rd(e, t, n, o) {
    const r = e.name || "columnConfig", s = o.context.theme, [i, l] = m.useState(false), a = m.useMemo(() => zs(t[r]), [
      t,
      r
    ]), d = a.filter((v) => v.visible).length, u = a.length, f = a.some((v) => v.format), g = a.some((v) => v.cellStyle && v.cellStyle.length > 0), p = m.useCallback((v) => {
      const x = JSON.stringify(v), _ = `b64:${uu(x)}`;
      n({
        [r]: _
      });
    }, [
      r,
      n
    ]), h = m.useCallback(() => {
      l(true);
    }, []), y = m.useCallback(() => {
      l(false);
    }, []);
    return c.jsxs(L, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(rt, {
          variant: "outlined",
          startIcon: c.jsx(au, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": b.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: b.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(T, {
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
            f && ` \xB7 ${b.t("json_table_has_formatting")}`,
            g && ` \xB7 ${b.t("json_table_has_styling")}`
          ]
        }),
        c.jsx(jd, {
          open: i,
          onClose: y,
          columns: a,
          onSave: p,
          theme: s,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const Md = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(qe, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Rd
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(qe, {
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
      default: true,
      tooltip: "json_table_filtering_tooltip"
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
      label: "",
      type: "custom",
      component: () => c.jsx(qe, {
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
      component: () => c.jsx(qe, {
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
      component: () => c.jsx(qe, {
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
      component: () => c.jsx(qe, {
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
      component: () => c.jsx(qe, {
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
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: () => c.jsx(qe, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: () => c.jsx(qe, {})
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
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: () => c.jsx(qe, {
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
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: () => c.jsx(qe, {})
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
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: () => c.jsx(qe, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "evenRowColor",
      label: "json_table_even_row_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(wt, {
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
      component: (e, t, n, o) => c.jsx(wt, {
        field: e,
        data: t,
        onDataChange: n,
        props: o
      })
    }
  ];
  function jt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ge(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: jt(n, o[e])
      }));
    };
  }
  function uo(e) {
    return e instanceof Function;
  }
  function $d(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Ad(e, t) {
    const n = [], o = (r) => {
      r.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && o(i);
      });
    };
    return o(e), n;
  }
  function B(e, t, n) {
    let o = [], r;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== o.length || l.some((u, f) => o[f] !== u))) return r;
      o = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), r = t(...l), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
        const u = Math.round((Date.now() - i) * 100) / 100, f = Math.round((Date.now() - d) * 100) / 100, g = f / 16, p = (h, y) => {
          for (h = String(h); h.length < y; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${p(f, 5)} /${p(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return r;
    };
  }
  function V(e, t, n, o) {
    return {
      debug: () => {
        var r;
        return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
      },
      key: false,
      onChange: o
    };
  }
  function Id(e, t, n, o) {
    const r = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(o),
      renderValue: r,
      getContext: B(() => [
        e,
        n,
        t,
        s
      ], (i, l, a, d) => ({
        table: i,
        column: l,
        row: a,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), V(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function Pd(e, t, n, o) {
    var r, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let d = (r = (s = l.id) != null ? s : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? r : typeof l.header == "string" ? l.header : void 0, u;
    if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (g) => {
      let p = g;
      for (const y of a.split(".")) {
        var h;
        p = (h = p) == null ? void 0 : h[y];
      }
      return p;
    } : u = (g) => g[l.accessorKey]), !d) throw new Error();
    let f = {
      id: `${String(d)}`,
      accessorFn: u,
      parent: o,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: B(() => [
        true
      ], () => {
        var g;
        return [
          f,
          ...(g = f.columns) == null ? void 0 : g.flatMap((p) => p.getFlatColumns())
        ];
      }, V(e.options, "debugColumns")),
      getLeafColumns: B(() => [
        e._getOrderColumnsFn()
      ], (g) => {
        var p;
        if ((p = f.columns) != null && p.length) {
          let h = f.columns.flatMap((y) => y.getLeafColumns());
          return g(h);
        }
        return [
          f
        ];
      }, V(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(f, e);
    return f;
  }
  const Ie = "debugHeaders";
  function Xr(e, t, n) {
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
        const i = [], l = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), i.push(a);
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
  const Fd = {
    createTable: (e) => {
      e.getHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var s, i;
        const l = (s = o == null ? void 0 : o.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? s : [], a = (i = r == null ? void 0 : r.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? i : [], d = n.filter((f) => !(o != null && o.includes(f.id)) && !(r != null && r.includes(f.id)));
        return Un(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, V(e.options, Ie)), e.getCenterHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((s) => !(o != null && o.includes(s.id)) && !(r != null && r.includes(s.id))), Un(t, n, e, "center")), V(e.options, Ie)), e.getLeftHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const s = (r = o == null ? void 0 : o.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? r : [];
        return Un(t, s, e, "left");
      }, V(e.options, Ie)), e.getRightHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const s = (r = o == null ? void 0 : o.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? r : [];
        return Un(t, s, e, "right");
      }, V(e.options, Ie)), e.getFooterGroups = B(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Ie)), e.getLeftFooterGroups = B(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Ie)), e.getCenterFooterGroups = B(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Ie)), e.getRightFooterGroups = B(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Ie)), e.getFlatHeaders = B(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Ie)), e.getLeftFlatHeaders = B(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Ie)), e.getCenterFlatHeaders = B(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Ie)), e.getRightFlatHeaders = B(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Ie)), e.getCenterLeafHeaders = B(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), V(e.options, Ie)), e.getLeftLeafHeaders = B(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), V(e.options, Ie)), e.getRightLeafHeaders = B(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), V(e.options, Ie)), e.getLeafHeaders = B(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, o) => {
        var r, s, i, l, a, d;
        return [
          ...(r = (s = t[0]) == null ? void 0 : s.headers) != null ? r : [],
          ...(i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : [],
          ...(a = (d = o[0]) == null ? void 0 : d.headers) != null ? a : []
        ].map((u) => u.getLeafHeaders()).flat();
      }, V(e.options, Ie));
    }
  };
  function Un(e, t, n, o) {
    var r, s;
    let i = 0;
    const l = function(g, p) {
      p === void 0 && (p = 1), i = Math.max(i, p), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var y;
        (y = h.columns) != null && y.length && l(h.columns, p + 1);
      }, 0);
    };
    l(e);
    let a = [];
    const d = (g, p) => {
      const h = {
        depth: p,
        id: [
          o,
          `${p}`
        ].filter(Boolean).join("_"),
        headers: []
      }, y = [];
      g.forEach((v) => {
        const x = [
          ...y
        ].reverse()[0], _ = v.column.depth === h.depth;
        let C, j = false;
        if (_ && v.column.parent ? C = v.column.parent : (C = v.column, j = true), x && (x == null ? void 0 : x.column) === C) x.subHeaders.push(v);
        else {
          const $ = Xr(n, C, {
            id: [
              o,
              p,
              C.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${y.filter((w) => w.column === C).length}` : void 0,
            depth: p,
            index: y.length
          });
          $.subHeaders.push(v), y.push($);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), p > 0 && d(y, p - 1);
    }, u = t.map((g, p) => Xr(n, g, {
      depth: i,
      index: p
    }));
    d(u, i - 1), a.reverse();
    const f = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let y = 0, v = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], f(h.subHeaders).forEach((C) => {
        let { colSpan: j, rowSpan: $ } = C;
        y += j, x.push($);
      })) : y = 1;
      const _ = Math.min(...x);
      return v = v + _, h.colSpan = y, h.rowSpan = v, {
        colSpan: y,
        rowSpan: v
      };
    });
    return f((r = (s = a[0]) == null ? void 0 : s.headers) != null ? r : []), a;
  }
  const rr = (e, t, n, o, r, s, i) => {
    let l = {
      id: t,
      index: o,
      original: n,
      depth: r,
      parentId: i,
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
      getLeafRows: () => Ad(l.subRows, (a) => a.subRows),
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
      getAllCells: B(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => Id(e, l, d, d.id)), V(e.options, "debugRows")),
      _getAllCellsByColumnId: B(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), V(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, zd = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, Ls = (e, t, n) => {
    var o, r;
    const s = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(s));
  };
  Ls.autoRemove = (e) => Ze(e);
  const Hs = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  Hs.autoRemove = (e) => Ze(e);
  const Bs = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  Bs.autoRemove = (e) => Ze(e);
  const Vs = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  Vs.autoRemove = (e) => Ze(e);
  const Ws = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  Ws.autoRemove = (e) => Ze(e) || !(e != null && e.length);
  const Gs = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  Gs.autoRemove = (e) => Ze(e) || !(e != null && e.length);
  const Us = (e, t, n) => e.getValue(t) === n;
  Us.autoRemove = (e) => Ze(e);
  const qs = (e, t, n) => e.getValue(t) == n;
  qs.autoRemove = (e) => Ze(e);
  const sr = (e, t, n) => {
    let [o, r] = n;
    const s = e.getValue(t);
    return s >= o && s <= r;
  };
  sr.resolveFilterValue = (e) => {
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
  sr.autoRemove = (e) => Ze(e) || Ze(e[0]) && Ze(e[1]);
  const ct = {
    includesString: Ls,
    includesStringSensitive: Hs,
    equalsString: Bs,
    arrIncludes: Vs,
    arrIncludesAll: Ws,
    arrIncludesSome: Gs,
    equals: Us,
    weakEquals: qs,
    inNumberRange: sr
  };
  function Ze(e) {
    return e == null || e === "";
  }
  const Td = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Ge("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
        return typeof o == "string" ? ct.includesString : typeof o == "number" ? ct.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? ct.equals : Array.isArray(o) ? ct.arrIncludes : ct.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return uo(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : ct[e.columnDef.filterFn];
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
          if (Qr(r, i, e)) {
            var l;
            return (l = o == null ? void 0 : o.filter((u) => u.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: i
          };
          if (s) {
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
          var s;
          return (s = jt(t, r)) == null ? void 0 : s.filter((i) => {
            const l = n.find((a) => a.id === i.id);
            if (l) {
              const a = l.getFilterFn();
              if (Qr(a, i.value, l)) return false;
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
  function Qr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Dd = (e, t, n) => n.reduce((o, r) => {
    const s = r.getValue(e);
    return o + (typeof s == "number" ? s : 0);
  }, 0), Ed = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const s = r.getValue(e);
      s != null && (o > s || o === void 0 && s >= s) && (o = s);
    }), o;
  }, kd = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const s = r.getValue(e);
      s != null && (o < s || o === void 0 && s >= s) && (o = s);
    }), o;
  }, Od = (e, t, n) => {
    let o, r;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (o === void 0 ? i >= i && (o = r = i) : (o > i && (o = i), r < i && (r = i)));
    }), [
      o,
      r
    ];
  }, Nd = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let s = r.getValue(e);
      s != null && (s = +s) >= s && (++n, o += s);
    }), n) return o / n;
  }, Ld = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!$d(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, Hd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Bd = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Vd = (e, t) => t.length, vo = {
    sum: Dd,
    min: Ed,
    max: kd,
    extent: Od,
    mean: Nd,
    median: Ld,
    unique: Hd,
    uniqueCount: Bd,
    count: Vd
  }, Wd = {
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
      onGroupingChange: Ge("grouping", e),
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
        if (typeof o == "number") return vo.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return vo.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return uo(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : vo[e.columnDef.aggregationFn];
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
  function Gd(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? o : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...o
    ];
  }
  const Ud = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ge("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = B((n) => [
        _n(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), V(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = _n(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = _n(t, n);
        return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = B(() => [
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
            const a = i.shift(), d = l.findIndex((u) => u.id === a);
            d > -1 && s.push(l.splice(d, 1)[0]);
          }
          s = [
            ...s,
            ...l
          ];
        }
        return Gd(s, n, o);
      }, V(e.options, "debugTable"));
    }
  }, xo = () => ({
    left: [],
    right: []
  }), qd = {
    getInitialState: (e) => ({
      columnPinning: xo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ge("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
        t.setColumnPinning((r) => {
          var s, i;
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
            var d, u;
            return {
              left: [
                ...((d = r == null ? void 0 : r.left) != null ? d : []).filter((f) => !(o != null && o.includes(f))),
                ...o
              ],
              right: ((u = r == null ? void 0 : r.right) != null ? u : []).filter((f) => !(o != null && o.includes(f)))
            };
          }
          return {
            left: ((s = r == null ? void 0 : r.left) != null ? s : []).filter((f) => !(o != null && o.includes(f))),
            right: ((i = r == null ? void 0 : r.right) != null ? i : []).filter((f) => !(o != null && o.includes(f)))
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
      e.getCenterVisibleCells = B(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, o, r) => {
        const s = [
          ...o ?? [],
          ...r ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, V(t.options, "debugRows")), e.getLeftVisibleCells = B(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), V(t.options, "debugRows")), e.getRightVisibleCells = B(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), V(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, o;
        return e.setColumnPinning(t ? xo() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : xo());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const o = e.getState().columnPinning;
        if (!t) {
          var r, s;
          return !!((r = o.left) != null && r.length || (s = o.right) != null && s.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e.getLeftLeafColumns = B(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), V(e.options, "debugColumns")), e.getRightLeafColumns = B(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), V(e.options, "debugColumns")), e.getCenterLeafColumns = B(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o) => {
        const r = [
          ...n ?? [],
          ...o ?? []
        ];
        return t.filter((s) => !r.includes(s.id));
      }, V(e.options, "debugColumns"));
    }
  };
  function Yd(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const qn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, _o = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Jd = {
    getDefaultColumnDef: () => qn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: _o(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Ge("columnSizing", e),
      onColumnSizingInfoChange: Ge("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, o, r;
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : qn.minSize, (o = s ?? e.columnDef.size) != null ? o : qn.size), (r = e.columnDef.maxSize) != null ? r : qn.maxSize);
      }, e.getStart = B((n) => [
        n,
        _n(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, s) => r + s.getSize(), 0), V(t.options, "debugColumns")), e.getAfter = B((n) => [
        n,
        _n(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, s) => r + s.getSize(), 0), V(t.options, "debugColumns")), e.resetSize = () => {
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
          if (!o || !r || (s.persist == null || s.persist(), wo(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = wo(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, u = (x, _) => {
            typeof _ == "number" && (t.setColumnSizingInfo((C) => {
              var j, $;
              const w = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (_ - ((j = C == null ? void 0 : C.startOffset) != null ? j : 0)) * w, M = Math.max(R / (($ = C == null ? void 0 : C.startSize) != null ? $ : 0), -0.999999);
              return C.columnSizingStart.forEach((F) => {
                let [I, P] = F;
                d[I] = Math.round(Math.max(P + P * M, 0) * 100) / 100;
              }), {
                ...C,
                deltaOffset: R,
                deltaPercentage: M
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((C) => ({
              ...C,
              ...d
            })));
          }, f = (x) => u("move", x), g = (x) => {
            u("end", x), t.setColumnSizingInfo((_) => ({
              ..._,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, p = Yd(n), h = {
            moveHandler: (x) => f(x.clientX),
            upHandler: (x) => {
              p == null ? void 0 : p.removeEventListener("mousemove", h.moveHandler), p == null ? void 0 : p.removeEventListener("mouseup", h.upHandler), g(x.clientX);
            }
          }, y = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), f(x.touches[0].clientX), false),
            upHandler: (x) => {
              var _;
              p == null ? void 0 : p.removeEventListener("touchmove", y.moveHandler), p == null ? void 0 : p.removeEventListener("touchend", y.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((_ = x.touches[0]) == null ? void 0 : _.clientX);
            }
          }, v = Kd() ? {
            passive: false
          } : false;
          wo(s) ? (p == null ? void 0 : p.addEventListener("touchmove", y.moveHandler, v), p == null ? void 0 : p.addEventListener("touchend", y.upHandler, v)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, v), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((x) => ({
            ...x,
            startOffset: a,
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
        e.setColumnSizingInfo(t ? _o() : (n = e.initialState.columnSizingInfo) != null ? n : _o());
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
  let Yn = null;
  function Kd() {
    if (typeof Yn == "boolean") return Yn;
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
    return Yn = e, Yn;
  }
  function wo(e) {
    return e.type === "touchstart";
  }
  const Xd = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Ge("columnVisibility", e)
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
      e._getAllVisibleCells = B(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((o) => o.column.getIsVisible()), V(t.options, "debugRows")), e.getVisibleCells = B(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, o, r) => [
        ...n,
        ...o,
        ...r
      ], V(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, o) => B(() => [
        o(),
        o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")
      ], (r) => r.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), V(e.options, "debugColumns"));
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
  function _n(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const Qd = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Zd = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ge("globalFilter", e),
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
      e.getGlobalAutoFilterFn = () => ct.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return uo(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : ct[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, ep = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Ge("expanded", e),
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
            const { [e.id]: l, ...a } = i;
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
  }, Lo = 0, Ho = 10, Co = () => ({
    pageIndex: Lo,
    pageSize: Ho
  }), tp = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...Co(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Ge("pagination", e)
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
        e.setPagination(o ? Co() : (r = e.initialState.pagination) != null ? r : Co());
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
        e.setPageIndex(o ? Lo : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? r : Lo);
      }, e.resetPageSize = (o) => {
        var r, s;
        e.setPageSize(o ? Ho : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? r : Ho);
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
      }), e.getPageOptions = B(() => [
        e.getPageCount()
      ], (o) => {
        let r = [];
        return o && o > 0 && (r = [
          ...new Array(o)
        ].fill(null).map((s, i) => i)), r;
      }, V(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
  }, So = () => ({
    top: [],
    bottom: []
  }), np = {
    getInitialState: (e) => ({
      rowPinning: So(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ge("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, o, r) => {
        const s = o ? e.getLeafRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], i = r ? e.getParentRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], l = /* @__PURE__ */ new Set([
          ...i,
          e.id,
          ...s
        ]);
        t.setRowPinning((a) => {
          var d, u;
          if (n === "bottom") {
            var f, g;
            return {
              top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter((y) => !(l != null && l.has(y))),
              bottom: [
                ...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((y) => !(l != null && l.has(y))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var p, h;
            return {
              top: [
                ...((p = a == null ? void 0 : a.top) != null ? p : []).filter((y) => !(l != null && l.has(y))),
                ...Array.from(l)
              ],
              bottom: ((h = a == null ? void 0 : a.bottom) != null ? h : []).filter((y) => !(l != null && l.has(y)))
            };
          }
          return {
            top: ((d = a == null ? void 0 : a.top) != null ? d : []).filter((y) => !(l != null && l.has(y))),
            bottom: ((u = a == null ? void 0 : a.bottom) != null ? u : []).filter((y) => !(l != null && l.has(y)))
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
        return e.setRowPinning(t ? So() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : So());
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
      }, e.getTopRows = B(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), V(e.options, "debugRows")), e.getBottomRows = B(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), V(e.options, "debugRows")), e.getCenterRows = B(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, o) => {
        const r = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...o ?? []
        ]);
        return t.filter((s) => !r.has(s.id));
      }, V(e.options, "debugRows"));
    }
  }, op = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Ge("rowSelection", e),
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
          Bo(r, s.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = B(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? jo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getFilteredSelectedRowModel = B(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? jo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getGroupedSelectedRowModel = B(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? jo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
          return Bo(l, e.id, n, (i = o == null ? void 0 : o.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return ir(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Vo(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Vo(e, n) === "all";
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
  }, Bo = (e, t, n, o, r) => {
    var s;
    const i = r.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], o && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => Bo(e, l.id, n, o, r));
  };
  function jo(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, s = function(i, l) {
      return i.map((a) => {
        var d;
        const u = ir(a, n);
        if (u && (o.push(a), r[a.id] = a), (d = a.subRows) != null && d.length && (a = {
          ...a,
          subRows: s(a.subRows)
        }), u) return a;
      }).filter(Boolean);
    };
    return {
      rows: s(t.rows),
      flatRows: o,
      rowsById: r
    };
  }
  function ir(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Vo(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !r) && (i.getCanSelect() && (ir(i, t) ? s = true : r = false), i.subRows && i.subRows.length)) {
        const l = Vo(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), r = false);
      }
    }), r ? "all" : s ? "some" : false;
  }
  const Wo = /([0-9]+)/gm, rp = (e, t, n) => Ys(Rt(e.getValue(n)).toLowerCase(), Rt(t.getValue(n)).toLowerCase()), sp = (e, t, n) => Ys(Rt(e.getValue(n)), Rt(t.getValue(n))), ip = (e, t, n) => lr(Rt(e.getValue(n)).toLowerCase(), Rt(t.getValue(n)).toLowerCase()), lp = (e, t, n) => lr(Rt(e.getValue(n)), Rt(t.getValue(n))), ap = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, cp = (e, t, n) => lr(e.getValue(n), t.getValue(n));
  function lr(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function Rt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Ys(e, t) {
    const n = e.split(Wo).filter(Boolean), o = t.split(Wo).filter(Boolean);
    for (; n.length && o.length; ) {
      const r = n.shift(), s = o.shift(), i = parseInt(r, 10), l = parseInt(s, 10), a = [
        i,
        l
      ].sort();
      if (isNaN(a[0])) {
        if (r > s) return 1;
        if (s > r) return -1;
        continue;
      }
      if (isNaN(a[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
    return n.length - o.length;
  }
  const pn = {
    alphanumeric: rp,
    alphanumericCaseSensitive: sp,
    text: ip,
    textCaseSensitive: lp,
    datetime: ap,
    basic: cp
  }, up = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Ge("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let o = false;
        for (const r of n) {
          const s = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return pn.datetime;
          if (typeof s == "string" && (o = true, s.split(Wo).length > 1)) return pn.alphanumeric;
        }
        return o ? pn.text : pn.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return uo(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : pn[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, o) => {
        const r = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((p) => p.id === e.id), a = i == null ? void 0 : i.findIndex((p) => p.id === e.id);
          let d = [], u, f = s ? n : r === "desc";
          if (i != null && i.length && e.getCanMultiSort() && o ? l ? u = "toggle" : u = "add" : i != null && i.length && a !== i.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (s || r || (u = "remove")), u === "add") {
            var g;
            d = [
              ...i,
              {
                id: e.id,
                desc: f
              }
            ], d.splice(0, d.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else u === "toggle" ? d = i.map((p) => p.id === e.id ? {
            ...p,
            desc: f
          } : p) : u === "remove" ? d = i.filter((p) => p.id !== e.id) : d = [
            {
              id: e.id,
              desc: f
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
  }, dp = [
    Fd,
    Xd,
    Ud,
    qd,
    zd,
    Td,
    Qd,
    Zd,
    up,
    Wd,
    ep,
    tp,
    np,
    op,
    Jd
  ];
  function pp(e) {
    var t, n;
    const o = [
      ...dp,
      ...(t = e._features) != null ? t : []
    ];
    let r = {
      _features: o
    };
    const s = r._features.reduce((g, p) => Object.assign(g, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)), {}), i = (g) => r.options.mergeOptions ? r.options.mergeOptions(s, g) : {
      ...s,
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
    const d = [];
    let u = false;
    const f = {
      _features: o,
      options: {
        ...s,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        d.push(g), u || (u = true, Promise.resolve().then(() => {
          for (; d.length; ) d.shift()();
          u = false;
        }).catch((p) => setTimeout(() => {
          throw p;
        })));
      },
      reset: () => {
        r.setState(r.initialState);
      },
      setOptions: (g) => {
        const p = jt(g, r.options);
        r.options = i(p);
      },
      getState: () => r.options.state,
      setState: (g) => {
        r.options.onStateChange == null || r.options.onStateChange(g);
      },
      _getRowId: (g, p, h) => {
        var y;
        return (y = r.options.getRowId == null ? void 0 : r.options.getRowId(g, p, h)) != null ? y : `${h ? [
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
      _getDefaultColumnDef: B(() => [
        r.options.defaultColumn
      ], (g) => {
        var p;
        return g = (p = g) != null ? p : {}, {
          header: (h) => {
            const y = h.header.column.columnDef;
            return y.accessorKey ? y.accessorKey : y.accessorFn ? y.id : null;
          },
          cell: (h) => {
            var y, v;
            return (y = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? y : null;
          },
          ...r._features.reduce((h, y) => Object.assign(h, y.getDefaultColumnDef == null ? void 0 : y.getDefaultColumnDef()), {}),
          ...g
        };
      }, V(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: B(() => [
        r._getColumnDefs()
      ], (g) => {
        const p = function(h, y, v) {
          return v === void 0 && (v = 0), h.map((x) => {
            const _ = Pd(r, x, v, y), C = x;
            return _.columns = C.columns ? p(C.columns, _, v + 1) : [], _;
          });
        };
        return p(g);
      }, V(e, "debugColumns")),
      getAllFlatColumns: B(() => [
        r.getAllColumns()
      ], (g) => g.flatMap((p) => p.getFlatColumns()), V(e, "debugColumns")),
      _getAllFlatColumnsById: B(() => [
        r.getAllFlatColumns()
      ], (g) => g.reduce((p, h) => (p[h.id] = h, p), {}), V(e, "debugColumns")),
      getAllLeafColumns: B(() => [
        r.getAllColumns(),
        r._getOrderColumnsFn()
      ], (g, p) => {
        let h = g.flatMap((y) => y.getLeafColumns());
        return p(h);
      }, V(e, "debugColumns")),
      getColumn: (g) => r._getAllFlatColumnsById()[g]
    };
    Object.assign(r, f);
    for (let g = 0; g < r._features.length; g++) {
      const p = r._features[g];
      p == null || p.createTable == null || p.createTable(r);
    }
    return r;
  }
  function fp() {
    return (e) => B(() => [
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
          const u = rr(e, e._getRowId(r[d], d, i), r[d], d, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var a;
            u.originalSubRows = e.options.getSubRows(r[d], d), (a = u.originalSubRows) != null && a.length && (u.subRows = o(u.originalSubRows, s + 1, u));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, V(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function gp(e) {
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
  function hp(e, t, n) {
    return n.options.filterFromLeafRows ? mp(e, t, n) : yp(e, t, n);
  }
  function mp(e, t, n) {
    var o;
    const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var f;
        let p = a[g];
        const h = rr(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (h.columnFilters = p.columnFilters, (f = p.subRows) != null && f.length && d < i) {
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
  function yp(e, t, n) {
    var o;
    const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let p = a[g];
        if (t(p)) {
          var f;
          if ((f = p.subRows) != null && f.length && d < i) {
            const y = rr(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
            y.subRows = l(p.subRows, d + 1), p = y;
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
  function bp() {
    return (e) => B(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, o) => {
      if (!t.rows.length || !(n != null && n.length) && !o) {
        for (let g = 0; g < t.flatRows.length; g++) t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
        return t;
      }
      const r = [], s = [];
      (n ?? []).forEach((g) => {
        var p;
        const h = e.getColumn(g.id);
        if (!h) return;
        const y = h.getFilterFn();
        y && r.push({
          id: g.id,
          filterFn: y,
          resolvedValue: (p = y.resolveFilterValue == null ? void 0 : y.resolveFilterValue(g.value)) != null ? p : g.value
        });
      });
      const i = (n ?? []).map((g) => g.id), l = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
      o && l && a.length && (i.push("__global__"), a.forEach((g) => {
        var p;
        s.push({
          id: g.id,
          filterFn: l,
          resolvedValue: (p = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(o)) != null ? p : o
        });
      }));
      let d, u;
      for (let g = 0; g < t.flatRows.length; g++) {
        const p = t.flatRows[g];
        if (p.columnFilters = {}, r.length) for (let h = 0; h < r.length; h++) {
          d = r[h];
          const y = d.id;
          p.columnFilters[y] = d.filterFn(p, y, d.resolvedValue, (v) => {
            p.columnFiltersMeta[y] = v;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            u = s[h];
            const y = u.id;
            if (u.filterFn(p, y, u.resolvedValue, (v) => {
              p.columnFiltersMeta[y] = v;
            })) {
              p.columnFilters.__global__ = true;
              break;
            }
          }
          p.columnFilters.__global__ !== true && (p.columnFilters.__global__ = false);
        }
      }
      const f = (g) => {
        for (let p = 0; p < i.length; p++) if (g.columnFilters[i[p]] === false) return false;
        return true;
      };
      return hp(t.rows, f, e);
    }, V(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function vp(e) {
    return (t) => B(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, o) => {
      if (!o.rows.length) return o;
      const { pageSize: r, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: a } = o;
      const d = r * s, u = d + r;
      i = i.slice(d, u);
      let f;
      t.options.paginateExpandedRows ? f = {
        rows: i,
        flatRows: l,
        rowsById: a
      } : f = gp({
        rows: i,
        flatRows: l,
        rowsById: a
      }), f.flatRows = [];
      const g = (p) => {
        f.flatRows.push(p), p.subRows.length && p.subRows.forEach(g);
      };
      return f.rows.forEach(g), f;
    }, V(t.options, "debugTable"));
  }
  function xp() {
    return (e) => B(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const o = e.getState().sorting, r = [], s = o.filter((a) => {
        var d;
        return (d = e.getColumn(a.id)) == null ? void 0 : d.getCanSort();
      }), i = {};
      s.forEach((a) => {
        const d = e.getColumn(a.id);
        d && (i[a.id] = {
          sortUndefined: d.columnDef.sortUndefined,
          invertSorting: d.columnDef.invertSorting,
          sortingFn: d.getSortingFn()
        });
      });
      const l = (a) => {
        const d = a.map((u) => ({
          ...u
        }));
        return d.sort((u, f) => {
          for (let p = 0; p < s.length; p += 1) {
            var g;
            const h = s[p], y = i[h.id], v = y.sortUndefined, x = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let _ = 0;
            if (v) {
              const C = u.getValue(h.id), j = f.getValue(h.id), $ = C === void 0, w = j === void 0;
              if ($ || w) {
                if (v === "first") return $ ? -1 : 1;
                if (v === "last") return $ ? 1 : -1;
                _ = $ && w ? 0 : $ ? v : -v;
              }
            }
            if (_ === 0 && (_ = y.sortingFn(u, f, h.id)), _ !== 0) return x && (_ *= -1), y.invertSorting && (_ *= -1), _;
          }
          return u.index - f.index;
        }), d.forEach((u) => {
          var f;
          r.push(u), (f = u.subRows) != null && f.length && (u.subRows = l(u.subRows));
        }), d;
      };
      return {
        rows: l(n.rows),
        flatRows: r,
        rowsById: n.rowsById
      };
    }, V(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function fn(e, t) {
    return e ? _p(e) ? m.createElement(e, t) : e : null;
  }
  function _p(e) {
    return wp(e) || typeof e == "function" || Cp(e);
  }
  function wp(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function Cp(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Sp(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = m.useState(() => ({
      current: pp(t)
    })), [o, r] = m.useState(() => n.current.initialState);
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
  function Gt(e, t, n) {
    let o = n.initialDeps ?? [], r, s = true;
    function i() {
      var l, a, d;
      let u;
      n.key && ((l = n.debug) != null && l.call(n)) && (u = Date.now());
      const f = e();
      if (!(f.length !== o.length || f.some((h, y) => o[y] !== h))) return r;
      o = f;
      let p;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (p = Date.now()), r = t(...f), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - u) * 100) / 100, y = Math.round((Date.now() - p) * 100) / 100, v = y / 16, x = (_, C) => {
          for (_ = String(_); _.length < C; ) _ = " " + _;
          return _;
        };
        console.info(`%c\u23F1 ${x(y, 5)} /${x(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * v, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(r), s = false, r;
    }
    return i.updateDeps = (l) => {
      o = l;
    }, i;
  }
  function Zr(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const jp = (e, t) => Math.abs(e - t) < 1.01, Rp = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, es = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Mp = (e) => e, $p = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, Ap = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    const r = (i) => {
      const { width: l, height: a } = i;
      t({
        width: Math.round(l),
        height: Math.round(a)
      });
    };
    if (r(es(n)), !o.ResizeObserver) return () => {
    };
    const s = new o.ResizeObserver((i) => {
      const l = () => {
        const a = i[0];
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
        r(es(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, ts = {
    passive: true
  }, ns = typeof window > "u" ? true : "onscrollend" in window, Ip = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const s = e.options.useScrollendEvent && ns ? () => {
    } : Rp(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), i = (u) => () => {
      const { horizontal: f, isRtl: g } = e.options;
      r = f ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, s(), t(r, u);
    }, l = i(true), a = i(false);
    n.addEventListener("scroll", l, ts);
    const d = e.options.useScrollendEvent && ns;
    return d && n.addEventListener("scrollend", a, ts), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, Pp = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Fp = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, s;
    const i = e + t;
    (s = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || s.call(r, {
      [o.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class zp {
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
          getItemKey: Mp,
          rangeExtractor: $p,
          onChange: () => {
          },
          measureElement: Pp,
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
      }, this.maybeNotify = Gt(() => (this.calculateRange(), [
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
          const a = s.get(l.lane);
          if (a == null || l.end > a.end ? s.set(l.lane, l) : l.end < a.end && r.set(l.lane, true), r.size === this.options.lanes) break;
        }
        return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = Gt(() => [
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
      }), this.getMeasurements = Gt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: o, scrollMargin: r, getItemKey: s, enabled: i, lanes: l }, a) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const u = this.measurementsCache.slice(0, d), f = new Array(l).fill(void 0);
        for (let g = 0; g < d; g++) {
          const p = u[g];
          p && (f[p.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const p = s(g), h = this.laneAssignments.get(g);
          let y, v;
          if (h !== void 0 && this.options.lanes > 1) {
            y = h;
            const j = f[y], $ = j !== void 0 ? u[j] : void 0;
            v = $ ? $.end + this.options.gap : o + r;
          } else {
            const j = this.options.lanes === 1 ? u[g - 1] : this.getFurthestMeasurement(u, g);
            v = j ? j.end + this.options.gap : o + r, y = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, y);
          }
          const x = a.get(p), _ = typeof x == "number" ? x : this.options.estimateSize(g), C = v + _;
          u[g] = {
            index: g,
            start: v,
            size: _,
            end: C,
            key: p,
            lane: y
          }, f[y] = g;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Gt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, s) => this.range = n.length > 0 && o > 0 ? Tp({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Gt(() => {
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
      }, this.getVirtualItems = Gt(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, o) => {
        const r = [];
        for (let s = 0, i = n.length; s < i; s++) {
          const l = n[s], a = o[l];
          r.push(a);
        }
        return r;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const o = this.getMeasurements();
        if (o.length !== 0) return Zr(o[Js(0, o.length - 1, (r) => Zr(o[r]).start, n)]);
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
          const [f, g] = u;
          this._scrollToOffset(f, {
            adjustments: void 0,
            behavior: r
          }), this.targetWindow.requestAnimationFrame(() => {
            const p = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), y = this.getOffsetForIndex(n, g);
              if (!y) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              jp(y[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(p) : p();
          });
        }, a = (d) => {
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
  const Js = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, s = n(r);
      if (s < o) e = r + 1;
      else if (s > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Tp({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, s = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let i = Js(0, r, s, n), l = i;
    if (o === 1) for (; l < r && e[l].end < n + t; ) l++;
    else if (o > 1) {
      const a = Array(o).fill(0);
      for (; l < r && a.some((u) => u < n + t); ) {
        const u = e[l];
        a[u.lane] = u.end, l++;
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
  const os = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
  function Dp({ useFlushSync: e = true, ...t }) {
    const n = m.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? fi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [r] = m.useState(() => new zp(o));
    return r.setOptions(o), os(() => r._didMount(), []), os(() => r._willUpdate()), r;
  }
  function Ep(e) {
    return Dp({
      observeElementRect: Ap,
      observeElementOffset: Ip,
      scrollToFn: Fp,
      ...e
    });
  }
  function kp(e, t) {
    var _a2, _b;
    let n = false, o = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (o = Ts(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          o = Es(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          o = Do(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          o = ks(String(o), t.format);
          break;
      }
    } catch {
    }
    if (!t) return {
      displayValue: o,
      textSx: {},
      bgSx: {}
    };
    const r = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? Ds(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const a of t.cellStyle) if (a.logic && qu(a.logic, s)) {
        if (a.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const d = Et(a.backgroundColor);
          d ? i.background = d : i.backgroundColor = a.backgroundColor;
        }
        if (a.textColor && !("color" in l) && !("background" in l)) {
          const d = Et(a.textColor);
          d ? (l.background = d, l.backgroundClip = "text", l.WebkitBackgroundClip = "text", l.color = "transparent") : l.color = a.textColor;
        }
        if (a.fontWeight && !l.fontWeight && (l.fontWeight = a.fontWeight), a.fontStyle && !l.fontStyle && (l.fontStyle = a.fontStyle), r) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !l.fontWeight && (l.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !l.fontStyle && (l.fontStyle = "italic"), t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in l) && !("background" in l) && (l.color = t.format.stringTextColor)), {
      displayValue: o,
      textSx: l,
      bgSx: i,
      isTruncated: n
    };
  }
  function rs({ value: e, config: t, valueSize: n }) {
    const { displayValue: o, textSx: r, bgSx: s, isTruncated: i } = m.useMemo(() => kp(e, t), [
      e,
      t
    ]);
    return c.jsxs(L, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        padding: "0 8px",
        ...s
      },
      children: [
        c.jsx(T, {
          variant: "body2",
          component: L,
          title: o,
          sx: {
            flex: 1,
            minWidth: 0,
            lineHeight: "inherit",
            ...n && {
              fontSize: n
            },
            ...r
          },
          dangerouslySetInnerHTML: {
            __html: o ?? ""
          }
        }),
        i && c.jsx(ft, {
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
  function ss(e) {
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
  function Op(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: o, tableRowSelection: r, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: a, tableSorting: d, tableQuickFilter: u, gridRowsLength: f } = e, g = m.useRef([]), p = m.useRef([]), h = m.useRef(""), y = m.useRef(d), v = m.useRef(a), x = m.useRef(u), [_, C] = m.useState([]);
    m.useEffect(() => {
      d ? !y.current && g.current.length > 0 && C(g.current) : C((O) => (O.length > 0 && (g.current = O), [])), y.current = d;
    }, [
      d
    ]);
    const [j, $] = m.useState([]);
    m.useEffect(() => {
      a ? !v.current && p.current.length > 0 && $(p.current) : $((O) => (O.length > 0 && (p.current = O), [])), v.current = a;
    }, [
      a
    ]);
    const [w, R] = m.useState("");
    m.useEffect(() => {
      u ? !x.current && h.current && R(h.current) : R((O) => (O && (h.current = O), "")), x.current = u;
    }, [
      u
    ]);
    const [M, F] = m.useState({}), [I, P] = m.useState(() => {
      if (o) return {};
      const O = `jtc_col_sizes_${t}`;
      try {
        const Z = localStorage.getItem(O);
        if (Z) return JSON.parse(Z);
      } catch {
      }
      const H = {};
      return n.forEach((Z) => {
        Z.width && (H[Z.path] = Z.width);
      }), r === true && (H.__select__ = 48), H;
    });
    m.useEffect(() => {
      if (!o) try {
        localStorage.setItem(`jtc_col_sizes_${t}`, JSON.stringify(I));
      } catch {
      }
    }, [
      I,
      t,
      o
    ]);
    const U = m.useMemo(() => Number(s) || 25, [
      s
    ]), [k, W] = m.useState({
      pageIndex: 0,
      pageSize: U
    });
    m.useEffect(() => {
      W((O) => O.pageSize === U ? O : {
        pageIndex: 0,
        pageSize: U
      });
    }, [
      U
    ]);
    const Y = m.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(f, 1)
    } : k, [
      l,
      f,
      k
    ]), q = m.useMemo(() => ss(i), [
      i
    ]), [E, S] = m.useState({}), z = m.useCallback(() => {
      S({});
    }, []);
    return {
      sorting: _,
      columnFilters: j,
      globalFilter: w,
      rowSelection: M,
      columnSizing: I,
      pagination: k,
      effectivePagination: Y,
      columnVisibility: E,
      setSorting: C,
      setColumnFilters: $,
      setGlobalFilter: R,
      setRowSelection: F,
      setColumnSizing: P,
      setPagination: W,
      setColumnVisibility: S,
      pageSizeOptions: q,
      parsePageSizeOptions: ss,
      showAllColumns: z
    };
  }
  const Np = [
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
  ], Lp = [
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
  ], Hp = [
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
  ], Bp = [
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
  ], Vp = [
    {
      value: "true",
      label: "json_table_filter_boolean_true"
    },
    {
      value: "false",
      label: "json_table_filter_boolean_false"
    }
  ];
  function Wp(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function Gp(e) {
    if (e == null || e === "") return "";
    if (typeof e == "string" && /^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
    try {
      const t = new Date(e);
      if (!isNaN(t.getTime())) return t.toISOString().split("T")[0];
    } catch {
    }
    return typeof e == "string" ? e : typeof e == "number" ? String(e) : "";
  }
  function Up({ open: e, onClose: t, onApply: n, currentValue: o, columnId: r, columnType: s }) {
    const i = tn(), l = Da(i.breakpoints.down("sm")), a = m.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), d = m.useMemo(() => {
      switch (a) {
        case "number":
          return Lp;
        case "date":
          return Hp;
        case "boolean":
          return Bp;
        default:
          return Np;
      }
    }, [
      a
    ]), u = m.useMemo(() => {
      const M = Wp(a);
      if (o == null) return {
        operator: M,
        value: ""
      };
      if (typeof o == "object" && o !== null && "operator" in o) {
        const F = o;
        return d.some((P) => P.value === F.operator) ? F : {
          operator: M,
          value: F.value
        };
      }
      return typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? {
        operator: M,
        value: o
      } : {
        operator: M,
        value: JSON.stringify(o)
      };
    }, [
      o,
      a,
      d
    ]), [f, g] = m.useState(u.operator), [p, h] = m.useState(typeof u.value == "boolean" ? String(u.value) : u.value), y = m.useMemo(() => o != null, [
      o
    ]);
    m.useEffect(() => {
      e && (g(u.operator), h(typeof u.value == "boolean" ? String(u.value) : u.value));
    }, [
      u,
      e
    ]);
    const v = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(f), x = m.useCallback(() => {
      if (!v) {
        n({
          operator: f,
          value: ""
        });
        return;
      }
      if (a === "boolean") {
        n({
          operator: f,
          value: p === "true"
        });
        return;
      }
      const M = typeof p == "string" ? p.trim() : String(p).trim();
      if (M === "") n(void 0);
      else {
        const F = a === "number" ? Number(M) : M;
        n({
          operator: f,
          value: F
        });
      }
    }, [
      v,
      a,
      f,
      p,
      n
    ]), _ = m.useCallback(() => {
      n(void 0);
    }, [
      n
    ]), C = m.useCallback((M) => {
      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), x());
    }, [
      x
    ]), j = m.useCallback((M) => {
      g(M), ([
        "isEmpty",
        "isNotEmpty"
      ].includes(M) || a !== "boolean" && (p === "true" || p === "false")) && h("");
    }, [
      p,
      a
    ]), $ = r.split(".").pop() || r, w = `filter-dialog-title-${r}`, R = `filter-dialog-description-${r}`;
    return c.jsxs(qo, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      fullScreen: l,
      "aria-labelledby": w,
      "aria-describedby": R,
      children: [
        c.jsx(Yo, {
          id: w,
          children: c.jsxs(L, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              b.t("json_table_filter_for_column").replace("{column}", $),
              y && c.jsx(ft, {
                label: b.t("json_table_filter_active"),
                size: "small",
                color: "primary",
                variant: "outlined"
              })
            ]
          })
        }),
        c.jsxs(Jo, {
          children: [
            c.jsx(T, {
              id: R,
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2,
                mt: 1
              },
              children: b.t("json_table_filter_dialog_description")
            }),
            c.jsxs(L, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              onKeyDown: C,
              children: [
                c.jsxs(ut, {
                  fullWidth: true,
                  children: [
                    c.jsx(dt, {
                      id: `filter-operator-label-${r}`,
                      children: b.t("json_table_filter_operator")
                    }),
                    c.jsx(ot, {
                      value: f,
                      label: b.t("json_table_filter_operator"),
                      labelId: `filter-operator-label-${r}`,
                      onChange: (M) => j(M.target.value),
                      children: d.map((M) => c.jsx(se, {
                        value: M.value,
                        children: b.t(M.label)
                      }, M.value))
                    })
                  ]
                }),
                v && a === "boolean" && c.jsxs(ut, {
                  fullWidth: true,
                  children: [
                    c.jsx(dt, {
                      id: `filter-value-label-${r}`,
                      children: b.t("json_table_filter_value")
                    }),
                    c.jsx(ot, {
                      value: p === "true" || p === "false" ? p : "",
                      label: b.t("json_table_filter_value"),
                      labelId: `filter-value-label-${r}`,
                      onChange: (M) => h(M.target.value),
                      children: Vp.map((M) => c.jsx(se, {
                        value: M.value,
                        children: b.t(M.label)
                      }, M.value))
                    })
                  ]
                }),
                v && a === "date" && c.jsx(Se, {
                  label: b.t("json_table_filter_value"),
                  value: Gp(p),
                  onChange: (M) => h(M.target.value),
                  type: "date",
                  fullWidth: true,
                  autoFocus: true,
                  InputLabelProps: {
                    shrink: true
                  }
                }),
                v && a === "number" && c.jsx(Se, {
                  label: b.t("json_table_filter_value"),
                  value: p,
                  onChange: (M) => h(M.target.value),
                  type: "number",
                  fullWidth: true,
                  autoFocus: true
                }),
                v && a === "string" && c.jsx(Se, {
                  label: b.t("json_table_filter_value"),
                  value: p,
                  onChange: (M) => h(M.target.value),
                  type: "text",
                  fullWidth: true,
                  autoFocus: true
                }),
                !v && c.jsx(T, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: {
                    fontStyle: "italic"
                  },
                  children: b.t("json_table_filter_no_value_needed")
                })
              ]
            })
          ]
        }),
        c.jsxs(or, {
          sx: {
            px: 3,
            pb: 2
          },
          children: [
            y && c.jsx(rt, {
              onClick: _,
              color: "error",
              sx: {
                mr: "auto"
              },
              children: b.t("json_table_filter_clear")
            }),
            c.jsx(rt, {
              onClick: t,
              children: b.t("cancel")
            }),
            c.jsx(rt, {
              variant: "contained",
              onClick: x,
              disabled: v && a === "boolean" && p !== "true" && p !== "false",
              children: b.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function qp({ anchorEl: e, open: t, onClose: n, activeColumn: o, isSorted: r, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: a, onShowAllColumns: d, hasHiddenColumns: u }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [f, g] = m.useState(false), p = ((_a2 = o == null ? void 0 : o.getCanSort) == null ? void 0 : _a2.call(o)) === true, h = s && ((_b = o == null ? void 0 : o.getCanFilter) == null ? void 0 : _b.call(o)) === true, y = ((_c2 = o == null ? void 0 : o.getCanHide) == null ? void 0 : _c2.call(o)) === true, v = i != null;
    if (!(p || h || y)) return null;
    const _ = () => {
      o && l([
        {
          id: o.id,
          desc: false
        }
      ]), n();
    }, C = () => {
      o && l([
        {
          id: o.id,
          desc: true
        }
      ]), n();
    }, j = () => {
      o && a(o.id), n();
    }, $ = () => {
      g(true);
    }, w = () => {
      g(false);
    }, R = (P) => {
      o == null ? void 0 : o.setFilterValue(P), g(false), n();
    }, M = () => {
      o == null ? void 0 : o.setFilterValue(void 0), n();
    }, F = () => {
      var _a3;
      (_a3 = o == null ? void 0 : o.toggleVisibility) == null ? void 0 : _a3.call(o, false), n();
    }, I = () => {
      d == null ? void 0 : d(), n();
    };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(gi, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            p && c.jsxs(c.Fragment, {
              children: [
                c.jsxs(se, {
                  onClick: _,
                  children: [
                    c.jsx(rn, {
                      children: c.jsx(As, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: b.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(se, {
                  onClick: C,
                  children: [
                    c.jsx(rn, {
                      children: c.jsx($s, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: b.t("json_table_sort_desc")
                    })
                  ]
                }),
                r && c.jsx(se, {
                  onClick: j,
                  children: c.jsx(T, {
                    variant: "body2",
                    children: b.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            p && h && c.jsx(Io, {}),
            h && c.jsxs(c.Fragment, {
              children: [
                c.jsxs(se, {
                  onClick: $,
                  children: [
                    c.jsx(rn, {
                      children: c.jsx(su, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: b.t("json_table_set_filter")
                    })
                  ]
                }),
                v && c.jsxs(se, {
                  onClick: M,
                  children: [
                    c.jsx(rn, {
                      children: c.jsx(Is, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(T, {
                      variant: "body2",
                      children: b.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (p || h) && y && c.jsx(Io, {}),
            y && c.jsxs(se, {
              onClick: F,
              children: [
                c.jsx(rn, {
                  children: c.jsx(Fs, {
                    fontSize: "small"
                  })
                }),
                c.jsx(T, {
                  variant: "body2",
                  children: b.t("json_table_hide_column")
                })
              ]
            }),
            u && d && c.jsx(se, {
              onClick: I,
              children: c.jsx(T, {
                variant: "body2",
                children: b.t("json_table_show_all_columns")
              })
            })
          ]
        }),
        h && o && f && c.jsx(Up, {
          open: f,
          onClose: w,
          onApply: R,
          currentValue: (_d2 = o.getFilterValue) == null ? void 0 : _d2.call(o),
          columnId: o.id,
          columnType: (_f = (_e2 = o.columnDef) == null ? void 0 : _e2.meta) == null ? void 0 : _f.columnType
        })
      ]
    });
  }
  function Tt(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function is(e) {
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
        const [, s, i, l, a = "0", d = "0", u = "0"] = n, f = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(a, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(f.getTime()) ? null : f.getTime();
      }
      const o = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (o) {
        const [, s, i, l, a = "0", d = "0", u = "0"] = o, f = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(a, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(f.getTime()) ? null : f.getTime();
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
  function Yp(e, t, n) {
    if (e == null) return t === "isEmpty";
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    if (typeof n == "boolean") {
      const d = typeof e == "boolean" ? e : e === "true" || e === 1 ? true : e === "false" || e === 0 ? false : null;
      if (d !== null) switch (t) {
        case "equals":
          return d === n;
        case "notEquals":
          return d !== n;
        default:
          return true;
      }
      return false;
    }
    const o = Tt(e), r = Tt(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const d = is(e), u = is(n);
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
  const Jp = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const r = e.getValue(t);
      return r == null ? false : Tt(r).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const r = e.getValue(t);
      if (r == null) return false;
      const s = Number(r);
      return isNaN(s) ? Tt(r).includes(Tt(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const r = n, s = e.getValue(t);
      return Yp(s, r.operator, r.value);
    }
    const o = e.getValue(t);
    return o == null ? false : Tt(o).includes(Tt(n));
  }, Kp = {
    advanced: Jp
  }, Xp = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Qp = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, Zp = (e) => {
    const { children: t, value: n, ...o } = e;
    return c.jsx(se, {
      ...o,
      value: n,
      children: c.jsx(T, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, ef = () => {
    const e = m.useContext(hi), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = mi("oid"), s = ji("oid"), i = tn(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = m.useMemo(() => {
      if (s == null) return [];
      let D;
      if (typeof s == "string") try {
        D = JSON.parse(s);
      } catch {
        return [];
      }
      else D = s;
      return Array.isArray(D) ? D : typeof D == "object" && D !== null ? [
        D
      ] : [];
    }, [
      s
    ]), u = m.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: f, rows: g, meta: p } = Sd(d, u), h = m.useMemo(() => {
      const D = n.data.tableMaxDepth || 10;
      return p.maxDepth > D ? {
        actual: p.maxDepth,
        configured: D
      } : null;
    }, [
      p.maxDepth,
      n.data.tableMaxDepth
    ]), y = m.useMemo(() => zs(n.data.columnConfig), [
      n.data.columnConfig
    ]), v = n.data.tableDensity || "standard", x = Number(n.data.tableRowHeight) || Xp[v] || 52, _ = Number(n.data.tableHeaderHeight) || Qp[v] || 56, C = m.useMemo(() => g.map((D, A) => ({
      __id: A,
      ...D
    })), [
      g
    ]), j = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, $ = m.useMemo(() => nd({
      columnConfig: y,
      analysisColumns: f,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: j,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false
      },
      renderConfiguredCell: (D, A) => c.jsx(rs, {
        value: D,
        config: A,
        valueSize: r.valueSize
      }),
      renderAutoDetectedCell: (D) => c.jsx(rs, {
        value: D,
        valueSize: r.valueSize
      }),
      renderSelectionHeader: (D) => c.jsx(Cn, {
        size: "small",
        indeterminate: D.getIsSomePageRowsSelected(),
        checked: D.getIsAllPageRowsSelected(),
        onChange: D.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (D) => c.jsx(Cn, {
        size: "small",
        checked: D.getIsSelected(),
        onChange: D.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      y,
      f,
      n.data.tableSorting,
      j,
      n.data.tableRowSelection,
      n.data.tableHiding,
      r.valueSize
    ]), w = n.data.tableAutoSize === true, { sorting: R, columnFilters: M, globalFilter: F, rowSelection: I, columnSizing: P, pagination: U, effectivePagination: k, columnVisibility: W, setSorting: Y, setColumnFilters: q, setGlobalFilter: E, setRowSelection: S, setColumnSizing: z, setPagination: O, setColumnVisibility: H, pageSizeOptions: Z, showAllColumns: Q } = Op({
      widgetId: o,
      columnConfig: y,
      tableAutoSize: w,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: j,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: C.length
    }), ue = Sp({
      data: C,
      columns: $,
      getCoreRowModel: fp(),
      getSortedRowModel: xp(),
      getFilteredRowModel: bp(),
      getPaginationRowModel: vp(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: "includesString",
      filterFns: Kp,
      columnResizeMode: "onChange",
      enableColumnResizing: !w,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: R,
        columnFilters: M,
        globalFilter: F,
        pagination: k,
        rowSelection: I,
        columnSizing: P,
        columnVisibility: W
      },
      onSortingChange: Y,
      onColumnFiltersChange: q,
      onGlobalFilterChange: E,
      onPaginationChange: n.data.tablePagination !== false ? O : void 0,
      onRowSelectionChange: S,
      onColumnSizingChange: z,
      onColumnVisibilityChange: H,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: j,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), fe = m.useRef(null), N = m.useRef(null), [ae, te] = m.useState({}), [X, ze] = m.useState(null), Ae = m.useRef(null), [ge, Me] = m.useState(void 0), [we, ht] = m.useState(void 0), $t = m.useCallback((D, A) => {
      var _a2;
      Ae.current = D;
      const K = D.id, Ce = R.find((nt) => nt.id === K), Oe = (_a2 = M.find((nt) => nt.id === K)) == null ? void 0 : _a2.value;
      Me(Ce), ht(Oe), ze(A);
    }, [
      R,
      M
    ]), lt = m.useCallback(() => {
      ze(null);
    }, []);
    m.useEffect(() => {
      if (!w) return;
      const D = N.current;
      if (!D) return;
      const A = new ResizeObserver(() => {
        const K = D.querySelector("tr[data-row-index]");
        if (!K) return;
        const Ce = K.querySelectorAll("td"), Oe = ue.getHeaderGroups()[0];
        if (!Oe || Ce.length !== Oe.headers.length) return;
        const nt = {};
        Oe.headers.forEach((go, Wt) => {
          const cr = Ce[Wt];
          cr && (nt[go.id] = cr.getBoundingClientRect().width);
        }), te(nt);
      });
      return A.observe(D), () => A.disconnect();
    }, [
      w,
      ue
    ]);
    const mt = m.useMemo(() => {
      const D = {
        tableLayout: w ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) D["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const A = n.data.horizontalCellBorderWidth ?? 1, K = Dn(n.data.horizontalCellBorderColor);
        D["& .MuiTableCell-root"] = {
          ...D["& .MuiTableCell-root"],
          borderBottom: `${A}px solid`,
          borderBottomColor: K || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const A = n.data.verticalCellBorderWidth ?? 1, K = Dn(n.data.verticalCellBorderColor);
        D["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${A}px solid`,
          borderRightColor: K || "divider"
        };
      }
      return D;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      w
    ]), Qe = n.data.tableHeaderBgColor, $e = n.data.tableHeaderTextColor, Ee = n.data.tableHeaderFontSize, At = m.useMemo(() => ({
      height: _,
      padding: 0,
      whiteSpace: "nowrap",
      ...$e && {
        color: $e
      },
      ...Ee && {
        fontSize: `${Ee}px`
      }
    }), [
      _,
      $e,
      Ee
    ]), yt = m.useMemo(() => ({
      ...$e && {
        color: $e
      },
      ...Ee && {
        fontSize: `${Ee}px`
      }
    }), [
      $e,
      Ee
    ]), bt = n.data.noCard === true, vt = n.data.headerBorderWidth ?? 0, It = Dn(n.data.headerBorderColor), xt = m.useMemo(() => {
      const D = n.data.tableHeaderElevation ?? 6, A = bt ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: D > 0 ? i.shadows[D] : "none"
      };
      vt > 0 && (A["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${vt}px`,
        backgroundColor: It || i.palette.divider,
        pointerEvents: "none"
      });
      const K = Qe ? Et(Qe) : null;
      return K ? {
        ...A,
        background: K
      } : Qe ? {
        ...A,
        backgroundColor: Qe
      } : A;
    }, [
      bt,
      Qe,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      vt,
      It
    ]), Ht = m.useMemo(() => {
      const D = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, A = n.data.borderWidth, K = n.data.borderStyle || "solid", Ce = Dn(n.data.borderColor), Oe = n.data.borderRadius;
      return A && A > 0 && (D.border = `${A}px ${K}`, D.borderColor = Ce || "divider"), Oe && (D.borderRadius = Oe), D;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Pt = m.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), nn = m.useCallback((D) => w ? ae[D.id] ?? "auto" : D.getSize(), [
      w,
      ae
    ]), ke = m.useMemo(() => ({
      overflow: "hidden",
      height: x,
      maxHeight: x,
      padding: 0,
      verticalAlign: "middle"
    }), [
      x
    ]), tt = n.data.evenRowColor || null, Ue = n.data.oddRowColor || null, _t = tt ? Et(tt) : null, Pn = Ue ? Et(Ue) : null, Bt = m.useCallback((D) => {
      const A = D % 2 === 0, K = A ? tt : Ue, Ce = A ? _t : Pn;
      if (K) return Ce ? {
        background: Ce
      } : {
        backgroundColor: K
      };
    }, [
      tt,
      Ue,
      _t,
      Pn
    ]), Vt = ue.getRowModel().rows, Ft = Ep({
      count: Vt.length,
      getScrollElement: () => fe.current,
      estimateSize: () => x,
      overscan: 25,
      scrollPaddingStart: x
    }), po = n.data.tableVirtualizeThreshold ?? 50, zt = n.data.tablePagination === false && Vt.length > po ? Ft.getVirtualItems() : null, fo = zt == null ? void 0 : zt[0], Fn = zt == null ? void 0 : zt[zt.length - 1], zn = (fo == null ? void 0 : fo.start) ?? 0, Tn = Fn ? Ft.getTotalSize() - (Fn.end ?? 0) : 0;
    return c.jsxs(yi, {
      isValidType: a,
      data: r,
      oidValue: "",
      children: [
        c.jsx(bi, {
          data: r,
          widget: n
        }),
        a && $.length > 0 ? c.jsxs(L, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(L, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(Se, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: F,
                onChange: (D) => E(D.target.value),
                placeholder: b.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(Ss, {
                      position: "start",
                      children: c.jsx(Ps, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && c.jsx(Jn, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: c.jsx(T, {
                variant: "body2",
                children: b.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            c.jsx(L, {
              sx: Ht,
              children: c.jsx(Cc, {
                ref: fe,
                sx: Pt,
                children: c.jsxs(uc, {
                  size: v === "compact" ? "small" : "medium",
                  sx: mt,
                  children: [
                    c.jsx($c, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...xt,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: ue.getHeaderGroups().map((D) => c.jsx(ln, {
                        children: D.headers.map((A) => {
                          const K = A.column.getCanSort(), Ce = A.column.getIsSorted(), Oe = A.column.columnDef.meta, nt = A.column.id === "__select__", go = !w;
                          return c.jsxs(St, {
                            component: "th",
                            colSpan: A.colSpan,
                            align: (Oe == null ? void 0 : Oe.align) || "left",
                            padding: nt ? "checkbox" : "normal",
                            sx: {
                              width: nn(A),
                              minWidth: nt ? 48 : 40,
                              position: "relative",
                              ...At
                            },
                            children: [
                              nt ? fn(A.column.columnDef.header, A.getContext()) : c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (Oe == null ? void 0 : Oe.align) === "right" ? "flex-end" : (Oe == null ? void 0 : Oe.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  K ? c.jsx(tu, {
                                    active: Ce !== false,
                                    direction: Ce === "desc" ? "desc" : "asc",
                                    onClick: A.column.getToggleSortingHandler(),
                                    children: c.jsx(T, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: yt,
                                      children: fn(A.column.columnDef.header, A.getContext())
                                    })
                                  }) : c.jsx(T, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: yt,
                                    children: fn(A.column.columnDef.header, A.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && (A.column.getCanSort() || j && A.column.getCanFilter() || A.column.getCanHide()) && c.jsx(Le, {
                                    title: b.t("json_table_column_menu"),
                                    children: c.jsx(je, {
                                      size: "small",
                                      "aria-label": b.t("json_table_column_menu"),
                                      onClick: (Wt) => {
                                        Wt.stopPropagation(), $t(A.column, Wt.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: c.jsx(iu, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              go && A.column.getCanResize() && c.jsx(L, {
                                className: "resize-handle",
                                onMouseDown: A.getResizeHandler(),
                                onTouchStart: A.getResizeHandler(),
                                onClick: (Wt) => Wt.stopPropagation(),
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
                                  opacity: A.column.getIsResizing() ? 1 : 0,
                                  bgcolor: A.column.getIsResizing() ? "primary.main" : "divider",
                                  transition: "opacity 0.15s",
                                  "&:hover": {
                                    opacity: 1,
                                    bgcolor: "primary.light"
                                  }
                                }
                              })
                            ]
                          }, A.id);
                        })
                      }, D.id))
                    }),
                    c.jsx(hc, {
                      ref: N,
                      children: zt ? c.jsxs(c.Fragment, {
                        children: [
                          zn > 0 && c.jsx(ln, {
                            children: c.jsx(St, {
                              colSpan: $.length,
                              sx: {
                                height: zn,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          zt.map((D) => {
                            const A = Vt[D.index], K = D.index;
                            return c.jsx(ln, {
                              "data-row-index": K,
                              sx: {
                                height: x,
                                ...Bt(K)
                              },
                              children: A.getVisibleCells().map((Ce) => {
                                var _a2;
                                const Oe = Ce.column.id === "__select__";
                                return c.jsx(St, {
                                  align: ((_a2 = Ce.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                                  padding: Oe ? "checkbox" : "normal",
                                  sx: {
                                    ...ke
                                  },
                                  children: fn(Ce.column.columnDef.cell, Ce.getContext())
                                }, Ce.id);
                              })
                            }, A.id);
                          }),
                          Tn > 0 && c.jsx(ln, {
                            children: c.jsx(St, {
                              colSpan: $.length,
                              sx: {
                                height: Tn,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Vt.map((D, A) => c.jsx(ln, {
                        "data-row-index": A,
                        sx: {
                          height: x,
                          ...Bt(A)
                        },
                        children: D.getVisibleCells().map((K) => {
                          var _a2;
                          const Ce = K.column.id === "__select__";
                          return c.jsx(St, {
                            align: ((_a2 = K.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                            padding: Ce ? "checkbox" : "normal",
                            sx: {
                              ...ke
                            },
                            children: fn(K.column.columnDef.cell, K.getContext())
                          }, K.id);
                        })
                      }, D.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && c.jsx(Uc, {
              component: "div",
              count: ue.getFilteredRowModel().rows.length,
              page: U.pageIndex,
              rowsPerPage: U.pageSize,
              rowsPerPageOptions: Z,
              onPageChange: (D, A) => O((K) => ({
                ...K,
                pageIndex: A
              })),
              onRowsPerPageChange: (D) => O({
                pageIndex: 0,
                pageSize: parseInt(D.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(T, {
                variant: "body2",
                component: "span",
                children: b.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: D, to: A, count: K }) => c.jsx(T, {
                variant: "body2",
                component: "span",
                children: `${D}\u2013${A} / ${K}`
              }),
              slots: {
                menuItem: Zp
              },
              slotProps: {
                select: {
                  renderValue: (D) => c.jsx(T, {
                    variant: "body2",
                    component: "span",
                    children: String(D)
                  })
                }
              }
            }),
            c.jsx(qp, {
              anchorEl: X,
              open: !!X,
              onClose: lt,
              activeColumn: Ae.current,
              isSorted: ge !== void 0,
              tableFiltering: j,
              activeColumnFilter: we,
              onSetSorting: Y,
              onClearSorting: (D) => Y((A) => A.filter((K) => K.id !== D)),
              onShowAllColumns: Q,
              hasHiddenColumns: Object.keys(W).some((D) => W[D] === false)
            })
          ]
        }) : c.jsx(L, {
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
            children: l === void 0 ? b.t("json_table_no_oid") : a ? y.length > 0 && $.length === 0 ? b.t("json_table_all_columns_hidden") : b.t("json_table_no_data") : b.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, tf = [
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
    "tableMaxDepth"
  ];
  Go = class extends b {
    static createObjectFields() {
      const t = vi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (s, i, l, a) => {
          if (!i.oid) {
            for (const d of tf) delete i[d];
            r || l(i);
          }
          r && await r(s, i, l, a);
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
              ...fr()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Go.createObjectFields(),
              ...Md()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...fr({
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
      return Go.getWidgetInfo();
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
      return xi(this.wrapContent(c.jsx(ef, {})), n);
    }
  };
});
export {
  __tla,
  Go as default
};
