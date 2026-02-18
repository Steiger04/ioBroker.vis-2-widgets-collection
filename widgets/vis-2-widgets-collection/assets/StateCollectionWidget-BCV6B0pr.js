import { c as et, j as a, g as T, a as $, u as G, b as ot, s as P, d as V, e as W, m as z, L as O, f as st, h as X, B as at, r as nt, i as F, k as it, l as H, C as q, n as J, o as L, p as rt, I as lt, P as ct, D as dt, q as ut, t as pt, T as mt, v as Y, w as gt, x as ft, G as vt, y as K, z as bt, A as xt, __tla as __tla_0 } from "./useData-D0DziYnO.js";
import { u as Q, d as yt, __tla as __tla_1 } from "./useValueState-BEg6mU0J.js";
import { v as r, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as ht, __tla as __tla_3 } from "./Close-BrWCNU0V.js";
import { S as Ct, __tla as __tla_4 } from "./Slider-D8vTWtnZ.js";
import { L as St, D as It, a as kt, b as jt, __tla as __tla_5 } from "./ListItemText-15ZlqAXj.js";
import { S as wt, __tla as __tla_6 } from "./Stack-ZrqVzFSE.js";
import { u as Pt, __tla as __tla_7 } from "./useHtmlValue-3ISCcM5X.js";
import { B as At, __tla as __tla_8 } from "./Button-Br6Yf8Z6.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_9 } from "./listItemTextClasses-B7Lc3IpC.js";
let tt;
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
  })()
]).then(async () => {
  const Lt = et(a.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function Rt(t) {
    return T("MuiAvatar", t);
  }
  $("MuiAvatar", [
    "root",
    "colorDefault",
    "circular",
    "rounded",
    "square",
    "img",
    "fallback"
  ]);
  const Ot = (t) => {
    const { classes: e, variant: o, colorDefault: n } = t;
    return W({
      root: [
        "root",
        o,
        n && "colorDefault"
      ],
      img: [
        "img"
      ],
      fallback: [
        "fallback"
      ]
    }, Rt, e);
  }, Vt = P("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        e[o.variant],
        o.colorDefault && e.colorDefault
      ];
    }
  })(z(({ theme: t }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: t.typography.fontFamily,
    fontSize: t.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    variants: [
      {
        props: {
          variant: "rounded"
        },
        style: {
          borderRadius: (t.vars || t).shape.borderRadius
        }
      },
      {
        props: {
          variant: "square"
        },
        style: {
          borderRadius: 0
        }
      },
      {
        props: {
          colorDefault: true
        },
        style: {
          color: (t.vars || t).palette.background.default,
          ...t.vars ? {
            backgroundColor: t.vars.palette.Avatar.defaultBg
          } : {
            backgroundColor: t.palette.grey[400],
            ...t.applyStyles("dark", {
              backgroundColor: t.palette.grey[600]
            })
          }
        }
      }
    ]
  }))), Mt = P("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (t, e) => e.img
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4
  }), Bt = P(Lt, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (t, e) => e.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function _t({ crossOrigin: t, referrerPolicy: e, src: o, srcSet: n }) {
    const [s, d] = r.useState(false);
    return r.useEffect(() => {
      if (!o && !n) return;
      d(false);
      let l = true;
      const i = new Image();
      return i.onload = () => {
        l && d("loaded");
      }, i.onerror = () => {
        l && d("error");
      }, i.crossOrigin = t, i.referrerPolicy = e, i.src = o, n && (i.srcset = n), () => {
        l = false;
      };
    }, [
      t,
      e,
      o,
      n
    ]), s;
  }
  const Dt = r.forwardRef(function(e, o) {
    const n = G({
      props: e,
      name: "MuiAvatar"
    }), { alt: s, children: d, className: l, component: i = "div", slots: p = {}, slotProps: m = {}, imgProps: C, sizes: I, src: v, srcSet: y, variant: h = "circular", ...j } = n;
    let b = null;
    const g = {
      ...n,
      component: i,
      variant: h
    }, w = _t({
      ...C,
      ...typeof m.img == "function" ? m.img(g) : m.img,
      src: v,
      srcSet: y
    }), k = v || y, x = k && w !== "error";
    g.colorDefault = !x, delete g.ownerState;
    const c = Ot(g), [u, f] = ot("img", {
      className: c.img,
      elementType: Mt,
      externalForwardedProps: {
        slots: p,
        slotProps: {
          img: {
            ...C,
            ...m.img
          }
        }
      },
      additionalProps: {
        alt: s,
        src: v,
        srcSet: y,
        sizes: I
      },
      ownerState: g
    });
    return x ? b = a.jsx(u, {
      ...f
    }) : d || d === 0 ? b = d : k && s ? b = s[0] : b = a.jsx(Bt, {
      ownerState: g,
      className: c.fallback
    }), a.jsx(Vt, {
      as: i,
      className: V(c.root, l),
      ref: o,
      ...j,
      ownerState: g,
      children: b
    });
  });
  function Nt(t) {
    return T("MuiListItem", t);
  }
  $("MuiListItem", [
    "root",
    "container",
    "dense",
    "alignItemsFlexStart",
    "divider",
    "gutters",
    "padding",
    "secondaryAction"
  ]);
  function Ft(t) {
    return T("MuiListItemButton", t);
  }
  const R = $("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), Tt = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters
    ];
  }, $t = (t) => {
    const { alignItems: e, classes: o, dense: n, disabled: s, disableGutters: d, divider: l, selected: i } = t, m = W({
      root: [
        "root",
        n && "dense",
        !d && "gutters",
        l && "divider",
        s && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        i && "selected"
      ]
    }, Ft, o);
    return {
      ...o,
      ...m
    };
  }, Gt = P(at, {
    shouldForwardProp: (t) => nt(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: Tt
  })(z(({ theme: t }) => ({
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minWidth: 0,
    boxSizing: "border-box",
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 8,
    transition: t.transitions.create("background-color", {
      duration: t.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (t.vars || t).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${R.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : F(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${R.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : F(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${R.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : F(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : F(t.palette.primary.main, t.palette.action.selectedOpacity)
      }
    },
    [`&.${R.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    [`&.${R.disabled}`]: {
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.divider,
        style: {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          alignItems: "flex-start"
        }
      },
      {
        props: ({ ownerState: e }) => !e.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: e }) => e.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      }
    ]
  }))), Wt = r.forwardRef(function(e, o) {
    const n = G({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: s = "center", autoFocus: d = false, component: l = "div", children: i, dense: p = false, disableGutters: m = false, divider: C = false, focusVisibleClassName: I, selected: v = false, className: y, ...h } = n, j = r.useContext(O), b = r.useMemo(() => ({
      dense: p || j.dense || false,
      alignItems: s,
      disableGutters: m
    }), [
      s,
      j.dense,
      p,
      m
    ]), g = r.useRef(null);
    st(() => {
      d && g.current && g.current.focus();
    }, [
      d
    ]);
    const w = {
      ...n,
      alignItems: s,
      dense: b.dense,
      disableGutters: m,
      divider: C,
      selected: v
    }, k = $t(w), x = X(g, o);
    return a.jsx(O.Provider, {
      value: b,
      children: a.jsx(Gt, {
        ref: x,
        href: h.href || h.to,
        component: (h.href || h.to) && l === "div" ? "button" : l,
        focusVisibleClassName: V(k.focusVisible, I),
        ownerState: w,
        className: V(k.root, y),
        ...h,
        classes: k,
        children: i
      })
    });
  });
  function zt(t) {
    return T("MuiListItemSecondaryAction", t);
  }
  $("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Ut = (t) => {
    const { disableGutters: e, classes: o } = t;
    return W({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, zt, o);
  }, Et = P("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.disableGutters && e.disableGutters
      ];
    }
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      {
        props: ({ ownerState: t }) => t.disableGutters,
        style: {
          right: 0
        }
      }
    ]
  }), Z = r.forwardRef(function(e, o) {
    const n = G({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: s, ...d } = n, l = r.useContext(O), i = {
      ...n,
      disableGutters: l.disableGutters
    }, p = Ut(i);
    return a.jsx(Et, {
      className: V(p.root, s),
      ownerState: i,
      ref: o,
      ...d
    });
  });
  Z.muiName = "ListItemSecondaryAction";
  const Ht = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters,
      !o.disablePadding && e.padding,
      o.hasSecondaryAction && e.secondaryAction
    ];
  }, qt = (t) => {
    const { alignItems: e, classes: o, dense: n, disableGutters: s, disablePadding: d, divider: l, hasSecondaryAction: i } = t;
    return W({
      root: [
        "root",
        n && "dense",
        !s && "gutters",
        !d && "padding",
        l && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        i && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, Nt, o);
  }, Yt = P("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: Ht
  })(z(({ theme: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "left",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: e }) => !e.disablePadding && e.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      },
      {
        props: ({ ownerState: e }) => !e.disablePadding && !e.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: e }) => !e.disablePadding && !!e.secondaryAction,
        style: {
          paddingRight: 48
        }
      },
      {
        props: ({ ownerState: e }) => !!e.secondaryAction,
        style: {
          [`& > .${R.root}`]: {
            paddingRight: 48
          }
        }
      },
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          alignItems: "flex-start"
        }
      },
      {
        props: ({ ownerState: e }) => e.divider,
        style: {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: e }) => e.button,
        style: {
          transition: t.transitions.create("background-color", {
            duration: t.transitions.duration.shortest
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (t.vars || t).palette.action.hover,
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.hasSecondaryAction,
        style: {
          paddingRight: 48
        }
      }
    ]
  }))), Kt = P("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  }), Xt = r.forwardRef(function(e, o) {
    const n = G({
      props: e,
      name: "MuiListItem"
    }), { alignItems: s = "center", children: d, className: l, component: i, components: p = {}, componentsProps: m = {}, ContainerComponent: C = "li", ContainerProps: { className: I, ...v } = {}, dense: y = false, disableGutters: h = false, disablePadding: j = false, divider: b = false, secondaryAction: g, slotProps: w = {}, slots: k = {}, ...x } = n, c = r.useContext(O), u = r.useMemo(() => ({
      dense: y || c.dense || false,
      alignItems: s,
      disableGutters: h
    }), [
      s,
      c.dense,
      y,
      h
    ]), f = r.useRef(null), S = r.Children.toArray(d), M = S.length && it(S[S.length - 1], [
      "ListItemSecondaryAction"
    ]), D = {
      ...n,
      alignItems: s,
      dense: u.dense,
      disableGutters: h,
      disablePadding: j,
      divider: b,
      hasSecondaryAction: M
    }, U = qt(D), E = X(f, o), N = k.root || p.Root || Yt, B = w.root || m.root || {}, _ = {
      className: V(U.root, B.className, l),
      ...x
    };
    let A = i || "li";
    return M ? (A = !_.component && !i ? "div" : A, C === "li" && (A === "li" ? A = "div" : _.component === "li" && (_.component = "div")), a.jsx(O.Provider, {
      value: u,
      children: a.jsxs(Kt, {
        as: C,
        className: V(U.container, I),
        ref: E,
        ownerState: D,
        ...v,
        children: [
          a.jsx(N, {
            ...B,
            ...!H(N) && {
              as: A,
              ownerState: {
                ...D,
                ...B.ownerState
              }
            },
            ..._,
            children: S
          }),
          S.pop()
        ]
      })
    })) : a.jsx(O.Provider, {
      value: u,
      children: a.jsxs(N, {
        ...B,
        as: A,
        ref: E,
        ...!H(N) && {
          ownerState: {
            ...D,
            ...B.ownerState
          }
        },
        ..._,
        children: [
          S,
          g && a.jsx(Z, {
            children: g
          })
        ]
      })
    });
  }), Jt = () => [
    {
      type: "custom",
      component: () => a.jsx(q, {})
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: (t, e) => {
        var _a;
        return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      name: "statePushButton",
      type: "checkbox",
      label: "state_push_button",
      default: false,
      hidden: (t, e) => {
        var _a;
        const o = t.values_count || Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
        return !t.onlyStates || o !== 2;
      },
      tooltip: "state_push_button_tooltip"
    },
    {
      type: "custom",
      component: () => a.jsx(q, {}),
      hidden: (t, e) => {
        var _a;
        return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (t, e) => !t.write,
      default: false,
      hidden: (t, e) => !t.write
    },
    {
      name: "noIcon",
      type: "checkbox",
      label: "no_icon"
    },
    {
      name: "noValue",
      type: "checkbox",
      label: "no_value"
    }
  ], Qt = ({ widgetStates: t, data: e, open: o, closeHandler: n }) => {
    const { widget: s, getPropertyValue: d } = r.useContext(J), l = s.data.oidObject, i = s.data.onlyStates, [p, m] = r.useState(() => {
      const c = d("oid");
      return typeof c == "number" ? c : 0;
    }), { updateValue: C } = Q("oid"), I = r.useMemo(() => {
      const c = l == null ? void 0 : l.commonStates, u = l == null ? void 0 : l.type, f = l == null ? void 0 : l.name, S = l == null ? void 0 : l.minValue, M = l == null ? void 0 : l.maxValue;
      return {
        commonStates: c,
        oidType: u,
        oidName: f,
        minValue: S,
        maxValue: M
      };
    }, [
      l
    ]), v = r.useCallback((c) => {
      C(c);
    }, [
      C
    ]), y = r.useCallback((c, u) => {
      const f = Array.isArray(u) ? u[0] : u;
      m(f), v(f);
    }, [
      v
    ]), h = r.useCallback((c, u) => {
      (u === "backdropClick" || u === "escapeKeyDown") && n();
    }, [
      n
    ]), j = r.useCallback(() => {
      n();
    }, [
      n
    ]), b = r.useCallback((c) => (u) => {
      u.preventDefault();
      const f = Number(c);
      isNaN(f) || m(f), v(c);
    }, [
      v
    ]), g = r.useMemo(() => {
      const { oidType: c, commonStates: u, minValue: f, maxValue: S } = I;
      return c === "number" && !i && f !== void 0 && S !== void 0 ? a.jsx(L, {
        sx: {
          px: 3
        },
        children: a.jsx(Ct, {
          sx: {
            pb: u ? 4 : 3
          },
          size: "small",
          min: f,
          max: S,
          marks: [
            {
              value: f,
              label: String(f)
            },
            {
              value: S,
              label: String(S)
            }
          ],
          valueLabelDisplay: "auto",
          value: p,
          onChange: y
        })
      }) : null;
    }, [
      I,
      i,
      p,
      y
    ]), w = r.useMemo(() => !t || !Object.keys(t).length ? null : a.jsx(rt, {
      children: Object.entries(t).map(([c, u]) => a.jsx(Xt, {
        disablePadding: true,
        children: a.jsx(Wt, {
          onClick: b(c),
          children: a.jsx(St, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(u)
          })
        })
      }, c))
    }), [
      t,
      b
    ]), k = r.useMemo(() => e.header || I.oidName || "Change Value", [
      e.header,
      I.oidName
    ]), x = r.useMemo(() => t && Object.keys(t).length > 0, [
      t
    ]);
    return a.jsxs(It, {
      open: o,
      onClose: h,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: e.backgroundColor,
          color: e.textColor
        }
      },
      children: [
        a.jsx(kt, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: k
        }),
        a.jsx(lt, {
          "aria-label": "close",
          onClick: j,
          sx: (c) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: c.palette.grey[500]
          }),
          children: a.jsx(ht, {})
        }),
        a.jsx(jt, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(wt, {
            divider: x && a.jsx(dt, {}),
            spacing: 0,
            component: ct,
            children: [
              g,
              w
            ]
          })
        })
      ]
    });
  };
  function Zt() {
    const t = r.useContext(J), { widget: e, theme: o } = t, n = e.data.oidObject, { data: s, widgetStates: d, states: l } = ut("oid"), { value: i, updateValue: p } = Q("oid"), [m, C] = r.useState(false), I = n == null ? void 0 : n.type, v = e.data.onlyStates, y = Pt(i, e, s), h = y != null ? String(y) : "", j = () => {
      const x = e.data.value1;
      v && l.length === 2 && e.data.statePushButton && x !== void 0 && setTimeout(() => p(x), 0);
    }, b = () => {
      const x = e.data.value2;
      v && l.length === 2 && e.data.statePushButton && x !== void 0 && setTimeout(() => p(x), 0);
    }, g = r.useCallback(() => {
      if (!v) {
        C(true);
        return;
      }
      switch (l.length) {
        case 1:
          e.data.value1 !== void 0 && p(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(i) === String(e.data.value1) ? p(e.data.value2) : p(e.data.value1));
          break;
        default:
          C(true);
          break;
      }
    }, [
      i,
      v,
      l.length,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      p
    ]), w = a.jsx(At, {
      disabled: e.data.onlyDisplay,
      onClick: g,
      onMouseDown: j,
      onMouseUp: b,
      onMouseOut: b,
      onTouchStart: j,
      onTouchEnd: b,
      sx: {
        width: "100%",
        height: "100%",
        color: s.iconColor || s.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent"
        }
      },
      children: a.jsxs(L, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !e.data.noIcon && s.icon && (() => {
            const x = s.icon, c = s.iconColor || o.palette.primary.main, u = s.forceColorMask, f = pt(x, c, u);
            return a.jsx(L, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: a.jsx(Dt, {
                variant: "square",
                src: x || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...f
                    }
                  }
                },
                sx: {
                  overflow: "visible",
                  width: s.iconSizeOnly,
                  height: s.iconSizeOnly,
                  left: `calc(0px + ${s.iconXOffset})`,
                  top: `calc(0px - ${s.iconYOffset})`
                }
              })
            });
          })(),
          !e.data.noValue && a.jsx(L, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx(mt, {
              component: L,
              variant: "body2",
              sx: {
                fontSize: s.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: Y(s.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: Y(s.textColor) ? "transparent" : s.textColor,
                textTransform: "none",
                px: 1,
                pl: 0,
                pr: 1,
                width: "100%",
                height: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
                hyphens: "auto",
                "& > div": {
                  textAlign: "left",
                  display: "inline-block"
                }
              },
              dangerouslySetInnerHTML: {
                __html: `<div style="text-align: left; display: inline-block;">${h || ""}</div>`
              }
            })
          })
        ]
      })
    }), k = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(I ?? "");
    return a.jsxs(a.Fragment, {
      children: [
        m && a.jsx(Qt, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: d,
          open: m,
          closeHandler: () => C(false)
        }),
        a.jsxs(gt, {
          isValidType: k,
          data: s,
          oidValue: i,
          children: [
            a.jsx(ft, {
              data: s,
              widget: e
            }),
            a.jsx(L, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: w
            })
          ]
        })
      ]
    });
  }
  tt = class extends vt {
    static getWidgetInfo() {
      return {
        id: "tplStateCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visSetColor: "#0C0A43",
        visName: "StateCollectionWidget",
        visWidgetLabel: "state_collection_widget",
        visOrder: 3,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...K()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...bt([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...yt(),
              ...Jt()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...K({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png"
      };
    }
    getWidgetInfo() {
      return tt.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, o) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const o = {
        id: e.id,
        refService: e.refService,
        style: e.style,
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, xt(this.wrapContent(a.jsx(Zt, {})), o);
    }
  };
});
export {
  __tla,
  tt as default
};
