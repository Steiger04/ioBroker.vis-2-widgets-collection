import { c as nt, j as a, g as z, a as E, u as $, b as U, s as P, d as A, e as N, m as H, L as R, f as rt, h as tt, B as it, r as lt, i as G, k as ct, l as K, T as D, t as X, n as B, o as dt, I as pt, P as ut, G as mt, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { C as J, a as et, D as gt, u as yt, g as ft, b as Q, c as vt, d as xt, e as Z, f as bt, w as ht, __tla as __tla_1 } from "./useData-DNdZxCG9.js";
import { u as ot, d as Ct, __tla as __tla_2 } from "./useValueState-CVlBjGB3.js";
import { v as l, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as St, __tla as __tla_4 } from "./Close-DFTQxPaF.js";
import { S as It, __tla as __tla_5 } from "./Slider-ChiXGyym.js";
import { g as jt, l as W, __tla as __tla_6 } from "./listItemTextClasses-NWuPmlTm.js";
import { D as kt, a as wt, b as Pt, __tla as __tla_7 } from "./DialogTitle-DI-6SO5A.js";
import { S as Lt, __tla as __tla_8 } from "./Stack-DkmwyHUs.js";
import { u as Rt, __tla as __tla_9 } from "./useHtmlValue-3ISCcM5X.js";
import { B as At, __tla as __tla_10 } from "./Button-CI-1uWz9.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let at;
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
  })()
]).then(async () => {
  const Tt = nt(a.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function Mt(t) {
    return z("MuiAvatar", t);
  }
  E("MuiAvatar", [
    "root",
    "colorDefault",
    "circular",
    "rounded",
    "square",
    "img",
    "fallback"
  ]);
  const Bt = (t) => {
    const { classes: e, variant: o, colorDefault: n } = t;
    return N({
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
    }, Mt, e);
  }, Ot = P("div", {
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
  })(H(({ theme: t }) => ({
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
  }))), Vt = P("img", {
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
  }), _t = P(Tt, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (t, e) => e.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function Dt({ crossOrigin: t, referrerPolicy: e, src: o, srcSet: n }) {
    const [s, d] = l.useState(false);
    return l.useEffect(() => {
      if (!o && !n) return;
      d(false);
      let r = true;
      const i = new Image();
      return i.onload = () => {
        r && d("loaded");
      }, i.onerror = () => {
        r && d("error");
      }, i.crossOrigin = t, i.referrerPolicy = e, i.src = o, n && (i.srcset = n), () => {
        r = false;
      };
    }, [
      t,
      e,
      o,
      n
    ]), s;
  }
  const $t = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiAvatar"
    }), { alt: s, children: d, className: r, component: i = "div", slots: g = {}, slotProps: f = {}, imgProps: C, sizes: k, src: x, srcSet: b, variant: h = "circular", ...w } = n;
    let u = null;
    const p = {
      ...n,
      component: i,
      variant: h
    }, j = Dt({
      ...C,
      ...typeof f.img == "function" ? f.img(p) : f.img,
      src: x,
      srcSet: b
    }), S = x || b, y = S && j !== "error";
    p.colorDefault = !y, delete p.ownerState;
    const c = Bt(p), [m, v] = U("img", {
      className: c.img,
      elementType: Vt,
      externalForwardedProps: {
        slots: g,
        slotProps: {
          img: {
            ...C,
            ...f.img
          }
        }
      },
      additionalProps: {
        alt: s,
        src: x,
        srcSet: b,
        sizes: k
      },
      ownerState: p
    });
    return y ? u = a.jsx(m, {
      ...v
    }) : d || d === 0 ? u = d : S && s ? u = s[0] : u = a.jsx(_t, {
      ownerState: p,
      className: c.fallback
    }), a.jsx(Ot, {
      as: i,
      className: A(c.root, r),
      ref: o,
      ...w,
      ownerState: p,
      children: u
    });
  });
  function Nt(t) {
    return z("MuiListItem", t);
  }
  E("MuiListItem", [
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
    return z("MuiListItemButton", t);
  }
  const O = E("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), Gt = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters
    ];
  }, Wt = (t) => {
    const { alignItems: e, classes: o, dense: n, disabled: s, disableGutters: d, divider: r, selected: i } = t, f = N({
      root: [
        "root",
        n && "dense",
        !d && "gutters",
        r && "divider",
        s && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        i && "selected"
      ]
    }, Ft, o);
    return {
      ...o,
      ...f
    };
  }, Ut = P(it, {
    shouldForwardProp: (t) => lt(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: Gt
  })(H(({ theme: t }) => ({
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
    [`&.${O.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : G(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${O.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : G(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${O.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : G(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : G(t.palette.primary.main, t.palette.action.selectedOpacity)
      }
    },
    [`&.${O.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    [`&.${O.disabled}`]: {
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
  }))), zt = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: s = "center", autoFocus: d = false, component: r = "div", children: i, dense: g = false, disableGutters: f = false, divider: C = false, focusVisibleClassName: k, selected: x = false, className: b, ...h } = n, w = l.useContext(R), u = l.useMemo(() => ({
      dense: g || w.dense || false,
      alignItems: s,
      disableGutters: f
    }), [
      s,
      w.dense,
      g,
      f
    ]), p = l.useRef(null);
    rt(() => {
      d && p.current && p.current.focus();
    }, [
      d
    ]);
    const j = {
      ...n,
      alignItems: s,
      dense: u.dense,
      disableGutters: f,
      divider: C,
      selected: x
    }, S = Wt(j), y = tt(p, o);
    return a.jsx(R.Provider, {
      value: u,
      children: a.jsx(Ut, {
        ref: y,
        href: h.href || h.to,
        component: (h.href || h.to) && r === "div" ? "button" : r,
        focusVisibleClassName: A(S.focusVisible, k),
        ownerState: j,
        className: A(S.root, b),
        ...h,
        classes: S,
        children: i
      })
    });
  });
  function Et(t) {
    return z("MuiListItemSecondaryAction", t);
  }
  E("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Ht = (t) => {
    const { disableGutters: e, classes: o } = t;
    return N({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, Et, o);
  }, qt = P("div", {
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
  }), st = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: s, ...d } = n, r = l.useContext(R), i = {
      ...n,
      disableGutters: r.disableGutters
    }, g = Ht(i);
    return a.jsx(qt, {
      className: A(g.root, s),
      ownerState: i,
      ref: o,
      ...d
    });
  });
  st.muiName = "ListItemSecondaryAction";
  const Yt = (t, e) => {
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
  }, Kt = (t) => {
    const { alignItems: e, classes: o, dense: n, disableGutters: s, disablePadding: d, divider: r, hasSecondaryAction: i } = t;
    return N({
      root: [
        "root",
        n && "dense",
        !s && "gutters",
        !d && "padding",
        r && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        i && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, Nt, o);
  }, Xt = P("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: Yt
  })(H(({ theme: t }) => ({
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
          [`& > .${O.root}`]: {
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
  }))), Jt = P("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  }), Qt = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItem"
    }), { alignItems: s = "center", children: d, className: r, component: i, components: g = {}, componentsProps: f = {}, ContainerComponent: C = "li", ContainerProps: { className: k, ...x } = {}, dense: b = false, disableGutters: h = false, disablePadding: w = false, divider: u = false, secondaryAction: p, slotProps: j = {}, slots: S = {}, ...y } = n, c = l.useContext(R), m = l.useMemo(() => ({
      dense: b || c.dense || false,
      alignItems: s,
      disableGutters: h
    }), [
      s,
      c.dense,
      b,
      h
    ]), v = l.useRef(null), I = l.Children.toArray(d), L = I.length && ct(I[I.length - 1], [
      "ListItemSecondaryAction"
    ]), T = {
      ...n,
      alignItems: s,
      dense: m.dense,
      disableGutters: h,
      disablePadding: w,
      divider: u,
      hasSecondaryAction: L
    }, q = Kt(T), Y = tt(v, o), F = S.root || g.Root || Xt, V = j.root || f.root || {}, _ = {
      className: A(q.root, V.className, r),
      ...y
    };
    let M = i || "li";
    return L ? (M = !_.component && !i ? "div" : M, C === "li" && (M === "li" ? M = "div" : _.component === "li" && (_.component = "div")), a.jsx(R.Provider, {
      value: m,
      children: a.jsxs(Jt, {
        as: C,
        className: A(q.container, k),
        ref: Y,
        ownerState: T,
        ...x,
        children: [
          a.jsx(F, {
            ...V,
            ...!K(F) && {
              as: M,
              ownerState: {
                ...T,
                ...V.ownerState
              }
            },
            ..._,
            children: I
          }),
          I.pop()
        ]
      })
    })) : a.jsx(R.Provider, {
      value: m,
      children: a.jsxs(F, {
        ...V,
        as: M,
        ref: Y,
        ...!K(F) && {
          ownerState: {
            ...T,
            ...V.ownerState
          }
        },
        ..._,
        children: [
          I,
          p && a.jsx(st, {
            children: p
          })
        ]
      })
    });
  }), Zt = (t) => {
    const { classes: e, inset: o, primary: n, secondary: s, dense: d } = t;
    return N({
      root: [
        "root",
        o && "inset",
        d && "dense",
        n && s && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, jt, e);
  }, te = P("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        {
          [`& .${W.primary}`]: e.primary
        },
        {
          [`& .${W.secondary}`]: e.secondary
        },
        e.root,
        o.inset && e.inset,
        o.primary && o.secondary && e.multiline,
        o.dense && e.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${X.root}:where(& .${W.primary})`]: {
      display: "block"
    },
    [`.${X.root}:where(& .${W.secondary})`]: {
      display: "block"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.primary && t.secondary,
        style: {
          marginTop: 6,
          marginBottom: 6
        }
      },
      {
        props: ({ ownerState: t }) => t.inset,
        style: {
          paddingLeft: 56
        }
      }
    ]
  }), ee = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItemText"
    }), { children: s, className: d, disableTypography: r = false, inset: i = false, primary: g, primaryTypographyProps: f, secondary: C, secondaryTypographyProps: k, slots: x = {}, slotProps: b = {}, ...h } = n, { dense: w } = l.useContext(R);
    let u = g ?? s, p = C;
    const j = {
      ...n,
      disableTypography: r,
      inset: i,
      primary: !!u,
      secondary: !!p,
      dense: w
    }, S = Zt(j), y = {
      slots: x,
      slotProps: {
        primary: f,
        secondary: k,
        ...b
      }
    }, [c, m] = U("root", {
      className: A(S.root, d),
      elementType: te,
      externalForwardedProps: {
        ...y,
        ...h
      },
      ownerState: j,
      ref: o
    }), [v, I] = U("primary", {
      className: S.primary,
      elementType: D,
      externalForwardedProps: y,
      ownerState: j
    }), [L, T] = U("secondary", {
      className: S.secondary,
      elementType: D,
      externalForwardedProps: y,
      ownerState: j
    });
    return u != null && u.type !== D && !r && (u = a.jsx(v, {
      variant: w ? "body2" : "body1",
      component: (I == null ? void 0 : I.variant) ? void 0 : "span",
      ...I,
      children: u
    })), p != null && p.type !== D && !r && (p = a.jsx(L, {
      variant: "body2",
      color: "textSecondary",
      ...T,
      children: p
    })), a.jsxs(c, {
      ...m,
      children: [
        u,
        p
      ]
    });
  }), oe = () => [
    {
      type: "custom",
      component: () => a.jsx(J, {})
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
      component: () => a.jsx(J, {}),
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
  ], se = ({ widgetStates: t, data: e, open: o, closeHandler: n }) => {
    const { widget: s, getPropertyValue: d } = l.useContext(et), r = s.data.oidObject, i = s.data.onlyStates, [g, f] = l.useState(() => {
      const c = d("oid");
      return typeof c == "number" ? c : 0;
    }), { updateValue: C } = ot("oid"), k = l.useMemo(() => {
      const c = r == null ? void 0 : r.commonStates, m = r == null ? void 0 : r.type, v = r == null ? void 0 : r.name, I = r == null ? void 0 : r.minValue, L = r == null ? void 0 : r.maxValue;
      return {
        commonStates: c,
        oidType: m,
        oidName: v,
        minValue: I,
        maxValue: L
      };
    }, [
      r
    ]), x = l.useCallback((c) => {
      C(c);
    }, [
      C
    ]), b = l.useCallback((c, m) => {
      const v = Array.isArray(m) ? m[0] : m;
      f(v), x(v);
    }, [
      x
    ]), h = l.useCallback((c, m) => {
      (m === "backdropClick" || m === "escapeKeyDown") && n();
    }, [
      n
    ]), w = l.useCallback(() => {
      n();
    }, [
      n
    ]), u = l.useCallback((c) => (m) => {
      m.preventDefault();
      const v = Number(c);
      isNaN(v) || f(v), x(c);
    }, [
      x
    ]), p = l.useMemo(() => {
      const { oidType: c, commonStates: m, minValue: v, maxValue: I } = k;
      return c === "number" && !i && v !== void 0 && I !== void 0 ? a.jsx(B, {
        sx: {
          px: 3
        },
        children: a.jsx(It, {
          sx: {
            pb: m ? 4 : 3
          },
          size: "small",
          min: v,
          max: I,
          marks: [
            {
              value: v,
              label: String(v)
            },
            {
              value: I,
              label: String(I)
            }
          ],
          valueLabelDisplay: "auto",
          value: g,
          onChange: b
        })
      }) : null;
    }, [
      k,
      i,
      g,
      b
    ]), j = l.useMemo(() => !t || !Object.keys(t).length ? null : a.jsx(dt, {
      children: Object.entries(t).map(([c, m]) => a.jsx(Qt, {
        disablePadding: true,
        children: a.jsx(zt, {
          onClick: u(c),
          children: a.jsx(ee, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(m)
          })
        })
      }, c))
    }), [
      t,
      u
    ]), S = l.useMemo(() => e.header || k.oidName || "Change Value", [
      e.header,
      k.oidName
    ]), y = l.useMemo(() => t && Object.keys(t).length > 0, [
      t
    ]);
    return a.jsxs(kt, {
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
        a.jsx(wt, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: S
        }),
        a.jsx(pt, {
          "aria-label": "close",
          onClick: w,
          sx: (c) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: c.palette.grey[500]
          }),
          children: a.jsx(St, {})
        }),
        a.jsx(Pt, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(Lt, {
            divider: y && a.jsx(gt, {}),
            spacing: 0,
            component: ut,
            children: [
              p,
              j
            ]
          })
        })
      ]
    });
  };
  function ae() {
    const t = l.useContext(et), { widget: e, theme: o } = t, n = e.data.oidObject, { data: s, widgetStates: d, states: r } = yt("oid"), { value: i, updateValue: g } = ot("oid"), [f, C] = l.useState(false), k = n == null ? void 0 : n.type, x = e.data.onlyStates, b = Rt(i, e, s), h = b != null ? String(b) : "", w = () => {
      const y = e.data.value1;
      x && r.length === 2 && e.data.statePushButton && y !== void 0 && setTimeout(() => g(y), 0);
    }, u = () => {
      const y = e.data.value2;
      x && r.length === 2 && e.data.statePushButton && y !== void 0 && setTimeout(() => g(y), 0);
    }, p = l.useCallback(() => {
      if (!x) {
        C(true);
        return;
      }
      switch (r.length) {
        case 1:
          e.data.value1 !== void 0 && g(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(i) === String(e.data.value1) ? g(e.data.value2) : g(e.data.value1));
          break;
        default:
          C(true);
          break;
      }
    }, [
      i,
      x,
      r.length,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      g
    ]), j = a.jsx(At, {
      disabled: e.data.onlyDisplay,
      onClick: p,
      onMouseDown: w,
      onMouseUp: u,
      onMouseOut: u,
      onTouchStart: w,
      onTouchEnd: u,
      sx: {
        width: "100%",
        height: "100%",
        color: s.iconColor || s.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent"
        }
      },
      children: a.jsxs(B, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !e.data.noIcon && s.icon && (() => {
            const y = s.icon, c = s.iconColor || o.palette.primary.main, m = s.forceColorMask, v = ft(y, c, m);
            return a.jsx(B, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: a.jsx($t, {
                variant: "square",
                src: y || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...v
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
          !e.data.noValue && a.jsx(B, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx(D, {
              component: B,
              variant: "body2",
              sx: {
                fontSize: s.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: Q(s.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: Q(s.textColor) ? "transparent" : s.textColor,
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
    }), S = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(k ?? "");
    return a.jsxs(a.Fragment, {
      children: [
        f && a.jsx(se, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: d,
          open: f,
          closeHandler: () => C(false)
        }),
        a.jsxs(vt, {
          isValidType: S,
          data: s,
          oidValue: i,
          children: [
            a.jsx(xt, {
              data: s,
              widget: e
            }),
            a.jsx(B, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: j
            })
          ]
        })
      ]
    });
  }
  at = class extends mt {
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
              ...Z()
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
              ...Ct(),
              ...oe()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Z({
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
      return at.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ht(this.wrapContent(a.jsx(ae, {})), o);
    }
  };
});
export {
  __tla,
  at as default
};
