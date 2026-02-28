import { g as ve, a as be, u as xe, Z as Ns, _ as Ls, $ as _n, a0 as qt, h as Kt, j as c, s as K, d as se, e as we, a1 as er, m as fe, a2 as Kr, b as ie, P as st, B as Yn, c as le, I as Se, W as U, a3 as xo, M as wo, X as It, a4 as dn, a5 as Vs, f as tr, a6 as Hs, a7 as Vo, i as Fe, a8 as Xr, a9 as vn, T as F, r as Bs, U as Ws, aa as Gs, ab as nr, ac as Us, ad as Qr, ae as Co, af as qs, ag as or, ah as Ys, R as _t, o as W, ai as $e, G as v, aj as Ft, ak as zt, al as Js, am as Ks, D as Zr, w as Dt, an as Xs, ao as Qs, C as Xe, F as wt, ap as Zs, n as ei, q as ti, K as In, x as ni, y as oi, aq as ri, A as si, z as rr, E as ii, __tla as __tla_0 } from "./useData-CoMv8b7s.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as bn, __tla as __tla_2 } from "./Checkbox-CjPg9dWs.js";
import { D as es, a as ts, b as ns, __tla as __tla_3 } from "./DialogTitle-CJWtNrVp.js";
import { B as Et, __tla as __tla_4 } from "./Button-BOWf2z70.js";
import { S as li, __tla as __tla_5 } from "./Slider-DgHpn0IP.js";
import { F as kt, __tla as __tla_6 } from "./FormControlLabel-BAm8tbJK.js";
import { S as pn, __tla as __tla_7 } from "./Switch-hq_W31Xv.js";
import { M as de, __tla as __tla_8 } from "./MenuItem-CzBojcp8.js";
import { S as ke, __tla as __tla_9 } from "./Stack-CzOOYs5P.js";
import { T as os, a as Jn, __tla as __tla_10 } from "./ToggleButtonGroup-DG2CiFmV.js";
import { C as Kn, __tla as __tla_11 } from "./Close-CQt1dGJP.js";
import { u as ai, __tla as __tla_12 } from "./useOidValue-DFyPWDrl.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Dz75iFvF.js";
import { __tla as __tla_14 } from "./listItemTextClasses-CJ06hn_z.js";
let Lo;
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
  function ci(e) {
    return ve("MuiCollapse", e);
  }
  be("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const ui = (e) => {
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
    return we(o, ci, n);
  }, di = K("div", {
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
  }))), pi = K("div", {
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
  }), fi = K("div", {
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
  }), _o = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: s, className: i, collapsedSize: l = "0px", component: a, easing: d, in: u, onEnter: f, onEntered: g, onEntering: p, onExit: h, onExited: m, onExiting: x, orientation: b = "vertical", style: w, timeout: _ = Ns.standard, TransitionComponent: j = Ls, ...R } = o, C = {
      ...o,
      orientation: b,
      collapsedSize: l
    }, M = ui(C), z = _n(), k = qt(), A = y.useRef(null), I = y.useRef(), G = typeof l == "number" ? `${l}px` : l, E = b === "horizontal", Y = E ? "width" : "height", J = y.useRef(null), O = Kt(n, J), D = (N) => (L) => {
      if (N) {
        const re = J.current;
        L === void 0 ? N(re) : N(re, L);
      }
    }, S = () => A.current ? A.current[E ? "clientWidth" : "clientHeight"] : 0, P = D((N, L) => {
      A.current && E && (A.current.style.position = "absolute"), N.style[Y] = G, f && f(N, L);
    }), X = D((N, L) => {
      const re = S();
      A.current && E && (A.current.style.position = "");
      const { duration: Me, easing: Ee } = er({
        style: w,
        timeout: _,
        easing: d
      }, {
        mode: "enter"
      });
      if (_ === "auto") {
        const ze = z.transitions.getAutoHeightDuration(re);
        N.style.transitionDuration = `${ze}ms`, I.current = ze;
      } else N.style.transitionDuration = typeof Me == "string" ? Me : `${Me}ms`;
      N.style[Y] = `${re}px`, N.style.transitionTimingFunction = Ee, p && p(N, L);
    }), q = D((N, L) => {
      N.style[Y] = "auto", g && g(N, L);
    }), ae = D((N) => {
      N.style[Y] = `${S()}px`, h && h(N);
    }), ee = D(m), me = D((N) => {
      const L = S(), { duration: re, easing: Me } = er({
        style: w,
        timeout: _,
        easing: d
      }, {
        mode: "exit"
      });
      if (_ === "auto") {
        const Ee = z.transitions.getAutoHeightDuration(L);
        N.style.transitionDuration = `${Ee}ms`, I.current = Ee;
      } else N.style.transitionDuration = typeof re == "string" ? re : `${re}ms`;
      N.style[Y] = G, N.style.transitionTimingFunction = Me, x && x(N);
    }), ce = (N) => {
      _ === "auto" && k.start(I.current || 0, N), r && r(J.current, N);
    };
    return c.jsx(j, {
      in: u,
      onEnter: P,
      onEntered: q,
      onEntering: X,
      onExit: ae,
      onExited: ee,
      onExiting: me,
      addEndListener: ce,
      nodeRef: J,
      timeout: _ === "auto" ? null : _,
      ...R,
      children: (N, { ownerState: L, ...re }) => c.jsx(di, {
        as: a,
        className: se(M.root, i, {
          entered: M.entered,
          exited: !u && G === "0px" && M.hidden
        }[N]),
        style: {
          [E ? "minWidth" : "minHeight"]: G,
          ...w
        },
        ref: O,
        ownerState: {
          ...C,
          state: N
        },
        ...re,
        children: c.jsx(pi, {
          ownerState: {
            ...C,
            state: N
          },
          className: M.wrapper,
          ref: A,
          children: c.jsx(fi, {
            ownerState: {
              ...C,
              state: N
            },
            className: M.wrapperInner,
            children: s
          })
        })
      })
    });
  });
  _o && (_o.muiSupportAuto = true);
  const rs = y.createContext({});
  function gi(e) {
    return ve("MuiAccordion", e);
  }
  const Fn = be("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), hi = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: s } = e;
    return we({
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
    }, gi, t);
  }, mi = K(st, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Fn.region}`]: t.region
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
      [`&.${Fn.expanded}`]: {
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
      [`&.${Fn.disabled}`]: {
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
          [`&.${Fn.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), yi = K("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), zn = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: s, defaultExpanded: i = false, disabled: l = false, disableGutters: a = false, expanded: d, onChange: u, square: f = false, slots: g = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: m, ...x } = o, [b, w] = Kr({
      controlled: d,
      default: i,
      name: "Accordion",
      state: "expanded"
    }), _ = y.useCallback((S) => {
      w(!b), u && u(S, !b);
    }, [
      b,
      u,
      w
    ]), [j, ...R] = y.Children.toArray(r), C = y.useMemo(() => ({
      expanded: b,
      disabled: l,
      disableGutters: a,
      toggle: _
    }), [
      b,
      l,
      a,
      _
    ]), M = {
      ...o,
      square: f,
      disabled: l,
      disableGutters: a,
      expanded: b
    }, z = hi(M), k = {
      transition: h,
      ...g
    }, A = {
      transition: m,
      ...p
    }, I = {
      slots: k,
      slotProps: A
    }, [G, E] = ie("root", {
      elementType: mi,
      externalForwardedProps: {
        ...I,
        ...x
      },
      className: se(z.root, s),
      shouldForwardComponentProp: true,
      ownerState: M,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [Y, J] = ie("heading", {
      elementType: yi,
      externalForwardedProps: I,
      className: z.heading,
      ownerState: M
    }), [O, D] = ie("transition", {
      elementType: _o,
      externalForwardedProps: I,
      ownerState: M
    });
    return c.jsxs(G, {
      ...E,
      children: [
        c.jsx(Y, {
          ...J,
          children: c.jsx(rs.Provider, {
            value: C,
            children: j
          })
        }),
        c.jsx(O, {
          in: b,
          timeout: "auto",
          ...D,
          children: c.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: z.region,
            children: R
          })
        })
      ]
    });
  });
  function vi(e) {
    return ve("MuiAccordionDetails", e);
  }
  be("MuiAccordionDetails", [
    "root"
  ]);
  const bi = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, vi, t);
  }, xi = K("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), Dn = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...s } = o, i = o, l = bi(i);
    return c.jsx(xi, {
      className: se(l.root, r),
      ref: n,
      ownerState: i,
      ...s
    });
  });
  function wi(e) {
    return ve("MuiAccordionSummary", e);
  }
  const Yt = be("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), Ci = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return we({
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
    }, wi, t);
  }, _i = K(Yn, {
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
  })), Si = K("span", {
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
          [`&.${Yt.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), ji = K("span", {
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
    [`&.${Yt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), kn = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: s, expandIcon: i, focusVisibleClassName: l, onClick: a, slots: d, slotProps: u, ...f } = o, { disabled: g = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(rs), x = (A) => {
      m && m(A), a && a(A);
    }, b = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: p
    }, w = Ci(b), _ = {
      slots: d,
      slotProps: u
    }, [j, R] = ie("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(w.root, s),
      elementType: _i,
      externalForwardedProps: {
        ..._,
        ...f
      },
      ownerState: b,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: se(w.focusVisible, l)
      },
      getSlotProps: (A) => ({
        ...A,
        onClick: (I) => {
          var _a2;
          (_a2 = A.onClick) == null ? void 0 : _a2.call(A, I), x(I);
        }
      })
    }), [C, M] = ie("content", {
      className: w.content,
      elementType: Si,
      externalForwardedProps: _,
      ownerState: b
    }), [z, k] = ie("expandIconWrapper", {
      className: w.expandIconWrapper,
      elementType: ji,
      externalForwardedProps: _,
      ownerState: b
    });
    return c.jsxs(j, {
      ...R,
      children: [
        c.jsx(C, {
          ...M,
          children: r
        }),
        i && c.jsx(z, {
          ...k,
          children: i
        })
      ]
    });
  });
  function Ri(e) {
    return ve("MuiAlert", e);
  }
  const sr = be("MuiAlert", [
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
  ]), Mi = le(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), $i = le(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Ai = le(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), Pi = le(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), Ii = le(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Fi = (e) => {
    const { variant: t, color: n, severity: o, classes: r } = e, s = {
      root: [
        "root",
        `color${U(n || o)}`,
        `${t}${U(n || o)}`,
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
    return we(s, Ri, r);
  }, zi = K(st, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${U(n.color || n.severity)}`]
      ];
    }
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? xo : wo, n = e.palette.mode === "light" ? wo : xo;
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
            [`& .${sr.icon}`]: e.vars ? {
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
            [`& .${sr.icon}`]: e.vars ? {
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
  })), Di = K("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), ki = K("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), Ti = K("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), ir = {
    success: c.jsx(Mi, {
      fontSize: "inherit"
    }),
    warning: c.jsx($i, {
      fontSize: "inherit"
    }),
    error: c.jsx(Ai, {
      fontSize: "inherit"
    }),
    info: c.jsx(Pi, {
      fontSize: "inherit"
    })
  }, So = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: s, className: i, closeText: l = "Close", color: a, components: d = {}, componentsProps: u = {}, icon: f, iconMapping: g = ir, onClose: p, role: h = "alert", severity: m = "success", slotProps: x = {}, slots: b = {}, variant: w = "standard", ..._ } = o, j = {
      ...o,
      color: a,
      severity: m,
      variant: w,
      colorSeverity: a || m
    }, R = Fi(j), C = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...b
      },
      slotProps: {
        ...u,
        ...x
      }
    }, [M, z] = ie("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(R.root, i),
      elementType: zi,
      externalForwardedProps: {
        ...C,
        ..._
      },
      ownerState: j,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [k, A] = ie("icon", {
      className: R.icon,
      elementType: Di,
      externalForwardedProps: C,
      ownerState: j
    }), [I, G] = ie("message", {
      className: R.message,
      elementType: ki,
      externalForwardedProps: C,
      ownerState: j
    }), [E, Y] = ie("action", {
      className: R.action,
      elementType: Ti,
      externalForwardedProps: C,
      ownerState: j
    }), [J, O] = ie("closeButton", {
      elementType: Se,
      externalForwardedProps: C,
      ownerState: j
    }), [D, S] = ie("closeIcon", {
      elementType: Ii,
      externalForwardedProps: C,
      ownerState: j
    });
    return c.jsxs(M, {
      ...z,
      children: [
        f !== false ? c.jsx(k, {
          ...A,
          children: f || g[m] || ir[m]
        }) : null,
        c.jsx(I, {
          ...G,
          children: s
        }),
        r != null ? c.jsx(E, {
          ...Y,
          children: r
        }) : null,
        r == null && p ? c.jsx(E, {
          ...Y,
          children: c.jsx(J, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...O,
            children: c.jsx(D, {
              fontSize: "small",
              ...S
            })
          })
        }) : null
      ]
    });
  });
  var Ve = "top", et = "bottom", tt = "right", He = "left", Ho = "auto", Sn = [
    Ve,
    et,
    tt,
    He
  ], Xt = "start", xn = "end", Ei = "clippingParents", ss = "viewport", tn = "popper", Oi = "reference", lr = Sn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Xt,
      t + "-" + xn
    ]);
  }, []), is = [].concat(Sn, [
    Ho
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Xt,
      t + "-" + xn
    ]);
  }, []), Ni = "beforeRead", Li = "read", Vi = "afterRead", Hi = "beforeMain", Bi = "main", Wi = "afterMain", Gi = "beforeWrite", Ui = "write", qi = "afterWrite", Yi = [
    Ni,
    Li,
    Vi,
    Hi,
    Bi,
    Wi,
    Gi,
    Ui,
    qi
  ];
  function at(e) {
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
  function Ot(e) {
    var t = Ge(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Ze(e) {
    var t = Ge(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Bo(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ge(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Ji(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
      !Ze(s) || !at(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
        var l = r[i];
        l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? "" : l);
      }));
    });
  }
  function Ki(e) {
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
        !Ze(r) || !at(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Xi = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Ji,
    effect: Ki,
    requires: [
      "computeStyles"
    ]
  };
  function lt(e) {
    return e.split("-")[0];
  }
  var Tt = Math.max, Xn = Math.min, Qt = Math.round;
  function jo() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function ls() {
    return !/^((?!chrome|android).)*safari/i.test(jo());
  }
  function Zt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, s = 1;
    t && Ze(e) && (r = e.offsetWidth > 0 && Qt(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Qt(o.height) / e.offsetHeight || 1);
    var i = Ot(e) ? Ge(e) : window, l = i.visualViewport, a = !ls() && n, d = (o.left + (a && l ? l.offsetLeft : 0)) / r, u = (o.top + (a && l ? l.offsetTop : 0)) / s, f = o.width / r, g = o.height / s;
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
  function Wo(e) {
    var t = Zt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function as(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Bo(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function ht(e) {
    return Ge(e).getComputedStyle(e);
  }
  function Qi(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(at(e)) >= 0;
  }
  function Mt(e) {
    return ((Ot(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function no(e) {
    return at(e) === "html" ? e : e.assignedSlot || e.parentNode || (Bo(e) ? e.host : null) || Mt(e);
  }
  function ar(e) {
    return !Ze(e) || ht(e).position === "fixed" ? null : e.offsetParent;
  }
  function Zi(e) {
    var t = /firefox/i.test(jo()), n = /Trident/i.test(jo());
    if (n && Ze(e)) {
      var o = ht(e);
      if (o.position === "fixed") return null;
    }
    var r = no(e);
    for (Bo(r) && (r = r.host); Ze(r) && [
      "html",
      "body"
    ].indexOf(at(r)) < 0; ) {
      var s = ht(r);
      if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function jn(e) {
    for (var t = Ge(e), n = ar(e); n && Qi(n) && ht(n).position === "static"; ) n = ar(n);
    return n && (at(n) === "html" || at(n) === "body" && ht(n).position === "static") ? t : n || Zi(e) || t;
  }
  function Go(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function fn(e, t, n) {
    return Tt(e, Xn(t, n));
  }
  function el(e, t, n) {
    var o = fn(e, t, n);
    return o > n ? n : o;
  }
  function cs() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function us(e) {
    return Object.assign({}, cs(), e);
  }
  function ds(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var tl = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, us(typeof t != "number" ? t : ds(t, Sn));
  };
  function nl(e) {
    var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = lt(n.placement), a = Go(l), d = [
      He,
      tt
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!s || !i)) {
      var f = tl(r.padding, n), g = Wo(s), p = a === "y" ? Ve : He, h = a === "y" ? et : tt, m = n.rects.reference[u] + n.rects.reference[a] - i[a] - n.rects.popper[u], x = i[a] - n.rects.reference[a], b = jn(s), w = b ? a === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, _ = m / 2 - x / 2, j = f[p], R = w - g[u] - f[h], C = w / 2 - g[u] / 2 + _, M = fn(j, C, R), z = a;
      n.modifiersData[o] = (t = {}, t[z] = M, t.centerOffset = M - C, t);
    }
  }
  function ol(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || as(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const rl = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: nl,
    effect: ol,
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
  var sl = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function il(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Qt(n * r) / r || 0,
      y: Qt(o * r) / r || 0
    };
  }
  function cr(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, g = i.x, p = g === void 0 ? 0 : g, h = i.y, m = h === void 0 ? 0 : h, x = typeof u == "function" ? u({
      x: p,
      y: m
    }) : {
      x: p,
      y: m
    };
    p = x.x, m = x.y;
    var b = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), _ = He, j = Ve, R = window;
    if (d) {
      var C = jn(n), M = "clientHeight", z = "clientWidth";
      if (C === Ge(n) && (C = Mt(n), ht(C).position !== "static" && l === "absolute" && (M = "scrollHeight", z = "scrollWidth")), C = C, r === Ve || (r === He || r === tt) && s === xn) {
        j = et;
        var k = f && C === R && R.visualViewport ? R.visualViewport.height : C[M];
        m -= k - o.height, m *= a ? 1 : -1;
      }
      if (r === He || (r === Ve || r === et) && s === xn) {
        _ = tt;
        var A = f && C === R && R.visualViewport ? R.visualViewport.width : C[z];
        p -= A - o.width, p *= a ? 1 : -1;
      }
    }
    var I = Object.assign({
      position: l
    }, d && sl), G = u === true ? il({
      x: p,
      y: m
    }, Ge(n)) : {
      x: p,
      y: m
    };
    if (p = G.x, m = G.y, a) {
      var E;
      return Object.assign({}, I, (E = {}, E[j] = w ? "0" : "", E[_] = b ? "0" : "", E.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", E));
    }
    return Object.assign({}, I, (t = {}, t[j] = w ? m + "px" : "", t[_] = b ? p + "px" : "", t.transform = "", t));
  }
  function ll(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, s = n.adaptive, i = s === void 0 ? true : s, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: lt(t.placement),
      variation: en(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cr(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: i,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cr(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const al = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: ll,
    data: {}
  };
  var Tn = {
    passive: true
  };
  function cl(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? true : r, i = o.resize, l = i === void 0 ? true : i, a = Ge(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Tn);
    }), l && a.addEventListener("resize", n.update, Tn), function() {
      s && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Tn);
      }), l && a.removeEventListener("resize", n.update, Tn);
    };
  }
  const ul = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: cl,
    data: {}
  };
  var dl = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Gn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return dl[t];
    });
  }
  var pl = {
    start: "end",
    end: "start"
  };
  function ur(e) {
    return e.replace(/start|end/g, function(t) {
      return pl[t];
    });
  }
  function Uo(e) {
    var t = Ge(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function qo(e) {
    return Zt(Mt(e)).left + Uo(e).scrollLeft;
  }
  function fl(e, t) {
    var n = Ge(e), o = Mt(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, l = 0, a = 0;
    if (r) {
      s = r.width, i = r.height;
      var d = ls();
      (d || !d && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: s,
      height: i,
      x: l + qo(e),
      y: a
    };
  }
  function gl(e) {
    var t, n = Mt(e), o = Uo(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Tt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Tt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + qo(e), a = -o.scrollTop;
    return ht(r || n).direction === "rtl" && (l += Tt(n.clientWidth, r ? r.clientWidth : 0) - s), {
      width: s,
      height: i,
      x: l,
      y: a
    };
  }
  function Yo(e) {
    var t = ht(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function ps(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(at(e)) >= 0 ? e.ownerDocument.body : Ze(e) && Yo(e) ? e : ps(no(e));
  }
  function gn(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = ps(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ge(o), i = r ? [
      s
    ].concat(s.visualViewport || [], Yo(o) ? o : []) : o, l = t.concat(i);
    return r ? l : l.concat(gn(no(i)));
  }
  function Ro(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function hl(e, t) {
    var n = Zt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function dr(e, t, n) {
    return t === ss ? Ro(fl(e, n)) : Ot(t) ? hl(t, n) : Ro(gl(Mt(e)));
  }
  function ml(e) {
    var t = gn(no(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(ht(e).position) >= 0, o = n && Ze(e) ? jn(e) : e;
    return Ot(o) ? t.filter(function(r) {
      return Ot(r) && as(r, o) && at(r) !== "body";
    }) : [];
  }
  function yl(e, t, n, o) {
    var r = t === "clippingParents" ? ml(e) : [].concat(t), s = [].concat(r, [
      n
    ]), i = s[0], l = s.reduce(function(a, d) {
      var u = dr(e, d, o);
      return a.top = Tt(u.top, a.top), a.right = Xn(u.right, a.right), a.bottom = Xn(u.bottom, a.bottom), a.left = Tt(u.left, a.left), a;
    }, dr(e, i, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function fs(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? lt(o) : null, s = o ? en(o) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case Ve:
        a = {
          x: i,
          y: t.y - n.height
        };
        break;
      case et:
        a = {
          x: i,
          y: t.y + t.height
        };
        break;
      case tt:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case He:
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
    var d = r ? Go(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (s) {
        case Xt:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case xn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function wn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, a = l === void 0 ? Ei : l, d = n.rootBoundary, u = d === void 0 ? ss : d, f = n.elementContext, g = f === void 0 ? tn : f, p = n.altBoundary, h = p === void 0 ? false : p, m = n.padding, x = m === void 0 ? 0 : m, b = us(typeof x != "number" ? x : ds(x, Sn)), w = g === tn ? Oi : tn, _ = e.rects.popper, j = e.elements[h ? w : g], R = yl(Ot(j) ? j : j.contextElement || Mt(e.elements.popper), a, u, i), C = Zt(e.elements.reference), M = fs({
      reference: C,
      element: _,
      placement: r
    }), z = Ro(Object.assign({}, _, M)), k = g === tn ? z : C, A = {
      top: R.top - k.top + b.top,
      bottom: k.bottom - R.bottom + b.bottom,
      left: R.left - k.left + b.left,
      right: k.right - R.right + b.right
    }, I = e.modifiersData.offset;
    if (g === tn && I) {
      var G = I[r];
      Object.keys(A).forEach(function(E) {
        var Y = [
          tt,
          et
        ].indexOf(E) >= 0 ? 1 : -1, J = [
          Ve,
          et
        ].indexOf(E) >= 0 ? "y" : "x";
        A[E] += G[J] * Y;
      });
    }
    return A;
  }
  function vl(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? is : a, u = en(o), f = u ? l ? lr : lr.filter(function(h) {
      return en(h) === u;
    }) : Sn, g = f.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = f);
    var p = g.reduce(function(h, m) {
      return h[m] = wn(e, {
        placement: m,
        boundary: r,
        rootBoundary: s,
        padding: i
      })[lt(m)], h;
    }, {});
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  function bl(e) {
    if (lt(e) === Ho) return [];
    var t = Gn(e);
    return [
      ur(e),
      t,
      ur(t)
    ];
  }
  function xl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, s = r === void 0 ? true : r, i = n.altAxis, l = i === void 0 ? true : i, a = n.fallbackPlacements, d = n.padding, u = n.boundary, f = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, m = n.allowedAutoPlacements, x = t.options.placement, b = lt(x), w = b === x, _ = a || (w || !h ? [
        Gn(x)
      ] : bl(x)), j = [
        x
      ].concat(_).reduce(function(me, ce) {
        return me.concat(lt(ce) === Ho ? vl(t, {
          placement: ce,
          boundary: u,
          rootBoundary: f,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ce);
      }, []), R = t.rects.reference, C = t.rects.popper, M = /* @__PURE__ */ new Map(), z = true, k = j[0], A = 0; A < j.length; A++) {
        var I = j[A], G = lt(I), E = en(I) === Xt, Y = [
          Ve,
          et
        ].indexOf(G) >= 0, J = Y ? "width" : "height", O = wn(t, {
          placement: I,
          boundary: u,
          rootBoundary: f,
          altBoundary: g,
          padding: d
        }), D = Y ? E ? tt : He : E ? et : Ve;
        R[J] > C[J] && (D = Gn(D));
        var S = Gn(D), P = [];
        if (s && P.push(O[G] <= 0), l && P.push(O[D] <= 0, O[S] <= 0), P.every(function(me) {
          return me;
        })) {
          k = I, z = false;
          break;
        }
        M.set(I, P);
      }
      if (z) for (var X = h ? 3 : 1, q = function(ce) {
        var N = j.find(function(L) {
          var re = M.get(L);
          if (re) return re.slice(0, ce).every(function(Me) {
            return Me;
          });
        });
        if (N) return k = N, "break";
      }, ae = X; ae > 0; ae--) {
        var ee = q(ae);
        if (ee === "break") break;
      }
      t.placement !== k && (t.modifiersData[o]._skip = true, t.placement = k, t.reset = true);
    }
  }
  const wl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: xl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function pr(e, t, n) {
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
  function fr(e) {
    return [
      Ve,
      tt,
      et,
      He
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function Cl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = wn(t, {
      elementContext: "reference"
    }), l = wn(t, {
      altBoundary: true
    }), a = pr(i, o), d = pr(l, r, s), u = fr(a), f = fr(d);
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
  const _l = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: Cl
  };
  function Sl(e, t, n) {
    var o = lt(e), r = [
      He,
      Ve
    ].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, i = s[0], l = s[1];
    return i = i || 0, l = (l || 0) * r, [
      He,
      tt
    ].indexOf(o) >= 0 ? {
      x: l,
      y: i
    } : {
      x: i,
      y: l
    };
  }
  function jl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [
      0,
      0
    ] : r, i = is.reduce(function(u, f) {
      return u[f] = Sl(f, t.rects, s), u;
    }, {}), l = i[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = i;
  }
  const Rl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: jl
  };
  function Ml(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = fs({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const $l = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: Ml,
    data: {}
  };
  function Al(e) {
    return e === "x" ? "y" : "x";
  }
  function Pl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? true : r, i = n.altAxis, l = i === void 0 ? false : i, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, f = n.padding, g = n.tether, p = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, x = wn(t, {
      boundary: a,
      rootBoundary: d,
      padding: f,
      altBoundary: u
    }), b = lt(t.placement), w = en(t.placement), _ = !w, j = Go(b), R = Al(j), C = t.modifiersData.popperOffsets, M = t.rects.reference, z = t.rects.popper, k = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, A = typeof k == "number" ? {
      mainAxis: k,
      altAxis: k
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, k), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, G = {
      x: 0,
      y: 0
    };
    if (C) {
      if (s) {
        var E, Y = j === "y" ? Ve : He, J = j === "y" ? et : tt, O = j === "y" ? "height" : "width", D = C[j], S = D + x[Y], P = D - x[J], X = p ? -z[O] / 2 : 0, q = w === Xt ? M[O] : z[O], ae = w === Xt ? -z[O] : -M[O], ee = t.elements.arrow, me = p && ee ? Wo(ee) : {
          width: 0,
          height: 0
        }, ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cs(), N = ce[Y], L = ce[J], re = fn(0, M[O], me[O]), Me = _ ? M[O] / 2 - X - re - N - A.mainAxis : q - re - N - A.mainAxis, Ee = _ ? -M[O] / 2 + X + re + L + A.mainAxis : ae + re + L + A.mainAxis, ze = t.elements.arrow && jn(t.elements.arrow), pe = ze ? j === "y" ? ze.clientTop || 0 : ze.clientLeft || 0 : 0, _e = (E = I == null ? void 0 : I[j]) != null ? E : 0, je = D + Me - _e - pe, qe = D + Ee - _e, Ye = fn(p ? Xn(S, je) : S, D, p ? Tt(P, qe) : P);
        C[j] = Ye, G[j] = Ye - D;
      }
      if (l) {
        var Oe, mt = j === "x" ? Ve : He, yt = j === "x" ? et : tt, Be = C[R], nt = R === "y" ? "height" : "width", vt = Be + x[mt], $t = Be - x[yt], At = [
          Ve,
          He
        ].indexOf(b) !== -1, Lt = (Oe = I == null ? void 0 : I[R]) != null ? Oe : 0, ct = At ? vt : Be - M[nt] - z[nt] - Lt + A.altAxis, ut = At ? Be + M[nt] + z[nt] - Lt - A.altAxis : $t, dt = p && At ? el(ct, Be, ut) : fn(p ? ct : vt, Be, p ? ut : $t);
        C[R] = dt, G[R] = dt - Be;
      }
      t.modifiersData[o] = G;
    }
  }
  const Il = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: Pl,
    requiresIfExists: [
      "offset"
    ]
  };
  function Fl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function zl(e) {
    return e === Ge(e) || !Ze(e) ? Uo(e) : Fl(e);
  }
  function Dl(e) {
    var t = e.getBoundingClientRect(), n = Qt(t.width) / e.offsetWidth || 1, o = Qt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function kl(e, t, n) {
    n === void 0 && (n = false);
    var o = Ze(t), r = Ze(t) && Dl(t), s = Mt(t), i = Zt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((at(t) !== "body" || Yo(s)) && (l = zl(t)), Ze(t) ? (a = Zt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : s && (a.x = qo(s))), {
      x: i.left + l.scrollLeft - a.x,
      y: i.top + l.scrollTop - a.y,
      width: i.width,
      height: i.height
    };
  }
  function Tl(e) {
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
  function El(e) {
    var t = Tl(e);
    return Yi.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Ol(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Nl(e) {
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
  var gr = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function hr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Ll(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? gr : r;
    return function(l, a, d) {
      d === void 0 && (d = s);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, gr, s),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, f = [], g = false, p = {
        state: u,
        setOptions: function(b) {
          var w = typeof b == "function" ? b(u.options) : b;
          m(), u.options = Object.assign({}, s, u.options, w), u.scrollParents = {
            reference: Ot(l) ? gn(l) : l.contextElement ? gn(l.contextElement) : [],
            popper: gn(a)
          };
          var _ = El(Nl([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = _.filter(function(j) {
            return j.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!g) {
            var b = u.elements, w = b.reference, _ = b.popper;
            if (hr(w, _)) {
              u.rects = {
                reference: kl(w, jn(_), u.options.strategy === "fixed"),
                popper: Wo(_)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
                return u.modifiersData[A.name] = Object.assign({}, A.data);
              });
              for (var j = 0; j < u.orderedModifiers.length; j++) {
                if (u.reset === true) {
                  u.reset = false, j = -1;
                  continue;
                }
                var R = u.orderedModifiers[j], C = R.fn, M = R.options, z = M === void 0 ? {} : M, k = R.name;
                typeof C == "function" && (u = C({
                  state: u,
                  options: z,
                  name: k,
                  instance: p
                }) || u);
              }
            }
          }
        },
        update: Ol(function() {
          return new Promise(function(x) {
            p.forceUpdate(), x(u);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!hr(l, a)) return p;
      p.setOptions(d).then(function(x) {
        !g && d.onFirstUpdate && d.onFirstUpdate(x);
      });
      function h() {
        u.orderedModifiers.forEach(function(x) {
          var b = x.name, w = x.options, _ = w === void 0 ? {} : w, j = x.effect;
          if (typeof j == "function") {
            var R = j({
              state: u,
              name: b,
              instance: p,
              options: _
            }), C = function() {
            };
            f.push(R || C);
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
  var Vl = [
    ul,
    $l,
    al,
    Xi,
    Rl,
    wl,
    Il,
    rl,
    _l
  ], Hl = Ll({
    defaultModifiers: Vl
  });
  function Bl(e) {
    return ve("MuiPopper", e);
  }
  be("MuiPopper", [
    "root"
  ]);
  function Wl(e, t) {
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
  function Mo(e) {
    return typeof e == "function" ? e() : e;
  }
  function Gl(e) {
    return e.nodeType !== void 0;
  }
  const Ul = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Bl, t);
  }, ql = {}, Yl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: s, disablePortal: i, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: f, slotProps: g = {}, slots: p = {}, TransitionProps: h, ownerState: m, ...x } = t, b = y.useRef(null), w = Kt(b, n), _ = y.useRef(null), j = Kt(_, f), R = y.useRef(j);
    tr(() => {
      R.current = j;
    }, [
      j
    ]), y.useImperativeHandle(f, () => _.current, []);
    const C = Wl(d, s), [M, z] = y.useState(C), [k, A] = y.useState(Mo(o));
    y.useEffect(() => {
      _.current && _.current.forceUpdate();
    }), y.useEffect(() => {
      o && A(Mo(o));
    }, [
      o
    ]), tr(() => {
      if (!k || !a) return;
      const J = (S) => {
        z(S.placement);
      };
      let O = [
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
            J(S);
          }
        }
      ];
      l != null && (O = O.concat(l)), u && u.modifiers != null && (O = O.concat(u.modifiers));
      const D = Hl(k, b.current, {
        placement: C,
        ...u,
        modifiers: O
      });
      return R.current(D), () => {
        D.destroy(), R.current(null);
      };
    }, [
      k,
      i,
      l,
      a,
      u,
      C
    ]);
    const I = {
      placement: M
    };
    h !== null && (I.TransitionProps = h);
    const G = Ul(t), E = p.root ?? "div", Y = Hs({
      elementType: E,
      externalSlotProps: g.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: w
      },
      ownerState: t,
      className: G.root
    });
    return c.jsx(E, {
      ...Y,
      children: typeof r == "function" ? r(I) : r
    });
  }), Jl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: s, direction: i = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: f = "bottom", popperOptions: g = ql, popperRef: p, style: h, transition: m = false, slotProps: x = {}, slots: b = {}, ...w } = t, [_, j] = y.useState(true), R = () => {
      j(false);
    }, C = () => {
      j(true);
    };
    if (!a && !u && (!m || _)) return null;
    let M;
    if (s) M = s;
    else if (o) {
      const A = Mo(o);
      M = A && Gl(A) ? dn(A).body : dn(null).body;
    }
    const z = !u && a && (!m || _) ? "none" : void 0, k = m ? {
      in: u,
      onEnter: R,
      onExited: C
    } : void 0;
    return c.jsx(Vs, {
      disablePortal: l,
      container: M,
      children: c.jsx(Yl, {
        anchorEl: o,
        direction: i,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !_ : u,
        placement: f,
        popperOptions: g,
        popperRef: p,
        slotProps: x,
        slots: b,
        ...w,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: z,
          ...h
        },
        TransitionProps: k,
        children: r
      })
    });
  }), Kl = K(Jl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), gs = y.forwardRef(function(t, n) {
    const o = Vo(), r = xe({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: s, component: i, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: f, modifiers: g, open: p, placement: h, popperOptions: m, popperRef: x, transition: b, slots: w, slotProps: _, ...j } = r, R = (w == null ? void 0 : w.root) ?? (l == null ? void 0 : l.Root), C = {
      anchorEl: s,
      container: d,
      disablePortal: u,
      keepMounted: f,
      modifiers: g,
      open: p,
      placement: h,
      popperOptions: m,
      popperRef: x,
      transition: b,
      ...j
    };
    return c.jsx(Kl, {
      as: i,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: R
      },
      slotProps: _ ?? a,
      ...C,
      ref: n
    });
  }), Xl = le(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Ql(e) {
    return ve("MuiChip", e);
  }
  const Z = be("MuiChip", [
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
  ]), Zl = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: s, onDelete: i, clickable: l, variant: a } = e, d = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${U(o)}`,
        `color${U(r)}`,
        l && "clickable",
        l && `clickableColor${U(r)}`,
        i && "deletable",
        i && `deletableColor${U(r)}`,
        `${a}${U(r)}`
      ],
      label: [
        "label",
        `label${U(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${U(o)}`,
        `avatarColor${U(r)}`
      ],
      icon: [
        "icon",
        `icon${U(o)}`,
        `iconColor${U(s)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${U(o)}`,
        `deleteIconColor${U(r)}`,
        `deleteIcon${U(a)}Color${U(r)}`
      ]
    };
    return we(d, Ql, t);
  }, ea = K("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: s, onDelete: i, size: l, variant: a } = n;
      return [
        {
          [`& .${Z.avatar}`]: t.avatar
        },
        {
          [`& .${Z.avatar}`]: t[`avatar${U(l)}`]
        },
        {
          [`& .${Z.avatar}`]: t[`avatarColor${U(o)}`]
        },
        {
          [`& .${Z.icon}`]: t.icon
        },
        {
          [`& .${Z.icon}`]: t[`icon${U(l)}`]
        },
        {
          [`& .${Z.icon}`]: t[`iconColor${U(r)}`]
        },
        {
          [`& .${Z.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${Z.deleteIcon}`]: t[`deleteIcon${U(l)}`]
        },
        {
          [`& .${Z.deleteIcon}`]: t[`deleteIconColor${U(o)}`]
        },
        {
          [`& .${Z.deleteIcon}`]: t[`deleteIcon${U(a)}Color${U(o)}`]
        },
        t.root,
        t[`size${U(l)}`],
        t[`color${U(o)}`],
        s && t.clickable,
        s && o !== "default" && t[`clickableColor${U(o)})`],
        i && t.deletable,
        i && o !== "default" && t[`deletableColor${U(o)}`],
        t[a],
        t[`${a}${U(o)}`]
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
        ...Object.entries(e.palette).filter(It([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${Z.deleteIcon}`]: {
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${Z.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
        ...Object.entries(e.palette).filter(It()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7)}`,
            [`&.${Z.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Fe(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${Z.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Fe(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${Z.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), ta = K("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${U(o)}`]
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
  function mr(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const jt = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: s, clickable: i, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: f, label: g, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: x, size: b = "medium", variant: w = "filled", tabIndex: _, skipFocusWhenDisabled: j = false, ...R } = o, C = y.useRef(null), M = Kt(C, n), z = (P) => {
      P.stopPropagation(), h && h(P);
    }, k = (P) => {
      P.currentTarget === P.target && mr(P) && P.preventDefault(), m && m(P);
    }, A = (P) => {
      P.currentTarget === P.target && h && mr(P) && h(P), x && x(P);
    }, I = i !== false && p ? true : i, G = I || h ? Yn : a || "div", E = {
      ...o,
      component: G,
      disabled: u,
      size: b,
      color: l,
      iconColor: y.isValidElement(f) && f.props.color || l,
      onDelete: !!h,
      clickable: I,
      variant: w
    }, Y = Zl(E), J = G === Yn ? {
      component: a || "div",
      focusVisibleClassName: Y.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let O = null;
    h && (O = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: se(d.props.className, Y.deleteIcon),
      onClick: z
    }) : c.jsx(Xl, {
      className: se(Y.deleteIcon),
      onClick: z
    }));
    let D = null;
    r && y.isValidElement(r) && (D = y.cloneElement(r, {
      className: se(Y.avatar, r.props.className)
    }));
    let S = null;
    return f && y.isValidElement(f) && (S = y.cloneElement(f, {
      className: se(Y.icon, f.props.className)
    })), c.jsxs(ea, {
      as: G,
      className: se(Y.root, s),
      disabled: I && u ? true : void 0,
      onClick: p,
      onKeyDown: k,
      onKeyUp: A,
      ref: M,
      tabIndex: j && u ? -1 : _,
      ownerState: E,
      ...J,
      ...R,
      children: [
        D || S,
        c.jsx(ta, {
          className: se(Y.label),
          ownerState: E,
          children: g
        }),
        O
      ]
    });
  });
  function na(e) {
    return ve("MuiCard", e);
  }
  be("MuiCard", [
    "root"
  ]);
  const oa = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, na, t);
  }, ra = K(st, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), sa = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: s = false, ...i } = o, l = {
      ...o,
      raised: s
    }, a = oa(l);
    return c.jsx(ra, {
      className: se(a.root, r),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function yr(e) {
    return e.substring(2).toLowerCase();
  }
  function ia(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function la(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = Kt(Xr(t), l), f = vn((h) => {
      const m = d.current;
      d.current = false;
      const x = dn(l.current);
      if (!a.current || !l.current || "clientX" in h && ia(h, x)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let b;
      h.composedPath ? b = h.composedPath().includes(l.current) : b = !x.documentElement.contains(h.target) || l.current.contains(h.target), !b && (n || !m) && r(h);
    }), g = (h) => (m) => {
      d.current = true;
      const x = t.props[h];
      x && x(m);
    }, p = {
      ref: u
    };
    return s !== false && (p[s] = g(s)), y.useEffect(() => {
      if (s !== false) {
        const h = yr(s), m = dn(l.current), x = () => {
          i.current = true;
        };
        return m.addEventListener(h, f), m.addEventListener("touchmove", x), () => {
          m.removeEventListener(h, f), m.removeEventListener("touchmove", x);
        };
      }
    }, [
      f,
      s
    ]), o !== false && (p[o] = g(o)), y.useEffect(() => {
      if (o !== false) {
        const h = yr(o), m = dn(l.current);
        return m.addEventListener(h, f), () => {
          m.removeEventListener(h, f);
        };
      }
    }, [
      f,
      o
    ]), y.cloneElement(t, p);
  }
  function aa(e) {
    return ve("MuiDialogActions", e);
  }
  be("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const ca = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return we({
      root: [
        "root",
        !n && "spacing"
      ]
    }, aa, t);
  }, ua = K("div", {
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
  }), hs = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: s = false, ...i } = o, l = {
      ...o,
      disableSpacing: s
    }, a = ca(l);
    return c.jsx(ua, {
      className: se(a.root, r),
      ownerState: l,
      ref: n,
      ...i
    });
  });
  function da(e) {
    return ve("MuiDialogContentText", e);
  }
  be("MuiDialogContentText", [
    "root"
  ]);
  const pa = (e) => {
    const { classes: t } = e, o = we({
      root: [
        "root"
      ]
    }, da, t);
    return {
      ...t,
      ...o
    };
  }, fa = K(F, {
    shouldForwardProp: (e) => Bs(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), ga = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiDialogContentText"
    }), { children: r, className: s, ...i } = o, l = pa(i);
    return c.jsx(fa, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: i,
      className: se(l.root, s),
      ...o,
      classes: l
    });
  });
  function ha(e) {
    return ve("MuiInputAdornment", e);
  }
  const vr = be("MuiInputAdornment", [
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
  var br;
  const ma = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${U(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, ya = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: s, variant: i } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${U(r)}`,
        i,
        o && "hiddenLabel",
        s && `size${U(s)}`
      ]
    };
    return we(l, ha, t);
  }, va = K("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: ma
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
          [`&.${vr.positionStart}&:not(.${vr.hiddenLabel})`]: {
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
  }))), $o = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...f } = o, g = Ws() || {};
    let p = u;
    u && g.variant, g && !p && (p = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: p
    }, m = ya(h);
    return c.jsx(Gs.Provider, {
      value: null,
      children: c.jsx(va, {
        as: i,
        ownerState: h,
        className: se(m.root, s),
        ref: n,
        ...f,
        children: typeof r == "string" && !a ? c.jsx(F, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(y.Fragment, {
          children: [
            d === "start" ? br || (br = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), ba = le(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), xa = le(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function wa(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: s } = e, i = qt();
    y.useEffect(() => {
      if (!r) return;
      function b(w) {
        w.defaultPrevented || w.key === "Escape" && (o == null ? void 0 : o(w, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", b), () => {
        document.removeEventListener("keydown", b);
      };
    }, [
      r,
      o
    ]);
    const l = vn((b, w) => {
      o == null ? void 0 : o(b, w);
    }), a = vn((b) => {
      !o || b == null || i.start(b, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (r && a(t), i.clear), [
      r,
      t,
      a,
      i
    ]);
    const d = (b) => {
      o == null ? void 0 : o(b, "clickaway");
    }, u = i.clear, f = y.useCallback(() => {
      t != null && a(s ?? t * 0.5);
    }, [
      t,
      s,
      a
    ]), g = (b) => (w) => {
      const _ = b.onBlur;
      _ == null ? void 0 : _(w), f();
    }, p = (b) => (w) => {
      const _ = b.onFocus;
      _ == null ? void 0 : _(w), u();
    }, h = (b) => (w) => {
      const _ = b.onMouseEnter;
      _ == null ? void 0 : _(w), u();
    }, m = (b) => (w) => {
      const _ = b.onMouseLeave;
      _ == null ? void 0 : _(w), f();
    };
    return y.useEffect(() => {
      if (!n && r) return window.addEventListener("focus", f), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", u);
      };
    }, [
      n,
      r,
      f,
      u
    ]), {
      getRootProps: (b = {}) => {
        const w = {
          ...nr(e),
          ...nr(b)
        };
        return {
          role: "presentation",
          ...b,
          ...w,
          onBlur: g(w),
          onFocus: p(w),
          onMouseEnter: h(w),
          onMouseLeave: m(w)
        };
      },
      onClickAway: d
    };
  }
  function Ca(e) {
    return ve("MuiSnackbarContent", e);
  }
  be("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const _a = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, Ca, t);
  }, Sa = K(st, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Us(e.palette.background.default, t);
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
  })), ja = K("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), Ra = K("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Ma = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: s, message: i, role: l = "alert", ...a } = o, d = o, u = _a(d);
    return c.jsxs(Sa, {
      role: l,
      square: true,
      elevation: 6,
      className: se(u.root, s),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(ja, {
          className: u.message,
          ownerState: d,
          children: i
        }),
        r ? c.jsx(Ra, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function $a(e) {
    return ve("MuiSnackbar", e);
  }
  be("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const Aa = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${U(n.vertical)}${U(n.horizontal)}`
      ]
    };
    return we(o, $a, t);
  }, Pa = K("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${U(n.anchorOrigin.vertical)}${U(n.anchorOrigin.horizontal)}`]
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
  }))), Ia = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiSnackbar"
    }), r = _n(), s = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: f, ClickAwayListenerProps: g, ContentProps: p, disableWindowBlurListener: h = false, message: m, onBlur: x, onClose: b, onFocus: w, onMouseEnter: _, onMouseLeave: j, open: R, resumeHideDuration: C, slots: M = {}, slotProps: z = {}, TransitionComponent: k, transitionDuration: A = s, TransitionProps: { onEnter: I, onExited: G, ...E } = {}, ...Y } = o, J = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: k,
      transitionDuration: A
    }, O = Aa(J), { getRootProps: D, onClickAway: S } = wa({
      ...J
    }), [P, X] = y.useState(true), q = (_e) => {
      X(true), G && G(_e);
    }, ae = (_e, je) => {
      X(false), I && I(_e, je);
    }, ee = {
      slots: {
        transition: k,
        ...M
      },
      slotProps: {
        content: p,
        clickAwayListener: g,
        transition: E,
        ...z
      }
    }, [me, ce] = ie("root", {
      ref: n,
      className: [
        O.root,
        f
      ],
      elementType: Pa,
      getSlotProps: D,
      externalForwardedProps: {
        ...ee,
        ...Y
      },
      ownerState: J
    }), [N, { ownerState: L, ...re }] = ie("clickAwayListener", {
      elementType: la,
      externalForwardedProps: ee,
      getSlotProps: (_e) => ({
        onClickAway: (...je) => {
          var _a2;
          (_a2 = _e.onClickAway) == null ? void 0 : _a2.call(_e, ...je), S(...je);
        }
      }),
      ownerState: J
    }), [Me, Ee] = ie("content", {
      elementType: Ma,
      shouldForwardComponentProp: true,
      externalForwardedProps: ee,
      additionalProps: {
        message: m,
        action: i
      },
      ownerState: J
    }), [ze, pe] = ie("transition", {
      elementType: Qr,
      externalForwardedProps: ee,
      getSlotProps: (_e) => ({
        onEnter: (...je) => {
          var _a2;
          (_a2 = _e.onEnter) == null ? void 0 : _a2.call(_e, ...je), ae(...je);
        },
        onExited: (...je) => {
          var _a2;
          (_a2 = _e.onExited) == null ? void 0 : _a2.call(_e, ...je), q(...je);
        }
      }),
      additionalProps: {
        appear: true,
        in: R,
        timeout: A,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: J
    });
    return !R && P ? null : c.jsx(N, {
      ...re,
      ...M.clickAwayListener && {
        ownerState: L
      },
      children: c.jsx(me, {
        ...ce,
        children: c.jsx(ze, {
          ...pe,
          children: u || c.jsx(Me, {
            ...Ee
          })
        })
      })
    });
  });
  function Fa(e) {
    return ve("MuiTooltip", e);
  }
  const Ce = be("MuiTooltip", [
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
  function za(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Da = (e) => {
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
        `tooltipPlacement${U(s.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return we(i, Fa, t);
  }, ka = K(gs, {
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
          [`&[data-popper-placement*="bottom"] .${Ce.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${Ce.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Ta = K("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${U(n.placement.split("-")[0])}`]
      ];
    }
  })(fe(({ theme: e }) => ({
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
    [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${Ce.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${Ce.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${za(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Ea = K("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(fe(({ theme: e }) => ({
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
  let En = false;
  const xr = new qs();
  let nn = {
    x: 0,
    y: 0
  };
  function On(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Te = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: s, classes: i, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: f = false, disableInteractive: g = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: x = 700, followCursor: b = false, id: w, leaveDelay: _ = 0, leaveTouchDelay: j = 1500, onClose: R, onOpen: C, open: M, placement: z = "bottom", PopperComponent: k, PopperProps: A = {}, slotProps: I = {}, slots: G = {}, title: E, TransitionComponent: Y, TransitionProps: J, ...O } = o, D = y.isValidElement(s) ? s : c.jsx("span", {
      children: s
    }), S = _n(), P = Vo(), [X, q] = y.useState(), [ae, ee] = y.useState(null), me = y.useRef(false), ce = g || b, N = qt(), L = qt(), re = qt(), Me = qt(), [Ee, ze] = Kr({
      controlled: M,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let pe = Ee;
    const _e = Co(w), je = y.useRef(), qe = vn(() => {
      je.current !== void 0 && (document.body.style.WebkitUserSelect = je.current, je.current = void 0), Me.clear();
    });
    y.useEffect(() => qe, [
      qe
    ]);
    const Ye = (V) => {
      xr.clear(), En = true, ze(true), C && !pe && C(V);
    }, Oe = vn((V) => {
      xr.start(800 + _, () => {
        En = false;
      }), ze(false), R && pe && R(V), N.start(S.transitions.duration.shortest, () => {
        me.current = false;
      });
    }), mt = (V) => {
      me.current && V.type !== "touchstart" || (X && X.removeAttribute("title"), L.clear(), re.clear(), h || En && m ? L.start(En ? m : h, () => {
        Ye(V);
      }) : Ye(V));
    }, yt = (V) => {
      L.clear(), re.start(_, () => {
        Oe(V);
      });
    }, [, Be] = y.useState(false), nt = (V) => {
      or(V.target) || (Be(false), yt(V));
    }, vt = (V) => {
      X || q(V.currentTarget), or(V.target) && (Be(true), mt(V));
    }, $t = (V) => {
      me.current = true;
      const Ke = D.props;
      Ke.onTouchStart && Ke.onTouchStart(V);
    }, At = (V) => {
      $t(V), re.clear(), N.clear(), qe(), je.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Me.start(x, () => {
        document.body.style.WebkitUserSelect = je.current, mt(V);
      });
    }, Lt = (V) => {
      D.props.onTouchEnd && D.props.onTouchEnd(V), qe(), re.start(j, () => {
        Oe(V);
      });
    };
    y.useEffect(() => {
      if (!pe) return;
      function V(Ke) {
        Ke.key === "Escape" && Oe(Ke);
      }
      return document.addEventListener("keydown", V), () => {
        document.removeEventListener("keydown", V);
      };
    }, [
      Oe,
      pe
    ]);
    const ct = Kt(Xr(D), q, n);
    !E && E !== 0 && (pe = false);
    const ut = y.useRef(), dt = (V) => {
      const Ke = D.props;
      Ke.onMouseMove && Ke.onMouseMove(V), nn = {
        x: V.clientX,
        y: V.clientY
      }, ut.current && ut.current.update();
    }, it = {}, Vt = typeof E == "string";
    d ? (it.title = !pe && Vt && !f ? E : null, it["aria-describedby"] = pe ? _e : null) : (it["aria-label"] = Vt ? E : null, it["aria-labelledby"] = pe && !Vt ? _e : null);
    const Ne = {
      ...it,
      ...O,
      ...D.props,
      className: se(O.className, D.props.className),
      onTouchStart: $t,
      ref: ct,
      ...b ? {
        onMouseMove: dt
      } : {}
    }, bt = {};
    p || (Ne.onTouchStart = At, Ne.onTouchEnd = Lt), f || (Ne.onMouseOver = On(mt, Ne.onMouseOver), Ne.onMouseLeave = On(yt, Ne.onMouseLeave), ce || (bt.onMouseOver = mt, bt.onMouseLeave = yt)), u || (Ne.onFocus = On(vt, Ne.onFocus), Ne.onBlur = On(nt, Ne.onBlur), ce || (bt.onFocus = vt, bt.onBlur = nt));
    const Je = {
      ...o,
      isRtl: P,
      arrow: r,
      disableInteractive: ce,
      placement: z,
      PopperComponentProp: k,
      touch: me.current
    }, xt = typeof I.popper == "function" ? I.popper(Je) : I.popper, lo = y.useMemo(() => {
      var _a2, _b;
      let V = [
        {
          name: "arrow",
          enabled: !!ae,
          options: {
            element: ae,
            padding: 4
          }
        }
      ];
      return ((_a2 = A.popperOptions) == null ? void 0 : _a2.modifiers) && (V = V.concat(A.popperOptions.modifiers)), ((_b = xt == null ? void 0 : xt.popperOptions) == null ? void 0 : _b.modifiers) && (V = V.concat(xt.popperOptions.modifiers)), {
        ...A.popperOptions,
        ...xt == null ? void 0 : xt.popperOptions,
        modifiers: V
      };
    }, [
      ae,
      A.popperOptions,
      xt == null ? void 0 : xt.popperOptions
    ]), Mn = Da(Je), Pt = typeof I.transition == "function" ? I.transition(Je) : I.transition, Ht = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? Y,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...G
      },
      slotProps: {
        arrow: I.arrow ?? a.arrow,
        popper: {
          ...A,
          ...xt ?? a.popper
        },
        tooltip: I.tooltip ?? a.tooltip,
        transition: {
          ...J,
          ...Pt ?? a.transition
        }
      }
    }, [$n, An] = ie("popper", {
      elementType: ka,
      externalForwardedProps: Ht,
      ownerState: Je,
      className: se(Mn.popper, A == null ? void 0 : A.className)
    }), [Pn, $] = ie("transition", {
      elementType: Qr,
      externalForwardedProps: Ht,
      ownerState: Je
    }), [T, Q] = ie("tooltip", {
      elementType: Ta,
      className: Mn.tooltip,
      externalForwardedProps: Ht,
      ownerState: Je
    }), [ye, Ae] = ie("arrow", {
      elementType: Ea,
      className: Mn.arrow,
      externalForwardedProps: Ht,
      ownerState: Je,
      ref: ee
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(D, Ne),
        c.jsx($n, {
          as: k ?? gs,
          placement: z,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: nn.y,
              left: nn.x,
              right: nn.x,
              bottom: nn.y,
              width: 0,
              height: 0
            })
          } : X,
          popperRef: ut,
          open: X ? pe : false,
          id: _e,
          transition: true,
          ...bt,
          ...An,
          popperOptions: lo,
          children: ({ TransitionProps: V }) => c.jsx(Pn, {
            timeout: S.transitions.duration.shorter,
            ...V,
            ...$,
            children: c.jsxs(T, {
              ...Q,
              children: [
                E,
                r ? c.jsx(ye, {
                  ...Ae
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), ms = y.createContext();
  function Oa(e) {
    return ve("MuiTable", e);
  }
  be("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const Na = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return we({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, Oa, t);
  }, La = K("table", {
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
  }))), wr = "table", Va = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTable"
    }), { className: r, component: s = wr, padding: i = "normal", size: l = "medium", stickyHeader: a = false, ...d } = o, u = {
      ...o,
      component: s,
      padding: i,
      size: l,
      stickyHeader: a
    }, f = Na(u), g = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: a
    }), [
      i,
      l,
      a
    ]);
    return c.jsx(ms.Provider, {
      value: g,
      children: c.jsx(La, {
        as: s,
        role: s === wr ? null : "table",
        ref: n,
        className: se(f.root, r),
        ownerState: u,
        ...d
      })
    });
  }), oo = y.createContext();
  function Ha(e) {
    return ve("MuiTableBody", e);
  }
  be("MuiTableBody", [
    "root"
  ]);
  const Ba = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Ha, t);
  }, Wa = K("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), Ga = {
    variant: "body"
  }, Cr = "tbody", Ua = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: s = Cr, ...i } = o, l = {
      ...o,
      component: s
    }, a = Ba(l);
    return c.jsx(oo.Provider, {
      value: Ga,
      children: c.jsx(Wa, {
        className: se(a.root, r),
        as: s,
        ref: n,
        role: s === Cr ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function qa(e) {
    return ve("MuiTableCell", e);
  }
  const Ya = be("MuiTableCell", [
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
  ]), Ja = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: s, stickyHeader: i } = e, l = {
      root: [
        "root",
        n,
        i && "stickyHeader",
        o !== "inherit" && `align${U(o)}`,
        r !== "normal" && `padding${U(r)}`,
        `size${U(s)}`
      ]
    };
    return we(l, qa, t);
  }, Ka = K("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${U(n.size)}`],
        n.padding !== "normal" && t[`padding${U(n.padding)}`],
        n.align !== "inherit" && t[`align${U(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? wo(Fe(e.palette.divider, 1), 0.88) : xo(Fe(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Ya.paddingCheckbox}`]: {
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
  }))), ot = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: s, component: i, padding: l, scope: a, size: d, sortDirection: u, variant: f, ...g } = o, p = y.useContext(ms), h = y.useContext(oo), m = h && h.variant === "head";
    let x;
    i ? x = i : x = m ? "th" : "td";
    let b = a;
    x === "td" ? b = void 0 : !b && m && (b = "col");
    const w = f || h && h.variant, _ = {
      ...o,
      align: r,
      component: x,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: d || (p && p.size ? p.size : "medium"),
      sortDirection: u,
      stickyHeader: w === "head" && p && p.stickyHeader,
      variant: w
    }, j = Ja(_);
    let R = null;
    return u && (R = u === "asc" ? "ascending" : "descending"), c.jsx(Ka, {
      as: x,
      ref: n,
      className: se(j.root, s),
      "aria-sort": R,
      scope: b,
      ownerState: _,
      ...g
    });
  });
  function Xa(e) {
    return ve("MuiTableContainer", e);
  }
  be("MuiTableContainer", [
    "root"
  ]);
  const Qa = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Xa, t);
  }, Za = K("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), ec = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: s = "div", ...i } = o, l = {
      ...o,
      component: s
    }, a = Qa(l);
    return c.jsx(Za, {
      ref: n,
      as: s,
      className: se(a.root, r),
      ownerState: l,
      ...i
    });
  });
  function tc(e) {
    return ve("MuiTableHead", e);
  }
  be("MuiTableHead", [
    "root"
  ]);
  const nc = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, tc, t);
  }, oc = K("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), rc = {
    variant: "head"
  }, _r = "thead", sc = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: s = _r, ...i } = o, l = {
      ...o,
      component: s
    }, a = nc(l);
    return c.jsx(oo.Provider, {
      value: rc,
      children: c.jsx(oc, {
        as: s,
        className: se(a.root, r),
        ref: n,
        role: s === _r ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function ic(e) {
    return ve("MuiToolbar", e);
  }
  be("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const lc = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return we({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, ic, t);
  }, ac = K("div", {
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
  }))), ys = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: s = "div", disableGutters: i = false, variant: l = "regular", ...a } = o, d = {
      ...o,
      component: s,
      disableGutters: i,
      variant: l
    }, u = lc(d);
    return c.jsx(ac, {
      as: s,
      className: se(u.root, r),
      ref: n,
      ownerState: d,
      ...a
    });
  }), cc = le(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), uc = le(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), dc = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: f, showLastButton: g, slots: p = {}, slotProps: h = {}, ...m } = t, x = Vo(), b = (q) => {
      a(q, 0);
    }, w = (q) => {
      a(q, d - 1);
    }, _ = (q) => {
      a(q, d + 1);
    }, j = (q) => {
      a(q, Math.max(0, Math.ceil(r / u) - 1));
    }, R = p.firstButton ?? Se, C = p.lastButton ?? Se, M = p.nextButton ?? Se, z = p.previousButton ?? Se, k = p.firstButtonIcon ?? ba, A = p.lastButtonIcon ?? xa, I = p.nextButtonIcon ?? uc, G = p.previousButtonIcon ?? cc, E = x ? C : R, Y = x ? M : z, J = x ? z : M, O = x ? R : C, D = x ? h.lastButton : h.firstButton, S = x ? h.nextButton : h.previousButton, P = x ? h.previousButton : h.nextButton, X = x ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        f && c.jsx(E, {
          onClick: b,
          disabled: s || d === 0,
          "aria-label": i("first", d),
          title: i("first", d),
          ...D,
          children: x ? c.jsx(A, {
            ...h.lastButtonIcon
          }) : c.jsx(k, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(Y, {
          onClick: w,
          disabled: s || d === 0,
          color: "inherit",
          "aria-label": i("previous", d),
          title: i("previous", d),
          ...S ?? o,
          children: x ? c.jsx(I, {
            ...h.nextButtonIcon
          }) : c.jsx(G, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(J, {
          onClick: _,
          disabled: s || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": i("next", d),
          title: i("next", d),
          ...P ?? l,
          children: x ? c.jsx(G, {
            ...h.previousButtonIcon
          }) : c.jsx(I, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(O, {
          onClick: j,
          disabled: s || d >= Math.ceil(r / u) - 1,
          "aria-label": i("last", d),
          title: i("last", d),
          ...X,
          children: x ? c.jsx(k, {
            ...h.firstButtonIcon
          }) : c.jsx(A, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function pc(e) {
    return ve("MuiTablePagination", e);
  }
  const hn = be("MuiTablePagination", [
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
  var Sr;
  const fc = K(ot, {
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
  }))), gc = K(ys, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${hn.actions}`]: t.actions,
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
    [`& .${hn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), hc = K("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), mc = K("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), yc = K(_t, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${hn.selectIcon}`]: t.selectIcon,
      [`& .${hn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${hn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), vc = K(de, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), bc = K("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function xc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function wc(e) {
    return `Go to ${e} page`;
  }
  const Cc = (e) => {
    const { classes: t } = e;
    return we({
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
    }, pc, t);
  }, _c = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = dc, backIconButtonProps: s, colSpan: i, component: l = ot, count: a, disabled: d = false, getItemAriaLabel: u = wc, labelDisplayedRows: f = xc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: m, page: x, rowsPerPage: b, rowsPerPageOptions: w = [
      10,
      25,
      50,
      100
    ], SelectProps: _ = {}, showFirstButton: j = false, showLastButton: R = false, slotProps: C = {}, slots: M = {}, ...z } = o, k = o, A = Cc(k), I = (C == null ? void 0 : C.select) ?? _, G = I.native ? "option" : vc;
    let E;
    (l === ot || l === "td") && (E = i || 1e3);
    const Y = Co(I.id), J = Co(I.labelId), O = () => a === -1 ? (x + 1) * b : b === -1 ? a : Math.min(a, (x + 1) * b), D = {
      slots: M,
      slotProps: C
    }, [S, P] = ie("root", {
      ref: n,
      className: A.root,
      elementType: fc,
      externalForwardedProps: {
        ...D,
        component: l,
        ...z
      },
      ownerState: k,
      additionalProps: {
        colSpan: E
      }
    }), [X, q] = ie("toolbar", {
      className: A.toolbar,
      elementType: gc,
      externalForwardedProps: D,
      ownerState: k
    }), [ae, ee] = ie("spacer", {
      className: A.spacer,
      elementType: hc,
      externalForwardedProps: D,
      ownerState: k
    }), [me, ce] = ie("selectLabel", {
      className: A.selectLabel,
      elementType: mc,
      externalForwardedProps: D,
      ownerState: k,
      additionalProps: {
        id: J
      }
    }), [N, L] = ie("select", {
      className: A.select,
      elementType: yc,
      externalForwardedProps: D,
      ownerState: k
    }), [re, Me] = ie("menuItem", {
      className: A.menuItem,
      elementType: G,
      externalForwardedProps: D,
      ownerState: k
    }), [Ee, ze] = ie("displayedRows", {
      className: A.displayedRows,
      elementType: bc,
      externalForwardedProps: D,
      ownerState: k
    });
    return c.jsx(S, {
      ...P,
      children: c.jsxs(X, {
        ...q,
        children: [
          c.jsx(ae, {
            ...ee
          }),
          w.length > 1 && c.jsx(me, {
            ...ce,
            children: g
          }),
          w.length > 1 && c.jsx(N, {
            variant: "standard",
            ...!I.variant && {
              input: Sr || (Sr = c.jsx(Ys, {}))
            },
            value: b,
            onChange: m,
            id: Y,
            labelId: J,
            ...I,
            classes: {
              ...I.classes,
              root: se(A.input, A.selectRoot, (I.classes || {}).root),
              select: se(A.select, (I.classes || {}).select),
              icon: se(A.selectIcon, (I.classes || {}).icon)
            },
            disabled: d,
            ...L,
            children: w.map((pe) => y.createElement(re, {
              ...Me,
              key: pe.label ? pe.label : pe,
              value: pe.value ? pe.value : pe
            }, pe.label ? pe.label : pe))
          }),
          c.jsx(Ee, {
            ...ze,
            children: f({
              from: a === 0 ? 0 : x * b + 1,
              to: O(),
              count: a === -1 ? -1 : a,
              page: x
            })
          }),
          c.jsx(r, {
            className: A.actions,
            backIconButtonProps: s,
            count: a,
            nextIconButtonProps: p,
            onPageChange: h,
            page: x,
            rowsPerPage: b,
            showFirstButton: j,
            showLastButton: R,
            slotProps: C.actions,
            slots: M.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function Sc(e) {
    return ve("MuiTableRow", e);
  }
  const jr = be("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), jc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: s } = e;
    return we({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        s && "footer"
      ]
    }, Sc, t);
  }, Rc = K("tr", {
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
    [`&.${jr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${jr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Fe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Rr = "tr", Wt = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: s = Rr, hover: i = false, selected: l = false, ...a } = o, d = y.useContext(oo), u = {
      ...o,
      component: s,
      hover: i,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, f = jc(u);
    return c.jsx(Rc, {
      as: s,
      ref: n,
      className: se(f.root, r),
      role: s === Rr ? null : "row",
      ownerState: u,
      ...a
    });
  }), Mc = le(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function $c(e) {
    return ve("MuiTableSortLabel", e);
  }
  const ao = be("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), Ac = (e) => {
    const { classes: t, direction: n, active: o } = e, r = {
      root: [
        "root",
        o && "active",
        `direction${U(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${U(n)}`
      ]
    };
    return we(r, $c, t);
  }, Pc = K(Yn, {
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
      [`& .${ao.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${ao.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${ao.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), Ic = K("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${U(n.direction)}`]
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
  }))), Fc = y.forwardRef(function(t, n) {
    const o = xe({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: s, className: i, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = Mc, slots: u = {}, slotProps: f = {}, ...g } = o, p = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = Ac(p), m = {
      slots: u,
      slotProps: f
    }, [x, b] = ie("root", {
      elementType: Pc,
      externalForwardedProps: m,
      ownerState: p,
      className: se(h.root, i),
      ref: n
    }), [w, _] = ie("icon", {
      elementType: Ic,
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
        s,
        a && !r ? null : c.jsx(w, {
          as: d,
          ..._
        })
      ]
    });
  }), vs = le(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), bs = le(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), xs = le(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), zc = le(c.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), Mr = le(c.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), Ao = le(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), Dc = le(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), kc = le(c.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), Nn = le(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), $r = le(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Ar = le(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), Tc = le(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), Ec = le(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), un = le(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), ws = le(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Oc = le(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Nc = le(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Lc = le(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), mn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, Pr = "b64:";
  function Vc(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function Hc(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  function Cs(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(Pr) ? Hc(e.slice(Pr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Bc({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: s, loading: i }) {
    const [l, a] = y.useState(""), [d, u] = y.useState(null), [f, g] = y.useState(null), [p, h] = y.useState(false), m = y.useRef(0), x = y.useRef(/* @__PURE__ */ new Map()), b = !l, w = y.useMemo(() => {
      if (!l) return e;
      const S = l.toLowerCase();
      return e.filter((P) => P.path.toLowerCase().includes(S) || P.headerName.toLowerCase().includes(S));
    }, [
      e,
      l
    ]), _ = y.useMemo(() => e.filter((S) => S.visible).length, [
      e
    ]), j = y.useCallback((S) => {
      r(e.map((P) => P.path === S ? {
        ...P,
        visible: !P.visible
      } : P));
    }, [
      e,
      r
    ]), R = y.useCallback((S, P) => {
      S.stopPropagation(), j(P);
    }, [
      j
    ]), C = y.useCallback((S) => (P) => {
      P ? x.current.set(S, P) : x.current.delete(S);
    }, []), M = y.useCallback((S) => {
      r(e.map((P) => ({
        ...P,
        visible: S
      })));
    }, [
      e,
      r
    ]), z = y.useCallback((S, P) => {
      S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", P), u(P);
    }, []), k = y.useCallback((S, P) => {
      S.preventDefault(), m.current += 1, P !== d && g(P);
    }, [
      d
    ]), A = y.useCallback((S) => {
      S.preventDefault(), m.current -= 1, m.current <= 0 && (m.current = 0, g(null));
    }, []), I = y.useCallback((S) => {
      S.preventDefault(), S.dataTransfer.dropEffect = "move";
    }, []), G = y.useCallback((S, P) => {
      S.preventDefault(), m.current = 0, g(null), u(null);
      const X = S.dataTransfer.getData("text/plain");
      if (!X || X === P) return;
      const q = [
        ...e
      ], ae = q.findIndex((ce) => ce.path === X), ee = q.findIndex((ce) => ce.path === P);
      if (ae === -1 || ee === -1) return;
      const [me] = q.splice(ae, 1);
      q.splice(ee, 0, me), r(q);
    }, [
      e,
      r
    ]), E = y.useCallback(() => {
      m.current = 0, u(null), g(null);
    }, []), Y = y.useCallback(() => {
      r(e.map((S) => ({
        path: S.path,
        visible: true,
        headerName: S.path.split(".").pop() || S.path
      }))), h(false);
    }, [
      e,
      r
    ]), J = y.useCallback(() => {
      h(true);
    }, []), O = y.useCallback(() => {
      h(false);
    }, []), D = y.useCallback((S, P, X) => {
      var _a2, _b;
      switch (S.key) {
        case "Enter":
        case " ":
          S.preventDefault(), o(P.path);
          break;
        case "ArrowDown":
          if (S.preventDefault(), X < w.length - 1) {
            const q = w[X + 1].path;
            o(q), (_a2 = x.current.get(q)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (S.preventDefault(), X > 0) {
            const q = w[X - 1].path;
            o(q), (_b = x.current.get(q)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          S.preventDefault(), j(P.path);
          break;
      }
    }, [
      w,
      o,
      j
    ]);
    return c.jsxs(W, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(ys, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            c.jsx($e, {
              size: "small",
              placeholder: v.t("json_table_search_columns"),
              value: l,
              onChange: (S) => a(S.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx($o, {
                    position: "start",
                    children: c.jsx(ws, {
                      fontSize: "small"
                    })
                  }),
                  "aria-label": v.t("json_table_search_columns")
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            c.jsx(Te, {
              title: v.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(Se, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": v.t("json_table_refresh_columns"),
                  children: c.jsx(Ec, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Te, {
              title: v.t("json_table_show_all"),
              children: c.jsx(Se, {
                size: "small",
                onClick: () => M(true),
                "aria-label": v.t("json_table_show_all"),
                children: c.jsx(Nc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Te, {
              title: v.t("json_table_hide_all"),
              children: c.jsx(Se, {
                size: "small",
                onClick: () => M(false),
                "aria-label": v.t("json_table_hide_all"),
                children: c.jsx(Lc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Te, {
              title: v.t("json_table_reset_all"),
              children: c.jsx(Se, {
                size: "small",
                onClick: J,
                "aria-label": v.t("json_table_reset_all"),
                children: c.jsx(un, {
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
          children: w.length === 0 ? c.jsx(W, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(F, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? v.t("json_table_no_columns") : v.t("json_table_no_search_results")
            })
          }) : w.map((S, P) => {
            const X = t.find((ee) => ee.path === S.path), q = n === S.path, ae = (X == null ? void 0 : X.type) || "string";
            return c.jsx(sa, {
              ref: C(S.path),
              "data-column-path": S.path,
              onClick: () => o(S.path),
              onKeyDown: (ee) => D(ee, S, P),
              draggable: b,
              onDragStart: b ? (ee) => z(ee, S.path) : void 0,
              onDragEnter: b ? (ee) => k(ee, S.path) : void 0,
              onDragLeave: b ? A : void 0,
              onDragOver: b ? I : void 0,
              onDrop: b ? (ee) => G(ee, S.path) : void 0,
              onDragEnd: b ? E : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": q,
              "aria-label": `${S.headerName || S.path}, ${ae}, ${S.visible ? v.t("json_table_visible") : v.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: b ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: q ? "primary.main" : "divider",
                backgroundColor: q ? "action.selected" : "background.paper",
                opacity: d === S.path ? 0.4 : S.visible ? 1 : 0.55,
                borderTop: f === S.path ? "3px solid" : void 0,
                borderTopColor: f === S.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: q ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
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
                  b && c.jsx(Dc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  c.jsx(bn, {
                    checked: S.visible,
                    onClick: (ee) => R(ee, S.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${v.t("json_table_visible")}: ${S.headerName || S.path}`
                    }
                  }),
                  c.jsxs(W, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(F, {
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
                      S.headerName && S.headerName !== S.path && c.jsx(F, {
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
                  c.jsx(jt, {
                    label: ae,
                    size: "small",
                    sx: {
                      backgroundColor: mn[ae] || mn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${v.t("json_table_type")}: ${ae}`
                  })
                ]
              })
            }, S.path);
          })
        }),
        e.length > 0 && c.jsx(W, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(F, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              _,
              " / ",
              e.length,
              " ",
              v.t("json_table_columns_visible")
            ]
          })
        }),
        c.jsxs(es, {
          open: p,
          onClose: O,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            c.jsx(ts, {
              id: "reset-dialog-title",
              children: v.t("json_table_reset_all")
            }),
            c.jsx(ns, {
              children: c.jsx(ga, {
                id: "reset-dialog-description",
                children: v.t("json_table_reset_confirm_message")
              })
            }),
            c.jsxs(hs, {
              children: [
                c.jsx(Et, {
                  onClick: O,
                  color: "primary",
                  children: v.t("cancel")
                }),
                c.jsx(Et, {
                  onClick: Y,
                  color: "error",
                  variant: "contained",
                  autoFocus: true,
                  children: v.t("json_table_reset_all")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Un(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function _s(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: s = false } = t;
    let i = e.toFixed(n);
    if (s) {
      const [l, a] = i.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${o}${i}${r}`;
  }
  const Wc = [
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
  function Ss(e, t) {
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
  function js(e, t, n) {
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
      else return Un(e);
      if (isNaN(o.getTime())) return Un(e);
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
      return Un(e);
    }
  }
  function Po(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Un(e);
  }
  function Rs(e, t) {
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
  function Gc({ format: e, onChange: t, discoveredColumn: n }) {
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
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: v.t("json_table_number_format")
        }),
        c.jsxs(W, {
          children: [
            c.jsxs(F, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                v.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(li, {
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
        c.jsx($e, {
          label: v.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (r) => t({
            type: "number",
            numberPrefix: r.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        c.jsx($e, {
          label: v.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (r) => t({
            type: "number",
            numberSuffix: r.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        c.jsx(kt, {
          control: c.jsx(pn, {
            checked: e.numberThousandsSeparator || false,
            onChange: (r) => t({
              type: "number",
              numberThousandsSeparator: r.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(F, {
            variant: "body2",
            children: v.t("json_table_number_thousands")
          })
        }),
        c.jsxs(st, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: v.t("json_table_preview")
            }),
            c.jsxs(F, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                o,
                " \u2192",
                " ",
                _s(o, {
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
  function Uc({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: v.t("json_table_date_format")
        }),
        t && c.jsx($e, {
          label: v.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: v.t("json_table_date_detected_hint")
        }),
        c.jsxs(Ft, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(zt, {
              children: v.t("json_table_date_output_format")
            }),
            c.jsx(_t, {
              label: v.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (o) => n({
                type: "date",
                dateFormat: o.target.value,
                dateInputFormat: t
              }),
              children: Wc.map((o) => c.jsx(de, {
                value: o.value,
                children: o.label
              }, o.value))
            })
          ]
        }),
        c.jsxs(st, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: v.t("json_table_preview")
            }),
            c.jsx(F, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: js(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function qc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: v.t("json_table_boolean_format")
        }),
        c.jsx($e, {
          label: v.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        c.jsx($e, {
          label: v.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        c.jsxs(st, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: v.t("json_table_preview")
            }),
            c.jsxs(ke, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                c.jsxs(F, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Po(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(F, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Po(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Io({ value: e, onChange: t, label: n }) {
    const o = _n(), [r, s] = y.useState(null), i = y.useRef(null), [l, a] = y.useState(null), d = !!r;
    return y.useEffect(() => {
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
            s(u.currentTarget);
          },
          children: [
            c.jsx(F, {
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
            e && c.jsx(Se, {
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(Ao, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(Js, {
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
          children: c.jsx(W, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(Ks, {
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
  function Yc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: v.t("json_table_string_format")
        }),
        c.jsxs(Ft, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(zt, {
              children: v.t("json_table_string_case")
            }),
            c.jsxs(_t, {
              label: v.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(de, {
                  value: "none",
                  children: v.t("json_table_string_case_none")
                }),
                c.jsx(de, {
                  value: "upper",
                  children: v.t("json_table_string_case_upper")
                }),
                c.jsx(de, {
                  value: "lower",
                  children: v.t("json_table_string_case_lower")
                }),
                c.jsx(de, {
                  value: "title",
                  children: v.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        c.jsxs(ke, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx($e, {
              label: v.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            c.jsx($e, {
              label: v.t("json_table_string_suffix"),
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
          control: c.jsx(pn, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: v.t("json_table_string_trim")
        }),
        c.jsx($e, {
          label: v.t("json_table_string_max_length"),
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
        c.jsx($e, {
          label: v.t("json_table_string_regex"),
          value: e.stringRegex ?? "",
          onChange: (n) => t({
            type: "string",
            stringRegex: n.target.value || void 0
          }),
          size: "small",
          fullWidth: true,
          placeholder: "e.g. (\\d+)"
        }),
        e.stringRegex && c.jsxs(ke, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx($e, {
              label: v.t("json_table_string_regex_group"),
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
            c.jsx($e, {
              label: v.t("json_table_string_regex_flags"),
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
        c.jsx(Zr, {}),
        c.jsxs(ke, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(kt, {
              control: c.jsx(pn, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(F, {
                variant: "body2",
                fontWeight: "bold",
                children: v.t("json_table_string_font_weight")
              })
            }),
            c.jsx(kt, {
              control: c.jsx(pn, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(F, {
                variant: "body2",
                fontStyle: "italic",
                children: v.t("json_table_string_font_style")
              })
            })
          ]
        }),
        c.jsxs(ke, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx($e, {
              label: v.t("json_table_string_font_size"),
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
            c.jsx(Io, {
              label: v.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        c.jsxs(st, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: v.t("json_table_preview")
            }),
            c.jsx(F, {
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
              children: Rs("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function ge(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Jc(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function gt(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        gt(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          gt(r, t - 1);
        }
      }
    }
    return e;
  }
  function Kc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+ge(e)) && t !== null) throw NaN;
    if (Number.isNaN(+ge(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Xc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Qc(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function Zc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function eu(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function tu(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let s = gt(r ? e[0] : n, o);
    for (let i = r; i < e.length; i++) s = gt(await t(s, e[i]), o);
    return s;
  }
  const Qn = {
    filter: Xc,
    some: Qc,
    every: Zc,
    map: eu,
    reduce: tu
  }, oe = /* @__PURE__ */ Symbol.for("json_logic_sync"), De = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Qe = /* @__PURE__ */ Symbol.for("json_logic_original"), Ir = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Nt(e) {
    return typeof e == "function" ? e[oe] === true : Array.isArray(e) ? e.every(Nt) : !(e && e.asyncMethod && !e.method);
  }
  function Ms(e, t = true) {
    return e[oe] = t, e;
  }
  function Cn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const co = /* @__PURE__ */ new WeakMap();
  function Fr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (co.has(e) || co.set(e, nu(e)), co.get(e));
  }
  function nu(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function ou(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), Nt(t[r]) || (o.asyncDetected = true), n += (Nt(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][De] < "u" ? n += t[r][De] : n += he(t[r], o));
    return {
      [De]: n
    };
  }
  function ru(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Zn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Zn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Zn(r, t, n);
    }
    return true;
  }
  function Fo(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => Fo(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return Nt(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][oe] == "function" && t.methods[o][oe](e, {
        engine: t
      })) : Fo(r, t) : false;
    }
    return true;
  }
  function he(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: s = [], engine: i } = t;
    function l(u, f = false) {
      return ru(u, f) ? JSON.stringify(u) : (s.push(u), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let f = 0; f < e.length; f++) f > 0 && (u += ","), u += he(e[f], t);
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
      if (!t.engine.disableInline && i.methods[f] && Zn(e, i, t)) return Fo(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (r.push(i.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let g = e[f];
      if ((!g || typeof g != "object") && !i.methods[f].lazy && (g = [
        g
      ]), i.methods[f] && i.methods[f].compile) {
        let m = i.methods[f].compile(g, t);
        if (m[De] && (m = m[De]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let p = i.methods[f].optimizeUnary ? "" : "coerceArray";
      !p && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : p && Array.isArray(g) && (p = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[f] == "function") {
        a = !Nt(i.methods[f]);
        const m = h[Fr(i.methods[f]) - 1] || h[2];
        return d(`engine.methods["${f}"](${p}(` + he(g, t) + ")" + m + ")");
      } else {
        a = !!(o && i.methods[f] && i.methods[f].asyncMethod);
        const m = Fr(a ? i.methods[f].asyncMethod : i.methods[f].method);
        let x = h[m - 1] || h[2];
        return a && typeof i.methods[f][oe] == "function" && i.methods[f][oe](g, {
          engine: i
        }) && (a = false, x = x.replace("engine", "engine.fallback")), i.methods[f] && !i.methods[f].lazy ? d(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(${p}(` + he(g, t) + ")" + x + ")") : (n.push(g), d(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + x + ")"));
      }
    }
    return l(e);
  }
  function eo(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: ou
    }, t));
    const n = he(e, t);
    return su(e, n, t);
  }
  function su(e, t, n) {
    const { engine: o, methods: r, notTraversed: s, processing: i = [], values: l } = n, a = [];
    i.forEach((u, f) => {
      t = t.replace(`__%%%${f}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, r, s, Qn, o, a, Cn, ge, Jc, Kc, gt), {
      [oe]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const iu = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Jt = iu(), on = /* @__PURE__ */ new Map();
  function Ut(e) {
    if (on.has(e)) return on.get(e);
    on.size > 2048 && on.clear();
    const t = lu(e);
    return on.set(e, t), t;
  }
  function lu(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === o ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (r.push(s), s = "") : s += l;
    }
    return r.length !== e.length && r.push(s), r;
  }
  const zo = {
    get: {
      [oe]: true,
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
          return Jt ? `((${he(r, t)})${s.map((i) => `?.[${he(i, t)}]`).join("")} ?? ${he(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${he(r, t)}||0)`)}, ${he(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Qe]: true,
      [oe]: true,
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
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${he(o, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${r.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${he(o, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [oe]: true,
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
      [oe]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = zo.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = zo.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [De]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, au = {
    ...zo
  }, ne = {
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
  function Le(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Le(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][oe] == "function" ? t.methods[o][oe](r, n) : t.methods[o][oe] : typeof t.methods[o][oe] == "function" ? t.methods[o][oe](r, n) : t.methods[o][oe] && Le(r, t, n);
    }
    return true;
  }
  function ue(e, t, n, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const r = t.optimizedMap.get(e);
      return typeof r == "function" ? r(n, o) : r;
    }
    return t.run(e, n, {
      above: o
    });
  }
  const rn = qn("every", true), te = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ge(+e);
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
      if (e.length === 0) throw ne;
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ge(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw ne;
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
      if (e.length < 2) throw ne;
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
      if (!e.length || typeof e[0] != "number") throw ne;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ne;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw ne;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ne;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: Ms((e) => e, true),
      [oe]: () => true
    },
    if: {
      [Qe]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (e.length === 1) return ue(e[0], o, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = ue(s, o, t, n);
          if (o.truthy(l)) return ue(i, o, t, n);
        }
        return ue(r, o, t, n);
      },
      [oe]: (e, t) => Le(e, t.engine, t),
      deterministic: (e, t) => Re(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
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
      [oe]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = ue(e[s], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
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
      [oe]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let r;
        for (let s = 0; s < e.length; s++) if (r = ue(e[s], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let r;
        for (let s = 0; s < e.length; s++) if (r = await o.run(e[s], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
      compile: (e, t) => Jt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = he(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${he(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [oe]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? r = ue(e[i], o, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : r = ue(e[i], o, t, n), r;
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
      [oe]: (e, t) => Le(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (!e.length) return null;
        let r;
        for (let s = 0; s < e.length; s++) if (r = ue(e[s], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
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
        if (!e) throw ne;
        const r = ue(e, o, t, n), s = Array.isArray(e) ? r[0] : r;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw ne;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw ne;
        const r = await ue(e, o, t, n), s = Array.isArray(e) ? r[0] : r;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw ne;
      },
      deterministic: (e, t) => Re(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => te.val.method(e, t, n, o, Ir) !== Ir,
      deterministic: false
    },
    val: {
      [Qe]: true,
      [oe]: true,
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
        if (typeof e == "object" && !Array.isArray(e)) if (Le(e, t.engine, t) && Re(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
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
    map: qn("map"),
    some: {
      ...qn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let [r, s] = e;
        r = ue(r, o, t, n) || [];
        for (let i = 0; i < r.length; i++) if (o.truthy(ue(s, o, r[i], [
          r,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [oe]: rn[oe],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        const r = ue(e[0], o, t, n) || [];
        if (Array.isArray(r) && r.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < r.length; i++) if (!o.truthy(ue(s, o, r[i], [
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
        return rn.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${rn.compile([
        {
          [De]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: rn.deterministic,
      lazy: rn.lazy
    },
    none: {
      [oe]: (e, t) => Le(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !te.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await te.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = te.some.compile(e, t);
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
    filter: qn("filter", true),
    reduce: {
      deterministic: (e, t) => Re(e[0], t.engine, t) && Re(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw ne;
        const { async: n } = t;
        let [o, r, s] = e;
        o = he(o, t), typeof s < "u" && (s = he(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = eo(r, i);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!Nt(r) || o.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${s}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let [r, s, i] = e;
        i = gt(ue(i, o, t, n), o.options.maxDepth), r = ue(r, o, t, n) || [];
        let l = (a, d) => gt(o.run(s, {
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
          l = (d, u) => gt(a({
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
      [oe]: (e, t) => Le(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let [r, s, i] = e;
        return i = gt(await o.run(i, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], Qn.reduce(r, (l, a) => o.run(s, {
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
      [Qe]: true,
      [oe]: true,
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
      [oe]: (e, t) => Le(e, t.engine, t),
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
        for (let o = 1; o < e.length; o++) n = t.compile`${eo(e[o], {
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
      [oe]: (e, t) => Le(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        throw ne;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${he(e[r], t)}`), o), []).join(",")} })`;
        throw ne;
      },
      asyncMethod: async (e, t, n, o) => await Qn.reduce(Object.keys(e), async (s, i) => {
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
      [De]: e
    }, o = e.length === 3;
    return {
      method: (r, s, i, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw ne;
        if (r.length === 2) {
          const d = ue(r[0], l, s, i), u = ue(r[1], l, s, i);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+ge(d))) throw NaN;
          if (Number.isNaN(+ge(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = ue(r[0], l, s, i);
        for (let d = 1; d < r.length; d++) {
          const u = ue(r[d], l, s, i);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+ge(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ge(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      asyncMethod: async (r, s, i, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw ne;
        if (r.length === 2) {
          const d = await ue(r[0], l, s, i), u = await ue(r[1], l, s, i);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+ge(d))) throw NaN;
          if (Number.isNaN(+ge(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = await ue(r[0], l, s, i);
        for (let d = 1; d < r.length; d++) {
          const u = await ue(r[d], l, s, i);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+ge(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ge(a))) throw NaN;
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
      [Qe]: true,
      [oe]: (r, s) => Le(r, s.engine, s),
      deterministic: (r, s) => Re(r, s.engine, s),
      lazy: true
    };
  }
  function qn(e, t = false) {
    return {
      deterministic: (n, o) => Re(n[0], o.engine, o) && Re(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Qe]: true,
      [oe]: (n, o) => Le(n, o.engine, o),
      method: (n, o, r, s) => {
        if (!Array.isArray(n)) throw ne;
        let [i, l] = n;
        return i = ue(i, s, o, r) || [], i[e]((a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = ue(l, s, a, [
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
        if (!Array.isArray(n)) throw ne;
        let [i, l] = n;
        return i = await s.run(i, o, {
          above: r
        }) || [], Qn[e](i, async (a, d) => {
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
        if (!Array.isArray(n)) throw ne;
        const { async: r } = o, [s, i] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = eo(i, l), d = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, u = t ? o.compile`engine.truthy` : o.compile``;
        return r && !Nt(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : o.compile`(${s} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  te.every = te.all;
  te["?:"] = te.if;
  Object.keys(te).forEach((e) => {
    typeof te[e] == "function" && (te[e][oe] = true), te[e].deterministic = typeof te[e].deterministic > "u" ? true : te[e].deterministic;
  });
  te.if.compile = function(e, t) {
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
  function Rn(e, t) {
    if (Array.isArray(e)) return ge(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + he(e, t);
    if (typeof e == "string") return "+" + ge(+e);
    const n = he(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + ge(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? ge(NaN) : `(+precoerceNumber(${n}))`;
  }
  te["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => Rn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${he(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  te["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw ne;
      return `precoerceNumber(${e.map((n) => Rn(n, t)).join(" % ")})`;
    }
    return `assertSize(${he(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  te.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  te["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ne;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => Rn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${he(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  te["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ne;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = Rn(n, t);
        return o && r === "+0" && ge(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${he(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  te["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => Rn(n, t)).join(" * ")})` : `(${he(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  te["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  te.not = te["!"];
  te["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  te.none.deterministic = te.some.deterministic;
  te.throw.deterministic = (e, t) => t.insideTry && Re(e, t.engine, t);
  te["+"].optimizeUnary = te["-"].optimizeUnary = te["!"].optimizeUnary = te["!!"].optimizeUnary = te.cat.optimizeUnary = te.throw.optimizeUnary = true;
  const cu = {
    ...te,
    ...au
  }, uu = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function du(e, t, n, o) {
    const r = t.methods[n], s = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, d) => s(l, a, d || o, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !r.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && r.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((a) => Ie(a, t, o));
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
      const l = Ie(i, t, o);
      if (r.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => s(l(d, u), d, u || o, t);
        if ((n === "var" || n === "val") && t.methods[n][Qe]) {
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
      return typeof l == "function" ? (a, d) => s(Cn(l(a, d)), a, d || o, t) : (a, d) => s(Cn(l), a, d || o, t);
    }
  }
  const zr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function pu(e, t, n) {
    if (e.val && t.methods.val[Qe] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[Qe] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, s] = e.if || e["?:"], i = Ie(o, t, n), l = Ie(r, t, n), a = Ie(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a(d, u) : typeof i == "function" && typeof l == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a : typeof i == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a(d, u) : typeof i == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a : t.truthy(i) ? l : a;
    }
    if (e.filter && t.methods.filter[Qe] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, s = Ie(r, t, n);
      if (typeof s != "function") return t.truthy(s) ? Ie(o, t, n) : [];
    }
    for (const o in zr) if (e[o] && Array.isArray(e[o]) && t.methods[o][Qe]) {
      const r = zr[o], s = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+ge(l))) throw NaN;
        if (Number.isNaN(+ge(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [i, l] = e[o], a = Ie(i, t, n), d = Ie(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (u, f) => s(a(u, f), d(u, f)) : typeof a == "function" ? (u, f) => s(a(u, f), d) : typeof d == "function" ? (u, f) => s(a, d(u, f)) : s(a, d);
      }
      if (e[o].length === 3) {
        const [i, l, a] = e[o], d = Ie(i, t, n), u = Ie(l, t, n), f = Ie(a, t, n);
        let g;
        return typeof d == "function" && typeof u == "function" && typeof f == "function" ? (p, h) => s(d(p, h), g = u(p, h)) && s(g, f(p, h)) : typeof d == "function" && typeof u == "function" ? (p, h) => s(d(p, h), g = u(p, h)) && s(g, f) : typeof d == "function" && typeof f == "function" ? (p, h) => s(d(p, h), u) && s(u, f(p, h)) : typeof u == "function" && typeof f == "function" ? (p, h) => s(d, g = u(p, h)) && s(g, f(p, h)) : typeof d == "function" ? (p, h) => s(d(p, h), u) && s(u, f) : typeof u == "function" ? (p, h) => s(d, g = u(p, h)) && s(g, f) : typeof f == "function" ? (p, h) => s(d, u) && s(u, f(p, h)) : s(d, u) && s(u, f);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, s] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const i = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (s = s || 0, i && l) return Ie({
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
        if (s = typeof s > "u" ? 1 : s, i && l) return Ie({
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
  function Ie(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => Ie(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, s) => o.map((i) => typeof i == "function" ? i(r, s) : i);
    }
    if (e && typeof e == "object") {
      const o = pu(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), s = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Zn(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const a = du(e, t, s, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class fu {
    constructor(t = cu, n = {
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
      if ((r === "var" || r === "val") && this.methods[r][Qe]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : Cn(this.run(i, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], d = a ? i : !i || typeof i != "object" ? [
          i
        ] : Cn(this.run(i, n, {
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
      }, Object.assign(n, uu({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = Ms(n);
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
        this.optimizedMap.set(t, Ie(t, this, r)), this.missesSinceSeen++;
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
      const { above: o = [], top: r = true } = n, s = eo(t, {
        engine: this,
        above: o
      });
      return r === false && s.deterministic ? s() : s;
    }
  }
  function We(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const ro = new fu();
  ro.addMethod("contains", ([e, t]) => We(e).includes(We(t)), {
    deterministic: true
  });
  ro.addMethod("startsWith", ([e, t]) => We(e).startsWith(We(t)), {
    deterministic: true
  });
  ro.addMethod("endsWith", ([e, t]) => We(e).endsWith(We(t)), {
    deterministic: true
  });
  function sn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Do = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), gu = {
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
  }, hu = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], mu = {
    var: "value"
  };
  function yu(e, t, n = "string") {
    const o = Number(t), r = n === "number", s = n === "date", i = mu;
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
  const vu = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function bu(e, t = "string") {
    const n = e.conditions.filter((r) => Do.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && vu.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => yu(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function pt(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function uo(e) {
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
      if (Array.isArray(o) && o.length === 2 && pt(o[0])) return {
        operator: n,
        operand: We(o[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && pt(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: We(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && pt(t[0])) return {
        operator: "neq",
        operand: We(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && pt(t[0])) return {
        operator: "contains",
        operand: We(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && pt(t[0])) return {
        operator: "starts_with",
        operand: We(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && pt(t[0])) return {
        operator: "ends_with",
        operand: We(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const o = n["!!"];
          if (Array.isArray(o) && pt(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && pt(o[0])) return {
            operator: "not_contains",
            operand: We(o[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && pt(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Dr(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: sn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => uo(r)).filter((r) => r !== null).map((r) => ({
          id: sn(),
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
        const o = n.map((r) => uo(r)).filter((r) => r !== null).map((r) => ({
          id: sn(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = uo(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: sn(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: sn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const xu = 200, ln = /* @__PURE__ */ new Map();
  function wu(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = ln.get(n);
      if (!o) {
        if (o = ro.build(e), ln.size >= xu) {
          const r = ln.keys().next().value;
          r && ln.delete(r);
        }
        ln.set(n, o);
      }
      return !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const Cu = {
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
  function _u({ label: e, value: t, onChange: n, inputType: o }) {
    const [r, s] = y.useState(t);
    y.useEffect(() => {
      s(t);
    }, [
      t
    ]);
    const i = y.useCallback(() => {
      r !== t && n(r);
    }, [
      r,
      t,
      n
    ]);
    return c.jsx($e, {
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
  function Su({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Dr(e));
    y.useEffect(() => {
      r(Dr(e));
    }, [
      e
    ]);
    const s = gu[t] ?? hu, i = y.useCallback((g) => {
      r(g), n(bu(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, p) => {
      const h = o.conditions.map((m, x) => x === g ? {
        ...m,
        ...p
      } : m);
      i({
        ...o,
        conditions: h
      });
    }, [
      o,
      i
    ]), a = y.useCallback((g) => {
      const p = o.conditions.filter((h, m) => m !== g);
      i({
        ...o,
        conditions: p
      });
    }, [
      o,
      i
    ]), d = y.useCallback(() => {
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
    ]), u = y.useCallback((g, p) => {
      p !== null && i({
        ...o,
        mode: p
      });
    }, [
      o,
      i
    ]), f = o.conditions.length > 1;
    return c.jsxs(ke, {
      spacing: 1,
      children: [
        f && c.jsxs(W, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(os, {
              value: o.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": v.t("json_table_condition_mode_label"),
              children: [
                c.jsx(Jn, {
                  value: "and",
                  "aria-label": v.t("json_table_condition_mode_all"),
                  children: v.t("json_table_condition_mode_all")
                }),
                c.jsx(Jn, {
                  value: "or",
                  "aria-label": v.t("json_table_condition_mode_any"),
                  children: v.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? v.t("json_table_condition_mode_hint_and") : v.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, p) => {
          const h = !Do.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(W, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(Ft, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(zt, {
                    children: v.t("json_table_condition_operator")
                  }),
                  c.jsx(_t, {
                    label: v.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (x) => {
                      const b = x.target.value, w = Do.has(b) ? "" : g.operand;
                      l(p, {
                        operator: b,
                        operand: w
                      });
                    },
                    children: s.map((x) => c.jsx(de, {
                      value: x,
                      children: v.t(Cu[x])
                    }, x))
                  })
                ]
              }),
              h && c.jsx(_u, {
                label: v.t("json_table_condition_value"),
                value: g.operand ?? "",
                onChange: (x) => l(p, {
                  operand: x
                }),
                inputType: m
              }),
              f && c.jsx(Te, {
                title: v.t("json_table_condition_remove"),
                children: c.jsx(Se, {
                  size: "small",
                  onClick: () => a(p),
                  "aria-label": v.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(Kn, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? p);
        }),
        c.jsx(Et, {
          startIcon: c.jsx(vs, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": v.t("json_table_condition_add"),
          children: f ? v.t("json_table_condition_add") : v.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function ju({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
    const s = y.useCallback((u, f) => {
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
    ]), i = y.useCallback((u) => {
      const f = [
        ...e || []
      ];
      f.splice(u, 1), o(f);
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
    ]), d = y.useCallback((u) => {
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
    return c.jsxs(ke, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(W, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(os, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, f) => {
                f && r(f);
              },
              "aria-label": v.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(Jn, {
                  value: "first-match",
                  "aria-label": v.t("json_table_cell_style_mode_first"),
                  children: v.t("json_table_cell_style_mode_first")
                }),
                c.jsx(Jn, {
                  value: "all-match",
                  "aria-label": v.t("json_table_cell_style_mode_all"),
                  children: v.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? v.t("json_table_cell_style_mode_hint_first") : v.t("json_table_cell_style_mode_hint_all")
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
            c.jsx(F, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: v.t("json_table_no_style_rules")
            }),
            c.jsx(F, {
              variant: "caption",
              children: v.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, f) => {
          const g = (e || []).length, p = u.backgroundColor ? Dt(u.backgroundColor) : void 0, h = u.textColor ? Dt(u.textColor) : void 0;
          return c.jsx(st, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(ke, {
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
                      children: c.jsxs(F, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          v.t("json_table_rule"),
                          " ",
                          f + 1
                        ]
                      })
                    }),
                    c.jsxs(W, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(Te, {
                          title: v.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(Se, {
                              size: "small",
                              onClick: () => a(f),
                              disabled: f === 0,
                              "aria-label": v.t("json_table_rule_move_up"),
                              children: c.jsx(xs, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Te, {
                          title: v.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(Se, {
                              size: "small",
                              onClick: () => d(f),
                              disabled: f >= g - 1,
                              "aria-label": v.t("json_table_rule_move_down"),
                              children: c.jsx(bs, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Te, {
                          title: v.t("json_table_delete_rule"),
                          children: c.jsx(Se, {
                            size: "small",
                            onClick: () => i(f),
                            color: "error",
                            "aria-label": v.t("json_table_delete_rule"),
                            children: c.jsx(Xs, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(Su, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (m) => s(f, {
                    logic: m
                  })
                }, u.id ?? f),
                c.jsxs(ke, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    c.jsx(Io, {
                      label: v.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => s(f, {
                        backgroundColor: m
                      })
                    }),
                    c.jsx(Io, {
                      label: v.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (m) => s(f, {
                        textColor: m
                      })
                    })
                  ]
                }),
                c.jsxs(ke, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    c.jsx(kt, {
                      control: c.jsx(bn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => s(f, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx($r, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx($r, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(F, {
                        variant: "caption",
                        children: v.t("json_table_bold")
                      })
                    }),
                    c.jsx(kt, {
                      control: c.jsx(bn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => s(f, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(Ar, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Ar, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(F, {
                        variant: "caption",
                        children: v.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (u.backgroundColor || u.textColor || u.fontWeight === "bold" || u.fontStyle === "italic") && c.jsx(st, {
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
                  children: c.jsx(F, {
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
                    children: v.t("json_table_sample_value")
                  })
                })
              ]
            })
          }, u.id ?? f);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? v.t("json_table_rules_priority_hint") : v.t("json_table_rules_all_match_hint")
        }),
        c.jsx(Et, {
          startIcon: c.jsx(vs, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: v.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function Ru({ globalSorting: e, globalFiltering: t }) {
    return c.jsxs(W, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        c.jsx(F, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: v.t("json_table_global_status")
        }),
        c.jsxs(W, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            c.jsx(jt, {
              size: "small",
              icon: e ? c.jsx(Mr, {}) : c.jsx(Kn, {}),
              label: `${v.t("json_table_sorting")}: ${e ? v.t("json_table_status_on") : v.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            c.jsx(jt, {
              size: "small",
              icon: t ? c.jsx(Mr, {}) : c.jsx(Kn, {}),
              label: `${v.t("json_table_filtering")}: ${t ? v.t("json_table_status_on") : v.t("json_table_status_off")}`,
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
  function so(e) {
    switch (e) {
      case "number":
      case "date":
        return {
          sortable: true,
          filterable: true
        };
      case "string":
        return {
          sortable: true,
          filterable: true
        };
      case "boolean":
        return {
          sortable: false,
          filterable: true
        };
      case "array":
      case "object":
        return {
          sortable: false,
          filterable: false
        };
      default:
        return {
          sortable: true,
          filterable: true
        };
    }
  }
  function Mu(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : so(t).sortable && n;
  }
  function $u(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : so(t).filterable && n;
  }
  function kr(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = Ss(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  function Tr(e) {
    return (t, n, o) => kr(t.getValue(o), e) - kr(n.getValue(o), e);
  }
  function Au(e) {
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
      const p = ((_a2 = g.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(g.path), h = ((_b = g.format) == null ? void 0 : _b.type) === "date", m = d.get(g.path) || "string";
      return {
        id: g.path,
        size: g.width ?? 150,
        accessorFn: (b) => (b == null ? void 0 : b[g.path]) ?? null,
        header: g.headerName || g.path,
        enableSorting: Mu(g, m, o.tableSorting),
        enableColumnFilter: $u(g, m, o.tableFiltering),
        ...h && {
          sortingFn: Tr(p)
        },
        cell: ({ getValue: b }) => r(b(), g),
        meta: {
          align: g.align || "left",
          width: g.width
        }
      };
    }) : f = n.map((g) => {
      const p = g.type === "date" && g.dateFormat, h = g.dateFormat, m = so(g.type);
      return {
        id: g.path,
        size: 150,
        accessorFn: (b) => b[g.path],
        header: g.path.split(".").pop() || g.path,
        enableSorting: m.sortable && o.tableSorting,
        enableColumnFilter: m.filterable && o.tableFiltering,
        ...p && {
          sortingFn: Tr(h)
        },
        cell: ({ getValue: b }) => s(b()),
        meta: {
          align: "left"
        }
      };
    }), u ? [
      u,
      ...f
    ] : f;
  }
  function Er({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: o = "string", featureType: r = "sortable" }) {
    const s = t === "auto" || t === void 0, i = so(o), l = r === "sortable" ? i.sortable : i.filterable;
    let a, d;
    t === "auto" || t === void 0 ? (a = l && e, d = "json_table_source_auto") : (a = t, d = "json_table_source_override");
    const u = t !== void 0 && t !== "auto";
    let f;
    return t === "auto" || t === void 0 ? f = v.t("json_table_auto_tooltip").replace("{feature}", n).replace("{smart}", l ? v.t("json_table_status_on") : v.t("json_table_status_off")).replace("{type}", o) : f = v.t("json_table_override_tooltip").replace("{feature}", n), c.jsx(Te, {
      title: f,
      arrow: true,
      children: c.jsxs(W, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          c.jsx(jt, {
            size: "small",
            label: c.jsx(W, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: a ? v.t("json_table_status_on") : v.t("json_table_status_off")
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
          c.jsxs(F, {
            variant: "caption",
            color: u ? "warning.main" : "text.secondary",
            sx: {
              fontSize: "0.65rem",
              display: "flex",
              alignItems: "center",
              gap: 0.25
            },
            children: [
              v.t(d),
              s && c.jsx(zc, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              u && c.jsx(kc, {
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
  function Pu({ column: e, discoveredColumn: t, onChange: n, globalSorting: o = true, globalFiltering: r = false }) {
    var _a2, _b, _c2, _d2, _e, _f;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((C) => {
      i((M) => ({
        ...M,
        [C]: !M[C]
      }));
    }, []), a = (t == null ? void 0 : t.type) || "string", d = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((C, M) => C + M, 0) : 0, [
      t
    ]), u = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), f = y.useMemo(() => e.headerName !== u || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      u
    ]), g = y.useCallback(() => {
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
    ]), p = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = y.useCallback(() => {
      const { format: C, ...M } = e;
      n(M);
    }, [
      e,
      n
    ]), m = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), x = y.useCallback(() => {
      const { cellStyle: C, cellStyleMode: M, ...z } = e;
      n(z);
    }, [
      e,
      n
    ]), b = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), w = y.useCallback(() => {
      const { sortable: C, filterable: M, ...z } = e;
      n({
        ...z,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), _ = y.useCallback((C) => {
      var _a3, _b2;
      const M = {
        ...e.format
      };
      if (C.type && C.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const z = (_b2 = e.format) == null ? void 0 : _b2.type;
        z === "number" ? (delete M.numberDecimals, delete M.numberPrefix, delete M.numberSuffix, delete M.numberThousandsSeparator) : z === "date" ? (delete M.dateFormat, delete M.dateInputFormat) : z === "boolean" ? (delete M.booleanTrue, delete M.booleanFalse) : z === "string" && [
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
        ].forEach((A) => {
          delete M[A];
        });
      }
      n({
        ...e,
        format: {
          ...M,
          ...C
        }
      });
    }, [
      e,
      n
    ]), j = y.useCallback((C) => {
      n({
        ...e,
        cellStyle: C
      });
    }, [
      e,
      n
    ]), R = y.useCallback((C) => {
      n({
        ...e,
        cellStyleMode: C
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
            c.jsx(jt, {
              label: a,
              size: "small",
              sx: {
                backgroundColor: mn[a] || mn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(F, {
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
        c.jsxs(ke, {
          spacing: 1,
          children: [
            c.jsxs(zn, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(Nn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(F, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: v.t("json_table_section_basic")
                      }),
                      c.jsx(Te, {
                        title: v.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !f,
                            onClick: (C) => {
                              C.stopPropagation(), g();
                            },
                            "aria-label": v.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Dn, {
                  children: c.jsxs(ke, {
                    spacing: 2,
                    children: [
                      c.jsx($e, {
                        label: v.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (C) => n({
                          ...e,
                          headerName: C.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx($e, {
                        label: v.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (C) => n({
                          ...e,
                          width: C.target.value ? parseInt(C.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: v.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      c.jsxs(Ft, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(zt, {
                            children: v.t("json_table_align")
                          }),
                          c.jsxs(_t, {
                            label: v.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (C) => n({
                              ...e,
                              align: C.target.value
                            }),
                            children: [
                              c.jsx(de, {
                                value: "left",
                                children: v.t("json_table_align_left")
                              }),
                              c.jsx(de, {
                                value: "center",
                                children: v.t("json_table_align_center")
                              }),
                              c.jsx(de, {
                                value: "right",
                                children: v.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(kt, {
                        control: c.jsx(pn, {
                          checked: e.visible,
                          onChange: (C) => n({
                            ...e,
                            visible: C.target.checked
                          })
                        }),
                        label: c.jsx(F, {
                          variant: "body2",
                          children: v.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(zn, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(Nn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(F, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: v.t("json_table_section_formatting")
                      }),
                      c.jsx(Te, {
                        title: v.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !p,
                            onClick: (C) => {
                              C.stopPropagation(), h();
                            },
                            "aria-label": v.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Dn, {
                  children: c.jsxs(ke, {
                    spacing: 2,
                    children: [
                      c.jsxs(Ft, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(zt, {
                            children: v.t("json_table_format_type")
                          }),
                          c.jsxs(_t, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: v.t("json_table_format_type"),
                            onChange: (C) => {
                              const M = C.target.value;
                              M === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : _({
                                type: M
                              });
                            },
                            children: [
                              c.jsxs(de, {
                                value: "auto",
                                children: [
                                  v.t("json_table_format_type_auto"),
                                  ` (${a})`
                                ]
                              }),
                              c.jsx(de, {
                                value: "string",
                                children: v.t("json_table_format_type_string")
                              }),
                              c.jsx(de, {
                                value: "number",
                                children: v.t("json_table_format_type_number")
                              }),
                              c.jsx(de, {
                                value: "date",
                                children: v.t("json_table_format_type_date")
                              }),
                              c.jsx(de, {
                                value: "boolean",
                                children: v.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (a === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && c.jsx(Gc, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: _,
                        discoveredColumn: t
                      }),
                      (a === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && c.jsx(Uc, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: _
                      }),
                      (a === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && c.jsx(qc, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: _
                      }),
                      (a === "string" || ((_e = e.format) == null ? void 0 : _e.type) === "string") && c.jsx(Yc, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: _
                      }),
                      a !== "number" && a !== "date" && a !== "boolean" && a !== "string" && !e.format && c.jsx(F, {
                        variant: "body2",
                        color: "text.secondary",
                        children: v.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(zn, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(Nn, {}),
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
                          c.jsx(F, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: v.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && c.jsx(jt, {
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
                      c.jsx(Te, {
                        title: v.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !m,
                            onClick: (C) => {
                              C.stopPropagation(), x();
                            },
                            "aria-label": v.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Dn, {
                  children: c.jsx(ju, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: a,
                    onStyleChange: j,
                    onModeChange: R
                  })
                })
              ]
            }),
            c.jsxs(zn, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(Nn, {}),
                  children: c.jsxs(W, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(F, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: v.t("json_table_section_advanced")
                      }),
                      c.jsx(Te, {
                        title: v.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !b,
                            onClick: (C) => {
                              C.stopPropagation(), w();
                            },
                            "aria-label": v.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Dn, {
                  children: c.jsxs(ke, {
                    spacing: 2,
                    children: [
                      c.jsx(Ru, {
                        globalSorting: o,
                        globalFiltering: r
                      }),
                      c.jsxs(W, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(Ft, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(zt, {
                                children: v.t("json_table_sortable")
                              }),
                              c.jsxs(_t, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: v.t("json_table_sortable"),
                                onChange: (C) => n({
                                  ...e,
                                  sortable: C.target.value === "on" ? true : C.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(de, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: v.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(de, {
                                    value: "on",
                                    children: v.t("json_table_option_on")
                                  }),
                                  c.jsx(de, {
                                    value: "off",
                                    children: v.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(Er, {
                            globalEnabled: o,
                            columnOverride: e.sortable,
                            featureLabel: v.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      c.jsxs(W, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(Ft, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(zt, {
                                children: v.t("json_table_filterable")
                              }),
                              c.jsxs(_t, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: v.t("json_table_filterable"),
                                onChange: (C) => n({
                                  ...e,
                                  filterable: C.target.value === "on" ? true : C.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(de, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: v.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(de, {
                                    value: "on",
                                    children: v.t("json_table_option_on")
                                  }),
                                  c.jsx(de, {
                                    value: "off",
                                    children: v.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(Er, {
                            globalEnabled: r,
                            columnOverride: e.filterable,
                            featureLabel: v.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && c.jsxs(st, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(F, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: v.t("json_table_analysis_info")
                          }),
                          c.jsxs(ke, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(W, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: v.t("json_table_type_label")
                                  }),
                                  c.jsx(jt, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: mn[t.type],
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
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: v.t("json_table_confidence")
                                  }),
                                  c.jsxs(F, {
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
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: v.t("json_table_nulls")
                                  }),
                                  c.jsxs(F, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      d > 0 && ` (${Math.round(t.nullCount / d * 100)}%)`
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
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: v.t("json_table_distinct")
                                  }),
                                  c.jsx(F, {
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
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: v.t("json_table_range")
                                  }),
                                  c.jsxs(F, {
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
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: v.t("json_table_date_input_format")
                                  }),
                                  c.jsx(F, {
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
  const Iu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Fu = /^\d{4}-\d{2}-\d{2}$/, zu = /^(\d{2})\.(\d{2})\.(\d{4})$/, Du = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, ku = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Tu = /^(\d{2})\/(\d{2})\/(\d{4})$/, Eu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Ou = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Ln(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function po(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Vn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Nu = [
    {
      regex: Iu,
      format: "ISO-8601"
    },
    {
      regex: Fu,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Ln(n, t);
      }
    },
    {
      regex: ku,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Ln(t, n) && Vn(o, r, s);
      }
    },
    {
      regex: Du,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Ln(t, n) && Vn(o, r);
      }
    },
    {
      regex: zu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Ln(t, n);
      }
    },
    {
      regex: Ou,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return po(t, n) && Vn(o, r, s);
      }
    },
    {
      regex: Eu,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return po(t, n) && Vn(o, r);
      }
    },
    {
      regex: Tu,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return po(t, n);
      }
    }
  ];
  function Lu(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Nu) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Vu(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Hu(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Vu(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = Lu(e);
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
  function Bu(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Wu(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function Gu(e) {
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
  function Or(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Uu(e, t) {
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
  function qu(e, t, n = 100, o = 0.8) {
    const r = /* @__PURE__ */ new Map();
    for (const s of e) r.set(s, Gu(s));
    for (const s of t) for (const i of e) {
      const l = r.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const a = s[i], d = Hu(a);
      if (Or(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && Or(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = Uu(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((s) => {
      const i = r.get(s);
      let l = Bu(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < o && (l = "string");
      const a = l === "date" ? Wu(i.dateFormatCounts) : void 0, d = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, u = i.nonNullCount > 0 ? Math.round(d / i.nonNullCount * 100) / 100 : 0, f = {
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
  function to(e, t, n, o, r, s, i, l) {
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
        to(e[a], d, n, o, r, s + 1, i, l);
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
        to(e[d], u, n, o, r, s + 1, i, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Yu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const i of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const d of Object.keys(i)) to(i[d], d, l, n, a, 1, t, o);
      else to(i, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const s = Ju([
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
  function Ju(e) {
    return e.sort((t, n) => {
      const o = Nr(t), r = Nr(n), s = Math.min(o.length, r.length);
      for (let i = 0; i < s; i++) {
        const l = o[i], a = r[i], d = Lr(l), u = Lr(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function Nr(e) {
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
  function Lr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Ku = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function $s(e, t) {
    const n = performance.now(), o = {
      ...Ku,
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
    const r = Yu(e, o.maxDepth), s = qu(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), i = r.paths.length * r.rows.length, l = s.reduce((u, f) => u + f.nullCount, 0), a = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
  function Xu(e, t) {
    return y.useMemo(() => $s(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Qu({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: s, socket: i }) {
    const [l, a] = y.useState(n), [d, u] = y.useState(null), [f, g] = y.useState([]), [p, h] = y.useState(false), [m, x] = y.useState(false), [b, w] = y.useState(null), _ = y.useRef(false), j = y.useRef(() => Promise.resolve()), R = y.useRef(n), C = y.useMemo(() => JSON.stringify(n), [
      n
    ]), M = y.useMemo(() => JSON.stringify(l) !== C, [
      l,
      C
    ]);
    y.useEffect(() => {
      e && (a(n), R.current = n, u(n.length > 0 ? n[0].path : null), _.current = false, w(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !_.current && (_.current = true, j.current());
    }, [
      e
    ]);
    const z = y.useCallback(async () => {
      h(true), w(null);
      try {
        const O = s.oid;
        if (!O) return;
        const D = await i.getState(O);
        if ((D == null ? void 0 : D.val) === null || (D == null ? void 0 : D.val) === void 0) return;
        let S;
        const P = D.val;
        if (typeof P == "string") try {
          const L = JSON.parse(P);
          S = Array.isArray(L) ? L : [
            L
          ];
        } catch {
          return;
        }
        else if (Array.isArray(P)) S = P;
        else if (typeof P == "object" && P !== null) S = [
          P
        ];
        else return;
        const X = s.tableMaxDepth || 10, q = $s(S, {
          maxDepth: X
        });
        q.meta.maxDepth > X && w(`JSON depth (${q.meta.maxDepth}) exceeds configured max (${X}). Increase maxDepth to see all nested data.`), g(q.columns);
        const ae = new Map(R.current.map((L) => [
          L.path,
          L
        ])), ee = new Set(q.columns.map((L) => L.path)), me = R.current.filter((L) => ee.has(L.path)), ce = q.columns.filter((L) => !ae.has(L.path)).map((L) => ({
          path: L.path,
          visible: true,
          headerName: L.path.split(".").pop() || L.path,
          sortable: "auto",
          filterable: "auto"
        })), N = [
          ...me,
          ...ce
        ];
        a(N), R.current = N, u((L) => L === null && N.length > 0 ? N[0].path : L);
      } catch (O) {
        const D = O instanceof Error ? O.message : "Failed to discover columns";
        w(D);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    y.useEffect(() => {
      j.current = z;
    }, [
      z
    ]), y.useEffect(() => {
      R.current = l;
    }, [
      l
    ]);
    const k = y.useCallback((O) => {
      a((D) => D.map((S) => S.path === O.path ? O : S));
    }, []), A = y.useCallback((O) => {
      a(O);
    }, []), I = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), G = y.useCallback((O, D) => {
      if (D === "backdropClick" && M) {
        x(true);
        return;
      }
      t();
    }, [
      M,
      t
    ]), E = y.useMemo(() => d ? l.find((O) => O.path === d) : null, [
      d,
      l
    ]), Y = y.useMemo(() => d ? f.find((O) => O.path === d) : void 0, [
      d,
      f
    ]), J = y.useMemo(() => "json-table-column-editor-title", []);
    return c.jsxs(Qs, {
      theme: r,
      children: [
        c.jsxs(es, {
          open: e,
          onClose: G,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": J,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            c.jsx(ts, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: J,
              children: c.jsxs(W, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(F, {
                    variant: "h6",
                    children: v.t("json_table_column_editor_title")
                  }),
                  c.jsx(Se, {
                    onClick: () => G(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": v.t("close"),
                    children: c.jsx(Kn, {})
                  })
                ]
              })
            }),
            c.jsxs(ns, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                b && c.jsx(So, {
                  severity: "error",
                  onClose: () => w(null),
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
                      children: c.jsx(Bc, {
                        columns: l,
                        discoveredColumns: f,
                        selectedPath: d,
                        onSelect: u,
                        onChange: A,
                        onRefresh: z,
                        loading: p
                      })
                    }),
                    c.jsx(W, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: E ? c.jsx(Pu, {
                        column: E,
                        discoveredColumn: Y,
                        onChange: k,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : c.jsx(W, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(F, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? v.t("json_table_select_column") : v.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            c.jsxs(hs, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(Et, {
                  onClick: () => G(),
                  children: v.t("cancel")
                }),
                c.jsx(Et, {
                  variant: "contained",
                  onClick: I,
                  disabled: !M,
                  children: v.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(Ia, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => x(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(So, {
            severity: "warning",
            onClose: () => x(false),
            children: v.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Zu(e, t, n, o) {
    const r = e.name || "columnConfig", s = o.context.theme, [i, l] = y.useState(false), a = y.useMemo(() => Cs(t[r]), [
      t,
      r
    ]), d = a.filter((x) => x.visible).length, u = a.length, f = a.some((x) => x.format), g = a.some((x) => x.cellStyle && x.cellStyle.length > 0), p = y.useCallback((x) => {
      const b = JSON.stringify(x), w = `b64:${Vc(b)}`;
      n({
        [r]: w
      });
    }, [
      r,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), m = y.useCallback(() => {
      l(false);
    }, []);
    return c.jsxs(W, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(Et, {
          variant: "outlined",
          startIcon: c.jsx(Oc, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": v.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: v.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(F, {
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
            v.t("json_table_columns_visible"),
            f && ` \xB7 ${v.t("json_table_has_formatting")}`,
            g && ` \xB7 ${v.t("json_table_has_styling")}`
          ]
        }),
        c.jsx(Qu, {
          open: i,
          onClose: m,
          columns: a,
          onSave: p,
          theme: s,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const ed = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Xe, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Zu
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Xe, {
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
      default: true
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {})
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
      component: () => c.jsx(Xe, {
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
      component: () => c.jsx(Xe, {})
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
      component: () => c.jsx(Xe, {
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
    },
    {
      name: "tableCellFontSize",
      type: "number",
      label: "json_table_cell_font_size",
      min: 8
    }
  ];
  function St(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ue(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: St(n, o[e])
      }));
    };
  }
  function io(e) {
    return e instanceof Function;
  }
  function td(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function nd(e, t) {
    const n = [], o = (r) => {
      r.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && o(i);
      });
    };
    return o(e), n;
  }
  function H(e, t, n) {
    let o = [], r;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== o.length || l.some((u, f) => o[f] !== u))) return r;
      o = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), r = t(...l), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
        const u = Math.round((Date.now() - i) * 100) / 100, f = Math.round((Date.now() - d) * 100) / 100, g = f / 16, p = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
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
  function od(e, t, n, o) {
    const r = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(o),
      renderValue: r,
      getContext: H(() => [
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
      }), B(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function rd(e, t, n, o) {
    var r, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let d = (r = (s = l.id) != null ? s : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? r : typeof l.header == "string" ? l.header : void 0, u;
    if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (g) => {
      let p = g;
      for (const m of a.split(".")) {
        var h;
        p = (h = p) == null ? void 0 : h[m];
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
  const Pe = "debugHeaders";
  function Vr(e, t, n) {
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
  const sd = {
    createTable: (e) => {
      e.getHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var s, i;
        const l = (s = o == null ? void 0 : o.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? s : [], a = (i = r == null ? void 0 : r.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? i : [], d = n.filter((f) => !(o != null && o.includes(f.id)) && !(r != null && r.includes(f.id)));
        return Hn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, B(e.options, Pe)), e.getCenterHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((s) => !(o != null && o.includes(s.id)) && !(r != null && r.includes(s.id))), Hn(t, n, e, "center")), B(e.options, Pe)), e.getLeftHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const s = (r = o == null ? void 0 : o.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? r : [];
        return Hn(t, s, e, "left");
      }, B(e.options, Pe)), e.getRightHeaderGroups = H(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const s = (r = o == null ? void 0 : o.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? r : [];
        return Hn(t, s, e, "right");
      }, B(e.options, Pe)), e.getFooterGroups = H(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Pe)), e.getLeftFooterGroups = H(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Pe)), e.getCenterFooterGroups = H(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Pe)), e.getRightFooterGroups = H(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), B(e.options, Pe)), e.getFlatHeaders = H(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Pe)), e.getLeftFlatHeaders = H(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Pe)), e.getCenterFlatHeaders = H(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Pe)), e.getRightFlatHeaders = H(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), B(e.options, Pe)), e.getCenterLeafHeaders = H(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), B(e.options, Pe)), e.getLeftLeafHeaders = H(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), B(e.options, Pe)), e.getRightLeafHeaders = H(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), B(e.options, Pe)), e.getLeafHeaders = H(() => [
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
      }, B(e.options, Pe));
    }
  };
  function Hn(e, t, n, o) {
    var r, s;
    let i = 0;
    const l = function(g, p) {
      p === void 0 && (p = 1), i = Math.max(i, p), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, p + 1);
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
      }, m = [];
      g.forEach((x) => {
        const b = [
          ...m
        ].reverse()[0], w = x.column.depth === h.depth;
        let _, j = false;
        if (w && x.column.parent ? _ = x.column.parent : (_ = x.column, j = true), b && (b == null ? void 0 : b.column) === _) b.subHeaders.push(x);
        else {
          const R = Vr(n, _, {
            id: [
              o,
              p,
              _.id,
              x == null ? void 0 : x.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((C) => C.column === _).length}` : void 0,
            depth: p,
            index: m.length
          });
          R.subHeaders.push(x), m.push(R);
        }
        h.headers.push(x), x.headerGroup = h;
      }), a.push(h), p > 0 && d(m, p - 1);
    }, u = t.map((g, p) => Vr(n, g, {
      depth: i,
      index: p
    }));
    d(u, i - 1), a.reverse();
    const f = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, x = 0, b = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (b = [], f(h.subHeaders).forEach((_) => {
        let { colSpan: j, rowSpan: R } = _;
        m += j, b.push(R);
      })) : m = 1;
      const w = Math.min(...b);
      return x = x + w, h.colSpan = m, h.rowSpan = x, {
        colSpan: m,
        rowSpan: x
      };
    });
    return f((r = (s = a[0]) == null ? void 0 : s.headers) != null ? r : []), a;
  }
  const Jo = (e, t, n, o, r, s, i) => {
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
      getLeafRows: () => nd(l.subRows, (a) => a.subRows),
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
      getAllCells: H(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => od(e, l, d, d.id)), B(e.options, "debugRows")),
      _getAllCellsByColumnId: H(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), B(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, id = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, As = (e, t, n) => {
    var o, r;
    const s = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(s));
  };
  As.autoRemove = (e) => rt(e);
  const Ps = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  Ps.autoRemove = (e) => rt(e);
  const Is = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  Is.autoRemove = (e) => rt(e);
  const Fs = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  Fs.autoRemove = (e) => rt(e);
  const zs = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  zs.autoRemove = (e) => rt(e) || !(e != null && e.length);
  const Ds = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  Ds.autoRemove = (e) => rt(e) || !(e != null && e.length);
  const ks = (e, t, n) => e.getValue(t) === n;
  ks.autoRemove = (e) => rt(e);
  const Ts = (e, t, n) => e.getValue(t) == n;
  Ts.autoRemove = (e) => rt(e);
  const Ko = (e, t, n) => {
    let [o, r] = n;
    const s = e.getValue(t);
    return s >= o && s <= r;
  };
  Ko.resolveFilterValue = (e) => {
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
  Ko.autoRemove = (e) => rt(e) || rt(e[0]) && rt(e[1]);
  const ft = {
    includesString: As,
    includesStringSensitive: Ps,
    equalsString: Is,
    arrIncludes: Fs,
    arrIncludesAll: zs,
    arrIncludesSome: Ds,
    equals: ks,
    weakEquals: Ts,
    inNumberRange: Ko
  };
  function rt(e) {
    return e == null || e === "";
  }
  const ld = {
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
        return typeof o == "string" ? ft.includesString : typeof o == "number" ? ft.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? ft.equals : Array.isArray(o) ? ft.arrIncludes : ft.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return io(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : ft[e.columnDef.filterFn];
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
          const r = e.getFilterFn(), s = o == null ? void 0 : o.find((u) => u.id === e.id), i = St(n, s ? s.value : void 0);
          if (Hr(r, i, e)) {
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
          return (s = St(t, r)) == null ? void 0 : s.filter((i) => {
            const l = n.find((a) => a.id === i.id);
            if (l) {
              const a = l.getFilterFn();
              if (Hr(a, i.value, l)) return false;
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
  function Hr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const ad = (e, t, n) => n.reduce((o, r) => {
    const s = r.getValue(e);
    return o + (typeof s == "number" ? s : 0);
  }, 0), cd = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const s = r.getValue(e);
      s != null && (o > s || o === void 0 && s >= s) && (o = s);
    }), o;
  }, ud = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const s = r.getValue(e);
      s != null && (o < s || o === void 0 && s >= s) && (o = s);
    }), o;
  }, dd = (e, t, n) => {
    let o, r;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (o === void 0 ? i >= i && (o = r = i) : (o > i && (o = i), r < i && (r = i)));
    }), [
      o,
      r
    ];
  }, pd = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let s = r.getValue(e);
      s != null && (s = +s) >= s && (++n, o += s);
    }), n) return o / n;
  }, fd = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!td(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, gd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), hd = (e, t) => new Set(t.map((n) => n.getValue(e))).size, md = (e, t) => t.length, fo = {
    sum: ad,
    min: cd,
    max: ud,
    extent: dd,
    mean: pd,
    median: fd,
    unique: gd,
    uniqueCount: hd,
    count: md
  }, yd = {
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
        if (typeof o == "number") return fo.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return fo.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return io(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : fo[e.columnDef.aggregationFn];
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
  function vd(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? o : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...o
    ];
  }
  const bd = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ue("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = H((n) => [
        yn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), B(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = yn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = yn(t, n);
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
        return vd(s, n, o);
      }, B(e.options, "debugTable"));
    }
  }, go = () => ({
    left: [],
    right: []
  }), xd = {
    getInitialState: (e) => ({
      columnPinning: go(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ue("columnPinning", e)
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
      e.getCenterVisibleCells = H(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, o, r) => {
        const s = [
          ...o ?? [],
          ...r ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, B(t.options, "debugRows")), e.getLeftVisibleCells = H(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), B(t.options, "debugRows")), e.getRightVisibleCells = H(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), B(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, o;
        return e.setColumnPinning(t ? go() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : go());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const o = e.getState().columnPinning;
        if (!t) {
          var r, s;
          return !!((r = o.left) != null && r.length || (s = o.right) != null && s.length);
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
        return t.filter((s) => !r.includes(s.id));
      }, B(e.options, "debugColumns"));
    }
  };
  function wd(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Bn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, ho = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Cd = {
    getDefaultColumnDef: () => Bn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: ho(),
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
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Bn.minSize, (o = s ?? e.columnDef.size) != null ? o : Bn.size), (r = e.columnDef.maxSize) != null ? r : Bn.maxSize);
      }, e.getStart = H((n) => [
        n,
        yn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, s) => r + s.getSize(), 0), B(t.options, "debugColumns")), e.getAfter = H((n) => [
        n,
        yn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, s) => r + s.getSize(), 0), B(t.options, "debugColumns")), e.resetSize = () => {
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
          if (!o || !r || (s.persist == null || s.persist(), mo(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((b) => [
            b.column.id,
            b.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = mo(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, u = (b, w) => {
            typeof w == "number" && (t.setColumnSizingInfo((_) => {
              var j, R;
              const C = t.options.columnResizeDirection === "rtl" ? -1 : 1, M = (w - ((j = _ == null ? void 0 : _.startOffset) != null ? j : 0)) * C, z = Math.max(M / ((R = _ == null ? void 0 : _.startSize) != null ? R : 0), -0.999999);
              return _.columnSizingStart.forEach((k) => {
                let [A, I] = k;
                d[A] = Math.round(Math.max(I + I * z, 0) * 100) / 100;
              }), {
                ..._,
                deltaOffset: M,
                deltaPercentage: z
              };
            }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((_) => ({
              ..._,
              ...d
            })));
          }, f = (b) => u("move", b), g = (b) => {
            u("end", b), t.setColumnSizingInfo((w) => ({
              ...w,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, p = wd(n), h = {
            moveHandler: (b) => f(b.clientX),
            upHandler: (b) => {
              p == null ? void 0 : p.removeEventListener("mousemove", h.moveHandler), p == null ? void 0 : p.removeEventListener("mouseup", h.upHandler), g(b.clientX);
            }
          }, m = {
            moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), f(b.touches[0].clientX), false),
            upHandler: (b) => {
              var w;
              p == null ? void 0 : p.removeEventListener("touchmove", m.moveHandler), p == null ? void 0 : p.removeEventListener("touchend", m.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), g((w = b.touches[0]) == null ? void 0 : w.clientX);
            }
          }, x = _d() ? {
            passive: false
          } : false;
          mo(s) ? (p == null ? void 0 : p.addEventListener("touchmove", m.moveHandler, x), p == null ? void 0 : p.addEventListener("touchend", m.upHandler, x)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, x), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, x)), t.setColumnSizingInfo((b) => ({
            ...b,
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
        e.setColumnSizingInfo(t ? ho() : (n = e.initialState.columnSizingInfo) != null ? n : ho());
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
  let Wn = null;
  function _d() {
    if (typeof Wn == "boolean") return Wn;
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
    return Wn = e, Wn;
  }
  function mo(e) {
    return e.type === "touchstart";
  }
  const Sd = {
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
        return (n = r.length ? r.some((s) => s.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : true;
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
      ], (r) => r.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), B(e.options, "debugColumns"));
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
  function yn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const jd = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Rd = {
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
        var n, o, r, s;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((o = t.options.enableGlobalFilter) != null ? o : true) && ((r = t.options.enableFilters) != null ? r : true) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => ft.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return io(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : ft[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, Md = {
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
  }, ko = 0, To = 10, yo = () => ({
    pageIndex: ko,
    pageSize: To
  }), $d = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...yo(),
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
        const r = (s) => St(o, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? yo() : (r = e.initialState.pagination) != null ? r : yo());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let s = St(o, r.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...r,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (o) => {
        var r, s;
        e.setPageIndex(o ? ko : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? r : ko);
      }, e.resetPageSize = (o) => {
        var r, s;
        e.setPageSize(o ? To : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? r : To);
      }, e.setPageSize = (o) => {
        e.setPagination((r) => {
          const s = Math.max(1, St(o, r.pageSize)), i = r.pageSize * r.pageIndex, l = Math.floor(i / s);
          return {
            ...r,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var s;
        let i = St(o, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...r,
          pageCount: i
        };
      }), e.getPageOptions = H(() => [
        e.getPageCount()
      ], (o) => {
        let r = [];
        return o && o > 0 && (r = [
          ...new Array(o)
        ].fill(null).map((s, i) => i)), r;
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
  }, vo = () => ({
    top: [],
    bottom: []
  }), Ad = {
    getInitialState: (e) => ({
      rowPinning: vo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ue("rowPinning", e)
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
        return e.setRowPinning(t ? vo() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : vo());
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
        return t.filter((s) => !r.has(s.id));
      }, B(e.options, "debugRows"));
    }
  }, Pd = {
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
          Eo(r, s.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = H(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? bo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, B(e.options, "debugTable")), e.getFilteredSelectedRowModel = H(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? bo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, B(e.options, "debugTable")), e.getGroupedSelectedRowModel = H(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? bo(e, n) : {
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
        t.setRowSelection((s) => {
          var i;
          if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n) return s;
          const l = {
            ...s
          };
          return Eo(l, e.id, n, (i = o == null ? void 0 : o.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Xo(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Oo(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Oo(e, n) === "all";
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
  }, Eo = (e, t, n, o, r) => {
    var s;
    const i = r.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], o && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => Eo(e, l.id, n, o, r));
  };
  function bo(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, s = function(i, l) {
      return i.map((a) => {
        var d;
        const u = Xo(a, n);
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
  function Xo(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Oo(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !r) && (i.getCanSelect() && (Xo(i, t) ? s = true : r = false), i.subRows && i.subRows.length)) {
        const l = Oo(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), r = false);
      }
    }), r ? "all" : s ? "some" : false;
  }
  const No = /([0-9]+)/gm, Id = (e, t, n) => Es(Rt(e.getValue(n)).toLowerCase(), Rt(t.getValue(n)).toLowerCase()), Fd = (e, t, n) => Es(Rt(e.getValue(n)), Rt(t.getValue(n))), zd = (e, t, n) => Qo(Rt(e.getValue(n)).toLowerCase(), Rt(t.getValue(n)).toLowerCase()), Dd = (e, t, n) => Qo(Rt(e.getValue(n)), Rt(t.getValue(n))), kd = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, Td = (e, t, n) => Qo(e.getValue(n), t.getValue(n));
  function Qo(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function Rt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Es(e, t) {
    const n = e.split(No).filter(Boolean), o = t.split(No).filter(Boolean);
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
  const an = {
    alphanumeric: Id,
    alphanumericCaseSensitive: Fd,
    text: zd,
    textCaseSensitive: Dd,
    datetime: kd,
    basic: Td
  }, Ed = {
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
          const s = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return an.datetime;
          if (typeof s == "string" && (o = true, s.split(No).length > 1)) return an.alphanumeric;
        }
        return o ? an.text : an.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return io(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : an[e.columnDef.sortingFn];
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
  }, Od = [
    sd,
    Sd,
    bd,
    xd,
    id,
    ld,
    jd,
    Rd,
    Ed,
    yd,
    Md,
    $d,
    Ad,
    Pd,
    Cd
  ];
  function Nd(e) {
    var t, n;
    const o = [
      ...Od,
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
        const p = St(g, r.options);
        r.options = i(p);
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
            const w = rd(r, b, x, m), _ = b;
            return w.columns = _.columns ? p(_.columns, w, x + 1) : [], w;
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
  function Ld() {
    return (e) => H(() => [
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
          const u = Jo(e, e._getRowId(r[d], d, i), r[d], d, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var a;
            u.originalSubRows = e.options.getSubRows(r[d], d), (a = u.originalSubRows) != null && a.length && (u.subRows = o(u.originalSubRows, s + 1, u));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, B(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function Vd(e) {
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
  function Hd(e, t, n) {
    return n.options.filterFromLeafRows ? Bd(e, t, n) : Wd(e, t, n);
  }
  function Bd(e, t, n) {
    var o;
    const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var f;
        let p = a[g];
        const h = Jo(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
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
  function Wd(e, t, n) {
    var o;
    const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let p = a[g];
        if (t(p)) {
          var f;
          if ((f = p.subRows) != null && f.length && d < i) {
            const m = Jo(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
            m.subRows = l(p.subRows, d + 1), p = m;
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
  function Gd() {
    return (e) => H(() => [
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
        const m = h.getFilterFn();
        m && r.push({
          id: g.id,
          filterFn: m,
          resolvedValue: (p = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(g.value)) != null ? p : g.value
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
          const m = d.id;
          p.columnFilters[m] = d.filterFn(p, m, d.resolvedValue, (x) => {
            p.columnFiltersMeta[m] = x;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            u = s[h];
            const m = u.id;
            if (u.filterFn(p, m, u.resolvedValue, (x) => {
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
        for (let p = 0; p < i.length; p++) if (g.columnFilters[i[p]] === false) return false;
        return true;
      };
      return Hd(t.rows, f, e);
    }, B(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function Ud(e) {
    return (t) => H(() => [
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
      } : f = Vd({
        rows: i,
        flatRows: l,
        rowsById: a
      }), f.flatRows = [];
      const g = (p) => {
        f.flatRows.push(p), p.subRows.length && p.subRows.forEach(g);
      };
      return f.rows.forEach(g), f;
    }, B(t.options, "debugTable"));
  }
  function qd() {
    return (e) => H(() => [
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
            const h = s[p], m = i[h.id], x = m.sortUndefined, b = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let w = 0;
            if (x) {
              const _ = u.getValue(h.id), j = f.getValue(h.id), R = _ === void 0, C = j === void 0;
              if (R || C) {
                if (x === "first") return R ? -1 : 1;
                if (x === "last") return R ? 1 : -1;
                w = R && C ? 0 : R ? x : -x;
              }
            }
            if (w === 0 && (w = m.sortingFn(u, f, h.id)), w !== 0) return b && (w *= -1), m.invertSorting && (w *= -1), w;
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
    }, B(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function cn(e, t) {
    return e ? Yd(e) ? y.createElement(e, t) : e : null;
  }
  function Yd(e) {
    return Jd(e) || typeof e == "function" || Kd(e);
  }
  function Jd(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function Kd(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Xd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: Nd(t)
    })), [o, r] = y.useState(() => n.current.initialState);
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
      if (!(f.length !== o.length || f.some((h, m) => o[m] !== h))) return r;
      o = f;
      let p;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (p = Date.now()), r = t(...f), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, x = m / 16, b = (w, _) => {
          for (w = String(w); w.length < _; ) w = " " + w;
          return w;
        };
        console.info(`%c\u23F1 ${b(m, 5)} /${b(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * x, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(r), s = false, r;
    }
    return i.updateDeps = (l) => {
      o = l;
    }, i;
  }
  function Br(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const Qd = (e, t) => Math.abs(e - t) < 1.01, Zd = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, Wr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, ep = (e) => e, tp = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, np = (e, t) => {
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
    if (r(Wr(n)), !o.ResizeObserver) return () => {
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
        r(Wr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, Gr = {
    passive: true
  }, Ur = typeof window > "u" ? true : "onscrollend" in window, op = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const s = e.options.useScrollendEvent && Ur ? () => {
    } : Zd(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), i = (u) => () => {
      const { horizontal: f, isRtl: g } = e.options;
      r = f ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, s(), t(r, u);
    }, l = i(true), a = i(false);
    n.addEventListener("scroll", l, Gr);
    const d = e.options.useScrollendEvent && Ur;
    return d && n.addEventListener("scrollend", a, Gr), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, rp = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, sp = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, s;
    const i = e + t;
    (s = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || s.call(r, {
      [o.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class ip {
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
          getItemKey: ep,
          rangeExtractor: tp,
          onChange: () => {
          },
          measureElement: rp,
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
          let m, x;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const j = f[m], R = j !== void 0 ? u[j] : void 0;
            x = R ? R.end + this.options.gap : o + r;
          } else {
            const j = this.options.lanes === 1 ? u[g - 1] : this.getFurthestMeasurement(u, g);
            x = j ? j.end + this.options.gap : o + r, m = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const b = a.get(p), w = typeof b == "number" ? b : this.options.estimateSize(g), _ = x + w;
          u[g] = {
            index: g,
            start: x,
            size: w,
            end: _,
            key: p,
            lane: m
          }, f[m] = g;
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
      ], (n, o, r, s) => this.range = n.length > 0 && o > 0 ? lp({
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
        if (o.length !== 0) return Br(o[Os(0, o.length - 1, (r) => Br(o[r]).start, n)]);
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
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, g);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              Qd(m[0], h) || a(g);
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
  const Os = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, s = n(r);
      if (s < o) e = r + 1;
      else if (s > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function lp({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, s = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let i = Os(0, r, s, n), l = i;
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
  const qr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function ap({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? Zs.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [r] = y.useState(() => new ip(o));
    return r.setOptions(o), qr(() => r._didMount(), []), qr(() => r._willUpdate()), r;
  }
  function cp(e) {
    return ap({
      observeElementRect: np,
      observeElementOffset: op,
      scrollToFn: sp,
      ...e
    });
  }
  function up(e, t) {
    var _a2, _b;
    let n = false, o = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) switch (t.format.type) {
      case "number":
        (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (o = _s(Number(e), {
          decimals: t.format.numberDecimals,
          prefix: t.format.numberPrefix,
          suffix: t.format.numberSuffix,
          thousands: t.format.numberThousandsSeparator
        }));
        break;
      case "date":
        o = js(e, t.format.dateFormat, t.format.dateInputFormat);
        break;
      case "boolean":
        o = Po(e, t.format.booleanTrue, t.format.booleanFalse);
        break;
      case "string":
        o = Rs(String(o), t.format);
        break;
    }
    if (!t) return {
      displayValue: o,
      textSx: {},
      bgSx: {}
    };
    const r = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? Ss(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const a of t.cellStyle) if (a.logic && wu(a.logic, s)) {
        if (a.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const d = Dt(a.backgroundColor);
          d ? i.background = d : i.backgroundColor = a.backgroundColor;
        }
        if (a.textColor && !("color" in l) && !("background" in l)) {
          const d = Dt(a.textColor);
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
  function Yr({ value: e, config: t }) {
    const { displayValue: n, textSx: o, bgSx: r, isTruncated: s } = y.useMemo(() => up(e, t), [
      e,
      t
    ]);
    return c.jsxs(W, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        ...r
      },
      children: [
        c.jsx(F, {
          variant: "body2",
          component: "span",
          noWrap: true,
          title: n,
          sx: {
            flex: 1,
            minWidth: 0,
            lineHeight: "inherit",
            ...o
          },
          children: n
        }),
        s && c.jsx(jt, {
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
  function Jr(e) {
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
  function dp(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: o, tableRowSelection: r, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: a, tableSorting: d, tableQuickFilter: u, gridRowsLength: f } = e, g = y.useRef([]), p = y.useRef([]), h = y.useRef(""), m = y.useRef(d), x = y.useRef(a), b = y.useRef(u), [w, _] = y.useState([]);
    y.useEffect(() => {
      d ? !m.current && g.current.length > 0 && _(g.current) : (w.length > 0 && (g.current = w), _([])), m.current = d;
    }, [
      d,
      w
    ]);
    const [j, R] = y.useState([]);
    y.useEffect(() => {
      a ? !x.current && p.current.length > 0 && R(p.current) : (j.length > 0 && (p.current = j), R([])), x.current = a;
    }, [
      a,
      j
    ]);
    const [C, M] = y.useState("");
    y.useEffect(() => {
      u ? !b.current && h.current && M(h.current) : (C && (h.current = C), M("")), b.current = u;
    }, [
      u,
      C
    ]);
    const [z, k] = y.useState({}), [A, I] = y.useState(() => {
      if (o) return {};
      const D = `jtc_col_sizes_${t}`;
      try {
        const P = localStorage.getItem(D);
        if (P) return JSON.parse(P);
      } catch {
      }
      const S = {};
      return n.forEach((P) => {
        P.width && (S[P.path] = P.width);
      }), r === true && (S.__select__ = 48), S;
    });
    y.useEffect(() => {
      if (!o) try {
        localStorage.setItem(`jtc_col_sizes_${t}`, JSON.stringify(A));
      } catch {
      }
    }, [
      A,
      t,
      o
    ]);
    const G = y.useMemo(() => Number(s) || 25, [
      s
    ]), [E, Y] = y.useState({
      pageIndex: 0,
      pageSize: G
    });
    y.useEffect(() => {
      Y((D) => D.pageSize === G ? D : {
        pageIndex: 0,
        pageSize: G
      });
    }, [
      G
    ]);
    const J = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(f, 1)
    } : E, [
      l,
      f,
      E
    ]), O = y.useMemo(() => Jr(i), [
      i
    ]);
    return {
      sorting: w,
      columnFilters: j,
      globalFilter: C,
      rowSelection: z,
      columnSizing: A,
      pagination: E,
      effectivePagination: J,
      setSorting: _,
      setColumnFilters: R,
      setGlobalFilter: M,
      setRowSelection: k,
      setColumnSizing: I,
      setPagination: Y,
      pageSizeOptions: O,
      parsePageSizeOptions: Jr
    };
  }
  const pp = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, fp = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, gp = (e) => {
    const { children: t, value: n, ...o } = e;
    return c.jsx(de, {
      ...o,
      value: n,
      children: c.jsx(F, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, hp = () => {
    var _a2;
    const e = y.useContext(ei), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = ti("oid"), s = ai("oid"), i = _n(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (s == null) return [];
      let $;
      if (typeof s == "string") try {
        $ = JSON.parse(s);
      } catch {
        return [];
      }
      else $ = s;
      return Array.isArray($) ? $ : typeof $ == "object" && $ !== null ? [
        $
      ] : [];
    }, [
      s
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: f, rows: g, meta: p } = Xu(d, u), h = y.useMemo(() => {
      const $ = n.data.tableMaxDepth || 10;
      return p.maxDepth > $ ? {
        actual: p.maxDepth,
        configured: $
      } : null;
    }, [
      p.maxDepth,
      n.data.tableMaxDepth
    ]), m = y.useMemo(() => Cs(n.data.columnConfig), [
      n.data.columnConfig
    ]), x = n.data.tableDensity || "standard", b = Number(n.data.tableRowHeight) || pp[x] || 52, w = Number(n.data.tableHeaderHeight) || fp[x] || 56, _ = y.useMemo(() => g.map(($, T) => ({
      __id: T,
      ...$
    })), [
      g
    ]), j = y.useMemo(() => Au({
      columnConfig: m,
      analysisColumns: f,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: n.data.tableFiltering === true,
        tableRowSelection: n.data.tableRowSelection === true
      },
      renderConfiguredCell: ($, T) => c.jsx(Yr, {
        value: $,
        config: T
      }),
      renderAutoDetectedCell: ($) => c.jsx(Yr, {
        value: $
      }),
      renderSelectionHeader: ($) => c.jsx(bn, {
        size: "small",
        indeterminate: $.getIsSomePageRowsSelected(),
        checked: $.getIsAllPageRowsSelected(),
        onChange: $.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: ($) => c.jsx(bn, {
        size: "small",
        checked: $.getIsSelected(),
        onChange: $.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      m,
      f,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection
    ]), R = n.data.tableAutoSize === true, { sorting: C, columnFilters: M, globalFilter: z, rowSelection: k, columnSizing: A, pagination: I, effectivePagination: G, setSorting: E, setColumnFilters: Y, setGlobalFilter: J, setRowSelection: O, setColumnSizing: D, setPagination: S, pageSizeOptions: P } = dp({
      widgetId: o,
      columnConfig: m,
      tableAutoSize: R,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: n.data.tableFiltering === true,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: _.length
    }), X = Xd({
      data: _,
      columns: j,
      getCoreRowModel: Ld(),
      getSortedRowModel: qd(),
      getFilteredRowModel: Gd(),
      getPaginationRowModel: Ud(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: "includesString",
      columnResizeMode: "onChange",
      enableColumnResizing: !R,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3
      },
      state: {
        sorting: C,
        columnFilters: M,
        globalFilter: z,
        pagination: G,
        rowSelection: k,
        columnSizing: A
      },
      onSortingChange: E,
      onColumnFiltersChange: Y,
      onGlobalFilterChange: J,
      onPaginationChange: n.data.tablePagination !== false ? S : void 0,
      onRowSelectionChange: O,
      onColumnSizingChange: D,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), q = y.useRef(null), ae = y.useRef(null), [ee, me] = y.useState({}), [ce, N] = y.useState(null), L = y.useRef(null), [re, Me] = y.useState(void 0), [Ee, ze] = y.useState(void 0), pe = y.useCallback(($, T) => {
      var _a3;
      L.current = $;
      const Q = $.id, ye = C.find((V) => V.id === Q), Ae = (_a3 = M.find((V) => V.id === Q)) == null ? void 0 : _a3.value;
      Me(ye), ze(Ae), N(T);
    }, [
      C,
      M
    ]), _e = y.useCallback(() => {
      N(null);
    }, []);
    y.useEffect(() => {
      if (!R) return;
      const $ = ae.current;
      if (!$) return;
      const T = new ResizeObserver(() => {
        const Q = $.querySelector("tr[data-row-index]");
        if (!Q) return;
        const ye = Q.querySelectorAll("td"), Ae = X.getHeaderGroups()[0];
        if (!Ae || ye.length !== Ae.headers.length) return;
        const V = {};
        Ae.headers.forEach((Ke, Bt) => {
          const Zo = ye[Bt];
          Zo && (V[Ke.id] = Zo.getBoundingClientRect().width);
        }), me(V);
      });
      return T.observe($), () => T.disconnect();
    }, [
      R,
      X
    ]);
    const je = y.useMemo(() => {
      const $ = {
        tableLayout: R ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) $["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const T = n.data.horizontalCellBorderWidth ?? 1, Q = In(n.data.horizontalCellBorderColor);
        $["& .MuiTableCell-root"] = {
          ...$["& .MuiTableCell-root"],
          borderBottom: `${T}px solid`,
          borderBottomColor: Q || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const T = n.data.verticalCellBorderWidth ?? 1, Q = In(n.data.verticalCellBorderColor);
        $["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${T}px solid`,
          borderRightColor: Q || "divider"
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
      R
    ]), qe = n.data.tableHeaderBgColor, Ye = n.data.tableHeaderTextColor, Oe = n.data.tableHeaderFontSize, mt = y.useMemo(() => ({
      height: w,
      whiteSpace: "nowrap",
      ...Ye && {
        color: Ye
      },
      ...Oe && {
        fontSize: `${Oe}px`
      }
    }), [
      w,
      Ye,
      Oe
    ]), yt = y.useMemo(() => ({
      ...Ye && {
        color: Ye
      },
      ...Oe && {
        fontSize: `${Oe}px`
      }
    }), [
      Ye,
      Oe
    ]), Be = n.data.noCard === true, nt = n.data.headerBorderWidth ?? 0, vt = In(n.data.headerBorderColor), $t = y.useMemo(() => {
      const $ = n.data.tableHeaderElevation ?? 6, T = Be ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: $ > 0 ? i.shadows[$] : "none"
      };
      nt > 0 && (T["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${nt}px`,
        backgroundColor: vt || i.palette.divider,
        pointerEvents: "none"
      });
      const Q = qe ? Dt(qe) : null;
      return Q ? {
        ...T,
        background: Q
      } : qe ? {
        ...T,
        backgroundColor: qe
      } : T;
    }, [
      Be,
      qe,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      nt,
      vt
    ]), At = y.useMemo(() => {
      const $ = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, T = n.data.borderWidth, Q = n.data.borderStyle || "solid", ye = In(n.data.borderColor), Ae = n.data.borderRadius;
      return T && T > 0 && ($.border = `${T}px ${Q}`, $.borderColor = ye || "divider"), Ae && ($.borderRadius = Ae), $;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Lt = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), ct = y.useCallback(($) => R ? ee[$.id] ?? "auto" : $.getSize(), [
      R,
      ee
    ]), ut = y.useMemo(() => ({
      ...n.data.tableCellFontSize && {
        fontSize: `${n.data.tableCellFontSize}px`
      },
      overflow: "hidden",
      height: b,
      maxHeight: b,
      padding: "0 8px",
      verticalAlign: "middle"
    }), [
      n.data.tableCellFontSize,
      b
    ]), dt = n.data.evenRowColor || null, it = n.data.oddRowColor || null, Vt = dt ? Dt(dt) : null, Ne = it ? Dt(it) : null, bt = y.useCallback(($) => {
      const T = $ % 2 === 0, Q = T ? dt : it, ye = T ? Vt : Ne;
      if (Q) return ye ? {
        background: ye
      } : {
        backgroundColor: Q
      };
    }, [
      dt,
      it,
      Vt,
      Ne
    ]), Je = X.getRowModel().rows, xt = cp({
      count: Je.length,
      getScrollElement: () => q.current,
      estimateSize: () => b,
      overscan: 25,
      scrollPaddingStart: b
    }), lo = n.data.tableVirtualizeThreshold ?? 50, Pt = n.data.tablePagination === false && Je.length > lo ? xt.getVirtualItems() : null, Ht = Pt == null ? void 0 : Pt[0], $n = Pt == null ? void 0 : Pt[Pt.length - 1], An = (Ht == null ? void 0 : Ht.start) ?? 0, Pn = $n ? xt.getTotalSize() - ($n.end ?? 0) : 0;
    return c.jsxs(ni, {
      isValidType: a,
      data: r,
      oidValue: s,
      children: [
        c.jsx(oi, {
          data: r,
          widget: n
        }),
        a && j.length > 0 ? c.jsxs(W, {
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
              children: c.jsx($e, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: z,
                onChange: ($) => J($.target.value),
                placeholder: v.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx($o, {
                      position: "start",
                      children: c.jsx(ws, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && c.jsx(So, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: c.jsx(F, {
                variant: "body2",
                children: v.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            c.jsx(W, {
              sx: At,
              children: c.jsx(ec, {
                ref: q,
                sx: Lt,
                children: c.jsxs(Va, {
                  size: x === "compact" ? "small" : "medium",
                  sx: je,
                  children: [
                    c.jsxs(sc, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...$t,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: [
                        X.getHeaderGroups().map(($) => c.jsx(Wt, {
                          children: $.headers.map((T) => {
                            const Q = T.column.getCanSort(), ye = T.column.getIsSorted(), Ae = T.column.columnDef.meta, V = T.column.id === "__select__", Ke = !R;
                            return c.jsxs(ot, {
                              component: "th",
                              colSpan: T.colSpan,
                              align: (Ae == null ? void 0 : Ae.align) || "left",
                              padding: V ? "checkbox" : "normal",
                              sx: {
                                width: ct(T),
                                minWidth: V ? 48 : 40,
                                position: "relative",
                                ...mt
                              },
                              children: [
                                V ? cn(T.column.columnDef.header, T.getContext()) : c.jsxs(W, {
                                  sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: (Ae == null ? void 0 : Ae.align) === "right" ? "flex-end" : (Ae == null ? void 0 : Ae.align) === "center" ? "center" : "space-between",
                                    width: "100%"
                                  },
                                  children: [
                                    Q ? c.jsx(Fc, {
                                      active: ye !== false,
                                      direction: ye === "desc" ? "desc" : "asc",
                                      onClick: T.column.getToggleSortingHandler(),
                                      children: c.jsx(F, {
                                        variant: "body2",
                                        component: "span",
                                        fontWeight: "medium",
                                        noWrap: true,
                                        sx: yt,
                                        children: cn(T.column.columnDef.header, T.getContext())
                                      })
                                    }) : c.jsx(F, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: yt,
                                      children: cn(T.column.columnDef.header, T.getContext())
                                    }),
                                    n.data.tableColumnMenu !== false && c.jsx(Te, {
                                      title: v.t("json_table_column_menu"),
                                      children: c.jsx(Se, {
                                        size: "small",
                                        "aria-label": v.t("json_table_column_menu"),
                                        onClick: (Bt) => {
                                          Bt.stopPropagation(), pe(T.column, Bt.currentTarget);
                                        },
                                        sx: {
                                          ml: 0.5,
                                          opacity: 0.6
                                        },
                                        children: c.jsx(Tc, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  ]
                                }),
                                Ke && T.column.getCanResize() && c.jsx(W, {
                                  className: "resize-handle",
                                  onMouseDown: T.getResizeHandler(),
                                  onTouchStart: T.getResizeHandler(),
                                  onClick: (Bt) => Bt.stopPropagation(),
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
                                    opacity: T.column.getIsResizing() ? 1 : 0,
                                    bgcolor: T.column.getIsResizing() ? "primary.main" : "divider",
                                    transition: "opacity 0.15s",
                                    "&:hover": {
                                      opacity: 1,
                                      bgcolor: "primary.light"
                                    }
                                  }
                                })
                              ]
                            }, T.id);
                          })
                        }, $.id)),
                        n.data.tableFiltering === true && c.jsx(Wt, {
                          children: (_a2 = X.getHeaderGroups()[0]) == null ? void 0 : _a2.headers.map(($) => {
                            if ($.column.id === "__select__") return c.jsx(ot, {
                              component: "th",
                              colSpan: $.colSpan,
                              padding: "checkbox",
                              sx: {
                                width: ct($),
                                py: 0.5,
                                px: 0.5
                              }
                            }, $.id);
                            if (!$.column.getCanFilter()) return c.jsx(ot, {
                              component: "th",
                              colSpan: $.colSpan,
                              sx: {
                                width: ct($),
                                py: 0.5,
                                px: 0.5
                              }
                            }, $.id);
                            const T = $.column.getFilterValue() ?? "";
                            return c.jsx(ot, {
                              component: "th",
                              colSpan: $.colSpan,
                              sx: {
                                width: ct($),
                                py: 0.5,
                                px: 0.5
                              },
                              children: c.jsx($e, {
                                size: "small",
                                variant: "standard",
                                fullWidth: true,
                                value: T,
                                onChange: (Q) => $.column.setFilterValue(Q.target.value || void 0),
                                placeholder: v.t("json_table_filter_placeholder"),
                                slotProps: {
                                  input: {
                                    endAdornment: T ? c.jsx($o, {
                                      position: "end",
                                      children: c.jsx(Te, {
                                        title: v.t("json_table_filter_clear"),
                                        children: c.jsx(Se, {
                                          size: "small",
                                          onClick: () => $.column.setFilterValue(void 0),
                                          "aria-label": v.t("json_table_filter_clear"),
                                          children: c.jsx(Ao, {
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
                    c.jsx(Ua, {
                      ref: ae,
                      children: Pt ? c.jsxs(c.Fragment, {
                        children: [
                          An > 0 && c.jsx(Wt, {
                            children: c.jsx(ot, {
                              colSpan: j.length,
                              sx: {
                                height: An,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          Pt.map(($) => {
                            const T = Je[$.index], Q = $.index;
                            return c.jsx(Wt, {
                              "data-row-index": Q,
                              sx: {
                                height: b,
                                ...bt(Q)
                              },
                              children: T.getVisibleCells().map((ye) => {
                                var _a3;
                                const Ae = ye.column.id === "__select__";
                                return c.jsx(ot, {
                                  align: ((_a3 = ye.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                                  padding: Ae ? "checkbox" : "normal",
                                  sx: ut,
                                  children: cn(ye.column.columnDef.cell, ye.getContext())
                                }, ye.id);
                              })
                            }, T.id);
                          }),
                          Pn > 0 && c.jsx(Wt, {
                            children: c.jsx(ot, {
                              colSpan: j.length,
                              sx: {
                                height: Pn,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Je.map(($, T) => c.jsx(Wt, {
                        "data-row-index": T,
                        sx: {
                          height: b,
                          ...bt(T)
                        },
                        children: $.getVisibleCells().map((Q) => {
                          var _a3;
                          const ye = Q.column.id === "__select__";
                          return c.jsx(ot, {
                            align: ((_a3 = Q.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                            padding: ye ? "checkbox" : "normal",
                            sx: ut,
                            children: cn(Q.column.columnDef.cell, Q.getContext())
                          }, Q.id);
                        })
                      }, $.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && c.jsx(_c, {
              component: "div",
              count: X.getFilteredRowModel().rows.length,
              page: I.pageIndex,
              rowsPerPage: I.pageSize,
              rowsPerPageOptions: P,
              onPageChange: ($, T) => S((Q) => ({
                ...Q,
                pageIndex: T
              })),
              onRowsPerPageChange: ($) => S({
                pageIndex: 0,
                pageSize: parseInt($.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(F, {
                variant: "body2",
                component: "span",
                children: v.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: $, to: T, count: Q }) => c.jsx(F, {
                variant: "body2",
                component: "span",
                children: `${$}\u2013${T} / ${Q}`
              }),
              slots: {
                menuItem: gp
              },
              slotProps: {
                select: {
                  renderValue: ($) => c.jsx(F, {
                    variant: "body2",
                    component: "span",
                    children: String($)
                  })
                }
              }
            }),
            (() => {
              var _a3, _b;
              const $ = ((_a3 = L.current) == null ? void 0 : _a3.getCanSort()) === true, T = re !== void 0, Q = n.data.tableFiltering === true && ((_b = L.current) == null ? void 0 : _b.getCanFilter()) === true && Ee;
              return $ || Q ? c.jsxs(ri, {
                anchorEl: ce,
                open: !!ce,
                onClose: _e,
                children: [
                  $ && c.jsxs(c.Fragment, {
                    children: [
                      c.jsxs(de, {
                        onClick: () => {
                          L.current && E([
                            {
                              id: L.current.id,
                              desc: false
                            }
                          ]), _e();
                        },
                        children: [
                          c.jsx(xs, {
                            fontSize: "small",
                            sx: {
                              mr: 1
                            }
                          }),
                          c.jsx(F, {
                            variant: "body2",
                            children: v.t("json_table_sort_asc")
                          })
                        ]
                      }),
                      c.jsxs(de, {
                        onClick: () => {
                          L.current && E([
                            {
                              id: L.current.id,
                              desc: true
                            }
                          ]), _e();
                        },
                        children: [
                          c.jsx(bs, {
                            fontSize: "small",
                            sx: {
                              mr: 1
                            }
                          }),
                          c.jsx(F, {
                            variant: "body2",
                            children: v.t("json_table_sort_desc")
                          })
                        ]
                      }),
                      T && c.jsx(de, {
                        onClick: () => {
                          E([]), _e();
                        },
                        children: c.jsx(F, {
                          variant: "body2",
                          children: v.t("json_table_sort_clear")
                        })
                      })
                    ]
                  }),
                  $ && Q && c.jsx(Zr, {}),
                  Q && c.jsxs(de, {
                    onClick: () => {
                      var _a4;
                      (_a4 = L.current) == null ? void 0 : _a4.setFilterValue(void 0), _e();
                    },
                    children: [
                      c.jsx(Ao, {
                        fontSize: "small",
                        sx: {
                          mr: 1
                        }
                      }),
                      c.jsx(F, {
                        variant: "body2",
                        children: v.t("json_table_filter_clear")
                      })
                    ]
                  })
                ]
              }) : null;
            })()
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
          children: c.jsx(F, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? v.t("json_table_no_oid") : a ? m.length > 0 && j.length === 0 ? v.t("json_table_all_columns_hidden") : v.t("json_table_no_data") : v.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, mp = [
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
  Lo = class extends v {
    static createObjectFields() {
      const t = si([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (s, i, l, a) => {
          if (!i.oid) {
            for (const d of mp) delete i[d];
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
              ...rr()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Lo.createObjectFields(),
              ...ed()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...rr({
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
      return Lo.getWidgetInfo();
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
      return ii(this.wrapContent(c.jsx(hp, {})), n);
    }
  };
});
export {
  __tla,
  Lo as default
};
